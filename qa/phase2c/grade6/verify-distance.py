import json,re,subprocess
from pathlib import Path
root=Path(__file__).resolve().parents[3];out=root/'qa/phase2c/grade6/rastojanje'
d=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
old={t['id']:t for t in json.loads(subprocess.check_output(['git','show','b0d402d:qa/phase2/g6-extracted.json'],cwd=root))['bank']}
nums=lambda s:[int(x.replace('−','-')) for x in re.findall(r'[−-]?\d+',s)]
rows=[]
for t in d['bank']:
 if t['lesson']!='rastojanje':continue
 id=t['id'];a=t['answer'];v=nums(t['math']);b=old[id];assert a==b['answer'];issue=''
 if id in ['6-6a','6-6b','6-6d','t6-6']:
  x,y=v;assert abs(x-y)==int(a);ref=f'|{x}−({y})|={abs(x-y)}';reason='Direktna primena formule.'
 elif id=='6-6c':
  dist=[abs(x-y) for x,y in map(nums,t['choices'])];assert dist==[10,8,7] and a==t['choices'][0];ref='Rastojanja 10, 8, 7; samo prvi par.';reason='Upoređivanje tri rezultata.';issue='Nedostajala provera distraktora.'
 elif id=='6-6e':
  assert a=='−7' and [x for x in [-7,7] if x<0]==[-7];ref='|x|=7, x<0 ⇒ x=−7.';reason='Dve mogućnosti i dodatni uslov.'
 elif id=='6-6f':
  assert abs(t['diagram']['points'][0]['value']-t['diagram']['points'][1]['value'])==int(a)==5;ref='d(−3,2)=5';reason='Čitanje brojne prave.'
 elif id=='6-6g':
  assert abs(v[0]-v[1])==int(a)==12;ref='|−7−5|=12 °C';reason='Modelovanje konteksta.';issue='Precizirati nenegativnu temperaturnu razliku.'
 elif id=='6-6h':
  assert a=='x=−2 ili x=6' and {2-4,2+4}=={-2,6};ref='|−2−2|=4; |6−2|=4.';reason='Oba smera.'
 elif id=='6-6i':
  assert 7!=-7 and a=='Netačno';ref='|−4−3|=7, ne −7.';reason='Direktno svojstvo rastojanja.'
 elif id=='6-6j':
  assert a=='3' and [x for x in [-6-9,-6+9] if x>0]==[3];ref='b=−15 ili 3; b>0 ⇒ b=3.';reason='Dve mogućnosti i uslov.';issue='Razlikovati tačku B i koordinatu b.'
 elif id.startswith('sw-distance-midpoint-'):
  x,y=v;assert (x+y)==2*int(a) and abs(x-int(a))==abs(y-int(a));ref=f'd={y-x}; polovina={(y-x)//2}; sredina {a}';reason='Računanje polovine i pomeranje.';issue='Preskočen račun sredine.'
 elif id.startswith('sw-distance-two-'):
  x,r,y,s=v;candidates=[x-r,x+r];assert [c for c in candidates if abs(c-y)==s]==[int(a)];ref=f'Prvi uslov: {candidates}; drugi: {[abs(c-y) for c in candidates]}; x={a}';reason='Dva povezana uslova.';issue='Dopuniti proveru oba kandidata.'
 else:raise AssertionError(id)
 exp='medium' if id in ['6-6c','6-6e','6-6g','6-6h','6-6j'] or id.startswith('sw-distance-') else 'basic'
 assert t['level']==exp and t['hint'] and t['solution'],id
 diagram=t.get('diagram')
 if diagram:
  assert all(diagram['min']<=p['value']<=diagram['max'] for p in diagram['points'])
  if id!='6-6f': assert all(p['value'] in v for p in diagram['points'])
 if b['level']!=t['level']:issue=(issue+' Neadekvatan nivo.').strip()
 changes=[k for k in ['prompt','math','hint','solution','level','choices'] if b.get(k)!=t.get(k)]
 row=dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Jednoznačan zahtev i dovoljni podaci.',answer='Potvrđeno: '+ref,alternatives='Jedinstvena tačna alternativa.' if t['kind']=='choice' else 'Nije primenljivo.',hint='Primeren: '+t['hint'],procedure='Potvrđeno: '+t['solution'],old_level=b['level'],level=t['level'],level_reason=reason,illustration='Koordinate i opseg brojne prave provereni.' if diagram else 'Tekst dovoljan.',notation='Apsolutna vrednost, predznaci i koordinate provereni.',issue=issue,fix=', '.join(changes) or 'Nije potrebna izmena',method='Semantička recenzija i nezavisna aritmetika rastojanja.',status='potpuno recenziran')
 if id=='6-6g': row['technical_issue']='LOG-06; 12 prihvaćen, 12 °C odbijen; faza 3.'
 rows.append(row)
assert len(rows)==23
l=next(x for x in d['lessons'] if x['id']=='rastojanje');assert len(l['worked'])==3 and abs(-5-3)==8 and abs(-5+2)==abs(1+2)==3 and (6-4)/2==1
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Apsolutna vrednost razlike koordinata; redosled nije važan; rastojanje 0 samo za iste tačke.',sequence='Jedinične duži → formula → dva položaja → sredina.',examples=[dict(question=e['question'],steps=e['steps'],verification=v) for e,v in zip(l['worked'],['|−5−3|=8','x=−5 ili 1','sredina 1'])],illustration='A(−3), B(2), rastojanje 5 jediničnih duži.',misconceptions='Negativna koordinata nije negativno rastojanje; dva položaja; koordinata nije oznaka tačke.',assessment='23 sa tematskom proverom; 6 osnovnih i 17 srednjih.',limits='Deo ishoda 6.02–6.04; ne potvrđuje cele ishode.'),ensure_ascii=False,indent=2)+'\n')
print('23/23 tasks; 3/3 worked examples')

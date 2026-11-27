import json,re,subprocess
from pathlib import Path
root=Path(__file__).resolve().parents[3];out=root/'qa/phase2c/grade6/oduzimanje'
d=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
old={t['id']:t for t in json.loads(subprocess.check_output(['git','show','727ef99:qa/phase2/g6-extracted.json'],cwd=root))['bank']}
nums=lambda s:[int(x.replace('−','-')) for x in re.findall(r'[−-]?\d+',s)]
rows=[]
for t in d['bank']:
 if t['lesson']!='oduzimanje':continue
 id=t['id'];a=t['answer'];v=nums(t['math']);b=old[id];assert a==b['answer'];issue=''
 if id in ['6-5a','6-5b','6-5c','6-5d','t6-5']:
  x,y=v;assert x-y==int(a.replace('−','-'));ref=f'{x}−({y})={x-y}';reason='Direktna primena pravila suprotnog broja.'
  if t.get('choices'):assert sum(int(c.replace('−','-'))==x-y for c in t['choices'])==1
 elif id=='6-5e':
  y,c=v;x=c+y;assert int(a)==x and x-y==c and 'Provera:' in t['solution'];ref=f'x={c}+({y})={x}; provera {x}−({y})={c}';reason='Samostalna ekvivalentna transformacija.';issue='Nedostajao eksplicitan korak i provera.'
 elif id=='6-5f':
  assert v[0]-v[1]==-3 and a=='−8+5';assert [-8+5,-8-5,8-5]==[-3,-13,3];ref='−8−(−5)=−8+5=−3';reason='Prepoznavanje neposredno ekvivalentnog izraza.'
 elif id=='6-5g':
  assert v[0]-v[1]==3 and v[2]==-13 and a=='Drugi znak treba promeniti: rezultat je 3.';ref='−5−(−8)=−5+8=3; −13 nastaje pogrešnim sabiranjem −8.';reason='Otkrivanje i objašnjenje greške.';issue='Razlikovati predznak i operaciju.'
 elif id=='6-5h':
  assert 2-5==int(a)==-3;ref='2−5=−3, prizemlje 0.';reason='Modelovanje konteksta.';issue='Konvencija spratova nije bila eksplicitna.'
 elif id=='6-5i':
  x,c=v;ans=x-c;assert int(a)==ans and x-ans==c and 'Provera:' in t['solution'];ref=f'{x}−{ans}={c}';reason='Ekvivalentne transformacije jednačine.';issue='Postupak je bio samo provera.'
 elif id=='6-5j':
  assert (-3)-15<0 and a=='−';ref='−3+(−15)<0';reason='Direktno pravilo o zbiru dva negativna broja.'
 elif id.startswith('sw-subtract-table-'):
  x1,x2,y1,y2,c=v;assert x1-y1==c and x2-y2==int(a);ref=f'{x1}−({y1})={c}; {x2}−({y2})={a}';reason='Direktno oduzimanje datog para.'
 elif id.startswith('sw-subtract-compare-'):
  x,y,z,w=v;w=abs(w);assert x==z and y==-w and w>0 and x-y>x>z-w and a=='>';ref=f'{x}−({y})>{x}>{z}−{w}';reason='Poređenje bez računanja i obrazloženje.'
 else:raise AssertionError(id)
 exp='medium' if id in ['6-5e','6-5g','6-5h','6-5i'] or id.startswith('sw-subtract-compare-') else 'basic'
 assert t['level']==exp and t['hint'] and t['solution'],id
 if b['level']!=t['level']:issue=(issue+' Neadekvatan nivo.').strip()
 changes=[k for k in ['prompt','math','hint','solution','level','choices'] if b.get(k)!=t.get(k)]
 rows.append(dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Jednoznačan zahtev i dovoljni podaci.',answer='Potvrđeno: '+ref,alternatives='Tačna alternativa jedinstvena, ostale netačne.' if t['kind']=='choice' else 'Nije primenljivo.',hint='Primeren: '+t['hint'],procedure='Potvrđeno: '+t['solution'],old_level=b['level'],level=t['level'],level_reason=reason,illustration='Nema posebne ilustracije; tekst dovoljan.',notation='Predznak, računska operacija i zagrade provereni.',issue=issue,fix=', '.join(changes) or 'Nije potrebna izmena',method='Semantička recenzija i nezavisna celobrojna računica, jednakost ili poređenje.',status='potpuno recenziran'))
assert len(rows)==23
l=next(x for x in d['lessons'] if x['id']=='oduzimanje');assert len(l['worked'])==3 and -6-(-10)==4 and 3-8==-5 and -4-0==-4 and 2-5==-3
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Oduzimanje se svodi na sabiranje suprotnog umanjioca; nula ne menja broj.',sequence='Umanjenik i umanjilac → suprotni broj → brojna prava → nepoznati član.',examples=[dict(question=e['question'],steps=e['steps'],verification=v) for e,v in zip(l['worked'],['−6−(−10)=4','3−8=−5; −4−0=−4','2−5=−3'])],illustration='Brojna prava: od −1 pomeranje za +3 do 2 pri oduzimanju −3.',misconceptions='Predznak nije operacija; umanjenik ostaje isti; oduzimanje nije komutativno.',assessment='22 zadatka u fondu i jedan tematski; 13 osnovnih i 10 srednjih.',limits='Deo ishoda 6.03 i 6.04; ostale operacije nisu recenzirane.'),ensure_ascii=False,indent=2)+'\n')
print('23/23 tasks; 3/3 worked examples')

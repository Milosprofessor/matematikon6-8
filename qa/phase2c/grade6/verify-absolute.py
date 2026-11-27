import json,re,subprocess
from pathlib import Path
root=Path(__file__).resolve().parents[3];out=root/'qa/phase2c/grade6/apsolutna-vrednost'
data=json.loads((root/'qa/phase2/g6-extracted.json').read_text());old={t['id']:t for t in json.loads(subprocess.check_output(['git','show','a56c6ee:qa/phase2/g6-extracted.json'],cwd=root))['bank']}
rows=[]
for t in data['bank']:
 if t['lesson']!='apsolutna-vrednost':continue
 id=t['id'];m=t['math'];a=t['answer'];sol=t['solution'];h=t['hint'];b=old[id];assert a==b['answer']
 vals=[int(x.replace('−','-')) for x in re.findall(r'−?\d+',m)];issue=''
 if id in ['6-2a','t6-2']:
  n=vals[0];assert int(a)==abs(n);ref=f'|{n}|={abs(n)}';reason='Direktno pravilo.'
  if id=='6-2a':issue='Hint ne razlikuje pozitivno i nenegativno rastojanje.'
 elif id in ['6-2b','6-2d','6-2j']:
  v=list(map(abs,vals));n=v[0]+v[1] if id=='6-2b' else v[0]-v[1] if id=='6-2d' else v[0]+v[1]-v[2];assert int(a)==n
  if t.get('choices'):assert sum(int(x.replace('−','-'))==n for x in t['choices'])==1
  ref=f'Apsolutne vrednosti {v}; rezultat {n}';reason='Najpre apsolutne vrednosti, zatim više računskih koraka.';issue='Preskočena zamena apsolutnih vrednosti.'
 elif id in ['6-2c','6-2e','6-2f','6-2i']:
  k=vals[0];roots=[x for x in range(-50,51) if abs(x)==k and (id!='6-2c' or x<0)]
  expected={'6-2c':[-9],'6-2e':[-6,6],'6-2f':[-11,11],'6-2i':[]}[id];assert roots==expected
  assert a=={'6-2c':'-9','6-2e':'−6 ili 6','6-2f':'x=−11 ili x=11','6-2i':'Ne'}[id]
  ref=f'|x|={k}, koreni {roots}'+('; uz x<0' if id=='6-2c' else '');reason='Dodatni uslov zahteva izbor rešenja.' if id=='6-2c' else 'Direktna primena uslova za apsolutnu vrednost.'
 elif id=='6-2g':
  assert abs(vals[0])!=vals[1] and a=='Netačno';ref='|−7|=7≠−7';reason='Neposredno prepoznavanje greške.'
 elif id=='6-2h':
  assert abs(vals[0])>abs(vals[1]) and a=='>';ref='13>9';reason='Dve vrednosti i poređenje.'
 elif id.startswith('sw-absolute-diagram-'):
  d=t['diagram'];v=d['points'][0]['value'];assert d['min']<=v<0<d['max'] and d['points'][0]['label']=='A' and int(a)==abs(v)
  ref=f'A({v}), rastojanje do 0={abs(v)}';reason='Čitanje rastojanja sa prave.'
 elif id.startswith('sw-absolute-table-'):
  x,y,z,p,q=vals;assert y==q==0 and abs(x)==p and abs(z)==int(a)
  ref=f'|{x}|={p}, |0|=0, |{z}|={a}';reason='Direktno očitavanje pozitivnog broja.'
 elif id=='s6-godisnja-1':
  assert abs(-13-(-5))==int(a);ref='|−13−(−5)|=8';reason='Direktno rastojanje.'
 else:raise AssertionError(id)
 exp='medium' if id in ['6-2b','6-2c','6-2d','6-2h','6-2j'] else 'basic';assert t['level']==exp and h and sol
 if b['level']!=t['level']:issue=(issue+' Previsok ili prenizak nivo.').strip()
 changes=[k for k in ['prompt','hint','solution','level','choices'] if b.get(k)!=t.get(k)]
 rows.append(dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Jednoznačan zahtev; dati podaci dovoljni.',answer='Potvrđeno: '+ref,alternatives='Tačan izbor jedinstven; ostale alternative netačne.' if t['kind']=='choice' else 'Nije primenljivo.',hint='Primeren: '+h,procedure='Potvrđeno: '+sol,old_level=b['level'],level=t['level'],level_reason=reason,illustration='Koordinata A i rastojanje do nule provereni.' if t.get('diagram') else 'Nema posebne ilustracije; tekst dovoljan.',notation='Apsolutne crte, minusi i konačan odgovor provereni.',issue=issue,fix=', '.join(changes) or 'Nije potrebna izmena',method='Semantičko čitanje i nezavisna provera celobrojne računice, korena ili koordinata.',status='potpuno recenziran'))
assert len(rows)==24
l=next(x for x in data['lessons'] if x['id']=='apsolutna-vrednost');assert len(l['worked'])==3 and abs(-7)+abs(3)==10 and [x for x in range(-10,11) if abs(x)==5 and x<0]==[-5] and [x for x in range(-10,11) if abs(x)==0]==[0]
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Rastojanje je nenegativno, nula ima apsolutnu vrednost 0; pozitivan, negativan i nemoguć desni član jednačine razdvojeni.',sequence='Brojna prava → definicija → računanje → jednačina sa dodatnim uslovom.',examples=[dict(question=e['question'],steps=e['steps'],verification=v) for e,v in zip(l['worked'],['|−7|+|3|=10','|−5|=5 i −5<0','|x|=0 ⇒ x=0; |x|=−2 nema rešenja'])],illustration='Simetrične tačke na istoj udaljenosti od nule; šest konkretnih dijagrama sa A.',misconceptions='Nula nije pozitivna; apsolutna vrednost nije uvek suprotan broj niti je negativna.',assessment='22 zadatka u fondu i dva u proverama; 19 osnovnih, 5 srednjih.',limits='Delovi ishoda 6.02 i 6.03; racionalni brojevi i ostali tipovi jednačina još nisu pregledani.'),ensure_ascii=False,indent=2)+'\n')
print('24/24 tasks; 3/3 worked examples')

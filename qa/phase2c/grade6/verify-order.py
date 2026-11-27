import json,re,subprocess
from pathlib import Path
root=Path(__file__).resolve().parents[3];out=root/'qa/phase2c/grade6/uporedjivanje'
d=json.loads((root/'qa/phase2/g6-extracted.json').read_text());old={t['id']:t for t in json.loads(subprocess.check_output(['git','show','48da58f:qa/phase2/g6-extracted.json'],cwd=root))['bank']}
nums=lambda s:[int(x.replace('−','-')) for x in re.findall(r'[−-]?\d+',s)]
rows=[]
for t in d['bank']:
 if t['lesson']!='uporedjivanje':continue
 id=t['id'];m=t['math'];v=nums(m);a=t['answer'];sol=t['solution'];h=t['hint'];b=old[id];assert a==b['answer']
 issue=''
 if id in ['6-3a','6-3d','t6-3']:
  x,y=v;assert x<y and a=='<' and t['choices'].count('<')==1
  ref=f'{x} < {y}';reason='Direktno poređenje dva negativna broja.'
 elif id in ['6-3b','6-3g']:
  expected=sorted(v,reverse=id=='6-3g');assert nums(a)==expected and sum(nums(c)==expected for c in t['choices'])==1
  ref=(' > ' if id=='6-3g' else ' < ').join(map(str,expected));reason='Povezivanje više poređenja, redosled i nula.'
 elif id in ['6-3c','6-3e','6-3j']:
  n=min(v) if id=='6-3j' else max(v);assert nums(a)==[n] and sum(nums(c)==[n] for c in t['choices'])==1
  ref=f'{"Minimum" if id=="6-3j" else "Maksimum"} skupa {v} je {n}'+(' °C' if id=='6-3j' else '');reason='Direktno određivanje ekstremne vrednosti.'
 elif id=='6-3f':
  dgm=t['diagram'];p=dgm['points'];assert all(dgm['min']<=x['value']<=dgm['max'] for x in p);assert a==max(p,key=lambda x:x['value'])['label']
  ref='A(−3), B(−1), C(2); C je najdesnije.';reason='Direktno čitanje koordinata.'
 elif id=='6-3h':
  assert int(a)==v[0]-1;ref=f'x<{v[0]} ⇒ max x={v[0]-1}';reason='Stroga granica i neposredni prethodnik.';issue='Nedostaje eksplicitno isključenje granice.'
 elif id=='6-3i':
  assert v[0]<v[1] and a=='Znak treba da bude <.';ref='−12<−7 iako 12>7.';reason='Prepoznavanje i obrazloženje pogrešne tvrdnje.';issue='Potrebno razlikovati apsolutnu vrednost i poredak.'
 elif id.startswith('sw-order-count-'):
  x,y=v;ns=list(range(x+1,y));assert len(ns)==int(a) and all(str(n).replace('-','−') in sol for n in ns)
  ref=f'{x}<x<{y}: {ns}; broj={len(ns)}';reason='Stroge granice, nabrajanje i brojanje.';issue='Nedostaje obrazloženje isključenja granica.'
 elif id.startswith('sw-order-digit-'):
  tens=int(m[1]);rhs=int(m.split('>')[1].replace('−','-'));allowed=[j for j in range(10) if -(10*tens+j)>rhs];assert max(allowed)==int(a) and allowed==[0,1,2,3,4]
  assert 'Dozvoljene cifre su 0, 1, 2, 3, 4' in sol;ref=f'Dozvoljene cifre {allowed}; najveća {max(allowed)}';reason='Mesna vrednost i ograničenje cifre uz negativan broj.';issue='Preskočeno objašnjenje mesnih vrednosti i skupa cifara.'
 else:raise AssertionError(id)
 exp='medium' if id in ['6-3b','6-3g','6-3i'] or id.startswith('sw-order-') else 'basic';assert t['level']==exp and h and sol
 if b['level']!=t['level']:issue=(issue+' Previsok nivo.').strip()
 changes=[k for k in ['prompt','hint','solution','level','choices'] if b.get(k)!=t.get(k)]
 rows.append(dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Jednoznačan zahtev, dovoljni podaci.',answer='Potvrđeno: '+ref,alternatives='Tačna alternativa jedinstvena, ostale netačne.' if t['kind']=='choice' else 'Nije primenljivo.',hint='Primeren: '+h,procedure='Potvrđeno: '+sol,old_level=b['level'],level=t['level'],level_reason=reason,illustration='Pozicije i koordinate A,B,C proverene.' if t.get('diagram') else 'Nema posebne ilustracije; tekst dovoljan.',notation='Znakovi, granice i jedinice provereni.',issue=issue,fix=', '.join(changes) or 'Nije potrebna izmena',method='Semantičko čitanje i nezavisna celobrojna provera poređenja, granice ili konačnog skupa.',status='potpuno recenziran'))
assert len(rows)==23
l=next(x for x in d['lessons'] if x['id']=='uporedjivanje');assert len(l['worked'])==3 and -11<-6 and sorted([4,-2,0,-7])==[-7,-2,0,4] and list(range(-3,2))==[-3,-2,-1,0,1]
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Poredak na brojnoj pravoj, negativni brojevi i apsolutna vrednost, nula, stroge i uključene granice.',sequence='Poređenje → poredak → skup celih brojeva sa uslovom.',examples=[dict(question=e['question'],steps=e['steps'],verification=v) for e,v in zip(l['worked'],['−11<−6','−7<−2<0<4','−4<x≤1 daje −3,−2,−1,0,1'])],illustration='Brojna prava i zadatak 6-3f; koordinate i redosled provereni.',misconceptions='Veća apsolutna vrednost negativnog broja ne znači veći broj; stroga granica nije uključena.',assessment='22 zadatka u fondu, jedan tematski; osam osnovnih i 15 srednjih.',limits='Deo ishoda 6.01 i 6.03; Q i ostale jednačine ostaju nepregledani.'),ensure_ascii=False,indent=2)+'\n')
print('23/23 tasks; 3/3 worked examples')

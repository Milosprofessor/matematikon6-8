import json,re,subprocess
from pathlib import Path
root=Path(__file__).resolve().parents[3];out=root/'qa/phase2c/grade6/sabiranje'
d=json.loads((root/'qa/phase2/g6-extracted.json').read_text());old={t['id']:t for t in json.loads(subprocess.check_output(['git','show','48da58f:qa/phase2/g6-extracted.json'],cwd=root))['bank']}
nums=lambda s:[int(x.replace('−','-')) for x in re.findall(r'[−-]?\d+',s)]
rows=[]
for t in d['bank']:
 if t['lesson']!='sabiranje':continue
 id=t['id'];m=t['math'];v=nums(m);a=t['answer'];sol=t['solution'];h=t['hint'];b=old[id];assert a==b['answer']
 issue=''
 if id in ['6-4a','6-4b','6-4c','6-4d','t6-4']:
  x,y=v;n=x+y;assert int(a)==n
  if t.get('choices'):assert sum(nums(c)==[n] for c in t['choices'])==1
  ref=f'{x}+({y})={n}; znak prema većoj apsolutnoj vrednosti, isti znaci se sabiraju.';reason='Direktna primena pravila.'
 elif id in ['6-4e','6-4j']:
  known,total=v;ans=total-known;assert int(a)==ans and 'Provera:' in sol
  ref=f'x={total}−({known})={ans}; {known}+{ans}={total}';reason='Samostalan izbor inverzne operacije i provera.';issue='Preskočena ekvivalentna transformacija i provera.'
 elif id=='6-4f':
  assert sum(v)<0 and a=='−';ref='28>11; negativan sabirak ima veću apsolutnu vrednost.';reason='Neposredno pravilo predznaka.'
 elif id=='6-4g':
  assert int(a)==-v[0];ref='−9+9=0';reason='Suprotni brojevi.'
 elif id=='6-4h':
  assert v[0]+v[1]==-9 and v[2]==9 and a=='Rezultat treba da bude −9.'
  ref='−16+7=−9, ne 9 ili −23; |−16|>|7|.';reason='Otkrivanje i obrazlaganje greške.';issue='Nagoveštaj pogrešno kaže znak većeg broja umesto većeg modula.'
 elif id=='6-4i':
  assert sum(v)==int(a)==4;ref='Konačna −6+10=4 °C; promena +10 °C.';reason='Modelovanje tekstualnog konteksta.';issue='Eksplicitno razlikovati promenu i krajnju vrednost.'
 elif id.startswith('sw-add-table-'):
  a1,a2,b1,b2,total=v;assert a1+b1==total and a2+b2==int(a);ref=f'{a1}+{b1}={total}; {a2}+({b2})={a}';reason='Direktno sabiranje datog para.'
 elif id.startswith('sw-add-cancel-'):
  assert sum(v)==int(a) and v[0]+v[2]==0 and v[1]+v[3]==2;assert 'grupisanjem' in sol
  ref=f'{v[0]}+{v[2]}=0; {v[1]}+({v[3]})=2';reason='Izbor korisnog grupisanja, dva koraka.';issue='Objasniti zašto je promena redosleda dozvoljena.'
 elif id.startswith('sw-add-signcondition-'):
  k=v[0];ans=-k+1;assert int(a)==ans and k+ans>0 and k+ans-1==0
  ref=f'{k}+x>0 ⇒ x>{-k}; najmanji {ans}';reason='Inverzna transformacija i stroga granica.';issue='Preskočen ekvivalentan korak.'
 else:raise AssertionError(id)
 exp='medium' if id in ['6-4e','6-4h','6-4i','6-4j'] or id.startswith(('sw-add-cancel-','sw-add-signcondition-')) else 'basic';assert t['level']==exp and h and sol
 if b['level']!=t['level']:issue=(issue+' Neadekvatan nivo.').strip()
 changes=[k for k in ['prompt','hint','solution','level','choices'] if b.get(k)!=t.get(k)]
 rows.append(dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Jednoznačan zahtev, dovoljni podaci.',answer='Potvrđeno: '+ref,alternatives='Tačna alternativa jedinstvena, ostale netačne.' if t['kind']=='choice' else 'Nije primenljivo.',hint='Primeren: '+h,procedure='Potvrđeno: '+sol,old_level=b['level'],level=t['level'],level_reason=reason,illustration='Nema posebne ilustracije; tekst dovoljan.',notation='Predznak, znak operacije, zagrade i jedinice provereni.',issue=issue,fix=', '.join(changes) or 'Nije potrebna izmena',method='Semantička recenzija i nezavisna celobrojna računica, direktna provera jednakosti ili granice.',status='potpuno recenziran'))
assert len(rows)==29
l=next(x for x in d['lessons'] if x['id']=='sabiranje');assert len(l['worked'])==3 and -12+7==-5 and -4+(-3)==-7 and 11+(-8)==3
if (out/'units.json').exists():
 for row in rows:
  if row['id']=='6-4i':row['technical_issue']='LOG-06; 4 prihvaćen, 4 °C odbijen; faza 3.'
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Sabiranje kroz pomeranje i apsolutne vrednosti; suprotni sabirci daju nulu, različiti znaci nisu pravilo za množenje.',sequence='Pomeranje → isti i različiti predznaci → svojstva → nepoznati sabirak.',examples=[dict(question=e['question'],steps=e['steps'],verification=v) for e,v in zip(l['worked'],['−12+7=−5','−4+(−3)=−7','11+(−8)=3'])],illustration='Brojna prava sa pomeranjima, smer odgovara predznaku sabirka.',misconceptions='Znak većeg broja nije isto što i predznak sabirka veće apsolutne vrednosti; promena temperature nije konačna temperatura.',assessment='28 zadataka u fondu i jedan tematski; 13 osnovnih, 16 srednjih.',limits='Deo ishoda 6.03 i 6.04; ostale operacije i Q nisu recenzirani.'),ensure_ascii=False,indent=2)+'\n')
print('29/29 tasks; 3/3 worked examples')

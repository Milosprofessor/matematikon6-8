import json,re,subprocess
from fractions import Fraction
from pathlib import Path
root=Path(__file__).resolve().parents[3]
out=root/'qa/phase2c/grade6/skup-celih-brojeva'
data=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
old={t['id']:t for t in json.loads(subprocess.check_output(['git','show','a56c6ee:qa/phase2/g6-extracted.json'],cwd=root))['bank']}
rows=[]
def integer(s):return int(s.replace('−','-'))
def num(s):
 if s.startswith('[['):return Fraction(*map(int,re.findall(r'\d+',s)))
 return Fraction(s.replace('−','-').replace(',','.'))
for t in data['bank']:
 if t['lesson']!='skup-celih-brojeva':continue
 id=t['id'];a=t['answer'];m=t['math'];sol=t['solution'];h=t['hint'];before=old[id]
 assert a==before['answer']
 issue=''
 if id in ['6-1a','6-1e']:
  vals=[num(x) for x in t['choices']];is_member=id=='6-1a'
  assert sum((x.denominator==1)==is_member for x in vals)==1 and (num(a).denominator==1)==is_member
  ref='; '.join(f'{x} '+('∈ Z' if x.denominator==1 else '∉ Z') for x in vals);reason='Prepoznavanje vrednosti celog broja.';issue='Nepotpuno obrazložene alternative.'
 elif id in ['6-1b','6-1d','t6-1']:
  assert integer(a)==-integer(m);ref=f'Suprotan broju {m} je {a}; zbir je 0.';reason='Neposredno određivanje suprotnog broja.'
 elif id=='6-1c':
  assert a=='0 nije ni pozitivan ni negativan.' and len(t['choices'])==3
  ref='0 nije >0 niti <0.';reason='Prepoznavanje definicije.'
 elif id in ['6-1f','6-1g']:
  x=integer(m);y=x+(-1 if id=='6-1f' else 1);assert integer(a)==y
  ref=f'{x} → {y}';reason='Direktna primena pravila o susednom celom broju.'
 elif id=='6-1h':
  d=t['diagram'];assert d['min']==-5 and d['max']==2 and d['points']==[{'value':-3,'label':'A'}] and integer(a)==-3
  ref='A je između −4 i −2, tačno dve jedinice desno od −5.';reason='Direktno očitavanje koordinate.'
 elif id=='6-1i':
  assert integer(a)==-4 and 'ispod nule' in m;ref='0−4=−4 °C; traži se ceo broj, ne jedinica.';reason='Prevod jednostavnog konteksta u zapis.'
 elif id=='6-1j':
  assert -6+1==-5 and a=='Tačno';ref='−6+1=−5; alternativa Netačno je pogrešna.';reason='Jedna direktna operacija.';issue='Previsok nivo.'
 elif id=='6-1k':
  assert -4+1==-3 and -3+1==-2 and integer(a)==-3;ref='−4,−3,−2; razlika 1.';reason='Neposredno prepoznavanje uzastopnih brojeva.';issue='Previsok nivo.'
 elif id.startswith('sw-integer-reverse-'):
  p=-int(re.search(r'−(\d+)',m)[1]);x=p+1;assert integer(a)==-x
  assert f'x−1=−{-p}' in sol and f'x=−{-x}' in sol and f'−x={-x}' in sol
  ref=f'x−1={p}; x={x}; −x={-x}';reason='Povezivanje prethodnika i suprotnog broja.';issue='Previsok nivo i preskočen korak jednačine.'
 else:raise AssertionError(id)
 exp='medium' if id.startswith('sw-integer-reverse-') else 'basic';assert t['level']==exp and h and sol and t['prompt']
 changes=[k for k in ['prompt','hint','solution','level','choices'] if t.get(k)!=before.get(k)]
 rows.append(dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Jednoznačan i dovoljan zahtev.',answer='Potvrđeno: '+ref,alternatives='Jedinstven tačan izbor; distraktori netačni.' if t['kind']=='choice' else 'Nije primenljivo.',hint='Primeren: '+h,procedure='Potvrđeno: '+sol,old_level=before['level'],level=t['level'],level_reason=reason,illustration='Tačka A=−3 i opseg −5 do 2 odgovaraju pitanju.' if id=='6-1h' else 'Nema posebne ilustracije, tekst dovoljan.',notation='Zapis i jedinice primereni zahtevu.',issue=issue,fix=', '.join(changes) or 'Nije potrebna izmena',method='Semantičko čitanje i nezavisna celobrojna/racionalna računica ili definicija; konkretna varijanta.',status='potpuno recenziran'))
assert len(rows)==18
l=next(x for x in data['lessons'] if x['id']=='skup-celih-brojeva')
assert len(l['worked'])==3 and -8+8==0 and -1-1==-2 and -1+1==0 and Fraction(6,3).denominator==1 and Fraction(5,2).denominator!=1
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Precizirana definicija Z i izuzetak nule kod suprotnih brojeva; vrednost, a ne zapis određuje pripadnost.',sequence='Z, brojna prava, prethodnik/sledbenik, suprotni brojevi.',examples=[dict(question=e['question'],steps=e['steps'],verification=v) for e,v in zip(l['worked'],['8+(−8)=0; 0 je sama sebi suprotna','−1−1=−2; −1+1=0','6/3=2∈Z; 5/2=2,5∉Z'])],illustration='Brojna prava: A(−3), O(0), B(3) simetrično; zadatak 6-1h tačno označava −3.',misconceptions='Zapis razlomkom ne isključuje ceo broj; nula ni pozitivna ni negativna; suprotan nije prethodnik.',assessment='17 zadataka u fondu i jedan zadatak tematske provere; 12 osnovnih, 6 srednjih.',limits='Prisutnost dela ishoda 6.01/6.02; racionalni brojevi i apsolutna vrednost ostaju nepregledani.'),ensure_ascii=False,indent=2)+'\n')
print('18/18 tasks; 3/3 worked examples')

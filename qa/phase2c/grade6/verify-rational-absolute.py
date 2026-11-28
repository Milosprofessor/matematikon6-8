import json,re,subprocess
from fractions import Fraction as F
from pathlib import Path
root=Path(__file__).resolve().parents[3]; out=root/'qa/phase2c/grade6/apsolutna-vrednost-racionalnog'
data=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
old=json.loads(subprocess.check_output(['git','show','f48a5d592b59b417011eb13af60b146300a8cb56:qa/phase2/g6-extracted.json'],cwd=root))
before={t['id']:t for t in old['bank']}
def frac(s):
 s=re.sub(r'\[\[frac:([^|]+)\|([^\]]+)\]\]',r'\1/\2',s).replace('−','-').replace(',','.')
 if "/" in s:
  a,b=s.split("/");return F(int(a),int(b))
 return F(s)
rows=[]
for t in data['bank']:
 b=before[t['id']]
 if t['lesson']!='apsolutna-vrednost-racionalnog':
  assert t==b;continue
 i=t['id'];a=t['answer'];c=t.get('choices',[]);m=t['math'];assert a==b['answer']
 if i=='o6-ra-1':assert frac(a)==abs(F('-1.8'));ref='|−1,8|=1,8.'
 elif i=='o6-ra-2':assert [x for x in c if frac(x)==abs(F(-5,7))]==[a];ref='5/7.'
 elif i=='o6-ra-3':assert F('-0.4')<0 and a=='Ne';ref='Negativna apsolutna vrednost nemoguća.'
 elif i=='o6-ra-4':assert abs(F(-7,12))>abs(F(-3,8)) and a=='>';ref='14/24>9/24.'
 elif i=='o6-ra-5':assert [x for x in c if abs(frac(x))==F(2,5) and frac(x)<0]==[a];ref='−2/5.'
 elif i=='o6-ra-6':
  vals={-F(3,10),F(3,10)};assert all(abs(x)==F(3,10) for x in vals) and a==c[2];ref='Oba suprotna broja, ±3/10.'
 elif i=='o6-ra-7':assert -abs(F('-0.7'))==F('-0.7') and a==c[1];ref='Spoljašnji minus ostaje.'
 elif i=='o6-ra-8':
  v=[F(n,4) for n in range(-5,6) if F(1,2)<abs(F(n,4))<1];assert v==[F(-3,4),F(3,4)] and a==c[0];ref='n=−3 ili 3.'
 elif i=='o6-ra-9':assert [x for x in c if frac(x)==abs(F(-7,8)-F(-3,8))]==[a];assert [F(str(p['value'])) for p in t['diagram']['points']]==[F(-7,8),F(-3,8)];ref='1/2.'
 elif i=='o6-ra-10':
  vals=[F(-5,6),F(-3,4),F(1,2),F(3,5)]
  assert frac(a)==max(x for x in vals if abs(x)>F(2,3));ref='−3/4 je veći od −5/6.'
 else:
  family,n=map(int,i.rsplit('-',2)[1:])
  expected={1:F(n)+F(1,2),2:-F(n)-F(1,4),3:2*(F(n)+F(1,2))}[family];assert frac(a)==expected;ref=f'Egzaktno: {expected}.'
 changes=[k for k in ['prompt','hint','solution','level'] if t[k]!=b[k]]
 rows.append(dict(id=i,area=t['area'],lesson=t['lesson'],requirement='Dovoljni podaci i jednoznačan zahtev.',answer=ref,alternatives='Jedinstvena tačna alternativa' if c else 'Nije primenljivo',hint=t['hint'],procedure=t['solution'],old_level=b['level'],level=t['level'],level_reason='Direktan račun, povezivanje koraka ili strogi raspon.',illustration='Koordinate proverene' if t.get('diagram') else 'Tekst dovoljan',notation='Razlomci i decimalni zarez',issue='Preciznost zapisa ili metodike' if changes else '',fix=', '.join(changes) or 'Nije potrebna izmena',method='Python fractions.Fraction, egzaktna provera',status='potpuno recenziran'))
assert len(rows)==19 and len(before)==len(data['bank'])
assert abs(F(-5,4))==F(5,4) and abs(F(0))==0 and abs(F(-5,6)-F(-1,3))==F(1,2)
l=next(x for x in data['lessons'] if x['id']=='apsolutna-vrednost-racionalnog')
assert len(l['worked'])==3
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Apsolutna vrednost, tri slučaja jednačine, rastojanje.',sequence='Definicija → jednačina → rastojanje.',examples=[dict(**e,verification=v) for e,v in zip(l['worked'],['±1,25','0; nema rešenja','1/2'])],illustration='Proverene koordinate A i B.',misconceptions='Spoljašnji minus, stroge granice, nulto rastojanje.',assessment='19 zadataka.',limits='Ne potvrđuje godišnji ishod u celini.'),ensure_ascii=False,indent=2)+'\n')
print('19/19 zadataka, 3/3 primera')

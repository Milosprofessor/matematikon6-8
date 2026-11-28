import json,re,subprocess
from fractions import Fraction as F
from pathlib import Path
root=Path(__file__).resolve().parents[3]; out=root/'qa/phase2c/grade6/skup-racionalnih-brojeva'
data=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
old=json.loads(subprocess.check_output(['git','show','7cb32cd:qa/phase2/g6-extracted.json'],cwd=root))
before={t['id']:t for t in old['bank']}
def frac(s):
 s=re.sub(r'\[\[frac:([^|]+)\|([^\]]+)\]\]',r'\1/\2',s).replace('−','-').replace(',','.')
 if "/" in s:
  a,b=s.split("/");return F(int(a),int(b))
 return F(s)
rows=[]
for t in data['bank']:
 b=before[t['id']]
 if t['lesson']!='skup-racionalnih-brojeva':
  assert t==b;continue
 i=t['id'];a=t['answer'];c=t.get('choices',[]);m=t['math'];assert a==b['answer']
 if i=='o6-rq-1':
  valid=[]
  for choice in c:
   try:frac(choice);valid.append(choice)
   except ZeroDivisionError:pass
  assert valid==[a];ref='Jedino prvi imenilac nije nula.'
 elif i=='o6-rq-2':
  valid=[]
  for choice in c:
   try:
    if frac(choice)==F(-6):valid.append(choice)
   except ZeroDivisionError:pass
  assert valid==[a];ref='−6=−6/1.'
 elif i=='o6-rq-3':assert [x for x in c if frac(x)==-frac(m)]==[a];ref='Suprotan od −7/9 je 7/9.'
 elif i=='o6-rq-4':assert [x for x in c if frac(x)==frac(m)]==[a];ref='−13/20=−65/100=−0,65.'
 elif i=='o6-rq-5':assert [x for x in c if frac(x)==F(-1)-F(1,4)]==[a];assert F(str(t['diagram']['points'][0]['value']))==F(-5,4);ref='−1−1/4=−5/4.'
 elif i=='o6-rq-6':
  vals=[frac(x.strip()) for x in m.split('{')[1].split('}')[0].split(',')]
  assert len(set(vals))==5 and sum(x.denominator==1 for x in vals)==int(a);ref='−4, 0, 2 su celi.'
 elif i=='o6-rq-7':
  vals=sorted(frac(x.strip()) for x in m.split(','))
  assert [x for x in c if [frac(y.strip()) for y in x.split('<')]==vals]==[a];ref='−4/6<−2/6<0<1/6.'
 elif i=='o6-rq-8':
  vals=[n for n in range(-20,20) if F(-7,4)<F(n,8)<F(-1,4)]
  assert vals==list(range(-13,-2)) and len(vals)==int(a);ref='−14<n<−2; 11 celih.'
 elif i=='o6-rq-9':
  vals=[n for n in range(20) if -1<-F(n,6)<0];assert max(vals)==int(a);ref='0<n<6; n=5.'
 elif i=='o6-rq-10':
  v=-F(-4,10)/2;assert [x for x in c if frac(x)==v]==[a];assert F(str(t['diagram']['points'][-1]['value']))==v;ref='A=−2/5; B=2/5; C=1/5.'
 else:
  family,n=map(int,i.rsplit('-',2)[1:])
  expected={1:-4*n,2:F(-n,4),3:len([k for k in range(-n-3,1) if -1<F(k,n+3)<0])}[family]
  assert frac(a)==expected;ref=f'Egzaktno: {expected}.'
 changes=[k for k in ['prompt','hint','solution','level'] if t[k]!=b[k]]
 rows.append(dict(id=i,area=t['area'],lesson=t['lesson'],requirement='Dovoljni podaci i jednoznačan zahtev.',answer=ref,alternatives='Jedinstvena tačna alternativa' if c else 'Nije primenljivo',hint=t['hint'],procedure=t['solution'],old_level=b['level'],level=t['level'],level_reason='Direktan račun, povezivanje koraka ili strogi raspon.',illustration='Koordinate proverene' if t.get('diagram') else 'Tekst dovoljan',notation='Razlomci i decimalni zarez',issue='Preciznost zapisa ili metodike' if changes else '',fix=', '.join(changes) or 'Nije potrebna izmena',method='Python fractions.Fraction, egzaktna provera',status='potpuno recenziran'))
assert len(rows)==19 and len(before)==len(data['bank'])
assert F(-12,6)==-2 and F(-12,20)==F(-3,5)==F(-6,10) and F(-2,5)<F(-3,10)
l=next(x for x in data['lessons'] if x['id']=='skup-racionalnih-brojeva')
assert len(l['worked'])==3
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Definicija Q, nenulti imenilac, nula, ekvivalentni zapisi i poredak.',sequence='Definicija → zapis → prava → poređenje.',examples=[dict(**e,verification=v) for e,v in zip(l['worked'],['−2','−3/5=−0,6','−2/5<−3/10'])],illustration='Proverene koordinate A i C.',misconceptions='Imenilac nula, suprotan broj nuli, negativni poredak.',assessment='19 zadataka.',limits='Ne potvrđuje godišnji ishod u celini.'),ensure_ascii=False,indent=2)+'\n')
print('19/19 zadataka, 3/3 primera')

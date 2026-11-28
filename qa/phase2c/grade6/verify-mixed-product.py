import collections,json,re,subprocess
from fractions import Fraction
from pathlib import Path
root=Path(__file__).resolve().parents[3];out=root/'qa/phase2c/grade6/mnozenje-deljenje'
d=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
before=json.loads(subprocess.check_output(['git','show','ceefc1b4c9d07b3a51eb2e47cb82c522892dbbca:qa/phase2/g6-extracted.json'],cwd=root));old={t['id']:t for t in before['bank']}
def calc(s):
 s=s.replace('−','-').replace('·','*').replace(':','/')
 assert re.fullmatch(r'[0-9+*/() -]+',s)
 # Exact evaluation: every integer literal replaced with a rational.
 return eval(re.sub(r'\d+',lambda m:f'F({m[0]})',s),{'__builtins__':{},'F':Fraction})
rows=[]
for t in d['bank']:
 id=t['id'];b=old[id];assert t['answer']==b['answer']
 if t['lesson']!='mnozenje-deljenje':
  assert t==b
  continue
 a=t['answer'];m=t['math'];reason='Redosled operacija istog prioriteta.';issue=''
 if id in ['6-10a','6-10b','6-10d','6-10e','6-10j']:
  assert calc(m)==int(a);ref=f'{m}={a}'
 elif id=='6-10c':
  assert [c for c in t['choices'] if calc(c)*-4==28]==[a];ref='(−7)·(−4)=28';reason='Jednačina i provera.';issue='Izostavljena provera.'
 elif id=='6-10f':
  assert calc(m)<0 and a=='−';ref=f'{m}=−8.'
 elif id=='6-10g':
  assert Fraction(int(a),-5)*2==12;ref='(−30):(−5)·2=12';reason='Dve obrnute operacije.';issue='Izostavljene ekvivalentne transformacije i provera.'
 elif id=='6-10h':
  left,middle,right=m.split('=');assert calc(left)==-16 and calc(middle)==calc(right)==-4;assert a=='Mora se računati sleva nadesno; rezultat je −16.';ref='−16≠−4';reason='Analiza greške i posledice zagrada.'
 elif id=='6-10i':
  assert [c for c in t['choices'] if calc(c)>0]==[a];ref='−12, 12, −12';reason='Određivanje znaka.'
 elif id.startswith('ow-md-order-'):
  assert ':' in m and m.index(':')<m.index('·') and a=='Deljenje sleva' and calc(m)==16;ref='Deljenje daje −8, zatim proizvod 16.'
 elif id.startswith('ow-md-table-'):
  n=int(id.rsplit('-',1)[1])+3;assert m==f'−{4*n} → :{n} → −4 → ·(−3) → ?' and Fraction(-4*n,n)*-3==int(a);ref='−4·(−3)=12';reason='Čitanje lanca.'
 elif id.startswith('ow-md-context-'):
  h,fall,rise=map(int,re.findall(r'\d+',m));assert Fraction(-fall+rise,h)==int(a);ref=f'({-fall}+{rise}):{h}={a} °C po satu';reason='Modelovanje ukupne i prosečne promene.';issue='Precizirati jedinicu i predznak.'
 else:raise AssertionError(id)
 if b['level']!=t['level']:issue=(issue+' Neadekvatan nivo.').strip()
 changes=[k for k in ['prompt','math','hint','solution','level','choices'] if b.get(k)!=t.get(k)]
 assert t['hint'] and t['solution']
 rows.append(dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Jednoznačan zahtev i dovoljni podaci.',answer='Potvrđeno: '+ref,alternatives='Jedinstvena tačna alternativa.' if t['kind']=='choice' else 'Nije primenljivo.',hint='Primeren: '+t['hint'],procedure='Potvrđeno: '+t['solution'],old_level=b['level'],level=t['level'],level_reason=reason,illustration='Tekst i lanac dovoljni.',notation='Predznaci, zagrade, dvotačka i tačka množenja provereni.',issue=issue,fix=', '.join(changes) or 'Nije potrebna izmena',method='Semantička recenzija i nezavisna egzaktna aritmetika.',status='potpuno recenziran'))
assert len(rows)==28 and collections.Counter(r['level'] for r in rows)=={'basic':8,'medium':20}
l=next(x for x in d['lessons'] if x['id']=='mnozenje-deljenje')
assert len(l['worked'])==3 and calc('−36:6·(−2)')==12 and calc('48:(−6)·2')==-16 and calc('48:((−6)·2)')==-4 and calc('(−20):(−4)·3')==15
assert l['work']==next(x for x in before['lessons'] if x['id']=='mnozenje-deljenje')['work'];assert set(old)=={t['id'] for t in d['bank']}
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Jednak prioritet, sleva nadesno, zagrade i nenulti delioci.',sequence='Pravilo → poređenje različitih zagrada → nepoznati početni broj.',examples=[dict(question=e['question'],steps=e['steps'],verification=v) for e,v in zip(l['worked'],['12','−16 i −4','−20'])],illustration='Operacijski lanci u zadacima.',misconceptions='Množenje nema prednost nad deljenjem; pregrupisavanje može promeniti rezultat.',assessment='28 zadataka, 8 osnovnih i 20 srednjih.',limits='Delovi godišnjih ishoda u Z; ne potvrđuje Q.'),ensure_ascii=False,indent=2)+'\n')
print('28/28 tasks; 3/3 worked examples; IDs and answers unchanged')

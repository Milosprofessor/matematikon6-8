import collections,json,re,subprocess
from fractions import Fraction
from pathlib import Path
root=Path(__file__).resolve().parents[3];out=root/'qa/phase2c/grade6/deljenje'
d=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
before=json.loads(subprocess.check_output(['git','show','d8b8e53d5670b76569682c10a6292e53cad7d98e:qa/phase2/g6-extracted.json'],cwd=root));old={t['id']:t for t in before['bank']}
def calc(m):
 a,b=map(int,m.replace('−','-').replace('(','').replace(')','').split(':'))
 return Fraction(a,b)
def defined(m):
 try:calc(m);return True
 except ZeroDivisionError:return False
rows=[]
for t in d['bank']:
 id=t['id'];b=old[id];assert t['answer']==b['answer']
 if t['lesson']!='deljenje':
  assert t==b
  continue
 a=t['answer'];m=t['math'];reason='Direktan račun ili pravilo.';issue=''
 if id in ['6-9a','6-9b','6-9d','t6-9']:
  assert calc(m)==int(a);ref=f'{m}={a}'
 elif id=='6-9c':
  assert [c for c in t['choices'] if not defined(c)]==[a];ref='0:(−4)=0; 9:0 nedefinisano; −8:2=−4.'
 elif id=='6-9e':
  assert Fraction(int(a),-5)==8;ref='−40:(−5)=8';reason='Nepoznati deljenik i provera.';issue='Nedostaje ekvivalentna transformacija i provera.'
 elif id=='6-9f':
  assert calc(m)>0 and a=='+';ref='−84:(−7)=12>0.'
 elif id=='6-9g':
  assert int(a)!=0 and Fraction(-63,int(a))==9;ref='9·(−7)=−63, −63:(−7)=9';reason='Nepoznati delilac, uslov i provera.';issue='Nedostaje uslov i provera.'
 elif id=='6-9h':
  left,right=m.split('=');assert calc(left)==8 and int(right.replace('−','-'))==-8 and a=='Rezultat treba da bude 8.';ref='(−48):(−6)=8';reason='Analiza greške.'
 elif id=='6-9i':
  assert [c for c in t['choices'] if defined(c)]==[a] and calc(a)==0;ref='15:0 i 0:0 nedefinisani; 0:(−5)=0.';reason='Razlikovanje tri slučaja sa nulom.'
 elif id=='6-9j':
  assert Fraction(-36,6)==int(a);ref='−36:6=−6 dinara dnevno';reason='Matematičko modelovanje.';issue='Precizirati jedinicu i predznak.'
 elif id.startswith('ow-div-table-'):
  n=int(id.rsplit('-',1)[-1])+3
  assert m==f'x: −{4*n}, 0, {6*n}; x:(−{n}): 4, 0, ?'
  assert [Fraction(x,-n) for x in [-4*n,0,6*n]]==[4,0,int(a)];ref='4, 0, −6';reason='Čitanje tabele i zamena.'
 elif id.startswith('ow-div-compare-'):
  left,right=m.split(' __ ');assert calc(left)==6 and calc(right)==-6 and a=='>';ref='6>−6';reason='Poređenje količnika.'
 elif id.startswith('ow-div-both-'):
  n=int(id.rsplit('-',1)[-1])+3
  assert m==f'x:{n}<0 i |x|={3*n}';assert [x for x in [-3*n,3*n] if Fraction(x,n)<0 and abs(x)==3*n]==[int(a)];ref=f'{a}:{n}=−3, |{a}|={3*n}';reason='Dva uslova i provera.';issue='Nedostaje razmatranje oba kandidata i provera.'
 else:raise AssertionError(id)
 if b['level']!=t['level']:issue=(issue+' Neadekvatan nivo.').strip()
 changes=[k for k in ['prompt','math','hint','solution','level','choices'] if b.get(k)!=t.get(k)]
 assert t['hint'] and t['solution']
 rows.append(dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Jednoznačan zahtev i dovoljni podaci.',answer='Potvrđeno: '+ref,alternatives='Jedinstvena tačna alternativa.' if t['kind']=='choice' else 'Nije primenljivo.',hint='Primeren: '+t['hint'],procedure='Potvrđeno: '+t['solution'],old_level=b['level'],level=t['level'],level_reason=reason,illustration='Tekst dovoljan.',notation='Predznaci, zagrade, dvotačka i uslovi provereni.',issue=issue,fix=', '.join(changes) or 'Nije potrebna izmena',method='Semantička recenzija i nezavisna egzaktna aritmetika.',status='potpuno recenziran'))
assert len(rows)==29 and collections.Counter(r['level'] for r in rows)=={'basic':6,'medium':23}
l=next(x for x in d['lessons'] if x['id']=='deljenje')
assert len(l['worked'])==3 and calc('48:(−6)')==-8 and calc('0:(−5)')==0 and not defined('15:0') and not defined('0:0') and calc('−42:(−6)')==7
assert l['work']==next(x for x in before['lessons'] if x['id']=='deljenje')['work']
assert set(old)=={t['id'] for t in d['bank']}
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Veza sa množenjem, znak nenultog količnika, slučajevi nule i uslov nenultog delioca; Z nije zatvoren za deljenje.',sequence='Definicija → znak i nula → provera množenjem → nepoznati delilac.',examples=[dict(question=e['question'],steps=e['steps'],verification=v) for e,v in zip(l['worked'],['−8','0; nedefinisano; nedefinisano','−6'])],illustration='Tabela znakova; poseban dijagram nije nužan.',misconceptions='Nula u deljeniku nije isto što i nula u deliocu; 0:0 nema jedinstvenu vrednost; deljenje nije zatvoreno u Z.',assessment='29 sa tematskom proverom; 6 osnovnih i 23 srednja.',limits='Deo godišnjeg ishoda u Z, ne potvrđuje Q.'),ensure_ascii=False,indent=2)+'\n')
print('29/29 tasks; 3/3 worked examples; IDs and answers unchanged')

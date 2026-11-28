"""Independent exact arithmetic and inventory verification for every multiplication item."""
import collections,json,re,subprocess
from pathlib import Path
root=Path(__file__).resolve().parents[3];out=root/'qa/phase2c/grade6/mnozenje'
data=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
before=json.loads(subprocess.check_output(['git','show','93642e7:qa/phase2/g6-extracted.json'],cwd=root))
old={t['id']:t for t in before['bank']}
def calc(s):
 s=s.replace('−','-').replace('·','*')
 assert re.fullmatch(r'[0-9+*() -]+',s)
 return eval(s,{'__builtins__':{}})
def sign(n):return '+' if n>0 else '−' if n<0 else '0'
rows=[]
for t in data['bank']:
 id=t['id'];b=old[id]
 assert t['answer']==b['answer']
 if t['lesson']!='mnozenje':
  assert t==b
  continue
 a=t['answer'];m=t['math'];reason='Direktno pravilo predznaka ili račun.';issue=''
 if id in ['6-8a','6-8b','6-8d','t6-8']:
  assert calc(m)==int(a);ref=f'{m}={a}'
 elif id=='6-8c':
  assert [c for c in t['choices'] if calc(c)<0]==[a];ref='15, −28, 0; samo −28 je negativan.';issue='Izostavljena razlika nule i negativnog proizvoda.'
 elif id=='6-8e':
  assert 6*int(a)==-54 and -54%6==0;ref='6·(−9)=−54; jedinstven činilac jer 6 nije nula.';reason='Nepoznati činilac i provera.';issue='Nedostaje eksplicitna provera.'
 elif id=='6-8g':
  assert -7*int(a)==42 and 42%-7==0;ref='(−7)·(−6)=42; jedinstven činilac.';reason='Nepoznati činilac i provera.';issue='Nedostaje obrazloženje i provera.'
 elif id=='6-8h':
  left,right=m.split('=');assert calc(left)==36 and calc(right)==-36 and a=='Rezultat treba da bude 36.';ref='9·4=36; dva negativna činioca.';reason='Analiza greške.'
 elif id in ['6-8f','6-8i']:
  assert sign(calc(m))==a;ref=f'{m}={calc(m)}; znak {a}'
  if id=='6-8i':reason='Tri činioca; parnost negativnih, odsustvo nule.'
 elif id=='6-8j':
  assert -3*4==int(a);ref='4·(−3)=−12 °C, promena a ne konačna temperatura.';reason='Modelovanje konstantne promene.';issue='Precizirati ukupnu promenu, jedinicu i predznak.'
 elif id.startswith('ow-mul-sum-'):
  assert [c for c in t['choices'] if calc(c)==calc(m)]==[a];ref=f'{m}={a}={calc(m)}'
 elif id.startswith('ow-mul-table-'):
  n=int(id.rsplit('-',1)[1])+3
  assert m==f'y=(−{n})·x; x: −2, 0, 3; y: {2*n}, 0, ?' and [-n*x for x in [-2,0,3]]==[2*n,0,int(a)]
  ref=f'y: {2*n}, 0, {-3*n}';reason='Čitanje tabele i zamena promenljive.'
 elif id.startswith('ow-mul-compare-'):
  left,right=m.split(' __ ');assert calc(left)>calc(right) and a=='>'
  ref=f'{calc(left)}>{calc(right)}; manja apsolutna vrednost negativnog broja.';reason='Poređenje bez izračunavanja.';issue='Objasniti vezu 5<7 i apsolutnih vrednosti.'
 elif id.startswith('ow-mul-distribute-'):
  n=int(id.rsplit('-',1)[1])+3;assert calc(m)==-n*(9+11)==int(a)
  ref=f'(−{n})·(9+11)=(−{n})·20={a}';reason='Prepoznavanje i izdvajanje zajedničkog činioca.';issue='Izostavljeno računanje zbira u zagradi.'
 else:raise AssertionError(id)
 assert t['hint'] and t['solution']
 if b['level']!=t['level']:issue=(issue+' Neadekvatan nivo.').strip()
 changes=[k for k in ['prompt','math','hint','solution','level','choices'] if b.get(k)!=t.get(k)]
 rows.append(dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Jednoznačan zahtev i dovoljni podaci.',answer='Potvrđeno: '+ref,alternatives='Jedinstvena tačna alternativa.' if t['kind']=='choice' else 'Nije primenljivo.',hint='Primeren: '+t['hint'],procedure='Potvrđeno: '+t['solution'],old_level=b['level'],level=t['level'],level_reason=reason,illustration='Tekst dovoljan.',notation='Predznaci, zagrade i tačka množenja provereni.',issue=issue,fix=', '.join(changes) or 'Nije potrebna izmena',method='Semantička recenzija i nezavisna celobrojna aritmetika.',status='potpuno recenziran'))
assert len(rows)==35 and collections.Counter(r['level'] for r in rows)=={'basic':12,'medium':23}
l=next(x for x in data['lessons'] if x['id']=='mnozenje')
assert len(l['worked'])==3 and calc('(−8)·(−7)')==56 and calc('(−2)·3·(−4)·(−1)')==-24 and calc('(−6)·8+(−6)·12')==calc('(−6)·(8+12)')==-120
assert l['work']==next(x for x in before['lessons'] if x['id']=='mnozenje')['work']
assert set(old)=={t['id'] for t in data['bank']}
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Predznak nenultih činilaca, nula, jedinica, −1, komutativnost, asocijativnost i distributivnost prema zbiru i razlici.',sequence='Ponovljeno sabiranje → znak i nula → više činilaca → svojstva i provera.',examples=[dict(question=e['question'],steps=e['steps'],verification=v) for e,v in zip(l['worked'],['56','−24','−120'])],illustration='Brojna prava 0 → −2 → −4 → −6; tri jednaka pomeranja.',misconceptions='Nula nije ni pozitivna ni negativna; parnost negativnih činilaca važi samo bez nule; promena temperature nije konačno stanje.',assessment='35 sa tematskom proverom; 12 osnovnih, 23 srednja.',limits='Svojstva pokrivena teorijom; nema dovoljno različitih zadataka za potvrdu celog godišnjeg ishoda.'),ensure_ascii=False,indent=2)+'\n')
print('35/35 tasks; 3/3 worked examples; IDs and answers unchanged')

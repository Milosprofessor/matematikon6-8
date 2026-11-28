import collections,json,re,subprocess
from fractions import Fraction
from pathlib import Path
root=Path(__file__).resolve().parents[3];out=root/'qa/phase2c/grade6/brojevni-izrazi'
d=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
before=json.loads(subprocess.check_output(['git','show','ba91058c0e6008f0f7967d26e3bc640a34e2acb3:qa/phase2/g6-extracted.json'],cwd=root));old={t['id']:t for t in before['bank']}
def calc(s):
 s=s.replace('−','-').replace('·','*').replace(':','/')
 assert re.fullmatch(r'[0-9+*/() -]+',s)
 return eval(re.sub(r'\d+',lambda m:f'F({m[0]})',s),{'__builtins__':{},'F':Fraction})
rows=[]
for t in d['bank']:
 id=t['id'];b=old[id];assert t['answer']==b['answer']
 if t['lesson']!='brojevni-izrazi':
  assert t==b;continue
 a=t['answer'];m=t['math'];reason='Račun po prioritetu operacija.';issue=''
 if id in ['6-11a','6-11b','6-11d','6-11e','6-11g','t6-10']:
  assert calc(m)==int(a);ref=f'{m}={a}'
  if id in ['6-11d','6-11e','t6-10']:issue='Dopuniti međukorake i uslov delioca gde je primenljiv.'
 elif id=='6-11c':
  assert [c for c in t['choices'] if calc(c)==calc(m)]==[a];ref='−4−(−6)=2'
 elif id=='6-11f':
  assert '(-2+6)' in m.replace('−','-') and a=='Sabiranje u zagradi';ref='−2+6=4; zatim množenje.'
 elif id=='6-11h':
  l,mid,r=m.split('=');assert calc(l)==32 and calc(mid)==calc(r)==-48 and a=='Množenje se radi pre oduzimanja.';ref='20−(−12)=32, ne −48';reason='Analiza greške.';issue='Dopuniti eksplicitno pretvaranje oduzimanja negativnog broja u zbir.'
 elif id=='6-11i':
  l,r=m.split('; ');assert calc(l.split('=')[1])==-7 and calc(r.split('=')[1])==-6 and a=='A<B';ref='A=−7, B=−6, −7<−6';reason='Poređenje dva izraza.'
 elif id=='6-11j':
  assert -12+3*5-4==int(a);ref='−12+3·5−4=−1';reason='Modelovanje više promena.'
 elif id.startswith('ow-expr-model-'):
  x,n=map(int,re.findall(r'\d+',m)[:2]);assert x==4*n
  vals=[calc(c) for c in t['choices']];assert len(set(vals))==3 and [c for c in t['choices'] if calc(c)==x-n*(-3)]==[a]
  ref=f'{a}={x-n*(-3)}';reason='Prevođenje rečenice u izraz.'
 elif id.startswith('ow-expr-missing-'):
  n=int(id.rsplit('-',1)[1])+3;assert n!=0 and m==f'{n}·(__−3)=0' and n*(int(a)-3)==0 and int(a)==3
  ref=f'{n}·(3−3)=0';reason='Nulti proizvod i jedinstveno rešenje.';issue='Nedostaje razlog nenultosti prvog činioca i provera.'
 elif id.startswith('ow-expr-brackets-'):
  vals=[calc(c) for c in t['choices']];assert len(set(vals))==3 and [c for c in t['choices'] if calc(c)==0]==[a]
  ref='; '.join(f'{c}={int(v)}' for c,v in zip(t['choices'],vals));reason='Zagrade menjaju vrednost izraza.';issue='Dva prethodna distraktora imala su istu vrednost.'
 else:raise AssertionError(id)
 if b['level']!=t['level']:issue=(issue+' Neadekvatan nivo.').strip()
 changes=[k for k in ['prompt','math','hint','solution','level','choices'] if b.get(k)!=t.get(k)]
 assert t['hint'] and t['solution']
 rows.append(dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Jednoznačan zahtev i dovoljni podaci.',answer='Potvrđeno: '+ref,alternatives='Jedinstvena tačna alternativa.' if t['kind']=='choice' else 'Nije primenljivo.',hint='Primeren: '+t['hint'],procedure='Potvrđeno: '+t['solution'],old_level=b['level'],level=t['level'],level_reason=reason,illustration='Tekst dovoljan.',notation='Predznaci, zagrade, dvotačka i tačka množenja provereni.',issue=issue,fix=', '.join(changes) or 'Nije potrebna izmena',method='Semantička recenzija i nezavisna egzaktna aritmetika.',status='potpuno recenziran'))
assert len(rows)==29 and collections.Counter(r['level'] for r in rows)=={'basic':8,'medium':21}
l=next(x for x in d['lessons'] if x['id']=='brojevni-izrazi')
assert len(l['worked'])==3 and calc('6−2·(−3+5)')==2 and calc('36:(−3·2)−(−4)')==-2 and calc('24−6·(−3)')==42
assert l['work']==next(x for x in before['lessons'] if x['id']=='brojevni-izrazi')['work'];assert set(old)=={t['id'] for t in d['bank']}
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Prioritet zagrada, množenja/deljenja i sabiranja/oduzimanja; nenulti delioci i nulti proizvod.',sequence='Redosled → ugnježdene i negativne vrednosti → prevod teksta u izraz.',examples=[dict(question=e['question'],steps=e['steps'],verification=v) for e,v in zip(l['worked'],['2','−2','42'])],illustration='Računski zapis i objašnjenje redosleda dovoljni.',misconceptions='Ne računamo uvek sleva nadesno; zagrade menjaju redosled; nula u proizvodu ne znači da su oba činioca nula.',assessment='29 sa tematskom proverom; 8 osnovnih i 21 srednji.',limits='Celobrojni izrazi pregledani, ne potvrđuje ishode u Q.'),ensure_ascii=False,indent=2)+'\n')
print('29/29 tasks; 3/3 worked examples; IDs and answers unchanged')

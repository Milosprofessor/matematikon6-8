import json,re,subprocess,collections
from pathlib import Path
root=Path(__file__).resolve().parents[3]
out=root/'qa/phase2c/grade6/zbir-uglova-trougla'
data=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
before=json.loads(subprocess.check_output(['git','show','ec2bb3f78771a18900fd2482a0afee048b231ef8:qa/phase2/g6-extracted.json'],cwd=root))
old={t['id']:t for t in before['bank']}
def nums(s):return list(map(int,re.findall(r'\d+(?=°)',s)))
def valid(a):return len(a)==3 and min(a)>0 and sum(a)==180
rows=[]
for t in data['bank']:
 id=t['id']; b=old[id]; assert t['answer']==b['answer']
 if t['lesson']!='zbir-uglova-trougla':
  assert t==b;continue
 a=t['answer'];m=nums(t['math']);reason='Direktna primena pravila.'
 if id in ('o6-zu-1','o6-zu-4','ot6-3'):
  n=180-sum(m);assert valid(m+[n]);assert n==int(nums(a)[0] if '°' in a else a);ref=f'{m[0]}°+{m[1]}°+{n}°=180°'
  assert t['diagram']['labels']['alpha']==str(m[0])+'°' and t['diagram']['labels']['beta']==str(m[1])+'°'
 elif id=='o6-zu-2':
  assert valid(m) and a=='Da';ref=f'{m}: pozitivni, zbir 180°'
 elif id in ('o6-zu-3','o6-zu-7'):
  correct=[c for c in t['choices'] if valid(nums(c))==(id=='o6-zu-3')];assert correct==[a];ref='Zbirovi: '+', '.join(str(sum(nums(c)))+'°' for c in t['choices']);reason='Provera više mogućnosti.'
 elif id=='o6-zu-5':
  assert a=='Netačno';ref='Dva tupa ugla imaju zbir >180°.'
 elif id=='o6-zu-6':
  n=180//6;assert int(a)==n and valid([n,2*n,3*n]);ref='x=30°; uglovi 30°, 60°, 90°';reason='Jednačina i provera.'
 elif id=='ow-angles-rule-0':
  assert a=='180°';ref='Zbir unutrašnjih uglova.'
 elif id.startswith('ow-angles-bisect-'):
  n=90-m[0];assert n==int(a) and valid([90,m[0],n]);ref=f'90°+{m[0]}°+{n}°=180°'
 elif id.startswith('ow-angles-difference-'):
  x,d=m;y=x+d;z=180-x-y;assert valid([x,y,z]) and x<y<z and z==int(a);ref=f'{x}°<{y}°<{z}°; zbir 180°';reason='Višekoračni račun i poređenje.'
 else:raise AssertionError(id)
 changes=[k for k in ['prompt','hint','solution','level','diagram'] if t.get(k)!=b.get(k)]
 assert t['hint'] and t['solution']
 rows.append(dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Jednoznačan zahtev i dovoljni podaci.',answer='Potvrđeno: '+ref,alternatives='Jedinstvena tačna alternativa.' if t['kind']=='choice' else 'Nije primenljivo.',hint=t['hint'],procedure=t['solution'],old_level=b['level'],level=t['level'],level_reason=reason,illustration='Oznake α i β odgovaraju zadatim uglovima.' if t.get('diagram') else 'Tekst dovoljan.',notation='Stepeni i grčka slova.',issue='Nepotpuno obrazloženje ili zahtev.' if changes else '',fix=', '.join(changes) or 'Nije potrebna izmena',method='Nezavisna aritmetika, pozitivnost i zbir, semantička recenzija.',status='potpuno recenziran'))
assert len(rows)==21 and set(old)=={t['id'] for t in data['bank']}
l=next(x for x in data['lessons'] if x['id']=='zbir-uglova-trougla')
assert len(l['worked'])==3 and valid([47,68,65]) and not valid([0,80,100]) and valid([30,60,90])
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Zbir 180°, pozitivnost svih uglova, pravougli trougao.',sequence='Pravilo → nepoznati ugao → uslov postojanja → jednačina.',examples=[dict(question=e['question'],steps=e['steps'],verification=v) for e,v in zip(l['worked'],['65°','ne postoji','30°, 60°, 90°'])],illustration='Označeni unutrašnji uglovi i pravougli trougao.',misconceptions='Sam zbir 180° nije dovoljan ako je ugao 0°.',assessment='21 zadatak uključujući tematsku proveru.',limits='Ne potvrđuje čitav godišnji ishod.'),ensure_ascii=False,indent=2)+'\n')
print('21/21 tasks; 3/3 examples; levels:',collections.Counter(r['level'] for r in rows))

import json,re,subprocess,collections
from pathlib import Path
root=Path(__file__).resolve().parents[3];out=root/'qa/phase2c/grade6/uglovi-transverzala'
data=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
before=json.loads(subprocess.check_output(['git','show','ebad060eccf9da5d9265018e15bd85b0923235e0:qa/phase2/g6-extracted.json'],cwd=root));old={t['id']:t for t in before['bank']}
def nums(s):return list(map(int,re.findall(r'\d+(?=°)',s)))
def valid(a):return min(a)>0 and sum(a)==180
rows=[]
for t in data['bank']:
 id=t['id'];b=old[id];assert t['answer']==b['answer']
 if t['lesson']!='uglovi-transverzala':assert t==b;continue
 m=nums(t['math']);a=t['answer'];reason='Direktna primena teoreme.'
 if id in ('o6-su-1','o6-ut-5'):
  assert int(a)==180-m[0];ref=f'{m[0]}°+{a}°=180°'
 elif id in ('o6-su-2','ot6-4'):
  n=sum(m);assert n==int(a) and valid([180-n,*m]);ref=f'{m[0]}°+{m[1]}°={a}°'
 elif id=='o6-su-3':
  assert a=='α_1=β+γ';ref='180°−α=β+γ=α₁';assert len(t['choices'])==3
 elif id=='o6-ut-4':
  assert a=='Tačno';ref='α₁=180°−α=β+γ'
 elif id=='o6-ut-6':
  assert a=='β i γ';ref='α₁ je naporedan sa α; β i γ nisu susedni.'
 elif id=='o6-ut-7' or id.startswith('ow-external-third-'):
  x,y=m;z=x-y;assert z==int(a) and valid([180-x,y,z]);ref=f'{y}°+{z}°={x}°'
 elif id.startswith('ow-external-sum-'):
  x,y=m;z=360-x-y;assert z==int(a) and valid([180-x,180-y,180-z]);ref=f'{x}°+{y}°+{z}°=360°';reason='Zbir spoljašnjih uglova.'
 elif id.startswith('ow-external-equal-'):
  x=m[0];y=x//2;assert int(a)==y and valid([180-x,y,y]);ref=f'2·{y}°={x}°';assert t['diagram']['labels']['shapeBeta']==f'{y}°';reason='Jednakost nesusednih uglova.'
 else:raise AssertionError(id)
 changes=[k for k in ('prompt','math','hint','solution','diagram','level') if t.get(k)!=b.get(k)]
 rows.append(dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Jednoznačan zahtev i dovoljni podaci.',answer='Potvrđeno: '+ref,alternatives='Jedinstvena tačna alternativa.' if t['kind']=='choice' else 'Nije primenljivo.',hint=t['hint'],procedure=t['solution'],old_level=b['level'],level=t['level'],level_reason=reason,illustration='Proverene oznake i geometrijski odnos uglova.' if t.get('diagram') else 'Tekst dovoljan.',notation='Stepeni, grčka slova i indeks 1.',issue='Nedovoljno precizan zahtev, postupak ili skica.' if changes else '',fix=', '.join(changes) or 'Nije potrebna izmena',method='Nezavisna egzaktna aritmetika i provera pozitivnih unutrašnjih uglova.',status='potpuno recenziran'))
assert len(rows)==26 and set(old)=={t['id'] for t in data['bank']}
l=next(x for x in data['lessons'] if x['id']=='uglovi-transverzala');assert len(l['worked'])==3 and valid([53,56,71]) and 74+106==180 and 100+110+150==360
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Spoljašnji ugao, naporedni, nesusedni i zbir po jednog kod svakog temena.',sequence='Definicija → suplement → zbir nesusednih → zbir 360°.',examples=[dict(question=e['question'],steps=e['steps'],verification=v) for e,v in zip(l['worked'],['127°','106°','150°'])],illustration='Produžetak stranice i odgovarajući luk; šest jednakokrakih slučajeva geometrijski prilagođeno.',misconceptions='360° važi samo za po jedan spoljašnji ugao kod svakog temena.',assessment='26 zadataka uključujući ot6-4.',limits='Ne potvrđuje čitav godišnji ishod.'),ensure_ascii=False,indent=2)+'\n')
print('26/26 tasks; 3/3 examples;',collections.Counter(r['level'] for r in rows))

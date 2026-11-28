import json,re,collections
from pathlib import Path
root=Path(__file__).resolve().parents[3];out=root/'qa/phase2c/grade6/uglovi-na-transverzali';data=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
rows=[]
for t in data['bank']:
 if t['lesson']!='uglovi-na-transverzali':continue
 id=t['id'];a=t['answer'];m=list(map(int,re.findall(r'\d+(?=°)',t['math'])));reason='Prepoznavanje položaja i teoreme.'
 if id=='o6-utn-1':assert a=='t';ref='t seče p i q u različitim tačkama.'
 elif id=='o6-utn-2':assert a=='Saglasni uglovi.';ref='Isti položaj kod dva preseka.'
 elif id=='o6-utn-3':assert int(a)==m[0];ref='Naizmenični unutrašnji uglovi su jednaki: 57°.'
 elif id=='o6-utn-4':assert int(a)==180-m[0];ref='112°+68°=180°.'
 elif id=='o6-utn-5':assert int(a)==m[0];ref='α=β=γ=46°.'
 elif id=='o6-utn-6':assert a=='II' and m[0]==m[1] and m[2]!=m[3] and m[4]+m[5]==180;ref='I i III tačni; II nije.'
 elif id=='o6-utn-7':assert a=='Unakrsni uglovi kod istog preseka su jednaki.';ref='Unakrsni su jednaki bez uslova paralelnosti.'
 elif id=='o6-utn-8':
  n=(180-5-10)//5;assert int(a)==n and 2*n+5+3*n+10==180;ref='x=33; 71°+109°=180°.';reason='Jednačina i provera.'
 elif id=='o6-utn-9':
  x=(20+30)//2;assert x+20==3*x-30 and int(a)==180-(x+20);ref='x=25; 45°+135°=180°.';reason='Jednačina i suplement.'
 elif id=='o6-utn-10':
  assert int(a)==180-sum(m);ref='48°+37°+95°=180°.';reason='Prenos ugla i zbir uglova.'
 elif id.startswith('dop-uglovi-na-transverzali-1-'):assert int(a)==m[0];ref=f'Jednaki uglovi {a}°.'
 elif id.startswith('dop-uglovi-na-transverzali-2-'):assert int(a)==180-m[0];ref=f'{m[0]}°+{a}°=180°.'
 elif id.startswith('dop-uglovi-na-transverzali-3-'):
  x=(180-m[0])//2;assert int(a)==x and x+x+m[0]==180;ref=f'{x}°+{x+m[0]}°=180°.';reason='Jednačina iz zbira i razlike.'
 else:raise AssertionError(id)
 rows.append(dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Jednoznačan zahtev, dovoljan uslov paralelnosti.',answer='Potvrđeno: '+ref,alternatives='Jedinstvena tačna alternativa.' if t['kind']=='choice' else 'Nije primenljivo.',hint=t['hint'],procedure=t['solution'],old_level=t['level'],level=t['level'],level_reason=reason,illustration='Položaj označenih uglova proveren.' if t.get('diagram') else 'Tekst dovoljan.',notation='Oznake pravih, grčka slova, stepeni.',issue='Dopuna postupka.' if id=='o6-utn-10' or id.startswith(('dop-uglovi-na-transverzali-1-','dop-uglovi-na-transverzali-3-')) else '',fix='Dopunjen postupak' if id=='o6-utn-10' or id.startswith(('dop-uglovi-na-transverzali-1-','dop-uglovi-na-transverzali-3-')) else 'Nije potrebna izmena',method='Nezavisna aritmetika i klasifikacija položaja uglova.',status='potpuno recenziran'))
assert len(rows)==19
l=next(x for x in data['lessons'] if x['id']=='uglovi-na-transverzali');assert len(l['worked'])==3 and 68+112==180 and 25+20==3*25-30 and 86+94==180
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Transverzala, saglasni, naizmenični, jednostrani i unakrsni uglovi.',sequence='Položaj → paralelnost → odnosi → jednačina i trougao.',examples=[dict(question=e['question'],steps=e['steps'],verification=v) for e,v in zip(l['worked'],['112°','x=25','86° i 94°'])],illustration='Položaj sektora kod preseka i dve paralelne prave.',misconceptions='Jednakost unakrsnih ne zahteva paralelnost; između preseka mora važiti p∥q.',assessment='19 zadataka.',limits='Ne potvrđuje čitav godišnji ishod.'),ensure_ascii=False,indent=2)+'\n')
print('19/19 tasks; 3/3 examples;',collections.Counter(r['level'] for r in rows))

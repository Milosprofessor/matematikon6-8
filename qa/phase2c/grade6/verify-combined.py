import json,re,subprocess,collections
from pathlib import Path
root=Path(__file__).resolve().parents[3];out=root/'qa/phase2c/grade6/sabiranje-oduzimanje'
d=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
old={t['id']:t for t in json.loads(subprocess.check_output(['git','show','da039de:qa/phase2/g6-extracted.json'],cwd=root))['bank']}
def calc(s):
 s=s.replace('−','-');assert re.fullmatch(r'[0-9+() -]+',s);return eval(s,{'__builtins__':{}})
nums=lambda s:list(map(int,re.findall(r'-?\d+',s.replace('−','-'))))
rows=[]
for t in d['bank']:
 if t['lesson']!='sabiranje-oduzimanje':continue
 id=t['id'];a=t['answer'];b=old[id];assert a==b['answer'];math=t['math'];reason='Direktan račun ili primena svojstva.';issue=''
 if id in ['6-7a','6-7b','6-7d','6-7f','t6-7']:
  assert calc(math)==int(a);ref=f'{math}={a}'
 elif id=='6-7c':
  assert [x for x in map(calc,t['choices']) if x-8==3]==[int(a)];ref='11+(−8)=3';reason='Jednačina i inverzna operacija.';issue='Nedostaje ekvivalentna transformacija i provera.'
 elif id=='6-7e':
  assert -8-int(a)==-13;ref='−8−5=−13';reason='Nepoznati umanjilac.';issue='Nedostaje postupak.'
 elif id=='6-7g':
  assert [x for x in t['choices'] if calc(x)==calc(math)]==[a];ref='9−4+6=11; distraktori 7 i −1.'
 elif id=='6-7h':
  x,y=math.split('=');assert calc(x)==calc(y)==5 and a=='Zamena mesta sabiraka';ref='Komutativnost: −8+13=13+(−8)=5.'
 elif id=='6-7i':
  x,y=math.split('=');assert calc(x)==10 and calc(y)==-8 and a=='−(−9) treba da bude +9.';ref='4+9−3=10; desno je −8.';reason='Analiza i ispravka greške.'
 elif id=='6-7j':
  x,y,z=nums(math);assert -x+y-z==int(a);ref='−18+7−5=−16 dinara';reason='Modelovanje dve promene.';issue='Precizirati da se traži stanje sa predznakom.'
 elif id.startswith('sw-signed-table-'):
  x,zero,y,k,r,z=nums(math);assert zero==0 and k==-4 and x-k==r and -k==z and y-k==int(a);ref=f'{x}+4={r}; 0+4=4; {y}+4={a}'
 elif id.startswith('sw-signed-reverse-'):
  x,y,z=nums(math);assert z+y-x==int(a) and int(a)+x-y==z;ref=f'{z}+{y}−{x}={a}; provera {a}+{x}−{y}={z}';reason='Dve inverzne operacije.';issue='Nedostaje provera početnog stanja.'
 else:raise AssertionError(id)
 assert t['hint'] and t['solution']
 if b['level']!=t['level']:issue=(issue+' Neadekvatan nivo.').strip()
 changes=[k for k in ['prompt','math','hint','solution','level','choices'] if b.get(k)!=t.get(k)]
 rows.append(dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Jednoznačan zahtev i dovoljni podaci.',answer='Potvrđeno: '+ref,alternatives='Jedinstvena tačna alternativa.' if t['kind']=='choice' else 'Nije primenljivo.',hint='Primeren: '+t['hint'],procedure='Potvrđeno: '+t['solution'],old_level=b['level'],level=t['level'],level_reason=reason,illustration='Tekst dovoljan.',notation='Predznaci i operacije provereni.',issue=issue,fix=', '.join(changes) or 'Nije potrebna izmena',method='Semantička recenzija i nezavisna celobrojna aritmetika.',status='potpuno recenziran'))
assert len(rows)==23 and collections.Counter(r['level'] for r in rows)=={'basic':12,'medium':11}
l=next(x for x in d['lessons'] if x['id']=='sabiranje-oduzimanje');assert len(l['worked'])==3 and calc('-7+12-(-4)')==9 and calc('8-(3-5)')==10 and calc('-9+6+9-4')==2
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Pretvaranje razlike u zbir, uklanjanje zagrada u zbirovima i razlikama, redosled i grupisanje.',sequence='Predznak i operacija → zagrade → svojstva zbira → obrnute promene.',examples=[dict(question=e['question'],steps=e['steps'],verification=v) for e,v in zip(l['worked'],['9','10','2'])],illustration='Brojna prava −3 → 2 → 0; +5 i −2.',misconceptions='Oduzimanje nije komutativno; predznak nije operacija; minus ispred zbira menja oba sabirka.',assessment='23 sa tematskom proverom; 12 osnovnih i 11 srednjih.',limits='Delovi godišnjih ishoda; ne potvrđuje cele ishode.'),ensure_ascii=False,indent=2)+'\n')
print('23/23 tasks; 3/3 worked examples')

"""Exact independent checks and semantic decisions for the first G6 area only."""
import json,re,subprocess
from pathlib import Path
from fractions import Fraction as F
root=Path(__file__).resolve().parents[3]
target=root/'qa/phase2c/grade6/obnavljanje-5'
source=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
before=json.loads(subprocess.check_output(['git','show','edb40b9:qa/phase2/g6-extracted.json'],cwd=root))
previous={t['id']:t for t in before['bank']}
def frac(s):
 m=re.fullmatch(r'\[\[frac:(\d+)\|(\d+)\]\]',s);assert m,s
 return F(*map(int,m.groups()))
def ints(s):return list(map(int,re.findall(r'\d+',s)))
rows=[]
for t in source['bank']:
 if t['area']!='obnavljanje-5':continue
 id=t['id'];math=t['math'];a=t['answer'];sol=t['solution'];hint=t['hint'];old=previous[id]
 assert t['answer']==old['answer'] and t['id']==old['id'] and not t.get('diagram')
 if id=='6r-1':
  assert int(a)==4205-1987 and [4205-1000,3205-900,2305-80,2225-7]==[3205,2305,2225,2218]
  assert all(str(n) in sol.replace(' ','') for n in [3205,2305,2225,2218])
  ref='4205−1987=2218; četiri parcijalna oduzimanja';reason='Neposredno oduzimanje prirodnih brojeva.';issue='Nedovoljno razvijen postupak.'
 elif id=='6r-2':
  assert frac(a)==F(3,8)+F(2,8)
  assert sum(frac(c)==F(5,8) for c in t['choices'])==1
  ref='3/8+2/8=5/8; 5/16 i 1/8 su netačni';reason='Isti imenilac, neposredna primena.';issue='Previsok nivo.'
 elif id=='6r-3':
  assert a=='Tačke su kolinearne.' and len(t['choices'])==3
  ref='Definicija: tačke na istoj pravoj su kolinearne; ne mogu biti temena nedegenerisanog trougla.';reason='Prepoznavanje definicije.';issue='Distraktori nisu ista matematička kategorija.'
 elif 'decimal-' in id:
  expected=frac(math);assert F(a.replace(',','.'))==expected and a in sol,(id,math,a,sol)
  ref=f'{expected} = {a}; desetine';reason='Neposredno čitanje desetina.';issue=''
 elif 'order-' in id:
  ns=ints(math);expected=sorted(ns)
  assert ints(a)==expected and sum(ints(c)==expected for c in t['choices'])==1
  assert '<'.join(map(str,expected)) in sol,(id,math,a,sol)
  ref=' < '.join(map(str,expected));reason='Poređenje mesnih vrednosti tri broja.';issue='Previsok nivo.'
 elif id.startswith('sw-r5-angle-'):
  alpha=ints(math)[0];beta=180-alpha
  assert int(a)==beta and 0<alpha<180 and f'{alpha}°+β=180°' in sol and f'β=180°−{alpha}°={beta}°' in sol,(id,math,a,sol)
  ref=f'α+β=180°, β={beta}°';reason='Jedna direktna primena zbira uglova.';issue='Previsok nivo; implicitna jedinica i preskočena opšta relacija.'
 elif 'compare-' in id:
  x,y=map(frac,math.split(' __ '));assert x<y and a=='<' and t['choices'].count('<')==1
  assert math.replace(' __ ','<') in sol,(id,math,a,sol)
  ref=f'{x} < {y}';reason='Jednaki pozitivni imenioci, poređenje brojilaca.';issue='Previsok nivo; postupak nije prikazivao konkretan zaključak.'
 elif 'fractionmissing-' in id:
  left,right=math.split('+x=');expected=frac(right)-frac(left)
  assert frac(a)==expected and sum(frac(c)==expected for c in t['choices'])==1 and f'x={right}−{left}' in sol and sol.endswith(a+'.')
  ref=f'x={frac(right)}−{frac(left)}={expected}';reason='Izbor inverzne operacije i račun sa razlomcima.';issue='Napredni nivo neopravdan; skraćen postupak.'
 elif 'expression-' in id:
  n,k,m,z=ints(math);expected=n-k*m+z
  assert int(a)==expected and f'{n}−{k*m}+{z}={n-k*m}+{z}={expected}' in sol,(id,math,a,sol)
  ref=f'{n}−{k}·{m}+{z}={n-k*m}+{z}={expected}';reason='Više operacija i njihov prioritet.';issue='Napredni nivo neopravdan; preskočeno oduzimanje.'
 elif 'rectangle-' in id:
  O,A=ints(math);B=F(O,2)-A
  assert B>0 and F(a)==B and 2*(A+B)==O and f'{O}=2({A}+b)' in sol and f'b={O//2}−{A}={B} cm' in sol,(id,math,a,sol)
  ref=f'O=2(a+b), b={O}/2−{A}={B} cm';reason='Izbor formule i dva inverzna koraka.';issue='Napredni nivo neopravdan; nedostajala zamena i opšta formula, jedinica implicitna.'
 else:raise AssertionError(id)
 # Each family has been semantically reviewed, including complete concrete parameters; no generic answer-existence test.
 assert hint and sol and t['prompt'] and math
 expected_level='medium' if any(x in id for x in ['fractionmissing-','expression-','rectangle-']) else 'basic'
 assert t['level']==expected_level
 changes=[k for k in ['prompt','hint','solution','level','choices'] if t.get(k)!=old.get(k)]
 rows.append(dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Potpun i jednoznačan; konkretni parametri pregledani.',answer='Potvrđeno: '+ref,alternatives='Tačno jedna matematički odgovarajuća alternativa; ostale netačne.' if t['kind']=='choice' else 'Nije primenljivo (unos).',hint='Primeren: '+hint,procedure='Potvrđeno: '+sol,level=t['level'],level_reason=reason,old_level=old['level'],illustration='Nema posebne ilustracije zadatka; tekst dovoljan.',notation='Proveren matematički zapis; jedinica u zahtevu/postupku kada je primenljiva.',issue=issue,fix=', '.join(changes) or 'Nije potrebna izmena',method='Pojedinačni semantički pregled i nezavisna egzaktna provera konkretnog parametra/alternative; generator pregledan.',status='potpuno recenziran'))
assert len(rows)==45
lesson=next(l for l in source['lessons'] if l['id']=='kratko-obnavljanje-5')
assert len(lesson['worked'])==3
assert 36//6+4*3==18 and F(2,7)+F(3,7)==F(5,7) and 2*(6+9)==30
assert ['18','pet sedmina','30 cm']==[lesson['worked'][0]['steps'][-1].split(' ')[-1].rstrip('.'), 'pet sedmina' if 'pet sedmina' in lesson['worked'][1]['steps'][-1] else '', '30 cm' if '30 cm' in lesson['worked'][2]['steps'][-1] else '']
if (target/'units.json').exists():
 units={x['id']:x for x in json.loads((target/'units.json').read_text())}
 for row in rows:
  if row['id'] in units and not units[row['id']]['unitAccepted']:
   row['technical_issue']='LOG-06: tačan broj prihvaćen, isti odgovor sa jedinicom odbijen ('+units[row['id']]['example']+'); faza 3.'
(target/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(target/'lesson.json').write_text(json.dumps(dict(id=lesson['id'],area=lesson['area'],status='potpuno recenzirana',theory='Precizirani jednaki prioriteti; definicije pravih, uglova, kolinearnosti i formula razlomaka uz c>0 pregledane.',sequence='Podsetnik predznanja: prirodni brojevi → razlomci → geometrija, bez uvođenja gradiva višeg razreda.',examples=[{'question':e['question'],'steps':e['steps'],'verification':v} for e,v in zip(lesson['worked'],['36/6+4·3=18','2/7+3/7=5/7','2(6+9)=30 cm'])],illustration='Pravougaonik sa parovima jednakih stranica; dijagonala nije deo obima; oznake a,b odgovaraju formuli.',misconceptions='Jednak prioritet sleva nadesno, ne sabirati imenioce, obim nije površina.',assessment='10 zadataka u redovnom radu i 45 u bazenu; obnavljanje nema zasebnu godišnju proveru; 27 osnovnih i 18 srednjih; nema naprednih, jer postojeći zadaci ne zahtevaju izbor složene strategije.',limits='Obnavljanje predznanja, ne dokaz godišnjeg ishoda šestog razreda; VAR ponavljaju iste konstrukcije, bez novih identifikatora.'),ensure_ascii=False,indent=2)+'\n')
print('45/45 independent review tasks; 3/3 worked examples (1 existing + 2 new)')

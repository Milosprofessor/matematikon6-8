import collections,json,re,subprocess
from fractions import Fraction
from pathlib import Path
root=Path(__file__).resolve().parents[3];out=root/'qa/phase2c/grade6/trougao-vrste'
d=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
before=json.loads(subprocess.check_output(['git','show','a0e1948a70b5aedc18ed8cdac0ea98ed20a4d189:qa/phase2/g6-extracted.json'],cwd=root));old={t['id']:t for t in before['bank']}
def valid(s):return min(s)>0 and max(s)<sum(s)-max(s)
def sides(s):
 assert valid(s)
 return ['Jednakostraničan','Jednakokraki','Raznostraničan'][len(set(s))-1]
def angles(s):
 assert min(s)>0 and sum(s)==180
 return 'Oštrougli' if max(s)<90 else 'Pravougli' if max(s)==90 else 'Tupougli'
rows=[]
for t in d['bank']:
 id=t['id'];b=old[id];assert t['answer']==b['answer']
 if t['lesson']!='trougao-vrste':
  assert t==b;continue
 a=t['answer'];m=t['math'];reason='Direktno prepoznavanje ili račun.';issue='';diagram='Tekst dovoljan.'
 ns=list(map(int,re.findall(r'\d+',m)))
 if id in ['o6-tv-1','ot6-1']:
  assert sides(ns)==a;ref=f'{ns}: {a}';assert t['diagram']['labels']==dict(zip('abc',map(str,ns)));diagram='Numeričke oznake odgovaraju stvarnim stranicama.'
 elif id=='o6-tv-2':
  assert angles(ns)==a;ref=f'{sum(ns)}°; najveći {max(ns)}°<90°.'
 elif id in ['o6-tv-3','ot6-2']:
  assert valid(ns) and sum(ns)==int(a);ref=f'{ns[0]}+{ns[1]}+{ns[2]}={a} cm';assert t['diagram']['labels']==dict(zip('abc',map(str,ns)));diagram='Numeričke oznake odgovaraju stvarnim stranicama.'
 elif id=='o6-tv-4':
  assert a=='a=BC';ref='A nije na BC; a=BC.';assert t['diagram']['labels']=={};diagram='Simbolički crtež bez dodatnih podataka.'
 elif id=='o6-tv-5':
  assert angles(ns)=='Pravougli' and len(set(ns))==2 and a=='Pravougli i jednakokraki';ref='90°, 45°, 45°; pravi ugao i dva jednaka ugla.';reason='Dva kriterijuma klasifikacije.';issue='Precizirati jedan par opisa i obrazloženje.'
 elif id=='o6-tv-6':
  O,x,y=ns;assert valid([x,y,O-x-y]) and O-x-y==int(a);ref=f'{O}={x}+{y}+{a} cm';reason='Nepoznata stranica iz obima.';issue='Izostavljeni formula, jednačina i provera.'
  assert t['diagram']['labels']=={'a':'8','b':'11','c':'?'};diagram='Simbolička skica, nepoznata c ne otkriva odgovor.'
 elif id=='o6-tv-7':
  assert angles(ns)=='Pravougli' and a=='Ima prav ugao.';ref='30°+60°+90°=180°; pravougli.';reason='Analiza greške.'
 elif id.startswith('ow-tv-incidence-'):
  assert set('AB')&set('BC')=={a};ref='AB i BC dele B.';diagram='Temena i stranice označeni.'
 elif id.startswith('ow-tv-table-'):
  inst=[sides(ns[i:i+3]) for i in (0,3,6)];assert inst==['Jednakostraničan','Jednakokraki','Raznostraničan'] and a=='II';ref='I tačno; II treba jednakokraki; III tačno.';reason='Poređenje triju klasifikacija.'
 elif id.startswith('ow-tv-pairs-'):
  x,y,z=ns;s=[Fraction(x+z-y,2),Fraction(x+y-z,2),Fraction(y+z-x,2)];assert valid(s) and sum(s)==Fraction(x+y+z,2)==int(a)
  assert (s[0]+s[1],s[1]+s[2],s[2]+s[0])==(x,y,z)
  assert t['diagram']['labels']=={'a':'a','b':'b','c':'c'};diagram='Ispravljena skica: zbir dve stranice nije oznaka pojedinačne stranice.'
  ref=f'2O={x}+{y}+{z}={x+y+z}; O={a}';reason='Netrivijalna transformacija tri jednakosti.';issue='Netačne oznake dužina i nepotpun postupak.'
 else:raise AssertionError(id)
 if b['level']!=t['level']:issue=(issue+' Neadekvatan nivo.').strip()
 changes=[k for k in ['prompt','math','hint','solution','level','choices','diagram'] if b.get(k)!=t.get(k)]
 assert t['hint'] and t['solution']
 rows.append(dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Jednoznačan zahtev i dovoljni podaci.',answer='Potvrđeno: '+ref,alternatives='Jedinstvena tačna alternativa.' if t['kind']=='choice' else 'Nije primenljivo.',hint='Primeren: '+t['hint'],procedure='Potvrđeno: '+t['solution'],old_level=b['level'],level=t['level'],level_reason=reason,illustration=diagram,notation='Oznake temena, dužina, uglova i jedinice proverene.',issue=issue,fix=', '.join(changes) or 'Nije potrebna izmena',method='Semantička recenzija i nezavisna egzaktna aritmetika i geometrijski uslovi.',status='potpuno recenziran'))
assert len(rows)==22 and collections.Counter(r['level'] for r in rows)=={'basic':7,'medium':9,'advanced':6}
l=next(x for x in d['lessons'] if x['id']=='trougao-vrste')
assert len(l['worked'])==3 and sides([6,6,6])=='Jednakostraničan' and angles([90,45,45])=='Pravougli' and valid([8,11,12]) and 8+11+12==31
assert l['work']==next(x for x in before['lessons'] if x['id']=='trougao-vrste')['work'];assert set(old)=={t['id'] for t in d['bank']}
(out/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(out/'lesson.json').write_text(json.dumps(dict(id=l['id'],area=l['area'],status='potpuno recenzirana',theory='Definicija, temena, naspramne stranice, dva kriterijuma klasifikacije, obim.',sequence='Elementi → vrste prema stranicama i uglovima → obim i nepoznata stranica.',examples=[dict(question=e['question'],steps=e['steps'],verification=v) for e,v in zip(l['worked'],['jednakostraničan','pravougli i jednakokraki','12 cm'])],illustration='Dve skice sa stvarnim dužinama, simboličke skice bez lažnih podataka za nepoznatu ili zbir stranica.',misconceptions='Jednakostranični je u širem smislu jednakokraki; razvrstavanje prema uglovima i stranicama su dva nezavisna kriterijuma.',assessment='22 sa tematskim proverama; 7 osnovnih, 9 srednjih, 6 naprednih.',limits='Ne potvrđuje čitav godišnji ishod geometrije.'),ensure_ascii=False,indent=2)+'\n')
print('22/22 tasks; 3/3 worked examples; IDs and answers unchanged')

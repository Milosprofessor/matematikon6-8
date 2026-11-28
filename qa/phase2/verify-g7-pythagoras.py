"""Independent oracle for the 47 audited G7 findings, using exported production selectors."""
import json,math,pathlib
root=pathlib.Path(__file__).parent
data=json.loads((root/'g7-extracted.json').read_text())
tasks={t['id']:t for t in data['bank']}
lessons={l['id']:l for l in data['lessons']}
reg=json.loads((root/'register.json').read_text())
refs={}
def add(id,rel,sub,rad,answer,result):
 refs[id]=(rel,sub,rad,str(answer),result)
def leg(id,a,c,answer=None,rel='a²+b²=c²',var='b',unit='cm'):
 b=math.isqrt(c*c-a*a);assert b*b==c*c-a*a
 add(id,rel,f'{a}²+{var}²={c}²',f'{var}²={b*b}',b if answer is None else answer,f'{var}={b}'+(' '+unit if unit else ''))
leg('o7-ns-1',8,10);add('o7-ns-2','a²+b²=c²','a²+b²=c²','a²=c²−b²','a²=c²−b²','a²=c²−b²')
add('o7-ns-4','a²+b²=c²','a²+24²=25²','a²=49',math.isqrt(625-576),'a=7 cm')
leg('o7-ns-6',5,13,5*math.isqrt(169-25)//2);leg('o7-ns-7',9,15,'Treba b=12.',unit='');leg('ot7p-3',15,17)
add('o7-pk-3','a²+b²=d²','8²+b²=17²','b²=225',2*(8+math.isqrt(289-64)),'b=15 cm')
add('o7-pk-4','a²+a²=d²','2a²=(10√2)²=200','a²=100',math.isqrt(200//2),'a=10 cm')
leg('o7-pk-6',15,25,rel='a²+b²=d²')
add('o7-pk-7','a²+a²=d²','2a²=(8√2)²=128','a²=64','Da' if 4*math.isqrt(128//2)<=50 else 'Ne','a=8 m')
add('o7-jk-1','h²+(a/2)²=s²','h²+5²=13²','h²=144',math.isqrt(169-25),'h=12 cm')
add('o7-jk-2','h²+(a/2)²=a²','h²+4²=8²','h²=48','4√3 cm','h=4√3 cm')
assert 4**2*3==8**2-4**2
add('o7-jk-3','(a/2)²+h²=s²','(a/2)²+15²=17²','(a/2)²=64',2*math.isqrt(289-225),'a=16 cm')
add('o7-jk-7','(a/2)²+h²=s²','(a/2)²+8²=10²','(a/2)²=36',20+2*math.isqrt(100-64),'a=12 cm')
add('o7-ro-3','(d₁/2)²+(d₂/2)²=a²','5²+(d₂/2)²=13²','(d₂/2)²=144',2*math.isqrt(169-25),'d₂=24 cm')
add('o7-ro-7','(d₁/2)²+(d₂/2)²=a²','(d₁/2)²+15²=17²','(d₁/2)²=64',2*math.isqrt(289-225),'d₁=16 cm')
add('o7-tr-4','h²+(a−b)²=c²','h²+5²=13²','h²=144',math.isqrt(169-25),'h=12 cm')
add('o7-tr-6','h²+(a−b)²=c²','h²+10²=26²','h²=576',(18+8)*math.isqrt(676-100)//2,'h=24 cm')
add('ot7p-5','h²+(a/2)²=a²','h²+5²=10²','h²=75','5√3 cm','h=5√3 cm');assert 5**2*3==100-25
leg('pitagora-obrat-14',20,29,unit='')
add('ow-leg-identify-0','a²+b²=c²','a²+b²=c²','b²=c²−a²','[[sqrt:c^2−a^2]]','b=[[sqrt:c^2−a^2]]')
triples=[(3,4,5),(5,12,13),(8,15,17),(7,24,25),(9,12,15),(12,16,20)]
for i,(a,b,c) in enumerate(triples):
 assert a*a+b*b==c*c
 leg(f'ow-leg-compare-{i}',a,c,'a<b' if a<b else 'a>b',unit='')
 # Ladder's third, fifth and sixth use another known vertical side.
 heights=[4,12,15,24,12,16];h=heights[i];x=math.isqrt(c*c-h*h)
 add(f'ow-leg-ladder-{i}',f'x²+{h}²={c}²',f'x²+{h*h}={c*c}',f'x²={x*x}',x,f'x={x} m')
 k=i+1;add(f'ow-trap-reverse-{i}','x²+h²=c²',f'x²+{4*k}²={5*k}²',f'x²={9*k*k}',6*k+2*math.isqrt(25*k*k-16*k*k),f'x={3*k} cm')
 add(f'ow-quad-reverse-{i}','AC²+CD²=AD²',f'{a}²+CD²={c}²',f'CD²={b*b}',math.isqrt(c*c-a*a),f'CD={b} cm')
results=[]
for p in reg:
 id=p['id']
 if not id.startswith('G7-') or int(id[3:]) not in [1,2,*range(12,57)]:continue
 if p['task']=='solved':
  l=lessons[p['lesson']];s=' '.join(l['solved']['steps'])
  expected=('a²+b²=c²','8²+b²=17²','b²=289−64=225','b=15 cm') if id=='G7-001' else ('(a/2)²+h²=s²','6²+h²=10²','h²=100−36=64','h=8 cm')
  assert (17**2-8**2==15**2) if id=='G7-001' else (10**2-(12//2)**2==8**2)
 else:
  t=tasks[p['task']];s=t['solution'];rel,sub,rad,answer,result=refs[t['id']];assert t['answer']==answer,(id,t['answer'],answer)
  expected=(rel,sub,rad,result)
 for fragment in expected:assert fragment in s or (fragment.endswith('²=36') and '²=100−64=36' in s),(id,fragment,s)
 results.append({'finding':id,'task':p['task'],'independent_fragments':expected,'solution':s,'status':'Matematički proračun i ključ potvrđeni; UI pregled zaseban'})
assert len(results)==47
(root/'g7-pythagoras-verification.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
print('47/47 nezavisnih referentnih provera')

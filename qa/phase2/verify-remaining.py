"""Independent mathematical and content regression for the eleven targeted findings."""
import json,math
from fractions import Fraction
from pathlib import Path
root=Path(__file__).parent
data=[json.loads((root/f'g{g}-extracted.json').read_text()) for g in (6,7,8)]
lessons={l['id']:l for d in data for l in d['lessons']}
tasks={t['id']:t for d in data for t in d['bank']}
r={}
def check(id,ok,proof):
 assert ok,id
 r[id]=proof
l=lessons['s6-trapez']
check('G6-008',l['formulas']==['Trapez (osnovice a i b): m=(a+b):2','Deltoid (stranice a,a,b,b): O=2(a+b)'] and (7+13)/2==10 and 7+13+2*5==30 and 2*(4+7)==22,'m=10 cm; O trapeza=30 cm (nije 40); O deltoida=22 cm')
l=lessons['q-zapisi']
assert Fraction(12,18)==Fraction(2,3) and Fraction(3,5)==Fraction(3,2)/Fraction(5,2)
check('G6-010','bez ostatka' in l['rules'][0] and 'nenultim celim' in l['rules'][0] and 'različit od nule' in l['rules'][0] and 3%2!=0 and 5%2!=0,'12/18 : zajednički delilac 6 → 2/3; 3 i 5 nisu deljivi sa 2; količnik jeste isti, ali nije skraćivanje celobrojnim deliocem.')
l=lessons['s7-luk']
check('G7-004',6*10==60 and 6*2==12 and '60π dm' in l['worked'][1]['steps'][-1] and '(6π+12) dm' in l['worked'][2]['steps'][-1],'10 obrtaja × 6π = 60π dm; polukružni luk πr=6π dm, prečnik 12 dm')
l=lessons['s7-isecci']
check('G7-005',16**2==256 and (16//2)**2==64 and 0<256-64*math.pi<256 and '(256−64π) cm²' in l['worked'][1]['steps'][-1],'256−64π ≈ 54,94 cm², između 0 i 256')
t=tasks['s7-povrsina-7']
check('G7-006',8*5+8*3//2==int(t['answer']) and 'deli celu gornju stranicu' in t['prompt'],'40+12=52 cm²; unutrašnjosti se ne preklapaju i dele samo zajedničku stranicu')
def rot(x,y,deg):
 a=math.radians(deg);return (round(x*math.cos(a)-y*math.sin(a),9),round(x*math.sin(a)+y*math.cos(a),9))
check('G7-009',all(rot(2,3,a)==rot(2,3,-a) for a in [0,180,360,540]) and rot(2,3,90)!=rot(2,3,-90) and all(rot(0,0,a)==(0,0) for a in [0,30,90,180,360]) and 'višekratnik 180°' in lessons['s7-rotacija']['rules'][2],'R(α)p=R(−α)p za p≠0 iff sin α=0; centar fiksan; simetrija figure odvojena')
check('G7-010',all(tasks[f's7-rotacija-{i}']['level']=='basic' and Fraction(tasks[f's7-rotacija-{i}']['answer'])==Fraction(360,n) for i,n in [(9,8),(14,12)]),'360/8=45°, 360/12=30°; direktna primena jedne formule, osnovni nivo')
# Independent geometry: use exact dot products and intersection; browser independently reads rendered SVG.
cases=[]
for x in range(45,216):
 a=(Fraction(x),Fraction(36));b=(Fraction(65),Fraction(156));c=(Fraction(240),Fraction(156))
 h=(a[0], b[1]-(a[0]-b[0])*(c[0]-a[0])/120)
 feet=[]
 for p,u,v in [(a,b,c),(b,a,c),(c,a,b)]:
  dx,dy=v[0]-u[0],v[1]-u[1]
  k=((p[0]-u[0])*dx+(p[1]-u[1])*dy)/(dx*dx+dy*dy)
  f=(u[0]+k*dx,u[1]+k*dy)
  assert (p[0]-f[0])*dx+(p[1]-f[1])*dy==0
  assert (h[0]-p[0])*(f[1]-p[1])==(h[1]-p[1])*(f[0]-p[0])
  feet.append(tuple(map(float,f)))
 if x in [45,65,130,215]:cases.append(dict(x=x,H=list(map(float,h)),feet=feet))
check('G7-011',len(cases)==4 and cases[0]['H'][1]>156 and cases[1]['H']==[65,156] and cases[2]['H'][1]<156,'171 celobrojnih položaja A, tri normalnosti i konkurentnost po položaju; SVG zasebno')
r['G7-011-cases']=cases
(root/'remaining-results'/'math.json').write_text(json.dumps(r,ensure_ascii=False,indent=2))
print('8/8 mathematical/content checks; 513 exact projection/altitude incidences')

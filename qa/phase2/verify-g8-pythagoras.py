"""Independent exact arithmetic for G8-005/006/007. Run export-original.ts first."""
import json, math, re
from pathlib import Path
root=Path(__file__).parent
data=json.loads((root/'g8-extracted.json').read_text())
bank={t['id']:t for t in data['bank']}
results=[]
def leg(c,a):
    n=c*c-a*a
    assert n>0
    b=math.isqrt(n)
    assert b*b==n
    return b
def verify(id,answer,fragments,reason):
    t=bank[id]
    assert t['answer']==str(answer),(id,t['answer'],answer)
    sol=t['solution']
    for f in fragments: assert f in sol,(id,f,sol)
    results.append(dict(id=id,answer=str(answer),reference=reason,solution=sol,checked_fragments=fragments,lesson=t['lesson'],area=t['area']))
for prefix,hyp in [('triangle','c'),('perimeter','d')]:
    for i in range(6):
        id=f'sw-r7-{prefix}-{i}'
        m=bank[id]['math'];c,a=map(int,re.findall(r'\d+',m))
        b=leg(c,a)
        fr=[f'a²+b²={hyp}²',f'{a}²+b²={c}²',f'{a*a}+b²={c*c}',f'b²={c*c}−{a*a}={b*b}',f'b={b} cm','pozitivna']
        answer=b if prefix=='triangle' else 2*(a+b)
        if prefix=='perimeter':fr.append(f'O=2(a+b)=2·({a}+{b})={answer} cm')
        verify(id,answer,fr,f'{c}²−{a}²={b*b}; b={b}; rezultat={answer}')
def check(id,c,a,var,rel,sub,calc,answer=None,extra=()):
    b=leg(c,a)
    verify(id,b if answer is None else answer,[rel,sub,calc,f'{var}²={c*c}−{a*a}={b*b}',f'{var}={b} cm',*extra],f'{c}²−{a}²={b*b}; {var}={b}')
verify('s8-prizma-7',math.isqrt((6*6*2)//2),['a²+a²=d²','a²+a²=(6√2)²','2a²=72','a²=36','a>0','a=6 cm'],'d²=6²·2=72; a²=36')
check('s8-piramida-vezba',13,24//2,'s','t²+s²=e²','12²+s²=13²','144+s²=169',extra=['s>0'])
check('s8-valjak-9',17,15,'d','d²+H²=D²','d²+15²=17²','d²+225=289',leg(17,15)//2,['d>0','r=d:2=4 cm'])
check('s8-kupa-5',10,6,'H','r²+H²=s²','6²+H²=10²','36+H²=100',extra=['H>0'])
check('s8-lopta-8',13,12,'ρ','d²+ρ²=R²','12²+ρ²=13²','144+ρ²=169',extra=['ρ>0'])
check('s8-lopta-9',10,math.isqrt(64),'d','d²+ρ²=R²','d²+8²=10²','d²+64=100',extra=['P=πρ²=64π','ρ=8 cm','nije negativno'])
check('s8-piramida-13',13,12,'t','t²+H²=s²','t²+12²=13²','t²+144=169',2*leg(13,12),['t>0','a=2·5=10 cm'])
check('s8-polugodiste-7',17,8,'H','r²+H²=s²','8²+H²=17²','64+H²=289',str(8**2*leg(17,8)//3)+'π',['H>0','320π cm³'])
check('s8-polugodiste-8',13,math.isqrt(25),'d','ρ²+d²=R²','5²+d²=13²','25+d²=169',extra=['P=πρ²=25π','ρ=5 cm','nije negativno'])
check('s8-simA-13',15,12,'t','t²+H²=s²','t²+12²=15²','t²+144=225',2*leg(15,12),['t>0','a=2·9=18 cm'])
d=leg(26,24);b=leg(d,8)
verify('s8-simB-13',b,['d²+H²=D²','d²+24²=26²','d²+576=676','d²=676−576=100','d>0','d=10 cm','a²+b²=d²','8²+b²=10²','64+b²=100','b²=100−64=36','b>0','b=6 cm'],f'd={d}, b={b}')
assert len(results)==23
(root/'g8-results'/'math.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
print('23/23 independent exact checks')

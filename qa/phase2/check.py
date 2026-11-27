"""Check the generated Pythagorean families from the actual extracted learner bank."""
import json,math,re,pathlib
root=pathlib.Path(__file__).parent
tasks={t['id']:t for g in (6,7,8) for t in json.loads((root/f'g{g}-extracted.json').read_text())['bank']}
checks=[]
def assert_task(id,expected):
 t=tasks[id];assert str(t['answer'])==str(expected),(id,t['answer'],expected)
 assert '²+' in t['solution'],id
 checks.append({'id':id,'expected':expected,'solution':t['solution']})
for v in range(6):
 k=v+1
 assert_task(f'sw-r7-triangle-{v}',math.isqrt((5*k)**2-(3*k)**2))
 assert_task(f'sw-r7-perimeter-{v}',2*(3*k+math.isqrt((5*k)**2-(3*k)**2)))
 assert_task(f'ow-trap-reverse-{v}',6*k+2*math.isqrt((5*k)**2-(4*k)**2))
 t=tasks[f'ow-quad-reverse-{v}'];n=list(map(int,re.findall(r'(\d+) cm',t['math'])));assert_task(t['id'],math.isqrt(n[0]**2-n[1]**2))
 t=tasks[f'ow-leg-ladder-{v}'];n=list(map(int,re.findall(r'(\d+) m',t['math'])));assert_task(t['id'],math.isqrt(n[0]**2-n[1]**2))
 t=tasks[f'ow-leg-compare-{v}'];c,a=map(int,re.findall(r'(\d+)',t['math']));assert_task(t['id'],'a<b' if a<math.isqrt(c*c-a*a) else 'a>b')
(root/'generator-checks.json').write_text(json.dumps(checks,ensure_ascii=False,indent=2));print(len(checks),'nezavisnih provera generatora')

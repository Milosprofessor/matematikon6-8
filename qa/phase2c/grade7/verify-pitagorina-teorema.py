"""Independent exact key for the introductory lesson and its assessments."""
import json
import re
from math import isqrt
from pathlib import Path

data = json.loads((Path(__file__).resolve().parents[2] / 'phase2/g7-extracted.json').read_text())
lesson = next(l for l in data['lessons'] if l['id'] == 'pitagorina-teorema')
tasks = {t['id']: t for t in data['bank'] if t.get('lesson') == lesson['id']}

def hyp(a, b):
    n = a*a + b*b
    c = isqrt(n)
    assert c*c == n
    return c

key = dict(zip((f'o7-pt-{i}' for i in range(1, 8)),
               (hyp(8,15), 'c', 'Treba sabrati kvadrate.', hyp(9,12), 'Netačno',
                9*12//2, 'c=√(7²+24²)')))
assert hyp(7,24) == 25 and 8+15 > 17
key.update({'ow-pyth-valid-0':'Trougao je pravougli.', 'ot7p-1':hyp(12,16),
            'ot7p-2':'Da' if hyp(8,15) == 17 else 'Ne'})
for task_id, t in tasks.items():
    if task_id.startswith(('ow-pyth-path-', 'ow-pyth-square-')):
        a,b = map(int,re.findall(r'\d+',t['math']))
        key[task_id] = a+b-hyp(a,b) if '-path-' in task_id else a*a+b*b
assert key.keys() == tasks.keys() and len(key) == 22
for task_id, value in key.items():
    task = tasks[task_id]
    assert task['answer'] == str(value), task_id
    if task.get('choices'):
        assert task['choices'].count(str(value)) == 1, task_id
for text,(a,b) in zip(lesson['examples']+[' '.join(lesson['solved']['steps'])],
                      [(3,4),(5,12),(6,8),(9,12)],strict=True):
    c = hyp(a,b)
    for part in ['a² + b² = c²', f'{a}² + {b}²', f'{a*a} + {b*b}', f'[[sqrt:{c*c}]] = {c} cm']:
        assert part in text, part
print('22/22 zadatka, 4/4 primera.')

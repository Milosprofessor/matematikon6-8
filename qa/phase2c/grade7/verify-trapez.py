"""Exact independent key for right and isosceles trapezoids."""
import json
import re
from math import isqrt
from pathlib import Path

data=json.loads((Path(__file__).resolve().parents[2]/"phase2/g7-extracted.json").read_text())
lesson=next(l for l in data["lessons"] if l["id"]=="pitagora-trapez")
tasks={t["id"]:t for t in data["bank"] if t["lesson"]==lesson["id"]}

def root(n):
    r=isqrt(n)
    assert r*r==n and r>0
    return r

answers=[root(9**2+12**2),root(((26-10)//2)**2+6**2),"(a−b)/2",root(13**2-5**2),
         f"{(30-14)//2} cm",(18+8)*root(26**2-(18-8)**2)//2,"Treba (a−b)/2."]
keys={f"o7-tr-{i}":v for i,v in enumerate(answers,1)}
keys.update({"ow-trap-identify-0":"Kosi krak","ot7p-7":root(((24-14)//2)**2+12**2)})
for task_id,t in tasks.items():
    if "-perimeter-" in task_id:
        a,b,h=map(int,re.findall(r"\d+",t["math"]))
        assert (a-b)%2==0
        x=(a-b)//2
        k=root(x*x+h*h)
        keys[task_id]=a+b+2*k
        assert f"]]={x} cm" in t["solution"] and f"]]={k} cm" in t["solution"]
    if "-reverse-" in task_id:
        b,h,c=map(int,re.findall(r"\d+",t["math"]))
        x=root(c*c-h*h)
        keys[task_id]=b+2*x
        assert f"x={x} cm" in t["solution"]
assert len(keys)==21 and set(keys)==set(tasks)
for task_id,v in keys.items():
    t=tasks[task_id]
    assert t["answer"]==str(v),task_id
    if t.get("choices"):
        assert t["choices"].count(str(v))==1 and len(set(t["choices"]))==len(t["choices"])
    if task_id not in ("o7-tr-3","o7-tr-5","o7-tr-7","ow-trap-identify-0"):
        assert t["solution"].startswith("a²+b²=c²"),task_id
examples=lesson["examples"]+[" ".join(lesson["solved"]["steps"])]
assert 12**2+(18-8)**2==4*61
for s,result in zip(examples,[root(12**2+5**2),root(8**2+6**2),"2[[sqrt:61]]",root(6**2+8**2)],strict=True):
    assert s.startswith("a²+b²=c²") and f"={result} cm." in s
print("21 zadatak i četiri primera.")

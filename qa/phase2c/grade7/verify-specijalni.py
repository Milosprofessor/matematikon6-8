"""Exact lengths and areas for both families of special right triangles."""
import json
import re
from math import isqrt
from pathlib import Path

data=json.loads((Path(__file__).resolve().parents[2]/"phase2/g7-extracted.json").read_text())
lesson=next(l for l in data["lessons"] if l["id"]=="specijalni-pravougli-trouglovi")
tasks={t["id"]:t for t in data["bank"] if t["lesson"]==lesson["id"]}

def coefficient(square,radical):
    k=isqrt(square//radical)
    assert k>0 and k*k*radical==square
    return k

short=[f"{coefficient(6**2+6**2,2)}√2 cm",26//2,f"{coefficient(16**2-8**2,3)}√3 cm",
       "Katete su jednake.",f"10+{coefficient(5**2+5**2,2)}√2 cm","Kraća kateta je 8 cm.",
       "Druga je duža." if 2*4**2<(2*3)**2 else "Prva je duža."]
keys={f"o7-st-{i}":v for i,v in enumerate(short,1)}
keys["ot7p-8"]=f"{22//2} cm"
for task_id,t in tasks.items():
    if "-area45-" in task_id:
        a=int(re.search(r"katetu (\d+) cm",t["math"])[1])
        keys[task_id]=a*a//2
    if "-angle-" in task_id:
        c,a=map(int,re.findall(r"\d+",t["math"]))
        assert c==2*a
        keys[task_id]="30°"
    if "-reverse-" in task_id:
        k=int(re.search(r"duža kateta je (\d+)\[\[sqrt:3\]\]",t["math"])[1])
        c=isqrt(k*k+3*k*k)
        assert c*c==4*k*k and f"c={c} cm" in t["solution"]
        keys[task_id]=c
assert set(keys)==set(tasks) and len(keys)==26
for task_id,v in keys.items():
    t=tasks[task_id]
    assert t["answer"]==str(v),task_id
    if t.get("choices"):
        assert t["choices"].count(str(v))==1 and len(set(t["choices"]))==len(t["choices"])
assert "30°–60°–90°" in tasks["o7-st-3"]["math"]
for task_id in ("o7-st-1","o7-st-3","o7-st-5","o7-st-7"):
    assert tasks[task_id]["solution"].startswith("a²+b²=c²")
assert f"={coefficient(50,2)}[[sqrt:2]] cm" in lesson["examples"][0]
assert f"={2*7} cm" in lesson["examples"][1] and f"={18//2} cm" in lesson["examples"][2]
assert f"={coefficient(20**2-10**2,3)}[[sqrt:3]] cm" in lesson["solved"]["steps"][-1]
print("26 zadataka i četiri primera.")

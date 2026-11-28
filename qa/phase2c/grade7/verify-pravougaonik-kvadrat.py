"""Independent exact arithmetic on the production export."""
import json
import re
from math import isqrt
from pathlib import Path

data = json.loads((Path(__file__).resolve().parents[2] / "phase2/g7-extracted.json").read_text())
lesson = next(l for l in data["lessons"] if l["id"] == "pitagora-pravougaonik-kvadrat")
tasks = {t["id"]: t for t in data["bank"] if t["lesson"] == lesson["id"]}

def root(n):
    r = isqrt(n)
    assert r*r == n and r > 0
    return r

short = [root(5**2+12**2), "6√2 cm", 2*(8+root(17**2-8**2)),
         root(10**2*2//2), "d²=a²+b²", root(25**2-15**2),
         "Da" if 4*root(8**2*2//2) <= 50 else "Ne"]
assert 6**2+6**2 == 6**2*2
keys = {f"o7-pk-{i}": value for i,value in enumerate(short,1)}
keys.update({"ow-rect-identify-0":"AC","ot7p-4":root(8**2+15**2)})
for task_id,t in tasks.items():
    if "-squarearea-" in task_id:
        k = int(re.fullmatch(r"d=(\d+)\[\[sqrt:2\]\] cm",t["math"])[1])
        squared_diagonal = 2*k*k
        keys[task_id] = squared_diagonal//2
        assert t["diagram"]["labels"]["d"] == f"{k}√2"
        assert f"a²={k*k}" in t["solution"] and f"]]={root(k*k)} cm" in t["solution"]
    if "-compare-" in task_id:
        perimeter,area = map(int,re.findall(r"\d+",t["math"]))
        assert perimeter%4 == 0
        first,second = 2*(perimeter//4)**2, 2*area
        keys[task_id] = "Prvi" if first>second else "Drugi" if second>first else "Jednake su"
        assert f"={first}," in t["solution"] and f"={second}." in t["solution"]
assert set(keys)==set(tasks) and len(keys)==21
for task_id,value in keys.items():
    t=tasks[task_id]
    assert t["answer"] == str(value), task_id
    if t.get("choices"):
        assert len(set(t["choices"]))==len(t["choices"]) and str(value) in t["choices"]
    if task_id!="ow-rect-identify-0":
        assert t["solution"].startswith("a²+b²=c²"),task_id
for s, n, result in zip(lesson["examples"]+[" ".join(lesson["solved"]["steps"])],
                        [6**2+8**2,2*5**2,13**2-5**2,9**2+12**2],
                        ["10","5[[sqrt:2]]","12","15"],strict=True):
    assert s.startswith("a²+b²=c²") and f"[[sqrt:{n}]]={result} cm" in s
print("21 zadatak i četiri primera.")

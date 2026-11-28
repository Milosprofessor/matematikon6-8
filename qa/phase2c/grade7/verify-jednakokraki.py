"""Exact altitude, side, perimeter and area checks from exported student data."""
import json
import re
from math import isqrt
from pathlib import Path

data = json.loads((Path(__file__).resolve().parents[2] / "phase2/g7-extracted.json").read_text())
lesson = next(l for l in data["lessons"] if l["id"] == "pitagora-jednakokraki")
tasks = {t["id"]:t for t in data["bank"] if t["lesson"] == lesson["id"]}

def root(n):
    r = isqrt(n)
    assert r*r == n and r > 0
    return r

def height_coefficient(side):
    n = side**2 - (side//2)**2
    assert side%2 == 0 and n%3 == 0
    return root(n//3)

answers = [root(13**2-5**2), f"{height_coefficient(8)}√3 cm",
           2*root(17**2-15**2), root(8**2+15**2), "Osnovicu",
           f"{6*height_coefficient(6)//2}√3 cm²", 20+2*root(10**2-8**2)]
keys = {f"o7-jk-{i}":value for i,value in enumerate(answers,1)}
keys.update({"ot7p-5":f"{height_coefficient(10)}√3 cm", "ow-iso-split-0":"Dva jednaka dela"})
for task_id,t in tasks.items():
    if "-error-" in task_id:
        side,base = map(int,re.match(r"s=(\d+), osnovica=(\d+)",t["math"]).groups())
        height = root(side**2-(base//2)**2)
        assert base%2==0 and f"h={height} jedinica" in t["solution"]
        keys[task_id] = "Treba koristiti polovinu osnovice."
    if "-reverse-" in task_id:
        k = int(re.fullmatch(r"h=(\d+)\[\[sqrt:3\]\] cm",t["math"])[1])
        side = root(4*(3*k*k)//3)
        assert t["diagram"]["labels"]["h"]==f"{k}√3" and f"s={side} cm" in t["solution"]
        keys[task_id] = 3*side
assert set(keys)==set(tasks) and len(keys)==21
for task_id,value in keys.items():
    t=tasks[task_id]
    assert t["answer"]==str(value),task_id
    if t.get("choices"):
        assert t["choices"].count(str(value))==1 and len(set(t["choices"]))==len(t["choices"])
    if task_id not in ("ow-iso-split-0","o7-jk-5"):
        assert t["solution"].startswith("a²+b²=c²"),task_id
expected = [f"{root(25-9)} cm", f"{height_coefficient(6)}[[sqrt:3]] cm",
            f"{root(25+144)} cm", f"{root(100-36)} cm"]
for s,value in zip(lesson["examples"]+[" ".join(lesson["solved"]["steps"])],expected,strict=True):
    assert s.startswith("a²+b²=c²") and "="+value in s
print("21 zadatak i četiri primera.")

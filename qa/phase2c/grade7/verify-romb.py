"""Independent exact check of the rhombus lesson from the student-facing export."""
import json
import re
from fractions import Fraction
from math import isqrt
from pathlib import Path

data = json.loads((Path(__file__).resolve().parents[2] / "phase2/g7-extracted.json").read_text())
lesson = next(l for l in data["lessons"] if l["id"]=="pitagora-romb")
tasks = {t["id"]:t for t in data["bank"] if t["lesson"]==lesson["id"]}

def root(n):
    r = isqrt(n)
    assert r*r==n and r>0
    return r

def side(d1,d2):
    return Fraction(root(d1*d1+d2*d2),2)

answers = [side(12,16),14*20//2,2*root(13**2-5**2),"Polovine dijagonala",
           4*side(18,24),f"Netačno, a={side(6,8)}",2*root(17**2-15**2)]
keys = {f"o7-ro-{i}":value for i,value in enumerate(answers,1)}
keys.update({"ot7p-6":side(16,30),"ow-rhomb-angles-0":"90°"})
for task_id,t in tasks.items():
    if "-missingarea-" in task_id:
        area,d1=map(int,re.fullmatch(r"P=(\d+) cm², d_1=(\d+) cm",t["math"]).groups())
        keys[task_id]=Fraction(2*area,d1)
    if "-height-" in task_id:
        d1,d2=map(int,re.fullmatch(r"d_1=(\d+) cm, d_2=(\d+) cm",t["math"]).groups())
        s=side(d1,d2)
        area=Fraction(d1*d2,2)
        height=area/s
        assert Fraction(t["answer"].replace(",","."))==height
        assert f"s={s} cm" in t["solution"] and f"={area} cm²" in t["solution"]
        tenth=height*10
        assert tenth.denominator==1
        whole,decimal=divmod(int(tenth),10)
        keys[task_id]=f"{whole},{decimal}" if decimal else whole
assert set(keys)==set(tasks) and len(keys)==21
for task_id,value in keys.items():
    t=tasks[task_id]
    assert t["answer"]==str(value),task_id
    if t.get("choices"):
        assert len(set(t["choices"]))==len(t["choices"]) and t["choices"].count(str(value))==1
    if task_id in ("ot7p-6","o7-ro-1","o7-ro-3","o7-ro-5","o7-ro-6","o7-ro-7") or "-height-" in task_id:
        assert t["solution"].startswith("a²+b²=c²"),task_id
for s,result in zip(lesson["examples"]+[" ".join(lesson["solved"]["steps"])],
                    [f"{side(6,8)} cm",f"{side(10,24)} cm",f"{12*16//2} cm²",f"{side(16,30)} cm"],strict=True):
    assert "="+result+"." in s
print("21 zadatak i četiri primera; svih šest visina provereno racionalnom aritmetikom.")

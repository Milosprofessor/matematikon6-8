"""Exact key, option uniqueness, order of instruction and diagram labels."""
import json
import re
from math import isqrt
from pathlib import Path

data = json.loads((Path(__file__).resolve().parents[2] / "phase2/g7-extracted.json").read_text())
lesson = next(row for row in data["lessons"] if row["id"] == "nepoznata-stranica-pravougli")
tasks = {row["id"]: row for row in data["bank"] if row["lesson"] == lesson["id"]}

def root(n):
    value = isqrt(n)
    assert value > 0 and value**2 == n
    return value

keys = dict(zip((f"o7-ns-{i}" for i in range(1, 8)), (
    root(10**2-8**2), "a²=c²−b²", 7+24+root(7**2+24**2), root(25**2-24**2),
    "Ne" if 12>10 else "Da", 5*root(13**2-5**2)//2, f"Treba b={root(15**2-9**2)}."
)))
keys.update({"ot7p-3":root(17**2-15**2), "ow-leg-identify-0":"[[sqrt:c^2−a^2]]"})
for task_id, task in tasks.items():
    if task_id.startswith(("ow-leg-compare-", "ow-leg-ladder-")):
        c, known = map(int, re.findall(r"\d+",task["math"]))
        missing = root(c*c-known*known)
        if "-ladder-" in task_id:
            keys[task_id] = missing
            assert task["diagram"]["labels"] == {"a":"x", "b":str(known), "c":str(c)}
        else:
            keys[task_id] = "a<b" if known<missing else "a>b" if known>missing else "a=b"
assert set(keys) == set(tasks) and len(keys) == 21
for task_id, value in keys.items():
    t = tasks[task_id]
    assert t["answer"] == str(value), task_id
    if t.get("choices"):
        assert len(t["choices"]) == len(set(t["choices"])) and str(value) in t["choices"]
    if task_id != "o7-ns-5":
        assert t["solution"].startswith("a²+b²=c²"), task_id
for example, (known,c) in zip(lesson["examples"], [(6,10),(5,13),(7,25)], strict=True):
    unknown = root(c*c-known*known)
    assert example.startswith("a²+b²=c²") and f"[[sqrt:{unknown**2}]]={unknown} cm" in example
assert f"b={root(17**2-8**2)} cm" in lesson["solved"]["steps"][-1]
print("21 zadatak, četiri primera i šest crteža merdevina.")

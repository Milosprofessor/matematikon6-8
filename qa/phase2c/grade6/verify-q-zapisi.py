"""Exact independent checks of every answer and distractor in q-zapisi."""
import json
import re
from fractions import Fraction as F
from pathlib import Path

base = Path(__file__).resolve().parent
data = json.loads((base.parents[1] / "phase2/g6-extracted.json").read_text())
lesson = next(l for l in data["lessons"] if l["id"] == "q-zapisi")
tasks = [t for t in data["bank"] if t["lesson"] == lesson["id"]]

def value(s):
    s = re.sub(r"\[\[frac:([^|]+)\|([^\]]+)\]\]", r"\1/\2", s)
    s = s.replace("−", "-").replace(",", ".")
    if "=" in s or " i " in s:
        a, b = re.split("=| i ", s)
        return F(a) == F(b)
    return F(s)

results = [20*F(1,4), F(-3,5), F(12,18), -14/F(-2,3),
           F("-1.25").numerator, F(3,9), True, F(".0625").denominator,
           F(6,9), -24*F(".375"), 15/F(3,7), F(-7,8), 100*F(7,4), True]
rows = []
for n, (t, expected) in enumerate(zip(tasks, results, strict=True), 1):
    assert t["id"] == f"q-zapisi-{n}" and value(t["answer"]) == expected
    if t.get("choices"):
        assert [c for c in t["choices"] if value(c) == expected] == [t["answer"]]
    rows.append(dict(id=t["id"], area=t["area"], lesson=t["lesson"], answer=t["answer"],
                     hint=t["hint"], procedure=t["solution"], level=t["level"],
                     method="Nezavisan račun sa fractions.Fraction; proverene sve opcije.",
                     status="potpuno recenziran"))
assert F("-.375") == F(-3,8) and F("-.04") == F(-1,25)
out = base / lesson["id"]
def save(name, obj):
    (out/name).write_text(json.dumps(obj, ensure_ascii=False, indent=2)+"\n")
save("tasks.json", rows)
save("lesson.json", dict(id=lesson["id"], area=lesson["area"], status="potpuno recenzirana",
     sequence="Proširivanje i skraćivanje, konačan decimalni zapis, periodičan zapis.",
     examples=[dict(**lesson["solved"], verification="−375/1000 = −3/8")],
     assessment="14 zadataka; 10 u redovnom toku.", misconceptions="Dužina periode i cifra koja se ponavlja."))
print("14/14 zadataka; −0,375 i −0,04 egzaktno provereni.")

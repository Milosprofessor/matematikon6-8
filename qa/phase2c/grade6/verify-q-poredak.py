"""Provera poretka sa tačnim razlomcima, uključujući sve ponuđene odgovore."""
import json
import re
from fractions import Fraction as F
from math import floor
from pathlib import Path

base = Path(__file__).resolve().parent
data = json.loads((base.parents[1] / "phase2/g6-extracted.json").read_text())
lesson = next(l for l in data["lessons"] if l["id"] == "q-poredak")
tasks = [t for t in data["bank"] if t["lesson"] == lesson["id"]]

def number(s):
    return F(re.sub(r"\[\[frac:([^|]+)\|([^\]]+)\]\]", r"\1/\2", s).replace("−","-").replace(",","."))

def compare(a,b):
    return "<" if a<b else ">" if a>b else "="

def check(n,s):
    if n==1: return s!="Jednaki su" and number(s)==max(F("-.8"),F("-.3"))
    if n==2: return s==compare(F(".50"),F(1,2))
    if n==3: return number(s)<0
    if n==4: return number(s)==min(F(-3,4),F("-.7"),F(-4,5))
    if n==5: return number(s)==sum(F("-1.4")<x<F("2.1") for x in range(-2,4))
    if n==6: return s==compare(F(-5,6),F(-7,9))
    if n==7: return F("-.4")<number(s)<F("-.3")
    if n==8: return number(s)==floor(max(F("-2.8"),F(-7,3)))+1
    if n==9: return number(s)==sum(F(-2,3)<F(x,12)<F(-1,4) for x in range(-8,0))
    if n==10: return s==compare(-1,F(1,2))  # Divide both sides by positive a.
    if n==11: return number(s)==max(F(".09"),F(".1"),F(".099"))
    if n==12:
        a,b=s.split("=")
        return number(a)==number(b)
    if n==13: return number(s)==sum(F("-2.01")<x<F("2.01") for x in range(-3,4))
    if n==14: return number(s)==(F("-.4")+F("-.2"))/2
    raise AssertionError(n)

assert len(tasks)==14
rows=[]
for n,t in enumerate(tasks,1):
    assert t["id"]==f"q-poredak-{n}"
    assert [s for s in t.get("choices",[t["answer"]]) if check(n,s)]==[t["answer"]]
    rows.append(dict(id=t["id"],area=t["area"],lesson=lesson["id"],answer=t["answer"],
                     hint=t["hint"],procedure=t["solution"],level=t["level"],
                     method="Egzaktno poređenje, brojanje ili upoređivanje koeficijenata.",
                     status="potpuno recenziran"))
assert abs(F(-2,3))<abs(F("-.7"))
assert F(-5,8)==F("-.625")<F("-.6")
out=base/lesson["id"]
out.mkdir(exist_ok=True)
for name,doc in [("tasks",rows),("lesson",dict(id=lesson["id"],area=lesson["area"],
    sequence="Od znaka i položaja prema strogim granicama i opštem poređenju.",
    examples=[dict(**lesson["solved"],verification="20/30 < 21/30 po apsolutnoj vrednosti.")],
    misconceptions="Kod negativnih brojeva manja udaljenost od nule znači veći broj.",
    assessment="14 zadataka, 10 u redovnom toku.",status="potpuno recenzirana"))]:
    (out/(name+".json")).write_text(json.dumps(doc,ensure_ascii=False,indent=2)+"\n")
print("14/14 zadataka; sve alternative; oba primera.")

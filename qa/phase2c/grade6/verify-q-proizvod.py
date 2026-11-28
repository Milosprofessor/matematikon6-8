"""Egzaktna provera proizvoda, znaka i distributivnosti."""
import json
import re
from fractions import Fraction as F
from pathlib import Path

base=Path(__file__).resolve().parent
data=json.loads((base.parents[1]/"phase2/g6-extracted.json").read_text())
lesson=next(l for l in data["lessons"] if l["id"]=="q-proizvod")
tasks=[t for t in data["bank"] if t["lesson"]==lesson["id"]]

def value(s):
    s=re.sub(r"\[\[frac:([^|]+)\|([^\]]+)\]\]",r"\1/\2",s).replace("−","-").replace(",",".")
    parts=re.findall(r"[+-]?(?:\d+/\d+|\d+(?:\.\d+)?)",s)
    assert "".join(parts)==s
    return sum(map(F,parts))

results=[F("-.2")*3,"Pozitivan",0*F("-123.75"),F(-3,8)*F(4,9),F(3,4)*18,1/F("-.5"),
         F("-1.25")*F(".7")*8,F("-2.5")*F("3.7")+F("2.5")*F("1.7"),126*(1-F(1,4)),
         F("-.5")*(-4)*F("-1.5")*2,F(".04")*F(".5"),(F("-.4"),F("-.4")*(-3)),
         -3/F(".25"),F("-.75")*F("2.5"),F("-.8")*F("-2.5")]
assert F(-2,7)*F(-3,5)>0

def matches(n,s,result):
    if n==2:return s==result
    if n==12:
        a,b=s.split("a")
        return (value(a),value(b))==result
    return value(s)==result

rows=[]
for n,(t,result) in enumerate(zip(tasks,results,strict=True),1):
    assert t["id"]==(f"q-proizvod-{n}" if n<=14 else "s6-godisnja-2")
    assert [s for s in t.get("choices",[t["answer"]]) if matches(n,s,result)]==[t["answer"]]
    rows.append(dict(id=t["id"],area=t["area"],lesson=lesson["id"],answer=str(result),
                     hint=t["hint"],procedure=t["solution"],level=t["level"],
                     method="Egzaktan račun sa fractions.Fraction, sve alternative.",
                     status="potpuno recenziran"))
assert F("-.25")*F("19.6")==F("-4.9") and F(-2,3)*F(-9,4)==F("1.5")
out=base/lesson["id"]
out.mkdir(exist_ok=True)
for name,doc in [("tasks",rows),("lesson",dict(id=lesson["id"],area=lesson["area"],
    sequence="Znak i nula, skraćivanje, deo količine, distributivnost i promena.",
    examples=[dict(**lesson["solved"],verification="−0,25·19,6=−4,9.")],
    misconceptions="Skraćuju se činioci; pri distributivnosti množe se oba člana.",
    assessment="14 za vežbanje i jedan iz godišnje provere.",status="potpuno recenzirana"))]:
    (out/(name+".json")).write_text(json.dumps(doc,ensure_ascii=False,indent=2)+"\n")
print("15/15 zadataka i oba primera")

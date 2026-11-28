"""Egzaktna provera sabiranja, rastojanja, sredine i svih ponuđenih postupaka."""
import json
import re
from fractions import Fraction as F
from pathlib import Path

base=Path(__file__).resolve().parent
data=json.loads((base.parents[1]/"phase2/g6-extracted.json").read_text())
lesson=next(l for l in data["lessons"] if l["id"]=="q-zbir-razlika")
tasks=[t for t in data["bank"] if t["lesson"]==lesson["id"]]

def value(s):
    s=re.sub(r"\[\[frac:([^|]+)\|([^\]]+)\]\]",r"\1/\2",s).replace("−","-").replace(",",".")
    parts=re.findall(r"[+-]?(?:\d+/\d+|\d+(?:\.\d+)?)",s)
    assert "".join(parts)==s
    return sum(map(F,parts))

results=[F("-.6")+F(".9"),-F(1,5)-F(2,5),F(".25")-F("-.5"),-F(3,4)+F(1,6),
         abs(F("-2.4")-F("-.9")),F("-.25")-F("-.75"),F("-1.25")+F("3.6")+F("1.25")-F(".6"),
         F("-.6")-F("1.25"),-F(3,4)-(F(1,2)-F("1.5")),F("-2.75")-F("1.5")+3,
         -F(".08"),abs(F(-1,4)-F(3,4)),(F("-1.25")+F(".75"))/2,-F(1,2)-F(1,3)]
rows=[]
for n,(t,result) in enumerate(zip(tasks,results,strict=True),1):
    assert t["id"]==f"q-zbir-razlika-{n}"
    assert [s for s in t.get("choices",[t["answer"]]) if value(s)==result]==[t["answer"]]
    rows.append(dict(id=t["id"],area=t["area"],lesson=lesson["id"],answer=str(result),
                     hint=t["hint"],procedure=t["solution"],level=t["level"],
                     method="Egzaktan račun sa fractions.Fraction, sve alternative.",
                     status="potpuno recenziran"))
assert F(".75")-F("-1.5")==F("2.25") and abs(F("-.8")-F(".35"))==F("1.15")
out=base/lesson["id"]
out.mkdir(exist_ok=True)
for name,doc in [("tasks",rows),("lesson",dict(id=lesson["id"],area=lesson["area"],
    sequence="Od istih jedinica preko zajedničkog imenioca do premeštanja i modelovanja.",
    examples=[dict(**lesson["solved"],verification="0,75−(−1,5)=2,25.")],
    misconceptions="Rastojanje je nenegativno; promena i koordinata mogu biti negativne.",
    assessment="14 zadataka, 10 u redovnom toku.",status="potpuno recenzirana"))]:
    (out/(name+".json")).write_text(json.dumps(doc,ensure_ascii=False,indent=2)+"\n")
print("14/14 zadataka i oba primera")

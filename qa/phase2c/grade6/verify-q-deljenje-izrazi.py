"""Egzaktna provera deljenja, domena izraza i redosleda računskih operacija."""
import json
import re
from fractions import Fraction as F
from pathlib import Path

base=Path(__file__).resolve().parent
data=json.loads((base.parents[1]/"phase2/g6-extracted.json").read_text())
lesson=next(l for l in data["lessons"] if l["id"]=="q-deljenje-izrazi")
tasks=[t for t in data["bank"] if t["lesson"]==lesson["id"]]

def value(s):
    s=re.sub(r"\[\[frac:([^|]+)\|([^\]]+)\]\]",r"\1/\2",s).replace("−","-").replace(",",".")
    parts=re.findall(r"[+-]?(?:\d+/\d+|\d+(?:\.\d+)?)",s)
    assert "".join(parts)==s
    return sum(map(F,parts))

results=[1/F(-3,4),F("-.6")/F(".2"),None,F(-2,3)/F(-4,9),3/F(".375"),
         4/F(".5")*F(".25"),F("1.5")-F("2.4")/F("-.6"),F("-1.8")/F(".3"),
         (F("-1.5")+F(".25"))/(F(".1")-F(".6")),F(6)/(3*2),1/F("-.2"),-3/F(".75")-1,
         F(".75"),(F("-2.4")/F("-.3"))/2,(F("1.2")-2)/F("-.4")+F(1,2)]

def matches(n,s,result):
    if n==3:
        return ":" in s and value(s.split(":")[1])==0
    if n==10:
        values={"(6:3)·2":F(6,3)*2,"(6:3)·(2)":F(6,3)*2,"6:(3·2)":F(6,3*2)}
        return values[s]!=F(6,3)*2
    return value(s)==result

rows=[]
for n,(t,result) in enumerate(zip(tasks,results,strict=True),1):
    assert t["id"]==(f"q-deljenje-izrazi-{n}" if n<=14 else "s6-godisnja-4")
    assert [s for s in t.get("choices",[t["answer"]]) if matches(n,s,result)]==[t["answer"]]
    rows.append(dict(id=t["id"],area=t["area"],lesson=lesson["id"],answer=t["answer"],
                     hint=t["hint"],procedure=t["solution"],level=t["level"],
                     method="Egzaktan račun sa fractions.Fraction, sve alternative.",
                     status="potpuno recenziran"))
assert (F(-3,4)+F(1,2))/F("-.5")==F(1,2) and F("4.2")/F("-.7")+3==-3
out=base/lesson["id"]
out.mkdir(exist_ok=True)
for name,doc in [("tasks",rows),("lesson",dict(id=lesson["id"],area=lesson["area"],
    sequence="Recipročna vrednost, domen deljenja, prioritet i zagrade.",
    examples=[dict(**lesson["solved"],verification="(−3/4+1/2):(−0,5)=1/2.")],
    misconceptions="Nula kao deljenik i kao delilac; računanje sleva nadesno.",
    assessment="14 za vežbanje i jedan iz godišnje provere.",status="potpuno recenzirana"))]:
    (out/(name+".json")).write_text(json.dumps(doc,ensure_ascii=False,indent=2)+"\n")
print("15/15 zadataka i oba primera")

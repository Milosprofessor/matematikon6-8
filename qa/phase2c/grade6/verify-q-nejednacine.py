"""Egzaktna provera nejednačina, graničnih tačaka i celobrojnih rešenja."""
import json
import re
from fractions import Fraction as F
from pathlib import Path

base=Path(__file__).resolve().parent
data=json.loads((base.parents[1]/"phase2/g6-extracted.json").read_text())
lesson=next(l for l in data["lessons"] if l["id"]=="q-nejednacine")
tasks=[t for t in data["bank"] if t["lesson"]==lesson["id"]]

def value(s):
    s=re.sub(r"\[\[frac:([^|]+)\|([^\]]+)\]\]",r"\1/\2",s).replace("−","-").replace(",",".")
    parts=re.findall(r"[+-]?(?:\d+/\d+|\d+(?:\.\d+)?)",s)
    assert "".join(parts)==s
    return sum(map(F,parts))

def valid(n,s):
    if n==1:return s==("Da" if F("1.25")<F("1.25") else "Ne")
    if n in (2,4,6,12):
        op,cut={2:(">",1-F(".5")),4:(">",F(3,-2)),6:("≥",-2*F(".25")),12:("≥",-F("-.8"))}[n]
        return s.startswith("x"+op) and value(s[2:])==cut
    if n==3:return value(s)<=F("-.25")
    if n==5:return value(s)==max(x for x in range(-3,4) if x-F(".3")<2)
    if n==7:return s=="Puna tačka i poluprava udesno"  # Includes the endpoint and larger values.
    if n==8:return value(s)==sum(F("-1.5")<x<=2 for x in range(-2,4))
    if n==9:return value(s)==(170-80)//F("12.5")
    if n==10:return value(s)==min(x for x in range(-3,5) if F(".5")-2*x<F("-2.5"))
    if n==11:return s in ("≤","≥")
    if n==13:return s=="Beskonačno mnogo"  # 1/10+1/(10n) are distinct interior points for n≥2.
    if n==14:return s==("Da" if F("-.3")*0>F("-.01") else "Ne")
    if n==15:return value(s)==sum(-2*x>-7 for x in range(5))
    raise AssertionError(n)
assert len(tasks)==15
rows=[]
for n,t in enumerate(tasks,1):
    assert t["id"]==(f"q-nejednacine-{n}" if n<=14 else "s6-godisnja-5")
    assert [s for s in t.get("choices",[t["answer"]]) if valid(n,s)]==[t["answer"]]
    rows.append(dict(id=t["id"],area=t["area"],lesson=lesson["id"],answer=t["answer"],
                     hint=t["hint"],procedure=t["solution"],level=t["level"],
                     method="Egzaktan račun sa fractions.Fraction, sve alternative.",
                     status="potpuno recenziran"))
assert F(".5")-2==F("-1.5") and 2/F("-.5")==-4
out=base/lesson["id"]
out.mkdir(exist_ok=True)
for name,doc in [("tasks",rows),("lesson",dict(id=lesson["id"],area=lesson["area"],
    sequence="Pripadnost, smer i granica, presek uslova i celobrojna rešenja.",
    examples=[dict(**lesson["solved"],verification="0,5−x≥2 daje x≤−1,5.")],
    misconceptions="Negativan činilac obrće smer; stroga nejednakost isključuje granicu.",
    assessment="14 za vežbanje i jedan iz godišnje provere.",status="potpuno recenzirana"))]:
    (out/(name+".json")).write_text(json.dumps(doc,ensure_ascii=False,indent=2)+"\n")
print("15/15 zadataka i oba primera")

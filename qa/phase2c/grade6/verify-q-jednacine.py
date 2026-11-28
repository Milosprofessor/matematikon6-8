"""Egzaktna provera rešenja zamenom u polaznu jednačinu."""
import json
import re
from fractions import Fraction as F
from pathlib import Path

base=Path(__file__).resolve().parent
data=json.loads((base.parents[1]/"phase2/g6-extracted.json").read_text())
lesson=next(l for l in data["lessons"] if l["id"]=="q-jednacine")
tasks=[t for t in data["bank"] if t["lesson"]==lesson["id"]]

def value(s):
    s=re.sub(r"\[\[frac:([^|]+)\|([^\]]+)\]\]",r"\1/\2",s).replace("−","-").replace(",",".")
    parts=re.findall(r"[+-]?(?:\d+/\d+|\d+(?:\.\d+)?)",s)
    assert "".join(parts)==s
    return sum(map(F,parts))

def valid(n,s):
    if n==9: return s=="Svi racionalni brojevi"  # 0*x identically 0.
    if n==12: return s==("Da" if F(".75")*(-2)==F("-1.5") else "Ne")
    x=value(s)
    if n==1:return x+F(".7")==F(".2")
    if n==2:return x-F("1.25")==F("-.5")
    if n==3:return F(".5")*x==3
    if n==4:return F("-.4")-x==F(".6")
    if n==5:return x/F("-.75")==4
    if n==6:return x!=0 and F("1.5")/x==F("-.25")
    if n==7:return x+F(3,4)==F(1,2)
    if n==8:return (x-F(1,2))/(-2)==F("1.25")
    if n==10:return 2*x+F(".7")==F("3.2")
    if n==11:return x-F("-.4")==0
    if n==13:return x==0  # Constant left side 0 differs from -1.
    if n==14:return x/F(1,2)==-3
    raise AssertionError(n)
assert len(tasks)==14
rows=[]
for n,t in enumerate(tasks,1):
    assert t["id"]==f"q-jednacine-{n}"
    assert [s for s in t.get("choices",[t["answer"]]) if valid(n,s)]==[t["answer"]]
    rows.append(dict(id=t["id"],area=t["area"],lesson=lesson["id"],answer=t["answer"],
                     hint=t["hint"],procedure=t["solution"],level=t["level"],
                     method="Egzaktan račun sa fractions.Fraction, sve alternative.",
                     status="potpuno recenziran"))
assert F("-2.75")-F("-.75")==-2 and F("2.4")/(-4)==F("-.6")
out=base/lesson["id"]
out.mkdir(exist_ok=True)
for name,doc in [("tasks",rows),("lesson",dict(id=lesson["id"],area=lesson["area"],
    sequence="Nepoznati član, složena jednačina, broj rešenja i model.",
    examples=[dict(**lesson["solved"],verification="−2,75−(−0,75)=−2.")],
    misconceptions="Delilac ne sme biti nula; jednačina sa nultim koeficijentom može biti identitet ili nemoguća.",
    assessment="14 zadataka, 10 u redovnom toku.",status="potpuno recenzirana"))]:
    (out/(name+".json")).write_text(json.dumps(doc,ensure_ascii=False,indent=2)+"\n")
print("14/14 zadataka i oba primera")

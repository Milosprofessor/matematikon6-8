"""Record a spring lesson only after checking its complete exported task inventory."""
import json
from fractions import Fraction
from pathlib import Path

BASE = Path(__file__).resolve().parent

def save_review(lesson_id, numbered, assessments, examples, sequence):
    inventory = json.loads((BASE.parents[1]/"phase2/g6-extracted.json").read_text())
    lesson = next(l for l in inventory["lessons"] if l["id"] == lesson_id)
    expected = {f"{lesson_id}-{i}": value for i,value in enumerate(numbered,1)} | assessments
    tasks = [t for t in inventory["bank"] if t.get("lesson") == lesson_id]
    assert {t["id"] for t in tasks} == set(expected)
    rows = []
    for task in tasks:
        result = expected[task["id"]]
        def matches(option):
            if isinstance(result,str):
                return result == option
            try:
                return Fraction(option.replace("−","-").replace(",",".")) == result
            except ValueError:
                return False
        assert [s for s in task.get("choices",[task["answer"]]) if matches(s)] == [task["answer"]], task["id"]
        rows.append(dict(id=task["id"],area=task["area"],lesson=lesson_id,answer=task["answer"],
            hint=task["hint"],procedure=task["solution"],level=task["level"],method="Nezavisno rešenje i poređenje sa ponuđenim odgovorima.",
            status="potpuno recenziran"))
    out=BASE/lesson_id
    out.mkdir(exist_ok=True)
    detail=dict(id=lesson_id,area=lesson["area"],sequence=sequence,
        examples=[dict(**e,verification=v) for e,v in zip(lesson["worked"],examples,strict=True)],
        assessment=f"{len(rows)} zadataka; {len(lesson['work'])} u redovnom toku.",status="potpuno recenzirana")
    for file,doc in [("lesson",detail),("tasks",rows)]:
        (out/(file+".json")).write_text(json.dumps(doc,ensure_ascii=False,indent=2)+"\n")
    print(lesson_id,len(rows),"zadataka;",len(examples),"primera")

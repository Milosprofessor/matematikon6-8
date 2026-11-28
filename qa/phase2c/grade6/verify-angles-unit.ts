import fs from "node:fs";
import {grades} from "../../../app/content";
import {tasksForLesson} from "../../../app/content/enhancements";
import {getAreaTest} from "../../../app/content/area-tests";
import {emptyTask,submitTask} from "../../../app/lesson-work";
const l=grades.find(g=>g.id===6)!.areas.flatMap(a=>a.lessons).find(l=>l.id==="zbir-uglova-trougla")!;
const rows=[...tasksForLesson(l.id,l.tasks),...getAreaTest(6,"trougao")].filter(t=>t.kind==="input" && (t.id.startsWith("o6-zu-")||t.id.startsWith("ow-angles-")||t.id==="ot6-3")).map(t=>({id:t.id,requiredUnit:"°",numericAccepted:!!submitTask({...emptyTask(),value:t.answer},t).result,unitAccepted:!!submitTask({...emptyTask(),value:t.answer+"°"},t).result,example:t.answer+"°",phase3:"LOG-06"}));
fs.writeFileSync("qa/phase2c/grade6/zbir-uglova-trougla/units.json",JSON.stringify(rows,null,2)+"\n");console.log(rows);

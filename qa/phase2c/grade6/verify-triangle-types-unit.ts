import fs from "node:fs";
import {grades} from "../../../app/content";
import {tasksForLesson} from "../../../app/content/enhancements";
import {getAreaTest} from "../../../app/content/area-tests";
import {emptyTask,submitTask} from "../../../app/lesson-work";
const l=grades.find(g=>g.id===6)!.areas.flatMap(a=>a.lessons).find(l=>l.id==="trougao-vrste")!;
const rows=[...tasksForLesson(l.id,l.tasks),...getAreaTest(6,"trougao")].filter(t=>["o6-tv-3","o6-tv-6","ot6-2"].includes(t.id)).map(t=>({id:t.id,requiredUnit:"cm",numericAccepted:!!submitTask({...emptyTask(),value:t.answer},t).result,unitAccepted:!!submitTask({...emptyTask(),value:t.answer+" cm"},t).result,example:t.answer+" cm",phase3:"LOG-06"}));
fs.writeFileSync("qa/phase2c/grade6/trougao-vrste/units.json",JSON.stringify(rows,null,2)+"\n");console.log(rows);

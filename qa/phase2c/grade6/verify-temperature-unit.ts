import fs from "node:fs";
import {grades} from "../../../app/content";
import {tasksForLesson} from "../../../app/content/enhancements";
import {emptyTask,submitTask} from "../../../app/lesson-work";
const l=grades.find(g=>g.id===6)!.areas.flatMap(a=>a.lessons).find(l=>l.id==="sabiranje")!;
const t=tasksForLesson(l.id,l.tasks).find(t=>t.id==="6-4i")!;
const rows=[{id:t.id,requiredUnit:"°C",numericAccepted:!!submitTask({...emptyTask(),value:"4"},t).result,unitAccepted:!!submitTask({...emptyTask(),value:"4 °C"},t).result,example:"4 °C",phase3:"LOG-06"}];
fs.writeFileSync("qa/phase2c/grade6/sabiranje/units.json",JSON.stringify(rows,null,2)+"\n");
console.log(rows);

import fs from "node:fs";
import {grades} from "../../../app/content";
import {tasksForLesson} from "../../../app/content/enhancements";
import {emptyTask,submitTask} from "../../../app/lesson-work";
const l=grades.find(g=>g.id===6)!.areas.flatMap(a=>a.lessons).find(l=>l.id==="mnozenje")!;
const t=tasksForLesson(l.id,l.tasks).find(t=>t.id==="6-8j")!;
const rows=[{id:t.id,requiredUnit:"°C",numericAccepted:!!submitTask({...emptyTask(),value:"-12"},t).result,unitAccepted:!!submitTask({...emptyTask(),value:"-12 °C"},t).result,example:"-12 °C",phase3:"LOG-06"}];
fs.writeFileSync("qa/phase2c/grade6/mnozenje/units.json",JSON.stringify(rows,null,2)+"\n");
console.log(rows);

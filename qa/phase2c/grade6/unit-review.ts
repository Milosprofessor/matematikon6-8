import fs from "node:fs";
import {grades} from "../../../app/content";
import {tasksForLesson} from "../../../app/content/enhancements";
import {emptyTask,submitTask} from "../../../app/lesson-work";
const l=grades.find(g=>g.id===6)!.areas[0].lessons[0];
const rows=tasksForLesson(l.id,l.tasks).filter(t=>t.id.startsWith("sw-r5-angle-")||t.id.startsWith("sw-r5-rectangle-")).map(t=>{
 const unit=t.id.startsWith("sw-r5-angle-")?"°":" cm";
 const base=submitTask({...emptyTask(),value:t.answer},t);
 const withUnit=submitTask({...emptyTask(),value:t.answer+unit},t);
 return {id:t.id,requiredUnit:unit.trim(),numericAccepted:!!base.result,unitAccepted:!!withUnit.result,example:t.answer+unit,phase3:"LOG-06"};
});
fs.writeFileSync("qa/phase2c/grade6/obnavljanje-5/units.json",JSON.stringify(rows,null,2)+"\n");
console.log(rows)

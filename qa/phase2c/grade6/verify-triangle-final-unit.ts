import fs from "node:fs";
import {grades} from "../../../app/content";
import {tasksForLesson} from "../../../app/content/enhancements";
import {getAreaTest} from "../../../app/content/area-tests";
import {emptyTask,submitTask} from "../../../app/lesson-work";
for(const lesson of ["odnos-stranica-uglova","nejednakost-trougla"]){
 const l=grades.find(g=>g.id===6)!.areas.flatMap(a=>a.lessons).find(l=>l.id===lesson)!;
 const unit=lesson==="odnos-stranica-uglova"?"°":"cm";
 const items=[...tasksForLesson(l.id,l.tasks),...getAreaTest(6,"trougao")].filter(t=>t.kind==="input"&&(lesson==="odnos-stranica-uglova"?t.id==="o6-osu-7":t.id.startsWith("o6-nt-")||t.id.startsWith("ow-ineqtri-")||t.id==="ot6-7"));
 const rows=items.map(t=>{ const example=t.answer+(unit==="°"?"°":" cm");return {id:t.id,requiredUnit:unit,numericAccepted:!!submitTask({...emptyTask(),value:t.answer},t).result,unitAccepted:!!submitTask({...emptyTask(),value:example},t).result,example,phase3:"LOG-06"}});
 fs.writeFileSync("qa/phase2c/grade6/"+lesson+"/units.json",JSON.stringify(rows,null,2)+"\n");console.log(lesson,rows.length)
}

import fs from "node:fs";
import {grades} from "../../app/content";
import {sessionPool,unlockedPracticeLessonIds,pickAdaptiveTask} from "../../app/practice-engine";
import {getAreaTest} from "../../app/content/area-tests";
import {mathHtml} from "../../app/math-format";
import type {Task} from "../../app/content/types";
type Finding={id:string;task:string};
type BankTask=Task & {lesson:string;area:string;sources:string[]};
const register=JSON.parse(fs.readFileSync("qa/phase2/register.json","utf8")) as Finding[];
const wanted=register.filter(r=>/^G7-0(1[2-9]|[2-4][0-9]|5[0-6])$/.test(r.id)||["G8-005","G8-006","G8-007"].includes(r.id));
const rows=[];
for(const g of [7,8] as const){
 const grade=grades.find(x=>x.id===g)!;
 const bank=(JSON.parse(fs.readFileSync("qa/phase2/g"+g+"-extracted.json","utf8")) as {bank:BankTask[]}).bank;
 const completed=grade.areas.flatMap(a=>a.lessons.map(l=>l.id));
 for(const f of wanted.filter(r=>r.id.startsWith("G"+g)))for(const id of f.task.split(",")){
  const t=bank.find(x=>x.id===id)!;if(!t)throw Error(id);
  let route="",random:number[]=[],seed=completed;
  if(t.sources.includes("practice")){
   const scope={areaId:t.area,unlockedLessonIds:unlockedPracticeLessonIds(grade,t.area,completed,null)};
   const pool=sessionPool(grade,scope).filter(x=>x.level===t.level);
   const idx=pool.findIndex(x=>x.id===id);if(idx<0)throw Error("unreachable "+id);
   random=Array.from({length:pool.length-1},(_,j)=>pool.length-1-j===idx?0:.999999);
   let i=0;const selected=pickAdaptiveTask(grade,t.level,[],[],[],[],scope,()=>random[i++]??.999999);
   if(selected?.id!==id)throw Error("selection "+id+" "+selected?.id);
   route="#/pametno/"+g+"/"+t.area;
  }else if(id.startsWith("ot7p-")){
   const area=grade.areas.find(a=>a.id===t.area)!;
   for(let n=1;n<=area.lessons.length;n++){
    const prefix=area.lessons.slice(0,n).map(l=>l.id);
    const unlocked=unlockedPracticeLessonIds(grade,t.area,prefix,null);
    if(getAreaTest(g,t.area,new Set(unlocked)).some(x=>x.id===id)){seed=prefix;break}
   }
   route="#/test/"+g+"/"+t.area;
  }else{route="#/test/"+g+"/"+t.sources[0].split(":")[1]}
  rows.push({...t,grade:g,finding:f.id,route,seed,random,html:{prompt:mathHtml(t.prompt),math:mathHtml(t.math),hint:mathHtml(t.hint),solution:mathHtml(t.solution),choices:t.choices?.map(mathHtml)}});
 }
}
if(rows.length!==68||wanted.length!==48)throw Error("scope");
fs.writeFileSync("qa/phase2/final-ui/plan.json",JSON.stringify(rows,null,2));
console.log(rows.length,"tasks",wanted.length,"findings");

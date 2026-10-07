import assert from "node:assert/strict";
import test,{after} from "node:test";
import {readFile} from "node:fs/promises";
import {createServer} from "vite";
import {fileURLToPath} from "node:url";
import React from "react";
import {renderToStaticMarkup} from "react-dom/server";
const root=fileURLToPath(new URL("..",import.meta.url));
const vite=await createServer({appType:"custom",configFile:false,root,resolve:{alias:{"@":root}},server:{middlewareMode:true,hmr:false}});
after(()=>vite.close());
const {grades}=await vite.ssrLoadModule("/app/content/index.ts");
const {tasksForLesson}=await vite.ssrLoadModule("/app/content/enhancements.ts");
const {lessonWorkTasks,octoberVariants,octoberWorkPlans}=await vite.ssrLoadModule("/app/content/october-work.ts");
const {septemberVariants,septemberWorkPlans,septemberDemonstrations}=await vite.ssrLoadModule("/app/content/september-work.ts");
const {emptyTask,emptyLessonWork,submitTask,acceptProcedure,normalizeLessonWork,workTotals,resumeLessonWork,sameAnswer}=await vite.ssrLoadModule("/app/lesson-work.ts");
const {mathHtml}=await vite.ssrLoadModule("/app/math-format.ts");
const {localizeMathText}=await vite.ssrLoadModule("/app/transliteration.ts");
const {PythagorasDiagram}=await vite.ssrLoadModule("/app/pythagoras-diagram.tsx");
const {practiceLessons,sessionPool,pickAdaptiveTask,unlockedPracticeLessonIds,withTaskMetadata}=await vite.ssrLoadModule("/app/practice-engine.ts");
const {appendKnowledgeAttempt,lessonMastery,areaMastery,adaptiveLevel}=await vite.ssrLoadModule("/app/knowledge.ts");
const september=grades.flatMap(grade=>grade.areas.flatMap(area=>area.lessons.filter(lesson=>(lesson.month??area.month??"september")==="september").map(lesson=>({grade,area,lesson}))));
const fingerprint=t=>JSON.stringify([t.prompt,t.math,t.choices,t.diagram]);
const lessonTasks=lesson=>lessonWorkTasks(lesson.id,tasksForLesson(lesson.id,lesson.tasks));
const numeric=s=>Number(s.replace(",","."));

test("svih 34 septembarskih lekcija, uključujući obnavljanje, ima tačno 10 različitih zadataka",()=>{
 assert.equal(september.length,30);assert.equal(Object.keys(septemberWorkPlans).length,34);
 assert.deepEqual([6,7,8].map(id=>september.filter(x=>x.grade.id===id).length),[10,11,9]);
 for(const {lesson} of september){const tasks=lessonTasks(lesson);
  assert.equal(tasks.length,10,lesson.id);assert.equal(new Set(tasks.map(t=>t.id)).size,10);
  assert.equal(new Set(tasks.map(fingerprint)).size,10,lesson.id+": konkretan duplikat");
  assert.ok(new Set(tasks.map(t=>withTaskMetadata(t).taskType)).size>=8,lesson.id+": matematički tipovi");
  assert.deepEqual(tasks.slice(0,3).map(t=>t.level),["basic","basic","basic"]);
  assert.ok(tasks.slice(3).some(t=>t.level==="medium"));
  for(const task of tasks){assert.ok(task.hint&&task.solution);assert.ok(["input","choice"].includes(task.kind));}
 }
});
test("šira septembarska baza ima 86 novih tipova sa 516 varijanti koje se generišu jednom po lekciji",()=>{
 let types=0,count=0;const ids=[];
 for(const lessonId of Object.keys(septemberWorkPlans)){const lesson=grades.flatMap(g=>g.areas.flatMap(a=>a.lessons)).find(l=>l.id===lessonId)??{id:lessonId,tasks:[]};const pool=septemberVariants(lesson.id);types+=new Set(pool.map(t=>t.taskType)).size;count+=pool.length;ids.push(...pool.map(t=>t.id));
  assert.equal(new Set(pool.map(fingerprint)).size,pool.length);assert.equal(septemberVariants(lesson.id),pool);
  assert.ok(pool.every(t=>t.practiceOnly&&t.prerequisites.includes(lesson.id)));
  assert.ok(tasksForLesson(lesson.id,lesson.tasks).length>10);
 }
 assert.equal(types,86);assert.equal(count,516);assert.equal(new Set(ids).size,count);
});
test("svi numerički generatori provereni nezavisnim matematičkim izrazima u svih šest varijanti",()=>{
 const expected={
  "r5-decimal":v=>(v+2)/10,"r5-angle":v=>180-(40+5*v),"r5-expression":v=>(4*(v+3)+10)-4*(v+3)+6,"r5-rectangle":v=>(4*(v+4)+6)/2-(v+4),
  "integer-reverse":v=>-(-v-5+1),"absolute-diagram":v=>Math.abs(-v-2),"absolute-table":v=>Math.abs(v+2),"order-count":v=>Array.from({length:30},(_,i)=>i-15).filter(x=>x>-v-5&&x<-v-1).length,"order-digit":v=>Math.max(...Array.from({length:10},(_,i)=>i).filter(d=>-((v+2)*10+d)>-((v+2)*10+5))),
  "add-table":v=>(v+2)+(-v-7),"add-cancel":v=>-(v+8)+(v+3)+(v+8)-(v+1),"add-signcondition":v=>v+6,"subtract-table":v=>v+4-(-2),
  "distance-midpoint":v=>(-v-6+v+2)/2,"distance-two":v=>(-v-4+2-v)/2,"signed-table":v=>v+3-(-4),"signed-reverse":v=>-(v+6)+(v+8)-(v+5),
  "r6-absolute":v=>Math.abs(-v-8)-Math.abs(v+3),"r6-product":v=>(-v-2)*(-3),"r6-number":v=>-(v+5)-(v+3),"r6-expression":v=>-2*((v+3)-(v+7))-(v+2),
  "decimal-parts":v=>((v+2)/10)*100,"decimal-period":v=>[v+2,v+3,v+4][(10+3*v-1)%3],"convert-table":v=>(v+5)/4,"square-cancel":v=>(-v-4)**2-(v+4)**2+v+1,"squares-zero":()=>0,
  "interval-count":v=>Array.from({length:30},(_,i)=>i-15).filter(x=>x>-v-3&&x<=v+2).length,"root-table":v=>Math.sqrt((v+3)**2),"root-reverse":v=>(v+4)**2,
  "findroot-round":v=>Math.round(Math.sqrt([3,5,6,7,10,11][v])*100)/100,"rootrule-table":v=>Math.sqrt((v+3)**2)*Math.sqrt(4),"rootrule-missing":v=>(3*(v+2)/Math.sqrt(9))**2,
  "r7-area":v=>(v+4)*3,"r7-triangle":v=>Math.sqrt((5*(v+1))**2-(3*(v+1))**2),"r7-perimeter":v=>2*(3*(v+1)+Math.sqrt((5*(v+1))**2-(3*(v+1))**2)),
  "ratio-total":v=>5*(v+3)*2/5,"measure-units":v=>3*(v+2)/(v+2),"proportion-sum":v=>7*(v+2)*3/7,"tales-remaining":v=>4*(v+2)-4*(v+2)*(v+2)/(2*(v+2)),
  "similar-angle":v=>180-(35+v)-(65+v),"similar-perimeter":v=>(6+2*v)*(12+6*v)/(24+12*v),"apply-scale":v=>3*(v+2)*100/(v+2),"apply-shadowreverse":v=>2*(v+3)*3/2,
  "right-reverse":v=>5*(v+2)-(3*(v+2))**2/(5*(v+2)),"space-edges":()=>12-3,"normal-angle":()=>90
 };
 for(const {lesson} of september)for(const task of septemberVariants(lesson.id).filter(t=>t.kind==="input")){
  const [,type,v]=task.id.match(/^sw-(.*)-(\d+)$/);assert.ok(expected[type],task.id);assert.ok(Math.abs(numeric(task.answer)-expected[type](Number(v)))<1e-8,task.id);
  if(type==="distance-two"){const x=numeric(task.answer);assert.equal(Math.abs(x-(-Number(v)-4)),3);assert.equal(Math.abs(x-(2-Number(v))),3);}
  if(type==="add-signcondition"){const n=Number(v),x=numeric(task.answer);assert.ok(-n-5+x>0);assert.ok(-n-5+x-1<=0);}
 }
});
test("izbori nemaju duplikate, a kritične tvrdnje ostaju tačne u graničnim varijantama",()=>{
 for(const {lesson} of september)for(const task of tasksForLesson(lesson.id,lesson.tasks).filter(t=>t.kind==="choice")){
  assert.equal(new Set(task.choices).size,task.choices.length,task.id);assert.equal(task.choices.filter(c=>sameAnswer(c,task.answer)).length,1,task.id);
 }
 for(const task of septemberVariants("kvadrat-racionalnog").filter(t=>t.taskType==="square-error")){
  const v=Number(task.id.split("-").at(-1));assert.notEqual((v+3)**2,2*(v+3));
 }
 for(const task of septemberVariants("stavovi-slicnosti")){const v=Number(task.id.split("-").at(-1));assert.notEqual(3*(v+1)/(6*(v+1)),5*(v+1)/(11*(v+1)));}
 const fractionTask=septemberVariants("kratko-obnavljanje-6").filter(t=>t.taskType==="r6-fraction");
 for(const task of fractionTask){const v=Number(task.id.split("-").at(-1));assert.ok(Math.abs(1/(v+2)-1/(2*(v+2))-1/(2*(v+2)))<1e-10);}
});
test("novo gradivo poštuje svaki septembarski prag: bez budućih korena, operacija i proporcija",()=>{
 const beforeRoot=["kratko-obnavljanje-6","decimalni-zapis","decimalni-u-razlomak","kvadrat-racionalnog","kvadrati-brojeva","realni-brojevi","brojna-prava","intervali"];
 for(const id of beforeRoot)assert.doesNotMatch(JSON.stringify(septemberVariants(id)),/√|sqrt:|koren/i,id);
 assert.doesNotMatch(JSON.stringify(septemberVariants("kvadrat-racionalnog")),/x\^2|x²/);
 for(const id of ["skup-celih-brojeva","apsolutna-vrednost","uporedjivanje"])assert.doesNotMatch(JSON.stringify(septemberVariants(id)),/množen|deljen|sabiran|oduziman/i);
 assert.doesNotMatch(JSON.stringify(septemberVariants("brojna-prava")),/zaokruž/i);
 assert.doesNotMatch(JSON.stringify(septemberVariants("odredjivanje-korena")),/izdvoji|rastavlj|koren proizvoda/i);
 assert.doesNotMatch(JSON.stringify(septemberVariants("razmera-duzi")),/proporcij|unakrsn/i);
 for(const {grade,area,lesson} of september){const ordered=practiceLessons(grade,area.id);const at=ordered.findIndex(x=>x.lesson.id===lesson.id),reached=ordered.slice(0,at+1).map(x=>x.lesson.id);
  for(const task of lessonTasks(lesson))assert.ok((task.prerequisites??[]).every(id=>reached.includes(id)),task.id);
 }
});
test("čist učenik u svakoj lekciji prolazi 1/10–10/10, greši, koristi postupak i nastavlja posle izlaska",()=>{
 for(const {lesson} of september){const tasks=lessonTasks(lesson);let work=emptyLessonWork(tasks.map(t=>t.id));let attempts=[];
  for(let i=0;i<10;i++){const task=tasks[i];let state=emptyTask();
   if(i===2||i===7)state=submitTask({...state,value:"pogrešno"},task);
   work.tasks[task.id]=state;work.current=i;work=normalizeLessonWork(JSON.parse(JSON.stringify({[lesson.id]:work})))[lesson.id];state=work.tasks[task.id];
   state=i===7?acceptProcedure({...state,solution:true,hint:true}):submitTask({...state,value:task.answer},task);
   work.tasks[task.id]=state;work.current=i+1;
   assert.equal(state.result.finalCorrect,true);assert.equal(state.result.firstCorrect,i!==2&&i!==7);
   if(i===2)assert.equal(state.result.attemptCount,2);
   attempts=appendKnowledgeAttempt(attempts,{taskId:task.id,lessonId:lesson.id,skill:task.skill,taskType:withTaskMetadata(task).taskType,level:task.level,source:"lesson",...state.result,firstAttemptCorrect:state.result.firstCorrect,attemptsCount:state.result.attemptCount,at:i});
  }
  work=normalizeLessonWork(JSON.parse(JSON.stringify({[lesson.id]:work})))[lesson.id];assert.deepEqual(workTotals(work),{first:8,final:10,total:10});assert.equal(work.current,10);
  const corrected=attempts.map(a=>({...a,firstCorrect:false,firstAttemptCorrect:false,attemptsCount:2}));assert.ok(lessonMastery(attempts,lesson.id).score>lessonMastery(corrected,lesson.id).score+30);
 }
});
test("stari pojedinačni rezultati se obnavljaju bez brisanja ili ponovnog brojanja statistike",()=>{
 for(const grade of grades){const {lesson}=september.find(x=>x.grade.id===grade.id);const tasks=lessonTasks(lesson);
  const original=[{taskId:tasks[0].id,lessonId:lesson.id,skill:tasks[0].skill,source:"lesson",level:"basic",firstCorrect:false,firstAttemptCorrect:false,finalCorrect:true,attemptsCount:2,usedSolution:false,at:1}];
  const serialized=JSON.stringify(original);const work=resumeLessonWork(lesson.id,tasks,original);
  assert.equal(work.current,1);assert.equal(workTotals(work).first,0);assert.equal(workTotals(work).final,1);assert.equal(work.tasks[tasks[0].id].attempts,2);assert.equal(JSON.stringify(original),serialized);
  const saved={...work,current:4,run:2};assert.equal(resumeLessonWork(lesson.id,tasks,original,saved),saved);
  assert.deepEqual(workTotals(resumeLessonWork(lesson.id,tasks,[])),{first:0,final:0,total:10});
 }
});
test("više sesija na svakom obrađenom pragu: različiti tipovi, bez prelaska u drugu oblast ili buduću lekciju",()=>{
 let seed=22331;const random=()=>((seed=seed*48271%2147483647)/2147483647);
 for(const grade of grades)for(const area of grade.areas){const ordered=practiceLessons(grade,area.id),sept=ordered.filter(x=>(x.lesson.month??x.area.month??"september")==="september");
  for(const frontier of sept)for(const profile of ["weak","average","strong"]){const last=frontier.lesson.id;const unlocked=unlockedPracticeLessonIds(grade,area.id,[],last);const scope={areaId:area.id,unlockedLessonIds:unlocked},pool=sessionPool(grade,scope);
   assert.ok(pool.length);assert.ok(pool.every(t=>unlocked.includes(t.lessonId)));
   const results=[],used=[],fingerprints=new Set();for(let i=0;i<10;i++){
    const task=pickAdaptiveTask(grade,"basic",results,used,[],[],scope,random);assert.ok(task);assert.ok(unlocked.includes(task.lessonId));assert.ok(!used.includes(task.id));
    assert.equal((grade.areas.find(a=>a.id===task.areaId).practiceGroupId??task.areaId),(area.practiceGroupId??area.id));
    if(results.length)assert.notEqual(task.taskType,results.at(-1).task.taskType,last);
    assert.ok(!fingerprints.has(fingerprint(task)),task.id+": ponovljen konkretan zadatak");fingerprints.add(fingerprint(task));used.push(task.id);
    const firstCorrect=profile==="strong"||(profile==="average"&&i%4!==0);results.push({task,firstCorrect,usedSolution:false,finalCorrect:true,attemptCount:firstCorrect?1:2});
   }
   if(grade.id===7&&!unlocked.includes("kvadratni-koren"))assert.doesNotMatch(JSON.stringify(results),/√|sqrt:|koren/i);
   if(profile==="strong")assert.ok(results.some(r=>r.task.level!=="basic"));
   if(profile==="weak")assert.equal(adaptiveLevel("basic",results),"basic");
  }
 }
});
test("notacija i odgovori novih zadataka rade u oba pisma, uključujući negativne decimale i indekse",()=>{
 for(const {lesson} of september)for(const task of septemberVariants(lesson.id))for(const text of [task.math,task.hint,task.solution,...(task.choices??[])])for(const script of ["cyrl","latn"]){
  assert.doesNotMatch(mathHtml(localizeMathText(text,script)),/\[\[(?:frac|sqrt):/,task.id);
 }
 for(const [a,b] of [["-5","−5"],["-12","−12"],["−3,5","-3.5"],["-3.5","-3,5"],["3,5","3.5"]])assert.ok(sameAnswer(a,b));
 assert.equal(localizeMathText("h_a=3 cm, x=−3,5, p_2∥q_2, Z⊂Q⊂R","cyrl"),"h_a=3 cm, x=−3,5, p_2∥q_2, Z⊂Q⊂R");
});
test("visina i odsečci hipotenuze imaju matematički tačan crtež u datoj razmeri",()=>{
 const diagram={type:'pythagoras',variant:'right-altitude',labels:{p:'4',q:'25',h:'?'}};
 const html=renderToStaticMarkup(React.createElement(PythagorasDiagram,{diagram,label:'Visina',caption:'Crtež'}));
 const d=html.match(/class="shape" d="([^"]+)"/)[1],pts=[...d.matchAll(/[ML]([\d.-]+) ([\d.-]+)/g)].map(m=>[+m[1],+m[2]]),[A,C,B]=pts;
 const dot=(A[0]-C[0])*(B[0]-C[0])+(A[1]-C[1])*(B[1]-C[1]);assert.ok(Math.abs(dot)<1e-7);
 assert.ok(Math.abs((C[0]-A[0])/(B[0]-C[0])-25/4)<1e-8);assert.match(html,/>25</);assert.match(html,/>4</);
});
test("jedna zajednička komponenta čuva kratku teoriju, rezultate i velike touch tastere",async()=>{
 const page=await readFile(new URL("../app/page.tsx",import.meta.url),"utf8"),css=await readFile(new URL("../app/globals.css",import.meta.url),"utf8");
 assert.equal((page.match(/function LessonWorkSequence/g)??[]).length,1);assert.doesNotMatch(page,/OctoberLessonWork|lessonExamples\.map/);
 assert.match(page,/octoberDemonstrations\.has\(lesson.id\)\|\|septemberDemonstrations\.has/);assert.equal(septemberDemonstrations.size,11);
 assert.match(page,/<LessonLearningContent lesson=\{lesson\}/);assert.match(page,/firstAttemptCorrect:result.firstCorrect/);assert.match(page,/attemptsCount:result.attemptCount/);
 assert.match(page,/matematikon68-progress-v1-\$\{gradeId\}/);assert.doesNotMatch(page,/localStorage\.clear|localStorage\.removeItem/);
 assert.match(css,/\.work-navigation>button\{[^}]*min-height:50px/);assert.match(css,/aside\.october-work-aside\{grid-template-columns:1fr/);
 for(const {lesson} of september.filter(x=>!["mnozenje","deljenje"].includes(x.lesson.id)))assert.equal(octoberVariants(lesson.id).length,0);
 assert.equal(Object.keys(octoberWorkPlans).length,27);
});

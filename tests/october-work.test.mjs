import assert from "node:assert/strict";
import test,{after} from "node:test";
import {readFile} from "node:fs/promises";
import {createHash} from "node:crypto";
import {createServer} from "vite";
import {fileURLToPath} from "node:url";
import React from "react";
import {renderToStaticMarkup} from "react-dom/server";

const root=fileURLToPath(new URL("..",import.meta.url));
const vite=await createServer({appType:"custom",configFile:false,root,resolve:{alias:{"@":root}},server:{middlewareMode:true,hmr:false}});
after(()=>vite.close());
const {grades}=await vite.ssrLoadModule("/app/content/index.ts");
const {tasksForLesson}=await vite.ssrLoadModule("/app/content/enhancements.ts");
const {lessonWorkTasks,octoberVariants,octoberWorkPlans,octoberDemonstrations}=await vite.ssrLoadModule("/app/content/october-work.ts");
const {emptyTask,emptyLessonWork,submitTask,acceptProcedure,normalizeLessonWork,workTotals,sameAnswer}=await vite.ssrLoadModule("/app/lesson-work.ts");
const {mathHtml}=await vite.ssrLoadModule("/app/math-format.ts");
const {localize,localizeMathText}=await vite.ssrLoadModule("/app/transliteration.ts");
const {PythagorasDiagram}=await vite.ssrLoadModule("/app/pythagoras-diagram.tsx");
const {practiceLessons,sessionPool,pickAdaptiveTask,unlockedPracticeLessonIds,withTaskMetadata}=await vite.ssrLoadModule("/app/practice-engine.ts");
const {appendKnowledgeAttempt,lessonMastery}=await vite.ssrLoadModule("/app/knowledge.ts");
const october=grades.flatMap(grade=>grade.areas.flatMap(area=>area.lessons.filter(lesson=>(lesson.month??area.month??"september")==="october").map(lesson=>({grade,area,lesson}))));
const fingerprint=t=>JSON.stringify([t.prompt,t.math,t.choices,t.diagram]);

test("aktivni oktobarski raspored prati 29 lekcija sa Drive-a",()=>{assert.equal(october.length,29);});
test("29 oktobarskih lekcija ima po 10 izabranih interaktivnih zadataka",()=>{
 assert.equal(october.length,29);assert.equal(Object.keys(octoberWorkPlans).length,27);
 assert.deepEqual([6,7,8].map(id=>october.filter(x=>x.grade.id===id).length),[10,12,7]);
 for(const {lesson} of october){
  const pool=tasksForLesson(lesson.id,lesson.tasks),tasks=lessonWorkTasks(lesson.id,pool);
  assert.equal(tasks.length,10,lesson.id);assert.equal(new Set(tasks.map(t=>t.id)).size,10);
  assert.equal(new Set(tasks.map(fingerprint)).size,10,lesson.id+": duplikat");
  assert.ok(new Set(tasks.map(t=>withTaskMetadata(t).taskType)).size>=8,lesson.id+": tipovi");
  assert.equal(tasks.filter(t=>t.level==="basic").length,3);
  assert.ok(tasks.some(t=>t.level==="medium"));if(!["snalazenje-u-prostoru","tacka-prava-ravan-osnove"].includes(lesson.id))assert.ok(tasks.some(t=>t.level==="advanced"),lesson.id);
  for(const task of tasks)assert.ok(task.kind==="input"||task.kind==="choice");
 }
});
test("šira baza ima 82 nova tipa i deduplikovane varijante, a ne samo izabranih 10",()=>{
 let count=0,types=0;
 for(const lessonId of Object.keys(octoberWorkPlans)){const lesson={id:lessonId};const tasks=octoberVariants(lesson.id);count+=tasks.length;types+=new Set(tasks.map(t=>t.taskType)).size;
  assert.equal(new Set(tasks.map(fingerprint)).size,tasks.length);
  assert.ok(tasks.every(t=>t.practiceOnly&&t.prerequisites.includes(lesson.id)));
  assert.equal(octoberVariants(lesson.id),tasks,"generisanje se kešira po lekciji");
 }
 assert.equal(types,82);assert.equal(count,402);
});
test("odgovori svih numeričkih generatora provereni nezavisnim formulama",()=>{
 const triples=[[3,4,5],[5,12,13],[8,15,17],[7,24,25],[9,12,15],[12,16,20]];
 const expected={
  "mul-table":v=>-3*(v+3),"mul-distribute":v=>-20*(v+3),"div-table":()=>-6,"div-both":v=>-3*(v+3),"md-table":()=>12,"md-context":()=>-3,"expr-missing":()=>3,
  "tv-pairs":v=>3*(v+4)+3,"angles-bisect":v=>90-(28+3*v),"angles-difference":v=>170-2*(30+2*v),
  "external-sum":v=>150-7*v,"external-equal":v=>50+2*v,"external-third":v=>70+2*v,
  "ineqtri-isosceles":v=>2*(v+4)+1,"ineqtri-perimeter":v=>4*(v+4)+5,"construct-reverse":v=>2*[15,30,45,60,75,90][v],
  "pyth-square":v=>(v+3)**2+(v+4)**2,"pyth-path":v=>triples[v][0]+triples[v][1]-triples[v][2],"leg-ladder":v=>Math.sqrt(triples[v][2]**2-triples[v][1]**2),
  "rect-squarearea":v=>(v+3)**2,"iso-reverse":v=>6*(v+3),"quad-reverse":v=>Math.sqrt(triples[v][2]**2-triples[v][0]**2),"quad-area":v=>36*(v+1)**2,
  "rhomb-missingarea":v=>8*(v+1),"rhomb-height":v=>24*(v+1)**2/(5*(v+1)),"trap-perimeter":v=>40*(v+1),"trap-reverse":v=>12*(v+1),
  "special-area45":v=>2*(v+3)**2,"special-reverse":v=>2*(v+3),"power-base":v=>-(v+3),"power-both":v=>-(v+2),"poly-counts":v=>3*(v+4),
  "eqconcept-parameter":v=>3-2*(v+2),"transform-fraction":v=>(v+2)*(v+5),"solve-fraction":v=>2*(v+3),"solve-decimal":()=>6,"solve-twosides":v=>3*(v+2)+3,
  "application-price":v=>80+10*v,"application-fraction":v=>6*(v+3),"inequality-integer":v=>v+3,"inequality-budget":v=>Math.floor((200+50*v)/(30+10*v))
 };
 for(const {lesson} of october)for(const task of octoberVariants(lesson.id).filter(t=>t.kind==="input")){
  const [,type,v]=task.id.match(/^ow-(.*)-(\d+)$/);assert.ok(expected[type],task.id+": nezavisna provera nedostaje");
  const actual=Number(task.answer.replace(",","."));assert.ok(Number.isFinite(actual));assert.ok(Math.abs(actual-expected[type](Number(v)))<1e-9,task.id);
 }
});
test("ponuđeni odgovori imaju tačno jedan zapis tačnog odgovora",()=>{
 for(const {lesson} of october)for(const task of tasksForLesson(lesson.id,lesson.tasks).filter(t=>t.kind==="choice")){
  assert.equal(task.choices.filter(c=>sameAnswer(c,task.answer)).length,1,task.id);
  assert.equal(new Set(task.choices).size,task.choices.length,task.id);
 }
});
test("nove notacije rade na ćirilici i latinici bez sirovih tokena",()=>{
 for(const {lesson} of october)for(const task of octoberVariants(lesson.id))for(const text of [task.math,task.hint,task.solution,...(task.choices??[])])for(const script of ["cyrl","latn"]){
  const html=mathHtml(localizeMathText(text,script));assert.doesNotMatch(html,/\[\[(?:frac|sqrt):/,task.id);
 }
 assert.match(localize("Iz prvog pokušaja: 7/10","cyrl"),/Из првог покушаја/);
 assert.equal(localizeMathText("P=24 cm², d_1=6 cm, x=−3,5","cyrl"),"P=24 cm², d_1=6 cm, x=−3,5");
});
test("mobilni numerički unos prihvata negativne i decimalne zapise",()=>{
 for(const [a,b] of [["-5","−5"],["-12","−12"],["-3,5","-3.5"],["−3,5","-3.5"],["3,5","3.5"],["5","5"]])assert.ok(sameAnswer(a,b));
 assert.ok(!sameAnswer("","0"));assert.ok(!sameAnswer("-3,5","3,5"));
});
test("pogrešno → izlazak → povratak → tačno čuva prvi pokušaj i broj odgovora",()=>{
 for(const grade of grades){const {lesson}=october.find(x=>x.grade.id===grade.id);const tasks=lessonWorkTasks(lesson.id,tasksForLesson(lesson.id,lesson.tasks));
  const task=tasks[0];let state=submitTask({...emptyTask(),value:"pogrešno"},task);assert.equal(state.attempts,1);
  const work={...emptyLessonWork(tasks.map(t=>t.id)),tasks:{[task.id]:state}};
  state=normalizeLessonWork(JSON.parse(JSON.stringify({[lesson.id]:work})))[lesson.id].tasks[task.id];
  state=submitTask({...state,value:task.answer},task);
  assert.deepEqual(state.result,{firstCorrect:false,usedSolution:false,attemptCount:2,finalCorrect:true});
  assert.equal(submitTask(state,task),state,"gotov zadatak ne beleži novi pokušaj");
 }
});
test("10 zadataka → nagoveštaj/postupak → konačni rezultat → obnova stanja",()=>{
 for(const {lesson} of october){const tasks=lessonWorkTasks(lesson.id,tasksForLesson(lesson.id,lesson.tasks));let work=emptyLessonWork(tasks.map(t=>t.id));
  for(let i=0;i<10;i++){
   const task=tasks[i];let state=emptyTask();
   if(i===2)state=submitTask({...state,value:"nije odgovor"},task);
   if(i===5){state=submitTask({...state,value:"nije odgovor"},task);state=submitTask(state,task);state=acceptProcedure({...state,hint:true,solution:true})}
   else state=submitTask({...state,value:task.answer},task);
   work.tasks[task.id]=state;work.current=i+1;
   work=normalizeLessonWork(JSON.parse(JSON.stringify({[lesson.id]:work})))[lesson.id];
  }
  assert.deepEqual(workTotals(work),{first:8,final:10,total:10},lesson.id);assert.equal(work.current,10);
  assert.equal(work.tasks[tasks[5].id].result.usedSolution,true);
 }
});
test("procena znanja razlikuje ponovljeni od tačnog prvog pokušaja",()=>{
 for(const {lesson} of october){const tasks=lessonWorkTasks(lesson.id,tasksForLesson(lesson.id,lesson.tasks));let good=[],corrected=[];
  for(const task of tasks){const metadata=withTaskMetadata(task),base={taskId:task.id,lessonId:lesson.id,skill:task.skill,taskType:metadata.taskType,level:task.level,source:"lesson",at:good.length};
   good=appendKnowledgeAttempt(good,{...base,firstCorrect:true,firstAttemptCorrect:true,finalCorrect:true,usedSolution:false,attemptsCount:1});
   corrected=appendKnowledgeAttempt(corrected,{...base,firstCorrect:false,firstAttemptCorrect:false,finalCorrect:true,usedSolution:false,attemptsCount:2});
  }
  assert.ok(lessonMastery(good,lesson.id).score>lessonMastery(corrected,lesson.id).score+30);
 }
});
test("nova baza ne prelazi oblast ni redosled učenja, za sva tri profila",()=>{
 let seed=991;const random=()=>((seed=seed*48271%2147483647)/2147483647);
 for(const grade of grades)for(const area of grade.areas.filter(a=>a.lessons.some(l=>(l.month??a.month)==="october")))for(const profile of ["weak","average","strong"]){
  const ordered=practiceLessons(grade,area.id),octIndex=ordered.findIndex(x=>(x.lesson.month??x.area.month)==="october");
  const last=ordered[Math.max(0,octIndex)].lesson.id;
  const ids=unlockedPracticeLessonIds(grade,area.id,ordered.slice(0,octIndex).map(x=>x.lesson.id),last),scope={areaId:area.id,unlockedLessonIds:ids};
  const pool=sessionPool(grade,scope);assert.ok(pool.length);assert.ok(pool.every(t=>ids.includes(t.lessonId)));
  const results=[],used=[];for(let i=0;i<10;i++){
   const task=pickAdaptiveTask(grade,"basic",results,used,[],[],scope,random);assert.ok(task);assert.ok(ids.includes(task.lessonId));assert.ok(!used.includes(task.id));
   if(results.length)assert.notEqual(task.taskType,results.at(-1).task.taskType,area.id+": uzastopni tip");
   used.push(task.id);results.push({task,firstCorrect:profile==="strong"||(profile==="average"&&i%4!==0),usedSolution:false,finalCorrect:true,attemptCount:profile==="weak"?2:1});
  }
  assert.ok(new Set(results.map(x=>x.task.taskType)).size>=4);
  if(profile==="strong")assert.ok(results.some(x=>x.task.level!=="basic"));
 }
});
test("geometrijski crteži čuvaju odnos stranica kvadrata i normalnost dijagonala romba",()=>{
 const render=diagram=>renderToStaticMarkup(React.createElement(PythagorasDiagram,{diagram,label:'Crtež',caption:localize('Šematski crtež','cyrl')}));
 const square=render({type:'pythagoras',variant:'square',labels:{a:'6',d:'?'}});const d=square.match(/class="shape" d="([^"]+)"/)[1],pts=[...d.matchAll(/[ML]([\d.-]+) ([\d.-]+)/g)].map(m=>[+m[1],+m[2]]);const length=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);assert.ok(Math.abs(length(pts[0],pts[1])-length(pts[1],pts[2]))<1e-8);
 const rhomb=render({type:'pythagoras',variant:'rhombus',labels:{d1:'12',d2:'16'}});assert.match(rhomb,/>12\/2</);assert.match(rhomb,/>16\/2</);
 const equilateral=render({type:'pythagoras',variant:'equilateral',labels:{a:'8'}});assert.match(equilateral,/>8\/2</);assert.match(square,/Шематски цртеж/);
});
test("stari ključevi i touch mete ostaju očuvani uz zajednički tok oba meseca",async()=>{
 const source=await readFile(new URL("../app/page.tsx",import.meta.url),"utf8"),css=await readFile(new URL("../app/globals.css",import.meta.url),"utf8");
 assert.match(source,/matematikon68-progress-v1-\$\{gradeId\}/);assert.match(source,/\.\.\.emptyProgress,\.\.\.parsed/);assert.match(source,/lessonWork:normalizeLessonWork/);assert.doesNotMatch(source,/localStorage\.clear|localStorage\.removeItem/);
 assert.match(source,/<LessonWorkSequence lesson=\{lesson\}/);assert.equal(octoberDemonstrations.size,7);
 assert.match(source,/inputMode=\{negativeAllowed\?"text":"decimal"\}/);assert.match(source,/onSnapshot=\{next=>snapshot/);
 assert.match(css,/\.work-navigation>button\{[^}]*min-height:50px/);assert.match(css,/aside\.october-work-aside\{grid-template-columns:1fr/);
 for(const grade of grades)for(const area of grade.areas)for(const lesson of area.lessons.filter(l=>(l.month??area.month??"september")==="september")){
  const pool=tasksForLesson(lesson.id,lesson.tasks);assert.equal(lessonWorkTasks(lesson.id,pool).length,10);if(!["mnozenje","deljenje"].includes(lesson.id))assert.equal(octoberVariants(lesson.id).length,0);
 }
});

import assert from "node:assert/strict";
import test,{after} from "node:test";
import {createServer} from "vite";
import {fileURLToPath} from "node:url";
import React from "react";
import {renderToStaticMarkup} from "react-dom/server";

const root=fileURLToPath(new URL("..",import.meta.url));
// Test-only exports: production page and component structure stay unchanged.
const vite=await createServer({appType:"custom",configFile:false,root,resolve:{alias:{"@":root}},plugins:[{name:"lesson-work-test-exports",transform(code,id){if(id.split("?")[0].endsWith("/app/page.tsx"))return code+"\nexport {LessonWorkSequence,LessonPage,TaskDiagramView};"}}],server:{middlewareMode:true,hmr:false}});
after(()=>vite.close());
const {LessonWorkSequence,LessonPage,TaskDiagramView}=await vite.ssrLoadModule("/app/page.tsx");
const {ScriptProvider}=await vite.ssrLoadModule("/app/i18n.tsx");
const {grades}=await vite.ssrLoadModule("/app/content/index.ts");
const {tasksForLesson}=await vite.ssrLoadModule("/app/content/enhancements.ts");
const {lessonWorkTasks}=await vite.ssrLoadModule("/app/content/october-work.ts");
const {septemberDemonstrations}=await vite.ssrLoadModule("/app/content/september-work.ts");
const {emptyLessonWork,emptyTask,submitTask}=await vite.ssrLoadModule("/app/lesson-work.ts");
const all=grades.flatMap(grade=>grade.areas.flatMap(area=>area.lessons.map(lesson=>({grade,area,lesson}))));
const render=(component,props,script="cyrl")=>renderToStaticMarkup(React.createElement(ScriptProvider,{script},React.createElement(component,props)));

test("oba meseca renderuju isti pojedinačni zadatak, povratak i sledeći korak",()=>{
 for(const {lesson} of all){const tasks=lessonWorkTasks(lesson.id,tasksForLesson(lesson.id,lesson.tasks)),work=emptyLessonWork(tasks.map(t=>t.id));
  for(const current of [0,4,9])for(const script of ["cyrl","latn"]){work.current=current;const html=render(LessonWorkSequence,{lesson,tasks,progress:{lessonWork:{[lesson.id]:work},knowledgeAttempts:[]},loaded:true,save:()=>{}},script);
   assert.equal((html.match(/data-task-id=/g)??[]).length,1,lesson.id);assert.match(html,new RegExp(`Zadatak ${current+1} od 10`));
   assert.match(html,/Prethodni zadatak/);assert.match(html,current===9?/Pogledaj rezultat/:/Sledeći zadatak/);assert.match(html,/Rešeno: 0\/10/);
   assert.doesNotMatch(html,/\[\[(?:frac|sqrt):/);
   if(tasks[current].kind==="input")assert.match(html,/type="text"/);
  }
 }
});
test("rezultat prikazuje 8/10 iz prvog pokušaja i 10/10 konačno u oba meseca",()=>{
 for(const {lesson} of all){const tasks=lessonWorkTasks(lesson.id,tasksForLesson(lesson.id,lesson.tasks)),work=emptyLessonWork(tasks.map(t=>t.id));
  for(let i=0;i<10;i++){let state=emptyTask();if(i===2||i===6)state=submitTask({...state,value:"pogrešno"},tasks[i]);work.tasks[tasks[i].id]=submitTask({...state,value:tasks[i].answer},tasks[i]);}work.current=10;
  const html=render(LessonWorkSequence,{lesson,tasks,progress:{lessonWork:{[lesson.id]:work},knowledgeAttempts:[]},loaded:true,save:()=>{}});
  assert.match(html,/Iz prvog pokušaja: <strong>8\/10/);assert.match(html,/Konačno rešeno: <strong>10\/10/);assert.match(html,/Pokušaj ponovo/);assert.doesNotMatch(html,/data-task-id=/);
 }
});
test("svaka septembarska stranica zadržava teoriju i samo pedagoški potrebne kratke primere",()=>{
 for(const {grade,area,lesson} of all.filter(x=>(x.lesson.month??x.area.month??"september")==="september")){
  const html=render(LessonPage,{grade,areaId:area.id,lessonId:lesson.id,go:()=>{}});
  assert.match(html,/Najvažnije/);assert.match(html,/10 ZADATAKA ZA RAD/);assert.match(html,/Pokreni čas/);assert.match(html,/Pregled oblasti/);
  assert.equal(html.includes("Kratak primer"),septemberDemonstrations.has(lesson.id),lesson.id);assert.doesNotMatch(html,/PRIMER 1|Rešen primer/);
 }
});
test("geometrijske slike prikazuju paralelne ivice i tačku projekcije, a rotacija čuva oblik",()=>{
 const parallel=render(TaskDiagramView,{diagram:{type:"space",variant:"skew-lines",labels:{relation:"parallel"}}});assert.match(parallel,/AB ∥ A₁B₁/);assert.match(parallel,/M95 220 H335 M95 80 H335/);
 const normal=render(TaskDiagramView,{diagram:{type:"space",variant:"projection",labels:{relation:"normal"}}});assert.match(normal,/A′=B′/);assert.match(normal,/M270 35 V193/);
 const rotated=render(TaskDiagramView,{diagram:{type:"similarity",variant:"rotated"}});assert.match(rotated,/M486 105 L374 25 L374 185 Z/);
 const first=[[135,35],[35,175],[235,175]],second=[[486,105],[374,25],[374,185]];
 for(let i=0;i<3;i++){const j=(i+1)%3;const d=(p,q)=>Math.hypot(p[0]-q[0],p[1]-q[1]);assert.ok(Math.abs(d(second[i],second[j])/d(first[i],first[j])-0.8)<1e-9);}
});

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
test("svaka stranica oba meseca ima sažeto objašnjenje i brz prelaz na zadatke",()=>{
 for(const {grade,area,lesson} of all){
  const html=render(LessonPage,{grade,areaId:area.id,lessonId:lesson.id,go:()=>{}});
  assert.match(html,/Шта треба да знаш/);assert.match(html,/Пази:/);assert.match(html,/10 ZADATAKA ZA RAD/);assert.match(html,/Pokreni čas/);assert.match(html,/Pregled oblasti/);
  assert.match(html,new RegExp(`href="#lesson-work-${lesson.id}"`));assert.match(html,new RegExp(`id="lesson-work-${lesson.id}"`));assert.doesNotMatch(html,/Kratak primer|PRIMER 1|Rešen primer|Glavna ideja|Zašto to važi/);
 }
});
test("geometrijske slike prikazuju paralelnost i projekciju bez odgovora u natpisu zadatka",()=>{
 const parallel=render(TaskDiagramView,{diagram:{type:'space',variant:'skew-lines',labels:{relation:'parallel'}}});assert.match(parallel,/M95 230 L345 230 M95 80 L345 80/);assert.doesNotMatch(parallel,/AB ∥ A₁B₁/);
 const normal=render(TaskDiagramView,{diagram:{type:'space',variant:'projection',labels:{relation:'normal'}}});assert.match(normal,/A′=B′/);assert.match(normal,/M200 45 L200 115/);
 const rotated=render(TaskDiagramView,{diagram:{type:'similarity',variant:'rotated'}});assert.doesNotMatch(rotated,/NaN|undefined|\[\[/);assert.match(rotated,/correspondence-1/);
});

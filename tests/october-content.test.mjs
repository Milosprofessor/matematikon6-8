import assert from "node:assert/strict";
import test, { after } from "node:test";
import { createServer } from "vite";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";

const root=fileURLToPath(new URL("..",import.meta.url));
const vite=await createServer({appType:"custom",configFile:false,root,resolve:{alias:{"@":root}},server:{middlewareMode:true,hmr:false}});
after(async()=>vite.close());

const {grades}=await vite.ssrLoadModule("/app/content/index.ts");
const {tasksForLesson}=await vite.ssrLoadModule("/app/content/enhancements.ts");
const {getAreaTest}=await vite.ssrLoadModule("/app/content/area-tests.ts");
const {mathHtml}=await vite.ssrLoadModule("/app/math-format.ts");
const {localize,localizeMathText}=await vite.ssrLoadModule("/app/transliteration.ts");
const {pickAdaptiveTask,practiceLessons,sessionPool,unlockedPracticeLessonIds}=await vite.ssrLoadModule("/app/practice-engine.ts");

const expected={
  6:{areas:["celi-brojevi","trougao"],lessons:["mnozenje","deljenje","mnozenje-deljenje","brojevni-izrazi","trougao-vrste","zbir-uglova-trougla","uglovi-transverzala","odnos-stranica-uglova","nejednakost-trougla","konstrukcije-uglova"]},
  7:{areas:["pitagorina-teorema","stepeni"],lessons:["pitagorina-teorema","nepoznata-stranica-pravougli","pitagora-pravougaonik-kvadrat","pitagora-jednakokraki","pitagora-cetvorougao","pitagora-romb","pitagora-trapez","specijalni-pravougli-trouglovi","konstrukcija-iracionalnih-brojeva","pojam-stepena"]},
  8:{areas:["tacka-prava-ravan","linearne-jednacine"],lessons:["rogalj","poliedar","pojam-linearne-jednacine","ekvivalentne-transformacije","resavanje-linearnih-jednacina","primena-linearnih-jednacina","linearne-nejednacine"]}
};
const monthOf=(area,lesson)=>lesson.month??area.month??"september";
const lessonsIn=(area,month)=>area.lessons.filter(lesson=>monthOf(area,lesson)===month);
const areasIn=(grade,month)=>grade.areas.filter(area=>!area.review&&lessonsIn(area,month).length>0);

test("oktobarske oblasti prate operativne planove bez novembarskih tema",()=>{
  for(const grade of grades){
    const october=areasIn(grade,"october");
    assert.deepEqual(october.map(area=>area.id),expected[grade.id].areas);
    assert.deepEqual(october.flatMap(area=>lessonsIn(area,"october").map(lesson=>lesson.id)),expected[grade.id].lessons);
  }
  const titles=grades.flatMap(grade=>areasIn(grade,"october").flatMap(area=>lessonsIn(area,"october").map(lesson=>lesson.title))).join(" ").toLowerCase();
  for(const forbidden of ["piramida","prizma","sistem linearnih","linearna funkcija"])assert.ok(!titles.includes(forbidden),`novembarska tema: ${forbidden}`);
});

test("preduslovi otključavaju oktobarske veštine redom",()=>{
  for(const grade of grades)for(const area of areasIn(grade,"october")){
    const ordered=practiceLessons(grade,area.id);const global=grade.areas.flatMap(item=>item.lessons);const position=new Map(global.map((lesson,index)=>[lesson.id,index]));
    for(const {lesson} of ordered)for(const required of lesson.prerequisites??[]){
      assert.ok(position.has(required),`${lesson.id}: nepoznat preduslov ${required}`);
      assert.ok(position.get(required)<position.get(lesson.id),`${lesson.id}: preduslov mora doći ranije`);
    }
  }
  for(const [gradeId,areaId,lastLesson,forbidden] of [[6,"celi-brojevi","sabiranje-oduzimanje","mnozenje"],[7,"pitagorina-teorema","pitagora-trapez","specijalni-pravougli-trouglovi"],[8,"tacka-prava-ravan","ortogonalna-projekcija","rogalj"],[8,"linearne-jednacine","ekvivalentne-transformacije","resavanje-linearnih-jednacina"]]){
    const grade=grades.find(item=>item.id===gradeId);const ordered=practiceLessons(grade,areaId).map(item=>item.lesson.id);const lastIndex=ordered.indexOf(lastLesson);
    const unlocked=unlockedPracticeLessonIds(grade,areaId,ordered.slice(0,lastIndex),lastLesson);
    assert.ok(!unlocked.includes(forbidden),`${gradeId}/${areaId}: prerano otključana lekcija ${forbidden}`);
    assert.ok(sessionPool(grade,{areaId,unlockedLessonIds:unlocked}).every(task=>unlocked.includes(task.lessonId)));
  }
  const grade6=grades.find(item=>item.id===6);
  const integersAfterFirstTriangle=unlockedPracticeLessonIds(grade6,"celi-brojevi",[],"trougao-vrste");
  assert.ok(integersAfterFirstTriangle.includes("sabiranje-oduzimanje"),"septembarski deo celih brojeva ostaje dostupan");
  assert.ok(!integersAfterFirstTriangle.includes("mnozenje"),"trougao ne sme prerano otključati kasnije oktobarske cele brojeve");

  const grade8=grades.find(item=>item.id===8);
  const equationsAtStart=unlockedPracticeLessonIds(grade8,"linearne-jednacine",[],"pojam-linearne-jednacine");
  assert.deepEqual(equationsAtStart,["pojam-linearne-jednacine"],"početak jednačina otključava samo obrađenu lekciju");
});

test("svaka oktobarska lekcija ima jasan balans i raznovrsnu bazu",()=>{
  const ids=[];
  for(const grade of grades)for(const area of areasIn(grade,"october"))for(const lesson of lessonsIn(area,"october")){
    const tasks=tasksForLesson(lesson.id,lesson.tasks);ids.push(...tasks.map(task=>task.id));
    assert.ok(lesson.rules.length>=3,`${lesson.id}: pravila`);
    assert.ok(lesson.examples.length>=3,`${lesson.id}: primeri`);
    assert.ok(lesson.solved.steps.length>=3,`${lesson.id}: rešen primer`);
    assert.ok(tasks.length>=7,`${lesson.id}: broj zadataka`);
    assert.ok(new Set(tasks.map(task=>task.taskType).filter(Boolean)).size>=5,`${lesson.id}: broj tipova`);
    for(const level of ["basic","medium","advanced"])assert.ok(tasks.some(task=>task.level===level),`${lesson.id}: ${level}`);
    for(const task of tasks.filter(task=>task.kind==="choice"))assert.ok(task.choices.includes(task.answer),`${task.id}: odgovor nije ponuđen`);
  }
  assert.equal(new Set(ids).size,ids.length,"oktobarski ID-jevi moraju biti jedinstveni");
});

test("oktobarske mini-provere pokrivaju više lekcija i sva tri nivoa",()=>{
  for(const grade of grades)for(const area of areasIn(grade,"october")){
    const tasks=getAreaTest(grade.id,area.id);const lessonIds=new Set(area.lessons.map(lesson=>lesson.id));
    assert.ok(tasks.length>=5&&tasks.length<=10,`${grade.id}/${area.id}: trajanje provere`);
    assert.ok(new Set(tasks.map(task=>task.lessonId)).size>=Math.min(3,area.lessons.length),`${area.id}: obuhvat lekcija`);
    for(const task of tasks){assert.ok(lessonIds.has(task.lessonId),`${task.id}: nepostojeća lekcija`);if(task.kind==="choice")assert.ok(task.choices.includes(task.answer));}
    for(const level of ["basic","medium","advanced"])assert.ok(tasks.some(task=>task.level===level),`${area.id}: ${level}`);
  }
});

test("novi matematički zapisi se renderuju i pismo čuva oznake",()=>{
  const sources=[];for(const grade of grades)for(const area of areasIn(grade,"october"))for(const lesson of lessonsIn(area,"october")){sources.push(...lesson.formulas,...lesson.examples,lesson.solved.question,...lesson.solved.steps);for(const task of tasksForLesson(lesson.id,lesson.tasks))sources.push(task.math,task.solution,...(task.choices??[]));}
  for(const source of sources){const rendered=mathHtml(localizeMathText(source,"cyrl"));assert.ok(!rendered.includes("[[frac:")&&!rendered.includes("[[sqrt:"),`sirova oznaka: ${source}`);}
  assert.equal(localize("Odredi h_a u trouglu ABC i dužinu 5 cm.","cyrl"),"Одреди h_a у троуглу ABC и дужину 5 cm.");
  assert.equal(localize("Odnos stranica i uglova trougla.","cyrl"),"Однос страница и углова троугла.");
  assert.equal(localize("Funkcija y=kx i njen grafik.","cyrl"),"Функција y=kx и њен график.");
  assert.equal(localize("Znak k određuje smer — pogrešan odgovor nije kraj.","cyrl"),"Знак k одређује смер — погрешан одговор није крај.");
  assert.equal(localize("TAČKA, PRAVA I RAVAN U PROSTORU","cyrl"),"ТАЧКА, ПРАВА И РАВАН У ПРОСТОРУ");
  assert.equal(localize("Tačka u ravni projektuje se u sebe.","cyrl"),"Тачка у равни пројектује се у себе.");
  assert.equal(localize("Zapis a:b:c=p:q:r znači a=px, b=qx, c=rx.","cyrl"),"Запис a:b:c=p:q:r значи a=px, b=qx, c=rx.");
  assert.match(mathHtml(localizeMathText("d_1=12 cm, h_a=5 cm","cyrl")),/d<sub>1<\/sub>/);
  assert.match(mathHtml(localizeMathText("α_1+α=180°","cyrl")),/α<sub>1<\/sub>/);
  assert.match(mathHtml(localizeMathText("[[sqrt:a^2+b^2]]","cyrl")),/class='sqrt'/);
});

test("ciljano vežbanje bira različite oktobarske tipove",()=>{
  for(const [gradeId,lessonId] of [[6,"konstrukcije-uglova"],[7,"specijalni-pravougli-trouglovi"],[8,"resavanje-linearnih-jednacina"]]){
    const grade=grades.find(item=>item.id===gradeId);const area=grade.areas.find(item=>item.lessons.some(lesson=>lesson.id===lessonId));const scope={areaId:area.id,unlockedLessonIds:[lessonId],lessonId};let state=gradeId*97;const random=()=>((state=(state*48271)%2147483647)/2147483647);const tasks=[];const results=[];
    for(let i=0;i<5;i++){const task=pickAdaptiveTask(grade,"medium",results,tasks.map(item=>item.id),[],[],scope,random);assert.ok(task);tasks.push(task);results.push({task,firstCorrect:i>1,usedSolution:false,attemptCount:i>1?1:2,finalCorrect:true});}
    assert.equal(new Set(tasks.map(task=>task.id)).size,5);
    assert.ok(new Set(tasks.map(task=>task.taskType)).size>=3,`${lessonId}: adaptivna raznovrsnost`);
  }
});

test("postojeći localStorage ključevi ostaju nepromenjeni, a pokušaji su prošireni kompatibilno",async()=>{
  const source=await readFile(new URL("../app/page.tsx",import.meta.url),"utf8");
  assert.match(source,/matematikon68-progress-v1-\$\{gradeId\}/);
  assert.match(source,/practiceByArea:normalizePracticeByArea\(parsed\.practiceByArea\)/);
  assert.match(source,/kind:"smart";gradeId:GradeId;areaId:string/);
  assert.match(source,/`#\/pametno\/\$\{r\.gradeId\}\/\$\{r\.areaId\}`/);
  assert.doesNotMatch(source,/className="smart-card"/,"na stranici razreda ne sme ostati zajedničko vežbanje");
  assert.match(source,/attemptCount:result\.attemptCount/);
  assert.match(source,/firstAttemptCorrect:result\.firstCorrect/);
  assert.match(source,/attemptsCount:result\.attemptCount/);
  assert.match(source,/finalCorrect:result\.finalCorrect/);
});

test("Pametno vežbanje oblasti ostaje prilagođeno telefonu",async()=>{
  const css=await readFile(new URL("../app/globals.css",import.meta.url),"utf8");
  assert.match(css,/@media\(max-width:680px\)[\s\S]*\.level-picker\{grid-template-columns:1fr\}/);
  assert.match(css,/@media\(max-width:680px\)[\s\S]*\.area-tools,[^{]*\{grid-template-columns:1fr\}/);
  assert.match(css,/\.answer-input input\{[^}]*height:50px/);
  assert.match(css,/\.minus-key\{[^}]*flex:0 0 52px/);
});

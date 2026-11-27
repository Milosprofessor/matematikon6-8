import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test, { after } from "node:test";
import { createServer } from "vite";
import { fileURLToPath } from "node:url";

const root=fileURLToPath(new URL("..",import.meta.url));
const vite=await createServer({appType:"custom",configFile:false,root,resolve:{alias:{"@":root}},server:{middlewareMode:true,hmr:false}});
after(async()=>vite.close());

const {grade6Areas}=await vite.ssrLoadModule("/app/content/grade6.ts");
const {grade7Areas}=await vite.ssrLoadModule("/app/content/grade7.ts");
const {grade8Areas}=await vite.ssrLoadModule("/app/content/grade8.ts");
const {tasksForLesson,examplesForLesson}=await vite.ssrLoadModule("/app/content/enhancements.ts");
const {estimateMastery,adaptiveLevel}=await vite.ssrLoadModule("/app/knowledge.ts");
const {grades}=await vite.ssrLoadModule("/app/content/index.ts");
const {pickAdaptiveTask,practiceGroupKey,practiceLessons,sessionPool,unlockedPracticeLessonIds}=await vite.ssrLoadModule("/app/practice-engine.ts");
const {localize,localizeMathText}=await vite.ssrLoadModule("/app/transliteration.ts");
const {mathHtml}=await vite.ssrLoadModule("/app/math-format.ts");
const {getAreaTest}=await vite.ssrLoadModule("/app/content/area-tests.ts");

function mainLessons(areas){return areas.filter(area=>!area.review).flatMap(area=>area.lessons.filter(lesson=>(lesson.month??area.month??"september")==="september"))}
function lessonScope(grade,lessonId){const area=grade.areas.find(item=>item.lessons.some(lesson=>lesson.id===lessonId));return {areaId:area.id,unlockedLessonIds:[lessonId],lessonId}}

test("6. razred ima raznovrsnu septembarsku bazu na sva tri nivoa",()=>{
  const ids=[];
  for(const lesson of mainLessons(grade6Areas)){
    const tasks=tasksForLesson(lesson.id,lesson.tasks);ids.push(...tasks.map(task=>task.id));
    assert.ok(tasks.length>=10,`${lesson.id}: nedovoljno zadataka`);
    assert.ok(new Set(tasks.map(task=>task.taskType).filter(Boolean)).size>=5,`${lesson.id}: nedovoljno različitih tipova`);
    for(const level of ["skup-celih-brojeva","apsolutna-vrednost","uporedjivanje","sabiranje","oduzimanje","rastojanje","sabiranje-oduzimanje","mnozenje","deljenje","mnozenje-deljenje"].includes(lesson.id)?["basic","medium"]:["basic","medium","advanced"])assert.ok(tasks.some(task=>task.level===level),`${lesson.id}: nedostaje ${level}`);
    for(const task of tasks.filter(task=>task.kind==="choice"))assert.ok(task.choices.includes(task.answer),`${task.id}: odgovor nije ponuđen`);
  }
  assert.equal(new Set(ids).size,ids.length,"ID zadatka mora biti jedinstven");
});

test("7. razred proverava različite veštine realnih brojeva na sva tri nivoa",()=>{
  const ids=[];
  for(const lesson of mainLessons(grade7Areas)){
    const tasks=tasksForLesson(lesson.id,lesson.tasks);ids.push(...tasks.map(task=>task.id));
    assert.ok(tasks.length>=10,`${lesson.id}: nedovoljno zadataka`);
    assert.ok(new Set(tasks.map(task=>task.taskType).filter(Boolean)).size>=5,`${lesson.id}: nedovoljno različitih tipova`);
    for(const level of ["basic","medium","advanced"])assert.ok(tasks.some(task=>task.level===level),`${lesson.id}: nedostaje ${level}`);
    for(const task of tasks.filter(task=>task.kind==="choice"))assert.ok(task.choices.includes(task.answer),`${task.id}: odgovor nije ponuđen`);
  }
  assert.equal(new Set(ids).size,ids.length,"ID zadatka mora biti jedinstven");
  const realTasks=mainLessons(grade7Areas).flatMap(lesson=>tasksForLesson(lesson.id,lesson.tasks));
  for(const required of ["zaokruzivanje","pronadji-gresku","koren-naspram-jednacine","decimalni-zapis-klasifikacija","citanje-pribliznog-polozaja"]){
    assert.ok(realTasks.some(task=>task.taskType===required),`nedostaje tip ${required}`);
  }
});

test("7. razred ne koristi kvadratni koren pre odgovarajuće lekcije",()=>{
  const lessons=mainLessons(grade7Areas);
  const rootIndex=lessons.findIndex(lesson=>lesson.id==="kvadratni-koren");
  assert.ok(rootIndex>0,"lekcija o kvadratnom korenu mora postojati u redosledu");
  const prematurePattern=/√|\[\[sqrt:|koren/i;
  for(const lesson of lessons.slice(0,rootIndex)){
    const content={...lesson,examples:examplesForLesson(lesson.id,lesson.examples),tasks:tasksForLesson(lesson.id,lesson.tasks)};
    assert.doesNotMatch(JSON.stringify(content),prematurePattern,`${lesson.id}: kvadratni koren je uveden prerano`);
  }
  const earlyIds=new Set(lessons.slice(0,rootIndex).map(lesson=>lesson.id));
  for(const task of getAreaTest(7,"realni-brojevi").filter(task=>earlyIds.has(task.lessonId))){
    assert.doesNotMatch(JSON.stringify(task),prematurePattern,`${task.id}: završna provera vezuje koren za preranu lekciju`);
  }
  assert.match(JSON.stringify(lessons.slice(rootIndex)),/√|\[\[sqrt:/,"koreni moraju ostati u kasnijim lekcijama");
});

test("7. razred poštuje granice između kvadrata, određivanja korena i svojstava",()=>{
  const lessons=mainLessons(grade7Areas);const byId=id=>lessons.find(lesson=>lesson.id===id);
  const squareLesson={...byId("kvadrat-racionalnog"),tasks:tasksForLesson("kvadrat-racionalnog",byId("kvadrat-racionalnog").tasks)};
  assert.doesNotMatch(JSON.stringify(squareLesson),/x\^2|x²/,"jednačina x²=a ne sme da se proverava pre odgovarajuće lekcije");
  const numberLine={...byId("brojna-prava"),tasks:tasksForLesson("brojna-prava",byId("brojna-prava").tasks)};
  assert.doesNotMatch(JSON.stringify(numberLine),/zaokruž|zaokruzi/i,"zaokruživanje ne pripada ovoj ranijoj lekciji");
  const determining={...byId("odredjivanje-korena"),tasks:tasksForLesson("odredjivanje-korena",byId("odredjivanje-korena").tasks)};
  assert.doesNotMatch(JSON.stringify(determining),/najveći kvadratni činilac|rastavljanjem|sqrt:a·b|√\(9·5\)/i,"svojstvo proizvoda pripada sledećoj lekciji");
  assert.match(JSON.stringify(byId("svojstva-korena")),/sqrt:a·b|Koren proizvoda/i,"svojstvo proizvoda mora ostati u svojoj lekciji");
});

test("ciljano vežbanje Realnih brojeva ostaje bez korena",()=>{
  const grade=grades.find(item=>item.id===7);
  const pattern=/√|\[\[sqrt:|koren/i;
  for(const lessonId of ["realni-brojevi","brojna-prava"]){
    let state=lessonId.length*97;const random=()=>((state=(state*48271)%2147483647)/2147483647);
    const tasks=[];const results=[];
    for(let index=0;index<5;index++){
      const task=pickAdaptiveTask(grade,"medium",results,tasks.map(item=>item.id),[],[],lessonScope(grade,lessonId),random);
      assert.ok(task,`${lessonId}: nema ciljanog zadatka`);
      assert.doesNotMatch(JSON.stringify(task),pattern,`${lessonId}: Pametno vežbanje je prerano izabralo koren`);
      tasks.push(task);results.push({task,firstCorrect:index!==1,usedSolution:false});
    }
  }
});

test("8. razred ima različite geometrijske tipove i crteže",()=>{
  const ids=[];const all=[];
  for(const lesson of mainLessons(grade8Areas)){
    const tasks=tasksForLesson(lesson.id,lesson.tasks);ids.push(...tasks.map(task=>task.id));all.push(...tasks);
    assert.ok(tasks.length>=7,`${lesson.id}: nedovoljno zadataka`);
    assert.ok(new Set(tasks.map(task=>task.taskType).filter(Boolean)).size>=6,`${lesson.id}: nedovoljno različitih tipova`);
    for(const level of ["basic","medium","advanced"])assert.ok(tasks.some(task=>task.level===level),`${lesson.id}: nedostaje ${level}`);
    for(const task of tasks.filter(task=>task.kind==="choice"))assert.ok(task.choices.includes(task.answer),`${task.id}: odgovor nije ponuđen`);
  }
  assert.equal(new Set(ids).size,ids.length,"ID zadatka mora biti jedinstven");
  assert.ok(all.filter(task=>task.diagram).length>=18,"nedovoljno vizuelnih zadataka");
  for(const type of ["number-line","tales","similarity","shadow"].filter(type=>type!=="number-line"))assert.ok(all.some(task=>task.diagram?.type===type),`nedostaje crtež ${type}`);
  for(const variant of ["triangle","rays","trapezoid"])assert.ok(all.some(task=>task.diagram?.type==="tales"&&task.diagram.variant===variant),`nedostaje Talesova konfiguracija ${variant}`);
});

test("8. razred ne koristi proporcije i stavove sličnosti pre njihove lekcije",()=>{
  const lessons=mainLessons(grade8Areas);const byId=id=>lessons.find(lesson=>lesson.id===id);
  const ratio={...byId("razmera-duzi"),examples:examplesForLesson("razmera-duzi",byId("razmera-duzi").examples),tasks:tasksForLesson("razmera-duzi",byId("razmera-duzi").tasks)};
  assert.doesNotMatch(JSON.stringify(ratio),/unakrsni proizvod|napiši proporciju|nepoznati član razmere/i,"razmera duži ne sme zahtevati buduću lekciju o proporcijama");
  const similar={...byId("slicni-trouglovi"),examples:examplesForLesson("slicni-trouglovi",byId("slicni-trouglovi").examples),tasks:tasksForLesson("slicni-trouglovi",byId("slicni-trouglovi").tasks)};
  assert.doesNotMatch(JSON.stringify(similar),/po SSS|daju sličnost po|grade slične trouglove/i,"stavovi sličnosti ne smeju biti korišćeni pre svoje lekcije");
  const ratioTasks=ratio.tasks.filter(task=>["8-1a","8-1b"].includes(task.id));
  assert.ok(ratioTasks.every(task=>/skraćenu razmeru/i.test(task.prompt)),"ekvivalentna neskraćena razmera ne sme biti drugi tačan odgovor");
  const sss=tasksForLesson("stavovi-slicnosti",byId("stavovi-slicnosti").tasks).find(task=>task.id==="8-6h");
  assert.equal(sss.math,"3:6=4:8=5:10","SSS primer mora koristiti stranice koje grade trougao");
});

test("tekst i crtež zadatka o indirektnom merenju koriste iste oznake",()=>{
  const lesson=mainLessons(grade8Areas).find(item=>item.id==="primene-slicnosti");
  const task=tasksForLesson(lesson.id,lesson.tasks).find(item=>item.id==="8-7g");
  assert.equal(task.diagram?.type,"similarity");
  for(const label of ["ABC","DEF","AB","DE","BC","EF"])assert.match(task.math,new RegExp(label),`${task.id}: nedostaje oznaka ${label}`);
});

test("prvi pokušaj ostaje ključan, a novi dobri rezultati popravljaju procenu",()=>{
  const make=(firstCorrect,at,taskType)=>({taskId:`t-${at}`,lessonId:"lekcija",skill:"veština",taskType,errorCategory:"method",level:"medium",source:"smart",firstCorrect,usedSolution:false,at});
  const firstWrong=estimateMastery([make(false,1,"računanje")]);
  const firstRight=estimateMastery([make(true,1,"računanje")]);
  assert.ok(firstWrong.score<firstRight.score);
  const oldMisses=[1,2,3,4].map(at=>make(false,at,at%2?"računanje":"izbor postupka"));
  const recovered=estimateMastery([...oldMisses,...[5,6,7,8,9,10,11,12].map(at=>make(true,at,at%2?"tabela":"problem"))]);
  assert.ok(recovered.score>estimateMastery(oldMisses).score,"skoriji rad treba da popravi status");
});

test("ponavljanje samo jednog tipa ne daje prerano zelenu procenu",()=>{
  const attempts=Array.from({length:5},(_,index)=>({taskId:`s-${index}`,lessonId:"lekcija",skill:"veština",taskType:"isto-računanje",errorCategory:"calculation",level:"basic",source:"lesson",firstCorrect:true,usedSolution:false,at:index}));
  assert.ok(estimateMastery(attempts).score<=79);
});

test("težina se menja tek posle niza rezultata",()=>{
  const ok={firstCorrect:true,usedSolution:false};
  const miss={firstCorrect:false,usedSolution:false};
  assert.equal(adaptiveLevel("basic",[ok,ok]),"basic");
  assert.equal(adaptiveLevel("basic",[ok,ok,ok]),"medium");
  assert.equal(adaptiveLevel("advanced",[miss,miss,miss]),"medium");
});

test("više simuliranih pametnih sesija po oblasti ne meša oblasti i ne ponavlja isti zadatak",()=>{
  for(const grade of grades)for(const area of grade.areas.filter(item=>!item.review).filter((item,index,all)=>all.findIndex(other=>practiceGroupKey(grade,other.id)===practiceGroupKey(grade,item.id))===index))for(let session=0;session<4;session++){
    let state=(grade.id*100+session)||1;const random=()=>((state=(state*48271)%2147483647)/2147483647);
    const tasks=[];const results=[];const unlockedLessonIds=practiceLessons(grade,area.id).map(item=>item.lesson.id);const scope={areaId:area.id,unlockedLessonIds};
    for(let index=0;index<10;index++){
      const task=pickAdaptiveTask(grade,"medium",results,tasks.map(item=>item.id),[],[],scope,random);
      assert.ok(task,`${grade.id}. razred/${area.id}: nema narednog zadatka`);tasks.push(task);
      assert.ok(unlockedLessonIds.includes(task.lessonId),`${task.id}: zadatak je iz druge oblasti`);
      if(index>0)assert.notEqual(task.taskType,tasks[index-1].taskType,`${grade.id}. razred: isti tip je ponovljen zaredom`);
      results.push({task,firstCorrect:true,usedSolution:false});
    }
    assert.equal(new Set(tasks.map(task=>task.id)).size,10,`${grade.id}. razred: ponovljen konkretan zadatak`);
  }
});

test("slabiji učenik dobija lakše i tipološki različite zadatke",()=>{
  for(const grade of grades){
    const area=grade.areas.find(item=>!item.review&&(item.month??"september")==="september");const unlockedLessonIds=practiceLessons(grade,area.id).filter(item=>(item.area.month??"september")==="september").map(item=>item.lesson.id);const scope={areaId:area.id,unlockedLessonIds};
    let state=grade.id*211;const random=()=>((state=(state*48271)%2147483647)/2147483647);const tasks=[];const results=[];
    for(let index=0;index<10;index++){
      const task=pickAdaptiveTask(grade,"advanced",results,tasks.map(item=>item.id),[],[],scope,random);assert.ok(task);tasks.push(task);
      if(index>0)assert.notEqual(task.taskType,tasks[index-1].taskType,`${grade.id}. razred: ponovljen tip kod slabijeg učenika`);
      results.push({task,firstCorrect:false,usedSolution:false,attemptCount:2,finalCorrect:true});
    }
    assert.ok(tasks.slice(-3).some(task=>task.level==="basic"),`${grade.id}. razred: sistem nije vratio učenika na osnovni nivo`);
  }
});

test("ciljano Talesovo vežbanje menja konstrukciju zadatka",()=>{
  const grade=grades.find(item=>item.id===8);const focus={...lessonScope(grade,"talesova-teorema"),skill:"Talesova teorema"};
  let state=91;const random=()=>((state=(state*48271)%2147483647)/2147483647);const tasks=[];const results=[];
  for(let index=0;index<5;index++){
    const task=pickAdaptiveTask(grade,"medium",results,tasks.map(item=>item.id),[],[],focus,random);assert.ok(task);tasks.push(task);results.push({task,firstCorrect:index>1,usedSolution:false});
  }
  assert.equal(new Set(tasks.map(task=>task.id)).size,5);
  assert.ok(new Set(tasks.map(task=>task.taskType)).size>=3,"slaba tačka mora da se proveri kroz više tipova");
});

test("oblast otključava lekcije redom i ne uvodi buduće gradivo",()=>{
  const grade=grades.find(item=>item.id===7);const areaId="realni-brojevi";const ordered=practiceLessons(grade,areaId).map(item=>item.lesson.id);const rootIndex=ordered.indexOf("kvadratni-koren");
  assert.ok(rootIndex>0);
  const current=ordered[rootIndex-1];const unlockedLessonIds=unlockedPracticeLessonIds(grade,areaId,ordered.slice(0,rootIndex-1),current);
  assert.deepEqual(unlockedLessonIds,ordered.slice(0,rootIndex));
  const pool=sessionPool(grade,{areaId,unlockedLessonIds});
  assert.ok(pool.length>0);assert.ok(pool.every(task=>unlockedLessonIds.includes(task.lessonId)));assert.ok(!pool.some(task=>task.lessonId==="kvadratni-koren"));
  assert.doesNotMatch(JSON.stringify(pool),/√|\[\[sqrt:|kvadratni koren/i);
});

test("oblast koja traje u septembru i oktobru deli jedno Pametno vežbanje",()=>{
  const grade=grades.find(item=>item.id===8);
  assert.equal(grade.areas.filter(area=>area.lessons.some(lesson=>lesson.id==="slicnost-pravougli")).length,1);
  assert.equal(practiceGroupKey(grade,"slicnost"),"slicnost");
  assert.ok(practiceLessons(grade,"slicnost").some(item=>item.lesson.id==="slicnost-pravougli"));
});

test("anti-repeat istorija se primenjuje unutar izabrane oblasti",()=>{
  const grade=grades.find(item=>item.id===6);const areaId="celi-brojevi";const unlockedLessonIds=practiceLessons(grade,areaId).map(item=>item.lesson.id);const scope={areaId,unlockedLessonIds};
  const first=pickAdaptiveTask(grade,"basic",[],[],[],[],scope,()=>0);assert.ok(first);
  const next=pickAdaptiveTask(grade,"basic",[],[],[first.id],[],scope,()=>0);assert.ok(next);assert.notEqual(next.id,first.id);
  assert.ok(unlockedLessonIds.includes(next.lessonId));
});

test("ćirilica ne menja matematičke oznake, promenljive ni jedinice",()=>{
  assert.equal(localize("Odredi AN i visinu h u trouglu ABC.","cyrl"),"Одреди AN и висину h у троуглу ABC.");
  assert.equal(localize("Broj a je realan i pripada skupu R.","cyrl"),"Број a је реалан и припада скупу R.");
  assert.equal(localize("Duž je 12 cm, a zatim je produžena.","cyrl"),"Дуж је 12 cm, а затим је продужена.");
  assert.equal(localizeMathText("△ABC∼△DEF; stranici BC odgovara EF.","cyrl"),"△ABC∼△DEF; страници BC одговара EF.");
  assert.equal(localizeMathText("a^2+b^2=c^2, h_a=5 cm","cyrl"),"a^2+b^2=c^2, h_a=5 cm");
  assert.equal(localizeMathText("[[frac:3|4]] = [[frac:9|12]], a rezultat je 0,75.","cyrl"),"[[frac:3|4]] = [[frac:9|12]], а резултат је 0,75.");
  assert.equal(localizeMathText("Ako je △ABC∼△DEF, pa je k=2.","cyrl"),"Ако је △ABC∼△DEF, па је k=2.");
});

test("svaki septembarski matematički zapis se renderuje bez sirovih oznaka",()=>{
  const displayed=[];const collect=value=>{
    if(typeof value==="string")displayed.push(value);
    else if(Array.isArray(value))value.forEach(collect);
    else if(value&&typeof value==="object")Object.values(value).forEach(collect);
  };
  for(const grade of grades){
    collect(grade);
    for(const area of grade.areas)for(const lesson of area.lessons)collect(tasksForLesson(lesson.id,lesson.tasks));
  }
  for(const [gradeId,areaId] of [[6,"celi-brojevi"],[7,"realni-brojevi"],[8,"slicnost"]])collect(getAreaTest(gradeId,areaId));
  for(const source of displayed.filter(value=>value.includes("[["))){
    const rendered=mathHtml(localizeMathText(source,"cyrl"));
    assert.ok(!rendered.includes("[[frac:")&&!rendered.includes("[[sqrt:"),`sirova oznaka u: ${source}`);
  }
  assert.match(mathHtml(localizeMathText("[[sqrt:2,25]]=1,5, h_a=5 cm","cyrl")),/class='sqrt'/);
  assert.match(mathHtml(localizeMathText("h_a=5 cm","cyrl")),/h<sub>a<\/sub>/);
  const closedRoot=mathHtml(localizeMathText("[[sqrt:(−6)^2]]=6","cyrl"));
  assert.match(closedRoot,/class='sqrt'><span>\(−6\)<sup>2<\/sup><\/span><\/span>=6/,"stepen mora ostati pod znakom korena");
});

test("završni testovi ostaju potpuni i matematički povezani sa lekcijama",()=>{
  for(const [gradeId,areaId] of [[6,"celi-brojevi"],[7,"realni-brojevi"],[8,"slicnost"]]){
    const tasks=getAreaTest(gradeId,areaId);assert.equal(tasks.length,10,`${gradeId}. razred mora imati 10 zadataka`);
    assert.ok(new Set(tasks.map(task=>task.lessonId)).size>=5,`${gradeId}. razred: test obuhvata premalo lekcija`);
    for(const level of ["basic","medium","advanced"])assert.ok(tasks.some(task=>task.level===level),`${gradeId}. razred: test nema nivo ${level}`);
    for(const task of tasks.filter(task=>task.kind==="choice"))assert.ok(task.choices.includes(task.answer),`${task.id}: odgovor nije ponuđen`);
  }
});

test("Pokreni čas je izolovan prikaz lekcije prilagođen dodiru",()=>{
  const page=readFileSync(new URL("../app/page.tsx",import.meta.url),"utf8");
  const css=readFileSync(new URL("../app/globals.css",import.meta.url),"utf8");
  assert.match(page,/Pokreni čas/);
  assert.match(page,/Završi čas/);
  assert.match(page,/aria-pressed=\{classMode\}/);
  assert.match(css,/\.lesson-page\.class-mode \.lesson-layout\{grid-template-columns:1fr\}/);
  assert.match(css,/\.lesson-page\.class-mode \.choices button[^}]*min-height:56px/);
  assert.match(css,/@media\(max-width:680px\)[\s\S]*\.lesson-page\.class-mode \.lesson-layout aside\{grid-template-columns:1fr\}/);
});

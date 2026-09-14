import assert from "node:assert/strict";
import test, { after } from "node:test";
import { createServer } from "vite";
import { fileURLToPath } from "node:url";

const root=fileURLToPath(new URL("..",import.meta.url));
const vite=await createServer({appType:"custom",configFile:false,root,resolve:{alias:{"@":root}},server:{middlewareMode:true,hmr:false}});
after(async()=>vite.close());

const {grade6Areas}=await vite.ssrLoadModule("/app/content/grade6.ts");
const {grade7Areas}=await vite.ssrLoadModule("/app/content/grade7.ts");
const {grade8Areas}=await vite.ssrLoadModule("/app/content/grade8.ts");
const {tasksForLesson}=await vite.ssrLoadModule("/app/content/enhancements.ts");
const {estimateMastery,adaptiveLevel}=await vite.ssrLoadModule("/app/knowledge.ts");
const {grades}=await vite.ssrLoadModule("/app/content/index.ts");
const {pickAdaptiveTask}=await vite.ssrLoadModule("/app/practice-engine.ts");
const {localize,localizeMathText}=await vite.ssrLoadModule("/app/transliteration.ts");
const {mathHtml}=await vite.ssrLoadModule("/app/math-format.ts");
const {getAreaTest}=await vite.ssrLoadModule("/app/content/area-tests.ts");

function mainLessons(areas){return areas.filter(area=>!area.review&&(area.month??"september")==="september").flatMap(area=>area.lessons)}

test("6. razred ima raznovrsnu septembarsku bazu na sva tri nivoa",()=>{
  const ids=[];
  for(const lesson of mainLessons(grade6Areas)){
    const tasks=tasksForLesson(lesson.id,lesson.tasks);ids.push(...tasks.map(task=>task.id));
    assert.ok(tasks.length>=10,`${lesson.id}: nedovoljno zadataka`);
    assert.ok(new Set(tasks.map(task=>task.taskType).filter(Boolean)).size>=5,`${lesson.id}: nedovoljno različitih tipova`);
    for(const level of ["basic","medium","advanced"])assert.ok(tasks.some(task=>task.level===level),`${lesson.id}: nedostaje ${level}`);
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

test("8. razred ima različite geometrijske tipove i crteže",()=>{
  const ids=[];const all=[];
  for(const lesson of mainLessons(grade8Areas)){
    const tasks=tasksForLesson(lesson.id,lesson.tasks);ids.push(...tasks.map(task=>task.id));all.push(...tasks);
    assert.ok(tasks.length>=11,`${lesson.id}: nedovoljno zadataka`);
    assert.ok(new Set(tasks.map(task=>task.taskType).filter(Boolean)).size>=6,`${lesson.id}: nedovoljno različitih tipova`);
    for(const level of ["basic","medium","advanced"])assert.ok(tasks.some(task=>task.level===level),`${lesson.id}: nedostaje ${level}`);
    for(const task of tasks.filter(task=>task.kind==="choice"))assert.ok(task.choices.includes(task.answer),`${task.id}: odgovor nije ponuđen`);
  }
  assert.equal(new Set(ids).size,ids.length,"ID zadatka mora biti jedinstven");
  assert.ok(all.filter(task=>task.diagram).length>=18,"nedovoljno vizuelnih zadataka");
  for(const type of ["number-line","tales","similarity","shadow"].filter(type=>type!=="number-line"))assert.ok(all.some(task=>task.diagram?.type===type),`nedostaje crtež ${type}`);
  for(const variant of ["triangle","rays","trapezoid"])assert.ok(all.some(task=>task.diagram?.type==="tales"&&task.diagram.variant===variant),`nedostaje Talesova konfiguracija ${variant}`);
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

test("više simuliranih pametnih sesija ne ponavlja isti zadatak ni isti tip zaredom",()=>{
  for(const grade of grades)for(let session=0;session<12;session++){
    let state=(grade.id*100+session)||1;const random=()=>((state=(state*48271)%2147483647)/2147483647);
    const tasks=[];const results=[];
    for(let index=0;index<10;index++){
      const task=pickAdaptiveTask(grade,"medium",results,tasks.map(item=>item.id),[],[],undefined,random);
      assert.ok(task,`${grade.id}. razred: nema narednog zadatka`);tasks.push(task);
      if(index>0)assert.notEqual(task.taskType,tasks[index-1].taskType,`${grade.id}. razred: isti tip je ponovljen zaredom`);
      results.push({task,firstCorrect:true,usedSolution:false});
    }
    assert.equal(new Set(tasks.map(task=>task.id)).size,10,`${grade.id}. razred: ponovljen konkretan zadatak`);
  }
});

test("ciljano Talesovo vežbanje menja konstrukciju zadatka",()=>{
  const grade=grades.find(item=>item.id===8);const focus={lessonId:"talesova-teorema",skill:"Talesova teorema"};
  let state=91;const random=()=>((state=(state*48271)%2147483647)/2147483647);const tasks=[];const results=[];
  for(let index=0;index<5;index++){
    const task=pickAdaptiveTask(grade,"medium",results,tasks.map(item=>item.id),[],[],focus,random);assert.ok(task);tasks.push(task);results.push({task,firstCorrect:index>1,usedSolution:false});
  }
  assert.equal(new Set(tasks.map(task=>task.id)).size,5);
  assert.ok(new Set(tasks.map(task=>task.taskType)).size>=3,"slaba tačka mora da se proveri kroz više tipova");
});

test("ćirilica ne menja matematičke oznake, promenljive ni jedinice",()=>{
  assert.equal(localize("Odredi AN i visinu h u trouglu ABC.","cyrl"),"Одреди AN и висину h у троуглу ABC.");
  assert.equal(localize("Broj a je realan i pripada skupu R.","cyrl"),"Број a је реалан и припада скупу R.");
  assert.equal(localize("Duž je 12 cm, a zatim je produžena.","cyrl"),"Дуж је 12 cm, а затим је продужена.");
  assert.equal(localizeMathText("△ABC∼△DEF; stranici BC odgovara EF.","cyrl"),"△ABC∼△DEF; страници BC одговара EF.");
  assert.equal(localizeMathText("a^2+b^2=c^2, h_a=5 cm","cyrl"),"a^2+b^2=c^2, h_a=5 cm");
  assert.equal(localizeMathText("[[frac:3|4]] = [[frac:9|12]], a rezultat je 0,75.","cyrl"),"[[frac:3|4]] = [[frac:9|12]], а резултат је 0,75.");
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
});

test("završni testovi ostaju potpuni i matematički povezani sa lekcijama",()=>{
  for(const [gradeId,areaId] of [[6,"celi-brojevi"],[7,"realni-brojevi"],[8,"slicnost"]]){
    const tasks=getAreaTest(gradeId,areaId);assert.equal(tasks.length,10,`${gradeId}. razred mora imati 10 zadataka`);
    assert.ok(new Set(tasks.map(task=>task.lessonId)).size>=5,`${gradeId}. razred: test obuhvata premalo lekcija`);
    for(const level of ["basic","medium","advanced"])assert.ok(tasks.some(task=>task.level===level),`${gradeId}. razred: test nema nivo ${level}`);
    for(const task of tasks.filter(task=>task.kind==="choice"))assert.ok(task.choices.includes(task.answer),`${task.id}: odgovor nije ponuđen`);
  }
});

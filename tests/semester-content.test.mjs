import test, {after} from "node:test";
import assert from "node:assert/strict";
import {createServer} from "vite";

const server=await createServer({configFile:false,appType:"custom",optimizeDeps:{noDiscovery:true},server:{middlewareMode:true,hmr:false}});
after(()=>server.close());
const load=path=>server.ssrLoadModule("/app/"+path+".ts");
const {grades,months}=await load("content/index");
const {inMonth}=await load("content/months");
const {tasksForLesson}=await load("content/enhancements");
const {lessonWorkTasks}=await load("content/october-work");
const {getAreaTest}=await load("content/area-tests");
const {octoberSupplement}=await load("content/october-practice-supplement");
const {unlockedPracticeLessonIds,sessionPool}=await load("practice-engine");
const {normalizeLessonWork,resumeLessonWork,sameAnswer}=await load("lesson-work");
const {mathHtml}=await load("math-format");
const {localizeMathText}=await load("transliteration");
const lessons=grades.flatMap(grade=>grade.areas.flatMap(area=>area.lessons.map(lesson=>({grade,area,lesson}))));
const byId=id=>lessons.find(entry=>entry.lesson.id===id).lesson;
const later=l=>["november","december"].includes(l.month);

test("operativni planovi daju četiri meseca i povezuju ponovljene časove bez duplih lekcija",()=>{
  assert.deepEqual(months.slice(0,4),["september","october","november","december"]);
  assert.deepEqual(grades.map(g=>months.slice(0,4).map(m=>g.areas.flatMap(a=>a.lessons).filter(l=>l.month===m).length)),
    [[10,10,4,3],[11,12,6,3],[9,7,6,5]]);
  assert.equal(new Set(lessons.filter(x=>months.slice(0,4).includes(x.lesson.month)).map(x=>x.lesson.id)).size,86);
  for(const [id,m] of [["pitagora-trapez","november"],["q-proizvod","december"],["slicnost-pravougli","october"]]){
    const {area,lesson}=lessons.find(x=>x.lesson.id===id);
    assert.ok(inMonth(area,lesson,m));assert.notEqual(lesson.month,m);
  }
});

test("svaka od 86 lekcija ima 10 zadataka, dodatni fond, tri nivoa, pomoć, postupak i valjane izbore",()=>{
  const ids=new Set();
  for(const {lesson:l} of lessons){
    const pool=tasksForLesson(l.id,l.tasks),work=lessonWorkTasks(l.id,pool);
    assert.equal(work.length,10,l.id);assert.ok(pool.length>10,l.id);
    // Review of fifth-grade prerequisites has only direct/multi-step calculations.
    // Phase 2C: do not invent advanced labels for these existing tasks.
    assert.deepEqual(new Set(pool.map(t=>t.level)),new Set(["kratko-obnavljanje-5","skup-celih-brojeva","apsolutna-vrednost","uporedjivanje","sabiranje","oduzimanje","rastojanje","sabiranje-oduzimanje","mnozenje","deljenje","mnozenje-deljenje"].includes(l.id)?["basic","medium"]:["basic","medium","advanced"]),l.id);
    assert.ok(l.intro&&l.solved.question&&l.solved.steps.length>=2&&l.formulas.length,l.id);
    for(const t of pool){
      assert.ok(!ids.has(t.id),t.id);ids.add(t.id);
      assert.ok(t.hint&&t.solution&&t.prompt&&t.answer,t.id);
      if(t.kind==="choice")assert.equal(t.choices.filter(a=>sameAnswer(a,t.answer)).length,1,t.id);
      for(const script of ["cyrl","latn"])for(const field of [t.math,t.solution,t.hint,...(t.choices??[])]){
        assert.doesNotMatch(mathHtml(localizeMathText(field,script)),/\[\[(?:frac|sqrt):|NaN|undefined/);
      }
    }
  }
});

// Independent calculations in the order of the numeric questions, including
// the reserve exercises. Choice questions are checked separately by their type.
const expected={
 "q-zapisi":[20/4,-3/5,3*7,-5,16,-24*.375,7*5,7*25],
 "q-poredak":[4,Math.ceil(-7/3),4,5,(-.4-.2)/2],
 "q-zbir-razlika":[.9-.6,.25+.5,2.4-.9,.75-.25,3.6-.6,-.6-1.25,-.75-(.5-1.5),-2.75-1.5+3,-.08,1,-.25],
 "q-proizvod":[-.2*3,0,18*.75,1/-.5,-1.25*.7*8,-2.5*3.7+2.5*1.7,126*.75,-.5*-4*-1.5*2,.04*.5,-3/.25,-.75*2.5],
 "q-deljenje-izrazi":[-.6/.2,(-2/3)/(-4/9),3/.375,4/.5*.25,1.5-2.4/-.6,-1.8/.3,(-1.5+.25)/(.1-.6),1/-.2,-3/.75-1,.75,(-2.4/-.3)/2],
 "q-jednacine":[.2-.7,-.5+1.25,3/.5,-.4-.6,4*-.75,1.5/-.25,.5-.75,1.25*-2+.5,(3.2-.7)/2,-.4,0,-3*.5],
 "q-nejednacine":[2,4,Math.floor(90/12.5),2],
 "pitagora-obrat":[36+64-121,Math.hypot(30,40),7**2+24**2,Math.sqrt(29**2-20**2)],
 "stepeni-ista-osnova":[3+4,7-2,1,9-4,(-2)**2,2*3+5,5,2+1,10**2,2*2**6/2**5,0],
 "stepen-proizvoda":[3*2,10**3,(-6)**3,(.2*5)**4,(-2)**3,3*4-5,3**3-2**4,12/3,3**3,2*4,(-.5)**4*4**2],
 "standardni-zapis":[4,2.8e3,-4,-82000/1e4,300*60,9,.001/.00002,4,1/100,0,1.2e9/3e8,10**3],
 "dijagonale-mnogougla":[0,6-3,5*2/2,9+3,10*7/2,7,11*8/2-10*7/2,8*7/2,2,12-3,9-3,5],
 "svodjenje-jednacina":[10/2-1,0,6+1,7+8,(9-1)/2,5,5,0,9/(.5+.25),7,-10],
 "slozene-nejednacine":[5,5,14,Math.floor(420/65),6],
 "prizma-elementi":[2,4,6+2,18/2,7*3,2*(12-2),84/12,3*2,24/3+2],
 "prizma-mreza":[5,4**2,6*3**2,18*5,18+80,2*(6+8+12),(150-30)/20,8*5+2*(8+5)*3,3**2,(96-72)/2,6*2*7,(170-2*25)/20],
 "prizma-zapremina":[12*5,3**3,2.5,84/12,3*8/2*5,1.2/.4,5*2*3,Math.sqrt(96/6)**3,250*4,4500/1000,3,2**3,Math.sqrt(180/5)],
 "piramida-elementi":[1,5,4+1,2*7,9-1,15-10,Math.hypot(12,5),4,18/2+1],
};
test("nezavisno računanje svih upisnih odgovora 18 novih lekcija",()=>{
  for(const [id,answers] of Object.entries(expected)){
    const tasks=byId(id).tasks.filter(t=>t.kind==="input");assert.equal(tasks.length,answers.length,id);
    tasks.forEach((t,i)=>assert.ok(Math.abs(Number(t.answer.replace(",","."))-answers[i])<1e-9,t.id));
  }
});

test("svih 81 varijanti u ranije praznim fondovima ima nezavisno izračunat rezultat",()=>{
  const keys={
    "uglovi-na-transverzali":n=>[40+n,180-(60+n),(180-2*n)/2],
    "skup-racionalnih-brojeva":n=>[-4*n,-n/4,n+3-1],
    "apsolutna-vrednost-racionalnog":n=>[Math.abs(-n-.5),-n-.25,2*(n+.5)],
    "jednacine-kvadrat":n=>[Math.sqrt((n+6)**2),2*Math.sqrt((n+2)**2),2-(n+1)],
    "direktna-proporcionalnost":n=>[3*(60+n)/3,n*15/5,7*n/(4*n/4)],
    "funkcija-ykx":n=>[-n*3,2*n/-2,(2*n+2)/-2],
    "proporcije":n=>[2*n*3/2,20*n*10/100,4*n/2-1],
    "produzena-proporcija":n=>[2*n/2*5,7*n/7*2,4*n/4*7],
    "primena-produzene-proporcije":n=>[600*n/6,20*n/2*4,2*n/(5-3)*(3+4+5)],
  };
  for(const [id,calc] of Object.entries(keys)){
    const tasks=octoberSupplement[id];assert.equal(tasks.length,9,id);
    for(const t of tasks){const [family,n]=t.id.split("-").slice(-2).map(Number);assert.ok(sameAnswer(t.answer,String(calc(n)[family-1])),t.id);}
  }
});

test("adaptivni fond i provera znanja se šire tek do dostignute lekcije",()=>{
  for(const {grade,area,lesson} of lessons.filter(x=>later(x.lesson))){
    const reached=unlockedPracticeLessonIds(grade,area.id,[],lesson.id);
    assert.ok(reached.includes(lesson.id),lesson.id);
    const eligible=new Set(reached),tasks=getAreaTest(grade.id,area.id,eligible);
    assert.ok(tasks.length>0&&tasks.length<=10);
    assert.ok(tasks.every(t=>eligible.has(t.lessonId)));
    assert.ok(tasks.some(t=>t.lessonId===lesson.id),lesson.id);
    assert.ok(sessionPool(grade,{areaId:area.id,unlockedLessonIds:reached}).every(t=>eligible.has(t.lessonId)));
  }
});

test("promena meseca ne prepisuje stari započeti rad",()=>{
  const l=byId("sabiranje"),work=lessonWorkTasks(l.id,tasksForLesson(l.id,l.tasks));
  const saved={taskIds:work.map(t=>t.id),current:3,run:2,tasks:{[work[0].id]:{value:work[0].answer,attempts:1,hint:false,solution:false,feedback:"correct",result:{firstCorrect:true,usedSolution:false,attemptCount:1,finalCorrect:true}}}};
  const restored=normalizeLessonWork(JSON.parse(JSON.stringify({[l.id]:saved})));
  assert.deepEqual(resumeLessonWork(l.id,work,[],restored[l.id]),saved);
});

test("promenljive u proizvodima, složeni izložioci i razlomci ostaju matematički u oba pisma",()=>{
  for(const script of ["cyrl","latn"]){
    for(const formula of ["ax+b=0","2ax+a²","[[frac:ac|bd]]","a^{m+n}","P=2B+M","1 dm³=1000 cm³"])
      assert.equal(localizeMathText(formula,script),formula);
    assert.match(mathHtml("a^{m+n}"),/<sup>m\+n<\/sup>/);
    assert.match(mathHtml("3/8"),/class='frac'/);
    assert.equal(mathHtml("60 km/h"),"60 km/h");
    assert.match(mathHtml("10^{−n}"),/<sup>−n<\/sup>/);
  }
});

test("površina i zapremina pravilnih trostranih i šestostranih prizmi ostaju matematički tačne",()=>{
  const povrsina=byId("prizma-mreza");
  const zapremina=byId("prizma-zapremina");
  const p=povrsina.tasks.find(t=>t.taskType==="pravilni-sestougao-povrsina");
  const v=zapremina.tasks.find(t=>t.taskType==="pravilni-sestougao-zapremina");
  const t=zapremina.tasks.find(t=>t.taskType==="pravilna-trostrana-zapremina");
  assert.ok(p&&v&&t,"nedostaje primena formule za pravilnu prizmu");
  assert.equal(p.kind,"choice");
  assert.equal(v.kind,"choice");
  assert.equal(t.kind,"choice");
  assert.ok(Math.abs((2*6*(2**2*Math.sqrt(3)/4)+6*2*5)-(60+12*Math.sqrt(3)))<1e-10);
  assert.ok(Math.abs((6*(2**2*Math.sqrt(3)/4)*3)-(18*Math.sqrt(3)))<1e-10);
  assert.ok(Math.abs(((4**2*Math.sqrt(3)/4)*3)-(12*Math.sqrt(3)))<1e-10);
  assert.equal(p.answer,"(60+12√3) cm²");
  assert.equal(v.answer,"18√3 cm³");
  assert.equal(t.answer,"12√3 cm³");
  for(const sc of ["cyrl","latn"])for(const text of [p.answer,v.answer,t.answer,...p.choices,...v.choices,...t.choices,...povrsina.formulas]){
    assert.doesNotMatch(mathHtml(localizeMathText(text,sc)),/\[\[(?:frac|sqrt):|NaN|undefined/);
  }
});

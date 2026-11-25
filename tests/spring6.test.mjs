import assert from "node:assert/strict";
import test, {after} from "node:test";
import {createServer} from "vite";
const vite = await createServer({configFile:false,appType:"custom",optimizeDeps:{noDiscovery:true},server:{middlewareMode:true,hmr:false}});
after(()=>vite.close());
const load = name => vite.ssrLoadModule("/app/"+name+".ts");
const {grades} = await load("content/index");
const {springAreas} = await load("content/spring6/index");
const {springChecks,finals} = await load("content/spring6/checks");
const {sameAnswer} = await load("lesson-work");
const {lessonWorkTasks} = await load("content/october-work");
const {unlockedPracticeLessonIds,sessionPool} = await load("practice-engine");
const {mathHtml} = await load("math-format");
const {localizeMathText} = await load("transliteration");
const all = springAreas.flatMap(area=>area.lessons);

// Independent calculations and conceptual keys, including reserve, exit and area items.
const expected = {
  model:[500-350,2-(-3.5),"x≥4",1.5/4,-1+2.75,(900-175.5)/2,3*(-2.5)+4,"x>−4",Math.floor((400-95)/42.5),2*(-1.25)-2,(150+30)/6,(7.5+42.5)/2,Math.ceil(-2.5),Math.ceil(12.6/.75),1.5-4.25,(-7+4)/(-.75)],
  konstrukcije:[90/2,180/3,"Kružnica","Ne",120/4,"SUS",180-42-76,180-45,9-5+1,1,90+30,0,"Dva puta prepolovi","Ne",6,8-1],
  podudarnost:["KM","Temena","U centru upisane kružnice",90,"Ne",2*3.5,9/2,14/2,"SSS",2*2.4,180-63-52,"Simetrala duži AB","Ugao naspram 6 cm","Da","Centar",24-7-8],
  koordinate:[-4,0,"IV","Na osi y",5+3,-1+4,5,9/36*100,2+(2+3),(20-8)/3,"I",(-5+1)/2,-4-1,7*5,Math.max(9-4,7-9,10-7),-2],
  preslikavanja:["U istoj tački",90,3.7,2,2*2.2,(-5+9)/2,6+(-1-2),"Početni trougao",-2+5,"Ne",1,-1+4,(1+7)/2,"Osna simetrija oko te prave",124/2,-(4+2)],
  podaci:[5,3*6,"Stubičasti dijagram",5+7+9,(-2+1+4)/3,12+7-8-10,Math.max(9-3,8-9,12-8),"Ne",4*23-18-25-27,(4*12+2*6)/6,50+3*5,3+1,5,"Jednako je",3*2+1-6,20/5],
  razmera:["2:3",100,4*9/3,5+2,"1:25",700/200,84*3/7,6*5/2,15*11/(7-4),600000/2.4,"Da",3*5/2,15*6/10,20*2/5,12*7/3,"3:20"],
  zavisnost:[450/3,4*3,"Deli se sa 3","O(0, 0)",42*2.5/3,"Obrnuti",9*4/6,6/-2,(20-4*2)/3,180/3-180/6,50,60/7.5,300*3/1.2,180/60-180/90,"Ne",120/20],
  procenti:[650/100,35/100,36/4,"Redovna cena",2500*.88,4*100/25,18/.6,120/800*100,1000*1.2*.8,(800+100)/.75,100*(1-12/16),.075*400,1980/1.1,42/50*100,300/1500*100,40*.15],
  uglovi:[2,"CD",2*180,2+3+4+3,360-84-77-112,180-65,21-4.5-6-3.5,32+43,360*4/12,17+19-2*6,"Ne","D",360/4,(360-2*70)/2,30-2-6-7-8,4*180-360],
  paralelogram:[2,4*4.5,"Da",2*3,2*(5.5+8),180-117,"Sve stranice jednake",106/2,(34/2-3)/2,"Kvadrat",4*2,"Dijagonale se uzajamno polove",46/2-9,180-2*37,10+16,180/4],
  vektori:["→NM","→AC",2*4,0,7-3,"→DC",6*.5,11/2,0+(3+2),3-2*(-2),0,"Ne",2-5,"Suprotan","AB",2+(7-3)],
  trapez:["Osnovice",9/2,90,(7+13)/2,2*9-12,180-63,(38-2*7)/2,2*13,(15-7)/2,24*3/4,"Ne",4+10+2*5,2*3.7,15/2,(8+8+10)/2,"Ne"],
  "cetiri-stranice":[12-7,6/2,"AC","Šestar","Ne","ED","Romb",(18-10)/2,9-3+1,1,"Ne",7,"7 cm",90,4+5-1,"Da"],
  merenje:[7**2,8*3,2*100,"Visina na a",63/7,2*.75,(20/4)**2,"Površine su jednake",12*4/8,3*4/(.5**2),1,1.2*10000,.24*100/4,Math.sqrt(2*8),3*100*20/1000,9*2],
  "trougao-trapez":[6*4/2,5*8/2,7*3,.5,2*42/12,(10+6)*4/2,45/5,"Ostaje ista",2*54/6-12,96*3/8,18*4,(9+15)*2.5/2,30/7.5,"Trougao osnovice 10 i trapez osnovica 3 i 7",(4+8)/2*(5-3),(4+6)*(10*2/4)/2],
  delovi:[6*8/2,35-8,"Normalne su",2.4+1.6,2*45/9,8*6/2,8*5-6*3,6**2/2,20+18-4,(15-2-1.5)*.2,20*(2+5)/2,60+6*4/2,64/8,8**2-4*1.5**2,"Ne",2*10*4/2],
  sinteza:[-7+18,180-45-65,18/2-4,1000*3/4,(-12)*2/8,6*50000/100000,(8+12)*4/2*.75,3*5/5,(24+3)/3-3,(5-1)*(4-1)*60,-2+3-5,(-4+10)/2,1700/.85,"Nema dovoljno podataka",6*(3+2),Math.ceil(9/1.6)],
};
function verify(task, key){
  if(typeof key==="number"){
    const [n,d="1"]=task.answer.replace(",",".").split("/");
    assert.ok(Math.abs(Number(n)/Number(d)-key)<1e-10,task.id+" "+task.answer+" vs "+key);
  }else assert.equal(task.answer,key,task.id);
  if(task.choices) assert.equal(task.choices.filter(v=>sameAnswer(v,task.answer)).length,1);
  assert.ok(task.solution&&task.hint);
  for(const script of ["latn","cyrl"])for(const field of [task.prompt,task.hint,task.solution,...(task.choices??[])])
    assert.doesNotMatch(mathHtml(localizeMathText(field,script)),/\[\[(?:sqrt|frac):|NaN|undefined/);
}
test("sve jedinice, posebni zadaci, jedinstveni identifikatori i nezavisan matematički ključ",()=>{
  const ids=new Set(),prompts=new Set();
  assert.equal(all.length,18);
  for(const lesson of all){
    assert.ok(lesson.aim&&lesson.rules.length===3&&lesson.worked.length===3);
    for(const example of lesson.worked) assert.ok(example.steps.length>=2&&example.question);
    const work=lessonWorkTasks(lesson.id,lesson.tasks);
    assert.deepEqual(["basic","medium","advanced"].map(level=>work.filter(t=>t.level===level).length),[4,4,2]);
    const tasks=[...lesson.tasks,...lesson.mini,...lesson.areaQuestions];
    assert.equal(tasks.length,16);
    tasks.forEach((task,i)=>{
      assert.ok(!ids.has(task.id)&&!prompts.has(task.prompt),task.id);
      ids.add(task.id);prompts.add(task.prompt);
      assert.ok(!lesson.worked.some(e=>e.question===task.prompt));
      verify(task,expected[lesson.id.slice(3)][i]);
    });
  }
  assert.equal(ids.size,288);
});

test("provere po oblastima i tri različite završne provere",()=>{
  const keys=[
    [0,150/2,18/2,8*45/6,7.5*40000/100000,-5+(4-1),640/.8-640,(2*66/6+4)/2,"Jednake udaljenosti od sve tri prave stranica",40*30-30*24/2],
    [8,(-.8)*(-2.5),360-91-89-103,(1.2-2)/(-.4)+.5,4,8,64/4*.75,3500/100,(14*2)*2/3,6*3/2],
    [600*10/8,((9+17)/2+9)/2,Math.floor((500-35)/62.5),900/.9/1.25,3+(4*9-4*3)/2,2*9/3,3*5,(10*8-8*6)/.4,2*40/(2*24/6),-2+30/6],
  ];
  const extra=[(900-87)/3,2*21-2*8,960/3/.8,(40-2*13)/2,12**2-8**2,60*(5*20000/100000)/4];
  const checkedIds=new Set(),prompts=new Set();
  for(const c of springChecks.values())for(const item of c.items){
    assert.ok(!checkedIds.has(item.id)&&!prompts.has(item.prompt),item.id);
    checkedIds.add(item.id);prompts.add(item.prompt);
    assert.ok(grades[0].areas.some(a=>a.lessons.some(l=>l.id===item.lessonId)),item.lessonId);
  }
  assert.equal(springChecks.size,27);
  finals.forEach((f,i)=>{assert.equal(f.items.length,10);f.items.forEach((t,j)=>verify(t,keys[i][j]))});
  springAreas.forEach((a,i)=>{
    const check=springChecks.get(a.id);
    assert.deepEqual(new Set(check.items.map(t=>t.level)),new Set(["basic","medium","advanced"]));
    verify(check.items.find(t=>t.id.endsWith("-primena")),extra[i]);
  });
});

test("meseci, redosled i adaptivni fond svih novih lekcija",()=>{
  assert.deepEqual(["january","february","march","april","may","june"].map(m=>all.filter(l=>l.month===m).length),[2,4,4,4,3,1]);
  for(const area of springAreas)for(const lesson of area.lessons){
    const unlocked=unlockedPracticeLessonIds(grades[0],area.id,[],lesson.id);
    assert.ok(unlocked.includes(lesson.id),lesson.id);
    const pool=sessionPool(grades[0],{areaId:area.id,unlockedLessonIds:unlocked});
    assert.ok(pool.some(t=>t.lessonId===lesson.id)&&pool.every(t=>unlocked.includes(t.lessonId)));
    assert.ok(pool.every(t=>!lesson.mini.some(m=>m.id===t.id)));
  }
  assert.deepEqual(grades.slice(1).map(g=>g.areas.flatMap(a=>a.lessons).length),[32,27]);
});

test("tačno poređenje razlomaka, decimala, negativnih i graničnih zapisa",()=>{
  for(const [a,b] of [["−2/4","-0,5"],[".125","1/8"],["112/6","56/3"],["3/-4","-0.75"],["6e-2","0,06"]])assert.ok(sameAnswer(a,b));
  for(const a of ["0/0","1/0","2/","2/3/4","","1,00000000000000001"])assert.ok(!sameAnswer(a,"1"));
});

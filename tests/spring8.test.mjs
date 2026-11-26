import test,{after} from "node:test";
import assert from "node:assert/strict";
import {createServer} from "vite";

const server=await createServer({configFile:false,appType:"custom",optimizeDeps:{noDiscovery:true},server:{middlewareMode:true,hmr:false}});
after(()=>server.close());
const load=path=>server.ssrLoadModule("/app/"+path);
const {spring8Areas}=await load("content/spring8/index.ts");
const {checks8}=await load("content/spring8/checks.ts");
const {examSets}=await load("content/spring8/exams.ts");
const {finals8}=await load("content/spring8/finals.ts");
const {grades}=await load("content/index.ts");
const {submitTask,emptyTask}=await load("lesson-work.ts");
const {eighthAnswer}=await load("eighth-answer.ts");
const {intersection}=await load("eighth-algebra.tsx");
const {solidMeasures,faces,curvedMantle}=await load("eighth-solids.tsx");
const lessons=spring8Areas.flatMap(a=>a.lessons);
test("Radne jedinice, vidljive provere i ciljevi preporuka",()=>{
  assert.equal(lessons.length,12);assert.equal(checks8.size,23);
  assert.deepEqual(examSets.map(e=>e.items.length),[10,20,20,20]);
  for(const l of lessons){
    assert.ok(l.month!=="june"&&l.aim&&l.rules.length===3);
    assert.equal(l.worked.length,3);
    assert.deepEqual(["basic","medium","advanced"].map(v=>l.tasks.filter(t=>!t.practiceOnly&&t.level===v).length),[4,4,2]);
    assert.equal(l.tasks.filter(t=>t.practiceOnly).length,1);assert.equal(l.mini.length,3);
  }
  const all=grades.flatMap(g=>g.areas.flatMap(a=>a.lessons));
  assert.equal(all.length,new Set(all.map(l=>l.id)).size);
  for(const l of lessons)for(const pre of l.prerequisites)assert.ok(all.some(l=>l.id===pre),pre);
  for(const e of [...checks8.values(),...examSets]){
    assert.deepEqual(new Set(e.items.map(t=>t.level)),new Set(["basic","medium","advanced"]),e.id);
    for(const t of e.items)assert.ok(t.lessonId==="deljivost5"||all.some(l=>l.id===t.lessonId),t.lessonId);
  }
  const tasks=[...lessons.flatMap(l=>l.tasks),...[...checks8.values(),...examSets].flatMap(e=>e.items)];
  assert.equal(tasks.length,298);
  assert.equal(new Set(tasks.map(t=>t.id)).size,tasks.length);
  assert.equal(new Set(tasks.map(t=>t.prompt)).size,tasks.length);
  for(const t of tasks)assert.ok(submitTask({...emptyTask(),value:t.answer},t).result?.firstCorrect,t.id);
});
test("Tačni izrazi, razlomci, uređeni parovi i nevažeći zapisi",()=>{
  for(const [v,k] of [["pi*8","8π"],["sqrt(12)","2√3"],["√18/3","√2"],[".125","1/8"],["(0,5; -6/2)","(1/2;-3)"],["(2,-1)","(2;-1)"],["(3+5)*π","8π"],["√12+√3","3√3"]])assert.ok(eighthAnswer(v,k),v);
  for(const [v,k] of [["3.14","π"],["1.41421356","√2"],["1/0","1"],["(2;-3)","(-3;2)"],["0.500000000000000001","1/2"],["foo()","0"],["3-π","−3π"],["1 2 3","6"],["1 2 3","123"],["2**3","8"],["√-9","3"]])assert.ok(!eighthAnswer(v,k),v);
});
const root=Math.sqrt,pi=Math.PI;
function numeric(s){
  const m=/^([−-]?\d+(?:[.,]\d+)?)(?:(π)|√(\d+)|\/(\d+))?$/.exec(s);
  if(!m)return NaN;
  return Number(m[1].replace("−","-").replace(",","."))*(m[2]?pi:m[3]?root(+m[3]):m[4]?1/+m[4]:1);
}
function verify(rows,keys){
  assert.equal(rows.length,keys.length,rows[0].id);
  rows.forEach((t,i)=>{const k=keys[i];if(typeof k==="number")assert.ok(Math.abs(numeric(t.answer)-k)<1e-8,t.id+" "+t.answer+" / "+k);
    else assert.equal(t.answer,k,t.id);});
}
test("Nezavisni računski i pojmovni ključ za sve lekcije, mini-provere, provere oblasti i dopunske zadatke",()=>{
 const keys={
 prizma:[2,"Pravougaonik",4**3,18*7,Math.hypot(6,8),5*12/2*4,6,14/2,root(17**2-15**2),6*4**2*root(3)/4*9,6,Math.hypot(9,12),2*48+2*(8+6)*7,"Trostranu",30+72,Math.hypot(9,12,20),154-64],
 piramida:[6,"Visina piramide",3*8,7*4/2,6*3*7/2,4*4*3/2,Math.hypot(8,15),Math.hypot(5,12),2*(384-144)/48,Math.hypot(4,4),"Vrh i teme osnove",30*8/2,2*root(169-144),"Osnova",2*90/30,2*12*Math.hypot(6,8),root(169-144)],
 zapremina:[30,81/3,"dm³","Ne",3*72/24,root(48*3/9),18*root(3)*4/3,3/2,Math.hypot(12,5),18*root(3)*3/(6*root(3)),2,3*56/7,64*root(25-16)/3,3,10*6/2,6*5*9*2/3,18*2.5/3],
 funkcija:[7,-4,5-6,"Masa",(17-5)/2,12/4,1+6,180+12*15,460-2*(850-460)/3,"Ne daje funkciju y od x","Na y-osi",-10/4,82+6,0,-8/4,800/4*7,-8-3],
 znak:["Na x-osi",0,"Svi realni brojevi","Opada",14/4,"x>−2",-3/2,"Poklapaju se",3*4,8,"k=0",15/5,"x>2","Paralelna i različita","Seku se",3*5,-2],
 sistemi:["Da","Vertikalna",0,"(2;-1)","(3;4)","(5;3)","(3;2)",0,"(4;2)","Svi parovi (7; y)",0,"(3;-2)",2*3,"0x+0y=0","(1/2;2)","(2;-1)","(7;3)"],
 model:["x+y","y+3",14,520,20,22-18,8-(1900-1600)/100,13*9,(.9-.5)/.2,73,"Ne",16000-14000,"Ne","y:x",(54-28)/2,18-(47-36),6],
 valjak:[3,"Pravougaonik",25*pi,8*pi,2*pi*2*(2+9),9*pi*2,10,60/12,root(289-225)/2,(16+48)*pi,2,75/25,9/2,6*8,14,36/9,(18-10)/2],
 kupa:["Kružni isečak","Omotač",12*pi,14*pi,root(100-36),25*12*pi/3,70*pi,27/3,10/2,Math.hypot(6,8),"Izvodnica",12*8/2,360*8/24,12*9/3,2*40/10,9*pi*2/3/.5,49*pi*6/3],
 lopta:["Sfera",7,"Veliki krug",1,64*pi,36*pi,2*root(100/4),root(169-144),root(100-64),Math.cbrt(8*8),"Prazan",9,4*25*pi/2,"Kružnici",196*pi,36/12,2*Math.hypot(8,6)],
 tela:[2.5*100,3500/1000,"B·H:3","Jednakokraki trougao",42+14,1000-125,2*24-8,.4*.25*1000,6**3,(144-48)*pi,48,3,24+32/3,"Kroz centar",.72*1000,6,72/4],
 godina:[4*25/100,"Slična",0,"Graduiranom posudom",3,(490+505+505)/3,root(245/5),34-3*8,Math.cbrt(27)**2,17,"Unutrašnje",8,270+(410-270)/2,"Površina etikete",20*(9/6)**2,(50+4*7-10)/4,15*100/250],
 };
 for(const l of lessons){verify([...l.tasks.slice(0,10),...l.mini,...l.areaQuestions,l.tasks[10]],keys[l.id.slice(3)]);}
});
test("Nezavisni ključ većih provera i sva tri probna testa",()=>{
 const keys=[
 [7,6,4*5*6/2,7/.5,"(5;4)",(18+42)*pi,64*pi*15/3,root(169-25)],
 [18/2,"Istu kao duž",15,5,150*3/45,335-(570-335),10+4*1.5,8**3/16**2],
 ["Negativan nagib",4200/350,Math.hypot(2,3,6),3*7,81*pi*2/3,2*(750-200),4*27*pi/3,80*(3/2)**3],
 [24,720-450,50+9*4,"(11;5)",4,(2+6)*pi,1750,2.5*4*100,7,(40+20)/10],
 [137%9,11,24/60,3600/.8,7,6,"(12;7)",9,360/12,3,9*pi*8/3,6,2*root(225-144),450,3.5,60/2.4,9,7/28*100,148*4-442,(2940-24*90)/60],
 [12,4,375/1000,900*1.1*.9,6,9+5*2,"(-2;1)",6/3,540,4,72/8,4*8/3,root(26**2-24**2-8**2),.78,80,6,8,360*14/40,(15+6)/7,16-(2500-1600)/100],
 [0,5,2-.75,250/1250*100,21,4/3,"(3;-3)",5,8,8,39*pi,49*pi,4*10*13/2,32,2400,70-15,17-9,18/60*100,20-12,26-(50-26)/2],
 ];
 [...finals8,...examSets].forEach((v,i)=>verify(v.items,keys[i]));
});
test("Preseci pravih rešavaju originalne jednačine, uključujući identitete i vertikale",()=>{
 for(let a=-2;a<=2;a++)for(let b=-2;b<=2;b++)for(let c=-2;c<=2;c++)
 for(let d=-2;d<=2;d++)for(let e=-2;e<=2;e++)for(let f=-2;f<=2;f++){
   const s=intersection([a,b,c],[d,e,f]);
   if(s.kind==="point"){assert.ok(Math.abs(a*s.x+b*s.y-c)<1e-9&&Math.abs(d*s.x+e*s.y-f)<1e-9);assert.notEqual(a*e,b*d);}
   else if((a===0&&b===0&&c!==0)||(d===0&&e===0&&f!==0))assert.equal(s.kind,"none");
   else {assert.ok(a*e===b*d);assert.equal(s.kind,(a*f===c*d&&b*f===c*e)?"many":"none");}
 }
});
test("Sve dozvoljene dimenzije daju iste rezultate nezavisnim formulama, ravna mreža i razvijanje čuvaju dužine",()=>{
 for(let r=1;r<=8;r++)for(let h=1;h<=12;h++)for(const n of [3,4,6]){
   const polygon=n*r*r*Math.sin(2*pi/n)/2;
   for(const kind of ["prizma","piramida","valjak","kupa","lopta"]){
     const p=solidMeasures(kind,r,h,n,r/2),poly=["prizma","piramida"].includes(kind),sharp=["kupa","piramida"].includes(kind);
     const b=poly?polygon:pi*r*r, expectedV=kind==="lopta"?4*pi*r**3/3:b*h/(sharp?3:1);
     const perimeter=poly?n*2*r*Math.sin(pi/n):2*pi*r;
     const surface=kind==="lopta"?4*pi*r*r:sharp?b+perimeter*Math.hypot(h,poly?r*Math.cos(pi/n):r)/2:2*b+perimeter*h;
     assert.ok(Math.abs(p.area-surface)<1e-8&&Math.abs(p.volume-expectedV)<1e-8);
     assert.ok(Math.abs(p.section**2+(r/2)**2-r*r)<1e-8);
     if(poly){const net=faces(kind,r,h,n,1,1);assert.ok(net.every(f=>f.p.every(v=>Math.abs(v[1])<1e-8)));}
   }
   for(const cone of [false,true])for(const t of [0,.5,1]){
     const mesh=curvedMantle(cone,r,h,t);const [p,,q,z]=mesh[0].p;
     assert.ok(Math.abs(Math.hypot(...p.map((x,i)=>x-(z??q)[i]))-(cone?Math.hypot(r,h):h))<1e-8);
   }
 }
});

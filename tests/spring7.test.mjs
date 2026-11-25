import test,{after} from "node:test";
import assert from "node:assert/strict";
import {createServer} from "vite";
const server=await createServer({configFile:false,appType:"custom",server:{middlewareMode:true,hmr:false}});
after(()=>server.close());
const {spring7Areas}=await server.ssrLoadModule("/app/content/spring7/index.ts");
const {checks7}=await server.ssrLoadModule("/app/content/spring7/checks.ts");
const {submitTask,emptyTask}=await server.ssrLoadModule("/app/lesson-work.ts");
const {algebraAnswer}=await server.ssrLoadModule("/app/polynomial-answer.ts");
test("Svih 17 lekcija i 25 provera imaju prihvatljiv ključ i različite ID-jeve",()=>{
 const lessons=spring7Areas.flatMap(a=>a.lessons);assert.equal(lessons.length,17);assert.equal(checks7.size,25);
 const tasks=lessons.flatMap(l=>l.tasks).concat([...checks7.values()].flatMap(c=>c.items));
 assert.equal(new Set(tasks.map(t=>t.id)).size,tasks.length);
 for(const task of tasks)assert.ok(submitTask({...emptyTask(),value:task.answer},task).result?.firstCorrect,task.id);
});
test("Ekvivalentni oblici, potpun proizvod i tačan broj π",()=>{
 for(const [value,key,form,ok] of [
 ["3+x*5","5x+3","expanded",true],["5(x+1)-2","5x+3","expanded",false],["(5+x)(x-5)","(x-5)(x+5)","product",true],["x²-25","(x-5)(x+5)","product",false],["1(x²-25)","(x-5)(x+5)","product",false],["(3-x)^2","(x-3)^2","square",true],["(x-3)(x-3)","(x-3)^2","square",false],["pi*8","8π","value",true],["25,12","8π","value",false],["x^9999","x","value",false]
 ])assert.equal(algebraAnswer(value,key,form),ok,value);
});

test("Nezavisna provera računskih i modelskih odgovora",()=>{
 const keys={
 uglovi:[8,6-2,null,180-137,10*180,1260/180+2,360-82-96-101,360-50-65-80-90,180,null,6*180,9-2,360/18,5*2+2,180-56,10+2-4],
 pravilni:[360/5,4,7,null,180-360/12,360/40*3,6/2,null,360/(180/6),null,(180-36)/2,360/20,14/2,360/15-3,6*4,null],
 povrsina:[8*2.5,null,7*4/2,null,9*8-9,64*2/32,8*5+8*3/2,3**2,Math.sqrt(13**2-5**2),2*(7+5),15,54/9,(10+6)*5/2+9,20**2-16**2,Math.sqrt(36)/2,6*4**2/4],
 centri:[null,18/2,null,null,2*5,14*1.5,null,null,54/2,null,2,24/3,null,6*3,null,null],
 monomi:[-7,3+2,3*(-2)-1,null,null,null,0,-9+8,null,8-3,5,-1,4*4+6,-9,1+4+1,null],
 polinomi:[3,-2,5,null,null,0,null,null,3,null,null,2,null,-(2*4-5*2+1),2,null],
 proizvod:[2*3,null,null,-7*3,null,null,2*(-5)+3,null,null,5+2,2*(-6),null,null,28/-4,3*3,null],
 identiteti:[2*6,7**2,null,null,null,48*52,4**2,16-10,51**2-49**2,null,2,null,101**2,42/6,-2*9,22**2-18**2],
 cinioci:[6,1,null,null,null,null,9-4,null,null,87**2-13**2,7**2,null,null,null,null,2*6],
 jednacine:[null,2*3,10/2,null,(20-4)/4,(21-9)/-6,0,(10-4)/2,(45-9)/6,0,28/4,12/-4,(55-25)/10,(32+4)/4,0,7],
 kruznica:[2*5,60/2,2*30,90,(360-60)/2,33,180-70,90-30,2*30,90/3,140,2*6,43,2*40,2*40,120/3],
 luk:[8,null,null,null,null,12/2,null,10*3.14,360/6,null,null,10,8,360/6,null,null],
 isecci:[null,null,Math.sqrt(16),90/360,null,null,null,null,360/6,Math.sqrt(20+16),null,null,null,60,Math.sqrt(36),Math.sqrt(28+36)],
 rotacija:[3,5,0,-3,-3,20+75,1+4,5,360/8,(1+7)/2,-4,4,40+75,360/12,0,(2+8)/2],
 podaci:[(3+5+7)/3,4,3,3+6,(3+9)/2,3*7-3-5,3,(2*3+3*5)/5,5/5,(4*3+2*9)/6,(4+9)/2,6,3*8-4-6,10/5,4,(4*4+2*10)/6],
 procena:[4.4,.02,4,0,-4.75,1,4.3,4.5,3,.002*10,-5.75,5.4,2,6,5,.002*20],
 sinteza:[12,null,12,-7,(7+9)/2,5,Math.hypot(3,4),5,60,5,8.5,14,6,60,14,6]
 };
 for(const l of spring7Areas.flatMap(a=>a.lessons)){
  const rows=[...l.tasks,...l.mini,...l.areaQuestions];
  keys[l.id.slice(3)].forEach((n,i)=>{
   if(n===null)return;
   const [a,b="1"]=rows[i].answer.replace(",",".").split("/");
   assert.ok(Math.abs(Number(a)/Number(b)-n)<1e-10,rows[i].id);
  });
 }
});

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

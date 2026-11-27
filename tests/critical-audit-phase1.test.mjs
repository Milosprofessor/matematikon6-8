import assert from 'node:assert/strict';
import {test} from 'node:test';
import {createServer} from 'vite';
const vite=await createServer({configFile:false,appType:'custom',server:{middlewareMode:true,hmr:false},optimizeDeps:{noDiscovery:true}});
const {sameAnswer}=await vite.ssrLoadModule('/app/lesson-work.ts');
const {algebraAnswer}=await vite.ssrLoadModule('/app/polynomial-answer.ts');
await vite.close();
test('LOG-04 mixed numbers preserve addition, sign and token boundaries',()=>{
 assert.equal(sameAnswer('1 2/4','3'),false);
 assert.equal(sameAnswer('1 1/2','1,5'),true);
 assert.equal(sameAnswer('-1 1/2','-1.5'),true);
 assert.equal(sameAnswer('1 2','12'),false);
 assert.equal(sameAnswer('1 1/0','1'),false);
 assert.equal(sameAnswer('6/4','1.5'),true);
});
test('LOG-05 expanded form rejects uncancelled terms',()=>{
 assert.equal(algebraAnswer('6x+x-x','6x','expanded'),false);
 assert.equal(algebraAnswer('6x','6x','expanded'),true);
 assert.equal(algebraAnswer('4+2x','2x+4','expanded'),true);
 assert.equal(algebraAnswer('2(x+2)','2x+4','expanded'),false);
});
test('LOG-07 exact powers and π preserve mathematical value',async()=>{
 const server=await createServer({configFile:false,appType:'custom',server:{middlewareMode:true,hmr:false},optimizeDeps:{noDiscovery:true}});
 try{
  const {eighthAnswer}=await server.ssrLoadModule('/app/eighth-answer.ts');
  assert.equal(eighthAnswer('5^2*pi','25π'),true);
  assert.equal(eighthAnswer('5^3*pi','25π'),false);
  assert.equal(eighthAnswer('78.54','25π'),false);
  assert.equal(eighthAnswer('0^0','1'),false);
  assert.equal(eighthAnswer('2^99','1'),false);
 }finally{await server.close()}
});
test('LOG-09 scientific notation is compared as exact rationals',()=>{
 assert.equal(sameAnswer('3.0000000000000000001e0','3'),false);
 assert.equal(sameAnswer('3e0','3'),true);
 assert.equal(sameAnswer('15e-1','1.5'),true);
 assert.equal(sameAnswer('1e999','1'),false);
});
test('LOG-06 explicitly declared units are checked, never discarded blindly',async()=>{
 const server=await createServer({configFile:false,appType:'custom',server:{middlewareMode:true,hmr:false},optimizeDeps:{noDiscovery:true}});
 try{
  const {submitTask,emptyTask}=await server.ssrLoadModule('/app/lesson-work.ts');
  const task={id:'t8-9',kind:'input',answer:'7,5',answerUnit:'m'};
  for(const v of ['7,5 m','7.5','15/2 m','750 cm'])assert.equal(submitTask({...emptyTask(),value:v},task).feedback,'correct');
  for(const v of ['7,5 cm','7.6 m','750 m','7,5 kg'])assert.equal(submitTask({...emptyTask(),value:v},task).feedback,'wrong');
 }finally{await server.close()}
});
test('audited mathematical corrections retain IDs and remove ambiguity',async()=>{
 const server=await createServer({configFile:false,appType:'custom',server:{middlewareMode:true,hmr:false},optimizeDeps:{noDiscovery:true}});
 try{
  const {grades}=await server.ssrLoadModule('/app/content/index.ts');
  const {tasksForLesson}=await server.ssrLoadModule('/app/content/enhancements.ts');
  const tasks=grades.flatMap(g=>g.areas.flatMap(a=>a.lessons.flatMap(l=>tasksForLesson(l.id,l.tasks))));
  const task=id=>tasks.find(t=>t.id===id);
  assert.match(task('6-4i').prompt,/konačnu/);
  assert.match(task('6-11j').prompt,/konačno/);
  assert.match(task('8r-3').prompt,/trougla/);
  assert.match(task('o8-dr-5').answer,/Prava/);
  for(const t of tasks.filter(t=>t.id.startsWith('ow-ineqtri-strict-')))assert.ok(!t.choices.some(c=>c.includes('≤')));
 }finally{await server.close()}
});
test('expanded form rejects uncomputed products as well as like terms',()=>{
 assert.equal(algebraAnswer('x*x','x^2','expanded'),false);
 assert.equal(algebraAnswer('2*3x','6x','expanded'),false);
 assert.equal(algebraAnswer('6*x','6x','expanded'),true);
 assert.equal(algebraAnswer('6х','6x','expanded'),true);
 assert.equal(algebraAnswer('6х+х-х','6x','expanded'),false);
});

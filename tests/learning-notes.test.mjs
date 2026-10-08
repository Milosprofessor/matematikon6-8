import assert from 'node:assert/strict';
import test,{after} from 'node:test';
import {createServer} from 'vite';
import {fileURLToPath} from 'node:url';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

const root=fileURLToPath(new URL('..',import.meta.url));
const vite=await createServer({root,configFile:false,appType:'custom',server:{middlewareMode:true,hmr:false}});
after(()=>vite.close());
const {grades}=await vite.ssrLoadModule('/app/content/index.ts');
const {learningByLesson}=await vite.ssrLoadModule('/app/content/learning.ts');
const {lessonNotes,noteLayouts}=await vite.ssrLoadModule('/app/content/learning-notes.ts');
const {lessonVisuals}=await vite.ssrLoadModule('/app/content/lesson-visuals.ts');
const {LessonLearningContent}=await vite.ssrLoadModule('/app/lesson-learning.tsx');
const {ScriptProvider}=await vite.ssrLoadModule('/app/i18n.tsx');
const all=grades.flatMap(g=>g.areas.flatMap(a=>a.lessons));
const render=(lesson,script)=>renderToStaticMarkup(React.createElement(ScriptProvider,{script},React.createElement(LessonLearningContent,{lesson})));
const plain=html=>html.replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ').replace(/\s+/g,' ');

test('svih 59 lekcija imaju 2–5 smislenih, kratkih tačaka i samo jednu napomenu',()=>{
 assert.deepEqual(Object.keys(noteLayouts).sort(),all.map(l=>l.id).sort());
 for(const l of all){
  const notes=lessonNotes(l.id);
  assert.ok(notes.length>=2&&notes.length<=5,l.id);
  assert.equal(new Set(notes.map(p=>p.title)).size,notes.length,l.id);
  assert.equal(new Set(notes.map(p=>p.text)).size,notes.length,l.id);
  assert.equal(notes.filter(p=>p.note).length,1,l.id);
  for(const point of notes){
   assert.ok(point.title&&point.text,l.id+'/'+point.title);
   assert.ok(point.text.split(/(?<=[.!?])\s+(?=[A-ZŠĐČĆŽ])/u).length<=3,l.id+'/'+point.title);
  }
 }
});

test('sve postojeće formule ostaju tačne i pojavljuju se tačno jednom',()=>{
 for(const l of all){
  const formulas=lessonNotes(l.id).flatMap(p=>p.formulas);
  assert.deepEqual([...formulas].sort(),[...learningByLesson[l.id].extraFormulas].sort(),l.id);
  assert.ok(formulas.every(f=>typeof f==='string'&&f.length),l.id);
 }
});

test('svih 83 crteža je vidljivo unutar odgovarajuće nastavne tačke u oba pisma',()=>{
 let count=0;
 for(const l of all){
  const visuals=lessonVisuals(l.id),notes=lessonNotes(l.id);
  assert.deepEqual(notes.flatMap(p=>p.visualIndexes).sort((a,b)=>a-b),visuals.map((_,i)=>i),l.id);
  count+=visuals.length;
  for(const script of ['cyrl','latn']){
   const html=render(l,script),points=[...html.matchAll(/<li class="learning-point"[^]*?<\/li>/g)].map(m=>m[0]);
   assert.equal(points.length,notes.length,l.id);
   assert.doesNotMatch(html,/ hidden=|NaN|undefined|\[\[(?:frac|sqrt):/);
   for(let i=0;i<notes.length;i++){
    assert.equal((points[i].match(/<svg/g)??[]).length,notes[i].visualIndexes.length,l.id+'/'+i);
    for(const j of notes[i].visualIndexes)assert.ok(points[i].includes(`id="learning-${l.id}-view-${j}"`),l.id+'/'+j);
   }
  }
 }
 assert.equal(count,83);
});

test('prikazane beleške čuvaju uslove teorema i ne uvode koren unapred',()=>{
 const content=id=>JSON.stringify(lessonNotes(id));
 assert.match(content('deljenje'),/b≠0/);
 assert.match(content('skup-racionalnih-brojeva'),/nenultim imeniocem/);
 assert.match(content('kvadratni-koren'),/jedini nenegativan/);
 assert.match(content('svojstva-korena'),/nenegativan.*pozitivan/);
 assert.match(content('pitagorina-teorema'),/pravougli trougao/);
 assert.match(content('talesova-teorema'),/MN∥BC/);
 assert.match(content('stavovi-slicnosti'),/zahvaćen ugao/);
 assert.match(content('tacka-prava-ravan-osnove'),/nekolinearne/);
 assert.match(content('ortogonalnost'),/dve različite prave/);
 assert.match(content('poliedar'),/konveksan/);
 const lessons=grades.find(g=>g.id===7).areas.flatMap(a=>a.lessons),at=lessons.findIndex(l=>l.id==='kvadratni-koren');
 for(const l of lessons.slice(0,at))for(const script of ['latn','cyrl'])assert.doesNotMatch(render(l,script),/koren|корен|sqrt:|√/i,l.id);
 const lesson=all.find(l=>l.id==='tacka-prava-ravan-osnove'),html=render(lesson,'cyrl');
 assert.match(plain(html),/Ознаке и припадност/);
 assert.match(html,/A∈p/);assert.doesNotMatch(html,/А∈п/);
});

test('različiti geometrijski modeli stoje uz svoje pravilo',()=>{
 const square=lessonNotes('pitagora-pravougaonik-kvadrat');
 assert.deepEqual(square.find(p=>p.title==='Dijagonala pravougaonika').visualIndexes,[0]);
 assert.deepEqual(square.find(p=>p.title==='Dijagonala kvadrata').visualIndexes,[1]);
 const trapezoid=lessonNotes('pitagora-trapez');
 assert.match(trapezoid.find(p=>p.title==='Jednakokraki trapez').formulas[0],/frac:a−b\|2/);
 assert.match(trapezoid.find(p=>p.title==='Pravougli trapez').formulas[0],/h²\+\(a−b\)²/);
 const similarity=lessonNotes('stavovi-slicnosti');
 assert.ok(similarity.slice(0,3).every(p=>p.formulas.length===1));
 assert.notEqual(similarity[0].title,similarity[1].title);
});

import assert from 'node:assert/strict';
import test,{after} from 'node:test';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {createServer} from 'vite';
import {fileURLToPath} from 'node:url';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
const root=fileURLToPath(new URL('..',import.meta.url)),vite=await createServer({root,configFile:false,appType:'custom',resolve:{alias:{'@':root}},server:{middlewareMode:true,hmr:false}});after(()=>vite.close());
const {grades}=await vite.ssrLoadModule('/app/content/index.ts'),{learningByLesson}=await vite.ssrLoadModule('/app/content/learning.ts'),{lessonVisuals}=await vite.ssrLoadModule('/app/content/lesson-visuals.ts'),{tasksForLesson}=await vite.ssrLoadModule('/app/content/enhancements.ts'),{lessonWorkTasks}=await vite.ssrLoadModule('/app/content/october-work.ts'),{taskWithVisual}=await vite.ssrLoadModule('/app/content/task-visuals.ts'),{PreciseDiagram}=await vite.ssrLoadModule('/app/math-diagrams.tsx'),{PythagorasDiagram}=await vite.ssrLoadModule('/app/pythagoras-diagram.tsx'),{LessonLearningContent}=await vite.ssrLoadModule('/app/lesson-learning.tsx'),{ScriptProvider}=await vite.ssrLoadModule('/app/i18n.tsx');
const all=grades.flatMap(g=>g.areas.flatMap(a=>a.lessons.map(l=>({grade:g,area:a,lesson:l}))));
const fixture=JSON.parse(await readFile(new URL('./fixtures/original-lesson-work.json',import.meta.url),'utf8'));
const render=(C,props,script='latn')=>renderToStaticMarkup(React.createElement(ScriptProvider,{script},React.createElement(C,props)));
const drawing=d=>render(d.type==='pythagoras'?PythagorasDiagram:PreciseDiagram,{diagram:d,label:'Crtež',caption:'Crtež',task:true});
const point=(html,name)=>{const match=html.match(new RegExp('data-vertex="'+name+'" cx="([^"]+)" cy="([^"]+)"'));assert.ok(match,name);return [+match[1],+match[2]];};
const distance=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);
const parallel=(a,b,c,d)=>Math.abs((b[0]-a[0])*(d[1]-c[1])-(b[1]-a[1])*(d[0]-c[0]))<1e-7;
test('svih 86 aktivnih lekcija imaju objašnjen cilj, postupak, razlog i čestu grešku u oba pisma',()=>{
 assert.equal(all.filter(x=>!/^s[678]-/.test(x.lesson.id)).length,86);for(const {lesson:l} of all){const content=learningByLesson[l.id];assert.ok(content?.idea.length&&content.steps.length&&content.why&&content.caution,l.id);for(const script of ['latn','cyrl']){const html=render(LessonLearningContent,{lesson:l},script);assert.doesNotMatch(html,/\[\[(?:frac|sqrt):|NaN|undefined/);assert.doesNotMatch(html,/sourcePages|Udžbenik|Operativni plan/);assert.match(html,/learning-compact/);}}
});
test('zadaci čuvaju ID, nivo i tok rada uz dokumentovane matematičke ispravke audita',()=>{
 let count=0;for(const original of fixture){const current=all.find(x=>x.grade.id===original.grade&&x.lesson.id===original.lessonId);if(!current)continue;const tasks=lessonWorkTasks(current.lesson.id,tasksForLesson(current.lesson.id,current.lesson.tasks));assert.deepEqual(tasks.map(t=>t.id),original.tasks.map(t=>t.id));for(let i=0;i<10;i++){const expected=original.tasks[i],actual=tasks[i];for(const key of Object.keys(expected)){if(expected.id==='o8-pro-3'&&['math','hint','solution'].includes(key))continue;assert.deepEqual(actual[key],expected[key],expected.id+'/'+key);}count++;}}assert.equal(count,590);
});
test('objašnjenja i vizuelizacije 7. razreda ne uvode koren pre lekcije o korenu',()=>{
 const g=grades.find(g=>g.id===7),lessons=g.areas.flatMap(a=>a.lessons),at=lessons.findIndex(l=>l.id==='kvadratni-koren');for(const l of lessons.slice(0,at)){const c=learningByLesson[l.id];assert.doesNotMatch(JSON.stringify([c.aim,c.idea,c.steps,c.why,c.caution,c.extraFormulas,lessonVisuals(l.id)]),/koren|sqrt:|√/i,l.id);}
});
test('SVG za svaku lekciju i sve varijante ima konačne koordinate i čitljive matematičke oznake',()=>{
 for(const {lesson:l} of all){const diagrams=[...lessonVisuals(l.id).map(v=>v.diagram),...tasksForLesson(l.id,l.tasks).map(t=>t.diagram).filter(Boolean)];for(const d of diagrams){const html=drawing(d);assert.match(html,/<svg/);assert.doesNotMatch(html,/NaN|Infinity|undefined|\[\[(?:sqrt|frac):/);}}
});
test('Tales u više brojnih varijanti čuva paralelnost, dati odnos i sve poznate dužine',()=>{
 const l=all.find(x=>x.lesson.id==='talesova-teorema').lesson;const tasks=tasksForLesson(l.id,l.tasks);
 for(const t of tasks.filter(t=>t.diagram?.type==='tales'&&['triangle','rays'].includes(t.diagram.variant))){const d=t.diagram,h=drawing(d),isRays=d.variant==='rays',[origin,outer1,outer2,inner1,inner2]=isRays?['O','C','D','A','B']:['A','B','C','M','N'],A=point(h,origin),B=point(h,outer1),C=point(h,outer2),M=point(h,inner1),N=point(h,inner2);assert.ok(parallel(M,N,B,C),t.id);assert.ok(Math.abs(distance(A,M)/distance(A,B)-distance(A,N)/distance(A,C))<1e-8,t.id);const labels=d.labels;if(!isRays&&labels.AB&&labels.AC)assert.ok(Math.abs(distance(A,B)/distance(A,C)-Number(labels.AB)/Number(labels.AC))<1e-7,t.id);}
 const h=drawing({type:'tales',variant:'trapezoid',labels:{AO:'3',OC:'6',BO:'4'}}),A=point(h,'A'),B=point(h,'B'),C=point(h,'C'),D=point(h,'D');assert.ok(parallel(A,B,C,D));assert.ok(Math.abs(distance(A,C)/distance(B,D)-9/12)<1e-8);
});
test('rotacija i ogledanje sličnih trouglova čuvaju sve tri razmere i redosled temena',()=>{
 for(const variant of ['upright','rotated','mirrored']){const h=drawing({type:'similarity',variant,labels:{AB:'3',BC:'4',AC:'5',DE:'6',EF:'8',DF:'10'}});for(const [a,b,c,d] of [['A','B','D','E'],['B','C','E','F'],['A','C','D','F']])assert.ok(Math.abs(distance(point(h,c),point(h,d))/distance(point(h,a),point(h,b))-2)<1e-8,variant);assert.ok(Math.abs(distance(point(h,'A'),point(h,'B'))/distance(point(h,'B'),point(h,'C'))-.75)<1e-8);}
});
test('crtež zavisi od poznatih podataka, nikad od upisanog odgovora ili rešenja',()=>{
 for(const {lesson:l} of all)for(const t of tasksForLesson(l.id,l.tasks)){if(t.id==='o8-pro-3')continue;assert.deepEqual(taskWithVisual(l.id,{...t,answer:'TAJNI_ODGOVOR',solution:'TAJNO_REŠENJE'}).diagram,taskWithVisual(l.id,t).diagram,t.id);}
});
test('oznaka obima i razlika osnovica ne postaju lažne poznate dužine',()=>{
 const sample={id:'qa',prompt:'Odredi odnos.',math:'△ABC∼△DEF, O_ABC=12, O_DEF=24',answer:'2',solution:'',hint:'',level:'basic',skill:'Razmera',choices:['2']};
 const d=taskWithVisual('slicni-trouglovi',sample).diagram;assert.ok(d);assert.equal(d.labels.BC,undefined);assert.equal(d.labels.EF,undefined);const html=drawing(d);assert.ok(Math.abs(distance(point(html,'D'),point(html,'E'))/distance(point(html,'A'),point(html,'B'))-2)<1e-8);
 const trapez=taskWithVisual('pitagora-trapez',{...sample,prompt:'Odredi visinu jednakokrakog trapeza.',math:'a−b=12, c=10'}).diagram;assert.equal(trapez.labels.b,undefined);assert.equal(trapez.labels.diff,'12');
});
test('visina na hipotenuzu prati zadate h,p i a,c bez otkrivanja nepoznate oznake',()=>{
 for(const labels of [{h:'12',p:'9'},{h:'12',q:'16'},{a:'6',c:'10'}]){
  const html=drawing({type:'pythagoras',variant:'right-altitude',labels}),A=point(html,'A'),B=point(html,'B'),C=point(html,'C'),D=point(html,'D'),p=distance(D,B),q=distance(A,D),h=distance(C,D),a=distance(C,B),c=distance(A,B);
  assert.ok(Math.abs(h*h-p*q)<1e-7);if(labels.h&&labels.p){assert.ok(Math.abs(h/p-12/9)<1e-7);assert.doesNotMatch(html,/>16</);}if(labels.h&&labels.q){assert.ok(Math.abs(h/q-12/16)<1e-7);assert.doesNotMatch(html,/>9</);}if(labels.a){assert.ok(Math.abs(a/c-.6)<1e-7);assert.doesNotMatch(html,/>6[.,]4</);}
 }
});
test('obrnuti zadatak o senkama čuva odnos poznatih visina i paralelnost zraka',()=>{
 const html=drawing({type:'shadow',objectLabel:'Štap',objectHeight:'2 m',objectShadow:'3 m',targetShadow:'?',targetLabel:'6 m'}),heights=html.match(/class="shape" d="M75 240 V([\d.]+) M330 240 V([\d.]+)"/);assert.ok(heights);assert.ok(Math.abs((240-Number(heights[2]))/(240-Number(heights[1]))-3)<1e-7);assert.doesNotMatch(html,/>9 m</);
});
test('prostorni zadaci razlikuju koplanarne tačke, paralelne normale i zaklonjeno teme',()=>{
 const get=id=>{for(const {lesson:l} of all){const t=lessonWorkTasks(l.id,tasksForLesson(l.id,l.tasks)).find(t=>t.id===id);if(t)return t;}throw new Error(id);};
 assert.equal(get('sw-plane-four-0').diagram.labels.case,'four');assert.equal(get('o8-tpr-7').diagram.labels.case,'tetrahedron');assert.equal(get('sw-normal-parallel-0').diagram.labels.case,'parallel-normals');
 const normals=drawing(get('sw-normal-parallel-0').diagram);assert.match(normals,/M210 35 V205 M365 35 V205/);const hidden=drawing(get('sw-space-hidden-0').diagram);assert.deepEqual(point(hidden,'A'),[190,160]);assert.match(hidden,/class="dashed" d="M190 160 L95 230"/);
 const cube=drawing(get('o8-ms-1').diagram);assert.equal((cube.match(/<path class="(?:shape|dashed)"/g)??[]).length,12);
});
test('nove lekcije ostaju na 10 zadataka, a podaci učenika i algoritam znanja ostaju kompatibilni',async()=>{
 for(const {lesson:l} of all)assert.equal(lessonWorkTasks(l.id,tasksForLesson(l.id,l.tasks)).length,10,l.id);
 const p=await readFile(new URL('../app/page.tsx',import.meta.url),'utf8');assert.match(p,/matematikon68-progress-v1-\$\{gradeId\}/);assert.doesNotMatch(p,/localStorage\.clear|localStorage\.removeItem/);
});
test('baza čuva redosled i crteže uz nezavisno testirane ispravke audita faze 1',()=>{
 const protectedData=all.filter(({lesson:l})=>["september","october"].includes(l.month)).map(({grade:g,area:a,lesson:l})=>({grade:g.id,area:a.id,month:l.month??a.month??'september',id:l.id,pool:tasksForLesson(l.id,l.tasks).filter(t=>!t.id.startsWith('dop-')),work:lessonWorkTasks(l.id,tasksForLesson(l.id,l.tasks)),visuals:lessonVisuals(l.id)}));
 assert.equal(createHash('sha256').update(JSON.stringify(protectedData)).digest('hex'),'bc2ec6f328d416b80cb1eabfb1761643515739521062420c2691f0e3c6ea8da8');
});
test('glavno objašnjenje je kratko, ima jednu napomenu i čuva svaki izbor geometrijskog prikaza',()=>{
 const counts=[];let figures=0;
 for(const {lesson:l} of all){const html=render(LessonLearningContent,{lesson:l}),visuals=lessonVisuals(l.id);const words=html.replace(/<svg[^]*?<\/svg>/g,'').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ').split(/\s+/).filter(Boolean).length;counts.push(words);assert.ok(words<=250,l.id+': '+words);assert.equal((html.match(/class="learning-note"/g)??[]).length,1,l.id);assert.equal((html.match(/<svg/g)??[]).length,visuals.length,l.id);figures+=visuals.length;
  assert.doesNotMatch(html,/ hidden=""|aria-controls="learning-/);assert.equal((html.match(/class="learning-point"/g)??[]).length>=2,true,l.id);
  assert.ok((html.match(/learning-micro-example/g)??[]).length<=1,l.id);assert.doesNotMatch(html,/Šta učimo|Glavna ideja|Zašto to važi|Urađeni primer/);
 }
 assert.equal(figures,93);assert.ok(counts.reduce((a,b)=>a+b,0)/counts.length<=180);
});
test('sažeti tekst zadržava ključne uslove i oba pisma bez prevođenja matematičkih oznaka',()=>{
 const source=id=>JSON.stringify(learningByLesson[id]);assert.match(source('talesova-teorema'),/MN∥BC/);assert.match(source('stavovi-slicnosti'),/zahvaćen/);assert.match(source('jednacine-kvadrat'),/dva suprotna/);assert.match(source('poliedar'),/konveks/);assert.match(source('deljenje'),/b≠0/);assert.match(source('svojstva-korena'),/nenegativ/);
 const lesson=all.find(x=>x.lesson.id==='tacka-prava-ravan-osnove').lesson;const html=render(LessonLearningContent,{lesson},'cyrl');assert.match(html,/Шта треба да знаш/);assert.match(html,/A∈p/);assert.doesNotMatch(html,/А∈п/);
});

test('svih šest zadataka o merdevinama označava poznatu visinu, hipotenuzu i nepoznato x',()=>{
 const {lesson:l}=all.find(x=>x.lesson.id==='nepoznata-stranica-pravougli');
 const tasks=tasksForLesson(l.id,l.tasks).filter(t=>t.id.startsWith('ow-leg-ladder-'));
 assert.equal(tasks.length,6);
 for(const t of tasks){
  const [,c,h]=t.math.match(/Merdevine su (\d+) m\. Vrh je na visini (\d+) m/);
  assert.deepEqual(t.diagram.labels,{a:'x',b:h,c});
  assert.match(t.solution,/x²\+h²=c²/);
  const html=drawing(t.diagram);
  assert.ok(Math.abs(distance(point(html,'A'),point(html,'C'))/distance(point(html,'A'),point(html,'B'))-Number(h)/Number(c))<1e-7);
 }
});

test('recenzija 6. razreda: obnavljanje ima 45 stabilnih ID-jeva, tri raznovrsna primera i opravdane nivoe',()=>{
 const {lesson:l}=all.find(x=>x.lesson.id==='kratko-obnavljanje-5');
 const tasks=tasksForLesson(l.id,l.tasks);
 assert.equal(tasks.length,45);assert.equal(new Set(tasks.map(t=>t.id)).size,45);
 assert.equal(tasks.filter(t=>t.level==='basic').length,27);assert.equal(tasks.filter(t=>t.level==='medium').length,18);
 assert.equal(l.worked.length,3);
 assert.match(l.worked[2].steps.join(' '),/30=2\(6\+b\).*b=15−6=9 cm/);
 for(const t of tasks.filter(t=>t.id.startsWith('sw-r5-rectangle-')))assert.match(t.solution,/O=2\(a\+b\).*Delimo obe strane/);
 for(const t of tasks.filter(t=>t.id.startsWith('sw-r5-angle-')))assert.match(t.solution,/α\+β=180°/);
});

test('recenzija skup celih brojeva: stabilnih 17 zadataka, tri primera, opravdani nivoi',()=>{
 const l=all.find(x=>x.lesson.id==='skup-celih-brojeva').lesson;
 const tasks=tasksForLesson(l.id,l.tasks);
 assert.equal(tasks.length,17);assert.equal(tasks.filter(t=>t.level==='basic').length,11);assert.equal(tasks.filter(t=>t.level==='medium').length,6);
 assert.equal(l.worked.length,3);
 for(const t of tasks.filter(t=>t.id.startsWith('sw-integer-reverse-')))assert.match(t.solution,/x−1=.*dodajemo 1.*−x=/);
});

test('recenzija apsolutne vrednosti: 22 ID-ja, tri primera i odgovarajući nivoi',()=>{
 const l=all.find(x=>x.lesson.id==='apsolutna-vrednost').lesson;
 const tasks=tasksForLesson(l.id,l.tasks);assert.equal(tasks.length,22);
 assert.equal(tasks.filter(t=>t.level==='basic').length,17);
 assert.equal(tasks.filter(t=>t.level==='medium').length,5);
 assert.equal(l.worked.length,3);
 for(const t of tasks.filter(t=>t.id.startsWith('sw-absolute-diagram-')))assert.equal(Number(t.answer),Math.abs(t.diagram.points[0].value));
});

test('recenzija poređenja: 22 ID-ja, tri primera i pravilni nivoi',()=>{
 const l=all.find(x=>x.lesson.id==='uporedjivanje').lesson;
 const tasks=tasksForLesson(l.id,l.tasks);assert.equal(tasks.length,22);
 assert.equal(tasks.filter(t=>t.level==='basic').length,7);
 assert.equal(tasks.filter(t=>t.level==='medium').length,15);
 assert.equal(l.worked.length,3);
 for(const t of tasks.filter(t=>t.id.startsWith('sw-order-digit-')))assert.match(t.solution,/Dozvoljene cifre su 0, 1, 2, 3, 4/);
});

test('recenzija sabiranja: 28 ID-ja, tri primera, predznak i ekvivalentne transformacije',()=>{
 const l=all.find(x=>x.lesson.id==='sabiranje').lesson, tasks=tasksForLesson(l.id,l.tasks);
 assert.equal(tasks.length,28);assert.equal(tasks.filter(t=>t.level==='basic').length,12);assert.equal(tasks.filter(t=>t.level==='medium').length,16);
 assert.equal(l.worked.length,3);assert.match(tasks.find(t=>t.id==='6-4h').hint,/veće apsolutne vrednosti/);
 for(const t of tasks.filter(t=>t.id.startsWith('sw-add-signcondition-')))assert.match(t.solution,/na obe strane/);
});

test('recenzija oduzimanja: 22 ID-ja, tri primera i ekvivalentne transformacije',()=>{
 const l=all.find(x=>x.lesson.id==='oduzimanje').lesson, tasks=tasksForLesson(l.id,l.tasks);
 assert.equal(tasks.length,22);assert.equal(tasks.filter(t=>t.level==='basic').length,12);assert.equal(tasks.filter(t=>t.level==='medium').length,10);
 assert.equal(l.worked.length,3);
 for(const id of ['6-5e','6-5i'])assert.match(tasks.find(t=>t.id===id).solution,/Provera:/);
});

test('recenzija rastojanja: 22 ID-ja, tri primera, dva smera i sredina',()=>{
 const l=all.find(x=>x.lesson.id==='rastojanje').lesson, tasks=tasksForLesson(l.id,l.tasks);
 assert.equal(tasks.length,22);assert.equal(tasks.filter(t=>t.level==='basic').length,5);assert.equal(tasks.filter(t=>t.level==='medium').length,17);
 assert.equal(l.worked.length,3);assert.match(tasks.find(t=>t.id==='6-6j').solution,/Provera:/);
 for(const t of tasks.filter(t=>t.id.startsWith('sw-distance-midpoint-')))assert.match(t.solution,/Polovina/);
});

test('recenzija sabiranja i oduzimanja: zagrade, povratno stanje i nivoi',()=>{
 const l=all.find(x=>x.lesson.id==='sabiranje-oduzimanje').lesson,tasks=tasksForLesson(l.id,l.tasks);
 assert.equal(tasks.length,22);assert.equal(tasks.filter(t=>t.level==='basic').length,12);assert.equal(tasks.filter(t=>t.level==='medium').length,10);
 assert.equal(l.worked.length,3);
 for(const t of tasks.filter(t=>['6-7c','6-7e'].includes(t.id)||t.id.startsWith('sw-signed-reverse-')))assert.match(t.solution,/Provera:/);
});

test('recenzija množenja: znak, nula, svojstva i nivoi',()=>{
 const l=all.find(x=>x.lesson.id==='mnozenje').lesson,tasks=tasksForLesson(l.id,l.tasks);
 assert.equal(tasks.length,34);assert.equal(tasks.filter(t=>t.level==='basic').length,11);assert.equal(tasks.filter(t=>t.level==='medium').length,23);
 assert.equal(l.worked.length,3);
 assert.ok(l.formulas.includes('a·0=0'));assert.ok(l.formulas.includes('a·b=b·a'));assert.ok(l.formulas.includes('(a·b)·c=a·(b·c)'));assert.ok(l.formulas.includes('a·(b−c)=a·b−a·c'));
 for(const t of tasks.filter(t=>['6-8e','6-8g'].includes(t.id)))assert.match(t.solution,/Provera:/);
 for(const t of tasks.filter(t=>t.id.startsWith('ow-mul-distribute-')))assert.match(t.solution,/·20=/);
});

test('recenzija deljenja: nula, nepoznati delilac i nivoi',()=>{
 const l=all.find(x=>x.lesson.id==='deljenje').lesson,tasks=tasksForLesson(l.id,l.tasks);
 assert.equal(tasks.length,28);assert.equal(tasks.filter(t=>t.level==='basic').length,5);assert.equal(tasks.filter(t=>t.level==='medium').length,23);
 assert.equal(l.worked.length,3);
 assert.match(l.worked[1].steps.join(' '),/nema jedinstvenog količnika/);
 for(const t of tasks.filter(t=>['6-9e','6-9g'].includes(t.id)||t.id.startsWith('ow-div-both-')))assert.match(t.solution,/Provera:/);
 assert.match(tasks.find(t=>t.id==='6-9g').solution,/x≠0/);
});

test('recenzija množenja i deljenja: redosled i provera',()=>{
 const l=all.find(x=>x.lesson.id==='mnozenje-deljenje').lesson,tasks=tasksForLesson(l.id,l.tasks);
 assert.equal(tasks.length,28);assert.equal(tasks.filter(t=>t.level==='basic').length,8);assert.equal(tasks.filter(t=>t.level==='medium').length,20);
 assert.equal(l.worked.length,3);assert.match(l.worked[1].steps.join(' '),/−16≠−4/);
 for(const t of tasks.filter(t=>['6-10c','6-10g'].includes(t.id)))assert.match(t.solution,/Provera:/);
});

test('recenzija brojevnih izraza: prioritet, nulti proizvod i nivoi',()=>{
 const l=all.find(x=>x.lesson.id==='brojevni-izrazi').lesson,tasks=tasksForLesson(l.id,l.tasks);
 assert.equal(tasks.length,28);assert.equal(tasks.filter(t=>t.level==='basic').length,8);assert.equal(tasks.filter(t=>t.level==='medium').length,20);
 assert.equal(l.worked.length,3);
 for(const t of tasks.filter(t=>t.id.startsWith('ow-expr-missing-')))assert.match(t.solution,/Provera:/);
 for(const t of tasks.filter(t=>t.id.startsWith('ow-expr-brackets-')))assert.match(t.solution,/Drugi izraz daje −\d+, a treći \d+/);
});

test('recenzija vrsta trougla: zbir parova nije dužina stranice',()=>{
 const l=all.find(x=>x.lesson.id==='trougao-vrste').lesson,tasks=tasksForLesson(l.id,l.tasks);
 assert.equal(tasks.length,20);assert.equal(tasks.filter(t=>t.level==='basic').length,5);assert.equal(tasks.filter(t=>t.level==='medium').length,9);assert.equal(tasks.filter(t=>t.level==='advanced').length,6);
 assert.equal(l.worked.length,3);
 for(const t of tasks.filter(t=>t.id.startsWith('ow-tv-pairs-')))assert.deepEqual(t.diagram.labels,{a:'a',b:'b',c:'c'});
 assert.deepEqual(tasks.find(t=>t.id==='o6-tv-6').diagram.labels,{a:'8',b:'11',c:'?'});
});

test('recenzija Trougla: geometrijska podudarnost oznaka i oblika, stroge granice',()=>{
 const lesson=id=>all.find(x=>x.grade.id===6&&x.lesson.id===id).lesson;
 const angle=(a,b,c)=>{const u=[a[0]-b[0],a[1]-b[1]],v=[c[0]-b[0],c[1]-b[1]];return Math.acos((u[0]*v[0]+u[1]*v[1])/(Math.hypot(...u)*Math.hypot(...v)))*180/Math.PI};
 const measured=t=>{const h=drawing(t.diagram),A=point(h,'A'),B=point(h,'B'),C=point(h,'C');return [angle(B,A,C),angle(A,B,C),angle(A,C,B)]};
 const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-7,`${a} != ${b}`);
 for(const id of ['zbir-uglova-trougla','uglovi-transverzala','uglovi-na-transverzali','odnos-stranica-uglova','nejednakost-trougla'])assert.equal(lesson(id).worked.length,3);
 const interior=lesson('zbir-uglova-trougla');assert.match(interior.rules.join(' '),/ako i samo ako/);
 const ext=lesson('uglovi-transverzala');for(const t of tasksForLesson(ext.id,ext.tasks).filter(t=>t.id.startsWith('ow-external-equal-'))){
  const [a,b,c]=measured(t);close(b,c);close(180-a,2*Number(t.answer));
 }
 const side=lesson('odnos-stranica-uglova'),pool=tasksForLesson(side.id,side.tasks);
 const iso=pool.find(t=>t.id==='o6-osu-3');assert.equal(iso.diagram.labels.c,'c');const [,b,c]=measured(iso);close(b,c);
 for(const t of pool.filter(t=>t.id.startsWith('ow-sideangle-combine-'))){const [a,b,c]=measured(t);close(b-a,15);assert.ok(c>b&&b>a);}
 const ineq=lesson('nejednakost-trougla');assert.match(ineq.intro,/ako i samo ako/);assert.equal(tasksForLesson(ineq.id,ineq.tasks).find(t=>t.id==='o6-nt-2').diagram,undefined);
});

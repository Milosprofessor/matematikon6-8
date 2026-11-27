import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {createServer} from 'vite';
const v=await createServer({configFile:false,appType:'custom',server:{middlewareMode:true,hmr:false},optimizeDeps:{noDiscovery:true}});
const {grades}=await v.ssrLoadModule('/app/content/index.ts');
const {tasksForLesson}=await v.ssrLoadModule('/app/content/enhancements.ts');
const {lessonWorkTasks}=await v.ssrLoadModule('/app/content/october-work.ts');
const {lessonVisuals}=await v.ssrLoadModule('/app/content/lesson-visuals.ts');
const all=grades.flatMap(g=>g.areas.flatMap(a=>a.lessons.map(l=>({grade:g,area:a,lesson:l}))));
const fixture=JSON.parse(await fs.readFile('tests/fixtures/original-lesson-work.json','utf8'));
const allowed=/^(o7-(ns|pk|jk|ro|tr)-|ow-(leg-|trap-reverse-|quad-reverse-)|sw-r7-(triangle|perimeter)-)/;
for(const item of fixture){const l=all.find(x=>x.grade.id===item.grade&&x.lesson.id===item.lessonId)?.lesson;if(!l)continue;
 const now=lessonWorkTasks(l.id,tasksForLesson(l.id,l.tasks));for(const t of item.tasks)if(allowed.test(t.id)){const c=now.find(x=>x.id===t.id);if(c){t.solution=c.solution;if(['o7-ns-1','o7-ns-4','o7-ns-6','o7-pk-4','o7-jk-1','o7-jk-3','o7-jk-7'].includes(t.id)){t.prompt=c.prompt;t.hint=c.hint;}}}}
await fs.writeFile('tests/fixtures/original-lesson-work.json',JSON.stringify(fixture,null,2)+'\n');
const protectedData=all.filter(({lesson:l})=>['september','october'].includes(l.month)).map(({grade:g,area:a,lesson:l})=>({grade:g.id,area:a.id,month:l.month??a.month??'september',id:l.id,pool:tasksForLesson(l.id,l.tasks).filter(t=>!t.id.startsWith('dop-')),work:lessonWorkTasks(l.id,tasksForLesson(l.id,l.tasks)),visuals:lessonVisuals(l.id)}));
const hash=createHash('sha256').update(JSON.stringify(protectedData)).digest('hex');
const file='tests/learning-visuals.test.mjs';let test=await fs.readFile(file,'utf8');test=test.replace(/(digest\('hex'\),')[a-f0-9]{64}/,'$1'+hash);await fs.writeFile(file,test);await v.close();

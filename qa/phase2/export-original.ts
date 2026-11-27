import fs from 'node:fs';
import type {Task} from '../../app/content/types';
import {grades} from '../../app/content/index';
import {tasksForLesson} from '../../app/content/enhancements';
import {lessonWorkTasks} from '../../app/content/october-work';
import {lessonNotes} from '../../app/content/learning-notes';
import {lessonVisuals} from '../../app/content/lesson-visuals';
import {getAreaTest,areaTests} from '../../app/content/area-tests';
import {springChecks} from '../../app/content/spring6/checks';
import {checks7} from '../../app/content/spring7/checks';
import {checks8} from '../../app/content/spring8/checks';
import {examSets} from '../../app/content/spring8/exams';
for (const grade of grades) {
const sets=[springChecks,checks7,checks8][grade.id-6];
const bank=new Map<string,Task & {lesson:string|undefined;area:string; sources:string[]}>(),lessons=[];
function add(task:Task,lesson:string|undefined,area:string,source:string) {const key=task.id; if(!bank.has(key)) bank.set(key,{...task,lesson,area,sources:[]});const arr=bank.get(key)!.sources;if(!arr.includes(source))arr.push(source)}
for(const a of grade.areas) {
 for(const l of a.lessons) {
 const pool=tasksForLesson(l.id,l.tasks),work=lessonWorkTasks(l.id,pool); for(const t of pool)add(t,l.id,a.id,'practice'); for(const t of work)add(t,l.id,a.id,'work');
 lessons.push({...l,tasks:undefined,mini:l.mini?.map(t=>t.id),areaQuestions:l.areaQuestions?.map(t=>t.id),area:a.id,areaTitle:a.title,review:!!a.review,month:l.month??a.month??'september',notes:lessonNotes(l.id),visuals:lessonVisuals(l.id),work:work.map(t=>t.id),pool:pool.map(t=>t.id)});
 }
 if(!a.review)for(const t of getAreaTest(grade.id,a.id))add(t,t.lessonId,a.id,'test:'+a.id);
 // Enumerate prefix unlocks, including selected tests that disappear at full unlock.
 if(!a.review&&!sets.has(a.id))for(let n=1;n<a.lessons.length;n++) for(const t of getAreaTest(grade.id,a.id,new Set(a.lessons.slice(0,n).map(l=>l.id))))add(t,t.lessonId,a.id,'test-progress:'+a.id);
}
for(const s of [...sets.values(),...(grade.id===8?examSets:[])])for(const t of s.items)add(t,t.lessonId,s.areaId,'test:'+s.id);
fs.writeFileSync('qa/phase2/g'+grade.id+'-extracted.json',JSON.stringify({lessons,bank:[...bank.values()]},null,1));
}

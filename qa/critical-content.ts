import fs from 'node:fs';
import {grades} from '../app/content';
import {tasksForLesson} from '../app/content/enhancements';
import {emptyTask,submitTask} from '../app/lesson-work';
import {getAreaTest} from '../app/content/area-tests';

const reference:Record<string,string>={
 '6-4i':String(-6+10),'6-11j':String(-12+3*5-4),'6-9j':String(-36/6),
 's6-merenje-16':String(9*(7-5)),'8r-3':String(8*5/2),
 'o7-pp-3':String(180*5/(3+4+5)),'o7-pp-6':String(180*2/(2+3+7)),
 '8-7a':String(4*200/100),'8-7d':String(6*250/100),
 '8-7h':String(24*100/600),'8-7i':String(18*50/100),'t8-10':String(7*400/100),
 't8-9':String(1.5*10/2)
};
const tasks=grades.flatMap(g=>g.areas.flatMap(a=>[...a.lessons.flatMap(l=>tasksForLesson(l.id,l.tasks)),...getAreaTest(g.id,a.id)]));
const results=Object.entries(reference).map(([id,key])=>{
 const task=tasks.find(t=>t.id===id);if(!task)throw Error('Missing '+id);
 const number=Number(key);
 const inputs=[[key,true],[String(number*100)+'/100',true],[String(number+1),false]] as const;
 const checks=inputs.map(([value,expected])=>{
  const actual=submitTask({...emptyTask(),value},task).feedback==='correct';
  if(actual!==expected)throw Error(id+' / '+value);
  return {value,expected,actual};
 });
 return {id,question:task.prompt+' '+task.math,independent:key,checks};
});
for(let i=0;i<6;i++){
 const id='ow-ineqtri-strict-'+i,task=tasks.find(t=>t.id===id);if(!task)throw Error(id);
 const upper=2*(i+4)+1;
 if(task.answer!=='c<'+upper||task.choices?.includes('c≤'+upper))throw Error(id);
}
const intersection=tasks.find(t=>t.id==='o8-dr-5');
if(intersection?.answer!=='Prava koja sadrži zajedničku ivicu')throw Error('Presek ravni');
fs.writeFileSync('qa/phase1-results/final/mathematical-checks.json',JSON.stringify(results,null,2));
console.log(results.length+' corrected numeric tasks, three inputs each; six triangle variants and plane intersection.');

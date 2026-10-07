import type { Task } from "./content/types";

export type TaskResult={firstCorrect:boolean;usedSolution:boolean;attemptCount:number;finalCorrect:boolean};
export type TaskSnapshot={value:string;attempts:number;hint:boolean;solution:boolean;feedback:""|"wrong"|"correct";result?:TaskResult};
export type LessonWork={taskIds:string[];current:number;run:number;tasks:Record<string,TaskSnapshot>};
export const emptyTask=():TaskSnapshot=>({value:"",attempts:0,hint:false,solution:false,feedback:""});
export const emptyLessonWork=(taskIds:string[],run=0):LessonWork=>({taskIds:[...taskIds],current:0,run,tasks:{}});
export const normalizeAnswer=(v:string)=>v.trim().replace(/[−–—]/g,"-").replace(/\s+/g,"").replace(/,/g,".").toLowerCase();
export function sameAnswer(entered:string,answer:string){
 const a=normalizeAnswer(entered),b=normalizeAnswer(answer),an=Number(a),bn=Number(b);
 return a!==""&&b!==""&&Number.isFinite(an)&&Number.isFinite(bn)?an===bn:a===b;
}
export function submitTask(state:TaskSnapshot,task:Pick<Task,"answer">):TaskSnapshot{
 if(state.result||!state.value.trim())return state;
 const attempts=state.attempts+1;
 if(!sameAnswer(state.value,task.answer))return {...state,attempts,feedback:"wrong"};
 return {...state,attempts,feedback:"correct",result:{firstCorrect:state.attempts===0&&!state.solution,usedSolution:state.solution,attemptCount:attempts,finalCorrect:true}};
}
export function acceptProcedure(state:TaskSnapshot):TaskSnapshot{
 if(state.result)return state;
 return {...state,solution:true,feedback:"correct",result:{firstCorrect:false,usedSolution:true,attemptCount:Math.max(1,state.attempts),finalCorrect:true}};
}
export function normalizeLessonWork(value:unknown):Record<string,LessonWork>{
 if(!value||typeof value!=="object"||Array.isArray(value))return {};
 const output:Record<string,LessonWork>={};
 for(const [lessonId,item] of Object.entries(value as Record<string,Partial<LessonWork>>)){
  if(!item||typeof item!=="object"||!Array.isArray(item.taskIds))continue;
  const taskIds=item.taskIds.filter(id=>typeof id==="string");const tasks:Record<string,TaskSnapshot>={};
  for(const [taskId,raw] of Object.entries(item.tasks??{})){
   if(!raw||typeof raw!=="object")continue;
   const attempts=Number.isInteger(raw.attempts)&&raw.attempts>=0?raw.attempts:0;
   const solution=raw.solution===true;
   const result=raw.result?.finalCorrect===true?{firstCorrect:raw.result.firstCorrect===true&&!solution&&raw.result.attemptCount===1,usedSolution:solution||raw.result.usedSolution===true,attemptCount:Math.max(attempts,Number(raw.result.attemptCount)||1),finalCorrect:true}:undefined;
   tasks[taskId]={value:typeof raw.value==="string"?raw.value:"",attempts,hint:raw.hint===true,solution,feedback:result?"correct":raw.feedback==="wrong"?"wrong":"",result};
  }
  output[lessonId]={taskIds,current:Math.min(taskIds.length,Math.max(0,Number.isInteger(item.current)?item.current!:0)),run:Number.isInteger(item.run)&&item.run!>=0?item.run!:0,tasks};
 }
 return output;
}
export function workTotals(work:LessonWork,ids=work.taskIds){
 return {first:ids.filter(id=>work.tasks[id]?.result?.firstCorrect&&!work.tasks[id]?.result?.usedSolution).length,final:ids.filter(id=>work.tasks[id]?.result?.finalCorrect).length,total:ids.length};
}

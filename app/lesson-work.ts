import { eighthAnswer } from "./eighth-answer";
import { algebraAnswer } from "./polynomial-answer";
import type { Task } from "./content/types";
import type { KnowledgeAttempt } from "./knowledge";

export type TaskResult={firstCorrect:boolean;usedSolution:boolean;attemptCount:number;finalCorrect:boolean};
export type TaskSnapshot={value:string;attempts:number;hint:boolean;solution:boolean;feedback:""|"wrong"|"correct";result?:TaskResult};
export type LessonWork={taskIds:string[];current:number;run:number;tasks:Record<string,TaskSnapshot>};
export const emptyTask=():TaskSnapshot=>({value:"",attempts:0,hint:false,solution:false,feedback:""});
export const emptyLessonWork=(taskIds:string[],run=0):LessonWork=>({taskIds:[...taskIds],current:0,run,tasks:{}});
/** Recover only individually recorded lesson results, never invent a 10/10
 * from an old completed-lesson flag. Existing analytics are not appended again. */
export function resumeLessonWork(lessonId:string,tasks:Task[],attempts:KnowledgeAttempt[],saved?:LessonWork):LessonWork{
 if(saved)return saved;
 const work=emptyLessonWork(tasks.map(task=>task.id));
 const latest=new Map<string,KnowledgeAttempt>();
 for(const attempt of [...attempts].sort((a,b)=>a.at-b.at))if(attempt.lessonId===lessonId&&attempt.source==="lesson"&&attempt.finalCorrect!==false)latest.set(attempt.taskId,attempt);
 for(const task of tasks){
  const attempt=latest.get(task.id);if(!attempt)continue;
  const count=Math.max(1,attempt.attemptsCount??attempt.attemptCount??1);
  work.tasks[task.id]={value:task.answer,attempts:count,hint:false,solution:attempt.usedSolution,feedback:"correct",result:{firstCorrect:(attempt.firstAttemptCorrect??attempt.firstCorrect)&&!attempt.usedSolution&&count===1,usedSolution:attempt.usedSolution,attemptCount:count,finalCorrect:true}};
 }
 const firstUnfinished=tasks.findIndex(task=>!work.tasks[task.id]?.result);
 work.current=firstUnfinished<0?tasks.length:firstUnfinished;
 return work;
}
export const normalizeAnswer=(v:string)=>v.trim().replace(/[−–—]/g,"-").replace(/\s+/g,"").replace(/,/g,".").toLowerCase();
// Exact rational comparison accepts decimal commas and unreduced fractions.
function rational(value:string): [bigint,bigint] | undefined {
 const scientific=/^([+-]?(?:\d+(?:\.\d+)?|\.\d+))[eE]([+-]?\d{1,3})$/.exec(value);
 if(scientific){
  const exponent=Number(scientific[2]);
  if(Math.abs(exponent)>100)return;
  const base=rational(scientific[1]);if(!base)return;
  const scale=BigInt(10)**BigInt(Math.abs(exponent));
  return exponent>=0?[base[0]*scale,base[1]]:[base[0],base[1]*scale];
 }
 const match = /^([+-]?)(\d*)(?:\.(\d+))?(?:\/([+-]?\d+))?$/.exec(value);
 if (!match || value.length > 80 || (!match[2] && !match[3])) return;
 const digits = match[2] + (match[3] ?? "");
 const numerator = BigInt((match[1] === "-" ? "-" : "") + digits);
 const scale = BigInt("1" + "0".repeat(match[3]?.length ?? 0));
 const denominator = scale * BigInt(match[4] ?? "1");
 if (denominator !== BigInt(0)) return [numerator, denominator];
}
export function sameAnswer(entered:string,answer:string){
 if(entered.length>100||answer.length>100)return false;
 // A space between digits is significant in mixed numbers and invalid otherwise.
 const mixed=/^([+-]?)(\d+)\s+(\d+)\/(\d+)$/.exec(entered.trim().replace(/−/g,"-"));
 if(mixed){
  const [,sign,whole,part,bottom]=mixed;
  if(BigInt(bottom)===BigInt(0)||BigInt(part)>=BigInt(bottom))return false;
  entered=(sign==="-"?"-":"")+(BigInt(whole)*BigInt(bottom)+BigInt(part))+"/"+bottom;
 }else if(/\d\s+\d/.test(entered))return false;
 const a=normalizeAnswer(entered), b=normalizeAnswer(answer);
 if (!a || !b) return false;
 if (a===b) return true;
 const left=rational(a), right=rational(b);
 if(left && right) return left[0]*right[1]===right[0]*left[1];
 return false;
}
export function submitTask(state:TaskSnapshot,task:Pick<Task,"answer"> & Partial<Pick<Task,"kind"|"id"|"prompt"|"answerUnit">>):TaskSnapshot{
 if(state.result||!state.value.trim())return state;
 const attempts=state.attempts+1;
 let value=state.value;
 if(task.answerUnit&&task.kind==="input"){
  const unit=/\s+([a-zA-Z]+(?:[²³]|\^[23])?)\s*$/.exec(value);
  if(unit){
   value=value.slice(0,unit.index);
   if(unit[1]!==task.answerUnit){
    const scales:Record<string,bigint>={mm:BigInt(1),cm:BigInt(10),dm:BigInt(100),m:BigInt(1000),km:BigInt(1000000)};
    const from=scales[unit[1]],to=scales[task.answerUnit];
    const number=rational(normalizeAnswer(value));
    if(!from||!to||!number)return {...state,attempts,feedback:"wrong"};
    value=(number[0]*from)+"/"+(number[1]*to);
   }
  }
 }
 const symbolic=task.id?.startsWith("s7-")&&task.kind==="input"&&/[xπ]/.test(task.answer);
 const form=task.answer.includes("(")?(task.answer.endsWith("^2")?"square":"product"):/razvij|sredi|sređen/i.test(task.prompt??"")?"expanded":"value";
 const eighth = task.id?.startsWith("s8-") && task.kind==="input";
 if(!(eighth?eighthAnswer(value,task.answer):symbolic?algebraAnswer(value,task.answer,form):sameAnswer(value,task.answer)))return {...state,attempts,feedback:"wrong"};
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
   const result=raw.result?.finalCorrect===true?{firstCorrect:raw.result.firstCorrect===true&&!solution&&!raw.result.usedSolution&&raw.result.attemptCount===1&&attempts<=1,usedSolution:solution||raw.result.usedSolution===true,attemptCount:Math.max(attempts,Number(raw.result.attemptCount)||1),finalCorrect:true}:undefined;
   tasks[taskId]={value:typeof raw.value==="string"?raw.value:"",attempts,hint:raw.hint===true,solution,feedback:result?"correct":raw.feedback==="wrong"?"wrong":"",result};
  }
  output[lessonId]={taskIds,current:Math.min(taskIds.length,Math.max(0,Number.isInteger(item.current)?item.current!:0)),run:Number.isInteger(item.run)&&item.run!>=0?item.run!:0,tasks};
 }
 return output;
}
export function workTotals(work:LessonWork,ids=work.taskIds){
 return {first:ids.filter(id=>work.tasks[id]?.result?.firstCorrect&&!work.tasks[id]?.result?.usedSolution).length,final:ids.filter(id=>work.tasks[id]?.result?.finalCorrect).length,total:ids.length};
}

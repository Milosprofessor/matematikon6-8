import type { ErrorCategory, Grade, Level, Task } from "./content";
import { tasksForLesson } from "./content/enhancements";
import { adaptiveLevel, KnowledgeAttempt, skillMasteries } from "./knowledge";

export type SessionTask=Task&{lessonId:string;areaId:string};
export type SessionResult={task:SessionTask;firstCorrect:boolean;usedSolution:boolean;attemptCount?:number;finalCorrect?:boolean};

function shuffle<T>(arr:T[],random=Math.random){const copy=[...arr];for(let i=copy.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}return copy}

function inferredTaskType(task:Task){
  const text=`${task.prompt} ${task.skill}`.toLowerCase();
  if(task.diagram)return "čitanje-crteža";
  if(text.includes("pronađi grešku"))return "pronalaženje-greške";
  if(/poređ|upored|najveć|manji|veći/.test(text))return "poređenje-i-poredak";
  if(/odredi x|dopuni|nepoznat/.test(text))return "nepoznata-vrednost";
  if(/tvrdnj|da li/.test(text))return "provera-tvrdnje";
  if(task.kind==="choice")return "izbor-odgovora";
  if(/izračunaj|odredi/.test(text))return "direktno-računanje";
  return "kratka-primena";
}

function inferredErrorCategory(task:Task):ErrorCategory{
  const text=`${task.prompt} ${task.skill}`.toLowerCase();
  if(task.diagram)return "diagram";
  if(/znak|suprotn/.test(text))return "sign";
  if(/pravilo|redosled|svojstv|stav/.test(text))return "rule";
  if(/skup|vrst|definic|tvrdnj|samerljiv/.test(text))return "concept";
  if(/proporc|nepoznat|rastoj|interval|približ|pored/.test(text))return "method";
  return task.kind==="input"?"calculation":"concept";
}

export function withTaskMetadata<T extends Task>(task:T):T{return {...task,taskType:task.taskType??inferredTaskType(task),errorCategory:task.errorCategory??inferredErrorCategory(task)}}
export function sessionPool(grade:Grade):SessionTask[]{return grade.areas.flatMap(area=>area.lessons.flatMap(lesson=>tasksForLesson(lesson.id,lesson.tasks).map(task=>({...withTaskMetadata(task),lessonId:lesson.id,areaId:area.id}))))}

function repeatedErrorTarget(results:SessionResult[]){
  const misses=results.slice(-5).filter(result=>!result.firstCorrect||result.usedSolution);const counts=new Map<string,number>();
  misses.forEach(result=>counts.set(result.task.skill,(counts.get(result.task.skill)??0)+1));
  const skill=[...counts.entries()].sort((a,b)=>b[1]-a[1]).find(([,count])=>count>=2)?.[0];
  const last=[...misses].reverse().find(result=>!skill||result.task.skill===skill)?.task;
  return skill?{skill,errorCategory:last?.errorCategory,taskType:last?.taskType}:undefined;
}

export function pickAdaptiveTask(grade:Grade,selected:Level,results:SessionResult[],usedIds:string[],recentIds:string[],attempts:KnowledgeAttempt[],focus?:{lessonId:string;skill?:string},random=Math.random){
  const pool=sessionPool(grade);const used=new Set(usedIds);const effective=adaptiveLevel(selected,results);const errorTarget=repeatedErrorTarget(results);
  const storedWeak=skillMasteries(attempts).find(item=>item.samples>=2&&item.band==="weak")?.skill;
  const prioritySkill=focus?.skill??errorTarget?.skill??(usedIds.length%3===0?storedWeak:undefined);
  const priorityLesson=focus?.lessonId??[...results].reverse().find(result=>result.task.skill===prioritySkill)?.task.lessonId??[...attempts].reverse().find(attempt=>attempt.skill===prioritySkill)?.lessonId;
  const scoped=focus?pool.filter(task=>task.lessonId===focus.lessonId):pool;
  const available=scoped.filter(task=>!used.has(task.id));
  const byLevel=available.filter(task=>task.level===effective);
  const differentErrorType=(tasks:SessionTask[])=>errorTarget?.taskType?tasks.filter(task=>task.taskType!==errorTarget.taskType):tasks;
  const sameErrorDifferentType=errorTarget?.errorCategory?differentErrorType(byLevel.filter(task=>task.skill===prioritySkill&&task.errorCategory===errorTarget.errorCategory)):[];
  const skillAtLevel=prioritySkill?byLevel.filter(task=>task.skill===prioritySkill):[];
  const lessonAtLevel=priorityLesson?byLevel.filter(task=>task.lessonId===priorityLesson):[];
  const bySkill=prioritySkill?available.filter(task=>task.skill===prioritySkill):[];
  const variedSkillAtLevel=differentErrorType(skillAtLevel);
  const candidates=sameErrorDifferentType.length?sameErrorDifferentType:variedSkillAtLevel.length?variedSkillAtLevel:skillAtLevel.length?skillAtLevel:bySkill.length?bySkill:lessonAtLevel.length?lessonAtLevel:byLevel.length?byLevel:available.length?available:pool.filter(task=>!used.has(task.id));
  const fresh=candidates.filter(task=>!recentIds.includes(task.id));
  const base=fresh.length?fresh:candidates;
  const lastTypes=new Set(results.slice(-2).map(result=>result.task.taskType).filter(Boolean));
  const varied=base.filter(task=>!task.taskType||!lastTypes.has(task.taskType));
  return shuffle(varied.length?varied:base,random)[0];
}

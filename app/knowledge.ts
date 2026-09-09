import type { Grade, Level } from "./content";

export type AttemptSource = "lesson" | "smart" | "test" | "focus";
export type KnowledgeAttempt = {
  taskId: string;
  lessonId: string;
  skill: string;
  level: Level;
  source: AttemptSource;
  firstCorrect: boolean;
  usedSolution: boolean;
  at: number;
};

export type MasteryBand = "good" | "practice" | "weak" | "unrated";
export type Mastery = { score: number | null; band: MasteryBand; samples: number };
export type PracticeResult = { firstCorrect: boolean; usedSolution: boolean; skill?: string };

const sourceWeight: Record<AttemptSource,number>={lesson:1,smart:1.08,test:1.18,focus:1.12};

export function appendKnowledgeAttempt(attempts:KnowledgeAttempt[],attempt:KnowledgeAttempt){
  return [...attempts,attempt].slice(-500);
}

export function estimateMastery(attempts:KnowledgeAttempt[]):Mastery{
  if(attempts.length===0)return {score:null,band:"unrated",samples:0};
  const recent=[...attempts].sort((a,b)=>a.at-b.at).slice(-12);
  let earned=0,total=0;
  recent.forEach((attempt,index)=>{
    const recency=1+index/Math.max(1,recent.length-1);
    const weight=recency*sourceWeight[attempt.source];
    total+=weight;
    if(attempt.firstCorrect&&!attempt.usedSolution)earned+=weight;
  });
  // Blago početno izravnavanje sprečava da samo jedan zadatak potpuno odredi status.
  const score=Math.round(100*(earned+0.65*2.5)/(total+2.5));
  return {score,band:score>=80?"good":score>=60?"practice":"weak",samples:recent.length};
}

export function lessonMastery(attempts:KnowledgeAttempt[],lessonId:string){
  return estimateMastery(attempts.filter(attempt=>attempt.lessonId===lessonId));
}

export function areaMastery(attempts:KnowledgeAttempt[],lessonIds:string[]){
  const lessons=lessonIds.map(lessonId=>lessonMastery(attempts,lessonId));
  const samples=lessons.reduce((sum,mastery)=>sum+mastery.samples,0);
  if(samples===0)return {score:null,band:"unrated" as const,samples:0};
  // Dok tema još nije proverena koristimo neutralnih 65%, pa mali uzorak ne može
  // odmah da predstavi celu oblast kao potpuno savladanu ili potpuno slabu.
  const score=Math.round(lessons.reduce((sum,mastery)=>sum+(mastery.score??65),0)/Math.max(1,lessons.length));
  return {score,band:score>=80?"good" as const:score>=60?"practice" as const:"weak" as const,samples};
}

export function skillMasteries(attempts:KnowledgeAttempt[],lessonId?:string){
  const grouped=new Map<string,KnowledgeAttempt[]>();
  attempts.filter(attempt=>!lessonId||attempt.lessonId===lessonId).forEach(attempt=>grouped.set(attempt.skill,[...(grouped.get(attempt.skill)??[]),attempt]));
  return [...grouped.entries()].map(([skill,items])=>({skill,...estimateMastery(items)})).sort((a,b)=>(a.score??101)-(b.score??101));
}

export function recommendedLevel(attempts:KnowledgeAttempt[]):Level{
  const recent=[...attempts].sort((a,b)=>a.at-b.at).slice(-8);
  if(recent.length<3)return "basic";
  const correct=(items:KnowledgeAttempt[])=>items.filter(item=>item.firstCorrect&&!item.usedSolution).length/Math.max(1,items.length);
  const higher=recent.filter(item=>item.level!=="basic");
  if(higher.length>=3&&correct(higher)>=0.8)return "advanced";
  if(correct(recent)>=0.75)return "medium";
  return "basic";
}

export function adaptiveLevel(selected:Level,recent:PracticeResult[]):Level{
  if(recent.length<3)return selected;
  const last=recent.slice(-3);const correct=last.filter(item=>item.firstCorrect&&!item.usedSolution).length;
  if(recent.length>=6){
    const lastSix=recent.slice(-6);const correctSix=lastSix.filter(item=>item.firstCorrect&&!item.usedSolution).length;
    if(selected==="basic"&&correct===3&&correctSix>=5)return "advanced";
    if(selected==="advanced"&&correct<=1&&correctSix<=2)return "basic";
  }
  if(correct===3)return selected==="basic"?"medium":"advanced";
  if(correct<=1)return selected==="advanced"?"medium":"basic";
  return selected;
}

export function adaptiveMessage(selected:Level,recent:PracticeResult[]){
  if(recent.length<3)return "";
  const correct=recent.slice(-3).filter(item=>item.firstCorrect&&!item.usedSolution).length;
  if(selected==="basic"&&correct<=1)return "Probaj još nekoliko osnovnih zadataka. Ako i dalje grešiš, vrati se kratko na odgovarajuću lekciju.";
  const next=adaptiveLevel(selected,recent);
  if(next===selected)return "Nastavi ovim tempom.";
  if(selected==="basic"&&next==="medium")return "Spreman si za srednji nivo. Sledeći zadaci biće malo zahtevniji.";
  if(next==="advanced")return "Odlično radiš. Spreman si i za poneki napredni zadatak.";
  if(next==="basic")return "Probaj još nekoliko osnovnih zadataka.";
  return "Sledi nekoliko jednostavnijih zadataka iste teme.";
}

export type KnowledgeRecommendation = {
  kind: "focus" | "lesson" | "advanced";
  lessonId?: string;
  skill?: string;
  band?: MasteryBand;
  title: string;
  message: string;
};

export function knowledgeRecommendation(grade:Grade,attempts:KnowledgeAttempt[],cursor=0):KnowledgeRecommendation{
  const lessons=grade.areas.filter(area=>!area.review).flatMap(area=>area.lessons);
  const measured=lessons.map(lesson=>({lesson,mastery:lessonMastery(attempts,lesson.id)}));
  const weak=measured.filter(item=>item.mastery.samples>=2&&item.mastery.band==="weak");
  const practice=measured.filter(item=>item.mastery.samples>0&&item.mastery.band==="practice");
  const unrated=measured.filter(item=>item.mastery.band==="unrated");
  const candidates=weak.length?weak:practice.length?practice:unrated;
  if(candidates.length===0)return {kind:"advanced",title:"Napredni nivo",message:"Odlično napreduješ! Probaj napredni nivo."};
  const chosen=candidates[Math.abs(cursor)%candidates.length];
  if(chosen.mastery.band==="unrated")return {kind:"lesson",lessonId:chosen.lesson.id,title:chosen.lesson.title,message:`Počni od lekcije: ${chosen.lesson.title}.`};
  const skills=skillMasteries(attempts,chosen.lesson.id);
  const weakSkill=skills.find(skill=>skill.samples>=2&&skill.band==="weak")??skills[0];
  const title=weakSkill?.skill??chosen.lesson.title;
  return {kind:"focus",lessonId:chosen.lesson.id,skill:weakSkill?.skill,band:chosen.mastery.band,title,message:`Preporučujemo da sada vežbaš: ${title}.`};
}

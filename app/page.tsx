"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Brain, Check, ChevronRight, GraduationCap, Lightbulb, Menu, RotateCcw, Target, Trophy, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { grades, Grade, GradeId, Lesson, Level, Task } from "./content";
import { examplesForLesson, tasksForLesson } from "./content/enhancements";
import { AreaTestTask, getAreaTest } from "./content/area-tests";
import { localizeMathText, ScriptChoice, ScriptProvider, useCurrentScript, useLocalizedDom, useScriptPreference } from "./i18n";
import { mathHtml } from "./math-format";
import { adaptiveLevel, adaptiveMessage, appendKnowledgeAttempt, areaMastery, AttemptSource, KnowledgeAttempt, knowledgeRecommendation, lessonMastery, MasteryBand, recommendedLevel, skillMasteries } from "./knowledge";

type Route = { kind:"home" } | {kind:"grade"; gradeId:GradeId} | {kind:"area"; gradeId:GradeId; areaId:string} | {kind:"lesson";gradeId:GradeId;areaId:string;lessonId:string} | {kind:"smart";gradeId:GradeId} | {kind:"focus";gradeId:GradeId;lessonId:string;skill?:string} | {kind:"test";gradeId:GradeId;areaId:string};
type TestScore={best:number;last:number};
type GradeProgress = {completed:string[];lastLesson:string|null;bestFirst:number;lastFirst:number;recentTaskIds:string[];weak:Record<string,number>;tests:Record<string,TestScore>;knowledgeAttempts:KnowledgeAttempt[];recommendationCursor:number};
const emptyProgress:GradeProgress={completed:[],lastLesson:null,bestFirst:0,lastFirst:0,recentTaskIds:[],weak:{},tests:{},knowledgeAttempts:[],recommendationCursor:0};

function MathText({children,className=""}:{children:string;className?:string}){const script=useCurrentScript();return <span className={`math ${className}`} dangerouslySetInnerHTML={{__html:mathHtml(localizeMathText(children,script))}}/>}

function parseRoute():Route{
  if(typeof window==="undefined") return {kind:"home"};
  const p=window.location.hash.replace(/^#\/?/,"").split("/").filter(Boolean);
  const g=Number(p[1]) as GradeId;
  if(p[0]==="razred" && [6,7,8].includes(g)) return {kind:"grade",gradeId:g};
  if(p[0]==="oblast" && [6,7,8].includes(g) && p[2]) return {kind:"area",gradeId:g,areaId:p[2]};
  if(p[0]==="lekcija" && [6,7,8].includes(g) && p[2] && p[3]) return {kind:"lesson",gradeId:g,areaId:p[2],lessonId:p[3]};
  if(p[0]==="pametno" && [6,7,8].includes(g)) return {kind:"smart",gradeId:g};
  if(p[0]==="slaba-tacka" && [6,7,8].includes(g) && p[2]) return {kind:"focus",gradeId:g,lessonId:p[2],skill:p[3]?decodeURIComponent(p.slice(3).join("/")):undefined};
  if(p[0]==="test" && [6,7,8].includes(g) && p[2]) return {kind:"test",gradeId:g,areaId:p[2]};
  return {kind:"home"};
}

function routeHash(r:Route){
  if(r.kind==="home") return "#/";
  if(r.kind==="grade") return `#/razred/${r.gradeId}`;
  if(r.kind==="area") return `#/oblast/${r.gradeId}/${r.areaId}`;
  if(r.kind==="lesson") return `#/lekcija/${r.gradeId}/${r.areaId}/${r.lessonId}`;
  if(r.kind==="smart") return `#/pametno/${r.gradeId}`;
  if(r.kind==="focus") return `#/slaba-tacka/${r.gradeId}/${r.lessonId}${r.skill?`/${encodeURIComponent(r.skill)}`:""}`;
  return `#/test/${r.gradeId}/${r.areaId}`;
}

function useGradeProgress(gradeId:GradeId){
  const key=`matematikon68-progress-v1-${gradeId}`;
  const [progress,setProgress]=useState<GradeProgress>(emptyProgress);
  const [loaded,setLoaded]=useState(false);
  // Reading saved progress after hydration keeps the server and first client render identical.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(()=>{try{const raw=localStorage.getItem(key);const parsed=raw?JSON.parse(raw):{};setProgress({...emptyProgress,...parsed,completed:Array.isArray(parsed.completed)?parsed.completed:[],recentTaskIds:Array.isArray(parsed.recentTaskIds)?parsed.recentTaskIds:[],weak:parsed.weak??{},tests:parsed.tests??{},knowledgeAttempts:Array.isArray(parsed.knowledgeAttempts)?parsed.knowledgeAttempts:[],recommendationCursor:Number.isFinite(parsed.recommendationCursor)?parsed.recommendationCursor:0})}catch{setProgress(emptyProgress)}finally{setLoaded(true)}},[key]);
  const save=useCallback((update:GradeProgress|((previous:GradeProgress)=>GradeProgress))=>{setProgress(previous=>{const next=typeof update==="function"?update(previous):update;localStorage.setItem(key,JSON.stringify(next));return next})},[key]);
  return [progress,save,loaded] as const;
}

function Logo({go}:{go:(r:Route)=>void}){return <button data-no-transliterate className="brand" onClick={()=>go({kind:"home"})}><span>∑</span><b>Matematik<span>ON</span></b><small>6–8</small></button>}

function Header({route,go,script,setScript}:{route:Route;go:(r:Route)=>void;script:ScriptChoice;setScript:(s:ScriptChoice)=>void}){
  const [open,setOpen]=useState(false);
  const item=(label:string,r:Route,active:boolean)=><button className={active?"active":""} onClick={()=>{go(r);setOpen(false)}}>{label}</button>;
  return <header className="site-header"><div className="nav-wrap"><Logo go={go}/><nav className={open?"open":""} aria-label="Glavna navigacija">
    {item("Početna",{kind:"home"},route.kind==="home")}
    {[6,7,8].map(id=>item(`${id}. razred`,{kind:"grade",gradeId:id as GradeId},"gradeId" in route&&route.gradeId===id))}
  </nav><button className="menu-toggle" aria-label={open?"Zatvori meni":"Otvori meni"} onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button><div data-no-transliterate className="script-switch" aria-label="Избор писма"><button className={script==="cyrl"?"active":""} onClick={()=>setScript("cyrl")} aria-pressed={script==="cyrl"}>Ћир</button><span>|</span><button className={script==="latn"?"active":""} onClick={()=>setScript("latn")} aria-pressed={script==="latn"}>Lat</button></div></div></header>
}

function HomePage({go}:{go:(r:Route)=>void}){return <main>
  <section className="home-hero"><div className="shell hero-grid"><div><p className="eyebrow">MATEMATIKA ZA STARIJE RAZREDE</p><h1>Izaberi razred.<br/><em>Uči korak po korak.</em></h1><p>Jasne lekcije, pravilna matematika i vežbanje koje pamti tvoj napredak.</p></div><div className="symbol-board" aria-hidden="true"><span>√</span><span className="board-frac"><i>3</i><i>5</i></span><span>∠</span><b>6–8</b></div></div></section>
  <section className="shell grade-choice"><div className="section-heading"><div><p className="eyebrow">SEPTEMBAR</p><h2>Koji razred biraš?</h2></div><p>Odaberi razred i odmah nastavi na dostupno gradivo.</p></div><div className="grade-grid">{grades.map((g,i)=><button key={g.id} className={`grade-card g${g.id}`} onClick={()=>go({kind:"grade",gradeId:g.id})}><span className="grade-number">0{i+1}</span><div><strong>{g.id}.</strong><h3>RAZRED</h3><p>{g.description}</p></div><ChevronRight/></button>)}</div></section>
  </main>}

function ProgressBlock({grade,progress}:{grade:Grade;progress:GradeProgress}){
  const total=grade.areas.flatMap(a=>a.lessons).length; const done=progress.completed.length; const pct=Math.round(done/total*100);
  return <div className="progress-card"><div><span>Napredak u {grade.id}. razredu</span><strong>{pct}%</strong></div><Progress value={pct}/><p>{done} od {total} završenih lekcija</p></div>
}

const masteryLabel=(band:MasteryBand)=>band==="good"?"Dobro savladano":band==="practice"?"Potrebno još vežbe":band==="weak"?"Slaba tačka":"Još nije procenjeno";
const masteryDot=(band:MasteryBand)=>band==="good"?"🟢":band==="practice"?"🟡":band==="weak"?"🔴":"⚪";

function KnowledgeDashboard({grade,progress,go}:{grade:Grade;progress:GradeProgress;go:(r:Route)=>void}){
  const mainAreas=grade.areas.filter(area=>!area.review);
  const recommendation=knowledgeRecommendation(grade,progress.knowledgeAttempts,progress.recommendationCursor);
  const recommendedLesson=recommendation.lessonId?mainAreas.flatMap(area=>area.lessons.map(lesson=>({area,lesson}))).find(item=>item.lesson.id===recommendation.lessonId):undefined;
  const openRecommendation=()=>{
    if(recommendation.kind==="advanced")go({kind:"smart",gradeId:grade.id});
    else if(recommendation.kind==="focus"&&recommendation.lessonId)go({kind:"focus",gradeId:grade.id,lessonId:recommendation.lessonId,skill:recommendation.skill});
    else if(recommendedLesson)go({kind:"lesson",gradeId:grade.id,areaId:recommendedLesson.area.id,lessonId:recommendedLesson.lesson.id});
  };
  return <section className="knowledge-section"><div className="section-heading compact"><div><p className="eyebrow">LIČNI PREGLED</p><h2>Moje znanje</h2></div><p>Procena koristi tvoje prve pokušaje i postepeno se menja dok napreduješ.</p></div>
    <div className="knowledge-card">{mainAreas.map(area=>{
      const mastery=areaMastery(progress.knowledgeAttempts,area.lessons.map(lesson=>lesson.id));
      const fallback=progress.tests[area.id]?progress.tests[area.id].last*10:null;
      const score=mastery.score??fallback;
      return <div className="knowledge-area" key={area.id}><div className="knowledge-area-head"><div><small>OBLAST</small><h3>{area.title}</h3></div><strong>{score===null?"—":`${score}%`}</strong></div><Progress value={score??0}/>{score===null&&<p className="knowledge-empty">Reši nekoliko zadataka da dobiješ prvu procenu.</p>}
        <div className="knowledge-lessons">{area.lessons.map(lesson=>{const state=lessonMastery(progress.knowledgeAttempts,lesson.id);return <button key={lesson.id} className={`knowledge-lesson ${state.band}`} onClick={()=>go({kind:"lesson",gradeId:grade.id,areaId:area.id,lessonId:lesson.id})}><span aria-hidden="true">{masteryDot(state.band)}</span><span><b>{lesson.title}</b><small>{masteryLabel(state.band)}{state.score!==null?` · ${state.score}%`:""}</small></span><ChevronRight/></button>})}</div>
      </div>})}</div>
    <div className={`today-card ${recommendation.band??"good"}`}><span><Target/></span><div><small>PREPORUKA ZA DANAS</small><h3>{recommendation.message}</h3>{recommendation.kind==="focus"&&<p>Pet kratkih zadataka pomoći će ti da popraviš ovu procenu.</p>}</div><Button onClick={openRecommendation}>{recommendation.kind==="advanced"?"Probaj napredni nivo":recommendation.kind==="focus"&&recommendation.band==="weak"?"Vežbaj slabu tačku":recommendation.kind==="focus"?"Vežbaj":"Otvori lekciju"}<ArrowRight/></Button></div>
  </section>
}

function GradePage({grade,go}:{grade:Grade;go:(r:Route)=>void}){
  const [progress]=useGradeProgress(grade.id);
  const first=grade.areas.find(a=>!a.review)?.lessons[0] ?? grade.areas[0].lessons[0];
  const last=grade.areas.flatMap(a=>a.lessons.map(l=>({a,l}))).find(x=>x.l.id===progress.lastLesson);
  const cont=last??{a:grade.areas.find(a=>a.lessons.some(l=>l.id===first.id))!,l:first};
  return <main className="shell page"><div className="grade-mast" style={{"--grade":grade.accent} as React.CSSProperties}><p className="eyebrow">SEPTEMBAR · {grade.id}. RAZRED</p><h1>{grade.id}. razred</h1><p>{grade.description}</p></div>
    <div className="dashboard-grid"><ProgressBlock grade={grade} progress={progress}/><button className="continue-card" onClick={()=>go({kind:"lesson",gradeId:grade.id,areaId:cont.a.id,lessonId:cont.l.id})}><span><BookOpen/></span><div><small>{progress.lastLesson?"NASTAVI UČENJE":"PRVA LEKCIJA"}</small><strong>{cont.l.title}</strong><p>{cont.a.title}</p></div><ArrowRight/></button></div>
    <KnowledgeDashboard grade={grade} progress={progress} go={go}/>
    <div className="section-heading compact"><div><p className="eyebrow">DOSTUPNO</p><h2>Oblasti</h2></div></div><div className="area-grid">{grade.areas.map((a,i)=>{
      const done=a.lessons.filter(l=>progress.completed.includes(l.id)).length;const pct=Math.round(done/a.lessons.length*100);
      const test=progress.tests[a.id];
      return <button className={a.review?"area-card review":"area-card"} key={a.id} onClick={()=>go({kind:"area",gradeId:grade.id,areaId:a.id})}><span>{a.review?"↺":String(i).padStart(2,"0")}</span><div><small>{a.review?"KRATKO OBNAVLJANJE":"GLAVNA OBLAST"}</small><h3>{a.title}</h3><p>{a.short}</p>{test&&<p className="area-test-score">Najbolji test: {test.best}/10</p>}<div className="mini-progress"><i style={{width:`${pct}%`}}/></div></div><b>{pct}%</b></button>})}
      <button className="smart-card" onClick={()=>go({kind:"smart",gradeId:grade.id})}><span><Brain/></span><div><small>10 ZADATAKA</small><h3>Pametno vežbanje</h3><p>Vežbaj po nivou i otkrij šta treba da ponoviš.</p></div><ChevronRight/></button></div><p className="soon">Nove oblasti uskoro.</p>
  </main>
}

function AreaPage({grade,areaId,go}:{grade:Grade;areaId:string;go:(r:Route)=>void}){
  const area=grade.areas.find(a=>a.id===areaId)!; const [progress]=useGradeProgress(grade.id); const done=area.lessons.filter(l=>progress.completed.includes(l.id)).length;const pct=Math.round(done/area.lessons.length*100);const test=getAreaTest(grade.id,area.id);const testScore=progress.tests[area.id];
  return <main className="shell page"><button className="back-link" onClick={()=>go({kind:"grade",gradeId:grade.id})}><ArrowLeft/> {grade.id}. razred</button><div className="area-head"><p className="eyebrow">{area.review?"KRATKO OBNAVLJANJE":"SEPTEMBARSKA OBLAST"}</p><h1>{area.title}</h1><p>{area.short}</p><div className="area-progress-line"><Progress value={pct}/><strong>{pct}%</strong></div><div className="area-status"><span>{done} od {area.lessons.length} završenih lekcija</span>{testScore&&<span><Trophy/> Završni test: {testScore.last}/10 · najbolji {testScore.best}/10</span>}</div></div>
    <div className="lesson-grid">{area.lessons.map((l,i)=><button key={l.id} className={progress.completed.includes(l.id)?"lesson-card completed":"lesson-card"} onClick={()=>go({kind:"lesson",gradeId:grade.id,areaId:area.id,lessonId:l.id})}><span>{progress.completed.includes(l.id)?<Check/>:String(i+1).padStart(2,"0")}</span><div><small>{progress.completed.includes(l.id)?"ZAVRŠENO":`LEKCIJA ${i+1}`}</small><h2>{l.title}</h2></div><ChevronRight/></button>)}</div>{!area.review&&<div className="area-tools"><button className="area-tool-card smart" onClick={()=>go({kind:"smart",gradeId:grade.id})}><span><Brain/></span><div><small>10 ZADATAKA</small><h2>Pametno vežbanje</h2><p>Vežbaj različite tipove zadataka.</p></div><ChevronRight/></button>{test.length>0&&<button className="area-tool-card test" onClick={()=>go({kind:"test",gradeId:grade.id,areaId:area.id})}><span><GraduationCap/></span><div><small>ZAVRŠNI TEST · 10 ZADATAKA</small><h2>Završni test</h2><p>{testScore?`Najbolji rezultat: ${testScore.best}/10`:"Proveri znanje iz cele oblasti."}</p></div><ChevronRight/></button>}</div>}
  </main>
}

function Diagram({type}:{type:Lesson["diagram"]}){
  if(type==="tales") return <figure className="diagram"><svg viewBox="0 0 520 260" role="img" aria-label="Talesova teorema: duž MN paralelna je duži BC"><path d="M85 220 L260 35 L445 220 Z"/><path className="accent" d="M158 143 L369 143"/><circle cx="260" cy="35" r="4"/><text x="262" y="25">A</text><text x="72" y="235">B</text><text x="445" y="235">C</text><text x="142" y="137">M</text><text x="374" y="137">N</text><text x="205" y="130">MN ∥ BC</text></svg><figcaption>Paralela MN deli krake trougla proporcionalno.</figcaption></figure>;
  if(type==="similarity") return <figure className="diagram"><svg viewBox="0 0 560 240" role="img" aria-label="Dva slična trougla"><path d="M35 205 L145 45 L230 205 Z"/><path className="accent" d="M300 205 L455 20 L535 205 Z"/><text x="140" y="34">A</text><text x="22" y="222">B</text><text x="232" y="222">C</text><text x="450" y="15">A₁</text><text x="284" y="222">B₁</text><text x="536" y="222">C₁</text><text x="250" y="120">∼</text></svg><figcaption>Jednaki uglovi i proporcionalne stranice.</figcaption></figure>;
  if(type==="scale") return <figure className="diagram"><svg viewBox="0 0 520 220" role="img" aria-label="Poređenje duži u razmeri"><path d="M55 70 H455"/><path className="accent" d="M55 155 H255"/><path d="M55 58 V82 M455 58 V82 M55 143 V167 M255 143 V167"/><text x="235" y="55">a</text><text x="145" y="140">b</text><text x="235" y="205">a : b</text></svg><figcaption>Razmeru duži računamo tek kada su u istoj jedinici.</figcaption></figure>;
  return null;
}

function TaskCard({task,onDone,number}:{task:Task;onDone:(result:{firstCorrect:boolean;usedSolution:boolean})=>void;number?:number}){
  const [value,setValue]=useState("");const [attempts,setAttempts]=useState(0);const [message,setMessage]=useState("");const [hint,setHint]=useState(false);const [solution,setSolution]=useState(false);const [finished,setFinished]=useState(false);
  const norm=(v:string)=>v.trim().replace(/[−–—]/g,"-").replace(/\s+/g,"").replace(/,/g,".").toLowerCase();
  const sameAnswer=(entered:string,answer:string)=>{const a=norm(entered),b=norm(answer);const an=Number(a),bn=Number(b);return a!==""&&b!==""&&Number.isFinite(an)&&Number.isFinite(bn)?an===bn:a===b};
  const check=()=>{if(!value)return;const ok=sameAnswer(value,task.answer);if(ok){setFinished(true);setMessage("Tačno! Bravo.");onDone({firstCorrect:attempts===0&&!solution,usedSolution:solution})}else{setAttempts(a=>a+1);setMessage("Nije tačno. Pokušaj ponovo.")}};
  const negativeAllowed=task.kind==="input"&&norm(task.answer).startsWith("-");const inputId=`answer-${task.id.replace(/[^a-zA-Z0-9_-]/g,"-")}`;
  const toggleMinus=()=>setValue(current=>{const clean=current.replace(/^[−-]/,"");return /^[−-]/.test(current)?clean:`-${clean}`});
  return <article data-task-id={task.id} className={`task-card ${finished?"is-correct":""}`}><div className="task-top"><span>{number?`Zadatak ${number}`:"Proveri znanje"}</span><small className={`level ${task.level}`}>{task.level==="basic"?"Osnovni":task.level==="medium"?"Srednji":"Napredni"}</small></div><p>{task.prompt}</p>{task.math&&<div className="task-math"><MathText>{task.math}</MathText></div>}
    {task.kind==="choice"?<div className="choices">{task.choices!.map(c=><button key={c} disabled={finished} className={value===c?"selected":""} onClick={()=>setValue(c)}><MathText>{c}</MathText></button>)}</div>:<div className="answer-input"><label htmlFor={inputId}>Odgovor</label><div className="input-row"><input id={inputId} type="text" value={value} disabled={finished} onChange={e=>setValue(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")check()}} inputMode={negativeAllowed?"text":"decimal"} autoCapitalize="off" autoCorrect="off" spellCheck={false} placeholder="Upiši odgovor"/>{negativeAllowed&&<button data-no-transliterate type="button" className="minus-key" disabled={finished} onClick={toggleMinus} aria-label="Unesi ili ukloni znak minus">−</button>}</div></div>}
    {!finished&&<div className="task-actions"><Button onClick={check} disabled={!value}>Proveri</Button>{attempts>=2&&!hint&&<Button variant="outline" onClick={()=>setHint(true)}><Lightbulb/> Nagoveštaj</Button>}{attempts>=2&&<Button variant="ghost" onClick={()=>setSolution(true)}>Prikaži postupak</Button>}</div>}
    {message&&<p className={finished?"feedback good":"feedback bad"}>{message}</p>}{hint&&<p className="hint"><Lightbulb/> {task.hint}</p>}{solution&&<div className="solution"><strong>Postupak</strong><MathText>{task.solution}</MathText>{!finished&&<Button onClick={()=>{setFinished(true);onDone({firstCorrect:false,usedSolution:true})}}>Razumem, nastavi</Button>}</div>}
  </article>
}

function asKnowledgeAttempt(task:Task,lessonId:string,source:AttemptSource,result:{firstCorrect:boolean;usedSolution:boolean}):KnowledgeAttempt{
  return {taskId:task.id,lessonId,skill:task.skill,level:task.level,source,firstCorrect:result.firstCorrect,usedSolution:result.usedSolution,at:Date.now()};
}

function LessonPage({grade,areaId,lessonId,go}:{grade:Grade;areaId:string;lessonId:string;go:(r:Route)=>void}){
  const area=grade.areas.find(a=>a.id===areaId)!;const lesson=area.lessons.find(l=>l.id===lessonId)!;const lessonTasks=tasksForLesson(lesson.id,lesson.tasks);const lessonExamples=examplesForLesson(lesson.id,lesson.examples);const [progress,save,loaded]=useGradeProgress(grade.id);const [done,setDone]=useState<Record<string,boolean>>({});
  useEffect(()=>{if(loaded)save(previous=>({...previous,lastLesson:lesson.id}))},[lesson.id,loaded,save]);
  const all=area.lessons;const index=all.findIndex(l=>l.id===lesson.id);const completed=lessonTasks.every(t=>done[t.id]);
  useEffect(()=>{if(loaded&&completed)save(previous=>previous.completed.includes(lesson.id)?previous:{...previous,lastLesson:lesson.id,completed:[...previous.completed,lesson.id]})},[completed,lesson.id,loaded,save]);
  const jump=(l:Lesson)=>go({kind:"lesson",gradeId:grade.id,areaId:area.id,lessonId:l.id});
  return <main className="lesson-page"><nav className="lesson-nav"><button disabled={index===0} onClick={()=>jump(all[index-1])}><ArrowLeft/> <span>Prethodna lekcija</span></button><button onClick={()=>go({kind:"area",gradeId:grade.id,areaId:area.id})}><BookOpen/><span>Pregled oblasti</span></button><button disabled={index===all.length-1} onClick={()=>jump(all[index+1])}><span>Sledeća lekcija</span><ArrowRight/></button></nav>
    <div className="lesson-shell"><header className="lesson-title"><p className="eyebrow">{grade.id}. RAZRED · {area.title.toUpperCase()}</p><h1>{lesson.title}</h1><p>{lesson.intro}</p></header>
      <section className="lesson-layout"><div className="learn-column"><article className="content-card"><div className="card-title"><span>01</span><h2>Najvažnije</h2></div><ul>{lesson.rules.map(r=><li key={r}>{r}</li>)}</ul><div className="formula-row">{lesson.formulas.map(f=><div key={f}><MathText>{f}</MathText></div>)}</div></article>
      {lesson.diagram&&<Diagram type={lesson.diagram}/>}<article className="content-card"><div className="card-title"><span>02</span><h2>Primeri</h2></div><div className="examples">{lessonExamples.map((e,i)=><div key={`${i}-${e}`}><small>PRIMER {i+1}</small><MathText>{e}</MathText></div>)}</div></article>
      <article className="content-card solved-card"><div className="card-title"><span>03</span><h2>Rešen primer</h2></div><h3><MathText>{lesson.solved.question}</MathText></h3><ol>{lesson.solved.steps.map(s=><li key={s}><MathText>{s}</MathText></li>)}</ol></article></div>
      <aside><div className="quiz-head"><p className="eyebrow">KRATKA PROVERA</p><h2>Probaj samostalno</h2><p>Pogrešan odgovor nije kraj — pokušaj ponovo.</p></div>{lessonTasks.map((t,i)=><TaskCard key={t.id} task={t} number={i+1} onDone={result=>{setDone(d=>({...d,[t.id]:true}));save(previous=>({...previous,knowledgeAttempts:appendKnowledgeAttempt(previous.knowledgeAttempts,asKnowledgeAttempt(t,lesson.id,"lesson",result))}))}}/>)}{completed&&<div className="lesson-finish"><Check/><div><strong>Lekcija je završena!</strong><p>Napredak je sačuvan na ovom uređaju.</p></div></div>}</aside></section>
    </div><nav className="lesson-nav bottom"><button disabled={index===0} onClick={()=>jump(all[index-1])}><ArrowLeft/> <span>Prethodna</span></button><button onClick={()=>go({kind:"area",gradeId:grade.id,areaId:area.id})}><BookOpen/><span>Pregled oblasti</span></button><button disabled={index===all.length-1} onClick={()=>jump(all[index+1])}><span>Sledeća</span><ArrowRight/></button></nav></main>
}

function shuffle<T>(arr:T[]){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
type SessionTask=Task&{lessonId:string;areaId:string};
type SessionResult={task:SessionTask;firstCorrect:boolean;usedSolution:boolean};
const levelName=(level:Level)=>level==="basic"?"osnovnog":level==="medium"?"srednjeg":"naprednog";
function sessionPool(grade:Grade):SessionTask[]{return grade.areas.flatMap(area=>area.lessons.flatMap(lesson=>tasksForLesson(lesson.id,lesson.tasks).map(task=>({...task,lessonId:lesson.id,areaId:area.id}))))}
function repeatedErrorSkill(results:SessionResult[]){
  const counts=new Map<string,number>();results.slice(-4).filter(result=>!result.firstCorrect||result.usedSolution).forEach(result=>counts.set(result.task.skill,(counts.get(result.task.skill)??0)+1));
  return [...counts.entries()].find(([,count])=>count>=2)?.[0];
}
function pickAdaptiveTask(grade:Grade,selected:Level,results:SessionResult[],usedIds:string[],recentIds:string[],attempts:KnowledgeAttempt[],focus?:{lessonId:string;skill?:string}){
  const pool=sessionPool(grade);const used=new Set(usedIds);const effective=adaptiveLevel(selected,results);const errorSkill=repeatedErrorSkill(results);
  const storedWeak=skillMasteries(attempts).find(item=>item.samples>=2&&item.band==="weak")?.skill;
  const prioritySkill=focus?.skill??errorSkill??(usedIds.length%3===0?storedWeak:undefined);
  const priorityLesson=focus?.lessonId??[...results].reverse().find(result=>result.task.skill===prioritySkill)?.task.lessonId??[...attempts].reverse().find(attempt=>attempt.skill===prioritySkill)?.lessonId;
  const scoped=focus?pool.filter(task=>task.lessonId===focus.lessonId):pool;
  const available=scoped.filter(task=>!used.has(task.id));
  const byLevel=available.filter(task=>task.level===effective);
  const skillAtLevel=prioritySkill?byLevel.filter(task=>task.skill===prioritySkill):[];
  const lessonAtLevel=priorityLesson?byLevel.filter(task=>task.lessonId===priorityLesson):[];
  const bySkill=prioritySkill?available.filter(task=>task.skill===prioritySkill):[];
  const candidates=skillAtLevel.length?skillAtLevel:lessonAtLevel.length?lessonAtLevel:bySkill.length?bySkill:byLevel.length?byLevel:available.length?available:pool.filter(task=>!used.has(task.id));
  const fresh=candidates.filter(task=>!recentIds.includes(task.id));
  return shuffle(fresh.length?fresh:candidates)[0];
}

function SmartPractice({grade,go}:{grade:Grade;go:(r:Route)=>void}){
  const [progress,save]=useGradeProgress(grade.id);const [level,setLevel]=useState<Level>("basic");const [tasks,setTasks]=useState<SessionTask[]>([]);const [results,setResults]=useState<SessionResult[]>([]);const [started,setStarted]=useState(false);
  const start=()=>{const firstTask=pickAdaptiveTask(grade,level,[],[],progress.recentTaskIds,progress.knowledgeAttempts);setTasks(firstTask?[firstTask]:[]);setResults([]);setStarted(Boolean(firstTask))};
  const finishOne=(result:{firstCorrect:boolean;usedSolution:boolean})=>{const task=tasks[results.length];if(!task||results.some(item=>item.task.id===task.id))return;const next=[...results,{task,...result}];setResults(next);save(previous=>{const knowledgeAttempts=appendKnowledgeAttempt(previous.knowledgeAttempts,asKnowledgeAttempt(task,task.lessonId,"smart",result));if(next.length<10)return {...previous,knowledgeAttempts};const first=next.filter(item=>item.firstCorrect&&!item.usedSolution).length;const weak={...previous.weak};next.filter(item=>!item.firstCorrect||item.usedSolution).forEach(item=>weak[item.task.skill]=(weak[item.task.skill]||0)+1);return {...previous,knowledgeAttempts,lastFirst:first,bestFirst:Math.max(previous.bestFirst,first),recentTaskIds:next.map(item=>item.task.id),weak}});if(next.length<10){const nextTask=pickAdaptiveTask(grade,level,next,tasks.map(item=>item.id),progress.recentTaskIds,[...progress.knowledgeAttempts,asKnowledgeAttempt(task,task.lessonId,"smart",result)]);if(nextTask)setTasks(current=>[...current,nextTask])}else setStarted(false)};
  const first=results.filter(x=>x.firstCorrect&&!x.usedSolution).length;const weakSkills=skillMasteries(progress.knowledgeAttempts).filter(item=>item.samples>=2&&item.band!=="good").slice(0,3);const suggested=recommendedLevel(progress.knowledgeAttempts);const at=results.length;const currentTask=tasks[at];const liveMessage=adaptiveMessage(level,results);
  if(!started&&results.length===10)return <main className="shell page smart-page"><button className="back-link" onClick={()=>go({kind:"grade",gradeId:grade.id})}><ArrowLeft/> {grade.id}. razred</button><div className="result-card"><span className="result-icon"><Target/></span><p className="eyebrow">SESIJA JE ZAVRŠENA</p><h1>{first}/10 iz prvog pokušaja</h1><div className="result-grid"><div><small>REZULTAT IZ PRVOG POKUŠAJA</small><strong>{first}/10</strong></div><div><small>NA KRAJU ZAVRŠENO</small><strong>10/10</strong></div></div><p>{first>=8?"Odlično! Nastavi ovim tempom.":first>=5?"Dobro napreduješ. Ponovi slabe tačke.":"Vrati se na preporučene lekcije i pokušaj ponovo."}</p><Button size="lg" onClick={start}><RotateCcw/> Nova sesija</Button></div>{weakSkills.length>0&&<div className="recommend-card"><h2>Šta da ponoviš</h2>{weakSkills.map(item=><span key={item.skill}>{item.skill}</span>)}</div>}</main>;
  if(!started)return <main className="shell page smart-page"><button className="back-link" onClick={()=>go({kind:"grade",gradeId:grade.id})}><ArrowLeft/> {grade.id}. razred</button><div className="smart-intro"><span><Brain/></span><p className="eyebrow">PAMETNO VEŽBANJE</p><h1>10 zadataka za {grade.id}. razred</h1><p>Izaberi nivo. Sistem postepeno prilagođava naredne zadatke, ali ti uvek zadržavaš izbor.</p><p className="adaptive-note">Predlog na osnovu dosadašnjeg rada: počni od {levelName(suggested)} nivoa.</p><div className="level-picker">{(["basic","medium","advanced"] as Level[]).map(l=><button key={l} className={level===l?`active ${l}`:l} onClick={()=>setLevel(l)}><i/>{l==="basic"?"Osnovni":l==="medium"?"Srednji":"Napredni"}</button>)}</div><Button size="lg" onClick={start}>Počni vežbanje <ArrowRight/></Button>{progress.bestFirst>0&&<p className="best">Najbolji rezultat iz prvog pokušaja: <strong>{progress.bestFirst}/10</strong></p>}</div></main>;
  return <main className="shell page smart-page"><button className="back-link" onClick={()=>go({kind:"grade",gradeId:grade.id})}><ArrowLeft/> Prekini vežbanje</button><div className="session-head"><div><p className="eyebrow">PAMETNO VEŽBANJE · {grade.id}. RAZRED</p><h1>Zadatak {at+1} od 10</h1></div><div className="session-score"><small>TAČNO IZ PRVOG</small><strong>{first}/{at}</strong></div></div><Progress value={(at/10)*100}/>{liveMessage&&<p className="live-adaptive">{liveMessage}</p>}{currentTask&&<TaskCard key={currentTask.id} task={currentTask} number={at+1} onDone={finishOne}/>}</main>
}

function FocusPractice({grade,lessonId,skill,go}:{grade:Grade;lessonId:string;skill?:string;go:(r:Route)=>void}){
  const found=grade.areas.flatMap(area=>area.lessons.map(lesson=>({area,lesson}))).find(item=>item.lesson.id===lessonId);const [progress,save]=useGradeProgress(grade.id);const [tasks,setTasks]=useState<SessionTask[]>([]);const [results,setResults]=useState<SessionResult[]>([]);
  const targetSkill=skill??skillMasteries(progress.knowledgeAttempts,lessonId)[0]?.skill;const selected:Level=lessonMastery(progress.knowledgeAttempts,lessonId).band==="good"?"medium":"basic";
  const reset=()=>{const firstTask=pickAdaptiveTask(grade,selected,[],[],progress.recentTaskIds,progress.knowledgeAttempts,{lessonId,skill:targetSkill});setTasks(firstTask?[firstTask]:[]);setResults([]);window.scrollTo({top:0,behavior:"smooth"})};
  useEffect(()=>{if(tasks.length===0&&found)reset()},[lessonId]); // eslint-disable-line react-hooks/exhaustive-deps
  if(!found)return <main className="shell page"><button className="back-link" onClick={()=>go({kind:"grade",gradeId:grade.id})}><ArrowLeft/> {grade.id}. razred</button></main>;
  const current=tasks[results.length];const first=results.filter(item=>item.firstCorrect&&!item.usedSolution).length;const finished=results.length===5;const mastery=lessonMastery(progress.knowledgeAttempts,lessonId);const liveMessage=adaptiveMessage(selected,results);
  const finishOne=(result:{firstCorrect:boolean;usedSolution:boolean})=>{if(!current||results.some(item=>item.task.id===current.id))return;const next=[...results,{task:current,...result}];setResults(next);save(previous=>({...previous,knowledgeAttempts:appendKnowledgeAttempt(previous.knowledgeAttempts,asKnowledgeAttempt(current,lessonId,"focus",result)),recommendationCursor:next.length===5?previous.recommendationCursor+1:previous.recommendationCursor}));if(next.length<5){const nextTask=pickAdaptiveTask(grade,selected,next,tasks.map(item=>item.id),progress.recentTaskIds,[...progress.knowledgeAttempts,asKnowledgeAttempt(current,lessonId,"focus",result)],{lessonId,skill:targetSkill});if(nextTask)setTasks(items=>[...items,nextTask])}};
  if(finished)return <main className="shell page smart-page"><button className="back-link" onClick={()=>go({kind:"grade",gradeId:grade.id})}><ArrowLeft/> Moje znanje</button><div className="result-card focus-result"><span className="result-icon"><Target/></span><p className="eyebrow">CILJANO VEŽBANJE JE ZAVRŠENO</p><h1>{first}/5 iz prvog pokušaja</h1><p>{first>=4?"Odlično! Nova dobra rešenja popravljaju tvoju procenu.":first>=3?"Dobro napreduješ. Vežbaj još malo ovu temu.":"Vrati se kratko na lekciju, pa pokušaj ponovo."}</p><div className="focus-status"><span>{masteryDot(mastery.band)}</span><div><small>TRENUTNA PROCENA LEKCIJE</small><strong>{masteryLabel(mastery.band)}{mastery.score!==null?` · ${mastery.score}%`:""}</strong></div></div><div className="focus-actions"><Button size="lg" onClick={reset}><RotateCcw/> Vežbaj ponovo</Button><Button size="lg" variant="outline" onClick={()=>go({kind:"lesson",gradeId:grade.id,areaId:found.area.id,lessonId})}>Otvori lekciju</Button></div></div></main>;
  return <main className="shell page smart-page"><button className="back-link" onClick={()=>go({kind:"grade",gradeId:grade.id})}><ArrowLeft/> Moje znanje</button><div className="session-head"><div><p className="eyebrow">VEŽBAJ SLABU TAČKU</p><h1>{targetSkill??found.lesson.title}</h1><p className="focus-subtitle">5 kratkih zadataka · {results.length+1}. zadatak</p></div><div className="session-score"><small>TAČNO IZ PRVOG</small><strong>{first}/{results.length}</strong></div></div><Progress value={(results.length/5)*100}/>{liveMessage&&<p className="live-adaptive">{liveMessage}</p>}{current&&<TaskCard key={current.id} task={current} number={results.length+1} onDone={finishOne}/>}</main>
}

type TestResult={task:AreaTestTask;firstCorrect:boolean;usedSolution:boolean};
function AreaTestPage({grade,areaId,go}:{grade:Grade;areaId:string;go:(r:Route)=>void}){
  const area=grade.areas.find(a=>a.id===areaId)!;const definition=getAreaTest(grade.id,areaId);const [progress,save]=useGradeProgress(grade.id);const [tasks,setTasks]=useState<AreaTestTask[]>([]);const [at,setAt]=useState(0);const [results,setResults]=useState<TestResult[]>([]);const [started,setStarted]=useState(false);
  const start=()=>{setTasks(shuffle(definition));setAt(0);setResults([]);setStarted(true);window.scrollTo({top:0,behavior:"smooth"})};
  const finishOne=(result:{firstCorrect:boolean;usedSolution:boolean})=>{const task=tasks[at];if(!task||results.some(x=>x.task.id===task.id))return;const next=[...results,{task,...result}];setResults(next);save(previous=>{const knowledgeAttempts=appendKnowledgeAttempt(previous.knowledgeAttempts,asKnowledgeAttempt(task,task.lessonId,"test",result));if(at<tasks.length-1)return {...previous,knowledgeAttempts};const score=next.filter(item=>item.firstCorrect&&!item.usedSolution).length;const previousScore=previous.tests[areaId];return {...previous,knowledgeAttempts,tests:{...previous.tests,[areaId]:{last:score,best:Math.max(previousScore?.best??0,score)}}}});if(at<tasks.length-1)setAt(at+1);else setStarted(false)};
  const score=results.filter(x=>x.firstCorrect&&!x.usedSolution).length;const percentage=Math.round(score/Math.max(1,definition.length)*100);const best=Math.max(progress.tests[areaId]?.best??0,score);
  const weak=Object.entries(results.filter(r=>!r.firstCorrect||r.usedSolution).reduce<Record<string,number>>((acc,r)=>{acc[r.task.lessonId]=(acc[r.task.lessonId]??0)+1;return acc},{})).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([lessonId])=>area.lessons.find(l=>l.id===lessonId)).filter((lesson):lesson is Lesson=>Boolean(lesson));
  const recommendation=percentage>=90?"Odlično si savladao oblast.":percentage>=70?"Vrlo dobro. Ponovi još nekoliko pojmova.":percentage>=50?"Dobro, ali preporučujemo dodatno vežbanje.":"Vrati se na preporučene lekcije i pokušaj ponovo.";
  if(!started&&results.length===definition.length)return <main className="shell page test-page"><button className="back-link" onClick={()=>go({kind:"area",gradeId:grade.id,areaId})}><ArrowLeft/> {area.title}</button><div className="result-card test-result"><span className="result-icon"><Trophy/></span><p className="eyebrow">ZAVRŠNI TEST JE ZAVRŠEN</p><h1>Rezultat: {score}/{definition.length}</h1><div className="result-grid"><div><small>USPEŠNOST</small><strong>{percentage}%</strong></div><div><small>NAJBOLJI REZULTAT</small><strong>{best}/{definition.length}</strong></div></div><p>{recommendation}</p><Button size="lg" onClick={start}><RotateCcw/> Pokušaj ponovo</Button></div>{weak.length>0&&<div className="recommend-card weak-lessons"><h2>Preporučujemo da ponoviš:</h2>{weak.map(lesson=><button key={lesson.id} onClick={()=>go({kind:"lesson",gradeId:grade.id,areaId,lessonId:lesson.id})}>{lesson.title}<ArrowRight/></button>)}</div>}</main>;
  if(!started)return <main className="shell page test-page"><button className="back-link" onClick={()=>go({kind:"area",gradeId:grade.id,areaId})}><ArrowLeft/> {area.title}</button><div className="test-intro"><span><GraduationCap/></span><p className="eyebrow">ZAVRŠNI TEST</p><h1>{area.title}</h1><p>Deset različitih zadataka obuhvata glavne pojmove oblasti. Rezultat se računa prema prvom pokušaju.</p><div className="test-notes"><span>10 zadataka</span><span>Osnovni, srednji i napredni</span><span>Najbolji rezultat se čuva</span></div><Button size="lg" onClick={start}>Počni test <ArrowRight/></Button>{progress.tests[areaId]&&<p className="best">Najbolji rezultat: <strong>{progress.tests[areaId].best}/10</strong></p>}</div></main>;
  return <main className="shell page test-page"><button className="back-link" onClick={()=>go({kind:"area",gradeId:grade.id,areaId})}><ArrowLeft/> Prekini test</button><div className="session-head"><div><p className="eyebrow">ZAVRŠNI TEST · {grade.id}. RAZRED</p><h1>Zadatak {at+1} od {tasks.length}</h1></div><div className="session-score"><small>TAČNO IZ PRVOG</small><strong>{score}/{at}</strong></div></div><Progress value={(at/tasks.length)*100}/><TaskCard key={tasks[at].id} task={tasks[at]} number={at+1} onDone={finishOne}/></main>;
}

export default function HomePageRoot(){
  const [route,setRoute]=useState<Route>({kind:"home"});
  const rootRef=useRef<HTMLDivElement>(null);const {script,setScript}=useScriptPreference();useLocalizedDom(rootRef,script);
  useEffect(()=>{const sync=()=>setRoute(parseRoute());sync();window.addEventListener("hashchange",sync);return()=>window.removeEventListener("hashchange",sync)},[]);
  const go=(r:Route)=>{window.location.hash=routeHash(r);setRoute(r);window.scrollTo({top:0,behavior:"smooth"})};
  const grade="gradeId" in route?grades.find(g=>g.id===route.gradeId):undefined;
  return <ScriptProvider script={script}><div ref={rootRef}><Header route={route} go={go} script={script} setScript={setScript}/>{route.kind==="home"&&<HomePage go={go}/>} {route.kind==="grade"&&grade&&<GradePage key={grade.id} grade={grade} go={go}/>} {route.kind==="area"&&grade&&<AreaPage key={`${grade.id}-${route.areaId}`} grade={grade} areaId={route.areaId} go={go}/>} {route.kind==="lesson"&&grade&&<LessonPage key={`${grade.id}-${route.areaId}-${route.lessonId}`} grade={grade} areaId={route.areaId} lessonId={route.lessonId} go={go}/>} {route.kind==="smart"&&grade&&<SmartPractice key={grade.id} grade={grade} go={go}/>} {route.kind==="focus"&&grade&&<FocusPractice key={`${grade.id}-${route.lessonId}-${route.skill??""}`} grade={grade} lessonId={route.lessonId} skill={route.skill} go={go}/>} {route.kind==="test"&&grade&&<AreaTestPage key={`${grade.id}-${route.areaId}`} grade={grade} areaId={route.areaId} go={go}/>}<footer className="shell"><Logo go={go}/><p>Znanje raste svakim rešenim zadatkom.</p></footer></div></ScriptProvider>
}

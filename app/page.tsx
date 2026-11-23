"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Brain, Check, ChevronRight, GraduationCap, Lightbulb, Menu, Presentation, RotateCcw, Target, Trophy, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { months, monthLabels, Month, grades, Grade, GradeId, Lesson, Level, Task, TaskDiagram } from "./content";
import { tasksForLesson } from "./content/enhancements";
import { lessonWorkTasks } from "./content/october-work";
import { acceptProcedure, emptyLessonWork, emptyTask, LessonWork, normalizeAnswer, normalizeLessonWork, resumeLessonWork, submitTask, TaskResult, TaskSnapshot, workTotals } from "./lesson-work";
import { AreaTestTask, getAreaTest } from "./content/area-tests";
import { localize, localizeMathText, ScriptChoice, ScriptProvider, useCurrentScript, useLocalizedDom, useScriptPreference } from "./i18n";
import { mathHtml } from "./math-format";
import {LessonLearningContent} from "./lesson-learning";
import { PreciseDiagram } from "./math-diagrams";
import { PythagorasDiagram } from "./pythagoras-diagram";
import { adaptiveMessage, appendKnowledgeAttempt, areaMastery, AttemptSource, KnowledgeAttempt, knowledgeRecommendation, lessonMastery, MasteryBand, recommendedLevel, skillMasteries } from "./knowledge";
import { pickAdaptiveTask, practiceAreas, practiceGroupKey, practiceLessons, SessionResult, sessionPool, SessionTask, unlockedPracticeLessonIds, withTaskMetadata } from "./practice-engine";

type Route = { kind:"home" } | {kind:"grade"; gradeId:GradeId} | {kind:"area"; gradeId:GradeId; areaId:string; month?:Month} | {kind:"lesson";gradeId:GradeId;areaId:string;lessonId:string} | {kind:"smart";gradeId:GradeId;areaId:string} | {kind:"focus";gradeId:GradeId;lessonId:string;skill?:string} | {kind:"test";gradeId:GradeId;areaId:string};
type TestScore={best:number;last:number;total?:number};
type AreaPracticeProgress={bestFirst:number;bestTotal:number;lastFirst:number;lastTotal:number;recentTaskIds:string[]};
type GradeProgress = {completed:string[];lastLesson:string|null;bestFirst:number;lastFirst:number;recentTaskIds:string[];weak:Record<string,number>;tests:Record<string,TestScore>;knowledgeAttempts:KnowledgeAttempt[];recommendationCursor:number;practiceByArea:Record<string,AreaPracticeProgress>;lessonWork:Record<string,LessonWork>};
const emptyProgress:GradeProgress={completed:[],lastLesson:null,bestFirst:0,lastFirst:0,recentTaskIds:[],weak:{},tests:{},knowledgeAttempts:[],recommendationCursor:0,practiceByArea:{},lessonWork:{}};
const emptyAreaPractice=():AreaPracticeProgress=>({bestFirst:0,bestTotal:0,lastFirst:0,lastTotal:0,recentTaskIds:[]});
function normalizePracticeByArea(value:unknown){
  if(!value||typeof value!=="object")return {};
  return Object.fromEntries(Object.entries(value as Record<string,Partial<AreaPracticeProgress>>).map(([key,item])=>[key,{bestFirst:Number.isFinite(item?.bestFirst)?Number(item.bestFirst):0,bestTotal:Number.isFinite(item?.bestTotal)?Number(item.bestTotal):0,lastFirst:Number.isFinite(item?.lastFirst)?Number(item.lastFirst):0,lastTotal:Number.isFinite(item?.lastTotal)?Number(item.lastTotal):0,recentTaskIds:Array.isArray(item?.recentTaskIds)?item.recentTaskIds.filter(id=>typeof id==="string").slice(-30):[]}])) as Record<string,AreaPracticeProgress>;
}

function MathText({children,className=""}:{children:string;className?:string}){const script=useCurrentScript();return <span className={`math ${className}`} dangerouslySetInnerHTML={{__html:mathHtml(localizeMathText(children,script))}}/>}

function parseRoute():Route{
  if(typeof window==="undefined") return {kind:"home"};
  const p=window.location.hash.replace(/^#\/?/,"").split("/").filter(Boolean);
  const g=Number(p[1]) as GradeId;
  if(p[0]==="razred" && [6,7,8].includes(g)) return {kind:"grade",gradeId:g};
  if(p[0]==="oblast" && [6,7,8].includes(g) && p[2]) return {kind:"area",gradeId:g,areaId:p[2],...(months.includes(p[3] as Month)?{month:p[3] as Month}:{})};
  if(p[0]==="lekcija" && [6,7,8].includes(g) && p[2] && p[3]) return {kind:"lesson",gradeId:g,areaId:p[2],lessonId:p[3]};
  if(p[0]==="pametno" && [6,7,8].includes(g) && p[2]) return {kind:"smart",gradeId:g,areaId:p[2]};
  if(p[0]==="pametno" && [6,7,8].includes(g)) return {kind:"grade",gradeId:g};
  if(p[0]==="slaba-tacka" && [6,7,8].includes(g) && p[2]) return {kind:"focus",gradeId:g,lessonId:p[2],skill:p[3]?decodeURIComponent(p.slice(3).join("/")):undefined};
  if(p[0]==="test" && [6,7,8].includes(g) && p[2]) return {kind:"test",gradeId:g,areaId:p[2]};
  return {kind:"home"};
}

function routeHash(r:Route){
  if(r.kind==="home") return "#/";
  if(r.kind==="grade") return `#/razred/${r.gradeId}`;
  if(r.kind==="area") return `#/oblast/${r.gradeId}/${r.areaId}${r.month?"/"+r.month:""}`;
  if(r.kind==="lesson") return `#/lekcija/${r.gradeId}/${r.areaId}/${r.lessonId}`;
  if(r.kind==="smart") return `#/pametno/${r.gradeId}/${r.areaId}`;
  if(r.kind==="focus") return `#/slaba-tacka/${r.gradeId}/${r.lessonId}${r.skill?`/${encodeURIComponent(r.skill)}`:""}`;
  return `#/test/${r.gradeId}/${r.areaId}`;
}

function useGradeProgress(gradeId:GradeId){
  const key=`matematikon68-progress-v1-${gradeId}`;
  const [progress,setProgress]=useState<GradeProgress>(emptyProgress);
  const [loaded,setLoaded]=useState(false);
  // Reading saved progress after hydration keeps the server and first client render identical.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(()=>{try{const raw=localStorage.getItem(key);const parsed=raw?JSON.parse(raw):{};setProgress({...emptyProgress,...parsed,completed:Array.isArray(parsed.completed)?parsed.completed:[],recentTaskIds:Array.isArray(parsed.recentTaskIds)?parsed.recentTaskIds:[],weak:parsed.weak??{},tests:parsed.tests??{},knowledgeAttempts:Array.isArray(parsed.knowledgeAttempts)?parsed.knowledgeAttempts:[],recommendationCursor:Number.isFinite(parsed.recommendationCursor)?parsed.recommendationCursor:0,practiceByArea:normalizePracticeByArea(parsed.practiceByArea),lessonWork:normalizeLessonWork(parsed.lessonWork)})}catch{setProgress(emptyProgress)}finally{setLoaded(true)}},[key]);
  const save=useCallback((update:GradeProgress|((previous:GradeProgress)=>GradeProgress))=>{setProgress(previous=>{const next=typeof update==="function"?update(previous):update;localStorage.setItem(key,JSON.stringify(next));return next})},[key]);
  return [progress,save,loaded] as const;
}

function Logo({go}:{go:(r:Route)=>void}){return <button data-no-transliterate className="brand" onClick={()=>go({kind:"home"})}><span>∑</span><b>Matematik<span>ON</span></b><small>6–8</small></button>}

function Header({route,go,script,setScript}:{route:Route;go:(r:Route)=>void;script:ScriptChoice;setScript:(s:ScriptChoice)=>void}){
  const [open,setOpen]=useState(false);
  const item=(label:string,r:Route,active:boolean)=><button key={label} className={active?"active":""} onClick={()=>{go(r);setOpen(false)}}>{label}</button>;
  return <header className="site-header"><div className="nav-wrap"><Logo go={go}/><nav className={open?"open":""} aria-label="Glavna navigacija">
    {item("Početna",{kind:"home"},route.kind==="home")}
    {[6,7,8].map(id=>item(`${id}. razred`,{kind:"grade",gradeId:id as GradeId},"gradeId" in route&&route.gradeId===id))}
  </nav><button className="menu-toggle" aria-label={open?"Zatvori meni":"Otvori meni"} onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button><div data-no-transliterate className="script-switch" aria-label="Избор писма"><button className={script==="cyrl"?"active":""} onClick={()=>setScript("cyrl")} aria-pressed={script==="cyrl"}>Ћир</button><span>|</span><button className={script==="latn"?"active":""} onClick={()=>setScript("latn")} aria-pressed={script==="latn"}>Lat</button></div></div></header>
}

function HomePage({go}:{go:(r:Route)=>void}){return <main>
  <section className="home-hero"><div className="shell hero-grid"><div><p className="eyebrow">MATEMATIKA ZA STARIJE RAZREDE</p><h1>Izaberi razred.<br/><em>Uči korak po korak.</em></h1><p>Jasne lekcije, pravilna matematika i vežbanje koje pamti tvoj napredak.</p></div><div className="symbol-board" aria-hidden="true"><span>√</span><span className="board-frac"><i>3</i><i>5</i></span><span>∠</span><b>6–8</b></div></div></section>
  <section className="shell grade-choice"><div className="section-heading"><div><p className="eyebrow">PRVO POLUGODIŠTE</p><h2>Koji razred biraš?</h2></div><p>Odaberi razred i odmah nastavi na dostupno gradivo.</p></div><div className="grade-grid">{grades.map((g,i)=><button key={g.id} className={`grade-card g${g.id}`} onClick={()=>go({kind:"grade",gradeId:g.id})}><span className="grade-number">0{i+1}</span><div><strong>{g.id}.</strong><h3>RAZRED</h3><p>{g.description}</p></div><ChevronRight/></button>)}</div></section>
  </main>}

function ProgressBlock({grade,progress}:{grade:Grade;progress:GradeProgress}){
  const active=grade.areas.flatMap(a=>a.lessons);const total=active.length; const done=active.filter(lesson=>progress.completed.includes(lesson.id)).length; const pct=Math.round(done/total*100);
  return <div className="progress-card"><div><span>Napredak u {grade.id}. razredu</span><strong>{pct}%</strong></div><Progress value={pct}/><p>{done} od {total} završenih lekcija</p></div>
}

const masteryLabel=(band:MasteryBand)=>band==="good"?"Dobro savladano":band==="practice"?"Potrebno još vežbe":band==="weak"?"Slaba tačka":"Još nije procenjeno";
const masteryDot=(band:MasteryBand)=>band==="good"?"🟢":band==="practice"?"🟡":band==="weak"?"🔴":"⚪";
const calendarMonth=(area:Grade["areas"][number],lesson:Lesson):Month=>lesson.month??area.month??"september";
const calendarMonthLabel=(month:Month)=>monthLabels[month];
function areaPeriod(area:Grade["areas"][number]){
  return months.filter(month=>area.lessons.some(l=>calendarMonth(area,l)===month)).map(calendarMonthLabel).join(" + ");
};

function KnowledgeDashboard({grade,progress,go}:{grade:Grade;progress:GradeProgress;go:(r:Route)=>void}){
  const mainAreas=grade.areas.filter(area=>!area.review);
  const recommendation=knowledgeRecommendation(grade,progress.knowledgeAttempts,progress.recommendationCursor);
  const recommendedLesson=recommendation.lessonId?mainAreas.flatMap(area=>area.lessons.map(lesson=>({area,lesson}))).find(item=>item.lesson.id===recommendation.lessonId):undefined;
  const advancedArea=mainAreas.find(area=>area.lessons.some(lesson=>lesson.id===progress.lastLesson))??mainAreas[0];
  const openRecommendation=()=>{
    if(recommendation.kind==="advanced"&&advancedArea)go({kind:"smart",gradeId:grade.id,areaId:advancedArea.id});
    else if(recommendation.kind==="focus"&&recommendation.lessonId)go({kind:"focus",gradeId:grade.id,lessonId:recommendation.lessonId,skill:recommendation.skill});
    else if(recommendedLesson)go({kind:"lesson",gradeId:grade.id,areaId:recommendedLesson.area.id,lessonId:recommendedLesson.lesson.id});
  };
  return <section className="knowledge-section"><div className="section-heading compact"><div><p className="eyebrow">LIČNI PREGLED</p><h2>Moje znanje</h2></div><p>Procena koristi tvoje prve pokušaje i postepeno se menja dok napreduješ.</p></div>
    <div className="knowledge-card">{mainAreas.map(area=>{
      const mastery=areaMastery(progress.knowledgeAttempts,area.lessons.map(lesson=>lesson.id));
      const savedTest=progress.tests[area.id];const testTotal=(savedTest?.total??getAreaTest(grade.id,area.id).length)||10;
      const fallback=savedTest?Math.round(savedTest.last/testTotal*100):null;
      const score=mastery.score??fallback;
      return <div className="knowledge-area" key={area.id}><div className="knowledge-area-head"><div><small>{areaPeriod(area)} · OBLAST</small><h3>{area.title}</h3></div><strong>{score===null?"—":`${score}%`}</strong></div><Progress value={score??0}/>{score===null&&<p className="knowledge-empty">Reši nekoliko zadataka da dobiješ prvu procenu.</p>}
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
  const monthAreas=(month:Month)=>grade.areas.filter(area=>!area.review&&area.lessons.some(lesson=>calendarMonth(area,lesson)===month)).sort((a,b)=>(a.monthOrder?.[month]??100)-(b.monthOrder?.[month]??100));
  const renderArea=(a:Grade["areas"][number],i:number,month?:Month)=>{const visible=month?a.lessons.filter(lesson=>calendarMonth(a,lesson)===month):a.lessons;const done=visible.filter(l=>progress.completed.includes(l.id)).length;const pct=Math.round(done/Math.max(1,visible.length)*100);const test=progress.tests[a.id];const total=(test?.total??getAreaTest(grade.id,a.id).length)||10;const short=month?a.monthShort?.[month]??a.short:a.short;return <button className={a.review?"area-card review":"area-card"} key={`${a.id}-${month??"review"}`} onClick={()=>go({kind:"area",gradeId:grade.id,areaId:a.id,month})}><span>{a.review?"↺":String(i+1).padStart(2,"0")}</span><div><small>{a.review?"KRATKO OBNAVLJANJE":`${calendarMonthLabel(month??"september")}`}</small><h3>{a.title}</h3><p>{short}</p>{test&&<p className="area-test-score">Najbolji rezultat: {test.best}/{total}</p>}<div className="mini-progress"><i style={{width:`${pct}%`}}/></div></div><b>{pct}%</b></button>};
  return <main className="shell page"><div className="grade-mast" style={{"--grade":grade.accent} as React.CSSProperties}><p className="eyebrow">PRVO POLUGODIŠTE · {grade.id}. RAZRED</p><h1>{grade.id}. razred</h1><p>{grade.description}</p></div>
    <div className="dashboard-grid"><ProgressBlock grade={grade} progress={progress}/><button className="continue-card" onClick={()=>go({kind:"lesson",gradeId:grade.id,areaId:cont.a.id,lessonId:cont.l.id})}><span><BookOpen/></span><div><small>{progress.lastLesson?"NASTAVI UČENJE":"PRVA LEKCIJA"}</small><strong>{cont.l.title}</strong><p>{cont.a.title}</p></div><ArrowRight/></button></div>
    <KnowledgeDashboard grade={grade} progress={progress} go={go}/>
    <div className="section-heading compact"><div><p className="eyebrow">DOSTUPNO</p><h2>Oblasti</h2></div></div>
    {months.map(month=><section key={month} className="month-block"><div className="month-heading"><span>{calendarMonthLabel(month)}</span></div><div className="area-grid">
      {month==="september"&&grade.areas.filter(a=>a.review).map((area,index)=>renderArea(area,index))}
      {monthAreas(month).map((area,index)=>renderArea(area,index,month))}
    </div></section>)}
  </main>
}

function AreaPage({grade,areaId,month,go}:{grade:Grade;areaId:string;month?:Month;go:(r:Route)=>void}){
  const area=grade.areas.find(a=>a.id===areaId)!; const [progress]=useGradeProgress(grade.id); const done=area.lessons.filter(l=>progress.completed.includes(l.id)).length;const pct=Math.round(done/area.lessons.length*100);const unlockedTestLessons=new Set(unlockedPracticeLessonIds(grade,area.id,progress.completed,progress.lastLesson));const test=getAreaTest(grade.id,area.id).filter(task=>unlockedTestLessons.has(task.lessonId));const testScore=progress.tests[area.id];
  const testTotal=(testScore?.total??test.length)||10;const assessment=area.assessment==="mini"?"Mini-provera":"Završni test";
  return <main className="shell page"><button className="back-link" onClick={()=>go({kind:"grade",gradeId:grade.id})}><ArrowLeft/> {grade.id}. razred</button><div className="area-head"><p className="eyebrow">{area.review?"KRATKO OBNAVLJANJE":`${month?calendarMonthLabel(month):areaPeriod(area)} · OBLAST`}</p><h1>{area.title}</h1><p>{area.short}</p><div className="area-progress-line"><Progress value={pct}/><strong>{pct}%</strong></div><div className="area-status"><span>{done} od {area.lessons.length} završenih lekcija</span>{testScore&&<span><Trophy/> {assessment}: {testScore.last}/{testTotal} · najbolji {testScore.best}/{testTotal}</span>}</div></div>
    <div className="lesson-grid">{area.lessons.filter(l=>!month||calendarMonth(area,l)===month).map((l,i)=><button key={l.id} className={progress.completed.includes(l.id)?"lesson-card completed":"lesson-card"} onClick={()=>go({kind:"lesson",gradeId:grade.id,areaId:area.id,lessonId:l.id})}><span>{progress.completed.includes(l.id)?<Check/>:String(i+1).padStart(2,"0")}</span><div><small>{progress.completed.includes(l.id)?"ZAVRŠENO":`${calendarMonthLabel(calendarMonth(area,l))} · LEKCIJA ${i+1}`}</small><h2>{l.title}</h2></div><ChevronRight/></button>)}</div><div className="area-tools"><button className="area-tool-card smart" onClick={()=>go({kind:"smart",gradeId:grade.id,areaId:area.id})}><span><Brain/></span><div><small>DO 10 ZADATAKA</small><h2>Pametno vežbanje</h2><p>Vežbaj samo dostupne lekcije ove oblasti.</p></div><ChevronRight/></button>{!area.review&&test.length>0&&<button className="area-tool-card test" onClick={()=>go({kind:"test",gradeId:grade.id,areaId:area.id})}><span><GraduationCap/></span><div><small>{assessment.toUpperCase()} · {test.length} ZADATAKA</small><h2>{assessment}</h2><p>{testScore?`Najbolji rezultat: ${testScore.best}/${testTotal}`:"Proveri znanje iz obrađenih lekcija."}</p></div><ChevronRight/></button>}</div>
  </main>
}

function Diagram({type}:{type:Lesson["diagram"]}){
  const script=useCurrentScript();const label=(value:string)=>localize(value,script);
  if(type==="tales") return <figure className="diagram"><svg data-no-transliterate viewBox="0 0 520 260" role="img" aria-label={label("Talesova teorema: duž MN paralelna je duži BC")}><path d="M85 220 L260 35 L445 220 Z"/><path className="accent" d="M158 143 L369 143"/><circle cx="260" cy="35" r="4"/><text x="262" y="25">A</text><text x="72" y="235">B</text><text x="445" y="235">C</text><text x="142" y="137">M</text><text x="374" y="137">N</text><text x="205" y="130">MN ∥ BC</text></svg><figcaption>Paralela MN deli krake trougla proporcionalno.</figcaption></figure>;
  if(type==="similarity") return <figure className="diagram"><svg data-no-transliterate viewBox="0 0 560 240" role="img" aria-label={label("Dva slična trougla")}><path d="M35 205 L145 45 L230 205 Z"/><path className="accent" d="M300 205 L455 20 L535 205 Z"/><text x="140" y="34">A</text><text x="22" y="222">B</text><text x="232" y="222">C</text><text x="450" y="15">A₁</text><text x="284" y="222">B₁</text><text x="536" y="222">C₁</text><text x="250" y="120">∼</text></svg><figcaption>Jednaki uglovi i proporcionalne stranice.</figcaption></figure>;
  if(type==="scale") return <figure className="diagram"><svg data-no-transliterate viewBox="0 0 520 220" role="img" aria-label={label("Poređenje duži u razmeri")}><path d="M55 70 H455"/><path className="accent" d="M55 155 H255"/><path d="M55 58 V82 M455 58 V82 M55 143 V167 M255 143 V167"/><text x="235" y="55">a</text><text x="145" y="140">b</text><text x="235" y="205">a : b</text></svg><figcaption>Razmeru duži računamo tek kada su u istoj jedinici.</figcaption></figure>;
  if(type==="triangle") return <figure className="diagram"><svg data-no-transliterate viewBox="0 0 520 250" role="img" aria-label={label("Elementi trougla ABC")}><path d="M70 210 L260 35 L455 210 Z"/><path className="accent" d="M70 210 H455"/><text x="260" y="25">A</text><text x="54" y="230">B</text><text x="465" y="230">C</text><text x="355" y="116">b</text><text x="163" y="116">c</text><text x="260" y="235">a</text></svg><figcaption>Stranica a nalazi se naspram temena A.</figcaption></figure>;
  if(type==="direct-proportion") return <figure className="diagram"><svg data-no-transliterate viewBox="0 0 520 260" role="img" aria-label={label("Grafik funkcije y jednako 2x")}><path d="M45 130 H480 M260 25 V235"/><path className="accent" d="M155 235 L365 25"/><circle cx="260" cy="130" r="5"/><circle cx="330" cy="60" r="5"/><text x="492" y="135">x</text><text x="267" y="20">y</text><text x="353" y="56">(2,4)</text><text x="305" y="112">y=2x</text></svg><figcaption>Grafik funkcije y=kx prolazi kroz koordinatni početak.</figcaption></figure>;
  if(type==="pythagoras") return <figure className="diagram"><svg data-no-transliterate viewBox="0 0 520 250" role="img" aria-label={label("Pravougli trougao")}><path d="M85 205 V45 L435 205 Z"/><path className="accent" d="M85 180 H110 V205"/><text x="60" y="128">a</text><text x="262" y="230">b</text><text x="278" y="112">c</text><text x="125" y="75">a²+b²=c²</text></svg><figcaption>Katete grade pravi ugao, a hipotenuza je naspram njega.</figcaption></figure>;
  if(type==="quadrilateral") return <figure className="diagram"><svg data-no-transliterate viewBox="0 0 520 285" role="img" aria-label={label("Četvorougao ABCD podeljen dijagonalom AC na dva pravougla trougla")}><path d="M75 220 L75 55 L275 55 L440 255 Z"/><path className="accent" d="M75 220 L275 55"/><path d="M75 80 H100 V55 M261 66 L273 80 L286 69"/><text x="55" y="240">A</text><text x="55" y="48">B</text><text x="278" y="45">C</text><text x="446" y="270">D</text><text x="155" y="125">AC</text></svg><figcaption>Dijagonala AC daje pravougle trouglove kada su dati pravi uglovi kod B i C.</figcaption></figure>;
  if(type==="space") return <figure className="diagram"><svg data-no-transliterate viewBox="0 0 520 285" role="img" aria-label={label("Kocka i odnosi u prostoru")}><path d="M105 90 H335 V245 H105 Z M180 35 H410 V190 H335 M180 35 L105 90 M410 35 L335 90 M410 190 L335 245"/><path className="accent dashed" d="M105 245 L180 190 V35 M180 190 H410"/><text x="91" y="264">A</text><text x="341" y="264">B</text><text x="420" y="205">C</text><text x="170" y="211">D</text><text x="96" y="82">A₁</text><text x="341" y="82">B₁</text></svg><figcaption>Pune i isprekidane ivice zajedno opisuju isti prostorni model.</figcaption></figure>;
  return null;
}

function LessonInteractive({type}:{type:NonNullable<Lesson["interactive"]>}){
  const [first,setFirst]=useState(type==="triangle-angles"?50:2);const [second,setSecond]=useState(type==="triangle-angles"?60:3);const [spaceCase,setSpaceCase]=useState(0);
  if(type==="triangle-angles"){
    const third=180-first-second;return <article className="learning-interactive"><div><small>ISTRAŽI</small><h3>Menjaj dva ugla</h3><p>Treći ugao se menja tako da zbir ostane 180°.</p></div><div className="slider-grid"><label>α = {first}°<input type="range" min="10" max="150" value={first} onChange={e=>setFirst(Math.min(Number(e.target.value),169-second))}/></label><label>β = {second}°<input type="range" min="10" max="150" value={second} onChange={e=>setSecond(Math.min(Number(e.target.value),169-first))}/></label></div><PreciseDiagram diagram={{type:"triangle",variant:"angles",labels:{alpha:first+"°",beta:second+"°",gamma:third+"°"}}}/><strong data-no-transliterate>γ = {third}°</strong></article>;
  }
  if(type==="direct-proportion"){
    const k=first;const x=second;return <article className="learning-interactive"><div><small>ISTRAŽI</small><h3>Menjaj k i x</h3><p>Posmatraj kako se menja vrednost y=kx.</p></div><div className="slider-grid"><label data-no-transliterate>k = {k}<input type="range" min="-4" max="4" value={k} onChange={e=>setFirst(Number(e.target.value)|| (k>0?-1:1))}/></label><label data-no-transliterate>x = {x}<input type="range" min="-5" max="5" value={x} onChange={e=>setSecond(Number(e.target.value))}/></label></div><PreciseDiagram diagram={{type:"graph",k,point:{x,y:k*x}}}/><strong data-no-transliterate>y = {k*x}</strong></article>;
  }
  if(type==="pythagoras"){
    const a=Math.max(1,first),b=Math.max(1,second),c=Math.sqrt(a*a+b*b);return <article className="learning-interactive"><div><small>ISTRAŽI</small><h3>Menjaj katete</h3><p>Hipotenuza se računa Pitagorinom teoremom.</p></div><div className="slider-grid"><label data-no-transliterate>a = {a}<input type="range" min="1" max="15" value={a} onChange={e=>setFirst(Number(e.target.value))}/></label><label data-no-transliterate>b = {b}<input type="range" min="1" max="15" value={b} onChange={e=>setSecond(Number(e.target.value))}/></label></div><PythagorasDiagram diagram={{type:"pythagoras",variant:"right",labels:{a:String(a),b:String(b),c:"c"}}} label="Pravougli trougao" caption="Katete su normalne; hipotenuza je naspram pravog ugla."/><strong data-no-transliterate>c ≈ {c.toFixed(2).replace(".",",")}</strong></article>;
  }
  const cases=[{title:"Seku se",text:"Prave imaju jednu zajedničku tačku."},{title:"Paralelne",text:"Prave su u istoj ravni i ne seku se."},{title:"Mimoilazne",text:"Prave nisu u istoj ravni."}];
  return <article className="learning-interactive"><div><small>ISTRAŽI</small><h3>Odnosi pravih</h3><p>{cases[spaceCase].text}</p></div><div className="case-picker">{cases.map((item,index)=><button key={item.title} className={spaceCase===index?"active":""} onClick={()=>setSpaceCase(index)}>{item.title}</button>)}</div><strong>{cases[spaceCase].title}</strong></article>;
}

function TaskDiagramView({diagram}:{diagram:TaskDiagram}){
  const script=useCurrentScript();
  if(diagram.type==="pythagoras")return <PythagorasDiagram diagram={diagram} label={localize("Pravougli trougao i njegove duži",script)} caption={localize("Šematski crtež — poznate dužine čitaj iz oznaka.",script)}/>;
  return <PreciseDiagram diagram={diagram} task/>;
}

function TaskCard({task,onDone,number,total,snapshot,onSnapshot}:{task:Task;onDone:(result:TaskResult)=>void;number?:number;total?:number;snapshot?:TaskSnapshot;onSnapshot?:(state:TaskSnapshot)=>void}){
  const [local,setLocal]=useState<TaskSnapshot>(emptyTask);const state=snapshot??local;const {value,attempts,hint,solution}=state;const finished=!!state.result;
  const change=(next:TaskSnapshot)=>{if(onSnapshot)onSnapshot(next);else setLocal(next)};
  const check=()=>{const next=submitTask(state,task);change(next);if(next.result&&!state.result)onDone(next.result)};
  const negativeAllowed=task.kind==="input"&&normalizeAnswer(task.answer).startsWith("-");const inputId=`answer-${task.id.replace(/[^a-zA-Z0-9_-]/g,"-")}`;
  const toggleMinus=()=>{const clean=value.replace(/^[−-]/,"");change({...state,value:/^[−-]/.test(value)?clean:`-${clean}`})};
  return <article data-task-id={task.id} className={`task-card ${finished?"is-correct":""}`}><div className="task-top"><span>{number?`Zadatak ${number}${total?` od ${total}`:""}`:"Proveri znanje"}</span><small className={`level ${task.level}`}>{task.level==="basic"?"Osnovni":task.level==="medium"?"Srednji":"Napredni"}</small></div><p><MathText>{task.prompt}</MathText></p>{task.diagram&&<TaskDiagramView diagram={task.diagram}/>} {task.math&&<div className="task-math"><MathText>{task.math}</MathText></div>}
    {task.kind==="choice"?<div className="choices">{task.choices!.map(c=><button key={c} disabled={finished} className={value===c?"selected":""} onClick={()=>change({...state,value:c})}><MathText>{c}</MathText></button>)}</div>:<div className="answer-input"><label htmlFor={inputId}>Odgovor</label><div className="input-row"><input id={inputId} type="text" value={value} disabled={finished} onChange={e=>change({...state,value:e.target.value})} onKeyDown={e=>{if(e.key==="Enter")check()}} inputMode={negativeAllowed?"text":"decimal"} autoCapitalize="off" autoCorrect="off" spellCheck={false} placeholder="Upiši odgovor"/>{negativeAllowed&&<button type="button" className="minus-key" disabled={finished} onClick={toggleMinus} aria-label="Unesi ili ukloni znak minus">−</button>}</div></div>}
    {!finished&&<div className="task-actions"><Button onClick={check} disabled={!value.trim()}>Proveri</Button>{attempts>=2&&!hint&&<Button variant="outline" onClick={()=>change({...state,hint:true})}><Lightbulb/> Nagoveštaj</Button>}{attempts>=2&&<Button variant="ghost" onClick={()=>change({...state,solution:true})}>Prikaži postupak</Button>}</div>}
    {state.feedback&&<p className={finished?"feedback good":"feedback bad"}>{finished?"Tačno! Bravo.":"Nije tačno. Pokušaj ponovo."}</p>}{hint&&<p className="hint"><Lightbulb/> <MathText>{task.hint}</MathText></p>}{solution&&<div className="solution"><strong>Postupak</strong><MathText>{task.solution}</MathText>{!finished&&<Button onClick={()=>{const next=acceptProcedure(state);change(next);onDone(next.result!)}}>Razumem, nastavi</Button>}</div>}
  </article>
}

function LessonWorkSequence({lesson,tasks,progress,save,loaded}:{lesson:Lesson;tasks:Task[];progress:GradeProgress;save:(update:(previous:GradeProgress)=>GradeProgress)=>void;loaded:boolean}){
  const ids=tasks.map(task=>task.id);const work=resumeLessonWork(lesson.id,tasks,progress.knowledgeAttempts,progress.lessonWork[lesson.id]);const at=Math.min(work.current,tasks.length);const totals=workTotals(work,ids);
  const move=(current:number)=>save(previous=>({...previous,lessonWork:{...previous.lessonWork,[lesson.id]:{...resumeLessonWork(lesson.id,tasks,previous.knowledgeAttempts,previous.lessonWork[lesson.id]),taskIds:ids,current}}}));
  const snapshot=(task:Task,next:TaskSnapshot)=>save(previous=>{
    const old=resumeLessonWork(lesson.id,tasks,previous.knowledgeAttempts,previous.lessonWork[lesson.id]);const freshResult=!!next.result&&!old.tasks[task.id]?.result;
    const updated={...old,taskIds:ids,tasks:{...old.tasks,[task.id]:next}};const finished=workTotals(updated,ids).final===tasks.length;
    return {...previous,lessonWork:{...previous.lessonWork,[lesson.id]:updated},completed:finished&&!previous.completed.includes(lesson.id)?[...previous.completed,lesson.id]:previous.completed,knowledgeAttempts:freshResult?appendKnowledgeAttempt(previous.knowledgeAttempts,asKnowledgeAttempt(task,lesson.id,"lesson",next.result!)):previous.knowledgeAttempts};
  });
  if(!loaded)return <div className="content-card">Učitavanje sačuvanog rada…</div>;
  return <div className="lesson-work"><div className="work-progress"><span>Rešeno: {totals.final}/{totals.total}</span><Progress value={totals.final/totals.total*100}/></div>
    {at<tasks.length?<><TaskCard key={tasks[at].id} task={tasks[at]} number={at+1} total={tasks.length} snapshot={work.tasks[tasks[at].id]??emptyTask()} onSnapshot={next=>snapshot(tasks[at],next)} onDone={()=>{}}/><div className="work-navigation"><Button variant="outline" disabled={at===0} onClick={()=>move(at-1)}><ArrowLeft/>Prethodni zadatak</Button><Button disabled={!work.tasks[tasks[at].id]?.result} onClick={()=>move(at+1)}>{at===tasks.length-1?"Pogledaj rezultat":"Sledeći zadatak"}<ArrowRight/></Button></div></>:<div className="content-card work-result"><Check/><h2>Odlično, završio si rad!</h2><p>Iz prvog pokušaja: <strong>{totals.first}/{totals.total}</strong></p><p>Konačno rešeno: <strong>{totals.final}/{totals.total}</strong></p><p>Napredak je sačuvan. Preporuku za vežbanje pogledaj u „Moje znanje“.</p><Button variant="outline" onClick={()=>move(0)}>Pregledaj odgovore</Button><Button onClick={()=>save(previous=>({...previous,lessonWork:{...previous.lessonWork,[lesson.id]:emptyLessonWork(ids,(previous.lessonWork[lesson.id]?.run??0)+1)}}))}><RotateCcw/>Pokušaj ponovo</Button></div>}
  </div>;
}

function asKnowledgeAttempt(task:Task,lessonId:string,source:AttemptSource,result:TaskResult):KnowledgeAttempt{
  const measured=withTaskMetadata(task);return {taskId:measured.id,lessonId,skill:measured.skill,taskType:measured.taskType,errorCategory:measured.errorCategory,level:measured.level,source,firstCorrect:result.firstCorrect,firstAttemptCorrect:result.firstCorrect,usedSolution:result.usedSolution,attemptCount:result.attemptCount,attemptsCount:result.attemptCount,finalCorrect:result.finalCorrect,at:Date.now()};
}

function LessonPage({grade,areaId,lessonId,go}:{grade:Grade;areaId:string;lessonId:string;go:(r:Route)=>void}){
  const area=grade.areas.find(a=>a.id===areaId)!;const lesson=area.lessons.find(l=>l.id===lessonId)!;const lessonTasks=lessonWorkTasks(lesson.id,tasksForLesson(lesson.id,lesson.tasks));const [progress,save,loaded]=useGradeProgress(grade.id);const [classMode,setClassMode]=useState(false);
  const workSectionRef=useRef<HTMLElement>(null);
  // The URL hash belongs to the router. Moving within a lesson must not replace it.
  const openLessonWork=()=>{const section=workSectionRef.current;if(!section)return;section.scrollIntoView({behavior:"instant",block:"start"});section.focus({preventScroll:true})};
  useEffect(()=>{if(loaded)save(previous=>({...previous,lastLesson:lesson.id}))},[lesson.id,loaded,save]);
  const all=area.lessons;const index=all.findIndex(l=>l.id===lesson.id);
  const jump=(l:Lesson)=>go({kind:"lesson",gradeId:grade.id,areaId:area.id,lessonId:l.id});
  return <main className={classMode?"lesson-page class-mode":"lesson-page"}><nav className="lesson-nav"><button disabled={index===0} onClick={()=>jump(all[index-1])}><ArrowLeft/> <span>Prethodna lekcija</span></button><button onClick={()=>go({kind:"area",gradeId:grade.id,areaId:area.id})}><BookOpen/><span>Pregled oblasti</span></button><button disabled={index===all.length-1} onClick={()=>jump(all[index+1])}><span>Sledeća lekcija</span><ArrowRight/></button></nav>
    <div className="lesson-shell"><header className="lesson-title"><div><p className="eyebrow">{grade.id}. RAZRED · {area.title.toUpperCase()}</p><h1>{lesson.title}</h1></div><div className="lesson-entry-actions"><button type="button" className="lesson-task-jump" aria-controls={`lesson-work-${lesson.id}`} onClick={openLessonWork}>Pređi na zadatke</button><Button className="class-mode-toggle" variant={classMode?"default":"outline"} aria-pressed={classMode} onClick={()=>setClassMode(value=>!value)}><Presentation/>{classMode?"Završi čas":"Pokreni čas"}</Button></div></header>
      <section className="lesson-layout"><div className="learn-column"><LessonLearningContent key={lesson.id} lesson={lesson}/><details className="lesson-explore"><summary>Primer sa postupkom</summary><p><MathText>{lesson.solved.question}</MathText></p><ol>{lesson.solved.steps.map((step,i)=><li key={i}><MathText>{step}</MathText></li>)}</ol></details>{lesson.interactive&&<details className="lesson-explore" open={classMode}><summary>Istraži menjajući podatke</summary><LessonInteractive type={lesson.interactive}/></details>}</div>
      <aside ref={workSectionRef} className="october-work-aside" id={`lesson-work-${lesson.id}`} tabIndex={-1}><div className="quiz-head"><p className="eyebrow">10 ZADATAKA ZA RAD</p><h2>Probaj samostalno</h2><p>Pogrešan odgovor nije kraj — pokušaj ponovo.</p></div><LessonWorkSequence lesson={lesson} tasks={lessonTasks} progress={progress} save={save} loaded={loaded}/></aside></section>
    </div><nav className="lesson-nav bottom"><button disabled={index===0} onClick={()=>jump(all[index-1])}><ArrowLeft/> <span>Prethodna</span></button><button onClick={()=>go({kind:"area",gradeId:grade.id,areaId:area.id})}><BookOpen/><span>Pregled oblasti</span></button><button disabled={index===all.length-1} onClick={()=>jump(all[index+1])}><span>Sledeća</span><ArrowRight/></button></nav></main>
}

function shuffle<T>(arr:T[]){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
const levelName=(level:Level)=>level==="basic"?"osnovni":level==="medium"?"srednji":"napredni";

function SmartPractice({grade,areaId,go}:{grade:Grade;areaId:string;go:(r:Route)=>void}){
  const [progress,save,loaded]=useGradeProgress(grade.id);const [level,setLevel]=useState<Level>("basic");const [tasks,setTasks]=useState<SessionTask[]>([]);const [results,setResults]=useState<SessionResult[]>([]);const [started,setStarted]=useState(false);
  const originArea=grade.areas.find(area=>area.id===areaId);const group=practiceAreas(grade,areaId);const groupTitle=group[0]?.title??originArea?.title??"Oblast";const practiceKey=practiceGroupKey(grade,areaId);
  const ordered=practiceLessons(grade,areaId);const unlockedLessonIds=unlockedPracticeLessonIds(grade,areaId,progress.completed,progress.lastLesson);const unlocked=new Set(unlockedLessonIds);const scope={areaId,unlockedLessonIds};
  const areaAttempts=progress.knowledgeAttempts.filter(attempt=>unlocked.has(attempt.lessonId));const areaPractice=progress.practiceByArea[practiceKey]??emptyAreaPractice();const poolSize=sessionPool(grade,scope).length;const sessionTotal=Math.min(10,poolSize);
  const start=()=>{if(!loaded)return;const firstTask=pickAdaptiveTask(grade,level,[],[],areaPractice.recentTaskIds,areaAttempts,scope);setTasks(firstTask?[firstTask]:[]);setResults([]);setStarted(Boolean(firstTask))};
  const finishOne=(result:TaskResult)=>{const task=tasks[results.length];if(!task||results.some(item=>item.task.id===task.id))return;const measured=asKnowledgeAttempt(task,task.lessonId,"smart",result);const next=[...results,{task,...result}];setResults(next);save(previous=>{const knowledgeAttempts=appendKnowledgeAttempt(previous.knowledgeAttempts,measured);const previousArea=previous.practiceByArea[practiceKey]??emptyAreaPractice();const recentTaskIds=[...previousArea.recentTaskIds.filter(id=>id!==task.id),task.id].slice(-30);let updatedArea={...previousArea,recentTaskIds};if(next.length===sessionTotal){const firstScore=next.filter(item=>item.firstCorrect&&!item.usedSolution).length;const previousRatio=previousArea.bestTotal?previousArea.bestFirst/previousArea.bestTotal:-1;const currentRatio=firstScore/Math.max(1,sessionTotal);updatedArea={...updatedArea,lastFirst:firstScore,lastTotal:sessionTotal,bestFirst:currentRatio>=previousRatio?firstScore:previousArea.bestFirst,bestTotal:currentRatio>=previousRatio?sessionTotal:previousArea.bestTotal};}return {...previous,knowledgeAttempts,practiceByArea:{...previous.practiceByArea,[practiceKey]:updatedArea}}});if(next.length<sessionTotal){const nextTask=pickAdaptiveTask(grade,level,next,tasks.map(item=>item.id),areaPractice.recentTaskIds,[...areaAttempts,measured],scope);if(nextTask)setTasks(current=>[...current,nextTask])}else setStarted(false)};
  const first=results.filter(x=>x.firstCorrect&&!x.usedSolution).length;const weakSkills=skillMasteries(areaAttempts).filter(item=>item.samples>=2&&item.band!=="good").slice(0,3);const suggested=recommendedLevel(areaAttempts);const at=results.length;const currentTask=tasks[at];const liveMessage=adaptiveMessage(level,results);const completed=results.length===sessionTotal&&sessionTotal>0;
  if(!originArea)return <main className="shell page smart-page"><button className="back-link" onClick={()=>go({kind:"grade",gradeId:grade.id})}><ArrowLeft/> {grade.id}. razred</button></main>;
  if(!started&&completed)return <main className="shell page smart-page"><button className="back-link" onClick={()=>go({kind:"area",gradeId:grade.id,areaId})}><ArrowLeft/> {originArea.title}</button><div className="result-card"><span className="result-icon"><Target/></span><p className="eyebrow">SESIJA JE ZAVRŠENA · {groupTitle.toUpperCase()}</p><h1>{first}/{sessionTotal} iz prvog pokušaja</h1><div className="result-grid"><div><small>REZULTAT IZ PRVOG POKUŠAJA</small><strong>{first}/{sessionTotal}</strong></div><div><small>NA KRAJU ZAVRŠENO</small><strong>{sessionTotal}/{sessionTotal}</strong></div></div><p>{first/sessionTotal>=.8?"Odlično! Nastavi ovim tempom.":first/sessionTotal>=.5?"Dobro napreduješ. Ponovi slabe tačke.":"Vrati se na preporučene lekcije i pokušaj ponovo."}</p><Button size="lg" onClick={start}><RotateCcw/> Nova sesija</Button></div>{weakSkills.length>0&&<div className="recommend-card"><h2>Šta da ponoviš</h2>{weakSkills.map(item=><span key={item.skill}>{item.skill}</span>)}</div>}</main>;
  if(!started)return <main className="shell page smart-page"><button className="back-link" onClick={()=>go({kind:"area",gradeId:grade.id,areaId})}><ArrowLeft/> {originArea.title}</button><div className="smart-intro"><span><Brain/></span><p className="eyebrow">PAMETNO VEŽBANJE · {groupTitle.toUpperCase()}</p><h1>{sessionTotal} {sessionTotal===1?"zadatak":sessionTotal<5?"zadatka":"zadataka"} iz oblasti</h1><p>Sistem koristi samo lekcije do kojih si stigao u ovoj oblasti. Izaberi nivo; naredni zadaci se zatim prilagođavaju tvom radu.</p><p className="adaptive-note">Dostupno je {unlockedLessonIds.length} od {ordered.length} lekcija · predlog je {levelName(suggested)} nivo.</p><div className="level-picker">{(["basic","medium","advanced"] as Level[]).map(l=><button key={l} className={level===l?`active ${l}`:l} onClick={()=>setLevel(l)}><i/>{l==="basic"?"Osnovni":l==="medium"?"Srednji":"Napredni"}</button>)}</div><Button size="lg" onClick={start} disabled={!loaded||sessionTotal===0}>Počni vežbanje <ArrowRight/></Button>{areaPractice.bestTotal>0&&<p className="best">Najbolji rezultat iz prvog pokušaja: <strong>{areaPractice.bestFirst}/{areaPractice.bestTotal}</strong></p>}</div></main>;
  return <main className="shell page smart-page"><button className="back-link" onClick={()=>go({kind:"area",gradeId:grade.id,areaId})}><ArrowLeft/> Prekini vežbanje</button><div className="session-head"><div><p className="eyebrow">PAMETNO VEŽBANJE · {groupTitle.toUpperCase()}</p><h1>Zadatak {at+1} od {sessionTotal}</h1></div><div className="session-score"><small>TAČNO IZ PRVOG</small><strong>{first}/{at}</strong></div></div><Progress value={(at/Math.max(1,sessionTotal))*100}/>{liveMessage&&<p className="live-adaptive">{liveMessage}</p>}{currentTask&&<TaskCard key={currentTask.id} task={currentTask} number={at+1} onDone={finishOne}/>}</main>
}

function FocusPractice({grade,lessonId,skill,go}:{grade:Grade;lessonId:string;skill?:string;go:(r:Route)=>void}){
  const found=grade.areas.flatMap(area=>area.lessons.map(lesson=>({area,lesson}))).find(item=>item.lesson.id===lessonId);const [progress,save]=useGradeProgress(grade.id);
  const targetSkill=skill??skillMasteries(progress.knowledgeAttempts,lessonId)[0]?.skill;const selected:Level=lessonMastery(progress.knowledgeAttempts,lessonId).band==="good"?"medium":"basic";const focusScope={areaId:found?.area.id??"",unlockedLessonIds:[lessonId],lessonId,skill:targetSkill};const focusRecent=found?(progress.practiceByArea[practiceGroupKey(grade,found.area.id)]?.recentTaskIds??[]):[];
  const [tasks,setTasks]=useState<SessionTask[]>(()=>{const first=found?pickAdaptiveTask(grade,selected,[],[],focusRecent,progress.knowledgeAttempts,focusScope):undefined;return first?[first]:[]});const [results,setResults]=useState<SessionResult[]>([]);
  const reset=()=>{const firstTask=pickAdaptiveTask(grade,selected,[],[],focusRecent,progress.knowledgeAttempts,focusScope);setTasks(firstTask?[firstTask]:[]);setResults([]);window.scrollTo({top:0,behavior:"smooth"})};
  if(!found)return <main className="shell page"><button className="back-link" onClick={()=>go({kind:"grade",gradeId:grade.id})}><ArrowLeft/> {grade.id}. razred</button></main>;
  const current=tasks[results.length];const first=results.filter(item=>item.firstCorrect&&!item.usedSolution).length;const finished=results.length===5;const mastery=lessonMastery(progress.knowledgeAttempts,lessonId);const liveMessage=adaptiveMessage(selected,results);
  const finishOne=(result:TaskResult)=>{if(!current||results.some(item=>item.task.id===current.id))return;const measured=asKnowledgeAttempt(current,lessonId,"focus",result);const next=[...results,{task:current,...result}];setResults(next);save(previous=>({...previous,knowledgeAttempts:appendKnowledgeAttempt(previous.knowledgeAttempts,measured),recommendationCursor:next.length===5?previous.recommendationCursor+1:previous.recommendationCursor}));if(next.length<5){const nextTask=pickAdaptiveTask(grade,selected,next,tasks.map(item=>item.id),focusRecent,[...progress.knowledgeAttempts,measured],focusScope);if(nextTask)setTasks(items=>[...items,nextTask])}};
  if(finished)return <main className="shell page smart-page"><button className="back-link" onClick={()=>go({kind:"grade",gradeId:grade.id})}><ArrowLeft/> Moje znanje</button><div className="result-card focus-result"><span className="result-icon"><Target/></span><p className="eyebrow">CILJANO VEŽBANJE JE ZAVRŠENO</p><h1>{first}/5 iz prvog pokušaja</h1><p>{first>=4?"Odlično! Nova dobra rešenja popravljaju tvoju procenu.":first>=3?"Dobro napreduješ. Vežbaj još malo ovu temu.":"Vrati se kratko na lekciju, pa pokušaj ponovo."}</p><div className="focus-status"><span>{masteryDot(mastery.band)}</span><div><small>TRENUTNA PROCENA LEKCIJE</small><strong>{masteryLabel(mastery.band)}{mastery.score!==null?` · ${mastery.score}%`:""}</strong></div></div><div className="focus-actions"><Button size="lg" onClick={reset}><RotateCcw/> Vežbaj ponovo</Button><Button size="lg" variant="outline" onClick={()=>go({kind:"lesson",gradeId:grade.id,areaId:found.area.id,lessonId})}>Otvori lekciju</Button></div></div></main>;
  return <main className="shell page smart-page"><button className="back-link" onClick={()=>go({kind:"grade",gradeId:grade.id})}><ArrowLeft/> Moje znanje</button><div className="session-head"><div><p className="eyebrow">VEŽBAJ SLABU TAČKU</p><h1>{targetSkill??found.lesson.title}</h1><p className="focus-subtitle">5 kratkih zadataka · {results.length+1}. zadatak</p></div><div className="session-score"><small>TAČNO IZ PRVOG</small><strong>{first}/{results.length}</strong></div></div><Progress value={(results.length/5)*100}/>{liveMessage&&<p className="live-adaptive">{liveMessage}</p>}{current&&<TaskCard key={current.id} task={current} number={results.length+1} onDone={finishOne}/>}</main>
}

type TestResult={task:AreaTestTask}&TaskResult;
function AreaTestPage({grade,areaId,go}:{grade:Grade;areaId:string;go:(r:Route)=>void}){
  const area=grade.areas.find(a=>a.id===areaId)!;const [progress,save]=useGradeProgress(grade.id);const unlockedLessons=new Set(unlockedPracticeLessonIds(grade,areaId,progress.completed,progress.lastLesson));const definition=getAreaTest(grade.id,areaId).filter(task=>unlockedLessons.has(task.lessonId));const [tasks,setTasks]=useState<AreaTestTask[]>([]);const [at,setAt]=useState(0);const [results,setResults]=useState<TestResult[]>([]);const [started,setStarted]=useState(false);
  const isMini=area.assessment==="mini";const assessment=isMini?"Mini-provera":"Završni test";
  const start=()=>{setTasks(shuffle(definition));setAt(0);setResults([]);setStarted(true);window.scrollTo({top:0,behavior:"smooth"})};
  const finishOne=(result:TaskResult)=>{const task=tasks[at];if(!task||results.some(x=>x.task.id===task.id))return;const next=[...results,{task,...result}];setResults(next);save(previous=>{const knowledgeAttempts=appendKnowledgeAttempt(previous.knowledgeAttempts,asKnowledgeAttempt(task,task.lessonId,"test",result));if(at<tasks.length-1)return {...previous,knowledgeAttempts};const score=next.filter(item=>item.firstCorrect&&!item.usedSolution).length;const previousScore=previous.tests[areaId];const previousBest=previousScore?.total===definition.length?previousScore.best:0;return {...previous,knowledgeAttempts,tests:{...previous.tests,[areaId]:{last:score,best:Math.max(previousBest,score),total:definition.length}}}});if(at<tasks.length-1)setAt(at+1);else setStarted(false)};
  const score=results.filter(x=>x.firstCorrect&&!x.usedSolution).length;const percentage=Math.round(score/Math.max(1,definition.length)*100);const savedComparable=progress.tests[areaId]?.total===definition.length?progress.tests[areaId]?.best??0:0;const best=Math.max(savedComparable,score);
  const weak=Object.entries(results.filter(r=>!r.firstCorrect||r.usedSolution).reduce<Record<string,number>>((acc,r)=>{acc[r.task.lessonId]=(acc[r.task.lessonId]??0)+1;return acc},{})).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([lessonId])=>area.lessons.find(l=>l.id===lessonId)).filter((lesson):lesson is Lesson=>Boolean(lesson));
  const recommendation=percentage>=90?"Odlično si savladao oblast.":percentage>=70?"Vrlo dobro. Ponovi još nekoliko pojmova.":percentage>=50?"Dobro, ali preporučujemo dodatno vežbanje.":"Vrati se na preporučene lekcije i pokušaj ponovo.";
  if(!started&&results.length===definition.length)return <main className="shell page test-page"><button className="back-link" onClick={()=>go({kind:"area",gradeId:grade.id,areaId})}><ArrowLeft/> {area.title}</button><div className="result-card test-result"><span className="result-icon"><Trophy/></span><p className="eyebrow">{isMini?"MINI-PROVERA JE ZAVRŠENA":"ZAVRŠNI TEST JE ZAVRŠEN"}</p><h1>Rezultat: {score}/{definition.length}</h1><div className="result-grid"><div><small>USPEŠNOST</small><strong>{percentage}%</strong></div><div><small>NAJBOLJI REZULTAT</small><strong>{best}/{definition.length}</strong></div></div><p>{recommendation}</p><Button size="lg" onClick={start}><RotateCcw/> Pokušaj ponovo</Button></div>{weak.length>0&&<div className="recommend-card weak-lessons"><h2>Preporučujemo da ponoviš:</h2>{weak.map(lesson=><button key={lesson.id} onClick={()=>go({kind:"lesson",gradeId:grade.id,areaId,lessonId:lesson.id})}>{lesson.title}<ArrowRight/></button>)}</div>}</main>;
  if(!started)return <main className="shell page test-page"><button className="back-link" onClick={()=>go({kind:"area",gradeId:grade.id,areaId})}><ArrowLeft/> {area.title}</button><div className="test-intro"><span><GraduationCap/></span><p className="eyebrow">{assessment.toUpperCase()}</p><h1>{area.title}</h1><p>{definition.length} različitih zadataka obuhvata povezane pojmove oblasti. Rezultat se računa prema prvom pokušaju.</p><div className="test-notes"><span>{definition.length} zadataka</span><span>Osnovni, srednji i napredni</span><span>Najbolji rezultat se čuva</span></div><Button size="lg" onClick={start}>Počni proveru <ArrowRight/></Button>{progress.tests[areaId]&&<p className="best">Najbolji rezultat: <strong>{progress.tests[areaId].best}/{progress.tests[areaId].total??definition.length}</strong></p>}</div></main>;
  return <main className="shell page test-page"><button className="back-link" onClick={()=>go({kind:"area",gradeId:grade.id,areaId})}><ArrowLeft/> Prekini proveru</button><div className="session-head"><div><p className="eyebrow">{assessment.toUpperCase()} · {grade.id}. RAZRED</p><h1>Zadatak {at+1} od {tasks.length}</h1></div><div className="session-score"><small>TAČNO IZ PRVOG</small><strong>{score}/{at}</strong></div></div><Progress value={(at/tasks.length)*100}/><TaskCard key={tasks[at].id} task={tasks[at]} number={at+1} onDone={finishOne}/></main>;
}

export default function HomePageRoot(){
  const [route,setRoute]=useState<Route>({kind:"home"});
  const rootRef=useRef<HTMLDivElement>(null);const {script,setScript}=useScriptPreference();useLocalizedDom(rootRef,script);
  useEffect(()=>{const sync=()=>setRoute(parseRoute());sync();window.addEventListener("hashchange",sync);return()=>window.removeEventListener("hashchange",sync)},[]);
  const go=(r:Route)=>{window.location.hash=routeHash(r);setRoute(r);window.scrollTo({top:0,behavior:"smooth"})};
  const grade="gradeId" in route?grades.find(g=>g.id===route.gradeId):undefined;
  return <ScriptProvider script={script}><div ref={rootRef}><Header route={route} go={go} script={script} setScript={setScript}/>{route.kind==="home"&&<HomePage go={go}/>} {route.kind==="grade"&&grade&&<GradePage key={grade.id} grade={grade} go={go}/>} {route.kind==="area"&&grade&&<AreaPage key={`${grade.id}-${route.areaId}`} grade={grade} areaId={route.areaId} month={route.month} go={go}/>} {route.kind==="lesson"&&grade&&<LessonPage key={`${grade.id}-${route.areaId}-${route.lessonId}`} grade={grade} areaId={route.areaId} lessonId={route.lessonId} go={go}/>} {route.kind==="smart"&&grade&&<SmartPractice key={`${grade.id}-${route.areaId}`} grade={grade} areaId={route.areaId} go={go}/>} {route.kind==="focus"&&grade&&<FocusPractice key={`${grade.id}-${route.lessonId}-${route.skill??""}`} grade={grade} lessonId={route.lessonId} skill={route.skill} go={go}/>} {route.kind==="test"&&grade&&<AreaTestPage key={`${grade.id}-${route.areaId}`} grade={grade} areaId={route.areaId} go={go}/>}<footer className="shell"><Logo go={go}/><p>Znanje raste svakim rešenim zadatkom.</p></footer></div></ScriptProvider>
}

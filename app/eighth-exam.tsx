"use client";
import { useEffect, useState, type ComponentType } from "react";
import { EighthFigure } from "./eighth-figures";
import { examSets } from "./content/spring8/exams";
import { grades } from "./content";
import { eighthAnswer } from "./eighth-answer";
type MathView=ComponentType<{children:string}>;
const topics=["Brojevi i operacije","Algebra i funkcije","Geometrija","Merenje","Obrada podataka"];
const domain=(id:string)=>id==="s6-podaci"||id==="s7-podaci"?4:id==="s8-tela"||id==="s6-merenje"?3:/prizma|piramida|valjak|kupa|lopta|uglovi|zapremina/.test(id)?2:/funkcija|sistemi|znak|jednacina|model/.test(id)?1:0;
const handbook=[
 ["Deljivost i razlomci","Broj je deljiv sa 3 ili 9 ako je zbir cifara deljiv istim brojem. NZD bira zajedničke proste činioce sa manjim izložiocima, NZS sve sa većim. Za 12 i 18 važi NZD=6, NZS=36. Za sabiranje razlomaka prvo napravi jednake imenioce. Na primer 1/3+1/4=7/12. Imenilac mora biti različit od nule. Procenat p označava p/100 početne vrednosti."],
 ["Racionalni brojevi i procenti","Sabiraj razlomke sa istim imeniocem. Kod množenja pomnoži brojioce i imenioce, a kod deljenja množi recipročnom vrednošću nenultog delioca. Razmera a prema b zahteva b≠0. Za proporcionalne parove a:b=c:d važi ad=bc, uz b,d≠0. Sniženje od 15% na 800 dinara daje 800·0,85=680 dinara."],
 ["Stepeni, koreni i polinomi","Pri množenju stepena iste osnove saberi izložioce. Za količnik osnova mora biti različita od nule. Za realno a važi √(a²)=|a|. Kvadrat zbira je (a+b)²=a²+2ab+b², a razlika kvadrata a²−b²=(a−b)(a+b). Tako je 49·51=50²−1²=2499."],
 ["Uglovi i sličnost","Zbir uglova trougla je 180°, a zbir unutrašnjih uglova prostog mnogougla sa n temena je (n−2)·180°. U sličnim trouglovima odgovarajuće stranice imaju istu razmeru. Na primer, ako kraćoj stranici od 4 cm odgovara 6 cm, stranici od 10 cm odgovara 15 cm."],
 ["Jednačine, funkcije i sistemi","Jednakost ostaje tačna kad obe strane uvećaš za isti broj ili pomnožiš istim nenultim brojem. Pri deljenju nejednakosti negativnim brojem promeni smer. Za y=kx+n vrednost n čita se za x=0. Na primer, za y=2x−6 nula je 3. Rešenje sistema proveri u obe jednačine."],
 ["Ravanske figure","Pravougaonik P=ab. Trougao P=a·h:2, paralelogram P=a·h, trapez P=(a+b)·h:2. Visina je normalna na odgovarajuću osnovicu. Za krug O=2πr, B=πr². U pravouglom trouglu a²+b²=c², gde je c hipotenuza. Za katete 6 i 8, c²=100 pa c=10."],
 ["Tela i preseci","Prava prizma i pravi valjak imaju V=B·H i P=2B+M. Piramida i kupa imaju V=B·H:3 i P=B+M. Kod pravilne piramide M=O·s:2. Za pravi valjak M=2πrH, za pravu kupu M=πrs. Za sferu P=4πR², za loptu V=4πR³:3. Na primer, kupa sa B=12 cm² i H=5 cm ima 20 cm³."],
 ["Merenje i razmera","1 m²=100 dm², 1 m³=1000 dm³, 1 dm³=1 l, 1 cm³=1 ml. Brzina je put podeljen vremenom za ravnomerno kretanje. Na planu 1 prema 200 duž od 3 cm predstavlja 600 cm odnosno 6 m."],
 ["Podaci","Prosek dobijaš deljenjem zbira brojem podataka. Medijanu odredi posle uređivanja, a mod je najčešća vrednost i može ih biti više. Za 1, 2, 2, 7 prosek je 3, medijana i mod su 2. Deo kružnog dijagrama ima ugao jednak udelu pomnoženom sa 360°."]
];
type Extra={prompt:string;answer:string;solution:string};
const extras:Record<string,Extra>={
 "s8-simA-20":{prompt:"Koliki bi prihod bio da su sve 24 karte jeftinije? (dinari)",answer:"2160",solution:"24·90=2160 dinara."},
 "s8-simB-20":{prompt:"Koliko je ukupno dinara više nego da su sve novčanice od 100?",answer:"900",solution:"2500−16·100=900 dinara."},
 "s8-simC-20":{prompt:"Koliko litara više od jednog minuta zajedničkog rada daju dva dodatna minuta prve cevi?",answer:"24",solution:"U tri minuta prve i jednom druge cevi natočeno je 50 l. Posle oduzimanja 26 l ostaju 24 l iz prve cevi."}
};
type Session={mode:"rad"|"ispit";end:number;done:boolean;answers:Record<string,string>};
function readSession(key:string):Session|null{
  try{const s=JSON.parse(localStorage.getItem(key)||"null");
    if(!s||!["rad","ispit"].includes(s.mode)||!Number.isFinite(s.end)||typeof s.answers!=="object"||s.answers===null)return null;
    return {...s,done:s.done===true||(s.mode==="ispit"&&s.end<=Date.now())};
  }catch{return null;}
}
function Recommendation({id}:{id:string}){
  if(id==="deljivost5")return <a href="#/test/8/s8-priprema">Podsetnik za peti razred</a>;
  for(const g of grades){for(const a of g.areas){const l=a.lessons.find(l=>l.id===id);if(l)return <a href={`#/lekcija/${g.id}/${a.id}/${id}`}>{g.id}. razred · {l.title}</a>;}}
  return null;
}
export function ExamHub({MathText}:{MathText:MathView}){
  return <main className="shell page"><a href="#/razred/8">← Osmi razred</a><h1>Priprema za završni ispit</h1><p>Počni dijagnostičkom proverom. Pregled rezultata vodi te do lekcija iz oblasti u kojima si izgubio bodove.</p>
    <section className="lesson-grid">{examSets.map(e=><a key={e.id} className="lesson-card" href={"#/test/8/"+e.id}><div><small>{e.items.length} ZADATAKA</small><h2>{e.title}</h2></div></a>)}</section>
    <h2>Podsetnik od petog do osmog razreda</h2>{handbook.map(([title,note])=><details key={title} className="lesson-explore" open={title===handbook[0][0]}><summary>{title}</summary><p><MathText>{note}</MathText></p></details>)}
    <details className="lesson-explore"><summary>Tri kratka zadatka iz petog razreda</summary>{[
      ["Odredi NZD brojeva 30 i 42.","30=2·3·5, 42=2·3·7. Zajednički proizvod je 6."],
      ["Za stazu je potrošeno 2/3 i još 1/6 vreće peska. Koliki deo vreće je potrošen?","2/3=4/6, pa je zbir 5/6 vreće."],
      ["Nacrtaj duž AB dužine 5 cm i njenu sliku u centralnoj simetriji sa centrom A. Koliko su udaljeni B i njegova slika?","Tačka A je sredina spojnice. Rastojanje je 5+5=10 cm."]
    ].map(([q,a])=><section key={q}><p><MathText>{q}</MathText></p><details><summary>Uporedi postupak</summary><MathText>{a}</MathText></details></section>)}</details>
    <p>Autorski testovi prate prethodni ispitni okvir. Datumi završnog ispita 2027. su 14–16. jun. Sadržaj i pojedinačni zadaci zvaničnog testa za 2027. nisu unapred poznati.</p></main>;
}
export function ExamPage({id,MathText}:{id:string;MathText:MathView}){
  const exam=examSets.find(e=>e.id===id)!;
  const key="matematikon68-priprema-v1-"+id;
  const [session,setSession]=useState(()=>readSession(key));
  const [now,setNow]=useState(Date.now);
  const [confirm,setConfirm]=useState(false);
  useEffect(()=>{if(session)localStorage.setItem(key,JSON.stringify(session));},[key,session]);
  const deadline=session?.mode==="ispit"&&!session.done?session.end:0;
  useEffect(()=>{
    if(!deadline)return;
    const tick=()=>{const t=Date.now();setNow(t);if(t>=deadline)setSession(old=>old?{...old,done:true}:null)};
    const interval=setInterval(tick,1000);window.addEventListener("focus",tick);
    return ()=>{clearInterval(interval);window.removeEventListener("focus",tick)};
  },[deadline]); // Only the deadline controls the clock.
  const start=(mode:Session["mode"])=>{const t=Date.now();setNow(t);setConfirm(false);setSession({mode,end:t+7200000,answers:{},done:false})};
  const change=(k:string,v:string)=>setSession(old=>!old||old.done?old:old.mode==="ispit"&&Date.now()>=old.end?{...old,done:true}:{...old,answers:{...old.answers,[k]:v}});
  const mark=(item:typeof exam.items[number])=>{
    const a=session?.answers??{};
    const correct=eighthAnswer(a[item.id]??"",item.answer);
    const extra=extras[item.id];
    return extra?(Number(correct)+Number(eighthAnswer(a[item.id+"b"]??"",extra.answer)))/2:Number(correct);
  };
  const seconds=Math.max(0,Math.ceil(((session?.end??now)-now)/1000));
  return <main className="shell page e8-exam"><a href="#/test/8/s8-priprema">← Priprema za završni ispit</a><h1>{exam.title}</h1>
    <p>{exam.items.length} zadataka · najviše {exam.items.length} bodova. Unesi broj u traženoj jedinici. Par piši kao (x; y). Za tačan rezultat možeš uneti pi ili sqrt(3). Račun vodi u svesci.</p>
    {!session?<><p>U vežbanju možeš da otvoriš pomoć. U simulaciji imaš 120 minuta, možeš da menjaš odgovore do predaje. Zadatak sa dva posebno označena zahteva donosi po pola boda za svaki.</p><button onClick={()=>start("rad")}>Samostalno vežbanje</button>{exam.items.length===20&&<button onClick={()=>start("ispit")}>Započni simulaciju</button>}</>:
    <>{session.mode==="ispit"&&!session.done&&<p role="timer">Preostalo vreme {Math.floor(seconds/60)} min {seconds%60} s</p>}
    {session.done&&<section className="content-card"><h2>Rezultat {fmt(exam.items.reduce((s,t)=>s+mark(t),0))} / {exam.items.length}</h2>
    {topics.map((name,i)=>{const tasks=exam.items.filter(t=>domain(t.lessonId)===i);const missed=[...new Set(tasks.filter(t=>mark(t)<1).map(t=>t.lessonId))];
      return <section key={name}><h3>{name} · {fmt(tasks.reduce((s,t)=>s+mark(t),0))} / {tasks.length}</h3>{missed.length?<ul>{missed.map(l=><li key={l}><Recommendation id={l}/></li>)}</ul>:<p>Svi odgovori su tačni.</p>}</section>})}</section>}
    {exam.items.map((item,i)=>{const extra=extras[item.id];
      return <section className="content-card" key={item.id}><h3>{i+1}. zadatak</h3><p><MathText>{item.prompt}</MathText></p>
      <EighthFigure id={item.id}/>{item.kind==="choice"?<fieldset disabled={session.done}><legend>Izaberi jedan odgovor</legend>{item.choices!.map(c=><label key={c}><input type="radio" name={item.id} checked={session.answers[item.id]===c} onChange={()=>change(item.id,c)}/>{c}</label>)}</fieldset>:<label>Odgovor {extra?"(0,5 boda)":""}<input maxLength={90} value={session.answers[item.id]??""} disabled={session.done} onChange={e=>change(item.id,e.target.value)}/></label>}
      {extra&&<label>{extra.prompt} (0,5 boda)<input maxLength={90} value={session.answers[item.id+"b"]??""} disabled={session.done} onChange={e=>change(item.id+"b",e.target.value)}/></label>}
      {(session.done||session.mode==="rad")&&<details><summary>{session.done?"Postupak · "+fmt(mark(item))+" / 1":"Nagoveštaj"}</summary><p><MathText>{session.done?item.solution:item.hint}</MathText></p>{session.done&&extra&&<p>{extra.solution}</p>}</details>}</section>;
    })}
    {session.done?<div className="e8-controls"><button onClick={()=>start(session.mode)}>Ponovi test</button>{exam.items.length===20&&<button onClick={()=>start(session.mode==="ispit"?"rad":"ispit")}>{session.mode==="ispit"?"Vežbaj bez tajmera":"Započni simulaciju"}</button>}</div>:confirm?<><p>Predaj odgovore i pogledaj bodove?</p><button onClick={()=>setSession({...session,done:true})}>Potvrdi predaju</button><button onClick={()=>setConfirm(false)}>Nastavi rad</button></>:<button onClick={()=>setConfirm(true)}>Završi test</button>}</>}</main>;
}
const fmt=(n:number)=>n.toLocaleString("sr-Latn-RS");

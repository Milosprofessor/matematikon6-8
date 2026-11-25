"use client";

import { useEffect, useState, type ReactNode, type PointerEvent } from "react";

import { useCurrentScript, localize } from "./i18n";
import { DataChart, ReflectionLab, TrapezoidConstruction } from "./spring-models";

type Point = [number, number];
const path = (points: Point[]) => points.map(p => p.join(",")).join(" ");
const shape = (points: Point[], extra = "") => <polygon points={path(points)} className={"lab-shape " + extra}/>;
const line = ([x1,y1]: Point, [x2,y2]: Point, extra = "") => <line {...{x1,y1,x2,y2}} className={extra}/>;
const mark = ([cx,cy]: Point, label: string, dx = 0, dy = -9) => <g><circle {...{cx,cy}} r="3"/><text x={cx+dx} y={cy+dy} textAnchor="middle">{label}</text></g>;
const fmt = (n: number) => Number(n.toFixed(2)).toLocaleString("sr-Latn-RS");

function Range({label,value,min,max,set}:{label:string;value:number;min:number;max:number;set:(n:number)=>void}){
  return <label className="lab-range">{label} <output>{value}</output><input type="range" min={min} max={max} value={value} onChange={e=>set(Number(e.target.value))}/></label>;
}
function Canvas({title,children}:{title:string;children:ReactNode}){
  const caption=localize(title,useCurrentScript());
  return <svg viewBox="0 0 320 220" role="img" aria-label={caption}><title>{caption}</title>{children}</svg>;
}
function Choice({names,at,set}:{names:string[];at:number;set:(n:number)=>void}){
  return <div className="lab-options">{names.map((name,i)=><button type="button" key={name} aria-pressed={i===at} onClick={()=>set(i)}>{name}</button>)}</div>;
}

function GridLab(){
  const [x,setX]=useState(-2), [y,setY]=useState(3);
  const cx=156+20*x, cy=110-20*y;
  function move(e: PointerEvent<SVGSVGElement>){
    const svg=e.currentTarget, matrix=svg.getScreenCTM();
    if(!matrix)return;
    const p=new DOMPoint(e.clientX,e.clientY).matrixTransform(matrix.inverse());
    setX(Math.min(6,Math.max(-6,Math.round((p.x-156)/20))));
    setY(Math.min(4,Math.max(-4,Math.round((110-p.y)/20))));
  }
  return <><p>Dodirni mrežu ili prevuci tačku. Ispitaj šta se menja kada pređeš preko jedne ose.</p>
  <svg viewBox="0 0 320 220" className="lab-grid" role="img" aria-label="Koordinatna mreža" onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);move(e)}} onPointerMove={e=>{if(e.currentTarget.hasPointerCapture(e.pointerId))move(e)}}>
    {Array.from({length:13},(_,i)=><line key={i} x1={36+20*i} x2={36+20*i} y1="30" y2="190" className="grid-line"/>)}
    {Array.from({length:9},(_,i)=><line key={i} x1="36" x2="276" y1={30+i*20} y2={30+i*20} className="grid-line"/>)}
    <path d="M25 110H293l-6 -4m6 4l-6 4 M156 199V15l-4 6m4 -6l4 6" className="axis"/>
    <g data-no-transliterate><text x="298" y="115">x</text><text x="165" y="20">y</text><text x="141" y="128">0</text><text x="174" y="128">1</text><text x="138" y="93">1</text></g>
    <path d={`M156 ${cy}H${cx}V110`} className="guide"/><circle cx={cx} cy={cy} r="7" className="active-dot"/>
  </svg><div className="lab-controls"><Range label="x" min={-6} max={6} value={x} set={setX}/><Range label="y" min={-4} max={4} value={y} set={setY}/></div>
  <p><b data-no-transliterate>A({x}, {y})</b> · {x===0&&y===0?"Koordinatni početak":x===0?"Na osi y":y===0?"Na osi x":(x>0?(y>0?"I":"IV"):(y>0?"II":"III"))+" kvadrant"}</p></>;
}

function ProportionLab(){
  const [mode,setMode]=useState(0), [n,setN]=useState(3);
  const xs=[1,2,3,4,5,6];
  const val=(v:number)=>mode===0?2*v:12/v;
  return <><Choice names={["Cena pri 2 dinara po komadu","Vreme za 12 radnih sati"]} at={mode} set={setMode}/>
  <Canvas title="Zavisnost dve veličine"><path className="axis" d="M40 16V183H299"/>
  {[0,4,8,12].map(v=><g key={v}><text x="11" y={187-12*v}>{v}</text>{line([40,183-v*12],[286,183-v*12],"grid-line")}</g>)}
  {mode===0&&line([40,183],[274,39],"guide")}
  {xs.map(v=><g key={v}><text x={37+39*v} y="204">{v}</text><circle cx={40+39*v} cy={183-12*val(v)} r={v===n?7:4} className={v===n?"active-dot":""}/></g>)}</Canvas>
  <Range label={mode?"Broj jednako brzih radnika":"Broj komada"} min={1} max={6} value={n} set={setN}/>
  <p>{mode?`${n} radnika · ${fmt(val(n))} h = 12 radnih sati. Pri dvostrukom broju radnika vreme se prepolovi.`:`Za ${n} komada plaćaš ${2*n} dinara. Količnik cene i broja komada je 2.`}</p></>;
}

function ConstructionLab({variant}:{variant:"sss"|"paralelogram"|"trapez"}){
  const [step,setStep]=useState(0), [playing,play]=useState(false);
  const texts=variant==="sss"?["Prenesi osnovicu AB dužine 5 cm.","Iz A opiši luk poluprečnika 4 cm.","Iz B opiši luk poluprečnika 3 cm. Gornji presek je C.","Spoji C sa A i B. Otvori šestara garantuju dužine stranica."]:
    variant==="paralelogram"?["Prenesi AB kao prvu stranicu.","Prenesi dati ugao u A i na drugom kraku odmeri AD.","Kroz D prenesi pravac AB, a kroz B pravac AD. Prave se seku u C.","Spoji temena. Uporedi pomeraje od A do D i od B do C."]:
    ["Postavi dužu osnovicu AB i pronađi njenu sredinu M.","Podigni normalu u M. Odmeri visinu do N.","Kroz N konstruiši normalu na MN. Na njoj prenesi po polovinu kraće osnovice u oba smera.","Spoji bliže krajeve. Simetrija oko MN daje jednake krake."];
  useEffect(()=>{if(!playing)return;const id=setTimeout(()=>{if(step<3)setStep(step+1);else play(false)},1300);return ()=>clearTimeout(id)},[playing,step]);
  const a:Point=variant==="paralelogram"?[44,173]:[65,173], b:Point=variant==="paralelogram"?[214,173]:[245,173];
  const c:Point=variant==="sss"?[180.2,86.6]:variant==="paralelogram"?[258,78]:[211,75], d:Point=variant==="paralelogram"?[88,78]:[99,75];
  return <><Canvas title="Konstrukcija po koracima">{line(a,b)}{mark(a,"A",0,22)}{mark(b,"B",0,22)}
    {variant==="sss"?<>{step>=1&&<path className="guide" d="M137 48.29 A144 144 0 0 1 206.81 148"/>}{step>=2&&<><path className="guide" d="M142.4 139.6 A108 108 0 0 1 218 68.43"/>{mark(c,"C",0,-11)}</>}{step===3&&shape([a,b,c])}</>:
     variant==="paralelogram"?<>{step>=1&&<>{line(a,d)}{mark(d,"D")}</>}{step>=2&&<>{line(d,[284,78],"guide")}{line(b,[273,46],"guide")}{mark(c,"C")}</>}{step===3&&shape([a,b,c,d])}</>:
     <>{mark([155,173],"M",0,23)}{step>=1&&<>{line([155,173],[155,43],"guide")}{mark([155,75],"N",0,-12)}</>}{step>=2&&<>{line([60,75],[250,75],"guide")}{mark(d,"D")}{mark(c,"C")}</>}{step===3&&shape([a,b,c,d])}</>}
  </Canvas><p aria-live="polite"><b>{step+1}/4</b> · {texts[step]}</p>
  <div className="lab-options"><button disabled={step===0} onClick={()=>{play(false);setStep(step-1)}}>Prethodni korak</button><button onClick={()=>{if(playing)play(false);else{if(step===3)setStep(0);play(true)}}}>{playing?"Zaustavi":"Animiraj"}</button><button disabled={step===3} onClick={()=>{play(false);setStep(step+1)}}>Sledeći korak</button></div></>;
}

function QuadLab({initial=0}:{initial?:number}){
  const [mode,setMode]=useState(initial), [t,setT]=useState(2), [diagonals,show]=useState(true);
  const lean=12*t, h=84, w=116;
  const dx=12*t, rh=Math.sqrt(10000-dx*dx);
  const points:Point[][]=[
    [[42,166],[42+w,166],[42+w+lean,166-h],[42+lean,166-h]],
    [[55,165],[155+t*12,165],[155+t*12,69],[55,69]],
    [[50,168],[150,168],[150+dx,168-rh],[50+dx,168-rh]],
    [[72,173],[152+t*8,173],[152+t*8,93-t*8],[72,93-t*8]],
    [[40,170],[268,170],[236-t*8,70],[72+t*8,70]],
    [[152,33],[225,105],[152,171+t*4],[79,105]],
  ];
  const [a,b,c,d]=points[mode];
  const notes=["Zasuci bočnu stranicu. Dijagonale se i dalje uzajamno polove.","Dijagonale pravougaonika su jednake i polove se.","Sve stranice romba ostaju jednake. Dijagonale su normalne.","Prati obe dijagonale kvadrata. Jednake su, normalne su i uzajamno se polove.","Srednja linija je paralelna osnovicama i duga je kao polovina njihovog zbira.","Duži AC i BD su normalne. Simetrija oko AC polovi BD."];
  return <><Choice names={["Paralelogram","Pravougaonik","Romb","Kvadrat","Jednakokraki trapez","Deltoid"]} at={mode} set={setMode}/>
   <Canvas title="Četvorougao sa promenljivim merama">{shape([a,b,c,d])}{diagonals&&<>{line(a,c,"guide")}{line(b,d,"guide")}</>}{mode===4&&line([(a[0]+d[0])/2,120],[(b[0]+c[0])/2,120],"cut")}
    {mark(a,"A",-13,4)}{mark(b,"B",13,6)}{mark(c,"C",12,-4)}{mark(d,"D",-13,-5)}</Canvas>
   <Range label="Promeni dimenzije" min={1} max={5} value={t} set={setT}/><button aria-pressed={diagonals} onClick={()=>show(!diagonals)}>Dijagonale</button><p>{notes[mode]}</p></>;
}

function AngleLab(){
  const [t,setT]=useState(3),[split,setSplit]=useState(false);
  const a:Point=[45,166],b:Point=[239,164],c:Point=[208+t*7,58+t*3],d:Point=[67,42];
  const points=[a,b,c,d];
  const angles=points.map((p,i)=>{const prev=points[(i+3)%4],next=points[(i+1)%4];const u=[prev[0]-p[0],prev[1]-p[1]],v=[next[0]-p[0],next[1]-p[1]];return Math.acos((u[0]*v[0]+u[1]*v[1])/(Math.hypot(...u)*Math.hypot(...v)))*180/Math.PI});
  return <><Canvas title="Dijagonala deli četvorougao na dva trougla">{shape(points)}{split&&<>{shape([a,b,c],"second")}{line(a,c,"cut")}</>}{mark(a,"A",0,22)}{mark(b,"B",0,22)}{mark(c,"C",8,-9)}{mark(d,"D",0,-9)}</Canvas>
  <Range label="Položaj temena C" value={t} min={1} max={8} set={setT}/><button aria-pressed={split} onClick={()=>setSplit(!split)}>Podeli dijagonalom</button><p>{split?"U oba trougla zbir je 180°. Njihovi uglovi zajedno daju 360°.":"Pomeri C, zatim povuci dijagonalu AC."}</p><p>Uglovi A, B, C i D (približno): {angles.map(n=>fmt(n)+"°").join(" · ")}</p></>;
}

function AreaLab({initial=0}:{initial?:number}){
  const [mode,setMode]=useState(initial),[stage,setStage]=useState(0);
  const t=stage/100;
  let drawing: ReactNode, caption: string;
  if(mode===0){
    const shift=130*t;
    drawing=<>{shape([[85,70],[215,70],[175,150],[85,150]])}{shape([[45+shift,150],[85+shift,70],[85+shift,150]],"second")}{line([85,70],[85,150],"guide")}</>;
    caption="Prenesi odsečeni trougao vodoravno za dužinu osnovice. Na kraju dobijaš pravougaonik iste površine: P = a · h.";
  } else if(mode===1||mode===2){
    const triangle=mode===1;
    const p:Point[]=triangle?[[40,161],[161,161],[96,68]]:[[34,161],[154,161],[121,76],[63,76]];
    const b=p[1],c=p[2],mx=(b[0]+c[0])/2,my=(b[1]+c[1])/2;
    drawing=<>{shape(p)}<g transform={`rotate(${-180*t} ${mx} ${my})`}>{shape(p,"second")}</g>{line([p[2][0],p[2][1]],[p[2][0],161],"guide")}</>;
    caption=triangle?"Okreni podudarnu kopiju za pola kruga oko sredine bočne stranice. Dve kopije daju paralelogram: 2P = a · h.":"Okreni drugu kopiju oko sredine kraka. Zajednička osnovica novog paralelograma duga je a + b. Zato 2P = (a + b) · h.";
  } else if(mode===3||mode===4){
    const top=mode===3?48:65,bottom=mode===3?172:179,middle=110,shift=18*t;
    drawing=<>{shape([[57,middle-shift],[245,middle-shift],[151,top-shift]],"second")}{shape([[57,middle+shift],[245,middle+shift],[151,bottom+shift]])}{line([151,top-shift],[151,middle-shift],"guide")}{line([151,middle+shift],[151,bottom+shift],"guide")}</>;
    caption="Razmakni trouglove. Imaju istu osnovicu e, a visine zajedno daju f. Sabiranjem površina dobijaš P = e · f : 2.";
  } else {
    const shift=25*t;
    drawing=<>{shape([[52,52],[119,52],[119,170],[52,170]])}{shape([[119+shift,110],[223+shift,110],[223+shift,170],[119+shift,170]],"second")}</>;
    caption="Razmakni dva pravougaonika koji grade figuru u obliku slova L. Njihove površine se sabiraju jer se unutrašnjosti ne preklapaju.";
  }
  const labels=mode===0?<><text x="140" y="178">a</text><text x="88" y="114">h</text></>:
    mode===1||mode===2?<><text x="91" y="181">a</text><text x={mode===1?101:125} y="139">h</text>{mode===2&&<text x="89" y="66">b</text>}</>:
    mode===3||mode===4?<><text x="90" y={103-18*t}>e</text><text x="157" y={87-18*t}>h₁</text><text x="157" y={139+18*t}>h₂</text></>:null;
  return <><Choice names={["Paralelogram","Trougao","Trapez","Romb","Deltoid","Složena figura"]} at={mode} set={i=>{setMode(i);setStage(0)}}/><Canvas title="Izvođenje formule za površinu">{drawing}{labels}</Canvas>
  <Range label="Prati promenu (%)" value={stage} min={0} max={100} set={setStage}/><div className="lab-options"><button onClick={()=>setStage(0)}>Početna figura</button><button onClick={()=>setStage(100)}>Završni položaj</button></div><p>{caption}</p></>;
}

function CircleLab(){
  const [mode,setMode]=useState(0);
  const a:Point=[60,166],b:Point=[240,166],c:Point=[60,31];
  // 3:4:5 right triangle. The circumcenter is the midpoint of the hypotenuse.
  const center:Point=mode===0?[150,98.5]:[105,121], r=mode===0?112.5:45;
  return <><Choice names={["Opisana kružnica","Upisana kružnica"]} at={mode} set={setMode}/>
  <svg viewBox="0 -30 320 260" role="img" aria-label={mode?"Upisana kružnica":"Opisana kružnica"}>{shape([a,b,c])}<circle cx={center[0]} cy={center[1]} r={r} className="guide"/>
  {mode===0?<>{line([150,200],[150,35],"guide")}{line([32,98.5],[267,98.5],"guide")}</>:<>{line(a,center,"guide")}{line(b,center,"guide")}{line(center,[105,166],"cut")}</>}{mark(center,mode?"I":"O",9,-8)}{mark(a,"A",-12,7)}{mark(b,"B",12,8)}{mark(c,"C",-12,-3)}</svg>
  <p>{mode?"Simetrale uglova se seku u I. Duž od I normalno na AB je poluprečnik upisane kružnice.":"Simetrale kateta seku se u O, na sredini hipotenuze. OA, OB i OC su poluprečnici iste kružnice."}</p></>;
}

export function SpringLab({id}:{id:string}){
  let lab:ReactNode;
  switch(id){
    case "s6-konstrukcije": lab=<ConstructionLab variant="sss"/>;break;
    case "s6-podudarnost": lab=<CircleLab/>;break;
    case "s6-podaci": lab=<DataChart/>;break;
    case "s6-preslikavanja": lab=<ReflectionLab/>;break;
    case "s6-cetiri-stranice": lab=<TrapezoidConstruction/>;break;
    case "s6-koordinate": lab=<GridLab/>;break;
    case "s6-zavisnost": lab=<ProportionLab/>;break;
    case "s6-uglovi": lab=<AngleLab/>;break;
    case "s6-paralelogram": lab=<QuadLab/>;break;
    case "s6-vektori": lab=<ConstructionLab variant="paralelogram"/>;break;
    case "s6-trapez": lab=<><QuadLab initial={4}/><ConstructionLab variant="trapez"/></>;break;
    case "s6-merenje": lab=<AreaLab/>;break;
    case "s6-trougao-trapez": lab=<AreaLab initial={1}/>;break;
    case "s6-delovi": lab=<AreaLab initial={5}/>;break;
    default: return null;
  }
  return <section className="content-card spring-lab"><h2>Istraži na crtežu</h2>{lab}</section>;
}

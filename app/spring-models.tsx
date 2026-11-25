"use client";

import { useState } from "react";

export function DataChart(){
  const [mode,setMode]=useState(0), [day,setDay]=useState(0);
  const days=["Pon","Uto","Sre","Čet"], a=[6,10,4,8], b=[8,6,10,4];
  return <><p>Biblioteka beleži broj pozajmljenih knjiga u dva odeljenja. Izaberi prikaz i dan.</p>
   <div className="lab-options">{["Tabela","Dvostruki stubići","Linijski dijagram","Tačkasti dijagram"].map((name,i)=><button key={name} aria-pressed={i===mode} onClick={()=>setMode(i)}>{name}</button>)}</div>
   {mode===0?<table className="learning-table"><caption>Pozajmljene knjige</caption><thead><tr><th>Odeljenje</th>{days.map(d=><th scope="col" key={d}>{d}</th>)}</tr></thead><tbody>{[a,b].map((arr,i)=><tr key={i}><th scope="row">{i?"B":"A"}</th>{arr.map((v,j)=><td key={j}>{v}</td>)}</tr>)}</tbody></table>:
    <svg viewBox="0 0 320 215" role="img" aria-label="Pozajmljene knjige po danima"><title>Pozajmljene knjige po danima</title>
    {[0,2,4,6,8,10].map(v=><g key={v}><text x="7" y={174-14*v}>{v}</text><line className="grid-line" x1="34" x2="295" y1={170-14*v} y2={170-14*v}/></g>)}
    <rect x={47+day*62} y="20" width="43" height="151" fill="#d8e2ee" opacity=".45"/>
    {[a,b].map((series,i)=><g key={i} fill={i?"#ac590b":"#225589"}>
      {mode===2&&<polyline points={series.map((v,j)=>(68+j*62)+","+(170-v*14)).join(" ")} fill="none" stroke={i?"#ac590b":"#225589"} strokeWidth="2.5" strokeDasharray={i?"5 2":undefined}/>}
      {series.map((v,j)=>mode===1?<rect key={j} x={52+j*62+i*17} y={170-v*14} width="14" height={v*14}/>:<rect key={j} x={64+j*62} y={166-v*14} width="8" height="8" rx={i?0:4}/>)}
    </g>)}{days.map((d,j)=><text key={d} textAnchor="middle" x={68+j*62} y="196">{d}</text>)}</svg>}
    <p>Plavo · odeljenje A. Narandžasto · odeljenje B.</p>
    <div className="lab-options">{days.map((d,i)=><button key={d} aria-pressed={i===day} onClick={()=>setDay(i)}>{d}</button>)}</div><p aria-live="polite">{days[day]} · A: {a[day]}, B: {b[day]}. Zajedno {a[day]+b[day]} knjiga.</p></>;
}

export function ReflectionLab(){
  const [mode,setMode]=useState(0),[x,setX]=useState(-2);
  const src=[[x,1],[x+1,1],[x,3]], dest=src.map(([a,b])=>mode===0?[-a,b]:mode===1?[-a,-b]:[a+2,b-2]);
  const px=(v:number)=>152+22*v,py=(v:number)=>105-22*v;
  const poly=(points:number[][])=>points.map(([a,b])=>px(a)+","+py(b)).join(" ");
  return <><div className="lab-options">{["Odraz preko ose y","Poluokret oko O","Translacija (2, −2)"].map((name,i)=><button key={name} aria-pressed={i===mode} onClick={()=>setMode(i)}>{name}</button>)}</div>
  <svg viewBox="0 0 320 210" role="img" aria-label="Polazni trougao i njegova slika">
   <path d="M18 105H302 M152 12V195" className="axis"/><text x="300" y="124">x</text><text x="161" y="19">y</text><text x="135" y="124">O</text>
   <polygon points={poly(src)} className="lab-shape"/><polygon points={poly(dest)} className="lab-shape second"/>
   {src.map(([a,b],i)=><line key={i} className="guide" x1={px(a)} y1={py(b)} x2={px(dest[i][0])} y2={py(dest[i][1])}/>)}
   </svg><label className="lab-range">Apscisa temena A <output>{x}</output><input type="range" min="-4" max="2" value={x} onChange={e=>setX(Number(e.target.value))}/></label>
   <p><span data-no-transliterate>A({x}, 1) → A′({dest[0][0]}, {dest[0][1]})</span>. Plavi trougao je polazni, narandžasti njegova slika. Isprekidane duži povezuju odgovarajuća temena.</p></>;
}

export function TrapezoidConstruction(){
  const [step,setStep]=useState(1);
  // Unit = 24 pixels. A=(0,0), E=(4,0); AD=3 and ED=4.
  const x=9/8, h=Math.sqrt(9-x*x), dx=43+24*x, dy=162-24*h;
  return <><p>Konstruiši trapez osnovica 9 i 5 cm i krakova AD=3 cm i BC=4 cm. Pomoćna tačka E pretvara zadatak u konstrukciju trougla.</p>
   <svg viewBox="0 0 320 214" role="img" aria-label="Od pomoćnog trougla do trapeza">
   <line x1="43" y1="162" x2="259" y2="162"/><g data-no-transliterate><text x="32" y="185">A</text><text x="135" y="185">E</text><text x="255" y="185">B</text></g><circle cx="139" cy="162" r="3"/>
   {step>=2&&<><path className="guide" d="M43 90 A72 72 0 0 1 115 162 M43 162 A96 96 0 0 1 139 66"/><line x1="43" y1="162" x2={dx} y2={dy}/><line className="guide" x1="139" y1="162" x2={dx} y2={dy}/><text x={dx-7} y={dy-10}>D</text></>}
   {step>=3&&<><line x1={dx} y1={dy} x2={dx+120} y2={dy}/><text x={dx+123} y={dy-7}>C</text></>}
   {step===4&&<polygon points={`43,162 259,162 ${dx+120},${dy} ${dx},${dy}`} className="lab-shape"/>}</svg>
   <div className="lab-options">{[1,2,3,4].map(i=><button key={i} aria-label={"Korak "+i} aria-pressed={i===step} onClick={()=>setStep(i)}>{i}</button>)}</div>
   <p>{["Na AB odmeri AE=9−5=4 cm. Preostaje EB=5 cm.","Iz A opiši luk poluprečnika 3, a iz E luk poluprečnika 4 cm. Njihov presek je D.","Iz D u smeru AB prenesi DC=5 cm na paraleli sa AB.","Spoji B i C. EBCD ima jednake i paralelne naspramne stranice EB i DC, pa je BC=ED=4 cm."][step-1]}</p></>;
}


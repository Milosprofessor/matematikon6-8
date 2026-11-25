"use client";

import {useState} from "react";

export function CircleDerivation({area}:{area:boolean}){
 const [step,set]=useState(0);
 const t=step/12;
 const r=28,length=2*Math.PI*r,theta=2*Math.PI*t;
 const cx=40+length*t,cy=65;
 const sectors=12,half=Math.PI/sectors;
 const width=2*r*Math.sin(half),height=r*Math.cos(half);
 return <section><h3>{area?"Od isečaka do površine":"Jedan obrt bez klizanja"}</h3><svg viewBox="0 0 300 130" role="img" aria-label={area?"Preslaganje dvanaest isečaka":"Kotrljanje kružnice duž prave"}>
 {area?Array.from({length:sectors},(_,i)=>{
  const top=i<sectors/2,index=i%(sectors/2);
  const angle=(i+.5)*360/sectors-90;
  const target=top?-90:90;
  const finalX=110+index*width+(top?0:width/2);
  const finalY=top?75:75-height;
  return <g key={i} transform={`translate(${55+(finalX-55)*t} ${60+(finalY-60)*t}) rotate(${angle+(target-angle)*t})`}><path d={`M0 0 L${height} ${-width/2} A${r} ${r} 0 0 1 ${height} ${width/2} Z`} className={top?"lab-shape":"lab-shape second"}/></g>;
 }):<><line x1="38" x2="255" y1={cy+r} y2={cy+r}/><ellipse cx={cx} cy={cy} rx={r} ry={r} fill="none" stroke="#214a68" strokeWidth="2"/><line x1={cx} y1={cy} x2={cx-r*Math.sin(theta)} y2={cy+r*Math.cos(theta)}/><circle cx={cx-r*Math.sin(theta)} cy={cy+r*Math.cos(theta)} r="4"/><line x1="40" y1={cy+r+4} x2={cx} y2={cy+r+4} className="cut"/></>}
 </svg><label className="lab-range">Korak {step} od 12<input aria-label="Korak izvođenja" type="range" min="0" max="12" value={step} onChange={e=>set(+e.target.value)}/></label><button onClick={()=>set((step+1)%13)}>{step===12?"Ponovi":"Sledeći korak"}</button><p>{area?"Naizmenični isečci čuvaju ukupnu površinu. Sa sve više užih isečaka dobija se oblik sve bliži pravougaoniku osnovice πr i visine r.":"Duž obojena ispod točka pokazuje pređeni put. Posle punog obrta tačka opet dodiruje pravu i duž ima dužinu 2πr."}</p></section>;
}

export function DifferenceModel(){
 const [mode,choose]=useState(false),[step,set]=useState(0);
 const a=105,b=35;
 return <section><h3>Oduzimanje površina</h3><button onClick={()=>{choose(!mode);set(0)}}>{mode?"Istraži kvadrat razlike":"Istraži razliku kvadrata"}</button><svg viewBox="0 0 300 145" role="img" aria-label={mode?"Preslaganje razlike kvadrata":"Preklapanje dve uklonjene trake"}>
 <g transform="translate(35 18)"><rect width={a} height={a} fill="#c2e0fa" stroke="#274c62"/>
 {mode?<><rect x={a-b} width={b} height={b} fill="white" stroke="#274c62"/><rect x="0" y="0" width={a-b} height={b} fill={step?"white":"#ffd595"} stroke="#274c62"/>{step>0&&<rect x={a} y={b} width={b} height={a-b} fill="#ffd595" stroke="#274c62"/>}</>:<>{step>=1&&<rect x={a-b} width={b} height={a} fill="#df9178" opacity=".7"/>}{step>=2&&<rect y={a-b} width={a} height={b} fill="#df9178" opacity=".7"/>}{step===3&&<rect x={a-b} y={a-b} width={b} height={b} fill="#fce6af" stroke="#714c12"/>}</>}
 </g></svg><button onClick={()=>set((step+1)%(mode?2:4))}>{step===(mode?1:3)?"Ponovi":"Sledeći korak"}</button><p>{mode?"Od kvadrata stranice a ukloni kvadrat stranice b. Preostalu gornju traku okreni i dodaj zdesna. Dobijeni pravougaonik ima stranice a−b i a+b.":["Počni kvadratom površine a².","Oduzmi uspravnu traku površine ab.","Oduzmi i vodoravnu traku površine ab. Ugao je time oduzet dvaput.","Vrati jedan b² pri računanju. Površina preostalog plavog kvadrata je a²−2ab+b²."][step]} Model koristi a&gt;b&gt;0.</p></section>;
}

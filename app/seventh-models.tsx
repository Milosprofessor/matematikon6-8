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

export function CompassConstruction(){
 const [n,choose]=useState(6),[step,set]=useState(0);
 const point=(i:number)=>{const t=i*2*Math.PI/n;return [150+63*Math.sin(t),91-63*Math.cos(t)]};
 const count=n===3?6:n,points=Array.from({length:n},(_,i)=>point(i));
 const instruction=step===0?"Opiši kružnicu i označi početno teme na vrhu.":step===count+1?"Spoji susedna označena temena redom.":n===4?"Povuci prečnik, pa normalu kroz centar. Njihovi krajevi su temena kvadrata.":n===8?"Kreni od dva normalna prečnika. Simetrale četiri prava centralna ugla daju još četiri temena.":"Zadrži otvor šestara jednak poluprečniku. Iz prethodnog preseka opiši luk do narednog preseka na kružnici.";
 return <section><h3>Konstrukcija u opisanoj kružnici</h3><div className="lab-options">{[3,4,6,8].map((v,i)=><button key={v} aria-pressed={n===v} onClick={()=>{choose(v);set(0)}}>{["Trougao","Kvadrat","Šestougao","Osmougao"][i]}</button>)}</div><svg viewBox="0 0 300 182" role="img" aria-label="Koraci upisivanja pravilnog mnogougla"><ellipse cx="150" cy="91" rx="63" ry="63" stroke="#254963" fill="none"/>
 {Array.from({length:Math.min(step,count)+1},(_,i)=>{const idx=n===3?i/2:n===8?([0,4,2,6,1,3,5,7,0][i]):n===4?([0,2,1,3,0][i]):i;const [x,y]=point(idx);return <g key={i}><circle cx={x} cy={y} r="3"/>{(n===4||n===8)&&<line x1="150" y1="91" x2={x} y2={y} className="guide"/>}</g>})}
 {(n===3||n===6)&&step>0&&step<=count&&(()=>{const [cx,cy]=point((step-1)*(n===3?.5:1));const t=step*Math.PI/3+Math.PI/3;return <path className="cut" d={`M${cx+63*Math.cos(t-Math.PI/2-.16)} ${cy+63*Math.sin(t-Math.PI/2-.16)} A63 63 0 0 1 ${cx+63*Math.cos(t-Math.PI/2+.16)} ${cy+63*Math.sin(t-Math.PI/2+.16)}`}/>})()}
 {step===count+1&&<polygon points={points.join(" ")} className="lab-shape"/>}</svg><p>{instruction} {n===3&&step===7?"Za trougao uzmi svako drugo od šest dobijenih temena.":""}</p><button onClick={()=>set((step+1)%(count+2))}>{step===count+1?"Ponovi":"Sledeći korak konstrukcije"}</button></section>;
}

export function RingModel(){
 const [inner,set]=useState(3),[cut,choose]=useState(false);
 return <section><h3>Površina kružnog prstena</h3><label className="lab-range">Unutrašnji poluprečnik {inner} cm<input type="range" min="1" max="7" value={inner} onChange={e=>set(+e.target.value)}/></label><svg viewBox="0 0 300 160" role="img" aria-label="Dva koncentrična kruga"><ellipse cx="110" cy="80" rx="64" ry="64" fill="#9ccad9"/><ellipse cx="110" cy="80" rx={inner*8} ry={inner*8} fill={cut?"white":"#fbd089"}/><line x1="110" y1="80" x2="174" y2="80" className="guide"/><text x="179" y="85">8 cm</text></svg><button onClick={()=>choose(!cut)}>{cut?"Vrati unutrašnji krug":"Izdvoji prsten"}</button><p>{cut?`Površina prstena je (64 − ${inner*inner})π = ${64-inner*inner}π cm².`:`Spoljašnji krug ima 64π cm², a unutrašnji ${inner*inner}π cm².`}</p></section>;
}

"use client";
import {useState} from "react";

export function GroupTerms({product}:{product:boolean}){
 const [x,setX]=useState(4),[b,setB]=useState(3),[step,next]=useState(0);
 const cells=product?["x²",b+"x","2x",String(2*b)]:[x+"x","2x²",b+"x"];
 return <section><h3>{product?"Mreža proizvoda":"Grupisanje sličnih monoma"}</h3><label className="lab-range">{product?"Drugi sabirak b":"Koeficijent prvog monoma"}<input type="range" min="1" max="8" value={product?b:x} onChange={e=>(product?setB:setX)(+e.target.value)}/></label>
 <svg viewBox="0 0 300 155" role="img" aria-label={product?"Vrste i kolone proizvoda":"Grupisanje po promenljivom delu"}>{product?<><text x="108" y="23">x</text><text x="201" y="23">{b}</text><text x="30" y="70">x</text><text x="30" y="118">2</text>{cells.map((s,i)=><g key={i}><rect x={58+92*(i%2)} y={31+48*Math.floor(i/2)} width="92" height="48" fill={i<=step?"#bee3dc":"white"} stroke="#36506a"/>{i<=step&&<text x={104+92*(i%2)} y={61+48*Math.floor(i/2)} textAnchor="middle">{s}</text>}</g>)}</>:cells.map((s,i)=><g key={i}><rect x={15+90*i} y={step&&i===1?92:40} width="76" height="40" rx="5" fill={i===1?"#ffd59b":"#b9decf"}/><text x={54+i*90} y={step&&i===1?118:66} textAnchor="middle">{s}</text></g>)}</svg>
 <button onClick={()=>next((step+1)%(product?4:2))}>{step===(product?3:1)?"Ponovi":product?"Pomnoži sledeći par":"Izdvoj različit stepen"}</button>
 <p>{product?`(x+2)(x+${b}) = x² + ${b+2}x + ${2*b}. Svaki red odgovara jednom članu prvog binoma.`:`Članovi uz x daju (${x}+${b})x = ${x+b}x. Član 2x² ostaje zaseban.`}</p></section>;
}
export function IntervalModel(){
 const [v,set]=useState(37);const near=Math.round(v/10)*10;
 return <><label className="lab-range">Stoti delovi<input type="range" min="0" max="100" value={v} onChange={e=>set(+e.target.value)}/></label><svg viewBox="0 0 300 100" role="img" aria-label="Rastojanje do najbliže desetine"><line x1="20" x2="280" y1="50" y2="50"/>{Array.from({length:11},(_,i)=><line key={i} x1={20+26*i} x2={20+26*i} y1="46" y2="54"/>)}<circle cx={20+2.6*v} cy="50" r="5"/><line className="cut" x1={20+2.6*v} x2={20+2.6*near} y1="38" y2="38"/></svg><p>Broj {(v/100).toLocaleString("sr-Latn")} zaokružen na desetine je {(near/100).toLocaleString("sr-Latn")}. Greška je {(Math.abs(v-near)/100).toLocaleString("sr-Latn")}.</p></>;
}

export function FactorModel(){
 const [a,set]=useState(3),[trial,choose]=useState(1);
 return <section><h3>Izdvoji najveći zajednički činilac</h3><label className="lab-range">Broj grupa {a}<input type="range" min="2" max="7" value={a} onChange={e=>{set(+e.target.value);choose(1)}}/></label>
 <p>Pred tobom je {2*a}x² + {3*a}x. Izaberi činilac koji možeš izdvojiti tako da u zagradi ostane 2x+3.</p><div className="lab-options">{[1,a,a+1].map(n=><button key={n} aria-pressed={n===trial} onClick={()=>choose(n)}>{n===1?"x":n+"x"}</button>)}</div><p aria-live="polite">{trial===a?`Tačno. Množenjem ${a}x sa 2x i sa 3 vraćaš oba polazna člana.`:`Provera: prvi proizvod je ${2*trial}x², a potreban je ${2*a}x².`}</p></section>
}

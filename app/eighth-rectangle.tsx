"use client";
import {useState} from "react";
import { Slider } from "./eighth-algebra";

const fmt=(n:number)=>n.toLocaleString("sr-Latn-RS",{maximumFractionDigits:2});
export function RectangularRoof(){
  const [a,setA]=useState(10),[b,setB]=useState(18),[h,setH]=useState(12),[face,setFace]=useState("a");
  const first=face==="a",u=first?a:b,v=first?b:a;
  const slant=Math.hypot(h,v/2), other=Math.hypot(h,u/2);
  const scale=Math.min(120/u,100/v,100/h);
  return <details className="lesson-explore e8-lab"><summary>Piramida nad pravougaonom osnovom</summary>
    <p>Vrh je iznad centra pravougaonika. Ravan kroz vrh i sredinu istaknute stranice seče osnovu normalno na tu stranicu.</p>
    <Slider name="Osnovna ivica a (cm)" value={a} set={setA} min={2} max={20}/><Slider name="Osnovna ivica b (cm)" value={b} set={setB} min={2} max={20}/><Slider name="Visina krova (cm)" value={h} set={setH} min={1} max={18}/>
    <label>Bočna strana uz <select value={face} onChange={e=>setFace(e.target.value)}><option>a</option><option>b</option></select></label>
    <svg viewBox="0 0 320 140" role="img" aria-label="Osnova gledana odozgo i pravougli trougao u izabranom preseku">
      <rect x={78-u*scale/2} y={70-v*scale/2} width={u*scale} height={v*scale} fill="#dcebf4" stroke="#34516b"/>
      <path d={`M${78-u*scale/2} ${70+v*scale/2}h${u*scale}`} stroke="#aa4c19" strokeWidth="3"/>
      <path d={`M78 70v${v*scale/2}`} stroke="#187e70" strokeWidth="2"/><circle cx="78" cy="70" r="3" fill="#26394d"/>
      <path d={`M198 115v${-h*scale}l${v*scale/2} ${h*scale}Z`} fill="#ffedc3" stroke="#765125" strokeWidth="2"/>
      <text x="171" y="83">H</text><text x="200" y="134">{fmt(v/2)} cm</text><text x="20" y="135">{first?"a":"b"} = {fmt(u)} cm</text>
    </svg>
    <p>a² + b² = c² u pravouglom trouglu. Ovde su katete {fmt(h)} cm i {fmt(v/2)} cm. Visina odabrane strane je √({fmt(h*h)} + {fmt(v*v/4)}) cm ≈ {fmt(slant)} cm. Drugi par strana ima visinu ≈ {fmt(other)} cm.</p>
    <p>M = a·s_a + b·s_b ≈ {fmt(u*slant+v*other)} cm². P = B + M ≈ {fmt(a*b+u*slant+v*other)} cm². V = B·H : 3 ≈ {fmt(a*b*h/3)} cm³.</p></details>;
}

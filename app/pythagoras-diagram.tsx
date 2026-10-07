import type { TaskDiagram } from "./content/types";

type Diagram=Extract<TaskDiagram,{type:"pythagoras"}>;
export function PythagorasDiagram({diagram,label,caption}:{diagram:Diagram;label:string;caption:string}){
 const l=diagram.labels??{},variant=diagram.variant;
 let shape=<><path className="shape" d="M85 195 V45 L450 195 Z"/><path d="M85 174 H106 V195"/></>;
 let labels=<><text x="62" y="125">{l.a??l.h??"a"}</text><text x="270" y="220">{l.b??l.q??"b"}</text><text x="300" y="105">{l.c??l.p??"c"}</text></>;
 if(variant==="rectangle"||variant==="square"){
  const left=variant==="square"?185:75,right=variant==="square"?335:455;
  shape=<><path className="shape" d={`M${left} 45 H${right} V195 H${left} Z`}/><path className="accent" d={`M${left} 195 L${right} 45`}/><path d={`M${left} 174 H${left+21} V195`}/></>;
  labels=<><text x={left-24} y="125">{variant==="square"?l.a??"a":l.b??"b"}</text><text x="270" y="220">{l.a??"a"}</text><text x="300" y="105">{l.d??"d"}</text></>;
 }
 if(variant==="isosceles"||variant==="equilateral"){
  shape=<><path className="shape" d="M70 195 L270 30 L470 195 Z"/><path className="accent" d="M270 30 V195"/><path d="M270 174 H291 V195"/></>;
  labels=<><text x="170" y="105">{l.s??l.a??"s"}</text><text x="292" y="112">{l.h??"h"}</text><text x="365" y="216">{l.half??(l.a?l.a+"/2":"a/2")}</text></>;
 }
 if(variant==="quadrilateral"){
  shape=<><path className="shape" d="M75 205 L75 45 L275 45 L435 245 Z"/><path className="accent" d="M75 205 L275 45"/><path d="M75 68 H98 V45 M261 56 L272 70 L286 59"/></>;
  labels=<><text x="52" y="222">A</text><text x="52" y="38">B</text><text x="280" y="36">C</text><text x="442" y="258">D</text><text x="52" y="128">{l.AB??"AB"}</text><text x="168" y="35">{l.BC??"BC"}</text><text x="350" y="125">{l.CD??"CD"}</text><text x="255" y="135">{l.AC??"AC"}</text><text x="270" y="235">{l.AD??"AD"}</text></>;
 }
 if(variant==="rhombus"){
  shape=<><path className="shape" d="M270 25 L460 120 L270 215 L80 120 Z"/><path className="accent" d="M270 25 V215 M80 120 H460"/><path d="M270 101 H289 V120"/></>;
  labels=<><text x="270" y="239">d₁={l.d1??"?"}</text><text x="500" y="125">d₂={l.d2??"?"}</text><text x="385" y="78">{l.a??"a"}</text></>;
 }
 if(variant==="trapezoid"||variant==="right-trapezoid"){
  const isRight=variant==="right-trapezoid";
  shape=<><path className="shape" d={isRight?"M70 195 V55 H395 L470 195 Z":"M70 195 L145 55 H395 L470 195 Z"}/><path className="accent" d="M395 55 V195"/><path d="M395 174 H416 V195"/></>;
  labels=<><text x="448" y="125">{l.c??"c"}</text><text x="375" y="125">{l.h??"h"}</text><text x="434" y="218">{l.diff??(isRight?"a−b":"(a−b)/2")}</text></>;
 }
 return <figure className="task-diagram" data-no-transliterate><svg viewBox={variant==="quadrilateral"||variant==="rhombus"?"0 0 560 270":"0 0 540 240"} role="img" aria-label={label}>{shape}{labels}</svg><figcaption>{caption}</figcaption></figure>;
}

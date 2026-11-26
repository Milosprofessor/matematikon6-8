"use client";
import { eighthAnswer } from "./eighth-answer";
import { useState } from "react";

export type Line=[number,number,number];
export function intersection([a,b,c]:Line,[d,e,f]:Line) {
  if((!a&&!b&&c)||(!d&&!e&&f))return {kind:"none"} as const;
  const det=a*e-b*d;
  if(det)return {kind:"point",x:(c*e-b*f)/det,y:(a*f-c*d)/det} as const;
  return {kind:a*f!==c*d||b*f!==c*e?"none":"many"} as const;
}
function frac(n:number,d:number):string {
  if(d<0)return frac(-n,-d);
  if(n%d===0)return String(n/d);
  const gcd=(a:number,b:number):number=>b?gcd(b,a%b):a;
  const g=gcd(Math.abs(n),d);
  return (n/g)+" : "+(d/g);
}
function WithFractions({value}:{value:string}){
  return <span className="math">{value.split(/(-?\d+ : \d+)/).map((part,i)=>{
    const terms=part.split(" : ");
    return terms.length===2&&/^-?\d+$/.test(terms[0])?<span key={i} className="frac" aria-label={terms.join(" kroz ")}><span>{terms[0]}</span><span>{terms[1]}</span></span>:part;
  })}</span>;
}
const format=(n:number)=>n.toLocaleString("sr-Latn-RS",{maximumFractionDigits:2});
export function Slider({name,value,set,min,max,step=1}:{name:string;value:number;set:(n:number)=>void;min:number;max:number;step?:number}){
  return <label className="e8-slider"><span>{name} <b>{format(value)}</b></span><input aria-label={name} type="range" min={min} max={max} step={step} value={value} onChange={e=>set(Number(e.target.value))}/></label>;
}
const side=272,mid=136,scale=14;
const pos=(x:number,y:number)=>[mid+x*scale,mid-y*scale];
export function Graph({lines,points=[]}:{lines:Line[];points?:number[][]}){
  const colors=["#3157a6","#b33f22"];
  return <svg viewBox={`0 0 ${side} ${side}`} role="img" aria-label="Koordinatna mreža, jedan kvadratić predstavlja jednu jedinicu">
    <rect width={side} height={side} fill="#fff"/>
    {Array.from({length:19},(_,i)=>i-9).map(t=>{
      const [x,y]=pos(t,t);
      return <g key={t} stroke={t?"#dbe1e9":"#27374f"} strokeWidth={t?0.8:2}><path d={`M${x} 0v272 M0 ${y}h272`}/></g>;
    })}
    {lines.map(([a,b,c],i)=>{
      if(!a&&!b)return null;
      const ends=b?[pos(-12,(c+12*a)/b),pos(12,(c-12*a)/b)]:[pos(c/a,-12),pos(c/a,12)];
      return <path key={i} d={"M"+ends[0].join(" ")+"L"+ends[1].join(" ")} fill="none" stroke={colors[i]} strokeWidth="3" strokeDasharray={i?"7 3":undefined}/>;
    })}
    {points.filter(([x,y])=>Math.abs(x)<=9&&Math.abs(y)<=9).map(([x,y],i)=><circle key={i} cx={pos(x,y)[0]} cy={pos(x,y)[1]} r="4.5" fill="#25334a" stroke="white"/>)}
    <g fill="#27374f" fontSize="12"><text x="249" y="126">x</text><text x="143" y="26">y</text><text x="124" y="151">0</text><text x="204" y="151">5</text><text x="143" y="68">5</text></g>
  </svg>;
}
const equation=(k:number,n:number)=>"y = "+(k===0?"":k===1?"x":k===-1?"−x":format(k)+"x")+(k&&n?(n>0?" + ":" − ")+Math.abs(n):k?"":String(n));
export function FunctionLab(){
  const [k,setK]=useState(2),[n,setN]=useState(1),[challenge,setChallenge]=useState(0),[feedback,setFeedback]=useState("");
  const [guessK,setGuessK]=useState(""),[guessN,setGuessN]=useState(""),[guess,setGuess]=useState("");
  const root=k?frac(-n,k):undefined;
  return <section className="spring-lab e8-lab"><h3>Grafik i tabela</h3><Graph lines={[[-k,1,n]]} points={[[0,n],[1,k+n]]}/>
    <Slider name="Nagib k" min={-4} max={4} value={k} set={setK}/><Slider name="Odsečak n" min={-6} max={6} value={n} set={setN}/>
    <p><b>{equation(k,n)}</b> · Presek sa y-osom (0; {n}). {k>0?"Raste.":k<0?"Opada.":"Konstantna."}</p>
    <p>{k?<WithFractions value={`Nula je x = ${root}. Levo od nule vrednosti su ${k>0?"negativne":"pozitivne"}, desno ${k>0?"pozitivne":"negativne"}.`}/>:n?`Nema nulu. Svuda je ${n>0?"pozitivna":"negativna"}.`:"Za svako x vrednost je nula."}</p>
    <table><caption>Vrednosti funkcije</caption><tbody><tr><th>x</th>{[-2,-1,0,1,2].map(x=><td key={x}>{x}</td>)}</tr><tr><th>y</th>{[-2,-1,0,1,2].map(x=><td key={x}>{k*x+n}</td>)}</tr></tbody></table>
    <p>{challenge%2?"Nacrtaj grafik funkcije y = 3 − x pomoću klizača.":"Namesti pravu kroz tačke (0; −2) i (2; 4)."}</p>
    <button onClick={()=>setFeedback((challenge%2?k===-1&&n===3:k===3&&n===-2)?"Oba uslova su ispunjena.":"Proveri prvo odsečak, pa promenu y za jedan korak udesno.")}>Proveri grafik</button>
    <button onClick={()=>{setChallenge(challenge+1);setFeedback("")}}>Promeni zadatak</button><p role="status">{feedback}</p>
    <details><summary>Odredi pravilo sa crteža</summary><Graph lines={[[2,1,3]]} points={[[0,3],[2,-1]]}/><p>Očitaj dve označene tačke. Koji koeficijenti daju ovu pravu?</p>
      <label>Nagib <input inputMode="text" value={guessK} onChange={e=>setGuessK(e.target.value)}/></label><label>Odsečak <input inputMode="text" value={guessN} onChange={e=>setGuessN(e.target.value)}/></label>
      <button onClick={()=>setGuess(eighthAnswer(guessK,"-2")&&eighthAnswer(guessN,"3")?"Tačno. Pravilo je y = −2x + 3.":"Pogledaj ordinatu za x=0. Od prve do druge tačke x poraste za 2, a y opadne za 4.")}>Proveri pravilo</button><p role="status">{guess}</p></details>
  </section>;
}
const presets:Line[][]=[[[1,1,4],[1,-1,2]],[[1,1,2],[2,2,5]],[[1,1,2],[2,2,4]],[[1,0,3],[0,1,-2]],[[0,0,0],[1,2,4]],[[0,0,1],[1,2,4]]];
function explain(first:Line,second:Line,method:string){
  const [a,b,c]=first,[d,e,f]=second;
  const result=intersection(first,second);
  if(result.kind!=="point"){
    if((!a&&!b)||(!d&&!e))return ["Izdvoji uslov sa nultim koeficijentima.",result.kind==="none"?"Nemoguća jednakost odbacuje sve parove.":"Identitet prihvata sve parove. Preostali uslov određuje skup rešenja."];
    return ["Uporedi odgovarajuće koeficijente i slobodne članove.",result.kind==="none"?"Koeficijenti su proporcionalni, a desne strane ne prate istu razmeru. Prave su različite paralelne prave.":"Obe jednačine opisuju istu pravu. Svaka njena tačka zadovoljava obe."];
  }
  const det=a*e-b*d, nx=c*e-b*f,ny=a*f-c*d;
  const steps=method==="zamena"?(b?[`Iz prve izrazi y = (${c} − (${a})x) : (${b}).`,`U drugoj zameni y. Posle množenja sa ${b} dobijaš (${b*d-e*a})x = ${b*f-e*c}.`]:[`Iz prve dobijaš x = ${frac(c,a)}.`,`Zameni u drugoj. Dobijaš (${e})y = ${f} − (${d})·(${frac(c,a)}).`]):
    [`Pomnoži prvu sa ${e}, drugu sa ${b}, pa oduzmi drugu od prve. Koeficijenti uz y se poništavaju.`,`Preostaje (${det})x = ${nx}. Vrati x u jednačinu sa nenultim koeficijentom uz y.`];
  return [...steps,`Tačan par je (${frac(nx,det)}; ${frac(ny,det)}).`,`Provera bez zaokruživanja: ${a}·(${nx}) + ${b}·(${ny}) = ${c*det} i ${d}·(${nx}) + ${e}·(${ny}) = ${f*det}. Obe jednakosti su pomnožene brojem ${det}.`];
}
export function SystemsLab(){
  const [lines,setLines]=useState<Line[]>(presets[0]),[step,setStep]=useState(1),[method,setMethod]=useState("zamena");
  const result=intersection(lines[0],lines[1]),steps=explain(lines[0],lines[1],method);
  return <section className="spring-lab e8-lab"><h3>Dve jednačine u ravni</h3><Graph lines={lines} points={result.kind==="point"?[[result.x,result.y]]:[]}/>
    <label>Primer <select aria-label="Primer" defaultValue="0" onChange={e=>{setLines(presets[+e.target.value]);setStep(1)}}>{["Presek","Paralelne","Poklapanje","Vertikala","Identitet","Nemogući uslov"].map((s,i)=><option key={s} value={i}>{s}</option>)}</select></label>
    {lines.map((line,i)=><fieldset key={i}><legend>{i+1}. prava · {line[0]}x + ({line[1]})y = {line[2]}</legend>{line.map((v,j)=><Slider key={j} name={["a","b","c"][j]+(i+1)} min={-6} max={6} value={v} set={n=>{setLines(lines.map((l,r)=>r===i?l.map((p,s)=>s===j?n:p) as Line:l));setStep(1)}}/>)}</fieldset>)}
    <p>{result.kind==="point"?"Jedinstven presek. Očitavanje sa mreže proveri računom.":result.kind==="none"?"Nema zajedničkih rešenja.":"Beskonačno mnogo rešenja."}</p>
    <label>Metoda <select aria-label="Metoda" value={method} onChange={e=>{setMethod(e.target.value);setStep(1)}}><option value="zamena">Zamena</option><option value="eliminacija">Suprotni koeficijenti</option></select></label>
    <ol>{steps.slice(0,step).map(s=><li key={s}><WithFractions value={s}/></li>)}</ol><button onClick={()=>setStep(step>=steps.length?1:step+1)}>{step>=steps.length?"Ponovi postupak":"Sledeći korak"}</button>
  </section>;
}

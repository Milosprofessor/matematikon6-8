"use client";
import {GroupTerms,IntervalModel,FactorModel} from "./seventh-algebra";
import {CircleDerivation,DifferenceModel,CompassConstruction,RingModel} from "./seventh-models";
import {useState,type ReactNode} from "react";

type Point=[number,number];
const polar=(a:number,r=78):Point=>[150+r*Math.cos(a*Math.PI/180),100-r*Math.sin(a*Math.PI/180)];
const stroke=(a:Point,b:Point,style="guide")=><line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} className={style}/>;
const fmt=(n:number)=>n.toLocaleString("sr-Latn",{maximumFractionDigits:2});
function Figure({name,children}:{name:string;children:ReactNode}){return <svg viewBox="0 0 300 200" role="img" aria-label={name}>{children}</svg>}
function Slider({label,v,min,max,set}:{label:string;v:number;min:number;max:number;set:(v:number)=>void}){return <label className="lab-range">{label} <output>{v}</output><input aria-label={label} type="range" value={v} min={min} max={max} onChange={e=>set(+e.target.value)}/></label>}
function Polygon(){
 const [n,set]=useState(6),[mode,choose]=useState(0),[step,next]=useState(0);
 const pts=Array.from({length:n},(_,i)=>polar(90-i*360/n));
 const lines:ReactNode[]=[];
 for(let i=0;i<n;i++)for(let j=i+1;j<n;j++)if(mode===2||mode===3?false:(mode===1||i===0)&&j-i>1&&j-i<n-1)lines.push(<g key={i+"-"+j}>{stroke(pts[i],pts[j])}</g>);
 return <><Slider label="Broj temena" v={n} min={3} max={12} set={v=>{set(v);next(0)}}/><div className="lab-options">{["Iz jednog temena","Sve dijagonale","Centralni trouglovi","Upisivanje temena"].map((s,i)=><button key={s} aria-pressed={mode===i} onClick={()=>{choose(i);next(0)}}>{s}</button>)}</div><Figure name="Pravilni mnogougao">{mode===3?<><ellipse cx="150" cy="100" rx="78" ry="78" fill="none" stroke="#294963"/>{pts.slice(0,step+1).map((p,i)=><g key={i}><circle cx={p[0]} cy={p[1]} r="4"/>{i>0&&stroke(pts[i-1],p,"cut")}</g>)}{step===n&&stroke(pts[n-1],pts[0],"cut")}</>:<polygon points={pts.join(" ")} className="lab-shape"/>}{lines}{mode===2&&pts.map((p,i)=><g key={i}>{stroke([150,100],p)}</g>)}</Figure>{mode===3&&<button onClick={()=>next((step+1)%(n+1))}>{step===n?"Ponovi":"Sledeći korak"}</button>}<p>Iz jednog temena ima {n-3} dijagonala. Ukupno ih je {n*(n-3)/2}. Podelom iz jednog temena nastaje {n-2} trouglova. Zbir uglova je {(n-2)*180}°. Centralni ugao je 360° : {n}.</p></>;
}
function Centers(){
 const [x,set]=useState(130),[median,toggle]=useState(true);
 const a:Point=[x,36],b:Point=[65,156],c:Point=[240,156];
 const h:Point=[x,156-(x-65)*(240-x)/120],t:Point=[(305+x)/3,116];
 const foot=(p:Point,u:Point,v:Point):Point=>{const dx=v[0]-u[0],dy=v[1]-u[1],k=((p[0]-u[0])*dx+(p[1]-u[1])*dy)/(dx*dx+dy*dy);return [u[0]+k*dx,u[1]+k*dy]};
 const center=median?t:h;
 return <><Slider label="Položaj vrha A" min={45} max={215} v={x} set={set}/><button onClick={()=>toggle(!median)}>{median?"Prikaži visine":"Prikaži težišne duži"}</button><Figure name="Promenljiv trougao"><polygon points={[a,b,c].join(" ")} className="lab-shape"/>{median?<>{stroke(a,[152.5,156])}{stroke(b,[(x+240)/2,96])}{stroke(c,[(x+65)/2,96])}</>:<>{stroke(a,[x,Math.max(156,h[1])])}{stroke(b,foot(b,a,c))}{stroke(c,foot(c,a,b))}{stroke(b,h)}{stroke(c,h)}</>}<circle cx={center[0]} cy={center[1]} r="4"/><text x={center[0]+6} y={center[1]-3}>{median?"T":"H"}</text></Figure><p>{median?"Tri težišne duži seku se unutar trougla.":"Pomeri vrh ulevo od leve osnovne tačke i prati kako ortocentar izlazi iz trougla."}</p></>;
}
function Algebra(){
 const [v,set]=useState(4),[step,next]=useState(1);
 const a=v*18,b=36;
 const parts=[[25,12,a,a,"x²"],[25+a,12,b,a,"2x"],[25,12+a,a,b,"2x"],[25+a,12+a,b,b,"4"]] as const;
 return <><Slider label="Dužina x u modelu" min={2} max={8} v={v} set={set}/><Figure name="Četiri proizvoda u kvadratu binoma">{parts.map(([x,y,w,h,label],i)=><g key={i}><rect x={x} y={y} width={w} height={h} fill={i<step?["#bbdaf4","#fdcc83","#fdcc83","#b2dbc8"][i]:"white"} stroke="#253d55"/>{i<step&&<text x={x+w/2} y={y+h/2+5} textAnchor="middle">{label}</text>}</g>)}</Figure><button onClick={()=>next(step%4+1)}>{step===4?"Ponovi":"Dodaj proizvod"}</button><p>{["x · x = x²","x · 2 = 2x","2 · x = 2x","2 · 2 = 4"][step-1]}. {(step===4)?"Sva polja zajedno daju x²+4x+4=(x+2)².":""}</p><p>Crtež koristi pozitivne dužine. Distributivni zakon važi i za negativne brojeve.</p></>;
}
function Circle({id}:{id:string}){
 const [angle,set]=useState(90),[position,move]=useState(240),[radius,resize]=useState(6);
 const r=radius*7,o:Point=[150,100],a=polar(0,r),b=polar(angle,r),c=polar(position,r);
 return <><Slider label="Centralni ugao u stepenima" min={15} max={180} v={angle} set={set}/><Slider label="Poluprečnik u cm" min={2} max={12} v={radius} set={resize}/>{id==="s7-kruznica"&&<Slider label="Položaj temena na drugom luku" min={190} max={350} v={position} set={move}/>}<Figure name="Kružni isečak i određeni luk"><ellipse cx="150" cy="100" rx={r} ry={r} fill="none" stroke="#293e56"/><path d={`M150 100 L${a} A${r} ${r} 0 0 0 ${b} Z`} className="lab-shape"/>{stroke(o,b,"cut")}{id==="s7-kruznica"&&<>{stroke(c,a)}{stroke(c,b)}</>}{id==="s7-rotacija"&&<><polygon points={[o,a,polar(20,r*.55)].join(" ")} className="lab-shape second"/><polygon points={[o,b,polar(angle+20,r*.55)].join(" ")} className="lab-shape"/></>}</Figure><p>Prečnik {2*radius} cm · O = {2*radius}π cm · P = {radius*radius}π cm².</p><p>{id==="s7-kruznica"?"Ugao nad označenim lukom je "+fmt(angle/2)+"°.":id==="s7-rotacija"?"Slika trougla se dobija okretanjem početnog trougla oko zajedničkog temena.":"Luk zauzima "+angle+"° od punog ugla. Njegova dužina je približno "+fmt(2*Math.PI*radius*angle/360)+" cm, a površina isečka približno "+fmt(Math.PI*radius*radius*angle/360)+" cm²."}</p></>;
}
function Data(){
 const [v,set]=useState(4);const a=[2,4,4,6,v],ordered=[...a].sort((x,y)=>x-y);
 return <><Slider label="Peto merenje" v={v} min={1} max={9} set={set}/><Figure name="Pet merenja">{a.map((n,i)=><g key={i}><rect x={28+i*52} y={163-n*15} width="30" height={n*15} fill="#5882b0"/><text x={43+i*52} y={156-n*15} textAnchor="middle">{n}</text></g>)}</Figure><table><tbody><tr><th>Uređeno</th>{ordered.map((n,i)=><td key={i}>{n}</td>)}</tr></tbody></table><p>Sredina je {fmt((16+v)/5)}, medijana {ordered[2]}, a najčešće vrednosti su {Array.from(new Set(ordered)).filter(n=>a.filter(x=>x===n).length===Math.max(...a.map(m=>a.filter(x=>x===m).length))).join(" i ")}.</p></>;
}
export function SeventhLab({id}:{id:string}){
 const lab=id==="s7-centri"?<Centers/>:["s7-uglovi","s7-pravilni","s7-povrsina"].includes(id)?<Polygon/>:["s7-kruznica","s7-luk","s7-isecci","s7-rotacija"].includes(id)?<Circle id={id}/>:id==="s7-podaci"?<Data/>:id==="s7-cinioci"?<FactorModel/>:id==="s7-procena"?<IntervalModel/>:id==="s7-sinteza"?<Data/>:["s7-monomi","s7-polinomi","s7-proizvod"].includes(id)?<GroupTerms product={id==="s7-proizvod"}/>:<Algebra/>;
 return lab&&<section className="content-card spring-lab"><h2>Istraži na crtežu</h2>{lab}{id==="s7-isecci"&&<RingModel/>}{id==="s7-pravilni"&&<CompassConstruction/>}{(id==="s7-luk"||id==="s7-isecci")&&<CircleDerivation area={id==="s7-isecci"}/>} {["s7-identiteti","s7-cinioci"].includes(id)&&<DifferenceModel/>}</section>;
}

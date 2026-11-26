"use client";
import {useEffect,useState} from "react";
import { RectangularRoof } from "./eighth-rectangle";
import { Slider } from "./eighth-algebra";

type Kind="prizma"|"piramida"|"valjak"|"kupa"|"lopta";
type Point=[number,number,number];
type Face={p:Point[];tag:"osnova"|"omotač"|"presek"};
const tau=2*Math.PI;
const fmt=(v:number)=>v.toLocaleString("sr-Latn-RS",{maximumFractionDigits:2});
export function solidMeasures(kind:Kind,r:number,h:number,n:number,d:number){
  const poly=kind==="prizma"||kind==="piramida";
  const edge=2*r*Math.sin(Math.PI/n),apothem=r*Math.cos(Math.PI/n);
  const perimeter=poly?n*edge:tau*r,base=poly?perimeter*apothem/2:Math.PI*r*r;
  const pointed=kind==="piramida"||kind==="kupa",slant=Math.hypot(h,poly?apothem:r);
  const mantle=pointed?perimeter*slant/2:perimeter*h;
  return {edge,apothem,base,slant,perimeter,mantle,area:kind==="lopta"?4*Math.PI*r*r:mantle+(pointed?1:2)*base,
    volume:kind==="lopta"?4*Math.PI*r**3/3:base*h/(pointed?3:1),section:Math.sqrt(Math.max(0,r*r-d*d))};
}
const ring=(r:number,y:number,n:number,sweep=1):Point[]=>Array.from({length:n+1},(_,i)=>[r*Math.cos(i*tau*sweep/n),y,r*Math.sin(i*tau*sweep/n)]);
export function faces(kind:Kind,r:number,h:number,n:number,sweep:number,fold:number):Face[]{
  const polygon=kind==="prizma"||kind==="piramida", pointed=kind==="piramida"||kind==="kupa";
  const count=polygon?n:40, result:Face[]=[];
  if(kind==="lopta"){
    for(let j=0;j<16;j++){
      const row=(i:number)=>ring(r*Math.cos(Math.PI*(i/16-.5)),r*Math.sin(Math.PI*(i/16-.5)),32,sweep);
      const lo=row(j),hi=row(j+1);
      for(let i=0;i<32;i++)result.push({p:[lo[i],lo[i+1],hi[i+1],hi[i]],tag:"omotač"});
    }
    return result;
  }
  const angle=fold*(pointed?Math.PI-Math.atan2(h,r*Math.cos(Math.PI/n)):Math.PI/2);
  const lo=ring(r,0,count,sweep),hi=ring(r,h,count,sweep);
  result.push({p:sweep===1?lo.slice(0,-1):[[0,0,0],...lo],tag:"osnova"});
  if(!pointed&&!fold)result.push({p:sweep===1?hi.slice(0,-1):[[0,h,0],...hi],tag:"osnova"});
  for(let i=0;i<count;i++){
    const p=lo[i],q=lo[i+1],mid=(i+.5)*tau/count;
    const ux=Math.cos(mid),uz=Math.sin(mid);
    const apothem=r*Math.cos(Math.PI/count);
    const turn=([x,y,z]:Point):Point=>{
      const t=x*ux+z*uz-apothem;
      const shift=t*Math.cos(angle)+y*Math.sin(angle)-t;
      return [x+shift*ux,y*Math.cos(angle)-t*Math.sin(angle),z+shift*uz];
    };
    result.push({p:pointed?[p,q,turn([0,h,0])]:[p,q,turn(hi[i+1]),turn(hi[i])],tag:"omotač"});
    if(i===0&&fold&&!pointed){
      // The lid hinges on the upper edge of the first wall as that wall opens.
      const lid=hi.map(([x,y,z]):Point=>{
        const t=x*ux+z*uz-apothem, change=t*(Math.cos(angle)-1);
        return turn([x+change*ux,y-t*Math.sin(angle),z+change*uz]);
      });
      result.push({p:lid,tag:"osnova"});
    }
  }
  return result;
}
// Preserve lengths along each generator and around each horizontal section.
export function curvedMantle(cone:boolean,r:number,h:number,t:number):Face[]{
  const length=Math.hypot(r,h), beta=Math.atan2(r,h);
  const angle=beta+(Math.PI/2-beta)*t;
  const newR=length*Math.sin(angle);
  const point=(u:number,upper:boolean):Point=>{
    if(cone){
      if(upper)return [0,length*Math.cos(angle),0];
      const a=tau*r/newR*(u-.5);
      return [newR*Math.sin(a),0,newR*Math.cos(a)];
    }
    const arc=tau*r*(u-.5),curvature=(1-t)/r;
    return curvature<1e-9?[arc,upper?h:0,0]:
      [Math.sin(curvature*arc)/curvature,upper?h:0,(Math.cos(curvature*arc)-1)/curvature];
  };
  return Array.from({length:48},(_,i)=>({tag:"omotač",p:cone?[point(i/48,false),point((i+1)/48,false),point(i/48,true)]:
    [point(i/48,false),point((i+1)/48,false),point((i+1)/48,true),point(i/48,true)]}));
}
function FlatNet({kind,r,h,n}:{kind:Kind;r:number;h:number;n:number}){
  const m=solidMeasures(kind,r,h,n,0);
  if(kind==="lopta")return <p>Sfera se ne može razviti u ravan bez deformacije.</p>;
  if(kind==="valjak")return <svg viewBox={`-1 ${-2*r-1} ${m.perimeter+2} ${h+4*r+2}`} aria-label="Mreža valjka u razmeri"><g stroke="#294a70" strokeWidth=".1"><rect width={m.perimeter} height={h} fill="#a0d9d0"/>{[-r,h+r].map(y=><circle key={y} cx={r} cy={y} r={r} fill="#d2e2ff"/>)}</g></svg>;
  if(kind==="kupa"){
    const ang=tau*r/m.slant, s=m.slant, a=ang/2;
    const x=s*Math.cos(a),y=s*Math.sin(a);
    return <svg viewBox={`${-s-1} ${-s-1} ${2*s+2*r+2} ${2*s+2}`} aria-label="Isečak i tangentna kružna osnova"><path d={`M0 0 L${x} ${-y} A${s} ${s} 0 ${ang>Math.PI?1:0} 1 ${x} ${y} Z`} fill="#a0d9d0" stroke="#294a70" strokeWidth=".1"/><circle cx={s+r} cy={0} r={r} fill="#d2e2ff" stroke="#294a70" strokeWidth=".1"/></svg>;
  }
  return null;
}
export function SolidLab({id}:{id:string}){
  const initial:Kind=id.includes("prizma")?"prizma":id.includes("kupa")?"kupa":id.includes("valjak")?"valjak":id.includes("lopta")?"lopta":"piramida";
  const [kind,setKind]=useState<Kind>(initial),[r,setR]=useState(4),[h,setH]=useState(6),[n,setN]=useState(4);
  const [yaw,setYaw]=useState(32),[pitch,setPitch]=useState(24),[zoom,setZoom]=useState(100),[section,setSection]=useState(50);
  const [shell,setShell]=useState(false);
  const [mode,setMode]=useState("telo"),[part,setPart]=useState("osnova"),[phase,setPhase]=useState(100),[play,setPlay]=useState(false),[transparent,setTransparent]=useState(false);
  const poly=kind==="prizma"||kind==="piramida", pointed=kind==="piramida"||kind==="kupa";
  useEffect(()=>{
    if(!play)return;
    if(phase>=100)return;
    const timer=setTimeout(()=>setPhase(Math.min(100,phase+4)),60);
    return ()=>clearTimeout(timer);
  },[phase,play]);
  const d=r*section/100,m=solidMeasures(kind,r,h,n,d);
  const fold=poly&&mode==="mreža"?phase/100:0;
  const sweep=!poly&&mode==="rotacija"?Math.max(.002,phase/100):1;
  const unroll=mode==="razvijanje omotača";
  const mesh=unroll?curvedMantle(kind==="kupa",r,h,phase/100):faces(kind,r,h,n,sweep,fold);
  const baseY=kind==="lopta"?0:h/2;
  const project=([x,y,z]:Point)=>{
    const t=yaw*Math.PI/180,a=pitch*Math.PI/180,u=x*Math.cos(t)+z*Math.sin(t),v=-x*Math.sin(t)+z*Math.cos(t);
    return [u,-(y-baseY)*Math.cos(a)+v*Math.sin(a),v*Math.cos(a)+(y-baseY)*Math.sin(a)];
  };
  let tri:Point[]=[],outline:Point[]=[];
  if(kind==="lopta"){
    outline=ring(m.section,d,64);
    tri=[[0,0,0],[0,d,0],[m.section,d,0]];
  }else{
    const end=kind==="prizma"&&n===3?1:Math.floor(n/2);
    const u:Point=[r,0,0],v:Point=poly?[r*Math.cos(end*tau/n),0,r*Math.sin(end*tau/n)]:[-r,0,0];
    if(pointed){
      const midAngle=Math.PI/n,foot:Point=kind==="piramida"&&part==="bočna visina"?[m.apothem*Math.cos(midAngle),0,m.apothem*Math.sin(midAngle)]:u;
      const oppositeRadius=poly&&n%2?(part==="bočna visina"?r:m.apothem):Math.hypot(foot[0],foot[2]);
      const ratio=oppositeRadius/Math.hypot(foot[0],foot[2]);
      tri=[[0,h,0],[0,0,0],foot];outline=[foot,[-foot[0]*ratio,0,-foot[2]*ratio],[0,h,0]];
    }else{tri=[u,v,[v[0],h,v[2]]];outline=[u,v,[v[0],h,v[2]],[u[0],h,u[2]]];}
  }
  const projected=mesh.map(face=>({...face,pts:face.p.map(project)})).sort((a,b)=>a.pts.reduce((s,p)=>s+p[2],0)/a.pts.length-b.pts.reduce((s,p)=>s+p[2],0)/b.pts.length);
  const all=projected.flatMap(f=>f.pts);
  const xs=all.map(p=>p[0]),ys=all.map(p=>p[1]);
  const left=Math.min(...xs),right=Math.max(...xs),top=Math.min(...ys),bottom=Math.max(...ys);
  const cx=(left+right)/2,cy=(top+bottom)/2;
  const scale=Math.min(248/Math.max(1,right-left),152/Math.max(1,bottom-top))*(zoom/100);
  const closedPoly=poly&&fold===0;
  const edges=new Map<string,{a:Point;b:Point;visible:boolean}>();
  if(closedPoly){
    for(const f of mesh){
      const a=f.p[0],b=f.p[1],c=f.p[2];
      const v=b.map((x,i)=>x-a[i]),w=c.map((x,i)=>x-a[i]);
      const normal=[v[1]*w[2]-v[2]*w[1],v[2]*w[0]-v[0]*w[2],v[0]*w[1]-v[1]*w[0]];
      const inner=[0,h/(pointed?4:2),0];
      const sign=Math.sign(normal.reduce((sum,x,i)=>sum+x*(a[i]-inner[i]),0));
      const depth=project(normal as Point)[2]-project([0,0,0])[2];
      const visible=sign*depth>=0;
      f.p.forEach((a,i)=>{
        const b=f.p[(i+1)%f.p.length];
        const key=[a,b].map(p=>p.map(v=>Math.round(v*1e6)).join(",")).sort().join("|");
        edges.set(key,{a,b,visible:visible||Boolean(edges.get(key)?.visible)});
      });
    }
  }
  const screen=([x,y]:number[])=>[160+(x-cx)*scale,110+(y-cy)*scale].join(",");
  const points=(arr:Point[])=>arr.map(p=>screen(project(p))).join(" ");
  const run=()=>{setPlay(false);setPhase(0);if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)setPlay(true)};
  const reset=()=>{setYaw(32);setPitch(24);setZoom(100);setPlay(false);setPhase(100);setSection(0)};
  const rad=kind==="lopta"?m.section:pointed?(kind==="piramida"&&part==="bočna visina"?m.apothem:r):poly?2*r*Math.sin(Math.floor(n/2)*Math.PI/n):2*r;
  const vert=kind==="lopta"?d:h;
  const profileScale=110/Math.max(rad,vert,1);
  return <section className="spring-lab e8-lab"><h3>Prostorna laboratorija</h3>
    <label>Telo <select aria-label="Telo" value={kind} onChange={e=>{setKind(e.target.value as Kind);setPart("osnova");setMode("telo");reset()}}>{["prizma","piramida","valjak","kupa","lopta"].map(s=><option key={s}>{s}</option>)}</select></label>
    {poly&&<label>Osnova <select aria-label="Osnova" value={n} onChange={e=>setN(+e.target.value)}><option value={3}>Jednakostranični trougao</option><option value={4}>Kvadrat</option><option value={6}>Pravilni šestougao</option></select></label>}
    <label>Prikaz <select aria-label="Prikaz" value={mode} onChange={e=>{setMode(e.target.value);setPlay(false);setPhase(100);if(e.target.value==="mreža"&&poly||e.target.value==="razvijanje omotača"&&kind==="kupa")setPitch(75)}}>{["telo","presek",...(kind!=="lopta"?["mreža"]:[]),...(!poly?["rotacija"]:[]),...(!poly&&kind!=="lopta"?["razvijanje omotača"]:[])].map(s=><option key={s}>{s}</option>)}</select></label>
    {kind!=="lopta"&&<label>Istakni <select aria-label="Istakni" value={part} onChange={e=>setPart(e.target.value)}>{["osnova","omotač","visina",...(kind==="piramida"?["bočna visina","bočna ivica"]:[])].map(s=><option key={s}>{s}</option>)}</select></label>}
    {kind==="lopta"&&(mode==="rotacija"||mode==="presek")&&<label><input type="checkbox" checked={shell} onChange={e=>setShell(e.target.checked)}/> {mode==="rotacija"?"Rotiraj samo polukružnicu (sfera)":"Presek sfere (kružnica)"}</label>}
    {mode==="mreža"&&!poly?<FlatNet {...{kind,r,h,n}}/>:<svg viewBox="0 0 320 220" role="img" aria-label="Prostorni model prema izabranim dimenzijama">
    {projected.map((face,i)=><polygon key={i} points={face.pts.map(screen).join(" ")} fill={face.tag===part?"#80c9bd":face.tag==="osnova"?"#acc6e9":"#dce8f3"} fillOpacity={transparent?.18:1} stroke="#45627d" strokeWidth={closedPoly?0:poly?1.4:.45} strokeDasharray={transparent&&face.pts.reduce((s,p)=>s+p[2],0)<0?"3 3":undefined}/>)}
    {closedPoly&&[...edges.entries()].filter(([,e])=>e.visible||transparent).map(([k,e])=><polyline key={k} points={points([e.a,e.b])} stroke={e.visible?"#243d56":"#617385"} strokeWidth="1.5" strokeDasharray={e.visible?undefined:"4 3"}/>)}
    {mode==="presek"&&<><polygon points={points(outline)} fill={kind==="lopta"&&shell?"none":"#ffc56c"} fillOpacity=".65" stroke="#924807"/><polygon points={points(tri)} fill="#fff0ae" stroke="#8c3808" strokeWidth="2"/></>}
    {!fold&&!unroll&&kind!=="lopta"&&["visina","bočna visina","bočna ivica"].includes(part)&&<polyline points={points(part==="visina"?[[0,0,0],[0,h,0]]:[tri[0],tri[2]])} fill="none" stroke="#a73c18" strokeWidth="3"/>}
    {mode==="rotacija"&&<polyline points={points(kind==="lopta"?Array.from({length:33},(_,i)=>[r*Math.cos(Math.PI*(i/32-.5)),r*Math.sin(Math.PI*(i/32-.5)),0] as Point):kind==="kupa"?[[0,0,0],[r,0,0],[0,h,0],[0,0,0]]:[[0,0,0],[r,0,0],[r,h,0],[0,h,0],[0,0,0]])} fill={kind==="lopta"&&!shell?"#ffd180":"none"} fillOpacity=".8" stroke="#b54222" strokeWidth="2"/>}</svg>}
    <div className="e8-controls"><Slider name={poly?"Poluprečnik opisane kružnice (cm)":"Poluprečnik (cm)"} min={1} max={8} value={r} set={setR}/>{kind!=="lopta"&&<Slider name="Visina (cm)" min={1} max={12} value={h} set={setH}/>}
    <Slider name="Okretanje" min={-180} max={180} value={yaw} set={setYaw}/><Slider name="Nagib pogleda" min={-80} max={80} value={pitch} set={setPitch}/><Slider name="Uvećanje (%)" min={65} max={115} value={zoom} set={setZoom}/></div>
    <label><input type="checkbox" checked={transparent} onChange={e=>setTransparent(e.target.checked)}/> Providne strane</label><button onClick={reset}>Početni pogled</button>
    {(mode==="rotacija"||unroll||mode==="mreža"&&poly)&&<><Slider name="Tok animacije (%)" min={0} max={100} value={phase} set={v=>{setPlay(false);setPhase(v)}}/><button onClick={run}>Ponovi animaciju</button></>}
    {kind==="lopta"&&mode==="presek"&&<Slider name="Rastojanje ravni (% poluprečnika)" min={0} max={100} value={section} set={setSection}/>}
    {mode==="presek"&&<><h4>Trougao u ravni preseka</h4><svg viewBox="0 0 220 150" role="img" aria-label="Katete su vodoravna i uspravna duž"><polygon points={`38,125 ${38+rad*profileScale},125 38,${125-vert*profileScale}`} fill="#fff0ae" stroke="#874315" strokeWidth="2"/><text x="38" y="144">{fmt(rad)} cm</text><text x="1" y="80">{fmt(vert)}</text></svg><p>{kind==="lopta"?"Katete su poluprečnik preseka i rastojanje ravni od centra. Hipotenuza je R.":pointed?"Uspravna kateta je H. Druga kateta spaja centar sa odgovarajućom tačkom na granici osnove.":"Uspravna kateta je H. Druga je raspon prikazanog preseka."} {kind==="lopta"&&(m.section===0?"Presek je jedna tačka.":shell?"Presek sfere je kružnica.":"Presek lopte je krug.")} {(!rad||!vert)&&"Na ovoj granici trougao se svodi na duž."}</p></>}
    <p>{kind==="lopta"?"P = 4πR², V = 4πR³ : 3":pointed?"P = B + M, V = B·H : 3":"P = 2B + M, V = B·H"}. P ≈ {fmt(m.area)} cm² · V ≈ {fmt(m.volume)} cm³.</p>
    {pointed&&<figure><figcaption>Jednaka osnova i visina · poređenje zapremina</figcaption><svg viewBox="0 0 300 58" aria-label="Zapremina piramide ili kupe je trećina zapremine prizme odnosno valjka"><rect x="8" y="6" width="270" height="15" fill="#4a88a4"/><rect x="8" y="34" width="90" height="15" fill="#c47b33"/>{[98,188].map(x=><line key={x} x1={x} x2={x} y1="6" y2="21" stroke="white" strokeWidth="2"/>)}</svg></figure>}
    {kind!=="lopta"&&<p>B ≈ {fmt(m.base)} cm² · M ≈ {fmt(m.mantle)} cm². {pointed?`Ista osnova i visina daju zapreminu ${kind==="kupa"?"valjka":"prizme"} ≈ ${fmt(3*m.volume)} cm³.`:""}</p>}
    {unroll&&<p>{kind==="kupa"?"Izvodnice zadržavaju dužinu s. Luk otvorenog isečka zadržava dužinu obima osnove.":"Pri odmotavanju visina ostaje H, a kružna ivica postaje duž dužine 2πr."}</p>}
    {mode==="mreža"&&<p>{kind==="kupa"?`Luk = 2πr ≈ ${fmt(tau*r)} cm. Poluprečnik isečka s ≈ ${fmt(m.slant)} cm. Ugao ≈ ${fmt(360*r/m.slant)}°.`:kind==="valjak"?`Pravougaonik ima dužinu 2πr ≈ ${fmt(tau*r)} cm i visinu ${h} cm.`:"Pomeri klizač i prati ivice koje ostaju spojene."}</p>}
    {kind==="piramida"&&<RectangularRoof/>}
  </section>;
}

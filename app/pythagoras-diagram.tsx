import type {TaskDiagram} from './content/types';
type Diagram=Extract<TaskDiagram,{type:'pythagoras'}>;
type P=[number,number];
const numeric=(s?:string)=>{if(!s)return undefined;if(/^\d+(?:[.,]\d+)?$/.test(s))return Number(s.replace(',','.'));const m=s.match(/^(\d+(?:[.,]\d+)?)?√(\d+(?:[.,]\d+)?)$/);return m?Number(m[1]?.replace(',','.')??1)*Math.sqrt(Number(m[2].replace(',','.'))):undefined;};
const polygon=(ps:P[])=>'M'+ps.map(p=>p.join(' ')).join(' L')+' Z';
const line=(a:P,b:P)=>'M'+a.join(' ')+' L'+b.join(' ');
const midpoint=(a:P,b:P):P=>[(a[0]+b[0])/2,(a[1]+b[1])/2];
function Label({a,b,children,offset=23}:{a:P;b:P;children:string;offset?:number}){const m=midpoint(a,b),d=Math.hypot(b[0]-a[0],b[1]-a[1])||1;return <text x={m[0]+offset*(b[1]-a[1])/d} y={m[1]-offset*(b[0]-a[0])/d+6}>{children}</text>}
function Vertex({p,name,dx=0,dy=0}:{p:P;name:string;dx?:number;dy?:number}){return <><circle className="vertex" data-vertex={name} cx={p[0]} cy={p[1]} r="3"/><text x={p[0]+dx} y={p[1]+dy}>{name}</text></>}
function Right({p,a,b}:{p:P;a:P;b:P}){const unit=(q:P):P=>{const d=Math.hypot(q[0]-p[0],q[1]-p[1]);return [(q[0]-p[0])/d*17,(q[1]-p[1])/d*17]};const u=unit(a),v=unit(b);return <path d={polygon([[p[0]+u[0],p[1]+u[1]],[p[0]+u[0]+v[0],p[1]+u[1]+v[1]],[p[0]+v[0],p[1]+v[1]]]).replace(' Z','')}/>}
const fit=(ps:P[],height=195):P[]=>{const xs=ps.map(p=>p[0]),ys=ps.map(p=>p[1]),minX=Math.min(...xs),minY=Math.min(...ys),w=Math.max(...xs)-minX,h=Math.max(...ys)-minY,s=Math.min(390/(w||1),height/(h||1));return ps.map(p=>[100+(390-w*s)/2+(p[0]-minX)*s,52+(height-h*s)/2+(p[1]-minY)*s])};
export function PythagorasDiagram({diagram,label,caption}:{diagram:Diagram;label:string;caption:string}){
 const l=diagram.labels??{},v=diagram.variant;let shape,labels;
 const a=numeric(l.a),b=numeric(l.b),c=numeric(l.c),h=numeric(l.h),s=numeric(l.s),d=numeric(l.d),d1=numeric(l.d1),d2=numeric(l.d2);
 if(v==='right-altitude'){
  let p=numeric(l.p),q=numeric(l.q);if(!p&&a&&c)p=a*a/c;if(!q&&b&&c)q=b*b/c;if(!p&&q&&c&&c>q)p=c-q;if(!q&&p&&c&&c>p)q=c-p;if(!q&&p&&h)q=h*h/p;if(!p&&q&&h)p=h*h/q;if(!p&&!q&&a&&b){p=a*a/Math.hypot(a,b);q=b*b/Math.hypot(a,b);}if(!p&&!q&&c&&h&&c>=2*h){p=(c+Math.sqrt(c*c-4*h*h))/2;q=c-p;}
  p=p??(q?1.5*q:9);q=q??(p/1.5);const [A,B,C,D]=fit([[0,0],[p+q,0],[q,-Math.sqrt(p*q)],[q,0]]);
  shape=<><path className="shape" d={polygon([A,C,B])}/><path className="accent" d={line(C,D)}/><Right p={D} a={C} b={B}/><Right p={C} a={A} b={B}/></>;
  labels=<><Vertex p={A} name="A" dx={-18} dy={19}/><Vertex p={B} name="B" dx={18} dy={19}/><Vertex p={C} name="C" dy={-17}/><Vertex p={D} name="D" dy={22}/><Label a={A} b={D} offset={-28}>{l.q??'q'}</Label><Label a={D} b={B} offset={-28}>{l.p??'p'}</Label><Label a={C} b={D} offset={-25}>{l.h??'h'}</Label><Label a={A} b={C}>{l.b??'b'}</Label><Label a={C} b={B}>{l.a??'a'}</Label>{l.c&&<text x="295" y="314">c={l.c}</text>}</>;
 }else if(v==='rectangle'||v==='square'){
  const width=a??(b&&d&&d>b?Math.sqrt(d*d-b*b):v==='square'?1:8),height=v==='square'?width:b??(d&&d>width?Math.sqrt(d*d-width*width):width*.65),[A,B,C,D]=fit([[0,0],[width,0],[width,-height],[0,-height]]);
  shape=<><path className="shape" d={polygon([A,B,C,D])}/><path className="accent" d={line(A,C)}/><Right p={B} a={A} b={C}/></>;
  labels=<><Vertex p={A} name="A" dx={-17} dy={18}/><Vertex p={B} name="B" dx={17} dy={18}/><Vertex p={C} name="C" dx={17} dy={-10}/><Vertex p={D} name="D" dx={-17} dy={-10}/><Label a={A} b={B} offset={-28}>{l.a??'a'}</Label><Label a={A} b={D} offset={25}>{v==='square'?l.a??'a':l.b??'b'}</Label><Label a={A} b={C}>{l.d??'d'}</Label></>;
 }else if(v==='isosceles'||v==='equilateral'){
  const base=a??(v==='equilateral'&&h?2*h/Math.sqrt(3):s&&h&&s>h?2*Math.sqrt(s*s-h*h):6),height=v==='equilateral'?base*Math.sqrt(3)/2:h??(s&&s>base/2?Math.sqrt(s*s-base*base/4):base*.75),[A,B,C,D]=fit([[base/2,-height],[0,0],[base,0],[base/2,0]]);
  shape=<><path className="shape" d={polygon([B,A,C])}/><path className="accent" d={line(A,D)}/><Right p={D} a={A} b={C}/></>;
  labels=<><Vertex p={A} name="A" dy={-15}/><Vertex p={B} name="B" dx={-15} dy={19}/><Vertex p={C} name="C" dx={15} dy={19}/><Vertex p={D} name="D" dy={21}/><Label a={B} b={A}>{v==='equilateral'?l.a??'a':l.s??'s'}</Label><Label a={A} b={C}>{v==='equilateral'?l.a??'a':l.s??'s'}</Label><Label a={A} b={D} offset={25}>{l.h??'h'}</Label><Label a={D} b={C} offset={-27}>{l.half??(l.a?l.a+'/2':'a/2')}</Label></>;
 }else if(v==='rhombus'){
  const first=d1??(a&&d2&&a>d2/2?2*Math.sqrt(a*a-d2*d2/4):6),second=d2??(a&&a>first/2?2*Math.sqrt(a*a-first*first/4):8),[A,B,C,D,O]=fit([[0,-first/2],[second/2,0],[0,first/2],[-second/2,0],[0,0]]);
  shape=<><path className="shape" d={polygon([A,B,C,D])}/><path className="accent" d={line(A,C)+' '+line(B,D)}/><Right p={O} a={A} b={B}/></>;
  labels=<><Vertex p={A} name="A" dy={-15}/><Vertex p={B} name="B" dx={18} dy={5}/><Vertex p={C} name="C" dy={25}/><Vertex p={D} name="D" dx={-18} dy={5}/><Vertex p={O} name="O" dx={-14} dy={21}/><Label a={A} b={B}>{l.a??'a'}</Label><Label a={A} b={O} offset={-30}>{l.d1?l.d1+'/2':'d₁/2'}</Label><Label a={O} b={B} offset={-27}>{l.d2?l.d2+'/2':'d₂/2'}</Label></>;
 }else if(v==='trapezoid'||v==='right-trapezoid'){
  const isRight=v==='right-trapezoid',givenDiff=numeric(l.diff)??(h&&c&&c>h?Math.sqrt(c*c-h*h):undefined),lower=a??(b&&givenDiff?b+givenDiff*(isRight?1:2):givenDiff?givenDiff*(isRight?2:3):10),upper=b??(givenDiff?lower-givenDiff*(isRight?1:2):lower*.55),diff=(lower-upper)/(isRight?1:2),height=h??(c&&c>Math.abs(diff)?Math.sqrt(c*c-diff*diff):lower*.5),left=isRight?0:diff,[A,B,C,D,H]=fit([[0,0],[lower,0],[left+upper,-height],[left,-height],[left+upper,0]]);
  shape=<><path className="shape" d={polygon([A,B,C,D])}/><path className="accent" d={line(C,H)}/><Right p={H} a={C} b={B}/></>;
  labels=<><Vertex p={A} name="A" dx={-16} dy={20}/><Vertex p={B} name="B" dx={16} dy={20}/><Vertex p={C} name="C" dx={15} dy={-12}/><Vertex p={D} name="D" dx={-15} dy={-12}/><Vertex p={H} name="H" dy={20}/><Label a={A} b={B} offset={-60}>{l.a??'a'}</Label><Label a={D} b={C}>{l.b??'b'}</Label><Label a={C} b={B}>{l.c??'c'}</Label><Label a={H} b={C} offset={-27}>{l.h??'h'}</Label><Label a={H} b={B} offset={-28}>{l.diff??(isRight?'a−b':'(a−b)/2')}</Label></>;
 }else{
  const legA=a??(c&&b&&c>b?Math.sqrt(c*c-b*b):4),legB=b??(c&&c>legA?Math.sqrt(c*c-legA*legA):legA*.75),[A,B,C]=fit([[0,-legB],[legA,0],[0,0]]);
  shape=<><path className="shape" d={polygon([A,B,C])}/><Right p={C} a={A} b={B}/></>;
  labels=<><Vertex p={A} name="A" dx={-18} dy={-10}/><Vertex p={B} name="B" dx={18} dy={19}/><Vertex p={C} name="C" dx={-18} dy={19}/><Label a={C} b={B} offset={-28}>{l.a??'a'}</Label><Label a={C} b={A} offset={27}>{l.b??'b'}</Label><Label a={A} b={B}>{l.c??'c'}</Label></>;
 }
 return <figure className="task-diagram precise-diagram" data-no-transliterate><svg viewBox="0 0 600 335" role="img" aria-label={label}>{shape}{labels}</svg>{caption&&<figcaption>{caption}</figcaption>}</figure>;
}

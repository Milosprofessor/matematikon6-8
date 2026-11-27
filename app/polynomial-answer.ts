// Sparse bivariate (x, π) polynomials with bounded size and exact integer coefficients.
type Poly=Map<number,bigint>;
type Expr={p:Poly; parts:Poly[]; power:number; base?:Poly};
const single=(key:number,value:bigint):Poly=>new Map(value?[[key,value]]:[]);
const keyOf=(p:Poly)=>JSON.stringify([...p].sort(([a],[b])=>a-b).map(([k,v])=>[k,String(v)]));
function combine(a:Poly,b:Poly,product:boolean,sign=BigInt(1)){
 const out:Poly=new Map(product?[]:a);
 function add(k:number,v:bigint){
  const n=(out.get(k)??BigInt(0))+v;
  if(k>400||String(n).length>60)throw Error();
  if(n)out.set(k,n);else out.delete(k);
 }
 if(product){for(const [i,v] of a)for(const [j,w] of b){
  if(i%20+j%20>=20)throw Error();
  add(i+j,v*w);
 }}else for(const [i,v] of b)add(i,sign*v);
 return out;
}
function parse(source:string):Expr {
 const s=source.toLowerCase().replace(/х/g,"x").replace(/pi/g,"π").replace(/−/g,"-").replace(/²/g,"^2").replace(/³/g,"^3").replace(/⁴/g,"^4").replace(/⁵/g,"^5").replace(/\s/g,"").replace(/·/g,"*");
 if(!s||s.length>100||/[^0-9xπ()+*^-]/.test(s))throw Error();
 let i=0;
 const atom=(p:Poly):Expr=>({p,parts:[p],power:1});
 function factor():Expr{
  let e:Expr;
  if(s[i]==="("){i++;e=sum();if(s[i++]!==")")throw Error();}
  else if(s[i]==="x"||s[i]==="π"){e=atom(single(s[i++]==="x"?20:1,BigInt(1)));}
  else{const n=/^\d+/.exec(s.slice(i))?.[0];if(!n)throw Error();i+=n.length;e=atom(single(0,BigInt(n)));}
  if(s[i]==="^"){i++;const n=/^\d+/.exec(s.slice(i))?.[0];if(!n||+n>10)throw Error();i+=n.length;
   let p=single(0,BigInt(1));for(let t=0;t<+n;t++)p=combine(p,e.p,true);
   e={p,parts:Array.from({length:+n},()=>e.p),power:+n,base:e.p};
  }
  return e;
 }
 function term():Expr{
  const negative=s[i]==="-";if(negative||s[i]==="+")i++;
  let e=factor();
  if(negative){const minus=single(0,-BigInt(1));e={p:combine(e.p,minus,true),parts:[minus,...e.parts],power:1};}
  while(i<s.length&&(s[i]==="*"||/[xπ(]/.test(s[i]))){if(s[i]==="*")i++;const b=factor();e={p:combine(e.p,b.p,true),parts:[...e.parts,...b.parts],power:1};}
  return e;
 }
 function sum():Expr{let e=term();while(s[i]==="+"||s[i]==="-"){const sign=s[i++]==="-"?-BigInt(1):BigInt(1);e=atom(combine(e.p,term().p,false,sign));}return e;}
 const e=sum();if(i!==s.length)throw Error();return e;
}
export function algebraAnswer(value:string,expected:string,form:"value"|"product"|"square"|"expanded"){
 try{
  const a=parse(value),b=parse(expected);
  if(keyOf(a.p)!==keyOf(b.p))return false;
  if(form==="square")return a.power===2&&!!a.base&&a.base.size===2;
  if(form==="expanded"){
   if(/[()]/.test(value))return false;
   // Expanded form has exactly one nonzero term per monomial.
   const terms=value.replace(/−/g,"-").replace(/\s/g,"").split(/(?=[+-])/);
   const monomials=new Set<number>();
   for(const term of terms){
    const normalized=term.toLowerCase().replace(/х/g,"x").replace(/²/g,"^2").replace(/³/g,"^3").replace(/·/g,"*");
    if(!/^[+-]?(?:\d+|(?:\d+\*?)?[xπ](?:\^(?:[2-9]|10))?|[xπ](?:\^(?:[2-9]|10))?\*\d+)$/.test(normalized))return false;
    const parsed=parse(term).p;
    if(parsed.size!==1)return false;
    const degree=[...parsed.keys()][0];
    if(monomials.has(degree))return false;
    monomials.add(degree);
   }
   return true;
  }
  if(form==="product"){
   const factors=(e:Expr)=>e.parts.filter(p=>[...p.keys()].some(k=>k!==0));
   const fa=factors(a),fb=factors(b);
   // Proportional linear factors may be written in any order or with opposite signs.
   const direction=(p:Poly)=>{const entries=[...p].sort(([i],[j])=>i-j);let d=BigInt(0);for(const [,v] of entries){let w=v<BigInt(0)?-v:v;while(w){[d,w]=[w,d%w];}}return keyOf(new Map(entries.map(([k,v])=>[k,v/(entries[0][1]<BigInt(0)?-d:d)])));};
   return fa.length===fb.length&&fa.map(direction).sort().join(";")===fb.map(direction).sort().join(";");
  }
  return true;
 }catch{return false;}
}

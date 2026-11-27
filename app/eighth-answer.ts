// Exact products of rational factors, square roots of integers and π.
// Squaring the magnitude avoids rounding and makes √12 equivalent to 2√3.
type Product = {sign:number; top:bigint; bottom:bigint; pi:number};
const zero=BigInt(0), one=BigInt(1);
function gcd(a:bigint,b:bigint):bigint {return b===zero?a:gcd(b,a%b)}
function squareRoot(n:bigint){
  if(n<one+one)return n;
  let x=n,y=(x+one)/(one+one);
  while(y<x){x=y;y=(x+n/x)/(one+one)}
  return x;
}
function sum(x:Product,y:Product):Product|undefined{
  if(x.top===zero)return y;
  if(y.top===zero)return x;
  if(x.pi!==y.pi)return;
  const nt=y.top*x.bottom,dt=y.bottom*x.top,g=gcd(nt,dt);
  const n=squareRoot(nt/g),d=squareRoot(dt/g);
  if(n*n!==nt/g||d*d!==dt/g)return;
  const signed=BigInt(x.sign)*d+BigInt(y.sign)*n;
  return {sign:signed<zero?-1:1,top:x.top*signed*signed,bottom:x.bottom*d*d,pi:x.pi};
}
function product(value:string):Product|undefined {
  if(value.length>90)return;
  const mixed=/^([+-]?)(\d+)\s+(\d+)\/(\d+)$/.exec(value.trim().replace(/−/g,"-"));
  if(mixed){
    const [,sign,whole,part,denominator]=mixed;
    if(BigInt(denominator)===BigInt(0)||BigInt(part)>=BigInt(denominator))return;
    value=(sign==="-"?"-":"")+(BigInt(whole)*BigInt(denominator)+BigInt(part))+"/"+denominator;
  }else if(/\d\s+\d/u.test(value))return;
  const s=value.trim().toLowerCase().replace(/\s/g,"").replace(/−/g,"-").replace(/²/g,"^2").replace(/³/g,"^3").replace(/,/g,".").replace(/pi/g,"π").replace(/sqrt/g,"√").replace(/[·×]/g,"*");
  if(!s || s.length>90)return;
  let index=0;
  function expression():Product|undefined{
    let result=sequence();
    while(result && (s[index]==="+"||s[index]==="-")){
      const sign=s[index++]==="-"?-1:1, next=sequence();
      if(!next)return;
      result=sum(result,{...next,sign:next.sign*sign});
    }
    return result;
  }
  function sequence():Product|undefined {
    let current:Product={sign:1,top:BigInt(1),bottom:BigInt(1),pi:0};
    let count=0;
    while(index<s.length && s[index]!==")"){
      if(count&&(s[index]==="+"||s[index]==="-"))break;
      let divide=false;
      if(count && "*/:".includes(s[index])){divide=s[index]!=="*";index++;}
      else if(count && /[\d.]/.test(s[index]))return;
      let sign=1;
      if(s[index]==="-"||s[index]==="+"){sign=s[index++]==="-"?-1:1;}
      let factor:Product;
      if(s[index]==="("){
        index++;const nested=expression();if(!nested||s[index++]!==")")return;
        factor={...nested,sign:sign*nested.sign};
      }else if(s[index]==="π"){
        index++;factor={sign,top:BigInt(1),bottom:BigInt(1),pi:1};
      }else{
        const root=s[index]==="√";
        if(root)index++;
        const wrapped=root&&s[index]==="(";if(wrapped)index++;
        const number=/^(?:\d+(?:\.\d+)?|\.\d+)/.exec(s.slice(index))?.[0];if(!number)return;
        index+=number.length;if(wrapped&&s[index++]!==")")return;
        const denominator=BigInt(10)**BigInt(number.split(".")[1]?.length??0);
        const numerator=BigInt(number.replace(".",""));
        factor={sign,top:root?numerator:numerator**BigInt(2),bottom:root?denominator:denominator**BigInt(2),pi:0};
      }
      if(s[index]==="^"){
        index++;
        const power=/^\d{1,2}/.exec(s.slice(index))?.[0];
        if(!power||Number(power)>10)return;
        index+=power.length;
        const exponent=BigInt(power);
        if(factor.top===BigInt(0)&&exponent===BigInt(0))return;
        factor={sign:sign*(Number(power)%2?factor.sign*sign:1),top:factor.top**exponent,bottom:factor.bottom**exponent,pi:factor.pi*Number(power)};
      }
      if(divide&&factor.top===BigInt(0))return;
      current={sign:current.sign*factor.sign,top:current.top*(divide?factor.bottom:factor.top),
        bottom:current.bottom*(divide?factor.top:factor.bottom),pi:current.pi+(divide?-factor.pi:factor.pi)};
      count++;
    }
    if(count)return current;
  }
  const result=expression();return index===s.length?result:undefined;
}
function scalar(a:string,b:string){
  const x=product(a),y=product(b);
  return Boolean(x&&y&&(x.top===BigInt(0)&&y.top===BigInt(0) || x.sign===y.sign&&x.pi===y.pi&&x.top*y.bottom===y.top*x.bottom));
}
function coordinates(raw:string){
  const s=raw.trim();
  if(!s.startsWith("(")||!s.endsWith(")"))return;
  const inner=s.slice(1,-1);
  const parts=inner.split(inner.includes(";")?";":",");
  if(parts.length===2)return parts;
}
export function eighthAnswer(value:string,key:string){
  const pair=coordinates(key);
  if(pair){
    const entered=coordinates(value);
    return Boolean(entered&&scalar(entered[0],pair[0])&&scalar(entered[1],pair[1]));
  }
  return scalar(value,key);
}

// Exact products of rational factors, square roots of integers and π.
// Squaring the magnitude avoids rounding and makes √12 equivalent to 2√3.
type Product = {sign:number; top:bigint; bottom:bigint; pi:number};
function product(value:string):Product|undefined {
  const s=value.trim().toLowerCase().replace(/\s/g,"").replace(/−/g,"-").replace(/,/g,".").replace(/pi/g,"π").replace(/sqrt/g,"√").replace(/[·×]/g,"*");
  if(!s || s.length>90)return;
  let index=0;
  function sequence():Product|undefined {
    let current:Product={sign:1,top:BigInt(1),bottom:BigInt(1),pi:0};
    let count=0;
    while(index<s.length && s[index]!==")"){
      let divide=false;
      if(count && "*/:".includes(s[index])){divide=s[index]!=="*";index++;}
      else if(count && /[\d.]/.test(s[index]))return;
      let sign=1;
      if(s[index]==="-"){sign=-1;index++;}
      let factor:Product;
      if(s[index]==="("){
        index++;const nested=sequence();if(!nested||s[index++]!==")")return;
        factor={...nested,sign:sign*nested.sign};
      }else if(s[index]==="π"){
        index++;factor={sign,top:BigInt(1),bottom:BigInt(1),pi:1};
      }else{
        const root=s[index]==="√";
        if(root)index++;
        const wrapped=root&&s[index]==="(";if(wrapped)index++;
        const number=/^\d+(?:\.\d+)?/.exec(s.slice(index))?.[0];if(!number)return;
        index+=number.length;if(wrapped&&s[index++]!==")")return;
        const denominator=BigInt(10)**BigInt(number.split(".")[1]?.length??0);
        const numerator=BigInt(number.replace(".",""));
        factor={sign,top:root?numerator:numerator**BigInt(2),bottom:root?denominator:denominator**BigInt(2),pi:0};
      }
      if(divide&&factor.top===BigInt(0))return;
      current={sign:current.sign*factor.sign,top:current.top*(divide?factor.bottom:factor.top),
        bottom:current.bottom*(divide?factor.top:factor.bottom),pi:current.pi+(divide?-factor.pi:factor.pi)};
      count++;
    }
    if(count)return current;
  }
  const result=sequence();return index===s.length?result:undefined;
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

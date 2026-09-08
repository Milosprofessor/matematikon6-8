export type ScriptChoice = "cyrl" | "latn";

const pairs: Array<[string,string]> = [
  ["DŽ","Џ"],["Dž","Џ"],["dž","џ"],["LJ","Љ"],["Lj","Љ"],["lj","љ"],["NJ","Њ"],["Nj","Њ"],["nj","њ"],
  ["A","А"],["B","Б"],["C","Ц"],["Č","Ч"],["Ć","Ћ"],["D","Д"],["Đ","Ђ"],["E","Е"],["F","Ф"],["G","Г"],["H","Х"],["I","И"],["J","Ј"],["K","К"],["L","Л"],["M","М"],["N","Н"],["O","О"],["P","П"],["R","Р"],["S","С"],["Š","Ш"],["T","Т"],["U","У"],["V","В"],["Z","З"],["Ž","Ж"],
  ["a","а"],["b","б"],["c","ц"],["č","ч"],["ć","ћ"],["d","д"],["đ","ђ"],["e","е"],["f","ф"],["g","г"],["h","х"],["i","и"],["j","ј"],["k","к"],["l","л"],["m","м"],["n","н"],["o","о"],["p","п"],["r","р"],["s","с"],["š","ш"],["t","т"],["u","у"],["v","в"],["z","з"],["ž","ж"]
];

export function toCyrillic(value:string){
  let out=value;
  for(const [latin,cyrillic] of pairs) out=out.split(latin).join(cyrillic);
  return out;
}

const setSymbols=new Set(["N","Z","Q","R"]);
const measurementUnits=/^(?:mm|cm|dm|km|mg|kg|ml|cl|dl|min|m|g|l|h)(?:\^?[23]|[²³])?$/;
const latinToken=/[A-Za-zČĆŽŠĐčćžšđ]+(?:\^?[23]|[²³₀-₉0-9])?/g;

function isProtectedNotation(token:string,mathMode:boolean,value:string,offset:number){
  if(setSymbols.has(token))return true;
  if(measurementUnits.test(token))return true;
  // „s” je u običnom tekstu predlog, a merna jedinica samo uz broj.
  if(token==="s"){
    if(mathMode)return true;
    const before=value.slice(0,offset).trimEnd();
    const after=value.slice(offset+token.length).trimStart();
    return /[0-9)]$/.test(before)||/^[0-9(]/.test(after);
  }
  if(!mathMode)return false;
  if(/^[A-ZČĆŽŠĐ](?:[₀-₉0-9])?$/.test(token))return true;
  if(/^[A-ZČĆŽŠĐ]{2,4}(?:[₀-₉0-9])?$/.test(token))return true;
  if(/^[a-hj-tv-z]$/.test(token))return true;
  return false;
}

function localizePreservingNotation(value:string,mathMode:boolean){
  return value.replace(latinToken,(token,offset)=>isProtectedNotation(token,mathMode,value,offset)?token:toCyrillic(token));
}

export function localize(value:string,script:ScriptChoice){return script==="cyrl"?localizePreservingNotation(value,false):value}

export function localizeMathText(value:string,script:ScriptChoice){
  if(script==="latn")return value;
  return value.split(/(\s+)/).map(part=>{
    if(!part.trim())return part;
    // Čuvamo celu formulu i interne oznake renderera pre preslovljavanja teksta.
    if(/[0-9²³=<>∥∈∉⊂√π·:+−–—/|()[\]{}^_]/.test(part))return part;
    const bare=part.replace(/^[([{„"']+/,"").replace(/[)\]}.,;:!?“”"']+$/,"");
    if(isProtectedNotation(bare,true,value,value.indexOf(part)))return part;
    return toCyrillic(part);
  }).join("");
}

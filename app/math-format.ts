const escapeHtml=(value:string)=>value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

function normalizeRawRoots(source:string){
  return source
    .replace(/√(\((?:[^()]|\([^()]*\))*\))/g,"[[sqrt:$1]]")
    .replace(/√([A-Za-zА-Яа-яČĆŽŠĐčćžšđπ0-9]+(?:[,.][0-9]+)?(?:\^[0-9n]+)?)/g,"[[sqrt:$1]]");
}

function renderSubscripts(source:string){
  return source.replace(/([A-Za-zА-Яа-яČĆŽŠĐčćžšđΑ-Ωα-ω])_([A-Za-zА-Яа-яČĆŽŠĐčćžšđΑ-Ωα-ω0-9]+)/g,"$1<sub>$2</sub>");
}

export function mathHtml(source:string){
  // Legacy examples also contain inline quotients such as 3/8 or x/2.
  // Match complete mathematical operands, leaving prose and unit names alone.
  const fractions=source.replace(/(?<![\p{L}\d/])(\d+(?:[,.]\d+)?|[abcdnpqxy])\/(\d+(?:[,.]\d+)?|[abcdnpqxy])(?![\p{L}\d/])/gu,"[[frac:$1|$2]]");
  let value=escapeHtml(normalizeRawRoots(fractions));
  for(let pass=0;pass<3;pass++){
    value=value.replace(/\[\[frac:([^\[\]|]+)\|([^\[\]]+)\]\]/g,"<span class='frac'><span>$1</span><span>$2</span></span>");
    value=value.replace(/\[\[sqrt:([^\[\]]+)\]\]/g,"<span class='sqrt'><span>$1</span></span>");
  }
  return renderSubscripts(value)
    .replace(/\^\{([A-Za-z0-9+−·-]+)\}/g,"<sup>$1</sup>")
    .replace(/\^([0-9mnx]+)/g,"<sup>$1</sup>")
    .replace(/·/g,"<span class='op'>·</span>");
}

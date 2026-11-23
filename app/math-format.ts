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
  let value=escapeHtml(normalizeRawRoots(source));
  for(let pass=0;pass<3;pass++){
    value=value.replace(/\[\[frac:([^\[\]|]+)\|([^\[\]]+)\]\]/g,"<span class='frac'><span>$1</span><span>$2</span></span>");
    value=value.replace(/\[\[sqrt:([^\[\]]+)\]\]/g,"<span class='sqrt'><span>$1</span></span>");
  }
  return renderSubscripts(value)
    .replace(/\^\{([A-Za-z0-9+−·-]+)\}/g,"<sup>$1</sup>")
    .replace(/\^([0-9mnx]+)/g,"<sup>$1</sup>")
    .replace(/·/g,"<span class='op'>·</span>");
}

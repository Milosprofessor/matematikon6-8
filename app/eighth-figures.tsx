import { Graph } from "./eighth-algebra";
type Cut={shape:"kvadar"|"piramida"|"valjak"|"kupa"|"lopta"|"osnova kvadra"|"bočna strana"; labels:[string,string,string]; caption:string};
const cuts:Record<string,Cut>={};
function cut(shape:Cut["shape"],caption:string,items:Record<string,Cut["labels"]>){
  for(const [id,labels] of Object.entries(items))cuts["s8-"+id]={shape,caption,labels};
}
cut("kvadar","Dijagonalni presek kroz dijagonalu osnove i normalnu visinu.",{
  "prizma-12":["d = 9 cm","H = 12 cm","D = ?"],"prizma-ex2":["d = 5 cm","H = 12 cm","D = ?"],"prizma-9":["d = 15 cm","H = ?","D = 17 cm"],
  "prizma-16":["d = 15 cm","H = 20 cm","D = ?"],"problemska-3":["d² = 13 dm²","H = 6 dm","D = ?"],
  "simB-13":["d = ?","H = 24 cm","D = 26 cm"],
});
cut("piramida","Presek kroz vrh, centar i sredinu osnovne ivice. Hipotenuza je visina bočne strane.",{
  "piramida-ex2":["a : 2 = 3 cm","H = ?","s = 5 cm"],"piramida-7":["a : 2 = 8 cm","H = 15 cm","s = ?"],
  "piramida-10":["b : 2 = 4 m","H = 4 m","s = ?"],"piramida-13":["a : 2 = ?","H = 12 cm","s = 13 cm"],
  "piramida-16":["a : 2 = 6 m","H = 8 m","s = ?"],"zapremina-13":["a : 2 = 4 cm","H = ?","s = 5 cm"],
  "simA-13":["a : 2 = ?","H = 12 cm","s = 15 cm"],"simC-13":["a : 2 = 5 m","H = 12 m","s = ?"]
});
cut("piramida","Presek kroz vrh, centar i teme osnove. Hipotenuza je bočna ivica.",{
  "zapremina-ex3":["R = 5 cm","H = ?","e = 13 cm"],"zapremina-9":["d : 2 = 5 cm","H = 12 cm","e = ?"]
});
cut("valjak","Dijagonala osnog preseka deli pravougaonik na dva pravougla trougla.",{
  "valjak-ex3":["d = 5 cm","H = ?","D = 13 cm"],"valjak-9":["d = ?","H = 15 cm","D = 17 cm"]
});
cut("kupa","Polovina osnog preseka. Katete su r i H, hipotenuza je izvodnica s.",{
  "kupa-ex1":["r = 3 cm","H = 4 cm","s = ?"],"kupa-ex2":["r = 4 dm","H = ?","s = 5 dm"],
  "kupa-5":["r = 6 cm","H = ?","s = 10 cm"],"kupa-10":["r = ?","H = 8 cm","s = ?"],
  "polugodiste-7":["r = 8 cm","H = ?","s = 17 cm"]
});
cut("lopta","Ravan seče loptu. Centar preseka je podnožje normale iz centra lopte.",{
  "lopta-ex2":["ρ = ?","d = 3 cm","R = 5 cm"],"lopta-8":["ρ = ?","d = 12 cm","R = 13 cm"],
  "lopta-9":["ρ = 8 cm","d = ?","R = 10 cm"],"lopta-vezba":["ρ = 8 cm","d = 6 cm","R = ?"],
  "polugodiste-8":["ρ = 5 cm","d = ?","R = 13 cm"]
});
cut("osnova kvadra","Dijagonala pravougaone strane deli je na dva podudarna pravougla trougla.",{
  "prizma-5":["a = 6 cm","b = 8 cm","d = ?"],"prizma-7":["a = ?","a = ?","d = 6√2 cm"]
});
cut("bočna strana","Visina jednakokrake bočne strane deli je na dva pravougla trougla.",{
  "piramida-8":["a : 2 = 5 cm","s = 12 cm","e = ?"],"piramida-vezba":["a : 2 = 12 cm","s = ?","e = 13 cm"]
});
cut("piramida","Presek krova normalan na ivicu od 18 cm. Drugi presek nacrtaj normalno na ivicu od 10 cm.",{
  "piramida-ex3":["b : 2 = 5 cm","H = 12 cm","s₁ = ?"]
});
function Body({shape,edge}:{shape:Cut["shape"];edge:boolean}){
  const line={stroke:"#34516b",strokeWidth:2,fill:"#dcefee"};
  const mark={fill:"#ffe2a0",stroke:"#9c4d14",strokeWidth:1.7};
  if(shape==="lopta")return <g><circle {...line} cx="57" cy="60" r="44"/><ellipse {...mark} cx="57" cy="40" rx="39" ry="8"/><path d="M57 60V40H96Z" {...mark}/></g>;
  if(shape==="kupa"||shape==="valjak")return <g><path {...line} d={shape==="kupa"?"M18 92L58 18L98 92Z":"M18 92V24H98V92Z"}/><ellipse {...line} cx="58" cy="92" rx="40" ry="8"/>{shape==="valjak"&&<ellipse {...line} cx="58" cy="24" rx="40" ry="8"/>}<path {...mark} d={shape==="kupa"?"M58 18V92H98Z":"M18 24V92H98Z"}/></g>;
  if(shape==="piramida"||shape==="bočna strana")return <g><path {...line} d="M12 87L76 98L104 76L40 66Z M12 87L58 12L104 76 M76 98L58 12"/><path {...mark} d={shape==="bočna strana"?"M58 12L44 92L76 98Z":edge?"M58 12V82L76 98Z":"M58 12V82L44 92Z"}/></g>;
  return <g><path {...line} d="M12 38L40 18L104 28V82L76 102L12 92Z M12 38L76 48L104 28 M76 48V102"/><path {...mark} d={shape==="osnova kvadra"?"M12 38L40 18L104 28Z":"M12 38V92L104 82Z"}/></g>;
}
export function EighthFigure({id}:{id:string}){
  if(id==="s8-simB-18")return <table><caption>Glasovi po predlozima</caption><tbody>{[["Predlog","A","B","C"],["Glasovi","14","18","8"]].map(row=><tr key={row[0]}><th>{row[0]}</th>{row.slice(1).map(v=><td key={v}>{v}</td>)}</tr>)}</tbody></table>;
  if(id==="s8-simC-18")return <figure className="e8-figure"><svg viewBox="0 0 260 120" role="img" aria-label="Prodaja u maju 60 knjiga, u junu 78"><path d="M35 10V95H240" fill="none" stroke="#34516b"/><rect x="65" y="35" width="44" height="60" fill="#386792"/><rect x="160" y="17" width="44" height="78" fill="#418271"/><g textAnchor="middle"><text x="87" y="30">60</text><text x="182" y="13">78</text><text x="87" y="110">V</text><text x="182" y="110">VI</text></g></svg><figcaption>Broj prodatih knjiga po mesecima.</figcaption></figure>;
  if(id==="s8-simA-6")return <figure className="e8-figure"><Graph lines={[[2,1,6]]} points={[[0,6],[-1,8]]}/><figcaption>Na osama jedan podeok označava jednu jedinicu.</figcaption></figure>;
  if(id==="s8-funkcija-1")return <figure className="e8-figure"><Graph lines={[[-3,1,7]]} points={[[0,7],[-2,1]]}/><figcaption>Jedan kvadratić predstavlja jednu jedinicu na obe ose.</figcaption></figure>;
  const c=cuts[id];if(!c)return null;
  return <figure className="e8-figure"><svg viewBox="0 0 300 119" role="img" aria-label={c.caption+" "+c.labels.join(", ")}>
    <Body shape={c.shape} edge={c.labels[2].startsWith("e")}/>
    <path d="M155 95V24L260 95Z" fill="#fff0bd" stroke="#874315" strokeWidth="2"/><path d="M155 87h8v8" fill="none" stroke="#874315"/>
    <g fill="#20364b" fontSize="14"><text x="205" y="112">1</text><text x="141" y="63">2</text><text x="210" y="49">3</text></g></svg>
    <figcaption>{c.caption} Šematski prikaz.</figcaption>
    <ol>{c.labels.map((value,i)=><li key={i}>{i===2?"Hipotenuza":"Kateta"} · {value}</li>)}</ol></figure>;
}

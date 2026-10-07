import { C, I, ErrorCategory, Level, Task, TaskDiagram } from "./types";
import { septemberWorkPlans } from "./september-work";

// Ten deliberately chosen tasks in the lesson; variants remain in the area pool.
// IDs of existing tasks and lessons are preserved for saved progress.
export const octoberWorkPlans:Record<string,string[]> = {
  "mnozenje":["6-8a","6-8f","ow-mul-sum-0","6-8h","6-8g","ow-mul-table-0","ow-mul-compare-0","6-8i","6-8j","ow-mul-distribute-0"],
  "deljenje":["6-9a","6-9f","6-9c","6-9h","6-9i","ow-div-table-0","ow-div-compare-0","6-9g","6-9j","ow-div-both-0"],
  "mnozenje-deljenje":["6-10a","6-10f","ow-md-order-0","6-10b","6-10h","6-10i","ow-md-table-0","6-10c","6-10g","ow-md-context-0"],
  "brojevni-izrazi":["6-11a","6-11f","ow-expr-model-0","6-11b","6-11h","6-11g","ow-expr-missing-0","6-11i","6-11j","ow-expr-brackets-0"],
  "trougao-vrste":["o6-tv-1","o6-tv-4","ow-tv-incidence-0","o6-tv-2","o6-tv-3","o6-tv-5","ow-tv-table-0","o6-tv-6","o6-tv-7","ow-tv-pairs-0"],
  "zbir-uglova-trougla":["o6-zu-1","o6-zu-4","ow-angles-rule-0","o6-zu-2","o6-zu-5","o6-zu-3","ow-angles-bisect-0","o6-zu-6","o6-zu-7","ow-angles-difference-0"],
  "uglovi-transverzala":["o6-su-1","o6-su-2","o6-ut-4","o6-su-3","o6-ut-5","o6-ut-6","ow-external-sum-0","o6-ut-7","ow-external-equal-0","ow-external-third-0"],
  "odnos-stranica-uglova":["o6-osu-1","o6-osu-4","ow-sideangle-opposite-0","o6-osu-2","o6-osu-3","o6-osu-5","ow-sideangle-equals-0","o6-osu-6","o6-osu-7","ow-sideangle-combine-0"],
  "nejednakost-trougla":["o6-nt-1","o6-nt-4","ow-ineqtri-strict-0","o6-nt-2","o6-nt-3","o6-nt-5","ow-ineqtri-isosceles-0","o6-nt-6","o6-nt-7","ow-ineqtri-perimeter-0"],
  "konstrukcije-uglova":["o6-ku-1","o6-ku-4","ow-construct-tools-0","o6-ku-2","o6-ku-3","o6-ku-6","ow-construct-reverse-0","o6-ku-5","o6-ku-7","ow-construct-combined-0"],
  "pitagorina-teorema":["o7-pt-1","o7-pt-2","ow-pyth-valid-0","o7-pt-3","o7-pt-4","o7-pt-5","ow-pyth-square-0","o7-pt-6","o7-pt-7","ow-pyth-path-0"],
  "nepoznata-stranica-pravougli":["o7-ns-1","o7-ns-2","ow-leg-identify-0","o7-ns-4","o7-ns-5","o7-ns-7","ow-leg-compare-0","o7-ns-3","o7-ns-6","ow-leg-ladder-0"],
  "pitagora-pravougaonik-kvadrat":["o7-pk-1","o7-pk-2","ow-rect-identify-0","o7-pk-4","o7-pk-5","o7-pk-6","ow-rect-squarearea-0","o7-pk-3","o7-pk-7","ow-rect-compare-0"],
  "pitagora-jednakokraki":["o7-jk-1","o7-jk-2","ow-iso-split-0","o7-jk-3","o7-jk-4","o7-jk-5","ow-iso-error-0","o7-jk-6","o7-jk-7","ow-iso-reverse-0"],
  "pitagora-cetvorougao":["o7-cv-1","o7-cv-2","ow-quad-opposite-0","o7-cv-6","o7-cv-4","o7-cv-5","ow-quad-reverse-0","o7-cv-3","o7-cv-7","ow-quad-area-0"],
  "pitagora-romb":["o7-ro-1","o7-ro-4","ow-rhomb-angles-0","o7-ro-2","o7-ro-6","o7-ro-5","ow-rhomb-missingarea-0","o7-ro-3","o7-ro-7","ow-rhomb-height-0"],
  "pitagora-trapez":["o7-tr-1","o7-tr-3","ow-trap-identify-0","o7-tr-2","o7-tr-4","o7-tr-5","ow-trap-perimeter-0","o7-tr-6","o7-tr-7","ow-trap-reverse-0"],
  "specijalni-pravougli-trouglovi":["o7-st-1","o7-st-2","o7-st-4","o7-st-3","o7-st-6","ow-special-area45-0","ow-special-angle-0","o7-st-5","o7-st-7","ow-special-reverse-0"],
  "konstrukcija-iracionalnih-brojeva":["o7-ki-1","o7-ki-4","ow-rootconstruct-tool-0","o7-ki-2","o7-ki-3","o7-ki-6","ow-rootconstruct-locate-0","o7-ki-5","o7-ki-7","ow-rootconstruct-extend-0"],
  "pojam-stepena":["o7-ps-1","o7-ps-2","ow-power-base-0","o7-ps-3","o7-ps-6","o7-ps-9","ow-power-compare-0","o7-ps-4","o7-ps-7","ow-power-both-0"],
  "rogalj":["o8-rg-1","o8-rg-2","o8-rg-4","o8-rg-3","o8-rg-5","o8-rg-6","ow-solidangle-face-0","o8-rg-7","ow-solidangle-opposite-0","ow-solidangle-plane-0"],
  "poliedar":["o8-po-1","o8-po-3","ow-poly-edge-0","o8-po-2","o8-po-4","o8-po-5","ow-poly-impossible-0","o8-po-6","o8-po-7","ow-poly-counts-0"],
  "pojam-linearne-jednacine":["o8-lj-1","o8-lj-2","o8-lj-4","o8-lj-3","o8-lj-7","ow-eqconcept-table-0","ow-eqconcept-parameter-0","o8-lj-5","o8-lj-6","ow-eqconcept-common-0"],
  "ekvivalentne-transformacije":["o8-et-1","o8-et-2","o8-et-4","o8-et-3","o8-et-5","o8-et-6","ow-transform-pair-0","o8-et-7","ow-transform-zero-0","ow-transform-fraction-0"],
  "resavanje-linearnih-jednacina":["o8-rj-1","o8-rj-4","ow-solve-fraction-0","o8-rj-2","o8-rj-3","o8-rj-6","ow-solve-decimal-0","o8-rj-5","o8-rj-7","ow-solve-twosides-0"],
  "primena-linearnih-jednacina":["o8-pj-1","o8-pj-4","ow-application-price-0","o8-pj-2","o8-pj-3","o8-pj-6","ow-application-error-0","o8-pj-5","o8-pj-7","ow-application-fraction-0"],
  "linearne-nejednacine":["o8-ln-1","o8-ln-2","o8-ln-4","o8-ln-3","o8-ln-5","o8-ln-6","ow-inequality-boundary-0","o8-ln-7","ow-inequality-integer-0","ow-inequality-budget-0"]
};

export const octoberDemonstrations=new Set(["konstrukcije-uglova","pitagorina-teorema","pitagora-cetvorougao","konstrukcija-iracionalnih-brojeva","ekvivalentne-transformacije","resavanje-linearnih-jednacina","linearne-nejednacine"]);

type Recipe=(v:number)=>Task;
const recipes:Record<string,Recipe[]>={};
const register=(lesson:string,items:Recipe[])=>{recipes[lesson]=items};
const id=(short:string,type:string,v:number)=>"ow-"+short+"-"+type+"-"+v;
const num=(n:number)=>String(Number(n.toFixed(10))).replace(".",",");
const N=(short:string,type:string,v:number,prompt:string,math:string,answer:number,hint:string,solution:string,level:Level,skill:string,errorCategory:ErrorCategory="method",diagram?:TaskDiagram):Task=>I(id(short,type,v),prompt,math,num(answer),hint,solution,level,skill,{taskType:short+"-"+type,errorCategory,practiceOnly:true,diagram});
const Q=(short:string,type:string,v:number,prompt:string,math:string,choices:string[],answer:string,hint:string,solution:string,level:Level,skill:string,errorCategory:ErrorCategory="concept",diagram?:TaskDiagram):Task=>C(id(short,type,v),prompt,math,choices,answer,hint,solution,level,skill,{taskType:short+"-"+type,errorCategory,practiceOnly:true,diagram});
const triples=[[3,4,5],[5,12,13],[8,15,17],[7,24,25],[9,12,15],[12,16,20]];

// All arithmetic in multiplication tasks can be explained through multiplication,
// without assuming that division of negative integers has already been taught.
register("mnozenje",[
 v=>{const a=v+3;return Q("mul","sum",v,"Izaberi proizvod.","(−"+a+")+(−"+a+")+(−"+a+")",["3·(−"+a+")","3·"+a,"−"+a+"·(−"+a+")"],"3·(−"+a+")","Prebroj jednake sabirke.","Tri jednaka sabirka zapisujemo kao 3·(−"+a+").","basic","Množenje")},
 v=>{const a=v+3;return N("mul","table",v,"Dopuni poslednju vrednost.","y=(−"+a+")·x; x: −2, 0, 3; y: "+2*a+", 0, ?",-3*a,"Uvrsti x=3.","(−"+a+")·3=−"+3*a+".","medium","Množenje","calculation")},
 v=>{const a=v+3;return Q("mul","compare",v,"Uporedi bez računanja.","(−"+a+")·5 __ (−"+a+")·7",["<",">","="],">","Oba proizvoda su negativna.","Prvi ima manju apsolutnu vrednost, pa je veći.","medium","Znak proizvoda","sign")},
 v=>{const a=v+3;return N("mul","distribute",v,"Izračunaj najkraćim putem.","(−"+a+")·9+(−"+a+")·11",-20*a,"Uoči zajednički činilac.","(−"+a+")·(9+11)=−"+20*a+".","advanced","Množenje","rule")}
]);
register("deljenje",[
 v=>{const a=v+3;return N("div","table",v,"Dopuni poslednju vrednost.","x: −"+4*a+", 0, "+6*a+"; x:(−"+a+"): 4, 0, ?",-6,"Podeli poslednji x sa negativnim brojem.",6*a+":(−"+a+")=−6.","medium","Deljenje","sign")},
 v=>{const a=v+3;return Q("div","compare",v,"Uporedi.","(−"+6*a+"):(−"+a+") __ (−"+6*a+"):"+a,["<",">","="],">","Odredi znak oba količnika.","Levi je 6, a desni −6.","medium","Znak količnika","sign")},
 v=>{const a=v+3;return N("div","both",v,"Odredi x.","x:"+a+"<0 i |x|="+3*a,-3*a,"Prvi uslov određuje znak.","Pošto je delilac pozitivan, x je negativan: x=−"+3*a+".","advanced","Deljenje","method")}
]);
register("mnozenje-deljenje",[
 v=>Q("md","order",v,"Šta prvo računaš?","−"+(v+3)*8+":"+(v+3)+"·(−2)",["Deljenje sleva","Proizvod desno","Oba istovremeno"],"Deljenje sleva","Operacije su istog reda.","Množenje i deljenje računamo sleva nadesno.","basic","Redosled operacija","rule"),
 v=>{const a=v+3;return N("md","table",v,"Dopuni kraj lanca.","−"+4*a+" → :"+a+" → −4 → ·(−3) → ?",12,"Računaj svaki korak redom.","−"+4*a+":"+a+"=−4; (−4)·(−3)=12.","medium","Množenje i deljenje","calculation")},
 v=>{const a=v+3;return N("md","context",v,"Odredi prosečnu promenu na sat.","Tokom "+a+" sata temperatura prvo opadne za "+4*a+" °C, pa poraste za "+a+" °C.",-3,"Prvo odredi ukupnu promenu.","Ukupna promena je −"+4*a+"+"+a+"=−"+3*a+" °C. Deljenjem sa "+a+" dobijamo −3 °C na sat.","advanced","Množenje i deljenje")}
]);
register("brojevni-izrazi",[
 v=>{const a=v+3;return Q("expr","model",v,"Izaberi izraz.","Od "+4*a+" oduzmi proizvod "+a+" i −3.",[4*a+"−"+a+"·(−3)","("+4*a+"−"+a+")·(−3)",4*a+"+"+a+"·(−3)"],4*a+"−"+a+"·(−3)","Prvo prepoznaj proizvod.","Oduzima se ceo proizvod: "+4*a+"−"+a+"·(−3).","basic","Brojevni izrazi")},
 v=>{const a=v+3;return N("expr","missing",v,"Dopuni.",a+"·(__−3)=0",3,"Činilac u zagradi mora biti 0.","3−3=0, pa nedostaje 3.","medium","Brojevni izrazi","rule")},
 v=>{const a=v+3;return Q("expr","brackets",v,"Koji raspored zagrada daje nulu?","",["("+a+"−"+a+")·4",a+"−("+a+"·4)",a+"−"+a+"·4"],"("+a+"−"+a+")·4","Proveri kako zagrade menjaju redosled.","Razlika jednakih brojeva je 0; 0·4=0. Druga dva izraza daju −"+3*a+".","advanced","Redosled operacija","method")}
]);

register("trougao-vrste",[
 v=>Q("tv","incidence",v,"Koje teme je zajedničko stranicama AB i BC?","△ABC",["A","B","C"],"B","Pogledaj oba naziva duži.","Obe stranice sadrže B.","basic","Elementi trougla"),
 v=>{const a=v+4;return Q("tv","table",v,"Koji red tabele je pogrešno opisan?","I: "+a+", "+a+", "+a+" → jednakostraničan; II: "+a+", "+a+", "+(a+1)+" → raznostraničan; III: "+a+", "+(a+1)+", "+(a+2)+" → raznostraničan",["I","II","III"],"II","Uporedi stranice u svakom redu.","U redu II dve stranice su jednake. Trougao je jednakokraki, ne raznostraničan.","medium","Vrste trouglova")},
 v=>{const a=v+4;return N("tv","pairs",v,"Odredi obim trougla.","a+b="+(2*a+1)+", b+c="+(2*a+3)+", c+a="+(2*a+2),3*a+3,"Sabiranjem sva tri podatka svaka stranica se pojavljuje dvaput.","2O="+(6*a+6)+", pa je O="+(3*a+3)+".","advanced","Elementi trougla")}
]);
register("zbir-uglova-trougla",[
 v=>Q("angles","rule",v,"Dopuni.","α+β+γ=__",["90°","180°","360°"],"180°","Seti se zbira unutrašnjih uglova.","Zbir je 180°.","basic","Zbir uglova","rule"),
 v=>{const a=28+3*v;return N("angles","bisect",v,"Odredi drugi oštar ugao.","Pravougli trougao: jedan oštar ugao je "+a+"°.",90-a,"Dva oštra ugla zajedno daju 90°.","90°−"+a+"°="+(90-a)+"°.","medium","Zbir uglova")},
 v=>{const a=30+2*v;return N("angles","difference",v,"Odredi najveći ugao.","Najmanji je "+a+"°, a drugi je za 10° veći.",170-2*a,"Odredi drugi ugao, pa primeni zbir uglova.","Drugi je "+(a+10)+"°. Treći je 180°−"+a+"°−"+(a+10)+"°="+(170-2*a)+"° i najveći je.","advanced","Zbir uglova")}
]);
register("uglovi-transverzala",[
 v=>{const a=100+5*v,b=110+2*v;return N("external","sum",v,"Odredi treći spoljašnji ugao.","Dva spoljašnja ugla su "+a+"° i "+b+"°.",360-a-b,"Svaki spoljašnji ugao dopunjuje unutrašnji do 180°.","Zbir tri spoljašnja ugla je 3·180°−180°=360°. Treći je "+(360-a-b)+"°.","medium","Spoljašnji ugao")},
 v=>{const a=100+4*v;return N("external","equal",v,"Odredi svaki nesusedni unutrašnji ugao.","Spoljašnji je "+a+"°, a dva nesusedna unutrašnja su jednaka.",a/2,"Njihov zbir je spoljašnji ugao.","Svaki je "+a+"°:2="+a/2+"°.","advanced","Spoljašnji ugao")},
 v=>{const a=110+3*v,b=40+v;return N("external","third",v,"Odredi β.","α_1="+a+"°, γ="+b+"°",a-b,"Upotrebi α₁=β+γ.","β="+a+"°−"+b+"°="+(a-b)+"°.","advanced","Spoljašnji ugao")}
]);
register("odnos-stranica-uglova",[
 v=>Q("sideangle","opposite",v,"Koja stranica je naspram ugla β?","△ABC",["AB","AC","BC"],"AC","Ugao β je kod B.","Naspram B je AC, odnosno b.","basic","Odnos stranica i uglova"),
 v=>Q("sideangle","equals",v,"Koji zaključak je tačan?","a=b i γ>α",["c>a=b","c<a=b","a>c>b"],"c>a=b","Jednakim stranicama odgovaraju jednaki uglovi.","α=β, a veći γ je naspram veće stranice c.","medium","Odnos stranica i uglova","method"),
 v=>{const a=38+2*v;return Q("sideangle","combine",v,"Odredi najdužu stranicu.","α="+a+"°, β je za 15° veći od α.",["a","b","c"],"c","Najpre odredi β i γ.","β="+(a+15)+"°, γ="+(165-2*a)+"°. Najveći je γ, pa je najduža c.","advanced","Odnos stranica i uglova","method")}
]);
register("nejednakost-trougla",[
 v=>{const a=v+4;return Q("ineqtri","strict",v,"Koji uslov mora važiti?","Stranice su "+a+", "+(a+1)+" i c.",["c<"+(2*a+1),"c≤"+(2*a+1),"c="+(2*a+1)],"c<"+(2*a+1),"Najduža ne sme biti jednaka zbiru drugih dveju.","Neophodno je c<"+(2*a+1)+". To je samo jedna od nejednakosti.","basic","Nejednakost trougla","rule")},
 v=>{const a=v+4;return N("ineqtri","isosceles",v,"Odredi dužinu kraka.","Jednakokraki trougao ima dve različite dužine: "+a+" cm i "+(2*a+1)+" cm.",2*a+1,"Proveri koja dužina može da se ponovi.","Dva kraka od "+a+" daju zbir "+2*a+", manji od "+(2*a+1)+". Zato krak mora biti "+(2*a+1)+" cm.","medium","Nejednakost trougla")},
 v=>{const a=v+4;return N("ineqtri","perimeter",v,"Odredi najveći ceo obim.","Dve stranice su "+a+" cm i "+(a+3)+" cm; treća je ceo broj cm.",4*a+5,"Odredi najveću dozvoljenu treću stranicu.","Treća mora biti manja od "+(2*a+3)+", pa je najviše "+(2*a+2)+". Obim je "+(4*a+5)+" cm.","advanced","Nejednakost trougla")}
]);
register("konstrukcije-uglova",[
 v=>Q("construct","tools",v,"Koji pribor koristimo za konstrukciju bez merenja ugla?","",["Šestar i lenjir bez podeoka","Samo uglomer","Samo lenjir sa podeocima"],"Šestar i lenjir bez podeoka","Konstrukcija prenosi dužine i povlači prave.","Šestarom prenosimo dužine, a lenjirom povlačimo prave.","basic","Konstrukcija ugla"),
 v=>{const a=[15,30,45,60,75,90][v];return N("construct","reverse",v,"Odredi početni ugao.","Posle jednog prepolovljavanja dobijen je ugao od "+a+"°.",2*a,"Prepolovljavanje je deljenje sa 2.","Početni ugao je 2·"+a+"°="+2*a+"°.","medium","Konstrukcija ugla")},
 v=>Q("construct","combined",v,"Izaberi postupak za ugao od 105°.","Na raspolaganju su konstrukcije 60° i 90°.",["Prepolovi 90°, pa dodaj 60°.","Prepolovi 60°, pa dodaj 90°.","Saberi 60° i 90°."],"Prepolovi 90°, pa dodaj 60°.","105° rastavi na poznate uglove.","90°:2+60°=45°+60°=105°.","advanced","Konstrukcija ugla","method")
]);
register("pitagorina-teorema",[
 v=>Q("pyth","valid",v,"Koji uslov je potreban za Pitagorinu teoremu?","",["Trougao je pravougli.","Sve stranice su jednake.","Dva ugla su jednaka."],"Trougao je pravougli.","Teorema povezuje katete i hipotenuzu.","Pitagorina teorema važi za pravougli trougao.","basic","Pitagorina teorema"),
 v=>{const a=v+3,b=v+4;return N("pyth","square",v,"Odredi c², ne c.","Katete su "+a+" cm i "+b+" cm.",a*a+b*b,"Saberi kvadrate kateta.","c²="+a*a+"+"+b*b+"="+(a*a+b*b)+" cm².","medium","Pitagorina teorema","calculation")},
 v=>{const [a,b,c]=triples[v];return N("pyth","path",v,"Za koliko metara je prečica kraća?","Put ima dva normalna dela: "+a+" m i "+b+" m. Prečica spaja početak i kraj.",a+b-c,"Prečica je hipotenuza.","Prečica je "+c+" m, a put "+(a+b)+" m. Razlika je "+(a+b-c)+" m.","advanced","Pitagorina teorema")}
]);
register("nepoznata-stranica-pravougli",[
 v=>Q("leg","identify",v,"Izaberi izraz za nepoznatu katetu b.","Hipotenuza c, kateta a",["[[sqrt:c^2−a^2]]","[[sqrt:c^2+a^2]]","c−a"],"[[sqrt:c^2−a^2]]","Iz c²=a²+b² izdvoji b².","b²=c²−a², pa je b=[[sqrt:c^2−a^2]].","basic","Nepoznata kateta","rule"),
 v=>{const [a,b,c]=triples[v];return Q("leg","compare",v,"Uporedi katete.","c="+c+", a="+a+"; nepoznata je b.",["a<b","a>b","a=b"],"a<b","Odredi b pa uporedi.","b=[[sqrt:"+(c*c-a*a)+"]]="+b+", pa je a<b.","medium","Nepoznata kateta","method")},
 v=>{const [a,b,c]=triples[v];return N("leg","ladder",v,"Odredi udaljenost podnožja od zida.","Merdevine su "+c+" m. Vrh je na visini "+b+" m; zid je normalan na tlo.",a,"Merdevine su hipotenuza.","Udaljenost je [[sqrt:"+c+"^2−"+b+"^2]]="+a+" m.","advanced","Nepoznata kateta")}
]);
register("pitagora-pravougaonik-kvadrat",[
 v=>Q("rect","identify",v,"Koja duž je hipotenuza pomoćnog trougla?","Pravougaonik ABCD sa dijagonalom AC",["AC","AB","BC"],"AC","Pogledaj trougao ABC.","Ugao B je prav, pa je AC hipotenuza.","basic","Pitagora u pravougaoniku","diagram"),
 v=>{const a=v+3;return N("rect","squarearea",v,"Odredi površinu kvadrata.","d="+a+"[[sqrt:2]] cm",a*a,"Prvo odredi stranicu iz d=a√2.","Stranica je "+a+" cm, pa je P="+a*a+" cm².","medium","Pitagora u kvadratu")},
 v=>{const a=v+3;return Q("rect","compare",v,"Koji kvadrat ima dužu dijagonalu?","Prvi: O="+4*a+" cm. Drugi: P="+(a+1)**2+" cm².",["Prvi","Drugi","Jednake su"],"Drugi","Odredi obe stranice pa uporedi a√2.","Stranice su "+a+" i "+(a+1)+" cm. Dužu dijagonalu ima drugi kvadrat.","advanced","Pitagora u kvadratu","method")}
]);
register("pitagora-jednakokraki",[
 v=>Q("iso","split",v,"Dopuni.","Visina na osnovicu jednakokrakog trougla deli osnovicu na…",["Dva jednaka dela","Tri jednaka dela","Dva proizvoljna dela"],"Dva jednaka dela","Visina je i težišna duž.","Polovine osnovice su jednake.","basic","Pitagora u jednakokrakom trouglu","diagram"),
 v=>{const [a,b,c]=triples[v];return Q("iso","error",v,"Pronađi grešku.","s="+c+", osnovica="+2*a+"; h²="+c+"²−"+2*a+"²",["Treba koristiti polovinu osnovice.","Treba sabrati kvadrate.","Nema greške."],"Treba koristiti polovinu osnovice.","Pomoćni pravougli trougao ima polovinu osnovice.","h²="+c+"²−"+a+"²="+b*b+".","medium","Pitagora u jednakokrakom trouglu","diagram")},
 v=>{const a=v+3;return N("iso","reverse",v,"Odredi obim jednakostraničnog trougla.","h="+a+"[[sqrt:3]] cm",6*a,"Iz h=a√3/2 odredi stranicu, pa obim.","Stranica je "+2*a+" cm; obim je "+6*a+" cm.","advanced","Pitagora u jednakostraničnom trouglu")}
]);
register("pitagora-cetvorougao",[
 v=>Q("quad","opposite",v,"Koja duž je hipotenuza trougla ACD?","∠ACD=90°",["AC","AD","CD"],"AD","Hipotenuza je naspram pravog ugla.","Naspram C je AD.","basic","Pitagora u četvorouglu","diagram"),
 v=>{const [a,b,c]=triples[v];return N("quad","reverse",v,"Odredi CD.","∠ACD=90°, AD="+c+" cm, AC="+a+" cm",b,"AD je hipotenuza.","CD²="+c+"²−"+a+"²="+b*b+", pa je CD="+b+" cm.","medium","Pitagora u četvorouglu")},
 v=>{const k=v+1;return N("quad","area",v,"Odredi površinu četvorougla ABCD.","∠ABC=∠ACD=90°; AB="+3*k+", BC="+4*k+", CD="+12*k,36*k*k,"Odredi AC, pa saberi površine dva pravougla trougla.","AC="+5*k+". P₁="+6*k*k+", P₂="+30*k*k+", ukupno P="+36*k*k+".","advanced","Pitagora u četvorouglu","method",{type:"pythagoras",variant:"quadrilateral",labels:{AB:String(3*k),BC:String(4*k),CD:String(12*k),AC:"?",AD:""}})}
]);
register("pitagora-romb",[
 v=>Q("rhomb","angles",v,"Pod kojim uglom se seku dijagonale romba?","",["45°","60°","90°"],"90°","Dijagonale su normalne.","Grade pravi ugao.","basic","Pitagora u rombu","rule"),
 v=>{const k=v+1;return N("rhomb","missingarea",v,"Odredi d₂.","P="+24*k*k+" cm², d_1="+6*k+" cm",8*k,"Upotrebi P=d₁d₂/2.","d₂=2·"+24*k*k+":"+6*k+"="+8*k+" cm.","medium","Romb")},
 v=>{const k=v+1;return N("rhomb","height",v,"Odredi visinu romba.","d_1="+6*k+" cm, d_2="+8*k+" cm",4.8*k,"Odredi stranicu i površinu; zatim koristi P=ah.","a="+5*k+" cm, P="+24*k*k+" cm², h=P:a="+num(4.8*k)+" cm.","advanced","Pitagora u rombu")}
]);
register("pitagora-trapez",[
 v=>Q("trap","identify",v,"Koja duž je hipotenuza pomoćnog trougla?","Pravougli trapez",["Kosi krak","Visina","Razlika osnovica"],"Kosi krak","Visina je normalna na osnovice.","Kosi krak je naspram pravog ugla.","basic","Pitagora u trapezu","diagram"),
 v=>{const k=v+1;return N("trap","perimeter",v,"Odredi obim jednakokrakog trapeza.","a="+16*k+" cm, b="+4*k+" cm, h="+8*k+" cm",40*k,"Polovina razlike osnovica je kateta.","Pomoćna kateta je "+6*k+", krak je "+10*k+". O="+16*k+"+"+4*k+"+2·"+10*k+"="+40*k+" cm.","medium","Pitagora u trapezu")},
 v=>{const k=v+1;return N("trap","reverse",v,"Odredi dužu osnovicu.","Jednakokraki trapez: b="+6*k+" cm, h="+4*k+" cm, c="+5*k+" cm",12*k,"Iz kraka i visine odredi polovinu razlike osnovica.","Polovina razlike je "+3*k+" cm. Zato a="+6*k+"+2·"+3*k+"="+12*k+" cm.","advanced","Pitagora u trapezu")}
]);
register("specijalni-pravougli-trouglovi",[
 v=>{const a=v+3;return N("special","area45",v,"Odredi površinu.","Trougao 45°–45°–90° ima katetu "+2*a+" cm.",2*a*a,"Katete su jednake.","P="+2*a+"·"+2*a+":2="+2*a*a+" cm².","medium","Posebni pravougli trouglovi")},
 v=>{const a=v+3;return Q("special","angle",v,"Odredi ugao naspram date katete.","Hipotenuza je "+2*a+" cm, kateta je "+a+" cm.",["30°","45°","60°"],"30°","Kateta je polovina hipotenuze.","Naspram takve katete je ugao od 30°.","medium","Posebni pravougli trouglovi","rule")},
 v=>{const a=v+3;return N("special","reverse",v,"Odredi hipotenuzu.","Trougao 30°–60°–90°: duža kateta je "+a+"[[sqrt:3]] cm.",2*a,"Odredi kraću katetu, pa hipotenuzu.","Kraća kateta je "+a+" cm; hipotenuza je "+2*a+" cm.","advanced","Posebni pravougli trouglovi")}
]);
register("konstrukcija-iracionalnih-brojeva",[
 v=>Q("rootconstruct","tool",v,"Čime prenosiš konstruisanu duž na brojnu pravu?","",["Šestarom","Uglomerom","Zaokruživanjem broja"],"Šestarom","Potrebno je preneti dužinu bez približnog merenja.","Otvor šestara jednak dužini prenosi se od nule.","basic","Konstrukcija korena"),
 v=>{const a=v+2;return Q("rootconstruct","locate",v,"Između kojih celih brojeva je preneta duž?","Katete su 1 i "+a+".",[a+" i "+(a+1),(a-1)+" i "+a,(a+1)+" i "+(a+2)],a+" i "+(a+1),"Uporedi zbir kvadrata sa susednim kvadratima.",a+"²<"+(a*a+1)+"<"+(a+1)+"², pa je hipotenuza između "+a+" i "+(a+1)+".","medium","Konstrukcija korena","method")},
 v=>{const a=v+2;return Q("rootconstruct","extend",v,"Odredi novu hipotenuzu.","Katete su [[sqrt:"+(a*a+1)+"]] i 1.",["[[sqrt:"+(a*a+2)+"]]","[[sqrt:"+(a*a+1)+"]]","[[sqrt:"+(a*a+3)+"]]"],"[[sqrt:"+(a*a+2)+"]]","Kvadrat već konstruisane duži je poznat.","c²="+(a*a+1)+"+1="+(a*a+2)+"; c=[[sqrt:"+(a*a+2)+"]].","advanced","Konstrukcija korena","method")}
]);

register("pojam-stepena",[
 v=>{const a=v+3;return N("power","base",v,"Odredi osnovu stepena.","(−"+a+")^5",-a,"Zagrade određuju šta se stepenuje.","Osnova je −"+a+", a izložilac 5.","basic","Pojam stepena")},
 v=>{const a=v+2;return Q("power","compare",v,"Uporedi bez pravila za stepen stepena.",a+"^4 __ ("+a+"^2)^2",["<",">","="],"=","Oba zapisa razvij u proizvode.","Oba znače "+a+"·"+a+"·"+a+"·"+a+".","medium","Pojam stepena","rule")},
 v=>{const a=v+2;return N("power","both",v,"Odredi x.","x^3=−"+a**3,-a,"Neparan stepen negativnog broja je negativan.","(−"+a+")·(−"+a+")·(−"+a+")=−"+a**3+", pa je x=−"+a+".","advanced","Znak stepena")}
]);
register("rogalj",[
 v=>Q("solidangle","face",v,"Šta predstavlja stranu trostranog roglja?","Ivice su poluprave SA, SB i SC.",["Ravan ugao ASB","Samo duž AB","Cela ravan ABC"],"Ravan ugao ASB","Stranu određuju dve susedne ivice.","Strana je ravan ugao ograničen polupravama SA i SB.","medium","Elementi roglja"),
 v=>Q("solidangle","opposite",v,"Odredi zajedničku ivicu ovih strana.","Strane ASB i BSC trostranog roglja",["SA","SB","SC"],"SB","Uporedi granične poluprave obe strane.","Prva ima SA i SB, druga SB i SC. Zajednička je SB.","advanced","Elementi roglja","method"),
 v=>Q("solidangle","plane",v,"Da li ove poluprave obrazuju prostorni trostrani rogalj?","Tri poluprave sa početkom S leže u jednoj ravni.",["Da","Ne"],"Ne","Rogalj mora obuhvatati prostorni deo.","Komplanarne poluprave ne obrazuju prostorni trostrani rogalj.","advanced","Pojam roglja","concept")
]);
register("poliedar",[
 v=>Q("poly","edge",v,"Šta je ivica poliedra?","",["Zajednička duž dve strane","Ceo mnogougao","Svaka dijagonala strane"],"Zajednička duž dve strane","Razlikuj stranu od ivice.","Ivica je zajednička duž dve susedne strane.","basic","Elementi poliedra"),
 v=>{const n=v+6;return Q("poly","impossible",v,"Da li podaci odgovaraju konveksnom poliedru?","V="+n+", F="+n+", E="+(2*n-3),["Da","Ne"],"Ne","Proveri V−E+F.","Dobija se 3, a mora biti 2.","medium","Ojlerova formula","method")},
 v=>{const f=v+6;return N("poly","counts",v,"Odredi broj ivica E.","Konveksni poliedar ima F="+f+"; V=2F−4.",3*(f-2),"Prvo odredi V, zatim primeni Ojlerovu formulu.","V="+(2*f-4)+". E=V+F−2="+3*(f-2)+".","advanced","Ojlerova formula")}
]);
register("pojam-linearne-jednacine",[
 v=>{const a=v+2,b=v+3;return Q("eqconcept","table",v,"Koja vrednost iz tabele je rešenje?",a+"x="+a*b+"; x: "+(b-1)+", "+b+", "+(b+1),[String(b-1),String(b),String(b+1)],String(b),"Proveri svaku ponuđenu vrednost.","Za x="+b+" leve i desne strane su jednake.","medium","Pojam jednačine","calculation")},
 v=>{const a=v+2;return N("eqconcept","parameter",v,"Dopuni desnu stranu da x=−2 bude rešenje.",a+"x+3=__",3-2*a,"Uvrsti x=−2.",a+"·(−2)+3="+(3-2*a)+".","medium","Pojam jednačine","sign")},
 v=>{const a=v+2;return Q("eqconcept","common",v,"Koji broj rešava obe jednačine?","x+2="+(a+2)+" i 3x="+3*a,[String(a-1),String(a),String(a+1)],String(a),"Proveri oba uslova.","x="+a+" zadovoljava obe jednakosti.","advanced","Pojam jednačine","method")}
]);
register("ekvivalentne-transformacije",[
 v=>{const a=v+2;return Q("transform","pair",v,"Izaberi ekvivalentnu jednačinu.","x+"+a+"="+3*a,["2x+"+2*a+"="+6*a,"2x+"+a+"="+6*a,"x+"+2*a+"="+3*a],"2x+"+2*a+"="+6*a,"Ista promena mora obuhvatiti obe strane.","Cela leva i desna strana pomnožene su sa 2.","medium","Ekvivalentne transformacije","rule")},
 v=>{const a=v+2;return Q("transform","zero",v,"Da li je transformacija ekvivalentna?","x="+a+" → pomnoži obe strane sa 0 → 0=0",["Da","Ne"],"Ne","Uporedi skupove rešenja.","Prvobitno je jedino rešenje "+a+", dok 0=0 zadovoljava svaki broj.","advanced","Ekvivalentne transformacije","concept")},
 v=>{const a=v+2,b=v+3;return N("transform","fraction",v,"Odredi x.","[[frac:x|"+a+"]]−2="+b,a*(b+2),"Dodaj 2, pa pomnoži obe strane imeniteljem.","x:"+a+"="+(b+2)+"; x="+a*(b+2)+".","advanced","Ekvivalentne transformacije")}
]);
register("resavanje-linearnih-jednacina",[
 v=>{const a=v+3;return N("solve","fraction",v,"Odredi x.","[[frac:x|2]]="+a,2*a,"Pomnoži obe strane sa 2.","x="+2*a+".","basic","Rešavanje jednačina")},
 v=>{const a=v+3;return N("solve","decimal",v,"Odredi x.","0,5x+"+a+"="+(a+3),6,"Oduzmi isti broj, pa podeli koeficijentom.","0,5x=3; x=6.","medium","Rešavanje jednačina","calculation")},
 v=>{const a=v+2;return N("solve","twosides",v,"Odredi x.",a+"(x−2)+3="+(a-1)+"x+"+(a+6),3*a+3,"Oslobodi se zagrada i grupiši članove.",a+"x−"+2*a+"+3="+(a-1)+"x+"+(a+6)+"; x="+(3*a+3)+".","advanced","Rešavanje jednačina")}
]);
register("primena-linearnih-jednacina",[
 v=>{const a=v+2,b=80+10*v;return N("application","price",v,"Odredi cenu jedne sveske.",a+" jednakih svezaka košta "+a*b+" dinara.",b,"Neka je x cena jedne sveske.",a+"x="+a*b+"; x="+b+" dinara.","basic","Primena jednačine")},
 v=>{const a=v+8;return Q("application","error",v,"Izaberi ispravnu jednačinu.","Stariji brat je 4 godine stariji. Zajedno imaju "+(2*a+4)+" godine. Mlađi ima x.",["x+(x+4)="+(2*a+4),"x+4x="+(2*a+4),"x+(x−4)="+(2*a+4)],"x+(x+4)="+(2*a+4),"Stariji ima x+4, ne 4x.","Sabiramo x i x+4.","medium","Primena jednačine","method")},
 v=>{const a=v+3;return N("application","fraction",v,"Koliko sličica ima cela zbirka?","Trećina zbirke uvećana za "+a+" sličica jednaka je polovini zbirke.",6*a,"Postavi jednačinu x/3+a=x/2.","2x+"+6*a+"=3x, pa je x="+6*a+".","advanced","Primena jednačine")}
]);
register("linearne-nejednacine",[
 v=>{const a=v+2;return Q("inequality","boundary",v,"Da li granični broj pripada rešenju?","x>"+a+"; broj "+a,["Da","Ne"],"Ne","Znak > ne uključuje jednakost.",a+" nije veće od sebe, pa ne pripada rešenju.","medium","Linearna nejednačina","concept")},
 v=>{const a=v+3;return N("inequality","integer",v,"Odredi najveće celobrojno rešenje.","2x<"+(2*a+1),a,"Najpre odredi granicu rešenja.","x<"+num(a+0.5)+", pa je najveće celobrojno rešenje "+a+".","advanced","Linearna nejednačina")},
 v=>{const a=30+10*v,b=200+50*v;return N("inequality","budget",v,"Koliko najviše olovaka možeš kupiti?","Jedna košta "+a+" dinara; imaš "+b+" dinara.",Math.floor(b/a),"Broj olovaka mora biti ceo i cena ne sme preći budžet.",a+"x≤"+b+". Najveći dozvoljeni ceo broj je "+Math.floor(b/a)+".","advanced","Linearna nejednačina")}
]);

const cache=new Map<string,Task[]>();
export function octoberVariants(lessonId:string):Task[]{
 if(!recipes[lessonId])return [];
 const cached=cache.get(lessonId);if(cached)return cached;
 const seen=new Set<string>();const tasks:Task[]=[];
 for(const recipe of recipes[lessonId])for(let v=0;v<6;v++){
  const task=recipe(v);const fingerprint=JSON.stringify([task.prompt,task.math,task.choices,task.diagram]);
  if(!seen.has(fingerprint)){seen.add(fingerprint);tasks.push({...task,prerequisites:[lessonId]})}
 }
 cache.set(lessonId,tasks);return tasks;
}
export function lessonWorkTasks(lessonId:string,pool:Task[]):Task[]{
 const plan=octoberWorkPlans[lessonId]??septemberWorkPlans[lessonId];if(!plan)return pool.filter(task=>!task.practiceOnly);
 return plan.map(id=>{const task=pool.find(item=>item.id===id);if(!task)throw new Error("Missing lesson work task: "+id);return task});
}
export function applyOctoberWorkLevels(lessonId:string,tasks:Task[]):Task[]{
 const plan=octoberWorkPlans[lessonId];if(!plan)return tasks;
 return tasks.map(task=>{
  const at=plan.indexOf(task.id);if(at<0)return task;
  // A conceptual question need not pretend to be advanced just because it is
  // towards the end. This is a progression, not a forced quota.
  const easier=new Set(["6-8i","6-8j","6-9g","6-9j","6-10c","o6-tv-7","o6-zu-7","o6-ut-7","o6-osu-6","o7-pt-6","o7-pt-7","o7-cv-7","o7-tr-7","o7-ki-5","o7-ki-7","o7-ps-7","o8-po-6","o8-po-7","ow-solidangle-face-0"]);
  const level:Level=at<3?"basic":at<7||easier.has(task.id)?"medium":"advanced";
  const diagram=task.id==="o7-tr-1"?{...task.diagram!,type:"pythagoras" as const,variant:"right-trapezoid" as const}:task.diagram;
  return {...task,level,diagram};
 });
}

import { C, I, type ErrorCategory, type Level, type Task, type TaskDiagram } from "./types";

// Representative work uses retained tasks plus a few new mathematical types.
// The larger variant pool belongs to the existing area practice, not to a month.
export const septemberWorkPlans:Record<string,string[]>={
 "kratko-obnavljanje-5":["6r-1","6r-3","sw-r5-decimal-0","6r-2","sw-r5-order-0","sw-r5-angle-0","sw-r5-compare-0","sw-r5-fractionmissing-0","sw-r5-expression-0","sw-r5-rectangle-0"],
 "skup-celih-brojeva":["6-1a","6-1b","6-1c","6-1f","6-1g","6-1h","6-1i","6-1e","6-1k","sw-integer-reverse-0"],
 "apsolutna-vrednost":["6-2a","6-2g","sw-absolute-diagram-0","6-2b","6-2h","6-2f","sw-absolute-table-0","6-2c","6-2i","6-2j"],
 "uporedjivanje":["6-3a","6-3c","6-3f","6-3b","6-3g","6-3i","6-3j","6-3h","sw-order-count-0","sw-order-digit-0"],
 "sabiranje":["6-4a","6-4b","6-4g","6-4f","6-4h","6-4i","sw-add-table-0","6-4j","sw-add-cancel-0","sw-add-signcondition-0"],
 "oduzimanje":["6-5a","6-5b","6-5f","6-5g","6-5h","6-5j","sw-subtract-table-0","6-5e","6-5i","sw-subtract-compare-0"],
 "rastojanje":["6-6a","6-6f","6-6i","6-6b","6-6g","6-6h","sw-distance-midpoint-0","6-6e","6-6j","sw-distance-two-0"],
 "sabiranje-oduzimanje":["6-7a","6-7f","6-7g","6-7b","6-7h","6-7i","sw-signed-table-0","6-7e","6-7j","sw-signed-reverse-0"],
 "kratko-obnavljanje-6":["7r-1","7r-2","7r-3","sw-r6-compare-0","sw-r6-absolute-0","sw-r6-product-0","sw-r6-error-0","sw-r6-fraction-0","sw-r6-number-0","sw-r6-expression-0"],
 "decimalni-zapis":["7-1a","7-1b","7-1g","7-1c","7-1e","7-1i","sw-decimal-parts-0","7-1h","7-1j","sw-decimal-period-0"],
 "decimalni-u-razlomak":["7-2a","7-2f","7-2h","7-2g","7-2e","7-2j","sw-convert-table-0","7-2i","7-2k","sw-convert-missing-0"],
 "kvadrat-racionalnog":["7-3a","7-3f","7-3b","7-3c","7-3h","7-3j","sw-square-error-0","7-3g","7-3i","sw-square-cancel-0"],
 "kvadrati-brojeva":["7-4a","7-4b","sw-squares-zero-0","7-4c","7-4f","7-4h","7-4g","7-4j","7-4e","sw-squares-fraction-0"],
 "realni-brojevi":["7-5a","7-5d","7-5g","7-5b","7-5h","7-5j","sw-real-periodic-0","7-5f","7-5i","sw-real-pattern-0"],
 "brojna-prava":["7-6a","7-6f","7-6h","7-6b","7-6g","sw-line-between-0","7-6c","7-6d","7-6j","sw-line-constraints-0"],
 "intervali":["7-7a","7-7f","7-7g","7-7b","7-7i","7-7j","sw-interval-count-0","7-7e","7-7h","sw-interval-two-0"],
 "kvadratni-koren":["7-8a","7-8b","7-8j","7-8c","7-8f","7-8h","sw-root-table-0","7-8g","7-8i","sw-root-reverse-0"],
 "odredjivanje-korena":["7-9a","7-9b","7-9f","7-9g","7-9h","7-9i","sw-findroot-compare-0","7-9j","7-9c","sw-findroot-round-0"],
 "svojstva-korena":["7-10b","7-10e","7-10g","7-10a","7-10h","7-10i","sw-rootrule-table-0","7-10j","7-10c","sw-rootrule-missing-0"],
 "kratko-obnavljanje-7":["8r-1","8r-2","sw-r7-compare-0","8r-3","8r-4","sw-r7-area-0","sw-r7-error-0","sw-r7-triangle-0","sw-r7-root-0","sw-r7-perimeter-0"],
 "razmera-duzi":["8-1a","8-1f","8-1k","8-1b","8-1g","8-1h","8-1i","8-1e","8-1j","sw-ratio-total-0"],
 "samerljive-duzi":["8-2a","8-2f","8-2k","8-2b","8-2g","8-2h","sw-measure-units-0","8-2i","8-2j","sw-measure-build-0"],
 "proporcionalnost":["8-3a","8-3b","8-3f","8-3g","8-3h","8-3i","sw-proportion-reverse-0","8-3j","8-3k","sw-proportion-sum-0"],
 "talesova-teorema":["8-4b","8-4a","8-4f","8-4g","8-4h","8-4j","sw-tales-remaining-0","8-4i","8-4k","8-4l"],
 "slicni-trouglovi":["8-5a","8-5f","8-5g","8-5b","8-5h","8-5i","sw-similar-angle-0","8-5j","8-5k","sw-similar-perimeter-0"],
 "stavovi-slicnosti":["8-6a","8-6d","8-6j","8-6g","8-6h","8-6e","8-6f","8-6i","8-6k","sw-criteria-check-0"],
 "primene-slicnosti":["8-7a","8-7f","8-7h","8-7g","8-7i","8-7j","sw-apply-scale-0","8-7k","8-7l","sw-apply-shadowreverse-0"],
 "slicnost-pravougli":["o8-sp-1","o8-sp-4","o8-sp-3","o8-sp-2","o8-sp-5","o8-sp-7","sw-right-relation-0","o8-sp-6","sw-right-ratio-0","sw-right-reverse-0"],
 "snalazenje-u-prostoru":["o8-ms-1","o8-ms-4","o8-ms-2","o8-ms-5","o8-ms-3","sw-space-face-0","sw-space-edges-0","o8-ms-6","o8-ms-7","sw-space-hidden-0"],
 "tacka-prava-ravan-osnove":["o8-tpr-1","o8-tpr-4","o8-tpr-2","o8-tpr-5","o8-tpr-6","sw-plane-membership-0","sw-plane-unique-0","o8-tpr-3","o8-tpr-7","sw-plane-four-0"],
 "odnosi-pravih-ravni":["o8-opr-1","o8-opr-4","o8-opr-5","o8-opr-2","o8-opr-6","sw-lines-plane-0","sw-lines-intersection-0","o8-opr-3","o8-opr-7","sw-lines-counter-0"],
 "dve-ravni":["o8-dr-1","o8-dr-4","o8-dr-2","o8-dr-5","sw-planes-common-0","sw-planes-exclude-0","o8-dr-3","o8-dr-6","o8-dr-7","sw-planes-three-0"],
 "ortogonalnost":["o8-or-1","o8-or-2","o8-or-4","o8-or-5","o8-or-6","sw-normal-two-0","sw-normal-parallel-0","o8-or-3","o8-or-7","sw-normal-angle-0"],
 "ortogonalna-projekcija":["o8-pro-1","o8-pro-4","o8-pro-5","o8-pro-2","o8-pro-3","sw-project-endpoints-0","sw-project-plane-0","o8-pro-6","o8-pro-7","sw-project-reverse-0"]
};

// Keep a single brief demonstration when a genuinely new procedure needs it.
export const septemberDemonstrations=new Set(["decimalni-zapis","decimalni-u-razlomak","sabiranje","oduzimanje","sabiranje-oduzimanje","intervali","kvadratni-koren","svojstva-korena","proporcionalnost","talesova-teorema","slicnost-pravougli"]);
type Recipe=(v:number)=>Task;
const recipes:Record<string,Recipe[]>={};
const register=(lesson:string,items:Recipe[])=>{recipes[lesson]=items};
const num=(n:number)=>String(Number(n.toFixed(10))).replace(".",",");
const f=(a:number|string,b:number|string)=>`[[frac:${a}|${b}]]`;
const root=(x:number|string)=>`[[sqrt:${x}]]`;
const N=(type:string,v:number,prompt:string,math:string,answer:number,hint:string,solution:string,level:Level,skill:string,errorCategory:ErrorCategory="method",diagram?:TaskDiagram):Task=>I(`sw-${type}-${v}`,prompt,math,num(answer),hint,solution,level,skill,{taskType:type,errorCategory,practiceOnly:true,diagram});
const Q=(type:string,v:number,prompt:string,math:string,choices:string[],answer:string,hint:string,solution:string,level:Level,skill:string,errorCategory:ErrorCategory="concept",diagram?:TaskDiagram):Task=>C(`sw-${type}-${v}`,prompt,math,choices,answer,hint,solution,level,skill,{taskType:type,errorCategory,practiceOnly:true,diagram});
const comparisons=["<",">","="];

// Grade 6: natural-number and fraction arithmetic is prior knowledge. Integer
// multiplication and division are deliberately absent from September additions.
register("kratko-obnavljanje-5",[
 v=>N("r5-decimal",v,"Napiši decimalno.",f(v+2,10),(v+2)/10,"Deseti deo zapisujemo jednom decimalom.",`${f(v+2,10)}=${num((v+2)/10)}.`,"basic","Razlomci"),
 v=>Q("r5-order",v,"Poređaj od najmanjeg.",`${301+v}, ${310+v}, ${130+v}`,[`${130+v}, ${301+v}, ${310+v}`,`${301+v}, ${130+v}, ${310+v}`,`${310+v}, ${301+v}, ${130+v}`],`${130+v}, ${301+v}, ${310+v}`,"Uporedi stotine, pa desetice.",`${130+v}<${301+v}<${310+v}.`,"basic","Prirodni brojevi"),
 v=>N("r5-angle",v,"Odredi drugi ugao u stepenima.",`Dva ugla čine opružen ugao. Prvi je ${40+5*v}°.`,140-5*v,"Opružen ugao ima 180°.",`α+β=180°. ${40+5*v}°+β=180°. β=180°−${40+5*v}°=${140-5*v}°.`,"basic","Osnovni pojmovi geometrije"),
 v=>Q("r5-compare",v,"Uporedi.",`${f(v+2,v+5)} __ ${f(v+3,v+5)}`,comparisons,"<","Imenioci su jednaki.",`Pošto je ${v+2}<${v+3}, važi ${f(v+2,v+5)}<${f(v+3,v+5)}.`,"basic","Poredak razlomaka"),
 v=>Q("r5-fractionmissing",v,"Dopuni.",`${f(1,v+4)}+x=${f(3,v+4)}`,[f(2,v+4),f(4,v+4),f(2,2*(v+4))],f(2,v+4),"Nepoznati sabirak dobijaš oduzimanjem poznatog sabirka od zbira.",`x=${f(3,v+4)}−${f(1,v+4)}=${f("3−1",v+4)}=${f(2,v+4)}.`,"medium","Razlomci"),
 v=>N("r5-expression",v,"Izračunaj.",`${4*(v+3)+10}−4·${v+3}+6`,16,"Množenje ima prednost.",`${4*(v+3)+10}−4·${v+3}+6=${4*(v+3)+10}−${4*(v+3)}+6=10+6=16.`,"medium","Redosled operacija"),
 v=>N("r5-rectangle",v,"Odredi drugu stranicu pravougaonika u cm.",`O=${4*(v+4)+6} cm, a=${v+4} cm`,v+7,"Polovina obima je zbir dve susedne stranice.",`O=2(a+b). ${4*(v+4)+6}=2(${v+4}+b). Delimo obe strane sa 2: ${2*(v+4)+3}=${v+4}+b. Oduzimamo ${v+4}: b=${2*(v+4)+3}−${v+4}=${v+7} cm.`,"medium","Osnovni pojmovi geometrije")
]);
register("skup-celih-brojeva",[
 v=>N("integer-reverse",v,"Odredi broj suprotan broju x.",`Prethodnik broja x je −${v+5}.`,v+4,"Najpre pronađi sledbenik datog prethodnika.",`x−1=−${v+5}; dodajemo 1 na obe strane: x=−${v+4}. Suprotan broj je −x=${v+4}.`,"advanced","Prethodnik i sledbenik")
]);
register("apsolutna-vrednost",[
 v=>N("absolute-diagram",v,"Odredi apsolutnu vrednost koordinate A.","",v+2,"Prebroj jedinične duži do nule.",`A(−${v+2}), pa je |−${v+2}|=${v+2}.`,"basic","Apsolutna vrednost","diagram",{type:"number-line",min:-v-3,max:2,points:[{value:-v-2,label:"A"}]}),
 v=>N("absolute-table",v,"Dopuni poslednju vrednost.",`x: −${v+4}, 0, ${v+2}; |x|: ${v+4}, 0, ?`,v+2,"Apsolutna vrednost pozitivnog broja je taj broj.",`|${v+2}|=${v+2}.`,"medium","Apsolutna vrednost")
]);
register("uporedjivanje",[
 v=>N("order-count",v,"Koliko celih brojeva ispunjava uslov?",`−${v+5}<x<−${v+1}`,3,"Granice nisu uključene.",`Brojevi su −${v+4}, −${v+3}, −${v+2}: ukupno 3.`,"advanced","Poredak"),
 v=>N("order-digit",v,"Odredi najveću cifru □.",`−${v+2}□>−${v+2}5`,4,"Negativan broj sa manjom apsolutnom vrednošću je veći.",`Potrebno je □<5. Najveća moguća cifra je 4.`,"advanced","Poređenje")
]);
register("sabiranje",[
 v=>N("add-table",v,"Dopuni poslednji zbir.",`a: −${v+5}, ${v+2}; b: ${v+1}, −${v+7}; a+b: −4, ?`,-5,"Saberi drugi par brojeva.",`${v+2}+(−${v+7})=−5.`,"medium","Sabiranje različitih znakova","sign"),
 v=>N("add-cancel",v,"Izračunaj najkraćim putem.",`−${v+8}+${v+3}+${v+8}+(−${v+1})`,2,"Upari suprotne sabirke.",`−${v+8}+${v+8}=0; ${v+3}+(−${v+1})=2.`,"advanced","Suprotni sabirci","rule"),
 v=>N("add-signcondition",v,"Odredi najmanji ceo broj x.",`−${v+5}+x>0`,v+6,"Zbir je pozitivan kada je pozitivan sabirak veći po apsolutnoj vrednosti.",`x mora biti veći od ${v+5}; najmanji ceo broj je ${v+6}.`,"advanced","Znak zbira","sign")
]);
register("oduzimanje",[
 v=>N("subtract-table",v,"Dopuni poslednju razliku.",`a: −${v+3}, ${v+4}; b: −${v+5}, −2; a−b: 2, ?`,v+6,"Oduzimanje −2 je sabiranje 2.",`${v+4}−(−2)=${v+6}.`,"medium","Oduzimanje negativnog broja","sign"),
 v=>Q("subtract-compare",v,"Uporedi bez računanja.",`−${v+4}−(−${v+2}) __ −${v+4}−${v+2}`,comparisons,">","Levo dodajemo pozitivan broj, desno ga oduzimamo.","Levi rezultat je veći od početnog broja, a desni manji.","advanced","Oduzimanje negativnog broja","sign")
]);
register("rastojanje",[
 v=>N("distance-midpoint",v,"Odredi koordinatu sredine duži AB.",`A(−${v+6}), B(${v+2})`,-2,"Potraži tačku jednako udaljenu od A i B.",`Tačka −2 je od oba kraja udaljena ${v+4} jedinice.`,"medium","Rastojanje"),
 v=>N("distance-two",v,"Odredi x.",`d(x,−${v+4})=3 i d(x,${num(2-v)})=3`,-v-1,"Prvi uslov daje dve mogućnosti. Proveri drugi.",`Prvi uslov daje x=−${v+7} ili x=−${v+1}; samo x=−${v+1} je i od ${num(2-v)} udaljen 3 jedinice.`,"advanced","Rastojanje")
]);
register("sabiranje-oduzimanje",[
 v=>N("signed-table",v,"Dopuni poslednju vrednost.",`x: −${v+2}, 0, ${v+3}; x−(−4): ${2-v}, 4, ?`,v+7,"Oduzimanje −4 znači sabiranje 4.",`${v+3}−(−4)=${v+7}.`,"medium","Sabiranje i oduzimanje","sign"),
 v=>N("signed-reverse",v,"Odredi početno stanje.",`Dodato je ${v+5}, zatim oduzeto ${v+8}. Konačno stanje je −${v+6}.`,-v-3,"Rešavaj unazad: vrati oduzeto, pa ukloni dodato.",`−${v+6}+${v+8}−${v+5}=−${v+3}.`,"advanced","Sabiranje i oduzimanje")
]);

// Grade 7: no roots before their lesson; no x²=a before Kvadrati brojeva.
register("kratko-obnavljanje-6",[
 v=>Q("r6-compare",v,"Uporedi.",`−${v+7} __ −${v+3}`,comparisons,"<","Bliži nuli je veći negativan broj.",`−${v+7}<−${v+3}.`,"medium","Poređenje racionalnih brojeva"),
 v=>N("r6-absolute",v,"Izračunaj.",`|−${v+8}|−|${v+3}|`,5,"Odredi obe apsolutne vrednosti.",`${v+8}−${v+3}=5.`,"medium","Apsolutna vrednost"),
 v=>N("r6-product",v,"Izračunaj.",`(−${v+2})·(−3)`,3*(v+2),"Dva minusa daju plus.",`(−${v+2})·(−3)=${3*(v+2)}.`,"medium","Racionalni brojevi","sign"),
 v=>Q("r6-error",v,"Pronađi grešku.",`−${v+7}−(−2)=−${v+9}`,["Nema greške.","Oduzimanje −2 treba zameniti sabiranjem 2.","Prvi broj treba učiniti pozitivnim."],"Oduzimanje −2 treba zameniti sabiranjem 2.","Promeni znak oduzimanog broja.",`−${v+7}+2=−${v+5}.`,"medium","Racionalni brojevi","sign"),
 v=>Q("r6-fraction",v,"Izračunaj.",`${f(1,v+2)}−${f(1,2*(v+2))}`,[f(1,2*(v+2)),f(0,1),f(1,v+2)],f(1,2*(v+2)),"Svedi na zajednički imenilac.",`${f(2,2*(v+2))}−${f(1,2*(v+2))}=${f(1,2*(v+2))}.`,"advanced","Razlomci","calculation"),
 v=>N("r6-number",v,"Odredi x.",`x−(−${v+3})=−${v+5}`,-2*v-8,"Najpre zameni oduzimanje sabiranjem.",`x=−${v+5}−${v+3}=−${2*v+8}.`,"advanced","Racionalni brojevi"),
 v=>N("r6-expression",v,"Izračunaj.",`−2·(${v+3}−${v+7})−${v+2}`,6-v,"Prvo zagrada.",`−2·(−4)−${v+2}=${6-v}.`,"advanced","Redosled operacija")
]);
register("decimalni-zapis",[
 v=>N("decimal-parts",v,"Dopuni.",`${num((v+2)/10)}=${f("?",100)}`,10*(v+2),"Jednu decimalu možeš dopuniti nulom.",`${num((v+2)/10)}=${f(10*(v+2),100)}.`,"medium","Decimalni zapis"),
 v=>N("decimal-period",v,"Odredi decimalu na zadatom mestu.",`0,(${v+2}${v+3}${v+4}); mesto ${10+3*v}`,v+2,"Period ima tri cifre. Uoči koja mesta imaju prvu cifru.",`${10+3*v} pri deljenju sa 3 daje ostatak 1, pa je cifra ${v+2}.`,"advanced","Periodični zapis")
]);
register("decimalni-u-razlomak",[
 v=>N("convert-table",v,"Dopuni poslednji decimalni zapis.",`Razlomci: ${f(1,4)}, ${f(3,4)}, ${f(v+5,4)}; decimale: 0,25; 0,75; ?`,(v+5)/4,"Podeli brojilac sa 4.",`${v+5}:4=${num((v+5)/4)}.`,"medium","Razlomak u decimalni","calculation"),
 v=>Q("convert-missing",v,"Odredi x.",`x+${num((v+1)/10)}=${num((v+4)/10)}`,[f(3,10),f(3,100),f(1,3)],f(3,10),"Odredi razliku, pa je zapiši razlomkom.",`x=0,3=${f(3,10)}.`,"advanced","Pretvaranje zapisa")
]);
register("kvadrat-racionalnog",[
 v=>Q("square-error",v,"Pronađi grešku.",`${v+3}^2=2·${v+3}`,["Kvadrat je proizvod broja sa samim sobom.","Jednakost je tačna.","Kvadrat je zbir dva broja."],"Kvadrat je proizvod broja sa samim sobom.","Eksponent nije činilac.",`${v+3}²=${v+3}·${v+3}=${(v+3)**2}.`,"medium","Kvadrat racionalnog broja","rule"),
 v=>N("square-cancel",v,"Izračunaj bez velikih proizvoda.",`(−${v+4})^2−${v+4}^2+${v+1}`,v+1,"Suprotni brojevi imaju jednake kvadrate.",`Kvadrati se poništavaju: ${(v+4)**2}−${(v+4)**2}+${v+1}=${v+1}.`,"advanced","Kvadrat racionalnog broja","rule")
]);
register("kvadrati-brojeva",[
 v=>N("squares-zero",v,"Odredi x.",`(${v+2}·x)^2=0`,0,"Samo nula ima kvadrat nula.",`${v+2}·x=0, pa je x=0.`,"basic","Kvadrati"),
 v=>Q("squares-fraction",v,"Odredi sva rešenja.",`x^2=${f(1,(v+2)**2)}`,[`x=−${f(1,v+2)} ili x=${f(1,v+2)}`,`x=${f(1,v+2)}`,`x=−${f(1,v+2)}`],`x=−${f(1,v+2)} ili x=${f(1,v+2)}`,"Kvadriraj oba suprotna razlomka.",`Oba broja na kvadrat daju ${f(1,(v+2)**2)}.`,"advanced","Jednačina x²=a")
]);
register("realni-brojevi",[
 v=>Q("real-periodic",v,"Izaberi tačan zaključak.",`0,(${v+2}${v+3})`,["Racionalan je i realan.","Iracionalan je jer zapis ne prestaje.","Nije realan."],"Racionalan je i realan.","Beskonačan periodičan zapis predstavlja racionalan broj.","Periodičnost daje racionalan broj, a svaki racionalan je realan.","medium","Vrste brojeva"),
 v=>Q("real-pattern",v,"Koji zapis je neperiodičan?","Posle svake cifre 1 dodaje se jedna nula više.",[`0,1${"0".repeat(v+1)}1${"0".repeat(v+2)}1${"0".repeat(v+3)}1…`,`0,(${v+2}${v+3})`,"0,125"],`0,1${"0".repeat(v+1)}1${"0".repeat(v+2)}1${"0".repeat(v+3)}1…`,"Kod perioda ista konačna grupa cifara stalno se ponavlja.","Broj nula između jedinica stalno raste, pa nema stalnog perioda.","advanced","Vrste brojeva")
]);
register("brojna-prava",[
 v=>Q("line-between",v,"Koji broj je između A i B?",`A(${num(v+1.2)}), B(${num(v+1.8)})`,[num(v+1.5),num(v+1.9),num(v+1.1)],num(v+1.5),"Traži broj veći od leve i manji od desne koordinate.",`${num(v+1.2)}<${num(v+1.5)}<${num(v+1.8)}.`,"medium","Položaj realnog broja"),
 v=>Q("line-constraints",v,"Odredi x.",`x je između −${v+3} i −${v+2}; suprotan broj broju x je ${num(v+2.4)}.`,[num(-v-2.4),num(v+2.4),num(-v-3.4)],num(-v-2.4),"Promeni znak i proveri granice.",`−${v+3}<${num(-v-2.4)}<−${v+2}.`,"advanced","Položaj realnog broja")
]);
register("intervali",[
 v=>N("interval-count",v,"Koliko celih brojeva pripada intervalu?",`(−${v+3},${v+2}]`,2*v+5,"Levu granicu izostavi, desnu uključi.",`Brojevi od −${v+2} do ${v+2}, uključujući nulu: ${2*v+5}.`,"medium","Intervali"),
 v=>Q("interval-two",v,"Koji interval ispunjava oba uslova?",`x∈[−${v+2},${v+5}] i x∈(${v+1},${v+7})`,[`(${v+1},${v+5}]`,`[−${v+2},${v+7})`,`[${v+1},${v+5}]`],`(${v+1},${v+5}]`,"Zadrži samo zajedničke brojeve.",`Leva granica ${v+1} nije uključena, desna ${v+5} jeste.`,"advanced","Intervali")
]);
register("kvadratni-koren",[
 v=>N("root-table",v,"Dopuni poslednju vrednost.",`a: 0, ${(v+2)**2}, ${(v+3)**2}; ${root("a")}: 0, ${v+2}, ?`,v+3,"Traži nenegativan broj čiji je kvadrat poslednji a.",`${v+3}²=${(v+3)**2}.`,"medium","Kvadratni koren"),
 v=>N("root-reverse",v,"Odredi a.",`${root("a")}=${v+4}`, (v+4)**2,"Kvadriraj datu nenegativnu vrednost.",`a=${v+4}²=${(v+4)**2}.`,"advanced","Definicija korena")
]);
register("odredjivanje-korena",[
 v=>Q("findroot-compare",v,"Uporedi.",`${root((v+4)**2-1)} __ ${v+4}`,comparisons,"<","Uporedi broj pod korenom sa kvadratom desnog broja.",`${(v+4)**2-1}<${(v+4)**2}, pa je koren manji od ${v+4}.`,"medium","Procena korena"),
 v=>{const a=[3,5,6,7,10,11][v],values=[1.73205,2.23606,2.44948,2.64575,3.16227,3.31662],rounded=Math.round(values[v]*100)/100;return N("findroot-round",v,"Zaokruži na dve decimale.",`${root(a)}≈${num(values[v])}…`,rounded,"Pogledaj treću decimalu.",`${root(a)}≈${num(rounded)}.`,"advanced","Približna vrednost korena")}
]);
register("svojstva-korena",[
 v=>N("rootrule-table",v,"Dopuni poslednju vrednost.",`a: ${(v+2)**2}, ${(v+3)**2}; ${root("a")}·${root(4)}: ${2*(v+2)}, ?`,2*(v+3),"Odredi oba korena pa ih pomnoži.",`${v+3}·2=${2*(v+3)}.`,"medium","Koren proizvoda"),
 v=>N("rootrule-missing",v,"Odredi a≥0.",`${root("a")}·${root(9)}=${3*(v+2)}`, (v+2)**2,"Prvo odredi √a.",`3·${root("a")}=${3*(v+2)}, pa je ${root("a")}=${v+2} i a=${(v+2)**2}.`,"advanced","Koren proizvoda")
]);

// Grade 8: geometry retains the curriculum order, including prior-year roots.
register("kratko-obnavljanje-7",[
 v=>Q("r7-compare",v,"Uporedi.",`${root((v+3)**2)} __ ${v+2}`,comparisons,">","Odredi koren potpunog kvadrata.",`${root((v+3)**2)}=${v+3}>${v+2}.`,"basic","Realni brojevi"),
 v=>N("r7-area",v,"Odredi površinu paralelograma.",`a=${v+4} cm, h_a=3 cm`,3*(v+4),"Površina je proizvod stranice i odgovarajuće visine.",`P=a·h_a=${3*(v+4)} cm².`,"medium","Površina"),
 v=>Q("r7-error",v,"Pronađi grešku.",`${root(9+v)}+${root(16+v)}=${root(25+2*v)}`,["Koren zbira nije zbir korena.","Jednakost važi za sve nenegativne brojeve.","Koren se uvek deli."],"Koren zbira nije zbir korena.","Svojstvo proizvoda ne važi za sabiranje.","Levi zbir je veći: pri kvadriranju pojavljuje se i pozitivan dvostruki proizvod.","medium","Kvadratni koren","rule"),
 v=>N("r7-triangle",v,"Odredi katetu pravouglog trougla.",`c=${5*(v+1)} cm, a=${3*(v+1)} cm`,4*(v+1),"Prepoznaj hipotenuzu i postavi Pitagorinu teoremu.",`Katete su a i b, hipotenuza c. a²+b²=c². ${3*(v+1)}²+b²=${5*(v+1)}²; ${9*(v+1)**2}+b²=${25*(v+1)**2}; b²=${25*(v+1)**2}−${9*(v+1)**2}=${16*(v+1)**2}; b=${4*(v+1)} cm jer je pozitivna.`,"advanced","Pitagorina teorema"),
 v=>Q("r7-root",v,"Pojednostavi.",root(2*(v+2)**2),[`${v+2}${root(2)}`,`${(v+2)**2}${root(2)}`,`${v+2}${root(3)}`],`${v+2}${root(2)}`,"Izdvoji potpuni kvadrat.",`${root(2*(v+2)**2)}=${root(`${(v+2)**2}·2`)}=${v+2}${root(2)}.`,"advanced","Kvadratni koren"),
 v=>N("r7-perimeter",v,"Odredi obim pravougaonika.",`d=${5*(v+1)} cm, a=${3*(v+1)} cm`,14*(v+1),"Prvo Pitagorinom teoremom odredi drugu stranicu.",`Katete su stranice a i b, hipotenuza je dijagonala d. a²+b²=d². ${3*(v+1)}²+b²=${5*(v+1)}²; ${9*(v+1)**2}+b²=${25*(v+1)**2}; b²=${25*(v+1)**2}−${9*(v+1)**2}=${16*(v+1)**2}; b=${4*(v+1)} cm jer je pozitivna. O=2(a+b)=2·(${3*(v+1)}+${4*(v+1)})=${14*(v+1)} cm.`,"advanced","Pitagorina teorema")
]);
register("razmera-duzi",[
 v=>N("ratio-total",v,"Odredi kraću duž.",`a:b=2:3 i a+b=${5*(v+3)} cm`,2*(v+3),"Ukupna dužina odgovara pet jednakih delova.",`Jedan deo je ${v+3} cm; kraća duž je ${2*(v+3)} cm.`,"advanced","Razmera")
]);
register("samerljive-duzi",[
 v=>N("measure-units",v,"Odredi broj jednakih delova kraće duži.",`Zajednička mera je ${v+2} mm. Duži su ${3*(v+2)} mm i ${5*(v+2)} mm.`,3,"Podeli kraću duž zajedničkom merom.",`${3*(v+2)}:${v+2}=3.`,"medium","Zajednička mera"),
 v=>Q("measure-build",v,"Izaberi zajedničku meru.",`a=${v+2}u, b=${v+3}u, u>0`,["u","a+b","a·b"],"u","Obe duži treba da sadrže ceo broj istih jedinica.",`Duž a sadrži ${v+2}, a duž b ${v+3} duži u.`,"advanced","Zajednička mera")
]);
register("proporcionalnost",[
 v=>Q("proportion-reverse",v,"Koja proporcija takođe važi?",`${v+2}:${v+3}=${2*(v+2)}:${2*(v+3)}`,[`${v+3}:${v+2}=${2*(v+3)}:${2*(v+2)}`,`${v+3}:${v+2}=${2*(v+2)}:${2*(v+3)}`,`${v+2}:${v+3}=${2*(v+3)}:${2*(v+2)}`],`${v+3}:${v+2}=${2*(v+3)}:${2*(v+2)}`,"Obrni obe razmere, ne samo jednu.","Recipročne vrednosti jednakih razmera ostaju jednake.","medium","Proporcija","rule"),
 v=>N("proportion-sum",v,"Odredi x.",`x:y=3:4 i x+y=${7*(v+2)}`,3*(v+2),"Zbir ima sedam jednakih delova.",`Jedan deo je ${v+2}; x=${3*(v+2)}.`,"advanced","Postavljanje proporcije")
]);
register("talesova-teorema",[
 v=>N("tales-remaining",v,"Odredi NC.",`MN∥BC, AM=${v+2}, AB=${2*(v+2)}, AC=${4*(v+2)}`,2*(v+2),"Odredi AN, pa ga oduzmi od AC.",`AN=AC·AM:AB=${2*(v+2)}; NC=${2*(v+2)}.`,"medium","Talesova teorema","method",{type:"tales",variant:"triangle"})
]);
register("slicni-trouglovi",[
 v=>N("similar-angle",v,"Odredi ∠F.",`△ABC∼△DEF, ∠A=${35+v}°, ∠B=${65+v}°`,80-2*v,"C i F su odgovarajuća temena.",`∠F=∠C=180°−${35+v}°−${65+v}°=${80-2*v}°.`,"medium","Odgovarajući uglovi"),
 v=>N("similar-perimeter",v,"Odredi manju stranicu AB.",`△ABC∼△DEF, O_ABC=${12+6*v}, O_DEF=${24+12*v}, DE=${6+2*v}`,v+3,"Odnos obima jednak je odnosu odgovarajućih stranica.",`Manji obim je polovina većeg, pa je AB=DE:2=${v+3}.`,"advanced","Slični trouglovi")
]);
register("stavovi-slicnosti",[
 v=>Q("criteria-check",v,"Da li su trouglovi slični?",`Stranice: ${3*(v+1)}, ${4*(v+1)}, ${5*(v+1)} i ${6*(v+1)}, ${8*(v+1)}, ${11*(v+1)}`,["Da, po SSS.","Ne; nisu sve odgovarajuće stranice proporcionalne.","Da, jer imaju dve proporcionalne stranice."],"Ne; nisu sve odgovarajuće stranice proporcionalne.","Uporedi sva tri odnosa, od najmanjih stranica ka najvećim.","Prva dva odnosa su 1:2, treći je 5:11. SSS nije ispunjen.","advanced","Stavovi sličnosti")
]);
register("primene-slicnosti",[
 v=>N("apply-scale",v,"Odredi imenilac razmere 1:n.",`Na planu je ${v+2} cm, u stvarnosti ${3*(v+2)} m.`,300,"Prvo pretvori metre u centimetre.",`${3*(v+2)} m=${300*(v+2)} cm; n=${300*(v+2)}:${v+2}=300.`,"medium","Razmera plana"),
 v=>N("apply-shadowreverse",v,"Odredi dužinu senke stuba.",`Štap visine 2 m ima senku 3 m; stub je visok ${2*(v+3)} m.`,3*(v+3),"Zadrži isti odnos visine i senke.",`Stub je ${v+3} puta viši; senka je ${3*(v+3)} m.`,"advanced","Senke","method",{type:"shadow",objectLabel:"Štap",objectHeight:"2 m",objectShadow:"3 m",targetShadow:"?",targetLabel:`${2*(v+3)} m`})
]);
register("slicnost-pravougli",[
 v=>Q("right-relation",v,"Uporedi duži.",`p=${v+2}, q=${4*(v+2)}; a²=c·p, b²=c·q`,["a<b","a>b","a=b"],"a<b","Hipotenuza c je zajednički pozitivan činilac.","p<q daje a²<b², pa je a<b.","medium","Katetna teorema"),
 v=>Q("right-ratio",v,"Odredi a:b.",`p=${v+2}, q=${4*(v+2)}; a²=c·p, b²=c·q`,["1:2","1:4","2:1"],"1:2","Odnos kvadrata kateta je p:q.","a²:b²=1:4, pa je a:b=1:2.","advanced","Katetna teorema"),
 v=>N("right-reverse",v,"Odredi drugi odsečak q.",`c=${5*(v+2)}, a=${3*(v+2)}; a²=c·p`,16*(v+2)/5,"Prvo odredi p, zatim q=c−p.",`p=${num(9*(v+2)/5)}; q=${num(16*(v+2)/5)}.`,"advanced","Katetna teorema")
]);

const names=["ABCD","KLMN","PQRS","EFGH","WXYZ","IJKL"];
register("snalazenje-u-prostoru",[
 v=>Q("space-face",v,"Koji elementi čine jednu stranu kocke?",`Donja strana je ${names[v]}.`,["Četiri temena, četiri ivice.","Tri temena, tri ivice.","Osam temena, dvanaest ivica."],"Četiri temena, četiri ivice.","Jedna strana kocke je kvadrat.","Kvadrat ima četiri temena i četiri stranice, koje su ivice kocke.","medium","Elementi kocke"),
 v=>N("space-edges",v,"Koliko ivica ne dodiruje izabrano teme kocke?",`Izabrano teme: ${names[v][0]}.`,9,"Od ukupno 12 ivica oduzmi tri koje izlaze iz temena.","12−3=9.","medium","Elementi kocke"),
 v=>Q("space-hidden",v,"Izaberi tačan zaključak.",`Na crtežu je teme ${names[v][0]} zaklonjeno.`,["Zaklonjene ivice i dalje postoje.","Kocka tada ima manje ivica.","Zaklonjena strana nije deo kocke."],"Zaklonjene ivice i dalje postoje.","Crtež ne menja geometrijsko telo.","Zaklonjeni elementi označavaju se isprekidanim linijama; broj elemenata je isti.","advanced","Čitanje prostornog crteža","diagram")
]);
register("tacka-prava-ravan-osnove",[
 v=>Q("plane-membership",v,"Koji zapis mora da važi?",`${names[v][0]}∈p i p⊂α`,[`${names[v][0]}∈α`,`${names[v][0]}∉α`,"p∉α"],`${names[v][0]}∈α`,"Svaka tačka prave koja leži u ravni pripada toj ravni.",`Pošto je p⊂α, i tačka ${names[v][0]} je u α.`,"medium","Pripadnost ravni"),
 v=>Q("plane-unique",v,"Koji podaci određuju jednu ravan?",`Tačke ${names[v].slice(0,3).split("").join(", ")}.`,["Tri nekolinearne tačke.","Tri tačke na istoj pravoj.","Jedna tačka."],"Tri nekolinearne tačke.","Tačke ne smeju sve biti na jednoj pravoj.","Kroz tri nekolinearne tačke prolazi tačno jedna ravan.","medium","Određenost ravni"),
 v=>Q("plane-four",v,"Koliko različitih ravni određuju trojke ovih tačaka?",`Tačke ${names[v].split("").join(", ")} su u istoj ravni; nijedne tri nisu kolinearne.`,["1","4","Beskonačno mnogo"],"1","Svaka trojka određuje istu ravan.","Sve četiri trojke daju jednu istu ravan.","advanced","Određenost ravni")
]);
register("odnosi-pravih-ravni",[
 v=>Q("lines-plane",v,"Koliko zajedničkih tačaka mogu imati p i α?",`p nije sadržana u α; ${names[v][0]}∈p∩α.`,["Tačno jednu.","Tačno dve.","Beskonačno mnogo."],"Tačno jednu.","Dve zajedničke tačke bi celu pravu odredile u ravni.","Prava koja nije u ravni, a seče je, ima jednu zajedničku tačku.","medium","Prava i ravan"),
 v=>Q("lines-intersection",v,"Koji zaključak važi?",`Prave p i q se seku u ${names[v][0]}.`,["Postoji jedna ravan koja ih sadrži.","Prave su mimoilazne.","Prave nemaju zajedničke tačke."],"Postoji jedna ravan koja ih sadrži.","Dve prave koje se seku leže u istoj ravni.","Presek isključuje paralelnost i mimoilaženje.","medium","Odnosi pravih"),
 v=>Q("lines-counter",v,"Šta nedostaje za zaključak o paralelnosti?",`Prave p_${v+1} i q_${v+1} su različite i nemaju zajedničke tačke.`,["Da leže u istoj ravni.","Da obe imaju po dve tačke.","Da im se produže duži."],"Da leže u istoj ravni.","U prostoru prave bez preseka mogu biti i mimoilazne.","Bez uslova da su u istoj ravni ne možemo tvrditi da su paralelne.","advanced","Odnosi pravih")
]);
register("dve-ravni",[
 v=>Q("planes-common",v,`Gde se nalazi prava ${names[v].slice(0,2)}?`,`Različite tačke ${names[v][0]} i ${names[v][1]} pripadaju i α i β.`,["U obe ravni.","Samo u α.","Ni u jednoj ravni."],"U obe ravni.","Dve tačke ravni određuju pravu koja leži u toj ravni.",`Prava ${names[v].slice(0,2)} leži i u α i u β.`,"medium","Presek ravni"),
 v=>Q("planes-exclude",v,"Koji zaključak važi?",`${names[v][0]}∈α, ${names[v][0]}∉β, p=α∩β`,[`${names[v][0]}∉p`,`${names[v][0]}∈p`,"p∥α"],`${names[v][0]}∉p`,"Svaka tačka preseka pripada obema ravnima.",`Tačka ${names[v][0]} ne pripada β, pa ne može biti na pravoj preseka.`,"medium","Presek ravni"),
 v=>Q("planes-three",v,"Koji zaključak važi?",`Različite ravni α i β sadrže tri zajedničke tačke ${names[v].slice(0,3).split("").join(", ")}.`,["Te tri tačke su kolinearne.","Te tri tačke su nekolinearne.","Ravni su paralelne."],"Te tri tačke su kolinearne.","Presek dve različite ravni je prava.","Sve zajedničke tačke leže na pravoj preseka.","advanced","Presek ravni")
]);
register("ortogonalnost",[
 v=>Q("normal-two",v,"Da li dati uslov dokazuje p⊥α?",`p je normalna na dve prave ravni α koje se seku u podnožju ${names[v][0]}.`,["Da.","Ne; potrebne su tri prave.","Ne; prava p mora biti u α."],"Da.","Dovoljne su dve prave koje se seku u podnožju.","Normalnost na obe takve prave obezbeđuje normalnost na ravan.","medium","Normalnost prave i ravni"),
 v=>Q("normal-parallel",v,"Koji odnos važi?",`p⊥α i q∥p; q prolazi kroz tačku ${names[v][0]}.`,["q⊥α","q⊂α","q∥α"],"q⊥α","Paralelne prave imaju isti pravac.","Prava paralelna normali na ravan takođe je normalna na ravan.","medium","Normalnost prave i ravni"),
 v=>N("normal-angle",v,`Odredi ∠${names[v][1]}O${names[v][0]}.`,`p⊥α, O=p∩α; ${names[v][1]}∈p, ${names[v][0]}∈α; obe tačke su različite od O.`,90,"Prava kroz podnožje i tačku ravni je u toj ravni.",`Duž O${names[v][1]} je na normali p, a O${names[v][0]} je u α, pa je ugao 90°.`,"advanced","Normalnost prave i ravni","rule")
]);
register("ortogonalna-projekcija",[
 v=>Q("project-endpoints",v,"Kako dobijaš projekciju duži?",`Krajevi duži su ${names[v][0]} i ${names[v][1]}.`,["Projektuj krajeve i spoji njihove projekcije.","Projektuj samo sredinu.","Produži duž do ivice ravni."],"Projektuj krajeve i spoji njihove projekcije.","Svaki kraj ima svoje podnožje normale.","Projekcija duži je duž između projekcija krajeva ili tačka ako se podnožja poklope.","medium","Ortogonalna projekcija"),
 v=>Q("project-plane",v,"Šta je projekcija duži koja leži u ravni α?",`AB⊂α, AB=${v+3} cm`,["Sama duž AB.","Samo tačka A.","Duž dvostruko kraća od AB."],"Sama duž AB.","Tačke ravni projektuju se same u sebe.",`A′=A i B′=B, pa je projekcija AB, dužine ${v+3} cm.`,"medium","Ortogonalna projekcija"),
 v=>Q("project-reverse",v,"Odredi položaj prave AB prema α.",`A≠B, a njihove projekcije su ista tačka ${names[v][0]}′.`,["AB⊥α","AB∥α","AB⊂α"],"AB⊥α","Obe tačke leže na istoj normali kroz zajedničko podnožje.","Prava AB je ta normala, pa je AB⊥α.","advanced","Ortogonalna projekcija")
]);

const cache=new Map<string,Task[]>();
export function septemberVariants(lessonId:string):Task[]{
 const existing=cache.get(lessonId);if(existing)return existing;
 const tasks:Task[]=[];const seen=new Set<string>();
 for(const recipe of recipes[lessonId]??[])for(let v=0;v<6;v++){
  const task=recipe(v);const fingerprint=JSON.stringify([task.prompt,task.math,task.choices,task.diagram]);
  if(!seen.has(fingerprint)){seen.add(fingerprint);tasks.push({...task,prerequisites:[lessonId]})}
 }
 cache.set(lessonId,tasks);return tasks;
}

// Explicit labels describe the mathematical types of retained questions; they
// are not inferred from whether the UI happens to use a choice or an input.
const retainedTypes:Record<string,string>={
 "6r-1":"racunanje-prirodnih","6r-2":"sabiranje-razlomaka","6r-3":"kolinearnost",
 "6-1a":"pripadnost-celih","6-1b":"suprotan-broj","6-1c":"znak-nule","6-1e":"pripadnost-Z",
 "6-2a":"apsolutna-jednog-broja","6-2b":"izraz-sa-apsolutnim","6-2c":"dva-uslova-apsolutne",
 "6-3a":"poredjenje-dva-broja","6-3b":"rastuci-poredak","6-3c":"izbor-veceg-broja",
 "6-4a":"sabiranje-istog-znaka","6-4b":"sabiranje-razlicitog-znaka",
 "6-5a":"oduzimanje-pozitivnog","6-5b":"oduzimanje-negativnog","6-5e":"nepoznati-umanjenik",
 "6-6a":"rastojanje-razlicitih-znakova","6-6b":"rastojanje-istog-znaka","6-6e":"rastojanje-i-znak",
 "6-7a":"izraz-sa-zagradama","6-7b":"izraz-sa-zagradama","6-7e":"nepoznati-umanjilac",
 "7r-1":"sabiranje-celih","7r-2":"sabiranje-razlomaka","7r-3":"stepen-negativnog",
 "7-1a":"razlomak-u-konacan-zapis","7-1b":"izbor-periodicnog","7-1c":"razlomak-u-konacan-zapis","7-1e":"razlomak-u-periodican-zapis",
 "7-2a":"decimalni-u-razlomak","7-2f":"razlomak-u-decimalni","7-2e":"razlomak-u-decimalni",
 "7-3a":"kvadrat-celog","7-3b":"kvadrat-razlomka","7-3c":"kvadrat-decimalnog",
 "7-4a":"racunanje-kvadrata","7-4b":"prepoznavanje-kvadrata","7-4c":"poredjenje-kvadrata","7-4e":"kvadrat-i-pozitivan-uslov",
 "7-5a":"prepoznavanje-iracionalnog","7-5d":"prepoznavanje-racionalnog","7-5b":"racionalan-je-realan",
 "7-6a":"polozaj-pi","7-6b":"poredjenje-pi","7-6c":"poredak-realnih","7-6d":"polozaj-negativnog-pi",
 "7-7a":"nejednakost-u-interval","7-7b":"pripadnost-intervalu","7-7e":"apsolutna-u-interval",
 "7-8a":"koren-potpunog-kvadrata","7-8b":"definicija-korena","7-8c":"koren-decimalnog",
 "7-9a":"koren-potpunog-kvadrata","7-9b":"koren-razlomka","7-9c":"procena-susednim-kvadratima",
 "7-10b":"koren-proizvoda","7-10e":"proizvod-korena","7-10a":"izdvajanje-kvadrata","7-10c":"provera-svojstava",
 "8r-1":"izraz-sa-korenom","8r-2":"zbir-uglova","8r-3":"povrsina-trougla","8r-4":"hipotenuza",
 "8-1a":"skracivanje-razmere","8-1b":"jedinice-i-razmera",
 "8-2a":"prepoznavanje-samerljivih","8-2b":"model-nesamerljivosti",
 "8-3a":"nepoznat-clan-proporcije","8-3b":"provera-proporcije",
 "8-4a":"trougao-nepoznata-duz","8-4b":"izbor-talesove-proporcije",
 "8-5a":"odgovarajuce-stranice","8-5b":"nepoznata-stranica",
 "8-6a":"prepoznavanje-uu","8-6d":"prepoznavanje-sss",
 "8-7a":"plan-u-stvarnost"
};
const basicOverrides=new Set(["6-1e","6-1f","6-1g","6-1h","6-1i"]);
const basicLater=new Set(["6-1k","6-2i","6-3j","sw-absolute-table-0","sw-r5-order-0","sw-squares-zero-0","8-1f","8-1k","8-2k","sw-measure-build-0","o8-ms-6","o8-ms-7","sw-space-hidden-0","7-8g","sw-root-reverse-0"]);
export function applySeptemberWorkLevels(lessonId:string,tasks:Task[]):Task[]{
 const plan=septemberWorkPlans[lessonId];if(!plan)return tasks;
 return tasks.map(task=>{
  if(lessonId==="apsolutna-vrednost")return {...task,level:["6-2b","6-2c","6-2d","6-2h","6-2j"].includes(task.id)?"medium":"basic",taskType:retainedTypes[task.id]??task.taskType};
  if(lessonId==="skup-celih-brojeva")return {...task,level:task.id.startsWith("sw-integer-reverse-")?"medium":"basic",taskType:retainedTypes[task.id]??task.taskType};
  if(lessonId==="kratko-obnavljanje-5")return {...task,taskType:retainedTypes[task.id]??task.taskType};
  const at=plan.indexOf(task.id);
  const level:Level=at<0?task.level:at<3||basicOverrides.has(task.id)?"basic":at<7||basicLater.has(task.id)?"medium":"advanced";
  return {...task,level,taskType:retainedTypes[task.id]??task.taskType,
   // A cube's parallel edges and a normal segment need their actual diagrams.
   ...(task.id==="o8-sp-1"?{diagram:{type:"pythagoras" as const,variant:"right-altitude" as const,labels:{p:"4",q:"25",h:"?"}}}:{}),
   ...(task.id==="o8-opr-5"?{diagram:{type:"space" as const,variant:"skew-lines" as const,labels:{first:"AB",second:"A₁B₁",relation:"parallel"}}}:{}),
   ...(["o8-pro-2","o8-pro-6"].includes(task.id)?{diagram:{type:"space" as const,variant:"projection" as const,labels:{relation:"normal"}}}:{}),
  };
 });
}

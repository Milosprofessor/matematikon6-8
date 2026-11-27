import { I, type Level, type Task } from "./types";

// Three genuinely different operations per lesson. Vary quantities within each
// operation so a second practice session need not repeat the classroom examples.
type Problem = [prompt:string, math:string, answer:number, hint:string, solution:string];
type Family = [skill:string, level:Level, make:(n:number)=>Problem];
const families:Record<string,Family[]> = {
  "uglovi-na-transverzali":[
    ["Odgovarajući uglovi","basic",n=>["Koliki je odgovarajući ugao u stepenima na drugoj paraleli?",`α=${40+n}°`,40+n,"Prave su paralelne.",`Pošto su prave paralelne, saglasni uglovi su jednaki: β=α=${40+n}°.`]],
    ["Unutrašnji uglovi","medium",n=>["Na paralelama pronađi unutrašnji ugao sa iste strane sečice, u stepenima.",`α=${60+n}°`,120-n,"Zbir je opružen ugao.",`180°−${60+n}°=${120-n}°.`]],
    ["Odnos uglova","advanced",n=>["Unutrašnji uglovi sa iste strane sečice paralelnih pravih razlikuju se za navedeni iznos. Koliki je manji u stepenima?",`Razlika je ${2*n}°.`,90-n,"Od 180° oduzmi razliku pa prepolovi.",`Neka je manji ugao x°, veći (x+${2*n})°. x+x+${2*n}=180, pa 2x=${180-2*n} i x=${90-n}. Manji ugao je ${90-n}°.`]],
  ],
  "skup-racionalnih-brojeva":[
    ["Zapis celog broja","basic",n=>["Dopuni brojilac.",`[[frac:x|4]]=−${n}`,-4*n,"Pomnoži obe strane sa 4.",`x=4·(−${n})=${-4*n}.`]],
    ["Podela jedinice","medium",n=>["Koja je koordinata tačke koja je ovoliko četvrtina levo od nule?",`Broj četvrtina: ${n}`,-n/4,"Prvo odredi dužinu pomaka, zatim znak.",`Koordinata je −[[frac:${n}|4]].`]],
    ["Brojanje razlomaka","advanced",n=>["Koliko razlomaka sa ovim pozitivnim imeniocem leži strogo između −1 i 0?",`Imenilac je ${n+3}.`,n+2,"Popiši moguće negativne brojioce.",`Brojioci su od −${n+2} do −1, ukupno ${n+2}.`]],
  ],
  "apsolutna-vrednost-racionalnog":[
    ["Rastojanje od nule","basic",n=>["Upiši apsolutnu vrednost.",`|−${n},5|`,n+.5,"Rastojanje je nenegativno.",`Tačka je od nule udaljena ${n},5 jedinica.`]],
    ["Negativna koordinata","medium",n=>["Pronađi negativnu koordinatu.",`|x|=${n},25`,-n-.25,"Odaberi tačku levo od nule.",`Od dva rešenja negativno je −${n},25.`]],
    ["Razmak dve tačke","advanced",n=>["Koliki je razmak dva rešenja jednačine?",`|x|=${n},5`,2*n+1,"Tačke su simetrične u odnosu na nulu.",`Zbir dva jednaka rastojanja je 2·${n},5=${2*n+1}.`]],
  ],
  "jednacine-kvadrat":[
    ["Pozitivan koren","basic",n=>["Upiši pozitivno rešenje.",`x²=${(n+6)**2}`,n+6,"Nađi pozitivan broj čiji je kvadrat dat.",`${n+6}²=${(n+6)**2}.`]],
    ["Rastojanje rešenja","medium",n=>["Koliko su udaljena rešenja na brojnoj pravoj?",`x²=${(n+2)**2}`,2*(n+2),"Napiši oba rešenja.",`Rešenja su −${n+2} i ${n+2}, a razmak je ${2*(n+2)}.`]],
    ["Pomeren kvadrat","advanced",n=>["Upiši manje rešenje.",`(x−2)²=${(n+1)**2}`,1-n,"Manjem rešenju odgovara negativna vrednost u zagradi.",`x−2=−${n+1} daje x=${1-n}.`]],
  ],
  "direktna-proporcionalnost":[
    ["Jedinična cena","basic",n=>["Koliko košta jedan kilogram u dinarima ako je cena po kilogramu stalna?",`3 kg košta ${3*(60+n)} dinara.`,60+n,"Podeli cenu masom.",`${3*(60+n)}:3=${60+n}.`]],
    ["Promena količine","medium",n=>["Koliko litara iste boje treba za 15 m²?",`Za 5 m² potrebno je ${n} l.`,3*n,"Površina je tri puta veća.",`Utrošak je 3·${n}=${3*n} litara.`]],
    ["Obrnuto čitanje tabele","advanced",n=>["Koji ulaz daje navedeni izlaz direktne proporcionalnosti?",`Za x=4 je y=${4*n}. Sada je y=${7*n}.`,7,"Iz prvog para odredi koeficijent.",`k=${n}, pa je novi ulaz ${7*n}:${n}=7.`]],
  ],
  "funkcija-ykx":[
    ["Ordinata","basic",n=>["Upiši ordinatu tačke na grafiku.",`y=−${n}x, x=3`,-3*n,"Zameni x brojem 3.",`y=−${n}·3=${-3*n}.`]],
    ["Koeficijent iz tačke","medium",n=>["Odredi koeficijent k prave kroz koordinatni početak i datu tačku.",`A(−2, ${2*n})`,-n,"Podeli ordinatu apscisom.",`k=${2*n}:(−2)=−${n}.`]],
    ["Presek sa horizontalom","advanced",n=>["Na kojoj apscisi grafik seče datu horizontalnu pravu?",`y=−2x, y=${2*n+2}`,-n-1,"Uvrsti poznato y u prvu jednakost.",`−2x=${2*n+2} daje x=${-n-1}.`]],
  ],
  "proporcije":[
    ["Četvrti član","basic",n=>["Odredi x.",`2:3=${2*n}:x`,3*n,"Obe veličine iz prve razmere pomnoži istim brojem.",`x=3·${n}=${3*n}.`]],
    ["Jedinice u razmeri","medium",n=>["Odredi nepoznati broj centimetara.",`1 m : ${n*10} cm = 20 cm : x cm`,2*n,"Izrazi 1 m u centimetrima.",`100x=20·${10*n} daje x=${2*n}.`]],
    ["Proporcija sa izrazom","advanced",n=>["Reši proporciju.",`(x+1):4=${n}:2`,2*n-1,"Upotrebi unakrsne proizvode.",`2(x+1)=4·${n} daje x=${2*n-1}.`]],
  ],
  "produzena-proporcija":[
    ["Poznat jedan deo","basic",n=>["Odredi c.",`a:b:c=2:3:5, a=${2*n}`,5*n,"Najpre odredi jedinicu odnosa.",`Jedan deo je ${n}, pa je c=5·${n}.`]],
    ["Poznat zbir","medium",n=>["Nađi srednju veličinu b.",`a:b:c=1:2:4, a+b+c=${7*n}`,2*n,"Zbir sadrži sedam delova.",`b=2·(${7*n}:7)=${2*n}.`]],
    ["Povezivanje odnosa","advanced",n=>["Upiši c.",`a:b=2:3, b:c=6:7, a=${4*n}`,7*n,"Prvu razmeru proširi tako da srednji član bude 6.",`a:b:c=4:6:7, pa je c=7·${n}.`]],
  ],
  "primena-produzene-proporcije":[
    ["Podela iznosa","basic",n=>["Koliko dinara dobija najmanji učesnik?",`Ukupno ${600*n} dinara, odnos 1:2:3.`,100*n,"Zbir delova je 6.",`Najmanji dobija ${600*n}:6=${100*n} dinara.`]],
    ["Sastav smeše","medium",n=>["Koliko grama ima treći sastojak?",`Odnos masa je 2:3:4, prvi sastojak ima ${20*n} g.`,40*n,"Uporedi broj delova za prvi i treći sastojak.",`Treći ima dvostruko veću masu, ${40*n} g.`]],
    ["Razlika dužina","advanced",n=>["Koliki je obim trougla u centimetrima?",`Stranice su u odnosu 3:4:5. Najduža je za ${2*n} cm duža od najkraće.`,12*n,"Razlika odgovara dvema jedinicama razmere.",`Jedan deo je ${n} cm, pa je obim (3+4+5)·${n}=${12*n} cm.`]],
  ],
};

export const octoberSupplement: Record<string, Task[]> = Object.fromEntries(
  Object.entries(families).map(([id, group])=>[id,group.flatMap(([skill,level,make],index)=>
    [2,3,4].map(n=>{
      const [prompt,math,answer,hint,solution]=make(n);
      return I(`dop-${id}-${index+1}-${n}`,prompt,math,String(answer).replace(".",","),hint,solution,level,skill,
        {taskType:skill,practiceOnly:true,prerequisites:[id]});
    })
  )])
);

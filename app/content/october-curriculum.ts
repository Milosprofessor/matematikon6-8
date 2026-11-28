import { Area, C, I, Lesson } from "./types";
import { grade6OctoberAreas as legacyGrade6, grade7OctoberAreas as legacyGrade7, grade8OctoberAreas as legacyGrade8 } from "./october";

const sequence = (area: Area, month: "september" | "october" = "october"): Area => ({
  ...area,
  month: undefined,
  lessons: area.lessons.map((lesson, index, lessons) => ({
    ...lesson,
    month: lesson.month ?? month,
    prerequisites: lesson.prerequisites ?? (index ? [lessons[index - 1].id] : []),
  })),
});

const spoljasnjiUglovi: Lesson = {
  id: "uglovi-transverzala",
  title: "Spoljašnji uglovi trougla",
  month: "october",
  prerequisites: ["zbir-uglova-trougla"],
  intro: "Spoljašnji ugao trougla je ugao između produžetka jedne stranice preko temena i poluprave druge stranice iz tog temena. Jednak je zbiru dva njemu nesusedna unutrašnja ugla.",
  rules: [
    "Spoljašnji i njemu susedni unutrašnji ugao imaju zbir 180°.",
    "Spoljašnji ugao jednak je zbiru dva njemu nesusedna unutrašnja ugla.",
    "Trougao ima po dva spoljašnja ugla kod svakog temena; oni su međusobno jednaki jer su unakrsni. Zbir po jednog spoljašnjeg ugla kod svakog temena je 360°.",
  ],
  formulas: ["α+α_1=180°", "α_1=β+γ", "α_1+β_1+γ_1=360°"],
  examples: [
    "Ako je α=68°, tada je α₁=112°.",
    "Ako su β=47° i γ=63°, tada je α₁=110°.",
    "Po jedan spoljašnji ugao kod svakog temena: 100°, 120° i 140°, zbir 360°.",
  ],
  solved: {
    question: "Odredi spoljašnji ugao kod temena A ako su β=56° i γ=71°.",
    steps: ["Spoljašnji ugao jednak je zbiru dva nesusedna unutrašnja ugla.", "α₁=56°+71°.", "α₁=127°."],
  },
  worked: [{question:"Odredi spoljašnji ugao kod temena A ako su β=56° i γ=71°.",steps:["α₁=β+γ.","α₁=56°+71°=127°.","Provera: α=180°−127°=53°; 53°+56°+71°=180°."]},{question:"Unutrašnji ugao α je 74°. Odredi α₁.",steps:["α+α₁=180°.","74°+α₁=180°.","α₁=106°."]},{question:"Dva spoljašnja ugla kod različitih temena su 100° i 110°. Odredi treći.",steps:["α₁+β₁+γ₁=360°.","γ₁=360°−100°−110°=150°."]}],
  diagram: "triangle",
  tasks: [
    I("o6-su-1", "Odredi α_1.", "α=74°", "106", "Naporedni uglovi imaju zbir 180°.", "α₁=180°−74°=106°.", "basic", "Spoljašnji ugao", { taskType: "susedni-uglovi", errorCategory: "calculation" }),
    I("o6-su-2", "Odredi α_1.", "β=48°, γ=69°", "117", "Saberi nesusedne unutrašnje uglove.", "α₁=48°+69°=117°.", "basic", "Spoljašnji ugao", { taskType: "zbir-nesusednih", errorCategory: "rule" }),
    C("o6-su-3", "Izaberi tačnu jednakost.", "Spoljašnji ugao kod temena A", ["α_1=β+γ", "α_1=α+β", "α_1=180°+α"], "α_1=β+γ", "Traži uglove koji nisu susedni spoljašnjem uglu.", "α+β+γ=180° i α+α₁=180°. Odatle sledi α₁=β+γ.", "medium", "Spoljašnji ugao", { taskType: "izbor-pravila", errorCategory: "rule" }),
  ],
};

const konstrukcijeUglova: Lesson = {
  id: "konstrukcije-uglova",
  title: "Konstrukcije uglova",
  month: "october",
  prerequisites: ["nejednakost-trougla"],
  intro: "Lenjirom i šestarom najpre konstruišemo osnovne uglove, a zatim ih prepolovljavamo ili sabiramo.",
  rules: [
    "Jednakostranični trougao daje ugao od 60°.",
    "Simetrala deli ugao na dva jednaka dela.",
    "Prav ugao ima 90°, pa njegove simetrale daju uglove od 45°.",
  ],
  formulas: ["60°:2=30°", "90°:2=45°", "45°+30°=75°"],
  examples: [
    "Ugao od 30° dobijamo prepolovljavanjem ugla od 60°.",
    "Ugao od 120° dobijamo kao suplement ugla od 60°.",
    "Ugao od 135° dobijamo sabiranjem 90° i 45°.",
  ],
  solved: {
    question: "Kako konstruišemo ugao od 15°?",
    steps: ["Konstruišemo ugao od 60°.", "Simetralom dobijemo ugao od 30°.", "Još jednom povučemo simetralu i dobijemo 15°."],
  },
  diagram: "triangle",
  tasks: [
    C("o6-ku-1", "Koji ugao dobijamo prepolovljavanjem 60°?", "", ["15°", "30°", "45°"], "30°", "Simetrala deli ugao na dva jednaka dela.", "60°:2=30°.", "basic", "Konstrukcija ugla", { taskType: "prepolovljavanje", errorCategory: "method" }),
    C("o6-ku-2", "Izaberi postupak za 45°.", "", ["Prepolovi 90°.", "Prepolovi 60°.", "Saberi 60° i 45°."], "Prepolovi 90°.", "Počni od pravog ugla.", "90°:2=45°.", "medium", "Konstrukcija ugla", { taskType: "izbor-konstrukcije", errorCategory: "method" }),
    I("o6-ku-3", "Odredi konstruisani ugao.", "90°+45°", "135", "Saberi uglove.", "90°+45°=135°.", "advanced", "Konstrukcija ugla", { taskType: "sabiranje-uglova", errorCategory: "calculation" }),
    C("o6-ku-4", "Koji ugao je suplement ugla od 30°?", "", ["60°", "150°", "330°"], "150°", "Suplementni uglovi imaju zbir 180°.", "180°−30°=150°.", "basic", "Konstrukcija ugla", { taskType: "suplement", errorCategory: "rule", practiceOnly: true }),
    C("o6-ku-5", "Odredi redosled koraka za 75°.", "", ["Konstruiši 45°, zatim dodaj 30°.", "Prepolovi 60° tri puta.", "Od 90° oduzmi 60°."], "Konstruiši 45°, zatim dodaj 30°.", "Traži zbir poznatih konstruktivnih uglova.", "45°+30°=75°.", "medium", "Konstrukcija ugla", { taskType: "redosled-koraka", errorCategory: "method", practiceOnly: true }),
    C("o6-ku-6", "Tačno ili netačno?", "Ugao od 15° dobijamo dvostrukim prepolovljavanjem ugla od 60°.", ["Tačno", "Netačno"], "Tačno", "60°→30°→15°.", "Tvrdnja je tačna.", "medium", "Konstrukcija ugla", { taskType: "tacno-netacno", errorCategory: "concept", practiceOnly: true }),
    C("o6-ku-7", "Pronađi grešku.", "Ugao od 135° dobijamo kao 90°+30°.", ["Zbir je 120°.", "Zbir je 150°.", "Nema greške."], "Zbir je 120°.", "Izračunaj dati zbir.", "90°+30°=120°, ne 135°.", "advanced", "Konstrukcija ugla", { taskType: "pronadji-gresku", errorCategory: "calculation", practiceOnly: true }),
  ],
};

const grade6Triangle = legacyGrade6[0];
const legacyInteriorAngles = grade6Triangle.lessons.find(lesson => lesson.id === "zbir-uglova-trougla")!;
const unutrasnjiUglovi: Lesson = {
  ...legacyInteriorAngles,
  intro: "Zbir unutrašnjih uglova svakog trougla je 180°. To pravilo koristimo da odredimo nepoznati ugao i proverimo da li tri data ugla mogu graditi trougao.",
  rules: ["Zbir tri unutrašnja ugla je 180°.", "Za nepoznati ugao oduzmi zbir poznatih uglova od 180°.", "Tri ugla mogu graditi trougao ako i samo ako su svi pozitivni i zbir im je 180°."],
  formulas: ["α+β+γ=180°", "γ=180°−α−β"],
  examples: ["40°+60°+80°=180°", "α=180°−72°−48°=60°", "Uglovi 30°, 70° i 80° mogu graditi trougao."],
  solved: {question:"Odredi treći ugao ako su dva ugla 47° i 68°.",steps:["α+β+γ=180°.","47°+68°+γ=180°.","γ=180°−115°=65°.","Provera: 47°+68°+65°=180°."]},
  worked: [{question:"Odredi treći ugao ako su dva ugla 47° i 68°.",steps:["α+β+γ=180°.","47°+68°+γ=180°.","γ=180°−115°=65°.","Provera: 47°+68°+65°=180°."]},{question:"Da li 0°, 80° i 100° mogu biti unutrašnji uglovi trougla?",steps:["0°+80°+100°=180°.","Ugao 0° nije pozitivan, pa takav trougao ne postoji."]},{question:"Uglovi su x, 2x i 3x. Odredi ih.",steps:["x+2x+3x=180°.","6x=180°, x=30°.","Uglovi su 30°, 60° i 90°; svi su pozitivni i zbir je 180°."]}],
  tasks: [
    ...legacyInteriorAngles.tasks.filter(task => task.id !== "o6-zu-3"),
    C("o6-zu-3", "Koji skup uglova može graditi trougao?", "", ["35°, 65°, 80°", "45°, 75°, 70°", "20°, 80°, 90°"], "35°, 65°, 80°", "Proveri zbir svakog skupa.", "35°+65°+80°=180°; svi su pozitivni. Ostali zbirovi su 190° i 190°.", "advanced", "Zbir uglova", { taskType: "izbor-skupa-uglova", errorCategory: "method" }),
  ],
};
export const grade6OctoberAreas: Area[] = [sequence({
  ...grade6Triangle,
  monthOrder: {october:1},
  lessons: [
    ...grade6Triangle.lessons.map(lesson => lesson.id === "zbir-uglova-trougla" ? unutrasnjiUglovi : lesson.id === "uglovi-transverzala" ? spoljasnjiUglovi : lesson),
    konstrukcijeUglova,
  ],
})];

const pitagoraCetvorougao: Lesson = {
  id: "pitagora-cetvorougao",
  title: "Pitagorina teorema u četvorouglu",
  month: "october",
  intro: "Dijagonalom četvorougao možemo podeliti na dva trougla. Pitagorinu teoremu primenjujemo samo u onom pomoćnom trouglu za koji znamo da je pravougli.",
  rules: [
    "Najpre nacrtaj dijagonalu koja daje pravougle trouglove.",
    "Za svaki korak jasno odredi katete i hipotenuzu.",
    "Ne pretpostavljaj da su dijagonala i stranica normalne ako to nije dato.",
  ],
  formulas: ["AC^2=AB^2+BC^2", "AD^2=AC^2+CD^2"],
  examples: [
    "AB=6 cm i BC=8 cm daju AC=10 cm kada je ∠ABC=90°.",
    "AC=5 cm i CD=12 cm daju AD=13 cm kada je ∠ACD=90°.",
    "Za AB=9 cm, BC=12 cm i CD=8 cm dobijamo AC=15 cm, zatim AD=17 cm.",
  ],
  solved: {
    question: "U četvorouglu ABCD važi ∠ABC=∠ACD=90°. Ako su AB=6 cm, BC=8 cm i CD=24 cm, odredi AD.",
    steps: ["U △ABC je AC²=6²+8²=100, pa je AC=10 cm.", "U △ACD je AD²=10²+24²=676.", "AD=26 cm."],
  },
  diagram: "quadrilateral",
  tasks: [
    I("o7-cv-1", "Odredi dijagonalu AC.", "∠ABC=90°, AB=8 cm, BC=15 cm", "17", "Posmatraj △ABC.", "AC²=8²+15²=289, pa je AC=17 cm.", "basic", "Pitagora u četvorouglu", { taskType:"dijagonala-cetvorougla", errorCategory:"diagram", diagram:{type:"pythagoras",variant:"quadrilateral",labels:{AB:"8",BC:"15",AC:"?",CD:"",AD:""}} }),
    C("o7-cv-2", "Izaberi pravilan prvi korak.", "∠ABC=90°", ["AC²=AB²+BC²", "AB²=AC²+BC²", "AC=AB+BC"], "AC²=AB²+BC²", "AC je hipotenuza trougla ABC.", "Tačan je prvi zapis.", "basic", "Pitagora u četvorouglu", { taskType:"izbor-pomocnog-trougla", errorCategory:"method" }),
    I("o7-cv-3", "Odredi AD.", "∠ABC=∠ACD=90°, AB=9 cm, BC=12 cm, CD=8 cm", "17", "Najpre odredi AC.", "AC=15 cm, zatim AD²=15²+8²=289, pa je AD=17 cm.", "medium", "Pitagora u četvorouglu", { taskType:"dva-pravouga-trougla", errorCategory:"method", diagram:{type:"pythagoras",variant:"quadrilateral",labels:{AB:"9",BC:"12",CD:"8",AD:"?"}} }),
    C("o7-cv-4", "Tačno ili netačno?", "Svaka dijagonala četvorougla daje dva pravougla trougla.", ["Tačno", "Netačno"], "Netačno", "Pravi ugao mora biti dat ili dokazan.", "Dijagonala u opštem četvorouglu ne mora dati pravougle trouglove.", "medium", "Pitagora u četvorouglu", { taskType:"tacno-netacno", errorCategory:"concept", practiceOnly:true }),
    C("o7-cv-5", "Pronađi grešku.", "AB=6, BC=8, ∠ABC=90°, pa je AC=14.", ["Treba AC=10.", "Treba AC=2.", "Nema greške."], "Treba AC=10.", "Sabiraju se kvadrati, ne dužine.", "AC=√(6²+8²)=10.", "medium", "Pitagora u četvorouglu", { taskType:"pronadji-gresku", errorCategory:"calculation", practiceOnly:true }),
    I("o7-cv-6", "Odredi obim četvorougla.", "AB=6, BC=8, CD=24, AD=26", "64", "Saberi četiri stranice.", "O=6+8+24+26=64.", "advanced", "Pitagora u četvorouglu", { taskType:"obim-posle-primene", errorCategory:"calculation", practiceOnly:true }),
    C("o7-cv-7", "Koji podatak nedostaje?", "Poznate su četiri stranice četvorougla; želimo Pitagorinom teoremom dijagonalu AC.", ["Podatak da je ∠ABC=90°", "Boja četvorougla", "Naziv dijagonale BD"], "Podatak da je ∠ABC=90°", "Pitagorina teorema zahteva pravougli trougao.", "Mora biti poznato da je △ABC pravougli.", "advanced", "Pitagora u četvorouglu", { taskType:"nedostajuci-uslov", errorCategory:"concept", practiceOnly:true }),
  ],
};

const posebniPravougli: Lesson = {
  id: "specijalni-pravougli-trouglovi",
  title: "Pravougli trouglovi sa uglovima 30°, 60° i 45°",
  month: "october",
  prerequisites: ["pitagora-trapez"],
  intro: "Kod dva česta pravougla trougla odnosi stranica uvek su isti, pa ne moramo svaki put počinjati od nule.",
  rules: [
    "U trouglu 45°–45°–90° katete su jednake, a hipotenuza je a√2.",
    "U trouglu 30°–60°–90° kraća kateta je polovina hipotenuze.",
    "Duža kateta trougla 30°–60°–90° jednaka je kraćoj kateti puta √3.",
  ],
  formulas: ["45°–45°–90°: c=a[[sqrt:2]]", "30°–60°–90°: c=2a", "b=a[[sqrt:3]]"],
  examples: ["a²+b²=c². Naspram jednakih uglova od 45° katete su jednake. Zato 5²+5²=c², pa 25+25=c² i c²=50. Dužina je pozitivna: c=[[sqrt:50]]=5[[sqrt:2]] cm.", "Trougao 30°–60°–90° je polovina jednakostraničnog trougla. Kateta naspram 30° je polovina hipotenuze, pa za katetu 7 cm dobijamo c=2·7=14 cm.", "U trouglu 30°–60°–90° sa hipotenuzom 18 cm kraća kateta naspram 30° ima dužinu a=[[frac:18|2]]=9 cm."],
  solved: { question: "U trouglu 30°–60°–90° hipotenuza je 20 cm. Odredi katete.", steps: ["a²+b²=c². Kateta naspram 30° je polovina hipotenuze, pa je a=20:2=10 cm.", "10²+b²=20². Zato 100+b²=400 i b²=300.", "Pozitivna duža kateta je b=[[sqrt:300]]=10[[sqrt:3]] cm."] },
  diagram: "pythagoras",
  tasks: [
    C("o7-st-1", "Odredi hipotenuzu.", "Kateta je 6 cm, uglovi su 45°,45°,90°.", ["6√2 cm", "12 cm", "3√2 cm"], "6√2 cm", "Koje stranice leže naspram jednakih uglova?", "a²+b²=c². Naspram jednakih uglova od 45° katete su jednake. Zato 6²+6²=c², pa 36+36=c² i c²=72. Dužina je pozitivna: c=[[sqrt:72]]=6[[sqrt:2]] cm.", "basic", "Posebni pravougli trouglovi", { taskType: "hipotenuza-45", errorCategory: "rule" }),
    I("o7-st-2", "Odredi kraću katetu.", "c=26 cm, uglovi su 30°,60°,90°.", "13", "Kraća kateta je polovina hipotenuze.", "a=26:2=13 cm.", "basic", "Posebni pravougli trouglovi", { taskType: "kraca-kateta", errorCategory: "calculation" }),
    C("o7-st-3", "Izaberi dužu katetu.", "U trouglu 30°–60°–90° kraća kateta je 8 cm.", ["8√3 cm", "16 cm", "4√3 cm"], "8√3 cm", "Duža kateta je a√3.", "a²+b²=c². Kraća kateta je naspram 30°, pa je c=2·8=16 cm. Zato 8²+b²=16², odnosno 64+b²=256 i b²=192. Pozitivna duža kateta je b=[[sqrt:192]]=8[[sqrt:3]] cm.", "medium", "Posebni pravougli trouglovi", { taskType: "duza-kateta", errorCategory: "rule" }),
    C("o7-st-4", "Koji odnos važi?", "Trougao 45°–45°–90°", ["Katete su jednake.", "Hipotenuza je jednaka kateti.", "Jedna kateta je dvostruka od druge."], "Katete su jednake.", "To je jednakokraki pravougli trougao.", "Katete su jednake.", "basic", "Posebni pravougli trouglovi", { taskType: "prepoznavanje-odnosa", errorCategory: "concept", practiceOnly: true }),
    C("o7-st-5", "Odredi obim.", "Katete su 5 cm i 5 cm.", ["10+5√2 cm", "15√2 cm", "10+10√2 cm"], "10+5√2 cm", "Najpre odredi hipotenuzu.", "a²+b²=c². Naspram jednakih uglova od 45° katete su jednake. Zato 5²+5²=c², pa 25+25=c² i c²=50. Dužina je pozitivna: c=[[sqrt:50]]=5[[sqrt:2]] cm. Obim je O=5+5+5[[sqrt:2]]=10+5[[sqrt:2]] cm.", "advanced", "Posebni pravougli trouglovi", { taskType: "obim-45", errorCategory: "method", practiceOnly: true }),
    C("o7-st-6", "Pronađi grešku.", "U trouglu 30°–60°–90°, c=16 cm, pa je kraća kateta 16√3 cm.", ["Kraća kateta je 8 cm.", "Kraća kateta je 16 cm.", "Nema greške."], "Kraća kateta je 8 cm.", "Kraća kateta je polovina hipotenuze.", "16:2=8 cm.", "medium", "Posebni pravougli trouglovi", { taskType: "pronadji-gresku", errorCategory: "rule", practiceOnly: true }),
    C("o7-st-7", "Uporedi hipotenuze.", "Kateta prvog 45° trougla je 4 cm, a kraća kateta drugog 30° trougla je 3 cm.", ["Prva je duža.", "Druga je duža.", "Jednake su."], "Druga je duža.", "Uporedi kvadrate pozitivnih dužina.", "a²+b²=c². Naspram jednakih uglova od 45° katete su jednake. Zato 4²+4²=c², pa 16+16=c² i c²=32. Dužina je pozitivna: c=[[sqrt:32]]=4[[sqrt:2]] cm. U drugom trouglu hipotenuza je 2·3=6 cm. Pošto je 32<36, druga hipotenuza je duža.", "advanced", "Posebni pravougli trouglovi", { taskType: "poredjenje-modela", errorCategory: "method", practiceOnly: true }),
  ],
};

const konstrukcijaIracionalnih: Lesson = {
  id: "konstrukcija-iracionalnih-brojeva",
  title: "Pitagorina teorema u konstrukcijama",
  month: "october",
  prerequisites: ["specijalni-pravougli-trouglovi"],
  intro: "Pitagorina teorema omogućava da konstruišemo duži dužine √2, √5, √10 i prenesemo ih na brojnu pravu.",
  rules: ["Biraj katete čiji zbir kvadrata daje broj pod korenom.", "Dobijenu hipotenuzu prenesi šestarom na brojnu pravu.", "Konstrukcija mora početi dužima poznatih dužina."],
  formulas: ["1^2+1^2=2", "1^2+2^2=5", "1^2+3^2=10"],
  examples: ["Katete 1 i 1 daju hipotenuzu √2.", "Katete 1 i 2 daju hipotenuzu √5.", "Katete 2 i 3 daju hipotenuzu √13."],
  solved: { question: "Kako konstruišemo duž dužine √5?", steps: ["Nacrtamo normalne duži dužina 1 i 2.", "Hipotenuza ima kvadrat 1²+2²=5.", "Njena dužina je √5; šestarom je prenesemo na brojnu pravu."] },
  diagram: "pythagoras",
  tasks: [
    C("o7-ki-1", "Koje katete daju √5?", "", ["1 i 2", "2 i 2", "1 i 3"], "1 i 2", "Traži zbir kvadrata 5.", "1²+2²=5.", "basic", "Konstrukcija korena", { taskType: "izbor-kateta", errorCategory: "method" }),
    C("o7-ki-2", "Odredi dužinu hipotenuze.", "a=2, b=3", ["√13", "5", "√6"], "√13", "Saberi kvadrate kateta.", "c²=4+9=13, pa je c=√13.", "medium", "Konstrukcija korena", { taskType: "koren-iz-kateta", errorCategory: "calculation" }),
    C("o7-ki-3", "Izaberi sledeći korak.", "Konstruisana je hipotenuza dužine √10.", ["Prenesi je šestarom na brojnu pravu.", "Podeli je sa 10.", "Produži je do 10."], "Prenesi je šestarom na brojnu pravu.", "Dužinu prenosimo bez promene.", "Šestar prenosi konstruisanu dužinu na brojnu pravu.", "advanced", "Konstrukcija korena", { taskType: "redosled-konstrukcije", errorCategory: "method" }),
    C("o7-ki-4", "Tačno ili netačno?", "Katete 2 i 2 daju hipotenuzu √8.", ["Tačno", "Netačno"], "Tačno", "Izračunaj 2²+2².", "4+4=8, pa je c=√8.", "basic", "Konstrukcija korena", { taskType: "tacno-netacno", errorCategory: "concept", practiceOnly: true }),
    C("o7-ki-5", "Koji broj ne dobijamo katetama 1 i n, gde je n prirodan broj?", "", ["√2", "√5", "√8"], "√8", "Brojevi su oblika √(1+n²).", "Dobijamo √2, √5, √10…, ne √8.", "advanced", "Konstrukcija korena", { taskType: "zakljucivanje-oblik", errorCategory: "method", practiceOnly: true }),
    C("o7-ki-6", "Pronađi grešku.", "Katete 1 i 3 daju √12.", ["Daju √10.", "Daju √9.", "Nema greške."], "Daju √10.", "Saberi 1² i 3².", "1+9=10, pa je hipotenuza √10.", "medium", "Konstrukcija korena", { taskType: "pronadji-gresku", errorCategory: "calculation", practiceOnly: true }),
    C("o7-ki-7", "Izaberi dve katete za √17.", "", ["1 i 4", "2 i 4", "3 i 4"], "1 i 4", "Traži a²+b²=17.", "1²+4²=17.", "advanced", "Konstrukcija korena", { taskType: "resavanje-unazad", errorCategory: "method", practiceOnly: true }),
  ],
};

const pojamStepena: Lesson = {
  id: "pojam-stepena",
  title: "Pojam stepena",
  month: "october",
  prerequisites: ["konstrukcija-iracionalnih-brojeva"],
  intro: "Stepen je kratak zapis proizvoda jednakih činilaca. U ovom koraku izložilac je prirodan broj.",
  rules: ["U zapisu aⁿ broj a je osnova, a n izložilac.", "Izložilac govori koliko puta se osnova javlja kao činilac.", "Kod negativne osnove zagrade određuju šta se stepenuje."],
  formulas: ["a^n=a·a·…·a", "(−a)^2=a^2", "(−a)^3=−a^3"],
  examples: ["3⁴=3·3·3·3=81.", "(−2)⁴=16.", "−2⁴=−16, dok je (−2)⁴=16."],
  solved: { question: "Izračunaj (−3)⁵.", steps: ["Osnova je −3, a izložilac 5.", "Neparan broj negativnih činilaca daje negativan proizvod.", "(−3)⁵=−243."] },
  tasks: [
    C("o7-ps-1", "Zapiši kao stepen.", "5·5·5·5", ["5⁴", "4⁵", "20"], "5⁴", "Osnova je 5, a ima četiri činioca.", "Zapis je 5⁴.", "basic", "Pojam stepena", { taskType: "proizvod-u-stepen", errorCategory: "concept" }),
    I("o7-ps-2", "Izračunaj.", "2^6", "64", "Pomnoži šest dvojki.", "2⁶=64.", "basic", "Pojam stepena", { taskType: "izracunavanje-stepena", errorCategory: "calculation" }),
    C("o7-ps-3", "Odredi znak.", "(−4)^7", ["Pozitivan", "Negativan", "Nula"], "Negativan", "Neparan izložilac čuva negativan znak.", "Proizvod sedam negativnih činilaca je negativan.", "medium", "Znak stepena", { taskType: "znak-stepena", errorCategory: "sign" }),
    C("o7-ps-4", "Uporedi.", "−3^2 __ (−3)^2", ["<", ">", "="], "<", "Zagrade menjaju osnovu.", "−3²=−9, a (−3)²=9, pa je −3²<(−3)².", "advanced", "Zagrade i stepen", { taskType: "poredjenje-zagrada", errorCategory: "sign" }),
    C("o7-ps-5", "Dopuni.", "a·a·a", ["a³", "3a", "a+3"], "a³", "Broj jednakih činilaca je izložilac.", "a·a·a=a³.", "basic", "Pojam stepena", { taskType: "dopunjavanje-zapisa", errorCategory: "concept", practiceOnly: true }),
    C("o7-ps-6", "Tačno ili netačno?", "(−5)^4 je pozitivan broj.", ["Tačno", "Netačno"], "Tačno", "Izložilac je paran.", "Paran broj negativnih činilaca daje pozitivan proizvod.", "medium", "Znak stepena", { taskType: "tacno-netacno", errorCategory: "sign", practiceOnly: true }),
    C("o7-ps-7", "Pronađi grešku.", "2^5=2·5=10", ["Treba pomnožiti pet dvojki.", "Treba sabrati pet dvojki.", "Nema greške."], "Treba pomnožiti pet dvojki.", "Izložilac nije činilac.", "2⁵=2·2·2·2·2=32.", "advanced", "Pojam stepena", { taskType: "pronadji-gresku", errorCategory: "concept", practiceOnly: true }),
    I("o7-ps-8", "Odredi izložilac.", "7^n=7·7·7·7", "4", "Prebroj jednake činioce.", "Broj 7 se javlja četiri puta, pa je n=4.", "basic", "Pojam stepena", { taskType: "odredi-izlozilac", errorCategory: "concept", practiceOnly: true }),
    C("o7-ps-9", "Izaberi razvijeni zapis.", "(−3)^4", ["(−3)·(−3)·(−3)·(−3)", "−3·4", "3·3·3"], "(−3)·(−3)·(−3)·(−3)", "Osnovu ponovi četiri puta.", "Tačan je prvi zapis.", "medium", "Pojam stepena", { taskType: "stepen-u-proizvod", errorCategory: "concept", practiceOnly: true }),
    I("o7-ps-10", "Izračunaj.", "(−2)^6", "64", "Paran broj negativnih činilaca daje pozitivan rezultat.", "(−2)⁶=64.", "advanced", "Znak stepena", { taskType: "izracunaj-negativnu-osnovu", errorCategory: "sign", practiceOnly: true }),
  ],
};

const legacyPitagora = legacyGrade7.find(area => area.id === "pitagorina-teorema")!;
const pitagora: Area = {...legacyPitagora,lessons:legacyPitagora.lessons.map((lesson,index)=>index?lesson:{...lesson,prerequisites:["svojstva-korena"]})};
export const grade7OctoberAreas: Area[] = [
  sequence({ ...pitagora, lessons: [...pitagora.lessons.flatMap(lesson=>lesson.id==="pitagora-jednakokraki"?[lesson,pitagoraCetvorougao]:[lesson]), posebniPravougli, konstrukcijaIracionalnih] }),
  sequence({ id: "stepeni", title: "Stepeni", short: "Pojam stepena sa prirodnim izložiocem.", month: "october", assessment: "mini", lessons: [pojamStepena] }),
];

const rogalj: Lesson = {
  id: "rogalj",
  title: "Rogalj",
  month: "october",
  prerequisites: ["ortogonalna-projekcija"],
  intro: "Rogalj je deo prostora ograničen sa tri ili više ravnih uglova koji imaju zajedničko teme.",
  rules: ["Zajednička tačka je teme roglja.", "Poluprave koje polaze iz temena jesu ivice roglja.", "Ravni uglovi između susednih ivica jesu strane roglja."],
  formulas: ["S — teme roglja", "SA, SB, SC — ivice roglja"],
  examples: ["Ugao kocke kod jednog temena obrazuje trostrani rogalj.", "Trostrani rogalj ima tri ivice i tri strane.", "Ugao kvadra kod jednog temena takođe je rogalj."],
  solved: { question: "Koliko ivica ima trostrani rogalj?", steps: ["Naziv trostrani odnosi se na tri ravna ugla — strane roglja.", "Susedne strane seku se po ivicama.", "Trostrani rogalj ima 3 ivice."] },
  diagram: "space",
  tasks: [
    C("o8-rg-1", "Šta je zajedničko svim ivicama roglja?", "", ["Teme", "Ravan", "Prava"], "Teme", "Sve poluprave polaze iz iste tačke.", "Zajednička tačka je teme roglja.", "basic", "Pojam roglja", { taskType: "element-roglja", errorCategory: "concept" }),
    C("o8-rg-2", "Koliko strana ima trostrani rogalj?", "", ["2", "3", "4"], "3", "Naziv govori broj strana.", "Trostrani rogalj ima tri strane.", "basic", "Pojam roglja", { taskType: "brojanje-strana", errorCategory: "concept" }),
    C("o8-rg-3", "Izaberi primer roglja.", "", ["Ugao kocke kod temena", "Jedna duž", "Krug"], "Ugao kocke kod temena", "Traži deo prostora sa zajedničkim temenom.", "Tri strane kocke kod temena određuju rogalj.", "medium", "Pojam roglja", { taskType: "prepoznavanje-modela", errorCategory: "diagram" }),
    C("o8-rg-4", "Tačno ili netačno?", "Sve ivice roglja polaze iz jednog temena.", ["Tačno", "Netačno"], "Tačno", "Seti se definicije ivice roglja.", "Tvrdnja je tačna.", "basic", "Pojam roglja", { taskType: "tacno-netacno", errorCategory: "rule", practiceOnly: true }),
    C("o8-rg-5", "Koji opis nije dovoljan za rogalj?", "", ["Dve poluprave sa zajedničkim početkom", "Tri poluprave koje određuju tri strane", "Tri strane kocke kod temena"], "Dve poluprave sa zajedničkim početkom", "Dve poluprave određuju samo ravan ugao.", "Za rogalj su potrebne najmanje tri strane.", "medium", "Pojam roglja", { taskType: "kontraprimer", errorCategory: "concept", practiceOnly: true }),
    C("o8-rg-6", "Poveži element.", "SA", ["Ivica roglja", "Strana roglja", "Teme roglja"], "Ivica roglja", "SA je poluprava iz temena S.", "SA je ivica roglja.", "medium", "Elementi roglja", { taskType: "uparivanje-oznake", errorCategory: "concept", practiceOnly: true }),
    C("o8-rg-7", "Pronađi grešku.", "Trostrani rogalj ima dve strane i tri temena.", ["Ima tri strane i jedno teme.", "Ima dve strane i jedno teme.", "Nema greške."], "Ima tri strane i jedno teme.", "Naziv i zajednički početak daju odgovor.", "Trostrani rogalj ima tri strane, tri ivice i jedno teme.", "advanced", "Elementi roglja", { taskType: "pronadji-gresku", errorCategory: "concept", practiceOnly: true }),
  ],
};

const equationLesson = (lesson: Lesson, prerequisites: string[] = []): Lesson => ({ ...lesson, month: "october", prerequisites });

const linearneJednacine: Area = {
  id: "linearne-jednacine",
  title: "Linearne jednačine i nejednačine",
  short: "Ekvivalentne transformacije, rešavanje, primene i prve linearne nejednačine.",
  month: "october",
  assessment: "mini",
  lessons: [
    equationLesson({
      id: "pojam-linearne-jednacine", title: "Pojam linearne jednačine", intro: "Linearni izraz ima oblik ax+b, gde su a i b dati brojevi. Izjednačavanjem dva izraza dobijamo jednačinu. Rešenje je broj za koji je ta jednakost tačna.",
      rules: ["Leva i desna strana moraju imati jednake vrednosti za rešenje.", "Proveru radimo zamenom nepoznate dobijenim brojem.", "Linearna jednačina sa jednom nepoznatom može se svesti na oblik ax+b=0."],
      formulas: ["ax+b=0", "a≠0", "x=−[[frac:b|a]]"], examples: ["x+5=12 ima rešenje x=7.", "3x=18 ima rešenje x=6.", "2x+1=2x+1 važi za svaki realan x."],
      solved: { question: "Da li je x=4 rešenje jednačine 3x−2=10?", steps: ["Uvrsti x=4 u levu stranu.", "3·4−2=12−2=10.", "Leva strana jednaka je desnoj, pa x=4 jeste rešenje."] },
      tasks: [
        C("o8-lj-1", "Da li je x=5 rešenje?", "2x+1=11", ["Da", "Ne"], "Da", "Uvrsti 5.", "2·5+1=11.", "basic", "Pojam jednačine", { taskType: "provera-resenja", errorCategory: "concept" }),
        I("o8-lj-2", "Odredi x.", "x+8=14", "6", "Oduzmi 8.", "x=14−8=6.", "basic", "Pojam jednačine", { taskType: "jedan-korak", errorCategory: "calculation" }),
        C("o8-lj-3", "Izaberi linearnu jednačinu.", "", ["3x−7=2", "x²=9", "1/x=4"], "3x−7=2", "Traži prvi stepen nepoznate.", "Jednačina 3x−7=2 je linearna.", "medium", "Pojam jednačine", { taskType: "prepoznavanje-jednacine", errorCategory: "concept" }),
        C("o8-lj-4", "Dopuni proveru.", "x=−2, 4x+3", ["−5", "5", "−11"], "−5", "Uvrsti −2.", "4·(−2)+3=−8+3=−5.", "basic", "Pojam jednačine", { taskType: "dopunjavanje-provere", errorCategory: "sign", practiceOnly: true }),
        C("o8-lj-5", "Koliko rešenja ima?", "x+3=x+3", ["Nijedno", "Jedno", "Svaki realan broj"], "Svaki realan broj", "Obe strane su iste.", "Jednakost važi za svaki realan x.", "advanced", "Pojam jednačine", { taskType: "broj-resenja-identitet", errorCategory: "concept", practiceOnly: true }),
        C("o8-lj-6", "Koliko rešenja ima?", "2x+1=2x+4", ["Nijedno", "Jedno", "Dva"], "Nijedno", "Oduzmi 2x na obe strane.", "Dobija se 1=4, što nije moguće.", "advanced", "Pojam jednačine", { taskType: "broj-resenja-kontradikcija", errorCategory: "method", practiceOnly: true }),
        C("o8-lj-7", "Pronađi grešku.", "x=3 je rešenje 2x+1=8.", ["Leva strana je 7.", "Leva strana je 8.", "Nema greške."], "Leva strana je 7.", "Uvrsti 3.", "2·3+1=7, pa x=3 nije rešenje.", "medium", "Pojam jednačine", { taskType: "pronadji-gresku", errorCategory: "calculation", practiceOnly: true }),
      ],
    }, ["poliedar"]),
    equationLesson({
      id: "ekvivalentne-transformacije", title: "Ekvivalentne transformacije", intro: "Jednačinu možemo menjati tako da skup rešenja ostane isti.",
      rules: ["Dodaj ili oduzmi isti broj na obe strane.", "Pomnoži ili podeli obe strane istim brojem različitim od nule.", "Sredi slične članove pre završnog deljenja."],
      formulas: ["a=b ⇒ a+c=b+c", "a=b ⇒ ac=bc", "c≠0"], examples: ["x−4=9 ⇒ x=13.", "5x=20 ⇒ x=4.", "2x+7=15 ⇒ 2x=8 ⇒ x=4."],
      solved: { question: "Reši 3x−5=16.", steps: ["Dodaj 5 na obe strane: 3x=21.", "Podeli obe strane sa 3.", "x=7."] },
      tasks: [
        C("o8-et-1", "Izaberi sledeći korak.", "x−9=4", ["x=4+9", "x=4−9", "x=4·9"], "x=4+9", "Dodaj 9 na obe strane.", "x=13.", "basic", "Ekvivalentne transformacije", { taskType: "izbor-koraka", errorCategory: "rule" }),
        I("o8-et-2", "Odredi x.", "6x=42", "7", "Podeli obe strane sa 6.", "x=7.", "basic", "Ekvivalentne transformacije", { taskType: "deljenje-obe-strane", errorCategory: "calculation" }),
        I("o8-et-3", "Odredi x.", "4x+3=19", "4", "Najpre oduzmi 3.", "4x=16, pa je x=4.", "medium", "Ekvivalentne transformacije", { taskType: "dva-koraka", errorCategory: "method" }),
        C("o8-et-4", "Koja transformacija nije dozvoljena?", "", ["Podeliti obe strane nulom", "Dodati 5 obema stranama", "Pomnožiti obe strane sa −2"], "Podeliti obe strane nulom", "Nulom se ne deli.", "Deljenje nulom nije definisano.", "basic", "Ekvivalentne transformacije", { taskType: "nedozvoljena-transformacija", errorCategory: "rule", practiceOnly: true }),
        C("o8-et-5", "Tačno ili netačno?", "Iz 2x=10 sledi 2x+3=13.", ["Tačno", "Netačno"], "Tačno", "Dodaj 3 na obe strane.", "Transformacija čuva rešenja.", "medium", "Ekvivalentne transformacije", { taskType: "tacno-netacno", errorCategory: "rule", practiceOnly: true }),
        C("o8-et-6", "Pronađi grešku.", "−3x=12 ⇒ x=4", ["Treba x=−4", "Treba x=9", "Nema greške"], "Treba x=−4", "Podeli sa −3.", "x=12:(−3)=−4.", "medium", "Ekvivalentne transformacije", { taskType: "pronadji-gresku", errorCategory: "sign", practiceOnly: true }),
        I("o8-et-7", "Odredi x.", "5−2x=17", "-6", "Oduzmi 5, pa podeli sa −2.", "−2x=12, pa je x=−6.", "advanced", "Ekvivalentne transformacije", { taskType: "negativan-koeficijent", errorCategory: "sign", practiceOnly: true }),
      ],
    }, ["pojam-linearne-jednacine"]),
    equationLesson({
      id: "resavanje-linearnih-jednacina", title: "Rešavanje linearnih jednačina", intro: "Kod složenije jednačine uklanjamo zagrade, sređujemo obe strane i zatim izdvajamo nepoznatu.",
      rules: ["Prvo ukloni zagrade pravilom distributivnosti.", "Članove sa x svedi na jednu stranu, brojeve na drugu.", "Na kraju proveri rešenje u početnoj jednačini."],
      formulas: ["a(b+c)=ab+ac", "ax+b=cx+d", "(a−c)x=d−b"], examples: ["2(x+3)=14 ⇒ x=4.", "5x−7=2x+8 ⇒ x=5.", "3(x−2)+4=10 ⇒ x=4."],
      solved: { question: "Reši 4(x−1)=2x+10.", steps: ["Ukloni zagradu: 4x−4=2x+10.", "Oduzmi 2x i dodaj 4: 2x=14.", "x=7; provera daje 24=24."] },
      tasks: [
        I("o8-rj-1", "Odredi x.", "2(x+4)=18", "5", "Podeli sa 2 ili ukloni zagradu.", "x+4=9, pa je x=5.", "basic", "Rešavanje jednačina", { taskType: "jedna-zagrada", errorCategory: "method" }),
        I("o8-rj-2", "Odredi x.", "7x−5=4x+16", "7", "Prebaci članove sa x na jednu stranu.", "3x=21, pa je x=7.", "medium", "Rešavanje jednačina", { taskType: "nepoznata-na-obe-strane", errorCategory: "method" }),
        I("o8-rj-3", "Odredi x.", "3(x−2)+5=14", "5", "Ukloni zagradu.", "3x−6+5=14, 3x=15, x=5.", "medium", "Rešavanje jednačina", { taskType: "zagrada-i-sredjivanje", errorCategory: "calculation" }),
        C("o8-rj-4", "Izaberi pravilno sređenu levu stranu.", "4(x−3)+2x", ["6x−12", "6x−3", "8x−12"], "6x−12", "Primeni distributivnost, pa saberi slične članove.", "4x−12+2x=6x−12.", "basic", "Rešavanje jednačina", { taskType: "sredjivanje-izraza", errorCategory: "rule", practiceOnly: true }),
        C("o8-rj-5", "Koliko rešenja ima?", "3(x+2)=3x+6", ["Svaki realan broj", "Jedno", "Nijedno"], "Svaki realan broj", "Ukloni zagradu.", "Dobija se ista jednakost na obe strane.", "advanced", "Rešavanje jednačina", { taskType: "identitet-posle-sredjivanja", errorCategory: "concept", practiceOnly: true }),
        C("o8-rj-6", "Pronađi grešku.", "2(x−5)=8 ⇒ 2x−5=8", ["Treba 2x−10=8", "Treba x−10=8", "Nema greške"], "Treba 2x−10=8", "Dvojkom se množe oba člana u zagradi.", "2(x−5)=2x−10.", "medium", "Rešavanje jednačina", { taskType: "pronadji-gresku", errorCategory: "rule", practiceOnly: true }),
        I("o8-rj-7", "Odredi x.", "5−2(3x−1)=19", "-2", "Ukloni zagradu i sredi brojeve.", "5−6x+2=19, −6x=12, x=−2.", "advanced", "Rešavanje jednačina", { taskType: "vise-koraka", errorCategory: "sign", practiceOnly: true }),
      ],
    }, ["ekvivalentne-transformacije"]),
    equationLesson({
      id: "primena-linearnih-jednacina", title: "Primena linearnih jednačina", intro: "Kratak tekst prevodimo u jednačinu, rešimo je i odgovor vratimo u kontekst zadatka.",
      rules: ["Nepoznatom označi ono što se traži.", "Jednačinu sastavi iz odnosa u tekstu.", "Proveri da li rešenje ima smisla u zadatom kontekstu."],
      formulas: ["nepoznato=x", "uslov→jednačina", "rešenje→provera"], examples: ["Broj uvećan za 7 je 19: x+7=19.", "Trostruki broj je 27: 3x=27.", "Obim pravougaonika 30 cm i a=9 cm: 2(9+b)=30."],
      solved: { question: "Maja ima 6 godina više od Ane. Zajedno imaju 30 godina. Koliko godina ima Ana?", steps: ["Neka Ana ima x, a Maja x+6 godina.", "x+(x+6)=30, pa je 2x=24.", "Ana ima 12, a Maja 18 godina; zbir je 30."] },
      tasks: [
        I("o8-pj-1", "Odredi broj.", "Broj uvećan za 9 je 23.", "14", "Napiši x+9=23.", "x=14.", "basic", "Primena jednačine", { taskType: "prevedi-jedan-korak", errorCategory: "method" }),
        I("o8-pj-2", "Odredi broj.", "Dvostruki broj umanjen za 5 je 17.", "11", "Napiši 2x−5=17.", "2x=22, pa je x=11.", "medium", "Primena jednačine", { taskType: "prevedi-dva-koraka", errorCategory: "method" }),
        I("o8-pj-3", "Odredi širinu pravougaonika.", "O=34 cm, a=10 cm", "7", "Koristi 2(a+b)=34.", "10+b=17, pa je b=7 cm.", "medium", "Primena jednačine", { taskType: "geometrijski-model", errorCategory: "method" }),
        C("o8-pj-4", "Izaberi jednačinu.", "Pet puta veći broj od x je 35.", ["5x=35", "x+5=35", "x:5=35"], "5x=35", "Pet puta broj znači 5x.", "Jednačina je 5x=35.", "basic", "Primena jednačine", { taskType: "izbor-modela", errorCategory: "concept", practiceOnly: true }),
        I("o8-pj-5", "Odredi dva uzastopna broja.", "Zbir je 41; upiši manji.", "20", "Brojevi su x i x+1.", "2x+1=41, pa je x=20.", "advanced", "Primena jednačine", { taskType: "uzastopni-brojevi", errorCategory: "method", practiceOnly: true }),
        C("o8-pj-6", "Da li rešenje ima smisla?", "Cena olovke je x dinara, dobijeno je x=−12.", ["Ne", "Da"], "Ne", "Cena ne može biti negativna.", "Algebarski rezultat treba proveriti u kontekstu.", "medium", "Primena jednačine", { taskType: "provera-konteksta", errorCategory: "concept", practiceOnly: true }),
        I("o8-pj-7", "Odredi kraću stranicu.", "Duža je 4 cm duža, O=40 cm.", "8", "Neka je kraća x, a duža x+4.", "2(x+x+4)=40, 4x=32, x=8 cm.", "advanced", "Primena jednačine", { taskType: "vise-uslova", errorCategory: "method", practiceOnly: true }),
      ],
    }, ["resavanje-linearnih-jednacina"]),
    equationLesson({
      id: "linearne-nejednacine", title: "Linearne nejednačine", intro: "Nejednačina traži sve brojeve za koje je nejednakost tačna. Rešenja prikazujemo na brojnoj pravoj.",
      rules: ["Dodavanje istog broja ne menja znak nejednakosti.", "Pri množenju ili deljenju negativnim brojem znak se obrće.", "Prazan kružić ne uključuje granicu; pun kružić je uključuje."],
      formulas: ["x+3<7 ⇒ x<4", "−2x≤6 ⇒ x≥−3", "x>2"], examples: ["x−5>1 daje x>6.", "3x≤12 daje x≤4.", "−x<5 daje x>−5."],
      solved: { question: "Reši −3x+2≥11.", steps: ["Oduzmi 2: −3x≥9.", "Podeli sa −3 i obrni znak.", "x≤−3."] },
      tasks: [
        C("o8-ln-1", "Reši.", "x+4<9", ["x<5", "x>5", "x≤13"], "x<5", "Oduzmi 4.", "x<5.", "basic", "Linearna nejednačina", { taskType: "jedan-korak", errorCategory: "calculation" }),
        C("o8-ln-2", "Reši.", "5x≤20", ["x≤4", "x≥4", "x<25"], "x≤4", "Podeli pozitivnim brojem 5.", "Znak ostaje isti: x≤4.", "basic", "Linearna nejednačina", { taskType: "deljenje-pozitivnim", errorCategory: "rule" }),
        C("o8-ln-3", "Reši.", "−2x>8", ["x<−4", "x>−4", "x<4"], "x<−4", "Pri deljenju negativnim brojem obrni znak.", "x<−4.", "medium", "Linearna nejednačina", { taskType: "promena-znaka", errorCategory: "sign" }),
        C("o8-ln-4", "Koji broj je rešenje?", "x<−1", ["−3", "0", "2"], "−3", "Traži broj manji od −1.", "−3<−1.", "basic", "Linearna nejednačina", { taskType: "provera-resenja", errorCategory: "concept", practiceOnly: true }),
        C("o8-ln-5", "Izaberi prikaz granice.", "x≥2", ["Pun kružić kod 2, zraka desno", "Prazan kružić kod 2, zraka levo", "Pun kružić kod 2, zraka levo"], "Pun kružić kod 2, zraka desno", "Broj 2 je uključen, a traže se veći brojevi.", "Prikaz ide od pune tačke 2 nadesno.", "medium", "Brojna prava nejednačine", { taskType: "citanje-brojne-prave", errorCategory: "diagram", practiceOnly: true, diagram: { type: "number-line", min: -2, max: 6, points: [{ value: 2, label: "2" }] } }),
        C("o8-ln-6", "Pronađi grešku.", "−4x≤12 ⇒ x≤−3", ["Treba x≥−3", "Treba x≤3", "Nema greške"], "Treba x≥−3", "Znak se obrće pri deljenju sa −4.", "Rešenje je x≥−3.", "medium", "Linearna nejednačina", { taskType: "pronadji-gresku", errorCategory: "sign", practiceOnly: true }),
        C("o8-ln-7", "Reši.", "3−2x<11", ["x>−4", "x<−4", "x>4"], "x>−4", "Oduzmi 3, pa podeli sa −2.", "−2x<8, pa je x>−4.", "advanced", "Linearna nejednačina", { taskType: "dva-koraka", errorCategory: "method", practiceOnly: true }),
      ],
    }, ["primena-linearnih-jednacina"]),
  ],
};

const space = legacyGrade8.find(area => area.id === "tacka-prava-ravan")!;
const legacyPolyhedron = space.lessons.find(lesson => lesson.id === "poliedar")!;
const poliedarBezBuducegGradiva: Lesson = {
  ...legacyPolyhedron,
  solved: { question: "Proveri Ojlerovu formulu za kocku.", steps: ["Kocka ima V=8 temena, E=12 ivica i F=6 strana.", "Izračunaj 8−12+6.", "Dobija se 2, pa formula važi."] },
};
const septemberSpaceIds = new Set(["snalazenje-u-prostoru", "tacka-prava-ravan-osnove", "odnosi-pravih-ravni", "dve-ravni", "ortogonalnost", "ortogonalna-projekcija"]);
const sequencedSpace = sequence({
  ...space,
  month: undefined,
  monthShort: {september:"Tačka, prava i ravan, ortogonalnost i projekcija.",october:"Obnavljanje projekcije, rogalj i poliedar."},
  lessons: [...space.lessons.filter(lesson => lesson.id !== "poliedar"), rogalj, poliedarBezBuducegGradiva]
    .map(lesson => ({ ...lesson, month: septemberSpaceIds.has(lesson.id) ? "september" as const : "october" as const })),
}, "september");

export const grade8OctoberAreas: Area[] = [sequencedSpace, sequence(linearneJednacine)];

export const grade8SeptemberContinuation = {
  ...legacyGrade8.find(area => area.id === "slicnost-pravougli-trougao")!.lessons[0],
  month: "september" as const,
  prerequisites: ["primene-slicnosti"],
};

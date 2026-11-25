import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-delovi",
  title: "Normalne dijagonale i površine složenih figura",
  month: "may",
  aim: "Odaberi podelu figure, saberi disjunktne delove ili oduzmi otvor.",
  intro: "Za bojenje zida sa prozorom računaj površinu zida pa oduzmi stakleni otvor. Različiti rasporedi delova mogu imati istu površinu.",
  rules: ["Dijagonala konveksnog četvorougla deli ga na dva trougla. Ako su dijagonale normalne, odgovarajuće visine zajedno čine drugu dijagonalu. Zato površina iznosi polovinu proizvoda dijagonala; to važi za romb i deltoid.","Za složenu figuru iscrtaj pomoćne duži. Sabiraj samo delove koji se ne preklapaju, a ako si dopunio figuru do pravougaonika, oduzmi višak.","Kod proizvoljnog četvorougla druga dijagonala ne mora biti zbir normalnih visina. Formulu za normalne dijagonale primeni tek kada je uslov ispunjen."],
  formulas: ["P=[[frac:1|2]]·e·f","P=P₁+P₂"],
  skills: ["romb", "izrez", "uslov", "unija", "nepoznata-dijagonala", "poludijagonale", "okvir", "podela", "preklop", "utrošak", "razlaganje"],
  worked: [{"question":"Deltoid ima normalne dijagonale 12 i 7 cm. Kolika je površina?","steps":["Podeli deltoid duž dijagonale od 12 cm. Visine dva trougla mogu biti različite, ali zbir im je 7 cm.","P=12·7:2=42 cm². Nije potrebno pretpostaviti da su oba trougla iste visine."]},{"question":"Iz pravougaonika 9 m sa 6 m uklonjen je ugaoni pravougaonik 3 m sa 2 m.","steps":["Ceo pravougaonik ima 9·6=54 m². Uklonjeni deo ima 3·2=6 m².","Preostala površina je 54−6=48 m²."]},{"question":"Pročelje čine pravougaonik širine 8 m i visine 3 m i trouglasti zabat iste osnovice, visine 2 m.","steps":["Pravougaonik ima 8·3=24 m², a zabat 8·2:2=8 m².","Njihove unutrašnjosti se ne preklapaju, pa se površine sabiraju: 24+8=32 m²."]}]
}, [
  ["Romb ima dijagonale 6 i 8 cm. Površina u cm²?","24","Uslov normalnosti važi za romb.","P=6·8:2=24 cm²."],
  ["Iz pravougaonika površine 35 cm² isečen je deo od 8 cm². Koliko cm² ostaje?","27","Oduzmi izrez.","35−8=27 cm²."],
  ["Koji uslov opravdava polovinu proizvoda dijagonala konveksnog četvorougla?",["Normalne su","Jednake su","Paralelne su"],"Traži ugao pri kome su delovi druge dijagonale visine.","Normalne dijagonale formiraju visine na zajedničku osnovicu."],
  ["Dva dela bez preklapanja imaju 2,4 i 1,6 m². Površina celine u m²?","4","Jednake jedinice se sabiraju.","2,4+1,6=4 m²."],
  ["Deltoid površine 45 cm² ima e=9 cm. Koliko cm iznosi f?","10","Udvostruči površinu pre deljenja.","2P=ef, pa je f=90:9=10 cm."],
  ["Polovine dijagonala romba imaju 4 i 3 cm. Površina u cm²?","24","Najpre udvostruči obe polovine.","e=8, f=6, pa je P=8·6:2=24 cm²."],
  ["Staza okružuje gredicu. Spoljašnji pravougaonik ima 8 m sa 5 m, gredica 6 m sa 3 m. Površina staze u m²?","22","Staza je razlika površina.","8·5−6·3=40−18=22 m²."],
  ["Kvadrat stranice 6 cm presečen je dijagonalom. Površina jedne polovine u cm²?","18","Dijagonala razdvaja dva podudarna trougla.","P=36 cm². Polovina je 18 cm²."],
  ["Dve ploče površine 20 i 18 cm² preklapaju se na 4 cm². Koliko cm² pokrivaju zajedno?","34","Preklop bi bio uračunat dvaput.","Saberi pojedinačne površine i jednom oduzmi preklop: 20+18−4=34 cm²."],
  ["Zid je 5 m sa 3 m, ima vrata 2 m sa 1 m i prozor 1,5 m sa 1 m. Za 1 m² treba 0,2 l boje. Koliko litara za jedan sloj?","2,3","Od zida oduzmi oba odvojena otvora.","P=15−2−1,5=11,5 m². Boje treba 11,5·0,2=2,3 l."],
  ["Deltoid ima jednu dijagonalu 20 cm, a druga je podeljena na 2 i 5 cm. Površina u cm²?","70","Saberi visine dva trougla.","P=20·(2+5):2=70 cm²."],
  ["Pravougaonik 10 sa 6 cm dopuni trouglom osnovice 6 cm, visine 4 cm bez preklapanja. Površina u cm²?","72","Izračunaj dva različita dela.","P=10·6+6·4:2=60+12=72 cm²."],
  ["Romb ima površinu 32 cm², jednu dijagonalu 0,8 dm. Druga u cm?","8","Pretvori dužinu u centimetre.","0,8 dm=8 cm. f=2·32:8=8 cm."],
  ["Iz kvadrata stranice 8 cm uklonjena su četiri odvojena ugaona kvadrata stranice 1,5 cm. Koliko cm² ostaje?","55","Oduzmi četiri jednake površine.","64−4·2,25=55 cm²."],
  ["Dijagonale četvorougla dužine 6 i 10 cm nisu normalne. Da li se iz tih podataka može zaključiti da je P=30 cm²?",["Ne","Da"],"Da li je druga dijagonala istovremeno visina?","Bez pravog ugla njena dužina ne daje zbir visina na prvu dijagonalu."],
  ["Dve jednake romboidne pločice oblika romba imaju dijagonale 10 i 4 cm. Bez preklapanja pokrivaju koliko cm²?","40","Najpre površina jedne pločice.","10·4:2=20 cm². Dve imaju 40 cm²."]
]);

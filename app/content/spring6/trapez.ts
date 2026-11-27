import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-trapez",
  title: "Trapez, srednje linije i deltoid",
  month: "april",
  aim: "Razlikuj osnovice i krake, konstruiši trapez i odredi odgovarajuću srednju liniju.",
  intro: "Ako spojiš sredine krakova trapeza, dobićeš duž čija je dužina tačno između dužina osnovica.",
  rules: ["Paralelne stranice trapeza zovemo osnovicama, a druge dve kracima. Kod jednakokrakog trapeza kraci su jednaki, jednaki su uglovi uz istu osnovicu i dijagonale. Srednja linija spaja sredine krakova i paralelna je osnovicama.","Duž između sredina dve stranice trougla paralelna je trećoj i upola kraća od nje. Deltoid ima dva para jednakih susednih stranica. Dijagonala koja prolazi kroz temena jednakih parova je osa simetrije i polovi drugu pod pravim uglom.","Dijagonale deltoida jesu normalne, ali ne moraju se uzajamno poloviti. Kod pravouglog trapeza normalan krak je visina."],
  formulas: ["Trapez: m=(a+b):2","Deltoid sa parovima stranica a i b: O=2(a+b)"],
  skills: ["osnovice", "srednja-linija-trougla", "normalnost", "srednja-linija-trapeza", "nepoznata-osnovica", "uglovi", "obim-deltoida", "obim-središnjeg-trougla", "projekcija", "proporcija", "klasifikacija"],
  worked: [{"question":"Osnovice trapeza su 14 i 8 cm. Odredi srednju liniju.","steps":["Spoji sredine krakova. Dijagonala deli tu duž na dve srednje linije trouglova, jednu za svaku osnovicu.","Dužine delova su 7 i 4 cm. Zato je m=(14+8):2=11 cm."]},{"question":"Kako konstruisati jednakokraki trapez osnovica 10 i 6 cm i visine 3 cm?","steps":["Nacrtaj veću osnovicu i njenu simetralu. Na simetrali odmeri visinu 3 cm i kroz tu tačku konstruiši paralelu osnovici.","Na paraleli od središta odmeri po 3 cm levo i desno. Spoji bliže krajeve osnovica. Simetrija garantuje jednake krake."]},{"question":"Deltoid ima par stranica od 4 cm i par od 7 cm. Koliki je obim?","steps":["Na granici susrećeš dve kraće i dve duže stranice.","O=2(a+b)=2·(4+7)=22 cm. Dijagonale nisu deo obima."]}]
}, [
  ["Kako se zovu paralelne stranice trapeza?",["Osnovice","Kraci","Dijagonale"],"Posmatraj stranice na paralelnim pravama.","Nazivamo ih osnovicama, a preostale dve kracima."],
  ["Srednja linija trougla paralelna je stranici od 9 cm. Koliko cm ima srednja linija?","4,5","Uzmi polovinu odgovarajuće stranice.","9:2=4,5 cm."],
  ["Koliko stepeni čini ugao dijagonala deltoida?","90","Jedna je osa simetrije druge.","One seku jedna drugu pod pravim uglom."],
  ["Osnovice imaju 7 i 13 cm. Koliko cm ima srednja linija?","10","Izračunaj aritmetičku sredinu.","m=(7+13):2=10 cm."],
  ["Srednja linija trapeza ima 9 cm, jedna osnovica 12 cm. Koliko cm ima druga?","6","Vrati zbir osnovica.","2m=a+b=18 cm. Druga ima 18−12=6 cm."],
  ["Uz veću osnovicu jednakokrakog trapeza ugao je 63°. Koliki je u stepenima ugao na istom kraku uz drugu osnovicu?","117","Osnovice su paralelne.","Uglovi na kraku se dopunjuju: 180−63=117."],
  ["Deltoid ima obim 38 cm. Dve jednake kraće stranice imaju po 7 cm. Duža ima koliko cm?","12","Oduzmi obe kraće pa podeli.","(38−14):2=12 cm."],
  ["Sve tri srednje linije trougla obrazuju trougao obima 13 cm. Obim prvobitnog u cm?","26","Svaka stranica je dvostruko duža od odgovarajuće srednje linije.","Zbir se takođe udvostručuje: 2·13=26 cm."],
  ["Osnovice jednakokrakog trapeza su 15 i 7 cm. Koliko cm iznosi horizontalni odsečak uz svaki kraj veće osnovice posle spuštanja visina?","4","Razlika osnovica je raspoređena simetrično.","15−7=8 cm, po 8:2=4 cm sa svake strane."],
  ["Srednja linija ima 12 cm, a duža osnovica je tri puta veća od kraće. Koliko cm ima duža?","18","Zbir osnovica čini dvostruku srednju liniju.","x+3x=24, pa x=6 i 3x=18 cm."],
  ["Da li sama jednakost jednog para susednih stranica garantuje deltoid?",["Ne","Da"],"Proveri drugi par.","Za deltoid su potrebna dva para jednakih susednih stranica."],
  ["Trapez ima osnovice 4 i 10 cm i jednake krake po 5 cm. Koliki je obim u cm?","24","Obiđi granicu.","4+10+5+5=24 cm."],
  ["U trouglu je srednja linija 3,7 cm. Paralelna stranica ima koliko cm?","7,4","Stranica je dvostruko duža.","2·3,7=7,4 cm."],
  ["Dijagonala simetrije deltoida polovi drugu dužine 15 cm. Koliko cm ima jedna polovina?","7,5","Jednaki delovi imaju polovinu dužine.","15:2=7,5 cm."],
  ["U jednakokrakom trapezu razlika osnovica je 10 cm, a kraća ima 8 cm. Koliko cm ima srednja linija?","13","Izračunaj dužu osnovicu.","Duža je 18 cm, pa m=(18+8):2=13 cm."],
  ["Može li trapez osnovica 15 i 5 cm i oba kraka od 4 cm postojati?",["Ne","Da"],"Uporedi krak sa njegovom horizontalnom projekcijom.","Projekcija svakog kraka bila bi (15−5):2=5 cm. Krak dužine 4 cm ne može imati projekciju od 5 cm."]
]);

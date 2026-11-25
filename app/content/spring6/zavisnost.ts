import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-zavisnost",
  title: "Direktna i obrnuta proporcionalnost",
  month: "march",
  aim: "Proveri da li je stalan količnik ili proizvod i izaberi odgovarajući model.",
  intro: "Više litara po istoj ceni za litar košta više. Više jednakih pumpi isti bazen isprazni za manje vremena.",
  rules: ["Kod direktne proporcionalnosti istom faktoru promene prve veličine odgovara isti faktor druge. Odnos y:x za x≠0 je stalan. Tačke (x, kx) leže na pravoj kroz početak.","Kod obrnute proporcionalnosti proizvod xy je stalan. Ako se broj jednako brzih radnika udvostruči, vreme za isti posao se prepolovi, pod uslovom da mogu raditi istovremeno.","Samo rast obe veličine nije dovoljan. Ako postoji početna naknada, cena po kilometru ukupne vožnje nije stalna."],
  formulas: ["y=kx","xy=k"],
  skills: ["jedinična-cena", "zamena", "obrnuti-faktor", "koordinatni-početak", "brzina", "čitanje-tabele", "rad", "koeficijent", "promena-kapaciteta", "prosečna-cena", "direktni-faktor"],
  worked: [{"question":"Četiri sveske koštaju 220 dinara. Koliko košta sedam?","steps":["Jedinična cena je 220:4=55 dinara. Količnik je nepromenjen.","Za sedam svezaka platićeš 7·55=385 dinara. Na grafiku su (0, 0), (4, 220) i (7, 385)."]},{"question":"Šest jednakih slavina napuni bazen za 8 sati. Za koliko sati bi radile četiri?","steps":["Za isti bazen potrebno je 6·8=48 sati rada jedne slavine.","Četiri slavine dele rad: 48:4=12 sati. Manje slavina znači duže vreme."]},{"question":"Taksi naplaćuje 100 dinara za početak i 50 po kilometru. Da li je iznos direktno proporcionalan putu?","steps":["Za 1 km račun je 150 dinara, a za 2 km je 200 dinara.","Dvostruki put nema dvostruk račun. Ni pri 0 km račun nije nula."]}]
}, [
  ["Tri kg krušaka koštaju 450 dinara. Cena kilograma?","150","Podeli cenu količinom.","450:3=150 dinara po kg."],
  ["Ako y=4x, koliko je y za x=3?","12","Zameni x sa 3.","y=4·3=12."],
  ["Kod obrnutog odnosa broj pumpi se utrostruči. Šta je sa vremenom za isti posao?",["Deli se sa 3","Množi se sa 3","Ostaje isto"],"Proizvod je stalan.","Tri puta veći prvi činilac mora imati tri puta manji drugi."],
  ["Kroz koju tačku uvek prolazi prava y=kx?",["O(0, 0)","A(0, 1)","B(1, 0) za svako k"],"Uvrsti x=0.","Za svaki k dobijamo y=k·0=0."],
  ["Za 3 sata biciklista stalnom brzinom pređe 42 km. Koliko km pređe za 2,5 sata?","35","Odredi brzinu.","42:3=14 km na sat. Za 2,5 sata pređe 14·2,5=35 km."],
  ["U tabeli su parovi (2, 18), (3, 12), (6, 6). Koji je odnos?",["Obrnuti","Direktni","Nijedan"],"Proveri proizvode.","Svaki proizvod je 36, što daje obrnutu proporcionalnost."],
  ["Devet jednakih mašina završi posao za 4 sata. Koliko sati treba šest mašina?","6","Obim posla je isti.","Ukupno je 9·4=36 mašinskih sati. Šest mašina radi 36:6=6 sati."],
  ["Na pravoj y=kx je (−2, 6). Koliki je k?","-3","Podeli ordinatu apscisom.","6:(−2)=−3, pa je y=−3x."],
  ["Četiri iste pumpe rade 2 sata. Za popunjavanje celog bazena potrebno je 20 pumpnih sati. Ako zatim rade samo tri, koliko još sati treba?","4","Najpre oduzmi već obavljen rad.","Obavljeno je 4·2=8. Ostaje 12 pumpnih sati, odnosno 12:3=4 sata."],
  ["Ponuda je 180 dinara dostave i 40 po knjizi. Koliko dinara manje po knjizi iznosi prosečna cena za 6 nego za 3 knjige?","30","Rasporedi dostavu na broj knjiga.","Za tri je 40+180:3=100, za šest je 40+180:6=70. Razlika je 30."],
  ["U direktnom odnosu x se smanji za polovinu. Za koliko procenata se smanji y, ako su obe vrednosti pozitivne?","50","Obe se menjaju istim faktorom.","Prepolovljena pozitivna vrednost je za 50% manja."],
  ["Ako xy=60 i x=7,5, koliko je y?","8","Podeli stalan proizvod sa x.","60:7,5=8."],
  ["Cena je stalna. Za 1,2 kg plaćeno je 300 dinara. Kolika je cena 3 kg?","750","Svedi na kilogram.","300:1,2=250. Tri kilograma su 750 dinara."],
  ["Na putu od 180 km, koliko sati uštediš ako voziš 90 umesto 60 km na sat?","1","Izračunaj oba vremena.","180:60=3 sata, a 180:90=2 sata. Razlika je 1 sat."],
  ["Može li tabela (1, 3), (2, 6), (3, 10) cela pripadati direktnoj proporcionalnosti?",["Ne","Da"],"Proveri poslednji par.","Prva dva količnika su 3. Treći je 10:3, različit od 3."],
  ["U kampu je ostalo 120 jednakih obroka. Za koliko dana je to dovoljno pri potrošnji od 20 obroka dnevno?","6","Podeli zalihu dnevnom potrošnjom.","120:20=6 dana."]
]);

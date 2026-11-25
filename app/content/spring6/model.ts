import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-model",
  title: "Od teksta do izraza, jednačine ili nejednačine",
  month: "january",
  aim: "Prevedi promenu, dug i ograničenje na matematički zapis i proveri odgovor u tekstu.",
  intro: "Termometar pokazuje stanje, a njegov pad je promena. Isti broj može označavati različite stvari u računu.",
  rules: ["Označi nepoznatu veličinu i njenu jedinicu. Promene sabiraj sa početnom vrednošću, a jednake grupe predstavi proizvodom.","Reč najviše uključuje granicu. Kada obe strane nejednačine deliš negativnim brojem, redosled se obrće jer se brojevi preslikavaju na suprotnu stranu nule.","Pad za 3 od −2 vodi do −5. Oduzimanje negativnog broja predstavlja suprotnu promenu."],
  formulas: ["s=s₀+d","−2x≤6 ⇔ x≥−3"],
  skills: ["promena", "rastojanje", "granica", "količnik", "obrnuta-promena", "podela-ostatka", "izraz", "nejednačina", "celobrojna-granica", "prosek", "obrnuti-račun"],
  worked: [{"question":"Sa −1,5 °C temperatura poraste za 4 °C. Kolika je sada?","steps":["Početno stanje je negativno, promena pozitivna. Računamo −1,5+4.","Do nule je 1,5 stepeni, preostaje 2,5. Temperatura je 2,5 °C."]},{"question":"Tri jednake sveske i olovka od 45 dinara koštaju 240 dinara. Koliko košta sveska?","steps":["Ako je cena sveske x, važi 3x+45=240. Oduzimanjem 45 dobijamo 3x=195.","Deljenjem sa 3 nalazimo x=65. Provera je 3·65+45=240."]},{"question":"Ronilac je na koti −2 m i spušta se 1,5 m u minuti. Koliko celih minuta sme da se spušta do kote −8 m uključivo?","steps":["Posle t minuta kota je −2−1,5t. Uslov −2−1,5t≥−8 daje −1,5t≥−6.","Delimo sa −1,5 i dobijamo t≤4. U četvrtom minutu stiže do granice."]}]
}, [
  ["Saldo je −350 dinara. Uplata je 500 dinara. Koliki je novi saldo u dinarima?","150","Uplata povećava saldo.","−350+500=150 dinara."],
  ["Porast sa −3,5 °C na 2 °C iznosi koliko stepeni?","5,5","Od krajnje vrednosti oduzmi početnu.","2−(−3,5)=5,5."],
  ["Koji zapis znači „najmanje 4 litra“?",["x≥4","x>4","x≤4"],"Da li su tačno četiri litra dovoljna?","Da, pa je granica uključena i sve veće količine odgovaraju."],
  ["Četiri jednake porcije imaju ukupno 1,5 kg. Koliko kg ima jedna?","0,375","Ukupnu masu podeli brojem porcija.","1,5:4=0,375 kg."],
  ["Posle pada za 2,75 m nivo je −1 m. Koja je bila početna kota u metrima?","1,75","Vrati pad suprotnom promenom.","x−2,75=−1 daje x=1,75."],
  ["Dva druga dele ostatak od 900 dinara posle troška od 175,50 dinara. Koliko dinara dobija svaki?","362,25","Podeli tek posle oduzimanja.","(900−175,5):2=724,5:2=362,25."],
  ["Tri dana saldo se menja za −2,5 dnevno, pa za +4 četvrtog dana. Kolika je ukupna promena?","-3,5","Saberi četiri promene.","3·(−2,5)+4=−7,5+4=−3,5."],
  ["Koji uslov dobiješ iz −3x<12?",["x>−4","x<−4","x>4"],"Deliš negativnim brojem.","Deljenjem obe strane sa −3 smer se obrće. Granica je 12:(−3)=−4."],
  ["Imaš 400 dinara, prevoz košta 95, a karta za igru 42,5 dinara. Koliko karata najviše možeš kupiti?","7","Preostali novac uporedi sa cenom celog broja karata.","400−95=305. Sedam karata košta 297,5, osam košta 340."],
  ["Prosek dve jutarnje temperature je −1,25 °C. Prva je 2 °C. Kolika je druga u °C?","-4,5","Iz proseka vrati zbir.","Zbir je 2·(−1,25)=−2,5. Druga temperatura je −2,5−2=−4,5."],
  ["Popust je 30 dinara na ukupan račun za šest jednakih bojica. Plaćeno je 150 dinara. Cena jedne pre popusta?","30","Vrati popust na račun.","(150+30):6=30 dinara."],
  ["Na računu je −42,5 dinara. Posle dve jednake uplate saldo je 7,5. Koliko dinara ima jedna uplata?","25","Najpre odredi ukupnu promenu.","7,5−(−42,5)=50. Jedna uplata je 50:2=25."],
  ["Koliki je najmanji ceo broj koji zadovoljava −4x<10?","-2","Odredi granicu pre izbora celog broja.","Deljenjem sa −4 dobijamo x>−2,5. Prvi ceo broj desno je −2."],
  ["Za 12,6 l soka treba najmanje koliko boca od 0,75 l?","17","Poslednja boca može biti delimično puna.","12,6:0,75=16,8. Šesnaest boca prima 12 l, pa treba sedamnaesta."],
  ["Uspon od 4,25 m dovodi do kote 1,5 m. Koja je bila početna kota u metrima?","-2,75","Početnu visinu dobijaš obrnutom promenom.","1,5−4,25=−2,75."],
  ["Na −4 °C hladi se za 0,75 °C svakog sata. Posle koliko sati je prvi put tačno −7 °C?","4","Pad uporedi sa promenom za jedan sat.","−4−0,75t=−7 daje −0,75t=−3, pa je t=4."]
]);


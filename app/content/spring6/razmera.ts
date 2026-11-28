import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-razmera",
  title: "Razmera i proporcija",
  month: "march",
  aim: "Svedi veličine na iste jedinice i pomoću proporcije nađi nepoznat član.",
  intro: "Na planu učionice centimetar može označavati metar. Odnos zavisi od redosleda kojim porediš dužine.",
  rules: ["Razmera a:b je količnik a i b za b≠0. Za odnos dve dužine prvo izjednači jedinice. Množenje oba člana istim nenultim brojem čuva količnik.","Proporcija je jednakost dve razmere. Iz a:b=c:d množenjem obe strane sa bd dobijaš ad=bc. Ako deliš celinu u razmeri, saberi delove pre deljenja.","Razmera dela prema delu razlikuje se od razmere dela prema celini: kod 2:3 prvi deo zauzima dve petine."],
  formulas: ["a:b=c:d ⇒ ad=bc"],
  skills: ["skraćivanje", "razmera-karte", "nepoznat-član", "zbir-delova", "jedinice", "umanjenje", "podela", "uvećanje", "razlika-delova", "razmernik", "jednakost"],
  worked: [{"question":"Na karti 1:25000 put je dug 4 cm. Kolika je dužina u km?","steps":["Na terenu je 4·25000=100000 cm. Sto centimetara čini jedan metar.","100000 cm=1000 m=1 km."]},{"question":"Žuta i plava boja pomešane su u zapreminskoj razmeri 3:2. Koliko decilitara plave boje ima u 15 dl mešavine?","steps":["Ukupno je 3+2=5 jednakih delova. Jedan deo je 15:5=3 dl.","Plave ima 2·3=6 dl. Preostalih 9 dl žute daje odnos 9:6=3:2."]},{"question":"Reši 4:7=x:21.","steps":["Jednakost količnika daje 7x=4·21=84.","Deljenjem sa 7 dobijaš x=12. Provera: 12:21 skraćivanjem sa 3 daje 4:7."]}]
}, [
  ["Skrati odnos 12:18.",["2:3","3:2","2:5"],"Podeli oba člana sa 6.","12:6=2 i 18:6=3 daju 2:3."],
  ["Ako je plan 1:100, 1 cm na planu predstavlja koliko cm u sobi?","100","Čitaj prvi član kao crtež.","Jednom centimetru odgovara sto centimetara."],
  ["Dopuni 3:4=9:x.","12","Prvi član je utrostručen.","I drugi se množi sa 3. Zato je x=12."],
  ["Koliko ukupno jednakih delova ima mešavina 5:2?","7","Saberi brojeve delova.","Pet delova prve i dva druge supstance daju sedam."],
  ["Odnos 8 cm prema 2 m u najjednostavnijem obliku?",["1:25","4:1","1:4"],"Pretvori metre u centimetre.","8:200 skrati sa 8 i dobićeš 1:25."],
  ["Na planu 1:200 zid od 7 m ima koliko cm?","3,5","Stvarnu dužinu smanji.","7 m=700 cm. Na crtežu je 700:200=3,5 cm."],
  ["Podeli 84 u odnosu 3:4. Koliki je manji deo?","36","Odredi vrednost jednog dela.","84:7=12. Manji deo je 3·12=36."],
  ["Za razmeru slike prema originalu 5:2, original dužine 6 cm na slici ima koliko cm?","15","Slika je uvećana.","Dva dela su 6 cm, jedan je 3 cm, pet je 15 cm."],
  ["Dve količine su u odnosu 7:4 i razlikuju se za 15 kg. Koliko kg iznosi njihov zbir?","55","Razlika odgovara razlici broja delova.","Tri dela su 15 kg. Svih jedanaest delova imaju 11·5=55 kg."],
  ["Na karti su dva sela na 2,4 cm, u prirodi na 6 km. U zapisu 1:n koliko je n?","250000","Kilometre pretvori u centimetre.","6 km=600000 cm, pa n=600000:2,4=250000."],
  ["Da li je 8:12=14:21?",["Da","Ne"],"Proveri proizvode spoljnih i unutrašnjih članova.","8·21=168 i 12·14=168."],
  ["Koliko dl vode treba za 3 dl sirupa ako je odnos sirup:voda=2:5?","7,5","Jedan deo je polovina količine sirupa.","3:2=1,5 dl po delu. Vode je 5·1,5=7,5 dl."],
  ["Dopuni x:15=6:10.","9","Uporedi razmere njihovim proizvodima.","10x=15·6=90. Zato je x=9."],
  ["Na crtežu od 5 cm prikazano je 20 m. Za 2 cm koliko je stvarnih metara?","8","Odredi koliko metara prikazuje 1 cm.","20:5=4 m po centimetru. Dva centimetra prikazuju 8 m."],
  ["Odnos devojčica i dečaka je 4:3. Ako je dečaka 12, koliko je dece ukupno?","28","Tri dela imaju 12 dece.","Jedan deo je 4, pa sedam delova ima 28 dece."],
  ["Koji odnos opisuje 150 ml prema 1 l?",["3:20","3:2","20:3"],"Litar je hiljadu mililitara.","150:1000 skrati sa 50 i dobijaš 3:20."]
]);

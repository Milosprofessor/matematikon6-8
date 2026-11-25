import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-konstrukcije",
  title: "Konstrukcije uglova i trouglova",
  month: "january",
  aim: "Izaberi podatke koji određuju trougao i izvedi konstrukciju lenjirom i šestarom.",
  intro: "Šestar prenosi rastojanje. Svaka tačka njegovog luka jednako je udaljena od središta.",
  rules: ["Za ugao od 60° konstruiši jednakostranični trougao. Simetrala deli ugao napola: iz temena opiši luk, pa iz njegova dva preseka sa kracima opiši jednake lukove i spoji njihov presek s temenom.","Kod SSS nacrtaj osnovicu i oko krajeva opiši kružnice preostalim stranicama. Kod SUS prenesi zahvaćeni ugao, a kod USU iz krajeva osnovice prenesi dva nalegla ugla. Presek određuje treće teme.","Ako je zbir kraćih stranica jednak najdužoj, temena leže na pravoj i nema trougla."],
  formulas: ["α+β+γ=180°","a+b>c"],
  skills: ["simetrala", "ugao", "kružnica", "egzistencija", "polovljenje", "stav", "zbir-uglova", "suplement", "granice", "simetrija", "sabiranje-uglova"],
  worked: [{"question":"Kako konstruisati 75°?","steps":["U istom temenu sa zajedničkim početnim krakom u istoj poluravni konstruiši krake od 60° i 90°. Za 60° iz krajeva osnovice opiši lukove čiji je poluprečnik jednak osnovici. Spoji njihov presek sa temenom.","Za 90° označi dve tačke na početnoj pravoj jednako udaljene od temena, levo i desno. Iz njih jednakim otvorom većim od te udaljenosti opiši lukove iznad prave. Spoj temena s njihovim presekom je normala.","Prepolovi ugao između krakova. Novi krak sa početnim zaklapa 60°+15°=75°."]},{"question":"Kako nacrtati trougao sa stranicama 4, 5 i 7 cm?","steps":["Nacrtaj AB dužine 7 cm. Iz A opiši luk poluprečnika 4 cm, iz B luk poluprečnika 5 cm.","Presek lukova označi sa C i spoji sa A i B. Dužine su obezbeđene poluprečnicima, a 4+5>7."]},{"question":"Dati su AB=6 cm, ugao kod A je 50°, kod B je 60°.","steps":["Prenesi zadata dva ugla na istu stranu duži AB, prvi u A od AB, drugi u B od BA.","Presek krakova je C. Treći ugao je 180°−110°=70°, pa je trougao nedegenerisan."]}]
}, [
  ["Polovina konstruktivno dobijenog pravog ugla ima koliko stepeni?","45","Simetrala deli ugao na jednake delove.","90°:2=45°."],
  ["U jednakostraničnom trouglu svaki ugao ima koliko stepeni?","60","Tri jednaka ugla čine opruženi ugao.","180°:3=60°."],
  ["Šta predstavlja skup svih tačaka udaljenih 4 cm od A?",["Kružnica","Krug","Simetrala"],"Pazi na reč „svih“ i tačno rastojanje.","Granica kruga je kružnica poluprečnika 4 cm."],
  ["Može li trougao imati stranice 2, 3 i 5 cm?",["Ne","Da"],"Uporedi zbir dve kraće sa najdužom.","2+3=5, pa su temena kolinearna."],
  ["Dvaput prepolovi ugao od 120°. Koliki je najmanji dobijeni ugao u stepenima?","30","Svaki put podeli trenutni ugao sa dva.","120°:2:2=30°."],
  ["AB=4 cm, AC=5 cm i ∠BAC=70°. Koji postupak koristiš?",["SUS","SSS","USU"],"Koje duži grade dati ugao?","AB i AC se sastaju u A. Poznat je upravo zahvaćeni ugao."],
  ["Kod USU jedan nalegli ugao iznosi 42°, treći ugao 76°. Na koliko stepeni prenosiš drugi nalegli ugao?","62","Dopuni zbir do 180°.","180°−42°−76°=62°."],
  ["Koji je suplement ugla od 45°, u stepenima?","135","Produženjem kraka nastaje opruženi ugao.","180°−45°=135°."],
  ["Dve stranice su 3 i 7 cm. Koliko celobrojnih vrednosti u cm može imati treća?","5","Upotrebi i razliku i zbir.","4<x<10 daje 5, 6, 7, 8 i 9."],
  ["U konstrukciji SSS postoje dva preseka kružnica. Koliko nepodudarnih trouglova dobijaš?","1","Uporedi sve tri stranice oba trougla.","Odrazi preko osnovice imaju tri jednake odgovarajuće stranice. Dobija se jedan oblik."],
  ["Koliki ugao nastaje sabiranjem uglova od 90° i 30°?","120","Saberi mere nadovezanih uglova.","90°+30°=120°."],
  ["AB=9 cm. Za AC=4 i BC=4 cm broj preseka kružnica je koliko?","0","Uporedi zbir poluprečnika s razmakom centara.","4+4<9. Lukovi ne mogu da se sretnu."],
  ["Kako se dobija ugao od 15° iz ugla od 60°?",["Dva puta prepolovi","Dodaj 30°","Jednom prepolovi"],"Prati svaku polovinu.","60°:2=30°, pa 30°:2=15°."],
  ["Za osnovicu i dva nalegla ugla od 95° i 90°, da li postoji trougao?",["Ne","Da"],"Izračunaj zbir datih uglova.","185° prelazi zbir sva tri ugla trougla."],
  ["Koji poluprečnik u cm uzimaš iz B ako su AB=8 cm, BC=6 cm i CA=5 cm?","6","Traži udaljenost traženog temena od B.","C je od B udaljeno BC=6 cm."],
  ["Najveća celobrojna treća stranica za stranice 3,5 i 4,5 cm ima koliko cm?","7","Zbir nije dozvoljena granica.","Treća je manja od 8 i veća od 1. Najveći ceo izbor je 7."]
]);


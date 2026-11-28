import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-cetiri-stranice",
  title: "Konstrukcije trapeza, romba i deltoida",
  month: "april",
  aim: "Razloži konstrukciju četvorougla na poznatu konstrukciju trougla i proveri da li rešenje postoji.",
  intro: "Dobar nacrt odgovara na pitanje gde mora biti četvrto teme. Pomoćna paralela može otkriti trougao čije tri stranice već znaš.",
  rules: ["Za trapez sa većom osnovicom AB=a i manjom DC=b odmeri AE=a−b na AB. Konstruiši trougao AED sa AD i ED jednakim dužinama zadatih krakova AD i BC. Iz D prenesi DC=b paralelno sa AB u smeru od A ka B.","Za romb možeš konstruisati normalne dijagonale koje se uzajamno polove. Za deltoid osa kroz temena jednakih parova polovi drugu dijagonalu. Presek deli osu u dva dela koji mogu biti različiti.","Skica služi planu. Nakon konstrukcije proveri zadate dužine i paralelnost: sama sličnost sa crtežom ne garantuje da je zadatak rešen."],
  formulas: ["AE=a−b","ED=BC","DC∥AB"],
  skills: ["razlika-osnovica", "poludijagonala", "osa", "prenos", "egzistencija", "pomoćni-paralelogram", "poseban-slučaj", "projekcija", "granice", "dodir", "kontraprimer"],
  worked: [{"question":"Konstruiši trapez sa osnovicama 9 i 5 cm i kracima AD=3 cm, BC=4 cm.","steps":["Nacrtaj AB=9 i na njoj AE=4 cm. Opiši luk iz A poluprečnika 3 cm i iz E poluprečnika 4 cm. Njihov presek iznad osnovice označi D.","Iz D prenesi 5 cm paralelno i u smeru AB do C. Četvorougao EBCD je paralelogram: EB=DC=5 cm i EB∥DC. Zato je BC=ED=4 cm."]},{"question":"Konstruiši romb ako su njegove dijagonale 8 i 6 cm.","steps":["Nacrtaj AC=8 cm i konstruiši njenu simetralu. Iz sredine S na toj pravoj odmeri SB=SD=3 cm na suprotnim stranama.","Spoji A, B, C, D. Dijagonale se polove, pa je figura paralelogram. Normalne dijagonale garantuju da je romb."]},{"question":"Konstruiši deltoid ABCD ako je AC=7 cm, AB=AD=4 cm i CB=CD=5 cm.","steps":["Nacrtaj AC, zatim opiši kružnice sa centrima A i C, poluprečnika 4 i 5 cm. Uslov 1<7<9 daje dva preseka.","Označi preseke B i D i spoji redom A, B, C i D. Jednakosti stranica slede iz jednakosti poluprečnika istih kružnica."]}]
}, [
  ["U konstrukciji trapeza osnovica 12 i 7 cm koliki je pomoćni odsečak AE u cm?","5","Pomoćni trougao koristi razliku osnovica.","AE=12−7=5 cm."],
  ["U rombu dijagonale dugačke 10 cm i 6 cm prenosiš iz centra. Kraća polovina ima koliko cm?","3","Obe dijagonale se polove.","6:2=3 cm."],
  ["Za deltoid sa AB=AD, BC=CD na kojoj pravoj leže centri kružnica čiji su preseci B i D?",["AC","BD","AB"],"Traži temena iz kojih meriš jednake susedne stranice.","Centri su A i C. Prava AC je osa simetrije."],
  ["Koji alat prenosi dužinu AD bez čitanja skale?",["Šestar","Uglomer","Lenjir bez podeoka samostalno"],"Otvor ostaje isti pri pomeranju.","Razmak krakova šestara prenosi dužinu."],
  ["Može li postojati trapez sa osnovicama 12 i 4 cm i kracima 3 i 4 cm?",["Ne","Da"],"Proveri pomoćni trougao.","Razlika osnovica je 8 cm. Pošto je 3+4<8, lukovi se ne seku."],
  ["Koja je duž u pomoćnom trouglu jednaka kraku BC kad iz D prenosiš DC paralelno sa EB?",["ED","AE","AB"],"Posmatraj paralelogram EBCD.","U paralelogramu EBCD duži ED i BC su naspramne stranice, pa su jednake."],
  ["Deltoid ima AC=6 cm i kružnice sa centrima A i C jednakih poluprečnika 5 cm. Koji poseban četvorougao sigurno dobijaš spajanjem oba preseka?",["Romb","Pravougaonik bez jednakih stranica","Trapez sa različitim osnovicama"],"Pogledaj sve četiri stranice.","Sve četiri su poluprečnici od po 5 cm, pa je figura romb."],
  ["U jednakokrakom trapezu osnovica 18 i 10 cm spusti visine iz krajeva kraće na dužu osnovicu. Koliko cm od kraja duže pada bliže podnožje?","4","Izdvoji preostalu duž van projekcije kraće osnovice.","Razlika je 8 cm. Simetrija je deli na dva dela od 4 cm."],
  ["Sa osnovicama 11 i 5 cm i jednim krakom 4 cm, koliko pozitivnih celobrojnih dužina drugog kraka daje nedegenerisan trapez?","7","Primeni dvostruku nejednakost trougla na 6, 4 i x.","Za pomoćni trougao treba 2<x<10. Celobrojni izbori su od 3 do 9, ukupno 7."],
  ["Pokušaj konstrukcije deltoida sa AB=AD=3 cm, BC=CD=5 cm i AC=8 cm. Koliko različitih preseka imaju kružnice kojima tražiš B i D?","1","Uporedi rastojanje centara sa zbirom poluprečnika.","8=3+5 pa se kružnice dodiruju spolja. Jedan presek ne daje dva različita temena."],
  ["U konstrukciji romba učenik nacrta normalne dijagonale i samo jednu podeli napola. Da li je to dovoljno?",["Ne","Da"],"Proveri uslov za paralelogram.","Obe moraju poloviti jedna drugu. Inače može nastati deltoid sa različitim parovima stranica."],
  ["Za trapez osnovica 14 i 8 cm i kraka BC=7 cm, ED u pomoćnoj konstrukciji ima koliko cm?","7","Prepoznaj odgovarajući naspramni krak.","EBCD je paralelogram. ED=BC=7 cm."],
  ["Pri konstrukciji deltoida AB=AD=4 cm i BC=CD=6 cm. Koja dužina AC daje dva preseka?",["7 cm","2 cm","10 cm"],"Primeni strogu nejednakost između razlike i zbira.","2<AC<10, pa odgovara 7 cm. Krajnje vrednosti daju dodir."],
  ["Pod kojim uglom se seku dijagonale svakog romba, uključujući i kvadrat? Upiši broj stepeni.","90","Posebni ugao ne zavisi od dužina dijagonala.","U rombu su dijagonale normalne, pa je ugao 90°."],
  ["Trapez osnovica 10 i 6 cm ima jedan krak 5 cm. Najveći ceo broj centimetara koji može biti drugi krak?","8","Pomoćni trougao ima dve stranice 4 i 5 cm.","Treća mora biti manja od 9 i veća od 1. Najveći ceo izbor je 8."],
  ["Može li iz istih osnovica i jedne zadate visine nastati više nepodudarnih trapeza ako dužine krakova nisu zadate?",["Da","Ne"],"Pomeraj gornju osnovicu duž njene prave.","Pomeranje čuva obe osnovice i visinu, ali menja dužine krakova. Zato oblik nije jedinstven."]
]);

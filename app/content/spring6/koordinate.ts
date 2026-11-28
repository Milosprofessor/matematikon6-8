import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-koordinate",
  title: "Koordinate, pomeranje i čitanje podataka",
  month: "february",
  aim: "Očitaj obe koordinate, pomeri tačku i protumači promenu prikazanu podacima.",
  intro: "Na karti ulice nije dovoljno reći koliko si se pomerio udesno. Potrebno je reći i koliko si išao nagore.",
  rules: ["Ose x i y su normalne, a njihov presek je koordinatni početak. U uređenom paru prvo se čita horizontalna, zatim vertikalna koordinata.","Na osi x druga koordinata je nula. Pri pomeranju svakom položaju dodaj odgovarajući pomeraj. Na grafiku najpre pročitaj jedinicu i korak skale na svakoj osi.","Visina stuba prikazuje vrednost, dok promena između dva merenja zahteva oduzimanje."],
  formulas: ["O(0, 0)","A(x, y) → A′(x+u, y+v)"],
  skills: ["apscisa", "ordinata", "kvadrant", "osa", "rastojanje", "translacija", "osna-simetrija", "deo-celine", "središte", "brzina-promene", "centralna-simetrija"],
  worked: [{"question":"Ucrtaj A(−3, 2).","steps":["Na mreži sa jediničnim podeocima od O pređi tri podeoka ulevo. Zatim pređi dva podeoka nagore.","Označi A. Levo od ose y i iznad ose x nalazi se drugi kvadrant."]},{"question":"Od P(−2, 4) idi 5 udesno i 3 nadole.","steps":["Prva koordinata postaje −2+5=3. Druga postaje 4−3=1.","Nova tačka je (3, 1). Pomeraj ne zavisi od početne tačke."]},{"question":"U 8, 10 i 12 sati izmereno je 2, 6 i 5 °C. Kako to prikazati?","steps":["Na horizontalnoj osi označi sate, na vertikalnoj temperaturu. Ucrtaj (8, 2), (10, 6), (12, 5).","Između poslednja dva merenja promena je 5−6=−1 °C. Bez novih merenja ne znamo tačnu vrednost u 11 sati."]}]
}, [
  ["Koja je apscisa tačke A(−4, 7)?","-4","Čitaj prvu koordinatu.","Prvo je horizontalno rastojanje sa znakom, ovde −4."],
  ["Koja je ordinata tačke na osi x?","0","Koliko se tačka izdiže iznad ose?","Tačka je na samoj osi, pa je y=0."],
  ["Tačka (2, −5) pripada kom kvadrantu?",["IV","II","III"],"Desno i dole od početka.","Pozitivna apscisa i negativna ordinata određuju IV kvadrant."],
  ["Za (0, −3) izaberi položaj.",["Na osi y","U III kvadrantu","Na osi x"],"Prva koordinata je nula.","Nema horizontalnog pomeraja, pa tačka pripada osi y."],
  ["Koliko jedinica razdvaja A(−3, 2) i B(5, 2)?","8","Druga koordinata je ista.","Horizontalno rastojanje je 5−(−3)=8."],
  ["Od (−2, −1) idi 4 nagore. Nova ordinata?","3","Dodaj vertikalni pomeraj.","−1+4=3. Apscisa ostaje −2."],
  ["Preslikaj (−5, 3) preko ose y. Nova apscisa?","5","Promeni horizontalni smer.","Slika je jednako daleko desno: x=5."],
  ["Na dijagramu tri stuba predstavljaju tri odvojene grupe od 12, 15 i 9 učenika. Koliki procenat svih tih učenika čini treća grupa?","25","Saberi pa uporedi deo s celinom.","Ukupno je 36. Devet je četvrtina, odnosno 25%."],
  ["Sredina duži ima apscisu 2. Jedan kraj ima apscisu −3. Koja je apscisa drugog kraja?","7","Od prvog kraja do sredine pređi isto kao do drugog.","2−(−3)=5. Dodaj još 5 na 2 i dobijaš 7."],
  ["Od 9 do 12 sati količina vode je pala sa 20 na 8 l ravnomerno. Za koliko litara opada za jedan sat?","4","Promenu podeli trajanjem.","Pad je 20−8=12 l tokom 3 sata, odnosno 4 l na sat."],
  ["U kom kvadrantu je centralno simetrična slika tačke (−3, −4) u odnosu na O?",["I","II","IV"],"Promeni znak obe koordinate.","Slika je (3, 4), u I kvadrantu."],
  ["Kolika je ordinata sredine duži od (2, −5) do (2, 1)?","-2","Sredina je na pola vertikalnog puta.","Razmak je 6, pa −5+3=−2."],
  ["Od (1, −3) do (−4, −3) pomeraj duž ose x iznosi koliko?","-5","Razlikuj smer i dužinu.","Nova apscisa minus stara je −4−1=−5."],
  ["Na skali je 5 l po podeoku. Stub visok 7 podeoka prikazuje koliko litara?","35","Svaki korak ima istu vrednost.","7·5=35 l."],
  ["U tabeli su redom 4, 9, 7 i 10 putnika. Koliki je najveći porast između susednih merenja?","5","Izračunaj sve susedne razlike.","Promene su +5, −2 i +3. Najveći porast je 5."],
  ["Tri uzastopna temena pravougaonika su A(−2, 1), B(4, 1), C(4, 5). Koja je apscisa temena D?","-2","Stranica AD je uspravna.","D deli apscisu sa A i ordinatu sa C. Zato je D(−2, 5)."]
]);

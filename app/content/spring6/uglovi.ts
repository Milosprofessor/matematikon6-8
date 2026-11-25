import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-uglovi",
  title: "Četvorougao, dijagonale, uglovi i obim",
  month: "march",
  aim: "Razlikuj susedne i naspramne elemente i obrazloži zbir uglova.",
  intro: "Obiđi četvrtasti teren po ivici i vrati se na početak. Prešao si obim, a nijednom nisi morao ići dijagonalom.",
  rules: ["Jednostavan četvorougao ABCD ima četiri stranice poređane duž granice. Dijagonale AC i BD spajaju nesusedna temena. U konveksnom četvorouglu obe su unutar figure.","Dijagonala deli konveksni četvorougao na dva trougla. Svi njihovi uglovi zajedno čine unutrašnje uglove četvorougla. Po jedan susedni spoljašnji ugao dopunjuje unutrašnji do 180°.","Za obim sabiraj samo stranice. Slobodan crtež nije dokaz da su dve dužine jednake."],
  formulas: ["α+β+γ+δ=360°","O=a+b+c+d"],
  skills: ["dijagonale", "elementi", "zbir-uglova", "obim", "nepoznat-ugao", "suplement", "nepoznata-stranica", "sabiranje-uglova", "proporcija", "unutrašnja-ivica", "kontraprimer"],
  worked: [{"question":"Tri ugla su 72°, 108° i 95°. Koliki je četvrti?","steps":["Povuci dijagonalu i saberi dva zbira po 180°. Unutrašnji zbir je 360°.","Poznati uglovi daju 275°, pa je četvrti 360°−275°=85°."]},{"question":"Četvorougao ima stranice 4, 6, 7 i 5 cm, a jednu dijagonalu 8 cm. Odredi obim.","steps":["Granica se sastoji od četiri stranice. Dijagonala prolazi kroz unutrašnjost.","O=4+6+7+5=22 cm."]},{"question":"Dva ugla su prava, treći je dvostruko veći od četvrtog.","steps":["Posle dva prava ugla preostaje 180°. Ako je četvrti x, treći je 2x.","3x=180° daje x=60° i 2x=120°. Provera: 90+90+120+60=360."]}]
}, [
  ["Koliko dijagonala ima četvorougao?","2","Nabroj parove nesusednih temena.","To su AC i BD, ukupno dve."],
  ["Koja je naspramna stranica stranici AB u ABCD?",["CD","BC","DA"],"Naspramne nemaju zajedničko teme.","BC deli B, DA deli A, a CD ne deli nijedno teme."],
  ["Zbir unutrašnjih uglova konveksnog četvorougla u stepenima?","360","Podeli ga na dva trougla.","2·180°=360°."],
  ["Koliki je obim u cm ako su stranice 2, 3, 4 i 3 cm?","12","Obiđi granicu figure.","O=2+3+4+3=12 cm."],
  ["Tri ugla imaju 84°, 77° i 112°. Koliko stepeni ima četvrti?","87","Poznate uglove saberi.","360−(84+77+112)=87."],
  ["Spoljašnji ugao konveksnog četvorougla je 65°. Koliki je susedni unutrašnji u stepenima?","115","Zajedno grade opruženi ugao.","180−65=115."],
  ["Obim je 21 cm, tri stranice su 4,5 cm, 6 cm i 3,5 cm. Koliko cm ima četvrta?","7","Oduzmi sve poznate stranice.","21−(4,5+6+3,5)=7 cm."],
  ["Dijagonala AC deli ugao A na 32° i 43°. Koliko stepeni ima unutrašnji ugao A?","75","Dva dela pripadaju istom uglu.","32°+43°=75°."],
  ["Uglovi su u odnosu 2:3:3:4. Koliko stepeni ima najveći?","120","Odredi meru jednog dela.","Dvanaest delova imaju 360°. Jedan je 30°, najveći četiri dela ili 120°."],
  ["Dijagonala je 6 cm. Obimi nastala dva trougla su 17 cm i 19 cm. Koliko cm iznosi obim četvorougla?","24","Dijagonala se pojavila u oba obima.","17+19=36 uključuje 2·6. O=36−12=24 cm."],
  ["Može li konveksni četvorougao imati četiri tupa ugla?",["Ne","Da"],"Uporedi njihov zbir sa četiri prava ugla.","Svaki bi bio veći od 90°. Zbir bi prešao 360°."],
  ["U ABCD koji je ugao naspram ugla B?",["D","A","C"],"Prati redosled oko granice.","A i C su susedna temena temenu B. Preostalo je D."],
  ["Četiri jednaka unutrašnja ugla imaju po koliko stepeni?","90","Podeli ukupan zbir.","360°:4=90°."],
  ["Dva ugla su po 70°, druga dva su jednaka. Koliki je svaki od njih?","110","Najpre oduzmi dva poznata.","(360−140):2=110°."],
  ["Od 30 m ograde ostaje 2 m. Tri strane dvorišta su 6, 7 i 8 m. Četvrta ima koliko m?","7","Prvo nađi potrošenu ogradu.","Obim je 28 m, pa je četvrta strana 28−21=7 m."],
  ["Spoljašnji uglovi konveksnog četvorougla po jedan pri svakom temenu imaju zbir koliko stepeni?","360","Od četiri opružena ugla oduzmi sve unutrašnje.","4·180°−360°=360°."]
]);

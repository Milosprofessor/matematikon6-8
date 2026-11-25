import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-podaci",
  title: "Tabele, dijagrami i tumačenje podataka",
  month: "february",
  aim: "Predstavi iste podatke tabelom i dijagramom, izračunaj prosečnu vrednost i obrazloži zaključak.",
  intro: "Školska biblioteka beleži koliko je knjiga pozajmljeno. Broj za jedan dan i ukupan broj tokom nedelje odgovaraju različitim pitanjima.",
  rules: ["Tabela tačno navodi vrednosti. Visina stuba prikazuje veličinu jedne grupe, a dva susedna stuba omogućavaju poređenje grupa istog dana. Linijski prikaz ističe kretanje veličine kroz vreme.","Za prosek saberi sva merenja i podeli njihovim brojem, uključujući i nulu. Kod tačkastog dijagrama svaka tačka predstavlja jedno merenje ili par vrednosti. Sam spoj tačaka ne dokazuje šta se stvarno dogodilo između merenja.","Uvek pogledaj gde počinje skala i koliko vredi jedan podeok. Najviši stub označava najveću vrednost, dok najveći porast traži poređenje uzastopnih vrednosti."],
  formulas: ["prosek=zbir : broj merenja"],
  skills: ["broj-merenja", "skala", "izbor-prikaza", "zbir", "prosek", "poređenje-grupa", "promena", "interpolacija", "nedostajuća-vrednost", "grupni-prosek", "početak-skale"],
  worked: [{"question":"U ponedeljak, utorak i sredu pozajmljeno je 8, 12 i 10 knjiga. Kako nacrtati stubove?","steps":["Na vodoravnoj osi napiši dane, a na uspravnoj broj knjiga sa jednakim korakom 2 od nule.","Stubovi su visoki 4, 6 i 5 podeoka. Najviše knjiga pozajmljeno je u utorak."]},{"question":"U 8, 12 i 16 sati temperatura je bila 4, 10 i 7 °C. Na kom delu linija opada?","steps":["Na osi vremena sva tri merenja imaju jednak razmak od četiri sata. Ubeleži tačke (8, 4), (12, 10), (16, 7).","Od podneva do 16 sati promena je 7−10=−3 °C. Ne možemo utvrditi tačnu temperaturu u 14 sati bez dodatne pretpostavke."]},{"question":"Za četiri dana pozajmljeno je 6, 0, 10 i 8 knjiga. Odredi prosek.","steps":["Ukupan broj je 6+0+10+8=24. Broj dana je četiri, jer i dan bez pozajmica pripada posmatranju.","24:4=6 knjiga dnevno u proseku. To ne znači da je svaki dan pozajmljeno baš šest."]}]
}, [
  ["Pet dana posmatraš temperaturu. Koliko tačaka ucrtaš ako imaš po jedno merenje dnevno?","5","Svako merenje daje po jedan par dan–temperatura.","Pet različitih dana znači pet različitih parova."],
  ["Jedan podeok je 3 knjige. Stub od 6 podeoka označava koliko knjiga?","18","Pomnoži visinu u podeocima i vrednost podeoka.","6·3=18 knjiga."],
  ["Za poređenje broja učenika u tri različita kluba izaberi prikaz.",["Stubičasti dijagram","Linija koja predstavlja protok vremena"],"Da li nazivi klubova čine vremenski niz?","Klubovi su kategorije. Odvojen stub za svaki klub omogućava poređenje."],
  ["U tri dana pročitano je 5, 7 i 9 stranica. Koliki je zbir?","21","Saberi vrednosti, bez deljenja.","5+7+9=21 stranica."],
  ["U tabeli su temperature −2°, 1°, 4°. Kolika je prosečna temperatura u °C?","1","U zbir uvrsti znake.","(−2+1+4):3=3:3=1 °C."],
  ["U ponedeljak je odeljenje A pozajmilo 12 knjiga, B osam. U utorak A sedam, B deset. Koliko više knjiga ima A ukupno nego B?","1","Formiraj dva zbira.","A ima 19, B ima 18 knjiga. Razlika je jedna."],
  ["Vrednosti su 3, 9, 8 i 12. Najveći porast između susednih merenja iznosi koliko?","6","Uporedi tri promene, a ne četiri vrednosti.","Promene su +6, −1 i +4. Najveći porast je 6."],
  ["Grafik pokazuje samo u 9 i 11 sati nivo vode od 2 m i 4 m. Da li je nivo u 10 sati sigurno bio 3 m?",["Ne","Da"],"Da li piše da je promena ravnomerna?","Imamo samo dva merenja. Srednja vrednost u vremenu važi za ravnomernu promenu."],
  ["Prosečno su za 4 dana prodate 23 karte dnevno. Prva tri dana prodato je 18, 25 i 27. Koliko četvrtog dana?","22","Iz proseka izračunaj ukupan broj.","4·23=92. Poznata prodaja je 70, pa ostaju 22 karte."],
  ["Četiri učenika čitala su prosečno po 12 stranica, a druga dva po 6. Koliki je zajednički prosek svih šest učenika?","10","Ponderiši brojem učenika u svakoj grupi.","Ukupno je 4·12+2·6=60 stranica. Prosek je 60:6=10."],
  ["Skala na grafikonu počinje od 50, a vrh stuba je tri podeoka po 5 iznad te oznake. Koju vrednost predstavlja vrh?","65","Dodaj početnu vrednost.","50+3·5=65."],
  ["Temperatura se promenila sa −1 na 5 °C pa pala na 3 °C. Kolika je promena od prvog do poslednjeg merenja u °C?","4","Poredi krajnje i početno stanje.","3−(−1)=4 °C."],
  ["U nizu od pet dana jedan je imao nula poseta. Sa kojim brojem deliš zbir za prosek svih pet dana?","5","Razlikuj nedostajući podatak i izmerenu nulu.","Poznato je svih pet merenja. Delilac je pet."],
  ["U prvom odeljenju čita 8 od 16 učenika, u drugom 12 od 24. Gde je veće procentualno učešće?",["Jednako je","U prvom","U drugom"],"Poredi udele, ne visine stubova za sirove brojeve.","8:16=12:24=0,5. U obe grupe učešće je 50%."],
  ["Prosečna temperatura u tri merenja je 2 °C. Dve vrednosti su −1 i 6 °C. Treća u °C?","1","Zbir svih merenja je tri puta prosek.","Ukupan zbir je 6. Nedostaje 6−(−1+6)=1 °C."],
  ["U tabeli su vremena 0, 2 i 5 sati uz rastojanja 0, 8 i 20 km. Kolika je prosečna brzina za ceo put u km na sat?","4","Koristi ukupan put i ukupno vreme.","20:5=4 km na sat. Obe pojedinačne deonice imaju i isti količnik."]
]);


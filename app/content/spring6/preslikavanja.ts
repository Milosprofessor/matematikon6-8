import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-preslikavanja",
  title: "Osna i centralna simetrija i translacija",
  month: "february",
  aim: "Konstruiši sliku figure i obrazloži zašto je podudarna sa polaznom.",
  intro: "Papir možeš presaviti duž prave, okrenuti za pola kruga ili paralelno pomeriti. U sva tri slučaja slika zadržava veličinu.",
  rules: ["U osnoj simetriji prava je simetrala duži između tačke izvan ose i njenog lika. Kroz tačku povuci normalu i sa druge strane ose prenesi jednako rastojanje. Tačke na osi ostaju na mestu.","U centralnoj simetriji centar je sredina između tačke i slike. Kod translacije svako teme pomeri istim vektorom. Preslikaj sva temena pa spoji odgovarajuća: dužine i uglovi ostaju jednaki.","Kod osne simetrije pomeraji različitih tačaka mogu imati različite dužine. Kod translacije svaka tačka ima isti pomeraj."],
  formulas: ["(x, y) → (x, −y) ∶ osa x","(x, y) → (−x, −y) ∶ centar O"],
  skills: ["osa", "normalnost", "dužina", "odraz", "udaljenost", "središte", "translacija", "involucija", "redosled", "kontraprimer", "fiksna-tačka"],
  worked: [{"question":"Nacrtaj sliku trougla ABC preko prave p kroz A.","steps":["Tačka A ostaje na mestu. Iz B i C spusti normale na p. Na svakoj normali prenesi isto rastojanje iza ose.","Spoji A, B′ i C′. Presavijanjem oko p se poklapaju odgovarajuće stranice i uglovi."]},{"question":"Centralno preslikaj T(−2, 3) oko S(1, 1).","steps":["Od T do S ideš 3 udesno i 2 nadole. Ponovi isti pomeraj iz S.","Dobijaš T′(4, −1). S je na pola puta, pa je konstrukcija ispravna."]},{"question":"Pomeri trougao sa temenima (0, 1), (2, 1), (0, 4) za 2 ulevo i 3 nagore.","steps":["Od svake apscise oduzmi 2, svakoj ordinati dodaj 3.","Nova temena su (−2, 4), (0, 4), (−2, 7). Katete su i dalje duge 2 i 3 jedinice."]}]
}, [
  ["Tačka leži na osi simetrije. Gde je njena slika?",["U istoj tački","Na dvostrukom rastojanju","U koordinatnom početku"],"Koliko je rastojanje do ose?","Nula preneta na drugu stranu i dalje daje istu tačku."],
  ["Koliki je ugao u stepenima između ose i duži koja spaja tačku izvan ose i njen lik?","90","Osa je simetrala te duži.","Simetrala seče duž pod pravim uglom."],
  ["Duž od 3,7 cm se preslika centralnom simetrijom. Dužina slike u cm?","3,7","Da li se pri poluokretu figura rasteže?","Poluokret čuva dužinu pa slika ima 3,7 cm."],
  ["Preslikaj (4, −2) preko ose x. Nova ordinata?","2","Zadrži apscisu, promeni vertikalni smer.","Druga tačka je 2 jedinice iznad ose: (4, 2)."],
  ["Tačka je 2,2 cm udaljena od ose. Koliko cm prelazi do osnosimetričnog lika?","4,4","Osa se nalazi na pola puta.","Ukupno rastojanje je 2·2,2=4,4 cm."],
  ["Apscise tačke i njenog centralnog lika su −5 i 9. Kolika je apscisa centra?","2","Centar je središte para.","Prosek apscisa je (−5+9):2=2."],
  ["Pri translaciji A(2, 3) pređe u (−1, 7). Istom translacijom preslikaj B(6, 0). Kolika je apscisa njene slike?","3","Prvo odredi horizontalni pomeraj.","Po horizontali pomeraj je −1−2=−3, dok vertikalni pomeraj ne utiče na apscisu. Zato je nova apscisa B jednaka 6−3=3."],
  ["Ako isti trougao dva puta preslikaš preko iste prave, šta dobijaš?",["Početni trougao","Upola manji trougao","Tačku"],"Prati samo jedno teme.","Prvi odraz ga prenosi na drugu stranu. Drugi ga vraća, kao i svako drugo teme."],
  ["A(2, 1) preslika se preko ose y, pa se slika pomeri 5 udesno. Koja je konačna apscisa?","3","Izvrši operacije zadatim redom.","Odraz daje −2, pa pomeraj daje −2+5=3."],
  ["Neko tvrdi da su dve različite tačke na istoj strani ose jedna drugoj osnosimetrične. Da li je moguće?",["Ne","Da"],"Gde treba da se nalazi sredina spojnice?","Osa mora razdvajati tačku i njen različit lik. Na istoj strani taj uslov nije ispunjen."],
  ["Koliko tačaka ostaje na mestu pri centralnoj simetriji cele ravni?","1","Ako se tačka poklopi sa likom, gde je sredina?","Jedino sam centar ostaje na mestu."],
  ["Posle translacije za 5 udesno i 4 nadole završavaš u (2, −1). Kolika je početna ordinata?","3","Vrati vertikalni pomeraj.","Ako je y−4=−1, onda y=3."],
  ["A(1, 4) i A′(7, 4) su centralno simetrične. Kolika je apscisa centra?","4","Centar je na sredini između 1 i 7.","1+(7−1):2=4."],
  ["Koje preslikavanje čuva sve tačke jedne cele prave na mestu?",["Osna simetrija oko te prave","Centralna simetrija","Translacija za nenulti vektor"],"Proveri tačke koje su na osi.","Rastojanje svake od njih do ose je nula pa ostaje na mestu."],
  ["U simetričnim trouglovima uglovi koji odgovaraju imaju zbir 124°. Koliki je jedan u stepenima?","62","Podudarnost čuva odgovarajuće uglove.","Dva jednaka ugla daju 124°, pa je svaki 62°."],
  ["A se translacijom pomeri 3 desno i 2 gore, zatim centralno preslika oko O. Početna A je (−1, 4). Koja je konačna ordinata?","-6","Posle translacije promeni znak obe koordinate.","Međupoložaj je (2, 6). Centralni lik je (−2, −6)."]
]);

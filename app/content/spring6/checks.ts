import type { Level, Task } from "../types";
import { question, type Row } from "./lesson";
import { springAreas } from "./index";

export type CheckItem = Task & { lessonId: string };
export type SpringCheck = {
  id: string; title: string; areaId: string; lessonId?: string; items: CheckItem[];
};
type TestRow = [lessonId: string, level: Level, ...row: Row];
function finalCheck(id: string, title: string, rows: TestRow[]): SpringCheck {
  return { id, title, areaId: "s6-zavrsnica", items: rows.map(([lessonId, level, ...row], i) => ({
    ...question(id + "-" + (i+1), title, level, row, i+1), lessonId,
  })) };
}

export const finals = [
  finalCheck("s6-polugodiste", "Provera drugog polugodišta", [
    ["s6-koordinate","basic","Kolika je ordinata tačke na osi x udaljene 7 jedinica od početka?","0","Postoje dve takve tačke.","Obe su na osi x i zato imaju y=0."],
    ["s6-konstrukcije","basic","Ugao od 150° prepolovljen je simetralom. Koliko stepeni ima jedan deo?","75","Oba dela su jednaka.","150°:2=75°."],
    ["s6-paralelogram","basic","Dijagonale pravougaonika se seku u S. AC=18 cm. Koliko cm ima DS?","9","Najpre nađi BD.","BD=AC=18 cm, a S je sredina. DS=9 cm."],
    ["s6-zavisnost","medium","Osam jednakih prskalica zalije teren za 45 minuta. Koliko minuta treba šest jednakih prskalica?","60","Posao ostaje isti.","8·45=360 minuta jedne prskalice. Za šest je 360:6=60 minuta."],
    ["s6-razmera","medium","Na karti 1:40000 trasa je duga 7,5 cm. Dužina u km?","3","Prevedi centimetre u kilometre.","7,5·40000=300000 cm=3 km."],
    ["s6-vektori","medium","Pomeraj od A(−3, 1) do B(1, 4) prenesi iz P(2, −5). Kolika je ordinata kraja?","-2","Nađi vertikalni deo pomeraja.","Od 1 do 4 ide se 3 nagore. Iz P dolaziš na −5+3=−2."],
    ["s6-procenti","medium","Knjiga sa popustom od 20% košta 640 dinara. Koliko dinara iznosi sam popust?","160","Prvo vrati početnu cenu.","640:0,8=800. Razlika je 800−640=160 dinara."],
    ["s6-trougao-trapez","advanced","Trapez ima visinu 6 cm, površinu 66 cm² i razliku osnovica 4 cm. Koliko cm ima duža?","13","Iz površine nađi zbir osnovica.","a+b=2·66:6=22. Veća je (22+4):2=13 cm."],
    ["s6-podudarnost","medium","Za centar upisane kružnice izabrana je tačka jednako udaljena od sva tri temena. Koji je pravi uslov za unutrašnju tačku?",["Jednake udaljenosti od sve tri prave stranica","Jednake udaljenosti od tri temena","Jednake dužine stranica"],"Razmisli gde su dodirne tačke.","Poluprečnik do svake dodirne tačke je normalan na stranicu. Potrebne su jednake normalne udaljenosti."],
    ["s6-delovi","advanced","Romb na prozoru ima dijagonale 30 i 24 cm. Okolo je pravougaono staklo 40 sa 30 cm. Koliko cm² zauzima deo stakla izvan romba?","840","Oduzmi površinu romba od cele ploče.","Ploča ima 1200 cm². Romb ima 30·24:2=360 cm², pa ostaje 840 cm²."],
  ]),
  finalCheck("s6-godisnja", "Završna provera šestog razreda", [
    ["apsolutna-vrednost","basic","Koliko je rastojanje brojeva −13 i −5 na brojevnoj pravoj?","8","Dužina je pozitivna.","Od −13 do −5 krećeš se osam koraka udesno."],
    ["q-proizvod","basic","Koliki je proizvod brojeva −0,8 i −2,5?","2","Najpre odredi znak.","Dva negativna činioca daju pozitivan proizvod. 0,8·2,5=2."],
    ["s6-uglovi","basic","Uglovi četvorougla su 91°, 89°, 103° i x. Koliko stepeni ima x?","77","Ukupan zbir je dvostruki zbir u trouglu.","360−91−89−103=77°."],
    ["q-deljenje-izrazi","medium","Izračunaj (1,2−2) : (−0,4) + [[frac:1|2]].","2,5","Prvo računaj zagradu.","−0,8:(−0,4)=2. Saberi 2+0,5=2,5."],
    ["q-nejednacine","medium","Koliko nenegativnih celih brojeva zadovoljava −2x>−7?","4","Po deljenju negativnim brojem promeni smer.","x<3,5. Odgovaraju 0, 1, 2 i 3."],
    ["s6-podudarnost","medium","U △ABC≅△RPQ su AB=5, BC=7, AC=8 cm. Koliko cm ima stranica RQ?","8","Upari prvo i treće teme.","A odgovara R, C odgovara Q. Zato RQ=AC=8 cm."],
    ["s6-procenti","medium","Četvrtinu od 64 učenika čine šestaši. Od njih 75% dolazi pešice. Koliko šestaša dolazi pešice?","12","Izdvoj grupu na koju se procenat odnosi.","Šestaša je 64:4=16. Tri četvrtine od 16 su 12."],
    ["s6-merenje","medium","Koliko kvadratnih decimetara čini 3500 cm²?","35","Jedan dm² sadrži 100 cm².","3500:100=35 dm²."],
    ["s6-trapez","advanced","Tačke M i N su sredine krakova trapeza. MN=14 cm, manja osnovica je polovina veće. Koliko cm ima veća?","56/3","Zbir osnovica je dvostruka srednja linija.","Ako je veća x, onda x+x:2=28. Pomnoži sa 2: 3x=56. Veća je 56/3 cm."],
    ["s6-koordinate","advanced","Koordinate su A(−2, −1), B(4, −1), C(1, 2). Kolika je površina trougla u kvadratnim jedinicama?","9","Za osnovicu izaberi horizontalnu duž.","AB=6. Visina je 2−(−1)=3. P=6·3:2=9."],
  ]),
  finalCheck("s6-izazov", "Napredna problemska provera", [
    ["s6-razmera","medium","Za osam porcija koristi se 0,6 kg brašna. Koliko grama treba za deset porcija?","750","Iz kilograma pređi u grame pa svedi na porciju.","600:8=75 g po porciji. Za deset treba 750 g."],
    ["s6-trapez","medium","Trapez osnovica 9 i 17 cm podeljen je srednjom linijom. Koliko cm ima srednja linija manjeg trapeza uz kraću osnovicu?","11","Prva srednja linija postaje osnovica manjeg trapeza.","Prva je (9+17):2=13 cm. Nova je (9+13):2=11 cm."],
    ["s6-model","advanced","Na kartici je 500 dinara. Posle fiksne naknade od 35 dinara svaka vožnja košta 62,5 dinara. Koliko najviše vožnji možeš platiti?","7","Napiši nejednačinu i proveri sledeću celobrojnu vrednost.","35+62,5x≤500 daje x≤7,44. Sedam vožnji staje, osam prelazi iznos."],
    ["s6-procenti","advanced","Posle povećanja od 25% i sniženja od 10% cena je 900 dinara. Kolika je bila na početku?","800","Računaj unazad od poslednje promene.","Pre sniženja bilo je 900:0,9=1000 dinara. Pre rasta bilo je 1000:1,25=800."],
    ["s6-zavisnost","advanced","Četvoro ljudi završi posao za 9 dana. Rade zajedno tri dana, zatim dvoje odlazi. Koliko dana ukupno traje posao uz isti učinak?","15","Rad meri danima jedne osobe.","Potrebno je 36 radnih dana. Posle 12 ostaju 24. Dvoje radi još 12 dana, ukupno 3+12=15."],
    ["s6-merenje","advanced","Paralelogram ima stranice u odnosu 3:2. Visina na kraću je 9 cm. Visina na dužu u cm?","6","Dva proizvoda daju istu površinu.","Za stranice 3k i 2k važi 3k·h=2k·9. Deljenjem sa 3k dobijaš 6 cm."],
    ["s6-podudarnost","advanced","Svaka od dve kružnice poluprečnika 5 cm prolazi kroz centar druge. Spoji oba centra i jednu zajedničku tačku. Koliki je obim tog trougla u cm?","15","Uporedi svaku stranicu sa poluprečnikom.","Rastojanje centara je 5 cm, a zajednička tačka je od oba udaljena 5 cm. Obim je 3·5=15 cm."],
    ["s6-delovi","advanced","Staza široka 1 m ide oko spoljne strane bašte 8 m sa 6 m. Ploče pokrivaju po 0,4 m². Koliko ploča odgovara površini staze bez otpada?","80","Dodaj širinu staze na oba kraja svake dimenzije.","Spolja je 10·8=80 m², bašta ima 48 m². Za 32 m² treba 32:0,4=80 ploča."],
    ["s6-trougao-trapez","advanced","Dijagonala trapeza deli ga na trouglove površina 24 i 40 cm². Kraća osnovica je 6 cm. Kolika je duža u cm?","10","Trouglovi imaju istu visinu između osnovica.","Manji daje h=2·24:6=8 cm. Duža osnovica je 2·40:8=10 cm."],
    ["s6-koordinate","advanced","Pravougaonik ima A(−4, −2), B(2, −2), a gornja stranica je iznad ose x. Površina je 30. Kolika je ordinata gornje stranice?","3","Visinu odmeri od donje stranice.","AB=6. Visina je 30:6=5, pa je nova ordinata −2+5=3."],
  ]),
];

const areaProblems: Record<string, [string, ...Row]> = {
  "s6-primene": ["s6-model", "Tri jednaka paketa i poštarina od 87 dinara koštaju 900 dinara. Koliko dinara košta jedan paket?", "271", "Najpre izdvoj samo cenu robe.", "(900−87):3=813:3=271 dinar."],
  "s6-trouglovi": ["s6-podudarnost", "Dva podudarna trougla dele stranicu od 8 cm. Svaki ima obim 21 cm. Koliki je obim u cm njihove unije ako nemaju drugih zajedničkih tačaka van te stranice?", "26", "Zajednička stranica je unutar nove figure.", "2·21−2·8=26 cm. Dvaput oduzimamo zajedničku stranicu jer je bila u oba obima."],
  "s6-odnosi": ["s6-procenti", "Karta u pretprodaji košta 80% redovne cene. Tri takve karte koštaju 960 dinara. Kolika je redovna cena jedne?", "400", "Izdvoj jednu kartu, zatim vrati osnovicu.", "960:3=320. To je 0,8 redovne cene, pa je puna cena 320:0,8=400 dinara."],
  "s6-cetvorouglovi": ["s6-trapez", "Obim jednakokrakog trapeza je 40 cm, a srednja linija 13 cm. Koliko cm ima jedan krak?", "7", "Koliko iznose osnovice zajedno?", "Zbir osnovica je 2·13=26. Dva jednaka kraka zajedno imaju 14 cm, dakle po 7 cm."],
  "s6-povrsine": ["s6-delovi", "Okvir i slika zajedno imaju oblik kvadrata stranice 12 cm. Slika je kvadrat stranice 8 cm. Površina okvira u cm²?", "80", "Uporedi dva kvadrata.", "P=12²−8²=144−64=80 cm²."],
  "s6-zavrsnica": ["s6-sinteza", "Trasa na karti 1:20000 ima 5 cm. Koliko minuta treba pešaku koji ravnomerno pređe 4 km za sat?", "15", "Prvo odredi stvarni put.", "Trasa ima 100000 cm=1 km. To je četvrtina od 4 km, pa hod traje 60:4=15 minuta."],
};
export const springChecks = new Map<string, SpringCheck>();
for (const area of springAreas) {
  const items: CheckItem[] = [];
  for (const lesson of area.lessons) {
    const attach = (task: Task) => ({...task, lessonId: lesson.id});
    const id = lesson.id + "-mini";
    springChecks.set(id, {id, areaId: area.id, lessonId: lesson.id, title: "Mini-provera • " + lesson.title, items: lesson.mini!.map(attach)});
    items.push(...lesson.areaQuestions!.map(attach));
  }
  const [lessonId, ...row] = areaProblems[area.id];
  items.splice(1, 0, {...question(area.id+"-primena", area.title, "medium", row, 1), lessonId});
  springChecks.set(area.id, {id: area.id, areaId: area.id, title: "Provera oblasti • " + area.title, items});
}
for (const check of finals) springChecks.set(check.id, check);

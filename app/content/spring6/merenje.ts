import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-merenje",
  title: "Površina kvadrata, pravougaonika i paralelograma",
  month: "may",
  aim: "Objasni proizvod osnovice i visine i uskladi merne jedinice.",
  intro: "Kvadrat površine 1 cm² ima stranicu 1 cm. Brojanjem takvih kvadrata meriš koliko ravni pokriva figura.",
  rules: ["Pravougaonik dužine a i širine b ima površinu ab, a kvadrat stranice a ima a². Ako se jedinica dužine promeni deset puta, jedinica površine menja se sto puta: 1 dm²=100 cm².","Od paralelograma odseci trougao uz visinu i premesti ga bez rastezanja na suprotni kraj. Dobijeni pravougaonik ima istu osnovicu i visinu. Pomereni delovi imaju istu površinu kao pre.","Kosa stranica i visina imaju različite uloge. Uz izabranu osnovicu uzmi normalno rastojanje do paralelne stranice."],
  formulas: ["P=ab","P=a²","P=a·h_a"],
  skills: ["kvadrat", "pravougaonik", "jedinice", "visina", "obrnuti-račun", "mešane-jedinice", "obim-površina", "jednakost-površina", "dve-visine", "popločavanje", "promena-faktora"],
  worked: [{"question":"Paralelogram ima a=8 cm, b=5 cm i visinu na a od 3 cm. Kolika je površina?","steps":["Zamisli preslaganje u pravougaonik: osnovica ostaje 8 cm, a širina je visina 3 cm.","P=a·h_a=8·3=24 cm². Dužina kose stranice ne ulazi u taj proizvod."]},{"question":"Koliko cm² ima 0,6 dm²?","steps":["Kvadrat stranice 1 dm ima deset redova po deset jediničnih kvadrata sa stranicom 1 cm.","1 dm²=100 cm², pa je 0,6 dm²=60 cm²."]},{"question":"Pravougaonik ima površinu 54 m² i dužinu 9 m. Koliki je obim?","steps":["P=ab daje 54=9b, zato je b=6 m.","O=2(a+b)=2·15=30 m. Površina je u kvadratnim metrima, obim u metrima."]}]
}, [
  ["Kvadrat ima stranicu 7 cm. Koliko cm² je površina?","49","Pomnoži stranicu samom sobom.","P=a²=7·7=49 cm²."],
  ["Pravougaonik je dug 8 m i širok 3 m. Površina u m²?","24","Zamisli tri reda po osam kvadrata.","P=ab=8·3=24 m²."],
  ["Koliko cm² ima 2 dm²?","200","Kvadrat sa stranicom 10 cm ima sto cm².","2·100=200 cm²."],
  ["Koja duž pripada formuli P=a·h_a?",["Visina na a","Bilo koja dijagonala","Obim"],"Koje rastojanje postaje širina pravougaonika?","To je normalno rastojanje između paralelnih pravih osnovica."],
  ["Paralelogram ima površinu 63 cm² i osnovicu 7 cm. Visina u cm?","9","Uvrsti u P=a·h_a.","63=7h_a, pa h_a=9 cm."],
  ["Ćilim je 2 m dug i 75 cm širok. Površina u m²?","1,5","Prevedi centimetre u metre.","75 cm=0,75 m. P=2·0,75=1,5 m²."],
  ["Obim kvadrata je 20 cm. Koliko cm² ima površina?","25","Najpre iz obima do stranice.","a=20:4=5 cm. P=5²=25 cm²."],
  ["Dva paralelograma imaju jednake osnovice i leže između istih paralelnih pravih. Ko ima veću površinu?",["Površine su jednake","Onaj sa dužim krakom","Onaj sa manjim uglom"],"Uporedi njihove visine.","Rastojanje između paralelnih pravih je isto. Jednaki proizvodi daju jednake površine."],
  ["Paralelogram ima a=12 cm, h_a=4 cm i b=8 cm. Nađi visinu na b u cm.","6","Površinu izrazi na dva načina.","P=12·4=48 cm². Iz 8h_b=48 sledi h_b=6 cm."],
  ["Prostorija je 3 m sa 4 m. Pločica je kvadrat stranice 50 cm. Koliko celih pločica pokriva pod bez sečenja?","48","Prebroj redove i kolone.","Na stranicu od 3 m staje 6 pločica, a na 4 m staje 8. Ukupno 6·8=48."],
  ["Paralelogram udvostruči osnovicu, a prepolovi odgovarajuću visinu. Koliki je odnos nove površine prema staroj?","1","Prati oba činioca proizvoda.","(2a)·(h:2)=ah. Odnos je 1."],
  ["Koliko m² ima 1,2 hektara?","12000","Hektar je kvadrat 100 m sa 100 m.","1 ha=10000 m², pa 1,2 ha=12000 m²."],
  ["Pravougaonik površine 0,24 m² ima širinu 4 dm. Koliko dm je dužina?","6","Rad u decimetrima traži dm².","0,24 m²=24 dm². Dužina je 24:4=6 dm."],
  ["Kvadrat i pravougaonik 2 cm sa 8 cm imaju jednake površine. Koliko cm ima stranica kvadrata?","4","Potraži pozitivan broj čiji je kvadrat jednak površini.","P=16 cm², a 4·4=16."],
  ["Bašta ima površinu 3 ara. Za travu treba 20 g semena po m². Koliko kg treba?","6","Ar ima sto kvadratnih metara.","300·20=6000 g, odnosno 6 kg."],
  ["Paralelogram ima osnovicu 9 cm i visinu 5 cm. Pri nepromenjenoj osnovici visina poraste za 2 cm. Koliki je prirast površine u cm²?","18","Uporedi proizvode pre i posle.","9·7−9·5=9·2=18 cm²."]
]);

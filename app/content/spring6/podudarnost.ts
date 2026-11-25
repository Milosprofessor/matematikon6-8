import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-podudarnost",
  title: "Podudarnost, simetrija i kružnice trougla",
  month: "february",
  aim: "Upari odgovarajuća temena i konstruiši centre upisane i opisane kružnice.",
  intro: "Dva isečena trougla možeš poklopiti i kada jedan treba okrenuti na drugu stranu.",
  rules: ["Podudarni trouglovi imaju jednake odgovarajuće stranice i uglove. Dovoljni su SSS, SUS, USU ili SSU ako je ugao naspram veće od dve date stranice. Osna i centralna simetrija čuvaju dužine i uglove.","Presek simetrala stranica jednako je udaljen od temena i daje centar opisane kružnice. Presek simetrala uglova jednako je udaljen od pravih stranica i daje centar upisane kružnice. Za visinu povuci normalu iz temena na pravu naspramne stranice.","Visina može pasti na produžetak stranice. Poluprečnik upisane kružnice meri se normalno do stranice."],
  formulas: ["△ABC≅△DEF ⇒ AB=DE","OA=OB=OC"],
  skills: ["korespondencija", "opisana", "upisana", "normala", "kontraprimer", "centralna-simetrija", "osna-simetrija", "prečnik", "dokaz", "radijus", "zbir-uglova"],
  worked: [{"question":"Ako je △ABC≅△PQR, BC=7 cm i ∠A=36°, šta znaš o drugom trouglu?","steps":["Redosled daje parove A–P, B–Q i C–R.","Zato je QR=7 cm i ∠P=36°. Duž PR odgovara duži AC."]},{"question":"Kako konstruisati opisanu kružnicu?","steps":["Iz krajeva AB opiši jednake lukove iznad i ispod AB i spoji preseke. Ponovi za BC. Presek simetrala označi O.","Po prvoj simetrali OA=OB, po drugoj OB=OC. Kružnica sa centrom O i poluprečnikom OA prolazi kroz sva temena."]},{"question":"Kako upisati kružnicu u trougao?","steps":["Konstruiši simetrale dva unutrašnja ugla i označi presek I. Iz I spusti normalu na jednu stranicu do tačke T.","IT je udaljenost centra od svake stranice. Kružnica sa centrom I i poluprečnikom IT dodiruje sve tri."]}]
}, [
  ["Ako je △ABC≅△KLM, koja duž odgovara AC?",["KM","KL","LM"],"Prati prvo i treće mesto.","A odgovara K, a C odgovara M. Zato AC odgovara KM."],
  ["Opisanoj kružnici pripadaju sva tri šta?",["Temena","Središta stranica","Centra stranica"],"Kuda prolazi opisana kružnica?","Po konstrukciji prolazi kroz A, B i C."],
  ["Gde se seku simetrale unutrašnjih uglova?",["U centru upisane kružnice","U centru opisane kružnice","U temenu"],"Šta meri simetrala ugla?","Njene tačke jednako su udaljene od krakova. Presek je centar upisane kružnice."],
  ["Koji ugao visina gradi sa pravom osnovice, u stepenima?","90","Priseti se normale.","Visina pripada normali, pa je ugao prav."],
  ["Dva trougla imaju uglove 40°, 60°, 80°. Da li moraju biti podudarni?",["Ne","Da"],"Može li se crtež uvećati?","Uvećanje čuva sve uglove, a menja dužine stranica."],
  ["Tačka A je 3,5 cm od centra simetrije S. Koliko cm je AA′?","7","S je sredina duži AA′.","AS=SA′=3,5 cm, pa je AA′=7 cm."],
  ["Tačka i njen osnosimetrični lik razmaknuti su 9 cm. Koliko cm je tačka udaljena od ose?","4,5","Osa polovi duž pod pravim uglom.","Udaljenost je polovina duži, 9:2=4,5 cm."],
  ["Opisana kružnica pravouglog trougla ima hipotenuzu kao prečnik dužine 14 cm. Koliki je poluprečnik u cm?","7","Prečnik prolazi kroz centar.","Poluprečnik je polovina prečnika, 14:2=7 cm."],
  ["U jednakokrakom ABC je AC=BC, a M sredina AB. Koji stav direktno dokazuje △ACM≅△BCM iz dužina?",["SSS","USU","Samo jednaki uglovi"],"Uoči i zajedničku duž.","AC=BC, AM=BM i CM=CM, pa važi SSS."],
  ["I je centar upisane kružnice. Normala od I do AB ima 2,4 cm. Koliki je prečnik u cm?","4,8","Normala meri poluprečnik.","r=2,4 cm. Prečnik je 2r=4,8 cm."],
  ["U △ABC≅△XYZ je ∠Y=63°, ∠C=52°. Koliki je ∠A u stepenima?","65","Nađi ugao koji odgovara B.","∠B=63°, pa je ∠A=180°−63°−52°=65°."],
  ["Koja konstrukcija daje tačke jednako udaljene od A i B?",["Simetrala duži AB","Simetrala ugla A","Prava AB"],"Zamisli simetričan prevoj papira.","Simetrala duži prolazi kroz sredinu pod pravim uglom, a sve njene tačke jednako su udaljene od krajeva."],
  ["Kod dve zadate stranice 4 i 6 cm, koji naspramni ugao sigurno daje kriterijum SSU ako trougao postoji?",["Ugao naspram 6 cm","Ugao naspram 4 cm","Bilo koji ugao"],"Uporedi dve date stranice.","SSU traži ugao naspram veće date stranice. Ovde je 6>4."],
  ["Da li se visina iz oštrog temena tupouglog trougla može završiti izvan naspramne stranice?",["Da","Ne"],"Posmatraj pravu koja sadrži stranicu.","Normala pada na produžetak stranice. Rastojanje do prave je visina."],
  ["U centralnoj simetriji tačka se preslika u samu sebe. Koja je to tačka?",["Centar","Svaka tačka ose","Svako teme"],"Gde je sredina kada se krajevi poklapaju?","Jedino je centar na nultom rastojanju od svog lika."],
  ["Obim trougla je 24 cm. U njemu podudarnom trouglu dve stranice su 7 i 8 cm. Koliko cm ima treća?","9","Podudarnost čuva i obim.","Treća je 24−7−8=9 cm."]
]);

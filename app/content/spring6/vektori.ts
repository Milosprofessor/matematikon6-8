import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-vektori",
  title: "Vektori i konstrukcija paralelograma",
  month: "april",
  aim: "Nadoveži pomeraje i konstruiši paralelogram iz dovoljnih podataka.",
  intro: "Strelica daje tri informacije: pravac, smer i dužinu. Možeš je paralelno preneti na drugo mesto.",
  rules: ["Jednaki vektori imaju jednaku dužinu, isti pravac i smer. Za zbir nadoveži početak drugog na kraj prvog. Razliku dobijaš sabiranjem sa suprotnim vektorom.","Množenje vektora pozitivnim brojem menja dužinu tim faktorom, a negativan činilac još obrće smer. Za konstrukciju ABCD iz AB, AD i ugla A kroz B povuci paralelu AD, kroz D paralelu AB. Presek je C.","Smer od B do A suprotan je smeru od A do B. Dijagonala iz početka dva vektora predstavlja njihov zbir, druga dijagonala povezuje njihove krajeve."],
  formulas: ["→AB+→BC=→AC","→AB+→BA=0⃗"],
  skills: ["suprotan-vektor", "nadovezivanje", "skaliranje", "nulti-vektor", "kolinearni-zbir", "prenos", "smer-i-dužina", "konstrukcija", "koordinate", "razlika-vektora", "zatvoren-put"],
  worked: [{"question":"Od A idi 3 polja desno, zatim 2 levo. Šta je zbir?","steps":["Prenesi drugi pomeraj na kraj prvog. U izabranom horizontalnom smeru račun je 3+(−2).","Krajnja tačka je jedno polje desno od A. Zbir može biti kraći od oba sabirka."]},{"question":"Konstruiši paralelogram sa AB=5 cm, AD=3 cm i uglom A od 60°.","steps":["Nacrtaj AB i u A konstruiši ugao od 60°. Na drugom kraku prenesi AD=3 cm.","Kroz B konstruiši paralelu sa AD, a kroz D sa AB prenošenjem odgovarajućih uglova. Njihov presek daje C."]},{"question":"Kako konstruišeš paralelogram ako su date obe dijagonale i ugao između njih?","steps":["Konstruiši dve prave pod zadatim uglom kroz S. Na prvoj prenesi po polovinu prve dijagonale na suprotne strane od S.","Na drugoj na isti način prenesi polovine druge. Spoji krajeve naizmenično. Dijagonale se polove, pa je dobijena figura paralelogram."]}]
}, [
  ["Koji je vektor suprotan vektoru →MN?",["→NM","→MN","→NN"],"Zameni početak i kraj.","Dužina i pravac ostaju, a smer se obrće."],
  ["→AB+→BC jednako je kom vektoru?",["→AC","→CA","→BA"],"Prati put od početne do krajnje tačke.","Put počinje u A i završava se u C."],
  ["Vektor je dug 4 cm. Koliko cm ima njegov dvostruki vektor?","8","Dužina se množi apsolutnom vrednošću činioca.","2·4=8 cm."],
  ["Kada se sabere vektor sa suprotnim, kolika je dužina zbira?","0","Kraj puta se poklapa sa početkom.","Povratak u polazište daje nulti vektor."],
  ["Tri polja ulevo pa sedam udesno daju koliko polja udesno?","4","Udesno uzmi kao pozitivan smer.","−3+7=4."],
  ["U ABCD paralelogramu koji je vektor jednak →AB?",["→DC","→CD","→BA"],"Prati isti smer na naspramnoj strani.","Od D do C krećeš se kao od A do B za istu dužinu."],
  ["Vektor u je dug 6 cm. Koliko cm ima −0,5u?","3","Znak određuje smer.","Dužina je 0,5·6=3 cm, a smer suprotan."],
  ["Konstruišeš paralelogram dijagonala 8 i 11 cm. Koliko cm od centra prenosiš prema kraju duže dijagonale?","5,5","Obe dijagonale imaju zajedničku sredinu.","11:2=5,5 cm."],
  ["A(−2, 1), B(3, 1), D(0, 4) su temena paralelograma ABCD. Kolika je apscisa C?","5","Prenesi →AB iz D.","→AB pomera 5 udesno. Zato je C(5, 4)."],
  ["u je 3 koraka udesno, v je 2 ulevo. Koliko koraka udesno daje u−2v?","7","Oduzimanje obrće smer drugog pomeraja.","2v je 4 ulevo. Zato u−2v ide 3+4=7 udesno."],
  ["Uzastopni pomeraji →XY, →YZ i →ZX daju koliku dužinu ukupnog pomeraja?","0","Gde se put završava?","Kraj je početna tačka X. Pređeni put može biti dug, a pomeraj nula."],
  ["Da li same dužine dve susedne stranice određuju jedinstven oblik paralelograma?",["Ne","Da"],"Razmisli može li se promeniti zahvaćeni ugao.","Ugao se može promeniti uz iste stranice, pa postoje nepodudarne figure."],
  ["Od (−1, 2) prenesi vektor koji pomera za (3, −5). Koja je nova ordinata?","-3","Drugoj koordinati dodaj −5.","2−5=−3."],
  ["Koji smer ima −3u prema nenultom u?",["Suprotan","Isti","Normalan"],"Znak i veličina imaju različite uloge.","Negativan skalar obrće smer, a 3 utrostručuje dužinu."],
  ["Za konstrukciju iz AB, AD i ugla A, kroz D ide paralela kojoj pravoj?",["AB","AD","BD"],"Naspramne stranice su paralelne.","CD∥AB, zato tražena prava prolazi kroz D paralelno sa AB."],
  ["A(1, 2), B(4, 3), C(5, 7) su redom temena paralelograma. Kolika je ordinata D?","6","Vektor →BC prenesi iz A.","Od B do C se ide 1 desno i 4 gore. Od A stižeš u D(2, 6)."]
]);

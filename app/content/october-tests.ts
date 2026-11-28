import { C, I, Task } from "./types";

export type OctoberTestTask = Task & { lessonId:string };
const L=(task:Task,lessonId:string):OctoberTestTask=>({...task,lessonId});

export const octoberAreaTests = {
  6:{trougao:[
    L(C("ot6-1","Odredi vrstu trougla prema stranicama.","5 cm, 5 cm, 8 cm",["Jednakokraki","Raznostraničan","Jednakostraničan"],"Jednakokraki","Dve stranice su jednake.","Dve stranice imaju dužinu 5 cm, a treća 8 cm, pa je trougao jednakokraki.","basic","Vrste trouglova",{taskType:"klasifikacija"}),"trougao-vrste"),
    L(I("ot6-2","Odredi obim u cm.","a=6 cm, b=8 cm, c=9 cm","23","Saberi stranice.","O=6+8+9=23 cm.","basic","Elementi trougla",{taskType:"obim"}),"trougao-vrste"),
    L(I("ot6-3","Odredi γ.","α=48°, β=77°","55","Zbir unutrašnjih uglova je 180°.","α+β+γ=180°. γ=180°−48°−77°=55°.","medium","Zbir uglova",{taskType:"nepoznati-ugao"}),"zbir-uglova-trougla"),
    L(I("ot6-4","Odredi spoljašnji ugao kod temena A.","β=46°, γ=69°","115","Saberi nesusedne unutrašnje uglove.","α₁=46°+69°=115°.","medium","Spoljašnji ugao",{taskType:"zbir-nesusednih"}),"uglovi-transverzala"),
    L(C("ot6-5","Odredi najveću stranicu.","α=72°, β=81°, γ=27°",["a","b","c"],"b","Najveća je naspram najvećeg ugla.","Najveći je β, pa je stranica b najveća.","medium","Odnos stranica i uglova",{taskType:"najveca-stranica"}),"odnos-stranica-uglova"),
    L(C("ot6-6","Da li duži grade trougao?","4 cm, 9 cm, 14 cm",["Da","Ne"],"Ne","Uporedi 14 sa 4+9.","14>13, pa trougao ne postoji.","advanced","Nejednakost trougla",{taskType:"provera-duzi"}),"nejednakost-trougla"),
    L(I("ot6-7","Odredi najmanji prirodan x.","Stranice 9, 15 i x","7","Važi 6<x<24.","|15−9|<x<15+9, pa 6<x<24. Najmanji prirodan broj veći od 6 je 7.","advanced","Nejednakost trougla",{taskType:"granice-stranice"}),"nejednakost-trougla"),
    L(C("ot6-8","Izaberi postupak za konstrukciju ugla od 15°.","",["Dvaput prepolovi 60°.","Prepolovi 90°.","Saberi 60° i 30°."],"Dvaput prepolovi 60°.","60°→30°→15°.","Dve simetrale daju 15°.","advanced","Konstrukcije uglova",{taskType:"redosled-konstrukcije"}),"konstrukcije-uglova")
  ]},
  7:{
    "pitagorina-teorema":[
      L(I("ot7p-1","Odredi hipotenuzu.","a=12 cm, b=16 cm","20","Saberi kvadrate kateta.","a² + b² = c². 12² + 16² = c². 144 + 256 = c², pa je c² = 400. Pošto je dužina pozitivna, c = [[sqrt:400]] = 20 cm.","basic","Pitagorina teorema",{taskType:"hipotenuza"}),"pitagorina-teorema"),
      L(C("ot7p-2","Da li je trougao pravougli?","Stranice su 8 cm, 15 cm i 17 cm.",["Da","Ne"],"Da","Proveri obrat Pitagorine teoreme.","Proveravamo da li važi a² + b² = c², pri čemu je c = 17 cm najduža stranica. Levo je 8² + 15² = 64 + 225 = 289, a desno 17² = 289. Po obratu teoreme trougao je pravougli.","medium","Obrat Pitagorine teoreme",{taskType:"provera-pravouglosti"}),"pitagorina-teorema"),
      L(I("ot7p-3","Odredi katetu.","c=17 cm, a=15 cm","8","Postavi Pitagorinu teoremu i izdvoji nepoznatu katetu.","a²+b²=c². 15²+b²=17²; 225+b²=289; b²=64; b=8 cm jer je pozitivna.","medium","Nepoznata kateta",{taskType:"kateta"}),"nepoznata-stranica-pravougli"),
      L(I("ot7p-4","Odredi dijagonalu pravougaonika.","a=8 cm, b=15 cm","17","Dijagonala je hipotenuza.","d²=8²+15²=289, pa je d=17 cm.","medium","Pitagora u pravougaoniku",{taskType:"dijagonala"}),"pitagora-pravougaonik-kvadrat"),
      L(C("ot7p-5","Odredi visinu jednakostraničnog trougla.","a=10 cm",["5√3 cm","10√3 cm","5√2 cm"],"5√3 cm","Visina deli stranicu na dva dela od 5 cm.","h²+(a/2)²=a². h²+5²=10²; h²+25=100; h²=75; h=5√3 cm jer je pozitivna.","medium","Pitagora u jednakostraničnom trouglu",{taskType:"visina-jednakostranicnog"}),"pitagora-jednakokraki"),
      L(I("ot7p-5b","Odredi AD.","∠ABC=∠ACD=90°, AB=6 cm, BC=8 cm, CD=24 cm","26","Najpre odredi dijagonalu AC.","AC=10 cm, zatim AD²=10²+24²=676, pa je AD=26 cm.","advanced","Pitagora u četvorouglu",{taskType:"dva-pravouga-trougla"}),"pitagora-cetvorougao"),
      L(I("ot7p-6","Odredi stranicu romba.","d_1=16 cm, d_2=30 cm","17","Koristi polovine dijagonala.","a²=8²+15²=289, pa je a=17 cm.","advanced","Pitagora u rombu",{taskType:"stranica-romba"}),"pitagora-romb"),
      L(I("ot7p-7","Odredi krak jednakokrakog trapeza.","a=24 cm, b=14 cm, h=12 cm","13","Polovina razlike osnovica je 5 cm.","c²=5²+12²=169, pa je c=13 cm.","advanced","Pitagora u trapezu",{taskType:"krak-trapeza"}),"pitagora-trapez"),
      L(C("ot7p-8","Odredi kraću katetu.","Trougao ima uglove 30°, 60°, 90° i c=22 cm.",["11 cm","11√3 cm","22√2 cm"],"11 cm","Kraća kateta je polovina hipotenuze.","22:2=11 cm.","basic","Posebni pravougli trouglovi",{taskType:"kraca-kateta"}),"specijalni-pravougli-trouglovi"),
      L(C("ot7p-9","Koje katete konstruišu duž √13?","",["2 i 3","1 i 3","2 i 4"],"2 i 3","Traži a²+b²=13.","2²+3²=4+9=13.","medium","Pitagorine konstrukcije",{taskType:"izbor-kateta"}),"konstrukcija-iracionalnih-brojeva")
    ],
    stepeni:[
      L(C("ot7s-1","Zapiši kao stepen.","4·4·4·4·4",["4⁵","5⁴","20⁵"],"4⁵","Osnova je 4, a ima pet činilaca.","Zapis je 4⁵.","basic","Pojam stepena",{taskType:"proizvod-u-stepen"}),"pojam-stepena"),
      L(I("ot7s-2","Izračunaj.","3^4","81","Pomnoži četiri trojke.","3⁴=81.","basic","Pojam stepena",{taskType:"izracunavanje-stepena"}),"pojam-stepena"),
      L(C("ot7s-3","Odredi osnovu.","(−5)^6",["−5","5","6"],"−5","Osnova je broj koji se ponavlja kao činilac.","Zagrade pokazuju da je osnova −5.","basic","Elementi stepena",{taskType:"prepoznaj-osnovu"}),"pojam-stepena"),
      L(C("ot7s-4","Odredi znak.","(−2)^9",["Pozitivan","Negativan","Nula"],"Negativan","Izložilac je neparan.","Neparan broj negativnih činilaca daje negativan proizvod.","medium","Znak stepena",{taskType:"znak-stepena"}),"pojam-stepena"),
      L(C("ot7s-5","Uporedi.","−4^2 __ (−4)^2",["<",">","="],"<","Zagrade određuju osnovu.","−4²=−16, a (−4)²=16.","advanced","Zagrade i stepen",{taskType:"poredjenje-zagrada"}),"pojam-stepena"),
      L(C("ot7s-6","Pronađi grešku.","2^6=2·6=12",["Treba pomnožiti šest dvojki.","Treba sabrati šest dvojki.","Nema greške."],"Treba pomnožiti šest dvojki.","Izložilac nije činilac.","2⁶=64.","advanced","Pojam stepena",{taskType:"pronadji-gresku"}),"pojam-stepena")
    ]
  },
  8:{
    "tacka-prava-ravan":[
      L(C("ot8p-1","Kakva je projekcija duži normalne na ravan?","",["Tačka","Jednaka duž","Prava"],"Tačka","Krajevi imaju isto podnožje.","Projekcija je tačka.","basic","Ortogonalna projekcija",{taskType:"projekcija"}),"ortogonalna-projekcija"),
      L(C("ot8p-2","Šta je zajedničko svim ivicama roglja?","",["Teme","Ravan","Prava"],"Teme","Sve ivice polaze iz iste tačke.","Zajednička tačka je teme roglja.","basic","Rogalj",{taskType:"element-roglja"}),"rogalj"),
      L(C("ot8p-3","Koliko strana ima trostrani rogalj?","",["2","3","4"],"3","Naziv govori broj strana.","Trostrani rogalj ima tri strane.","basic","Rogalj",{taskType:"brojanje-strana"}),"rogalj"),
      L(C("ot8p-4","Koje telo je poliedar?","",["Kocka","Lopta","Valjak"],"Kocka","Poliedar je ograničen mnogouglovima.","Kocka je poliedar.","basic","Poliedar",{taskType:"prepoznavanje-tela"}),"poliedar"),
      L(C("ot8p-5","Dopuni Ojlerovu formulu.","V−E+F=",["2","0","1"],"2","Važi za konveksne poliedre.","V−E+F=2.","medium","Ojlerova formula",{taskType:"dopuni-formulu"}),"poliedar"),
      L(I("ot8p-6","Odredi F.","V=8, E=12","6","Koristi V−E+F=2.","8−12+F=2, pa je F=6.","medium","Ojlerova formula",{taskType:"broj-strana"}),"poliedar"),
      L(C("ot8p-7","Pronađi grešku.","Trostrani rogalj ima tri temena.",["Ima jedno teme.","Ima dva temena.","Nema greške."],"Ima jedno teme.","Sve ivice imaju zajednički početak.","Rogalj ima jedno teme.","advanced","Rogalj",{taskType:"pronadji-gresku"}),"rogalj"),
      L(C("ot8p-8","Proveri Ojlerovu formulu.","V=6, E=9, F=5",["Važi","Ne važi"],"Važi","Izračunaj 6−9+5.","Dobija se 2.","advanced","Ojlerova formula",{taskType:"provera-ojlera"}),"poliedar")
    ],
    "linearne-jednacine":[
      L(C("ot8l-1","Da li je x=4 rešenje?","3x−2=10",["Da","Ne"],"Da","Uvrsti 4.","3·4−2=10.","basic","Pojam jednačine",{taskType:"provera-resenja"}),"pojam-linearne-jednacine"),
      L(C("ot8l-2","Izaberi linearnu jednačinu.","",["5x−3=12","x²=16","1/x=2"],"5x−3=12","Nepoznata je na prvi stepen.","Prva jednačina je linearna.","basic","Pojam jednačine",{taskType:"prepoznavanje"}),"pojam-linearne-jednacine"),
      L(I("ot8l-3","Odredi x.","7x=−42","-6","Podeli obe strane sa 7.","x=−6.","basic","Ekvivalentne transformacije",{taskType:"deljenje-obe-strane"}),"ekvivalentne-transformacije"),
      L(C("ot8l-4","Koja transformacija nije dozvoljena?","",["Deljenje obe strane nulom","Dodavanje 4 obema stranama","Množenje obe strane sa −3"],"Deljenje obe strane nulom","Nulom se ne deli.","Ta transformacija nije definisana.","medium","Ekvivalentne transformacije",{taskType:"nedozvoljena-transformacija"}),"ekvivalentne-transformacije"),
      L(I("ot8l-5","Odredi x.","4(x−2)=2x+10","9","Ukloni zagradu i izdvoji x.","4x−8=2x+10, 2x=18, x=9.","medium","Rešavanje jednačina",{taskType:"nepoznata-na-obe-strane"}),"resavanje-linearnih-jednacina"),
      L(C("ot8l-6","Pronađi grešku.","3(x−4)=9 ⇒ 3x−4=9",["Treba 3x−12=9","Treba x−12=9","Nema greške"],"Treba 3x−12=9","Trojkom pomnoži oba člana.","3(x−4)=3x−12.","medium","Rešavanje jednačina",{taskType:"pronadji-gresku"}),"resavanje-linearnih-jednacina"),
      L(I("ot8l-7","Odredi broj.","Trostruki broj umanjen za 7 je 20.","9","Napiši 3x−7=20.","3x=27, pa je x=9.","medium","Primena jednačina",{taskType:"tekst-u-jednacinu"}),"primena-linearnih-jednacina"),
      L(I("ot8l-8","Odredi kraću stranicu.","Duža je 5 cm duža, O=46 cm.","9","Neka je kraća x.","2(x+x+5)=46, 4x=36, x=9 cm.","advanced","Primena jednačina",{taskType:"vise-uslova"}),"primena-linearnih-jednacina"),
      L(C("ot8l-9","Reši.","−3x≤12",["x≥−4","x≤−4","x≥4"],"x≥−4","Pri deljenju negativnim brojem obrni znak.","x≥−4.","medium","Linearna nejednačina",{taskType:"promena-znaka"}),"linearne-nejednacine"),
      L(C("ot8l-10","Izaberi prikaz.","x>2",["Prazan kružić kod 2, zraka desno","Pun kružić kod 2, zraka desno","Prazan kružić kod 2, zraka levo"],"Prazan kružić kod 2, zraka desno","Broj 2 nije uključen; veći brojevi su desno.","Tačan je prvi prikaz.","advanced","Linearna nejednačina",{taskType:"brojna-prava"}),"linearne-nejednacine")
    ]
  }
};

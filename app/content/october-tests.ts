import { C, I, Task } from "./types";

export type OctoberTestTask = Task & {lessonId:string};
const L=(task:Task,lessonId:string):OctoberTestTask=>({...task,lessonId});

export const octoberAreaTests = {
  6:{trougao:[
    L(C("ot6-1","Odredi vrstu trougla.","5 cm, 5 cm, 8 cm",["Jednakokraki","Raznostraničan","Jednakostraničan"],"Jednakokraki","Dve stranice su jednake.","Trougao je jednakokraki.","basic","Vrste trouglova",{taskType:"klasifikacija"}),"trougao-vrste"),
    L(I("ot6-2","Odredi obim.","a=6 cm, b=8 cm, c=9 cm","23","Saberi stranice.","O=23 cm.","basic","Elementi trougla",{taskType:"obim"}),"trougao-vrste"),
    L(I("ot6-3","Odredi γ.","α=48°, β=77°","55","Zbir je 180°.","γ=180°−125°=55°.","medium","Zbir uglova",{taskType:"nepoznati-ugao"}),"zbir-uglova-trougla"),
    L(C("ot6-4","Da li uglovi grade trougao?","20°, 80°, 90°",["Da","Ne"],"Ne","Proveri zbir.","Zbir je 190°.","medium","Zbir uglova",{taskType:"provera-uglova"}),"zbir-uglova-trougla"),
    L(I("ot6-5","Odredi susedni ugao.","α=116°","64","Zbir susednih uglova je 180°.","180°−116°=64°.","medium","Uglovi na transverzali",{taskType:"suplementni"}),"uglovi-transverzala"),
    L(C("ot6-6","Odredi najveću stranicu.","α=72°, β=81°, γ=27°",["a","b","c"],"b","Najveća je naspram najvećeg ugla.","Najveći je β, pa je stranica b najveća.","medium","Odnos stranica i uglova",{taskType:"najveca-stranica"}),"odnos-stranica-uglova"),
    L(C("ot6-7","Da li duži grade trougao?","4 cm, 9 cm, 14 cm",["Da","Ne"],"Ne","Uporedi 14 sa 4+9.","14>13, pa trougao ne postoji.","advanced","Nejednakost trougla",{taskType:"provera-duzi"}),"nejednakost-trougla"),
    L(I("ot6-8","Odredi najmanji prirodan x.","Stranice 9, 15 i x","7","Važi 6<x<24.","Najmanji prirodan broj veći od 6 je 7.","advanced","Nejednakost trougla",{taskType:"granice-stranice"}),"nejednakost-trougla")
  ]},
  7:{
    "direktna-proporcionalnost":[
      L(I("ot7d-1","Odredi y.","y=−3x, x=4","-12","Pomnoži.","y=−12.","basic","Direktna proporcionalnost",{taskType:"direktna-primena"}),"direktna-proporcionalnost"),
      L(C("ot7d-2","Koja tačka pripada grafiku?","y=2x",["(2,4)","(2,3)","(0,2)"],"(2,4)","Proveri parove.","4=2·2.","basic","Grafik y=kx",{taskType:"pripadnost-grafiku"}),"funkcija-ykx"),
      L(I("ot7d-3","Odredi k.","A(5,−10) pripada y=kx","-2","k=y/x.","k=−10/5=−2.","medium","Koeficijent proporcionalnosti",{taskType:"odredi-k"}),"funkcija-ykx"),
      L(I("ot7d-4","Odredi x.","4:7=x:21","12","Unakrsni proizvod.","7x=84, pa je x=12.","medium","Proporcija",{taskType:"nepoznati-clan"}),"proporcije"),
      L(C("ot7d-5","Pronađi grešku.","3:5=9:15, jer je 3·9=5·15.",["Pogrešno su upareni proizvodi.","Razmere nisu jednake.","Nema greške."],"Pogrešno su upareni proizvodi.","Množe se spoljašnji i unutrašnji članovi.","Treba proveriti 3·15=5·9.","medium","Proporcija",{taskType:"pronadji-gresku"}),"proporcije"),
      L(I("ot7d-6","Odredi najveći deo.","120 u razmeri 1:3:6","72","Ukupno ima 10 delova.","Jedan deo je 12, najveći je 72.","advanced","Produžena proporcija",{taskType:"podela-zbira"}),"produzena-proporcija"),
      L(I("ot7d-7","Odredi ugao β.","α:β:γ=2:5:5","75","Ukupno ima 12 delova.","Jedan deo je 15°, pa je β=75°.","advanced","Produžena proporcija",{taskType:"uglovi-u-razmeri"}),"produzena-proporcija"),
      L(I("ot7d-8","Odredi ukupan iznos.","Delovi 2:4:5, najmanji je 30.","165","Jedan deo je 15.","Ukupno je 11·15=165.","advanced","Podela u razmeri",{taskType:"ukupno-unazad"}),"primena-produzene-proporcije")
    ],
    "pitagorina-teorema":[
      L(I("ot7p-1","Odredi hipotenuzu.","a=12 cm, b=16 cm","20","Saberi kvadrate.","c²=144+256=400, pa je c=20 cm.","basic","Pitagorina teorema",{taskType:"hipotenuza"}),"pitagorina-teorema"),
      L(C("ot7p-2","Koja je hipotenuza?","∠B=90°",["a","b","c"],"b","Naspram ugla B je stranica b.","Hipotenuza je b.","basic","Pitagorina teorema",{taskType:"prepoznaj-hipotenuzu"}),"pitagorina-teorema"),
      L(I("ot7p-3","Odredi katetu.","c=17 cm, a=15 cm","8","Oduzmi kvadrate.","b²=289−225=64, pa je b=8 cm.","medium","Nepoznata kateta",{taskType:"kateta"}),"nepoznata-stranica-pravougli"),
      L(I("ot7p-4","Odredi dijagonalu pravougaonika.","a=8 cm, b=15 cm","17","Dijagonala je hipotenuza.","d=17 cm.","medium","Pitagora u pravougaoniku",{taskType:"dijagonala"}),"pitagora-pravougaonik-kvadrat"),
      L(C("ot7p-5","Odredi visinu jednakostraničnog trougla.","a=10 cm",["5√3 cm","10√3 cm","5√2 cm"],"5√3 cm","h=a√3/2.","h=5√3 cm.","medium","Pitagora u jednakostraničnom trouglu",{taskType:"visina-jednakostranicnog"}),"pitagora-jednakokraki"),
      L(I("ot7p-6","Odredi stranicu romba.","d_1=16 cm, d_2=30 cm","17","Koristi polovine dijagonala.","a²=8²+15²=289, pa je a=17 cm.","advanced","Pitagora u rombu",{taskType:"stranica-romba"}),"pitagora-romb"),
      L(I("ot7p-7","Odredi krak jednakokrakog trapeza.","a=24 cm, b=14 cm, h=12 cm","13","Polovina razlike osnovica je 5 cm.","c²=5²+12²=169, pa je c=13 cm.","advanced","Pitagora u trapezu",{taskType:"krak-trapeza"}),"pitagora-trapez"),
      L(C("ot7p-8","Pronađi grešku.","d_1=10, d_2=24; stranica romba je √(10²+24²)=26.",["Treba koristiti polovine dijagonala.","Treba sabrati dijagonale.","Nema greške."],"Treba koristiti polovine dijagonala.","Pomoćni trougao ima katete 5 i 12.","Stranica je 13.","advanced","Pitagora u rombu",{taskType:"pronadji-gresku"}),"pitagora-romb")
    ]
  },
  8:{
    "slicnost-pravougli-trougao":[
      L(I("ot8s-1","Odredi c.","p=6 cm, q=19 cm","25","c=p+q.","c=25 cm.","basic","Sličnost u pravouglom trouglu",{taskType:"hipotenuza"}),"slicnost-pravougli"),
      L(I("ot8s-2","Odredi h.","p=9 cm, q=25 cm","15","h²=pq.","h²=225, pa je h=15 cm.","medium","Sličnost u pravouglom trouglu",{taskType:"visina"}),"slicnost-pravougli"),
      L(C("ot8s-3","Izaberi formulu za a.","",["a²=cp","a²=cq","a²=pq"],"a²=cp","Kateta a koristi projekciju p.","Važi a²=cp.","medium","Sličnost u pravouglom trouglu",{taskType:"formula"}),"slicnost-pravougli"),
      L(I("ot8s-4","Odredi p.","h=10 cm, q=25 cm","4","p=h²/q.","p=100/25=4 cm.","advanced","Sličnost u pravouglom trouglu",{taskType:"projekcija-unazad"}),"slicnost-pravougli"),
      L(C("ot8s-5","Pronađi grešku.","p=16, q=9; h=16·9=144",["Treba h=12.","Treba h=25.","Nema greške."],"Treba h=12.","Najpre dobijaš h².","h²=144, pa je h=12.","advanced","Sličnost u pravouglom trouglu",{taskType:"pronadji-gresku"}),"slicnost-pravougli")
    ],
    "tacka-prava-ravan":[
      L(C("ot8p-1","Koliko temena ima kocka?","",["6","8","12"],"8","Prebroj temena modela.","Kocka ima 8 temena.","basic","Prostorno opažanje",{taskType:"brojanje"}),"snalazenje-u-prostoru"),
      L(C("ot8p-2","Šta određuju tri nekolinearne tačke?","",["Jednu ravan","Jednu pravu","Dve ravni"],"Jednu ravan","Seti se određenosti ravni.","Određuju tačno jednu ravan.","basic","Određenost ravni",{taskType:"odredjenost"}),"tacka-prava-ravan-osnove"),
      L(C("ot8p-3","Odredi odnos pravih.","AB i CC_1 u kocki",["Mimoilazne","Paralelne","Seku se"],"Mimoilazne","Ne leže u istoj ravni.","Prave su mimoilazne.","medium","Odnosi pravih",{taskType:"citanje-modela"}),"odnosi-pravih-ravni"),
      L(C("ot8p-4","Šta je presek dve neparalelne ravni?","",["Prava","Tačka","Duž"],"Prava","Dve ravni seku se po pravoj.","Odgovor je prava.","medium","Odnosi ravni",{taskType:"presek-ravni"}),"dve-ravni"),
      L(C("ot8p-5","Dopuni zapis.","p je normalna na α",["p⊥α","p∥α","p⊂α"],"p⊥α","Koristi znak normalnosti.","p⊥α.","medium","Ortogonalnost",{taskType:"zapis"}),"ortogonalnost"),
      L(C("ot8p-6","Kakva je projekcija duži normalne na ravan?","",["Tačka","Jednaka duž","Prava"],"Tačka","Krajevi imaju isto podnožje.","Projekcija je tačka.","advanced","Ortogonalna projekcija",{taskType:"projekcija"}),"ortogonalna-projekcija"),
      L(I("ot8p-7","Odredi E.","V=6, F=5","9","Koristi V−E+F=2.","E=9.","advanced","Ojlerova formula",{taskType:"ojler"}),"poliedar"),
      L(C("ot8p-8","Koja tvrdnja je netačna?","",["Mimoilazne prave su komplanarne.","Paralelne ravni se ne seku.","Kocka je poliedar."],"Mimoilazne prave su komplanarne.","Mimoilazne prave nisu u istoj ravni.","Prva tvrdnja je netačna.","advanced","Odnosi u prostoru",{taskType:"povezivanje-pojmova"}),"odnosi-pravih-ravni")
    ]
  }
};

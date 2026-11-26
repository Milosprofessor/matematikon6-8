import { unit } from "./unit";

export default unit({
  "id": "s8-znak",
  "title": "Nula, znak, monotonost i položaj pravih",
  "month": "february",
  "aim": "Pročitaj osobine funkcije i pređi iz implicitnog zapisa u eksplicitni.",
  "intro": "Posmatraj vodoravnu liniju nivoa mora na karti visina. Na grafiku funkcije x-osa razdvaja pozitivne i negativne ordinate. Presek sa njom daje nulu funkcije.",
  "rules": [
    "Za k>0 funkcija raste, za k<0 opada. Ako k nije nula, reši kx+n=0. Rastuća funkcija je negativna levo od nule i pozitivna desno. Za opadajuću funkciju redosled je obrnut.",
    "Za k=0 vrednost je stalno n. Ako je n različito od nule, funkcija ima svuda isti znak i nema nulu. Ako je n=0, svaki realan broj je nula. Iz ax+by=c možeš izraziti y samo kada b nije nula.",
    "Jednaki nagibi daju različite paralelne prave samo kad su odsečci različiti. Uz jednak odsečak prave se poklapaju."
  ],
  "formulas": [
    "kx+n=0",
    "ax+by=c"
  ],
  "prerequisites": [
    "s8-funkcija"
  ],
  "worked": [
    {
      "question": "Odredi nulu i znak funkcije y=6−3x.",
      "steps": [
        "Postavi 6−3x=0, pa je x=2. Nagib −3 je negativan.",
        "Levo od 2 grafik je iznad x-ose. Desno od 2 nalazi se ispod. Proveri pomoću x=0 i x=3."
      ]
    },
    {
      "question": "Šta se vidi na grafiku y=−4?",
      "steps": [
        "Svaka tačka ima ordinatu −4 pa je prava horizontalna.",
        "Za nijedan x vrednost nije nula. Funkcija je stalno negativna i konstantna."
      ]
    },
    {
      "question": "Uporedi prave 2x+4y=8 i y=−0,5x+1.",
      "steps": [
        "Oduzmi 2x i podeli sa 4. Prva prava ima y=−0,5x+2.",
        "Druga ima isti nagib i drugačiji odsečak. Prave su paralelne i nemaju zajedničku tačku."
      ]
    }
  ]
}, [
  ["Na kojoj osi leži tačka koja predstavlja nulu funkcije?",["Na x-osi","Uvek samo na y-osi","Na vertikali x=1"],"Koja je tada vrednost y?","Nula je ulaz sa ordinatom 0. Sve takve tačke su na x-osi."],
  ["Koliko nula ima y=7?","0","Pokušaj da rešiš 7=0.","Vrednost je uvek 7 pa ne dostiže nulu."],
  ["Koji ulazi su nule za y=0?",["Svi realni brojevi","Samo broj 0","Nijedan ulaz"],"Uvrsti nekoliko brojeva.","Za svaki x izlaz je 0."],
  ["Kako se menja y=−x+9 sa porastom x?",["Opada","Raste","Stalna je"],"Prati znak koeficijenta.","Svaki porast x za 1 smanji y za 1."],
  ["Odredi nulu y=4x−14.","3,5","Postavi 4x−14=0.","4x=14 pa je x=3,5."],
  ["Gde je y=3x+6 strogo pozitivna?",["x>−2","x<−2","x≥−2"],"Odredi presek sa x-osom.","3x+6>0 daje x>−2. Granični broj daje nulu."],
  ["Odredi nagib prave 3x+2y=12.","−1,5","Izoluj član sa y.","2y=12−3x pa y=6−1,5x."],
  ["Koji položaj imaju prave 2y=4x−6 i y=2x−3?",["Poklapaju se","Paralelne različite","Seku se u jednoj tački"],"Podeli prvu jednačinu sa 2.","Obe jednačine tada opisuju iste tačke."],
  ["Za koji n je nula funkcije y=−3x+n jednaka nuli funkcije y=5x−20?","12","Najpre odredi zajedničku nulu.","5x−20=0 daje x=4. Potom −3·4+n=0 daje n=12."],
  ["Usluga A košta 160+12x, a B košta 100+20x dinara. Za koji ceo broj x prvi put A postaje jeftinija?","8","Reši strogu nejednakost.","160+12x<100+20x daje 60<8x, odnosno x>7,5. Prvi ceo broj je 8."],
  ["Kada je grafik y=kx+n vodoravan?",["k=0","n=0","k=1"],"Posmatraj promenu y.","Kada je k=0, sve tačke imaju istu ordinatu n."],
  ["Odredi presek prave 5x−y=15 sa x-osom. Unesi apscisu.","3","Postavi y=0.","5x=15 daje x=3."],
  ["Za koje x je 4−2x<0?",["x>2","x<2","x≥2"],"Pazi na deljenje negativnim brojem.","−2x<−4. Deljenjem sa −2 menja se smer, pa je x>2."],
  ["Prava y=−3 je u odnosu na x-osu kakva?",["Paralelna i različita","Normalna","Poklapa se"],"Uporedi ordinate.","Obe su vodoravne, sa ordinatama −3 i 0."],
  ["Kako su postavljene prave y=4x+7 i y=3x+7?",["Seku se","Poklapaju se","Paralelne različite"],"Uporedi početnu vrednost i nagib.","Obe sadrže (0; 7), a imaju različite nagibe."],
  ["Prava ima nulu 5 i prolazi kroz (1; 12). Koliki je njen odsečak na y-osi?","15","Koristi tačke (5; 0) i (1; 12).","Nagib je (0−12):(5−1)=−3. Iz 0=−3·5+n dobijaš n=15."]
], ["osa","konstanta","nule","monotonost","nula","znak","implicitni","položaj","parametar","prag"],
  ["Koji je nagib prave y+2x=5?","−2","Izrazi y.","Posle oduzimanja 2x sa obe strane sledi y=5−2x."]);

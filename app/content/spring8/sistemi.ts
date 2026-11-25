import { unit } from "./unit";

export default unit({
  "id": "s8-sistemi",
  "title": "Uređeni par, zamena i suprotni koeficijenti",
  "month": "march",
  "aim": "Reši dve jednačine i grafički i algebarski. Proveri obe koordinate u obe jednačine.",
  "intro": "Na raskrsnici tražimo tačku koja pripada dvema ulicama. Tako i rešenje sistema mora istovremeno zadovoljiti oba uslova. Prva koordinata para označava x, druga y.",
  "rules": [
    "Jednačina ax+by=c opisuje pravu ako barem jedan od a, b nije nula. Za b=0 i a≠0 dobija se vertikala x=c:a. Različite prave se seku ili su paralelne. Poklopljene prave imaju beskonačno mnogo zajedničkih tačaka.",
    "Zamenom izrazi jednu nepoznatu i zameni je tim izrazom u drugoj jednačini. Eliminacijom najpre pomnoži cele jednačine nenultim brojevima, zatim zameni jednu njihovim zbirom ili razlikom. Drugu jednačinu zadrži da možeš vratiti nepoznatu.",
    "Ishod 0=0 ne određuje sam obe koordinate. Pogledaj preostalu jednačinu. Uslov 0=5 isključuje svaki par. Sa crteža očitan presek proveri računanjem."
  ],
  "formulas": [
    "ax+by=c"
  ],
  "prerequisites": [
    "s8-znak"
  ],
  "worked": [
    {
      "question": "Reši sistem y=2x i x+y=12 zamenom.",
      "steps": [
        "Druga jednačina postaje x+2x=12. Zato je x=4.",
        "Vrati u prvu, y=8. Provera daje 8=2·4 i 4+8=12. Par je (4; 8)."
      ]
    },
    {
      "question": "Reši 2x+3y=12 i 2x−y=4 eliminacijom.",
      "steps": [
        "Koeficijenti uz x su jednaki. Oduzmi drugu celu jednačinu od prve. Dobijaš 4y=8, y=2.",
        "Iz 2x−2=4 sledi x=3. U obe jednačine: 6+6=12, 6−2=4. Rešenje (3; 2)."
      ]
    },
    {
      "question": "Šta daju jednačine 2x−4y=6 i −x+2y=−3?",
      "steps": [
        "Pomnoži drugu jednačinu sa −2. Dobijaš tačno prvu.",
        "Ima beskonačno mnogo rešenja. Možeš izabrati bilo koje y, zatim x=3+2y."
      ]
    }
  ]
}, [
  ["Da li (2; 3) zadovoljava x+2y=8?",["Da","Ne"],"Uvrsti po redosledu koordinata.","2+2·3=8."],
  ["Prava x=−4 je kakva?",["Vertikalna","Horizontalna","Kosa"],"Menja li se apscisa?","Sve njene tačke imaju istu apscisu −4."],
  ["Koliko rešenja imaju dve različite paralelne prave?","0","Traži zajedničke tačke.","Paralelne različite prave nemaju zajedničku tačku."],
  ["Ako je x=2 i y=−1, napiši uređeni par (x; y).","(2;-1)","Najpre zapiši apscisu.","Prvo ide 2, zatim −1, pa je par (2; −1)."],
  ["Reši x=3 i 2x+y=10. Unesi par.","(3;4)","Uvrsti x=3 u drugu jednačinu.","6+y=10 daje y=4. Par (3; 4) zadovoljava obe."],
  ["Reši y=x−2 i x+y=8. Unesi par.","(5;3)","Zameni y izrazom x−2.","2x−2=8 daje x=5 i y=3. Provera: 5+3=8."],
  ["Reši 3x+y=11 i x−y=1. Unesi par.","(3;2)","Saberi jednačine.","4x=12 daje x=3. Iz x−y=1 sledi y=2. Provera: 9+2=11."],
  ["Koliko rešenja ima sistem 2x+y=1 i 4x+2y=3?","0","Udvostruči prvu jednačinu.","Leve strane postaju jednake, a desne su 2 i 3. Nema takvog para."],
  ["Reši (x+y):2=3 i 2(x−y)=4. Unesi par.","(4;2)","Najpre ukloni delioce i zagrade.","Jednačine su x+y=6 i x−y=2. Zbir daje x=4, zatim y=2. Početne leve strane daju 3 i 4."],
  ["Sistem čine 0x+0y=0 i x=7. Koja je skupina rešenja?",["Svi parovi (7; y)","Samo (7; 0)","Svi parovi u ravni"],"Koji uslov zaista ograničava par?","Prva jednakost važi uvek, druga traži x=7. Svaka realna ordinata odgovara."],
  ["Koliko rešenja ima sistem x=3 i x=5?","0","Tačka ima jednu apscisu.","Različite vertikale nemaju zajedničku tačku."],
  ["Reši x+y=1 i x−y=5. Unesi par.","(3;-2)","Saberi leve i desne strane.","2x=6 pa x=3. Iz 3+y=1 sledi y=−2. Razlika je 5."],
  ["Za koji c sistem x+y=2 i 3x+3y=c ima beskonačno mnogo rešenja?","6","Pomnoži prvu jednačinu sa 3.","Druga mora dati isti uslov. Zato c=3·2=6."],
  ["Koji je uslov tačan za sve uređene parove?",["0x+0y=0","0x+0y=1","x+y=0"],"Uvrsti proizvoljne koordinate.","Leva strana prve jednakosti uvek iznosi nula."],
  ["Sistem y=2 i 2x+3y=7 ima koje rešenje? Unesi par koristeći tačku-zarez.","(1/2;2)","Postavi y=2 u drugu jednačinu.","2x+6=7 daje x=1/2. Obe jednakosti važe."],
  ["Reši 2x+3y=1 i 3x−2y=8. Unesi par.","(2;-1)","Pomnoži prvu jednačinu sa 2, drugu sa 3.","Sabiranjem dobijaš 13x=26 pa x=2. Dat je 4+3y=1 pa y=−1. Provera: 6+2=8."]
]);

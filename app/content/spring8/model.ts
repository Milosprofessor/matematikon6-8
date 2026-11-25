import { unit } from "./unit";

export default unit({
  "id": "s8-model",
  "title": "Kako iz teksta nastaje sistem",
  "month": "march",
  "aim": "Postavi dva nezavisna uslova, proveri račun i proceni da li dobijeni par ima smisla.",
  "intro": "Dve osobe kupile su različite kombinacije istih proizvoda. Svaki račun donosi jedan uslov za njihove cene. Obeležavanje jedinica pomaže da prepoznaš šta se može sabirati.",
  "rules": [
    "Napiši šta predstavljaju x i y i u kojim su jedinicama. Prevedi po jedan podatak u svaku jednačinu. Pre računanja odredi da li su dozvoljeni negativni, razlomljeni ili samo celi rezultati.",
    "Uz podatak o zbiru često je zgodna zamena. Kada se u oba uslova pojavljuje isti broj jednakih predmeta, oduzimanje ih uklanja. Posle rešavanja proveri oba početna podatka i odgovori rečenicom.",
    "Dva puta napisan isti podatak ne određuje nužno jedno rešenje. Broj ljudi mora biti nenegativan ceo broj, dok masa može biti i necela."
  ],
  "formulas": [
    "x+y=S",
    "ax+by=C"
  ],
  "prerequisites": [
    "s8-sistemi"
  ],
  "worked": [
    {
      "question": "Tri sveske i olovka koštaju 250 dinara. Sveska i olovka koštaju 110. Kolike su cene?",
      "steps": [
        "Neka x označi cenu sveske, y cenu olovke u dinarima. Dobijamo 3x+y=250 i x+y=110.",
        "Oduzimanjem 2x=140, pa x=70 i y=40. Provera: 210+40=250 i 70+40=110. Sveska je 70, olovka 40 dinara."
      ]
    },
    {
      "question": "Na izlet ide 18 učenika. U jednoj grupi ih je četiri više. Koliko ih je po grupama?",
      "steps": [
        "Neka x predstavlja veću, y manju grupu. Uslovi su x+y=18 i x−y=4.",
        "Zbir daje 2x=22, pa x=11 i y=7. Provera: zbir je 18, razlika 4. Obe grupe imaju ceo broj učenika."
      ]
    },
    {
      "question": "Može li među 10 životinja, od kojih svaka ima dve ili četiri noge, biti ukupno 31 noga?",
      "steps": [
        "Neka x broji dvonožne, y četvoronožne. Uslovi su x+y=10 i 2x+4y=31.",
        "Oduzmi dvostruku prvu od druge: 2y=11, y=5,5 i x=4,5. Brojevi zadovoljavaju obe jednakosti, ali nisu celi. Takva grupa životinja ne postoji."
      ]
    }
  ]
}, [
  ["Ako x i y broje decu i odrasle, koji izraz broji sve osobe?",["x+y","xy","x−y"],"Saberi broj članova obe grupe.","Grupe su odvojene pa svaku osobu brojimo jednom."],
  ["Ako je velika kutija za tri kg teža od male mase y, kolika je njena masa?",["y+3","3y","y−3"],"Reč „za” označava razliku.","Dodavanjem 3 kg na y kg dobijaš masu velike kutije."],
  ["Koji rezultat može predstavljati broj prodatih karata?",["14","−2","3,5"],"Razmisli o jedinici.","Karta se u ovom zadatku broji kao jedna celina."],
  ["Dve vrste ulaznica koštaju 100 i 160 dinara. Koliko koštaju po dve od svake vrste ukupno u dinarima?","520","Računaj dve od svake.","2·100+2·160=520 dinara."],
  ["Zbir dve dužine je 34 cm, a razlika 6 cm. Duža u cm?","20","Saberi uslove za dužu x i kraću y.","x+y=34 i x−y=6 daju 2x=40. Dužine 20 i 14 imaju traženi zbir i razliku."],
  ["Bicikli i tricikli imaju ukupno 9 ramova i 22 točka. Koliko je tricikala?","4","Svako vozilo ima najmanje dva točka.","Neka x broji bicikle, y tricikle. x+y=9, 2x+3y=22. Oduzimanjem 2x+2y=18 dobijaš y=4. Pet bicikala i četiri tricikla imaju 22 točka."],
  ["Za 8 karata od 200 ili 300 dinara plaćeno je 1900 dinara. Koliko je jeftinijih?","5","Pođi od cene osam jeftinijih.","x+y=8, 200x+300y=1900. Oduzmi 200 puta prvu: 100y=300. Sledi y=3 i x=5. Provera: 1000+900=1900."],
  ["Obim pravougaonika je 44 m. Dužina je 4 m veća od širine. Nađi površinu u m².","117","Prvo prepolovi obim.","x+y=22 i x−y=4 daju x=13, y=9. Zaista 2·22=44 i razlika je 4. Zemljište ima 13·9=117 m²."],
  ["Meša se rastvor od 10% i 30% soli da se dobije 5 kg rastvora od 18%. Koliko kg jačeg rastvora treba?","2","Drugi uslov čuva masu soli.","Za mase slabijeg x i jačeg y važi x+y=5 i 0,1x+0,3y=0,9. Zameni x=5−y: 0,2y=0,4. Potrebno je 2 kg jačeg i 3 kg slabijeg. Soli ima 0,3+0,6=0,9 kg."],
  ["Dvocifren broj ima zbir cifara 10. Zamenom cifara broj se smanji za 36. Koji je prvobitni broj?","73","Broj sa ciframa x, y je 10x+y.","x+y=10 i 9x−9y=36, pa x−y=4. Saberi da dobiješ x=7, y=3. Zaista 73−37=36."],
  ["Dve kese zajedno imaju 6 kg. Da li je to dovoljno da nađeš obe mase?",["Ne","Da"],"Isprobaj dva različita para.","Na primer 2 i 4 kg ili 1 i 5 kg daju isti zbir."],
  ["Tri stola i dve stolice imaju cenu 16000 dinara, a tri stola i jedna stolica 14000. Cena stolice u dinarima?","2000","Oduzmi drugi račun od prvog.","Za cene x i y uslovi su 3x+2y=16000 i 3x+y=14000. Razlika daje y=2000, zatim x=4000. Oba računa se slažu."],
  ["Može li 7 kovanica od 2 ili 5 dinara imati ukupnu vrednost od 24 dinara?",["Ne","Da"],"Pođi od vrednosti sedam kovanica od dva dinara.","x+y=7 i 2x+5y=24 daju 3y=10. Nijedan ceo broj kovanica ne ispunjava uslove."],
  ["Ako x predstavlja sate, a y kilometre, koji izraz ima jedinicu km na sat?",["y:x","x·y","y+x"],"Brzina je količnik puta i vremena.","Za x>0, y kilometara podeljeno sa x sati daje prosečnu brzinu."],
  ["Zbir godina majke i sina je 54, a razlika 28. Koliko godina ima sin?","13","Neka x bude starost majke.","x+y=54 i x−y=28 daju x=41, y=13. Zaista 41+13=54, a 41−13=28."],
  ["Dva radnika naprave 18 delova na sat zajedno. Za 2 sata rada prvog i 3 sata rada drugog nastane 47 delova. Koliko delova na sat pravi prvi?","7","Razdvoji učinke po radnicima.","Neka x i y označe učinak na sat. x+y=18, 2x+3y=47. Oduzmi 2x+2y=36, pa y=11 i x=7. Zaista 14+33=47."]
]);

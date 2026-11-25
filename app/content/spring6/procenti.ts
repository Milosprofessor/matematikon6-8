import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-procenti",
  title: "Procenat, osnovica i promena cene",
  month: "march",
  aim: "Odredi deo, procenat ili osnovicu i razlikuj uzastopne promene.",
  intro: "Natpis „20% popusta“ dobija novčanu vrednost tek kad znaš cenu od koje se računa.",
  rules: ["Jedan procenat je stoti deo osnovice. Za deo osnovicu pomnoži procentom izraženim razlomkom. Za traženu osnovicu podeli poznati deo tim razlomkom.","Kad tražiš procenat, prvo podeli deo celinom, a zatim pomnoži sa 100. Kod svake uzastopne promene zapiši novu osnovicu.","Povećanje i smanjenje za isti procenat ne poništavaju se jer drugi put procenat uzimaš od druge osnovice."],
  formulas: ["p%=[[frac:p|100]]","deo=osnovica·[[frac:p|100]]"],
  skills: ["jedan-procenat", "decimalni-zapis", "deo", "osnovica", "popust", "učešće", "obrnuti-račun", "rast", "uzastopne-promene", "povratni-račun", "ostatak"],
  worked: [{"question":"Koliko je 15% od 800 dinara?","steps":["Deset procenata je 80, a pet procenata je polovina toga, 40.","Ukupno 80+40=120 dinara. Proveri množenjem 800·0,15."]},{"question":"Majica posle popusta od 30% košta 840 dinara. Kolika je puna cena?","steps":["Plaćeno je 70% pune cene: 0,70x=840.","x=840:0,70=1200 dinara. Popust od 360 ostavlja 840."]},{"question":"Od 24 učenika šest trenira odbojku. Koliki je to procenat?","steps":["Odnos je 6:24=1/4.","Četvrtina od 100 je 25, zato odbojku trenira 25% učenika."]}]
}, [
  ["Koliko je 1% od 650 dinara?","6,5","Podeli na sto jednakih delova.","650:100=6,5 dinara."],
  ["Napiši 35% kao decimalni broj.","0,35","Procenat označava stotine.","35:100=0,35."],
  ["Koliko je 25% od 36?","9","Četvrtina je 25%.","36:4=9."],
  ["Šta je osnovica pri popustu na redovnu cenu?",["Redovna cena","Popust","Snižena cena"],"Od čega se računa popust?","Procenat se primenjuje na cenu pre sniženja."],
  ["Posle sniženja od 12% roba od 2500 dinara košta koliko?","2200","Prvo odredi popust.","2500·0,12=300. Plaća se 2500−300=2200."],
  ["Četiri od 25 polja su obojena. Koliko je to procenata?","16","Svedi na sto polja.","4/25=16/100, dakle 16%."],
  ["Ako je 18 učenika 60% grupe, koliko učenika ima grupa?","30","Pomnoži nepoznatu osnovicu sa 0,60.","0,6x=18 daje x=30."],
  ["Članarina poraste sa 800 na 920 dinara. Za koliko procenata je povećana?","15","Promenu poredi sa starom cenom.","Razlika je 120. Odnos 120:800=0,15 daje 15%."],
  ["Cena od 1000 dinara prvo poraste 20%, zatim opadne 20%. Kolika je krajnja cena?","960","Drugi procenat odredi od povećane cene.","Posle rasta cena je 1200, a popust je 240. Ostaje 960 dinara."],
  ["Posle popusta od 25% i dodatnih 100 dinara popusta plaća se 800 dinara. Kolika je prvobitna cena?","1200","Vrati promene obrnutim redom.","Pre poslednjeg popusta bilo je 900. To je 75% od 900:0,75=1200 dinara."],
  ["Na odeljenjskom glasanju opcija dobije 12 od 16 glasova. Koliko procenata nije glasalo za nju?","25","Nađi ostatak glasova.","Ostaju 4 od 16, odnosno četvrtina, 25%."],
  ["Izdvoj 7,5% od 400 dinara. Koliko dinara izdvajaš?","30","Zapiši procenat decimalno.","400·0,075=30 dinara."],
  ["Pantalone posle rasta od 10% koštaju 1980 dinara. Kolika je stara cena?","1800","Nova cena odgovara 110% stare.","1980:1,10=1800 dinara."],
  ["Od 50 semena nikla su 42. Koliki je procenat klijavosti?","84","Poredi broj proklijalih i posejanih.","42:50=0,84 daje 84%."],
  ["Cena se smanji sa 1500 na 1200. Daj procenat smanjenja.","20","Uporedi uštedu sa početnom cenom.","300:1500=0,20 daje 20%."],
  ["Na kvizu je tačno 85% od 40 odgovora. Koliko je odgovora pogrešno ako su svi dati?","6","Nađi preostali procenat.","Pogrešnih je 15%. Zato je 0,15·40=6."]
]);


import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-sinteza",
  title: "Godišnja sistematizacija i mešoviti problemi",
  month: "june",
  aim: "Samostalno izaberi račun, crtež ili proporciju i proveri rezultat drugim putem.",
  intro: "Školsko dvorište možeš prikazati koordinatama, nacrtati u razmeri i izračunati trošak ograđivanja. Svako pitanje traži drugu veličinu.",
  rules: ["Pre računanja zapiši šta se traži, na primer promenu, dužinu, površinu ili deo cene. Na skici upiši poznate podatke i pretvori jedinice. Onda poveži podatke jednačinom ili svojstvom.","Proveri odgovor vraćanjem u početni uslov. Kod nabavke celih pakovanja proveri i sledeće manje pakovanje. Na kraju pogledaj da li znak, jedinica i veličina odgovaraju pitanju.","Samo broj nije dovoljan za tumačenje: obim od 20 m i površina od 20 m² opisuju različite stvari."],
  formulas: ["O=2(a+b)","P=ab","deo=osnovica·p/100"],
  skills: ["promena", "zbir-uglova", "poluobim", "jedinice", "jednačina", "razmera", "procenat-površine", "obrnuta-proporcija", "model", "staza", "izraz"],
  worked: [{"question":"Na planu 1:200 pravougaona učionica ima 3 i 4 cm. Kolika joj je stvarna površina?","steps":["Stvarne stranice su 600 i 800 cm, odnosno 6 i 8 m. Razmeru primeni na svaku dužinu posebno.","P=6·8=48 m². Provera: površina na planu 12 cm² povećana je 200·200 puta."]},{"question":"Zaliha je 18 l, a dnevno se troši 2,5 l. Koliko punih dana ostaje najmanje 5 l?","steps":["Zapiši 18−2,5d≥5. Sredi na −2,5d≥−13 i podeli negativnim brojem: d≤5,2.","Najviše pet celih dana. Posle pet dana ostaje 5,5 l, posle šest samo 3 l."]},{"question":"Temena A(−1, 0), B(5, 0), C(2, 4) čine trougao. Kolika je površina u jediničnim kvadratima?","steps":["AB leži na osi x i dužina mu je 5−(−1)=6. Ordinata tačke C daje visinu od 4 jedinice.","P=6·4:2=12 kvadratnih jedinica."]}]
}, [
  ["Kota podmornice poraste sa −18 na −7 m. Koliki je uspon u m?","11","Krajnja kota minus početna.","−7−(−18)=11 m."],
  ["Trougao ima uglove 45° i 65°. Treći u stepenima?","70","Zbir mera tri unutrašnja ugla trougla je 180°.","180−45−65=70°."],
  ["Pravougaonik ima obim 18 cm i širinu 4 cm. Dužina u cm?","5","Poluobim je zbir susednih stranica.","18:2−4=5 cm."],
  ["Koliko mililitara iznosi [[frac:3|4]] litra?","750","Litar ima 1000 ml.","1000:4·3=750 ml."],
  ["Polovina proizvoda dva broja je −12. Prvi broj je 8. Drugi je koliko?","-3","Udvostruči dati rezultat.","Proizvod je −24. Drugi činilac je −24:8=−3."],
  ["Na karti 1:50000 izmereno je 6 cm. Koliko km je u stvarnosti?","3","Stvarnu dužinu prvo dobijaš u cm.","6·50000=300000 cm=3 km."],
  ["Trapez osnovica 8 i 12 m i visine 4 m zasađen je travom na 75% površine. Koliko m² je pod travom?","30","Prvo površina, zatim deo.","P=(8+12)·4:2=40 m². Tri četvrtine su 30 m²."],
  ["Tri radnika istog stalnog učinka završe posao za pet dana. Koliko dana treba pet radnika istog učinka za isti posao?","3","Sačuvaj ukupan rad.","3·5=15 radnih dana jedne osobe. Pet radnika radi 15:5=3 dana."],
  ["U trouglu jednakih krakova osnovica je za 3 cm kraća od kraka. Obim je 24 cm. Koliko cm ima osnovica?","6","Obim izrazi pomoću kraka.","Ako je krak x, onda 3x−3=24 daje x=9. Osnovica je 9−3=6 cm."],
  ["Bašta 5 m sa 4 m ima stazu širine 0,5 m duž cele unutrašnje ivice. Cena semena je 60 dinara po m² gredice. Koliki je trošak?","720","Smanji svaku dimenziju za dve širine staze.","Gredica ima 4 m sa 3 m. Trošak je 12·60=720 dinara."],
  ["Lift ide sa nivoa −2 tri nivoa gore i pet dole. Konačni nivo?","-4","Saberi pomeraje sa početnim nivoom.","−2+3−5=−4."],
  ["Duž na pravoj y=3 ima krajeve sa apscisama −4 i 10. Apscisa sredine?","3","Nađi aritmetičku sredinu.","(−4+10):2=3."],
  ["Posle sniženja od 15% ranac košta 1700 dinara. Kolika je puna cena?","2000","Plaćeno je 85% početne cene.","1700:0,85=2000 dinara."],
  ["Trougao se osnovicom oslanja na stranicu pravougaonika dužine 8 cm. Visina je 3 cm. Koji je obim trougla?",["Nema dovoljno podataka","11 cm","22 cm"],"Pomeraj vrh paralelno osnovici.","Osnovica i visina određuju površinu. Ostale dve stranice mogu menjati dužinu pa i obim."],
  ["U grupi je odnos učenika dve sekcije 3:2. U prvoj je 6 više nego u drugoj. Ukupan broj učenika ako je svako u tačno jednoj sekciji?","30","Razlika odgovara jednom delu.","Jedan deo je 6. Ukupno pet delova ima 30 učenika."],
  ["Koliko najmanje paketa površine pokrivanja 1,6 m² treba za pod od 9 m²?","6","Proveri dva susedna cela broja.","Pet paketa pokriva 8 m², šest pokriva 9,6 m². Zato je šest dovoljno."]
]);

import { unit } from "./unit";

export default unit({
  "id": "s8-kupa",
  "title": "Kupa, izvodnica i kružni isečak",
  "month": "april",
  "aim": "Poveži osni presek i mrežu kupe. Izaberi H ili s prema tome šta meriš.",
  "intro": "Od kružnog isečka napravi fišek spajanjem pravih ivica. Spajanjem se dužina luka ne menja. Taj luk postaje kružna ivica otvora i zato je dug tačno koliko i obim osnove.",
  "rules": [
    "Rotiraj pravougli trougao oko katete. Ona postaje visina H, druga kateta daje r, a hipotenuza opisuje omotač i ima dužinu izvodnice s. Ceo osni presek je jednakokraki trougao osnovice 2r.",
    "Razvijen omotač je isečak poluprečnika s. Njegov udeo u punom krugu je r:s jer je luk 2πr, a pun obim 2πs. Površina tog dela kruga iznosi πrs. Za zapreminu koristi normalnu visinu H.",
    "Izvodnicu u mreži meri od centra isečka do luka. Ona je hipotenuza polovine osnog preseka i duža je od svake katete."
  ],
  "formulas": [
    "r²+H²=s²",
    "M=πrs",
    "P=πr²+πrs",
    "V=[[frac:πr²H|3]]"
  ],
  "prerequisites": [
    "s8-valjak"
  ],
  "worked": [
    {
      "question": "Poluprečnik je 3 cm, H=4 cm. Nađi ukupnu površinu.",
      "steps": [
        "a²+b²=c². Katete su r i H, pa s²=9+16=25 i s=5 cm.",
        "P=πr²+πrs=9π+15π=24π cm²."
      ]
    },
    {
      "question": "Kupa ima r=4 dm i s=5 dm. Koliko litara zauzima?",
      "steps": [
        "a²+b²=c². U polovini osnog preseka 4²+H²=5². Iz 16+H²=25 sledi H²=9 i H=3 dm.",
        "V=πr²H:3=16π dm³, odnosno 16π l."
      ]
    },
    {
      "question": "Kružni isečak ima poluprečnik 12 cm, a osnova buduće kupe r=3 cm. Koliki je ugao isečka?",
      "steps": [
        "Traženi luk je 6π cm, dok je ceo obim kruga isečka 24π cm.",
        "Udeo je četvrtina, pa je ugao 360°:4=90°."
      ]
    }
  ]
}, [
  ["Koji oblik nastaje razvijanjem omotača prave kružne kupe?",["Kružni isečak","Pravougaonik","Ceo krug"],"Raseci omotač po jednoj izvodnici.","Ivice reza idu od vrha do krajeva luka. Čine dva poluprečnika isečka."],
  ["Koji element opisuje hipotenuza rotirajućeg trougla dok obilazi osu?",["Omotač","Osnovu","Visinu"],"Prati krajeve hipotenuze.","Jedan kraj miruje u vrhu, a drugi opisuje kružnicu osnove. Duž između njih prelazi preko omotača."],
  ["Ako je r=6 cm, dužina luka u mreži u cm, tačno?","12π","Luk prati celu ivicu osnove.","O=2πr=12π cm."],
  ["Kupa sa r=2 cm i s=7 cm ima omotač u cm², tačno?","14π","Pomnoži r, s i π.","M=πrs=14π cm²."],
  ["Izvodnica je 10 cm, r=6 cm. Nađi H u cm.","8","Prepolovi osni presek.","a²+b²=c². Iz r²+H²=s², 6²+H²=10², odnosno 36+H²=100 dobijaš H²=64 i H=8 cm."],
  ["Prečnik je 10 dm, visina 12 dm. Tačna zapremina kupe u litrima?","100π","Najpre prepolovi prečnik.","V=πr²H:3=25π·12:3=100π dm³=100π l."],
  ["Omotač je 45π cm² i r=5 cm. Kolika je ukupna površina u cm², tačno?","70π","Dodaj jednu osnovu.","P=B+M=25π+45π=70π cm²."],
  ["Kupa i valjak imaju istu osnovu i visinu. Valjak ima 27 l. Koliko litara ima kupa?","9","Uporedi V sa B·H.","Zapremina kupe je trećina zapremine valjka, pa je 27:3=9 l."],
  ["Polukrug poluprečnika 10 cm savijen je u omotač kupe. Nađi r osnove kupe u cm.","5","Dužina luka polukruga je polovina punog obima.","Luk je 10π cm, pa 2πr=10π. Zato r=5 cm."],
  ["V=96π cm³ i H=8 cm. Tačna dužina izvodnice u cm?","10","Iz zapremine najpre odredi r².","96π=8πr²:3 daje r²=36. Zatim a²+b²=c² i s²=36+64=100. Zato je s=10 cm."],
  ["Koja duž je poluprečnik isečka omotača?",["Izvodnica","Visina kupe","Prečnik osnove"],"Poveži vrh sa ivicom.","Rastojanje po omotaču od vrha do ivice osnove iznosi s."],
  ["Osni presek ima osnovicu 12 cm i visinu 8 cm. Površina tog preseka u cm²?","48","Ceo presek je trougao.","P_preseka=12·8:2=48 cm²."],
  ["Omotač ima luk 8π cm i poluprečnik isečka 12 cm. Ugao isečka u stepenima?","120","Uporedi luk sa obimom celog kruga.","Pun obim je 24π cm. Luk je trećina, pa je ugao 120°."],
  ["Ako je visina kupe 9 cm, a osnova 12 cm², kolika je zapremina u cm³?","36","Površina osnove je već data.","V=B·H:3=12·9:3=36 cm³."],
  ["Kupa ima omotač 40π cm² i izvodnicu 10 cm. Prečnik osnove u cm?","8","Iz omotača izračunaj r.","M=πrs daje r=4 cm, pa je d=8 cm."],
  ["Peščana kupa ima r=3 m i H=2 m. Tačna površina tla koju bi pokrio taj pesak u sloju debljine 0,5 m u m²?","12π","Ukupna zapremina ostaje ista.","V=π·9·2:3=6π m³. Za sloj visine 0,5 m važi B=6π:0,5=12π m²."]
], ["mreža","rotacija","luk","omotač","visina","zapremina","površina","poređenje","isečak","izvodnica"],
  ["Kupa ima površinu osnove 49π cm² i H=6 cm. Zapremina u cm³, tačno?","98π","Površina osnove već je izračunata.","V=B·H:3=49π·6:3=98π cm³."]);

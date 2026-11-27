import { unit } from "./unit";

export default unit({
  "id": "s8-prizma",
  "title": "Dijagonale, preseci i osnove pravih prizmi",
  "month": "january",
  "aim": "Izaberi presek koji sadrži traženu duž i poveži mere osnove sa visinom tela.",
  "intro": "Zamisli da dugačak štap treba spakovati u kutiju. Dijagonala poklopca može biti prekratka iako štap staje ukoso kroz unutrašnjost.",
  "rules": [
    "Dijagonalni presek prave prizme kroz dijagonalu osnove i paralelne bočne ivice jeste pravougaonik. Njegove stranice su dijagonala osnove i visina prizme. Trostrana prizma nema dijagonalu osnove.",
    "Za pravu prizmu omotač čine pravougaonici iste visine. Saberi njihove površine, zatim dodaj obe osnove. Pravilna šestostrana osnova se deli na šest jednakostraničnih trouglova.",
    "Nemoj zameniti dijagonalu strane prostornom dijagonalom. Kod šestougla prvo utvrdi koju od dve vrste dijagonala presek sadrži."
  ],
  "formulas": [
    "M=O·H",
    "P=2B+M",
    "V=B·H",
    "a²+b²=c²"
  ],
  "prerequisites": [
    "prizma-zapremina"
  ],
  "worked": [
    {
      "question": "Koliko lica ima prava trostrana prizma?",
      "steps": [
        "Dve osnove su trouglovi. Svakoj od tri stranice osnove odgovara po jedan pravougaonik.",
        "Ukupno ima 2+3=5 lica."
      ]
    },
    {
      "question": "Kvadar meri 3 cm, 4 cm i 12 cm. Kolika je prostorna dijagonala?",
      "steps": [
        "a²+b²=c². U osnovi su katete 3 i 4, pa d²=9+16=25 i d=5 cm.",
        "U dijagonalnom preseku katete su d i H. Zato je D²=25+144=169. Dužina je D=13 cm."
      ]
    },
    {
      "question": "Pravilna šestostrana prizma ima a=2 cm i H=5 cm. Odredi zapreminu.",
      "steps": [
        "Osnovu podeli na šest jednakostraničnih trouglova. Jedan ima površinu a²√3:4=√3 cm².",
        "B=6√3 cm² i V=B·H=30√3 cm³."
      ]
    }
  ]
}, [
  ["Koliko osnova ima svaka prizma?","2","Uporedi pod i poklopac kutije.","Osnove su dva podudarna mnogougla u paralelnim ravnima."],
  ["Koji je oblik dijagonalnog preseka prave prizme?",["Pravougaonik","Trapez sa različitim osnovicama","Krug"],"Prati bočne ivice.","Bočne ivice su normalne na osnovu pa su sva četiri ugla prava."],
  ["Kocka ivice 4 cm ima zapreminu od koliko cm³?","64","Nađi površinu kvadratne osnove.","V=B·H=16·4=64 cm³."],
  ["Obim osnove prave prizme je 18 cm, visina 7 cm. Omotač u cm²?","126","Razvij bočne strane u traku.","M=O·H=18·7=126 cm²."],
  ["Kvadar ima osnovu 6 cm puta 8 cm. Kolika je dijagonala osnove u cm?","10","Katete su ivice osnove.","a²+b²=c² daje 36+64=d². Pozitivna dužina je 10 cm."],
  ["Osnova prizme je pravougli trougao kateta 5 i 12 cm, visina prizme 4 cm. Zapremina u cm³?","120","Prepolovi proizvod kateta.","B=5·12:2=30 cm². V=B·H=120 cm³."],
  ["Kocka ima dijagonalu strane 6√2 cm. Kolika je njena ivica u cm?","6","Izdvoji kvadratnu stranu.","Katete su obe ivice a kvadratne strane, hipotenuza je dijagonala d. a²+a²=d²; a²+a²=(6√2)²; 2a²=72; a²=36. Kako je a>0, a=6 cm."],
  ["Najduža dijagonala pravilne šestougaone osnove je 14 cm. Kolika je stranica u cm?","7","Spoji naspramna temena kroz centar.","Dijagonalu čine dva poluprečnika opisane kružnice. Svaki je jednak stranici, pa je a=14:2=7 cm."],
  ["Prostorna dijagonala kvadra je 17 cm, a dijagonala osnove 15 cm. Visina u cm?","8","Hipotenuza prelazi iz donje u gornju osnovu.","Katete dijagonalnog preseka su d i H, hipotenuza D. d²+H²=D²; 15²+H²=17²; 225+H²=289; H²=289−225=64. Kako je H>0, H=8 cm."],
  ["Prizma ima pravilnu šestougaonu osnovu stranice 4 cm i visinu 9 cm. Tačna zapremina u cm³?","216√3","Osnovu rastavi na šest trouglova.","Svaki ima površinu 4√3 cm². V=6·4√3·9=216√3 cm³."],
  ["Koliko bočnih strana ima šestostrana prizma?","6","Prebroj stranice osnove.","Svaka od šest stranica nosi po jednu bočnu stranu."],
  ["Dijagonalni presek ima stranice 9 cm i 12 cm. Njegova dijagonala u cm?","15","Izdvoji polovinu pravougaonika.","a²+b²=c². Zbir kvadrata je 81+144=225, pa je c=15 cm."],
  ["Kvadar ima B=48 cm², jednu osnovnu ivicu 6 cm i H=7 cm. Ukupna površina u cm²?","292","Pronađi drugu osnovnu ivicu.","Druga ivica je 48:6=8 cm. P=2B+O·H=96+28·7=292 cm²."],
  ["Za koju prizmu ne postoji dijagonalni presek kroz dijagonalu osnove?",["Trostranu","Četvorostranu","Šestostranu"],"Pogledaj temena osnove.","U trouglu svaki par temena određuje stranicu."],
  ["Prava prizma ima dve osnove po 15 cm² i omotač 72 cm². Ukupna površina u cm²?","102","Računaj oba poklopca.","P=2B+M=30+72=102 cm²."],
  ["Kutija je iznutra 9 cm puta 12 cm puta 20 cm. Najduži tanak prav štap koji staje ima koliko cm?","25","Računaj najpre dijagonalu dna.","a²+b²=c². U osnovi d²=81+144=225, d=15 cm. U preseku D²=225+400=625 pa D=25 cm."]
], ["osnove","oblik","zapremina","omotač","presek","trougaona-osnova","strana","šestougao","visina","zapremina"],
  ["Prava prizma ima B=32 cm² i ukupnu površinu 154 cm². Omotač u cm²?","90","Odvoji dve osnove od ukupne površine.","M=P−2B=154−64=90 cm²."]);

import { unit } from "./unit";

export default unit({
  "id": "s8-tela",
  "title": "Pet tela, složeni oblici i merne jedinice",
  "month": "may",
  "aim": "Raščlani složeno telo, izostavi spojene površine i uskladi merne jedinice.",
  "intro": "Vodotoranj možeš zamisliti kao valjak sa poluloptom na vrhu. Za količinu vode sabiraš unutrašnje zapremine. Za farbanje treba prepoznati koje su površine spolja dostupne.",
  "rules": [
    "Prizma i valjak imaju V=B·H. Piramida i kupa imaju V=B·H:3. Za loptu koristi V=4πR³:3. Osni presek valjka je pravougaonik, kupe jednakokraki trougao, a centralni presek lopte veliki krug.",
    "Nacrtaj presek duž zajedničke ose i posebno označi spojeve. Za površinu zatvorene prave prizme ili valjka uzmi 2B+M, za piramidu ili kupu B+M. Površina sfere je 4πR². Kod spoja ukloni obe dodirne površine.",
    "Pri pretvaranju jedinica za površinu kvadriraš dužinski faktor. Za zapreminu ga kubiraš. Jedan litar je jedan kubni decimetar, a jedan mililitar je jedan kubni centimetar."
  ],
  "formulas": [
    "1 dm²=100 cm²",
    "1 dm³=1000 cm³=1 l",
    "1 m³=1000 l"
  ],
  "prerequisites": [
    "s8-lopta",
    "s8-zapremina",
    "s8-valjak"
  ],
  "worked": [
    {
      "question": "Koliko litara staje u kvadar unutrašnjih dimenzija 30 cm, 20 cm i 15 cm?",
      "steps": [
        "Pretvori ivice u dm. Mere su 3 dm, 2 dm i 1,5 dm.",
        "V=3·2·1,5=9 dm³, pa staje 9 l."
      ]
    },
    {
      "question": "Valjak i kupa poluprečnika 2 cm i visine 6 cm spojeni su osnovama. Odredi ukupnu zapreminu.",
      "steps": [
        "Oba imaju B=4π cm². Valjak ima V=24π cm³, kupa trećinu te količine, 8π cm³.",
        "Tela se samo dodiruju na granici, pa sabiranjem dobijaš 32π cm³."
      ]
    },
    {
      "question": "Kapsula ima valjak r=3 cm, H=8 cm i na svakom kraju po poluloptu. Odredi spoljašnju površinu.",
      "steps": [
        "Omotač je 2πrH=48π cm². Dve polusfere zajedno čine celu sferu, 4πr²=36π cm².",
        "Kružne osnove su unutrašnji spojevi. Spoljašnja površina iznosi 84π cm²."
      ]
    }
  ]
}, [
  ["Koliko cm² ima 2,5 dm²?","250","Jedan dm ima deset cm.","Jedan dm² ima 100 cm². Zato 2,5·100=250 cm²."],
  ["Koliko litara ima 3500 cm³?","3,5","Prevedi u dm³.","3500:1000=3,5 dm³=3,5 l."],
  ["Koja formula odgovara zapremini i kupe i piramide?",["B·H:3","B·H","3B·H"],"Potrebne su površina osnove i normalna visina.","Oba tela imaju trećinu zapremine odgovarajućeg valjka odnosno prizme."],
  ["Koji je oblik osnog preseka kupe?",["Jednakokraki trougao","Krug","Pravougaonik"],"Zamisli ravan kroz osu.","Osnovica je prečnik osnove, a oba kraka su izvodnice."],
  ["Valjak zapremine 42 l i kupa iste osnove i visine zajedno imaju koliko litara?","56","Najpre odredi zapreminu kupe.","Kupa zauzima 42:3=14 l. Zajedno zauzimaju 56 l."],
  ["Kocka od 1 dm³ ima šupljinu od 125 cm³. Koliko cm³ materijala ostaje?","875","Uskladi jedinice.","1 dm³=1000 cm³. Razlika je 1000−125=875 cm³."],
  ["Dve kocke ivice 2 cm spojene su celim stranama. Spoljašnja površina u cm²?","40","Obe dodirne strane su skrivene.","Zbir površina je 48 cm². Oduzmi 2·4=8 cm² da dobiješ 40 cm²."],
  ["Kvadar ima osnovu 0,4 m² i H=25 cm. Zapremina u litrima?","100","Pretvori H u metre.","V=0,4·0,25=0,1 m³=100 l."],
  ["Kugla poluprečnika 3 cm upisana je u kocku. Zapremina kocke u cm³?","216","Stranica kocke jednaka je prečniku.","Ivica je 6 cm. V=6³=216 cm³."],
  ["Od valjka sa r=4 cm i H=9 cm uklonjena je kupa iste osnove i visine. Zapremina ostatka u cm³, tačno?","96π","Oduzmi trećinu zapremine valjka.","Valjak ima 144π cm³, kupa 48π cm³. Razlika je 96π cm³."],
  ["Koliko mililitara ima 48 cm³?","48","Jedan cm³ odgovara jednom mililitru.","48 jediničnih kocki zauzima 48 ml."],
  ["Piramida i prizma imaju jednake zapremine i jednake površine osnova. Visina piramide je koliko puta veća?","3","Izjednači B·H i B·h:3.","Posle deljenja sa B dobijaš h=3H. Piramida je tri puta viša."],
  ["Valjak r=2 dm i H=6 dm zatvoren je dvema poluloptama. Ukupna zapremina u dm³ kao koeficijent uz π?","104/3","Dve polulopte čine loptu.","Valjak ima 24π dm³, lopta 32π:3 dm³. Koeficijent je 24+32:3=104/3."],
  ["Koji presek lopte ima najveću površinu?",["Kroz centar","Tangentni","Svaki ima istu površinu"],"Posmatraj udaljenost ravni.","Za d=0 je ρ=R, najveći mogući poluprečnik."],
  ["Na rezervoaru piše 0,72 m³. Kolika mu je zapremina u litrima?","720","Prevedi metre u decimetre pre kubiranja.","1 m³=1000 dm³, pa je 0,72 m³=720 l."],
  ["Kocka ivice 6 cm ima kroz celu visinu kružni otvor poluprečnika 1 cm. Koliki je koeficijent uz π u zapremini uklonjenog materijala u cm³?","6","Izbušeni deo ima oblik valjka.","Otvor ima osnovu π cm² i visinu 6 cm pa je uklonjeno 6π cm³."]
]);

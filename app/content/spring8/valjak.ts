import { unit } from "./unit";

export default unit({
  "id": "s8-valjak",
  "title": "Valjak od rotacije do mreže i zapremine",
  "month": "april",
  "aim": "Prepoznaj osni presek, razvij omotač i biraj između površine i zapremine.",
  "intro": "Omotaj list papira oko konzerve i obeleži mesto spoja. Kada ga razviješ, jedna ivica lista obišla je ceo krug. Ista dužina pojavljuje se u formulama za obim osnove i površinu etikete.",
  "rules": [
    "Rotacijom pravougaonika oko jedne stranice nastaje pravi kružni valjak. Ta stranica je visina H, a susedna stranica ima dužinu poluprečnika r. Osni presek je pravougaonik dimenzija 2r i H.",
    "Mrežu čine dva kruga i pravougaonik dužine 2πr i širine H. Zapremina je površina osnove puta visina jer svi preseci paralelni osnovi imaju istu površinu.",
    "U osnom preseku cela širina je prečnik. Za otvorenu posudu izostavi poklopac, a debljinu zidova zanemari samo ako tako piše ili koristiš unutrašnje mere."
  ],
  "formulas": [
    "B=πr²",
    "M=2πrH",
    "P=2B+M",
    "V=B·H"
  ],
  "prerequisites": [
    "s8-prizma"
  ],
  "worked": [
    {
      "question": "Kolika je površina etikete na valjku sa r=3 cm i H=8 cm?",
      "steps": [
        "Etiketa pokriva samo omotač. Pravougaonik u mreži ima stranice 6π cm i 8 cm.",
        "M=2πrH=48π cm²."
      ]
    },
    {
      "question": "Akvarijum ima unutrašnji prečnik 4 dm i visinu vode 5 dm. Koliko litara vode ima?",
      "steps": [
        "Poluprečnik je 2 dm. Zapremina vode V=πr²H=20π dm³.",
        "Kako je 1 dm³=1 l, tačno je 20π l. Uz π≈3,14 dobijaš približno 62,8 l."
      ]
    },
    {
      "question": "Osni presek ima dijagonalu 13 cm i prečnik 5 cm. Odredi H.",
      "steps": [
        "a²+b²=c². Katete su 5 cm i H, hipotenuza je 13 cm. Dakle 5²+H²=13².",
        "25+H²=169, H²=144. Pozitivna dužina je H=12 cm."
      ]
    }
  ]
}, [
  ["Pravougaonik 3 cm puta 7 cm rotira oko stranice duge 7 cm. Poluprečnik valjka u cm?","3","Rastojanje do ose je poprečna mera.","Suprotna stranica prolazi na udaljenosti 3 cm od ose."],
  ["Šta je omotač valjka posle razvijanja?",["Pravougaonik","Kružni isečak","Krug"],"Prati dve kružne ivice pri odmotavanju.","Obe se razvijaju u jednake paralelne duži dužine 2πr."],
  ["Valjak ima r=5 cm. Površina jedne osnove u cm², tačno?","25π","Osnova je krug.","B=πr²=25π cm²."],
  ["Prečnik limenke je 8 cm. Dužina etikete u cm bez preklopa, tačno?","8π","Etiketa treba da obiđe ceo krug.","O=πd=8π cm."],
  ["Valjak ima r=2 cm i H=9 cm. Ukupna površina u cm², tačno?","44π","Obe osnove ulaze u zbir.","P=2πr²+2πrH=8π+36π=44π cm²."],
  ["Cev unutrašnjeg poluprečnika 3 dm duga je 2 dm. Koliko litara stane, tačno?","18π","Za zapreminu koristi unutrašnje mere.","V=πr²H=9π·2=18π dm³=18π l."],
  ["Osni presek je kvadrat površine 100 cm². Visina valjka u cm?","10","Visina je stranica kvadrata.","H²=100 i H=10 cm."],
  ["Omotač iznosi 60π cm², H=6 cm. Poluprečnik u cm?","5","Izrazi nepoznatu iz M=2πrH.","60π=12πr. Posle deljenja sa 12π sledi r=5 cm."],
  ["Dijagonala osnog preseka je 17 cm, a visina 15 cm. Koliki je poluprečnik u cm?","4","Traži prečnik kao katetu.","a²+b²=c². d²+225=289, d²=64 i d=8 cm. Poluprečnik je 4 cm."],
  ["Otvorena cilindrična posuda sa jednim dnom ima r=4 cm i H=6 cm. Potrebna površina lima bez otpada u cm², tačno?","64π","Računaj jednu osnovu i ceo omotač.","B+M=16π+2π·4·6=64π cm²."],
  ["Koliko krugova ima mreža zatvorenog valjka?","2","Pogledaj vrh i dno.","Obe osnove su podudarni krugovi."],
  ["Zapremina je 75π cm³ i r=5 cm. Visina u cm?","3","Podeli zapreminu površinom osnove.","V=B·H, a B=25π cm². Zato H=3 cm."],
  ["Kod istog valjka poluprečnik se utrostruči, a visina prepolovi. Faktor promene zapremine?","4,5","Poluprečnik se kvadrira.","V se množi sa 3²·0,5=4,5."],
  ["Osni presek valjka sa r=3 cm i H=8 cm ima površinu od koliko cm²?","48","Cela širina je prečnik.","Presek je pravougaonik stranica 6 i 8 cm. Površina je 48 cm²."],
  ["Etiketa je duga 14π cm i visoka 4 cm. Nađi prečnik limenke u cm ako nema preklopa.","14","Dužina je obim kruga.","πd=14π daje d=14 cm."],
  ["Voda iz punog valjka poluprečnika 2 dm i visine 9 dm preliva se u valjak poluprečnika 3 dm. Nivo vode u dm ako ništa ne iscuri?","4","Zapremina vode se čuva.","Prvi valjak sadrži 36π dm³. U drugom je B=9π dm², pa H=36π:(9π)=4 dm."]
], ["rotacija","mreža","osnova","etiketa","presek","zapremina","kvadrat","visina","dijagonala","posuda"],
  ["Osni presek valjka ima obim 36 cm i H=10 cm. Nađi r u cm.","4","Druga stranica pravougaonika je prečnik.","2(d+10)=36 pa d=8 cm i r=4 cm."]);

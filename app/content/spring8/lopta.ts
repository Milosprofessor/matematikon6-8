import { unit } from "./unit";

export default unit({
  "id": "s8-lopta",
  "title": "Lopta, sfera i ravni preseci",
  "month": "may",
  "aim": "Razlikuj telo i njegovu granicu, izračunaj površinu, zapreminu i poluprečnik preseka.",
  "intro": "Zamisli pomorandžu tankog omotača. Cela pomorandža predstavlja loptu, a spoljašnja površ predstavlja sferu. Nož kroz sredinu pravi najveći kružni presek.",
  "rules": [
    "Rotacijom polukruga oko prečnika nastaje lopta, a rotacijom polukružnice sfera. Lopta obuhvata tačke na rastojanju najviše R od centra. Na sferi sve tačke imaju rastojanje tačno R.",
    "Na udaljenosti d<R od centra ravan seče loptu po krugu, sferu po kružnici. Centar preseka je podnožje normale iz centra lopte. Poluprečnik preseka ρ i rastojanje d su katete, R je hipotenuza. Za d=R presek je jedna tačka, za d>R je prazan.",
    "Površinu sfere izrazi kvadratnim, zapreminu lopte kubnim jedinicama. Za sferu ne postoji ravna mreža bez razvlačenja ili cepanja."
  ],
  "formulas": [
    "P=4πR²",
    "V=[[frac:4πR³|3]]",
    "d²+ρ²=R²"
  ],
  "prerequisites": [
    "s8-kupa"
  ],
  "worked": [
    {
      "question": "Nađi površinu sfere prečnika 6 cm.",
      "steps": [
        "R=3 cm. Površina je četiri puta površina velikog kruga.",
        "P=4π·3²=36π cm²."
      ]
    },
    {
      "question": "Lopta ima R=5 cm. Ravan je 3 cm od centra. Koliki je poluprečnik preseka?",
      "steps": [
        "a²+b²=c². Katete su d i ρ, hipotenuza R. Dakle 3²+ρ²=5².",
        "9+ρ²=25 daje ρ²=16 i pozitivnu dužinu ρ=4 cm. Površina kružnog preseka je 16π cm²."
      ]
    },
    {
      "question": "Koliko zapremine zauzima polulopta prečnika 12 dm?",
      "steps": [
        "Poluprečnik je 6 dm. V cele lopte je 4π·216:3=288π dm³.",
        "Polulopta zauzima polovinu, odnosno 144π dm³."
      ]
    }
  ]
}, [
  ["Šta nastaje rotacijom polukružnice oko prečnika?",["Sfera","Puna lopta","Valjak"],"Prati samo zakrivljenu liniju.","Svaka njena tačka ostaje na istom rastojanju od centra."],
  ["Prečnik lopte je 14 cm. Poluprečnik u cm?","7","Centar prepolovljava prečnik.","R=14:2=7 cm."],
  ["Ravan prolazi kroz centar lopte. Koji presek nastaje?",["Veliki krug","Tačka","Kružni prsten"],"Presek sadrži prečnik lopte.","Dobijeni krug ima isti poluprečnik kao lopta."],
  ["Koliko zajedničkih tačaka ima sfera sa tangentnom ravni?","1","Udaljenost ravni je R.","Dodirna tačka je podnožje normale iz centra."],
  ["R=4 cm. Površina sfere u cm², tačno?","64π","Prvo kvadriraj R.","P=4πR²=4·16π=64π cm²."],
  ["Lopta ima R=3 dm. Zapremina u litrima, tačno?","36π","Kubiraj poluprečnik.","V=4π·27:3=36π dm³=36π l."],
  ["Sfera ima površinu 100π cm². Nađi prečnik u cm.","10","Prvo izdvoji R².","4πR²=100π, R²=25 i R=5 cm. Prečnik je 10 cm."],
  ["Ravan je 12 cm od centra, R=13 cm. Poluprečnik preseka u cm?","5","Spoji centar lopte sa tačkom na ivici preseka.","Katete su rastojanje d i poluprečnik preseka ρ, hipotenuza R. d²+ρ²=R²; 12²+ρ²=13²; 144+ρ²=169; ρ²=169−144=25. Kako je ρ>0, ρ=5 cm."],
  ["Površina preseka lopte poluprečnika 10 cm je 64π cm². Rastojanje ravni od centra u cm?","6","Iz površine kruga odredi njegov poluprečnik.","P=πρ²=64π cm², pa je ρ²=64 i ρ=8 cm jer je poluprečnik pozitivan. Katete su d i ρ, hipotenuza R. d²+ρ²=R²; d²+8²=10²; d²+64=100; d²=100−64=36. Rastojanje nije negativno, pa je d=6 cm."],
  ["Osam jednakih punih kugli poluprečnika 2 cm pretapa se bez gubitka u jednu. Novi poluprečnik u cm?","4","Sačuvaj ukupnu zapreminu.","4πR³:3=8·4π·2³:3 daje R³=64. Pozitivno rešenje je R=4 cm."],
  ["Ako je d veće od R, kakav je presek ravni i lopte?",["Prazan","Krug","Jedna tačka"],"Uporedi rastojanje centra sa najvećim dometom lopte.","Sve tačke ravni su dalje od R pa nijedna nije u lopti."],
  ["Poluprečnik naraste tri puta. Koliko puta se poveća površina sfere?","9","Prati stepen poluprečnika.","P je proporcionalna sa R², pa je faktor 3²=9."],
  ["Kupola je polusfera poluprečnika 5 m. Površina za bojenje samo spolja, bez poda, u m², tačno?","50π","Uzmi polovinu površine sfere.","P=4π·25:2=50π m². Ravni kružni pod ne bojimo."],
  ["Ravan kroz centar seče sferu po kom objektu?",["Kružnici","Punom krugu","Prečniku"],"Sfera je samo granica lopte.","Presek sadrži tačke na obodu velikog kruga."],
  ["Površina velikog kruga je 49π cm². Površina sfere u cm², tačno?","196π","Uporedi dve formule.","P_sfere=4πR²=4·49π=196π cm²."],
  ["Voda sasvim prekrije punu kuglu poluprečnika 3 dm u uspravnom valjku sa B=12π dm². Porast nivoa u dm bez prelivanja?","3","Istisnuta zapremina jednaka je zapremini kugle.","Kugla zauzima 4π·27:3=36π dm³. Porast je 36π:(12π)=3 dm."]
], ["rotacija","prečnik","presek","tangenta","površina","zapremina","prečnik","radijus","rastojanje","pretapanje"],
  ["Poluprečnik preseka je 8 cm, udaljenost ravni od centra 6 cm. Prečnik lopte u cm?","20","Pronađi hipotenuzu odgovarajućeg trougla.","a²+b²=c². R²=64+36=100, pa R=10 cm i prečnik 20 cm."]);

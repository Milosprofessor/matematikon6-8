import { unit } from "./unit";

export default unit({
  "id": "s8-zapremina",
  "title": "Zapremina piramide i karakteristični preseci",
  "month": "february",
  "aim": "Izračunaj zapreminu, odredi nepoznatu dimenziju i objasni koji presek je potreban.",
  "intro": "Šiljati sud i prizma mogu imati iste otvore i visinu. Koliko punih šiljatih sudova stane u prizmu? Napravi procenu, zatim uporedi formule.",
  "rules": [
    "Za svaku piramidu zapremina je trećina proizvoda površine osnove i normalne visine. Trougaona, pravougaona i šestougaona osnova zahtevaju različit račun za B.",
    "Dijagonalni presek prolazi kroz vrh i dijagonalu osnove. Kada je vrh iznad centra pravougaonika, dijagonala prolazi kroz podnožje visine. U pravilnoj piramidi trougao kroz vrh, centar i teme osnove povezuje H sa bočnom ivicom.",
    "Pravilna trostrana piramida ima jednakostraničnu osnovu. Sve ivice su jednake samo u posebnom slučaju pravilnog tetraedra."
  ],
  "formulas": [
    "V=[[frac:B·H|3]]",
    "P=B+M"
  ],
  "prerequisites": [
    "s8-piramida"
  ],
  "worked": [
    {
      "question": "Osnova piramide meri 4 cm puta 9 cm, H=10 cm. Kolika je zapremina?",
      "steps": [
        "B=4·9=36 cm². Normalna visina je data pa položaj vrha iznad osnove nije potreban.",
        "V=B·H:3=36·10:3=120 cm³."
      ]
    },
    {
      "question": "Pravilna trostrana piramida ima a=6 cm i H=5 cm. Odredi V.",
      "steps": [
        "Jednakostranična osnova ima B=a²√3:4=9√3 cm².",
        "Trećina proizvoda je 9√3·5:3=15√3 cm³."
      ]
    },
    {
      "question": "Pravilna šestostrana piramida ima osnovnu ivicu 5 cm i bočnu ivicu 13 cm. Kolika je H?",
      "steps": [
        "Spoji centar osnove sa temenom. Duž je poluprečnik opisanog kruga i meri 5 cm. Hipotenuza je bočna ivica.",
        "a²+b²=c². Iz 5²+H²=13² sledi 25+H²=169, H²=144. Pozitivna visina je 12 cm."
      ]
    }
  ]
}, [
  ["B=15 cm², H=6 cm. Kolika je zapremina piramide u cm³?","30","Računaj trećinu zapremine prizme.","V=B·H:3=15·6:3=30 cm³."],
  ["Zapremina prizme je 81 dm³. Piramida iste osnove i visine ima koliko dm³?","27","Uporedi koeficijente formula.","Piramida zauzima trećinu odgovarajuće zapremine, 81:3=27 dm³."],
  ["Koja jedinica opisuje zapreminu?",["dm³","dm²","dm"],"Zamisli punjenje malim kockama.","Broj jediničnih kocki daje kubnu meru."],
  ["Da li je svaka pravilna trostrana piramida pravilni tetraedar?",["Ne","Da"],"Uporedi osnovnu i bočnu ivicu.","U pravilnoj trostranoj piramidi bočne ivice su međusobno jednake, ali mogu biti duže od osnovne."],
  ["Pravougaona osnova je 3 cm puta 8 cm. Za V=72 cm³ nađi H u cm.","9","Prvo izračunaj B.","Iz 72=24H:3 sledi 216=24H i H=9 cm."],
  ["Pravilna četvorostrana piramida ima V=48 dm³ i H=9 dm. Osnovna ivica u dm?","4","Traži površinu kvadrata.","B=3·48:9=16 dm². Pozitivna stranica je √16=4 dm."],
  ["Površina trougaone osnove iznosi 18√3 cm², a H=4 cm. Tačna zapremina u cm³?","24√3","Broj √3 zadrži u računu.","V=B·H:3=18√3·4:3=24√3 cm³."],
  ["Visina piramide se prepolovi, a površina osnove utrostruči. Kojim brojem se množi V?","1,5","Uporedi proizvode B i H.","Faktor promene je 3·0,5=1,5."],
  ["Vrh piramide je 12 cm iznad centra osnove 6 cm puta 8 cm. Bočna ivica u cm?","13","Od centra do temena ima pola dijagonale.","a²+b²=c². Dijagonala osnove zadovoljava d²=36+64=100. Polovina je 5 cm. Bočna ivica ima e²=25+144=169 i e=13 cm."],
  ["Piramida sa pravilnom šestougaonom osnovom ima a=2 cm i V=18√3 cm³. H u cm?","9","Osnovu čini šest jednakostraničnih trouglova.","B=6·√3 cm². Iz 18√3=6√3·H:3 sledi H=9 cm."],
  ["Ako H ostaje ista a B se udvostruči, zapremina se množi kojim brojem?","2","U formuli prati samo B.","V je direktno proporcionalna sa B pri stalnoj visini."],
  ["Piramida ima V=56 cm³ i H=7 cm. Površina osnove u cm²?","24","Pomnoži jednačinu zapremine sa 3.","3V=B·H, pa B=168:7=24 cm²."],
  ["Kvadratna osnova ima stranicu 8 cm. Vrh je iznad centra, a bočna visina je 5 cm. V u cm³?","64","U preseku koristi polovinu osnovne ivice.","a²+b²=c². Iz H²+4²=5² sledi H²+16=25, H²=9 i H=3 cm. V=64·3:3=64 cm³."],
  ["Koliko puta je veća zapremina prizme od zapremine piramide iste osnove i visine?","3","Uporedi oba proizvoda.","B·H je tri puta veće od B·H:3."],
  ["Dijagonalni presek pravilne četvorostrane piramide ima osnovicu 10 cm i visinu 6 cm. Njegova površina u cm²?","30","Presek je trougao.","P_preseka=10·6:2=30 cm²."],
  ["Od bloka 6 dm puta 5 dm puta 9 dm ostaje piramida jednake osnove i visine. Zapremina uklonjenog dela u litrima?","180","Oduzmi zapremine u istoj jedinici.","Blok ima 270 dm³, piramida 90 dm³. Razlika je 180 dm³ odnosno 180 l."]
], ["zapremina","poređenje","jedinica","pravilnost","visina","ivica","trougao","skaliranje","presek","šestougao"],
  ["Šator piramidalnog oblika ima B=18 m² i H=2,5 m. Unutrašnja zapremina u m³?","15","Visina je normalna na pod.","V=B·H:3=18·2,5:3=15 m³."]);

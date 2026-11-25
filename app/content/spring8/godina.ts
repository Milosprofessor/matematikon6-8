import { unit } from "./unit";

export default unit({
  "id": "s8-godina",
  "title": "Godišnja sistematizacija i istraživanje ambalaže",
  "month": "may",
  "aim": "Poveži razmeru, jednačine, funkcije i merenje. Obrazloži izbor modela i proveri rezultat.",
  "intro": "Izaberi dve čiste prazne ambalaže ili nacrtaj dva predloga posude. U paru dogovorite šta ispitujete: potrebnu količinu materijala ili kapacitet. Zabeležite pretpostavke, dimenzije i jedinice pre računanja.",
  "rules": [
    "Napravite tabelu sa izmerenim veličinama, skicom preseka, očekivanom površinom i zapreminom. Za poređenje kapaciteta koristite unutrašnje mere. Ako dimenzije odstupaju od savršenog tela, obrazložite kako to utiče na procenu.",
    "Prikažite dva rešenja istog problema. Jedna grupa može izračunati teorijski kapacitet, druga ga uporediti sa deklaracijom. Izračunajte odstupanje, predstavite rezultat i predložite jedno preciznije merenje. Nastavnik procenjuje obrazloženje i učešće.",
    "Za slična tela faktor dužine k znači faktor k² za površine i k³ za zapremine. Pri poređenju ponuda odvoji fiksni deo cene od promenljivog."
  ],
  "formulas": [
    "P₂=k²P₁",
    "V₂=k³V₁",
    "y=kx+n"
  ],
  "prerequisites": [
    "s8-tela",
    "s8-model"
  ],
  "worked": [
    {
      "question": "Kućica za maketu ima visinu 18 cm u razmeri 1 prema 50. Stvarna visina?",
      "steps": [
        "Pomnoži 18 cm sa 50. Sve dužine koriste istu razmeru.",
        "Dobijaš 900 cm=9 m. Površina bi se menjala faktorom 2500."
      ]
    },
    {
      "question": "Model predviđa 1,2 l, a deklaracija navodi 1,15 l. Za koliko ml je procena veća?",
      "steps": [
        "Razliku računaj u istoj jedinici. 1,2−1,15=0,05 l.",
        "Pomnoži sa 1000 i dobij 50 ml. Proveri jesu li merene unutrašnje dimenzije."
      ]
    },
    {
      "question": "Za izradu kutija postoje ponude 600+12x i 300+18x dinara. Za koliko kutija su jednake?",
      "steps": [
        "x predstavlja broj kutija. Izjednači troškove i oduzmi 300+12x sa obe strane.",
        "300=6x daje x=50. Obe ponude tada koštaju 1200 dinara i broj kutija je ceo."
      ]
    }
  ]
}, [
  ["U razmeri 1 prema 25 duž od 4 cm predstavlja koliko metara?","1","Računaj prvo u cm.","4·25=100 cm=1 m."],
  ["Kod jednakih odgovarajućih uglova dva trougla su kakva?",["Slična","Obavezno podudarna","Obavezno pravougla"],"Priseti se stava UU.","Dva jednaka odgovarajuća ugla određuju sličnost, dok veličine mogu biti različite."],
  ["Koliko cm ima ortogonalna projekcija duži normalne na ravan?","0","Posmatraj podnožja normala.","Krajevi se projektuju u istu tačku, pa je dužina projekcije nula."],
  ["U planu merenja mase i zapremine čime meriš kapacitet?",["Graduiranom posudom","Uglomerom","Šestarom"],"Odaberi spravu sa odgovarajućim jedinicama.","Podeoci u ml ili l omogućavaju očitavanje zapremine."],
  ["Prihvatljiva masa x zadovoljava 8−2x≥2. Najveći dozvoljeni x?","3","Prati znak pri deljenju.","−2x≥−6. Deljenjem negativnim brojem dobijaš x≤3."],
  ["Uzorak od tri merenja ima 490, 505 i 505 ml. Prosek u ml?","500","Saberi pa podeli brojem merenja.","1500:3=500 ml. Prosek zadržava jedinicu merenja."],
  ["Kutija sa kvadratnom osnovom ima H=5 cm i V=245 cm³. Osnovna ivica u cm?","7","Izračunaj B.","B=245:5=49 cm² i pozitivna ivica je 7 cm."],
  ["Za svaki dodatni litar trošak raste za 8 dinara. Trošak za 3 l je 34 dinara. Fiksni deo u dinarima?","10","Zapiši y=8x+n.","34=8·3+n pa je n=10 dinara."],
  ["Dva slična modela imaju zapremine u odnosu 1 prema 27. Koliko puta je veća površina većeg modela?","9","Nađi prvo faktor dužine.","k³=27 daje k=3. Površinski faktor je 3²=9."],
  ["Razlika cena A−B je 80−5x dinara. Od kog celog broja komada je A strogo jeftinija?","17","Postavi razliku manju od nule.","80−5x<0 daje −5x<−80, pa x>16. Najmanji ceo broj je 17."],
  ["Za zapreminu unutrašnjosti limenke koristiš koje mere?",["Unutrašnje","Samo spoljašnje bez obzira na debljinu","Samo masu lima"],"Odredi koji deo prima tečnost.","Unutrašnji poluprečnik i visina određuju slobodan prostor."],
  ["Ako se dužine svih stranica kvadra uvećaju dva puta, zapremina raste koliko puta?","8","Posmatraj tri dimenzije.","Svaki od tri činioca dobija faktor 2, zajedno 8."],
  ["Tabela pokazuje 6 kutija za 270 dinara i 10 za 410 dinara uz linearan cenovnik. Cena 8 kutija u dinarima?","340","Odredi promenu cene po kutiji.","Razlika 140 za četiri kutije znači 35 po kutiji. Od šest do osam dodaj 70 pa je cena 340."],
  ["Koja veličina se izražava u kvadratnim centimetrima?",["Površina etikete","Zapremina soka","Dužina šava"],"Biraj prema broju dimenzija.","Etiketa zauzima deo površi i meri se u cm²."],
  ["Dve slične trougaone strane imaju odgovarajuće osnovice 6 i 9 cm. Ako je manja površina 20 cm², veća u cm²?","45","Kvadriraj razmeru dužina.","k=9:6=1,5. Veća površina iznosi 20·2,25=45 cm²."],
  ["Rezervoar gubi 4 l u minuti. Posle 7 minuta ostaje 50 l. Posle koliko minuta od početka ostaje tačno 10 l?","17","Prvo nađi početnu zapreminu.","Na početku je bilo 50+28=78 l. Iz 78−4t=10 sledi t=17 min. Provera: 78−68=10 l."]
], ["razmera","sličnost","projekcija","merenje","nejednačina","prosek","osnova","tarifa","slična-tela","poređenje"],
  ["Dva plana imaju razmere 1 prema 100 i 1 prema 250. Isti zid je na prvom dug 15 cm. Dužina na drugom u cm?","6","Oba plana predstavljaju istu stvarnu dužinu.","Zid ima 1500 cm. U razmeri 1 prema 250 crtež meri 1500:250=6 cm."]);

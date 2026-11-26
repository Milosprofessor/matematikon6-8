import { unit } from "./unit";

export default unit({
  "id": "s8-funkcija",
  "title": "Od zavisnosti i tabele do grafika",
  "month": "february",
  "aim": "Sastavi tabelu, nacrtaj pravu i protumači nagib i početnu vrednost.",
  "intro": "Cena vožnje uključuje polazak i dodatak po kilometru. Dve vožnje iste dužine po istoj tarifi imaju istu cenu. Dužina je ulaz, cena je izlaz.",
  "rules": [
    "Funkcija svakom dozvoljenom x pridružuje tačno jedno y. U obrascu y=kx+n broj n je vrednost za x=0. Broj k pokazuje za koliko se y promeni kada x poraste za 1.",
    "Izaberi dve različite vrednosti x, izračunaj odgovarajuće y i ucrtaj parove. Kroz tačke povuci pravu. U praktičnom problemu zadrži samo deo grafika koji odgovara dozvoljenim ulazima.",
    "Vertikalna prava x=3 sadrži, na primer, (3; 0) i (3; 1). Jednom x pridružuje više vrednosti y pa ne predstavlja grafik ove funkcije."
  ],
  "formulas": [
    "y=kx+n",
    "Δy=k·Δx"
  ],
  "prerequisites": [
    "svodjenje-jednacina"
  ],
  "worked": [
    {
      "question": "Napravi tabelu za y=2x−1.",
      "steps": [
        "Za x=−1 dobijaš −3, za x=0 dobijaš −1, za x=2 dobijaš 3.",
        "Ucrtaj (−1; −3) i (0; −1). Produži pravu i proveri da prolazi kroz (2; 3)."
      ]
    },
    {
      "question": "Prava prolazi kroz (1; 4) i (3; 10). Odredi pravilo.",
      "steps": [
        "Porast x je 2, porast y je 6. Zbog toga je k=6:2=3.",
        "Iz 4=3·1+n dobijaš n=1. Uvrsti x=3 i proveri da y=10."
      ]
    },
    {
      "question": "Rezervoar sadrži 90 l. Oticanje je stalno 6 l u minutu. Nacrtaj model.",
      "steps": [
        "Nakon x minuta preostaje y=90−6x. Polazna tačka je (0; 90).",
        "Posle 15 minuta y=0. Spoji te dve tačke. Po ovom modelu oticanje traje samo za 0≤x≤15."
      ]
    }
  ]
}, [
  ["Očitaj sa grafika početnu vrednost funkcije.","7","Nađi gde prava seče y-osu.","Presek sa y-osom nalazi se sedam jedinica iznad početka, u tački (0; 7)."],
  ["Za y=−4x+1, za koliko se y promeni kada x poraste za 1? Unesi promenu sa znakom.","-4","Pročitaj koeficijent uz x.","Porast ulaza za 1 daje promenu izlaza od −4."],
  ["U tabeli za y=5−2x popuni y za x=3.","-1","Uvrsti 3 umesto x.","y=5−2·3=−1."],
  ["Koja veličina je nezavisna ako je cena izražena kao funkcija mase?",["Masa","Cena","Zbir mase i cene"],"Koju vrednost bira kupac?","Kupac bira masu, a tarifa joj pridružuje cenu."],
  ["Za koju vrednost x grafik y=2x+5 prolazi kroz tačku sa ordinatom 17?","6","Postavi y=17.","17=2x+5 daje 12=2x i x=6."],
  ["Pri prelasku sa x=2 na x=6 vrednost y raste za 12. Nagib prave?","3","Podeli promenu izlaza promenom ulaza.","k=12:(6−2)=3."],
  ["Prava ima k=−2 i sadrži (3; 1). Koliki je n?","7","Uvrsti obe koordinate.","1=−6+n, pa je n=7."],
  ["Ugovor ima fiksnih 180 dinara i još 12 po pozivu. Cena za 15 poziva u dinarima?","360","Odvoji početnu cenu i promenljiv deo.","C=180+12·15=360 dinara."],
  ["Cena za dva sata iznosi 460 dinara, za pet sati 850 dinara. Ako je zavisnost linearna, početna cena u dinarima?","200","Prvo odredi doplatu po satu.","k=(850−460):3=130. Iz 460=2·130+n dobijaš n=200 dinara."],
  ["Koji opis važi za pravu x=−2?",["Ne daje funkciju y od x","Ima nagib nula","Ima jednu tačku"],"Poredi ordinate njenih tačaka.","Sve tačke imaju istu apscisu, a različite ordinate."],
  ["Na kojoj osi leži tačka (0; n)?",["Na y-osi","Samo na x-osi za svako n","Van obe ose"],"Prva koordinata je nula.","Sve tačke sa x=0 leže na y-osi."],
  ["Ako y opadne za 10 kada x poraste za 4, koliki je nagib?","−2,5","Promene imaju različite znake.","k=−10:4=−2,5."],
  ["Baterija je na 82% posle jednog sata i na 70% posle tri sata. Uz stalnu potrošnju koliki je početni procenat?","88","Računaj promenu po satu.","Za dva sata gubi 12 procentnih poena, odnosno 6 na sat. Sat pre prvog podatka imala je 88%."],
  ["Za y=4x odredi odsečak n.","0","Izračunaj y za x=0.","y=4·0=0. Grafik prolazi kroz koordinatni početak."],
  ["Prava spaja (−2; 5) i (2; −3). Koliki je k?","−2","Obe razlike računaj u istom smeru.","k=(−3−5):(2+2)=−8:4=−2."],
  ["Put za 4 minuta raste sa 1,2 km na 2 km. Koliko metara prelazi vozilo u 7 minuta istom brzinom?","1400","Iz razlike položaja odredi brzinu.","0,8 km je 800 m. Brzina je 800:4=200 m po minutu, pa za 7 minuta prelazi 1400 m."]
], ["odsečak","promena","tabela","promenljiva","obrnuti-račun","nagib","odsečak","tarifa","prava","model"],
  ["Grafik ima nagib 4 i odsečak −3. Ordinata za x=−2?","−11","Uvrsti x u pravilo.","y=4·(−2)−3=−11."]);

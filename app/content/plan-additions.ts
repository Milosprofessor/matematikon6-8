import type {Lesson} from "./types";
export const grade6PlanAdditions:Lesson[] = [
  {
    "id": "skup-racionalnih-brojeva",
    "title": "Skup racionalnih brojeva",
    "intro": "Proširujemo skup celih brojeva pozitivnim i negativnim razlomcima. Prepoznaj različite zapise istog broja i njegov položaj na brojevnoj pravoj.",
    "rules": [
      "Racionalan broj može se napisati kao a/b, gde su a i b celi brojevi i b≠0.",
      "Svaki ceo broj je racionalan: n=n/1. Nula je racionalna i može se zapisati kao 0/b za b≠0.",
      "Skup Q čine pozitivni racionalni brojevi, nula i negativni racionalni brojevi.",
      "Suprotni brojevi imaju jednaku udaljenost od nule i nalaze se na suprotnim stranama brojevne prave.",
      "Za položaj razlomka sa pozitivnim imeniocem podeli jedinični segment na toliko jednakih delova koliko pokazuje imenilac."
    ],
    "formulas": [
      "Q = {[[frac:a|b]] : a, b ∈ Z, b ≠ 0}",
      "Z ⊂ Q",
      "n = [[frac:n|1]]",
      "−(−r)=r"
    ],
    "examples": ["Broj 0 može se zapisati kao [[frac:0|9]], jer je 0:9=0."],
    "solved": {
      "question": "Kako zapisati −2 kao razlomak sa imeniocem 6?",
      "steps": ["Iz −2=[[frac:x|6]] sledi x=−2·6.", "Dobijamo −2=[[frac:−12|6]]."]
    },
    "tasks": [
      {
        "id": "o6-rq-1",
        "prompt": "Izaberi zapis koji predstavlja racionalan broj.",
        "math": "",
        "kind": "choice",
        "answer": "[[frac:−4|7]]",
        "hint": "Proveri da li je imenilac različit od nule.",
        "solution": "Brojevi −4 i 7 su celi, a 7≠0, pa −4/7 pripada Q. Ostali zapisi imaju imenilac 0 i nemaju vrednost.",
        "level": "basic",
        "skill": "Skup racionalnih brojeva",
        "taskType": "pripadnost-racionalnih",
        "errorCategory": "rule",
        "choices": [
          "[[frac:−4|7]]",
          "[[frac:4|0]]",
          "[[frac:0|0]]"
        ],
        "prerequisites": [
          "skup-racionalnih-brojeva"
        ]
      },
      {
        "id": "o6-rq-2",
        "prompt": "Izaberi razlomak jednak datom celom broju.",
        "math": "−6",
        "kind": "choice",
        "answer": "[[frac:−6|1]]",
        "hint": "Ceo broj n možeš zapisati kao n/1.",
        "solution": "−6=−6/1. Razlomak 1/(−6) ima drugu vrednost, a −6/0 nije dozvoljen.",
        "level": "basic",
        "skill": "Racionalni zapis celog broja",
        "taskType": "ceo-broj-kao-razlomak",
        "errorCategory": "rule",
        "choices": [
          "[[frac:−6|1]]",
          "[[frac:1|−6]]",
          "[[frac:−6|0]]"
        ],
        "prerequisites": [
          "skup-racionalnih-brojeva"
        ]
      },
      {
        "id": "o6-rq-3",
        "prompt": "Odredi suprotan broj.",
        "math": "−[[frac:7|9]]",
        "kind": "choice",
        "answer": "[[frac:7|9]]",
        "hint": "Promeni predznak, a veličinu razlomka sačuvaj.",
        "solution": "Suprotan broj broju −7/9 je 7/9: iste su udaljenosti od nule na različitim stranama.",
        "level": "basic",
        "skill": "Suprotni racionalni brojevi",
        "taskType": "suprotan-racionalni",
        "errorCategory": "concept",
        "choices": [
          "[[frac:7|9]]",
          "−[[frac:9|7]]",
          "[[frac:9|7]]"
        ],
        "prerequisites": [
          "skup-racionalnih-brojeva"
        ]
      },
      {
        "id": "o6-rq-4",
        "prompt": "Izaberi odgovarajući decimalni zapis.",
        "math": "−[[frac:13|20]]",
        "kind": "choice",
        "answer": "−0,65",
        "hint": "Proširi pozitivan razlomak do imenioca 100, pa sačuvaj minus.",
        "solution": "13/20=65/100=0,65, pa je −13/20=−0,65. Predznak ne menja cifre apsolutne vrednosti.",
        "level": "medium",
        "skill": "Razlomak i decimalni zapis",
        "taskType": "decimalni-zapis-racionalnog",
        "errorCategory": "sign",
        "choices": [
          "−0,65",
          "0,65",
          "−0,13"
        ],
        "prerequisites": [
          "skup-racionalnih-brojeva"
        ]
      },
      {
        "id": "o6-rq-5",
        "prompt": "Odredi koordinatu tačke A.",
        "math": "Svaka jedinica je podeljena na 4 jednaka dela. A je jednu podelu levo od −1.",
        "kind": "choice",
        "answer": "−[[frac:5|4]]",
        "hint": "Jedna podela predstavlja 1/4; od nule do −1 ima četiri takve podele.",
        "solution": "A je pet četvrtina levo od nule, pa joj je koordinata −5/4.",
        "level": "medium",
        "skill": "Racionalni brojevi na brojnoj pravoj",
        "taskType": "ocitavanje-razlomljene-koordinate",
        "errorCategory": "diagram",
        "choices": [
          "−[[frac:5|4]]",
          "−[[frac:3|4]]",
          "[[frac:5|4]]"
        ],
        "prerequisites": [
          "skup-racionalnih-brojeva"
        ]
      },
      {
        "id": "o6-rq-6",
        "prompt": "Koliko članova ovog skupa su celi brojevi?",
        "math": "S = {−4, 0, −[[frac:5|2]], [[frac:3|4]], [[frac:6|3]]}",
        "kind": "input",
        "answer": "3",
        "hint": "Proveri vrednost svakog člana; razlomak može predstavljati ceo broj.",
        "solution": "Celi brojevi su −4, 0 i 6/3=2. Razlomci −5/2 i 3/4 nisu celi. Ima 3 celobrojna člana.",
        "level": "medium",
        "skill": "Veza skupova Z i Q",
        "taskType": "brojanje-celih-u-racionalnom-skupu",
        "errorCategory": "concept",
        "prerequisites": [
          "skup-racionalnih-brojeva"
        ]
      },
      {
        "id": "o6-rq-7",
        "prompt": "Poređaj brojeve od najmanjeg do najvećeg.",
        "math": "−[[frac:1|3]], −[[frac:2|3]], 0, [[frac:1|6]]",
        "kind": "choice",
        "answer": "−[[frac:2|3]] < −[[frac:1|3]] < 0 < [[frac:1|6]]",
        "hint": "Negativni brojevi su levo od nule; negativni broj veće apsolutne vrednosti je manji.",
        "solution": "−2/3 je dalje levo od −1/3. Zatim sledi 0, pa pozitivan broj 1/6.",
        "level": "medium",
        "skill": "Poredak racionalnih brojeva",
        "taskType": "rastuci-poredak-racionalnih",
        "errorCategory": "concept",
        "choices": [
          "−[[frac:2|3]] < −[[frac:1|3]] < 0 < [[frac:1|6]]",
          "−[[frac:1|3]] < −[[frac:2|3]] < 0 < [[frac:1|6]]",
          "[[frac:1|6]] < 0 < −[[frac:1|3]] < −[[frac:2|3]]"
        ],
        "prerequisites": [
          "skup-racionalnih-brojeva"
        ]
      },
      {
        "id": "o6-rq-8",
        "prompt": "Koliko celih brojeva n ispunjava uslov?",
        "math": "−[[frac:7|4]] < [[frac:n|8]] < −[[frac:1|4]]",
        "kind": "input",
        "answer": "11",
        "hint": "Prevedi obe granice na imenilac 8 i isključi krajeve.",
        "solution": "Granice su −14/8 i −2/8, pa −14<n<−2. Dozvoljeni su n=−13,−12,…,−3: ukupno 11 celih brojeva.",
        "level": "advanced",
        "skill": "Racionalni brojevi između granica",
        "taskType": "fiksni-imenilac-brojanje",
        "errorCategory": "rule",
        "prerequisites": [
          "skup-racionalnih-brojeva"
        ]
      },
      {
        "id": "o6-rq-9",
        "prompt": "Odredi najveći prirodan broj n koji ispunjava uslov.",
        "math": "−1 < −[[frac:n|6]] < 0",
        "kind": "input",
        "answer": "5",
        "hint": "Posmatraj šestine između −1 i 0. Broj −1 odgovara −6/6.",
        "solution": "Između −6/6 i 0 nalaze se −5/6,−4/6,−3/6,−2/6 i −1/6. Najveći dozvoljeni prirodan broj n je 5; n=6 daje isključenu granicu −1.",
        "level": "advanced",
        "skill": "Racionalni brojevi i nepoznati brojilac",
        "taskType": "nepoznati-brojilac-raspon",
        "errorCategory": "concept",
        "prerequisites": [
          "skup-racionalnih-brojeva"
        ]
      },
      {
        "id": "o6-rq-10",
        "prompt": "Odredi koordinatu C.",
        "math": "Jedinica je podeljena na 10 jednakih delova. A je na četvrtoj podeli levo od 0; B predstavlja broj suprotan koordinati A. C je sredina duži OB, gde je O(0).",
        "kind": "choice",
        "answer": "0,2",
        "hint": "Najpre preslikaj položaj A na suprotnu stranu nule, pa prepolovi broj podela od O do B.",
        "solution": "A ima koordinatu −0,4, pa B ima koordinatu 0,4. Duž OB obuhvata četiri desetine; sredina je na drugoj podeli od nule, C(0,2).",
        "level": "advanced",
        "skill": "Predstavljanje racionalnih brojeva",
        "taskType": "suprotna-tacka-i-sredina",
        "errorCategory": "concept",
        "choices": [
          "0,2",
          "−0,2",
          "0,8"
        ],
        "prerequisites": [
          "skup-racionalnih-brojeva"
        ]
      }
    ]
  },
  {
    "id": "apsolutna-vrednost-racionalnog",
    "title": "Apsolutna vrednost racionalnog broja",
    "intro": "Apsolutna vrednost i kod razlomaka i decimala predstavlja rastojanje od nule. Poveži je sa predznakom, poretkom i položajem tačke.",
    "rules": [
      "Apsolutna vrednost racionalnog broja je njegova udaljenost od nule i nikada nije negativna.",
      "Za r≥0 važi |r|=r, a za r<0 važi |r|=−r.",
      "Suprotni racionalni brojevi imaju jednake apsolutne vrednosti.",
      "Za |x|=k i k>0 postoje dve vrednosti: x=−k i x=k. Za k=0 postoji samo x=0; za k<0 nema rešenja.",
      "Kod dva negativna racionalna broja veći je onaj sa manjom apsolutnom vrednošću."
    ],
    "formulas": [
      "|r|≥0",
      "|r|=|−r|",
      "Apsolutna vrednost razlomka = apsolutna vrednost brojioca : apsolutna vrednost imenioca (imenilac ≠ 0)",
      "|0|=0"
    ],
    "examples": ["|−[[frac:3|8]]|=[[frac:3|8]], jer merimo rastojanje od nule."],
    "solved": {
      "question": "Koja dva racionalna broja imaju apsolutnu vrednost 1,25?",
      "steps": ["Obeleži tačke udaljene 1,25 jedinica od nule.", "Jedna je desno na 1,25, a druga levo na −1,25."]
    },
    "tasks": [
      {
        "id": "o6-ra-1",
        "prompt": "Odredi apsolutnu vrednost.",
        "math": "|−1,8|",
        "kind": "input",
        "answer": "1.8",
        "hint": "Apsolutna vrednost meri rastojanje od nule.",
        "solution": "Broj −1,8 je udaljen 1,8 jedinica od nule, pa |−1,8|=1,8.",
        "level": "basic",
        "skill": "Apsolutna vrednost racionalnog broja",
        "taskType": "apsolutna-vrednost-decimalnog",
        "errorCategory": "concept",
        "prerequisites": [
          "apsolutna-vrednost-racionalnog"
        ]
      },
      {
        "id": "o6-ra-2",
        "prompt": "Izaberi tačnu vrednost.",
        "math": "|−[[frac:5|7]]|",
        "kind": "choice",
        "answer": "[[frac:5|7]]",
        "hint": "Predznak ne ulazi u dužinu rastojanja. Brojilac i imenilac ne menjaju mesta.",
        "solution": "|−5/7|=5/7. Dobija se isti razlomak bez negativnog predznaka.",
        "level": "basic",
        "skill": "Apsolutna vrednost razlomka",
        "taskType": "apsolutna-vrednost-razlomka",
        "errorCategory": "concept",
        "choices": [
          "[[frac:5|7]]",
          "−[[frac:5|7]]",
          "[[frac:7|5]]"
        ],
        "prerequisites": [
          "apsolutna-vrednost-racionalnog"
        ]
      },
      {
        "id": "o6-ra-3",
        "prompt": "Da li postoji racionalan broj x koji ispunjava uslov?",
        "math": "|x|=−0,4",
        "kind": "choice",
        "answer": "Ne",
        "hint": "Rastojanje od nule ne može biti negativno.",
        "solution": "Ne postoji takav racionalan broj, jer za svaki x važi |x|≥0.",
        "level": "basic",
        "skill": "Nenegativnost apsolutne vrednosti",
        "taskType": "nemoguca-apsolutna-vrednost",
        "errorCategory": "concept",
        "choices": [
          "Da",
          "Ne"
        ],
        "prerequisites": [
          "apsolutna-vrednost-racionalnog"
        ]
      },
      {
        "id": "o6-ra-4",
        "prompt": "Uporedi.",
        "math": "|−[[frac:7|12]]| __ |−[[frac:3|8]]|",
        "kind": "choice",
        "answer": ">",
        "hint": "Najpre uzmi apsolutne vrednosti, pa poredi pozitivne razlomke pomoću imenioca 24.",
        "solution": "Apsolutne vrednosti su 7/12=14/24 i 3/8=9/24. Pošto je 14/24>9/24, traženi znak je >.",
        "level": "medium",
        "skill": "Poređenje apsolutnih vrednosti",
        "taskType": "poredjenje-apsolutnih-racionalnih",
        "errorCategory": "rule",
        "choices": [
          "<",
          ">",
          "="
        ],
        "prerequisites": [
          "apsolutna-vrednost-racionalnog"
        ]
      },
      {
        "id": "o6-ra-5",
        "prompt": "Odredi x.",
        "math": "|x|=[[frac:2|5]], x<0",
        "kind": "choice",
        "answer": "−[[frac:2|5]]",
        "hint": "Jednakost daje dva suprotna broja. Uslov x<0 zadržava negativni.",
        "solution": "|x|=2/5 daje x=−2/5 ili x=2/5. Pošto je x<0, jedino rešenje je x=−2/5.",
        "level": "medium",
        "skill": "Apsolutna vrednost i predznak",
        "taskType": "apsolutna-racionalnog-sa-uslovom",
        "errorCategory": "sign",
        "choices": [
          "−[[frac:2|5]]",
          "[[frac:2|5]]",
          "0"
        ],
        "prerequisites": [
          "apsolutna-vrednost-racionalnog"
        ]
      },
      {
        "id": "o6-ra-6",
        "prompt": "Odredi sva racionalna rešenja.",
        "math": "|x|=[[frac:3|10]]",
        "kind": "choice",
        "answer": "x=−[[frac:3|10]] ili x=[[frac:3|10]]",
        "hint": "Dve tačke nalaze se na pozitivnom zadatom rastojanju od nule.",
        "solution": "Oba broja, −3/10 i 3/10, imaju apsolutnu vrednost 3/10. Drugih rešenja nema.",
        "level": "medium",
        "skill": "Rešenja apsolutne vrednosti",
        "taskType": "oba-racionalna-resenja",
        "errorCategory": "concept",
        "choices": [
          "x=[[frac:3|10]]",
          "x=−[[frac:3|10]]",
          "x=−[[frac:3|10]] ili x=[[frac:3|10]]"
        ],
        "prerequisites": [
          "apsolutna-vrednost-racionalnog"
        ]
      },
      {
        "id": "o6-ra-7",
        "prompt": "Pronađi grešku.",
        "math": "−|−0,7|=0,7",
        "kind": "choice",
        "answer": "Minus izvan crta ostaje; rezultat je −0,7.",
        "hint": "Najpre izračunaj |−0,7|, pa uzmi suprotan broj dobijene vrednosti.",
        "solution": "|−0,7|=0,7, ali ispred apsolutne vrednosti postoji još jedan minus. Zato je −|−0,7|=−0,7.",
        "level": "medium",
        "skill": "Minus izvan apsolutne vrednosti",
        "taskType": "spoljasnji-minus-apsolutne",
        "errorCategory": "sign",
        "choices": [
          "Nema greške.",
          "Minus izvan crta ostaje; rezultat je −0,7.",
          "Rezultat je 0."
        ],
        "prerequisites": [
          "apsolutna-vrednost-racionalnog"
        ]
      },
      {
        "id": "o6-ra-8",
        "prompt": "Odredi sva rešenja oblika x=n/4, gde je n ceo broj.",
        "math": "[[frac:1|2]]<|x|<1",
        "kind": "choice",
        "answer": "x=−[[frac:3|4]] ili x=[[frac:3|4]]",
        "hint": "Između 2/4 i 4/4 strogo leži samo jedna pozitivna četvrtina. Dodaj i njenu suprotnu vrednost.",
        "solution": "Uslov glasi 2/4<|x|<4/4. Za traženi oblik jedino je |x|=3/4, pa su rešenja x=−3/4 i x=3/4. Granice ±1/2 i ±1 nisu uključene.",
        "level": "advanced",
        "skill": "Apsolutna vrednost u rasponu",
        "taskType": "apsolutna-raspon-fiksni-imenilac",
        "errorCategory": "rule",
        "choices": [
          "x=−[[frac:3|4]] ili x=[[frac:3|4]]",
          "x=−[[frac:1|2]] ili x=[[frac:1|2]]",
          "x=[[frac:3|4]]"
        ],
        "prerequisites": [
          "apsolutna-vrednost-racionalnog"
        ]
      },
      {
        "id": "o6-ra-9",
        "prompt": "Odredi rastojanje tačaka A i B.",
        "math": "A(−[[frac:7|8]]), B(−[[frac:3|8]])",
        "kind": "choice",
        "answer": "[[frac:1|2]]",
        "hint": "Obe tačke su levo od nule. Oduzmi manje rastojanje od nule od većeg.",
        "solution": "Rastojanja od nule su 7/8 i 3/8. Rastojanje između tačaka je 7/8−3/8=4/8=1/2.",
        "level": "advanced",
        "skill": "Rastojanje racionalnih tačaka",
        "taskType": "rastojanje-negativnih-razlomaka",
        "errorCategory": "sign",
        "choices": [
          "[[frac:1|2]]",
          "−[[frac:1|2]]",
          "[[frac:5|4]]"
        ],
        "prerequisites": [
          "apsolutna-vrednost-racionalnog"
        ]
      },
      {
        "id": "o6-ra-10",
        "prompt": "Odredi najveći broj iz skupa S koji ispunjava uslov.",
        "math": "S={−[[frac:5|6]], −[[frac:3|4]], [[frac:1|2]], [[frac:3|5]]}; |x|>[[frac:2|3]]",
        "kind": "choice",
        "answer": "−[[frac:3|4]]",
        "hint": "Najpre izdvoji brojeve dovoljno velike apsolutne vrednosti. Zatim poredi same brojeve, uz njihove predznake.",
        "solution": "Uslov ispunjavaju −5/6 i −3/4, jer su 5/6 i 3/4 veći od 2/3. Među ta dva negativna broja veći je −3/4, pošto je 3/4<5/6.",
        "level": "advanced",
        "skill": "Apsolutna vrednost i poredak",
        "taskType": "filtriranje-pa-poredak",
        "errorCategory": "concept",
        "choices": [
          "−[[frac:3|4]]",
          "−[[frac:5|6]]",
          "[[frac:3|5]]"
        ],
        "prerequisites": [
          "apsolutna-vrednost-racionalnog"
        ]
      }
    ]
  },
  {
    "id": "uglovi-na-transverzali",
    "title": "Uglovi na transverzali",
    "intro": "Transverzala je prava koja seče dve druge prave u različitim tačkama. Kada su te dve prave paralelne, položaj uglova omogućava da iz jednog poznatog ugla odredimo ostale.",
    "rules": [
      "Unakrsni uglovi kod istog preseka su jednaki i kada prave nisu paralelne.",
      "Susedni uglovi koji čine opružen ugao imaju zbir 180°.",
      "Ako transverzala seče dve paralelne prave, saglasni uglovi su jednaki.",
      "Kod paralelnih pravih naizmenični unutrašnji uglovi su jednaki.",
      "Kod paralelnih pravih unutrašnji uglovi sa iste strane transverzale imaju zbir 180°."
    ],
    "formulas": [
      "p ∥ q ⇒ saglasni uglovi su jednaki",
      "p ∥ q ⇒ naizmenični unutrašnji uglovi su jednaki",
      "p ∥ q ⇒ α+β=180° za unutrašnje uglove sa iste strane"
    ],
    "examples": ["Naizmenični unutrašnji ugao uz dati ugao od 68° takođe ima 68°."],
    "solved": {
      "question": "Transverzala seče dve paralelne prave. Jedan unutrašnji ugao je 68°. Koliki je unutrašnji ugao sa iste strane?",
      "steps": ["Zbir ova dva ugla je 180°.", "Drugi ugao je 180°−68°=112°."]
    },
    "worked": [
      {"question":"Transverzala seče dve paralelne prave. Jedan unutrašnji ugao je 68°. Koliki je unutrašnji ugao sa iste strane?","steps":["Pošto je p∥q, α+β=180°.","68°+β=180°.","β=180°−68°=112°."]},
      {"question":"Dva naizmenična unutrašnja ugla paralelnih pravih su (x+20)° i (3x−30)°. Odredi x.","steps":["Pošto je p∥q, x+20=3x−30.","50=2x, x=25.","Oba ugla imaju 45°."]},
      {"question":"Dva unutrašnja ugla paralelnih pravih sa iste strane transverzale razlikuju se za 8°. Odredi ih.","steps":["Neka je manji ugao x°, veći (x+8)°.","x+x+8=180.","2x=172, x=86.","Uglovi su 86° i 94°; zbir je 180°."]}
    ],
    "tasks": [
      {
        "id": "o6-utn-1",
        "prompt": "Koja prava je transverzala?",
        "math": "Prava t seče prave p i q u različitim tačkama.",
        "kind": "choice",
        "answer": "t",
        "hint": "Transverzala seče obe posmatrane prave.",
        "solution": "Prava t je transverzala jer seče p i q u dve različite tačke.",
        "level": "basic",
        "skill": "Pojam transverzale",
        "taskType": "prepoznavanje-transverzale",
        "errorCategory": "concept",
        "choices": [
          "p",
          "q",
          "t"
        ],
        "prerequisites": [
          "uglovi-na-transverzali"
        ]
      },
      {
        "id": "o6-utn-2",
        "prompt": "Kako se nazivaju označeni uglovi α i β?",
        "math": "p∥q. Na oba preseka α i β nalaze se iznad presečene prave i desno od transverzale.",
        "kind": "choice",
        "answer": "Saglasni uglovi.",
        "hint": "Uporedi položaj uglova na dva različita preseka.",
        "solution": "Uglovi imaju isti položaj na oba preseka: iznad p ili q i desno od transverzale. Zato su saglasni.",
        "level": "basic",
        "skill": "Položaji uglova na transverzali",
        "taskType": "prepoznavanje-saglasnih",
        "errorCategory": "diagram",
        "choices": [
          "Saglasni uglovi.",
          "Unakrsni uglovi.",
          "Unutrašnji uglovi sa iste strane."
        ],
        "prerequisites": [
          "uglovi-na-transverzali"
        ]
      },
      {
        "id": "o6-utn-3",
        "prompt": "Odredi β u stepenima.",
        "math": "p∥q; α=57°. Uglovi α i β su naizmenični unutrašnji.",
        "kind": "input",
        "answer": "57",
        "hint": "Naizmenični unutrašnji uglovi uz paralelne prave su jednaki.",
        "solution": "Pošto je p∥q, naizmenični unutrašnji uglovi su jednaki: β=α=57°.",
        "level": "basic",
        "skill": "Naizmenični unutrašnji uglovi",
        "taskType": "vrednost-naizmenicnog",
        "errorCategory": "concept",
        "prerequisites": [
          "uglovi-na-transverzali"
        ]
      },
      {
        "id": "o6-utn-4",
        "prompt": "Odredi β u stepenima.",
        "math": "p∥q; α=112°. Uglovi α i β su unutrašnji i sa iste strane transverzale.",
        "kind": "input",
        "answer": "68",
        "hint": "Ovaj par ima zbir 180°.",
        "solution": "α+β=180°, pa β=180°−112°=68°.",
        "level": "medium",
        "skill": "Unutrašnji uglovi sa iste strane",
        "taskType": "vrednost-jednostranog",
        "errorCategory": "concept",
        "prerequisites": [
          "uglovi-na-transverzali"
        ]
      },
      {
        "id": "o6-utn-5",
        "prompt": "Odredi γ u stepenima.",
        "math": "p∥q. Na gornjem preseku α=46°, a β je njemu unakrsan. Na donjem preseku γ je saglasan uglu β.",
        "kind": "input",
        "answer": "46",
        "hint": "Najpre poveži unakrsne uglove, pa saglasne.",
        "solution": "Unakrsni uglovi daju β=46°. Pošto je p∥q, saglasni uglovi β i γ su jednaki, pa γ=46°.",
        "level": "medium",
        "skill": "Lanac odnosa uglova",
        "taskType": "unakrsni-pa-saglasni",
        "errorCategory": "concept",
        "prerequisites": [
          "uglovi-na-transverzali"
        ]
      },
      {
        "id": "o6-utn-6",
        "prompt": "Koji red tabele sadrži grešku?",
        "math": "p∥q. I: saglasni 64° i 64°; II: naizmenični unutrašnji 73° i 107°; III: unutrašnji sa iste strane 81° i 99°.",
        "kind": "choice",
        "answer": "II",
        "hint": "Proveri pravilo za svaki tip para zasebno.",
        "solution": "I je tačan jer su saglasni uglovi jednaki. II je pogrešan jer naizmenični unutrašnji moraju biti jednaki, a 73°≠107°. III je tačan jer je 81°+99°=180°.",
        "level": "medium",
        "skill": "Provera odnosa uglova",
        "taskType": "analiza-tabele-transverzale",
        "errorCategory": "rule",
        "choices": [
          "I",
          "II",
          "III"
        ],
        "prerequisites": [
          "uglovi-na-transverzali"
        ]
      },
      {
        "id": "o6-utn-7",
        "prompt": "Izaberi tvrdnju koja je tačna i bez uslova da su p i q paralelne.",
        "math": "Prava t seče p i q u različitim tačkama.",
        "kind": "choice",
        "answer": "Unakrsni uglovi kod istog preseka su jednaki.",
        "hint": "Razlikuj vezu na istom preseku od veze između dva preseka.",
        "solution": "Unakrsni uglovi su jednaki pri svakom preseku dve prave. Za jednakost saglasnih ili naizmeničnih unutrašnjih uglova potrebno je da presečene prave budu paralelne.",
        "level": "medium",
        "skill": "Uslov paralelnosti",
        "taskType": "uslov-paralelnosti-transverzala",
        "errorCategory": "concept",
        "choices": [
          "Unakrsni uglovi kod istog preseka su jednaki.",
          "Saglasni uglovi su uvek jednaki.",
          "Naizmenični unutrašnji uglovi su uvek jednaki."
        ],
        "prerequisites": [
          "uglovi-na-transverzali"
        ]
      },
      {
        "id": "o6-utn-8",
        "prompt": "Odredi x.",
        "math": "p∥q. Unutrašnji uglovi sa iste strane transverzale imaju mere (2x+5)° i (3x+10)°.",
        "kind": "input",
        "answer": "33",
        "hint": "Zapiši zbir ovih uglova jednak 180°, pa saberi članove sa x.",
        "solution": "(2x+5)+(3x+10)=180, pa 5x+15=180, 5x=165 i x=33. Uglovi su 71° i 109° i imaju zbir 180°.",
        "level": "advanced",
        "skill": "Nepoznata u odnosima uglova",
        "taskType": "nepoznata-jednostrani-uglovi",
        "errorCategory": "rule",
        "prerequisites": [
          "uglovi-na-transverzali"
        ]
      },
      {
        "id": "o6-utn-9",
        "prompt": "Odredi γ u stepenima.",
        "math": "p∥q. Naizmenični unutrašnji uglovi su α=(x+20)° i β=(3x−30)°. Ugao γ je na donjem preseku susedan uglu β i sa njim čini opružen ugao.",
        "kind": "input",
        "answer": "135",
        "hint": "Prvo izjednači α i β, pronađi x i β, pa dopuni β do 180°.",
        "solution": "x+20=3x−30 daje 2x=50 i x=25. Zato je β=45°. Susedni ugao γ=180°−45°=135°.",
        "level": "advanced",
        "skill": "Povezivanje jednakih i susednih uglova",
        "taskType": "nepoznata-pa-suplement",
        "errorCategory": "concept",
        "prerequisites": [
          "uglovi-na-transverzali"
        ]
      },
      {
        "id": "o6-utn-10",
        "prompt": "Odredi ugao APB u stepenima.",
        "math": "p∥q, p je iznad q. P je na p, A i B na q, a A je levo od B. Duži PA i PB grade trougao APB. ∠PAB=48°. Ugao između PB i poluprave prave p koja ide iz P nadesno iznosi 37°.",
        "kind": "input",
        "answer": "95",
        "hint": "Prenesi ugao od 37° preko paralelnih pravih na teme B, pa primeni zbir uglova trougla.",
        "solution": "Pošto je p∥q, ugao između PB i poluprave p nadesno jednak je naizmeničnom unutrašnjem uglu PBA, pa ∠PBA=37°. U trouglu APB: ∠PAB+∠PBA+∠APB=180°. Zato ∠APB=180°−48°−37°=95°.",
        "level": "advanced",
        "skill": "Transverzala i uglovi trougla",
        "taskType": "transverzala-u-trouglu",
        "errorCategory": "diagram",
        "prerequisites": [
          "uglovi-na-transverzali"
        ]
      }
    ]
  }
];

export const grade7PlanAdditions:Lesson[] = [
  {
    "id": "jednacine-kvadrat",
    "title": "Jednačine x²=r u skupu realnih brojeva",
    "intro": "Obnovi rešavanje jednačina sa kvadratom nepoznate: izdvoji kvadrat, proveri znak desne strane i navedi sva rešenja koja ispunjavaju uslove.",
    "rules": [
      "Za r>0 jednačina x^2=r ima dva suprotna rešenja.",
      "Za r=0 jedino rešenje je x=0, a za r<0 nema realnih rešenja.",
      "Kada kvadrat nije izdvojen, najpre uredi jednačinu istim operacijama na obe strane.",
      "Svako dobijeno rešenje proveri u početnoj jednačini i u dodatnom uslovu."
    ],
    "formulas": [
      "x^2=r, r>0 ⇒ x=−[[sqrt:r]] ili x=[[sqrt:r]]",
      "x^2=0 ⇔ x=0",
      "x^2=r, r<0 ⇒ nema realnih rešenja",
      "(x−a)^2=r, r≥0 ⇒ x−a=±[[sqrt:r]]"
    ],
    "examples": ["Za x²=0 jedino rešenje je 0, jer svaki drugi realan broj ima pozitivan kvadrat."],
    "solved": {
      "question": "Reši (x−1)²=9 u skupu realnih brojeva.",
      "steps": ["Broj x−1 može biti 3 ili −3.", "Iz x−1=3 sledi x=4, a iz x−1=−3 sledi x=−2."]
    },
    "month": "october",
    "prerequisites": [
      "kvadratni-koren",
      "svojstva-korena"
    ],
    "tasks": [
      {
        "id": "o7-jkvr-1",
        "prompt": "Izaberi sva realna rešenja.",
        "math": "x^2=144",
        "kind": "choice",
        "choices": [
          "−12 i 12",
          "Samo 12",
          "−72 i 72"
        ],
        "answer": "−12 i 12",
        "hint": "Kvadrati suprotnih brojeva su jednaki.",
        "solution": "12²=144 i (−12)²=144, zato su rešenja −12 i 12.",
        "level": "basic",
        "skill": "Jednačine sa kvadratom",
        "taskType": "dva-resenja",
        "errorCategory": "concept",
        "practiceOnly": true,
        "prerequisites": [
          "jednacine-kvadrat"
        ]
      },
      {
        "id": "o7-jkvr-2",
        "prompt": "Odredi x.",
        "math": "x^2=0",
        "kind": "input",
        "answer": "0",
        "hint": "Samo jedan realan broj ima kvadrat nula.",
        "solution": "Jedino rešenje je x=0.",
        "level": "basic",
        "skill": "Jednačine sa kvadratom",
        "taskType": "nulti-kvadrat",
        "errorCategory": "concept",
        "practiceOnly": true,
        "prerequisites": [
          "jednacine-kvadrat"
        ]
      },
      {
        "id": "o7-jkvr-3",
        "prompt": "Koliko realnih rešenja ima jednačina?",
        "math": "x^2=−9",
        "kind": "choice",
        "choices": [
          "0",
          "1",
          "2"
        ],
        "answer": "0",
        "hint": "Kvadrat realnog broja je nenegativan.",
        "solution": "Negativna desna strana ne može biti kvadrat realnog broja, pa nema rešenja.",
        "level": "basic",
        "skill": "Jednačine sa kvadratom",
        "taskType": "negativna-desna-strana",
        "errorCategory": "concept",
        "practiceOnly": true,
        "prerequisites": [
          "jednacine-kvadrat"
        ]
      },
      {
        "id": "o7-jkvr-4",
        "prompt": "Izaberi sva realna rešenja.",
        "math": "x^2=0,36",
        "kind": "choice",
        "choices": [
          "−0,6 i 0,6",
          "−0,18 i 0,18",
          "Samo 0,6"
        ],
        "answer": "−0,6 i 0,6",
        "hint": "Pronađi nenegativan broj čiji kvadrat daje 0,36, pa uzmi oba znaka.",
        "solution": "0,6²=0,36, pa su rešenja x=−0,6 i x=0,6.",
        "level": "medium",
        "skill": "Jednačine sa kvadratom",
        "taskType": "decimalna-resenja",
        "errorCategory": "method",
        "practiceOnly": true,
        "prerequisites": [
          "jednacine-kvadrat"
        ]
      },
      {
        "id": "o7-jkvr-5",
        "prompt": "Izaberi tačan skup rešenja.",
        "math": "x^2=2",
        "kind": "choice",
        "choices": [
          "x=−[[sqrt:2]] ili x=[[sqrt:2]]",
          "x=−2 ili x=2",
          "Samo x=[[sqrt:2]]"
        ],
        "answer": "x=−[[sqrt:2]] ili x=[[sqrt:2]]",
        "hint": "Tačan odgovor može ostati zapisan pomoću korena.",
        "solution": "Za pozitivnu desnu stranu postoje dva suprotna rešenja: −√2 i √2.",
        "level": "medium",
        "skill": "Jednačine sa kvadratom",
        "taskType": "iracionalna-resenja",
        "errorCategory": "method",
        "practiceOnly": true,
        "prerequisites": [
          "jednacine-kvadrat"
        ]
      },
      {
        "id": "o7-jkvr-6",
        "prompt": "Odredi sva rešenja.",
        "math": "4x^2=100",
        "kind": "choice",
        "choices": [
          "−5 i 5",
          "−25 i 25",
          "Samo 5"
        ],
        "answer": "−5 i 5",
        "hint": "Najpre podeli obe strane sa 4.",
        "solution": "x²=25, pa je x=−5 ili x=5. Provera: 4·25=100.",
        "level": "medium",
        "skill": "Jednačine sa kvadratom",
        "taskType": "izdvajanje-kvadrata",
        "errorCategory": "method",
        "practiceOnly": true,
        "prerequisites": [
          "jednacine-kvadrat"
        ]
      },
      {
        "id": "o7-jkvr-7",
        "prompt": "Pronađi grešku u zaključku.",
        "math": "x^2=49 ⇒ jedino rešenje je x=7",
        "kind": "choice",
        "choices": [
          "Izostavljeno je rešenje x=−7.",
          "Broj 7 nije rešenje.",
          "Jednačina nema realnih rešenja."
        ],
        "answer": "Izostavljeno je rešenje x=−7.",
        "hint": "Proveri i suprotan broj.",
        "solution": "(−7)²=49, pa je osim 7 rešenje i −7.",
        "level": "medium",
        "skill": "Jednačine sa kvadratom",
        "taskType": "provera-potpunosti",
        "errorCategory": "rule",
        "practiceOnly": true,
        "prerequisites": [
          "jednacine-kvadrat"
        ]
      },
      {
        "id": "o7-jkvr-8",
        "prompt": "Odredi sva rešenja u tačnom obliku.",
        "math": "x^2−5=7",
        "kind": "choice",
        "choices": [
          "x=−2[[sqrt:3]] ili x=2[[sqrt:3]]",
          "x=−[[sqrt:2]] ili x=[[sqrt:2]]",
          "Samo x=12"
        ],
        "answer": "x=−2[[sqrt:3]] ili x=2[[sqrt:3]]",
        "hint": "Najpre izdvoji x², pa pojednostavi koren.",
        "solution": "x²=12, zato x=±√12=±2√3. Oba rešenja daju 12−5=7.",
        "level": "advanced",
        "skill": "Jednačine sa kvadratom",
        "taskType": "izdvajanje-i-pojednostavljenje",
        "errorCategory": "method",
        "practiceOnly": true,
        "prerequisites": [
          "jednacine-kvadrat"
        ]
      },
      {
        "id": "o7-jkvr-9",
        "prompt": "Odredi sva rešenja.",
        "math": "(x−2)^2=9",
        "kind": "choice",
        "choices": [
          "−1 i 5",
          "−3 i 3",
          "Samo 5"
        ],
        "answer": "−1 i 5",
        "hint": "Izraz x−2 može biti pozitivan ili negativan broj čiji kvadrat daje 9.",
        "solution": "x−2=3 daje x=5; x−2=−3 daje x=−1. Oba rešenja zadovoljavaju početnu jednačinu.",
        "level": "advanced",
        "skill": "Jednačine sa kvadratom",
        "taskType": "kvadrat-izraza",
        "errorCategory": "method",
        "practiceOnly": true,
        "prerequisites": [
          "jednacine-kvadrat"
        ]
      },
      {
        "id": "o7-jkvr-10",
        "prompt": "Izaberi rešenje koje ispunjava oba uslova.",
        "math": "x^2=3 i x<0",
        "kind": "choice",
        "choices": [
          "−[[sqrt:3]]",
          "[[sqrt:3]]",
          "−3"
        ],
        "answer": "−[[sqrt:3]]",
        "hint": "Najpre odredi sva rešenja jednačine, pa primeni uslov znaka.",
        "solution": "Jednačina ima rešenja ±√3; uslov x<0 zadržava samo −√3.",
        "level": "advanced",
        "skill": "Jednačine sa kvadratom",
        "taskType": "resenje-sa-uslovom",
        "errorCategory": "concept",
        "practiceOnly": true,
        "prerequisites": [
          "jednacine-kvadrat"
        ]
      }
    ]
  },
  {
    "id": "direktna-proporcionalnost",
    "title": "Direktna proporcionalnost",
    "intro": "Veličine su direktno proporcionalne kada se njihov količnik ne menja. Ako jednu uvećamo nekoliko puta, isto se menja i druga.",
    "rules": [
      "Veza je oblika y=kx sa k≠0; za x≠0 količnik y/x je stalan.",
      "Za x=0 uvek je y=0.",
      "Tabela mora čuvati isti koeficijent proporcionalnosti."
    ],
    "formulas": [
      "y=kx, k≠0",
      "k=[[frac:y|x]], x≠0",
      "x=[[frac:y|k]], k≠0"
    ],
    "examples": ["Za stalnu brzinu od 60 km/h za 1,5 h prelazimo 60·1,5=90 km."],
    "solved": {
      "question": "Pet metara platna košta 1800 dinara. Koliko košta 3,5 m po istoj ceni po metru?",
      "steps": ["Jedan metar košta 1800:5=360 dinara.", "Za 3,5 m plaćamo 3,5·360=1260 dinara."]
    },
    "interactive": "direct-proportion",
    "tasks": [
      {
        "id": "o7-dp-1",
        "prompt": "Odredi y.",
        "math": "y=4x, x=3",
        "kind": "input",
        "answer": "12",
        "hint": "Pomnoži x sa 4.",
        "solution": "y=4·3=12.",
        "level": "basic",
        "skill": "Direktna proporcionalnost",
        "taskType": "direktna-primena",
        "errorCategory": "calculation",
        "prerequisites": [
          "direktna-proporcionalnost"
        ]
      },
      {
        "id": "o7-dp-2",
        "prompt": "Koji par pripada funkciji?",
        "math": "y=−2x",
        "kind": "choice",
        "choices": [
          "(3,−6)",
          "(−2,−4)",
          "(4,2)"
        ],
        "answer": "(3,−6)",
        "hint": "Proveri y=−2x.",
        "solution": "Za x=3 dobija se y=−6.",
        "level": "medium",
        "skill": "Direktna proporcionalnost",
        "taskType": "provera-uredjenog-para",
        "errorCategory": "method",
        "prerequisites": [
          "direktna-proporcionalnost"
        ]
      },
      {
        "id": "o7-dp-3",
        "prompt": "Izaberi direktno proporcionalnu vezu.",
        "math": "",
        "kind": "choice",
        "choices": [
          "y=5x",
          "y=x+5",
          "y=[[frac:5|x]]"
        ],
        "answer": "y=5x",
        "hint": "Traži oblik y=kx.",
        "solution": "Direktna proporcionalnost ima oblik y=kx.",
        "level": "advanced",
        "skill": "Direktna proporcionalnost",
        "taskType": "prepoznavanje-veze",
        "errorCategory": "concept",
        "prerequisites": [
          "direktna-proporcionalnost"
        ]
      },
      {
        "id": "o7-dp-4",
        "prompt": "Dopuni tabelu.",
        "math": "x: 2, 5; y: 6, ?",
        "kind": "choice",
        "choices": [
          "9",
          "15",
          "30"
        ],
        "answer": "15",
        "hint": "Najpre odredi k=6/2=3.",
        "solution": "Za x=5 je y=3·5=15.",
        "level": "basic",
        "skill": "Direktna proporcionalnost",
        "practiceOnly": true,
        "taskType": "dopunjavanje-tabele",
        "errorCategory": "method",
        "prerequisites": [
          "direktna-proporcionalnost"
        ]
      },
      {
        "id": "o7-dp-5",
        "prompt": "Odredi k.",
        "math": "x=8, y=−20",
        "kind": "input",
        "answer": "-2,5",
        "hint": "Koristi k=y/x.",
        "solution": "k=−20/8=−2,5.",
        "level": "medium",
        "skill": "Koeficijent proporcionalnosti",
        "practiceOnly": true,
        "taskType": "koeficijent-iz-podataka",
        "errorCategory": "calculation",
        "prerequisites": [
          "direktna-proporcionalnost"
        ]
      },
      {
        "id": "o7-dp-6",
        "prompt": "Tačno ili netačno?",
        "math": "Ako se x udvostruči u y=3x, udvostruči se i y.",
        "kind": "choice",
        "choices": [
          "Tačno",
          "Netačno"
        ],
        "answer": "Tačno",
        "hint": "Koeficijent ostaje isti.",
        "solution": "Direktna proporcionalnost čuva isti faktor promene.",
        "level": "medium",
        "skill": "Direktna proporcionalnost",
        "practiceOnly": true,
        "taskType": "tacno-netacno",
        "errorCategory": "concept",
        "prerequisites": [
          "direktna-proporcionalnost"
        ]
      },
      {
        "id": "o7-dp-7",
        "prompt": "Odredi x.",
        "math": "y=−4x, y=28",
        "kind": "input",
        "answer": "-7",
        "hint": "Podeli y sa −4.",
        "solution": "x=28:(−4)=−7.",
        "level": "advanced",
        "skill": "Direktna proporcionalnost",
        "practiceOnly": true,
        "taskType": "resavanje-unazad",
        "errorCategory": "sign",
        "prerequisites": [
          "direktna-proporcionalnost"
        ]
      },
      {
        "id": "o7-dp-8",
        "prompt": "Odredi y.",
        "math": "y=−3x, x=0",
        "kind": "input",
        "answer": "0",
        "hint": "Nula pomnožena bilo kojim brojem je nula.",
        "solution": "y=−3·0=0.",
        "level": "basic",
        "skill": "Direktna proporcionalnost",
        "taskType": "nulta-vrednost",
        "errorCategory": "concept",
        "practiceOnly": true,
        "prerequisites": [
          "direktna-proporcionalnost"
        ]
      },
      {
        "id": "o7-dp-9",
        "prompt": "Da li tabela predstavlja direktnu proporcionalnost?",
        "math": "x: 1, 2, 3; y: 3, 6, 8",
        "kind": "choice",
        "choices": [
          "Da, svi količnici y/x su jednaki.",
          "Ne, količnik y/x nije isti u svim kolonama.",
          "Da, jer obe veličine rastu."
        ],
        "answer": "Ne, količnik y/x nije isti u svim kolonama.",
        "hint": "Izračunaj y/x u svakoj koloni.",
        "solution": "Prve dve kolone daju k=3, a treća k=8/3. Sam rast obe veličine nije dovoljan.",
        "level": "medium",
        "skill": "Direktna proporcionalnost",
        "taskType": "provera-tabele",
        "errorCategory": "concept",
        "practiceOnly": true,
        "prerequisites": [
          "direktna-proporcionalnost"
        ]
      },
      {
        "id": "o7-dp-10",
        "prompt": "Odredi x za y=−15.",
        "math": "x i y su direktno proporcionalni; za x=−4 važi y=10.",
        "kind": "input",
        "answer": "6",
        "hint": "Iz poznatog para prvo odredi k, pa izdvoji novo x.",
        "solution": "k=10:(−4)=−2,5. Za y=−15 važi x=(−15):(−2,5)=6.",
        "level": "advanced",
        "skill": "Direktna proporcionalnost",
        "taskType": "koeficijent-i-obrnuta-primena",
        "errorCategory": "sign",
        "practiceOnly": true,
        "prerequisites": [
          "direktna-proporcionalnost"
        ]
      }
    ],
    "month": "october",
    "prerequisites": [
      "direktna-proporcionalnost"
    ]
  },
  {
    "id": "funkcija-ykx",
    "title": "Funkcija y=kx i njen grafik",
    "intro": "Grafik funkcije direktne proporcionalnosti je prava koja prolazi kroz koordinatni početak. Znak k određuje da li prava raste ili opada.",
    "rules": [
      "Za crtanje su dovoljne dve tačke, a jedna je O(0,0).",
      "Ako je k>0, prava raste; ako je k<0, prava opada.",
      "Pri istoj razmeri koordinatnih osa veće |k| znači strmiju pravu."
    ],
    "formulas": [
      "y=kx",
      "O(0,0)"
    ],
    "examples": ["Tačka B(−3,6) je na istoj pravoj, jer je 6=−2·(−3)."],
    "solved": {
      "question": "Kako nacrtati grafik y=−2x?",
      "steps": ["Za x=0 dobijamo y=0. Za x=2 dobijamo y=−4.", "Ucrtaj O(0,0) i A(2,−4) pa povuci pravu kroz njih."]
    },
    "diagram": "direct-proportion",
    "tasks": [
      {
        "id": "o7-fg-1",
        "prompt": "Da li tačka pripada grafiku?",
        "math": "y=2x, A(3,6)",
        "kind": "choice",
        "choices": [
          "Da",
          "Ne"
        ],
        "answer": "Da",
        "hint": "Proveri 6=2·3.",
        "solution": "Jednakost važi, pa A pripada grafiku.",
        "level": "basic",
        "skill": "Grafik y=kx",
        "taskType": "pripadnost-grafiku",
        "errorCategory": "diagram",
        "diagram": {
          "type": "graph",
          "k": 2,
          "point": {
            "x": 3,
            "y": 6
          }
        },
        "prerequisites": [
          "funkcija-ykx"
        ]
      },
      {
        "id": "o7-fg-2",
        "prompt": "Odredi k.",
        "math": "A(4,−12) pripada y=kx",
        "kind": "input",
        "answer": "-3",
        "hint": "Koristi k=y/x.",
        "solution": "k=−12/4=−3.",
        "level": "medium",
        "skill": "Koeficijent proporcionalnosti",
        "taskType": "odredjivanje-koeficijenta",
        "errorCategory": "method",
        "prerequisites": [
          "funkcija-ykx"
        ]
      },
      {
        "id": "o7-fg-3",
        "prompt": "Kako se ponaša grafik?",
        "math": "y=−0,5x",
        "kind": "choice",
        "choices": [
          "Raste",
          "Opada",
          "Ne prolazi kroz O"
        ],
        "answer": "Opada",
        "hint": "Koeficijent je negativan.",
        "solution": "Za k<0 prava opada.",
        "level": "advanced",
        "skill": "Grafik y=kx",
        "taskType": "zakljucak-iz-koeficijenta",
        "errorCategory": "concept",
        "diagram": {
          "type": "graph",
          "k": -0.5
        },
        "prerequisites": [
          "funkcija-ykx"
        ]
      },
      {
        "id": "o7-fg-4",
        "prompt": "Kroz koju tačku mora prolaziti grafik?",
        "math": "y=kx",
        "kind": "choice",
        "choices": [
          "(0,0)",
          "(0,1)",
          "(1,0)"
        ],
        "answer": "(0,0)",
        "hint": "Uvrsti x=0.",
        "solution": "Za x=0 je y=0.",
        "level": "basic",
        "skill": "Grafik y=kx",
        "practiceOnly": true,
        "taskType": "koordinatni-pocetak",
        "errorCategory": "concept",
        "prerequisites": [
          "funkcija-ykx"
        ]
      },
      {
        "id": "o7-fg-5",
        "prompt": "Izaberi dve tačke grafika.",
        "math": "y=3x",
        "kind": "choice",
        "choices": [
          "(1,3) i (2,6)",
          "(1,2) i (3,6)",
          "(0,3) i (3,0)"
        ],
        "answer": "(1,3) i (2,6)",
        "hint": "Proveri y=3x za obe tačke.",
        "solution": "Obe tačke prvog para zadovoljavaju funkciju.",
        "level": "medium",
        "skill": "Grafik y=kx",
        "practiceOnly": true,
        "taskType": "izbor-tacaka",
        "errorCategory": "method",
        "diagram": {
          "type": "graph",
          "k": 3
        },
        "prerequisites": [
          "funkcija-ykx"
        ]
      },
      {
        "id": "o7-fg-6",
        "prompt": "Koji grafik je strmiji?",
        "math": "y=4x ili y=1,5x",
        "kind": "choice",
        "choices": [
          "y=4x",
          "y=1,5x",
          "Jednako su strmi"
        ],
        "answer": "y=4x",
        "hint": "Uporedi apsolutne vrednosti koeficijenata.",
        "solution": "4>1,5, pa je y=4x strmiji.",
        "level": "advanced",
        "skill": "Grafik y=kx",
        "practiceOnly": true,
        "taskType": "poredjenje-nagiba",
        "errorCategory": "diagram",
        "prerequisites": [
          "funkcija-ykx"
        ]
      },
      {
        "id": "o7-fg-7",
        "prompt": "Pronađi grešku.",
        "math": "Tačka (−2,6) pripada grafiku y=2x.",
        "kind": "choice",
        "choices": [
          "Treba da je y=−4.",
          "Treba da je x=3.",
          "Nema greške."
        ],
        "answer": "Treba da je y=−4.",
        "hint": "Izračunaj 2·(−2).",
        "solution": "Za x=−2 dobijamo y=−4.",
        "level": "advanced",
        "skill": "Grafik y=kx",
        "practiceOnly": true,
        "taskType": "pronadji-gresku",
        "errorCategory": "sign",
        "prerequisites": [
          "funkcija-ykx"
        ]
      },
      {
        "id": "o7-fg-8",
        "prompt": "Koja je druga koordinata tačke A?",
        "math": "A(2,−4)",
        "kind": "choice",
        "choices": [
          "2",
          "−4",
          "4"
        ],
        "answer": "−4",
        "hint": "U uređenom paru prva koordinata je x, a druga y.",
        "solution": "Druga koordinata, odnosno ordinata tačke A, jeste −4.",
        "level": "basic",
        "skill": "Grafik y=kx",
        "taskType": "citanje-koordinata",
        "errorCategory": "concept",
        "practiceOnly": true,
        "diagram": {
          "type": "graph",
          "k": -2,
          "point": {
            "x": 2,
            "y": -4
          }
        },
        "prerequisites": [
          "funkcija-ykx"
        ]
      },
      {
        "id": "o7-fg-9",
        "prompt": "Odredi y-koordinatu tačke grafika.",
        "math": "y=−0,5x, x=−2",
        "kind": "input",
        "answer": "1",
        "hint": "Pomnoži dva negativna broja.",
        "solution": "y=(−0,5)·(−2)=1.",
        "level": "medium",
        "skill": "Grafik y=kx",
        "taskType": "ordinata-negativnog-x",
        "errorCategory": "sign",
        "practiceOnly": true,
        "prerequisites": [
          "funkcija-ykx"
        ]
      },
      {
        "id": "o7-fg-10",
        "prompt": "Odredi koordinate opisane tačke A.",
        "math": "Od O do A: 2 podeljka udesno i 3 nagore. Na x-osi jedan podeljak vredi 0,5, a na y-osi 1.",
        "kind": "choice",
        "choices": [
          "A(1,3)",
          "A(2,3)",
          "A(3,1)"
        ],
        "answer": "A(1,3)",
        "hint": "Broj podeljaka pomnoži vrednošću jednog podeljka na odgovarajućoj osi.",
        "solution": "x=2·0,5=1 i y=3·1=3, pa je A(1,3).",
        "level": "medium",
        "skill": "Grafik y=kx",
        "taskType": "razmera-koordinatnih-osa",
        "errorCategory": "diagram",
        "practiceOnly": true,
        "prerequisites": [
          "funkcija-ykx"
        ]
      }
    ],
    "month": "october",
    "prerequisites": [
      "direktna-proporcionalnost"
    ]
  },
  {
    "id": "proporcije",
    "title": "Proporcije",
    "intro": "Proporcija je jednakost dve razmere. Nepoznati član nalazimo pomoću jednakosti unakrsnih proizvoda.",
    "rules": [
      "Sačuvaj isti redosled veličina.",
      "Proizvod spoljašnjih članova jednak je proizvodu unutrašnjih.",
      "Na kraju proveri dobijenu jednakost."
    ],
    "formulas": [
      "a:b=c:d, b≠0, d≠0",
      "a·d=b·c"
    ],
    "examples": ["Iz 5:2=15:x sledi 5x=30, pa je x=6."],
    "solved": {
      "question": "Nađi x ako je 3:8=x:20.",
      "steps": ["Unakrsnim množenjem dobijaš 8x=60.", "x=7,5. Provera: 3·20=8·7,5."]
    },
    "tasks": [
      {
        "id": "o7-pr-1",
        "prompt": "Odredi x.",
        "math": "3:5=x:20",
        "kind": "input",
        "answer": "12",
        "hint": "Koristi unakrsni proizvod.",
        "solution": "5x=60, pa je x=12.",
        "level": "basic",
        "skill": "Proporcija",
        "taskType": "nepoznati-clan",
        "errorCategory": "method",
        "prerequisites": [
          "proporcije"
        ]
      },
      {
        "id": "o7-pr-2",
        "prompt": "Koja proporcija je tačna?",
        "math": "",
        "kind": "choice",
        "choices": [
          "4:6=10:15",
          "3:8=9:16",
          "5:7=15:14"
        ],
        "answer": "4:6=10:15",
        "hint": "Proveri unakrsne proizvode.",
        "solution": "4·15=6·10=60.",
        "level": "medium",
        "skill": "Proporcija",
        "taskType": "provera-proporcije",
        "errorCategory": "rule",
        "prerequisites": [
          "proporcije"
        ]
      },
      {
        "id": "o7-pr-3",
        "prompt": "Pronađi grešku.",
        "math": "8:12=10:15, jer je 8·10=12·15.",
        "kind": "choice",
        "choices": [
          "Pogrešno su upareni proizvodi.",
          "Razmere nisu jednake.",
          "Nema greške."
        ],
        "answer": "Pogrešno su upareni proizvodi.",
        "hint": "Treba množiti spoljašnje i unutrašnje članove.",
        "solution": "Provera je 8·15=12·10.",
        "level": "advanced",
        "skill": "Proporcija",
        "taskType": "pronadji-gresku",
        "errorCategory": "rule",
        "prerequisites": [
          "proporcije"
        ]
      },
      {
        "id": "o7-pr-4",
        "prompt": "Dopuni.",
        "math": "7:21=4:x",
        "kind": "input",
        "answer": "12",
        "hint": "7x=21·4.",
        "solution": "x=84/7=12.",
        "level": "basic",
        "skill": "Proporcija",
        "practiceOnly": true,
        "taskType": "dopuni-proporciju",
        "errorCategory": "calculation",
        "prerequisites": [
          "proporcije"
        ]
      },
      {
        "id": "o7-pr-5",
        "prompt": "Izaberi ekvivalentnu proporciju.",
        "math": "2:5=6:15",
        "kind": "choice",
        "choices": [
          "5:2=15:6",
          "2:6=15:5",
          "5:6=2:15"
        ],
        "answer": "5:2=15:6",
        "hint": "Možeš obrnuti obe razmere.",
        "solution": "5/2=15/6.",
        "level": "medium",
        "skill": "Proporcija",
        "practiceOnly": true,
        "taskType": "transformacija-proporcije",
        "errorCategory": "rule",
        "prerequisites": [
          "proporcije"
        ]
      },
      {
        "id": "o7-pr-6",
        "prompt": "Odredi x.",
        "math": "0,6:x=3:20",
        "kind": "input",
        "answer": "4",
        "hint": "Koristi unakrsni proizvod.",
        "solution": "3x=0,6·20=12, pa je x=4.",
        "level": "advanced",
        "skill": "Proporcija",
        "practiceOnly": true,
        "taskType": "decimalna-proporcija",
        "errorCategory": "calculation",
        "prerequisites": [
          "proporcije"
        ]
      },
      {
        "id": "o7-pr-7",
        "prompt": "Koji uslov daje proporciju?",
        "math": "a,b,c,d≠0",
        "kind": "choice",
        "choices": [
          "a·d=b·c",
          "a+b=c+d",
          "a−b=c−d"
        ],
        "answer": "a·d=b·c",
        "hint": "Seti se unakrsnih proizvoda.",
        "solution": "Jednakost proizvoda daje a:b=c:d.",
        "level": "advanced",
        "skill": "Proporcija",
        "practiceOnly": true,
        "taskType": "pravilo-unazad",
        "errorCategory": "concept",
        "prerequisites": [
          "proporcije"
        ]
      },
      {
        "id": "o7-pr-8",
        "prompt": "Koji su spoljašnji članovi proporcije?",
        "math": "a:b=c:d",
        "kind": "choice",
        "choices": [
          "a i d",
          "a i c",
          "b i c"
        ],
        "answer": "a i d",
        "hint": "Spoljašnji članovi su prvi i poslednji u zapisu.",
        "solution": "U proporciji a:b=c:d spoljašnji članovi su a i d.",
        "level": "basic",
        "skill": "Proporcija",
        "taskType": "prepoznavanje-clanova",
        "errorCategory": "concept",
        "practiceOnly": true,
        "prerequisites": [
          "proporcije"
        ]
      },
      {
        "id": "o7-pr-9",
        "prompt": "Odredi cenu 7 istih svezaka u dinarima.",
        "math": "4 sveske koštaju 200 dinara; cena jedne je stalna.",
        "kind": "input",
        "answer": "350",
        "hint": "Sačuvaj isti redosled broja svezaka i njihovih cena.",
        "solution": "4:7=200:x, pa 4x=1400 i x=350 dinara.",
        "level": "medium",
        "skill": "Proporcija",
        "taskType": "model-iz-teksta",
        "errorCategory": "method",
        "practiceOnly": true,
        "prerequisites": [
          "proporcije"
        ]
      },
      {
        "id": "o7-pr-10",
        "prompt": "Može li dati zapis biti proporcija?",
        "math": "5:0=x:6",
        "kind": "choice",
        "choices": [
          "Ne, razmera 5:0 nije definisana.",
          "Da, rešenje je x=0.",
          "Da, rešenje je x=30."
        ],
        "answer": "Ne, razmera 5:0 nije definisana.",
        "hint": "Pre unakrsnog množenja proveri imenioce.",
        "solution": "Deljenje nulom nije definisano, pa 5:0 ne predstavlja razmeru.",
        "level": "medium",
        "skill": "Proporcija",
        "taskType": "provera-definisanosti",
        "errorCategory": "concept",
        "practiceOnly": true,
        "prerequisites": [
          "proporcije"
        ]
      }
    ],
    "month": "october",
    "prerequisites": [
      "direktna-proporcionalnost"
    ]
  },
  {
    "id": "produzena-proporcija",
    "title": "Produžena proporcija",
    "intro": "Produžena proporcija povezuje tri ili više razmera. Sve veličine predstavljamo istim zajedničkim delom.",
    "rules": [
      "Zapis a:b:c=p:q:r znači a=px, b=qx, c=rx.",
      "Zajednički deo x nalazimo iz poznatog zbira ili razlike.",
      "Dvotačka ovde povezuje razmere, nije redosled uzastopnog deljenja."
    ],
    "formulas": [
      "a:b:c=p:q:r",
      "a=px, b=qx, c=rx"
    ],
    "examples": ["Za a:b:c=1:2:5 i zbir 32 jedan deo je 32:8=4. Veličine su 4, 8 i 20."],
    "solved": {
      "question": "Ako je a:b:c=2:3:4 i b=18, pronađi a i c.",
      "steps": ["Tri dela vrede 18, pa jedan deo vredi 6.", "a=2·6=12, a c=4·6=24."]
    },
    "tasks": [
      {
        "id": "o7-pp-1",
        "prompt": "Dopuni.",
        "math": "a:b:c=1:2:4, a=5",
        "kind": "choice",
        "choices": [
          "b=10, c=20",
          "b=7, c=9",
          "b=5, c=5"
        ],
        "answer": "b=10, c=20",
        "hint": "Jedan deo je 5.",
        "solution": "b=2·5=10, c=4·5=20.",
        "level": "basic",
        "skill": "Produžena proporcija",
        "taskType": "dopunjavanje-odnosa",
        "errorCategory": "method",
        "prerequisites": [
          "produzena-proporcija"
        ]
      },
      {
        "id": "o7-pp-2",
        "prompt": "Odredi najmanji deo.",
        "math": "Zbir 90 podeljen je u razmeri 2:3:4.",
        "kind": "input",
        "answer": "20",
        "hint": "Ukupno ima 9 delova.",
        "solution": "Jedan deo je 10, pa je najmanji deo 2·10=20.",
        "level": "medium",
        "skill": "Produžena proporcija",
        "taskType": "podela-zbira",
        "errorCategory": "calculation",
        "prerequisites": [
          "produzena-proporcija"
        ]
      },
      {
        "id": "o7-pp-3",
        "prompt": "Odredi najveći ugao.",
        "math": "Unutrašnji uglovi istog trougla: α:β:γ=3:4:5",
        "kind": "input",
        "answer": "75",
        "hint": "Zbir uglova je 180°.",
        "solution": "12x=180°, x=15°, pa je γ=75°.",
        "level": "advanced",
        "skill": "Produžena proporcija",
        "taskType": "uglovi-u-razmeri",
        "errorCategory": "method",
        "prerequisites": [
          "produzena-proporcija"
        ]
      },
      {
        "id": "o7-pp-4",
        "prompt": "Odredi zbir delova odnosa.",
        "math": "4:5:7",
        "kind": "input",
        "answer": "16",
        "hint": "Saberi brojeve odnosa.",
        "solution": "4+5+7=16.",
        "level": "basic",
        "skill": "Produžena proporcija",
        "practiceOnly": true,
        "taskType": "broj-delova",
        "errorCategory": "calculation",
        "prerequisites": [
          "produzena-proporcija"
        ]
      },
      {
        "id": "o7-pp-5",
        "prompt": "Izaberi ispravan zapis.",
        "math": "a:b:c=2:3:6",
        "kind": "choice",
        "choices": [
          "a=2x,b=3x,c=6x",
          "a=2+x,b=3+x,c=6+x",
          "a=2x,b=3x,c=x/6"
        ],
        "answer": "a=2x,b=3x,c=6x",
        "hint": "Svaki član je broj delova puta x.",
        "solution": "Tačan je prvi zapis.",
        "level": "medium",
        "skill": "Produžena proporcija",
        "practiceOnly": true,
        "taskType": "algebarski-model",
        "errorCategory": "rule",
        "prerequisites": [
          "produzena-proporcija"
        ]
      },
      {
        "id": "o7-pp-6",
        "prompt": "Odredi najmanji ugao.",
        "math": "Unutrašnji uglovi istog trougla: α:β:γ=2:3:7",
        "kind": "input",
        "answer": "30",
        "hint": "Ukupno je 12 delova.",
        "solution": "x=180/12=15°, pa je α=2x=30°.",
        "level": "advanced",
        "skill": "Produžena proporcija",
        "practiceOnly": true,
        "taskType": "trougao-i-razmera",
        "errorCategory": "method",
        "prerequisites": [
          "produzena-proporcija"
        ]
      },
      {
        "id": "o7-pp-7",
        "prompt": "Pronađi grešku.",
        "math": "60 delimo u razmeri 1:2:3; jedan deo je 60:3.",
        "kind": "choice",
        "choices": [
          "Treba deliti sa 6.",
          "Treba množiti sa 3.",
          "Nema greške."
        ],
        "answer": "Treba deliti sa 6.",
        "hint": "Saberi 1+2+3.",
        "solution": "Ukupno ima 6 delova.",
        "level": "advanced",
        "skill": "Produžena proporcija",
        "practiceOnly": true,
        "taskType": "pronadji-gresku",
        "errorCategory": "method",
        "prerequisites": [
          "produzena-proporcija"
        ]
      },
      {
        "id": "o7-pp-8",
        "prompt": "Izaberi isti odnos.",
        "math": "a:b:c=2:3:5",
        "kind": "choice",
        "choices": [
          "a:b:c=4:6:10",
          "a:b:c=3:4:6",
          "a:b:c=2:6:10"
        ],
        "answer": "a:b:c=4:6:10",
        "hint": "Svaki član odnosa pomnoži istim nenultim brojem.",
        "solution": "Množenjem sva tri člana sa 2 dobija se 4:6:10.",
        "level": "basic",
        "skill": "Produžena proporcija",
        "taskType": "ekvivalentan-odnos",
        "errorCategory": "rule",
        "practiceOnly": true,
        "prerequisites": [
          "produzena-proporcija"
        ]
      },
      {
        "id": "o7-pp-9",
        "prompt": "Spoji odnose u produženu proporciju.",
        "math": "a:b=2:3 i b:c=6:5",
        "kind": "choice",
        "choices": [
          "a:b:c=4:6:5",
          "a:b:c=2:3:5",
          "a:b:c=2:6:5"
        ],
        "answer": "a:b:c=4:6:5",
        "hint": "U oba odnosa član b mora imati isti broj delova.",
        "solution": "Prvi odnos proširi sa 2 na a:b=4:6; poveži ga sa b:c=6:5 i dobijaš 4:6:5.",
        "level": "medium",
        "skill": "Produžena proporcija",
        "taskType": "spajanje-dva-odnosa",
        "errorCategory": "method",
        "practiceOnly": true,
        "prerequisites": [
          "produzena-proporcija"
        ]
      },
      {
        "id": "o7-pp-10",
        "prompt": "Odredi b.",
        "math": "a:b:c=1:2:4, c−a=21",
        "kind": "input",
        "answer": "14",
        "hint": "Razlika ima 4−1=3 zajednička dela.",
        "solution": "3t=21, pa t=7; b=2t=14.",
        "level": "medium",
        "skill": "Produžena proporcija",
        "taskType": "poznata-razlika",
        "errorCategory": "method",
        "practiceOnly": true,
        "prerequisites": [
          "produzena-proporcija"
        ]
      }
    ],
    "month": "october",
    "prerequisites": [
      "proporcije"
    ]
  },
  {
    "id": "primena-produzene-proporcije",
    "title": "Primene produžene proporcije",
    "intro": "Razmerom delimo novac, dužinu ili količinu na pravedne delove. Najpre odredimo vrednost jednog dela.",
    "rules": [
      "Prepoznaj ukupan broj delova.",
      "Pazi da li je dat zbir, razlika ili jedan deo.",
      "Proveri da zbir dobijenih delova odgovara početnoj veličini."
    ],
    "formulas": [
      "x=[[frac:ukupno|zbir odnosa]]"
    ],
    "examples": ["Za uglove trougla u odnosu 2:3:5 jedan deo je 180°:10=18°. Uglovi su 36°, 54° i 90°."],
    "solved": {
      "question": "Podeli 2700 dinara u odnosu 2:3:4.",
      "steps": ["Zbir je 9 delova. Jedan deo vredi 2700:9=300 dinara.", "Dodeli 600, 900 i 1200 dinara. Njihov zbir je 2700."]
    },
    "tasks": [
      {
        "id": "o7-ppr-1",
        "prompt": "Odredi najveći deo.",
        "math": "240 u razmeri 2:3:5",
        "kind": "input",
        "answer": "120",
        "hint": "Ukupno ima 10 delova.",
        "solution": "Jedan deo je 24, pa je najveći 5·24=120.",
        "level": "basic",
        "skill": "Podela u razmeri",
        "taskType": "realna-podela",
        "errorCategory": "method",
        "prerequisites": [
          "primena-produzene-proporcije"
        ]
      },
      {
        "id": "o7-ppr-2",
        "prompt": "Izaberi tačnu podelu.",
        "math": "96 u razmeri 1:3:4",
        "kind": "choice",
        "choices": [
          "12, 36, 48",
          "8, 24, 64",
          "16, 32, 48"
        ],
        "answer": "12, 36, 48",
        "hint": "Ukupno ima 8 delova.",
        "solution": "Jedan deo je 12.",
        "level": "medium",
        "skill": "Podela u razmeri",
        "taskType": "izbor-podele",
        "errorCategory": "calculation",
        "prerequisites": [
          "primena-produzene-proporcije"
        ]
      },
      {
        "id": "o7-ppr-3",
        "prompt": "Odredi srednji deo.",
        "math": "Razlika najvećeg i najmanjeg dela je 54, a odnos je 2:5:8.",
        "kind": "input",
        "answer": "45",
        "hint": "Razlika 8x−2x iznosi 54.",
        "solution": "6x=54, x=9, pa je srednji deo 5x=45.",
        "level": "advanced",
        "skill": "Podela u razmeri",
        "taskType": "resavanje-unazad",
        "errorCategory": "method",
        "prerequisites": [
          "primena-produzene-proporcije"
        ]
      },
      {
        "id": "o7-ppr-4",
        "prompt": "Odredi najmanji deo.",
        "math": "150 u razmeri 2:3:5",
        "kind": "input",
        "answer": "30",
        "hint": "Ukupno ima 10 delova.",
        "solution": "Jedan deo je 15, pa je najmanji 30.",
        "level": "basic",
        "skill": "Podela u razmeri",
        "practiceOnly": true,
        "taskType": "najmanji-deo",
        "errorCategory": "calculation",
        "prerequisites": [
          "primena-produzene-proporcije"
        ]
      },
      {
        "id": "o7-ppr-5",
        "prompt": "Odredi deo druge grupe.",
        "math": "420 učenika u razmeri 3:4:5",
        "kind": "input",
        "answer": "140",
        "hint": "Ukupno ima 12 delova.",
        "solution": "Jedan deo je 35, pa druga grupa ima 4·35=140 učenika.",
        "level": "medium",
        "skill": "Podela u razmeri",
        "practiceOnly": true,
        "taskType": "podela-grupa",
        "errorCategory": "method",
        "prerequisites": [
          "primena-produzene-proporcije"
        ]
      },
      {
        "id": "o7-ppr-6",
        "prompt": "Da li je podela ispravna?",
        "math": "180 u razmeri 2:3:4 → 40, 60, 80",
        "kind": "choice",
        "choices": [
          "Da",
          "Ne"
        ],
        "answer": "Da",
        "hint": "Proveri zbir i razmere.",
        "solution": "Zbir je 180, a delovi su 2·20,3·20,4·20.",
        "level": "medium",
        "skill": "Podela u razmeri",
        "practiceOnly": true,
        "taskType": "provera-resenja",
        "errorCategory": "concept",
        "prerequisites": [
          "primena-produzene-proporcije"
        ]
      },
      {
        "id": "o7-ppr-7",
        "prompt": "Odredi ukupan iznos.",
        "math": "Delovi su u razmeri 2:5:7, a najmanji je 18.",
        "kind": "input",
        "answer": "126",
        "hint": "Jedan deo je 9.",
        "solution": "Ukupno je (2+5+7)·9=126.",
        "level": "advanced",
        "skill": "Podela u razmeri",
        "practiceOnly": true,
        "taskType": "ukupno-iz-jednog-dela",
        "errorCategory": "method",
        "prerequisites": [
          "primena-produzene-proporcije"
        ]
      },
      {
        "id": "o7-ppr-8",
        "prompt": "Koliko litara ima drugog sastojka?",
        "math": "Mešavina od 30 l ima tri sastojka u odnosu 2:1:3.",
        "kind": "input",
        "answer": "5",
        "hint": "Drugi sastojak zauzima jedan od ukupno šest delova.",
        "solution": "Jedan deo je 30:(2+1+3)=5 l, pa drugog sastojka ima 5 l.",
        "level": "basic",
        "skill": "Podela u razmeri",
        "taskType": "mesavina",
        "errorCategory": "method",
        "practiceOnly": true,
        "prerequisites": [
          "primena-produzene-proporcije"
        ]
      },
      {
        "id": "o7-ppr-9",
        "prompt": "Odredi kraću stranicu pravougaonika u centimetrima.",
        "math": "O=50 cm, a:b=2:3",
        "kind": "input",
        "answer": "10",
        "hint": "Zbir dve susedne stranice jednak je polovini obima.",
        "solution": "a+b=25 cm; 5t=25 daje t=5 cm; kraća stranica a=2t=10 cm.",
        "level": "medium",
        "skill": "Podela u razmeri",
        "taskType": "obim-i-odnos",
        "errorCategory": "method",
        "practiceOnly": true,
        "prerequisites": [
          "primena-produzene-proporcije"
        ]
      },
      {
        "id": "o7-ppr-10",
        "prompt": "Koliko dinara dobija drugi radnik?",
        "math": "Od 9000 dinara 20% ide za materijal. Tri radnika dele ostatak u odnosu 2:3:4.",
        "kind": "input",
        "answer": "2400",
        "hint": "Najpre odvoji materijal, pa ostatak podeli u odnosu.",
        "solution": "Za materijal ide 1800 dinara, ostaje 7200. Jedan deo je 7200:9=800, a drugi radnik dobija 3·800=2400 dinara.",
        "level": "advanced",
        "skill": "Podela u razmeri",
        "taskType": "ostatak-nakon-procenta",
        "errorCategory": "method",
        "practiceOnly": true,
        "prerequisites": [
          "primena-produzene-proporcije"
        ]
      }
    ],
    "month": "october",
    "prerequisites": [
      "produzena-proporcija"
    ]
  }
];

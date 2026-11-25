import { grades } from './index';
import type {LessonLearning} from "./types";

/** Reviewed against the supplied textbooks; source notes are not shown to pupils. */
export const learningByLesson:Record<string,LessonLearning> = {
  "kratko-obnavljanje-5": {
    "aim": "Poveži računanje, razlomke i osnovnu geometriju da samostalno izabereš postupak za svaki tip zadatka.",
    "idea": [
      "Obnavljamo računanje, razlomke i osnovne geometrijske odnose. Pri poređenju prirodnih brojeva gledaj broj cifara, pa prvu različitu cifru sleva; pri pisanom oduzimanju poravnaj cifre iste mesne vrednosti.",
      "Imenilac određuje jednake delove celine, a brojilac njihov broj. Kod jednakih imenilaca poredi, sabiraj ili oduzimaj brojioce. Kolinearne tačke pripadaju istoj pravoj; dva ugla koja čine opružen ugao imaju zbir 180°."
    ],
    "steps": [
      "U izrazu računaj zagrade, zatim množenje i deljenje, pa sabiranje i oduzimanje.",
      "Nepoznati sabirak dobijaš oduzimanjem od zbira; nepoznatu stranicu pravougaonika oduzimanjem poznate od polovine obima."
    ],
    "why": "Obim pravougaonika obuhvata po dve jednake stranice; zato je njegova polovina zbir susednih stranica.",
    "caution": "Pri sabiranju razlomaka sa jednakim imeniocem imenilac ostaje isti.",
    "extraFormulas": [
      "[[frac:a|c]]±[[frac:b|c]]=[[frac:a±b|c]], c>0",
      "O=2(a+b)",
      "α+β=180°"
    ],
    "sourcePages": "Operativni plan za septembar, časovi 2–4; udžbenik 6, str. 8, 45, 51 i podsetnici na pozitivne razlomke str. 73–74, 83. Samo predznanje iz 5. razreda.",
    "visuals": [
      "Pravougaonik sa označenim parovima jednakih stranica i vizuelnim odvajanjem polovine obima.",
      "Dve jednake trake podeljene na iste delove i opružen ugao podeljen jednom polupravom."
    ]
  },
  "skup-celih-brojeva": {
    "aim": "Prepoznaj ceo broj, pročitaj njegovu koordinatu i razlikuj prethodnik, sledbenik i suprotan broj.",
    "idea": [
      "Skup Z čine negativni celi brojevi, nula i pozitivni celi brojevi. Nula nije ni pozitivna ni negativna. Ceo broj nema razlomljeni deo, bez obzira na način zapisa.",
      "Koordinata je broj pridružen tački na brojnoj pravoj. Jednaki razmaci predstavljaju iste jedinice, a brojevi rastu udesno. Prethodnik je susedni ceo broj levo, sledbenik desno; suprotan broj dobijaš promenom predznaka."
    ],
    "steps": [
      "Pre čitanja tačke pronađi nulu i vrednost jednog razmaka.",
      "Uzastopni celi brojevi razlikuju se za 1; ako znaš prethodnik, traženi broj je njegov sledbenik."
    ],
    "why": "Suprotni brojevi leže sa različitih strana nule, na jednakom rastojanju od nje.",
    "caution": "Suprotan broj nije sledbenik. Broju 0 suprotan je ponovo 0.",
    "extraFormulas": [
      "Z={…,−2,−1,0,1,2,…}",
      "Prethodnik: a−1; sledbenik: a+1",
      "−(−a)=a"
    ],
    "sourcePages": "Udžbenik 6, str. 8–11, 14–15; operativni plan za septembar, časovi 6–9.",
    "visuals": [
      "Brojevna prava sa po jednom strelicom za prethodnik i sledbenik.",
      "Par suprotnih tačaka spojen istim oznakama rastojanja od nule."
    ]
  },
  "apsolutna-vrednost": {
    "aim": "Protumači apsolutnu vrednost kao rastojanje od nule i pronađi sve brojeve koji ispunjavaju zadati uslov.",
    "idea": [
      "Apsolutna vrednost |a| jeste rastojanje broja a od nule na brojnoj pravoj. Pozitivnom broju i nuli vrednost ostaje ista, a negativnom broju uzimamo suprotan broj.",
      "Uslov |x|=k za k>0 daje dva suprotna broja. Za k=0 jedina mogućnost je x=0, a za k<0 nema rešenja. Dodatni uslov x<0 ili x>0 bira stranu brojne prave."
    ],
    "steps": [
      "Najpre odredi svaku apsolutnu vrednost, pa računaj ili poredi dobijene brojeve.",
      "Ako tražiš x, proveri obe mogućnosti i dodatne uslove."
    ],
    "why": "Rastojanje je dužina: ne može biti negativno i ne zavisi od smera.",
    "caution": "Uspravne crte nisu zagrade; |−a| nije negativno rastojanje.",
    "extraFormulas": [
      "|a|≥0",
      "|a|=|−a|",
      "|x|=k, k>0 ⇒ x=−k ili x=k"
    ],
    "sourcePages": "Udžbenik 6, str. 14–17; operativni plan za septembar, časovi 8–9.",
    "visuals": [
      "Brojevna prava sa dva simetrična markera i jednakim lukovima do nule.",
      "Mala tabela koordinata i rastojanja, sa posebno prikazanom nulom."
    ]
  },
  "uporedjivanje": {
    "aim": "Uporedi i poređaj cele brojeve, izdvoji brojeve iz zadatog raspona i obrazloži izbor znaka.",
    "idea": [
      "Veći broj je desnije na brojnoj pravoj. Pozitivni brojevi su veći od nule, a nula od svih negativnih brojeva. Među negativnim brojevima veći je onaj bliži nuli.",
      "Poređati od najmanjeg znači pratiti brojeve sleva nadesno. Znakovi < i > isključuju granične vrednosti; kada se traže celi brojevi, razlomljene vrednosti ne uzimamo."
    ],
    "steps": [
      "Kod dva negativna broja poredi apsolutne vrednosti i obrni njihov poredak.",
      "U rasponu zadrži samo brojeve koji ispunjavaju oba uslova. Nepoznatu cifru proveri zamenom u celom broju."
    ],
    "why": "Pomeranje udesno povećava koordinatu, čak i kada su oba broja negativna.",
    "caution": "Veća apsolutna vrednost negativnog broja znači manji broj.",
    "extraFormulas": [
      "−7<−2<0<4",
      "m<x<n: krajevi m i n nisu uključeni"
    ],
    "sourcePages": "Udžbenik 6, str. 18–19; operativni plan za septembar, časovi 8–9.",
    "visuals": [
      "Brojevna prava sa strelicom porasta i oznakama otvorenih krajeva raspona.",
      "Dva termometra sa zajedničkom skalom za poređenje negativnih temperatura."
    ]
  },
  "sabiranje": {
    "aim": "Izračunaj zbir celih brojeva, proceni njegov znak i pronađi nepoznati sabirak.",
    "idea": [
      "Prvi sabirak daje početnu tačku; pozitivan drugi sabirak pomera udesno, a negativan ulevo. Kod istih predznaka saberi apsolutne vrednosti i zadrži predznak.",
      "Kod različitih predznaka oduzmi manju apsolutnu vrednost od veće i uzmi predznak broja veće apsolutne vrednosti. Suprotni brojevi daju zbir 0. Sabirke možeš menjati mestima i grupisati."
    ],
    "steps": [
      "Prvo proceni znak, pa izračunaj zbir. U tabeli sabiraj vrednosti iz istog stupca.",
      "Nepoznati sabirak dobijaš oduzimanjem poznatog od zbira; rezultat proveri u početnom uslovu."
    ],
    "why": "Pomeranja suprotnog smera delimično se poništavaju; ostatak određuje znak i veličinu zbira.",
    "caution": "Za sabiranje ne koristi pravilo predznaka za množenje.",
    "extraFormulas": [
      "a+(−a)=0",
      "a+0=a",
      "x+a=b ⇒ x=b−a"
    ],
    "sourcePages": "Udžbenik 6, str. 20–23; operativni plan za septembar, časovi 10–11.",
    "visuals": [
      "Dva uzastopna pomeranja na brojevnoj pravoj sa različitim bojama.",
      "Parovi pozitivnih i negativnih žetona koji se poništavaju, sa preostalim žetonima istog znaka."
    ]
  },
  "oduzimanje": {
    "aim": "Prevedi oduzimanje u sabiranje suprotnog broja i razlikuj nepoznati umanjenik od nepoznatog umanjioca.",
    "idea": [
      "U izrazu a−b, a je umanjenik, b umanjilac, a rezultat razlika. Oduzeti broj znači sabrati njegov suprotan broj: prvi broj ostaje isti, a drugi menja predznak.",
      "Oduzimanje pozitivnog broja pomera ulevo, a negativnog udesno. U zadacima sa liftom ili promenom stanja najpre zapiši početno stanje i smer promene."
    ],
    "steps": [
      "Prevedi oduzimanje u sabiranje i primeni poznato pravilo zbira.",
      "Nepoznati umanjenik je zbir razlike i umanjioca; nepoznati umanjilac je umanjenik minus razlika."
    ],
    "why": "Razlika sabrana sa umanjiocem mora vratiti umanjenik; time proveravamo račun.",
    "caution": "Ne menjaj prvi broj. Oduzimanje uglavnom ne dozvoljava zamenu mesta.",
    "extraFormulas": [
      "a−b=a+(−b)",
      "a−(−b)=a+b",
      "x−b=c ⇒ x=c+b",
      "a−x=c ⇒ x=a−c"
    ],
    "sourcePages": "Udžbenik 6, str. 24–25; operativni plan za septembar, časovi 12–14.",
    "visuals": [
      "Par dijagrama sa istim početnim brojem: oduzimanje pozitivnog i negativnog broja.",
      "Šema umanjenik → razlika uz povratnu strelicu + umanjilac."
    ]
  },
  "rastojanje": {
    "aim": "Odredi rastojanje, mogući položaj tačke i sredinu duži na brojevnoj pravoj.",
    "idea": [
      "Rastojanje dve tačke jeste broj jediničnih duži između njih. Izračunaj veću koordinatu minus manju, odnosno apsolutnu vrednost razlike koordinata.",
      "Tačke na rastojanju r od tačke a nalaze se r jedinica levo i desno. Dodatni uslov može izdvojiti jednu mogućnost. Sredina duži deli rastojanje između krajeva na dva jednaka dela."
    ],
    "steps": [
      "Proveri skalu i očitaj koordinate pre računanja.",
      "Za zadato rastojanje proveri oba položaja; za sredinu pređi polovinu duži od jednog kraja ka drugom."
    ],
    "why": "Apsolutna vrednost uklanja smer: redosled krajeva ne menja dužinu.",
    "caution": "Koordinata može biti negativna; rastojanje ne može.",
    "extraFormulas": [
      "d(A,B)=|a−b|",
      "d(x,a)=r ⇒ x=a−r ili x=a+r, r≥0"
    ],
    "sourcePages": "Udžbenik 6, str. 10–11, 16 i 24–25; veza brojevne prave, apsolutne vrednosti i razlike; operativni plan za septembar, čas 13.",
    "visuals": [
      "Brojevna prava sa obojenom duži između dve tačke i jedinicama rastojanja.",
      "Dva moguća položaja na jednakom rastojanju od iste tačke, pa izdvajanje po dodatnom uslovu."
    ]
  },
  "sabiranje-oduzimanje": {
    "aim": "Uredi izraz sa više sabiranja i oduzimanja i vrati se od završnog do početnog stanja.",
    "idea": [
      "Izraz sa sabiranjem i oduzimanjem možeš pretvoriti u zbir brojeva sa predznacima. Potom računaj sleva nadesno ili grupiši pogodne sabirke, naročito suprotne parove.",
      "Zagrade određuju šta prvo računamo. Kada ispred cele zagrade stoji minus, svaki njen član menja predznak. U tekstualnom zadatku dug ili pad stanja zapiši negativno, a vraćanje duga ili porast pozitivno."
    ],
    "steps": [
      "Sredi zagrade i sačuvaj predznak uz svaki broj.",
      "Za nepoznato početno stanje poništi promene obrnutim redom, pa proveri rezultat u početnom opisu."
    ],
    "why": "Suprotna promena poništava prethodnu: dodavanje i oduzimanje istog broja vraćaju početno stanje.",
    "caution": "Menjanje mesta važi za sabirke, a ne za proizvoljnu zamenu brojeva pri oduzimanju.",
    "extraFormulas": [
      "a−(−b)=a+b",
      "−(a−b)=−a+b",
      "−(a+b)=−a−b"
    ],
    "sourcePages": "Udžbenik 6, str. 22–27, 38; operativni plan za septembar, čas 14.",
    "visuals": [
      "Lanac početno stanje → promena → promena → završno stanje sa povratnim strelicama.",
      "Predznaci članova ispod zagrade pre i posle njenog uklanjanja."
    ]
  },
  "mnozenje": {
    "aim": "Odredi proizvod i njegov znak, prepoznaj ponovljeno sabiranje i iskoristi zajednički činilac.",
    "idea": [
      "Množenje prirodnim brojem predstavlja ponovljeno sabiranje istog broja. Kod celih brojeva najpre odredi predznak prema tabeli, a zatim pomnoži apsolutne vrednosti.",
      "Proizvod je 0 ako neki činilac iznosi 0. Množenje brojem −1 daje suprotan broj. Kod više nenultih činilaca paran broj negativnih daje pozitivan, a neparan negativan proizvod."
    ],
    "steps": [
      "Pre računanja proveri nulu i prebroj negativne činioce.",
      "Nepoznati činilac proveri množenjem. Zajednički činilac možeš izdvojiti pre računanja zbira proizvoda."
    ],
    "why": "Svaki negativni činilac menja predznak; dva takva menjanja međusobno se poništavaju.",
    "caution": "Ukupna promena temperature nije konačna temperatura ako početno stanje nije poznato.",
    "extraFormulas": [
      "a·0=0",
      "a·(−1)=−a",
      "a·b+a·c=a·(b+c)"
    ],
    "sourcePages": "Udžbenik 6, str. 30–34; u planu za septembar čas 16; postojeća lekcija sajta zadržava oktobarski mesec.",
    "visuals": [
      "N jednakih pomeranja ulevo na brojevnoj pravoj uz zapis proizvoda.",
      "Četiri kombinacije predznaka i prikaz parova negativnih činilaca."
    ]
  },
  "deljenje": {
    "aim": "Odredi količnik, proveri ga množenjem i prepoznaj kada deljenje nije dozvoljeno.",
    "idea": [
      "Deljenje traži broj kojim treba pomnožiti delilac da dobijemo deljenik. U zapisu a:b=c, a je deljenik, b delilac, a c količnik; b mora biti različito od 0.",
      "Kod nenultih brojeva isti predznaci daju pozitivan, a različiti negativan količnik. Nula podeljena nenultim brojem daje 0. Dva cela broja ne moraju imati celobrojni količnik; ovde vežbamo celobrojne rezultate."
    ],
    "steps": [
      "Proveri delilac, odredi predznak i podeli apsolutne vrednosti.",
      "Nepoznati delilac pronađi iz veze množenja; u tekstualnom zadatku ukupnu ravnomernu promenu podeli brojem perioda."
    ],
    "why": "Količnik puta delilac mora dati deljenik: to je provera deljenja.",
    "caution": "Deljenje nulom, uključujući 0:0, nije dozvoljeno.",
    "extraFormulas": [
      "a:b=c ⇔ b·c=a, b≠0",
      "0:a=0, a≠0",
      "a:x=c ⇒ x=a:c, a≠0, c≠0"
    ],
    "sourcePages": "Udžbenik 6, str. 35–37; u planu za septembar časovi 17–18 i oktobar čas 18.",
    "visuals": [
      "Trougao veze deljenika, delioca i količnika sa povratnom proverom množenjem.",
      "Dva odvojena zapisa: nula u deljeniku i nula u deliocu, sa vidljivim uslovom."
    ]
  },
  "mnozenje-deljenje": {
    "aim": "Izračunaj lanac množenja i deljenja pravilnim redom i obrnutim operacijama pronađi početni broj.",
    "idea": [
      "Množenje i deljenje imaju jednak prioritet. Kada nema zagrada, računaj redom sleva nadesno: rezultat prethodne operacije koristiš u sledećoj.",
      "Najpre odredi predznak svake operacije, pa računaj sa apsolutnim vrednostima. Zagrade menjaju redosled i mogu promeniti rezultat. Delilac ni u jednom koraku ne sme biti 0."
    ],
    "steps": [
      "Izračunaj zagrade, a zatim prati zapis sleva nadesno.",
      "Nepoznati broj pronađi poništavanjem operacija obrnutim redom; proveri ga u izvornom izrazu."
    ],
    "why": "U lancu operacija ne deliš samo poslednji broj: svaki sledeći korak obrađuje dotadašnji rezultat.",
    "caution": "Ne radi sva množenja pre deljenja; njihov prioritet je isti.",
    "extraFormulas": [
      "(a:b)·c ≠ a:(b·c), u opštem slučaju",
      "a·0=0; delilac ≠0"
    ],
    "sourcePages": "Udžbenik 6, str. 35–38, posebno računanje mešovitog lanca na str. 36; operativni plan za oktobar, čas 19.",
    "visuals": [
      "Operacijski lanac sa međurezultatima i povratnim strelicama za obrnute operacije.",
      "Dva odvojena stabla za a:b·c i a:(b·c) sa označenim prvim korakom."
    ]
  },
  "brojevni-izrazi": {
    "aim": "Prevedi tekst u izraz, primeni redosled operacija i proveri kako zagrade menjaju vrednost.",
    "idea": [
      "Brojevni izraz povezuje više računskih operacija. Redosled je: zagrade, množenje i deljenje, pa sabiranje i oduzimanje. Operacije istog prioriteta računaj sleva nadesno.",
      "Tekst prevedi deo po deo: proizvod označava množenje, količnik deljenje, a rečenica određuje šta se od čega oduzima. U zadatku sa stanjem odvoji početnu vrednost, ponovljene promene i završnu promenu."
    ],
    "steps": [
      "Najpre sastavi ceo izraz, pa računaj po prioritetima.",
      "Za poređenje izračunaj oba izraza zasebno. Ako je proizvod 0, razmotri koji činilac može biti 0."
    ],
    "why": "Zagrade čuvaju smisao teksta: pokazuju koji deo izraza obrađujemo kao jednu celinu.",
    "caution": "Ne računaj uvek sleva nadesno: prvo proveri prioritete.",
    "extraFormulas": [
      "( ) → ·, : → +, −",
      "a·b=0 ⇒ a=0 ili b=0"
    ],
    "sourcePages": "Udžbenik 6, str. 26–28 i 36–38; operativni plan za oktobar, časovi 20–22.",
    "visuals": [
      "Isti izraz sa obojenim redosledom: zagrade, proizvodi/količnici, zbir/razlika.",
      "Dve varijante istog zapisa sa različitim zagradama i strelicama do prvog koraka."
    ]
  },
  "trougao-vrste": {
    "aim": "Prepoznaj elemente i vrste trougla i koristi obim za direktna i obrnuta pitanja.",
    "idea": [
      "Trougao određuju tri nekolinearna temena i duži koje ih povezuju. U △ABC stranice a=BC, b=CA i c=AB leže naspram temena A, B i C; susedne stranice imaju zajedničko teme.",
      "Prema stranicama trougao je raznostraničan, jednakokraki ili jednakostraničan. Prema najvećem uglu je oštrougli, pravougli ili tupougli. Isti trougao ima opis po oba kriterijuma; jednakim stranicama odgovaraju jednaki naspramni uglovi."
    ],
    "steps": [
      "Uporedi dužine za podelu prema stranicama, a najveći ugao sa 90° za podelu prema uglovima.",
      "Obim je zbir sve tri stranice; nepoznatu stranicu dobijaš oduzimanjem poznatih od obima."
    ],
    "why": "Veze temena i naspramnih stranica ostaju iste kada se crtež okrene.",
    "caution": "Naspramna stranica ne sadrži slovo datog temena.",
    "extraFormulas": [
      "a=BC, b=CA, c=AB",
      "O=a+b+c"
    ],
    "sourcePages": "Udžbenik 6, str. 45–50, 55–57 i 62; operativni plan za oktobar, časovi 23 i 32.",
    "visuals": [
      "Označen trougao sa linijama povezivanja svakog ugla i njemu naspramne stranice.",
      "Šest odvojenih preciznih skica: tri vrste prema stranama i tri prema uglovima."
    ]
  },
  "zbir-uglova-trougla": {
    "aim": "Odredi nepoznati unutrašnji ugao i proveri da li zadate vrednosti mogu biti uglovi trougla.",
    "idea": [
      "Zbir tri unutrašnja ugla svakog trougla iznosi 180°. Svaki ugao mora biti pozitivan. U pravouglom trouglu pravi ugao zauzima 90°, pa preostala dva oštra ugla zajedno daju 90°.",
      "Za jedan nepoznati ugao oduzmi zbir poznatih od 180°. Ako su uglovi opisani pomoću x, njihove opise saberi u jednu jednakost, a potom izračunaj svaki ugao."
    ],
    "steps": [
      "Za proveru trougla proveri pozitivnost svih uglova i njihov zbir.",
      "Ako se traži najveći ugao, prvo pronađi sve uglove i tek onda ih uporedi."
    ],
    "why": "Tri unutrašnja ugla mogu se složiti jedan do drugog u opružen ugao.",
    "caution": "Trougao ne može imati dva prava ili dva tupa ugla.",
    "extraFormulas": [
      "α+β+γ=180°",
      "γ=180°−α−β"
    ],
    "sourcePages": "Udžbenik 6, str. 48–50; operativni plan za oktobar, časovi 24–27.",
    "visuals": [
      "Trougao i paralela kroz vrh sa jednako obojenim odgovarajućim uglovima i njihovim premeštanjem u opružen ugao.",
      "Pravougli trougao sa kvadratićem i izdvojena dva oštra ugla čiji zbir čini 90°."
    ]
  },
  "uglovi-transverzala": {
    "aim": "Razlikuj unutrašnji i spoljašnji ugao i izaberi odgovarajuću vezu za nepoznati ugao.",
    "idea": [
      "Spoljašnji ugao trougla nastaje produžavanjem stranice preko temena. Sa susednim unutrašnjim uglom čini opružen ugao, a jednak je zbiru druga dva, nesusedna unutrašnja ugla.",
      "Ako izabereš po jedan spoljašnji ugao kod svakog temena, njihov zbir iznosi 360°. Dva spoljašnja ugla dobijena produžavanjem obe stranice kod istog temena imaju jednaku veličinu."
    ],
    "steps": [
      "Na crtežu razlikuj susedni unutrašnji ugao od dva nesusedna.",
      "Koristi dopunu do 180° ili zbir nesusednih uglova; nepoznati sabirak dobijaš oduzimanjem."
    ],
    "why": "Od zbira unutrašnjih uglova 180° oduzimanjem susednog ostaje zbir druga dva ugla.",
    "caution": "Zbir 360° važi za tri izabrana spoljašnja ugla, a ne za svih šest.",
    "extraFormulas": [
      "α+α_1=180°",
      "α_1=β+γ",
      "α_1+β_1+γ_1=360°"
    ],
    "sourcePages": "Udžbenik 6, str. 51–53 i 61; postojeća lekcija obrađuje spoljašnje uglove, iako njen ID i oktobarski plan čas 26 upućuju na transverzalu.",
    "visuals": [
      "Trougao sa produženjem jedne stranice, jasno obojenim susednim parom i dva nesusedna ugla.",
      "Tri spoljašnja ugla kod tri temena, sa kružnom strelicom koja pokazuje jedan pun obrt."
    ]
  },
  "odnos-stranica-uglova": {
    "aim": "Prevedi poredak stranica u poredak naspramnih uglova i primeni svojstva jednakokrakog trougla.",
    "idea": [
      "U istom trouglu naspram veće stranice leži veći ugao, a naspram jednakih stranica jednaki uglovi. Važi i obrnuto: poredak uglova daje poredak naspramnih stranica.",
      "U jednakokrakom trouglu kraci su jednaki, pa su jednaki i uglovi uz osnovicu. U pravouglom trouglu naspram pravog ugla leži hipotenuza, najduža stranica."
    ],
    "steps": [
      "Upari a↔α, b↔β, c↔γ i prenesi isti poredak na odgovarajuće elemente.",
      "Ako ugao nedostaje, prvo ga nađi iz zbira 180°; kod jednakokrakog koristi jednakost uglova uz osnovicu."
    ],
    "why": "Jednakost ili nejednakost prenosimo samo između naspramnih elemenata jednog trougla.",
    "caution": "Veći ugao povezuj sa naspramnom, a ne susednom stranicom.",
    "extraFormulas": [
      "a>b ⇔ α>β",
      "a=b ⇔ α=β",
      "Ugao pri vrhu = 180°−2·ugao na osnovici"
    ],
    "sourcePages": "Udžbenik 6, str. 54–57 i 61; operativni plan za oktobar, časovi 28–29 i 31.",
    "visuals": [
      "Označen trougao sa tri jasna para naspramnih elemenata i obojenim poretkom.",
      "Jednakokraki trougao sa crticama na kracima i jednakim lukovima uz osnovicu."
    ]
  },
  "nejednakost-trougla": {
    "aim": "Proveri postojanje trougla i pronađi dozvoljene celobrojne dužine treće stranice.",
    "idea": [
      "Tri pozitivne dužine grade trougao kada je svaka manja od zbira druge dve. Za tri poznate dužine dovoljno je proveriti da je najduža strogo manja od zbira dve kraće.",
      "Ako su a i b poznate, treća stranica x mora biti strogo između njihove apsolutne razlike i zbira. Kada se traže cele dužine, uzimamo samo cele brojeve u tom otvorenom rasponu."
    ],
    "steps": [
      "Izračunaj granice, pa izdvoji dozvoljene vrednosti; za obim dodaj treću stranicu poznatima.",
      "Kod jednakokrakog trougla sa dve različite dužine proveri obe mogućnosti za jednake krakove."
    ],
    "why": "Pri jednakosti kraće duži leže izravnato uz najdužu i ne zatvaraju trougao.",
    "caution": "Granične vrednosti nisu dozvoljene: znak < ne zamenjuj sa ≤.",
    "extraFormulas": [
      "a<b+c",
      "|a−b|<x<a+b"
    ],
    "sourcePages": "Udžbenik 6, str. 58–60 i 61; operativni plan za oktobar, časovi 30–31.",
    "visuals": [
      "Tri precizne skice povezivanja dve kraće duži: zbir veći, jednak i manji od najduže.",
      "Brojevna prava dozvoljenih dužina sa otvorenim krajevima i posebno označenim celim vrednostima."
    ]
  },
  "konstrukcije-uglova": {
    "aim": "Objasni kako šestar i lenjir daju poznate uglove, njihove polovine, zbirove i suplemente.",
    "idea": [
      "Konstrukcija određuje ugao postupkom koji se zasniva na geometrijskim svojstvima. Koristimo šestar i lenjir bez podeoka; uglomer može poslužiti za naknadnu proveru. Ugao od 60° dobijamo iz jednakostraničnog trougla, a ugao od 90° konstrukcijom normale.",
      "Simetrala deli ugao na dva jednaka dela. Poznate uglove možemo prepolovljavati, prenositi uz zajednički krak, sabirati, oduzimati i dopunjavati do 180°. Posle prepolovljavanja početni ugao vraćamo udvostručavanjem dobijenog ugla."
    ],
    "steps": [
      "Za 60° nacrtaj polupravu iz A, obeleži B i opiši lukove istog poluprečnika AB iz A i B; njihov presek C određuje polupravu AC.",
      "Za normalu u tački O na pravoj obeleži dve jednako udaljene tačke sa obe strane O. Iz njih opiši lukove jednakog poluprečnika, većeg od polovine njihovog rastojanja; spoji O sa presekom lukova.",
      "Za simetralu ugla lukom iz temena označi po jednu tačku na oba kraka. Iz tih tačaka lukovima istog poluprečnika odredi presek unutar ugla; spoji ga sa temenom.",
      "Razloži traženi ugao na poznate uglove i njihove polovine. Za zbir prenesi uglove jedan uz drugi sa zajedničkim temenom i krakom; za suplement produži krak u suprotnom smeru.",
      "Kod više prepolovljavanja prati svaku polovinu redom. Za obrnuto pitanje udvostruči završni ugao onoliko puta koliko je bilo prepolovljavanja."
    ],
    "why": "Jednaki poluprečnici daju jednake dužine, a simetrala jednake uglove. Time veličina konstruisanog ugla sledi iz svojstava figure, bez očitavanja podeoka.",
    "caution": "Samo nacrtati ugao uglomerom nije isti postupak kao konstrukcija. Pri sabiranju uglovi moraju biti pravilno nadovezani; suplement i polovina ugla nisu ista operacija.",
    "extraFormulas": [
      "Ugao posle dva prepolovljavanja = početni ugao:4",
      "Početni ugao = 2·njegova polovina",
      "Suplement ugla α = 180°−α"
    ],
    "sourcePages": "Udžbenik 6, str. 129–132; konstrukcije su u drugom delu oblasti Trougao i nisu navedene u oktobarskom planu. Postojeća lekcija i mesec sačuvani.",
    "visuals": [
      "Tri uzastopne faze konstrukcije 60° sa jednakim poluprečnicima, vidljivim lukovima i završnim krakom.",
      "Koraci simetrale sa originalnim i pomoćnim lukovima, pa niz 60° → 30° → 15°."
    ]
  },
  "kratko-obnavljanje-6": {
    "aim": "Obnovi poređenje racionalnih brojeva, računanje sa znacima i razlomcima, apsolutnu vrednost i jednostavne jednačine.",
    "idea": [
      "Na brojnoj pravoj veći broj leži desno, a apsolutna vrednost meri rastojanje od nule. Kod sabiranja istih predznaka saberi apsolutne vrednosti i zadrži znak; kod različitih oduzmi manju od veće i uzmi znak broja veće apsolutne vrednosti.",
      "Oduzimanje zameni sabiranjem suprotnog broja. Pri množenju dva nenulta broja isti znaci daju plus, a različiti minus. Kvadrat je proizvod broja sa samim sobom."
    ],
    "steps": [
      "Prvo računaj zagrade i apsolutne vrednosti, zatim kvadrate, množenje i deljenje, pa sabiranje i oduzimanje.",
      "Razlomke svedi na zajednički imenilac, računaj sa brojiocima i skrati. Nepoznati broj proveri u početnoj jednakosti."
    ],
    "why": "Zajednički imenilac omogućava računanje sa jednakim delovima iste celine.",
    "caution": "Ne sabiraj imenioce i ne mešaj znak oduzimanja sa predznakom broja.",
    "extraFormulas": [
      "a−b=a+(−b)",
      "|−a|=|a|",
      "[[frac:a|b]]+[[frac:c|d]]=[[frac:ad+bc|bd]], b≠0,d≠0"
    ],
    "sourcePages": "Udžbenik 7, str. 8–11 i 28; septembarski plan, čas 2.",
    "visuals": [
      "Brojna prava sa nulom, suprotnim tačkama i jednakim rastojanjima do nule.",
      "Dve jednake trake podeljene na zajedničke delove za poređenje razlomaka."
    ]
  },
  "decimalni-zapis": {
    "aim": "Prepoznaj konačan i periodičan zapis, prevodi razlomak u decimalni broj i odredi cifru perioda na zadatom mestu.",
    "idea": [
      "Decimalni zapis razlomka dobijaš deljenjem brojioca imeniocem. Ako ostatak postane 0, zapis je konačan; ako se nenulti ostatak ponovi, ponavlja se ista grupa cifara — period.",
      "U zapisu 0,4(26), cifra 4 je neperiodični početak, a 26 se ponavlja bez kraja. Dopisivanje nula na kraj konačnog zapisa ne menja vrednost. Pri poređenju gledaj cele delove, pa decimale redom."
    ],
    "steps": [
      "Proširi na imenilac 10, 100… kada je moguće; inače deli i prati ostatke.",
      "Za udaljeno decimalno mesto odvoji neperiodični početak, pa preostali redni broj podeli dužinom perioda; ostatak 0 znači poslednju cifru perioda."
    ],
    "why": "Isti ostatak pri deljenju pokreće iste naredne korake i iste cifre.",
    "caution": "Zagrade obuhvataju ceo period; beskonačan zapis ne skraćuj na cifre kalkulatora.",
    "extraFormulas": [
      "[[frac:a|b]]=a:b, b≠0",
      "0,5=0,50"
    ],
    "sourcePages": "Udžbenik 7, str. 21–22; septembarski plan, časovi 6–7.",
    "visuals": [
      "Traka decimalnih mesta sa drugačijom bojom za neperiodični početak i ponavljajući period."
    ]
  },
  "decimalni-u-razlomak": {
    "aim": "Prevedi konačan ili jednostavan periodičan zapis u razlomak, sačuvaj znak i uporedi različite zapise.",
    "idea": [
      "Konačan decimalni broj zapiši kao razlomak: brojilac je zapis bez zareza, a imenilac 1 sa onoliko nula koliko ima decimalnih mesta. Potom skrati razlomak; negativan znak pripada celom broju.",
      "U periodičnom zapisu ista grupa decimala ponavlja se bez kraja. Označi broj sa x i pomnoži ga brojem 10, 100… tako da se ponavljajući delovi poravnaju, pa oduzmi dve jednakosti. Beskonačni deo se poništava i ostaje jednačina za x."
    ],
    "steps": [
      "Prebroj sva decimalna mesta, uključujući početne nule.",
      "Za poređenje prevedi brojeve u isti oblik. Za obrnut prelaz podeli brojilac imeniocem; nepoznati sabirak prvo izdvoji iz jednakosti."
    ],
    "why": "Decimalna mesta predstavljaju desetinke, stotinke ili hiljadite: njihov broj određuje imenilac.",
    "caution": "Konačan i periodičan zapis ne pretvaraju se istim postupkom.",
    "extraFormulas": [
      "0,24=[[frac:24|100]]=[[frac:6|25]]"
    ],
    "sourcePages": "Udžbenik 7, str. 11 i 21–22; septembarski plan, časovi 6–7.",
    "visuals": [
      "Tabela: decimalno mesto → decimalni imenilac → skraćen razlomak.",
      "Dva poravnata periodična zapisa koja se oduzimaju."
    ],
    "example": "x=0,(3); 10x−x=3; x=[[frac:1|3]]"
  },
  "kvadrat-racionalnog": {
    "aim": "Izračunaj kvadrat celog, decimalnog i razlomljenog broja i objasni ulogu znaka i zagrada.",
    "idea": [
      "Kvadrat broja je proizvod tog broja sa samim sobom. Kvadrat nenultog broja je pozitivan, a kvadrat nule je 0; suprotni brojevi imaju isti kvadrat.",
      "Kod razlomka kvadriraj brojilac i imenilac. Decimalni broj pomnoži samim sobom ili ga pretvori u razlomak. Veća apsolutna vrednost osnove daje veći kvadrat. U geometriji kvadrat stranice predstavlja površinu kvadrata."
    ],
    "steps": [
      "Najpre prepoznaj osnovu: ono što je u zagradi kvadrira se kao celina.",
      "Računaj kao proizvod dva jednaka činioca; uz površinu napiši kvadratnu jedinicu."
    ],
    "why": "Dva jednaka negativna činioca daju pozitivan proizvod, zato je i njihov kvadrat pozitivan.",
    "caution": "−a² znači −(a²), dok (−a)² kvadrira negativnu osnovu.",
    "extraFormulas": [
      "a²=a·a",
      "(−a)²=a²",
      "([[frac:a|b]])²=[[frac:a²|b²]], b≠0",
      "P=a²"
    ],
    "sourcePages": "Udžbenik 7, str. 9–11; septembarski plan, čas 8.",
    "visuals": [
      "Kvadrat sa označenom stranicom a i površinom a².",
      "Par zapisa sa i bez zagrada, sa označenom osnovom stepena."
    ]
  },
  "kvadrati-brojeva": {
    "aim": "Prepoznaj potpune kvadrate i pronađi sve brojeve sa zadatim kvadratom, uz uslove iz zadatka.",
    "idea": [
      "Potpun kvadrat prirodnog broja dobijaš množenjem nekog prirodnog broja samim sobom. Tabela kvadrata pomaže da izračunaš kvadrat ili prepoznaš broj čiji je kvadrat poznat.",
      "Suprotni brojevi imaju jednak kvadrat. Ako pozitivan broj prepoznaješ kao b², mogući brojevi su b i −b. Kvadrat 0 daje samo 0, a negativan kvadrat nije moguć."
    ],
    "steps": [
      "Proveri znak zadatog kvadrata, pa kandidata potvrdi množenjem.",
      "Dodatni uslov o znaku ili rasponu bira dozvoljene brojeve; ako je kvadrat celog izraza 0, taj izraz mora biti 0."
    ],
    "why": "Kvadriranjem se znak nenultog broja gubi, pa isti rezultat može poticati od dva suprotna broja.",
    "caution": "Ne navodi samo pozitivan broj ako zadatak traži sve mogućnosti.",
    "extraFormulas": [
      "a²=(−a)²",
      "x²=b² ⇒ x=b ili x=−b",
      "x²=0 ⇔ x=0"
    ],
    "sourcePages": "Udžbenik 7, str. 12–14; septembarski plan, časovi 9–10.",
    "visuals": [
      "Tabela: negativna vrednost kvadrata → nema rešenja; nula → jedno; pozitivan poznat kvadrat → dva.",
      "Brojna prava sa dva suprotna kandidata i označenim dodatnim uslovom."
    ]
  },
  "realni-brojevi": {
    "aim": "Razlikuj racionalne i iracionalne brojeve pomoću zapisa i razumi uključenost skupova brojeva.",
    "idea": [
      "Racionalan broj može se zapisati kao razlomak dva cela broja sa nenultim imeniocem. Njegov decimalni zapis je konačan ili beskonačan periodičan. Iracionalan broj nema takav razlomački zapis: decimale su beskonačne i neperiodične.",
      "Racionalni i iracionalni brojevi zajedno čine realne brojeve; nijedan broj ne pripada obema grupama. Broj π je iracionalan, a konačni zapisi poput 3,14 njegove su približne vrednosti."
    ],
    "steps": [
      "Za beskonačan zapis proveri da li se ista konačna grupa cifara stalno ponavlja.",
      "Pripadnost skupovima prati prema uključenosti; nekoliko napisanih decimala nije dokaz iracionalnosti bez pravila nastavka."
    ],
    "why": "Beskonačan zapis može biti racionalan: odlučuje periodičnost, a ne broj decimala.",
    "caution": "π nije tačno 3,14 niti 22/7; za približnu vrednost piši ≈.",
    "extraFormulas": [
      "N⊂Z⊂Q⊂R",
      "π≈3,14"
    ],
    "sourcePages": "Udžbenik 7, str. 8 i 18–22; septembarski plan, čas 11. Sadržaj prilagođen redosledu sajta, pre uvođenja korena.",
    "visuals": [
      "Ugnježdeni skupovi N, Z, Q unutar R, sa posebnim delom za I.",
      "Uporedni decimalni nizovi: konačan, periodičan i neperiodičan prema pravilu."
    ]
  },
  "brojna-prava": {
    "aim": "Prikaži i uporedi realne brojeve na brojnoj pravoj, odredi suprotan broj i rastojanje od nule.",
    "idea": [
      "Brojna prava ima nulu, jediničnu duž i pozitivan smer. Svakom realnom broju odgovara tačka: koordinata određuje njenu stranu nule i rastojanje od nje.",
      "Veći broj je desnije, a među negativnim brojevima veći je onaj bliži nuli. Suprotni brojevi leže sa različitih strana nule na jednakom rastojanju. Za π koristimo poznate granice i približan zapis."
    ],
    "steps": [
      "Proveri vrednost podeljka pre očitavanja koordinate ili crtanja tačke.",
      "Za poredak poredi decimalne zapise; za blizinu nuli poredi apsolutne vrednosti. Sve dodatne uslove proveri na dobijenoj koordinati."
    ],
    "why": "Podeljci predstavljaju jednake dužine, ali jedan podeljak ne mora vredeti 1.",
    "caution": "Za približan položaj π piši ≈, a ne znak jednakosti.",
    "extraFormulas": [
      "3<π<4",
      "−4<−π<−3",
      "d(A,O)=|x_A|"
    ],
    "sourcePages": "Udžbenik 7, str. 8, 18–20 i 23; septembarski plan, čas 11. Bez uvođenja korena ili zaokruživanja.",
    "visuals": [
      "Brojna prava sa jednakim podeljcima, tačkama π i −π i označenim rastojanjima do nule.",
      "Uvećan interval između dva decimalna broja za čitanje položaja tačke."
    ]
  },
  "intervali": {
    "aim": "Prevedi nejednakost u interval, proveri pripadnost i poveži apsolutnu vrednost sa rastojanjem.",
    "idea": [
      "Interval predstavlja realne brojeve između dve granice. Uglasta zagrada uključuje granicu, a obla je isključuje; na pravoj ih prikazujemo punom odnosno praznom tačkom.",
      "Apsolutna vrednost |x−c| meri rastojanje od c. Uslov da je ono manje od r daje brojeve između c−r i c+r; znak ≤ uključuje krajeve. Za dva istovremena intervalna uslova uzimamo zajednički deo."
    ],
    "steps": [
      "Proveri znak nejednakosti kod svake granice zasebno.",
      "Pripadnost ili cele brojeve proveri prema obe granice; zajednička granica je uključena samo ako je oba uslova dopuštaju."
    ],
    "why": "Uslov rastojanja bira sve tačke najviše r jedinica levo i desno od centra.",
    "caution": "Centar u |x−c| je c; interval ne mora biti oko nule.",
    "extraFormulas": [
      "x∈[a,b] ⇔ a≤x≤b",
      "x∈[a,b) ⇔ a≤x<b",
      "|x−c|<r ⇔ c−r<x<c+r, r>0"
    ],
    "sourcePages": "Udžbenik 7, str. 8 (rastojanje i apsolutna vrednost); originalna dopuna prema septembarskom planu, čas 12. U udžbeniku nema zasebne lekcije o intervalima.",
    "visuals": [
      "Četiri brojne prave za otvoren, zatvoren i dva poluotvorena intervala.",
      "Brojna prava sa centrom c i jednakim rastojanjima r do obe granice.",
      "Dva intervala jedan ispod drugog i izdvojen zajednički deo."
    ]
  },
  "kvadratni-koren": {
    "aim": "Razlikuj kvadratni koren od svih rešenja jednačine i odredi koren proverom kvadrata.",
    "idea": [
      "Kvadratni koren nenegativnog broja a jeste jedini nenegativan broj čiji je kvadrat a. Koren 0 je 0; negativan broj nema kvadratni koren u skupu realnih brojeva.",
      "Znak korena označava jednu vrednost. Jednačina x²=a za a>0 ima dva suprotna rešenja. Koren kvadrata broja jednak je njegovoj apsolutnoj vrednosti; dužinu stranice iz površine kvadrata nalazimo pozitivnim korenom."
    ],
    "steps": [
      "Proveri broj pod korenom, zatim nenegativan kandidat potvrdi kvadriranjem.",
      "U obrnutom zadatku √a=b proveri b≥0, pa izračunaj a=b²."
    ],
    "why": "Kvadrat ne razlikuje suprotne brojeve, pa definicija korena posebno bira nenegativni.",
    "caution": "√25 ima vrednost 5; znak ± pripada dvama rešenjima jednačine.",
    "extraFormulas": [
      "√a=b ⇔ b²=a, b≥0",
      "[[sqrt:a²]]=|a|",
      "([[sqrt:a]])²=a, a≥0"
    ],
    "sourcePages": "Udžbenik 7, str. 15–17; septembarski plan, čas 13.",
    "visuals": [
      "Kvadrat površine P sa nepoznatom pozitivnom stranicom.",
      "Tabela sa odvojenim kolonama za vrednost korena i skup rešenja jednačine."
    ]
  },
  "odredjivanje-korena": {
    "aim": "Odredi tačan koren poznatog kvadrata, ograniči ostale korene i napiši traženu približnu vrednost.",
    "idea": [
      "Tačan koren pronađi prepoznavanjem nenegativnog broja čiji kvadrat daje zadatu vrednost. Kod razlomka ili decimalnog broja kandidata proveri kvadriranjem.",
      "Ako broj nije potpun kvadrat, pronađi susedne kvadrate između kojih leži. Koren se nalazi između odgovarajućih nenegativnih brojeva. Za poređenje √a sa b≥0 dovoljno je uporediti a sa b²."
    ],
    "steps": [
      "Za tačan rezultat koristi proveru kvadriranjem; za procenu prvo odredi granice.",
      "Zaokruži tek na kraju: sledeća cifra manja od 5 zadržava poslednju, veća od 5 je povećava. I 5 uz dalje nenulte cifre povećava je."
    ],
    "why": "Kvadriranje nenegativnih brojeva čuva poredak, pa susedni kvadrati daju granice korena.",
    "caution": "Tačan zapis i približan rezultat razlikuj znakom ≈; tačna sredina zaokružuje se po dogovorenom pravilu.",
    "extraFormulas": [
      "[[sqrt:b²]]=b, b≥0",
      "n²<a<(n+1)² ⇒ n<[[sqrt:a]]<n+1"
    ],
    "sourcePages": "Udžbenik 7, str. 16–17 i 23–27; septembarski plan, čas 14.",
    "visuals": [
      "Brojna prava sa dva susedna cela broja i korenom između njih, uz povezane kvadrate.",
      "Tabela mesnih vrednosti za traženu decimalnu tačnost."
    ]
  },
  "svojstva-korena": {
    "aim": "Primeni pravila za koren proizvoda i količnika, izdvoji kvadratni činilac i prepoznaj nedozvoljena rastavljanja.",
    "idea": [
      "Koren proizvoda nenegativnih brojeva jednak je proizvodu njihovih korena. Koren količnika može se rastaviti kada je brojilac nenegativan, a imenilac pozitivan; uslovi su navedeni u tabeli.",
      "Ove veze omogućavaju spajanje korena ili izdvajanje potpuno kvadratnog činioca. Koren kvadrata realnog broja ostaje njegova apsolutna vrednost. Pravilo za proizvod ne važi za zbir ili razliku."
    ],
    "steps": [
      "Proveri uslove i odaberi spajanje ili rastavljanje koje olakšava račun.",
      "Za izdvajanje prepoznaj kvadratni činilac; kod obrnutog zadatka prvo izdvoji nepoznati koren, pa kvadriraj jednakost."
    ],
    "why": "Izdvojeni činilac predstavlja koren jednog potpuno kvadratnog dela proizvoda.",
    "caution": "√(a+b) uglavnom nije √a+√b.",
    "extraFormulas": [
      "[[sqrt:k²·m]]=|k|·[[sqrt:m]], m≥0"
    ],
    "sourcePages": "Udžbenik 7, str. 28–31; septembarski plan, časovi 15–17.",
    "visuals": [
      "Stablo rastavljanja broja na kvadratni činilac i preostali činilac.",
      "Uporedne kartice: dozvoljeno rastavljanje proizvoda i nedozvoljeno rastavljanje zbira."
    ]
  },
  "pitagorina-teorema": {
    "aim": "Prepoznaj katete i hipotenuzu i primeni Pitagorinu teoremu pri računanju dužine, površine i prečice.",
    "idea": [
      "Pitagorina teorema važi za pravougli trougao. Katete a i b grade pravi ugao, a hipotenuza c leži naspram njega i najduža je stranica.",
      "Zbir kvadrata kateta jednak je kvadratu hipotenuze. Geometrijski, zbir površina kvadrata nad katetama jednak je površini kvadrata nad hipotenuzom; zato sabiramo kvadrate dužina, a ne same dužine."
    ],
    "steps": [
      "Prepoznaj pravi ugao i hipotenuzu; sve dužine izrazi istom jedinicom.",
      "Za c² saberi kvadrate, a za c potom uzmi pozitivan koren. Za površinu koristi polovinu proizvoda kateta; prečicu uporedi sa prvobitnim putem."
    ],
    "why": "Katete ujedno predstavljaju osnovicu i odgovarajuću visinu pravouglog trougla.",
    "caution": "Ne primenjuj teoremu bez pravog ugla i ne zameni c² sa c.",
    "extraFormulas": [
      "a²+b²=c²",
      "c=[[sqrt:a²+b²]]",
      "P=[[frac:a·b|2]]"
    ],
    "sourcePages": "Udžbenik 7, str. 48–51; oktobarski plan, čas 25.",
    "visuals": [
      "Pravougli trougao sa pravim uglom, obojenim katetama i hipotenuzom.",
      "Tri kvadrata nad stranicama, sa oznakom a²+b²=c².",
      "Dva normalna dela puta i dijagonalna prečica."
    ]
  },
  "nepoznata-stranica-pravougli": {
    "aim": "Odredi nepoznatu katetu ili hipotenuzu, proveri podatke i izračunaj obim ili površinu u više koraka.",
    "idea": [
      "Za hipotenuzu sabiramo kvadrate kateta; za nepoznatu katetu oduzimamo kvadrat poznate katete od kvadrata hipotenuze. Dužinu dobijamo tek uzimanjem pozitivnog korena.",
      "Podaci moraju opisivati mogući pravougli trougao: sve dužine su pozitivne, a hipotenuza duža od svake katete. U modelu merdevina njihova dužina predstavlja hipotenuzu, a visina zida i udaljenost podnožja katete."
    ],
    "steps": [
      "Označi pravi ugao i izdvoji hipotenuzu, pa napiši jednakost za traženu stranicu.",
      "Nakon nalaženja stranice proveri Pitagorinu jednakost; tek potom računaj obim ili površinu."
    ],
    "why": "Izdvajanje jednog kvadrata iz zbira daje razliku; pozitivan koren vraća traženu dužinu.",
    "caution": "Rezultat razlike kvadrata još nije dužina stranice.",
    "extraFormulas": [
      "a=[[sqrt:c²−b²]]",
      "b=[[sqrt:c²−a²]]",
      "O=a+b+c; P=[[frac:a·b|2]]"
    ],
    "sourcePages": "Udžbenik 7, str. 50–51; oktobarski plan, čas 26.",
    "visuals": [
      "Isti pravougli trougao u tri prikaza, sa različitom nepoznatom stranicom.",
      "Merdevine uz zid, pravi ugao zid–tlo i označeno traženo horizontalno rastojanje."
    ]
  },
  "pitagora-pravougaonik-kvadrat": {
    "aim": "Izračunaj dijagonalu ili nepoznatu stranicu pravougaonika i kvadrata i poveži rezultat sa obimom i površinom.",
    "idea": [
      "Dijagonala pravougaonika i dve susedne stranice grade pravougli trougao. Stranice a i b su katete, a dijagonala d hipotenuza.",
      "U kvadratu su katete jednake, pa je d²=2a². Iz dijagonale možeš pronaći stranicu, a zatim obim ili površinu. Za poređenje dijagonala najpre svedi zadate obime ili površine na stranice."
    ],
    "steps": [
      "Za dijagonalu saberi kvadrate stranica; za nepoznatu stranicu oduzmi kvadrat poznate od d².",
      "Uzmi pozitivan koren, pa primeni formulu za traženi obim ili površinu; raspoloživu ogradu poredi sa obimom."
    ],
    "why": "Dijagonala deli pravougaonik na dva pravougla trougla sa istim dužinama stranica.",
    "caution": "Dijagonala je hipotenuza, a ne stranica pravougaonika.",
    "extraFormulas": [
      "d²=a²+b²",
      "Kvadrat: d=a[[sqrt:2]], P=[[frac:d²|2]]",
      "Pravougaonik: O=2(a+b), P=ab; kvadrat: O=4a"
    ],
    "sourcePages": "Udžbenik 7, str. 56–57; oktobarski plan, časovi 27–28.",
    "visuals": [
      "Pravougaonik sa dijagonalom i obojenim pomoćnim pravouglim trouglom.",
      "Kvadrat sa jednakim katetama a i dijagonalom d.",
      "Par kvadrata nacrtanih u istoj razmeri za poređenje dijagonala."
    ]
  },
  "pitagora-jednakokraki": {
    "aim": "Odredi visinu, osnovicu ili krak jednakokrakog trougla i primeni posebne odnose jednakostraničnog trougla.",
    "idea": [
      "Visina na osnovicu jednakokrakog trougla deli je na dva jednaka dela. U pomoćnom pravouglom trouglu katete su h i a/2, a hipotenuza krak s.",
      "U jednakostraničnom trouglu krak i osnovica imaju istu dužinu a. Iz te veze dobijaš visinu, a zatim površinu ili obim; poznata visina omogućava i obrnut postupak do stranice."
    ],
    "steps": [
      "Nacrtaj visinu i označi polovinu osnovice pre primene Pitagorine teoreme.",
      "Ako tražiš osnovicu, najpre pronađi jednu polovinu pa je udvostruči; za krak saberi kvadrate kateta."
    ],
    "why": "Visina pravi dva podudarna pravougla trougla, zato se uz nju koristi polovina osnovice.",
    "caution": "Cela osnovica ne ulazi kao kateta u pomoćni trougao.",
    "extraFormulas": [
      "h²+([[frac:a|2]])²=s²",
      "Jednakostranični: h=[[frac:a[[sqrt:3]]|2]], O=3a",
      "P=[[frac:ah|2]]; O_jednakokrakog=a+2s"
    ],
    "sourcePages": "Udžbenik 7, str. 59–61; oktobarski plan, časovi 29–30.",
    "visuals": [
      "Jednakokraki trougao sa visinom, jednakim kracima i osnovicom podeljenom na a/2+a/2.",
      "Jednakostranični trougao sa jednim istaknutim pravouglim pomoćnim trouglom."
    ]
  },
  "pitagora-cetvorougao": {
    "aim": "Izaberi pravougle pomoćne trouglove u četvorouglu i poveži dva postupka za stranicu, obim ili površinu.",
    "idea": [
      "Pitagorina teorema u četvorouglu primenjuje se na njegove pravougle delove. Dijagonala može biti zajednička stranica dvaju trouglova, ali oba nisu automatski pravougla. Najpre proveri gde je pravi ugao i koja je strana svakog trougla hipotenuza.",
      "U ovoj lekciji, kada je ∠ABC=90°, u trouglu ABC hipotenuza je AC. Kada je i ∠ACD=90°, u trouglu ACD hipotenuza je AD. Duž AC tada je rezultat prvog postupka i poznata kateta u drugom. Obim obuhvata samo spoljašnje stranice, a površina se dobija sabiranjem površina unutrašnjih trouglova."
    ],
    "steps": [
      "Nacrtaj dijagonalu AC i proveri podatke o pravim uglovima u oba pomoćna trougla.",
      "Ako je ∠ABC=90°, napiši AC^2=AB^2+BC^2 i odredi AC kada je potreban.",
      "Ako je ∠ACD=90°, napiši AD^2=AC^2+CD^2; za nepoznatu katetu CD izvedi CD^2=AD^2−AC^2.",
      "Prvi rezultat prenesi u drugi trougao, uz istu oznaku i jedinicu.",
      "Za obim saberi AB, BC, CD i DA; za površinu saberi polovine proizvoda kateta oba trougla."
    ],
    "why": "Zajednička dijagonala povezuje dva pravougla trougla, pa se složeniji zadatak svodi na dva poznata postupka.",
    "caution": "Sama dijagonala ne garantuje pravi ugao. Nemoj je sabirati u obim, niti u drugom trouglu pretpostaviti da je i dalje hipotenuza.",
    "extraFormulas": [
      "CD=[[sqrt:AD^2−AC^2]], pri ∠ACD=90°",
      "O=AB+BC+CD+DA",
      "P=[[frac:AB·BC|2]]+[[frac:AC·CD|2]], pri ∠ABC=∠ACD=90°"
    ],
    "sourcePages": "Udžbenik 7, str. 51, zadatak 4 (dva pomoćna pravougla trougla), i 65. Originalna povezana primena; u oktobarskom planu nema zasebne jedinice sa ovim naslovom.",
    "visuals": [
      "Četvorougao ABCD sa dijagonalom AC, uglovima ABC i ACD označenim kao pravi, i različitim bojama oba trougla.",
      "Dva izdvojena pomoćna trougla sa istom oznakom AC."
    ]
  },
  "pitagora-romb": {
    "aim": "Odredi stranicu, dijagonalu, obim, površinu ili visinu romba koristeći polovine dijagonala.",
    "idea": [
      "Dijagonale romba su normalne i polove jedna drugu. U svakom od četiri pomoćna pravougla trougla katete su d₁/2 i d₂/2, a hipotenuza stranica romba a.",
      "Pitagorina teorema daje stranicu ili nepoznatu polovinu dijagonale. Površina romba je polovina proizvoda celih dijagonala; jednaka je i proizvodu stranice sa odgovarajućom visinom."
    ],
    "steps": [
      "Označi polovine dijagonala i pravi ugao, pa primeni Pitagorinu jednakost.",
      "Za nepoznatu celu dijagonalu udvostruči rezultat; iz površine i stranice dobijaš h=P/a, a obim je 4a."
    ],
    "why": "Presek dijagonala deli romb na četiri jednaka pravougla trougla.",
    "caution": "U Pitagorinu jednakost unosiš polovine, a u površinu cele dijagonale.",
    "extraFormulas": [
      "a²=([[frac:d_1|2]])²+([[frac:d_2|2]])²",
      "P=[[frac:d_1d_2|2]]=ah",
      "O=4a"
    ],
    "sourcePages": "Udžbenik 7, str. 64–65; oktobarski plan, časovi 31–32.",
    "visuals": [
      "Romb sa obema dijagonalama, pravim uglom u preseku i istaknutim četvrtinskim trouglom.",
      "Isti romb sa visinom na jednu stranicu za povezivanje dve formule površine."
    ]
  },
  "pitagora-trapez": {
    "aim": "Razlikuj pomoćne trouglove pravouglog i jednakokrakog trapeza i odredi krak, visinu, osnovicu, obim ili površinu.",
    "idea": [
      "Spuštanjem visine trapeza uz kosi krak c dobijaš pravougli trougao. Njegova uspravna kateta je visina h; vodoravna je a−b kod pravouglog, a (a−b)/2 kod jednakokrakog trapeza, gde je a duža osnovica.",
      "Vrsta trapeza zato određuje pomoćnu katetu. Kod jednakokrakog dve visine ostavljaju jednake delove duže osnovice; kod pravouglog normalan krak jednak je visini."
    ],
    "steps": [
      "Označi osnovice i spusti visinu. Za krak saberi kvadrate kateta; za visinu oduzmi kvadrat vodoravne katete od c².",
      "Ako tražiš osnovicu, vrati odgovarajući vodoravni deo kraćoj osnovici; tek potom računaj obim ili površinu."
    ],
    "why": "Dve vrste trapeza različito raspoređuju razliku osnovica uz kose krake.",
    "caution": "Visina uglavnom nije kosi krak; proveri da li razliku osnovica treba prepoloviti.",
    "extraFormulas": [
      "Pravougli: c²=h²+(a−b)²",
      "Jednakokraki: c²=h²+([[frac:a−b|2]])²",
      "P=[[frac:(a+b)h|2]]"
    ],
    "sourcePages": "Udžbenik 7, str. 66–68; oktobarski plan, čas 36.",
    "visuals": [
      "Uporedni pravougli i jednakokraki trapez sa spuštenim visinama i horizontalnim delovima.",
      "Jednakokraki trapez u obrnutom zadatku: b u sredini i dva jednaka dela x uz osnovicu."
    ]
  },
  "specijalni-pravougli-trouglovi": {
    "aim": "Prepoznaj odnose stranica trouglova 45°–45°–90° i 30°–60°–90° i primeni ih u direktnim i obrnutim zadacima.",
    "idea": [
      "Trougao 45°–45°–90° ima jednake katete. Ako je svaka a, hipotenuza je a·[[sqrt:2]], a površina a^2/2. Ovaj trougao dobijaš dijagonalom kvadrata.",
      "Trougao 30°–60°–90° predstavlja polovinu jednakostraničnog trougla. Ako je kraća kateta a, duža je a·[[sqrt:3]], a hipotenuza 2a. Kraća kateta leži naspram ugla 30°, a duža naspram 60°. Odnosi važe bez obzira na položaj crteža."
    ],
    "steps": [
      "Proveri uglove i označi strane prema uglovima naspram kojih leže.",
      "U modelu 45° zapiši dve jednake katete i c=a·[[sqrt:2]]; iz hipotenuze izdvoji a=c/[[sqrt:2]].",
      "U modelu 30° zapiši kraću katetu a, dužu b=a·[[sqrt:3]] i c=2a.",
      "Iz poznate duže katete prvo odredi a=b/[[sqrt:3]], pa traženu hipotenuzu ili drugu veličinu; kateta c/2 odgovara uglu 30°.",
      "Za obim saberi sve strane, za površinu uzmi polovinu proizvoda kateta; za poređenje hipotenuza poredi nenegativne vrednosti ili njihove kvadrate."
    ],
    "why": "Oba modela izvode se iz kvadrata i jednakostraničnog trougla, pa odnose možeš objasniti pomoću Pitagorine teoreme.",
    "caution": "Pravilo c=2a odnosi se na kraću katetu trougla 30°–60°–90°. Ne određuj kraću katetu samo po njenom položaju na crtežu.",
    "extraFormulas": [
      "45°: a=[[frac:c|√2]], P=[[frac:a^2|2]], O=2a+c",
      "30°: a=[[frac:c|2]], b=a[[sqrt:3]], a=[[frac:b|√3]]",
      "P=[[frac:a·b|2]]; O=a+b+c"
    ],
    "sourcePages": "Udžbenik 7, str. 60–61; povezana primena postojeće oktobarske lekcije, bez zasebne jedinice u dostavljenom planu.",
    "visuals": [
      "Dva označena modela sa uglovima i odnosima 1:1:√2 i 1:√3:2.",
      "Model 30°–60°–90° prikazan i u rotiranom položaju, sa istim oznakama naspram uglova."
    ]
  },
  "konstrukcija-iracionalnih-brojeva": {
    "aim": "Izaberi katete za željenu dužinu, konstruiši pravougli trougao i prenesi hipotenuzu na brojnu pravu.",
    "idea": [
      "Pitagorina teorema omogućava konstrukciju duži čija je dužina zapisana korenom. Ako je broj pod korenom zbir dva kvadrata, izaberi odgovarajuće katete i njihovim spajanjem dobijaš traženu hipotenuzu. Duž može biti tačna i kada njen decimalni zapis nije konačan.",
      "Dobijenu duž prenosiš šestarom iz nule na brojnu pravu; lenjir određuje pravac, a normalna kroz kraj prve katete obezbeđuje pravi ugao. U nizu konstrukcija prethodna hipotenuza može postati kateta novog pravouglog trougla, uz dodatnu katetu dužine 1."
    ],
    "steps": [
      "Izaberi jediničnu duž i rastavi ciljni broj na zbir kvadrata odgovarajućih dužina.",
      "Nacrtaj prvu katetu, u njenom kraju konstruiši normalu i na njoj drugu katetu.",
      "Spoji slobodne krajeve i proveri Pitagorinom teoremom koji broj predstavlja hipotenuza.",
      "Otvorom šestara jednakim hipotenuzi prenesi duž iz nule na pozitivan smer brojne prave; za negativnu koordinatu prenesi je ulevo.",
      "Položaj proveri između susednih celih brojeva. Kod kateta 1 i n dobijaš [[sqrt:1+n^2]], a u nastavku sa katetama [[sqrt:m]] i 1 dobijaš [[sqrt:m+1]]."
    ],
    "why": "Pitagorina teorema potvrđuje tačnu dužinu, dok šestar prenosi istu duž bez zamene približnim decimalnim merenjem.",
    "caution": "Pod korenom je zbir kvadrata kateta. Ugao mora biti pravi, a prilikom prenošenja duži otvor šestara ostaje isti.",
    "extraFormulas": [
      "c=[[sqrt:a^2+b^2]]",
      "a^2+b^2=m ⇒ c=[[sqrt:m]]",
      "([[sqrt:m]])^2+1^2=m+1"
    ],
    "sourcePages": "Udžbenik 7, str. 69–71; postojeća oktobarska lekcija, nema zasebne jedinice u dostavljenom oktobarskom planu.",
    "visuals": [
      "Konstrukcija pravouglog trougla sa katetama i lukom prenosa hipotenuze iz nule.",
      "Dva uzastopna pravougla trougla u kojima stara hipotenuza postaje nova kateta."
    ]
  },
  "pojam-stepena": {
    "aim": "Razlikuj osnovu i izložilac, piši ponovljen proizvod kao stepen i odredi vrednost ili znak stepena.",
    "idea": [
      "Stepen a^n sa prirodnim izložiocem n predstavlja proizvod n jednakih činilaca a. Broj a je osnova, a n govori koliko puta se ona pojavljuje kao činilac. Kvadrat i kub posebni su slučajevi ovog zapisa.",
      "Za negativnu osnovu paran broj negativnih činilaca daje pozitivan rezultat, a neparan negativan. Zagrade pokazuju da i minus pripada osnovi. Stepen sa osnovom koja je sama izraz možeš izračunati najpre u zagradi, bez novih pravila za operacije sa stepenima."
    ],
    "steps": [
      "Pronađi celu osnovu stepena i izložilac; kod negativne osnove čitaj zagrade.",
      "Pretvori proizvod jednakih činilaca u stepen ili stepen u proizvod sa tačno n činilaca.",
      "Pre računanja odredi znak pomoću parnosti izložioca, zatim množi redom.",
      "Za poređenje složenog zapisa prvo izračunaj unutrašnju zagradu i razvij spoljašnji stepen prema definiciji.",
      "U jednostavnom obrnutom zadatku sa kubom pronađi broj čiji trostruki proizvod daje zadatu vrednost i proveri ga; znak kuba jednak je znaku osnove."
    ],
    "why": "Definicija preko ponovljenog proizvoda objašnjava i vrednost i znak stepena, bez potrebe da unapred učiš pravila za operacije sa stepenima.",
    "caution": "Izložilac nije činilac: a^n nije a·n. Minus van zagrade primenjuje se posle stepenovanja, dok minus unutar zagrade pripada osnovi.",
    "extraFormulas": [
      "a^1=a",
      "0^n=0, 1^n=1, n∈N",
      "(−a)^n=a^n za parno n",
      "(−a)^n=−a^n za neparno n"
    ],
    "sourcePages": "Udžbenik 7, str. 86–87; postojeća oktobarska lekcija, nije navedena u dostavljenom oktobarskom planu.",
    "visuals": [
      "Stepen sa označenom osnovom i izložiocem, povezan sa nizom jednakih činilaca.",
      "Parni i neparni broj negativnih činilaca grupisanih po parovima."
    ]
  },
  "kratko-obnavljanje-7": {
    "aim": "Poveži računanje sa korenima, osobine figura i Pitagorinu teoremu pre novog gradiva.",
    "idea": [
      "Kvadratni koren nenegativnog broja jeste nenegativan broj čiji kvadrat daje zadatu vrednost. Pod korenom potraži potpuno kvadratni činilac; u izrazu prvo računaj zagrade, korene i stepene, zatim množenje i deljenje, pa sabiranje i oduzimanje.",
      "Za geometrijski račun prepoznaj figuru i njene elemente. Uglovi trougla imaju zbir 180°. Obim je zbir stranica, a površina koristi visinu odgovarajuće osnovice. Pitagorina teorema važi samo za pravougli trougao."
    ],
    "steps": [
      "Označi pravi ugao, hipotenuzu i potrebnu visinu; uskladi jedinice.",
      "Za katetu oduzmi kvadrate, za hipotenuzu ih saberi, pa uzmi pozitivan koren."
    ],
    "why": "Osnovica i odgovarajuća visina određuju površinu; ista stranica ne predstavlja uvek i visinu.",
    "caution": "Koren zbira uglavnom nije zbir korena; površinu izrazi kvadratnom jedinicom.",
    "extraFormulas": [
      "a²+b²=c²",
      "P_trougla=[[frac:ah_a|2]]",
      "P_paralelograma=ah_a"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 6–7; septembarski plan, časovi 2–5.",
    "visuals": [
      "Pravougli trougao sa jasnim pravim uglom, katetama a,b i hipotenuzom c; izdvojiti pravougli trougao koji čini dijagonala pravougaonika.",
      "Trougao, paralelogram i trapez sa osnovicom i na nju normalnom visinom; h_a mora biti vezana za stranicu a."
    ]
  },
  "razmera-duzi": {
    "aim": "Izračunaj i protumači razmeru duži koristeći istu mernu jedinicu i jednake delove.",
    "idea": [
      "Razmera a:b jeste količnik dužina a i b, zapisanih istom jedinicom. Redosled duži određuje redosled brojeva; količnik istih jedinica nema mernu jedinicu.",
      "Zapis a:b=m:n znači da prva duž sadrži m, a druga n istih jednakih delova. Iz poznate dužine nađi jedan deo; iz njihovog zbira celinu podeli na m+n delova."
    ],
    "steps": [
      "Prvo pretvori jedinice, zatim skrati oba člana razmere istim pozitivnim brojem.",
      "Za nepoznatu duž uzmi odgovarajući broj jednakih delova; za poređenje uporedi količnike."
    ],
    "why": "Promena zajedničke jedinice menja obe brojčane dužine istim faktorom, pa razmera ostaje ista.",
    "caution": "Obrnuta razmera zahteva zamenu redosleda oba člana.",
    "extraFormulas": [
      "a:b=[[frac:a|b]], a,b>0",
      "a=mu, b=nu; a+b=(m+n)u"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 12–14; septembarski plan, časovi 7–8.",
    "visuals": [
      "Dve duži nacrtane u istoj razmeri crteža i podeljene na m i n jednakih jedinica u; zajednička jedinica obojena jednako.",
      "Dve duži izražene različitim jedinicama uz mali prikaz pretvaranja m–cm–mm; bez unošenja brojeva iz zadataka."
    ]
  },
  "samerljive-duzi": {
    "aim": "Prepoznaj zajedničku meru duži i razlikuj racionalnu od iracionalne razmere.",
    "idea": [
      "Duži su samerljive ako postoji pozitivna zajednička mera u koja se u obe sadrži ceo broj puta. Njihova razmera tada je racionalna; iracionalna razmera znači nesamerljivost.",
      "Odlučuje količnik dužina, a ne prisustvo korena u pojedinačnim zapisima. Zajednički iracionalni činilac može se skratiti. Stranica i dijagonala kvadrata imaju iracionalan odnos √2, pa nisu samerljive."
    ],
    "steps": [
      "Uskladi jedinice, pojednostavi korene i skrati zajedničke činioce u razmeri.",
      "Za celobrojne dužine najveću zajedničku meru nađi pomoću NZD; podeli obe dužine tom merom i proveri cele brojeve delova."
    ],
    "why": "Ako a=mu i b=nu, njihov količnik je m/n, nezavisno od vrednosti zajedničke mere.",
    "caution": "Približan decimalni zapis ne čini iracionalan odnos racionalnim.",
    "extraFormulas": [
      "a=mu, b=nu; m,n∈N, u>0",
      "[[frac:a|b]]∈Q ⇔ duži su samerljive"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 13–14; septembarski plan, čas 8.",
    "visuals": [
      "Dve duži sa različitim brojem ponovljenih jednakih segmenata u, uz jasnu vezu a=m·u i b=n·u.",
      "Kvadrat stranice a sa dijagonalom d, označenim pravim uglom i odnosom d/a=√2; dijagonala ne sme izgledati jednako kao stranica."
    ]
  },
  "proporcionalnost": {
    "aim": "Pravilno sastavi proporciju i odredi nepoznatu duž bez mešanja odgovarajućih članova.",
    "idea": [
      "Proporcija je jednakost dve razmere. Duži a, b, c i d proporcionalne su u zapisanom redosledu ako važi a:b=c:d; krajnji članovi su a i d, a srednji b i c.",
      "Proizvod krajnjih članova jednak je proizvodu srednjih. U tabeli odgovarajućih duži proveri isti količnik ili isti činilac prelaska između parova. Dužine su pozitivne, pa pri korenovanju uzimamo pozitivan rezultat."
    ],
    "steps": [
      "Uskladi jedinice i redosled odgovarajućih duži, pa napiši unakrsne proizvode.",
      "Izdvoji nepoznatu i proveri početnu proporciju; pri podeli iz zbira koristi zajedničke jednake delove."
    ],
    "why": "Jednakost količnika, pomnožena njihovim nenultim imeniocima, daje jednakost unakrsnih proizvoda.",
    "caution": "Ne zameni redosled samo u jednoj razmeri.",
    "extraFormulas": [
      "a:b=c:d ⇔ ad=bc",
      "a:x=x:b ⇒ x²=ab, x>0"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 12–14; septembarski plan, čas 9.",
    "visuals": [
      "Dva para duži a,b i c,d sa bojama za odgovarajuće članove; isti činilac prelaska za obe duži.",
      "Tabela nekoliko proporcionalnih parova i strelice istog množitelja; odvojiti oznake krajnjih i srednjih članova proporcije."
    ]
  },
  "talesova-teorema": {
    "aim": "Poveži paralelnost sa odgovarajućim odsečcima u svakoj orijentaciji Talesovog crteža.",
    "idea": [
      "Paralelne prave koje seku krake ugla određuju proporcionalne odgovarajuće odsečke. U △ABC, za M∈AB, N∈AC i MN∥BC, poredi delove sa odgovarajućim celim stranicama ili preostalim delovima.",
      "Ista veza važi u okrenutoj konfiguraciji i na ukrštenim pravama: prati istu pravu kroz zajedničko teme, a ne položaj levo ili desno. U trapezu sa paralelnim osnovicama tako povezujemo delove dijagonala."
    ],
    "steps": [
      "Proveri paralelnost i redosled tačaka; ako je M između A i B, onda je AB=AM+MB.",
      "Napiši istu vrstu odnosa na oba kraka. Za podelu m:n na pomoćnom kraku odloži m+n jednakih delova i prenesi podelu paralelom."
    ],
    "why": "Paralele čuvaju isti odnos udaljenosti na oba presečna kraka.",
    "caution": "Ne mešaj deo prema celini sa delom prema ostatku.",
    "extraFormulas": [
      "MN∥BC ⇒ [[frac:AM|AB]]=[[frac:AN|AC]]=[[frac:MN|BC]]",
      "MN∥BC ⇒ [[frac:AM|MB]]=[[frac:AN|NC]]",
      "AB∥CD ⇒ [[frac:OA|OC]]=[[frac:OB|OD]]"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 15–20; septembarski plan, časovi 10–12.",
    "visuals": [
      "Trougao ABC sa unutrašnjom MN∥BC: različito označiti AM,MB,AN,NC i zagradama pune AB,AC; isti crtež prikazati i okrenut.",
      "Peščani sat: A,O,C kolinearne, B,O,D kolinearne i AB∥CD, uz boje OA↔OC i OB↔OD; dodatna faza prikazuje pomoćni krak sa m+n jednakih delova za konstrukciju."
    ]
  },
  "slicni-trouglovi": {
    "aim": "Prepoznaj odgovarajuće elemente sličnih trouglova i dosledno koristi koeficijent od prvog ka drugom.",
    "idea": [
      "Slični trouglovi imaju jednake odgovarajuće uglove i proporcionalne odgovarajuće stranice. Zapis △ABC∼△DEF određuje parove A↔D, B↔E, C↔F, čak i kada su trouglovi okrenuti ili ogledani.",
      "Ovde je k=DE/AB koeficijent prelaska iz ABC u DEF. Sve dužine drugog trougla i njegov obim dobijaju se množenjem sa k; za povratak delimo sa k."
    ],
    "steps": [
      "Iz redosleda temena odredi odgovarajuće stranice i proveri jednake količnike.",
      "Nepoznat ugao nađi preko odgovarajućeg ugla i zbira 180°; iz odnosa obima možeš odrediti isti k."
    ],
    "why": "Obim se množi sa k jer je zbir stranica koje se sve množe sa k.",
    "caution": "Stranice sparuj prema temenima, a ne prema položaju na ekranu.",
    "extraFormulas": [
      "k=[[frac:DE|AB]]=[[frac:EF|BC]]=[[frac:DF|AC]], k>0",
      "O_DEF=k·O_ABC"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 22–25; septembarski plan, čas 13. Odnos površina je obrazložena matematička dopuna.",
    "visuals": [
      "Dva slična raznostranična trougla ABC i DEF u različitim položajima, sa tačnim parovima temena i istim bojama odgovarajućih stranica i uglova.",
      "Dve skice sa odgovarajućim osnovicama i normalnim visinama; strelice ×k za dužine i obim, ×k² za površinu."
    ]
  },
  "stavovi-slicnosti": {
    "aim": "Izaberi dovoljan stav za dokaz sličnosti i proveri sve njegove uslove.",
    "idea": [
      "Sličnost trouglova dokazujemo jednim od tri stava: UU — dva para jednakih uglova; SUS — dva para proporcionalnih stranica i jednak zahvaćen ugao; SSS — tri para proporcionalnih stranica.",
      "Zahvaćen ugao nalazi se između upravo upoređenih stranica: za AB i AC to je ugao A. U dva pravougla trougla po jedan jednak oštar ugao dovoljan je za UU, jer već imaju ugao 90°."
    ],
    "steps": [
      "Upari odgovarajuća temena, pa proveri baš sve uslove izabranog stava.",
      "Ako dužine nemaju oznake, poređaj ih po veličini. Tek nakon dokaza zapiši sličnost pravilnim redosledom."
    ],
    "why": "Dva jednaka ugla određuju i treći, jer svaki trougao ima zbir uglova 180°.",
    "caution": "Dve razmere bez zahvaćenog ugla nisu dovoljne za SUS.",
    "extraFormulas": [
      "UU: ∠A=∠D, ∠B=∠E",
      "SUS: [[frac:AB|DE]]=[[frac:AC|DF]], ∠A=∠D",
      "SSS: [[frac:AB|DE]]=[[frac:BC|EF]]=[[frac:AC|DF]]"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 26–27; septembarski plan, časovi 14–15.",
    "visuals": [
      "Tri para trouglova za UU,SUS,SSS; u SUS obojiti upravo dve stranice i ugao između njih, u SSS označiti sva tri para.",
      "Poređenje zahvaćenog i nezahvaćenog ugla na istoj skici, sa natpisom da drugi podatak sam po sebi nije dovoljan."
    ]
  },
  "primene-slicnosti": {
    "aim": "Postavi geometrijski model za plan, model ili merenje pomoću senke.",
    "idea": [
      "Razmera plana 1:n znači da jedna jedinica na planu odgovara n istih jedinica u stvarnosti. Za stvarnu dužinu množi sa n, a za dužinu na planu deli sa n.",
      "Uspravni predmet, njegova senka i sunčev zrak grade pravougli trougao. Pri istovremenom merenju na istoj ravnoj podlozi sunčevi zraci daju jednake uglove, pa su trouglovi slični: visini odgovara visina, a senki senka."
    ],
    "steps": [
      "Uskladi jedinice i napiši razmeru ili proporciju istim redom.",
      "Za imenilac razmere podeli stvarnu dužinom na planu; kod senke koristi isti odnos visine i senke, pa proveri smisao veličine."
    ],
    "why": "Jednaki uglovi omogućavaju indirektno merenje nedostupne visine ili dužine.",
    "caution": "Senke iz različitog vremena ili sa različito nagnutog tla ne daju automatski isti odnos.",
    "extraFormulas": [
      "L_stvarno=n·L_plan",
      "[[frac:h_1|s_1]]=[[frac:h_2|s_2]]"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 12–14, 27–28, 32; septembarski plan, časovi 16–17.",
    "visuals": [
      "Uspravan štap i drvo na ravnom tlu, dve senke i paralelni Sunčevi zraci; visine i senke različitim bojama, oba prava ugla jasno označena.",
      "Plan i stvarni pravougaonik sa istom orijentacijom oznaka i strelicama ×n i ÷n; posebna skica za širinu reke kroz odgovarajuće trouglove."
    ]
  },
  "slicnost-pravougli": {
    "aim": "Poveži katete i visinu sa njihovim projekcijama na hipotenuzu.",
    "idea": [
      "U pravouglom △ABC pravi ugao je kod C, katete su BC=a i AC=b, a hipotenuza AB=c. Visina CD=h deli hipotenuzu na BD=p uz katetu a i AD=q uz katetu b.",
      "Visina obrazuje dva manja pravougla trougla, slična početnom i međusobno po UU. Njihove proporcije povezuju kvadrate kateta i visine sa odsečcima hipotenuze."
    ],
    "steps": [
      "Najpre poveži a sa p, b sa q i zapiši c=p+q.",
      "Izaberi jednakost sa poznatim veličinama. Za duž uzmi pozitivan koren; za nepoznati odsečak podeli odgovarajući kvadrat poznatom dužinom."
    ],
    "why": "Jednaki uglovi u manjim trouglovima omogućavaju iste odnose odgovarajućih stranica.",
    "caution": "h²=pq ne znači h=pq; ne menjaj oznake p i q tokom računa.",
    "extraFormulas": [
      "c=p+q",
      "a²=cp; b²=cq; h²=pq"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 30–31; septembarski plan, čas 18; oktobarski plan, čas 19.",
    "visuals": [
      "Pravougli ABC sa visinom CD; p=BD i q=AD obavezno u skladu sa BC=a,AC=b,AB=c; oba mala prava ugla u D jasno označiti.",
      "Tri izdvojena trougla ABC,CBD,ACD sa bojama jednakih uglova i odgovarajućih stranica; sačuvati isto značenje a,b,c,h,p,q."
    ]
  },
  "snalazenje-u-prostoru": {
    "aim": "Čitaj prostornu skicu bez gubitka skrivenih temena, ivica i strana.",
    "idea": [
      "Prostorno telo na ekranu prikazujemo ravnim crtežom. Zaklonjene ivice crtamo isprekidano; promena pogleda menja vidljivost, ali ne i veze u telu.",
      "Kocka ima 8 temena, 12 ivica i 6 strana. U svakom temenu sastaju se 3 ivice i 3 strane. Dijagonala strane povezuje nesusedna temena iste strane, a prostorna dijagonala suprotna temena koja nisu na istoj strani."
    ],
    "steps": [
      "Prati obode ABCD i A₁B₁C₁D₁, pa četiri spojnice odgovarajućih temena.",
      "Pri brojanju uključi skrivene elemente; razlikuj stvarni zajednički kraj od prividnog ukrštanja na slici."
    ],
    "why": "Crtež predstavlja telo, ali ga ne menja: zaklonjeni delovi i dalje postoje.",
    "caution": "Dijagonala nije dodatna ivica; ukrštanje linija na slici ne dokazuje prostorni presek.",
    "extraFormulas": [
      "ABCD ↔ A_1B_1C_1D_1"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 44, 47, 69–72, 136; oktobarski plan čas 22.",
    "visuals": [
      "Kocka ABCDA_1B_1C_1D_1 sa pravilnim ciklusima oba oboda i spojnicama odgovarajućih temena; tri zaklonjene ivice isprekidane, oznake čitljive.",
      "Ista kocka iz drugog pravca posmatranja; obojiti jednu stranu, jednu ivicu, dijagonalu strane i prostornu dijagonalu različitim oznakama."
    ]
  },
  "tacka-prava-ravan-osnove": {
    "aim": "Precizno zapiši pripadanje i proveri kada podaci određuju pravu ili ravan.",
    "idea": [
      "Tačke označavamo velikim, prave malim, a ravni grčkim slovima. A∈p ili A∈α znači pripadnost tačke; p⊂α znači da cela prava leži u ravni. Slika paralelograma predstavlja samo deo neograničene ravni.",
      "Dve različite tačke određuju jednu pravu. Ravan određuju tri nekolinearne tačke, prava i tačka van nje, dve prave koje se seku ili dve različite paralelne prave. Kolinearne tačke leže na istoj pravoj."
    ],
    "steps": [
      "Za brojanje pravih razmatraj parove tačaka, a ravni trojke nekolinearnih tačaka.",
      "Proveri da li različiti parovi ili trojke određuju isti objekat; ne broji ga više puta."
    ],
    "why": "Dve različite tačke prave u ravni dovoljne su da cela prava pripada toj ravni.",
    "caution": "Tri kolinearne tačke ne određuju jedinstvenu ravan.",
    "extraFormulas": [
      "A∈p i p⊂α ⇒ A∈α",
      "A,B∈α, A≠B ⇒ AB⊂α"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 38–44; oktobarski plan časovi 23–24.",
    "visuals": [
      "Ravan α sa tačkom u ravni, tačkom van nje i pravom p u ravni; natpisi A∈α i p⊂α prostorno vezani za odgovarajući objekat.",
      "Dve male skice: tri kolinearne tačke i tri nekolinearne; dopunski tetraedar za četiri nekomplanarne tačke i njihove različite ravni."
    ]
  },
  "odnosi-pravih-ravni": {
    "aim": "Razlikuj sve položaje dve prave i sve položaje prave prema ravni.",
    "idea": [
      "Dve prave mogu se poklapati, seći u jednoj tački, biti različite paralelne ili mimoilazne. Paralelne su u istoj ravni i nemaju zajedničku tačku; mimoilazne nemaju zajedničku tačku i nisu u istoj ravni.",
      "Prava može ležati u ravni, seći je u jednoj tački ili biti paralelna ravni bez zajedničkih tačaka. Dve različite zajedničke tačke prave i ravni znače da je cela prava u ravni."
    ],
    "steps": [
      "Prvo proveri zajedničke tačke, zatim pripadnost istoj ravni.",
      "Na kocki prati označene krajeve i strane tela; nemoj presek određivati samo prema perspektivnoj slici."
    ],
    "why": "Prave bez zajedničke tačke razlikujemo po tome da li ih jedna ravan može obe sadržati.",
    "caution": "Bez zajedničke tačke ne znači nužno paralelno.",
    "extraFormulas": [
      "p∩q={A}: presek",
      "p∥α ⇒ p∩α=∅",
      "p⊂α ⇒ p∩α=p"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 46–50, 52; oktobarski plan časovi 25–26.",
    "visuals": [
      "Tri odvojene skice pravih: presek, paralelnost i mimoilaznost; za mimoilazne prikaži različite prostorne nivoe i ne uvodi lažnu tačku preseka.",
      "Kocka sa označenim parovima ivica i mali prikaz prave sadržane u ravni, paralelne ravni i prave koja je probada; pravilni ciklusi temena."
    ]
  },
  "dve-ravni": {
    "aim": "Odredi odnos ravni, njihov presek i uslove za jedinstvenu određenost ravni.",
    "idea": [
      "Dve ravni mogu se poklapati, biti različite paralelne ili se seći po pravoj. Poklopljene imaju sve tačke zajedničke, različite paralelne nijednu, a presečna prava pripada obema ravnima.",
      "Dve različite zajedničke tačke A i B daju pravu AB koja leži u obe ravni. Tri zajedničke nekolinearne tačke znače da su ravni iste; tri kolinearne mogu pripadati presečnoj pravoj različitih ravni."
    ],
    "steps": [
      "Proveri da li su ravni različite i pronađi njihove zajedničke tačke ili ivicu.",
      "Pri brojanju ravni kroz više tačaka proveri nekolinearnost i ukloni ponavljanja istih ravni."
    ],
    "why": "Tri nekolinearne tačke određuju tačno jednu ravan, pa dve takve ravni ne mogu biti različite.",
    "caution": "Strana kocke je ograničen deo ravni; sama ravan nastavlja se van tela.",
    "extraFormulas": [
      "α∩β=p: ravni se seku",
      "α∥β, α≠β ⇒ α∩β=∅"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 41–44, 57–59; oktobarski plan čas 27.",
    "visuals": [
      "Dve ravni koje se seku po jasno izdvojenoj pravoj p, sa A i B na p i trećom tačkom samo u jednoj ravni.",
      "Kocka sa obojenim suprotnim i susednim stranama; uz tetraedar prikazati razliku četiri nekomplanarne tačke i četiri tačke u istoj ravni."
    ]
  },
  "ortogonalnost": {
    "aim": "Prepoznaj i obrazloži normalnost prave na ravan i dve ravni.",
    "idea": [
      "Prava p normalna je na ravan α ako je normalna na svaku pravu te ravni kroz podnožje O=p∩α. Dovoljno je proveriti dve različite prave ravni koje se seku u O.",
      "Dve ravni su normalne ako grade prav ugao, poput uspravnog zida i poda. Ako jedna sadrži pravu normalnu na drugu, ravni su normalne. Prava paralelna normali ravni i sama je normalna na tu ravan."
    ],
    "steps": [
      "Odredi podnožje i dve prave kroz njega; označi prav ugao.",
      "Kada je p⊥α dato, koristi normalnost na prave ravni kroz podnožje; prostorni ugao čitaj iz uslova, a ne merenjem slike."
    ],
    "why": "Dve presečne prave u podnožju određuju ravan za proveru normalnosti.",
    "caution": "Normalnost na samo jednu pravu ravni nije dovoljan dokaz.",
    "extraFormulas": [
      "p⊥α",
      "p⊥α i q∥p ⇒ q⊥α",
      "p⊂β i p⊥α ⇒ β⊥α"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 53–55; oktobarski plan časovi 28–29. Odnos normalnih ravni je dopuna na poznatom modelu.",
    "visuals": [
      "Ravan α sa dve presečne prave a,b kroz O i normalom p kroz O; označiti dva proverena prava ugla.",
      "Kocka sa jednom bočnom ivicom normalnom na osnovu i obojenim susednim stranama; podnožje ivice tačno na odgovarajućem temenu."
    ]
  },
  "ortogonalna-projekcija": {
    "aim": "Konstruiši projekciju tačke, duži ili prave i objasni promenu dužine u svim položajima.",
    "idea": [
      "Ortogonalna projekcija tačke A na ravan α jeste podnožje A′ normale iz A. Ako A već pripada ravni, projekcija je sama tačka A.",
      "Duž AB projektuješ preko krajeva A′ i B′. Ako duž leži u ravni ili je paralelna ravni, projekcija je jednako duga; za normalnu duž je tačka, a za kosu duž kraća duž. Prava se projektuje u pravu, osim normale koja daje tačku."
    ],
    "steps": [
      "Spusti normale iz oba kraja i spoji podnožja ako su različita.",
      "Pre poređenja dužina odredi položaj duži. Ista projekcija dve različite tačke znači da ih povezuje prava smera normale."
    ],
    "why": "Projekcija zadržava deo duži u smeru ravni, a uklanja njen normalni deo.",
    "caution": "Normalno na ravan ne znači samo uspravno na ekranu.",
    "extraFormulas": [
      "AA′⊥α",
      "0≤A′B′≤AB",
      "AB⊥α ⇒ A′=B′"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 60–62, 65–68; oktobarski plan časovi 30–31.",
    "visuals": [
      "Višepanelni prikaz iste duži u četiri osnovna položaja: u ravni, paralelno ravni, normalno i koso; svaki projektujući zrak sa znakom normalnosti.",
      "Dva kosa slučaja: jedan kraj u ravni i krajevi sa suprotnih strana α; označiti tačku probijanja, A′,B′ i pravougli trougao bez lažnog menjanja topologije."
    ]
  },
  "rogalj": {
    "aim": "Razlikuj teme, ivice i ravne uglove koji čine strane prostornog roglja.",
    "idea": [
      "Trostrani rogalj možeš zamisliti kao ugao prostorije kod kojeg se susreću tri zida odnosno dve zidne ravni i pod. Tri ivice su poluprave SA,SB,SC sa zajedničkim početkom S i ne leže u istoj ravni. Strane su ravni uglovi ASB,BSC,CSA, svaki određen parom susednih ivica.",
      "Rogalj se prostire od temena duž svojih polupravih; ograničeni trouglovi na skici samo pomažu da ga vidiš. Dve susedne strane imaju zajedničku jednu ivicu, a svim stranama je zajedničko teme S. Tri poluprave u istoj ravni ne obrazuju ovakav prostorni trostrani rogalj."
    ],
    "steps": [
      "Pronađi zajednički početak svih ivica i označi ga sa S.",
      "Proveri da poluprave nisu sve u istoj ravni; posmatraj prostorni model, ne samo ravnu sliku.",
      "Zapiši svaku ivicu kao polupravu iz S i svaku stranu kao ravni ugao između dva kraka.",
      "Za zajedničku ivicu dve strane pronađi polupravu koju sadrže oba njihova zapisa.",
      "Razlikuj rogalj od cele piramide: rogalj nije zatvoren osnovom niti ima više različitih vrhova."
    ],
    "why": "Par susednih poluprava određuje ravni ugao, a raspored tri takva ugla oko jednog temena daje prostorni ugao.",
    "caution": "SA na skici nije celo telo ni cela strana; predstavlja ivicu. Tri poluprave u istoj ravni daju ravanski raspored, a ne prostorni trostrani rogalj.",
    "extraFormulas": [
      "Teme: S",
      "Ivice: poluprave SA,SB,SC",
      "Strane: ∠ASB,∠BSC,∠CSA"
    ],
    "sourcePages": "Samostalna dopuna postojeće lekcije. Nema zasebne lekcije Rogalj u sadržaju priloženih udžbenika ni u oktobarskom planu; prostorni model upoređen sa udžbenikom 8, drugi deo, str. 8–10, i prvim delom, str. 69–70.",
    "visuals": [
      "Trostrani rogalj sa zajedničkim S, trima nekomplanarnim polupravama i transparentno obojenim ravnim uglovima između njihovih parova.",
      "Poređenje prostornog ugla prostorije i tri poluprave u jednoj ravni; u prvom prikazu ivice produžiti strelicama da ne liči na zatvorenu piramidu."
    ]
  },
  "poliedar": {
    "aim": "Razlikuj elemente poliedra i proveri broj temena, ivica i strana Ojlerovom formulom.",
    "idea": [
      "Poliedar je telo ograničeno mnogouglovima. Mnogouglovi su strane, njihove zajedničke duži ivice, a krajnje tačke ivica temena. Kocka, kvadar i prizme jesu poliedri; telo sa zakrivljenom površinom nije.",
      "Za konveksan poliedar važi Ojlerova formula V−E+F=2: V je broj temena, E ivica, a F strana. Konveksno telo sadrži celu duž između bilo koje dve svoje tačke."
    ],
    "steps": [
      "Sistematski prebroj sve elemente, uključujući skrivene, i unesi poznate brojeve u formulu.",
      "Ako je jedan broj zadat preko drugog, prvo primeni taj odnos; nepoznati izdvoji i proveri dobijene prirodne brojeve."
    ],
    "why": "Formula povezuje tri broja elemenata iste zatvorene konveksne površine.",
    "caution": "Brojčana provera formule sama ne dokazuje da zamišljeno telo zaista postoji.",
    "extraFormulas": [
      "V−E+F=2, za konveksan poliedar"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 69–72 i 136; drugi deo, str. 8–10 za dodatni model piramide. Oktobarski plan, časovi 32–33. Ojlerova formula je precizirana dopuna već prisutnim zadacima.",
    "visuals": [
      "Konveksna trostrana prizma sa ciklusima ABC i A_1B_1C_1, samo tri odgovarajuće spojnice i pravilno isprekidanim skrivenim ivicama; obojiti jednu stranu,ivicu,teme.",
      "Kocka sa sistematskim brojanjem dva oboda i četiri spojnice, uz mali primer zakrivljenog tela kao poređenje; ne mešati mnogougaonu stranu sa dijagonalom."
    ]
  },
  "pojam-linearne-jednacine": {
    "aim": "Razlikuj jednačinu od izraza i proveri da li je ponuđeni broj njeno rešenje.",
    "idea": [
      "Jednačina je jednakost koja sadrži nepoznatu. Rešenje je broj koji zamenom nepoznate pretvara jednačinu u tačnu brojčanu jednakost. Izraz poput 4x+3 sam po sebi nije jednačina, jer nema levu i desnu stranu povezanu znakom jednakosti.",
      "Linearna jednačina sa jednom nepoznatom može se srediti na oblik ax=b. Kada je a različito od nule, postoji tačno jedno rešenje. Ako se nepoznata ukloni, preostala tačna jednakost važi za svaki broj, a netačna jednakost ne dopušta nijedno rešenje."
    ],
    "steps": [
      "Odredi levu i desnu stranu i izabranu nepoznatu.",
      "Pri proveri uvrsti ponuđeni broj u svako pojavljivanje nepoznate, uključujući njegov znak.",
      "Izračunaj obe strane odvojeno, po pravilnom redosledu operacija.",
      "Uporedi vrednosti: samo jednakost znači da je broj rešenje; u tabeli proveri svaku ponuđenu vrednost.",
      "Ako se traži zajedničko rešenje dve jednačine, proveri isti broj u obe; za broj rešenja razmotri da li posle sređivanja ostaje nepoznata."
    ],
    "why": "Provera neposredno koristi značenje rešenja. Isti broj mora da učini jednakim obe strane, a ne samo da daje prihvatljivu vrednost jednog izraza.",
    "caution": "Ne odbacuj negativno rešenje samo zbog znaka. Broj koji rešava jednu jednačinu ne mora rešavati drugu; tačna jednakost bez x predstavlja sve realne brojeve.",
    "extraFormulas": [
      "ax=b, a≠0 ⇒ x=[[frac:b|a]]",
      "0x=0 ⇒ S=R",
      "0x=b, b≠0 ⇒ S=∅"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 78–79, 82–83; oblast nije obuhvaćena priloženim oktobarskim planom, ali postoji u oktobru sajta.",
    "visuals": [
      "Dve odvojene kutije L(x) i D(x) sa istom ulaznom vrednošću i poređenjem izlaza, bez brojeva iz radnih zadataka.",
      "Mala tabela kandidata, vrednosti leve/desne strane i kolone za jednakost; bez unapred označenih odgovora radnih zadataka."
    ]
  },
  "ekvivalentne-transformacije": {
    "aim": "Izmeni obe strane jednačine tako da sačuvaš njen skup rešenja.",
    "idea": [
      "Ekvivalentne jednačine imaju isti skup rešenja. Dodavanje ili oduzimanje istog broja/izraza na obe strane čuva jednakost. Množenje ili deljenje obe strane istim nenultim brojem takođe daje ekvivalentnu jednačinu.",
      "Transformacijama postepeno izdvajamo nepoznatu. Zapis „prebacivanja” člana uz promenu znaka jeste skraćen zapis dodavanja suprotnog člana na obe strane. Model ravnoteže pomaže: ista promena na oba tasa čuva ravnotežu."
    ],
    "steps": [
      "Izaberi operaciju koja uklanja jedan poznati član ili koeficijent uz nepoznatu.",
      "Zapiši istu operaciju na celoj levoj i celoj desnoj strani.",
      "Sredi obe strane; saberi ili oduzmi samo slične članove.",
      "Pri deljenju proveri da je delilac različit od nule i sačuvaj njegov znak.",
      "Dobijeni broj uvrsti u početnu jednačinu; po potrebi uporedi skupove rešenja pre i posle promene."
    ],
    "why": "Svaku navedenu operaciju možemo obrnuti, pa nijedno rešenje ne nestaje i nijedno novo se ne dodaje. Zato su nenulte operacije važne.",
    "caution": "Množenje obe strane nulom uglavnom briše uslov i nije ekvivalentno. Deljenje nulom nije dozvoljeno; kod negativnog koeficijenta pažljivo izračunaj znak količnika.",
    "extraFormulas": [
      "L=D ⇔ L+t=D+t",
      "L=D ⇔ cL=cD, c≠0",
      "L=D ⇔ [[frac:L|c]]=[[frac:D|c]], c≠0"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 82–83, 85–86; oblast nije obuhvaćena priloženim oktobarskim planom, ali postoji u oktobru sajta.",
    "visuals": [
      "Simboličke vage sa istom promenom na oba tasa: dodavanje, uklanjanje i podela na isti nenulti broj grupa.",
      "Zapis jedne transformacije sa obojenom operacijom na obe strane; odvojeno pokaži kako množenje nulom gubi podatak."
    ]
  },
  "resavanje-linearnih-jednacina": {
    "aim": "Sredi zagrade i razlomke, izdvoji nepoznatu i proveri vrstu skupa rešenja.",
    "idea": [
      "Kod jednačine sa zagradama prvo primeni distributivnost: broj ispred zagrade množi svaki član u njoj. Ako se zagrada oduzima, znak svih njenih članova se menja. Nakon toga saberi slične članove na svakoj strani.",
      "Ekvivalentnim transformacijama sabirke sa x okupljamo na jednoj, a poznate brojeve na drugoj strani. Razlomke možeš ukloniti množenjem svih članova nenultim zajedničkim imeniteljem. Na kraju ax=b određuje jedno rešenje, sve realne brojeve ili prazan skup, zavisno od a i b."
    ],
    "steps": [
      "Oslobodi zagrade pažljivo prateći svaki član i znak ispred zagrade.",
      "Ako postoje razlomci, izaberi zajednički imenilac i njime pomnoži svaki član obe strane.",
      "Sredi slične članove i istim promenama na obe strane prikupi x na jednu, brojeve na drugu stranu.",
      "Za nenulti koeficijent podeli njime; ako ostane 0x=b, odredi da li je jednakost tačna ili nemoguća.",
      "Uvrsti rezultat u originalan zapis sa zagradama/razlomcima, a ne samo u poslednji sređeni oblik."
    ],
    "why": "Distributivnost čuva vrednost izraza, a ekvivalentne operacije čuvaju rešenja. Provera u početnom obliku može otkriti izgubljen član ili pogrešno otvorenu zagradu.",
    "caution": "Broj ispred zagrade množi sve članove. Ne deli nulu koeficijentom koji je takođe nula; broj 0,5 možeš zapisati kao 1/2 da račun bude pregledniji.",
    "extraFormulas": [
      "c(x+d)=cx+cd",
      "−(x−d)=−x+d",
      "ax=b, a≠0 ⇒ x=[[frac:b|a]]",
      "a=0: b=0 daje S=R; b≠0 daje S=∅"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 85–86, 88–89; oblast nije obuhvaćena priloženim oktobarskim planom, ali postoji u oktobru sajta.",
    "visuals": [
      "Jedna simbolička zagrada sa dve strelice koje pokazuju da množitelj deluje na oba člana; poseban prikaz minusa ispred zagrade.",
      "Tok sređivanja do ax=b i tri moguća završetka, bez preskakanja uslova a≠0."
    ]
  },
  "primena-linearnih-jednacina": {
    "aim": "Prevedi tekst u jednačinu i vrati dobijeno rešenje u stvarni kontekst.",
    "idea": [
      "Najpre odluči šta označava x i u kojoj jedinici se meri. Ostale veličine izrazi preko istog x: broj uvećan za d je x+d, njegov m-struki broj je mx, a n-ti deo je x/n. Dva uzastopna cela broja mogu se zapisati kao x i x+1.",
      "Jednačina nastaje iz uslova koji izjednačava dve količine: zbir, obim, ukupnu cenu ili dva opisa iste veličine. Geometrijski problem zahteva odgovarajuću formulu, a praktični problem i uslove o dozvoljenom broju: cena i dužina su pozitivne, broj predmeta je ceo."
    ],
    "steps": [
      "Zapiši „Neka je x...” sa jasnim značenjem i jedinicom.",
      "Izrazi ostale tražene veličine preko x i proveri da li je odnos „više za” ili „više puta”.",
      "Odredi koje količine tekst izjednačava i napiši jednu jednačinu koja uključuje sve date uslove.",
      "Reši je naučenim postupkom; ako se pojavi deo zbirke, x predstavlja celu zbirku.",
      "Proveri i početni tekst i smisao rezultata; izračunaj druge tražene veličine i napiši odgovor rečenicom."
    ],
    "why": "Ista nepoznata održava međusobne veze svih veličina. Jednačina čuva sadržaj uslova, a završna provera proverava i matematički račun i značenje problema.",
    "caution": "„Za d više” znači sabiranje, a „m puta veći” množenje. Matematički dobijen negativan broj ne može biti cena, dužina ili broj predmeta u takvom problemu.",
    "extraFormulas": [
      "O_pravougaonika=2(a+b)",
      "Cena ukupno=broj predmeta·cena jednog",
      "Uzastopni brojevi: x, x+1",
      "n-ti deo celine: [[frac:x|n]]"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 99–100; oblast nije obuhvaćena priloženim oktobarskim planom, ali postoji u oktobru sajta.",
    "visuals": [
      "Trake za dva broja x i x+d, uz zajednički zbir bez upotrebe brojeva iz zadataka.",
      "Pravougaonik sa stranicama x i x+d i označenim obimom; ili traka celine podeljena na jednake delove."
    ]
  },
  "linearne-nejednacine": {
    "aim": "Reši nejednačinu, nacrtaj skup rešenja i izdvoji dozvoljene cele brojeve u kontekstu.",
    "idea": [
      "Nejednačina traži sve brojeve za koje dati odnos postaje tačan. Dodavanje istog izraza obe strane ne menja znak. Množenje ili deljenje pozitivnim brojem čuva smer nejednakosti, a negativnim ga obrće, jer se redosled brojeva pri promeni znaka preokreće.",
      "Rešenje prikazujemo na brojnoj pravoj: prazan kružić za strogo < ili >, pun kružić za ≤ ili ≥. Manji brojevi su levo od granice, veći desno. Ako tekst traži broj predmeta, od opšteg rešenja izdvajamo samo dozvoljene nenegativne cele brojeve."
    ],
    "steps": [
      "Sredi obe strane i istim dodavanjem/oduzimanjem prikupi nepoznatu na jednu stranu.",
      "Pre deljenja proveri znak koeficijenta; pri negativnom deliocu obrni znak <↔> ili ≤↔≥.",
      "Zapiši granicu i odluči da li je ona uključena u skup rešenja.",
      "Na brojnoj pravoj označi odgovarajući kružić i smer; proveri jedan broj iz prikazane oblasti.",
      "Za najveće celobrojno rešenje ili budžet uzmi odgovarajući ceo broj i proveri da sledeći više nije dozvoljen."
    ],
    "why": "Na brojnoj pravoj promena znaka odslikava brojeve oko nule i menja njihov redosled. Zato se znak nejednakosti obrće samo pri negativnom množitelju ili deliocu.",
    "caution": "Ne okreći znak pri običnom oduzimanju. Kod stroge granice sam granični broj nije rešenje; ako je granica ceo broj, „najveći manji” ne uključuje taj broj.",
    "extraFormulas": [
      "u<v, c>0 ⇒ cu<cv",
      "u<v, c<0 ⇒ cu>cv",
      "x<r: prazan kružić, levo",
      "x≥r: pun kružić, desno",
      "Cena·x≤budžet, x∈N_0"
    ],
    "sourcePages": "Udžbenik 8, prvi deo, str. 109–112, 114–117; oblast nije obuhvaćena priloženim oktobarskim planom, ali postoji u oktobru sajta.",
    "visuals": [
      "Četiri simboličke brojevne prave za x<r,x≤r,x>r,x≥r; jasno razlikovati pun/prazan kružić i strelicu toka rešenja.",
      "Brojna prava sa odvojenom granicom r i označenim celobrojnim tačkama koje pripadaju rešenju; bez brojeva iz radnih zadataka."
    ]
  },
  "skup-racionalnih-brojeva": {
    "aim": "Prepoznaj racionalan broj, njegove ekvivalentne zapise i položaj na brojevnoj pravoj; izdvoji brojeve prema zadatom uslovu.",
    "idea": [
      "Racionalan broj može se zapisati kao razlomak dva cela broja sa nenultim imeniocem. Skup Q obuhvata cele brojeve i razlomljene vrednosti sa oba predznaka; različiti zapisi mogu predstavljati isti broj.",
      "Na brojnoj pravoj imenilac određuje podelu jedinice, a brojilac broj koraka. Negativne vrednosti su levo od nule, pozitivne desno; suprotan broj dobijaš promenom predznaka."
    ],
    "steps": [
      "Za očitavanje tačke prvo proveri nulu i podele jedinice.",
      "Za poređenje koristi zajednički imenilac ili poznati decimalni zapis. U rasponu sa zadatim imeniocem uporedi brojioce; sredinu duži nađi polovljenjem rastojanja."
    ],
    "why": "Proširivanje i skraćivanje menjaju zapis razlomka, ali ne i njegov položaj na pravoj.",
    "caution": "Imenilac ne sme biti 0; razlomak može predstavljati i ceo broj.",
    "extraFormulas": [
      "Q={[[frac:a|b]]:a,b∈Z,b≠0}",
      "Z⊂Q",
      "n=[[frac:n|1]]"
    ],
    "sourcePages": "Udžbenik 6, str. 70–75; za osnovno poređenje predznaka i racionalnih brojeva str. 78–82. Operativni plan za oktobar, čas 35.",
    "visuals": [
      "Brojevna prava podeljena na četvrtine, sa parom suprotnih razlomaka i jasno prikazanom jednom jedinicom.",
      "Skupovi Z unutar Q sa primerom racionalnog broja koji nije ceo; bez uvođenja iracionalnih brojeva."
    ]
  },
  "apsolutna-vrednost-racionalnog": {
    "aim": "Izračunaj apsolutnu vrednost racionalnog broja i upotrebi je za rešenja uslova, poređenje i jednostavna rastojanja.",
    "idea": [
      "Apsolutna vrednost racionalnog broja jeste njegovo rastojanje od nule. Kod negativnog razlomka ili decimalnog broja dobijaš odgovarajuću pozitivnu vrednost; za 0 ostaje 0.",
      "Za |x|=k pozitivan k daje dva suprotna broja, k=0 samo x=0, a negativan k nema rešenje. Dodatni uslov o predznaku ili rasponu bira dozvoljene vrednosti."
    ],
    "steps": [
      "Poredi pozitivne apsolutne vrednosti pomoću zajedničkog imenioca ili decimalnog zapisa.",
      "Kod negativnih brojeva obrni njihov poredak. Rastojanje dve negativne koordinate dobijaš razlikom većeg i manjeg rastojanja od nule."
    ],
    "why": "Jednako rastojanje mogu imati dve tačke, po jedna sa svake strane nule.",
    "caution": "Minus izvan uspravnih crta ostaje: −|r| je suprotan broj apsolutnoj vrednosti.",
    "extraFormulas": [
      "|r|≥0",
      "|r|=|−r|",
      "|x|=k, k>0 ⇒ x=−k ili x=k"
    ],
    "sourcePages": "Udžbenik 6, str. 78–82; operativni plan za oktobar, čas 36. Jednostavno rastojanje koristi pozitivno oduzimanje razlomaka iz 5. razreda.",
    "visuals": [
      "Brojevna prava sa parom suprotnih razlomaka i jednakim segmentima do nule.",
      "Otvoreni raspon dozvoljenih apsolutnih vrednosti i njegove dve simetrične slike oko nule."
    ]
  },
  "uglovi-na-transverzali": {
    "aim": "Prepoznaj parove uglova uz transverzalu, pravilno primeni uslov paralelnosti i poveži više odnosa pri nalaženju nepoznatog ugla.",
    "idea": [
      "Transverzala seče dve prave u različitim tačkama. Unutrašnji uglovi leže između pravih; saglasni zauzimaju isti položaj kod oba preseka, a naizmenični unutrašnji leže sa različitih strana transverzale.",
      "Ako su presečene prave paralelne, saglasni i naizmenični unutrašnji uglovi su jednaki; unutrašnji sa iste strane imaju zbir 180°. Kod jednog preseka unakrsni uglovi su jednaki, a susedni koji čine opružen ugao daju 180°, nezavisno od paralelnosti."
    ],
    "steps": [
      "Proveri paralelnost i položaj para uglova, pa izaberi jednakost ili zbir.",
      "Ako se pojavljuje x, sastavi jednakost i posle računanja odredi ugao; u trouglu primeni i zbir 180°."
    ],
    "why": "Paralelnost omogućava da se ugao sa jednog preseka prenese na drugi.",
    "caution": "Sličan izgled uglova nije dovoljan: za veze između preseka proveri uslov p∥q.",
    "extraFormulas": [
      "p∥q ⇒ saglasni uglovi su jednaki",
      "p∥q ⇒ naizmenični unutrašnji uglovi su jednaki",
      "p∥q ⇒ unutrašnji sa iste strane imaju zbir 180°"
    ],
    "sourcePages": "Udžbenik 6, str. 48, podsetnik na saglasne, naizmenične i unakrsne uglove i njihova primena u dokazu zbira uglova. Operativni plan za oktobar, čas 26.",
    "visuals": [
      "Dve horizontalne paralelne prave p gore i q dole; transverzala t ide odozdo levo nagore desno. Obojeno razlikovati unutrašnje i spoljašnje oblasti.",
      "Četiri zasebna prikaza parova: saglasni u istom položaju, naizmenični unutrašnji, unutrašnji sa iste strane i unakrsni na istom preseku. Uglove prikazati lukovima i paralelnost strelicama."
    ]
  },
  "jednacine-kvadrat": {
    "aim": "Reši jednačinu sa kvadratom nepoznate u skupu realnih brojeva, izdvoji sve mogućnosti i primeni dodatni uslov.",
    "idea": [
      "Kod jednačine x²=r znak broja r određuje broj realnih rešenja: negativan ne daje nijedno, 0 daje samo x=0, a pozitivan dva suprotna broja.",
      "Ako kvadrat nije izdvojen, prvo uredi jednačinu istom operacijom na obe strane. Kada je kvadriran ceo izraz, oba znaka odnose se na taj izraz; zatim rešavaš dve jednostavnije jednačine odvojeno."
    ],
    "steps": [
      "Izdvoji kvadrat dodavanjem, oduzimanjem ili deljenjem nenultim koeficijentom.",
      "Proveri znak desne strane, navedi sve mogućnosti i proveri ih u početnoj jednačini i dodatnom uslovu."
    ],
    "why": "Dva suprotna broja imaju jednak pozitivan kvadrat; kvadrat ne može biti negativan.",
    "caution": "Ne uzimaj samo pozitivan koren i ne korenuj pre izdvajanja kvadrata.",
    "extraFormulas": [
      "x²=r, r>0 ⇒ x=±[[sqrt:r]]",
      "(x−a)²=r ⇒ x−a=±[[sqrt:r]], r≥0"
    ],
    "sourcePages": "Udžbenik 7, str. 12–17 i 30–31; oktobarski plan, čas 18.",
    "visuals": [
      "Tabela sa tri slučaja r<0, r=0 i r>0 i njihovim brojem realnih rešenja.",
      "Brojna prava sa suprotnim rešenjima i izdvojenim dodatnim uslovom."
    ]
  },
  "direktna-proporcionalnost": {
    "aim": "Prepoznaj direktnu proporcionalnost, odredi njen koeficijent i dopuni podatke u oba smera.",
    "idea": [
      "Veličine x i y direktno su proporcionalne ako za svaki x≠0 količnik y/x ima istu nenultu vrednost k. Vezu pišemo y=kx, a za x=0 dobijamo y=0.",
      "Kada se x promeni za neki faktor, y se menja za isti faktor. Koeficijent k može biti pozitivan ili negativan; jedan poznat par sa x≠0 dovoljan je da ga odredimo."
    ],
    "steps": [
      "U tabeli proveri isti količnik u svakoj nenultoj koloni; za x=0 proveri y=0.",
      "Iz poznatog para nađi k, pa izračunaj nepoznato x ili y. U tekstualnom modelu proveri jedinice i stalnost odnosa."
    ],
    "why": "Stalni količnik znači isti broj jedinica y za svaku jedinicu x.",
    "caution": "To što obe veličine rastu nije dovoljan dokaz proporcionalnosti.",
    "extraFormulas": [
      "y=kx, k≠0",
      "k=[[frac:y|x]], x≠0",
      "x=[[frac:y|k]]"
    ],
    "sourcePages": "Udžbenik 7, str. 32–35; oktobarski plan, čas 20.",
    "visuals": [
      "Tabela x i y sa izdvojenim stalnim koeficijentom i jednom kolonom sa odstupanjem.",
      "Jedinična cena povezana sa tabelom mase i ukupne cene."
    ]
  },
  "funkcija-ykx": {
    "aim": "Proveri i pročitaj tačke grafika y=kx, odredi k i poveži znak i veličinu koeficijenta sa izgledom prave.",
    "idea": [
      "Grafik funkcije y=kx jeste prava kroz O(0,0). U paru A(x,y) prvo pišemo vodoravnu, zatim uspravnu koordinatu; tačka pripada grafiku samo ako zadovoljava jednakost y=kx.",
      "Za k>0 prava raste sleva nadesno, a za k<0 opada. Pri istoj razmeri obe ose veće |k| daje strmiju pravu. Za k=0 grafik je x-osa."
    ],
    "steps": [
      "Proveri skalu svake ose. Za crtanje pronađi O i bar jednu nenultu tačku, pa povuci pravu.",
      "Za pripadnost uporedi dato y sa kx; za nepoznato k koristi tačku sa x≠0."
    ],
    "why": "O pripada svakom grafiku y=kx, pa sam koordinatni početak ne određuje koeficijent.",
    "caution": "Broj podeljaka nije koordinata dok ne proveriš vrednost podeljka.",
    "extraFormulas": [
      "y=kx",
      "k=[[frac:y_A|x_A]], x_A≠0"
    ],
    "sourcePages": "Udžbenik 7, str. 32–35; oktobarski plan, čas 21.",
    "visuals": [
      "Jedan rastući i jedan opadajući grafik u jasno označenom koordinatnom sistemu.",
      "Tačka sa projekcijama na ose i različitim vrednostima podeljaka za čitanje koordinata.",
      "Dve prave sa jednakom razmerom osa za poređenje nagiba."
    ]
  },
  "proporcije": {
    "aim": "Prepoznaj članove proporcije, proveri jednakost razmera i odredi nepoznati član u računskom ili tekstualnom zadatku.",
    "idea": [
      "Proporcija a:b=c:d predstavlja jednakost dve razmere, odnosno dva količnika; b i d moraju biti nenulti. Spoljašnji članovi su a i d, a unutrašnji b i c.",
      "U tačnoj proporciji proizvod spoljašnjih članova jednak je proizvodu unutrašnjih. Tu vezu koristimo za proveru i nalaženje nepoznatog člana. Obrtanjem obe razmere dobijamo ekvivalentnu proporciju ako su i novi delioci nenulti."
    ],
    "steps": [
      "Napiši unakrsne proizvode, izdvoji nepoznati član i proveri početnu proporciju.",
      "U tekstualnom zadatku uskladi jedinice i redosled istih veličina na obe strane."
    ],
    "why": "Množenje jednakih količnika njihovim nenultim imeniocima daje jednake unakrsne proizvode.",
    "caution": "Prvi i treći član ne čine unakrsni proizvod.",
    "extraFormulas": [
      "a:b=c:d ⇔ a·d=b·c, b≠0,d≠0"
    ],
    "sourcePages": "Udžbenik 7, str. 36–37; oktobarski plan, čas 22.",
    "visuals": [
      "Četiri člana proporcije sa lukovima koji povezuju spoljašnje i unutrašnje članove.",
      "Tabela istih veličina sa označenim redosledom pri formiranju proporcije."
    ]
  },
  "produzena-proporcija": {
    "aim": "Napiši zajednički deo produžene proporcije, odredi njegove članove i spoji dva usklađena odnosa.",
    "idea": [
      "Zapis a:b:c=p:q:r znači da veličine sadrže isti zajednički deo t: a=pt, b=qt, c=rt. Brojevi p, q i r pokazuju koliko tih jednakih delova pripada svakoj veličini.",
      "Zajednički deo određuješ iz zbira, razlike ili jednog poznatog člana. Za uglove trougla ukupan zbir je 180°. Ako spajaš dva odnosa, proširi ih dok zajednički član ne dobije isti broj delova."
    ],
    "steps": [
      "Izrazi sve veličine pomoću istog t, pa podatak o zbiru ili razlici prevedi u jednakost.",
      "Nađi t, pomnoži ga odgovarajućim brojem delova i proveri sve odnose."
    ],
    "why": "Sve veličine nastaju množenjem jedne iste jedinice t različitim brojem delova.",
    "caution": "Ukupan broj delova jeste zbir članova odnosa, a ne broj grupa.",
    "extraFormulas": [
      "a=pt, b=qt, c=rt",
      "a+b+c=(p+q+r)t",
      "c−a=(r−p)t"
    ],
    "sourcePages": "Udžbenik 7, str. 37–39; oktobarski plan, čas 23.",
    "visuals": [
      "Tri trake od istih jediničnih delova koje prikazuju članove p, q i r.",
      "Dva odnosa poravnata po zajedničkom članu pre spajanja.",
      "Trougao sa uglovima označenim kao pt, qt i rt."
    ]
  },
  "primena-produzene-proporcije": {
    "aim": "Modeluj podelu količine u zadatoj razmeri i prilagodi postupak zbiru, razlici, poznatom delu ili dodatnom trošku.",
    "idea": [
      "Pri podeli novca, količine ili dužine uskladi redosled grupa sa brojevima odnosa. Svaki deo predstavi kao njegov koeficijent puta isti t; zbir ili razlika delova omogućavaju nalaženje t.",
      "Prvo utvrdi šta se stvarno deli. Kod pravougaonika zbir susednih stranica jeste polovina obima. Ako postoje troškovi ili izdvojeni procenat, zadatim odnosom deliš samo preostali iznos."
    ],
    "steps": [
      "Iz zbira, razlike ili poznatog člana odredi t, pa izračunaj traženi deo.",
      "Proveri odnose, konačan zbir i jedinice; broj ljudi mora biti ceo broj."
    ],
    "why": "Brojevi odnosa određuju broj jednakih delova, dok dodatni uslov određuje veličinu jednog dela.",
    "caution": "Ne deli početni iznos ako je njegov deo već potrošen.",
    "extraFormulas": [
      "t=[[frac:ukupno|zbir članova odnosa]]",
      "a+b=[[frac:O_pravougaonika|2]]"
    ],
    "sourcePages": "Udžbenik 7, str. 36 i 38–39; oktobarski plan, čas 24.",
    "visuals": [
      "Raspodela jedne celine u tri trake sa jednakim jediničnim delovima.",
      "Celina podeljena na trošak i raspoloživi ostatak, zatim ostatak u zadatoj razmeri.",
      "Pravougaonik sa dve vrste stranica i vezom a+b=O/2."
    ]
  }
};

// Later lessons carry their definitions, procedure and examples together.
for(const lesson of grades.flatMap(g=>g.areas.flatMap(a=>a.lessons))){
  if(learningByLesson[lesson.id])continue;
  learningByLesson[lesson.id]={
    aim:lesson.aim??lesson.title, idea:[lesson.intro,lesson.rules[0]], steps:[lesson.rules[1]],
    why:lesson.rules[0], caution:lesson.rules.at(-1)!, extraFormulas:lesson.formulas,
    example:lesson.solved.steps.join(" "), sourcePages:lesson.aim?"Program VI razreda i predlog rasporeda, januar–jun 2027.":"Operativni plan 2026/27.", visuals:[],
  };
}

import type {LessonLearning} from "./types";

/** Reviewed against the supplied textbooks; source notes are not shown to pupils. */
export const learningByLesson:Record<string,LessonLearning> = {
  "kratko-obnavljanje-5": {
    "aim": "Poveži računanje, razlomke i osnovnu geometriju da samostalno izabereš postupak za svaki tip zadatka.",
    "idea": [
      "U zapisu prirodnog broja mesto cifre određuje njenu vrednost. Pri poređenju najpre gledamo broj cifara, a zatim cifre sleva nadesno. Kod pisanog oduzimanja poravnamo jedinice sa jedinicama, desetice sa deseticama i po potrebi zamenimo jednu veću jedinicu sa deset manjih.",
      "Imenilac razlomka govori na koliko jednakih delova je podeljena celina, a brojilac koliko tih delova posmatramo. Pri jednakim imeniocima upoređujemo ili sabiramo brojioce. Tačke iste prave su kolinearne; dva ugla koji zajedno čine opružen ugao imaju zbir 180°. Obim pravougaonika obuhvata po dve jednake stranice."
    ],
    "steps": [
      "U brojevnom izrazu prvo odredi zagrade i računaj množenje i deljenje, pa sabiranje i oduzimanje sleva nadesno.",
      "Pri sabiranju ili oduzimanju razlomaka sa jednakim imeniocima menjaj samo brojioce. Nepoznati sabirak dobijaš oduzimanjem poznatog od zbira.",
      "Razlomak sa imeniocem 10 čitaj kao desetine: decimalni zapis ima jednu cifru iza zareza. Pri poređenju prirodnih brojeva proveri prvu različitu cifru.",
      "U geometrijskom pitanju prepoznaj odnos tačaka ili uglova. Nepoznati ugao u opruženom uglu dobijamo oduzimanjem poznatog od 180°.",
      "Za nepoznatu stranicu pravougaonika prvo prepolovi obim, pa oduzmi poznatu stranicu. Proveri da su sve dužine u istoj jedinici."
    ],
    "why": "Imenilac predstavlja veličinu delova i ostaje isti dok brojimo jednake delove. Polovina obima pravougaonika jednaka je zbiru dve susedne stranice.",
    "caution": "Ne sabiraj imenioce. Redosled operacija važi i bez zagrada. U geometriji razlikuj obim, koji je dužina, od površine.",
    "extraFormulas": [
      "[[frac:a|c]] − [[frac:b|c]] = [[frac:a−b|c]], c>0",
      "x+s=z ⇒ x=z−s",
      "α+β=180°",
      "b=O:2−a"
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
      "Skup Z čine negativni celi brojevi, nula i pozitivni celi brojevi. Brojevna prava ima označenu nulu, jednake jedinične razmake i smer rasta udesno. Koordinata tačke je broj pridružen toj tački.",
      "Prethodnik je susedni ceo broj levo, a sledbenik susedni ceo broj desno. Suprotni broj predstavlja tačku na drugoj strani nule, na jednakom rastojanju od nje. Negativan zapis opisuje stanje ispod dogovorenog početka, na primer temperaturu ispod nule."
    ],
    "steps": [
      "Proveri da li broj ima celobrojnu vrednost; razlomak ili decimalni zapis može označavati ceo broj samo ako nema razlomljenog dela.",
      "Na brojevnoj pravoj pronađi nulu i utvrdi vrednost jednog razmaka pre nego što očitaš koordinatu.",
      "Za prethodnik idi jedno mesto levo, za sledbenik jedno mesto desno; za suprotan broj promeni predznak.",
      "Ako je poznat prethodnik nepoznatog broja, najpre nađi njegov sledbenik, pa tek onda uradi traženu promenu. Uzastopni brojevi razlikuju se za 1."
    ],
    "why": "Brojevna prava se nastavlja u oba smera, pa svaki ceo broj ima prethodnik i sledbenik. Nula je početak merenja položaja, a ne pozitivan ili negativan broj.",
    "caution": "Prethodnik negativnog broja ima veću apsolutnu vrednost. Suprotan broj i sledbenik su različiti pojmovi; nula je sama sebi suprotna.",
    "extraFormulas": [
      "Prethodnik broja x je p ⇒ x=p+1",
      "−0=0"
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
      "Apsolutna vrednost |a| meri koliko je tačka a udaljena od nule. Ona govori o dužini, pa ne može biti negativna. Pozitivnom broju i nuli zapis ostaje isti, a negativnom broju apsolutna vrednost je njegov suprotan broj.",
      "Dva suprotna nenulta broja imaju isto rastojanje od nule. Zato uslov |x|=k za pozitivan k daje dve mogućnosti. Dodatni uslov x<0 ili x>0 bira odgovarajuću stranu brojevne prave."
    ],
    "steps": [
      "Najpre izračunaj svaku apsolutnu vrednost posebno; tek potom sabiraj, oduzimaj ili upoređuj dobijene brojeve.",
      "Iz dijagrama prvo očitaj koordinatu tačke, pa broj jediničnih razmaka do nule. U tabeli u svakom stupcu primeni isto pravilo.",
      "Za |x|=k proveri k: pozitivan broj daje x=−k i x=k, nula daje samo x=0, a negativan broj ne daje rešenje.",
      "Ako postoji dodatni znakovni uslov, zadrži samo mogućnost koja ga ispunjava. Proveri je u oba uslova."
    ],
    "why": "Rastojanje meri dužinu bez obzira na smer. Dve tačke na različitim stranama nule mogu zato dati istu apsolutnu vrednost.",
    "caution": "Uspravne crte nisu obične zagrade. Broj |−a| nije negativan samo zato što se minus nalazi unutar njih; kod jednakosti nemoj preskočiti drugo moguće rešenje.",
    "extraFormulas": [
      "|x|=k, k>0 ⇒ x=−k ili x=k",
      "|x|=0 ⇒ x=0",
      "|x|=k, k<0 ⇒ nema rešenja"
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
      "Veći broj je desnije na brojevnoj pravoj. Svi pozitivni brojevi su veći od nule, a nula je veća od svih negativnih brojeva. Među negativnim brojevima veći je onaj bliži nuli, sa manjom apsolutnom vrednošću.",
      "Poređati od najmanjeg znači pratiti brojevnu pravu sleva nadesno, a od najvećeg u suprotnom smeru. Strogi znakovi < i > isključuju granični broj. U zapisu sa nepoznatom cifrom najpre posmatraj vrednost celog broja i njegov predznak."
    ],
    "steps": [
      "Razdvoji negativne brojeve, nulu i pozitivne brojeve. Zatim uporedi brojeve unutar svake grupe.",
      "Kod dva negativna broja poredi apsolutne vrednosti i obrni njihov poredak. Kod temperatura niži broj znači nižu temperaturu.",
      "Za dvostruki uslov nabroj samo cele brojeve između granica; za najveći ceo broj ispod granice uzmi njen prethodnik.",
      "Kod nepoznate cifre proveri dozvoljene cifre od 0 do 9 i zadrži one za koje je cela nejednakost tačna. Traženi najveći izbor proveri zamenom."
    ],
    "why": "Dodavanje jednog jediničnog koraka udesno povećava koordinatu. Negativan broj dalje levo zato je manji iako njegovo rastojanje od nule raste.",
    "caution": "Ne poredi negativne brojeve kao da minus ne postoji. Krajnje vrednosti nisu uključene ako piše <; najveća cifra i najveći negativan broj nisu isti zahtev.",
    "extraFormulas": [
      "Ako su m i n celi i m<n, onda m<x<n daje x=m+1, …, n−1",
      "Broj celih brojeva između m i n je n−m−1, ako je n−m≥1"
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
      "Prvi sabirak određuje početnu tačku, a drugi pomeranje: pozitivan udesno, negativan ulevo. Kod istih predznaka pomeranja imaju isti smer; sabiramo apsolutne vrednosti i zadržavamo predznak. Kod različitih predznaka pomeranja se delimično poništavaju.",
      "Kod različitih predznaka oduzimamo manju apsolutnu vrednost od veće i uzimamo predznak broja veće apsolutne vrednosti. Jednaki suprotni brojevi daju nulu. Sabirci mogu menjati mesta i grupisati se kada nam to olakšava račun."
    ],
    "steps": [
      "Prvo proveri predznake i veličine apsolutnih vrednosti; iz toga možeš odrediti znak zbira i pre računanja.",
      "Primeni pravilo za iste ili različite predznake. Za više sabiraka prvo potraži parove suprotnih brojeva.",
      "U tabeli sabiraj brojeve iz istog stupca. Rast temperature zapisuj kao pozitivan, a pad kao negativan sabirak.",
      "Nepoznati sabirak nađi oduzimanjem poznatog od zbira. Za uslov a+x>0 traži x koji je strogo veći od suprotnog broja broju a, pa izdvoji najmanji ceo."
    ],
    "why": "Kod različitih smerova jednaki delovi pomeranja se poništavaju. Preostali deo i njegov smer određuju apsolutnu vrednost i predznak zbira.",
    "caution": "Pravilo predznaka za množenje ne važi za sabiranje. Zbir negativnog i pozitivnog broja ne mora biti negativan: odlučuje veća apsolutna vrednost.",
    "extraFormulas": [
      "a+0=a",
      "a+b=b+a",
      "(a+b)+c=a+(b+c)",
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
      "U izrazu a−b broj a je umanjenik, b umanjilac, a rezultat razlika. Oduzeti broj znači sabrati njegov suprotan broj. Zato prvi broj ostaje isti, a operacija oduzimanja i predznak drugog broja menjaju se zajedno.",
      "Oduzimanje pozitivnog broja pomera tačku ulevo, a oduzimanje negativnog udesno. U zadatku sa liftom ili stanjem na računu prvo označi početno stanje i smer promene, pa tek onda računaj."
    ],
    "steps": [
      "Zapiši a−b kao a+(−b), uključujući zagrade oko negativnog broja. Ne menjaj predznak prvog broja.",
      "Izračunaj novonastali zbir primenom pravila sabiranja. U tabeli pažljivo prati koji red je umanjenik, a koji umanjilac.",
      "Ako je nepoznat umanjenik u x−b=c, saberi razliku i umanjilac. Ako je nepoznat umanjilac u a−x=c, oduzmi razliku od umanjenika.",
      "Proveri nepoznati broj u početnoj jednakosti. Pri poređenju izraza sa istim početnim brojem razmotri smer njihovih pomeranja."
    ],
    "why": "Oduzimanje je obrnuto sabiranju: razlika sabrana sa umanjiocem vraća umanjenik. Odatle dobijamo i postupke za oba tipa nepoznatog broja.",
    "caution": "Zapis −(−b) označava suprotan broj negativnog broja. Oduzimanje nije zamena mesta brojeva: a−b i b−a uglavnom imaju različite vrednosti.",
    "extraFormulas": [
      "x−b=c ⇒ x=c+b",
      "a−x=c ⇒ x=a−c",
      "(a−b)+b=a"
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
      "Rastojanje je broj jediničnih duži između dve tačke. Ako su na različitim stranama nule, možemo sabrati njihova rastojanja od nule; ako su na istoj strani, oduzimamo manje rastojanje od većeg. Jedinstveni zapis za oba slučaja je |a−b|.",
      "Tačke na zadatom rastojanju r od tačke a nalaze se r mesta levo i r mesta desno. Dodatni uslov o znaku ili drugom rastojanju može ostaviti samo jednu mogućnost. Sredina duži leži između krajeva i deli duž na dva jednaka dela."
    ],
    "steps": [
      "Očitaj koordinate i proveri vrednost jedinice skale. Izračunaj veću koordinatu minus manju ili apsolutnu vrednost njihove razlike.",
      "Ako tražiš tačku na rastojanju r od a, proveri položaje a−r i a+r, a zatim primeni dodatni uslov.",
      "Za dva uslova rastojanja odredi mogućnosti iz prvog uslova i svaku proveri u drugom.",
      "Za sredinu prebroj rastojanje između krajeva, uzmi polovinu tog broja jediničnih duži i pomeri se od jednog kraja ka drugom. Proveri jednaka rastojanja do oba kraja."
    ],
    "why": "Apsolutna vrednost uklanja smer razlike. Zato redosled tačaka ne utiče na dužinu, dok pri nalaženju položaja postoje levo i desno rešenje.",
    "caution": "Negativna koordinata je moguća, negativno rastojanje nije. Razlika temperatura traži veličinu razlike; ne mešaj je sa predznakom promene temperature.",
    "extraFormulas": [
      "|a−b|=|b−a|",
      "d(x,a)=r ⇒ x=a−r ili x=a+r, r≥0",
      "M je sredina AB ⇒ d(A,M)=d(M,B)"
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
      "Svako oduzimanje može postati sabiranje suprotnog broja. Kada izraz svedemo na zbir, možemo tražiti suprotne parove i grupisati pogodne sabirke, uz njihov predznak. Zagrade određuju koje delove najpre posmatramo kao jednu celinu.",
      "U zadatku sa dugom početni dug predstavlja negativno stanje, vraćanje dela duga pozitivnu promenu, a novi dug negativnu. Ako znamo samo konačno stanje, poništavamo promene obrnutim redom: poslednju prvu, pa prethodnu."
    ],
    "steps": [
      "Kod +(−a) dobija se −a, a kod −(−a) dobija se +a. Ako uklanjaš celu zagradu iza minusa, promeni predznak svakog njenog člana.",
      "Prevedi izraz u zbir brojeva sa jasnim predznacima; zatim računaj sleva nadesno ili grupiši pogodne sabirke.",
      "U tabeli zamenjuj x jednom vrednošću u celom izrazu. U tekstualnom zadatku uz svaku promenu zapiši odgovarajući predznak.",
      "Za nepoznato početno stanje kreni od konačnog i poništi promene obrnutim redom. Nepoznati umanjilac nađi kao umanjenik minus razlika.",
      "Proveri početnu jednakost i smisao rezultata: negativno stanje znači da je dug i dalje prisutan."
    ],
    "why": "Sabiranje i oduzimanje predstavljaju promene položaja ili stanja. Obrnuta promena vraća nas na prethodno stanje, a suprotni sabirci se poništavaju.",
    "caution": "Predznak pripada broju i mora da se pomera zajedno sa njim. Promena mesta važi za sabirke nakon prevođenja u zbir, ne za proizvoljnu zamenu umanjenika i umanjioca.",
    "extraFormulas": [
      "+(a−b)=a−b",
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
      "Množenje prirodnim brojem predstavlja ponovljeno sabiranje: n jednakih sabiraka a daju proizvod n·a. Kod celih brojeva najpre određujemo predznak proizvoda, pa množimo apsolutne vrednosti. Ako je bilo koji činilac nula, proizvod je nula.",
      "Množenje brojem −1 daje suprotan broj. Kod više nenultih činilaca svaki negativni činilac menja predznak: paran broj negativnih činilaca daje pozitivan, a neparan negativan proizvod. Zajednički činilac možemo izdvojiti i pre računanja."
    ],
    "steps": [
      "Odredi da li proizvod sadrži nulu. Ako je nema, prebroj negativne činioce i odredi predznak.",
      "Pomnoži apsolutne vrednosti i dodaj utvrđeni predznak. U tabeli primenjuj isto množenje na svaku vrednost x.",
      "Nepoznati činilac pronađi pomoću poznate tablice množenja i pravila predznaka; proveri ga množenjem.",
      "Pri zajedničkom činiocu koristi a·b+a·c=a·(b+c). Poređenje proizvoda sa negativnim činiocem proveri preko apsolutnih vrednosti: veća apsolutna vrednost znači manji negativan rezultat.",
      "Ponovljeni pad ili rast zapisuj kao broj perioda puta promenu u jednom periodu. Odvoji ukupnu promenu od konačne temperature."
    ],
    "why": "Svako množenje brojem −1 zamenjuje broj njegovim suprotnim. Dve takve zamene vraćaju početni predznak, što objašnjava pozitivan proizvod dva negativna broja.",
    "caution": "Pravila predznaka množenja ne koriste se za sabiranje. Ukupni pad je negativna promena, dok početno stanje mora biti poznato da bismo dobili konačno stanje.",
    "extraFormulas": [
      "a·1=a",
      "a·(−1)=−a",
      "a·b+a·c=a·(b+c)",
      "n istih sabiraka a daju n·a"
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
      "Deljenje odgovara pitanju kojim brojem treba pomnožiti delilac da bismo dobili deljenik. U zapisu a:b=c broj a je deljenik, b delilac, a c količnik. Delilac mora biti različit od nule.",
      "Količnik nenultih brojeva istog predznaka je pozitivan, a različitih predznaka negativan. Nula podeljena nenultim brojem daje nulu. Dva cela broja ne moraju imati celobrojni količnik; u ovim zadacima računamo slučajeve sa celobrojnim rezultatom."
    ],
    "steps": [
      "Najpre proveri da delilac nije nula, pa odredi predznak količnika.",
      "Podeli apsolutne vrednosti i napiši odgovarajući predznak. Proveri da količnik puta delilac daje deljenik.",
      "Ako je nepoznat delilac u a:x=c, iskoristi x·c=a i pronađi činilac x; u nenultim slučajevima x=a:c.",
      "Za uslov znaka količnika utvrdi koji predznak mora imati x. Ako je zadato i |x|, izdvoji odgovarajuću mogućnost.",
      "U tekstualnom zadatku ravnomernu promenu u jednom danu dobijaš deljenjem ukupne promene brojem dana; predznak promene sačuvaj."
    ],
    "why": "Pravila predznaka deljenja dolaze iz pravila množenja. Sa nulom kao deliocem množenje ne može dati jedinstven traženi količnik.",
    "caution": "0:a i a:0 nisu isti izrazi. Ni 0:0 nije dozvoljeno. Kada je nepoznat delilac, proveri i jednakost i uslov x≠0.",
    "extraFormulas": [
      "a:b=c ⇔ b·c=a, b≠0",
      "a:x=c ⇒ x=a:c, ako su a i c nenulti",
      "a:1=a",
      "a:(−1)=−a"
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
      "Množenje i deljenje imaju jednak prioritet. Bez zagrada računamo redom sleva nadesno: rezultat prethodne operacije ulazi u sledeću. Zagrade mogu namerno promeniti taj redosled.",
      "Znak se proverava pri svakoj operaciji. Nepoznato početno stanje možemo dobiti tako što od poznatog završnog rezultata vratimo korake obrnutim redom. U tekstualnom zadatku najpre odredimo ukupnu promenu, pa je ravnomerno raspodelimo po periodima."
    ],
    "steps": [
      "Proveri delioce i izdvoji zagrade. U lancu bez zagrada obeleži prvu operaciju sleva.",
      "Izračunaj svaku operaciju i zapiši međurezultat sa predznakom pre prelaska na sledeću.",
      "Za nepoznati činilac podeli poznati proizvod drugim nenultim činiocem. Za nepoznati početak lanca poništi poslednju operaciju prvom.",
      "Pri proceni znaka proveri svaki negativni činilac ili delilac. Ako se pojavi nula, proveri da li je deljenje koje sledi i dalje dozvoljeno.",
      "Prosečnu promenu po periodu računaj tek kada sabereš sve promene i utvrdiš ukupno trajanje. Proveri rezultat u prvobitnom lancu."
    ],
    "why": "Bez zagrada zapis unapred određuje redosled. Promeniti a:b·c u a:(b·c) znači zameniti dve različite operacije jednom drugom operacijom.",
    "caution": "Množenje nema prednost nad deljenjem. Ne objedinjaj susedne brojeve u imenilac ako takve zagrade nisu zadate.",
    "extraFormulas": [
      "a:b·c=(a:b)·c, b≠0",
      "x·a=b ⇒ x=b:a, a≠0",
      "Prosečna promena = ukupna promena : broj perioda"
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
      "Brojevni izraz povezuje brojeve i operacije u jednu celinu. Zagrade izdvajaju deo koji računamo pre ostatka; zatim slede množenje i deljenje, pa sabiranje i oduzimanje. Operacije istog prioriteta izvode se sleva nadesno.",
      "U tekstualnom zadatku reč proizvod označava množenje, a od jednog broja oduzmi proizvod traži da taj proizvod bude ceo umanjilac. Zagrade su posebno važne ako množimo zbir ili razliku. Vrednosti dva izraza poredi tek kada svaki izračunaš zasebno."
    ],
    "steps": [
      "Pročitaj izraz kao celinu i obeleži deo koji računamo prvi. U tekstu izdvoji početno stanje, ponavljanje i promenu.",
      "Izračunaj zagrade, sačuvaj ostatak zapisa, pa postupno pređi na množenje i deljenje.",
      "Na kraju sabiraj i oduzimaj, uz proveru dvostrukog minusa. U svakom redu menjaj samo već izračunati deo.",
      "Ako proizvod treba da bude nula i jedan činilac je nenulti, drugi mora biti nula; iz toga odredi nepoznati broj u zagradi.",
      "Pri izboru rasporeda zagrada proveri koju operaciju svaki raspored stavlja na prvo mesto. Dobijenu vrednost protumači u kontekstu."
    ],
    "why": "Prioritet omogućava da isti zapis svi računamo jednako. Zagrade menjaju grupisanje, pa isti brojevi i operacije mogu dati različite rezultate.",
    "caution": "Ne računaj ceo izraz sleva nadesno pre nego što proveriš prioritete. Operacioni minus i predznak negativnog broja nisu ista uloga znaka.",
    "extraFormulas": [
      "a·b=0 ⇒ a=0 ili b=0",
      "Početno stanje + broj ponavljanja · promena = stanje nakon ponavljanja"
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
      "Trougao određuju tri nekolinearna temena i tri duži koje ih povezuju. U trouglu ABC naspram temena A leži BC=a, naspram B leži CA=b, a naspram C leži AB=c. Dve stranice su susedne ako imaju zajedničko teme.",
      "Prema stranicama razlikujemo raznostraničan, jednakokraki i jednakostraničan trougao; prema najvećem uglu oštrougli, pravougli i tupougli. Isti trougao dobija opis prema oba kriterijuma. U jednakokrakom su uglovi naspram jednakih stranica jednaki, a jednakostranični ima tri jednaka ugla."
    ],
    "steps": [
      "Na skici najpre označi temena i naspramne stranice. Zajedničko teme dve strane pronađi kao njihovo zajedničko slovo.",
      "Pri podeli prema stranicama prebroj jednake dužine; pri podeli prema uglovima pronađi najveći ugao i uporedi ga sa 90°.",
      "Obim računaj kao zbir tri dužine u istoj jedinici. Nepoznatu stranicu dobijaš oduzimanjem zbira dve poznate od obima.",
      "Ako su poznati zbirovi sva tri para stranica, saberi ta tri zbira. Svaka stranica tada se pojavljuje dvaput, pa dobijeni zbir prepolovi.",
      "Proveri svaki opis nezavisno: jednakost uglova može otkriti jednakost naspramnih stranica."
    ],
    "why": "Obim prati celu granicu trougla. Kod zbirova parova svaka stranica uračunata je dva puta; podela prema uglovima i prema stranicama daje različite informacije o istoj figuri.",
    "caution": "Naspramna stranica ne sadrži slovo temena. Oštrougli trougao mora imati sva tri oštra ugla; dva oštra ugla nisu dovoljna za taj zaključak.",
    "extraFormulas": [
      "c=O−a−b",
      "(a+b)+(b+c)+(c+a)=2O",
      "Pravougli: najveći ugao = 90°; tupougli: najveći ugao > 90°"
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
      "Tri unutrašnja ugla svakog trougla imaju zbir 180°. Svaki od njih je veći od 0° i manji od 180°. Za proveru zadatih uglova zato nije dovoljno da izgledaju kao uglovi: moraju ispunjavati oba uslova.",
      "U pravouglom trouglu jedan ugao zauzima 90°, pa zbir preostala dva iznosi 90°. Ako su uglovi opisani istim nepoznatim brojem, njegovim umnošcima ili razlikama, taj opis pretvaramo u jednakost sa zbirom 180°."
    ],
    "steps": [
      "Obeleži uglove α, β i γ i zapiši α+β+γ=180°.",
      "Za jedan nepoznati ugao oduzmi zbir poznatih od 180°. U tabeli primeni isti postupak za svaki red.",
      "Za proveru postojanja proveri pozitivan iznos svakog ugla i zbir 180°. Dva prava ili dva tupa ugla već onemogućavaju takav zbir.",
      "Za uglove x, kx i mx saberi koeficijente i odredi x iz (1+k+m)x=180°. Potom izračunaj sve uglove.",
      "Kod opisane razlike prvo izrazi drugi ugao pomoću prvog, nađi treći iz zbira i tek tada odredi koji je najveći."
    ],
    "why": "Kroz jedno teme može se povući prava paralelna naspramnoj stranici. Uglovi uz tu pravu koji odgovaraju uglovima trougla zajedno čine opružen ugao od 180°.",
    "caution": "180° je zbir svih unutrašnjih uglova, a ne veličina jednog ugla. Kada pronađeš x, proveri sve uglove; x ne mora biti najveći traženi ugao.",
    "extraFormulas": [
      "U pravouglom trouglu α+β=90°, ako je γ=90°",
      "x+kx+mx=(1+k+m)x",
      "0°<α, β, γ<180°"
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
      "Spoljašnji ugao nastaje kada jednu stranicu trougla produžimo preko temena. On je susedan unutrašnjem uglu kod tog temena i sa njim ima zbir 180°. Dva preostala unutrašnja ugla su mu nesusedna.",
      "Spoljašnji ugao jednak je zbiru dva nesusedna unutrašnja ugla. Ako uzmemo po jedan spoljašnji ugao kod svakog temena, njihov zbir je 360°. Kod istog temena mogu se produžiti obe stranice; dva tako dobijena spoljašnja ugla imaju istu veličinu."
    ],
    "steps": [
      "Pronađi teme kod kojeg je stranica produžena. Obeleži njemu susedni unutrašnji ugao i odvoji druga dva.",
      "Kada je poznat susedni unutrašnji ugao, oduzmi ga od 180°. Kada su poznata dva nesusedna, saberi ih.",
      "Za nepoznati nesusedni unutrašnji ugao od spoljašnjeg oduzmi drugi poznati nesusedni. Ako su dva nesusedna jednaka, prepolovi spoljašnji.",
      "Za treći spoljašnji ugao oduzmi zbir dva poznata od 360°, uz izbor po jednog ugla kod svakog temena.",
      "Proveri rezultat i vezom sa unutrašnjim uglom: susedni unutrašnji i spoljašnji moraju dati 180°."
    ],
    "why": "Zbir tri unutrašnja ugla je 180°, kao i zbir jednog unutrašnjeg i njemu susednog spoljašnjeg. Oduzimanjem zajedničkog ugla dobijamo zbir dva nesusedna.",
    "caution": "Nemoj spoljašnjem dodavati njemu susedni unutrašnji ugao kao da je nesusedni. Zbir 360° važi za tri izabrana spoljašnja ugla, ne za svih šest.",
    "extraFormulas": [
      "β_1=α+γ",
      "γ_1=α+β",
      "β=α_1−γ"
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
      "U istom trouglu naspram veće stranice leži veći ugao, a naspram jednakih stranica jednaki uglovi. Važi i obrnuto: poređenje uglova određuje poređenje naspramnih stranica. Zato najpre moramo tačno povezati svaki ugao sa njegovom stranom.",
      "U jednakokrakom trouglu dve jednake stranice su kraci, a treća osnovica. Uglovi uz osnovicu su jednaki, dok je ugao između krakova ugao pri vrhu. U pravouglom trouglu najveći ugao je pravi, pa je njemu naspramna hipotenuza najduža stranica."
    ],
    "steps": [
      "Zapiši parove a↔α, b↔β, c↔γ. Za naziv stranice poput AC pronađi teme koje joj ne pripada.",
      "Poređaj poznate veličine, pa prenesi potpuno isti poredak na njihove naspramne elemente.",
      "Ako jedan ugao nije poznat, prvo ga pronađi iz zbira 180°. Tek potom poredi sva tri ugla ili strane.",
      "Za jednakokraki trougao obeleži jednake uglove uz osnovicu. Ugao pri vrhu dobijaš kao 180° minus dvostruki ugao na osnovici.",
      "Pri kombinovanju jednakosti i nejednakosti sačuvaj oba podatka u završnom poretku i proveri uparenost oznaka."
    ],
    "why": "Jednaki kraci daju simetričan položaj uglova uz osnovicu. Opšte pravilo povezuje veličine naspramnih elemenata unutar istog trougla.",
    "caution": "Veći ugao se poredi sa naspramnom, a ne sa susednom stranom. Ovo pravilo poredi strane istog trougla; ne određuje dužine iz samih uglova.",
    "extraFormulas": [
      "AB=AC ⇒ ∠B=∠C",
      "Ugao pri vrhu = 180°−2·ugao na osnovici",
      "Ugao na osnovici = (180°−ugao pri vrhu):2"
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
      "Tri pozitivne dužine grade trougao samo ako je svaka manja od zbira druge dve. Za tri poznate dužine dovoljno je proveriti najdužu: zbir dve kraće mora biti strogo veći od nje. Pri jednakosti dobijamo izravnate duži, bez unutrašnje oblasti trougla.",
      "Za poznate strane a i b treća strana x mora biti strogo između |a−b| i a+b. Donja i gornja granica nisu dozvoljene. Ako se traže cele dužine, biramo samo cele brojeve u tom otvorenom rasponu."
    ],
    "steps": [
      "Za tri poznate strane pronađi najdužu i uporedi je sa zbirom druge dve.",
      "Za nepoznatu treću stranu izračunaj apsolutnu razliku i zbir poznatih strana, pa zapiši |a−b|<x<a+b.",
      "Za najmanju ili najveću prirodnu dužinu biraj prvi dozvoljeni ceo broj iznad donje ili poslednji ispod gornje granice. Za broj mogućnosti nabroj ih ili izračunaj razliku celobrojnih granica minus 1.",
      "Ako jednakokraki trougao ima dve različite poznate dužine, proveri obe mogućnosti za krakove: u svakoj ponovi jednaku dužinu dvaput.",
      "Za najveći celobrojni obim prvo odredi najveću dozvoljenu treću stranu, pa saberi tri strane. Proveri strogu nejednakost."
    ],
    "why": "Dve kraće stranice moraju moći da se sretnu iznad ili ispod najduže. Ako je njihov zbir jednak najdužoj, mogu samo da se polože na istu duž.",
    "caution": "Granice nisu uključene: znak < ne može se zameniti sa ≤. Duža od dve različite date dužine nije automatski krak; zaključak zahteva proveru obe mogućnosti.",
    "extraFormulas": [
      "a+b>c, a+c>b, b+c>a",
      "Za celobrojne granice L<U: L<x<U daje U−L−1 celih vrednosti",
      "O=a+b+x"
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
      "Na brojnoj pravoj veći broj je desno. Suprotni brojevi jednako su udaljeni od nule, pa imaju jednaku apsolutnu vrednost. Apsolutna vrednost je rastojanje od nule i zato nikada nije negativna.",
      "Pri sabiranju jednakih znakova saberi apsolutne vrednosti i zadrži znak; pri različitim znacima oduzmi manju apsolutnu vrednost od veće i uzmi znak broja sa većom apsolutnom vrednošću. Oduzimanje zameni sabiranjem suprotnog broja. Razlomke sabiraš i oduzimaš tek kada imaju zajednički imenilac."
    ],
    "steps": [
      "Najpre odredi šta se traži: poređenje, računanje, apsolutna vrednost ili nepoznat broj.",
      "Izračunaj zagrade i apsolutne vrednosti, zatim stepene, potom množenje i deljenje, pa sabiranje i oduzimanje.",
      "U proizvodu dva nenulta broja isti znaci daju plus, a različiti minus; kvadrat je proizvod broja sa samim sobom.",
      "Razlomke svedi na zajednički imenilac, računaj sa brojiocima i skrati rezultat.",
      "Kod jednačine prvo uredi znakove, zatim istom operacijom na obe strane izdvoji nepoznatu i proveri u početnom zapisu."
    ],
    "why": "Pravila sa znacima, razlomcima i zagradama potrebna su u svim narednim lekcijama; provera vraćanjem u početni zapis otkriva greške.",
    "caution": "Znak minus ispred broja, znak oduzimanja i negativan broj u zagradi nemaju istu ulogu. Ne sabiraj imenioce razlomaka.",
    "extraFormulas": [
      "a−b=a+(−b)",
      "[[frac:a|b]]−[[frac:c|d]]=[[frac:ad−bc|bd]], b≠0, d≠0",
      "|a|≥0",
      "(−a)·(−b)=a·b"
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
      "Decimalni zapis razlomka dobijaš deljenjem brojioca imeniteljem. Deljenje se završava kada ostatak postane nula; ako se isti nenulti ostatak ponovi, ponoviće se i isti niz decimalnih cifara. Taj niz je period.",
      "Zapis 0,4(26) znači da se cifra 4 pojavljuje pre perioda, a zatim se grupa 26 ponavlja bez kraja. Dopisivanje nula na kraj konačnog decimalnog zapisa ne menja broj. Pri poređenju posmatraj najpre cele delove, pa redom desetinke, stotinke i ostala mesta."
    ],
    "steps": [
      "Za konačan zapis proširi razlomak na imenilac 10, 100, 1000… kada je to moguće; inače izvrši deljenje.",
      "Prati ostatke pri deljenju i označi najmanju grupu cifara koja se stalno ponavlja.",
      "Za poređenje prevedi sve brojeve u isti oblik i poredi cifre po njihovoj mesnoj vrednosti.",
      "Za cifru na zadatom mestu izdvoji neperiodični početak, pa preostali redni broj mesta podeli dužinom perioda.",
      "Ostatak pri deljenju pokazuje mesto u periodu; ostatak nula označava poslednju cifru perioda."
    ],
    "why": "Različiti zapisi predstavljaju isti broj; period omogućava da odrediš veoma udaljenu decimalu bez ispisivanja celog niza.",
    "caution": "Beskonačan periodičan zapis nije konačan broj decimala prepisan sa kalkulatora. Zagrade označavaju ceo period, a nule ne preskačeš.",
    "extraFormulas": [
      "[[frac:a|b]]=a:b, b≠0",
      "0,4(26)=0,4262626…",
      "0,5=0,50=0,500"
    ],
    "sourcePages": "Udžbenik 7, str. 21–22; septembarski plan, časovi 6–7.",
    "visuals": [
      "Traka decimalnih mesta sa drugačijom bojom za neperiodični početak i ponavljajući period."
    ]
  },
  "decimalni-u-razlomak": {
    "aim": "Prevedi konačan ili jednostavan periodičan zapis u razlomak, sačuvaj znak i uporedi različite zapise.",
    "idea": [
      "Konačan decimalni zapis predstavlja određeni broj desetinki, stotinki ili hiljaditih. U brojilac pišeš ceo zapis bez zareza, a u imenilac 1 sa onoliko nula koliko ima decimala. Znak pripada celom broju, uključujući njegov ceo i decimalni deo.",
      "Periodičan zapis ima beskonačno mnogo decimala, pa ga ne pretvaraš pomoću konačnog imenioca 10 ili 100. Označi ga sa x i pomnoži odgovarajućim stepenima broja 10 tako da se periodi poravnaju. Oduzimanjem tih jednakosti ponavljajući deo se poništava i ostaje jednačina bez beskonačnog zapisa."
    ],
    "steps": [
      "Prebroj decimalna mesta, zapiši razlomak i skrati ga zajedničkim deliocem brojioca i imenioca.",
      "Pri prelasku iz razlomka u decimalni zapis podeli brojilac imeniteljem ili proširi na odgovarajući decimalni imenilac.",
      "Za čist period dužine k postavi x, napiši 10^k·x i oduzmi x; za početak dužine m oduzmi 10^m·x od 10^(m+k)·x.",
      "Za poređenje pretvori brojeve u isti oblik; u tabeli primeni isti postupak na svaki član.",
      "Ako se traži nepoznata u zbiru, prvo je izdvoji oduzimanjem poznatog sabirka, pa dobijeni broj napiši kao razlomak."
    ],
    "why": "Mesna vrednost određuje imenilac, a poravnavanje perioda omogućava tačno pretvaranje beskonačnog periodičnog zapisa.",
    "caution": "U zapisu 0,0… početne nule posle zareza računaju se kao decimalna mesta. Negativan broj veći od jednog po apsolutnoj vrednosti ne svodi se samo na decimalni deo.",
    "extraFormulas": [
      "0,(d)=[[frac:d|9]], d je cifra",
      "0,(ab)=[[frac:10a+b|99]]",
      "x+c=d ⇒ x=d−c"
    ],
    "sourcePages": "Udžbenik 7, str. 11 i 21–22; septembarski plan, časovi 6–7.",
    "visuals": [
      "Tabela: decimalno mesto → decimalni imenilac → skraćen razlomak.",
      "Dva poravnata periodična zapisa koja se oduzimaju."
    ]
  },
  "kvadrat-racionalnog": {
    "aim": "Izračunaj kvadrat celog, decimalnog i razlomljenog broja i objasni ulogu znaka i zagrada.",
    "idea": [
      "Kvadrat broja je proizvod tog broja sa samim sobom. Zbog pravila o znaku proizvoda, kvadrat svakog nenultog broja je pozitivan, a kvadrat nule je nula. Broj i njegov suprotan broj imaju jednak kvadrat.",
      "Kod razlomka kvadriraju se brojilac i imenilac. Decimalni broj možeš pomnožiti samim sobom ili prevesti u razlomak. U geometriji kvadrat dužine stranice daje površinu kvadrata, pa se i merna jedinica kvadrira."
    ],
    "steps": [
      "Odredi osnovu stepena: ono što je u zagradi kvadrira se kao celina.",
      "Zapiši proizvod dva jednaka činioca i primeni pravilo znaka.",
      "Kod decimalnog zapisa računaj kao pri množenju decimalnih brojeva; kod razlomka kvadriraj oba njegova dela.",
      "Kvadrate poredi preko apsolutnih vrednosti osnova: veća apsolutna vrednost daje veći kvadrat.",
      "U razlici kvadrata suprotnih brojeva najpre uoči jednake članove; za površinu upiši kvadratnu jedinicu."
    ],
    "why": "Zagrade određuju koji broj kvadriraš, a apsolutna vrednost objašnjava zašto su kvadrati suprotnih brojeva jednaki.",
    "caution": "Bez zagrada u zapisu −a^2 najpre se računa a^2, pa uzima njegov suprotan broj. Kvadriranje nije množenje osnove sa 2.",
    "extraFormulas": [
      "a^2≥0",
      "−a^2=−(a^2)",
      "|a|>|b| ⇒ a^2>b^2",
      "P_kvadrata=a^2"
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
      "Potpun kvadrat prirodnog broja dobijaš kvadriranjem nekog prirodnog broja. Tabela kvadrata pomaže i pri računanju unapred i pri traženju broja čiji je kvadrat poznat. I suprotni brojevi imaju isti kvadrat.",
      "Ako je zadati kvadrat pozitivan i prepoznaješ ga kao b^2, jednačina ima dva suprotna rešenja. Kvadrat jednak nuli daje samo nulu, dok kvadrat ne može biti negativan. Uslov da je broj pozitivan ili da pripada određenom intervalu bira prihvatljive brojeve."
    ],
    "steps": [
      "Izračunaj ili prepoznaj kvadrat uz pomoć množenja i tabele.",
      "Pre traženja nepoznate proveri da li je zadati kvadrat negativan, nula ili pozitivan.",
      "Za pozitivan poznat kvadrat navedi oba suprotna broja, osim ako uslov izdvaja samo jedan.",
      "Kod razlomka proveri kvadrate brojioca i imenioca; znak konačnog kvadrata mora biti nenegativan.",
      "Ako je kvadrat celog izraza nula, taj izraz je nula. Kod ograničenja uporedi kvadrate kandidata i proveri stroge granice."
    ],
    "why": "Kvadriranje briše znak nenultog broja, zato se pri obrnutom traženju broja moraju proveriti i pozitivna i negativna mogućnost.",
    "caution": "Nemoj automatski uzeti samo pozitivan broj. Uslov x>0 menja skup prihvatljivih rešenja; izraz kvadriran do nule mora biti jednak nuli.",
    "extraFormulas": [
      "x^2=0 ⇔ x=0",
      "x^2<0 nema realnih rešenja",
      "x^2=b^2, b>0 ⇒ x=b ili x=−b",
      "(k·x)^2=0, k≠0 ⇒ x=0"
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
      "Racionalan broj možeš zapisati kao razlomak dva cela broja sa imeniteljem različitim od nule. Njegov decimalni zapis je konačan ili beskonačan periodičan. Iracionalan broj ne možeš tako zapisati; njegov decimalni zapis je beskonačan i neperiodičan.",
      "Racionalni i iracionalni brojevi zajedno čine realne brojeve, a nijedan broj nije istovremeno racionalan i iracionalan. Prirodni brojevi su celi, celi su racionalni, a racionalni su realni. Broj π je iracionalan; njegovi konačni decimalni i razlomljeni zapisi služe kao približne vrednosti."
    ],
    "steps": [
      "Za konačan decimalni zapis prepoznaj racionalan broj, bez obzira na broj decimala ili znak.",
      "U beskonačnom zapisu proveri da li se od nekog mesta ponavlja ista konačna grupa cifara.",
      "Za neperiodičan zapis mora biti poznato pravilo nastavka; nekoliko napisanih cifara samo po sebi nije dokaz.",
      "Pri određivanju pripadnosti skupu prati uključenost N ⊂ Z ⊂ Q ⊂ R.",
      "Za π koristi oznaku približne vrednosti kada navodiš decimalnu ili razlomljenu procenu."
    ],
    "why": "Vrsta decimalnog zapisa pokazuje da li je broj racionalan, a uključenost skupova objašnjava zašto jedan broj pripada većem broju skupova.",
    "caution": "Beskonačan zapis ne znači automatski iracionalan broj. Pravilno ponavljanje jedne grupe razlikuje se od obrasca u kom blokovi stalno menjaju dužinu.",
    "extraFormulas": [
      "N ⊂ Z ⊂ Q ⊂ R",
      "Q ∩ I=∅",
      "Q ∪ I=R",
      "π≈3,14; π≠3,14"
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
      "Brojna prava ima početak O, jediničnu duž i pozitivan smer. Svakom realnom broju odgovara tačka; koordinata kaže na kojoj strani nule je tačka i koliko je udaljena od nje. Veći broj nalazi se desno od manjeg.",
      "Suprotni brojevi imaju isti razmak od nule i leže na suprotnim stranama. Kod negativnih brojeva bliži nuli je veći broj. Za π koristi poznato ograničenje između susednih celih brojeva i dovoljno preciznu približnu vrednost kada ga porediš sa decimalnim brojem."
    ],
    "steps": [
      "Proveri gde je nula, koji je pozitivan smer i koliko vredi jedan razmak između oznaka.",
      "Odredi između kojih susednih oznaka ili celih brojeva se nalazi zadati broj.",
      "Decimalne brojeve poredi po mesnim vrednostima i rasporedi od levog ka desnom.",
      "Za suprotan broj promeni znak i zadrži isto rastojanje od nule; tako određuješ i položaj −π.",
      "Kod tačke najbliže nuli poredi apsolutne vrednosti; kod više uslova proveri da li dobijena koordinata ispunjava svaki."
    ],
    "why": "Položaj na pravoj povezuje poređenje, suprotan broj i apsolutnu vrednost u jednu istu predstavu.",
    "caution": "Jedan podeljak ne mora vredeti 1. Sa crteža čitaš procenu položaja, a uslov zadatka određuje tačnu koordinatu; približni zapis za π piši sa ≈.",
    "extraFormulas": [
      "d(A,O)=|x_A|",
      "x i −x su suprotni brojevi",
      "a<b ⇒ A(a) je levo od B(b)",
      "−4<−π<−3"
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
      "Interval sadrži realne brojeve između svojih granica. Uglasta zagrada znači da je granica uključena, a obla da nije. Na brojnoj pravoj uključenu granicu prikazujemo punom tačkom, a isključenu praznom.",
      "Apsolutna vrednost |x−c| je rastojanje broja x od broja c. Uslov da je to rastojanje manje od r daje sve tačke između c−r i c+r, bez granica; uslov najviše r uključuje granice. Ako moraju važiti dva intervalna uslova, traži se njihov zajednički deo."
    ],
    "steps": [
      "Za svaku granicu posebno pogledaj da li nejednakost koristi < ili ≤, odnosno > ili ≥.",
      "Zapiši interval i nacrtaj odgovarajuće prazne ili pune krajnje tačke.",
      "Pripadnost proveri pomoću obe nejednakosti; pri brojanju celih brojeva zapiši samo one koji ispunjavaju obe.",
      "Iz |x−c|<r ili |x−c|≤r odredi centar c, poluprečnik r i dve granice c−r i c+r.",
      "Za dva istovremena uslova uzmi presek intervala; zajednička granica je uključena samo ako je oba uslova dozvoljavaju."
    ],
    "why": "Interval je kratak zapis nejednakosti, a apsolutna vrednost opisuje jednako rastojanje ulevo i udesno od centra.",
    "caution": "Granice čitaj svaku zasebno. U izrazu |x−c| centar je c, pa se interval ne mora nalaziti oko nule.",
    "extraFormulas": [
      "x∈(a,b) ⇔ a<x<b",
      "x∈[a,b) ⇔ a≤x<b",
      "|x−c|<r ⇔ c−r<x<c+r, r>0",
      "|x−c|≤r ⇔ c−r≤x≤c+r, r≥0"
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
      "Kvadratni koren nenegativnog broja a je jedini nenegativan broj čiji je kvadrat a. Koren nule je nula, a koren pozitivnog broja je pozitivan. Negativan broj nema kvadratni koren u skupu realnih brojeva.",
      "Znak korena predstavlja jednu vrednost. Jednačina x^2=a za a>0 ima dve suprotne vrednosti, pa se ne sme poistovetiti sa određivanjem samog korena. Kod korena kvadrata broja dobijaš njegovu apsolutnu vrednost, a kod stranice kvadrata uzimaš pozitivan rezultat jer dužina mora biti pozitivna."
    ],
    "steps": [
      "Proveri da li je broj pod korenom nenegativan.",
      "Pronađi nenegativan kandidat i potvrdi da njegov kvadrat daje broj pod korenom; isti postupak važi za decimalne brojeve.",
      "Ako se traže sva rešenja jednačine, posebno navedi oba znaka za pozitivnu desnu stranu.",
      "Za [[sqrt:t^2]] odredi |t|; kod t<0 rezultat je −t, a kod t≥0 rezultat je t.",
      "U obrnutom zadatku [[sqrt:a]]=b proveri b≥0, pa kvadriraj obe strane; za stranicu iz površine primeni P=a^2."
    ],
    "why": "Definicija zahteva nenegativan rezultat, zato kvadratni koren ima jednu vrednost i razlikuje se od rešavanja kvadratne jednačine.",
    "caution": "Znak ± ne stavlja se ispred vrednosti samog kvadratnog korena. Kod korena kvadrata negativne osnove prvo proveri znak osnove.",
    "extraFormulas": [
      "([[sqrt:a]])^2=a, a≥0",
      "x^2=a, a>0 ⇒ x=−[[sqrt:a]] ili x=[[sqrt:a]]",
      "[[sqrt:a]]=b ⇒ a=b^2, b≥0",
      "a_kvadrata=[[sqrt:P]], P>0"
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
      "Tačan koren dobijaš prepoznavanjem nenegativnog broja čiji kvadrat daje zadatu vrednost. To važi i za razlomak ili veoma mali decimalni broj: možeš izabrati kandidat i proveriti ga kvadriranjem, bez uvođenja novih pravila za proizvod korena.",
      "Ako broj pod korenom nije poznat potpun kvadrat, pronađi dva susedna kvadrata između kojih se nalazi. Tada je njegov koren između odgovarajućih nenegativnih brojeva. Tačan zapis sa korenom i približan decimalni zapis imaju različitu namenu."
    ],
    "steps": [
      "Za poznat kvadrat upotrebi tabelu kvadrata; za razlomak ili decimalni broj proveri kvadrat izabranog nenegativnog kandidata.",
      "Za ograničenje pronađi n tako da n^2<a<(n+1)^2; ako a odgovara granici, koristi jednakost.",
      "Za poređenje sa nenegativnim brojem b uporedi a sa b^2.",
      "Za traženu decimalnu tačnost zadrži odgovarajući broj mesta i pogledaj sledeću cifru: manja od 5 zadržava, veća od 5 povećava poslednju zadržanu cifru.",
      "Ako je sledeća cifra 5 i postoje dalje nenulte cifre, povećaj; za tačnu sredinu primeni dogovoreno pravilo. Približan rezultat napiši sa ≈."
    ],
    "why": "Na nenegativnim brojevima veći broj ima veći kvadrat; zato poređenje kvadrata određuje granice i položaj korena.",
    "caution": "Ne mešaj tačno ograničenje sa zaokruženom vrednošću. U dostavljenom udžbeniku tačna sredina zaokružuje se na parnu poslednju cifru; zadaci ove lekcije ne sadrže takav slučaj.",
    "extraFormulas": [
      "a<b^2 ⇒ [[sqrt:a]]<b, a≥0, b≥0",
      "a>b^2 ⇒ [[sqrt:a]]>b, a≥0, b≥0",
      "n^2<a<(n+1)^2 ⇒ n<[[sqrt:a]]<n+1"
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
      "Za nenegativne činioce koren proizvoda jednak je proizvodu korena. Za nenegativan brojilac i pozitivan imenilac koren količnika jednak je količniku korena. Ove jednakosti omogućavaju da potpuno kvadratne činioce izdvojiš ispred korena.",
      "Koren zbira ili razlike ne rastavlja se istim pravilom. Takođe, koren kvadrata bilo kog realnog broja ostaje njegova apsolutna vrednost. Pri množenju korena možeš spojiti nenegativne brojeve pod jedan koren, a zatim prepoznati potpun kvadrat."
    ],
    "steps": [
      "Proveri uslove: brojevi pod odvojenim korenima moraju biti nenegativni, a imenilac različit od nule.",
      "Izaberi oblik koji olakšava računanje: rastavi broj pod korenom ili spoji proizvod korena.",
      "Za izdvajanje pronađi kvadratni činilac k^2 i zapiši [[sqrt:k^2·m]]=|k|·[[sqrt:m]].",
      "Kod tablice računaj svaki član po istom pravilu; kod obrnutog zadatka prvo izdvoji nepoznati koren deljenjem.",
      "Proveri uslov za nepoznatu i kvadriraj izolovanu jednakost; pri pronalaženju greške proveri i vrstu operacije."
    ],
    "why": "Proizvod nenegativnih korena je nenegativan, a njegov kvadrat daje proizvod početnih brojeva, pa odgovara definiciji korena proizvoda.",
    "caution": "Pravilo za proizvod ne prenosi se na sabiranje i oduzimanje. Formula [[sqrt:t^2]]=t važi samo kada je t≥0.",
    "extraFormulas": [
      "[[sqrt:a·b]]=[[sqrt:a]]·[[sqrt:b]], a≥0, b≥0",
      "[[sqrt:[[frac:a|b]]]]=[[frac:√a|√b]], a≥0, b>0",
      "[[sqrt:k^2·m]]=|k|·[[sqrt:m]], m≥0"
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
      "Pitagorina teorema povezuje stranice pravouglog trougla. Katete obrazuju pravi ugao, a hipotenuza leži naspram njega i najduža je stranica. Ako su katete a i b, a hipotenuza c, zbir njihovih kvadrata jednak je kvadratu hipotenuze.",
      "Geometrijski, zbir površina kvadrata nad katetama jednak je površini kvadrata nad hipotenuzom. Zato se sabiraju kvadrati dužina, a ne same dužine. Za površinu pravouglog trougla katete već predstavljaju osnovicu i odgovarajuću visinu."
    ],
    "steps": [
      "Pronađi ili označi pravi ugao i stranicu naspram njega; pri ∠C=90° hipotenuza je AB.",
      "Sve dužine izrazi u istoj jedinici i napiši c^2=a^2+b^2.",
      "Ako se traži c^2, rezultat je zbir kvadrata; ako se traži c, potom uzmi pozitivan koren.",
      "Za površinu koristi polovinu proizvoda kateta; za Pitagorinu trojku dopuni nedostajući pozitivni član preko kvadrata.",
      "Kod normalnih delova puta prečica je hipotenuza, a ušteda je dužina prvobitnog puta umanjena za prečicu."
    ],
    "why": "Kvadrati nad stranicama objašnjavaju vezu između kateta i hipotenuze, a pravi ugao daje uslov pod kojim ta veza važi.",
    "caution": "Teoremu primenjuješ tek kada je potvrđen pravi ugao. Ne zameni c sa c² i ne oduzimaj kvadrate kada tražiš hipotenuzu.",
    "extraFormulas": [
      "c>a i c>b",
      "P=[[frac:a·b|2]]",
      "O=a+b+c",
      "Ušteda=a+b−c"
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
      "Iz osnovne jednakosti a^2+b^2=c^2 izvodiš izraz za onu stranicu koja nedostaje. Za hipotenuzu sabiraš kvadrate kateta; za katetu oduzimaš kvadrat poznate katete od kvadrata hipotenuze. Dužina se dobija tek uzimanjem pozitivnog korena.",
      "Podaci moraju opisivati mogući trougao: dužine su pozitivne, a hipotenuza je veća od svake katete. Kada se traže obim ili površina, prvo pronađi nedostajuću stranicu i tek onda koristi odgovarajuću geometrijsku formulu."
    ],
    "steps": [
      "Nacrtaj skicu, označi pravi ugao i pouzdano izdvoji hipotenuzu.",
      "Pre računanja proveri da li su dužine pozitivne i da li je hipotenuza duža od poznate katete.",
      "Napiši Pitagorinu jednakost i izdvoji kvadrat nepoznate stranice; izračunaj razliku ili zbir.",
      "Uzmi pozitivan koren, pa proveri početnu jednakost i odnos dužina.",
      "Za obim saberi sve tri stranice; za površinu uzmi polovinu proizvoda kateta. U modelu merdevina hipotenuza je njihova dužina."
    ],
    "why": "Izvođenje formule iz iste početne jednakosti smanjuje mogućnost zamene sabiranja i oduzimanja.",
    "caution": "Pozitivna razlika kvadrata još predstavlja kvadrat dužine, a ne samu dužinu. Podatak nazvan c nije dovoljan da bude hipotenuza ako ne ispunjava geometrijske uslove.",
    "extraFormulas": [
      "c^2−a^2>0 za nepoznatu pozitivnu katetu",
      "O=a+b+c",
      "P=[[frac:a·b|2]]"
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
      "Dijagonala pravougaonika deli ga na dva pravougla trougla. Njegove stranice su katete, a dijagonala je hipotenuza; zato je d^2=a^2+b^2. Ako je poznata dijagonala i jedna stranica, drugu dobijaš oduzimanjem kvadrata.",
      "Kvadrat ima jednake katete u pomoćnom trouglu, pa je d^2=2a^2 i d=a·[[sqrt:2]]. Obrnuto, iz dijagonale možeš odrediti stranicu, obim i površinu. Površinu kvadrata možeš dobiti i direktno iz dijagonale kao d^2/2."
    ],
    "steps": [
      "Na skici označi dijagonalu i pravi ugao između susednih stranica.",
      "Za pravougaonik izaberi d^2=a^2+b^2 ili a^2=d^2−b^2, prema traženoj veličini.",
      "Za kvadrat primeni d=a·[[sqrt:2]], odnosno a=d/[[sqrt:2]], i pojednostavi tačan zapis.",
      "Obim i površinu izračunaj tek iz pronađenih stranica; u zadatku sa ogradom uporedi njen raspoloživi iznos sa obimom.",
      "Pri poređenju kvadrata datih obimom ili površinom prvo odredi stranice; veća stranica daje dužu dijagonalu."
    ],
    "why": "Dijagonala otkriva pravougli trougao unutar figure i povezuje poznate formule za obim i površinu sa Pitagorinom teoremom.",
    "caution": "Dijagonala nije stranica pravougaonika. Kod kvadrata izraz a·[[sqrt:2]] znači proizvod, a pri računanju površine kvadrira se ceo izraz za stranicu.",
    "extraFormulas": [
      "a=[[sqrt:d^2−b^2]]",
      "O_pravougaonika=2(a+b)",
      "P_pravougaonika=a·b",
      "a_kvadrata=[[frac:d|√2]]; O_kvadrata=4a; P_kvadrata=[[frac:d^2|2]]"
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
      "Visina na osnovicu jednakokrakog trougla deli osnovicu na dve jednake duži. Tako nastaju dva podudarna pravougla trougla; katete su visina h i polovina osnovice a/2, a hipotenuza je krak s. Zato važi h^2+(a/2)^2=s^2.",
      "U jednakostraničnom trouglu krak i osnovica imaju istu dužinu a. Iz iste jednakosti dobijaš h=a·[[sqrt:3]]/2, a zatim površinu i obim. Ako je data visina, možeš se vratiti do stranice, pa do traženog obima."
    ],
    "steps": [
      "Nacrtaj visinu na osnovicu, označi pravi ugao i obe polovine osnovice.",
      "Za visinu oduzmi (a/2)^2 od s^2; za krak saberi kvadrate kateta.",
      "Za osnovicu najpre odredi jednu polovinu kao [[sqrt:s^2−h^2]], pa je udvostruči.",
      "Za jednakostranični trougao upotrebi h=a·[[sqrt:3]]/2 ili obrnutu vezu a=2h/[[sqrt:3]].",
      "Obim jednakokrakog trougla je a+2s; površina je ah/2. U jednakostraničnom trouglu obim je 3a."
    ],
    "why": "Prepolovljena osnovica i pravi ugao stvaraju pomoćni trougao, pa se svi direktni i obrnuti zadaci zasnivaju na istoj jednakosti.",
    "caution": "U Pitagorinu jednakost unosiš polovinu osnovice. Ako se traži cela osnovica, udvostruči rezultat za njenu polovinu.",
    "extraFormulas": [
      "h=[[sqrt:s^2−([[frac:a|2]])^2]]",
      "a=2[[sqrt:s^2−h^2]]",
      "s=[[sqrt:h^2+([[frac:a|2]])^2]]",
      "P=[[frac:a·h|2]]; P_jednakostraničnog=[[frac:a^2[[sqrt:3]]|4]]"
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
      "Dijagonale romba međusobno su normalne i polove jedna drugu. Zato romb dele na četiri pravougla trougla. U svakom su katete polovine dijagonala d₁/2 i d₂/2, a hipotenuza stranica romba a.",
      "Pitagorina jednakost daje stranicu ili nepoznatu polovinu dijagonale. Površina je polovina proizvoda celih dijagonala; jednaka je i proizvodu stranice i odgovarajuće visine. Iz te dve veze možeš odrediti nedostajuću dijagonalu ili visinu."
    ],
    "steps": [
      "Nacrtaj obe dijagonale, označi njihov presek, pravi ugao i sve polovine.",
      "Za stranicu primeni a^2=(d₁/2)^2+(d₂/2)^2, pa uzmi pozitivan koren.",
      "Za nepoznatu dijagonalu najpre pronađi njenu polovinu oduzimanjem kvadrata, pa rezultat udvostruči.",
      "Za obim primeni O=4a; za površinu P=d₁d₂/2. Ako su dati P i d₁, izdvoji d₂=2P/d₁.",
      "Za visinu, nakon određivanja površine i stranice, primeni h=P/a i proveri jedinice."
    ],
    "why": "Normalne dijagonale stvaraju pravougli trougao, a njihovo prepolovljavanje određuje prave dužine kateta.",
    "caution": "U Pitagorinu jednakost unose se polovine dijagonala, a u formulu za površinu cele dijagonale. Rezultat za polovinu dijagonale nije konačan odgovor za celu.",
    "extraFormulas": [
      "d₂=2[[sqrt:a^2−([[frac:d₁|2]])^2]]",
      "d₁=2[[sqrt:a^2−([[frac:d₂|2]])^2]]",
      "O=4a; P=a·h",
      "d₂=[[frac:2P|d₁]]; h=[[frac:P|a]]"
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
      "U pravouglom trapezu normalan krak jednak je visini h. Spuštanjem još jedne visine uz kosi krak c dobijaš pravougli trougao sa horizontalnom katetom a−b, gde je a duža osnovica. Zato važi c^2=h^2+(a−b)^2.",
      "Kod jednakokrakog trapeza dve visine ostavljaju jednake delove uz dužu osnovicu. Svaki ima dužinu (a−b)/2, pa je c^2=h^2+((a−b)/2)^2. Kada se traži osnovica, obrni postupak; kada se traži površina ili obim, prvo pronađi potrebnu visinu ili krak."
    ],
    "steps": [
      "Proveri vrstu trapeza i označi dužu osnovicu a, kraću b, visinu h i kosi krak c.",
      "Spusti visinu i odredi horizontalnu katetu: a−b za pravougli, (a−b)/2 za jednakokraki trapez.",
      "Za krak saberi kvadrate kateta; za visinu oduzmi kvadrat horizontalne katete od c^2.",
      "Za dužu osnovicu iz poznatih c i h pronađi x=[[sqrt:c^2−h^2]]; zatim a=b+x ili a=b+2x, prema vrsti trapeza.",
      "Površinu izračunaj kao (a+b)h/2. Obim jednakokrakog trapeza je a+b+2c, a pravouglog a+b+c+h."
    ],
    "why": "Razlika osnovica pripada jednom pomoćnom trouglu kod pravouglog trapeza, a deli se na dva jednaka dela kod jednakokrakog.",
    "caution": "Ne koristi isti horizontalni deo za obe vrste trapeza. Visina je normalna na osnovice i uglavnom nije jednaka kosom kraku.",
    "extraFormulas": [
      "h=[[sqrt:c^2−(a−b)^2]], pravougli trapez",
      "h=[[sqrt:c^2−([[frac:a−b|2]])^2]], jednakokraki trapez",
      "P=[[frac:(a+b)·h|2]]",
      "O_jednakokrakog=a+b+2c; O_pravouglog=a+b+c+h"
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
      "Kvadratni koren nenegativnog broja jeste nenegativan broj čiji je kvadrat jednak datom broju. U izrazu prvo izračunaj korene i stepene, zatim množenje i deljenje, pa sabiranje i oduzimanje; zagrade imaju prednost. Potpuni kvadrat možeš izdvojiti iz proizvoda pod korenom.",
      "Pre geometrijskog računa prepoznaj figuru i poznate elemente. U trouglu zbir uglova iznosi 180°. Površina zavisi od odgovarajuće visine; obim je zbir dužina stranica. Pitagorina teorema povezuje katete i hipotenuzu samo pravouglog trougla."
    ],
    "steps": [
      "Odvoji brojevne podatke od podataka o figuri i zapiši njihove jedinice.",
      "U izrazu odredi redosled operacija; pod korenom potraži činilac koji je potpuni kvadrat.",
      "Na skici označi prav ugao, hipotenuzu i visinu koja odgovara izabranoj osnovici.",
      "Izaberi formulu prema onome što tražiš; za katetu oduzmi, a za hipotenuzu saberi kvadrate.",
      "Proveri rezultat: hipotenuza je najduža stranica, dužina je pozitivna, površina ima kvadratnu jedinicu."
    ],
    "why": "Jasan izbor formule sprečava da iste brojeve koristiš u pogrešnom geometrijskom odnosu. Provera kvadriranjem potvrđuje da je koren pravilno izračunat.",
    "caution": "Koren zbira uglavnom nije zbir korena. U formuli za površinu trougla proizvod osnovice i visine deli se sa 2; dužine i površine nemaju iste jedinice.",
    "extraFormulas": [
      "[[sqrt:u·v]]=[[sqrt:u]]·[[sqrt:v]], u,v≥0",
      "b=[[sqrt:c^2−a^2]], c je hipotenuza",
      "O_pravougaonika=2(a+b)",
      "P_kruga=πr^2"
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
      "Razmera a:b opisuje koliko dužine prve duži ima u odnosu na drugu. Računa se kao količnik a/b, zato redosled nije proizvoljan. Kada su dužine izražene istom jedinicom, njihov količnik je broj bez merne jedinice.",
      "Zapis a:b=m:n možeš čitati kao m jednakih delova prve i n istih takvih delova druge duži. Ako je poznata jedna dužina, najpre nađi dužinu jednog dela. Ako je poznat zbir dužina, ukupan broj delova je m+n. Ovde je dovoljan rad sa delovima; proporcije dolaze kasnije."
    ],
    "steps": [
      "Izraze dužina pretvori u istu jedinicu pre zapisivanja razmere.",
      "Napiši brojeve istim redom kao duži u pitanju.",
      "Skrati oba člana istim pozitivnim brojem; kod decimala ih najpre pomnoži da ukloniš decimalni zarez.",
      "Za nepoznatu duž odredi jedan jednak deo, pa uzmi potreban broj takvih delova.",
      "Za poređenje razmera uporedi odgovarajuće razlomke ili količnike; rečenicom objasni rezultat."
    ],
    "why": "Skraćivanje ne menja količnik, a pretvaranje jedinica omogućava poređenje stvarnih dužina. Jednaki delovi povezuju zapis razmere sa dužinama.",
    "caution": "Obrnuta razmera menja redosled oba člana. Razmera 1:n govori da je druga duž n puta duža; broj sa većom jedinicom ne mora označavati dužu duž.",
    "extraFormulas": [
      "a:b=[[frac:a|b]], a,b>0",
      "a=m·u, b=n·u",
      "a+b=(m+n)·u"
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
      "Duži a i b su samerljive ako postoji pozitivna duž u koja se u svakoj od njih sadrži ceo broj puta: a=m·u i b=n·u. Zato je njihova razmera racionalan broj m/n. Ako je razmera iracionalna, duži su nesamerljive.",
      "Samerljivost zavisi od razmere, a ne od toga da li u pojedinačnim dužinama postoji koren. Zajednički iracionalni činilac može se skratiti i ostaviti racionalan količnik. Kod stranice i dijagonale kvadrata Pitagorina teorema daje iracionalni odnos."
    ],
    "steps": [
      "Svedi dužine na istu jedinicu i napiši njihov količnik.",
      "Pojednostavi korene i skrati zajedničke činioce, pa tek onda proceni vrstu broja.",
      "Racionalan količnik znači samerljivost; iracionalan znači nesamerljivost.",
      "Ako su dužine celi brojevi iste jedinice, najveća zajednička mera dobija se njihovim NZD.",
      "Za broj delova podeli dužinu duži dužinom zajedničke mere; dobijeni broj mora biti prirodan."
    ],
    "why": "Zajednička mera omogućava da obe duži izgradimo od istog malog segmenta. Racionalna razmera opisuje baš odnos dva cela broja tih segmenata.",
    "caution": "Zajednički simbol a ne dokazuje samerljivost. Približna decimalna vrednost iracionalnog odnosa ne pretvara nesamerljive duži u samerljive.",
    "extraFormulas": [
      "a=m·u, b=n·u; m,n∈N, u>0",
      "[[frac:a|b]]∈Q ⇔ duži su samerljive",
      "d=a[[sqrt:2]]"
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
      "Proporcija je jednakost dve razmere. Duži a,b,c,d su proporcionalne u zapisanom redosledu ako je a:b=c:d. Krajnji članovi su a i d, a srednji b i c; proizvod krajnjih jednak je proizvodu srednjih.",
      "U tabeli proporcionalnih parova svaka odgovarajuća duž množi se istim pozitivnim brojem. Zato možeš pratiti ili količnik unutar svakog para ili isti činilac prelaska između parova. Ako se duži dele u zadatoj razmeri, model jednakih delova ostaje koristan."
    ],
    "steps": [
      "Obeleži koje duži odgovaraju jedna drugoj i izaberi isti redosled u obe razmere.",
      "Zapiši proporciju i proveri da imenilac nije nula.",
      "Pomnoži krajnje i srednje članove, zatim izoluj nepoznatu duž.",
      "Ako je nepoznata u oba srednja člana, dobijaš kvadrat nepoznate i uzimaš pozitivan koren jer je reč o dužini.",
      "Zamenom proveri početnu proporciju; u tabeli proveri svaki odgovarajući par, a kod zbira proveri i ukupan broj delova."
    ],
    "why": "Jednakost razlomaka sa nenultim imeniteljima može se proveriti ukrštenim množenjem. Promena oba para istim činiocem čuva razmeru.",
    "caution": "Nemoj zameniti članove samo u jednoj razmeri. Dva proporcionalna para ne opravdavaju proizvoljno sparivanje ostalih duži; u geometriji dužine moraju biti pozitivne.",
    "extraFormulas": [
      "a:b=c:d ⇔ a·d=b·c",
      "a:b=c:d ⇒ b:a=d:c",
      "a:b=c:d ⇒ a:c=b:d",
      "a:x=x:b ⇒ x^2=a·b, x>0"
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
      "Paralelne prave koje seku krake ugla određuju proporcionalne odgovarajuće odsečke. U trouglu ABC, ako su M na AB, N na AC i MN∥BC, važi AM:AB=AN:AC=MN:BC. Odnos dela i cele stranice razlikuje se od odnosa dva dela iste stranice.",
      "Crtež sme da bude okrenut ili da ima oblik peščanog sata. Ako AB∥CD, O,A,C leže na jednoj pravoj, a O,B,D na drugoj, odgovaraju duži OA i OC, OB i OD, AB i CD. Zapis OA:OC=OB:OD=AB:CD važi i kada su A i C, odnosno B i D, na suprotnim stranama O."
    ],
    "steps": [
      "Najpre označi paralelne prave i iste presečne prave; ne zaključuj samo prema izgledu slike.",
      "Pročitaj redosled tačaka. Ako je M između A i B, onda AB=AM+MB; analogno AC=AN+NC.",
      "Biraj odnos dela prema celini ili dela prema preostalom delu i zadrži isti obrazac na oba kraka.",
      "Iz proporcije odredi traženu duž; ako se traži preostali deo, oduzmi izračunati deo od cele stranice.",
      "Za podelu duži u razmeri m:n na pomoćnom kraku odloži m+n jednakih delova, krajnji spoji sa B i kroz m-ti povuci paralelu toj spojnici."
    ],
    "why": "Paralelnost obezbeđuje isti obrazac razmere na oba kraka. Jednaki pomoćni odsečci zato se prenose u jednake ili zadato proporcionalne delove duži.",
    "caution": "AM:AB ne smeš izjednačiti sa AN:NC. U peščanom satu prati pravu kroz O, a ne položaj levo/desno; unutrašnji odsečak ne može biti duži od cele odgovarajuće stranice.",
    "extraFormulas": [
      "MN∥BC ⇒ [[frac:AM|AB]]=[[frac:AN|AC]]=[[frac:MN|BC]]",
      "MN∥BC ⇒ [[frac:AM|MB]]=[[frac:AN|NC]]",
      "AB∥CD ⇒ [[frac:OA|OC]]=[[frac:OB|OD]]=[[frac:AB|CD]]"
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
      "Slični trouglovi imaju jednake odgovarajuće uglove i proporcionalne odgovarajuće stranice. U zapisu △ABC∼△DEF redosled imena određuje parove: A↔D, B↔E, C↔F. Zato AB odgovara DE, BC odgovara EF, a AC odgovara DF.",
      "Ovde fiksiramo k=DE:AB, dakle koeficijent prelaska iz ABC u DEF. Svaka duž drugog trougla jednaka je k puta odgovarajuća duž prvog. Obim se množi sa k; površina sa k², jer se i osnovica i odgovarajuća visina množe sa k. Okretanje ili preslikavanje crteža ne menja ove odnose."
    ],
    "steps": [
      "Iz zapisa sličnosti napravi parove temena, pa iz njih parove uglova i stranica.",
      "Odredi k kao stranicu drugog trougla podeljenu odgovarajućom stranicom prvog.",
      "Za duž u DEF množi duž u ABC sa k; za povratak u ABC deli odgovarajuću duž sa k.",
      "Nepoznat ugao dobijaš preko odgovarajućeg ugla i zbira uglova trougla; obime poredi u istom smeru kao k.",
      "Proveri da sva tri količnika odgovarajućih stranica imaju istu vrednost i da su jedinice usklađene."
    ],
    "why": "Obim je zbir stranica, pa zajednički činilac k možeš izdvojiti iz celog zbira. Površina sadrži proizvod dve dužine, pa se činilac pojavljuje dva puta.",
    "caution": "Ne sparuj stranice prema položaju na ekranu. Količnik AB:DE je 1/k, a ne k; dva trougla sa istim obimom nisu time automatski slična.",
    "extraFormulas": [
      "k=[[frac:DE|AB]]=[[frac:EF|BC]]=[[frac:DF|AC]], k>0",
      "DE=k·AB, EF=k·BC, DF=k·AC",
      "O_DEF=k·O_ABC",
      "P_DEF=k^2·P_ABC"
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
      "Sličnost se može dokazati pomoću tri stava. UU: dva para odgovarajućih uglova su jednaka. SUS: dva para odgovarajućih stranica su proporcionalna, a uglovi zahvaćeni tim stranicama jednaki. SSS: sva tri para odgovarajućih stranica su proporcionalna.",
      "Zahvaćen ugao ima teme na zajedničkom kraju upravo dve upoređene stranice. Za AB i AC to je ∠A. U pravouglim trouglovima već imaš jedan jednak ugao od 90°, pa još jedan jednak oštar ugao daje UU. Samo dve razmere ili nezahvaćen ugao uopšte nisu dovoljni."
    ],
    "steps": [
      "Označi šta je dato: uglovi, stranice, paralelnost ili prav ugao.",
      "Zapiši moguće parove odgovarajućih temena i proveri da su podaci dosledni tim parovima.",
      "Za UU potvrdi dva para uglova; za SUS dve jednake razmere i baš zahvaćen ugao; za SSS proveri sve tri razmere.",
      "Ako imaš samo dužine bez imena temena, poređaj ih po veličini pre pravljenja odgovarajućih parova.",
      "Tek nakon dokaza zapiši sličnost pravilnim redom i koristi je za nepoznate elemente."
    ],
    "why": "Kod UU je i treći par uglova jednak zbog zbira od 180°. Uslovi SUS i SSS određuju isti oblik, iako veličine trouglova mogu biti različite.",
    "caution": "Jednakost nezahvaćenog ugla uz dve proporcionalne stranice nije opšti stav sličnosti. Jedan jednak količnik ili vizuelna sličnost crteža ne predstavlja dokaz.",
    "extraFormulas": [
      "UU: ∠A=∠D i ∠B=∠E",
      "SUS: [[frac:AB|DE]]=[[frac:AC|DF]] i ∠A=∠D",
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
      "Razmera plana 1:n znači da jedna dužina na planu odgovara n istih jedinica u stvarnosti. Dužina u stvarnosti dobija se množenjem, a na planu deljenjem sa n. Pretvaranje jedinica radi se pre poređenja ili posle računa, uz jasno zapisivanje jedinice.",
      "Kod merenja pomoću senke uspravni predmet, tlo i Sunčev zrak grade pravougli trougao. Dva uspravna predmeta na istoj ravnoj podlozi, merena istovremeno, imaju jednak ugao Sunčevih zraka pa su trouglovi slični po UU. Visina odgovara visini, a senka senki."
    ],
    "steps": [
      "Nacrtaj model i označi koju stvarnu veličinu predstavlja svaka duž.",
      "Kod plana proveri smer 1:n; kod senke objasni uspravnost predmeta, ravno tlo i istovremenost merenja.",
      "Svedi odgovarajuće dužine na iste jedinice, zatim napiši razmeru ili proporciju istim redom.",
      "Izračunaj nepoznatu duž; ako tražiš imenilac razmere, podeli stvarnu duž dužinom na planu.",
      "Proveri smisao: mali plan daje veliku stvarnu duž, a pri istoj svetlosti viši predmet ima dužu senku."
    ],
    "why": "Isti ugao svetlosti čuva oblik dva pravougla trougla. Razmera zato omogućava da teško dostupnu visinu ili širinu zameniš merljivim dužima.",
    "caution": "Ne poredi centimetre sa metrima bez pretvaranja. Senke snimljene u različito vreme ili na različito nagnutom tlu ne daju automatski isti model sličnosti.",
    "extraFormulas": [
      "L_stvarno=n·L_plan",
      "n=[[frac:L_stvarno|L_plan]], iste jedinice",
      "[[frac:h_1|h_2]]=[[frac:s_1|s_2]], odgovarajući slični trouglovi"
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
      "U pravouglom trouglu ABC neka je prav ugao kod C, AB=c, BC=a, AC=b i CD=h visina na hipotenuzu. Ako je D njeno podnožje, ovde označavamo BD=p i AD=q. Odsečak p je projekcija katete a, a q projekcija katete b.",
      "Visina deli trougao na dva manja pravougla trougla. Svaki je sličan početnom, a slični su i međusobno po UU. Iz razmera odgovarajućih stranica slede a²=c·p, b²=c·q i h²=p·q. Cela hipotenuza jednaka je zbiru oba odsečka."
    ],
    "steps": [
      "Nacrtaj trougao i visinu CD⊥AB; najpre poveži a sa p, a b sa q.",
      "Zapiši c=p+q, pa izaberi jednakost u kojoj su ostale veličine poznate.",
      "Za nepoznatu duž čiji se kvadrat računa uzmi pozitivan koren dobijenog proizvoda.",
      "Za nepoznat odsečak iz h²=pq ili a²=cp prvo podeli odgovarajući kvadrat poznatom dužinom.",
      "Proveri 0<p<c i 0<q<c; odnos kateta dobija se korenovanjem odnosa njihovih kvadrata."
    ],
    "why": "Pravougli trouglovi imaju isti par oštrih uglova. Njihove razmere objašnjavaju zašto je kvadrat katete proizvod hipotenuze i baš njene projekcije.",
    "caution": "h²=pq ne znači h=pq. Ne menjaj oznake p i q usred računa; uz drugačiji crtež pravilo se prati preko odgovarajuće katete, a ne napamet po slovu.",
    "extraFormulas": [
      "c=p+q",
      "a=[[sqrt:c·p]], b=[[sqrt:c·q]]",
      "h=[[sqrt:p·q]]",
      "a:b=[[sqrt:p]]:[[sqrt:q]]"
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
      "Prostorno telo na ekranu predstavlja se ravnim crtežom. Na kocki ili kvadru neke ivice su zaklonjene, pa ih crtamo isprekidano. Promena pravca posmatranja menja vidljivost elemenata, ali ne menja njihove veze u telu.",
      "Oznake ABCD i A_1B_1C_1D_1 prate dva odgovarajuća obilaska suprotnih strana. Povezuju se samo odgovarajuća temena A–A_1, B–B_1, C–C_1, D–D_1. Dijagonala strane spaja nesusedna temena iste strane; prostorna dijagonala spaja temena koja ne pripadaju istoj strani."
    ],
    "steps": [
      "Pročitaj oznake i izdvoji donji i gornji obod; svako teme traži i kada je zaklonjeno.",
      "Prati ivice duž jednog oboda, zatim drugog, pa četiri spojnice odgovarajućih temena.",
      "Za brojanje uz izabrano teme pronađi sve ivice i strane koje ga sadrže.",
      "Razlikuj stvarni zajednički kraj od prividnog ukrštanja linija u ravnom crtežu.",
      "Pri promeni pogleda zadrži ista susedstva temena; menjaj samo koje su ivice pune, a koje isprekidane."
    ],
    "why": "Veze između temena ostaju iste pri okretanju tela. Crtež je pouzdan ako čuva ta susedstva, iako ne prikazuje sve dužine i uglove u pravoj veličini.",
    "caution": "Zaklonjeno teme i dalje postoji. Ukrštanje slika dve ivice ne dokazuje da se ivice dodiruju u prostoru; dijagonala nije dodatna ivica tela.",
    "extraFormulas": [
      "ABCD ↔ A_1B_1C_1D_1",
      "Donji obod: AB,BC,CD,DA",
      "Spojnice: AA_1,BB_1,CC_1,DD_1"
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
      "Tačku beležimo velikim slovom, pravu malim slovom, a ravan grčkim slovom. A∈p i A∈α znače da tačka pripada pravoj odnosno ravni; p⊂α znači da sve tačke prave pripadaju ravni. Slika ravni kao paralelograma predstavlja samo jedan njen deo.",
      "Dve različite tačke određuju jednu pravu. Tri nekolinearne tačke određuju jednu ravan; kolinearne su tačke na istoj pravoj. Ravan određuju i prava sa tačkom van nje, dve prave koje se seku ili dve različite paralelne prave. Ako dve tačke prave pripadaju ravni, cela prava leži u ravni."
    ],
    "steps": [
      "Utvrdi da li se u zapisu poredi tačka sa pravom/ravni ili prava sa ravni.",
      "Za tačku koristi ∈ ili ∉, a za sadržanost cele prave koristi ⊂.",
      "Kod tri tačke prvo proveri da nisu kolinearne; tek tada navedi jedinstvenu ravan.",
      "Kod više tačaka razmatraj trojke i proveri da li različite trojke daju istu ravan.",
      "Pri brojanju pravih gledaj parove različitih tačaka i izbegni višestruko brojanje iste prave."
    ],
    "why": "Dve tačke čvrsto određuju smer prave, ali ostavljaju slobodu okretanja ravni oko nje. Treća tačka van te prave uklanja tu slobodu.",
    "caution": "Jedna tačka ili dve tačke ne određuju jedinstvenu ravan. Više imena trojki ne znači više ravni ako su sve tačke već u istoj ravni.",
    "extraFormulas": [
      "A∈p i p⊂α ⇒ A∈α",
      "A,B∈α, A≠B ⇒ prava AB⊂α",
      "Broj pravih kroz parove n tačaka: [[frac:n(n−1)|2]], ako nijedne tri nisu kolinearne"
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
      "Dve prave mogu da se poklapaju, da se seku u jednoj tački, da budu različite paralelne ili mimoilazne. Različite paralelne prave su u istoj ravni i nemaju zajedničku tačku. Mimoilazne nemaju zajedničku tačku i nisu u istoj ravni.",
      "Prava i ravan imaju tri moguća odnosa: prava je sadržana u ravni, seče je u jednoj tački ili je paralelna ravni i nema s njom zajedničkih tačaka. U prostornoj skici moraš pratiti ravan kojoj objekti pripadaju, jer prividno ukrštanje ne predstavlja uvek presek u prostoru."
    ],
    "steps": [
      "Proveri da li objekti imaju zajedničke tačke i da li se u zadatku misli na različite prave.",
      "Ako dve različite prave nemaju zajedničku tačku, pitaj da li postoji ista ravan koja ih sadrži.",
      "Na kocki prati oznake krajeva i odgovarajuću stranu ili više strana tela.",
      "Za pravu i ravan razlikuj nijednu, jednu ili sve zajedničke tačke; dve različite zajedničke tačke znače sadržanost.",
      "Zaključak zapiši simbolom ili celom rečenicom koja uključuje uslov o istoj ravni."
    ],
    "why": "Prostor dopušta mimoilazne prave, što u jednoj ravni nije moguće. Zato broj zajedničkih tačaka sam po sebi ne određuje uvek položaj dve prave.",
    "caution": "Prave bez zajedničkih tačaka nisu nužno paralelne. Kada prava leži u ravni, ona ima beskonačno mnogo zajedničkih tačaka sa ravni, a ne samo jednu.",
    "extraFormulas": [
      "p∩q={A}: prave se seku",
      "p∥α ⇒ p∩α=∅",
      "p⊂α ⇒ p∩α=p",
      "p∩q=∅ i p,q u istoj ravni ⇒ p∥q"
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
      "Ravni se poklapaju ako imaju sve tačke zajedničke. Dve različite ravni su paralelne kada nemaju zajedničkih tačaka, a ako se seku, zajednički deo je prava. Za različite ravni koje imaju dve zajedničke tačke A i B, prava AB jeste njihova presečna prava.",
      "Ravan se jednoznačno određuje trima nekolinearnim tačkama ili odgovarajućim parom podataka: pravom i tačkom van nje, dvema pravama koje se seku ili dvema različitim paralelnim pravama. Ako dve navodno različite ravni imaju tri nekolinearne zajedničke tačke, one su zapravo ista ravan."
    ],
    "steps": [
      "Proveri da li zadatak navodi različite ravni ili dopušta poklapanje.",
      "Nađi zajedničke tačke ili ivicu; dve različite zajedničke tačke daju pravu koja leži u obe ravni.",
      "Za paralelnost proveri da nema zajedničkih tačaka, koristeći poznati model ili date uslove.",
      "Kod određenosti ravni potvrdi potrebnu nekolinearnost, tačku van prave ili položaj dve prave.",
      "Ako brojiš ravni kroz više tačaka, ukloni ponavljanja: različite trojke mogu određivati istu ravan."
    ],
    "why": "Ako prava ima dve tačke u ravni, cela prava pripada toj ravni. Zato zajednički deo dve različite ravni ne može ostati samo jedna tačka.",
    "caution": "Ravan nije isto što i nacrtana strana kocke: strane su ograničeni delovi ravni. Tri zajedničke kolinearne tačke mogu pripadati presečnoj pravoj različitih ravni.",
    "extraFormulas": [
      "α∥β, α≠β ⇒ α∩β=∅",
      "α∩β=p: ravni se seku po pravoj p",
      "A,B∈α∩β, A≠B ⇒ AB⊂α i AB⊂β"
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
      "Prava p je normalna na ravan α ako je normalna na svaku pravu te ravni koja prolazi kroz podnožje O=p∩α. Dovoljno je proveriti normalnost na dve različite prave ravni koje se seku u O. Normalnost na jednu pravu nije dovoljna.",
      "Dve ravni su normalne ako grade prav ugao. U modelu sobe to predstavljaju uspravan zid i vodoravan pod; na kocki susedne strane. Ako jedna ravan sadrži pravu normalnu na drugu ravan, te ravni su normalne. Svaka prava paralelna normali ravni i sama je normalna na tu ravan."
    ],
    "steps": [
      "Odredi tačku O u kojoj prava seče ravan.",
      "U ravni izaberi dve različite prave kroz O i proveri da obe grade prav ugao sa p.",
      "Ako je p⊥α već dato, primeni prav ugao samo na prave ravni kroz O.",
      "Kod dve ravni potraži pravu u jednoj koja je normalna na drugu ili prepoznaj poznati prav ugao modela.",
      "Na prostornoj skici označi podnožje i simbol pravog ugla; ne meri ugao sa perspektivne slike."
    ],
    "why": "Dve presečne prave predstavljaju dva nezavisna smera ravni. Normalnost na oba smera omogućava zaključak o normalnosti na celu ravan.",
    "caution": "Prostorni prav ugao na crtežu ne mora izgledati kao 90°. Tvrdnja o svim pravama ravni pri ovom kriterijumu odnosi se na prave kroz podnožje.",
    "extraFormulas": [
      "p⊥α, O=p∩α, O∈q⊂α ⇒ p⊥q",
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
      "Ortogonalna projekcija tačke A na ravan α je podnožje A′ normale iz A na α. Tačka koja već pripada α projektuje se u samu sebe. Duž AB projektuješ preko projekcija krajeva A′ i B′; projekcija je duž A′B′ ili jedna tačka ako se krajevi projektuju u isto podnožje.",
      "Ako AB leži u ravni, ostaje ista duž. Ako je paralelna ravni van nje, projekcija je jednako duga. Ako je normalna na ravan, projekcija je tačka. U ostalim, kosim položajima projekcija je kraća, uključujući slučaj jednog kraja u ravni ili krajeva sa različitih strana ravni. Prava se projektuje u pravu, osim normale koja se projektuje u tačku."
    ],
    "steps": [
      "Kroz A i B povuci normale na α i označi njihova podnožja A′ i B′.",
      "Ako je neki kraj u α, njegova projekcija ostaje na istom mestu.",
      "Spoji A′ i B′ ako su različite tačke; ako se poklapaju, označi jednu tačku.",
      "Pre poređenja dužina odredi položaj: u ravni, paralelan, normalan ili kos.",
      "Za kosu duž uoči pravougli trougao: normalna razlika visina krajeva je razlika rastojanja kada su sa iste strane, a zbir kada su sa suprotnih strana ravni."
    ],
    "why": "Projekcija uklanja pomeranje u smeru normale. Kosa duž je hipotenuza odgovarajućeg pravouglog trougla, zato je njena projekcija kraća ili jednaka njoj.",
    "caution": "Projekcioni zraci moraju biti normalni na ravan, a ne samo uspravni na ekranu. Ista projekcija dve različite tačke znači da prava kroz njih ima smer normale.",
    "extraFormulas": [
      "A∈α ⇒ A′=A",
      "0≤A′B′≤AB",
      "AB⊂α ili AB∥α ⇒ A′B′=AB",
      "AB⊥α ⇒ A′=B′",
      "AB^2=A′B′^2+Δh^2"
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
      "Poliedar je geometrijsko telo ograničeno mnogouglovima. Ti mnogouglovi su strane, zajednička stranica susednih strana je ivica, a njihovi uglovi se susreću u temenima. Kocka, kvadar i prizme jesu poliedri; telo sa zakrivljenom površinom nije poliedar.",
      "Za konveksan poliedar važi Ojlerova formula V−E+F=2, gde su V broj temena, E broj ivica, F broj strana. Konveksnost znači da duž između bilo koje dve tačke tela ostaje u telu. Formula povezuje brojeve elemenata, ali sama brojčana provera ne dokazuje da svaki zamišljeni poliedar zaista postoji."
    ],
    "steps": [
      "Najpre proveri da je telo ograničeno ravnim mnogougaonim stranama.",
      "Popiši temena, ivice i strane sistematski, uključujući zaklonjene elemente.",
      "Zapiši V−E+F=2 i unesi poznate brojeve; nepoznati broj izdvoji kao u jednostavnoj jednačini.",
      "Ako je jedan broj dat preko drugog, prvo primeni taj odnos pa uvrsti u Ojlerovu formulu.",
      "Proveri dobijene prirodne brojeve i ponovo izračunaj V−E+F; razlikuj neispunjen uslov od potpunog dokaza postojanja tela."
    ],
    "why": "Elementi iste zatvorene konveksne površine nisu nezavisni. Ojlerova formula omogućava da iz dva broja dobiješ treći ili uočiš nedosledne podatke.",
    "caution": "Broj temena nije broj ivica. Ne primenjuj Ojlerovu formulu bez uslova na proizvoljno telo sa otvorima; skrivena ivica i dalje se broji.",
    "extraFormulas": [
      "V−E+F=2, za konveksan poliedar",
      "E=V+F−2",
      "F=E−V+2",
      "V=E−F+2"
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
      "Racionalni brojevi obuhvataju cele brojeve i razlomljene vrednosti sa oba predznaka. Važno je da imenilac nije nula. Različiti zapisi mogu označavati isti broj: proširivanjem ili skraćivanjem razlomka ne menjamo njegovu vrednost.",
      "Brojevna prava čuva isti smer rasta kao kod celih brojeva, ali sada prikazujemo i tačke između njih. Imenilac određuje podelu jediničnog segmenta, a brojilac broj koraka. Negativan razlomak nanosimo ulevo; njegov suprotan broj nalazi se jednako daleko udesno."
    ],
    "steps": [
      "Za pripadnost skupu Q proveri da su brojilac i imenilac celi i da je imenilac nenulti; celobrojni zapis pretvori u razlomak sa imeniocem 1.",
      "Za decimalni zapis poznatog razlomka najpre odredi pozitivnu vrednost postupkom iz 5. razreda, pa dodaj odgovarajući predznak. Suprotan broj dobijaš promenom predznaka.",
      "Pri čitanju koordinate najpre pronađi nulu i utvrdi broj jednakih podela između susednih celih brojeva. U tabeli ili skupu proveri vrednost svakog zapisa, a ne samo njegov izgled.",
      "Za poredak razdvoji negativne brojeve, nulu i pozitivne. Kod negativnih razlomaka poredi rastojanja od nule obrnutim redom.",
      "Ako je imenilac unapred određen, prevedi granične vrednosti u razlomke sa tim imeniocem i nabroj dozvoljene cele brojioce. Na skici sredinu nađi polovljenjem broja jednakih podela."
    ],
    "why": "Svaki ceo broj ima dozvoljen zapis n/1, pa skup Q obuhvata Z. Jednake podele jedinice omogućavaju da isti razlomak dosledno predstavljamo na svim delovima brojevne prave.",
    "caution": "Razlomak sa imeniocem 0 nema vrednost. Zapis razlomka ne znači da broj nije ceo: proveri da li se njegova vrednost može izraziti celim brojem. Stroge granice raspona se ne uključuju.",
    "extraFormulas": [
      "[[frac:a|b]] = [[frac:a·k|b·k]], b≠0, k≠0",
      "0 = [[frac:0|b]], b≠0"
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
      "Uspravne crte traže rastojanje od nule. Broj može biti negativan, ali dužina koja opisuje njegovo rastojanje nije. Kod razlomka uzimamo apsolutne vrednosti brojioca i imenioca; kod decimalnog broja sačuvamo cifre i decimalni zarez.",
      "Jednako pozitivno rastojanje može pripadati dvema suprotnim koordinatama. Predznak ili drugi uslov bira jednu ili obe. Poređenje negativnih racionalnih brojeva vraćamo na poređenje pozitivnih apsolutnih vrednosti, uz obrnut poredak."
    ],
    "steps": [
      "Najpre odredi vrednost izraza unutar uspravnih crta, a zatim njegovu apsolutnu vrednost. Minus izvan crta označava suprotan broj dobijene vrednosti.",
      "Za poređenje apsolutnih vrednosti prevedi pozitivne razlomke na zajednički imenilac, kao u 5. razredu, ili upotrebi poznate decimalne zapise.",
      "Za |x|=k razmotri k<0, k=0 ili k>0. Kod pozitivnog k zapiši oba suprotna broja, pa primeni dodatni uslov o x.",
      "Za raspon L<|x|<U proveri moguće pozitivne apsolutne vrednosti i odgovarajuće negativne i pozitivne koordinate; krajeve isključi.",
      "Rastojanje dve tačke sa negativnim koordinatama nađi oduzimanjem manje apsolutne vrednosti od veće, koristeći oduzimanje pozitivnih razlomaka iz 5. razreda. U skupu prvo izdvoji brojeve po uslovu, pa ih poređaj."
    ],
    "why": "Apsolutna vrednost zanemaruje smer u odnosu na nulu. Jednaka dužina može zato pripadati tačkama sa suprotnim koordinatama, ali različiti položaji ostaju važni za poredak.",
    "caution": "Ne izbacuj minus koji stoji izvan uspravnih crta. Kod dva negativna broja veća apsolutna vrednost znači manji broj. Rastojanje je nenegativno, a stroge granice nisu uključene.",
    "extraFormulas": [
      "|x|=k, k>0 ⇒ x=−k ili x=k",
      "|x|=0 ⇒ x=0",
      "|x|=k, k<0 ⇒ nema rešenja"
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
      "Jedna transverzala pravi po četiri ugla na svakom preseku. Unutrašnji uglovi leže između dve presečene prave, a spoljašnji izvan tog prostora. Saglasni su u istom položaju na oba preseka; naizmenični unutrašnji leže između pravih, ali na različitim stranama transverzale.",
      "Paralelnost daje posebne veze između uglova na različitim presecima. Kod istog preseka koristimo unakrsne jednake uglove i susedne uglove sa zbirom 180°, nezavisno od paralelnosti. Tako se vrednost prenosi od poznatog ugla do traženog."
    ],
    "steps": [
      "Proveri da li su presečene prave označene kao paralelne. Pronađi transverzalu i obeleži prostor između paralelnih pravih.",
      "Za svaki traženi par utvrdi da li su uglovi na istom ili na različitim presecima, unutra ili spolja, sa iste ili različitih strana transverzale.",
      "Izaberi vezu: unakrsni, saglasni i naizmenični unutrašnji su jednaki; susedni opruženi i unutrašnji sa iste strane imaju zbir 180° uz odgovarajuće uslove.",
      "Ako je dato više odnosa ili nepoznata x, prvo napiši jednakost uglova ili njihov zbir. Reši je, pa izračunaj stvarni ugao.",
      "Kod figure sa trouglom prenesi ugao preko paralelnih pravih, a zatim primeni zbir unutrašnjih uglova trougla. Proveri da li je završni ugao oštar, prav ili tup u skladu sa odnosima."
    ],
    "why": "Paralelne prave imaju isti pravac, pa transverzala gradi jednake uglove u odgovarajućim položajima. Preostale veze slede iz unakrsnih i opruženih uglova.",
    "caution": "Položaj uglova određuje pravilo; sličan izgled crteža nije dokaz. Jednakost saglasnih i naizmeničnih uglova zahteva paralelne presečene prave. Dva unutrašnja ugla sa iste strane se dopunjuju do 180°.",
    "extraFormulas": [
      "α=β za unakrsne uglove na istom preseku",
      "α+β=180° za susedne uglove koji čine opružen ugao"
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
      "Septembarsko kvadriranje i korenovanje sada koristiš za potpuno rešavanje jednačine. Kvadrat svakog realnog broja je nenegativan. Zato znak desne strane određuje broj rešenja: negativna vrednost ne daje rešenja, nula daje samo nulu, a pozitivna vrednost dva suprotna broja.",
      "Kada kvadrat nije izdvojen, najpre uredi jednačinu: dodaj ili oduzmi isti broj na obe strane i podeli nenultim koeficijentom. Ako je kvadriran ceo izraz, oba znaka odnose se na taj izraz, pa dobijene jednostavnije jednačine rešavaš odvojeno. Dodatni uslov, kao x<0, može zadržati samo jedno rešenje."
    ],
    "steps": [
      "Uredi jednačinu tako da na jednoj strani ostane kvadrat nepoznate ili kvadrat celog izraza.",
      "Proveri znak druge strane: za negativnu nema realnih rešenja, za nulu kvadrirani izraz mora biti nula.",
      "Za pozitivnu desnu stranu napiši i pozitivan i negativan koren; tačan iracionalan rezultat ostavi sa oznakom korena.",
      "Ako je potrebno, izdvoji kvadratni činilac ispred korena; kod kvadrata izraza zatim reši obe dobijene jednačine.",
      "Proveri svako rešenje u početnoj jednačini i odbaci ona koja ne ispunjavaju dodatni uslov."
    ],
    "why": "Kvadriranje daje isti rezultat za dva suprotna nenulta broja, pa koren kao jedna vrednost ne predstavlja potpun skup rešenja jednačine.",
    "caution": "Znak ± predstavlja dve mogućnosti za kvadrirani izraz. Ne piši samo pozitivan rezultat i ne primenjuj korenovanje pre izdvajanja kvadrata.",
    "extraFormulas": [
      "x^2=r, r>0 ⇒ x=±[[sqrt:r]]",
      "A(x)^2=0 ⇒ A(x)=0",
      "A(x)^2=r, r>0 ⇒ A(x)=±[[sqrt:r]]"
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
      "Veličine x i y direktno su proporcionalne kada za svaki nenulti x njihov količnik y/x ima istu nenultu vrednost k. Vezu pišemo y=kx. Kada x promeniš za određeni faktor, i y se menja za isti faktor; za x=0 dobijaš y=0.",
      "Koeficijent k može biti pozitivan ili negativan. Poznavanje jednog para sa x≠0 dovoljno je da odrediš k i zatim druge vrednosti. U svakodnevnim modelima, stalna cena po kilogramu ili komadu predstavlja koeficijent proporcionalnosti, pod uslovom da nema dodatne početne naknade."
    ],
    "steps": [
      "Proveri da li je veza oblika y=kx i da li je k≠0.",
      "Iz poznatog para sa x≠0 izračunaj k=y/x; nultu kolonu proveri zasebno uslovom y=0.",
      "Za svaku tabelarnu kolonu proveri isti količnik; to što oba broja rastu nije dovoljan dokaz proporcionalnosti.",
      "Za poznato x računaj y=kx; za poznato y računaj x=y/k i pažljivo prati znak.",
      "U tekstualnom zadatku prvo odredi jedinicu koeficijenta, pa traženu veličinu; uređeni par proveri zamenom x i y u formuli."
    ],
    "why": "Stalan količnik omogućava da istim množiocem povežeš sve parove podataka i da postupak obrneš deljenjem.",
    "caution": "Količnik y/x ne računa se za x=0. Veze y=x+c sa c≠0 i y=c/x nisu direktno proporcionalne.",
    "extraFormulas": [
      "k=[[frac:y|x]], x≠0",
      "x=[[frac:y|k]], k≠0",
      "y₁/x₁=y₂/x₂=k, x₁≠0, x₂≠0"
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
      "Grafik y=kx je prava kroz koordinatni početak O(0,0). U tački A(x,y) prvo se navodi vodoravna, a zatim uspravna koordinata. Svaka tačka te prave zadovoljava y=kx, pa pripadnost proveravaš računom, čak i kada je crtež samo približan.",
      "Za k>0 prava raste gledano sleva nadesno, a za k<0 opada. Pri istim jedinicama i istoj razmeri obe ose, veće |k| daje strmiju pravu. Na crtežu svaka osa može imati svoju vrednost podeljka, zato pre čitanja koordinata proveri oznake i jedinice."
    ],
    "steps": [
      "Proveri oznake x-ose i y-ose, nulu i vrednost jednog podeljka na svakoj osi.",
      "Napravi tabelu i izračunaj bar jednu nenultu tačku pored O; tačke ucrtaj i povuci pravu.",
      "Za pripadnost tačke sa zadatim x računaj kx i poredi sa njenom zadatom y-koordinatom.",
      "Iz poznate tačke sa x≠0 odredi k=y/x; iz formule i x izračunaj y uz pravilan znak.",
      "Smer čitaj sleva nadesno. Strminu poredi preko |k| samo pri istoj razmeri osa, a koordinate čitaj prema vrednosti svakog podeljka."
    ],
    "why": "Jedna nenulta tačka i početak određuju pravu, dok provera y=kx povezuje tačan račun sa položajem tačke na grafikonu.",
    "caution": "Ne zameni x i y niti broj podeljaka sa vrednošću koordinate. Tačka O sama ne određuje k. Za k=0 dobija se x-osa kao poseban grafik y=0.",
    "extraFormulas": [
      "A(x,y) pripada grafiku ⇔ y=kx",
      "k=[[frac:y_A|x_A]], x_A≠0",
      "Za x=0: y=0"
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
      "Razmera a:b predstavlja količnik a/b, pa b mora biti različito od nule. Proporcija a:b=c:d tvrdi da su te dve razmere jednake. Spoljašnji članovi su a i d, unutrašnji b i c; njihovi odgovarajući proizvodi moraju biti jednaki.",
      "Jednakost unakrsnih proizvoda koristiš i za proveru i za izdvajanje nepoznate. Obrtanjem obe nenulte razmere dobijaš ekvivalentnu proporciju. U tekstualnom zadatku redosled istih veličina mora biti usklađen na obe strane, a jedinice međusobno uporedive."
    ],
    "steps": [
      "Najpre proveri da li su imenitelji razmera različiti od nule.",
      "Označi spoljašnje i unutrašnje članove, pa napiši a·d=b·c.",
      "Za nepoznati član formiraj jednostavnu jednačinu, izračunaj proizvode i izdvoji nepoznatu deljenjem.",
      "Pri obrtanju obe razmere proveri da li su i njihovi novi imenitelji nenulti; zadrži isti redosled pripadajućih veličina.",
      "Proveri dobijeni broj u početnoj proporciji, a kod pronalaženja greške proveri i uparivanje proizvoda."
    ],
    "why": "Množenje jednakosti razlomaka nenultim zajedničkim imeniteljima daje jednakost unakrsnih proizvoda.",
    "caution": "Pravilo se ne primenjuje na razmeru sa nulom u imenitelju. Proizvod prvog i trećeg člana nije unakrsni proizvod.",
    "extraFormulas": [
      "a:b=c:d ⇔ a·d=b·c, b≠0, d≠0",
      "a:b=c:d ⇒ b:a=d:c, a≠0, c≠0",
      "Cena po komadu je stalna ⇒ n₁:n₂=C₁:C₂"
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
      "Zapis a:b:c=p:q:r znači da sva tri broja imaju isti zajednički deo t: a=pt, b=qt i c=rt. U pozitivnim podelama p, q, r i t su pozitivni. Brojevi p, q i r pokazuju koliko jednakih delova dobija svaka veličina.",
      "Zajednički deo određuješ iz poznatog zbira, razlike ili jednog člana. Uglovi trougla imaju zbir 180°, pa taj zbir deliš ukupnim brojem delova. Kada spajaš dva odnosa, zajedničkom članu najpre dodeli isti broj delova u oba zapisa."
    ],
    "steps": [
      "Sve članove izrazi pomoću istog t: a=pt, b=qt, c=rt.",
      "Saberi brojeve odnosa za poznat zbir; za poznatu razliku upotrebi razliku odgovarajućih brojeva odnosa.",
      "Iz poznatog člana odredi t deljenjem njegovim brojem delova; iz zbira ili razlike izvedi odgovarajuću jednačinu.",
      "Za uglove trougla koristi zbir 180°. Kod spajanja dva odnosa proširi ih dok zajednički član nema isti broj delova.",
      "Pomnoži t odgovarajućim članom odnosa i proveri zbir, razliku i odnos; ekvivalentan odnos dobijaš množenjem svih članova istim pozitivnim brojem."
    ],
    "why": "Svi članovi dele isti množilac t, pa podatak o zbiru ili razlici određuje njegovu vrednost.",
    "caution": "Ukupan broj delova nije broj grupa nego zbir članova odnosa. Dvotačke u produženoj proporciji nisu zapis uzastopnog deljenja niti se na tri člana prenosi unakrsno množenje.",
    "extraFormulas": [
      "[[frac:a|p]]=[[frac:b|q]]=[[frac:c|r]]=t",
      "a+b+c=(p+q+r)t",
      "c−a=(r−p)t",
      "α+β+γ=180°"
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
      "U raspodeli novca, količine ili dužine najpre poveži redosled grupa sa redosledom brojeva odnosa. Svaku količinu predstavi kao broj delova puta isti t. Podatak o celini daje zbir, razlika dva dela daje razliku koeficijenata, a jedan poznat deo omogućava direktno određivanje t.",
      "Geometrijski ili finansijski podatak ponekad nije odmah količina koja se deli. Kod pravougaonika zbir susednih stranica jeste polovina obima. Ako se prvo izdvajaju troškovi ili određeni procenat, samo preostali iznos deliš zadatim odnosom. Proveri da li dobijene količine i jedinice odgovaraju priči."
    ],
    "steps": [
      "Odredi šta se stvarno deli i kojoj grupi pripada svaki broj odnosa.",
      "Za poznat zbir formiraj (p+q+r)t=S; za razliku formiraj odgovarajuću razliku, a za poznat član podeli njegov iznos brojem delova.",
      "Pre podele obradi dodatni uslov: kod pravougaonika uzmi O/2, a kod troška ili procenta prvo izračunaj raspoloživi ostatak.",
      "Izračunaj t i traženi član; ako se traži ukupna količina, poznati t pomnoži zbirom koeficijenata.",
      "Proveri sve odnose i konačan zbir ili razliku. Za broj ljudi rezultat mora biti ceo broj, a za novac i dužine dodaj traženu jedinicu."
    ],
    "why": "Jedan zajednički deo povezuje sve grupe, a pravilno izdvojena količina za raspodelu čuva početne uslove zadatka.",
    "caution": "Ne deli automatski prvobitni iznos ako je deo već potrošen. Najmanji, srednji i najveći deo određuje broj delova, a ne položaj grupe u priči.",
    "extraFormulas": [
      "t=[[frac:S|p+q+r]]",
      "Ukupno=(p+q+r)t",
      "a+b=[[frac:O_pravougaonika|2]]",
      "Ostatak=S−[[frac:u|100]]·S"
    ],
    "sourcePages": "Udžbenik 7, str. 36 i 38–39; oktobarski plan, čas 24.",
    "visuals": [
      "Raspodela jedne celine u tri trake sa jednakim jediničnim delovima.",
      "Celina podeljena na trošak i raspoloživi ostatak, zatim ostatak u zadatoj razmeri.",
      "Pravougaonik sa dve vrste stranica i vezom a+b=O/2."
    ]
  }
};

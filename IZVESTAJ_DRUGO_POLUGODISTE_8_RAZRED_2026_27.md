# Drugo polugodište osmog razreda, 2026/27.

Osmi razred sada ima 39 lekcija. Dvanaest novih nadovezuje se na 27 postojećih. Razvoj je započet sa objedinjenog commita `279a4cf240efe36ad67d833e6e81db5cd02d0464` koji uključuje prva polugodišta sva tri razreda i oba prethodno završena druga polugodišta. Novi redovni sadržaj pripada osmom razredu.

## Realizovane nastavne jedinice

Raspored predstavlja operativni predlog za škole izvan AP Vojvodine. Redovna nastava za osmake završava se 28. maja. Kratka priprema za ispit dostupna je i ranije, uključujući period pre probnog ispita u martu.

| Mesec | Jedinica | Šta učenik samostalno radi |
|---|---|---|
| Januar | [Dijagonale, preseci i osnove pravih prizmi](app/content/spring8/prizma.ts) | Izaberi presek koji sadrži traženu duž i poveži mere osnove sa visinom tela. |
| Januar | [Visine, mreža i površina piramide](app/content/spring8/piramida.ts) | Razlikuj visinu tela, visinu bočne strane i bočnu ivicu. Odredi površinu iz mreže. |
| Februar | [Zapremina piramide i karakteristični preseci](app/content/spring8/zapremina.ts) | Izračunaj zapreminu, odredi nepoznatu dimenziju i objasni koji presek je potreban. |
| Februar | [Od zavisnosti i tabele do grafika](app/content/spring8/funkcija.ts) | Sastavi tabelu, nacrtaj pravu i protumači nagib i početnu vrednost. |
| Februar | [Nula, znak, monotonost i položaj pravih](app/content/spring8/znak.ts) | Pročitaj osobine funkcije i pređi iz implicitnog zapisa u eksplicitni. |
| Mart | [Uređeni par, zamena i suprotni koeficijenti](app/content/spring8/sistemi.ts) | Reši dve jednačine i grafički i algebarski. Proveri obe koordinate u obe jednačine. |
| Mart | [Kako iz teksta nastaje sistem](app/content/spring8/model.ts) | Postavi dva nezavisna uslova, proveri račun i proceni da li dobijeni par ima smisla. |
| April | [Valjak od rotacije do mreže i zapremine](app/content/spring8/valjak.ts) | Prepoznaj osni presek, razvij omotač i biraj između površine i zapremine. |
| April | [Kupa, izvodnica i kružni isečak](app/content/spring8/kupa.ts) | Poveži osni presek i mrežu kupe. Izaberi H ili s prema tome šta meriš. |
| Maj | [Lopta, sfera i ravni preseci](app/content/spring8/lopta.ts) | Razlikuj telo i njegovu granicu, izračunaj površinu, zapreminu i poluprečnik preseka. |
| Maj | [Pet tela, složeni oblici i merne jedinice](app/content/spring8/tela.ts) | Raščlani složeno telo, izostavi spojene površine i uskladi merne jedinice. |
| Maj | [Godišnja sistematizacija i istraživanje ambalaže](app/content/spring8/godina.ts) | Poveži razmeru, jednačine, funkcije i merenje. Obrazloži izbor modela i proveri rezultat. |
| Jun | [Priprema za završni ispit](app/eighth-exam.tsx) | Bira oblast posle dijagnostike, vežba i rešava autorski test u vremenskom okviru. |

## Zadaci, primeri i bodovanje

| Namena | Osnovni | Srednji | Napredni | Ukupno |
|---|---:|---:|---:|---:|
| Deset zadataka za rad u svakoj lekciji | 48 | 48 | 24 | 120 |
| Dodatni zadaci za vežbanje | 0 | 12 | 0 | 12 |
| Dvanaest mini-provera | 12 | 12 | 12 | 36 |
| Osam provera oblasti | 12 | 12 | 12 | 36 |
| Tri završne nastavne provere | 5 | 10 | 9 | 24 |
| Dijagnostika | 5 | 3 | 2 | 10 |
| Tri simulacije, po 20 zadataka | 27 | 24 | 9 | 60 |
| **Ukupno** | **109** | **121** | **68** | **298** |

Uz 298 jedinstvenih zadataka postoje 36 rešenih primera, tri kratka pitanja za obnavljanje V razreda uz podsetnik i interaktivni zadaci za konstrukciju i čitanje grafika. Njih ne sabiramo sa bodovanim fondom. Svaka jedinica ima predznanja sa vezama, cilj, uvod, postupak, izdvojenu napomenu o čestoj grešci, tri rešena primera i mini-proveru.

Provere oblasti služe za pripremu kontrolnih vežbi. Na kraju maja slede provera drugog polugodišta, godišnja i napredna problemska provera, svaka po osam zadataka. Učenik dobija po jedan bod za odgovor tačan iz prvog pokušaja. Naknadno rešavanje i pregled postupka omogućuju vežbanje uz sačuvani početni rezultat. Godišnja i napredna provera služe i za pripremu školskog pismenog zadatka.

## Interaktivna matematika

| Prikaz | Šta učenik istražuje |
|---|---|
| Funkcija, tabela i koordinatna mreža | Dva klizača menjaju nagib i odsečak. Učenik ispituje nulu, znak i monotonost, postavlja pravu kroz tačke i određuje pravilo sa crteža. |
| Dve jednačine u ravni | Menja šest koeficijenata. Presek, paralelne prave, poklapanje, vertikala, identitet i protivrečnost povezani su sa prikazom algebarskih koraka. |
| Prizma i piramida | Rotacija, zum, providnost, skrivene ivice, mreže, dijagonalni i karakteristični preseci, bočna visina i bočna ivica. Trougaona, kvadratna i pravilna šestougaona osnova. |
| Krov nad pravougaonikom | Nezavisna promena obe osnovne ivice i visine. Ravan kroz centar daje različite bočne visine uz dužu i kraću ivicu. |
| Valjak i kupa | Rotacija ravne figure, osni presek i ravanska mreža. Omotač se odmotava u pravougaonik ili kružni isečak uz očuvanje dužine odgovarajuće ivice. |
| Lopta i sfera | Promena rastojanja ravni od centra, veliki krug i dodirna ravan. Polukrug i polukružnica pri rotaciji daju različite objekte. |
| Izdvojeni crteži | Šematsko telo sa naznačenom ravni ili stranom i izdvojeni pravougli trougao. Poznati i traženi elementi navedeni su u čitljivoj legendi. |

Modeli koriste SVG i prostorne koordinate bez nove grafičke biblioteke. Klizači i dugmad rade dodirom i tastaturom. U režimu smanjenog kretanja učenik sam pomera fazu. Glatka površ se na ekranu aproksimira poligonima. Veličine se računaju analitički sa izvornim dimenzijama. Zaključci o odnosima zapremina u modelu su ilustracije.

## Priprema za malu maturu

Dijagnostika ima po dva pitanja za svaku od pet grupa. Posle predaje učenik vidi bodove po grupama i veze do nastavnih jedinica za svoje greške. Podsetnik povezuje deljivost i razlomke, racionalne brojeve, procente, izraze, geometriju, jednačine, sisteme, merne jedinice i statistiku sa primerima i uslovima primene.

Tri autorska testa uključuju kratke račune, podatke iz svakodnevnog života, uređene parove, tabele, crteže i zadatke u više koraka. Svaki nosi do 20 bodova. U poslednjem zadatku dva nezavisna zahteva vrede po 0,5. U režimu simulacije rok je 120 minuta i traje i tokom prekida ili osvežavanja. Rešenja se otvaraju nakon predaje ili isteka roka. U režimu rada učenik može ranije otvoriti nagoveštaj. Nastavnik može posebno pregledati pisani postupak. Zvanični ključ i konkretni zadaci za 2027. nisu unapred potvrđeni. [Izvori i tumačenje ispitnog okvira](PLAN_DRUGO_POLUGODISTE_8_RAZRED_2026_27.md).

## Matrica godišnjih ishoda

| Učenik na kraju godine može da… | Mesto u platformi (ID) | Dokaz koji se traži od učenika |
|---|---|---|
| postavi razmeru odgovarajućih duži i primeni Talesovu teoremu | razmera-duzi, proporcionalnost, talesova-teorema | Račun dužine pri paralelnom presecanju krakova ugla |
| prepozna slične trouglove i upotrebi sličnost u realnom problemu | stavovi-slicnosti, primene-slicnosti, slicnost-pravougli | Izbor parova stranica, visina dobijena poređenjem senki |
| opiše uzajamni položaj tačaka, pravih i ravni i odredi ortogonalnu projekciju | odnosi-pravih-ravni, dve-ravni, ortogonalnost, ortogonalna-projekcija | Prepoznavanje odnosa i projekcije na crtežu |
| reši jednačinu i obrazloži ekvivalentnu transformaciju | ekvivalentne-transformacije, svodjenje-jednacina, primena-linearnih-jednacina | Jednačina dobijena iz teksta i provera njenog rešenja |
| reši nejednačinu i protumači ograničenje | linearne-nejednacine, slozene-nejednacine, s8-znak | Promena smera pri deljenju negativnim brojem i izbor dozvoljene celobrojne vrednosti |
| skicira prizmu i njenu mrežu, razlikuje karakteristične duži i odredi površinu i zapreminu | prizma-elementi, prizma-mreza, prizma-zapremina, s8-prizma | Kocka, kvadar i druge osnove, pravougaonik dijagonalnog preseka kada postoji |
| razlikuje visinu piramide, bočnu visinu i bočnu ivicu, izabere presek | piramida-elementi, s8-piramida | Obeležavanje elemenata, izbor hipotenuze, račun bočne visine |
| koristi površinu i zapreminu piramide u odgovarajućim uslovima | s8-piramida, s8-zapremina | Trougaona, četvorougaona i šestougaona osnova, pravougaoni krov sa dve različite bočne visine |
| uskladi funkcijsko pravilo, tabelu i grafik u oba smera | s8-funkcija | Očitavanje koeficijenata i nameštanje prave kroz zadate tačke |
| odredi znak, nule i monotonost i prevede implicitni oblik kada je to moguće | s8-znak | Posebni slučajevi horizontalne i vertikalne prave, poređenje tarifa |
| reši sistem grafički i računski, razlikuje broj rešenja | s8-sistemi | Zamena, eliminacija, provera para, identitet ili protivrečnost |
| formira i protumači model sa dve nepoznate | s8-model | Provera oba uslova i odbacivanje necelog broja predmeta |
| poveže rotaciju pravougaonika sa valjkom i koristi njegovu mrežu | s8-valjak | Osni presek, pravougaoni omotač, površina i kapacitet |
| poveže kupu sa rotacijom trougla, objasni dužinu luka mreže | s8-kupa | Razlika između visine i izvodnice, veza luka i obima osnove, površina i zapremina |
| razlikuje sferu i loptu, odredi ravan presek, površinu i zapreminu | s8-lopta | Krug ili kružnica, veliki krug, slučaj dodirne ravni |
| odabere model tela u situaciji merenja i pretvori jedinice | s8-tela, s8-godina | Kapacitet, površina materijala, odnos zapremina i složena tela |
| učestvuje u izboru istraživačkog pitanja i načina rada, predstavi i objasni rezultat | s8-godina | Skica i tabela merenja ambalaže, poređenje deklaracije i proračuna, zaključak i izlaganje |

## Matematička i tehnička kontrola

| Provera | Rezultat 26. novembra 2026. |
|---|---|
| Nezavisan računski i pojmovni ključ | Svih 298 očekivanih odgovora upoređeno je sa odvojenim ključem. Provereni su i jedinstveni tekstovi i identifikatori. |
| Egzaktni odgovori | Razlomci, decimalni zarez, ekvivalentni izrazi sa π, korenima i uređeni parovi. Zaokružena vrednost za iracionalan rezultat i zamena redosleda koordinata odbijaju se. |
| Algebra | Za svih 15.625 kombinacija šest koeficijenata iz skupa {−2, −1, 0, 1, 2} proverena je klasifikacija. Za jedinstveno rešenje proverene su obe početne jednačine. |
| Dinamička geometrija | Analitička provera površine i zapremine za dozvoljene celobrojne poluprečnike i visine, tri mnogougaone osnove, krajnja ravnost mreža i očuvanje izvodnice pri odmotavanju. |
| Pregled sadržaja | Zasebno su razmotreni uslovi pravilnosti, izbor katete i hipotenuze, znak pri nejednačinama, praktično dopušten domen i tačan ili približan rezultat. Revizija je sprovedena pomoću AI i programskih testova. |
| TypeScript i lint | `npm run typecheck` i `tsc --noEmit -p tsconfig.qa.json` prolaze. Lint ima 0 grešaka i 5 upozorenja o nekorišćenim imenima. |
| Build i regresija | Produkcijski build i GitHub Pages build prolaze. Od 105 automatizovanih testova prošlo je 105, bez preskočenih. |
| Stari sadržaj i podaci | 17 od 17 zajedničkih browser scenarija prolazi. Dodatno su proverene sve druge polovine VI i VII razreda, njihove mini-provere, provere oblasti i godišnje provere. |
| Novi redovni sadržaj | Na širinama 360, 768 i 1920 px provereni su mesečna navigacija, primeri, kontrole, prelaz na zadatke, povratak, ćirilica i horizontalna širina. Na telefonu završene su sve 23 redovne provere uz proveru bodova nakon učitavanja. |
| Cele učeničke putanje | Otvoreno je 35 oblasti i 133 lekcije u statičkoj podputanji `/matematikon6-8/`. U ovim scenarijima nije zabeležena greška konzole, mreže ili izvršavanja aplikacije. |
| Lokalna provera odziva | Na modelu sfere sa 512 poligona testirano je 30 promena poluprečnika po profilu. Medijana i 95. percentil vremena do drugog animacionog kadra iznosili su približno 33 ms na oba prikaza. Lokalni događaj učitavanja zabeležen je posle 100 ms na širini 360 px i 41 ms na širini 1366 px. Merenje je izvršeno u Chromiumu sa lokalnim serverom, bez simulacije sporije mreže ili procesora. |
| Ispit i animacija | Dijagnostika 10/10 i po 19,5/20 za tri simulacije sa jednim izostavljenim poluodgovorom. Provereni su skrivanje pomoći do predaje, obnova roka, istek, promena režima, sve vrste tela i automatski i ručni tok animacije. |

Tokom pregleda dopunjeni su crteži uz zadatke, razdvojene su vidljive i skrivene ivice zatvorenog poliedra i presek lopte od preseka sfere. Doterano je prepoznavanje ekvivalentnih egzaktnih izraza. Razmak između zasebnih cifara više se ne tumači kao njihov spoj. Birači tela i metoda dobili su eksplicitne pristupačne nazive. Ispravljeni su pomoćni zahtev treće simulacije i nastavak rada u drugom režimu nakon završenog testa.

## Audit i granice provere

Godišnji inventar navodi 45 lekcija VI, 49 lekcija VII i 39 lekcija VIII razreda, sa svakom pojedinačnom jedinicom, mesecom, nivoima, proverenim rutama i modelima. Prethodnih 121 identifikatora je sačuvano. Osnovni ključ napretka ostaje `matematikon68-progress-v1-<razred>`. Ispitna sesija pamti se zasebno na istom uređaju. [Kompletan audit](AUDIT_KOMPLETNOG_MATEMATIKON6_8_2026_27.md).

Nisu sprovedeni terenski test na fizičkoj Windows 11 tabli ni nezavisna ljudska recenzija. Automatsko bodovanje obuhvata ponuđene odgovore i podržani školski zapis, a otvoren dokaz, postupak u svesci i izlaganje projekta procenjuje nastavnik. Prvo učitavanje statičkog JavaScripta je približno 374 kB sa gzip kompresijom. Ograničenja ranijih kratkih provera i predlozi za poboljšanje zapisani su u auditu.

## Izvorni fajlovi i revizija

- [Redovne jedinice, fond zadataka i provere](app/content/spring8) i [navigacija](app/page.tsx).
- [Grafici](app/eighth-algebra.tsx), [tela i mreže](app/eighth-solids.tsx), [pravougaoni krov](app/eighth-rectangle.tsx) i [ilustracije uz zadatke](app/eighth-figures.tsx).
- [Provera tačnog unosa](app/eighth-answer.ts), [integracija u rad učenika](app/lesson-work.ts) i [ispitni režimi](app/eighth-exam.tsx).
- [Matematički testovi](tests/spring8.test.mjs), [redovne putanje](qa/spring8-browser.mjs), [sve rute i ispit](qa/spring8-exam-browser.mjs) i [ponovljivi inventar](qa/platform-inventory.mjs).
- [Razvojna grana](https://github.com/Milosprofessor/matematikon6-8/tree/feature/drugo-polugodiste-8-razred-2026-27). [Završni funkcionalni commit dab46d4b18ee1308d8302ac5024b2b5b82b996e3](https://github.com/Milosprofessor/matematikon6-8/commit/dab46d4b18ee1308d8302ac5024b2b5b82b996e3).
- Završni dokumentacioni commit nosi naslov „Dokumentuj realizaciju osmog razreda i godišnji audit platforme“. Njegov SHA može se očitati komandom `git log -1 --format=%H -- IZVESTAJ_DRUGO_POLUGODISTE_8_RAZRED_2026_27.md` na razvojnoj grani i u opisu pull requesta.

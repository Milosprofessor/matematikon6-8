# MatematikON6–8 — faza 2C, recenzija šestog razreda (checkpoint 1)

Datum: 27.11.2026. Polazni GitHub commit edb40b96dad2583657e46115f686ce68c595c691. Sadržajni commit: 0a8c2145da4b505cca5645a08b629bb0475d7e4f. Grana fix/matematikon6-8-math-methodology-phase-2; PR #6. Bez spajanja i objave.

## Inventar i stvarno pokriće

| Stavka | Ukupno | Potpuno pregledano u 2C | Delimično | Nepregledano u 2C |
|---|---:|---:|---:|---:|
| Jedinstveni zadaci | 919 | 45 | 0 | 874 |
| Lekcije | 45 | 1 | 0 | 44 |
| Postojeći glavni rešeni primeri | 81 | 1 | 0 | 80 |
| Novi rešeni primeri | 2 | 2 | 0 | 0 |
| Godišnji ishodi | 17 | 0 | 0 | 17 |

Potvrđeno 45 nagoveštaja i 45 postupaka, uključujući sve konkretne varijante sedam porodica generatora. Ovo je matematička i metodička recenzija, ne pojedinačna UI provera svih 45 zadataka. 10 redovnih zadataka testirano na desktopu i mobilnom touch prikazu. Prethodni audit nije automatski preuzet kao nova recenzija. Praktične veštine i godišnji ishodi nisu potvrđeni ovom oblašću predznanja.

## Završena oblast: Obnavljanje gradiva 5. razreda
Jedna lekcija (kratko-obnavljanje-5); 3 statička zadatka i 7 generatora × 6 varijanti =45. Dovoljnost podataka, konkretni parametri, matematička tačnost, ponuđene alternative, nagoveštaji, postupci, zapis, merne jedinice i težina provereni su semantički i nezavisnom egzaktnom aritmetikom. Sva očekivanja odgovora i ID-jevi ostaju nepromenjeni.

- Prirodni brojevi: 4205−1987=2218; razrađeno oduzimanje po mesnim vrednostima.
- Razlomci: 3/8+2/8=5/8; svih šest decimalnih, poređenja i nepoznatih sabiraka provereno egzaktnim razlomcima; konkretne alternative su međusobno različite po vrednosti.
- Poredak: svih šest sortiranih trojki je jedinstveno tačno; postupci i hintove nije potrebno nepotrebno produžavati.
- Uglovi: opšta relacija α+β=180°, zamena i konačna vrednost u stepenima; šest varijanti.
- Izrazi: šest nezavisnih računa, množenje pre sabiranja i oduzimanja; rezultat 16 u svakoj varijanti; zadržana matematička konstrukcija i očekivanja. Ograničenje: ponavljanje šablona ne predstavlja šest različitih ideja.
- Pravougaonik: svih šest pozitivnih vrednosti b=O/2−a verifikovano; kompletna jednačina sa formulom, zamenom i inverznim operacijama. Tražena jedinica eksplicitna.
- Kolinearnost: poboljšani distraktori. U zadacima nema zasebnih crteža; teorijski prikaz pravougaonika odgovara oznakama a i b, dijagonala nije deo obima.

### Metodika i klasifikacija
37 zadataka promenilo je nivo; ukupno 27 osnovnih i 18 srednjih. Nema naprednih u ovoj oblasti predznanja: postojeći zadaci ne zahtevaju složenu strategiju ili argumentovanje. Redovni tok od 10 postojećih ID-jeva je ostao isti. Test opšteg inventara je dokumentovano sužen samo za ovu lekciju, jer je staro očekivanje „sva tri nivoa“ konfliktno sa traženom pedagoškom klasifikacijom; dodata stroga regresija 27/18 za konkretan fond. Prvobitni neuspeh čuva se u tests-before-calibration-invariant.log. Snapshot izmenjen samo u nameravanom obuhvatu.

Dopunjena teorija: redosled operacija istog prioriteta sleva nadesno. Zadržan originalni rešeni primer računskog izraza, dodati raznovrsni primeri sabiranja razlomaka i određivanja nepoznate stranice pravougaonika. Sva tri rezultata su nezavisno potvrđena. Razumevanje predznanja se proverava vežbanjem, ne predstavlja dokaz godišnjeg ishoda.

### Nalazi
Četiri nova sadržajna/metodička nalaza G6C-001–004 ispravljena su; 39 zadataka ima bar jednu konkretnu izmenu. Zatečeni LOG-06 dokumentovan na 12 konkretnih ID-jeva: numerički odgovor je prihvaćen, ali npr. 140° i 7 cm kao matematički tačni odgovori sa jedinicama nisu. Nije menjan zajednički validator; precizna lista i sačuvani dokazi u units.json, za fazu 3. Matematička recenzija tih 12 zadataka jeste završena, tehnički nalaz nije. U ovom prolazu nije dodeljivan status ostvarenja godišnjih ishoda.

## Testovi
- 45/45 nezavisnih egzaktnih provera zadataka, 3/3 provere rešenih primera.
- 114/114 programska testa (113 postojećih i 1 novi ciljani); TypeScript, lint, Worker build i Pages build uspešni.
- 22 browser zapisa: 10 redovnih zadataka × 2 rezolucije + 2 prikaza tri primera uz proveru osvežavanja i ćirilice. Testirano emulacijom 1366×768 i 390×844 sa touch tap. Na zadatku pravougaonika provereno odbijanje pogrešnog odgovora, nagoveštaj, postupak i tačan odgovor.
- Browser regresija čuvanja napretka: postojeća skripta critical-storage.py, izlaz 0, sačuvani dokazi.
- Upozorenja o veličini paketa, Vite WebSocket portu i postojećim lint upozorenjima (bez grešaka).
- Nisu pojedinačno kroz UI birane svih 42 generisanih varijanti, niti su testirani fizički telefon i školska tabla. Nisu pregledane ostale oblasti u ovom prolazu.

## Evidencija i nastavak
Mašinski čitljiva evidencija: qa/phase2c/grade6/ledger-tasks.json (919 redova), ledger-lessons.json (45), obnavljanje-5/tasks.json (45), lesson.json (3 primera), units.json (12), browser.json i logovi. Excel MATEMATIKON6_EVIDENCIJA_MATEMATICKE_RECENZIJE.xlsx sadrži i 83 postojeća/nova primera, oznaku statusa svake stavke i listu jedinica. Registar i matrica nastavnih ishoda ažurirani uz očuvanje ranijeg statusa.

**Poslednja završena oblast:** obnavljanje-5. **Prva sledeća nepregledana oblast:** celi-brojevi, lekcija skup-celih-brojeva, ID 6-1a. Ostatak: 874 zadatka, 44 lekcije, 80 postojećih glavnih primera, 17 godišnjih ishoda.

Reprodukcija: node_modules/.bin/esbuild qa/phase2/export-original.ts --bundle --platform=node --outfile=/tmp/g6-export.cjs; node /tmp/g6-export.cjs. Zatim esbuild qa/phase2c/grade6/unit-review.ts; python qa/phase2c/grade6/verify-review.py; python qa/phase2c/grade6/make-ledger.py. Browser: QA_CHROME=<izvršni Chromium> python qa/phase2c/grade6/browser-review.py posle build-a Pages. Storage: iz nadređenog direktorijuma CHROME=<Chromium> QA_RESULTS=<direktorijum> python repo/qa/critical-storage.py. Logovi su u qa/phase2c/grade6/obnavljanje-5.

**Faza 2C nije završena.** Ovo je prva celovita oblast, stvarno pregledana i testirana; nema tvrdnje o kompletnoj recenziji šestog razreda ili stabilnoj v1.0.

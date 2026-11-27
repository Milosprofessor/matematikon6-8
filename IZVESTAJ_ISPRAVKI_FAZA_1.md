# Ispravke kritičnih nalaza audita, faza 1

Rad se zasniva na auditu od 26.11.2026. i commitu `7019cab9ca86d42d9c2f10eeb49fc9fde21a7a85`. Razvojna grana je `fix/matematikon6-8-critical-audit-phase-1`. Produkcijski domen i glavna grana ostaju izvan ovog predloga promena. Oznaka v1.0 nije dodeljena.

## Priprema i reprodukcija

Pročitani su PDF izveštaj, registar, matrica ishoda, plan i QA korpus prethodnog audita. Izvršen je nezavisan poziv parsera i reprodukovan rad u sintetičkom profilu Chromium-a. Greške i očekivane matematičke vrednosti proverene su pre ispravki. Kopije originalnog registra ostaju referenca. Ažurirani statusi su u `qa/critical-audit-register.json`.

## Tehničke ispravke

| Nalaz | Uzrok i reprodukcija | Ispravka | Dokaz |
|---|---|---|---|
| LOG-01 | Dve kartice čitaju ceo stari zapis i sledećim upisom prepisuju rad druge. | Svaki upis se serijalizuje preko Web Locks, čita poslednji zapis i ponovo primenjuje konkretnu funkcionalnu izmenu. Storage događaj osvežava drugu karticu. Optimistički prikaz čuva odziv, a završni rezultat čeka završen upis. | `qa/critical-storage.py`, pre/posle dve lekcije, osveženje, restart i promena razreda. |
| LOG-02 | SecurityError i QuotaExceededError izlaze iz rendera/effect-a. | Sva aktivna čitanja/upisi imaju zaštićenu granicu. Vidljivo upozorenje objašnjava rad u memoriji. Prati se upis u toku i sprečava nenamerni odlazak dok traje. Nečitljiv trajni zapis se ne prepisuje početnim stanjem. | Ista browser skripta, zabrana čitanja i puna kvota. |
| LOG-03 | `knowledgeAttempts:[null]` prolazi spoljašnju proveru niza i ruši računanje. | Svaki istorijski pokušaj se proverava. Nevažeći elementi ne ulaze u računanje. Pre normalizovanog upisa čuva se tačna izvorna kopija pod ključem za oporavak. Nevalidan JSON ostaje netaknut, novi rad ostaje u sesiji uz upozorenje. | Ista skripta, nevalidan JSON i pojedinačni null. |
| LOG-04 | Brisanje razmaka pretvara `1 2/4` u `12/4`. | Mešovit broj se pretvara u racionalan zbir pre normalizacije. Predznak se odnosi na ceo mešovit broj. Nulti imenilac i nekanonski nepravi razlomljeni deo se odbijaju. Brojevi razdvojeni razmakom se ne spajaju. | Unit regresija uključuje ±1 1/2, 1 2/4, 1 2, 1 1/0. |
| LOG-05 | Provera razvijenog oblika tražila je samo odsustvo zagrada. | U sređenom obliku svaki monom ima jedan nenulti član i jedan brojčani koeficijent. Ostaje dozvoljen drugačiji redosled i zapis `x*5`. Zbir istih monoma i neizračunati proizvodi nisu završni oblik. | `6x+x-x`, `x*x`, `2*3x` odbijeni, `6*x`, `3+x*5` prihvaćeni. |
| LOG-06 | Ocenjivač nema ciljnu jedinicu i ne razume `7,5 m`. | Zadatak t8-9 ima eksplicitnu metapodatkovnu jedinicu m. Prihvata broj, ispravnu jedinicu i egzaktnu konverziju dužine. Pogrešna dimenzija se odbija. Ocenjivač ne odbacuje proizvoljne sufikse bez konteksta. | 7,5 m, 15/2 m, 750 cm tačno. 7,5 cm, 750 m i 7,5 kg netačno. |
| LOG-07 | Parser tačnih izraza nema stepen. | Dodat je ograničen nenegativan celobrojni stepen do 10, bez eval i izvršavanja koda. Ostaje egzaktna aritmetika. | `5^2*pi=25π`, odbijeni pogrešan stepen, decimalno približenje i 0^0. |
| LOG-09 | `Number` zaokružuje `3.0000000000000000001e0` na 3. | Naučni zapis se prevodi u racionalan broj preko BigInt, sa ograničenim eksponentom i dužinom unosa. | Blisko ali različito odbijeno, `3e0`, `15e-1` prihvaćeni. |

Glavni fajlovi su `app/storage.ts`, `app/page.tsx`, `app/i18n.tsx`, `app/eighth-exam.tsx`, `app/lesson-work.ts`, `app/eighth-answer.ts`, `app/polynomial-answer.ts` i `app/content/types.ts`.

## Očuvanje podataka i ograničenja

Postojeći ključevi `matematikon68-progress-v1-6/7/8`, ključ pisma i ispitni ključevi zadržani su. Nema clear/removeItem niti reseta učeničkog rada. Web Locks rešava konkurentne operacije u podržanim savremenim pregledačima. Kada ta mogućnost nedostaje, rad ostaje u kartici uz izričitu poruku. Trajni upis tada se ne prikazuje kao uspešan. Za ranije nečitljivo ili neuspešno skladište automatsko prepisivanje se obustavlja do ponovnog otvaranja. Korisnik je upozoren da se novi rad nalazi u sesiji. Rad u memoriji ne može preživeti gašenje pregledača.

## Matematičke ispravke

| Nalaz | Izmena i nezavisno obrazloženje |
|---|---|
| CORE-M01 | Ispravljen generator svih šest `ow-ineqtri-strict-*`. Opcija `c≤a+b` zamenjena je `c≥a+b`. Samo `c<a+b` ostaje nužan među ponuđenim opcijama. Na primer, za stranice 4 i 5 važi 1<c<9. |
| CORE-M02 | U `o6-su-1` i `o6-ut-5` koriste se naporedni uglovi. Obična susednost ne daje zbir od 180°. |
| G6-001 | `6-4i` sada traži konačnu temperaturu. −6+10=4 °C. Promena je +10 °C. |
| G6-002 | `6-11j` sada traži konačno stanje. −12+3·5−4=−1. Promena je +11. |
| G6-003 | U `s6-merenje-16` eksplicitno je imenovan paralelogram. Prirast površine je 9·(7−5)=18 cm². |
| G6-004 | Tvrdnja o suprotnim stranama nule ograničena je na nenulte brojeve. Za 0 suprotni broj je ponovo 0. |
| G6-005 | Dva kruga zamenjena su dvema kružnicama u `s6-cetiri-stranice-7`. Njihova dva preseka daju temena romba. |
| G6-006 | Pitanje sa 3+5=8 sada opisuje pokušaj konstrukcije, umesto da pretpostavlja nedegenerisan deltoid. |
| G6-007 | `6-9j` traži prosečnu dnevnu promenu, −36:6=−6. |
| G6-009 | U obrnutu proporcionalnost dopisani su k≠0 i x≠0. |
| G7-003 | U o7-pp-3 i o7-pp-6 eksplicitno stoji da su to unutrašnji uglovi istog trougla. Zbir 180° daje 75° odnosno 30°. |
| G7-006 | Zadatak sa kućicom više ne upućuje na nepostojeći crtež. Tekst određuje oba dela. 8·5+8·3/2=52 cm². |
| G7-007 | U označenim beskonačnim zapisima eksplicitno je navedeno pravilo rasta broja nula. Time je određen neperiodičan nastavak. |
| G8-001 | Presek ravni susednih strana kvadra je prava kroz zajedničku ivicu. Ponuđena opcija i ključ su ispravljeni. |
| G8-002 | `8r-3` eksplicitno traži trougao. P=8·5/2=20 cm². |
| G8-003 | U `8-3h` uklonjena je druga takođe proporcionalna opcija a i a. Nova netačna opcija je a i b+1. |
| G8-004 | U označenim zadacima plana/modela naznačeni su metri ili centimetri rezultata. |
| G8-008 | Strane kvadra opisane su kao figure koje leže u paralelnim ravnima. |

Sačuvani su identifikatori, raspored i nivoi. Zamrznuti fixture je ažuriran samo za navedene promenjene stavke. Regresija čuva preostale zadatke, redosled i crteže. Novi matematički test nezavisno proverava nameru ispravki pre novog kontrolnog hash-a. Promena fixture-a nije dokaz matematičke ispravnosti.

## Bezbednost CORE-SEC01

Zaključani React, React DOM i react-server-dom-webpack 19.2.6 zamenjeni su sa 19.2.9. Next 16.2.6 zamenjen je sa 16.4.6, uz odgovarajući eslint-config-next. RSC upozorenje GHSA-xqc2-xf4c-x3h3 eksplicitno navodi zakrpljenu verziju 19.2.9. Worker koristi serverski RSC ruter, pa ovaj paket nije tretiran kao isključivo statička zavisnost. Javna eksploatacija nije pokušavana.

Ponovljeni npm audit daje 0 critical, 15 high, 15 moderate i 1 low. Ukupno 31 paket, uključujući tranzitivne/build pakete. Dokaz je `qa/phase1-results/final/npm-audit.json`. Preostala upozorenja zahtevaju odvojeno praćenje. Vite/launch-editor su razvojni server, Zod nije aktivni javni validator učeničkog API-ja, a upozorenja image-size i @vercel/og prolaze preko Vinext stabla. Aktivna aplikacija ne omogućava učeničko otpremanje tih slika ni generisanje OG slike. Ovaj pregled ne proglašava ceo zavisnosni graf bezbednim. Migracija Vinext na novu glavnu verziju i ostale zavisnosti ostaje naredni kontrolisani korak.

Izvor upozorenja je https://github.com/advisories/GHSA-xqc2-xf4c-x3h3 .

## Testovi, commit i status

Izvršni rezultati finalnog prolaza nalaze se u `qa/phase1-results/final/`. Regresioni testovi su `tests/critical-audit-phase1.test.mjs` i `qa/critical-storage.py`. Postojeći browser testovi čekaju završetak javno označenog upisa pre osveženja i provere trajnog zapisa. Ranija pretpostavka sinhronog upisa više ne važi uz međukartičnu transakciju. Otkriveni i popravljeni zastoji u toku razvoja nisu označeni kao uspešni prolazi.

Commit osnovnih ispravki na GitHubu je `08ebb50b35cdab3fa1558420f48a543607ae83eb`. Njegovo izvorno stablo je bajt-po-bajt identično lokalno testiranom commitu `9c535669f527591ee701855009ec4269e56953e1`. Dopune testova i prihvatanja ćiriličnog х nalaze se u sledećem commitu grane. Završni statusi i reference nalaze se u registru u istoj grani. Potrebni konačni rezultati su 112 unit/integracionih testova, oba build-a, TypeScript i lint, pet browser skripti i nezavisna provera skladišta. Unit i integracione provere prolaze 112/112. Ciljani skript `qa/critical-content.ts` nezavisno proverava 13 izmenjenih numeričkih zadataka sa tri ulaza, šest varijanti nejednakosti trougla i presek ravni. Svih 21 ciljanih ulaza iz audita sada daje očekivan rezultat. Dodatna UI provera `qa/critical-cyrillic.py` potvrđuje prihvatanje i tačno čuvanje odgovora 6х kroz stvarnu lekciju. Svih pet browser skripti daje izlazni kod 0. Provere obuhvataju sve razrede, prolećne lekcije, mini-provere, oblasti, završne provere, ispitni centar i telefon/tablet/emuliranu tablu. Prethodni neuspešni izlazi tokom prilagođavanja upisa zadržani su u browser-exits-history.txt.

## Naredna faza

Pitagorin metodički sled svih identifikovanih kateta, nedovršeni rešeni primeri, preostala kalibracija težine, ilustracije, konstrukcije i pristupačnost ostaju u narednoj fazi plana. LOG-08, LOG-10, CORE-UI01, CORE-A01 i ostali neobrađeni redovi zadržavaju otvoren status. Fizička Windows tabla i stvarni telefoni nisu bili predmet ove lokalne regresije. Ovaj izveštaj ne daje oznaku v1.0 niti odobrenje za javno objavljivanje.

Rad je dovršen kroz prolaze 26. i 27. novembra 2026. Direktan Git push nije imao pristupne podatke. Izmene su prenete povezanim GitHub pristupom uz proveru identičnosti stabla.

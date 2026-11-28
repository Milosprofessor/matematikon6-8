# MatematikON6–8 — završna UI verifikacija Pitagorine teoreme (faza 2B)

Datum: 27.11.2026. Polazni GitHub commit: 91cc846ccf4dd0dc9ac8601afe8fd6fc81ff17f7. Grana: fix/matematikon6-8-math-methodology-phase-2; PR #6. Bez objave, spajanja i oznake v1.0.

## Obuhvat i rezultat

| Nalazi | Broj nalaza | Različiti zadaci | Desktop | Mobilni touch |
|---|---:|---:|---:|---:|
| G7-012–G7-056 | 45 | 45 | 45/45 | 45/45 |
| G8-005 | 1 | 6 | 6/6 | 6/6 |
| G8-006 | 1 | 6 | 6/6 | 6/6 |
| G8-007 | 1 | 11 | 11/11 | 11/11 |
| Ukupno | 48 | 68 | 68/68 | 68/68 |

Svi prethodno matematički i metodički potvrđeni zadaci dobili su pojedinačni UI dokaz. Nisu ponavljani nezavisni proračuni ostalih zadataka; UI se upoređuje sa ranije verifikovanim sadržajem i očekivanim odgovorima. Za 29 zadataka koji su deo redovnog rada lekcije dodatno je neposredno otvorena odgovarajuća lekcija, uz sintetički prethodno sačuvan položaj zadatka (bez izmišljenih rezultata prethodnih zadataka), prihvaćen tačan odgovor iz prvog pokušaja i potvrđeno zadržavanje nakon osvežavanja.

## Metod

1. Iz registra je formirana tačna veza: 48 nalaza, 68 različitih ID-jeva, sa izvorom i putanjom. Izvoz je iz stvarnih produkcijskih selektora, ne iz ručno rekonstruisanog UI-ja.
2. Na lokalnom Pages buildu, izolovan Chromium sa svežim kontekstom za svaki zadatak. Za generisane varijante korišćena je stvarna putanja Pametno vežbanje: sintetičko napredovanje otključava lekcije, a kontrolisani niz slučajnih brojeva bira željeni prvi zadatak kroz neizmenjeni produkcijski selektor. Nisu menjani algoritam ocenjivanja niti komponente. Za dva zadatka provere iz sedmog razreda korišćen je stvarni opseg prethodno otključanih lekcija; za mini-proveru, polugodišnju proveru i dva probna ispita korišćene su njihove putanje.
3. Za svaki obični zadatak: prikaz teksta i matematičkog sadržaja, ponuđene opcije, dva netačna unosa uz odbijanje, otvaranje nagoveštaja i postupka, poređenje prikazanog teksta sa očekivanim formatiranim sadržajem, tačan odgovor i kontrola stvarnog zapisa finalCorrect, firstCorrect, usedSolution i attemptCount. Tačan odgovor posle pomoći nije lažno evidentiran kao samostalno rešavanje.
4. Za probne ispite A i B: samostalno vežbanje, prikaz nagoveštaja, odvojena predaja netačnog i tačnog odgovora (0/1 i 1/1), prikaz postupka i sačuvano stanje predaje. Režim simulacije bez nagoveštaja dodatno je proveravan u storage regresiji. Probni ispit koristi zasebno lokalno stanje, ne tvrdi se upis u evidenciju redovnog vežbanja.
5. Na desktopu 1366×768 i mobilnom prikazu 390×844 (is_mobile, has_touch, dodir putem tap) provereni su svi ID-jevi. Provereno da kartica ne preliva horizontalno pri otvorenom postupku; sačuvani tekstualni dokazi i reprezentativni snimci. Za 47 zadataka sa ilustracijom provereni su prisustvo, konačne SVG koordinate i vidljive oznake u odnosu na tekst; dodatni geometrijski odnos svih šest crteža merdevina potvrđen je na izmenjenom buildu. Ostalih 21 zadatak nema posebnu ilustraciju; podaci su u tekstu.
6. Browser provere nisu izvršene na fizičkom telefonu ili školskoj tabli. Nije vršeno ručno vizuelno ocenjivanje svakog piksela svakog crteža; tekstualne i geometrijske regresije i reprezentativni snimci su konkretan dokaz. Ne predstavlja se kao kompletan WCAG audit.

## Ispravka pronađena tokom verifikacije

G7-039–G7-044: crteži zadataka o merdevinama prikazivali su generičke oznake a,b,c, iako je tražena udaljenost x, poznate su dužina merdevina i visina. U generatoru postupak sada izričito identifikuje x, h, c i opštu relaciju x²+h²=c² pre numeričke zamene. U task-visuals.ts oznake crteža se izvode samo iz datog teksta: horizontalna kateta x, vertikalna poznata visina, hipotenuza poznata dužina. SVG geometrija čuva odnos h/c bez prikaza rezultata x. Očekivani odgovori, ID-jevi i nivoi nisu menjani.

Promenjeni snapshot ograničen na nameravanu promenu postupka i hash koji obuhvata crteže; dodat programski regresioni test za svih šest varijanti. Na izmenjenom buildu ponovljeno 6/6 na desktopu i 6/6 na mobilnom touch prikazu. Preostalih 62 zadatka nisu menjani, pa prethodne UI provere ostaju važeće za njihove neizmenjene komponente/podatke.

## Završna regresija

- 113/113 unit i integracionih testova (112 postojećih + 1 novi ciljani test).
- TypeScript, lint, Worker build, Pages build: izlazni kod 0.
- 136/136 različitih desktop/mobilnih tokova, 12 dodatnih uspešnih ponovljenih tokova nakon ispravke, 29/29 neposrednih lekcijskih tokova i provera napretka nakon osvežavanja.
- Browser storage regresija: osvežavanje, restart pregledača, dve kartice bez gubitka lekcije, promena razreda, obnova probnog ispita, istek tajmera, očuvanje nečitljivog izvornog zapisa, blokiran pristup i popunjeno skladište i nevalidan istorijski zapis — izvršen postojeći test, izlaz 0; konkretni rezultati u storage/browser.json.
- Prvi pokušaj novog QA harness-a imao je grešku Python Playwright poziva wait_for_function (argument mora biti imenovan). Ispravljeno u skripti, oba kompletna prolaza ponovljena i uspešna. Nije klasifikovano kao greška aplikacije.
- U logovima ostaje upozorenje o velikom Pages paketu i Vite WebSocket portu; ne predstavlja pad testova.

## Dokazi i reprodukcija

Pojedinačna evidencija: qa/phase2/final-ui-verified/per-task-summary.json (ID nalaza i zadatka, prikaz teksta, dijagrama, nagoveštaja, postupka, ocenjivanje, napredak, uočeni nedostatak i ispravka). Sirovi dokazi desktop.json, mobile.json, lesson.json, storage/browser.json, logovi i PNG snimci u istom direktorijumu.

Iz korena repozitorijuma:
- node_modules/.bin/esbuild qa/phase2/export-original.ts --bundle --platform=node --outfile=/tmp/final-ui-export.cjs; node /tmp/final-ui-export.cjs
- node_modules/.bin/esbuild qa/phase2/final-ui-plan.ts --bundle --platform=node --outfile=/tmp/final-ui-plan.cjs; node /tmp/final-ui-plan.cjs
- npm run build; node --test tests/*.test.mjs; npm run typecheck; npm run lint; npm run build:pages
- Poslužiti dist/pages lokalno, postaviti QA_URL i QA_CHROME na Chromium izvršni fajl; python qa/phase2/final-ui-browser.py desktop; python qa/phase2/final-ui-browser.py mobile; python qa/phase2/final-ui-lesson.py
- Za ciljanu ponovljenu proveru QA_IDS_PREFIX=ow-leg-ladder-; ista browser skripta.
- Iz nadređenog direktorijuma CHROME=<putanja> QA_RESULTS=<direktorijum> python repo/qa/critical-storage.py.

**Zaključak:** 48/48 nalaza u traženom obuhvatu može biti zatvoreno po matematičkom, metodičkom i ciljanom UI kriterijumu. Ovo nije završetak cele faze 2B niti sistematske recenzije svih 2.822 zadatka.

GitHub commit sadržajnih ispravki i dokaza: `8e122bc75afab17ad5e9708971efd79146ebb066`.

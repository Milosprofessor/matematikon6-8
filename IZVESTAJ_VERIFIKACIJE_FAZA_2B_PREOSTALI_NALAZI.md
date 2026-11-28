# Faza 2B — verifikacija preostalih 11 implementiranih nalaza

Datum: 27.11.2026. Polazni commit: a0998b2505ef00b61827006f2db4812858f125b8. Obuhvat je ograničen na G6-008, G6-010, G7-004, G7-005, G7-006, G7-009, G7-010, G7-011, CUR-01–03. Bez spajanja i objavljivanja.

## Nalazi i dokazi

| ID | Originalni nedostatak i zatečeno stanje | Verifikacija i izmena | Rezultat |
|---|---|---|---|
| G6-008 | Formule su ranije stajale bez dovoljne razlike figura; oznake figura već dodate. | Eksplicitno navedene osnovice a,b trapeza i stranice a,a,b,b deltoida. Za trapez 7,13 i krake 5,5: m=10 cm, O=30 cm, ne 40 cm. Deltoid 4,4,7,7: O=22 cm. UI teorija prikazana na obe rezolucije. | Potvrđeno |
| G6-010 | Skraćivanje izostavljalo zajednički delilac; prethodna izmena ga navodila. | Dodato „deli i brojilac i imenilac bez ostatka“. Nenulti ceo delilac i nenulti imenilac su neophodni. 12/18 → 2/3 deliocem 6; 3/5 se ne skraćuje celobrojnim deliocem 2. UI teorija. | Potvrđeno |
| G7-004 | Dva primera bez završnog rezultata. | Prethodno dopunjeni primeri: 10·6π=60π dm i (6π+12) dm. U tri neposredno povezana zadatka još su ostala uputstva bez konačnog rezultata, pa su dopisana 24π dm, (4π+8) dm, (5π+10) dm. UI oba glavna primera otvorena. | Potvrđeno |
| G7-005 | Kvadrat 16 cm sa upisanim krugom, bez konačne razlike. | 16²−π·8²=(256−64π) cm² ≈54,94 cm²; 0<π<4 daje 0<P<256. Dodat dokaz granica i precizirano da π(R−r)² nije površina prstena. UI primer otvoren. | Potvrđeno |
| G7-006 | Upućivanje na nepostojeći crtež. | Tekstualni opis dovoljan: pravougaonik 8×5 i trougao čija je osnovica cela gornja stranica 8, visina 3, bez preklapanja unutrašnjosti. 40+12=52 cm². UI zadatak prihvata 52. Nije potrebna posebna ilustracija. | Potvrđeno |
| G7-009 | Smer rotacije navodno uvek menja sliku. | Za tačku koja nije centar, R(α)p=R(−α)p tačno za sin α=0, odnosno višekratnike 180° uključujući 0°. Centar je fiksan za sve uglove; simetrična figura može imati i druge uglove samopoklapanja. UI napomena vidljiva. | Potvrđeno |
| G7-010 | Dva direktna računa nepravilno označena kao napredna. | Oba već prebačena na osnovni nivo. 360/8=45°, 360/12=30° — direktna primena formule. Dopisan konačni rezultat u drugom postupku. UI oba zadatka označena „Osnovni“, prihvaćeni 45 i 30. ID-jevi nepromenjeni. | Potvrđeno |
| G7-011 | Visine do ortocentra umesto do podnožja, bez pravih uglova i razlikovanja produžetaka. | Ranije dodate projekcije, ali bez oznaka 90° i razlikovanja produžetaka. Sada su duži teme–podnožje pune, produžeci isprekidani, sva tri podnožja označena, vidljivi A/B/C i H/T. 171 položaj A (45–215), 513 incidencija provereno egzaktnim racionalnim skalarnim proizvodom i kolinearnošću. UI x=45 tupougli, x=65 pravougli, x=130 oštrougli — stvarne SVG koordinate, podnožja i oznake 90° potvrđene na obe rezolucije. | Potvrđeno |
| CUR-01 | Mini-provera nije merila izradu dijagrama. | Aktivnost prethodno tražila samo stubičasti; sada traži stubičasti, tačkasti i linijski iz iste tabele pet dana, jasne ose, jedinice, razmeru i zaključak. Dostupna na obe rezolucije, 3 uputstva i 3 kriterijuma. | Potvrđena dostupnost, ne ostvarenje |
| CUR-02 | Mini-provera nije dokaz konstrukcije centara. | Aktivnost dopunjena konkretnim priborom, oznakama, produžecima, trećom visinom za proveru, odnosom 2:1 i kriterijumima H za sva tri tipa. Dostupna na obe rezolucije. | Potvrđena dostupnost, ne ostvarenje |
| CUR-03 | Mini-provera ne dokazuje učešće u istraživanju. | Uputstva sada traže obrazloženo pitanje, uzorak od najmanje 3 predmeta, instrument, tabelu, model, doprinos u grupi, zaključak i ograničenja; razlikuju spoljašnju zapreminu i deklarisani kapacitet. Dostupna na obe rezolucije. | Potvrđena dostupnost, ne ostvarenje |

## Tehnički dokazi

- 8/8 ciljnih matematičkih/sadržajnih provera; dodatno 513 egzaktnih provera normalnosti i konkurentnosti za visine.
- 29 zapisa browser verifikacije: 18 otvaranja devet lekcija na 1366×768 i 360×800, 6 otvaranja tri praktične aktivnosti, 2 verifikacije geometrije (svaka po tri stanja), 3 konkretna zadatka sa tačnim odgovorom. Emulacija, ne fizički uređaj.
- 112/112 postojećih unit/integracionih testova; Worker build, Pages build, TypeScript i lint izlazni kod 0. U logovima ostaju upozorenje na veličinu paketa i Vite WebSocket upozorenje pri paralelnim testovima, bez pada testa.
- Nisu menjani postojeći identifikatori, očekivani odgovori, nivoi ili skladište. Nema promene statusa drugih audit nalaza. Nije sprovedena šira recenzija baze.
- Ne postoje dokazi o stvarnom učeničkom radu; aktivnosti i kriterijumi su provereni, ostvarenje praktičnih ishoda nije potvrđeno.

## Reprodukcija
Iz korena: node_modules/.bin/esbuild qa/phase2/export-original.ts --bundle --platform=node --outfile=/tmp/rem-export.cjs; node /tmp/rem-export.cjs; python qa/phase2/verify-remaining.py. npm run build; node --test tests/*.test.mjs; npm run typecheck; npm run lint; npm run build:pages. Poslužiti dist/pages na lokalnom portu 4199; postaviti QA_CHROME na Chromium izvršni fajl; python qa/phase2/remaining-browser.py. Dokazi u qa/phase2/remaining-results. Faza 2B kao celina ostaje nezavršena.

GitHub commit sadržajnih ispravki i dokaza: `a01732e430a9d7e5465027c3839516020abb2907`.

# Faza 2B — verifikacija osmog razreda
Datum: 27.11.2026. Polazni GitHub commit: 4a64839db3a426da1db98e37e546ab2174775fba. Obuhvat: G8-005, G8-006, G8-007. Bez objave i spajanja.

## Reprodukcija i nezavisni matematički dokaz
G8-005/006: na polaznom commitu već postoje standardna relacija, zamena i kvadrati; nedostaje izričito prepoznavanje uloga duži i korak oduzimanja; za obim nedostaje zamena stranica. Za svaku od šest varijanti nezavisno je izračunat pozitivan celobrojni koren razlike kvadrata iz konkretnih podataka, zatim obim.
| Varijanta | Poznata kateta (cm) | Hipotenuza (cm) | Nepoznata kateta (cm) | Obim pravougaonika (cm) |
|---|---:|---:|---:|---:|
| 0 | 3 | 5 | 4 | 14 |
| 1 | 6 | 10 | 8 | 28 |
| 2 | 9 | 15 | 12 | 42 |
| 3 | 12 | 20 | 16 | 56 |
| 4 | 15 | 25 | 20 | 70 |
| 5 | 18 | 30 | 24 | 84 |

G8-007: 11 eksplicitno navedenih zadataka:
| ID | Nezavisni proračun |
|---|---|
| s8-prizma-7 | 2a²=(6√2)²=72, a=6 cm |
| s8-piramida-vezba | s²=13²−12²=25, s=5 cm |
| s8-valjak-9 | d²=17²−15²=64, d=8 cm, r=4 cm |
| s8-kupa-5 | H²=10²−6²=64, H=8 cm |
| s8-lopta-8 | ρ²=13²−12²=25, ρ=5 cm |
| s8-lopta-9 | ρ²=64, d²=10²−8²=36, d=6 cm |
| s8-piramida-13 | t²=13²−12²=25, a=2t=10 cm |
| s8-polugodiste-7 | H²=17²−8²=225, V=π·64·15/3=320π cm³ |
| s8-polugodiste-8 | ρ²=25, d²=13²−5²=144, d=12 cm |
| s8-simA-13 | t²=15²−12²=81, a=2t=18 cm |
| s8-simB-13 | d²=26²−24²=100; b²=10²−8²=36, b=6 cm |

U svim ciljanim postupcima jasno su opisane katete i hipotenuza, standardna relacija odgovarajućih oznaka, zamena, kvadriranje i rešavanje jednačine i pozitivna dužina (rastojanje od ravni je nenegativno, može biti nula u drugom zadatku). Nema izmene odgovora i identifikatora. Dodatno je dopunjen primer piramide, primer kupe i zadatak visine kvadra u neposredno zahvaćenim lekcijama.

## Ilustracije
Pregledani su šematski preseci u eighth-figures.tsx. SimB-13 dobija zaseban drugi trougao u osnovi sa a=8, b=?, d=? i pravim uglom. U lopta-9 i polugodiste-8 oznake ρ=? ne otkrivaju prethodno potrebni proračun poluprečnika. Ostale oznake odgovaraju zadatim merama; t označava a/2. Šeme nisu crteži u razmeri. U obnavljanju 7. razreda 12 generatora nemaju sopstvenu ilustraciju; postupak koristi jasne oznake iz teksta.

## Provere
- 23/23 nezavisne egzaktne provere: 12 varijanti i 11 konkretnih zadataka. Dokaz: qa/phase2/g8-results/math.json.
- 112/112 postojećih unit/integracionih testova; 0 neuspelih. Snapshot promenjen samo za dva ciljana zadatka obnavljanja i odgovarajući zaštitni hash.
- TypeScript: prvobitni TS7006 (četiri implicitna any parametra u postojećem QA exporter-u); dodate konkretne tipizacije; ponovljena provera uspešna.
- Lint, Worker build i Pages build: uspešni (izlazni kod 0). Upozorenje o veličini Pages paketa ostaje.
- Browser: 6 lekcija na desktopu 1366×768 i mobilnom prikazu 360×800 (emulacija), 12 provera; 4 dodatne provere ispita A i B (zadatak 13, tačan odgovor, bodovanje 1/1, otvoren postupak, broj ilustracija). Ukupno 16/16. Pojedinačna UI interakcija ostalih 21 zadatka nije izvedena; matematički su provereni iz produkcijskih selektora. Nije testiran fizički uređaj.
- Nema posebne nove browser regresije čuvanja napretka; postojeći unit/integracioni testovi uključuju napredak. Nema promene skladišta.

## Ponavljanje
Iz korena repozitorijuma: node_modules/.bin/esbuild qa/phase2/export-original.ts --bundle --platform=node --outfile=/tmp/g8-export.cjs; node /tmp/g8-export.cjs; python qa/phase2/verify-g8-pythagoras.py. Pokrenuti npm run build, node --test tests/*.test.mjs, npm run typecheck, npm run lint, npm run build:pages. Za browser lokalno poslužiti dist/pages na portu 4199 i postaviti QA_CHROME na Chromium izvršni fajl, pa python qa/phase2/g8-browser.py. Dokazi u qa/phase2/g8-results.

Status: tri sadržajna nalaza matematički i metodički potvrđena; kompletna pojedinačna UI verifikacija nije tvrđena. Nema promene statusa drugih nalaza.

GitHub commit sadržajnih ispravki i dokaza: `b7f3938064ebd4995ccb1d0bf0e0635f94a2e88f`.

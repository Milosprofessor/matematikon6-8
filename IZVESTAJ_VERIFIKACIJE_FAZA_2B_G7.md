# Faza 2B — Pitagorina teorema u sedmom razredu
Datum: 27.11.2026. Polazni commit: 4a1f4ec0e8b3d4d9e3e6e0bff65911b2cf968d70.

## Obuhvat
47 nalaza: G7-001, G7-002 i G7-012–056. Dva glavna primera i 45 zadataka, uključujući 24 generisane varijante. Referentni proračuni koriste celobrojne kvadrate, egzaktne korene i nezavisne geometrijske relacije. Nisu menjani ključevi, ID-jevi ni nivoi.

## Rezultati
- 47/47 referentnih provera (odgovori i ključni fragmenti postupaka); pojedinačna evidencija u qa/phase2/g7-pythagoras-verification.json.
- 112/112 postojećih testova.
- Pages build uspešan; upozorenje na veličinu paketa.
- 14 provera prikaza: sedam zahvaćenih lekcija na 360×800 i 1366×768, otvoren primer sa postupkom. Dva ciljna primera prikazana sa konačnim rezultatima 15 cm i 8 cm. Nije fizički uređaj.
- Nisu pojedinačno rešavani svi zadaci kroz UI; status registra razlikuje ovu granicu od matematičke provere.
- Worker build, lint i TypeScript nisu posebno ponovljeni u ovom uskom prolazu; ne tvrdi se potpuna završna regresija platforme.

## Sadržajne izmene
Drugi glavni primer sada izričito identifikuje katete i hipotenuzu, počinje opštom relacijom, zamenjuje brojeve i obrazlaže pozitivnost visine. Precizirani su zahtev i nagoveštaji više postojećih zadataka; nagoveštaj za obim jednakokrakog trougla više ne otkriva polovinu osnovice. Izmenjena je povezana napomena ilustracije. Snapshot promene ograničene su na nameravane tekstualne izmene.

## Ponavljanje
Iz korena repozitorijuma: esbuild qa/phase2/export-original.ts --bundle --platform=node --outfile=/tmp/phase2-export.cjs; node /tmp/phase2-export.cjs; python qa/phase2/verify-g7-pythagoras.py. Zatim npm run build:pages i node --test tests/*.test.mjs. Za browser pokrenuti python -m http.server 4199 --bind 127.0.0.1 --directory dist/pages i postaviti QA_CHROME na Chromium izvršni fajl, pa python qa/phase2/g7-browser.py.

Ovaj prolaz ne predstavlja završetak celokupne faze 2B.

Commit sa sadržajnim izmenama i dokazima: `3ff0bed6c1f4746d116005436310ce88c1ac3cf2`.

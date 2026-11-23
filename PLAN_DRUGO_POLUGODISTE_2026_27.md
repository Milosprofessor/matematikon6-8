# MatematikON 6–8 — razvoj drugog polugodišta, 2026/2027.

## Opseg i cilj
Dopuni **postojeći** projekat MatematikON 6–8 za celo drugo polugodište školske 2026/2027. godine, za 6, 7. i 8. razred u Republici Srbiji. Sadržaj i prikaz treba da odgovaraju stvarnom rasporedu gradiva, ne generičkom redosledu. Osmi razred završava nastavu ranije nego šesti i sedmi; koristi zvanični kalendar i relevantni lokalni plan.

## Izvori pre programiranja
1. Pregledaj postojeće komponente, lekcije, zadatke, testove i stanje napretka u repozitorijumu.
2. Pronađi važeći zvanični program matematike 6, 7. i 8. razreda i školski kalendar 2026/27 (ZUOV / Ministarstvo prosvete / Službeni glasnik).
3. Ako su u korisnikovim izvorima dostupni njegovi godišnji i mesečni operativni planovi, koristi ih da odrediš redosled i tempo, uz proveru prema zvaničnom programu. Ako nisu, nemoj tvrditi da si ih imao: dokumentuj pretpostavke i razlike.
4. Napravi tabelu po razredu: oblast, lekcije, mesec, preduslovi, časovi, izvori. Proveri da gradivo nije izostavljeno ili pogrešno stavljeno u polugodište.
5. Pre dodavanja drugog polugodišta proveri kontinuitet: aktuelni `app/content/types.ts` tip `Month` podržava samo september/october, a `app/content/plan-calendar.ts` prikazuje samo septembar/oktobar. Ne mešaj slučajno neobrađeni novembar/decembar sa drugim polugodištem.

## Pravila arhitekture
- Razvijaj isključivo na grani `feature/drugo-polugodiste-2026-27`; ne commituj na `main` i ne objavljuj produkciju bez izričitog završnog odobrenja.
- Ne rekonstruiši sajt iz javnog HTML-a. Postojeći kod i izvorna Git istorija su u `Milosprofessor/matematikon6-8`.
- Poštuj `AGENTS.md`, `README_GITHUB_CODEX.md`, `app/content/*`, `app/lesson-work.ts`, `app/practice-engine.ts`, `app/knowledge.ts`, postojeće testove i konfiguraciju za Cloudflare Workers.
- Ne uklanjaj stare lekcije, ID-jeve, `localStorage` ključeve, savladane lekcije ili istoriju pokušaja. Stare podatke ne smeš resetovati. Novi ID-jevi moraju biti jedinstveni.
- Proširi tipove, filtriranje i mesečnu navigaciju tako da ispravno rade drugi deo školske godine i redosled za svaki razred. Istorijski podaci korisnika moraju ostati kompatibilni.
- Zadrži ćirilicu kao podrazumevano pismo korisničkog sadržaja, sa latinicom kao izborom. Matematički simboli, oznake, funkcije i razlomci moraju biti ispravno formatirani, bez pokvarenih transliteracija.
- Samo sadržaj gradiva i funkcije obrazovne platforme: ne menjaj dizajn radikalno, ne uvodi registraciju ili plaćanje.

## Standard svake lekcije
Za svaku stvarno potrebnu lekciju u drugom polugodištu: cilj i predznanja; kratka, precizna teorija i jasna pravila; matematički ispravne formule; objašnjeni primeri, koraci rešenja, česte greške; približno 10 pažljivo odabranih zadataka za rad na lekciji, plus raznovrstan fond za dodatno/adaptivno vežbanje. Obavezno sva tri nivoa težine: osnovni, srednji i napredni. Bez trivijalnog prepakivanja brojeva kao lažne raznovrsnosti; zadaci moraju imati različite metode, validan tačan odgovor, smislena pogrešna ponuđena rešenja i pouzdano prepoznavanje tačnog odgovora. Konstrukcije i geometrija moraju imati korektne oznake i proverene crteže. Interaktivne demonstracije dodaj samo kad stvarno unapređuju razumevanje.

## Izvršenje u proverljivim etapama
1. Audit sadašnjeg stanja + matrica nastavnog programa + precizan plan i identifikovani rizici.
2. Osnova kalendara i navigacije, uz regresione testove za ranije lekcije i učenički napredak.
3. Celokupni 6. razred drugog polugodišta: kod, sadržaj, testovi.
4. Celokupni 7. razred drugog polugodišta: kod, sadržaj, testovi.
5. Celokupni 8. razred drugog polugodišta, uključujući prikladnu vezu sa pripremom završnog ispita: kod, sadržaj, testovi.
6. Završni audit: pokrivenost plana, provera matematike i obrazovnih nivoa, provera unikatnosti ID-jeva, prikaz formulâ, mobilni/tablet/desktop, čuvanje napretka, bočna navigacija, čitanje i ćirilica/latinica.

## Obavezna provera
Instalacija prema zaključanom `package-lock.json`; bez nesmotrenog update-a biblioteka. `npm run build`, svi postojeći testovi i novi automatski testovi (za svaki razred i svaku ključnu novu celinu). Ako browser QA nije izvršen, to izričito navedi; test renderovanja nije isto što i test svih učenikovih interakcija. Ne menjaj Cloudflare konfiguraciju bez razloga i ne objavljuj produkciju pre verifikacije.

## Očekivani rezultat
Kod na pomenutoj GitHub razvojnoj grani, jasan audit/izveštaj o pokrivenosti drugog polugodišta, test rezultati, spisak poznatih ograničenja i Pull Request na `main` za vlasnikov pregled. Produkcioni sajt `https://matematikon6-8.milos-python.workers.dev/` ostaje stabilan dok vlasnik ne odobri spajanje.

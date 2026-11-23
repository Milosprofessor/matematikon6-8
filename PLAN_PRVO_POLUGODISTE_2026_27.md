# MatematikON 6–8 — završetak PRVOG polugodišta 2026/2027.

> **Ovo je važeći razvojni zadatak.** Raniji plan za drugo polugodište bio je pogrešno postavljen i zamenjen je ovim. Radi isključivo na grani `feature/prvo-polugodiste-2026-27`. Produkcija na grani `main` mora ostati netaknuta do odobrenja.

## Tačan obuhvat i kalendar

Prvo polugodište osnovnih škola u centralnoj Srbiji traje od **1. septembra do 30. decembra 2026.**, prema školskom kalendaru za 2026/2027. godinu (Ministarstvo prosvete: https://prosveta.gov.rs/vesti/strucno-uputstvo-uredice-nacin-planiranja-organizovanja-i-sprovodjenja-studijske-posete-izlozbi-expo-2027/?pismo=lat ).

**Cilj: kompletno prvo polugodište za 6, 7. i 8. razred.** Obuhvati septembar, oktobar, novembar i decembar 2026. U postojećem kodu septembar i oktobar su delimično urađeni; **nemoj ih brisati ni duplirati**, već proveri pokrivenost, matematiku i funkcionalnost, pa dopuni samo praznine. Posebno temeljno izgradi nedostajuće lekcije za novembar i decembar. Ne dodavati januar, februar, mart, april, maj ili jun.

## Pre programiranja

1. Otvori originalni GitHub kod repozitorijuma `Milosprofessor/matematikon6-8` — ne rekonstruisati sa javnog sajta.
2. Pročitaj `AGENTS.md`, `README_GITHUB_CODEX.md`, `app/content/types.ts`, `app/content/plan-calendar.ts`, `app/content/grade6.ts`, `grade7.ts`, `grade8.ts`, `app/page.tsx`, `app/lesson-work.ts`, `app/knowledge.ts` i testove.
3. Proveri aktuelne nastavne programe matematike za 6–8. razred iz zvaničnih izvora (ZUOV, Ministarstvo prosvete, prosvetni propisi).
4. Koristi korisnikove godišnje i mesečne operativne planove za školsku 2026/27. ako su dostupni u povezanim izvorima. Ako nisu dostupni, **nemoj izmišljati da jesu**; napravi jasno označen predlog rasporeda na osnovu važećeg programa i kalendara i prijavi šta je potrebno uskladiti s korisnikovim planovima.
5. Pre izmena napravi matricu po razredu: oblast, lekcija, broj časova ako je poznat, mesec, status (postojeće/za dopunu/nedostaje), izvor i veza s predznanjem.

## Ključna tehnička promena

Trenutni `Month` u `app/content/types.ts` podržava samo `september | october`, a `app/content/plan-calendar.ts` vraća samo te mesece. Proširi kalendar, tipove, redosled lekcija i odgovarajući prikaz na **novembar i decembar**. Unapređenje ne sme promeniti postojeće ID-jeve lekcija/zadataka, zabeležena rešenja, napredak i `localStorage` strukturu. Proveri da filtriranje, navigacija i adaptivno vežbanje rade kroz sva četiri meseca, uključujući oblasti koje prelaze iz jednog meseca u drugi.

## Kvalitet svake lekcije

- Usklađenost s programom i logičan metodički redosled.
- Jasno i matematički tačno objašnjenje pojmova, definicija, pravila i formula; pregledni rađeni primeri i česte greške.
- Najmanje 10 **različitih, pažljivo odabranih** zadataka za rad u lekciji, uz dodatni raznovrstan fond za vežbanje. Tri nivoa: osnovni, srednji i napredni. Različiti tipovi, a ne samo promenjeni brojevi u istoj šemi.
- Ispravan odgovor, pomoć i razumljivo rešenje za svaki zadatak; matematički korektne oznake, razlomci, koreni, stepeni, jedinice, konstrukcije i geometrijski crteži.
- Podrazumevana ćirilica, izbor latinice; simboli i matematičke promenljive ne smeju biti pogrešno transliterisani.
- Animacije/interaktivni prikazi tamo gde su korisni, bez proizvoljnog preuređivanja dizajna.

## Bezbedan redosled izrade

1. Audit 6–8 razreda i zvaničnih/korisničkih planova; matrica pokrivenosti sa prioritetima.
2. Proširenje kalendara i navigacije na novembar i decembar, uz regresione testove.
3. Novembar i decembar za 6. razred, zatim 7, pa 8; sve bez izostavljanja i duplikata.
4. Popuna stvarnih praznina i ispravke u septembru i oktobru ako ih testovi ili izvori potvrde.
5. Završni pregled matematike, kvaliteta zadataka, sadržaja, pisma, formula, crteža, mobilne/tablet/desktop upotrebe i trajnosti napretka.

## Kontrola i objavljivanje

- Menjaj isključivo `feature/prvo-polugodiste-2026-27`. Ništa na `main`, bez samostalnog merge-a i bez objavljivanja Cloudflare produkcije.
- Zadrži postojeći `package-lock.json` osim ako je izmena tehnički dokazano neophodna. Nemoj pokretati automatska velika ažuriranja zavisnosti.
- Pokreni `npm run build`, postojeće testove i dodaj ciljane testove za sve nove lekcije/mesec, stabilne ID-jeve, matematičke odgovore, filtriranje i stari korisnički napredak. Dokumentuj ograničenja.
- Sačuvaj proverene korake u više smisaonih commit-ova; izveštaj neka jasno razlikuje testirane činjenice od pretpostavki.
- Na kraju otvori Pull Request sa razvojne grane prema `main` i dostavi pregled: pokrivenost četiri meseca, broj i lista novih lekcija/zadataka, rezultati provera, preostale mane i predlog za produkciju.
- Produkcioni sajt: https://matematikon6-8.milos-python.workers.dev/ ostaje netaknut do odobrenja vlasnika.

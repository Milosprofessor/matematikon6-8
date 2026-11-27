# Faza 2 — matematičko i metodičko unapređenje (radna verzija)

Datum 27.11.2026. Polazni commit kompletne faze 1: 41ae4ceea23340dce9ed7e430e7bb919a1206f1d. Grana fix/matematikon6-8-math-methodology-phase-2.

## Realizovano
- Izmenjeni su konkretni postupci za katete i srodne primene u october.ts, october-expansion.ts, october-tests.ts, october-work.ts, semester7.ts, september-work.ts i šest modula prostorne geometrije. Koriste se oznake konkretnih dužina, eksplicitna zamena, kvadriranje i pozitivan rezultat. G7-001/002 i porodice iz G7-012–056 obrađene su u izvoru. G8-005/006 su obrađeni, a G8-007 delimično. Potpuni pojedinačni pregled svake transformacije i crteža još traje.
- Dovršeni glavni primeri G7-004 i G7-005: 60π dm, (6π+12) dm, (256−64π) cm².
- G6-008: označena razlika između trapeza i deltoida. G6-010: zajednički delilac brojioca i imenioca.
- G7-009: razjašnjeni poluokret, pun okret i centar. G7-011: model visina prikazuje podnožja na naspramnim pravama. Dodatna geometrijska i vizuelna potvrda ostaje potrebna.
- G7-010: dve stavke rotacije premeštene na osnovni nivo, uz stabilne ID.
- CUR-01–03: aktivnosti izrade dijagrama, konstrukcije centara i istraživanja sa kriterijumima u stvarnim lekcijama. Ostvarivanje praktične veštine zahteva učenički rad i proveru nastavnika.
- LOG-10: prethodni registar i izveštaj navode otvoren status, ali faza 1 ima dokumentovan prolaz ćiriličnog х na završnom commitu. Status korigovan. LOG-06: popis 778 kandidata za jedinice na posebnom listu. Popis je heuristički i zahteva potvrdu ciljne jedinice po stavci.

## Dokazi i ograničenja
Osnovna regresija faze 1: 7/7 ciljnih testova. Nakon izmena: postojećih 112/112 unit/integracionih testova, Pages i Worker build, TypeScript, lint 0 grešaka i 5 ranijih upozorenja. Dodatno je nezavisno rešeno 36 generisanih zadataka pomoću aritmetike nad parametrima. Kontrolni hash i fixture ažurirani su za prethodno odobrene promene teksta postupaka. To nije dokaz potpune matematičke recenzije.

Izvoz 2822 ID-ja i 133 lekcije je strukturni inventar. Excel evidencija označava nepregledane nagoveštaje, postupke i nivoe. Ne pripisuje se nova puna matematička validacija automatski preuzetim ključevima iz audita. Puna recenzija 227 glavnih primera i dopuna tri primera po lekciji nisu završene. CORE-Q01, G8-009, G8-010 i dalja kalibracija težine ostaju otvoreni. G7-008 zahteva formalizovan zahtev i validator oblika razlomka. Potrebno je nastaviti semantički pregled svih rešenja, dopunu crteža, provjeru svih relevantnih Pitagorinih slučajeva i pojedinačnih nalaza. Statusi implementiranih nalaza ostaju privremeni do nezavisne potvrde.

Faza 2 nije završena. Ovaj commit je radni kandidat za pregled i nastavak. Nema spajanja sa main niti objave na javni domen.

## Ponavljanje
Iz roditeljskog direktorijuma pokrenuti python repo/qa/phase2/check.py nad sačuvanim izvozom. Originalni izvoz je izveden iz izvornih selektora. Iz repo pokrenuti npm run build, npm run build:pages, npm run typecheck, npm run lint i node --test --test-concurrency=1 tests/*.test.mjs. Browser testovi koriste izolovane profile i postojeće QA skripte. Rezultati su u qa/phase2.

# MatematikON6-8 — pravila rada

Radi isključivo u ovom projektu. MatematikON 5 je odvojen projekat.
Početna kopija je originalna Sites v19, commit `60c4b9f265c3596d0f9c071299f337820f12d5b0`.

- Pročitaj README_GITHUB_CODEX.md pre prvog zadatka.
- U početnom uvozu ne menjaj matematički sadržaj, teoriju, zadatke, nivoe, crteže, ID-jeve, navigaciju, pismo ili funkcionalnosti.
- Čuvaj postojeće localStorage ključeve, šemu i kompatibilnost napretka. Ne izvršavaj reset, clear ili removeItem pri proveri/importu.
- Ne objavljuj sajt, ne menjaj produkcioni domen, pristup, Sites verzije ili hosting identitet bez izričitog zahteva za objavljivanje.
- Ne push-uj na originalni Sites remote. Predviđen je zaseban privatni GitHub repozitorijum.
- Nikad ne stavljaj tokene, .env, npm cache ili podatke učenika u Git.
- `.nvmrc` sadrži runtime korišćen za proveru izvoza.
- Početni uvoz: `python3 migration/verify-original.py`. Ovo proverava početne bajtove; buduće autorizovane izmene će promeniti rezultat i ne treba ih automatski vraćati.
- Provera aplikacije: `bash codex/check.sh`. Instalacija: npm run install:ci. Razvoj: npm run dev -- --port 5178. Build: npm run build. Testovi: node --test tests/*.test.mjs posle build-a. Zadrži package-lock.json i postojeći build/sites-vite-plugin.ts.
- Izveštavaj šta je stvarno provereno i šta nije; ne nazivaj samo build potpunim browser testiranjem.

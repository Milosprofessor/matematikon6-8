# MatematikON6-8 — originalni izvoz za privatni GitHub i Codex Cloud

Datum provere: 14.10.2026. Originalna Sites verzija: **v19**.

Izvor je preuzet iz originalnog autentifikovanog Git skladišta projekta. Njegov HEAD `60c4b9f265c3596d0f9c071299f337820f12d5b0` tačno odgovara najnovijoj sačuvanoj verziji i njenom uspešnom objavljivanju. Paket sadrži svih **136** originalno praćenih fajlova i dostupnu istoriju od **19** Git commit-a. Nije pravljen prema HTML-u javnog sajta.

Produkcioni sajt: https://matematikon6-8.milos-python.chatgpt.site

## Prvo pokretanje

Sve komande pokreći iz korena raspakovanog `matematikon6-8/` foldera.

```bash
nvm install
nvm use
python3 migration/verify-original.py
npm run install:ci
npm run dev -- --port 5178
```

Otvori http://localhost:5178. Ako ne koristiš nvm, obezbedi Node.js najmanje 22.13.0 i npm; izvoz je proveren na Node 24.19.0. Zahtevaju se Linux, Bash, `flock`, `curl`, GNU `timeout` i `sha256sum`. Na Windowsu koristi WSL sa Ubuntuom. Originalni skriptovi nisu prilagođeni za direktan PowerShell/macOS.

```bash
npm run build
node --test tests/*.test.mjs
# Ili oba koraka zajedno:
npm test
# Pregled prethodno izgrađenog projekta:
npm run start
```

Sačuvani su originalni `package.json`, `package-lock.json`, `.npmrc`, `vite.config.ts`, konfiguracije TypeScripta, `build/sites-vite-plugin.ts`, `worker/`, `public/`, `vendor/` i svi postojeći testovi. `build/` ovde sadrži izvorni Vite plugin i mora ostati u repozitorijumu. Ovo je Vinext projekat sa React/Next API-jima; nemoj ga automatski prebacivati na drugi framework.

Sve npm zavisnosti i njihove tranzitivne verzije definisane su manifestom i lock fajlom. `node_modules/` i npm cache nisu deo paketa; instaliraju se iz lock fajla. Pristup npm registru ili odgovarajućem cache-u potreban je pri prvoj instalaciji. Ne koristi `npm update`, `npm audit fix` ili drugi lock fajl pri inicijalnom prenosu.

`.openai/hosting.json` ima `d1: null` i `r2: null`; glavna aplikacija ne uvozi optional auth/D1 primere. Za lokalni rad nisu pronađeni obavezni API ključevi niti veza sa produkcionom bazom. Hosting specifikacije i primeri su sačuvani kao izvorni kod.

## Privatni GitHub — dva potpuno odvojena repozitorijuma

Za ovaj paket koristi ime `matematikon6-8`. Drugi MatematikON projekat mora imati svoj repozitorijum. Na GitHubu napravi prazan **Private** repozitorijum bez automatski dodatog README-a, licence ili .gitignore-a. Autentifikaciju obavi kroz GitHub/SSH ili credential manager; token se ne stavlja u kod ili URL.

Najjednostavniji uvoz, sa jednim početnim commit-om:

```bash
git init -b main
git add .
git commit -m "Import original MatematikON6-8 v19"
git remote add origin git@github.com:YOUR_GITHUB_USERNAME/matematikon6-8.git
git push -u origin main
```

Zameni `YOUR_GITHUB_USERNAME` svojim stvarnim korisničkim imenom. Ovaj izvoz nije povezan ni sa jednim novim GitHub remote-om i nema GitHub credentiale.

Ako želiš sačuvati originalnu istoriju umesto jednog početnog commit-a, prvo u drugom, praznom folderu kloniraj `migration/original-history.bundle`:

```bash
git clone /absolute/path/matematikon6-8/migration/original-history.bundle matematikon6-8-with-history
```

Taj klon sadrži originalne fajlove i istoriju. Kopiraj samo dodatke za prenos iz ZIP-a u klon (spisak je u `migration/added-files.json`), proveri `python3 migration/verify-original.py`, commit-uj dodatke, pa zameni bundle remote sa `git remote set-url origin git@github.com:YOUR_GITHUB_USERNAME/matematikon6-8.git` i uradi `git push -u origin main`. Ne šalji postojeći Sites Git remote na GitHub kao credential.

## Codex Cloud

Napravi zasebno privatno okruženje samo za repozitorijum `matematikon6-8`. Omogući Codex GitHub konektoru pristup tom privatnom repozitorijumu. U web/desktop interfejsu pokreni `Work in > Cloud > Select environment > Create environment`; odaberi samo ovaj repozitorijum. Nazivi opcija mogu se razlikovati između trenutnog i starijeg interfejsa.

Zadaj da koristi Node 24.19.0, Python 3 i Linux. Komanda za instalaciju/pripremu je `bash codex/setup.sh`, iz korena ovog projekta. Komanda za start je `bash codex/start-preview.sh`; provera je `bash codex/check.sh`. Komanda `migration/verify-original.py` služi proveri netaknutog početnog uvoza i namerno prijavljuje buduće izmene originalnog koda; ne koristi je kao uslov koji zabranjuje kasniji autorizovani razvoj.

Pri instalaciji omogući pristup package registrima. Originalni instalacioni skript mora moći preuzeti Vinext i ostale zaključane npm pakete. Nakon provere sačuvaj i objavi **Codex okruženje** za korišćenje u novim zadacima; ovo nije objavljivanje MatematikON sajta. U ovom izvozu okruženje nije kreirano ili aktivirano.

Predlog prvog Codex zadatka:

> Pročitaj AGENTS.md i README_GITHUB_CODEX.md. Proveri početni uvoz bez menjanja aplikacije. Radi samo u ovom repozitorijumu. Ne objavljuj sajt, ne menjaj matematički sadržaj, localStorage ključeve ili napredak učenika. Prijavi provere, nedostajuće zahteve i ograničenja.

Zvanično uputstvo, provereno 14.10.2026: https://learn.chatgpt.com/docs/environments/cloud-environments

## Napredak učenika i postojeći sajt

Originalni ključevi su `matematikon68-progress-v1-6`, `matematikon68-progress-v1-7`, `matematikon68-progress-v1-8` i `matematikon68-script`. Izvorni kod koji ih čita/upisuje nije menjan. Nisu izvršeni `localStorage.clear`, brisanje napretka, promena domena ili nova publikacija.

localStorage pripada konkretnoj adresi/origin-u, browseru i uređaju. Prenos koda na GitHub ne prenosi podatke iz browsera učenika. Lokalni ili drugi budući domen imaće svoj zaseban storage; to ne briše napredak na staroj adresi. Ovaj paket ne sadrži privatne podatke učenika niti kopiju njihovog localStorage-a.

Originalni `.openai/hosting.json` sa identitetom postojećeg sajta je zadržan i nema token. Njegovo prisustvo nije automatsko objavljivanje. Nisu dodati deploy skriptovi ili GitHub Actions. Bez posebne instrukcije ne pokretati Sites save/deploy niti push na originalni Sites remote.

## Dokaz o izvozu i provere

- `migration/source-provenance.json`: projekat, verzija, commit i metapodaci svih dostupnih verzija.
- `migration/original-files.sha256.json`: SHA-256 svih originalnih fajlova.
- `migration/original-history.bundle`: originalna preuzeta Git istorija bez tokena.
- `migration/verify-original.py`: proverava bajtove, bez pisanja ili vraćanja fajlova.
- `migration/added-files.json`: samo novi dokumenti i pomoćne komande za prenos.
- `migration/validation.json`: stvarni rezultati provera i ograničenja.

Nijedan originalni fajl nije prepisan. Dodati su samo dokumentacija, `.nvmrc`, pomoćne komande i metapodaci izvoza. Originalni sadržaj i funkcije ostaju isti.

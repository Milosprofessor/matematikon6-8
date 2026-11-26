# Godišnji audit MatematikON6–8 za 2026/27.

Pregled od 26. novembra 2026. obuhvata nastavne podatke i statičko izdanje na razvojnoj grani. Polazni objedinjeni commit je `279a4cf240efe36ad67d833e6e81db5cd02d0464`. Inventar se može ponoviti komandom `node qa/platform-inventory.mjs` iz korena projekta.

## Brojevi iz aplikacije

| Razred | Oblasti sa obnovom | Lekcije I + II | Zadaci za rad O / S / N | Jedinstveni zadaci u svim režimima O / S / N | Rešeni primeri | Mini-provere lekcija | Provere oblasti | Završne nastavne provere | Lekcije sa interaktivnim modelom |
|---|---:|---:|---|---|---:|---:|---:|---:|---:|
| 6. | 10 | 27 + 18 | 158 / 187 / 105 | 259 / 373 / 287 | 81 | 18 | 9 | 3 | 15 |
| 7. | 11 | 32 + 17 | 164 / 205 / 121 | 253 / 423 / 312 | 83 | 17 | 10 | 3 | 19 |
| 8. | 14 | 27 + 12 | 129 / 162 / 99 | 219 / 397 / 288 | 63 | 12 | 13 | 3 | 13 |

Svaki razred ima po jednu ulaznu oblast za obnavljanje. Učeniku su dostupne 133 različite lekcije u 35 oblasti. Svaka ima deset radnih zadataka. Širi zbir obuhvata radni i adaptivni fond, pitanja u proverama i, za VIII razred, pitanja dijagnostike i simulacija. Isti identifikator je u tom zbiru uračunat jednom po razredu. O, S i N označavaju osnovni, srednji i napredni nivo. Dodatna tri pitanja za peti razred rešavaju se uz podsetnik i nisu deo fonda koji aplikacija boduje.

Kao rešen primer broji se zaseban postupak koji učenik otvara u lekciji. Kao interaktivni model broji se lekcija u kojoj se prikazuje najmanje jedan nastavni model sa kontrolama. U jednoj lekciji moguće je birati više prikaza. Tabele, statične slike, pitanja na izbor i dugmad za predaju nisu brojani kao modeli. Kolona mini-provera sadrži provere vezane za pojedinačni ID lekcije. Kratka provera na nivou starije oblasti broji se uz tu oblast.

## Godišnja pokrivenost i ograničenja

| Razred | Povezanost tema i ishoda u lekcijama | Nalaz |
|---|---|---|
| VI | Celi i racionalni brojevi prelaze u praktične zadatke. Konstrukcije i podudarnost vode do koordinata, četvorouglova, obima i površina. Proporcije, procente i obradu podataka učenik primenjuje na konkretnim vrednostima. | Svih 45 ruta ima radni niz. Ishodi, predznanja i mesečne veze su u [planu VI](PLAN_DRUGO_POLUGODISTE_6_RAZRED_2026_27.md). |
| VII | Koreni, Pitagorina teorema, stepeni i proporcionalnost osnova su za rad sa izrazima, mnogouglovima, kružnim isečcima, rotacijom i podacima. | Svih 49 ruta ima radni niz. Godišnja matrica je u [izveštaju VII](IZVESTAJ_DRUGO_POLUGODISTE_7_RAZRED_2026_27.md). |
| VIII | Sličnost, projekcije i jednačine koriste se pri proračunu tela. Modeli tarifa i sistema povezuju grafik, jednačine i tumačenje. Završni projekat traži merenje i izlaganje zaključka. | Svih 39 ruta ima radni niz. [Plan i matrica VIII](PLAN_DRUGO_POLUGODISTE_8_RAZRED_2026_27.md) povezuju ishode sa konkretnim jedinicama. |

Sve oblasti i lekcije otvorene su direktnom putanjom u Chromiumu. Provereni su naslov svake jedinice i prisustvo njenog prvog zadatka. Posebni scenariji prolaze mesečnim menijem, proveravaju dugme „Pređi na zadatke“, rešavanje, povratak iz provere i ponovno učitavanje napretka. U inventaru nema prazne lekcije, ponovljenog ID-ja lekcije ili izostavljene nastavne rute. Uzorci ranije sačuvanog napretka prolaze regresione testove. Podaci stvarnih učenika nisu korišćeni.

Prvo polugodište ima po jedan izdvojeni rešeni postupak po lekciji i provere po oblastima. Za drugo polugodište svaka nova jedinica ima tri rešena primera i posebnu mini-proveru. Kod nekih ranijih provera aplikacija ponovo bira i zadatke iz radnog niza. Posebne kratke provere po svakoj ranijoj lekciji i zasebne banke pitanja za sve starije oblasti ostaju predlozi za sledeću fazu.

Nastavnik procenjuje slobodno obrazloženje, rukom nacrtanu konstrukciju i saradnju u projektu. Broj tačnih unosa sam po sebi ne meri te ishode. Matematička revizija novog sadržaja obuhvata programski ključ i odvojeno čitanje zadataka i geometrijskih uslova pomoću AI. Za starije razrede ponovljene su postojeće matematičke i funkcionalne provere. Ne postoji nezavisna ljudska recenzija svake stare lekcije u okviru ovog audita.

Statički JavaScript paket ima približno 1,15 MB ili 374 kB sa gzip kompresijom. Na slabijoj školskoj mreži prvo učitavanje vredi dodatno meriti. Lint beleži pet upozorenja o nekorišćenim imenima. Mobilni telefon, tablet i velika tabla provereni su emulacijom. Fizički odziv olovke i performanse školskog računara sa Windowsom 11 ostaju za terensku proveru.

## Inventar po nastavnim jedinicama

Mesec označava prvo otvaranje u kalendaru. Jedinica kojoj se učenik vrati u mesecu utvrđivanja zadržava isti ID i isti zapis napretka. Svaki red predstavlja funkcionalnu lekciju. Broj zadataka po nivoima odnosi se na radni niz.

### 6. razred

| Mesec | Oblast | Jedinica i ID | O / S / N | Rešeni primeri | Mini | Model |
|---|---|---|---|---:|---|---|
| Septembar | Obnavljanje gradiva 5. razreda | Kratko obnavljanje · `kratko-obnavljanje-5` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Celi brojevi | Skup celih brojeva · `skup-celih-brojeva` | 8 / 1 / 1 | 1 | — | — |
| Septembar | Celi brojevi | Apsolutna vrednost celog broja · `apsolutna-vrednost` | 3 / 5 / 2 | 1 | — | — |
| Septembar | Celi brojevi | Upoređivanje celih brojeva · `uporedjivanje` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Celi brojevi | Sabiranje celih brojeva · `sabiranje` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Celi brojevi | Oduzimanje celih brojeva · `oduzimanje` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Celi brojevi | Rastojanje tačaka na brojnoj pravoj · `rastojanje` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Celi brojevi | Sabiranje i oduzimanje celih brojeva · `sabiranje-oduzimanje` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Celi brojevi | Množenje celih brojeva · `mnozenje` | 3 / 6 / 1 | 1 | — | — |
| Septembar | Celi brojevi | Deljenje celih brojeva · `deljenje` | 3 / 6 / 1 | 1 | — | — |
| Oktobar | Celi brojevi | Množenje i deljenje celih brojeva · `mnozenje-deljenje` | 3 / 5 / 2 | 1 | — | — |
| Oktobar | Celi brojevi | Brojevni izrazi sa celim brojevima · `brojevni-izrazi` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Trougao | Trougao i njegove vrste · `trougao-vrste` | 3 / 5 / 2 | 1 | — | — |
| Oktobar | Trougao | Zbir uglova u trouglu · `zbir-uglova-trougla` | 3 / 5 / 2 | 1 | — | da |
| Oktobar | Trougao | Spoljašnji uglovi trougla · `uglovi-transverzala` | 3 / 5 / 2 | 1 | — | — |
| Oktobar | Trougao | Uglovi na transverzali · `uglovi-na-transverzali` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Trougao | Odnos stranica i uglova trougla · `odnos-stranica-uglova` | 3 / 5 / 2 | 1 | — | — |
| Oktobar | Trougao | Nejednakost trougla · `nejednakost-trougla` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Racionalni brojevi | Skup racionalnih brojeva · `skup-racionalnih-brojeva` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Racionalni brojevi | Apsolutna vrednost racionalnog broja · `apsolutna-vrednost-racionalnog` | 3 / 4 / 3 | 1 | — | — |
| Novembar | Racionalni brojevi | Ekvivalentni razlomci i decimalni zapis · `q-zapisi` | 3 / 4 / 3 | 1 | — | — |
| Novembar | Racionalni brojevi | Poređenje i poredak racionalnih brojeva · `q-poredak` | 3 / 4 / 3 | 1 | — | — |
| Novembar | Racionalni brojevi | Sabiranje, oduzimanje i rastojanje · `q-zbir-razlika` | 3 / 4 / 3 | 1 | — | — |
| Novembar | Racionalni brojevi | Množenje racionalnih brojeva · `q-proizvod` | 3 / 4 / 3 | 1 | — | — |
| Decembar | Racionalni brojevi | Deljenje i izrazi u skupu racionalnih brojeva · `q-deljenje-izrazi` | 3 / 4 / 3 | 1 | — | — |
| Decembar | Racionalni brojevi | Jednačine u skupu racionalnih brojeva · `q-jednacine` | 3 / 4 / 3 | 1 | — | — |
| Decembar | Racionalni brojevi | Nejednačine u skupu racionalnih brojeva · `q-nejednacine` | 3 / 4 / 3 | 1 | — | — |
| Januar | Racionalni brojevi u problemskim zadacima | Od teksta do izraza, jednačine ili nejednačine · `s6-model` | 4 / 4 / 2 | 3 | da | — |
| Januar | Konstrukcije i podudarnost trouglova | Konstrukcije uglova i trouglova · `s6-konstrukcije` | 4 / 4 / 2 | 3 | da | da |
| Februar | Konstrukcije i podudarnost trouglova | Podudarnost, simetrija i kružnice trougla · `s6-podudarnost` | 4 / 4 / 2 | 3 | da | da |
| Februar | Koordinate, podaci i proporcionalnost | Koordinate, pomeranje i čitanje podataka · `s6-koordinate` | 4 / 4 / 2 | 3 | da | da |
| Februar | Koordinate, podaci i proporcionalnost | Osna i centralna simetrija i translacija · `s6-preslikavanja` | 4 / 4 / 2 | 3 | da | da |
| Februar | Koordinate, podaci i proporcionalnost | Tabele, dijagrami i tumačenje podataka · `s6-podaci` | 4 / 4 / 2 | 3 | da | da |
| Mart | Koordinate, podaci i proporcionalnost | Razmera i proporcija · `s6-razmera` | 4 / 4 / 2 | 3 | da | — |
| Mart | Koordinate, podaci i proporcionalnost | Direktna i obrnuta proporcionalnost · `s6-zavisnost` | 4 / 4 / 2 | 3 | da | da |
| Mart | Koordinate, podaci i proporcionalnost | Procenat, osnovica i promena cene · `s6-procenti` | 4 / 4 / 2 | 3 | da | — |
| Mart | Četvorougao | Četvorougao, dijagonale, uglovi i obim · `s6-uglovi` | 4 / 4 / 2 | 3 | da | da |
| April | Četvorougao | Paralelogram, pravougaonik, romb i kvadrat · `s6-paralelogram` | 4 / 4 / 2 | 3 | da | da |
| April | Četvorougao | Vektori i konstrukcija paralelograma · `s6-vektori` | 4 / 4 / 2 | 3 | da | da |
| April | Četvorougao | Trapez, srednje linije i deltoid · `s6-trapez` | 4 / 4 / 2 | 3 | da | da |
| April | Četvorougao | Konstrukcije trapeza, romba i deltoida · `s6-cetiri-stranice` | 4 / 4 / 2 | 3 | da | da |
| Maj | Površine trouglova i četvorouglova | Površina kvadrata, pravougaonika i paralelograma · `s6-merenje` | 4 / 4 / 2 | 3 | da | da |
| Maj | Površine trouglova i četvorouglova | Površina trougla i trapeza · `s6-trougao-trapez` | 4 / 4 / 2 | 3 | da | da |
| Maj | Površine trouglova i četvorouglova | Normalne dijagonale i površine složenih figura · `s6-delovi` | 4 / 4 / 2 | 3 | da | da |
| Jun | Završna sistematizacija | Godišnja sistematizacija i mešoviti problemi · `s6-sinteza` | 4 / 4 / 2 | 3 | da | — |

### 7. razred

| Mesec | Oblast | Jedinica i ID | O / S / N | Rešeni primeri | Mini | Model |
|---|---|---|---|---:|---|---|
| Septembar | Obnavljanje gradiva 6. razreda | Kratko obnavljanje · `kratko-obnavljanje-6` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Realni brojevi | Decimalni zapis i razlomak · `decimalni-u-razlomak` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Realni brojevi | Decimalni zapis racionalnih brojeva · `decimalni-zapis` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Realni brojevi | Kvadrat racionalnog broja · `kvadrat-racionalnog` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Realni brojevi | Kvadrati prirodnih i racionalnih brojeva · `kvadrati-brojeva` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Realni brojevi | Realni brojevi · `realni-brojevi` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Realni brojevi | Realni brojevi na brojnoj pravoj · `brojna-prava` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Realni brojevi | Intervali i apsolutna vrednost · `intervali` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Realni brojevi | Kvadratni koren · `kvadratni-koren` | 3 / 6 / 1 | 1 | — | — |
| Septembar | Realni brojevi | Određivanje kvadratnog korena · `odredjivanje-korena` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Realni brojevi | Svojstva kvadratnog korena · `svojstva-korena` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Realni brojevi | Jednačine x²=r u skupu realnih brojeva · `jednacine-kvadrat` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Direktna proporcionalnost | Direktna proporcionalnost · `direktna-proporcionalnost` | 3 / 4 / 3 | 1 | — | da |
| Oktobar | Direktna proporcionalnost | Funkcija y=kx i njen grafik · `funkcija-ykx` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Direktna proporcionalnost | Proporcije · `proporcije` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Direktna proporcionalnost | Produžena proporcija · `produzena-proporcija` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Direktna proporcionalnost | Primene produžene proporcije · `primena-produzene-proporcije` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Pitagorina teorema | Pitagorina teorema · `pitagorina-teorema` | 3 / 6 / 1 | 1 | — | da |
| Oktobar | Pitagorina teorema | Nepoznata stranica pravouglog trougla · `nepoznata-stranica-pravougli` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Pitagorina teorema | Pravougaonik i kvadrat · `pitagora-pravougaonik-kvadrat` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Pitagorina teorema | Jednakokraki i jednakostranični trougao · `pitagora-jednakokraki` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Pitagorina teorema | Romb · `pitagora-romb` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Pitagorina teorema | Trapez · `pitagora-trapez` | 3 / 5 / 2 | 1 | — | — |
| Novembar | Pitagorina teorema | Pravougli trouglovi sa uglovima 30°, 60° i 45° · `specijalni-pravougli-trouglovi` | 3 / 4 / 3 | 1 | — | — |
| Novembar | Pitagorina teorema | Pitagorina teorema u četvorouglu · `pitagora-cetvorougao` | 3 / 5 / 2 | 1 | — | — |
| Novembar | Pitagorina teorema | Pitagorina teorema u konstrukcijama · `konstrukcija-iracionalnih-brojeva` | 3 / 6 / 1 | 1 | — | — |
| Novembar | Pitagorina teorema | Obrat Pitagorine teoreme · `pitagora-obrat` | 3 / 4 / 3 | 1 | — | — |
| Novembar | Stepeni | Pojam stepena · `pojam-stepena` | 3 / 5 / 2 | 1 | — | — |
| Novembar | Stepeni | Proizvod i količnik stepena jednakih osnova · `stepeni-ista-osnova` | 3 / 4 / 3 | 1 | — | — |
| Decembar | Stepeni | Stepen proizvoda, količnika i stepena · `stepen-proizvoda` | 3 / 4 / 3 | 1 | — | — |
| Decembar | Stepeni | Standardni zapis i primene stepena · `standardni-zapis` | 3 / 4 / 3 | 1 | — | — |
| Decembar | Mnogougao | Dijagonale mnogougla · `dijagonale-mnogougla` | 3 / 4 / 3 | 1 | — | — |
| Januar | Mnogougao i značajne tačke | Unutrašnji i spoljašnji uglovi mnogougla · `s7-uglovi` | 4 / 4 / 2 | 3 | da | da |
| Januar | Mnogougao i značajne tačke | Pravilni mnogouglovi i njihove konstrukcije · `s7-pravilni` | 4 / 4 / 2 | 3 | da | da |
| Februar | Mnogougao i značajne tačke | Obim i površina mnogougla · `s7-povrsina` | 4 / 4 / 2 | 3 | da | da |
| Februar | Mnogougao i značajne tačke | Ortocentar, težište i dokaz podudarnošću · `s7-centri` | 4 / 4 / 2 | 3 | da | da |
| Februar | Celi algebarski izrazi | Od brojevnog izraza do monoma · `s7-monomi` | 4 / 4 / 2 | 3 | da | da |
| Mart | Celi algebarski izrazi | Stepen, zbir i razlika polinoma · `s7-polinomi` | 4 / 4 / 2 | 3 | da | da |
| Mart | Celi algebarski izrazi | Množenje monoma polinomom i polinoma polinomom · `s7-proizvod` | 4 / 4 / 2 | 3 | da | da |
| Mart | Celi algebarski izrazi | Kvadrat binoma i razlika kvadrata · `s7-identiteti` | 4 / 4 / 2 | 3 | da | da |
| April | Celi algebarski izrazi | Rastavljanje polinoma na činioce · `s7-cinioci` | 4 / 4 / 2 | 3 | da | da |
| April | Celi algebarski izrazi | Transformacije polinoma u jednačinama · `s7-jednacine` | 4 / 4 / 2 | 3 | da | da |
| April | Krug i rotacija | Tetiva, luk i uglovi u krugu · `s7-kruznica` | 4 / 4 / 2 | 3 | da | da |
| Maj | Krug i rotacija | Obim kruga i dužina kružnog luka · `s7-luk` | 4 / 4 / 2 | 3 | da | da |
| Maj | Krug i rotacija | Površina kruga, isečka i prstena · `s7-isecci` | 4 / 4 / 2 | 3 | da | da |
| Maj | Krug i rotacija | Rotacija tačke, duži i mnogougla · `s7-rotacija` | 4 / 4 / 2 | 3 | da | da |
| Maj | Obrada podataka | Podaci, aritmetička sredina, medijana i mod · `s7-podaci` | 4 / 4 / 2 | 3 | da | da |
| Jun | Završna sistematizacija sedmog razreda | Približna vrednost i apsolutna greška · `s7-procena` | 4 / 4 / 2 | 3 | da | da |
| Jun | Završna sistematizacija sedmog razreda | Godišnja sistematizacija i priprema za osmi razred · `s7-sinteza` | 4 / 4 / 2 | 3 | da | da |

### 8. razred

| Mesec | Oblast | Jedinica i ID | O / S / N | Rešeni primeri | Mini | Model |
|---|---|---|---|---:|---|---|
| Septembar | Obnavljanje gradiva 7. razreda | Kratko obnavljanje · `kratko-obnavljanje-7` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Sličnost | Razmera duži · `razmera-duzi` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Sličnost | Samerljive i nesamerljive duži · `samerljive-duzi` | 3 / 5 / 2 | 1 | — | — |
| Septembar | Sličnost | Proporcionalnost duži · `proporcionalnost` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Sličnost | Talesova teorema · `talesova-teorema` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Sličnost | Slični trouglovi · `slicni-trouglovi` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Sličnost | Stavovi sličnosti trouglova · `stavovi-slicnosti` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Sličnost | Primene sličnosti · `primene-slicnosti` | 3 / 4 / 3 | 1 | — | — |
| Septembar | Sličnost | Sličnost i pravougli trougao · `slicnost-pravougli` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Tačka, prava i ravan u prostoru | Misaono snalaženje u prostoru · `snalazenje-u-prostoru` | 3 / 7 / 0 | 1 | — | da |
| Oktobar | Tačka, prava i ravan u prostoru | Tačka, prava i ravan · `tacka-prava-ravan-osnove` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Tačka, prava i ravan u prostoru | Prave i ravni u prostoru · `odnosi-pravih-ravni` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Tačka, prava i ravan u prostoru | Dve ravni i određenost ravni · `dve-ravni` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Tačka, prava i ravan u prostoru | Ortogonalnost · `ortogonalnost` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Tačka, prava i ravan u prostoru | Ortogonalna projekcija na ravan · `ortogonalna-projekcija` | 3 / 4 / 3 | 1 | — | — |
| Oktobar | Tačka, prava i ravan u prostoru | Poliedar · `poliedar` | 3 / 6 / 1 | 1 | — | — |
| Novembar | Linearne jednačine i nejednačine | Pojam linearne jednačine · `pojam-linearne-jednacine` | 3 / 4 / 3 | 1 | — | — |
| Novembar | Linearne jednačine i nejednačine | Ekvivalentne transformacije · `ekvivalentne-transformacije` | 3 / 4 / 3 | 1 | — | — |
| Novembar | Linearne jednačine i nejednačine | Rešavanje linearnih jednačina · `resavanje-linearnih-jednacina` | 3 / 4 / 3 | 1 | — | — |
| Novembar | Linearne jednačine i nejednačine | Primena linearnih jednačina · `primena-linearnih-jednacina` | 3 / 4 / 3 | 1 | — | — |
| Novembar | Linearne jednačine i nejednačine | Jednačine koje se svode na linearne · `svodjenje-jednacina` | 3 / 4 / 3 | 1 | — | — |
| Novembar | Linearne jednačine i nejednačine | Linearne nejednačine · `linearne-nejednacine` | 3 / 4 / 3 | 1 | — | — |
| Decembar | Linearne jednačine i nejednačine | Složenije linearne nejednačine i primene · `slozene-nejednacine` | 3 / 4 / 3 | 1 | — | — |
| Decembar | Prizma | Pojam, vrste i elementi prizme · `prizma-elementi` | 3 / 4 / 3 | 1 | — | — |
| Decembar | Prizma | Mreža i površina prave prizme · `prizma-mreza` | 3 / 4 / 3 | 1 | — | — |
| Decembar | Prizma | Zapremina prave prizme i primene · `prizma-zapremina` | 3 / 4 / 3 | 1 | — | — |
| Decembar | Piramida | Pojam i vrste piramide · `piramida-elementi` | 3 / 4 / 3 | 1 | — | — |
| Januar | Preseci pravih prizmi | Dijagonale, preseci i osnove pravih prizmi · `s8-prizma` | 4 / 4 / 2 | 3 | da | da |
| Januar | Površina i zapremina piramide | Visine, mreža i površina piramide · `s8-piramida` | 4 / 4 / 2 | 3 | da | da |
| Februar | Površina i zapremina piramide | Zapremina piramide i karakteristični preseci · `s8-zapremina` | 4 / 4 / 2 | 3 | da | da |
| Februar | Linearna funkcija | Od zavisnosti i tabele do grafika · `s8-funkcija` | 4 / 4 / 2 | 3 | da | da |
| Februar | Linearna funkcija | Nula, znak, monotonost i položaj pravih · `s8-znak` | 4 / 4 / 2 | 3 | da | da |
| Mart | Sistemi linearnih jednačina | Uređeni par, zamena i suprotni koeficijenti · `s8-sistemi` | 4 / 4 / 2 | 3 | da | da |
| Mart | Sistemi linearnih jednačina | Kako iz teksta nastaje sistem · `s8-model` | 4 / 4 / 2 | 3 | da | da |
| April | Valjak | Valjak od rotacije do mreže i zapremine · `s8-valjak` | 4 / 4 / 2 | 3 | da | da |
| April | Kupa | Kupa, izvodnica i kružni isečak · `s8-kupa` | 4 / 4 / 2 | 3 | da | da |
| Maj | Lopta i sfera | Lopta, sfera i ravni preseci · `s8-lopta` | 4 / 4 / 2 | 3 | da | da |
| Maj | Završna sistematizacija osmog razreda | Pet tela, složeni oblici i merne jedinice · `s8-tela` | 4 / 4 / 2 | 3 | da | da |
| Maj | Završna sistematizacija osmog razreda | Godišnja sistematizacija i istraživanje ambalaže · `s8-godina` | 4 / 4 / 2 | 3 | da | da |

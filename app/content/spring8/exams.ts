import { question, type Row } from "../spring6/lesson";
import type { Level } from "../types";

type Entry = [lesson: string, level: Level, ...fields: Row];

const dijagnoza: Entry[] = [
  ["deljivost5","basic","Koji je najmanji zajednički sadržalac brojeva 6 i 8?",["24","48","12","2"],"Uporedi višekratnike.","Višekratnici broja 8 su 8, 16, 24. Prvi deljiv sa 6 je 24."],
  ["q-zbir-razlika","medium","Na računu je −450 dinara pre uplate 720 dinara. Novo stanje?","270","Saberi iznose sa znakom.","−450+720=270 dinara."],
  ["s8-funkcija","basic","Cena se računa kao 50+9x. Cena za 4 jedinice?","86","Uvrsti broj jedinica.","50+9·4=86 dinara."],
  ["s8-sistemi","advanced","Reši x+y=16 i x−2y=1. Upiši par.","(11;5)","Oduzmi drugu jednačinu od prve.","3y=15 daje y=5 i x=11. Provera: 11+5=16 i 11−10=1."],
  ["s8-piramida","basic","Koliko bočnih ivica ima pravilna četvorostrana piramida?",["4","5","8","3"],"Spoji vrh sa temenima osnove.","Četiri temena osnove daju četiri bočne ivice."],
  ["s8-valjak","medium","Zatvoreni valjak r=1 dm i H=3 dm ima površinu u dm², tačno?","8π","Prebroj osnove.","Dve osnove imaju 2π dm², omotač 6π dm². Ukupno 8π dm²."],
  ["s8-tela","basic","Prevedi 1,75 l u mililitre.","1750","Jedan litar ima hiljadu ml.","1,75·1000=1750 ml."],
  ["s6-merenje","medium","Pod meri 2,5 m puta 4 m. Površina u dm²?","1000","Prvo računaj u m².","Pod ima 10 m². Pošto 1 m²=100 dm², površina je 1000 dm²."],
  ["s7-podaci","basic","Podaci su 7, 2, 8, 4 i 9. Odredi medijanu.","7","Poređaj podatke.","U nizu 2, 4, 7, 8, 9 srednji broj je 7."],
  ["s6-podaci","advanced","Uzorak A ima 8 merenja sa prosekom 5. Uzorak B ima 2 sa prosekom 10. Koliki je zajednički prosek?","6","Najpre izračunaj ukupne zbirove.","Zbirovi su 40 i 20. Ukupno 60 kroz 10 merenja daje 6."],
];

const simA: Entry[] = [
  ["deljivost5","basic","Koliki je ostatak pri deljenju broja 137 sa 9?",["2","3","1","0"],"Nađi najveći višekratnik broja 9 do 137.","9·15=135 i 137−135=2."],
  ["q-zbir-razlika","basic","Termometar se pomerio od −6 do +5 stepeni. Porast u stepenima?","11","Izračunaj razliku krajnje i početne temperature.","5−(−6)=11."],
  ["q-zapisi","basic","Koji je deo sata 24 minuta? Unesi razlomak.","2/5","Uporedi sa 60 minuta.","24/60 se skraćuje sa 12 na 2/5."],
  ["s6-procenti","medium","Jakna je posle popusta od 20% plaćena 3600 dinara. Početna cena?","4500","Plaćeno je 80% cene.","0,8x=3600 daje x=4500 dinara."],
  ["svodjenje-jednacina","basic","Pet puta jedan broj umanjeno za 4 daje 31. Koji je broj?",["7","5","8","6"],"Napiši jednačinu.","5x−4=31 daje 5x=35 i x=7."],
  ["s8-funkcija","medium","Prava na grafiku ima nagib −2. Odredi njen odsečak na y-osi.","6","Uvrsti koordinate.","8=2+n pa je n=6."],
  ["s8-sistemi","medium","Zbir dva broja je 19, a prvi je za 5 veći od drugog. Upiši par.","(12;7)","Formiraj zbir i razliku.","x+y=19 i x−y=5 daju x=12 i y=7. Zbir 19 i razlika 5 potvrđuju par."],
  ["s8-znak","advanced","Za koji ceo broj ulaznica prvi put važi 200+30x<55x?","9","Odvoji fiksnu cenu.","200<25x daje x>8. Najmanji ceo broj je 9."],
  ["s7-uglovi","basic","Koliki je spoljašnji ugao pravilnog dvanaestougla u stepenima?","30","Zbir spoljašnjih uglova je pun ugao.","360°:12=30°."],
  ["s8-prizma","basic","Koliko bočnih ivica ima prava trostrana prizma?",["3","6","9","5"],"Svakom temenu donje osnove odgovara gornje.","Tri spone između osnova su tri bočne ivice."],
  ["s8-kupa","medium","Kupa ima prečnik 6 cm i visinu 8 cm. Zapremina u cm³, tačno?","24π","Prečnik prepolovi.","B=9π cm² i V=B·8:3=24π cm³."],
  ["s8-lopta","medium","Površina sfere je 144π cm². Poluprečnik u cm?","6","Postavi 4πR²=144π.","Deljenjem dobijaš R²=36, pa R=6 cm."],
  ["s8-zapremina","advanced","Pravilna četvorostrana piramida ima H=12 cm i s=15 cm. Osnovna ivica u cm?","18","Izdvoji polovinu osnog trougla kroz sredinu ivice.","a²+b²=c². Za polovinu ivice t važi t²+H²=s²; t²+12²=15²; t²+144=225. t²=81, t=9 cm. Ivica je 18 cm."],
  ["s8-tela","basic","Na etiketi piše 0,45 l. Koliko je to cm³?","450","Jedan ml je jedan cm³.","0,45 l=450 ml=450 cm³."],
  ["s6-merenje","basic","Platno ima 350 dm². Površina u m²?","3,5","Podeli sa 100.","Kvadratni metar sadrži 100 dm² pa je 350:100=3,5."],
  ["s8-tela","medium","Slavina puni 2,4 l u minutu. Za koliko sekundi napuni 1 l?","25","Minut ima 60 sekundi.","Za 1 l treba 60:2,4=25 sekundi."],
  ["s7-podaci","basic","Vrednosti su 11, 9, 8, 9 i 12. Odredi mod.",["9","11","8","12"],"Prebroj ponavljanja.","Devet se pojavljuje dvaput, svaka druga vrednost jednom."],
  ["s6-podaci","medium","U odeljenju od 28 učenika sedam dolazi biciklom. Koliki procenat čine?","25","Izračunaj deo celine.","7:28=1/4, što je 25%."],
  ["s7-podaci","medium","Prosek četiri skoka je 148 cm. Tri skoka su 140, 150 i 152 cm. Četvrti u cm?","150","Prosek pomnoži brojem skokova.","Ukupno 592 cm, poznato 442 cm. Četvrti je 150 cm."],
  ["s8-model","advanced","Od 24 karte neke koštaju 90 a druge 150 dinara. Prihod je 2940 dinara. Koliko je skupljih?","13","Prihod uporedi sa 24 jeftinije karte.","x+y=24, 90x+150y=2940. Posle oduzimanja 90 puta prve dobijaš 60y=780 i y=13. Preostalih 11 karata daje 990 dinara, skuplje 1950."],
];

const simB: Entry[] = [
  ["deljivost5","basic","Najveći zajednički delilac brojeva 36 i 48?","12","Rastavi na proste činioce.","36=2²·3² i 48=2⁴·3. Zajednički deo je 2²·3=12."],
  ["q-zbir-razlika","basic","Izračunaj −8+3·4.",["4","−20","−4","20"],"Pomnoži pre sabiranja.","3·4=12 pa −8+12=4."],
  ["q-zapisi","basic","Broj 0,375 zapiši kao skraćen razlomak.","3/8","Polazi od hiljaditih delova.","375/1000 podeljeno sa 125 u brojiocu i imeniocu daje 3/8."],
  ["s6-procenti","medium","Cena raste za 10% pa se nova cena smanjuje za 10%. Koliko dinara ostaje od početnih 900 dinara?","891","Drugi procenat ima novu osnovicu.","Posle rasta cena je 990, zatim opada za 99 na 891 dinar."],
  ["svodjenje-jednacina","basic","Reši 4(x+1)=28.","6","Prvo podeli obe strane sa četiri.","x+1=7 pa x=6."],
  ["s8-funkcija","medium","Dužina opruge je 9 cm bez tereta i 15 cm sa 3 kg. Uz linearnu zavisnost nađi dužinu za 5 kg u cm.","19","Pronađi izduženje po kilogramu.","(15−9):3=2 cm po kg. Dužina za 5 kg je 9+10=19 cm."],
  ["s8-sistemi","medium","Traži se zajednička tačka pravih x=−2 i y=3x+7. Upiši par.","(-2;1)","Uvrsti poznatu apscisu.","y=−6+7=1. Presek je (−2; 1)."],
  ["s8-znak","advanced","Funkcija ima nulu −3 i odsečak na y-osi 6. Odredi njen nagib.","2","Koristi dve poznate tačke.","Tačke (−3; 0) i (0; 6) daju k=6:3=2."],
  ["s7-uglovi","basic","Koliko stepeni iznosi zbir unutrašnjih uglova petougla?",["540","360","720","1080"],"Iz jednog temena podeli petougao na trouglove.","Tri trougla daju 3·180°=540°."],
  ["s8-piramida","basic","Piramida ima pet temena ukupno. Koliko stranica ima osnova?","4","Izdvoji jedno teme kao vrh.","Preostala četiri temena pripadaju četvorouglu."],
  ["s8-valjak","medium","Omotač valjka ima 72π cm², a r=4 cm. Visina u cm?","9","Koristi M=2πrH.","72π=8πH pa H=9 cm."],
  ["s8-lopta","medium","Lopta prečnika 4 dm zauzima koliko dm³? Unesi koeficijent uz π.","32/3","Poluprečnik je 2 dm.","V=4π·8:3. Koeficijent je 32/3."],
  ["s8-prizma","advanced","Dijagonala kvadra je 26 cm. Ivica visine je 24 cm, jedna ivica osnove 8 cm. Druga ivica osnove u cm?","6","Spusti prostornu dijagonalu na osnovu.","a²+b²=c². d²+H²=D²; d²+24²=26²; d²+576=676 daje d²=100. U osnovi a²+b²=d²; 8²+b²=10²; 64+b²=100, b²=36. Zato b=6 cm."],
  ["s8-tela","basic","Pretvori 780 ml u litre.",["0,78","7,8","0,078","78"],"Hiljadu mililitara je litar.","780:1000=0,78 l."],
  ["s6-merenje","basic","Koliko cm² ima pravougaonik stranica 1 dm i 8 cm?","80","Svedi obe dužine na cm.","1 dm=10 cm. Površina je 10·8=80 cm²."],
  ["s8-tela","medium","Posuda prima 18 l. Popunjena je do dve trećine. Koliko je praznog prostora u dm³?","6","Računaj preostalu trećinu.","Prazno je 18:3=6 l, odnosno 6 dm³."],
  ["s7-podaci","basic","U nizu 4, 6, 10, 12 nađi medijanu.",["8","6","10","4"],"Broj podataka je paran.","Srednje vrednosti su 6 i 10. Njihov prosek je 8."],
  ["s6-podaci","medium","Tabela prikazuje glasanje. Koliki ugao u stepenima zauzima predlog A na kružnom dijagramu?","126","Uporedi 14 glasova sa svih 40.","Udeo je 14:40. Ugao iznosi 360°·14:40=126°."],
  ["s7-podaci","medium","Šest utakmica donelo je prosek 2,5 gola. U sedmoj su postignuta 6 gola. Novi prosek?","3","Najpre vrati ukupan broj golova.","Prvih šest donosi 15 golova. Novi zbir je 21 kroz sedam utakmica, pa je prosek 3."],
  ["s8-model","advanced","Banka ima 16 novčanica od 100 ili 200 dinara, vrednih 2500 dinara. Broj novčanica od 100?","7","Formiraj jednačine za broj i vrednost.","x+y=16 i 100x+200y=2500. Oduzmi 100 puta prvu: 100y=900. Sledi y=9 i x=7. Zbir vrednosti je 700+1800=2500."],
];

const simC: Entry[] = [
  ["deljivost5","basic","Koja najmanja cifra umesto zvezdice čini broj 4★2 deljivim sa 3?",["0","1","2","4"],"Proveri zbir cifara.","4+0+2=6 je deljivo sa 3, a 0 je najmanja cifra."],
  ["q-zbir-razlika","basic","Od broja −7 oduzmi broj −12.","5","Oduzimanje negativnog broja menja se u sabiranje.","−7−(−12)=−7+12=5."],
  ["q-zapisi","basic","Od trake duge 2 m odsečeno je 3/4 m. Koliko metara ostaje?","1,25","Zapiši obe dužine u četvrtinama.","2=8/4. Preostaje 5/4 m=1,25 m."],
  ["s6-procenti","medium","Roba od 1250 dinara poskupi na 1500 dinara. Procenat povećanja?","20","Uporedi razliku sa starom cenom.","Povećanje 250 podeljeno sa 1250 je 0,2 odnosno 20%."],
  ["svodjenje-jednacina","basic","Reši x:3+2=9.","21","Prvo izdvoji količnik.","x:3=7. Množenjem sa 3 dobijaš x=21."],
  ["s8-funkcija","medium","U tabeli su parovi (0; −4) i (2; 2). Nađi nulu te linearne funkcije.","4/3","Izračunaj nagib.","Nagib je 6:2=3. Pravilo y=3x−4 daje nulu x=4/3."],
  ["s8-sistemi","medium","Reši y=−x i 2x−y=9. Upiši par.","(3;-3)","Zameni y njegovim izrazom.","3x=9 daje x=3 i y=−3. Druga leva strana je 6+3=9."],
  ["s8-znak","advanced","Za koliko celih vrednosti x iz skupa od −3 do 3 važi 2x+1<4?","5","Reši nejednakost pre brojanja.","x<1,5. U datom skupu odgovaraju −3, −2, −1, 0 i 1."],
  ["s7-uglovi","basic","Pravilni mnogougao ima spoljašnji ugao od 45°. Broj stranica?",["8","6","12","10"],"Podeli pun ugao spoljašnjim uglom.","360°:45°=8."],
  ["s8-prizma","basic","Koliko strana ima šestostrana prizma uključujući osnove?",["8","6","12","18"],"Dodaj dve osnove broju bočnih strana.","Šest pravougaonika i dva šestougla daju osam strana."],
  ["s8-kupa","medium","Kupa ima s=10 cm i r=3 cm. Ukupna površina u cm², tačno?","39π","Saberi površinu kruga i isečka.","P=9π+30π=39π cm²."],
  ["s8-lopta","medium","Lopta ima R=7 cm. Površina velikog kruga u cm², tačno?","49π","Odredi poluprečnik najvećeg preseka.","Veliki krug ima poluprečnik 7 cm, pa površina iznosi 49π cm²."],
  ["s8-piramida","advanced","Šator sa kvadratnom osnovom stranice 10 m ima vrh 12 m iznad centra. Potrebna površina bočnog platna u m² bez preklapanja?","260","Pronađi visinu jedne bočne strane.","a²+b²=c². s²=25+144=169 daje s=13 m. Četiri trougla daju 4·10·13:2=260 m²."],
  ["s8-tela","basic","Koliko litara vode ima u 0,032 m³?","32","Prevedi m³ u dm³.","0,032·1000=32 dm³=32 l."],
  ["s6-merenje","basic","Letva dužine 2,4 m ima koliko milimetara?","2400","Metar sadrži hiljadu milimetara.","2,4·1000=2400 mm."],
  ["s8-tela","medium","Čas počinje u 9 h 45 min i traje 70 min. Koliko minuta nakon 10 h se završava?","55","Od 9 h 45 min do 10 h je 15 min.","Posle 10 h ostaje još 70−15=55 min. Kraj je u 10 h 55 min."],
  ["s7-podaci","basic","Merenja su 12, 17, 9 i 14 cm. Razlika najveće i najmanje vrednosti u cm?",["8","5","14","17"],"Pronađi oba ekstrema.","Najveća vrednost je 17, najmanja 9. Razlika je 8 cm."],
  ["s6-podaci","medium","Stubičasti dijagram prikazuje prodaju knjiga za dva meseca. Koliki je procenat rasta prodaje?","30","Uporedi razliku sa majskom prodajom.","Rast je 18 knjiga. Količnik 18:60=0,3 daje 30%."],
  ["s7-podaci","medium","Koji broj treba dodati nizu 2, 3, 7 da novi prosek bude 5?","8","Saberi poznate podatke.","Novi zbir je 4·5=20. Poznati već daju 12 pa treba 8."],
  ["s8-model","advanced","Dve cevi zajedno pune 26 l u minutu. Za 3 min rada prve i 1 min rada druge natoči se 50 l. Protok druge u l po minutu?","14","Uporedi jedan minut zajedničkog rada sa ukupnom količinom.","x+y=26 i 3x+y=50. Razlika daje 2x=24, x=12. Druga ima y=14. Provera: 36+14=50."],
];

export const examSets = [
  {id:'s8-dijagnoza',title:"Dijagnostička provera",rows:dijagnoza},
  {id:'s8-simA',title:"Autorski probni test A",rows:simA},
  {id:'s8-simB',title:"Autorski probni test B",rows:simB},
  {id:'s8-simC',title:"Autorski probni test C",rows:simC}
].map(({id,title,rows})=>({id,title,areaId:'s8-zavrsnica',items:rows.map(([lessonId,level,...row],i)=>({...question(id+'-'+(i+1),title,level,row,i),lessonId}))}));

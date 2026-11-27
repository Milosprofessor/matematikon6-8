import { taskWithVisual } from "./task-visuals";
import { C, I, Task } from "./types";
import { septemberTasks } from "./september-expansion";
import { octoberSupplement } from "./october-practice-supplement";
import { octoberTasks } from "./october-expansion";
import { applyOctoberWorkLevels, octoberVariants } from "./october-work";
import { applySeptemberWorkLevels, septemberVariants } from "./september-work";

export const extraExamples: Record<string,string[]> = {
  "skup-celih-brojeva":["Broju 14 suprotan je broj −14."],
  "apsolutna-vrednost":["|−15| − |4| = 15 − 4 = 11"],
  "uporedjivanje":["−15 < −8 < −1 < 6"],
  "sabiranje":["−18 + 25 = 7"],
  "oduzimanje":["12 − (−9) = 21"],
  "rastojanje":["d(−12,5)=|−12−5|=17"],
  "sabiranje-oduzimanje":["−14 − (−8) + 3 = −3"],
  "mnozenje":["(−12)·5=−60"],
  "deljenje":["96:(−12)=−8"],
  "mnozenje-deljenje":["(−8)·15:(−6)=20"],
  "brojevni-izrazi":["−4·(3−8)+6=26"],
  "decimalni-zapis":["[[frac:7|16]]=0,4375"],
  "decimalni-u-razlomak":["0,875=[[frac:875|1000]]=[[frac:7|8]]"],
  "kvadrat-racionalnog":["(−1,5)^2=2,25"],
  "kvadrati-brojeva":["20^2=400"],
  "realni-brojevi":["Broj π pripada skupu realnih iracionalnih brojeva."],
  "brojna-prava":["−3<−2,75<−2"],
  "intervali":["|x−2|≤3 znači −1≤x≤5."],
  "kvadratni-koren":["√2,25=1,5"],
  "odredjivanje-korena":["√400=20"],
  "svojstva-korena":["√180=√(36·5)=6√5"],
  "razmera-duzi":["45 cm : 1,5 m = 45:150 = 3:10"],
  "samerljive-duzi":["2√3 i 5√3 su samerljive jer je njihova razmera 2:5."],
  "proporcionalnost":["8:12=14:21, jer je 8·21=12·14."],
  "talesova-teorema":["AM:AB=3:5 i BC=25 cm daju MN=15 cm."],
  "slicni-trouglovi":["Ako je △ABC∼△DEF, stranici BC odgovara stranica EF."],
  "stavovi-slicnosti":["Uglovi 40° i 70° u oba trougla daju sličnost po UU."],
  "primene-slicnosti":["Na planu 3 cm u razmeri 1:500 predstavlja 15 m."]
};

export const extraTasks: Record<string,Task[]> = {
  "skup-celih-brojeva":[I("6-1d","Odredi suprotan broj.","27","-27","Promeni znak broja.","Suprotan broj broju 27 je −27.","basic","Skup celih brojeva"),C("6-1e","Koji broj ne pripada skupu Z?","",["−18","0","[[frac:5|2]]"],"[[frac:5|2]]","Celi brojevi nemaju razlomljeni deo.","[[frac:5|2]]=2,5 nije ceo broj, dok −18 i 0 pripadaju Z.","medium","Skup celih brojeva")],
  "apsolutna-vrednost":[I("6-2d","Izračunaj.","|−24| − |−9|","15","Odredi obe apsolutne vrednosti.","|−24|−|−9|=24−9=15.","basic","Apsolutna vrednost"),C("6-2e","Odredi x.","|x|=6",["Samo 6","Samo −6","−6 ili 6"],"−6 ili 6","Dva suprotna broja imaju isto rastojanje od nule.","Rešenja su −6 i 6.","medium","Apsolutna vrednost")],
  "uporedjivanje":[C("6-3d","Uporedi.","−21 __ −19",["<",">","="],"<","Na brojnoj pravoj −21 je levo.","−21<−19.","basic","Poređenje"),C("6-3e","Odredi najveći broj.","−2, −11, 0, 5",["0","5","−2"],"5","Najveći je broj najviše desno.","Najveći broj je 5.","basic","Poredak")],
  "sabiranje":[I("6-4d","Izračunaj.","−23 + 17","-6","Oduzmi apsolutne vrednosti.","23−17=6, a znak je negativan.","medium","Sabiranje"),I("6-4e","Odredi x.","−12 + x = 5","17","Dodaj 12 na obe strane.","−12+x+12=5+12, pa x=17. Provera: −12+17=5.","advanced","Nepoznati sabirak")],
  "oduzimanje":[I("6-5d","Izračunaj.","18 − (−7)","25","Oduzimanje negativnog je sabiranje.","18+7=25.","basic","Oduzimanje"),I("6-5e","Odredi x.","x − (−9) = 4","-5","Jednačina je x+9=4.","x=4−9=−5.","advanced","Oduzimanje")],
  "rastojanje":[I("6-6d","Odredi rastojanje.","P(−14), Q(2)","16","Koristi apsolutnu vrednost razlike.","|−14−2|=16.","medium","Rastojanje"),C("6-6e","Odredi tačku x.","d(x,0)=7 i x<0",["−7","0","7"],"−7","Traži se negativna tačka.","x=−7.","advanced","Rastojanje")],
  "sabiranje-oduzimanje":[I("6-7d","Izračunaj.","−16 + 9 − (−5)","-2","Oduzimanje −5 postaje +5.","−16+9+5=−2.","medium","Sabiranje i oduzimanje"),I("6-7e","Dopuni.","−8 − x = −13","5","Koji broj oduzet od −8 daje −13?","x=5.","advanced","Sabiranje i oduzimanje")],
  "mnozenje":[I("6-8d","Izračunaj.","(−11)·(−7)","77","Isti znaci daju plus.","11·7=77.","basic","Množenje"),I("6-8e","Odredi x.","6·x=−54","-9","Koji negativan broj pomnožen sa 6 daje −54?","Pošto je 6·9=54, važi 6·(−9)=−54. Zato je x=−9.","advanced","Množenje")],
  "deljenje":[I("6-9d","Izračunaj.","84:(−12)","-7","Različiti znaci daju minus.","84:12=7, pa je rezultat −7.","basic","Deljenje"),I("6-9e","Odredi x.","x:(−5)=8","-40","Pomnoži sa −5.","x=8·(−5)=−40.","advanced","Deljenje")],
  "mnozenje-deljenje":[I("6-10d","Izračunaj.","(−54):9·(−4)","24","Računaj sleva nadesno.","−54:9=−6, a −6·(−4)=24.","medium","Množenje i deljenje"),I("6-10e","Izračunaj.","72:(−8):(−3)","3","Računaj sleva nadesno.","72:(−8)=−9, zatim −9:(−3)=3.","advanced","Množenje i deljenje")],
  "brojevni-izrazi":[I("6-11d","Izračunaj.","−5·(−2+6) + 7","-13","Prvo zagrada, zatim množenje.","−2+6=4, −5·4+7=−13.","medium","Brojevni izrazi"),I("6-11e","Izračunaj.","36:(−3·2) − (−4)","-2","Najpre izračunaj izraz u zagradi.","−3·2=−6, 36:(−6)=−6, a −6+4=−2.","advanced","Brojevni izrazi")],

  "decimalni-zapis":[I("7-1d","Napiši decimalno.","[[frac:11|25]]","0,44","Proširi do imenioca 100.","11/25=44/100=0,44.","basic","Decimalni zapis"),C("7-1e","Izaberi tačan zapis.","[[frac:5|6]]",["0,8(3)","0,(56)","0,56"],"0,8(3)","Podeli 5 sa 6.","5:6=0,8333…=0,8(3).","advanced","Periodični zapis")],
  "decimalni-u-razlomak":[C("7-2d","Izaberi tačan razlomak.","1,6",["[[frac:8|5]]","[[frac:6|10]]","[[frac:16|5]]"],"[[frac:8|5]]","Zapiši 16/10 i skrati.","16/10=8/5.","basic","Decimalni u razlomak"),I("7-2e","Napiši decimalno.","−[[frac:7|8]]","-0,875","Podeli 7 sa 8 i zadrži znak.","−7/8=−0,875.","medium","Razlomak u decimalni"),I("7-2f","Napiši decimalno.","−[[frac:7|2]]","-3,5","Podeli 7 sa 2 i zadrži znak.","−7/2=−3,5.","basic","Razlomak u decimalni")],
  "kvadrat-racionalnog":[I("7-3d","Izračunaj.","(−1,4)^2","1,96","Kvadrat je pozitivan.","1,4·1,4=1,96.","medium","Kvadrat decimalnog broja"),C("7-3e","Izaberi tačan odgovor.","(−[[frac:5|6]])^2",["−[[frac:25|36]]","[[frac:10|12]]","[[frac:25|36]]"],"[[frac:25|36]]","Kvadriraj brojilac i imenilac.","(−5/6)²=25/36.","advanced","Kvadrat razlomka")],
  "kvadrati-brojeva":[I("7-4d","Izračunaj.","17^2","289","17·17.","17²=289.","medium","Kvadrati"),C("7-4e","Odredi broj x>0.","x^2=361",["17","18","19"],"19","19·19=361.","x=19.","advanced","Kvadrati")],
  "realni-brojevi":[C("7-5d","Izaberi racionalan broj.","",["1,001000100001… (broj nula između uzastopnih jedinica raste za 1)","π","−2,75"],"−2,75","Konačan decimalni zapis je racionalan.","−2,75 je racionalan broj.","basic","Vrste brojeva"),C("7-5e","Koja tvrdnja je tačna?","",["Svaki beskonačan decimalni zapis je iracionalan.","Broj π pripada iracionalnim brojevima.","Broj 0,(12) je iracionalan."],"Broj π pripada iracionalnim brojevima.","Periodičan zapis je racionalan, a neperiodičan iracionalan.","Broj π pripada iracionalnim brojevima.","medium","Vrste brojeva")],
  "brojna-prava":[C("7-6d","Odredi položaj.","−π",["Između −4 i −3","Između −3 i −2","Između 3 i 4"],"Između −4 i −3","Koristi π≈3,14, pa promeni znak.","−4<−π<−3.","advanced","Položaj realnog broja"),C("7-6e","Uporedi.","3,1 __ π",["<",">","="],"<","Koristi π≈3,14.","Dobijamo 3,1<π.","medium","Poređenje realnih brojeva")],
  "intervali":[C("7-7d","Izaberi tačan interval.","−4≤x<1",["[−4,1)","(−4,1]","[−4,1]"],"[−4,1)","−4 je uključeno, 1 nije.","Interval je [−4,1).","basic","Intervali"),C("7-7e","Izaberi tačan zapis.","|x−1|<3",["−2<x<4","−3<x<3","x<−2 ili x>4"],"−2<x<4","Rastojanje od 1 je manje od 3.","1−3<x<1+3, pa je −2<x<4.","advanced","Apsolutna vrednost")],
  "kvadratni-koren":[I("7-8d","Odredi.","[[sqrt:196]]","14","Koji pozitivan broj na kvadrat daje 196?","14²=196.","basic","Kvadratni koren"),I("7-8e","Izračunaj.","−[[sqrt:2,89]]","-1,7","1,7²=2,89, a ispred korena je minus.","−√2,89=−1,7.","medium","Kvadratni koren")],
  "odredjivanje-korena":[C("7-9d","Izaberi tačan odgovor.","[[sqrt:[[frac:121|144]]]]",["[[frac:11|12]]","[[frac:121|12]]","[[frac:10|12]]"],"[[frac:11|12]]","Koji nenegativan razlomak na kvadrat daje 121/144?","([[frac:11|12]])²=[[frac:121|144]], pa je koren [[frac:11|12]].","medium","Koren razlomka"),C("7-9e","Između kojih brojeva je koren?","[[sqrt:120]]",["9 i 10","10 i 11","11 i 12"],"10 i 11","100<120<121.","10<√120<11.","advanced","Procena korena")],
  "svojstva-korena":[C("7-10d","Pojednostavi.","[[sqrt:98]]",["7√2","14√2","49√2"],"7√2","98=49·2.","√98=7√2.","medium","Svojstva korena"),I("7-10e","Izračunaj.","[[sqrt:25]] · [[sqrt:4]]","10","Koren svakog broja je ceo.","5·2=10.","basic","Koren proizvoda")],

  "razmera-duzi":[C("8-1d","Odredi skraćenu razmeru.","24 mm : 6 cm",["2:5","2:3","5:2"],"2:5","6 cm je 60 mm.","24:60=2:5.","medium","Jedinice i razmera"),C("8-1e","Poređaj razmere od najmanje do najveće.","1:3, 3:4, 5:2",["1:3, 3:4, 5:2","5:2, 3:4, 1:3","3:4, 1:3, 5:2"],"1:3, 3:4, 5:2","Posmatraj razmere kao količnike.","Važi [[frac:1|3]]<[[frac:3|4]]<[[frac:5|2]].","advanced","Poređenje razmera")],
  "samerljive-duzi":[C("8-2d","Da li su duži samerljive?","4√5 i 10√5",["Da","Ne","Samo približno"],"Da","Skrati √5.","Njihova razmera je 4/10=2/5.","medium","Samerljivost"),C("8-2e","Koji par je nesamerljiv?","",["3a i 7a","a i a√7","2a i 5a"],"a i a√7","Razmera sadrži iracionalan broj.","Razmera je 1/√7, pa su duži nesamerljive.","advanced","Nesamerljive duži")],
  "proporcionalnost":[I("8-3d","Odredi x.","9:12=15:x","20","9x=12·15.","x=180/9=20.","medium","Proporcija"),C("8-3e","Dopuni proporciju.","5:8=20:x",["24","30","32"],"32","5x=8·20.","x=32.","advanced","Proporcija")],
  "talesova-teorema":[I("8-4d","Odredi AN.","MN∥BC, AM=5, AB=8, AC=16","10","AM/AB=AN/AC.","5/8=AN/16, pa je AN=10.","medium","Talesova teorema"),C("8-4e","Odredi razmeru.","MN∥BC, AM=6, MB=3",["AM:AB=2:3","AM:AB=1:2","AM:AB=3:2"],"AM:AB=2:3","AB=AM+MB=9.","AM:AB=6:9=2:3.","advanced","Talesova teorema")],
  "slicni-trouglovi":[I("8-5d","Odredi odgovarajuću veću stranicu x.","Razmera veće i manje stranice je 1,5; manja je 8 cm","12","Pomnoži manju stranicu datom razmerom.","x=1,5·8=12 cm.","medium","Slični trouglovi"),C("8-5e","Odredi koeficijent k.","△ABC∼△A₁B₁C₁, k=AB:A₁B₁, AB=7 cm, A₁B₁=21 cm",["[[frac:1|3]]","3","14"],"[[frac:1|3]]","Zadrži zadati redosled AB:A₁B₁.","k=7:21=[[frac:1|3]].","advanced","Slični trouglovi")],
  "stavovi-slicnosti":[C("8-6d","Koji stav primenjujemo?","Tri para stranica su proporcionalna.",["UU","SUS","SSS"],"SSS","Koristimo tri stranice.","Stav je SSS.","basic","Stavovi sličnosti"),C("8-6e","Da li podaci dokazuju sličnost?","Dve stranice su proporcionalne, ali dati ugao nije zahvaćen.",["Da, po SUS","Da, po SSS","Ne mora da znači"],"Ne mora da znači","Za SUS ugao mora biti između datih stranica.","Ovi podaci nisu dovoljni.","advanced","Stavovi sličnosti")],
  "primene-slicnosti":[I("8-7d","Odredi stvarnu dužinu u metrima.","Razmera 1:250, na planu 6 cm","15","6·250=1500 cm.","1500 cm=15 m.","basic","Razmera plana"),I("8-7e","Odredi visinu zgrade.","Čovek 1,8 m baca senku 1,2 m; senka zgrade je 10 m","15","Visina/senka je ista.","1,8/1,2=h/10, pa je h=15 m.","advanced","Senke")]
};

export function tasksForLesson(lessonId:string,tasks:Task[]){const pool=[...tasks,...(extraTasks[lessonId]??[]),...(septemberTasks[lessonId]??[]),...(octoberTasks[lessonId]??[]),...octoberVariants(lessonId),...septemberVariants(lessonId)];const unique=pool.filter((task,index)=>pool.findIndex(item=>item.id===task.id)===index);return applySeptemberWorkLevels(lessonId,applyOctoberWorkLevels(lessonId,unique)).map(task=>taskWithVisual(lessonId,task)).concat(octoberSupplement[lessonId]??[])}
export function examplesForLesson(lessonId:string,examples:string[]){return [...examples,...(extraExamples[lessonId]??[])]}

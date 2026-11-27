import { C, ErrorCategory, I, Task, TaskDiagram } from "./types";

const P=(task:Task,taskType:string,errorCategory:ErrorCategory,diagram?:TaskDiagram):Task=>({
  ...task,taskType,errorCategory,practiceOnly:true,...(diagram?{diagram}:{}),
});

/**
 * Originalna baza septembarskih tipova zadataka. Udžbenici su korišćeni samo
 * kao stručna mapa veština i redosleda težine; formulacije i podaci su novi.
 */
export const septemberTasks:Record<string,Task[]>={
  // 6. razred — Celi brojevi
  "skup-celih-brojeva":[
    P(I("6-1f","Odredi prethodnik broja.","−8","-9","Prethodnik je za 1 manji.","−8−1=−9.","basic","Prethodnik i sledbenik"),"prethodnik","concept"),
    P(I("6-1g","Odredi sledbenik broja.","−1","0","Sledbenik je za 1 veći.","−1+1=0.","basic","Prethodnik i sledbenik"),"sledbenik","concept"),
    P(C("6-1h","Odredi koordinatu tačke A.","",["−3","−2","3"],"−3","Pročitaj broj ispod označene tačke.","Tačka A je na broju −3.","medium","Brojna prava"),"ocitavanje-brojne-prave","diagram",{type:"number-line",min:-5,max:2,points:[{value:-3,label:"A"}]}),
    P(I("6-1i","Zapiši celim brojem.","Temperatura je 4 °C ispod nule.","-4","Ispod nule zapisujemo znakom minus.","Temperaturu zapisujemo kao −4 °C.","medium","Zapis celog broja"),"kratak-kontekst","concept"),
    P(C("6-1j","Da li je tvrdnja tačna?","Sledbenik broja −6 je −5.",["Tačno","Netačno"],"Tačno","Sledbenik je za 1 veći.","−6+1=−5, pa je tvrdnja tačna.","advanced","Prethodnik i sledbenik"),"tacno-netacno","concept"),
    P(C("6-1k","Dopuni niz uzastopnih celih brojeva.","−4, __, −2",["−5","−3","−1"],"−3","Uzastopni brojevi razlikuju se za 1.","Između −4 i −2 je −3.","advanced","Prethodnik i sledbenik"),"dopunjavanje-niza","method"),
  ],
  "apsolutna-vrednost":[
    P(C("6-2f","Odredi sva rešenja.","|x|=11",["x=11","x=−11","x=−11 ili x=11"],"x=−11 ili x=11","Brojevi sa istim rastojanjem od nule su suprotni.","Rešenja su −11 i 11.","medium","Jednačina sa apsolutnom vrednošću"),"dva-resenja","concept"),
    P(C("6-2g","Izaberi tačnu tvrdnju.","|−7|=−7",["Tačno","Netačno"],"Netačno","Apsolutna vrednost nije negativna.","|−7|=7, pa je tvrdnja netačna.","basic","Apsolutna vrednost"),"pronadji-gresku","concept"),
    P(C("6-2h","Uporedi.","|−13| __ |9|",["<",">","="],">","Najpre odredi obe apsolutne vrednosti.","13>9, pa je |−13|>|9|.","medium","Apsolutna vrednost"),"poredjenje-apsolutnih","method"),
    P(C("6-2i","Da li postoji ceo broj x?","|x|=−4",["Da","Ne"],"Ne","Rastojanje od nule ne može biti negativno.","Apsolutna vrednost je uvek nenegativna, zato nema rešenja.","advanced","Jednačina sa apsolutnom vrednošću"),"nemoguc-uslov","concept"),
    P(I("6-2j","Izračunaj.","|−10|+|−3|−|5|","8","Zameni svaku apsolutnu vrednost nenegativnim brojem.","|−10|+|−3|−|5|=10+3−5=13−5=8.","advanced","Apsolutna vrednost"),"izraz-sa-apsolutnim","calculation"),
  ],
  "uporedjivanje":[
    P(C("6-3f","Koja tačka je najviše desno?","",["A","B","C"],"C","Najviše desno je najveća koordinata.","C(2) je najviše desno.","basic","Brojna prava"),"citanje-polozaja","diagram",{type:"number-line",min:-4,max:3,points:[{value:-3,label:"A"},{value:-1,label:"B"},{value:2,label:"C"}]}),
    P(C("6-3g","Poređaj od najvećeg.","−6, 4, −1, 0",["4, 0, −1, −6","−6, −1, 0, 4","4, −1, 0, −6"],"4, 0, −1, −6","Kreni od broja najviše desno.","4>0>−1>−6.","medium","Poredak"),"opadajuci-poredak","method"),
    P(I("6-3h","Odredi najveći ceo broj x.","x<−2","-3","Najveći ceo broj levo od −2 je njegov prethodnik.","Najveći ceo broj manji od −2 je −3.","advanced","Poređenje"),"granica-nejednakosti","concept"),
    P(C("6-3i","Pronađi grešku.","−12>−7 jer je 12>7.",["Poređenje je tačno.","Znak treba da bude <.","Brojevi su jednaki."],"Znak treba da bude <.","Kod negativnih brojeva bliži nuli je veći.","−12 je levo od −7, zato je −12<−7.","medium","Poređenje"),"pronadji-gresku","concept"),
    P(C("6-3j","Izaberi nižu temperaturu.","−5 °C ili −9 °C",["−5 °C","−9 °C","Jednake su"],"−9 °C","Niža temperatura odgovara manjem broju.","−9<−5, zato je −9 °C niža temperatura.","basic","Poređenje"),"kratak-kontekst","method"),
  ],
  "sabiranje":[
    P(C("6-4f","Odredi znak zbira bez računanja.","−28+11",["+","−","0"],"−","Veću apsolutnu vrednost ima negativan sabirak.","|−28|>|11|, zato je zbir negativan.","medium","Znak zbira"),"znak-bez-racunanja","sign"),
    P(I("6-4g","Dopuni.","−9+__=0","9","Broj i njegov suprotan daju nulu.","−9+9=0.","basic","Suprotni sabirci"),"dopunjavanje","concept"),
    P(C("6-4h","Pronađi grešku.","−16+7=9",["Nema greške.","Rezultat treba da bude −9.","Rezultat treba da bude −23."],"Rezultat treba da bude −9.","Oduzmi apsolutne vrednosti i uzmi znak većeg broja.","16−7=9, a veći po apsolutnoj vrednosti je −16, zato je zbir −9.","medium","Sabiranje različitih znakova"),"pronadji-gresku","sign"),
    P(I("6-4i","Odredi konačnu temperaturu.","Ujutru je bilo −6 °C, a zatim je temperatura porasla za 10 °C.","4","Porast zapisujemo sabiranjem pozitivnog broja.","−6+10=4 °C.","advanced","Sabiranje različitih znakova"),"kratak-kontekst","method"),
    P(I("6-4j","Odredi x.","x+(−14)=−3","11","Dodaj 14 na obe strane.","x=−3+14=11.","advanced","Nepoznati sabirak"),"jednacina","method"),
  ],
  "oduzimanje":[
    P(C("6-5f","Izaberi jednak izraz.","−8−(−5)",["−8+5","−8−5","8−5"],"−8+5","Oduzimanje pretvori u sabiranje suprotnog.","−8−(−5)=−8+5.","basic","Oduzimanje negativnog broja"),"preoblikovanje","rule"),
    P(C("6-5g","Pronađi grešku.","−5−(−8)=−13",["Nema greške.","Drugi znak treba promeniti: rezultat je 3.","Rezultat je 13."],"Drugi znak treba promeniti: rezultat je 3.","Minus ispred negativnog broja postaje plus.","−5−(−8)=−5+8=3.","medium","Oduzimanje negativnog broja"),"pronadji-gresku","sign"),
    P(I("6-5h","Odredi sprat.","Lift je na 2. spratu i spušta se 5 spratova.","-3","Spuštanje zapisujemo oduzimanjem.","2−5=−3, pa lift stiže na 3. podzemni nivo.","medium","Oduzimanje"),"kratak-kontekst","method"),
    P(I("6-5i","Odredi x.","−7−x=−12","5","Koji broj treba oduzeti od −7 da se dobije −12?","−7−5=−12, pa je x=5.","advanced","Nepoznati umanjilac"),"jednacina","method"),
    P(C("6-5j","Odredi znak rezultata.","−3−15",["+","−","0"],"−","Oduzimanje 15 znači sabiranje broja −15.","−3+(−15) je negativan broj.","basic","Oduzimanje"),"znak-bez-racunanja","sign"),
  ],
  "rastojanje":[
    P(C("6-6f","Odredi rastojanje tačaka A i B.","",["3","5","7"],"5","Prebroj jedinične duži između tačaka.","Od −3 do 2 ima 5 jediničnih duži.","basic","Rastojanje"),"citanje-brojne-prave","diagram",{type:"number-line",min:-5,max:4,points:[{value:-3,label:"A"},{value:2,label:"B"}]}),
    P(I("6-6g","Odredi razliku temperatura.","U jednom gradu je −7 °C, a u drugom 5 °C.","12","Razlika temperatura je rastojanje na brojnoj pravoj.","|−7−5|=12 °C.","medium","Rastojanje"),"kratak-kontekst","method"),
    P(C("6-6h","Odredi sve moguće vrednosti x.","d(x,2)=4",["x=6","x=−2","x=−2 ili x=6"],"x=−2 ili x=6","Od tačke 2 kreni 4 mesta levo i desno.","Dobijamo 2−4=−2 i 2+4=6.","advanced","Rastojanje"),"dve-tacke","concept"),
    P(C("6-6i","Da li je tvrdnja tačna?","d(−4,3)=−7",["Tačno","Netačno"],"Netačno","Rastojanje ne može biti negativno.","d(−4,3)=|−4−3|=7.","medium","Rastojanje"),"tacno-netacno","concept"),
    P(I("6-6j","Odredi koordinatu tačke B.","A(−6), d(A,B)=9, B>0","3","Od −6 kreni 9 jedinica udesno.","−6+9=3, pa je B(3).","advanced","Rastojanje"),"nepoznata-koordinata","method"),
  ],
  "sabiranje-oduzimanje":[
    P(I("6-7f","Izračunaj.","−12−(−7)−5","-10","Prvo pretvori oduzimanje negativnog broja u sabiranje.","−12+7−5=−5−5=−10.","basic","Sabiranje i oduzimanje"),"izraz-sa-zagradama","calculation"),
    P(C("6-7g","Izaberi tačan zapis bez zagrada.","9+(−4)−(−6)",["9−4+6","9+4−6","9−4−6"],"9−4+6","Znak ispred svake zagrade odredi posebno.","+(−4) daje −4, a −(−6) daje +6.","medium","Uklanjanje zagrada"),"uklanjanje-zagrada","rule"),
    P(C("6-7h","Odredi primenjeno svojstvo.","−8+13=13+(−8)",["Zamena mesta sabiraka","Združivanje sabiraka","Oduzimanje suprotnog broja"],"Zamena mesta sabiraka","Promenjen je samo redosled sabiraka.","Zbir se ne menja kada sabirci zamene mesta.","medium","Svojstva sabiranja"),"zamena-mesta-sabiraka","rule"),
    P(C("6-7i","Pronađi grešku.","4−(−9)+(−3)=4−9−3",["Nema greške.","−(−9) treba da bude +9.","+(−3) treba da bude +3."],"−(−9) treba da bude +9.","Oduzimanje negativnog broja postaje sabiranje.","Tačno je 4+9−3.","advanced","Uklanjanje zagrada"),"pronadji-gresku","sign"),
    P(I("6-7j","Izračunaj stanje.","Dug je 18 dinara. Vraćeno je 7 dinara, a zatim je napravljen novi dug od 5 dinara.","-16","Dug zapiši negativnim brojem.","−18+7−5=−16 dinara.","advanced","Sabiranje i oduzimanje"),"problem-vise-koraka","method"),
  ],
  "mnozenje":[
    P(C("6-8f","Odredi znak proizvoda.","(−8)·15",["+","−","0"],"−","Činioci imaju različite znake.","Proizvod brojeva različitih znakova je negativan.","basic","Znak proizvoda"),"znak-bez-racunanja","sign"),
    P(I("6-8g","Dopuni.","(−7)·__=42","-6","Proizvod treba da bude pozitivan.","(−7)·(−6)=42.","medium","Nepoznati činilac"),"dopunjavanje","method"),
    P(C("6-8h","Pronađi grešku.","(−9)·(−4)=−36",["Nema greške.","Rezultat treba da bude 36.","Rezultat treba da bude −13."],"Rezultat treba da bude 36.","Dva negativna činioca daju pozitivan proizvod.","(−9)·(−4)=36.","medium","Znak proizvoda"),"pronadji-gresku","sign"),
    P(C("6-8i","Odredi znak proizvoda.","(−2)·(−3)·(−5)",["+","−","0"],"−","Prebroj negativne činioce.","Tri negativna činioca daju negativan proizvod.","advanced","Znak proizvoda"),"vise-cinilaca","rule"),
    P(I("6-8j","Izračunaj promenu.","Temperatura opada 3 °C na sat tokom 4 sata.","-12","Svaki sat donosi promenu −3.","4·(−3)=−12 °C.","advanced","Množenje"),"kratak-kontekst","method"),
  ],
  "deljenje":[
    P(C("6-9f","Odredi znak količnika.","−84:(−7)",["+","−","0"],"+","Deljenik i delilac imaju iste znake.","Količnik brojeva istih znakova je pozitivan.","basic","Znak količnika"),"znak-bez-racunanja","sign"),
    P(I("6-9g","Odredi x.","−63:x=9","-7","Delilac mora biti negativan.","x=−63:9=−7.","advanced","Nepoznati delilac"),"jednacina","method"),
    P(C("6-9h","Pronađi grešku.","−48:(−6)=−8",["Nema greške.","Rezultat treba da bude 8.","Rezultat treba da bude −42."],"Rezultat treba da bude 8.","Isti znaci daju pozitivan količnik.","−48:(−6)=8.","medium","Znak količnika"),"pronadji-gresku","sign"),
    P(C("6-9i","Koji izraz je dozvoljen?","",["15:0","0:0","0:(−5)"],"0:(−5)","Nulom se ne deli.","0:(−5)=0, dok izrazi sa deliocem 0 nisu definisani.","medium","Deljenje nulom"),"izbor-dozvoljenog","concept"),
    P(I("6-9j","Odredi prosečnu dnevnu promenu stanja.","Stanje je zbog duga umanjeno ukupno za 36 dinara tokom 6 dana.","-6","Umanjenje stanja zapisujemo negativnim brojem.","−36:6=−6 dinara dnevno.","advanced","Deljenje"),"kratak-kontekst","method"),
  ],
  "mnozenje-deljenje":[
    P(C("6-10f","Odredi znak rezultata.","(−6)·(−4):(−3)",["+","−","0"],"−","Odredi znak redom ili prebroj negativne brojeve.","Pozitivan proizvod podeljen negativnim brojem daje negativan rezultat.","basic","Znak proizvoda i količnika"),"znak-bez-racunanja","sign"),
    P(I("6-10g","Dopuni.","__:(−5)·2=12","-30","Računaj unazad od rezultata.","x:(−5)=6, pa je x=−30.","advanced","Množenje i deljenje"),"dopunjavanje","method"),
    P(C("6-10h","Pronađi grešku.","48:(−6)·2=48:(−12)=−4",["Nema greške.","Mora se računati sleva nadesno; rezultat je −16.","Rezultat je 16."],"Mora se računati sleva nadesno; rezultat je −16.","Množenje i deljenje imaju isti prioritet.","48:(−6)=−8, zatim −8·2=−16.","medium","Redosled operacija"),"pronadji-gresku","rule"),
    P(C("6-10i","Izaberi izraz čija je vrednost pozitivna.","",["−24:6·3","−24:(−6)·3","24:(−6)·3"],"−24:(−6)·3","Prati samo znake.","−24:(−6) je pozitivno, a množenje sa 3 čuva pozitivan znak.","medium","Znak proizvoda i količnika"),"izbor-po-znaku","sign"),
    P(I("6-10j","Izračunaj.","(−96):8:(−4)","3","Računaj sleva nadesno.","−96:8=−12, zatim −12:(−4)=3.","advanced","Množenje i deljenje"),"lanac-operacija","calculation"),
  ],
  "brojevni-izrazi":[
    P(C("6-11f","Koju operaciju izvodiš prvu?","7−3·(−2+6)",["Sabiranje u zagradi","Množenje","Oduzimanje"],"Sabiranje u zagradi","Najpre rešavamo zagrade.","Prvo računamo −2+6.","basic","Redosled operacija"),"izbor-prvog-koraka","rule"),
    P(I("6-11g","Izračunaj.","18−(−2)·(5−8)","12","Prvo zagrada, zatim množenje.","5−8=−3; (−2)·(−3)=6; 18−6=12.","medium","Brojevni izrazi"),"ugnjezdene-operacije","calculation"),
    P(C("6-11h","Pronađi grešku.","20−4·(−3)=16·(−3)=−48",["Nema greške.","Množenje se radi pre oduzimanja.","Treba prvo podeliti."],"Množenje se radi pre oduzimanja.","Množenje ima prednost nad oduzimanjem.","4·(−3)=−12, pa je 20−(−12)=32.","medium","Redosled operacija"),"pronadji-gresku","rule"),
    P(C("6-11i","Uporedi vrednosti izraza.","A=(−3)·4+5; B=18:(−3)",["A<B","A>B","A=B"],"A<B","Izračunaj oba izraza posebno.","A=−12+5=−7, B=−6, pa je A<B.","advanced","Brojevni izrazi"),"poredjenje-izraza","method"),
    P(I("6-11j","Izračunaj konačno stanje.","Početno stanje je −12. Zatim se tri puta doda 5 i jednom oduzme 4.","-1","Zapiši jedan izraz.","−12+3·5−4=−12+15−4=−1.","advanced","Brojevni izrazi"),"problem-vise-koraka","method"),
  ],

  // 7. razred — Realni brojevi
  "decimalni-zapis":[
    P(I("7-1f","Napiši decimalno.","[[frac:13|8]]","1,625","Podeli 13 sa 8.","13:8=1,625.","basic","Decimalni zapis"),"razlomak-u-konacan-zapis","calculation"),
    P(C("7-1g","Odredi vrstu zapisa.","0,1(27)",["Konačan","Beskonačan periodičan","Beskonačan neperiodičan"],"Beskonačan periodičan","Cifre u zagradi se ponavljaju.","Period 27 ponavlja se bez kraja.","medium","Periodični zapis"),"prepoznavanje-zapisa","concept"),
    P(C("7-1h","Odredi 15. decimalu.","0,(36)",["3","6","0"],"3","Period ima dve cifre: neparna mesta imaju istu cifru.","Cifre se smenjuju 3, 6; 15. mesto je neparno, pa je cifra 3.","advanced","Periodični zapis"),"cifra-perioda","method"),
    P(C("7-1i","Pronađi grešku.","[[frac:2|5]]=0,25",["Nema greške.","Rezultat treba da bude 0,4.","Zapis mora biti periodičan."],"Rezultat treba da bude 0,4.","Proširi razlomak do imenioca 10.","[[frac:2|5]]=[[frac:4|10]]=0,4.","medium","Decimalni zapis"),"pronadji-gresku","calculation"),
    P(C("7-1j","Odredi najveći broj.","0,4; [[frac:3|8]]; 0,(39)",["0,4","[[frac:3|8]]","0,(39)"],"0,4","Pretvori zapise u decimalne brojeve.","[[frac:3|8]]=0,375 i 0,(39)=0,3939…, pa je 0,4 najveći.","advanced","Poređenje zapisa"),"poredjenje-zapisa","method"),
  ],
  "decimalni-u-razlomak":[
    P(C("7-2g","Izaberi skraćen razlomak.","0,072",["[[frac:9|125]]","[[frac:18|125]]","[[frac:72|100]]"],"[[frac:9|125]]","Zapiši [[frac:72|1000]] i skrati sa 8.","[[frac:72|1000]]=[[frac:9|125]].","medium","Decimalni u razlomak"),"skrati-decimalni-razlomak","calculation"),
    P(C("7-2h","Izaberi tačan razlomak.","−1,25",["−[[frac:5|4]]","−[[frac:1|4]]","[[frac:5|4]]"],"−[[frac:5|4]]","Zadrži znak i pretvori 1,25.","−1,25=−[[frac:125|100]]=−[[frac:5|4]].","basic","Decimalni u razlomak"),"negativan-mesovit-zapis","sign"),
    P(C("7-2i","Izaberi tačnu jednakost.","0,(3)",["0,(3)=[[frac:1|3]]","0,(3)=[[frac:3|10]]","0,(3)=[[frac:1|30]]"],"0,(3)=[[frac:1|3]]","Trećina ima beskonačan niz trojki.","[[frac:1|3]]=0,333…=0,(3).","advanced","Pretvaranje zapisa"),"periodican-u-razlomak","concept"),
    P(C("7-2j","Pronađi grešku.","0,06=[[frac:6|10]]",["Nema greške.","Imenilac treba da bude 100.","Brojilac treba da bude 60."],"Imenilac treba da bude 100.","Dve decimale daju imenilac 100.","0,06=[[frac:6|100]]=[[frac:3|50]].","medium","Decimalni u razlomak"),"pronadji-gresku","rule"),
    P(C("7-2k","Uporedi.","[[frac:7|20]] __ 0,36",["<",">","="],"<","Pretvori [[frac:7|20]] u decimalni zapis.","[[frac:7|20]]=0,35, pa je 0,35<0,36.","advanced","Poređenje zapisa"),"poredjenje-oblika","method"),
  ],
  "kvadrat-racionalnog":[
    P(C("7-3f","Odredi znak rezultata.","(−2,7)^2",["+","−","0"],"+","Kvadrat negativnog broja je pozitivan.","(−2,7)·(−2,7)>0.","basic","Znak kvadrata"),"znak-bez-racunanja","sign"),
    P(C("7-3g","Uporedi.","−3^2 __ (−3)^2",["<",">","="],"<","Zagrade određuju šta se kvadrira.","−3²=−9, a (−3)²=9, pa je −3²<(−3)².","advanced","Znak kvadrata"),"uloga-zagrada","concept"),
    P(C("7-3h","Izračunaj.","(−[[frac:7|10]])^2",["[[frac:49|100]]","−[[frac:49|100]]","[[frac:14|20]]"],"[[frac:49|100]]","Kvadriraj brojilac i imenilac.","(−[[frac:7|10]])²=[[frac:49|100]].","medium","Kvadrat razlomka"),"kvadrat-negativnog-razlomka","calculation"),
    P(C("7-3i","Uporedi.","(−1,5)^2 __ 1,4^2",["<",">","="],">","Uporedi apsolutne vrednosti osnova.","Pošto je 1,5>1,4, važi (−1,5)²>1,4².","advanced","Poređenje kvadrata"),"poredjenje-kvadrata","method"),
    P(I("7-3j","Odredi površinu kvadrata.","a=1,2 cm","1,44","Površina kvadrata je a².","P=a²=1,2²=1,44 cm².","medium","Kvadrat decimalnog broja"),"geometrijski-kontekst","method"),
  ],
  "kvadrati-brojeva":[
    P(C("7-4f","Odredi sva rešenja.","x^2=81",["x=9","x=−9","x=−9 ili x=9"],"x=−9 ili x=9","Suprotni brojevi imaju jednake kvadrate.","(−9)²=9²=81, pa su rešenja −9 i 9.","medium","Jednačina x²=a"),"dva-resenja","concept"),
    P(C("7-4g","Da li postoji realno rešenje?","x^2=−16",["Da","Ne"],"Ne","Kvadrat realnog broja nije negativan.","Ne postoji realan broj čiji je kvadrat −16.","advanced","Jednačina x²=a"),"nemoguc-uslov","concept"),
    P(C("7-4h","Pronađi grešku.","(−[[frac:1|2]])^2=−[[frac:1|4]]",["Nema greške.","Rezultat treba da bude [[frac:1|4]].","Rezultat treba da bude −1."],"Rezultat treba da bude [[frac:1|4]].","Kvadrat negativnog broja je pozitivan.","(−[[frac:1|2]])²=[[frac:1|4]].","medium","Znak kvadrata"),"pronadji-gresku","sign"),
    P(I("7-4i","Izračunaj.","19^2","361","Možeš računati (20−1)².","19²=361.","basic","Kvadrati prirodnih brojeva"),"prepoznavanje-kvadrata","calculation"),
    P(C("7-4j","Izaberi broj čiji je kvadrat između 100 i 144.","",["9","11","13"],"11","Uporedi kvadrate ponuđenih brojeva.","11²=121, a 100<121<144.","advanced","Poređenje kvadrata"),"izbor-po-uslovu","method"),
  ],
  "realni-brojevi":[
    P(C("7-5f","Odredi vrstu broja.","0,1010010001… (broj nula između uzastopnih jedinica raste za 1)",["Racionalan","Iracionalan"],"Iracionalan","Zapis se ne završava i nema period.","Beskonačan neperiodičan decimalni zapis predstavlja iracionalan broj.","advanced","Vrste brojeva"),"decimalni-zapis-klasifikacija","concept"),
    P(C("7-5g","Izaberi racionalan broj.","",["π","0,(27)","2,020020002… (broj nula između uzastopnih dvojki raste za 1)"],"0,(27)","Periodičan decimalni zapis je racionalan.","0,(27) je racionalan broj.","basic","Vrste brojeva"),"izbor-po-vrsti","concept"),
    P(C("7-5h","Odredi pripadnost.","−1,25",["∈ Q i ∈ R","∉ Q i ∈ R","∉ R"],"∈ Q i ∈ R","Konačan decimalni zapis je racionalan.","Broj −1,25 pripada i Q i R.","medium","Skupovi brojeva"),"pripadnost-skupovima","concept"),
    P(C("7-5i","Pronađi grešku.","π=[[frac:22|7]]",["Jednakost je tačna.","[[frac:22|7]] je samo približna vrednost broja π.","Broj π pripada racionalnim brojevima."],"[[frac:22|7]] je samo približna vrednost broja π.","Uporedi tačnu i približnu vrednost.","Broj π pripada iracionalnim brojevima; [[frac:22|7]] je racionalna približna vrednost.","advanced","Iracionalni brojevi"),"pronadji-gresku","concept"),
    P(C("7-5j","Koji niz je tačno uređen po uključenosti?","",["Z⊂Q⊂R","R⊂Q⊂Z","Q⊂Z⊂R"],"Z⊂Q⊂R","Svaki ceo broj je racionalan, a svaki racionalan je realan.","Tačno je Z⊂Q⊂R.","medium","Skupovi brojeva"),"hijerarhija-skupova","rule"),
  ],
  "brojna-prava":[
    P(C("7-6f","Između kojih celih brojeva je broj?","−2,65",["−4 i −3","−3 i −2","−2 i −1"],"−3 i −2","Uporedi −2,65 sa susednim celim brojevima.","Važi −3<−2,65<−2.","basic","Položaj realnog broja"),"ogranicavanje-decimalnog-broja","method"),
    P(C("7-6g","Odredi najbolju procenu tačke A.","",["2,2","π","3,8"],"π","Tačka A je malo desno od broja 3.","Položaj tačke odgovara broju π≈3,14.","medium","Brojna prava"),"citanje-pribliznog-polozaja","diagram",{type:"number-line",min:1,max:5,points:[{value:3.14,label:"A"}]}),
    P(I("7-6h","Odredi suprotan broj.","−2,75","2,75","Suprotne tačke su jednako udaljene od nule.","Broju −2,75 suprotan je broj 2,75.","medium","Brojna prava"),"suprotna-koordinata","concept"),
    P(C("7-6i","Uporedi.","π __ 4",["<",">","="],"<","Broj π nalazi se između 3 i 4.","Pošto je 3<π<4, važi π<4.","advanced","Poređenje realnih brojeva"),"poredjenje-polozajem","method"),
    P(C("7-6j","Koja tačka je najbliža nuli?","A(−3,72), B(1,4), C(−0,9)",["A","B","C"],"C","Uporedi rastojanja koordinata od nule.","Najmanju apsolutnu vrednost ima −0,9, zato je C najbliža nuli.","advanced","Brojna prava"),"udaljenost-od-nule","method"),
  ],
  "intervali":[
    P(C("7-7f","Zapiši kao interval.","−5<x≤2",["(−5,2]","[−5,2)","[−5,2]"],"(−5,2]","−5 nije uključeno, a 2 jeste.","Interval je (−5,2].","basic","Intervali"),"nejednakost-u-interval","rule"),
    P(C("7-7g","Koji broj ne pripada intervalu?","(−3,4]",["−3","0","4"],"−3","Leva granica nije uključena.","Broj −3 ne pripada intervalu (−3,4].","medium","Intervali"),"provera-pripadnosti","concept"),
    P(C("7-7h","Izaberi tačan interval.","|x−2|≤4",["[−2,6]","[−4,4]","(−2,6)"],"[−2,6]","Od broja 2 idi 4 jedinice ulevo i udesno.","2−4≤x≤2+4, pa je x∈[−2,6].","advanced","Apsolutna vrednost"),"apsolutna-u-interval","method"),
    P(C("7-7i","Pronađi grešku.","x∈[1,5) znači 1<x≤5.",["Nema greške.","Tačno je 1≤x<5.","Tačno je 1<x<5."],"Tačno je 1≤x<5.","Uglasta zagrada uključuje granicu.","[1,5) odgovara zapisu 1≤x<5.","medium","Intervali"),"pronadji-gresku","rule"),
    P(C("7-7j","Odredi tvrdnju koja važi za tačku A.","",["A∈[−2,1)","A∈(1,3]","A∈[3,5]"],"A∈(1,3]","Sa brojne prave očitaj koordinatu tačke A.","A je na broju 2, pa pripada intervalu (1,3].","advanced","Brojna prava"),"interval-sa-brojne-prave","diagram",{type:"number-line",min:-2,max:5,points:[{value:2,label:"A"}]}),
  ],
  "kvadratni-koren":[
    P(C("7-8f","Odredi sva rešenja jednačine.","x^2=64",["x=8","x=−8","x=−8 ili x=8"],"x=−8 ili x=8","Jednačina ima dva suprotna rešenja.","Rešenja su −8 i 8, iako je √64=8.","medium","Jednačina x²=a"),"koren-naspram-jednacine","concept"),
    P(C("7-8g","Da li izraz ima realnu vrednost?","[[sqrt:−9]]",["Da","Ne"],"Ne","U skupu realnih brojeva podkoren izraz ne može biti negativan.","√−9 nije realan broj.","advanced","Definicija korena"),"domen-korena","concept"),
    P(I("7-8h","Izračunaj.","[[sqrt:(−6)^2]]","6","Važi √(a²)=|a|.","[[sqrt:(−6)^2]]=|−6|=6.","medium","Definicija korena"),"koren-kvadrata","rule"),
    P(I("7-8i","Odredi stranicu kvadrata.","P=144 cm^2","12","Stranica je kvadratni koren površine.","a=√144=12 cm.","advanced","Kvadratni koren"),"geometrijski-kontekst","method"),
    P(C("7-8j","Pronađi grešku.","[[sqrt:25]]=−5",["Nema greške.","√25 je 5.","√25 je ±5."],"√25 je 5.","Znak √ označava nenegativan koren.","√25=5; jednačina x²=25 ima rešenja ±5.","basic","Definicija korena"),"pronadji-gresku","concept"),
    P(C("7-8k","Izaberi iracionalan broj.","",["[[sqrt:36]]","[[sqrt:12]]","0,25"],"[[sqrt:12]]","Uporedi 12 sa potpunim kvadratima.","Broj 12 nije potpun kvadrat, pa je √12 iracionalan broj.","medium","Koren i vrste brojeva"),"klasifikacija-korena","concept"),
  ],
  "odredjivanje-korena":[
    P(C("7-9f","Izaberi približnu vrednost.","[[sqrt:2]]",["1,14","1,41","1,73"],"1,41","1,4²=1,96 i 1,5²=2,25.","√2≈1,41.","basic","Približna vrednost korena"),"izbor-priblizne-vrednosti","method"),
    P(I("7-9g","Zaokruži na jednu decimalu.","[[sqrt:50]]≈7,071…","7,1","Pogledaj cifru stotih.","Cifra stotih je 7, pa je √50≈7,1.","medium","Približna vrednost korena"),"zaokruzivanje","method"),
    P(C("7-9h","Odredi tačno ograničenje.","[[sqrt:155]]",["11<√155<12","12<√155<13","13<√155<14"],"12<√155<13","144<155<169.","12<√155<13.","medium","Procena korena"),"ogranicavanje-korena","method"),
    P(C("7-9i","Pronađi grešku.","[[sqrt:[[frac:36|49]]]]=[[frac:6|49]]",["Nema greške.","Imenilac treba da bude 7.","Brojilac treba da bude 36."],"Imenilac treba da bude 7.","Proveri kvadriranjem ponuđenog razlomka.","([[frac:6|7]])²=[[frac:36|49]], pa je koren [[frac:6|7]].","advanced","Koren razlomka"),"pronadji-gresku","method"),
    P(I("7-9j","Odredi.","[[sqrt:0,0009]]","0,03","Proveri kvadriranjem decimalnog broja.","0,03²=0,0009, pa je koren 0,03.","advanced","Decimalni koren"),"koren-malog-decimalnog","calculation"),
  ],
  "svojstva-korena":[
    P(C("7-10f","Pojednostavi.","[[sqrt:200]]",["10√2","20√2","100√2"],"10√2","Izdvoji najveći potpuni kvadrat.","200=100·2, pa je √200=10√2.","medium","Svojstva korena"),"izdvajanje-kvadrata","method"),
    P(C("7-10g","Izračunaj.","[[sqrt:[[frac:64|25]]]]",["[[frac:8|5]]","[[frac:64|5]]","[[frac:4|5]]"],"[[frac:8|5]]","Primeni svojstvo količnika.","[[sqrt:[[frac:64|25]]]]=[[frac:8|5]].","basic","Koren količnika"),"koren-kolicnika","rule"),
    P(I("7-10h","Izračunaj.","[[sqrt:(−9)^2]]","9","Koren kvadrata je apsolutna vrednost.","[[sqrt:(−9)^2]]=|−9|=9.","medium","Koren kvadrata"),"apsolutna-vrednost","rule"),
    P(C("7-10i","Pronađi grešku.","[[sqrt:9+16]]=√9+√16=7",["Nema greške.","Koren zbira se ne rastavlja; rezultat je 5.","Rezultat je 25."],"Koren zbira se ne rastavlja; rezultat je 5.","Najpre saberi pod korenom.","√(9+16)=√25=5.","advanced","Svojstva korena"),"pronadji-gresku","rule"),
    P(C("7-10j","Izaberi jednak izraz.","[[sqrt:12]]·[[sqrt:3]]",["6","√15","36"],"6","Spoji korene u koren proizvoda.","√12·√3=√36=6.","advanced","Koren proizvoda"),"izbor-transformacije","method"),
  ],

  // 8. razred — Sličnost
  "razmera-duzi":[
    P(C("8-1f","Odredi obrnutu razmeru.","a:b=3:5",["b:a=3:5","b:a=5:3","b:a=2:5"],"b:a=5:3","Promeni redosled oba člana.","Ako je a:b=3:5, onda je b:a=5:3.","basic","Razmera"),"obrnuta-razmera","concept"),
    P(C("8-1g","Odredi razmeru.","45 mm : 0,15 m",["3:10","3:1","10:3"],"3:10","Pretvori 0,15 m u milimetre.","0,15 m=150 mm, pa je 45:150=3:10.","medium","Jedinice i razmera"),"pretvaranje-jedinica","method"),
    P(C("8-1h","Da li je tvrdnja tačna?","2 m : 50 cm = 2:50",["Tačno","Netačno"],"Netačno","Dužine prvo moraju biti u istoj jedinici.","2 m=200 cm, pa je razmera 200:50=4:1.","medium","Jedinice i razmera"),"tacno-netacno","rule"),
    P(I("8-1i","Dopuni tabelu.","a=18 cm, a:b=3:2, b=__ cm","12","Ako 3 dela daju 18, jedan deo je 6.","b=2·6=12 cm.","advanced","Razmera"),"tabela-razmere","method"),
    P(C("8-1j","Odredi skraćenu razmeru.","2,4 m : 200 cm",["6:5","5:6","12:5"],"6:5","Pretvori metre u centimetre.","2,4 m=240 cm, pa je 240:200=6:5.","advanced","Jedinice i razmera"),"slozena-promena-jedinice","method"),
    P(C("8-1k","Izaberi tačan zaključak.","AB:CD=1:4",["AB je četiri puta duža od CD.","CD je četiri puta duža od AB.","Duži su jednake."],"CD je četiri puta duža od AB.","Prva duž odgovara jednom, a druga četiri dela.","CD=4·AB.","basic","Razmera"),"tumacenje-razmere","concept"),
  ],
  "samerljive-duzi":[
    P(C("8-2f","Da li su duži samerljive?","6√3 i 15√3",["Da","Ne"],"Da","Skrati zajednički činilac √3.","Razmera je 6:15=2:5, racionalan broj.","basic","Samerljivost"),"provera-razmerom","concept"),
    P(C("8-2g","Izaberi nesamerljiv par.","",["4a i 9a","a i a√2","3√5 i 12√5"],"a i a√2","Razmera nesamerljivih duži je iracionalna.","a:(a√2)=1:√2, pa je razmera iracionalna.","medium","Nesamerljive duži"),"izbor-nesamerljivih","concept"),
    P(I("8-2h","Odredi najveću zajedničku meru.","18 cm i 24 cm","6","Traži najveći broj koji deli obe dužine.","NZD(18,24)=6, pa je zajednička mera 6 cm.","medium","Zajednička mera"),"zajednicka-mera","calculation"),
    P(C("8-2i","Pronađi grešku.","a i a√5 su samerljive jer imaju zajednički činilac a.",["Nema greške.","Razmera je 1:√5, pa su nesamerljive.","Duži su jednake."],"Razmera je 1:√5, pa su nesamerljive.","Odlučuje vrsta razmere, ne zajedničko slovo.","Razmera 1:√5 je iracionalna, zato su duži nesamerljive.","advanced","Nesamerljive duži"),"pronadji-gresku","concept"),
    P(C("8-2j","Odredi odnos stranice i dijagonale kvadrata.","d=a√2",["a:d=1:√2","a:d=√2:1","a:d=1:2"],"a:d=1:√2","Podeli obe duži sa a.","a:(a√2)=1:√2.","advanced","Nesamerljive duži"),"dijagonala-kvadrata","method"),
    P(C("8-2k","Izaberi tačnu tvrdnju.","",["Svake dve duži su samerljive.","Samerljive duži imaju racionalnu razmeru.","Nesamerljive duži su jednake."],"Samerljive duži imaju racionalnu razmeru.","Seti se definicije samerljivosti.","Racionalna razmera je uslov samerljivosti.","basic","Samerljivost"),"izbor-definicije","concept"),
  ],
  "proporcionalnost":[
    P(I("8-3f","Odredi x.","14:21=x:9","6","Primeni unakrsni proizvod.","21x=14·9, pa je x=6.","basic","Proporcija"),"nepoznat-brojilac","calculation"),
    P(I("8-3g","Odredi x.","8:x=12:18","12","Unakrsno pomnoži.","8·18=12x, pa je x=12.","medium","Proporcija"),"nepoznat-imenilac","method"),
    P(C("8-3h","Koji red tabele je proporcionalan prvom?","a: 2, 4, 6; b: 3, 6, 9",["a i b","a i b+1","Nijedan"],"a i b","Proveri razmere b:a.","3:2=6:4=9:6, pa su redovi proporcionalni.","medium","Proporcionalnost"),"tabela-proporcionalnosti","method"),
    P(C("8-3i","Pronađi grešku.","5:8=15:20 jer je 5·20=8·15",["Nema greške.","Proizvodi 100 i 120 nisu jednaki.","Treba sabrati članove."],"Proizvodi 100 i 120 nisu jednaki.","Izračunaj oba unakrsna proizvoda.","5·20=100, a 8·15=120, zato to nije proporcija.","medium","Proporcionalnost"),"pronadji-gresku","rule"),
    P(I("8-3j","Odredi pozitivan broj x.","4:x=x:9","6","Srednji član se pojavljuje dva puta.","x²=4·9=36, pa je x=6.","advanced","Proporcija"),"srednja-proporcionala","method"),
    P(C("8-3k","Izaberi odgovarajuću proporciju.","a:b=2:7 i c=10 odgovara duži a.",["10:x=2:7","10:x=7:2","x:10=2:7"],"10:x=2:7","Zadrži redosled odgovarajućih duži.","Pošto c odgovara a, zapisujemo c:x=a:b, odnosno 10:x=2:7.","advanced","Postavljanje proporcije"),"izbor-proporcije","method"),
  ],
  "talesova-teorema":[
    P(I("8-4f","Odredi AN.","MN∥BC, AM=6, AB=9, AC=15","10","Koristi AM:AB=AN:AC.","6:9=AN:15, pa je AN=10.","basic","Talesova teorema"),"trougao-nepoznata-duz","diagram",{type:"tales",variant:"triangle"}),
    P(I("8-4g","Odredi OD.","AB∥CD, OA=3, OC=9, OB=4","12","Upari duži na istim kracima ugla.","OA:OC=OB:OD, pa je 3:9=4:OD i OD=12.","medium","Talesova teorema"),"kraci-ugla","diagram",{type:"tales",variant:"rays"}),
    P(I("8-4h","Odredi AN.","MN∥BC, AM=4, MB=6, AC=25","10","Najpre odredi AB.","AB=4+6=10; 4:10=AN:25, pa je AN=10.","medium","Talesova teorema"),"deo-i-cela-duz","method",{type:"tales",variant:"triangle"}),
    P(I("8-4i","Odredi OD.","AB∥CD, dijagonale seku u O; AO=3, OC=6, BO=4","8","U trapezu važi AO:OC=BO:OD.","3:6=4:OD, pa je OD=8.","advanced","Talesova teorema"),"tales-u-trapezu","diagram",{type:"tales",variant:"trapezoid"}),
    P(C("8-4j","Izaberi tačnu proporciju.","AB∥CD",["OA:OC=OB:OD","OA:OD=OC:OB","OA:OB=OD:OC"],"OA:OC=OB:OD","Upari duži na istim kracima.","Paralele daju OA:OC=OB:OD.","medium","Postavljanje proporcije"),"izbor-proporcije-sa-crteza","diagram",{type:"tales",variant:"rays"}),
    P(C("8-4k","Koji korak deli duž u razmeri 2:3?","Na pomoćnom kraku odloži pet jednakih duži.",["Spoji 2. i 3. tačku.","Spoji 5. tačku sa krajem duži, pa kroz 2. povuci paralelu.","Kroz 3. tačku povuci normalu."],"Spoji 5. tačku sa krajem duži, pa kroz 2. povuci paralelu.","Ukupno ima 2+3=5 jednakih delova.","Peta tačka se spaja sa krajem, a paralela kroz drugu određuje podelu 2:3.","advanced","Konstrukcija razmere"),"konstrukcijski-postupak","method",{type:"tales",variant:"rays"}),
    P(C("8-4l","Pronađi grešku.","MN∥BC, AM=3, AB=9, AC=12; AN=9",["Nema greške.","AN treba da bude 4.","AN treba da bude 36."],"AN treba da bude 4.","Proporcija je AM:AB=AN:AC.","3:9=AN:12, pa je AN=4.","advanced","Talesova teorema"),"pronadji-gresku","method",{type:"tales",variant:"triangle"}),
  ],
  "slicni-trouglovi":[
    P(C("8-5f","Odredi odgovarajuću stranicu.","△ABC∼△DEF; stranici BC odgovara:",["DE","EF","DF"],"EF","Prati redosled temena B↔E i C↔F.","Stranici BC odgovara EF.","basic","Odgovarajuće stranice"),"uparivanje-stranica","concept",{type:"similarity",variant:"rotated"}),
    P(I("8-5g","Odredi koeficijent sličnosti.","AB=5 cm, DE=15 cm; k=DE:AB","3","Podeli odgovarajuće stranice istim redosledom.","k=15:5=3.","basic","Koeficijent sličnosti"),"koeficijent","calculation",{type:"similarity",variant:"upright"}),
    P(I("8-5h","Odredi obim većeg trougla.","k=2,5; obim manjeg je 18 cm","45","Obimi imaju isti koeficijent kao stranice.","O=2,5·18=45 cm.","medium","Obim sličnih trouglova"),"obim-preko-koeficijenta","method"),
    P(I("8-5i","Odredi x.","△ABC∼△DEF, AB=8, DE=12, AC=10, DF=x","15","Koeficijent od prvog ka drugom je 12:8.","x=10·[[frac:12|8]]=15.","medium","Odgovarajuće stranice"),"nepoznata-stranica","method",{type:"similarity",variant:"mirrored"}),
    P(C("8-5j","Da li položaj menja sličnost?","Dva slična trougla prikazana su u različitim položajima.",["Da, više nisu slični.","Ne, položaj nije važan.","Slični su samo ako su jednaki."],"Ne, položaj nije važan.","Okretanje ne menja uglove ni razmere.","Položaj na crtežu ne menja sličnost trouglova.","advanced","Slični trouglovi"),"promena-polozaja","diagram",{type:"similarity",variant:"rotated"}),
    P(C("8-5k","Pronađi nedosledan podatak.","△ABC∼△DEF, AB:DE=2:3, BC:EF=2:3, AC:DF=3:2",["AB:DE=2:3","BC:EF=2:3","AC:DF=3:2"],"AC:DF=3:2","Sve odgovarajuće razmere sličnih trouglova moraju biti jednake.","Treća razmera treba da bude 2:3 kao i prve dve.","advanced","Slični trouglovi"),"provera-odgovarajucih-razmera","rule"),
  ],
  "stavovi-slicnosti":[
    P(C("8-6f","Odredi stav sličnosti.","∠A=∠D i ∠B=∠E",["UU","SUS","SSS"],"UU","Dva odgovarajuća ugla su jednaka.","Trouglovi su slični po stavu UU.","basic","Stavovi sličnosti"),"prepoznaj-uu","concept",{type:"similarity",variant:"rotated"}),
    P(C("8-6g","Odredi stav sličnosti.","AB:DE=AC:DF=2:3 i ∠A=∠D",["UU","SUS","SSS"],"SUS","Jednak je ugao između datih stranica.","Dve proporcionalne stranice i zahvaćen ugao daju SUS.","medium","Stavovi sličnosti"),"prepoznaj-sus","method",{type:"similarity",variant:"mirrored"}),
    P(C("8-6h","Odredi stav sličnosti.","3:6=4:8=5:10",["UU","SUS","SSS"],"SSS","Date su tri jednake razmere stranica.","Trouglovi su slični po SSS.","medium","Stavovi sličnosti"),"prepoznaj-sss","method"),
    P(C("8-6i","Da li podaci moraju dati slične trouglove?","Dve stranice su proporcionalne i jedan nezahvaćen ugao je jednak.",["Da, po SUS.","Da, po SSS.","Ne mora da znači."],"Ne mora da znači.","Za SUS jednak mora biti zahvaćeni ugao.","Podaci nisu dovoljni za nijedan stav sličnosti.","advanced","Nedovoljni podaci"),"nedovoljni-podaci","concept",{type:"similarity",variant:"rotated"}),
    P(C("8-6j","Koji stav koristiš?","Dva pravougla trougla imaju još po jedan jednak oštar ugao.",["UU","SUS","SSS"],"UU","Pravi uglovi su jednaki, a jednak je i još jedan ugao.","Dva jednaka ugla daju UU.","basic","Stavovi sličnosti"),"pravougli-trouglovi","concept"),
    P(C("8-6k","Pronađi grešku u dokazu.","AB:DE=AC:DF, pa su trouglovi slični po SUS.",["Nema greške.","Nedostaje jednakost zahvaćenih uglova.","Potrebna je samo treća stranica."],"Nedostaje jednakost zahvaćenih uglova.","SUS ima i uslov o uglu.","Dve razmere same nisu dovoljne; zahvaćeni uglovi moraju biti jednaki.","advanced","Stavovi sličnosti"),"pronadji-gresku-u-dokazu","rule"),
  ],
  "primene-slicnosti":[
    P(I("8-7f","Odredi visinu drveta.","Štap 1,5 m baca senku 2 m; senka drveta je 10 m.","7,5","Postavi odnos visina i senki.","1,5:2=h:10, pa je h=7,5 m.","basic","Senke"),"senka-sa-crtezom","diagram",{type:"shadow",objectLabel:"štap",objectHeight:"1,5 m",objectShadow:"2 m",targetShadow:"10 m",targetLabel:"h"}),
    P(I("8-7g","Odredi širinu reke EF.","△ABC∼△DEF, AB=3 m, DE=12 m, BC=5 m, EF=x","20","Upari AB sa DE, a BC sa EF.","3:12=5:x, pa je x=20 m.","medium","Indirektno merenje"),"nedostupno-rastojanje","method",{type:"similarity",variant:"rotated"}),
    P(I("8-7h","Odredi dužinu na planu u centimetrima.","Stvarna dužina je 24 m, razmera 1:600.","4","Pretvori metre u centimetre.","24 m=2400 cm; 2400:600=4 cm.","medium","Razmera plana"),"stvarno-u-plan","method"),
    P(I("8-7i","Odredi stvarnu visinu modela u metrima.","Model je visok 18 cm u razmeri 1:50.","9","Pomnoži sa 50, zatim pretvori centimetre u metre.","18·50=900 cm=9 m.","medium","Modeli i razmera"),"model-u-stvarnost","method"),
    P(C("8-7j","Pronađi grešku.","Na planu 5 cm, razmera 1:200, pa je stvarna dužina 1000 m.",["Nema greške.","1000 cm je 10 m.","Stvarna dužina je 2,5 m."],"1000 cm je 10 m.","Pazi na pretvaranje centimetara u metre.","5·200=1000 cm=10 m.","advanced","Razmera plana"),"pronadji-gresku-u-jedinicama","rule"),
    P(I("8-7k","Odredi visinu zgrade.","Osoba visoka 1,8 m ima senku 1,2 m; senka zgrade je 14 m.","21","Odnos visine i senke je isti.","1,8:1,2=h:14; 1,5=h:14, pa je h=21 m.","advanced","Senke"),"senka-vise-koraka","method",{type:"shadow",objectLabel:"osoba",objectHeight:"1,8 m",objectShadow:"1,2 m",targetShadow:"14 m",targetLabel:"h"}),
    P(C("8-7l","Izaberi odgovarajući postupak.","Treba odrediti visinu bandere pomoću njene senke.",["Uporedi visinu i senku poznatog štapa sa senkom bandere.","Saberi obe senke.","Primeni samo Pitagorinu teoremu bez merenja."],"Uporedi visinu i senku poznatog štapa sa senkom bandere.","Sunčevi zraci daju slične pravougle trouglove.","Postavlja se proporcija visina i odgovarajućih senki.","advanced","Izbor postupka"),"izbor-metode","method",{type:"shadow",objectLabel:"štap",objectHeight:"poznato",objectShadow:"s₁",targetShadow:"s₂",targetLabel:"h"}),
  ],
};

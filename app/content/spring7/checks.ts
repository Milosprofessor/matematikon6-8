import type { SpringCheck } from "../spring6/checks";
import { question, type Row } from "../spring6/lesson";
import type { Level } from "../types";
import { spring7Areas } from "./index";

type Entry=[string,Level,...Row];
function exam(id:string,title:string,rows:Entry[]):SpringCheck {
 return {id,areaId:"s7-zavrsnica",title,items:rows.map(([lessonId,level,...row],i)=>({...question(id+"-"+(i+1),title,level,row,i),lessonId}))};
}
export const finals7=[
 exam("s7-polugodiste","Provera drugog polugodišta",[
 ["s7-uglovi","basic","Unutrašnji ugao pravilnog osmougla u stepenima?","135","Nađi spoljašnji.","360°:8=45°. Unutrašnji je 180°−45°=135°."],
 ["s7-monomi","basic","Koji je stepen 5x²y³z²?","7","Saberi izložioce.","2+3+2=7."],
 ["s7-proizvod","medium","Razvij (x−3)(x+7).","x^2+4x-21","Popuni četiri proizvoda.","x²+7x−3x−21=x²+4x−21."],
 ["s7-luk","medium","Točak poluprečnika 15 cm napravi pola okreta. Tačan put u cm bez klizanja?","15π","Uzmi pola obima.","Obim je 30π cm, polovina je 15π cm."],
 ["s7-podaci","medium","Podaci su 6, 12, 3, 6, 13. Za koliko je prosek veći od medijane?","2","Izračunaj oba pokazatelja.","Zbir je 40, prosek 8. Treći u nizu 3, 6, 6, 12, 13 je 6. Razlika je 2."],
 ["s7-rotacija", "basic", "Tačka (0,7) rotira se za 90° oko početka suprotno kazaljci. Apscisa slike?", "-7", "Pozitivna osa y prelazi u negativnu osu x.", "Slika je (−7,0), pa je apscisa −7."],
 ["s7-cinioci", "medium", "Zapiši x²−18x+81 kao kvadrat binoma.", "(x-9)^2", "Ispitaj krajnje kvadrate i srednji član.", "81=9² i −18x=−2·9x. Zato je izraz (x−9)²."],
 ["s7-kruznica", "medium", "Periferijski ugao nad manjim lukom je 52°. Koliko stepeni ima veći luk?", "256", "Odredi meru manjeg luka.", "Manji luk meri 104°. Veći meri 360°−104°=256°."],
 ["s7-isecci", "advanced", "U polukrug poluprečnika 8 cm ucrtana su dva polukruga prečnika 8 cm bez preklapanja. Tačna površina između njih u cm²?", "16π", "Manji polukrug ima poluprečnik 4 cm.", "Veliki ima 32π cm². Svaki manji ima 8π cm², pa preostaje 32π−16π=16π cm²."],
 ["s7-centri","advanced","Težište deli AM na delove čiji je zbir 30 cm. Za koliko cm je duži deo veći od kraćeg?","10","Podeli dužinu u odnosu 2 prema 1.","Delovi su 20 i 10 cm. Razlika je 10 cm."]]),
 exam("s7-godisnja","Završna provera sedmog razreda",[
 ["kvadratni-koren","basic","Izračunaj √196−√36.","8","Odredi nenegativne korene.","14−6=8."],
 ["funkcija-ykx","basic","Prava y=kx prolazi kroz (4,−12). Odredi k.","-3","Uvrsti obe koordinate.","−12=4k, pa je k=−3."],
 ["standardni-zapis","medium","Koliko puta je 6·10⁵ veće od 3·10²?","2000","Podeli koeficijente i odgovarajuće stepene.","6:3=2, a 10⁵:10²=10³. Proizvod je 2000."],
 ["s7-jednacine","medium","Reši (x−4)²−x²=40.","-3","Razvij kvadrat razlike.","−8x+16=40 daje −8x=24 i x=−3."],
 ["s7-podaci", "basic", "Koji je mod merenja 8, 9, 11, 8, 12, 10?", "8", "Napravi tabelu učestalosti.", "Broj 8 se javlja dvaput, svaki drugi po jednom."],
 ["produzena-proporcija", "medium", "Uglovi trougla su u odnosu 2 prema 3 prema 7. Najveći ugao u stepenima?", "105", "Zbir uglova trougla odgovara zbiru delova.", "Ukupno je 12 delova. Jedan ima 15°, najveći 7·15°=105°."],
 ["s7-uglovi", "medium", "Iz jednog temena konveksnog mnogougla polazi 7 dijagonala. Koliko ukupno ima dijagonala?", "35", "Dodaj teme i oba suseda.", "Mnogougao ima 10 temena. Deset puta po 7 krajeva daje 70, a svaka dijagonala ima dva kraja."],
 ["s7-rotacija", "advanced", "Rotacijom za 180° oko tačke (−2,3) tačka (1,8) prelazi u B. Koliki je zbir koordinata tačke B?", "-7", "Centar je sredina duži koja spaja tačku i njenu sliku.", "Od centra do polazne tačke pomeraj je (3,5). Suprotni pomeraj od centra daje B(−5,−2). Zbir je −7."],
 ["s7-povrsina","advanced","Pravougaonik ima dijagonalu 17 cm i jednu stranicu 8 cm. Površina u cm²?","120","Počni od pravouglog trougla.","a²+b²=c². Zamenom 8²+b²=17², zatim 64+b²=289 i b²=225. Pozitivna dužina je 15 cm, a površina 8·15=120 cm²."],
 ["s7-isecci","advanced","Prsten ima poluprečnike 10 i 6 cm. Kolika je površina njegove četvrtine u cm²? Tačno.","16π","Odredi razliku površina pre deljenja.","(100−36)π:4=16π cm²."]]),
 exam("s7-izazov","Napredna problemska provera",[
 ["s7-rotacija","basic","Rotacijom kvadrata oko centra za 90° teme A prelazi u susedno teme. Koliko takvih okreta ukupno treba za prvi povratak u A?","4","Prati jedan pun obrt.","360°:90°=4."],
 ["s7-uglovi","medium","Pravilni mnogougao ima tri puta veći unutrašnji nego spoljašnji ugao. Broj temena?","8","Njihov zbir je 180°.","4β=180°, β=45°. Broj temena je 360:45=8."],
 ["s7-identiteti","advanced","Zbir dva broja je 18, njihova razlika 4. Kolika je razlika njihovih kvadrata istim redom?","72","Ne moraš nalaziti pojedinačne brojeve.","(a−b)(a+b)=4·18=72."],
 ["s7-podaci","advanced","Prosek osam merenja je 14. Izostavljena dva rezultata imaju prosek 11. Koliki je prosek šest preostalih?","15","Vrati oba zbira.","8·14−2·11=90. Podeli 90 sa 6 i dobijaš 15."],
 ["s7-kruznica","advanced","Dva luka sa istim krajevima imaju mere u odnosu 3 prema 5. Koliko stepeni ima periferijski ugao nad manjim?","67,5","Najpre podeli pun ugao.","Manji luk je 360°·3:8=135°. Periferijski je 67,5°."],
 ["s7-monomi", "basic", "Koliki je koeficijent monoma (−3x²)·(−4x)?", "12", "Pomnoži brojeve sa znacima.", "Dva negativna broja daju pozitivan proizvod 12, pa je monom 12x³."],
 ["s7-luk", "medium", "Dva spojena luka imaju dužine 5π cm i 9π cm. Koliki je prečnik kružnice čiji je obim jednak zbiru tih dužina, u cm?", "14", "Zbir izjednači sa πd.", "πd=14π. Deljenje sa π daje d=14 cm."],
 ["s7-proizvod", "medium", "U proizvodu (2x+5)(x−k) koeficijent uz x je −9. Odredi k.", "7", "Saberi dva linearna parcijalna proizvoda.", "Koeficijent je 5−2k. Iz 5−2k=−9 sledi k=7."],
 ["s7-centri", "advanced", "Teme A je 14 cm od težišta T. Sredina naspramne stranice je M. Za koliko cm duž AM premašuje TM?", "14", "Nađi oba dela, pa oduzmi.", "AT:TM=2:1, pa TM=7 cm i AM=21 cm. Razlika je 14 cm, upravo AT."],
 ["s7-procena","advanced","Kvadrat ima stranicu između 4,9 i 5,1 cm uključivo. Koja je najveća moguća apsolutna greška procene P≈25 cm², u cm²?","1,01","Izračunaj oba kraja intervala površina.","P je od 24,01 do 26,01 cm². Veća od grešaka 0,99 i 1,01 je 1,01 cm²."]])
];
const areaPractice:Record<string,Row>={
 "s7-geometrija":["U jednakokrakom trouglu osnovice 18 cm težišna duž iz vrha duga je 12 cm. Površina u cm²?","108","Upotrebi podudarnost dve polovine trougla.","Po SSS dve polovine su podudarne. Jednaki uglovi uz sredinu osnovice su pravi, pa je ta duž visina. P=18·12:2=108 cm²."],
 "s7-algebra":["Reši (x+4)²−x(x+3)=36.","4","Obe strane sredi pre prebacivanja članova.","x²+8x+16−x²−3x=36 daje 5x+16=36, pa x=4."],
 "s7-krug":["Prečnik pice je 28 cm. Koliki je tačan obim četvrtine pice u cm?","28+7π","Obiđi luk i oba ravna reza.","Četvrtina obima je 28π:4=7π cm. Dva reza imaju po 14 cm. Zbir je 28+7π cm."],
 "s7-statistika":["Ocena 2 javlja se jednom, ocena 3 triput i ocena 5 dvaput. Medijana?","3","Odredi treću i četvrtu ocenu u uređenom nizu.","Niz je 2, 3, 3, 3, 5, 5. Obe srednje ocene su 3."],
 "s7-zavrsnica":["Četiri jednaka kružna podmetača poluprečnika 3 cm izrezana su iz ploče. Kolika im je ukupna površina u cm²? Tačno.","36π","Računaj površinu jednog celog kruga.","Jedan ima 9π cm², a četiri 4·9π=36π cm²."]
};
export const checks7=new Map<string,SpringCheck>();
for(const area of spring7Areas){
 const items=area.lessons.flatMap(l=>l.areaQuestions!.map(t=>({...t,lessonId:l.id})));
 for(const l of area.lessons){
  const id=l.id+"-mini";
  checks7.set(id,{id,areaId:area.id,lessonId:l.id,title:"Mini-provera • "+l.title,items:l.mini!.map(t=>({...t,lessonId:l.id}))});
 }
 items.splice(1,0,{...question(area.id+"-primena",area.title,"medium",areaPractice[area.id],1),lessonId:area.lessons.at(-1)!.id});
 checks7.set(area.id,{id:area.id,title:"Provera oblasti • "+area.title,areaId:area.id,items});
}
for(const check of finals7)checks7.set(check.id,check);

import { question, type Row } from "../spring6/lesson";
import type { Level } from "../types";

type Entry = [lesson: string, level: Level, ...fields: Row];

const polugodiste: Entry[] = [
  ["s8-funkcija","basic","Koja je ordinata kada je x=−3 i y=1−2x?","7","Uvrsti −3 sa zagradama.","y=1−2·(−3)=7."],
  ["s8-prizma","basic","Koliko temena zajedno imaju dve osnove trostrane prizme?","6","Osnove su podudarni trouglovi.","Na svakoj su tri temena, ukupno šest."],
  ["s8-piramida","medium","Pravilna četvorostrana piramida ima B=25 cm² i s=6 cm. Omotač u cm²?","60","Iz površine izvuci stranicu.","a=5 cm. Četiri trougla daju M=4·5·6:2=60 cm²."],
  ["s8-znak","medium","Nula y=7−0,5x je koji broj?","14","Traži y=0.","0,5x=7 i x=14."],
  ["s8-sistemi","medium","Reši 2x+y=14 i x−y=1. Upiši par.","(5;4)","Saberi uslove.","3x=15, x=5 i y=4. Obe leve strane daju 14 i 1."],
  ["s8-valjak","medium","Valjak r=3 cm i H=7 cm ima ukupnu površinu u cm², tačno?","60π","Saberi omotač i dve osnove.","P=2πr²+2πrH=18π+42π=60π cm²."],
  ["s8-kupa","advanced","Kupa ima r=8 cm i s=17 cm. Zapremina u cm³, tačno?","320π","Odredi H iz osnog trougla.","a²+b²=c². 64+H²=289 daje H²=225, H=15 cm. V=64π·15:3=320π cm³."],
  ["s8-lopta","advanced","Ravan preseca loptu po krugu površine 25π cm². R=13 cm. Udaljenost ravni u cm?","12","Spoji centar lopte i tačku na obodu preseka.","a²+b²=c². Katete su 5 i d. Iz 25+d²=169 sledi d²=144 i d=12 cm."]
];

const godisnja: Entry[] = [
  ["talesova-teorema","basic","MN je paralelno sa BC, M je na AB i N na AC. Ako je AM polovina AB i AC=18 cm, koliko je AN u cm?","9","Uporedi delove istih krakova.","Talesova teorema daje AN:AC=AM:AB=1:2. AN=9 cm."],
  ["ortogonalna-projekcija","basic","Projekcija duži paralelne ravni ima koju dužinu?",["Istu kao duž","Uvek nula","Polovinu"],"Posmatraj normalno spuštanje oba kraja.","Oba kraja pomere se za isti vektor do ravni i dužina ostaje ista."],
  ["svodjenje-jednacina","medium","Reši 3(x−2)=2x+9.","15","Razvij zagradu.","3x−6=2x+9 daje x=15. Provera: obe strane su 39."],
  ["slozene-nejednacine","medium","Najmanji ceo broj koji zadovoljava 5−3x<−8?","5","Pri deljenju sa −3 promeni smer.","−3x<−13 daje x>13/3. Najmanji ceo broj je 5."],
  ["s8-zapremina","medium","Piramida nad osnovom od 45 cm² ima V=150 cm³. Visina u cm?","10","Pomnoži zapreminu sa tri.","H=3V:B=450:45=10 cm."],
  ["s8-model","medium","Dva sendviča i sok koštaju 570 dinara, jedan sendvič i sok 335. Cena soka u dinarima?","100","Oduzmi račune.","2x+y=570 i x+y=335 daju x=235 i y=100. Oba računa odgovaraju cenama."],
  ["s8-funkcija","advanced","Prava prolazi kroz (−2; 1) i (4; 10). Ordinata za x=8?","16","Nađi promenu po jedinici.","k=9:6=1,5. Od x=4 do 8 priliv je 4·1,5=6. Ordinata je 16."],
  ["s8-tela","advanced","Kocka ivice 8 cm uroni se potpuno u pravougaonu posudu unutrašnje osnove 16 cm puta 16 cm. Nivo poraste koliko cm?","2","Istisnuta zapremina jednaka je zapremini kocke.","V=512 cm³, B=256 cm². Visina sloja je 512:256=2 cm."]
];

const problemska: Entry[] = [
  ["s8-znak","basic","Koji podatak odmah otkriva da cena opada sa porastom x?",["Negativan nagib","Pozitivan odsečak","Velika početna cena"],"Prati promenu po jedinici.","Kod linearne zavisnosti znak k određuje smer promene."],
  ["s8-tela","medium","Posuda ima 4,2 l tečnosti. Koliko zatvorenih boca od 350 ml može da se napuni do vrha?","12","Prevedi litre u ml.","4200:350=12. Nema ostatka."],
  ["s8-prizma","medium","Kutija unutrašnjih ivica 2 dm, 3 dm i 6 dm prima najduži tanak štap od koliko dm?","7","Koristi dve uzastopne primene Pitagorine teoreme.","a²+b²=c². Dijagonala dna ima d²=4+9=13. Prostorna ima D²=13+36=49, pa D=7 dm."],
  ["s8-sistemi","advanced","Za koji t prave x+2y=7 i 3x+6y=t imaju više od jednog preseka?","21","Uporedi trostruku prvu jednačinu i drugu.","Leve su proporcionalne. Poklapanje zahteva t=3·7=21."],
  ["s8-kupa","advanced","Kupa je upisana u valjak r=3 cm i H=9 cm i sa njim deli osnovu i visinu. Koliko cm³ je izvan kupe a unutar valjka, tačno?","54π","Nađi razliku zapremina.","Valjak ima 81π cm³, kupa trećinu, 27π cm³. Ostaje 54π cm³."],
  ["s8-model","advanced","Učenička i odrasla karta zajedno koštaju 750 dinara, a četiri učeničke i tri odrasle 2450. Koliko koštaju dve odrasle karte?","1100","Oduzmi tri puta prvi račun od drugog.","Za cene x i y, x+y=750 i 4x+3y=2450 daju x=200 i y=550. Provera: 800+1650=2450. Dve odrasle su 1100 dinara."],
  ["s8-lopta","advanced","Tri jednake lopte ukupno imaju površinu 108π cm². Kolika je zapremina jedne u cm³, tačno?","36π","Nađi površinu jedne lopte.","Jedna ima 36π cm², pa 4R²=36 i R=3 cm. V=4π·27:3=36π cm³."],
  ["s8-godina","advanced","Dva slična rezervoara imaju površine u odnosu 4 prema 9. Manji prima 80 l. Koliko litara prima veći?","270","Pređi sa odnosa površina na odnos dužina.","Faktor dužina je 3:2. Faktor zapremina je 27:8. Veći prima 80·27:8=270 l."]
];

export const finals8 = [
  {id:'s8-polugodiste',title:"Provera drugog polugodišta",rows:polugodiste},
  {id:'s8-godisnja',title:"Završna provera osmog razreda",rows:godisnja},
  {id:'s8-problemska',title:"Napredna problemska provera",rows:problemska}
].map(({id,title,rows})=>({id,title,areaId:'s8-zavrsnica',items:rows.map(([lessonId,level,...row],i)=>({...question(id+'-'+(i+1),title,level,row,i),lessonId}))}));

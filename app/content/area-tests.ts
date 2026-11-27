import { checks8 } from "./spring8/checks";
import { checks7 } from "./spring7/checks";
import { springChecks } from "./spring6/checks";
import { C, I, GradeId, Task } from "./types";
import { octoberAreaTests } from "./october-tests";
import {grades} from './index';
import {lessonWorkTasks} from './october-work';
import {tasksForLesson} from './enhancements';
import {taskWithVisual} from './task-visuals';

export type AreaTestTask = Task & { lessonId:string };
const L=(task:Task,lessonId:string):AreaTestTask=>({...task,lessonId});

export const areaTests: Record<GradeId,Record<string,AreaTestTask[]>> = {
  6:{"celi-brojevi":[
    L(I("t6-1","Odredi suprotan broj.","−18","18","Promeni znak.","Suprotan broj broju −18 je 18.","basic","Skup celih brojeva"),"skup-celih-brojeva"),
    L(I("t6-2","Izračunaj.","|−27|","27","Apsolutna vrednost je rastojanje od nule.","|−27|=27.","basic","Apsolutna vrednost"),"apsolutna-vrednost"),
    L(C("t6-3","Uporedi.","−14 __ −9",["<",">","="],"<","−14 je levo od −9.","−14<−9.","basic","Poređenje"),"uporedjivanje"),
    L(I("t6-4","Izračunaj.","−16+23","7","Znaci su različiti.","−16+23=23−16=7 jer pozitivan sabirak ima veću apsolutnu vrednost.","basic","Sabiranje"),"sabiranje"),
    L(I("t6-5","Izračunaj.","−8−(−13)","5","Suprotan broj broju −13 je 13.","−8−(−13)=−8+13=5.","basic","Oduzimanje"),"oduzimanje"),
    L(I("t6-6","Odredi rastojanje.","A(−11), B(4)","15","Koristi apsolutnu vrednost razlike.","|−11−4|=|−15|=15.","basic","Rastojanje"),"rastojanje"),
    L(I("t6-7","Izračunaj.","−12+7−(−6)","1","Prvo ukloni zagradu.","−12+7+6=−5+6=1.","medium","Sabiranje i oduzimanje"),"sabiranje-oduzimanje"),
    L(I("t6-8","Izračunaj.","(−9)·(−8)","72","Dva negativna činioca daju pozitivan proizvod.","(−9)·(−8)=9·8=72.","basic","Množenje"),"mnozenje"),
    L(I("t6-9","Izračunaj.","84:(−7)","-12","Različiti znaci daju minus.","84:7=12, pa je rezultat −12.","medium","Deljenje"),"deljenje"),
    L(I("t6-10","Izračunaj.","18:(−3)−2·(−5)","4","Deljenje i množenje imaju prednost.","−6−(−10)=4.","advanced","Brojevni izrazi"),"brojevni-izrazi")
  ],...octoberAreaTests[6]},
  7:{"realni-brojevi":[
    L(C("t7-1","Izaberi tačan zapis.","[[frac:9|20]]",["0,45","0,9","0,18"],"0,45","Proširi do imenioca 100.","9/20=45/100=0,45.","basic","Decimalni zapis"),"decimalni-zapis"),
    L(C("t7-2","Izaberi tačan razlomak.","0,32",["[[frac:8|25]]","[[frac:3|20]]","[[frac:16|25]]"],"[[frac:8|25]]","Zapiši 32/100 i skrati.","32/100=8/25.","medium","Decimalni u razlomak"),"decimalni-u-razlomak"),
    L(I("t7-3","Izračunaj.","(−1,6)^2","2,56","Kvadrat je pozitivan.","1,6·1,6=2,56.","medium","Kvadrat racionalnog broja"),"kvadrat-racionalnog"),
    L(C("t7-4","Izaberi iracionalan broj.","",["−2,5","π","[[frac:11|3]]"],"π","Konačan decimalni zapis i razlomak su racionalni.","Broj π pripada iracionalnim brojevima.","basic","Realni brojevi"),"realni-brojevi"),
    L(C("t7-5","Odredi položaj.","−π",["Između −4 i −3","Između −3 i −2","Između 3 i 4"],"Između −4 i −3","Koristi π≈3,14.","Važi −4<−π<−3.","medium","Brojna prava"),"brojna-prava"),
    L(C("t7-6","Izaberi tačan interval.","|x|<6",["(−6,6)","[−6,6]","(0,6)"],"(−6,6)","Rastojanje od nule je manje od 6.","−6<x<6.","medium","Intervali"),"intervali"),
    L(I("t7-7","Odredi.","[[sqrt:225]]","15","Koji pozitivan broj na kvadrat daje 225?","15²=225.","basic","Kvadratni koren"),"kvadratni-koren"),
    L(C("t7-8","Izaberi tačan odgovor.","[[sqrt:[[frac:64|121]]]]",["[[frac:8|11]]","[[frac:64|11]]","[[frac:4|11]]"],"[[frac:8|11]]","Korenuj brojilac i imenilac.","√64/√121=8/11.","medium","Određivanje korena"),"odredjivanje-korena"),
    L(C("t7-9","Pojednostavi.","[[sqrt:75]]",["5√3","15√3","25√3"],"5√3","75=25·3.","√75=5√3.","advanced","Svojstva korena"),"svojstva-korena"),
    L(C("t7-10","Koja jednakost nije tačna?","",["√(16·9)=√16·√9","√(49/4)=√49/√4","√(4+9)=√4+√9"],"√(4+9)=√4+√9","Koren zbira se ne rastavlja.","√13 nije 5.","advanced","Svojstva korena"),"svojstva-korena")
  ],...octoberAreaTests[7]},
  8:{"slicnost":[
    L(C("t8-1","Odredi razmeru.","35 cm : 1,4 m",["1:4","4:1","1:5"],"1:4","1,4 m=140 cm.","35:140=1:4.","basic","Razmera duži"),"razmera-duzi"),
    L(C("t8-2","Koji par je nesamerljiv?","",["4 cm i 10 cm","a i 3a","a i a√5"],"a i a√5","Traži iracionalnu razmeru.","Razmera 1/√5 je iracionalna.","medium","Samerljive duži"),"samerljive-duzi"),
    L(I("t8-3","Odredi x.","6:15=x:25","10","Koristi unakrsni proizvod.","15x=150, pa je x=10.","medium","Proporcionalnost"),"proporcionalnost"),
    L(I("t8-4","Odredi AN.","MN∥BC, AM=6, AB=9, AC=15","10","AM/AB=AN/AC.","6/9=AN/15, pa je AN=10.","medium","Talesova teorema"),"talesova-teorema"),
    L(C("t8-5","Da li su trouglovi slični?","Stranice: 4, 5, 6 i 8, 10, 12",["Da","Ne","Nema dovoljno podataka"],"Da","Uporedi sve tri stranice.","Sve odgovarajuće stranice su u razmeri 1:2.","basic","Slični trouglovi"),"slicni-trouglovi"),
    L(I("t8-6","Odredi x.","△ABC∼△DEF, AB=5, DE=15, BC=7, EF=x","21","Koeficijent je 3.","x=7·3=21.","medium","Slični trouglovi"),"slicni-trouglovi"),
    L(C("t8-7","Koji stav primenjujemo?","Dve proporcionalne stranice i jednak zahvaćeni ugao.",["UU","SUS","SSS"],"SUS","Prati date elemente.","Stav je SUS.","basic","Stavovi sličnosti"),"stavovi-slicnosti"),
    L(C("t8-8","Da li je dovoljan stav SSS?","Stranice: 3, 6, 8 i 6, 12, 16",["Da","Ne","Samo za pravougle trouglove"],"Da","Proveri tri razmere.","3/6=6/12=8/16=1/2.","advanced","Stavovi sličnosti"),"stavovi-slicnosti"),
    L(I("t8-9","Odredi visinu drveta.","Štap 1,5 m, senka 2 m; senka drveta 10 m","7,5","Visina/senka je ista.","1,5/2=h/10, pa je h=7,5 m.","medium","Primene sličnosti",{answerUnit:"m"}),"primene-slicnosti"),
    L(I("t8-10","Odredi stvarnu dužinu u metrima.","Razmera 1:400, na planu 7 cm","28","7·400=2800 cm.","2800 cm=28 m.","advanced","Primene sličnosti"),"primene-slicnosti")
  ],...octoberAreaTests[8]}
};

export function getAreaTest(gradeId:GradeId,areaId:string,unlocked?:ReadonlySet<string>):AreaTestTask[]{
 const spring = gradeId === 6 ? springChecks.get(areaId) : gradeId === 7 ? checks7.get(areaId) : checks8.get(areaId);
 if (spring) return spring.items;
 const area=grades.find(grade=>grade.id===gradeId)?.areas.find(area=>area.id===areaId);if(!area)return [];
 const lessons=area.lessons.filter(l=>!unlocked||unlocked.has(l.id));
 const lessonIds=new Set(lessons.map(lesson=>lesson.id));
 let test=(areaTests[gradeId]?.[areaId]??[]).filter(task=>lessonIds.has(task.lessonId));
 // Include the later lessons of continuing areas. Select after applying the
 // student's progress so the first eligible lesson also has a usable check.
 if(!test.length||areaId==='tacka-prava-ravan'||area.lessons.some(l=>l.month==='november'||l.month==='december')){
  const chosen:AreaTestTask[]=[];
  const levels=["basic","medium","advanced"] as const;
  const pools=lessons.map(lesson=>{
   const authored=test.filter(t=>t.lessonId===lesson.id);
   const work=lessonWorkTasks(lesson.id,tasksForLesson(lesson.id,lesson.tasks));
   return [...authored,...work.map(task=>({...task,lessonId:lesson.id}))];
  });
  for(let round=0;round<10&&chosen.length<10;round++){
   for(const [index,pool] of pools.entries()){
    const remaining=pool.filter(task=>!chosen.some(t=>t.id===task.id));
    const next=remaining.find(t=>t.level===levels[(index+round)%3])??remaining[0];
    if(next)chosen.push(next);
    if(chosen.length===10)break;
   }
  }
  test=chosen;
 }
 return test.map(task=>({...taskWithVisual(task.lessonId,task),lessonId:task.lessonId}));
}

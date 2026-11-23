import type {Area,GradeId,Lesson,Month} from './types';
import {semester7} from './semester7';
import {semester6} from './semester6';
import {grade6PlanAdditions,grade7PlanAdditions} from './plan-additions';

/** The connected 2026/27 monthly plans define the visible scope. Original
 * later lessons remain in their source modules and saved progress is untouched. */
export function plannedAreas(grade:GradeId,original:Area[]):Area[]{
 const byId=new Map(original.flatMap(a=>a.lessons.map(l=>[l.id,l] as const)));
 for(const lesson of grade===6?[...grade6PlanAdditions,...semester6]:grade===7?[...grade7PlanAdditions,...semester7]:[])byId.set(lesson.id,lesson);
 const make=(areaId:string,ids:string[],month:Month,overrides:Partial<Area>={}):Area=>{
  const base=original.find(a=>a.id===areaId);
  return {...base,id:areaId,title:base?.title??'Direktna proporcionalnost',short:base?.short??'Odnosi veličina, proporcije i njihova primena.',...overrides,month,
   lessons:ids.map((id,index)=>{const lesson=byId.get(id);if(!lesson)throw new Error('Nedostaje planirana lekcija: '+id);return {...lesson,month,prerequisites:index?[ids[index-1]]:[],...(id==='poliedar'?{rules:lesson.rules.map(r=>r.includes('V')&&r.includes('2')?'Za konveksni poliedar važi Ojlerova formula V−E+F=2.':r)}:{})};})};
 };
 const extend=(area:Area,month:Month,ids:string[],short:string):Area=>{
  const lessons=[...area.lessons];
  for(const id of ids){
   const lesson=byId.get(id);
   if(!lesson)throw new Error('Nedostaje lekcija: '+id);
   lessons.push({...lesson,month,prerequisites:lessons.length?[lessons[lessons.length-1].id]:[]});
  }
  return {...area,lessons,monthShort:{...area.monthShort,[month]:short}};
 };
 if(grade===6){
  const integers=make('celi-brojevi',['skup-celih-brojeva','apsolutna-vrednost','uporedjivanje','sabiranje','oduzimanje','rastojanje','sabiranje-oduzimanje','mnozenje','deljenje','mnozenje-deljenje','brojevni-izrazi'],'september');
  integers.lessons=integers.lessons.map(l=>({...l,month:['mnozenje-deljenje','brojevni-izrazi'].includes(l.id)?'october':'september'}));
  integers.monthShort={september:'Celi brojevi, sabiranje, oduzimanje, množenje i početak deljenja.',october:'Množenje, deljenje i brojevni izrazi.'};
  integers.monthOrder={september:1,october:1};
  return [make('obnavljanje-5',['kratko-obnavljanje-5'],'september'),integers,
   make('trougao',['trougao-vrste','zbir-uglova-trougla','uglovi-transverzala','uglovi-na-transverzali','odnos-stranica-uglova','nejednakost-trougla'],'october',{monthOrder:{october:2}}),
   extend(extend(make('racionalni-brojevi',['skup-racionalnih-brojeva','apsolutna-vrednost-racionalnog'],'october',{title:'Racionalni brojevi',short:'Razlomljene vrednosti sa oba znaka i njihovo rastojanje od nule.'}),'november',['q-zapisi','q-poredak','q-zbir-razlika','q-proizvod'],'Ekvivalentni zapisi, poredak, zbir, razlika i proizvod.'),'december',['q-deljenje-izrazi','q-jednacine','q-nejednacine'],'Deljenje, izrazi, jednačine i nejednačine u skupu Q.')];
 }
 if(grade===7){
  const real=make('realni-brojevi',['decimalni-u-razlomak','decimalni-zapis','kvadrat-racionalnog','kvadrati-brojeva','realni-brojevi','brojna-prava','intervali','kvadratni-koren','odredjivanje-korena','svojstva-korena','jednacine-kvadrat'],'september');
  real.lessons=real.lessons.map(l=>({...l,month:l.id==='jednacine-kvadrat'?'october':'september'}));
  real.monthShort={september:'Racionalni i realni brojevi, kvadrat i kvadratni koren.',october:'Jednačine sa kvadratom nepoznate.'};
  return [make('obnavljanje-6',['kratko-obnavljanje-6'],'september'),real,
   make('direktna-proporcionalnost',['direktna-proporcionalnost','funkcija-ykx','proporcije','produzena-proporcija','primena-produzene-proporcije'],'october'),
   extend(make('pitagorina-teorema',['pitagorina-teorema','nepoznata-stranica-pravougli','pitagora-pravougaonik-kvadrat','pitagora-jednakokraki','pitagora-romb','pitagora-trapez'],'october'),'november',['specijalni-pravougli-trouglovi','pitagora-cetvorougao','konstrukcija-iracionalnih-brojeva','pitagora-obrat'],'Posebni trouglovi, konstrukcije i obrat teoreme.'),
   extend(make('stepeni',['pojam-stepena','stepeni-ista-osnova'],'november',{short:'Stepenovanje, pravila računanja i primene.'}),'december',['stepen-proizvoda','standardni-zapis'],'Stepen proizvoda, količnika i stepena, standardni zapis i primene.'),
   make('mnogougao',['dijagonale-mnogougla'],'december',{title:'Mnogougao',short:'Dijagonale iz jednog temena i ukupan broj dijagonala.',assessment:'mini'})];
 }
 return [make('obnavljanje-7',['kratko-obnavljanje-7'],'september'),
  make('slicnost',['razmera-duzi','samerljive-duzi','proporcionalnost','talesova-teorema','slicni-trouglovi','stavovi-slicnosti','primene-slicnosti','slicnost-pravougli'],'september'),
  make('tacka-prava-ravan',['snalazenje-u-prostoru','tacka-prava-ravan-osnove','odnosi-pravih-ravni','dve-ravni','ortogonalnost','ortogonalna-projekcija','poliedar'],'october')];
}

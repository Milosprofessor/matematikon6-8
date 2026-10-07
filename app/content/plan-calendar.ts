import type {Area,GradeId,Lesson,Month} from './types';
import {grade6PlanAdditions,grade7PlanAdditions} from './plan-additions';

/** The connected 2026/27 monthly plans define the visible scope. Original
 * later lessons remain in their source modules and saved progress is untouched. */
export function plannedAreas(grade:GradeId,original:Area[]):Area[]{
 const byId=new Map(original.flatMap(a=>a.lessons.map(l=>[l.id,l] as const)));
 for(const lesson of grade===6?grade6PlanAdditions:grade===7?grade7PlanAdditions:[])byId.set(lesson.id,lesson);
 const make=(areaId:string,ids:string[],month:Month,overrides:Partial<Area>={}):Area=>{
  const base=original.find(a=>a.id===areaId);
  return {...base,id:areaId,title:base?.title??'Direktna proporcionalnost',short:base?.short??'Odnosi veličina, proporcije i njihova primena.',...overrides,month,
   lessons:ids.map((id,index)=>{const lesson=byId.get(id);if(!lesson)throw new Error('Nedostaje planirana lekcija: '+id);return {...lesson,month,prerequisites:index?[ids[index-1]]:[],...(id==='poliedar'?{rules:lesson.rules.map(r=>r.includes('V')&&r.includes('2')?'Za konveksni poliedar važi Ojlerova formula V−E+F=2.':r)}:{})};})};
 };
 if(grade===6){
  const integers=make('celi-brojevi',['skup-celih-brojeva','apsolutna-vrednost','uporedjivanje','sabiranje','oduzimanje','rastojanje','sabiranje-oduzimanje','mnozenje','deljenje','mnozenje-deljenje','brojevni-izrazi'],'september');
  integers.lessons=integers.lessons.map(l=>({...l,month:['mnozenje-deljenje','brojevni-izrazi'].includes(l.id)?'october':'september'}));
  integers.monthShort={september:'Celi brojevi, sabiranje, oduzimanje, množenje i početak deljenja.',october:'Množenje, deljenje i brojevni izrazi.'};
  integers.monthOrder={september:1,october:1};
  return [make('obnavljanje-5',['kratko-obnavljanje-5'],'september'),integers,
   make('trougao',['trougao-vrste','zbir-uglova-trougla','uglovi-transverzala','uglovi-na-transverzali','odnos-stranica-uglova','nejednakost-trougla'],'october',{monthOrder:{october:2}}),
   make('racionalni-brojevi',['skup-racionalnih-brojeva','apsolutna-vrednost-racionalnog'],'october',{title:'Racionalni brojevi',short:'Razlomljene vrednosti sa oba znaka i njihovo rastojanje od nule.'})];
 }
 if(grade===7){
  const real=make('realni-brojevi',['decimalni-u-razlomak','decimalni-zapis','kvadrat-racionalnog','kvadrati-brojeva','realni-brojevi','brojna-prava','intervali','kvadratni-koren','odredjivanje-korena','svojstva-korena','jednacine-kvadrat'],'september');
  real.lessons=real.lessons.map(l=>({...l,month:l.id==='jednacine-kvadrat'?'october':'september'}));
  real.monthShort={september:'Racionalni i realni brojevi, kvadrat i kvadratni koren.',october:'Jednačine sa kvadratom nepoznate.'};
  return [make('obnavljanje-6',['kratko-obnavljanje-6'],'september'),real,
   make('direktna-proporcionalnost',['direktna-proporcionalnost','funkcija-ykx','proporcije','produzena-proporcija','primena-produzene-proporcije'],'october'),
   make('pitagorina-teorema',['pitagorina-teorema','nepoznata-stranica-pravougli','pitagora-pravougaonik-kvadrat','pitagora-jednakokraki','pitagora-romb','pitagora-trapez'],'october')];
 }
 return [make('obnavljanje-7',['kratko-obnavljanje-7'],'september'),
  make('slicnost',['razmera-duzi','samerljive-duzi','proporcionalnost','talesova-teorema','slicni-trouglovi','stavovi-slicnosti','primene-slicnosti','slicnost-pravougli'],'september'),
  make('tacka-prava-ravan',['snalazenje-u-prostoru','tacka-prava-ravan-osnove','odnosi-pravih-ravni','dve-ravni','ortogonalnost','ortogonalna-projekcija','poliedar'],'october')];
}

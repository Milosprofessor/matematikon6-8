import {grades} from './index';
import {lessonVisuals} from './lesson-visuals';
import {learningByLesson} from './learning';

type PointLayout = {
 title:string;
 /** Explicitly selected sentences from the reviewed theory, not generated headings. */
 refs:string;
 f?:number[];
 v?:number[];
 table?:boolean;
 note?:boolean|string;
 definition?:boolean;
 text?:string;
};
const p=(title:string,refs:string,details:Omit<PointLayout,'title'|'refs'>={}):PointLayout=>({title,refs,...details});

/** Each lesson groups one mathematical idea per point and keeps figures beside it. */
export const noteLayouts:Record<string,PointLayout[]>={
 // 6. razred — septembar i oktobar
 'kratko-obnavljanje-5':[
  p('Prirodni brojevi i računanje','i0.1 s0'),
  p('Razlomci sa jednakim imeniocem','i1.0 i1.1',{f:[0],note:true}),
  p('Prave i uglovi','i1.2',{f:[2]}),
  p('Obim pravougaonika i nepoznata veličina','s1 why',{f:[1],v:[0]}),
 ],
 'skup-celih-brojeva':[
  p('Koji brojevi pripadaju skupu Z?','i0',{f:[0],definition:true}),
  p('Koordinata na brojnoj pravoj','i1.0 i1.1 s0'),
  p('Prethodnik i sledbenik','s1',{f:[1]}),
  p('Suprotan broj','why',{f:[2],v:[0],note:true,text:'Suprotan broj dobijaš promenom predznaka. Nenulti suprotni brojevi su sa različitih strana nule, na jednakom rastojanju od nje.'}),
 ],
 'apsolutna-vrednost':[
  p('Rastojanje od nule','i0',{f:[0,1],v:[0],definition:true}),
  p('Uslov |x|=k','i1',{f:[2]}),
  p('Računanje i provera uslova','s0 s1',{note:true}),
 ],
 'uporedjivanje':[
  p('Poredak na brojnoj pravoj','i0.0 i0.1 i1.0',{f:[0],v:[0]}),
  p('Dva negativna broja','i0.2 s0',{note:true}),
  p('Brojevi između dve granice','i1.1 s1',{f:[1]}),
 ],
 'sabiranje':[
  p('Sabiranje kao pomeranje','i0.0',{v:[0]}),
  p('Isti i različiti predznaci','i0.1 i1.0',{note:'Pri računanju prvo proceni znak zbira; u tabeli sabiraj vrednosti iz istog stupca.'}),
  p('Suprotni brojevi i grupisanje','i1.1 i1.2',{f:[0,1]}),
  p('Nepoznati sabirak','s1',{f:[2]}),
 ],
 'oduzimanje':[
  p('Umanjenik, umanjilac i razlika','i0.0',{definition:true}),
  p('Sabiranje suprotnog broja','i0.1 s0',{f:[0,1],note:true}),
  p('Pomeranje i promena stanja','i1',{v:[0]}),
  p('Nepoznati umanjenik ili umanjilac','s1 why',{f:[2,3]}),
 ],
 'rastojanje':[
  p('Dužina između dve tačke','i0 s0',{f:[0],v:[0],definition:true}),
  p('Dva moguća položaja','i1.0 i1.1',{f:[1],note:true}),
  p('Sredina duži','i1.2 s1'),
 ],
 'sabiranje-oduzimanje':[
  p('Zbir brojeva sa predznacima','i0',{f:[0],v:[0],note:true}),
  p('Minus ispred zagrade','i1.0 i1.1 s0',{f:[1,2]}),
  p('Početno stanje i promene','i1.2 s1 why'),
 ],
 'mnozenje':[
  p('Ponovljeno sabiranje i znak proizvoda','i0',{v:[0],table:true,definition:true}),
  p('Nula i broj −1','i1.0 i1.1',{f:[0,1]}),
  p('Više negativnih činilaca','i1.2'),
  p('Zajednički činilac i provera','s1',{f:[2,6],note:true}),
  p('Svojstva množenja','',{f:[3,4,5],text:'Jedinica je neutralni element. Komutativnost znači zamenu mesta činilaca; asocijativnost znači drugačije grupisanje činilaca.'}),
 ],
 'deljenje':[
  p('Veza deljenja i množenja','i0',{f:[0],definition:true,note:true}),
  p('Predznak i nula u deljeniku','i1',{f:[1],table:true}),
  p('Računanje i nepoznati delilac','s0 s1',{f:[2]}),
 ],
 'mnozenje-deljenje':[
  p('Jednak prioritet operacija','i0',{note:true}),
  p('Predznaci, zagrade i delilac','i1',{f:[0,1]}),
  p('Nepoznati početni broj','s1'),
 ],
 'brojevni-izrazi':[
  p('Redosled računanja','i0',{f:[0],note:true}),
  p('Prevođenje teksta u izraz','i1'),
  p('Poređenje i nulti proizvod','s1',{f:[1]}),
 ],
 'trougao-vrste':[
  p('Temena i naspramne stranice','i0',{f:[0],definition:true,note:true}),
  p('Vrste prema stranicama','i1.0 i1.2',{v:[0,1]}),
  p('Vrste prema uglovima','i1.1 s0'),
  p('Obim i nepoznata stranica','s1',{f:[1]}),
 ],
 'zbir-uglova-trougla':[
  p('Zbir unutrašnjih uglova','i0.0 i0.1 why',{f:[0],v:[0]}),
  p('Pravougli trougao','i0.2',{v:[1],note:true}),
  p('Nepoznati ugao','i1 s1',{f:[1]}),
 ],
 'uglovi-transverzala':[
  p('Spoljašnji i susedni unutrašnji ugao','i0.0 s0',{f:[0],v:[0],definition:true}),
  p('Zbir dva nesusedna ugla','i0.1 s1',{f:[1],v:[1]}),
  p('Spoljašnji uglovi kod sva tri temena','i1',{f:[2],note:true}),
 ],
 'uglovi-na-transverzali':[
  p('Transverzala i položaj uglova','i0',{definition:true,note:true}),
  p('Saglasni i naizmenični uglovi','',{f:[0,1],v:[0,1],text:'Ako su presečene prave paralelne, saglasni i naizmenični unutrašnji uglovi su jednaki.'}),
  p('Unutrašnji uglovi sa iste strane','s0',{f:[2],v:[2],text:'Ako su presečene prave paralelne, unutrašnji uglovi sa iste strane transverzale imaju zbir 180°. Proveri paralelnost i položaj para uglova pre izbora veze.'}),
  p('Jedan presek i nalaženje ugla','i1.1 s1'),
 ],
 'odnos-stranica-uglova':[
  p('Naspramni elementi i njihov poredak','i0 s0',{f:[0,1],v:[0],note:true}),
  p('Jednakokraki trougao','i1.0 s1',{f:[2],v:[1]}),
  p('Hipotenuza je najduža stranica','i1.1'),
 ],
 'nejednakost-trougla':[
  p('Kada tri duži grade trougao?','i0 why',{f:[0],v:[0]}),
  p('Dozvoljena treća stranica','i1',{f:[1],v:[1],note:true}),
  p('Izbor dužine i provera krakova','s0 s1'),
 ],
 'skup-racionalnih-brojeva':[
  p('Racionalan broj i skup Q','i0',{f:[0],definition:true,note:true}),
  p('Ekvivalentni zapisi i celi brojevi','why',{f:[1,2]}),
  p('Položaj na brojnoj pravoj','i1 s0',{v:[0]}),
  p('Poređenje, raspon i sredina','s1'),
 ],
 'apsolutna-vrednost-racionalnog':[
  p('Rastojanje racionalnog broja od nule','i0',{f:[0,1],v:[0],definition:true}),
  p('Sve mogućnosti za |x|=k','i1',{f:[2]}),
  p('Poređenje i rastojanje','s0 s1',{note:true}),
 ],
 // 7. razred — bez korena pre nastavne jedinice o korenu
 'kratko-obnavljanje-6':[
  p('Brojna prava i apsolutna vrednost','i0.0',{f:[1],v:[0]}),
  p('Sabiranje i oduzimanje','i0.1 i1.0',{f:[0]}),
  p('Množenje, kvadrat i redosled','i1.1 i1.2 s0'),
  p('Razlomci i provera jednakosti','s1',{f:[2],note:true}),
 ],
 'decimalni-u-razlomak':[
  p('Konačan decimalni zapis','i0 s0',{f:[0],table:true}),
  p('Periodičan decimalni zapis','i1'),
  p('Kratak prikaz poništavanja perioda','example',{note:true}),
  p('Poređenje i obrnut prelaz','s1'),
 ],
 'decimalni-zapis':[
  p('Deljenje i nastanak perioda','i0 s0',{f:[0],table:true}),
  p('Čitanje zapisa i poređenje','i1',{f:[1],note:true}),
  p('Udaljeno decimalno mesto','s1'),
 ],
 'kvadrat-racionalnog':[
  p('Kvadrat i njegov znak','i0',{f:[0,1],definition:true}),
  p('Razlomci i decimalni brojevi','i1.0 i1.1',{f:[2]}),
  p('Osnova, predznak i poređenje','s0 i1.2',{note:true}),
  p('Površina kvadrata','i1.3 s1',{f:[3],v:[0]}),
 ],
 'kvadrati-brojeva':[
  p('Potpun kvadrat','i0',{v:[0],definition:true}),
  p('Brojevi sa zadatim kvadratom','i1',{f:[0,1],note:true}),
  p('Nulti kvadrat i dodatni uslov','s0 s1',{f:[2]}),
 ],
 'realni-brojevi':[
  p('Racionalni i iracionalni brojevi','i0',{table:true,definition:true}),
  p('Skup realnih brojeva','i1.0 s1',{f:[0],v:[0]}),
  p('Broj π i približna vrednost','i1.1',{f:[1],note:true}),
 ],
 'brojna-prava':[
  p('Koordinata i jedinična duž','i0 s0',{f:[2],definition:true}),
  p('Poredak i suprotni brojevi','i1.0 i1.1'),
  p('Približan položaj broja π','i1.2',{f:[0,1],v:[0],note:true}),
  p('Poređenje i provera uslova','s1'),
 ],
 'intervali':[
  p('Granice i pripadnost intervalu','i0 s0',{f:[0,1],v:[0],definition:true}),
  p('Rastojanje od centra','i1.0 i1.1',{f:[2],note:true}),
  p('Dva istovremena uslova','i1.2 s1'),
 ],
 'kvadratni-koren':[
  p('Jedini nenegativan koren','i0',{f:[0],definition:true}),
  p('Koren i rešenja jednačine','i1.0 i1.1',{note:true}),
  p('Kvadrat, apsolutna vrednost i dužina','i1.2',{f:[1,2],v:[0]}),
  p('Provera i obrnut zadatak','s0 s1'),
 ],
 'odredjivanje-korena':[
  p('Tačan koren i provera','i0',{f:[0],v:[0]}),
  p('Granice i poređenje korena','i1',{f:[1]}),
  p('Zaokruživanje na kraju','s1',{note:true}),
 ],
 'svojstva-korena':[
  p('Proizvod, količnik i uslovi','i0',{table:true}),
  p('Izdvajanje kvadratnog činioca','i1.0 s0',{f:[0]}),
  p('Kvadrat, zbir i razlika pod korenom','i1.1 i1.2',{note:true}),
  p('Izbor postupka i obrnut zadatak','s1'),
 ],
 'jednacine-kvadrat':[
  p('Znak desne strane i broj rešenja','i0',{f:[0],table:true,v:[0],note:true}),
  p('Najpre izdvoji kvadrat','i1.0 s0'),
  p('Kvadrat celog izraza','i1.1',{f:[1]}),
  p('Proveri sve mogućnosti','s1'),
 ],
 'direktna-proporcionalnost':[
  p('Stalni količnik i veza y=kx','i0',{f:[0,1],definition:true}),
  p('Promena obe veličine','i1.0',{v:[0]}),
  p('Koeficijent i provera tabele','i1.1 s0',{table:true,note:true}),
  p('Nepoznata veličina i jedinice','s1',{f:[2]}),
 ],
 'funkcija-ykx':[
  p('Prava kroz koordinatni početak','i0',{f:[0],definition:true}),
  p('Pozitivan i negativan koeficijent','i1.0 i1.1',{v:[0,1]}),
  p('Nulti koeficijent','i1.2 why'),
  p('Crtanje i pripadnost tačke','s0 s1',{f:[1],note:true}),
 ],
 'proporcije':[
  p('Jednakost dve razmere','i0',{v:[0],definition:true}),
  p('Unakrsni proizvodi','i1.0 i1.1 s0',{f:[0]}),
  p('Obrtanje i redosled veličina','i1.2 s1',{note:true}),
 ],
 'produzena-proporcija':[
  p('Isti zajednički deo t','i0',{f:[0],v:[0],definition:true}),
  p('Zbir, razlika i poznat član','i1.0 s0',{f:[1,2],note:true}),
  p('Uglovi trougla i spajanje odnosa','i1.1 i1.2'),
  p('Izračunaj delove i proveri','s1'),
 ],
 'primena-produzene-proporcije':[
  p('Šta se deli i kojim redom?','i0'),
  p('Zbir, razlika i vrednost dela','s0',{f:[0],v:[0]}),
  p('Polovina obima i preostali iznos','i1',{f:[1],note:true}),
  p('Provera rezultata i jedinica','s1'),
 ],
 'pitagorina-teorema':[
  p('Pravi ugao, katete i hipotenuza','i0',{v:[0],definition:true,note:true}),
  p('Teorema i površine kvadrata','i1',{f:[0],v:[1]}),
  p('Dužina hipotenuze','s0',{f:[1]}),
  p('Površina i primena','s1 why',{f:[2]}),
 ],
 'nepoznata-stranica-pravougli':[
  p('Prepoznaj hipotenuzu','i1 s0',{v:[0],definition:true}),
  p('Sabiranje ili oduzimanje kvadrata','i0',{f:[0,1],v:[1],note:true}),
  p('Provera, obim i površina','s1',{f:[2]}),
 ],
 'pitagora-pravougaonik-kvadrat':[
  p('Dijagonala pravougaonika','i0 s0',{f:[0],v:[0],note:true}),
  p('Dijagonala kvadrata','i1.0 i1.1',{f:[1],v:[1]}),
  p('Obim, površina i poređenje','i1.2 s1',{f:[2]}),
 ],
 'pitagora-jednakokraki':[
  p('Visina jednakokrakog trougla','i0 s0',{f:[0],v:[0],note:true}),
  p('Jednakostranični trougao','i1',{f:[1],v:[1]}),
  p('Nepoznata dužina, obim i površina','s1',{f:[2]}),
 ],
 'pitagora-romb':[
  p('Dijagonale i pomoćni trougao','i0',{v:[0],definition:true}),
  p('Stranica ili dijagonala','i1.0 s0',{f:[0],v:[1],note:true}),
  p('Površina, visina i obim','i1.1 s1',{f:[1,2]}),
 ],
 'pitagora-trapez':[
  p('Visina i razlika osnovica','i0',{definition:true,note:true}),
  p('Jednakokraki trapez','i1.1',{f:[1],v:[0]}),
  p('Pravougli trapez','i1.0',{f:[0],v:[1]}),
  p('Nepoznata dužina i površina','s0 s1',{f:[2]}),
 ],
 // 8. razred — sličnost i geometrija prostora
 'kratko-obnavljanje-7':[
  p('Koreni i redosled operacija','i0',{definition:true,note:true}),
  p('Figura, uglovi i površina','i1.0 i1.1 i1.2',{f:[1,2]}),
  p('Pravougli trougao i Pitagorina teorema','i1.3 s0 s1',{f:[0],v:[0]}),
 ],
 'razmera-duzi':[
  p('Količnik dužina u istoj jedinici','i0',{f:[0],v:[0],definition:true}),
  p('Jednaki delovi duži','i1',{f:[1],v:[1]}),
  p('Skraćivanje i nalaženje dužine','s0 s1',{note:true}),
 ],
 'samerljive-duzi':[
  p('Pozitivna zajednička mera','i0',{f:[0,1],v:[0],definition:true}),
  p('Odlučuje odnos dužina','i1.0 i1.1 s0'),
  p('Stranica i dijagonala kvadrata','i1.2',{v:[1],note:true}),
  p('Najveća celobrojna zajednička mera','s1'),
 ],
 'proporcionalnost':[
  p('Proporcionalne duži i njihov redosled','i0',{v:[0],definition:true,note:true}),
  p('Proizvod krajnjih i srednjih članova','i1.0 s0',{f:[0]}),
  p('Nepoznata dužina i pozitivan rezultat','i1.1 i1.2 s1',{f:[1]}),
 ],
 'talesova-teorema':[
  p('Paralelnost i odgovarajući odsečci','i0',{f:[0],v:[0]}),
  p('Deo, celina i ostatak','s0',{f:[1],note:true}),
  p('Okrenuta slika i zajedničko teme','i1.0',{v:[1,2]}),
  p('Dijagonale trapeza','i1.1',{f:[2],v:[3]}),
  p('Proporcija i podela duži','s1'),
 ],
 'slicni-trouglovi':[
  p('Jednaki uglovi i odgovarajuća temena','i0',{v:[0],definition:true,note:true}),
  p('Koeficijent sličnosti','i1.0 s0',{f:[0],v:[1]}),
  p('Dužine, obim i povratak','i1.1 s1',{f:[1]}),
 ],
 'stavovi-slicnosti':[
  p('UU — dva jednaka ugla','i1.1',{f:[0],v:[0],text:'Dva para jednakih uglova dovoljna su za sličnost. U dva pravougla trougla dovoljan je po jedan jednak oštar ugao, jer već imaju ugao 90°.'}),
  p('SUS — dve razmere i zahvaćen ugao','i1.0',{f:[1],v:[1],note:true,text:'Dva para proporcionalnih stranica i jednak zahvaćen ugao određuju sličnost. Zahvaćen ugao je između upoređenih stranica: za AB i AC to je ugao A.'}),
  p('SSS — tri razmere','',{f:[2],text:'Sva tri para odgovarajućih stranica moraju biti proporcionalna.'}),
  p('Provera uslova i redosleda temena','s0 s1'),
 ],
 'primene-slicnosti':[
  p('Razmera plana 1:n','i0',{f:[0]}),
  p('Merenje visine pomoću senke','i1',{f:[1],v:[0],note:true}),
  p('Odgovarajuće duži i provera','s0 s1',{v:[1]}),
 ],
 'slicnost-pravougli':[
  p('Visina i odsečci hipotenuze','i0',{f:[0],v:[0],definition:true}),
  p('Tri slična pravougla trougla','i1',{f:[1],note:true}),
  p('Izbor jednakosti i pozitivna dužina','s0 s1'),
 ],
 'snalazenje-u-prostoru':[
  p('Ravan crtež prostornog tela','i0',{v:[0],definition:true}),
  p('Temena, ivice i strane kocke','i1.0 i1.1 s0',{f:[0]}),
  p('Dijagonale i prividni presek','i1.2 s1',{v:[1],note:true}),
 ],
 'tacka-prava-ravan-osnove':[
  p('Oznake i pripadnost','i0',{f:[0],v:[0],definition:true}),
  p('Određenost prave i ravni','i1',{v:[1],note:true}),
  p('Cela prava pripada ravni','why',{f:[1]}),
  p('Brojanje bez ponavljanja','s0 s1'),
 ],
 'odnosi-pravih-ravni':[
  p('Dve prave u prostoru','i0',{f:[0],v:[0,1],definition:true,note:true}),
  p('Prava i ravan','i1',{f:[1,2]}),
  p('Zajedničke tačke i ista ravan','s0 s1'),
 ],
 'dve-ravni':[
  p('Paralelne i poklopljene ravni','i0.0',{f:[1],v:[0],definition:true}),
  p('Presečna prava','i0.1 i1.0',{f:[0],v:[1]}),
  p('Tri zajedničke tačke','i1.1',{note:true}),
  p('Provera položaja i brojanje','s0 s1'),
 ],
 'ortogonalnost':[
  p('Prava normalna na ravan','i0 s0',{f:[0],v:[0],definition:true,note:true}),
  p('Normalne ravni','i1.0 i1.1',{f:[2]}),
  p('Prava paralelna normali','i1.2',{f:[1]}),
  p('Podnožje i upotreba uslova','s1',{v:[1]}),
 ],
 'ortogonalna-projekcija':[
  p('Projekcija tačke','i0',{f:[0],definition:true,note:true}),
  p('Projekcija duži preko krajeva','i1.0 s0',{v:[0]}),
  p('Paralelna, kosa i normalna duž','i1.1',{f:[1,2],v:[1,2]}),
  p('Projekcija prave i zajedničko podnožje','i1.2 s1'),
 ],
 'poliedar':[
  p('Strane, ivice i temena','i0',{v:[0],definition:true}),
  p('Konveksnost i Ojlerova formula','i1',{f:[0],v:[1]}),
  p('Sistematsko brojanje i provera','s0 s1',{note:true}),
 ],
};

for(const lesson of grades.flatMap(g=>g.areas.flatMap(a=>a.lessons))){
 if(noteLayouts[lesson.id])continue;
 const theory=learningByLesson[lesson.id];
 if(/^s[78]-/.test(lesson.id)){
  const paragraphs=(text:string)=>text.split(/(?<=[.!?])\s+(?=[A-ZŠĐČĆŽ])/u);
  const rule=paragraphs(lesson.rules[0]), method=paragraphs(lesson.rules[1]);
  noteLayouts[lesson.id]=[
   p(lesson.title,'',{text:lesson.intro,definition:true}),
   p('Pravilo','',{text:rule.slice(0,3).join(' '),f:theory.extraFormulas.map((_,i)=>i)}),
   ...(rule.length>3?[p('Obrazloženje','',{text:rule.slice(3).join(' ')})]:[]),
   p('Postupak','',{text:method.slice(0,3).join(' '),note:true}),
   ...(method.length>3?[p(lesson.id.startsWith('s8-')?'Dodatno objašnjenje':'Provera konstrukcije','',{text:method.slice(3).join(' ')})]:[])
  ];continue;
 }
 noteLayouts[lesson.id]=[
  p(lesson.title,'',{text:lesson.intro,definition:true}),
  p('Pravilo','',{text:lesson.rules[0],f:theory.extraFormulas.map((_,i)=>i),v:lessonVisuals(lesson.id).map((_,i)=>i)}),
  p('Postupak','',{text:lesson.rules[1],note:true}),
 ];
}

const sentences=(text:string)=>text.split(/(?<=[.!?])\s+(?=[A-ZŠĐČĆŽ])/u);
export function lessonNotes(id:string){
 const learning=learningByLesson[id],layout=noteLayouts[id];
 if(!learning||!layout)return [];
 return layout.map(point=>{
  const text=point.text??point.refs.split(' ').filter(Boolean).map(ref=>{
   const match=/^([is])(\d+)(?:\.(\d+))?$/.exec(ref);
   if(match){
    const paragraph=(match[1]==='i'?learning.idea:learning.steps)[Number(match[2])];
    const value=match[3]===undefined?paragraph:sentences(paragraph)[Number(match[3])];
    if(value===undefined)throw new Error(`Missing theory sentence: ${id}/${ref}`);
    return value;
   }
   if(ref==='why')return learning.why;
   if(ref==='example')return learning.example??'';
   throw new Error(`Unknown theory sentence: ${id}/${ref}`);
  }).join(' ');
  return {title:point.title,text,definition:point.definition??false,formulas:(point.f??[]).map(i=>learning.extraFormulas[i]),visualIndexes:point.v??[],table:point.table??false,note:typeof point.note==='string'?point.note:point.note?learning.caution:undefined};
 });
}

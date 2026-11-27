import type {Task,TaskDiagram} from './types';
const numeric='(?:−|-)?\\d+(?:[.,]\\d+)?';
/** Only read GIVEN values. Never use answer/solution to build a task picture. */
function labelsFrom(task:Task){
 let source=task.math;if(/grešku|Proveri rezultat/.test(task.prompt))source=source.split(';')[0].split('pa je')[0];
 const labels:Record<string,string>={};const value='(?:'+numeric+'(?:\\[\\[sqrt:[^\\]]+\\]\\]|√\\d+)?|\\[\\[sqrt:[^\\]]+\\]\\])';for(const match of source.matchAll(new RegExp('(?<![A-Za-z_−-])([A-Z][A-Z]|[abcdshpq]|d_?[12]|[αβγ](?:_?1)?)\\s*=\\s*('+value+')(?:\\s*(cm|mm|m))?(°)?','g'))){labels[match[1].replace('_','')]=match[2].replace('-', '−').replace(/\[\[sqrt:([^\]]+)\]\]/g,'√$1')+(match[4]??'');}
 return labels;
}
const finite=(value?:string)=>value!==undefined&&/^\d+(?:[.,]\d+)?$/.test(value)?Number(value.replace(',','.')):undefined;
const numberLineIds=new Set(['skup-celih-brojeva','apsolutna-vrednost','uporedjivanje','sabiranje','oduzimanje','rastojanje','brojna-prava','skup-racionalnih-brojeva','apsolutna-vrednost-racionalnog']);
export function taskWithVisual(lessonId:string,original:Task):Task{
 let task=original;
 if(task.id==='o8-pro-3')task={...task,math:'Duž AB je kosa prema ravni α.',hint:'Uporedi kosu duž sa njenom ortogonalnom projekcijom.',solution:'Ortogonalna projekcija kose duži kraća je od same duži, pa je AB>A′B′.'};
 if(task.id==='o7-fg-7')task={...task,prompt:'Pronađi grešku u y-koordinati; x-koordinata ostaje −2.'};
 const l={...('labels' in (task.diagram??{})?(task.diagram as {labels?:Record<string,string>}).labels??{}:{}),...labelsFrom(task)};let diagram:TaskDiagram|undefined=task.diagram;
 for(const m of task.math.matchAll(/∠([ABCDEF])=(\d+)°/g))l['angle'+m[1]]=m[2]+'°';
 for(const m of task.math.matchAll(/O_(ABC|DEF)\s*=\s*(\d+(?:[.,]\d+)?)/g))l['perimeter'+m[1]]=m[2];
 if(lessonId==='talesova-teorema'){
  const variant=/pomoćnom kraku|deli duž/.test(task.math+' '+task.prompt)?'division':/dijagonal/.test(task.math)?'trapezoid':/AB∥CD/.test(task.math)?'rays':'triangle';
  const target=task.prompt.match(/Odredi (A[MN]|[MN]C|O[ABCD])/);if(target)l[target[1]]='?';
  diagram={type:'tales',variant,orientation:task.id.includes('remaining')||task.id.endsWith('h')?1:0,labels:l};
 }else if(['slicni-trouglovi','stavovi-slicnosti','primene-slicnosti'].includes(lessonId)){
  if(task.diagram?.type==='shadow')diagram=task.diagram;
  else if(!/nedosledan|grešk/.test(task.prompt)&&!/A₁B₁|A_1B_1/.test(task.math)&&/△ABC∼△DEF|AB:DE|AB=|odgovarajuć|različitim položajima/.test(task.math+' '+task.prompt)&&!/(nezahvaćen|nije zahvaćen|nije.*zahvaćen|nisu dovoljni)/.test(task.math)){
   const target=task.prompt.match(/Odredi (?:manju stranicu )?(AB|BC|AC|DE|EF|DF)/);if(target)l[target[1]]='?';if(/EF=x/.test(task.math))l.EF='?';if(/DF=x/.test(task.math))l.DF='?';
   diagram={type:'similarity',variant:task.diagram?.type==='similarity'?task.diagram.variant:task.id.length%2?'rotated':'upright',labels:l};
  }else if(lessonId==='stavovi-slicnosti')diagram=undefined;
 }else if(['razmera-duzi','samerljive-duzi'].includes(lessonId)){
  const pairs=task.math.match(/(\d+(?:[.,]\d+)?)\s*(cm|mm|m)\s*:\s*(\d+(?:[.,]\d+)?)\s*(cm|mm|m)/);const units:Record<string,number>={m:100,cm:1,mm:.1};
  if(pairs)diagram={type:'segments',lengths:[Number(pairs[1].replace(',','.'))*units[pairs[2]],Number(pairs[3].replace(',','.'))*units[pairs[4]]],names:['a','b'],unit:'cm'};
  else if(/a:b=\d+:\d+/.test(task.math)){const p=task.math.match(/a:b=(\d+):(\d+)/)!;diagram={type:'segments',lengths:[+p[1],+p[2]],names:['a','b'],unit:'u'};}
  else if(task.math==='18 cm i 24 cm')diagram={type:'segments',lengths:[18,24],unit:'cm'};
 }else if(['trougao-vrste','zbir-uglova-trougla','odnos-stranica-uglova','nejednakost-trougla','uglovi-transverzala'].includes(lessonId)){
  if(lessonId==='trougao-vrste'&&/^\d+ cm, \d+ cm, \d+ cm$/.test(task.math)){const ns=task.math.match(/\d+/g)!.map(Number);Object.assign(l,{a:String(ns[0]),b:String(ns[1]),c:String(ns[2])});}
  if(lessonId==='nejednakost-trougla'){const ns=task.math.match(/\d+(?=\s*cm)/g)?.map(Number);if(ns?.length===3)Object.assign(l,{a:String(ns[0]),b:String(ns[1]),c:String(ns[2])});}
  if(l['α'])l.alpha=l['α'];if(l['β'])l.beta=l['β'];if(l['γ'])l.gamma=l['γ'];if(l['α1'])l.external=l['α1'];
  if(/AB=AC/.test(task.math))Object.assign(l,{a:'a',b:'b',c:'c',alpha:'α',beta:'β',gamma:'γ',shapeAlpha:'50°',shapeBeta:'65°',shapeGamma:'65°'});
  if(lessonId==='odnos-stranica-uglova'&&task.id.startsWith('ow-sideangle-combine-')){const alpha=Number(l.alpha?.replace('°',''));l.shapeBeta=String(alpha+15)+'°';}
  if(lessonId==='uglovi-transverzala'){const adjacent=task.math.match(/Susedni unutrašnji ugao je (\d+)°/);if(adjacent)l.alpha=adjacent[1]+'°';const ext=task.math.match(/Spoljašnji (?:ugao )?je (\d+)°/);if(ext)l.external=ext[1]+'°';const other=task.math.match(/jedan nesusedni unutrašnji (\d+)°/);if(other)l.beta=other[1]+'°';if(task.id.startsWith("ow-external-equal-")&&ext)l.shapeBeta=String(Number(ext[1])/2)+"°";diagram=/Dva spoljašnja|Spoljašnji uglovi kod dva različita/.test(task.math)?undefined:{type:'triangle',variant:'external',labels:l};}
  else if(Object.keys(l).some(key=>['a','b','c','alpha','beta','gamma'].includes(key))||/△ABC/.test(task.math))diagram={type:'triangle',variant:['trougao-vrste','nejednakost-trougla','odnos-stranica-uglova'].includes(lessonId)?'sides':'angles',labels:l};
  else if(task.diagram?.type==='triangle')diagram={...task.diagram,labels:l};
  if(lessonId==='nejednakost-trougla'&&task.id==='o6-nt-2')diagram=undefined;
 }else if(lessonId==='uglovi-na-transverzali'){
  const id=task.id,angle=Number(task.math.match(/(\d+)°/)?.[1]??65);const mark=(at:'upper'|'lower',sector:'top-right'|'top-left'|'bottom-right'|'bottom-left',label:string)=>({at,sector,label});
  if(['o6-utn-1','o6-utn-2','o6-utn-3','o6-utn-4','o6-utn-5','o6-utn-8','o6-utn-9'].includes(id)){
   const marks=id==='o6-utn-3'?[mark('upper','bottom-left','57°'),mark('lower','top-right','β')]:id==='o6-utn-4'?[mark('upper','bottom-right','112°'),mark('lower','top-right','β')]:id==='o6-utn-5'?[mark('upper','top-right','46°'),mark('upper','bottom-left','β'),mark('lower','bottom-left','γ')]:id==='o6-utn-8'?[mark('upper','bottom-right','(2x+5)°'),mark('lower','top-right','(3x+10)°')]:id==='o6-utn-9'?[mark('upper','bottom-left','(x+20)°'),mark('lower','top-right','(3x−30)°'),mark('lower','top-left','γ')]:id==='o6-utn-1'?[]:[mark('upper','top-right','α'),mark('lower','top-right','β')];
   const algebra=[...task.math.matchAll(/\((\d*)x([+−-]\d+)\)/g)].map(m=>[Number(m[1]||1),Number(m[2].replace('−','-'))]);let actualAngle=id==='o6-utn-4'?180-angle:angle;if(algebra.length===2){const [[a,b],[c,d]]=algebra;const x=id==='o6-utn-8'?(180-b-d)/(a+c):(b-d)/(c-a);actualAngle=a*x+b;}
   diagram={type:'parallel-angles',angle:actualAngle,slope:id==='o6-utn-8'?'falling':'rising',markedAngles:marks};
  }
  if(id==='o6-utn-10')diagram={type:'triangle',variant:'parallel',labels:{shapeAlpha:'95°',shapeBeta:'48°',shapeGamma:'37°',alpha:'?',beta:'48°',gamma:'γ',vertexA:'P',vertexB:'A',vertexC:'B',parallelAngle:'37°'}};
 }else if(['pitagorina-teorema','nepoznata-stranica-pravougli','pitagora-pravougaonik-kvadrat','pitagora-jednakokraki','pitagora-romb','pitagora-trapez','slicnost-pravougli'].includes(lessonId)){
  let variant:Extract<TaskDiagram,{type:'pythagoras'}>['variant']='right';
  if(lessonId==='pitagora-pravougaonik-kvadrat')variant=/kvadrat/i.test(task.prompt+' '+task.math)?'square':'rectangle';
  if(lessonId==='pitagora-jednakokraki')variant=/jednakostranič/i.test(task.prompt+' '+task.math)?'equilateral':'isosceles';
  if(lessonId==='pitagora-romb')variant='rhombus';if(lessonId==='pitagora-trapez')variant=/jednakokrak/i.test(task.prompt+' '+task.math)?'trapezoid':'right-trapezoid';if(lessonId==='slicnost-pravougli')variant='right-altitude';
  const given=task.math.match(/Katete su (\d+) cm i (\d+) cm/);if(given)Object.assign(l,{a:given[1],b:given[2]});
  if(l.d1)l.d1=l.d1;if(l.d2)l.d2=l.d2;
  if(variant==='right-altitude'){for(const key of ['p','q','h','c']){const m=task.math.match(new RegExp(key+'=('+numeric+')'));if(m)l[key]=m[1];}}
  const diff=task.math.match(/a−b=(\d+)/);if(diff)l.diff=diff[1];
  if(task.id.startsWith('ow-leg-ladder-')){const given=task.math.match(/Merdevine su (\d+) m\. Vrh je na visini (\d+) m/);if(given)Object.assign(l,{a:'x',b:given[2],c:given[1]});}
  if(/Grešk|grešk|Proveri rezultat|mogu opisati|Da li/.test(task.prompt))diagram=undefined;
  else diagram={type:'pythagoras',variant,labels:l};
 }else if(lessonId==='funkcija-ykx'||lessonId==='direktna-proporcionalnost'){
  const match=task.math.match(/y=(−?-?\d+(?:[.,]\d+)?)x/);if(match)diagram={type:'graph',k:Number(match[1].replace('−','-').replace(',','.'))};
 }else if(['snalazenje-u-prostoru','tacka-prava-ravan-osnove','odnosi-pravih-ravni','dve-ravni','ortogonalnost','ortogonalna-projekcija','poliedar'].includes(lessonId)){
  if(lessonId==='snalazenje-u-prostoru'||lessonId==='poliedar'&&(/kock|ivica/.test(task.prompt)&&!task.math))diagram={type:'space',variant:'polyhedron',labels:{case:task.id==='sw-space-hidden-0'?'hidden-A':task.id==='sw-space-face-0'?'base-face':task.id==='sw-space-edges-0'||task.id==='o8-ms-4'?'vertex-edges':task.id==='o8-ms-6'?'diagonal':'edges'}};else if(lessonId==='poliedar')diagram=undefined;
  if(lessonId==='tacka-prava-ravan-osnove'&&/A.*p|p.*α|nekolinearne/.test(task.math+' '+task.prompt))diagram={type:'space',variant:'point-line-plane',labels:{case:/nekolinearne/.test(task.prompt)?'three':task.id==='sw-plane-four-0'?'four':'incidence'}};
  if(task.id==='sw-plane-unique-0'||task.id==='o8-ms-3')diagram=undefined;
  if(task.id==='o8-tpr-7')diagram={type:'space',variant:'polyhedron',labels:{case:'tetrahedron'}};
  if(task.id==='sw-plane-four-0')diagram={type:'space',variant:'point-line-plane',labels:{case:'four'}};
  if(task.id==='o8-tpr-6')diagram={type:'space',variant:'point-line-plane',labels:{case:'line-point'}};
  if(lessonId==='odnosi-pravih-ravni'&&/AB i /.test(task.math))diagram={type:'space',variant:'skew-lines',labels:{relation:/A_1B_1/.test(task.math)?'parallel':'skew'}};
  if(lessonId==='dve-ravni'&&/Gornja|donja|paralelne/.test(task.math))diagram={type:'space',variant:'planes',labels:{relation:'parallel'}};
  else if(lessonId==='dve-ravni'&&/presek|neparaleln|susednih/.test(task.prompt+' '+task.math))diagram={type:'space',variant:'planes',labels:{relation:'intersect'}};
  if(lessonId==='ortogonalnost')diagram=/kocke/.test(task.prompt)?{type:'space',variant:'polyhedron',labels:{case:task.id==='o8-or-6'?'adjacent-faces':'normal-edge'}}:task.id==='o8-or-4'?{type:'space',variant:'planes',labels:{relation:'orthogonal'}}:/grešk/.test(task.prompt)?undefined:{type:'space',variant:'orthogonal',labels:{case:task.id==='sw-normal-parallel-0'?'parallel-normals':task.id==='sw-normal-angle-0'?'angle':task.id==='sw-normal-two-0'?'foot-A':'standard'}};
  if(lessonId==='ortogonalna-projekcija'){const relation=/A∈α/.test(task.math)?'point':/normalne|najkraća|ista tačka/.test(task.prompt+' '+task.math)?'normal':/AB∥α/.test(task.math)?'parallel':/leži|AB⊂α/.test(task.prompt+' '+task.math)?'contained':'oblique';diagram={type:'space',variant:'projection',labels:{relation}};}
 }
 // Pairwise sums are not side lengths; use an explicitly symbolic sketch.
 if(task.id.startsWith('ow-tv-pairs-'))diagram={type:'triangle',variant:'sides',labels:{a:'a',b:'b',c:'c'}};
 if(task.id==='o6-tv-6')diagram={type:'triangle',variant:'sides',labels:{a:'8',b:'11',c:'?'}};
 if(task.id==='o6-rq-5')diagram={type:'number-line',min:-2,max:1,divisions:4,points:[{value:-1.25,label:'A'}]};
 if(task.id==='o6-rq-10')diagram={type:'number-line',min:-1,max:1,divisions:10,points:[{value:-.4,label:'A'},{value:0,label:'O'},{value:.4,label:'B'},{value:.2,label:'C'}]};
 if(task.id==='o6-ra-9')diagram={type:'number-line',min:-1,max:0,divisions:8,points:[{value:-.875,label:'A'},{value:-.375,label:'B'}]};
 if(numberLineIds.has(lessonId)&&!diagram){const values=[...task.math.matchAll(/([A-Z])\(((?:−|-)?\d+(?:[.,]\d+)?)\)/g)].map(m=>({value:Number(m[2].replace('−','-').replace(',','.')),label:m[1]}));if(values.length)diagram={type:'number-line',min:Math.floor(Math.min(0,...values.map(p=>p.value)))-1,max:Math.ceil(Math.max(0,...values.map(p=>p.value)))+1,points:values};}
 return diagram?{...task,diagram}:diagram===undefined&&task.diagram?{...task,diagram:undefined}:task;
}

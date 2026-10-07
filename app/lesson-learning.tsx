"use client";

import {useState} from 'react';
import {learningByLesson} from './content/learning';
import {lessonVisuals} from './content/lesson-visuals';
import type {Lesson} from './content/types';
import {PreciseDiagram} from './math-diagrams';
import {PythagorasDiagram} from './pythagoras-diagram';
import {mathHtml} from './math-format';
import {localize,localizeMathText,useCurrentScript} from './i18n';
function Math({children}:{children:string}){const script=useCurrentScript();return <span className="math" dangerouslySetInnerHTML={{__html:mathHtml(localizeMathText(children,script))}}/>}
const tables:Record<string,{heads:string[];rows:string[][]}>={
 'mnozenje':{heads:['Znaci činilaca','Znak proizvoda'],rows:[['+ i +','+'],['− i −','+'],['+ i −','−'],['− i +','−']]},
 'deljenje':{heads:['Znaci deljenika i nenultog delioca','Znak količnika'],rows:[['Isti znaci','+'],['Različiti znaci','−'],['Deljenik 0','0']]},
 'decimalni-u-razlomak':{heads:['Decimalni zapis','Razlomački zapis'],rows:[['0,7','[[frac:7|10]]'],['0,24','[[frac:24|100]]=[[frac:6|25]]']]},
 'decimalni-zapis':{heads:['Vrsta zapisa','Primer'],rows:[['Konačan','0,25'],['Beskonačan periodičan','0,(3)=0,333…'],['Mešovito periodičan','0,1(6)=0,1666…']]},
 'realni-brojevi':{heads:['Skup','Osobina decimalnog zapisa'],rows:[['Racionalni brojevi Q','Konačan ili beskonačan periodičan'],['Iracionalni brojevi','Beskonačan neperiodičan'],['Realni brojevi R','Zajedno racionalni i iracionalni']]},
 'jednacine-kvadrat':{heads:['Jednačina x²=r','Realna rešenja'],rows:[['r<0','Nema rešenja'],['r=0','Jedno: x=0'],['r>0','Dva: x=−√r ili x=√r']]},
 'direktna-proporcionalnost':{heads:['x','1','2','3'],rows:[['y=3x','3','6','9'],['y/x','3','3','3']]},
 'svojstva-korena':{heads:['Dozvoljena veza','Uslov'],rows:[['√(ab)=√a·√b','a≥0, b≥0'],['√(a/b)=√a/√b','a≥0, b>0'],['√(a²)=|a|','a je realan broj']]}
};
export function LessonLearningContent({lesson}:{lesson:Lesson}){
 const script=useCurrentScript(),learning=learningByLesson[lesson.id],visuals=lessonVisuals(lesson.id),table=tables[lesson.id];
 const [view,setView]=useState(0);
 if(!learning)return null;
 return <article className="content-card learning-compact learning-idea">
  <div className="card-title"><span>01</span><h2>{localize('Šta treba da znaš',script)}</h2></div>
  <div className="learning-overview">{learning.idea.map(p=><p key={p}><Math>{p}</Math></p>)}</div>
  {visuals.length>0&&<section className="learning-gallery" aria-label={localize('Matematički prikazi',script)}>
   {visuals.length>1&&<div className="visual-switch" role="group" aria-label={localize('Izaberi crtež',script)}>{visuals.map((_,i)=><button type="button" key={i} aria-pressed={i===view} aria-controls={`learning-${lesson.id}-view-${i}`} onClick={()=>setView(i)}>{localize('Crtež',script)} {i+1}</button>)}</div>}
   {visuals.map(({diagram,note},i)=><div className="learning-visual" id={`learning-${lesson.id}-view-${i}`} key={i} hidden={i!==view}>{diagram.type==='pythagoras'?<PythagorasDiagram diagram={diagram} label={localize('Označena figura i njene duži',script)} caption=""/>:<PreciseDiagram diagram={diagram} captionOverride={null}/>} {note&&<p className="visual-note"><Math>{note}</Math></p>}</div>)}
  </section>}
  {table&&<div className="learning-table-wrap"><table className="learning-table"><thead><tr>{table.heads.map((h,i)=><th key={i}><Math>{h}</Math></th>)}</tr></thead><tbody>{table.rows.map((row,i)=><tr key={i}>{row.map((cell,j)=><td key={j}><Math>{cell}</Math></td>)}</tr>)}</tbody></table></div>}
  {learning.extraFormulas.length>0&&<div className="learning-formulas"><h3>{localize('Pravilo / formula',script)}</h3><div className="formula-row">{learning.extraFormulas.map(f=><div key={f}><Math>{f}</Math></div>)}</div></div>}
  {learning.steps.length>0&&<ul className="learning-steps">{learning.steps.map(s=><li key={s}><Math>{s}</Math></li>)}</ul>}
  {learning.why&&<p className="learning-reason"><Math>{learning.why}</Math></p>}
  {learning.example&&<p className="learning-micro-example"><strong>{localize('Primer:',script)} </strong><Math>{learning.example}</Math></p>}
  {learning.caution&&<p className="learning-note"><strong>{localize('Pazi:',script)} </strong><Math>{learning.caution}</Math></p>}
 </article>;
}

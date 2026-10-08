"use client";

import {lessonNotes} from './content/learning-notes';
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
 const script=useCurrentScript(),points=lessonNotes(lesson.id),visuals=lessonVisuals(lesson.id),table=tables[lesson.id];
 if(!points.length)return null;
 return <article className="content-card learning-compact learning-idea learning-notes">
  <div className="card-title"><span>01</span><h2>{localize('Šta treba da znaš',script)}</h2></div>
  <ol className="learning-points" role="list">{points.map((point,index)=><li className="learning-point" key={point.title} aria-labelledby={`learning-${lesson.id}-point-${index}`}>
   <h3 id={`learning-${lesson.id}-point-${index}`} className="learning-point-title"><span className="learning-point-number" aria-hidden="true">{index+1}.</span><span><Math>{point.title}</Math></span></h3>
   <div className="learning-point-body">
    {point.text&&<p className={point.definition?'learning-definition':'learning-explanation'}><Math>{point.text}</Math></p>}
    {point.table&&table&&<div className="learning-table-wrap" role="region" aria-label={localize(point.title,script)} tabIndex={0}><table className="learning-table"><thead><tr>{table.heads.map((h,i)=><th scope="col" key={i}><Math>{h}</Math></th>)}</tr></thead><tbody>{table.rows.map((row,i)=><tr key={i}>{row.map((cell,j)=><td key={j}><Math>{cell}</Math></td>)}</tr>)}</tbody></table></div>}
    {point.formulas.length>0&&<div className="formula-row" aria-label={localize('Matematički odnos',script)}>{point.formulas.map((f,i)=><div key={i}><Math>{f}</Math></div>)}</div>}
    {point.visualIndexes.map(i=>{const {diagram,note}=visuals[i];return <div className="learning-visual" id={`learning-${lesson.id}-view-${i}`} key={i}>
     {diagram.type==='pythagoras'?<PythagorasDiagram diagram={diagram} label={localize(point.title,script)} caption=""/>:<PreciseDiagram diagram={diagram} captionOverride={null}/>}
     {note&&<p className="visual-note"><Math>{note}</Math></p>}
    </div>})}
    {point.note&&<p className="learning-note"><strong>{localize('Zapamti:',script)} </strong><Math>{point.note}</Math></p>}
   </div>
  </li>)}</ol>
 </article>;
}

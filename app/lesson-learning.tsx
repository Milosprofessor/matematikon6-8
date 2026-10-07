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
 if(!learning)return null;
 const formulas=[...new Set([...lesson.formulas,...learning.extraFormulas])];
 return <>
  <article className="content-card learning-idea"><div className="card-title"><span>01</span><h2>Šta učimo?</h2></div><p className="learning-aim"><Math>{learning.aim}</Math></p><h3>Glavna ideja</h3>{learning.idea.map(p=><p key={p}><Math>{p}</Math></p>)}
   <div className="learning-rule"><h3>Definicija i pravilo</h3><ul>{lesson.rules.map(r=><li key={r}><Math>{r}</Math></li>)}</ul></div>
   <div className="formula-row">{formulas.map(f=><div key={f}><Math>{f}</Math></div>)}</div>
  </article>
  <article className="content-card learning-method"><div className="card-title"><span>02</span><h2>Kako postupamo?</h2></div><ol>{learning.steps.map(s=><li key={s}><Math>{s}</Math></li>)}</ol><div className="learning-why"><h3>Zašto to važi?</h3><p><Math>{learning.why}</Math></p></div>
   {table&&<div className="learning-table-wrap"><table className="learning-table"><thead><tr>{table.heads.map((h,i)=><th key={i}><Math>{h}</Math></th>)}</tr></thead><tbody>{table.rows.map((row,i)=><tr key={i}>{row.map((cell,j)=><td key={j}><Math>{cell}</Math></td>)}</tr>)}</tbody></table></div>}
  </article>
  {visuals.length>0&&<article className="content-card learning-visuals"><div className="card-title"><span>03</span><h2>Posmatraj i poveži</h2></div>{visuals.map(({diagram,note},i)=><div className="learning-visual" key={i}>{diagram.type==='pythagoras'?<PythagorasDiagram diagram={diagram} label={localize('Označena figura i njene duži',script)} caption={localize('Veze čitaj iz oznaka; položaj figure ne menja pravilo.',script)}/>:<PreciseDiagram diagram={diagram}/>} {note&&<p><Math>{note}</Math></p>}</div>)}</article>}
  <article className="content-card learning-caution"><h3>Pazi!</h3><p><Math>{learning.caution}</Math></p></article>
 </>;
}

import type { Area, Lesson } from "../types";
import uglovi from "./uglovi";
import pravilni from "./pravilni";
import povrsina from "./povrsina";
import centri from "./centri";
import monomi from "./monomi";
import polinomi from "./polinomi";
import proizvod from "./proizvod";
import identiteti from "./identiteti";
import cinioci from "./cinioci";
import jednacine from "./jednacine";
import kruznica from "./kruznica";
import luk from "./luk";
import isecci from "./isecci";
import rotacija from "./rotacija";
import podaci from "./podaci";
import procena from "./procena";
import sinteza from "./sinteza";

function area(id:string,title:string,lessons:Lesson[],previous:string):Area {
  return {id:"s7-"+id,title,short:lessons.map(l=>l.title).join(" · "),month:lessons[0].month,
    reviewPoints:lessons.map(l=>l.rules.at(-1)!),
    lessons:lessons.map((l,i)=>({...l,prerequisites:[i?lessons[i-1].id:previous]}))};
}
export const spring7Areas=[
  area("geometrija","Mnogougao i značajne tačke",[uglovi,pravilni,povrsina,centri],"dijagonale-mnogougla"),
  area("algebra","Celi algebarski izrazi",[monomi,polinomi,proizvod,identiteti,cinioci,jednacine],"stepen-proizvoda"),
  area("krug","Krug i rotacija",[kruznica,luk,isecci,rotacija],"s7-pravilni"),
  area("statistika","Obrada podataka",[podaci],"funkcija-ykx"),
  area("zavrsnica","Završna sistematizacija sedmog razreda",[procena,sinteza],"s7-podaci"),
];

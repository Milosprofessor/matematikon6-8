import type { Area, Lesson } from "../types";
import prizma from "./prizma";
import piramida from "./piramida";
import zapremina from "./zapremina";
import funkcija from "./funkcija";
import znak from "./znak";
import sistemi from "./sistemi";
import model from "./model";
import valjak from "./valjak";
import kupa from "./kupa";
import lopta from "./lopta";
import tela from "./tela";
import godina from "./godina";

function area(id:string,title:string,lessons:Lesson[]):Area {
  return {id:"s8-"+id,title,lessons,month:lessons[0].month,short:lessons.map(l=>l.title).join(" · "),
    reviewPoints:lessons.flatMap(l=>[l.aim!,l.rules[2]])};
}
export const spring8Areas=[
  area("preseci","Preseci pravih prizmi",[prizma]),
  area("piramide","Površina i zapremina piramide",[piramida,zapremina]),
  area("funkcije","Linearna funkcija",[funkcija,znak]),
  area("sistem","Sistemi linearnih jednačina",[sistemi,model]),
  area("valjci","Valjak",[valjak]),
  area("kupe","Kupa",[kupa]),
  area("lopte","Lopta i sfera",[lopta]),
  area("zavrsnica","Završna sistematizacija osmog razreda",[tela,godina]),
];

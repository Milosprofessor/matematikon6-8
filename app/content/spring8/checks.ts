import type { SpringCheck } from "../spring6/checks";
import { spring8Areas } from "./index";
import { finals8 } from "./finals";

export const checks8=new Map<string,SpringCheck>();
for(const area of spring8Areas){
  for(const lesson of area.lessons){
    const id=lesson.id+"-mini";
    checks8.set(id,{id,areaId:area.id,lessonId:lesson.id,title:"Mini-provera • "+lesson.title,
      items:lesson.mini!.map(t=>({...t,lessonId:lesson.id}))});
  }
  checks8.set(area.id,{id:area.id,areaId:area.id,title:"Provera oblasti • "+area.title,
    items:area.lessons.flatMap(l=>l.areaQuestions!.map(t=>({...t,lessonId:l.id})))});
}
for(const check of finals8)checks8.set(check.id,check);

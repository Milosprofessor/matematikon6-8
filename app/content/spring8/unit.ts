import type { Lesson, Level } from "../types";
import { question, type Row } from "../spring6/lesson";

type Content = Required<Pick<Lesson, "id" | "title" | "month" | "aim" | "intro" | "rules" | "formulas" | "worked" | "prerequisites">>;
const levels: Level[] = ["basic","basic","basic","basic","medium","medium","medium","medium","advanced","advanced","basic","medium","advanced","basic","medium","advanced"];

export function unit(content: Content, rows: Row[], skills:string[], reserve:Row): Lesson {
  const items = rows.map((row, i) => ({
    ...question(content.id + "-" + (i+1), content.title, levels[i], row, i+1),
    taskType: content.id + "-" + (skills[i] ?? "provera")
  }));
  return {...content, solved:content.worked[0], examples:[], tasks:[...items.slice(0,10), {...question(content.id+"-vezba",content.title,"medium",reserve,1),taskType:content.id+"-primena",practiceOnly:true}], mini:items.slice(10,13), areaQuestions:items.slice(13)};
}

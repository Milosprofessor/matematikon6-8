import type { Lesson, Level } from "../types";
import { question, type Row } from "../spring6/lesson";

type Content = Required<Pick<Lesson, "id" | "title" | "month" | "aim" | "intro" | "rules" | "formulas" | "worked" | "prerequisites">>;
const levels: Level[] = ["basic","basic","basic","basic","medium","medium","medium","medium","advanced","advanced","basic","medium","advanced","basic","medium","advanced"];

export function unit(content: Content, rows: Row[]): Lesson {
  const items = rows.map((row, i) => ({
    ...question(content.id + "-" + (i+1), content.title, levels[i], row, i+1),
    taskType: content.id + "-" + (Array.isArray(row[1]) ? "pojam" : /[π√]/.test(row[1]) ? "izraz" : row[1].startsWith("(") ? "par" : "racun")
  }));
  return {...content, solved:content.worked[0], examples:[], tasks:items.slice(0,10), mini:items.slice(10,13), areaQuestions:items.slice(13)};
}

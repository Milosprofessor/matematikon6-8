import type { Lesson, Level, Month, Task } from "../types";

export type Row = [prompt: string, response: string | string[], hint: string, solution: string];
type Chapter = Pick<Lesson, "id" | "title" | "intro" | "rules" | "formulas"> & {
  month: Month;
  aim: string;
  skills: string[];
  worked: Lesson["solved"][];
};

export function question(id: string, skill: string, level: Level, row: Row, position: number): Task {
  const [prompt, response, hint, solution] = row;
  const options = Array.isArray(response) ? response : undefined;
  const offset = options ? position % options.length : 0;
  return {
    id, skill, level, prompt, math: "", hint, solution,
    kind: options ? "choice" : "input",
    answer: options ? options[0] : String(response),
    choices: options && [...options.slice(offset), ...options.slice(0, offset)],
  };
}

// Ten classroom problems, one reserve, three exit questions, two area questions.
// Keep identifiers stable when editing a question so saved work still matches.
export function springLesson(chapter: Chapter, rows: Row[]): Lesson {
  const { skills, ...content } = chapter;
  const levels: Level[] = ["basic","basic","basic","basic","medium","medium","medium","medium","advanced","advanced","medium","basic","medium","advanced","basic","advanced"];
  const items = rows.map((row, i) => question(chapter.id + "-" + (i + 1), chapter.title, chapter.id==="s7-rotacija"&&(i===8||i===13)?"basic":levels[i], row, i + 1));
  return {
    ...content, examples: [], solved: chapter.worked[0],
    tasks: items.slice(0, 11).map((task, i) => ({...task, taskType: skills[i], practiceOnly: i === 10})),
    mini: items.slice(11, 14), areaQuestions: items.slice(14),
  };
}

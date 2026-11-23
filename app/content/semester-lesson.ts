import type { Lesson, Level, Task } from "./types";

type Exercise = [taskType: string, prompt: string, math: string, answer: string | string[], hint: string, solution: string];
type Chapter = Pick<Lesson, "id" | "title" | "intro" | "rules" | "formulas" | "examples" | "solved">;

// Each row is a distinct authored problem. Rows 1–10 form the classroom sequence.
// In choice rows the first source option is correct; vary its displayed position.
export function semesterLesson(chapter: Chapter, rows: Exercise[]): Lesson {
  const levels: Level[] = ["basic","basic","basic","medium","medium","medium","medium","advanced","advanced","advanced"];
  const tasks = rows.map(([taskType, prompt, math, responses, hint, solution], index): Task => {
    const options = Array.isArray(responses) ? responses : undefined;
    const offset = options ? (index + 1) % options.length : 0;
    return {
      id: chapter.id + "-" + (index + 1), prompt, math, hint, solution, taskType,
      answer: options ? options[0] : String(responses),
      kind: options ? "choice" : "input",
      choices: options && [...options.slice(offset), ...options.slice(0, offset)],
      level: levels[index] ?? (["basic","medium","advanced","medium"] as const)[(index-10)%4],
      practiceOnly: index >= 10, skill: chapter.title,
    };
  });
  return {...chapter, tasks};
}

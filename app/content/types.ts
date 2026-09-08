export type GradeId = 6 | 7 | 8;
export type Level = "basic" | "medium" | "advanced";
export type Task = {
  id: string;
  prompt: string;
  math: string;
  kind: "choice" | "input";
  choices?: string[];
  answer: string;
  hint: string;
  solution: string;
  level: Level;
  skill: string;
};

export type Lesson = {
  id: string;
  title: string;
  intro: string;
  rules: string[];
  formulas: string[];
  examples: string[];
  solved: { question: string; steps: string[] };
  tasks: Task[];
  diagram?: "tales" | "similarity" | "scale";
};

export type Area = {
  id: string;
  title: string;
  short: string;
  review?: boolean;
  lessons: Lesson[];
};

export type Grade = {
  id: GradeId;
  title: string;
  accent: string;
  description: string;
  areas: Area[];
};

export const C = (id:string,prompt:string,math:string,choices:string[],answer:string,hint:string,solution:string,level:Level,skill:string):Task =>
  ({id,prompt,math,kind:"choice",choices,answer,hint,solution,level,skill});
export const I = (id:string,prompt:string,math:string,answer:string,hint:string,solution:string,level:Level,skill:string):Task =>
  ({id,prompt,math,kind:"input",answer,hint,solution,level,skill});

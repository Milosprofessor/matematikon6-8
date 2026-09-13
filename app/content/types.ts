export type GradeId = 6 | 7 | 8;
export type Level = "basic" | "medium" | "advanced";
export type ErrorCategory = "concept" | "calculation" | "sign" | "rule" | "diagram" | "method";
export type TaskDiagram =
  | { type:"number-line"; min:number; max:number; points:{ value:number; label:string }[] }
  | { type:"tales"; variant?:"triangle"|"rays"|"trapezoid"; labels?:Record<string,string> }
  | { type:"similarity"; variant?:"upright"|"rotated"|"mirrored"; labels?:Record<string,string> }
  | { type:"shadow"; objectLabel:string; objectHeight:string; objectShadow:string; targetShadow:string; targetLabel?:string };
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
  /** Matematički drugačija konstrukcija zadatka, nezavisna od brojeva u varijanti. */
  taskType?: string;
  /** Vrsta greške koju ovaj zadatak najpreciznije otkriva. */
  errorCategory?: ErrorCategory;
  /** Zadatak ostaje u većoj bazi za vežbanje, a ne produžava kratku proveru lekcije. */
  practiceOnly?: boolean;
  diagram?: TaskDiagram;
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

type TaskMeta = Partial<Pick<Task,"taskType"|"errorCategory"|"practiceOnly"|"diagram">>;
export const C = (id:string,prompt:string,math:string,choices:string[],answer:string,hint:string,solution:string,level:Level,skill:string,meta:TaskMeta={}):Task =>
  ({id,prompt,math,kind:"choice",choices,answer,hint,solution,level,skill,...meta});
export const I = (id:string,prompt:string,math:string,answer:string,hint:string,solution:string,level:Level,skill:string,meta:TaskMeta={}):Task =>
  ({id,prompt,math,kind:"input",answer,hint,solution,level,skill,...meta});

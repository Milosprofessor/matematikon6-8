export type GradeId = 6 | 7 | 8;
export type Level = "basic" | "medium" | "advanced";
export const months = ["september", "october", "november", "december", "january", "february", "march", "april", "may", "june"] as const;
export type Month = typeof months[number];
export const monthLabels: Record<Month,string> = {september:"SEPTEMBAR", october:"OKTOBAR", november:"NOVEMBAR", december:"DECEMBAR", january:"JANUAR", february:"FEBRUAR", march:"MART", april:"APRIL", may:"MAJ", june:"JUN"};
export type ErrorCategory = "concept" | "calculation" | "sign" | "rule" | "diagram" | "method";
export type TaskDiagram =
  | { type:"semester-figure"; variant:"pentagon"|"prism-net"|"pyramid" }
  | { type:"number-line"; min:number; max:number; divisions?:number; points:{ value:number; label:string }[]; interval?:{start:number;end:number;closedStart:boolean;closedEnd:boolean}; arrows?:{from:number;to:number;label?:string}[] }
  | { type:"tales"; variant?:"triangle"|"rays"|"trapezoid"|"division"; orientation?:number; labels?:Record<string,string> }
  | { type:"similarity"; variant?:"upright"|"rotated"|"mirrored"; labels?:Record<string,string> }
  | { type:"shadow"; objectLabel:string; objectHeight:string; objectShadow:string; targetShadow:string; targetLabel?:string }
  | { type:"triangle"; variant:"angles"|"sides"|"inequality"|"transversal"|"external"|"parallel"; labels?:Record<string,string> }
  | { type:"segments"; lengths:number[]; names?:string[]; unit?:string }
  | { type:"parallel-angles"; angle?:number; slope?:"rising"|"falling"; relation?:"corresponding"|"alternate"|"interior"; labels?:Record<string,string>; markedAngles?:{at:"upper"|"lower";sector:"top-right"|"top-left"|"bottom-right"|"bottom-left";label:string}[] }
  | { type:"construction"; angle:number; bisect?:boolean; labels?:Record<string,string> }
  | { type:"square-area"; side?:string; area?:string }
  | { type:"graph"; k:number; point?:{x:number;y:number}; labels?:Record<string,string> }
  | { type:"pythagoras"; variant:"right"|"right-altitude"|"rectangle"|"square"|"isosceles"|"equilateral"|"quadrilateral"|"rhombus"|"trapezoid"|"right-trapezoid"; labels?:Record<string,string> }
  | { type:"space"; variant:"point-line-plane"|"skew-lines"|"planes"|"orthogonal"|"projection"|"polyhedron"; labels?:Record<string,string> };
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
  /** Lekcije koje moraju biti dostupne pre nego što zadatak uđe u vežbanje. */
  prerequisites?: string[];
  diagram?: TaskDiagram;
};

export type Lesson = {
  id: string;
  title: string;
  intro: string;
  rules: string[];
  formulas: string[];
  examples: string[];
  aim?: string;
  worked?: {question: string; steps: string[]}[];
  mini?: Task[];
  areaQuestions?: Task[];
  solved: { question: string; steps: string[] };
  tasks: Task[];
  month?: Month;
  /** Prethodne lekcije potrebne za razumevanje ove lekcije. */
  prerequisites?: string[];
  diagram?: "tales" | "similarity" | "scale" | "triangle" | "direct-proportion" | "pythagoras" | "quadrilateral" | "space";
  interactive?: "triangle-angles" | "direct-proportion" | "pythagoras" | "space-relations";
};

export type LessonLearning = {
  aim:string;
  idea:string[];
  steps:string[];
  why:string;
  caution:string;
  extraFormulas:string[];
  example?:string;
  sourcePages:string;
  visuals:string[];
};

export type Area = {
  id: string;
  title: string;
  short: string;
  review?: boolean;
  reviewPoints?: string[];
  month?: Month;
  /** Kratak opis dela oblasti koji se zaista obrađuje u datom mesecu. */
  monthShort?: Partial<Record<Month,string>>;
  /** Redosled oblasti unutar konkretnog meseca kada jedna oblast traje duže. */
  monthOrder?: Partial<Record<Month,number>>;
  /** Ista matematička oblast može da traje kroz više meseci, ali deli jedno vežbanje. */
  practiceGroupId?: string;
  assessment?: "final" | "mini";
  lessons: Lesson[];
};

export type Grade = {
  id: GradeId;
  title: string;
  accent: string;
  description: string;
  areas: Area[];
};

type TaskMeta = Partial<Pick<Task,"taskType"|"errorCategory"|"practiceOnly"|"prerequisites"|"diagram">>;
export const C = (id:string,prompt:string,math:string,choices:string[],answer:string,hint:string,solution:string,level:Level,skill:string,meta:TaskMeta={}):Task =>
  ({id,prompt,math,kind:"choice",choices,answer,hint,solution,level,skill,...meta});
export const I = (id:string,prompt:string,math:string,answer:string,hint:string,solution:string,level:Level,skill:string,meta:TaskMeta={}):Task =>
  ({id,prompt,math,kind:"input",answer,hint,solution,level,skill,...meta});

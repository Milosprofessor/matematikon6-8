import type {Area, Lesson, Month} from "./types";

// Repeated teaching units use the original lesson and its saved work.
const revision:Partial<Record<Month,readonly string[]>>={
  october:["deljenje","slicnost-pravougli"],
  november:["skup-racionalnih-brojeva","pitagora-trapez"],
  december:["q-proizvod","stepeni-ista-osnova","linearne-nejednacine"],
};
export const calendarMonth=(area:Area,lesson:Lesson):Month=>lesson.month??area.month??"september";
export const inMonth=(area:Area,lesson:Lesson,month:Month)=>
  calendarMonth(area,lesson)===month||Boolean(revision[month]?.includes(lesson.id));

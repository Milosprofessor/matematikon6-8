import { Grade } from "./types";
import { grade6Areas } from "./grade6";
import { grade7Areas } from "./grade7";
import { grade8Areas } from "./grade8";
import {plannedAreas} from './plan-calendar';

import { spring7Areas } from "./spring7";
import { springAreas } from "./spring6";

export const grades: Grade[] = [
  {id:6,title:"6. razred",accent:"#4f73d9",description:"Celi i racionalni brojevi, koordinate, proporcionalnost, konstrukcije i površine.",areas:[...plannedAreas(6,grade6Areas), ...springAreas]},
  {id:7,title:"7. razred",accent:"#5b32d6",description:"Realni brojevi, proporcionalnost, Pitagorina teorema, stepeni, mnogougao, polinomi, krug i podaci.",areas:[...plannedAreas(7,grade7Areas),...spring7Areas]},
  {id:8,title:"8. razred",accent:"#197764",description:"Sličnost, geometrija prostora, jednačine, nejednačine, prizma i piramida.",areas:plannedAreas(8,grade8Areas)}
];

export * from "./types";

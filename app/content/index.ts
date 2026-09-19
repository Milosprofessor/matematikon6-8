import { Grade } from "./types";
import { grade6Areas } from "./grade6";
import { grade7Areas } from "./grade7";
import { grade8Areas } from "./grade8";

export const grades: Grade[] = [
  {id:6,title:"6. razred",accent:"#4f73d9",description:"Celi brojevi i trougao — jasno, korak po korak.",areas:grade6Areas},
  {id:7,title:"7. razred",accent:"#5b32d6",description:"Realni brojevi, Pitagorina teorema i početak stepenovanja.",areas:grade7Areas},
  {id:8,title:"8. razred",accent:"#197764",description:"Sličnost, geometrija prostora i linearne jednačine.",areas:grade8Areas}
];

export * from "./types";

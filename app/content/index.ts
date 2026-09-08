import { Grade } from "./types";
import { grade6Areas } from "./grade6";
import { grade7Areas } from "./grade7";
import { grade8Areas } from "./grade8";

export const grades: Grade[] = [
  {id:6,title:"6. razred",accent:"#4f73d9",description:"Celi brojevi — jasno, korak po korak.",areas:grade6Areas},
  {id:7,title:"7. razred",accent:"#5b32d6",description:"Realni brojevi, intervali i kvadratni koren.",areas:grade7Areas},
  {id:8,title:"8. razred",accent:"#197764",description:"Razmere, Talesova teorema i sličnost.",areas:grade8Areas}
];

export * from "./types";

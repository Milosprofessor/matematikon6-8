import type { Area, Lesson } from "../types";
import model from "./model";
import data from "./podaci";
import symmetry from "./preslikavanja";
import quadConstruction from "./cetiri-stranice";
import construction from "./konstrukcije";
import congruence from "./podudarnost";
import coordinates from "./koordinate";
import ratio from "./razmera";
import dependence from "./zavisnost";
import percent from "./procenti";
import angles from "./uglovi";
import parallelogram from "./paralelogram";
import vectors from "./vektori";
import trapezoid from "./trapez";
import measurement from "./merenje";
import triangleArea from "./trougao-trapez";
import composite from "./delovi";
import synthesis from "./sinteza";

function area(id: string, title: string, short: string, lessons: Lesson[], prerequisite: string, reviewPoints: string[]): Area {
  return {
    id: "s6-" + id, title, short, reviewPoints,
    month: lessons[0].month,
    lessons: lessons.map((lesson, i) => ({...lesson, prerequisites: [i ? lessons[i-1].id : prerequisite]})),
  };
}

export const springAreas = [
  area("primene", "Racionalni brojevi u problemskim zadacima", "Stanja, promene, jednačine i ograničenja.", [model], "q-nejednacine", [
    "Prevedi dug i promenu na brojeve sa znakom. Proveri rezultat vraćanjem u početnu situaciju.",
    "Označi nepoznatu i jedinicu. Odredi da li rešenje sme biti razlomak ili mora biti ceo broj.",
    "Kod negativnog činioca u nejednačini promeni smer pri deljenju i ispitaj graničnu vrednost.",
  ]),
  area("trouglovi", "Konstrukcije i podudarnost trouglova", "Od otvora šestara do dokaza i kružnice.", [construction, congruence], "nejednakost-trougla", [
    "Opiši skup tačaka na datom rastojanju i objasni zašto presek lukova rešava konstrukciju.",
    "Upari temena prema redosledu. Navedi tri podatka koji opravdavaju odgovarajući stav.",
    "Za opisanu kružnicu koristi simetrale stranica, a za upisanu simetrale uglova.",
  ]),
  area("odnosi", "Koordinate, podaci i proporcionalnost", "Od uređenog para i tabele do cene, karte i procenta.", [coordinates, symmetry, data, ratio, dependence, percent], "q-zapisi", [
    "Pročitaj obe ose i razmak podeoka. Odredi da li se traži položaj, pomeraj ili udaljenost.",
    "Uporedi količnike i proizvode odgovarajućih veličina. Objasni zašto pretpostavljaš stalnu cenu, brzinu ili količinu rada.",
    "Kod razmere uskladi jedinice. Kod procenta imenuj osnovicu pre računanja.",
  ]),
  area("cetvorouglovi", "Četvorougao", "Uglovi, posebne vrste, vektori i konstrukcije.", [angles, parallelogram, vectors, trapezoid, quadConstruction], "zbir-uglova-trougla", [
    "Podeli četvorougao dijagonalom na dva trougla i obrazloži zbir uglova.",
    "Uporedi dijagonale paralelograma, pravougaonika, romba, kvadrata i deltoida. Posebno proveri koje se polove.",
    "Konstruiši paralelogram nadovezivanjem vektora i trapez koristeći njegove osnovice i visinu.",
  ]),
  area("povrsine", "Površine trouglova i četvorouglova", "Premeštanje, udvostručavanje i rastavljanje figura.", [measurement, triangleArea, composite], "s6-trapez", [
    "Izaberi osnovicu i njenu visinu. Izvedi formulu premeštanjem dela ili dodavanjem druge kopije.",
    "Proveri da li su dijagonale normalne pre upotrebe polovine njihovog proizvoda.",
    "Uskladi jedinice, skiciraj delove i proveri da li je preklop ili otvor uračunat.",
  ]),
  area("zavrsnica", "Završna sistematizacija", "Poveži godišnje gradivo i izaberi jednu od tri završne provere.", [synthesis], "s6-delovi", [
    "Kod svake situacije zapiši poznate podatke i pitanje, pa odluči između izraza, jednačine, proporcije i geometrijske formule.",
    "Proveri koji podaci određuju rezultat. Ispitaj jedinice, znak i celobrojnost odgovora.",
  ]),
];

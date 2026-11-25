import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-paralelogram",
  title: "Paralelogram, pravougaonik, romb i kvadrat",
  month: "april",
  aim: "Prepoznaj kada svojstvo dijagonala određuje poseban paralelogram.",
  intro: "Zglobni okvir može da se iskosi, a da naspramne stranice ostanu paralelne. Posmatraj šta se pri tome menja.",
  rules: ["Paralelogram ima oba para naspramnih stranica paralelna. Naspramne stranice i uglovi jednaki su, susedni uglovi suplementni, a dijagonale se polove. Obrnuto, četvorougao čije se dijagonale uzajamno polove jeste paralelogram.","Pravougaonik je paralelogram sa pravim uglom: ima jednake dijagonale. Romb ima četiri jednake stranice: njegove dijagonale su normalne i polove uglove. Kvadrat ima obe grupe svojstava.","Jednake dijagonale same ne određuju pravougaonik. Prvo utvrdi da je figura paralelogram."],
  formulas: ["O=2(a+b)","O=4a"],
  skills: ["paralelnost", "obim-romba", "klasifikacija", "polovljenje", "obim-paralelograma", "suplement", "uslov", "simetrala", "zbir-i-razlika", "dijagonale", "presek"],
  worked: [{"question":"U ABCD ugao A ima 68°. Odredi ostala tri ugla paralelograma.","steps":["Zbog paralelnosti je ∠B=180°−68°=112°. Naspramni uglovi su jednaki.","Zato ∠C=68°, ∠D=112°. Zbir je 360°."]},{"question":"Pravougaonik ima AC=13 cm, a dijagonale se seku u S. Koliko je BS?","steps":["Dijagonale pravougaonika su jednake, pa je BD=13 cm.","Pošto se dijagonale paralelograma polove, BS=13:2=6,5 cm."]},{"question":"Romb ima obim 36 cm. Možemo li utvrditi dužinu dijagonale?","steps":["Sve četiri stranice su jednake, pa je stranica 36:4=9 cm.","Menjanjem ugla uz iste stranice menja se dijagonala. Sam obim nije dovoljan."]}]
}, [
  ["Koliko parova paralelnih stranica ima paralelogram?","2","Posmatraj obe naspramne stranice.","AB∥CD i BC∥DA daju dva para."],
  ["Obim romba stranice 4,5 cm iznosi koliko cm?","18","Sve stranice su jednake.","O=4a=4·4,5=18 cm."],
  ["Svaki kvadrat je i pravougaonik. Da li je tvrdnja tačna?",["Da","Ne"],"Proveri sve uglove.","Kvadrat ima četiri prava ugla, što ispunjava svojstvo pravougaonika."],
  ["Polovina dijagonale AC paralelograma ima 3 cm. Cela AC ima koliko cm?","6","Presek dijagonala je sredina.","AC=2·3=6 cm."],
  ["Paralelogram ima stranice 5,5 i 8 cm. Koliko cm je obim?","27","Ponovi svaki par stranica.","O=2(a+b)=2·13,5=27 cm."],
  ["Jedan ugao paralelograma ima 117°. Susedni ugao ima koliko stepeni?","63","Susedni uglovi dopunjuju se do opruženog.","180°−117°=63°."],
  ["Dijagonale paralelograma su normalne. Koju osobinu mora imati?",["Sve stranice jednake","Svi uglovi pravi","Dijagonale jednake"],"Presek dijagonala ih polovi.","Četiri pravougla trougla kod preseka imaju odgovarajuće jednake katete. Njihove hipotenuze su stranice romba."],
  ["Dijagonala romba polovi ugao od 106°. Koliko stepeni zaklapa s njegovom stranicom?","53","Uoči osu simetrije kroz to teme.","106°:2=53°."],
  ["Susedne stranice paralelograma razlikuju se za 3 cm, obim je 34 cm. Koliko cm je kraća?","7","Prvo nađi zbir dve susedne stranice.","a+b=17. Ako je b=a+3, onda 2a+3=17 i a=7."],
  ["Dijagonale četvorougla se uzajamno polove, jednake su i normalne. Koja je najuža sigurna klasifikacija?",["Kvadrat","Samo romb bez pravih uglova","Nužno nije romb"],"Iskoristi svako od tri svojstva.","Polovljenje daje paralelogram, jednakost pravougaonik, a normalnost romb. Istovremeno je kvadrat."],
  ["U pravougaoniku je AS=4 cm, S je presek dijagonala. Koliko cm ima BD?","8","Izračunaj AC pa ga uporedi sa BD.","AC=2·4=8 cm. Jednaka dijagonala BD ima 8 cm."],
  ["Koje svojstvo je dovoljno da četvorougao bude paralelogram?",["Dijagonale se uzajamno polove","Jedan pravi ugao","Dve jednake stranice"],"Potrebno je da obe dijagonale dele jedna drugu.","Kad dele jedna drugu napola, parovi podudarnih trouglova daju paralelne naspramne stranice."],
  ["U paralelogramu je obim 46 cm i a=9 cm. Kolika je b u cm?","14","Poluobim je zbir susednih stranica.","b=46:2−9=14 cm."],
  ["U rombu je polovina ugla A jednaka 37°. Ugao B ima koliko stepeni?","106","Vrati ceo ugao A.","A=74°, pa je B=180°−74°=106°."],
  ["Dijagonale paralelograma imaju 10 i 16 cm. Koliki je u cm zbir dužina od preseka do sva četiri temena?","26","Saberi četiri polovine.","5+5+8+8=26 cm."],
  ["Jedan ugao paralelograma je tri puta veći od susednog. Manji ima koliko stepeni?","45","Susedni uglovi daju 180°.","x+3x=180° daje x=45°."]
]);

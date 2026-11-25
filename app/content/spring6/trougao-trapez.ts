import { springLesson } from "./lesson";

export default springLesson({
  id: "s6-trougao-trapez",
  title: "Površina trougla i trapeza",
  month: "may",
  aim: "Sastavi dve podudarne kopije i izvedi formulu za površinu početne figure.",
  intro: "Dva ista trougla mogu da sastave paralelogram. Tako se pojava polovine u formuli može videti na crtežu.",
  rules: ["Okreni kopiju trougla za pola kruga oko sredine jedne stranice. Nastaje paralelogram iste visine i osnovice kao izabrana osnovica trougla. Jedan trougao ima polovinu te površine.","Dva podudarna trapeza, drugi okrenut za pola kruga oko sredine kraka, obrazuju paralelogram osnovice a+b i visine h. Površina jednog trapeza je proizvod njegove srednje linije i visine.","Visina uvek pripada izabranoj osnovici: meri se normalno do prave, čak i kada je podnožje izvan figure."],
  formulas: ["P=[[frac:1|2]]·a·h_a","P=[[frac:1|2]]·(a+b)·h","P=m·h"],
  skills: ["trougao", "katete", "srednja-linija", "odnos-površina", "visina", "jedinice", "obrnuti-račun", "klizanje-temena", "nepoznata-osnovica", "podela-površine", "skaliranje"],
  worked: [{"question":"Trougao ima osnovicu 9 cm i visinu 4 cm. Kolika je površina?","steps":["Dve kopije daju paralelogram površine 9·4=36 cm².","Jedan trougao ima P=36:2=18 cm²."]},{"question":"Trapez ima osnovice 6 i 10 cm i visinu 5 cm.","steps":["Paralelogram od dve kopije ima osnovicu 16 cm i visinu 5 cm, pa je njegova površina 80 cm².","P=(6+10)·5:2=40 cm². Isti račun je m·h=8·5."]},{"question":"Površina trougla je 30 cm², a visina 5 cm. Nađi osnovicu.","steps":["P=a·h:2 daje 30=a·5:2. Pomnoži obe strane sa 2.","60=5a, zato a=12 cm. Provera: 12·5:2=30."]}]
}, [
  ["Trougao ima osnovicu 6 cm i visinu 4 cm. Koliko cm² je P?","12","Udvostručena figura ima površinu 24 cm².","P=6·4:2=12 cm²."],
  ["Pravougli trougao ima katete 5 i 8 cm. Površina u cm²?","20","Katete su međusobno normalne.","Jedna kateta je osnovica, druga visina. P=5·8:2=20 cm²."],
  ["Srednja linija trapeza je 7 cm i visina 3 cm. Površina u cm²?","21","Srednja linija već sadrži polovinu zbira.","P=m·h=7·3=21 cm²."],
  ["Trougao i paralelogram imaju istu osnovicu i visinu. Koliki deo površine paralelograma zauzima trougao?","1/2","Koliko podudarnih trouglova je u sastavljenoj figuri?","Dva podudarna trougla daju ceo paralelogram. Jedan je polovina."],
  ["Površina trougla je 42 cm², osnovica 12 cm. Koliko cm ima visina?","7","Uvrsti podatke u P=a·h:2.","42=12h:2, pa je h=84:12=7 cm."],
  ["Trapez ima osnovice 1 dm i 6 cm i visinu 4 cm. Površina u cm²?","32","Izjednači jedinice.","1 dm=10 cm. P=(10+6)·4:2=32 cm²."],
  ["Trapez ima površinu 45 cm² i visinu 5 cm. Koliko cm je srednja linija?","9","Upotrebi P=m·h.","45=5m daje m=9 cm."],
  ["Pomeri vrh trougla paralelno osnovici, bez menjanja udaljenosti od nje. Kako se menja površina?",["Ostaje ista","Uvek raste","Uvek opada"],"Proveri šta ulazi u formulu.","Osnovica i visina su ostale iste, pa je isti i proizvod podeljen sa 2."],
  ["Trapez ima površinu 54 cm², visinu 6 cm i dužu osnovicu 12 cm. Koliko cm ima kraća?","6","Iz površine vrati zbir osnovica.","54=(12+b)·6:2 daje 18=12+b, pa b=6 cm."],
  ["Dve parcele su trouglovi sa zajedničkom visinom. Osnovice su u odnosu 3:5, zbir površina je 96 m². Manja površina u m²?","36","Isti činilac h:2 čuva odnos.","Osam delova je 96, pa jedan ima 12. Manja ima 3·12=36 m²."],
  ["Trougao ima površinu 18 m². Dupliraj i osnovicu i visinu. Koliko m² je nova površina?","72","Svaki činilac se udvostručio.","Novi proizvod je četiri puta veći. 4·18=72 m²."],
  ["Jednakokraki trapez ima osnovice 9 i 15 cm i visinu 2,5 cm. Njegova površina u cm²?","30","Jednakost krakova ne menja formulu.","P=(9+15)·2,5:2=30 cm²."],
  ["Trougao ima površinu 15 cm², a visinu 7,5 cm. Koliko cm ima odgovarajuća osnovica?","4","Nađi površinu dvostruke figure.","2P=30, pa a=30:7,5=4 cm."],
  ["Koji par daje iste površine pri jednakoj visini?",["Trougao osnovice 10 i trapez osnovica 3 i 7","Trougao osnovice 5 i trapez osnovica 3 i 7"],"Uporedi osnovice dvostrukih figura.","Za jednake visine uslov je osnovica trougla jednaka je zbiru osnovica trapeza. Važi 10=3+7."],
  ["Trapez ima osnovice 4 i 8 m. Visina se poveća sa 3 na 5 m. Površina se poveća za koliko m²?","12","Srednja linija ostaje ista.","m=6 m, promena visine je 2 m. Prirast je 6·2=12 m²."],
  ["Visina deli osnovicu trougla na odsečke 4 i 6 cm, a manji nastali trougao ima 10 cm². Koliko cm² ima ceo?","25","Iz manjeg trougla odredi visinu.","10=4h:2 daje h=5 cm. Ukupno P=(4+6)·5:2=25 cm²."]
]);


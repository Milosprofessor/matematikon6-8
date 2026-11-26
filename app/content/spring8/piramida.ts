import { unit } from "./unit";

export default unit({
  "id": "s8-piramida",
  "title": "Visine, mreža i površina piramide",
  "month": "january",
  "aim": "Razlikuj visinu tela, visinu bočne strane i bočnu ivicu. Odredi površinu iz mreže.",
  "intro": "Na modelu šatora oboji duž od vrha do poda, šav od vrha do ugla poda i najkraći put niz platno do ivice poda. Te tri duži obično imaju različite dužine.",
  "rules": [
    "Visina H je normalna na ravan osnove. Bočna ivica spaja vrh sa temenom osnove. Visina bočnog trougla normalna je na njegovu osnovicu. Kod pravilne piramide podnožje H je centar pravilnog mnogougla i sve bočne visine s su jednake.",
    "U mreži prepoznaj osnovu i po jedan trougao uz svaku njenu stranicu. U pravilnoj piramidi sabiranjem njihovih površina dobijaš M=O·s:2. Kada je osnova pravougaonik sa različitim stranicama, a vrh iznad centra, postoje dve različite bočne visine.",
    "Kada računaš površinu platna, proveri da li se traži i pod. Visina tela pripada unutrašnjosti i obično nije visina trougla u mreži."
  ],
  "formulas": [
    "P=B+M",
    "M=[[frac:O·s|2]]",
    "a²+b²=c²"
  ],
  "prerequisites": [
    "piramida-elementi",
    "prizma-mreza"
  ],
  "worked": [
    {
      "question": "Pravilna četvorostrana piramida ima a=6 cm i s=5 cm. Kolika je površina?",
      "steps": [
        "Osnova ima B=36 cm². Svaki od četiri bočna trougla ima površinu 6·5:2=15 cm².",
        "M=60 cm². Zatvoreno telo ima P=36+60=96 cm²."
      ]
    },
    {
      "question": "Kolika je H te piramide?",
      "steps": [
        "a²+b²=c². U preseku kroz vrh i sredinu ivice osnove katete su H i 3 cm, hipotenuza s=5 cm.",
        "H²+9=25, H²=16. Dužina je pozitivna pa je H=4 cm."
      ]
    },
    {
      "question": "Vrh je 12 cm iznad centra pravougaonika 10 cm puta 18 cm. Nađi omotač.",
      "steps": [
        "a²+b²=c². Za stranicu 18 cm rastojanje centra do nje je 5 cm. Visina strane je √(144+25)=13 cm. Za stranicu 10 cm rastojanje je 9 cm i visina je √225=15 cm.",
        "Dva trougla uz duže stranice daju 18·13 cm². Drugi par daje 10·15 cm². Omotač je 384 cm²."
      ]
    }
  ]
}, [
  ["Koliko trouglova čini omotač šestostrane piramide?","6","Svaka osnovna ivica nosi po jedan trougao.","Šest ivica osnove odgovara šest bočnih strana."],
  ["Koja duž je normalna na ravan osnove?",["Visina piramide","Bočna ivica","Svaka bočna visina"],"Pogledaj gde je podnožje normale iz vrha.","Rastojanje vrha od ravni meri visina H."],
  ["Pravilna trostrana piramida ima osnovnu ivicu 8 cm. Obim osnove u cm?","24","Osnova je jednakostranična.","O=3·8=24 cm."],
  ["Bočni trougao ima osnovicu 7 cm i odgovarajuću visinu 4 cm. Površina u cm²?","14","Upotrebi površinu trougla.","P=7·4:2=14 cm²."],
  ["Pravilna šestostrana piramida ima a=3 cm i s=7 cm. Omotač u cm²?","63","Razvij šest trouglova.","M=6·3·7:2=63 cm²."],
  ["Otvoren šator bez poda ima oblik pravilne četvorostrane piramide. a=4 m, s=3 m. Platno u m² bez otpada?","24","Računaj samo omotač.","Četiri trougla po 4·3:2=6 m² daju 24 m²."],
  ["Pravilna četvorostrana piramida ima a=16 cm i H=15 cm. Bočna visina u cm?","17","U osnovi preseka je pola ivice.","a²+b²=c². Katete 8 i 15 daju s²=64+225=289. Zato je s=17 cm."],
  ["Bočna strana pravilne piramide ima osnovicu 10 cm i s=12 cm. Bočna ivica u cm?","13","Visina deli osnovicu na polovine.","a²+b²=c². Katete 5 i 12 daju e²=25+144=169, pa e=13 cm."],
  ["Zatvorena pravilna četvorostrana piramida ima P=384 cm² i a=12 cm. Bočna visina u cm?","10","Oduzmi površinu osnove.","M=384−144=240 cm². Iz 240=48·s:2 dobijaš s=10 cm."],
  ["Pravougaoni pod meri 6 m puta 8 m. Vrh je 4 m iznad centra. Tačna visina strane uz ivicu 6 m u metrima?","4√2","Izmeri rastojanje centra do ivice duge 6 m.","a²+b²=c². Katete su 4 i 4, s²=32 pa je s=4√2 m."],
  ["Šta spaja bočna ivica?",["Vrh i teme osnove","Vrh i centar osnove","Sredine dve ivice"],"Prati granicu dve bočne strane.","Njihova zajednička ivica završava se u temenu osnovnog mnogougla."],
  ["Pravilna trostrana piramida ima obim osnove 30 cm i s=8 cm. Omotač u cm²?","120","Zajednička visina omogućava sabiranje osnovica.","M=O·s:2=30·8:2=120 cm²."],
  ["Pravilna četvorostrana piramida ima s=13 cm i H=12 cm. Kolika je osnovna ivica u cm?","10","Traži polovinu osnovne ivice.","a²+b²=c². Za polovinu t važi t²+144=169. t²=25 i t=5 cm. Ivica je 10 cm."],
  ["Koji deo mreže pravilne četvorostrane piramide je kvadrat?",["Osnova","Omotač","Bočna strana"],"Razlikuj centralni mnogougao od trouglova.","Osnovu okružuju četiri podudarna trougla."],
  ["Pravilna šestostrana piramida ima omotač 90 cm² i osnovnu ivicu 5 cm. Bočna visina u cm?","6","Obim osnove je 30 cm.","90=30·s:2. Množenje sa 2 i deljenje sa 30 daje s=6 cm."],
  ["Krov nad kvadratom stranice 12 m ima visinu 8 m iznad centra. Kolika je površina krova bez poda u m²?","240","Najpre odredi bočnu visinu.","a²+b²=c². Iz 6²+8²=s² dobija se s=10 m. M=48·10:2=240 m²."]
], ["strane","visina","obim","trougao","omotač","šator","presek","ivica","mreža","pravougaonik"],
  ["Bočna strana ima krake od 13 cm i osnovicu 24 cm. Visina na osnovicu u cm?","5","Visina prepolovljava osnovicu.","a²+b²=c². Katete su 12 i s, hipotenuza 13. Iz 144+s²=169 sledi s²=25 i s=5 cm."]);

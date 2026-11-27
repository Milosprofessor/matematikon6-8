import type {TaskDiagram} from './types';
export type LessonVisual={diagram:TaskDiagram;note?:string};
const v=(diagram:TaskDiagram,note?:string):LessonVisual=>({diagram,note});
const line=v({type:'number-line',min:-4,max:4,points:[{value:-3,label:'A'},{value:0,label:'O'},{value:3,label:'B'}]},'A(−3) i B(3) su suprotne tačke: obe su udaljene 3 jedinice od nule.');
const right=v({type:'pythagoras',variant:'right'},'Katete a i b grade prav ugao. Hipotenuza c je naspram pravog ugla: a²+b²=c².');
const tri=v({type:'triangle',variant:'angles'},'Uglovi α, β i γ pripadaju različitim temenima: α+β+γ=180°.');
const similar=v({type:'similarity',labels:{AB:'3',BC:'4',AC:'5',DE:'6',EF:'8',DF:'10'}},'Ako veličinu množiš sa k=2, sve odgovarajuće stranice postaju dvostruke; uglovi ostaju jednaki.');
const similarRotated=v({type:'similarity',variant:'rotated',labels:{AB:'3',BC:'4',AC:'5',DE:'6',EF:'8',DF:'10'}},'Rotacija menja položaj, a ne redosled odgovarajućih temena: A↔D, B↔E, C↔F.');
const space=v({type:'space',variant:'polyhedron'},'Telo prikazujemo u ravni crteža. Isprekidane linije predstavljaju zaklonjene ivice, a AC₁ je prostorna dijagonala.');
const visuals:Record<string,LessonVisual[]>={
 'q-poredak':[v({type:'number-line',min:-1,max:1,divisions:4,points:[{value:-0.75,label:'−0,75'},{value:-0.25,label:'−0,25'}]},'Broj −0,25 je desno od −0,75 i zato je veći.')],
 'q-zbir-razlika':[v({type:'number-line',min:-2,max:2,divisions:2,points:[{value:-1.5,label:'A'},{value:0.5,label:'B'}]},'Od A do B su četiri polukoraka, odnosno dve jedinice.')],
 'pitagora-obrat':[v({type:'pythagoras',variant:'right',labels:{a:'3',b:'4',c:'5'}},'Za stranice 3, 4 i 5 jednakost kvadrata potvrđuje pravi ugao.')],
 'specijalni-pravougli-trouglovi':[v({type:'pythagoras',variant:'equilateral'},'Visina jednakostraničnog trougla daje dva podudarna trougla sa uglovima 30°, 60° i 90°.')],
 'konstrukcija-iracionalnih-brojeva':[v({type:'pythagoras',variant:'right',labels:{a:'1',b:'2'}},'Katete dužina 1 i 2 daju hipotenuzu dužine √5. Prenesi je šestarom na brojnu pravu.')],
 'dijagonale-mnogougla':[v({type:'semester-figure',variant:'pentagon'},'Iz A polaze dve dijagonale: AC i AD. Duži AB i AE su stranice.')],
 'prizma-elementi':[space],
 'prizma-mreza':[v({type:'semester-figure',variant:'prism-net'},'Dva kvadrata su osnove. Četiri pravougaonika zajedno čine omotač.')],
 'prizma-zapremina':[space],
 'piramida-elementi':[v({type:'semester-figure',variant:'pyramid'},'SO je visina i normalna je na ravan osnove. O je centar kvadrata.')],

 'kratko-obnavljanje-5':[v({type:'pythagoras',variant:'rectangle'},'Za obim saberi sve četiri stranice: O=2(a+b). Dijagonala povezuje nesusedna temena.')],
 'skup-celih-brojeva':[line],'apsolutna-vrednost':[line],'uporedjivanje':[line],
 'sabiranje':[v({type:'number-line',min:-5,max:3,points:[{value:-2,label:'Početak'},{value:1,label:'Kraj'}],arrows:[{from:-2,to:1,label:'+3'}]},'Dodavanje pozitivnog broja pomera nas udesno; dodavanje negativnog ulevo.')],
 'oduzimanje':[v({type:'number-line',min:-4,max:4,points:[{value:-1,label:'A'},{value:2,label:'B'}],arrows:[{from:-1,to:2,label:'−(−3)=+3'}]},'Oduzimanje negativnog broja jednako je dodavanju njegovog suprotnog broja.')],
 'rastojanje':[v({type:'number-line',min:-5,max:4,points:[{value:-3,label:'A'},{value:2,label:'B'}],arrows:[{from:-3,to:2,label:'5 jedinica'}]},'Rastojanje je nenegativno: d(A,B)=|2−(−3)|=5.')],
 'sabiranje-oduzimanje':[line],
 'mnozenje':[v({type:'number-line',min:-6,max:1,points:[{value:0,label:'O'},{value:-6,label:'Kraj'}],arrows:[{from:0,to:-2},{from:-2,to:-4},{from:-4,to:-6}]},'Tri pomeranja po −2 daju 3·(−2)=−6.')],
 'skup-racionalnih-brojeva':[v({type:'number-line',min:-2,max:2,divisions:4,points:[{value:-.75,label:'−3/4'},{value:.75,label:'3/4'}]},'Razlomak −3/4 pripada istom jediničnom segmentu kao −1 i 0; smer rasta ostaje udesno.')],
 'apsolutna-vrednost-racionalnog':[v({type:'number-line',min:-2,max:2,points:[{value:-1.5,label:'−1,5'},{value:1.5,label:'1,5'}]},'Dva suprotna racionalna broja imaju jednaku apsolutnu vrednost: |−1,5|=|1,5|=1,5.')],
 'trougao-vrste':[v({type:'triangle',variant:'sides',labels:{a:'5',b:'5',c:'5'}},'Jednakostranični trougao ima sve tri stranice jednake.'),v({type:'triangle',variant:'sides',labels:{a:'6',b:'5',c:'5'}},'Jednakokraki trougao ima dva jednaka kraka; treća stranica je osnovica.')],
 'zbir-uglova-trougla':[tri,v({type:'triangle',variant:'angles',labels:{alpha:'90°',beta:'35°',gamma:'55°'}},'U pravouglom trouglu dva oštra ugla imaju zbir 90°.')],
 'uglovi-transverzala':[v({type:'triangle',variant:'external'},'Spoljašnji ugao i susedni unutrašnji čine opružen ugao. Spoljašnji je zbir dva nesusedna unutrašnja.'),v({type:'triangle',variant:'external',labels:{alpha:'60°',beta:'70°',gamma:'50°',external:'120°'}},'Ista veza važi i kada je trougao drugačijeg oblika: 120°=70°+50°.')],
 'uglovi-na-transverzali':[v({type:'parallel-angles',angle:65,relation:'corresponding'},'Saglasni uglovi imaju isti položaj kod oba preseka; uz p∥q važi α=β.'),v({type:'parallel-angles',angle:65,relation:'alternate'},'Naizmenični unutrašnji uglovi su između paralela, sa različitih strana transverzale; α=β.'),v({type:'parallel-angles',angle:65,relation:'interior'},'Unutrašnji uglovi sa iste strane transverzale imaju zbir 180°.')],
 'odnos-stranica-uglova':[v({type:'triangle',variant:'sides',labels:{a:'4',b:'5',c:'6'}},'Naspram a=BC je α kod A; naspram b=CA je β kod B; naspram c=AB je γ kod C. Većoj stranici odgovara veći ugao.'),v({type:'triangle',variant:'angles',labels:{alpha:'50°',beta:'65°',gamma:'65°'}},'Jednakim uglovima β=γ odgovaraju jednake naspramne stranice b=c.')],
 'nejednakost-trougla':[v({type:'segments',lengths:[3,4,8]},'Kada je zbir kraćih duži manji od najduže, krajevi se ne mogu spojiti u trougao.'),v({type:'triangle',variant:'sides',labels:{a:'4',b:'5',c:'6'}},'Za tri duži koje grade trougao važi |a−b|<c<a+b; jednakost nije dovoljna.')],
 'kratko-obnavljanje-6':[line],
 'kvadrat-racionalnog':[v({type:'square-area',side:'a',area:'P=a²'})],
 'kvadrati-brojeva':[v({type:'square-area',side:'4',area:'P=16'})],
 'realni-brojevi':[v({type:'number-line',min:-1,max:5,points:[{value:0,label:'0'},{value:1.5,label:'1,5'},{value:Math.PI,label:'π≈3,14'}]},'Realni brojevi obuhvataju racionalne i iracionalne brojeve; svi imaju mesto na brojnoj pravoj.')],
 'brojna-prava':[v({type:'number-line',min:-4,max:4,points:[{value:-Math.PI,label:'−π'},{value:2.5,label:'2,5'},{value:Math.PI,label:'π'}]},'Položaj određuje poredak: −4<−π<−3 i 3<π<4.')],
 'intervali':[v({type:'number-line',min:-4,max:4,points:[],interval:{start:-2,end:3,closedStart:true,closedEnd:false}},'Popunjena tačka uključuje −2, prazna izostavlja 3: [−2,3) predstavlja −2≤x<3.')],
 'kvadratni-koren':[v({type:'square-area',side:'a=√P',area:'P'},'Dužina stranice je nenegativna; koren vraća stranicu iz površine kvadrata.')],
 'odredjivanje-korena':[v({type:'square-area',side:'5',area:'P=25'},'Pozitivnu stranicu dobijamo proverom: 5²=25, pa je √25=5.')],
 'jednacine-kvadrat':[v({type:'number-line',min:-4,max:4,points:[{value:-3,label:'−3'},{value:3,label:'3'}]},'Jednačina x²=9 ima dva rešenja; oznaka √9 predstavlja samo nenegativan broj 3.')],
 'direktna-proporcionalnost':[v({type:'graph',k:2},'Stalni količnik y/x=k, x≠0, znači da svako množenje x istim brojem isto toliko puta menja y.')],
 'funkcija-ykx':[v({type:'graph',k:2},'Za k>0 grafik raste i prolazi kroz koordinatni početak.'),v({type:'graph',k:-1},'Za k<0 grafik opada. Poredak koordinata u paru (x,y) je važan.')],
 'proporcije':[v({type:'segments',lengths:[2,3,4,6],names:['a','b','c','d']},'Jednake razmere daju a:b=c:d; ovde je 2:3=4:6.')],
 'produzena-proporcija':[v({type:'segments',lengths:[2,3,5],names:['2t','3t','5t'],unit:'u'},'Sve tri veličine sadrže istu jedinicu t. Ukupno je 2t+3t+5t=10t.')],
 'primena-produzene-proporcije':[v({type:'segments',lengths:[2,3,5],names:['2t','3t','5t']},'Pre računanja poveži uslov o zbiru ili razlici sa odgovarajućim brojem zajedničkih delova.')],
 'pitagorina-teorema':[right,v({type:'pythagoras',variant:'right',labels:{a:'3',b:'4',c:'5'}},'Površine kvadrata nad katetama daju 3²+4²=5². Veza je vezana za prav ugao.')],
 'nepoznata-stranica-pravougli':[right,v({type:'pythagoras',variant:'right',labels:{a:'a',b:'12',c:'13'}},'Počni od a²+b²=c². Kada je nepoznata kateta a, oduzmi b² sa obe strane, pa uzmi pozitivan koren.')],
 'pitagora-pravougaonik-kvadrat':[v({type:'pythagoras',variant:'rectangle'},'Dijagonala i dve susedne stranice grade pravougli trougao: d²=a²+b².'),v({type:'pythagoras',variant:'square'},'U kvadratu su katete jednake: d²=2a².')],
 'pitagora-jednakokraki':[v({type:'pythagoras',variant:'isosceles'},'Visina deli osnovicu na dva jednaka dela: h²+(a/2)²=s².'),v({type:'pythagoras',variant:'equilateral'},'U jednakostraničnom trouglu i krak ima dužinu a: h=a√3/2.')],
 'pitagora-romb':[v({type:'pythagoras',variant:'rhombus'},'Dijagonale se polove i normalne su: (d₁/2)²+(d₂/2)²=a².'),v({type:'pythagoras',variant:'rhombus',labels:{d1:'6',d2:'8',a:'5'}},'Dijagonale 6 i 8 daju katete 3 i 4 u jednom od četiri pravougla trougla.')],
 'pitagora-trapez':[v({type:'pythagoras',variant:'trapezoid'},'U jednakokrakom trapezu vodoravna kateta je (a−b)/2.'),v({type:'pythagoras',variant:'right-trapezoid'},'U pravouglom trapezu uz kosi krak vodoravna kateta je a−b; druga je visina h.')],
 'kratko-obnavljanje-7':[right],
 'razmera-duzi':[v({type:'segments',lengths:[3,6],unit:'cm'},'Dužine meri istom jedinicom: a:b=3:6=1:2.'),v({type:'segments',lengths:[4,6],unit:'u'},'Promena zajedničke jedinice ne menja odnos dužina.')],
 'samerljive-duzi':[v({type:'segments',lengths:[4,6],unit:'u'},'Zajednička mera u staje ceo broj puta u obe duži: razmera je 4:6=2:3.'),v({type:'pythagoras',variant:'square',labels:{a:'a',d:'a√2'}},'Stranica i dijagonala kvadrata nisu samerljive: njihov količnik sadrži iracionalan broj √2.')],
 'proporcionalnost':[v({type:'segments',lengths:[3,5,6,10],names:['a','b','c','d']},'a:b=c:d; u proporciji međusobno odgovaraju a i c, odnosno b i d.')],
 'talesova-teorema':[v({type:'tales'},'Prati iste krake: AM odgovara AN, AB odgovara AC; MN∥BC je uslov.'),v({type:'tales',orientation:1},'Odnos ne zavisi od položaja trougla na ekranu. Traži paralelnost i odgovarajuće delove.'),v({type:'tales',variant:'rays'},'Na oba kraka uzmi delove od istog temena O: OA/OC=OB/OD.'),v({type:'tales',variant:'trapezoid'},'Paralelne osnovice trapeza povezuju delove dijagonala: AO/OC=BO/OD=AB/CD.')],
 'slicni-trouglovi':[similar,similarRotated],
 'stavovi-slicnosti':[similar,v({type:'similarity',variant:'mirrored'},'UU: dva jednaka ugla. SUS: dve proporcionalne stranice i jednak zahvaćeni ugao. SSS: tri proporcionalne stranice.')],
 'primene-slicnosti':[v({type:'shadow',objectLabel:'Štap',objectHeight:'1,5 m',objectShadow:'2 m',targetShadow:'6 m'},'Jednaki uglovi i paralelni sunčevi zraci daju jednak odnos visine i senke.'),similarRotated],
 'slicnost-pravougli':[v({type:'pythagoras',variant:'right-altitude'},'Visina CD deli pravougli trougao na dva trougla slična početnom: c=p+q, a²=cp, b²=cq, h²=pq.')],
 'snalazenje-u-prostoru':[space,v({type:'space',variant:'skew-lines'},'Prave AB i CC₁ nisu u istoj ravni. Neke linije koje se na slici preseku nemaju zajedničku prostornu tačku.')],
 'tacka-prava-ravan-osnove':[v({type:'space',variant:'point-line-plane'},'A∈p i p⊂α daju A∈α; tačka B je van ravni.'),v({type:'space',variant:'point-line-plane',labels:{case:'three'}},'Tri nekolinearne tačke A, B i C određuju tačno jednu ravan.')],
 'odnosi-pravih-ravni':[v({type:'space',variant:'skew-lines'},'Mimoilazne prave nemaju zajedničkih tačaka i nisu u istoj ravni.'),v({type:'space',variant:'skew-lines',labels:{relation:'parallel'}},'Paralelne prave pripadaju istoj ravni. To ih razlikuje od mimoilaznih.')],
 'dve-ravni':[v({type:'space',variant:'planes',labels:{relation:'parallel'}},'Dve različite paralelne ravni nemaju zajedničkih tačaka.'),v({type:'space',variant:'planes',labels:{relation:'intersect'}},'Presek dve različite neparalelne ravni je prava.')],
 'ortogonalnost':[v({type:'space',variant:'orthogonal'},'p⊥α kada je p normalna na dve prave q i r ravni koje se seku u njenom podnožju H.'),v({type:'space',variant:'projection',labels:{relation:'normal'}},'Normalna duž projektuje se u tačku. Rastojanje tačke od ravni merimo normalnom duži.')],
 'ortogonalna-projekcija':[v({type:'space',variant:'projection'},'Iz svakog kraja spusti normalu na ravan: dobijene tačke određuju projekciju duži.'),v({type:'space',variant:'projection',labels:{relation:'parallel'}},'Duž paralelna ravni ima projekciju jednake dužine.'),v({type:'space',variant:'projection',labels:{relation:'normal'}},'Kada je duž normalna na ravan, njena projekcija je jedna tačka.')],
 'poliedar':[space,v({type:'space',variant:'polyhedron',labels:{case:'tetrahedron'}},'Tetraedar ima 4 temena, 6 ivica i 4 strane. Za konveksni poliedar: V−E+F=2.')]
};
export const lessonVisuals=(id:string)=>visuals[id]??[];

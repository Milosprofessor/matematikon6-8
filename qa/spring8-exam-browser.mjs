import assert from "node:assert/strict";
import {createRequire} from "node:module";
import {createServer} from "vite";
const {chromium}=createRequire("/tmp/matematikon-e2e-deps/browser-test.js")("@playwright/test");
const vite=await createServer({configFile:false,appType:"custom",optimizeDeps:{noDiscovery:true},server:{middlewareMode:true,hmr:false}});
const {grades}=await vite.ssrLoadModule("/app/content/index.ts");
const {examSets}=await vite.ssrLoadModule("/app/content/spring8/exams.ts");
await vite.close();
const base=process.env.QA_URL??"http://127.0.0.1:4173/matematikon6-8/";
const browser=await chromium.launch({headless:true,...(process.env.QA_CHROME?{executablePath:process.env.QA_CHROME}:{channel:"chrome"}),args:["--no-sandbox"]});
try {
 const ctx=await browser.newContext({hasTouch:true,viewport:{width:360,height:800},reducedMotion:"reduce"});
 const page=await ctx.newPage(),errors=[];
 page.on("pageerror",e=>errors.push(String(e)));page.on("console",m=>{if(m.type()==="error")errors.push(m.text())});
 page.on("response",r=>{if(r.status()>=400)errors.push(r.status()+" "+r.url())});
 await page.goto(base);await page.getByRole("button",{name:"Lat",exact:true}).click();
 for(const g of grades)for(const a of g.areas){
   await page.goto(base+"#/oblast/"+g.id+"/"+a.id);
   await page.locator(".area-head h1").filter({hasText:a.title}).waitFor();
   for(const l of a.lessons){
     await page.goto(base+"#/lekcija/"+g.id+"/"+a.id+"/"+l.id);
     await page.locator(".lesson-title h1").filter({hasText:l.title}).waitFor();
     await page.locator(".task-card").first().waitFor({state:"attached"});
   }
 }
 console.log("133 dostupne lekcije i sve oblasti kroz direktne učeničke rute.");
 await page.goto(base+"#/razred/8");await page.getByRole("link",{name:/Priprema za završni ispit/}).click();
 await page.getByRole("heading",{name:"Podsetnik od petog do osmog razreda"}).waitFor();
 for(const set of examSets){
   await page.goto(base+"#/test/8/"+set.id);
   const sim=set.items.length===20;
   await page.getByRole("button",{name:sim?"Započni simulaciju":"Samostalno vežbanje"}).click();
   for(const [i,t] of set.items.entries()){
     const card=page.locator("section.content-card").filter({has:page.getByRole("heading",{name:(i+1)+". zadatak",exact:true})});
     if(t.kind==="choice")await card.getByRole("radio",{name:t.answer,exact:true}).check();
     else await card.getByRole("textbox").first().fill(t.answer);
     if(sim&&i===4){await page.reload();await page.getByRole("timer").waitFor();assert.equal(await page.locator(".e8-exam details").count(),0);}
   }
   await page.getByRole("button",{name:"Završi test"}).click();await page.getByRole("button",{name:"Potvrdi predaju"}).click();
   await page.getByRole("heading",{name:sim?"Rezultat 19,5 / 20":"Rezultat 10 / 10"}).waitFor();
   assert.equal(await page.locator(".e8-exam details").count(),set.items.length);
   await page.reload();await page.getByRole("heading",{name:/Rezultat/}).waitFor();
   if(sim){
     await page.getByRole("button",{name:"Ponovi test"}).click();
     await page.evaluate(id=>{
       const key="matematikon68-priprema-v1-"+id,s=JSON.parse(localStorage.getItem(key));
       s.end=Date.now()-1;localStorage.setItem(key,JSON.stringify(s));
     },set.id);
     await page.reload();await page.getByRole("heading",{name:"Rezultat 0 / 20"}).waitFor();
     assert.ok(await page.getByRole("textbox").first().isDisabled());
   }
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),set.id);
 }
 console.log("Dijagnostika i tri simulacije: odgovori, 19,5/20, pojedinačni postupci, ponovno učitavanje i istek roka.");
 await page.goto(base+"#/lekcija/8/s8-kupe/s8-kupa");
 const lab=page.locator(".spring-lab");
 for(const kind of ["prizma","piramida","valjak","kupa","lopta"]){
   await lab.getByLabel("Telo",{exact:true}).selectOption(kind);
   const modes=await lab.getByLabel("Prikaz",{exact:true}).locator("option").allTextContents();
   for(const mode of modes){
     await lab.getByLabel("Prikaz",{exact:true}).selectOption(mode);
     const range=lab.getByRole("slider",{name:"Tok animacije (%)",exact:true});
     if(await range.count()){await range.press("Home");await range.press("ArrowRight");await range.press("End");}
     if(kind==="lopta"&&mode==="presek"){const cut=lab.getByRole("slider",{name:/Rastojanje ravni/});await cut.press("End");await lab.getByText(/svodi na duž/).waitFor();}
     const svg=lab.locator("svg").first();
     assert.ok(!(await svg.innerHTML()).includes("NaN"),kind+" "+mode);
     assert.ok(await svg.boundingBox());
   }
 }
 await page.goto(base+"#/lekcija/8/s8-sistem/s8-sistemi");
 for(const kind of ["Vertikala","Poklapanje","Paralelne","Identitet","Nemogući uslov"]){
   await lab.getByLabel("Primer",{exact:true}).selectOption({label:kind});
   await lab.getByLabel("Metoda",{exact:true}).selectOption("eliminacija");await lab.getByRole("button",{name:"Sledeći korak"}).click();
 }
 await page.goto(base+"#/lekcija/8/s8-funkcije/s8-znak");
 await lab.getByRole("slider",{name:"Nagib k"}).focus();
 await lab.getByRole("slider",{name:"Nagib k"}).press("Home");
 for(let i=0;i<4;i++)await lab.getByRole("slider",{name:"Nagib k"}).press("ArrowRight");
 await lab.getByText(/Nema nulu/).waitFor();
 await lab.getByRole("slider",{name:"Odsečak n"}).press("ArrowLeft");await lab.getByText("Za svako x vrednost je nula.").waitFor();
 assert.deepEqual(errors,[]);
 console.log("Svi izbori tela, razvijanja i preseci, tangenta, pet položaja pravih i konstantna funkcija.");
}finally{await browser.close()}

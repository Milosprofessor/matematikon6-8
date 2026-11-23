import assert from "node:assert/strict";
import { createRequire } from "node:module";
// Isolated QA installation cannot force npm to recalculate the app lockfile.
const requireQa = createRequire("/tmp/matematikon-e2e-deps/browser-test.js");
const { chromium } = requireQa("@playwright/test");

const base = process.env.QA_URL || "http://127.0.0.1:4173/";
const cases = [
  {grade:6,month:"november",area:"racionalni-brojevi",id:"q-zapisi",title:"Ekvivalentni razlomci i decimalni zapis"},
  {grade:6,month:"december",area:"racionalni-brojevi",id:"q-deljenje-izrazi",title:"Deljenje i izrazi u skupu racionalnih brojeva"},
  {grade:7,month:"november",area:"pitagorina-teorema",id:"pitagora-obrat",title:"Obrat Pitagorine teoreme"},
  {grade:7,month:"december",area:"stepeni",id:"stepen-proizvoda",title:"Stepen proizvoda, količnika i stepena"},
  {grade:8,month:"november",area:"linearne-jednacine",id:"svodjenje-jednacina",title:"Jednačine koje se svode na linearne"},
  {grade:8,month:"december",area:"prizma",id:"prizma-zapremina",title:"Zapremina prave prizme i primene"}
];
const screens = [
  {name:"Android 360x800",width:360,height:800,touch:true},
  {name:"desktop 1366x768",width:1366,height:768,touch:false}
];
const browser = await chromium.launch({headless:true,channel:"chrome",args:["--no-sandbox"]});
let page;
const failures=[];
const results=[];
const url=hash=>base.replace(/\/$/,"/")+hash;
const waitFor=async selector=>page.locator(selector).first().waitFor({state:"visible",timeout:15000});
async function run(name,fn) {
  try {await fn();results.push("PASS "+name);console.log("PASS "+name)}
  catch(err){failures.push({name,error:String(err)});console.error("FAIL "+name,err);if(page){try{await page.screenshot({path:"/tmp/qa-"+(failures.length)+".png",fullPage:true,timeout:10000})}catch{}}}
}
try {
  for (const screen of screens) {
    const context=await browser.newContext({viewport:{width:screen.width,height:screen.height},hasTouch:screen.touch,deviceScaleFactor:1,reducedMotion:"reduce"});
    page=await context.newPage();
    const jsErrors=[];
    page.on("pageerror",e=>jsErrors.push(String(e)));
    await run(screen.name+" — 4 meseca i 3 razreda",async()=>{
      for(const grade of [6,7,8]){
        await page.goto(url("#/razred/"+grade),{waitUntil:"domcontentloaded"});
        await waitFor(".month-block");
        await page.waitForFunction(()=>document.querySelectorAll(".month-block").length===4);
        assert.equal(await page.locator(".month-block").count(),4);
        for(const block of await page.locator(".month-block").all())
          assert.ok(await block.locator(".area-card").count()>0,"Prazan mesec u razredu "+grade);
      }
    });
    for(const row of cases){
      await run(screen.name+" — "+row.grade+". "+row.month+" / "+row.id,async()=>{
        await page.goto(url("#/oblast/"+row.grade+"/"+row.area+"/"+row.month),{waitUntil:"domcontentloaded"});
        await waitFor(".area-head h1");
        await page.waitForFunction(()=>document.querySelectorAll(".lesson-card").length>0);
        assert.ok(await page.locator(".lesson-card").count()>0);
        await page.goto(url("#/lekcija/"+row.grade+"/"+row.area+"/"+row.id),{waitUntil:"domcontentloaded"});
        await waitFor(".lesson-title h1");
        await waitFor(".october-work-aside .task-card");
        assert.ok((await page.locator(".lesson-title h1").innerText()).length>4);
        assert.equal(await page.locator(".task-top").first().innerText().then(x=>/Zadatak 1 od 10|Задатак 1 од 10/.test(x)),true);
        assert.equal(await page.locator(".lesson-task-jump").count(),1);
        await page.locator(".lesson-task-jump").click();
        assert.equal(await page.evaluate(()=>document.activeElement?.classList?.contains("october-work-aside")),true);
        await page.locator(".script-switch button").filter({hasText:"Lat"}).click();
        await page.waitForFunction(()=>document.querySelector('.script-switch button:last-child')?.getAttribute('aria-pressed')==='true');
        const latin=(await page.locator(".lesson-title h1").innerText()).toLowerCase();
        assert.ok(latin.includes(row.title.toLowerCase().slice(0,8)),"Latinica: "+latin);
        await page.locator(".script-switch button").filter({hasText:"Ћир"}).click();
        await page.waitForFunction(()=>document.querySelector('.script-switch button:first-child')?.getAttribute('aria-pressed')==='true');
        const overflowing=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
        assert.ok(overflowing<=5,"Horizontalno prelivanje "+overflowing+"px");
        const text=await page.locator("main").innerText();
        assert.ok(!text.includes("[[frac:")&&!text.includes("[[sqrt:"));
      });
    }
    await run(screen.name+" — nema neuhvaćenih JavaScript grešaka",async()=>{assert.deepEqual(jsErrors,[])});
    await context.close();
  }
  const context=await browser.newContext({viewport:{width:360,height:800},hasTouch:true});
  page=await context.newPage();
  await run("6. razred — deset zadataka, pogrešni odgovori, pomoć, osvežavanje i napredak",async()=>{
    await page.goto(url("#/lekcija/6/racionalni-brojevi/q-zapisi"),{waitUntil:"domcontentloaded"});
    await waitFor(".october-work-aside .task-card");
    await page.locator(".script-switch button").filter({hasText:"Lat"}).click();
    await page.waitForFunction(()=>document.querySelector(".script-switch button:last-child")?.getAttribute("aria-pressed")==="true");
    const answers=[
      {input:"5"},{input:"-0,6"},{choice:0},{input:"21"},{input:"-5"},
      {choice:0},{choice:2},{input:"16"},{choice:0},{input:"-9"}
    ];
    for(let i=0;i<answers.length;i++){
      const task=page.locator(".october-work-aside .task-card");
      await task.waitFor({state:"visible"});
      assert.equal(await task.getAttribute("data-task-id"),"q-zapisi-"+(i+1));
      if(i===1){
        await task.locator(".answer-input input").fill("999999");
        await task.getByRole("button",{name:"Proveri"}).click();
        await task.getByRole("button",{name:"Proveri"}).click();
        await task.getByRole("button",{name:"Nagoveštaj"}).click();
        await task.getByRole("button",{name:"Prikaži postupak"}).click();
        await task.getByRole("button",{name:"Razumem, nastavi"}).click();
      } else if("input" in answers[i]){
        await task.locator(".answer-input input").fill(answers[i].input);
        await task.getByRole("button",{name:"Proveri"}).click();
        await task.locator(".feedback.good").waitFor();
      }else{
        await task.locator(".choices button").nth(answers[i].choice).click();
        await task.getByRole("button",{name:"Proveri"}).click();
        await task.locator(".feedback.good").waitFor();
      }
      await page.getByRole("button",{name:i===9?"Pogledaj rezultat":"Sledeći zadatak"}).click();
      if(i===4){
        await page.reload({waitUntil:"domcontentloaded"});
        await waitFor(".october-work-aside .task-card");
        assert.equal(await page.locator(".october-work-aside .task-card").getAttribute("data-task-id"),"q-zapisi-6");
      }
    }
    await waitFor(".work-result");
    const stored=await page.evaluate(()=>JSON.parse(localStorage.getItem("matematikon68-progress-v1-6")||"{}"));
    assert.ok(stored.completed.includes("q-zapisi"));
    assert.equal(stored.lessonWork["q-zapisi"].current,10);
    assert.ok(stored.lessonWork["q-zapisi"].tasks["q-zapisi-2"].attempts>=2);
    await page.reload({waitUntil:"domcontentloaded"});
    await waitFor(".work-result");
    assert.equal(await page.locator(".work-result").count(),1);
  });
  await context.close();
} finally {await browser.close();}
console.log(JSON.stringify({total:results.length+failures.length,passed:results.length,failed:failures.length,results,failures},null,2));
if(failures.length) process.exitCode=1;

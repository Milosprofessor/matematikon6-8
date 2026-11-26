import assert from "node:assert/strict";
import {createRequire} from "node:module";
import {createServer} from "vite";
const {chromium} = createRequire("/tmp/matematikon-e2e-deps/browser-test.js")("@playwright/test");
const base=process.env.QA_URL || "http://127.0.0.1:4173/";
const modules=await createServer({configFile:false,appType:"custom",optimizeDeps:{noDiscovery:true},server:{middlewareMode:true,hmr:false}});
const {spring8Areas:springAreas}=await modules.ssrLoadModule("/app/content/spring8/index.ts");
const {checks8:springChecks}=await modules.ssrLoadModule("/app/content/spring8/checks.ts");
await modules.close();
const browser=await chromium.launch({headless:true,...(process.env.QA_CHROME?{executablePath:process.env.QA_CHROME}:{channel:"chrome"}),args:["--no-sandbox"]});
const profiles=[
  {name:"telefon",width:360,height:800,touch:true},
  {name:"tablet",width:768,height:1024,touch:true},
  {name:"tabla",width:1920,height:1080,touch:true},
];
const progressKey="matematikon68-progress-v1-8";

try {
  for(const profile of profiles){
    const context=await browser.newContext({viewport:{width:profile.width,height:profile.height},hasTouch:profile.touch,reducedMotion:"reduce"});
    const page=await context.newPage();
    const errors=[];
    page.on("pageerror",e=>errors.push(e.message));
    page.on("console",m=>{if(m.type()==="error")errors.push(m.text())});
    page.on("response",r=>{if(r.status()>=400)errors.push(r.status()+" "+r.url())});
    await page.goto(base+"#/razred/8");
    await page.locator(".month-block").first().waitFor();
    await page.getByRole("button",{name:"Lat",exact:true}).click();
    assert.equal(await page.locator(".month-block").count(),10);
    for(const area of springAreas){
      for(const lesson of area.lessons){
        await page.goto(base+"#/razred/8");
        const month=page.locator(".month-block").filter({has:page.locator(".month-heading",{hasText:({january:"JANUAR",february:"FEBRUAR",march:"MART",april:"APRIL",may:"MAJ",june:"JUN"})[lesson.month]})});
        await month.getByRole("button").filter({has:page.getByRole("heading",{name:area.title,exact:true})}).click();
        await page.locator(".lesson-card").filter({has:page.getByRole("heading",{name:lesson.title,exact:true})}).click();
        await page.locator(".lesson-title h1").filter({hasText:lesson.title}).waitFor();
        assert.equal(await page.locator(".learn-column summary").filter({hasText:"Rešeni primer"}).count(),3);
        const lab=page.locator(".spring-lab");
        if(await lab.count()){
          for(const input of await lab.getByRole("slider").all()){
            await input.focus();await input.press("End");await input.press("Home");
          }
          for(const button of await lab.getByRole("button").all()) await button.click();
          assert.ok(await lab.evaluate(el=>[...el.querySelectorAll("svg text")].every(text=>{
            const box=text.getBBox(),v=text.ownerSVGElement.viewBox.baseVal;
            return box.x>=v.x-1&&box.x+box.width<=v.x+v.width+1&&box.y>=v.y-1&&box.y+box.height<=v.y+v.height+1;
          })),lesson.id+" oznake van SVG");
        }
        assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),lesson.id+" horizontalno prelivanje");
        await page.getByRole("button",{name:"Pređi na zadatke"}).click();
        assert.ok(await page.locator(".october-work-aside").evaluate(el=>document.activeElement===el));
        assert.equal(await page.locator(".task-card").getAttribute("data-task-id"),lesson.id+"-1");
        await page.getByRole("button",{name:"Mini-provera lekcije"}).click();
        await page.getByRole("heading",{name:"Mini-provera • "+lesson.title}).waitFor();
        await page.getByRole("button",{name:"Nazad na lekciju"}).click();
        await page.locator(".lesson-title").waitFor();
      }
    }
    console.log(profile.name+": 12 lekcija iz mesečnog menija, tri primera, povratak, crteži, dodir i širina");
    if(profile.name==="telefon"){
      const submit=async(task, entered=task.answer)=>{
        const card=page.locator('[data-task-id="'+task.id+'"]');
        if(task.kind==="choice") await card.locator(".choices button").nth(task.choices.indexOf(entered)).click();
        else await card.getByRole("textbox").fill(entered);
        await card.getByRole("button",{name:"Proveri",exact:true}).click();
      };
      // Complete all classroom items in a lesson. Preserve the wrong attempt on reload.
      const lesson=springAreas[0].lessons[0];
      await page.goto(base+"#/lekcija/8/s8-preseci/"+lesson.id);
      const first=lesson.tasks[0];
      await submit(first,"-150");
      await page.locator(".feedback.bad").waitFor();
      await page.reload();
      await page.locator(".feedback.bad").waitFor();
      for(const [i, task] of lesson.tasks.slice(0,10).entries()){
        await submit(task);
        await page.getByRole("button",{name:i===9?"Pogledaj rezultat":"Sledeći zadatak",exact:true}).click();
      }
      assert.ok((await page.locator(".work-result").textContent()).includes("9/10"));
      await page.reload();await page.locator(".work-result").waitFor();
      // Every new assessment is run to completion; verify persisted scoring and solutions.
      for(const check of springChecks.values()){
        await page.goto(base+"#/test/8/"+check.id);
        await page.getByRole("button",{name:"Počni proveru",exact:true}).click();
        for(const [i,task] of check.items.entries()){
          if(i===1&&check.id==="s8-godisnja"){await page.reload();}
          await submit(task,task.answer==="56/3"?"112/6":task.answer);
          await page.getByRole("button",{name:i+1===check.items.length?"Pogledaj rezultat":"Sledeći zadatak",exact:true}).click();
        }
        await page.getByRole("heading",{name:"Rezultat: "+check.items.length+"/"+check.items.length,exact:true}).waitFor();
        assert.equal(await page.locator("details.lesson-explore").count(),check.items.length);
        const record=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),progressKey);
        assert.equal(record.tests[check.id].last,check.items.length);
        assert.ok(record.completed.includes(lesson.id));
      }
      console.log("telefon: 12 mini-provera, osam oblasti i tri završne provere, rešenja i sačuvani bodovi");
    }
    await page.getByRole("button",{name:"Ћир",exact:true}).click();
    await page.goto(base+"#/lekcija/8/s8-preseci/s8-prizma");
    await page.getByRole("heading",{name:"Дијагонале, пресеци и основе правих призми",level:1,exact:true}).waitFor();
    await page.locator(".spring-lab svg").first().waitFor();
    assert.deepEqual(errors,[],profile.name+" konzola/mreža");
    await context.close();
  }
} finally {await browser.close()}

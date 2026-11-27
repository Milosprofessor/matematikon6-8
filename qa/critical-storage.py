"""Samo izolovan Chromium sa sintetičkim profilima. Pokrenuti iz direktorijuma sa repo/."""
import json,os,tempfile,threading,functools,http.server,time
from pathlib import Path
from playwright.sync_api import sync_playwright
out=Path(os.environ.get('QA_RESULTS','/tmp/matematikon-phase1-results'));out.mkdir(exist_ok=True)
class Silent(http.server.SimpleHTTPRequestHandler):
 def log_message(self,*args): pass
srv=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Silent,directory='repo/dist/pages'))
threading.Thread(target=srv.serve_forever,daemon=True).start()
base='http://127.0.0.1:'+str(srv.server_port)+'/'
key='matematikon68-progress-v1-6'
A='#/lekcija/6/celi-brojevi/apsolutna-vrednost'
B='#/lekcija/6/celi-brojevi/sabiranje'
outcomes={}
with sync_playwright() as pw, tempfile.TemporaryDirectory() as profile:
 kw={'executable_path':os.environ.get('CHROME','/tmp/chromium'),'args':['--no-sandbox','--disable-dev-shm-usage','--disable-gpu']}
 def launch(): return pw.chromium.launch_persistent_context(profile,**kw)
 ctx=launch();p=ctx.new_page();p.goto(base);p.evaluate("localStorage.setItem('matematikon68-script','latn')");p.goto(base+A);p.locator('.task-card').wait_for()
 def get(page):return page.evaluate('(k)=>JSON.parse(localStorage.getItem(k))',key)
 def edit(page,val):
  card=page.locator('.task-card');card.wait_for()
  if card.locator('input').count():card.locator('input').fill(val)
  else:card.locator('.choices button').first.click()
  page.wait_for_timeout(80)
 edit(p,'17');first=get(p);p.reload();p.locator('.task-card').wait_for();outcomes['refresh']=get(p)==first
 ctx.close();ctx=launch();p=ctx.new_page();p.goto(base+A);p.locator('.task-card').wait_for();outcomes['restart']=get(p)==first
 b=ctx.new_page();b.goto(base+B);b.locator('.task-card').wait_for();edit(b,'7');old=get(b);edit(p,'23');updated=get(p)
 outcomes['twoTabs']={'before':list(old['lessonWork']),'after':list(updated['lessonWork']),'lost':list(set(old['lessonWork'])-set(updated['lessonWork']))}
 p.goto(base+'#/razred/7');p.locator('h1').wait_for();outcomes['afterGradeChange']=get(p)==updated
 p.goto(base+'#/test/8/s8-simA');p.get_by_text('Započni simulaciju',exact=True).click();p.locator('[role=timer]').wait_for();outcomes['examActive']={'timer':p.get_by_role('timer').inner_text(),'hints':p.get_by_text('Nagoveštaj',exact=True).count()};p.locator('input[type=radio]').first.check();p.reload();p.get_by_role('timer').wait_for();outcomes['examRestart']=p.locator('input:checked').count()
 p.evaluate("""()=>{const k='matematikon68-priprema-v1-s8-simA';const s=JSON.parse(localStorage.getItem(k));s.end=Date.now()-1000;localStorage.setItem(k,JSON.stringify(s))}""");p.reload();p.get_by_text('Ponovi test',exact=True).wait_for();outcomes['expiry']=p.locator('h2').first.inner_text()
 p.evaluate("(k)=>localStorage.setItem(k,'{bad')",key);p.goto(base+A);p.locator('.task-card').wait_for();outcomes['corrupt']=p.evaluate('(k)=>localStorage.getItem(k)',key);assert outcomes['corrupt']=='{bad'
 ctx.close()
 for mode in ['blockedRead','quota','wrongShape']:
  ctx=launch();p=ctx.new_page();errs=[];p.on('pageerror',lambda e:errs.append(str(e)))
  if mode=='blockedRead':p.add_init_script("Storage.prototype.getItem=function(){throw new DOMException('Blocked','SecurityError')}")
  if mode=='quota':p.add_init_script("Storage.prototype.setItem=function(){throw new DOMException('Full','QuotaExceededError')}")
  if mode=='wrongShape':p.add_init_script("localStorage.setItem('matematikon68-progress-v1-6',JSON.stringify({knowledgeAttempts:[null]}))")
  p.goto(base+(A if mode!='wrongShape' else '#/razred/6'));p.wait_for_timeout(450);outcomes[mode]={'headings':p.locator('h1').all_text_contents(),'errors':errs,'body':p.locator('body').inner_text()[:180]};ctx.close()
assert outcomes['twoTabs']['lost']==[],outcomes['twoTabs']
for mode in ['blockedRead','quota','wrongShape']:
 assert outcomes[mode]['headings'],outcomes[mode]
 assert not outcomes[mode]['errors'],outcomes[mode]
srv.shutdown();(out/'browser.json').write_text(json.dumps(outcomes,ensure_ascii=False,indent=2));print(outcomes)

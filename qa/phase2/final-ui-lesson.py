"""Additional direct lesson UI checks, synthetic saved position (no fabricated results)."""
import json,os,pathlib,re
from playwright.sync_api import sync_playwright
root=pathlib.Path(__file__).parent
plan=json.loads((root/'final-ui'/'plan.json').read_text())
lessons={l['id']:l for g in (7,8) for l in json.loads((root/f'g{g}-extracted.json').read_text())['lessons']}
out=root/'final-ui-verified'
rows=[]
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=os.environ['QA_CHROME'],args=['--no-sandbox','--disable-dev-shm-usage'])
 for t in [x for x in plan if 'work' in x['sources']]:
  ctx=browser.new_context(viewport={'width':1366,'height':768});page=ctx.new_page();page.set_default_timeout(5000)
  id=t['id'];lesson=t['lesson'];key='matematikon68-progress-v1-'+str(t['grade']);ids=lessons[lesson]['work']
  seed={'lessonWork':{lesson:{'taskIds':ids,'current':ids.index(id),'run':0,'tasks':{}}}}
  url=os.environ.get('QA_URL','http://127.0.0.1:4201/')+'#/lekcija/'+str(t['grade'])+'/'+t['area']+'/'+lesson
  try:
   # Set only a synthetic saved cursor on initial navigation; do not overwrite on reload.
   page.goto(url);page.evaluate("([k,v])=>{localStorage.setItem('matematikon68-script','latn');localStorage.setItem(k,v)}",[key,json.dumps(seed)])
   page.reload();card=page.locator(f'.task-card[data-task-id="{id}"]');card.wait_for()
   if t['kind']=='input':card.locator('input').fill(t['answer'])
   else:card.locator('.choices button').nth(t['choices'].index(t['answer'])).click()
   card.get_by_role('button',name='Proveri',exact=True).click()
   assert card.locator('.feedback.good').count()==1
   page.wait_for_function("([k,id])=>JSON.parse(localStorage.getItem(k)||'{}').knowledgeAttempts?.some(a=>a.taskId===id&&a.firstCorrect)",arg=[key,id])
   page.reload();card.wait_for();assert card.locator('.feedback.good').count()==1
   rows.append({'id':id,'finding':t['finding'],'route':url.split('#')[1],'status':'pass','first_correct':True,'reload_retained':True})
  except Exception as e:rows.append({'id':id,'finding':t['finding'],'status':'fail','error':str(e)})
  print(rows[-1],flush=True);(out/'lesson.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2));ctx.close()
 browser.close()

"""Actual final area assessment, synthetic progress only, desktop and touch."""
import sys,functools,http.server,json,os,pathlib,threading
from playwright.sync_api import sync_playwright
root=pathlib.Path(__file__).resolve().parents[3]
area,last=sys.argv[1:]
out=root/'qa/phase2c/grade6'/last
d=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
bank={t['id']:t for t in d['bank'] if 'test:'+area in t['sources']}
total=len(bank)
assert total>0
completed=[l['id'] for l in d['lessons'] if l['area']==area]
assert completed
class Silent(http.server.SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
srv=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Silent,directory=str(root/'dist/pages')))
threading.Thread(target=srv.serve_forever,daemon=True).start()
url=f'http://127.0.0.1:{srv.server_port}/#/test/6/{area}'
key='matematikon68-progress-v1-6';rows=[]
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=os.environ['QA_CHROME'],args=['--no-sandbox','--disable-dev-shm-usage'])
 for width,height,touch in [(1366,768,False),(390,844,True)]:
  ctx=browser.new_context(viewport={'width':width,'height':height},has_touch=touch,is_mobile=touch)
  page=ctx.new_page()
  page.add_init_script("localStorage.setItem('matematikon68-script','latn'); if(!localStorage.getItem("+json.dumps(key)+"))localStorage.setItem("+json.dumps(key)+","+json.dumps(json.dumps({'completed':completed,'tests':{'synthetic-prior':{'last':3,'best':4,'total':5}},'knowledgeAttempts':[]}))+")")
  page.goto(url); page.get_by_role('button',name='Počni proveru').wait_for()
  assert str(total) in page.locator('.test-intro').inner_text()

  click=lambda l:l.tap() if touch else l.click()
  click(page.get_by_role('button',name='Počni proveru'));seen=[]
  for i in range(total):
   card=page.locator('.task-card');card.wait_for()
   id=card.get_attribute('data-task-id');assert id not in seen and id in bank;seen.append(id);t=bank[id]
   if t['kind']=='choice':click(card.locator('.choices button').nth(t['choices'].index(t['answer'])))
   else:card.locator('input').fill(t['answer'])
   click(card.get_by_role('button',name='Proveri',exact=True))
   click(page.get_by_role('button',name='Sledeći zadatak' if i<total-1 else 'Pogledaj rezultat',exact=True))
  page.get_by_role('heading',name=f'Rezultat: {total}/{total}',exact=True).wait_for()
  page.wait_for_function("([k,a,n])=>JSON.parse(localStorage.getItem(k)||'{}').tests?.[a]?.best===n",arg=[key,area,total])
  progress=page.evaluate("(k)=>JSON.parse(localStorage.getItem(k))",key)
  assert set(progress['completed'])==set(completed) and progress['tests']['synthetic-prior']=={'last':3,'best':4,'total':5} and len(progress['knowledgeAttempts'])==total

  page.reload();page.get_by_text('Najbolji rezultat:',exact=False).wait_for()
  assert f'{total}/{total}' in page.get_by_text('Najbolji rezultat:',exact=False).inner_text()
  rows.append({'width':width,'ids':seen,'score':f'{total}/{total}','progress_preserved':True,'best_after_reload':True,'status':'pass'})
  ctx.close()
 browser.close()
srv.shutdown();(out/'area-browser.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
print('2 complete area assessments; all tasks; score and prior progress preserved')

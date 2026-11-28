"""Actual final area assessment, synthetic progress only, desktop and touch."""
import functools,http.server,json,os,pathlib,threading
from playwright.sync_api import sync_playwright
root=pathlib.Path(__file__).resolve().parents[3]
out=root/'qa/phase2c/grade6/nejednakost-trougla'
d=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
bank={t['id']:t for t in d['bank'] if 'test:trougao' in t['sources']}
assert len(bank)==7
completed=[l['id'] for l in d['lessons'] if l['area']=='trougao']
assert len(completed)==6
class Silent(http.server.SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
srv=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Silent,directory=str(root/'dist/pages')))
threading.Thread(target=srv.serve_forever,daemon=True).start()
url=f'http://127.0.0.1:{srv.server_port}/#/test/6/trougao'
key='matematikon68-progress-v1-6';rows=[]
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=os.environ['QA_CHROME'],args=['--no-sandbox','--disable-dev-shm-usage'])
 for width,height,touch in [(1366,768,False),(390,844,True)]:
  ctx=browser.new_context(viewport={'width':width,'height':height},has_touch=touch,is_mobile=touch)
  page=ctx.new_page()
  page.add_init_script("localStorage.setItem('matematikon68-script','latn'); if(!localStorage.getItem("+json.dumps(key)+"))localStorage.setItem("+json.dumps(key)+","+json.dumps(json.dumps({'completed':completed,'tests':{'synthetic-prior':{'last':3,'best':4,'total':5}},'knowledgeAttempts':[]}))+")")
  page.goto(url); page.get_by_role('button',name='Počni proveru').wait_for()
  assert '7 zadataka' in page.locator('.test-notes').inner_text()
  assert 'napredni' in page.locator('.test-notes').inner_text()
  click=lambda l:l.tap() if touch else l.click()
  click(page.get_by_role('button',name='Počni proveru'));seen=[]
  for i in range(7):
   card=page.locator('.task-card');card.wait_for()
   id=card.get_attribute('data-task-id');assert id not in seen and id in bank;seen.append(id);t=bank[id]
   if t['kind']=='choice':click(card.locator('.choices button').nth(t['choices'].index(t['answer'])))
   else:card.locator('input').fill(t['answer'])
   click(card.get_by_role('button',name='Proveri',exact=True))
   if i<6:page.get_by_role('heading',name=f'Zadatak {i+2} od 7',exact=True).wait_for()
  page.get_by_role('heading',name='Rezultat: 7/7',exact=True).wait_for()
  page.wait_for_function("k=>JSON.parse(localStorage.getItem(k)||'{}').tests?.['trougao']?.best===7",arg=key)
  progress=page.evaluate("(k)=>JSON.parse(localStorage.getItem(k))",key)
  assert set(progress['completed'])==set(completed) and progress['tests']['synthetic-prior']=={'last':3,'best':4,'total':5} and len(progress['knowledgeAttempts'])==7
  page.locator('.test-result').screenshot(path=str(out/f'area-result-{width}.png'))
  page.reload();page.get_by_text('Najbolji rezultat:',exact=False).wait_for()
  assert '7/7' in page.locator('.best').inner_text()
  rows.append({'width':width,'ids':seen,'score':'7/7','progress_preserved':True,'best_after_reload':True,'status':'pass'})
  ctx.close()
 browser.close()
srv.shutdown();(out/'area-browser.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
print('2 complete area assessments; 14 tasks; score and prior progress preserved')

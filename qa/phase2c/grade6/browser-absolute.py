"""Real Pages UI checks, fresh synthetic Chromium contexts."""
import json,os,pathlib,functools,http.server,threading
from playwright.sync_api import sync_playwright
root=pathlib.Path(__file__).resolve().parents[3]
out=root/'qa/phase2c/grade6/apsolutna-vrednost'
d=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
bank={t['id']:t for t in d['bank']};lesson=next(l for l in d['lessons'] if l['id']=='apsolutna-vrednost')
class Silent(http.server.SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
srv=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Silent,directory=str(root/'dist/pages')))
threading.Thread(target=srv.serve_forever,daemon=True).start()
url=f'http://127.0.0.1:{srv.server_port}/#/lekcija/6/celi-brojevi/apsolutna-vrednost'
rows=[]
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=os.environ['QA_CHROME'],args=['--no-sandbox','--disable-dev-shm-usage'])
 for width,height,touch in [(1366,768,False),(390,844,True)]:
  ctx=browser.new_context(viewport={'width':width,'height':height},has_touch=touch,is_mobile=touch)
  page=ctx.new_page();page.add_init_script("localStorage.setItem('matematikon68-script','latn')")
  page.goto(url);page.locator('.task-card').wait_for()
  def click(l):l.tap() if touch else l.click()
  examples=page.locator('.learn-column details').filter(has=page.locator('summary',has_text='Rešeni primer'))
  assert examples.count()==3
  for detail in examples.all():
   if detail.get_attribute('open') is None:click(detail.locator('summary'))
  text=page.locator('.learn-column').inner_text()
  assert '|−7|' in text and 'x=−5' in text and 'nema rešenja' in text
  assert page.locator('.learn-column svg').count()>0
  page.locator('.learn-column').screenshot(path=str(out/f'lesson-{width}.png'))
  for id in lesson['work']:
   card=page.locator('.task-card');assert card.get_attribute('data-task-id')==id;t=bank[id]
   if id=='6-2c':
    card.locator('input').fill('9999')
    for _ in range(2):click(card.get_by_role('button',name='Proveri',exact=True))
    assert card.locator('.feedback.bad').count()==1
    click(card.get_by_role('button',name='Nagoveštaj'));click(card.get_by_role('button',name='Prikaži postupak'))
    assert 'x = −9' in card.locator('.solution').inner_text()
    card.screenshot(path=str(out/f'rectangle-{width}.png'))
   if t['kind']=='choice':click(card.locator('.choices button').nth(t['choices'].index(t['answer'])))
   else:card.locator('input').fill(t['answer'])
   click(card.get_by_role('button',name='Proveri',exact=True));assert card.locator('.feedback.good').count()==1
   rows.append({'id':id,'width':width,'status':'pass','level':t['level']})
   if id!=lesson['work'][-1]:click(page.get_by_role('button',name='Sledeći zadatak'))
  key='matematikon68-progress-v1-6'
  page.wait_for_function("k=>JSON.parse(localStorage.getItem(k)||'{}').knowledgeAttempts?.length===10",arg=key)
  page.reload();page.locator('.task-card').wait_for()
  assert page.locator('.feedback.good').count()==1
  # Check Cyrillic display in actual UI without changing mathematical Latin variables.
  click(page.locator('.script-switch button').first)
  assert 'број' in page.locator('.learn-column').inner_text()
  assert '|a|≥0' in page.locator('.learn-column').inner_text().replace(' ','')
  rows.append({'width':width,'lesson':lesson['id'],'examples':3,'progress_reload':True,'cyrillic':True,'status':'pass'})
  ctx.close()
 browser.close()
srv.shutdown()
(out/'browser.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2))
print(len(rows),'browser records: 20 task checks + 2 lesson/retention checks')

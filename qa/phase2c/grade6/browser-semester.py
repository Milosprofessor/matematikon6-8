"""Real Pages UI checks, fresh synthetic Chromium contexts."""
import sys,re,json,os,pathlib,functools,http.server,threading
from playwright.sync_api import sync_playwright
root=pathlib.Path(__file__).resolve().parents[3]
lesson_id=sys.argv[1]
out=pathlib.Path(__file__).parent/lesson_id
out.mkdir(exist_ok=True)
d=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
bank={t['id']:t for t in d['bank']};lesson=next(l for l in d['lessons'] if l['id']==lesson_id)
class Silent(http.server.SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
srv=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Silent,directory=str(root/'dist/pages')))
threading.Thread(target=srv.serve_forever,daemon=True).start()
url=f'http://127.0.0.1:{srv.server_port}/#/lekcija/6/{lesson["area"]}/{lesson_id}'
rows=[]
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=os.environ['QA_CHROME'],args=['--no-sandbox','--disable-dev-shm-usage'])
 for width,height,touch in [(1366,768,False),(390,844,True)]:
  ctx=browser.new_context(viewport={'width':width,'height':height},has_touch=touch,is_mobile=touch)
  page=ctx.new_page();page.add_init_script("localStorage.setItem('matematikon68-script','latn')")
  page.goto(url);page.locator('.task-card').wait_for()
  def click(l):l.tap() if touch else l.click()
  examples=page.locator('.learn-column details').filter(has=page.locator('summary',has_text='Primer sa postupkom'))
  assert examples.count()==1
  for detail in examples.all():
   if detail.get_attribute('open') is None:click(detail.locator('summary'))
  text=page.locator('.learn-column').inner_text()
  assert not re.search(r'\[\[frac:|undefined|NaN',text)
  seen_fraction=False
  def check_fraction(container):
   global seen_fraction
   geometry=container.locator('.frac:visible').evaluate_all("""els=>els.map(el=>[...el.children].map(child=>{
    const r=child.getBoundingClientRect();return [r.y,r.height,getComputedStyle(child).borderBottomWidth]
   }))""")
   for (top,th,bar),(bottom,bh,_) in geometry:
    assert th>0 and bh>0 and top<bottom and float(bar[:-2])>0,geometry
    seen_fraction=True
  check_fraction(examples)
  for id in lesson['work']:
   card=page.locator('.task-card');assert card.get_attribute('data-task-id')==id;t=bank[id]
   check_fraction(card)
   if id==lesson['work'][0]:
    if t['kind']=='choice':click(card.locator('.choices button').nth(next(i for i,c in enumerate(t['choices']) if c!=t['answer'])))
    else:card.locator('input').fill('9999')
    for _ in range(2):click(card.get_by_role('button',name='Proveri',exact=True))
    assert card.locator('.feedback.bad').count()==1
    click(card.get_by_role('button',name='Nagoveštaj'));click(card.get_by_role('button',name='Prikaži postupak'))

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
  assert re.search('[А-Яа-я]',page.locator('h1').inner_text())
  detail=page.locator('.learn-column details.lesson-explore').first
  if detail.get_attribute('open') is None:click(detail.locator('summary'))
  assert re.search(r'\d,\d',page.locator('.learn-column').inner_text())
  if '[[frac:' in str([lesson['solved'],lesson['examples'],[bank[i] for i in lesson['work']]]):assert seen_fraction
  rows.append({'width':width,'lesson':lesson['id'],'examples':1,'progress_reload':True,'cyrillic':True,'status':'pass'})
  ctx.close()
 browser.close()
srv.shutdown()
(out/'browser.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2))
print(len(rows),'browser records: 20 task checks + 2 lesson/retention checks')

"""Production Pages UI, isolated synthetic progress; deterministic first adaptive selection.
Run final-ui-plan.ts first, then serve dist/pages; QA_CHROME and QA_URL are configurable.
"""
import json,os,pathlib,re,traceback,sys
from playwright.sync_api import sync_playwright
root=pathlib.Path(__file__).parent
out=pathlib.Path(os.environ.get('QA_OUT',str(root/'final-ui')));out.mkdir(exist_ok=True)
plan=json.loads((root/'final-ui'/'plan.json').read_text())
bank={t['id']:t for g in (7,8) for t in json.loads((root/f'g{g}-extracted.json').read_text())['bank']}
base=os.environ.get('QA_URL','http://127.0.0.1:4199/')
mode=sys.argv[1] if len(sys.argv)>1 else 'desktop'
width,height,touch=(1366,768,False) if mode=='desktop' else (390,844,True)
def click(l):
 if touch:l.tap(timeout=5000)
 else:l.click(timeout=5000)
def norm(s):return re.sub(r'\s+','',s or '')
def text_html(page,html):return page.evaluate("(html)=>{const el=document.createElement('div');el.innerHTML=html;return el.textContent}",html)
def matches(page,loc,html):
 actual=loc.text_content();expected=text_html(page,html)
 assert norm(expected) in norm(actual),(actual,expected)
 return loc.inner_text()
def enter(card,t,correct):
 if t['kind']=='input': card.locator('input').fill(t['answer'] if correct else '999999')
 else:
  idx=t['choices'].index(t['answer']);click(card.locator('.choices button').nth(idx if correct else (idx+1)%len(t['choices'])))
 click(card.get_by_role('button',name='Proveri',exact=True))
def wait_progress(page,key,id):
 page.wait_for_function("([key,id])=>JSON.parse(localStorage.getItem(key)||'{}').knowledgeAttempts?.some(a=>a.taskId===id)",arg=[key,id],timeout=7000)
 return page.evaluate("([key,id])=>JSON.parse(localStorage.getItem(key)).knowledgeAttempts.filter(a=>a.taskId===id).at(-1)",[key,id])
def next_card(page,t):
 card=page.locator('.task-card');enter(card,t,True)
 if card.count() and card.get_attribute('data-task-id')==t['id']:
  if not card.locator('.feedback.good').count():
   enter(card,t,True);click(card.get_by_role('button',name='Prikaži postupak'));click(card.get_by_role('button',name='Razumem, nastavi'))
  if page.get_by_role('button',name='Sledeći zadatak',exact=True).count():click(page.get_by_role('button',name='Sledeći zadatak',exact=True))
def diagram(card):
 svgs=card.locator('svg').all()
 result=[]
 for svg in svgs:
  box=svg.bounding_box()
  assert box and box['width']>0 and box['height']>0
  markup=svg.evaluate('(e)=>e.outerHTML')
  assert not re.search(r'="(?:NaN|Infinity|-Infinity)"',markup)
  result.append({'label':svg.get_attribute('aria-label'),'text':svg.text_content(),'width':box['width'],'height':box['height']})
 return result
def run(page,t):
 key=f'matematikon68-progress-v1-{t["grade"]}'
 page.add_init_script(script="localStorage.setItem('matematikon68-script','latn');localStorage.setItem("+json.dumps(key)+","+json.dumps(json.dumps({'completed':t['seed']}))+");")
 page.goto(base+t['route']);page.locator('main h1').wait_for()
 id=t['id'];r={'id':id,'finding':t['finding'],'route':t['route'],'mode':mode}
 if id.startswith(('s8-simA','s8-simB')):
  click(page.get_by_text('Samostalno vežbanje',exact=True))
  section=page.locator('.e8-exam section.content-card').filter(has=page.get_by_role('heading',name='13. zadatak',exact=True))
  r['prompt']=matches(page,section.locator('p').first,t['html']['prompt']);r['diagram']=diagram(section)
  click(section.locator('summary'));r['hint']=matches(page,section.locator('details p'),t['html']['hint'])
  for correct in [False,True]:
   section.locator('input').fill(t['answer'] if correct else '999999')
   click(page.get_by_text('Završi test',exact=True));click(page.get_by_text('Potvrdi predaju',exact=True))
   summary=section.locator('summary')
   assert ('1 / 1' if correct else '0 / 1') in summary.inner_text()
   if section.locator('details').get_attribute('open') is None:click(summary)
   r['solution']=matches(page,section.locator('details p'),t['html']['solution'])
   if not correct:
    r['wrong_rejected']=True;click(page.get_by_text('Ponovi test',exact=True))
   else:r['correct_accepted']=True
  examkey='matematikon68-priprema-v1-'+id.rsplit('-',1)[0]
  page.wait_for_function("([k,id,a])=>{const x=JSON.parse(localStorage.getItem(k)||'{}');return x.done&&x.answers[id]===a}",arg=[examkey,id,t["answer"]])
  r['progress']='exam answer and submitted state persisted';return r
 if '/pametno/' in t['route']:
  click(page.locator('.level-picker button.'+t['level']))
  # Only selection RNG is controlled; no replacement of components, answers or application logic.
  page.evaluate("(values)=>{let i=0;Math.random=()=>values[i++]??0.999999}",t['random'])
  click(page.get_by_role('button',name='Počni vežbanje'))
 else:
  page.evaluate("Math.random=()=>0.999999")
  click(page.get_by_role('button',name='Počni proveru'))
 card=page.locator('.task-card');card.wait_for()
 for _ in range(30):
  current=card.get_attribute('data-task-id')
  if current==id:break
  if '/pametno/' in t['route']:raise AssertionError('selection mismatch '+str(current))
  next_card(page,bank[current])
 else:raise AssertionError('not reached')
 r['prompt']=matches(page,card.locator('p').first,t['html']['prompt'])
 if t['math']:r['math']=matches(page,card.locator('.task-math'),t['html']['math'])
 r['diagram']=diagram(card)
 if id.startswith('ow-leg-ladder-'):
  given=re.search(r'Merdevine su (\d+) m\. Vrh je na visini (\d+) m',t['math']);c,h=map(int,given.groups())
  svg=card.locator('svg').first; coords={name:tuple(float(svg.locator('[data-vertex='+name+']').get_attribute(k)) for k in ['cx','cy']) for name in 'ABC'}
  import math
  assert abs(math.dist(coords['A'],coords['C'])/math.dist(coords['A'],coords['B'])-h/c)<1e-7
  assert 'x' in r['diagram'][0]['text'] and str(h) in r['diagram'][0]['text'] and str(c) in r['diagram'][0]['text']
  r['ladder_geometry']='known height and hypotenuse proportional; unknown x'
 if t.get('diagram') or id.startswith('s8-'): # absence recorded, not proof of geometric correctness
  r['diagram_expected']=bool(t.get('diagram'))
 if t['kind']=='choice':
  for i,html in enumerate(t['html']['choices']):matches(page,card.locator('.choices button').nth(i),html)
 for _ in range(2):
  enter(card,t,False);assert card.locator('.feedback.bad').count()==1
 r['wrong_rejected']=True
 click(card.get_by_role('button',name='Nagoveštaj'));r['hint']=matches(page,card.locator('.hint'),t['html']['hint'])
 click(card.get_by_role('button',name='Prikaži postupak'));r['solution']=matches(page,card.locator('.solution'),t['html']['solution'])
 card.locator('.solution').scroll_into_view_if_needed()
 box=card.locator('.solution').bounding_box();assert box and box['width']>0 and box['height']>0
 assert card.evaluate('(e)=>e.scrollWidth<=e.clientWidth+3'), 'task card horizontal overflow'
 if id in ['o7-ns-1','ow-leg-ladder-5','s8-kupa-5','s8-lopta-9']:card.screenshot(path=str(out/f'{mode}-{id}.png'))
 enter(card,t,True)
 attempt=wait_progress(page,key,id)
 assert attempt['finalCorrect'] is True and attempt['firstCorrect'] is False and attempt['usedSolution'] is True and attempt['attemptCount']==3,attempt
 r['correct_accepted']=True;r['progress']=attempt
 return r
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=os.environ['QA_CHROME'],args=['--no-sandbox','--disable-dev-shm-usage'])
 selected=os.environ.get('QA_IDS_PREFIX')
 results=json.loads((out/f'{mode}.json').read_text()) if selected and (out/f'{mode}.json').exists() else []
 if selected:results=[r for r in results if not r['id'].startswith(selected)]
 for t in plan:
  if selected and not t['id'].startswith(selected):continue
  ctx=browser.new_context(viewport={'width':width,'height':height},has_touch=touch,is_mobile=touch)
  page=ctx.new_page();page.set_default_timeout(5000)
  try:
   r=run(page,t);r['status']='pass'
  except Exception as e:
   r={'id':t['id'],'finding':t['finding'],'mode':mode,'status':'fail','error':str(e),'trace':traceback.format_exc()}
   try:r['visible']=page.locator('main').inner_text()[:1200]
   except Exception:pass
  results.append(r);(out/f'{mode}.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
  print(mode,t['id'],r['status'],r.get('error',''),flush=True);ctx.close()
 browser.close()
print('PASS',sum(r['status']=='pass' for r in results),'/',len(results))

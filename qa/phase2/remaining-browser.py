"""Targeted UI regression; isolated Chromium contexts and synthetic answers only."""
import json,os,pathlib,math
from playwright.sync_api import sync_playwright
root=pathlib.Path(__file__).parent
bank={t['id']:t for g in (6,7,8) for t in json.loads((root/f'g{g}-extracted.json').read_text())['bank']}
routes=[(6,'s6-cetvorouglovi','s6-trapez'),(6,'racionalni-brojevi','q-zapisi'),(7,'s7-krug','s7-luk'),(7,'s7-krug','s7-isecci'),(7,'s7-geometrija','s7-povrsina'),(7,'s7-krug','s7-rotacija'),(7,'s7-geometrija','s7-centri'),(6,'s6-odnosi','s6-podaci'),(8,'s8-zavrsnica','s8-godina')]
out=[]
def work_to(page,target):
 for _ in range(12):
  card=page.locator('.task-card').first
  card.wait_for()
  id=card.get_attribute('data-task-id')
  if id==target:return card
  t=bank[id]
  if t['kind']=='choice':card.locator('.choices button').filter(has_text=t['answer']).first.click() if card.locator('.choices button').filter(has_text=t['answer']).count() else card.locator('.choices button').first.click()
  else:card.locator('input').fill(t['answer'])
  card.get_by_role('button',name='Proveri',exact=True).click()
  if not card.locator('.feedback.good').count():
   card.get_by_role('button',name='Proveri',exact=True).click()
   card.get_by_role('button',name='Prikaži postupak').click()
   card.get_by_role('button',name='Razumem, nastavi').click()
  page.get_by_role('button',name='Sledeći zadatak',exact=True).click()
 raise AssertionError(target)
def geometry(page,x):
 svg=page.get_by_role('img',name='Promenljiv trougao')
 pts=[(x,36),(65,156),(240,156)];h=svg.locator('[data-triangle-center="H"]')
 hx,hy=(float(h.get_attribute(k)) for k in ['cx','cy'])
 assert abs(hx-x)<1e-7
 if x<65:assert hy>156
 elif x==65:assert (hx,hy)==(65,156)
 else:assert 36<hy<156
 for name,i in zip('ABC',range(3)):
  p=pts[i];u,v=[pts[j] for j in range(3) if j!=i]
  line=svg.locator(f'[data-foot="{name}"]')
  x1,y1,x2,y2=[float(line.get_attribute(k)) for k in ['x1','y1','x2','y2']]
  dx,dy=v[0]-u[0],v[1]-u[1]
  assert abs((x2-u[0])*dy-(y2-u[1])*dx)<1e-6
  assert abs((x2-x1)*dx+(y2-y1)*dy)<1e-6
  assert abs((hx-x1)*(y2-y1)-(hy-y1)*(x2-x1))<1e-6
  assert svg.locator(f'[data-right-angle="{name}"]').count()==1
 return [hx,hy]
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path=os.environ['QA_CHROME'],args=['--no-sandbox'])
 for width,height in [(1366,768),(360,800)]:
  page=browser.new_page(viewport={'width':width,'height':height},has_touch=width==360)
  for g,area,lesson in routes:
   page.goto(f'http://127.0.0.1:4199/#/lekcija/{g}/{area}/{lesson}')
   page.locator('.lesson-title h1').wait_for()
   page.locator('.script-switch button').filter(has_text='Lat').click()
   text=page.locator('.learn-column').inner_text()
   if lesson=='s6-trapez':assert 'osnovice' in text and 'Deltoid' in text
   if lesson=='q-zapisi':assert 'bez ostatka' in text
   if lesson=='s7-luk':
    for n in (2,3):page.get_by_text(f'Rešeni primer {n}',exact=True).click()
    text=page.locator('.learn-column').inner_text();assert '60π' in text and '6π+12' in text.replace(' ','')
   if lesson=='s7-isecci':
    page.get_by_text('Rešeni primer 2',exact=True).click();assert '256−64π' in page.locator('.learn-column').inner_text().replace(' ','')
   if lesson=='s7-rotacija':assert 'višekratnik 180°' in text
   if lesson in ['s6-podaci','s7-centri','s8-godina']:
    title={'s6-podaci':'Izradi svoj dijagram','s7-centri':'Konstruiši ortocentar i težište','s8-godina':'Planiraj i sprovedi istraživanje'}[lesson]
    summary=page.get_by_text(title,exact=True);summary.click()
    detail=summary.locator('..')
    assert detail.locator('ol li').count()==3 and detail.locator('ul li').count()==3
    out.append(dict(width=width,lesson=lesson,activity=detail.inner_text()))
   if lesson=='s7-centri':
    page.get_by_role('button',name='Prikaži visine').click()
    coords=[dict(x=130,H=geometry(page,130))]
    slider=page.get_by_role('slider',name='Položaj vrha A')
    slider.press('Home');coords.append(dict(x=45,H=geometry(page,45)))
    for _ in range(20):slider.press('ArrowRight')
    coords.append(dict(x=65,H=geometry(page,65)))
    out.append(dict(width=width,lesson=lesson,geometry=coords))
   if width==1366 and lesson in ['s7-povrsina','s7-rotacija']:
    target='s7-povrsina-7' if lesson=='s7-povrsina' else 's7-rotacija-9'
    card=work_to(page,target);assert ('deli celu gornju stranicu' if lesson=='s7-povrsina' else 'Osnovni') in card.inner_text()
    card.locator('input').fill('52' if lesson=='s7-povrsina' else '45');card.get_by_role('button',name='Proveri',exact=True).click();assert card.locator('.feedback.good').count()==1
    out.append(dict(width=width,lesson=lesson,task=target,result='correct'))
   out.append(dict(width=width,lesson=lesson,visible=True))
  if width==1366:
   page.goto('http://127.0.0.1:4199/#/test/7/s7-rotacija-mini')
   page.get_by_role('button',name='Počni proveru').click()
   card=work_to(page,'s7-rotacija-14')
   assert 'Osnovni' in card.inner_text()
   card.locator('input').fill('30');card.get_by_role('button',name='Proveri',exact=True).click();assert card.locator('.feedback.good').count()==1
   out.append(dict(width=width,lesson='s7-rotacija-mini',task='s7-rotacija-14',result='correct'))
  page.close()
 browser.close()
(root/'remaining-results'/'browser.json').write_text(json.dumps(out,ensure_ascii=False,indent=2))
print(len(out),'browser evidence records')

"""Isolated browser checks, using fresh contexts (no real student data)."""
import json,os,pathlib
from playwright.sync_api import sync_playwright
root=pathlib.Path(__file__).parent
data=json.loads((root/'g8-extracted.json').read_text()); bank={t['id']:t for t in data['bank']}
target={r['id'] for r in json.loads((root/'g8-results/math.json').read_text())}
routes=[('obnavljanje-7','kratko-obnavljanje-7'),('s8-preseci','s8-prizma'),('s8-piramide','s8-piramida'),('s8-valjci','s8-valjak'),('s8-kupe','s8-kupa'),('s8-lopte','s8-lopta')]
out=[]
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path=os.environ['QA_CHROME'],args=['--no-sandbox'])
 for width,height in [(1366,768),(360,800)]:
  page=browser.new_page(viewport={'width':width,'height':height},has_touch=width==360)
  for area,lesson in routes:
   page.goto(f'http://127.0.0.1:4199/#/lekcija/8/{area}/{lesson}')
   page.locator('.lesson-title h1').wait_for()
   page.locator('.script-switch button').filter(has_text='Lat').click()
   for summary in page.locator('.learn-column details summary').all():
    if not summary.locator('..').get_attribute('open') is not None: summary.click()
   assert page.locator('.learn-column').inner_text()
   out.append(dict(width=width,route=lesson,kind='lesson',title=page.locator('.lesson-title h1').inner_text()))
  for exam in ['s8-simA','s8-simB']:
   page.goto(f'http://127.0.0.1:4199/#/test/8/{exam}')
   page.get_by_text('Samostalno vežbanje',exact=True).click()
   section=page.locator('.e8-exam section.content-card').filter(has=page.get_by_role('heading',name='13. zadatak',exact=True))
   assert section.locator('svg').count()==(2 if exam=='s8-simB' else 1)
   section.locator('input').fill(bank[exam+'-13']['answer'])
   page.get_by_text('Završi test',exact=True).click();page.get_by_text('Potvrdi predaju',exact=True).click()
   section.locator('summary').click()
   assert '1 / 1' in section.locator('summary').inner_text()
   out.append(dict(width=width,route=exam,kind='exam',task=exam+'-13',result='1/1'))
  page.close()
 browser.close()
(root/'g8-results'/'browser.json').write_text(json.dumps(out,ensure_ascii=False,indent=2))
print(len(out),'browser checks')

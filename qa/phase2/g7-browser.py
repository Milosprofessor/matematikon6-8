"""Browser verification of the seven affected lesson routes on desktop/mobile."""
from playwright.sync_api import sync_playwright
import os,json,pathlib
root=pathlib.Path(__file__).parent
rows=json.loads((root/'g7-pythagoras-verification.json').read_text())
reg=json.loads((root/'register.json').read_text())
lessons={p['lesson'] for p in reg if p['id'] in {r['finding'] for r in rows}}
results=[]
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path=os.environ['QA_CHROME'],args=['--no-sandbox'])
 for width,height in [(1366,768),(360,800)]:
  page=browser.new_page(viewport={'width':width,'height':height},has_touch=width==360)
  for lesson in sorted(lessons):
   page.goto('http://127.0.0.1:4199/#/lekcija/7/pitagorina-teorema/'+lesson)
   page.locator('.lesson-title h1').wait_for()
   page.locator('.script-switch button').filter(has_text='Lat').click()
   title=page.locator('.lesson-title h1').inner_text()
   page.locator('summary').filter(has_text='Primer sa postupkom').click()
   body=page.locator('body').inner_text()
   if lesson=='nepoznata-stranica-pravougli': assert '15 cm' in body
   if lesson=='pitagora-jednakokraki': assert '8 cm' in body
   results.append({'lesson':lesson,'width':width,'title':title})
  page.close()
 browser.close()
(root/'g7-browser.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
print(len(results),'lesson viewport checks')

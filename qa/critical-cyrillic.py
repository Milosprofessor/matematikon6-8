"""Run from audit parent workspace after the Pages build. Fresh synthetic context."""
import functools,http.server,threading,json,os
from pathlib import Path
from playwright.sync_api import sync_playwright
class Quiet(http.server.SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Quiet,directory='repo/dist/pages'))
threading.Thread(target=server.serve_forever,daemon=True).start()
lesson={'area': 's7-algebra', 'work': ['s7-monomi-1', 's7-monomi-2', 's7-monomi-3', 's7-monomi-4', 's7-monomi-5']}
bank={'s7-monomi-1': {'kind': 'input', 'answer': '-7'}, 's7-monomi-2': {'kind': 'input', 'answer': '5'}, 's7-monomi-3': {'kind': 'input', 'answer': '-7'}, 's7-monomi-4': {'kind': 'choice', 'choices': ['5a²b', '5ab', '−3b²a'], 'answer': '−3b²a'}, 's7-monomi-5': {'kind': 'input', 'answer': '6x'}}
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=os.environ['CHROME'],args=['--no-sandbox'])
 page=browser.new_page();page.add_init_script("localStorage.setItem('matematikon68-script','latn')")
 page.goto(f'http://127.0.0.1:{server.server_port}/#/lekcija/7/{lesson["area"]}/s7-monomi')
 for i,taskid in enumerate(lesson['work'][:5]):
  task=bank[taskid];card=page.locator(f'[data-task-id="{taskid}"]');card.wait_for()
  if task['kind']=='choice':card.locator('.choices button').nth(task['choices'].index(task['answer'])).click()
  else:card.get_by_role('textbox').fill('6х' if i==4 else task['answer'])
  card.get_by_role('button',name='Proveri',exact=True).click();card.locator('.feedback.good').wait_for()
  if i<4:page.get_by_role('button',name='Sledeći zadatak',exact=True).click()
 page.locator('.storage-pending').wait_for(state='detached')
 record=page.evaluate("JSON.parse(localStorage.getItem('matematikon68-progress-v1-7')).lessonWork['s7-monomi'].tasks['s7-monomi-5']")
 assert record['value']=='6х' and record['result']['finalCorrect'],record
 Path('repo/qa/phase1-results/final/cyrillic-ui.json').write_text(json.dumps(record,ensure_ascii=False,indent=2))
 browser.close()
server.shutdown()
print('Cyrillic x accepted through lesson input and saved exactly.')

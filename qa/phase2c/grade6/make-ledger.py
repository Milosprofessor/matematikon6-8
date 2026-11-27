"""Build resumable Grade 6 ledger from actual inventory and area review evidence."""
import json,openpyxl
from pathlib import Path
from openpyxl.styles import Font,PatternFill,Alignment
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.table import Table,TableStyleInfo
root=Path(__file__).resolve().parents[3]
d=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
base=root/'qa/phase2c/grade6'
review=[r for f in sorted(base.glob('*/tasks.json')) for r in json.loads(f.read_text())]
by={r['id']:r for r in review}
lesson_evidence={r['id']:r for f in sorted(base.glob('*/lesson.json')) for r in [json.loads(f.read_text())]}
cols=['id','area','lesson','requirement','answer','alternatives','hint','procedure','old_level','level','level_reason','illustration','notation','issue','fix','technical_issue','method','status']
rows=[]
for task in d['bank']:
 if task['id'] in by:rows.append(by[task['id']])
 else:rows.append(dict(id=task['id'],area=task['area'],lesson=task.get('lesson'),level=task['level'],status='nepregledan u fazi 2C'))
assert len(rows)==919 and len(by)==len(review)
(base:=root/'qa/phase2c/grade6').mkdir(exist_ok=True)
(base/'ledger-tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
lessons=[lesson_evidence[l['id']] if l['id'] in lesson_evidence else dict(id=l['id'],area=l['area'],status='nepregledana u fazi 2C') for l in d['lessons']]
(base/'ledger-lessons.json').write_text(json.dumps(lessons,ensure_ascii=False,indent=2)+'\n')
wb=openpyxl.Workbook();wb.remove(wb.active)
def sheet(name,columns,data,widths=None):
 ws=wb.create_sheet(name);ws.append(columns)
 for row in data:ws.append(row)
 ws.freeze_panes='A2';ws.auto_filter.ref=ws.dimensions
 for c in ws[1]:c.fill=PatternFill('solid',fgColor='17365D');c.font=Font(color='FFFFFF',bold=True);c.alignment=Alignment(wrap_text=True)
 for i,col in enumerate(columns,1):ws.column_dimensions[get_column_letter(i)].width=(widths or {}).get(col,25 if i<=3 else 48)
 for row in ws.iter_rows(min_row=2):
  for c in row:c.alignment=Alignment(vertical='top',wrap_text=True)
  if 'potpuno' in str(row[-1].value):row[-1].fill=PatternFill('solid',fgColor='D8F3DC')
 tbl=Table(displayName='T'+str(len(wb.worksheets)),ref=ws.dimensions);tbl.tableStyleInfo=TableStyleInfo(name='TableStyleMedium2',showRowStripes=True);ws.add_table(tbl)
next_task=next(r for r in rows if r['status'].startswith('nepregledan'))
sheet('Sažetak',['Stavka','Broj','Napomena'],[
 ['Ukupno zadataka',len(rows),'Aktuelni izvozni inventar'],['Potpuno recenzirani',len(by),'Semantički i matematički; tehnički nalazi LOG-06 ostaju'],['Delimično recenzirani',0,'Ne preuzimaju se prethodne provere kao nova recenzija'],['Nepregledani',len(rows)-len(by),'Faza 2C'],['Lekcije',len(lessons),f'{len(lesson_evidence)} pregledane'],['Glavni postojeći primeri',81,f'{len(lesson_evidence)} pregledana u dosadašnjim lekcijama'],['Novi primeri',sum(len(l['examples'])-1 for l in lesson_evidence.values()),'Pregledani'],['Godišnji ishodi',17,'Delovi 6.01–6.04, 6.08 i 6.13 pregledani; ishodi kao celine još nisu potvrđeni'],['Sledeći sadržaj',next_task['lesson'],next_task['id']]])
sheet('Zadaci',cols,[[r.get(k,'') for k in cols] for r in rows],{'id':25,'area':24,'lesson':30,'status':30,'old_level':16,'level':16})
lc=['id','area','theory','sequence','illustration','misconceptions','assessment','limits','status']
sheet('Lekcije',lc,[[r.get(k,'') for k in lc] for r in lessons])
examples=[]
for l in d['lessons']:
 for i,e in enumerate(l.get('worked') or [l['solved']]):
  reviewed=l['id'] in lesson_evidence
  examples.append([l['id'],i+1,e['question'],' | '.join(e['steps']),'nov' if reviewed and i>0 else 'postojeći','potpuno recenziran' if reviewed else 'nepregledan u fazi 2C'])
assert len(examples)>=81
sheet('Rešeni primeri',['Lekcija','Broj','Zahtev','Postupak','Poreklo','Status'],examples)
u=[r for f in sorted(base.glob('*/units.json')) for r in json.loads(f.read_text())];sheet('Jedinice faza 3',['ID','Jedinica','Broj prihvaćen','Sa jedinicom prihvaćen','Primer','Nalaz'],[[x['id'],x['requiredUnit'],x['numericAccepted'],x['unitAccepted'],x['example'],x['phase3']] for x in u])
wb.save(root/'MATEMATIKON6_EVIDENCIJA_MATEMATICKE_RECENZIJE.xlsx')
print('ledger:',len(rows),'tasks;',len(lessons),'lessons;',len(examples),'examples')

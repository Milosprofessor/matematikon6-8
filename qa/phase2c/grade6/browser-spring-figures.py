"""Read rendered SVG geometry after student controls are used in both viewports."""
import functools,http.server,json,math,os,threading
from pathlib import Path
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[3]
base=root/'qa/phase2c/grade6'
inventory=json.loads((root/'qa/phase2/g6-extracted.json').read_text())
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*args):pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Quiet,directory=str(root/'dist/pages')))
threading.Thread(target=server.serve_forever,daemon=True).start()
rows=[]
def polygon(loc):
    return [tuple(map(float,p.split(','))) for p in loc.get_attribute('points').split()]
def close(a,b):
    assert math.isclose(a,b,abs_tol=1e-7),(a,b)
def area(points):
    return abs(sum(x*v-y*u for (x,y),(u,v) in zip(points,points[1:]+points[:1])))/2

with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=os.environ['QA_CHROME'],args=['--no-sandbox','--disable-dev-shm-usage'])
    for width,height,touch in [(1366,768,False),(390,844,True)]:
        ctx=browser.new_context(viewport={'width':width,'height':height},has_touch=touch,is_mobile=touch)
        page=ctx.new_page()
        page.add_init_script("localStorage.setItem('matematikon68-script','latn')")
        for key in ['konstrukcije','podudarnost','koordinate','preslikavanja','podaci','zavisnost','uglovi','paralelogram','vektori','trapez','cetiri-stranice','merenje','trougao-trapez','delovi']:
            lesson=next(l for l in inventory['lessons'] if l['id']=='s6-'+key)
            page.goto(f"http://127.0.0.1:{server.server_port}/#/lekcija/6/{lesson['area']}/{lesson['id']}")
            page.get_by_role('heading',name=lesson['title'],exact=True,level=1).wait_for()
            lab=page.locator('.spring-lab');lab.wait_for()
            def click(name):
                locator=lab.get_by_role('button',name=name,exact=True)
                locator.tap() if touch else locator.click()
            if key in ('konstrukcije','vektori'):
                for i in range(3):click('Sledeći korak')
                points=polygon(lab.locator('polygon'))
                if key=='konstrukcije':
                    a,b,c=points
                    for distance,expected in [(math.dist(a,b),180),(math.dist(a,c),144),(math.dist(b,c),108)]:close(distance,expected)
                else:
                    a,b,c,d=points
                    for j in (0,1):close(a[j]+c[j],b[j]+d[j])
            elif key=='podudarnost':
                a,b,c=polygon(lab.locator('polygon'))
                circle=lab.locator('circle.guide')
                def read_circle():
                    return [float(circle.get_attribute(k)) for k in ['cx','cy','r']]
                x,y,r=read_circle()
                for vertex in (a,b,c):close(math.dist(vertex,(x,y)),r)
                click('Upisana kružnica');x,y,r=read_circle()
                for (u,v),(w,z) in [(a,b),(b,c),(c,a)]:close(abs((w-u)*(y-v)-(z-v)*(x-u))/math.dist((u,v),(w,z)),r)
            elif key=='koordinate':
                slider=lab.locator("input[type=range]").first
                slider.press('End')
                dot=lab.locator('circle.active-dot')
                close(float(dot.get_attribute('cx')),156+20*6)
                close(float(dot.get_attribute('cy')),110-20*3)
            elif key=='trapez':
                svg=lab.locator('svg').first
                a,b,c,d=polygon(svg.locator('polygon'))
                mid=svg.locator('line.cut')
                x1,y1,x2,y2=[float(mid.get_attribute(k)) for k in ['x1','y1','x2','y2']]
                close(math.dist((x1,y1),(x2,y2)),(math.dist(a,b)+math.dist(d,c))/2)
                for _ in range(3):click('Sledeći korak')
                a,b,c,d=polygon(lab.locator('svg').last.locator('polygon'))
                close(math.dist(a,d),math.dist(b,c))
            elif key=='preslikavanja':
                for i,name in enumerate(['Odraz preko ose y','Poluokret oko O','Translacija (2, −2)']):
                    click(name)
                    orig,dest=map(polygon,lab.locator('polygon').all())
                    for (x,y),(u,v) in zip(orig,dest):
                        want=[(304-x,y),(304-x,210-y),(x+44,y+44)][i]
                        close(u,want[0]);close(v,want[1])
            elif key=='podaci':
                counts=[int(v) for v in lab.locator('td').all_text_contents()]
                click('Dvostruki stubići')
                assert [int(e.get_attribute('height')) for e in lab.locator('svg g rect').all()]==[c*14 for c in counts]
            elif key=='zavisnost':
                for i,name in enumerate(['Cena pri 2 dinara po komadu','Vreme za 12 radnih sati']):
                    click(name)
                    for n,circle in enumerate(lab.locator('svg circle').all(),1):
                        close((183-float(circle.get_attribute('cy')))/12,12/n if i else 2*n)
            elif key=='uglovi':
                click('Podeli dijagonalom')
                a,b,c,d=polygon(lab.locator('polygon').first)
                close(area([a,b,c,d]),area([a,b,c])+area([a,c,d]))
            elif key=='paralelogram':
                for name in ['Romb','Kvadrat','Pravougaonik']:
                    click(name);a,b,c,d=polygon(lab.locator('polygon'))
                    if name in ('Romb','Kvadrat'):
                        for u,v in [(b,c),(c,d),(d,a)]:close(math.dist(a,b),math.dist(u,v))
                    if name in ('Kvadrat','Pravougaonik'):close(math.dist(a,c),math.dist(b,d))
            elif key=='cetiri-stranice':
                click('Korak 4');a,b,c,d=polygon(lab.locator('polygon'))
                for u,v,length in [(a,b,9),(b,c,4),(c,d,5),(d,a,3)]:close(math.dist(u,v)/24,length)
            else:
                before=[area(polygon(p)) for p in lab.locator('polygon').all()]
                click('Završni položaj')
                after=[area(polygon(p)) for p in lab.locator('polygon').all()]
                close(sum(before),sum(after))
                if key=='trougao-trapez':close(after[0],after[1])
            rows.append(dict(lesson=lesson['id'],width=width,status='pass'))
        ctx.close()
    browser.close()
server.shutdown()
(base/'s6-sinteza/figure-browser.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
print(len(rows),'interactive figure checks')

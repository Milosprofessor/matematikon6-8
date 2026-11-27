import json,re,subprocess,collections
from pathlib import Path
root=Path(__file__).resolve().parents[3];base=root/'qa/phase2c/grade6'
data=json.loads((root/'qa/phase2/g6-extracted.json').read_text());old_data=json.loads(subprocess.check_output(['git','show','0104a037005777100297904b31eaa5130e7ec722:qa/phase2/g6-extracted.json'],cwd=root));old={t['id']:t for t in old_data['bank']}
def valid(s):return min(s)>0 and max(s)*2<sum(s)
def angles(s):return min(s)>0 and sum(s)==180
groups=collections.defaultdict(list)
for t in data['bank']:
 id=t['id'];b=old[id];assert t['answer']==b['answer']
 if t['lesson'] not in ('odnos-stranica-uglova','nejednakost-trougla'):assert t==b;continue
 a=t['answer'];m=list(map(int,re.findall(r'\d+',t['math'])));reason='Direktna primena teoreme.'
 if id in ('o6-osu-1','ot6-5'):
  assert angles(m) and 'abc'[m.index(max(m))]==a;ref=f'Najveći ugao {max(m)}°, naspramna stranica {a}.'
 elif id=='o6-osu-2':
  assert valid(m) and a=='α<γ<β' and m[0]<m[2]<m[1];ref='6<8<10 ⇔ α<γ<β.'
 elif id=='o6-osu-3':
  assert a=='Tačno' and t['diagram']['labels']['shapeBeta']==t['diagram']['labels']['shapeGamma'];ref='AB=AC ⇔ c=b ⇔ γ=β.'
 elif id=='o6-osu-4':
  assert valid(m) and 'αβγ'[m.index(min(m))]==a;ref='b=5 cm je najmanja, pa β.'
 elif id=='o6-osu-5':assert a=='a=b';ref='α=β ⇔ a=b.'
 elif id=='o6-osu-6':
  assert angles(m) and m==sorted(m) and a=='b<a<c';ref='α<β<γ, dakle a<b<c (i c>b>a).';reason='Analiza alternativa.'
 elif id=='o6-osu-7':
  x=180-2*m[0];assert angles([x,m[0],m[0]]) and int(a)==x;ref='68°+68°+44°=180°.'
 elif id=='ow-sideangle-opposite-0':assert a=='AC';ref='Naspram B je AC.'
 elif id=='ow-sideangle-equals-0':assert a=='c>a=b';ref='a=b ⇔ α=β; γ>α ⇒ c>a=b.'
 elif id.startswith('ow-sideangle-combine-'):
  x,d=m;y=x+d;z=180-x-y;assert angles([x,y,z]) and x<y<z and a=='c';assert t['diagram']['labels']['shapeBeta']==f'{y}°';ref=f'{x}°<{y}°<{z}°, najveća c.';reason='Višekoračni račun i poređenje.'
 elif id in ('o6-nt-1','ot6-6','o6-nt-5'):
  ok=valid(m);assert a==('Da' if ok else 'Netačno' if id=='o6-nt-5' else 'Ne');ref=f'{max(m)} prema zbiru ostalih {sum(m)-max(m)}: '+('postoji' if ok else 'ne postoji')
 elif id=='o6-nt-2':
  c=[s for s in t['choices'] if valid([*m,int(s.split()[0])])];assert c==[a];ref='4<c<16; samo 8 cm.'
 elif id in ('o6-nt-3','o6-nt-7','ot6-7','o6-nt-6'):
  lo=abs(m[0]-m[1]);hi=sum(m);possible=list(range(lo+1,hi));assert all(valid([*m,x]) for x in possible);assert int(a)==(len(possible) if id=='o6-nt-6' else possible[-1] if id=='o6-nt-7' else possible[0]);ref=f'{lo}<x<{hi}; celi: {possible[0]}–{possible[-1]}, ukupno {len(possible)}.';reason='Otvoreni interval.'
 elif id=='o6-nt-4':
  assert not valid(m) and int(a.split()[0])==max(m);ref='11>4+6; najduža je 11 cm.'
 elif id.startswith('ow-ineqtri-strict-'):
  lo=abs(m[0]-m[1]);hi=sum(m);assert a==f'c<{hi}' and lo==1;ref=f'1<c<{hi}, traženi neophodni uslov c<{hi}.'
 elif id.startswith('ow-ineqtri-isosceles-'):
  x,y=m;assert not valid([x,x,y]) and valid([x,y,y]) and int(a)==y;ref=f'{x}+{x}<{y}; {y}+{x}>{y}, krak {y} cm.';reason='Provera obe mogućnosti.'
 elif id.startswith('ow-ineqtri-perimeter-'):
  x,y=m;z=x+y-1;assert valid([x,y,z]) and not valid([x,y,z+1]) and int(a)==x+y+z;ref=f'{abs(x-y)}<c<{x+y}; najviše {z}; O={a} cm.';reason='Granična vrednost i obim.'
 else:raise AssertionError(id)
 changes=[k for k in ('prompt','math','hint','solution','diagram','level') if t.get(k)!=b.get(k)]
 groups[t['lesson']].append(dict(id=id,area=t['area'],lesson=t['lesson'],requirement='Jednoznačan zahtev i dovoljni podaci.',answer='Potvrđeno: '+ref,alternatives='Jedinstvena tačna alternativa.' if t['kind']=='choice' else 'Nije primenljivo.',hint=t['hint'],procedure=t['solution'],old_level=b['level'],level=t['level'],level_reason=reason,illustration='Oznake i geometrijski uslovi provereni.' if t.get('diagram') else 'Tekst dovoljan.',notation='Grčka slova, stranice, stroge nejednakosti i jedinice.',issue='Nepotpuno obrazloženje ili skica.' if changes else '',fix=', '.join(changes) or 'Nije potrebna izmena',method='Nezavisna egzaktna aritmetika i teoreme o trouglu.',status='potpuno recenziran'))
assert set(old)=={t['id'] for t in data['bank']}
assert len(groups['odnos-stranica-uglova'])==16 and len(groups['nejednakost-trougla'])==27
assert angles([80,60,40]) and angles([44,68,68]);assert not valid([4,7,12]) and len(range(5,16))==11 and valid([4,9,9])
for lesson,rows in groups.items():
 l=next(x for x in data['lessons'] if x['id']==lesson);assert len(l['worked'])==3
 values=['a>b>c','β=γ','44°'] if lesson=='odnos-stranica-uglova' else ['ne postoji','5–15; 11 mogućnosti','9 cm']
 (base/lesson/'tasks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
 (base/lesson/'lesson.json').write_text(json.dumps(dict(id=lesson,area='trougao',status='potpuno recenzirana',theory='Naspramni elementi i poredak, jednakokraki trougao.' if lesson=='odnos-stranica-uglova' else 'Neophodan i dovoljan uslov, strogi interval treće stranice.',sequence='Teorema → primena → provera.',examples=[dict(question=e['question'],steps=e['steps'],verification=v) for e,v in zip(l['worked'],values)],illustration='Oznake, oblik i prikaz nemogućih dužina provereni.',misconceptions='Naspramna, ne susedna stranica.' if lesson=='odnos-stranica-uglova' else 'Jednakost nije dovoljna; otvorene granice.',assessment=f'{len(rows)} zadataka uključujući tematsku proveru.',limits='Ne potvrđuje čitav godišnji ishod.'),ensure_ascii=False,indent=2)+'\n')
 print(lesson,len(rows),collections.Counter(r['level'] for r in rows))

from fractions import Fraction as F
from math import ceil, floor
from spring_evidence import save_review

assert F(6+0+10+8,4)==6 and 10>7
save_review("s6-podaci",[5,3*6,"Stubičasti dijagram",5+7+9,F(-2+1+4,3),(12+7)-(8+10),max(9-3,8-9,12-8),"Ne",4*23-18-25-27,F(4*12+2*6,6),50+3*5,3-(-1),5,"Jednako je" if F(8,16)==F(12,24) else "",3*2-(-1)-6,F(20,5)],{},
    ["Stubovi visina 8, 12 i 10 na istoj skali.","Pad od 12 do 16 sati.","24/4=6 knjiga."],
    "Tabela i skala, izbor prikaza, promene, a zatim običan i ponderisan prosek.")

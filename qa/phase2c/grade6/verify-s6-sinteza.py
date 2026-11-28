from fractions import Fraction as F
from math import ceil, floor
from spring_evidence import save_review

assert 3*200*4*200/10000==48 and floor((18-5)/F("2.5"))==5 and F((5+1)*4,2)==12
save_review("s6-sinteza",[-7-(-18),180-45-65,F(18,2)-4,1000*F(3,4),F(2*(-12),8),F(6*50000,100000),F((8+12)*4,2)*F(".75"),F(3*5,5),F(24+3,3)-3,(5-1)*(4-1)*60,-2+3-5,F(-4+10,2),1700/F(".85"),"Nema dovoljno podataka",F(6,3-2)*(3+2),ceil(9/F("1.6"))],{"s6-zavrsnica-primena":F(5*20000,100000)*F(60,4)},["48 m²","Najviše pet punih dana.","12 kvadratnih jedinica."],"Više oblasti u istom modelu, pretvaranje jedinica, provera granice i prepoznavanje nedovoljnih podataka.")

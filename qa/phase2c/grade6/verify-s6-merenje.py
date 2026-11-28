from fractions import Fraction as F
from math import ceil, floor
from spring_evidence import save_review

assert 8*3==24 and F(".6")*100==60 and 2*(9+F(54,9))==30
save_review("s6-merenje",[7**2,8*3,2*100,"Visina na a",F(63,7),2*F(75,100),F(20,4)**2,"Površine su jednake",F(12*4,8),6*8,2*F(1,2),F("1.2")*10000,F(".24")*100/4,4,F(3*100*20,1000),9*2],{"s6-godisnja-8":F(3500,100),"s6-izazov-6":F(2*9,3)},["24 cm²","60 cm²","Širina 6 m, obim 30 m."],"Od izbora osnovice i visine do pretvaranja jedinica površine i dvojne primene formule.")

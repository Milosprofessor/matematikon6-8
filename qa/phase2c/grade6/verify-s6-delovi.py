from fractions import Fraction as F
from math import ceil, floor
from spring_evidence import save_review

assert F(12*7,2)==42 and 9*6-3*2==48 and 8*3+F(8*2,2)==32
save_review("s6-delovi",[F(6*8,2),35-8,"Normalne su",F("2.4")+F("1.6"),F(2*45,9),F((2*4)*(2*3),2),8*5-6*3,F(6**2,2),20+18-4,(5*3-2-F("1.5"))*F(".2"),F(20*(2+5),2),10*6+F(6*4,2),F(2*32)/(10*F(".8")),8**2-4*F("1.5")**2,"Ne",2*F(10*4,2)],{"s6-povrsine-primena":12**2-8**2,"s6-polugodiste-10":40*30-F(30*24,2),"s6-izazov-8":((8+2)*(6+2)-8*6)/F(".4")},["42 cm²","48 m²","32 m²"],"Od normalnih dijagonala do rastavljanja, oduzimanja otvora i preklopa.")

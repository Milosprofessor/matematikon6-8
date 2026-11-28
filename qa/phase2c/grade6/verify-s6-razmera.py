from fractions import Fraction as F
from math import ceil, floor
from spring_evidence import save_review

assert F(4*25000,100000)==1 and F(2*15,5)==6 and F(4*21,7)==12
save_review("s6-razmera",["2:3",100,F(9*4,3),5+2,"1:25",F(700,200),F(84*3,7),F(6*5,2),F(15,7-4)*(7+4),F(600000)/F("2.4"),"Da" if F(8,12)==F(14,21) else "Ne",F(3*5,2),F(15*6,10),F(20*2,5),F(12,3)*7,"3:20"],{"s6-polugodiste-5":F("7.5")*40000/100000,"s6-izazov-1":F(600*10,8)},
    ["100000 cm = 1 km","6 dl plave i 9 dl žute","x=12"],"Od odnosa u istim jedinicama do podele celine, proporcije i razmere karte.")

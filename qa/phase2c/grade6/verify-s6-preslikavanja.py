from fractions import Fraction as F
from math import ceil, floor
from spring_evidence import save_review

assert (2*1-(-2),2*1-3)==(4,-1)
assert [(x-2,y+3) for x,y in [(0,1),(2,1),(0,4)]]==[(-2,4),(0,4),(-2,7)]
save_review("s6-preslikavanja",["U istoj tački",90,F("3.7"),-(-2),2*F("2.2"),F(-5+9,2),6+(-1-2),"Početni trougao",-2+5,"Ne",1,-1+4,F(1+7,2),"Osna simetrija oko te prave",F(124,2),-(4+2)],{},
    ["A ostaje na osi; odrazi B i C su na suprotnoj strani na istoj normalnoj udaljenosti.","(4,−1)","(−2,4), (0,4), (−2,7)"],
    "Fiksne tačke i rastojanja pre koordinatnih pravila i sastavljanja preslikavanja.")

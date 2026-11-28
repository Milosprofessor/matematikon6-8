from fractions import Fraction as F
from math import ceil, floor
from spring_evidence import save_review

assert 60+F(90-60,2)==75 and abs(5-4)<7<4+5 and 180-50-60==70
save_review("s6-konstrukcije",[
    F(90,2),F(180,3),"Kružnica","Da" if 2+3>5 else "Ne",F(120,4),"SUS",
    180-42-76,180-45,sum(abs(7-3)<x<7+3 for x in range(11)),1,90+30,
    0 if 4+4<9 else None,"Dva puta prepolovi","Da" if 95+90<180 else "Ne",6,
    max(x for x in range(9) if F("4.5")-F("3.5")<x<F("4.5")+F("3.5"))],
    {"s6-polugodiste-2":F(150,2)},["75°","1 < 7 < 9; dva simetrična položaja","70°"],
    "Konstrukcije uglova, SSS, SUS i USU, uslovi postojanja i broj nepodudarnih oblika.")

from fractions import Fraction as F
from math import ceil, floor
from spring_evidence import save_review

assert 2*(68+112)==360 and F(13,2)==F("6.5") and F(36,4)==9
save_review("s6-paralelogram",[2,4*F("4.5"),"Da",2*3,2*(F("5.5")+8),180-117,"Sve stranice jednake",F(106,2),(F(34,2)-3)/2,"Kvadrat",2*4,"Dijagonale se uzajamno polove",F(46,2)-9,180-2*37,10+16,F(180,1+3)],{"s6-polugodiste-3":F(18,2)},
    ["112°, 68°, 112°","BS=6,5 cm","Stranica 9 cm, dijagonala zavisi i od ugla."],"Od naspramnih i susednih elemenata ka dovoljnim uslovima i klasifikaciji.")

from fractions import Fraction as F
from math import ceil, floor
from spring_evidence import save_review

assert abs(4-3)<9-5<4+3 and F(8,2)**2+F(6,2)**2==25 and abs(5-4)<7<5+4
save_review("s6-cetiri-stranice",[12-7,F(6,2),"AC","Šestar","Ne" if 3+4<12-4 else "Da","ED","Romb",F(18-10,2),sum(abs(11-5-4)<x<11-5+4 for x in range(12)),1 if 3+5==8 else 0,"Ne",7,"7 cm",90,max(x for x in range(10) if abs(10-6-5)<x<10-6+5),"Da"],{},
    ["AE=4 cm; trougao stranica 3,4,4 postoji i BC=ED.","Normalne polovine dijagonala 4 i 3 daju stranicu 5 cm.","1 < 7 < 9 daje dva različita preseka."],
    "Pomoćni trougao, veza sa paralelogramom, stroge granice i dodir kružnica.")

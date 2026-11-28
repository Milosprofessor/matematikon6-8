from fractions import Fraction as F
from math import ceil, floor
from spring_evidence import save_review

assert F(220,4)*7==385 and F(6*8,4)==12 and 2*(100+50)!=100+2*50
save_review("s6-zavisnost",[F(450,3),4*3,"Deli se sa 3","O(0, 0)",F(42,3)*F("2.5"),"Obrnuti" if 2*18==3*12==6*6 else "",F(9*4,6),F(6,-2),F(20-4*2,3),F(180,3)-F(180,6),50,60/F("7.5"),300/F("1.2")*3,F(180,60)-F(180,90),"Ne" if F(10,3)!=3 else "Da",F(120,20)],{"s6-polugodiste-4":F(8*45,6),"s6-izazov-5":3+F(4*(9-3),2)},
    ["385 dinara","12 sati","Odnos nije direktan, jer 2·150 ≠ 200."],"Jedinična cena i stalni proizvod pre složenih obračuna sa fiksnim troškom.")

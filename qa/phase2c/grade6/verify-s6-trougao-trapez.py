from fractions import Fraction as F
from math import ceil, floor
from spring_evidence import save_review

assert F(9*4,2)==18 and F((6+10)*5,2)==40 and F(2*30,5)==12
save_review("s6-trougao-trapez",[F(6*4,2),F(5*8,2),7*3,F(1,2),F(2*42,12),F((10+6)*4,2),F(45,5),"Ostaje ista",F(2*54,6)-12,F(96*3,8),4*18,F(9+15,2)*F("2.5"),30/F("7.5"),"Trougao osnovice 10 i trapez osnovica 3 i 7",F(4+8,2)*(5-3),10*F(4+6,4)],{"s6-polugodiste-8":(F(2*66,6)+4)/2,"s6-izazov-9":F(6*40,24)},["18 cm²","40 cm²","12 cm"],"Od sastavljanja dve kopije do formule, obrnute primene i poređenja pri jednakoj visini.")

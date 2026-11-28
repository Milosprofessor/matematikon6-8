from fractions import Fraction as F
from math import ceil, floor
from spring_evidence import save_review

assert F(14+8,2)==11 and F(10-6,2)==2 and 2*(4+7)==22
save_review("s6-trapez",["Osnovice",F(9,2),90,F(7+13,2),2*9-12,180-63,F(38-2*7,2),2*13,F(15-7,2),F(2*12*3,4),"Ne",4+10+2*5,2*F("3.7"),F(15,2),F((8+10)+8,2),"Ne" if F(15-5,2)>4 else "Da"],{"s6-cetvorouglovi-primena":F(40-2*13,2),"s6-godisnja-9":F(28)/F("1.5"),"s6-izazov-2":(9+F(9+17,2))/2},["11 cm","Krajevi kraće osnovice leže po 3 cm levo i desno od ose.","22 cm"],
    "Od osnovica i srednje linije do rekonstrukcije dužina, obima i provere postojanja.")

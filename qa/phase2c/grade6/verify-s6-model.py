from fractions import Fraction as F
from math import ceil, floor
from spring_evidence import save_review

assert F("-1.5")+4==F("2.5")
assert 3*65+45==240
assert -2-4*F("1.5")==-8 and -2-5*F("1.5") < -8
save_review("s6-model",[
    -350+500, 2-F("-3.5"),"x≥4",F("1.5")/4,-1+F("2.75"),(900-F("175.5"))/2,
    3*F("-2.5")+4,"x>−4",floor((400-95)/F("42.5")),2*F("-1.25")-2,F(150+30,6),
    (F("7.5")-F("-42.5"))/2,floor(F(10,-4))+1,ceil(F("12.6")/F(".75")),F("1.5")-F("4.25"),F(-7+4)/F("-.75")],
    {"s6-primene-primena":F(900-87,3),"s6-izazov-3":floor((500-35)/F("62.5"))},
    ["2,5 °C","65 dinara","Najviše četiri cela minuta."],
    "Od početne vrednosti i promene preko jednake podele do ograničenja u celim brojevima.")

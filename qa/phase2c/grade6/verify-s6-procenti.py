from fractions import Fraction as F
from math import ceil, floor
from spring_evidence import save_review

assert 800*F(15,100)==120 and 840/F(".7")==1200 and 100*F(6,24)==25
save_review("s6-procenti",[F(650,100),F(35,100),36*F(25,100),"Redovna cena",2500*(1-F(12,100)),F(4,25)*100,18/F(".6"),F(920-800,800)*100,1000*F("1.2")*F(".8"),(800+100)/F(".75"),F(16-12,16)*100,F(".075")*400,1980/F("1.1"),F(42,50)*100,F(1500-1200,1500)*100,F(15,100)*40],
    {"s6-odnosi-primena":F(960,3)/F(".8"),"s6-polugodiste-7":640/F(".8")-640,"s6-godisnja-7":F(64,4)*F(".75"),"s6-izazov-4":900/(F("1.25")*F(".9"))},
    ["120 dinara","1200 dinara","25%"],"Deo osnovice, vraćanje osnovice, promena osnovice u uzastopnim popustima.")

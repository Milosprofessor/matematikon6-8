from fractions import Fraction as F
from math import ceil, floor
from spring_evidence import save_review

assert "BC".translate(str.maketrans("ABC","PQR"))=="QR"
# Exact check for a 3-4-5 triangle, O=(3/2,2), I=(1,1).
assert {(F(3,2)-x)**2+(2-y)**2 for x,y in [(0,0),(3,0),(0,4)]}=={F(25,4)}
assert abs(4+3-12)/F(5)==1
save_review("s6-podudarnost",["AC".translate(str.maketrans("ABC","KLM")),"Temena","U centru upisane kružnice",90,"Ne",2*F("3.5"),F(9,2),F(14,2),"SSS",2*F("2.4"),180-63-52,"Simetrala duži AB","Ugao naspram 6 cm","Da","Centar",24-7-8],
    {"s6-trouglovi-primena":2*(21-8),"s6-polugodiste-9":"Jednake udaljenosti od sve tri prave stranica","s6-godisnja-6":8,"s6-izazov-7":3*5},
    ["QR=7 cm i ∠P=36°","OA=OB=OC","Jednake normalne udaljenosti od pravih stranica."],
    "Od odgovarajućih elemenata do kriterijuma, simetrije i konstrukcija centara.")

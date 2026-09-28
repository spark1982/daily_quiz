# -*- coding: utf-8 -*-
import re, json, io

SRC = "Grant(092626)/[Grant]speed_quiz_2026-09-26.html"
DST = "Grant(092826)/[Grant]speed_quiz_2026-09-28.html"

with io.open(SRC, encoding='utf-8') as f:
    html = f.read()

SVG_5PT = '<svg width="145" height="60" viewBox="0 0 145 60" style="display:block;margin:10px auto;"><line x1="20" y1="30" x2="125" y2="30" stroke="#333" stroke-width="2"/><circle cx="20" cy="30" r="4" fill="#185FA5"/><text x="20" y="20" font-size="13" text-anchor="middle" fill="#333">A</text><circle cx="35" cy="30" r="4" fill="#185FA5"/><text x="35" y="20" font-size="13" text-anchor="middle" fill="#333">B</text><circle cx="80" cy="30" r="4" fill="#185FA5"/><text x="80" y="20" font-size="13" text-anchor="middle" fill="#333">C</text><circle cx="110" cy="30" r="4" fill="#185FA5"/><text x="110" y="20" font-size="13" text-anchor="middle" fill="#333">D</text><circle cx="125" cy="30" r="4" fill="#185FA5"/><text x="125" y="20" font-size="13" text-anchor="middle" fill="#333">E</text></svg>'

SVG_6PT = '<svg width="165" height="60" viewBox="0 0 165 60" style="display:block;margin:10px auto;"><line x1="20" y1="30" x2="145" y2="30" stroke="#333" stroke-width="2"/><circle cx="20" cy="30" r="4" fill="#185FA5"/><text x="20" y="20" font-size="13" text-anchor="middle" fill="#333">A</text><circle cx="26" cy="30" r="4" fill="#185FA5"/><text x="26" y="20" font-size="13" text-anchor="middle" fill="#333">B</text><circle cx="45" cy="30" r="4" fill="#185FA5"/><text x="45" y="20" font-size="13" text-anchor="middle" fill="#333">C</text><circle cx="75" cy="30" r="4" fill="#185FA5"/><text x="75" y="20" font-size="13" text-anchor="middle" fill="#333">D</text><circle cx="115" cy="30" r="4" fill="#185FA5"/><text x="115" y="20" font-size="13" text-anchor="middle" fill="#333">E</text><circle cx="145" cy="30" r="4" fill="#185FA5"/><text x="145" y="20" font-size="13" text-anchor="middle" fill="#333">F</text></svg>'

SVG_7PT = '<svg width="165" height="60" viewBox="0 0 165 60" style="display:block;margin:10px auto;"><line x1="20" y1="30" x2="145" y2="30" stroke="#333" stroke-width="2"/><circle cx="20" cy="30" r="4" fill="#185FA5"/><text x="20" y="20" font-size="13" text-anchor="middle" fill="#333">A</text><circle cx="25" cy="30" r="4" fill="#185FA5"/><text x="25" y="20" font-size="13" text-anchor="middle" fill="#333">B</text><circle cx="40" cy="30" r="4" fill="#185FA5"/><text x="40" y="20" font-size="13" text-anchor="middle" fill="#333">C</text><circle cx="70" cy="30" r="4" fill="#185FA5"/><text x="70" y="20" font-size="13" text-anchor="middle" fill="#333">D</text><circle cx="110" cy="30" r="4" fill="#185FA5"/><text x="110" y="20" font-size="13" text-anchor="middle" fill="#333">E</text><circle cx="135" cy="30" r="4" fill="#185FA5"/><text x="135" y="20" font-size="13" text-anchor="middle" fill="#333">F</text><circle cx="145" cy="30" r="4" fill="#185FA5"/><text x="145" y="20" font-size="13" text-anchor="middle" fill="#333">G</text></svg>'

SVG_2X2SQ = '<svg width="84" height="84" viewBox="0 0 84 84" style="display:block;margin:10px auto;"><line x1="10" y1="10" x2="74" y2="10" stroke="#333" stroke-width="1.5"/><line x1="10" y1="42" x2="74" y2="42" stroke="#333" stroke-width="1.5"/><line x1="10" y1="74" x2="74" y2="74" stroke="#333" stroke-width="1.5"/><line x1="10" y1="10" x2="10" y2="74" stroke="#333" stroke-width="1.5"/><line x1="42" y1="10" x2="42" y2="74" stroke="#333" stroke-width="1.5"/><line x1="74" y1="10" x2="74" y2="74" stroke="#333" stroke-width="1.5"/></svg>'

SVG_3X2SQ = '<svg width="116" height="84" viewBox="0 0 116 84" style="display:block;margin:10px auto;"><line x1="10" y1="10" x2="106" y2="10" stroke="#333" stroke-width="1.5"/><line x1="10" y1="42" x2="106" y2="42" stroke="#333" stroke-width="1.5"/><line x1="10" y1="74" x2="106" y2="74" stroke="#333" stroke-width="1.5"/><line x1="10" y1="10" x2="10" y2="74" stroke="#333" stroke-width="1.5"/><line x1="42" y1="10" x2="42" y2="74" stroke="#333" stroke-width="1.5"/><line x1="74" y1="10" x2="74" y2="74" stroke="#333" stroke-width="1.5"/><line x1="106" y1="10" x2="106" y2="74" stroke="#333" stroke-width="1.5"/></svg>'

SVG_3X3RECT = '<svg width="116" height="116" viewBox="0 0 116 116" style="display:block;margin:10px auto;"><line x1="10" y1="10" x2="106" y2="10" stroke="#333" stroke-width="1.5"/><line x1="10" y1="42" x2="106" y2="42" stroke="#333" stroke-width="1.5"/><line x1="10" y1="74" x2="106" y2="74" stroke="#333" stroke-width="1.5"/><line x1="10" y1="106" x2="106" y2="106" stroke="#333" stroke-width="1.5"/><line x1="10" y1="10" x2="10" y2="106" stroke="#333" stroke-width="1.5"/><line x1="42" y1="10" x2="42" y2="106" stroke="#333" stroke-width="1.5"/><line x1="74" y1="10" x2="74" y2="106" stroke="#333" stroke-width="1.5"/><line x1="106" y1="10" x2="106" y2="106" stroke="#333" stroke-width="1.5"/></svg>'

RAW_QUESTIONS = [
 {"stem": "Compute the following series.<br>(a) 2 + 3 + 4 + 5 + 6 + 7 + 8", "opts": ["30", "36", "40", "35"], "ci": 3, "exp": "There are 7 terms. Pair the first and last: 2 + 8 = 10. Sum = 10 &times; 7 &divide; 2 = 35.", "tag": "Gauss", "tagcolor": "#185FA5"},
 {"stem": "Compute the following series.<br>(b) 6 + 7 + 8 + 9 + 10 + 11", "opts": ["48", "51", "54", "45"], "ci": 1, "exp": "There are 6 terms. Pair the first and last: 6 + 11 = 17. Sum = 17 &times; 6 &divide; 2 = 51.", "tag": "Gauss", "tagcolor": "#185FA5"},
 {"stem": "Compute the following series.<br>(c) 4 + 6 + 8 + 10 + 12 + 14", "opts": ["50", "56", "64", "54"], "ci": 3, "exp": "There are 6 terms. Pair the first and last: 4 + 14 = 18. Sum = 18 &times; 6 &divide; 2 = 54.", "tag": "Gauss", "tagcolor": "#185FA5"},
 {"stem": "Compute the following series.<br>(d) 1 + 3 + 5 + 7 + 9 + 11", "opts": ["35", "36", "42", "30"], "ci": 1, "exp": "There are 6 terms. Pair the first and last: 1 + 11 = 12. Sum = 12 &times; 6 &divide; 2 = 36.", "tag": "Gauss", "tagcolor": "#185FA5"},
 {"stem": "Compute the following series.<br>1 + 2 + 3 + 4 + &hellip; + 48 + 49 + 50", "opts": ["1,250", "1,275", "2,550", "1,300"], "ci": 1, "exp": "There are 50 terms. Pair the first and last: 1 + 50 = 51. Sum = 51 &times; 50 &divide; 2 = 1,275.", "tag": "Gauss", "tagcolor": "#185FA5"},
 {"stem": "Compute the following series.<br>2 + 4 + 6 + 8 + &hellip; + 46 + 48 + 50", "opts": ["600", "625", "650", "675"], "ci": 2, "exp": "There are 25 terms. Pair the first and last: 2 + 50 = 52. Sum = 52 &times; 25 &divide; 2 = 650.", "tag": "Gauss", "tagcolor": "#185FA5"},

 {"stem": "Joe puts 5 matchsticks on a table. Each matchstick is 10 cm away from another. How far is the fifth matchstick away from the first one?", "opts": ["30 cm", "40 cm", "50 cm", "60 cm"], "ci": 1, "exp": "5 matchsticks make 5 &minus; 1 = 4 gaps. 4 &times; 10 = 40 cm.", "tag": "Intervals", "tagcolor": "#1D9E75"},
 {"stem": "A road, 500 m long, is to be planted with trees at an interval of 5 m. How many trees can be planted if trees are planted at both ends of the road as well?", "opts": ["99", "100", "101", "102"], "ci": 2, "exp": "Number of intervals = 500 &divide; 5 = 100. With trees at both ends, trees = intervals + 1 = 101.", "tag": "Intervals", "tagcolor": "#1D9E75"},
 {"stem": "It takes John 8 minutes to saw a log into 3 equal lengths. How long does it take for him to saw the same log into 9 equal lengths?", "opts": ["24 minutes", "28 minutes", "32 minutes", "36 minutes"], "ci": 2, "exp": "Cutting into 3 equal lengths needs 3 &minus; 1 = 2 cuts, so each cut takes 8 &divide; 2 = 4 minutes. Cutting into 9 equal lengths needs 9 &minus; 1 = 8 cuts: 8 &times; 4 = 32 minutes.", "tag": "Intervals", "tagcolor": "#1D9E75"},
 {"stem": "25 trees are planted at regular intervals from the beginning of a road to the end of it. The distance between every two trees is 5 m. How long is the road?", "opts": ["100 m", "120 m", "125 m", "130 m"], "ci": 1, "exp": "25 trees make 25 &minus; 1 = 24 intervals. 24 &times; 5 = 120 m.", "tag": "Intervals", "tagcolor": "#1D9E75"},
 {"stem": "21 trees are to be planted at regular intervals along a road that is 800 m long. If both ends of the road are planted with trees as well, how far is one tree from another?", "opts": ["35 m", "40 m", "42 m", "45 m"], "ci": 1, "exp": "21 trees make 21 &minus; 1 = 20 intervals. 800 &divide; 20 = 40 m.", "tag": "Intervals", "tagcolor": "#1D9E75"},
 {"stem": "Each side of a football field is planted with 16 flags. There is one flag at each corner. How many flags are planted altogether in the football field?", "opts": ["56", "60", "64", "68"], "ci": 1, "exp": "Each side has 16 flags including its two shared corners, so each side contributes 16 &minus; 1 = 15 new flags going around. 4 &times; 15 = 60 flags altogether.", "tag": "Intervals", "tagcolor": "#1D9E75"},

 {"stem": "Compute the following.<br>(a) 22 + 78 =", "opts": ["90", "99", "100", "110"], "ci": 2, "exp": "22 + 78 = 100 (2 + 8 makes 10, so the ones digits combine into a round number).", "tag": "Add & Subtract", "tagcolor": "#f5a623"},
 {"stem": "Compute the following.<br>(b) 15 + 85 =", "opts": ["90", "95", "100", "105"], "ci": 2, "exp": "15 + 85 = 100 (5 + 5 makes 10 in the ones place, and 1 + 8 makes 9, so the tens roll over to a round hundred).", "tag": "Add & Subtract", "tagcolor": "#f5a623"},
 {"stem": "Compute the following.<br>(c) 17 + 83 =", "opts": ["90", "96", "100", "103"], "ci": 2, "exp": "17 + 83 = 100 (7 + 3 makes 10 in the ones place, and 1 + 8 makes 9, so the tens roll over to a round hundred).", "tag": "Add & Subtract", "tagcolor": "#f5a623"},
 {"stem": "Compute the following.<br>(d) 54 + 46 =", "opts": ["90", "96", "100", "104"], "ci": 2, "exp": "54 + 46 = 100 (4 + 6 makes 10 in the ones place, and 5 + 4 makes 9, so the tens roll over to a round hundred).", "tag": "Add & Subtract", "tagcolor": "#f5a623"},
 {"stem": "Compute the following.<br>(e) 64 + 36 =", "opts": ["90", "96", "100", "106"], "ci": 2, "exp": "64 + 36 = 100 (4 + 6 makes 10 in the ones place, and 6 + 3 makes 9, so the tens roll over to a round hundred).", "tag": "Add & Subtract", "tagcolor": "#f5a623"},
 {"stem": "Compute the following.<br>(f) 33 + 47 =", "opts": ["70", "76", "80", "84"], "ci": 2, "exp": "33 + 47 = 80 (3 + 7 makes 10 in the ones place, and 3 + 4 makes 7, so the tens combine to 80).", "tag": "Add & Subtract", "tagcolor": "#f5a623"},

 {"stem": "Compute the following.<br>a) 24 x 25", "opts": ["500", "550", "600", "650"], "ci": 2, "exp": "24 = 4 &times; 6, so 24 &times; 25 = 6 &times; (4 &times; 25) = 6 &times; 100 = 600.", "tag": "Multiply", "tagcolor": "#8e44ad"},
 {"stem": "Compute the following.<br>b) 28 x 25", "opts": ["650", "700", "750", "800"], "ci": 1, "exp": "28 = 4 &times; 7, so 28 &times; 25 = 7 &times; (4 &times; 25) = 7 &times; 100 = 700.", "tag": "Multiply", "tagcolor": "#8e44ad"},
 {"stem": "Compute the following.<br>c) 36 x 25", "opts": ["800", "850", "900", "950"], "ci": 2, "exp": "36 = 9 &times; 4, so 36 &times; 25 = 9 &times; (4 &times; 25) = 9 &times; 100 = 900.", "tag": "Multiply", "tagcolor": "#8e44ad"},
 {"stem": "Compute the following.<br>d) 16 x 25", "opts": ["350", "400", "450", "500"], "ci": 1, "exp": "16 = 4 &times; 4, so 16 &times; 25 = 4 &times; (4 &times; 25) = 4 &times; 100 = 400.", "tag": "Multiply", "tagcolor": "#8e44ad"},
 {"stem": "Compute the following.<br>a) 40 x 99", "opts": ["3,900", "3,960", "4,000", "4,060"], "ci": 1, "exp": "40 &times; 99 = 40 &times; 100 &minus; 40 = 4,000 &minus; 40 = 3,960.", "tag": "Multiply", "tagcolor": "#8e44ad"},
 {"stem": "Compute the following.<br>b) 50 x 999", "opts": ["49,500", "49,950", "50,050", "49,995"], "ci": 1, "exp": "50 &times; 999 = 50 &times; 1,000 &minus; 50 = 50,000 &minus; 50 = 49,950.", "tag": "Multiply", "tagcolor": "#8e44ad"},

 {"stem": "5 points A, B, C, D, E are marked on a straight line with AB = 1, BC = 3, CD = 2, and DE = 1 (all different lengths, so no two segments share the same length), as shown below.<br>" + SVG_5PT + "<br>How many line segments of different lengths can be formed altogether?", "opts": ["10", "8", "6", "12"], "ci": 0, "exp": "Every pair of the 5 points makes a segment, and since no two segments share the same length, the count is <i>C</i>(5,2) = 5&times;4&divide;2 = 10.", "tag": "Geometry", "tagcolor": "#E24B4A"},
 {"stem": "6 points A, B, C, D, E, F are marked on a straight line, all at different (unequal) distances from one another so that no two segments share the same length, as shown below.<br>" + SVG_6PT + "<br>How many line segments of different lengths can be formed altogether?", "opts": ["10", "15", "21", "12"], "ci": 1, "exp": "Every pair of the 6 points makes a segment, and no two have the same length, so the count is <i>C</i>(6,2) = 6&times;5&divide;2 = 15.", "tag": "Geometry", "tagcolor": "#E24B4A"},
 {"stem": "7 points are marked on a straight line, all at different (unequal) distances from one another so that no two segments share the same length, as shown below.<br>" + SVG_7PT + "<br>How many line segments of different lengths can be formed altogether?", "opts": ["6", "21", "15", "28"], "ci": 1, "exp": "Every pair of the 7 points makes a segment, and no two have the same length, so the count is <i>C</i>(7,2) = 7&times;6&divide;2 = 21.", "tag": "Geometry", "tagcolor": "#E24B4A"},
 {"stem": "A grid made of 2 columns and 2 rows of unit squares is shown below.<br>" + SVG_2X2SQ + "<br>How many squares of any size are there altogether?", "opts": ["4", "5", "6", "8"], "ci": 1, "exp": "1&times;1 squares: 2&times;2 = 4. 2&times;2 squares: 1&times;1 = 1. Total = 4 + 1 = 5.", "tag": "Geometry", "tagcolor": "#E24B4A"},
 {"stem": "A grid made of 3 columns and 2 rows of unit squares is shown below.<br>" + SVG_3X2SQ + "<br>How many squares of any size are there altogether?", "opts": ["8", "6", "9", "18"], "ci": 0, "exp": "1&times;1 squares: 3&times;2 = 6. 2&times;2 squares: 2&times;1 = 2. Total = 6 + 2 = 8.", "tag": "Geometry", "tagcolor": "#E24B4A"},
 {"stem": "A grid made of 3 columns and 3 rows of unit squares is shown below.<br>" + SVG_3X3RECT + "<br>How many rectangles of any size (including squares) are there altogether?", "opts": ["36", "14", "27", "30"], "ci": 0, "exp": "For an <i>m</i>&times;<i>n</i> grid the number of rectangles is <i>C</i>(<i>m</i>+1,2)&times;<i>C</i>(<i>n</i>+1,2). Here <i>C</i>(4,2)&times;<i>C</i>(4,2) = 6&times;6 = 36.", "tag": "Geometry", "tagcolor": "#E24B4A"},
]

assert len(RAW_QUESTIONS) == 30, "expected 30 items, got %d" % len(RAW_QUESTIONS)
from collections import Counter
tagcount = Counter(q['tag'] for q in RAW_QUESTIONS)
assert all(v == 6 for v in tagcount.values()) and len(tagcount) == 5, tagcount
for q in RAW_QUESTIONS:
    assert q['opts'][q['ci']] is not None

new_block = "var RAW_QUESTIONS = " + json.dumps(RAW_QUESTIONS, ensure_ascii=False) + ";\nvar N = RAW_QUESTIONS.length;"

pattern = re.compile(r"var RAW_QUESTIONS = \[.*?\];\nvar N = RAW_QUESTIONS\.length;", re.S)
new_html, nsub = pattern.subn(lambda m: new_block, html)
assert nsub == 1, "expected exactly 1 substitution, got %d" % nsub

new_html = new_html.replace('20260926', '20260928')

with io.open(DST, 'w', encoding='utf-8') as f:
    f.write(new_html)

print("WROTE", DST, "chapters:", dict(tagcount))

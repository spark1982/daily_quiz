# -*- coding: utf-8 -*-
import re, json, io

SRC_CANON = "Sion(082426)/[Review]sat_reading_wrong33_2026-08-24.html"
SRC_SCAFFOLD = "Sion(092426)/[Review]sat_reading_wrong33_2026-09-24.html"
DST = "Sion(092826)/[Review]sat_reading_wrong33_2026-09-28.html"
TRACKER = "sion_reading_review33_tracker.json"

with io.open(SRC_CANON, encoding='utf-8') as f:
    canon_html = f.read()
m = re.search(r'var RAW_QUESTIONS = ', canon_html)
canon_qs, _ = json.JSONDecoder().raw_decode(canon_html[m.end():])
assert len(canon_qs) == 33, len(canon_qs)

# sort ascending by orig (verify already sorted)
orig_sorted = sorted(canon_qs, key=lambda q: q['orig'])
origs_in_order = [q['orig'] for q in orig_sorted]
assert origs_in_order == sorted(origs_in_order), "not sorted!"

with io.open(TRACKER, encoding='utf-8') as f:
    tracker = json.load(f)

pointer = tracker['pointer']
cycle = tracker['cycle']
total = tracker['total_questions']
per_day = tracker['per_day']
assert total == 33 and per_day == 5

# take [pointer : pointer+5), wrapping
picked = []
idx = pointer
wrapped = False
for _ in range(per_day):
    picked.append(orig_sorted[idx])
    idx += 1
    if idx >= total:
        idx = 0
        wrapped = True

if pointer + per_day > total:
    wrap_amount = (pointer + per_day) - total
    new_pointer = wrap_amount
    cycle += 1
else:
    new_pointer = pointer + per_day

picked_origs = [q['orig'] for q in picked]

# map fields: box -> passage; keep stem, opts, ci, exp, tag ; add tagcolor
TAG_COLORS = {"Information and Ideas": "#185FA5", "Command of Evidence": "#1D9E75", "Inferences": "#f5a623", "Words in Context": "#7b61ff", "Craft and Structure": "#E24B4A", "Text Structure and Purpose": "#0d9488", "Cross-Text Connections": "#d6336c", "Expression of Ideas": "#495057"}

new_questions = []
for q in picked:
    nq = {
        "stem": q["stem"],
        "opts": q["opts"],
        "ci": q["ci"],
        "exp": q["exp"],
        "tag": q["tag"],
        "tagcolor": TAG_COLORS[q["tag"]],
        "passage": q.get("box", "")
    }
    new_questions.append(nq)

# verify opts[ci] sanity (non-empty)
for nq in new_questions:
    assert 0 <= nq['ci'] < len(nq['opts'])

with io.open(SRC_SCAFFOLD, encoding='utf-8') as f:
    html = f.read()

new_block = "var RAW_QUESTIONS = " + json.dumps(new_questions, ensure_ascii=False) + ";"
pattern = re.compile(r"var RAW_QUESTIONS = \[.*?\];", re.S)
new_html, nsub = pattern.subn(lambda m: new_block, html)
assert nsub == 1, nsub

new_html = new_html.replace('var TODAY_STR = "20260924";', 'var TODAY_STR = "20260928";')
new_html = new_html.replace('var QUIZ_KEY = "sionreviewreading";', 'var QUIZ_KEY = "sionreviewwrong33_5";')

assert '20260924' not in new_html
assert 'sionreviewreading' not in new_html

with io.open(DST, 'w', encoding='utf-8') as f:
    f.write(new_html)

# update tracker
tracker['pointer'] = new_pointer
tracker['cycle'] = cycle
tracker['last_generated_date'] = "2026-09-28"
tracker['history'].append({"date": "2026-09-28", "orig_numbers": picked_origs})

with io.open(TRACKER, 'w', encoding='utf-8') as f:
    json.dump(tracker, f, indent=1)
    f.write('\n')

print("picked origs:", picked_origs)
print("old pointer:", pointer, "new pointer:", new_pointer, "cycle:", cycle, "wrapped:", wrapped)
print("WROTE", DST)

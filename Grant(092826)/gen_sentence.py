# -*- coding: utf-8 -*-
import json, io, os, re

BASE_DIR = os.path.expanduser("~") + "/mnt/daily-quiz-batch-10"
REF_FILE = BASE_DIR + "/Grant(092626)/[Grant]sentence_building_2026-09-26.html"
OUT_DIR = BASE_DIR + "/Grant(092826)"
OUT_FILE = OUT_DIR + "/[Grant]sentence_building_2026-09-28.html"

TAGCOLOR = {
    "Adjective": "#185FA5",
    "Adverb": "#1D9E75",
    "Prepositional Phrase": "#f5a623",
    "Purpose Clause": "#E24B4A",
}

def mk(stem, opts, ci, exp, tag):
    return {"stem": stem, "opts": opts, "ci": ci, "exp": exp, "tag": tag, "tagcolor": TAGCOLOR[tag]}

QUESTIONS = []

# ---- Sentence 1: The fisherman paddled. ----
QUESTIONS.append(mk(
    "The ___ fisherman paddled.",
    ["patient", "furry", "spicy", "leafy"],
    0,
    "The completed sentence is \"The patient fisherman paddled.\" \"Patient\" is an adjective describing the fisherman, and it fits someone waiting calmly on the water. \"furry\", \"spicy\" and \"leafy\" are also adjectives, but they make no sense in this sentence.",
    "Adjective"
))
QUESTIONS.append(mk(
    "The patient fisherman ___ paddled.",
    ["bitterly", "steadily", "sweetly", "invisibly"],
    1,
    "The completed sentence is \"The patient fisherman steadily paddled.\" \"Steadily\" is an adverb telling how the fisherman paddled, and it matches a patient, careful person. \"bitterly\", \"sweetly\" and \"invisibly\" are also adverbs, but they make no sense in this sentence.",
    "Adverb"
))
QUESTIONS.append(mk(
    "The patient fisherman steadily paddled ___.",
    ["through the busy airport", "across the quiet lake", "underneath the kitchen table", "inside a shopping mall"],
    1,
    "The completed sentence is \"The patient fisherman steadily paddled across the quiet lake.\" \"Across the quiet lake\" is a prepositional phrase telling where the fisherman paddled, and a lake is where a fisherman paddles. \"through the busy airport\", \"underneath the kitchen table\" and \"inside a shopping mall\" are also prepositional phrases, but they make no sense in this sentence.",
    "Prepositional Phrase"
))
QUESTIONS.append(mk(
    "The patient fisherman steadily paddled across the quiet lake ___.",
    ["to buy a birthday cake", "to fix the broken television", "to reach his favorite fishing spot", "to paint the bedroom walls"],
    2,
    "The completed sentence is \"The patient fisherman steadily paddled across the quiet lake to reach his favorite fishing spot.\" \"To reach his favorite fishing spot\" tells why the fisherman paddled, and it makes sense for someone heading out to fish. \"to buy a birthday cake\", \"to fix the broken television\" and \"to paint the bedroom walls\" are also purpose clauses (to + verb), but they make no sense in this sentence.",
    "Purpose Clause"
))

# ---- Sentence 2: The dancer twirled. ----
QUESTIONS.append(mk(
    "The ___ dancer twirled.",
    ["soggy", "prickly", "graceful", "frozen"],
    2,
    "The completed sentence is \"The graceful dancer twirled.\" \"Graceful\" is an adjective describing the dancer, and it fits the meaning. \"soggy\", \"prickly\" and \"frozen\" are also adjectives, but they make no sense in this sentence.",
    "Adjective"
))
QUESTIONS.append(mk(
    "The graceful dancer ___ twirled.",
    ["clumsily", "elegantly", "sourly", "icily"],
    1,
    "The completed sentence is \"The graceful dancer elegantly twirled.\" \"Elegantly\" is an adverb telling how the dancer twirled, and it matches a graceful performer. \"clumsily\", \"sourly\" and \"icily\" are also adverbs, but they make no sense in this sentence.",
    "Adverb"
))
QUESTIONS.append(mk(
    "The graceful dancer elegantly twirled ___.",
    ["beneath the frozen pond", "inside a shoebox", "across the wooden stage", "atop a speeding train"],
    2,
    "The completed sentence is \"The graceful dancer elegantly twirled across the wooden stage.\" \"Across the wooden stage\" is a prepositional phrase telling where the dancer twirled, and a stage is where a dancer performs. \"beneath the frozen pond\", \"inside a shoebox\" and \"atop a speeding train\" are also prepositional phrases, but they make no sense in this sentence.",
    "Prepositional Phrase"
))
QUESTIONS.append(mk(
    "The graceful dancer elegantly twirled across the wooden stage ___.",
    ["to fix a leaking faucet", "to finish the ballet recital", "to plant tomatoes in the garden", "to repair a flat tire"],
    1,
    "The completed sentence is \"The graceful dancer elegantly twirled across the wooden stage to finish the ballet recital.\" \"To finish the ballet recital\" tells why the dancer twirled, and it makes sense for a graceful performer on stage. \"to fix a leaking faucet\", \"to plant tomatoes in the garden\" and \"to repair a flat tire\" are also purpose clauses (to + verb), but they make no sense in this sentence.",
    "Purpose Clause"
))

def to_js_array(questions):
    lines = [json.dumps(q, ensure_ascii=False) for q in questions]
    return "[\n" + ",\n".join(lines) + "\n]"

def main():
    assert len(QUESTIONS) == 8
    # verify ci correctness and fixed order (already fixed by construction/list order)
    for q in QUESTIONS:
        assert 0 <= q["ci"] < len(q["opts"])
    expected_tag_order = ["Adjective", "Adverb", "Prepositional Phrase", "Purpose Clause"] * 2
    assert [q["tag"] for q in QUESTIONS] == expected_tag_order, [q["tag"] for q in QUESTIONS]

    banned_phrases = ["first option", "second option", "third option", "fourth option", "first choice", "second choice", "the first one", "the second one"]
    for q in QUESTIONS:
        low = q["exp"].lower()
        for bp in banned_phrases:
            assert bp not in low, (bp, q)

    with io.open(REF_FILE, "r", encoding="utf-8") as f:
        html = f.read()

    old_today = 'var TODAY_STR = "20260926";'
    new_today = 'var TODAY_STR = "20260928";'
    assert old_today in html
    html = html.replace(old_today, new_today)

    m = re.search(r"var RAW_QUESTIONS = \[.*?\];\n", html, re.S)
    assert m, "RAW_QUESTIONS block not found"
    new_block = "var RAW_QUESTIONS = " + to_js_array(QUESTIONS) + ";\n"
    html = html[:m.start()] + new_block + html[m.end():]

    with io.open(OUT_FILE, "w", encoding="utf-8") as f:
        f.write(html)

    print("Wrote:", OUT_FILE)
    print("Sentence 1 base: The fisherman paddled.")
    print("Sentence 2 base: The dancer twirled.")

if __name__ == "__main__":
    main()

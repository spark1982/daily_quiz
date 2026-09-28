# -*- coding: utf-8 -*-
import json, random, io, os

BASE_DIR = os.path.expanduser("~") + "/mnt/daily-quiz-batch-10"
REF_FILE = BASE_DIR + "/Grant(092626)/[Grant]advanced_vocabulary_2026-09-26.html"
OUT_DIR = BASE_DIR + "/Grant(092826)"
OUT_FILE = OUT_DIR + "/[Grant]advanced_vocabulary_2026-09-28.html"
TRACKER_FILE = BASE_DIR + "/vocab_advanced_tracker.json"

REVIEW5 = ['reconcile', 'assertion', 'latitude', 'encourage', 'appropriate']
NEW15 = ['unanimous', 'strategy', 'concentrate', 'constitutional', 'capitalize',
         'circumstance', 'discipline', 'modify', 'criteria', 'competent',
         'impact', 'initiative', 'curious', 'harmonization', 'extensive']

# question bank: word -> (stem, opts[list of 4], correct_index, exp)
QBANK = {
"reconcile": (
    "reconcile",
    ["to restore friendly relations between people after a disagreement, or to make two different things or ideas consistent with each other",
     "to build a fence around a garden",
     "to translate a book into another language",
     "to bake bread using a slow oven"],
    0,
    "\"reconcile\" means: to restore friendly relations between people after a disagreement, or to make two different things or ideas consistent with each other."
),
"assertion": (
    "assertion",
    ["a soft melody played on a flute",
     "a confident, forceful statement presented as a fact or firm belief",
     "a type of knot used by sailors",
     "a small container for holding spices"],
    1,
    "\"assertion\" means: a confident, forceful statement presented as a fact or firm belief."
),
"latitude": (
    "latitude",
    ["the sharpness of a kitchen knife",
     "freedom to act or make decisions as one chooses, or the distance of a place north or south of the equator",
     "a fee charged for late library books",
     "the number of seats in a theater"],
    1,
    "\"latitude\" means: freedom to act or make decisions as one chooses, or the distance of a place north or south of the equator."
),
"encourage": (
    "encourage",
    ["to erase something written in pencil",
     "to fold paper into a specific shape",
     "to give someone support, confidence, or hope so that they will do something",
     "to measure the temperature of a liquid"],
    2,
    "\"encourage\" means: to give someone support, confidence, or hope so that they will do something."
),
"appropriate": (
    "appropriate",
    ["extremely expensive and rare",
     "suitable or proper for a particular situation",
     "difficult to pronounce correctly",
     "covered in a thick layer of dust"],
    1,
    "\"appropriate\" means: suitable or proper for a particular situation."
),
"concentrate": (
    "concentrate",
    ["to wander aimlessly without any plan",
     "to celebrate a special occasion",
     "to focus all of one's attention or effort on a single task, or to make a substance stronger by removing part of its liquid",
     "to argue loudly with a neighbor"],
    2,
    "\"concentrate\" means: to focus all of one's attention or effort on a single task, or to make a substance stronger by removing part of its liquid."
),
"constitutional": (
    "constitutional",
    ["relating to the stars and planets",
     "relating to the basic laws and principles that govern a country or organization",
     "relating to cooking and recipes",
     "relating to fashion and clothing design"],
    1,
    "\"constitutional\" means: relating to the basic laws and principles that govern a country or organization."
),
"circumstance": (
    "circumstance",
    ["a musical note played very loudly",
     "a type of small wild flower",
     "a fact or condition connected with or relevant to an event or situation",
     "a tool used for measuring angles"],
    2,
    "\"circumstance\" means: a fact or condition connected with or relevant to an event or situation."
),
"discipline": (
    "discipline",
    ["a brightly colored bird found in rainforests",
     "controlled behavior that comes from training and self-control, or a particular branch of knowledge or study",
     "a sweet drink served at celebrations",
     "a decorative pattern woven into cloth"],
    1,
    "\"discipline\" means: controlled behavior that comes from training and self-control, or a particular branch of knowledge or study."
),
"modify": (
    "modify",
    ["to forget an appointment completely",
     "to shout in order to get attention",
     "to change something slightly, especially in order to improve it or make it more suitable",
     "to bury something underground"],
    2,
    "\"modify\" means: to change something slightly, especially in order to improve it or make it more suitable."
),
"initiative": (
    "initiative",
    ["a type of ancient pottery",
     "a sudden loud noise",
     "a small piece of folded paper",
     "the ability and willingness to start something or take action before others do"],
    3,
    "\"initiative\" means: the ability and willingness to start something or take action before others do."
),
"harmonization": (
    "harmonization",
    ["the process of drying fruit in the sun",
     "the process of adjusting different things, such as laws, systems, or sounds, so that they work together smoothly",
     "the process of digging a well for water",
     "the process of sorting mail by zip code"],
    1,
    "\"harmonization\" means: the process of adjusting different things, such as laws, systems, or sounds, so that they work together smoothly."
),
# fill-in-the-blank style
"unanimous": (
    "After hours of debate, the committee finally reached a ___ decision, with every member in full agreement.",
    ["unanimous", "reluctant", "controversial", "temporary"],
    0,
    "Unanimous describes a decision that every single member agrees on, with no one dissenting."
),
"strategy": (
    "The coach designed a clever ___ to help the team overcome its stronger opponent.",
    ["excuse", "strategy", "compliment", "souvenir"],
    1,
    "A strategy is a careful plan for achieving a goal, which is exactly what a coach needs against a tougher opponent."
),
"capitalize": (
    "The young entrepreneur was quick to ___ on the sudden rise in demand for masks.",
    ["stumble", "apologize", "capitalize", "hesitate"],
    2,
    "To capitalize on something means to take advantage of it for benefit, which is what a sharp entrepreneur does with a new opportunity."
),
"criteria": (
    "Before hiring, the manager listed the ___ that every candidate needed to meet, such as experience and certification.",
    ["excuses", "compliments", "criteria", "complaints"],
    2,
    "Criteria are the standards used to judge or evaluate something, like the qualifications a manager requires of job candidates."
),
"competent": (
    "Even under pressure, the ___ surgeon calmly completed the difficult operation without a single mistake.",
    ["forgetful", "clumsy", "timid", "competent"],
    3,
    "Competent describes someone who has the skill and ability to do a job well, exactly like a surgeon who handles pressure calmly."
),
"impact": (
    "Scientists are studying the long-term ___ that plastic waste has on ocean life.",
    ["impact", "flavor", "rumor", "souvenir"],
    0,
    "Impact refers to the powerful effect something has on someone or something else, such as how plastic waste affects ocean life."
),
"curious": (
    "The ___ toddler opened every cabinet in the kitchen, eager to see what was inside.",
    ["exhausted", "embarrassed", "curious", "stubborn"],
    2,
    "Curious describes someone eager to learn or explore, which matches a toddler investigating every cabinet in sight."
),
"extensive": (
    "The new highway required ___ repairs that took nearly a year to complete.",
    ["brief", "secretive", "playful", "extensive"],
    3,
    "Extensive means very thorough or wide-ranging, fitting repairs large enough to take almost a year to finish."
),
}

def build():
    words = [(w, "Review", "#f5a623") for w in REVIEW5] + [(w, "New", "#185FA5") for w in NEW15]
    random.shuffle(words)
    questions = []
    for w, tag, color in words:
        stem, opts, ci, exp = QBANK[w]
        questions.append({"stem": stem, "opts": opts, "ci": ci, "exp": exp, "tag": tag, "tagcolor": color})
    return questions

def to_js_array(questions):
    lines = []
    for q in questions:
        lines.append(json.dumps(q, ensure_ascii=False))
    return "[\n" + ",\n".join(lines) + "\n]"

def main():
    questions = build()

    # sanity check: opts[ci] must equal the intended correct answer text (already true by construction)
    for q in questions:
        assert 0 <= q["ci"] < len(q["opts"])
    # check no positional language in exp
    banned_phrases = ["first option", "second option", "third option", "fourth option", "first choice", "second choice", "the first one", "the second one"]
    for q in questions:
        low = q["exp"].lower()
        for bp in banned_phrases:
            assert bp not in low, (bp, q)

    with io.open(REF_FILE, "r", encoding="utf-8") as f:
        html = f.read()

    # replace TODAY_STR
    old_today = 'var TODAY_STR = "20260926";'
    new_today = 'var TODAY_STR = "20260928";'
    assert old_today in html
    html = html.replace(old_today, new_today)

    # replace RAW_QUESTIONS block
    import re
    m = re.search(r"var RAW_QUESTIONS = \[.*?\];\n", html, re.S)
    assert m, "RAW_QUESTIONS block not found"
    new_block = "var RAW_QUESTIONS = " + to_js_array(questions) + ";\n"
    html = html[:m.start()] + new_block + html[m.end():]

    with io.open(OUT_FILE, "w", encoding="utf-8") as f:
        f.write(html)

    # update tracker
    with io.open(TRACKER_FILE, "r", encoding="utf-8") as f:
        tracker = json.load(f)
    old_used_count = len(tracker["used_words"])
    tracker["used_words"] = tracker["used_words"] + NEW15
    tracker["last_new_words"] = NEW15
    # cycle unchanged since no wrap occurred
    with io.open(TRACKER_FILE, "w", encoding="utf-8") as f:
        json.dump(tracker, f, ensure_ascii=False, indent=2)

    print("OLD used_words count:", old_used_count)
    print("NEW used_words count:", len(tracker["used_words"]))
    print("cycle:", tracker["cycle"])
    print("review5:", REVIEW5)
    print("new15:", NEW15)
    print("Wrote:", OUT_FILE)

if __name__ == "__main__":
    main()

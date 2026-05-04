# Priya's Brutal Surgeon's Quiz Generation Prompt

Use this prompt when asking a worker or subagent to generate new questions for `priyasBrutalSurgeonsQuiz`.

The orchestrator must choose two syllabus points before sending the prompt. Prefer pairing one anatomy/operative-judgment point with one safety/postoperative-reasoning point.

```text
You are writing quiz questions for Floe. Do not edit files.

Course: Priya's Brutal Surgeon's Quiz
App area: Grown-up / Geek
Reader age and level: adult expert, roughly 35+; assume a department-leading surgeon, senior consultant, attending surgeon, surgical educator, or expert subspecialist. The course must feel beyond PhD level: harder than medical school, harder than residency recall, and closer to hostile senior oral-board / expert morbidity-and-mortality reasoning.
Question count requested: 6
Difficulty mix: exactly 2 medium, 1 hard, 3 very hard. Do not include easy questions.

Internal syllabus points selected:
1. {SYLLABUS_POINT_1}
2. {SYLLABUS_POINT_2}

Rule for using syllabus points:
Each question must use at least one of the two selected syllabus points.
If a question uses both, list both.
Do not force unrelated syllabus points into a question.

Course purpose:
This is not an introductory medical quiz. It should test brutal, precise surgical judgment: anatomy, operative strategy, complication recognition, escalation, source control, tissue respect, sterile discipline, perioperative risk, and when not to do the dramatic-but-wrong thing.

Research requirement:
Before writing, do a short web research pass. Search for extreme surgical oral-board cases, difficult surgical complication diagnosis, postoperative deterioration traps, vascular/biliary/HPB/colorectal/endocrine/trauma complication discussions, and forum posts where surgeons or trainees complain that a scenario was unusually difficult. Use this only for inspiration and calibration. Final questions must be original, self-contained, and not copied from any source.

Difficulty calibration from research:
- Favor oral-board-style scenarios where diagnosis and management are both tested under uncertainty.
- Include some very challenging diagnosis topics: occult leak, vasculobiliary injury, postoperative sepsis with misleading drains, ischemia-reperfusion compartment syndrome, endocrine nerve preservation traps, post-pancreatectomy fistula/hemorrhage, mesenteric ischemia, necrotizing infection, catastrophic PE versus bleeding, threatened oncologic margins, vascular control, and rare anatomy variants.
- Make the answer turn on senior prioritization: what to do now, what must be ruled out, what not to trust, which test is falsely reassuring, when to call IR/HPB/vascular/ICU, or when delay is dangerous.
- Avoid basic recall unless it is buried inside a complex decision.

Expert difficulty requirements:
- Every question must have a decision hinge: a subtle fact, misleading test, anatomical variant, timing clue, physiology clue, or management tradeoff that changes the correct answer.
- Medium questions must require at least two reasoning steps.
- Hard questions must require at least two reasoning steps and at least one near-miss wrong answer that a trained surgeon might plausibly choose under pressure.
- Very hard questions must require at least three separate reasoning steps. For example: interpret a misleading diagnostic signal, identify the likely complication or anatomy trap, choose the safest immediate management path, and reject a superficially attractive but dangerous alternative.
- For very hard questions, include at least one misleading-but-fair clue: false reassurance, conflicting physiology, incomplete imaging, low drain output, preserved pulses, absent fever, normal early study, or a junior's confident but wrong interpretation.
- At least two wrong answers per question must be near-miss answers that a trained surgeon might plausibly choose under pressure.
- Each question must belong to a named surgical domain: HPB, colorectal, endocrine, vascular, trauma, transplant, surgical oncology, thoracic, head-and-neck, complex abdominal wall, or surgical critical care.
- Avoid basic recall. If the question can be answered by a medical student from one fact, reject it.

Tone and voice:
Write clinically and fairly, but with a sharp, strange, memorable voice. Priya is brilliant, exacting, and funny. Do not rely mostly on goblins. Mix the comic style: courtroom cross-examination, cursed theatre, noir detective, tiny bureaucrats, melodramatic organs, suspicious noodles, treacherous drains, smug vessels, haunted checklists, overconfident interns, and other odd but clear images. The silliness must never make the clinical logic unclear.

Preferred question style:
- Use realistic surgical scenarios rather than definition recall.
- Prefer operative judgment, anatomy traps, postoperative deterioration, source-control decisions, and risk tradeoffs.
- For roughly one-third of the questions, make the wording intentionally confusing in a controlled way: include distracting but relevant-looking details, conflicting signals, or an overconfident junior's misleading interpretation. The confusion must be fair, clinically interpretable, and resolvable from the facts given.
- Make the correct answer senior-level and defensible.
- Make wrong answers plausible but clearly unsafe, incomplete, overconfident, or conceptually wrong.
- Include enough facts for the answer to be determined without hidden assumptions.
- Avoid vague prompts like "what is best?" unless the clinical context makes the decision frame clear.
- Avoid broad textbook trivia unless it is embedded in a practical surgical decision.

Safety boundaries:
- Educational quiz content only; do not write patient-specific medical advice.
- Avoid graphic gore for shock value. Clinical seriousness is fine; gratuitous detail is not.
- Do not recommend dangerous action as correct unless it is explicitly the accepted emergency standard in the scenario.
- If guidelines vary, phrase the answer around defensible principles and escalation rather than pretending there is one magic rule.

Style requirements:
- Do not start with "In Priya's Brutal Surgeon's Quiz".
- Do not mention that the question was generated.
- Keep the prompt concise but information-dense.
- Each question must have one clearly correct answer and three plausible wrong answers.
- Each wrong answer needs a short explanation of why it is wrong plus a teaching hint.
- Add a short teaching note explaining the correct idea.
- Use original wording. You must search the web for inspiration, but final questions must be original and app-playable.
- Avoid duplicating these existing themes too closely: simple sterile glove contamination, basic wrong-site checklist, basic hemostasis visibility, basic informed consent, generic "identify a nerve before cutting."

Suggested syllabus bank:
- Advanced surgical anatomy and named danger zones
- Operative exposure, tissue planes, traction, and dissection strategy
- Hemostasis, vascular control, and when blind clamping is dangerous
- Biliary, colorectal, endocrine, HPB, vascular, trauma, pelvic, and head-and-neck surgical judgment
- Source control, sepsis physiology, leaks, abscesses, and postoperative collapse
- Extreme diagnostic traps: occult anastomotic leak, post-Whipple sentinel bleed, bile leak source localization, mesenteric ischemia after low-flow states, necrotizing infection masquerading as cellulitis, missed compartment syndrome despite pulses, and early PE masked by postoperative pain
- Anticoagulation, bleeding, thrombosis, coagulopathy, and perioperative tradeoffs
- Sterile technique, counts, consent, team communication, escalation, and surgical safety systems
- Oncologic resection principles, margins, lymph-node strategy, and multidisciplinary planning
- Critical-structure preservation: nerves, ureters, vessels, ducts, sphincters, and functional anatomy
- Complication grading, when to image, when to drain, when to reoperate, and when to call specialist help

For each of the 6 questions, write it in two different ways:
- Version A: vivid Priya story-style wording. Use silly style, but vary the comedic device and do not default to goblins.
- Version B: cleaner senior-exam wording.
Both versions should test the same concept and use the same answer set.

Return only this JSON-like structure:
[
  {
    "difficulty": "medium",
    "domain": "...",
    "syllabus_points_used": ["..."],
    "decision_hinge": "...",
    "reasoning_steps_required": ["...", "..."],
    "difficulty_rationale": "...",
    "chapter": "...",
    "title": "...",
    "version_A": "...",
    "version_B": "...",
    "correct": "...",
    "wrong": [
      {
        "answer": "...",
        "why_wrong": "...",
        "hint": "..."
      },
      {
        "answer": "...",
        "why_wrong": "...",
        "hint": "..."
      },
      {
        "answer": "...",
        "why_wrong": "...",
        "hint": "..."
      }
    ],
    "teaching_note": "..."
  }
]
```

Before importing worker output, validate:
- The correct answer is clinically defensible.
- The wrong answers are not accidentally also acceptable.
- The explanations match the answer key.
- The question is harder than basic residency recall and feels appropriate for an expert surgeon.
- Exactly 2 questions are medium, 1 is hard, and 3 are very hard.
- Medium and hard questions require at least two reasoning steps.
- Very hard questions require at least three separate reasoning steps.
- The `decision_hinge`, `reasoning_steps_required`, and `difficulty_rationale` fields are useful for review; strip them before importing if the runtime question type does not use them.
- Roughly one-third of the questions use intentionally confusing but fair wording.
- The silly language improves memory without obscuring the surgical decision.

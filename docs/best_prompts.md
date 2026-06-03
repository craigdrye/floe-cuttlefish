# best_prompts.md — the 10 question-generation prompt templates

The current best set of prompt styles for generating Quant Interview Core questions (the round-4 pool: 2 proven controls + 8 learning-informed/warm styles). Full results and the style→question-id map live in `prompt-experiment-log.md`; rationale in `good-prompts.md`.

## How to use
Build each generation prompt as: **shared base + recipe + format rule + ONE style + the target lesson** (topic + a "don't duplicate these" list), then ask for one complete question. The **style** is the only thing that changes between templates — it's the variable being tested.

---

## Shared base (prepend to every prompt)
> COURSE: "Quant Interview Core" (`quant`), Finance, Career. PLAYERS: people prepping FIRST-ROUND quant interviews (prop shops, quant funds, market makers) — sharp STEM students and career-changers ~20–32. APP: Floe, a cute Duolingo-style ocean app with a cuttlefish mascot ("Sensei Cuttle"); warm and playful but never sloppy.

## Recipe (prepend to every prompt)
> LEARNINGS (follow): top-rated questions make the correct answer a STRUCTURAL INSIGHT / the right setup, not a bare number, and rest on a RICH puzzle with one genuine "aha". BANNED shapes (never use): a "race to exactly N adding 1..K" counter; a misère/Nim "take 1-3, last loses" pile; and the two-egg/glass-ball/marble drop. Do not duplicate any existing question. Distractors = plausible misconceptions or a "correct-but-overkill" brute-force method, never cartoonish.

## Format rule (prepend to every prompt — prevents the options-in-prompt bug)
> The prompt field is ONLY the question stem (the scenario plus the question asked). Do NOT put the answer choices inside the prompt — no "A) … B) … C) … D)" list, no "Options:", no embedded menu. The four options live ONLY in the answer fields, and each MUST be its full answer text (never a bare letter like "A"). The prompt must end on a question, not a list of choices.

## Per-question deliverable
> A 4-option multiple-choice question (one correct + 3 wrong, each wrong with a one-line "why it's tempting / where it breaks" and a one-line nudge); a DEEP DIVE (2–3 paragraph, no-spoiler pre-lesson); an ASK ME DIFFERENTLY (same question reworded); a TEACH ME (full explanation); a one-sentence HINT; difficulty; sources.

---

## The 10 style templates

### 1. whiteboard  ★ proven winner
> The correct answer is the right clarifying question or the representation/first move that makes the hidden structure visible (a diagram, a state label, a recursion, the complement, an invariant) — ideally NOT a number but a choice of how to set the problem up. Distractors are plausible-but-worse representations or computing with the wrong frame.

### 2. invariant  ★ proven winner
> Build the question around a hidden invariant the moves cannot break — a conserved quantity, parity, colouring, or monovariant. The correct answer names or applies it to settle the puzzle; distractors are plausible quantities that are NOT actually preserved.

### 3. elegant_shortcut
> Frame so the TEMPTING answer is brute force (enumerate every case, simulate, full casework) and the CORRECT answer is the elegant shortcut that sidesteps it. Include exactly one "correct-but-overkill" distractor (a method that works but wastes the clock) plus two simply wrong.

### 4. reframe_complement
> Solve by FLIPPING the question — count the complement, reason from the goal/end backward, or ask "what MUST be true" instead of enumerating cases. The correct answer is the reframed view that collapses the problem; distractors cling to the hard forward framing.

### 5. one_line_proof
> The correct answer is the single decisive argument that settles it in one line — pigeonhole, parity, an extremal/averaging argument, or an invariant. Name the technique. Distractors are tools that look applicable here but actually fail, and teach the learner to recognise the whole family.

### 6. worst_case_adversary
> Frame it as an adversary deliberately arranging things to make you fail — "what can you still GUARANTEE, no matter what?" The correct answer is the tight guarantee/bound (often via pigeonhole or extremal reasoning); distractors are optimistic best-case answers or off-by-one bounds.

### 7. counterintuitive_truth
> Choose a puzzle whose correct answer is genuinely SURPRISING. The correct answer is the non-obvious truth stated WITH its one-line reason; the distractors are the intuitive-but-wrong guesses most people blurt confidently.

### 8. socratic  (warm)
> Teach by ASKING — a short chain of pointed questions that leads the learner to the answer ("what happens in the simplest case? … so what does that force?"). The correct answer is the realization the questions arrive at; distractors are premature conclusions. Write TEACH ME as that dialogue.

### 9. kind_friend  (warm)
> A patient friend who wants you to UNDERSTAND, not to be impressed — no jargon-flexing; reach for a relatable everyday analogy and build from what the learner already knows. The correct answer is the clear understanding the analogy unlocks; TEACH ME is generous and encouraging.

### 10. thoughtful_brother  (warm)
> You have ONE important idea you really want your sibling to get — invested, a little informal, cutting straight to the heart of what matters ("look, here is the thing to walk away with"). The correct answer is that core idea, shared like a gift; TEACH ME conveys WHY it matters beyond the puzzle.

---

## Notes from the experiment so far
- `whiteboard` and `invariant` are the two consistently top-rated controls (kept across rounds).
- Length tendency (avg prompt words): longest are `kind_friend` (~165), `worst_case_adversary` (~162); `invariant`/`whiteboard` also run long once you count their statement-style options. Leanest: `one_line_proof`, `elegant_shortcut`, `socratic` (~114–123). Add a word cap (e.g. prompt ≤ 90 words, each option ≤ 20) if you want shorter questions.

# Question Quality Review Plan

## Goal

Every playable question should help an outsider learn the underlying topic. Hard questions are welcome, but they should feel like accessible reasoning puzzles: clear setup, enough context, one real thing to think about, and answer choices that teach by contrast.

## Standard

Each kept question should have:

- A main prompt that is at least one sentence, preferably two when the topic is niche.
- A clear learner task: define, distinguish, infer, calculate, diagnose, compare, or choose a best next move.
- Enough context that a motivated outsider can attempt it without already belonging to the field.
- One correct answer and distractors that represent plausible misconceptions.
- A worked `lesson` that explains the concept, not just the answer.
- An `alternatePrompts.plain` version for Ask differently when a human or agent rewrites it.
- A `challengeRating` from 1 to 10 for future sequencing and filtering.

## Challenge Rating

- 1-2: entry-level recognition or one-step recall with familiar language.
- 3-4: accessible concept check with one distinction or small calculation.
- 5-6: moderate reasoning, unfamiliar vocabulary, or two connected ideas.
- 7-8: advanced concept, multi-step reasoning, or niche technical language.
- 9-10: expert-level synthesis, subtle traps, or specialized source knowledge.

## Review Workflow

1. Run `npm run audit:short-prompts`. The audit loads the same catalog builders as the app, so it only includes questions already wired into a course.
2. Start with `reports/shortest-question-prompts.md`.
3. For each flagged prompt, decide: keep and rewrite, merge with a better nearby question, or quarantine/scrap.
4. Rewrite kept questions into a brain-teaser-like form: a concrete setup plus a clear task.
5. Add or improve `lesson`, `mentorHint`, and `alternatePrompts.plain`.
6. Assign `challengeRating`.
7. Use web/source checks for factual or niche claims before finalizing specialized questions.

## Full-Catalog Improvement Plan

### 1. Scope Guard

Only touch questions that are already wired into a course. The working source of truth is the normalized catalog produced by the app builders:

- `buildPrimaryQuestionCatalog`
- `buildHighMathQuestionCatalog`
- `buildHighAdvancedQuestionCatalog`
- `buildHighFunQuestionCatalog`
- `buildUniversityCollegeQuestionCatalog`
- `buildUniversityAcademicQuestionCatalog`
- `buildUniversityPrepQuestionCatalog`
- `buildCareerQuestionCatalog`

Do not spend rewrite time on raw imports, reports, archive files, or orphan question banks unless a wired catalog points to them.

### 2. Inventory Pass

Run `npm run audit:short-prompts` before every major pass. Use the generated JSON as the queue, sorted in this order:

- Recoverable questions with `prompt-media-only`, `prompt-term-only`, `prompt-too-short`, or `prompt-not-sentence-like`.
- Wired tracks with the highest count of flagged questions.
- High-traffic or strategic tracks: philosophy, logic, ethics, math foundations, economics, AP, career skills.
- Remaining playable questions, track by track, even if they are not flagged.

For each track, record:

- Total wired questions.
- Flagged questions.
- Questions rewritten.
- Questions kept as-is.
- Questions quarantined or intentionally deferred.

### 3. Batch Shape

Work in small batches so review stays sharp:

- 20-40 questions per agent for dense humanities or philosophy.
- 30-60 questions per agent for straightforward math/science cleanup.
- One track or one chapter per agent when possible.
- Disjoint files per agent to avoid conflicts.

Each batch should produce:

- Rewritten main prompts where needed.
- `alternatePrompts.plain` for Ask differently.
- Improved `mentorHint`.
- Improved `lesson` where the explanation is thin.
- `challengeRating`.
- A keep/scrap note for obviously bad or unrecoverable questions.

### 4. Question Rewrite Standard

Prefer brain-teaser-like questions: concrete, accessible, and slightly puzzly, without requiring insider status.

Good prompts usually include:

- A short scenario, example, quote, or misconception.
- One clear task.
- Enough context to make niche vocabulary learnable.
- A final question sentence.

Avoid:

- Single technical words as prompts.
- Bare fragments such as `Find the value of` with missing context.
- Trivia that only rewards prior memorization.
- Answer choices that are all unexplained jargon.
- Prompts that depend on an image without saying what the learner should do.

### 5. Explaining Complicated Terms

If a term is important but niche, explain it somewhere:

- In the prompt if the explanation is short and helps the learner attempt the question.
- In `mentorHint` if the term needs a quick foothold.
- In `lesson` if the term needs context, history, contrast, or examples.

Hints are allowed to be longer when the topic is hard. A good long hint should still be useful before the answer is revealed: define one term, identify the key distinction, or point to the reasoning move without giving away the answer.

Example:

`mentorHint: "Metaethics is not asking which action is right. It asks what moral words like 'right' or 'good' mean, and whether moral claims can be true or false."`

### 6. Keep, Improve, Or Scrap

For each question, choose one:

- Keep: clear, accurate, teaches something, and fits the track.
- Improve: useful concept, but wording/hint/lesson/answers need work.
- Scrap/quarantine: misleading, source context missing, wrong answer uncertain, duplicates a better question, or tests useless trivia.

When scrapping, prefer a review override or removal pattern already used in the catalog rather than deleting large imported banks casually.

### 7. Web And Source Checks

Use web/source checks for claims that are factual, specialized, or easy to subtly distort. Use this especially for:

- Philosophy terms and named arguments.
- Law, medicine, finance, compliance, and current-world claims.
- Historical attribution.
- Scientific mechanisms.
- Questions derived from imported or noisy source material.

Do not copy web text into questions. Use sources to verify meaning, then write original, Floe-native wording.

### 8. Validation Gate

After each batch:

- Run `npm run audit:short-prompts`.
- Run `npm run build`.
- Check that flagged count decreases or that the remaining flagged items are intentionally deferred.
- Spot-check the target track in the local app.

Done means:

- No newly introduced type/build errors.
- Rewritten questions are still wired into a course.
- The batch has no single-word or fragment prompts unless intentionally quarantined.
- Every touched question has a `challengeRating`.

## Rewrite Pattern

Weak:

`Epistemology is:`

Better:

`A student says, "I believe it, and it happens to be true, so I know it." Which branch of philosophy studies whether that belief really counts as knowledge?`

Alternate:

`Which area of philosophy asks what knowledge is, how belief differs from knowledge, and what counts as good evidence?`

Teach me:

`Epistemology is the study of knowledge, justification, belief, and evidence. It asks when a belief rises above opinion and becomes something we can responsibly call knowledge.`

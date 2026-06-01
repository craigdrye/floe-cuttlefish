# Floe — Gameplay & Learning Improvement Brief

**Audience:** an implementing agent (GPT 5.5) with write access to this repo.
**Author:** prior review agent (Claude). Findings below were verified by *playing the live app* (Vite dev server + headless Chrome) and reading the source, on 2026-05-31. Line numbers are accurate as of that date — re-grep before editing.
**Mandate:** Improve the *feel*, *retention ("addictiveness")*, and *learning quality* of Floe, **with a strong bias toward the courses** (quizzes), secondarily the games. You have a generous token budget — prefer thorough, verified fixes over quick patches.

## Current status update from Codex

This brief contains useful diagnosis, but several items have already moved. Before implementing, verify current code rather than trusting the older line numbers.

Done or partially done now:
- `src/lib/quizRuntime.ts` no longer force-pads normal four-answer questions to six answers, and it sanitizes meta/strawman distractors such as "Answer with the broad intuition..." before play.
- `src/components/screens/TrainerScreen.tsx` gates the internal "Good question" / "Writing issues" QA sliders behind `localStorage.setItem('floe:showQualityControls', 'true')`; they are no longer shown by default.
- `src/lib/learningSupport.ts` now uses question/correct-answer content, not generated lesson/hint/solution text, for concept matching. Plato's Cave has a specific support path, and the study-design matcher no longer fires on philosophy "thought experiment" wording.
- `npm run audit:learning-support` exists and should be run after learning-support edits. It checks real catalog questions across Philosophy, Research Methods, AP Statistics, and Financial Modeling for cross-domain help-text leaks.

Highest-value remaining work:
- Author real `lesson`, `solution`, `mentorHint`, `alternatePrompts`, and `answers[].misconceptions[].tempting` content for wired questions, starting with tracks in `reports/question-repair-queue.md`.
- Fix generated-course distribution, especially AP Statistics top-up questions being dumped into catch-all chapters instead of syllabus chapters.
- Continue replacing formulaic prompt scaffolding with learner-friendly, concrete question wording.
- Build the real Review / spaced-repetition spine using missed questions, shelved misconceptions, repeated questions, and flashcard ratings.

---

## 0. Orientation (read first)

Floe is a mobile-first React + Vite + TypeScript learning trainer (age 8 → career-changer, five tiers). Start with [README.md](../README.md) and [docs/CONTENT_AUDIT.md](CONTENT_AUDIT.md) for the quality bar.

**Run & verify loop:**
```bash
npm run dev            # Vite at http://localhost:5173/  (boots ~1.5s; a dev server may already be running)
npx tsc --noEmit       # MUST stay clean — it is clean as of this brief
npm run build          # tsc -b && vite build
npm run lint           # eslint .
npm run audit:short-prompts   # writes reports/shortest-question-prompts.{md,json}
npm run audit:learning-support # guards against cross-domain Teach me / Hint / worked-solution leaks
```
**The fastest way to confirm a learning/UX fix is to actually play it.** The reviewer drove the app headlessly via Playwright-over-CDP against the installed Chrome. You can do the same, or simpler: open `http://localhost:5173/`, onboard (age 18, pick Maths/Science/Philosophy), then **Quizzes → Philosophy → Epistemology** and **Quizzes → AP Statistics** are the two reference courses used throughout this brief. **Verify behavior in the running app, not just in tests** — several issues below are invisible in unit tests but obvious on screen.

**Key files (course/learning path):**
- [src/lib/learningSupport.ts](../src/lib/learningSupport.ts) — generates hint / Deep Dive lesson / worked solution. **NEW & untracked — the locus of the P0 bug below.**
- [src/components/screens/TrainerScreen.tsx](../src/components/screens/TrainerScreen.tsx) — the quiz UI (answers, Hint/Teach me/Ask differently, feedback, misconception display, quality sliders).
- [src/lib/quizRuntime.ts](../src/lib/quizRuntime.ts) — `prepareQuestionForPlay`, `buildTrackQuiz`, `ensureSixAnswerChoices`, `genericDistractorPool`, prompt expansion.
- [src/data/questionCatalog/universityAcademic.ts](../src/data/questionCatalog/universityAcademic.ts) — per-track mentor-hint openers + lesson/prompt generators (source of the P0 trigger).
- [src/data/questionCatalog/types.ts](../src/data/questionCatalog/types.ts) — the `Question` shape. Note the fields you should be *using*: `solution`, `lesson`, `mentorHint`, `alternatePrompts.{plain,teaching}`, `answers[].misconceptions{tempting,flaw,reframe}`, `difficulty (1-5)`, `challengeRating (1-10)`, `subTopic`.
- [src/components/screens/MapScreen.tsx](../src/components/screens/MapScreen.tsx) / [ChapterSubMapScreen.tsx](../src/components/screens/ChapterSubMapScreen.tsx) — chapter path, lesson path, mode tabs.
- [src/lib/lessonGrouping.ts](../src/lib/lessonGrouping.ts), [src/lib/trackData.tsx](../src/lib/trackData.tsx) — how questions group into chapters/lessons.
- Store: [src/store/quizSlice.ts](../src/store/quizSlice.ts), [src/store/types.ts](../src/store/types.ts) — `flaggedQuestions`, `repeatedQuestions`, `questionQualityRatings`, `flashcardRatings`, misconception "museum/shelf".

**Important context:** the repo is being actively edited. `src/lib/learningSupport.ts` and the wiring in `TrainerScreen.tsx` were added *during* the review — they are a promising, **half-finished** attempt to fix templated pedagogy. Treat them as a foundation to repair and extend, not as settled code. Coordinate so you don't clobber in-flight work; `git status` before and after.

---

## What's already good (preserve these — do not regress)
- Cohesive ocean/cuttlefish aesthetic and mascot voice ("Sensei Cuttle").
- Fast onboarding; Duolingo-style snaking chapter path; per-question toolbelt (Hint / Teach me / Ask differently / Calculator / Note pad).
- Reward feel: confetti, varied success lines, achievement toasts, XP, score rings, 3-star completion, Floe gliding to the next node.
- **The misconception ("why-wrong") display works and is genuinely good** — on a wrong answer it shows *Why this was tempting / Where it breaks / Better move* from `answers[].misconceptions`. Keep it; just feed it better data (see P2-c).
- Solid mini-game implementations (Floedle's per-letter pastel keyboard, etc.).

---

# Work items (priority order)

## P0 — Correctness bug actively teaching wrong things: concept-matcher misfire

**Symptom (reproduced live):** Open **Philosophy → Epistemology**. On the *Plato's Cave* question, tap **Teach me** and **Hint**. The "Deep Dive Lesson" is about **study design / random sampling / sampling bias**, and the worked solution reads *"…the design determines the strength of the claim. Check the sampling method, comparison group, and assignment method…"* — completely unrelated to Plato's Cave. This affects **most of the Philosophy course**, not one question.

**Root cause (confirmed):**
1. [learningSupport.ts](../src/lib/learningSupport.ts) `buildLearningSupport()` (~L354) picks a `ConceptSupport` via `conceptSupports.find(s => s.test(questionContext(question), question))` — **first match wins**, broad single-word regexes.
2. `questionContext()` (~L28) concatenates `topic + chapter + title + prompt + solution + lesson + mentorHint + answer labels` and lowercases it.
3. The Philosophy track's mentor-hint **opener** is *"Rebuild the argument in plain language, then separate the conclusion from the premises or **thought experiment** doing the work."* — see [universityAcademic.ts:84](../src/data/questionCatalog/universityAcademic.ts#L84) (and `philSenior` at L89; `grep -n "thought experiment"` → 6 hits). That opener is baked into every philosophy `mentorHint` via `buildAcademicMentorHint` (L113).
4. The **study-design** concept (array index ~11) tests `/\b…|experiment|…\b/`. "thought experiment" → matches `\bexperiment\b`. Because study-design sits *before* `validity` and `ethics` in the array, philosophy questions that don't hit an earlier concept (Gettier, IQR…) **fall through to the sampling-bias lesson.**

**What to do (make the matcher trustworthy):**
- Stop matching against contaminated/generated text. At minimum, build the match context from **author-controlled, content-bearing fields only** (`title`, `prompt`, `correct answer label`) — exclude `mentorHint`, generated `lesson`, and the injected generic distractor labels (see P2-b).
- Replace broad single-word triggers with **anchored, multi-signal** matches (e.g. require the *topic/chapter* to be compatible, or require ≥2 distinct keywords, or word-boundary phrases like `"thought experiment"` should NOT map to empirical "experiment").
- Add a **topic/domain guard**: a `Topic`/chapter allow-list per concept so a philosophy question can never resolve to a statistics concept.
- Decide ordering deterministically (most-specific first) and make "no confident match" fall back to a *neutral, content-safe* explainer rather than a wrong-domain one.

**Acceptance criteria:**
- Playing Philosophy → Epistemology (Plato's Cave, Utilitarianism, Ad Hominem, etc.), Teach me / Hint / worked solution are about the actual topic, never about sampling/study design.
- **Add a regression test** (`src/lib/learningSupport.test.ts` or similar) that runs `buildLearningSupport` over a curated set of real questions from ≥4 unrelated tracks and asserts no cross-domain concept fires (e.g. a philosophy question never returns the study-design lesson; a finance question never returns the ethics lesson). Drive it from the actual catalog builders so it stays honest.
- `npx tsc --noEmit` clean; `npm run build` passes.

> Note: when the matcher *does* fire correctly (Gettier → stopped-clock example; IQR → `20 − 12 = 8` walkthrough), the output is excellent. The goal is to make correct firing reliable, not to remove the concept layer.

---

## P1 — Make "teaching" real (highest learning ROI)

**Problem:** The four help affordances *look* like depth but mostly bottom out in templates. With P0 fixed, ~23 concepts in `learningSupport.ts` cover common cases, but the long tail still gets generic fallbacks:
- **Worked solution** for unmatched questions just restates the correct label (`fallbackWorked`, L112). For the *original* thin data it was literally "Worked solution: 8".
- **Deep Dive lesson** for unmatched questions is generic ("…names a recurring question, argument pattern, or debate…", generated by `philosophyLesson` L135 and siblings).
- **"Ask differently"** rewrites to a *vaguer* prompt ("In plain language, what is the best answer for the philosophy idea X?") and regenerates distractors — often worse than the original.

**What to do (pick the strategy with the user; both are valid):**
- **(a) Authoring pass:** generate genuine per-question `lesson` (concept + concrete example/analogy), `solution` (the *method*, with steps), and a *content-specific* `mentorHint` (points at the idea, doesn't give the answer), then store them on the questions. You have ~38k questions; **spend tokens on teaching the ones that exist, not on more questions.** Prioritize wired, high-traffic tracks (use `npm run audit:short-prompts` and the existing [docs/question-quality-review-plan.md](question-quality-review-plan.md) workflow — it already defines batch shape, the keep/improve/scrap rubric, and a validation gate). Author `alternatePrompts.plain` and `alternatePrompts.teaching` so "Ask differently"/"Teach me" stop being mechanical.
- **(b) Expand the concept library** in `learningSupport.ts` to cover more recurring concepts, but only behind the P0 precise matcher.

**Acceptance criteria:** For a sampled set of questions across tiers, "Teach me" explains the *concept* (with an example) and the worked solution shows the *method*, not a restatement. No question shows a worked solution equal to the correct answer label. `genericLesson`/`thinSolution`/`genericHint` detectors (L48-L84) flag → 0 on the touched tracks.

**Bonus, low effort, high payoff:** add a short **"Learn" card before each lesson's questions** (teach-then-test), since today it is quiz-first and "Teach me" is post-answer only.

---

## P2 — Course structure & content quality (mainly courses)

### P2-a. Broken content distribution in generated courses
**Evidence:** Walking **AP Statistics**, syllabus Units 1–13 each present as a **single-question stop**, while the course's ~186 questions pool into two generic end-chapters ("Data and Study Design" ≈21, "Exploratory Data Analysis" ≈8). Hand-curated courses (**Formal Logic**: 16 chapters, 1–9 q each; **Philosophy**) distribute well — so this is specific to how 103-pass top-up content was bucketed.
**What to do:** map top-up questions back onto the real syllabus chapters (use [src/data/syllabi/](../src/data/syllabi/) as canonical structure; grouping logic in [lessonGrouping.ts](../src/lib/lessonGrouping.ts)). No syllabus chapter should be a lone-question stop while generic catch-all chapters hold the bulk.
**Acceptance:** every chapter on a generated course's path has a sensible question count; no "Misc/Data and Study Design" dumping ground holding the majority.

### P2-b. Forced 6-answer padding injects strawman distractors
**Evidence:** Most questions show 2 obviously-wrong "meta" options, e.g. (University topic) *"Use the adjacent concept without checking the exact definition"* and *"Answer with the broad intuition and skip the formal test"*. Seen on Formal Logic *and* Plato's Cave.
**Root cause:** `ensureSixAnswerChoices` (L345) pads every question to 6 options using `genericDistractorPool` (L232, topic-keyed filler) + `makeGeneratedDistractor` (L330). The compact data format gives 1 correct + 3 wrong, so 2 filler options are always appended.
**What to do:** stop forcing 6. Allow 3–5 *real* options; only pad when a question genuinely has too few, and pad with plausible misconception-based distractors (not "skip the work" meta-options). This violates the README quality bar ("distractors reflect real misconceptions, not cartoonish strawmen") and makes MC too easy.
**Acceptance:** no question shows the generic "skip the formal test / use the adjacent concept" options; distractor count varies naturally; the matcher in P0 no longer sees these strings (they also pollute `questionContext`).

### P2-c. "Why this was tempting" is often filler
On wrong answers, `tempting` frequently renders the generic *"This answer follows a common shortcut, so it feels plausible at first glance."* because the compact data only carries `[label, flaw, reframe]` (no `tempting`). The `flaw` and `reframe` are real and good. → Author/generate `tempting` lines, or derive them from the distractor, so the museum/shelf feature teaches.

### P2-d. Redundant chapter taxonomy
**Philosophy** has overlapping buckets: *Ethics and Moral Theory* (1q) + *Ethics* (4q) + *Ethical Inquiry* (6q); *Knowledge and Skepticism* (1q) + *Epistemology* (15q). Likely from merging hand-authored + generated banks. Consolidate to syllabus-literal chapters (README: "Chapter names match the syllabus literal").

### P2-e. Formulaic prompt scaffolding
Many rewritten prompts share a visible template: *"A learner is checking the philosophy idea 'X'. Which answer best completes this sentence…"* (`rewritePhilosophyFragmentPrompt`, L126; sibling for research methods L153) and the prompt-expansion prefix *"This {chapter} question is about {title}."* Across a lesson this reads as machine-generated. Vary framings; let the scenario carry the question.

---

## P3 — Feel, reward economy, retention (addictiveness)

- **P3-a. Hide QA tooling from learners.** The **"Good question" / "Writing issues"** range sliders render under every answered question for everyone — [TrainerScreen.tsx:737-758](../src/components/screens/TrainerScreen.tsx#L737-L758) (`questionQualityRatings`, `setQuestionQualityRating`). This is internal review tooling; gate it behind a dev/QA flag (env or a hidden setting), not the default play experience.
- **P3-b. Reward economy is decoupled from effort.** A 1-question chapter awards instant 3 stars + 100 ring — max reward for trivial effort deflates the currency. Tie stars/XP to first-try, no-hint, speed, streak-within-lesson, and **difficulty** — `challengeRating (1-10)` and `difficulty (1-5)` already exist on `Question` but are invisible in play. Surface difficulty badges; consider an end-of-chapter "boss" question.
- **P3-c. Decide one retention spine.** Hearts (5/5), a daily streak ("1 day"), and "infinite random" (README thesis) pull in different directions. Pick the hook (daily streak vs mastery progression) and make it central. If hearts gate nothing, either wire in stakes or remove them.
- **P3-d. Mode tabs over-promise.** `Daily / Endless / Doom / Podcast / Review` sit atop every course ([MapScreen.tsx:~283-289](../src/components/screens/MapScreen.tsx#L283-L289)). **"Podcast" plays an identical multiple-choice trainer** (no audio/listen affordance). "Daily" is the default and Floedle shows "TODAY'S PUZZLE <date>", contradicting the "infinite random, no daily" thesis. Either give each mode a real, distinct experience or prune to the ones that deliver.
- **P3-e. Spaced-repetition Review spine (biggest retention + learning lever).** The data model is already most of the way there: `flaggedQuestions`, `repeatedQuestions`, the misconception "shelf/museum", and `flashcardRatings`. Build a real Review mode that resurfaces missed questions / shelved misconceptions on a schedule. This also gives a legitimate reason to return daily.
- **P3-f. Confirm-tap friction.** Answers require a select-then-confirm "Tap again" ([TrainerScreen.tsx:401,583](../src/components/screens/TrainerScreen.tsx#L401)). Nice anti-misclick guard, but on *every* answer it adds friction — consider making it a setting or only for high-stakes items.
- **P3-g. Flashcards feature is invisible.** The new [FlashcardsScreen](../src/components/screens/FlashcardsScreen.tsx) + [curatedFlashcards.ts](../src/data/curatedFlashcards.ts) only have decks for ~3 tracks (`quant` + 2), which a typical onboarding profile never reaches. Either expand deck coverage or surface where decks exist. (Also: minor — the username field's scramble-animation placeholder reads as a glitch ("elp thiCra?ig") in static frames; confirm it settles quickly.)

---

## Games (secondary)
Solid and finished, but disconnected from learning. **Bridge them:** Floedle already weights its word pool 65% toward interests — extend the idea so Connections/Nerdle can be themed to the learner's *current chapter vocabulary*, turning "brain break" into stealth review.

---

## Constraints & definition of done
- Keep `npx tsc --noEmit` clean (strict) and `npm run build` green after every batch.
- Don't delete large imported question banks casually — prefer review-override/removal patterns already in the catalog (see [docs/question-quality-review-plan.md](question-quality-review-plan.md) §6).
- Match surrounding code style; respect the quality bar in [docs/CONTENT_AUDIT.md](CONTENT_AUDIT.md) (bespoke `whyWrong`, real misconceptions, syllabus-literal chapter names, `regions[]`/`lastReviewed` where relevant).
- **Verify in the running app**, not only in tests. For each item, state what you changed and paste the before/after you observed on screen.
- Suggested sequence: **P0 → P2-b (also de-pollutes P0's context) → P1 → P2-a/d → P3**. P0 is non-negotiable and small; do it first and add the regression test.

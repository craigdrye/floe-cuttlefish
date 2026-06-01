# Floe Improvement Master Plan

This plan turns the latest playtest reviews into an implementation sequence for Floe 16. The north star is simple: Floe should stay cute, silly, and alive, while the serious courses become genuinely trustworthy teaching products.

## Product Pillars

1. **Question Quality First**
   Every playable question should teach a real concept. Distractors should be plausible misconceptions, not obvious nonsense. Wrong-answer feedback should explain the trap.

2. **Courses Feel Earned**
   A course should have a learning arc: foundation, application, synthesis, and a final boss/capstone. One-question chapters and catch-all dumping grounds make rewards feel cheap.

3. **Review Is The Game**
   Missed questions, misconceptions, and flashcard ratings should feed a spaced-repetition loop. The daily habit should mean tending the learner's weak spots, not just seeing a random puzzle.

4. **Career Tracks Are The Premium Spine**
   Career-changer content is the clearest differentiator. Credential, medical, law, finance, and compliance tracks need higher trust, source review, blueprint alignment, and mock-exam/interview modes.

5. **Floe Has A World**
   The cuttlefish/reef identity should become a learning mechanic: misconceptions, mastery, review, and streaks should visibly change the learner's reef and Floe's patterns.

## Phase 0: Plumbing Before More Authoring

These fixes unlock good existing content and remove known bad filler before agents spend time rewriting it.

- Fix track-key mismatches where hand-authored banks exist but cards route to generated fallbacks.
- Kill fallback-blueprint recycling in `highGenerated.ts`, especially tiny blueprint sets reused across unrelated tracks.
- Demote playable tracks with zero wired content, and promote tracks that already have content but are hidden.
- Validate guess-the-thing tracks: cards, image assets, media wiring, and game/course placement should agree.
- Add CI/audit checks for orphaned tracks, zero-count playable tracks, duplicate track ids, and repeated fallback blueprint use.

## Phase 1: Semantic Question Rewrite

Mechanical prompt audits now pass, so the remaining problem is semantic. Rewrite-first; quarantine only when a question has no teachable core.

Priority order:

1. Authored joke distractors, for example "Only sports scores", "Only museum labels", "What color is the debit card design?"
2. Boilerplate `whyWrong` families, especially imported trivia banks where every wrong answer says the same thing.
3. Source-jargon leakage, for example prompts that mention an external textbook exercise the learner has not seen.
4. Formulaic wrappers, for example "A learner runs into the idea..." repeated across a whole lesson.
5. High-stakes serious tracks: finance, law, medical, compliance, and credential prep.

Rewrite standard:

- Prompt uses a concrete scenario or teachable contrast.
- Correct answer is concise and defensible.
- Wrong answers are plausible learner mistakes.
- Each wrong answer has a specific flaw and reframe.
- `lesson`, `solution`, `mentorHint`, `alternatePrompts.plain`, and `challengeRating` are added or improved when the local format supports them.

## Phase 2: Course Architecture

Fix course structure after the worst semantic question issues are no longer polluting the experience.

- AP Statistics and similar generated courses should distribute questions into syllabus chapters instead of one-question units plus catch-all chapters.
- Philosophy should consolidate duplicate taxonomy: Epistemology vs Knowledge/Skepticism, Ethics vs Ethical Inquiry, etc.
- Each chapter should target a reasonable question band, roughly 6-12 for most courses.
- Lessons should open with a short learn-card or flashcard concept primer before testing.
- Boss questions should synthesize the chapter rather than being just another random item.

## Phase 3: Trust Layer For Serious Courses

High-stakes tracks need a higher bar than casual games or general trivia.

- Add and enforce `lastReviewed` for regulation/exam-adjacent tracks.
- Map credential tracks to official exam blueprints or authoritative syllabi.
- Add a citation/source-confidence field or sidecar metadata for law, medicine, finance, and compliance claims.
- Build an audit queue for stale regulation-sensitive questions.
- Use web/source verification during rewrites; do not copy source text, but verify the idea before authoring.

## Phase 4: Measurement And Feedback Loop

Use player behavior to find bad questions faster than humans can.

- Track first-try-correct rate per question.
- Flag likely joke-distractor questions when first-try-correct approaches 100%.
- Flag likely ambiguous or mis-keyed questions when one wrong answer attracts most players.
- Track hint/Teach-me usage per question to find unclear prompts.
- Promote the most-picked wrong answer into the most carefully authored misconception explanation.
- Feed weak concepts into Review mode and into the learner's visible reef.

## Phase 5: Creative Learning Features

These should build on existing data structures rather than becoming decorative side quests.

- **Misconception Monsters:** wrong-answer misconceptions become collectible creatures. Retiring one adds it to the learner's museum.
- **Living Reef:** mastered concepts add coral and creatures; neglected concepts fade until reviewed.
- **Floe Camouflage:** mastery unlocks course-colored cuttlefish patterns.
- **Stump Floe:** the learner explains a concept, then Floe asks naive follow-up questions. This uses the protégé effect.
- **Adaptive Analogies:** Deep Dive examples adapt to onboarding interests.
- **The Dive:** Doom mode becomes a depth run where questions get harder as the water darkens.
- **Two Cuttlefish Debate:** logic, ethics, and economics questions become short argument scenes where the learner judges the reasoning.
- **Floe Wrapped:** periodic recap of concepts mastered, misconceptions retired, and hardest wins.

## Phase 6: Technical Guardrails

The catalog is large enough that quality needs continuous enforcement.

- Add semantic audit scripts that fail or warn on repeated rationales, joke distractor signatures, source-jargon leakage, and formulaic wrapper overuse.
- Keep a golden set of excellent questions and compare new rewrites against that standard.
- Split content delivery into course packs so the mobile app does not drag a massive total payload.
- Use generated reports as the agent queue, not one-off manual grep.
- Run `npx tsc --noEmit`, `npm run build`, and a browser smoke test after each batch.

## Immediate Implementation Queue

1. Add semantic audit tooling and reports.
2. Rewrite the worst philosophy and career joke distractors.
3. Audit fallback-blueprint routing and zero-content playable tracks.
4. Run the app and verify at least one game and one recovered course.
5. Hand GPT 5.5 the generated report queue plus this plan for the deeper rewrite pass.

## Pass 1 Landed In Rebuild 16

- Added `npm run audit:semantic-quality`, which writes `reports/semantic-question-quality-audit.{md,json}`.
- Ran the semantic audit: 4,357 issue instances remain, led by repeated `whyWrong`, meta-distractors, lazy rationales, source-jargon leakage, and obvious irrelevant distractors.
- Rewrote a first slice of authored joke distractors in generated philosophy, career AML, and formal logic content.
- Added a course-picker guard so normal playable tracks with no loaded question bank or zero playable questions are hidden before they can crash a learner.
- Repaired the highest-priority authored-learning queue item in quant interview core by adding a real solution, alternate prompts, challenge rating, and fuller lesson.
- Browser smoke-tested Floe 16 on port 5175: career course picker, Data Science / ML course map, Guess game category, and Connections all loaded; Connections instructions stay collapsed by default.

## Next Best Batch

1. Use `reports/semantic-question-quality-audit.md` to attack the repeated-rationale families first, especially `openSatImported.ts`, `fcc.ts`, and any OpenTrivia imports that still use source-level boilerplate.
2. Make a track-key alias decision for collection ids before rewriting missing generated cards; otherwise progress keys may splinter.
3. Add an orphan/zero-content track audit that compares `allTracks` to loaded catalogs and reports missing ids explicitly.
4. De-template the philosophy workout prompts added in this pass; the distractors are better now, but the repeated "A learner runs into..." wrapper should still be replaced with more bespoke stems.
5. Start course-architecture work on the worst visible duplication: AP Statistics distribution and Philosophy taxonomy.

## Pass 2 Landed In Rebuild 16

- Added precise primary catalog aliases for `earlyMathReview` and `readingVocab6th`, recovering content that existed under generated `col-*` ids without changing learner progress keys.
- Deliberately did **not** alias the broad Khan/CK-12 collection cards after testing, because that would expose a large duplicate imported bank and inflate wired question count from roughly 41k to 57k.
- Removed learner-facing IMS/OpenSAT source provenance from imported statistics/SAT lessons and prompts. Semantic audit source-jargon flags dropped from 198 at first audit, to 178 after IMS cleanup, to 98 after OpenSAT cleanup.
- Reran checks: TypeScript clean; short-prompt authored repair queue remains empty at priority >= 30; semantic audit now reports 4,257 issues.

## Pass 3 Landed In Rebuild 16

- Rewrote the OpenSAT imported distractor feedback family across 3,556 distractors / 1,200 questions so learners no longer see the repeated "OpenSAT distractor" boilerplate.
- Reworked all 141 FreeCodeCamp imported challenge questions from generic syntax/runtime/logic misses into topic-specific coding traps. These now name the lesson target and give code-review style hints for loops, operators, strings, arrays, objects, functions, conditionals, variables, and HTML.
- Tightened the FCC classifier after sampling: JavaScript prompts that contain `<dfn>` markup no longer get misclassified as HTML.
- Reran checks: TypeScript clean; semantic audit now reports 3,914 issues, down from 4,257 at the start of this pass. Repeated `whyWrong` flags dropped to 2,319.

## Next Best Batch After Pass 3

1. Attack the next repeated-rationale families: `openTriviaGeographyImported.ts` ("does not match the geographic clue") and `openTriviaBrainTeasersImported.ts` ("misses the trick...").
2. Tighten OpenSAT math feedback further by making category rationales question-specific, especially numeric choices that still repeat by answer label.
3. Repair the OpenSAT lesson text rows with stripped notation such as "Let represent..." before learners see those as worked solutions.
4. Keep moving from report-led rewrites toward product-led structure: AP Statistics chapter distribution and Philosophy taxonomy are still visible course-quality problems.

## Pass 4 Landed In Rebuild 16

- Rewrote the OpenTrivia Geography repeated-rationale family across 1,046 distractors / 349 records.
- Replaced the repeated source-level geography flaw with learner-facing feedback that names the wrong option, the correct answer, and the clue family: capitals, rivers, islands, landforms, borders, deserts, population/ranking, or general place clues.
- Removed remaining visible OpenTrivia geography provenance strings from lessons and softened over-specific "water feature" language into broader geography wording after sampling.
- Reran checks: TypeScript clean; semantic audit now reports 3,565 issues, down from 4,257 at the start of Pass 3 and 3,914 after the FCC pass. Repeated `whyWrong` flags dropped to 1,970.

## Next Best Batch After Pass 4

1. `openTriviaBrainTeasersImported.ts` is now the biggest obvious repeated-rationale family: "This answer misses the trick..." appears 197 times. Rewrite it into trick-type feedback: literal-wording trap, arithmetic trap, impossible-premise trap, ranking/order trap, and lateral-thinking trap.
2. OpenSAT still has numeric repeated answer labels (`"2"`, `"4"`, `"1"`, etc.) because many math distractors reuse the same answer value. Make those rationales question-specific or repair the worst SAT lesson rows first.
3. Source-jargon count remains at 98; identify whether those are true learner-facing leaks or benign `source:` metadata before changing more files.

## Pass 5 Landed In Rebuild 16

- Rewrote the OpenTrivia Brain Teasers repeated-rationale family across 503 distractors / 197 records.
- Replaced the generic "misses the trick" feedback with trap-type explanations for literal-wording, math/pattern, possibility, truth-teller, riddle-metaphor, and lateral-thinking questions.
- Replaced source-provenance brain-teaser lessons with short learner-facing "Brain teaser check" explanations.
- Fixed escaped answer quotes after sampling the generated source, then reran checks.
- Reran checks: TypeScript clean; semantic audit now reports 3,368 issues, down from 4,257 at the start of Pass 3. Repeated `whyWrong` flags dropped to 1,773.

## Next Best Batch After Pass 5

1. OpenSAT repeated numeric rationales are now the obvious largest remaining repeated group. The safest next move is to repair the known broken SAT lessons first (`Let represent...`, contradictory no-real-solution rows), then make numeric rationales question-specific.
2. Review source-jargon flags manually before bulk edits; the count stayed at 98 even after visible OpenTrivia lesson cleanup, so some may be metadata rather than learner-facing text.
3. Start de-templating the remaining `formulaic-wrapper` prompts. The count is small (8), which makes it a clean hand-authored pass.

## Pass 6 Landed In Rebuild 16

- Repaired four concrete OpenSAT trust bugs:
  - a Venn-diagram lesson with stripped variables;
  - a rectangle-width lesson with stripped equations;
  - a rational-equation item whose stored answer contradicted its own no-real-solution working;
  - a parabola intercept item whose equation did not match its stored answer.
- Replaced the remaining formulaic prompt wrapper helpers in high school advanced, primary, university academic, and philosophy workout generators.
- Tightened the semantic audit so `source-jargon-leak` only reports learner-facing question fields, not benign `source:` metadata or legitimate domain phrases such as "raw item sum" in SUS scoring.
- Reran checks: TypeScript clean; semantic audit now reports 3,256 issues across 4 real flag types. `source-jargon-leak` and `formulaic-wrapper` are now at 0.

## Next Best Batch After Pass 6

1. Attack high-stakes lazy rationales first, especially career credential rows that still say "Wrong concept", "They differ", or "Not described in the facts".
2. Then tackle OpenSAT repeated numeric rationales by making the feedback reference each actual prompt, not just the answer value.
3. Start pruning/rewriting meta distractors in career and exam tracks where wrong answers still say things like "Ignore...", "Skip...", or "Pick the famous one".

## Pass 7 Landed In Rebuild 16

- Rewrote the remaining lazy appraisal credential rationales in `careerAgentGeneratedCredentials1.ts`.
- Removed placeholder explanations such as "Wrong concept", "They differ", and "Order-of-magnitude error" from that career credential bank.
- Replaced them with specific feedback about cap-rate decimal conversion, functional vs external obsolescence, property-rights differences, extraordinary assumptions, hypothetical conditions, comparable verification, and exposure time.
- Reran checks: TypeScript clean; semantic audit now reports 3,247 issues. `lazy-why-wrong` dropped to 303.

## Next Best Batch After Pass 7

1. The largest lazy-rationale bank is now `openstax.ts` with repeated "Incorrect logic." It should be rewritten by subject area or demoted if the imported rows are too thin.
2. The biggest repeated-rationale family remains OpenSAT numeric feedback. Repairing the worst lesson rows first was the right trust move; the next scale move is making those numeric rationales prompt-specific.
3. The meta-distractor bucket is now the biggest category by feel, especially "Ignore..." / "Skip..." / "Pick..." answers in career and exam prep tracks. Those need replacement with plausible misconceptions, not just audit suppression.

## Pass 8 Landed In Rebuild 16

- Verified the apparent OpenStax lazy-rationale bucket was not playable content: `openstax.ts` already filters rows whose correct answer is `See Solution` / `No solution provided.` or whose distractor is `N/A (Open-ended)`.
- Updated the semantic audit to quarantine those non-playable OpenStax placeholders instead of wasting rewrite effort on hidden raw-import residue.
- Fixed the audit extractor for `distractor(scope, answer)` helpers so it no longer mistakes the answer label for the `whyWrong` text.
- Rewrote 90 terse `No.` quant rationales plus the remaining short quant flaws such as "True.", "Too high.", "Finite variance.", and "Very inefficient." into learner-facing explanations.
- Finished the final 19 lazy rationales in career, legal, personality, and high-school logic files with specific misconception feedback.
- Reran checks: TypeScript clean; semantic audit now reports 2,981 issues across 3 flag types. `lazy-why-wrong` dropped from 303 at Pass 7 to 0, and the audit now skips 157 non-playable import placeholders.

## Next Best Batch After Pass 8

1. Start the real meta-distractor rewrite: replace "Ignore...", "Skip...", "Pick the..." and similar strategy answers with plausible wrong concepts, especially in career and exam-prep tracks.
2. Keep OpenSAT repeated numeric rationale work separate from correctness work: the answers are now safer, but the feedback still repeats by answer value and needs prompt-specific misconception wording.
3. Treat the remaining obvious-irrelevant distractors as a smaller companion pass after meta distractors, because many share the same root problem: joke answers instead of plausible misconceptions.

## Pass 9 Started In Rebuild 16

- Began the meta-distractor rewrite in the strategic career finance roadmap, starting with VC fund math, market mapping, sourcing, and diligence questions.
- Replaced 15 strategy-shaped answers such as "Skip...", "Ignore...", and "Assume..." with plausible investor mistakes: over-trusting paper markups, underweighting soft concentration caps, overbuilding TAM from perfect adoption, underwriting future cost declines, and treating speed as a substitute for diligence.
- Reran checks: TypeScript clean; semantic audit now reports 2,966 issues. `meta-distractor` dropped from 1,037 to 1,022.

## Pass 10 Landed In Rebuild 16

- Continued the meta-distractor pass with parallel agents on disjoint career files.
- Finished `careerAgentGeneratedRoadmapHealthcare.ts`: 97 strategy-shaped healthcare roadmap distractors were replaced with plausible operational, billing, clinical-trials, and regulatory misconceptions; that file now has 0 meta-distractor flags.
- Finished `careerAgentGeneratedCredentials1.ts`: 75 credential-bank meta distractors were replaced with plausible domain misconceptions; that file now has 0 meta-distractor flags.
- Locally finished `careerAgentGeneratedRoadmapFinance.ts`: the remaining finance roadmap meta distractors were removed, including equity research, banking execution, hedge fund, PE, credit, and AML/KYC labels that started with "Ignore...", "Assume...", "Skip...", "Pick...", or "Choose...".
- Reran checks: TypeScript clean; semantic audit now reports 2,701 issues. `meta-distractor` dropped to 757, down from 1,037 before this meta pass.

## Next Best Batch After Pass 10

1. Continue meta-distractor cleanup in the next largest career files: `careerAgentGeneratedCredentialExpansionCompliance.ts`, `careerAgentGeneratedCredentialExpansionProfessional.ts`, `careerAgentGeneratedCore1.ts`, and `career.ts`.
2. After the career/meta pass, pair it with `obvious-irrelevant-distractor` cleanup because many remaining joke answers are the same root quality problem in a different costume.
3. Keep OpenSAT repeated-rationale work as a separate pass; it is now mostly feedback polish rather than clearly wrong content.

## Pass 11 Landed In Rebuild 16

- Continued the career-facing meta-distractor rewrite with two agents and local edits.
- Finished `careerAgentGeneratedCredentialExpansionCompliance.ts`: 61 reported compliance meta-distractor instances were replaced with plausible credential, fraud, AML, and compliance misconceptions; that file now has 0 meta-distractor flags.
- Finished `careerAgentGeneratedCredentialExpansionProfessional.ts`: 51 professional credential/workplace/legal/accounting meta-distractor labels were replaced; that file now has 0 meta-distractor flags.
- Finished `careerAgentGeneratedCredentialExpansionHealthcare.ts`: 36 healthcare credential, clinical, regulatory, PV, compliance, and payer-operation labels were replaced; that file now has 0 meta-distractor flags.
- Finished `careerAgentGeneratedLegacyFinanceOpsTopOff.ts`: 35 finance-operations labels were replaced; that file now has 0 meta-distractor flags.
- Finished `career.ts`: 43 career-skill and credential labels were rewritten so they now read as plausible mistakes rather than "ignore/skip/assume" process failures; that file now has 0 meta-distractor flags.
- Finished `careerAgentGeneratedQualificationsLawProjectHr.ts`: 29 law, project-management, and HR qualification labels were rewritten; that file now has 0 meta-distractor flags.
- Reran checks: TypeScript clean; semantic audit now reports 2,428 issues. `meta-distractor` dropped to 487, down from 1,037 before the meta pass and 757 after Pass 10.

## Next Best Batch After Pass 11

1. Continue the same career/meta sweep on the next largest files: `careerAgentGeneratedRoadmapTech.ts`, `careerAgentGeneratedQualificationsEthicsOps.ts`, `practicalPoliticsQuestions.ts`, `careerAgentGeneratedQualificationsFinance.ts`, and `careerAgentGeneratedRegulatoryMedicalTopOff.ts`.
2. Start pairing meta cleanup with the smaller `obvious-irrelevant-distractor` bucket in files already touched, especially `careerAgentGeneratedCore1.ts`, `careerAgentGeneratedCredentials1.ts`, `career.ts`, and `careerAgentGeneratedRoadmapHealthcare.ts`.
3. Keep the OpenSAT repeated-rationale pass separate; it is the largest remaining count by far, but it needs a numerical-feedback rewrite rather than the career misconception-rewrite pattern.

## Pass 12 Landed In Rebuild 16

- Continued the high-ROI career/meta cleanup across the next largest disjoint files.
- Finished `careerAgentGeneratedRoadmapTech.ts`: 29 technology roadmap labels were replaced with plausible product, cloud, cyber, data, and engineering misconceptions; that file now has 0 meta-distractor flags.
- Finished `careerAgentGeneratedQualificationsEthicsOps.ts`: 30 ethics, operations, risk, project, and workplace labels were replaced; that file now has 0 meta-distractor flags.
- Finished `careerAgentGeneratedQualificationsFinance.ts`: 20 finance qualification labels were replaced; that file now has 0 meta-distractor flags.
- Finished `careerAgentGeneratedRegulatoryMedicalTopOff.ts`: 18 regulatory/medical labels were replaced; that file now has 0 meta-distractor flags.
- Finished `careerAgentGeneratedApplied.ts`: 15 applied career labels were replaced; that file now has 0 meta-distractor flags.
- Reran checks: TypeScript clean; semantic audit now reports 2,322 issues. `meta-distractor` dropped to 380, down from 487 after Pass 11 and 1,037 before the meta pass.

## Next Best Batch After Pass 12

1. The largest remaining meta file is now `practicalPoliticsQuestions.ts` (23 flags). It is worth doing because politics/civics questions need plausible misconceptions, not "ignore the process" answers.
2. After that, sweep the smaller capstone/course files with 5-11 flags each (`erCh3Questions.ts`, `peCapstoneQuestions.ts`, `ibCapstoneQuestions.ts`, etc.) or switch to `obvious-irrelevant-distractor` cleanup in the career files already touched.
3. The repeated-rationale bucket is now mostly an OpenSAT feedback-quality problem (1,133 of 1,804 flags in `openSatImported.ts`). Treat it as a separate numerical-feedback rewrite pass.

## Pass 13 Landed In Rebuild 16

- Cleaned `practicalPoliticsQuestions.ts` completely for both `meta-distractor` and `obvious-irrelevant-distractor` flags.
- Replaced 23 politics/civics meta labels with plausible civic reasoning errors: over-trusting or over-rejecting sources, misunderstanding disclosure, mistaking promises for implemented law, mishandling public records, and missing coalition incentives.
- Replaced 5 politics/civics obvious joke distractors with plausible misconceptions about poll workers, recounts, disclosure rules, budgeting, and political-risk monitoring.
- Cleaned `careerAgentGeneratedCore1.ts` obvious distractors: 25 joke-ish labels about logos, snacks, screenshots, and decorative polish were replaced with plausible product, operations, customer-discovery, compliance, and coding misconceptions.
- Smoothed 8 remaining `careerAgentGeneratedCore1.ts` meta labels and 2 obvious labels that the stricter audit still disliked after the first rewrite.
- Reran checks: TypeScript clean; semantic audit now reports 2,263 issues. `meta-distractor` dropped to 351 and `obvious-irrelevant-distractor` dropped to 108.

## Next Best Batch After Pass 13

1. Sweep the small remaining meta clusters in capstone/course files: `erCh3Questions.ts`, `peCapstoneQuestions.ts`, `ibCapstoneQuestions.ts`, `careerAgentGeneratedRoadmapGovernment.ts`, and `careerPhilosophyQualificationQuestions.ts`.
2. Continue the obvious-distractor pass on career files already improved: `careerAgentGeneratedCredentials1.ts`, `careerAgentGeneratedRoadmapGovernment.ts`, `career.ts`, and `careerAgentGeneratedRoadmapHealthcare.ts`.
3. Start planning the OpenSAT repeated-rationale rewrite as a distinct numerical feedback pass; it is the biggest count but needs careful answer-specific math feedback, not broad find/replace.

## Pass 14 Landed In Rebuild 16

- Cleared `careerAgentGeneratedRoadmapGovernment.ts` for both `meta-distractor` and `obvious-irrelevant-distractor` flags.
- Replaced 10 government-roadmap meta labels with plausible procurement, administration, sanctions, adverse-media, and reporting misconceptions.
- Replaced 6 government-roadmap obvious distractors about logos/screenshots with plausible evaluation, briefing, vendor-feedback, and open-source-intelligence misconceptions.
- Cleared `careerPhilosophyQualificationQuestions.ts`: 10 professional-ethics, CFA, CPA, bar, PMP, and SHRM labels now read as realistic exam/workplace mistakes instead of skip/ignore advice.
- Cleared `erCh3Questions.ts` and `peCapstoneQuestions.ts` via agents: 22 total capstone labels changed, both files now have 0 meta-distractor flags.
- Reran checks: TypeScript clean; semantic audit now reports 2,215 issues. `meta-distractor` is down to 309 and `obvious-irrelevant-distractor` is down to 102.

## Next Best Batch After Pass 14

1. Continue small meta clusters: `ibCapstoneQuestions.ts`, `careerCredentialsComplianceFraud.ts`, `erCh1Questions.ts`, `hfCapstoneQuestions.ts`, and `ibCh3Questions.ts`.
2. Continue obvious-distractor cleanup in career files: `careerAgentGeneratedCredentials1.ts`, `career.ts`, `careerAgentGeneratedRoadmapHealthcare.ts`, and `careerAgentGeneratedApplied.ts`.
3. Once the meta/obvious buckets are smaller, switch to the OpenSAT repeated-rationale pass; it is now the major remaining quality debt by count.

## Pass 15 Landed In Rebuild 16

- Cleared another set of small remaining meta clusters.
- Cleared `erCh1Questions.ts`: 7 equity-research labels now read as realistic modelling/comparability mistakes.
- Cleared `hfCapstoneQuestions.ts`: 6 hedge-fund capstone labels now read as plausible risk, factor, communication, and stop-discipline mistakes.
- Cleared `ibCh3Questions.ts`: 6 investment-banking valuation labels now read as realistic beta, ERP, dilution, minority-interest, preferred-stock, and lease-treatment mistakes.
- Cleared `ibCapstoneQuestions.ts` via agent: 10 capstone labels changed; file now has 0 meta-distractor flags.
- Cleared `careerCredentialsComplianceFraud.ts` via agent: 7 compliance/fraud credential labels changed; file now has 0 meta-distractor flags.
- Cleared `lifeSkillsAndAdultingHighTopUp.ts`, `lifeSkillsHighHigh103TopUpB.ts`, and `quant.ts`: 15 total labels changed so everyday-life and quant answers no longer read as "ignore/skip/pick" commands.
- Cleaned `primaryGeneratedHumanitiesExam.ts`: 5 meta labels and 3 obvious distractors were replaced with age-appropriate plausible mistakes.
- Reran checks: TypeScript clean; semantic audit now reports 2,154 issues. `meta-distractor` is down to 253 and `obvious-irrelevant-distractor` is down to 100.

## Next Best Batch After Pass 15

1. Continue the remaining 3-4 flag meta clusters (`careerCredentialsMcatNclexPn.ts`, `civicPoliticsQuestions.ts`, `detectiveLogicHighTopUp.ts`, `erCh4Questions.ts`, `hfCh4Questions.ts`, `peCh5Questions.ts`, and `peopleManagementTopUp.ts`).
2. In parallel, start a focused obvious-distractor pass on the biggest remaining files (`careerAgentGeneratedCredentials1.ts`, `career.ts`, `careerAgentGeneratedRoadmapHealthcare.ts`, and `englishComposition101TopUp.ts`).
3. Prepare the OpenSAT repeated-rationale pass separately; the remaining headline count is now repeated feedback, not obviously nonsensical answer choices.

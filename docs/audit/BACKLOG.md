# Floe Backlog — ~7 hours of high-value improvements

Compiled from the 316 audit docs + cross-cluster patterns + critical bugs surfaced during the 2026-05-17→18 audit. Items ranked roughly by value-per-hour. Each can run via agent or manual edit; most are agent-friendly.

**Current state**: 177 catalog files, build green, age floor 8+, 6 Wave 4 cluster consolidations done, 2 auto-FIX waves done, 316 audit docs delivered, preschool tier cut.

---

## TRACK A — Auto-FIX waves (single-file helper rewrites that cascade) — ~2.5 hrs

| # | Task | Est | Impact |
|---|---|---|---|
| A1 | **`primaryGeneratedScienceDiscovery.ts` + `primaryGeneratedHumanitiesExam.ts` auto-FIX** (ALREADY IN FLIGHT — agent should land soon). Helper-signature change to require explicit `whyWrong` per distractor; strip cartoon distractors ("Pangaea was a dinosaur that ate continents"); preserve correct answers. Affects ~12-16 primary tracks. | 0 | Closes biggest primary content-quality drag |
| A2 | **`highAgentGenerated.ts:5` DEFAULT_FLAW rewrite** (same pattern as univAgentGen + bonusID auto-FIX). Affects ~7 HS tracks (web foundations, AP supplements, etc.). | 30m agent | Single-file rewrite, ~100 questions get bespoke distractors |
| A3 | **`colGapBuilders.ts` `numericWrong` / `fractionWrong` / `textWrong` helper rewrite**. Currently every distractor uses identical generic explanation. Affects all India Class 7-10 math + 7th/8th grade math collections + Illustrative Math 678. | 45m agent | ~500 questions across ~10 tracks |
| A4 | **`bonusIdentificationQuestions.ts` media wiring** — replace shared generic SVG library with per-track-appropriate visuals (PNG assets exist for Rock + Historical Ruins as the model). Without this, "Guess the X — Tools" + "Culture" clusters can't deliver real visual ID. | 60m | Unlocks 52 GuessTheX tracks' core promise |
| A5 | **OpenDSA family DELETE** (`openDsaCoreImported`, `openDsaSoftwareImported`, `openDsaAlgorithmsImported`, `openDsaBridgeCourseImported`, `openDsaFormalLanguagesImported`). All 5 audited as DELETE candidates (boilerplate distractors + stripped code context + raw `\Theta`/`\log` LaTeX in a non-LaTeX renderer). Update references in `universityAcademic.ts`, `universityPrep.ts`, `highAdvanced.ts`. | 30m | -5 files, lifts univ CS quality bar |
| A6 | **`imsTutorialsImported.ts` DELETE** — 92 questions with stripped source context, prompts unanswerable. Confirmed across 3 audits. | 10m | -1 file, ~92 broken Qs gone |

## TRACK B — Routing & wiring bugs (mostly one-line fixes) — ~1 hr

| # | Task | Est | Impact |
|---|---|---|---|
| B1 | **HS Math routing-key mismatch fixes** — hand-authored gold-standard banks bound to non-existent keys (`col-algebra-1-ny-next-gen`, `col-precalculus`, `col-trigonometry`, `col-statistics-probability`, `col-ap-calculus`, `col-eureka-math-*`). One-line fix per track wires `highBuilders.ts` content to the real track ID. | 30m | Unlocks hundreds of existing quality Qs across algebra/precalc/trig/AP-calc |
| B2 | **macroeconomics/microeconomics HS wiring** — hand banks sit in `universityAcademic.ts` but HS tracks fall through to generator. Move/route the existing content. | 15m | 2 tracks get real content immediately |
| B3 | **Duplicate-track ID resolution** — `mythologyMonsters` vs `mythologyAndMonsters`; `us_history` vs `usHistory`; `creativeWriting` vs `creativeWritingStudio`; `gameDesign` vs `gameDesignBasics`; multiple `col-*` shadow aliases. ~10 dedup decisions. | 30m | Cleaner catalog, no UI duplicates |

## TRACK C — Status flag sweep + zero-content `playable` tracks — ~30 min

| # | Task | Est | Impact |
|---|---|---|---|
| C1 | **Demote `playable` tracks with zero content** to `'soon'`: `climateProject`, `handsOnScience`, `col-high-school-chemistry`, `apEuropeanHistory`, `middleSchoolBigHistory`, `pixarInABox`, `lifeSkillsAndAdulting`, `financeAndCapitalMarkets`, `collegeAdmissions`. | 15m | Stops users landing on empty tracks |
| C2 | **Flip `'soon'` to `'playable'`** for tracks with wired content (mirrors philYear7-12 sweep): scan HS + univ catalogs for the same bug. | 15m | Honest catalog state |

## TRACK D — Fallback-blueprint pathologies (small files, big surface) — ~45 min

| # | Task | Est | Impact |
|---|---|---|---|
| D1 | **`philosophyCreativeBlueprints` rewrite** — only 2 items cycled 25× to fill 6 philosophy + chess + detective tracks. Replace with per-track blueprint sets or `topUpHighGeneratedTrack` exclusion. | 15m | Stops dragon-syllogism appearing in chess tracks |
| D2 | **`lifeEconomicsBlueprints` rewrite** — 2 items (Saturday cookie + canteen) cycled 25× across `lifeSkillsAndAdulting` / `collegeAdmissions` / `financeAndCapitalMarkets`. | 10m | Stops canteen-cookie filling finance tracks |
| D3 | **`historyBlueprints` fallback fix** — surfaces US civics templates on `usHistory`, `worldHistoryCollections`, `apEuropeanHistory`, `middleSchoolBigHistory`, `mythologyAndMonsters` (non-civics tracks). | 10m | Track content matches track promise |
| D4 | **`englishBlueprints` dedupe bug** — 4 static `() => "static"` prompts collapse 50-slot topup to 4 identical Qs shared across 7th–10th grade reading + grammar + creativeWritingStudio. | 10m | Tracks get differentiated content |

## TRACK E — Wave 4 equivalents for other tiers — ~3 hrs (high-value, parallelisable via agents)

| # | Task | Est | Impact |
|---|---|---|---|
| E1 | **University Wave 4** — consolidate `universityAgentGenerated.ts` (already DEFAULT_FLAW-fixed) with the workout files; merge any TopOff variants; align chapter names to syllabi. 53 univ tracks. | 60m agent | Cleanup mirrors career Wave 4 win |
| E2 | **HS Math+CS+Econ Wave 4** — consolidate `highBuilders.ts` + ExamBatch + WorkoutGenerated per track (~16 tracks). | 60m agent | |
| E3 | **HS Sciences Wave 4** — handle AP Bio/Chem/Physics ExamBatch + WorkoutGenerated + NGSS imports + OpenTrivia DELETE (~9 tracks). | 60m agent | |
| E4 | **HS Humanities Wave 4** — DELETE rubric-only `apHistoryExamBatch.ts` and `apEnglishExamBatch.ts` (100% rubric drills, 0% content); MERGE the content-bearing pairs (`apHumanGeography*` + `apPsychology*` duplicate their WorkoutGenerated siblings); fix `historyBlueprints` topup. | 45m agent | Closes the May 2026 rubric-not-content finding |

## TRACK F — Critical content bug verification + fixes — ~30 min

| # | Task | Est | Impact |
|---|---|---|---|
| F1 | **Class 8 Math "slope always answers 3"** — find the file (audit-flagged but I couldn't locate). Fix. | 15m | Correctness bug |
| F2 | **Verify Class 9/10 Math distractor collisions** — audit flagged but my initial check suggested false alarms. Deep-check with the actual factorization triplets to confirm. | 15m | Either confirm + fix or close the bug |

## TRACK G — Coverage gap authoring (highest-impact gaps from audits) — ~3 hrs

| # | Task | Est | Impact |
|---|---|---|---|
| G1 | **AIGP EU AI Act chapter expansion** — only 2 Qs currently. Target ~10-12 covering Article 5 prohibitions, Article 6 high-risk classification, Article 10 data governance, Article 14 human oversight, GPAI tiers. | 30m | Closes syllabus-central gap in flagship credential track |
| G2 | **NERC Chapters 5 (Balancing/Frequency) + 7 (Emergency Ops)** authoring — core SOC certification topics currently uncovered. | 45m | Makes NERC track exam-ready |
| G3 | **Patent Bar Obviousness chapter** — currently only 3 Qs, the highest-impact MPEP topic. | 30m | Largest gap in cluster per audit |
| G4 | **MCAT CARS chapter** — currently absent, ~1/4 of the exam. | 45m | MCAT track becomes credible |
| G5 | **VC Chapter 1 Fund Math expansion** — 8 Qs authored, could expand to ~15-20. | 30m | Strongest career track gets stronger |

## TRACK H — Games rework toward "more educational, nerdy" — ~2 hrs

| # | Task | Est | Impact |
|---|---|---|---|
| H1 | **Cut `SlotsScreen` entirely** (gambling metaphor wrong for learning; per audit). Fold the fossil-ID Qs into Trainer flow. | 20m | Brand alignment |
| H2 | **Decide on `FightScreen`** — rebranded but still off-brand. Cut OR convert to a typing/answer-shooter. | varies | Brand alignment |
| H3 | **Pong → typing game** — ball = vocab word, paddle responds to typed answer. | 60m | Educational angle |
| H4 | **Invaders → vocab-shooter** — invaders carry quiz prompts, "shoot" with right answer. Existing genre. | 60m | Educational angle |
| H5 | **Wordle interest-link** — when player selects an interest area, Wordle solution pool weights toward that area's vocabulary. | 30m | Craig's stated goal |
| H6 | **Strip remaining Wordle proper nouns** — scan for missed ones (cathy, david, sarah, etc.). | 10m | Real Wordle never has these |

## TRACK I — Quick wins & polish — ~1 hr

| # | Task | Est | Impact |
|---|---|---|---|
| I1 | **Region tags for international exam tracks** — `gcsePrepUk` → `['UK']`, `jeeNeetPrepIndia` → `['IN']`, `hscVceMathsAus` → `['AU']`, `naplanYear7/9` → `['AU']`. | 10m | Honest jurisdiction |
| I2 | **Region tags for US-anchored HS civics/finance** — `constitution101`, `usGovernmentAndCivics`, `practicalPolitics` (multi-region), `financeAndCapitalMarkets`. | 10m | Honest jurisdiction |
| I3 | **A-Level stubs DELETE pass** — 32 KS3-difficulty stubs in `highAdvanced.ts:441-712` mis-labelled as A-Level. Delete (per audit). | 15m | Stops misrepresenting A-Level content |
| I4 | **`apEnvironmentalScience` HS wiring** — wired only at univ, no HS track. ~170k US students take it annually. Either add HS track or accept univ-only. | 10m | Real demand |
| I5 | **`openSatImported.ts` generator fix** — 1200 questions with boilerplate distractor explanations from `scripts/build_opensat_import.cjs`. Manual rewrites won't survive regenerate. Fix the generator. | 30m | Regen-safe quality lift |

## TRACK J — Strategic / discussion-required (not estimated)

These need Craig's call before any agent work:
- **OpenSAT track**: 1200 Qs is huge but all DEFAULT_FLAW. Keep + fix generator? Or DELETE and start over?
- **OpenTrivia mass-DELETE decision** — multiple audits flag many as DELETE candidates; brain-burners content stays, history/literature/art variants are flagged. Decide scope.
- **Three clinical research tracks already consolidated, but the audit doc still mentions them** — sweep the audit doc list to mark cut tracks as consolidated.
- **`primary` track entry (generic foundation)** — cut along with preschool; audit had recommended this. Done.
- **`mathSenior` univ track** — empty `'soon'`; what's the intended scope?
- **`uniScience` univ track** — overlap with philosophy/researchMethods; cut or scope?

---

## Suggested 7-hour run order (highest leverage first)

1. **A1 (in flight)** — primary generators auto-FIX completes
2. **B1 + B2** (45m) — HS Math routing fixes unlock hundreds of existing Qs
3. **A5 + A6** (40m) — OpenDSA + IMS DELETE (cleanest deletes)
4. **A2 + A3** (75m) — HS + colGap helper rewrites cascade across ~600 questions
5. **D1 + D2 + D3 + D4** (45m) — fallback-blueprint surgery, four small files, huge surface
6. **C1 + C2** (30m) — status flag sweep
7. **F1 + F2** (30m) — critical content bugs verified/fixed
8. **I3 + I1 + I2** (35m) — A-level stubs DELETE + region tags

That's ~5.5 hours of focused work. The remaining ~1.5 hours either pushes into one of: G (gap authoring), E (other-tier Wave 4s), or H (games rework) depending on what feels highest-leverage on the day.

---

## Notes
- All agent-driven work assumes the auto-FIX pattern already validated by the two completed waves (bonusIdentificationQuestions + universityAgentGenerated). Quality bar: per-distractor `whyWrong`, no boilerplate, no cartoonish wrong answers, chapter names match syllabi.
- Build verification (`npx tsc --noEmit`) after every meaningful change.
- Track-level region tags + `lastReviewed` metadata wherever applicable (schema added in Wave 1).
- Preserve all gold-standard hand-authored content (jargonBusters.ts, primaryBuilders.ts, highBuilders.ts, universityPrep.ts, civicPoliticsQuestions.ts, etc.). When in doubt, KEEP.

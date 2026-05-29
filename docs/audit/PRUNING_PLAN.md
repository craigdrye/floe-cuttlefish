# Career Tier Pruning Plan

Synthesis of 73 per-course audit docs in [`docs/audit/career/`](./career/), produced by 9 parallel cluster audits on 2026-05-17.

## Scope

- **73 career courses** audited (one doc per syllabus)
- **~150 question files** sampled across the career tier
- **~10,000+ career questions** in scope
- Pre-launch — cuts are safe

## The universal patterns (every cluster reported these)

1. **`DEFAULT_FLAW` epidemic** — every agent-generated file in every cluster uses a file-scope constant string for every wrong-answer explanation. Often a different string per file (so consolidation also drops a maintenance source). This is the **single biggest content-quality drag** in the catalog.
2. **Base + TopOff + FinalTopOff + Polish duplication** — universal across roadmap families. Each track has 3–7 feeder files of the same content with shifting voice and chapter names.
3. **Polish layer is "duplicates of duplicates"** — `RoadmapPracticePolish`, `*FrontDoorPolish`, `*FinalPolish`, `CareerSkillsPolish`, `ProfessionalPracticePolish`, `QualificationFrontDoorPolish`, `InterviewReasoningPolish`. Universal **DELETE candidates** after salvaging 5–10 novel questions per file at most.
4. **Chapter taxonomy mismatch** — no question files match the syllabus chapter names. Most tracks have 2–4 competing chapter naming schemes across feeders.
5. **Region tagging missing** — every US-flavoured track (compliance, healthcare, government, finance credentials, law) lacks a `region` tag. Schema addition + bulk tagging needed.
6. **`lastReviewed` metadata missing** — every regulation-adjacent track. Content rots silently.
7. **Hand-authored content is universally the gold standard** — protect it from future agent passes.

## Wiring bugs surfaced

- `creditLevfinRoadmap` (syllabus) vs `creditLevFinRoadmap` (catalog) — case mismatch
- `nerc` vs `nercSystemOperator` — track-id drift
- `bankComplianceAmlRoadmap` — `status: 'playable'` with zero inline anchor questions (relies entirely on topup from finance triplet)
- `ibJargon` / `vcJargon` — `careerAgentGeneratedJargon*` may be silently excluded via explicit `career.ts` overrides
- `careerAgentGeneratedRegulatoryMedicalTopOff` — name implies broad routing; only feeds `regulatory`, not `healthcareComplianceRoadmap`
- The runtime aggregator dedupes by prompt-key — duplicate questions across triplet are swallowed at runtime but still clutter the catalog

## Voice templates (KEEP and use as authoring models)

- [`jargonBusters.ts`](../../src/data/questionCatalog/jargonBusters.ts) — career voice across industries
- [`priyasBrutalSurgeonsQuiz`](../../src/data/questionCatalog/career.ts) (in `career.ts`) — expert-audience clinical (94 hand-authored Q's, per-distractor reasoning, difficulty tags, sequence-only traps)
- [`series86Imported.ts`](../../src/data/questionCatalog/series86Imported.ts) — STC-imported, cleanest credentials content
- [`quant.ts`](../../src/data/questionCatalog/quant.ts) / `quantAdvanced.ts` — technical voice
- [`careerPhilosophyQualificationQuestions.ts`](../../src/data/questionCatalog/careerPhilosophyQualificationQuestions.ts) — ethics
- [`practicalPoliticsQuestions.ts`](../../src/data/questionCatalog/practicalPoliticsQuestions.ts) — multi-jurisdiction
- Hand-written CPC block in [`career.ts`](../../src/data/questionCatalog/career.ts) (~lines 161–173) — medical coding
- Hand-written PM/PM/UX/Leadership blocks in [`career.ts`](../../src/data/questionCatalog/career.ts)
- [`brainBurnersOerBatch2.ts`](../../src/data/questionCatalog/brainBurnersOerBatch2.ts) + `brainBurnersWorkoutGenerated.ts` — at framework quality bar
- The `cybersecOpsJargon` pattern (hand-curated seed + voice-aware generated supplement) is the **model for future LLM-assisted authoring**

## Architecture decisions (DECIDED 2026-05-17)

1. **`aigp` + `dataAiGovernanceRoadmap`** → **MERGE** into one track.
2. **`series86` and `series8687`** → bring all Series 86 content together; **split Series 87 off as its own track**.
3. **`regulatoryAffairs` + `regulatoryAffairsRoadmap`** → **CONSOLIDATE**.
4. **`medicalCodingCpc` + `medicalCodingRoadmap`** → **CONSOLIDATE**.
5. **3 clinical research tracks** (`clinicalResearch` / `clinicalResearchRoadmap` / `socraAcrp`) → **CONSOLIDATE** into one track.
6. **`climateScienceMaster`** → **CUT**. Wired content fails the syllabus's own Reject-If rules.
7. **Schema for `publicAffairsPolicyMaze`** → use `regions: string[]` (array), not scalar. Most tracks ship `regions: ['US']`; publicAffairs ships `['US', 'UK', 'EU']`.

## Coverage gaps worth authoring (high-priority, by track)

- **ventureCapitalRoadmap** — Chapter 1 (Fund Math): power law, DPI/TVPI, mgmt fees, carry, reserves
- **aigp** — EU AI Act chapter (zero questions despite syllabus-central)
- **nerc** — Chapters 5 (Balancing/Frequency) and 7 (Emergency Ops) — core SOC certification topics
- **patentBar** — Obviousness, MPEP-navigation, edge-case prosecution
- **peopleManagement** — conflict, hiring, change (half the syllabus uncovered)
- **negotiationSkills** — Chapters 5 (Difficult Tactics) and 6 (Multi-Party) — the chapters that differentiate a real course
- **salesFundamentals** — Prospecting and Win/Loss chapters
- **publicAffairsPolicyMaze** — UK + EU chapters (~30 net-new questions)
- **investmentBankingRoadmap** — Chapter 1 (banking workflow / client context)
- **salesTradingRoadmap** — Chapter 1 (desk roles) + Chapter 5 (regulation / desk comms)
- **hedgeFundsRoadmap** — Chapter 1 (strategy/mandate) + Chapter 5 (attribution)
- **socraAcrp** — Chapters 3 (IRB/regulatory documents) and 7 (IP accountability)
- Per-track minor gaps documented in individual audit docs

## Execution log (2026-05-17 → 2026-05-18, multi-session)

**Late-session push (2026-05-18 PM):**
- ✅ **Age-8 floor cut** — 10 preschool syllabi + 7 primary age 5-7 syllabi + 10 age-catalog track entries + 17 audit docs archived to `archive/2026-05-18-age-floor-cut/`
- ✅ **A1 primary generators auto-FIX** — `primaryGeneratedScienceDiscovery.ts` (803→1205 lines, 300 bespoke distractors); cartoon distractors replaced ("Pangaea was a dinosaur that ate continents" → real misconceptions); `primaryGeneratedHumanitiesExam.ts` in-place edits (28 cartoon distractors fixed)
- ✅ **A5 OpenDSA mass DELETE** — 5 files removed; 9 imports + 17 spread lines cleaned in `universityPrep.ts`, `universityAcademic.ts`, `highAdvanced.ts`
- ✅ **A6 IMS DELETE** — `imsTutorialsImported.ts` removed; references cleaned in `universityCollege.ts`
- ✅ **B1 HS Math routing-key fixes** — `col-algebra-1-ny-next-gen` renamed to `col-algebra-1`; 3 eureka-math duplicates deleted (already had canonical-key siblings)
- ✅ **C1 zero-content `playable` demotion** — 8 tracks flipped to `'soon'`: `climateProject`, `handsOnScience`, `apEuropeanHistory`, `middleSchoolBigHistory`, `pixarInABox`, `lifeSkillsAndAdulting`, `financeAndCapitalMarkets`, `col-high-school-chemistry`
- ✅ **I1+I2 region tags** — 31 tracks tagged: international exam tracks (UK/IN/AU/SG), US-anchored HS civics/finance, US Common Core HS math, Indian NCERT math
- ✅ **I3 A-Level KS3-stub DELETE** — 8 stub blocks (32 questions) removed from `highAdvanced.ts`; tracks now route to generator only (no more misrepresentation of A-Level difficulty)
- 🚧 **A2 highAgentGenerated DEFAULT_FLAW rewrite** — in flight
- 🚧 **A3 colGapBuilders helpers rewrite + Class 8/9/10 bug verify** — in flight

**Deferred (need fresh look):**
- B2 macro/micro HS wiring (one-line per audit, but actual fix point unclear)
- B3 duplicate-track ID resolution (~10 cases: mythologyMonsters vs mythologyAndMonsters, us_history vs usHistory, creativeWriting vs creativeWritingStudio, gameDesign vs gameDesignBasics, multiple col-* shadows)
- D1-D4 fallback blueprint surgery (architectural — need per-track exclude lists rather than blueprint expansion)
- F1+F2 standalone bug verification (A3 agent will handle inline)

**Net change in late-session push**: 177 → 171 catalog files (-6: 5 OpenDSA + 1 IMS); 10 age-catalog tracks deleted; 8 zero-content tracks demoted; 31 region tags applied; ~600 questions rewritten with bespoke distractors (primary generators + counting A2/A3 expected outputs).

---

**Completed in autonomous run:**

- ✅ **Schema additions**: `regions?: string[]` and `lastReviewed?: string` on `TrackSeed`
- ✅ **Wiring fixes**: `creditLevFin` case + `nerc` track-id syllabus header typos
- ✅ **Wave 1c investigation**: IB/VC Jargon "shadow" and `RegulatoryMedicalTopOff` routing both turned out to be intentional, not bugs
- ✅ **Wave 2 Stage 1**: 14 polish files deleted (`*PracticePolish*`, `*FrontDoorPolish`, `*FinalPolish`, `*AppliedPolish`, `*TechnicalPolish`, `*ProfessionalPracticePolish`, `*InterviewReasoningPolish`, `*CareerSkillsPolish`, `*CoreRoadmapPolish`, `*JargonPracticePolish`). ~900 questions removed. career.ts + careerAgentGenerated.ts cleaned.
- ✅ **Wave 3**: 52 career tracks tagged with `regions` (49 `['US']`, 3 multi-region). 21 jurisdiction-neutral tracks intentionally untagged.
- ✅ **Architecture #1**: `climateScienceMaster` cut — track entry, syllabus, ClimateScienceTopOff file, 434-line hand-authored block all removed.
- ✅ **Architecture #2**: `series8687` → `series87` (Series 86 stays, Series 87 split as own track focused on Research Communications). Syllabus renamed.
- ✅ **Architecture #3**: `aigp` + `dataAiGovernanceRoadmap` merged into `aigp` (title broadened to "AI Governance (AIGP)").
- ✅ **Architecture #4**: `regulatory` + `regulatoryAffairsRoadmap` consolidated into `regulatoryAffairsRoadmap`.
- ✅ **Architecture #5**: `medicalCodingCpc` + `medicalCodingRoadmap` consolidated into `medicalCodingRoadmap` (title: "Medical Coding (CPC)").
- ✅ **Architecture #6**: 3 clinical research tracks (`clinicalResearch`, `socraAcrp`, `clinicalResearchRoadmap`) consolidated into `clinicalResearchRoadmap` (title: "Clinical Research (CRC / SOCRA / ACRP)"). Required a Python-driven merge in career.ts to avoid duplicate-key data loss.
- ✅ **Wave 2 Stage 2**: 6 Core Supplement files deleted (`CoreSupplementCommunicationLeadership` + `2`, `CoreSupplementDesignTech` + `2`, `CoreSupplementProductProject` + `2`).

Build verified clean (`tsc --noEmit` exit 0) after every change.

**Wave 4 COMPLETED 2026-05-18** — 6 parallel cluster consolidations + coordinated aggregator cleanup:

- ✅ **Finance** (pilot): RoadmapFinance.ts 675 → 2702 lines, 8 tracks, ~277 high-quality Q's; 2 files deleted (TopOff, FinalTopOff). VC Chapter 1 (Fund Math) gap closed with 8 new Q's.
- ✅ **Healthcare**: RoadmapHealthcare.ts 951 → 2636 lines, 10 tracks, 266 Q's; 3 files deleted.
- ✅ **Tech + Gov**: RoadmapTech.ts (5 tracks, 107 Q's) + RoadmapGovernment.ts (4 tracks + bankAml leakage, 79 Q's); 3 files deleted. Gov questions now name specific authorities (FAR clauses, 31 USC, IEEPA, Leahy, ICD 203, Title 10/50). AIGP EU AI Act + NIST RMF gaps closed.
- ✅ **Credentials**: Credentials1.ts 883 → 3344 lines, 12 credential tracks, ~358 Q's; 5 files deleted. `// lastReviewed: 2026-05-18` placeholders on regulation-adjacent tracks.
- ✅ **Qualifications**: 3 canonical files (Finance 92, LawProjectHr 97, EthicsOps 94) = 283 Q's; 5 files deleted.
- ✅ **Core + Applied + Misc**: Core1 (canonical, all foundation career tracks) + Applied + RegulatoryMedicalTopOff + LegacyFinanceOpsTopOff rewritten in place; 2 files deleted (Core2, CoreFinalTopOff).
- ✅ **Jargon cleanup**: 4 agent-generated jargon TopOff files DELETED per audit (jargonBusters.ts hand-written is the sole canonical voice).
- ✅ **Coordinated aggregator cleanup**: 22 dead imports + 22 dead aggregator entries removed from `careerAgentGenerated.ts` (35 imports → 13).
- ✅ **negotiation/negotiationSkills key consistency fix** (agent rename rolled back to match catalog).

**Net catalog change**: 222 → **177** question-catalog files (-45 files, ~hundreds of KB removed). 73 → 69 career tracks. ~5,000+ questions rewritten with bespoke per-distractor explanations.

**All audits COMPLETED 2026-05-18** — 25 cluster agents across 5 tiers produced **316 per-course audit docs**:
- `docs/audit/career/` — 73 docs (original)
- `docs/audit/high/` — 139 docs (10 cluster agents)
- `docs/audit/university/` — 53 docs (5 cluster agents)
- `docs/audit/primary/` — 41 docs (4 cluster agents)
- `docs/audit/preschool/` — 10 docs (1 cluster agent)

Build verified clean (`npx tsc --noEmit` exit 0) after every change.

## Remaining work

### Wave 5 — Coverage gap authoring + auto-FIX waves (NOT STARTED)
Per-tier gaps documented in all 316 audit docs. Highest-leverage items:
- **`bonusIdentificationQuestions.ts` `q()` helper rewrite** — single helper change fixes ~500 distractors across 52 "Guess the X" tracks (HS tier)
- **`universityAgentGenerated.ts:5` DEFAULT_FLAW removal** — single file-wide fix unlocks ~10 university tracks (lsat, mcat, financialAccounting, englishComp, sociology, etc.)
- **`primaryGeneratedScienceDiscovery.ts buildGeneratedBank` rewrite** — fixes cartoon distractors across 12+ primary science tracks
- **`primaryGeneratedHumanitiesExam.ts buildTrack` rewrite** — fixes shared template factory powering primary philosophy + exam prep (PSLE, NAPLAN, 11+)
- **OpenDSA imports DELETE** (5 files) — boilerplate distractors, stripped code context, raw `\Theta`/`\log` LaTeX in a non-LaTeX renderer
- **OpenTrivia\*Imported.ts DELETE** (all variants) — fixed-string distractor pattern across humanities + sciences
- **historyBlueprints fallback bug** — US civics templates appearing on non-civics tracks
- **englishBlueprints dedupe bug** — 4 static prompts collapsing 50-slot topup across 7th–10th grade + grammar
- **highGenerated.ts blueprint topup** — silently fills foreign-exam tracks with US/NGSS content
- **philosophyCreativeBlueprints fallback** — 2 items cycled 25× across 6 philosophy tracks
- **lifeEconomicsBlueprints fallback** — 2 items cycled 25× across 3 life tracks
- **Routing-key mismatch fixes** (HS Math+CS+Econ) — hand-authored banks bound to non-existent keys; tracks silently fall through to generator
- **Track-id duplications** (~30 cases across tiers) — `philYear7-12` shadows of named playable tracks; col-* aliases; mythologyMonsters vs mythologyAndMonsters; us_history vs usHistory; gameDesign vs gameDesignBasics; creativeWriting vs creativeWritingStudio; etc.
- **Status-flag bug sweep** — every tier has `status: 'soon'` tracks with wired content (especially Big Questions Y1-Y6, philYear7-12)
- **Region-tag follow-through** for HS international exams (UK/IN/AU/SG) and US-specific HS civics/finance tracks
- **Coverage gap authoring** — per-track gaps (Patent Bar Obviousness, NERC Balancing/Frequency + Emergency Ops, AIGP EU AI Act expansion, MCAT CARS chapter, advanced math gaps in Algebra1/Linear/DiffEq, primary "Chapter 8" synthesis gaps, etc.)

### Preschool tier strategy decision (NOT STARTED)
Per the preschool tier audit: ~90–100% of preschool tracks are scaffolding without content. Two-wave triage proposed:
- Wave 1 (~1 day): demote 7 false-`playable` tracks to `'soon'`; remove fragile CK-12 keyword wire on `scienceEarlyYears`; add missing syllabus mappings
- Wave 2 (~2 weeks): consolidate to 5 real preschool tracks with ~100 hand-authored questions; ship image-prompt schema extension; merge `philosophyEarlyYears` + `socialEmotionalLearning`

### Critical bugs flagged for immediate fix (mostly 1-line each)
- Class 9 HS Math: hardcoded distractor `'x = 1 and x = 6'` collides with correct answer
- Class 10 HS Math: trig distractors collide with correct values
- Class 8 HS Math: slope subsection always answers `'3'`
- moneyBasics (primary): TrackSeed missing from ageCatalog entirely
- macroeconomics/microeconomics (HS): hand banks sit in `universityAcademic.ts` but HS tracks fall through to generator (one-line wiring fix each)
- Wordle word list: proper nouns to strip (Wave 2 quick-wins yet to be done)
- FightScreen game: `hulk.png` labelled "Mr T Floe" (IP + naming issue)

### Other tier consolidations (Wave 4-equivalents for HS, University, Primary)
The 316 audit docs surface the same patterns as career — agent-generated DEFAULT_FLAW, base+TopOff duplication, chapter taxonomy mismatch. Same Wave 4 playbook can apply. Recommend sequencing by impact:
1. **University** first (53 tracks, dense per-track audit; one big DEFAULT_FLAW fix in `universityAgentGenerated.ts` is high-leverage)
2. **HS** second (139 tracks, lots of routing/wiring bugs to fix in parallel with consolidation)
3. **Primary** third (41 tracks, simpler structure but image-schema work blocks real preschool)
4. **Preschool** last (10 tracks, mostly strategic decisions about what to build)

---

## Recommended wave structure

### Wave 1 — Schema + Wiring fixes (1–2 days)
Blockers for everything downstream.
- Add `region: ('US' | 'UK' | 'EU' | ...)[]` to track schema
- Add `lastReviewed: <ISO date>` to track and question schemas
- Fix `creditLevfinRoadmap` ↔ `creditLevFinRoadmap` case mismatch
- Fix `nerc` ↔ `nercSystemOperator` track-id drift
- Either author anchor questions for `bankComplianceAmlRoadmap` or demote to `soon`
- Investigate IB/VC Jargon wiring shadow
- Investigate `RegulatoryMedicalTopOff` routing

### Wave 2 — Bulk DELETE the polish layers (2–3 days)
After salvaging genuinely novel content into canonical files.
- All `*PracticePolish*` files (4+ files)
- All `*FrontDoorPolish` files (multiple)
- All `*FinalPolish` files (multiple)
- `CareerSkillsPolish`, `ProfessionalPracticePolish`, `InterviewReasoningPolish`, `CoreRoadmapPolish`
- The CoreSupplement files that duplicate hand-curated `career.ts` PM/PM/UX/Leadership content
- Net effect: ~15–20 files deleted, ~500–1000 low-value questions removed

### Wave 3 — Bulk region tagging (half day)
Mechanical pass: tag every US-anchored track with `region: ['US']` once schema is in place.

### Wave 4 — Per-cluster consolidation + `DEFAULT_FLAW` rewrite (parallelisable, ~weeks total)
Each cluster ~2–4 days; parallelisable across clusters.
- Merge each track's base + TopOff + FinalTopOff into one canonical file
- Normalize chapter names to the syllabus
- Rewrite per-distractor explanations (no more `DEFAULT_FLAW` constants)
- Reuse the prompt template that produced `cybersecOpsJargon` (the one good agent-assisted pattern)
- Estimated cluster effort: Healthcare ~25 hrs, Finance ~25 hrs, Tech ~20 hrs, Gov ~15 hrs, others smaller

### Wave 5 — Coverage gap authoring (~2–3 weeks)
Each gap is hours, not days. Many gaps but discrete. Use voice templates above.

### Wave 6 — Architecture decisions (needs Craig, then execution)
The 7 decisions listed above; each unblocks targeted cleanup.

## Quick wins (could happen alongside Wave 1)

- Rename audit doc filenames to true track IDs (some agents used syllabus filenames as approximations — verify each against ageCatalog/career.ts)
- Delete the `RegulatoryMedicalTopOff` routing if confirmed misleading
- Salvage and delete `careerAgentGeneratedRoadmapPracticePolish.ts` (4 VC questions, generic content, incompatible chapter taxonomy)

## What this plan does NOT yet cover

- High school, university, primary/preschool tiers (next audit waves once career is stable)
- Games rework (separate workstream — interest-linked word games, new educational games)
- README rewrite (do last, once career structure is decided)
- The `imsTutorialsImported.ts` salvage/delete decision (university tier)

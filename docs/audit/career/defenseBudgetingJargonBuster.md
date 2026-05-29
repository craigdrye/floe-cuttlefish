# Audit: defenseBudgetingJargon

**Syllabus**: [`src/data/syllabi/career/defense_budgeting_jargon_buster.md`](../../../src/data/syllabi/career/defense_budgeting_jargon_buster.md)
**Track id**: `defenseBudgetingJargon`
**Tier**: career
**Region**: **US-only** (PPBE, POM/BES/PB, color of money, ADA, reprogramming, continuing-resolution mechanics, FIAR). Not currently tagged. Add `region: 'US'` to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) line 170. **Add `lastReviewed`** — references CRs, thresholds, and authorities that move year to year.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Money Words That Sound Similar (auth/approp/BA/apportionment/allotment/commit/oblig/outlay) | ✅ | Strong in the hand-authored bank; `soft commit` (#7305) and obligation-vs-spend covered well. |
| 2. PPBE Translation (POM/BES/PB, exhibits, execution review) | ✅ | POM scrub (#7301), phasing realism (#7314), affordability (#4108261). |
| 3. Fiscal-Law Signals (purpose/time/amount, bona fide need, ADA, expired funds, CR) | ✅ | Color-of-money (#7302), wrong-color concern (#4109256), CR translate (#4108257), below-threshold shuffle (#4108252). |
| 4. Execution and Variance Language (burn rate, phasing, obligation rate, under/over-execution, carryover) | ✅ | Underburn diagnosis (#7303), obligation theater (#4108264), carryover hitchhikers (#7312), late-spike sprint (#4108254). |
| 5. Controls and Audit Readiness (documentation, certifying official, FIAR, corrective action) | ⚠️ Partial | Audit reach (#7308), missing approval trail (TopOff). Certifying-officer language and FIAR-named remediation absent. |
| Capstone (decode a budget review packet) | ❌ | No mixed-decode scenario question. |

**Chapter taxonomy mismatch.** The hand-authored bank uses Floe location names ("POM Dock", "Appropriation Reef", "Control Channel"). The TopOff uses functional names ("Budget Build", "Execution Review", "Funds Control"). The PracticePolish uses prefixed names ("Defense Budgeting Jargon: Appropriation"). None match the syllabus chapter titles. Realign generated content to the five syllabus chapters.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`jargonBusters.ts`](../../../src/data/questionCatalog/jargonBusters.ts) `defenseBudgetingJargonQuestions` (line 348) | ~20 | **KEEP** | **Gold standard for the catalog.** Hand-authored, distinctive voice ("camouflage necktie", "calendar physics", "accounting vapor wearing combat boots"), per-distractor explanations that nail the actual misconception. Source of voice for any new authoring. |
| [`careerAgentGeneratedJargonGovClinicalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedJargonGovClinicalTopOff.ts) `defenseBudgetingJargon` (line 31) | ~25 | **FIX** | Voice is decent (matches the hand-authored register — "purpose costume", "obligation theater", "calendar physics"). Coverage is genuinely additive (reclama prep, working-capital rate surprise, advance procurement). But uses file-wide `DEFAULT_FLAW` — **auto-FIX per audit rules.** Rewrite per-distractor explanations and merge into the hand-authored bank. |
| [`careerAgentGeneratedJargonPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedJargonPracticePolish.ts) `defenseBudgetingJargon` (line 75) | 4 | **DELETE** | Pure duplication of color-of-money, obligation-vs-spend, below-threshold, UFR wish-list — all already in the hand-authored bank, with stronger voice. **`DEFAULT_FLAW`.** Generic prefixed chapter names. Zero salvageable content. |

**Net effect**: 49 Q's across 3 files → ~35 in 1 canonical hand-authored-voice bank with proper per-distractor explanations and capstone-style decode questions added.

## Open actions (priority order)

1. **Add `region: 'US'` and `lastReviewed`** to the track entry. The CR, threshold, and reprogramming language assumes current US fiscal-year mechanics.
2. **Merge TopOff novel content into `jargonBusters.ts`** (~15 net-new concepts: trace-the-wedge, reclama prep, working-capital rate surprise, advance procurement, congressional response, closeout stale obligations). Rewrite per-distractor explanations in the hand-authored voice.
3. **Delete the PracticePolish block** — it adds zero net content and downgrades voice.
4. **Author 4–6 capstone decode questions**: present a fake budget review packet excerpt, ask the learner to identify funding status, fiscal-law constraint, execution risk, and evidence gap in one prompt. Closes the Chapter 5 + Capstone gaps.
5. **Realign chapter names** in any retained generated content to the five syllabus chapters.

## Estimated effort

- TopOff merge + per-distractor rewrite (25 questions × 15 min): ~6 hours
- Capstone decode authoring (6 questions × 30 min): ~3 hours
- Delete + chapter rename + tags: ~1 hour

**~1.25 working days.**

## Notes for next auditor

This track is the cleanest in the cluster because the hand-authored bank exists and is *good*. The pattern to copy elsewhere: when a `jargonBusters.ts` block exists, treat it as canonical voice and prune the AI-generated noise around it. Compare to `vcJargon` and `ibJargon` — same hand-vs-generated split, same recommended treatment. There is significant concept overlap with `cdfm` and `defenseBudgetingRoadmap` — after cluster consolidation, this track should be the "decode acronym-heavy meeting" entry point and the roadmap should be the "build the analyst pack" path.

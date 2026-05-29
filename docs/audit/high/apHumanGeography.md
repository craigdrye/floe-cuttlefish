# Audit: apHumanGeography

**Syllabus**: [`src/data/syllabi/high/ap_human_geography.md`](../../../src/data/syllabi/high/ap_human_geography.md)
**Track id**: `apHumanGeography` (high.ts line 1477)
**Tier**: high
**Region**: Global (College Board US framework); not currently tagged.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Thinking Geographically | yes | Scale, spatial pattern, relative/absolute location, choropleth/dot/cartogram, GIS. |
| 2. Population and Migration | yes | Arithmetic vs physiological density, DTM stages, dependency ratio, push/pull, intervening opportunity, chain migration. |
| 3. Cultural Patterns and Processes | yes | Cultural landscape, hierarchical/contagious/relocation diffusion. |
| 4. Political Geography | yes | Nation/state/nation-state, centripetal/centrifugal, gerrymandering. |
| 5. Agriculture and Rural Land Use | yes | Subsistence vs commercial, Von Thunen, Green Revolution. |
| 6. Cities and Urban Land Use | yes | Urbanization, suburbanization, gentrification, central place theory, CBD. |
| 7. Industry, Development, Human-Environment | yes | HDI, core-periphery, dependency theory, agglomeration, outsourcing, offshoring, Weber's least cost theory. |
| 8. AP Human Geography Exam Studio | yes | "Review Skills": spatial association, scale trap. |

**May 2026 rubric finding: does NOT apply.** APHG is the cleanest AP humanities content bank: real concepts, named models (Von Thunen, Weber, central place theory), per-distractor whys that distinguish related concepts ("intensive vs extensive", "subsistence vs commercial", "push vs pull", "relative vs absolute location").

**Chapter taxonomy mismatch.** File chapters ("Geographic Thinking", "Maps and Data", "Population", "Migration", "Culture", "Political Geography", "Agriculture", "Urban Geography", "Development", "Industry", "Services", "Environment", "Review Skills") are well-organized but use 13 chapters versus syllabus's 8. Consolidate to syllabus chapters (e.g., "Maps and Data" → Chapter 1, "Services" → Chapter 6).

## Per-file recommendations

| File | APHG Q's | Bucket | Reason |
|---|---|---|---|
| [`apHumanGeographyWorkoutGenerated.ts`](../../../src/data/questionCatalog/apHumanGeographyWorkoutGenerated.ts) | 50 | **KEEP** | Strongest content-bearing AP humanities bank in the cluster. Per-distractor whys correctly identify the *related* concept being confused (intensive agriculture vs extensive, hierarchical diffusion vs contagious vs relocation, threshold vs range). Minor FIX: consolidate to 8 syllabus chapters. |
| [`apHumanGeographyExamBatch.ts`](../../../src/data/questionCatalog/apHumanGeographyExamBatch.ts) | 10 | **MERGE → WorkoutGenerated** | Substantial overlap (demographic transition, push factor, cultural diffusion, nation-state, intensive agriculture, urban sprawl, HDI, break-of-bulk, possibilism). Less concise than the WorkoutGenerated treatments. Lift the unique items (break-of-bulk point, urban sprawl) and DELETE the rest. Unlike `apHistoryExamBatch` and `apEnglishExamBatch`, this file is NOT pure rubric — it's content, just duplicated. |
| `openTriviaGeographyImported.ts` (3527 lines) | ~hundreds | **FIX → MERGE selectively** | Massive bank of country/capital/landform recall. Mostly out-of-scope for AP Human Geography (the course is processes and patterns, not country trivia). Cherry-pick ~20 items that match Chapter 2-7 themes; route the rest to a separate geography-trivia track or DELETE. |
| `openTriviaCuratedGeographyAdditional` / `…LanguageCultureAdditional` (in `highAdvanced.ts` line 105-107) | unknown | **CHECK** | Curated subsets — verify they aren't drowning the bank in country trivia. |

**Net effect**: 60 strong content items → ~55 (after dedupe) + ~20 curated trivia = ~75 high-quality APHG questions. Already meets the bar.

## Open actions (priority order)

1. **Consolidate chapters** from 13 to 8 to match syllabus.
2. **Dedupe and MERGE** `apHumanGeographyExamBatch` into WorkoutGenerated (~3 unique items kept, 7 cut).
3. **Trim `openTriviaGeographyImported`** routing to APHG: keep only process/pattern items, push country-trivia to a different track.
4. **Add `region`** note (global content under US College Board framework).
5. **Author 5-8 stimulus FRQ-style MCQs** with a small data table or map description (matches APHG exam's stimulus pattern).
6. **Add a couple of Malthus/Boserup/epidemiologic transition items** — listed in syllabus Chapter 2, missing from the bank.

## Estimated effort

- Chapter consolidation: ~1 hour.
- Dedupe ExamBatch merge: ~1 hour.
- Trim openTriviaGeography routing: ~2 hours.
- Stimulus FRQ items + Malthus/Boserup: ~3 hours.

**~1 working day.** Second-lightest workload in the cluster after AP US Gov.

## Notes for next auditor

`apHumanGeographyWorkoutGenerated.ts` is the model for AP humanities content authoring — concept pairs with per-distractor disambiguation. Use this voice when remediating apEnglish, apHistory, apEuropeanHistory. The OpenTrivia geography file is enormous; whichever track audits geography-trivia (`guessTheCountryShape`, `guessTheFlag`) should ensure no double-routing into APHG.

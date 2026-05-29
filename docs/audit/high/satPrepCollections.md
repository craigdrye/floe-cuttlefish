# Audit: SAT Prep Collections (`col-sat-math` / `col-sat-reading-and-writing` + Get-Ready siblings)

**Syllabus**: [`src/data/syllabi/high/sat_prep_collections.md`](../../../src/data/syllabi/high/sat_prep_collections.md)
**Track ids**: `col-sat-math` (line 1774) and `col-sat-reading-and-writing` (line 1785) in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts). Syllabus also names `col-get-ready-for-sat-prep-math` and `col-get-ready-for-sat-prep-reading-and-writing` but those track entries are not present in `high.ts`.
**Tier**: high
**Region**: **US** — SAT is College Board, US/international university admissions; recommend explicit `regions: ['US']` tag on both tracks for consistency with the rest of the cluster.
**Status**: both `playable`. Has actual question content (unlike the AU/UK/IN tracks), so `playable` is defensible — quality concerns below.

## Coverage map (syllabus → questions)

| Syllabus chapter | col-sat-math | col-sat-r&w | Notes |
|---|---|---|---|
| 1. Digital SAT Format and Study Plan | ❌ | ❌ | No Bluebook/adaptive-module items. |
| 2. Information and Ideas | – | ✅ | Covered in openSAT chapter "Information and Ideas - Medium/Hard". |
| 3. Craft and Structure | – | ✅ | Covered in openSAT chapter "Craft and Structure". |
| 4. Expression and Conventions | – | ✅ | Covered in openSAT chapters "Expression of Ideas" and "Standard English Conventions". |
| 5. Algebra and Linear Relationships | ✅ | – | Covered in openSAT chapters "Algebra - Medium/Hard". |
| 6. Advanced Math, Geometry, Trigonometry | ✅ | – | Covered in openSAT chapters "Advanced Math", "Geometry and Trigonometry". |
| 7. Problem Solving, Data, Desmos Strategy | ✅ | – | "Problem-Solving and Data Analysis" chapters present. No Desmos-specific items. |
| 8. Full Practice, Review, Test-Day Execution | ❌ | ❌ | No timing/pacing/error-taxonomy items. |

**Effective coverage: ~75% of Chapters 2–7. Chapters 1 and 8 (metacognition / test-day execution) are uncovered.**

## Per-file recommendations

| File | SAT Q's | Bucket | Reason |
|---|---|---|---|
| [`openSatImported.ts`](../../../src/data/questionCatalog/openSatImported.ts) | ~1200 (≈900 math, ≈300 R&W) | **FIX** | **DEFAULT_FLAW flagged.** Every wrong-answer explanation across all 1200 items is the same boilerplate string ("misses the specific evidence or calculation") with an identical nudge. Prompts and correct answers are sourced and traceable, but per-distractor rigour fails the quality bar. Each item already has a strong `lesson` field that can seed distractor reasoning. |
| [`schoolAssessmentReadingSocialImported.ts`](../../../src/data/questionCatalog/schoolAssessmentReadingSocialImported.ts) (STAAR) wired to `col-sat-reading-and-writing` | ~16 | **MERGE → reposition** | STAAR Grade 7/8 writing items have real per-distractor reasoning, but they are STAAR not SAT — different rubric, different age band. Move to a Get-Ready-for-SAT track or tag as warm-up. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) topup | ~50 | **DELETE for SAT tracks** | Generic English/Math blueprints under an SAT title misrepresent Bluebook adaptive modules, Desmos integration, and SAT R&W module logic. |
| No file for `col-get-ready-for-sat-prep-math` / `col-get-ready-for-sat-prep-reading-and-writing` | 0 | — | Syllabus names these but the age catalog does not list them. Add the track entries or remove from syllabus header. |

## Open actions (priority order)

1. **Rewrite the openSAT per-distractor explanations.** Highest-leverage action in the cluster — 1200 source-traceable questions usable but uniformly fail the quality bar. The `lesson` field can seed plausible distractor critiques.
2. **Add `regions: ['US']`** to both SAT track entries explicitly.
3. **Author Chapter 1 and Chapter 8 items** (~25 total) — Bluebook navigation, pacing, error taxonomy, Desmos use — in `highBuilders.ts`.
4. **Decide on the Get-Ready tracks** — add to age catalog or remove from syllabus header.
5. **Exclude SAT tracks from generic blueprint topup**.
6. **Align chapter names** between openSAT bank and syllabus.

## Estimated effort

- Per-distractor rewrite (1200 items, scripted seed + human polish): ~40 hours of focused review (or 4 hours scripted + 30 hours review)
- Chapter 1 + Chapter 8 hand-authored items (~25): ~8 hours
- Region tags, Get-Ready decision, chapter alignment: ~2 hours
- Blueprint exclusion: ~15 min

**~6–7 working days.** SAT is the most content-rich track in the cluster and the highest-leverage rewrite target.

## Notes for next auditor

The openSAT bank is the only cluster member with real volume and source traceability — precious. The DEFAULT_FLAW problem is structural: the generator (`scripts/build_opensat_import.cjs`) writes the boilerplate, so hand-edits won't survive regenerate. Fix the generator, not the file. Also: the SAT R&W bank's `topic` field is "AP" (line 4019) — mis-labelled, should be "SAT".

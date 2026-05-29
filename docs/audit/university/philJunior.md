# Audit: philJunior (Philosophy of Mind)

**Syllabus**: [`src/data/syllabi/university/philosophy_of_mind.md`](../../../src/data/syllabi/university/philosophy_of_mind.md)
**Track id**: `philJunior`
**Tier**: university
**Region**: jurisdiction-neutral
**Status**: `soon` ([`src/data/ageCatalog/university.ts:206`](../../../src/data/ageCatalog/university.ts)) — confirmed.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. The Mind-Body Problem | ⚠️ via spillover only | Dualism/physicalism present on `philosophy` track; no dedicated `philJunior` items |
| 2. Behaviorism and Identity Theory | ❌ | No questions anywhere on Super-Spartan, type/token identity, multiple realizability as objection |
| 3. Functionalism and Computational Minds | ⚠️ spillover | Chinese Room, Turing Test, functionalism on `philosophy` track |
| 4. Consciousness and the Hard Problem | ⚠️ spillover | Mary's Room, Nagel's bat, qualia on `philosophy` track |
| 5. Representation, Perception, Embodiment | ❌ | No intentionality, predictive processing, enactivism content |
| 6. Personal Identity and the Self | ⚠️ spillover | Parfit fission, Ship of Theseus on `philosophy` track |
| 7. Free Will, Agency, Moral Responsibility | ⚠️ spillover | Determinism/compatibilism on `philosophy` track; no Frankfurt cases, no reasons-responsiveness |
| 8. Extended Mind, AI Ethics, Future Minds | ❌ | No extended mind, eliminativism, AI consciousness, moral-status content |

**No dedicated `philJunior` bank exists.** The track id is not in `universityAcademicTrackIds` ([`index.ts:97`](../../../src/data/questionCatalog/index.ts)), so wiring falls through to `university-generated` which has no `philJunior` key in [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts) (the file only defines `mcat`, `lsat`, `anatomyAndPhysiology`, `financialAccounting`, `electricalEngineering`, `eurekaMathPrecalculus`, `introToSociology`). **Result: zero questions wired.**

May 2026 audit note confirmed: `philJunior` is `status: 'soon'` and may be empty — verified empty.

## Per-file recommendations

| File | philJunior Q's | Bucket | Reason |
|---|---|---|---|
| (no file directly wired) | 0 | **N/A** | Track has no banks. Status `soon` is honest. |
| [`universityAcademic.ts`](../../../src/data/questionCatalog/universityAcademic.ts) `philosophy.[chapter='Philosophy of Mind']` slice | ~5 (Chinese Room, Mary's Room, Nagel's bat, functionalism, etc.) | **MERGE → philJunior** when track promotes to `playable` | Already filtered into `contemporaryEthics` via the chapter-name match at [`universityAcademic.ts:374`](../../../src/data/questionCatalog/universityAcademic.ts). Same pattern should feed a future `philJunior` slice. |
| [`philosophyWorkoutGenerated.ts`](../../../src/data/questionCatalog/philosophyWorkoutGenerated.ts) "Philosophy of Mind" chapter | 4 (qualia, Mary's Room, Turing Test, functionalism) | **MERGE → philJunior** when promoted | Per-distractor quality; reuse via chapter-name filter when track lights up. |

## Open actions (priority order)

1. **Decide promotion timeline.** Either keep `status: 'soon'` honestly or commit to authoring 40–60 questions across the eight chapters.
2. **If promoting**: wire `philJunior` in [`universityAcademic.ts`](../../../src/data/questionCatalog/universityAcademic.ts) the way `contemporaryEthics` and `philSenior` are — derive an initial bank by filtering `catalog.philosophy.filter(q => q.chapter === 'Philosophy of Mind')` plus the workout-generated mind chapter, then top up.
3. **Author the gap chapters** (behaviorism/identity theory, representation/embodiment, extended mind/AI ethics) — these are *not* covered by spillover from `philosophy`. ~30 questions needed. Voice template: `philosophyWorkoutGenerated.ts`.
4. **Disambiguate from `philosophy` track** so junior-year `philJunior` is not merely a re-display of intro material. The syllabus is more advanced (predictive processing, Frankfurt cases, reasons-responsiveness, panpsychism, illusionism) — most of that is genuinely missing.

## Estimated effort

- Initial wiring from existing spillover: ~1 hour
- Gap-chapter authoring (~30 questions for the chapters with zero coverage): ~10 hours
- Stretching the intro spillover items into junior-level versions (5 → 15 deeper questions): ~3 hours

**~2 working days** to ship a credible `playable` `philJunior` track. Until then, `status: 'soon'` is the right call.

## Notes for next auditor

`philJunior`, `philSophomore`, `uniScience`, `lifeSkillsUni`, and `mathSenior` form a cluster of `status: 'soon'` university tracks with zero wired content — all listed in [`universityStageBuckets`](../../../src/data/ageCatalog/university.ts) for `university-junior`/`sophomore`/`freshman` but un-fed. Worth grouping for a single authoring sprint when promotion is planned.

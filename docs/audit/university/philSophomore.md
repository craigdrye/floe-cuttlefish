# Audit: philSophomore (Philosophy of Science)

**Syllabus**: [`src/data/syllabi/university/philosophy_of_science.md`](../../../src/data/syllabi/university/philosophy_of_science.md)
**Track id**: `philSophomore`
**Tier**: university
**Region**: jurisdiction-neutral
**Status**: `soon` ([`src/data/ageCatalog/university.ts:195`](../../../src/data/ageCatalog/university.ts)) — confirmed.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Science, Induction, Demarcation | ⚠️ spillover | Popper falsifiability, Hume's problem of induction on `philosophy` track (workout + hand-rolls) |
| 2. Evidence, Confirmation, Bayesian Reasoning | ❌ | No Bayes' theorem, priors/likelihoods/posteriors, base rates, p-value reasoning on this track |
| 3. Explanation, Laws, Causation | ❌ | No D-N model, flagpole-shadow, mechanism vs unification |
| 4. Kuhn, Lakatos, Scientific Change | ⚠️ spillover | Kuhn "paradigm" on `philosophy` workout (1 item); no Lakatos, no Feyerabend, no incommensurability deep-dive |
| 5. Realism, Anti-Realism, Models | ⚠️ spillover | Underdetermination, IBE on `philosophy` workout (2 items); no no-miracles argument, pessimistic meta-induction, constructive empiricism |
| 6. Values, Objectivity, Social Science of Science | ❌ | No value-free ideal, feminist standpoint, replication crisis content on this track |
| 7. Philosophy of the Special Sciences | ❌ | No species concepts, quantum interpretation, reductionism content |
| 8. Science, Society, Communication | ❌ | No consensus/denialism/risk-communication content |

**No dedicated `philSophomore` bank exists.** Same problem as `philJunior` — track id is not registered in any catalog router and `universityAgentGenerated.ts` does not define a `philSophomore` key. **Zero questions wired.**

May 2026 audit note confirmed: `philSophomore` is `status: 'soon'` and may be empty — verified empty.

## Per-file recommendations

| File | philSophomore Q's | Bucket | Reason |
|---|---|---|---|
| (no file directly wired) | 0 | **N/A** | Track has no banks. Status `soon` is honest. |
| [`philosophyWorkoutGenerated.ts`](../../../src/data/questionCatalog/philosophyWorkoutGenerated.ts) "Philosophy of Science" chapter | 4 (falsifiability, paradigm, underdetermination, IBE) | **MERGE → philSophomore** when promoted | High quality; reuse via chapter-name filter once track lights up. |
| [`universityAcademic.ts`](../../../src/data/questionCatalog/universityAcademic.ts) hand-rolls in `philosophy` (id 17208 Popper, id 16619 Hume) | 2 | **MERGE → philSophomore** when promoted | Both are syllabus-relevant for chapters 1 and 4. |
| [`researchMethodsWorkoutGenerated.ts`](../../../src/data/questionCatalog/researchMethodsWorkoutGenerated.ts) "Open Science" chapter (preregistration, p-hacking, publication bias, replication crisis) | 4 | **MERGE → philSophomore** for chapter 6 | These items are sociology/methodology of science — exactly the syllabus chapter 6 material. Cross-wire (do not move). |

## Open actions (priority order)

1. **Decide promotion timeline.** Honest `soon` flag versus shipping a real track.
2. **If promoting**: wire `philSophomore` in [`universityAcademic.ts`](../../../src/data/questionCatalog/universityAcademic.ts) using the same `.filter()` pattern as `philSenior`/`contemporaryEthics`. Initial seed: workout-generated "Philosophy of Science" chapter + 2 hand-rolls + Research Methods "Open Science" cross-wire. ~10 questions.
3. **Author the gap chapters** (Bayesian confirmation, D-N model/explanation, scientific realism, values/feminism, special sciences, communication). ~40 questions needed. Voice template: `philosophyWorkoutGenerated.ts`.
4. **Coordinate with `philosophy`** to avoid double-counting: any item that lives on `philosophy.chapter='Philosophy of Science'` will get pulled into the filter; that's fine, but the new authored items should land on a dedicated `philSophomore`-only file (e.g. `philosophyOfScienceWorkoutGenerated.ts`).

## Estimated effort

- Initial wiring + spillover filter: ~1 hour
- Gap-chapter authoring (~40 questions across six uncovered chapters): ~14 hours
- Cross-wiring with `researchMethods` Open Science chapter: ~30 min

**~2.5 working days** to ship a credible `playable` `philSophomore` track.

## Notes for next auditor

The `philSophomore` syllabus has notable overlap with `researchMethods` chapter 8 (Open Science) and `uniScience` chapters 1, 3, and 6 (demarcation, statistical thinking, ethics/integrity). Decide once across the cluster whether replication-crisis content lives in `researchMethods`, `philSophomore`, or `uniScience` — currently it lives in `researchMethods` only and is invisible to philosophy-of-science learners. A shared "Methods and Meta-Science" chapter cross-wired across all three would beat duplication.

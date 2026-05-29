# Audit: uniScience (University Foundations in Science)

**Syllabus**: [`src/data/syllabi/university/university_foundations_in_science.md`](../../../src/data/syllabi/university/university_foundations_in_science.md)
**Track id**: `uniScience`
**Tier**: university
**Region**: jurisdiction-neutral (Belmont/NIH framing is US-flavoured but research-integrity concepts are universal)
**Status**: `soon` ([`src/data/ageCatalog/university.ts:195`](../../../src/data/ageCatalog/university.ts)) — confirmed.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. What Science Is and How Models Work | ⚠️ spillover only | Falsifiability/induction live on `philosophy` track |
| 2. Experimental and Observational Design | ⚠️ spillover only | Live on `researchMethods` (control groups, random assignment, confounds) |
| 3. Measurement, Data, Statistical Thinking | ⚠️ spillover only | Live on `researchMethods` (reliability, validity, p-values, Type I/II) |
| 4. Reading Scientific Literature | ❌ | No IMRaD/peer-review/preprint-vs-published items |
| 5. Lab Practice, Safety, Reproducibility | ❌ | No lab notebook, PPE, SDS, FAIR-principles, version-control items |
| 6. Research Ethics and Scientific Integrity | ⚠️ spillover | Belmont/IRB on `researchMethods`; no plagiarism/authorship/dual-use items |
| 7. Scientific Communication and Public Trust | ❌ | No risk communication, lay-summary, overclaiming-rewrite items |
| 8. Methods Across Scientific Fields | ❌ | No physics-vs-clinical-vs-Earth-science methodology comparison |

**Zero questions wired to this track.** Track id is not in `universityAcademicTrackIds` ([`index.ts:97`](../../../src/data/questionCatalog/index.ts)) and no `uniScience` key exists in [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts). Status `soon` is honest.

May 2026 audit note confirmed: `university_foundations_in_science` may be `status: 'soon'` stub — verified empty.

The course's actual subject matter (research literacy across disciplines) is partially covered by `researchMethods` and `philosophy` (philosophy of science chapter), but no track exposes the *consolidated* "scientific literacy bridge" the syllabus describes. The course's distinctive contribution — chapters 4 (paper-reading), 5 (lab safety/reproducibility), 7 (sci comm), and 8 (cross-field methodology) — has no coverage anywhere in the catalog.

## Per-file recommendations

| File | uniScience Q's | Bucket | Reason |
|---|---|---|---|
| (no file directly wired) | 0 | **N/A** | Track has no banks. Status `soon` is honest. |
| [`researchMethodsWorkoutGenerated.ts`](../../../src/data/questionCatalog/researchMethodsWorkoutGenerated.ts) | 50 (in `researchMethods`) | **CROSS-WIRE candidate** for chapters 2, 3, 6 | Cleanly maps to syllabus chapters 2 (Design), 3 (Measurement / Statistics), 6 (Ethics). Reuse via shared chapter filter at promotion time; don't duplicate. |
| [`philosophyWorkoutGenerated.ts`](../../../src/data/questionCatalog/philosophyWorkoutGenerated.ts) "Philosophy of Science" chapter | 4 | **CROSS-WIRE candidate** for chapter 1 | Falsifiability, paradigm, underdetermination, IBE — exactly the chapter-1 demarcation material. |

## Open actions (priority order)

1. **Decide promotion timeline.** If the cluster strategy is "research literacy across disciplines is a uniquely Floe-able course", commit to authoring chapters 4, 5, 7, 8 (the parts no other track will cover). If not, leave `status: 'soon'` indefinitely or delete the track and consolidate into `researchMethods` + `philSophomore`.
2. **If promoting**: wire `uniScience` in [`universityAcademic.ts`](../../../src/data/questionCatalog/universityAcademic.ts). Initial seed via cross-wire: `researchMethodsWorkoutGenerated` chapters mapping to syllabus 2/3/6 + `philosophyWorkoutGenerated` "Philosophy of Science" chapter for syllabus 1. ~25 questions seeded from existing content.
3. **Author the uncovered chapters** — this is the course's distinctive value:
   - Chapter 4 (literature reading): IMRaD anatomy, abstract vs paper vs press-release, preprint status, conflicts of interest, three-pass reading method. ~8 questions.
   - Chapter 5 (lab safety/reproducibility): notebook entries, PPE selection, SDS reading, FAIR principles, version control for data. ~8 questions.
   - Chapter 7 (sci communication): risk communication, lay-summary rewrite, overclaiming repair, uncertainty framing. ~6 questions.
   - Chapter 8 (cross-field methodology): match-method-to-question across physics/biology/clinical/Earth/social/computational. ~6 questions.
4. **Resolve scope overlap with `philSophomore`** before authoring — chapter 1 (demarcation) and chapter 6 (integrity) overlap substantially. Decide who owns what; either delete this track or carve a clear methodology-vs-philosophy boundary.

## Estimated effort

- Cross-wire seeding: ~1 hour
- Gap-chapter authoring (~28 questions across 4 uncovered chapters): ~10 hours
- Scope-overlap arbitration with `philSophomore`: ~2 hours

**~2 working days** to ship a credible `playable` `uniScience` track — IF promotion is desired. Strong case for deletion-and-consolidation given heavy overlap with `researchMethods` and `philSophomore`.

## Notes for next auditor

Most overlap-heavy entry in the cluster. Chapters 1–3 and 6 already covered by `philosophy`/`philSophomore`/`researchMethods` — only chapters 4, 5, 7, 8 are genuinely new. Three consolidation options for the pruning-plan auditor: (1) delete `uniScience` and fold distinctive chapters into `researchMethods`; (2) keep as "scientific literacy bridge" with cross-wires; (3) rescope to "Lab Skills & Sci Comm" covering only the uncovered chapters.

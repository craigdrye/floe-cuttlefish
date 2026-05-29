# Audit: medicalCodingRoadmap

**Syllabus**: [`src/data/syllabi/career/medical_coding_roadmap.md`](../../../src/data/syllabi/career/medical_coding_roadmap.md)
**Track id**: `medicalCodingRoadmap`
**Tier**: career
**Region**: US (ICD-10-CM, CPT, HCPCS, NCCI, payer LCDs, E/M leveling rules — not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Coding Role and Reference Habits | ✅ | Favorite-code trap, cheat-sheet vs current guidance, productivity pressure |
| 2. Diagnosis Coding | ✅ | Outpatient rule-out, laterality, sequela, combination codes, social-determinant, resolved condition |
| 3. Procedure and Supply Coding | ✅ | Incomplete op note, drug waste, supply bundling, infusion time, pathology addendum |
| 4. Modifiers, Bundling, and Claim Edits | ✅ | Same-day E/M, distinct session, anatomic modifier, global period, bilateral, assistant surgeon |
| 5. Queries, Audits, and Denial Prevention | ✅ | Nonleading queries, leading-query risk, template inflation, query fatigue, productivity pressure |

Coverage is solid across all five chapters.

**Chapter taxonomy mismatch.** Three competing schemes:
- `RoadmapHealthcare.ts` uses syllabus-aligned chapters ("Coding Role and Reference Habits", "Diagnosis Coding", etc.) — good
- `RoadmapHealthcareFinalTopOff.ts` invents new ones ("Coding Workflow and Source Documents", "ICD-10-CM Diagnosis Coding", "CPT and HCPCS Procedure Coding", "Modifiers and Payer Rules", "Auditing, Queries, and Compliance") — needs realignment
- `RoadmapPracticePolish3.ts` uses "Medical Coding Roadmap: ..." prefix-style chapters — fragmented

## Per-file recommendations

| File | MC Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapHealthcare.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcare.ts) (medicalCodingRoadmap, lines 399–490) | 20 | **FIX** | Strong scenarios (uncertain diagnosis, modifier-support refusal, nonleading queries, audit feedback, productivity pressure, combination codes). Chapter names already match syllabus. Auto-FIX: every distractor uses file-wide `DEFAULT_FLAW`. Per-distractor rewrite → this becomes the canonical bank. |
| [`careerAgentGeneratedRoadmapHealthcareTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareTopOff.ts) (medicalCodingRoadmap, 16 q's) | 16 | **MERGE → RoadmapHealthcare** | Genuinely novel content (anatomic modifier mismatch right/left, screening-turns-diagnostic, drug waste, distinct session, audit overcorrection, history vs active, device-removal detail, social-determinant coding). Chapter names match base. Lift novel scenarios; dedupe. |
| [`careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts) (medicalCodingRoadmap, 16 q's) | 16 | **MERGE → RoadmapHealthcare (partial), DELETE rest** | Substantial overlap with TopOff (rule-out wording, combination code, leading query). Salvageable: pathology-report arrival, infusion-time math, sequela wording, operative addendum, bilateral payer variation (5–7 questions). Different chapter taxonomy — realign. |
| [`careerAgentGeneratedCoreRoadmapPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreRoadmapPolish.ts) (medicalCodingRoadmap, 4 q's, lines 163–184) | 4 | **DELETE** | Generic (problem-list trap, missing size, bundle denial, repeat coder error). All re-covered in base + TopOff. Different `DEFAULT_FLAW` string adds maintenance cost. |

**Net effect**: 56 questions across 4 files → ~30 in 1 canonical syllabus-aligned bank.

## Open actions (priority order)

1. **Per-distractor rewrite** of the base RoadmapHealthcare medicalCodingRoadmap block (20 q's). ~3 hours.
2. **Consolidate triplet** — lift unique TopOff content into base, salvage 5–7 questions from FinalTopOff, realign FinalTopOff chapter names. ~3 hours.
3. **Delete** CoreRoadmapPolish entries (4 q's).
4. **Add `region: 'US'` tag** to the track entry — ICD-10-CM (not WHO ICD-10), CPT, HCPCS, NCCI are all US.
5. **Add `lastReviewed` metadata** to coding-rule-dependent questions (E/M rules, NCCI edits, combination code guidance change annually).

## Estimated effort

- Per-distractor rewrite of base: ~3 hours
- Triplet consolidation: ~3 hours
- Polish deletion: 5 min
- Tagging: ~30 min

**~6.5 hours** — typical healthcare roadmap effort. Less than `medicalCodingCpc` because there are no coverage gaps.

## Notes for next auditor

This track overlaps significantly with `medicalCodingCpc`. Both cover ICD-10-CM, CPT, HCPCS, modifiers, NCCI, queries, audits. Difference is angle: CPC is exam-prep (anatomy, exam timing, reference navigation), Roadmap is workplace fluency (encounter coding, denial prevention, productivity, audit response). Worth a product-level decision on whether to keep distinct. If kept distinct, hold the Roadmap to scenario-rich workflow cases and leave drill-style code-set practice to CPC.

A solid pattern for new authoring: every question here uses a real-clinic-style scenario before asking the rule question. This is exactly what the framework calls for. The hand-written CPC content in `career.ts` lines 161–173 should also serve as a voice anchor.

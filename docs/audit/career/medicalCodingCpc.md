# Audit: medicalCodingCpc

**Syllabus**: [`src/data/syllabi/career/medical_coding_cpc.md`](../../../src/data/syllabi/career/medical_coding_cpc.md)
**Track id**: `medicalCodingCpc`
**Tier**: career
**Region**: US (AAPC CPC, ICD-10-CM, CPT, HCPCS Level II, NCCI, Medicare LCD — not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Coding Profession, Compliance, and Reference Books | ✅ | "Coding Clinic" + "CPC: E/M Leveling", reference-book discipline |
| 2. Medical Terminology and Anatomy | ⚠️ | **Thin.** No anatomy/terminology drills. Real gap. |
| 3. ICD-10-CM Diagnosis Coding | ✅ | Tabular verification, sequencing, laterality, 7th-character placeholders, combination codes |
| 4. CPT Procedure Coding | ✅ | E/M leveling, surgery details, global periods, assistant surgeon |
| 5. HCPCS Level II and Supplies | ✅ | Supplies/units, dose-unit math (40 mg ÷ 10 mg = 4 units) |
| 6. Modifiers, Bundling, and NCCI Logic | ✅ | Modifier 25, 59, bilateral, distinct service, NCCI bundling |
| 7. Specialty Coding and Exam Timing | ⚠️ | Some — exam triage, global period — but no cardiology/OB/integumentary-specific cases |
| 8. Claims, Denials, Queries, and Audits | ✅ | Compliant queries, audit overcorrection, denial patterns |

## Per-file recommendations

| File | CPC Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) (medicalCodingCpc, lines 161–173) | 12 | **KEEP** | **Gold standard.** Hand-written, syllabus-style chapter names ("Coding Clinic", "Claim Reef", "ICD-10-CM", "CPT", "Modifiers", "NCCI Logic", "HCPCS Level II", "Provider Query"), per-distractor explanations that are specific and tied to the misconception ("Software details are not coded on the claim"; "CPT often needs precise details"). Source of voice for any new CPC authoring. **Verify and keep as canonical.** |
| [`careerAgentGeneratedHealthcareAppliedTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedHealthcareAppliedTopOff.ts) (medicalCodingCpc, 32 q's) | 32 | **FIX** | Strong scenario quality (laterality treasure hunt, modifier with a receipt, screening-versus-symptom colonoscopy, LCD checklist, ulcer-stage query, pressure-ulcer specificity, refund clock, frequency-limit appeal). Auto-FIX: file-wide `DEFAULT_FLAW`. Rewrite per-distractor; align chapter names to the syllabus's 8-chapter scheme. |
| [`careerAgentGeneratedCore2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCore2.ts) (medicalCodingCpc, 18 q's, lines 491–582) | 18 | **MERGE → HealthcareAppliedTopOff (partial), DELETE rest** | Substantial overlap (laterality, bundling, modifier judgment, sequencing). Chapter taxonomy invented ("Medical Coding CPC: Coding Foundations" etc) doesn't match syllabus. Salvageable: unit-math drill (4101114), 7th-character placeholder (4101113), bundle-burrito scenario. Cut the rest. |
| [`careerAgentGeneratedQualificationsAppliedPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsAppliedPolish.ts) (medicalCodingCpc, 4 q's, lines 75–96) | 4 | **DELETE** | Generic ("More words, not more work", "Modifier 25 temptation", "Laterality blank", "Payer denial pattern") — all re-covered with better specificity in the HealthcareAppliedTopOff. Different `DEFAULT_FLAW` string adds maintenance cost. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (medicalCodingCpc, 4 q's, lines 317–338) | 4 | **DELETE** | Generic (problem-list trap, missing size, modifier-as-loophole, exam triage) — every concept covered in the hand-written `career.ts` set and the TopOff. Yet another `DEFAULT_FLAW` string. |

**Net effect**: 70 CPC questions across 5 files → 12 hand-written KEEP + ~25 high-quality FIX in 1 canonical file = ~37 questions covering all 8 chapters.

## Open actions (priority order)

1. **Author 6–8 anatomy/terminology questions** (Chapter 2 gap). Body systems, root words, prefixes/suffixes, laterality landmarks. Voice template: hand-written `career.ts` CPC block.
2. **Author 4–6 specialty-coding cases** (Chapter 7 gap). Cardiology, OB, integumentary, GI specifics.
3. **Per-distractor rewrite** of HealthcareAppliedTopOff (32 q's, ~3 hours). Align chapter names to syllabus.
4. **Delete** QualificationsAppliedPolish and CareerFrontDoorPolish CPC entries (8 questions total).
5. **Salvage** Core2's unit-math and 7th-character questions; delete the rest of Core2's CPC block.
6. **Add `region: 'US'` tag** and `lastReviewed` metadata to the track entry.

## Estimated effort

- Anatomy/terminology authoring (8 q's × 20 min): ~3 hours
- Specialty authoring (6 q's × 20 min): ~2 hours
- Per-distractor rewrite of TopOff: ~3 hours
- Salvage/delete pass: ~1 hour
- Tagging: ~30 min

**~10 hours** — heavier because of two real coverage gaps and a noisy polish/core layer to clean up.

## Notes for next auditor

The hand-written `career.ts` CPC content (lines 161–173) is the strongest CPC content in the catalog and should anchor the bank. Note the prompt is reportedly "excellent" — verified: it is. Per-distractor explanations are specific to the wrong answer ("Software details are not coded on the claim", "Right, left, bilateral, or unspecified should match the provider documentation"), chapter names match CPC exam pillars, and the difficulty hits CPC level without being precious. Use as the model when filling the anatomy and specialty gaps.

The `medicalCodingCpc` track exists alongside `medicalCodingRoadmap` — these are essentially the same domain split into "exam prep" vs "workplace fluency". Worth deciding at the product level whether to merge or keep distinct; if kept distinct, anatomy and specialty drills belong here (exam-specific) while documentation queries, audit defense, and denial workflow belong in the Roadmap.

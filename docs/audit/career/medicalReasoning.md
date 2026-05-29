# Audit: medical (Medical Reasoning)

**Syllabus**: [`src/data/syllabi/career/medical_reasoning.md`](../../../src/data/syllabi/career/medical_reasoning.md)
**Track id**: `medical`
**Tier**: career
**Region**: Largely jurisdiction-neutral (clinical reasoning is universal), but uses US-centric terms (ABCs, sepsis bundles); flag for review rather than hard region tag. **`lastReviewed` metadata absent and would help** — diagnostic reasoning education evolves (e.g., Sepsis-3, EPA frameworks).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Clinical Reasoning Mindset | ✅ | Differentials, problem representation, working diagnosis |
| 2. Triage and Red Flags | ✅ | Heavy — chest pain, headache, asthma distress, sepsis, bleeding in pregnancy, fever after chemo, back pain + weakness |
| 3. History, Exam, and Data Gathering | ⚠️ | Some focused-history questions, but no chapter-named bank |
| 4. Differential Diagnosis and Mechanism | ✅ | Differential bookshelf, likelihood ladder, watchful waiting |
| 5. Evidence, Tests, and Bayesian Updating | ✅ | Sensitivity, specificity, base rates, pretest probability, ARR/RRR |
| 6. Cognitive Bias and Diagnostic Error | ✅ | Anchoring, premature closure, diagnostic momentum |
| 7. Communication, Documentation, and Handoffs | ✅ | Teach-back, uncertainty language, handoff baton, documentation lantern |
| 8. Case Conferences and Safety-Net Reasoning | ❌ | **Real gap.** No M&M-style or near-miss review questions. |

**Chapter taxonomy mismatch.** Five competing schemes across files — "Triage and Initial Assessment", "Triage and Red Flags", "Medical Reasoning: Triage", "Triage and Escalation", "Vitals Dock" — all the same concept. Needs realignment to the syllabus's 8 chapter names.

## Per-file recommendations

| File | Medical Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) (medical, lines 205–239) | 4 hand-written + careerLabsMedicalQuestions | **KEEP** | Hand-written entries use per-distractor explanations ("That confuses relative percent with absolute percentage points", "High sensitivity means few false negatives"), syllabus-relevant chapter names ("Vitals Dock", "Diagnosis Reef", "Evidence Cove", "Safety Lagoon"). Anchor for voice. |
| [`careerAgentGeneratedApplied.ts`](../../../src/data/questionCatalog/careerAgentGeneratedApplied.ts) (medical, 18 q's, lines 31–122) | 18 | **FIX → canonical** | Strong scenarios with **per-distractor explanations actually written** (not `DEFAULT_FLAW`). Examples: anchoring octopus, base-rate gremlin, absolute tiny dragon, follow-up parachute, ABCs before alphabet soup. Voice is playful but disciplined. Realign chapter names to syllabus; this should be the canonical bank. |
| [`careerAgentGeneratedRegulatoryMedicalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRegulatoryMedicalTopOff.ts) (medical, 32 q's, lines 193–354) | 32 | **FIX** | Real novel content (sepsis possibility, allergy hidden in history, second look after no improvement, look-alike bottles, sepsis/shock recognition, pregnancy bleeding triage). Auto-FIX: file-wide `DEFAULT_FLAW`. Per-distractor rewrite → MERGE → Applied. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (medical, 4 q's, lines 559–580) | 4 | **DELETE** | Generic (chest pressure triage, base-rate screening, contraindication, RRR vs ARR) — all four are re-covered in Applied with much better distractor work. Different `DEFAULT_FLAW` string. |
| [`careerAgentGeneratedProfessionalPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedProfessionalPracticePolish.ts) (medical, 4 q's, lines 97–118) | 4 | **DELETE** | Generic (normal-vital trap, base rates, post-test probability, treatment tradeoff). Concepts already covered better elsewhere. Different `DEFAULT_FLAW` string — fragmentation cost only. |

**Net effect**: ~62 medical reasoning questions across 5 files → 4 hand-written KEEP + ~35 high-quality consolidated bank.

## Open actions (priority order)

1. **Author 5–6 case-conference / near-miss questions** (Chapter 8 gap). M&M reasoning, contributing factors, system vs cognitive error.
2. **Author 3–4 focused-history questions** (Chapter 3 strengthening). Pertinent positives/negatives, what question changes the differential.
3. **Per-distractor rewrite** of RegulatoryMedicalTopOff medical block (32 q's). Already strong scenarios — just needs the distractor explanations. ~3 hours.
4. **Consolidate** Applied + RegulatoryMedicalTopOff into one canonical "medical" bank in `career.ts` or a dedicated file. Realign all chapter names to the syllabus's 8 chapters.
5. **Delete** the four generic polish entries (8 questions).
6. **Add `lastReviewed` metadata** to all triage/sepsis/safety questions; clinical reasoning education updates regularly.

## Estimated effort

- Case-conference authoring (6 q's × 20 min): ~2 hours
- Focused-history authoring (4 q's × 20 min): ~1.5 hours
- Per-distractor rewrite of TopOff: ~3 hours
- Consolidation + chapter realignment: ~2 hours
- Polish deletion: 5 min
- `lastReviewed` tagging: ~30 min

**~9 hours total.**

## Notes for next auditor

This is the cleanest healthcare reasoning track in terms of scenario quality — the Applied file actually wrote per-distractor explanations, which is rare in the agent-generated corpus. The fix burden is mostly in RegulatoryMedicalTopOff (which uses `DEFAULT_FLAW`) and in chapter taxonomy alignment. Voice is playful ("anchoring octopus", "base-rate gremlin", "follow-up parachute") which works for clinical reasoning at this level (educational, not certification-bound). Keep that voice; sharpen the distractor work.

Worth a product-level decision: this `medical` track is general clinical reasoning. The `priyasBrutalSurgeonsQuiz` track is hyper-specialized surgical reasoning. Both serve different audiences. Do not merge — they exist for different learners.

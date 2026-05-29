# Audit: patentBar

**Syllabus**: [`src/data/syllabi/career/patent_bar.md`](../../../src/data/syllabi/career/patent_bar.md)
**Track id**: `patentBar`
**Tier**: career
**Region**: **US** (USPTO, MPEP, 35 U.S.C., AIA) — **not currently tagged in `career.ts`**. Auto-FIX for region tagging.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Patent System, Exam Format, MPEP Navigation | ❌ | **No questions specific to MPEP chapter/section navigation, USPTO authority hierarchy, or reg vs statute selection.** Real gap. |
| 2. Patentability and Subject Matter Eligibility | ✅ | Hand-authored "novelty instinct" + Specification "Support problem"; no §101 eligibility item. |
| 3. Claims and Specification Support | ✅ | "Claim drafting purpose" + "Support problem" + "Amendment tradeoff" cover the core |
| 4. Prior Art and Novelty | ⚠️ | One single/combined reference item; no AIA prior art categories, effective filing date, on-sale, or grace-period coverage |
| 5. Obviousness and Rejection Analysis | ❌ | **No Graham factors, motivation-to-combine, KSR, secondary considerations, or teaching-away items** |
| 6. Prosecution Procedure and Office Actions | ✅ | "Office Action Cove" + "Deadline Lagoon" + "Procedure Lagoon" (interview) cover RCE/final/non-final tonally |
| 7. MPEP Drills and Procedural Edge Cases | ❌ | **No priority claims, PCT, reissue, reexam, IDS, revival items** |
| 8. USPTO Ethics and Practitioner Judgment | ⚠️ | Only the FrontDoorPolish "Quiet Pressure" type — not USPTO-specific (duty of candor, inequitable conduct, signature, fees) |

**Status check**: track is `status: 'playable'` in `careerCoreTracks` but has only ~12–15 questions for a course advertised as patent-bar prep. Effective coverage is closer to "patent prosecution overview" than the USPTO registration exam.

## Per-file recommendations

| File | patentBar Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) (lines 1436–1445, `patentBar`) | 8 | **KEEP** | Hand-authored, per-distractor explanations, sober tone, Dock/Reef/Cove/Lagoon chapter style. The voice baseline. |
| [`careerAgentGeneratedQualificationFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationFrontDoorPolish.ts) (patentBar section, lines 405–426) | 4 | **FIX** | Decent topics (utility/eligibility, claim scope, examiner interview, deadline) but uses file-wide `DEFAULT_FLAW` constant. Rewrite per-distractor explanations and align chapters to syllabus. |

**No content in** `LawProjectHr` triplet, no Roadmap entries, no jargon entries. The patentBar track has fewer feeders than almost any other career credential track — and the syllabus is the longest credential syllabus in the cluster. This is the largest coverage gap in the audit cluster.

## Open actions (priority order)

1. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) line 291. Patent Bar is the USPTO registration exam — wholly US-specific.
2. **Author Chapter 5 (Obviousness) bank** — 10–12 questions on Graham factors, motivation to combine, reasonable expectation of success, secondary considerations, teaching away, KSR-style analysis. Highest priority gap.
3. **Author Chapter 7 (MPEP Drills / Edge Cases) bank** — 10 questions on PCT priority, reissue vs reexam, IDS timing, revival, certificates of correction.
4. **Author Chapter 1 (MPEP navigation) bank** — 6 questions on which authority controls (statute vs rule vs MPEP), which MPEP chapter to search first, exam open-book strategy.
5. **Expand Chapter 4 (Prior Art)** — 6 questions on AIA §102(a)(1)/(a)(2), effective filing date, public use, on-sale, grace-period exceptions.
6. **Expand Chapter 8 (Ethics)** — 4–6 questions on USPTO-specific duties: candor to PTO, inequitable conduct, signature requirements, fee handling, unauthorized practice.
7. **FIX the FrontDoorPolish entries** with per-distractor explanations.

## Estimated effort

- Region tag: ~5 min
- Authoring ~36 new questions across gap chapters at ~20 min each (USPTO-specific content benefits from MPEP citation): **~12 hours**
- FrontDoorPolish per-distractor rewrite: ~1 hour (4 Q)

**~2 working days. This is the largest authoring gap in the cluster.**

## Notes for next auditor

The voice template for new authoring is the existing `career.ts` block (lines 1436–1445) — Dock/Reef/Cove/Lagoon chapters with playful but technically defensible prompts. Patent Bar shares a similar US-only, MPEP-heavy structure with the bar exam track, but patent has near-zero AI-generated supplementary content (unlike `barExam` which is over-fed). The asymmetry is itself a finding: AI generation chased high-traffic exams and skipped narrower technical ones.

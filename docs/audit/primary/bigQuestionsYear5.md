# Audit: bigQuestionsYear5

**Syllabus**: [`src/data/syllabi/primary/big_questions_year_5.md`](../../../src/data/syllabi/primary/big_questions_year_5.md)
**Track id**: `philosophyYear5`
**Tier**: primary
**Region**: UK-leaning (P4C/SAPERE, UNCRC, UNESCO MIL, PSHE) — not tagged

## Status flag inconsistency

`status: 'soon'` in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts); `philosophyYear5` exports 50 questions wired through [`primary.ts`](../../../src/data/questionCatalog/primary.ts). **Promote to `playable`**. Same status mismatch as the rest of the cluster.

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Identity, Memory, and Change | Yes | "Identity and the Self" — 2 blueprints (continuity-through-change, nature/nurture) |
| 2. Fairness, Equality, and Justice | Yes | "Society, Law and Justice: Unjust law" + "Restorative justice" |
| 3. Rights and Responsibilities | Partial | Implicit in "Unjust law" but no UNCRC-anchored items |
| 4. Truth, Evidence, and Reliable Sources | Yes | "Epistemology: Scientific fact" |
| 5. Media, Persuasion, and Online Choices | Partial | "Technology and the Future: Privacy trade-off" sits at the boundary |
| 6. Technology, AI, and Human Choices | Yes | "Technology and the Future: AI rights" + "Privacy trade-off" |
| 7. Environment, Resources, and Future People | Yes | "Global Ethics: Resource ownership" |
| 8. Dialogue, Debate, and Better Arguments | No | **Gap**: no argument-map/counterargument items |

7 of 8 covered nominally, but with **major age-misalignment concerns**.

## DEFAULT_FLAW check
No `DEFAULT_FLAW` constant. Per-distractor explanations are individually written.

## Age-misalignment flag (May 2026 audit)

Year 5 is ages 9-10. The bank includes:

- **"AI rights"** — `${name} asks whether a very advanced robot should have rights. What must be considered first?` Correct answer: "Whether it can have experiences, interests, or be harmed." This is an undergraduate moral-status question (Singer, Regan). The syllabus chapter does invite the discussion ("Should robots or AI systems ever have rights?"), but as an *open enquiry circle*, not as a multiple-choice item with one "correct" answer. **Confirmed misalignment.**
- **"Epistemology: Senses and certainty"** — uses an optical illusion to teach that "Our senses can be useful but sometimes misleading." The lesson tag reads: "Epistemology studies how we know things and what the limits of our evidence are." The word "epistemology" appears in a question bank for 9-year-olds. **Confirmed misalignment** — the *concept* is reachable at Year 5 ("Is seeing always believing?" from the syllabus), but the framing and vocabulary belong to a university intro philosophy lecture.
- **"Restorative justice"** — names the framework explicitly. Syllabus introduces the *idea* (repair vs punishment) but not the term.
- **"Global Ethics"** as a chapter label and "Far-away help" framed as the Singerian distance-and-obligation question.

The May 2026 flag stands: Year 5 drifts into undergraduate philosophy territory. The drift is not in the *topics* (which the syllabus genuinely invites) but in the *framing* — formal terminology, declarative "correct" answers, and an MCQ format applied to questions the syllabus says belong in open enquiry.

## Per-file recommendations

| File | Y5 Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedHumanitiesExam.ts`](../../../src/data/questionCatalog/primaryGeneratedHumanitiesExam.ts) (`philosophyYear5`) | 50 | **FIX (significant)** | Several items need reframing from "name the theory" to "spot the better reasoning move." Variant-cycling whiplash. Drop or rewrite the AI-rights and epistemology-of-illusions items. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) aggregator | `topUp('philosophyYear5')` | **KEEP** | Aggregator-only. |

## Open actions (priority order)

1. **Flip `status` to `playable`**.
2. **Rewrite the AI rights, epistemology-of-illusions, restorative-justice, and far-away-help items** to test reasoning moves at Year 5 level, not undergraduate framework recognition. Use the Year 4 "charity vs justice" item as the model — concrete dilemma, distractor that captures the misconception, no jargon in the correct answer.
3. **Add Chapter 8 blueprints** — argument map, counterargument, revision moves.
4. **Cap variant cycling** at 2 cycles.
5. **Rename chapters and region-tag.**

## Estimated effort

- Status, rename, region: ~1 hour
- Rewrite 4-5 misaligned items: ~3 hours
- Chapter 8 new blueprints: ~2 hours
- Variant cap: shared helper change

**~6 hours.** The age-misalignment fix is the load-bearing piece — without it, the bank teaches the wrong skill (theory recognition) at the wrong age.

## Notes for next auditor

The Year 5 syllabus is intentionally ambitious — it *should* discuss AI and epistemology — and the question bank correctly identifies that. The error is treating "Year 5 can discuss this in a circle" as equivalent to "Year 5 can answer a one-right-answer MCQ about this." The syllabus design notes are explicit: "carefully balanced so pupils can examine ideas without being pushed toward partisan conclusions" — an MCQ structurally pushes toward one conclusion. Reframe items as "which response shows the strongest reasoning?" rather than "which answer is right?"

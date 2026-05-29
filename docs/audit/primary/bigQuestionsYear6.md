# Audit: bigQuestionsYear6

**Syllabus**: [`src/data/syllabi/primary/big_questions_year_6.md`](../../../src/data/syllabi/primary/big_questions_year_6.md)
**Track id**: `philosophyYear6`
**Tier**: primary
**Region**: UK-leaning (P4C/SAPERE, UNCRC, UNESCO MIL, PSHE) — not tagged

## Status flag inconsistency

`status: 'soon'` in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts); `philosophyYear6` exports 50 questions wired through [`primary.ts`](../../../src/data/questionCatalog/primary.ts). **Promote to `playable`** — most acute mismatch in the cluster because the bank is most developed here.

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Logic, Claims, and Evidence | Yes | "Logic and Arguments: Premise and conclusion" |
| 2. Bias, Fallacies, and Fair Debate | Yes | "Logic and Arguments: Ad hominem" |
| 3. Ethical Frameworks and Difficult Choices | Yes | "Ethics and Action" — Utilitarianism + Deontology |
| 4. Power, Democracy, and the Common Good | Yes | "Political Philosophy and the State" — social contract, positive/negative freedom |
| 5. Rights, Justice, and Repair | No | **Gap**: no items on restorative justice, accountability, structural unfairness — despite syllabus making it a full chapter |
| 6. Media, Information, and Influence | No | **Gap**: no Year 6-level media/algorithms/misinformation items (the bank covers media at Year 4 but not at Year 6 sophistication) |
| 7. Mind, AI, and Personhood | Yes | "Philosophy of Mind and AI" — Turing Test, other minds |
| 8. Meaning, Identity, and the Good Life | Yes | "Meaning and the Good Life" — experience machine, created meaning |

6 of 8 chapters covered.

## DEFAULT_FLAW check
No `DEFAULT_FLAW` constant. Per-distractor explanations individually written.

## Age-misalignment flag (May 2026 audit)

Year 6 is ages 10-11. The bank includes:

- **"Utilitarianism" / "Deontology"** named as such, with "Hedonism" as a distractor for the duty-ethics item.
- **"Social contract"** named explicitly.
- **"Turing Test"** named.
- **"Experience machine"** — Nozick's thought experiment, by name in the prompt structure.
- **"Positive freedom" / "Negative freedom"** as Berlin's distinction.

The syllabus Chapter 1 does intentionally introduce "claim, premise, conclusion, evidence, validity, soundness, assumption, example, counterexample" as Year 6 vocabulary, and Chapter 3 explicitly covers "consequence, duty, virtue" frameworks. So formal terminology is partly defensible at Year 6 — more so than at Year 5.

However: the bank teaches **framework-name recognition** (which word names this view?) rather than **framework-application** (which response best uses consequentialist vs deontological reasoning here?). For 10-11 year olds preparing for secondary, the latter is the educationally useful skill. May 2026 flag confirmed as a framing problem, less severe than Year 5 but still real. The "Turing Test" and "experience machine" items are the most defensible; the "Ad hominem" / "Utilitarianism" / "Deontology" / "Social contract" items read like a glossary quiz.

## Per-file recommendations

| File | Y6 Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedHumanitiesExam.ts`](../../../src/data/questionCatalog/primaryGeneratedHumanitiesExam.ts) (`philosophyYear6`) | 50 | **FIX** | Best raw content in the cluster (genuine Turing Test, Other Minds, Experience Machine items work). Reframe the framework-naming items into framework-application items. Variant-cycling whiplash. Cover Chapters 5 and 6. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) aggregator | `topUp('philosophyYear6')` | **KEEP** | Aggregator-only. |

## Open actions (priority order)

1. **Flip `status` to `playable`**.
2. **Author Chapter 5 (Rights, Justice, Repair) and Chapter 6 (Media, Information, Influence) blueprints** — 5-7 items each. Chapter 6 in particular should distinguish from Year 4 media items by adding algorithms, misinformation vs disinformation, verification practices.
3. **Reframe the framework-naming items** — keep the concept, change the question stem from "Which framework is this?" to "Which response best uses [framework] reasoning here?"
4. **Cap variant cycling** at 2 cycles.
5. **Rename chapters and region-tag.**

## Estimated effort

- Status, rename, region: ~1 hour
- Two chapters new blueprints: ~4-5 hours
- Reframe 4-6 items: ~2 hours
- Variant cap: shared helper change

**~7-8 hours.** Most authoring work in the Big Questions cluster, justified because Year 6 sets the tone for secondary transition.

## Notes for next auditor

Year 6 is the *least* age-misaligned of the upper-primary tier despite covering the most advanced topics — because the Year 6 syllabus genuinely introduces formal philosophy vocabulary. The fix is framing, not topic removal. The "experience machine" and "other minds" items are good models; the "ad hominem" and "social contract" items are weak models. The cluster-wide variant-cycling fix and the chapter-renaming fix apply here too.

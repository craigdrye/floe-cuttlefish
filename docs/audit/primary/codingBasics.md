# Audit: codingBasics

**Syllabus**: [`src/data/syllabi/primary/coding_basics.md`](../../../src/data/syllabi/primary/coding_basics.md)
**Track id**: `codingBasics` (also mirrored as `col-coding-basics`)
**Tier**: primary (Year 1, ages 5–6)
**Region**: UK-led (UK Computing KS1) with US CSTA K–12 and ISTE cross-reference — untagged

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Steps in Order | ✅ | Algorithm-meaning and correct-order blueprints present. |
| 2. Clear Instructions | ✅ | "Move forward two squares, then turn left" precise-instruction item present. |
| 3. Debugging Mistakes | ✅ | Bug-meaning and find-the-error items present. |
| 4. Patterns and Loops | ✅ | Loop-meaning ("Repeat clap 3 times") and pattern-repeat items present. |
| 5. If/Then Choices | ✅ partial | Rule-application item present. No condition-failure case ("what if it is not raining"). |
| 6. Grids and Routes | ❌ | No grid-coordinate, route-planning, or obstacle items — surprising given the syllabus capstone is a grid-robot adventure. |
| 7. Events and Buttons | ❌ | No "when X happens, do Y" event items. |
| 8. Make a Tiny Project | ❌ | No plan/test/improve project-shape items. |
| Stretch: Decomposition | ✅ | Decomposition blueprint present (not in syllabus chapter list but a useful bonus). |

Track surface ~50 questions: 10 unique blueprints × 5 variant cycles. Chapters 1–5 + decomposition covered (5 of 8 syllabus chapters); Chapters 6–8 wholly missing.

## Per-file recommendations

| File | Coding Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedHumanitiesExam.ts`](../../../src/data/questionCatalog/primaryGeneratedHumanitiesExam.ts) → `codingBlueprints` | 10 × 5 = 50 surface | **FIX** | Per-item explanations are real (no `DEFAULT_FLAW`) and unplugged framing matches the age-5–6 design notes. But three distractors lean cartoonish — "A type of sandwich" (bug), "The switch is a sandwich" (true/false), "Paint the umbrella" (if/then) — implausible filler rather than real misconceptions. Replace with conceptual mis-steps. Also: file uses topic `'Software'` while sibling primary tracks use `'Primary'` — verify routing. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) (wiring) | — | **FIX** | Both `codingBasics` and `col-coding-basics` resolve to the same bank — collapse to one canonical id. |

## Open actions (priority order)

1. **Author Chapter 6 (Grids and Routes) blueprints** — 4–6 items: which square am I on, which arrow sequence reaches the star, shortest-route choice, obstacle avoidance. This is the syllabus capstone topic and currently has zero coverage.
2. **Author Chapter 7 (Events and Buttons) blueprints** — 3–4 items: which event starts the action, before/after the signal, mapping rule to action.
3. **Author Chapter 8 (Tiny Project)** prompts — 2–3 items: plan / test / improve / explain shape (these will look more like reflection prompts than MCQs but can still be authored).
4. **Replace cartoonish distractors** ("sandwich", "Paint the umbrella") with real misconception distractors that a 5–6-year-old might actually pick.
5. **Add condition-failure case to Chapter 5 If/Then** — current bank only handles condition-true; add at least one condition-false branch item.
6. **Reduce variant cycle from 5 to 2.**
7. **Add `region: 'UK'` tag** (syllabus is UK Computing KS1-led).
8. **Verify the `'Software'` topic classification** doesn't misroute these to a tech-discipline path; the age catalog places this under "Tech & Life", ageGroup `primary`.

## Estimated effort

- Author Chapters 6, 7, 8 blueprints (~10 items): ~4 hours
- Distractor rewrite for cartoonish filler (~6 items): ~1 hour
- Variant cycle reduction + canonical-id collapse + region tag + topic verification: ~1.5 hours

**~3/4 of a working day.** Coding Basics is the strongest-shape bank in the primary cluster — fixes are additive rather than corrective. Chapter 6 grids are the must-have.

# Audit: socialEmotionalLearning (Social & emotional learning)

**Syllabus**: [`src/data/syllabi/preschool/social_emotional_learning.md`](../../../src/data/syllabi/preschool/social_emotional_learning.md)
**Track id**: `socialEmotionalLearning`
**Tier**: preschool (catalog `ageGroup: 'preschool'`)
**Region**: jurisdiction-neutral (CASEL, EEF, EYFS, EYLF referenced).
**Syllabus mapping**: explicitly listed in [`src/data/syllabi/index.ts`](../../../src/data/syllabi/index.ts) line 334 as `knownMissingSyllabusTrackIds` — the index does *not* yet point at the preschool/social_emotional_learning.md file, even though the file exists.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Hello, Feelings | ❌ | no questions; needs image-led prompts (face cards) |
| 2. Feelings in the Body | ❌ | no questions |
| 3. Calm-Down Tools | ❌ | no questions |
| 4. Waiting, Trying, and Trying Again | ❌ | no questions |
| 5. Other People Have Feelings Too | ❌ | no questions; needs image-led prompts |
| 6. Joining Play and Being a Friend | ❌ | no questions |
| 7. Repair After a Problem | ❌ | no questions |
| 8. Our Caring Classroom | ❌ | no questions |

**Syllabus aspirational; no questions wired.** Track declared `status: 'playable'` in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts) lines 231–240; the build function in [`src/data/questionCatalog/primary.ts`](../../../src/data/questionCatalog/primary.ts) has **no `socialEmotionalLearning:` key**. Also flagged as `knownMissingSyllabusTrackIds` in the syllabi index — the catalog doesn't even know where the syllabus lives.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| any in `src/data/questionCatalog/` | 0 | **N/A** | No question file references `socialEmotionalLearning`. |
| Future image-prompt bank | n/a | **AUTHOR (new schema)** | The May 2026 audit recommendation: SEL for ages 3–5 is fundamentally **image-led** ("which face looks worried?", "which child is being a kind friend?"). The current `Question` type assumes text MCQ. A schema extension is required before any meaningful authoring. |

**Cross-cutting flags**:
- `status: 'playable'` with zero questions.
- Syllabus mapping missing from `syllabusPathByTrackId`. Add `socialEmotionalLearning: 'preschool/social_emotional_learning.md'` and remove from `knownMissingSyllabusTrackIds`.
- **Schema gap is the blocker**, not authoring volume. Faces, body-clue cartoons, scenario illustrations are core to evidence-based early-years SEL (CASEL, EYFS framework). A text-only Q like "What might Mia feel when her tower falls?" is pedagogically thin compared to a face-card pick.

## Open actions (priority order)

1. **Schema extension: add image-prompt support** to the `Question` type. Minimal viable shape:
   - `promptImage?: { src: string; alt: string }` on the question
   - `answerImage?: { src: string; alt: string }` per answer choice (or per wrong tuple)
   - Renderer pick-the-picture mode that hides the text prompt or uses it only as a short caption.
   This is the audit's most-cited preschool schema change and unblocks SEL, phonics image-prompts, and any "spot the X" preschool game later.
2. **Update [`src/data/syllabi/index.ts`](../../../src/data/syllabi/index.ts)**: add `socialEmotionalLearning: 'preschool/social_emotional_learning.md'` and remove from `knownMissingSyllabusTrackIds`.
3. **Demote to `status: 'soon'`** in the age catalog until schema + questions exist.
4. **Author image-led MCQ set** once schema is in: ~30 Q's across chapters 1, 3, 5, 6, 7 (chapters 2 body-clues, 4 waiting, 8 caring classroom are harder to convert to MCQ and can be skipped or treated as adult-facilitator content). Voice template: warm, non-distressing, no asking children to disclose private feelings (the syllabus is explicit about this safety rule).
5. **Source artwork**: budget for ~30 face/scenario illustrations OR a permissive-license SEL image set (e.g. Bright Futures, CDC milestone tracker images, Pixabay-safe cartoon faces). License review required before use.

## Estimated effort

- Schema extension + renderer: 2–3 days engineering.
- Artwork (commission or curate + license review): 1–2 weeks elapsed.
- Author 30 image-led Q's: ~6 hours.

**Cannot ship without schema work — this is the only preschool track whose blocker is engineering, not authoring.**

## Notes for next auditor

`socialEmotionalLearning` is the most strategically important preschool track because (a) it's the one caregivers actively search for and (b) the existing high-school philosophy tracks already cover ethics for older kids, leaving a real gap at the bottom of the funnel. Don't cut it. The schema work it forces also unlocks proper phonics for `preKBasics`/`primary`, so it has knock-on value beyond SEL itself.

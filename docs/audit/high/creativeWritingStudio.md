# Audit: creativeWritingStudio

**Syllabus**: [`src/data/syllabi/high/creative_writing_studio.md`](../../../src/data/syllabi/high/creative_writing_studio.md)
**Track id**: `creativeWritingStudio` (high, English, `status: 'playable'`)
**Region**: Universal (craft framework — no jurisdiction-specific content)

**Duplicate track alert.** [`high.ts`](../../../src/data/ageCatalog/high.ts) defines two tracks titled "Creative Writing Studio": `creativeWriting` (line 286, "Creative"/sparkles) and `creativeWritingStudio` (line 1609, "English"/book-open). Wiring is split: `creativeWriting` gets 4 hand-authored Qs in `highFun.ts`; `creativeWritingStudio` gets 4 deduped `englishBlueprints()` items via family routing. Students see two duplicate course tiles.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Writer's Notebook and Creative Practice | No | Nothing on freewriting, constraints, image bank |
| 2. Scene, Setting, and Description | Touched | `highFun.ts` "Show vs Tell" Q hits the show-don't-tell principle (under `creativeWriting`, not this track) |
| 3. Character and Point of View | Touched | `highFun.ts` "Point of View" Q identifies first-person — under `creativeWriting`, not here |
| 4. Plot, Structure, and Stakes | Touched | `highFun.ts` "Conflict engine" Q on want/obstacle — under `creativeWriting`, not here |
| 5. Dialogue, Subtext, and Voice | Touched | `highFun.ts` "Dialogue clue" Q on dialogue purpose — under `creativeWriting`, not here |
| 6. Poetry and Lyrical Prose | No | Zero items on image, line break, sound pattern |
| 7. Script, Hybrid Forms, and Experiment | No | Nothing on screenplay format, flash fiction, braided essay |
| 8. Workshop, Revision, and Publication | No | No critique/revision/line-edit items |

**Chapter taxonomy mismatch.** The 4 `highFun.ts` items use whimsical labels (Dock/Reef/Cove/Lagoon); the 4 generic items use Inference/Grammar/Tone/Evidence (analytical-reading labels, wrong course type). Neither set matches the 8 syllabus chapter names.

## Per-file recommendations

| File | Qs feeding the track(s) | Bucket | Reason |
|---|---|---|---|
| [`highFun.ts`](../../../src/data/questionCatalog/highFun.ts) → `creativeWriting` key | 4 | **KEEP (and rewire)** | Genuinely good per-distractor explanations — author-level voice, no DEFAULT_FLAW. Covers Show/Tell, Conflict, POV, Dialogue. But the key is `creativeWriting`, so the `creativeWritingStudio` track never sees them. Rewire under both keys or merge the two tracks into one. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) → `englishBlueprints()` (top-up to `creativeWritingStudio`) | ~4 | **DELETE** | Routing bug: `familyFor()` sees "English" discipline and returns `english`, so creativeWritingStudio receives analytical-reading blueprints (inference, comma splice, sarcasm tone, claim evidence). None are creative-writing items. Either fix routing to use the `creative` family (which has its own 2 blueprints, also weak), or stop the top-up entirely for this track. |
| [`philosophyCreativeBlueprints()`](../../../src/data/questionCatalog/highGenerated.ts) | Not reached for this track | N/A | Even if routed correctly, the "creative" family blueprints are 1 logic Q + 1 game-loop Q — neither belongs in a fiction/poetry/dialogue course. |

**Net effect**: 4 high-quality `highFun.ts` Qs reaching the `creativeWriting` ID, plus 4 mismatched analytical-reading Qs reaching `creativeWritingStudio`. Both are **stubs** for an 8-chapter creative syllabus.

## Open actions (priority order)

1. **Merge the two tracks** into one canonical `creativeWritingStudio`.
2. **Author chapter-aligned questions** (~32 Qs, 4 per chapter). Priority gaps: Poetry (Ch 6), Script/Hybrid (Ch 7), Writer's Notebook (Ch 1), Workshop/Revision (Ch 8). Use [`highFun.ts`](../../../src/data/questionCatalog/highFun.ts) creative voice as the model.
3. **Fix `familyFor()` routing** so "creative writing" titles resolve to `creative`, or add a dedicated creative-writing blueprint family.
4. **Relabel chapters** in the 4 `highFun.ts` items from Dock/Reef/Cove/Lagoon to syllabus chapter names.

## Estimated effort

~8 hours: 5h authoring 28-32 Qs, 1h merging tracks, 1h fixing routing, 1h relabelling.

## Notes for next auditor

Two-track duplication likely traces to the catalogue being assembled from a curated core list and a collection-group list. Worth grep'ing for other titles with both hand-set and auto-derived `col-*` IDs.

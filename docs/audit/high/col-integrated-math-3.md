# Audit: col-integrated-math-3 (Integrated Math 3 — shares syllabus with Math 2)

**Syllabus**: [`src/data/syllabi/high/integrated_math_2_and_3.md`](../../../src/data/syllabi/high/integrated_math_2_and_3.md) (shared)
**Track id**: `col-integrated-math-3`
**Tier**: high (Year 11-12, US Common Core integrated pathway)
**Region**: US (California framework); not tagged
**Status flag**: not present as a standalone track in [`high.ts`](../../../src/data/ageCatalog/high.ts) — only `col-integrated-math-2` exists there with title "Integrated Math 2 & 3". `col-integrated-math-3` lives only as a syllabus alias and a reference in `highCollectionGroups.titles`.

## Primary finding

`col-integrated-math-3` is **dangling**: it is referenced in the syllabus `Covers` line, in `highCollectionGroups` (line 2031 of `high.ts`), and in `rawCollectionMappings.ts`, but there is **no `highCoreTracks` entry** and **no question catalog mapping**. It silently falls through to `'high-generated'` if it ever gets exposed in the UI. See [`col-integrated-math-2.md`](./col-integrated-math-2.md) for the full coverage map and per-file analysis — Math 2 and Math 3 share one syllabus and one catalog destiny.

## Wiring problem (auto-FIX)

Two equally valid resolutions:

1. **Collapse**: drop `col-integrated-math-3` everywhere. The combined "Integrated Math 2 & 3" track already exists. Simpler — the syllabus admits the two are taught as a unit, and Floe has no real Year-11/Year-12 distinction in its current shipping IA.
2. **Split**: add a first-class `col-integrated-math-3` track to `highCoreTracks` (mirroring `col-integrated-math-2`), rename the syllabus to two distinct files, and wire each to a subset of the merged batch set from the Math 2 audit (Math 2 → Algebra 2 + Geometry; Math 3 → Trig + Stats + Precalc topics).

Either way: add `col-integrated-math-3` to `highMathTrackIds` or remove the references so it cannot silently route to the math-blueprints fallback if a user reaches it.

## Coverage map

Same as [`col-integrated-math-2.md`](./col-integrated-math-2.md) — both share `integrated_math_2_and_3.md`. The Year-12 half (Chapters 6 Circles, 7 Inference, 8 Logs/Exponentials) has zero direct coverage anywhere in the catalog.

## Per-file recommendations

| File | Status | Bucket |
|---|---|---|
| Any direct file | none exists | **n/a** |
| Inherits from Math 2 wiring | shared blueprints fallback | **FIX — same plan as `col-integrated-math-2`** |

## Open actions (priority order)

1. **Decide collapse vs split**. Recommend collapse: one canonical "Integrated Math 2 & 3" track avoids surface area without losing content depth.
2. **If split**, mirror the Math 2 audit's authoring plan but bias content to Chapter 6 (Circles), Chapter 7 (Probability + Inference), Chapter 8 (Logs + Exponentials) — the Year-12 half.
3. **Reconcile `highCollectionGroups.titles`** — currently lists "Integrated math 3" (line 2036 in `high.ts`) even though no first-class core track exists; either remove it or back it with a track entry.
4. **Add `region: 'US'`** to whichever track survives.
5. **Update `rawCollectionMappings.ts`** to point `col-integrated-math-3` mappings at whichever track wins.

## Estimated effort

If collapse: ~30 min (delete references in `rawCollectionMappings.ts`, syllabus, collection group titles). If split: roughly the same effort as the Math 2 audit — ~6 hours of authoring Year-12-specific content plus the wiring work.

# Audit: webFoundations

**Syllabus**: [`src/data/syllabi/high/web_foundations.md`](../../../src/data/syllabi/high/web_foundations.md) (declares `ID: webFoundations`)
**Track id**: `basic_html_and_html5` (the actual track wired to HTML/web content; see notes below)
**Tier**: high
**Region**: not jurisdiction-specific (MDN/W3C standards)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. How the Web Works (URL → request → response, devtools) | ⚠️ | FCC `basic_html_and_html5` is HTML-only; request/response model not covered |
| 2. HTML Document Structure (doctype, head/body, metadata) | ✅ | FCC HTML5 curriculum covers this directly |
| 3. Semantic Content (headings, lists, links, images, alt text) | ✅ | Core FCC strength |
| 4. CSS Basics and Layout (selectors, box model, flex/grid) | ❌ | Not in the FCC `basic_html_and_html5` bundle |
| 5. Forms and User Input (labels, validation, autocomplete) | ⚠️ | Partial via FCC HTML5 form elements |
| 6. Accessibility From the Start (keyboard, contrast, ARIA) | ⚠️ | FCC has some a11y items in the HTML5 segment |
| 7. Debugging and Quality (devtools, responsive, performance) | ❌ | Not covered |
| 8. Publish a Small Website (versioning, paths, attribution) | ❌ | Not covered |

**ID mismatch.** Syllabus declares `ID: webFoundations` but no track with that id exists. The age catalog's HTML/web track is `basic_html_and_html5` (line 107), wired to FCC HTML5 imports in `highAdvanced.ts:84,714` and topped up via `highAgentGenerated.ts:399`. A track id rename to `webFoundations` would match the syllabus.

**Chapter-taxonomy mismatch.** FCC chapter labels (from imports) describe HTML5 lessons, not the eight syllabus chapters. `highAgentGenerated`'s `basic_html_and_html5` block uses its own chapter naming.

## Per-file recommendations

| File | Items for webFoundations | Bucket | Reason |
|---|---|---|---|
| [`fcc.ts`](../../../src/data/questionCatalog/fcc.ts) (`basic-html-and-html5` slice) | imported | **KEEP** | Industry-standard FreeCodeCamp content for HTML5 fundamentals. Good for Chapters 2, 3, 5 (partial), 6 (partial). |
| [`highAgentGenerated.ts`](../../../src/data/questionCatalog/highAgentGenerated.ts) `basic_html_and_html5` block (line 399) | top-up to 50 | **FIX** | Uses file-wide `DEFAULT_FLAW = 'This is a plausible distractor, but it does not match the scenario or syllabus concept.'` for every wrong answer. Per the audit's hard rule, this is **auto-FIX**. Each distractor needs a real "why this is wrong" line. Per-item topical accuracy is fine but rigor falls below the bar. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) computing blueprints (top-up) | up to 50 if shortfall | **FIX (procedural generator)** | Generator's `computing` family is not HTML-specific; templated content shouldn't fill HTML gaps. |

## Open actions (priority order)

1. **Rename the track id** from `basic_html_and_html5` to `webFoundations` to match the syllabus, or update the syllabus header to match the existing id. (Renaming is cleaner; one age-catalog edit + one routing entry.)
2. **Fix the DEFAULT_FLAW usage** in `highAgentGenerated.ts:399`'s `basic_html_and_html5` block. Auto-FIX per audit rules: write a real per-distractor explanation for each wrong answer.
3. **Author 8–12 CSS items** for Chapter 4 (selectors, specificity, box model, flexbox, grid, responsive units).
4. **Author 4–6 items** for Chapter 1 (request/response cycle, devtools), Chapter 7 (debugging), Chapter 8 (file paths, attribution).
5. **Author 4–6 accessibility items** to deepen Chapter 6 (keyboard nav, focus order, ARIA when not to use it).
6. **Realign chapter labels** to the eight syllabus chapters.

## Estimated effort

- Track rename: ~30 minutes
- DEFAULT_FLAW rewrite for the agent-generated block: ~3 hours
- CSS + a11y + lifecycle authoring (~20 items): ~8 hours

## Notes for next auditor

This is the only file in the HS Math+CS+Economics cluster that uses `DEFAULT_FLAW`. It needs the same treatment the May 2026 career audit applied to the `careerAgentGenerated*` family: keep the topics, replace every distractor line.

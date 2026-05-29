# Audit: macroeconomics

**Syllabus**: [`src/data/syllabi/university/macroeconomics.md`](../../../src/data/syllabi/university/macroeconomics.md)
**Track id**: `macroeconomics`
**Tier**: university (`universityAcademicTrackIds` → `universityAcademic.ts:112`)
**Region**: jurisdiction-neutral by content (GDP, inflation, AD/AS are universal) but **anchors are US-centric** (AP Macro CED, Federal Reserve Education, BEA, BLS in syllabus Research Notes). Question prompts avoid Fed-specific terminology except where central-bank concepts are general; **no explicit "Federal Reserve" framing in sampled items**. No region tag currently applied.
**Status**: `playable` ([`src/data/ageCatalog/university.ts:27`](../../../src/data/ageCatalog/university.ts))

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Macro Foundations and Circular Flow | ✅ | Inline (16205/16209/16213) — circular flow, injections, business cycle, comparative advantage |
| 2. Measuring Output, Jobs, Prices | ✅ | "Indicators" — GDP, deflator, labor force, LFPR, CPI, real interest rate; inline GDP components, unemployment types |
| 3. AD, AS, Fiscal Policy | ✅ | "AD/AS" — AD components, SRAS rationale; inline (16211) multiplier |
| 4. Money, Banking, Financial Markets | ⚠️ | Inline (16212) money market only; thin on money multiplier and loanable funds |
| 5. Central Banks and Monetary Policy | ⚠️ | Light — money-market mechanics only |
| 6. Inflation, Unemployment, Debt, Growth (Phillips curve, Solow) | ⚠️ | Verify beyond first 16 workout items |
| 7. Open-Economy Macro (BOP, PPP, trilemma) | ⚠️ | Verify beyond sample |
| 8. Crises, Inequality, Climate, Macro Debates | ❌ | **Probably no coverage** — the contemporary debate chapter |

**Business cycle chapter** present (Expansion, Peak, Trough) — bridges chapters 1–2.

**Chapter taxonomy**: `macroeconomicsWorkoutGenerated.ts` uses functional chapters (Indicators, Business Cycle, AD/AS) that map cleanly. Inline `universityAcademic.ts` block uses oceanic primary-school chapters (Macroeconomics Dock/Reef/Cove/Lagoon) for items 16201–16204, then "Economic Indicators / AD/AS / Financial Sector / Open Economy" for 16205+. **Mixed taxonomy within the same block.**

## Per-file recommendations

| File | macroeconomics Q's | Bucket | Reason |
|---|---|---|---|
| [`macroeconomicsWorkoutGenerated.ts`](../../../src/data/questionCatalog/macroeconomicsWorkoutGenerated.ts) | 50 | **KEEP** | **Gold standard.** Hand-authored `miss(answer, why, hint)` triples — each distractor has specific macro reasoning ("That is real GDP", "That is unemployment rate", "Lower costs make production more profitable at each price"). Sober tone, AP Macro / OpenStax aligned. May 2026 audit's "surprisingly solid" verdict **confirmed**. |
| `universityAcademic.ts` inline `macroeconomics: [...]` block (id 16201–16213+, lines 112–147) | ~13–24 | **FIX** | Mixed quality. Items 16201–16204 use oceanic chapter names and cartoonish distractors ("Every country's weather", "That is physics", "private text messages") — primary-school tone bleeding into university content. Items 16205+ use real economic chapters and tighter distractors (good). Fix: rename oceanic chapters, rewrite the four cartoonish items. |

**No DEFAULT_FLAW in workout file.** No trivia imports.

**Net effect**: ~70+ wired questions, ~50 at full quality bar. Open gaps are chapters 5 (monetary policy depth), 6 (Phillips curve, growth), and 8 (contemporary debates) — the analytical heart of macro pedagogy.

## Open actions (priority order)

1. **Verify chapters 6–8 coverage** in workout file beyond first 16. Plan author work for Phillips curve, Solow growth, debt-to-GDP, MMT, climate macro.
2. **Rename oceanic chapter names** in items 16201–16204 — "Macroeconomics Dock/Reef/Cove/Lagoon" → syllabus chapter names.
3. **Rewrite cartoonish distractors** ("Every country's weather", "private text messages") with real macro misconceptions. Voice template: `macroeconomicsWorkoutGenerated.ts`.
4. **Author 6–8 monetary-policy items** for chapter 5 — OMO transmission, QE, forward guidance, IOR, long-run money neutrality.
5. **Author 6–8 chapter-6 items** — short-run Phillips curve shift, demand-pull vs cost-push, Solow growth intuition, debt-to-GDP dynamics.
6. **Author 4–5 chapter-8 items** — banking crisis → macro crisis, ZLB mechanics, macroprudential vs monetary, MMT, climate macro.
7. **Tag region if Fed-specific items are added** — current bank is general; explicit Fed/ECB/BoE items would need region tagging.

## Estimated effort

- Coverage verification + inline cleanup: ~2 hours
- Chapter 5 monetary: ~2.5 hours (8 × 20 min)
- Chapter 6 PC/growth: ~2.5 hours (8 × 20 min)
- Chapter 8 contemporary: ~1.5 hours (5 × 20 min)

**~1 working day.**

## Notes for next auditor

`macroeconomics` follows the **same pattern as `microeconomics` / `marketing` / `internationalRelations`**: one hand-authored workout file at quality bar, plus an inline `universityAcademic.ts` block mixing good items with oceanic-themed primary-school padding. Single sweeping cleanup across the four (rename Dock/Reef/Cove/Lagoon chapter names, rewrite 4 cartoonish items per track) is the efficient move.

The bank correctly avoids Fed-specific framing in core monetary items — content stays portable across central-banking systems. Fed/ECB/BoE-specific additions would warrant `region: 'US'` etc.

May 2026 "surprisingly solid" verdict on `macroeconomicsWorkoutGenerated` confirmed: per-distractor explanations are real, chapter names match syllabus, items teach mechanism. No downstream `.filter()` derivations.

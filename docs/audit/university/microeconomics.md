# Audit: microeconomics

**Syllabus**: [`src/data/syllabi/university/microeconomics.md`](../../../src/data/syllabi/university/microeconomics.md)
**Track id**: `microeconomics`
**Tier**: university (`universityAcademicTrackIds` → `universityAcademic.ts:76`)
**Region**: jurisdiction-neutral by content (supply/demand, elasticity, market structures are universal). Anchors (AP Microeconomics CED, OpenStax, CORE Econ, MRU) are US/UK-led but content is global. No US-only framing in sampled items.
**Status**: `playable` ([`src/data/ageCatalog/university.ts:16`](../../../src/data/ageCatalog/university.ts))

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Scarcity, Choice, Comparative Advantage | ✅ | "Foundations" + inline (16105/16107/16121) — opportunity cost, scarcity, comparative advantage |
| 2. Supply, Demand, Market Equilibrium | ✅ | "Supply and Demand" + inline — shifts vs movements, normal/inferior, tax incidence, ceilings |
| 3. Elasticity, Taxes, Subsidies, Price Controls | ✅ | "Elasticity" + inline — PED, total revenue test, cross-price, tax incidence with inelastic demand |
| 4. Consumer Choice (utility, indifference curves, behavioral) | ✅ partial | "Consumer Theory" + inline (16704/16709) Giffen, perfect complements |
| 5. Production, Costs, Perfect Competition | ✅ partial | Inline (16112/16122) MR=MC, shutdown rule; verify workout file beyond first 16 |
| 6. Imperfect Competition and Game Theory | ✅ | Inline (16109–16123 + 16701/16703/16706) monopoly, Nash, excess capacity, tit-for-tat, price discrimination, Cournot |
| 7. Factor Markets, Labor, Inequality | ✅ | Inline (16114/16120/16708) MRP hiring, Gini, monopsony |
| 8. Market Failure, Public Policy, Frontiers | ✅ | Inline (16118/16119/16124/16702/16707) externalities, lemons, Coase, Pigouvian, adverse selection |

**Coverage is the strongest in the cluster across all 8 chapters.** Inline block carries advanced material (Stretch Zone items 16701–16710 include Giffen goods, natural monopoly, Cournot, monopsony, indifference curves, Pareto efficiency).

**Chapter taxonomy**: `microeconomicsWorkoutGenerated.ts` uses functional chapters (Foundations, Supply and Demand, Elasticity, Consumer Theory). Inline `universityAcademic.ts` block uses mixed taxonomy — oceanic chapters for items 16101–16104, then real economic chapters (Basic Concepts, Supply and Demand, Imperfect Competition, Market Failure, Factor Markets, Stretch Zone) for 16105+.

## Per-file recommendations

| File | microeconomics Q's | Bucket | Reason |
|---|---|---|---|
| [`microeconomicsWorkoutGenerated.ts`](../../../src/data/questionCatalog/microeconomicsWorkoutGenerated.ts) | 50 | **KEEP** | **Gold standard.** Hand-authored `miss(answer, why, hint)` triples — each distractor has specific micro reasoning ("That is inelastic", "Complements usually have negative cross-price elasticity"). Sober tone, AP/OpenStax/CORE aligned. |
| `universityAcademic.ts` inline `microeconomics: [...]` block (id 16101–16124 + 16701–16710, lines 76–110) | ~34 | **FIX / mostly KEEP** | **Best inline block in the cluster.** Items 16105–16124 use real economic chapters and tight per-distractor distractors ("That is the social optimum, which may not be a Nash equilibrium" — precise). Stretch Zone items 16701–16710 are excellent advanced content. **Only items 16101–16104 use oceanic chapters and cartoonish distractors** ("That mixes concepts", "That is a duopoly" — too thin). Fix the four intro items; keep everything else. |

**No DEFAULT_FLAW in workout file.** No trivia imports.

**Net effect**: ~84 wired questions, ~80 at full quality bar. Microeconomics has the **best coverage and lowest cleanup burden** in the cluster.

## Open actions (priority order)

1. **Rename oceanic chapter names** for items 16101–16104 — "Microeconomics Dock/Reef/Cove/Lagoon" → "Scarcity and Choice" / "Supply and Demand" / "Imperfect Competition" / "Consumer Surplus".
2. **Rewrite the four cartoonish distractors** in items 16101–16104. Voice template: items 16105–16124 in the same file.
3. **Verify chapter 5 (Production, Costs) coverage** in the workout file — spot-check; inline covers MR=MC, shutdown rule, excess capacity.
4. **Author 3–4 chapter-4 behavioral items** — equimarginal rule, income vs substitution effects, sunk cost / framing, rational-choice vs behavioral.
5. **Add 2–3 modern micro-frontier items** — mechanism design, market design (kidney exchange, school matching), platform pricing.

## Estimated effort

- Inline cleanup: ~45 min
- Chapter 5 verification: ~20 min
- Behavioral + frontier authoring: ~2 hours (6 × 20 min)

**~0.5 working day.** Lightest cleanup in the cluster — substantively complete already.

## Notes for next auditor

`microeconomics` is the **best-covered and highest-quality track in the cluster**, alongside `comparativePracticalPolitics`. The inline `universityAcademic.ts` block carries genuine advanced content (Giffen goods, Cournot duopoly, perfect price discrimination, Coase theorem). Items 16701–16710 are the strongest "Stretch Zone" set anywhere in the cluster — usable as a voice template for advanced authoring in other quantitative tracks.

The four cartoonish intro items (16101–16104) follow the same pattern as `macroeconomics` / `internationalRelations` / `marketing` — oceanic-themed primary-school framing bleeding into university. A single sweeping cleanup across the four would handle them in one pass.

May 2026 audit's "surprisingly solid" verdict on economics workout files extends to micro cleanly. No downstream `.filter()` derivations.

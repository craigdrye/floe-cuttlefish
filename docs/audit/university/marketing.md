# Audit: marketing

**Syllabus**: [`src/data/syllabi/university/marketing.md`](../../../src/data/syllabi/university/marketing.md)
**Track id**: `marketing`
**Tier**: university (`universityAcademicTrackIds` → `universityAcademic.ts:326`)
**Region**: jurisdiction-neutral by content. Anchors (OpenStax Principles of Marketing, AMA definitions) are US-based but globally used. No US-only regulatory framing (no CAN-SPAM, COPPA, FTC items).
**Status**: `playable` ([`src/data/ageCatalog/university.ts:115`](../../../src/data/ageCatalog/university.ts))

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Marketing, Value, Strategy (market orientation, value prop, SWOT, PESTLE) | ✅ | "Strategy" — market orientation, value proposition, positioning, differentiation, SWOT, PESTLE |
| 2. Customer Research and Market Insight (primary/secondary, qualitative/quantitative, sampling) | ✅ | "Research" — primary, secondary, survey bias, focus group, representative sample, A/B test |
| 3. Consumer and Organizational Buying Behavior (decision process, psychological/social influences, B2B) | ❌ | **No coverage in first sample** — no consumer decision process items, no perception/learning/motivation, no business buying centers |
| 4. Segmentation, Targeting, Positioning (STP, segmentation bases, personas, perceptual maps) | ✅ | "Segmentation" — definition, demographic, geographic, behavioral |
| 5. Product, Brand, Customer Experience (product levels, life cycle, branding) | ⚠️ | Likely covered later in file (need to verify beyond first 16 items) |
| 6. Pricing and Revenue Strategy (cost/value-based, elasticity, freemium, bundles) | ⚠️ | Likely covered later in file |
| 7. Place, Channels, Distribution (intermediaries, omnichannel, supply chain) | ⚠️ | Likely covered later in file |
| 8. Promotion, Analytics, Responsible Growth (IMC, funnels, CAC, LTV, ROAS, ethics) | ⚠️ | Likely covered later in file |

**Sample only covers first 16 of 50 items.** Need to verify chapters 5–8 — assume present given file size.

**Chapter taxonomy**: `marketingWorkoutGenerated.ts` uses concise topic chapters (Strategy, Research, Segmentation) that map cleanly onto syllabus units. No taxonomy mismatch.

## Per-file recommendations

| File | marketing Q's | Bucket | Reason |
|---|---|---|---|
| [`marketingWorkoutGenerated.ts`](../../../src/data/questionCatalog/marketingWorkoutGenerated.ts) | 50 | **KEEP** | **Gold standard for this track.** Hand-authored `miss(answer, why, hint)` triples — each distractor has specific marketing reasoning ("That is qualitative", "That is product-led tunnel vision", "Convenience samples are often unrepresentative"). Sober tone, AMA/OpenStax-aligned content, syllabus-shaped chapters. Single canonical source feeds the track. |
| `universityAcademic.ts` inline `marketing: [...]` (id 16401-ish, lines 326–341) | ~12 | **FIX** | Hand-rolled introductory items using oceanic chapter names (Marketing Dock/Reef/Cove/Lagoon — primary-school pattern). Same issue flagged in `philosophy.md` and `internationalRelations.md` audits. Content is reasonable (target audience, brand, value prop, conversion); chapter names and distractors need cleanup. |

**No DEFAULT_FLAW in workout file.** No trivia imports feed this track.

**Net effect**: ~62 wired questions, ~50 at full quality bar. Open gap is chapter 3 (buying behavior) which is fully absent and chapter 8 (ethics + analytics with privacy/dark-pattern items) which the syllabus emphasizes but may be thin.

## Open actions (priority order)

1. **Verify chapters 5–8 coverage** by reading items 17–50 of the workout file. Plan author work for product/brand, pricing, place, promotion+analytics gaps.
2. **Rename oceanic chapter names** in the `universityAcademic.ts` inline block — "Marketing Dock/Reef/Cove/Lagoon" → syllabus chapter names.
3. **Rewrite cartoonish distractors** in the inline block. Voice template: `marketingWorkoutGenerated.ts`.
4. **Author 8–10 chapter-3 items** on consumer decision process, psychological/social influences, B2B buying centers, derived demand. Largest content gap.
5. **Author 4–5 chapter-8 ethics items** — data privacy/consent, dark patterns, influencer disclosure, algorithmic bias, vulnerable-customer protection.
6. **Tag pricing-discrimination items with region context** if added — these touch jurisdiction-specific consumer-protection regulation.

## Estimated effort

- Coverage verification + inline cleanup: ~2.5 hours
- Chapter 3 buying behavior: ~3 hours (10 × 20 min)
- Chapter 8 ethics: ~1.5 hours (5 × 20 min)

**~0.75–1 working day.**

## Notes for next auditor

`marketing` follows the same pattern as `internationalRelations` / `microeconomics` / `macroeconomics`: **one hand-authored workout file at quality bar, plus a thin oceanic-themed inline block in `universityAcademic.ts` needing cleanup**. The pattern is consistent enough to be a single sweeping fix across the four (rename Dock/Reef/Cove/Lagoon, rewrite cartoonish items in batch).

Marketing has the largest contemporary surface area of any business track (analytics, privacy, dark patterns, AI in targeting) but the bank covers strategy/research/segmentation more thoroughly than promotion/analytics. Chapter-8 ethics expansion is the highest-value lift — differentiates "principles of marketing" from "marketing skills drill." No downstream `.filter()` derivations.

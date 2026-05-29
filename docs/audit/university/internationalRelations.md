# Audit: internationalRelations

**Syllabus**: [`src/data/syllabi/university/international_relations.md`](../../../src/data/syllabi/university/international_relations.md)
**Track id**: `internationalRelations`
**Tier**: university (`universityAcademicTrackIds` → `universityAcademic.ts:310`)
**Region**: jurisdiction-neutral. Theoretical frameworks (realism, liberalism, constructivism) and institutions (UN, WTO, IMF, World Bank, ICC) are global; no US-only framing.
**Status**: `playable` ([`src/data/ageCatalog/university.ts:93`](../../../src/data/ageCatalog/university.ts))

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. What Is IR? | ✅ | "Core Concepts" — anarchy, sovereignty, national interest, power |
| 2. Theories of World Politics | ✅ | "Realism" + "Liberalism" + "Constructivism" — security dilemma, balance, bandwagoning, democratic peace, complex interdependence, norms, identity |
| 3. States, Foreign Policy, Diplomacy | ✅ partial | Bargaining theory + commitment problem; soft power/signaling implied but not item-level |
| 4. International Institutions and Law | ✅ | "International Law" — treaty, custom, jurisdiction, R2P; UN |
| 5. War, Peace, Security | ✅ | Deterrence, compellence, second strike, arms race, COIN; civil/interstate war, peacekeeping |
| 6. International Political Economy | ✅ | "Political Economy" — tariff, protectionism, exchange rate, IMF, World Bank |
| 7. Rights, People, Global Society | ✅ partial | R2P + human rights; no refugee/asylum/IDP distinctions, no TANs |
| 8. Planetary Problems (climate, pandemics, AI, cyber, space) | ❌ | **No items on climate negotiation, global public goods, pandemics, cyber, critical minerals, space** — most contemporary chapter |

**Chapter taxonomy**: `internationalRelationsWorkoutGenerated.ts` uses functional chapter names (Core Concepts, Realism, Liberalism, Constructivism, International Law, Security, Conflict, Political Economy, Institutions) that map cleanly onto syllabus units. No taxonomy mismatch.

## Per-file recommendations

| File | internationalRelations Q's | Bucket | Reason |
|---|---|---|---|
| [`internationalRelationsWorkoutGenerated.ts`](../../../src/data/questionCatalog/internationalRelationsWorkoutGenerated.ts) | 50 | **KEEP** | **Gold standard for this track.** Hand-authored `miss(answer, why, hint)` triples — each distractor has specific IR reasoning ("That is bandwagoning, not balancing", "That is the Bertrand model"). Sober tone, theory-aware framing, syllabus-shaped chapters. Includes the explicit theory comparison the course is built around. May 2026 audit's "surprisingly solid" verdict on this file is **confirmed**. |
| `universityAcademic.ts` inline `internationalRelations: [...]` (id 16401–16412 estimated, lines 310–325) | ~12 | **FIX** | Hand-rolled introductory items using oceanic chapter names (Dock/Reef/Cove/Lagoon — primary-school pattern bleeding into university). Same pattern flagged in `philosophy.md` audit. Content (state definition, sovereignty, anarchy) is reasonable; chapter names and distractor texture need cleanup. |

**No DEFAULT_FLAW in the workout file.** No trivia imports feed this track.

**Net effect**: ~62 wired questions, ~50 at full quality bar. Main gap is chapter 8 (planetary problems / current events) — the contemporary edge of the syllabus.

## Open actions (priority order)

1. **Rename oceanic chapter names** in the `universityAcademic.ts` inline block — "IR Dock/Reef/Cove/Lagoon" → syllabus chapter names.
2. **Rewrite cartoonish distractors** in the inline block. Voice template: `internationalRelationsWorkoutGenerated.ts`.
3. **Author 8–10 chapter-8 items** on planetary problems: climate negotiation, global public goods + free riding, pandemic preparedness, cyber governance, critical minerals, space debris, AI governance. Highest-value gap.
4. **Author 4–5 chapter-7 items** on migration/refugee category distinctions, transnational advocacy networks, diaspora politics.
5. **Add 3–4 chapter-3 items** on foreign-policy decision frames (bureaucratic politics, leader psychology, regime-type signaling effects).

## Estimated effort

- Inline cleanup: ~2 hours (12 items)
- Chapter 8 planetary: ~3 hours (10 × 20 min)
- Chapter 7 + 3 items: ~3 hours (9 × 20 min)

**~1 working day.** Most lift is gap-closing for contemporary chapter 8; bank itself is strong.

## Notes for next auditor

`internationalRelations` is **one of the "surprisingly solid" workout files flagged in May 2026** (alongside `philosophyWorkoutGenerated`, `macroeconomicsWorkoutGenerated`) — confirmed. Author understood theory plurality, security-dilemma logic, bargaining theory of war, institutional design tradeoffs. Per-distractor explanations name competing theories specifically ("That is bandwagoning, not balancing").

Inline `universityAcademic.ts` block uses primary-school oceanic chapter names ("IR Dock/Reef/Cove/Lagoon") that don't belong at university — same pattern flagged in `philosophy.md`. Cleaning is quick, high-value. No downstream `.filter()` derivations.

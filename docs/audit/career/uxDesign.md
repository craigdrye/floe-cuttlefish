# Audit: uxDesign

**Syllabus**: [`src/data/syllabi/career/ux_design.md`](../../../src/data/syllabi/career/ux_design.md)
**Track id**: `uxDesign`
**Tier**: career
**Region**: Jurisdiction-neutral. References WCAG (international) and Google/NN/g/CareerFoundry comparables — no US-specific framings to flag.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. UX Mindset and Problem Framing | ⚠️ Thin | `DesignTech2` "North star mismatch" (metrics framing) is closest; no explicit problem-brief or assumption-mapping question |
| 2. Research That Changes the Design | ✅ | `DesignTech` "Interview versus survey", `DesignTech2` "Recruiting the wrong users" |
| 3. Information Architecture and User Flows | ✅ | `career.ts` "User flow", `DesignTech` "Menu label mismatch (Artifacts)" |
| 4. Wireframes and Interaction Structure | ✅ | `career.ts` "Wireframe purpose" / "Affordance clue", `DesignTech` "Helpful validation error states", `DesignTech2` "Empty state that works" |
| 5. Prototyping and Usability Testing | ✅ | `DesignTech` "Fidelity fit", "Leading task wording", `DesignTech2` "A/B test patience" |
| 6. Accessibility and Inclusive Design | ✅ | `DesignTech` "Contrast check", `DesignTech2` "Keyboard trap", "Name field assumption" |
| 7. Product Collaboration and Handoff | ✅ | `DesignTech` "Spec gap", `DesignTech2` "Motion spec", "Pattern drift design debt" |
| 8. Portfolio Case Study | ⚠️ Thin | `career.ts` "Portfolio case study" — only one question, hand-written |

**Coverage is strong across the middle six chapters; thin at top (problem framing) and bottom (portfolio) of the funnel.**

**Chapter taxonomy mismatch.** Hand-written `career.ts` uses thematic "UX Design Dock/Reef/Cove/Lagoon". Generated `DesignTech` files use "UX Design: X" prefix with ~26 distinct sub-topics across two generator files (Discovery, Accessibility, Prototyping, IA, Design Systems, Error States, Metrics, Handoff, Research Planning, Service Design, Prioritization, Content Strategy, Enterprise UX, Experimentation, Critique, Localization, Dataviz, Privacy UX, Inclusive Design, Design Debt, etc.). Realign to syllabus 8-chapter taxonomy.

## Per-file recommendations

| File | Track Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) (uxDesign block, lines 111-116) | 4 | **KEEP** | Hand-written, per-distractor explanations, brain-burner voice. Covers IA/wireframes/affordances/portfolio. |
| [`careerAgentGeneratedCoreSupplementDesignTech.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementDesignTech.ts) (uxDesign, lines 93-153) | 12 | **FIX** | Strong content (research methods, contrast, fidelity fit, leading task wording, IA labels, design systems, error states, metrics, mobile reach, microcopy, stakeholder review, handoff specs). Every wrong answer uses `DEFAULT_FLAW`. Labels are punchy ("quiet means premium", "color is a complete sentence") — explanation slot is wasted. |
| [`careerAgentGeneratedCoreSupplementDesignTech2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementDesignTech2.ts) (uxDesign, lines 113-194) | 15 | **FIX/MERGE → DesignTech** | Same `DEFAULT_FLAW` pattern. Adds novel angles (recruiting users, keyboard trap, north-star mismatch, service design, edge-case priority, empty state, permission preview, A/B patience, critique anchoring, localization, dataviz, privacy UX, name fields, motion spec, discoverability, pattern drift). Lift novel content, dedupe accessibility/handoff overlap. |

**May 2026 audit note — confirmed.** The 4 hand-written `career.ts` questions are seed-level (user flow, wireframe, affordance, portfolio) and the 27 supplement questions do all the substantive teaching. Duplication is not literal but *teaching territory* overlaps for the four seed concepts. Decide: is `career.ts` the canonical first-impression surface and supplement is depth, or does the seed fold in?

## Open actions (priority order)

1. **Resolve the seed-vs-supplement question** flagged by May 2026 audit. Recommended: keep `career.ts` as the 4-question first-impression sample (Mindset/Wireframe/Affordance/Portfolio), explicitly mark supplement files as depth-expansion, and ensure aggregator order is documented.
2. **Per-distractor rewrite of `DesignTech` + `DesignTech2` uxDesign blocks** (27 questions × 3 distractors = 81 explanations). Highest-impact single change.
3. **Author 3-4 problem-framing questions** for Chapter 1 (problem brief, assumption mapping, success metric framing).
4. **Author 3-4 portfolio-case-study questions** for Chapter 8 (story arc, evidence quality, honest reflection, what changed because of your work).
5. **Realign chapter names** to syllabus 8-chapter taxonomy.
6. **No regional tagging needed.**

## Estimated effort

- May 2026 audit resolution + seed/supplement decision: ~1 hour
- Per-distractor rewrite (27 questions): ~5 hours
- New authoring (6-8 questions for Chapters 1 & 8): ~3 hours
- Chapter realignment: ~30 min

**~1.25 working days.** UX is one of Floe's most exposed tracks (named in careerCoreTracks, used in onboarding). The voice in the supplement files is *good* — the only thing stopping a KEEP recommendation is the wasted `DEFAULT_FLAW` slot.

## Notes for next auditor

This track + `cybersecurity` (basics) share the exact same shape: 4-question hand-written `career.ts` seed + 24-27 generated supplement in `DesignTech` / `DesignTech2`. Same `DEFAULT_FLAW` problem; fix them together. Three tracks live in `DesignTech`: `financialModeling`, `uxDesign`, `cybersecurity` — same fix likely applies to all.

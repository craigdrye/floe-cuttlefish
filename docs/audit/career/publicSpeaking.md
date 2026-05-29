# Audit: publicSpeaking

**Syllabus**: [`src/data/syllabi/career/public_speaking.md`](../../../src/data/syllabi/career/public_speaking.md)
**Track id**: `publicSpeaking`
**Tier**: career
**Region**: Region-neutral. No region tag needed.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Speaker Mindset and Audience Analysis | ✅ | Hand-authored "Clear message" + Supplement "Executive room read" + Polish "Smart room, wrong talk" |
| 2. Message Design and Structure | ✅ | Supplement "Three-point spine" + Polish "Buried point" |
| 3. Evidence, Story, and Clarity | ✅ | Supplement "Metric with a human", "Chart explanation leash" |
| 4. Delivery Mechanics | ✅ | Hand-authored "Pacing" + Supplement "Pace reset" + hand-authored "Nerves clue" |
| 5. Visuals and Presentation Aids | ✅ | Supplement "Slide diet" + Polish "Chart overload" |
| 6. Informative, Persuasive, Executive Speaking | ⚠️ | Implicit through "Executive room read"; no dedicated persuasive vs informative comparison item |
| 7. Q&A, Panels, Impromptu Speaking | ✅ | Supplement "Hostile question compost" + Polish "Hostile question" |
| 8. Virtual and Hybrid Presentation Skills | ✅ | Supplement "Camera-room bridge" |

**Coverage is the strongest of the four CommunicationLeadership-cluster tracks.** Every chapter has at least one item; the only thin chapter is 6 (Informative vs Persuasive vs Executive — a genre distinction).

**Chapter taxonomy mismatch.**
- `career.ts` (lines 123–128) uses Dock/Reef/Cove/Lagoon: "Speaking Dock", "Speaking Reef", "Speaking Cove", "Speaking Lagoon"
- `careerAgentGeneratedCoreSupplementCommunicationLeadership.ts` (publicSpeaking section, line 31) uses "Public Speaking: <Subject>"
- `careerAgentGeneratedCoreSupplementCommunicationLeadership2.ts` (publicSpeaking section, line 31) uses same prefix
- `careerAgentGeneratedCareerSkillsPolish.ts` (publicSpeaking section, lines 31–52) uses "Public Speaking: <Subject>"
- `careerAgentGeneratedCareerFrontDoorPolish.ts` (publicSpeaking section, line 185) uses same prefix

Syllabus uses descriptive titles ("Message Design and Structure", "Delivery Mechanics"). Realign.

## Per-file recommendations

| File | publicSpeaking Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) (lines 123–128) | 4 | **KEEP** | Hand-curated with per-distractor explanations. Topics: clear message, pacing, audience focus, nerves. Voice template. |
| [`careerAgentGeneratedCoreSupplementCommunicationLeadership.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementCommunicationLeadership.ts) (publicSpeaking section, line 31) | ~12 | **FIX** | The strongest single-file coverage in the track. Topics: audience (executive room), structure (three-point spine), slides (diet), delivery (pace reset), questions (hostile), storytelling (metric+human), remote, rehearsal, openings, data, credibility, closing. Uses `DEFAULT_FLAW`. Rewrite per-distractor explanations. |
| [`careerAgentGeneratedCoreSupplementCommunicationLeadership2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementCommunicationLeadership2.ts) (publicSpeaking section, line 31) | ~12 | **MERGE → CoreSupplementCommunicationLeadership (FIX)** | +2 file. Likely overlaps base. Salvage 4–6 distinct items. |
| [`careerAgentGeneratedCareerSkillsPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerSkillsPolish.ts) (publicSpeaking section, lines 31–52) | 4 | **MERGE → CoreSupplementCommunicationLeadership** | Topics: audience, structure, Q&A, data story. Different `DEFAULT_FLAW`. Lift novel; dedupe. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (publicSpeaking section, line 185) | 4 | **DELETE** | Re-covers audience adaptation/structure/Q&A/data slides — all already in canonical core + Supplement. Different `DEFAULT_FLAW`. No net content. |

**Duplication on the same 4 archetypes**: executive audience adaptation, three-point structure, hostile Q&A, slide/data clarity. Each appears 4 times.

## Open actions (priority order)

1. **Author Chapter 6 (Informative / Persuasive / Executive Speaking) items** — 4 questions on genre distinction, recommendation framing, objection pre-handling, decision-meeting close. Only meaningful coverage gap.
2. **Consolidate Supplement1 + Supplement2 + CareerSkillsPolish** into a single canonical `publicSpeaking` bank with per-distractor explanations. Aim for ~22 questions across 8 chapters.
3. **Delete the publicSpeaking section of `CareerFrontDoorPolish`** — pure duplicate.
4. **Verify chapter alignment** to syllabus chapter titles after consolidation.
5. Consider adding a "remote-first" cluster of items to Chapter 8 — the syllabus dedicates a whole chapter but current coverage is one item.

## Estimated effort

- Coverage-gap authoring (Chapter 6, plus Chapter 8 expansion): ~2 hours (6 questions × 20 min)
- Consolidation + per-distractor rewrite + dedup: ~5 hours
- Delete + chapter rename: ~30 min

**~1 working day. Lightest cleanup in the cluster.**

## Notes for next auditor

`publicSpeaking` is the best-covered of the four CommunicationLeadership-cluster tracks (peopleManagement, negotiation, salesFundamentals, publicSpeaking). The Supplement1 file in particular is the strongest single-file content set in this audit cluster — real workplace scenarios, useful tone, only fatally damaged by the DEFAULT_FLAW constant.

Cross-track consolidation note: items on "hostile Q&A" appear in both `publicSpeaking` and (implicitly) `negotiation` (difficult tactics). Different framings — preserve both, but cross-reference during authoring.

# Audit: negotiation

**Syllabus**: [`src/data/syllabi/career/negotiation_skills.md`](../../../src/data/syllabi/career/negotiation_skills.md)
**Track id**: `negotiation`
**Tier**: career
**Region**: Region-neutral. No region tag needed.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Negotiation Fundamentals | ✅ | Hand-authored "Interests vs positions" + "BATNA clue" + "Anchoring"; Polish "No fallback" |
| 2. Creating Value Before Claiming It | ⚠️ | Hand-authored "Win-win check" + Polish "Trade, do not donate" hit value creation; no logrolling/multi-issue-package items |
| 3. Claiming Value and Bargaining Tactics | ✅ | Hand-authored "Anchoring" + Polish "First number nerves", "Free concession habit" |
| 4. Communication, Emotion, Trust | ⚠️ | Polish "Useful silence" + Supplement "Position vs interest" cover listening; no emotion/face-saving items |
| 5. Power, Ethics, and Difficult Tactics | ❌ | **No items on threats, ultimatums, deception, bad-faith tactics, power imbalance, ethics line** |
| 6. Internal and Multi-Party Negotiation | ❌ | **No items on coalitions, principal-agent, internal alignment, multi-party dynamics** |
| 7. Closing, Documentation, Implementation | ⚠️ | Polish "Yes with fog" hits durable agreement; no term-sheet, ambiguity, relationship-after items |
| 8. Negotiation Labs (simulation set) | N/A | Capstone — not naturally tested as MCQ |

**Half the syllabus is missing or thin.** Chapters 5 (Difficult Tactics) and 6 (Multi-Party) are entirely absent — and these are the chapters that distinguish a skill course from a vocabulary primer.

**Chapter taxonomy mismatch.**
- `career.ts` (lines 129–134) uses Dock/Reef/Cove/Lagoon: "Negotiation Dock", "Negotiation Reef", "Negotiation Cove", "Negotiation Lagoon"
- `careerAgentGeneratedCoreSupplementCommunicationLeadership.ts` (negotiation section, line 93) uses "Negotiation: <Subject>"
- `careerAgentGeneratedCoreSupplementCommunicationLeadership2.ts` (negotiation section, line 113) uses same prefix
- `careerAgentGeneratedCareerSkillsPolish.ts` (negotiation section, lines 53–74) uses "Negotiation: <Subject>"
- `careerAgentGeneratedCareerFrontDoorPolish.ts` (negotiation section, line 207) uses same prefix

Syllabus uses descriptive titles ("Creating Value Before Claiming It", "Power, Ethics, and Difficult Tactics"). Realign.

## Per-file recommendations

| File | negotiation Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) (lines 129–134) | 4 | **KEEP** | Hand-curated with per-distractor explanations. Covers positions/interests, BATNA, anchoring, win-win. Voice template. |
| [`careerAgentGeneratedCoreSupplementCommunicationLeadership.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementCommunicationLeadership.ts) (negotiation section, line 93) | ~12 | **FIX** | Real scenario coverage of preparation, interest discovery, anchoring, tradeoffs, listening, framing. Uses `DEFAULT_FLAW`. Rewrite per-distractor explanations. |
| [`careerAgentGeneratedCoreSupplementCommunicationLeadership2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementCommunicationLeadership2.ts) (negotiation section, line 113) | ~12 | **MERGE → CoreSupplementCommunicationLeadership (FIX)** | +2 file in base+TopOff. Likely overlaps base. Salvage 4–6 distinct items. |
| [`careerAgentGeneratedCareerSkillsPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerSkillsPolish.ts) (negotiation section, lines 53–74) | 4 | **MERGE → CoreSupplementCommunicationLeadership** | Topics: BATNA prep, position-vs-interest, concession habit, agreement clarity. Different `DEFAULT_FLAW`. Lift novel; dedupe. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (negotiation section, line 207) | 4 | **DELETE** | Re-covers BATNA/interests/concessions/agreement clarity — all already in canonical core + Supplement. Different `DEFAULT_FLAW`. No net content. |

**Duplication is heavy on the same 4 archetypes**: BATNA prep, positions-vs-interests, concession discipline, agreement clarity. Each appears 4 times across files.

## Open actions (priority order)

1. **Author Chapter 5 (Power, Ethics, Difficult Tactics) bank** — 6–8 questions on extreme anchors, false deadlines, missing authority, personal attacks, hidden constraints, ethics line. Largest coverage gap and the chapter that differentiates an actual negotiation course from a slang glossary.
2. **Author Chapter 6 (Internal and Multi-Party) bank** — 5 questions on coalition design, principal-agent, internal mandate, sequencing, multi-party dynamics.
3. **Author Chapter 7 (Closing, Documentation, Implementation)** — 4 questions on term-sheet ambiguity, implementation handoff, relationship repair.
4. **Consolidate Supplement1 + Supplement2 + CareerSkillsPolish** into a single canonical `negotiation` bank with per-distractor explanations.
5. **Delete the negotiation section of `CareerFrontDoorPolish`** — pure duplicate.

## Estimated effort

- Coverage-gap authoring (chapters 5, 6, 7): ~6 hours (17 questions × 20 min)
- Consolidation + per-distractor rewrite + dedup: ~5 hours
- Delete + chapter rename: ~30 min

**~1.5–2 working days.**

## Notes for next auditor

`negotiation` shares the same source-file quartet (Supplement1, Supplement2, CareerSkillsPolish, CareerFrontDoorPolish) as `peopleManagement`, `publicSpeaking`, and `salesFundamentals`. Consolidating all four CommunicationLeadership-cluster tracks together is more efficient than serially.

The hand-curated 4 in `career.ts` cover the "Negotiation 101" archetypes well (interests, BATNA, anchoring, win-win). What the track is missing is the **second half** of any real negotiation course — dealing with adversarial tactics, internal alignment, and implementation. These are also the chapters where Floe could most distinguish itself from generic LinkedIn-style sales courses. Worth investing in.

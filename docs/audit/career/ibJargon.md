# Audit: ibJargon

**Syllabus**: [`src/data/syllabi/career/ib_jargon_buster.md`](../../../src/data/syllabi/career/ib_jargon_buster.md)
**Track id**: `ibJargon`
**Tier**: career
**Status**: `playable` (correct — has questions wired up at [`career.ts`](../../../src/data/questionCatalog/career.ts) line 185–188)
**Region**: US (assumed — SPA / reps / QoE / IOI / LOI vocabulary; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Valuation and Market Read (comps, precedents, add-backs, multiple range, football field) | ✅ | Hand-written: Live Deal Dock (scrub deck / foot comps), Comps Lagoon (rebuild precedent set), Client Call (filter vanity valuation), Fairness Reef (strategy vs slogan). Agent: clean buyer story, foot comps, fix weak relevance, validate buyer value. |
| 2. Quality of Earnings and Diligence (QoE, add-backs, working capital, concentration) | ✅ | Hand-written: QoE Reef (EBITDA taxidermy), Data Room Reach (folder seventeen), Sponsor Channel (retrade risk). Agent: judge add-backs, frame customer concentration, reconcile KPI pack, carve-out standalone costs, EBITDA bridge reconciliation. |
| 3. Buyer Process and Deal Tension (teaser, CIM, IOI, LOI, process letter, bid deadline) | ✅ | Hand-written: Buyer List (tier outreach), Auction Bay (read buyer behavior), Timeline Tide (real deadline). Agent: CIM clean buyer story, control teaser flow / NDA, read IOI conditionality, LOI retrade setup, process letter clarity, exclusivity bay, buyer feedback synthesis. |
| 4. Materials, Markups, and Client Readiness (mgmt presentation, board book, comment turn) | ✅ | Hand-written: Management Presentation (CEO free-jazz), Workstream Wharf (diligence chaos), Client Prep (CFO margin answer), Board Update (process risk), Deal Memo (blunt verdict). Agent: board book frame recommendation, calibrate board message, management guidance. |
| 5. Signing, Closing, and Chaos Control (SPA, reps, closing conditions, funds flow) | ✅ | Hand-written: Redline Reach (poison clause), Closing Table (wires / consents). Agent: SPA review redlines, closing checklist, funds flow verification, bring-down call, regulatory approval, working capital peg, proceeds waterfall. |

All 5 syllabus chapters covered well. Hand-written content is exemplary (gold-standard voice).

## Per-file recommendations

| File | IB Jargon Q's | Bucket | Reason |
|---|---|---|---|
| [`jargonBusters.ts`](../../../src/data/questionCatalog/jargonBusters.ts) (`ibJargonQuestions`, lines 185–346) | 20 | **KEEP** | **Gold standard for the catalog.** Hand-authored with per-distractor explanations, chapter names that are deliciously metaphorical ("Live Deal Dock", "QoE Reef", "Redline Reach", "Fairness Reef"), and distinctive voice ("EBITDA taxidermy", "covenant-shaped prayer", "lovingly escorted into a valuation hallucination"). Source-of-voice for any new IB-jargon authoring. |
| [`careerAgentGeneratedJargon.ts`](../../../src/data/questionCatalog/careerAgentGeneratedJargon.ts) (`ibJargon`, lines 193–356) | 18 | **FIX** | Hand-styled-ish (per-distractor explanations are present, no `DEFAULT_FLAW`) and good coverage of process mechanics not in `jargonBusters.ts` (NDA control, IOI conditionality, debt package check, proceeds waterfall, bring-down call, KPI reconciliation, funds flow, final readout). Voice is good but not as sharp as the hand-written. Should remain; light copy-edit to tighten distractor wit to match the hand-written voice. **Not wired into the assembler today** (see open actions). |
| [`careerAgentGeneratedJargonFinanceTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedJargonFinanceTopOff.ts) (`ibJargon`, lines 184–335) | 30 | **MERGE → careerAgentGeneratedJargon, DELETE overlaps** | Uses `DEFAULT_FLAW` constant ("This is a plausible distractor, but it does not translate the jargon into the right workplace task.") — **auto-FIX**. Heavy overlap with `careerAgentGeneratedJargon` and `jargonBusters` (CIM cleanup × 3 times across files; foot the comps × 3 times; tier buyers × 3 times; working capital peg × 2 times; IOI review × 2 times; SPA redlines × 2 times; closing checklist × 2 times; carve-out cost × 1 new; regulatory approval × 1 new; sponsor behavior × 1 new). Salvageable: carve-out financials, public-markets backdrop, regulatory approval timing, deal recommendation framework (~6 questions). Cut the rest. |
| [`careerAgentGeneratedJargonPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedJargonPracticePolish.ts) (`ibJargon`, lines 53–74) | 4 | **DELETE** | Uses `DEFAULT_FLAW`. Chapter names differ again ("IB Jargon: CIM", "IB Jargon: QoE", "IB Jargon: Process Letter", "IB Jargon: Working Capital Peg") — fourth taxonomy in this track. Content (CIM story vs support, QoE warning, process letter discipline, peg confusion) is fully re-covered by the hand-written and the careerAgentGeneratedJargon banks. **This file IS wired into the assembler** — its 4 questions are the only ones currently surfaced alongside `ibJargonQuestions` ([`career.ts`](../../../src/data/questionCatalog/career.ts) line 185–188). Net negative to keep. |

**Wiring gap.** The assembler currently surfaces only PracticePolish + jargonBusters (24 questions). `careerAgentGeneratedJargon.ibJargon` (18) and `careerAgentGeneratedJargonFinanceTopOff.ibJargon` (30) are imported elsewhere but not into the `ibJargon` track in [`career.ts`](../../../src/data/questionCatalog/career.ts). Confirm whether that's intentional or a wiring bug.

**Net effect**: 72 IB-jargon questions across 4 files → ~40 in 2 files (KEEP hand-written + FIX consolidated agent bank with `DEFAULT_FLAW` rewrite), all wired through the assembler.

## Open actions (priority order)

1. **Investigate wiring**: confirm whether `careerAgentGeneratedJargonQuestionsByTrack.ibJargon` and `careerAgentGeneratedJargonFinanceTopOffQuestionsByTrack.ibJargon` are intentionally excluded from the `ibJargon` track in [`career.ts`](../../../src/data/questionCatalog/career.ts). They flow via `topUpCareerAgentGeneratedCatalog` but the explicit `ibJargon: [...]` override on line 185 may shadow them.
2. **Auto-FIX `DEFAULT_FLAW`** in `careerAgentGeneratedJargonFinanceTopOff.ts` for 30 IB-jargon questions.
3. **Consolidate the agent-generated banks** (`careerAgentGeneratedJargon` + the salvageable parts of `careerAgentGeneratedJargonFinanceTopOff`) into one file. Drop the duplicates listed above.
4. **Delete the IB section of `careerAgentGeneratedJargonPracticePolish.ts`** — 4 questions redundant with the hand-written gold standard.
5. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) (line 159).

## Estimated effort

- Wiring investigation: ~30 min
- Per-distractor rewrite of 30 TopOff questions: ~4 hours
- Consolidation + dedupe: ~1.5 hours
- PracticePolish delete: ~10 min

**~0.75 working days** total. Less than the roadmap tracks because the hand-written content is already KEEP and most agent work is dedupe rather than rewrite.

## Notes for next auditor

`jargonBusters.ts ibJargonQuestions` is one of the two cleanest banks in the entire Floe catalog (the other being `vcJargonQuestions` in the same file). The chapter names ("Comps Lagoon", "Sponsor Channel", "Fairness Reef") are part of the brand voice — preserve them as canonical for the track even if other tracks normalize to syllabus chapter names.

The 4-layer file structure for this track (`jargonBusters` + `careerAgentGeneratedJargon` + `careerAgentGeneratedJargonFinanceTopOff` + `careerAgentGeneratedJargonPracticePolish`) is the highest layer count of any track in the cluster. Two of the four (TopOff, PracticePolish) carry `DEFAULT_FLAW`; the other two carry per-distractor explanations. The triplet pattern from the roadmaps repeats here at one extra layer of indirection.

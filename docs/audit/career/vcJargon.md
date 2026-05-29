# Audit: vcJargon

**Syllabus**: [`src/data/syllabi/career/vc_jargon_buster.md`](../../../src/data/syllabi/career/vc_jargon_buster.md)
**Track id**: `vcJargon`
**Tier**: career
**Status**: `playable` (correct — has questions wired up at [`career.ts`](../../../src/data/questionCatalog/career.ts) line 181–184)
**Region**: US (assumed — SAFE / pro rata / liquidation preference / Delaware C-corp vocabulary; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Revenue, ARR, and Unit Economics (ARR, MRR, churn, CAC payback, retention) | ✅ | Hand-written: Pricing Pier (real ACV). Agent: ARR quality check, cohort expansion, CAC payback bonfire, ARR fragile recurrence. PracticePolish: PMF evidence check. |
| 2. Customers, Cohorts, and Adoption (cohort, renewal intent, usage depth, references) | ✅ | Hand-written: Founder Reef (real churn), Diligence Dock (design partners), Customer Channel (sales efficiency), Pipeline Reach (real intent), Data Room (concentration risk). Agent: cohort cove (expansion), customer calls (love vs renewal). |
| 3. Market and Moat (TAM, SAM, SOM, defensibility, workflow stickiness, network effects) | ✅ | Hand-written: Market Map (crowded lane), Thesis Channel (founder-market fit). Agent: market depth (TAM from reality), wedge or doorstep. |
| 4. Burn, Runway, and Financing Risk (burn, runway, hiring plan, downside, bridge round) | ✅ | Hand-written: Board Pack (translate runway), Portfolio Bay (bridge or reset). Agent: hiring plan burn, golden retriever in lab coat. PracticePolish: runway not a mood, bridge or cliff. |
| 5. Terms, Ownership, and Allocation (pre/post-money, liquidation preference, pro rata, board) | ✅ | Hand-written: Cap Table Cove (SAFE post-money), Term Sheet Shoals (liquidation preference downside), Fund Math (pro rata reserves), Fund Narrative (ownership to conviction), Board Dynamics (real vs decorative board), Reference Checks (founder speed), Exit Lagoon (optionality), Exit Memo (blunt summary). Agent: investment memo recommendation. PracticePolish: pro rata decision. |

All 5 syllabus chapters are well-covered. The hand-written set is the deepest in the catalog (20 questions, every syllabus chapter touched multiple ways).

## Per-file recommendations

| File | VC Jargon Q's | Bucket | Reason |
|---|---|---|---|
| [`jargonBusters.ts`](../../../src/data/questionCatalog/jargonBusters.ts) (`vcJargonQuestions`, lines 22–183) | 20 | **KEEP** | **Gold standard for the catalog.** Hand-authored with per-distractor explanations, distinctive metaphor-rich chapter names ("Cap Table Cove", "Founder Reef", "Term Sheet Shoals", "Market Map", "Portfolio Bay"), and the voice for the entire career tier ("a CAC trebuchet launching money into a fog bank", "the unit economics of a themed bonfire", "spreadsheet cosplay", "a knife fight wearing soft loafers"). Source-of-voice for any new VC authoring across Floe. |
| [`careerAgentGeneratedJargon.ts`](../../../src/data/questionCatalog/careerAgentGeneratedJargon.ts) (`vcJargon`, lines 28–191) | 18 | **FIX** | Per-distractor explanations present (no `DEFAULT_FLAW`). Coverage adds ARR-quality detail, cohort expansion, customer-call renewal-intent, CAC payback math, market depth, hiring plan burn. Voice is good but flatter than the hand-written. Light copy-edit to tighten metaphor density to match. **Not wired into the assembler today** — same wiring concern as `ibJargon` (see open actions). |
| [`careerAgentGeneratedJargonFinanceTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedJargonFinanceTopOff.ts) (`vcJargon`, lines 31–182) | 30 | **MERGE → careerAgentGeneratedJargon, DELETE overlaps** | Uses `DEFAULT_FLAW` constant ("This is a plausible distractor, but it does not translate the jargon into the right workplace task.") — **auto-FIX**. Heavy overlap with both hand-written and careerAgentGeneratedJargon: qualified pipeline ≈ Pipeline Reach; ARR quality ≈ ARR fragile recurrence × 2; founder coachability ≈ existing reference check; market wedge ≈ existing market questions; runway ≈ existing runway translate; pro rata ≈ existing fund math; liquidation preference ≈ Term Sheet Shoals. Salvageable: ~6–8 questions if any (most concepts are already covered). Likely DELETE entirely unless 2–3 specific scenarios stand out on careful review. |
| [`careerAgentGeneratedJargonPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedJargonPracticePolish.ts) (`vcJargon`, lines 31–52) | 4 | **DELETE** | Uses `DEFAULT_FLAW`. Chapter names differ again ("VC Jargon: Runway", "VC Jargon: PMF", "VC Jargon: Pro Rata", "VC Jargon: Bridge Round") — fourth taxonomy in this track. All four scenarios (runway accuracy, PMF evidence, pro rata decision, bridge with no milestones) are well covered in the hand-written and agent banks. **This file IS wired into the assembler** — its 4 questions are the only ones currently surfaced alongside `vcJargonQuestions` ([`career.ts`](../../../src/data/questionCatalog/career.ts) line 181–184). Net negative to keep. |

**Wiring gap.** Same as `ibJargon`: assembler currently surfaces only PracticePolish + jargonBusters (24 questions). `careerAgentGeneratedJargon.vcJargon` (18) and `careerAgentGeneratedJargonFinanceTopOff.vcJargon` (30) appear to flow via `topUpCareerAgentGeneratedCatalog` but may be shadowed by the explicit `vcJargon: [...]` override.

**Net effect**: 72 VC-jargon questions across 4 files → ~30–35 in 2 files (KEEP hand-written + FIX trimmed agent bank with `DEFAULT_FLAW` rewrite), all wired through the assembler. This is also the related VC observation from the worked-example audit at [`docs/audit/career/ventureCapitalRoadmap.md`](./ventureCapitalRoadmap.md): the hand-written VC entries in `jargonBusters.ts` are the model for any new VC authoring, full stop.

## Open actions (priority order)

1. **Investigate wiring**: confirm whether `careerAgentGeneratedJargonQuestionsByTrack.vcJargon` and `careerAgentGeneratedJargonFinanceTopOffQuestionsByTrack.vcJargon` are intentionally excluded from the `vcJargon` track in [`career.ts`](../../../src/data/questionCatalog/career.ts).
2. **Auto-FIX `DEFAULT_FLAW`** in `careerAgentGeneratedJargonFinanceTopOff.ts` for 30 VC-jargon questions, if any are kept after dedupe.
3. **Aggressive dedupe of `careerAgentGeneratedJargonFinanceTopOff.vcJargon`** — most concepts are double-covered by the hand-written and agent banks; aim to keep <8 questions, possibly zero.
4. **Delete the VC section of `careerAgentGeneratedJargonPracticePolish.ts`** — 4 questions redundant with the gold standard.
5. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) (line 148).

## Estimated effort

- Wiring investigation: ~30 min
- Dedupe + per-distractor rewrite of any kept TopOff questions: ~2 hours (aggressive cut)
- PracticePolish delete: ~10 min

**~0.5 working days** total — the lightest in the cluster because the hand-written bank already does the job.

## Notes for next auditor

`jargonBusters.ts vcJargonQuestions` is the source-of-voice for the entire career tier. Any new VC authoring (including the Chapter 1 fund-math questions called out in the `ventureCapitalRoadmap.md` audit) should match this voice. Specifically, the metaphor density — "interpretive dance", "themed bonfire", "loafers in a knife fight", "spreadsheet cosplay" — is what makes the bank distinctive. The agent banks are competent but flat by comparison.

The 4-layer file structure (`jargonBusters` + `careerAgentGeneratedJargon` + `careerAgentGeneratedJargonFinanceTopOff` + `careerAgentGeneratedJargonPracticePolish`) mirrors `ibJargon`. Together they produce a clear pattern: when the hand-written bank exists, every agent layer added afterwards is mostly redundancy plus `DEFAULT_FLAW` noise. This is the cleanest argument for treating the jargon clusters differently from the roadmap clusters in any future consolidation — the jargon banks already have a canonical version (`jargonBusters.ts`) that the roadmaps lack.

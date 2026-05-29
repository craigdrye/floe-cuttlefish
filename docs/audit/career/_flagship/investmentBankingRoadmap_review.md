# Flagship Pedagogical Review: investmentBankingRoadmap

**Reviewed**: 2026-05-18
**Track**: `investmentBankingRoadmap`
**Source file**: [`src/data/questionCatalog/careerAgentGeneratedRoadmapFinance.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinance.ts) (IB section, lines ~492–899)
**Syllabus**: [`src/data/syllabi/career/investment_banking_roadmap.md`](../../../src/data/syllabi/career/investment_banking_roadmap.md)
**Prior audits**: [`investmentBankingRoadmap.md`](../investmentBankingRoadmap.md) (original cluster audit, Wave 4 input)
**Template**: [`ventureCapitalRoadmap_review.md`](./ventureCapitalRoadmap_review.md) — read first; this review mirrors that structure deliberately.

This is the **second flagship pedagogical review** in the career-tier library. It applies the VC template to one of the most-likely-played career-changer tracks (IB) and inherits the same seven pedagogical principles.

---

## 1. What the track looked like before this review

By the time this review opened, the IB bank had already absorbed Wave 4:

- **Wave 4** had consolidated the RoadmapFinance triplet (base + TopOff + FinalTopOff) into one canonical file, eliminated the file-wide `DEFAULT_FLAW` constant, closed the documented Chapter 1 (Banking Workflow and Client Context) gap with 6 new questions, and renamed all chapters to match the syllabus literals.
- The voice register had been re-anchored on [`jargonBusters.ts`](../../../src/data/questionCatalog/jargonBusters.ts) IB section — sharp, specific, vivid distractors with metaphor in the prompt but substance in the answers.

What that left:

- **32 questions** across the 5 syllabus chapters (6 / 6 / 7 / 7 / 6).
- **No capstone.** The syllabus explicitly describes one ("create an analyst packet for a fictional sell-side process: company profile, financial summary, valuation range, buyer rationale page, diligence tracker, and client-ready recommendation"), but no question simulated that integrative work-output.
- **Several coverage gaps inside chapters** despite the headline chapter-level coverage matrix reading "all green":
  - Chapter 2 covered revenue, balance sheet plug, and working capital, but **did not test capex (maintenance vs growth)** or **EBITDA add-back / QoE discipline** — both core analyst skills.
  - Chapter 3 had EV bridge math, comps, and DCF sanity, but **no explicit WACC build** and **no football field synthesis** — two of the most-requested IB analyst outputs.
  - Chapter 4 covered process (IOIs, peg, exclusivity, antitrust, synergies), but **no accretion/dilution math** and **no sources-and-uses / debt capacity** — the two skills public-company M&A and LBO modeling are anchored on.
  - Chapter 5 covered version control, footnotes, Q&A, currency, distribution, but **no explicit tie-out discipline** and **no management presentation prep** — both named in the syllabus key concepts.
- **A handful of distractors leaning toward strawman jokes** rather than real misconceptions — "CEO biography length" (AR forecast), "the company should stop having a balance sheet" (balance plug), "every store has the same lighting" (lease treatment), "FX rates are best left mysterious" (currency mismatch), "Excel and present anyway" / "rude tab" (formula break), "send first and recall for cardio" (distribution list). Wave 4 caught most of these but not all.

That was the starting state.

---

## 2. What changed in this review

| Action | Count | Notes |
|---|---|---|
| Questions before | 32 | Across 5 chapters, no capstone |
| Questions after | 43 | Adds capstone chapter (Northwind Industries) |
| New questions authored | 11 | 8 coverage gap-fillers + 3 capstone |
| Questions reordered | 0 chapters | Existing Ch1–Ch5 arcs were already acceptable; new Qs slot at the end of each chapter as the closing synthesis Q |
| Distractors tightened | 7 lines across 6 questions | Strawmen → real misconceptions |
| Lessons strengthened | n/a (deferred) | Existing lesson lines were already content-bearing — held this pass |
| New chapter literal added | 1 | "Capstone: Sell-Side Analyst Packet and Synthesis" |
| Build status | green | `npx tsc -b` exit 0 |

### 2.1 Chapter 1 — Order held

Ch1's existing arc (`Coverage vs product` → `Pitch vs live deal` → `CIM vs teaser sequence` → `Workstream ownership` → `Diligence request scope` → `Signing vs closing`) moves cleanly from org structure to procedural distinction to analyst output discipline to the most consequential timing question. No new questions; no reordering. Distractor sweep found no strawmen here — Wave 4 cleared this chapter.

### 2.2 Chapter 2 — Capex and EBITDA add-backs

Added two new questions:

- **4340000 `Capex vs maintenance split`** — tests whether the learner can articulate why a single capex line in a CIM is insufficient for credit underwriting. Maintenance capex sets the floor on UFCF; growth capex is flexible. Without this question, the chapter never asked about capex at all, despite the syllabus listing it explicitly.
- **4340001 `EBITDA add-back discipline`** — tests selective filtering of management's adjusted-EBITDA bridge. Four add-backs presented: $4M legal settlement (accept), $3M founder comp (accept), $2M ERP (accept with tail), $3M "growth investments" with no detail (reject). This is the canonical QoE judgment call.

Also tightened the third distractor on `Balance sheet plug` (4105066) — replaced "the company should stop having a balance sheet" with a real career-changer misconception (checking retained earnings before debt flow). Tightened the third distractor on `Working capital forecast` (4105067) — replaced "CEO biography length" with a real misconception (holding AR flat in dollars while sales grow). Tightened the first distractor on `Deferred revenue bridge` (4107786) — replaced "annual billing sounds sophisticated" with the actual modeling error (recognizing all annual billings on invoice date).

### 2.3 Chapter 3 — WACC and Football field

Added two new questions:

- **4340010 `WACC build`** — full numeric WACC question with US-flavored inputs (4.0% Rf, 5.5% ERP, 1.2 β, 25% tax, 30/70 D/E). Distractors are real career-changer errors: tax-effecting the equity leg, skipping the tax shield, confusing ERP with cost of equity. The lesson explicitly names the unlever-relever beta workflow as the most-common failure mode.
- **4340011 `Football field synthesis`** — tests the highest-leverage Ch3 analyst output: how to *use* a football field at IC. Forces the learner to anchor in the overlap zone, name what LBO / trading / precedent ceilings/floors mean, and reject averaging or methodology-suppression.

Also tightened a distractor on `Lease treatment` (4107788) — "every store has the same lighting" replaced with a real lease-accounting trap (universal EBITDAR application without checking classification).

### 2.4 Chapter 4 — Accretion/dilution and sources & uses

Added two new questions:

- **4340020 `Accretion / dilution read`** — public-company M&A's most-requested slide. 22x buyer, 16x target, all-stock; tests whether the learner knows the direction (accretive before synergies) **and** can articulate the warning (EPS accretion ≠ value creation). Distractors include the inverted rule and the EPS-as-value fallacy.
- **4340021 `Sources and uses / debt capacity`** — full LBO bridge: $1.5B purchase, $150M EBITDA, 6.0x first lien + 1.5x second lien at 7.5x total, $400M equity check. Tests whether the bridge balances and whether the leverage stack is market-clearable. Distractors include the "surplus equals dividend" sources-and-uses error and a leverage-is-irrelevant trap.

### 2.5 Chapter 5 — Tie-out and management presentation

Added two new questions:

- **4340030 `Tie-out discipline`** — names the actual workflow ("every number traces back to a sourced exhibit") and the specific career-changer failure mode ("the second occurrence of a number that was tied out the first time but pasted from a stale tab in a later section"). Distractors capture the spot-check temptation, the cover-page delegation, and the print-and-pass-to-associate dodge.
- **4340031 `Management presentation prep`** — names the deliverable (written Q&A + two rehearsals + a mock under pressure) and the analyst's responsibility to drive prep even when senior bankers are unavailable. Distractors include under-prep, over-confidence in the CIM, and the "over-coaching" rationalization.

Also tightened distractors on `Currency mismatch` (4107794) — replaced three lightly-jokey lines with substantive cross-border modeling traps (single spot rate forward, mixed translation conventions, deferring FX past LOI). Tightened distractors on `Formula break` (4107793) — "Blame Excel and present anyway" / "deleting the output tab because it is being rude" both replaced with realistic-sounding misconceptions ("note the dip in the appendix as a caveat", "hardcode the prior-case output over the broken formula"). Tightened the `Distribution list check` (4107799) "Outlook recall for cardio" line into a substantive misconception about how Outlook recall actually works (same tenant, before-read only).

### 2.6 Capstone chapter authored — Northwind Industries

New chapter literal: **"Capstone: Sell-Side Analyst Packet and Synthesis"**. Three integrative questions, all set on the **same fictional client (Northwind Industries, a US specialty industrial distributor: $480M revenue, $62M adjusted EBITDA, 8.5% growth, family-owned)** so the learner follows one sell-side process through the three highest-stakes analyst decisions:

- **4340100 `Football field reconciliation for the IC`** — full football field given (trading / precedent / DCF / LBO), management wants to anchor on the precedent ceiling, what does the analyst recommend to IC? Forces integration of Ch3 (methodology selection), Ch4 (buyer rationale), and Ch1 (client management).
- **4340101 `Buyer-list construction for Northwind`** — CEO excludes two competitor strategics; top-3 customer concentration is 38%; how do you structure the list, sequence outreach, and gate sensitive data? Forces integration of Ch1 (client direction), Ch5 (confidentiality discipline), and Ch4 (buyer-rationale logic).
- **4340102 `Client recommendation calibration`** — final-round decision: strategic at $740M all-cash with antitrust path and 2% reverse break fee vs sponsor at $760M with rollover and a remaining financing condition. Which does the bank recommend? Forces integration of Ch3 (valuation), Ch4 (deal mechanics), Ch5 (execution discipline), and Ch1 (client communication).

The shared scenario across all three is intentional — it mirrors how an analyst experiences a real sell-side mandate (same client, three different decision points). This pattern is borrowed directly from the VC flagship (FieldChart) and re-applied for IB.

---

## 3. Pedagogical principles applied (use these as the template)

This review applies the same seven principles as the VC flagship. Restated here so the IB review can be read standalone, but the canonical articulation lives in [`ventureCapitalRoadmap_review.md`](./ventureCapitalRoadmap_review.md) Section 3.

1. **Test understanding, not recall** — every Q in this bank is now a scenario, not a definition. Even the closest-to-recall Qs (e.g. WACC build) ask the learner to identify the *failure mode*, not just produce a number.
2. **Difficulty arc per chapter** — open with foundational concept, close with integrative judgment. Ch1–Ch5 arcs verified; Ch3 specifically now closes on Football field (the most synthesis-heavy Ch3 Q).
3. **Distractors are real misconceptions, not strawmen** — seven distractors tightened in this pass to remove residual jokes Wave 4 left behind.
4. **Coverage vs syllabus is checked at the concept level, not the chapter level** — eight coverage gaps found (capex, QoE, WACC, football field, accretion/dilution, sources/uses, tie-out, management prep), all closed.
5. **Capstone simulates the work-output** — three Qs on the same fictional client (Northwind Industries) integrating across all five chapters.
6. **Voice consistency across the bank** — anchored on `jargonBusters.ts` IB section. Sharp, specific, deal-mechanic vocabulary: OID, reverse break fee, EBITDAR, rollover equity, unlever-relever beta, retrade.
7. **Lesson lines carry value beyond the correct answer** — each new lesson names the canonical analyst workflow (e.g. "unlever, average, relever to target capital structure" for WACC; "every number sourced, every number consistent across appearances, every date and label internally consistent" for tie-out).

---

## 4. Coverage matrix (syllabus concept → question id(s))

### Chapter 1 — Banking Workflow and Client Context

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Coverage | 4200010 | Coverage vs product groups |
| Product groups | 4200010 | Same |
| Pitch | 4200011 | Pitch vs live deal |
| Live deal | 4200011 | Same |
| CIM | 4200012 | Teaser → NDA → CIM sequence |
| Data room | 4200012, 4200014 | Sequence + diligence scope |
| Diligence | 4200014 | Project-management framing |
| Signing | 4200015 | Sign-to-close mechanics |
| Closing | 4200015 | Same |
| (extension) Workstream critical path | 4200013 | Bottleneck communication |

All listed concepts covered.

### Chapter 2 — Accounting and Financial Statement Links

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Revenue | 4103008 | Driver-based revenue build |
| EBITDA | 4340001 (NEW) | Add-back discipline / QoE |
| Working capital | 4105067, 4107787 | DSO forecast + retail seasonality |
| Capex | 4340000 (NEW) | Maintenance vs growth split |
| Debt | 4105066 | Balance sheet plug — debt flow |
| Cash flow | 4103009 | Circularity warning |
| Nonrecurring items | 4340001 (NEW) | Subset of the add-back Q |
| Adjustments | 4340001 (NEW) | Same |
| (extension) Deferred revenue | 4107786 | Subscription billings/revenue |

All listed concepts now covered.

### Chapter 3 — Valuation Core

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Trading comps | 4103010, 4107318 | Multiple selection + calendar alignment |
| Transaction comps | 4105068 | Precedent filter |
| DCF | 4103011 | Terminal value share sanity |
| WACC | 4340010 (NEW) | Full numeric build |
| Terminal value | 4103011 | DCF sanity |
| Multiples | 4103010, 4107788, 4107331 | Multiple selection + lease + share count |
| Sensitivity table | 4340011 (NEW) | Football field is the sensitivity output |
| (extension) Enterprise value bridge | 4105069 | 2.0 + 0.5 − 0.1 = 2.4 |
| (extension) Football field | 4340011 (NEW) | Synthesis question |

All listed concepts now covered.

### Chapter 4 — M&A and Capital Markets Materials

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Strategic rationale | 4107796 | Synergy multiple separation |
| Accretion/dilution | 4340020 (NEW) | P/E differential rule + value-creation warning |
| Sources and uses | 4340021 (NEW) | $1.5B LBO bridge with leverage stack |
| Debt capacity | 4340021 (NEW) | Same |
| Equity story | 4107796 | Standalone vs synergy separation |
| Investor questions | 4107791 | Forecast drift disclosure |
| (extension) Process letter | 4103012 | IOI comparability |
| (extension) Working capital peg | 4103013 | Value leakage protection |
| (extension) Synergy haircut | 4105071, 4107796 | Probability-weighted + standalone separation |
| (extension) Exclusivity | 4107327 | Price vs certainty tradeoff |
| (extension) Antitrust | 4107800 | Reverse break fee and certainty |

All listed concepts now covered.

### Chapter 5 — Execution, Comments, and Quality Control

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Turn | 4340031 (NEW) | Mgmt prep is the highest-stakes "turn" |
| Markup | 4340030 (NEW) | Tie-out is the markup-discipline workflow |
| Version control | 4103015 | Final-vs-final problem |
| Tie-out | 4340030 (NEW) | Full workflow + stale-paste failure mode |
| Footnotes | 4105074 | 9.5x vs 9.1x mismatch |
| Diligence tracker | 4107320 | Q&A log discipline |
| Management presentation | 4340031 (NEW) | Q&A + rehearsal + mock |
| (extension) Currency | 4107794 | Cross-border FX discipline |
| (extension) Formula break | 4107793 | Trace + alert workflow |
| (extension) Distribution list | 4107799 | Confidentiality discipline |

All listed concepts now covered.

### Capstone — Sell-Side Analyst Packet and Synthesis (NEW)

| Syllabus capstone work-output | Question id(s) | Notes |
|---|---|---|
| Company profile | 4340101 | Embedded in Northwind buyer-list scenario |
| Financial summary | 4340100 | EBITDA / growth / size given |
| Valuation range | 4340100 | Football field reconciliation |
| Buyer rationale page | 4340101 | Strategic vs sponsor segmentation |
| Diligence tracker | 4340101 | Customer concentration gating |
| Client-ready recommendation | 4340102 | Strategic-vs-sponsor calibration |

All capstone work-output elements addressed by one of the three questions.

---

## 5. Difficulty arc per chapter (post-review)

For each chapter, the entry question, midpoint, and closing question. The arc should move from one-concept to multi-concept.

- **Ch1 Workflow** — open: `Coverage vs product` (4200010, single org-structure concept) → mid: `CIM vs teaser sequence` (4200012, document-sequence ordering) → close: `Signing vs closing` (4200015, the highest-stakes procedural distinction in M&A).
- **Ch2 Accounting** — open: `Revenue bridge` (4103008, driver-based modeling) → mid: `Working capital forecast` (4105067, DSO mechanics) → close: `EBITDA add-back discipline` (4340001, multi-line QoE judgment with selective acceptance).
- **Ch3 Valuation** — open: `Multiple selection` (4103010, single concept) → mid: `Enterprise value bridge` (4105069, clean arithmetic) → close: `Football field synthesis` (4340011, integration of all four methodologies into an IC anchor).
- **Ch4 M&A** — open: `Process letter` (4103012, single procedural concept) → mid: `Working capital peg` (4103013, value-leakage mechanism) → close: `Sources and uses / debt capacity` (4340021, full LBO bridge with leverage stack judgment).
- **Ch5 Execution** — open: `Version control` (4103015, single workflow rule) → mid: `Footnote mismatch` (4105074, escalation judgment) → close: `Management presentation prep` (4340031, multi-step prep workflow under senior-banker absence).
- **Capstone** — three integrative questions on a shared deal (Northwind Industries). 4340100 → 4340101 → 4340102 maps directly to the syllabus work-output: valuation range → buyer rationale → recommendation.

---

## 6. Capstone design rationale

The syllabus capstone work-output is six artifacts: company profile, financial summary, valuation range, buyer rationale page, diligence tracker, and client-ready recommendation. As with the VC flagship, a natural temptation is to author six questions — one per artifact. That would be wrong: the capstone is supposed to test **integration**, not **artifact recall**.

The three-question structure adopted here uses a **shared fictional client (Northwind Industries)** across all three, with each question targeting a different decision point on the same deal:

1. **Football field reconciliation** — forces the learner to *integrate* the four valuation methodologies into an IC anchor and to push back on a client who wants to over-anchor in the CIM. Integrates Ch1 (client management), Ch3 (methodology), Ch4 (buyer behavior).
2. **Buyer-list construction** — forces the learner to *integrate* client direction (CEO excludes two strategics), confidentiality discipline (customer concentration data tiering), and buyer-rationale logic (strategic vs sponsor segmentation). Integrates Ch1, Ch4, Ch5.
3. **Recommendation calibration** — forces the learner to pick the right *form* of the recommendation (verdict + conditions + leverage move + fallback). Integrates Ch3, Ch4, Ch5, and Ch1.

The Northwind details are deliberately concrete: $480M revenue, $62M adjusted EBITDA, family-owned, US specialty industrial distributor. Realistic enough that the football-field math hangs together (62 × 9.0x = $558M; 62 × 11.0x = $682M) and the strategic-vs-sponsor decision feels grounded.

The fictional company name "Northwind Industries" was chosen because (a) it is non-conflicting (does not collide with the VC flagship's FieldChart) and (b) it is industry-realistic for a sell-side analyst exercise. Northwind is the canonical Microsoft sample database, which means it is unlikely to conflict with any real company name in the bank.

---

## 7. Flags for human review

Items the next reviewer should look at:

1. **WACC inputs will date.** Question 4340010 uses 4.0% risk-free, 5.5% ERP, 25% marginal tax rate — these are 2026 US norms. ERP especially is a moving consensus number; mark for `lastReviewed` once schema lands and refresh every two years.
2. **LBO leverage benchmark will date.** Question 4340021 uses 6.0x first lien / 1.5x second lien at 7.5x total. These were market-clearing levels for software in 2024–2026 but compress in tighter credit cycles. Acceptable as a worked example; verify if benchmarks shift materially.
3. **Accretion/dilution Q uses a static P/E framework.** 4340020 uses 22x / 16x — a clean directional rule. Real public-company M&A would also need to consider stock-vs-cash mix, financing assumption, and synergy phasing. Out of scope for a single question; a sequel Q on accretion/dilution math (full EPS bridge with synergies and financing) could be authored in a future pass.
4. **No regulatory text needs verification.** The closest is `Regulatory closing risk` (4107800), which uses generic "HHI changes, market definitions, remedies" language and does not name specific authorities. Safe.
5. **Tie-out workflow is described in prose only.** Question 4340030 names the workflow (every number sourced, every appearance consistent, dates/labels checked) but does not link to a real tie-out template or example. An adjunct artifact (sample CIM page with tie-out markup) would lift the question if the schema admits image attachments in a future pass.
6. **Capstone Northwind valuations.** The football-field numbers in 4340100 ($560M–$870M range on $62M EBITDA) cluster around 9.0x–14.0x — realistic for a specialty distributor sell-side in 2026, but high specialty distribution multiples have compressed in some cycles. Acceptable as a teaching example; flagged for periodic refresh.
7. **No image or video adjuncts** authored in this pass. The flagship-review template recommendation about cap-table diagrams (from the VC review) applies equally here for football-field illustrations, sources-and-uses bridges, and accretion/dilution bridges. Out of scope for this pass.

---

## 8. What made this review good — the one-paragraph summary

The review separated three things that usually get conflated: **distractor quality** (Wave 4's job, mostly done — but seven residual strawmen still tightened here), **coverage at the concept level** (eight genuine gaps: capex, QoE, WACC, football field, accretion/dilution, sources/uses, tie-out, management prep — all closed in this pass), and **pedagogical structure** (difficulty arc per chapter, capstone integration on a shared fictional client, voice consistency with `jargonBusters.ts`). The biggest wins were the three Northwind capstone questions (which the syllabus explicitly called for and the bank had never carried) and the eight coverage gap-fills — each of which addresses a real analyst-level skill the chapter previously implied but did not test. Distractor tightenings removed the residual strawmen ("CEO biography length", "stop having a balance sheet", "FX rates are best left mysterious", "send first and recall for cardio"). The total cost was 11 new questions and 7 light distractor edits; the value is that the track now reads end-to-end as a career-changer course — coverage, capstone, voice — at the same bar as the VC flagship. **The template held: the same seven principles produced the same kind of lift in a different domain.** That is the evidence that the flagship review process generalizes.

# Audit: quantAdvanced

**Syllabus**: [`src/data/syllabi/career/quant_interview_advanced.md`](../../../src/data/syllabi/career/quant_interview_advanced.md)
**Track id**: `quantAdvanced`
**Tier**: career (`ageGroup: 'career-hopper'`)
**Region**: Jurisdiction-neutral (quant desk content is global)
**Status**: `playable` — wired and serving questions

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Advanced Interview Map | ✅ | Formula-without-assumptions (InterviewReasoningPolish), role-specific reasoning |
| 2. Derivatives and No-Arbitrage Intuition | ✅ | Put-call parity, vega of a forward, dominated trades, tiny-umbrella hedge, replication intuition |
| 3. Options, Greeks, Volatility | ✅ | Delta-neutrality, gamma-neutrality, implied volatility, risk-flag scenarios, vega coverage |
| 4. Fixed Income and Rates | ✅ | Risk-free rate, duration shortcut (InterviewReasoningPolish), curve-shape reasoning |
| 5. Stochastic Processes and Ito Intuition | ⚠️ partial | Ito's lemma surfaces via title allowlist; explicit martingale / change-of-measure / GBM coverage is thin |
| 6. Numerical Methods and Simulation | ⚠️ partial | Newton's Method, gradient descent, Cholesky / LU / QR / SVD decompositions, Lagrange multipliers (all routed via title allowlist). Monte Carlo / variance-reduction / discretization-error / convergence coverage is thin |
| 7. Risk, Model Risk, XVA Vocabulary | ⚠️ partial | VaR comfort and backtest smell test cover the territory; CVA / FVA / counterparty / model-validation depth is thin |
| 8. Advanced Mock Desk Interview | ✅ | InterviewReasoningPolish covers Black-Scholes assumption discipline, duration-shortcut nuance, VaR-in-calm-periods, overfitting / out-of-sample. Limited but on-point. |

**Chapter taxonomy.** Same situation as `quant`: `quant.ts` uses analytic chapter labels ("Finance", "Stochastic Calculus", "Linear Algebra", "Numerical Methods") that map but don't literally match the syllabus's "Chapter N: …" naming. `careerAgentGeneratedInterviewReasoningPolish.ts` uses "Advanced Quant: …" prefixes for its four meta-skill questions. Acceptable; content quality is high enough that taxonomy is cosmetic.

**Routing fragility.** Every question in `quant.ts` that is NOT in the `quantInterviewCoreChapters` set OR the `quantInterviewCoreTitles` allowlist lands here. That includes a lot of correctly advanced content (calculus, linear algebra, derivatives, stochastic, numerical methods) but the implicit-default pattern is brittle.

## Per-file recommendations

| File | qAdv Q's | Bucket | Reason |
|---|---|---|---|
| [`quant.ts`](../../../src/data/questionCatalog/quant.ts) | ~220 routed to `quantAdvanced` (out of ~250 total) | **KEEP** | **Gold standard.** Hand-authored, deep per-distractor explanations, multi-paragraph lessons. Covers calculus (Taylor, L'Hôpital, e^π vs π^e), linear algebra (positive definite, trace/determinant, column space), derivatives (put-call parity, vega, delta/gamma neutrality), stochastic (Ito, GBM, martingale fragments), numerical methods (Newton, decompositions, gradient descent), and risk (VaR intuition, backtest smell test). Voice template for the catalog. |
| [`careerAgentGeneratedInterviewReasoningPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedInterviewReasoningPolish.ts) (`quantAdvanced` section) | 4 | **FIX** | Four meta-skill questions (model assumptions, duration nuance, VaR in calm, overfitting). Content is good and complements `quant.ts`'s technical bank. All distractors use file-wide `DEFAULT_FLAW` constant → auto-FIX. Rewrite per-distractor. |

**Net effect:** ~224 advanced quant questions across 2 files → ~220 kept + 4 fixed = ~224 questions of consistently high quality. No deletion required.

## Open actions (priority order)

1. **Replace the title-allowlist split with explicit per-question `track` metadata.** Same finding as `quant.md`. The current default-to-advanced routing is fragile — a new "Brain Teasers" puzzle silently goes to core, a new "Finance" question silently goes to advanced, regardless of difficulty. Tag at authoring time.
2. **Author 6–10 numerical-methods questions** to close Chapter 6 (Monte Carlo bias, variance reduction techniques, finite-difference discretization error, calibration stability, convergence diagnostics). Coverage is currently limited to decompositions and optimization primitives.
3. **Author 6–8 stochastic / measure-theory questions** for Chapter 5 (explicit Ito's-lemma application, martingale identification, change-of-measure intuition, geometric vs arithmetic Brownian motion). Currently spread across a few titles.
4. **Author 4–6 XVA / model-risk questions** for Chapter 7 (CVA vs FVA distinction, counterparty exposure framing, model validation challenge, scenario stress design).
5. **Fix the 4 InterviewReasoningPolish questions' per-distractor explanations** to match the `quant.ts` standard.
6. **No `region` tag needed** — jurisdiction-neutral.
7. **No `lastReviewed` urgency** — though XVA conventions evolve; a periodic refresh on Risk-tagged questions is healthy.

## Estimated effort

- Title-allowlist → explicit `track` metadata migration: shared with `quant.md` (~2 hours total)
- Numerical methods + stochastic + XVA authoring: ~8 hours (~20 questions × ~24 min each, given the technical depth)
- InterviewReasoningPolish per-distractor rewrite: ~30 min

**~1.5 working days at this depth.** Almost all the effort is closing genuine coverage gaps, not fixing existing content.

## Notes for next auditor

The split between `quant` and `quantAdvanced` is one of the cleanest design decisions in the catalog. Don't collapse them. The content quality is the highest in the career tier — hand-authored, source-attributed, with teaching-grade lessons. If anything, this track has too much depth in some chapters (linear algebra, brainteasers cross-listed from `quant`) and too little in others (numerical methods, XVA). The fix is targeted authoring, not consolidation.

Note that `quantAdvanced` shares some derivatives content with `series86` (P/E, sum-of-the-parts) and `cfaLevelOne` (put-call parity, futures mark-to-market). The split is intentional — `quantAdvanced` is for desk-quant interview interviewees who already have CFA Level I-ish baseline. Keep the duplication; the audiences and depth differ.

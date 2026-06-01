import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// HEDGE FUNDS CHAPTER 3 — Modeling, Valuation, and Scenario Work
// ----------------------------------------------------------------------------
// 43 questions (IDs 4400200–4400242) extending the existing 7-question
// bank for Hedge Funds Ch. 3 in careerAgentGeneratedRoadmapFinance.ts
// (IDs 4103044, 4103045, 4105110, 4105111, 4107390, 4107394, 4107854).
//
// Coverage targets:
//   - Forecast structure for HF use (short-horizon, KPI-driven, not 5-year ER)
//   - Quick valuation methods (EV/EBITDA, EV/Sales, P/E, sector multiples)
//   - Scenario tree construction (base/bull/bear, prob-weighted expected value)
//   - Reverse DCF (solve for implied growth/margin, plausibility check)
//   - Sum-of-the-parts on conglomerates and spinoff candidates
//   - Catalyst-driven valuation (catalyst path separate from steady state)
//   - Long-short pair math (beta-, sector-, factor-neutral hedges)
//   - Risk-reward asymmetry (30%/10% thresholds, R/R to size)
//   - Earnings preview math (consensus, what's priced in, expected move)
//   - Working backwards from price (implied EV/EBITDA, sensitivity bands)
//   - Distressed / event-driven (cap structure waterfall, recovery, payoff)
//   - M&A arb math (gross spread, time-adjusted IRR, break probability)
//   - Position-level economics (borrow, financing, dividends on shorts)
//
// Voice: matches jargonBusters and existing canonical question banks —
// bespoke wrong-answer rationales, US-GAAP context, no strawman distractors.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe HF Ch3 canonical bank'

function q(
  id: number,
  topic: Topic,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string][],
  lesson: string,
): Question {
  return makeSimpleQuestion(
    id,
    topic,
    chapter,
    title,
    prompt,
    correct,
    wrong.map(([label, why]) => [label, why, lesson] as [string, string, string]),
    lesson,
    SOURCE,
  )
}

const CHAPTER = 'Modeling, Valuation, and Scenario Work'

// Difficulty distribution: 13 at 3, 22 at 4, 8 at 5.
export const HF_CH3_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Forecast structure for HF use
  4400200: 3, // HF forecast horizon vs sell-side ER
  4400201: 3, // KPI-driven model vs GAAP-earnings model
  4400202: 4, // Quarter-by-quarter build for an earnings event
  4400203: 4, // Choosing which line items deserve a driver
  // Quick valuation methods
  4400204: 3, // Multiple choice for unprofitable growth
  4400205: 3, // Multiple choice for mature cash-flow business
  4400206: 4, // EV/EBITDA cleanup adjustments
  4400207: 4, // Sector-specific multiples (banks, REITs, energy)
  // Scenario tree construction
  4400208: 3, // Base/bull/bear probability weights that sum to 1
  4400209: 4, // Expected value vs base case
  4400210: 4, // Path-dependent vs terminal scenario
  4400211: 5, // Loss-weighted sizing from scenario tree
  // Reverse DCF
  4400212: 4, // Solving for implied revenue growth
  4400213: 4, // Implied terminal margin plausibility
  4400214: 5, // Reverse DCF as a falsifier
  // Sum-of-the-parts
  4400215: 3, // SOTP on a conglomerate
  4400216: 3, // Stub value of the parent
  4400217: 4, // Spinoff candidate value gap
  // Catalyst-driven valuation
  4400218: 3, // Separating catalyst from steady-state DCF
  4400219: 4, // Time-decay on catalyst conviction
  4400220: 4, // Re-rating multiple expansion sizing
  // Long-short pair math
  4400221: 3, // Beta-neutral hedge ratio
  4400222: 5, // Sector-neutral pair vs single-name short
  4400223: 4, // Factor-neutral construction
  4400224: 5, // Residual exposure after intended hedges
  // Risk-reward asymmetry
  4400225: 3, // 3:1 R/R threshold and rejection rule
  4400226: 4, // R/R to position size mapping
  4400227: 4, // Downside scenario must be drawn first
  // Earnings preview math
  4400228: 4, // What's priced in via consensus
  4400229: 4, // Expected move from vol surface
  4400230: 5, // Buyside vs sellside whisper number
  // Working backwards from price
  4400231: 3, // What must be true to justify current multiple
  4400232: 4, // Sensitivity bands around the implied case
  4400233: 5, // Two-variable break-even on growth and margin
  // Distressed / event-driven
  4400234: 4, // Cap structure waterfall and recovery
  4400235: 4, // Payoff diagram for an event setup
  4400236: 5, // Fulcrum security selection
  // M&A arb math
  4400237: 3, // Gross spread and annualized IRR
  4400238: 4, // Probability-weighted deal value
  4400239: 5, // Antitrust break probability calibration
  // Position-level economics
  4400240: 3, // Borrow cost drag on short alpha
  4400241: 4, // Financing cost on margined longs
  4400242: 4, // Dividend payment obligation on shorts
}

export const hfCh3Questions: Question[] = [
  // -------------------------------------------------------------------------
  // FORECAST STRUCTURE FOR HF USE (4400200–4400203)
  // -------------------------------------------------------------------------
  q(4400200, 'Career Skills', CHAPTER, 'HF forecast horizon vs sell-side ER',
    'A sell-side analyst published a 5-year DCF on a software name. Your PM wants the model rebuilt for HF use ahead of the next print. What is the right forecast horizon to anchor on?',
    'One to two quarters of granular KPI work that ties to the next one or two prints, with a thinner outyear shell only to anchor terminal value',
    [
      ['A 10-year DCF with detailed line items each year so the long-term thesis is fully expressed', 'A 10-year line-item build is sell-side ER discipline, not HF discipline. The fund makes or loses money on the next one or two prints — the outyear precision is false comfort.'],
      ['Three years of annual numbers because that matches the fund\'s typical holding period', 'Annual numbers hide the quarterly path that drives mark-to-market P&L. A three-year annual model cannot tell you what consensus is wrong about for next quarter, which is the trade.'],
      ['No forecast at all because the trade is about positioning and flow, not fundamentals', 'Even positioning trades need a fundamental anchor to size against. Skipping the forecast means there is no falsifier when the position moves against you.'],
    ],
    'HF models are weighted toward the next one to two prints because that is where variant perception cashes in. The outyear shell exists to keep the terminal anchored, not to win arguments with the sell side on year-five EPS.'),

  q(4400201, 'Career Skills', CHAPTER, 'KPI-driven model vs GAAP-earnings model',
    'You are modeling a subscription business. The sell-side model builds revenue from reported GAAP revenue growth rates. What should the HF model look like instead?',
    'A bottom-up build from net new ARR, gross churn, expansion, and billings — tied back to GAAP revenue with a deferred-revenue bridge so the KPI path drives the print',
    [
      ['The same GAAP-revenue growth-rate approach, since GAAP is what the company reports and the market trades', 'Growth-rate-on-growth-rate models cannot tell you why the rate is changing. By the time the GAAP line moves, the KPI shift is already in the stock — the HF edge is upstream.'],
      ['A simple percent-of-TAM model since SaaS markets are large and the company will capture more of it', 'Percent-of-TAM models are top-down marketing math. They do not let you test next quarter\'s billings or churn, which is what the trade actually depends on.'],
      ['A non-GAAP-only model that ignores deferred revenue because cash bookings are what matters', 'Ignoring deferred revenue breaks the bridge from KPIs to the print the market reacts to. The fund needs both — the cash story and how it shows up as GAAP revenue.'],
    ],
    'HF models build from the operational KPIs that actually move first — net new ARR, churn, expansion, billings — and reconcile to GAAP through the deferred-revenue bridge. That structure is what lets you call the next print before consensus does.'),

  q(4400202, 'Career Skills', CHAPTER, 'Quarter-by-quarter build for an earnings event',
    'Earnings are in three weeks. Your PM asks for "the work" before the print. Which build is most useful to put in front of him?',
    'A quarterly model with explicit KPI assumptions for the upcoming print and the two after, plus a bridge from your numbers to consensus on revenue and EPS',
    [
      ['An annual model with full-year revenue and EPS for the next three years, since that is how the company guides', 'Annual-only modeling means there is no way to argue with consensus on the print three weeks away. The fund\'s edge is the quarter, not the year.'],
      ['A DCF with WACC sensitivity tables to determine intrinsic value before the print', 'A WACC sensitivity is not useful three weeks ahead of a print. The PM needs to know what you think the quarter will print and why your number differs from the Street.'],
      ['A summary of sell-side consensus with the high, low, and average estimates compiled', 'Consensus aggregation is research support, not research. Without your own number and the variant view behind it, there is no trade to put on.'],
    ],
    'Pre-print work is quarterly, KPI-driven, and explicitly bridged to consensus. The PM is buying your variant view on the print, not your DCF — and they need to see exactly where you differ from the Street and why.'),

  q(4400203, 'Career Skills', CHAPTER, 'Choosing which line items deserve a driver',
    'You have limited time to model a name before a print. Which line items most deserve a real driver build versus a held-flat assumption?',
    'The two or three line items where consensus is most likely to be wrong and the company\'s next-quarter operating P&L is most sensitive — usually a top-of-funnel KPI, a margin lever, and the buyback or share count',
    [
      ['Every operating line should be driver-built so the model is fully bottom-up and defensible', 'Driver-building every line in limited time produces a half-built model on the lines that matter. Time allocation is the discipline — not full coverage.'],
      ['The non-operating lines (other income, FX, tax rate) since those create the EPS surprises', 'Non-operating noise can move EPS but rarely changes the thesis. Spending modeling time below the line is misallocated — the trade is usually about the top of the P&L.'],
      ['The least-disclosed lines, since opaque disclosure is where the edge lives', 'Opacity is not the same as importance. A poorly disclosed line that does not move the print is a waste of modeling time, regardless of how interesting the disclosure puzzle is.'],
    ],
    'Driver allocation is a triage decision. The lines that get full driver builds are the ones where your variant view sits — usually the top-of-funnel KPI, the key margin lever, and capital return. Everything else can be held flat or scaled, because the fund is not paid for completeness.'),

  // -------------------------------------------------------------------------
  // QUICK VALUATION METHODS (4400204–4400207)
  // -------------------------------------------------------------------------
  q(4400204, 'Career Skills', CHAPTER, 'Multiple choice for unprofitable growth',
    'You are valuing a high-growth software company with negative GAAP and adjusted EBITDA. Which multiple is most useful as the primary valuation anchor?',
    'EV/Sales with a forward revenue base, cross-checked against rule-of-40 and gross margin so the multiple reflects revenue quality, not just growth rate',
    [
      ['Trailing P/E adjusted to exclude stock-based comp until earnings turn positive', 'A P/E that requires excluding SBC to function is not a P/E — it is a non-GAAP construction with one of the largest real expenses removed. Markets discount that approach for a reason.'],
      ['EV/EBITDA using management\'s adjusted EBITDA add-backs for SBC and one-time items', 'Adjusted EBITDA with SBC added back is the textbook example of a multiple that flatters loss-making businesses. Funds use it, but it is not the primary anchor — and the add-backs need to be questioned.'],
      ['DCF with a 10-year explicit forecast, since multiples are not appropriate for unprofitable companies', 'A 10-year DCF on an unprofitable company is mostly terminal-value-driven and extremely assumption-sensitive. It is a cross-check, not the primary anchor for a quick HF valuation.'],
    ],
    'EV/Sales is the working anchor for unprofitable growth because it normalizes against revenue without depending on management add-backs. The cross-check is whether the revenue is high-quality — rule-of-40, gross margin, retention — so the multiple is not just paying for unprofitable growth.'),

  q(4400205, 'Career Skills', CHAPTER, 'Multiple choice for mature cash-flow business',
    'You are valuing a mature industrial with stable margins, ~3% organic growth, and meaningful capex. What is the most useful primary multiple?',
    'EV/EBIT or P/FCF, since both reflect the capex intensity and steady-state economics that EV/EBITDA hides',
    [
      ['EV/EBITDA because that is the standard industrial multiple', 'EV/EBITDA flatters capex-heavy businesses by ignoring the cost of maintaining the asset base. For a mature industrial, EV/EBIT or P/FCF is more honest.'],
      ['EV/Sales because revenue is the most stable line in a mature business', 'EV/Sales throws away the margin information that is the whole point of a mature cash business. It is the wrong multiple unless margins are too volatile to anchor on.'],
      ['P/E using GAAP earnings without any adjustment', 'Trailing GAAP P/E mixes leverage and tax-rate noise that EV-based multiples strip out. It is usable as a cross-check but not the primary anchor when capex and leverage matter.'],
    ],
    'Mature, capex-heavy businesses live or die by the spread between EBITDA and FCF. EV/EBIT and P/FCF surface that spread; EV/EBITDA hides it. The choice of multiple has to match the business model — not the convention of the sector.'),

  q(4400206, 'Career Skills', CHAPTER, 'EV/EBITDA cleanup adjustments',
    'You are computing forward EV/EBITDA on a target. What is the most important set of cleanup adjustments before comparing it to peers?',
    'Add operating lease liabilities to EV (or use IFRS 16 EBITDA consistently), subtract net cash properly, and use a comparable EBITDA definition across the peer set — same SBC treatment and one-time items',
    [
      ['Use the headline trailing EV from the screen and divide by management-adjusted EBITDA', 'Screen EV often misses lease liabilities and stock-based comp dilution; management-adjusted EBITDA usually adds back SBC. The multiple looks tight against peers but is not comparable.'],
      ['Strip out all capex from EBITDA to compare cash-generating ability', 'Stripping capex out of EBITDA turns it into something close to EBIT minus D&A noise — which is fine, but call it that. Mixing and matching definitions across peers is what destroys comparability.'],
      ['Use net debt at book value and ignore preferred stock and minority interest because they are usually small', 'Preferred stock and minority interest are part of EV and frequently large enough to move the multiple by 5–10%. Ignoring them is a common mistake in junior models.'],
    ],
    'Multiple comparability is mostly an accounting cleanup exercise. Leases, SBC, one-time items, and the full EV bridge (preferred, minorities, NCI) have to be treated the same across the peer set, or the multiple is comparing apples to a different fruit.'),

  q(4400207, 'Career Skills', CHAPTER, 'Sector-specific multiples',
    'A generalist analyst is valuing a regional bank, a REIT, and an E&P producer with the same EV/EBITDA framework. What should they do instead?',
    'Use P/TBV and ROTE for the bank, P/AFFO and cap rate for the REIT, and EV/EBITDAX or NAV per share for the E&P — each sector has a metric that captures its economics',
    [
      ['Apply EV/EBITDA uniformly so the three valuations are directly comparable across the portfolio', 'Uniform multiples across structurally different sectors are a false comparability. A bank\'s EBITDA is not a meaningful number; a REIT\'s depreciation is not real capex.'],
      ['Use P/E across all three since earnings are the universal denominator', 'P/E does not work for REITs (where depreciation distorts earnings) or E&Ps (where reserves are the asset, not the income statement). Universal P/E is generalist shorthand, not analysis.'],
      ['Use DCF only, since sector multiples are too specialized for a generalist to learn quickly', 'DCFs across structurally different businesses still rest on sector-specific drivers. Avoiding sector multiples does not avoid the need to learn the sector\'s economics.'],
    ],
    'Sector multiples encode the economics the sector actually trades on. P/TBV and ROTE for banks, P/AFFO and cap rate for REITs, EV/EBITDAX or NAV for E&P — generalists who skip this end up valuing every business as a generic industrial, which is exactly the trap the specialist exploits.'),

  // -------------------------------------------------------------------------
  // SCENARIO TREE CONSTRUCTION (4400208–4400211)
  // -------------------------------------------------------------------------
  q(4400208, 'Career Skills', CHAPTER, 'Base/bull/bear probability weights',
    'Your scenario model has base ($120), bull ($160), and bear ($60) cases. You assign probabilities of 50%, 35%, and 20%. What is wrong?',
    'Probabilities must sum to 100% — 50 + 35 + 20 = 105%, so the weights are not coherent and any expected value computed from them is meaningless',
    [
      ['Nothing — over-weighting reflects optimism about the trade', 'Over-summing probabilities is not optimism, it is a math error. Expected value off non-coherent weights does not have an interpretation.'],
      ['The bear weight is too high for a long; 5% would be more appropriate', 'Lowering the bear weight to make the math work is fitting the answer to the prior. The fix is recalibrating all three weights to sum to 100%, not suppressing the bear.'],
      ['The case prices are too far apart — they should be within 20% of base', 'Scenario spread should reflect the underlying outcome distribution, not a cosmetic range. The problem here is the weights, not the prices.'],
    ],
    'Scenario probabilities must sum to 100% before any expected value calculation is run. The discipline forces the analyst to commit to a coherent view of the world — and to defend each weight independently rather than letting one drift.'),

  q(4400209, 'Career Skills', CHAPTER, 'Expected value vs base case',
    'Base case = $120 (50%), bull = $160 (30%), bear = $60 (20%). Stock trades at $110. The PM asks for the expected value and whether to size the position. What is the expected value and the right framing?',
    '$120 expected value vs $110 stock — only ~9% upside on expected value, and the bear loss (~45%) is large relative to the bull gain (~45%) — the trade looks small, not asymmetric',
    [
      ['$120 EV with strong asymmetry because the bull gain ($40) exceeds the bear loss ($50 minus $60 = $50 hedge)', 'The bear loss from $110 is $50, not $60 less anything. The framing arithmetic is sloppy and the asymmetry argument fails — bear loss exceeds bull gain.'],
      ['$140 EV because the base and bull cases dominate and the bear is unlikely', 'Pricing the bear at 0% weight is not the model the analyst built. EV must use the assigned weights, not an informal "the bear is unlikely" rephrasing.'],
      ['The base case price of $120 is the only number that matters — scenario weighting is academic', 'Using the base case alone discards the entire point of the scenario tree. Position sizing requires the expected value and the dispersion, not just the central scenario.'],
    ],
    'Expected value math is 0.5×$120 + 0.3×$160 + 0.2×$60 = $120. Stock at $110 gives 9% upside on EV with roughly symmetric loss in the bear — the scenario tree has revealed that the trade is small, not asymmetric. That is exactly what the tree is for.'),

  q(4400210, 'Career Skills', CHAPTER, 'Path-dependent vs terminal scenario',
    'Your bear case is "stock trades down 40% if the company misses on margin in Q3". The PM asks what happens in the bear after Q3 if the thesis recovers. What is the right structural answer?',
    'A path-dependent tree should branch at the catalyst — bear at Q3 print, then recovery vs further decline conditional on management response — terminal scenarios alone hide the drawdown risk',
    [
      ['Terminal scenarios only — the recovery is built into the bull weight, so the bear is just the loss case', 'Collapsing path-dependent risk into a single terminal bear case hides the drawdown the fund actually experiences. The fund\'s VaR is the path, not the terminal.'],
      ['Use a single bear case with a 25% loss to average the drawdown and recovery', 'Averaging drawdown and recovery into a single terminal point loses the information the PM is asking for. The risk function is convex in drawdown size.'],
      ['Scenario trees are inherently terminal — path dependence is a separate exercise and should not be combined', 'Path dependence is exactly what scenario trees handle well — branch at catalysts and let the conditional probabilities update. Refusing to branch is leaving information on the table.'],
    ],
    'Path-dependent scenario trees branch at catalysts so the conditional structure of outcomes is explicit. Terminal-only trees hide the drawdown that matters to position sizing — the PM needs to see what happens in the bear *and* how it could recover, not just the endpoint.'),

  q(4400211, 'Career Skills', CHAPTER, 'Loss-weighted sizing from scenario tree',
    'Two longs both have +20% EV. Long A: base 50% +15%, bull 30% +40%, bear 20% −20%. Long B: base 60% +20%, bull 20% +50%, bear 20% −10%. Which is bigger, and why?',
    'Long B — same EV but smaller bear loss, so loss-weighted sizing (Kelly-flavored or simply expected-value-over-downside) supports a bigger position; A has more dispersion for the same EV',
    [
      ['Long A, because the bull case is bigger and that is where the convexity comes from', 'Sizing on upside alone ignores the larger drawdown in A. A drawdown that big eats into compounding even at the same EV.'],
      ['Same size for both since the expected values match', 'Equal EV is not equal risk. Sizing has to reflect the loss distribution, not just the mean — that is the whole point of risk-weighted sizing.'],
      ['Long A, because higher bull-case upside is what justifies hedge fund risk-taking', 'HF risk-taking is supposed to be asymmetric in the analyst\'s favor — a wider distribution at the same EV is not asymmetric, it is just more variance.'],
    ],
    'Loss-weighted sizing weights position size against the bear-case drawdown, not just the EV. Same-EV positions with smaller bears get bigger sizes — that is how funds compound without giving back gains in drawdowns. The discipline forces the analyst to look at dispersion, not just the mean.'),

  // -------------------------------------------------------------------------
  // REVERSE DCF (4400212–4400214)
  // -------------------------------------------------------------------------
  q(4400212, 'Career Skills', CHAPTER, 'Solving for implied revenue growth',
    'A name trades at 12x forward EV/Sales. You back-solve a DCF holding margins and capex at peer levels and find the market is implying 35% revenue CAGR for the next 8 years. The company has done 22% over the last 3 years. What is the takeaway?',
    'The market is pricing in a sustained acceleration the company has not yet shown — that is a falsifiable claim and the work is to ask what would have to be true for 35% to hold',
    [
      ['12x EV/Sales is high but justified — markets are usually right and 35% is achievable in software', '"Markets are usually right" is not a thesis. The point of a reverse DCF is to surface the implied claim and then test it; deferring to the price is skipping the work.'],
      ['The implied growth is too high so the stock is automatically a short', 'Reverse DCF reveals the implied claim; it does not deliver a verdict by itself. The short case requires arguing that the company *cannot* hit 35%, not that the bar is high.'],
      ['The 8-year horizon is arbitrary — extending it to 15 years makes the implied growth more reasonable', 'Stretching the horizon to make the implied growth look reasonable is exactly the move reverse DCF is designed to expose. The horizon is a choice and the bar still has to be defended.'],
    ],
    'Reverse DCF surfaces the growth or margin claim the market is making. The HF discipline is then to ask whether that claim is plausible against the company\'s history, the unit economics, and the competitive structure — turning a vague valuation debate into a specific, testable bar.'),

  q(4400213, 'Career Skills', CHAPTER, 'Implied terminal margin plausibility',
    'A reverse DCF on a hardware company implies a 28% steady-state EBIT margin. The company is at 12% today, the best comp runs at 18%, and the sector best-in-class is 22%. What is the right read?',
    'The implied 28% sits above the sector best-in-class, so the market is pricing structural margin leadership the company has not earned — the thesis question is whether the gap is justified by something specific (mix, pricing power, scale)',
    [
      ['28% is achievable because every hardware company eventually scales margins through fixed-cost leverage', '"Eventually" is not a thesis. Sector best-in-class at 22% is data; 28% requires a specific structural reason the company will exceed peers.'],
      ['The reverse DCF must be wrong because terminal margins should be capped at the current level', 'Terminal margins are not capped at current — companies do expand margins. The point is whether *this* company has a credible path beyond the best peer, not that expansion is impossible.'],
      ['Margin plausibility is subjective and not a useful constraint in a reverse DCF', 'Plausibility against peers is exactly the constraint that makes reverse DCF useful. Removing it makes any price defensible, which is the trap.'],
    ],
    'Reverse DCF on terminal margins is most useful when the implied number is benchmarked against the sector best-in-class. Implied margins that exceed the best peer require a specific structural argument — mix, pricing power, scale — not "eventually" or "AI will help".'),

  q(4400214, 'Career Skills', CHAPTER, 'Reverse DCF as a falsifier',
    'Your PM accepts your forward DCF that fair value is $180 vs $130 stock. He asks: "What\'s the most useful thing reverse DCF adds here?" Best answer?',
    'It tells you what assumptions the market is using — if the market\'s implied growth or margin is structurally lower than your case, you have a measurable variant view; if it is similar, the gap may be a multiple-rerating debate, not a fundamental one',
    [
      ['Reverse DCF confirms your fair value when the implied assumptions match your forecast', 'A reverse DCF that matches your forecast does not confirm fair value — it just says your case and the market\'s case are the same. The trade has to come from somewhere else.'],
      ['Reverse DCF is mainly a sanity check on terminal growth — it does not change the thesis', 'Limiting reverse DCF to terminal growth misses the more useful application: comparing the market\'s implied path to yours and locating exactly where the disagreement is.'],
      ['Reverse DCF should produce a higher fair value than the forward DCF or the model is too conservative', 'Reverse DCF does not produce a fair value at all — it produces implied assumptions. Confusing the two is a common misuse.'],
    ],
    'Reverse DCF is most useful as a variant-view detector. It tells you where the market\'s implied assumptions sit relative to yours, which lets you locate the trade — fundamental disagreement, multiple rerating, or simply consensus matching your case. That diagnosis is what a forward DCF alone cannot give you.'),

  // -------------------------------------------------------------------------
  // SUM-OF-THE-PARTS (4400215–4400217)
  // -------------------------------------------------------------------------
  q(4400215, 'Career Skills', CHAPTER, 'SOTP on a conglomerate',
    'A diversified industrial owns four segments: a chemicals business (peer EV/EBITDA 9x), a defense unit (peer 14x), a consumer brand (peer 18x), and a services arm (peer 11x). The company trades at a blended 10x. What is the SOTP doing for you?',
    'It estimates what each segment would be worth at peer multiples, sums to enterprise value, subtracts net debt and corporate overhead, and identifies the conglomerate discount — which becomes the catalyst question (spinoff, breakup, or persistent discount)',
    [
      ['Apply the blended 10x to total EBITDA — the conglomerate trades as one unit so segment multiples are theoretical', 'Trading as one unit is exactly the discount the SOTP is meant to surface. Refusing to do the segment math means you cannot argue about whether the discount is justified.'],
      ['Use the highest peer multiple (18x consumer) and apply to total EBITDA to capture the upside', 'Applying the highest peer multiple to total EBITDA is a marketing slide, not a valuation. It ignores that 70% of EBITDA might come from the chemicals segment.'],
      ['SOTP does not work for industrials because segment disclosure is too thin to support peer multiples', 'Thin disclosure makes SOTP harder, not impossible. The discipline is to build the SOTP with explicit segment EBITDA estimates and flag the disclosure uncertainty — not to skip it.'],
    ],
    'SOTP is the discipline that turns "the conglomerate is undervalued" into a number. It also surfaces the conglomerate discount explicitly — and once that discount is named, the thesis is really about whether a catalyst (spinoff, breakup, activist) will close it.'),

  q(4400216, 'Career Skills', CHAPTER, 'Stub value of the parent',
    'A parent owns 65% of a publicly traded subsidiary worth $30B in market terms, plus a wholly-owned operating business. The parent\'s market cap is $25B. What does the math say about the parent\'s implied stub?',
    '65% of $30B = $19.5B in public-subsidiary value; parent market cap $25B implies the operating business is worth $5.5B — and that stub value is the question (and the trade)',
    [
      ['The parent is trading below the value of its subsidiary, which means it is automatically a long', '"Below the subsidiary value" is not automatically a long — it depends on the stub business\'s value, taxes on a separation, and whether a catalyst can unlock the discount.'],
      ['The stub is worthless because the parent trades below the implied subsidiary value', 'The parent\'s market cap exceeds the subsidiary stake by $5.5B, so the stub has a positive implied value — the question is whether that value is too low, not whether it exists.'],
      ['The stub value cannot be inferred without a full SOTP including tax leakage and corporate overhead', 'A first-pass stub calculation is exactly what this exercise produces. Tax leakage and overhead refine it — they do not make the calculation impossible.'],
    ],
    'Stub value math is the bread-and-butter of HF setups involving listed subsidiaries. The implied stub is the trade — once it is named, the question becomes whether it is too cheap (long), too rich (short the parent and long the sub), or fairly priced given the structure.'),

  q(4400217, 'Career Skills', CHAPTER, 'Spinoff candidate value gap',
    'A diversified company has announced a planned spinoff of its faster-growing segment in 9 months. Your SOTP says the SpinCo would trade at 14x EV/EBITDA (vs the parent\'s 8x). How should the trade be framed?',
    'Long the parent ahead of the spin — capture the multiple rerating as SpinCo separates, with a defined window, an event date, and a falsifier if the spin is delayed or terms shift',
    [
      ['Wait until the spin completes and buy SpinCo at the post-spin price — too risky to model before separation', 'The market often re-rates ahead of the spin, so waiting until completion gives up most of the trade. Pre-spin work is exactly where the HF edge lives.'],
      ['Short the parent because the conglomerate discount is permanent and the spin will not fix it', 'Shorting ahead of an announced spin that closes the discount is fighting the catalyst. The setup is long-the-parent into the spin, not the other way around.'],
      ['Buy SpinCo via when-issued trading at any price ahead of separation', 'When-issued trading exists, but "at any price" is not a position — it is an undisciplined entry. The framing has to include the target rerating, the size, and the risk if the spin fails.'],
    ],
    'Spinoff trades are catalyst-driven SOTP setups. The framing has to name the rerating target, the date, and the falsifier (delay, terms change, regulatory block). That structure turns "the parent is undervalued" into a position with a defined window and exit logic.'),

  // -------------------------------------------------------------------------
  // CATALYST-DRIVEN VALUATION (4400218–4400220)
  // -------------------------------------------------------------------------
  q(4400218, 'Career Skills', CHAPTER, 'Separating catalyst from steady-state DCF',
    'A name has a specific catalyst (a major contract decision in Q2) that could add $20/share if won and subtract $5/share if lost. The steady-state DCF without the catalyst is $80, stock at $75. How should the model present this?',
    'Steady-state DCF at $80 as the anchor, with a catalyst-weighted overlay: prob-weighted catalyst value added to steady state — the trade has both a base value and a separable event premium',
    [
      ['Build a single DCF that includes the catalyst at 100% probability since management is guiding to a win', 'Embedding the catalyst at 100% in the DCF makes the model un-disentanglable when the catalyst resolves. The point of separating them is to know what value comes from where.'],
      ['Ignore the catalyst because DCFs should reflect steady-state assumptions only', 'Ignoring a defined catalyst event throws away the structure of the trade. A catalyst with a known date and known payoff is exactly what HFs are paid to model.'],
      ['Build separate bull and bear cases and let the scenario weights handle the catalyst', 'Scenario weights conflate catalyst outcomes with steady-state assumptions. Separating the catalyst overlay from the base DCF preserves the post-event decomposition.'],
    ],
    'Catalyst-driven setups need the steady-state value and the event premium kept separate. That structure makes it possible to size the catalyst exposure independently and to update cleanly after the event resolves — without rewriting the entire DCF.'),

  q(4400219, 'Career Skills', CHAPTER, 'Time-decay on catalyst conviction',
    'You bought a long in March with a catalyst expected by end of Q3. It is now early September with no news, the stock is flat, and management has not commented. How should conviction be adjusted?',
    'Re-test the catalyst probability with the new information — silence as the date approaches is itself a signal, and conviction should be re-rated, not held at the original level by default',
    [
      ['Hold conviction constant because the date has not passed yet', 'Constant conviction in the face of new information (silence, lack of preparation) is anchoring on the original thesis. The discipline is to update.'],
      ['Cut the position automatically since catalyst trades that have not worked by month 6 are usually wrong', 'Mechanical cuts ignore the actual evidence. Some catalysts genuinely slip; some are dying. The discipline is re-evaluation, not a rule.'],
      ['Increase the position since the catalyst is closer and the entry has not moved against you', 'Adding into an unmoving catalyst trade without new information is averaging in without re-underwriting. The closer-to-the-date argument is not new evidence.'],
    ],
    'Catalyst conviction has to decay with time when there is no confirming evidence. Silence approaching the date is a Bayesian signal — the probability of the catalyst landing on the expected timeline should adjust, and the position should be re-rated, not held by default.'),

  q(4400220, 'Career Skills', CHAPTER, 'Re-rating multiple expansion sizing',
    'A name trades at 7x EV/EBITDA. Your thesis is that an upcoming product launch will move the multiple toward the higher-growth peer set at 12x. EBITDA is $1B and net debt is $2B; 200M shares out. What is the implied target price if the rerating happens?',
    '$50 per share — 12x × $1B = $12B EV, less $2B net debt = $10B equity, ÷ 200M shares = $50; rerating from 7x to 12x produces ~$25/share of value vs current ~$25 stock',
    [
      ['$60 per share — apply 12x to EBITDA directly without netting debt', 'Skipping the net debt step is a common mistake. EV/EBITDA gives enterprise value; equity per share requires subtracting net debt.'],
      ['$70 per share — re-rate the multiple to 12x and add growth on top', 'Adding growth on top of the rerating double-counts. The 12x peer multiple already reflects peer growth, so the rerating is the rerating — not rerating plus a separate growth uplift.'],
      ['Cannot compute without a new EBITDA forecast since rerating implies higher numbers too', 'Rerating math at constant EBITDA isolates the multiple effect. Higher EBITDA is a separate scenario; mixing them at this step muddles the analysis.'],
    ],
    'Rerating math is straightforward when kept disciplined: target multiple × EBITDA = EV, less net debt = equity, ÷ shares = target price. The discipline is to keep the multiple effect separate from any EBITDA upside so you can argue each independently.'),

  // -------------------------------------------------------------------------
  // LONG-SHORT PAIR MATH (4400221–4400224)
  // -------------------------------------------------------------------------
  q(4400221, 'Career Skills', CHAPTER, 'Beta-neutral hedge ratio',
    'You want to pair-trade Long A (beta 1.2 to S&P) against a Short B (beta 0.8). You have $10M of Long A. How much Short B do you need for beta neutrality?',
    '$15M of Short B — beta-weighted dollar exposure: $10M × 1.2 = $12M; $12M ÷ 0.8 = $15M short to neutralize market beta',
    [
      ['$10M of Short B — match dollar amounts since both names move with the market', 'Equal dollar matching ignores the beta differential. With beta 1.2 on the long and 0.8 on the short, equal dollars leaves significant residual market exposure.'],
      ['$6.7M of Short B — divide $10M by the beta ratio 1.5 = $6.7M', 'Dividing rather than multiplying inverts the math. With a higher-beta long, you need *more* short notional to hedge, not less.'],
      ['$12M of Short B — match the beta-weighted long but skip the short-side beta adjustment', 'Adjusting only the long side leaves the short under-hedged. Both legs need to be in beta-weighted dollars for the pair to be beta-neutral.'],
    ],
    'Beta-neutral pair math is dollar-times-beta on both legs. Long-side beta-weighted exposure must equal short-side beta-weighted exposure — failing to adjust both legs leaves residual market exposure that defeats the pair structure.'),

  q(4400222, 'Career Skills', CHAPTER, 'Sector-neutral pair vs single-name short',
    'You have a high-conviction long in a software name. The PM asks whether to hedge via a single-name software short or a software-ETF short. When is the single-name pair better?',
    'When you have a specific short thesis on the offsetting name — the single-name short adds alpha; the ETF hedge just neutralizes sector beta without adding view',
    [
      ['Single-name shorts are always better because they create more alpha potential', '"Always" ignores the cost: idiosyncratic short risk, borrow, and short-squeeze exposure. Single-name shorts are a thesis, not a default hedge.'],
      ['ETF shorts are always better because they have lower borrow and less single-name risk', 'ETF shorts neutralize beta but produce no alpha. If you have a real short thesis available, the ETF hedge is leaving alpha on the table.'],
      ['Choice between them does not matter as long as the dollar amounts match', 'The choice changes both the alpha profile and the risk profile of the book. Treating them as interchangeable is the generalist mistake.'],
    ],
    'Single-name pair shorts add alpha when there is a real short thesis; ETF shorts are pure sector-beta hedges. The choice has to match the analyst\'s actual view — paying single-name short borrow without a thesis is just a more expensive ETF short.'),

  q(4400223, 'Career Skills', CHAPTER, 'Factor-neutral construction',
    'Your long-short book has accidentally drifted to net long quality, net long momentum, and net short low-volatility. The PM wants factor-neutral construction. What does that mean operationally?',
    'Adjust position sizes (or add factor hedges) so the book\'s loadings on quality, momentum, and low-vol are near zero — typically via factor models and incremental tilts, not by liquidating the alpha positions',
    [
      ['Cut all positions until factor exposures are zero', 'Mechanically cutting positions destroys alpha. Factor neutrality is achieved via sizing and offsetting positions, not by liquidating the book.'],
      ['Add an ETF short of the high-momentum factor and call it done', 'A single factor hedge does not neutralize the three different factor exposures. Factor-neutral construction requires hedging or sizing against each factor the analyst cares about.'],
      ['Factor exposures average out at the book level, so the drift is not a real concern', '"Average out" is what every factor-tilted book says before a factor unwind. Persistent factor drift is exactly what blows up otherwise-good idiosyncratic books.'],
    ],
    'Factor-neutral construction means the book\'s factor loadings (quality, momentum, low-vol, etc.) are near zero by design. The operational mechanic is sizing adjustments and factor hedges, not liquidation — alpha is preserved while the unintended factor bets are removed.'),

  q(4400224, 'Career Skills', CHAPTER, 'Residual exposure after intended hedges',
    'After applying beta-neutral and sector-neutral hedges, your book\'s P&L still correlates highly with the volatility factor on stress days. What is the right diagnosis?',
    'Beta and sector hedges leave factor and style exposures unhedged — the book is implicitly short volatility, which only shows up on stress days; the residual exposure has to be measured and hedged separately',
    [
      ['The hedges are not working — replace them with a larger short index position', 'A larger index short does not address the volatility factor exposure. Adding more of the wrong hedge is a common mistake.'],
      ['Stress-day correlation is unavoidable and should be accepted as the cost of doing business', 'Accepting unmodeled stress exposure is how funds blow up in vol spikes. The point is to measure and decide, not accept.'],
      ['Reduce gross exposure across the board to bring stress-day correlation down', 'Cutting gross indiscriminately destroys alpha to address a problem that has a more targeted fix — hedge the specific factor that is driving the residual.'],
    ],
    'Beta- and sector-neutral books still carry style and factor exposures that only show up under stress. The discipline is to run the book through a factor model, identify the residual exposures, and decide explicitly which ones to hedge — implicit short-vol is the classic one to miss.'),

  // -------------------------------------------------------------------------
  // RISK-REWARD ASYMMETRY (4400225–4400227)
  // -------------------------------------------------------------------------
  q(4400225, 'Career Skills', CHAPTER, '3:1 R/R threshold',
    'Your fund\'s minimum R/R for new positions is 3:1. A long candidate has 30% upside to your bull case and 12% downside to your bear case. What is the rule-following answer?',
    'Reject the trade — 30/12 = 2.5:1, below the 3:1 threshold; do not adjust the bear case down to make it fit',
    [
      ['Take the trade — close enough to 3:1 and the bull case is conservative anyway', '"Close enough" is the start of every blown discipline. Either the threshold is real or it is not — and informal "conservative" framing of the bull is not a defense.'],
      ['Lower the bear case to 10% so the ratio reaches 3:1', 'Adjusting the bear case to clear the threshold is exactly how R/R rules get gamed. The bear case should reflect the analyst\'s honest downside, not the size needed for approval.'],
      ['Apply the rule only if the conviction is low; high-conviction trades can bypass it', 'A high-conviction trade with bad R/R is the dangerous combination — large size, asymmetric loss. The rule exists precisely for confident analysts.'],
    ],
    'R/R thresholds are useful only if they hold under pressure. Adjusting the bear case down to clear the bar, or invoking "close enough" or "high conviction" exceptions, defeats the discipline — it filters in the trades the rule was designed to filter out.'),

  q(4400226, 'Career Skills', CHAPTER, 'R/R to position size mapping',
    'Two longs both clear the 3:1 R/R threshold: Long A has 45% upside and 12% downside; Long B has 30% upside and 9% downside. Both have similar conviction and liquidity. How should sizes compare?',
    'Roughly the same size — both have ~3.3:1 R/R; size should reflect the ratio, not the absolute upside, because the upside is on the same expected-value scale once R/R is comparable',
    [
      ['Long A bigger, because the absolute upside is larger', 'Absolute upside without accounting for downside is half the math. Size has to reflect both legs of the R/R, not just the upside.'],
      ['Long B bigger, because the smaller downside means lower drawdown risk', 'Smaller absolute downside is already reflected in the R/R ratio. Sizing based on absolute downside alone double-counts.'],
      ['Long A bigger by 50%, scaled directly to upside potential', 'Scaling size by upside without normalizing for downside is the textbook mistake. R/R-scaled sizing is what makes long-term compounding work.'],
    ],
    'Position sizing should track the R/R ratio, not the absolute upside or downside in isolation. Same-ratio trades get similar sizes; better-ratio trades get bigger sizes. The discipline forces the analyst to look at the shape of the payoff, not just the headline numbers.'),

  q(4400227, 'Career Skills', CHAPTER, 'Downside scenario must be drawn first',
    'A junior analyst presents a long pitch with detailed bull-case math and a sentence describing the bear as "limited downside given current valuation." Why is the PM\'s most likely pushback that the bear has to be drawn first?',
    'Bear cases shape sizing and the kill criterion — drawing them last (or not at all) lets the bull case anchor the conversation, which is how undisciplined sizing happens',
    [
      ['Bear cases are easier to model so they should be done first as a warm-up', 'Bear cases are not easier — honest bears require imagining specific failure modes. The argument for drawing them first is about anchoring, not difficulty.'],
      ['The PM wants the bear first because it sets a fair-value floor', 'The bear case is not a floor in any technical sense; it is a probability-weighted loss scenario. Treating it as a floor undersells the discipline.'],
      ['The order does not matter — what matters is that both cases are present', 'Order does matter because of anchoring. A pitch that leads with the bull anchors size discussions on upside; a pitch that leads with the bear anchors on the loss the fund can absorb.'],
    ],
    'Bear-first pitches force the analyst to articulate failure modes specifically — "limited downside" is not a bear case, it is a hand-wave. Drawing the bear first also anchors the sizing conversation on the loss the fund is willing to absorb, which is the right anchor for capital allocation.'),

  // -------------------------------------------------------------------------
  // EARNINGS PREVIEW MATH (4400228–4400230)
  // -------------------------------------------------------------------------
  q(4400228, 'Career Skills', CHAPTER, "What's priced in via consensus",
    'Consensus next-quarter revenue is $1.20B (range $1.15–$1.27B). Your model has $1.24B. The buyside whisper, based on positioning chatter, is $1.26B. What number does the stock most likely trade on at the print?',
    'The buyside whisper at $1.26B is the most relevant bar — beats relative to sell-side consensus often disappoint if positioning was already long; the trade math has to be against the higher implied bar',
    [
      ['The sell-side consensus of $1.20B since that is the published number', 'Published consensus is the headline, not the bar. Long positioning implies the buyside expects above-consensus, and the stock reacts to whether the print clears the buyside whisper.'],
      ['The midpoint of the sell-side range, $1.21B, since that smooths estimator dispersion', 'Smoothing the range does not change the buyside bar. The dispersion itself is information (wide range = more uncertainty), but the bar is set by positioning, not the average estimator.'],
      ['Your model number of $1.24B since that is what the trade is sized to', 'Your model is the variant view, not the bar. The market reacts to actual print vs whisper — not vs your model.'],
    ],
    'Earnings reactions are about print vs the buyside bar, which is often above published consensus when positioning is long. The work before the print is to estimate where the buyside bar actually sits — through positioning, options pricing, and channel-check evidence — not just to compare your number to the Street.'),

  q(4400229, 'Career Skills', CHAPTER, 'Expected move from vol surface',
    'A stock trades at $100. The at-the-money straddle expiring after earnings is priced at $7. What does that tell you about the expected move and how should you use it?',
    'Implied move is roughly ±7% — straddle price ÷ stock approximates the expected one-standard-deviation move; this is the bar the option market is pricing for the print',
    [
      ['The stock will move exactly 7% — the straddle is a forward price', 'The straddle prices expected magnitude, not direction or certainty. ±7% is roughly one standard deviation, not a guaranteed move.'],
      ['The straddle price is irrelevant since options markets often misprice events', 'Options markets do misprice events, which is why HFs trade around them — but the implied move is still the most useful starting bar for what the market expects.'],
      ['Implied move should be doubled to account for the bull and bear cases separately', 'Doubling double-counts. The straddle price already reflects expected magnitude regardless of direction.'],
    ],
    'Straddle price divided by stock price approximates the implied one-standard-deviation move ahead of an event. That number is the bar the option market is pricing — useful both for sizing the underlying trade and for spotting when option markets are mispricing the event relative to your view.'),

  q(4400230, 'Career Skills', CHAPTER, 'Buyside vs sellside whisper',
    'Sell-side consensus EPS for the print is $1.40. Your buyside contacts say "the whisper is $1.45". Your model is $1.47. Implied move is 8%. The stock has run 12% into the print. What does this combination most likely indicate?',
    'Positioning has already pushed expectations above the published whisper and your model is barely above that bar — print risk is asymmetric to the downside even on a small beat, because the stock has front-run the print',
    [
      ['Strong setup — your number is above the whisper and consensus, so the trade is the long into the print', 'Your number being marginally above an already-elevated whisper, after a 12% run, is not asymmetric upside. The stock has consumed most of the beat in advance.'],
      ['Neutral setup — consensus, whisper, and your number are all in line', 'They are not in line — the stock\'s 12% pre-print run is the missing piece. Same numbers, very different setup depending on what is already priced.'],
      ['Strong short — the gap between consensus and whisper means the print will disappoint', 'Whisper-above-consensus is normal in front-run prints. It is not by itself a short signal — the right read is that the bar has moved up, making the risk asymmetric, not that the print will miss.'],
    ],
    'Pre-print setups are about three numbers (consensus, whisper, your model) and the path the stock took to get there. A modest variant view at an elevated whisper after a long-positioning run is asymmetric to the downside — even a beat may sell off if the bar was already raised in price.'),

  // -------------------------------------------------------------------------
  // WORKING BACKWARDS FROM PRICE (4400231–4400233)
  // -------------------------------------------------------------------------
  q(4400231, 'Career Skills', CHAPTER, 'What must be true to justify the multiple',
    'A name trades at 25x forward EV/EBITDA. The sector trades at 12x. What is the right first question?',
    '"What does the market believe about this company that justifies a 13-turn premium to the sector?" — and then list each candidate (faster growth, higher margins, better moat) and test them against evidence',
    [
      ['25x is too rich and the stock is automatically a short', 'Absolute multiple levels do not determine the trade. The work is to test whether the implied differential is supported by evidence, not to react to the number.'],
      ['25x is a strong company multiple — the market is forward-looking', 'Deferring to "the market is forward-looking" abdicates the work. The point is to ask what specifically the market is forward-looking *to*.'],
      ['Multiples are subjective and cannot be inverted into testable claims', 'Multiples can be inverted into specific growth and margin claims. That is exactly what reverse DCF and working-backwards-from-price exist for.'],
    ],
    'Working backwards from price turns "the stock is expensive" or "cheap" into a specific testable claim. A 13-turn premium implies specific operating outperformance — name it, list the candidates, and test each. That is the discipline that separates an opinion from a thesis.'),

  q(4400232, 'Career Skills', CHAPTER, 'Sensitivity bands around the implied case',
    'You\'ve worked backwards and the market implies 25% revenue CAGR and 28% margins for the next 5 years. Both your bull case (28%/30%) and your bear case (15%/22%) sit around it. What is the most useful next step?',
    'Build sensitivity bands — show what the stock is worth at each combination of growth and margin, and locate exactly where today\'s price sits and how wide the no-edge zone is',
    [
      ['Use the case closest to the market-implied numbers as the base case without independent underwriting', 'Anchoring the base case on the implied numbers is circular — it just reproduces the current price as "fair". The discipline is to assess the implied claim independently.'],
      ['Average the bull and bear cases to produce a midpoint estimate', 'Mechanical averaging of bull and bear loses the structure of the bands. The point is to see the surface of values, not collapse it to one number.'],
      ['Conclude no edge since the implied case is between bull and bear', 'No edge is a possible conclusion but it should come from the analysis, not from the structural position of the implied case. Sensitivity bands let you see whether the edge is in growth, margin, or neither.'],
    ],
    'Sensitivity bands around the implied case let you see the full surface — where the fund is paid, where it is exposed, and how wide the no-edge zone really is. Single-point comparisons hide the shape of the trade; bands surface it.'),

  q(4400233, 'Career Skills', CHAPTER, 'Two-variable break-even on growth and margin',
    'Working backwards from a 25x multiple, you find that the stock is fairly valued at 25% growth and 28% margins. At 20% growth and 28% margins, the implied multiple drops to 18x. At 25% growth and 24% margins, it drops to 19x. What is the practical use of this break-even surface?',
    'It tells you which lever the trade is most sensitive to and how much each lever can slip before the multiple has to re-rate — both growth and margin matter, and the analyst can locate where the highest-conviction variant view sits',
    [
      ['It produces a single fair-value number once the average of the levers is taken', 'Averaging the levers throws away the structure that makes the break-even useful. The point is to see how each lever maps to the multiple, not to collapse them.'],
      ['It proves the stock is fairly valued because both levers cluster near the current price', 'Clustering near the current price is the input, not the conclusion. The break-even is the tool for finding where you disagree with the market — clustering is just the starting point.'],
      ['It is mainly academic — multiples re-rate based on sentiment, not on growth and margin breakdowns', 'Sentiment does move multiples in the short run, but multiples ultimately track operating performance. Skipping the break-even is throwing away the lever analysis.'],
    ],
    'Two-variable break-evens turn a single-point fair-value debate into a surface. They show which lever the trade is most sensitive to and how much each can move before the multiple has to re-rate — letting the analyst locate the variant view where it actually pays.'),

  // -------------------------------------------------------------------------
  // DISTRESSED / EVENT-DRIVEN (4400234–4400236)
  // -------------------------------------------------------------------------
  q(4400234, 'Career Skills', CHAPTER, 'Cap structure waterfall and recovery',
    'A US issuer files Chapter 11 with $300M secured debt, $400M unsecured bonds, and $100M of equity. Enterprise value in restructuring is estimated at $550M. What is the expected recovery distribution?',
    'Secured gets paid first at $300M (par); unsecured gets the remaining $250M against $400M claims (~62 cents on the dollar); equity gets zero — the waterfall is strict priority unless a plan deal modifies it',
    [
      ['Pro rata across all claims: ~57 cents on the dollar for everyone', 'Pro rata across all claims violates absolute priority. Chapter 11 follows strict seniority unless a plan deal explicitly carves out value for junior claims.'],
      ['Secured at par, unsecured at par, equity gets the residual $50M', 'EV of $550M is less than secured plus unsecured at par ($700M). Equity cannot get residual when there is not enough EV to cover the unsecured.'],
      ['Equity preserved at $100M because shareholders fund the plan', 'Equity preservation in a sub-water Ch 11 plan requires either a new-money commitment or a senior class waiver — it is not the default outcome.'],
    ],
    'Distressed valuation runs through the cap structure waterfall. Strict priority means secured gets paid first to par, unsecured takes the residual, and equity gets zero when EV is below the senior claims. Modifications happen via plan negotiations and are the trade question, not the default.'),

  q(4400235, 'Career Skills', CHAPTER, 'Payoff diagram for an event setup',
    'You are long a stressed credit at 70 cents trading on an upcoming refinancing decision. If the refi succeeds, the bond goes to 95; if it fails, the company files Chapter 11 with estimated unsecured recovery of 45. What is the payoff structure?',
    'Asymmetric binary — upside +25 (95-70), downside -25 (70-45) for nominally symmetric payoff; the trade depends on the probability of refi success, which becomes the variable to estimate',
    [
      ['Pure upside since the bond was already issued at par and is just recovering', 'Trading at 70 means the market is pricing meaningful default risk — the downside is real (45) and equal to the upside. Calling this pure upside ignores the bear case.'],
      ['Long volatility — the bond will move either way, so direction does not matter', 'Symmetric outcomes with a long position is not "long volatility" — it is a binary directional bet. Long-vol would require an options structure.'],
      ['Limited downside because bonds always recover at least the coupon', 'Coupon recovery is not a downside floor — the bond traded at 70 because the market is pricing recovery scenarios below par. The 45 recovery is the actual downside.'],
    ],
    'Event-driven payoff diagrams turn the trade into a probability-weighted expected value. Symmetric upside and downside means the trade is about getting the probability right — and naming the explicit probability of success is the work that makes the trade defensible at the morning meeting.'),

  q(4400236, 'Career Skills', CHAPTER, 'Fulcrum security selection',
    'In a distressed cap structure, the fulcrum security is where post-restructuring equity is expected to land. If secured is $200M and unsecured is $500M, and your EV estimate is $400M, what is the fulcrum and why does it matter?',
    'The unsecured bonds — they are partially in the money ($200M of residual value against $500M claims) and will receive most of the post-reorg equity, so the unsecured is the security to own for the equity outcome',
    [
      ['The secured debt — it has the highest claim seniority', 'Secured is fully covered at par ($400M EV covers $200M secured) and will be paid out in cash or reinstated, not converted to equity. Secured is not the fulcrum.'],
      ['The existing equity — current equity holders will be diluted but retain a stake', 'Equity is below water with $700M of claims against $400M of EV. Current equity will be wiped or near-wiped, not preserved as the fulcrum.'],
      ['Trade across the whole capital structure equally to capture the recovery', 'Equal-weighting the cap structure does not target the fulcrum — secured will be paid in cash, unsecured converts to equity, old equity is wiped. The structure matters.'],
    ],
    'Fulcrum security selection is the bread-and-butter of distressed investing. The fulcrum is whichever layer of the cap structure receives the post-reorg equity — usually a partially impaired claim — and identifying it correctly is what separates the equity-recovery trade from a yield-to-recovery trade.'),

  // -------------------------------------------------------------------------
  // M&A ARB MATH (4400237–4400239)
  // -------------------------------------------------------------------------
  q(4400237, 'Career Skills', CHAPTER, 'Gross spread and annualized IRR',
    'A target trades at $48. The announced cash deal price is $50, expected to close in 4 months. What is the gross spread and the annualized IRR (ignoring dividends and borrow)?',
    'Gross spread is $2 or ~4.2%; annualized IRR is ~12.6% (4.2% × 3 because there are three 4-month periods in a year)',
    [
      ['Gross spread is $2 or 4%; annualized IRR is 4% because that is the deal return', 'Annualizing requires scaling the period return up to a year. A 4-month return of 4% is not the same as a 4% annual return.'],
      ['Annualized IRR is ~50% because each percent of spread should be magnified by the holding period leverage', 'Holding-period "leverage" is not how annualization works. The math is period return × periods per year, not arbitrary multiplication.'],
      ['Cannot compute without knowing the borrow rate and the dividend payments first', 'Gross spread and pre-frictions IRR are computable from price and timing alone. Borrow and dividends refine to net — they are not required for the first-cut number.'],
    ],
    'M&A arb math starts with the gross spread and the annualized IRR — period return scaled up to a year by the number of periods. That number is the first screen; net IRR after borrow, dividends, and probability-weighting is the deal-by-deal refinement.'),

  q(4400238, 'Career Skills', CHAPTER, 'Probability-weighted deal value',
    'Target trades at $48. Deal price $50 (closes in 4 months), break price (your estimate of where the stock trades if the deal fails) is $40. The market is pricing what probability of the deal closing?',
    'Roughly 80% — market price ($48) = P × deal ($50) + (1-P) × break ($40); solving: P = ($48 - $40) / ($50 - $40) = 80%',
    [
      ['100% — the market would not trade at $48 if the deal had break risk', 'Below the deal price means the market is pricing meaningful break risk. The point of the math is to extract the implied probability, not to assume certainty.'],
      ['50% — anywhere below the deal price implies a coin-flip', 'Implied probability is a continuous extraction from the prices, not a coin-flip. The math gives a specific number, and 80% here is what the prices imply.'],
      ['Cannot determine without knowing the deal mechanics in detail', 'Implied break probability is a price extraction that does not require knowing all the mechanics. The mechanics inform your *view* of the probability — they are not required for the implied number.'],
    ],
    'Implied break probability is the linear interpolation between market price, deal price, and break price. The math is mechanical; the work is forming your own view of the probability and comparing to the implied — if your view is materially different, the trade is to size against that gap.'),

  q(4400239, 'Career Skills', CHAPTER, 'Antitrust break probability calibration',
    'A horizontal merger in a concentrated industry has been announced with second-request risk. Historical data shows 80% of second-request deals close, but 60% of horizontal deals in concentrated industries close. Your gut says 70% for this specific deal. What is the right framing?',
    'Anchor on the base rate that best matches the specific situation (concentrated horizontal: 60%), update for case-specific evidence, and articulate the difference between your 70% estimate and the implied number from the spread',
    [
      ['Use the higher base rate (80%) because it covers more cases and is therefore more reliable', 'A wider base rate that does not match the situation produces an overconfident estimate. Reference class selection is the discipline — narrow and matched beats broad and generic.'],
      ['Use the lower base rate (60%) without adjustment to be conservative', 'Mechanical use of the lower base rate ignores case-specific evidence. The point is to anchor on the right reference class *and* update.'],
      ['Trust the gut estimate of 70% because base rates are too generic to apply to specific deals', 'Gut estimates without base-rate anchoring are how arb desks blow up. The discipline is reference-class forecasting plus case-specific updates — both, not either.'],
    ],
    'Antitrust break probability is the hardest part of M&A arb. The discipline is to anchor on the reference class that best matches the deal (concentrated horizontal mergers, vertical mergers with overlap, cross-border with national security overlay), then update for case-specific evidence — and to make your number explicit so the trade is sized against the implied probability from the spread.'),

  // -------------------------------------------------------------------------
  // POSITION-LEVEL ECONOMICS (4400240–4400242)
  // -------------------------------------------------------------------------
  q(4400240, 'Career Skills', CHAPTER, 'Borrow cost drag on short alpha',
    'You short a name with a borrow rate of 8% annualized. Your downside thesis is a 20% drop over 12 months. What is the impact of borrow on the trade math?',
    'Net return is 20% gross less 8% borrow = 12% net; an 8% borrow significantly compresses alpha and means the thesis has to be right *quickly* — every quarter of holding eats 2% of the gross thesis',
    [
      ['Borrow does not affect P&L since it is just a financing fee', 'Borrow is a real cash cost that flows through P&L. Treating it as ignorable is a textbook junior mistake.'],
      ['Borrow is 8% but it nets out against the cash collateral interest you earn', 'In most prime broker arrangements borrow exceeds rebate. Net of rebate, the analyst still pays a significant carry on hard-to-borrow names.'],
      ['Borrow only matters if the short does not work — winning shorts cover the borrow', 'Borrow accrues regardless of whether the short works. Treating it as a conditional expense is wrong — it is a daily cost from day one.'],
    ],
    'Borrow is the silent killer of short alpha. An 8% annualized borrow means the thesis has to compress quickly to clear the carry, and high-borrow names usually also carry squeeze risk. The trade math has to include borrow from day one — gross alpha is not the same as net.'),

  q(4400241, 'Career Skills', CHAPTER, 'Financing cost on margined longs',
    'A levered HF runs a long book at 1.5x gross. The financing rate on the additional 0.5x is SOFR + 75 bps = ~5.8% in a 5% SOFR environment. The long book\'s expected gross return is 9%. What does this do to net returns and risk?',
    'Net return on the levered portion is 9% gross less ~5.8% financing = ~3.2% on the levered slice; leverage amplifies both returns and drawdowns, so the fund has to earn enough on the marginal long to justify the financing carry and the larger drawdown profile',
    [
      ['Financing on margined longs is negligible since the rate is close to the risk-free rate', '5.8% financing is real money. The "close to risk-free" framing ignores that the fund pays the spread above SOFR, not the risk-free rate itself.'],
      ['Leverage always improves returns because the gross return exceeds the financing rate', 'Returns improve only if the gross continues to exceed financing — which has to be true on the *marginal* long, not the average. The marginal long under leverage often has worse risk-adjusted return.'],
      ['Leverage does not affect drawdown risk if the longs are diversified', 'Leverage amplifies drawdowns regardless of diversification. Diversification reduces idiosyncratic risk but does not change the leverage multiplier on systematic moves.'],
    ],
    'Long-side financing is real and amplifies both returns and drawdowns. The discipline is to ensure the marginal long under leverage earns a return sufficient to clear the financing rate *and* compensate for the larger drawdown profile — which is a higher bar than the average long has to clear.'),

  q(4400242, 'Career Skills', CHAPTER, 'Dividend payment obligation on shorts',
    'You short a stock paying a 4% annual dividend across the ex-date. What does this mean for your P&L?',
    'You owe the dividend to the lender — it is debited from your account on the pay date; the dividend is an additional carry cost on top of borrow that reduces net short alpha',
    [
      ['Dividends do not affect short positions since the stock price adjusts on the ex-date', 'The stock price does drop on the ex-date by roughly the dividend, but the short position is debited for the dividend separately — the two effects cancel only at the gross level. The short owes the cash dividend.'],
      ['You receive the dividend from the company since you sold the stock', 'Short sellers do not receive dividends — the long buyer of the borrowed stock does, and the short seller owes that dividend to the lender.'],
      ['Dividends apply only to long positions and not to short positions', 'Short positions are subject to dividend obligations. This is one of the most common mistakes in junior short-side modeling.'],
    ],
    'Short positions carry a dividend obligation in addition to borrow. A 4% dividend on a short is 4% of additional annual carry the thesis has to clear — and ignoring it makes high-dividend shorts look more attractive than they are. The trade math has to include borrow *and* dividend carry on the short leg.'),
]

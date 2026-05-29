import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// EQUITY RESEARCH — Chapter 4: Valuation and Rating Logic
// ----------------------------------------------------------------------------
// 42 expansion questions (IDs 4370300–4370341) extending the existing 8 Qs
// in the chapter (4103018, 4103019, 4105078, 4105079, 4107334, 4107805,
// 4107815, 4107804). Covers multiples theory, NTM/LTM, sector multiples,
// DCF construction, terminal value, SOTP, premium/discount logic, target
// price, risk-reward math, rating systems, catalysts, variant perception,
// and rating-change discipline.
//
// Voice: matches jargonBusters.ts and the IB/VC chapter expansion banks —
// specific, evidence-anchored, no filler. Each wrong-answer rationale is
// bespoke. Distractors are real sell-side and buy-side ER misconceptions.
// US securities-law context.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe ER Ch4 canonical bank'

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

const CHAPTER = 'Valuation and Rating Logic'

// Difficulty distribution: 12 at 3, 21 at 4, 9 at 5.
export const ER_CH4_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  4370300: 3, // P/E vs EV/EBITDA primer
  4370301: 4, // P/E breaks under different tax rates
  4370302: 4, // EV/EBITDA breaks under capex intensity
  4370303: 3, // EV/Sales when there is no profitability
  4370304: 4, // Which multiple for a sub-scale software company
  4370305: 4, // Multiple choice for a mature consumer staples name
  4370306: 4, // Banks and P/TBV
  4370307: 3, // REITs and P/FFO
  4370308: 5, // Pharma multiples around patent cliffs
  4370309: 3, // NTM vs LTM definition
  4370310: 4, // Why screening on LTM trailing misleads for growth
  4370311: 4, // Forward-visibility premium
  4370312: 3, // DCF explicit forecast period
  4370313: 4, // Gordon growth vs exit multiple for terminal value
  4370314: 4, // WACC sanity — CAPM beta and ERP discipline
  4370315: 5, // Levered vs unlevered beta in WACC
  4370316: 4, // Mid-year vs end-of-year discounting
  4370317: 4, // Discounting consistency — FCFF vs FCFE
  4370318: 5, // Terminal value is 70% of DCF — what to do
  4370319: 4, // Implied exit multiple sanity check on terminal value
  4370320: 4, // Sum-of-the-parts trigger
  4370321: 5, // Conglomerate discount and spinoff catalyst
  4370322: 4, // Defensible premium to peers
  4370323: 3, // Indefensible premium to peers
  4370324: 4, // Target price horizon — 12 months forward
  4370325: 3, // NTM-based target price construction
  4370326: 4, // Bull/base/bear sensitivity bands
  4370327: 3, // Risk-reward — 30/15 = Buy
  4370328: 4, // Risk-reward — 10/20 = Sell
  4370329: 3, // Risk-reward — 15/15 = Hold
  4370330: 4, // Sell-side rating systems
  4370331: 5, // Buy-side translation of sell-side ratings
  4370332: 4, // Why Hold is over-represented on the sell side
  4370333: 3, // Earnings event catalyst
  4370334: 4, // Beat-and-raise as a catalyst
  4370335: 4, // M&A and spinoff as catalysts
  4370336: 5, // Variant perception sourcing
  4370337: 4, // Variant perception risk
  4370338: 4, // Rating change threshold — 15% target move
  4370339: 5, // Rating change when thesis breaks
  4370340: 4, // Beat-and-raise and stock falls — what it implies
  4370341: 4, // DCF vs multiples — which is more accurate
}

export const erCh4Questions: Question[] = [
  // -------------------------------------------------------------------------
  // MULTIPLES THEORY (4370300–4370308)
  // -------------------------------------------------------------------------
  q(4370300, 'Career Skills', CHAPTER, 'P/E vs EV/EBITDA primer',
    'A junior is comparing two industrial companies. One has substantial debt; the other is net-cash. They have similar EBITDA margins and growth. Which multiple gives the cleaner cross-company comparison and why?',
    'EV/EBITDA, because EV puts both companies on a capital-structure-neutral footing — P/E reflects each firm\'s interest burden, which is not what the comparison is trying to measure',
    [
      ['P/E, because earnings are what shareholders ultimately receive', 'P/E does measure equity returns, but it bakes in interest expense — the levered company\'s P/E will look optically cheaper for reasons unrelated to operating quality. That is the exact distortion EV/EBITDA was designed to remove.'],
      ['P/B, because book value normalises balance-sheet differences', 'P/B works for businesses where book is meaningful (banks, insurers) and is mostly useless for industrials where assets are depreciated and intangible value sits off-book. It does not address the capital-structure issue raised by the question.'],
      ['Dividend yield, because it strips out accounting noise', 'Dividend yield reflects payout policy, not valuation. Two firms with identical operating performance can have wildly different yields because one chose to buy back stock — that is not a comparison tool.'],
    ],
    'P/E is an equity-after-leverage measure; EV/EBITDA is a whole-firm pre-leverage measure. When capital structures differ, EV-based multiples isolate the operating business and let the analyst compare like with like.'),

  q(4370301, 'Career Skills', CHAPTER, 'P/E breaks under different tax rates',
    'Two software peers trade at the same EV/EBITDA. One is US-domiciled and pays a 24% effective tax rate; the other is Ireland-domiciled and pays 10%. The Irish name looks materially cheaper on P/E. What is the right way to read this?',
    'The P/E gap is mostly mechanical — the same pre-tax earnings flow through a much smaller tax bill, so a P/E comparison rewards the lower-tax jurisdiction without telling you anything about operating quality',
    [
      ['The Irish name is genuinely cheaper and should be preferred on a relative basis', 'A lower tax rate does produce more cash for shareholders, but it is a known, observable difference — paying for it requires conviction that the tax rate is durable. Calling the stock "cheap" on a P/E gap that the tax bill explains is the mistake.'],
      ['P/E is the more fundamental multiple, so the gap should be taken at face value', 'P/E being widely cited does not make it tax-neutral. Tax-rate differences are exactly the kind of distortion that has analysts reach for EV/EBIT or EV/EBITDA when the comp set crosses jurisdictions.'],
      ['Adjust by averaging the two tax rates and applying the average to both names', 'Inventing a blended tax rate is not analysis — it is fudge. Either model each company\'s actual tax rate explicitly or use a pre-tax multiple that sidesteps the issue.'],
    ],
    'P/E is sensitive to tax-rate differences in a way EV/EBITDA is not. When the comp set straddles jurisdictions with materially different effective tax rates, P/E gaps need to be decomposed before they mean anything.'),

  q(4370302, 'Career Skills', CHAPTER, 'EV/EBITDA breaks under capex intensity',
    'A telecom tower operator and an asset-light software company both trade at 14x EV/EBITDA. The towers business spends 35% of EBITDA on maintenance capex; the software business spends 4%. What does the matched multiple actually hide?',
    'The towers business converts far less EBITDA into free cash flow because depreciation reflects real, recurring capex — EV/EBITDA flatters capital-heavy businesses by ignoring the cost of maintaining the asset base',
    [
      ['Nothing — EBITDA already strips out non-cash charges, so the multiples are comparable', 'EBITDA strips out depreciation but the towers operator actually has to spend the cash to replace those assets. That is the entire reason analysts cross-check with EV/EBIT or EV/(EBITDA-capex) for capital-heavy businesses.'],
      ['The towers business is more attractive because hard assets back the multiple', 'Hard-asset comfort is a credit observation, not an equity-value one. The equity claim depends on free cash to shareholders after maintaining the asset base — which is exactly what the matched EV/EBITDA misses.'],
      ['EV/Sales is the better comparison so the analyst should switch metrics', 'Switching to EV/Sales drops both companies further down the income statement — it does not fix the depreciation/capex problem and introduces a margin-mix distortion of its own. EV/EBIT or EV/(EBITDA-maintenance capex) is the right correction here.'],
    ],
    'EV/EBITDA implicitly assumes depreciation is non-economic. For businesses where depreciation tracks real maintenance capex (towers, utilities, mid-stream energy, heavy industrials) it flatters capital-heavy operations. Cross-check with EV/EBIT or EV/(EBITDA-capex).'),

  q(4370303, 'Career Skills', CHAPTER, 'EV/Sales when there is no profitability',
    'An associate is valuing a high-growth, pre-profit software company. Why is EV/Sales the most-used multiple here even though every textbook calls it the crudest?',
    'EBITDA and earnings are negative, so any earnings-based multiple is undefined or meaningless — EV/Sales is what is left, with the analyst supplying the gross-margin and burn discipline that the multiple itself cannot capture',
    [
      ['Because EV/Sales is the most accurate multiple for software regardless of stage', 'EV/Sales is the right default only when earnings multiples do not work. Once a software company turns durably FCF-positive, the comp set will rerate against EV/Gross Profit, EV/FCF, and eventually P/E — and EV/Sales becomes the lazy comparison.'],
      ['Because Wall Street has agreed that revenue is the only honest software metric', 'There is no agreement that revenue is the honest metric — there is reluctant consensus that revenue is the only defined metric pre-profitability. The two are different statements.'],
      ['Because EV/Sales is mechanically equivalent to a long-run DCF for software', 'EV/Sales is not equivalent to a DCF. The bridge from revenue to free cash depends on gross margin, opex leverage, retention, and a path to profitability — exactly the things EV/Sales ignores.'],
    ],
    'EV/Sales is the multiple you use when earnings-based multiples are undefined. It is a placeholder pending profitability, and it has to be paired with gross-margin and burn analysis — otherwise the analyst is just pricing growth without quality.'),

  q(4370304, 'Career Skills', CHAPTER, 'Multiple choice for a sub-scale software company',
    'You are picking up coverage on a sub-scale, high-growth, unprofitable vertical SaaS company. What multiple do you anchor on in the published note and why?',
    'EV/Sales (typically NTM) — earnings and EBITDA are not yet meaningful, and EV/Gross Profit becomes the cross-check as gross margin separates the high-quality names from the volume-driven ones',
    [
      ['P/E on NTM consensus EPS, because the buy-side prefers earnings-based multiples', 'NTM EPS is negative or near-zero for sub-scale SaaS. Anchoring a published note on a metric that flips sign across the comp set produces meaningless multiple tables.'],
      ['EV/EBITDA on consensus, because EBITDA neutralises non-cash items', 'EBITDA is also negative or trivially small at sub-scale. A 200x EV/EBITDA is not a valuation — it is a sign the metric has stopped working.'],
      ['P/B, because software companies have meaningful intangible book value', 'Software book value is mostly historical opex that GAAP capitalised in name only. P/B does not anchor anything for SaaS — it is the multiple for balance-sheet-heavy financials.'],
    ],
    'Match the multiple to the stage. Sub-scale SaaS anchors on EV/Sales with EV/Gross Profit as the quality cross-check. Mid-scale moves to EV/Gross Profit and Rule-of-40 framings. Mature SaaS rerates against P/E and FCF yield.'),

  q(4370305, 'Career Skills', CHAPTER, 'Multiple for a mature consumer staples name',
    'A consumer staples company has stable mid-single-digit growth, predictable margins, modest leverage, and consistent dividends. Which is the analyst\'s primary multiple and why?',
    'P/E on NTM EPS, because earnings are stable and predictable enough that the multiple actually means something — staples is one of the places P/E earns its keep as the lead metric',
    [
      ['EV/Sales, because sales are the most stable line for staples', 'Sales are stable but the entire reason to own staples is the predictable earnings stream and dividend. EV/Sales would ignore both — it is the multiple you use when earnings are not usable, not when they are this clean.'],
      ['EV/EBITDA, because it is always more rigorous than P/E', 'EV/EBITDA is the right default in capital-structure-divergent comp sets. In a homogeneous staples peer group, P/E is what every PM in the room is quoting — moving to EV/EBITDA loses information without adding any.'],
      ['Dividend yield only, because staples are bought for yield', 'Yield is one cross-check among several. Anchoring on yield alone misses the earnings and margin trajectory that drives the dividend itself.'],
    ],
    'P/E is the primary multiple for businesses where earnings are stable, predictable, and tax/leverage differences across peers are small. Mature consumer staples is the canonical place P/E leads, with EV/EBITDA and dividend yield as confirmatory cross-checks.'),

  q(4370306, 'Career Skills', CHAPTER, 'Banks and P/TBV',
    'A US regional bank trades at 1.4x P/TBV and earns a 13% ROTCE. Why is P/TBV — not P/E or EV/EBITDA — the primary multiple here?',
    'Bank earnings translate directly into book value growth, and the franchise value is closely anchored to tangible equity that can be deployed at the bank\'s ROTCE — P/TBV combined with ROTCE gives a coherent view of how the market is pricing returns on the capital base',
    [
      ['Because EV does not apply to banks since deposits are not really debt', 'It is true that deposits are not standard debt — that is exactly why EV/EBITDA is undefined for banks, which is a constraint rather than a positive reason to use P/TBV. The positive reason is that tangible book is the deployable capital base.'],
      ['Because P/E is unreliable for banks due to provisioning volatility', 'Provisioning volatility is real, but smoothed-cycle P/E is still useful — banks are usually valued on a P/TBV-vs-ROTCE *and* P/E basis. P/TBV is primary because of how bank value is generated, not because P/E is unreliable.'],
      ['Because regulators require banks to be valued on book value', 'Regulators do not dictate market multiples. They drive the metric indirectly via capital rules, but the analyst\'s choice is grounded in economics, not regulation.'],
    ],
    'Banks are priced on P/TBV with ROTCE as the partner metric. A bank that earns ROTCE comfortably above cost of equity deserves a premium to tangible book; one that earns below it deserves a discount. P/E and EV/EBITDA are secondary because the capital base — tangible equity — is what produces the earnings stream.'),

  q(4370307, 'Career Skills', CHAPTER, 'REITs and P/FFO',
    'A REIT analyst defends P/FFO as the lead metric over GAAP EPS. What is the cleanest one-sentence reason?',
    'GAAP depreciation on real estate is non-economic in the way it shows up on REIT income statements — buildings hold or appreciate in value over the relevant horizon — so FFO adds depreciation back and gives a cash-economics view that EPS does not',
    [
      ['FFO is required by GAAP, so it is the most defensible metric', 'FFO is a NAREIT-defined non-GAAP measure, not a GAAP requirement. Its standing comes from industry practice and analytical relevance, not regulatory mandate.'],
      ['P/FFO is just P/E with a different name, so analysts use it for convenience', 'P/FFO is materially different from P/E — adding depreciation back changes the denominator meaningfully for real-estate-heavy businesses. Conflating them misses why the industry switched.'],
      ['REIT GAAP earnings are unreliable because of fair-value accounting', 'US REITs largely use historical-cost accounting with depreciation, not fair-value. The argument for FFO is precisely that historical-cost depreciation is non-economic — not that fair-value accounting is unreliable.'],
    ],
    'P/FFO is the REIT equivalent of P/E adjusted for the non-economic depreciation that drags reported earnings. Combined with AFFO (further adjusted for recurring capex and straight-line rent) and implied cap rate cross-checks, it produces a coherent valuation stack for REITs.'),

  q(4370308, 'Career Skills', CHAPTER, 'Pharma multiples around patent cliffs',
    'A large-cap pharma name trades at 11x NTM P/E versus a sector average of 16x. A blockbuster loses exclusivity in 18 months and contributes 35% of current EPS. How should the multiple gap be interpreted?',
    'The market is pricing the post-cliff earnings, not the NTM number — using current EPS denominator with peer-average multiples is the wrong reference point because the consensus EPS is about to step down sharply',
    [
      ['The name is cheap on relative multiples and should be a Buy on mean reversion', 'Mean-reverting on a multiple ignores that the denominator is about to fall. A "cheap" P/E that gets cheaper because earnings step down has not delivered any return — that is the cliff trap.'],
      ['The multiple gap reflects management quality concerns', 'Management quality may matter, but the dominant, observable driver of the discount here is the loss-of-exclusivity event. Reaching for soft factors when a hard one is in plain sight is a research mistake.'],
      ['Pharma should always trade at sector average regardless of pipeline', 'Sector averages are blends. Pipeline composition, patent timing, and cliff exposure determine relative-multiple dispersion — assuming reversion to average ignores the structural differences that produced the dispersion in the first place.'],
    ],
    'For pharma names approaching a patent cliff, the right P/E uses post-cliff EPS or a probability-weighted blend that bakes in the pipeline. Comparing pre-cliff EPS to peer-average multiples produces a fake discount and the canonical cliff value trap.'),

  // -------------------------------------------------------------------------
  // NTM VS LTM (4370309–4370311)
  // -------------------------------------------------------------------------
  q(4370309, 'Career Skills', CHAPTER, 'NTM vs LTM definitions',
    'A new associate asks why the published note uses NTM EV/EBITDA when the company\'s most recent reported number is LTM. What is the cleanest answer?',
    'Markets price forward expectations, not history — NTM aligns the multiple with what investors are actually paying for, while LTM anchors on a number that is already in the rear-view mirror',
    [
      ['NTM is the regulatory standard for sell-side notes', 'There is no regulatory standard for NTM versus LTM — sell-side compliance focuses on disclosures, conflicts, and target-price documentation, not the time-frame of the multiple. The choice is analytical, not regulatory.'],
      ['LTM is more reliable because the numbers are reported, while NTM is just a forecast', 'LTM is more *certain*, but reliability of inputs is not the same as relevance of the output. A precise valuation of the past is still a valuation of the past — and the share price is not.'],
      ['NTM and LTM produce the same multiple for any normally growing company', 'For a 20% grower they differ by roughly 20%. NTM and LTM diverge mechanically with growth — that is precisely why forward-vs-trailing matters.'],
    ],
    'NTM (next-twelve-months) anchors valuation on what the market is paying for: forward cash flows. LTM (last-twelve-months) is the most-recent-reported anchor and is most useful as a cross-check or when forward estimates are unreliable.'),

  q(4370310, 'Career Skills', CHAPTER, 'LTM screens mislead for growth',
    'A screening tool ranks software names by trailing EV/Sales and flags a 40%-grower at 14x as "cheap" relative to a 5%-grower at 12x. What is the conceptual mistake?',
    'Trailing multiples on high-growth names are mechanically inflated relative to forward — the 40%-grower\'s NTM EV/Sales is closer to 10x, well below the slower-growing peer, so the trailing-based screen has the ranking backwards',
    [
      ['The screen is correct and the slower grower is cheaper', 'The screen ranks names on a denominator (trailing revenue) that grows at very different rates across the comp set. That makes the comparison structurally biased against fast growers and the apparent ranking is an artefact.'],
      ['Growth should never enter a relative-value screen', 'Growth is exactly what justifies premium multiples. Screens that ignore growth are useful only across genuinely homogeneous peer groups — and software is the opposite of that.'],
      ['Both multiples should be re-expressed in P/E for a fair comparison', 'Switching to P/E does not solve the trailing/forward issue — it shifts to a metric that may not even be defined for the high-grower. The fix is to use NTM, not to change the multiple type.'],
    ],
    'Trailing multiples penalise growth by anchoring on a denominator that has not yet caught up to the forward run-rate. Always cross-check screening output on NTM (or even further-forward) numbers before treating a trailing-based ranking as a relative-value signal.'),

  q(4370311, 'Career Skills', CHAPTER, 'Forward-visibility premium',
    'Two software companies have identical NTM revenue and growth. Company A is 95% subscription with 130% NRR; Company B is 60% perpetual licence with renewal lumpiness. Why does Company A typically trade at a higher NTM multiple?',
    'The market pays a premium for forward visibility — A\'s NTM number is more likely to be hit and exceeded, so the same headline NTM multiple implicitly prices a lower probability-adjusted forward number',
    [
      ['Subscription accounting inflates GAAP revenue, so A is mechanically overvalued', 'Subscription accounting actually defers more revenue than perpetual recognition does — A\'s GAAP revenue lags bookings. The premium is not an accounting artefact; it is a quality-of-revenue judgement.'],
      ['Investors prefer subscription companies for branding reasons', 'Investor preference is a real phenomenon but it is downstream of the visibility argument. The note has to defend the premium on cash-flow predictability, not on category fashion.'],
      ['A and B should trade at the same multiple because their NTM revenue is identical', 'Identical NTM revenue does not imply identical risk. Two streams with the same expected value and different variance trade at different multiples — that is finance 101, applied to revenue quality.'],
    ],
    'The forward-visibility premium is the price investors pay for tighter distributions of outcomes. Recurring subscription revenue with high NRR trades richer than equivalent NTM perpetual or transactional revenue because the same NTM number embeds a higher probability of being met.'),

  // -------------------------------------------------------------------------
  // DCF CONSTRUCTION (4370312–4370319)
  // -------------------------------------------------------------------------
  q(4370312, 'Career Skills', CHAPTER, 'Explicit forecast period',
    'A junior is building a DCF and asks how many years to forecast explicitly before going to terminal value. What is the right framing?',
    'Forecast explicitly until the business has reached steady state — typically 5 to 10 years — so the terminal value is computed on a mature run-rate, not on a still-growing business',
    [
      ['Always exactly five years because that is the industry standard', 'There is no fixed industry standard. Five years is a common shortcut and works for mature businesses, but applying it to a company still scaling produces a terminal value computed off a transitional, not steady-state, year.'],
      ['As many years as the model can run before the spreadsheet becomes unstable', 'Spreadsheet stability has nothing to do with the choice — the question is when the business reaches a stable margin and growth profile. Forecasting longer than that just adds noise.'],
      ['Three years, because forecasts beyond that are unreliable anyway', 'Cutting the explicit period too short forces the terminal value to do the work the explicit period should do. The model then becomes hyper-sensitive to terminal assumptions for the wrong reason.'],
    ],
    'The explicit forecast period should run until the company\'s growth, margins, and capital intensity have converged on long-run levels. Terminal value should be computed on a steady-state year — otherwise the terminal formula is applied to a non-terminal business and the result is mechanically wrong.'),

  q(4370313, 'Career Skills', CHAPTER, 'Gordon growth vs exit multiple',
    'You can compute DCF terminal value as Gordon growth (perpetuity with a long-run g) or as an exit-multiple application to terminal-year EBITDA. Which approach is more defensible and why?',
    'Use both as cross-checks — Gordon growth is theoretically cleaner but extremely sensitive to g and WACC inputs, while exit multiples anchor on observable market data but can drift if peer multiples rerate; agreement between the two is the actual sanity check',
    [
      ['Always use exit multiples because Gordon growth is too theoretical', 'Gordon growth is theoretical for a reason — it forces the analyst to commit to a long-run growth assumption that has to be economically plausible. Exit multiples alone can hide a g implicit in the multiple that the analyst has never stated.'],
      ['Always use Gordon growth because exit multiples imply circular logic', 'Exit multiples are not strictly circular — they reference current peer pricing, which is exogenous. The real critique is that they import today\'s market mood into a terminal value, which is why the cross-check matters.'],
      ['Pick whichever produces the higher target price', 'Picking the method that produces the answer you want is not analysis. Compliance and a halfway-attentive PM will both spot it, and the model loses credibility with the desk.'],
    ],
    'Gordon growth and exit-multiple terminal values are both legitimate, both flawed, and most useful as cross-checks. The implied exit multiple of a Gordon-growth TV and the implied perpetuity-g of an exit-multiple TV should both be checked for economic plausibility.'),

  q(4370314, 'Career Skills', CHAPTER, 'WACC discipline — CAPM and ERP',
    'A junior builds a DCF using a 4% risk-free rate, a 2.5% equity risk premium, and a beta of 1.1, producing a 6.75% cost of equity. The MD pushes back. What is the most likely problem?',
    'The equity risk premium is too low — most US sell-side practice uses ERPs in the 4.5–6% range; a 2.5% ERP produces a cost of equity that mechanically inflates valuation by lowering the discount rate',
    [
      ['Beta should always be 1.0 because that is the market average', 'Beta is a measure of systematic risk for the specific name, not a constant. Forcing 1.0 strips out one of the few firm-specific inputs CAPM has.'],
      ['Risk-free rate should be zero because risk-free rates change over time', 'The current 10-year Treasury yield is the standard risk-free rate input — zero is not a defensible choice in any rate environment.'],
      ['Cost of equity should be set equal to the company\'s recent stock return', 'Recent stock return is realised, not required. Plugging realised returns into CAPM defeats the purpose — required returns and realised returns are not the same thing.'],
    ],
    'WACC inputs each have a defensible range. ERPs around 4.5–6%, betas from regression or sector comps, risk-free rates from current long Treasuries. A WACC that comes in materially below the sector cost-of-capital range is usually a sign that one of the inputs has been chosen to produce the answer rather than reflect the risk.'),

  q(4370315, 'Career Skills', CHAPTER, 'Levered vs unlevered beta',
    'A peer company is 50% debt-funded with a regression beta of 1.3. The target company is 10% debt-funded. Why is using the peer\'s 1.3 beta directly in the target\'s WACC wrong, and what is the fix?',
    'The peer beta reflects both business risk and the peer\'s capital structure — unlever it to back out asset beta using the peer\'s D/E and tax rate, then relever using the target\'s capital structure to get the right equity beta for the target',
    [
      ['Just average the betas of the peer set and use that average', 'Averaging levered betas across peers with different capital structures averages in different amounts of leverage risk — the result is not the asset beta of the business, it is a leverage blend.'],
      ['Use the peer beta directly because the businesses are similar', 'Business similarity is exactly the unlevered-beta argument — the business risk is shared, but the leverage is not. Using levered beta directly imports the peer\'s capital structure into your target.'],
      ['Set beta to the sector median and move on', 'Sector medians can be a sensibility check but they hide capital-structure dispersion. For a target with materially different leverage than the median, the median equity beta is the wrong input.'],
    ],
    'Equity beta has two parts: asset (business) beta and a leverage adjustment. Unlevering the peer beta, taking the median asset beta of the comp set, and relevering at the target\'s capital structure produces a beta that reflects the target\'s risk — not an accidental average of peer leverage.'),

  q(4370316, 'Career Skills', CHAPTER, 'Mid-year vs end-of-year discounting',
    'A model discounts each forecast year\'s cash flow to today using the end-of-year convention (cash flow at t=1, 2, 3...). What is the case for switching to a mid-year convention?',
    'Cash flows arrive throughout the year, not all on December 31 — discounting them as if they all hit year-end systematically under-values the forecast period by roughly half a year of discounting',
    [
      ['Mid-year convention produces a higher valuation, so it is the conservative choice', 'Mid-year produces a higher valuation, but "higher" is not the same as "more conservative" — the right framing is that mid-year is more accurate, and the end-of-year shortcut quietly biases down.'],
      ['End-of-year is preferable because it is simpler and the difference is immaterial', 'For a company with a 10% WACC the mid-year adjustment moves valuation by roughly 5%. That is not immaterial for a target price.'],
      ['The conventions are mathematically equivalent over an infinite horizon', 'Over an infinite horizon the difference is exactly the half-year discount factor — it does not vanish. The conventions converge in pattern, not in level.'],
    ],
    'Mid-year discounting reflects that cash flows arrive ratably through the year. It produces a slightly higher (and more accurate) present value than end-of-year and is the standard convention for DCFs at most sell-side desks.'),

  q(4370317, 'Career Skills', CHAPTER, 'Discounting consistency — FCFF vs FCFE',
    'A model discounts free cash flow to the firm (FCFF) using cost of equity rather than WACC. What is the result?',
    'The valuation is internally inconsistent and materially understates the equity value — FCFF, which is pre-interest, must be discounted at WACC; cost of equity belongs with FCFE, which is post-interest',
    [
      ['It overstates valuation because cost of equity is usually higher than WACC', 'Discount rate cause-and-effect is right but the framing is incomplete — the deeper issue is that the cash-flow definition and the discount rate must match, not that one set produces "higher" than the other.'],
      ['It does not matter as long as the spreadsheet runs without errors', 'A model that runs without errors can still be internally inconsistent. The cash-flow/discount-rate match is what makes a DCF defensible — not whether it returns a number.'],
      ['It is fine because FCFF and FCFE are interchangeable definitions', 'FCFF is pre-interest and supports the whole capital base; FCFE is post-interest and supports just the equity. They are not interchangeable, and the discount rate has to match the claim.'],
    ],
    'DCF discipline: FCFF discounts at WACC and gives enterprise value; FCFE discounts at cost of equity and gives equity value directly. Mixing them silently produces a valuation that means nothing.'),

  q(4370318, 'Career Skills', CHAPTER, 'Terminal value is 70% of DCF',
    'In your DCF, terminal value represents 72% of total enterprise value. The senior is suspicious. What is the right diagnosis and response?',
    'TV of 60–80% of total DCF is normal for most businesses — the concern is whether the terminal-year inputs (steady-state margin, capex, working capital, g) are economically defensible, not the headline percentage',
    [
      ['Cut TV to 50% of total value by raising the discount rate', 'Forcing the percentage by tweaking inputs is reverse-engineering. The TV share is a consequence of the assumptions, not a target.'],
      ['Reject the DCF because TV should never exceed 50%', 'A 50% cap on TV would invalidate the DCF method for most growing businesses. The percentage is high for a reason — most of a company\'s value sits past the explicit forecast period.'],
      ['Ignore TV entirely and present an explicit-period-only valuation', 'Truncating value at year 10 understates the business by definition — the company does not stop existing in year 11. The TV is the rest of the value, and it has to be in the answer.'],
    ],
    'Most DCFs have TV at 60–80% of total enterprise value. The right discipline is not to "shrink" TV mechanically but to make terminal-year inputs explicit and defensible — steady-state margin, normalised capex, working-capital intensity, and a g that respects long-run industry growth.'),

  q(4370319, 'Career Skills', CHAPTER, 'Implied exit multiple as sanity check',
    'Your Gordon-growth terminal value implies a 22x EBITDA exit multiple on the terminal year. Peers currently trade at 11x. What does this tell you?',
    'Either the terminal growth rate is too high, the discount rate is too low, the steady-state margin is too optimistic, or the peer multiple really will rerate — most often it is the first three, and the model needs to be revisited before publication',
    [
      ['Nothing — implied exit multiples are arbitrary and not a useful cross-check', 'Implied exit multiple is one of the standard sanity checks against terminal-value run-away. Calling it arbitrary is precisely the discipline most juniors skip until a senior catches the model.'],
      ['Peers are wrong and the DCF is right', '"My model says, market is wrong" is a tenable view occasionally — but it has to be argued, with the specific quality or growth advantage that justifies the rerate. Asserting it without that argument is not a defence.'],
      ['Lower the terminal-year EBITDA to push the implied multiple down', 'Forcing a lower terminal EBITDA to fix the implied multiple is mechanically possible but does not address the actual problem — it just moves the inconsistency from the multiple line to the EBITDA line.'],
    ],
    'The implied exit multiple is the sanity check on a Gordon-growth TV. When implied exits diverge materially from peer multiples, either the terminal inputs are too aggressive or the analyst has a real (defensible) rerate thesis — the wrong answer is to ignore the divergence.'),

  // -------------------------------------------------------------------------
  // SOTP (4370320–4370321)
  // -------------------------------------------------------------------------
  q(4370320, 'Career Skills', CHAPTER, 'Sum-of-the-parts trigger',
    'A diversified holding company has a software segment (40% of EBITDA, 30% growth), an industrial distribution segment (45% of EBITDA, 4% growth), and an insurance segment (15% of EBITDA, ROE 14%). When is SOTP the right framework?',
    'Whenever the segments would trade at materially different multiples on their own — software at high EV/EBITDA, industrial distribution at low double-digit P/E, insurance on P/BV — and a blended multiple obscures more than it reveals',
    [
      ['Whenever the company has more than one segment, regardless of multiple dispersion', 'Two segments with similar economics do not need SOTP. The trigger is multiple dispersion across segments, not segment count.'],
      ['Only when the company has announced a spinoff', 'Spinoff announcement is a catalyst, not a prerequisite for SOTP. Many SOTP valuations are written precisely to *argue* for a spinoff because the discount to parts is large.'],
      ['Never — blended multiples are always preferable for simplicity', 'A blended multiple averages segments with materially different economics, hiding both the strongest and weakest piece. That is not simpler; it is just less informative.'],
    ],
    'SOTP is the right framework when segments belong to different valuation universes. Each piece gets the multiple appropriate to its industry and stage; the parts are summed and reconciled to the current market cap to reveal what the market is or is not crediting.'),

  q(4370321, 'Career Skills', CHAPTER, 'Conglomerate discount and spinoff catalyst',
    'A holdco trades at a 25% discount to a clean SOTP. Management resists a spinoff. What is the analytically honest way to write this up?',
    'Quantify the discount, name the structural reasons it persists (capital allocation across segments, dis-synergy in disclosure, shared corporate overhead), and rate the stock on the assumption the discount stays — with a spinoff scenario as upside, not the base case',
    [
      ['Apply the full SOTP value as the target price on the view that the discount will close', 'Targeting full SOTP without a catalyst is a hope thesis. Conglomerate discounts often persist for years; baking in closure without a path is not analysis.'],
      ['Apply a 50% larger discount than current to be conservative', 'Doubling the discount arbitrarily is the opposite mistake — turning conservatism into pessimism without an argument. The published discount should reflect what is actually structural about the business.'],
      ['Ignore SOTP because the company will never separate', 'The SOTP is informative even if the separation never happens — it tells you what the market is implicitly assigning to each piece and how that drifts over time. Throwing it out loses the diagnostic.'],
    ],
    'The conglomerate discount is real and persistent for most diversified holdcos. The defensible note quantifies the discount, names the structural reasons, and treats forced separation as an upside scenario with explicit catalysts and probabilities — not as the base case.'),

  // -------------------------------------------------------------------------
  // PREMIUM/DISCOUNT TO PEERS (4370322–4370323)
  // -------------------------------------------------------------------------
  q(4370322, 'Career Skills', CHAPTER, 'Defensible premium to peers',
    'You publish a Buy on a name that trades at a 20% NTM P/E premium to peers. Which premium justification holds up under desk and client questions?',
    'Higher structural growth, higher operating margins, cleaner balance sheet, and stronger FCF conversion — quantified against the comp set, year by year, so the premium ties to numbers and not to adjectives',
    [
      ['Better management quality based on management interactions', 'Management quality matters but is hard to quantify and easy to anchor on charisma. A premium argument that lives or dies on "management is better" usually does not survive the first PM meeting where the same company misses.'],
      ['Investor preference for the name over the past 12 months', 'Past investor preference is a price observation, not a quality argument. Multiples are at risk of mean reversion if the only support is recent flows.'],
      ['Coverage analyst conviction', 'Conviction is a stance, not a fundamental input. Sell-side memos that lean on conviction to justify premium tend to age badly when the trade moves against the call.'],
    ],
    'A defensible premium is grounded in observable, durable fundamental differences: growth, margins, capital intensity, balance-sheet quality, FCF conversion. Anything softer than that turns into a price-following call the first time the stock derates.'),

  q(4370323, 'Career Skills', CHAPTER, 'Indefensible premium to peers',
    'A note argues a 25% premium to peers because the analyst "likes management more" and "the story is exciting." A senior pushes back hard. Why is the pushback right?',
    'The premium rests on subjective preference rather than quantified, durable fundamental advantage — when the story stops being exciting, the premium has no anchor and the rating becomes a sentiment bet',
    [
      ['The senior is being overly conservative — qualitative factors matter', 'Qualitative factors do matter, but they need to be tied to something observable: capital allocation track record, hiring choices, segment economics. "Like management" without an anchor is a feeling, not an argument.'],
      ['The premium is fine as long as the analyst has high conviction', 'Conviction without numbers is a sentiment trade. The note then cannot defend itself when the stock starts derating — there is nothing to point to and no falsifier in the original write-up.'],
      ['Premiums are subjective and do not require justification', 'Every multiple judgement is auditable. Compliance, the editor, and any half-attentive PM expect the premium to be tied to fundamentals — that is the standard, not an analyst-by-analyst preference.'],
    ],
    'Premiums need fundamental anchors. "We like management" and "the story is exciting" are not anchors — they are reasons the analyst likes the stock, which is a different question from why the multiple should be higher than peers.'),

  // -------------------------------------------------------------------------
  // TARGET PRICE (4370324–4370326)
  // -------------------------------------------------------------------------
  q(4370324, 'Career Skills', CHAPTER, 'Target price horizon',
    'A client asks what timeframe a sell-side analyst\'s target price refers to. What is the standard answer?',
    'Typically 12 months forward — the target represents where the analyst expects the stock to trade in roughly a year, anchored on NTM or one-year-forward estimates',
    [
      ['Three months, aligning with the next earnings cycle', 'Three months is too short to incorporate the fundamental drivers most ER targets rely on. It would also produce a target that moved on every quarter and lost analytical meaning.'],
      ['Five years, matching the explicit DCF period', 'Five years is the DCF horizon, not the target-price horizon. Targets need to be testable in a reasonable observation window — five years is too long for client usability.'],
      ['No horizon — targets are point-in-time fair-value estimates', 'A no-horizon target collapses into a present-value calculation and loses its forward signalling role. The 12-month convention exists precisely to embed forward expectations.'],
    ],
    'Sell-side targets are conventionally 12 months forward. Buy-side often translates that to its own horizon, but the published number is anchored to roughly one year of forward fundamentals — that is why NTM estimates and target prices move together.'),

  q(4370325, 'Career Skills', CHAPTER, 'NTM-based target construction',
    'You build a 12-month target price by multiplying your NTM EPS estimate by the target multiple. A junior asks why this is not double-counting growth. What is the answer?',
    'NTM EPS is the earnings expected over the next 12 months — applying the target multiple gives the price the market should pay at the end of that period for the *then-NTM* (one-year-forward) earnings, which is exactly the 12-month target frame',
    [
      ['You are right — multiply by LTM EPS instead to avoid double counting', 'LTM at horizon date is what NTM is from today\'s perspective. Switching to LTM would actually anchor on yesterday\'s earnings at the horizon, which understates the target.'],
      ['Use today\'s consensus EPS without forecasting forward', 'Today\'s consensus is already an estimate, but if you apply your target multiple to today\'s NTM and call it a 12-month target, you are anchoring on the wrong year of earnings for the horizon date.'],
      ['Target prices and EPS estimates should be computed separately and not multiplied', 'Target = multiple × EPS is the mechanical bridge sell-side notes use. Separating them would leave the target floating with no audit trail back to estimates.'],
    ],
    'The mechanics are: pick a target multiple defensible for the name, apply it to the appropriate forward-EPS slice (typically the year-out earnings at the target horizon), and you get a price the market should accept at horizon. NTM at today equals what becomes LTM in 12 months — no double-counting.'),

  q(4370326, 'Career Skills', CHAPTER, 'Bull/base/bear sensitivity bands',
    'A senior asks you to add bull and bear cases around the base-case target. What is the disciplined way to construct them?',
    'Move two or three specific, named drivers — for example margin trajectory, growth rate, target multiple — by amounts grounded in historical dispersion or competitive scenarios; do not just multiply the base case by ±20%',
    [
      ['Bull = base × 1.3, Bear = base × 0.7, applied uniformly', 'A flat ±30% band is a presentation trick, not analysis. It does not tell the client which drivers move the case and by how much, and so it cannot inform position sizing.'],
      ['Bull = best peer\'s multiple, Bear = worst peer\'s multiple, no other changes', 'Holding estimates constant and only flexing the multiple under-states the dispersion of the actual business. Cycle-driven names see margin and growth move together — bull and bear cases should reflect that.'],
      ['Skip the bear case because it weakens the rating', 'Omitting the bear case removes the most useful part of the sensitivity analysis. Compliance and any thoughtful client expects to see what would invalidate the call.'],
    ],
    'Bull and bear cases name the specific drivers that change, by how much, and why. Done well, they tell the client which two or three variables matter most — and they double as kill criteria when the data starts pointing at the bear case.'),

  // -------------------------------------------------------------------------
  // RISK-REWARD AND RATING SYSTEMS (4370327–4370332)
  // -------------------------------------------------------------------------
  q(4370327, 'Career Skills', CHAPTER, 'Risk-reward — 30/15 = Buy',
    'A stock trades at $50. Base-case target is $65 (30% upside). Bear-case is $42.50 (15% downside). What rating does this risk-reward typically support on a sell-side scale?',
    'Buy — 30% upside against 15% downside is roughly 2:1 reward-to-risk, which is the canonical threshold most desks use for a constructive rating',
    [
      ['Hold — 30% upside is not enough on its own', '30% upside alone is in the Buy range for most desks. The question is the *ratio* with downside, and 2:1 clears the bar most analysts and PMs use.'],
      ['Sell — the downside scenario is too large in absolute terms', '15% absolute downside is not in itself disqualifying — every long has a bear case. The ratio is what determines the rating, and 2:1 is constructive.'],
      ['Cannot be determined without a probability weighting', 'Probability weighting is an additional refinement, not a prerequisite. Standard sell-side rating scales operate on raw bull/base/bear bands.'],
    ],
    'A common shorthand: roughly 2:1 upside/downside supports Buy, roughly 1:1 supports Hold, inverse ratios (upside < downside) support Sell. Probability weighting refines the call but the baseline is set by the band ratios.'),

  q(4370328, 'Career Skills', CHAPTER, 'Risk-reward — 10/20 = Sell',
    'A stock trades at $80. Base-case target is $88 (10% upside). Bear-case is $64 (20% downside). What rating does this risk-reward typically support?',
    'Sell or Underweight — the ratio is inverted, with downside dominating upside; that is the textbook risk-reward profile for a negative rating',
    [
      ['Hold — 10% upside is still positive, and the downside is hypothetical', 'Both legs are scenarios, so "the downside is hypothetical" cuts both ways. The rating is set by the relative bands, and an inverted ratio is what produces a Sell.'],
      ['Buy — any positive expected return justifies a Buy rating', 'Positive expected return is not the bar. The bar is risk-adjusted expected return, and a 10/20 split fails that test on most desks.'],
      ['No rating because the bands are too narrow', 'The bands are not unusually narrow — they are the normal size for a mid-cap stable name. The issue is the asymmetry, which is exactly what a rating is supposed to communicate.'],
    ],
    'When downside dominates upside, the rating points to Sell or Underweight on most sell-side scales. The published note should also explicitly name what would change the call — a target-price move, an estimate revision, a catalyst — so clients know what to monitor.'),

  q(4370329, 'Career Skills', CHAPTER, 'Risk-reward — 15/15 = Hold',
    'A stock has 15% upside to base case and 15% downside to bear case. The analyst rates it Hold. Defend the rating in one sentence.',
    'Symmetric risk-reward at modest magnitudes is the canonical Hold setup — the analyst sees fundamentals that support the current valuation but no compelling case to overweight or underweight relative to peers',
    [
      ['Hold means the analyst has no view', 'Hold means the analyst sees roughly balanced risk and reward at the current price — that is a view. Confusing Hold with "no opinion" is one of the most common buy-side misreads of sell-side ratings.'],
      ['Hold is a default rating for coverage maintenance', 'Hold *can* be over-used for coverage maintenance reasons, but a defensible Hold has an analytical basis — symmetric risk-reward is the canonical one. The buy-side reader has to distinguish the two cases.'],
      ['Hold means a Sell that the analyst is too cautious to publish', 'There are coverage and banking-conflict reasons that bias ratings toward Hold rather than Sell, but the *defence* of a Hold should still come from symmetric risk-reward, not from rating-system pathology.'],
    ],
    'Hold is an analytical rating with content: balanced upside and downside, modest expected return relative to peers, and an explicit set of catalysts that would move the call. Confusing it with "no view" misses what the rating is doing.'),

  q(4370330, 'Career Skills', CHAPTER, 'Sell-side rating systems',
    'Different sell-side firms use different rating scales — Buy/Hold/Sell, Overweight/Equal/Underweight, Outperform/Market Perform/Underperform. What is the practical implication for the buy-side reader?',
    'The labels are not mechanically equivalent across firms — distribution differs, the meaning of the middle bucket varies, and clients have to learn each firm\'s typical band thresholds rather than assume a universal scale',
    [
      ['All three systems mean the same thing and are interchangeable', 'They are similar in spirit but differ in distribution and convention. A "Hold" at one firm and an "Equal Weight" at another can imply different risk-reward bands.'],
      ['SEC regulation standardises rating definitions across firms', 'FINRA Rule 2241 requires firms to define their rating system and disclose the distribution, but it does not standardise the scales themselves. Each firm sets its own band thresholds.'],
      ['Buy-side firms must ignore sell-side ratings entirely', 'Buy-side firms do not ignore sell-side ratings — they translate them using each broker\'s historical distribution and how the rating maps to actual estimate and target changes.'],
    ],
    'FINRA Rule 2241 requires firms to define and disclose their rating systems and distributions but does not standardise the scales. The buy-side learns each firm\'s thresholds, distributional skews (especially the over-representation of Holds), and how ratings track estimate and target changes.'),

  q(4370331, 'Career Skills', CHAPTER, 'Buy-side translation of sell-side ratings',
    'A buy-side analyst is preparing a screen using sell-side rating revisions as one of the inputs. Why is it dangerous to treat all "Hold" ratings as equivalent across brokers?',
    'Some brokers run Hold-heavy distributions (50%+ of coverage), in which case a Hold conveys little; others run Hold-light distributions, where a Hold is a meaningful negative signal — without normalising by broker distribution, the screen mixes apples and oranges',
    [
      ['Holds are inherently noise and should always be filtered out', 'Holds carry information when the broker\'s distribution skews Buy-heavy — a Hold at a 70%-Buy shop is closer to a Sell at most others. Filtering them all loses signal in those cases.'],
      ['All sell-side firms have the same Hold distribution, so the question does not arise', 'Firm-level rating distributions vary substantially and are disclosed publicly under FINRA rules. The screen has to use that disclosure.'],
      ['Only the rating change matters, not the level', 'The rating *change* is the strongest signal, but the level (and its rarity at that broker) still matters. A downgrade to Sell at a Sell-shy broker carries more weight than at a Sell-heavy one.'],
    ],
    'Buy-side translation of sell-side ratings normalises by broker distribution, looks at rating *changes* rather than levels, and pays attention to the simultaneous estimate and target-price moves. A rating change without a target change is often a coverage-maintenance signal, not a fundamental one.'),

  q(4370332, 'Career Skills', CHAPTER, 'Why Hold is over-represented',
    'A buy-side PM observes that Holds make up 45% of sell-side US coverage versus around 8% Sells. What structural reasons drive this distribution, and what does the PM do about it?',
    'Hold is the rating that maintains corporate access, avoids open conflict with banking clients, and keeps the analyst out of the most contentious client conversations — the PM treats Hold as a soft-Sell signal at firms where Hold is rare and as a noise rating at firms where Hold dominates',
    [
      ['Holds are common because most stocks really are fairly valued', 'If half of all stocks were genuinely Hold-worthy, Sells would be much closer to a third of the universe. The 45/45/8 split is not a statement of fact about valuation — it reflects structural pressures on the rating choice.'],
      ['Holds are randomly assigned to maintain coverage diversity', 'Ratings are not randomly assigned — they reflect the analyst\'s view tempered by institutional considerations. Randomness is not the explanation.'],
      ['Sell ratings are illegal under US securities rules', 'Sell ratings are explicitly permitted and required to be a meaningful share of distribution disclosures under FINRA Rule 2241. The constraint is institutional, not regulatory.'],
    ],
    'Structural reasons inflate the Hold bucket: corporate access, banking conflicts (despite Global Settlement firewalls), and analyst-management relationships. Sophisticated buy-side reading translates "Hold at a Sell-shy broker" as a soft-Sell and watches estimate trajectory rather than rating level.'),

  // -------------------------------------------------------------------------
  // CATALYSTS AND VARIANT PERCEPTION (4370333–4370337)
  // -------------------------------------------------------------------------
  q(4370333, 'Career Skills', CHAPTER, 'Earnings event catalyst',
    'An analyst writes that "earnings on October 28 is a key catalyst." A junior asks what makes an earnings print a catalyst versus just an event. What is the answer?',
    'Earnings is a catalyst when the analyst has a differentiated view on the print (above- or below-consensus) and a clear thesis for how the market reaction repositions the stock — without a directional view, it is an event but not a catalyst',
    [
      ['Earnings is always a catalyst because the stock will move', 'Movement is not the same as catalysis — the relevant question is whether the analyst can position the call around it. If consensus is right and the market reaction is muted, the earnings print is just an event.'],
      ['Earnings is a catalyst only if it beats consensus', 'Beats and misses both create catalysts, but the analyst\'s thesis can also be that consensus is correct and the next leg of the call comes after the print clears. The catalyst is in the *positioning*, not the direction of surprise.'],
      ['Earnings is never a true catalyst because it is scheduled', 'Scheduled catalysts are the most usable catalysts because clients can position around them. Earnings dates are among the cleanest event-catalyst categories on the sell-side calendar.'],
    ],
    'A catalyst is an identifiable event with a directional thesis attached. Scheduled catalysts (earnings, investor days, guidance) are usable when the analyst has variant perception on what will be reported; unscheduled catalysts (M&A, regulatory) need probability framing.'),

  q(4370334, 'Career Skills', CHAPTER, 'Beat-and-raise as catalyst',
    'You are positioned long ahead of a print on the view that the company will beat the quarter and raise full-year guidance. What is the most useful way to think about the catalyst structure?',
    'A "beat-and-raise" is two catalysts in one — the immediate EPS surprise drives a near-term reaction, and the raised guidance drives consensus revisions and target-price revisions over the following weeks; the second leg often matters more for the trade',
    [
      ['Beat-and-raise is one catalyst because both happen on the same call', 'Mechanically they happen at the same time, but their effects play out on different time scales — the beat moves the stock that day, the raise feeds through analyst models over the following weeks.'],
      ['Beats are catalysts; raises are background colour and rarely move the stock', 'Guidance raises feed directly into consensus EPS, which is the denominator of every forward P/E in the comp set. They move the stock both via estimate revisions and via multiple support.'],
      ['Beat-and-raise is irrelevant if the stock has already run into the print', 'Run-in is real but does not eliminate the catalyst structure. The relevant question is whether the magnitude of the beat-and-raise outpaces what is in the stock — which is exactly the analyst\'s differentiated-view test.'],
    ],
    'Beat-and-raise prints have two catalysts: the immediate EPS reaction and the estimate-and-target revision cycle that follows. The second cycle is often the larger driver because it is what permanently moves consensus and the implied multiple support.'),

  q(4370335, 'Career Skills', CHAPTER, 'Corporate action catalysts',
    'A company is rumoured to announce a $2bn share buyback acceleration and is also evaluating a spinoff of its non-core segment. How should an analyst frame these as catalysts in a published note?',
    'Both are real catalysts but with very different mechanics — the buyback is a near-certain return-of-capital lever that compresses share count and supports EPS; the spinoff is a structure-change catalyst that unlocks valuation if and when announced',
    [
      ['Both are noise until announced and should not appear in the note', 'Pre-announcement catalysts can be discussed under appropriate disclosure — sell-side notes routinely lay out probability-weighted scenarios for both. Refusing to engage with them under-serves the client.'],
      ['Buybacks and spinoffs are economically equivalent so the framing should treat them as one catalyst', 'They are not equivalent — a buyback returns cash through reduced share count; a spinoff changes corporate structure and unlocks SOTP value. The analyst owes the client the distinction.'],
      ['Spinoffs always raise the stock so write the note as if it has already happened', 'Spinoff announcement reactions are not uniformly positive — they depend on which segment, what capital structure, and whether the parent retains value. Assuming a positive reaction is shortcut analysis.'],
    ],
    'Corporate-action catalysts (buybacks, spinoffs, M&A, large capital returns) come in different flavours with different mechanics. The note frames each one with the specific way it changes the stock — share count, structure, leverage — rather than lumping them as generic "positive catalysts."'),

  q(4370336, 'Career Skills', CHAPTER, 'Variant perception sourcing',
    'An analyst publishes a Buy on the view that consensus FY2 revenue is 8% too low. A PM asks where the variant perception is sourced. What is a defensible answer?',
    'Channel checks with three of the company\'s top distributors showing larger orders than consensus implies, plus alt data on web traffic and hiring postings consistent with capacity expansion — sourced, dated, and quantified rather than asserted',
    [
      ['The analyst\'s years of experience and intuition about the sector', 'Intuition without data does not survive a PM cross-examination. The variant view has to be tied to something the analyst saw that consensus has not seen yet — otherwise it is just a different forecast.'],
      ['Disagreement with consensus is itself the variant — no further sourcing required', 'Disagreement is the *symptom* of variant perception, not the evidence for it. The defence has to point at the data or framework that produced the disagreement.'],
      ['A conversation with the CEO at an investor event', 'CEO conversations at events fall under Reg FD constraints — non-public, material information from those settings is precisely what the analyst cannot rely on. Reasonable sourcing has to be independent of selective company disclosure.'],
    ],
    'Variant perception is only defensible when the analyst can point at the sourcing: channel checks, alt data, primary research, framework differences. "I just disagree" is not variant perception — it is opinion. Reg FD constraints make non-selective sources especially important.'),

  q(4370337, 'Career Skills', CHAPTER, 'Variant perception risk',
    'Your variant perception (8% above consensus on FY2) proves wrong when the company guides to consensus and consensus does not revise up. What is the right discipline for the call now?',
    'Reassess whether the original sourcing was misread or whether something has changed — if the variant was based on flawed channel checks, the rating and target should come down; if the underlying data still supports the variant, the timing is the issue, not the thesis',
    [
      ['Hold the rating and target — the variant just has not played out yet', 'That can be the right answer, but only after the sourcing has been re-examined. Holding ratings on broken theses is exactly the rating-system pathology the Hold-bucket discussion is about.'],
      ['Cut to Sell immediately to demonstrate willingness to change view', 'Going from Buy to Sell on one print, without redoing the work, is whiplash rather than discipline. The right move is to re-examine the data and let the conclusion follow.'],
      ['Ignore the print because variant perception always takes time to be vindicated', '"Always" is the tell. Some variant perceptions take time; others were wrong. The discipline is to know which one you have, which requires going back to the sourcing.'],
    ],
    'When variant perception fails to play out, the discipline is to retest the sourcing rather than defend the conclusion. Sometimes the data was misread (rating should change); sometimes the timing is just slower than expected (rating stands with a longer horizon). The note should be explicit about which case applies.'),

  // -------------------------------------------------------------------------
  // RATING CHANGES AND COMMON TRAPS (4370338–4370341)
  // -------------------------------------------------------------------------
  q(4370338, 'Career Skills', CHAPTER, 'Rating-change threshold — 15% target move',
    'Internal policy at a sell-side firm says target-price moves of more than 15% require a rating reassessment. Why is that threshold there?',
    'A 15%+ move in the target — without a rating change — implies the analyst is comfortable with the new target but unwilling to update the implied risk-reward stance, which is the structural setup for inconsistency between estimates and rating',
    [
      ['The threshold is regulatory under FINRA rules', 'FINRA requires disclosure and consistency in published research but does not set a specific percentage threshold. Firm policies layer on top of regulation.'],
      ['Target prices and ratings are independent, so the threshold is bureaucratic', 'Targets and ratings are explicitly linked via the upside/downside math the rating reflects. A target move usually changes that math, which is the entire point of the threshold.'],
      ['15% is the inflation-adjusted equivalent of a one-standard-deviation move', 'There is no standard-deviation rationale for the 15% threshold — it is a heuristic chosen so that material target moves trigger a rating review, not a statistical convention.'],
    ],
    'Rating-change thresholds (commonly 15–20% on the target) are firm-policy guardrails to keep estimates and ratings consistent. The analytical version is the same: when the target moves enough to change implied upside, the rating has to be revisited or the inconsistency has to be defended explicitly.'),

  q(4370339, 'Career Skills', CHAPTER, 'Rating change when thesis breaks',
    'You have been Buy-rated on a name. The lead growth driver in your thesis — a new product launch — is delayed by 18 months. Estimates come down 20% and the stock falls 25%. The new risk-reward at current price still shows 25% upside. What rating action is most defensible?',
    'Reassess the thesis before mechanically holding the Buy — the original investment thesis is broken, the new upside depends on a different (and possibly less compelling) set of drivers, and the rating should reflect the changed character of the call, not just the math at the new price',
    [
      ['Maintain Buy because risk-reward still works at the lower price', 'Mechanical risk-reward at the new price ignores that the entire thesis has changed. The new 25% upside depends on different drivers than the original call — that needs to be argued, not assumed.'],
      ['Downgrade to Sell to manage credibility after the miss', 'Downgrading to Sell *because the stock fell* is performative rating management. The rating should reflect the new risk-reward and the new thesis, which often supports Hold rather than Sell.'],
      ['Maintain Buy and lower the target by 25% to match the price', 'Following the price with the target preserves the upside arithmetically while abandoning the thesis. That is exactly the chase-the-rally-or-the-decline pattern good rating discipline guards against.'],
    ],
    'A broken thesis demands a fresh start: redo the work, identify the new drivers, set a new target on new assumptions, and let the rating fall out of the *new* risk-reward — not out of price-following math or rating optics.'),

  q(4370340, 'Career Skills', CHAPTER, 'Beat-and-raise but the stock falls',
    'A company beats consensus EPS by 5%, raises full-year guidance by 4%, and the stock falls 8% on the day. What is the most likely explanation, and how should the analyst handle the note that night?',
    'The print was already in the stock — buy-side whisper numbers were above consensus, the raise was below buy-side expectations, or forward commentary on a specific KPI (gross margin, deferred revenue, segment growth) disappointed; the note has to dig past the headline and find which one',
    [
      ['The market is irrational and the analyst should ignore the price action', 'Headline beats with negative reactions almost always have a sub-headline explanation — whisper numbers, segment composition, guidance shape, KPI miss. Calling it irrationality is shortcut analysis.'],
      ['The beat-and-raise was not large enough to justify the rating', 'Magnitude can matter, but the analytically interesting question is *which* line in the print produced the negative reaction. The note has to identify it before the next morning\'s reads cycle.'],
      ['The stock will mean-revert tomorrow so no action is needed', 'Mean-reversion is one of the worst defaults for a sell-side note. The right discipline is to find what the market saw that the headline missed.'],
    ],
    'When headline beat-and-raise prints produce negative reactions, the explanation is usually below the headline — whisper numbers, sub-segment growth, gross-margin trajectory, deferred-revenue mix, or guidance shape relative to buy-side expectations. The night-of note finds the specific line that moved the print.'),

  q(4370341, 'Career Skills', CHAPTER, 'DCF vs multiples — which is more accurate',
    'A junior argues DCF is "more accurate" than multiples because it ties to first-principles cash flows. A senior pushes back. What is the right framing?',
    'Neither is more accurate in the abstract — DCF is more *complete* (it forces explicit assumptions on growth, margins, capital, discount rate) but also more sensitive to inputs, while multiples encode the market\'s aggregate judgement at a cost of opacity; the discipline is to use both and explain divergences',
    [
      ['DCF is mathematically more rigorous and therefore always more accurate', 'Rigour is not the same as accuracy. A DCF with sloppy terminal-value assumptions can produce wider errors than a well-chosen multiple — the math being explicit makes the inputs visible but does not make them right.'],
      ['Multiples are more accurate because they reflect what the market is actually paying', 'Market multiples reflect aggregate judgement, but that judgement can be wrong on individual names — which is the entire point of an analyst publishing a view. Multiples are anchors, not truths.'],
      ['Choosing between DCF and multiples is purely a stylistic preference', 'It is not a style preference — each method has structural strengths and weaknesses, and the analyst chooses based on the company stage, capital intensity, and the question being asked.'],
    ],
    'DCF and multiples are complementary, not competing. DCF forces a complete, auditable set of assumptions; multiples encode market pricing in a compact way. The good note presents both, explains divergences, and lets the reader see the assumptions that drive the gap.'),
]

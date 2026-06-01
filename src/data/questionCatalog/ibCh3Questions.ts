import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// IB CHAPTER 3 — Valuation Core (expansion bank)
// ----------------------------------------------------------------------------
// 41 additional questions (IDs 4351200–4351240) supplementing the existing 9
// Chapter 3 questions in careerAgentGeneratedRoadmapFinance.ts. The existing 9
// already cover: multiple selection, DCF terminal-value sanity, precedent
// filter, EV bridge arithmetic, calendar mismatch, lease treatment, share-
// count cleanup, WACC build, football field synthesis. This bank goes wider
// and deeper into the analyst-level mechanics that sit underneath those:
// DCF assembly (unlevered FCF, Gordon vs exit multiple, mid-year discounting),
// WACC components (unlever/relever beta, after-tax debt cost, equity risk
// premium handling), terminal sensitivity, comp selection and calendarization,
// EBITDA adjustments inside comps, NTM vs LTM framing, precedent transaction
// nuance (control premium, public-vs-private targets, transaction-date
// effects), football field construction, sum-of-the-parts, LBO floor, basic
// accretion/dilution, premium-to-unaffected, EV/EBITDA vs P/E vs EV/Sales,
// multiples in growth vs mature, market cap / float mechanics, treasury-stock
// method, EV bridge components (minority interest, preferred, leases),
// normalization for non-recurring items, currency considerations.
//
// Voice: matches jargonBusters.ts and the existing Valuation Core bank.
// Specific, evidence-anchored, no filler, no strawman distractors. Every
// wrong-answer rationale is bespoke and points at a real misconception a
// career-changer or first-year analyst would actually make.
//
// US context throughout — US GAAP, US public markets, USD.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe IB Ch3 canonical bank'

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

const CHAPTER = 'Valuation Core'

// Difficulty distribution target: ~29% at 3, ~51% at 4, ~20% at 5.
// 41 questions: 12 at 3, 21 at 4, 8 at 5.
export const IB_CH3_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  4351200: 3, // Unlevered free cash flow components
  4351201: 3, // Gordon growth vs exit multiple framing
  4351202: 4, // Terminal growth sanity check
  4351203: 4, // Mid-year vs end-of-year discounting
  4351204: 4, // Unlevering beta workflow
  4351205: 4, // After-tax cost of debt mechanics
  4351206: 3, // CAPM cost of equity assembly
  4351207: 4, // Equity risk premium source discipline
  4351208: 5, // Beta from a thinly-traded comp
  4351209: 4, // Terminal value sensitivity disclosure
  4351210: 3, // Normalizing the final forecast year
  4351211: 4, // Capex normalization in terminal year
  4351212: 5, // Implied exit multiple cross-check
  4351213: 3, // Comp universe selection criteria
  4351214: 4, // Calendarization mechanics
  4351215: 5, // EBITDA adjustments inside comps
  4351216: 4, // NTM vs LTM choice
  4351217: 3, // Precedent transaction date relevance
  4351218: 4, // Control premium in precedents
  4351219: 5, // Public-target vs private-target spread
  4351220: 4, // Football field range construction
  4351221: 4, // Football field width discipline
  4351222: 5, // Sum-of-the-parts segmentation
  4351223: 4, // LBO as floor value
  4351224: 3, // LBO IRR target translation
  4351225: 3, // Accretion / dilution direction rule
  4351226: 4, // Accretion is not value creation
  4351227: 4, // Premium-to-unaffected calculation
  4351228: 3, // EV/EBITDA vs P/E choice
  4351229: 4, // EV/Sales scope and limits
  4351230: 4, // Multiples in growth vs mature businesses
  4351231: 3, // Market cap vs enterprise value
  4351232: 4, // Public float mechanics
  4351233: 4, // Treasury stock method
  4351234: 5, // In-the-money options at the strike boundary
  4351235: 5, // Convertible note treatment in diluted count
  4351236: 4, // Minority interest in EV bridge
  4351237: 4, // Preferred stock in EV bridge
  4351238: 3, // Operating lease debt treatment
  4351239: 5, // Non-recurring item normalization for LTM EBITDA
  4351240: 3, // Currency in cross-border comps
}

export const ibCh3Questions: Question[] = [
  // -------------------------------------------------------------------------
  // DCF assembly (4351200–4351212)
  // -------------------------------------------------------------------------
  q(4351200, 'Career Skills', CHAPTER, 'Unlevered free cash flow components',
    'You are building the explicit forecast period of a DCF for a US industrials target. Which formula correctly defines unlevered free cash flow to the firm?',
    'EBIT × (1 − tax rate) + D&A − capex − change in net working capital',
    [
      ['Net income + D&A − capex − change in working capital + after-tax interest expense', 'That is essentially levered free cash flow run backwards. Starting from net income mixes in interest, so adding back after-tax interest is required — but for a DCF discounted at WACC, the cleaner build starts from EBIT and tax-affects it directly.'],
      ['EBITDA − capex − change in net working capital, with no tax adjustment', 'Skipping taxes overstates cash flow by the entire tax leg. EBITDA × (1 − t) is not the right shortcut either because D&A is not tax-deductible in the same way as cash operating expenses — you have to tax-affect EBIT, then add D&A back.'],
      ['EBIT × (1 − tax rate) − D&A − capex − change in working capital', 'D&A is added back, not subtracted. It was already deducted to get from EBITDA to EBIT — subtracting it again double-counts the non-cash charge.'],
    ],
    'Unlevered free cash flow for a WACC-discounted DCF is EBIT × (1 − t) + D&A − capex − ΔNWC. The point of unlevering is to keep interest expense out of the numerator so the discount rate (WACC) can carry the capital-structure information.'),

  q(4351201, 'Career Skills', CHAPTER, 'Gordon growth vs exit multiple framing',
    'A senior banker asks you to disclose terminal value under both Gordon growth and exit-multiple approaches. Which framing is the cleanest explanation of why a DCF shows both?',
    'Gordon growth disciplines the assumption set against perpetuity arithmetic; exit multiple disciplines it against where the market actually trades comparable companies — showing both forces the analyst to defend the terminal under two different lenses',
    [
      ['Gordon growth produces the higher terminal so it is preferred for sell-side defenses', 'Which method produces the higher number depends entirely on the inputs. Choosing the method by which one happens to be higher is anchor-shopping, not analysis.'],
      ['Exit multiple is more accurate because it uses real market data', 'Exit multiples use today\'s market data applied to a year-5 number — that is not the same as "real." Multiples also embed today\'s growth, margin, and rate environment, which may not match year 5.'],
      ['The two methods exist because Gordon growth fails for negative-growth companies', 'Gordon growth works for any g < WACC, including small or zero growth. The reason both methods are shown is cross-validation, not a special-case workaround.'],
    ],
    'Gordon growth and exit multiple are two ways to test the same number. The discipline is to show both and reconcile the gap — if they diverge sharply, one of the inputs is wrong, not the methodology.'),

  q(4351202, 'Career Skills', CHAPTER, 'Terminal growth sanity check',
    'A draft DCF for a US software company uses a terminal growth rate of 4.5%. The risk-free rate is 4.0% and long-run US real GDP growth is roughly 2%. What is the analyst\'s correct response?',
    'Reduce terminal growth toward long-run nominal GDP (typically 2.0–3.0%) — a perpetuity growth rate that exceeds the economy\'s long-run nominal growth implies the company eventually becomes larger than the economy',
    [
      ['Leave it at 4.5% because software companies have always grown faster than GDP', 'Software companies grow fast for a decade or two, not forever. Terminal growth is the perpetuity assumption — it has to be defensible past the explicit forecast horizon, which is when above-economy growth has by definition ended.'],
      ['Raise it to 5.0% to match the explicit forecast growth in year 5', 'Terminal growth should be slower than late-stage explicit growth, not equal to it. The whole point of the terminal period is that the company has matured to a steady state.'],
      ['Set terminal growth equal to WACC because that is the long-run equilibrium', 'g must be less than WACC for the Gordon formula to converge — setting them equal sends terminal value to infinity. Setting g equal to WACC is the textbook way to break the model.'],
    ],
    'Terminal growth has a hard ceiling at long-run nominal GDP (sometimes a touch higher for global companies). Anything above that implies the company eventually consumes the whole economy, which is the canonical flag in any IC review.'),

  q(4351203, 'Career Skills', CHAPTER, 'Mid-year vs end-of-year discounting',
    'Your model discounts cash flows at the end of each year. A senior banker asks you to switch to mid-year discounting. What does that change and why?',
    'It assumes cash flows arrive on average mid-year rather than at year-end, so each year is discounted by (n − 0.5) instead of n — this raises every cash flow modestly and is the more economically realistic convention for a business generating cash throughout the year',
    [
      ['Mid-year is a tax-driven convention that only applies to S-corporation models', 'Mid-year discounting is a timing convention in the DCF, not a tax election. It applies regardless of corporate form.'],
      ['Mid-year lowers the valuation because cash flows are discounted twice', 'Mid-year raises the present value because each cash flow is discounted by a smaller exponent (n − 0.5 instead of n). The cash flows are not discounted twice.'],
      ['Switching to mid-year requires re-deriving WACC because the discount rate also changes', 'WACC does not change. Only the exponent on each year\'s discount factor changes — the rate itself stays the same.'],
    ],
    'Mid-year discounting moves the present-value exponent from n to n − 0.5 for each year (including terminal value, where conventions vary — some shops apply n − 0.5, some n). Net effect: PV rises a few percent. The economic logic is that businesses earn cash continuously, not in a year-end lump.'),

  q(4351204, 'Career Skills', CHAPTER, 'Unlevering beta workflow',
    'You pulled levered betas from five public comps. What is the correct workflow to produce a beta for your DCF?',
    'Unlever each comp\'s beta using its own debt-to-equity and tax rate, average (or median) the unlevered betas, then relever using the target\'s assumed long-run capital structure and tax rate',
    [
      ['Average the five raw levered betas directly and use that figure in CAPM', 'Each comp has different leverage, so its levered beta carries its own capital-structure noise. Averaging raw levered betas mixes operating risk with whatever debt the comps happen to be carrying today.'],
      ['Use the closest-size comp\'s levered beta without adjusting for capital structure', 'Single-comp betas are noisy and still carry that comp\'s specific capital structure. The averaging step exists to dampen single-name noise; the unlever-relever step exists to control for leverage differences.'],
      ['Unlever all five, average, and use the unlevered average directly without relevering', 'Skipping the relever step assumes your target has zero debt, which is rarely the modeling intent. The relevered beta has to reflect the target\'s capital structure to make WACC internally consistent.'],
    ],
    'The full workflow is: unlever each comp (β_u = β_L / (1 + (1 − t) × D/E)), average the unlevered betas, then relever to the target\'s capital structure (β_L = β_u × (1 + (1 − t) × D/E)). Skipping any step imports the wrong information into your cost of equity.'),

  q(4351205, 'Career Skills', CHAPTER, 'After-tax cost of debt mechanics',
    'Your target has $300M of debt with a weighted-average pre-tax cost of 6.5%. The marginal tax rate is 25%. What number flows into WACC for the cost of debt component, and why?',
    'Approximately 4.875% — the after-tax cost of debt is Kd × (1 − t), because interest expense is tax-deductible in the US so the effective cost to the firm is reduced by the marginal tax rate',
    [
      ['6.5% — WACC uses pre-tax cost of debt because the tax shield is captured elsewhere in the model', 'WACC explicitly uses after-tax cost of debt. The tax shield is captured *inside* WACC via the (1 − t) factor — it is not handled "elsewhere."'],
      ['8.125% — multiply Kd by (1 + t) to gross up for the tax benefit', 'That goes the wrong direction. Tax-deductibility lowers the effective cost of debt, so the adjustment is multiplication by (1 − t), not (1 + t).'],
      ['Use 4.875% but only for the portion of debt secured against operating assets; 6.5% for unsecured debt', 'The tax-deductibility of interest does not depend on whether the debt is secured. All interest expense is generally tax-deductible (subject to §163(j) limits, which are a separate cap, not a security-driven distinction).'],
    ],
    'After-tax cost of debt is Kd × (1 − t) and this is the figure that goes into WACC. The tax shield is exactly why debt is cheaper than equity — and exactly why WACC falls (within limits) as leverage rises.'),

  q(4351206, 'Career Skills', CHAPTER, 'CAPM cost of equity assembly',
    'Risk-free rate is 4.0%, equity risk premium is 5.5%, and the relevered beta is 1.1. What is the CAPM cost of equity?',
    '10.05% — Ke = Rf + β × ERP = 4.0% + 1.1 × 5.5% = 4.0% + 6.05% = 10.05%',
    [
      ['9.5% — add Rf and ERP without scaling by beta', 'That ignores beta entirely. Beta scales the equity risk premium to reflect this company\'s sensitivity to market risk — dropping it strips the most important driver out of CAPM.'],
      ['6.05% — use only β × ERP without the risk-free rate', 'The risk-free rate is the base on which equity risk is layered. Omitting Rf treats equity as if it had no time-value-of-money component.'],
      ['11.05% — multiply (Rf + ERP) by beta', 'Beta scales only the equity risk premium, not the risk-free rate. Multiplying the whole sum by beta double-counts beta into the time-value component.'],
    ],
    'CAPM is Ke = Rf + β × ERP. The risk-free rate is the floor; the ERP is the market\'s equity premium over that floor; beta scales the premium for this specific name. Three terms, one multiplication, one addition.'),

  q(4351207, 'Career Skills', CHAPTER, 'Equity risk premium source discipline',
    'A first-year asks where to pull ERP for the WACC build. What is the most defensible answer for a US-based DCF in 2026?',
    'Use a published long-run estimate (Duff & Phelps / Kroll, Damodaran, or the firm\'s house view) typically in the 5.0–6.0% range, document the source in the WACC footnote, and use the same source consistently across all comparable analyses in the deck',
    [
      ['Compute it from this quarter\'s S&P 500 return minus the current 10-year Treasury yield', 'ERP is a forward-looking long-run estimate, not a single quarter\'s realized excess return. Short-window realized returns are extremely noisy — a single quarter can swing the implied ERP by 10+ percentage points.'],
      ['Set ERP equal to the average analyst price-target return for the S&P 500 over the next 12 months', 'Twelve-month price-target consensus is a short-horizon equity forecast, not a perpetuity equity risk premium. The two are conceptually different and produce very different numbers.'],
      ['Use the company\'s historical stock return as a shortcut for cost of equity', 'A single company\'s historical return mixes operating performance, market beta, and luck. It is neither a market premium nor a forward-looking estimate.'],
    ],
    'ERP discipline is: pick a credible long-run published estimate, name the source in the footnote, and apply it consistently. The exact number matters less than (a) defensibility under IC scrutiny and (b) consistency across the deck.'),

  q(4351208, 'Career Skills', CHAPTER, 'Beta from a thinly-traded comp',
    'One of your five comps trades roughly 100,000 shares per day and shows a regression beta of 0.4 against the S&P 500. The other four comps cluster between 1.05 and 1.30. How do you handle the outlier?',
    'Investigate whether the low beta reflects thin trading rather than low fundamental risk — illiquid stocks systematically under-react to market moves and produce downward-biased betas; consider excluding the comp or using an industry beta instead',
    [
      ['Keep the 0.4 in the average — it pulls the unlevered beta toward a more conservative output', '"More conservative" is not the same as "more accurate." A spurious low beta lowers your cost of equity and raises your valuation — that is an output-driven choice, not a defensible analytical one.'],
      ['Drop the 0.4 and replace it with 1.0 because that is the market default', 'Substituting an unjustified 1.0 is no better than keeping the spurious 0.4 — both are made up. The right move is to investigate the cause and either exclude or use a peer-set-derived value.'],
      ['Run the regression against a smaller benchmark (Russell 2000) until beta lands closer to the other comps', 'Switching benchmarks until you like the answer is benchmark-shopping. The benchmark should be chosen once based on the stock\'s investor universe, not iterated to produce a target output.'],
    ],
    'Thin trading is one of the most common causes of artificially low regression betas. The analyst-level move is to flag it, investigate volume and bid-ask spread, and either drop the comp or use an industry-derived beta. Averaging in spurious data quietly biases the cost of capital.'),

  q(4351209, 'Career Skills', CHAPTER, 'Terminal value sensitivity disclosure',
    'A draft DCF\'s terminal value is 78% of enterprise value at base-case Gordon growth of 2.5% and WACC of 9.0%. What is the most defensible way to present this to IC?',
    'Show a 2-D sensitivity table flexing g (1.5%–3.5%) against WACC (8.0%–10.0%), highlight the cells where terminal-to-EV stays in a defensible band, and lead with the observation that 78% concentration is structurally high and demands disclosure',
    [
      ['Lengthen the explicit forecast period to 15 years to reduce the terminal share to under 50%', 'Adding low-conviction forecast years does not reduce the terminal weighting in a defensible way — it just relabels the same uncertainty as "year 12 of an explicit forecast." A 15-year forecast for most businesses is fiction; IC will see through it.'],
      ['Reduce WACC by 50 bps to bring terminal weighting down', 'Tuning WACC to produce a target terminal weighting reverses cause and effect. WACC has to be derived from comps and capital structure — not back-solved from the output you want.'],
      ['Suppress the terminal value disclosure because every DCF has heavy terminal weighting', 'Hiding the terminal weighting is exactly what credible models do not do. Every DCF carries terminal weighting; the discipline is to show how sensitive it is, not to obscure it.'],
    ],
    'Terminal weighting above ~70% is structurally heavy for a 5-year explicit forecast. The IC-ready move is to disclose it, sensitize it, and use the sensitivity table to bound the recommendation — not to manufacture a smaller-looking number through forecast or rate fiddling.'),

  q(4351210, 'Career Skills', CHAPTER, 'Normalizing the final forecast year',
    'Year 5 of your explicit forecast shows EBIT margin at 22%, which is the peak of the explicit forecast. The target\'s long-run mid-cycle EBIT margin is closer to 17%. What is the right move for the terminal calculation?',
    'Normalize year 5 down toward mid-cycle margin (e.g., 17–18%) before applying Gordon growth, because terminal value capitalizes year 5 in perpetuity — capitalizing a peak-margin year hard-codes peak conditions forever',
    [
      ['Use the year-5 figure unchanged because that is what the forecast says', 'The explicit forecast is meant to ramp; the terminal is meant to be steady-state. Capitalizing the ramp-end year in perpetuity treats peak earnings as the perpetuity, which they are not.'],
      ['Apply a 20% haircut to the terminal value as a generic conservatism adjustment', 'A flat haircut is not a normalization — it is a fudge factor. The discipline is to normalize the specific input (margin, capex, working capital) that is non-mid-cycle, not to apply a blanket discount.'],
      ['Use year 1 EBIT margin instead because that is the most recent actual', 'Year 1 is closest to today\'s margin but not necessarily mid-cycle either. The terminal year should reflect long-run economics — not the most recent actual or the peak forecast.'],
    ],
    'Normalize the terminal-year inputs: margin, capex, and working capital should reflect mid-cycle, sustainable operations. Capitalizing a peak or trough year in perpetuity bakes a cycle position into the terminal that does not belong there.'),

  q(4351211, 'Career Skills', CHAPTER, 'Capex normalization in terminal year',
    'The target ran growth capex at 9% of revenue during the explicit forecast period as it expanded its distribution footprint. By year 5, the footprint is built out. What is the right capex assumption for the terminal year?',
    'Step capex down to maintenance capex (typically approximating D&A as a long-run proxy) — growth capex above maintenance does not persist in perpetuity, and capitalizing the build-out spend in perpetuity understates terminal cash flow',
    [
      ['Keep capex at 9% of revenue because the company has historically invested heavily', 'Historical growth capex is a function of the build phase, not the steady state. The terminal year is steady state by definition — perpetual 9% capex while revenue grows 2.5% is not a stable economic profile.'],
      ['Set capex to zero in the terminal year because the footprint is built out', 'Maintenance capex is never zero for an operating business — assets wear out, software needs replacement, equipment is repaired. Zero capex in perpetuity implies the business runs on infinitely durable assets.'],
      ['Hold the explicit-forecast dollar amount of capex flat in perpetuity', 'Holding dollar capex flat while revenue grows means capex-as-percent-of-revenue shrinks toward zero, which is the same error as zero capex with extra steps. Capex should scale with steady-state asset base, not stay flat in dollars.'],
    ],
    'Terminal capex should approximate maintenance capex — often a touch above D&A. Growth capex stops in the steady state by definition. Failing to step capex down is one of the most common ways to overstate terminal cash flow.'),

  q(4351212, 'Career Skills', CHAPTER, 'Implied exit multiple cross-check',
    'Your Gordon growth terminal value, divided by year-5 EBITDA, implies an exit multiple of 14.5x. Current trading comps trade at 8.5x–11.0x EV/EBITDA. What does this tell you?',
    'The Gordon growth terminal is implying an exit multiple well above where comparable companies trade today — either growth is too high, WACC is too low, or both, and the model needs to be reconciled until the implied multiple sits within a defensible range relative to comps',
    [
      ['Nothing — Gordon growth and exit multiples are independent methods so they need not agree', 'They are mathematically linked. Any Gordon growth terminal implies an exit multiple, and any exit-multiple terminal implies a perpetuity growth rate. They are two views of the same number; disagreement is information.'],
      ['The DCF is producing a higher value than the comps, which validates the deal economics', 'Implied multiple above the comp range is a warning sign, not validation. If you cannot justify year-5 exit at 14.5x against an 8.5x–11.0x comp set, the DCF is asserting something the market does not believe.'],
      ['Use 14.5x as the exit multiple in the sensitivity because the market will catch up', 'Anchoring on the model output rather than the comps means you are choosing the number you wanted. Exit multiples should be triangulated against trading and precedent comps, not back-solved from Gordon growth.'],
    ],
    'Every Gordon growth terminal implies an exit multiple, and vice versa. The cross-check is mechanical: compute the implied multiple and check whether it is defensible against comp ranges. Implied multiples well outside comp range are how analysts catch terminal-value assumption errors.'),

  // -------------------------------------------------------------------------
  // Comps methodology (4351213–4351216)
  // -------------------------------------------------------------------------
  q(4351213, 'Career Skills', CHAPTER, 'Comp universe selection criteria',
    'You are building a trading comp universe for a US mid-cap specialty chemicals target. Which selection criteria belong in the screening, and which do not?',
    'Business model, end-market mix, size, geography, margin profile, and growth profile — chosen so each comp is genuinely comparable in operations and not just sharing a GICS code',
    [
      ['Anything with the same GICS sub-industry code, ranked by market cap and trimmed to the top 20', 'GICS code alone produces a sector list, not a comp set. Two companies in the same sub-industry can have wildly different end markets, geographic mix, and growth profiles — using only the GICS screen is the lazy first cut, not the final comp universe.'],
      ['Whichever set of names produces a multiple range closest to the deal price', 'Reverse-selecting comps to anchor the deal price is the canonical way to lose credibility. The comp set has to be defensible *before* you see what multiples it produces.'],
      ['Only companies the senior banker has covered before, because those are the names IC will recognize', 'Familiarity is not a comparability criterion. The senior banker\'s coverage history may correlate with the right comps but it is not the screen — and over-leaning on it produces incumbency bias rather than analytical rigor.'],
    ],
    'Trading comps live or die by the universe selection. The screen should defensibly answer "if you had to value this target on a peer basis, which peers actually look like it?" — operations first, scale and geography second, GICS code as a sanity check only.'),

  q(4351214, 'Career Skills', CHAPTER, 'Calendarization mechanics',
    'Three of your five comps report on calendar year-end (December); two report on fiscal years ending June and March. You need an LTM EBITDA figure for all five as of Q1 2026. What do you do?',
    'Calendarize each company to the same period end by stitching together quarterly results — sum the four most recent quarters as of the target measurement date for each company so all LTM figures align on the same calendar window',
    [
      ['Use each company\'s most recently reported full fiscal year unchanged because that is what they file', 'A March year-end and a December year-end can be six months apart. For a growing business, six months of growth shows up as multiple compression — comparing across mismatched periods produces spurious differences in multiples.'],
      ['Use only the December year-end companies and drop the other two because calendar alignment is easier', 'Dropping two-fifths of the comp set to avoid calendarization weakens the universe more than the calendarization step would. Calendarization is straightforward arithmetic — that is the part to do, not the comps to discard.'],
      ['Annualize the most recent quarter for all five and use that as LTM', 'Annualizing a single quarter loses three quarters of seasonality and is not LTM — it is a 4× quarter run-rate. For seasonal businesses (most), it produces a materially distorted number.'],
    ],
    'Calendarization is summing trailing four quarters to the same calendar window across all comps. It is mechanical, it is mandatory, and the most common failure is leaving fiscal-year mismatches in place because "they are not that different" — they usually are.'),

  q(4351215, 'Career Skills', CHAPTER, 'EBITDA adjustments inside comps',
    'You are computing EV/EBITDA for a comp set. Two of the five comps reported large one-time restructuring charges in the LTM period that they have called out in their adjusted-EBITDA reconciliation. What do you do?',
    'Use adjusted EBITDA for those two comps so the comparison is on a like-for-like basis, document the adjustments in a footnote, and check the other three comps for similar one-time items the analyst may need to add back even if management did not call them out',
    [
      ['Use reported (unadjusted) EBITDA for all five comps because that is what the financials say', 'Reported EBITDA mixes one-time items into the multiple. A comp with a restructuring charge will look artificially cheap on EV/EBITDA — the multiple is mathematically lower because the denominator is artificially depressed.'],
      ['Use management\'s adjusted EBITDA for the two flagged comps but reported EBITDA for the other three', 'Mixing adjusted and reported denominators is the worst of both worlds. Comparability requires the same treatment across the set — either everyone gets adjusted EBITDA with the same kinds of add-backs, or no one does.'],
      ['Drop the two comps that took restructuring charges because they are not clean', 'Restructuring is a normal corporate activity; dropping every comp that has ever taken a charge would shrink most comp universes to nothing. The discipline is to adjust, not to discard.'],
    ],
    'Comps work only when the EBITDA definition is consistent across the set. Adjusted EBITDA — with documented, defensible add-backs applied uniformly — is the standard. The footnote that lists what was adjusted and why is part of the deliverable, not an afterthought.'),

  q(4351216, 'Career Skills', CHAPTER, 'NTM vs LTM choice',
    'For a high-growth SaaS target, the comp set trades at 8.5x LTM revenue and 6.0x NTM revenue. Which multiple do you lead with in the IC discussion and why?',
    'Lead with NTM (forward) revenue because the comps are growing 30%+ and LTM is already stale — investors value high-growth businesses on forward numbers, so the deal needs to be defended on the same basis to be credible',
    [
      ['Lead with LTM because it is based on actual reported results rather than forecast', 'LTM is more "real" but it is also the wrong period for the buyer\'s pricing decision. A 30%-growth business buys 6–12 months of growth before it changes hands; that growth is in NTM, not LTM.'],
      ['Show both with equal weight and let the audience choose', 'Equal weighting is a way of saying you do not have a view. Comps for high-growth businesses are essentially always quoted NTM in the market; leading with LTM and giving NTM equal weight signals the analyst has not picked the relevant frame.'],
      ['Lead with NTM but only because it produces a higher implied valuation', 'NTM produces a *lower* multiple (the denominator is larger because of growth) but a similar or higher *implied valuation* when applied to the target\'s NTM revenue. Choosing the period by which one produces the higher number is anchor-shopping.'],
    ],
    'For high-growth businesses, NTM is the relevant period because (a) the buyer is pricing into growth and (b) the public market quotes high-growth software on forward numbers. For mature businesses with limited growth, LTM is often the cleaner frame. Pick the period that matches how the asset would actually be priced.'),

  // -------------------------------------------------------------------------
  // Precedent transactions (4351217–4351219)
  // -------------------------------------------------------------------------
  q(4351217, 'Career Skills', CHAPTER, 'Precedent transaction date relevance',
    'Your precedent transaction set ranges from 2018 to 2025. Multiples on the 2018–2020 deals are markedly lower than 2021–2022 and higher than 2023–2024. How do you handle this in the IC deck?',
    'Disclose the date range, organize the precedents into vintage cohorts, and lead with the cohort most relevant to the current rate and M&A environment — 2018–2020 deals were priced under different rate and credit conditions than 2024–2025 and should be flagged, not blended',
    [
      ['Take a simple average across all years to smooth out cycle effects', 'Averaging mixes a low-rate 2021 bull market with a high-rate 2023 environment — the result is a number that describes no actual market condition. The audience needs vintage information, not an averaged blur.'],
      ['Use only 2021–2022 deals because they are the most recent peak and set the strategic ceiling', 'Anchoring on the cycle peak alone is the seller\'s temptation, but it tells the buyer nothing about today\'s environment. IC will discount peak-cycle precedents unless they reflect today\'s rate and credit conditions.'],
      ['Drop all transactions older than three years because nothing further back is relevant', 'A blanket three-year cutoff throws away potentially relevant deals that closed in similar rate environments. Relevance is about *conditions* at the time of close, not just age — a 2018 deal in a similar rate cycle can be more useful than a 2022 deal at peak.'],
    ],
    'Precedent transactions need vintage discipline. Group by cycle conditions (rate environment, credit availability, sector heat), present each cohort distinctly, and let the audience see how the market priced this kind of deal in the period most analogous to today.'),

  q(4351218, 'Career Skills', CHAPTER, 'Control premium in precedents',
    'A first-year asks why precedent transaction multiples generally print higher than trading comp multiples for the same kind of business. What is the cleanest explanation?',
    'Precedent transactions reflect a control premium — the buyer is acquiring 100% of the company and the right to direct its strategy, financing, and disposition, which is worth more than a non-controlling share of the same business that a public-market investor holds',
    [
      ['Precedents print higher because M&A bankers are better at negotiating than the public market', 'Negotiation skill is not the structural reason precedent multiples sit above trading multiples — control premia are a structural feature of acquiring an entire enterprise rather than a fractional public stake.'],
      ['Precedents are higher because they include synergies which are absent from trading comps', 'Synergies often justify part of the premium, but the control premium exists independent of synergies — even strategic-free LBO precedents sit above trading multiples for the same reason: 100% ownership is worth more than a minority stake.'],
      ['Precedents are higher because the buyer typically overpays', '"Buyer overpays" is a critique, not an explanation. The structural reason is control; whether a specific buyer overpays on top of that is a separate question.'],
    ],
    'The control premium is the structural reason precedent transaction multiples trade above public trading multiples for the same business. Synergies layer on top; financial-buyer (LBO) precedents capture the control premium even without synergies, which is why they are a useful clean reference.'),

  q(4351219, 'Career Skills', CHAPTER, 'Public-target vs private-target spread',
    'Your precedent set mixes acquisitions of public targets (where the price was disclosed) and private targets (where deal value was reported via press release or estimated). How do you interpret the typical spread between the two?',
    'Public-target precedents typically print higher because the announced price reflects an explicit premium over an observable unaffected trading price, full diligence access, and competitive process dynamics; private-target precedents reflect more bilateral negotiation and information asymmetry, often producing a noticeable discount',
    [
      ['Public and private target precedents are interchangeable so long as the industry matches', 'They are not interchangeable. Public-target deals carry premium-to-unaffected mechanics and a regulated disclosure process; private-target deals are negotiated bilaterally with different information dynamics — the multiples reflect both differences.'],
      ['Private targets always price higher than public targets because the seller has more leverage', 'Public targets generally price *higher* on average because of the explicit premium-to-unaffected and competitive process. Private sellers often have less alternative-buyer leverage and less price discovery.'],
      ['Drop all private-target deals because the price disclosure is unreliable', 'Private deal disclosures are noisier than public ones but not useless — they still inform the strategic ceiling, especially in sub-investment-grade segments where most M&A is private. The discipline is to flag the disclosure source, not to discard the deals.'],
    ],
    'Public-target precedents tend to sit above private-target precedents because of premium-to-unaffected, disclosure regimes, and competitive process dynamics. Both inform the valuation range; the disciplined deck shows them as separate columns so the IC sees the spread rather than an averaged blur.'),

  // -------------------------------------------------------------------------
  // Football field, SOTP, LBO floor, A/D (4351220–4351227)
  // -------------------------------------------------------------------------
  q(4351220, 'Career Skills', CHAPTER, 'Football field range construction',
    'For each methodology in the football field, what should the displayed bar represent?',
    'A range derived from a defensible spread of inputs (e.g., low and high multiples within the comp set, low and high WACC and growth in the DCF) — not a single point estimate dressed up as a thin bar',
    [
      ['The single midpoint of each methodology with confidence intervals from the model output', 'Confidence intervals are a statistical concept that does not apply cleanly to a comps-based or DCF-based valuation — a football field is meant to show methodological range, not statistical uncertainty.'],
      ['The maximum implied value from each methodology so the audience sees the upside case', 'Showing only the maximum tells the audience the seller is reaching. The football field exists precisely to show the range — collapsing it to maxima defeats the purpose.'],
      ['The 25th and 75th percentiles of the comp set, applied uniformly across all methodologies', 'A flat percentile rule does not capture how each methodology produces a range — DCF ranges come from sensitivity tables on WACC and growth, not from percentile bins. Forcing one rule across methodologies hides the actual range drivers.'],
    ],
    'Football field bars represent the analytical range produced by each methodology under defensible inputs — the low-to-high comp multiple, the WACC × growth grid for DCF, the IRR-floor and IRR-ceiling for LBO. Showing only midpoints or maxima is the most common way to misuse the chart.'),

  q(4351221, 'Career Skills', CHAPTER, 'Football field width discipline',
    'A senior banker reviews your football field and says, "Your DCF bar is too wide — you are showing $1.2B to $2.0B and that is a 60% range." What is the correct response?',
    'Tighten the WACC and growth ranges to defensible bands (e.g., WACC ±50 bps from the central estimate, growth ±50 bps) — a 60% range usually means the sensitivity has been flexed beyond what is justified by the underlying input uncertainty',
    [
      ['Defend the wide range because DCF outputs are mathematically sensitive to assumptions', 'Mathematical sensitivity is a reason to disclose the sensitivity, not to display the full mathematical range on a football field. The displayed range should reflect *defensible* input variation, not the full algebraic span.'],
      ['Narrow the bar to a $200M range by averaging out the high and low cases', 'Averaging high and low to a midpoint loses the range that the football field is meant to show. Tightening the inputs is different from collapsing the output.'],
      ['Drop DCF from the football field because it is too sensitive to be useful', 'Dropping DCF removes a core methodology because of presentation discomfort. The fix is input discipline, not methodology suppression.'],
    ],
    'A football field bar that spans 50%+ usually signals the inputs have been flexed too far. The discipline is to flex inputs by what they actually move in the real world (50–100 bps each on WACC and growth, comp range from p25 to p75), not by what the model will mathematically tolerate.'),

  q(4351222, 'Career Skills', CHAPTER, 'Sum-of-the-parts segmentation',
    'A diversified US industrial conglomerate has three distinct business lines: aerospace components (12.0x EBITDA), specialty chemicals (8.5x), and industrial distribution (7.0x). Which valuation approach is most defensible?',
    'Build a sum-of-the-parts using segment-specific multiples — value each business line against its relevant comp set, apply a small conglomerate discount if the segments do not benefit each other operationally, and disclose any unallocated corporate costs separately',
    [
      ['Apply a blended company-wide EBITDA multiple based on the largest segment\'s comp set', 'A blended multiple anchored on one segment misprices the others. Aerospace at 12.0x and distribution at 7.0x cannot be averaged into a single defensible number — the segments trade on different fundamentals.'],
      ['Use only the highest segment multiple (aerospace) and apply it to total EBITDA to maximize value', 'Applying the highest segment multiple to total EBITDA is anchor-shopping. The other two segments would not trade at aerospace multiples in a separation; pretending they would inflates the valuation.'],
      ['Average the three multiples and apply the average to consolidated EBITDA', 'Simple average ignores segment size. Even a weighted average loses the SOTP discipline of valuing each business against its own comp set — averaging hides the dispersion the SOTP is meant to surface.'],
    ],
    'SOTP is the right tool when business segments trade on materially different fundamentals. Value each against its comps, sum, apply a corporate adjustment if needed, and disclose. The conglomerate discount is often the single most-debated input — call it out explicitly.'),

  q(4351223, 'Career Skills', CHAPTER, 'LBO as floor value',
    'In a football field for a sell-side target, the LBO bar typically sits below the strategic precedent bar. What does this tell the analyst about how to use it in the IC discussion?',
    'The LBO range represents the floor a sponsor would pay assuming a target IRR (typically 20–25%) on a market-clearing capital structure — it is what the asset can fetch from a financial buyer with no synergies, and therefore the floor below which a strategic premium has to clear',
    [
      ['The LBO range is the minimum acceptable bid because financial buyers cannot pay more than that', 'Financial buyers can absolutely pay more in a contested process, especially if they see operational levers or financing flexibility beyond the base LBO assumptions. The LBO range is a floor *for that buyer type under standard assumptions*, not a ceiling.'],
      ['The LBO range tells you what the deal will close at because most M&A goes to financial buyers', 'Most US M&A by deal count includes a mix of strategic and sponsor buyers; in a competitive process for an attractive asset, strategics often clear higher because of synergies. LBO informs the floor; it does not predict the close.'],
      ['LBO is not a valuation methodology — it is a financing exercise — and should not appear on the football field', 'LBO is a valuation methodology *and* a financing exercise. It produces a defensible price range under IRR-target discipline and is included on football fields precisely because it tells the IC what the financial-buyer floor is.'],
    ],
    'LBO on a football field is the financial-buyer floor: what a sponsor would pay assuming a target IRR and market-clearing leverage with no synergies. Strategic premiums have to clear that floor to be competitive; if they do not, the asset goes to the sponsor.'),

  q(4351224, 'Career Skills', CHAPTER, 'LBO IRR target translation',
    'A sponsor targets a 22% gross IRR over a 5-year hold. Roughly, what does that imply for the multiple-of-invested-capital (MOIC) the sponsor needs to underwrite?',
    'About 2.7x MOIC — at 22% per year compounded over 5 years, 1.22^5 ≈ 2.7, meaning the sponsor expects to roughly triple the equity check in five years',
    [
      ['About 1.5x MOIC because the IRR includes leverage returns', 'IRR and MOIC are both equity-level metrics in a standard LBO frame. 22% per year for 5 years compounds to ~2.7x, not 1.5x — 1.5x over 5 years would imply an IRR of about 8.5%.'],
      ['About 5x MOIC because 22% × 5 years compounds aggressively', '22% × 5 simple-stacked would be 110% (which is roughly 2.1x), but the compounding effect lands closer to 2.7x. 5x MOIC over 5 years implies an IRR of about 38% — well above sponsor base case for most deals.'],
      ['IRR and MOIC are independent because IRR is annualized and MOIC is total return', 'They are linked deterministically given a hold period. For a 5-year hold, IRR = MOIC^(1/5) − 1. They are different summary statistics of the same cash flow pattern.'],
    ],
    'The shortcut for a 5-year sponsor underwrite: ~2.5–3x MOIC corresponds to ~20–25% IRR. Knowing this conversion lets analysts sanity-check sponsor bids against IRR targets without re-running the full LBO each time.'),

  q(4351225, 'Career Skills', CHAPTER, 'Accretion / dilution direction rule',
    'A US public acquirer trades at 22x earnings. The target trades at 16x earnings. The deal is 100% stock, ignoring synergies and transaction costs. What does the deal do to acquirer EPS?',
    'Accretive — the acquirer is buying earnings at a lower P/E than its own (16x vs 22x), so each share of stock issued buys more earnings than it costs, and EPS rises',
    [
      ['Dilutive — issuing stock always dilutes EPS', 'Issuing stock dilutes ownership but not necessarily EPS. Whether EPS rises or falls depends on the P/E differential — stock-funded deals where the target P/E is below the acquirer P/E are accretive before synergies.'],
      ['Neutral — pre-synergy stock deals at any P/E differential are EPS-neutral by construction', 'They are not. The P/E differential drives the direction directly: lower target P/E than acquirer P/E in a stock deal is accretive pre-synergies.'],
      ['Dilutive — paying a 30% premium to the target makes any stock deal dilutive', 'The premium reduces the accretion but does not by itself flip the sign. The arithmetic is: if (target P/E × (1 + premium)) is still below acquirer P/E, the deal is still accretive pre-synergies.'],
    ],
    'Stock-funded M&A is accretive when the acquirer\'s P/E exceeds the target\'s P/E (after premium). The rule of thumb: higher-multiple acquirer issuing shares to buy a lower-multiple target gets EPS accretion before synergies even enter the picture.'),

  q(4351226, 'Career Skills', CHAPTER, 'Accretion is not value creation',
    'The accretion/dilution slide shows 8% Year-1 EPS accretion on a deal. A junior associate suggests this is the headline metric for board approval. What is the more disciplined framing?',
    'Accretion shows the EPS arithmetic but not whether the deal creates value — a deal can be accretive and still destroy shareholder value if the acquirer paid too high a premium relative to the target\'s intrinsic value or expected synergies do not materialize',
    [
      ['Lead with accretion because EPS is what equity analysts will model first', 'Equity analysts will model EPS, but the board\'s fiduciary question is value creation, not EPS arithmetic. Leading with accretion lets the deal\'s value question go unanswered.'],
      ['Lead with accretion and note that it equals value creation when the acquirer\'s P/E is above 20x', 'There is no P/E threshold that turns accretion into value creation. A deal at any acquirer P/E can be accretive and value-destructive simultaneously — accretion is an arithmetic outcome, not a value metric.'],
      ['Lead with the multiple paid because that is the only number that matters', 'Multiple paid is one input to the value question but not the answer — what matters is multiple paid *relative to intrinsic value and synergy capture*. The disciplined slide shows both accretion *and* value creation, not one in place of the other.'],
    ],
    'Accretion/dilution is the EPS arithmetic. Value creation is the harder, more fundamental question — multiple paid vs intrinsic value, synergy probability-weighted, integration risk. The board needs both; analysts who treat them as the same metric are the ones who get the IC pushback.'),

  q(4351227, 'Career Skills', CHAPTER, 'Premium-to-unaffected calculation',
    'A US-listed target traded at $42 per share before deal rumors began on March 1. By March 14, the price had drifted to $48 on speculation. The bid is announced at $54 on March 20. What is the relevant premium for the press release and proxy?',
    'Approximately 29% — premium-to-unaffected is calculated against the last clean trading price before deal speculation moved the stock, which is the $42 pre-March-1 price, not the $48 rumor-affected price',
    [
      ['Approximately 12.5% — premium is calculated against the price the day before the bid', 'Day-before-bid pricing captures rumor-driven appreciation as if it were normal trading, understating the actual premium being paid. The unaffected price is the relevant baseline because it isolates the deal premium from speculation.'],
      ['Approximately 28.6% — premium is calculated against the 30-day VWAP regardless of rumor timing', '30-day VWAP windows that include rumor-driven trading capture the rumor effect inside the baseline. Some shops disclose VWAP premiums alongside unaffected premiums, but the headline premium for the proxy is calculated against the unaffected close.'],
      ['Approximately 35% — premium is calculated against the 52-week low', '52-week low is essentially never the unaffected reference price. It would only matter if the deal is happening at a 52-week trough, which is an unusual special case rather than the headline premium calculation.'],
    ],
    'Premium-to-unaffected is calculated against the last clean trading price before market awareness of the deal — typically the price the day before the first leak, rumor, or unusual volume spike. Proxies disclose this number; getting the baseline wrong is a press-release and disclosure problem, not just a model issue.'),

  // -------------------------------------------------------------------------
  // Multiples choice (4351228–4351230)
  // -------------------------------------------------------------------------
  q(4351228, 'Career Skills', CHAPTER, 'EV/EBITDA vs P/E choice',
    'A first-year asks why deal teams generally lead with EV/EBITDA rather than P/E for M&A valuation. What is the cleanest explanation?',
    'EV/EBITDA is capital-structure-neutral — it values the operating business independent of how it is financed, so two companies with different leverage produce comparable multiples; P/E is sensitive to financial structure (interest expense) and tax rate, which obscures the operating comparison',
    [
      ['EV/EBITDA is preferred because EBITDA is closer to cash flow than net income', 'EBITDA approximates a cash-flow-like metric but is not actually cash flow (it ignores capex, taxes, and working capital). The structural reason EV/EBITDA wins for M&A is capital-structure neutrality, not cash-flow proximity.'],
      ['P/E is harder to manipulate so EV/EBITDA is preferred for honest disclosure', 'EBITDA is more, not less, susceptible to add-back manipulation than net income — adjusted EBITDA is the proverbial "earnings before bad stuff." The case for EV/EBITDA is structural (capital-structure neutrality), not anti-manipulation.'],
      ['P/E only works for profitable companies, so EV/EBITDA is universal', 'EV/EBITDA also fails for companies with negative or near-zero EBITDA. The capital-structure-neutrality argument is the durable reason — both metrics break for unprofitable companies, but only EV/EBITDA is comparable across leverage profiles.'],
    ],
    'EV/EBITDA is the M&A workhorse because it values the operating enterprise independent of capital structure, letting a leveraged target and an unleveraged target be compared on operating terms. P/E mixes operating and financing performance — useful for equity-market-facing analysis, less useful for whole-company M&A pricing.'),

  q(4351229, 'Career Skills', CHAPTER, 'EV/Sales scope and limits',
    'A pre-profit high-growth software target has $80M revenue, negative EBITDA, and 60% growth. Which valuation multiple is the most defensible primary lens?',
    'EV/Revenue (typically NTM) for the headline multiple, paired with growth-adjusted scrutiny (e.g., revenue multiple per unit of growth), because EBITDA and earnings multiples are uninformative when the denominator is negative',
    [
      ['EV/EBITDA — negative EBITDA produces a negative multiple which itself is informative', 'A negative-denominator multiple is not informative — it is undefined for comparison. Negative EBITDA tells you the business is unprofitable; the multiple itself cannot be ranked against positive-EBITDA peers.'],
      ['P/E — apply a far-future P/E to projected year-5 net income and discount it back', 'Forward-multiple-discount-back is a DCF cousin, not a comps lens — and it requires assuming year-5 profitability and exit multiple. For comps, the analyst uses what the market actually quotes today, which for pre-profit high-growth software is EV/Revenue.'],
      ['Use only DCF and ignore multiples because pre-profit comps are unreliable', 'Pre-profit comps on EV/Revenue are common and useful for high-growth software; the market quotes them daily. Ignoring comps entirely loses the market-based check on the DCF.'],
    ],
    'For pre-profit growth businesses, EV/Revenue (NTM) is the workhorse, with growth-adjusted variants (rule of 40, multiple per point of growth) for sharper comparison. Once the business reaches profitability, the lens migrates to EV/EBITDA — but until then, revenue multiples are how the market actually trades the names.'),

  q(4351230, 'Career Skills', CHAPTER, 'Multiples in growth vs mature businesses',
    'You have two comp sets: high-growth (25%+ revenue growth, EV/EBITDA in the 25x–35x range) and mature (5% growth, EV/EBITDA in the 8x–11x range). The target grows at 18%. What is the right move?',
    'Use the most-comparable comps for the target\'s growth profile — either select comps that growth-bracket the target or apply a growth-adjusted multiple (e.g., interpolate within the same comp universe by growth rate) rather than averaging unlike sets',
    [
      ['Average the midpoints of the two comp sets (≈20x) and apply that to the target', 'Averaging unlike comp sets produces a number that describes neither population. The target at 18% growth does not look like either the 25%+ population or the 5% population — averaging across them obscures the growth-multiple relationship.'],
      ['Use the high-growth multiple because the target is closer to high growth than to mature', 'Just because 18 is closer to 25 than to 5 does not mean the target trades like a 25%-growth comp. Multiples are highly nonlinear in growth — a 7-point gap in growth can imply a 10x+ gap in EV/EBITDA in software.'],
      ['Use the mature multiple as a floor and the high-growth multiple as a ceiling, and present the range', 'Spanning the full range loses analytical content — every comp set produces a range, and using the union of two unlike sets is essentially saying "somewhere between 8x and 35x." That is not a defensible valuation range; it is a refusal to choose.'],
    ],
    'Multiples are tightly linked to growth, margin, and reinvestment. For an in-between target, the disciplined approach is either to find a comp universe that brackets the target\'s growth or to use a growth-adjusted method (e.g., EV/Sales per point of growth) — not to average across populations that look nothing like the target.'),

  // -------------------------------------------------------------------------
  // Market cap, float, diluted share count (4351231–4351235)
  // -------------------------------------------------------------------------
  q(4351231, 'Career Skills', CHAPTER, 'Market cap vs enterprise value',
    'A first-year confuses market capitalization and enterprise value in a comp output. What is the cleanest one-line distinction?',
    'Market cap is the equity value of the company at the current share price; enterprise value is the total cost a buyer would pay to acquire the operating business — equity value plus debt, minus cash, plus minority interest and preferred',
    [
      ['Market cap is for public companies and enterprise value is for private companies', 'Both metrics apply to public and private companies. The distinction is between equity claim (market cap) and total enterprise claim (EV), not between company types.'],
      ['Market cap and enterprise value differ only by cash on the balance sheet', 'Cash is one component of the EV bridge. Debt is the larger component for leveraged businesses; minority interest, preferred stock, and capitalized operating leases also belong in the bridge depending on the business.'],
      ['Market cap is the more useful metric for M&A because shareholders own the company', 'Shareholders own the equity, but the buyer of a control stake also assumes the debt and pockets the cash. EV is the metric that captures the full deal economics; market cap is incomplete for M&A pricing.'],
    ],
    'Market cap = price × shares (equity claim). Enterprise value = market cap + debt − cash + minority interest + preferred (operating-business claim, capital-structure-neutral). M&A and operating comparisons run on EV; per-share equity analysis runs on market cap.'),

  q(4351232, 'Career Skills', CHAPTER, 'Public float mechanics',
    'A US-listed target has 100 million shares outstanding, of which the founder owns 35 million, an early venture investor owns 15 million subject to remaining lockup, and 50 million trade publicly. Which figure is the public float?',
    '50 million shares — public float is the portion of outstanding shares freely available for trading by the public, excluding insider, affiliate, and restricted holdings',
    [
      ['100 million shares — total shares outstanding equals public float', 'Total shares outstanding includes insider and restricted holdings that are not available to the public market. Float is a subset of outstanding.'],
      ['65 million shares — outstanding minus founder only', 'The lockup-restricted venture stake is also not part of the freely tradeable public float. Once that lockup expires, those shares can be re-classified into float — but during lockup they are excluded.'],
      ['85 million shares — outstanding minus only restricted holdings under formal lockup agreement', 'The founder\'s 35 million stake, even without a formal lockup, is typically excluded from public float because the founder is an affiliate whose sales are subject to Rule 144 restrictions and signal effects. Float excludes affiliate holdings, not just contractually restricted ones.'],
    ],
    'Public float excludes insider, affiliate, and restricted holdings. It matters for liquidity assessment, index inclusion thresholds, and how easily a position can be traded. Outstanding shares > float almost always — assuming they are equal is a common career-changer error.'),

  q(4351233, 'Career Skills', CHAPTER, 'Treasury stock method',
    'A company has 100M basic shares outstanding and 5M options with a strike price of $20. The current share price is $50. Using the treasury stock method, what is the diluted share count attributable to the options?',
    '3M incremental shares — proceeds from exercise (5M × $20 = $100M) are assumed to repurchase shares at $50, retiring 2M shares; net dilution is 5M − 2M = 3M, for a diluted count of 103M',
    [
      ['5M incremental shares — every in-the-money option counts as a full share for diluted EPS', 'Treasury stock method assumes the cash from option exercise is used to repurchase shares at market, which retires some of the issued shares. Counting every option as a full incremental share double-counts.'],
      ['2M incremental shares — the dilutive effect is the buyback portion only', '2M is the buyback portion, but the diluted addition is the *net* (5M issued minus 2M repurchased = 3M). Counting only the buyback piece confuses gross and net effects of the treasury stock method.'],
      ['Zero — options that are not yet exercised do not affect diluted shares until they are', 'Diluted share count includes the effect of options that *could* be exercised in the money. Treasury stock method specifically addresses unexercised but in-the-money options.'],
    ],
    'Treasury stock method: (1) calculate proceeds from option exercise (options × strike), (2) assume those proceeds repurchase shares at the current price, (3) net dilution is options issued minus shares repurchased. Counting only options issued — without the share buyback assumption — overstates dilution.'),

  q(4351234, 'Career Skills', CHAPTER, 'In-the-money options at the strike boundary',
    'A company has tranches of options at strikes of $15, $30, $45, and $60. The current share price is $50. Which tranches enter the treasury stock method calculation, and how do you handle the $60 tranche?',
    'Only the $15, $30, and $45 strikes are in the money and enter the diluted share count via the treasury stock method; the $60 tranche is out of the money and is excluded — exercising at $60 would be a net negative to the holder, so those options are not dilutive at the current price',
    [
      ['Include all four tranches because they are all outstanding options the company has issued', 'Out-of-the-money options are not dilutive at the current price. Including them inflates the share count with options no rational holder would exercise.'],
      ['Include only the $15 strike because it is the deepest in the money', 'Every in-the-money tranche is dilutive. The $30 and $45 strikes are also in the money at a $50 share price and add to the diluted count.'],
      ['Include all four tranches but use the weighted-average strike across all of them', 'Weighted-average strikes mix in- and out-of-the-money options, distorting the treasury stock method. The right approach is to compute the dilution from each in-the-money tranche separately (or against its own strike) and exclude out-of-the-money tranches entirely.'],
    ],
    'Treasury stock method applies only to in-the-money options. Out-of-the-money options are disclosed in the footnotes but do not enter the diluted count at the current price. If the share price rises past an out-of-the-money strike, that tranche enters the calculation at that point.'),

  q(4351235, 'Career Skills', CHAPTER, 'Convertible note treatment in diluted count',
    'A US company has $200M of convertible notes outstanding with a conversion price of $40. The current share price is $50, and the notes are in the money. What is the most defensible treatment for diluted share count?',
    'Apply the if-converted method: assume conversion, add 5M shares (= $200M / $40) to the diluted count, and add back the after-tax interest expense to net income for EPS purposes — diluted EPS is reported under whichever assumption (treasury-stock-like net share settlement or if-converted) is more dilutive',
    [
      ['Treat the notes exactly like options under the treasury stock method using the conversion price as strike', 'Convertibles differ from options in that conversion exchanges debt for equity — the company stops paying interest on the converted notes, so the EPS calculation has to add interest back. Treasury stock method does not capture that interest-expense effect.'],
      ['Treat convertibles as debt only and leave potential dilution out of the share count', 'Convertibles in the money are included in diluted share count precisely because they can be converted to equity. Ignoring them understates dilution and overstates diluted EPS.'],
      ['Add 4M shares ($200M / $50) using the current share price', 'Conversion happens at the conversion price ($40), not the current share price ($50). The conversion ratio is fixed at issuance and determines how many shares are received per dollar of converted principal — $200M / $40 = 5M shares.'],
    ],
    'Convertibles use the if-converted method: assume conversion at the conversion price (not the current price), add the converted shares to the count, and add back the after-tax interest expense to the EPS numerator. Companies disclose diluted EPS under the more-dilutive of treasury stock and if-converted methods, but for whole-company valuation, full conversion is generally assumed.'),

  // -------------------------------------------------------------------------
  // EV bridge components (4351236–4351238)
  // -------------------------------------------------------------------------
  q(4351236, 'Career Skills', CHAPTER, 'Minority interest in EV bridge',
    'A US public parent owns 80% of a consolidated subsidiary; 20% is held by outside shareholders (the minority interest). The parent\'s consolidated financials show 100% of the sub\'s revenue and EBITDA. How does minority interest flow into the EV bridge?',
    'Add the value of minority interest to enterprise value — EV reflects the total operating business, and because EBITDA already includes 100% of the sub\'s earnings, EV must also reflect the claim on those earnings held by minority shareholders',
    [
      ['Subtract minority interest because it is owned by other parties, not the parent', 'Subtracting minority interest is one of the most common career-changer errors. The denominator of the multiple (EBITDA) already includes 100% of the sub\'s earnings — the numerator (EV) has to be consistent and include the value of the 20% claim on those earnings.'],
      ['Treat minority interest as a balance-sheet-only item rather than part of enterprise value bridge', 'Minority interest is a real claim on the operating business. Ignoring it makes EV/EBITDA inconsistent — the multiple\'s denominator includes earnings that the numerator does not pay for.'],
      ['Add the book value of minority interest because that is what the balance sheet records', 'Book value of minority interest is one proxy, but a defensible build uses fair value (often estimated as 20% of the sub\'s implied EV). Book value can be far below or above fair value depending on when the parent acquired its stake.'],
    ],
    'Minority interest is *added* to enterprise value because consolidated EBITDA already includes 100% of the sub\'s earnings. Forgetting this is the single most common EV bridge error among career-changers. Mnemonic: EBITDA includes the whole pie, so EV has to pay for the whole pie.'),

  q(4351237, 'Career Skills', CHAPTER, 'Preferred stock in EV bridge',
    'A US target has $100M of redeemable preferred stock outstanding with a 7% dividend. How does the preferred enter the EV bridge?',
    'Add the preferred stock value (typically liquidation preference plus accrued dividends, or fair value if it trades) to enterprise value — preferred is a senior claim on the firm that sits ahead of common equity and behind debt, and a buyer of the enterprise has to settle that claim',
    [
      ['Subtract preferred from EV because it is shown in equity on the balance sheet', 'Preferred sits in the capital stack between debt and common equity. In an EV bridge, both debt and preferred are added; only cash (and cash equivalents) are subtracted. Subtracting preferred would shrink EV inappropriately.'],
      ['Treat preferred stock as relevant only when unpaid dividends are visible', 'Preferred is a real capital-structure claim regardless of whether dividends are cumulative or current. The bridge captures all senior claims on the operating business; whether dividends are accrued affects the size of the claim, not whether it is in the bridge at all.'],
      ['Add preferred only if it is convertible into common at the conversion ratio', 'Both convertible and non-convertible preferred are added to EV. For non-convertible preferred, the value is typically the liquidation preference; for convertible preferred, the higher of the conversion value or the preference. Either way, it is added.'],
    ],
    'Preferred stock is added to enterprise value because it is a senior claim on the operating business. Convertibility, dividend type, and liquidation features affect *how much* is added, but the direction is always addition. Same intuition as minority interest: the EBITDA includes earnings available to senior claimants, so EV must include the claim.'),

  q(4351238, 'Career Skills', CHAPTER, 'Operating lease debt treatment',
    'Under US GAAP (ASC 842), operating leases now sit on the balance sheet as right-of-use assets and lease liabilities. How does this affect the EV bridge for a retailer with substantial store leases?',
    'Treat operating lease liabilities as debt-like in the EV bridge — add them to enterprise value alongside financial debt — and verify that the EBITDA being used has been treated consistently (under ASC 842, rent on operating leases hits operating expense, so EBITDA already excludes the financing component of the lease)',
    [
      ['Treat operating leases as non-debt because they are not labeled interest-bearing borrowings', 'Post-ASC 842, operating lease liabilities are debt-like obligations recognized on the balance sheet. Ignoring them in the EV bridge understates the cost of acquiring the operating business, especially for retailers, restaurants, and airlines where leases are economically substantial.'],
      ['Subtract operating leases from EV because they represent an asset (right-of-use)', 'The right-of-use asset and the lease liability are two sides of the same lease — the asset belongs to the operating business (already implicit in EV via the earnings the leased asset generates), and the liability is the obligation to pay for it. The liability is added; the asset is not separately subtracted.'],
      ['Include operating leases only if the company elected to use EBITDAR for reporting', 'Whether the company reports EBITDAR (pre-rent) or EBITDA does not change whether leases are economically debt-like. The choice is about which metric to use in the multiple; the lease liability is still a claim on the enterprise either way.'],
    ],
    'Post-ASC 842, operating lease liabilities are added to enterprise value because they are debt-like obligations on the balance sheet. The companion question is which EBITDA definition is being used — comps need to be consistent across the universe (rent in or rent out of EBITDA), and the EV side has to match the EBITDA convention.'),

  // -------------------------------------------------------------------------
  // Normalization and currency (4351239–4351240)
  // -------------------------------------------------------------------------
  q(4351239, 'Career Skills', CHAPTER, 'Non-recurring item normalization for LTM EBITDA',
    'A US sell-side target\'s LTM EBITDA is $80M. Management proposes the following normalizations: $5M legal settlement (one-time, resolved), $3M severance from a one-time reduction in force, $4M pandemic-era hazard pay that no longer recurs, $6M of investment in a new product line that has not yet generated revenue, and $2M of unusually high D&A from a one-time write-up. Which adjustments are defensible to a sophisticated buyer?',
    'Accept the $5M legal settlement, $3M severance, and $4M pandemic hazard pay as defensible non-recurring add-backs; reject the $6M product investment (operating expense for an ongoing strategic choice, not a one-time event); the D&A item is non-cash and is already excluded from EBITDA so it does not need adjusting',
    [
      ['Accept all five normalizations because management has flagged them as non-recurring', 'Management classification is the starting point, not the answer. Sophisticated buyers and QoE providers test each normalization against criteria (one-time-ness, frequency, classification consistency) — and "investment that has not yet paid back" rarely passes the test.'],
      ['Reject all five because every business has periodic charges and they are part of normal operations', 'A blanket rejection is also wrong. Genuine one-time items (litigation settlements, RIFs, pandemic-specific costs) are universally accepted in QoE — the discipline is to apply criteria, not to reject categorically.'],
      ['Accept the $6M product investment but reject the legal settlement because settlements often recur in litigation-prone businesses', 'Product investment is the canonical rejected add-back — it is ongoing strategic choice, not a one-time event. The legal settlement\'s acceptability depends on the litigation profile (a serial defendant\'s settlements are not one-time); for most businesses, a specific, resolved settlement is the textbook accepted add-back.'],
    ],
    'EBITDA normalization is a judgment call applied with criteria, not an enumeration. One-time events (settlements, RIFs, pandemic-specific costs) generally pass. Ongoing strategic investments dressed as "non-recurring" generally do not. Buyer QoE providers stress-test the bridge — the seller-side discipline is to propose a bridge the QoE will largely accept rather than a maximalist one that gets cut in half.'),

  q(4351240, 'Career Skills', CHAPTER, 'Currency in cross-border comps',
    'You are valuing a US target alongside a comp set that includes one European and one Japanese listing. The European comp reports in EUR; the Japanese comp reports in JPY. What is the correct currency treatment for the comp output?',
    'Convert each comp\'s equity value, debt, and EBITDA to USD using consistent exchange rates (spot for market cap, period-average for income-statement items like EBITDA, balance-sheet date for debt and cash), and report all multiples in a single currency to avoid mechanical apples-to-oranges',
    [
      ['Report each comp in its own native currency and let the user mentally convert', 'A comp table with mixed currencies is essentially unreadable for cross-comp comparison. The whole point of a comp universe is comparability — currency inconsistency breaks that at the most basic level.'],
      ['Convert everything using the latest spot rate including the income statement items', 'Spot rate for income-statement items captures end-of-period FX but not the FX environment under which the period\'s earnings were actually generated. Period-average rates for income-statement items are the convention; spot for balance-sheet items like cash and debt.'],
      ['Drop the European and Japanese comps to avoid the FX question entirely', 'Discarding international comps because of FX work is the same pattern as discarding mismatched-calendar comps — losing universe breadth to avoid mechanical work that is supposed to happen. Currency conversion is mandatory groundwork, not optional.'],
    ],
    'Cross-border comps require consistent FX treatment: spot for stock prices and balance-sheet items, period-average for income-statement items, all output in a single currency. The conventions are mechanical, but skipping them produces multiples that compare different currency environments masquerading as the same comparison.'),
]

import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// CLF CH2 — Credit Metrics and Cash Flow
// ----------------------------------------------------------------------------
// 42 new questions (IDs 4410100–4410141) extending the existing 8-question
// chapter in careerAgentGeneratedRoadmapFinance.ts (IDs 4103048, 4103049,
// 4103050, 4105116, 4105117, 4107396, 4107866, 4107878).
//
// Coverage:
//   - Leverage ratios (~8): Net Debt / EBITDA, Total Debt / EBITDA,
//     Senior Debt / EBITDA, lease-adjusted variants
//   - Coverage ratios (~7): EBITDA / Interest, (EBITDA - capex) / Interest,
//     FCF / Debt, EBITDA-Capex / Cash Interest
//   - Free cash flow definitions (~6): unlevered FCF, levered FCF, FCF
//     available for debt paydown, mandatory amortization vs cash sweep
//   - Credit rating mapping (~6): IG (BBB-/Baa3 and above) vs HY (BB+/Ba1
//     and below), notch shifts, watch vs outlook
//   - Industry-specific metrics (~6): retail (inventory turns, comp store
//     sales), telco (subscriber economics), commodity (cash cost curve
//     position), banks (Tier 1, NPL ratio)
//   - Cash flow walks (~5): EBITDA -> FCF -> debt paydown bridge,
//     working capital absorption discipline
//   - EBITDA quality flags (~4): one-time addbacks, pro forma cost saves
//     (Quality of Earnings adjustments), recurring "one-time"
//
// US-GAAP context throughout. Voice matches jargonBusters.ts and the
// existing CLF Ch2 questions — bespoke whyWrong rationales, no strawman
// distractors, evidence-anchored.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe CLF Ch2 canonical bank'

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

const CHAPTER = 'Credit Metrics and Cash Flow'

// Difficulty distribution: 12 at 3, 21 at 4, 9 at 5 (total 42).
export const CLF_CH2_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Leverage ratios (4410100–4410107)
  4410100: 3, // Net Debt / EBITDA basic compute
  4410101: 3, // Total vs Net Debt distinction
  4410102: 4, // Senior Debt / EBITDA in a layered cap structure
  4410103: 4, // Lease-adjusted leverage under ASC 842
  4410104: 4, // Pro forma synergies in the denominator
  4410105: 5, // Net leverage with trapped cash overseas
  4410106: 4, // Through-the-cycle vs spot leverage
  4410107: 3, // Why HoldCo debt sits above OpCo leverage

  // Coverage ratios (4410108–4410114)
  4410108: 3, // EBITDA / Interest basic compute
  4410109: 4, // (EBITDA - capex) / Interest after a heavy capex year
  4410110: 4, // Fixed Charge Coverage including rent
  4410111: 4, // FCF / Debt as a repayment-speed metric
  4410112: 5, // Cash interest vs P&L interest with PIK
  4410113: 3, // EBITDA-Capex / Cash Interest framing
  4410114: 5, // DSCR for project finance vs corporate

  // Free cash flow definitions (4410115–4410120)
  4410115: 3, // Unlevered FCF definition
  4410116: 3, // Levered FCF definition
  4410117: 4, // FCF available for debt paydown after mandatory items
  4410118: 4, // Mandatory amortization vs excess cash flow sweep
  4410119: 5, // Distinguishing FCFF from CFADS for covenant work
  4410120: 4, // Capex maintenance vs growth split for FCF

  // Credit rating mapping (4410121–4410126)
  4410121: 3, // IG threshold at BBB-/Baa3
  4410122: 3, // HY threshold at BB+/Ba1
  4410123: 4, // Notch shifts and what triggers one
  4410124: 4, // Watch vs outlook distinction
  4410125: 4, // Crossover credit pricing dynamics
  4410126: 5, // Forced-seller mechanics on a downgrade to HY

  // Industry-specific metrics (4410127–4410132)
  4410127: 3, // Retail inventory turns as a working-capital read
  4410128: 4, // Comp store sales as the retail demand signal
  4410129: 4, // Telco subscriber economics (ARPU, churn, SAC)
  4410130: 5, // Commodity producer cash-cost-curve position
  4410131: 4, // Bank Tier 1 capital as the loss-absorbing layer
  4410132: 4, // Bank NPL ratio and coverage

  // Cash flow walks (4410133–4410137)
  4410133: 3, // EBITDA -> FCF bridge structure
  4410134: 4, // Working capital absorption inside the bridge
  4410135: 4, // Cash taxes vs book tax in the walk
  4410136: 5, // FCF -> debt paydown after dividends and acquisitions
  4410137: 5, // Reconciling FCF to change in net debt

  // EBITDA quality flags (4410138–4410141)
  4410138: 4, // Recurring "one-time" addbacks
  4410139: 5, // Pro forma cost saves as a Quality of Earnings adjustment
  4410140: 4, // Stock-based compensation as a real cost
  4410141: 3, // Restructuring addbacks that keep appearing
}

export const clfCh2Questions: Question[] = [
  // -------------------------------------------------------------------------
  // LEVERAGE RATIOS (4410100–4410107)
  // -------------------------------------------------------------------------
  q(4410100, 'Career Skills', CHAPTER, 'Net Debt / EBITDA basic',
    'A borrower has $800M of total debt, $150M of cash and equivalents, and LTM EBITDA of $200M. What is Net Debt / EBITDA?',
    '3.25x',
    [
      ['4.00x', '4.00x is total debt / EBITDA = 800 / 200. It ignores the $150M of cash, which is the "net" in net debt.'],
      ['3.75x', '3.75x would imply $750M of net debt — that subtracts only $50M of cash, not the full $150M on the balance sheet.'],
      ['5.33x', '5.33x looks like 800 / 150, which is debt to cash. That ratio has no standard credit meaning.'],
    ],
    'Net Debt = Total Debt - Cash and equivalents. Here, (800 - 150) / 200 = 3.25x. Net leverage is the standard credit metric when cash is reliably available to repay debt.'),

  q(4410101, 'Career Skills', CHAPTER, 'Total vs Net Debt distinction',
    'An analyst computes net leverage at 3.0x and total leverage at 4.5x. The CFO insists net is the right number. When should the credit committee push back and use total debt instead?',
    'When the cash sits at non-guarantor subsidiaries, is restricted, or is needed for working capital — in which case it cannot actually be applied to repay debt',
    [
      ['Always — total debt is conservative and net debt is for equity research', 'Net leverage is a standard credit metric when the cash is freely available. Refusing to net any cash overstates risk and ignores how repayment actually works.'],
      ['Never — net leverage is the lender market convention so it always wins', 'Net leverage is conventional but not universal. The convention assumes the cash is real and accessible; when it is not, total debt is the honest read.'],
      ['Only when the rating agencies tell you to', 'Rating agencies make their own adjustments, but the credit committee owes its own view. The test is whether the cash can actually retire debt, not who else has weighed in.'],
    ],
    'Net leverage is appropriate when cash is unrestricted, at guarantor entities, and not earmarked for working capital. Trapped or operational cash should be excluded from the netting — at the limit, use total debt.'),

  q(4410102, 'Career Skills', CHAPTER, 'Senior Debt / EBITDA in a layered cap structure',
    'A borrower has $400M of senior secured term loan, $200M of senior unsecured notes, $150M of subordinated notes, and LTM EBITDA of $250M. What is senior secured leverage?',
    '1.6x',
    [
      ['2.4x', '2.4x = 600 / 250, which lumps the senior unsecured notes in with the secured term loan. Senior secured leverage uses only secured debt.'],
      ['3.0x', '3.0x = 750 / 250 is total leverage including subordinated debt. The question asks for senior secured only.'],
      ['0.6x', '0.6x = 150 / 250 is the subordinated piece divided by EBITDA — a slice that does not match any standard metric.'],
    ],
    'Senior secured leverage isolates the debt with the first claim on collateral. Here, 400 / 250 = 1.6x. The full leverage stack (1.6x secured / 2.4x senior / 3.0x total) is what lenders care about because recovery cascades by priority.'),

  q(4410103, 'Career Skills', CHAPTER, 'Lease-adjusted leverage under ASC 842',
    'A retailer reports $500M of funded debt and $400M of operating lease liabilities on the balance sheet under ASC 842. LTM EBITDAR (EBITDA before rent) is $300M; rent expense is $80M. Which lease-adjusted leverage view is most defensible for credit purposes?',
    'Treat the operating lease liability as a debt-like obligation: lease-adjusted debt of ~$900M divided by EBITDAR of $300M, giving roughly 3.0x — and confirm against the rating agency 8x rent capitalization as a sanity check',
    [
      ['Use only funded debt because ASC 842 already discloses leases elsewhere on the balance sheet', 'ASC 842 only put operating leases on the balance sheet — it did not move them into funded debt. The credit committee still has to decide whether to treat the lease liability as debt-like, and for a retailer the answer is yes.'],
      ['Use 500 / 300 = 1.67x and conclude the borrower is lightly levered', 'Using funded debt over EBITDAR mixes a pre-rent earnings number with a post-rent debt number. The two have to be on the same basis — either both include leases or neither does.'],
      ['Capitalize rent at 10x and ignore the ASC 842 balance', 'Rule-of-thumb rent capitalization (8x is the more common Moody\'s convention, not 10x) is a useful sanity check, but it should not displace the actual lease liability the company now discloses under ASC 842.'],
    ],
    'For retailers, telcos, and airlines, leases are debt-like in substance. Lease-adjusted leverage uses lease-inclusive debt against EBITDAR (or EBITDA with rent added back), so the numerator and denominator are on the same basis.'),

  q(4410104, 'Career Skills', CHAPTER, 'Pro forma synergies in the denominator',
    'A sponsor presents pro forma leverage of 4.5x after adding $40M of unrealized "Day 2 synergies" to EBITDA. Without those synergies, leverage is 5.5x. How should the credit analyst frame this in the memo?',
    'Show leverage both ways — reported PF including synergies and an "as-is" view excluding unproven synergies — and base the recommendation on the as-is figure while noting the path to delivering the addbacks',
    [
      ['Accept the sponsor\'s number because they have done the diligence and know the cost base', 'Sponsors are not neutral on EBITDA addbacks at signing. The credit analyst\'s job is to test the addbacks, not adopt them.'],
      ['Reject the synergies entirely and use only the as-is figure', 'A blanket rejection ignores synergies that have a credible path. The discipline is to size the achievable piece, not to refuse the entire conversation.'],
      ['Average the two leverage figures to be balanced', 'Averaging is a way of avoiding the decision. Credit committees need both views shown side by side so the synergy assumption can be argued separately.'],
    ],
    'Pro forma adjustments cluster around deal closings precisely because they help the leverage headline. The honest practice is to show as-is leverage prominently and treat synergies as a forecast, not an accomplished fact.'),

  q(4410105, 'Career Skills', CHAPTER, 'Net leverage with trapped cash',
    'A US-headquartered borrower has $1,200M of debt, $500M of cash, and LTM EBITDA of $300M. Of the $500M cash, $350M sits at foreign subsidiaries where repatriation would trigger material tax leakage. What is the most defensible net leverage view?',
    'Use only freely accessible cash in the netting — roughly $150M — giving net leverage of ~3.5x, and disclose the trapped-cash treatment so the committee can see why net and gross diverge',
    [
      ['Net all $500M and report 2.33x because the cash exists on the consolidated balance sheet', 'Consolidated cash includes balances that cannot be moved without leakage. Treating trapped cash the same as domestic cash overstates repayment capacity.'],
      ['Use gross leverage of 4.0x because any cash that has tax leakage cannot be netted at all', 'Cash with tax friction is still partially available — the right move is to size what can actually be applied, not to discard the entire balance.'],
      ['Net all $500M but apply a 50% haircut to total debt as a counterweight', 'Haircutting debt to balance a cash overstatement is two errors that do not cancel. The discipline is to fix the cash side directly.'],
    ],
    'Trapped cash, restricted cash, and cash needed for daily working capital should be excluded from net leverage. Showing the netting assumption explicitly is what lets the committee judge it.'),

  q(4410106, 'Career Skills', CHAPTER, 'Through-the-cycle vs spot leverage',
    'A cyclical borrower\'s spot leverage is 3.5x at peak earnings. A trough EBITDA scenario (a ~30% decline) would push leverage to 5.0x. Which leverage view should drive the rating committee\'s base case?',
    'Through-the-cycle leverage that contemplates the trough scenario — committees should not anchor on peak metrics when the company is structurally cyclical',
    [
      ['Spot leverage of 3.5x, because that is the company\'s current condition and most relevant to the next 12 months', 'Spot leverage at peak earnings flatters cyclicals. Rating committees that look only at the spot get caught by the cycle they could see coming.'],
      ['The trough figure of 5.0x as the only view, ignoring the current state', 'Anchoring only on the trough discards information about the company\'s present condition. The discipline is to weigh both, not to pick a single extreme.'],
      ['Whichever leverage view supports the desired rating, since both are defensible', 'Picking the view to match the conclusion is reverse-engineering, not analysis. The committee should pick the view first and let it drive the rating.'],
    ],
    'Cyclical credits should be analyzed through the cycle. The base case sits between peak and trough, weighted by where in the cycle the borrower is — and the trough scenario is what tests whether the capital structure survives.'),

  q(4410107, 'Career Skills', CHAPTER, 'HoldCo vs OpCo leverage',
    'A levered borrower has OpCo leverage of 4.0x and HoldCo leverage (including PIK notes issued at the parent) of 5.5x. Why does the HoldCo number matter even though the PIK notes are structurally subordinated and non-recourse to OpCo?',
    'HoldCo debt is serviced from cash that has to flow up from OpCo, so distress at HoldCo can force dividends, refinancings, or restructurings that destabilize OpCo even when the legal claim stops at the parent',
    [
      ['It does not — HoldCo creditors have no claim on OpCo assets, so OpCo lenders can ignore the parent', 'Structural subordination protects against direct claims, not against the operational consequences of HoldCo distress flowing back to OpCo through dividend pressure or strategic action.'],
      ['HoldCo leverage is the only relevant number because it captures all debt in the structure', 'The two views serve different questions. OpCo leverage tells you what the operating business carries; HoldCo leverage tells you the total stack. Both belong in the memo.'],
      ['HoldCo leverage matters only when the company is investment grade', 'The opposite is closer to the truth — HoldCo PIK notes are far more common in HY structures, and that is exactly where the cash-flow-up dynamic creates the most stress.'],
    ],
    'Structural subordination limits legal recourse but not operational pressure. HoldCo distress almost always leaks into OpCo decisions, which is why lenders look at both leverage layers.'),

  // -------------------------------------------------------------------------
  // COVERAGE RATIOS (4410108–4410114)
  // -------------------------------------------------------------------------
  q(4410108, 'Career Skills', CHAPTER, 'EBITDA / Interest basic compute',
    'A borrower has LTM EBITDA of $180M and cash interest expense of $45M. What is interest coverage?',
    '4.0x',
    [
      ['0.25x', '0.25x is 45 / 180, which inverts the ratio. Coverage is earnings over interest, not interest over earnings.'],
      ['2.0x', '2.0x would imply $90M of cash interest. The actual figure is $45M.'],
      ['9.0x', '9.0x would imply $20M of cash interest. The actual figure is $45M.'],
    ],
    'Interest coverage measures how many times earnings can cover the cash cost of debt. Here, 180 / 45 = 4.0x. Anything below ~2.0x is usually a flag in HY work.'),

  q(4410109, 'Career Skills', CHAPTER, '(EBITDA - capex) / Interest after heavy capex',
    'A capital-intensive borrower reports $300M of EBITDA, $120M of capex, and $80M of cash interest. The CFO highlights 3.75x EBITDA coverage. What does the lender-friendly view show?',
    '(EBITDA - capex) / Interest = (300 - 120) / 80 = 2.25x — because capex consumes earnings that would otherwise service debt',
    [
      ['3.75x is the right view because capex is a discretionary investment, not a cost', 'For most asset-heavy borrowers, maintenance capex is not discretionary in the medium term — it is the cost of keeping the asset base productive. Ignoring it overstates debt service capacity.'],
      ['(EBITDA + capex) / Interest = 5.25x, because capex creates future earnings', 'Adding capex back inflates coverage by treating an outflow as a benefit. The whole point of the (EBITDA - capex) view is that capex is cash that does not service debt.'],
      ['Coverage is irrelevant when capex is heavy — only leverage matters', 'Coverage and leverage answer different questions. Coverage tells you whether the borrower can pay interest; leverage tells you whether the debt is sized to the earnings. Both are required.'],
    ],
    '(EBITDA - Capex) / Interest is the standard adjusted coverage metric for capital-intensive credits. It captures the fact that capex competes with interest for the same cash pool.'),

  q(4410110, 'Career Skills', CHAPTER, 'Fixed Charge Coverage including rent',
    'A retailer reports EBITDA of $250M, rent of $80M, and cash interest of $40M. What is Fixed Charge Coverage (FCCR)?',
    '(EBITDA + Rent) / (Interest + Rent) = 330 / 120 = 2.75x',
    [
      ['EBITDA / Interest = 6.25x', '6.25x ignores rent on both sides. For a retailer, rent is a fixed charge as real as interest — both belong in the denominator and EBITDAR belongs in the numerator.'],
      ['EBITDA / (Interest + Rent) = 250 / 120 = 2.08x', '2.08x is half-corrected — rent is in the denominator but not added back in the numerator. EBITDA was struck after rent, so the numerator must add it back to keep the bases consistent.'],
      ['(EBITDA - Rent) / Interest = 170 / 40 = 4.25x', 'Subtracting rent from EBITDA double-counts the deduction (it was already deducted to arrive at EBITDA in the first place) and then ignores rent on the denominator side.'],
    ],
    'FCCR captures the full fixed-charge burden including rent. The numerator and denominator have to be on the same basis — both before rent or both after — and convention is the EBITDAR-over-fixed-charges version.'),

  q(4410111, 'Career Skills', CHAPTER, 'FCF / Debt as a repayment-speed metric',
    'A lender computes FCF / Total Debt at 12%. What does this metric communicate that leverage does not?',
    'The implied number of years to repay all debt from current FCF — roughly 8 years at 12%, even before any new investments or shareholder distributions',
    [
      ['Nothing new — it is the inverse of leverage and tells the same story', 'It is not the inverse of leverage (that would be EBITDA / Debt). FCF / Debt incorporates capex, working capital, taxes, and interest, which leverage does not.'],
      ['The probability of default in the next 12 months', 'FCF / Debt is a repayment-speed signal, not a default probability. Default probability comes from rating models that combine multiple metrics with structural and industry overlays.'],
      ['The cost of debt as a percentage of cash flow', 'Cost of debt is interest / debt, not FCF / debt. The two are related but answer different questions.'],
    ],
    'FCF / Debt expresses repayment speed: how long would it take to amortize all debt from current cash generation if nothing else changed. Below ~5% is usually a flag; above ~15% signals real repayment capacity.'),

  q(4410112, 'Career Skills', CHAPTER, 'Cash interest vs P&L interest with PIK',
    'A borrower\'s income statement shows $100M of interest expense. Of that, $30M is PIK (paid in kind, accreting to principal). Which figure should drive interest coverage?',
    'Cash interest of $70M — coverage measures the ability to service interest from current cash flow, and PIK by definition is not paid in cash',
    [
      ['The full $100M, because PIK interest is still a real economic cost', 'PIK is a real economic cost for leverage and total return purposes, but it is not a cash service requirement in the current period. Including it overstates the cash interest burden.'],
      ['Average the two ($85M) to balance economic and cash views', 'Averaging is arbitrary. The right move is to show cash coverage and economic coverage as two separate views with different uses.'],
      ['Use $30M (PIK only) because that captures the deferred obligation', 'Using PIK only ignores the $70M that actually has to be funded from cash this period. The cash service is the binding constraint, not the deferred piece.'],
    ],
    'Cash interest is what coverage actually measures. PIK accretes to principal and shows up later as a larger debt balance — relevant to leverage, irrelevant to current cash service.'),

  q(4410113, 'Career Skills', CHAPTER, 'EBITDA-Capex / Cash Interest framing',
    'A senior banker asks why most credit memos lead with (EBITDA - Capex) / Cash Interest rather than EBITDA / Interest. What is the cleanest answer?',
    'Because cash actually available for debt service equals earnings minus capex — both compete for the same pool, and a coverage ratio that ignores capex flatters capital-intensive credits',
    [
      ['Because cash interest is always lower than book interest and inflates the ratio', 'Cash interest can be either higher or lower than book interest depending on PIK, OID amortization, and capitalized interest. The metric does not depend on which is bigger.'],
      ['Because the rating agencies require it', 'Rating agencies look at multiple coverage views. The reason the lender-friendly version dominates memos is analytical, not regulatory.'],
      ['Because EBITDA / Interest is technically wrong', 'EBITDA / Interest is a valid metric and is also reported. The point is that the capex-adjusted version is more conservative and more relevant for asset-heavy credits.'],
    ],
    'Capex and interest both consume cash. A coverage ratio that ignores capex implicitly assumes the asset base maintains itself — true for some asset-light businesses, false for most leveraged borrowers.'),

  q(4410114, 'Career Skills', CHAPTER, 'DSCR for project finance vs corporate',
    'A project finance team uses Debt Service Coverage Ratio (DSCR) of 1.30x, while a corporate credit team uses EBITDA / Interest of 4.0x. Why does project finance lean on DSCR specifically?',
    'DSCR includes principal amortization in the denominator, not just interest — project finance is structured around scheduled amortization to a target maturity, so coverage has to test the full debt service profile',
    [
      ['Because project finance has more leverage, so a different metric is needed', 'Project finance often runs at higher leverage, but that is not why DSCR is used. The metric is chosen for what it measures, not for how to flatter higher leverage.'],
      ['Because EBITDA does not exist in project finance', 'EBITDA exists in project finance and is often the numerator of DSCR (specifically, CFADS — Cash Flow Available for Debt Service). The difference is on the denominator side.'],
      ['Because corporate metrics are forward-looking and project finance is historical', 'Both metric families are computed historically and projected forward. The distinction is what gets measured, not the time frame.'],
    ],
    'DSCR = CFADS / (Interest + Mandatory Principal). Project finance debt is structured to amortize over the asset life, so a coverage metric that ignores principal would miss the binding constraint.'),

  // -------------------------------------------------------------------------
  // FREE CASH FLOW DEFINITIONS (4410115–4410120)
  // -------------------------------------------------------------------------
  q(4410115, 'Career Skills', CHAPTER, 'Unlevered FCF definition',
    'Which formula correctly defines Unlevered Free Cash Flow (FCFF) under US-GAAP conventions?',
    'EBIT * (1 - tax rate) + D&A - Capex - Change in Working Capital',
    [
      ['Net Income + D&A - Capex - Change in Working Capital', 'That is closer to levered FCF — net income is already after interest, so the result reflects only what is available to equity, not what is available to all capital providers.'],
      ['EBITDA - Capex - Interest - Taxes', 'Subtracting interest makes the metric levered, not unlevered. Unlevered FCF is computed before interest specifically because it represents cash flow to all capital providers.'],
      ['Cash from Operations - Capex', 'That is a common shorthand for levered FCF (CFO is reported after interest under US-GAAP), not unlevered FCF. The two are not interchangeable.'],
    ],
    'Unlevered FCF is the cash available to all capital providers — debt and equity — before financing costs. Starting from EBIT(1-t) keeps the calculation capital-structure-neutral, which is why it is used in DCF.'),

  q(4410116, 'Career Skills', CHAPTER, 'Levered FCF definition',
    'How is Levered Free Cash Flow (FCFE) most cleanly defined for a US-GAAP filer?',
    'Cash from Operations - Capex (with optional adjustment for mandatory debt repayments) — it represents cash available to equity after debt service',
    [
      ['EBITDA - Capex', 'That is an EBITDA-based proxy that ignores working capital, cash taxes, and interest. It is a useful shorthand for valuation but is not levered FCF.'],
      ['Net Income - Capex', 'Net income includes non-cash items like D&A but excludes the actual cash impact of working capital. Subtracting capex from a non-cash starting point yields a metric that means something but is not FCFE.'],
      ['EBIT(1-t) - Capex - Change in WC', 'That is unlevered FCF — it is computed before interest. Levered FCF has to net cash interest somewhere in the chain.'],
    ],
    'Under US-GAAP, Cash from Operations is reported after cash interest paid, so CFO - Capex is a clean approximation of FCFE. IFRS reporting can classify interest in financing, which changes the convenience of this shortcut.'),

  q(4410117, 'Career Skills', CHAPTER, 'FCF available for debt paydown',
    'A borrower generates $200M of levered FCF, pays a $50M dividend, makes $30M of bolt-on acquisitions, and has $20M of mandatory term loan amortization. How much FCF is available for *discretionary* debt paydown?',
    '$100M = $200M - $50M dividend - $30M M&A - $20M mandatory amortization',
    [
      ['$200M, because the levered FCF figure is by definition available for debt paydown', 'Levered FCF is the starting point, not the answer. Dividends, M&A, and mandatory amortization all consume cash before any discretionary paydown.'],
      ['$150M, netting out dividends only', 'Netting only dividends ignores the M&A spend and the required principal amortization. Both are claims on cash that compete with debt paydown.'],
      ['$120M, netting out mandatory amortization and M&A but not dividends', 'Treating dividends as optional is a stretch for most public-style payouts. Either include them or document the assumption that they could be cut.'],
    ],
    'FCF available for discretionary debt paydown is what remains after the cash uses the company has effectively committed to — typically dividends, mandatory amortization, and announced M&A. Modeling this explicitly is how lenders forecast deleveraging.'),

  q(4410118, 'Career Skills', CHAPTER, 'Mandatory amortization vs excess cash flow sweep',
    'A term loan has 1% annual mandatory amortization and a 50% Excess Cash Flow (ECF) sweep above a $50M ECF threshold. The borrower generates $150M of ECF. How much principal is repaid this year?',
    'Mandatory amortization (1% * principal) plus 50% of the $100M ECF above the threshold ($50M) — so amortization + $50M of sweep payments',
    [
      ['Only the 1% mandatory amortization — the sweep is at the borrower\'s option', 'The cash sweep is contractual, not optional. Once the ECF threshold is breached and the sweep percentage applies, the prepayment is required.'],
      ['100% of ECF, because the sweep applies to all excess cash flow', '100% sweeps exist but are not standard. A 50% sweep applies to the cash flow above the threshold, not to all of it.'],
      ['The full $150M of ECF, plus the 1% amortization', 'That double-pays: $150M as a sweep already exceeds the actual contractual prepayment, and adding amortization on top compounds the error.'],
    ],
    'ECF sweeps accelerate deleveraging when the borrower outperforms. Modeling them correctly — threshold, percentage, and step-downs as leverage falls — is core to a credit-side cash flow model.'),

  q(4410119, 'Career Skills', CHAPTER, 'FCFF vs CFADS for covenant work',
    'A covenant test uses "Excess Cash Flow" as defined in the credit agreement. An analyst initially uses unlevered FCF (FCFF). Why is this likely wrong?',
    'Credit agreement ECF definitions are documents-specific and usually start from a levered measure (often consolidated net income or CFADS) with bespoke add-backs and deductions — FCFF would systematically miss the agreement\'s actual definition',
    [
      ['FCFF and ECF are the same thing measured two different ways', 'They are not the same. FCFF is a valuation construct; ECF is a covenant construct defined inside the credit agreement, and the two rarely align.'],
      ['ECF is computed at the consolidated parent only and FCFF is computed at OpCo, so the two would differ only by scope', 'Both can be computed at the same scope. The difference is that ECF\'s definition is what the credit agreement says it is — usually with deductions for capex, mandatory amortization, permitted investments, and taxes — not a generic finance-textbook definition.'],
      ['The credit agreement never defines ECF, so the analyst can use any reasonable definition', 'ECF is one of the most heavily-negotiated definitions in any credit agreement. The text controls; the analyst has to read it.'],
    ],
    'Covenant metrics live in the credit agreement, not in finance textbooks. Always read the definition of EBITDA, ECF, FCF, and "permitted" categories — bank counsel earns their fee in that section.'),

  q(4410120, 'Career Skills', CHAPTER, 'Maintenance vs growth capex split',
    'A borrower reports $300M of total capex. Management splits it as $180M maintenance and $120M growth. Why does this distinction matter for credit analysis, and what is the risk?',
    'Maintenance capex is non-discretionary and must be deducted from EBITDA when sizing recurring FCF; growth capex is more discretionary but often less than management claims — analysts should pressure-test the split because aggressive classification flatters FCF',
    [
      ['It does not matter — capex is capex, and the total is what consumes cash', 'In the period, the cash impact is the same. But the credit committee needs to know how much of the capex is structural (must continue at this level) versus discretionary (could be cut in a downturn). That is the deleveraging optionality.'],
      ['Maintenance capex is irrelevant because depreciation already captures it', 'Depreciation is a book figure based on historical cost. Cash maintenance capex can differ materially — sometimes higher (inflation, technology refresh), sometimes lower (long-lived assets). The two are not substitutes.'],
      ['Growth capex should be added back to EBITDA because it builds future earnings', 'Growth capex is still cash out the door in the current period and does not service current debt. Adding it back is a category error that confuses valuation with credit.'],
    ],
    'The maintenance/growth split is where management discretion enters the FCF estimate. Analysts should triangulate against depreciation, peer ratios, and historical capex during downturns to test whether the maintenance figure is realistic.'),

  // -------------------------------------------------------------------------
  // CREDIT RATING MAPPING (4410121–4410126)
  // -------------------------------------------------------------------------
  q(4410121, 'Career Skills', CHAPTER, 'IG threshold',
    'Which rating combinations represent the lowest rung of investment grade across S&P, Moody\'s, and Fitch?',
    'BBB- (S&P and Fitch) and Baa3 (Moody\'s) — anything below these is high yield',
    [
      ['BBB+ (S&P/Fitch) and Baa1 (Moody\'s)', 'BBB+ and Baa1 sit comfortably inside investment grade. The *lowest* rung of IG is BBB-/Baa3, one notch above the IG/HY boundary.'],
      ['BB+ (S&P/Fitch) and Ba1 (Moody\'s)', 'BB+ and Ba1 are the *highest* rung of high yield — one notch below IG. They sit just on the HY side of the line.'],
      ['A- (S&P/Fitch) and A3 (Moody\'s)', 'A-/A3 is well inside investment grade and several notches above the IG/HY boundary.'],
    ],
    'The IG/HY divide sits between BBB-/Baa3 (lowest IG) and BB+/Ba1 (highest HY). This boundary drives index inclusion, pricing, and forced-seller dynamics on downgrades.'),

  q(4410122, 'Career Skills', CHAPTER, 'HY threshold',
    'A bond is rated BB+ by S&P and Ba1 by Moody\'s. How is it classified for index and investor-mandate purposes?',
    'High yield — BB+ / Ba1 is the highest HY rating but still below the investment-grade boundary; it sits in HY indices and outside IG-only mandates',
    [
      ['Investment grade, because it is one notch from BBB-/Baa3', 'Being one notch away does not change the classification. IG-only mandates cannot hold BB+/Ba1, regardless of how close it sits to the boundary.'],
      ['Crossover, with formal status in both IG and HY indices', '"Crossover" is informal market language for credits near the boundary, but it is not a formal index category. The classification is HY.'],
      ['It depends on the Fitch rating, which is decisive', 'No single agency is decisive across all indices. Most major HY indices use a multi-agency rule (e.g., highest of two, or middle of three) — but BB+/Ba1 maps to HY under nearly every convention.'],
    ],
    'BB+/Ba1 is the top end of HY. Credits sitting here are often called "crossovers" informally because a single-notch upgrade pushes them into IG — but until that upgrade lands, they are priced and held as HY.'),

  q(4410123, 'Career Skills', CHAPTER, 'Notch shifts',
    'A borrower is currently BB+ and gets downgraded to BB. What is this called and what typically triggers it?',
    'A one-notch downgrade, typically triggered by deteriorating leverage, coverage, or business trends — or a re-rating after a leveraged event like an LBO or large debt-funded acquisition',
    [
      ['A category downgrade from IG to HY, called a "fallen angel"', 'A fallen angel is a downgrade *across* the IG/HY boundary. BB+ to BB is one notch *within* HY — same category.'],
      ['A two-notch downgrade because notches are smaller in HY', 'Notches are the same size on the scale (BB+, BB, BB-, B+, etc.). BB+ to BB is one notch in any category.'],
      ['A "rising star" event because the company is moving toward IG', '"Rising star" is the opposite direction — an HY credit upgraded into IG. BB+ to BB moves further into HY, not toward it.'],
    ],
    'Notches are the granularity of the rating scale. One-notch moves are routine and reflect incremental change; multi-notch downgrades signal a discrete event or material misjudgment by the agency.'),

  q(4410124, 'Career Skills', CHAPTER, 'Watch vs outlook',
    'An agency places a BBB-rated company on "Negative Outlook." A few months later it changes the action to "Negative Watch." What is the practical difference?',
    'Outlook signals direction over 6–24 months and is more probabilistic; Watch (or CreditWatch) signals a specific identified event likely to drive a near-term rating action, usually within 90 days',
    [
      ['They are the same thing under different agency naming', 'They are distinct actions with different time horizons and triggers. Confusing them misreads the agency\'s signal.'],
      ['Outlook is more urgent than Watch', 'It is the reverse. Watch is the more urgent and event-driven signal; Outlook is the longer-horizon directional view.'],
      ['Watch and Outlook are non-substantive labels that do not move spreads', 'Both move spreads, and Watch moves them more sharply because it implies an imminent action. The market does not treat the labels as cosmetic.'],
    ],
    'Outlook is the agency\'s view on the *direction* of the rating over a multi-quarter horizon. Watch is a *flag* that a specific event (M&A, refinancing, downgrade review) is likely to cause a near-term rating change. Treat them differently.'),

  q(4410125, 'Career Skills', CHAPTER, 'Crossover credit pricing dynamics',
    'A BBB- credit trades at a spread that looks rich versus IG peers and tight versus BB peers. Why does this "crossover" pricing emerge?',
    'Investors price in the asymmetric risk that a downgrade to BB+ would force IG-mandated holders to sell — creating concentrated supply that the HY market would have to absorb — so the spread reflects both IG-like fundamentals and HY-like dislocation risk',
    [
      ['Crossover credits are mispriced because the market cannot decide which index they belong to', 'The market knows the index assignment (it follows the agencies). The pricing reflects forward-looking transition risk, not confusion about current classification.'],
      ['The wider spread compensates for higher coupon, not credit risk', 'Coupon and spread move together via price; coupon does not independently widen the spread. The pricing reflects credit transition risk.'],
      ['Crossover spreads are simply the average of IG and HY spreads', 'They are not a mechanical average. They reflect the probability-weighted impact of a downgrade and the cost of the forced-seller event, which can be discrete and large.'],
    ],
    'Credits near the IG/HY boundary trade with one foot in each market. The asymmetric forced-selling risk on a downgrade — which has no symmetric upside on an upgrade — pulls spreads wider than fundamentals alone would suggest.'),

  q(4410126, 'Career Skills', CHAPTER, 'Forced-seller mechanics on downgrade to HY',
    'A bond is downgraded from BBB- to BB+ (a "fallen angel"). Why does the market often see a sharp spread widening followed by partial reversal?',
    'IG-mandated funds are forced to sell into a market that has fewer natural buyers immediately, creating a technical dislocation; once HY funds and crossover buyers reprice the bonds into HY portfolios, spreads partially recover',
    [
      ['Because fundamentals deteriorate further after the downgrade', 'Fundamental deterioration typically *precedes* the downgrade — the downgrade lags. The spread move is driven by index mechanics, not new fundamental information.'],
      ['Because rating agencies usually downgrade further within months', 'Sequential downgrades happen but are not the dominant explanation for the immediate spread move. The forced-seller technical is what creates the dislocation around the rating action itself.'],
      ['Because HY investors mark up the bonds aggressively for the new coupon', 'Coupons do not reset on a downgrade. The bonds trade at a price that produces the new yield-to-maturity the HY market demands.'],
    ],
    'Fallen-angel dynamics are well-documented: index-mandated supply hits the market faster than HY demand absorbs it, spreads gap wider than fundamentals justify, and the trade recovers over weeks-to-months. This is one of the cleanest examples of credit-market technicals separating from fundamentals.'),

  // -------------------------------------------------------------------------
  // INDUSTRY-SPECIFIC METRICS (4410127–4410132)
  // -------------------------------------------------------------------------
  q(4410127, 'Career Skills', CHAPTER, 'Retail inventory turns',
    'A retailer\'s inventory turns slow from 6.0x to 4.5x over two years while revenue is flat. What does this tell a credit analyst?',
    'Inventory is building faster than it is selling, which is absorbing working capital cash and may signal merchandising weakness or aging stock that will require markdowns later',
    [
      ['Inventory turns are an operational metric that does not affect credit', 'Inventory turns directly drive working capital cash absorption. Slower turns mean cash trapped on shelves rather than available for debt service.'],
      ['Higher inventory is a positive — it means the retailer is preparing for growth', 'Building inventory ahead of growth is sometimes legitimate, but with flat revenue the build is not preparing for anything. It is absorbing cash for no return.'],
      ['Inventory turns only matter at year-end and the analyst should ignore the trend', 'The trend is the signal. A snapshot at one date is noise; two years of deceleration is a pattern that affects FCF and may presage markdowns.'],
    ],
    'For retailers, inventory turns are a leading indicator of working capital health and future gross margin pressure. Slowing turns at flat revenue is one of the clearest signals that a markdown cycle is coming.'),

  q(4410128, 'Career Skills', CHAPTER, 'Comp store sales',
    'A multi-unit retailer reports comparable store sales (comps) of -3% while total revenue grows 5% from new store openings. Which read is most useful for credit?',
    'Same-store demand is contracting; total revenue growth is being purchased through capex on new stores, and the deleveraging story depends on whether new stores eventually comp positively',
    [
      ['Total revenue growth of 5% is the signal; comps are a slice the credit memo can skip', 'Comp sales are the cleanest demand signal because they strip out new-store contribution. Total revenue growth driven entirely by new stores is the textbook example of growth that does not deleverage.'],
      ['Negative comps always mean the company is in distress', 'A single quarter of negative comps is noise; multiple quarters or a deteriorating trend is the signal. The direction and persistence matter, not the snapshot.'],
      ['Comp sales matter only to equity research, not credit', 'Comps directly affect EBITDA on the existing store base. For a credit, declining comps mean weakening cash generation from the assets already funded — that is the binding constraint on deleveraging.'],
    ],
    'Comp store sales isolate the demand trend on the existing footprint from the contribution of newly opened stores. For multi-unit retailers, the comp number is the cleanest read on whether the business model is healthy.'),

  q(4410129, 'Career Skills', CHAPTER, 'Telco subscriber economics',
    'A telco reports rising revenue but ARPU (average revenue per user) is flat, churn is rising from 1.5% to 2.0% monthly, and subscriber acquisition cost (SAC) is climbing. What is the credit concern?',
    'Subscriber lifetime value is deteriorating from both ends — shorter lives and higher acquisition cost — even while reported revenue grows, foreshadowing margin compression as growth slows',
    [
      ['No concern — revenue is growing, which is what credit cares about', 'Revenue growth funded by rising SAC and offset by rising churn often masks deteriorating unit economics. Credit looks past the headline to the underlying customer math.'],
      ['Higher churn is good because it signals customers can afford to leave, suggesting a healthy economy', 'Higher churn signals that the product is not retaining customers — it is a negative unit economic signal regardless of macro context.'],
      ['ARPU is the only metric that matters and the rest are noise', 'ARPU * (1/churn) - SAC is the lifetime value identity. Looking at any one of the three in isolation misses two-thirds of the picture.'],
    ],
    'Telco credit work centers on subscriber LTV. The trio of ARPU, churn, and SAC tells the cash flow story before it shows up in the income statement — and watching all three is how lenders see margin pressure early.'),

  q(4410130, 'Career Skills', CHAPTER, 'Commodity producer cost-curve position',
    'A copper producer\'s C1 cash cost is $2.50/lb at a time when copper trades at $4.00/lb. The producer ranks in the second quartile of the global cost curve. Why does cost-curve position matter for credit?',
    'A second-quartile producer continues to generate positive cash even after deep commodity-price declines that drive the highest-cost quartile out — making cost-curve position the structural predictor of through-cycle credit quality',
    [
      ['Cost-curve position is interesting for equity analysts but does not affect credit', 'For commodity producers, cost-curve position is the single most predictive credit metric. It determines who survives a price collapse and who does not.'],
      ['First-quartile is too low — the producer should aim for fourth-quartile to capture margin', 'Fourth-quartile is the *highest* cost producer, not the most profitable. The cost curve runs from lowest cost (first quartile, best) to highest cost (fourth quartile, marginal).'],
      ['Cost-curve position only matters when commodity prices are below the median', 'It matters most when prices are low, but the structural advantage is always present. Even at high prices, a first-quartile producer earns more margin per pound than a fourth-quartile producer.'],
    ],
    'For commodity producers, cost-curve position is the deepest credit signal because it predicts who survives the trough. Investment-grade commodity credits almost always sit in the first or second quartile of their cost curve.'),

  q(4410131, 'Career Skills', CHAPTER, 'Bank Tier 1 capital',
    'A bank reports a Common Equity Tier 1 (CET1) ratio of 12%. What does this measure and why is it central to bank credit?',
    'CET1 measures the bank\'s highest-quality loss-absorbing capital (common equity, retained earnings) divided by risk-weighted assets — it is the buffer that absorbs losses before any other claimant takes a hit',
    [
      ['CET1 is the bank\'s leverage ratio under US-GAAP', 'Leverage ratio is a separate Basel metric (Tier 1 over total assets, unweighted). CET1 is the risk-weighted version focusing on common equity quality.'],
      ['CET1 is the dividend payout ratio for the bank', 'CET1 is a capital adequacy ratio, not a payout metric. Higher CET1 may *allow* higher payouts, but the two are not the same measure.'],
      ['CET1 is the percentage of deposits backed by reserves', 'Reserve requirements are a separate liquidity construct. CET1 is about loss-absorbing capital relative to risk-weighted exposure.'],
    ],
    'For bank credit, capital adequacy ratios — especially CET1 — are the equivalent of corporate leverage. They measure the size of the equity buffer that protects subordinated and senior creditors from loss.'),

  q(4410132, 'Career Skills', CHAPTER, 'Bank NPL ratio and coverage',
    'A bank reports a 4% non-performing loan (NPL) ratio with 80% loan-loss reserve coverage. Peers run NPLs at 2% with 100% coverage. What is the credit concern?',
    'The bank has both more bad loans and weaker reserves against them — implying either future provisioning expense (hitting earnings and capital) or eventual realized losses that capital must absorb',
    [
      ['No concern — 80% coverage is high in absolute terms', 'Absolute coverage matters less than coverage *versus the loss content of the book*. A bank with twice the peer NPLs and lower coverage is doubly exposed.'],
      ['NPLs do not affect credit quality because the bank already wrote them off', 'NPLs are loans where the borrower has stopped paying — they are not write-offs. Reserves anticipate the loss, but the loss has not yet been crystallized.'],
      ['Reserve coverage is an accounting artifact and not relevant to credit', 'Reserves are the bank\'s estimate of expected loss on the book. Insufficient reserves mean future P&L hits — which is exactly what credit cares about.'],
    ],
    'For bank credit, NPL trends and reserve coverage are the asset-quality view. Capital ratios tell you the cushion; NPLs and reserves tell you how fast that cushion is being consumed.'),

  // -------------------------------------------------------------------------
  // CASH FLOW WALKS (4410133–4410137)
  // -------------------------------------------------------------------------
  q(4410133, 'Career Skills', CHAPTER, 'EBITDA -> FCF bridge structure',
    'Which sequence correctly walks from EBITDA to levered FCF under US-GAAP?',
    'EBITDA - Cash Taxes - Cash Interest - Capex - Change in Working Capital = Levered FCF',
    [
      ['EBITDA - D&A - Taxes - Capex = Levered FCF', 'D&A should not be subtracted — it was already excluded by starting at EBITDA (the "DA" is added back). Subtracting it produces neither levered nor unlevered FCF.'],
      ['EBITDA + Working Capital - Capex - Interest = Levered FCF', 'Working capital should be subtracted when it is *absorbed* (current assets up, current liabilities down). Adding it flips the sign on the most error-prone line in the walk.'],
      ['EBITDA - Capex = Levered FCF', 'EBITDA - Capex is a useful shorthand but ignores cash taxes, cash interest, and working capital changes. It is closer to unlevered than levered and is imprecise either way.'],
    ],
    'The standard EBITDA-to-FCF bridge subtracts cash taxes, cash interest, capex, and change in working capital. Each line has its own error mode, but the structure is canonical.'),

  q(4410134, 'Career Skills', CHAPTER, 'Working capital absorption',
    'A growing borrower has EBITDA of $200M but reports only $130M of cash from operations. Inventory rose $50M and receivables rose $20M. How should the credit memo frame the gap?',
    'Working capital absorbed $70M of cash to fund growth — this is a normal pattern in growth phases but means EBITDA overstates current debt service capacity, and persistent absorption is a flag if growth slows',
    [
      ['EBITDA is overstated and should be reduced by $70M', 'EBITDA is what EBITDA is. The working capital absorption is a separate cash item that affects FCF, not a reason to restate EBITDA itself.'],
      ['Receivables growth is good and inventory growth is bad — split the analysis', 'Both consume cash equally. Receivables growth means goods sold but not collected; inventory growth means goods bought but not sold. Both absorb the same dollar of working capital.'],
      ['The gap is an accounting timing artifact that reverses next quarter', 'Working capital absorption tied to revenue growth does not "reverse" — it grows further as the business grows. The cash is structurally tied up in the operating cycle.'],
    ],
    'Working capital absorption is one of the most consistent reasons EBITDA overstates cash generation in growing companies. The credit committee should explicitly size the gap and decide whether it is structural or transitory.'),

  q(4410135, 'Career Skills', CHAPTER, 'Cash taxes vs book tax in the walk',
    'A borrower\'s income statement shows a tax provision of $40M, but cash taxes paid are $25M. Which should appear in the FCF walk under US-GAAP and why?',
    'Cash taxes of $25M — FCF measures actual cash, and the gap to the book provision reflects deferred taxes, NOL utilization, or timing differences that are not current cash',
    [
      ['Book tax of $40M because it is the GAAP measure', 'Book tax is correct for the income statement and EPS. FCF is a cash measure, and cash taxes paid is the right line — same way cash interest replaces book interest in a cash-focused walk.'],
      ['Average the two to balance accounting and cash views', 'Averaging is arbitrary and produces a number that means neither one thing nor the other. The walk should pick a basis and use it consistently.'],
      ['Whichever is higher to be conservative', 'Picking the higher of two numbers is reverse-engineering, not analysis. Use the cash figure because the walk is a cash walk.'],
    ],
    'FCF walks should use cash items throughout: cash interest, cash taxes, cash capex. Deferred items belong in the leverage and earnings views, not the cash generation view.'),

  q(4410136, 'Career Skills', CHAPTER, 'FCF to debt paydown after distributions',
    'A borrower generates $180M of levered FCF. It pays $40M in common dividends, completes a $60M bolt-on acquisition, and a $25M term loan amortization is due. The CFO says deleveraging will be "the full $180M." What is the right pushback?',
    'Only $55M of the $180M is actually available to pay down debt after the announced uses — and even that assumes no working capital surprise, no buyback, and no other discretionary use absorbing the residual',
    [
      ['The CFO is right — FCF by definition deleverages the balance sheet', 'Only the FCF that is not consumed by other cash uses deleverages. Dividends, M&A, and mandatory amortization all compete with debt paydown for the same dollar.'],
      ['Push back to $140M (FCF less dividends only)', 'That ignores the $60M M&A spend and the $25M mandatory amortization. Both are claims on the same FCF.'],
      ['The deleveraging amount is unknowable without more disclosure, so the memo should defer', 'The memo should not defer when the math is in hand. Show the bridge from $180M to $55M and let the committee see each subtraction.'],
    ],
    'Modeling deleveraging requires explicit subtraction of every committed cash use before claiming residual FCF goes to debt. Anything short of that overstates how fast the borrower can delever.'),

  q(4410137, 'Career Skills', CHAPTER, 'Reconciling FCF to change in net debt',
    'A borrower reports $200M of levered FCF for the year. Net debt rose by $80M over the same period. What should the credit analyst investigate?',
    'The $280M gap between expected paydown and observed debt increase — likely candidates are M&A, dividends, buybacks, FX on foreign-denominated debt, or pension contributions not visible in the FCF line',
    [
      ['The FCF figure must be wrong because debt only goes down when FCF is positive', 'Debt can rise even when FCF is positive if the company is using cash for M&A, buybacks, dividends, or other below-the-line items. FCF measures generation, not what was done with it.'],
      ['The change in net debt is the only metric that matters; FCF is a side computation', 'FCF tells you the generation; the change in net debt tells you the deployment. Both are needed, and the reconciliation between them is where the credit story lives.'],
      ['The two numbers should always tie exactly and any gap is a presentation error', 'They rarely tie exactly — and the gap is informative. Reconciling it is part of every credit memo on a multi-year holder.'],
    ],
    'The reconciliation between levered FCF and the change in net debt is one of the highest-signal exercises in credit analysis. It forces explicit accounting of every cash use and surfaces patterns (chronic M&A, persistent buybacks) the headline FCF figure hides.'),

  // -------------------------------------------------------------------------
  // EBITDA QUALITY FLAGS (4410138–4410141)
  // -------------------------------------------------------------------------
  q(4410138, 'Career Skills', CHAPTER, 'Recurring "one-time" addbacks',
    'A borrower has reported "one-time restructuring charges" of $15–25M every year for the past four years and adds them back to compute "Adjusted EBITDA." How should the credit committee treat these addbacks?',
    'Treat them as recurring operating costs and reduce Adjusted EBITDA accordingly — anything that happens every year is part of the cost base, regardless of how the company labels it',
    [
      ['Accept the addbacks because the company calls them non-recurring and has audited them', 'The audit does not test whether the charges are truly non-recurring — it tests whether they exist. Four consecutive years of "one-time" is a pattern the credit analyst can read directly.'],
      ['Accept the addbacks but discount them by 50% to be conservative', 'A 50% haircut is arbitrary. The discipline is to ask whether the cost recurs, and if it does, all of it belongs in the cost base.'],
      ['Reject only the most recent year\'s addback', 'Singling out one year is inconsistent. If the pattern recurs annually, every year\'s addback should be challenged, not just the most recent.'],
    ],
    'Recurring "one-time" charges are one of the most common EBITDA quality flags. The test is empirical: does the charge appear year after year? If yes, it is part of the run-rate cost base no matter what management labels it.'),

  q(4410139, 'Career Skills', CHAPTER, 'Pro forma cost saves in Quality of Earnings',
    'A sponsor presents Adjusted EBITDA of $200M, including $35M of "Day 1 cost saves" that have not yet been realized. The Quality of Earnings (QoE) report supports the addback because management has identified specific line items. How should the credit committee size this?',
    'Phase the cost saves into projected EBITDA over a realistic 18–24 month period with a haircut for execution risk — and underwrite at "as-is" leverage even if marketing leverage uses fully-loaded synergies',
    [
      ['Accept the $35M because the QoE report supported it', 'A QoE report tests whether the savings are identifiable and reasonable; it does not eliminate execution risk. The committee owes its own judgment on phasing and haircut.'],
      ['Reject the $35M entirely because no synergy has actually been realized yet', 'Wholesale rejection ignores synergies with a credible operational basis. The discipline is to phase and haircut, not refuse the conversation.'],
      ['Accept half ($17.5M) as a generic compromise', 'Halving without analysis is a substitute for thinking. Specific synergies deserve specific phasing assumptions tied to the operational steps required.'],
    ],
    'Pro forma cost saves are one of the most heavily-debated EBITDA adjustments at deal signing. The right discipline is to phase realistically, haircut for execution risk, and ensure as-is leverage stands on its own as a backup view.'),

  q(4410140, 'Career Skills', CHAPTER, 'Stock-based compensation as a real cost',
    'A software borrower adds back $40M of stock-based compensation (SBC) to compute "Adjusted EBITDA." How should a credit analyst treat this addback?',
    'Treat SBC as a real cost — it is compensation paid in equity and produces dilution that has the same economic substance as cash compensation; serious credit work does not add it back',
    [
      ['Accept the addback because SBC is non-cash under US-GAAP', 'It is non-cash on the income statement, but it is real economic compensation that dilutes existing holders. The cash equivalent shows up later in buybacks to offset dilution, or in lower per-share metrics.'],
      ['Treat SBC as half a cost — accept 50% addback', 'Halving is arbitrary. The economic logic either says SBC is compensation (don\'t add back) or it does not (add back fully). Credit work has settled on the former.'],
      ['SBC matters only at IPO and can be ignored for private borrowers', 'SBC is a real compensation cost regardless of company status. Private companies\' equity is harder to value but no less real as compensation.'],
    ],
    'Stock-based compensation is real compensation paid in equity. The "non-cash" classification is an artifact of US-GAAP — the economic effect is dilution today and cash later (via buybacks). Best-practice credit memos do not add back SBC.'),

  q(4410141, 'Career Skills', CHAPTER, 'Restructuring addbacks',
    'A borrower has reported restructuring charges in each of the last five years totaling $90M, with management saying each year that the program is now "complete." The current year shows $20M of restructuring. How should the credit memo handle it?',
    'Treat at least the run-rate portion (e.g., $15–18M reflecting the five-year average) as recurring and challenge the addback — repeated "completion" claims with continuing charges is a textbook quality-of-earnings flag',
    [
      ['Accept the $20M addback because each year\'s program was discrete and is now complete', 'Five consecutive "complete" restructurings is a pattern, not a series of unrelated events. The credit committee can read the recurrence directly.'],
      ['Disregard the issue because restructuring charges are GAAP-prescribed and outside management judgment', 'The classification as restructuring involves significant management judgment, and the addback decision is entirely the analyst\'s. GAAP does not require the addback — the company does.'],
      ['Apply a small 10% haircut to the addback and move on', 'A token haircut understates the pattern. With five years of evidence, the run-rate component is most of the charge — not 10%.'],
    ],
    'Persistent restructuring charges that are repeatedly "one final program" are one of the clearest EBITDA quality flags. Sizing the recurring component using the historical average is more honest than a token haircut or wholesale acceptance.'),
]

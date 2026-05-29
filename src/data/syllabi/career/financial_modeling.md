# Financial Modeling
**ID**: `financialModeling` · **Discipline**: Finance · **Level**: Career

## Course Aim
A financial model is an argument made in numbers. Its job is to turn messy reality into a transparent chain of assumptions, calculations, and outputs that lets someone make a decision and defend it. This course teaches learners to build models that are useful, readable, auditable, and decision-ready: driver-based forecasts that respect operating reality, three statements that link and balance, a discounted-cash-flow valuation that survives sensitivity, and an output page a busy executive can act on.

The emphasis is on judgment, not button-pushing. Anyone can multiply units by price; the skill is knowing which driver matters, where a one-cell sign error reverses a recommendation, why the balance sheet must never be forced with a plug, and how terminal value can quietly become eighty percent of an enterprise value while nobody is looking. Learners practice the mechanics (depreciation waterfalls, debt schedules with cash sweeps and circularity, the enterprise-to-equity bridge, working-capital days) alongside the discipline (consistent inputs, visible checks, honest caveats).

By the end, a learner should be able to spread historicals, build a forecast that someone could disagree with on its merits, integrate three statements that tie out, value a business two ways, stress it under coherent scenarios, audit it as a skeptic would, and write the one page that says what the model concludes and what it cannot prove. The goal is not Excel wizardry but trusted, decision-grade analysis.

## Course Design Notes
The course follows the natural build order of a real model: standards first, then historicals, forecast, integration, valuation, comparison, review, and communication. Each chapter is self-contained but assumes the prior ones, mirroring how an analyst actually assembles a workbook. Numerical questions use round figures so learners reason about mechanics rather than arithmetic. Conceptual questions favor the failure modes that cost real money: plugged balance sheets, mismatched sign conventions, terminal-value dominance, equity-vs-enterprise confusion, and single-point forecasts presented as certainty. Common traps are called out explicitly in every chapter because in modeling, knowing the wrong answer is half the skill.

## Chapter 1: Modeling Standards and Architecture
**Key concepts**: model purpose, input/processing/output separation, color and formatting conventions (blue inputs, black formulas), one-formula-per-row consistency, no hardcodes inside formulas, sign conventions, check rows, scenario toggles, version control.

**Core questions**
- What decision will this model support, and who reads the output?
- Can another analyst follow the logic without a flashlight?
- Where could a small formula error change the recommendation?

**Applied skills**
- Build a clean model shell with separated assumptions, historicals, forecast schedules, outputs, and a checks row.
- Apply a consistent input-vs-formula color scheme and a single sign convention for outflows.

**Common traps**
- Hardcoding a number inside a formula so no reviewer can find or flex the assumption.
- Mixing formulas across a single row, which hides errors and breaks totals.
- Treating formatting (bold, color) as if it changed model logic.

## Chapter 2: Historical Financials and Operating Drivers
**Key concepts**: income statement, balance sheet, cash flow statement, revenue and cost drivers, gross and operating margins, growth rates, common-size analysis, KPIs, seasonality, normalization of nonrecurring items.

**Core questions**
- What actually drives revenue and margins, versus what merely correlates?
- Which historical items should be normalized before they anchor a forecast?
- Which ratios explain performance rather than decorate the page?

**Applied skills**
- Spread three years of financials and compute margins, growth, and common-size percentages.
- Normalize a one-time gain or litigation charge so the run-rate is forecastable.

**Common traps**
- Forecasting off a year distorted by a nonrecurring item without normalizing it.
- Confusing a margin (a ratio) with a dollar amount.
- Anchoring on a vanity KPI that does not connect to cash.

## Chapter 3: Revenue, Expense, and Working Capital Forecasts
**Key concepts**: volume-times-price builds, bookings, churn and retention, utilization, headcount-driven cost, COGS and gross margin, opex, DSO/DIO/DPO, the cash conversion cycle, deferred revenue, working-capital turns.

**Core questions**
- Is the forecast driver-based, or a single growth rate painted over everything?
- Which assumptions are controllable, market-driven, or structurally constrained?
- Does the working-capital schedule support the revenue story, or contradict it?

**Applied skills**
- Build a revenue and cost forecast with at least two driver cases.
- Convert DSO/DIO/DPO assumptions into receivable, inventory, and payable balances.

**Common traps**
- A revenue line that ignores a real capacity ceiling (fulfillment, headcount, plant).
- Forgetting that rising inventory or receivables consumes cash even when profit looks fine.
- Treating deferred revenue as if it were earned revenue.

## Chapter 4: Three-Statement Integration
**Key concepts**: depreciation and amortization, capex, the debt schedule, interest on average balances, taxes and NOLs, retained earnings rollforward, revolver and cash sweep, circularity and the iterative-calculation switch, balance-sheet balancing, cash linkage.

**Core questions**
- How does one assumption travel through all three statements?
- Why does the balance sheet not balance, and what flow is missing?
- Which line is legitimately a plug, and which must never be?

**Applied skills**
- Link net income to retained earnings and to the cash flow statement.
- Build a debt schedule with beginning/borrow/repay/ending and interest on the average balance.

**Common traps**
- Forcing the balance sheet to tie with a plug instead of finding the missing flow.
- Treating depreciation as a cash outflow rather than a non-cash add-back.
- Letting a circular reference (interest on debt that depends on cash after interest) silently break or iterate to garbage.

## Chapter 5: Free Cash Flow and DCF Valuation
**Key concepts**: unlevered free cash flow (EBIT(1-t) + D&A - capex - change in NWC), WACC, cost of equity via CAPM, after-tax cost of debt, discount factors, terminal value via perpetuity growth (Gordon) and exit multiple, mid-year convention, present value, enterprise value.

**Core questions**
- What cash flow is available to all capital providers, before financing?
- Which terminal-value method fits the business and the confidence in assumptions?
- What share of enterprise value is terminal value, and is that comfortable?

**Applied skills**
- Compute WACC from capital weights, CAPM cost of equity, and after-tax cost of debt.
- Build a DCF with discounted explicit cash flows plus a discounted terminal value.

**Common traps**
- Discounting unlevered FCF at the cost of equity instead of WACC (mixing perspectives).
- A perpetuity growth rate near or above WACC, exploding the (WACC - g) denominator.
- Ignoring that terminal value is often 60-80% of total value, so it deserves the most scrutiny.

## Chapter 6: Comparables, Scenarios, and Sensitivities
**Key concepts**: trading comps, precedent transactions, EV/EBITDA and EV/Sales (enterprise multiples) versus P/E (equity multiple), capital-structure neutrality, the enterprise-to-equity bridge (less net debt, preferred, minority interest), football field, scenario cases, data tables, tornado charts, breakeven.

**Core questions**
- Which peers are genuinely comparable in growth, margin, and risk?
- Should this metric be paired with enterprise value or equity value?
- Which assumptions move the valuation most, and where is the downside?

**Applied skills**
- Bridge enterprise value to equity value and to per-share price.
- Build a two-variable sensitivity (data) table on WACC and terminal growth.

**Common traps**
- Pairing EV with a post-interest, post-tax metric like net income (mismatched numerator/denominator).
- Comparing P/E across firms with very different leverage and calling them cheap or rich.
- Presenting one heroic case instead of base, upside, and downside.

## Chapter 7: Model Review, Error Detection, and Stress Testing
**Key concepts**: formula audit, circular-reference detection, hardcode scan, balance check, cash-tie check, sign check, reasonableness check, sensitivity check, peer review, severity logging.

**Core questions**
- What would a skeptical reviewer test first?
- Which numbers look precise but rest entirely on one assumption?
- Can the model fail gracefully when inputs move?

**Applied skills**
- Run a checks row (balance check, cash check, sum-of-shares check) that flags TRUE/FALSE.
- Produce a review log with location, issue, severity, fix, and owner.

**Common traps**
- Hiding a broken statement or scary tab instead of fixing the underlying error.
- Trusting a model whose balance check is off by a small, friendly-looking amount.
- A sign error that flips a financing outflow into a phantom inflow.

## Chapter 8: Communicating the Model
**Key concepts**: executive summary, assumption bridge, output page, recommendation, output range, limitations and caveats, source notes, chart design, the one-page decision memo.

**Core questions**
- What should a decision-maker remember after closing the workbook?
- Which caveats are honest disclosure, and which are hedging?
- How do we convey uncertainty without sounding useless?

**Applied skills**
- Write a one-page memo: recommendation, key assumptions, output range, and risks.
- Design an output page a non-modeler can read in two minutes.

**Common traps**
- Sending a fifteen-tab workbook with no summary to someone who must decide by noon.
- Presenting only the optimistic point estimate and burying the range.
- Treating the spreadsheet as an oracle that ends discussion rather than informs it.

## Capstone: Three-Statement + DCF Case
Learners build and present a complete model for one company or case:
- historical financial spread with normalization,
- a driver-based forecast with at least two cases,
- three-statement integration with working checks,
- debt, capex, and working-capital schedules,
- a DCF with WACC, terminal value, and an enterprise-to-equity bridge,
- a comparable-multiples cross-check,
- scenario and sensitivity analysis,
- a model-checks row,
- a one-page recommendation memo,
- a model-review log.

## Assessment Ideas
- Model-shell standards check
- Historical spread and ratio/common-size analysis
- Revenue and working-capital build lab
- Three-statement integration test (does it balance and tie?)
- DCF valuation review (WACC, terminal value, bridge)
- Comps and sensitivity output page
- Model audit with severity-tagged review log
- Capstone model and decision memo

## Research Notes
- WACC, CAPM cost of equity, after-tax cost of debt, and unlevered-FCF discounting confirmed via Corporate Finance Institute and Wall Street Prep WACC references.
- Terminal value (Gordon growth vs exit multiple), the (WACC - g) sensitivity, and the 60-80% terminal-value share confirmed via Wall Street Prep and valuation-masterclass terminal-value references.
- Enterprise-to-equity bridge (less net debt, preferred, minority interest) and EV/EBITDA capital-structure neutrality versus P/E leverage sensitivity confirmed via Wall Street Prep and Macabacus multiples references.
- DSO/DIO/DPO and cash-conversion-cycle mechanics confirmed via Wall Street Prep and Corporate Finance Institute working-capital references.
- Curriculum sequencing informed by Institute for Finance, Grant Thornton / NSE Academy, Scenario Academy, and GFMI financial modeling syllabi.

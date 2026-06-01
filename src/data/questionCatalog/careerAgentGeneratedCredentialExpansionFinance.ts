import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

const SOURCE = 'Floe career agent-generated credential expansion 2026-05-20'

type WrongTuple = [string, string]
type QuestionFactory = (id: number, cycle: number) => Question

function mentorHintForFinance(topic: Topic, chapter: string): string | undefined {
  if (topic === 'Series 86') {
    switch (chapter) {
      case 'Forecasting and Earnings Drivers':
        return 'Start with the operating driver the analyst can actually model: units, price, mix, margin, or utilization. Series 86 forecasting questions usually reward a clean driver bridge before any valuation conclusion.'
      case 'Ratios, Margins, and Quality of Earnings':
        return 'Name the numerator and denominator of the ratio before calculating. Then ask whether the number reflects durable economics or a quality-of-earnings warning such as working capital, one-time items, or cost pressure.'
      case 'Valuation Multiples and Enterprise Value':
        return 'Match the multiple to the claim being tested: equity value pairs with equity metrics, enterprise value pairs with operating metrics. Check whether the question wants a current value, a forward estimate, or an implied range.'
      case 'Accounting, Cash Flow, and Balance Sheet Signals':
        return 'Separate accounting earnings from cash conversion. Balance-sheet changes such as receivables, payables, debt, goodwill, and capex often explain why reported profit and economic value diverge.'
      default:
        return 'Think like an equity research analyst: identify the operating driver, accounting signal, or valuation input before touching the choices. The strongest answer should connect the metric to a forecast or investment conclusion.'
    }
  }

  if (topic === 'Career Skills') {
    switch (chapter) {
      case 'Analyst Ethics, Conflicts, and Disclosures':
        return 'Ask what conflict, compensation link, trading interest, or MNPI issue a reasonable reader would need to know before relying on the research. Series 87 usually rewards independence, disclosure, and escalation over quiet accommodation.'
      case 'Research Report Discipline':
        return 'Separate the research opinion from the support behind it. A defensible report ties rating, price target, assumptions, risks, and evidence together clearly enough for a reader to test the conclusion.'
      case 'Supervision, Communications, and Exam Execution':
        return 'Treat research as a controlled communication: timing, audience, review, dissemination, and correction process matter as much as the words themselves. The safest answer preserves fair access and supervisory evidence.'
      case 'Ethical and Professional Standards':
        return 'For CFA ethics, identify the duty first: loyalty, independence, fair dealing, diligence, confidentiality, or disclosure. The right answer usually protects clients and market integrity through a documented, standard-compliant process.'
      case 'Quantitative Methods and Economics':
        return 'Translate the prompt into the statistic, rate, or economic relationship being tested before calculating. Keep units, time periods, and base rates aligned so a plausible shortcut does not distort the result.'
      case 'Financial Reporting and Analysis':
        return 'Follow the accounting flow from recognition to ratios to interpretation. CFA reporting questions often turn on whether an item affects income, cash flow, equity, or only a disclosure.'
      case 'Corporate Issuers and Equity Valuation':
        return 'Link the finance tool to the business decision: capital budgeting, cost of capital, governance, dividends, or valuation. Check whether the answer changes cash flows, risk, growth, or required return.'
      case 'Fixed Income and Derivatives':
        return 'For fixed income and derivatives, identify the payoff or cash-flow pattern before using formulas. Duration, convexity, option moneyness, and hedge direction all come from how value changes when the underlying input moves.'
      case 'Portfolio Management and Risk':
        return 'Separate objectives from constraints, then match the risk measure to the decision. Portfolio questions reward disciplined framing: return target, risk tolerance, liquidity, horizon, taxes, legal limits, and unique circumstances.'
      case 'Integrated Practice and Exam Strategy':
        return 'Read the qualifier first: most likely, least appropriate, best, or except. Many exam traps are not concept gaps; they are task-direction errors.'
      default:
        return undefined
    }
  }

  return undefined
}

function q(
  id: number,
  topic: Topic,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: WrongTuple[],
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
    undefined,
    mentorHintForFinance(topic, chapter),
  )
}

function buildQuestions(startId: number, count: number, factories: QuestionFactory[]): Question[] {
  return Array.from({ length: count }, (_, index) => {
    const factory = factories[index % factories.length]
    const cycle = Math.floor(index / factories.length)
    return factory(startId + index, cycle)
  })
}

function pct(value: number, digits = 1): string {
  return `${value.toFixed(digits)}%`
}

function x(value: number, digits = 1): string {
  return `${value.toFixed(digits)}x`
}

function dollars(value: number): string {
  return `$${value.toFixed(value % 1 === 0 ? 0 : 1)} million`
}

function usd(value: number): string {
  return `$${value.toFixed(2)}`
}

const s86Cases = [
  ['Aster Robotics', 'warehouse automation', 'robot shipments'],
  ['Beacon Foods', 'branded snacks', 'case volume'],
  ['Cobalt Clinics', 'urgent care', 'patient visits'],
  ['Delta Pumps', 'industrial equipment', 'units shipped'],
  ['Eon Software', 'vertical SaaS', 'paid seats'],
  ['Fjord Apparel', 'specialty retail', 'same-store transactions'],
  ['Granite Power', 'regulated utility', 'megawatt hours'],
  ['Harbor Chips', 'semiconductors', 'wafer starts'],
  ['Ion Mobility', 'auto suppliers', 'platform units'],
  ['Juniper Hotels', 'lodging', 'room nights'],
] as const

const series86Factories: QuestionFactory[] = [
  (id, cycle) => {
    const [company, sector, driver] = s86Cases[cycle % s86Cases.length]
    const volume = 2 + (cycle % 4)
    const price = 3 + (cycle % 5)
    const growth = ((1 + volume / 100) * (1 + price / 100) - 1) * 100
    return q(id, 'Series 86', 'Forecasting and Earnings Drivers', `${company} revenue bridge`,
      `${company} covers the ${sector} market. The analyst models ${driver} up ${volume}% and average selling price up ${price}% with no mix change. Which revenue growth estimate is most consistent with that driver build?`,
      pct(growth),
      [
        [pct(volume), `That uses only the ${driver} change and ignores price.`],
        [pct(price), 'That uses only the pricing assumption and drops volume.'],
        [pct(volume + price + 5), 'That adds an unsupported extra growth layer that is not in the driver build.'],
      ],
      'A bottom-up revenue forecast should compound volume and price assumptions when both move. The clean bridge is (1 + volume growth) x (1 + price growth) - 1.')
  },
  (id, cycle) => {
    const [company] = s86Cases[cycle % s86Cases.length]
    const revenue = 420 + cycle * 35
    const oldMargin = 38 - (cycle % 5)
    const costPressure = 18 + cycle * 3
    const grossProfit = revenue * oldMargin / 100 - costPressure
    const newMargin = grossProfit / revenue * 100
    return q(id, 'Series 86', 'Ratios, Margins, and Quality of Earnings', `${company} gross margin squeeze`,
      `${company} reports ${dollars(revenue)} of revenue at a ${oldMargin}% gross margin. Input costs rise by ${dollars(costPressure)} with no price increase. What gross margin should the analyst use before any offsetting action?`,
      pct(newMargin),
      [
        [`${oldMargin}%`, 'That keeps the old margin and ignores the stated cost pressure.'],
        [pct(100 - oldMargin), 'That is the old COGS ratio, not the revised gross margin.'],
        [pct(newMargin + 3), 'That assumes partial price recovery even though the prompt says no price increase.'],
      ],
      'Gross margin is gross profit divided by revenue. Cost pressure lowers gross profit unless the company offsets it through price, mix, productivity, or lower other costs.')
  },
  (id, cycle) => {
    const [company] = s86Cases[cycle % s86Cases.length]
    const ni = 75 + cycle * 8
    const dep = 18 + cycle * 2
    const ar = 12 + cycle
    const inv = 9 + cycle
    const ap = 7 + cycle
    const cfo = ni + dep - ar - inv + ap
    return q(id, 'Series 86', 'Financial Statements and Accounting Linkages', `${company} operating cash flow`,
      `${company} has net income of ${dollars(ni)}, depreciation of ${dollars(dep)}, accounts receivable up ${dollars(ar)}, inventory up ${dollars(inv)}, and accounts payable up ${dollars(ap)}. Using a simple indirect-method bridge, what is operating cash flow?`,
      dollars(cfo),
      [
        [dollars(ni + dep), 'That adds back depreciation but ignores the working-capital build.'],
        [dollars(ni + dep - ar - inv - ap), 'That treats higher payables as a use of cash instead of a source.'],
        [dollars(ni - dep - ar - inv + ap), 'That subtracts depreciation even though it is a noncash expense.'],
      ],
      'In an indirect cash-flow bridge, add back noncash depreciation, subtract increases in operating assets, and add increases in operating liabilities.')
  },
  (id, cycle) => {
    const [company] = s86Cases[cycle % s86Cases.length]
    const revenue = 900 + cycle * 60
    const ar = 120 + cycle * 8
    const dso = ar / revenue * 365
    return q(id, 'Series 86', 'Ratios, Margins, and Quality of Earnings', `${company} DSO check`,
      `${company} reports revenue of ${dollars(revenue)} and average accounts receivable of ${dollars(ar)}. Which days sales outstanding estimate best fits the data?`,
      `${dso.toFixed(0)} days`,
      [
        [`${(revenue / ar).toFixed(1)} days`, 'That is receivables turnover, not days sales outstanding.'],
        [`${(ar / revenue * 100).toFixed(1)} days`, 'That turns the receivables ratio into a percent but never multiplies by 365 days.'],
        [`${(365 - dso).toFixed(0)} days`, 'That subtracts the answer from the year and has no DSO interpretation.'],
      ],
      'DSO equals average accounts receivable divided by revenue, multiplied by 365. It is a collection-speed metric and a revenue-quality warning signal when it jumps.')
  },
  (id, cycle) => {
    const [company] = s86Cases[cycle % s86Cases.length]
    const nopat = 92 + cycle * 7
    const capital = 620 + cycle * 35
    const wacc = 8 + (cycle % 3)
    const roic = nopat / capital * 100
    const eva = (roic / 100 - wacc / 100) * capital
    return q(id, 'Series 86', 'Valuation Methods', `${company} ROIC spread`,
      `${company} generates NOPAT of ${dollars(nopat)} on invested capital of ${dollars(capital)}. If WACC is ${wacc}%, what is the best EVA-style interpretation?`,
      `${company} earns a ${pct(roic - wacc)} ROIC-WACC spread, or about ${dollars(eva)} of economic value added`,
      [
        [`The spread is ${pct(roic)} because WACC is not part of value creation`, 'ROIC alone is not a spread; value creation is measured relative to the cost of capital.'],
        [`The EVA is ${dollars(nopat + capital)}`, 'Adding NOPAT and invested capital mixes an income measure with a balance-sheet base.'],
        [`The company destroys value because NOPAT is below invested capital`, 'NOPAT is expected to be below capital; the relevant comparison is ROIC versus WACC.'],
      ],
      'EVA can be approximated as (ROIC - WACC) x invested capital. Series 86 questions often test whether returns exceed the capital charge.')
  },
  (id, cycle) => {
    const [company] = s86Cases[cycle % s86Cases.length]
    const equity = 1450 + cycle * 90
    const debt = 360 + cycle * 25
    const minority = 40 + cycle * 5
    const cash = 180 + cycle * 12
    const ev = equity + debt + minority - cash
    return q(id, 'Series 86', 'Valuation Methods', `${company} enterprise value bridge`,
      `${company} has equity value of ${dollars(equity)}, debt of ${dollars(debt)}, minority interest of ${dollars(minority)}, and cash of ${dollars(cash)}. What enterprise value should the analyst use?`,
      dollars(ev),
      [
        [dollars(equity - debt + cash), 'That subtracts debt and adds cash, reversing the EV bridge.'],
        [dollars(equity + debt + minority + cash), 'That adds cash even though excess cash reduces enterprise value.'],
        [dollars(equity), 'That stops at equity value and ignores claims and cash outside common equity.'],
      ],
      'Enterprise value is equity value plus debt plus debt-like claims such as minority interest, minus cash. Match EV to enterprise-level metrics such as EBITDA.')
  },
  (id, cycle) => {
    const [company] = s86Cases[cycle % s86Cases.length]
    const ebitda = 210 + cycle * 18
    const multiple = 9 + (cycle % 4)
    const debt = 520 + cycle * 30
    const cash = 140 + cycle * 10
    const equity = ebitda * multiple - debt + cash
    return q(id, 'Series 86', 'Valuation Methods', `${company} multiple to equity`,
      `A peer-based valuation gives ${company} a target EV/EBITDA multiple of ${x(multiple, 0)} on EBITDA of ${dollars(ebitda)}. With debt of ${dollars(debt)} and cash of ${dollars(cash)}, what equity value follows?`,
      dollars(equity),
      [
        [dollars(ebitda * multiple), 'That is enterprise value before the debt and cash bridge.'],
        [dollars(ebitda * multiple + debt - cash), 'That moves from EV to equity in the wrong direction.'],
        [dollars(ebitda + multiple - debt + cash), 'That adds the multiple as if it were dollars instead of multiplying EBITDA.'],
      ],
      'To move from an enterprise multiple to equity value, first calculate EV, then subtract debt and add cash.')
  },
  (id, cycle) => {
    const [company] = s86Cases[cycle % s86Cases.length]
    const fcf = 105 + cycle * 9
    const wacc = 9 + (cycle % 3)
    const g = 2 + (cycle % 2)
    const tv = fcf * (1 + g / 100) / ((wacc - g) / 100)
    return q(id, 'Series 86', 'Valuation Methods', `${company} terminal value`,
      `${company}'s final forecast-year free cash flow is ${dollars(fcf)}. The analyst applies a perpetual growth rate of ${g}% and WACC of ${wacc}%. What continuing value is produced by the Gordon-growth formula?`,
      dollars(tv),
      [
        [dollars(fcf / ((wacc - g) / 100)), 'That forgets to grow final-year FCF by one period before capitalizing it.'],
        [dollars(fcf * (1 + g / 100) / (wacc / 100)), 'That discounts by WACC without subtracting perpetual growth.'],
        [dollars(fcf * (wacc - g)), 'That multiplies by the spread instead of dividing by it.'],
      ],
      'A standard terminal value equals next-period FCF divided by WACC minus perpetual growth. The denominator becomes extremely sensitive as growth approaches WACC.')
  },
  (id, cycle) => {
    const [company] = s86Cases[cycle % s86Cases.length]
    const baseNi = 160 + cycle * 11
    const targetNi = 28 + cycle * 4
    const shares = 80 + cycle * 3
    const issued = 9 + cycle
    const eps = (baseNi + targetNi) / (shares + issued)
    return q(id, 'Series 86', 'Forecasting and Earnings Drivers', `${company} acquisition dilution`,
      `${company} will earn ${dollars(baseNi)} and acquire a target earning ${dollars(targetNi)}. It will issue ${issued} million new shares on top of ${shares} million diluted shares. What pro forma EPS should the analyst model before synergies?`,
      `$${eps.toFixed(2)}`,
      [
        [`$${(baseNi / shares).toFixed(2)}`, 'That uses standalone EPS and ignores both target earnings and new shares.'],
        [`$${((baseNi + targetNi) / shares).toFixed(2)}`, 'That adds target earnings but ignores the dilution from shares issued.'],
        [`$${(baseNi / (shares + issued)).toFixed(2)}`, 'That includes dilution but drops the target earnings contribution.'],
      ],
      'Accretion and dilution analysis is per-share math. Include both incremental earnings and the new share count before judging whether EPS rises.')
  },
  (id, cycle) => {
    const [company] = s86Cases[cycle % s86Cases.length]
    const billings = 90 + cycle * 9
    const term = 3 + (cycle % 2)
    const revenue = billings / term
    return q(id, 'Series 86', 'Financial Statements and Accounting Linkages', `${company} deferred revenue`,
      `${company} bills ${dollars(billings)} upfront for a ${term}-year subscription delivered evenly over time. What revenue should be recognized in year one if collectability is not the issue?`,
      dollars(revenue),
      [
        [dollars(billings), 'That treats cash billed as revenue earned immediately, ignoring the service period.'],
        [dollars(billings - revenue), 'That is the unearned portion after year one, not year-one revenue.'],
        ['$0 million', 'Upfront billing does not mean no revenue is earned during the first service year.'],
      ],
      'Subscription analysis separates billings, cash collection, deferred revenue, and recognized revenue. Revenue follows performance obligations, not just invoicing.')
  },
  (id, cycle) => {
    const [company] = s86Cases[cycle % s86Cases.length]
    const inflation = 6 + (cycle % 5)
    return q(id, 'Series 86', 'Ratios, Margins, and Quality of Earnings', `${company} inventory method comparison`,
      `${company} operates in a period when input costs are rising about ${inflation}% annually. Compared with weighted-average inventory costing, what would FIFO most likely do to reported gross margin in the near term, all else equal?`,
      'Report a higher gross margin because older, lower costs flow through COGS first',
      [
        ['Report a lower gross margin because the newest, highest costs always flow through COGS first', 'That describes a higher-cost COGS assumption, not FIFO in a rising-cost environment.'],
        ['Leave gross margin unchanged because inventory methods only affect the balance sheet', 'Inventory costing affects COGS and therefore gross profit.'],
        ['Eliminate the need to analyze inventory turnover', 'Accounting method choice does not replace operational analysis of inventory efficiency.'],
      ],
      'Inventory method differences can distort peer margins. In rising-cost periods, FIFO tends to show lower COGS and higher gross margin than average-cost methods.')
  },
  (id, cycle) => {
    const [company] = s86Cases[cycle % s86Cases.length]
    const revenue = 700 + cycle * 45
    const decline = 4 + (cycle % 4)
    const variableMargin = 55 - (cycle % 6)
    const fixedCost = 210 + cycle * 10
    const oldOp = revenue * variableMargin / 100 - fixedCost
    const newOp = revenue * (1 - decline / 100) * variableMargin / 100 - fixedCost
    return q(id, 'Series 86', 'Forecasting and Earnings Drivers', `${company} operating leverage`,
      `${company} has revenue of ${dollars(revenue)}, variable gross contribution of ${variableMargin}% of sales, and fixed operating costs of ${dollars(fixedCost)}. If revenue falls ${decline}% and fixed costs do not move, what happens to operating profit?`,
      `It falls by about ${dollars(oldOp - newOp)} to ${dollars(newOp)}`,
      [
        [`It falls by only ${decline}% because all costs flex with revenue`, 'Fixed costs do not flex in the prompt, so profit falls faster than revenue.'],
        [`It rises to ${dollars(oldOp + newOp)}`, 'A revenue decline with unchanged fixed costs does not increase operating profit.'],
        [`It is unchanged at ${dollars(oldOp)}`, 'Holding operating profit flat ignores the lower contribution dollars.'],
      ],
      'Operating leverage means fixed costs magnify the profit impact of revenue changes. Separate variable contribution from fixed expense before forecasting margins.')
  },
  (id, cycle) => {
    const [company] = s86Cases[cycle % s86Cases.length]
    const debt = 450 + cycle * 40
    const rateMove = 125 + cycle * 15
    const tax = 24
    const shares = 100 + cycle * 4
    const epsHit = debt * (rateMove / 10000) * (1 - tax / 100) / shares
    return q(id, 'Series 86', 'Economics, Markets, and Industry Analysis', `${company} rate sensitivity`,
      `${company} has ${dollars(debt)} of floating-rate debt. Rates rise ${rateMove} basis points, the tax rate is ${tax}%, and diluted shares are ${shares} million. What approximate after-tax EPS pressure comes from the rate move?`,
      `$${epsHit.toFixed(2)} per share`,
      [
        [`$${(debt * rateMove / 10000 / shares).toFixed(2)} per share`, 'That is pre-tax interest pressure and ignores the tax shield.'],
        [`$${(debt * rateMove / 100 / shares).toFixed(2)} per share`, 'That treats basis points as full percentage points and overstates the cost.'],
        [`$0.00 per share`, 'Floating-rate debt is directly exposed to higher rates.'],
      ],
      'Rate sensitivity becomes company analysis when it flows through interest expense, taxes, share count, refinancing risk, and valuation multiples.')
  },
  (id, cycle) => {
    const [company] = s86Cases[cycle % s86Cases.length]
    const foreign = 35 + (cycle % 6) * 5
    const fxMove = 4 + (cycle % 4)
    const hit = foreign * fxMove / 100
    return q(id, 'Series 86', 'Economics, Markets, and Industry Analysis', `${company} FX translation`,
      `${company} earns ${foreign}% of revenue in foreign currencies but reports in US dollars. If the dollar strengthens ${fxMove}% against those currencies and local-currency sales are unchanged, what is the approximate translation headwind to reported revenue?`,
      pct(hit),
      [
        [pct(fxMove), 'That assumes all revenue is foreign-currency revenue.'],
        [pct(foreign), 'That states the exposure, not the impact of the exchange-rate move.'],
        [pct(hit + fxMove), 'That double-counts the currency move instead of applying it only to the exposed revenue.'],
      ],
      'FX translation impact depends on both the currency move and the percentage of revenue exposed. Analysts should not apply the exchange-rate change to the whole company unless the whole company is exposed.')
  },
  (id, cycle) => {
    const [company, sector] = s86Cases[cycle % s86Cases.length]
    return q(id, 'Series 86', 'Research Logic and Investment Conclusions', `${company} mosaic boundary`,
      `An analyst covering ${company} in ${sector} combines public filings, industry pricing data, and supplier conversations that avoid customer-specific unreleased figures. What is the best characterization of this research process?`,
      'A lawful mosaic process using non-MNPI evidence to refine the forecast',
      [
        ['A required insider-trading violation because suppliers were mentioned', 'Supplier conversations are not automatically MNPI; the boundary is the nature and materiality of the information.'],
        ['A substitute for checking the financial statements', 'Mosaic inputs supplement, rather than replace, company filings and model work.'],
        ['A rumor campaign because the data came from more than one place', 'Multiple lawful sources can improve corroboration when handled carefully.'],
      ],
      'Series 86 research logic allows careful synthesis of lawful information. The analyst must avoid soliciting or using material nonpublic information and should corroborate external checks.')
  },
  (id, cycle) => {
    const [company, sector] = s86Cases[cycle % s86Cases.length]
    const eps = 3.2 + cycle * 0.25
    const multiple = 14 + (cycle % 5)
    const target = eps * multiple
    return q(id, 'Series 86', 'Research Logic and Investment Conclusions', `${company} target price support`,
      `A draft note on ${company} says the ${sector} thesis supports next-year EPS of $${eps.toFixed(2)} and a justified ${x(multiple, 0)} P/E multiple. What price target follows before rounding and judgmental adjustments?`,
      `$${target.toFixed(2)}`,
      [
        [`$${(eps + multiple).toFixed(2)}`, 'That adds EPS and the multiple instead of multiplying them.'],
        [`$${(multiple / eps).toFixed(2)}`, 'That divides the multiple by EPS, which has no price-target meaning.'],
        [`$${(target * 1.2).toFixed(2)}`, 'That adds unsupported upside beyond the stated EPS and multiple assumptions.'],
      ],
      'A P/E-derived price target is expected EPS multiplied by the selected multiple. The report should explain both inputs and the risks to them.')
  },
]

const s87Cases = [
  ['Arden Bank', 'recent IPO underwriting role'],
  ['Briar Solar', 'market-making relationship'],
  ['Canyon Therapeutics', 'investment banking pitch'],
  ['Dover Cloud', 'control relationship'],
  ['Elm Motors', 'secondary offering participation'],
  ['Fable Foods', 'issuer-paid site visit'],
  ['Grove Retail', 'personal-account holding'],
  ['Helio Towers', 'subject-company compensation'],
  ['Ibis Media', 'analyst household ownership'],
  ['Jade Minerals', 'fixed-price offering'],
] as const

const series87Factories: QuestionFactory[] = [
  (id, cycle) => {
    const [issuer, conflict] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Analyst Ethics, Conflicts, and Disclosures', `${issuer} conflict disclosure`,
      `A research report on ${issuer} is ready for publication, and the firm has a ${conflict}. What is the most defensible Series 87 treatment?`,
      'Clearly disclose the relevant relationship in the research report so readers can evaluate the conflict',
      [
        ['Omit the relationship if the analyst personally believes the rating is fair', 'Good faith does not remove the disclosure requirement.'],
        ['Tell only the largest institutional client during a call', 'Selective oral disclosure does not replace report disclosure.'],
        ['Move the disclosure to an internal-only checklist', 'Readers cannot evaluate a conflict they never see.'],
      ],
      'Research-report rules focus on transparent conflicts, not just analyst intent. Relevant firm and analyst relationships should be disclosed in the communication.')
  },
  (id, cycle) => {
    const [issuer] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Research Report Discipline', `${issuer} analyst certification`,
      `An analyst finishes a report changing the rating on ${issuer}. Which certification concept is most directly implicated before release?`,
      'The analyst must certify that the views expressed accurately reflect the analyst\'s personal views and disclose whether compensation is related to the recommendation',
      [
        ['The analyst must certify that the price target is guaranteed to be reached', 'Certification is about views and compensation disclosure, not guaranteeing market outcomes.'],
        ['The sales desk may certify the analyst\'s views for speed', 'The certification belongs to the analyst whose views appear in the report.'],
        ['Certification is unnecessary if the report is short', 'Report length does not eliminate the certification discipline.'],
      ],
      'Regulation AC is a core Series 87 idea: analyst views and compensation relationships need clear certification rather than vague comfort.')
  },
  (id, cycle) => {
    const [issuer] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Research Report Discipline', `${issuer} evidence gap`,
      `A report on ${issuer} upgrades the stock but includes no model bridge, no industry evidence, and no risk discussion. What is the strongest supervisory objection?`,
      'The recommendation is not adequately supported by evidence, analysis, valuation basis, and balanced risk discussion',
      [
        ['A report can be unsupported if the rating is positive', 'Bullish reports require support just as much as bearish reports.'],
        ['Risk discussion is needed only after a stock falls', 'Risks matter at publication, not only after the thesis fails.'],
        ['The model bridge belongs only in the analyst\'s private files', 'Readers need enough basis to understand the recommendation and price target.'],
      ],
      'Research reports should connect thesis, assumptions, valuation, rating, and risks. Series 87 is largely about making research communications fair and supportable.')
  },
  (id, cycle) => {
    const [issuer] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Research Report Discipline', `${issuer} rating change`,
      `An analyst lowers the rating on ${issuer} after reducing estimates. What should the published note make especially clear?`,
      'The changed assumptions, valuation impact, evidence for the revision, and risks around the new view',
      [
        ['Only that the analyst has a bad feeling about the stock', 'A feeling is not a supportable research rationale.'],
        ['Only the new rating label with no explanation', 'A changed label without the bridge can mislead readers.'],
        ['Only the old thesis, because readers already know the company', 'A rating change requires current reasoning, not stale context.'],
      ],
      'Rating changes need a traceable analytical path. A reader should understand what changed, why it matters, and how it affects valuation.')
  },
  (id, cycle) => {
    const [issuer] = s87Cases[cycle % s87Cases.length]
    const target = 42 + cycle * 4
    return q(id, 'Career Skills', 'Research Report Discipline', `${issuer} price target basis`,
      `A report assigns ${issuer} a $${target} price target. What support is most appropriate for the target?`,
      'A clear valuation method, key assumptions, sensitivity or risk context, and time horizon',
      [
        ['A target chosen because it is a round number near the current price', 'Roundness is not a valuation method.'],
        ['A private model that contradicts the written thesis', 'The written communication and model must be internally consistent.'],
        ['A promise that no downside scenario is possible', 'Research opinions are probabilistic; downside risk cannot be wished away.'],
      ],
      'A price target is more than a number. Series 87 expects the communication to state the basis, assumptions, and risks clearly enough for readers to evaluate it.')
  },
  (id, cycle) => {
    const [issuer] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Research Report Discipline', `${issuer} non-GAAP metric`,
      `A report on ${issuer} highlights adjusted EBITDA that excludes recurring platform costs, while GAAP results are much weaker. What is the best communication control?`,
      'Present the non-GAAP measure with appropriate context and reconciliation so it does not obscure GAAP results',
      [
        ['Use only adjusted EBITDA because it gives the cleanest story', 'A clean story that hides recurring costs can mislead readers.'],
        ['Ban all non-GAAP measures even when they are useful', 'Non-GAAP measures can be useful if presented fairly and reconciled.'],
        ['Rename recurring costs as special items without explanation', 'Changing labels does not change economic substance or disclosure obligations.'],
      ],
      'Regulation G and fair-communication principles make non-GAAP presentation a disclosure issue. Adjusted metrics should clarify economics, not bury inconvenient costs.')
  },
  (id, cycle) => {
    const [issuer] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Supervision, Communications, and Exam Execution', `${issuer} selective dissemination`,
      `Before a downgrade on ${issuer} is published, the analyst gives the key rationale to one favored client on a private call. What is the main Series 87 concern?`,
      'Selective dissemination undermines fair access to material research views before publication',
      [
        ['Downgrade rationales are never material to clients', 'The rationale for a rating change can be highly material to investment decisions.'],
        ['Large clients are entitled to earlier research conclusions', 'Preferential timing is the problem, not a privilege.'],
        ['The concern disappears if the call is friendly', 'Tone does not cure selective access.'],
      ],
      'Research dissemination controls are designed to prevent unfair early access. Publication and client communication should follow firm process.')
  },
  (id, cycle) => {
    const [issuer] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Supervision, Communications, and Exam Execution', `${issuer} trading ahead`,
      `A trading desk learns that a negative research report on ${issuer} will be released in an hour and wants to sell firm inventory first. Which rule concern is most direct?`,
      'Trading ahead of a research report can disadvantage recipients and violate research-distribution controls',
      [
        ['The desk may trade freely because the report is not public yet', 'The pending report is exactly why trading ahead is dangerous.'],
        ['The issue is solved by sending the report after the trade', 'Late dissemination does not cure trading ahead.'],
        ['Only issuer employees can trade ahead of research', 'Trading-ahead restrictions apply to firm conduct around its own research reports.'],
      ],
      'FINRA Rule 5280 is a core Series 87 dissemination topic. Firms need controls around trading before research reports are broadly distributed.')
  },
  (id, cycle) => {
    const [issuer] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Analyst Ethics, Conflicts, and Disclosures', `${issuer} public appearance`,
      `An analyst discusses ${issuer} on a live financial-news segment and mentions the Buy rating. What should the analyst be prepared to handle?`,
      'Applicable public-appearance disclosures, fair and balanced statements, and consistency with the published research view',
      [
        ['No disclosures are ever needed once the analyst is on television', 'Public appearances have their own disclosure and fairness expectations.'],
        ['The analyst may exaggerate the thesis because airtime is short', 'Short format does not excuse misleading communication.'],
        ['The analyst should reveal confidential compliance reviews to sound transparent', 'Transparency does not mean disclosing confidential internal processes.'],
      ],
      'Series 87 covers public appearances as research communication. Analysts should preserve accuracy, conflict disclosure, and consistency even in short media formats.')
  },
  (id, cycle) => {
    const [issuer] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Supervision, Communications, and Exam Execution', `${issuer} rumor request`,
      `A salesperson asks research to blast a note saying an unverified rumor about ${issuer} is "basically confirmed." What is the best response?`,
      'Do not circulate rumor as fact; verify supportable information and follow firm review procedures',
      [
        ['Publish immediately because rumors move markets', 'Market impact raises the need for control; it does not justify unsupported claims.'],
        ['Use quotation marks around the rumor and treat it as confirmed', 'Punctuation does not convert rumor into verified research.'],
        ['Send it only by instant message so it is not a research note', 'Changing the channel does not remove communication standards.'],
      ],
      'Series 87 dissemination questions often test channel-neutral judgment. Unsupported rumors should not be laundered into research communications.')
  },
  (id, cycle) => {
    const [issuer] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Supervision, Communications, and Exam Execution', `${issuer} supervisory review`,
      `A junior analyst wants to send a thematic report mentioning ${issuer} directly to clients before supervisory review because the market is moving. What is the strongest control response?`,
      'Follow the firm\'s required review and approval workflow before client dissemination',
      [
        ['Skip review if the report is time sensitive', 'Time sensitivity is a reason for efficient review, not no review.'],
        ['Send it from a personal email so the firm is not involved', 'Personal channels increase recordkeeping and supervision risk.'],
        ['Ask sales to approve the analysis instead of a supervisor', 'Sales interest does not substitute for required supervisory approval.'],
      ],
      'Research communications need supervision, approval, and records consistent with firm procedures. Urgency does not cancel the control framework.')
  },
  (id, cycle) => {
    const [issuer] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Analyst Ethics, Conflicts, and Disclosures', `${issuer} banking pressure`,
      `Investment banking asks research to delay a downgrade of ${issuer} until after a financing pitch. What is the best research response?`,
      'Preserve research independence and escalate through compliance or supervision rather than altering timing for banking interests',
      [
        ['Delay the downgrade because banking revenue benefits the firm', 'Research independence cannot be subordinated to banking revenue.'],
        ['Publish a rating the analyst no longer believes', 'A knowingly stale or unsupported rating can mislead readers.'],
        ['Tell only sales the true view and leave the report unchanged', 'Side-channel views create unfair and inconsistent dissemination.'],
      ],
      'Research analyst rules protect independence from investment-banking pressure. Series 87 scenarios often ask whether the analyst should disclose, refuse, escalate, or document.')
  },
  (id, cycle) => {
    const [issuer] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Analyst Ethics, Conflicts, and Disclosures', `${issuer} personal trading`,
      `An analyst wants to buy shares of ${issuer} immediately before initiating coverage with a favorable rating. What is the most appropriate control instinct?`,
      'Follow personal-trading restrictions and give clients fair opportunity before any analyst personal trading',
      [
        ['Trade first because the analyst did the work', 'Analyst effort does not outrank client priority or firm policy.'],
        ['Buy only a small amount and skip preclearance', 'Small trades can still create conflict and policy violations.'],
        ['Trade through a family account to avoid the rule', 'Household and beneficial-interest accounts can still be covered by personal-trading policies.'],
      ],
      'Personal trading by research analysts raises conflict, priority, and appearance issues. The safe path is preclearance, restrictions, and client-first process.')
  },
  (id, cycle) => {
    const [issuer, conflict] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Analyst Ethics, Conflicts, and Disclosures', `${issuer} distribution interest`,
      `The firm is publishing research on ${issuer} while it has a ${conflict}. What principle best explains the required disclosure posture?`,
      'Readers should be told about firm interests in distributions or control relationships that could affect objectivity',
      [
        ['Distribution interests matter only to the issuer, not research readers', 'Readers use conflict information to judge incentives behind the report.'],
        ['The conflict can be hidden if the recommendation is Neutral', 'Neutral ratings can still be affected by conflicts and still need disclosure.'],
        ['The analyst can offset the conflict by writing a longer industry overview', 'More analysis does not erase a disclosure obligation.'],
      ],
      'Series 87 includes specific disclosure rules around control relationships, distributions, and related firm interests. Disclosure helps readers evaluate possible bias.')
  },
  (id, cycle) => {
    const [issuer] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Supervision, Communications, and Exam Execution', `${issuer} social media summary`,
      `A research associate posts a short social media thread summarizing the firm's unpublished ${issuer} target-price change. What is the best Series 87 analysis?`,
      'The channel is still a research communication channel and must follow approval, disclosure, and fair-dissemination controls',
      [
        ['Social media is too short to be regulated communication', 'Short messages can still communicate material research views.'],
        ['Approval is unnecessary if the post links to no PDF', 'The absence of a PDF does not remove communication standards.'],
        ['Disclosures are impossible online, so the content is automatically fine', 'Format constraints require planning, not abandonment of disclosure.'],
      ],
      'Dissemination rules are not limited to PDFs. Email, texts, instant messages, websites, social media, video, and podcasts can all carry research information.')
  },
  (id, cycle) => {
    const [issuer] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Analyst Ethics, Conflicts, and Disclosures', `${issuer} compensation link`,
      `A proposed analyst bonus formula for ${issuer} coverage gives a direct payout for each investment-banking mandate won from covered companies. What is the key issue?`,
      'Directly tying analyst compensation to specific investment-banking transactions threatens independence and must be controlled or prohibited',
      [
        ['It improves objectivity because the analyst has more incentive', 'The incentive points toward banking revenue, not independent analysis.'],
        ['It is harmless if the analyst writes quickly', 'Speed has nothing to do with compensation conflicts.'],
        ['It removes the need for report disclosures', 'A compensation conflict increases disclosure and control concerns; it does not erase them.'],
      ],
      'Research independence includes compensation structure. Series 87 expects analysts to recognize when banking incentives can distort research judgment.')
  },
  (id, cycle) => {
    const [issuer] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Analyst Ethics, Conflicts, and Disclosures', `${issuer} FD boundary`,
      `${issuer} privately tells the analyst that next quarter's revenue will miss guidance and asks for "discretion." What is the safest response?`,
      'Avoid using or selectively disseminating the material nonpublic information and escalate under firm procedures',
      [
        ['Use the information only to change the model without telling anyone', 'Private model use of MNPI is still misuse.'],
        ['Tell top clients first because they pay for access', 'Selective disclosure to favored clients compounds the problem.'],
        ['Publish the exact number immediately without compliance involvement', 'The analyst should not unilaterally disseminate issuer MNPI.'],
      ],
      'Regulation FD and insider-trading principles sit behind many Series 87 scenarios. Analysts must avoid becoming a conduit for selective material nonpublic information.')
  },
  (id, cycle) => {
    const [issuer] = s87Cases[cycle % s87Cases.length]
    return q(id, 'Career Skills', 'Supervision, Communications, and Exam Execution', `${issuer} correction protocol`,
      `After publication, research finds that a ${issuer} report used the wrong share count in a table, affecting the price-target math. What is the best next step?`,
      'Escalate promptly, correct the error through firm procedures, and preserve the record of what changed and why',
      [
        ['Quietly edit the online file with no record', 'Silent changes weaken the audit trail and may mislead readers.'],
        ['Ignore the error if the recommendation label stays the same', 'A material calculation error deserves correction even if the rating does not change.'],
        ['Ask sales to explain the fix only to clients who complain', 'Selective correction is not a fair dissemination process.'],
      ],
      'Research communications need recordkeeping and correction discipline. A defensible process shows the original issue, the correction, approval, and dissemination path.')
  },
]

const cfaCases = [
  ['Atlas Fund', 'balanced mandate'],
  ['Boreal Pension', 'liability-aware mandate'],
  ['Cedar Endowment', 'long-horizon mandate'],
  ['Dynamo Wealth', 'taxable family account'],
  ['Evergreen Trust', 'capital preservation mandate'],
  ['Forge Insurance', 'surplus portfolio'],
  ['Garnet Foundation', 'spending policy mandate'],
  ['Horizon ETF', 'index-tracking mandate'],
  ['Ivy Advisory', 'new client mandate'],
  ['Keystone Plan', 'retirement plan mandate'],
] as const

const cfaFactories: QuestionFactory[] = [
  (id, cycle) => {
    const [client] = cfaCases[cycle % cfaCases.length]
    return q(id, 'Career Skills', 'Ethics, Standards, and Professional Reflexes', `${client} MNPI dinner`,
      `A supplier executive privately tells a ${client} analyst that a covered issuer will lose a major contract tomorrow. The information is credible and not public. What is the most appropriate CFA Level I response?`,
      'Do not trade or cause others to trade, and escalate according to firm procedures until the information is public or no longer material',
      [
        ['Trade before the market learns it because the analyst did not ask for the tip', 'Passive receipt does not permit use of material nonpublic information.'],
        ['Share it only with the largest clients', 'Selective client sharing is still misuse and violates fair dealing.'],
        ['Publish a report using the fact but hiding the source', 'Using MNPI without attribution is still using MNPI.'],
      ],
      'CFA ethics questions test action, not just intent. Material nonpublic information cannot be used for trading, recommendations, or selective client advantage.')
  },
  (id, cycle) => {
    const [client, mandate] = cfaCases[cycle % cfaCases.length]
    return q(id, 'Career Skills', 'Ethics, Standards, and Professional Reflexes', `${client} suitability check`,
      `${client} has a ${mandate}, a near-term liquidity need, and a written restriction against private funds. A manager wants to allocate to a seven-year lockup fund because recent returns look strong. What should the manager do first?`,
      'Evaluate suitability against the client objectives, constraints, and written restrictions before recommending the allocation',
      [
        ['Invest because recent returns override policy constraints', 'Past performance does not erase client restrictions or liquidity needs.'],
        ['Ask the fund sponsor whether the client is suitable', 'The adviser owes the client a suitability analysis; sponsor enthusiasm is not enough.'],
        ['Classify the lockup as cash because the manager expects high returns', 'Expected return does not change liquidity characteristics.'],
      ],
      'Suitability starts with the client mandate. Objectives, risk tolerance, liquidity, time horizon, taxes, legal constraints, and unique circumstances govern the recommendation.')
  },
  (id, cycle) => {
    const payment = 18000 + cycle * 1000
    const rate = 5 + (cycle % 4)
    const years = 4 + (cycle % 3)
    const ordinary = payment * (1 - (1 + rate / 100) ** -years) / (rate / 100)
    const due = ordinary * (1 + rate / 100)
    return q(id, 'Career Skills', 'Quantitative Methods and the Analyst Calculator', 'Annuity due timing',
      `An investor will receive ${usd(payment)} at the beginning of each year for ${years} years. If the discount rate is ${rate}%, what is the present value closest to?`,
      usd(due),
      [
        [usd(ordinary), 'That is the ordinary annuity value, which assumes end-of-year payments.'],
        [usd(payment * years), 'That ignores discounting and timing.'],
        [usd(ordinary / (1 + rate / 100)), 'That discounts the ordinary annuity one extra period instead of adjusting for beginning payments.'],
      ],
      'Beginning-of-period payments are an annuity due. Value the ordinary annuity and multiply by one plus the discount rate.')
  },
  (id, cycle) => {
    const corr = 0.62 + cycle * 0.02
    return q(id, 'Career Skills', 'Quantitative Methods and the Analyst Calculator', 'Correlation versus causation',
      `A CFA candidate finds a ${corr.toFixed(2)} correlation between monthly fund flows and same-month returns in a short sample. What is the most defensible interpretation?`,
      'The variables moved together in the sample, but the statistic alone does not prove causation or direction',
      [
        ['Fund flows caused returns because the correlation is positive', 'Correlation strength does not establish causality or direction.'],
        ['Returns and flows are identical because correlation is above zero', 'Correlation measures linear association, not identity.'],
        ['The result is useless because all market data are noisy', 'Noise calls for caution, not automatic dismissal of a measured relationship.'],
      ],
      'Quantitative Methods distinguishes association from causation. A correlation can motivate research, but it does not settle the economic mechanism.')
  },
  (id, cycle) => {
    const price = 4 + (cycle % 5)
    const quantity = 1 + (cycle % 3)
    const elasticity = quantity / price
    return q(id, 'Career Skills', 'Economics for Market Context', 'Demand elasticity scenario',
      `A producer raises price by ${price}% and quantity demanded falls by ${quantity}% over the relevant range. What does the arc suggest about demand?`,
      `Demand is relatively inelastic because elasticity is about ${elasticity.toFixed(2)}`,
      [
        ['Demand is relatively elastic because quantity changed at all', 'Elasticity compares proportional changes; any movement is not enough.'],
        ['Demand is unit elastic because both inputs are percentages', 'Unit elasticity requires equal percentage changes.'],
        ['The statement describes supply elasticity, not demand', 'The prompt measures quantity demanded after a price change.'],
      ],
      'Elasticity compares percentage quantity response with percentage price change. If quantity moves less than price, demand is relatively inelastic.')
  },
  (id, cycle) => {
    const [issuer] = s86Cases[cycle % s86Cases.length]
    const cash = 80 + cycle * 10
    const usefulLife = 4 + (cycle % 3)
    const dep = cash / usefulLife
    return q(id, 'Career Skills', 'Financial Statement Analysis', `${issuer} capitalization effect`,
      `${issuer} capitalizes ${dollars(cash)} of implementation costs and depreciates them straight-line over ${usefulLife} years. A peer expenses the same amount immediately. In year one, what is the effect of capitalization before tax?`,
      `Reported pretax income is higher by ${dollars(cash - dep)} and assets are higher after recognizing only ${dollars(dep)} of expense`,
      [
        [`Pretax income is lower by ${dollars(cash)}`, 'That describes immediate expensing, not capitalization.'],
        ['Assets are unchanged because capitalization only affects cash flow', 'Capitalization creates an asset and changes expense timing.'],
        [`Pretax income is higher by ${dollars(cash + dep)}`, 'The capitalizer still records depreciation; the benefit is the avoided immediate expense minus depreciation.'],
      ],
      'Financial Statement Analysis tests accounting comparability. Capitalization defers expense recognition and increases assets relative to immediate expensing.')
  },
  (id, cycle) => {
    const project = 120 + cycle * 15
    const pv = 145 + cycle * 18
    const npv = pv - project
    return q(id, 'Career Skills', 'Corporate Issuers and Capital Decisions', 'Capital budgeting decision',
      `A company can invest ${dollars(project)} in a project whose expected present value of future cash flows is ${dollars(pv)}. What is the NPV decision rule result?`,
      `Accept on NPV grounds because NPV is ${dollars(npv)}`,
      [
        ['Reject because the initial investment is a cash outflow', 'All projects have outflows; the decision compares present value of inflows with the investment.'],
        [`Accept only if payback is under one year`, 'Payback may be useful, but NPV is the direct value-creation rule in this prompt.'],
        [`Reject because ${dollars(pv)} is below zero`, 'The present value is positive and exceeds the initial investment.'],
      ],
      'Corporate Issuers capital budgeting centers on value creation. A positive NPV means expected discounted benefits exceed the required investment.')
  },
  (id, cycle) => {
    const d1 = 2.1 + cycle * 0.12
    const r = 9 + (cycle % 3)
    const g = 3 + (cycle % 2)
    const value = d1 / ((r - g) / 100)
    return q(id, 'Career Skills', 'Equity Investments', 'Gordon growth value',
      `A mature stock is expected to pay a $${d1.toFixed(2)} dividend next year. Required return is ${r}% and long-run dividend growth is ${g}%. What value is closest under the Gordon growth model?`,
      `$${value.toFixed(2)}`,
      [
        [`$${(d1 / (r / 100)).toFixed(2)}`, 'That discounts by required return but forgets to subtract growth.'],
        [`$${(d1 * (1 + g / 100) / ((r - g) / 100)).toFixed(2)}`, 'That grows a dividend that is already stated as next year\'s dividend.'],
        [`$${(d1 * (r - g)).toFixed(2)}`, 'That multiplies by the spread rather than dividing by it.'],
      ],
      'Equity valuation models require matching the dividend timing to the formula. If D1 is already next year, value equals D1 divided by r minus g.')
  },
  (id, cycle) => {
    const duration = 5 + (cycle % 5)
    const yieldMove = 60 + cycle * 10
    const priceMove = -duration * yieldMove / 100
    return q(id, 'Career Skills', 'Fixed Income', 'Duration price estimate',
      `A bond has modified duration of ${duration}. If yield rises ${yieldMove} basis points, what is the approximate percentage price change before convexity?`,
      pct(priceMove),
      [
        [pct(Math.abs(priceMove)), 'The sign is wrong; bond prices move inversely with yields.'],
        [pct(-yieldMove / 100), 'That uses only the yield change and ignores duration.'],
        [pct(-duration * yieldMove), 'That treats basis points as whole percentage points and wildly overstates the move.'],
      ],
      'Fixed income price sensitivity is approximately negative modified duration times the yield change in decimal form. Convexity refines, but does not reverse, the first-order estimate.')
  },
  (id, cycle) => {
    const spot = 48 + cycle * 2
    const strike = 50 + cycle
    const payoff = Math.max(spot - strike, 0)
    return q(id, 'Career Skills', 'Derivatives Without the Fog Machine', 'Long call payoff',
      `At expiration, a stock is at $${spot} and a call option has a strike price of $${strike}. Ignoring the premium, what is the long call payoff?`,
      `$${payoff}`,
      [
        [`$${Math.max(strike - spot, 0)}`, 'That is the payoff shape of a put option, not a call.'],
        [`$${spot + strike}`, 'Option payoff is not the sum of stock price and strike.'],
        [`$${strike}`, 'The strike is the exercise price, not the payoff.'],
      ],
      'A long call payoff at expiration is max(underlying price - strike price, 0). Draw the payoff before reaching for a formula.')
  },
  (id, cycle) => {
    const nav = 100 + cycle * 8
    const stale = 2 + (cycle % 4)
    return q(id, 'Career Skills', 'Alternative Investments', 'Appraisal smoothing',
      `A real estate fund reports NAV based on quarterly appraisals, while comparable public REIT prices move daily and have fallen ${stale}% this month. What is the best Level I caution?`,
      'Appraisal-based NAV may smooth or lag economic value changes, understating current volatility',
      [
        ['The private fund has no risk because the NAV did not move daily', 'Infrequent pricing can hide risk; it does not eliminate it.'],
        ['The REIT price must be wrong because it moves more often', 'Public prices may be noisy, but frequency alone does not make them wrong.'],
        [`The fund should mark NAV to exactly ${dollars(nav)} forever`, 'NAV should reflect evidence over time; it is not fixed by a prior appraisal.'],
      ],
      'Alternative investments often have liquidity, valuation, and benchmarking challenges. Smoothed reported returns can understate economic risk.')
  },
  (id, cycle) => {
    const rf = 3 + (cycle % 3)
    const beta = 0.8 + cycle * 0.05
    const premium = 5 + (cycle % 3)
    const capm = rf + beta * premium
    return q(id, 'Career Skills', 'Portfolio Management and Risk', 'CAPM required return',
      `A stock has beta ${beta.toFixed(2)}, the risk-free rate is ${rf}%, and the expected market risk premium is ${premium}%. What required return follows from CAPM?`,
      pct(capm),
      [
        [pct(rf + premium), 'That assumes beta is exactly 1.0.'],
        [pct(beta * premium), 'That omits the risk-free rate.'],
        [pct(rf + beta + premium), 'That adds beta as if it were a percentage return.'],
      ],
      'CAPM required return equals the risk-free rate plus beta times the expected market risk premium. Beta scales systematic risk, not total risk.')
  },
  (id, cycle) => {
    const ret = 11 + (cycle % 4)
    const rf = 3 + (cycle % 2)
    const sd = 16 + cycle
    const sharpe = (ret - rf) / sd
    return q(id, 'Career Skills', 'Portfolio Management and Risk', 'Sharpe ratio interpretation',
      `A portfolio earned ${ret}%, the risk-free rate was ${rf}%, and return standard deviation was ${sd}%. What Sharpe ratio is closest?`,
      sharpe.toFixed(2),
      [
        [(ret / sd).toFixed(2), 'That uses total return rather than excess return.'],
        [((ret - rf) / ret).toFixed(2), 'That divides excess return by return instead of volatility.'],
        [(sd / (ret - rf)).toFixed(2), 'That inverts the Sharpe ratio.'],
      ],
      'The Sharpe ratio measures excess return per unit of total volatility. Use return minus risk-free rate in the numerator.')
  },
  (id, cycle) => {
    const [client, mandate] = cfaCases[cycle % cfaCases.length]
    return q(id, 'Career Skills', 'Portfolio Management and Risk', `${client} IPS constraint`,
      `${client} has a ${mandate}, needs a large cash distribution in nine months, and faces a prohibition on below-investment-grade bonds. Which IPS section most directly captures these facts?`,
      'Liquidity need, time horizon, and legal or regulatory constraints',
      [
        ['Only return objective, because all facts affect return eventually', 'Return objective is not the best label for cash timing and prohibited securities.'],
        ['Only unique circumstances, because every client is different', 'Unique circumstances may matter, but the prompt gives standard IPS constraint categories.'],
        ['Only willingness to take risk, because the client sounds cautious', 'Willingness is behavioral; the facts are specific constraints and cash needs.'],
      ],
      'Portfolio planning starts with objectives and constraints. Liquidity, time horizon, taxes, legal or regulatory factors, and unique circumstances shape allowable assets.')
  },
  (id, cycle) => {
    const loss = 7 + (cycle % 4)
    return q(id, 'Career Skills', 'Integrated Practice and Exam Strategy', 'Qualifier discipline',
      `A CFA Level I stem asks for the "least appropriate" action after a manager discovers a ${loss}% allocation breach. What is the best test-taking discipline?`,
      'Circle the qualifier mentally and choose the action that fails the standard or process, not the action that sounds generally prudent',
      [
        ['A prudent-sounding action that does not fail the standard', 'Least appropriate reverses the task; a prudent action is likely a trap.'],
        ['Ignore the word "least" because CFA questions avoid qualifiers', 'Level I questions commonly use qualifiers such as most appropriate or least appropriate.'],
        ['A long compliance-heavy answer that ignores the qualifier', 'Length is not evidence; the qualifier and facts control.'],
      ],
      'Level I is as much reading discipline as memory. Qualifiers such as most likely, least likely, best, and least appropriate define the task.')
  },
]

const series86Questions = buildQuestions(4600000, 160, series86Factories)
const series87Questions = buildQuestions(4601000, 180, series87Factories)
const cfaLevelOneQuestions = buildQuestions(4603000, 140, cfaFactories)

export const careerAgentGeneratedCredentialExpansionFinanceQuestionsByTrack: Record<string, Question[]> = {
  series86: series86Questions,
  series87: series87Questions,
  cfaLevelOne: cfaLevelOneQuestions,
}

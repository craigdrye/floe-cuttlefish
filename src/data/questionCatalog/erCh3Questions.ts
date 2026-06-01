import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// ER CHAPTER 3 — Forecasting and Model Discipline (expansion bank)
// ----------------------------------------------------------------------------
// 42 additional questions (IDs 4370200–4370241) supplementing the existing 8
// Chapter 3 questions in careerAgentGeneratedRoadmapFinance.ts under the
// equityResearchRoadmap track. The existing 8 already cover: segment mix on
// a retail beat, DSO clue, operating leverage intuition, inventory buildup,
// estimate flow-through arithmetic, deferred revenue clue, billings slowdown,
// and price vs volume. This bank goes wider and deeper into the analyst-level
// mechanics that sit underneath those: revenue build (top-down vs bottom-up,
// segments, organic vs M&A), margin bridge (gross margin trajectory, opex
// leverage, fixed cost absorption), working capital cycle (DSO/DIO/DPO and
// cash conversion), capex (maintenance vs growth, capitalized software,
// depreciation lag), diluted EPS mechanics (treasury method, SBC dilution,
// buyback timing), unlevered vs levered free cash flow, model discipline
// (hardcode colors, goal-seeking traps, three-statement linkage, balance
// sheet check, circular references), sensitivity tables (1D and 2D, when to
// lock the case), consensus vs estimate (how to read 2 cents above), forecast
// horizon (near-term vs normalized vs terminal-year), inherited model trace.
//
// Voice: matches jargonBusters.ts and the existing finance expansion banks
// (ibCh*Questions.ts, vcCapstoneQuestions.ts). Specific, evidence-anchored,
// no filler, no strawman distractors. Every wrong-answer rationale is bespoke
// and points at a real misconception an ER associate or career-changer would
// actually make. US-GAAP context throughout — US public markets, USD.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe ER Ch3 canonical bank'

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

const CHAPTER = 'Forecasting and Model Discipline'

// Difficulty distribution target: ~29% at 3, ~50% at 4, ~21% at 5.
// 42 questions: 12 at 3, 21 at 4, 9 at 5.
export const ER_CH3_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Revenue build (4370200–4370206)
  4370200: 3, // Top-down vs bottom-up choice
  4370201: 4, // When top-down is the right tool
  4370202: 4, // Bottom-up segment build for a hardware company
  4370203: 4, // Organic vs M&A contribution disclosure
  4370204: 5, // Lapping a pricing action in the comp base
  4370205: 3, // Segment growth rates and consolidation arithmetic
  4370206: 4, // FX neutral vs reported revenue framing

  // Margin bridge (4370207–4370213)
  4370207: 3, // Gross margin trajectory from product mix
  4370208: 4, // FX in gross margin for a global consumer name
  4370209: 4, // COGS inflation pass-through assumption
  4370210: 4, // S&M scaling vs revenue
  4370211: 4, // R&D and G&A scaling rates differ
  4370212: 5, // Operating leverage formula intuition
  4370213: 4, // Mix shift in opex (insourcing vs outsourcing)

  // Working capital (4370214–4370218)
  4370214: 3, // DSO trend reading
  4370215: 4, // DIO building in a slowing market
  4370216: 4, // DPO extension as a cash lever
  4370217: 4, // Cash conversion cycle composition
  4370218: 5, // Seasonality and quarterly working capital swings

  // Capex (4370219–4370222)
  4370219: 3, // Maintenance vs growth capex split
  4370220: 4, // Capitalized software vs expensed
  4370221: 4, // Depreciation lag after a capex wave
  4370222: 5, // Capacity utilization triggering a capex step

  // EPS / share count / buyback (4370223–4370226)
  4370223: 3, // Treasury stock method for in-the-money options
  4370224: 4, // SBC dilution drag in a software model
  4370225: 4, // Buyback timing in the EPS model
  4370226: 4, // EPS guidance vs consensus framing

  // Free cash flow (4370227–4370230)
  4370227: 3, // FCFF vs FCFE distinction
  4370228: 4, // CFO minus capex shortcut and its limits
  4370229: 5, // Adding back SBC for "true" FCF debate
  4370230: 4, // Cash taxes vs book taxes in FCF

  // Model discipline (4370231–4370235)
  4370231: 3, // Hardcode color convention (blue/black/green)
  4370232: 4, // Goal-seeking to consensus is a discipline failure
  4370233: 5, // Three-statement linkage as audit
  4370234: 4, // Circular reference from a revolver feedback
  4370235: 4, // Balance sheet must balance — debugging step

  // Sensitivity / consensus / horizon / model trace (4370236–4370241)
  4370236: 3, // 2D sensitivity table choice (price × volume)
  4370237: 5, // Locking the base / bull / bear case
  4370238: 5, // Reading "you're 2 cents above consensus"
  4370239: 4, // Near-term vs normalized vs terminal rigor
  4370240: 5, // Inherited model trace checklist
  4370241: 5, // Consensus EPS 5% above your number — what to do
}

export const erCh3Questions: Question[] = [
  // -------------------------------------------------------------------------
  // REVENUE BUILD (4370200–4370206)
  // -------------------------------------------------------------------------
  q(4370200, 'Career Skills', CHAPTER, 'Top-down vs bottom-up revenue build',
    'You are modeling a US specialty retailer with 600 stores, comparable disclosure of sales per store, traffic, ticket, and a known new-store pipeline. Which revenue build is the right one for your three-statement model?',
    'Bottom-up: store count by vintage × sales per store, with comp growth split into traffic and ticket — because each driver is independently disclosed and each one can be argued separately with management',
    [
      ['Top-down: total addressable specialty retail spend × the company\'s historical market share, grown forward', 'Top-down works when bottom-up inputs are unobservable. Here you can see store count, sales per store, traffic, and ticket on the 10-Q — building top-down throws away the disclosure that actually drives the stock.'],
      ['A simple percentage growth applied to last year\'s consolidated revenue', 'Aggregate growth hides the levers. The thesis on a retailer is almost always about traffic, ticket, or new-store productivity — a single growth rate cannot be defended on an earnings call or in a stress test.'],
      ['Bottom-up by SKU, summing forecast units across every product the retailer sells', 'SKU-level forecasting is impossible outside the company and not the unit at which management or sell-side debates the stock. The right unit is the store, where the disclosure lives.'],
    ],
    'Bottom-up belongs where the operating drivers are observable; top-down belongs where they are not. For a retailer with rich store and traffic disclosure, the bottom-up build is the only one that lets you defend each input.'),

  q(4370201, 'Career Skills', CHAPTER, 'When top-down is the right tool',
    'You are initiating on a US EV charging network with 18 months of revenue history, no segment detail, and a buyer base (fleet, retail, highway) management has not yet broken out. How should you build the revenue forecast?',
    'Top-down: estimate total US public charging spend, take a defensible share trajectory based on stations live and announced, and triangulate with a per-station revenue estimate from peer disclosure',
    [
      ['Bottom-up: forecast each individual charging station by location and utilization rate', 'You do not have station-level utilization. Pretending to build it would be a fabricated bottom-up — the precision implied by the model would not survive five seconds of questioning.'],
      ['Apply a constant 50% YoY growth assumption for the next five years', 'A flat aggressive growth rate is not a build, it is a wish. The first analyst question would be how growth changes as the station base scales — flat growth implies infinite-rate compounding.'],
      ['Use management\'s most recent revenue guidance and extend it as a flat percentage growth thereafter', 'Anchoring to management guidance and extending it is the move that strips your model of analytical content. The point of the model is to argue with guidance, not to inherit it.'],
    ],
    'Top-down is the right tool when bottom-up inputs are not yet disclosed or are too thin to build on. The discipline is to make the share trajectory and per-unit revenue defensible against peers, not to dress up a guess as precision.'),

  q(4370202, 'Career Skills', CHAPTER, 'Bottom-up build for a hardware company',
    'A US semiconductor company sells three product families: data-center GPUs, automotive SoCs, and a legacy networking line. Each has different volume and ASP trajectories. What is the disciplined bottom-up build?',
    'Forecast units × ASP for each product family separately, sum to revenue, and explicitly model ASP trajectory (rising on new generations, falling on legacy) — so the mix shift drops out of the build rather than being hardcoded',
    [
      ['Blend the three product families into a single units × blended ASP line', 'Blending units and ASP across families with different trajectories produces a meaningless average. The mix shift, which is the whole story, gets buried in a single number you cannot defend.'],
      ['Apply a single growth rate to consolidated semiconductor revenue', 'A consolidated growth rate hides whether the growth comes from data-center upside or legacy decline mathematically slowing. The thesis on a multi-product semi name lives entirely in mix.'],
      ['Forecast only the data-center GPU line because it is the largest and assume the others are flat', 'Setting the smaller lines flat is a hardcode masquerading as conservatism. Legacy networking typically declines and automotive typically grows — assuming flat misstates both directions.'],
    ],
    'A multi-product hardware model has to build each product family as units × ASP. Mix shift then emerges from the math rather than being hidden inside a blended assumption — and the trajectory of each ASP can be debated on its own merits.'),

  q(4370203, 'Career Skills', CHAPTER, 'Organic vs M&A contribution',
    'A US industrials company reports 14% YoY revenue growth. Management discloses 5 percentage points came from a tuck-in acquisition closed mid-prior-year. How should your forecast handle organic and inorganic growth?',
    'Strip the M&A contribution out to get organic growth of 9%, forecast organic growth on the underlying trajectory, and add inorganic contribution only for the trailing quarters when the acquired business is still pre-anniversary',
    [
      ['Use the headline 14% growth rate as the organic baseline going forward', 'Using the headline rate double-counts the M&A bump once the deal anniversaries. The forward year would mechanically slow, and the model would look bearish for reasons that have nothing to do with the business.'],
      ['Acquired revenue and organic revenue belong in one continuing growth bucket because both are reported as revenue', 'Organic vs inorganic is the most-asked decomposition on industrials earnings calls. Treating them as identical disarms the analyst from answering the next sell-side question.'],
      ['A recurring tuck-in acquisition contribution should be embedded each year to hold the headline growth rate constant', 'Embedding a recurring M&A assumption commits to a capital allocation pattern that may not happen and that is not yours to forecast. It also hides the underlying organic trend.'],
    ],
    'M&A contribution is mechanical and runs off after the anniversary; organic growth is the underlying trajectory. Disciplined ER models separate the two so the forward forecast does not silently inherit a one-time step-up.'),

  q(4370204, 'Career Skills', CHAPTER, 'Lapping a pricing action',
    'A US consumer staples company took a 7% price increase in Q2 last year. As you model the upcoming Q2, what is the right way to handle the comp base?',
    'Recognize the comp base now embeds last year\'s 7% price, so the year-over-year contribution from price compresses sharply this quarter unless a new pricing action lands — the slowdown is mechanical, not a business deterioration',
    [
      ['Extend last year\'s 7% price contribution forward into the current quarter\'s forecast', 'Pricing actions stay in the level, not the growth rate. Extending the rate forward means you are claiming a new 7% price increase that management has not announced.'],
      ['Build the quarter at the same total revenue growth rate as the prior year', 'Holding the growth rate flat ignores that the prior-year comp now embeds the pricing benefit. Same headline rate would imply a second 7% price action layered on — almost never the case.'],
      ['Drop the price line from the build entirely because it has already been taken', 'Price is still earning revenue — the level is permanent. Dropping it from the build understates the company\'s revenue dollars, not just the growth rate.'],
    ],
    'Pricing actions raise the level permanently but contribute to YoY growth only until they anniversary. A clean revenue build separates price level (carried forward) from price contribution to growth (which lapses), so the model does not mistake mechanical comp dynamics for a business turn.'),

  q(4370205, 'Career Skills', CHAPTER, 'Segment arithmetic and consolidation',
    'You are modeling a company with three segments at $400M, $250M, and $150M revenue and assumed forward growth of 8%, 4%, and −3% respectively. What is the consolidated growth rate?',
    'About 4.6% — weighted by segment revenue: (400×8% + 250×4% + 150×−3%) / 800 = (32 + 10 − 4.5) / 800',
    [
      ['About 3% — simple average of 8%, 4%, and −3%', 'Simple average ignores the segment weights. The 8% growth segment is more than 2.5× the size of the −3% segment, so the consolidated rate is pulled up much more than a simple average suggests.'],
      ['About 8% — the fastest-growing segment sets the trajectory because growth dominates', 'The fastest segment does not set the rate at this scale of company — it is one of three contributors and it is weighted by its share. Picking 8% would assume the others did not exist.'],
      ['Cannot be computed without knowing each segment\'s margin', 'Margin is irrelevant to revenue growth. The segment revenue dollars and growth rates are sufficient — margin would matter for an EBIT bridge, not a top-line consolidation.'],
    ],
    'Consolidated revenue growth is a revenue-weighted average of segment growth, not a simple average and not the dominant segment\'s rate. Doing this arithmetic in your head from a segment table is a baseline ER skill.'),

  q(4370206, 'Career Skills', CHAPTER, 'FX-neutral vs reported revenue',
    'A US-headquartered multinational reports revenue down 1% YoY but says constant-currency growth was +6%. How should your forward model treat the FX gap?',
    'Build the underlying business in constant currency (local-currency volumes and pricing), then translate at a forward FX assumption — and disclose the FX assumption explicitly so it can be sensitivity-tested separately from operating performance',
    [
      ['Use the reported −1% figure as the forward growth rate', 'Embedding a one-period FX headwind into the run-rate growth assumes the same currency move repeats indefinitely. FX is volatile — committing to one period\'s move is not a forecast.'],
      ['Use constant-currency 6% as the reported growth assumption going forward', 'Constant currency excludes FX entirely, which is what you want for the operating model — but the reported number will still include FX. Confusing the two understates how much volatility flows to GAAP.'],
      ['Take the average of reported and constant-currency rates as a balanced view', 'Averaging reported and constant-currency rates has no economic meaning. The two figures answer different questions and should be carried separately in the model.'],
    ],
    'For multinationals, the operating story lives in constant currency and FX is a translation layer on top. The cleanest models build the business in local currency, translate at a stated FX assumption, and let the FX line be its own sensitivity variable.'),

  // -------------------------------------------------------------------------
  // MARGIN BRIDGE (4370207–4370213)
  // -------------------------------------------------------------------------
  q(4370207, 'Career Skills', CHAPTER, 'Gross margin trajectory from product mix',
    'A US software company\'s gross margin is 76%. Management has signaled a strategic push into hardware peripherals at a 35% gross margin, expected to reach 15% of revenue by year three. What should your gross margin trajectory look like?',
    'Gross margin compresses each year as hardware mix grows — by year three, blended GM would be about 70% (0.85×76% + 0.15×35%), and the bridge should explicitly show software and hardware lines separately so the mix effect can be defended',
    [
      ['Hold gross margin flat at 76% because that is the company\'s current rate', 'A flat assumption directly contradicts management\'s stated mix shift. Software at 76% and hardware at 35% cannot blend to 76% if hardware grows from 0% to 15% of revenue — the arithmetic does not allow it.'],
      ['Model gross margin rising to 80% because software companies typically expand margins over time', 'Margin expansion is plausible in a pure-software story. With a deliberate move into a lower-margin business, the mix effect dominates any operating leverage in the software piece — the direction reverses.'],
      ['Average the two margins to get 55% as a blended forward assumption', 'A simple average ignores the 85/15 weighting. Treating the two product lines as equal weight overstates the hardware drag by roughly an order of magnitude.'],
    ],
    'Gross margin should never be modeled as a single trajectory when product mix is changing. Build each line\'s GM separately, weight by revenue mix, and let the blended margin emerge from the math — that way the bridge can be argued line by line.'),

  q(4370208, 'Career Skills', CHAPTER, 'FX in gross margin',
    'A US consumer brand sources 60% of COGS in Asian currencies and bills 40% of revenue in EUR. The dollar weakens 5% against both. What is the directional effect on gross margin and how should the model handle it?',
    'GM is squeezed: COGS in USD goes up roughly 3% (60% × 5%) and revenue in USD goes up roughly 2% (40% × 5%), so the net dollar cost increase outpaces the revenue benefit — model COGS and revenue translation separately and net the impact',
    [
      ['FX cancels out because both COGS and revenue are in foreign currency', 'The mismatch in weights and currencies is the whole point. Equal sensitivity on both sides is rare; building "FX cancels" into the model means abandoning the actual transactional exposure.'],
      ['GM expands because a weaker dollar increases foreign-billed revenue when translated', 'The revenue benefit is real but only on 40% of the base; the COGS hit is on 60%. The bigger leg dominates — GM should compress, not expand.'],
      ['FX is a corporate item and should be modeled below the operating line only', 'Transactional FX (COGS sourcing, revenue billing) flows through gross margin, not just below the line. Translation FX from foreign subsidiaries is the corporate-level item — those are different exposures.'],
    ],
    'FX in gross margin lives at the transaction level: where COGS is incurred and where revenue is billed. The weights rarely match, so the model has to translate each side separately and net the impact rather than assuming offset.'),

  q(4370209, 'Career Skills', CHAPTER, 'COGS inflation pass-through',
    'A US packaged-goods company faces 6% input cost inflation on raw materials. Historical pricing data shows the company has passed through about 70% of cost inflation in prior cycles, with a 1–2 quarter lag. How should the model handle the bridge?',
    'Build the lag explicitly: full 6% COGS hit in the near quarters, then a 4.2% (70% × 6%) price increase landing one to two quarters later — so gross margin troughs before recovering, with the trough size set by the lag',
    [
      ['Full immediate pass-through keeps gross margin flat in the same quarter as the input-cost spike', '100% pass-through ignores both the historical 70% recovery rate and the lag. The model would miss the entire margin-compression quarter that the stock will actually trade on.'],
      ['Raw-material inflation permanently absorbs the full 6% hit with no price recovery', 'Zero pass-through contradicts the historical pattern. It overstates the margin hit and understates the eventual recovery — a one-sided pessimism that loses the debate against management.'],
      ['Net the inflation and the price action in the same period as a single line', 'Netting them collapses the lag, which is exactly the period where the margin pressure is most visible. The trough timing is where the stock prints — the model has to preserve it.'],
    ],
    'Pass-through is rarely instant and rarely complete. A disciplined margin bridge models the inflation hit in the period it lands and the offsetting price action in the period it lands, so the trough quarter is visible and the recovery slope is defensible.'),

  q(4370210, 'Career Skills', CHAPTER, 'S&M scaling with revenue',
    'A US SaaS company runs S&M at 45% of revenue. Management has guided to "leverage" in S&M as growth scales. What is the right way to model this?',
    'S&M dollars grow more slowly than revenue, so the ratio drifts down over time — model S&M as a ratio that declines by a defensible amount each year (e.g., 45% → 42% → 39%) and check that the implied sales rep productivity and quota attainment stay realistic',
    [
      ['Hold S&M at a flat 45% of revenue forever', 'Flat S&M as a percentage means S&M dollars grow exactly with revenue, which is the absence of leverage — directly contradicting the stated guidance. The model would carry no operating margin expansion.'],
      ['Drop S&M to 20% of revenue within two years on the assumption of efficient growth', 'Halving the ratio in two years implies a step-change in sales motion that the company has not described. Aggressive leverage assumptions need to map to a specific go-to-market change.'],
      ['Hold S&M dollars constant at the current level', 'Frozen S&M dollars would mean no new rep hires and no marketing investment as revenue grows — implausible for a growth-stage SaaS business and inconsistent with the company\'s stated growth ambitions.'],
    ],
    'Operating leverage in S&M shows up as the ratio declining over time, not as flat ratio or frozen dollars. The trajectory has to be tied back to specific drivers — rep ramp, productivity, marketing efficiency — that can be argued separately.'),

  q(4370211, 'Career Skills', CHAPTER, 'R&D and G&A scaling differently',
    'In the same SaaS company, R&D is 25% of revenue and G&A is 12%. Both are part of opex. Should they scale with revenue the same way?',
    'No — G&A typically has more fixed cost (HR, finance, legal headcount) and scales sub-linearly, while R&D often stays closer to revenue growth because engineering investment continues to fund the roadmap; model them separately with different leverage rates',
    [
      ['Yes — both should be modeled at the current ratio of revenue', 'Treating R&D and G&A identically misses their underlying economics. G&A is more fixed (executive team, finance, legal) and scales sub-linearly; R&D often tracks closer to growth because product investment is strategic.'],
      ['Yes — both should be modeled as flat dollar amounts to be conservative', 'Frozen dollars on R&D would imply a stalled product roadmap — implausible for a SaaS growth story. Treating both as fixed makes the operating leverage assumption invisible.'],
      ['No — R&D should scale sub-linearly and G&A should scale with revenue', 'The relationship is reversed. G&A has the higher fixed component; R&D investment typically continues to fund competitive product development. Building it the other way produces nonsense leverage.'],
    ],
    'Opex lines do not scale uniformly. G&A leverage usually arrives first because the cost base is more fixed; R&D often scales close to revenue because the company keeps reinvesting. Modeling them with the same ratio assumes leverage where none exists.'),

  q(4370212, 'Career Skills', CHAPTER, 'Operating leverage formula intuition',
    'A US industrials company has $1.2B revenue, $300M EBIT, and an estimated fixed cost base of $400M (the remainder is variable). If revenue grows 10% with no change in price, what is the approximate EBIT impact?',
    'EBIT rises about 23%: incremental revenue of $120M carries the variable cost of $50M (matching the prior ratio of $500M variable cost to $1.2B revenue, so about 42% drop-through), giving roughly $70M of incremental EBIT on a $300M base',
    [
      ['EBIT rises 10% because EBIT scales linearly with revenue', 'Linear EBIT scaling ignores operating leverage entirely. Fixed costs do not grow with revenue — the incremental dollar carries a higher contribution margin, so EBIT grows faster than revenue.'],
      ['EBIT rises 40% because all $120M of incremental revenue drops to the EBIT line', '100% drop-through assumes zero variable costs, which is wrong here — variable costs are $500M out of $1.2B, so each incremental revenue dollar carries about 58 cents of variable cost.'],
      ['EBIT falls because higher revenue means higher absolute costs', 'Absolute costs do rise, but only on the variable portion. The fixed-cost absorption is the whole point of operating leverage — EBIT rises whenever incremental revenue exceeds incremental variable cost.'],
    ],
    'Operating leverage = (incremental revenue × contribution margin) / current EBIT. The shortcut: identify variable cost ratio, take the inverse as contribution margin, multiply by incremental revenue, and divide by current EBIT. Linear EBIT scaling is the mistake to avoid.'),

  q(4370213, 'Career Skills', CHAPTER, 'Opex shift from outsourcing to in-house',
    'A US tech company moves customer support from an outsourced vendor (which sat in COGS) to an in-house team (which will sit in opex under G&A). What does this do to the margin bridge and how should the model handle it?',
    'Gross margin appears to expand and opex appears to rise — but the economic effect on EBIT depends only on the cost differential, not the geography; flag the reclassification explicitly and present both GAAP and like-for-like views so the bridge is not misread as operating leverage',
    [
      ['Gross margin expansion alone — this is a real margin improvement', 'GM expands mechanically because the cost moved off COGS, but EBIT only improves if the in-house cost is actually lower than the outsourced cost. Calling GM expansion a "real" improvement misreads the reclassification as leverage.'],
      ['No change to the model because total costs are the same', 'The geography matters even when total costs are similar — analysts will look at gross margin trends in isolation, peers will not have the same reclassification, and a like-for-like view is needed to keep comparability.'],
      ['Treat the in-house cost as if it stayed in COGS for modeling consistency', 'Forcing a non-GAAP geography into your model creates a reconciliation problem at every prints — and the company\'s reported segment margins will not match yours. Model GAAP and disclose the comparison separately.'],
    ],
    'Cost reclassifications change line geography without changing economics. The discipline is to flag them explicitly, model the actual GAAP presentation, and provide a like-for-like comparison so the gross margin and opex movements are not misread as operating performance.'),

  // -------------------------------------------------------------------------
  // WORKING CAPITAL (4370214–4370218)
  // -------------------------------------------------------------------------
  q(4370214, 'Career Skills', CHAPTER, 'DSO trend reading',
    'A US distributor reports DSO rising from 42 days to 55 days over four quarters while revenue growth is steady at 5%. What is the most disciplined interpretation in your model?',
    'Receivables are growing faster than sales, signaling either looser credit terms (channel push), a customer mix shift toward slower-paying buyers, or collection deterioration — none of which is automatically bad but all of which require investigation and a working-capital absorption in the forecast',
    [
      ['DSO is up because revenue is growing, which always increases receivables', 'Revenue growth alone moves the receivables level, not the days — DSO normalizes for revenue growth. A 13-day rise on steady 5% growth has to come from something other than scale.'],
      ['DSO at 55 days is acceptable for distributors so no further action is needed', 'Industry benchmarks are useful only for context. The trend within the company is what informs the forecast — moving from 42 to 55 is the signal, regardless of where the absolute number sits.'],
      ['DSO is decorative because cash will eventually arrive', 'Cash conversion timing is exactly what working-capital modeling captures. "Eventually" can be one quarter or several, and the working-capital absorption shows up in CFO before it shows up anywhere else.'],
    ],
    'DSO is the units-converted form of receivables that strips out revenue scale. A 13-day rise on steady revenue is a real change in collection dynamics — model the implied working-capital absorption and flag the diagnostic question for the call.'),

  q(4370215, 'Career Skills', CHAPTER, 'DIO build in a slowing market',
    'A US retailer reports DIO rising from 75 days to 95 days while same-store sales decelerate. What should your model assume for the next two quarters on inventory and gross margin?',
    'Inventory is building ahead of weaker demand, which typically forces markdowns to clear — model elevated promotional activity in the next one to two quarters with gross margin compression, and a working-capital release as the inventory eventually moves',
    [
      ['Inventory build will translate directly to higher future revenue without any margin impact', 'Inventory only converts to revenue at a price. In a slowing market, the price is usually lower than planned, so the conversion comes with markdowns — full-margin sell-through is unlikely.'],
      ['DIO at 95 days is within normal retail seasonality and requires no model change', '95 days is high enough to flag; pairing it with a same-store sales deceleration removes the seasonality explanation. The combination is the signal, not either piece alone.'],
      ['Inventory build is a non-cash item and should not affect the model', 'Inventory build absorbs cash on the way in and either generates cash at markdown prices or becomes a write-down — both of which show up in the model, on different statements.'],
    ],
    'Inventory build paired with sales deceleration is one of the most reliable lead indicators in retail. The forward model has to combine the gross-margin hit from markdowns with the eventual working-capital release as units clear at lower prices.'),

  q(4370216, 'Career Skills', CHAPTER, 'DPO extension as a cash lever',
    'A US manufacturer extends payment terms with suppliers from 35 days to 60 days, raising DPO by 25 days. What is the cash effect and how should the model treat it?',
    'A one-time release of cash equal to roughly 25 days of COGS — show it in the period the terms shift and do not extrapolate the release into future periods, since DPO will stabilize at the new level and the recurring benefit is the level, not the change',
    [
      ['A permanent annual cash inflow equal to 25 days of COGS, growing with COGS', 'The cash release is one-time when terms change; once DPO sits at 60 days, it stays there. Modeling a recurring release confuses the level (which sits in the balance sheet) with the change (which flows through CFO once).'],
      ['No cash impact because DPO is a balance-sheet item', 'DPO changes flow through working capital in CFO. Treating it as balance-sheet-only misses the entire cash release that the move was probably designed to generate.'],
      ['A reduction in operating margins because the company is paying suppliers more slowly', 'DPO is a timing variable, not a pricing variable. Stretching terms does not raise the cost of inputs unless suppliers add a financing surcharge, which would be a separate effect.'],
    ],
    'DPO extension is a one-time cash release, not a recurring source of cash. The discipline is to model the release in the period the change happens and let the new, higher DPO sit in steady state — analysts who model a recurring benefit double-count the change.'),

  q(4370217, 'Career Skills', CHAPTER, 'Cash conversion cycle composition',
    'A US industrial-products company has DSO of 60, DIO of 80, DPO of 45. What is the cash conversion cycle and what does it tell you about working-capital intensity?',
    'CCC = 60 + 80 − 45 = 95 days — the company finances roughly 95 days of operating costs through its own working capital, so any growth above its current run rate consumes cash proportional to the CCC',
    [
      ['CCC = 60 + 80 + 45 = 185 days — sum of all three components', 'DPO subtracts because suppliers are financing the company; only DSO and DIO consume cash on the way out. Adding DPO double-counts the financing leg by treating it as a cash use rather than a cash source.'],
      ['CCC = 60 − 80 − 45 = −65 days — the company has a negative cycle', 'The sign on DIO is positive (inventory consumes cash) and only DPO is negative. Reversing the sign on DIO produces a negative CCC that does not exist for an industrial-products company.'],
      ['CCC is irrelevant; only EBITDA matters for working-capital intensity', 'EBITDA is profitability; CCC is timing. They measure different things — a high-EBITDA company with a 200-day CCC will still consume large amounts of cash to grow.'],
    ],
    'CCC = DSO + DIO − DPO. The intuition: receivables and inventory tie up cash, payables release it, and the net days quantify how much working capital the business funds itself. A larger CCC means each incremental revenue dollar consumes more cash.'),

  q(4370218, 'Career Skills', CHAPTER, 'Seasonality and quarterly working-capital swings',
    'A US specialty retailer builds inventory through Q3 ahead of the holiday quarter, then converts it to sales in Q4. The annual model balances out, but each quarter the working-capital line is large. What is the discipline for the quarterly forecast?',
    'Build a quarterly working-capital pattern that mirrors the seasonal arc: Q3 is a large absorption (inventory build), Q4 is a large release (inventory sold, receivables eventually collected), and the annual total nets to a small number — never use a flat quarterly NWC assumption for a seasonal business',
    [
      ['Spread the annual working-capital change evenly across four quarters', 'A flat allocation hides the entire seasonal pattern — the model would show smooth CFO when the actual filings will show a large Q3 cash absorption and a Q4 cash release. Sell-side comparisons would be unintelligible.'],
      ['The small annual working-capital change means quarterly swings can be left out of the forecast', 'Quarterly cash flow is what management reports and what the stock often trades on. A small annual number can hide enormous quarterly swings that matter for liquidity and revolver draws.'],
      ['Seasonal inventory needs are neutralized by excess cash held throughout the year', 'Companies actively use revolvers and short-term debt to fund seasonal working capital — not idle cash. Modeling neutralization through cash misrepresents the financing pattern.'],
    ],
    'For seasonal businesses, quarterly working-capital swings dominate CFO timing even when the annual total is unremarkable. Modeling the seasonal arc explicitly is what lets the analyst defend the Q3 cash absorption that always shocks first-time readers of a retail 10-Q.'),

  // -------------------------------------------------------------------------
  // CAPEX (4370219–4370222)
  // -------------------------------------------------------------------------
  q(4370219, 'Career Skills', CHAPTER, 'Maintenance vs growth capex',
    'A US data-center REIT discloses $800M of total capex, of which $300M is described as "maintenance" and $500M is "expansion." How should this split show up in your model?',
    'Model maintenance and growth capex as separate lines — maintenance scales with the existing asset base (and approximates D&A in steady state), growth capex is a discretionary investment that the model can flex based on the project pipeline; together they preserve the link between capex, depreciation, and revenue capacity',
    [
      ['Model only total capex as a single percentage of revenue', 'A single capex ratio collapses two very different decisions. Maintenance is non-discretionary and recurring; growth capex is a strategic choice that can be paused. Mixing them removes both levers.'],
      ['Maintenance capex equals depreciation exactly each year as a standing rule', 'Maintenance approximates D&A only in steady state. Asset bases that are still building or that have a depreciation lag will show maintenance and D&A diverging — treating them as identical is a steady-state shortcut, not a rule.'],
      ['Treat the entire $800M as growth capex because it expands the business', 'The disclosure already separates them. Treating maintenance as growth misstates incremental capacity per dollar of capex and overstates FCF from "discretionary" levers — including the wrong line in a cut scenario.'],
    ],
    'Maintenance capex preserves the existing earning power; growth capex adds new capacity. Modeling them separately is what lets the analyst flex one without flexing the other — and what makes the FCF bridge defensible when the company chooses to slow growth investment.'),

  q(4370220, 'Career Skills', CHAPTER, 'Capitalized software vs expensed',
    'A US software company capitalizes a portion of its internal-use software development under US GAAP (ASC 350-40). How does this affect the EBITDA-to-FCF bridge in your model?',
    'Capitalized software lowers cash operating expense (lifting reported EBITDA) and raises capex by the same dollars, so FCF (EBITDA − capex − cash taxes − ΔNWC) is largely unaffected — but the model has to keep both lines moving together so the EBITDA flattering does not silently inflate FCF',
    [
      ['Capitalized software permanently lifts FCF because the costs disappear from the income statement', 'They do not disappear — they become depreciation later and capex now. FCF nets the capex against the higher EBITDA, so the cash effect is roughly neutral.'],
      ['Capitalized software has no effect on EBITDA because all development costs are operating', 'That is the case under expensing, not capitalization. Capitalization deliberately moves the cost from opex (denting EBITDA) to capex (denting FCF) — the geography shift is the entire point.'],
      ['Capitalized software is a non-GAAP adjustment and only appears in adjusted EBITDA reconciliations', 'Capitalization is GAAP under ASC 350-40 for internal-use software; it is not a non-GAAP adjustment. Analysts may make a non-GAAP adjustment that backs it out, but the underlying treatment is GAAP.'],
    ],
    'Capitalized software is a geography decision between opex and capex. EBITDA reads higher, capex reads higher, FCF is largely unchanged — and disciplined models keep the two lines coupled so that comparisons across companies with different capitalization policies remain meaningful.'),

  q(4370221, 'Career Skills', CHAPTER, 'Depreciation lag after a capex wave',
    'A US semiconductor company completed a $4B fab expansion in 2023. Capex falls back to $1.5B in 2024. How should depreciation behave in the model?',
    'Depreciation rises in 2024 as the $4B is placed in service and begins to depreciate over its useful life — the depreciation lag means peak D&A trails peak capex by one or more years, so EBIT margin can stay pressured even as capex falls',
    [
      ['Depreciation falls in 2024 because capex fell', 'Capex creates the asset; depreciation runs off the existing asset base. They move on different cycles — falling capex does not pull down depreciation in the same year.'],
      ['Depreciation tracks capex one-for-one in the same period', 'Capex creates an asset that depreciates over its useful life (often 7–15 years for fab equipment). One-for-one tracking ignores the useful-life schedule entirely.'],
      ['Depreciation is a non-cash item and can be left flat in the forecast', 'Depreciation is non-cash for FCF, but it is fully real for EBIT, GAAP EPS, and the tax shield — flat depreciation in a forecast that has capex spikes misstates all three.'],
    ],
    'Capex flows to PP&E and then to depreciation over the useful life. The lag means D&A peaks after capex peaks — a feature that often surprises first-time semi or industrial analysts who expect EBIT margins to recover as soon as capex falls.'),

  q(4370222, 'Career Skills', CHAPTER, 'Capacity utilization triggering capex',
    'A US specialty chemicals company is running its flagship plant at 87% utilization. Forward volume growth implies hitting 95% within 18 months. What is the disciplined way to model the implied capex?',
    'Identify the utilization threshold at which a new line is needed (industry-typical is 90–95%), model a capex step in the year before the constraint binds, and increase depreciation in subsequent years — the capex is not optional if the volume forecast is right, so it should sit explicitly in the model rather than hidden in a residual',
    [
      ['The existing plant still has enough practical capacity to absorb the forecast volume growth', 'Approaching 95% utilization in a continuous chemical process leaves no room for maintenance downtime or quality variability. Pretending the existing plant absorbs the volume contradicts the volume forecast itself.'],
      ['Add a generic capex placeholder of 5% of revenue indefinitely', 'A flat ratio loses the lumpy nature of plant capex — these investments come in steps every several years, not as a smooth percentage. A flat ratio hides both the timing and the magnitude.'],
      ['Hold capex flat at maintenance-only levels and assume volume growth halts at the constraint', 'Halting volume growth at the constraint contradicts the revenue forecast in the rest of the model. The two have to be consistent — either capex steps up or revenue growth slows.'],
    ],
    'Capex modeling in capacity-constrained industries requires linking utilization to the new-line trigger. If the volume forecast implies hitting the trigger, the capex has to appear in the model — otherwise the revenue line is internally inconsistent.'),

  // -------------------------------------------------------------------------
  // EPS / SHARE COUNT / BUYBACK (4370223–4370226)
  // -------------------------------------------------------------------------
  q(4370223, 'Career Skills', CHAPTER, 'Treasury stock method for options',
    'A US company has 100M basic shares outstanding and 10M employee stock options with a weighted-average strike of $30. The current stock price is $50. What is the diluted share count under the treasury stock method?',
    'About 104M shares — exercising 10M options brings in $300M (10M × $30), which buys back 6M shares at $50, so the net dilution is 10M − 6M = 4M shares added to the 100M base',
    [
      ['110M shares — add all 10M options to basic shares', 'That ignores the cash brought in at exercise. The treasury method assumes the proceeds buy back shares at market, so net dilution is less than the gross option count.'],
      ['100M shares — the options are out-of-the-money and ignored', 'The options are in-the-money: strike $30 versus market $50. Treasury method applies whenever options are in-the-money — they only fall out of the dilution count when below the strike.'],
      ['106M shares — net the strike price against the market price proportionally', 'Net dilution is option count minus (option count × strike / market), which is 10M − (10M × 30/50) = 10M − 6M = 4M. The "net the prices proportionally" shortcut misframes the arithmetic.'],
    ],
    'Treasury stock method: in-the-money options add net dilution equal to gross option count minus (proceeds / market price). Out-of-the-money options drop out of the diluted count entirely. The mechanics matter because most US public companies have meaningful option overhangs.'),

  q(4370224, 'Career Skills', CHAPTER, 'SBC dilution drag',
    'A US software company grants SBC equal to 12% of revenue annually, and gross share issuance from settled RSUs is about 3% of shares per year. The company does not buy back shares. What should your model show happening to diluted EPS over time?',
    'Share count compounds upward at roughly 3% per year, which is a persistent EPS drag even if net income grows — model the diluted share count growth explicitly each year, since SBC is real economic dilution that the income statement (which includes SBC in opex) only partially captures',
    [
      ['Hold diluted share count flat because SBC is already in operating expenses', 'SBC in opex captures the income-statement effect but not the share-count effect. RSUs vest and become shares — the dilution shows up in the denominator of EPS regardless of how the expense is classified.'],
      ['SBC dilution drops out of per-share modeling because the grant cost is non-cash', 'SBC is non-cash but very real for ownership and per-share metrics. Non-cash does not mean non-dilutive — and ER models that ignore the dilution overstate forward EPS year after year.'],
      ['Model the share count falling because mature software companies tend to buy back stock', 'The setup says the company does not buy back stock. Modeling buybacks anyway is hardcoding an assumption that contradicts the disclosure.'],
    ],
    'SBC creates two costs: the operating expense (already in EBIT) and the share-count creep (showing up in diluted EPS). Models that capture only one of the two understate the per-share dilution and produce EPS forecasts that drift higher than reality.'),

  q(4370225, 'Career Skills', CHAPTER, 'Buyback timing in the EPS model',
    'A US industrials company announces a $1B buyback authorization for the year, current market cap $20B. How should the buyback show up in the diluted share count line of your model?',
    'Apply the average-share approximation: $1B buyback at the current share price reduces share count by about 5%, but spread the reduction across the year (most companies execute over multiple quarters), so the weighted-average diluted count for the year falls by roughly half the full-year reduction',
    [
      ['Reduce the share count by the full 5% at the start of the year', 'Front-loading the entire repurchase assumes execution that has not happened. Diluted share count for EPS is a weighted average — applying the full reduction on day one overstates the EPS benefit for the year.'],
      ['Add the entire $1B to next year because authorizations are typically not executed in-year', 'Some authorizations carry over, but most large-cap industrials execute meaningfully in the year of announcement. Assuming zero in-year execution understates the benefit.'],
      ['The buyback affects capital allocation but leaves EPS unchanged because operating income is unchanged', 'Reducing the share count by buying back stock raises EPS mechanically. Capital allocation is exactly the lever that flows through to per-share metrics — ignoring it means ignoring the announcement entirely.'],
    ],
    'Buybacks reduce the weighted-average diluted count, but the weighting matters — repurchases executed late in the year contribute less to that year\'s EPS than repurchases executed early. The clean modeling move is to phase the buyback across quarters at the assumed price.'),

  q(4370226, 'Career Skills', CHAPTER, 'EPS guidance vs consensus framing',
    'Management guides full-year EPS to $4.20–$4.40. Consensus sits at $4.50. Your model produces $4.32. How should you frame your number in the note?',
    'Position your $4.32 as midpoint-of-guidance, 4% below consensus, and explain the specific drivers (margin assumption, share count, segment mix) that account for the gap to consensus — the framing is about defending the difference, not splitting it',
    [
      ['Move your number to $4.50 to align with consensus before publishing', 'Goal-seeking to consensus defeats the purpose of an independent model. If your $4.32 is correct, the right move is to defend it; if it is wrong, the right move is to identify which input changes — not to nudge to match the average.'],
      ['Pull your number above guidance to $4.45 to remain bullish', 'Bullishness is not a number — it is a thesis. Pulling the number to look bullish without changing a driver is a hardcode disguised as conviction.'],
      ['Report only the consensus number and skip your own estimate', 'The whole point of analyst coverage is the differentiated estimate. Reporting only consensus erases the value the buy-side pays for.'],
    ],
    'EPS framing in a note is about anchoring your number against both guidance and consensus and explaining the specific drivers of the gap. Goal-seeking to either anchor is the most common discipline failure — and the one buy-side investors are quickest to notice.'),

  // -------------------------------------------------------------------------
  // FREE CASH FLOW (4370227–4370230)
  // -------------------------------------------------------------------------
  q(4370227, 'Career Skills', CHAPTER, 'FCFF vs FCFE',
    'You are asked whether to forecast free cash flow to the firm (FCFF) or free cash flow to equity (FCFE) for a leveraged US specialty distributor. What is the disciplined choice and why?',
    'For a DCF discounted at WACC, use FCFF (pre-interest, available to all capital providers); for an equity valuation discounted at cost of equity, use FCFE (post-interest, available to equity holders only) — the choice has to match the discount rate, not preference',
    [
      ['Always use FCFE because equity research values equities, not firms', 'FCFE pairs with cost of equity. If the DCF uses WACC (most common in ER), FCFE would be mismatched — the discount rate would already include the debt component, double-counting the leverage effect.'],
      ['Always use FCFF because it is more conservative', 'Neither is more conservative — they answer different questions. FCFF gives enterprise value (divide later for equity), FCFE gives equity value directly. "Conservatism" does not pick between them.'],
      ['Use FCFE for leveraged companies and FCFF for unleveraged companies', 'Leverage is not the deciding variable. The discount rate is. FCFF/WACC works for any leverage level; FCFE/cost-of-equity works for any leverage level — the pairing is what matters.'],
    ],
    'FCFF and FCFE are not interchangeable. FCFF goes with WACC and produces enterprise value; FCFE goes with cost of equity and produces equity value directly. Pairing them wrong is the most common DCF mistake and immediately visible to a reviewer.'),

  q(4370228, 'Career Skills', CHAPTER, 'CFO minus capex shortcut',
    'You see a quick FCF estimate built as "cash flow from operations minus capex." Where does this shortcut succeed and where does it break?',
    'It works as a clean approximation for unlevered FCF when interest is small and SBC treatment is consistent — but it includes after-tax interest in CFO (since CFO is post-interest under GAAP), so for a leveraged company it understates FCFF unless you add interest back',
    [
      ['It always equals FCFF exactly', 'Under US GAAP, CFO is calculated post-interest, so it sits between FCFF and FCFE depending on capital structure. Calling it FCFF exactly is wrong whenever the company has meaningful interest expense.'],
      ['It always equals FCFE exactly', 'CFO − capex approximates FCFE more closely than FCFF because CFO is post-interest, but it still does not capture debt principal repayments or new borrowings — both of which sit in financing activities, not operating.'],
      ['It is unreliable and should never be used', 'It is a perfectly usable shortcut once you understand which FCF it approximates. The discipline is to know the limits — interest treatment, SBC add-back, lease handling — not to abandon the shortcut entirely.'],
    ],
    'CFO − capex is a useful first-pass FCF estimate but it lands between FCFF and FCFE because CFO is post-interest. Knowing that gap and adjusting (add interest back for FCFF, leave it for FCFE) is what makes the shortcut defensible.'),

  q(4370229, 'Career Skills', CHAPTER, 'Adding back SBC for "true" FCF',
    'A US SaaS company reports CFO of $200M, of which $80M is SBC add-back, and capex of $20M. What is the right way to think about FCF and the debate around SBC?',
    'Reported FCF (CFO − capex) is $180M, but SBC is real economic compensation that just happens to be paid in stock — many ER analysts back it out to get an "SBC-adjusted FCF" of $100M ($180M − $80M); both numbers are defensible if disclosed, but using only the unadjusted figure for valuation overstates the cash truly available to shareholders',
    [
      ['Reported FCF is correct because SBC is non-cash and CFO already handles it', 'CFO adds SBC back because the cash compensation effect happens at the share count, not in the cash account. Stopping there ignores that the company paid people with shares — those shares are real dilution that "FCF" without an SBC adjustment overstates.'],
      ['SBC-adjusted FCF is the only legitimate number; ignore reported FCF entirely', 'Reported FCF is the GAAP-derived number management uses and that peer comparisons sit on. Refusing to show it means refusing to engage with the headline number the market trades on.'],
      ['SBC is recorded in opex, so it never affects FCF in any version', 'SBC affects EBITDA (in opex), affects CFO (added back as non-cash), and affects diluted EPS (through share-count creep). The question is whether to subtract it from FCF to reflect economic dilution — that is the debate.'],
    ],
    'SBC is the most contested line in software-company FCF. The honest move is to show both reported FCF and an SBC-adjusted FCF, and to explain that the difference is the magnitude of dilution the company is funding through equity rather than cash. Analysts who report only one number choose a side without making it visible.'),

  q(4370230, 'Career Skills', CHAPTER, 'Cash taxes vs book taxes in FCF',
    'A US company reports a 24% effective book tax rate, but cash taxes paid over the last three years averaged 14% of pre-tax income, driven by NOL carryforwards and accelerated tax depreciation. What rate should the FCF model use?',
    'Use cash taxes (closer to 14%) for FCF since FCF is a cash metric — and explicitly model the runoff of NOLs and the convergence to the statutory rate as the deferred tax assets are consumed, so the model does not assume an indefinitely low rate that no longer applies',
    [
      ['Use the 24% book tax rate because it is the GAAP effective rate', 'Book taxes belong on the income statement and feed net income. FCF is built on cash flow — using book taxes overstates the tax outflow and understates FCF by the deferred portion.'],
      ['Use the 14% cash rate forever because that is what the company has been paying', 'Cash taxes are below book taxes specifically because NOLs and depreciation deferrals run out. Holding the low rate in perpetuity assumes the deferrals never reverse — they always do.'],
      ['Use the statutory federal rate of 21% as a neutral assumption', 'The statutory rate ignores state taxes, foreign mix, and the specific NOL position. It is a placeholder, not an analysis — disciplined ER models build the convergence from the actual cash rate to the steady-state effective rate.'],
    ],
    'FCF takes cash taxes, not book taxes — but cash taxes are temporarily depressed by NOLs and depreciation timing differences. The discipline is to model the convergence to the steady-state effective rate, so the FCF forecast does not embed a permanently low tax assumption that runs off in reality.'),

  // -------------------------------------------------------------------------
  // MODEL DISCIPLINE (4370231–4370235)
  // -------------------------------------------------------------------------
  q(4370231, 'Career Skills', CHAPTER, 'Hardcode color convention',
    'A senior analyst tells you the firm\'s model standard is "blue for inputs, black for formulas, green for links to other sheets." Why does this convention matter beyond aesthetics?',
    'It makes every assumption visible at a glance, so a reviewer can spot whether a number is an editable input, a derived formula, or a cross-sheet reference — which is the difference between a model that can be audited in 10 minutes and one that takes 3 hours of clicking through cells',
    [
      ['It is purely a stylistic convention with no functional purpose', 'The convention exists precisely because models without it are nearly impossible to audit. Reviewers cannot tell what they are looking at — every cell could be a hardcode, a formula, or a link.'],
      ['It only matters when the model is shared externally with clients', 'The internal review process depends on the convention as much as any external sharing. Sector leads, senior analysts, and compliance reviewers all rely on the color discipline to trace assumptions.'],
      ['It prevents formula errors automatically by validating each cell', 'Color formatting does not validate cells — it labels them. The discipline is human review enabled by labeling, not automated validation.'],
    ],
    'Color conventions are the visible grammar of model discipline. Blue inputs, black formulas, green links — done consistently, they let a reviewer audit a model in minutes and let an analyst trust their own work months later when revisiting the file.'),

  q(4370232, 'Career Skills', CHAPTER, 'Goal-seeking to consensus',
    'Your model produces $3.10 EPS. Consensus is $3.40. Someone on the team suggests "tweaking the margin assumption up by 50 bps to get closer to consensus." What is the right response?',
    'Refuse the goal-seek and instead identify whether your margin assumption or consensus\'s is better supported — if your number is right, the gap to consensus is the thesis; if consensus is right, find the specific input you missed and fix that input on its merits',
    [
      ['Make the margin adjustment because being too far from consensus risks looking like an outlier', 'Outlier risk is exactly what differentiated coverage produces. The job of the analyst is to defend the number, not to converge to the average — buy-side clients pay for the differentiation.'],
      ['Make a small adjustment to bring the number within 2% of consensus as a safety margin', 'A "safety margin" that adjusts the model away from analytical conclusions is a hardcode dressed as caution. The model loses the ability to tell you anything once inputs are being chosen to land somewhere.'],
      ['Accept the gap but do not publish the number until it converges with consensus naturally', 'Waiting for convergence amounts to suppressing the call. The discipline of independent estimate work means publishing the number you believe is right and explaining why.'],
    ],
    'Goal-seeking to consensus is the most insidious model discipline failure: it removes analytical content under the name of conservatism. Fix inputs on their merits, defend the resulting number, and let the gap to consensus be visible — that is what makes the model a useful artifact rather than a polished average.'),

  q(4370233, 'Career Skills', CHAPTER, 'Three-statement linkage as audit',
    'In a properly built three-statement model, how does the linkage between the income statement, balance sheet, and cash flow statement function as an audit mechanism?',
    'Net income flows from the IS to retained earnings on the BS and to the top of CFO on the CFS; D&A and SBC flow as non-cash adjustments; capex links capex on the CFS to PP&E on the BS; the closing balance sheet must balance to the dollar, which is only true if every linkage is consistent — the balance check is the audit',
    [
      ['The three statements should be built independently and reconciled at quarter-end', 'Independent statements that reconcile manually defeat the audit. The whole point of integration is that an inconsistency in one statement immediately breaks the balance sheet — the model alerts you, not the analyst.'],
      ['The CFS is built first and the IS and BS are derived from it', 'CFS is derived from IS and BS changes, not the reverse. Building CFS first means rebuilding the IS and BS from the CFS — circular and brittle.'],
      ['The three statements are reconciled only at year-end as a sanity check', 'Quarterly balance is non-negotiable for a model that prints anything. End-of-year-only reconciliation lets compounding errors hide for three quarters before surfacing.'],
    ],
    'Three-statement linkage is the model\'s built-in audit: the balance sheet has to balance every period, and the only way it can balance is if every IS, CFS, and BS connection is correct. Analysts who skip the linkage discipline produce models that look plausible until a reviewer touches an input and everything collapses.'),

  q(4370234, 'Career Skills', CHAPTER, 'Circular reference from revolver feedback',
    'Your three-statement model has a revolver line that draws down to cover any cash shortfall. The revolver balance generates interest expense, which feeds back into net income, which affects the cash shortfall, which changes the revolver draw. Excel flags a circular reference. What should you do?',
    'Either enable iterative calculation in Excel (acceptable if controlled) or break the circularity by calculating revolver interest on the prior-period average revolver balance — both approaches are standard, but ungoverned iterative calculation across a large model risks unstable results, so most ER teams use the lagged-balance approach',
    [
      ['Disable iterative calculation and ignore the circular reference warning', 'Ignoring the warning means the model is computing on stale values that may not reflect the actual revolver draw — the cash line and revolver line could be inconsistent every period, silently.'],
      ['Eliminate the revolver entirely from the model to avoid the circular reference', 'Removing the revolver leaves the model with no mechanism to balance to cash — the balance sheet will not close in periods where the company has a cash deficit. The fix is breaking the circularity, not deleting the function.'],
      ['Hardcode the revolver interest expense as a flat number', 'Hardcoding removes the feedback loop but at the cost of accuracy — the interest expense will not respond to draw changes, so scenario analysis on the revolver becomes meaningless.'],
    ],
    'Revolver circularities are common and have two clean fixes: iterative calculation with controlled convergence, or lagging the revolver balance by one period. Both are defensible; ignoring the circular reference or removing the revolver are not.'),

  q(4370235, 'Career Skills', CHAPTER, 'Balance sheet does not balance',
    'You hit Refresh on the model and the balance sheet is off by $42M. What is the right debugging sequence?',
    'Trace recent changes first (whatever was edited most recently is the most likely culprit), then check the period-over-period change on each major BS line against the corresponding CFS line — if depreciation on the CFS does not match the change in accumulated depreciation on the BS, you have isolated the break',
    [
      ['Add a plug to assets or liabilities to make the balance sheet balance', 'Plugging is the cardinal model-discipline sin. A plugged balance sheet hides the error rather than fixing it — and the next time the model needs to flex, the plug compounds the problem.'],
      ['Rebuild the model from scratch since the source of the error is unfindable', 'Most balance sheet breaks are findable in 15 minutes by checking the linkages from CFS to BS — full rebuilds are an enormous overreaction and almost never the right response.'],
      ['$42M balance-sheet breaks are immaterial rounding in a large-cap model', 'In a properly linked model the balance sheet balances to the dollar. Tolerating "small" imbalances signals that the discipline has already been abandoned — and the imbalance will grow each period.'],
    ],
    'A balance sheet that does not balance is the model telling you something is wrong — the only correct response is to find it. Trace recent edits, check CFS-to-BS linkages line by line, and never plug. Models that allow plugs accumulate hidden errors until they collapse.'),

  // -------------------------------------------------------------------------
  // SENSITIVITY / CONSENSUS / HORIZON / TRACE (4370236–4370241)
  // -------------------------------------------------------------------------
  q(4370236, 'Career Skills', CHAPTER, '2D sensitivity table choice',
    'You are presenting a forecast for a US chemicals company where the key uncertainties are average selling price and unit volume. Which sensitivity output is most useful?',
    'A 2D price-by-volume sensitivity table showing EPS (or EBITDA) at each combination — with the base case clearly marked and the corners labeled for the bull/bear edges, so the reader can see how much each lever matters and where the joint risk is',
    [
      ['A 1D table sensitivity only on price, since price is more variable than volume', 'When two variables both have meaningful uncertainty, a 1D table forces one of them to be held at the base case and hides the joint risk. The corners (high price/low volume, low price/high volume) often surface the most interesting scenarios.'],
      ['A 1D table sensitivity only on volume, since volume drives operating leverage', 'Same problem as the price-only version — holding price constant suppresses an important variable. A 2D table is barely more work and captures the interaction.'],
      ['A tornado chart on every assumption in the model', 'Tornado charts are useful for identifying which inputs matter most across the whole model. They are not the right tool for showing the joint behavior of two specific drivers — that is exactly what a 2D table does.'],
    ],
    '2D sensitivity tables are the right tool when two variables both have meaningful uncertainty and the question is about the joint distribution. 1D tables and tornado charts answer different questions — choose the format that matches the analytical question.'),

  q(4370237, 'Career Skills', CHAPTER, 'Locking the base / bull / bear case',
    'Your model carries three scenarios: base, bull, bear. You are about to publish. The chief debate is whether to commit to a single set of numbers or present a range. What is the disciplined choice?',
    'Lock the base case as the published estimate, but present the bull and bear with explicit assumption deltas so the buy-side reader can see exactly which assumption moves the case — the range is the texture, the base case is the call; refusing to commit to a base case is a hedge dressed as analysis',
    [
      ['Publish a range of $4.00–$5.00 without a point estimate to be conservative', 'A wide range without a point estimate is not conservatism — it is non-commitment. Buy-side clients can build their own range; what they pay for is the analyst\'s actual call.'],
      ['Average the three cases to produce a single weighted number', 'Probability-weighted averaging across cases can be useful, but unless the weights are disclosed, the average looks like a hedge. And the case that the analyst actually believes (the base) gets diluted by cases the analyst does not believe.'],
      ['Publish only the bull case to be bullish on the stock', 'Publishing only the bull case as the estimate is a thesis disguised as a forecast. The base case is what the analyst expects; the bull case is the upside if the call works perfectly.'],
    ],
    'A research call requires committing to a number. Bull and bear cases add texture, but they cannot replace a base case — the buy-side reader needs to know what the analyst actually expects, with the alternatives sized as deltas so the levers are visible.'),

  q(4370238, 'Career Skills', CHAPTER, 'Reading "you\'re 2 cents above consensus"',
    'A senior tells you, "Your model is 2 cents above consensus EPS." On a $4.00 stock-EPS base, what does this signal and how should you think about the implication for the stock?',
    'Two cents on $4.00 is 50 basis points — modest in magnitude but meaningful directionally, since being above consensus heading into a print sets up a beat-or-miss scenario; the right move is to identify which line item drives the 2 cents and decide whether your conviction in that line is strong enough to defend',
    [
      ['Two cents is rounding noise and should be ignored', 'Two cents is small as a magnitude but real as a direction. Buy-side investors and the sell-side desk both watch the sign of the gap to consensus — being above versus below is a non-trivial information point heading into a print.'],
      ['Two cents means your number is wrong and should be moved to consensus', 'The point of the model is to produce an independent estimate. Moving to consensus erases the analytical value — and 50 bps deviation is well within the range where the analyst should defend their inputs.'],
      ['Two cents means you should raise the number further to differentiate more', 'Differentiation as a goal in itself is not analytical discipline. The right number is the right number — pushing it higher or lower for distance from consensus is goal-seeking in the opposite direction.'],
    ],
    'Being above or below consensus is information, not a verdict. The disciplined response is to identify the line item driving the gap, defend your conviction in that input, and frame the publication around the specific delta — not to converge, not to amplify.'),

  q(4370239, 'Career Skills', CHAPTER, 'Near-term vs normalized vs terminal rigor',
    'Your DCF has three modeling layers: near-term explicit forecast (years 1–2), normalized forecast (years 3–5), and terminal-year inputs feeding the perpetuity. Should the rigor be the same at each layer?',
    'No — the near-term should be built bottom-up driver-by-driver from disclosure and consensus; the normalized period should be modeled with named convergence to steady-state margins, capex, and growth; the terminal year should reflect mature-state economics with conservative assumptions and a stated terminal growth rate — applying explicit-period rigor to year 10 produces false precision',
    [
      ['Yes — every period should be built with the same level of bottom-up detail to be rigorous', 'Year-10 unit forecasts have no anchor — the discipline becomes false precision. The rigor of a year-1 build cannot exist where management has provided no guidance and the disclosure is too thin to support driver-level work.'],
      ['No — only the near-term matters, and the normalized period and terminal should be a single growth rate', 'Collapsing years 3–10 into a single rate skips the convergence to steady-state, which is exactly where assumptions about reinvestment, margin maturation, and capex normalization belong. That collapse hides huge inputs.'],
      ['Yes — terminal-year detail is the most important because it carries 60–70% of DCF value', 'Terminal value\'s weight is exactly why it has to be modeled with mature-state simplicity, not explicit-period detail. Pushing year-1 rigor into the terminal produces precision that is unwarranted by the disclosure available.'],
    ],
    'Forecast horizon implies forecast rigor. Driver-level work belongs in the near-term where disclosure supports it; convergence logic belongs in the middle; mature-state simplicity belongs at the terminal. Mismatching rigor to horizon produces models that are over-engineered in the wrong place.'),

  q(4370240, 'Career Skills', CHAPTER, 'Inherited model trace',
    'You inherit a coverage handoff from a departing analyst. The model is 12 tabs and has been live for 3 years. Before you trust any output, what is the audit sequence?',
    'Sum the rows and foot the columns on every IS, BS, and CFS schedule; trace depreciation from CFS to BS to confirm the linkage holds; check that the BS balances to the dollar each period; check non-cash items (D&A, SBC) flow correctly from IS to CFS; spot-check three hardcoded inputs against the source — only then trust the model output',
    [
      ['Trust the prior analyst\'s work and start adjusting forward inputs', 'The cost of finding a structural error months later, after publishing on the inherited model, is enormous. The audit on day one is the cheapest moment to find issues.'],
      ['Rebuild the model from scratch over the next two weeks', 'Full rebuilds on inherited models throw away the prior analyst\'s structural decisions and disclosure mapping — and take weeks during which the analyst has no published view. The audit-and-trust path is faster and preserves continuity.'],
      ['Check only the most recent quarter since older periods will not affect the forward view', 'Older periods feed depreciation schedules, NOL balances, retained earnings, and working capital base — they affect the forward view through the BS. Audit the full history before relying on any single period.'],
    ],
    'Inherited models require an explicit audit sequence: foot the schedules, trace the linkages, confirm the BS balances every period, spot-check inputs. The discipline is to earn trust in the model before publishing on it — analysts who skip the audit eventually publish on a hidden error.'),

  q(4370241, 'Career Skills', CHAPTER, 'Consensus EPS 5% above your number',
    'Three weeks before earnings, consensus EPS is $2.10 and your model produces $2.00 — consensus is 5% above your number. Your conviction on the gap is high (specific volume softness in one segment). What should you do?',
    'Publish a pre-quarter note flagging the negative variance to consensus with the specific evidence (segment softness, channel checks, prior-period DSO drift), so the buy-side has time to position before the print — being right on the call is only valuable if the call is on the record before the result',
    [
      ['Wait until earnings prints and then publish a beat/miss note', 'Publishing only after the result removes the analytical value entirely. The whole point of conviction is that it informs the buy-side ahead of the event — post-event commentary is reporting, not research.'],
      ['Move your number to $2.10 to align with consensus so you do not look wrong', 'Moving to consensus erases the call you have conviction in. If the segment softness is real, the analyst\'s job is to publish that view, not to hide it for fear of being out of consensus.'],
      ['Send the view privately to a few buy-side accounts but do not publish formally', 'Selective private distribution of a differentiated view raises serious compliance issues under fair-disclosure principles and firm policy. Differentiated research has to be published to the full distribution, not channeled selectively.'],
    ],
    'A 5% gap to consensus heading into a print is exactly the moment the analyst\'s independent work earns its keep. Publishing the variance with the supporting evidence is what differentiates research from reporting — and the compliance discipline is to publish broadly, not selectively.'),
]

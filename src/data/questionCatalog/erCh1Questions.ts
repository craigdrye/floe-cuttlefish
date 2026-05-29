import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// EQUITY RESEARCH CHAPTER 1 — Company and Industry Setup
// ----------------------------------------------------------------------------
// 44 questions (IDs 4370000–4370043) extending the existing Ch1 sextet in
// careerAgentGeneratedRoadmapFinance.ts (4103020, 4105080, 4105081, 4107337,
// 4107807, 4107816 — channel checks, share vs market, input cost, capacity,
// new entrants, regulation). These add depth on business-model anatomy,
// revenue drivers, segments, competitive position, industry structure,
// cycles, regulation, and peer-set construction.
//
// Voice: matches jargonBusters.ts and the IB / VC chapter expansion files.
// Every wrong-answer rationale is bespoke; the lesson on each question is
// the takeaway an ER associate should walk away with.
//
// US-context. Examples reference 10-K segment reporting, FDA, FCC, FERC,
// BCBS — not UK MAR or EU regimes (basic IFRS-vs-GAAP differences are fair
// game where the analytical point requires it).
// ----------------------------------------------------------------------------

const SOURCE = 'Floe ER Ch1 canonical bank'

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

const CHAPTER = 'Company and Industry Setup'

// Difficulty distribution target: ~30% rated 3, ~50% rated 4, ~20% rated 5.
// 44 questions: 13 at 3 (≈30%), 22 at 4 (≈50%), 9 at 5 (≈20%).
export const ER_CH1_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Business model anatomy (8)
  4370000: 3, // Revenue mix definition
  4370001: 3, // Gross vs operating vs net margin discipline
  4370002: 4, // Margin stack for a software company
  4370003: 4, // Margin stack for hardware vs services
  4370004: 4, // Unit economics framing for SaaS
  4370005: 4, // Unit economics for hardware
  4370006: 4, // Unit economics for services firm
  4370007: 5, // Recurring vs one-time mix and quality of earnings

  // Revenue drivers (7)
  4370008: 3, // Volume × price × mix decomposition
  4370009: 4, // Subscription vs transactional revenue model
  4370010: 4, // Project-based revenue and lumpiness
  4370011: 3, // Same-store / organic vs acquired growth split
  4370012: 4, // Price/mix vs volume for a beverage company
  4370013: 5, // Implicit price increases inside mix
  4370014: 4, // Currency and the reported revenue line

  // Segment reporting (5)
  4370015: 3, // What 10-K segments actually disclose
  4370016: 4, // Segment margin reading for a conglomerate
  4370017: 4, // Why "Other" segment matters
  4370018: 5, // Restated segments after a reorganization
  4370019: 3, // Segment vs geography disclosure

  // Competitive position (5)
  4370020: 3, // Market share definition and base
  4370021: 4, // Share of wallet vs market share
  4370022: 4, // Switching costs read
  4370023: 4, // Brand vs network effect moat
  4370024: 5, // Moat decay signal

  // Industry structure — Porter / concentration (5)
  4370025: 3, // Buyer power in a five-forces read
  4370026: 4, // Supplier power applied to airlines
  4370027: 4, // Concentration ratio (CR4) read
  4370028: 5, // HHI in a telco market
  4370029: 4, // Threat of substitutes vs new entrants

  // Cycles (4)
  4370030: 3, // Cyclicality definition
  4370031: 4, // Leading indicator selection for autos
  4370032: 4, // Where in the cycle a company sits
  4370033: 5, // Early vs late cycle misread

  // Regulation (4)
  4370034: 4, // FDA approval and pharma margins
  4370035: 4, // FCC spectrum and telco competition
  4370036: 4, // FERC rate cases and utility ROE
  4370037: 5, // BCBS capital rules and bank ROE

  // Peer-set selection (4)
  4370038: 3, // Peer set first principles
  4370039: 4, // Common peer-selection mistake
  4370040: 4, // Geography mismatch in peers
  4370041: 5, // Segment-mix mismatch even with the same SIC code

  // Key debates framing (2)
  4370042: 3, // Bull case / bear case structure
  4370043: 4, // What would change minds
}

export const erCh1Questions: Question[] = [
  // -------------------------------------------------------------------------
  // BUSINESS MODEL ANATOMY (4370000–4370007)
  // -------------------------------------------------------------------------
  q(4370000, 'Career Skills', CHAPTER, 'Revenue mix definition',
    'You are writing the business-model paragraph for a software company that reports "subscription" and "professional services" lines. What does "revenue mix" mean in the initiation note, and why does it matter for the model?',
    'The split of total revenue across product lines, customer types, or geographies — it matters because each slice carries different margin, growth, and durability',
    [
      ['The mix of price and volume inside the revenue line', 'That is price/volume decomposition, which is a separate driver question. Revenue mix is about which businesses make up the total, not how each one was built.'],
      ['The proportion of revenue recognized on a cash basis versus accrual', 'Recognition timing is an accounting policy question, not a business-model question. Mix is about the underlying lines, not when they post.'],
      ['The amount of revenue that comes from the top customer', 'That is customer concentration, a separate risk metric. Mix usually refers to the bundle of products or segments, not a single account.'],
    ],
    'Revenue mix is the composition of the top line by product, segment, or geography. The note should call out the mix because a 60% subscription / 40% services company forecasts and trades very differently from a 90% subscription company at the same headline revenue.'),

  q(4370001, 'Career Skills', CHAPTER, 'Gross vs operating vs net margin',
    'A first-week associate asks why your initiation discusses three different margins. Which framing is the cleanest way to explain margin discipline to a new analyst?',
    'Gross margin shows the unit economics of the product, operating margin shows the operating leverage after SG&A and R&D, and net margin folds in interest, tax, and non-operating items',
    [
      ['Gross, operating, and net margin all measure the same thing at different rounding levels', 'They measure different things — each line includes a different set of costs and tells a different story about the business.'],
      ['Gross margin is for retailers and operating margin is for software companies', 'Both margins exist for every public company. The right margin to anchor on depends on what you are testing, not on the sector.'],
      ['Net margin is the most useful margin because it is the most complete', 'Net margin is contaminated by tax rate, leverage, and non-operating items. For operating comparisons, gross and operating margin usually tell a cleaner story.'],
    ],
    'The three margins tell three different stories. Gross margin is product economics, operating margin is scaling discipline, net margin is the after-everything bottom line. The initiation should know which one carries the thesis.'),

  q(4370002, 'Career Skills', CHAPTER, 'Software margin stack',
    'A pure-play subscription software company reports 78% gross margin and 12% operating margin. What does the gap most likely tell you about the business?',
    'Heavy reinvestment in sales and marketing and R&D — the product is high-margin but the company is spending most of the gross profit to acquire customers and build features',
    [
      ['The cost of goods sold must be understated because software has no real COGS', 'Software COGS is real — hosting, customer support, third-party API costs, and revenue-share with platforms. 78% gross margin is consistent with normal software COGS, not understatement.'],
      ['The company is unprofitable and probably mismanaged', 'A 12% operating margin is a profit, not a loss, and a 66-point gap between gross and operating margin is normal for a growth-stage software company reinvesting in sales.'],
      ['Most of the operating expense is depreciation of office space', 'D&A is a small line for asset-light software companies. The dominant operating expenses are sales and marketing and R&D, not office depreciation.'],
    ],
    'The gap between gross and operating margin in software is mostly sales and marketing plus R&D. A wide gap is a reinvestment story, not a quality-of-business story — the test is whether the spend is generating durable revenue.'),

  q(4370003, 'Career Skills', CHAPTER, 'Hardware vs services margin stack',
    'You are comparing a hardware OEM (35% gross margin, 8% operating margin) with a consulting services firm (32% gross margin, 11% operating margin). Why does the hardware company show lower operating margin despite similar gross margins?',
    'Hardware carries inventory, warranty, and fixed manufacturing overhead that depress operating margin, while a services firm scales mostly on people cost which sits closer to the gross-margin line',
    [
      ['Hardware companies always have weaker management than services firms', 'Margin shape reflects business structure, not management quality. The cost stack is structurally different between the two models.'],
      ['Services firms are exempt from SG&A so all their costs sit in COGS', 'Services firms still have SG&A — finance, HR, business development. The difference is that direct labor is in COGS for services, not the absence of overhead.'],
      ['Hardware operating margin is lower because gross margin is also lower', 'The setup gave you near-identical gross margins. The operating-margin gap comes from cost stack below the gross line, not from gross margin itself.'],
    ],
    'Hardware and services can look similar at the gross line and very different at operating. Hardware has manufacturing overhead, warranty reserves, and inventory carry. Services scales on direct labor that already sits in COGS. The shape of the margin stack reveals the business model.'),

  q(4370004, 'Career Skills', CHAPTER, 'SaaS unit economics',
    'A SaaS company reports $1.2M average ACV, 80% gross margin, $400k blended CAC, and 92% gross revenue retention. Which of these is the cleanest unit-economic question for the initiation?',
    'How long does the gross-margin contribution from a new customer take to pay back CAC, and how does that payback compare to the implied customer lifetime from retention',
    [
      ['Whether the company should raise prices until ACV equals CAC', 'That is not unit economics — it is a pricing speculation that ignores demand elasticity. Unit economics is about the payback and lifetime value already implied by the current numbers.'],
      ['Whether the gross margin is high enough that CAC stops mattering', 'CAC always matters. Even at 80% gross margin, you can destroy value by spending too much to acquire customers who churn quickly.'],
      ['Whether the company should report ACV in GAAP terms', 'ACV is a non-GAAP operating metric, not a GAAP line. Reporting framework is a disclosure question, not a unit-economics question.'],
    ],
    'SaaS unit economics live at the intersection of ACV, gross margin, CAC, and retention. The cleanest test is CAC payback against implied lifetime — and the initiation should show that math rather than quote ACV in isolation.'),

  q(4370005, 'Career Skills', CHAPTER, 'Hardware unit economics',
    'A consumer electronics company sells a device at a 25% gross margin and earns an additional $40 per device over five years from accessories and service plans. How should the unit economic story read in the initiation?',
    'Combine the device gross profit with the attached aftermarket gross profit over the expected ownership period — the franchise economics, not just the hardware sale, are what drive the multiple',
    [
      ['Use only the device gross margin because that is what gets reported in COGS', 'Reported COGS is for accounting; unit economics is for understanding the franchise. Ignoring the aftermarket understates the long-term value of the customer.'],
      ['Treat the accessories revenue as one-time and exclude it from unit economics', 'Accessories from an installed base are recurring as long as the base is intact. Treating them as one-time misses the steadiest part of the cash flow.'],
      ['Average the device and service margin to get a single blended number', 'A simple average ignores timing and the size difference between the device sale and the multi-year service stream. Build the cash flow per device instead.'],
    ],
    'Hardware unit economics is rarely just the box. The aftermarket — accessories, services, consumables — often carries higher margin and longer duration than the device itself, and the initiation should sum the per-customer franchise economics across the ownership period.'),

  q(4370006, 'Career Skills', CHAPTER, 'Services unit economics',
    'A staffing-and-consulting firm bills $180/hour with a 28% gross margin and a typical engagement lasting 9 months. What is the cleanest unit-economic framing for this business?',
    'Gross margin per consultant-hour, utilization rate, and the cost of bench time between engagements — those three together determine whether the business scales profitably',
    [
      ['Subscription ARR per consultant', 'Consulting is not recurring revenue. Forcing ARR vocabulary onto project-based services masks the lumpiness and the bench-cost risk.'],
      ['Total revenue per consultant per year, ignoring utilization', 'Without utilization, revenue per head is a vanity number — two firms with the same headcount revenue can have very different profitability if one runs at 85% utilization and the other at 65%.'],
      ['CAC payback per client', 'CAC payback is a SaaS construct. For services, the cost to acquire a client is one input, but the real unit is the consultant-hour and how much of it is billable.'],
    ],
    'Services unit economics live on the consultant-hour. Bill rate, gross margin per hour, and utilization (billable hours / available hours) are the three numbers that decide whether the firm earns its keep. Bench cost between engagements is the hidden drag.'),

  q(4370007, 'Career Skills', CHAPTER, 'Recurring vs one-time mix',
    'A medical-device company reports $800M revenue split $300M instruments (one-time) and $500M consumables (recurring tied to installed base). Two competitors trade at 8x and 14x sales respectively. What does the recurring mix mean for your valuation framing?',
    'The recurring consumables stream deserves a higher multiple than the one-time instrument stream — a sum-of-parts framing on revenue mix is more honest than blending the whole company at one multiple',
    [
      ['Apply the average competitor multiple of 11x to total revenue', 'A simple average ignores the quality difference between recurring and one-time revenue. Two companies at the same headline can deserve very different multiples based on what is recurring.'],
      ['Use the highest competitor multiple because the company has consumables', 'Pegging to the highest peer overstates value. Only the consumables stream supports that multiple — the instrument piece does not.'],
      ['Use the lowest competitor multiple to be conservative', 'Conservatism is not a valuation methodology. Picking the low end without justification leaves alpha on the table and is not defensible in a price-target conversation.'],
    ],
    'Quality of earnings is partly about mix. Recurring revenue (consumables, subscriptions, service contracts) deserves a higher multiple than one-time revenue (instruments, projects, perpetual licenses). The initiation should call out the mix and value the pieces separately rather than blending.'),

  // -------------------------------------------------------------------------
  // REVENUE DRIVERS (4370008–4370014)
  // -------------------------------------------------------------------------
  q(4370008, 'Career Skills', CHAPTER, 'Volume × price × mix',
    'A consumer goods company posts +5% organic revenue growth, disclosed as +2% volume, +2% price, +1% mix. What is the right reading of that decomposition for your forecast?',
    'Volume is unit growth, price is the realized increase on like-for-like SKUs, and mix is the shift toward higher-priced products inside the same line — each has different durability and elasticity',
    [
      ['Volume, price, and mix all measure the same thing from different angles', 'They are three independent drivers. Volume is units, price is per-unit pricing on existing SKUs, and mix is the shift of the sales bag toward different products.'],
      ['Price growth is always more durable than volume growth', 'Not by default. Price-led growth can reverse fast if competitors hold the line or if elasticity bites. Volume growth from a structural category tailwind can be more durable.'],
      ['Mix is the same as gross-margin expansion', 'Mix can drive margin, but mix is a revenue-line concept — it describes a shift in what the customer is buying. Margin expansion has multiple causes.'],
    ],
    'Volume × price × mix is the disclosure most consumer companies provide. Treat each as a separate driver with separate durability and separate elasticity to the macro and to competition. Mixing them up in the model is how forecasts get sloppy.'),

  q(4370009, 'Career Skills', CHAPTER, 'Subscription vs transactional',
    'A payments company reports two lines: subscription SaaS revenue (recognized ratably over the contract) and transactional revenue (a per-swipe fee). How should the forecasting approach differ between the two lines?',
    'Subscription is forecast from beginning ARR plus net new ARR with churn and expansion modeled separately; transactional is forecast from underlying volume (e.g., GMV or swipes) times realized take rate',
    [
      ['Both lines are forecast from year-over-year growth rates because they are both revenue', 'Top-down growth rates ignore the underlying drivers. A subscription business depends on ARR mechanics; a transactional business depends on volume and take rate. Different drivers, different models.'],
      ['Subscription revenue is more volatile so it needs higher discount rates', 'Subscription revenue is usually less volatile than transactional revenue — the contract base provides visibility. The forecast approach differs, not the discount rate.'],
      ['Transactional revenue should be modeled as ARR because all revenue is recurring in some sense', 'Transactional revenue is not contractual recurring revenue. Treating swipe fees as ARR overstates visibility and gives the company credit for stickiness it does not have.'],
    ],
    'The model has to match the business. Subscription is a stock-and-flow problem on the ARR base. Transactional is a volume × take-rate problem on the underlying flow. Building both in the same template is a common rookie mistake that distorts both forecasts.'),

  q(4370010, 'Career Skills', CHAPTER, 'Project-based revenue',
    'An engineering-and-construction firm reports revenue that swings between $400M and $700M quarter to quarter depending on project milestones. The annual is consistent. How should the initiation frame this volatility?',
    'Project-based revenue is lumpy on percentage-of-completion accounting; the right anchor is backlog, book-to-bill, and trailing-twelve-month revenue rather than quarter-over-quarter compares',
    [
      ['Treat each quarterly swing as a beat or miss against trend', 'Project businesses are not run on quarterly cadence. Reading every quarter as a beat or miss generates noise trades and ignores the underlying contract economics.'],
      ['Model quarterly revenue as a four-quarter moving average and stop there', 'Smoothing hides information. The right move is to anchor on backlog and book-to-bill, which tell you whether future revenue is being created, not to average past noise.'],
      ['Re-rate the multiple every quarter based on the latest print', 'Project-business multiples move on backlog quality and execution, not on a single noisy quarter. Re-rating quarter-to-quarter is mistaking lumpiness for fundamentals.'],
    ],
    'Lumpy project revenue needs lumpy-revenue tools. Backlog, book-to-bill ratio, and TTM revenue are the right anchors. Quarter-to-quarter percentage changes in this kind of business are mostly accounting timing, not business performance.'),

  q(4370011, 'Career Skills', CHAPTER, 'Organic vs acquired growth',
    'A specialty chemicals company reports +18% revenue growth: +4% organic, +12% from acquisitions, +2% currency. Which line is the cleanest indicator of underlying business momentum?',
    'Organic growth at +4%, because it strips out the acquired revenue (which is bought, not earned) and the currency effect (which is translation, not demand)',
    [
      ['Total reported growth at +18% because that is what shareholders receive', 'Shareholders receive total growth, but the initiation needs to know whether the business is winning on its own or buying its way to a top-line number. Reported growth blends both.'],
      ['Acquired growth at +12% because deals create the most value', 'Acquired growth tells you the company is spending capital on M&A, not that the underlying business is growing. Reliance on M&A often means the organic business is mature or shrinking.'],
      ['Constant-currency growth at +16% because it removes FX noise', 'Constant-currency strips FX but still includes acquired revenue. That overstates underlying momentum because the deals were funded with capital, not with organic demand.'],
    ],
    'Reported growth is total. Organic growth is what the existing business did. The initiation should separate the two because a company growing 4% organically while levering up to acquire is a very different story from one growing 18% organically.'),

  q(4370012, 'Career Skills', CHAPTER, 'Price/mix vs volume — beverage',
    'A beverage company reports +7% revenue growth with -1% volume and +8% price/mix. The CEO says the company "is winning with consumers". What is the more careful read?',
    'Volume is down so the company is selling fewer units; the revenue beat is price and trade-up. That is a margin story for now, but it can reverse if elasticity bites or if competitors hold price',
    [
      ['Volume decline does not matter because revenue grew', 'Volume decline matters — it means fewer cans, bottles, or cases left the warehouse. Price-led growth without volume support is a margin trade, not a market-share trade.'],
      ['The company is winning because price/mix grew faster than volume fell', 'That is the CEO\'s framing. The analyst test is whether the price was taken in a category where competitors followed or whether the company is over-pricing and losing units.'],
      ['Negative volume always means the company is losing share', 'Not always — the whole category may have shrunk because of weather, lapping of stimulus, or a price-led downturn. The right comparison is volume versus the category, not in isolation.'],
    ],
    'Price/mix growth on negative volume is a real revenue dynamic, but it is fragile if competitors do not follow or if consumers trade down. The initiation should separate the two and check the volume number against category data before celebrating the print.'),

  q(4370013, 'Career Skills', CHAPTER, 'Implicit price inside mix',
    'A luxury goods company says price/mix was +6% with "no formal price increase taken". How can mix produce +6% without explicit pricing?',
    'The company can sell a higher proportion of more expensive items, push customers toward limited editions or premium tiers, or shift the channel mix toward full-price stores — all of which raise realized price without changing list price',
    [
      ['Mix and price are interchangeable so the disclosure is meaningless', 'They are related but not interchangeable. Price is per-SKU pricing on existing items. Mix is the shift in what is being sold. The +6% disclosure is real revenue uplift, just earned differently.'],
      ['The company must be misreporting because revenue cannot grow without a price increase', 'Revenue per unit can grow through mix alone. Selling more of an expensive handbag and less of a cheap one raises average revenue per customer with zero change to list prices.'],
      ['Mix improvements always reverse within a year', 'Mix improvements can be structural — a brand that successfully premiumizes can hold the higher mix for years. Assuming reversion is a default that the company is just elevating its bag.'],
    ],
    'Mix is a quiet form of price taking. A luxury or premium brand can run +5% to +8% price/mix for years without ever raising a list price by selling a richer bag. The initiation should read mix carefully and ask whether it is sustainable or borrowed from a one-off product launch.'),

  q(4370014, 'Career Skills', CHAPTER, 'Currency and reported revenue',
    'A US-headquartered industrial company sells 60% of revenue outside the US. The dollar strengthens 10% against its mix of foreign currencies during the year. How should the initiation handle this in the revenue forecast?',
    'Disclose constant-currency growth alongside reported growth so the reader can see the underlying demand story separately from FX translation, which the company does not control and which reverses over time',
    [
      ['Forecast revenue in reported dollars only because that is what hits the income statement', 'Reported dollars is what the income statement shows, but the initiation needs to separate operating performance from FX translation. Otherwise a weak underlying business looks healthy when FX helps.'],
      ['Forecast all revenue at the spot rate at year-end', 'Spot at year-end captures a single moment, not the period. The right approach is the period average rate, with explicit disclosure of constant-currency growth.'],
      ['Hedge the FX exposure in the model and assume zero currency impact', 'The model should reflect the company\'s actual hedging program, not assume one. Most industrials hedge transaction exposure but not translation, so reported revenue still moves with FX.'],
    ],
    'FX translation moves reported revenue but is not a demand signal. The initiation should always show constant-currency growth so the reader can see underlying performance. The income statement carries reported; the analysis carries both.'),

  // -------------------------------------------------------------------------
  // SEGMENT REPORTING (4370015–4370019)
  // -------------------------------------------------------------------------
  q(4370015, 'Career Skills', CHAPTER, 'What 10-K segments disclose',
    'You are reading a 10-K with three reportable segments. Under ASC 280, what is the company actually required to disclose per segment?',
    'Revenue, a measure of profit or loss reviewed by the chief operating decision maker, total assets, and certain reconciling items — defined by how management runs the business',
    [
      ['Full income statement and balance sheet per segment with cash flow', 'Companies are not required to disclose a full income statement or full balance sheet per segment. They disclose the profit measure their CODM reviews — typically operating income or a similar measure — and total assets.'],
      ['Only revenue per segment, nothing about profitability', 'Segments require a profit measure as well as revenue. Revenue alone is not sufficient under ASC 280.'],
      ['Whatever splits the analyst community asks for in a given quarter', 'Segment disclosure is set by management based on how the business is run, not by sell-side requests. The CODM lens is the standard.'],
    ],
    'Segments under ASC 280 follow the management approach: the company reports the way the chief operating decision maker reviews the business. Revenue, segment profit, and assets are required; depreciation and capex are commonly disclosed but not always.'),

  q(4370016, 'Career Skills', CHAPTER, 'Conglomerate segment margins',
    'A diversified industrial reports three segments at 8%, 22%, and 14% operating margin. Headline operating margin is 15%. The 22%-margin segment is 20% of revenue. What does the segment view add to the story?',
    'The 22%-margin segment punches well above its weight in operating income and probably deserves a higher multiple than the rest — a sum-of-parts view will value the company differently than the blended one',
    [
      ['Segment margins should be averaged to confirm the headline 15%', 'The headline is already the revenue-weighted operating margin. Re-deriving it does not add information; comparing each segment to its peer group does.'],
      ['The lowest-margin segment is always the one to divest', 'Margin alone does not determine divestiture logic. Capital intensity, growth, and how each segment uses shared infrastructure also matter. A low-margin segment may produce most of the cash flow.'],
      ['Segments with above-average margin are always understated by management', 'There is no general bias in segment disclosure direction. The right move is to compare each segment to its standalone peers, not to assume management is hiding value.'],
    ],
    'Segment data is the unlock on a conglomerate. The blended margin obscures both winners and losers. Sum-of-parts valuation treats each segment as a standalone business and assigns it the multiple its peer group commands — that is how the initiation finds the value the blend hides.'),

  q(4370017, 'Career Skills', CHAPTER, 'Why Other segment matters',
    'A retailer reports four named segments plus a fifth line called "Other" that is 12% of revenue and 30% of operating income. What is the right analyst response?',
    'Treat "Other" as a high-priority question — a small revenue line carrying disproportionate operating income often hides corporate eliminations, real estate gains, or a high-margin subsegment that is not separately disclosed',
    [
      ['Ignore the Other line because it is small and unnamed', 'A line that contributes 30% of operating income is not small in profit terms. Ignoring it because of its revenue size misses where the earnings actually come from.'],
      ['Assume the Other line is just rounding and corporate overhead', 'Corporate overhead reduces operating income; it does not contribute 30% of it. Something specific is generating that profit, and the initiation should know what.'],
      ['Pro-rate the Other revenue across the named segments', 'Pro-rating fabricates segment data the company did not disclose. The right move is to ask the IR team and read the footnotes, not to invent allocations.'],
    ],
    'A small revenue line with outsized profit usually hides something — sometimes a high-margin sub-business, sometimes one-time real-estate or licensing gains. The initiation should call out the Other line and flag the question: is this recurring or non-recurring, and what is in it?'),

  q(4370018, 'Career Skills', CHAPTER, 'Restated segments',
    'A company reorganizes into new segments and restates prior periods on the new basis. The old segments showed a profitable "Software" line; the new segments roll software into a broader "Solutions" segment. What should the analyst do?',
    'Rebuild the historical model on the restated basis using the new disclosures, and ask management for at least the most recent two years of legacy detail to validate trend continuity',
    [
      ['Use the old segment data going forward because the trend is intact', 'Old segments are not going to be disclosed going forward. The model has to match what the company will report, which is the new structure.'],
      ['Ignore the restatement and continue forecasting the old segments', 'Forecasting line items the company will not disclose is a dead end — there is no print to compare against and no way to update estimates.'],
      ['Average the old and new segments together to bridge the periods', 'Averaging unrelated segment definitions creates a number that means nothing. The clean approach is to rebuild on the new basis.'],
    ],
    'Segment restatements are common and they break time-series. The disciplined move is to rebuild the model on the new basis, ask IR for legacy detail to anchor continuity, and warn the reader that comparisons before the restatement should be read carefully.'),

  q(4370019, 'Career Skills', CHAPTER, 'Segment vs geography',
    'A consumer company reports two reportable segments (Beauty, Personal Care) and separately discloses revenue by geography (Americas, EMEA, Asia). What is the relationship between these two views?',
    'They are independent cuts of the same total revenue — segment is by product line, geography is regional. The same dollar of revenue lives in one segment and one geography simultaneously',
    [
      ['Geographic revenue should sum to segment revenue', 'Both views are total-revenue cuts, so each sums to the same total. They do not sum to each other — they are orthogonal slices of the same pie.'],
      ['Geography is more important than segment for global companies', 'Both views matter. Segment shows what the company sells; geography shows where it sells it. Either alone misses half the picture.'],
      ['Geography disclosure is optional under US GAAP', 'Geographic disclosure of revenue and long-lived assets is required by ASC 280 when geographies are material, not optional.'],
    ],
    'Segments and geographies are independent cuts of total revenue. The initiation should look at both — segment tells you what the company sells, geography tells you where the demand comes from, and the cross-tab is where the interesting questions live.'),

  // -------------------------------------------------------------------------
  // COMPETITIVE POSITION (4370020–4370024)
  // -------------------------------------------------------------------------
  q(4370020, 'Career Skills', CHAPTER, 'Market share definition',
    'You write "Company X has 12% market share" in the initiation. Your senior asks what denominator you used. Why does that question matter?',
    'Market share is meaningless without the denominator — total addressable market, served available market, and category as the company defines it can each produce a very different share number for the same company',
    [
      ['Market share is always calculated against the total industry revenue', 'Total industry revenue can be defined narrowly or broadly. A company might have 12% of its served market and 2% of the total addressable market — both are valid, neither is implicit.'],
      ['The denominator does not matter because share trends are what count', 'Trends only make sense if the denominator is consistent. Comparing share against different denominators across years gives a misleading trajectory.'],
      ['Share is a regulatory definition set by the FTC', 'Share definitions vary by industry and by source (Nielsen, IDC, IRI, internal company estimates). The FTC has its own definitions for antitrust review, but those are not the default for research notes.'],
    ],
    'A share number without a denominator is decoration. The initiation should always disclose the source (third-party data, company estimate, internal proxy) and the denominator (TAM, SAM, narrow category) so the reader can interpret what 12% actually means.'),

  q(4370021, 'Career Skills', CHAPTER, 'Share of wallet',
    'A B2B software company has 15% market share but only 8% share of wallet at its existing customers. What does the gap suggest?',
    'The company has acquired customers but is under-penetrated inside them — there is upsell headroom, and growth can come from expanding within the existing base rather than only winning new logos',
    [
      ['Share of wallet and market share always converge over time', 'They do not converge automatically. A company can hold flat market share while expanding share of wallet, or vice versa, depending on its motion.'],
      ['Lower share of wallet means the product is failing', 'Not necessarily — many B2B companies start narrow (one workflow) and expand. Low share of wallet is the headroom story, not the failure story, unless retention is also weak.'],
      ['Share of wallet is irrelevant if market share is rising', 'Market share growth from new logos can mask thin penetration inside each customer. A company can win logos and still be one feature decision away from displacement.'],
    ],
    'Market share is share of all customers; share of wallet is share of one customer\'s spend on the category. The gap is the upsell opportunity. The initiation should look at both because growth can come from either motion and the durability is different.'),

  q(4370022, 'Career Skills', CHAPTER, 'Switching costs read',
    'A workflow software company has 96% gross retention and a 30-month average implementation. Which switching-cost reading is the cleanest?',
    'Long implementation creates real costs to leave (data migration, retraining, process redesign), and the high retention is consistent with that — the moat is operational embeddedness, not contractual lock-in',
    [
      ['96% retention proves the product is best-in-class', 'High retention can come from real product strength or from high switching cost. The two are different moats and they decay differently. Retention alone does not distinguish.'],
      ['Long implementation is a negative for the business', 'It is friction to land, but once landed it is a positive — the same friction protects the installed base. The initiation has to weigh both sides.'],
      ['Switching costs always erode over time as competitors copy the product', 'Some switching costs (data, custom workflows, certifications, integrations) do not erode just because a competitor has feature parity. They are operational, not feature-based.'],
    ],
    'Switching cost is one of the most durable moats but the analyst has to identify which kind: contractual, data, workflow, integration, certification, or relationship. Long implementation and high retention together are a fingerprint of operational embeddedness — that is the moat to underwrite.'),

  q(4370023, 'Career Skills', CHAPTER, 'Brand vs network moat',
    'Two consumer companies have similar 25% operating margins. One is a beverage with a 100-year-old brand; one is a social platform with a two-sided network. Why do these moats decay differently in the initiation?',
    'Brand moats decay slowly through marketing and category relevance and can be sustained with steady reinvestment; network moats either get stronger (positive feedback) or collapse quickly (a tipping point to a competitor) — the risk shapes are different',
    [
      ['Both moats are the same because they both produce 25% margins', 'Same margin today, different durability tomorrow. The initiation\'s job is to underwrite the path of those margins, not just snapshot the current level.'],
      ['Brand moats are stronger than network moats by default', 'Not by default. Strong networks can produce very high durability (the loser of a tipping point is gone, the winner is hard to attack). The two are different, not ranked.'],
      ['Network moats never collapse because they get bigger', 'Networks can tip — a smaller, better-targeted network can pull users from a larger one (Snap pulled teens from Facebook, TikTok pulled them from Instagram). The same dynamics that build them can dismantle them.'],
    ],
    'Different moats decay on different curves. Brand decays slowly with steady cash maintenance; network either compounds or tips, sometimes within a single quarter. The initiation should name the moat type and describe what would break it, not just assert that one exists.'),

  q(4370024, 'Career Skills', CHAPTER, 'Moat decay signal',
    'A company\'s operating margin has compressed from 28% to 22% over three years while revenue continues to grow. Management blames "investment cycle". What is the careful research read?',
    'Margin compression with continued growth is often the early signal of moat decay — the question is whether the spend is producing durable returns (real reinvestment) or whether competition is forcing the company to spend more to hold its position',
    [
      ['Margin compression with growth is always a positive sign of investment', 'Sometimes it is reinvestment; sometimes it is competitive pressure dressed up as investment. The initiation has to distinguish, not accept the management label.'],
      ['Growth covers margin compression because the dollar profit is rising', 'Dollar profit can rise while ROIC falls. The initiation cares about returns on the incremental capital, not just absolute profit growth.'],
      ['Margin compression is always reversible with cost cuts', 'If the compression is structural (price competition, customer demands for more services, channel shift), cost cuts will not reverse it. The diagnosis matters more than the prescription.'],
    ],
    'Moat decay rarely announces itself. The pattern is usually growing revenue, compressing margin, and rising "investment". The senior analyst\'s job is to ask whether the spend is real reinvestment with returns or whether it is the cost of holding share against new entrants — that is the difference between buy and avoid.'),

  // -------------------------------------------------------------------------
  // INDUSTRY STRUCTURE — PORTER / CONCENTRATION (4370025–4370029)
  // -------------------------------------------------------------------------
  q(4370025, 'Career Skills', CHAPTER, 'Buyer power read',
    'An auto-parts supplier has three OEM customers that together represent 75% of revenue. Each customer negotiates pricing annually. Applying buyer-power logic, what is the structural implication?',
    'Buyer power is high — concentrated customers with annual repricing can extract margin from the supplier, and the long-term operating margin ceiling is set by what the OEMs allow',
    [
      ['Buyer power is irrelevant because the supplier has technical specifications locked in', 'Specifications matter but they erode over time as alternative suppliers qualify in. Concentrated customers with annual repricing will eventually find the alternatives or develop them.'],
      ['Buyer power is low because the supplier is paid in full and on time', 'Payment terms are not the buyer-power question. The question is who sets the price and what fallback the buyer has if they walk — and three OEMs negotiating annually have many fallbacks.'],
      ['Buyer power is high but offset by long-term contracts', 'Long-term contracts in auto-parts usually have annual price reviews and volume bands. They do not insulate the supplier from buyer power, they ratify it on a calendar.'],
    ],
    'Buyer power compresses supplier margins over time even when the immediate relationship looks healthy. Concentrated customers with frequent repricing are the textbook setup, and the initiation has to anchor margin assumptions on what the buyers will tolerate, not on what the supplier wants.'),

  q(4370026, 'Career Skills', CHAPTER, 'Supplier power — airlines',
    'US airlines buy planes from two airframe makers (Boeing and Airbus) and engines from a handful of OEMs. Which supplier-power read is correct?',
    'Supplier power is structurally high on aircraft and engines because the choice set is concentrated and switching cost (fleet commonality, pilot training, maintenance) is enormous',
    [
      ['Supplier power is low because airlines order in large volume', 'Large volume from one buyer to a duopoly is not power — the supplier can still set price because the buyer has nowhere else to go. Volume is not leverage when alternatives are absent.'],
      ['Supplier power is balanced because both sides negotiate', 'Negotiation happens; outcome is set by structure. Two suppliers facing many airlines with multi-decade fleet commitments tilts the structure to the suppliers, not to the buyers.'],
      ['Supplier power applies to airframes but not to fuel', 'Jet fuel is a commodity with many sources — supplier power there is low. The framing should distinguish concentrated supply (planes, engines) from commoditized supply (fuel).'],
    ],
    'Supplier power depends on concentration on the supply side and switching cost on the buyer side. For airlines, airframes and engines are duopoly/oligopoly inputs with enormous switching cost (training, maintenance, parts inventory). Fuel and labor have different dynamics — name the input before you name the force.'),

  q(4370027, 'Career Skills', CHAPTER, 'CR4 read',
    'In a packaged food category, the top four firms (CR4) hold 68% share. The next 10 firms hold 25%, and the remaining hundreds of firms hold 7%. What does this concentration tell you?',
    'The category is moderately concentrated — large incumbents have pricing discipline and shelf-space advantage, but the long tail can chip away through innovation, private label, or direct-to-consumer channels',
    [
      ['CR4 of 68% means the market is a pure oligopoly with no competition', 'Pure oligopoly implies tacit coordination on price and quantity. CR4 of 68% with a 25% next-tier is not pure — there is real competitive pressure at the margin, especially from the next 10.'],
      ['CR4 says nothing about competition; only HHI matters', 'HHI is a richer measure but CR4 is still informative, especially for shelf-driven categories. The right move is to use both, not to dismiss CR4.'],
      ['High CR4 always means high margins for the top four', 'Concentration and margin are correlated but not deterministic. Private-label penetration, retailer power, and inelastic vs elastic demand all moderate the link.'],
    ],
    'CR4 (and CR8) is a quick concentration read. 60–80% suggests pricing discipline among the leaders but real competition at the margin. The initiation should pair CR4 with private-label share, retailer concentration, and category growth before concluding on pricing power.'),

  q(4370028, 'Career Skills', CHAPTER, 'HHI in telco',
    'The US wireless market has three national carriers (Verizon, AT&T, T-Mobile) with roughly 33%, 32%, and 31% share, plus smaller players totaling 4%. The Herfindahl-Hirschman Index (HHI) is roughly 33² + 32² + 31² + small ≈ 3,100. What does that HHI tell you?',
    'HHI above ~2,500 is the DOJ/FTC definition of a highly concentrated market — pricing tends to be disciplined and any further consolidation faces serious antitrust scrutiny',
    [
      ['HHI of 3,100 means the market is competitive because three carriers fight each other', 'Three large carriers can still produce disciplined pricing — the absence of a fourth credible national competitor is exactly what HHI captures. Highly concentrated does not mean uncompetitive language, it means structurally so.'],
      ['HHI is a regulatory tool only and has no analytical use', 'HHI is the standard concentration metric in research, antitrust, and competition policy. It is broadly used by analysts to size pricing risk and to anticipate merger review.'],
      ['HHI of 3,100 means the leading firm has 31% share', 'HHI sums squared shares — it is a market structure measure, not a leader-share measure. A single firm with 56% share would produce roughly the same HHI.'],
    ],
    'HHI thresholds are DOJ/FTC convention: <1,500 unconcentrated, 1,500–2,500 moderately concentrated, >2,500 highly concentrated. In wireless and other infrastructure-heavy industries, the regulators read HHI before approving combinations — and analysts read it to anchor pricing-power assumptions.'),

  q(4370029, 'Career Skills', CHAPTER, 'Substitutes vs new entrants',
    'A cable broadband incumbent faces (a) wireless 5G home internet from existing wireless carriers and (b) potential fiber overbuilders backed by private capital. Which is "threat of substitutes" and which is "threat of new entrants"?',
    '5G home internet is threat of substitutes (different technology delivering the same job-to-be-done) and fiber overbuilders are threat of new entrants (same technology delivered by a new competitor)',
    [
      ['Both are threats of new entrants because both are new to broadband', 'Substitution is about technology and delivery, not vintage. Wireless home internet is a different product category serving the same need — that is substitution, not entry.'],
      ['5G is a substitute and overbuilders are not a threat because they take years to build', 'Slow does not mean absent. Overbuilders backed by private capital take years to build but reshape pricing power once they arrive. The initiation has to underwrite the eventual presence.'],
      ['Substitution requires perfect equivalence so 5G does not qualify until quality matches', 'Substitution does not require perfect equivalence — it requires that enough customers find the alternative acceptable for their use case. 5G already meets that bar for a meaningful slice of households.'],
    ],
    'Porter\'s framework distinguishes substitutes (different products doing the same job) from new entrants (same product from a new competitor). The two have different defenses — pricing/quality vs capacity/scale — and the initiation should name them separately so the defense strategy makes sense.'),

  // -------------------------------------------------------------------------
  // CYCLES (4370030–4370033)
  // -------------------------------------------------------------------------
  q(4370030, 'Career Skills', CHAPTER, 'Cyclicality definition',
    'You write that a company is "cyclical" in the initiation. A new associate asks what that actually means. What is the cleanest definition?',
    'Earnings rise and fall with the broader economic or industry cycle in a pattern that is at least partly predictable from macro indicators — the company has limited control over the timing',
    [
      ['Cyclical means earnings are volatile from year to year', 'Volatility alone is not cyclicality. A company can be volatile because of idiosyncratic events (a product launch, a recall). Cyclical means the volatility tracks a cycle.'],
      ['Cyclical means the company always loses money in recessions', 'Many cyclicals stay profitable through recessions — they just earn less. Cyclical is about the direction and amplitude of earnings change, not the sign of earnings.'],
      ['Cyclical means earnings move in seasonal patterns within the year', 'Seasonality is intra-year. Cyclicality is over years and tied to a broader cycle. Mixing the two leads to forecasts that miss the point.'],
    ],
    'Cyclical means earnings track a cycle — economic, industry-specific, or commodity-driven — over multi-year periods. The initiation has to identify which cycle and where in it the company sits. Confusing cyclicality with volatility or seasonality is a common rookie error.'),

  q(4370031, 'Career Skills', CHAPTER, 'Auto leading indicators',
    'For a US auto OEM, which set of leading indicators is most useful for the initiation?',
    'Consumer confidence, used-car pricing, dealer inventory days, incentive spend per vehicle, and credit availability for sub-prime auto loans',
    [
      ['Just look at the company\'s monthly sales because they are the most direct read', 'Monthly sales are coincident, not leading. By the time sales prints arrive, the cycle has moved. Leading indicators have to point at what is coming next.'],
      ['GDP growth alone is sufficient because autos are GDP-sensitive', 'GDP is too aggregate and too lagged. Auto-specific indicators (incentives, inventory, used-car pricing) move first and matter more for the OEM forecast.'],
      ['Use the OEM\'s own guidance as the leading indicator', 'Guidance is the company\'s view, not the analyst\'s edge. The job of the initiation is to triangulate independent indicators against guidance, not to copy it.'],
    ],
    'Leading indicators give the analyst time. For autos, dealer inventory days, incentive spend, used-car prices, and credit availability all move ahead of OEM revenue. The initiation should pick indicators that turn earlier than the company\'s own prints — that is where the variant perception lives.'),

  q(4370032, 'Career Skills', CHAPTER, 'Where in the cycle',
    'A semiconductor capital-equipment company has reported four consecutive quarters of record bookings, the industry is running at 90%+ utilization, and customer announcements include large new fab builds. Where in the cycle is the company?',
    'Late in an upcycle — record bookings, peak utilization, and customer capacity announcements are classic late-cycle signals; the right question is when bookings turn, not whether',
    [
      ['Early in an upcycle because bookings are still hitting records', 'Record bookings at peak utilization are the late-cycle signature. Early-cycle bookings come off depressed levels with under-utilized capacity, not from records at full utilization.'],
      ['Mid-cycle because revenue growth is still strong', 'Mid-cycle is when revenue grows on still-rising utilization. Once utilization is at 90%+ and customers are announcing new capacity, the leading edge of the next supply wave is already in motion.'],
      ['The cycle does not apply because the company has secular AI tailwinds', 'Secular tailwinds shift the trend, not the cycle. A growth trend with cyclical amplitude is still cyclical — the swings happen around the trend line.'],
    ],
    'Cycle position is read from order rates, utilization, and customer behavior together. Record bookings + peak utilization + capacity announcements = late cycle, and the analyst job is to forecast the bookings rollover, not to extrapolate the records. Calling late-cycle correctly is one of the highest-payoff calls in research.'),

  q(4370033, 'Career Skills', CHAPTER, 'Early vs late cycle misread',
    'A housing-materials company has just printed a 20% revenue decline year-over-year. The senior wants to call the bottom. Which set of evidence would actually support an "approaching bottom" call rather than extrapolating the decline?',
    'Inventory destocking at distributors finishing, single-family housing starts stabilizing month-over-month, and mortgage application volume turning up — supply-side and demand-side signals together, not just one',
    [
      ['The 20% decline itself is enough to call the bottom because cycles mean-revert', 'Mean reversion is the long-term tendency, not a timing tool. "It went down a lot" is not the same as "it is about to go up" — the analyst needs evidence that the underlying drivers have turned.'],
      ['Management\'s comment that they "see green shoots" in the order book', 'Management commentary on green shoots is anecdotal and often wrong at turns. The initiation needs independent indicators that are checkable, not company sentiment.'],
      ['A single month of sequential improvement in revenue', 'One month can be noise — supply chain catch-up, weather, a comp distortion. Bottom calls require multiple indicators turning together, not a single sequential print.'],
    ],
    'Calling cycle bottoms is hard precisely because the loudest signals (sentiment, single prints, management quotes) tend to mislead. The disciplined approach is to look for several independent indicators turning together — destocking complete, demand stabilizing, leading data improving. One signal is not enough.'),

  // -------------------------------------------------------------------------
  // REGULATION (4370034–4370037)
  // -------------------------------------------------------------------------
  q(4370034, 'Career Skills', CHAPTER, 'FDA approval and pharma margins',
    'A specialty pharma company has a Phase 3 drug with PDUFA action date in six months. How does FDA approval logic shape the initiation\'s margin and revenue framing?',
    'Approval probability times projected peak sales times time-to-genericization sets the franchise value — the initiation has to model the binary outcome (approve / reject / CRL) and the post-approval ramp separately',
    [
      ['Assume approval because Phase 3 data was positive and proceed to sales forecasting', 'Positive Phase 3 is necessary but not sufficient — manufacturing inspections, labeling negotiations, and panel votes can produce CRLs. The binary outcome needs to be probability-weighted.'],
      ['Assume rejection and run a downside scenario only', 'One-sided framing misprices the asset. The honest approach is a probability tree across approve, approve-with-restrictions, and CRL/reject.'],
      ['FDA approval is irrelevant to financial forecasting because it is regulatory not commercial', 'FDA approval is the gate to all commercial revenue. There is no commercial story without it. Treating regulation as separate from financials is a category error in pharma.'],
    ],
    'Pharma economics is regulation gated. The initiation has to model approval probability, peak sales after launch, the ramp curve, and time to loss-of-exclusivity (LOE) when generics or biosimilars enter. Skipping any of these is how analysts mis-size the franchise.'),

  q(4370035, 'Career Skills', CHAPTER, 'FCC spectrum and telco',
    'The FCC is auctioning a new band of mid-band spectrum. How does spectrum policy shape competitive position for the three national wireless carriers?',
    'Spectrum is the raw input to wireless capacity — carriers without enough mid-band spectrum face capacity constraints on 5G that force them either to spend more on densification or to lose share to better-spectrum-positioned rivals',
    [
      ['Spectrum auctions do not affect competition because all carriers can bid', 'All carriers can bid but bid prices, capital available, and existing spectrum holdings are very different. Auction outcomes redistribute capacity unevenly.'],
      ['Spectrum is mostly a balance-sheet question, not a competitive one', 'Spectrum cost lives on the balance sheet (intangible asset), but its value is competitive — it determines who can deliver 5G capacity and where. Treating it as a balance-sheet line misses the strategic stake.'],
      ['Spectrum policy only matters once new bands are deployed', 'Auction outcomes shape capex plans, build sequencing, and competitive positioning for years before deployment. The market re-prices carriers on auction outcomes immediately.'],
    ],
    'FCC spectrum policy is the supply curve for wireless capacity. Which carrier gets which band, at what price, with what build deadlines, determines who can serve which markets at 5G quality. The initiation should know the spectrum position of each carrier and the auction roadmap — that is competitive position translated into MHz.'),

  q(4370036, 'Career Skills', CHAPTER, 'FERC rate cases',
    'A US regulated electric utility files a rate case asking FERC (and/or the state PUC) for a 10.5% allowed ROE. The current allowed ROE is 9.8%. How does this shape the earnings forecast?',
    'The allowed ROE on rate base, applied to the equity portion of the capital structure, sets the upper bound on regulated earnings; the case outcome (granted, partial, denied) and any settlement structure are the swing factors',
    [
      ['Utility earnings are set by management decisions about cost control', 'Cost control matters for earned vs allowed ROE, but the allowed ROE itself is set by the regulator. The ceiling is regulatory, not managerial.'],
      ['The 10.5% request will be granted in full because that is what management asked', 'Regulators rarely grant the full ask — most rate cases settle below the request. Modeling at the requested ROE overstates earnings.'],
      ['ROE is a stock-market concept and does not apply to utility earnings forecasts', 'For regulated utilities, allowed ROE on rate base is literally how earnings are calculated. It is not a stock-market concept — it is the operating model.'],
    ],
    'Regulated utility earnings = allowed ROE × equity portion of rate base, plus pass-through items. The initiation has to know the rate-case schedule, the asks, the historical settlement pattern, and the implied earned-ROE over time. Rate-case outcomes are the single biggest forecast input for the sector.'),

  q(4370037, 'Career Skills', CHAPTER, 'Bank capital under BCBS',
    'A US global systemically important bank (G-SIB) has a CET1 ratio of 12.5% against a regulatory minimum of roughly 11% (including buffers and surcharge). How does the Basel III capital framework shape the equity story?',
    'CET1 capital relative to risk-weighted assets sets the binding constraint on buybacks, dividends, and growth — the gap to required capital determines how much excess capital can be returned, and stress-test outcomes can move the required level',
    [
      ['Bank earnings forecasts can ignore capital ratios because they are regulatory not operational', 'Capital ratios determine buyback and dividend capacity, which directly drives EPS through share count. Treating capital as separate from EPS is wrong for banks.'],
      ['The 12.5% CET1 means the bank is over-capitalized and should buy back stock immediately', 'Over the minimum is not always excess — stress-test outcomes, management buffers, and pending regulatory changes determine usable excess. 1.5 percentage points sounds like a lot but can disappear under a CCAR scenario.'],
      ['Basel rules are written by the Bank for International Settlements so US banks are exempt', 'BCBS sets the international framework; the Fed and OCC implement it in the US. US G-SIBs are explicitly subject to Basel III plus the G-SIB surcharge plus stress-capital buffer.'],
    ],
    'Banks are capital-constrained businesses. The Basel III framework (CET1 minimum + capital conservation buffer + countercyclical buffer + G-SIB surcharge + stress capital buffer) sets the floor; the bank\'s actual ratio sets the ceiling on capital return. The initiation has to model both the earned capital and the constraint to get to the EPS story.'),

  // -------------------------------------------------------------------------
  // PEER-SET SELECTION (4370038–4370041)
  // -------------------------------------------------------------------------
  q(4370038, 'Career Skills', CHAPTER, 'Peer set first principles',
    'Your senior asks you to build a peer set for a $5B mid-cap industrial that makes specialty pumps for water-treatment plants. What is the right framing for peer-set selection?',
    'Peers overlap on product line, end-market, customer type, size, and geography — the goal is comparability of business mix, not similarity of sector label or headline market cap',
    [
      ['Pick all the largest companies in the same SIC code', 'SIC code is a starting filter but not a peer set. A company with the same code can have wildly different segment mix, end-markets, or geographies. Comparability is about business, not classification.'],
      ['Pick the smallest companies in the same sector because they grow faster', 'Peer comparability is not about growth speed. Peers should look like the target on operating dimensions; a portfolio of fast-growers is a thematic basket, not a peer set.'],
      ['Pick whatever competitors the company names in its 10-K and stop there', 'Companies often name aspirational or strategic peers in their filings, not analytic peers. Use it as one input, not the answer.'],
    ],
    'Peer selection is about business overlap, not sector label. The cleanest peer set has products, end-markets, customer profiles, and geographies that look like the target. Size matters too — comparing a $5B company to a $500B megacap or a $200M micro distorts multiples even when the businesses overlap on paper.'),

  q(4370039, 'Career Skills', CHAPTER, 'Common peer mistake',
    'A junior analyst proposes the peer set for a regional grocer: she picks Walmart, Costco, and Amazon. What is wrong with that peer set?',
    'Those are the largest names but they are different businesses (general merchandise + warehouse club + e-commerce platform) at very different scale — none is a clean operating comparable for a regional grocer',
    [
      ['The peer set is fine because they are all retailers', 'Retail is too broad a category for peer-set work. A regional grocer competes for groceries against other grocers, not for general merchandise against Walmart\'s full assortment.'],
      ['The peer set is fine because they are the largest competitors', 'Largest is not the same as comparable. A $5B regional grocer and Walmart at over $600B revenue do not trade on the same multiples because the businesses scale and operate completely differently.'],
      ['The peer set is fine because Amazon is the future of grocery', 'Strategic relevance is not operating comparability. Amazon\'s grocery business is a small fraction of its total and Amazon trades on its non-grocery economics. A peer set has to look like the target on operating mix.'],
    ],
    'The "pick the biggest" peer-set error is one of the most common rookie mistakes. Comparable means the peers do roughly what the target does, at roughly the target\'s scale, in roughly the same geography. Picking the largest names gets you headlines, not analysis.'),

  q(4370040, 'Career Skills', CHAPTER, 'Geography mismatch',
    'A US-listed company selling 90% in North America is being compared to a European-listed peer selling 90% in Europe. Same product, same scale. Why might the peer-set comparison still mislead?',
    'Different end-market growth, different competitive intensity, different regulatory regimes, and different listing-venue multiples can produce a sustained valuation gap that has nothing to do with the underlying operations',
    [
      ['Geography does not matter once you adjust for currency', 'Currency is the smallest of the gaps. The bigger issues are demand growth, competition, and listing-venue rerating that survive any FX adjustment.'],
      ['The European peer should always trade at a discount to US peers', 'Discounts and premiums vary by sector and over time. Some European sectors trade above US peers; some below. "European discount" as a default is lazy.'],
      ['Same product means same multiple, full stop', 'Same product but different markets is still different economics. Where you sell shapes who you compete with, what you can charge, and what regulations you face — all of which feed into the multiple.'],
    ],
    'Geographic overlap is a peer-set requirement, not an optional filter. Two companies making the same product on opposite continents can be in completely different competitive and regulatory environments. The initiation should disclose geographic skew and either justify cross-geography peers or build separate baskets.'),

  q(4370041, 'Career Skills', CHAPTER, 'Segment-mix mismatch',
    'You are building a peer set for a healthcare company that is 70% medical devices and 30% diagnostics. A peer with the same total revenue is 30% devices and 70% diagnostics. Same SIC code, same size, same geography. What is the problem?',
    'The segment mix is inverted — devices and diagnostics have different growth, margin, capital intensity, and multiple profiles, so a blended comparison will mislead even though the headline classifications match',
    [
      ['The peer is fine because the total exposure is the same', 'Total exposure is the same, mix is inverted. A 70/30 company and a 30/70 company trade on different blends of two multiples, even at identical headline revenue.'],
      ['The peer is fine because both companies are in healthcare', 'Healthcare is far too broad. Within healthcare, devices, diagnostics, services, pharma, and biotech all trade differently. Sector label is not the comparability question.'],
      ['The peer is fine because the SIC code matches', 'SIC code is a coarse classification that does not capture segment mix. Same SIC code, opposite segment mix is the textbook setup for misleading comparables.'],
    ],
    'Segment mix is the hardest peer-set check and the easiest to skip. Two companies in the same sector at the same scale can be poor peers if the mix is inverted. The disciplined fix is sum-of-parts: value each segment against its segment-specific peers, then sum — that respects mix instead of glossing over it.'),

  // -------------------------------------------------------------------------
  // KEY DEBATES FRAMING (4370042–4370043)
  // -------------------------------------------------------------------------
  q(4370042, 'Career Skills', CHAPTER, 'Bull vs bear case',
    'Your senior asks for the "key debates" section of the initiation in three bullets. What is the right structure for framing the bull and bear cases on a stock?',
    'State the specific claim each side makes, the evidence that would prove or disprove it, and where your own view lands — debates are about disagreement on facts and forecasts, not on vibes',
    [
      ['Summarize the consensus view and label everything else as the bear case', 'Consensus is not a debate. The debates section should isolate the specific points where reasonable analysts disagree, not flatten everything against the average.'],
      ['Pick the most aggressive bull case and the most negative bear case to set the range', 'Extreme cases are not debates — they are anecdotes. The useful debates are the ones reasonable, informed investors actually argue about, with evidence on both sides.'],
      ['Write the debates section as a list of risks at the end of the note', 'A risk list is not a debate. Debates have two sides with evidence; risks are downside-only. The two sections serve different purposes.'],
    ],
    'A key-debates section is the most-read part of a research note. It has to articulate the specific claims, the testable evidence, and the analyst\'s landing — that is what makes the note useful to a portfolio manager who has already heard the consensus.'),

  q(4370043, 'Career Skills', CHAPTER, 'What would change minds',
    'Your initiation is Buy-rated. A senior asks: "What would make you change your mind?" Why is this question central to the initiation, not an afterthought?',
    'A thesis is only useful if it is falsifiable — naming what evidence would flip the rating in advance forces precision, prevents motivated reasoning later, and gives the investor a tracking framework',
    [
      ['Naming kill criteria is bearish and undermines the Buy rating', 'Naming what would change your mind is not bearish — it is rigorous. Every responsible Buy comes with conditions; ducking the question signals lack of conviction, not its presence.'],
      ['The question is about humility but it does not affect the analytics', 'It affects analytics directly: the kill-criteria force you to specify what evidence would matter, which sharpens what you track and how you size the position over time.'],
      ['Kill criteria are only relevant if the rating is at risk', 'They are most useful when the rating is not at risk because they discipline you against confirmation bias when the data starts to drift. Waiting until the rating is at risk is too late.'],
    ],
    'A Buy rating without falsification conditions is a guess. Naming the evidence that would change the rating — a specific margin level, a specific share-loss event, a specific guidance cut — forces honest forecasting and protects against the slow drift of motivated reasoning that breaks careers in research.'),
]

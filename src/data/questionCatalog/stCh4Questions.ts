import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// SALES & TRADING — Chapter 4: Execution, P&L, and Limits
// ----------------------------------------------------------------------------
// 41 questions (IDs 4380300–4380340) extending the existing 9-question core in
// careerAgentGeneratedRoadmapFinance.ts (4103030, 4103031, 4105086, 4105088,
// 4105089, 4105095, 4107357, 4103026, 4107350).
//
// Coverage:
//   - Execution algorithms: VWAP, TWAP, POV, IS, liquidity-seeking
//   - TCA: arrival price, IS measurement, slippage vs market impact
//   - Market impact: temporary vs permanent, square-root law
//   - Smart Order Routing across lit/dark; iceberg/midpoint pegs
//   - High-touch vs low-touch P&L attribution
//   - Greeks-based P&L attribution; bid-ask P&L; funding/FVA
//   - CCP clearing, CVA, counterparty risk post-Dodd-Frank
//   - Trading limits, breach escalation, stop-loss policy
//   - Blow-up case lore (LTCM, Knight, Archegos, Credit Suisse)
//   - Volcker Rule and RENTD; Basel III capital constraints
//   - Inventory aging; flash P&L; pre-trade and post-trade checks
//   - Spoofing/layering (Sarao, Coscia)
//
// Voice: bespoke whyWrong on every distractor; real desk misconceptions;
// US regulatory context (Volcker, Dodd-Frank, FINRA, CFTC, SEC).
// ----------------------------------------------------------------------------

const SOURCE = 'Floe S&T Ch4 canonical bank'

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

const CHAPTER = 'Execution, P&L, and Limits'

// Difficulty distribution: 12 at 3, 21 at 4, 8 at 5 (41 total).
export const ST_CH4_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Execution algorithms (4380300–4380306)
  4380300: 3, // TWAP vs VWAP choice
  4380301: 4, // POV mechanics
  4380302: 4, // Implementation Shortfall algo intent
  4380303: 5, // Liquidity-seeking algo in fragmented venues
  4380304: 3, // When VWAP is wrong
  4380305: 4, // Algo selection under urgency
  4380306: 4, // Dark vs lit for block

  // TCA (4380307–4380311)
  4380307: 3, // Arrival price benchmark
  4380308: 4, // VWAP benchmark gaming
  4380309: 4, // IS decomposition
  4380310: 5, // Slippage vs market impact split
  4380311: 3, // Why TCA matters to clients

  // Market impact (4380312–4380314)
  4380312: 4, // Temporary vs permanent impact
  4380313: 5, // Square-root law intuition
  4380314: 3, // Size and signaling

  // SOR and microstructure (4380315–4380319)
  4380315: 4, // SOR routing logic
  4380316: 4, // Iceberg order purpose
  4380317: 3, // Maker vs taker
  4380318: 4, // Midpoint peg trade-off
  4380319: 4, // Adverse selection in dark pools

  // P&L attribution (4380320–4380323)
  4380320: 3, // High-touch vs low-touch revenue
  4380321: 4, // Realized vs unrealized
  4380322: 5, // Greeks P&L attribution
  4380323: 4, // Market-maker spread P&L

  // Funding, CVA, CCP (4380324–4380327)
  4380324: 4, // FVA / funding charge
  4380325: 4, // CVA on uncleared swap
  4380326: 3, // CCP novation post-Dodd-Frank
  4380327: 5, // Initial vs variation margin

  // Limits and breaches (4380328–4380331)
  4380328: 3, // VaR limit purpose
  4380329: 4, // Concentration limit logic
  4380330: 4, // Stop-loss policy after drawdown
  4380331: 3, // Same-day rectification

  // Blow-up lore (4380332–4380334)
  4380332: 4, // LTCM lesson
  4380333: 5, // Knight Capital lesson
  4380334: 4, // Archegos / Credit Suisse lesson

  // Volcker / capital (4380335–4380337)
  4380335: 5, // RENTD test
  4380336: 4, // Volcker exemptions
  4380337: 4, // Basel III RWA pressure

  // Inventory, flash P&L, surveillance (4380338–4380340)
  4380338: 3, // Inventory aging
  4380339: 3, // Flash P&L vs reconciled
  4380340: 5, // Spoofing under Dodd-Frank Title VII
}

export const stCh4Questions: Question[] = [
  // ---------------------------------------------------------------------------
  // EXECUTION ALGORITHMS (4380300–4380306)
  // ---------------------------------------------------------------------------
  q(4380300, 'Career Skills', CHAPTER, 'TWAP versus VWAP',
    'A client wants to execute 500,000 shares evenly through the trading day without trying to match the volume curve. Which algorithm fits the request literally?',
    'TWAP, which slices the order into equal time intervals regardless of the intraday volume profile',
    [
      ['VWAP, because it spreads the order evenly through the day', 'VWAP weights child orders to the expected volume curve — heavier at open and close. That is not "even through the day," that is "with the volume."'],
      ['POV at 30%, because percentage of volume is the same as time-weighted', 'POV chases realized volume in real time. It produces a participation rate, not a time slice. The two algos solve different problems.'],
      ['A single market-on-close order, because the close is the most liquid print', 'A single MOC concentrates execution at one print. The client asked for an even schedule, not a concentrated close.'],
    ],
    'TWAP and VWAP both slice large orders, but TWAP slices on time and VWAP slices on expected volume. Matching the algo to the literal request keeps the client benchmarked against a measure they can verify.'),

  q(4380301, 'Career Skills', CHAPTER, 'Percentage of volume mechanics',
    'A portfolio manager sets a POV target of 15% on a 1,000,000-share buy in a stock that trades 8,000,000 shares per day. What is the algorithm actually trying to do intraday?',
    'Participate at roughly 15% of every interval\'s realized volume, accelerating when the tape is active and slowing when it is quiet',
    [
      ['Buy exactly 150,000 shares no matter what the day\'s volume turns out to be', 'POV is dynamic — it follows realized volume, not a fixed forecast. Fixed-quantity execution would be a TWAP-style slice, not POV.'],
      ['Front-load 150,000 shares into the open and stop', 'POV explicitly does not front-load. The whole point is to track the tape and stay below a visible footprint.'],
      ['Pay 15% of the spread to attract dark liquidity', 'POV is a participation rate, not a spread payment. The 15% refers to volume share, not commission or spread economics.'],
    ],
    'POV trades the order as a percentage of realized market volume. If the tape thins, POV slows down — which protects the client from chasing illiquidity but also leaves residual that may not finish by close.'),

  q(4380302, 'Career Skills', CHAPTER, 'Implementation Shortfall intent',
    'An IS (Implementation Shortfall) algorithm is selected for a 200,000-share order in a mid-cap name. What is the algo optimizing against?',
    'The arrival price at the moment the parent order was released, balancing market impact against opportunity cost of slow execution',
    [
      ['The closing print, like a market-on-close order', 'IS does not benchmark to close. Its name comes from Perold\'s arrival-price framework — the loss versus the price when the order was decided.'],
      ['The VWAP of the trading day', 'VWAP-benchmarked algos exist, but IS is explicitly different. IS punishes both impact and delay; VWAP punishes only deviation from the volume curve.'],
      ['The bid-ask midpoint at every fill', 'Mid-point benchmarking is a microstructure measure for a single fill, not the parent-order objective IS is built to solve.'],
    ],
    'Implementation Shortfall trades aggressively when the arrival price is favorable and decays its urgency as the cost of waiting grows. It is the right benchmark when the PM cares about the price they saw when they made the decision, not the average print of the day.'),

  q(4380303, 'Career Skills', CHAPTER, 'Liquidity-seeking algo in fragmented venues',
    'A trader needs to fill a 2,000,000-share order in a Russell 2000 name where lit displayed size at the inside is rarely above 500 shares. Which algo behavior best fits?',
    'A liquidity-seeking algo that pings dark pools, posts iceberg slices on lit venues, and accelerates only when displayed or hidden size appears',
    [
      ['A pure VWAP, because the volume curve will reveal where to trade', 'VWAP needs a reliable volume forecast and steady displayed liquidity. In a thin Russell name, blindly chasing the curve will move the print and signal the order.'],
      ['A single sweep of the lit book across all venues', 'A sweep in thin names walks the book up several ticks and broadcasts intent. The remaining 1,995,000 shares now trade against an alerted market.'],
      ['A TWAP across the whole session at uniform size', 'Uniform-size slices in a name with 500-share quotes guarantee impact at every interval. The algo has to wait for liquidity, not force it.'],
    ],
    'Liquidity-seeking (sometimes called opportunistic or sniper) algos prioritize finding size over hitting a schedule. In thin names the schedule itself is the leak; patience and venue selection do more for the parent than any volume curve.'),

  q(4380304, 'Career Skills', CHAPTER, 'When VWAP is the wrong tool',
    'A hedge fund PM gives the desk a 30-minute window to buy 100,000 shares ahead of an expected catalyst at 11:00 AM. Why is a full-day VWAP algo a poor fit?',
    'VWAP optimizes against the day\'s volume curve, which would defer most of the order past the 30-minute window and miss the catalyst',
    [
      ['VWAP is illegal for short-window orders', 'VWAP is fully legal — it is just a benchmark. The objection is fitness for purpose, not regulation.'],
      ['VWAP guarantees front-loading at the open, which is too aggressive', 'VWAP is volume-weighted, not front-loaded. The reason it fails here is the opposite — it would push fills *later*, past the catalyst window.'],
      ['VWAP charges higher commissions than IS', 'Commission schedules vary by broker but the algo choice does not turn on a few mils. The fit issue is the time horizon, not the bill.'],
    ],
    'Algos are not interchangeable. VWAP wants a full session; a 30-minute catalyst window wants an aggressive IS or a manual block. Matching the algo to the horizon is half the desk\'s job.'),

  q(4380305, 'Career Skills', CHAPTER, 'Algo choice under urgency',
    'A client says: "Get me long 50,000 shares before the 10:00 AM Fed minutes — I do not care about benchmark, I care about being filled." Which algo posture fits?',
    'Aggressive IS with a short horizon, or a manual block trade with the sales-trader — accept impact in exchange for completion certainty',
    [
      ['A passive POV at 5% across the day, to minimize impact', 'A 5% POV in a 50,000-share order will not be done by 10:00 AM. Minimizing impact while missing the catalyst is the wrong trade-off here.'],
      ['A VWAP through the close, because that is the cheapest execution', 'VWAP through close ignores the explicit urgency. The client said the benchmark does not matter; cost-minimization is the wrong objective.'],
      ['Cancel the order and tell the client to wait for the print', 'Refusing the order is not coverage. The client took a view; the desk\'s job is to execute it within constraints, not to override the view.'],
    ],
    'Urgency changes the algo. When the client values completion over benchmark, the desk pays market impact deliberately — that is a feature of the trade, not a failure of execution.'),

  q(4380306, 'Career Skills', CHAPTER, 'Dark versus lit for a block',
    'A pension fund wants to sell 750,000 shares of a $40 stock that trades 4M shares a day. The sales-trader suggests a mix of dark pool indications and a small lit IS slice. Why mix venues?',
    'Dark pools may surface natural contra-side size at the midpoint without signaling the parent, while a small lit slice keeps participation visible enough that the print does not look stale',
    [
      ['Dark pools are required by Reg NMS for any block above 500,000 shares', 'Reg NMS does not mandate dark execution. Venue choice is the broker\'s decision under best-execution duty.'],
      ['Lit venues charge no commission, so any lit fill is pure profit for the client', 'Lit venues charge fees (often maker rebates and taker fees). The mix logic is about impact and signaling, not commission economics.'],
      ['Mixing venues is a way to hide the order from the SEC', 'Hiding from regulators is illegal. Mixing venues is about minimizing market impact, fully disclosed in trade reports.'],
    ],
    'Venue mix is a microstructure decision: dark pools offer potential midpoint price improvement and hidden size, lit venues provide certainty and price discovery. Best ex requires considering both, and documenting why the mix made sense.'),

  // ---------------------------------------------------------------------------
  // TCA (4380307–4380311)
  // ---------------------------------------------------------------------------
  q(4380307, 'Career Skills', CHAPTER, 'Arrival price benchmark',
    'A TCA report shows the parent order filled 8 basis points above arrival price. What does "arrival price" mean here?',
    'The market price at the moment the parent order was sent to the algo or trader',
    [
      ['The day\'s opening auction print', 'The opening print is a distinct benchmark. Arrival is a stamp at the moment the parent was released, which can be any time of day.'],
      ['The price quoted in the client\'s confirmation email', 'The confirm carries the average fill price, not the arrival benchmark. The two are what TCA compares.'],
      ['The midpoint of the day\'s high and low', 'High-low midpoint is a daily-range statistic with no relevance to execution quality at the moment the order was released.'],
    ],
    'Arrival price is the time-stamped reference point against which slippage is measured. Without an honest arrival stamp, slippage numbers can be reverse-engineered — which is why audit-trail discipline matters.'),

  q(4380308, 'Career Skills', CHAPTER, 'VWAP benchmark gaming',
    'A trader is benchmarked against day-VWAP and consistently beats it by 1–2 basis points by doing most of the work at the open. Why might a TCA reviewer be suspicious?',
    'Front-loading the parent order shifts the VWAP itself toward the early prints, mechanically inflating the apparent outperformance — the benchmark is partly endogenous to the trader\'s own footprint',
    [
      ['VWAP cannot be beaten by 1–2 basis points without insider information', 'Small VWAP beats are routine in liquid names. The issue here is the mechanism by which the beat is generated, not its absolute size.'],
      ['Beating VWAP is illegal under FINRA Rule 5310', 'Rule 5310 is best execution, not a prohibition on outperforming a benchmark. The concern is the integrity of the benchmark, not the result.'],
      ['Front-loading is the textbook definition of spoofing', 'Spoofing involves placing orders with intent to cancel. Front-loading filled orders is execution skewing, not spoofing — a different problem.'],
    ],
    'When the trader\'s own prints contribute to the benchmark, beating the benchmark is partly self-referential. Sophisticated TCA uses arrival-price or interval-VWAP to neutralize this; naive VWAP benchmarking rewards exactly the behavior it should flag.'),

  q(4380309, 'Career Skills', CHAPTER, 'Implementation Shortfall decomposition',
    'A 1,000,000-share IS report shows 12 bps total shortfall: 4 bps "delay cost," 6 bps "execution cost," and 2 bps "opportunity cost on unfilled shares." How should the desk read this?',
    'Delay cost reflects price drift between the decision and the first fill; execution cost is the impact and spread paid on filled shares; opportunity cost is the price move on the residual that never filled',
    [
      ['All three buckets are the same thing measured three different ways', 'Each bucket maps to a distinct phase of the order: pre-trade delay, in-trade impact, and post-trade residual. Collapsing them loses the diagnosis.'],
      ['Delay cost is the broker\'s commission and execution cost is the exchange fee', 'Commissions and fees are explicit and reported separately. Delay and execution costs are price-based and capture impact, not invoiced fees.'],
      ['Opportunity cost only matters for unfilled shares in dark pools', 'Opportunity cost applies to any unfilled residual, regardless of venue. The decomposition is venue-agnostic.'],
    ],
    'IS decomposition tells the trader where cost actually leaked: pre-trade hesitation, in-trade impact, or leaving residual on the table. Each bucket points to a different fix — better routing, smaller slices, or a more complete fill.'),

  q(4380310, 'Career Skills', CHAPTER, 'Slippage versus market impact',
    'A 300,000-share sale fills 7 bps below arrival. The post-trade report attributes 5 bps to "market impact" and 2 bps to "slippage." How should the trader interpret the split?',
    'Market impact is the price move the order itself caused; slippage is the residual drift attributable to other flow, latency, or adverse selection — the two answer different questions for the next order',
    [
      ['Market impact and slippage are synonyms and the split is cosmetic', 'They are distinct concepts. Treating them as the same loses the most useful diagnostic the report contains.'],
      ['Slippage is the commission and market impact is the spread', 'Commissions are separately invoiced. Slippage and impact are both price-based, but they measure different sources of cost.'],
      ['Market impact applies only to lit venues; slippage only to dark', 'Both apply to both venue types. The distinction is causal — the order\'s own footprint versus everything else — not venue-based.'],
    ],
    'Decomposing cost into impact vs slippage is what makes TCA actionable. Heavy impact says "slow down or hide better"; heavy slippage says "the venue mix or the timing leaked information." The fix differs by diagnosis.'),

  q(4380311, 'Career Skills', CHAPTER, 'Why TCA matters to clients',
    'An institutional client asks the broker for a monthly TCA report on all executed orders. What is the client primarily trying to evaluate?',
    'Whether the broker\'s execution quality meets the best-execution standard the client is paying for, with measurable benchmarks',
    [
      ['Whether the broker\'s research coverage is improving', 'Research coverage is evaluated separately. TCA is about execution, not idea generation.'],
      ['Whether the broker\'s sales coverage is calling enough', 'Sales coverage is a relationship metric. TCA measures fills, not call frequency.'],
      ['Whether the broker is profitable as a counterparty', 'The client cares about their own fills, not the broker\'s P&L. TCA is the client-facing view, not the broker-internal one.'],
    ],
    'TCA exists because best execution is a fiduciary obligation that has to be measurable. Clients use it to decide who deserves order flow next quarter — which is why the desk takes it seriously.'),

  // ---------------------------------------------------------------------------
  // MARKET IMPACT (4380312–4380314)
  // ---------------------------------------------------------------------------
  q(4380312, 'Career Skills', CHAPTER, 'Temporary versus permanent impact',
    'A large buy order pushes the price up 20 bps during execution. Twenty minutes after the last fill, the price has retraced 12 bps. How should the desk decompose this?',
    'Roughly 12 bps temporary impact (liquidity premium that decays once the order stops) and 8 bps permanent impact (the information component the market kept)',
    [
      ['All 20 bps is permanent impact because the price moved during the trade', 'The 12 bps retracement after the order ended is by definition the temporary component. Calling it all permanent ignores the post-trade decay.'],
      ['All 20 bps is temporary because the price always mean-reverts', 'Mean reversion is partial, not complete. The 8 bps that did not retrace is the information the market absorbed permanently.'],
      ['Impact is a single number and cannot be decomposed', 'Decomposition is exactly what optimal execution research (Almgren-Chriss and successors) is built on. Treating it as one number throws away the most useful diagnostic.'],
    ],
    'Temporary impact reflects the liquidity premium the order paid; permanent impact reflects the information the trade conveyed. The split matters because it changes the optimal trading speed — pure liquidity cost favors patience, pure information cost favors speed.'),

  q(4380313, 'Career Skills', CHAPTER, 'Square-root law',
    'A research paper claims that doubling order size roughly multiplies expected market impact by √2 rather than by 2. Which intuition best supports this empirical pattern?',
    'Liquidity replenishes as the order works through the book, so each additional share faces somewhat fresher liquidity than the first — impact grows sub-linearly with size',
    [
      ['Doubling size doubles the spread paid, so impact is exactly linear', 'Empirical work (Almgren and others) repeatedly finds sub-linear, near-square-root scaling. Strict linearity is the assumption square-root research was built to replace.'],
      ['Larger orders never move prices because dark pools absorb them', 'Dark pools help but do not eliminate impact, and even dark execution leaks information through trade reports. The size-impact relationship persists across venues.'],
      ['Doubling size quadruples impact because order books are concave', 'The square-root finding is the opposite of quadratic. Quadratic impact would imply order books shaped very differently from what is observed.'],
    ],
    'The square-root law is an empirical regularity, not a derivation from first principles, but it has held across markets and decades. It is the reason institutional traders break parents into many smaller children rather than executing in a few large chunks.'),

  q(4380314, 'Career Skills', CHAPTER, 'Size and signaling',
    'A trader argues: "If I post my full 500,000-share buy interest on the lit book at the bid, I get filled fastest with no impact." What is wrong with this reasoning?',
    'Displayed size of that magnitude signals the trader\'s intent, drives the offer up, and either fills against opportunistic flow at worse prices or simply fails to fill at all',
    [
      ['Posting on the bid is illegal under Reg NMS', 'Posting passive bids is legal and normal. The issue is impact and signaling, not regulation.'],
      ['Lit venues reject orders above 100,000 shares', 'No such universal limit exists. Venues accept large orders; the question is whether the trader should show them.'],
      ['Bids never get filled because everyone trades through them', 'Bids fill routinely. The issue is the price after the signal lands, not whether a bid can ever execute.'],
    ],
    'Displayed size is information. A 500,000-share visible bid in a stock that quotes 800 shares wide tells every algorithm in the market that a buyer is desperate. The signaling cost usually exceeds the spread the trader was trying to save.'),

  // ---------------------------------------------------------------------------
  // SOR AND MICROSTRUCTURE (4380315–4380319)
  // ---------------------------------------------------------------------------
  q(4380315, 'Career Skills', CHAPTER, 'Smart Order Routing logic',
    'A Smart Order Router (SOR) receives a 5,000-share buy order. The displayed offer is 2,000 shares at $20.01 on NYSE, 1,500 at $20.01 on Nasdaq, and a dark indication at $20.005. What should the SOR consider doing?',
    'Hit the dark indication at the midpoint for whatever size it returns, then sweep both lit offers at $20.01 in parallel for the remainder',
    [
      ['Send the full 5,000 to NYSE and wait', 'NYSE displays only 2,000 at the inside. The remaining 3,000 either walks the book up or sits exposed — the SOR exists precisely to avoid this.'],
      ['Route exclusively to the dark venue regardless of fill probability', 'Dark indications are not guaranteed fills. Skipping the certain lit liquidity in favor of an uncertain dark probe wastes the firm offers.'],
      ['Route to whichever venue paid the highest rebate last month', 'Routing on rebates rather than execution quality is a best-execution violation. SOR has to optimize the client\'s fill, not the broker\'s rebate.'],
    ],
    'SOR is the routing brain that decides venue, size, and order type for each child. The best-ex obligation is multi-factor — price, speed, certainty — and the regulators read order-routing decisions in that frame.'),

  q(4380316, 'Career Skills', CHAPTER, 'Iceberg order purpose',
    'A trader places an iceberg order to buy 100,000 shares with a displayed size of 1,000. What is the iceberg trying to achieve?',
    'Show enough size to attract counterparties without revealing the full parent, so the rest of the market does not move away',
    [
      ['Pay no commission, because iceberg orders are exchange-fee-free', 'Iceberg orders carry the venue\'s normal fee schedule. The advantage is information control, not cost waiver.'],
      ['Guarantee a fill at the midpoint', 'Midpoint fills are a peg-order feature. Icebergs trade at their limit price, not the midpoint.'],
      ['Hide the order from regulators', 'Iceberg orders are reported to the consolidated tape on execution. They hide the *resting* size from other participants, not the executions from regulators.'],
    ],
    'Iceberg orders are a microstructure tool: visible enough to attract liquidity, hidden enough not to broadcast the full hand. They are legal, well-understood, and routinely used by institutional algos.'),

  q(4380317, 'Career Skills', CHAPTER, 'Maker versus taker',
    'A maker-taker exchange charges 30 mils to take liquidity and pays a 25-mil rebate to make. A passive limit order resting on the bid that gets hit by an incoming sell — is the resting trader the maker or the taker?',
    'The maker, because they provided the liquidity that the incoming order took',
    [
      ['The taker, because they got filled', 'Getting filled is not what defines maker/taker. The classification turns on who provided versus consumed the resting liquidity.'],
      ['Neither, because both sides cross at the same price', 'The price match is the trade, but the role classification is well-defined. One side is always the resting (maker), the other the aggressive (taker).'],
      ['Both, because every trade has two sides', 'Every trade has two sides but only one maker and one taker per execution. The classification is determinate.'],
    ],
    'Maker-taker fee structures are central to US equity microstructure. Understanding which side of a trade earns the rebate versus pays the fee is the basic vocabulary of routing and venue economics.'),

  q(4380318, 'Career Skills', CHAPTER, 'Midpoint peg trade-off',
    'A trader uses a midpoint peg order in a dark pool to buy a stock quoted $20.00 / $20.04. The order will only execute at the midpoint, $20.02. What is the trader implicitly accepting?',
    'Half the spread of price improvement in exchange for slower or uncertain fills, since the order will not cross unless a counterparty is willing to trade at the midpoint',
    [
      ['Guaranteed immediate execution at $20.02', 'Midpoint pegs are not guaranteed — they depend on a willing counterparty. The trade-off is improvement for certainty.'],
      ['Execution at the bid, $20.00', 'A midpoint peg trades at the mid, by construction. Executing at the bid would require a different order type.'],
      ['Higher commission in exchange for hidden status', 'Commission schedules vary, but the structural trade-off is price improvement versus fill certainty, not commission.'],
    ],
    'Midpoint pegs are a price-improvement tool, not an immediacy tool. The trader saves half the spread when filled, but the order can sit unfilled if no contra arrives at the mid — a deliberate trade.'),

  q(4380319, 'Career Skills', CHAPTER, 'Adverse selection in dark pools',
    'A buy-side trader notices that her dark-pool fills are systematically followed by adverse price moves — she buys, and the price drops shortly after. What is the most likely explanation?',
    'Her fills are correlated with informed sellers who are trading on short-term information she does not have, a classic adverse selection pattern',
    [
      ['The dark pool is rigged by the operator', 'Operator misconduct exists and has been prosecuted, but the more common and structural explanation is adverse selection — informed flow finding her resting orders.'],
      ['Dark pools are required to fill at worse prices than lit', 'No such requirement exists. Dark pools often offer price improvement; the issue here is the information content of the contras.'],
      ['The fills are random and the pattern is imaginary', 'Adverse selection is a measurable, well-documented effect in microstructure research. Dismissing it as randomness misses the diagnosis.'],
    ],
    'Adverse selection is the cost of trading against better-informed counterparties. In dark pools it is harder to see, because the contra is invisible — sophisticated buy-side desks monitor post-fill drift to detect it and route accordingly.'),

  // ---------------------------------------------------------------------------
  // P&L ATTRIBUTION (4380320–4380323)
  // ---------------------------------------------------------------------------
  q(4380320, 'Career Skills', CHAPTER, 'High-touch versus low-touch revenue',
    'A cash equities desk runs both a high-touch sales-trader book and a low-touch algorithmic execution channel. Where does the revenue primarily come from on each side?',
    'High-touch from spread capture and commission on negotiated trades; low-touch from per-share commissions on algo-executed flow',
    [
      ['Both from prop trading P&L', 'Post-Volcker, agency cash equities desks are not running prop. Revenue is agency commission and capture, not prop.'],
      ['High-touch from rebates only; low-touch from spread', 'The economics run roughly the opposite direction. High-touch is where capture lives; low-touch is the commission factory.'],
      ['Both from underwriting fees on the same equities', 'Underwriting is a separate business line under ECM/banking. Cash trading desks earn from secondary execution, not primary issuance.'],
    ],
    'High-touch versus low-touch is the central economic distinction in modern equity execution. Understanding which channel pays which way explains compensation, hiring, and where the desk loses ground when volume goes electronic.'),

  q(4380321, 'Career Skills', CHAPTER, 'Realized versus unrealized P&L',
    'A trader marks her book at end-of-day. She bought 50,000 shares this morning at $30, sold 20,000 at $32, and the remaining 30,000 mark at $33. How is the P&L split between realized and unrealized?',
    'Realized: 20,000 × ($32 − $30) = $40,000. Unrealized: 30,000 × ($33 − $30) = $90,000. Total mark-to-market: $130,000.',
    [
      ['All $130,000 is realized because the trader booked the position today', 'Realized P&L requires the position to be closed. The 30,000 still held is mark-to-market, not realized.'],
      ['All $130,000 is unrealized because the book has not closed for the day', 'The 20,000 sold this morning crystallized at $32. That P&L is realized regardless of what the rest of the book does today.'],
      ['Realized $90,000 / unrealized $40,000, because larger positions are unrealized', 'The split runs by what was closed, not by size. The 20,000 sold is realized; the 30,000 marked is unrealized.'],
    ],
    'Realized P&L is locked in at the trade. Unrealized P&L floats with the mark. Both show in the daily P&L, but only realized is cash; unrealized is a snapshot the market can take away tomorrow.'),

  q(4380322, 'Career Skills', CHAPTER, 'Greeks-based P&L attribution',
    'An options trader\'s daily P&L is +$120,000 on a long-vol book. Attribution shows: delta P&L +$30K, gamma P&L +$80K, theta P&L −$40K, vega P&L +$50K. What does this picture say?',
    'The book benefited from a large realized move (gamma), some directional drift (delta), and a vol mark-up (vega), partially offset by time decay (theta) — consistent with a long-gamma book on a volatile day',
    [
      ['The book is short gamma because theta is positive', 'Theta is negative (−$40K). Long-gamma books pay theta; short-gamma books collect it. The signs match a long-vol position.'],
      ['Delta P&L of $30K means the trader bought options', 'Delta P&L means the directional move helped. It says nothing about whether the position was put on by buying or selling options.'],
      ['Vega P&L should always equal theta P&L', 'Vega and theta are independent Greeks with no required equality. They can move in any combination depending on vol, time, and strike location.'],
    ],
    'Greeks attribution is the diagnostic that turns "P&L was up $120K" into a story the desk can manage. The signs and magnitudes have to match the position; mismatches usually mean either a model issue or a hedge that drifted.'),

  q(4380323, 'Career Skills', CHAPTER, 'Market-maker spread P&L',
    'A market-maker buys 10,000 shares from a client at $50.00 (the bid) and sells 10,000 to another client at $50.04 (the offer) within a minute. Ignoring fees, what is the desk\'s P&L and what risk did it carry?',
    'P&L of $400 (spread capture of $0.04 × 10,000), with brief inventory risk while long the 10,000 shares between the two trades',
    [
      ['P&L is zero because the buys and sells offset', 'They offset in quantity but not in price. The $0.04 differential is the spread the desk earned.'],
      ['P&L is $0.04 with no risk because the trades happen instantly', 'P&L is $400, not $0.04 per share without scaling. Even brief inventory carries risk, especially if news lands between trades.'],
      ['P&L is unknowable without knowing the closing price', 'The position was fully unwound the same minute. The P&L is fixed by the two prints; the close is irrelevant.'],
    ],
    'Spread capture is the bid-ask version of market-making profit. It is small per trade but scales with flow — and the inventory risk between the two legs is exactly what blew up Knight Capital and many short-lived market-making firms.'),

  // ---------------------------------------------------------------------------
  // FUNDING, CVA, CCP (4380324–4380327)
  // ---------------------------------------------------------------------------
  q(4380324, 'Career Skills', CHAPTER, 'FVA and funding charges',
    'A swaps trader\'s gross P&L on a long-dated uncollateralized trade looks strong, but the desk is charged a Funding Valuation Adjustment (FVA) by treasury. What is FVA capturing?',
    'The cost to the bank of funding the unsecured cash flows over the life of the trade — balance sheet usage that does not show up in mark-to-market but is real out-of-pocket',
    [
      ['A regulatory tax imposed by the SEC on swaps', 'FVA is an internal accounting charge, not a regulatory tax. It is the bank charging its own desk for funding.'],
      ['The bid-ask spread the dealer pays on the underlying bond', 'FVA is funding cost, not transaction cost. The two are different lines in the P&L decomposition.'],
      ['A reserve for legal expenses on the trade', 'Legal reserves are a separate provision. FVA is specifically funding-related.'],
    ],
    'Post-2008, banks internalize funding cost on uncollateralized derivatives via FVA. A trader who ignores FVA sees a gross P&L that flatters the desk; the net P&L after FVA is what actually contributes to RoE.'),

  q(4380325, 'Career Skills', CHAPTER, 'CVA on an uncleared swap',
    'A bank books a 10-year uncollateralized interest rate swap with a corporate counterparty. The CVA desk charges the trader for Credit Valuation Adjustment. What does CVA represent?',
    'The expected loss on the swap if the counterparty defaults, marked to current credit spreads — a charge that turns a "risk-free" mid into a credit-adjusted price',
    [
      ['The cost of clearing the swap at LCH', 'CVA is counterparty credit risk, not clearing cost. Cleared swaps largely remove CVA because the CCP becomes the counterparty.'],
      ['The trader\'s commission to the sales-trader', 'Commission and CVA are different lines. CVA is a balance-sheet charge for credit exposure.'],
      ['A regulatory fine imposed by Dodd-Frank', 'CVA is an accounting and pricing concept that pre-dates Dodd-Frank, though regulation made it more prominent. It is not a fine.'],
    ],
    'CVA prices the counterparty\'s default risk into the trade. The CVA desk hedges this risk centrally; the trader sees it as a charge that converts a textbook swap price into one that reflects the real credit content of the deal.'),

  q(4380326, 'Career Skills', CHAPTER, 'CCP novation post-Dodd-Frank',
    'Title VII of Dodd-Frank pushed most standardized interest rate and credit derivatives onto central clearinghouses. What does "novation" mean in this context?',
    'After execution, the original bilateral contract is replaced by two contracts, each between the original parties and the central counterparty (CCP)',
    [
      ['The trade is rebooked into a different product type', 'Novation does not change the product; it changes the counterparty. The economic terms remain.'],
      ['The trade is unwound and rewritten with a different client', 'Novation preserves both original parties — they just face the CCP rather than each other. No new clients are introduced.'],
      ['The trade becomes uncleared and bilateral', 'Novation is the opposite of bilateral — it is the act of becoming cleared.'],
    ],
    'CCP novation is the legal mechanism that turns the dealer\'s bilateral exposure to a counterparty into mutualized exposure to the CCP. It is what makes Title VII\'s clearing mandate operational.'),

  q(4380327, 'Career Skills', CHAPTER, 'Initial margin versus variation margin',
    'A cleared swap at LCH posts both initial margin (IM) and variation margin (VM). How do the two differ?',
    'IM is a forward-looking buffer sized to cover potential losses over a default close-out period; VM is a daily settlement of mark-to-market gains and losses',
    [
      ['IM and VM are different names for the same daily cash transfer', 'They are distinct mechanisms with different purposes. IM is a buffer that sits at the CCP; VM is the daily P&L exchange.'],
      ['IM is paid only by the buy side; VM only by the sell side', 'Both sides post both. Margin requirements are symmetric in cleared derivatives.'],
      ['IM is collected only on default; VM is collected daily', 'IM is collected at trade inception and adjusted over time. It is not held until default — that is the default fund\'s role.'],
    ],
    'IM cushions the CCP against a member default; VM keeps every position marked to market in cash each day. Together with the default fund, they are the three layers of CCP loss absorption — a structure designed to break before the CCP itself does.'),

  // ---------------------------------------------------------------------------
  // LIMITS AND BREACHES (4380328–4380331)
  // ---------------------------------------------------------------------------
  q(4380328, 'Career Skills', CHAPTER, 'VaR limit purpose',
    'A trading desk operates under a one-day 99% VaR limit of $5M. What is the limit actually trying to constrain?',
    'The size of loss the desk should not exceed on more than 1 in 100 trading days, given current positions and recent market behavior',
    [
      ['The maximum loss the desk can ever incur', 'VaR is a statistical limit, not a worst-case cap. The 1-in-100 tail is exactly the case where VaR is breached.'],
      ['The trader\'s annual bonus pool size', 'Bonus is separate from VaR. The limit constrains risk, not compensation.'],
      ['The minimum P&L the desk must produce', 'Limits cap exposure, not require performance. VaR is a ceiling on risk, not a floor on P&L.'],
    ],
    'VaR limits are statistical guardrails. They constrain typical risk-taking but explicitly do not bound tail outcomes — which is why stress limits and concentration limits sit alongside VaR rather than replacing it.'),

  q(4380329, 'Career Skills', CHAPTER, 'Single-name concentration limit',
    'A credit desk\'s VaR limit is well below ceiling, but the head of risk imposes a single-name concentration limit per issuer. Why is the second limit necessary if VaR is already constrained?',
    'VaR averages exposure across positions and can mask large single-name bets that would blow up in an idiosyncratic credit event — concentration limits prevent that masking',
    [
      ['Concentration limits are duplicative and exist only for compliance theater', 'They are not duplicative — VaR and concentration measure different things, and a desk can be within VaR while concentrated.'],
      ['Concentration limits prevent the trader from making any profit', 'Limits constrain size, not profitability. Many desks operate profitably within concentration caps.'],
      ['Concentration limits replace the need for VaR', 'They are complementary, not substitutes. VaR catches portfolio-level risk; concentration catches idiosyncratic single-name risk.'],
    ],
    'VaR can be small even when one name dominates the book, because diversification assumptions in the VaR model dilute the single-name signal. Concentration limits are the override that says "no matter what the VaR model says, do not own this much of one issuer."'),

  q(4380330, 'Career Skills', CHAPTER, 'Stop-loss policy after drawdown',
    'A trader hits her monthly stop-loss after a sequence of losing days. The desk policy reduces her risk limits by half for the rest of the month. What is the logic?',
    'A losing streak may reflect a deteriorating thesis, an information gap, or impaired decision-making — reducing autonomy contains further damage while the trader and desk lead diagnose what changed',
    [
      ['The reduction is punitive and has no risk-management function', 'It is explicitly a risk-management mechanism, not punishment. Limit reduction is standard practice across major desks.'],
      ['The reduction guarantees the trader will recover the losses', 'Reduction does not guarantee recovery; it limits further loss while the trader re-evaluates. The two are different objectives.'],
      ['Stop-loss policies apply only to junior traders', 'Senior traders operate under stop-loss policies too. The mechanism scales with seniority but does not exclude it.'],
    ],
    'Stop-loss policies recognize that the human factor compounds in drawdowns. Cutting limits is not about distrust; it is about giving the desk room to figure out whether the losing streak is bad luck, bad thesis, or bad headspace before the next position size matters.'),

  q(4380331, 'Career Skills', CHAPTER, 'Same-day rectification',
    'A trader notices at 2:00 PM that his desk is 5% over its single-name concentration limit due to a morning client print. The book has six hours of New York session left. What does "same-day rectification" mean in this context?',
    'The breach must be cured before end-of-day either by hedging or by reducing the position, with the rectification documented and reported to risk',
    [
      ['The trader has thirty days to bring the book back into compliance', 'Same-day means same-day. Thirty days would be a structural waiver, not rectification.'],
      ['The trader can ignore the breach if the position is profitable', 'Profitability does not waive limits. A profitable breach is still a breach.'],
      ['The breach is automatically forgiven by the risk system', 'No automatic forgiveness exists. The trader has to take action and document it.'],
    ],
    'Same-day rectification is the discipline that keeps limit breaches from becoming structural. The audit trail of the breach, the action, and the report is what gives the firm comfort that limits actually constrain behavior rather than merely describe it.'),

  // ---------------------------------------------------------------------------
  // BLOW-UP LORE (4380332–4380334)
  // ---------------------------------------------------------------------------
  q(4380332, 'Career Skills', CHAPTER, 'LTCM lesson',
    'Long-Term Capital Management blew up in 1998 despite a Nobel-laureate-backed risk model. What is the standard lesson for modern desks?',
    'Convergence trades that look uncorrelated in calm markets become highly correlated under stress — leverage amplifies the loss exactly when liquidity disappears',
    [
      ['LTCM proved that quantitative models cannot work in financial markets', 'Quant models work fine in many domains. The LTCM lesson is about correlation regime change and leverage, not a wholesale rejection of quant methods.'],
      ['LTCM failed because the partners committed fraud', 'No fraud finding emerged from LTCM. The blow-up was a risk-model and leverage failure, not a fraud case.'],
      ['LTCM was bailed out by the US Treasury at taxpayer expense', 'The 1998 LTCM resolution was a private creditor consortium organized by the Fed, not a taxpayer bailout. Mixing it up with TARP is a common error.'],
    ],
    'LTCM is desk lore for a reason: diversification across many "uncorrelated" relative-value trades evaporates when everyone runs at once. Every risk system since has tried to model this, and most still struggle.'),

  q(4380333, 'Career Skills', CHAPTER, 'Knight Capital lesson',
    'Knight Capital lost roughly $440M in 45 minutes in August 2012 due to a software deployment error that ran legacy code on production order flow. What is the standing lesson for trading-tech governance?',
    'Production deployments to order-routing systems need rigorous change control, kill switches, and pre-trade limit checks — software defects can destroy a firm faster than any market move',
    [
      ['Knight failed because of a single rogue trader', 'No rogue trader was involved. The cause was a deployment error, which is a tech-governance issue, not a personnel issue.'],
      ['Knight\'s losses were caused by a market crash', 'The broader market was not in crisis that morning. Knight\'s problem was internal — its own algo flooding the market with bad orders.'],
      ['Knight was a private equity fund that over-levered', 'Knight was an electronic market maker, not a PE fund. The blow-up was operational, not balance-sheet.'],
    ],
    'Knight Capital is why every modern execution platform has fat-finger checks, position pre-trade limits, automated kill switches, and a fully separate test environment. The cost of skipping any one of these can clear the firm\'s equity in under an hour.'),

  q(4380334, 'Career Skills', CHAPTER, 'Archegos and Credit Suisse lesson',
    'Archegos Capital Management, a family office, collapsed in March 2021 and Credit Suisse alone lost roughly $5.5B as one of its prime brokers. What is the lesson for prime-brokerage risk?',
    'Concentrated single-name exposure built up via total-return swaps was opaque across multiple prime brokers — none saw the full picture, and the margin requested was inadequate for the concentration',
    [
      ['Archegos was a Russian sanctions-evasion vehicle', 'Archegos was a US family office. Sanctions issues are unrelated to the actual collapse mechanism.'],
      ['Credit Suisse failed because of cyber theft', 'The losses came from forced unwinds of single-name positions, not from cyber intrusion.'],
      ['The collapse was caused by retail short squeezes on meme stocks', 'GameStop and meme-stock dynamics are a different story. Archegos was concentrated longs in a handful of media and tech names unwound via swap.'],
    ],
    'Archegos exposed how total-return swap exposures escape disclosure (no 13F filing required) and how prime brokers compete on margin in a way that erodes the cushion. The episode reshaped how PB risk views family offices, swaps disclosure, and concentration limits.'),

  // ---------------------------------------------------------------------------
  // VOLCKER AND CAPITAL (4380335–4380337)
  // ---------------------------------------------------------------------------
  q(4380335, 'Career Skills', CHAPTER, 'RENTD test under Volcker',
    'The Volcker Rule\'s market-making exemption requires that inventory be sized to "reasonably expected near-term demand" (RENTD). What does the desk have to do operationally?',
    'Document inventory and turnover metrics tied to recent and expected customer flow, with limits and review processes that show the book is positioned for client demand rather than directional speculation',
    [
      ['Hold zero inventory at all times', 'Zero inventory would defeat market-making. RENTD constrains size to client demand, not to zero.'],
      ['Hold inventory equal to total industry trading volume', 'Industry volume is irrelevant. RENTD is firm-specific and demand-driven, not benchmark to total market activity.'],
      ['Avoid the rule entirely by booking trades offshore', 'Booking offshore does not exempt US institutions from Volcker. Regulators trace activity to the affiliated US entity.'],
    ],
    'RENTD is the operational core of the Volcker market-making exemption. Desks need data — turnover, customer-facing flow, inventory aging — to prove the book serves client demand rather than the trader\'s view. The documentation is the defense.'),

  q(4380336, 'Career Skills', CHAPTER, 'Volcker Rule exemptions',
    'Which of the following is actually a Volcker Rule exemption a US bank trading desk can rely on?',
    'Market-making in response to customer demand, hedging of specific risks the firm holds, underwriting, and dealing in US government securities',
    [
      ['Proprietary trading for the firm\'s own account in any equity', 'Pure prop trading in equities is the activity Volcker is designed to prohibit. It is not an exemption.'],
      ['Trading on the personal account of senior bankers', 'Personal account trading is regulated separately and is not a Volcker exemption.'],
      ['Investing the bank\'s pension fund in private equity', 'Pension fund management is a different framework. The covered fund restrictions in Volcker are unrelated to pension allocations.'],
    ],
    'The Volcker exemptions are narrow and operational: market-making, hedging, underwriting, and government securities trading. Each requires documentation that the activity meets the exemption\'s tests — the exemption is not a label, it is a daily discipline.'),

  q(4380337, 'Career Skills', CHAPTER, 'Basel III RWA pressure',
    'A fixed-income trading desk\'s gross P&L is strong, but the desk\'s allocated risk-weighted assets (RWA) under Basel III are large, hurting the desk\'s return on RWA. What does this dynamic push the desk to do?',
    'Reduce balance-sheet-intensive positions, favor cleared and netted exposures, and unwind low-RoRWA inventory even when it is profitable in absolute dollars',
    [
      ['Increase positions to spread the RWA cost over more revenue', 'Adding RWA-intensive positions makes the RoRWA problem worse, not better. The fix is denominator reduction, not numerator inflation.'],
      ['Ignore RWA because regulators only care about VaR', 'RWA and leverage ratio are central Basel III constraints — equally binding as VaR for many desks. Ignoring them ignores how the desk is actually graded.'],
      ['Switch all positions into illiquid bespoke instruments', 'Illiquid bespoke instruments typically carry *higher* RWA, not lower. The move would worsen the problem.'],
    ],
    'Basel III turned balance sheet into a scarce internal resource. A desk with high gross P&L and high RWA can be less valuable to the firm than a smaller desk with lower capital intensity — which is why the trading floor talks about RoRWA, not just dollar P&L.'),

  // ---------------------------------------------------------------------------
  // INVENTORY, FLASH P&L, SURVEILLANCE (4380338–4380340)
  // ---------------------------------------------------------------------------
  q(4380338, 'Career Skills', CHAPTER, 'Inventory aging discipline',
    'A credit desk\'s aging report shows several bonds in inventory for more than 30 days. Why does the desk care about aged inventory beyond the mark-to-market P&L?',
    'Aged inventory ties up balance sheet, accumulates funding cost, raises Volcker scrutiny about whether the position serves client demand, and often signals a mispriced or stale position',
    [
      ['Aged inventory automatically becomes the desk\'s property after 90 days', 'No such rule exists. Aged inventory is a flag for review, not a transfer of ownership.'],
      ['Aged inventory pays a regulatory subsidy', 'There is no subsidy. Aging is purely a cost — funding, capital, and scrutiny.'],
      ['Aged inventory cannot be sold under Reg NMS', 'Reg NMS is about equity execution venues; it does not prohibit selling aged bonds.'],
    ],
    'Aging reports are the discipline that prevents inventory from becoming permanent. Long-stale positions usually mean the bid the desk wants is not the bid the market will pay — and the longer the bond sits, the more obvious that becomes.'),

  q(4380339, 'Career Skills', CHAPTER, 'Flash P&L versus reconciled P&L',
    'A trader sends out a flash P&L of +$2.3M at 4:05 PM. The reconciled P&L the next morning is +$1.9M. What explains the typical gap?',
    'Flash P&L uses last-known prices and rough position files; reconciled P&L incorporates final marks, late trade adjustments, fees, and accrual corrections',
    [
      ['Flash P&L is illegal; only reconciled P&L is allowed', 'Flash P&L is standard practice. Reconciled is the official record, but flash exists for same-day risk management.'],
      ['The reconciled number is always lower because of taxes', 'Taxes are not part of intraday reconciliation. The differences are marks, fees, and trade timing.'],
      ['Flash and reconciled should always match exactly', 'They rarely match exactly because flash is an estimate. The gap is normal; large gaps are what get investigated.'],
    ],
    'Flash P&L is for same-day decisions; reconciled is for the books. Both matter, and traders who treat flash as final or reconciled as a surprise are missing the discipline that ties end-of-day risk to next-morning record-keeping.'),

  q(4380340, 'Career Skills', CHAPTER, 'Spoofing under Dodd-Frank Title VII',
    'Title VII of Dodd-Frank made spoofing — placing orders with intent to cancel before execution — explicitly illegal in US derivatives markets. The Navinder Sarao case (linked to the 2010 Flash Crash) and the Coscia case were prosecuted under this regime. What is the line that separates spoofing from legitimate order management?',
    'Intent to cancel before execution at the moment the order is placed — legitimate orders may also be cancelled, but they are placed with a genuine willingness to be filled',
    [
      ['The number of cancelled orders alone, regardless of intent', 'Cancellation rate alone is not the test. Many legitimate strategies cancel frequently; intent at order entry is the legal hinge.'],
      ['Whether the trader is registered with the SEC or CFTC', 'Registration is required separately. Spoofing prosecutions apply to registered and unregistered actors alike.'],
      ['Whether the order was placed by a human or an algorithm', 'Algorithmic spoofing is fully prosecutable. The Coscia case explicitly involved automated layering.'],
    ],
    'Spoofing is an intent-based offense — the order has to be placed without genuine willingness to trade. Prosecutors use order-cancellation patterns, audit logs, and surrounding context to prove intent; "I cancel a lot" is not a defense, and "the algorithm did it" is not a shield.'),
]

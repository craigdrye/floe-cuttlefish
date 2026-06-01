import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// HEDGE FUNDS — Chapter 1: Strategy, Mandate, and Edge
// ----------------------------------------------------------------------------
// 47 canonical questions (IDs 4400000–4400046) extending the existing trio
// (4200050–4200052 in careerAgentGeneratedRoadmapFinance.ts) for the first
// chapter of the hedge funds roadmap.
//
// Coverage:
//   - Strategy types (10): long/short equity (130/30, gross/net), event-driven
//     (merger arb, distressed, special situations), macro (discretionary vs
//     systematic), relative value (FI arb, vol arb), market neutral,
//     multi-strategy, quant (stat arb, mid-freq, HFT).
//   - Mandate features (10): AUM scaling, gross/net limits, sector
//     concentration, liquidity matching, drawdown limits, leverage caps.
//   - Edge sources (10): information, analytical, execution, structural.
//   - Capital structure (9): 2-and-20, high water mark, hurdle rate, founders
//     share class, side pockets, gates, redemption notice.
//   - Cap intro & LP relations (8): prime broker cap intro, allocator types,
//     DDQ basics, ODD red flags.
//
// Voice: matches jargonBusters.ts and the existing finance polish files —
// specific, evidence-anchored, no filler. Every wrong answer carries a
// bespoke whyWrong tied to real PM/analyst misconceptions in a US LP
// structure (Delaware feeder / Cayman master, US qualified purchaser LPs).
// ----------------------------------------------------------------------------

const SOURCE = 'Floe HF Ch1 canonical bank'

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

const CHAPTER = 'Strategy, Mandate, and Edge'

// Difficulty distribution: 14 at 3 (~30%), 24 at 4 (~51%), 9 at 5 (~19%).
export const HF_CH1_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Strategy types (10)
  4400000: 3, // 130/30 gross/net mechanics
  4400001: 4, // L/S equity net exposure target
  4400002: 3, // Merger arb basic spread
  4400003: 4, // Distressed vs special situations
  4400004: 4, // Discretionary vs systematic macro
  4400005: 4, // Fixed income relative value
  4400006: 5, // Vol arb realized vs implied
  4400007: 3, // Market neutral defined
  4400008: 4, // Multi-strategy pod structure
  4400009: 5, // Stat arb vs HFT distinction

  // Mandate features (10)
  4400010: 3, // AUM ceiling by strategy
  4400011: 4, // Gross vs net exposure limits
  4400012: 4, // Sector concentration cap
  4400013: 4, // Liquidity matching to lockup
  4400014: 5, // Drawdown limit triggers
  4400015: 3, // Leverage cap definition
  4400016: 4, // Position size limit
  4400017: 4, // Hard vs soft mandate breach
  4400018: 3, // Single-name cap vs sector cap
  4400019: 4, // Side-pocket eligibility in mandate

  // Edge sources (10)
  4400020: 3, // Information edge legality
  4400021: 4, // Expert network post-SAC compliance
  4400022: 4, // Analytical edge defined
  4400023: 4, // Execution edge for fundamental fund
  4400024: 5, // Structural edge from capital base
  4400025: 4, // Hold period as structural edge
  4400026: 3, // Edge decay over time
  4400027: 4, // Edge vs luck attribution
  4400028: 5, // Behavioral edge vs information edge
  4400029: 4, // Edge in a crowded factor

  // Capital structure (9)
  4400030: 3, // 2-and-20 mechanics
  4400031: 4, // High water mark
  4400032: 4, // Hurdle rate hard vs soft
  4400033: 4, // Founders share class economics
  4400034: 5, // Side pocket mechanics
  4400035: 4, // Gates investor-level vs fund-level
  4400036: 3, // Redemption notice period
  4400037: 4, // Lockup period purpose
  4400038: 5, // Most favored nation clause

  // Cap intro & LP relations (8)
  4400039: 3, // Prime broker cap intro role
  4400040: 4, // FoHF as allocator
  4400041: 4, // Pension vs endowment behavior
  4400042: 4, // Sovereign wealth fund DDQ depth
  4400043: 3, // Family office allocation style
  4400044: 4, // DDQ structure
  4400045: 5, // ODD red flag: admin
  4400046: 4, // ODD red flag: valuation policy
}

export const hfCh1Questions: Question[] = [
  // -------------------------------------------------------------------------
  // STRATEGY TYPES (4400000–4400009)
  // The first job of a strategy brief is to name what the fund actually does
  // — the wrong label drags the wrong risk limits, the wrong LPs, and the
  // wrong PMs into the room.
  // -------------------------------------------------------------------------
  q(4400000, 'Career Skills', CHAPTER, '130/30 gross and net exposure',
    'A long/short equity fund describes itself as "130/30." A new analyst is asked what gross and net exposure that implies on a $1B AUM book. What is the correct read?',
    'Gross exposure ~160% ($1.3B long + $300M short = $1.6B), net exposure ~100% ($1.3B – $300M = $1.0B) — the fund is essentially fully long-biased with a small short overlay funded by the extension',
    [
      ['Gross 130% and net 30%, because the fund is 130% long and 30% short', 'Gross is the sum of absolute exposures (long + short), not the long alone. The 130/30 label tells you the legs, not the gross — gross is 160%.'],
      ['Gross 100% and net 100%, because 130 minus 30 leaves a 100% balanced book', 'Net is 100% but gross is not — gross adds the short leg back. A 130/30 carries 60% more gross exposure than a long-only fund, which is the whole point of the structure.'],
      ['Gross 30% and net 130%, because the short is the active position and the long is the benchmark', 'The labelling convention is long-first then short, and gross sums both absolute values. Inverting the convention is a common mis-read by analysts moving from long-only.'],
    ],
    '130/30 is a long-extension product: ~100% net market exposure with extra gross from a short sleeve that funds an extra long sleeve. It is not market neutral and it is not a hedged fund in any meaningful sense — it is a long-only book with a tilt mechanism.'),

  q(4400001, 'Career Skills', CHAPTER, 'L/S equity net exposure target',
    'A long/short equity PM tells LPs the fund "runs net 30 to 50% with gross of 150 to 200%." A consultant asks what that implies for beta and what kind of return profile to expect. What is the cleanest answer?',
    'The fund carries roughly half of long-only market beta and aims to generate the rest from spread between longs and shorts — performance should look much more like long-only in up markets than the gross figure suggests, and the short book is the alpha vehicle, not the hedge',
    [
      ['The fund is roughly market neutral because gross is balanced between longs and shorts', 'Net 30–50% is materially net long, not neutral. Calling a 40% net book "balanced" is a category error that misleads LPs about the fund\'s actual market sensitivity.'],
      ['The fund will outperform in down markets because it has a meaningful short book', 'A net-long fund still loses money when markets fall. The short book reduces the loss versus long-only but does not flip the sign — net 40% means roughly 40% of the downside.'],
      ['Beta is irrelevant in L/S because gross exposure is what determines risk', 'Gross drives idiosyncratic risk and financing cost; net drives market beta. Conflating the two is exactly the mistake that produces surprise drawdowns in market sell-offs.'],
    ],
    'Net exposure is the market-beta dial; gross is the idiosyncratic-risk dial. A net 40% L/S fund is a partially-hedged long book — investors who want neutrality should look at a different mandate, and PMs who want to claim neutrality should run it.'),

  q(4400002, 'Career Skills', CHAPTER, 'Merger arbitrage spread mechanics',
    'Target trades at $48, acquirer\'s announced cash deal is $50, expected close in 4 months. An analyst pitches a merger arb long. What is the cleanest framing of the return and the risk?',
    'Gross spread is $2 (~4.2% on $48) over 4 months — annualizes to ~13% if the deal closes on time; downside is the break price (often well below pre-announcement levels) if the deal fails on regulatory or financing grounds',
    [
      ['Expected return is 4.2% with essentially no risk because the cash price is contractually agreed', 'Cash deals still break — antitrust review, financing failure, MAC clauses, shareholder votes. "Contractually agreed" is not the same as closed; the break risk is exactly what the spread compensates for.'],
      ['Annualize the 4.2% over 12 months for a 4.2% IRR estimate', 'Annualizing means multiplying by 12/holding-months. A 4 month hold at 4.2% gross is ~13% annualized, not 4.2% — this is the most common arithmetic slip on a merger arb pitch.'],
      ['The trade is short the target because the deal will close at the announced price', 'You go long the target and (for stock deals) short the acquirer in the deal ratio. Shorting the target is the opposite of the trade and would lose money if the deal closes as announced.'],
    ],
    'Merger arb earns the deal spread as compensation for break risk and timing risk. The trade is long the target (for cash deals) or long-target / short-acquirer (for stock deals at the ratio); the risk is the gap-down to the standalone price if the deal breaks.'),

  q(4400003, 'Career Skills', CHAPTER, 'Distressed vs special situations',
    'An event-driven PM distinguishes "distressed" from "special situations" in the strategy brief. What is the cleanest line between the two for an LP audience?',
    'Distressed trades the debt and equity of companies already in or near bankruptcy / restructuring — capital structure expertise drives returns; special situations covers solvent companies with a discrete catalyst (spin-off, post-reorg equity, activist campaign, index inclusion) where the credit is not the central question',
    [
      ['Distressed is long-only credit; special situations is short-only equity', 'Distressed funds run both long and short across the capital structure, and special sits funds do the same. The cut is the credit condition of the issuer, not the direction of the trade.'],
      ['Distressed and special situations are interchangeable labels for the same strategy', 'They share an event-driven mindset but require different skill sets — distressed analysts read bankruptcy code and indenture covenants; special sits analysts read corporate actions and proxy filings. Conflating them mislabels the PM\'s actual edge.'],
      ['Distressed means private market only; special situations means public market only', 'Distressed includes liquid traded debt (defaulted bonds, post-petition trade claims) and private claims. Special sits is overwhelmingly public. The public/private split does not map cleanly onto the distinction.'],
    ],
    'The clean cut is credit condition of the issuer. Distressed lives in the indenture and the bankruptcy code; special situations lives in the proxy statement and the corporate-action calendar. Confusing them puts the wrong analysts on the wrong deals.'),

  q(4400004, 'Career Skills', CHAPTER, 'Discretionary vs systematic macro',
    'A macro fund pitches itself as "discretionary global macro." An LP asks how that differs from a systematic macro fund. What is the most useful answer?',
    'Discretionary PMs size trades based on judgment about regimes, narratives, and positioning — book turnover is moderate and the PM can override the model; systematic macro runs a rules-based signal across many markets with little PM override and typically much higher position count',
    [
      ['Discretionary macro is fundamental analysis; systematic macro is technical analysis', 'Both use macroeconomic data; the cut is decision process. Systematic macro is mostly trend-following or carry-based across rates, FX, and commodities — not "technical analysis" in the equity sense.'],
      ['Discretionary macro uses leverage; systematic macro does not', 'Systematic macro typically runs higher leverage than discretionary because the diversification across hundreds of markets supports it. Leverage is not the cut.'],
      ['Discretionary macro trades only G10; systematic macro trades only emerging markets', 'Both styles trade global markets. The investable universe is not the distinction.'],
    ],
    'The cut is decision process, not asset class or leverage. Discretionary macro is a PM expressing a view through a small number of high-conviction trades; systematic macro is a model running rules-based signals across many markets simultaneously.'),

  q(4400005, 'Career Skills', CHAPTER, 'Fixed income relative value',
    'A relative-value PM describes a "2s/10s flattener funded in repo" as a core trade. What is the right framing of the strategy and what it earns?',
    'The trade is short 2-year Treasury futures, long 10-year Treasury futures, sized to be DV01-neutral — it earns when the 2s/10s curve flattens regardless of the parallel shift, and the repo funding lets the PM run high gross with modest net cash usage',
    [
      ['The trade is a directional bet that long-dated yields will fall', 'A flattener can profit from yields rising more at the front end *or* falling more at the long end — the trade is on the shape of the curve, not the direction. DV01-neutral sizing strips out the parallel shift.'],
      ['The trade is risk-free arbitrage because both legs are Treasuries', 'Curve trades carry curve-shape risk, basis risk, and convexity risk. "Both legs are Treasuries" only eliminates credit risk; it does not eliminate the trade\'s P&L drivers.'],
      ['The trade earns the coupon differential between the two notes', 'The carry component is the funding and roll, not the coupon differential alone. P&L is dominated by curve movement and convexity, not coupon arithmetic.'],
    ],
    'Fixed-income RV decomposes the rate curve into pieces (level, slope, convexity) and trades each one in isolation. The skill is sizing the legs so that the unwanted exposures (parallel shift, credit) cancel and the wanted exposure (curve shape) remains.'),

  q(4400006, 'Career Skills', CHAPTER, 'Volatility arbitrage core trade',
    'A vol-arb PM is long S&P 500 1-month options and delta-hedges them daily. What is the PM actually betting on, and where does the P&L come from?',
    'The PM is long realized volatility versus implied — gains come if the gamma harvested by daily rebalancing exceeds the theta paid on the long option position; the bet is that the option was sold cheap relative to how much the underlying will actually move',
    [
      ['The PM is betting that the S&P will go up because long calls profit when the market rises', 'Daily delta-hedging strips out the directional bet — the PM is left with a pure long-vega / long-gamma / short-theta position. Direction does not drive the P&L in a delta-hedged book.'],
      ['The PM is betting that implied volatility will rise so the options can be sold back at a higher vol', 'That is a long-vega trade and works for vol-of-vol exposure, but the core vol-arb claim is *realized > implied*. Daily rebalancing converts realized moves into cash gamma even if implied stays flat.'],
      ['The PM has no directional exposure because options are linear instruments hedged with the underlying', 'Options are convex (non-linear). The convexity is exactly the reason daily rebalancing produces P&L — a linear instrument hedged dynamically would produce nothing.'],
    ],
    'Long-vol arb is long gamma, short theta, delta-hedged. The PM wins when actual realized moves exceed the implied volatility the option was bought at. It is one of the cleanest examples of a strategy where the trade structure is the edge, not the market view.'),

  q(4400007, 'Career Skills', CHAPTER, 'Market neutral defined',
    'A consultant asks an L/S PM what "market neutral" means in the fund\'s mandate. What is the right answer?',
    'Net market exposure (long $ minus short $) is held close to zero, and the book is also typically beta-neutral after adjusting for the longs\' and shorts\' actual betas — sector- and factor-neutrality are separate and stricter constraints layered on top',
    [
      ['Market neutral means the fund has equal numbers of long and short positions', 'Position count tells you nothing about exposure. Ten long $100M positions versus ten short $10M positions is wildly net-long, even though the count is equal.'],
      ['Market neutral means the fund returns zero correlation with the market over any window', 'Zero correlation is the *goal* of market neutrality but not its definition — short-window correlations bounce around even in a well-constructed neutral book. The mandate defines the construction, not the realised correlation.'],
      ['Market neutral means the fund has zero exposure to the stock market in any form', 'A market neutral L/S fund still has equity-specific risk on every name. "Market neutral" refers to the market factor (beta), not to all equity exposure.'],
    ],
    'Market neutral is a construction constraint: dollar-neutral and beta-neutral against a stated benchmark. The fund still carries idiosyncratic risk on every position — that is where the alpha is supposed to live.'),

  q(4400008, 'Career Skills', CHAPTER, 'Multi-strategy pod structure',
    'A new analyst joins a "multi-strategy" platform fund and is told the firm runs "pods." How should the analyst describe the structure to an outside friend?',
    'The platform allocates capital to many independent teams (pods), each with its own PM, sleeve of capital, tight stop-loss, and market-neutral / sector-neutral mandate — the firm extracts alpha from the diversified sum and tolerates very little drawdown at the individual-pod level',
    [
      ['A pod is a single analyst who reports directly to the firm CIO', 'A pod is typically a PM with their own analyst team, sometimes 4–10 people. The defining feature is the capital sleeve and the tight risk budget, not the headcount.'],
      ['Pods share capital and ideas freely across the firm to maximize edge', 'Pods are deliberately walled off from each other to avoid correlation and to enforce risk discipline. Idea sharing is heavily restricted at the major multi-strats.'],
      ['Pods run long-only mandates and the firm hedges market exposure centrally', 'Most pod structures require the pod itself to run sector- or market-neutral; firm-level overlays are limited. Long-only pods would defeat the diversification logic of the platform.'],
    ],
    'A multi-strat is an internal allocator: many independent neutral pods, each with a strict stop-loss, summed up at the firm level. The structural edge is diversification across uncorrelated teams plus the ability to fire underperforming pods quickly.'),

  q(4400009, 'Career Skills', CHAPTER, 'Stat arb vs HFT',
    'An LP asks the difference between "statistical arbitrage" and "high-frequency trading." How should the IR team answer cleanly?',
    'Stat arb holds positions from hours to several days and trades baskets of correlated names on mean-reversion or factor signals — capacity is in the billions; HFT holds positions from microseconds to minutes, trades on market-microstructure signals (order book, latency), is heavily capacity-constrained, and competes on infrastructure rather than research',
    [
      ['They are the same thing — both use quantitative models on equity markets', 'Holding periods, signal types, and the source of edge differ by orders of magnitude. A stat arb PM and an HFT PM rarely work on the same problems despite both being "quant."'],
      ['Stat arb is short-horizon; HFT is long-horizon', 'The opposite — HFT is the shortest holding period in the market (microseconds to minutes). Stat arb is mid-frequency (hours to days).'],
      ['HFT is illegal market manipulation; stat arb is legal quant trading', 'HFT firms operate as registered market makers or proprietary trading firms within SEC rules. Equating HFT with manipulation is a category error; specific abusive practices (spoofing, layering) are illegal but the strategy itself is not.'],
    ],
    'Holding period and signal source are the cleanest cuts. Stat arb earns from cross-sectional mispricings in baskets; HFT earns from microstructure imbalances measured in microseconds. Both are quant, but the businesses, capacity, and infrastructure profiles are entirely different.'),

  // -------------------------------------------------------------------------
  // MANDATE FEATURES (4400010–4400019)
  // The mandate is the contract between the PM and the LPs. Every constraint
  // in it is there because someone, somewhere, lost money when it wasn\'t.
  // -------------------------------------------------------------------------
  q(4400010, 'Career Skills', CHAPTER, 'AUM ceiling by strategy',
    'A small-cap L/S fund has $300M AUM and is hitting "soft close" conversations with LPs. Why would a small-cap PM voluntarily cap AUM when more capital generates more fees?',
    'Small-cap liquidity is finite — at higher AUM the fund cannot enter or exit positions without moving the price against itself, which destroys the strategy\'s alpha; capping AUM protects existing LPs\' returns and the manager\'s long-run track record',
    [
      ['AUM caps are a marketing tactic to create artificial scarcity', 'Some funds use the framing that way, but the underlying constraint is real and binding in small-cap, distressed, micro-cap macro, and other capacity-limited strategies. Treating the cap as pure marketing misreads the economics.'],
      ['Regulators require small-cap funds to cap AUM under SEC position-size rules', 'There is no SEC AUM cap by strategy. Position-size disclosure (13F, 13D thresholds) exists but does not cap fund AUM. The cap is a manager decision, not a regulatory one.'],
      ['Larger AUM forces the fund into less risky positions, reducing alpha', 'Larger AUM forces the fund into *larger* positions in *more liquid* names — usually higher market cap, not lower risk per se. The capacity problem is liquidity, not risk appetite.'],
    ],
    'Capacity is strategy-specific. Small-cap, distressed, vol arb, and merger arb all hit capacity ceilings well before liquid macro or large-cap L/S. A PM who keeps raising past the capacity point is harvesting fees at the LPs\' expense and the discipline to soft-close is a signal to allocators.'),

  q(4400011, 'Career Skills', CHAPTER, 'Gross vs net exposure limits',
    'A fund mandate says "gross exposure capped at 200%, net exposure capped at 60%." What does this combination tell you about how the PM is allowed to construct the book?',
    'The PM can run up to 130% long and 70% short (gross 200, net 60), or 160% long and 100% short (gross 260) is not allowed because gross is the binding limit — the gross cap controls idiosyncratic and financing risk, the net cap controls market beta',
    [
      ['The PM must run at exactly 200% gross and 60% net at all times', 'Caps are ceilings, not targets. The PM operates anywhere under both caps; sitting at the ceiling continuously would itself be a risk-management concern.'],
      ['Gross and net caps measure the same thing in different units', 'Gross sums absolute exposures; net subtracts shorts from longs. They constrain different things — gross constrains overall position size and leverage, net constrains market beta. A fund can be well under one and over the other.'],
      ['Net cap is a regulatory limit, gross cap is an internal limit', 'Both are mandate (LP) limits, not regulatory limits. The Investment Advisers Act does not set gross/net caps; they appear in the offering documents and in side letters.'],
    ],
    'Gross and net caps are independent dials. Gross caps overall position size (and indirectly leverage and prime-brokerage exposure); net caps market beta. A well-written mandate names both because they manage different risks.'),

  q(4400012, 'Career Skills', CHAPTER, 'Sector concentration limit',
    'A fund mandate says "no more than 25% gross exposure in any single GICS sector." A PM is bullish on energy and currently runs 22% gross in energy. What is the practical implication?',
    'The PM has roughly 3% gross of headroom — adding a meaningful new energy position will breach the limit, so the PM must either trim existing energy exposure, find the idea elsewhere, or formally request a side-letter accommodation; the limit binds across the fund, not per LP',
    [
      ['Sector limits apply only to longs, not shorts, so a short energy position is unaffected', 'Sector caps almost always apply to gross (long + short absolute value), not just long. A short energy position contributes to gross energy concentration the same way a long does.'],
      ['The 25% cap means the fund must always run 25% in each of the major sectors', 'Caps are upper bounds, not target allocations. A diversified mandate may also have a minimum exposure to certain factors, but a sector cap by itself is purely a ceiling.'],
      ['Sector limits are advisory and the PM can breach them with the CFO\'s permission', 'A mandate breach is a mandate breach — CFO permission is not the cure. Breaches require either a pre-cleared side letter, a formal LP consent, or active reduction. The chief risk officer (or COO), not the CFO, governs mandate compliance.'],
    ],
    'Sector concentration limits protect against single-factor blow-ups (think Energy 2014–2016, Financials 2008). They bind on gross exposure across the full fund, not per LP, and the cure for an approaching breach is to trim or to source the idea elsewhere — not to ask permission.'),

  q(4400013, 'Career Skills', CHAPTER, 'Liquidity matching to lockup',
    'A fund offers monthly redemption with 60-day notice. The PM wants to start holding 15% of the book in private credit deals with 2-year hold periods. What is the structural problem?',
    'The liquidity profile of the assets must match (or be more liquid than) the redemption terms offered to LPs — if redemptions arrive and the fund can only sell its liquid 85%, it ends up with a concentrated illiquid stub and a "liquidity mismatch" that has broken many funds (think Third Avenue Focused Credit, 2015)',
    [
      ['The PM can hold any assets they like as long as the prospectus does not specifically exclude them', 'Even if not specifically excluded, holding illiquid assets in a liquid-terms fund is an ODD red flag and a contractual problem — LP terms imply the assets will be available to meet redemptions on the stated cycle.'],
      ['Private credit is more liquid than equities because it pays cash coupons', 'Cash coupons pay interest; they do not return principal until maturity. Liquidity is the ability to exit the position at fair value on demand — private credit fails that test even when the borrower is current.'],
      ['The fund can use side pockets for the illiquid portion and continue offering monthly liquidity on the rest', 'Side pockets are an option but require LP consent (often unanimous or supermajority) and pre-existence in the offering documents. Side-pocketing 15% of the book unilaterally is not a free move.'],
    ],
    'Liquidity matching is the single most-tested feature of an operational due diligence review. The asset-side liquidity (how fast can the fund sell at fair value) has to match or exceed the liability-side terms (how fast can LPs leave). Mismatches end funds.'),

  q(4400014, 'Career Skills', CHAPTER, 'Drawdown limit triggers',
    'A multi-strat pod operates under a "10% drawdown stop" — at -5% the pod is force-deleveraged to half size, at -10% the pod is closed. The pod is at -6.5% YTD. What is the operational reality?',
    'The pod is already running at reduced size and capital — the next 3.5 percentage points of drawdown end the pod entirely, so the PM must either find a high-conviction recovery within the remaining buffer or actively de-risk further; in practice many pods don\'t recover from this state because the size reduction itself caps the upside',
    [
      ['The stop is a soft guideline that the PM can renegotiate with the CIO if they have a strong thesis', 'Pod stops at major multi-strats (Millennium, Citadel, Point72) are widely understood to be operationally hard. Renegotiation is rare and almost never extends the stop further once a pod is at deleveraged size.'],
      ['Drawdown stops apply only at year-end, so the PM has time to recover before any action is taken', 'Stops trigger when the threshold is breached, not on a calendar. Mid-year stop-outs are common and the PM is expected to know the live distance to the stop at all times.'],
      ['The stop measures peak-to-trough drawdown only against the firm\'s overall NAV, not the pod\'s', 'Pod-level drawdown is measured against the pod\'s own allocated capital and high-water mark, not the firm. That is the whole point of the pod structure — isolating each PM\'s risk.'],
    ],
    'Drawdown stops are the central risk-management tool in multi-strat platforms. They are operationally hard, mechanically enforced, and the asymmetry (deleveraged on the way down, no symmetric reload on the way up) is a feature, not a bug — the firm prefers to fire a struggling pod than risk a catastrophic loss.'),

  q(4400015, 'Career Skills', CHAPTER, 'Leverage cap definition',
    'A fund mandate says "leverage capped at 3x." A new analyst asks what unit the 3x refers to. What is the cleanest answer?',
    'Leverage is typically defined as gross exposure divided by NAV — a 3x cap means the sum of long-dollar plus short-dollar absolute values cannot exceed 3 times the fund\'s net asset value; the mandate should specify this because alternative definitions (long-only leverage, regulatory leverage, VaR-based leverage) produce very different numbers',
    [
      ['Leverage is always measured as borrowed cash divided by equity capital', 'Borrowed-cash leverage is the prime-brokerage definition and ignores derivative exposures (futures, swaps, options). Fund mandates almost always use gross-exposure / NAV instead, because it captures derivative leverage.'],
      ['3x means the fund borrows three dollars for every dollar of capital from prime', 'That is one possible interpretation but is not the standard mandate definition. Gross-exposure / NAV captures both cash borrow and synthetic leverage and is the modal definition.'],
      ['Leverage cap is a regulatory definition under Regulation T', 'Reg T governs broker-dealer margin lending, not fund leverage. Hedge funds use prime brokerage margin, which is bespoke per fund and not bound by Reg T limits.'],
    ],
    'The first job on a leverage clause is to define the unit. Gross-exposure-to-NAV is the modal hedge fund definition and is what most LPs interrogate during DDQ. A mandate that says "3x leverage" without naming the unit is leaving the most important number ambiguous.'),

  q(4400016, 'Career Skills', CHAPTER, 'Position size limit',
    'A fund has a 5% single-position size limit (at cost). A position bought at 4% has appreciated to 7%. What is the correct mandate response?',
    'A passive breach from appreciation is usually permitted by the mandate — the PM is not forced to trim immediately, but new purchases at the larger size are not allowed and most mandates require trimming within a defined cure window (often 30–90 days) or active monitoring; the document should specify',
    [
      ['The PM must trim immediately because the position is over the limit', 'Most mandates distinguish active breaches (PM bought more) from passive breaches (price moved). Forcing immediate sales of every appreciated position would generate destructive turnover.'],
      ['The 5% cap is at-cost so price appreciation can never breach it', 'At-cost helps but does not solve the issue — most mandates measure both at-cost and at-market, with the at-market limit higher (often 7.5 or 10%) to allow for appreciation. Saying "at-cost so it never breaches" oversimplifies how the document actually reads.'],
      ['The PM should sell down to 4% to restore the original sizing', 'There is no rule that says a winner has to be cut back to its original size. The mandate cares about breaches, not about preserving the entry weight.'],
    ],
    'Position size limits distinguish active from passive breaches. The mandate names the cap, the cure window, and whether the unit is at-cost, at-market, or both. A clean document gives the PM room for winners to grow without forcing destructive turnover.'),

  q(4400017, 'Career Skills', CHAPTER, 'Hard vs soft mandate breach',
    'The fund\'s mandate distinguishes "hard" and "soft" limits. A new IR hire is asked to explain the difference to a consultant. What is the right framing?',
    'Hard limits are absolute — a breach triggers immediate trim, reporting to LPs, and often LP consent requirements; soft limits are targets or alerts — a breach triggers internal review and PM justification but the position can remain if the breach is small and explained; documents should always identify which is which',
    [
      ['Hard limits are SEC rules; soft limits are internal PM preferences', 'Both hard and soft limits are mandate-level (LP-level), not regulatory. The terminology refers to the consequence of a breach, not who set the rule.'],
      ['Hard limits apply at quarter-end; soft limits apply intraday', 'Both can apply on any measurement frequency named in the document. The distinction is severity of cure, not measurement timing.'],
      ['Soft limits are limits the PM can ignore; hard limits are limits the PM must follow', 'Soft limits cannot be ignored — they trigger review, justification, and sometimes LP notification. Saying they can be "ignored" misreads the COO\'s job and is exactly the framing that produces operational due diligence failures.'],
    ],
    'Hard limits have automatic cures; soft limits have managed cures. Both are real constraints. A well-drafted mandate names which is which, the measurement frequency, and the escalation path — a vague mandate is an ODD red flag.'),

  q(4400018, 'Career Skills', CHAPTER, 'Single-name cap vs sector cap',
    'A mandate has both a 5% single-name cap and a 25% sector cap. Why have both rather than just one?',
    'They guard against different failure modes — single-name caps stop a fraud or earnings blow-up from sinking the fund (think Wirecard at-size), sector caps stop a sector-wide drawdown from sinking the fund (think Energy 2014–16); five 4.9% positions in the same sector pass the name cap but concentrate sector risk',
    [
      ['Sector caps make single-name caps unnecessary because they already constrain position size', 'Sector caps allow many small positions in one sector that aggregate into a large exposure. Without a single-name cap, those small positions can still individually hide concentration risk in the largest one.'],
      ['Both limits are SEC requirements for 40-Act funds and apply to all hedge funds', 'Most hedge funds are exempt 3(c)(7) or 3(c)(1) vehicles and not subject to 40-Act diversification rules. Mandate-level caps are LP-imposed, not SEC-required.'],
      ['Single-name caps replace sector caps in concentrated funds', 'A concentrated mandate may relax both caps, but the single-name cap does not "replace" the sector cap conceptually — they constrain orthogonal risks.'],
    ],
    'Single-name caps and sector caps protect against orthogonal risks. The former limits idiosyncratic blow-ups, the latter limits factor blow-ups. A serious mandate has both, plus often a top-five-names concentration limit and a factor-exposure limit on top.'),

  q(4400019, 'Career Skills', CHAPTER, 'Side-pocket eligibility in mandate',
    'A fund\'s offering memorandum allows the GP to designate up to 10% of NAV in "side pockets." A PM wants to take a private placement in a name they already own publicly. What does the mandate eligibility actually permit?',
    'The GP can move the illiquid private slice into a side pocket if the position fits the offering memo definition of an eligible asset (typically illiquid or hard-to-value) — investors who redeem are paid out of the liquid book and remain pro-rata in the side pocket until it monetizes, so existing LP economics are protected',
    [
      ['Side pockets allow the GP to move losing positions out of NAV to avoid showing losses', 'Side pockets are for *illiquid or hard-to-value* assets, not for unrealised losses on liquid positions. Using them to hide losses is fraudulent and a textbook ODD red flag.'],
      ['Side pockets are a tax structure — they convert short-term gains into long-term', 'Side pockets are a liquidity and valuation tool, not a tax tool. Holding period for tax purposes still runs from the original purchase date.'],
      ['Once side-pocketed, the asset cannot ever be re-included in the main fund NAV', 'Side pockets typically resolve back to NAV either when the asset becomes liquid (IPO, sale) or is written off. The structure is temporary by design.'],
    ],
    'Side pockets exist to handle assets that don\'t fit the main fund\'s liquidity profile. The eligibility criteria, the cap, the consent mechanics, and the unwind path all have to be pre-specified in the offering memo — and the LPAC (limited partner advisory committee) typically reviews any new side-pocket designation.'),

  // -------------------------------------------------------------------------
  // EDGE SOURCES (4400020–4400029)
  // Information / analytical / execution / structural. Every claimed edge
  // should be testable; "we work hard" is not an edge.
  // -------------------------------------------------------------------------
  q(4400020, 'Career Skills', CHAPTER, 'Information edge legality',
    'A PM claims "information edge from primary research." An LP asks for examples and the boundary between primary research and material nonpublic information (MNPI). What is the right framing?',
    'Primary research means building a public-market mosaic from individually non-material sources — store counts, satellite imagery, freight data, expert calls on industry trends, public filings cross-referenced — none of which is MNPI on its own; the legal line is whether any single input was material and nonpublic, not whether the conclusion is non-consensus',
    [
      ['Primary research is illegal under Rule 10b5-1 because it generates non-public conclusions', 'Rule 10b5-1 governs *trading on* material nonpublic information, not generating non-consensus conclusions. The conclusion can be entirely private; only the inputs have to be either public or non-material.'],
      ['Any expert call counts as MNPI if it produces actionable insight', 'Expert calls on industry trends, customer behavior, or technical questions are legal. They become MNPI only if the expert is sharing material nonpublic facts about a specific covered company. The SAC settlement (2013) made the boundary much clearer post-2014.'],
      ['Information edge requires inside contacts at the companies being traded', 'That would be MNPI, not edge — that is exactly the line research compliance is drawn against. Primary research builds informational depth without using insider channels.'],
    ],
    'The post-SAC compliance norm is sharp: every input has to be either public or non-material, and the mosaic is the analyst\'s contribution. "Information edge" is legal when it is mosaic depth; it is illegal when it is access to a single material nonpublic fact, no matter how it is obtained.'),

  q(4400021, 'Career Skills', CHAPTER, 'Expert network compliance post-SAC',
    'A fund uses an expert network for industry research. Post-2014, what is the modal compliance setup that funds put in place to make the channel defensible?',
    'Pre-call topic clearance with compliance, prohibited-company lists tied to current positions, "named-account" prohibitions (no calls with employees of covered companies), call recording or attestation, and a written affirmation from the expert that they will not share confidential information about their employer',
    [
      ['Compliance has no role because expert networks are vetted by the platform itself', 'Platform-level vetting (Gerson Lehrman, Third Bridge, etc.) is a precondition, not a substitute. Funds layer their own compliance on top because the platform cannot police every conversation.'],
      ['Funds avoid expert networks entirely because of the SAC precedent', 'Expert networks are widely used at fundamental L/S funds. The SAC case targeted specific MNPI sharing, not the channel itself. The compliance setup is the cure, not abandonment.'],
      ['The expert\'s employer must approve every call before it happens', 'Employer approval is required at some restricted institutions (former government, certain regulated industries) but is not the general rule. The compliance setup is built around the expert\'s representations, not employer pre-approval.'],
    ],
    'Expert networks are legal and useful when wrapped in compliance: topic clearance, name restrictions, recordings or attestations, and no covered-company employees. The SAC settlement set the bar — what changed in 2014 was the layer of process around the channel, not the channel itself.'),

  q(4400022, 'Career Skills', CHAPTER, 'Analytical edge defined',
    'A quant equity PM claims "analytical edge — we model the business better than the sell-side." What does that mean concretely and how is it tested?',
    'The PM builds a driver model (unit economics, cohort retention, segment mix) that derives different forecasts from the same public inputs the sell-side uses — the edge is tested by tracking the model\'s prediction accuracy against actual reported numbers and against consensus over multiple quarters',
    [
      ['Analytical edge means having a bigger Excel model than competitors', 'Model size is not edge. A 10,000-row model that produces consensus forecasts has no edge; a 500-row model that produces non-consensus forecasts that come true has edge. The output is what matters, not the input volume.'],
      ['Analytical edge requires proprietary access to company data', 'Proprietary data access would be information edge (or MNPI, depending on source). Analytical edge derives non-consensus output from *the same public inputs* anyone could have used.'],
      ['Analytical edge is unfalsifiable because every analyst claims it', 'Analytical edge is falsifiable through model-vs-actual tracking over time. PMs who claim it should be able to point at a track record of out-of-consensus calls that came true — if they cannot, the claim is just marketing.'],
    ],
    'Analytical edge is the cheapest claim to make and the hardest to prove. The test is non-consensus predictive accuracy over time on the same public inputs. PMs who track their model accuracy quarter-by-quarter and share it with LPs are the ones whose claim is defensible.'),

  q(4400023, 'Career Skills', CHAPTER, 'Execution edge for fundamental fund',
    'A fundamental L/S PM claims "execution edge — we get into and out of positions better than peers." An LP is skeptical. What\'s a realistic execution edge for a fundamental fund (not HFT)?',
    'Patience and discipline on entry/exit windows, use of algos (VWAP, TWAP, implementation shortfall) and dark pools to reduce market impact, and a trading desk that knows the float and short interest of every name — meaningful for thinly traded mid- and small-caps but unlikely to be the dominant edge',
    [
      ['Beating HFT firms on microsecond latency in S&P 500 names', 'A fundamental fund will never beat HFT on latency — different infrastructure, different game. Claiming this in an LP pitch destroys credibility instantly.'],
      ['Getting earlier fills on IPO allocations from prime brokers', 'IPO allocation is a banking relationship outcome, not a tradeable execution edge. It is also small relative to ongoing portfolio P&L.'],
      ['Trading every position with market orders to ensure fills', 'Market orders in illiquid names *create* implementation shortfall — they are the opposite of execution edge. A trading desk\'s edge is restraint, not haste.'],
    ],
    'Execution edge for a fundamental fund is mostly about restraint and tools — VWAP/TWAP algos, dark pools, patience in low-liquidity names. It is rarely the dominant edge but it is real, and the absence of it (sloppy execution destroying alpha) shows up in performance attribution.'),

  q(4400024, 'Career Skills', CHAPTER, 'Structural edge from capital base',
    'A long-term-oriented fund describes its "structural edge" as coming from a stable capital base. What does that mean in practice and why does it create alpha?',
    'Long lockups (2–3 years), gating provisions, and a base of patient LPs (endowments, sovereigns, family offices with multi-decade horizons) let the PM hold contrarian positions through drawdown without forced selling — the edge is in the asset selection that quarterly-redemption funds cannot afford to make',
    [
      ['Capital structure is irrelevant to alpha because all funds invest in the same opportunities', 'Two funds looking at the same trade idea will reach different conclusions if one has 2-year lockups and the other has monthly redemptions. The opportunity set is filtered by capital terms — long-lockup funds can hold setups short-term funds cannot.'],
      ['Structural edge means having more capital than competitors so the fund can outbid them', 'AUM size is not structural edge — in many strategies it is a *drag* on alpha through capacity constraints. The edge from structure is patience, not scale.'],
      ['Structural edge is just marketing language for "trust us during drawdowns"', 'Real structural edge is encoded in the partnership agreement — lockups, gates, side pockets, redemption notice periods. It is a contractual feature, not just a vibe.'],
    ],
    'A stable capital base lets the PM act on time-horizon arbitrage — positions that work over 2 years but draw down over 6 months are uninvestable for a quarterly-redemption fund. Structural edge shows up in returns precisely because most allocators chase short windows and the few who can hold get paid for it.'),

  q(4400025, 'Career Skills', CHAPTER, 'Hold period as structural edge',
    'A fund pitches "5-year average hold period" as an edge. An LP asks how that translates to better returns. What is the cleanest explanation?',
    'Most active management is competing in the 1-quarter to 1-year window where the market is most efficient and most crowded — a fund that can underwrite a 5-year thesis competes in a less-crowded window, can hold through interim noise, and pays less in trading costs and taxes',
    [
      ['Long hold period reduces fees because the fund trades less, and the fee savings are the edge', 'Trading costs and short-term capital gains taxes do matter, but they are a secondary benefit. The primary edge is competing on a different horizon than the rest of the market.'],
      ['Long hold period is the same as buy-and-hold and produces market returns by definition', 'A 5-year hold on actively selected positions is not the same as buy-and-hold the index. The selection is the source of alpha; the hold period is what lets the selection compound.'],
      ['Long hold period means the PM cannot react to bad news, which is a disadvantage', 'A 5-year average does not mean every position is held 5 years no matter what — it means the *thesis horizon* is 5 years. PMs still exit on thesis-break, just not on noise.'],
    ],
    'Time-horizon arbitrage is a real edge because the market is crowded with 1-quarter players and thin on 5-year players. The trade-off is that the PM cannot answer "what happened last quarter" with reference to the position — the LP has to be the kind that understands this in advance.'),

  q(4400026, 'Career Skills', CHAPTER, 'Edge decay over time',
    'A quant PM\'s mid-frequency signals have been performing worse over the past 18 months. What is the most likely explanation and the right response?',
    'Edge decay — the signal has been arbitraged away by other quant players running similar models, by improvements in market efficiency, or by capital flowing into the strategy; the response is to research new signals, retire decayed ones, and accept that no signal is permanent',
    [
      ['The signal is broken and the PM should immediately abandon the strategy', 'Signal underperformance over 18 months may be decay or may be a normal drawdown — quant strategies have multi-year drawdowns even when the signal still works. The cure is research and re-evaluation, not panic.'],
      ['The PM should leverage up the signal to capture more return per remaining unit of edge', 'Leveraging a decaying signal is the opposite of risk management — it amplifies losses if the signal continues to weaken. Decay calls for de-emphasis, not leverage.'],
      ['Mid-frequency quant signals are permanent because they are based on market microstructure', 'Even microstructure signals decay as the structure of markets changes (decimalization, fragmentation, dark pool growth). Permanent signals are a quant myth.'],
    ],
    'Edge decay is a normal feature of quant strategies. The discipline is to run a pipeline of signals at different ages — new ones in research, mid-life ones in production, decaying ones being phased out — so the fund\'s overall edge is renewed continuously.'),

  q(4400027, 'Career Skills', CHAPTER, 'Edge vs luck attribution',
    'A new PM has produced 3 years of strong returns at a multi-strat platform. The CIO wants to attribute the returns between skill and luck. What is the right framing?',
    'Three years is not statistically sufficient to distinguish skill from luck at typical hedge fund Sharpe ratios — the attribution should look at the *process* (idea pipeline, position-sizing discipline, risk-adjusted returns, hit rate across positions, behavior in drawdowns) rather than relying on the headline return number alone',
    [
      ['Three years of positive returns is sufficient evidence of skill', 'At a Sharpe of ~1, there is meaningful probability of 3 years of positive returns by chance. The literature is clear that several years of returns alone do not separate skill from luck — the process tells you more.'],
      ['Skill is unmeasurable; only realized returns count', 'Skill is partially measurable through process indicators (hit rate, batting average on conviction trades, risk-adjusted decomposition, attribution to factors vs idiosyncratic). Saying it is unmeasurable abandons the question.'],
      ['Returns that beat the benchmark prove skill by definition', 'Beating the benchmark over a short window is a noisy measure. Multi-strat platforms layer benchmark out-performance with attribution to factors, sector, and idiosyncratic alpha precisely because the headline isn\'t enough.'],
    ],
    'Distinguishing skill from luck requires either much more time than 3 years or detailed process attribution. Multi-strat CIOs lean on the latter — hit rate, batting average, position-size discipline, drawdown behavior — because the time series is too short to be definitive on its own.'),

  q(4400028, 'Career Skills', CHAPTER, 'Behavioral edge vs information edge',
    'A value PM claims "behavioral edge — we buy when others panic." An LP probes — what is the actual mechanism and how is it different from information edge?',
    'Behavioral edge comes from acting on the same publicly-available information *more rationally* than the marginal investor — buying forced-selling situations (redemption-driven, index-driven, downgrade-driven) at prices below intrinsic value because most participants are unwilling or unable to act; it is structural (capital base) and disciplinary (process), not informational',
    [
      ['Behavioral edge is the same as information edge because both require knowing more than the market', 'They are distinct. Information edge means knowing different facts; behavioral edge means acting differently on the same facts. The mechanisms, capital requirements, and risks are different.'],
      ['Behavioral edge is unfalsifiable because every value investor claims to be contrarian', 'It is testable through the fund\'s actual entries — were they into forced-selling situations? Was the price discount measurable? Did the fund hold through the drawdown? Tracking these gives a record that either supports or refutes the claim.'],
      ['Behavioral edge requires no capital discipline because contrarian trades work mechanically', 'Behavioral edge specifically requires capital discipline — the ability to hold through further drawdowns. Without it the PM gets shaken out exactly when the trade would have worked.'],
    ],
    'Behavioral edge is acting on widely-available information that other participants are unwilling or unable to act on. It is closely linked to structural edge (stable capital) — a fund without lockups cannot reliably harvest behavioral edge because its own LPs become the panic seller.'),

  q(4400029, 'Career Skills', CHAPTER, 'Edge in a crowded factor',
    'A long/short PM has historically generated alpha through a "high-quality compounders" tilt — high ROIC, low leverage, low capex. The factor has become widely owned and has underperformed for 18 months. What does this say about the PM\'s edge?',
    'The factor itself is no longer differentiated — buying the same screens as everyone else is not edge; if the PM\'s actual differentiation was picking the *best* compounders within the factor, the alpha may persist, but if it was just owning the factor, the edge is gone and the PM should look honestly at attribution',
    [
      ['Crowded factors always mean-revert, so the PM should size up the position and wait', 'Crowded factors can stay crowded for years and continue to underperform. "Wait and size up" is the framing that produces career-ending drawdowns in factor-tilt funds. Crowding is a risk, not a buy signal.'],
      ['The PM\'s edge is unchanged because the underlying companies are still high-quality', 'Edge is relative to the market, not absolute. High-quality companies bought at premium multiples because the factor is crowded do not produce alpha — they produce factor returns minus the crowding premium.'],
      ['Factor crowding does not matter for fundamental L/S because every position is bottom-up', 'Bottom-up selection still produces a factor profile when aggregated. Pretending the factor doesn\'t exist because the selection is name-by-name is the most common attribution mistake in L/S funds.'],
    ],
    'A factor that everyone owns has stopped being an edge. The serious question for a tilt fund is what the residual edge is *within* the factor — security selection, sector mix, sizing — and how much of historical alpha was the factor itself. Honest attribution is uncomfortable but necessary.'),

  // -------------------------------------------------------------------------
  // CAPITAL STRUCTURE (4400030–4400038)
  // The fee, fund-term, and liquidity provisions that make up the LP/GP
  // contract. Every clause in the offering memo is the answer to a question
  // someone learned the hard way.
  // -------------------------------------------------------------------------
  q(4400030, 'Career Skills', CHAPTER, '2-and-20 mechanics',
    'A fund charges "2 and 20." Walk through what an LP with $10M actually pays in a year where the fund returns 15% gross.',
    'Management fee: 2% of NAV = ~$200K (charged on average NAV); performance fee: 20% of profits = 20% × ($10M × 15% – $200K mgmt fee) = ~$260K; total fees ~$460K; net return to LP roughly 10.4% — performance fee is typically calculated on net-of-management-fee profits',
    [
      ['Management fee is paid only on profits, so if the fund loses money there is no management fee', 'Management fee is paid on NAV regardless of performance — this is what makes asset-gathering attractive to GPs even without returns. Performance fee is the part conditioned on profits.'],
      ['Performance fee is 20% of the full 15% return regardless of management fee', 'Standard practice is to calculate performance fee on profits *after* management fee — otherwise the LP is paying 20% on money already taken as management fee, which is double-counting.'],
      ['The 2-and-20 is the same as 22% total fees because the percentages add', 'Two percent of NAV and twenty percent of profits are computed on different bases — they don\'t add to 22%. The actual blended fee depends on the return level.'],
    ],
    'The 2-and-20 mechanic charges management fee on NAV (always) and performance fee on profits net of management fee (when there are profits and the high-water mark is cleared). At a 15% gross return on $10M, total fees are roughly $460K, not 22% of anything.'),

  q(4400031, 'Career Skills', CHAPTER, 'High water mark',
    'A fund has a high-water mark. In year 1 it returns +20%, in year 2 it returns -10%, in year 3 it returns +8%. When does the GP earn performance fee in year 3?',
    'The high-water mark is the highest NAV at which a performance fee has been paid; after year 2\'s loss, the fund must first claw back to its year-1 ending NAV before performance fee resumes — in year 3, the +8% does not fully recover the year-2 -10%, so no performance fee is earned',
    [
      ['Performance fee is earned in year 3 because the fund had a positive return', 'High-water mark explicitly suspends performance fee until the LP is whole. Charging on year-3\'s +8% when the LP is still down from peak would be double-charging.'],
      ['The high-water mark resets every year, so each year is independent', 'High-water marks specifically *do not* reset annually for the LP\'s benefit. A "yearly reset" structure exists at some funds but is universally seen as LP-unfriendly and almost never seen in modern offerings.'],
      ['Performance fee is owed on the year-1 gain regardless of year-2 losses', 'Performance fee earned in year 1 is already paid; it does not get clawed back when year 2 loses money (absent a clawback clause). But *no new* performance fee is earned until the LP is back above the year-1 peak.'],
    ],
    'High-water mark protects LPs from paying performance fee twice on the same gain. After a drawdown the GP works at management fee only until the LP is whole — which is a meaningful incentive alignment, and a reason underperforming funds eventually close down rather than fight the climb back.'),

  q(4400032, 'Career Skills', CHAPTER, 'Hurdle rate hard vs soft',
    'A fund has a "5% hurdle rate with a soft hurdle." In a year the fund returns 8%. How much performance fee is owed and what would change with a hard hurdle?',
    'With a soft hurdle, once the fund clears 5%, performance fee is owed on the full return (20% of 8% = 1.6%) — the hurdle is just a hurdle to crossing, not to the fee base; with a hard hurdle, performance fee would only be owed on returns above 5% (20% of 3% = 0.6%)',
    [
      ['Soft and hard hurdles produce the same fee at the same return level', 'They produce the same fee only when the fund returns below the hurdle (zero fee in both cases) or far above it. At a return modestly above the hurdle, the fee differs significantly — that is the whole point of distinguishing them.'],
      ['Hurdle rates are prohibited in hedge-fund documents because they reduce GP fees', 'Hurdle rates are permitted and appear in many institutional-share-class hedge fund offerings, particularly those marketed to pensions and endowments. They are uncommon in the standard offering but not prohibited.'],
      ['Hurdle rate means the fund cannot charge management fee unless it clears 5%', 'Hurdle rates apply to the performance fee only, not the management fee. Management fee is paid regardless of performance under standard 2-and-20 terms.'],
    ],
    'Soft vs hard hurdle is a fee-economics question. Soft means: clear the hurdle, then charge on everything. Hard means: charge only on the excess above the hurdle. The difference is meaningful at returns near the hurdle level and is one of the items LPs negotiate during onboarding.'),

  q(4400033, 'Career Skills', CHAPTER, 'Founders share class economics',
    'A new fund offers a "founders share class" at 1-and-10 to early investors. An LP weighing the offer asks what the trade-off is. What is the cleanest answer?',
    'Founders class investors get lower fees (often half the management and performance fee of the main class) in exchange for a longer lockup, larger minimum check, and committing during the fund\'s early period when track record is still building — the GP discounts fees to anchor AUM and the LP takes early-stage risk on the manager',
    [
      ['Founders class is a marketing gimmick with no real economic difference', '1-and-10 vs 2-and-20 is a meaningful long-run difference — on a $10M check over 5 years at 10% gross, it compounds to several hundred thousand dollars of saved fees. Calling it a gimmick understates the math.'],
      ['Founders class investors have the same terms as the main class plus a board seat', 'Founders class is a fee-and-lockup structure, not a governance structure. LPs do not get board seats on funds in any class — they may get LPAC representation but that is separate.'],
      ['Founders class is reserved for the GP\'s personal capital', 'GP commitment is a separate concept (the GP\'s own money in the fund alongside LPs). Founders class is a fee discount for early external LPs, not for the GP itself.'],
    ],
    'Founders class is an LP-GP trade: lower fees in exchange for taking early-stage manager risk, larger commitment, and longer lockup. It is one of the standard ways new funds anchor their initial AUM without giving up the headline fee on the main class — and the math is real, not symbolic.'),

  q(4400034, 'Career Skills', CHAPTER, 'Side pocket mechanics',
    'A fund holds a private placement that has become illiquid (cannot be marked or sold). The GP moves it into a side pocket. What happens to investors who redeem the next quarter?',
    'Redeeming investors are paid out of the liquid main book at the prevailing NAV — they continue to hold their pro-rata share of the side pocket and receive distributions from it as the asset is realized (sold, IPO\'d, or written off); they cannot redeem the side pocket portion on the regular cycle',
    [
      ['Redeeming investors get the full NAV including the side-pocket portion in cash', 'Side pockets are explicitly illiquid — paying out the full NAV in cash would require the GP to sell the side-pocket asset at distress prices, which defeats the purpose. The side-pocket portion is retained until realization.'],
      ['Investors lose their side-pocket allocation when they redeem', 'The pro-rata side-pocket interest follows the investor — they retain economic exposure until realization, even though they have redeemed from the main fund.'],
      ['The GP can decide unilaterally what investors receive from the side pocket', 'Side pocket allocations and realizations are governed by the offering memo, typically with LPAC oversight. Unilateral GP discretion on side-pocket payouts is a major ODD red flag and would not pass an institutional review.'],
    ],
    'Side pockets solve the liquidity mismatch between an illiquid asset and a liquid redemption cycle. The mechanics — pro-rata retention for redeemers, GP discretion bounded by the offering memo, eventual realization — are standard but require careful drafting and LPAC oversight to avoid abuse.'),

  q(4400035, 'Career Skills', CHAPTER, 'Gates investor-level vs fund-level',
    'A fund has both an "investor-level gate" of 25% and a "fund-level gate" of 20%. What is the difference and when does each apply?',
    'Investor-level gate caps each LP at redeeming at most 25% of their position in a single redemption period (limits any one LP\'s exit speed); fund-level gate caps the *total* redemption from the fund in a single period at 20% of NAV (limits aggregate exit pressure) — both can apply simultaneously and serve different purposes',
    [
      ['Investor-level and fund-level gates are the same mechanism described differently', 'They constrain different things — one caps per-LP exit, the other caps aggregate exit. Many funds have both because they protect against different liquidity scenarios.'],
      ['Gates are activated only during force majeure events', 'Some gate provisions are automatic on every redemption period (always active); others are GP-discretionary and only activated under stress. The offering memo specifies which — automatic gates are more common in less liquid strategies.'],
      ['Gates cannot appear in offshore feeder documents because offshore funds must offer full liquidity', 'Gates are standard in both onshore (Delaware LP) and offshore (Cayman) feeders. They are explicitly permitted under the relevant fund documentation across the major jurisdictions.'],
    ],
    'Gates manage liquidity pressure on the fund. Investor-level limits one LP\'s exit speed; fund-level limits the aggregate. Both protect remaining LPs and the integrity of the portfolio. The exact thresholds, mechanics, and discretion all live in the offering memo and matter during stress events.'),

  q(4400036, 'Career Skills', CHAPTER, 'Redemption notice period',
    'A fund offers quarterly liquidity with 60-day notice. An LP submitting a redemption request on March 15 receives proceeds when?',
    'The next redemption date is the calendar-quarter-end after the notice period — March 15 + 60 days is May 14, so the LP cannot redeem on March 31 (insufficient notice); the next eligible redemption date is June 30, with proceeds typically paid 30 days after that (~end of July)',
    [
      ['The LP redeems on March 31 because the redemption was submitted before quarter-end', 'The notice period requires the redemption notice to be received at least 60 days before the redemption date. A March 15 notice does not meet a 60-day prior requirement for a March 31 redemption.'],
      ['The LP receives proceeds on May 15, the date the 60 days expires', 'Notice period and redemption frequency are separate constraints — even after 60 days, redemption can only happen on the next scheduled quarterly redemption date.'],
      ['The notice period is advisory and the GP can waive it for any reason', 'Notice periods are contractual. The GP may have discretion to waive in specific circumstances (death of LP, etc.) but generally cannot waive arbitrarily because it would prejudice other LPs.'],
    ],
    'Notice period + redemption frequency together determine the actual exit speed. A 60-day notice / quarterly fund effectively means up to 5 months between submitting notice and receiving cash. LPs underestimating this is a common cause of unexpected liquidity tension.'),

  q(4400037, 'Career Skills', CHAPTER, 'Lockup period purpose',
    'A new fund imposes a 2-year hard lockup. A consultant says LPs should resist it. The PM defends it. What is the strongest justification the PM can give?',
    'The strategy holds positions on a 1–3 year thesis horizon and runs reasonable illiquidity in mid- and small-cap names — without a lockup, redemption-driven selling during a normal drawdown forces the PM to abandon thesis-good positions at the worst price, hurting the LPs who stay; the lockup aligns the LP base with the strategy horizon',
    [
      ['Lockups exist so the GP can collect management fees for longer regardless of performance', 'That is the cynical reading but does not survive scrutiny — the high-water mark and the prospect of LP departure at the end of the lockup both discipline the GP. Lockups exist for liquidity-matching reasons, not just fee economics.'],
      ['Lockups are a regulatory requirement for any fund holding equities longer than one year', 'There is no regulatory requirement of this kind. Lockups are contractual provisions in the LP agreement, set by the GP and negotiated with LPs.'],
      ['Lockups make the fund safer for LPs because they prevent panic selling by other LPs', 'Lockups do reduce inter-LP runs on the fund, but the primary justification is asset-liability matching (matching the strategy\'s natural hold period to the LP\'s commitment), not fellow-LP behavior.'],
    ],
    'Lockups are an asset-liability matching tool. Strategies with longer thesis horizons need patient capital; the lockup is the contract that pre-commits it. The PM should be able to point at the specific asset-side reasons (illiquidity, multi-year thesis) — without that, the lockup is just friction.'),

  q(4400038, 'Career Skills', CHAPTER, 'Most favored nation clause',
    'An institutional LP requests a "most favored nation" (MFN) clause in their side letter. What does this protect against and what are the limits in practice?',
    'MFN gives the LP the right to elect the most favorable terms granted to any subsequent LP of comparable or smaller commitment size — protects against the GP cutting better deals later to win bigger checks; in practice MFN is tiered (only LPs above a certain commitment qualify), excludes specific provisions (regulatory, tax-driven, governance), and the GP discloses subsequent side letters to MFN-eligible LPs on a defined cycle',
    [
      ['MFN gives the LP the lowest fees in the fund regardless of commitment size', 'MFN is typically tiered by commitment size — a $25M LP doesn\'t automatically get a $250M LP\'s fee break. The protection is against being undercut by *equivalent-sized* future LPs, not the largest.'],
      ['MFN is automatically included in every limited partnership agreement', 'MFN is a side-letter provision that LPs negotiate individually — it is not a default term. Smaller LPs often do not get it at all.'],
      ['MFN forces the GP to disclose all confidential side letters to all LPs', 'MFN provisions typically include carve-outs for confidentiality, regulator-specific terms (ERISA, sovereign wealth tax), and governance provisions. Full disclosure to all LPs is not the standard mechanic.'],
    ],
    'MFN is institutional-LP protection against the GP cutting better future deals. The clause is tiered, carved-out for specific provisions, and triggers a disclosure cycle for qualifying LPs. It is a side-letter negotiation, not an LPA default — small LPs often don\'t have access to it at all.'),

  // -------------------------------------------------------------------------
  // CAP INTRO AND LP RELATIONS (4400039–4400046)
  // The other half of the strategy brief — knowing who the fund\'s LPs are
  // supposed to be and how they get found. Operational DD is where many
  // strategies that look fine on paper actually fail.
  // -------------------------------------------------------------------------
  q(4400039, 'Career Skills', CHAPTER, 'Prime broker cap intro role',
    'A new fund signs with a major prime broker. The PB offers "capital introduction" services. What is the realistic expectation of what this delivers?',
    'Cap intro hosts events and curates investor meetings between the fund and allocators in the PB\'s network — it is not paid placement and does not guarantee any allocation; useful for first meetings with allocators who are otherwise hard to reach, but the fund still has to win the mandate on its own',
    [
      ['Cap intro raises capital for the fund in exchange for a placement fee', 'Cap intro at major prime brokers is generally not compensated per-allocation (unlike third-party placement agents) — the PB earns from prime-brokerage revenues over time and treats cap intro as a relationship service.'],
      ['Cap intro guarantees a minimum allocation from PB clients', 'Cap intro never guarantees allocations. PB clients (allocators) maintain full discretion over their portfolios. A guarantee from the PB would create conflicts and would be unacceptable to the allocators themselves.'],
      ['Cap intro is the only way for new funds to reach institutional allocators', 'There are several paths — third-party placement agents, consultant relationships, direct outreach, conferences. Cap intro is one path among several and is rarely the sole channel a new fund uses.'],
    ],
    'Cap intro is a relationship service, not a sales force. The PB introduces; the fund wins on its own merits. New funds that treat cap intro as a guaranteed AUM channel typically discover the gap when introductions are made but allocations don\'t follow.'),

  q(4400040, 'Career Skills', CHAPTER, 'Fund of hedge funds as allocator',
    'A fund-of-hedge-funds (FoHF) is considering an allocation. How does FoHF behavior differ from a direct institutional LP and what does the GP need to be ready for?',
    'FoHFs allocate smaller checks across many managers, expect lower fees (or fee rebates) given their aggregation, do tighter operational DD per dollar invested, often have shorter holding periods than direct LPs, and may concentrate or rotate exits based on their own redemptions — the GP gets a quicker initial commitment but a less stable capital base than a direct pension',
    [
      ['FoHFs are functionally identical to direct LPs once they invest', 'FoHFs have their own LPs and their own redemption pressure, which can translate into faster exits from the underlying funds. They are a less stable capital base, by structure.'],
      ['FoHFs pay full fees because they are professional buyers', 'FoHFs almost always negotiate fee discounts or rebates given the size and frequency of their checks across many funds. Full-fee FoHF allocations are unusual.'],
      ['FoHFs cannot operate in the US because the Investment Company Act bans fund-of-funds structures', '40-Act fund-of-funds are regulated and common; private FoHFs under 3(c)(7) are also common. There is no general ban on FoHF structures in the US.'],
    ],
    'FoHFs are a useful but less stable LP type. They underwrite faster than pensions and endowments, but their own LP base introduces redemption risk to the underlying fund. The GP balances the speed of FoHF capital with the duration risk of FoHF turnover.'),

  q(4400041, 'Career Skills', CHAPTER, 'Pension vs endowment behavior',
    'A US public pension and a US endowment both express interest in the fund. What behavioral differences should the GP expect during diligence and post-investment?',
    'Pensions: extensive board governance, multi-stage approval (staff, consultant, board), longer onboarding (6–12 months), strict ODD checklists, larger but more standardized check sizes, slower to add to manager and slower to exit; endowments: smaller staffs, faster decisions, more thesis-driven conviction, willing to be early on emerging managers, but also more willing to rotate when the thesis loses appeal',
    [
      ['Pensions and endowments behave identically because both are long-duration capital', 'Both are long-duration in principle but their decision processes, staff sizes, and governance are very different. Treating them the same way during fundraising leads to either over-prepared meetings with endowments or under-prepared meetings with pensions.'],
      ['Endowments are slower to decide because they have university committees', 'Endowments tend to be faster than pensions because their investment offices have more discretion. University committees set high-level policy but typically don\'t approve individual fund commitments.'],
      ['Pensions don\'t use external consultants because they have internal investment staff', 'Most US public pensions use external consultants (Cambridge, Aon, NEPC, Wilshire, etc.) as part of their manager selection — consultant approval is often a gate before staff can even bring a name to the board.'],
    ],
    'Pensions and endowments are both long-duration LPs but their decision processes, speed, and risk appetite differ markedly. Fundraising calendars and meeting prep should reflect the difference — the same pitch deck works for both but the diligence cycle does not.'),

  q(4400042, 'Career Skills', CHAPTER, 'Sovereign wealth fund DDQ depth',
    'A Gulf-region sovereign wealth fund is considering a $200M allocation. What should the GP expect operationally?',
    'Very long diligence cycles (often 9–18 months), multi-team review (investment team, ODD team, legal, compliance, sometimes Shariah board), site visits, deep document requests including audited financials of the management company, background checks on senior staff, and bespoke side-letter terms including most-favored-nation provisions — the eventual check is large and sticky but the cost of getting there is very high',
    [
      ['SWF allocations follow standard institutional process with no special considerations', 'SWF diligence is materially deeper and longer than most institutional processes. Some funds choose not to pursue SWF capital specifically because of the operational burden of onboarding.'],
      ['SWFs prefer fast, lightly-documented deals because they have large staff budgets', 'The opposite — SWFs are typically among the most document-heavy allocators because they answer to government oversight and have to defend every commitment to public scrutiny.'],
      ['SWF capital is short-duration because it depends on commodity prices', 'SWF capital is typically very long-duration (multi-decade horizons). Short-term commodity price volatility rarely translates into short-term allocation rotation at the major SWFs.'],
    ],
    'SWF capital is the deepest and stickiest pool but the most expensive to onboard. The trade-off is real — small funds may rationally choose not to pursue it because the diligence burden exceeds the staff bandwidth. Large funds with dedicated IR teams treat SWF onboarding as a multi-quarter project.'),

  q(4400043, 'Career Skills', CHAPTER, 'Family office allocation style',
    'A multi-billion-dollar US family office expresses interest in the fund. What is the realistic profile of how this LP behaves?',
    'Family offices vary widely but tend to make faster decisions than institutions (often a single principal or small IC), pursue more concentrated bets with conviction, are willing to back emerging managers, and often invest with shorter operational DD checklists — they can also be the quickest to exit if performance disappoints or the principal changes mind',
    [
      ['Family offices are functionally identical to endowments in process and behavior', 'Family offices have less institutional process than endowments and can be both faster and less predictable. The single-principal decision dynamic is unique.'],
      ['Family offices invest only in passive long-only strategies', 'Family offices invest across the full spectrum — many are significant LPs in hedge funds, PE, VC, and direct deals. They are not restricted to passive long-only.'],
      ['Family offices have the longest hold periods because they are inter-generational', 'Multi-generational capital does not guarantee long hold periods at the fund level — the family office may have long-term wealth but rotates external managers based on performance, conviction, or principal preference. Long capital does not equal patient capital with any one manager.'],
    ],
    'Family offices are heterogeneous — single-family vs multi-family, professional staff vs principal-driven, conservative vs aggressive. The shared traits are speed of decision and concentration of authority, but everything else varies. The IR team should not assume "family office" is one customer profile.'),

  q(4400044, 'Career Skills', CHAPTER, 'DDQ structure',
    'An allocator sends a 60-page Due Diligence Questionnaire (DDQ). What are the main sections and what is the GP\'s tactical approach?',
    'Sections typically include: firm overview, investment strategy, portfolio construction, risk management, performance attribution, organization and people, operations and service providers, compliance, valuation policy, fees and terms, ESG (increasingly), and references — the GP maintains a "master DDQ" updated quarterly so individual responses are consistent across LPs and ready within 1–2 weeks',
    [
      ['DDQs are filled out from scratch each time to tailor the response to each LP', 'Filling DDQs from scratch each time creates inconsistencies across LPs and is operationally infeasible at scale. A master DDQ that is updated quarterly is the modern norm — individual LPs may get minor customization but the core content is shared.'],
      ['The DDQ is the only document the allocator reviews before making an allocation decision', 'The DDQ is one document among many — pitch deck, audited financials, performance attribution, prime brokerage confirmations, references, on-site visit, and management meetings all feed into the decision.'],
      ['DDQs are completed by junior staff because the questions are administrative', 'DDQs touch every part of the firm — investment, operations, compliance, finance — and the GP\'s answers commit the firm to specific representations. Senior staff oversight (CFO, CCO, CIO) on substantive sections is universal.'],
    ],
    'A well-maintained master DDQ is one of the IR team\'s key assets. It accelerates allocator processes, ensures consistency across LPs, and reveals when the firm\'s representations need updating (often quarterly). Inconsistent DDQ answers across LPs are a tell during ODD reviews.'),

  q(4400045, 'Career Skills', CHAPTER, 'ODD red flag: administrator',
    'An ODD team reviews a fund and finds that the GP\'s in-house staff calculates and publishes the fund\'s monthly NAV, with an external administrator providing only "shadow" reporting. Why is this a red flag?',
    'Independent third-party administration of NAV is a foundational operational control — the administrator independently strikes NAV, reconciles cash and positions, and provides allocator reports; when the GP strikes NAV in-house, the firm has both means and motive to misstate, and major frauds (Madoff, Petters, Stanford) all featured weak or captive administration in the warning signs',
    [
      ['In-house NAV calculation is more accurate because the GP knows the positions', 'Accuracy is not the issue — independence is. The administrator\'s value is independence from the GP, not faster pricing. Internal NAV is a structural fraud risk regardless of how accurate the calculation is.'],
      ['In-house NAV is acceptable as long as the auditor signs off annually', 'Annual audit is point-in-time and does not substitute for monthly independent NAV. The Madoff fraud cleared annual audits for years — independent monthly administration is a different and more frequent control.'],
      ['Administrator independence is a soft preference, not a hard requirement', 'Institutional allocators treat third-party administration as a hard requirement for direct investment. Funds without it are typically uninvestable for any pension, endowment, or SWF, which materially shrinks the addressable LP base.'],
    ],
    'Independent administration is one of the load-bearing ODD checks. The reason is precedent — the major hedge fund frauds of the last 30 years all featured weak administration arrangements. Institutional LPs treat the question as binary and uninvestable funds without it.'),

  q(4400046, 'Career Skills', CHAPTER, 'ODD red flag: valuation policy',
    'An ODD team reviews a fund\'s valuation policy. What features signal a well-controlled valuation process versus a problematic one?',
    'Well-controlled: documented valuation policy reviewed annually, an independent valuation committee that does not include the PMs, tiered approach (Level 1 mark-to-market, Level 2 observable inputs, Level 3 model-based), regular pricing-vendor reviews, and explicit treatment of stale prices and illiquid positions; problematic: PM-marked positions, no committee, ad-hoc treatment of illiquids, and weak documentation',
    [
      ['Any valuation policy is sufficient as long as the auditor accepts it annually', 'Auditor sign-off is a year-end review and does not exercise the policy in the monthly NAV strike. ODD looks at the policy and the process between audits — the audit is the floor, not the ceiling.'],
      ['Valuation policy only matters for funds holding illiquid assets', 'Even Level 1 mark-to-market funds need a valuation policy — for stale prices, halted securities, after-hours moves, and stock-specific events. Saying it only matters for illiquids understates the surface area.'],
      ['Letting the PMs mark their own positions is acceptable because they know the assets best', 'PMs marking their own positions creates a conflict of interest — performance fee is computed from NAV, so PMs have an incentive to mark up. Independent valuation is structural protection against this conflict, regardless of PM intentions.'],
    ],
    'Valuation policy is one of the most-tested areas in ODD because it is where unrealised P&L (and therefore performance fee) is determined. The policy must be documented, the committee independent of the PMs, the tiering explicit, and the treatment of edge cases (illiquids, stale prices) pre-specified. Anything less is uninvestable for institutional LPs.'),
]

import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// HEDGE FUNDS CH5 — Shorts, Crowding, and Risk Control
// ----------------------------------------------------------------------------
// 42 new questions (IDs 4400400–4400441) extending the eight existing items
// in careerAgentGeneratedRoadmapFinance.ts (4103042, 4103043, 4105108,
// 4105109, 4105115, 4107382, 4107389, 4107863). Same chapter label so the
// learner sees one continuous canonical bank for this lesson.
//
// Voice: matches jargonBusters.ts — risk-manager misconceptions, not
// strawman distractors. Each wrong-answer rationale names the specific
// thinking error a real PM or analyst commits (e.g. "VaR captures tail
// risk" — wrong, VaR cuts off at the confidence level by definition).
// ----------------------------------------------------------------------------

const SOURCE = 'Floe HF Ch5 canonical bank'
const CHAPTER = 'Shorts, Crowding, and Risk Control'

function q(
  id: number,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string][],
  lesson: string,
): Question {
  const topic: Topic = 'Career Skills'
  return makeSimpleQuestion(
    id,
    topic,
    CHAPTER,
    title,
    prompt,
    correct,
    wrong.map(([label, why]) => [label, why, lesson] as [string, string, string]),
    lesson,
    SOURCE,
  )
}

// Difficulty mix: 12 at 3, 21 at 4, 9 at 5 (total 42).
export const HF_CH5_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Short mechanics (5)
  4400400: 3, // General collateral vs hard-to-borrow
  4400401: 3, // Locate before sending the order
  4400402: 4, // Buy-in mechanics when the lender recalls
  4400403: 4, // Rebate vs negative rebate on hard-to-borrow
  4400404: 3, // Recall risk timing around dividends

  // Short thesis types (4)
  4400405: 4, // Fraud short (Wirecard / Enron pattern)
  4400406: 3, // Structural decline short (Kodak pattern)
  4400407: 4, // Overvaluation short and multiple compression
  4400408: 4, // Event-driven short into earnings

  // GameStop / meme-stock lessons (5)
  4400409: 4, // Short squeeze mechanics on heavily shorted small float
  4400410: 5, // Gamma squeeze from dealer hedging into call buying
  4400411: 3, // Retail crowdedness signal from r/wsb mentions
  4400412: 3, // Days-to-cover as a squeeze read
  4400413: 5, // Sequencing the cover vs hedge decision under squeeze

  // Crowdedness metrics (4)
  4400414: 3, // Short interest as percent of float
  4400415: 4, // 13F top-holder concentration as crowding flag
  4400416: 4, // S3 / FactSet borrow data interpretation
  4400417: 3, // Days-to-cover definition and its limits

  // Risk control under squeeze pressure (3)
  4400418: 4, // Trim vs flatten the short
  4400419: 4, // Hedging an existing short with calls
  4400420: 5, // Legging out of a paired trade

  // Synthetic vs cash shorts (4)
  4400421: 4, // Total return swap as a short vehicle
  4400422: 4, // Put spread as a defined-risk short
  4400423: 5, // Selling calls as a short proxy and its limits
  4400424: 4, // CDS as a short proxy on credit

  // VaR limits (3)
  4400425: 4, // 99% 1-day VaR — what it does and does not say
  4400426: 5, // 10-day VaR scaling and the square-root-of-time trap
  4400427: 4, // Stress scenarios alongside VaR

  // Tail risk hedging (3)
  4400428: 4, // Put protection cost-benefit
  4400429: 4, // VIX calls as a crash hedge
  4400430: 5, // Universa-style tail funds in a long book

  // Concentration limits (2)
  4400431: 3, // Single-name 5% limit and how it bites
  4400432: 4, // Sector and factor exposure caps

  // Liquidity risk (2)
  4400433: 4, // ADV-based exit horizon
  4400434: 3, // Gates and side pockets

  // Counterparty risk (2)
  4400435: 5, // Lehman 2008 prime broker default
  4400436: 5, // Archegos 2021 from the PB side

  // Operational risk (2)
  4400437: 3, // Trade reconciliation breaks
  4400438: 4, // NAV computation accuracy

  // Activist short selling (2)
  4400439: 4, // Hindenburg / Muddy Waters publish strategy
  4400440: 5, // Short-and-distort regulatory scrutiny

  // Risk reporting (1)
  4400441: 3, // Daily P&L attribution review
}

export const hfCh5Questions: Question[] = [
  // -------------------------------------------------------------------------
  // SHORT MECHANICS (4400400–4400404)
  // -------------------------------------------------------------------------
  q(4400400, 'General collateral vs hard-to-borrow',
    'Your analyst wants to short a $20B mega-cap with deep lend supply. The PB quote is "GC, flat to fed funds". A second name is a $1.5B small-cap quoted at "75bps to borrow, hard-to-borrow". What is the right read?',
    'The mega-cap trades on general collateral with negligible financing cost, while the small-cap is hard-to-borrow with a 75bps annual fee that reduces expected short return',
    [
      ['Both quotes are equivalent because the PB will charge a uniform stock-loan fee', 'GC and HTB are pricing tiers, not labels. GC names sit near the funding rate; HTB names carry a specific borrow fee on top.'],
      ['The 75bps quote is the rebate the short seller receives on cash collateral', 'A negative rebate on hard-to-borrow is paid by the short seller, not received. The fee is a cost, not income.'],
      ['Hard-to-borrow means the trade is impossible to execute', 'HTB means expensive and recall-prone, not impossible. The trade is doable; the carrying cost just has to be in the P&L.'],
    ],
    'Borrow tiering matters before sizing. GC names are essentially free to short; HTB names eat into expected return through ongoing financing cost, and the rate can change daily as supply shifts.'),

  q(4400401, 'Locate before sending the order',
    'A PM wants to short a Korean ADR today at the open. Compliance asks whether you have a locate. The trader says "we can just sell and find the borrow afterward". What is wrong with that?',
    'Reg SHO requires a documented locate before the short sale is entered, otherwise the order is a naked short and the trade is non-compliant',
    [
      ['Locates are only required for hard-to-borrow names', 'Reg SHO applies to all equity shorts. The locate is a pre-trade compliance step regardless of borrow tier.'],
      ['Locates can be found post-trade because settlement is T+2', 'Settlement timing does not waive the locate requirement. The locate is what makes the sale a legal short rather than a naked short.'],
      ['Locates are only a UK rule, not a US one', 'Reg SHO is the US rule and is among the strictest globally. The trader has the geography wrong.'],
    ],
    'Locates are the documented confirmation from the lender that shares can be borrowed before the short is sent. Skipping the locate is naked shorting, which is what Reg SHO was written to prevent.'),

  q(4400402, 'Buy-in mechanics when the lender recalls',
    'A long holder recalls 200,000 shares of a name your fund is short 350,000. The PB cannot find a replacement borrow within the required window. What happens?',
    'The PB executes a buy-in against the fund, purchasing shares in the market to close the recalled portion at whatever price prevails',
    [
      ['The PB absorbs the recall because they are paid for stock loan', 'The PB is the agent, not the principal of the borrow. They pass the recall through to the fund and execute the buy-in.'],
      ['The fund can simply pay a higher fee to keep the position open', 'Once the borrow cannot be sourced, fees are irrelevant. The position is closed by buy-in at market.'],
      ['The PB delays the buy-in until the short price drops', 'PBs do not time buy-ins to help the short seller. They cover within the regulatory window at prevailing prices, often at the worst time for the short.'],
    ],
    'Recall risk turns into forced buy-ins when lend evaporates. The short seller pays whatever the market is at that moment, which is why borrow scarcity and concentration in lend supply belong in the risk memo.'),

  q(4400403, 'Rebate vs negative rebate on hard-to-borrow',
    'Your trader quotes "borrow rate of negative 8%" on a hard-to-borrow name. The associate thinks this means the short seller earns 8%. What is the actual cash flow?',
    'The short seller pays 8% per year on the borrowed shares — a negative rebate means the lender keeps the cash collateral interest and charges an additional borrow fee',
    [
      ['The short seller earns 8% as interest on the cash collateral posted to the lender', 'For GC names the short seller earns a rebate. For HTB names with negative rebates, the cash flow flips — the short seller pays.'],
      ['The 8% is a one-time fee charged at the start of the trade', 'Borrow fees accrue daily and are quoted annualized. They are an ongoing cost, not a one-time charge.'],
      ['Negative rebate refers to the PB rebate, not the stock loan rate', 'Negative rebate is the standard market language for the all-in financing cost of a HTB short. The associate has the convention wrong.'],
    ],
    'On general collateral, the short seller earns a small rebate on cash posted to the lender. On hard-to-borrow, the rebate goes negative — the short seller pays the borrow fee. This carrying cost compounds and can swamp expected return on slow-moving theses.'),

  q(4400404, 'Recall risk timing around dividends',
    'A fund is short a name across its $0.75 quarterly dividend ex-date. The analyst is surprised when the PB charges the fund $0.75 per share. Why?',
    'The short seller owes the dividend to the lender because the lender no longer holds record-date ownership — the cash payment in-lieu replicates the dividend they would have received',
    [
      ['The PB is charging an error fee for being short into the dividend', 'There is no error. The "payment in lieu" is standard mechanics — the short seller compensates the lender for the dividend they did not receive.'],
      ['The dividend payment is a regulatory penalty for shorting around ex-date', 'No regulator imposes a dividend penalty on shorts. The cash flow is contractual between the borrower and the lender.'],
      ['The short seller earns the dividend because the broker collected it', 'The broker collects on behalf of the long owner of record. The short seller is the borrower and owes the cash, not the other way around.'],
    ],
    'Shorts pay the dividend in cash to the lender on each ex-date. This is the "payment in lieu" mechanic and it should be modeled into expected return for any short held across an ex-date.'),

  // -------------------------------------------------------------------------
  // SHORT THESIS TYPES (4400405–4400408)
  // -------------------------------------------------------------------------
  q(4400405, 'Fraud short (Wirecard / Enron pattern)',
    'An analyst pitches a fraud short on a payments company. Reported EBITDA is large, but trust-account balances cannot be confirmed with named correspondent banks, and the auditor is a small regional firm. What is the right way to size and structure this?',
    'Size small and use defined-risk structures (put spreads or position caps) because fraud shorts can stay irrational longer than the fund can stay solvent, even when the thesis is right',
    [
      ['Size large because fraud shorts have the largest downside in the stock', 'Eventual downside is irrelevant if the position blows up the fund first. Fraud shorts often rally before they break — Wirecard rallied for years after the short reports started.'],
      ['Use a cash short because options on fraud companies are too expensive to consider', 'Defined-risk structures exist precisely because the path is unpredictable. The premium pays for survivability, not for cleverness.'],
      ['Skip the trade because fraud shorts are too hard to prove without inside information', 'Public-domain evidence — Wirecard balance confirmations, Enron off-balance-sheet entities — has been enough to short. The discipline is sizing, not avoidance.'],
    ],
    'Fraud shorts work eventually but the timing is unknowable. Size, structure, and survivability matter more than thesis precision. A great fraud short blown up by mark-to-market is still a losing trade.'),

  q(4400406, 'Structural decline short (Kodak pattern)',
    'You are evaluating a short on a hardware company whose core market is being replaced by software-as-a-service alternatives. Revenue is still flat and management talks about a transformation strategy. What is the cleanest framing?',
    'A secular decline short — the thesis is multi-year, the trigger is gradual revenue compression rather than a single event, and the position size and borrow cost have to match a long holding period',
    [
      ['A guaranteed winner because the business model is obsolete', 'Obsolete businesses can compound losses for the short seller during the slow-decline phase as bag-holding longs defend the name. Conviction is not the same as a clean entry.'],
      ['A binary event short — wait for the bankruptcy announcement and then size up', 'Bankruptcy timing is unknowable and the stock often falls hard before any announcement. Sizing at the announcement leaves the meat of the move on the table.'],
      ['A pair trade — long the SaaS replacement and short the hardware incumbent in equal size', 'The pair is fine as a hedge but is not the thesis. The structural-decline thesis is one-sided; the long leg is risk management, not the alpha.'],
    ],
    'Structural-decline shorts are slow burns. The thesis is correct but the path includes false rallies, transformation narratives, and management buybacks. Borrow cost over a multi-year window is the variable that kills the trade more often than the thesis does.'),

  q(4400407, 'Overvaluation short and multiple compression',
    'A stock trades at 80x forward earnings while comparable names are at 25x. The analyst wants to short it on overvaluation alone. What is the trap?',
    'Multiple compression requires a catalyst — either earnings disappointment or a regime shift in how the market values the category — and overvaluation alone can persist for years',
    [
      ['Overvaluation is its own catalyst because rational markets correct mispricings quickly', 'Markets routinely sustain multiple dispersions for years. "Rational correction" is a story, not a tradeable catalyst.'],
      ['The trade is safe because 80x is mathematically unsustainable', 'Mathematical unsustainability does not specify a timeline. The short seller pays borrow every day the multiple stays elevated.'],
      ['The right structure is a cash short with no hedge because the asymmetry is obvious', 'Asymmetry without a catalyst is the textbook setup for a violent squeeze. Pure overvaluation shorts need defined risk or a paired hedge.'],
    ],
    'Overvaluation without a catalyst is a thesis, not a trade. The right short usually pairs a stretched multiple with a specific earnings or sentiment trigger that forces the market to re-rate. Otherwise the position bleeds borrow cost while the multiple holds.'),

  q(4400408, 'Event-driven short into earnings',
    'An analyst is convinced a software company will miss next quarter on slowing new-logo growth. The stock is up 40% YTD and the borrow is 4%. How should the trade be structured?',
    'Use a put spread or a put outright sized for the event window — defined risk caps the loss if the print is positive while still expressing the miss thesis',
    [
      ['Cash short the full size and hold through the print', 'A positive print on a momentum name can squeeze 20–30% in a session. Cash shorts into binary events are a classic max-loss setup.'],
      ['Short the day before earnings to minimize borrow cost', 'Holding period is not the main risk — direction is. Compressing the entry into 24 hours actually concentrates path risk rather than reducing cost.'],
      ['Skip the trade because event shorts are gambling', 'Event shorts are not gambling when structured with defined risk and a thesis. The discipline is in the vehicle, not avoidance.'],
    ],
    'Event-driven shorts have a known timing window, which makes options-based expression natural. Put spreads cap downside on a wrong print while preserving most of the asymmetry if the thesis is right.'),

  // -------------------------------------------------------------------------
  // GAMESTOP / MEME-STOCK LESSONS (4400409–4400413)
  // -------------------------------------------------------------------------
  q(4400409, 'Short squeeze mechanics on heavily shorted small float',
    'GameStop in January 2021 had short interest above 100% of float. Why did this turn into a squeeze rather than an orderly decline?',
    'When short interest exceeds float, even a moderate move higher forces covering that consumes the available shares, creating a positive feedback loop of buying that drives the stock up further',
    [
      ['Short interest above 100% is mathematically impossible and the data was wrong', 'It is possible because borrowed shares can be re-lent. SI/float above 100% is rare but real and was correctly reported.'],
      ['Retail buying alone caused the move regardless of short positioning', 'Retail flow was the trigger but the mechanism was forced covering. Without the crowded short, the same retail buying would have produced a much smaller move.'],
      ['The squeeze was caused by Robinhood restricting buying, not by the short positioning', 'The Robinhood restriction came after the squeeze was well underway. The crowded short setup was the precondition.'],
    ],
    'Crowded shorts on names with limited float create reflexive squeezes. When shorts must cover into a thin tape, each cover lifts the price and forces the next short to cover at a worse level. SI/float above the high single digits is a warning; above 50% is a structural red flag.'),

  q(4400410, 'Gamma squeeze from dealer hedging',
    'During the GameStop episode, dealers who sold short-dated out-of-the-money calls to retail were forced to buy stock as the stock rose. Why?',
    'Selling calls leaves dealers short gamma — as spot rises and the calls move toward and through the strike, the hedge ratio (delta) rises sharply, forcing dealers to buy stock to stay hedged',
    [
      ['Dealers were speculating on a rally and buying stock directionally', 'Dealers are market makers, not directional traders. The buying was mechanical delta hedging, not a view.'],
      ['Dealers were covering their own short stock positions, not hedging options', 'The flow that mattered was options-driven, not stock-loan-driven. Dealer cash short positions are typically small compared to the gamma-driven flow.'],
      ['Gamma squeeze and short squeeze are the same mechanism', 'Short squeeze is forced cover of cash short positions. Gamma squeeze is dealer hedging of short-gamma options books. The two interacted in GameStop but they are distinct mechanisms.'],
    ],
    'A gamma squeeze happens when dealers are systematically short calls — as the stock rises into the strikes, their delta hedge requirement spikes and they buy more stock, which lifts the stock further. It compounds on top of any underlying short squeeze.'),

  q(4400411, 'Retail crowdedness signal',
    'A name shows up repeatedly in r/wallstreetbets with bullish posts, while sell-side coverage is flat. What is the right way to use this signal in risk?',
    'Treat surging retail mention volume as a crowding indicator that raises the squeeze risk on any existing short position in the name, regardless of fundamental thesis',
    [
      ['Ignore retail forum data because it is not institutional', 'Retail flow has been a real driver of moves since 2020. Pretending it does not exist is what cost short sellers in 2021.'],
      ['Cover the short immediately on the first mention', 'Single mentions are noise. The signal is sustained volume and breadth of posts. Mechanical covers on every mention burn the book.'],
      ['Take the opposite side of retail because they are usually wrong', 'Retail being eventually wrong does not mean they cannot move the stock against you for weeks. Risk management is about path, not eventual truth.'],
    ],
    'Retail forum data is now a standard crowding input alongside short interest and 13F concentration. Sustained mention volume on a heavily-shorted name is one of the cleanest signals that squeeze risk is rising.'),

  q(4400412, 'Days-to-cover as a squeeze read',
    'A name has short interest of 30M shares and average daily volume of 2M shares. The analyst asks what "days-to-cover" means and why it matters.',
    'Days-to-cover is short interest divided by ADV (here 15 days) and approximates how long it would take all shorts to cover at normal volume — high readings flag squeeze fragility',
    [
      ['Days-to-cover is the borrow fee divided by the daily rebate rate', 'Days-to-cover is a quantity measure, not a financing measure. It uses share counts and volume, not rates.'],
      ['Days-to-cover is irrelevant when borrow is cheap', 'Cheap borrow tells you about supply of lend; days-to-cover tells you about the exit. The two measure different risks.'],
      ['Days-to-cover above 5 is always a squeeze setup', 'High DTC is necessary but not sufficient. It has to combine with a catalyst, retail attention, or option flow before it becomes a squeeze.'],
    ],
    'Days-to-cover is a back-of-the-envelope measure of short-side exit friction. Above ~7–10 days, the position becomes structurally hard to exit on bad news without moving the price against the shorts.'),

  q(4400413, 'Sequencing cover vs hedge under squeeze',
    'A short is moving sharply against you on retail flow. You can (a) cover the cash short, (b) buy upside calls as a hedge, or (c) do nothing and hope. The book is also short three other similar names. What is the order of operations?',
    'First reduce overall short exposure to limit further mark-to-market damage across the cluster, then hedge any residual position with calls, then re-underwrite the thesis once the squeeze pressure abates',
    [
      ['Hold every position because covering into a squeeze locks in losses', 'Refusing to cover during a squeeze is how funds blow up. The losses you "lock in" by covering are smaller than the losses you take by holding through the peak.'],
      ['Cover all four names completely and immediately', 'Mass-cover into thin liquidity moves prices against you faster. The discipline is reducing exposure, not panicking out at any cost.'],
      ['Buy calls on every name as a first step before any cover', 'Calls during a squeeze are expensive because implied vol explodes. Buying vol at the wrong moment compounds the loss; trimming exposure first is cheaper.'],
    ],
    'Squeeze risk is cluster risk. The right sequence is exposure reduction first, then defined-risk hedge on residuals, then thesis review. Doing it in the wrong order pays peak option vol for the privilege of staying wrong-sized.'),

  // -------------------------------------------------------------------------
  // CROWDEDNESS METRICS (4400414–4400417)
  // -------------------------------------------------------------------------
  q(4400414, 'Short interest as percent of float',
    'Two names have $500M of short interest. Name A has $50B float; Name B has $1B float. What does this tell you?',
    'Name A has 1% SI/float (low crowding) and Name B has 50% SI/float (extreme crowding) — same dollar short interest implies very different squeeze risk because float is the denominator that matters',
    [
      ['Both names have equivalent short exposure because dollar short interest is the same', 'Dollar SI is the absolute number; SI/float is the structural risk measure. They diverge sharply when floats differ.'],
      ['Name B is safer to short because the smaller float means easier exit', 'Smaller float means harder exit, not easier. Crowded shorts on small floats are the textbook squeeze setup.'],
      ['Float size is irrelevant — what matters is daily trading volume', 'ADV matters for execution but float matters for the structural crowding ratio. Both are inputs to risk; neither is irrelevant.'],
    ],
    'Short interest as a percent of float is the cleanest single-number crowding read. Above 20% is unusual; above 40% is a structural risk flag that demands position-size and hedge attention regardless of thesis quality.'),

  q(4400415, '13F top-holder concentration as crowding flag',
    'A long position you hold is owned by 8 of the 10 largest tiger-cub hedge funds, each at 3–6% of their book. The analyst calls this validation. What is the actual risk?',
    'Heavy overlap among similar-style funds is crowding, not validation — if one of them is forced to delever, the others face the same exit at the same time into the same bid',
    [
      ['Concentration among top funds is bullish because they have done the work', 'They may all have done the work, and still all be forced sellers in the same week. Crowding is a liquidity risk, not a research-quality signal.'],
      ['13F data is too stale to be useful for crowding analysis', 'Stale data is still informative when overlap is extreme. 45-day-old data showing 8 of 10 funds in a name still tells you the position is crowded.'],
      ['Tiger-cub funds rarely sell at the same time so the overlap is harmless', 'They sold at the same time in 2021 (Archegos), 2022 (growth selloff), and many earlier episodes. Style-similar funds correlate hard under stress.'],
    ],
    '13F overlap among style-similar funds is one of the cleanest crowding signals available. Validation from peers is the same data that flags exit risk — when a sister fund is forced out, the bid for everyone else evaporates.'),

  q(4400416, 'S3 / FactSet borrow data interpretation',
    'S3 reports a name has utilization of 95%, borrow fee of 35%, and rising cost-to-borrow. What does this combination indicate?',
    'Borrow supply is nearly exhausted and the financing cost is climbing — the position is crowded on the short side and recall/buy-in risk is elevated regardless of thesis quality',
    [
      ['High utilization means many longs hold the stock, so the short setup is favorable', 'Utilization measures the percent of available lend supply that is currently lent out — high utilization means short demand is exhausting supply, not that longs are accumulating.'],
      ['A 35% borrow fee is a one-time cost paid at trade inception', 'Borrow fees accrue daily on an annualized basis. A 35% rate over a one-year holding period eats 35% of position value in carrying cost alone.'],
      ['Rising cost-to-borrow indicates the broker is taking advantage of the fund', 'Rising borrow is a supply/demand signal in the stock loan market, not a broker pricing decision. PBs source from the lending market and pass costs through.'],
    ],
    'Borrow data is the cleanest market-implied crowding signal. High utilization plus rising fees means short demand is overwhelming lend supply — the next marginal short will be hard to source and existing shorts are at recall risk.'),

  q(4400417, 'Days-to-cover limits',
    'An analyst presents days-to-cover of 12 as evidence that a short is "structurally dangerous". The PM asks what days-to-cover does not capture. Which is the cleanest answer?',
    'Days-to-cover assumes future volume equals recent average — it understates exit friction in a real squeeze because volume often dries up exactly when shorts need to cover, and it ignores option flow that can dwarf cash volume',
    [
      ['Days-to-cover overstates risk because it assumes all shorts cover at once, which never happens', 'In real squeezes, shorts do try to cover simultaneously. The clustered behavior is the point.'],
      ['Days-to-cover is fine — it is the only metric needed for short-side risk', 'No single metric captures squeeze risk. DTC, SI/float, borrow, option flow, and retail mentions all contribute.'],
      ['Days-to-cover is a backward-looking measure of short P&L', 'DTC is a forward-looking exit-time estimate, not a P&L measure. The analyst has the meaning wrong.'],
    ],
    'Days-to-cover uses average volume, which is exactly the wrong baseline during a squeeze — volume often collapses on offered side and explodes on the bid. Use DTC as one input among several, not as a definitive measure.'),

  // -------------------------------------------------------------------------
  // RISK CONTROL UNDER SQUEEZE PRESSURE (4400418–4400420)
  // -------------------------------------------------------------------------
  q(4400418, 'Trim vs flatten the short',
    'A short is 4% of NAV and up 25% against you in three sessions. Squeeze indicators are climbing but the thesis is intact. The risk committee asks: trim or flatten?',
    'Trim to a size that survives a further 25% adverse move without breaching VaR or single-name limits — preserves the thesis exposure while bringing path risk back inside risk-budget tolerance',
    [
      ['Flatten entirely because losing positions should always be exited', 'Mechanical exits on any loss destroy compounding. The question is whether the current size is appropriate, not whether the thesis is wrong.'],
      ['Add to the position because the thesis is intact and the price is now more attractive', 'Adding into a squeeze when path risk is rising is how funds blow up. Better thesis or worse thesis is irrelevant if size kills the fund.'],
      ['Hold at current size because trimming locks in losses', 'Losses are already locked in through mark-to-market. Trimming controls the size of future losses, which is what risk management is for.'],
    ],
    'Trimming is the discipline of right-sizing to the risk you can survive, not the conviction you have. Path risk during a squeeze rises non-linearly; the right response is exposure reduction proportional to that risk, not a binary cover-or-hold decision.'),

  q(4400419, 'Hedging an existing short with calls',
    'You are short 100,000 shares at $80. Stock is at $90 and squeeze risk is building. You buy 1,000 contracts of $100 calls expiring in 30 days. What does this accomplish?',
    'Defines an upside cap on the short loss above $100 (less premium paid) — converts the unbounded upside risk into a known, bounded loss tail for the option window',
    [
      ['Doubles the short exposure because calls are bullish for the seller and you sold them', 'You bought the calls, not sold them. Buying calls is long upside, which hedges the short.'],
      ['Eliminates the short loss entirely regardless of strike or expiry', 'The hedge only kicks in above the strike and only until expiry. Losses between $90 and $100 still accrue; losses after expiry are unhedged unless rolled.'],
      ['Has no effect because the strike is above current spot', 'Out-of-the-money calls still provide tail protection. The premium is cheaper precisely because the protection only kicks in on a further move.'],
    ],
    'Long calls against a short cash position cap the upside loss tail at the strike (plus premium). The protection is partial, time-bounded, and costs premium, but converts a potentially unbounded loss into a defined one — which is what squeeze hedges are for.'),

  q(4400420, 'Legging out of a paired trade',
    'You hold a market-neutral pair: long A, short B, both 3% gross. B is squeezing. You consider (a) cover B first and stay long A, (b) sell A first and stay short B, or (c) lift both simultaneously. Which is right and why?',
    'Cover B first because the immediate risk is the short leg — selling A first leaves the unhedged short exposed during execution and exposes the book to whatever B does next',
    [
      ['Sell A first because the long has the larger gain and locking it in protects P&L', 'P&L preservation is not the risk control question. The risk is the squeezing short being naked while you execute the long sale.'],
      ['Lift both simultaneously with a single algo to maintain market neutrality', 'Market neutrality during a squeeze is a fiction — beta breaks down. Simultaneous execution sounds elegant but adds execution risk to a position where the immediate problem is the short.'],
      ['Hold both because pair trades are designed to weather single-name moves', 'Pair trades are designed for normal dispersion, not for one leg squeezing on idiosyncratic flow. The structure does not magically protect against the leg that is actually broken.'],
    ],
    'When one leg of a pair is in trouble, the sequence is cover-the-problem-first, then re-evaluate the remaining leg as a standalone position. Treating the pair as a single object when one leg is squeezing is how a market-neutral book takes a directional loss.'),

  // -------------------------------------------------------------------------
  // SYNTHETIC VS CASH SHORTS (4400421–4400424)
  // -------------------------------------------------------------------------
  q(4400421, 'Total return swap as a short vehicle',
    'A PM wants short exposure to a name through a TRS rather than a cash short. What is the primary structural difference?',
    'The fund gets the economic short exposure through the swap but does not directly borrow shares — the dealer counterparty bears the stock-loan mechanics and the fund pays a financing spread plus dividend equivalents',
    [
      ['TRS eliminates short risk entirely because the dealer takes the other side', 'TRS replicates the economics — the fund still loses if the stock rises. The dealer is the counterparty, not the absorber of risk.'],
      ['TRS is cheaper than a cash short because there is no borrow cost', 'Borrow cost is embedded in the swap financing spread. The fund pays it either way; it just shows up in a different line item.'],
      ['TRS is illegal for hedge funds because it hides position disclosure', 'TRS is heavily used and legal. It does avoid 13F disclosure on the long side, which became part of the Archegos story, but that is disclosure mechanics, not legality.'],
    ],
    'TRS gives synthetic short exposure with the borrow mechanics outsourced to the dealer. The fund avoids stock-loan operational headache but inherits counterparty risk to the dealer and pays the financing spread that bundles in the embedded borrow cost.'),

  q(4400422, 'Put spread as a defined-risk short',
    'An analyst wants short exposure with capped loss. They buy a $100 put and sell a $80 put on the same expiry. What does this structure produce?',
    'Maximum loss equals premium paid; maximum gain equals $20 per share (spread width) minus premium — a bounded short with no borrow, no recall, and a fixed expiry window',
    [
      ['Same payoff as a cash short with unlimited upside loss', 'The bought put caps the loss to premium. The sold put caps the gain to spread width. Neither side is unbounded.'],
      ['Same payoff as buying a single put outright', 'Outright puts have larger gains on a big move. Put spreads sacrifice the deep tail in exchange for cheaper premium — the trade-off is the point.'],
      ['Eliminates all risk because both legs are options', 'Both legs are options, but the structure has clear loss potential equal to the net premium. Defined risk is not zero risk.'],
    ],
    'Put spreads express bearish views with bounded risk on both sides. They sidestep borrow and recall entirely, suit thesis windows that match an expiry, and trade off deep-tail upside for cheaper premium — useful for event shorts and HTB names.'),

  q(4400423, 'Selling calls as a short proxy and its limits',
    'A PM is short biased on a name and sells naked calls at the $120 strike instead of cash shorting at $100 spot. What is the worst-case profile?',
    'Unlimited upside loss above $120 minus premium received — the short call has the same uncapped tail as a cash short but with a $20 buffer that is exhausted on a move much beyond the strike',
    [
      ['Loss is capped at the premium received', 'That is the profile of buying a call, not selling one. Selling naked calls is one of the most asymmetric losing trades possible.'],
      ['Same as a put spread with capped downside', 'Put spreads have defined risk on both sides. Naked short calls have defined gain (premium) and undefined loss. Completely different profile.'],
      ['Safer than cash short because the strike provides a buffer', 'The strike provides a buffer up to that level only. Beyond the strike, the position loses dollar-for-dollar like a cash short, with no upside cap.'],
    ],
    'Selling naked calls replicates short economics with an out-of-the-money buffer, but the upside tail is just as unbounded as a cash short. It is rarely the right vehicle for a directional short — defined-risk structures (put spreads, bought puts) are usually better.'),

  q(4400424, 'CDS as a short proxy on credit',
    'A fund wants to express bearishness on a leveraged company without equity squeeze risk. They buy 5-year CDS on the company. What is the position?',
    'Long credit protection — pays a quarterly premium and receives par-minus-recovery if a credit event (default, restructuring) occurs within the term',
    [
      ['Equivalent to shorting the stock — pays off when the equity falls', 'CDS pays off on credit events, not on equity declines. A stock can fall 60% without a credit event and the CDS pays nothing.'],
      ['Eliminates counterparty risk because credit derivatives are exchange-traded', 'Single-name CDS is OTC and carries dealer counterparty risk. Even with clearing, the structure is not exchange-listed like equity options.'],
      ['Pays a coupon to the buyer like an interest-bearing bond', 'The buyer of protection pays the premium, not receives it. The protection buyer is the short-credit side.'],
    ],
    'CDS expresses a short-credit view with a defined trigger (credit event) and a defined premium cost. It is not a short-equity proxy — the payoffs only correlate at the tail. Useful when the thesis is solvency rather than valuation.'),

  // -------------------------------------------------------------------------
  // VaR LIMITS (4400425–4400427)
  // -------------------------------------------------------------------------
  q(4400425, '99% 1-day VaR — what it does and does not say',
    'A PM has 99% 1-day VaR of $5M. He tells the LP "we can never lose more than $5M in a day". What is wrong with that statement?',
    'VaR cuts off at the confidence level — 99% 1-day VaR means there is a 1% chance of a loss greater than $5M, and conditional on being in that tail the average loss is much larger than $5M',
    [
      ['Nothing is wrong — the LP description is accurate', 'It implies a hard cap, which VaR does not provide. The PM has misrepresented a probabilistic limit as a deterministic one.'],
      ['VaR captures tail risk by construction so the $5M is the worst case', 'VaR explicitly excludes the tail beyond the confidence level — it is the boundary, not the worst case. This is the single most common VaR misconception.'],
      ['The number is wrong because VaR should always be quoted at 95%', 'Both 95% and 99% are used. The issue is interpretation, not the choice of confidence level.'],
    ],
    'VaR is the loss threshold that should be exceeded only X% of the time. It does not bound losses in the tail; it is silent about the tail. Telling an LP "we cannot lose more than VaR" is a misrepresentation that pre-dates every major fund blow-up.'),

  q(4400426, '10-day VaR scaling and the square-root-of-time trap',
    'A risk team computes 1-day VaR and scales to 10-day VaR by multiplying by sqrt(10) ≈ 3.16. What is the structural problem with this?',
    'Square-root-of-time scaling assumes returns are independent and identically distributed normal — real returns have fat tails, autocorrelation under stress, and volatility clustering, so the scaled number understates 10-day risk',
    [
      ['Multiplying by sqrt(10) is exactly correct for any return distribution', 'It is correct only under iid normal. Empirical returns violate the assumption in exactly the regimes where risk matters most.'],
      ['10-day VaR should be 10x the 1-day VaR, not sqrt(10)', 'Linear scaling overstates risk under iid assumptions. The correct adjustment under iid is sqrt(t); the issue is that returns are not iid.'],
      ['The scaling is irrelevant because 1-day VaR is the only useful horizon', '10-day VaR is regulator-standard for many books. Dismissing the horizon entirely sidesteps the actual question.'],
    ],
    'Sqrt(t) scaling is a convenient simplification that breaks under realistic return dynamics. Stress regimes show vol clustering and serial correlation; the resulting 10-day loss tail is typically much fatter than the scaled 1-day VaR suggests.'),

  q(4400427, 'Stress scenarios alongside VaR',
    'A risk officer presents VaR plus a panel of stress scenarios (2008 GFC, Aug-2015 vol spike, March 2020). Why both?',
    'VaR describes normal-regime risk under a fitted distribution; stress tests describe path-dependent losses under specific historical or hypothetical shocks that the fitted distribution would consider too rare to model accurately',
    [
      ['Stress tests are redundant if VaR is computed at high confidence', 'High-confidence VaR still uses the fitted distribution, which underweights rare crisis paths. Stress tests sidestep the distribution and use the actual path.'],
      ['Stress tests replace VaR because they are more conservative', 'Stress tests complement VaR. VaR gives you a daily summary statistic; stress tests give you scenario-conditional losses. Both belong on the risk dashboard.'],
      ['Stress tests are only useful for regulatory reporting, not investment decisions', 'Many funds use stress tests as primary sizing inputs alongside VaR. The "regulatory only" framing misses the practical use.'],
    ],
    'VaR and stress tests measure different things. VaR is a distributional summary at a confidence cut-off; stress tests are scenario-specific simulations that ignore the distribution. A risk dashboard that has one without the other is incomplete.'),

  // -------------------------------------------------------------------------
  // TAIL RISK HEDGING (4400428–4400430)
  // -------------------------------------------------------------------------
  q(4400428, 'Put protection cost-benefit',
    'A long-biased PM considers systematic 5%-OTM put protection on the SPX as a tail hedge, rolling monthly. Realized cost over 10 years has averaged 1.5% of NAV per year. How should this be evaluated?',
    'Tail hedge cost should be evaluated against the volatility of drawdowns and the cost of being forced to delever at the bottom — 1.5% drag is meaningful only relative to what the hedge protects against',
    [
      ['Stop the hedge — 1.5% drag compounds to a 14% loss over 10 years', 'The hedge is not a 14% loss; it is an insurance premium against scenarios where the unhedged book would have been forced to liquidate at much worse levels.'],
      ['Continue the hedge regardless of cost because tail protection is always worth it', 'Always-on hedging at any price is not a discipline. The cost-benefit must be quantified against realistic downside scenarios.'],
      ['Replace puts with VIX calls — they are always cheaper', 'VIX calls have their own basis issues and decay profile. The choice between hedging instruments is empirical, not categorical.'],
    ],
    'Tail hedging is an explicit cost in exchange for path stability and forced-liquidation avoidance. The right question is not "how much does the hedge cost" but "how much would an unhedged drawdown cost in capital and in client behavior".'),

  q(4400429, 'VIX calls as a crash hedge',
    'A fund buys 30-day 25-strike VIX calls as a crash hedge. The spot VIX is 15. What does the analyst need to know about VIX futures and the basis?',
    'VIX calls settle on VIX futures, not spot VIX — the futures are typically in contango above spot, the basis decays toward spot as expiry approaches, and the hedge can lose money even if the VIX rises modestly',
    [
      ['VIX calls pay off proportional to changes in spot VIX', 'They pay off on the underlying VIX futures, which roll and decay. Spot VIX moves do not translate one-for-one.'],
      ['Contango makes VIX calls cheaper to hold than equivalent SPX puts', 'Contango is a cost (the futures decay toward lower spot), not a discount. It is one of the main reasons VIX hedges bleed in normal regimes.'],
      ['VIX calls eliminate the need for any other tail hedge', 'VIX calls hedge volatility, not specific drawdowns. They work best on vol spikes and underperform on grinding bear markets.'],
    ],
    'VIX hedging requires understanding the futures structure. The basis, contango, and roll cost mean the realized hedge return can deviate sharply from naive expectations based on spot VIX. They are useful but specialized — the operator has to know what they are buying.'),

  q(4400430, 'Universa-style tail funds in a long book',
    'An allocator considers putting 3% of NAV into a Universa-style tail fund that targets concentrated payouts in crashes. Backtest shows years of small losses punctuated by extreme positive returns in 2008 and 2020. How should this be sized in a long-biased portfolio?',
    'Size the tail allocation so that the expected drag in normal years is acceptable and the convex payoff in crash years offsets enough of the long book drawdown to materially reduce forced-delever risk',
    [
      ['Size at 10% NAV because the crash payoff is enormous when it hits', '10% allocation to a structurally-negative-carry strategy is too large for most books. The drag in calm years would dominate the overall return.'],
      ['Avoid the allocation because backtest losses in normal years are unacceptable', 'Evaluating tail strategies on their own return path misses the point. They are bought for their correlation properties during the rest of the book is failing.'],
      ['Use the allocation to replace traditional risk management entirely', 'Tail funds complement, not replace, position-level risk management. The strategies serve different roles and operate on different timescales.'],
    ],
    'Tail-risk funds are negative-carry on average and positive-carry in crashes. The allocation has to be small enough not to dominate the portfolio in calm years and large enough to actually move the needle when the long book is in a real drawdown. Universa\'s public framing suggests 2–4% NAV is the typical range.'),

  // -------------------------------------------------------------------------
  // CONCENTRATION LIMITS (4400431–4400432)
  // -------------------------------------------------------------------------
  q(4400431, 'Single-name 5% limit and how it bites',
    'A PM has a 5% single-name cap. Their highest-conviction long is up 30% over the past month and is now 6.4% of NAV. What should happen?',
    'Trim back to the 5% cap regardless of conviction — concentration limits exist to prevent compounding into a position that can break the fund if the thesis is wrong, and conviction in the moment is exactly when the limit matters most',
    [
      ['Override the limit because conviction has increased with the move', 'Limits that get overridden whenever conviction is high are not limits — they are suggestions. The discipline depends on the rule binding under pressure.'],
      ['Reduce other positions to make room for the larger concentration', 'Limits are per-name caps, not total-book caps. Trimming other positions does not change the single-name risk of the over-cap position.'],
      ['Hold the position because the move was a passive result of price appreciation', 'Passive vs active over-cap does not change the risk. The fund is exposed to the larger position regardless of how it got there.'],
    ],
    'Single-name caps protect against the position that "couldn\'t lose" turning into the position that did. Conviction does not change the asymmetry — a 6.4% position carries 28% more single-name risk than a 5% one. The discipline is unconditional trimming.'),

  q(4400432, 'Sector and factor exposure caps',
    'A fund has a 25% sector cap and 1.0 net beta-equivalent factor exposure to "growth". The book is currently at 22% software sector but 1.4 net growth-factor exposure. Why does the second limit bite when the first does not?',
    'Sector caps measure industry classification overlap; factor caps measure exposure to a return driver that cuts across sectors — a book full of "value" stocks can still be net-long growth if those stocks behave like growth in the current regime',
    [
      ['Factor exposure is the same thing as sector exposure', 'Sector is a classification; factor is a behavior. The same name can be in the software sector and still load low on the growth factor depending on margins, duration, and multiple.'],
      ['The factor cap is more conservative because it uses a smaller number', '1.4 is a larger number than 0.25 in different units. The comparison is meaningless — factor and sector caps use different units.'],
      ['Factor exposure only matters in 2008-style crashes', 'Factor regimes matter every day — growth/value rotations, momentum reversals, quality drawdowns. Factor caps bind in normal markets too.'],
    ],
    'Sector and factor caps measure different cuts of the book. A book that is sector-diversified can still be a concentrated factor bet, and a factor-neutral book can still be sector-concentrated. Both limits need to bind separately.'),

  // -------------------------------------------------------------------------
  // LIQUIDITY RISK (4400433–4400434)
  // -------------------------------------------------------------------------
  q(4400433, 'ADV-based exit horizon',
    'A 4% NAV long is in a name where the fund\'s position equals 12 days of ADV at 20% participation. How should this affect sizing and risk reporting?',
    'Exit horizon at non-disruptive participation is 12 days — the position cannot be liquidated quickly without moving the price, so liquidity-adjusted VaR and gates-equivalent flags should reflect that the position is not "marked-to-market" but "marked-to-orderly-exit"',
    [
      ['ADV is irrelevant if the position has appreciated', 'ADV measures exit friction, not entry P&L. A profitable position with poor liquidity is still hard to exit when you need to.'],
      ['12 days is fine because nothing requires a same-day exit', 'Most exit triggers (redemptions, fund-level limits, stress) compress the exit window. The 12-day baseline becomes 5 days under stress, with proportional price impact.'],
      ['Increase participation to 50% of ADV to shorten the exit horizon', 'Participation above 25–30% is typically detectable and moves the price against you. The exit horizon shortens nominally but the realized price worsens.'],
    ],
    'Liquidity-adjusted risk treats ADV-relative position size as a first-class input. A 4% position that takes 12 days to exit is not the same risk as a 4% position that takes one day, and both NAV calculations and risk limits should reflect that difference.'),

  q(4400434, 'Gates and side pockets',
    'A fund holds 8% of NAV in illiquid private positions. The LP doc allows gating redemptions above 25% per quarter and side-pocketing illiquid assets. When do these tools actually get used?',
    'Gates and side pockets are used when liquidity in the book cannot meet redemptions without forced selling at distressed prices — they protect remaining investors from the actions of exiting ones',
    [
      ['Gates are used routinely to manage normal quarterly outflows', 'Gates are emergency tools. Routine use signals that the liquidity terms of the fund were mis-set relative to the underlying book.'],
      ['Side pockets are used to hide losing positions from the LP report', 'Side pockets are structural for genuinely illiquid assets that cannot be marked or sold cleanly. Using them to hide losses is fraud, not risk management.'],
      ['Both tools are illegal in modern hedge fund structures', 'Both are legal and standard, governed by the LP doc. They became more carefully drafted after 2008 abuse, but the tools still exist.'],
    ],
    'Gates and side pockets address the liquidity mismatch between the fund\'s redemption terms and the underlying assets. They are emergency-state tools — invoking them is a signal to LPs that the liquidity model has broken and needs to be reconciled with reality.'),

  // -------------------------------------------------------------------------
  // COUNTERPARTY RISK (4400435–4400436)
  // -------------------------------------------------------------------------
  q(4400435, 'Lehman 2008 prime broker default',
    'In September 2008, hedge funds with assets at Lehman\'s UK PB found those assets trapped in administration for months or years. What was the structural problem?',
    'Lehman UK held client assets in rehypothecation arrangements that allowed the broker to use them as collateral for its own funding — when Lehman failed, the rehypothecated assets became part of the bankruptcy estate, not segregated client property',
    [
      ['Lehman stole client assets directly before declaring bankruptcy', 'There was no theft. The problem was a legal structure (UK rehypothecation rules) that allowed broker use of client assets and tangled the recovery on bankruptcy.'],
      ['Hedge funds chose Lehman over safer brokers and were appropriately penalized', 'Lehman was a top-tier PB at the time. The lesson was not "pick better brokers" but "understand rehypothecation terms and diversify".'],
      ['The issue was specific to US bankruptcy law', 'The issue was specific to UK rehypothecation rules. US PB segregation (SIPC, customer-property rules) was tighter and assets were recovered more cleanly.'],
    ],
    'Lehman 2008 taught the industry that PB choice and rehypothecation terms are real risk decisions, not operational details. Funds now routinely use multiple PBs, monitor rehypothecation caps, and maintain unencumbered cash buffers to survive a PB failure window.'),

  q(4400436, 'Archegos 2021 from the PB side',
    'In March 2021, Archegos held concentrated leveraged long positions across multiple PBs via TRS. When margin calls hit, Credit Suisse and Nomura took multi-billion-dollar losses. What was the PB-side risk failure?',
    'PBs allowed concentration that was invisible across the dealer set — each PB saw its own slice of the TRS exposure but none saw the aggregate, and the unwind cascade meant the slow PBs absorbed losses the fast PBs avoided',
    [
      ['Archegos committed fraud by hiding positions, which the PBs could not have detected', 'The TRS structure legitimately avoided 13F disclosure on the long side. The PBs could have demanded firm-wide leverage data and chose not to push hard enough.'],
      ['The losses were caused by market manipulation, not PB risk management', 'The cascade was caused by mechanical margin and forced unwind, not manipulation. The risk failure was concentration tolerance, not market abuse.'],
      ['PBs are insured against client default and recovered fully through insurance', 'There is no industry insurance against client default at this scale. The losses were absorbed by dealer P&L.'],
    ],
    'Archegos exposed two structural risks: TRS positions that hide aggregate concentration from each individual PB, and the unwind sequence in a cross-dealer default where speed of liquidation determines who eats the loss. PBs since have tightened single-name concentration limits and demanded firm-wide leverage reporting.'),

  // -------------------------------------------------------------------------
  // OPERATIONAL RISK (4400437–4400438)
  // -------------------------------------------------------------------------
  q(4400437, 'Trade reconciliation breaks',
    'The morning recon shows a 50-share position discrepancy between the OMS and the PB statement. The trader says "it is small, just adjust the book". What is the right operations response?',
    'Investigate the source of the break before adjusting — even small discrepancies can indicate a booking error, a missed trade, or a confirmation mismatch that will cascade into bigger problems if rubber-stamped',
    [
      ['Adjust the book to match the PB because the PB is always right', 'PBs are not always right. The reconciliation process exists to surface mistakes on either side, and resolving the break confirms which record is correct.'],
      ['Ignore the break because 50 shares cannot be material', 'Small breaks are usually symptoms of process errors that will eventually produce large breaks. Operational discipline does not tier by size.'],
      ['Wait for end-of-month recon to fix the issue', 'Breaks compound. Waiting a month means resolving the same problem across 20 more trades. T+1 resolution is the standard.'],
    ],
    'Trade reconciliation is the operational backbone of NAV and exposure accuracy. Small breaks ignored on day one become NAV restatements on day 30. The discipline is finding the source, not adjusting the symptom.'),

  q(4400438, 'NAV computation accuracy',
    'The administrator strikes monthly NAV. The fund holds a Level 3 illiquid position marked using a vendor service. Audit later finds the vendor mark was 12% off the eventual transaction price. What was the NAV process supposed to do?',
    'The fund\'s valuation policy should require independent corroboration of Level 3 marks (broker quotes, transaction comps, fairness opinions) so a single vendor error does not flow directly into NAV without challenge',
    [
      ['The vendor is responsible for the error and the fund has no liability', 'The fund is responsible for NAV accuracy regardless of which vendor produced inputs. Sole reliance on a single source is the policy failure.'],
      ['Level 3 positions cannot be marked accurately so any NAV discrepancy is unavoidable', 'Level 3 cannot be marked perfectly but the policy is designed to bound the error. Multiple corroborating sources reduce single-point failure.'],
      ['NAV errors below 15% are immaterial and do not require remediation', 'NAV materiality thresholds vary by fund but are typically 0.5%–1% at the portfolio level. A 12% error on a position would translate to a material fund-level error in most books.'],
    ],
    'NAV accuracy for illiquid positions depends on a layered valuation policy: vendor mark plus corroborating broker quotes, transaction comps, and periodic independent review. Single-source marks are the structural failure that NAV audits routinely surface.'),

  // -------------------------------------------------------------------------
  // ACTIVIST SHORT SELLING (4400439–4400440)
  // -------------------------------------------------------------------------
  q(4400439, 'Hindenburg / Muddy Waters publish strategy',
    'An activist short fund spends six months researching a target, builds the position, and publishes a 40-page report alleging accounting fraud. The stock drops 25% the next day. What is the structural model?',
    'The fund profits from the gap between the price before the report and the post-publication price — research cost is recovered through position size, and the report itself is the catalyst that crystallizes the thesis the market had not yet priced',
    [
      ['The model is illegal because publishing while short is market manipulation', 'Publishing research while short is legal so long as the fund discloses the position and the research is truthful. Hindenburg, Muddy Waters, and Citron all operate openly within this framework.'],
      ['The model only works if the fund colludes with regulators in advance', 'No collusion is required. The reports are public-domain research; regulators may follow up if the allegations involve actual misconduct, but the model does not depend on regulatory action.'],
      ['Activist shorts always lose money because targets sue them', 'Lawsuits are a cost of doing business and are budgeted into the model. The best-known activist shorts have multi-decade track records of profitability.'],
    ],
    'Activist short selling is short research with a publication trigger. The fund\'s edge is finding evidence the market has not synthesized; the catalyst is the report itself. Position disclosure is required, the research must be defensible, and the strategy has known legal and reputational costs.'),

  q(4400440, 'Short-and-distort regulatory scrutiny',
    'The SEC has historically scrutinized "short-and-distort" cases — funds publishing exaggerated or false claims while short to push down prices. How is this distinguished from legitimate activist short reporting?',
    'Distortion requires materially false or misleading statements published with intent to move the price — accurate research that happens to drop the price is legal short-side advocacy, while fabricated or misleading research is securities fraud',
    [
      ['Any short fund that publishes research is automatically subject to short-and-distort liability', 'Truthful, well-sourced research is protected. The liability attaches to falsity and intent, not to publishing or to being short.'],
      ['Short-and-distort cases are pursued under insider trading law, not securities fraud', 'They are pursued under anti-fraud provisions (10b-5). Insider trading is a different statute addressing different conduct.'],
      ['Regulators do not pursue short-and-distort cases because shorts always benefit markets', 'Regulators do pursue these cases when evidence supports them. The SEC has brought multiple short-and-distort actions in the past decade.'],
    ],
    'The legal line between activist short selling and short-and-distort is truth and intent, not loudness or direction. Funds that build the research, source the claims, and disclose the position are operating within the rules; funds that fabricate or knowingly mislead are committing securities fraud.'),

  // -------------------------------------------------------------------------
  // RISK REPORTING (4400441)
  // -------------------------------------------------------------------------
  q(4400441, 'Daily P&L attribution review',
    'A fund publishes daily P&L attribution to each PM and a weekly performance review meeting reviews exposures, factor tilts, and outliers. Why is this cadence considered the standard?',
    'Daily attribution catches outsized contributors and unexpected losses while they are still small; the weekly review provides the longer arc — exposure drift, factor tilts, position aging — that daily data is too noisy to surface',
    [
      ['Daily reporting alone is sufficient and weekly reviews are redundant', 'Daily data is too noisy to see drift. Weekly cadence is where trends, factor exposures, and slowly-developing risks become visible.'],
      ['Weekly reporting alone is sufficient and daily attribution adds operational burden', 'A week of unnoticed outlier P&L can grow into a fund-level problem. Daily attribution is the early-warning layer.'],
      ['Monthly reporting matches the NAV cycle and is the appropriate cadence', 'Monthly is the LP reporting cycle, not the risk management cycle. Risk decisions happen daily and weekly inside the fund.'],
    ],
    'Daily attribution flags surprises immediately; weekly review surfaces drift. Together they form the standard risk cadence inside multi-PM funds — neither alone is sufficient, and the operational discipline of running both is what separates funds that catch problems early from those that find out at month-end.'),
]

// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the Sales & Trading roadmap (~300 questions across 5 chapters + Capstone).
//
// ST_SUB_TOPICS groups each chapter's questions into 3-8 lesson-shaped clusters
// (cap 8 per chapter, since the lesson grouping caps at 8 lessons per chapter).
//
// ST_MENTOR_HINTS overrides the generic ST scaffold hint with a one-line
// second-person nudge that names the reasoning move without giving the answer
// — voice: senior MD on the flow desk mentoring a first-year associate.
//
// ST_CORRECT_SHORTENED trims `correct` strings flagged by the length-heuristic
// audit (correct ≥1.8x longer than longest wrong AND ≥20 chars longer). Trimmed
// explanatory clauses are reattached via `lessonAddendum` so no info is lost.

export const ST_SUB_TOPICS: Record<string, number[]> = {
  // -------------------- Chapter 1: Desk Roles and Market Structure --------------------
  'Salesperson Role': [
    4200020, 4380000, 4380001, 4380002, 4380003, 4380004,
  ],
  'Trader Role': [
    4200021, 4200022, 4380005, 4380006, 4380007, 4380040,
  ],
  'Desk Functions & Structuring': [
    4200024, 4380008, 4380009, 4380010, 4380011, 4380043,
  ],
  'Market Structure & Venues': [
    4380012, 4380013, 4380014, 4380015, 4380016, 4380017, 4380018,
  ],
  'Clearing & Prime Brokerage': [
    4380019, 4380020, 4380021, 4380022, 4380044,
  ],
  'Order Types & NBBO': [
    4380023, 4380024, 4380025, 4380026, 4380027, 4380028,
  ],
  'Routing Economics & Best-Ex': [
    4380029, 4380030, 4380031, 4380032, 4380033, 4380041, 4380042,
  ],
  'Buy-Side / Sell-Side Clients': [
    4200023, 4380034, 4380035, 4380036, 4380037, 4380038, 4380039,
  ],

  // -------------------- Chapter 2: Products, Pricing, and Risk Measures --------------------
  'Pricing Fundamentals': [
    4103024, 4103025, 4107348, 4380100, 4380101, 4380102,
  ],
  'Equity Products & Swaps': [
    4107360, 4107826, 4380103, 4380104, 4380105, 4380106,
  ],
  'Fixed Income Products': [
    4105087, 4107349, 4107356, 4380107, 4380108, 4380109, 4380110,
    4380111, 4380112, 4380113, 4380114, 4380115, 4380116,
  ],
  'FX & Commodities': [
    4380117, 4380118, 4380119, 4380120, 4380121,
  ],
  'Options Greeks & Hedging': [
    4105094, 4380122, 4380123, 4380124, 4380125, 4380126, 4380127,
  ],
  'Vol Surface & Pricing Models': [
    4380128, 4380129, 4380134, 4380135, 4380136, 4380137,
  ],
  'VaR & Risk Measures': [
    4380130, 4380131, 4380132, 4380133, 4380140,
  ],
  'Carry, Roll & Funding': [
    4380138, 4380139,
  ],

  // -------------------- Chapter 3: Client Flow and Trade Ideas --------------------
  'Trade Idea Anatomy': [
    4103028, 4380200, 4380201, 4380202, 4380203, 4380204,
  ],
  'Client Segmentation': [
    4103027, 4105090, 4107358, 4380205, 4380206, 4380207, 4380208, 4380209,
  ],
  'Axes & Color': [
    4105091, 4107352, 4380210, 4380211, 4380212, 4380213, 4380214,
  ],
  'Compliance & Chinese Walls': [
    4380215, 4380216, 4380217, 4380218, 4380219, 4380220, 4380221,
  ],
  'Pitch Structures': [
    4107828, 4380222, 4380223, 4380224, 4380225, 4380226, 4380227, 4380228,
    4380229, 4380230,
  ],
  'Capital Intro & Soft Dollars': [
    4380231, 4380232, 4380233, 4380234,
  ],
  'Block Trades & IOIs': [
    4380235, 4380236, 4380237, 4380238, 4380239,
  ],
  'Best-Ex & Earnings Setups': [
    4380240, 4380241, 4380242,
  ],

  // -------------------- Chapter 4: Execution, P&L, and Limits --------------------
  'Execution Algorithms': [
    4105086, 4380300, 4380301, 4380302, 4380303, 4380304, 4380305, 4380306,
  ],
  'TCA & Market Impact': [
    4380307, 4380308, 4380309, 4380310, 4380311, 4380312, 4380313, 4380314,
  ],
  'SOR & Microstructure': [
    4380315, 4380316, 4380317, 4380318, 4380319,
  ],
  'P&L Attribution': [
    4103030, 4105095, 4380320, 4380321, 4380322, 4380323, 4380338, 4380339,
  ],
  'Funding & Counterparty': [
    4380324, 4380325, 4380326, 4380327,
  ],
  'Trading Limits & Errors': [
    4103026, 4103031, 4105088, 4105089, 4107350, 4107357, 4380328, 4380329,
    4380330, 4380331, 4380332, 4380333, 4380334,
  ],
  'Volcker & Capital Charges': [
    4380335, 4380336, 4380337,
  ],
  'Spoofing & Surveillance': [
    4380340,
  ],

  // -------------------- Chapter 5: Regulation and Desk Communication --------------------
  'Major Regulators': [
    4380400, 4380401, 4380402, 4380403, 4380404,
  ],
  'Dodd-Frank & Volcker': [
    4380405, 4380406, 4380407, 4380408, 4380409,
  ],
  'Reg NMS & Best-Ex': [
    4200030, 4380410, 4380411, 4380412, 4380413, 4380414,
  ],
  'Reg M / AC / SHO': [
    4200031, 4380415, 4380416, 4380417, 4380418, 4380419, 4380420,
  ],
  'Manipulation Prohibitions': [
    4380421, 4380422, 4380423, 4380424,
  ],
  'Insider Trading & MNPI': [
    4200032, 4107362, 4107823, 4107832, 4107833, 4380425, 4380426, 4380427,
    4380428, 4380429,
  ],
  'Comms Surveillance & Books-and-Records': [
    4380430, 4380431, 4380432, 4380433, 4380434, 4380435,
  ],
  'Trade Reporting & OFAC/AML': [
    4380436, 4380437, 4380438, 4380439, 4380440, 4380441, 4380442,
  ],

  // -------------------- Capstone: Polaris Capital Management --------------------
  'Polaris: Coverage Rhythm': [
    4380500, 4380501, 4380502, 4380503, 4380504, 4380505, 4380506, 4380507,
    4380508, 4380509,
  ],
  'Polaris: Pitching TSCO Long': [
    4380510, 4380511, 4380512, 4380513, 4380514, 4380515, 4380516, 4380517,
    4380518, 4380519,
  ],
  'Polaris: Execution Build': [
    4380520, 4380521, 4380522, 4380523, 4380524, 4380525, 4380526, 4380527,
    4380528, 4380529,
  ],
  'Polaris: Hedging Overlay': [
    4380530, 4380531, 4380532, 4380533, 4380534, 4380535, 4380536, 4380537,
    4380538, 4380539,
  ],
  'Polaris: Risk & Compliance': [
    4380540, 4380541, 4380542, 4380543, 4380544, 4380545, 4380546, 4380547,
    4380548, 4380549,
  ],
}

export const ST_MENTOR_HINTS: Record<number, string> = {
  // ---------- Chapter 1: Desk Roles and Market Structure ----------
  4200020: 'Sales own the relationship; the trader owns the risk. Route by function, not by who picked up the phone.',
  4200021: 'Principal means the bond sits on the desk\'s book — even briefly. Where the position lives between trade and unwind is the test.',
  4200022: 'Listed market makers earn rebates and franchise by quoting through stress, not by stepping away when it gets ugly.',
  4200023: 'Liquidity is depth, tightness, and resilience — not ticker count or low volatility. Can you trade size without moving the print?',
  4200024: 'Custom payoff = building blocks. Zero coupon plus call gives capital protection with upside; one product alone never does.',
  4380000: 'A salesperson is a translator — mandate-to-axe-to-trade. Quoting risk and writing research live elsewhere.',
  4380001: 'An axe is the desk\'s own inventory preference, not a client order and not a compliance directive. It tells you who to call.',
  4380002: 'Distribution is a filter problem before it is a volume problem. Fit-to-trade beats top-of-list calling.',
  4380003: 'Color = aggregated, non-attributed flow. The line to MNPI is specific issuer or transaction detail — not the volume of patter.',
  4380004: 'Soft dollars sit inside Section 28(e). It is a *premium* commission for bundled services — not a discount and not a kickback.',
  4380005: 'Intent is the test, not P&L outcome. Quoting two-way to facilitate flow vs taking firm-capital direction.',
  4380006: 'OTC RFQ vs listed continuous quoting. Both manage inventory; the venue regime is what separates the labels.',
  4380007: 'Even seconds of book time with a pre-arranged offset is riskless principal — not agency. The category drives the markup disclosure.',
  4380008: 'Zero-cost = no upfront premium, paid in capped upside and forced conversion. Never confuse it with free.',
  4380009: 'Middle office controls and reports risk; back office moves the cash. The split is segregation-of-duties, not seniority.',
  4380010: 'Same trade, opposite sides — buy-side execution trader works the firm\'s order; sell-side sales-trader represents the bank\'s book.',
  4380011: 'Market structure drives desk culture, not personality. Lit continuous vs RFQ OTC shapes everything downstream.',
  4380012: 'Both run modern electronic matching engines. The surviving distinction is auction mechanics and DMMs at NYSE.',
  4380013: 'Cboe is a multi-asset group — biggest US options venue, but also significant equities, futures, FX, and crypto.',
  4380014: 'ECN = lit electronic ATS. The biggest historical ECNs became exchanges; the label survives mostly in FX and small ATSs.',
  4380015: 'Dark refers only to pre-trade transparency. The venue is regulated under Reg ATS, files Form ATS-N, and reports trades to the tape.',
  4380016: 'Information leakage is the dark-pool tax avoided; fill probability is the cost. It is a tradeoff, never an absolute.',
  4380017: 'ELP is the modern non-bank market-making franchise — Citadel Sec, Virtu, Jump, Hudson River. Same function, different institutional shape.',
  4380018: 'HFT firms quote into public market data extremely fast; they are not seeing your specific order. Distinguish speed from front-running.',
  4380019: 'Prime brokerage bundles financing, custody, securities lending, and operational scaffolding for hedge funds — it is the *infrastructure*, not the alpha.',
  4380020: 'DTCC is the post-trade plumbing — NSCC nets equity trades, DTC holds custody, FICC nets fixed income. Settlement, not execution.',
  4380021: 'ICE Clear handles derivatives novation — the CCP becomes counterparty to both sides. Risk concentrates at the CCP, by design.',
  4380022: 'T+1 went live May 2024 in the US. Foreign holders, FX, and corporate-action workflows all compressed.',
  4380023: 'Limit specifies price tolerance; market specifies urgency. One trades certainty of fill for price control.',
  4380024: 'IOC takes whatever fills now and cancels the rest. FOK is all-or-nothing — same instant.',
  4380025: 'GTC stays live until filled or cancelled, but venues apply periodic refreshes. It is not "set and forget" forever.',
  4380026: 'Bid stack and offer stack sorted by price-time priority. Depth at each level shows what size can transact without slippage.',
  4380027: 'NBBO = best bid and best offer across all *protected* exchanges. Reg NMS bans trading through it without an exception.',
  4380028: 'Price first, then time at that price. Same price = first-arrived first-filled on the lit book.',
  4380029: 'Maker provides liquidity (rebate); taker removes liquidity (fee). The economics shape routing decisions, not just venue branding.',
  4380030: 'Inverted = pay the taker to take, charge the maker. Used by venues that want to attract aggressive flow.',
  4380031: 'PFOF is the market maker paying the broker for retail flow. The retail customer pays nothing extra at the point of trade — but execution quality is the open question.',
  4380032: 'PFOF is legal in the US, banned in the UK, restricted in EU/Canada. The disclosure regime sits in SEC Rule 606.',
  4380033: 'FINRA 5310 is a multi-factor test — price, speed, certainty, total cost. Not lowest commission, not fastest fill alone.',
  4380034: 'Buy-side manages capital and pays commissions; sell-side intermediates and earns commissions/spreads. They are counterparties in the workflow.',
  4380035: 'Hedge funds run leverage and short exposure with looser mandates; mutual funds run regulated long-only retail vehicles with strict prospectus constraints.',
  4380036: 'Pension funds are large, long-duration, ALM-driven. Mandate is funding ratio, not absolute return.',
  4380037: 'SWFs hold national savings; mandates run very long, scale is huge, and political constraints shape what they can hold.',
  4380038: 'Vanguard, BlackRock, State Street — the index complex now holds the swing vote in most large-cap US equity. Coverage them as one ecosystem, not retail.',
  4380039: 'Corporate treasury hedges operating exposures — FX receivables, fuel, rates. They are not return-seekers; they are risk-reducers.',
  4380040: 'MM P&L = spread captured + rebates + inventory P&L minus hedge cost. The franchise lives off facilitation, not direction.',
  4380041: 'High-touch = sales-trader voice working a tricky order. Low-touch = client routes algos directly. Commission economics differ accordingly.',
  4380042: 'VWAP/TWAP track benchmarks; POV chases volume rate; IS optimizes against arrival price. Match the algo to the client\'s benchmark.',
  4380043: 'Series 7 = general securities. Series 63 = state blue-sky. Series 79 = investment banking. The combination depends on the role.',
  4380044: 'Tradeweb (rates), Bloomberg ALLQ (FI breadth), MarketAxess (credit). RFQ at scale is the modern OTC standard.',

  // ---------- Chapter 2: Products, Pricing, and Risk Measures ----------
  4103024: 'Crossing the spread pays for immediacy. Resting saves the spread but earns fill risk.',
  4103025: 'A limit buy caps the price you will pay. It does not guarantee execution if the market never comes down.',
  4105087: 'Duration = price sensitivity per 1% yield move. Longer duration = larger price move in either direction.',
  4105094: 'A put pays off below the strike. The premium is real cost, not free insurance.',
  4107348: 'Iceberg displays a slice and refreshes after each fill. It masks size at the cost of slower fills.',
  4107349: 'Issuer call = optionality you sold. When rates fall and the bond would otherwise rally, the issuer redeems instead.',
  4107356: 'Two-way market = bid and offer the desk will transact on, subject to size and conditions.',
  4107360: 'APs deliver the basket and receive ETF shares (or reverse). That arbitrage pulls price back to NAV.',
  4107826: 'In stress, the ETF can lead price discovery while the underlying basket lags. Premium ≠ broken.',
  4380100: 'Inside market = NBBO; midpoint = arithmetic mean of bid and offer. Both are read off the top of book.',
  4380101: 'Level I = top of book; Level II = full depth. The L2 book is the order-routing decision input.',
  4380102: 'Same price, earlier timestamp wins. The lit book is FIFO at each price level.',
  4380103: 'Equity TRS pays total return (price + dividend) vs financing leg. It is synthetic ownership with prime balance sheet.',
  4380104: 'Basket swap = bespoke basket exposure; index future = standardized listed contract. Customization vs liquidity.',
  4380105: 'Variance swap pays realized variance minus strike — pure vol exposure with no path dependency on direction.',
  4380106: 'Dividend swap isolates the dividend leg. Used to express views on payout policy without rate or equity beta.',
  4380107: 'TBA = "to be announced" — generic agency pool delivered by settlement date. Liquidity comes from fungibility across specific pools.',
  4380108: 'Agency MBS has GSE guarantee on principal; CMBS does not. Credit risk lives in CMBS, prepayment risk in agency.',
  4380109: 'IG = investment-grade (BBB- and above); HY = high-yield (BB+ and below). Different desks, different liquidity profiles.',
  4380110: 'Single-name CDS pays par minus recovery on credit event. The protection buyer pays a periodic spread.',
  4380111: 'CDX = North American IG/HY index; iTraxx = European. Both are liquid hedging instruments for credit beta.',
  4380112: 'Vanilla IRS = exchange fixed for floating. The floating leg references SOFR (post-LIBOR transition).',
  4380113: 'FRA locks a forward rate for a single period. A swap chains many FRAs across the life of the trade.',
  4380114: 'Payer swaption = right to pay fixed (bearish rates); receiver swaption = right to receive fixed (bullish rates).',
  4380115: 'Cash vs futures basis = repo-implied carry plus delivery options. When basis dislocates, prop and arb desks step in.',
  4380116: 'Stripping a coupon bond produces zero-coupon pieces. Each strip has duration equal to its maturity — pure rate sensitivity.',
  4380117: 'Spot settles T+2 (most pairs); forward settles at a future date with the points priced off rate differential.',
  4380118: 'NDF settles net cash in deliverable currency — used where the underlying is non-deliverable (CNY, INR, BRL).',
  4380119: 'FX swap = spot leg + offsetting forward leg. Used as a funding tool — borrow one currency, lend another.',
  4380120: 'Calendar spread = long one month, short another. Isolates the curve shape (contango vs backwardation), not flat-price direction.',
  4380121: 'Physical commodities require delivery infrastructure; paper trades cash-settle. The desk skill set differs sharply.',
  4380122: 'Delta = approximate hedge ratio in underlying shares per option. ATM call ≈ 0.5; deep ITM ≈ 1.',
  4380123: 'Gamma is the curvature — how fast delta changes. Long gamma rewards moves; short gamma punishes them.',
  4380124: 'Long options = long vega (helps when IV rises) and short theta (loses time value). The two pay for each other.',
  4380125: 'Delta-neutral hedges spot direction. Market-neutral hedges the broader factor — beta, sector, country.',
  4380126: 'Gamma-neutral lets the trader hold a vol view without scrambling on every spot move. Trade decay against convexity.',
  4380127: 'Vega-neutral combines options across strikes/expiries so the vol exposure nets out — leaves a clean directional or curvature trade.',
  4380128: 'Variance risk premium = IV systematically rich vs subsequently realized. Selling vol earns it on average — but pays for it in the tails.',
  4380129: 'Equity skew = OTM puts richer than OTM calls. Reflects crash insurance demand and the structural short-vol of dealers.',
  4380130: 'Historical VaR = sort recent P&Ls, pick the tail percentile. No distribution assumption — and limited by the lookback.',
  4380131: 'VaR is silent on what happens *past* the threshold. The size of the worst day inside the tail is not captured.',
  4380132: 'ES averages the loss conditional on being past the VaR cutoff. Basel III replaced 99% VaR with 97.5% ES for trading book.',
  4380133: 'Reverse stress test asks "what scenario breaks us?" — the opposite of forward stress. Identifies hidden assumptions.',
  4380134: 'Vanna = delta-vol cross. Volga = vega-vol cross. Both matter when the surface shifts shape, not just level.',
  4380135: 'Black-Scholes assumes constant vol, no jumps, lognormal returns. Every assumption is violated in real markets — pricing adjusts via skew/smile.',
  4380136: 'Bachelier (normal) handles negative rates and is standard in rates options; Black (lognormal) is standard in equities.',
  4380137: 'Convexity helps the holder when rates move *in either direction*. But the convexity is paid for in carry — TANSTAAFL.',
  4380138: 'Positive carry = you get paid to hold the position. Roll-down = additional pickup as the bond ages along a sloped curve.',
  4380139: 'GC repo = general collateral, anything in scope. Special repo = specific bond in demand, lower repo rate. The basis is "specialness."',
  4380140: 'DV01 = price move per 1bp rate change; CS01 = per 1bp credit spread change. Both live on a credit bond — together.',

  // ---------- Chapter 3: Client Flow and Trade Ideas ----------
  4103027: 'A hedge against jet-fuel exposure addresses the actual risk driver. Adding airlines or hedging software does not.',
  4103028: 'Color = observation of flow and liquidity, caveated. It informs the client without making a buy/sell call.',
  4105090: 'Mandate is contractual, not preference. Pitching past it is a suitability problem the salesperson owns.',
  4105091: 'Morning call value = organize overnight moves into actionable context. Timely, relevant, caveated — not predictive.',
  4107352: 'Factual flow + appropriate caveats. Inventing news or promising reversal both cross into market-conduct risk.',
  4107358: 'Coverage value = orthogonality, not amplification. The client\'s book context is the first filter.',
  4107828: 'Solve the client\'s problem first. Cross-selling complex products into simple needs is the suitability trap.',
  4380200: 'Thesis + catalyst with timing + entry/target/stop + sizing + axe. Anything short of that is a comment, not an idea.',
  4380201: 'Thesis explains why it should work; catalyst explains why now. A pitch without a catalyst has no clock.',
  4380202: 'Risk/reward = expected upside over defined downside, with the stop priced in. A 3:1 frame the PM can underwrite.',
  4380203: 'Match horizon to client mandate and to the catalyst. A six-month thesis pitched to a fast-money book misfires.',
  4380204: 'Kill criteria are written in advance — what happens, by when, would make you wrong. Without them, conviction drifts.',
  4380205: 'Tiering is wallet-weighted: tier-1 gets first call on axes, color, and capital commitment. Tier-3 gets the broadcast.',
  4380206: 'Best axes go to the clients who pay for them. Allocating evenly across tiers wastes the commercial signal.',
  4380207: 'Vote economics drive coverage intensity. The annual vote = the client\'s explicit rank order of bank coverage.',
  4380208: 'Blasting commoditizes the idea. Tailoring preserves the value to each PM who hears it specifically framed.',
  4380209: 'Reverse inquiry from a tier-1 client jumps the queue. The desk decides where to commit capital, sales decides who to call back first.',
  4380210: 'Axe = desk inventory preference. It is *not* a client order, *not* a directional view, and *not* a compliance directive.',
  4380211: 'Bid axe = desk wants to buy. Offer axe = desk wants to sell. The direction tells sales who to call.',
  4380212: 'Morning color note is curated for sales — strip the boilerplate, find the axes and the catalyst views that actually matter today.',
  4380213: 'Selective sharing requires that the desk does not signal flow. Tipping which clients are working what is the breach line.',
  4380214: 'An IOI is an indication of interest you can show to clients; an axe is the desk\'s own inventory. IOIs route through TradeWeb/Bloomberg.',
  4380215: 'Public side = sales/trading/research; private side = banking/restructuring. The wall exists so MNPI does not cross.',
  4380216: 'Wall-crossing requires written acknowledgment and watch-list logging. Once crossed, the client cannot trade the name for that period.',
  4380217: 'Reg AC = the analyst certifies the views are their own and discloses any compensation tied to them. It is a per-report attestation.',
  4380218: 'Reg M restricts bidding/purchasing by deal participants during the restricted period — usually one to five days pre-pricing.',
  4380219: 'For a follow-on, the restricted period starts on the determination of offering price. Bona-fide market making is the carved-out exception.',
  4380220: 'Corporate access calls are public-issuer 1:1s. The risk is selective disclosure — Reg FD applies to issuers, and MNPI rules apply to anyone who hears it.',
  4380221: 'Breach response = isolate, escalate to control room, freeze trading in the name, document. Speed beats explanation.',
  4380222: 'Pitch structure = catalyst-led headline → thesis in three bullets → levels and sizing → risks and kill criteria → desk\'s axe. PM time is the scarcest input.',
  4380223: 'Most common failure: the pitch is a research note in disguise — no catalyst, no levels, no axe. Sales add value by being the layer research is not.',
  4380224: 'Match name to mandate. Long pitch on a small-cap to a megacap-only fund is a wasted call; same on a high-beta name to a defensive book wastes the seat.',
  4380225: 'Pair trade isolates the relative view by removing the common factor. If you only want the spread, you do not want to hold the beta.',
  4380226: 'Beta-weight or dollar-weight depending on the pair. Equal-share is rarely right when the betas differ.',
  4380227: 'Pairs decay because the relationship was never static. Rebalance against the convergence trajectory, not against pure mean reversion.',
  4380228: 'Risk reversal = long call + short put, both OTM. Cheap directional exposure with downside obligation — zero or low premium.',
  4380229: 'Call spread caps upside but kills the long-vol exposure. Outright call costs more in premium but keeps the convexity.',
  4380230: 'Collar = long put + short call around a stock position. Caps both sides; often zero-cost. Used for concentrated holders facing tax-cost basis lock-in.',
  4380231: 'Cap intro introduces hedge funds to potential LPs. It is *not* a fundraising guarantee and *not* a paid placement service — it is relationship marketing.',
  4380232: 'Cap intro sits in PB because the PB owns the hedge-fund relationship. The economics live in financing, not in cap intro fees.',
  4380233: 'Soft dollars = excess commission directed to bundled services, governed by Section 28(e) of the 1934 Act and disclosed to end investors.',
  4380234: 'Soft dollars = client overpays commission for research bundle. Directed brokerage = client steers commission to a specific broker for non-research reasons.',
  4380235: 'A block is a single large print, usually negotiated off-exchange, then printed back to the tape with a delay.',
  4380236: 'Capital commitment = desk takes the other side from its own book. Agency = desk works the trade to the market for a commission.',
  4380237: 'Risk-bid pricing = mid minus a discount for the desk\'s carry, hedging cost, and unwind risk. The bigger the size relative to ADV, the wider the discount.',
  4380238: 'Once committed, the desk has to unwind without leaking the trade — algos, dark venues, and patience replace the original print.',
  4380239: 'Natural IOI = real client order behind it. Super IOI / advertised = a hint of interest, often without firm size. Tiering exists for a reason.',
  4380240: 'Best-ex under FINRA 5310 is a multi-factor test, documented per order on a reasonable basis — not lowest commission.',
  4380241: 'Pre-earnings flow = positioning, IV skew, and options open interest. The desk reads which way the book is leaning.',
  4380242: 'Post-earnings reaction pitch lives in the first 24-48 hours. Speed of conviction matters more than depth of model build.',

  // ---------- Chapter 4: Execution, P&L, and Limits ----------
  4103026: 'Limits exist for the firm, not the client. Transparency and a plan are the only acceptable next moves.',
  4103030: 'Filled quantity + average price + remaining + market context + options. Specifics let the client decide.',
  4103031: 'Escalate immediately under error procedures. Quiet "fixes" multiply errors and violate internal controls.',
  4105086: 'VWAP participates by expected volume profile across the session. Good fit for impact-minimizing orders, not for urgent ones.',
  4105088: 'A stop defines an exit if the trade goes wrong. It is for discipline, not for guaranteed price.',
  4105089: 'Five bank stocks share rates beta, sector beta, and funding beta. Diversification across the same factor is concentration.',
  4105095: 'Attribution decomposes by risk factor — direction, curve, spread, vol. The headline P&L is a result, not a diagnosis.',
  4107350: 'Limit breach = escalate first. Risk discovers it through EOD reports anyway; transparency is the only career-preserving move.',
  4107357: 'Stops convert to market orders. In a gap, the fill is wherever the market trades — not the stop level.',
  4380300: 'TWAP = even time slices, ignores volume profile. VWAP = match expected volume distribution. Literal-time vs volume-weighted.',
  4380301: 'POV ("percentage of volume") fixes target participation rate. The algo trades as fast or slow as the market does.',
  4380302: 'IS optimizes against arrival price — minimizing the gap between decision price and average fill. Good for alpha-decay-sensitive orders.',
  4380303: 'Liquidity-seeking algos hunt across lit and dark venues, sweeping when liquidity appears. Useful in fragmented mid-cap names.',
  4380304: 'VWAP misfits when the alpha decays during the day — you want IS or a more aggressive schedule, not a passive volume match.',
  4380305: 'Urgency → IS or aggressive POV. Time-insensitive → VWAP/TWAP. Match the algo to the alpha\'s shelf life.',
  4380306: 'Block in lit = display tax. Block in dark = adverse-selection risk. Most large orders blend, gated by real-time conditions.',
  4380307: 'Arrival price = mid at the moment the order hit the desk. IS algos optimize against this; benchmark choice matters as much as algo choice.',
  4380308: 'VWAP benchmark can be gamed by the trader who *picks* the start time. Honest TCA compares against a fixed reference window.',
  4380309: 'IS = delay cost + execution cost + opportunity cost on unfilled portion. Decomposition tells you where the leakage actually lives.',
  4380310: 'Slippage vs impact: slippage is the realized gap to benchmark; impact is what *you* caused. They are not the same and the math matters.',
  4380311: 'Clients run TCA because they have to justify execution to their own IC and LPs. The desk that anticipates the TCA conversation keeps the flow.',
  4380312: 'Temporary impact reverses after the order; permanent impact does not. Permanent comes from information; temporary comes from liquidity.',
  4380313: 'Square-root law: impact ≈ σ × (order size / ADV)^0.5. Doubling order size 1.4x\'s the impact, not 2x — useful intuition for sizing.',
  4380314: 'Big aggressive orders signal information. The market re-prices on the inference, not just the executed shares.',
  4380315: 'SOR ranks venues by price, fees, fill probability, latency. The routing decision happens per order, not per stock.',
  4380316: 'Iceberg hides size but accepts slower fills as the displayed slice refreshes. Useful when avoiding signaling beats execution speed.',
  4380317: 'Maker = posted resting liquidity; taker = removed it by crossing the spread. Rebate vs fee follows from that classification.',
  4380318: 'Midpoint peg waits for a counterparty inside the spread. Saves half-spread but trades execution certainty.',
  4380319: 'If the only counterparty in the dark pool is the informed seller, you get filled exactly when you should not. Adverse selection is the cost of hiding.',
  4380320: 'High-touch revenue = commission + spread on facilitated blocks. Low-touch = thin commission, scale through volume.',
  4380321: 'Realized = closed positions; unrealized = open positions marked-to-market. Realized hits the cash; unrealized hits the daily P&L.',
  4380322: 'Greeks attribution: delta + gamma + vega + theta + carry should approximately reconcile to daily P&L. Residual is the diagnostic.',
  4380323: 'Market-maker spread P&L = inventory in × inventory out at the spread. Inventory risk eats into it whenever flow is one-sided.',
  4380324: 'FVA charges the trade for funding the position over its life. Post-2014 it is in every derivative pricing chain.',
  4380325: 'CVA = expected loss from counterparty default. Uncleared swaps carry CVA; cleared swaps push it onto the CCP.',
  4380326: 'CCP novation puts the clearinghouse between the two original counterparties. Both face the CCP — bilateral credit risk converts to CCP risk.',
  4380327: 'Initial margin covers a stressed move; variation margin covers daily moves. IM is risk-sized; VM is mark-to-market.',
  4380328: 'VaR limit caps tail-risk exposure as estimated by the model. The limit is the model\'s output, not a hard physical cap on losses.',
  4380329: 'Concentration limit caps exposure to one name/issuer/sector. Different from VaR — addresses idiosyncratic, not aggregate, risk.',
  4380330: 'Drawdown-triggered stop-loss policies force the desk to cut after a defined loss. Discipline beats conviction at the bottom of a P&L hole.',
  4380331: 'Limit breaches require same-day rectification or formal extension. Carrying a breach overnight without authorization is a fireable offense.',
  4380332: 'LTCM = leverage + correlation breakdown + liquidity collapse. The trades were "right" eventually; the funding was not.',
  4380333: 'Knight Capital = bad code deployment, no kill switch. $440M loss in 45 minutes. The lesson is operational risk, not market risk.',
  4380334: 'Archegos = family-office TRS swaps across multiple PBs, none of them seeing total exposure. The collapse cost CS $5.5B and the franchise.',
  4380335: 'RENTD = "reasonably expected near-term demand" — the test that distinguishes market-making inventory from prohibited prop under Volcker.',
  4380336: 'Volcker exemptions: market-making, underwriting, risk-mitigating hedging, government securities, foreign sovereign bonds.',
  4380337: 'Basel III RWA pressure pushes desks to optimize balance sheet usage. Trades with high RWA may be uneconomic even if P&L positive.',
  4380338: 'Inventory aging tracks how long positions sit on the book. Old inventory ties up balance sheet and signals stale risk.',
  4380339: 'Flash P&L = same-day trader estimate; reconciled P&L = MO/BO-confirmed and reconciled. The gap is the diagnostic.',
  4380340: 'Spoofing = entering orders with intent to cancel before execution to move price. Criminalized under Dodd-Frank Title VII Section 747.',

  // ---------- Chapter 5: Regulation and Desk Communication ----------
  4200030: 'Best-ex is a multi-factor obligation. Price, liquidity, certainty, client objectives — not a single dimension.',
  4200031: 'Restricted-list addition mid-trade = stop new principal activity, escalate to compliance for the in-flight order.',
  4200032: 'Trading just before firm-published research is a textbook front-running surveillance trigger.',
  4107362: 'Confidentiality is constant. General market color does not require revealing another client\'s order.',
  4107823: 'Aggregated color is allowed; specific client identification is not. The boundary is sharp and the consequences are real.',
  4107832: 'Unpublished research = MNPI by the firm\'s own action. Channel does not change the rule.',
  4107833: 'Allocation needs policy, documentation, and fairness. Scarcity is exactly when process matters.',
  4380400: 'SEC = securities regulator (rule-making + enforcement). FINRA = SRO that supervises broker-dealers under SEC oversight.',
  4380401: 'CFTC regulates futures, swaps, and commodity options. Dodd-Frank gave it swap jurisdiction.',
  4380402: 'Security-based swap = SEC jurisdiction; swap (rates, FX, commodities) = CFTC. The split is statutory.',
  4380403: 'MSRB writes rules for muni-securities dealers and advisors. SEC and FINRA enforce them.',
  4380404: 'State regulators (blue-sky laws) cover registration, fraud, and specific products. They overlay federal regulation, not replace it.',
  4380405: 'Volcker bans prop trading at banks. Market-making is exempt — under RENTD, with limits and compliance oversight.',
  4380406: 'Volcker exception abuse pattern = market-making inventory that is too large, too directional, and held too long. Regulators look at the math.',
  4380407: 'Title VII required clearing of standardized swaps through a registered DCO. Bilateral cleared swaps are the post-DF default for IRS and CDS.',
  4380408: 'SEFs are the swap-equivalent of exchanges. Required-to-be-cleared and made-available-to-trade swaps must execute on a SEF or DCM.',
  4380409: 'The "push-out" rule (now narrowed) required risky swap activity to leave the FDIC-insured bank. Title VII swap-dealer registration is the survivor.',
  4380410: 'NBBO trade-through prohibited under Reg NMS Rule 611. Protected quotes must be respected across exchanges.',
  4380411: 'ISO sweeps multiple venues simultaneously, satisfying trade-through obligations. Used for urgent multi-venue execution.',
  4380412: 'Sub-penny pricing banned for stocks above $1 under Rule 612. Quotes must be in penny increments — execution can be sub-penny inside.',
  4380413: 'MiFID II unbundled research from execution in Europe. US conversation revolves around 28(e) safe harbor and partial alignment.',
  4380414: 'Best-ex documentation is the audit trail — order, venue, timestamp, rationale. Without it, the test cannot be defended.',
  4380415: 'Reg M restricted-period bidding by underwriters and affiliates is prohibited (with carve-outs). The window is 1-5 trading days pre-pricing.',
  4380416: 'Passive market-making exception lets a market maker continue quoting at or below the highest independent bid during the restricted period.',
  4380417: 'Reg AC requires the analyst to certify (in writing, per report) that views are their own and disclose related compensation.',
  4380418: 'Reg SHO Rule 203 = locate before shorting. The broker must have a reasonable basis to believe the stock can be borrowed.',
  4380419: 'Threshold list = stocks with persistent fails-to-deliver. Buying-in obligations kick in after T+13.',
  4380420: 'Bona-fide market-maker exception lets MMs short without pre-locating, contingent on real two-way quoting. Abused, it becomes naked shorting.',
  4380421: 'Spoofing = enter, observe, cancel. The cancellation pattern is the surveillance signature.',
  4380422: 'Layering stacks multiple non-bona-fide orders across price levels. Iceberg is legitimate; layering is manipulative — intent distinguishes.',
  4380423: 'Marking the close = trades placed to drive the closing print. Surveillance hits on volume and price disproportion at the close.',
  4380424: 'Painting the tape / wash = trades with no economic substance that create false price/volume signals. Federal felony under 9(a)(1).',
  4380425: 'Rule 10b-5 = fraud in connection with the purchase or sale of a security. Manipulation, omissions, and misstatements all live here.',
  4380426: 'Salman (2016) confirmed personal benefit can be a gift to a relative; Newman narrowed the doctrine and was substantially overruled by Salman.',
  4380427: 'Corporate-access calls expose the desk if the issuer slips MNPI. Reg FD applies to the issuer; tipper-tippee liability applies to anyone who trades on it.',
  4380428: 'Watch list = monitored, traders unaware; restricted list = traders aware, activity blocked. Watch precedes restrict.',
  4380429: 'Control-room logs wall-crossings and watch/restricted list additions. The log is the audit trail in any enforcement matter.',
  4380430: 'Recorded lines apply to all client and trading conversations on registered devices. The recording obligation is real and routinely retrieved.',
  4380431: 'Off-channel comms (WhatsApp, Signal, personal text) on business matters violate 17a-4 record-retention. $2B+ in fines in 2022-2023.',
  4380432: '17a-4 requires retention of communications related to the business — for at least 3 years (first 2 years easily accessible), longer for some categories.',
  4380433: 'Pre-clearance = compliance approves the personal trade before execution. Blackouts cover IPOs and restricted names. PA discipline keeps you employed.',
  4380434: 'Gift and entertainment limits are firm-specific (often $100/year per recipient for gifts). Exceeding without disclosure is a real issue.',
  4380435: 'MSRB G-37 bans muni-securities business with state/local issuers for two years after political contributions exceeding the de minimis.',
  4380436: 'Solicited = desk pitched it; unsolicited = client initiated. Tagging matters for suitability defense and surveillance.',
  4380437: 'Rule 605 = market-center execution quality stats; Rule 606 = broker order-routing disclosure (PFOF, venues). Both are quarterly.',
  4380438: 'TRACE = FINRA\'s corporate-bond trade-reporting facility. Trades report within 15 minutes (most names).',
  4380439: 'TRF = trade reporting facility for off-exchange equities (dark pools, internalized retail flow). The print eventually hits the tape.',
  4380440: 'Reg S = offshore offering exemption; Rule 144A = QIB-restricted resale. Both bypass full SEC registration via different doors.',
  4380441: 'OFAC sanctions screening is mandatory pre-trade. A hit means stop, escalate, and (often) freeze the asset until OFAC license clears.',
  4380442: 'SAR (Suspicious Activity Report) filing is mandatory for transactions that match defined red flags. Escalate to AML, do not investigate yourself.',

  // ---------- Capstone: Polaris Capital Management ----------
  4380500: 'Surface what moves Polaris\' book first — the TSCO catalyst is theirs to act on. Asia tail and HCO block come after.',
  4380501: 'Polaris is a $4.2B long/short — the desk\'s natural call is sizing, hedge, and entry, not commentary.',
  4380502: 'Translate the desk axe into something Polaris\' PM can use this morning. Inventory matters only when it serves the client.',
  4380503: 'Read Polaris\' positioning before pitching. Adding to a long they already have is amplification, not coverage.',
  4380504: 'Color from overnight ≠ a recommendation. Frame it as flow context, not as a trade idea.',
  4380505: 'Prioritize calls by P&L impact for the client, not by who asked first.',
  4380506: 'A specific axe + specific PM + specific catalyst is the morning unit of work. Anything more general is not coverage.',
  4380507: 'When Polaris turns reverse-inquiry on you, the right move is to read the inquiry as signal — and check if the desk wants to be on the other side.',
  4380508: 'Confirmation bias is the morning trap. Test the catalyst against alternative explanations before pitching it.',
  4380509: 'Sales coverage is repetition with selectivity. The PM remembers the call that landed once, not the four that did not.',
  4380510: 'TSCO long needs catalyst + levels + sizing + risk. The hyperscaler win is the catalyst — the rest is structure.',
  4380511: 'Frame valuation in the language Polaris uses — FCF yield, NTM EPS, comp set. Not whichever lens makes it look cheapest.',
  4380512: 'Identify the bear thesis before pitching. The PM will ask, and the answer cannot be improvised.',
  4380513: 'Sizing depends on Polaris\' book, not on TSCO\'s float. $400M against a $4.2B book is the relevant scale.',
  4380514: 'Catalyst + counter-catalyst define the risk frame. Both have to be specific and dated for the trade to be tradeable.',
  4380515: 'Where to put the stop is a function of position thesis breakage, not of charting. Define the level by what would falsify the catalyst.',
  4380516: 'The desk\'s TSCO axe is informational color, not the pitch itself. Mixing the two confuses the client.',
  4380517: 'Time horizon matches catalyst — a 3-month thesis pitched as long-term is a misrepresentation by accident.',
  4380518: 'Comp set selection drives the implied target. Be defensible on why these comps, not those.',
  4380519: 'Pitch close = ask, not summary. "Do you want to put it on?" is the only ending that earns the next call.',
  4380520: 'Order anatomy: total size, daily participation, algo choice, dark/lit blend, urgency. Build it backwards from the kill-criteria timeline.',
  4380521: 'TSCO ADV and the percentage of ADV you intend to use sets the upper bound on aggression. 15-20% is the comfort zone for most names.',
  4380522: 'IS algo with capped participation is the default for an alpha-decay-sensitive build. VWAP misfits this profile.',
  4380523: 'Dark fills hide intent but trade fill certainty. The blend depends on signaling cost relative to alpha-decay cost.',
  4380524: 'Block opportunity changes the calculus — a clean fill at a discount can beat three days of working the algo.',
  4380525: 'Capital commitment from the desk = immediate fill at a price. Useful when speed beats slippage; expensive when patient pays.',
  4380526: 'Working the residual after a partial print needs the same discipline as the original order — same algo, same kill criteria.',
  4380527: 'Pre-trade TCA estimate sets the expected impact. Post-trade TCA reconciles against it — that gap is what gets discussed next quarter.',
  4380528: 'Slippage versus benchmark is the client\'s metric. The desk\'s metric is realized P&L on the inventory used to facilitate.',
  4380529: 'Coordinate with Polaris\' execution trader. They run a desk too — duplicate work creates impact and friction.',
  4380530: 'Overlay decision: hedge the beta, the sector, the factor, or none. Each has a cost and a residual.',
  4380531: 'SPX futures hedge the broad beta but leave sector and idiosyncratic exposure. Cheap, liquid, imprecise.',
  4380532: 'XLK or sector ETF hedge targets sector exposure but introduces ETF tracking error and constituent overlap.',
  4380533: 'Pair-style overlay (short a comp) is precise but adds idiosyncratic short risk. Use when the comp is well-correlated with the long.',
  4380534: 'Options collar caps both upside and downside. Zero-cost is possible but accepts forced exit at the call strike.',
  4380535: 'Hedge ratio = beta × dollar-size. Re-mark as the long appreciates, not at fixed intervals.',
  4380536: 'Hedge cost is real P&L. The unhedged scenario is what makes the hedge worth running — explicitly priced.',
  4380537: 'Roll discipline: futures roll quarterly, options roll on calendar. Forgetting the roll is how hedges become unhedges.',
  4380538: 'Basis risk is the gap between the hedge instrument and the underlying exposure. It is small in most cases — until it is not.',
  4380539: 'Communicate the hedge to the PM in plain terms — what is hedged, what is not, what it costs. They sign off on the residual.',
  4380540: 'Position is now $400M on a $4.2B book. Concentration check, factor check, liquidity check — before the next add.',
  4380541: 'Greeks attribution on the options leg should reconcile. Residual outside expected tolerance triggers a desk review.',
  4380542: 'Compliance sign-off on the original trade does not extend to subsequent activity. Each add needs the same hygiene.',
  4380543: 'Restricted-list addition mid-trade = stop new principal activity, escalate. The in-flight piece runs through compliance, not trader discretion.',
  4380544: 'Insider-trading surveillance hits on timing, size, and information access. Documented thesis date is the basic defense.',
  4380545: 'PA trading windows for the analyst on TSCO are blacked out around firm activity. Pre-clearance is mandatory.',
  4380546: 'Quarter-end mark = independent pricing from the IPV team. Trader marks are inputs, not outputs, at quarter close.',
  4380547: 'Concentration disclosure to the PB and to internal risk both apply. Late or missing disclosure is the operational risk that triggers reviews.',
  4380548: 'Year-end Volcker test asks whether the inventory was held for RENTD or for prop intent. Documentation has to be contemporaneous.',
  4380549: 'Polaris\' annual vote depends on the cumulative coverage experience. The TSCO trade is one data point — the relationship is the book.',
}

// ST_CORRECT_SHORTENED — questions where the correct answer was substantially
// longer than the longest wrong distractor. Each entry replaces `correct` with
// a punchier line and pushes the trimmed explanatory detail into
// `lessonAddendum` so no information is lost.
export const ST_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  4380000: {
    newCorrect: 'Owns the client relationship — translates firm research, axes, and balance sheet into ideas the client can use, and routes interest to the right trader',
    lessonAddendum: 'The salesperson knows the PM\'s book, mandate, and constraints. The full role also feeds market color back to both sides — the relationship is bidirectional, not just outbound idea distribution.',
  },
  4380008: {
    newCorrect: 'A short EUR put plus a long EUR call, struck so premiums offset — cost paid in capped upside and forced conversion above the call strike',
    lessonAddendum: 'The structurer is recombining vanilla options to produce the payoff the treasurer wanted. "Zero-cost" refers only to no upfront premium; the client accepts giving up upside on the receivable above the call strike, which is the economic price of the hedge.',
  },
  4380009: {
    newCorrect: 'Middle office handles trade validation, intraday risk and P&L, and limit oversight; back office handles settlement, confirmations, custody, corporate actions, and reconciliations',
    lessonAddendum: 'Both sit outside the trading book but inside the operational chain. The segregation of duties between risk monitoring (MO) and settlement (BO) is a basic operational-risk control — it prevents traders from marking their own P&L or instructing their own settlement.',
  },
  4380015: {
    newCorrect: 'Alternative Trading Systems registered under SEC Reg ATS — they hide pre-trade quotes but report trades to the tape and comply with Reg NMS and best-ex',
    lessonAddendum: 'Dark pools are operated by broker-dealers, must file Form ATS-N with the SEC, and live inside the same Reg NMS/best-execution framework as exchanges. The "dark" refers only to pre-trade transparency, not regulatory absence.',
  },
  4380016: {
    newCorrect: 'Lit gives price discovery and tight execution but advertises interest (impact); dark hides intent and can find size, but offers no pre-trade certainty and risks adverse selection',
    lessonAddendum: 'For small orders, lit at the NBBO is usually fine. For orders that are large relative to ADV, dark venues let the trader hide intent at the cost of fill certainty. Most modern execution algos blend both based on real-time conditions.',
  },
  4380017: {
    newCorrect: 'ELP = technology-driven non-bank market makers (Citadel Sec, Virtu, Jump, Hudson River) quoting via algorithms across many venues — same function as traditional MMs, different institutional shape',
    lessonAddendum: 'ELPs are registered broker-dealers and FINRA members, running high-throughput low-latency systems rather than universal-bank dealer desks. They run a meaningful share of US equity and options volume.',
  },
  4380018: {
    newCorrect: 'High-speed market-making and stat-arb firms (Citadel Sec, Virtu, Jump, Jane Street on options) — registered broker-dealers, large share of lit liquidity, not legal front-runners',
    lessonAddendum: 'HFT firms react to public market data extremely quickly; they do not have access to non-public client orders. Information leakage from displayed orders is a real cost the buy-side mitigates with smart routing, but front-running has a specific legal definition and HFT firms generally do not meet it.',
  },
  4380027: {
    newCorrect: 'NBBO = best bid and best offer across all protected lit exchanges. Reg NMS Rule 611 bans trading through it without a valid exception (ISO, flickering quote, self-help)',
    lessonAddendum: 'The protected-quote regime is what gives the NBBO regulatory force. Dark pools and ATSs are not protected venues — they reference the NBBO but do not generate it. The trade-through rule is the spine of US equity market structure.',
  },
  4380042: {
    newCorrect: 'VWAP/TWAP track time/volume benchmarks; POV chases volume rate; IS optimizes against arrival price. Match algo to the client\'s benchmark and the alpha\'s shelf life',
    lessonAddendum: 'IS is the right choice when alpha decays during the day — it optimizes the gap between decision price and average fill. VWAP/TWAP fit benchmark-driven mandates where matching the volume profile beats minimizing impact. POV is the participation-rate constraint version.',
  },
  4380044: {
    newCorrect: 'Tradeweb (rates and credit), Bloomberg ALLQ (multi-asset fixed income), MarketAxess (credit) — multi-dealer RFQ platforms that aggregate dealer quotes for buy-side clients',
    lessonAddendum: 'These platforms moved a meaningful share of OTC fixed-income flow from voice to electronic over the 2010s. The dealer still prices the trade — the platform routes the RFQ and aggregates the responses, giving the buy-side a competitive bidding process.',
  },
  4380105: {
    newCorrect: 'Variance swap pays (realized variance − strike variance) × notional vega — pure volatility exposure with no direction or path dependency',
    lessonAddendum: 'Variance swaps replicate via a strip of options across all strikes. They pay convex exposure to vol — long variance benefits asymmetrically from large moves regardless of direction. Used extensively by vol funds and dispersion traders.',
  },
  4380111: {
    newCorrect: 'CDX = North American IG and HY credit indices (125 IG names, 100 HY names); iTraxx = European equivalents. Both quoted as a single spread, liquid hedging instruments for credit beta',
    lessonAddendum: 'The indices roll every 6 months (March and September) with new on-the-run series. Trading the index is cheaper and more liquid than trading every single-name CDS in the basket — which is exactly why hedge funds use them for macro credit hedges.',
  },
  4380132: {
    newCorrect: 'ES averages the loss conditional on exceeding the VaR threshold. Basel III replaced 99% VaR with 97.5% ES for trading-book capital',
    lessonAddendum: 'ES (also called CVaR or Tail VaR) is a coherent risk measure — VaR is not. The shift was prompted by the financial crisis revealing how silent VaR is about the depth of the tail. ES forces the model to characterize the conditional tail mean.',
  },
  4380200: {
    newCorrect: 'Thesis, catalyst with timeframe, entry/target/stop levels, position-sizing context, and the desk\'s relevant axe — so the PM can decide and execute without a second call',
    lessonAddendum: 'Anything less than this list is a comment, not an idea. The catalyst-with-timing is the load-bearing input — without it, the trade has no clock and the PM will not commit risk.',
  },
  4380204: {
    newCorrect: 'A pre-committed list of specific events or data points that, if observed, would force the desk to retract or invert the call — dated and measurable',
    lessonAddendum: 'Kill criteria function only when written at the moment of pitch. Examples: "stop at $42 if breached on close" or "retract if Q3 hyperscaler revenue grows under 18% YoY." Without the discipline of pre-commitment, the call drifts and the desk loses credibility.',
  },
  4380207: {
    newCorrect: 'Coverage intensity is funded by the annual broker vote — tier-1 clients drive most of the wallet and get the bulk of premium service in return',
    lessonAddendum: 'Vote economics are explicit on most sell-side desks. The annual broker-vote process by the buy-side client determines which firms get tier-1 treatment in their pay-for-service ranking. The desk allocates premium axes, capital commitment, and senior coverage time accordingly.',
  },
  4380213: {
    newCorrect: 'Aggregate the axe across enough recipients that no client can infer specific desk positioning, and avoid naming which clients have already engaged',
    lessonAddendum: 'Selective sharing requires careful framing. Tipping that "we already have a buyer at 50.10" telegraphs flow direction to the next client; aggregating ("we have decent interest building") preserves the commercial information while respecting the wall.',
  },
  4380230: {
    newCorrect: 'Long put + short call OTM around the stock position — caps both downside and upside, often zero-cost. Used by concentrated holders unable to sell outright',
    lessonAddendum: 'Concentrated founders, executives, and family-office holders use collars to manage tax-cost basis lock-in or insider-trading windows. The structure converts a binary "hold or sell" choice into a defined range — at the cost of capped upside above the call strike.',
  },
  4380240: {
    newCorrect: 'Reasonable diligence in identifying the best market for the security and using reasonable efforts to obtain the most favorable terms reasonably available — a multi-factor test',
    lessonAddendum: 'FINRA 5310 names specific factors: character of the market, size and type of transaction, number of markets checked, accessibility of quotations, and terms of the customer order. Documentation per order on a reasonable basis is the audit-trail requirement.',
  },
  4380302: {
    newCorrect: 'Optimizes against arrival price — minimizing the gap between the decision price when the order arrived and the average fill price',
    lessonAddendum: 'IS algos balance market impact (going faster) against alpha decay and opportunity cost (going slower). They are the right choice when the alpha decays during the day; VWAP misfits this profile because it accepts whatever volume profile the day produces.',
  },
  4380303: {
    newCorrect: 'Hunts liquidity across lit exchanges and dark venues simultaneously, sweeping aggressively when blocks appear — useful in fragmented mid-cap and small-cap names',
    lessonAddendum: 'Liquidity-seeking algos are the right fit when ADV is thin and the natural is hidden across venues. They sit somewhere between VWAP (passive, predictable) and IS (urgency-driven) — and they require careful parameter tuning to avoid signaling.',
  },
  4380309: {
    newCorrect: 'Delay cost (between decision and order arrival) + execution cost (impact + spread + fees) + opportunity cost (on the unfilled portion)',
    lessonAddendum: 'Decomposing IS this way tells the desk and the client *where* the leakage lives — slow OMS, aggressive algo, or partial fill. Without decomposition, the headline number is a result, not a diagnosis.',
  },
  4380310: {
    newCorrect: 'Slippage = realized cost vs benchmark (includes market moves); market impact = the part *you* caused. Separating them requires a counterfactual model',
    lessonAddendum: 'TCA studies estimate market impact via square-root law or other models — comparing realized fills against the expected impact-free trajectory. Slippage that exceeds estimated impact is the operational diagnostic; less than expected impact may be a sign of good algo selection.',
  },
  4380313: {
    newCorrect: 'Market impact ≈ σ × (order size / ADV)^0.5 — doubling order size raises impact by roughly 1.4×, not 2×',
    lessonAddendum: 'The square-root law (Almgren-Chriss, Kissell-Glantz) is the standard intuition for sizing trades against ADV. The relationship is sub-linear, which means very large orders pay disproportionately less impact per share — but they also signal more.',
  },
  4380322: {
    newCorrect: 'Daily P&L should reconcile to delta + gamma + vega + theta + carry contributions; residual outside tolerance is the diagnostic flag',
    lessonAddendum: 'Greeks attribution decomposes the trader\'s daily P&L into the contributions of each Greek to the position. A clean reconciliation is the baseline; a persistent residual means a model issue (vol surface, basis, dividend) or a position the trader did not fully understand.',
  },
  4380327: {
    newCorrect: 'IM covers a stressed-move scenario at trade inception (sized via a margin model); VM is daily mark-to-market posted in cash or eligible collateral',
    lessonAddendum: 'IM is the risk-sized buffer that protects the CCP through a default close-out window; VM is the running settlement of mark-to-market. The two together make CCP risk transfer work — but they also generate liquidity demands that can spike in stress.',
  },
  4380333: {
    newCorrect: 'Bad SOR deployment activated dormant code, triggering $440M of erroneous fills in 45 minutes — pre-trade controls and kill switches are the lesson',
    lessonAddendum: 'Knight Capital lost $440M in 45 minutes on August 1, 2012 after deploying new SOR code that activated dormant test routines. The firm was effectively bankrupt by the end of the day. The lesson institutionalized pre-deployment testing, kill switches, and circuit breakers across the industry.',
  },
  4380334: {
    newCorrect: 'TRS-based exposure across multiple PBs, none of them seeing total leverage — collapse cost Credit Suisse $5.5B and contributed to the franchise unraveling',
    lessonAddendum: 'Archegos used equity TRS to take large concentrated long positions through Credit Suisse, Nomura, Morgan Stanley, Goldman, and others simultaneously. Each PB saw a slice; none saw the total. When margin calls hit in March 2021, the cascade was uncontrollable.',
  },
  4380409: {
    newCorrect: 'Originally required risky swap activity outside the FDIC-insured bank; narrowed in 2014, but swap-dealer registration remains the major Title VII obligation',
    lessonAddendum: 'The original push-out rule (Section 716 of Dodd-Frank) was narrowed by the 2014 CRomnibus to permit most swap activity inside the insured bank. Swap-dealer registration, recordkeeping, margin, and clearing obligations remain the substantive Title VII regime.',
  },
  4380432: {
    newCorrect: 'At least 3 years (first 2 readily accessible) for most communications, longer for certain categories — covers all business-related comms regardless of channel',
    lessonAddendum: 'Rule 17a-4 governs retention for broker-dealers. The 3-year minimum applies broadly; some records (e.g., audit confirmations) carry longer obligations. The 2022-2023 off-channel comms enforcement wave ($2B+ in fines) stems directly from failures to retain WhatsApp/Signal/personal-text communications.',
  },
  4380441: {
    newCorrect: 'Pre-trade screening is mandatory — a hit triggers stop, escalate, and (often) freeze the asset until an OFAC license clears',
    lessonAddendum: 'OFAC sanctions lists (SDN, sectoral, country-based) must be screened against every counterparty pre-trade. Knowing-violations carry strict liability with civil penalties up to twice the transaction value or $300K+, and criminal exposure for willful violations.',
  },
  4380507: {
    newCorrect: 'Read the reverse inquiry as flow signal — check the desk axe, the firm position, and whether facilitating fits the franchise',
    lessonAddendum: 'A reverse inquiry from a tier-1 client is information. The desk decides whether to commit capital based on its own positioning; sales decide whether to prioritize the call back. Saying yes uncritically is amateur-hour coverage.',
  },
  4380514: {
    newCorrect: 'Define both the positive catalyst (hyperscaler ramp Q3 prints) and the counter-catalyst (hyperscaler delay or share loss), each dated and measurable',
    lessonAddendum: 'Specifying both sides forces honesty about what would falsify the call. PMs respect pitches that name the counter-catalyst because it shows the salesperson has done the work; PMs ignore pitches that name only the upside.',
  },
  4380518: {
    newCorrect: 'Justify the comp set explicitly — peer SKU mix, margin profile, growth rate — and acknowledge which comps you excluded and why',
    lessonAddendum: 'Comp-set selection drives the implied multiple, which drives the implied target. A pitch that names the comps without defending the inclusion/exclusion logic is a pitch the PM will pick apart in 30 seconds.',
  },
  4380526: {
    newCorrect: 'Work the residual with the same urgency model and kill criteria as the original — partial print does not relax the discipline',
    lessonAddendum: 'After a block prints partial, the residual often becomes the harder execution because the market has already moved. Same algo, same dark/lit blend, same kill criteria — the only thing that changes is the starting inventory.',
  },
  4380538: {
    newCorrect: 'Basis risk is the gap between the hedge instrument and the underlying exposure — usually small, but can dominate in stress (correlation breakdown)',
    lessonAddendum: 'A SPX hedge against a TSCO long carries beta risk plus residual sector and idiosyncratic risk. The basis is small in normal markets and explodes in factor-rotation events. Quantifying it pre-trade is the discipline that distinguishes a hedge from a hope.',
  },
  4380543: {
    newCorrect: 'Halt new principal activity in the name immediately and escalate the in-flight order to compliance — the desk does not unilaterally decide whether to continue',
    lessonAddendum: 'Mid-trade restricted-list addition is a real operational event. Compliance reviews the in-flight piece, the trader documents the timeline, and the firm decides whether to complete, hold, or unwind. Trader discretion is not a legal answer.',
  },
  4380548: {
    newCorrect: 'Inventory must be tied to reasonably-expected near-term customer demand (RENTD), with contemporaneous documentation supporting the determination',
    lessonAddendum: 'The Volcker compliance regime requires that bank-affiliated market makers document their RENTD analysis contemporaneously — not reconstructed at year-end. Examiners look for the trader\'s analysis at the time of the trade, the inventory turnover, and the alignment with stated customer demand patterns.',
  },
}

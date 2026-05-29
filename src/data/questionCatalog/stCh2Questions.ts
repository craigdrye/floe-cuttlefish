import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// SALES & TRADING — CHAPTER 2: Products, Pricing, and Risk Measures
// ----------------------------------------------------------------------------
// 41 questions (IDs 4380100–4380140) extending the 9 existing chapter Qs
// in careerAgentGeneratedRoadmapFinance.ts. Covers cash and derivative
// products across equities, rates, credit, FX and commodities; pricing
// fundamentals; Greeks; vol concepts; VaR and ES; stress; pricing models;
// carry/roll; repo; and risk measures (DV01, CS01, duration, spread duration).
//
// Voice: matches the existing chapter — bespoke per-distractor rationale,
// real misconceptions traders see on the desk (delta-neutral confused with
// market-neutral, VaR mistaken for tail risk, convexity assumed always
// favourable, IV vs RV confusion).
//
// Difficulty target: ~12 at 3, ~21 at 4, ~8 at 5.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe S&T Ch2 canonical bank'

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

const CHAPTER = 'Products, Pricing, and Risk Measures'

export const ST_CH2_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  4380100: 3, // Midpoint and inside market
  4380101: 3, // Level I vs Level II
  4380102: 4, // Time priority on a limit book
  4380103: 3, // Equity TRS basics
  4380104: 4, // Basket swap vs index future
  4380105: 5, // Variance swap payoff intuition
  4380106: 4, // Dividend swap exposure
  4380107: 3, // TBA market for agency MBS
  4380108: 4, // CMBS vs agency MBS risk
  4380109: 3, // IG vs HY corporate split
  4380110: 4, // Single-name CDS payoff
  4380111: 4, // CDX vs iTraxx
  4380112: 3, // Interest rate swap basics
  4380113: 4, // FRA versus swap
  4380114: 5, // Swaption payer vs receiver
  4380115: 3, // UST cash vs futures basis
  4380116: 4, // STRIPS and duration
  4380117: 3, // FX spot vs forward
  4380118: 4, // NDF mechanics
  4380119: 4, // FX swap as funding tool
  4380120: 3, // Crude calendar spread
  4380121: 4, // Physical vs paper commodities
  4380122: 3, // Delta as hedge ratio
  4380123: 4, // Gamma curvature
  4380124: 4, // Theta and vega sign for long options
  4380125: 4, // Delta-neutral vs market-neutral
  4380126: 5, // Gamma-neutral hedge motivation
  4380127: 4, // Vega-neutral construction
  4380128: 5, // IV vs RV and the variance risk premium
  4380129: 4, // IV skew shape reading
  4380130: 4, // Historical VaR mechanics
  4380131: 5, // What VaR misses
  4380132: 4, // Expected Shortfall and Basel III
  4380133: 5, // Reverse stress test
  4380134: 4, // Vanna and volga as cross-Greeks
  4380135: 4, // Black-Scholes assumption limits
  4380136: 5, // Bachelier vs Black for rates
  4380137: 4, // Convexity is not always good
  4380138: 4, // Positive carry and roll-down
  4380139: 3, // Repo GC vs special
  4380140: 5, // DV01 vs CS01 on a credit position
}

export const stCh2Questions: Question[] = [
  // -------------------------------------------------------------------------
  // PRICING FUNDAMENTALS (4380100–4380102)
  // -------------------------------------------------------------------------
  q(4380100, 'Career Skills', CHAPTER, 'Midpoint and inside market',
    'A stock shows a Level I quote of 50.20 bid for 500 shares and 50.24 offered for 300 shares. The midpoint and inside market refer to what?',
    'Midpoint is 50.22, and the inside market is the best-priced bid (50.20) and best-priced offer (50.24) that is currently displayed',
    [
      ['Midpoint is the prior close, and inside market means the trades inside the day\'s high-low range', 'Midpoint is mechanically the average of best bid and best offer right now, not a reference to the prior close. Inside market is the touch — best bid and best offer — not a daily range concept.'],
      ['Midpoint is the volume-weighted average price, and inside market is the size at the touch', 'VWAP is a separate execution benchmark — it is the average traded price over a window, not a quote concept. Midpoint is a quote-only construct.'],
      ['Midpoint is 50.24 because the offer is what executes, and inside market means the most aggressive resting order', 'Crossing the spread executes at the offer, but the midpoint is the average of the two best prices, not the offer side. Inside market refers to the prices at the touch, not a single resting order.'],
    ],
    'Inside market is the best bid and best offer currently displayed; midpoint is their arithmetic mean. Both are quote constructs distinct from VWAP, the prior close, or a daily range.'),

  q(4380101, 'Career Skills', CHAPTER, 'Level I vs Level II depth',
    'A junior trader asks why the desk pays for Level II when Level I is free. What is the cleanest one-line difference?',
    'Level I shows only the top-of-book best bid and best offer; Level II shows the depth — multiple price levels and size on each side from each market participant',
    [
      ['Level I shows delayed prices, while Level II shows the live price', 'Both feeds are live for paying subscribers. The difference is depth, not latency.'],
      ['Level I is for retail and Level II is for accredited investors only', 'Level II is widely available to professional subscribers and is not gated by accreditation. The distinction is about market data tier, not investor classification.'],
      ['Level I shows trades that have already happened; Level II shows pending orders', 'The time-and-sales feed shows executed trades; both Level I and Level II are quote feeds. Level II adds price-ladder depth, not a trade history.'],
    ],
    'Level I is top-of-book only. Level II shows multiple price levels on each side — useful for gauging where size sits before a print and how thick the book is around the touch.'),

  q(4380102, 'Career Skills', CHAPTER, 'Time priority on a limit book',
    'Two limit buys are working at the same price of 100.10 — yours was entered first at 09:31, another firm\'s was entered later at 09:34. A market sell hits the bid. Which buy fills first under price-time priority?',
    'Yours fills first because at the same price, earlier orders have time priority over later orders',
    [
      ['Whichever order has greater size fills first because exchanges prefer to clear inventory in larger blocks', 'Most lit equity venues use price-time priority, not size priority. Larger orders do not jump the queue at the same price level.'],
      ['Both orders pro-rata fill regardless of arrival time, because they sit at the same price level', 'Pro-rata is used on some futures markets, but on most equity limit books at the same price, time of arrival determines fill order.'],
      ['The exchange picks at random between same-priced orders to avoid favouritism', 'Random allocation would defeat the incentive to post early. Exchanges reward early posting through time priority.'],
    ],
    'On a price-time priority book, the queue at each price level fills in arrival order. Time priority is the reward for posting first and providing liquidity earlier.'),

  // -------------------------------------------------------------------------
  // EQUITIES — DERIVATIVES AND SWAPS (4380103–4380106)
  // -------------------------------------------------------------------------
  q(4380103, 'Career Skills', CHAPTER, 'Equity total return swap basics',
    'A hedge fund wants long economic exposure to a single name but does not want to hold the shares on its balance sheet. The desk prices a total return swap. What does the client receive?',
    'The total return of the reference stock (price change plus dividends) in exchange for paying a floating financing leg, typically based on a short-rate benchmark plus a spread',
    [
      ['Price return only, with dividends retained by the dealer as compensation for warehousing the hedge', 'A total return swap passes both price and income legs through to the receiver. If only price return is passed, it is a price-return swap, not a TRS.'],
      ['A fixed coupon set at trade date in exchange for the actual stock performance, with the client paying the floating leg', 'TRSs are typically floating-financing-for-total-return. A fixed-for-total-return structure is possible but unusual and not the standard prime brokerage product.'],
      ['Cash settlement equal to the stock\'s closing price on each reset, with no link to dividends or financing', 'A TRS is a swap, not a forward. It exchanges performance for financing periodically, and dividends are explicitly included.'],
    ],
    'A TRS lets a client take synthetic long equity exposure off-balance-sheet — they get price plus dividends and pay a financing leg. The dealer hedges by holding the stock and earns the spread.'),

  q(4380104, 'Career Skills', CHAPTER, 'Basket swap vs index future',
    'A long-only manager wants exposure to a custom basket of 40 US tech names with specific weights that do not match any listed index. The desk offers a basket swap. Why not just use S&P 500 futures?',
    'Index futures track a fixed published index with fixed weights — they cannot replicate a custom 40-name basket with bespoke weights, so basis risk to the target exposure would dominate',
    [
      ['Index futures cannot be used by institutional investors due to position limits, so a swap is mandatory', 'Institutional investors use index futures every day. Position limits exist but are rarely binding for a 40-name basket of typical size.'],
      ['Basket swaps are always cheaper than futures because there is no exchange fee, so cost is the deciding factor', 'Basket swaps carry financing spreads and structuring fees. They are typically more expensive than listed futures on a per-notional basis; the reason to use them is customization, not cost.'],
      ['S&P 500 futures pay dividends but basket swaps do not, so the swap gives cleaner total-return exposure', 'S&P 500 futures price in expected dividends through the basis — the holder does not receive cash dividends. Both wrappers handle income; the swap\'s value is custom composition.'],
    ],
    'Basket swaps exist when the client needs a custom set of names and weights. Listed futures give cheap broad-index exposure but cannot match a bespoke basket without significant basis risk.'),

  q(4380105, 'Career Skills', CHAPTER, 'Variance swap payoff intuition',
    'A client sells a one-year variance swap on the S&P 500 at a variance strike of 18 (vol points). One year later, realized vol on daily log returns is 25. What happens to the seller?',
    'The seller pays the buyer based on realized variance minus strike variance — and because variance is the square of vol, the loss grows non-linearly when realized vol blows past strike',
    [
      ['The seller pays based on the difference of vols, 25 minus 18, scaled by the vega notional, so the loss is roughly linear in the vol move', 'A variance swap settles on realized *variance* (vol squared), not realized vol. The convex payoff is precisely what makes selling variance swaps so dangerous in a vol spike.'],
      ['The seller is square because the swap caps the loss at the strike level by definition', 'Variance swaps usually have a cap (typically 2.5× the strike) but the loss above strike is real up to that cap. The position is not naturally square — selling vol can produce large mark-to-market losses long before any cap binds.'],
      ['The buyer pays the seller because realized vol exceeded the long-term mean of S&P 500 vol', 'Settlement is mechanical: realized variance minus strike variance times notional. The direction depends only on which side of strike realized came in, not on a long-term mean.'],
    ],
    'Variance swaps pay the squared difference between realized and strike vol. The non-linearity means short variance positions have unbounded downside above strike (modulated only by an explicit cap) — a key reason the product blew up several books during 2008 and again in March 2020.'),

  q(4380106, 'Career Skills', CHAPTER, 'Dividend swap exposure',
    'A client buys a 2026 calendar-year dividend swap on the Euro Stoxx 50 at a strike of 130 index points. What single risk is most isolated by this trade compared with holding the underlying basket?',
    'Exposure to total realized dividends paid by the index constituents during 2026, stripped of price risk and (largely) of rate risk on the underlying',
    [
      ['Exposure to the realized volatility of the index during 2026, since dividend swaps price off implied vol surfaces', 'Dividend swaps are not vol products. They settle on actual cash dividends declared and paid, not on realized volatility.'],
      ['Exposure to dividend yield (dividends divided by spot), which moves automatically when the index level changes', 'Yield is a ratio. A dividend swap settles on the cash dividend amount itself, not the yield — so the trade does not flip sign when the index rallies if the same cash dividends are paid.'],
      ['Exposure to the dividend tax rate in the jurisdictions of index constituents, since the payoff is the after-tax dividend', 'Dividend swap settlement is based on gross declared dividends per the index methodology. Withholding tax treatment matters for the issuer\'s hedge but does not change the swap\'s reference flow.'],
    ],
    'A dividend swap isolates the cash-dividend leg of equity ownership. It strips out price moves and gives a clean view on whether companies will actually maintain, raise, or cut their dividends — a different risk from owning the index.'),

  // -------------------------------------------------------------------------
  // FIXED INCOME PRODUCTS (4380107–4380116)
  // -------------------------------------------------------------------------
  q(4380107, 'Career Skills', CHAPTER, 'TBA market for agency MBS',
    'An MBS salesperson explains that most agency pass-throughs trade TBA. What does TBA mean in practice?',
    'To-Be-Announced — buyer and seller agree on coupon, agency, settlement month, and price; the specific pools delivered are identified only 48 hours before settlement',
    [
      ['Trade-By-Auction — agency pools are sold each morning through a Fed-run auction at a single clearing price', 'There is no daily Fed auction for agency MBS pools. TBA is an OTC forward market where dealers commit to deliver pools matching agreed specifications.'],
      ['Treasury-Backed-Asset — confirmation that the pool is wrapped by the US Treasury and therefore default-free', 'Agency MBS carries agency guarantees from Fannie, Freddie or Ginnie — not a Treasury wrap. TBA is about the delivery mechanism, not the credit wrap.'],
      ['Trade-Based-Average — settlement at the daily VWAP of pools meeting the specification', 'Settlement is at the agreed forward price, not an average. The buyer and seller fix price at trade date and exchange pools at settlement.'],
    ],
    'TBA gives agency MBS its liquidity. Trading on generic specifications (coupon, agency, settlement month) lets pools be commoditized so dealers can quote tight markets without identifying every loan up front.'),

  q(4380108, 'Career Skills', CHAPTER, 'CMBS vs agency MBS risk',
    'A credit PM compares an agency 30-year MBS at par to a senior CMBS bond on a Class A office portfolio. What is the most important risk difference?',
    'The CMBS bond carries genuine credit risk to the underlying commercial loans, whereas agency MBS carries agency guarantee and is fundamentally a rates/prepayment product',
    [
      ['Both carry only prepayment risk; the credit risk on CMBS is fully transferred to the equity tranche below the senior bond', 'The equity tranche absorbs first losses, but a senior CMBS bond is still credit-exposed once the subordination is consumed. Commercial mortgages have no agency guarantee at all.'],
      ['Agency MBS carries more credit risk than CMBS because residential borrowers default more often than commercial borrowers', 'Agency MBS credit risk is absorbed by Fannie, Freddie or Ginnie — the investor sees almost no residential default risk. The CMBS investor is exposed to commercial defaults directly.'],
      ['CMBS is rate-only; the credit work is done by the rating agencies and embedded in the coupon, so the buyer can ignore the underlying property', 'Rating-agency analysis is one input. A senior CMBS bond can and does take principal losses when subordination is breached — relying solely on ratings has burned more than one credit book.'],
    ],
    'Agency MBS is a rates and prepayment product wrapped by an agency guarantee. CMBS is a credit product where loan-by-loan underwriting (LTV, DSCR, tenant rolls) drives recovery in stress — these are very different risk surfaces.'),

  q(4380109, 'Career Skills', CHAPTER, 'IG versus HY corporate split',
    'A new analyst asks where the line between investment grade and high yield sits and why it matters mechanically. What is the cleanest answer?',
    'The line is BBB-/Baa3 — bonds at or above are IG, below are HY; the split matters because many mandates, indices, and capital rules switch behaviour at that boundary, creating forced flows on downgrades',
    [
      ['The line is BBB+/Baa1 — bonds at or below are HY because that is where coupon levels start to compensate for default risk', 'The split is at BBB-/Baa3, not BBB+. Coupon-level intuition is not how indices and mandates define the boundary; ratings are.'],
      ['The line is set quarterly by each rating agency based on macro conditions, so the boundary floats', 'Rating boundaries are static — BBB-/Baa3 vs BB+/Ba1 — and do not float with macro conditions. Individual ratings move; the IG/HY threshold does not.'],
      ['The line is purely economic with no mandate effect — institutional buyers treat IG and HY identically', 'Mandates, index inclusion, and capital charges differ sharply across the line. That is precisely why fallen-angel downgrades create technical selling pressure independent of fundamentals.'],
    ],
    'BBB-/Baa3 is the IG/HY line. Crossing it can force IG-mandated investors to sell into a thin HY market, which is why downgrade risk is its own analytical dimension — sometimes called fallen-angel risk.'),

  q(4380110, 'Career Skills', CHAPTER, 'Single-name CDS payoff',
    'A credit hedge fund buys 5-year protection on a single corporate name at 200 bps running. Six months later the company files Chapter 11. What is the rough payoff?',
    'Protection buyer delivers a defaulted reference obligation (or settles in cash through the ISDA auction) and receives par minus recovery, where recovery is set by the auction process',
    [
      ['Protection buyer receives the full notional regardless of recovery — that is the point of buying protection', 'CDS pays par minus recovery, not full notional. If recovery is 40, the buyer collects 60 per 100 of notional, not 100.'],
      ['Protection buyer receives the running spread back as a refund, plus the price drop in the bonds since trade date', 'The running spread is paid until credit event, not refunded. Payout is determined by the post-default auction price, not the bond price path before default.'],
      ['Protection buyer must hold the bonds personally and deliver them to the seller — cash settlement does not exist', 'Physical settlement does require deliverable bonds, but the ISDA credit event auction process means most modern CDS trades settle in cash on the auction price.'],
    ],
    'Single-name CDS pays par minus recovery on a credit event. Recovery is determined by the ISDA auction mechanism — which is why a 40% recovery assumption is a working baseline but the actual number can move materially around the auction.'),

  q(4380111, 'Career Skills', CHAPTER, 'CDX vs iTraxx',
    'A macro PM wants short broad-IG credit exposure. What is the standard liquid index for North American IG and how does it differ from iTraxx Main?',
    'CDX.NA.IG is the standard 125-name North American IG index; iTraxx Main is the analogous 125-name European IG index — both roll every six months but they reference different jurisdictions and trade in different currencies',
    [
      ['CDX is the high-yield index and iTraxx is the IG index — the geographic split is not the main difference', 'CDX has multiple sub-indices (IG, HY, EM, etc.). The geographic split — North America vs Europe — is the primary distinction between the CDX and iTraxx families.'],
      ['CDX rolls quarterly while iTraxx is a static reference set fixed at inception', 'Both index families roll semi-annually, in March and September. Neither is a static reference set.'],
      ['CDX is the cleared index and iTraxx is bilateral only, with no central clearing', 'Both CDX and iTraxx Main are widely cleared through CDS clearinghouses. Clearing is not what distinguishes them.'],
    ],
    'CDX.NA.IG and iTraxx Main are the two flagship investment-grade CDS indices for North America and Europe respectively. They roll every six months and provide cheap liquid exposure to broad-IG credit risk in their region.'),

  q(4380112, 'Career Skills', CHAPTER, 'Interest rate swap basics',
    'A treasurer wants to convert floating-rate debt into a fixed liability. The desk offers a vanilla 5-year interest rate swap. What does the treasurer do?',
    'The treasurer pays fixed and receives floating on the swap, which combined with the floating debt liability creates a synthetic fixed-rate obligation',
    [
      ['The treasurer receives fixed and pays floating, locking in the floating cost at today\'s fixed level', 'Receiving fixed plus a floating liability leaves the treasurer exposed to floating on both legs — the wrong direction.'],
      ['The treasurer enters a basis swap to convert one floating index to another, which is the standard hedge for variable-rate debt', 'A basis swap exchanges two floating indices. The treasurer needs a fixed-vs-floating swap to convert floating to fixed.'],
      ['The treasurer buys a swaption that gives the right to enter a swap if rates rise, which hedges the floating exposure', 'A swaption is optional and one-sided. Converting floating to fixed requires committing to the swap, not buying an option on one.'],
    ],
    'Pay-fixed/receive-floating in the swap, combined with floating-rate debt, leaves the treasurer paying fixed net. This is the textbook synthetic fixed-rate liability and the most common corporate use of vanilla IRS.'),

  q(4380113, 'Career Skills', CHAPTER, 'FRA vs swap',
    'A client wants to lock in the 3-month rate that will set 6 months from today, on a single $50M notional. Vanilla swap or FRA?',
    'FRA — it is a single forward-starting agreement on one rate-setting period, which exactly matches the client\'s need; a swap would force multiple unnecessary periodic settlements',
    [
      ['Swap — only an interest rate swap can lock a future rate, since FRAs only reference historical rates', 'FRAs reference a specified future rate-fixing date. They are forward-starting instruments and are precisely how single forward rates are locked.'],
      ['Either — a swap and a FRA have identical cash flow profiles, so the choice is purely cosmetic', 'A multi-period swap has many resets and exchanges. A FRA has exactly one. For a single rate-setting period the FRA is the clean match.'],
      ['Swap — FRAs are no longer used because LIBOR was discontinued, so swaps are now the only product available', 'FRAs continue to trade against SOFR and other risk-free-rate benchmarks. The LIBOR transition did not eliminate the product class.'],
    ],
    'A FRA is the cleanest instrument for locking a single future rate-setting period. A swap is the right tool when there are many resets over a multi-year horizon; using a swap for a single period adds unnecessary structure.'),

  q(4380114, 'Career Skills', CHAPTER, 'Swaption payer vs receiver',
    'A pension fund worries that rates will spike before it issues debt in 12 months. Which swaption hedges that worry, and what does owning it mean?',
    'Buy a payer swaption — the right to enter a pay-fixed swap at a pre-agreed strike; if rates spike, the swaption is in the money and offsets the higher cost of issuing debt',
    [
      ['Buy a receiver swaption — the right to enter a receive-fixed swap, because the fund wants to lock in higher future rates received', 'A receiver swaption profits when rates fall. The fund is worried about a *rise* in rates increasing its issuance cost, so it needs the payer side, not the receiver side.'],
      ['Sell a payer swaption to collect premium against the rate-spike scenario, since premium offsets the higher cost', 'Selling a payer swaption obligates the fund to receive fixed if rates rise — exactly the wrong direction. Premium income does not hedge directional risk it concentrates.'],
      ['Buy an interest rate cap on the floating leg of the future debt, because caps and swaptions are interchangeable', 'A cap is a strip of caplets on each future floating reset; a swaption is one-off optionality on entering a swap. They have related but distinct payoffs, and the cap does not necessarily match a one-time issuance event.'],
    ],
    'A payer swaption is the right to pay fixed in a swap. It hedges a future issuer who fears higher rates because the swap leg appreciates as rates rise, offsetting the higher fixed coupon the issuer would have to pay on the bond.'),

  q(4380115, 'Career Skills', CHAPTER, 'UST cash vs futures basis',
    'A Treasury trader notes that the cheapest-to-deliver into the 10-year futures contract is rich on the cash curve. What does that imply for the cash-futures basis?',
    'A rich CTD pulls the futures price up (since the seller will deliver the CTD), so the basis (cash minus futures-times-conversion-factor) tightens — the trade is to short the basis if you believe it will revert',
    [
      ['The CTD richness has no effect on futures price because the contract settles on a fixed reference, not on deliverable bonds', '10-year Treasury futures explicitly settle through physical delivery of an eligible bond from the deliverable basket. The CTD anchors the futures price.'],
      ['A rich CTD pushes the futures price down because the short side is at a disadvantage and demands a lower price', 'A rich CTD raises the price the short must pay to source the bond they will deliver — that pulls the futures price higher, not lower.'],
      ['Basis trades are pure arbitrage and risk-free, so directional views are irrelevant once the basis exists', 'Basis trades carry repo, financing, and switch-option risk and have famously imploded — most prominently during March 2020. They are not risk-free even in normal times.'],
    ],
    'UST futures price tracks the CTD bond divided by its conversion factor. Trading the basis is one of the desk\'s core relative-value trades, but it is exposed to repo specials, delivery options, and funding stress — not a free lunch.'),

  q(4380116, 'Career Skills', CHAPTER, 'STRIPS and duration',
    'A pension fund wants the longest possible duration per dollar of UST exposure to immunize a long-dated liability. Which UST instrument fits best?',
    'A long-dated principal STRIP — a zero-coupon Treasury whose duration approximately equals its maturity, the longest duration per dollar available in the UST market',
    [
      ['A 30-year on-the-run coupon Treasury, since its long maturity gives the longest duration available', 'A coupon bond has duration shorter than its maturity because coupon payments shorten effective average time-to-cash. A 30-year zero-coupon STRIP has duration of nearly 30 years; the coupon bond is closer to 17-19.'],
      ['A TIPS bond of any maturity, since inflation indexation lengthens effective duration', 'TIPS have real-rate duration, which is meaningful but not longer than the maturity. Inflation indexation does not magically increase nominal duration beyond the bond\'s maturity.'],
      ['A 10-year T-Note rolled annually, since rolling preserves duration indefinitely', 'Rolling a 10-year keeps duration roughly constant near 10 years. It does not produce a 25-30 year duration; the underlying instrument\'s maturity caps duration.'],
    ],
    'Zero-coupon STRIPS deliver the maximum duration per dollar because all cash comes at the back end. Long-dated pension liabilities are often immunized with long-dated principal STRIPS for exactly this reason.'),

  // -------------------------------------------------------------------------
  // FX (4380117–4380119)
  // -------------------------------------------------------------------------
  q(4380117, 'Career Skills', CHAPTER, 'FX spot vs forward',
    'A US corporate has a EUR receivable due in 6 months and wants to lock in today the USD amount it will receive. Which FX product fits?',
    'A 6-month FX forward to sell EUR and buy USD, with the forward rate determined by spot plus the rate differential between EUR and USD',
    [
      ['An FX spot trade today, since spot is the most liquid market and gives the best price', 'A spot trade settles T+2 — it converts EUR the corporate does not yet have. The risk is that EUR weakens between today and the receivable date.'],
      ['A EUR/USD swap to exchange the receivable for a USD-denominated bond', 'Currency swaps are multi-period bilateral exchanges of cash flows in two currencies. They are overkill for hedging a single receivable; a forward is the clean match.'],
      ['An NDF on EUR/USD since the receivable is in a freely convertible currency that requires NDF mechanics', 'NDFs are used for non-deliverable currencies (BRL, INR, KRW, etc.). EUR is freely deliverable, so a deliverable forward is the standard product.'],
    ],
    'An FX forward locks in the conversion rate for a future receivable. The forward rate prices off spot and the interest rate differential — the corporate has now eliminated FX risk on the receivable.'),

  q(4380118, 'Career Skills', CHAPTER, 'NDF mechanics',
    'A US asset manager wants synthetic short exposure to the Brazilian real but does not want to settle in BRL. The desk offers a USD/BRL NDF. How does the trade settle?',
    'On the fixing date the NDF cash-settles in USD only — the difference between the agreed forward rate and the official fixing rate is paid in USD, with no BRL ever exchanged',
    [
      ['The trade settles physically in BRL on the fixing date, like a deliverable forward', 'The whole point of a non-deliverable forward is that no BRL changes hands. Settlement is in USD only.'],
      ['The trade settles in BRL but uses a USD-denominated notional, requiring the client to maintain a BRL account', 'No BRL account is needed — NDFs are specifically designed for situations where the client cannot or does not want to operate in the local currency.'],
      ['The trade settles in whichever currency the official fixing happens to clear in, which varies by central bank rules', 'Settlement currency is fixed at trade date — typically USD — and is part of the NDF contract terms.'],
    ],
    'NDFs are the standard tool for EM currencies where capital controls or limited convertibility make deliverable forwards impractical. The trade prices off the local forward curve but cash-settles in USD.'),

  q(4380119, 'Career Skills', CHAPTER, 'FX swap as funding tool',
    'A US bank needs short-term EUR funding for one week. It owns USD and wants the funding off the secured-cash desk. How does an FX swap solve this cleanly?',
    'It sells USD for EUR spot and simultaneously agrees to buy USD back for EUR forward one week out — economically this is a EUR-collateralized USD loan, or equivalently, USD-collateralized EUR borrowing',
    [
      ['It buys an FX option that delivers EUR if the rate moves favourably, which gives optional access to funding', 'An option is not funding — it pays off only in one direction and costs premium. Funding needs are met by deterministic swaps, not options.'],
      ['It enters a one-week FX forward to sell USD and buy EUR forward, with no spot leg', 'A forward without a spot leg is a directional FX position, not a funding trade. The simultaneous spot-and-forward exchange is what makes the FX swap a funding instrument.'],
      ['It executes a series of daily spot trades rolled each day, which replicates funding with greater flexibility', 'Daily rolling generates massive transaction cost and operational risk versus a single FX swap that locks both legs at trade date.'],
    ],
    'An FX swap is the workhorse tool for short-term cross-currency funding. The spot leg moves cash today, the forward leg unwinds it later, and the implied interest rate is the difference between the two legs — measured by cross-currency basis.'),

  // -------------------------------------------------------------------------
  // COMMODITIES (4380120–4380121)
  // -------------------------------------------------------------------------
  q(4380120, 'Career Skills', CHAPTER, 'Crude calendar spread',
    'A WTI calendar spread trader sees the December 2026 contract trading $1.50 below the December 2027 contract. The market is in what state, and what does it imply?',
    'Contango — the longer-dated contract is more expensive, which broadly implies adequate near-term supply and a positive cost of carry for holding crude through to next December',
    [
      ['Backwardation — the longer-dated contract being more expensive is the textbook definition of backwardation', 'Backwardation is the opposite: front contracts higher than back. Contango is when the curve rises with time, as in the question.'],
      ['Neither — calendar spreads measure storage cost only and have no implication for spot supply', 'Calendar spreads reflect storage cost *and* the supply-demand balance. A steep contango usually signals near-term oversupply; backwardation signals near-term tightness.'],
      ['Contango — but it always implies imminent supply shortage because the market is pricing higher prices in the future', 'Contango means higher *forward* prices, but it typically signals near-term *over*supply, not shortage. Inverting that intuition is one of the most common commodities-rookie errors.'],
    ],
    'Contango means the forward curve slopes up; backwardation means it slopes down. In physical commodities like crude, the shape encodes inventory and supply tension — contango usually equals well-supplied near-term, backwardation usually equals tight near-term.'),

  q(4380121, 'Career Skills', CHAPTER, 'Physical vs paper commodities',
    'A long-only commodities ETF and a refinery both have exposure to WTI crude, but their risks differ fundamentally. Why?',
    'The refinery has physical exposure — actual barrels move through storage and pipelines, with logistics, quality, and delivery-location risk; the ETF holds paper futures and primarily has roll-yield and curve-shape risk',
    [
      ['Both have identical exposure because WTI futures are settled by physical delivery, so paper and physical are economically the same', 'Futures only deliver if held to expiry — and almost no ETFs do that. Paper and physical exposure differ in roll mechanics, storage cost, and operational risk despite tracking the same underlying.'],
      ['The ETF has more risk because it cannot hedge with futures, while the refinery can use forwards to neutralize price', 'ETFs use futures continuously — that is how they exist. Refineries use both forwards and physical hedges. Neither has structurally less hedging access; the difference is in the kind of exposure.'],
      ['Physical exposure is purely operational with no market risk, since refineries sell at market regardless of where they bought', 'Refineries have very real market risk on crack spreads and on the inventory they hold between purchase and sale. Operational risk is on top of, not instead of, market risk.'],
    ],
    'Paper commodity exposure tracks price and curve through futures and ETFs; physical exposure also carries storage, logistics, quality, and delivery-location risk. Many ETFs that promised "crude exposure" disappointed investors who did not realize roll yield in steep contango can dominate spot moves.'),

  // -------------------------------------------------------------------------
  // GREEKS AND HEDGING (4380122–4380127)
  // -------------------------------------------------------------------------
  q(4380122, 'Career Skills', CHAPTER, 'Delta as hedge ratio',
    'An options market maker is long a call with delta 0.40 on 100 contracts (100 shares per contract). What is the first-order share hedge?',
    'Short 4,000 shares — delta of 0.40 times 100 contracts times 100 shares per contract equals the equivalent linear exposure, which is what the share hedge offsets',
    [
      ['Short 10,000 shares — one contract represents 100 shares, and 100 contracts equals 10,000 shares, regardless of delta', '10,000 shares is full contract notional, not delta-weighted exposure. A 40-delta option does not move one-for-one with the share — only 40% as much.'],
      ['Short 400 shares — delta times number of contracts', 'Each contract represents 100 shares, so the multiplier of 100 must enter the calculation. 0.40 × 100 × 100 = 4,000 shares, not 400.'],
      ['Long 4,000 shares — delta hedging means matching the direction of the option position with stock', 'Long calls have positive delta, so hedging that exposure requires *shorting* the stock, not buying it. The hedge offsets the option\'s linear exposure, not duplicates it.'],
    ],
    'Delta hedging is share-equivalent: delta times contracts times contract multiplier gives the linear share exposure. It is first-order — fine for small moves but it leaves gamma, vega, and theta unhedged.'),

  q(4380123, 'Career Skills', CHAPTER, 'Gamma curvature',
    'A trader is short an at-the-money straddle and is currently delta-hedged. The stock makes a sharp move in either direction. What happens to the P&L from gamma alone?',
    'The trader loses money — short gamma means the realized P&L from movement is negative, because the trader\'s delta hedge always lags the option\'s new delta after the move',
    [
      ['The trader makes money — short positions always benefit from movement because they collected premium up front', 'Premium is the theta the trader earns over time, not protection against movement. Short gamma loses on movement; it gains only if the underlying sits still.'],
      ['Gamma P&L is zero because the trader is delta-hedged at all times', 'Being delta-hedged at a point in time does not eliminate gamma — gamma is the *change* in delta. A sharp move means the hedge becomes stale, and the cost of rebalancing is the gamma loss.'],
      ['Gamma P&L is positive in one direction and negative in the other, depending on which way the stock moved', 'Gamma is symmetric — short gamma loses on movement in *either* direction. The square-loss intuition is exactly the point: vol times gamma drives the realized P&L, regardless of sign.'],
    ],
    'Gamma is the curvature of the option value in the underlying. Long gamma profits from realized movement; short gamma profits from stillness and collects theta as compensation for the asymmetric risk of large moves.'),

  q(4380124, 'Career Skills', CHAPTER, 'Theta and vega sign for long options',
    'A client holds a long out-of-the-money call. With all other inputs held constant, what happens to the option value if (a) one day passes, and (b) implied vol rises by one point?',
    '(a) Option value falls — long options have negative theta (time decay); (b) option value rises — long options have positive vega (higher IV means higher option price)',
    [
      ['(a) Option value rises because time gives the option more chance to come into the money; (b) option value falls because higher vol means more risk for the holder', 'Long options decay with time — that is the textbook negative theta. Higher IV increases the *price* of optionality, so long vega is positive, not negative.'],
      ['(a) Option value is unchanged because time passing does not affect OTM options until very close to expiry; (b) option value rises by exactly one point per vol point', 'OTM options decay throughout their life, not only at the end — accelerating in the final weeks but present throughout. And vega is rarely exactly one — it depends on moneyness, maturity, and the volatility level.'],
      ['(a) Option value falls; (b) option value falls because higher vol implies more uncertainty about the strike being reached', 'Higher vol increases option value because the option holder gets the upside of large moves and is protected from the downside (premium capped at zero). Uncertainty raises option prices, not lowers them.'],
    ],
    'Long options: negative theta, positive vega, positive gamma. The long holder pays time decay in exchange for the convexity benefit of being long optionality. The shorts collect theta and bear gamma.'),

  q(4380125, 'Career Skills', CHAPTER, 'Delta-neutral vs market-neutral',
    'A junior trader says her book is "delta-neutral, so it is market-neutral and indifferent to the index level." What is wrong with that conclusion?',
    'Delta-neutral only zeroes first-order exposure to the underlying at the current spot — gamma, vega, and cross-Greeks remain, so a meaningful market move or vol shift can produce significant P&L even from a delta-neutral book',
    [
      ['Nothing is wrong — delta-neutral and market-neutral are synonyms in standard options vocabulary', 'They are not synonyms. Delta-neutral is a single-Greek statement; market-neutral implies neutrality to a range of moves and is much stronger.'],
      ['Delta-neutral means the book has no risk at all, so the statement is over-cautious but technically correct', 'Delta-neutral books frequently lose or make significant money through gamma, vega, theta, and second-order effects. A book with no risk is the empty book.'],
      ['The error is purely terminological — desk slang uses the two terms differently, but the economic content is identical', 'The economic content is genuinely different. A delta-neutral short-gamma book is exposed to large moves; a delta-neutral long-gamma book benefits from them. "Market-neutral" requires neutralizing both delta and gamma, at minimum.'],
    ],
    'Delta-neutral kills first-order directional exposure at one point on the underlying. A move of any meaningful size re-introduces directional P&L through gamma, and a vol shift triggers vega P&L. Market-neutral is a higher bar that requires neutralizing several Greeks together.'),

  q(4380126, 'Career Skills', CHAPTER, 'Gamma-neutral hedge motivation',
    'A market maker who is short an exotic option has hedged delta with shares. Why might the desk also want to make the book gamma-neutral by trading vanilla listed options?',
    'Gamma-neutralizing reduces the cost and frequency of delta re-hedging — if a sharp move occurs, a gamma-neutral book\'s delta does not change much, so the trader is not forced to chase the market with large rebalancing trades',
    [
      ['Gamma-neutral hedging eliminates vega risk, which is the largest exposure on an exotic book', 'Gamma and vega are different Greeks. A gamma-neutral book can still be heavily vega-exposed; vega neutrality requires hedging with options of matching vega, which is not the same trade.'],
      ['Gamma-neutralizing makes the book delta-stable forever, eliminating the need for any further hedging', 'Gamma changes with moves (that is what speed/third-order measures), and theta and vega still evolve. Gamma-neutrality is a snapshot, not a permanent state.'],
      ['Gamma-neutralizing reduces the regulatory capital charge under SA-CCR by zeroing the convexity adjustment', 'SA-CCR has its own add-on formulas; they are not zeroed by gamma hedging. The motivation for gamma hedging is operational and economic, not a capital-charge mechanic.'],
    ],
    'Gamma is the sensitivity of delta to spot. A short-gamma book has to chase the market on rebalancing, and the cost compounds with realized vol. Hedging gamma with vanilla options stabilizes the delta and lets the trader rebalance less aggressively.'),

  q(4380127, 'Career Skills', CHAPTER, 'Vega-neutral construction',
    'A volatility book is long vega in the 3-month bucket and short vega in the 1-year bucket. Is the book vega-neutral?',
    'No — the book has zero net vega only if the long and short positions match in size and (typically) in maturity bucket; offsetting vega across different maturities leaves significant vega term-structure risk',
    [
      ['Yes — long vega in one tenor and short vega in another cancel by definition because vega is one number', 'Vega is a single number per option, but a book\'s vega exposure has a term structure. A parallel vol move would zero out, but term-structure twists (front vs back vol diverging) produce real P&L.'],
      ['Yes — provided the dollar vegas match, the book is vega-neutral regardless of tenor', 'Equal dollar vega across tenors creates a vega term-structure trade, not a vega-neutral book. The book is exposed to relative moves in front vs back vol — a common source of P&L variance.'],
      ['No — vega-neutrality is impossible for any book holding more than one option', 'Vega-neutrality is a routine target on a vol book, achieved by matching vega bucket by bucket. The claim that it is impossible is too strong.'],
    ],
    'Vega is typically managed by maturity bucket because front-end and long-end vol move differently. A book that looks vega-flat on aggregate can still carry significant vega term-structure exposure — sometimes called vega skew or vega term risk.'),

  // -------------------------------------------------------------------------
  // IMPLIED VS REALIZED VOL AND SKEW (4380128–4380129)
  // -------------------------------------------------------------------------
  q(4380128, 'Career Skills', CHAPTER, 'IV vs RV and the variance risk premium',
    'A long-running observation in index options is that implied vol systematically exceeds subsequent realized vol. What is the standard explanation?',
    'The variance risk premium — investors are net buyers of index protection for hedging, so option sellers demand a premium over fair vol; on average, implied prints higher than realized because the seller is compensated for taking the vol risk',
    [
      ['Implied vol is computed wrong — most pricing models systematically overstate vol because they ignore mean reversion', 'Models do account for mean reversion in many cases. The IV-RV gap is too persistent and too large to be a pricing-model bug; it is an economic premium.'],
      ['Realized vol is always biased low because options expire worthless when nothing happens, so the sample is conditional', 'Realized vol is calculated from observed price returns, not from option outcomes. The sample is unconditional, not selection-biased on option expiration.'],
      ['The gap reverses during quiet periods, so on average implied and realized are equal over a full cycle', 'The variance risk premium is empirically positive on average across cycles in major index markets, not zero. Periodic reversals occur (e.g., post-2008, 2020) but the long-run average is positive.'],
    ],
    'Implied vol tends to print higher than realized vol because the dealer community is structurally short of upside vol-of-vol exposure to client hedging flows. The persistent gap is the variance risk premium and is a core feature of index option markets.'),

  q(4380129, 'Career Skills', CHAPTER, 'IV skew shape reading',
    'An S&P 500 vol smirk shows implied vol much higher on low strikes than on high strikes. What is the market saying?',
    'Demand for downside protection (puts) is high relative to upside calls, which pushes up implied vol on low strikes — this is the classic equity-index skew driven by hedging demand, not a statement about implied probabilities being symmetric',
    [
      ['The market believes large up moves are equally likely as large down moves, and the asymmetric skew is purely a pricing artefact', 'A pricing artefact would not persist for decades across rolls and venues. The equity-index skew encodes real demand asymmetry from put buyers, and risk-neutral probabilities are explicitly asymmetric.'],
      ['The market is signalling that low-strike puts are cheap and represent a buy', 'High implied vol on low strikes means low-strike puts are *expensive*, not cheap, in vol terms. The skew is precisely what makes put-buying costly.'],
      ['The shape implies the market is in backwardation', 'Backwardation is a term-structure concept (front vol higher than back vol), not a strike-structure concept. Skew describes shape across strikes, not across tenors.'],
    ],
    'Equity-index implied vol is typically skewed — lower strikes carry higher IV because investors crowd into put hedges and dealers charge for warehousing the resulting short-gamma, short-vega exposure. The skew is information about flows, not just probabilities.'),

  // -------------------------------------------------------------------------
  // VaR AND TAIL RISK (4380130–4380133)
  // -------------------------------------------------------------------------
  q(4380130, 'Career Skills', CHAPTER, 'Historical VaR mechanics',
    'A risk team computes 1-day 99% historical VaR using the prior 250 daily P&L observations. What is the number actually reporting?',
    'The loss level that was exceeded on only 2-3 days out of the 250-day sample (roughly the 99th percentile worst day), assuming the future distribution looks like the past 250 days',
    [
      ['The maximum possible loss the portfolio could ever take, computed from worst-case scenarios across all asset classes', 'VaR is explicitly *not* a maximum loss — it is a percentile of a distribution. The 99% VaR is exceeded on 1% of days by definition.'],
      ['The average loss on losing days during the prior 250-day window', 'Average loss on losing days is not a VaR concept — VaR is a percentile, not a conditional mean. (The conditional mean beyond VaR is Expected Shortfall.)'],
      ['The standard deviation of daily P&L, scaled to a 99% confidence interval using the normal distribution', 'That description is parametric VaR — a different VaR methodology. Historical VaR is non-parametric and uses ranked P&L observations directly, not a fitted distribution.'],
    ],
    'Historical VaR ranks the realized P&L observations and reads off the chosen percentile. It is non-parametric and intuitive, but its weakness is that it can only see scenarios that have actually appeared in the look-back window.'),

  q(4380131, 'Career Skills', CHAPTER, 'What VaR misses',
    'A senior risk officer says, "VaR is necessary but never sufficient." What is the strongest specific reason VaR is not enough?',
    'VaR says nothing about the size of losses beyond the chosen percentile — a portfolio with a 99% VaR of $10M could lose $11M or $500M on a 1% day, and VaR is silent on which; tail risk and regime shifts are not in the number',
    [
      ['VaR is wrong because financial returns are normally distributed, and the normal distribution underestimates extreme moves', 'VaR can be computed historically or via Monte Carlo, which do not assume normality. The fundamental gap is that VaR is a percentile — it cannot tell you what happens beyond it, regardless of distributional assumption.'],
      ['VaR ignores P&L observations and is calibrated only on volatility, so it cannot capture asymmetric tail behaviour', 'Historical VaR uses raw P&L observations directly. The limitation is conceptual (percentile, not tail measure), not operational.'],
      ['VaR underestimates risk because it always uses a one-day horizon, ignoring multi-day stress events', 'VaR can be (and is) computed at various horizons — 1-day, 10-day, etc. Horizon is a choice, not a structural limitation. The deeper issue is what happens past the percentile.'],
    ],
    'VaR is a percentile, not a tail expectation. A bank can be within VaR every day and still have catastrophic exposure to a 1-in-200-day event. Combining VaR with Expected Shortfall and stress testing is the standard remedy.'),

  q(4380132, 'Career Skills', CHAPTER, 'Expected Shortfall and Basel III',
    'Basel III moved market-risk capital from VaR to Expected Shortfall (ES). What is the conceptual upgrade?',
    'Expected Shortfall is the average loss *conditional on* breaching the VaR threshold, so it accounts for the size of tail losses rather than just the cutoff — making it sensitive to tail shape in a way VaR is not',
    [
      ['ES uses a 99.9% confidence level instead of 99%, so it captures more extreme tail events by definition', 'Basel ES is typically at 97.5% — chosen because it produces capital roughly comparable to 99% VaR while being a tail-aware measure. The upgrade is not in the percentile but in the measure type.'],
      ['ES is computed using Monte Carlo, while VaR was historical, so ES adds forward-looking scenarios', 'Both VaR and ES can be computed historically, parametrically, or via Monte Carlo. The methodology is independent of which measure you choose.'],
      ['ES eliminates the need for stress testing because it already incorporates worst-case scenarios', 'Stress testing remains a separate Basel requirement on top of ES. ES averages past tail observations; stress tests bring in scenarios that have not yet occurred.'],
    ],
    'Expected Shortfall (CVaR, ES) is the conditional mean loss beyond VaR. It satisfies coherent risk measure properties (subadditivity) that VaR does not, and it forces capital to scale with tail severity — which is why Basel III adopted it for the trading book.'),

  q(4380133, 'Career Skills', CHAPTER, 'Reverse stress test',
    'A bank already runs historical stress scenarios (2008 GFC, 2020 COVID shock, 1987 Black Monday, 2022 UK gilt crisis). What does a *reverse* stress test add?',
    'It starts from a defined failure outcome (e.g., the bank breaches its capital ratio or runs out of liquidity) and works backward to identify which scenario combinations would cause it — surfacing vulnerabilities that historical scenarios may miss',
    [
      ['It runs the historical scenarios in reverse chronological order to capture path dependence', 'Reverse stress is not about the time order of a scenario. It is about reversing the logic — fix the outcome, search for the cause.'],
      ['It applies a reciprocal of each historical shock (e.g., rates falling 200bps becomes rates rising 200bps) to test symmetry', 'That would just be another forward stress test in the opposite direction. Reverse stress reverses the question itself: what scenario kills us?'],
      ['It models scenarios in which clients reverse their positions and force the bank to unwind, generating fire-sale dynamics', 'Fire-sale dynamics can appear in any stress scenario. Reverse stress is defined by working backward from a failure outcome, not by a particular market mechanic.'],
    ],
    'Reverse stress tests ask "what would it take to break us?" — fixing the failure outcome and reverse-engineering the scenario. They are particularly valuable because they reveal vulnerabilities that historical scenarios never produced.'),

  // -------------------------------------------------------------------------
  // PORTFOLIO GREEKS AND PRICING MODELS (4380134–4380137)
  // -------------------------------------------------------------------------
  q(4380134, 'Career Skills', CHAPTER, 'Vanna and volga as cross-Greeks',
    'On an FX options book, the risk system reports significant vanna and volga in addition to standard Greeks. What do these cross-Greeks represent?',
    'Vanna is the sensitivity of delta to vol (or equivalently, vega to spot); volga is the sensitivity of vega to vol — together they capture how the smile and skew affect hedging that pure delta-vega-gamma misses',
    [
      ['Vanna and volga are aliases for gamma and theta in FX-specific notation, so the system is just re-labelling standard Greeks', 'Vanna and volga are genuinely different second-order Greeks. They are not gamma or theta in disguise; they are derivatives along the vol axis, not the spot or time axis.'],
      ['Vanna is the sensitivity of the option value to changes in the dividend yield, and volga is its second derivative in time', 'Vanna and volga are vol-related cross-Greeks. They do not involve dividend yield (which is captured by phi/psi in equity options) or pure time decay (which is theta).'],
      ['Vanna and volga are model-specific outputs of Heston only, with no meaning under Black-Scholes', 'Vanna and volga are model-agnostic mathematical derivatives. Their values differ across models, but they are well-defined under Black-Scholes too.'],
    ],
    'Vanna (d-delta/d-vol) and volga (d-vega/d-vol) are the FX-vol-trader\'s second-order Greeks of choice because they capture how skew and smile interact with spot and vol moves. A book that is vega-flat on aggregate can be massively exposed via these cross-Greeks.'),

  q(4380135, 'Career Skills', CHAPTER, 'Black-Scholes assumption limits',
    'A junior quant asks where Black-Scholes breaks down in practice. Which assumption is the most consequential failure in real equity options markets?',
    'Constant volatility — real markets exhibit smile, skew, and term structure; assuming a single sigma misprices wings and produces hedge ratios that are wrong precisely when they matter (large moves)',
    [
      ['Continuous trading — markets close overnight, which means delta hedging cannot happen at all times', 'Overnight gaps are a real issue but are well-managed in practice and are not the dominant failure of BS. The constant-vol assumption produces structural mispricing that overnight modelling cannot fix.'],
      ['Lognormal returns — equity returns being non-lognormal is true but does not affect option pricing because BS uses risk-neutral probabilities anyway', 'Risk-neutral pricing does not bypass the distributional assumption — the lognormal hypothesis under risk-neutral measure is still what BS uses, and fat tails violate it. But the constant-vol failure dominates in practice.'],
      ['Risk-free rate is constant — interest rate variability has the largest pricing impact, particularly for long-dated options', 'Rate variability matters for very long-dated options, but for most equity options under one year, the constant-vol assumption is by far the dominant failure that traders adjust for daily via the smile.'],
    ],
    'Black-Scholes\'s constant-vol assumption is the failure traders manage every day. Local vol models (Dupire) calibrate to the full smile; stochastic vol models (Heston, SABR) let vol itself diffuse — each is a response to the empirical fact that vol is neither constant nor flat across strikes.'),

  q(4380136, 'Career Skills', CHAPTER, 'Bachelier vs Black for rates',
    'Why is the Bachelier (normal) model preferred over Black\'s lognormal model for many interest-rate options today, particularly in low- or negative-rate regimes?',
    'Bachelier assumes rates are normally distributed (can go negative), while Black\'s lognormal assumption forces rates to be positive — a constraint that breaks once rates approach or cross zero, as happened in EUR and JPY markets',
    [
      ['Bachelier is computationally faster than Black, so dealers use it for HFT rate options', 'The two models have similar computational cost. The reason to switch is the rate-distribution assumption, not speed.'],
      ['Bachelier prices options off forward rates rather than spot rates, which is more accurate for long-dated swaptions', 'Both models can be set up against forward rates — that is standard practice. The distinguishing feature is the distributional choice (normal vs lognormal), not the reference rate.'],
      ['Black\'s model has been deprecated by ISDA and is no longer permitted for rates options', 'ISDA has no such deprecation rule. Black-shift, Bachelier, and SABR all coexist; the choice depends on the rate environment and instrument.'],
    ],
    'When EUR rates went negative around 2014, Black\'s lognormal model produced infinite or undefined prices for negative strikes. Bachelier, which allows negative rates by construction, became the default for short-rate options — and remains so in low-rate environments.'),

  q(4380137, 'Career Skills', CHAPTER, 'Convexity is not always good',
    'A frequent claim is "convexity is always good for the holder." Which counter-example most cleanly refutes this?',
    'A short option position has negative convexity — the holder is short gamma and loses on movement, paid for by collecting theta; convexity is a property of the instrument, and it is bad for whoever is on the wrong side',
    [
      ['Callable bonds are always more convex than non-callable bonds, so callable is better for the holder', 'Callable bonds are *less* convex (or even negatively convex around the call price) than non-callable bonds, and the holder gives up convexity in exchange for higher coupon. This actually illustrates that convexity is genuinely valuable — when you do not have it.'],
      ['Convexity is always good, but only for fixed-income holders; in equity options convexity does not exist', 'Gamma is convexity in the underlying for options, and exists everywhere. The claim that convexity does not exist in equity options is incorrect.'],
      ['Convexity is good for the holder unless the holder also holds the underlying, in which case the two cancel', 'Holding the underlying alongside an option does not eliminate the option\'s convexity — that is the whole point of delta-hedged long-gamma positions, which still benefit from realized movement.'],
    ],
    'Convexity is intrinsically valuable but it is paid for. Whoever is long convexity (long options, long non-callable bonds, long gamma) pays through premium, theta or yield giveup; whoever is short convexity collects that compensation but bears the move risk. The "always good" claim ignores which side of the trade you are on.'),

  // -------------------------------------------------------------------------
  // CARRY, ROLL, REPO, RISK MEASURES (4380138–4380140)
  // -------------------------------------------------------------------------
  q(4380138, 'Career Skills', CHAPTER, 'Positive carry and roll-down',
    'A relative-value trader explains a "5s30s steepener" by saying it has positive carry and roll-down. On an upward-sloping (steep) curve, what does that mean for being long 5y and short 30y?',
    'Positive carry comes from earning the difference in coupon income minus financing on each leg; roll-down is the gain from each bond aging into a lower-yield section of the steep curve, with the 5y rolling down faster than the 30y',
    [
      ['Positive carry means the trade profits regardless of which way the curve moves, because of the long-short structure', 'Carry and roll are the static return (assuming nothing moves), not a directional view. The trade can still lose if the curve flattens enough to overcome the static gain.'],
      ['Roll-down is the gain from coupons being reinvested, and is the same on both legs because both bonds receive coupons', 'Roll-down is specifically the price appreciation from a bond ageing down a sloped curve. Coupon reinvestment is a different effect (yield-to-horizon math), and roll-down differs across the curve.'],
      ['On a steep curve, every long-rates position has positive carry — the term-structure alone guarantees it', 'Carry depends on coupon vs financing on each leg; on an inverted or very flat curve, carry can be negative on long positions. The claim that steepness alone guarantees positive carry is too strong.'],
    ],
    'Carry is what you earn just by holding the position with no rate changes. Roll is the price appreciation as a bond moves down a sloped curve. A steepener trade often combines positive carry on the front leg with relatively cheap shorting on the back leg — but it loses if the curve flattens enough.'),

  q(4380139, 'Career Skills', CHAPTER, 'Repo GC vs special',
    'A repo trader quotes general collateral (GC) at 5.30% and a specific 10-year Treasury "on special" at 5.05%. What is the trader saying?',
    'GC is the prevailing rate for borrowing cash against any acceptable Treasury collateral; the specific 10-year is "on special" because demand to *borrow that bond* is high, so its repo rate is lower — the holder collects a richer spread for lending it out',
    [
      ['Specials rate above GC because borrowers pay more for harder-to-find collateral, so 5.05% must be a typo', 'Specials trade *below* GC, not above. A bond on special has a richer-than-GC bid for the lender of the bond, which on the cash leg means a lower rate paid to the cash lender.'],
      ['GC and specials are unrelated — GC is for institutional repo and specials are for retail', 'GC and specials are both wholesale repo markets. The distinction is collateral type (any acceptable vs a specific issue), not retail vs institutional.'],
      ['The 5.05% means the 10-year is harder to borrow as cash and reflects funding stress in the cash market', 'The 5.05% is the *repo* rate on a specific bond; it reflects demand for the bond, not stress in cash funding. Cash funding stress would push GC up, not push a specific bond\'s repo rate down.'],
    ],
    'GC is the floor for funding against any Treasury. A bond going "on special" means its own repo rate drops below GC because shorts and arbitrageurs need to borrow that specific bond — making it lucrative for the holder to lend out. Specials behaviour is a key indicator in basis trades and squeezes.'),

  q(4380140, 'Career Skills', CHAPTER, 'DV01 vs CS01 on a credit position',
    'A credit trader holds $10M notional of a 5-year IG corporate bond. The risk system reports DV01 of $4,500 and CS01 of $4,400. What does the difference tell you, and which Greek do you hedge with what?',
    'DV01 captures sensitivity to a 1bp parallel shift in the underlying risk-free (Treasury) curve; CS01 captures sensitivity to a 1bp shift in the credit spread over Treasuries — you typically hedge DV01 with Treasuries or IRS, and CS01 with single-name CDS or CDX',
    [
      ['DV01 and CS01 are two names for the same risk; the small numerical difference is just rounding in the risk system', 'They measure structurally different risks (rate level vs spread). For a fixed-rate corporate, the numbers are similar because both Greeks involve the same coupon stream, but they are conceptually distinct and hedge with different instruments.'],
      ['DV01 measures total P&L per 1bp move; CS01 measures only the carry component, so CS01 should always be smaller', 'CS01 is a sensitivity to spread change, not a carry decomposition. Carry is a separate concept (running yield minus funding).'],
      ['DV01 is hedged with CDS and CS01 is hedged with Treasury futures, because each Greek isolates the opposite curve', 'It is the reverse. Rate exposure (DV01) is hedged with Treasuries/IRS; spread exposure (CS01) is hedged with CDS. The mapping is "hedge with the instrument that isolates the same risk factor."'],
    ],
    'Holding an IG corporate exposes you to two separable risks: the risk-free curve (DV01) and the spread over Treasuries (CS01). Modern credit desks decompose risk this way explicitly because each leg has its own hedge instrument and its own driver — combining them in one number loses too much information.'),
]

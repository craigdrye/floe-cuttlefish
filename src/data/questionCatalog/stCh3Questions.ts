import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// SALES & TRADING — CHAPTER 3: Client Flow and Trade Ideas
// ----------------------------------------------------------------------------
// 43 questions (IDs 4380200–4380242) covering the daily craft of a salesperson
// or sales-trader on a US sell-side desk: anatomy of a trade idea, client
// tiering and prioritisation, axes, color provision, the wall (Chinese walls,
// MNPI, Reg AC, Reg M), single-name long pitches, pair-trade construction,
// options structure pitches, capital introduction, soft dollars, block trade
// mechanics, IOIs, capital commitment, best execution, and earnings setups.
//
// Voice: bespoke per-distractor rationale. US regulatory context (FINRA, SEC,
// Reg M, Reg AC). Distractors are the real mistakes new salespeople make on a
// flow desk — confusing axes with IOIs, confusing soft dollars with directed
// brokerage, missing that public-side and private-side material moves
// separately under the wall, pitching a single-name long without a catalyst.
//
// Difficulty target: 13 at 3, 22 at 4, 8 at 5.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe S&T Ch3 canonical bank'

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

const CHAPTER = 'Client Flow and Trade Ideas'

export const ST_CH3_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Trade idea anatomy (4380200–4380204)
  4380200: 3, // Components of a trade idea
  4380201: 3, // Catalyst vs thesis
  4380202: 4, // Risk/reward framing
  4380203: 4, // Time horizon and the desk
  4380204: 4, // Kill criteria on a published idea

  // Client segmentation and prioritisation (4380205–4380209)
  4380205: 3, // Tier-1 vs tier-2 vs tier-3 client definition
  4380206: 4, // Allocation of axes by tier
  4380207: 5, // Vote-driven coverage economics
  4380208: 3, // Why the same idea is not blasted to every client
  4380209: 4, // Reverse inquiry handling across tiers

  // Axes and color (4380210–4380214)
  4380210: 3, // What an axe actually is
  4380211: 3, // Bid axe vs offer axe
  4380212: 4, // Reading the morning color note
  4380213: 5, // Selectively sharing axes without leaking flow
  4380214: 4, // Distinguishing axe from IOI

  // Compliance, Chinese walls, Reg M, Reg AC (4380215–4380221)
  4380215: 4, // Public side vs private side of the wall
  4380216: 4, // Wall-crossing procedure on a deal
  4380217: 3, // Reg AC analyst certification
  4380218: 4, // Reg M restricted period mechanics
  4380219: 5, // Reg M on a follow-on issuer
  4380220: 4, // MNPI on a corporate access call
  4380221: 5, // Information barrier breach — what to do

  // Single-name long pitch (4380222–4380224)
  4380222: 3, // Building the pitch structure
  4380223: 4, // Common single-name long pitch failure
  4380224: 4, // Picking the right client for a long pitch

  // Pair-trade pitch (4380225–4380227)
  4380225: 4, // Why a pair trade not an outright
  4380226: 4, // Sizing the legs of a pair
  4380227: 5, // Pair-trade decay and re-balancing

  // Options structure pitches (4380228–4380230)
  4380228: 4, // Risk reversal as a directional pitch
  4380229: 3, // Call spread vs outright call
  4380230: 5, // Collar around a concentrated position

  // Capital introduction (4380231–4380232)
  4380231: 3, // What cap intro does — and what it does not
  4380232: 3, // Why cap intro sits inside prime brokerage

  // Soft dollars (4380233–4380234)
  4380233: 4, // Definition of soft dollars under 28(e)
  4380234: 4, // Soft dollars vs directed brokerage

  // Block trades and capital commitment (4380235–4380238)
  4380235: 3, // Mechanics of a block trade
  4380236: 4, // Capital commitment vs agency
  4380237: 5, // Pricing a risk bid on a block
  4380238: 5, // Working the block after capital commitment

  // IOIs (4380239)
  4380239: 3, // Natural vs super IOI

  // Best execution (4380240)
  4380240: 4, // Best-ex obligation under FINRA 5310

  // Earnings setups (4380241–4380242)
  4380241: 4, // Pre-earnings flow read
  4380242: 4, // Post-earnings reaction pitch
}

export const stCh3Questions: Question[] = [
  // -------------------------------------------------------------------------
  // TRADE IDEA ANATOMY (4380200–4380204)
  // -------------------------------------------------------------------------
  q(4380200, 'Career Skills', CHAPTER, 'Components of a trade idea',
    'A junior salesperson is told to "send something out" on a name the desk likes. What are the minimum components a credible single-name trade idea sent to an institutional client should contain?',
    'A thesis, an identifiable catalyst with a timeframe, an entry level and target with a stop, position-sizing context, and the desk\'s relevant axe or color — so the PM can decide and execute without a second call',
    [
      ['A bullish or bearish view and a chart showing recent price action', 'A view and a chart is a tweet, not a trade idea. A PM cannot act on a directional opinion without a catalyst, a level, and a risk frame.'],
      ['A copy-paste of the morning research note plus the desk\'s phone number', 'Forwarding research is not a sales idea — the client already has the note. The desk\'s value-add is the catalyst, levels, and the axe context the analyst does not have.'],
      ['A target price and an implied total return, with the rest left to the PM to decide', 'A target without a thesis or a stop is not actionable. The PM needs to know what would break the idea before they will commit risk.'],
    ],
    'A trade idea that an institutional PM can act on names the thesis, the catalyst with timing, the entry/target/stop levels, the sizing context, and what the desk is doing in the name. Anything less is a comment, not an idea.'),

  q(4380201, 'Career Skills', CHAPTER, 'Catalyst vs thesis',
    'A salesperson pitches a long: "We think the stock is undervalued at 11x forward EPS versus a 14x sector multiple." A PM pushes back: "That has been true for two years." What is the structural weakness?',
    'The pitch has a thesis (mispriced multiple) but no catalyst — there is no identifiable near-term event or shift that forces the gap to close, so the trade has no clock',
    [
      ['The valuation comparison is wrong because forward EPS multiples are not comparable across sectors', 'Sector-relative multiples are a legitimate framing. The weakness is not the comparison method — it is that the pitch never says *why now*.'],
      ['The pitch should have used EV/EBITDA instead of P/E, which would have shown a stronger gap', 'Switching multiples does not add a catalyst. A different valuation lens may sharpen the thesis but does not give the PM a reason to put on risk this quarter.'],
      ['The PM is wrong to push back — multiple compression eventually reverses and patience is rewarded', 'Patience is not a strategy for a PM with monthly P&L reviews. A pitch without a catalyst is essentially asking the PM to underwrite optionality on mean reversion, which is not how flow desks earn their seat.'],
    ],
    'Thesis is the structural reason the trade should work; catalyst is the near-term event that forces the market to see it. A pitch with thesis but no catalyst is a research view, not a tradeable idea — and the desk will lose the call.'),

  q(4380202, 'Career Skills', CHAPTER, 'Risk/reward framing',
    'You are pitching a long at $48 with a $58 target and a $44 stop. A PM responds: "What is the asymmetry?" What is the right way to frame it?',
    'Approximately $10 of upside to target against $4 of downside to stop — roughly 2.5:1 reward-to-risk before sizing for probability, and the PM should weight by their own probability of reaching each level',
    [
      ['The target is 21% above spot, which represents strong upside — that is the asymmetry', 'Percentage upside is one number, not asymmetry. Asymmetry is the ratio of upside-to-target versus downside-to-stop, not the headline return.'],
      ['Because the stop is tight relative to the average daily range, the trade is by construction asymmetric in the client\'s favour', 'A tight stop relative to ATR makes the trade more likely to stop out — that is the opposite of asymmetry. Stop placement should reflect where the thesis is broken, not where price action is comfortable.'],
      ['The asymmetry comes from the catalyst — earnings — and not from the level framework', 'The catalyst affects the probability of each leg, but the *asymmetry* is the level math. Conflating probability with payoff is a common pitch mistake.'],
    ],
    'Reward-to-risk is the simple ratio of distance-to-target over distance-to-stop. The PM then weights by their own probability of each level being hit. Quoting only one side of the trade is not asymmetry — it is just the upside.'),

  q(4380203, 'Career Skills', CHAPTER, 'Time horizon and the desk',
    'A long-only client buys $30M of a small-cap name through your desk on a 12-month thesis. The trading desk has no axe and just hedges into the close. Why does the sales-trader still care about the client\'s holding horizon?',
    'Because horizon determines execution style — a 12-month hold tolerates VWAP-style accumulation over days, whereas a multi-day swing trade demands immediacy; mismatching horizon and execution destroys quality regardless of the thesis',
    [
      ['It does not really matter — once the trade is done the desk\'s job is over', 'The desk is judged on execution quality long after the print. A poorly executed accumulation in a small-cap will move price, hurt the client\'s entry, and the client will remember it on the next vote.'],
      ['Because longer horizons let the desk charge higher commission rates', 'Commission economics are negotiated independently of horizon. The relevant link is execution style — how patient the algo or working strategy should be.'],
      ['It matters only for the compliance trail, since longer-held positions require additional reporting', 'There is no horizon-based reporting threshold that flows back to execution style. The relevant connection is liquidity, market impact, and best-ex defensibility.'],
    ],
    'Holding horizon shapes execution: patient holds tolerate slow, low-impact accumulation; short-dated swing trades demand more aggressive fills. The sales-trader translates the client\'s horizon into an execution plan that protects entry price and best-ex defensibility.'),

  q(4380204, 'Career Skills', CHAPTER, 'Kill criteria on a published idea',
    'You published a long pitch on a US industrial at $52 last week with a target of $62. Today the company pre-announces weak orders and the stock opens at $48. What is the right next move from a desk-credibility standpoint?',
    'Send an update that explicitly addresses whether the thesis is broken given the pre-announcement, name the level or piece of evidence that would force you to close the idea, and tell clients what the desk is now doing in the name',
    [
      ['Stay silent until next month\'s update — the price action will speak for itself and clients have access to the same news', 'Silence after a thesis-threatening event is what gets a desk dropped. Clients trade based on the idea — owning the response, especially the bad one, is the move that holds the seat.'],
      ['Reiterate the long and explain that the pre-announcement is a buying opportunity at the new lower price', 'Reflexively averaging down without re-testing the thesis is the classic sell-side trap. The pre-announcement may have killed the catalyst the pitch was built on; reiterating without addressing that destroys credibility.'],
      ['Pull the pitch from the desk publication list and stop discussing the idea until price stabilises', 'Pulling without comment is worse than no pitch at all — clients who acted on it have no guidance and assume the desk is hiding. A clean kill statement is more defensible than disappearing.'],
    ],
    'Published ideas need explicit kill criteria and timely updates when those criteria are tested. Owning a bad print — naming what changed and what the desk is doing about it — is what separates a credible sales franchise from a noise generator.'),

  // -------------------------------------------------------------------------
  // CLIENT SEGMENTATION AND PRIORITISATION (4380205–4380209)
  // -------------------------------------------------------------------------
  q(4380205, 'Career Skills', CHAPTER, 'Tier-1 vs tier-2 vs tier-3 definition',
    'A new salesperson asks how tier-1, tier-2, and tier-3 clients are actually defined on a US cash equities desk. What is the cleanest operating answer?',
    'Tiering is driven primarily by realised wallet — commission and capital-commitment revenue paid to the firm — adjusted for strategic value (research vote, IPO appetite, flow type); tier-1 clients drive the largest share of revenue and get first call on color, axes, and capacity',
    [
      ['Tier-1 means the client has the largest AUM, tier-2 mid-size, tier-3 small — assets under management is the deciding line', 'AUM is a poor proxy. Large passive funds may pay almost no commission, while a smaller active fund can be a top-five wallet. Wallet, not AUM, drives tier.'],
      ['Tier-1 clients pay the highest commission rate per share; tier-2 and tier-3 pay progressively lower rates, which is how the firm prioritises them', 'Rates are negotiated separately; many top-tier clients pay lower rates but enormous notional. The driver is total dollars paid, not the rate.'],
      ['Tiers are set by compliance based on the strictness of the client\'s suitability profile, with tier-1 having the most flexibility to trade complex products', 'Suitability is a separate construct in client onboarding. Sales tiering is a commercial prioritisation tool, not a regulatory categorisation.'],
    ],
    'Client tiers are a commercial tool that rank clients by what they pay the firm — adjusted for strategic value. Tier-1 clients get first call on scarce inventory, axes, and capital commitment because their wallet underwrites the desk\'s seat.'),

  q(4380206, 'Career Skills', CHAPTER, 'Allocation of axes by tier',
    'The desk receives a sizable bid axe in a small-cap name from a portfolio trader. There is roughly 200k of capacity. How should the salesforce decide which clients to call first?',
    'Tier-1 clients with an existing or natural interest in the name get the first call — both because they pay for first call and because they are most likely to act quickly without leaking the flow; tier-2 and tier-3 are called only if tier-1 passes or in smaller size',
    [
      ['Blast the axe to every covered client simultaneously through a desk-wide email so everyone has an equal chance', 'A wide blast leaks the flow, pushes the stock against the axe, and devalues the very capacity the desk is trying to monetise. It also signals to tier-1 clients that they do not get preferred call.'],
      ['Call only the largest single-name holders of the stock by 13F position, regardless of their tier with the firm', 'A 13F position is one signal but not the driver of tier. A holder who does not pay the firm has not earned first call on scarce inventory.'],
      ['Save the axe for end-of-day so the desk has more time to plan and avoid moving the market intraday', 'Holding an axe until end-of-day risks the inventory going stale and the position re-pricing against the desk. Axes are time-sensitive — they get worked when the flow is fresh, not when the day is closing.'],
    ],
    'Scarce capacity goes to clients who pay for it and who can act on it quickly without moving the market against the desk. That is almost always tier-1 names with existing or plausible interest in the security.'),

  q(4380207, 'Career Skills', CHAPTER, 'Vote-driven coverage economics',
    'A research-heavy hedge fund pays low commission per share but completes the firm\'s annual broker vote with a #1 ranking in the relevant sector. Inside the bank, how does this client typically get treated commercially?',
    'They are tiered high because the broker vote drives research revenue allocation — votes flow through to the analyst\'s standing, which in turn shapes corporate access and capital-raise mandates; wallet is broader than commission per share',
    [
      ['They are de-prioritised because cash commission is what funds the desk, and votes do not pay the seat directly', 'Votes pay indirectly through the research division\'s revenue allocation and the firm\'s standing on the next ECM mandate. A salesforce that ignores votes underweights a key revenue channel.'],
      ['The vote ranking is irrelevant to coverage — only realised commissions matter on the equities P&L', 'Most US sell-sides explicitly include vote contribution in tier calculation, often as a separate axis. Ignoring it means the salesforce does not understand its own scorecard.'],
      ['They are upgraded only if they also pay capital-commitment fees, since votes alone are not monetisable', 'Vote-only clients are still valuable because votes can be converted into other revenue (corporate access, conferences, IPO allocation). The relationship has clear monetisable channels even without capital commitment.'],
    ],
    'Broker votes are how research revenue is allocated across the Street under post-MiFID-style payment frameworks. A client who votes #1 funds the analyst and the franchise — even if their per-share commission is modest. Tiering must reflect that, or the salesforce will lose the seat next year.'),

  q(4380208, 'Career Skills', CHAPTER, 'Why the same idea is not blasted to every client',
    'A salesperson asks why the desk does not just send every trade idea to every client at the same time. What is the cleanest commercial answer?',
    'Tier-1 clients pay for first look; if every idea is broadcast simultaneously they get no informational edge, the desk\'s perceived value collapses, and wallet migrates to firms that differentiate access',
    [
      ['Sending the same idea to everyone violates Reg FD because some recipients become tipped before others', 'Reg FD applies to issuers and their selective disclosure of material information to certain market participants, not to broker trade ideas. The constraint here is commercial differentiation, not Reg FD.'],
      ['Different clients require different ideas because of suitability rules — the same idea cannot be sent to every account type', 'Suitability is checked at the account level for solicitation, but a single equity idea can be relevant to many accounts. The reason to throttle is commercial, not regulatory.'],
      ['Because the desk does not have enough server capacity to email every client simultaneously', 'Infrastructure is not the constraint. The throttle is deliberate prioritisation, not technology.'],
    ],
    'Differentiated access is what tier-1 clients pay for. A flat broadcast eliminates the edge they bought and turns the salesforce into a content distributor. The trade-off between reach and edge is one of the most important commercial levers on a flow desk.'),

  q(4380209, 'Career Skills', CHAPTER, 'Reverse inquiry handling across tiers',
    'A tier-3 client calls in asking for a bid on $5M of an illiquid name. The desk has no axe and would need to put balance sheet at risk. What is the right way for the sales-trader to handle this?',
    'Quote at a level that reflects the real risk of warehousing illiquid inventory plus a margin appropriate for a tier-3 wallet — and be willing to pass entirely if the trade does not justify the capital, since tier-3 reverse inquiry does not earn preferential capital',
    [
      ['Quote tight to win the trade, since reverse inquiry is rare and any flow is good flow', 'Quoting tight on illiquid risk for a tier-3 wallet creates capital usage that the relationship does not justify. The desk will have funded a discount for a client who will not pay it back through future business.'],
      ['Refuse to quote and tell the client to call back when they have a more typical-size trade', 'A flat refusal damages the relationship even at tier-3 and signals the desk does not want their business at all. The right move is a real but appropriately wide quote, not a refusal.'],
      ['Pass the order at agency to another dealer who has axes in the name, splitting any commission', 'Routing client flow to another dealer without explicit permission is generally a breach of the agency relationship and can create best-ex and information-leakage problems. The desk must either quote or decline cleanly.'],
    ],
    'Reverse inquiry tests whether capital allocation matches the client\'s wallet. Tier-1 reverse inquiry earns aggressive support; tier-3 reverse inquiry gets a real but wider quote that reflects both risk and relationship value. Mispricing this is how desks lose money quietly.'),

  // -------------------------------------------------------------------------
  // AXES AND COLOR (4380210–4380214)
  // -------------------------------------------------------------------------
  q(4380210, 'Career Skills', CHAPTER, 'What an axe actually is',
    'A new sales hire is told the morning meeting always covers "the desk\'s axes." What is an axe in this context?',
    'A position the desk is actively trying to add to or reduce — i.e. genuine inventory the desk wants to unwind or build at favourable levels, motivating it to provide better-than-market pricing',
    [
      ['A list of stocks the research analyst has rated buy or sell during the week', 'Research ratings are an analyst output, not a desk inventory signal. An axe is about what the trader\'s book actually wants to do.'],
      ['Every name the desk has ever traded in the last month, regardless of current position', 'A historical trade list is not an axe. The axe is the current need — long inventory to reduce or short to cover — not a transaction history.'],
      ['Customer orders that have been accepted and are waiting to execute', 'Resting customer orders are working orders. An axe is the desk\'s own position interest, distinct from agency orders held on behalf of clients.'],
    ],
    'An axe is the desk\'s real inventory interest — what the book wants to add or reduce right now. The signal to clients is that pricing on that name is likely to be better than the screen because the desk benefits from getting it done.'),

  q(4380211, 'Career Skills', CHAPTER, 'Bid axe vs offer axe',
    'The morning sheet says the desk is "bid axed" in a stock. What does that tell a salesperson?',
    'The desk wants to buy that stock — likely short inventory it needs to cover or a hedge it needs to unwind — and will pay a better-than-touch level to a client who can sell to it',
    [
      ['The desk has resting bid orders in the name that have not yet filled, and wants those orders worked', 'A bid axe is a position-driven need, not a list of unfilled orders. The desk is signalling it benefits commercially from buying, not that it is waiting on the book.'],
      ['The desk is long the name and wants to sell, but is using "bid" as shorthand for the buying side of the client', 'A bid axe is the desk\'s interest, not the client\'s side. If the desk is long and wants to sell, that is an offer axe.'],
      ['The desk has a customer on a short-sale order it cannot locate, and is appealing for borrow', 'Borrow locates are a stock-loan workflow, not an axe. A bid axe is principal-driven inventory interest.'],
    ],
    'Bid axe = desk wants to buy. Offer axe = desk wants to sell. The direction always refers to what the desk is going to do, which tells the client whether their order can be filled at better than the screen.'),

  q(4380212, 'Career Skills', CHAPTER, 'Reading the morning color note',
    'The morning color from the program trading desk reads: "Heavy real-money on offer in mega-cap tech, light HF demand in healthcare, retail flow skewed buy in energy single-names." What is the right way for a single-name sales-trader to use this?',
    'Use it as a signal of where institutional inventory is likely to be available (mega-cap tech offers from real-money sellers) and where retail-driven moves may be unbacked by institutional demand (energy single-names) when discussing entries with clients',
    [
      ['Treat it as a trade idea and pitch clients to short mega-cap tech because real-money is selling', 'Color is a flow read, not a thesis. Real-money selling reflects rebalancing or duration management as often as a directional view; pitching it as a short signal misreads what the desk is saying.'],
      ['Forward the color verbatim to clients so they can see what other clients are doing', 'Forwarding flow color to other clients verbatim is a serious problem — it can leak counterparty identity, breach client confidentiality, and damage relationships. Color is for the desk\'s internal use to inform conversations, not for redistribution.'],
      ['Treat program desk color as irrelevant to single-name liquidity', 'Program color directly affects single-name liquidity and pricing. Dismissing it leaves the sales-trader unaware of why fills are improving or deteriorating in their names.'],
    ],
    'Morning color is internal context that shapes how the sales-trader frames execution and entry conversations. It informs the desk\'s view of where supply and demand sit; it is not a tradable thesis and not for client redistribution.'),

  q(4380213, 'Career Skills', CHAPTER, 'Selectively sharing axes without leaking flow',
    'You are bid axed in $20M of a mid-cap name. Two tier-1 clients are natural sellers. How do you communicate the axe so they engage without leaking the desk\'s commercial position to the wider market?',
    'Call (not email) each client individually with a specific size context and a tradable level, explicitly request discretion, and avoid disclosing the size or identity of the inventory motivating the bid — the axe is real but the position behind it stays inside the desk',
    [
      ['Send a desk-wide axe email naming the size, side, and your inventory rationale so clients can decide their interest with full context', 'Disclosing inventory rationale tips the desk\'s own position to the market. Once leaked, other dealers and clients can front-run the axe and the desk loses the very edge it was trying to monetise.'],
      ['Post the axe on a public chat with peer dealers so the natural seller flow comes to you regardless of which client they call', 'Sharing axes with peer dealers eliminates the desk\'s informational edge and can constitute coordinated handling of inventory in ways that compliance will not bless.'],
      ['Wait for the clients to come inbound rather than reach out, because outreach itself can be seen as soliciting on the back of inventory', 'Outreach on a legitimate desk axe is standard practice and is exactly what tier-1 clients expect. Waiting for inbound calls misses the window and the clients will assume the desk is asleep.'],
    ],
    'Axes are communicated by selective, direct outreach with discretion — never by broadcast or peer-dealer chat. The skill is signalling commercial interest cleanly without disclosing the size or origin of the underlying inventory.'),

  q(4380214, 'Career Skills', CHAPTER, 'Axe vs IOI',
    'A junior sales-trader sends a "natural IOI" to a client describing an axe the desk holds. The supervisor says the message conflates two different concepts. What is the difference?',
    'An axe is the desk\'s own principal interest — its book wants to buy or sell; an IOI is an Indication of Interest representing client interest the desk is sharing on behalf of (or with permission from) the client, often with a "natural" tag meaning real, non-prop flow',
    [
      ['Axes and IOIs are the same thing — different desks just use different names for the same concept', 'They are different in source: an axe is the firm\'s own book, an IOI is client-derived. Confusing them misrepresents the trade origin to the recipient, which is a real compliance issue.'],
      ['An axe is intraday and an IOI is overnight — the only distinction is duration', 'Both can be intraday or carry overnight; duration is not the defining feature. The defining feature is whose interest is being communicated.'],
      ['An axe is a research recommendation and an IOI is a trading note — they live on different sides of the wall', 'Both axes and IOIs live on the trading side. The distinction is between principal interest (axe) and client-derived interest (IOI), not between research and trading.'],
    ],
    'An axe is the desk\'s own inventory interest. An IOI is a representation of client interest (natural IOI = real client flow). Misrepresenting an axe as a natural IOI implies non-existent client flow and is a recurring source of regulatory scrutiny.'),

  // -------------------------------------------------------------------------
  // COMPLIANCE, CHINESE WALLS, REG M, REG AC (4380215–4380221)
  // -------------------------------------------------------------------------
  q(4380215, 'Career Skills', CHAPTER, 'Public side vs private side of the wall',
    'A salesperson on the cash equities desk asks why a colleague on the capital markets team cannot tell them what is in the IPO pipeline. What is the structural answer?',
    'The capital markets colleague is on the private side and routinely holds material non-public information about issuers; the salesperson is on the public side and must transact based only on public information — the information barrier prevents MNPI from leaking from private to public side',
    [
      ['Capital markets is a separate legal entity from the broker-dealer, so information sharing is restricted by corporate structure', 'Information barriers operate inside a single broker-dealer between functions, not between legal entities. The structural feature is the wall, not a corporate boundary.'],
      ['Cash equities clients cannot trade in IPOs anyway, so sharing the pipeline would serve no commercial purpose', 'Many cash equities clients participate in IPOs through the syndicate. The reason for the barrier is regulatory, not commercial irrelevance.'],
      ['It is a courtesy convention so capital markets can keep their pipeline confidential before announcement', 'It is a regulatory requirement under firm policies that implement SEC and FINRA rules, not a courtesy. MNPI controls are auditable and enforced.'],
    ],
    'The wall separates the private side (people with MNPI about issuers — capital markets, M&A, lev fin) from the public side (sales and trading executing on public information). Maintaining the barrier is what allows a single firm to operate both functions without insider-trading violations.'),

  q(4380216, 'Career Skills', CHAPTER, 'Wall-crossing procedure on a deal',
    'A capital markets banker wants a specific equity salesperson to "wall-cross" so they can sound out a tier-1 client on an upcoming follow-on. What does this actually involve?',
    'Compliance places the salesperson on the deal team with explicit recording, watchlist additions, and trading restrictions on the name; the salesperson then approaches the client through a controlled script, gets the client to confirm wall-cross before disclosure, and trading restrictions apply for the duration',
    [
      ['The salesperson simply listens to the banker explain the deal verbally and is trusted to compartmentalise the information from their public-side work', 'Wall-crossing is a formal compliance process with watchlist entries and trading restrictions, not an informal verbal arrangement. An informal approach would be an immediate MNPI control failure.'],
      ['The salesperson sends a client an NDA covering all upcoming deals at the firm, and the client signs once', 'Wall-crosses are per-deal, not blanket. Each cross is recorded against a specific transaction with explicit consent and explicit return-to-public-side timing.'],
      ['The salesperson briefs the client without obtaining a wall-cross because preliminary deal information is not considered material until announcement', 'A planned follow-on is generally MNPI before announcement. Briefing without obtaining the client\'s wall-cross consent first is exactly the kind of selective disclosure the framework is designed to prevent.'],
    ],
    'Wall-crossing is the controlled, recorded mechanism by which public-side staff and clients are temporarily brought over the wall to discuss a specific deal. It is governed by firm policies implementing SEC and FINRA requirements, and every step is logged for audit.'),

  q(4380217, 'Career Skills', CHAPTER, 'Reg AC analyst certification',
    'A salesperson forwards a research note to clients. The supervisor reminds them that the note carries a Reg AC certification. What does Reg AC require?',
    'Each research report must include a statement from the covering analyst certifying that the views in the report accurately reflect their personal views and disclosing whether any part of their compensation was tied to the specific recommendations or views',
    [
      ['Reg AC requires research notes to be approved by the firm\'s chief economist before distribution to clients', 'No chief-economist-level approval is part of Reg AC. The rule is about the individual analyst\'s certification of their own views.'],
      ['Reg AC requires that all research recommendations be unanimous across the firm — analysts cannot disagree internally on a name', 'Reg AC does not constrain internal disagreement. Different analysts at the same firm can hold different views; Reg AC requires each to certify their own.'],
      ['Reg AC requires firms to publish their order flow data alongside research recommendations so clients can see the desk\'s position', 'Order-flow disclosure is governed separately. Reg AC focuses on personal-view certification and compensation linkage of the analyst, not on trading flow.'],
    ],
    'Reg AC (Regulation Analyst Certification) is an SEC rule that requires each research analyst to certify, in writing in every report, that the views expressed are their personal views and to disclose any compensation linkage to the specific recommendations. It is the integrity backbone of published research.'),

  q(4380218, 'Career Skills', CHAPTER, 'Reg M restricted period mechanics',
    'A US issuer is doing a marketed follow-on offering and the firm is in the syndicate. The desk asks the salesperson what they can do in the underlying stock during the restricted period. What is the correct framing?',
    'Reg M Rule 101 restricts the underwriter from bidding for or purchasing the security during a specified period before pricing — for most follow-ons, one or five business days depending on float and ADTV — though excepted activities (unsolicited brokerage transactions, certain market-making) may still be permitted',
    [
      ['Reg M permits unlimited trading on both sides until the deal prices, so the desk can keep providing liquidity normally', 'Reg M expressly restricts bidding for and purchasing the offered security during the restricted period to prevent the underwriter from artificially supporting price ahead of pricing. The desk\'s normal activity is curtailed.'],
      ['Reg M only restricts proprietary trading; client agency orders can be executed freely without restriction', 'Reg M restrictions cover a defined set of activities by the distribution participant, including certain purchases regardless of agency or principal label. The desk cannot simply re-label trades as agency to escape the rule.'],
      ['Reg M only applies to IPOs; follow-on offerings are not in scope because the security is already trading', 'Reg M Rule 101 applies to distributions including follow-on offerings, not only IPOs. Restricted periods and exceptions are calibrated for each deal type.'],
    ],
    'Reg M is the SEC framework that prevents underwriters and other distribution participants from manipulating the price of a security around an offering. Restricted periods, eligible exceptions, and stabilisation rules are highly specific — every desk member working on a deal must know what they can and cannot do.'),

  q(4380219, 'Career Skills', CHAPTER, 'Reg M on a follow-on issuer',
    'The firm is bookrunner on a $400M follow-on for a US mid-cap. Stabilisation activity by the syndicate is being discussed. Which of the following is the cleanest characterisation under Reg M Rule 104?',
    'Stabilising bids are permitted only at or below the offering price, must be identified as stabilising, are subject to specific notice and reporting requirements, and exist solely to prevent or retard a decline in the offered security around pricing',
    [
      ['Stabilisation can be done at any price the syndicate chooses, since the goal is to "stabilise" rather than to manipulate', 'Stabilising bids are explicitly capped at or below the offering price. Bidding above the offering price would be exactly the manipulation Reg M is designed to prevent.'],
      ['Stabilisation is automatic during the restricted period and does not require any disclosure to investors', 'Stabilisation is permitted only as an exception with explicit notice and reporting requirements, including disclosure in the offering documents. It is not automatic and not silent.'],
      ['Stabilisation under Reg M is identical to ordinary market-making by the desk and requires no special treatment', 'Stabilisation is a specifically defined activity under Rule 104 with its own price cap, identification, and reporting rules. Treating it as ordinary market-making would breach the rule.'],
    ],
    'Reg M Rule 104 carves out a narrow stabilisation exception: bids at or below the offering price, properly identified, with notice and recordkeeping, to support pricing around a distribution. Anything beyond that envelope is potential market manipulation and is policed accordingly.'),

  q(4380220, 'Career Skills', CHAPTER, 'MNPI on a corporate access call',
    'A corporate-access analyst arranges a one-on-one between a tier-1 hedge-fund client and a CFO ahead of the close of the quarter. During the call the CFO says: "We are tracking comfortably above consensus for the quarter." What is the salesperson\'s correct next step?',
    'Recognise that this is likely selective disclosure of MNPI under Reg FD, immediately escalate to compliance, ensure no trading occurs by the client on the back of the comment, and follow the firm\'s remediation playbook — which may involve the issuer making a public Form 8-K disclosure',
    [
      ['Note the comment in the call summary and send it to other tier-1 clients as part of the post-meeting note', 'Disseminating selective material information to other clients is the worst possible response — it compounds the original selective disclosure problem and likely triggers individual tipping liability.'],
      ['Allow the client to trade on the comment because the disclosure was in a private meeting and Reg FD only applies to broad disclosures', 'Reg FD is explicitly aimed at selective disclosure by issuers to particular market participants, including analysts and major holders. A private meeting is precisely the channel the rule was designed to police.'],
      ['Treat the CFO comment as ordinary guidance because the company already gives public guidance', 'Specific intra-quarter performance information is material non-public information until publicly disclosed by the issuer, regardless of whether full-year guidance is on file.'],
    ],
    'Corporate access carries real MNPI risk. If a corporate executive makes a selectively disclosed material statement, the right path is immediate escalation, trading freeze for the recipient, and coordination with the issuer on public disclosure. Reg FD treats selective disclosure by issuers as the violation, but the broker can be on the hook for facilitation.'),

  q(4380221, 'Career Skills', CHAPTER, 'Information barrier breach — what to do',
    'A salesperson on the public side notices that a banker from the private side has accidentally CC\'d them on an email containing the codename of an in-process M&A deal. What is the correct sequence of actions?',
    'Do not forward, do not reply, do not delete; immediately notify the firm\'s compliance team and follow their instructions — typically the recipient is added to a restricted list, trading in the relevant names is blocked, and the email is preserved for review',
    [
      ['Delete the email immediately to ensure the recipient cannot be accused of holding MNPI', 'Deleting destroys the audit trail compliance needs to handle the breach. The right move is preservation plus escalation, never deletion.'],
      ['Reply to the banker confirming receipt and ask whether the salesperson should consider themselves wall-crossed', 'Replying widens the disclosure and could implicate others. Compliance must drive any wall-cross decision, not the recipient\'s ad-hoc reply.'],
      ['Forward the email to the salesperson\'s supervisor and let them decide whether escalation is needed', 'Forwarding widens the distribution of MNPI and creates more parties who may need to be restricted. Compliance is the correct first contact, not the supervisor by forward.'],
    ],
    'Information-barrier breaches are handled by compliance, not by recipients. The recipient\'s job is to preserve, freeze, and escalate; any wider distribution makes the problem larger and may turn an accidental breach into an enforcement matter.'),

  // -------------------------------------------------------------------------
  // SINGLE-NAME LONG PITCH (4380222–4380224)
  // -------------------------------------------------------------------------
  q(4380222, 'Career Skills', CHAPTER, 'Building the pitch structure',
    'You are constructing a fresh single-name long pitch on a US specialty retailer trading at $34. What structural order best lands the call with a generalist hedge-fund PM?',
    'Headline thesis in one line, near-term catalyst with date, levels (entry, target, stop) with implied reward-to-risk, the two strongest pieces of supporting evidence, the main risk that would invalidate it, and what the desk is doing — in roughly that order',
    [
      ['Start with the company\'s full history, walk through the business segments, then arrive at the thesis at the end of the note', 'Generalist PMs do not have patience for chronological build-ups. The thesis goes first; the supporting structure earns its place by relevance, not by length.'],
      ['Lead with the chart and let the price action speak for itself — text only after the visual', 'A chart-first pitch communicates pattern but not thesis. PMs need the *why* up front; the chart is supporting evidence, not the lead.'],
      ['Open with the risks so the PM knows you have done the work, then build to the thesis at the end', 'Leading with risks buries the call to action. Real risk frames live near the end of the pitch where they re-test conviction, not at the top where they kill momentum.'],
    ],
    'Strong single-name pitches front-load the thesis and catalyst, anchor with levels, support with two pieces of evidence the PM cannot get from the screen, name the kill risk, and signal what the desk is doing. Everything else is filler that the PM will skip.'),

  q(4380223, 'Career Skills', CHAPTER, 'Common single-name long pitch failure',
    'A salesperson sends a long pitch on a US software name with sections covering business model, revenue mix, management background, recent quarterly results, peer multiples, and a "buy" recommendation. A senior PM replies "where is the trade?" What is the most likely flaw?',
    'The pitch reads as a research note rather than a trade: no specific catalyst, no entry/target/stop, no timeframe, no view on positioning or flow — so the PM cannot translate it into a position decision',
    [
      ['The pitch should have included more financial detail, such as a full DCF model, to be credible', 'Adding a DCF to a research-note-style pitch deepens the analysis but does not turn it into a trade. The PM\'s objection is that there is no actionable trade, not that the analysis is shallow.'],
      ['The pitch failed because the salesperson did not include the desk\'s buy rating prominently enough at the top', 'A rating label is not a trade. The PM is asking for catalyst, levels, and timing — none of which a rating supplies.'],
      ['The pitch should have been longer, with more sections covering ESG and management compensation', 'More sections compound the problem. The PM wants less narrative and more decision content — catalyst, levels, risk, timeframe.'],
    ],
    'A trade pitch is not a research note. The PM needs to know what to do, when, at what price, against what risk. Without those four elements, however good the analysis, the pitch is unactionable and earns "where is the trade?" pushback.'),

  q(4380224, 'Career Skills', CHAPTER, 'Picking the right client for a long pitch',
    'You have built a high-conviction long pitch on a $1B mid-cap US healthcare name with a binary FDA catalyst in three weeks. Who should you call first, and why?',
    'Hedge-fund clients with explicit healthcare or event-driven mandates and demonstrated capacity to take FDA-binary risk — calling a long-only large-cap mandate first wastes the call because the name and the binary catalyst do not fit their book',
    [
      ['Every tier-1 client, in alphabetical order, to ensure even coverage', 'Equal alphabetical coverage ignores mandate fit and product profile. A binary FDA catalyst is irrelevant to a passive index fund and high-priority for an event-driven shop.'],
      ['Long-only large-cap mandates first because they have the most capital to deploy', 'Capital does not mean fit. A $1B mid-cap binary biotech does not pass the size or risk profile of a large-cap mandate; the call will be a courteous decline.'],
      ['Retail clients via the wirehouse channel because individual investors are most receptive to event-driven biotech ideas', 'Retail distribution for binary biotech ideas raises suitability concerns and is a different distribution path entirely. Institutional event-driven funds are the natural audience for this pitch.'],
    ],
    'Pitch sequencing is a mandate-fit exercise. The first call should be to a client whose mandate, capacity, and current positioning give the idea the highest probability of converting into an executed trade — not the loudest or the largest.'),

  // -------------------------------------------------------------------------
  // PAIR-TRADE PITCH (4380225–4380227)
  // -------------------------------------------------------------------------
  q(4380225, 'Career Skills', CHAPTER, 'Why a pair not an outright',
    'A salesperson pitches long Stock A / short Stock B (both US auto OEMs) on a market-share thesis. A PM asks: "Why not just go long A outright?" What is the cleanest answer?',
    'A pair isolates the relative thesis (A gains share from B) and neutralises sector beta — if the auto sector sells off on rates or input costs, both names move together and the pair P&L tracks the relative dynamic rather than the macro move',
    [
      ['A pair always uses less capital than an outright long, so it is more efficient on a per-dollar basis', 'A long-short pair can use more gross capital, not less — both legs need to be financed. The benefit is risk isolation, not capital efficiency.'],
      ['A pair removes the need for a stop because the short leg automatically protects the long', 'A pair has its own risk frame (the spread) and its own stop (when the spread moves against the thesis by an amount). It is not stop-free; it just has a different risk surface.'],
      ['A pair generates positive carry from the short rebate, so the trade pays the client to wait', 'Short rebates are variable, often small, and offset by financing on the long leg. Carry is not the structural reason for a pair; risk isolation is.'],
    ],
    'A pair is the right structure when the thesis is about *relative* performance and the trader wants to neutralise factors common to both legs. If the conviction is outright (the sector goes up), an outright long expresses that more cleanly; if the conviction is relative, a pair is the right wrapper.'),

  q(4380226, 'Career Skills', CHAPTER, 'Sizing the legs of a pair',
    'You pitch long $10M of Stock A versus short Stock B as a pair. Stock A trades at $50 with a beta to the sector of 1.2; Stock B trades at $80 with a sector beta of 0.9. How should the salesperson frame leg sizing to a PM who wants the pair beta-neutral to the sector?',
    'Size the short leg so that the dollar betas match — short approximately $13.3M of Stock B (10 × 1.2 / 0.9) — otherwise the pair carries residual sector beta and is not a clean expression of the relative thesis',
    [
      ['Match the dollar notional exactly — $10M long and $10M short — because equal-notional is the standard definition of a pair', 'Equal-notional pairs are common but are not beta-neutral when leg betas differ. The PM explicitly asked for sector-beta neutrality, which requires beta-weighted sizing.'],
      ['Match the share count rather than the dollar notional, so 100k long A and 100k short B', 'Matching shares ignores both price and beta, leaving substantial residual exposure. Shares-matched pairs are almost never the right construction for a relative-value trade.'],
      ['Size the short leg larger because shorts tend to be harder to maintain, so over-sizing builds cushion', 'There is no rationale for over-sizing the short on operational grounds. Sizing should reflect the desired risk exposure (here, beta neutrality), not borrow-side concerns.'],
    ],
    'Pair sizing follows the risk neutralisation goal. For sector-beta neutrality, scale the legs by their respective sector betas so the dollar betas match. Equal-notional pairs are an approximation; for tradeable books, the beta-weighted version is the correct construction.'),

  q(4380227, 'Career Skills', CHAPTER, 'Pair-trade decay and re-balancing',
    'A pair has worked over six weeks: long A is up 8%, short B is down 3%, so spread P&L is positive. The PM asks the desk whether the pair still expresses the original thesis. What is the right framing for re-balancing?',
    'The original beta-weighted ratio has drifted because the legs moved differently; if the PM wants to maintain the same risk exposure to the relative thesis, the desk should rebalance the dollar amounts back to the target beta-weighted ratio at the new prices',
    [
      ['Leave the pair alone — once a pair is on, it expresses the thesis until the thesis is wrong, regardless of leg drift', 'Drift changes the effective exposure: as A rallies and B falls, the long leg becomes a larger dollar position than originally calibrated. Leaving it alone means the pair now carries residual sector exposure the PM did not size for.'],
      ['Take profit on the long leg and add to the short to fully lock in the gain', 'Closing the long while extending the short converts the trade from a relative pair into an outright short on B. That is a different thesis and a different risk frame.'],
      ['Add to both legs proportionally to compound the position now that the thesis is working', 'Compounding into a working trade is a sizing decision that requires a fresh conviction check, not a rebalance. Conflating "trade is working" with "double the size" is how pairs blow up on the reversal.'],
    ],
    'Pair-trade re-balancing is a disciplined exercise of restoring the original risk exposure after drift. Closing legs or scaling up is a sizing decision, not a rebalance — and confusing them is a common way a working pair turns into something the PM no longer wanted.'),

  // -------------------------------------------------------------------------
  // OPTIONS STRUCTURE PITCHES (4380228–4380230)
  // -------------------------------------------------------------------------
  q(4380228, 'Career Skills', CHAPTER, 'Risk reversal as a directional pitch',
    'A bullish PM has a 3-month view on a US large-cap. The desk pitches a zero-cost risk reversal — long upside call at strike K1, short downside put at strike K2 (K2 < spot < K1). What single risk should the salesperson lead with?',
    'Below K2 the PM owns the stock at K2 — synthetically long downside — so the structure is essentially "long stock plus call optionality" with the downside capped only by the put strike, not by a stop; a sharp gap below K2 takes equity-like losses',
    [
      ['Risk reversals are always net long vega so a vol spike will hurt the position regardless of direction', 'The vega profile depends on strike placement and skew; a typical risk reversal can be small in vega terms. The dominant risk is the directional one below K2, not the vega.'],
      ['The structure is theta-positive so the PM loses money over time even if the stock rises', 'Risk reversals are typically near-flat in theta on day one given the zero-cost calibration; the theta profile is not the main risk. The directional left tail is.'],
      ['Because the PM is short the put, dividends will be a major drag on the position over the three months', 'Dividend exposure on a 3-month listed option position is modest and is priced into the strikes. The dominant risk is being put the stock if it trades through K2.'],
    ],
    'A risk reversal expresses a directional view by financing the upside call with a downside put. The PM must understand that below the put strike the structure behaves like long stock — there is no soft landing, just synthetic equity exposure to a level chosen at trade date.'),

  q(4380229, 'Career Skills', CHAPTER, 'Call spread vs outright call',
    'A PM wants long upside exposure on a name into a binary event but is unwilling to pay the full premium of an outright call. The desk pitches a call spread. What is the structural trade-off?',
    'The call spread caps the upside at the short strike, in exchange for a lower net premium and a lower break-even — the PM gives up the tail but pays less and reduces vega/theta exposure relative to a naked long call',
    [
      ['The call spread has no downside risk because the long and short legs cancel below the lower strike', 'Both legs are calls and below the lower strike both expire worthless, so the maximum loss is the net premium paid. That is not zero — it is the cost of the structure.'],
      ['The call spread always has higher P&L than the naked call because of the short leg\'s premium offset', 'The short leg caps the upside, so when the underlying rallies past the short strike the naked call outperforms. The call spread\'s benefit is cheaper entry, not higher max payoff.'],
      ['The call spread eliminates vega exposure entirely, leaving only directional sensitivity', 'A vertical call spread has a net vega that depends on strikes and tenor, but it is rarely zero. The structure reduces vega relative to an outright call; it does not eliminate it.'],
    ],
    'Call spreads are the workhorse for capped-upside directional pitches into events. The PM accepts a ceiling in exchange for a meaningful reduction in premium, vega, and theta. The pitch lives or dies on whether the ceiling is set above the realistic event move.'),

  q(4380230, 'Career Skills', CHAPTER, 'Collar around a concentrated position',
    'A founder/executive client holds a large concentrated long in their own company stock and wants to protect downside while staying invested. The desk pitches a zero-cost collar (long put / short call). What compliance angle has to be cleared first?',
    'Insider sales restrictions and Rule 144 considerations apply — the collar functionally hedges and may be treated as a sale-equivalent under Section 16 and insider trading policies; the client\'s company counsel and the firm\'s compliance team must clear timing, blackout windows, and Schedule 13D/G implications',
    [
      ['Collars are exempt from insider rules because they are options structures rather than stock sales', 'There is no blanket exemption. Equity collars on insider stock are subject to Section 16 reporting and may be limited by insider trading policies; they are not exempt because they use options.'],
      ['Once the client signs the trade ticket the desk has no further compliance obligation', 'The firm has obligations beyond ticket signing — best-ex, Section 16 reporting facilitation, and avoidance of facilitating breaches of company policy. Walking away post-ticket is not the firm\'s posture on insider hedges.'],
      ['Zero-cost collars are unregulated under SEC rules because no net premium changes hands', 'There is no premium-based exemption. SEC and exchange rules apply to the structure regardless of whether it is zero-cost.'],
    ],
    'Hedging a concentrated insider position is a high-touch structuring exercise where compliance leads. Section 16, Rule 144, blackout windows, 10b5-1 plan structuring, and the issuer\'s own insider policy all interact. The pitch is not the trade — the documentation and timing are.'),

  // -------------------------------------------------------------------------
  // CAPITAL INTRODUCTION (4380231–4380232)
  // -------------------------------------------------------------------------
  q(4380231, 'Career Skills', CHAPTER, 'What cap intro does — and what it does not',
    'A junior salesperson asks why the prime brokerage capital introduction team exists. What is the most accurate description?',
    'Cap intro introduces hedge-fund clients of the firm\'s prime brokerage to potential allocators (institutional LPs, family offices, fund-of-funds) at curated events or one-on-ones, with the goal of supporting AUM growth for clients that already use or could use the firm\'s prime services',
    [
      ['Cap intro acts as a placement agent and earns a commission tied to AUM raised by the introduced manager', 'Cap intro is generally not compensated per-AUM and does not act as a registered placement agent. Compensation flows through the broader prime brokerage relationship — financing spreads, balances, commissions.'],
      ['Cap intro raises capital for the firm\'s own balance-sheet products and proprietary funds', 'Cap intro supports third-party hedge fund clients, not the firm\'s own products. Internal capital-raising sits in different teams.'],
      ['Cap intro is a regulator-mandated function that every prime brokerage must offer to maintain its broker-dealer licence', 'There is no regulatory mandate to provide capital introduction. It is a commercial service that prime brokers offer to attract and retain hedge fund clients.'],
    ],
    'Capital introduction is a relationship and event service inside prime brokerage. It is not a placement agent function and is not directly compensated per dollar raised. Its commercial logic is that allocator introductions retain hedge fund clients on the prime platform.'),

  q(4380232, 'Career Skills', CHAPTER, 'Why cap intro sits inside prime brokerage',
    'Why is capital introduction usually housed inside prime brokerage rather than inside cash equities sales?',
    'Prime brokerage holds the hedge fund relationship — financing, custody, securities lending, reporting — and is paid through balances and spreads; helping a PB client grow AUM directly grows the prime business, which is why the function sits there economically',
    [
      ['Cash equities sales is restricted from introducing capital under FINRA rules, so the function had to be moved to PB', 'There is no FINRA rule that prohibits cash equities from making introductions; the placement is commercial, not regulatory.'],
      ['Prime brokerage has more compliance resources, so housing cap intro there reduces the firm\'s regulatory risk', 'Compliance resourcing is firm-wide; it is not the reason for the org placement. The reason is commercial alignment between PB economics and AUM growth.'],
      ['Cap intro is housed in PB because PB clients are higher-paying than cash equities clients on a per-account basis', 'Comparative client economics is a coarse characterisation. The reason is the structural link between PB revenue and AUM, not a generic statement about client tiers.'],
    ],
    'Cap intro sits in prime because PB economics scale with hedge fund AUM. The introduction service is one of the soft-value levers PB uses to win and retain hedge fund relationships against competitors.'),

  // -------------------------------------------------------------------------
  // SOFT DOLLARS (4380233–4380234)
  // -------------------------------------------------------------------------
  q(4380233, 'Career Skills', CHAPTER, 'Definition of soft dollars under 28(e)',
    'A new salesperson asks what "soft dollars" are. What is the cleanest US-framework answer?',
    'Soft dollars are arrangements where an investment adviser uses commissions on client trades to pay for eligible research and brokerage services; Section 28(e) of the Exchange Act provides a safe harbour if the products and services fall within statutory definitions and the adviser makes a good-faith determination on reasonableness',
    [
      ['Soft dollars are discount commission rates that brokers offer in exchange for bundled research, with no legal framework around them', 'Soft dollars are governed by Section 28(e) and SEC guidance, including the 2006 interpretive release. Treating them as informal discount arrangements understates the compliance discipline involved.'],
      ['Soft dollars are payments made by hedge funds to brokers for capital introduction services', 'Capital introduction is a separate service inside prime brokerage and is not paid for through Section 28(e) soft dollars. Conflating the two is a common confusion.'],
      ['Soft dollars are kickbacks from brokers to portfolio managers personally, which is why they are heavily restricted', 'Soft dollars flow to the *client account* in the form of research and brokerage services for the benefit of the client, not as personal payments to PMs. Personal payments would be a separate breach.'],
    ],
    'Soft dollars are the formal mechanism by which advisers pay for research and brokerage services with client commission dollars under the Section 28(e) safe harbour. The safe harbour is conditional on eligibility, good-faith reasonableness, and proper disclosure.'),

  q(4380234, 'Career Skills', CHAPTER, 'Soft dollars vs directed brokerage',
    'A client asks the salesperson what the difference is between a soft-dollar arrangement and directed brokerage. What is the cleanest answer?',
    'Soft dollars use client commissions to pay for eligible research/brokerage services for the client\'s benefit under Section 28(e); directed brokerage is when a plan sponsor or client directs the adviser to route trades to specific brokers (often to obtain rebates or services for the sponsor) — different mechanism, different fiduciary considerations, often different regulatory framing',
    [
      ['They are the same thing — both describe routing commissions to specific brokers in exchange for research', 'They are distinct: soft dollars run inside the adviser-broker relationship under 28(e); directed brokerage is a sponsor- or client-directed routing instruction with its own fiduciary issues, particularly under ERISA when plan sponsors are involved.'],
      ['Soft dollars are paid in cash and directed brokerage is paid in research, which is the only operational difference', 'Both involve commissions, not cash payments. The distinction is who directs the routing and for whose benefit, not the medium of payment.'],
      ['Directed brokerage is illegal under SEC rules whereas soft dollars are permitted', 'Directed brokerage is not categorically illegal — it is permitted with disclosure and oversight, particularly under ERISA frameworks. The two coexist with different requirements.'],
    ],
    'Soft dollars and directed brokerage are different mechanisms. 28(e) governs research/brokerage paid via client commissions; directed brokerage is an instruction from the client or plan sponsor to route trades to specific brokers. Both can coexist and both have specific disclosure and fiduciary rules around them.'),

  // -------------------------------------------------------------------------
  // BLOCK TRADES AND CAPITAL COMMITMENT (4380235–4380238)
  // -------------------------------------------------------------------------
  q(4380235, 'Career Skills', CHAPTER, 'Mechanics of a block trade',
    'A long-only client wants to sell $80M of a single mid-cap US name in one print, after the close. What does a "block trade" mean operationally in this context?',
    'A privately negotiated single transaction at an agreed price, typically printed off-exchange and reported through a TRF or upstairs venue under FINRA rules — large enough that working it through the lit market would impose material price impact',
    [
      ['A block trade is any single trade above 10,000 shares regardless of size or counterparty', 'The 10,000-share threshold is a historical reference but in modern markets a "block" is defined commercially and by exchange rules — usually a large size that warrants off-exchange handling, not a flat share count.'],
      ['A block trade is an order broken into many smaller executions across the day using a VWAP algo', 'Algorithmic break-up is precisely the *opposite* of a block — block trades concentrate the print into a single negotiated transaction to avoid the working risk.'],
      ['A block trade is a series of crosses inside the spread executed on a public exchange order book', 'Crossing inside the spread is one method for small sizes; block trades typically print off-exchange precisely because the size exceeds what the lit book can absorb without impact.'],
    ],
    'A block trade is a privately negotiated, large-size, single-print transaction reported through the appropriate trade-reporting facility. The point is to transfer a large position with certainty of execution while minimising lit-market signalling and impact.'),

  q(4380236, 'Career Skills', CHAPTER, 'Capital commitment vs agency',
    'A client asks the desk to "show a bid for $50M risk" on a single name. What does "on risk" or "capital commitment" mean in distinction from an agency order?',
    'The desk uses its own balance sheet to buy the block from the client at an agreed price and takes the market risk of working out of the position afterwards; this contrasts with agency, where the desk simply executes the client\'s order in the market without taking principal exposure',
    [
      ['Capital commitment means the desk guarantees a fill at the client\'s limit price using the client\'s own capital', 'The defining feature is that the *desk\'s* balance sheet absorbs the risk, not the client\'s. A guarantee using the client\'s capital is just an agency execution with a limit.'],
      ['Capital commitment means the desk lends the client cash against the position rather than buying it', 'That describes a financing/repo or margin arrangement, not a capital-commitment block trade. The desk is taking ownership, not lending.'],
      ['Capital commitment is the same as a principal-only OTC swap; the desk swaps cash for performance', 'A TRS is one structure for synthetic exposure but is not what "capital commitment" means on a block. Capital commitment is an outright cash purchase of the block by the dealer.'],
    ],
    'Capital commitment is principal risk-taking by the desk to provide certainty of execution to the client. The desk buys the block, prices it including a risk premium for working out the position, and then trades out of it — taking the P&L (positive or negative) on the unwind.'),

  q(4380237, 'Career Skills', CHAPTER, 'Pricing a risk bid on a block',
    'A client asks for a bid on $60M of a US mid-cap with ADV of $20M. Last sale is $40.20. What is the right framing for the desk\'s risk bid?',
    'Discount the last sale by a "block premium" that reflects the expected impact of working three days of ADV out of the market, dealer-funded financing during the unwind, hedging cost, and a risk margin — the resulting bid might be in the 38.50–39.50 range depending on borrow, beta and the client tier',
    [
      ['Bid the last sale of 40.20 because anything wider damages the client relationship', 'Bidding flat to last sale on three days of ADV is a recipe for guaranteed losses on the unwind; the desk would be paid by the client for taking on a meaningful price-impact risk for free.'],
      ['Bid 41.00 because the desk expects the stock to rally and wants to compete with other dealers', 'Bidding through last sale on a block sale is competing on prediction rather than risk, which is not the desk\'s job. The desk is supposed to price for impact, not speculate on direction with client capital.'],
      ['Bid 35.00 to ensure a comfortable margin regardless of the unwind path', 'Pricing 13% below last sale on a name with three days of ADV is uncompetitive — the client will simply call a different desk. The risk bid must be tight enough to win but wide enough to absorb impact and hedging.'],
    ],
    'Pricing a block bid is a structured risk exercise: estimate the days-of-ADV needed to exit, the expected price decay during that exit, the hedging cost, and the desk\'s required risk margin. The price reflects realistic unwind economics, not directional speculation and not relationship goodwill.'),

  q(4380238, 'Career Skills', CHAPTER, 'Working the block after capital commitment',
    'The desk has bought a $60M block at $39.00 from a client and now holds the position. How should the trader plan the unwind to manage information leakage?',
    'Distribute the position to natural buyers identified by the sales team where possible, work residual size via low-impact algos (VWAP, IS) across multiple venues over several sessions, and avoid signalling the desk\'s direction by clustering trades on a single venue or at a single time of day',
    [
      ['Sell the entire position in a single auction print at the close to minimise duration of risk exposure', 'A single closing print of 3× ADV would move the stock significantly and broadcast to the market that a large sale just occurred, hurting the desk\'s mark on the residual and damaging the client relationship.'],
      ['Hold the position long-term and let it become a "strategic" desk position rather than work it out', 'Holding a block position long-term turns short-term capital commitment into an unrelated proprietary position, which is generally inconsistent with the desk\'s mandate and risk limits.'],
      ['Sell the position to a competitor dealer at a loss to remove the risk from the book immediately', 'Selling to a competitor signals the inventory and the price, and the loss flows directly into the desk\'s P&L. It is a worst-case outcome, used only if the inventory cannot be worked at all.'],
    ],
    'Block unwinds are choreographed: natural-buyer distribution first, then patient algorithmic execution across venues and time, with active information discipline. The goal is to realise the risk bid\'s embedded margin without leaking direction to the market.'),

  // -------------------------------------------------------------------------
  // IOIs (4380239)
  // -------------------------------------------------------------------------
  q(4380239, 'Career Skills', CHAPTER, 'Natural vs super IOI',
    'A salesperson sees an "IOI: Natural, 250k XYZ, Buy" on the desk system and asks how this differs from a "super IOI." What is the right answer?',
    'A natural IOI represents a real client order to buy that the desk has permission to indicate; a super IOI is a higher-quality indication tagged according to industry conventions (e.g. Bloomberg LEVL or AFME guidelines) signalling specific levels of firmness, size, and client commitment',
    [
      ['Natural and super IOIs are the same thing — different platforms use different labels for identical indications', 'They are different tiers under common Street conventions. Conflating them misrepresents the firmness of the indication to recipients.'],
      ['A natural IOI is one created automatically by the desk\'s algos; a super IOI is one manually entered by a salesperson', 'Automation versus manual entry is not the distinction. The distinction is the *source and firmness* — natural = real client flow, super = a more strictly defined firmness tier.'],
      ['Super IOIs are exclusively for principal positions, while natural IOIs cover only agency orders', 'Super IOIs are not principal-only; they are about firmness and integrity of the indication, applied within established conventions for both client-derived flow.'],
    ],
    'IOI labelling is a discipline the industry has standardised because misleading IOIs ("painting" the tape with non-existent flow) is a recurring enforcement focus. "Natural" means real client interest; "super" labels (under conventions like Bloomberg LEVL) signal a stricter firmness standard.'),

  // -------------------------------------------------------------------------
  // BEST EXECUTION (4380240)
  // -------------------------------------------------------------------------
  q(4380240, 'Career Skills', CHAPTER, 'Best-ex obligation under FINRA 5310',
    'A FINRA examiner asks how the desk demonstrates compliance with the duty of best execution on a client order. What is the cleanest one-paragraph framing?',
    'FINRA Rule 5310 requires the firm to use reasonable diligence to ascertain the best market for the security so the resulting price is as favourable as possible under prevailing conditions, considering factors including character of the market, size and type of transaction, number of markets checked, accessibility of the quotation, and terms and conditions of the order',
    [
      ['Best execution means always routing to the venue with the lowest explicit commission, regardless of price', 'Commission cost is one factor among many. Routing solely on commission can produce worse net execution if the price is materially worse, which would itself breach 5310.'],
      ['Best execution means executing at or inside the NBBO on every order, with no other considerations', 'NBBO is a benchmark for some retail orders but not the full duty under 5310. For institutional and larger orders, additional factors (size, timing, market impact, fill probability) apply.'],
      ['Best execution applies only to retail orders; institutional orders are exempt because the clients are sophisticated', 'FINRA 5310 applies to all customer orders; the analysis differs by order type but there is no institutional exemption from the general duty.'],
    ],
    'FINRA 5310 frames best execution as reasonable diligence across enumerated factors, applied to all customer orders, with documented periodic reviews of routing decisions. It is a process duty as much as a price duty — the audit trail of how the desk decided where to route is itself part of compliance.'),

  // -------------------------------------------------------------------------
  // EARNINGS SETUPS (4380241–4380242)
  // -------------------------------------------------------------------------
  q(4380241, 'Career Skills', CHAPTER, 'Pre-earnings flow read',
    'Two days before a US large-cap reports, the desk sees heavy call-buying in short-dated options, rising put-call open interest skew toward calls, and unusual upticks in dark-pool prints on the underlying. What is the right way for a sales-trader to use this in client conversations?',
    'Frame it as positioning evidence — the market is leaning long into the print — without claiming it forecasts the result; the practical implication is that a beat may be partially priced in and a miss could have asymmetric downside, which shapes how clients size and hedge into the event',
    [
      ['Tell clients to short the stock because the call-buying indicates a crowded long that will reverse', 'Positioning is not a contrarian thesis on its own. Crowded longs can keep going up; the value is in informing risk management around the event, not in calling a reversal.'],
      ['Tell clients to buy calls because the desk sees momentum building into the print', 'Following the same crowd into expensive short-dated options at peak IV is a textbook way to lose premium even on a beat. The pre-earnings flow informs sizing and hedging, not herd-following.'],
      ['Treat positioning data as irrelevant because the earnings result itself is unknowable', 'Positioning materially affects post-earnings price reaction, even when the result is itself unpredictable. Dismissing it leaves clients un-prepared for asymmetric outcomes around the print.'],
    ],
    'Pre-earnings flow data is positioning information, not prediction. The desk\'s job is to make the asymmetric risk visible to the PM — where the crowd sits, what is priced in, and how to size and hedge the event — rather than to call the direction of the print itself.'),

  q(4380242, 'Career Skills', CHAPTER, 'Post-earnings reaction pitch',
    'A US large-cap reports a clean top and bottom line beat with strong guidance, but the stock opens down 6%. What is the most useful framing the desk can offer clients within the first 30 minutes?',
    'Read it as a positioning unwind — the result was likely priced in, sentiment was crowded long, and the down move reflects de-risking by leveraged longs rather than a fundamental rejection of the print; pitch the level where the desk thinks the position-driven flow exhausts and the fundamental story re-asserts',
    [
      ['Tell clients to short aggressively because the price action shows the market does not believe the guidance', 'Crowded-long unwind dynamics are mechanically distinct from a credibility rejection. Calling a fundamental rejection without evidence overreads the price action and risks selling into a positioning bottom.'],
      ['Tell clients to wait three days for the dust to settle before commenting on the name', 'Three days is when the trade is over for the clients who needed the desk\'s view on day one. The desk\'s job is to provide a framework in the first hour, not to opt out until it is clear.'],
      ['Tell clients the result was a miss because the stock fell, regardless of the headline numbers', 'Conflating price action with the fundamental result is a basic error. A clean beat followed by a selloff is a positioning story, not a re-characterisation of the print.'],
    ],
    'Post-earnings reactions often diverge from the headline result because of positioning. The desk\'s value-add is to separate the *positioning unwind* from the *fundamental verdict*, give clients a framework for when each force is dominant, and identify the level where the trade re-shifts from flow-driven to fundamentals-driven.'),
]

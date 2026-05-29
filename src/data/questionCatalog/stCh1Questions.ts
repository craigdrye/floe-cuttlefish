import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// SALES & TRADING CH1 — Desk Roles and Market Structure
// ----------------------------------------------------------------------------
// 45 questions (IDs 4380000–4380044) extending the existing 5-question seed
// (4200020–4200024 in careerAgentGeneratedRoadmapFinance.ts) for the Sales &
// Trading roadmap chapter "Desk Roles and Market Structure".
//
// Coverage areas:
//   - Sales role (coverage, idea distribution, axes, color, soft dollars)
//   - Trader role (market-maker vs prop, principal vs agency, flow vs MM)
//   - Structurer role (custom payoffs, derivatives packaging)
//   - Middle vs back office; execution vs sales-trader
//   - Equity vs fixed-income desk culture
//   - US market structure: exchanges (NYSE, Nasdaq, CBOE), ECNs, dark pools/ATS
//   - Lit vs dark venues, market makers vs ELPs (Citadel Sec, Virtu, Jump)
//   - Prime brokerage, custody/clearing (DTCC, ICE Clear), T+1 settlement (2024)
//   - Order types (limit, market, IOC, FOK, GTC), order-book mechanics, NBBO
//   - Reg NMS price-time priority; maker-taker vs inverted maker-taker
//   - PFOF (Robinhood/Citadel), Best Execution (FINRA Rule 5310)
//   - Buy-side vs sell-side clients; hedge fund / mutual fund / pension / SWF
//   - Asset managers (Vanguard, BlackRock, State Street), corporate treasury,
//     retail aggregators (Schwab, Fidelity)
//   - MM P&L drivers (spread, inventory, hedge), high- vs low-touch execution
//   - Algos (VWAP, TWAP, POV, IS), commission economics
//   - Series 7 / 63 / 79 licensing, cap intro, broker neutrality
//   - Multi-dealer platforms (Tradeweb, Bloomberg, MarketAxess)
//   - Buy-side trading desk vs sell-side desk
//
// Voice: matches jargonBusters.ts and the existing chapter expansion files.
// Every wrong-answer rationale is bespoke; distractors target real junior
// S&T analyst misconceptions, not strawmen. US-only regulatory context.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe S&T Ch1 canonical bank'

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

const CHAPTER = 'Desk Roles and Market Structure'

// Difficulty distribution target: ~13 at 3, ~22 at 4, ~10 at 5 (total 45).
export const ST_CH1_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  4380000: 3, // Salesperson coverage scope
  4380001: 3, // What an axe is
  4380002: 4, // Distributing an idea vs broadcasting
  4380003: 4, // Color vs MNPI
  4380004: 4, // Soft-dollar relationships
  4380005: 3, // Market-maker vs prop trader
  4380006: 4, // Flow trader vs market maker
  4380007: 4, // Principal vs agency, riskless principal
  4380008: 5, // Structurer packaging logic
  4380009: 4, // Middle office vs back office
  4380010: 3, // Execution trader vs sales-trader
  4380011: 4, // Equity desk vs FI desk culture
  4380012: 3, // NYSE vs Nasdaq listing/structure
  4380013: 4, // CBOE in the options stack
  4380014: 4, // ECN definition and role
  4380015: 4, // Dark pool / ATS regulation
  4380016: 5, // Lit vs dark venue tradeoffs
  4380017: 4, // ELP vs traditional market maker
  4380018: 4, // HFT firms — who they are
  4380019: 4, // Prime brokerage relationship
  4380020: 3, // DTCC role in clearing/settlement
  4380021: 4, // ICE Clear in derivatives
  4380022: 4, // T+1 settlement (2024 transition)
  4380023: 3, // Limit vs market order
  4380024: 3, // IOC and FOK orders
  4380025: 4, // GTC order mechanics
  4380026: 4, // Order book — bid/ask/depth
  4380027: 5, // NBBO under Reg NMS
  4380028: 5, // Price-time priority on lit books
  4380029: 4, // Maker-taker fee model
  4380030: 5, // Inverted maker-taker venues
  4380031: 4, // PFOF — what it actually is
  4380032: 5, // PFOF legality and disclosure
  4380033: 4, // Best execution under FINRA 5310
  4380034: 3, // Buy-side vs sell-side roles
  4380035: 3, // Hedge fund vs mutual fund client
  4380036: 4, // Pension funds as clients
  4380037: 4, // Sovereign wealth funds
  4380038: 3, // Asset managers — Vanguard/BlackRock
  4380039: 4, // Corporate treasury hedging
  4380040: 5, // Market-maker P&L sources
  4380041: 4, // High-touch vs low-touch execution
  4380042: 5, // VWAP/TWAP/POV/IS algo choice
  4380043: 3, // Series 7/63/79 licensing
  4380044: 5, // Multi-dealer platforms (Tradeweb/MarketAxess)
}

export const stCh1Questions: Question[] = [
  q(4380000, 'Career Skills', CHAPTER, 'Salesperson coverage scope',
    'A junior on the credit desk asks what their salesperson "actually does all day" if traders make the prices and analysts write the notes. What is the most accurate description of the salesperson\'s job on an institutional desk?',
    'Owns the client relationship — knows the PM\'s book, mandate, and constraints; filters firm research and trader axes into ideas the client can use; routes interest to the right trader and feeds market color back to both sides',
    [
      ['Quotes prices to clients and books the trades that come in', 'Quoting and risk-taking sit with the trader. A salesperson who quotes risk without a trader behind them is either out of role or running an uncontrolled book — neither is how institutional desks operate.'],
      ['Writes research notes that get distributed to clients', 'Published research is a separate function inside the firm with its own chinese walls and supervisory regime. Sales distribute and contextualize research; they do not publish it.'],
      ['Handles trade settlement and confirmations after the trader executes', 'Settlement and confirms live in middle and back office. A salesperson chasing fails would not have time to cover the client at all.'],
    ],
    'A salesperson is a translator between client mandate and desk capability. The job is matching what the firm has (axes, research, balance sheet) to what the client needs (ideas, liquidity, color) — and routing the trade cleanly when the match lands.'),

  q(4380001, 'Career Skills', CHAPTER, 'What an axe is',
    'A trader tells the salesperson "we are axed to sell the 5-year on-the-run swap, 250mm, show it around." What does "axed" mean in this context?',
    'The desk has a directional interest it wants to work — here, an inventory position it wants to reduce — and is willing to show better pricing to clients who can help do it',
    [
      ['The trader is forced by compliance to unwind the position before close', 'A compliance forced unwind is a restricted-list or limit-breach event, not an axe. Axes are commercial preferences the desk volunteers, not regulatory orders.'],
      ['The desk has a strong directional view that rates will rise and is recommending clients sell', 'A directional view is a trade idea, separate from an axe. An axe reflects the desk\'s own book — it might exist regardless of where the strategist thinks rates are going.'],
      ['It is shorthand for an exclusive client order the salesperson must fill first', 'Axes are not client orders. They are the desk\'s own inventory needs, communicated to sales so the team knows where to push pricing in client conversations.'],
    ],
    'An axe is a desk inventory or risk preference the salesperson can lean on. Knowing the axe tells the salesperson which clients to call, what price improvement is available, and which direction the desk would rather not add risk in.'),

  q(4380002, 'Career Skills', CHAPTER, 'Distributing an idea vs broadcasting',
    'The credit desk has an axe to buy a specific industrial bond. There are forty institutional accounts in the salesperson\'s book. What is the right way to distribute the axe?',
    'Filter the list to accounts whose mandate and current positioning make the trade plausible, then reach each on the channel they prefer with a tailored framing — not a blast',
    [
      ['Send a single Bloomberg blast to all forty accounts so everyone has equal access at the same time', 'A blast wastes goodwill on accounts that cannot trade the name and tells the ones who can that you have not thought about their book. Distribution at scale without filtering is what gets a salesperson tuned out.'],
      ['Call the top three accounts by commissions first and skip the rest', 'Calling only the top wallets ignores accounts where the trade actually fits and starves the desk of liquidity. The filter should be fit-to-trade, not commission rank.'],
      ['Wait for inbound interest from clients rather than push the axe out', 'Inbound-only on an active axe defeats the purpose of having sales coverage. The trader is showing the axe precisely because they want it worked, not waited on.'],
    ],
    'Idea distribution is a filter problem before it is a volume problem. Knowing who could plausibly take the other side — and reaching them on the channel they prefer — beats coverage measured in messages sent.'),

  q(4380003, 'Career Skills', CHAPTER, 'Color vs MNPI',
    'A salesperson is debriefing a client on the morning flow: "we saw real money sellers in the long end, fast money was net buyer in 5s, dealer balance sheets are heavier than usual." Is this color, or is this material non-public information?',
    'This is market color — aggregated, non-attributed observations about flow categories the desk legitimately saw — and is the standard product sales provide to clients',
    [
      ['This is MNPI because it describes specific orders the desk has seen', 'MNPI is information about a specific issuer or transaction that would move the price if known. Aggregated, non-attributed flow color does not name a client or expose a specific order, so it sits inside the legitimate market-color lane.'],
      ['This is sales-trader patter with no informational content', 'Dismissing color as patter underestimates what clients actually use it for — flow context shapes positioning decisions, and clients pay for the aggregation explicitly.'],
      ['This is research, since it is interpreting market data', 'Published research goes through a supervisory and disclosure process. Verbal flow color from a salesperson is not published research, and confusing the two creates real compliance problems.'],
    ],
    'Color is the aggregated, anonymized read of what the desk is seeing across flow. The line that separates it from MNPI is whether a specific order, client, or material event is being revealed. Salespeople spend a lot of time on the right side of that line by habit and training.'),

  q(4380004, 'Career Skills', CHAPTER, 'Soft-dollar relationships',
    'A long-only asset manager pays the equity desk above-market commissions and in return receives access to corporate-access events, research, and capital-introduction services. What is this arrangement called and how is it controlled?',
    'A soft-dollar (commission-sharing) arrangement, regulated under Section 28(e) of the 1934 Act and disclosed by the asset manager to its investors — legal when the services are research-related and reasonable',
    [
      ['An illegal kickback that violates best execution', 'Soft dollars are explicitly permitted under 28(e) when used for qualifying research services. Calling them illegal kickbacks misses both the safe harbor and the disclosure regime that governs them.'],
      ['A simple commission discount where the client pays less to trade', 'It is the opposite — the client pays *more* per share than execution-only cost in exchange for bundled services. Treating it as a discount inverts the economics.'],
      ['A retail PFOF arrangement applied to institutional accounts', 'PFOF is a market-maker payment to a broker for retail order flow. Soft dollars are a buy-side asset manager directing commissions to a sell-side broker for research-related services. The structure and regulation are different.'],
    ],
    'Soft dollars are the institutional equivalent of a bundled service package — the client overpays on commission in exchange for research, corporate access, or cap intro. The Section 28(e) safe harbor and disclosure to end investors are what keep it inside the regulatory lane.'),

  q(4380005, 'Career Skills', CHAPTER, 'Market-maker vs prop trader',
    'A new analyst conflates the desk\'s market makers with prop traders, calling both "guys betting the firm\'s money on the market." What is the cleanest distinction between the two roles?',
    'Market makers post two-sided quotes to facilitate client flow and earn the spread plus rebates; prop traders take directional firm-capital risk to express views. Most regulated bank desks no longer run pure prop after Volcker; market making is the client-facing flow business',
    [
      ['Market makers always lose money on direction and prop traders always make money on direction', 'That is a caricature. Market makers manage directional inventory exposure as part of the job; prop traders lose plenty of the time on direction. The distinction is intent (facilitate flow vs take view), not P&L outcome.'],
      ['Market makers only trade listed equities; prop traders only trade derivatives', 'Both functions exist across asset classes. The distinguishing line is whether the desk is quoting two-sided markets to clients or taking principal directional risk on its own behalf.'],
      ['Both are the same role — the labels are interchangeable on modern desks', 'Conflating them ignores the Volcker Rule and the structural separation that followed. On a regulated bank desk, market making and prop are distinct activities with different risk frameworks and supervisory regimes.'],
    ],
    'Market making is client-facilitation at the spread; prop is directional risk-taking on firm capital. Post-Volcker, regulated bank desks largely run flow market making rather than pure prop — the distinction shapes which risk limits and which P&L attribution apply.'),

  q(4380006, 'Career Skills', CHAPTER, 'Flow trader vs market maker',
    'On a credit desk the trader running the 5–10 year IG names is described as a "flow trader." On the on-the-run Treasury desk the equivalent role is described as a "market maker." Are these the same job under different labels?',
    'Closely related but not identical — both quote to clients, but a true market maker on a listed venue has continuous quoting obligations, while a flow trader in OTC credit shows prices when asked (RFQ) and is not bound to continuous two-way quotes',
    [
      ['They are identical roles with no operational difference', 'The OTC vs listed distinction matters. In OTC credit, prices are shown on RFQ; on a listed venue, market makers carry continuous quoting obligations and access maker rebates. Calling them the same flattens out the structure.'],
      ['Flow traders take directional risk and market makers do not', 'Both manage inventory and accept directional exposure as a byproduct of client facilitation. The distinction is the quoting regime (continuous vs RFQ), not whether risk gets taken.'],
      ['Flow traders only work the buy-side; market makers only work the sell-side', 'Both sit on the sell-side desk in this context. The buy-side trader is the client placing the order — that is a different role entirely.'],
    ],
    'In US markets, "market maker" most precisely refers to roles with venue-level quoting obligations (listed equities, options). "Flow trader" is the broader OTC analog where pricing happens on RFQ. Both facilitate client flow; the venue rules differ.'),

  q(4380007, 'Career Skills', CHAPTER, 'Riskless principal vs agency',
    'A corporate bond desk receives a client buy order for a name they do not hold. The trader sources the bond from another dealer at 100.10 and immediately sells it to the client at 100.15, never holding the position overnight. Is this principal, agency, or riskless principal — and why does the distinction matter?',
    'Riskless principal — the desk acted as principal (took the position briefly on its book) but had the offsetting trade arranged before commitment, so there was no overnight risk; FINRA reporting and markup disclosure rules treat it differently from agency',
    [
      ['Pure agency, because no inventory was ever held overnight', 'Agency means the dealer never takes the bond onto its own book — it simply routes the order for a commission. Briefly holding the position before the offset, even for seconds, is principal activity, not agency.'],
      ['Full principal, because the dealer used its balance sheet', 'Full principal means the position is warehoused with open price risk. When the offset is pre-arranged and there is effectively no economic risk between the legs, FINRA classifies it as riskless principal, not full principal.'],
      ['The distinction is purely cosmetic — clients pay the same either way', 'The distinction drives markup disclosure rules (TRACE for corporate bonds), capital treatment, and how the trade is reported. It is not cosmetic; juniors who treat it as such get the trade tickets wrong.'],
    ],
    'Riskless principal is the in-between case: the desk uses its book momentarily but has the offset pre-arranged. The category matters for disclosure, reporting, and what shows up to the client on the confirm — getting it right is part of basic execution hygiene.'),

  q(4380008, 'Career Skills', CHAPTER, 'Structurer packaging logic',
    'A corporate treasurer wants to hedge a $200mm receivable in EUR over 18 months but does not want to pay an option premium upfront. The structurer proposes a "zero-cost collar." What is actually being engineered here, and where does the cost go?',
    'A short EUR put and a long EUR call, struck so the premium received from the put offsets the premium paid on the call — cost is paid by giving up upside on the receivable above the call strike and accepting forced conversion above that level',
    [
      ['Two offsetting forwards that net to zero P&L for the client', 'Two offsetting forwards would also net to zero hedging effect — and the client wants a hedge, not nothing. Forwards lock a single rate; a collar gives a range with capped upside and downside, which is the actual product.'],
      ['A single zero-coupon FX bond that converts at maturity', 'There is no such standard product. The structurer builds the payoff out of vanilla options precisely because no single instrument delivers it — and the client needs to understand the option components, not a fictional bundled bond.'],
      ['A genuinely free hedge because no premium is exchanged', '"Zero-cost" refers only to no upfront cash premium — the cost is paid in opportunity (capped upside) and tail risk (the client is short an option). Calling the structure free misrepresents it to the client and the audit trail.'],
    ],
    'Structuring is recombination of vanilla building blocks (forwards, options, zero-coupon bonds) to produce a payoff the client wants. "Zero-cost" almost always means cost paid in optionality rather than cash — and explaining that tradeoff to the client is the structurer\'s job, not a footnote.'),

  q(4380009, 'Career Skills', CHAPTER, 'Middle office vs back office',
    'After a trade is executed, it flows through several internal teams before settlement. What is the cleanest distinction between middle office and back office on a sell-side desk?',
    'Middle office handles trade validation, risk monitoring, P&L production, and limit oversight on a same-day basis; back office handles settlement, confirmations, custody instructions, corporate actions, and reconciliations — the operational completion of the trade',
    [
      ['Middle office is junior front office and back office is non-trading staff', 'That framing misses what each function actually does. Middle office is a distinct risk and control function (not a junior front desk), and back office is operational completion (not "non-trading staff").'],
      ['They are the same function with different names at different banks', 'Most institutional banks deliberately separate the two — segregation of duties between risk monitoring and settlement is a basic operational-risk control. Treating them as interchangeable misses why the split exists.'],
      ['Middle office settles the trade and back office does the analytics', 'That is reversed. Settlement (cash movement, custody) is back office; analytics, P&L attribution, and intraday risk are middle office.'],
    ],
    'Middle office controls and reports risk; back office moves the cash and securities. Both sit outside the trading book but inside the operational chain — segregating them is how the bank avoids a trader marking their own P&L or instructing their own settlement.'),

  q(4380010, 'Career Skills', CHAPTER, 'Execution trader vs sales-trader',
    'An asset manager has its own execution traders who work orders on dealer venues. The sell-side desk also has people called "sales-traders" who interact with this client. What is the difference between an execution trader and a sales-trader?',
    'Execution traders sit on the buy-side and work the firm\'s own orders into the market to minimize impact; sales-traders sit on the sell-side and bridge sales coverage and the bank\'s trading book, helping clients access the desk\'s liquidity and color in real time',
    [
      ['They are the same role just with different titles at different firms', 'They sit on opposite sides of the trade. Buy-side execution trader works the client\'s order; sell-side sales-trader represents the bank\'s liquidity and book. Conflating them collapses the buy-side/sell-side line.'],
      ['Execution traders only handle electronic orders; sales-traders only handle voice', 'The channel split is real but not definitional. Many buy-side execution desks run voice-routed orders, and sales-traders work both voice and electronic. The role distinction is which side of the trade the person sits on.'],
      ['Sales-traders are senior salespeople and execution traders are junior salespeople', 'Both are distinct from the salesperson role. A salesperson covers the relationship; a sales-trader executes the moment-to-moment dialogue around live orders and inventory.'],
    ],
    'The buy-side has execution traders working orders; the sell-side has sales-traders providing the live trading dialogue around those orders. They are counterparties in the workflow, not the same role re-labeled.'),

  q(4380011, 'Career Skills', CHAPTER, 'Equity desk vs FI desk culture',
    'An intern is rotating from cash equities to investment-grade credit and notices the desks feel very different — execution rhythm, client interaction style, and how trades are quoted. What underlying market-structure difference drives most of that cultural gap?',
    'Equities are largely exchange-traded with continuous lit order books and high volume in standardized lots; credit is dealer-intermediated OTC with RFQ pricing and large block sizes — so equities desks lean low-touch and electronic while credit desks lean voice and relationship',
    [
      ['Equity traders are louder by personality and credit traders are quieter', 'Personality stereotypes do not explain the cultural difference — the market structure does. Lit continuous markets and RFQ OTC markets produce different workflows regardless of who is sitting at the desk.'],
      ['Equity is regulated more tightly than credit so the desks behave more carefully', 'Both desks are heavily regulated. The cultural difference comes from venue structure and trade-size norms, not from one desk being more regulated than the other.'],
      ['Credit desks trade smaller and faster than equity desks because bonds are simpler', 'Reversed. Credit blocks are typically much larger and less frequent than equity trades; bonds are the more complex instruments because of the cusip fragmentation and issuer-specific terms.'],
    ],
    'Market structure shapes desk culture more than personality does. Continuous lit equities produce a fast, electronic, low-touch rhythm; RFQ OTC credit produces a voice-heavy, relationship-intensive rhythm. Rotating analysts who name the structural reason adapt faster than ones who notice only the vibe.'),

  q(4380012, 'Career Skills', CHAPTER, 'NYSE vs Nasdaq market structure',
    'A client asks why a particular stock trades on NYSE and another on Nasdaq, and whether the trading mechanics differ. What is the most accurate description of the structural difference between NYSE and Nasdaq today?',
    'Both are now electronic equity exchanges competing for order flow; the historical difference (NYSE specialist-driven auction vs Nasdaq dealer market) has narrowed, but NYSE still uses Designated Market Makers (DMMs) for opening/closing auctions while Nasdaq is fully electronic without floor-equivalent DMMs',
    [
      ['NYSE is a physical floor-based exchange and Nasdaq is purely electronic', 'NYSE still maintains a floor and DMMs for opens and closes, but the vast majority of NYSE trading is electronic. Describing NYSE as "physical" overstates how much of its volume actually flows through the floor today.'],
      ['NYSE trades blue chips and Nasdaq trades tech stocks, and they do not compete', 'Listing pools overlap (Tesla on Nasdaq, Berkshire on NYSE, plenty of tech on NYSE Arca), and both exchanges actively compete for primary listings. The blue-chip/tech split is a stereotype, not a structural rule.'],
      ['Both run identical matching engines and the choice is purely branding', 'They are operationally similar but not identical — opening/closing auction mechanics, fee schedules, and tick rules differ. Saying it is "purely branding" understates the real operational differences in execution.'],
    ],
    'NYSE and Nasdaq both run modern electronic matching engines and compete for order flow; the surviving structural distinction is around auction mechanics and DMMs at NYSE. The bigger market-structure picture is that listed equity flow is now spread across NYSE, Nasdaq, Cboe, IEX, MEMX, and a long list of off-exchange venues.'),

  q(4380013, 'Career Skills', CHAPTER, 'CBOE in the options stack',
    'On the options desk, Cboe is mentioned frequently. What does Cboe primarily run, and where does it sit in the broader US market-structure picture?',
    'Cboe Global Markets operates the largest US options exchanges (Cboe Options Exchange, C2, BZX Options, EDGX Options) and also runs equities exchanges (BZX, BYX, EDGX, EDGA) — so it is a multi-asset exchange group, not just an options venue',
    [
      ['Cboe is purely an options exchange with no equity or futures involvement', 'Cboe has run BZX/BYX/EDGX/EDGA equities exchanges since acquiring BATS in 2017, plus FX and digital-asset venues. Treating it as options-only misses a big chunk of the group.'],
      ['Cboe is the only US options exchange', 'There are multiple US options exchanges — NYSE Arca Options, Nasdaq PHLX, Nasdaq ISE, MIAX, BOX, and the Cboe-family exchanges among them. Cboe is the largest by share, not the only one.'],
      ['Cboe is a dark pool / ATS for options trading', 'Cboe operates lit options exchanges with public order books, not dark pools. Dark pools are ATSs that hide pre-trade quotes; Cboe exchanges publish quotes and report trades to OPRA.'],
    ],
    'Cboe is a multi-asset exchange group with the largest US options franchise but also significant equities, futures (VIX, SPX-related), FX, and crypto venues. On an options desk, "Cboe" usually refers to its options exchanges, but in the broader market-structure conversation it shows up across equities too.'),

  q(4380014, 'Career Skills', CHAPTER, 'ECN definition and role',
    'A junior analyst asks what an ECN is and how it relates to an exchange. What is the most accurate description in current US market structure?',
    'An ECN (Electronic Communication Network) is a type of Alternative Trading System (ATS) that matches buy and sell orders electronically; in the 2000s several ECNs (BATS, Direct Edge, Arca, Inet) registered as full exchanges, so "ECN" today usually refers to the smaller remaining ATSs that operate like mini exchanges',
    [
      ['ECNs are dark pools that hide all pre-trade orders', 'ECNs traditionally publish lit quotes — they are the historical pre-cursor of electronic lit venues. Dark pools are a different subset of ATSs that intentionally hide pre-trade information.'],
      ['ECNs are unregulated trading venues outside SEC oversight', 'ECNs operate as ATSs registered under Reg ATS with SEC oversight. Calling them unregulated is a common but wrong assumption — they are regulated venues, just under the ATS regime rather than the exchange regime.'],
      ['ECN and exchange are synonyms in modern US markets', 'They are related but distinct regulatory categories. Exchanges are SROs with rulemaking authority and listing functions; ECNs/ATSs operate under broker-dealer registration plus Reg ATS, without SRO status.'],
    ],
    'ECN is a historical label for lit electronic matching systems registered as ATSs. The largest ones eventually became exchanges (BATS, Arca, Direct Edge), and the term now mostly survives in FX and as a generic descriptor for electronic ATSs with public quotes.'),

  q(4380015, 'Career Skills', CHAPTER, 'Dark pool / ATS regulation',
    'A client asks whether dark pools operate outside SEC regulation, since they "do not publish quotes." What is the accurate regulatory picture in US markets?',
    'Dark pools are Alternative Trading Systems registered under SEC Regulation ATS and operated by broker-dealers; they do not publish pre-trade quotes but must report executed trades to the consolidated tape, file Form ATS-N with the SEC, and comply with Reg NMS and best execution rules',
    [
      ['Dark pools are unregulated trading venues that bypass SEC oversight', 'Dark pools are regulated under Reg ATS, supervised by the SEC, and must report executed trades to the consolidated tape. The "dark" refers only to pre-trade transparency, not to regulatory absence.'],
      ['Dark pools are illegal in the US and only operate in offshore jurisdictions', 'They are explicitly legal and run by major US broker-dealers and exchange groups (UBS, Goldman, Credit Suisse historically, Sigma X, Liquidnet, IEX as an exchange-with-D-Limit, etc.). Calling them illegal is a basic misconception.'],
      ['Dark pools operate as exchanges but with hidden order books', 'Most dark pools are ATSs, not exchanges — a meaningful regulatory distinction. ATSs are operated by broker-dealers under Reg ATS, while exchanges are SROs with broader rulemaking responsibilities and listing functions.'],
    ],
    'Dark pools are regulated US trading venues — specifically ATSs operated by broker-dealers under Reg ATS. They hide pre-trade quotes but report trades to the tape and live inside the same Reg NMS/best execution framework as exchanges. Calling them unregulated is one of the most common junior-analyst mistakes.'),

  q(4380016, 'Career Skills', CHAPTER, 'Lit vs dark venue tradeoff',
    'A buy-side trader is working a 500,000-share order in a mid-cap name with average daily volume of 2mm shares. They are debating whether to route to lit exchanges or to dark pools. What is the cleanest tradeoff to articulate?',
    'Lit venues offer pre-trade price discovery and tight execution at the NBBO but advertise interest that can be detected by HFT and other participants, causing impact; dark pools hide intent and can find natural counterparties for size, but offer no pre-trade certainty and risk adverse selection from informed flow',
    [
      ['Dark pools always achieve better prices because they have no spread', 'Dark pools typically execute at or inside the midpoint of the lit NBBO, but execution is conditional on a counterparty being there. "Always better" ignores fill probability and adverse selection — the counterparty in a dark pool may know something the buy-side trader does not.'],
      ['Lit venues always have lower impact because they are more efficient', 'Lit venues display the order to the market — at the size in question, that display can move the price against the trader. Lit efficiency is real for small orders but cuts the other way for blocks.'],
      ['The choice is purely about commission cost and the impact is identical', 'Impact is the dominant cost for an order at 25% of ADV — not commission. Treating the decision as a fee comparison misses the entire point of the route choice.'],
    ],
    'Lit vs dark is a tradeoff between price discovery and information leakage. For small orders, lit at the NBBO is usually fine; for orders that are large relative to ADV, dark venues let the trader hide intent at the cost of fill certainty. Most modern execution algos blend both based on real-time conditions.'),

  q(4380017, 'Career Skills', CHAPTER, 'ELP vs traditional market maker',
    'A salesperson hears the firm\'s electronic equities trader refer to Citadel Securities and Virtu as "ELPs" rather than market makers. Is there a meaningful distinction, and if so what is it?',
    'ELP (Electronic Liquidity Provider) is the current label for technology-driven non-bank market makers that quote primarily via algorithms across many venues; the function overlaps with traditional market making but the firms are non-bank broker-dealers running high-throughput, low-latency systems rather than dealer desks at universal banks',
    [
      ['ELPs and traditional market makers are exactly the same and the label is just newer', 'The function overlaps but the institutional shape is different — ELPs are typically non-bank specialist firms (Citadel Sec, Virtu, Jump, Hudson River) without the wider universal-bank infrastructure. Pretending the labels are interchangeable hides which firms actually move volume.'],
      ['ELPs are unregulated proprietary traders that do not have to register with the SEC', 'Citadel Securities, Virtu, and similar ELPs are registered broker-dealers, members of FINRA, and registered market makers on the relevant exchanges. They are heavily regulated, not unregulated prop shops.'],
      ['ELPs only trade options; traditional market makers only trade equities', 'Major ELPs run across cash equities, options, ETFs, FX, Treasuries, and increasingly other asset classes. The asset-class scope of ELPs has expanded steadily — it is not an options-only category.'],
    ],
    'ELP is the modern term for the non-bank, technology-driven market-making firms (Citadel Securities, Virtu, Jump, Hudson River, Two Sigma Securities, Susquehanna). They run a meaningful share of US equity and options volume — knowing the names and the business model matters for understanding who is actually on the other side of retail and institutional flow.'),

  q(4380018, 'Career Skills', CHAPTER, 'HFT firms and their role',
    'A client asks "are HFT firms just front-running my orders?" How should the salesperson describe what HFT firms actually do, with reference to specific firms?',
    'HFT firms (Citadel Securities, Virtu, Jump, Hudson River, Tower, Jane Street on the options side) run high-speed market-making and statistical-arbitrage strategies; they provide a large share of US lit liquidity, earn rebates and spread, and are regulated broker-dealers — not front-runners in the legal sense, though information leakage from displayed orders is a real cost the buy-side mitigates with smart routing',
    [
      ['HFT firms illegally front-run client orders by seeing them before exchanges', 'Front-running has a specific legal definition (trading ahead of a known client order). HFT firms generally do not have access to non-public client orders — they react to public market data extremely quickly. The two things are different, and conflating them creates compliance confusion.'],
      ['HFT firms are unregulated foreign entities that operate outside US rules', 'The major HFT firms are US-registered broker-dealers, FINRA members, and registered market makers on US exchanges. They are heavily regulated, with the SEC and FINRA running active surveillance.'],
      ['HFT firms do not provide liquidity — they only consume it from market makers', 'HFT firms are the market makers in a meaningful share of US lit equity and options volume. Treating them as pure liquidity takers misrepresents who is posting the quotes most clients trade against.'],
    ],
    'HFT firms are mostly registered market makers running automated quoting and arb strategies. They make and take liquidity, earn rebates and spread, and shape the cost of trading for both retail and institutional flow. The legitimate buy-side concern is information leakage from displayed orders, not literal front-running — and that is what smart-order routing and execution algos are built to manage.'),

  q(4380019, 'Career Skills', CHAPTER, 'Prime brokerage relationship',
    'A hedge fund client asks the salesperson about adding the firm as a second prime broker. What does a prime broker actually provide, and why would a hedge fund want more than one?',
    'Prime brokers provide custody of securities, securities lending for shorts, financing (margin lending), trade clearing, technology and reporting, and capital introduction; hedge funds use multiple primes for credit diversification, access to different short inventory, and competitive financing pricing',
    [
      ['Prime brokers just execute equity trades for hedge funds, like a normal broker', 'Execution is a small slice of what prime brokerage does. The core product is financing, custody, securities lending, and clearing — the integrated stack that lets a hedge fund run leverage and shorts efficiently.'],
      ['Prime brokers are exclusive — hedge funds can legally only use one at a time', 'There is no legal exclusivity. Multi-prime is standard at any meaningful hedge fund — the 2008 Lehman experience taught the industry that single-prime concentration is a real counterparty risk.'],
      ['Prime brokers only serve mutual funds and pension funds, not hedge funds', 'Prime brokerage is the canonical hedge-fund product. Mutual funds and pensions typically use custodian banks rather than prime brokers because they do not need the leverage and short-lending stack.'],
    ],
    'Prime brokerage is the integrated stack of custody, financing, securities lending, clearing, and cap intro that lets a hedge fund operate. Multi-prime arrangements exist because hedge funds want financing competition, diversified counterparty risk, and access to different short books. Knowing what the prime actually does is foundational for any client conversation that touches the financing side.'),

  q(4380020, 'Career Skills', CHAPTER, 'DTCC and post-trade clearing',
    'A client confirm shows the trade settling through DTC. What does the DTCC actually do, and where does it sit in the post-trade chain for US equities?',
    'DTCC operates the central clearing and settlement utility for US equities — its NSCC subsidiary nets and clears equity trades, while its DTC subsidiary holds the securities in book-entry form and moves them between participants; virtually all US equity trades settle through DTCC',
    [
      ['DTCC is a private execution venue that competes with NYSE and Nasdaq', 'DTCC is post-trade infrastructure (clearing, settlement, custody), not an execution venue. It is not in the same competitive set as NYSE or Nasdaq — they are upstream of it in the trade lifecycle.'],
      ['DTCC only handles fixed income and not equities', 'DTCC handles both equity and a large share of fixed income clearing (FICC for government and mortgage-backed). Treating it as fixed-income-only ignores its main equities business.'],
      ['DTCC is the SEC\'s internal back office, not a private entity', 'DTCC is an industry-owned utility, owned by its participants (broker-dealers, banks). It is SEC-regulated as a clearing agency but is not part of the SEC.'],
    ],
    'DTCC is the central plumbing of US securities markets. NSCC nets equity trades to reduce settlement volumes; DTC holds securities in book-entry form and moves them between members. When a confirm says "settles via DTC," that is the destination — and knowing the function helps with operational and counterparty conversations.'),

  q(4380021, 'Career Skills', CHAPTER, 'ICE Clear in derivatives clearing',
    'On the derivatives side, "ICE Clear" comes up in conversations about credit and energy. What does ICE Clear do, and how is it different from DTCC\'s role?',
    'ICE Clear refers to ICE\'s family of central counterparty (CCP) clearing houses (ICE Clear US, ICE Clear Europe, ICE Clear Credit) that clear futures, options, and credit default swaps — they novate trades and become the counterparty to both sides, in contrast to DTCC which clears and settles cash securities',
    [
      ['ICE Clear is just a back office for the ICE exchanges, not a real clearing house', 'ICE Clear entities are SEC- and CFTC-regulated CCPs that take on counterparty risk via novation. They are far more than back office — they are systemically important financial market utilities.'],
      ['ICE Clear and DTCC do exactly the same thing for different products', 'Functionally related but structurally different. ICE Clear novates and acts as CCP for futures/options/CDS; DTCC nets and settles cash securities. CCP risk profile (margin, default fund) is quite different from cash CSD/clearing.'],
      ['ICE Clear only clears European derivatives and has no US presence', 'ICE Clear US and ICE Clear Credit are US-domiciled CCPs. There is also ICE Clear Europe, but the US presence is substantial and includes the dominant CDS clearing franchise.'],
    ],
    'ICE Clear is the CCP family inside ICE that novates derivatives trades and stands between buyers and sellers. CCP clearing is structurally different from cash-securities clearing at DTCC — knowing both is part of understanding how the post-trade infrastructure of US markets fits together.'),

  q(4380022, 'Career Skills', CHAPTER, 'T+1 settlement transition',
    'A new analyst asks what changed when "T+1 went live" in 2024. What was the change, and what does it mean operationally for the desk and its clients?',
    'In May 2024 the SEC moved the standard US equity, corporate bond, and municipal bond settlement cycle from T+2 to T+1 — trades now settle one business day after execution; the operational impact lands on middle and back office (faster affirmation, FX funding tighter for non-USD investors, securities lending recalls compressed) more than on front-office workflow',
    [
      ['T+1 means same-day settlement (T+0) became the standard in US equities', 'T+1 is the day *after* trade date, not same day. T+0 settlement does not exist for the standard US equity market today — it is occasionally discussed as a future direction but is not the current rule.'],
      ['T+1 only applied to ETFs and not to single-name equities', 'The 2024 SEC rule (Rule 15c6-1 amendment) applied to most US equities, ETFs, corporate bonds, and municipal bonds. The scope is broad, not ETF-only.'],
      ['T+1 was a European reform and does not affect US markets', 'It is a US reform implemented by the SEC effective May 2024. The EU and UK are moving toward T+1 themselves but on later timelines. Calling it European is reversed.'],
    ],
    'T+1 is the current US standard equity/bond settlement cycle, in force since May 2024. The biggest operational impact lands on funding (especially cross-border), affirmation timing, and securities lending — not on what the trader does at the moment of execution. Knowing this is basic 2024+ market-structure literacy.'),

  q(4380023, 'Career Skills', CHAPTER, 'Limit vs market order',
    'A client wants to "buy 10,000 shares at no worse than $50." What order type matches that instruction, and what is the tradeoff vs a market order?',
    'A limit buy at $50 — it will only execute at $50 or better; the tradeoff is fill certainty (a market order fills immediately at the prevailing offer, while the limit may not fill at all if the stock moves above $50)',
    [
      ['A market order, because the client specified a price', 'A market order does not respect a price cap — it accepts whatever fill the market gives. The client\'s "no worse than $50" condition is a limit instruction by definition.'],
      ['A stop order, because the client wants to control the price', 'A stop order triggers a market order when a stop price is touched — it does not cap the execution price the way a limit does. Stops are typically used to exit positions, not to cap entry price.'],
      ['Either a market or limit, since both will respect the price', 'A market order does not respect any price cap. Confusing market with limit is a basic order-type error and the kind of confirm mistake that an analyst can make exactly once.'],
    ],
    'Limit caps the price and risks no fill; market guarantees the fill and accepts whatever price prevails. Translating client instructions into the right order type is one of the most basic execution skills, and the limit/market distinction is the foundation.'),

  q(4380024, 'Career Skills', CHAPTER, 'IOC and FOK orders',
    'A sales-trader explains a client used "IOC" and another used "FOK" for similar block orders. What do these two order qualifiers mean and when does each fit?',
    'IOC (Immediate-Or-Cancel) executes whatever portion can be filled immediately and cancels the rest; FOK (Fill-Or-Kill) executes the entire order immediately or cancels all of it — IOC fits when partial fills are acceptable, FOK fits when an all-or-nothing fill is needed',
    [
      ['IOC and FOK are the same — both mean "execute now or cancel"', 'The all-or-nothing distinction matters. IOC accepts partial fills; FOK does not. Mixing them up changes how much of the order actually gets done.'],
      ['IOC means good for the day; FOK means good til canceled', 'Day and GTC are time-in-force qualifiers, but IOC and FOK are immediate-execution qualifiers, not multi-day instructions. The two systems are different axes — confusing them is a common junior mistake.'],
      ['IOC is for buy orders only; FOK is for sell orders only', 'Both qualifiers work for either side. The buy/sell distinction is independent of how immediacy and partial-fill rules are specified.'],
    ],
    'IOC and FOK are both immediate-execution qualifiers — IOC takes whatever you can get right now and cancels the rest, FOK is all-or-nothing in one shot. Both are useful when the client wants execution now without resting on the book, but the partial-fill rule matters.'),

  q(4380025, 'Career Skills', CHAPTER, 'GTC order mechanics',
    'A retail client asks about leaving a GTC order open. What does GTC mean, and what are the practical limits brokers typically impose?',
    'Good-Til-Canceled — the order stays active across multiple trading sessions until filled or canceled; in practice, most brokers cap GTC duration (commonly 60–90 days at retail brokers, varies by venue) and exchanges may handle GTC differently across day/extended hours sessions',
    [
      ['GTC means the order lasts forever until manually canceled with no broker-imposed limit', 'In practice, brokers do impose limits — typically 60–90 days at retail and varying at institutional venues. "Forever" is not how GTC actually works on US venues today.'],
      ['GTC orders execute immediately at the next available price', 'That is more like a market or IOC instruction. GTC is a time-in-force qualifier saying the order persists, not an immediate-execution qualifier.'],
      ['GTC only applies to limit orders on options and not on equities', 'GTC is available on equity orders at virtually all US brokers and exchanges, not options-only. The order types and time-in-force qualifiers are largely orthogonal.'],
    ],
    'GTC keeps an order alive across sessions, but in practice brokers cap duration and there are corporate-action and session rules that can reset or cancel resting GTCs. Knowing both the concept and the operational caps avoids surprises when a long-standing order is suddenly not where the client expected it.'),

  q(4380026, 'Career Skills', CHAPTER, 'Order book — bid, ask, depth',
    'A client asks the desk to "show me the depth in XYZ." What is the trader looking at, and what does "depth" mean operationally?',
    'The trader is looking at the order book — the resting buy and sell orders at each price level, on each lit venue and aggregated; "depth" describes the size available at the top of book and at progressively worse prices, indicating how much can be executed without moving the price',
    [
      ['Depth means total daily volume in the stock', 'Daily volume is a backward-looking flow metric; depth is the forward-looking, point-in-time size available on the resting book. They are related but distinct.'],
      ['Depth means the bid-ask spread', 'Spread is the gap between best bid and best offer. Depth is the size at those levels (and beyond). A stock can have a tight spread and very little depth, or a wide spread with substantial depth — they measure different things.'],
      ['Depth means the price impact of a market order', 'Price impact is the consequence of trading against the depth. Depth is the input; impact is the output. Treating them as the same misses why depth matters as a pre-trade read.'],
    ],
    'Depth is the resting size at each price level on the book — the answer to "how much can I trade right now without moving the price too much." It is the foundation of pre-trade impact analysis and one of the things experienced traders read instinctively before sending size.'),

  q(4380027, 'Career Skills', CHAPTER, 'NBBO under Reg NMS',
    'Reg NMS is referenced constantly in equity market structure conversations. What is the NBBO, and what does Reg NMS require with respect to it?',
    'NBBO = National Best Bid and Offer, the highest displayed bid and lowest displayed offer across all protected lit exchange quotes; Reg NMS Rule 611 (Order Protection Rule) prohibits a venue from executing a trade at a price worse than the NBBO when a protected quote at a better price is available, effectively linking the lit venues into a single national market',
    [
      ['NBBO is just the bid-ask spread at the primary listing exchange (NYSE or Nasdaq)', 'NBBO aggregates across all protected lit exchanges, not just the primary listing venue. Treating it as a single-exchange concept misses the entire point of Reg NMS, which is to create one national market across many venues.'],
      ['Reg NMS requires dark pools to publish quotes equal to or better than the NBBO', 'Dark pools do not publish pre-trade quotes — that is what makes them dark. Reg NMS protects displayed quotes on lit exchanges; dark pools are constrained on executions (price improvement, trade-through), not pre-trade display.'],
      ['NBBO is calculated once a day and applies for the full session', 'NBBO is a real-time, continuously-updated price across the trading day. A daily snapshot would defeat the purpose of an order-protection rule.'],
    ],
    'NBBO is the national best price for displayed liquidity in real time, and Reg NMS\'s Order Protection Rule is what prevents a venue from trading through it. Understanding NBBO is foundational because virtually every order-routing decision, best-execution review, and Reg NMS compliance check sits on top of it.'),

  q(4380028, 'Career Skills', CHAPTER, 'Price-time priority on lit books',
    'A client asks why their resting limit order did not execute when "the market traded at their price." What is the most likely structural explanation, given how lit exchange order books work?',
    'Most US lit exchange books use price-time priority — orders at the best price are filled in the order they were posted, and the client\'s order may have been later in the queue than other orders at the same price; trades at the price level may have been filled against earlier-posted orders before reaching the client\'s',
    [
      ['Limit orders execute randomly across all orders at the same price', 'Random allocation is not how most US lit books work. Price-time priority is the default for protected lit quotes — first in queue at the best price gets filled first.'],
      ['The trade did not really happen at that price and the client misread the print', 'Trade prints are reported to the consolidated tape and are auditable. Telling the client they misread the print without checking the time and venue of the print is the wrong instinct.'],
      ['The trade was on a dark pool so it did not affect the client\'s lit limit', 'If the trade was on a dark pool, that itself explains why a lit limit did not fill — dark trades do not interact with lit resting orders unless the dark venue is checking against the lit book. But the broader point about price-time priority on lit books still matters for understanding the workflow.'],
    ],
    'On most US lit exchange books, price-time priority decides who fills first at any given price level. Resting orders earlier in the queue get filled before later ones, so trades can print at the limit price without filling a later-arriving resting order. (Some venues use pro-rata or hybrid models, especially in options — but price-time is the default mental model for cash equities.)'),

  q(4380029, 'Career Skills', CHAPTER, 'Maker-taker fee model',
    'An equity exchange charges takers $0.0030 per share and pays makers a rebate of $0.0025 per share. How does this fee structure shape order routing, and which firms benefit most?',
    'Maker-taker pays passive liquidity providers (makers) and charges aggressive liquidity takers; it incentivizes posting resting limit orders rather than crossing the spread, which benefits market makers and ELPs whose business model is providing displayed liquidity, and it affects best-execution analysis because gross spread is not the only execution cost',
    [
      ['Maker-taker pays the buyer and charges the seller regardless of order behavior', 'It is about passive vs aggressive behavior, not buy vs sell. A resting buy at the bid is a maker; a buy that crosses the spread to lift the offer is a taker. Direction is independent.'],
      ['Maker-taker is illegal under Reg NMS and most exchanges have abandoned it', 'Maker-taker is the dominant fee model on US equity exchanges and is explicitly permitted under Reg NMS\'s access fee cap. Calling it illegal is a basic factual error.'],
      ['Maker-taker fees apply only to retail brokers, not institutional traders', 'Maker-taker is the exchange fee schedule that applies to all member orders, retail or institutional. Retail brokers may pass the fees through differently, but the underlying schedule is the same.'],
    ],
    'Maker-taker pays for displayed liquidity and charges for taking it, which is why ELPs and market makers obsess over rebate tiers and why best-execution analysis has to look at gross spread plus venue fees and rebates, not just headline spread. The structure shapes routing decisions across the whole US lit market.'),

  q(4380030, 'Career Skills', CHAPTER, 'Inverted maker-taker venues',
    'Some exchanges (Cboe BYX, Nasdaq BX, EDGA) use an "inverted" maker-taker fee schedule. What does that mean structurally and which kinds of orders prefer those venues?',
    'Inverted (or "taker-maker") venues pay the taker a rebate and charge the maker a fee — the opposite of standard maker-taker; aggressive liquidity-taking orders (especially marketable institutional flow trying to capture rebates while removing liquidity) prefer inverted venues, and they tend to fill more quickly at the cost of providing rebates to passive sides',
    [
      ['Inverted maker-taker means the rebate and fee are both inverted to zero so trading is free', 'Both sides still pay or receive — the *direction* is inverted. The take side gets the rebate; the make side pays the fee. Free trading is not what inverted means.'],
      ['Inverted venues are dark pools that pay rebates to hidden orders', 'Inverted maker-taker is a fee model on lit exchanges (BYX, BX, EDGA), not on dark pools. Conflating the two confuses pre-trade transparency with fee structure.'],
      ['Inverted maker-taker is banned under Reg NMS as it violates trade-through rules', 'Inverted venues are SEC-registered exchanges operating under Reg NMS. Reg NMS\'s access fee cap (currently $0.0030 per share) constrains the rebate side, but the inverted model itself is allowed.'],
    ],
    'Inverted maker-taker flips the rebate direction, paying the aggressor and charging the passive side. It exists to attract marketable order flow that wants the speed of crossing the spread and the bonus of a take rebate. It is one of the reasons US equity routing is so complex — fee schedules differ by venue and shape which venue an algo prefers in any given microstructure context.'),

  q(4380031, 'Career Skills', CHAPTER, 'PFOF — what it actually is',
    'A retail-broker client asks the desk to explain Payment for Order Flow. What is PFOF, in plain language, and who pays whom?',
    'PFOF is the practice of retail brokers (Robinhood, Schwab on some flow, TD/Ameritrade historically) routing their customer marketable orders to wholesale market makers (Citadel Securities, Virtu, Susquehanna) which fill those orders and pay the broker a small per-share fee in return — the wholesaler captures spread plus the value of trading against retail flow that tends to be less informed than institutional flow',
    [
      ['PFOF is an illegal kickback under SEC rules and Robinhood was banned from using it', 'PFOF is legal in the US (banned in the UK and parts of the EU but not in the US). Robinhood was fined for disclosure failures around PFOF but was not banned from the practice. Calling it illegal is a very common but factually wrong assumption.'],
      ['PFOF is when retail brokers pay exchanges to display their customer orders', 'PFOF goes the other way — wholesalers pay brokers for the order flow. Reversing the payment direction inverts the entire economic story.'],
      ['PFOF is the commission that retail clients pay on each trade', 'PFOF is paid by wholesalers to brokers — the retail customer does not see it directly on their statement. It is what funded "zero-commission" trading; the customer\'s execution cost shows up in spread, not in a visible commission line.'],
    ],
    'PFOF is the wholesaler-to-broker payment that underwrites "zero commission" retail trading. It is legal in the US, regulated, and disclosed under SEC Rule 606 reports — but the cost shows up in spread rather than commission, which is why best-execution analysis matters. Citadel Securities and Virtu are the largest US wholesalers and the names that come up in any PFOF conversation.'),

  q(4380032, 'Career Skills', CHAPTER, 'PFOF legality and disclosure',
    'After the Gamestop episode in 2021, a client claims PFOF is "obviously illegal and the SEC should ban it." What is the actual US regulatory position on PFOF, and where are the live policy debates?',
    'PFOF is legal in the US under SEC and FINRA rules, subject to best-execution obligations (FINRA Rule 5310) and disclosure obligations (SEC Rule 606 quarterly disclosures, Rule 607 customer disclosures); the SEC has actively debated reforms (Rule 615 Order Competition Rule proposal, transparency enhancements) but as of current rules it remains permitted with conditions',
    [
      ['PFOF was banned by the SEC after Gamestop and is no longer practiced in the US', 'PFOF has not been banned in the US. The SEC proposed reforms (the Order Competition Rule among others) but did not ban PFOF outright. Robinhood, Schwab, and others continue to receive PFOF payments under current rules.'],
      ['PFOF is legal because it has no real cost to retail customers', 'Whether PFOF costs retail customers is contested — the SEC and academic studies have produced mixed evidence. The right framing is "legal under best-execution and disclosure rules," not "legal because costless." The cost debate is exactly what the policy debate is about.'],
      ['PFOF is regulated by the CFTC since it involves market-maker compensation', 'PFOF in US equities is regulated by the SEC and FINRA, not the CFTC. CFTC regulates futures and swaps, not cash equity order routing.'],
    ],
    'PFOF is legal in the US, subject to best-execution duties and Rule 606/607 disclosure. The 2022–2024 SEC equity-market-structure reform proposals included the Order Competition Rule and tick/access-fee changes, some of which were finalized and some of which remain pending. Knowing the actual status (legal, regulated, debated) rather than the soundbite version (banned, illegal, free) is what credible client conversations require.'),

  q(4380033, 'Career Skills', CHAPTER, 'Best execution under FINRA 5310',
    'A broker-dealer\'s compliance team references "5310 review." What does FINRA Rule 5310 require with respect to best execution, and how does it apply across order types?',
    'FINRA Rule 5310 requires broker-dealers to use reasonable diligence to ascertain the best market for a customer order and execute it on terms as favorable as possible given prevailing market conditions — the rule covers price, speed, size, and likelihood of execution, and applies whether the broker is acting as agent or principal; firms must conduct regular and rigorous reviews of execution quality and document them',
    [
      ['Rule 5310 requires the broker to always execute at the NBBO with no exceptions', 'Best execution is a "reasonable diligence" standard that considers multiple factors (price, speed, size, likelihood, market conditions), not a rigid NBBO-only rule. NBBO is a key data point but not the only one — large orders or illiquid names may legitimately execute outside the NBBO.'],
      ['Rule 5310 only applies to retail orders and not institutional flow', 'The rule applies to both retail and institutional customer orders. The "regular and rigorous" review process and the factors considered may differ, but the underlying best-execution duty does not vanish for institutional clients.'],
      ['Rule 5310 was repealed when PFOF disclosures were enhanced', 'Rule 5310 remains in force and is one of the central rules constraining how PFOF can be received — the broker still has to demonstrate best execution even when receiving PFOF. The rules complement each other; one did not replace the other.'],
    ],
    'FINRA Rule 5310 is the operational best-execution rule on US broker-dealers, framed as reasonable diligence across multiple factors. It is the backbone of any execution-quality review, the binding constraint on PFOF arrangements, and the document trail compliance and the SEC look at when execution quality is questioned.'),

  q(4380034, 'Career Skills', CHAPTER, 'Buy-side vs sell-side roles',
    'A new analyst is confused about why some firms are called "buy-side" and others "sell-side." What is the cleanest operational definition of each, with examples?',
    'Sell-side firms (Goldman, Morgan Stanley, JPM, Citi) intermediate markets — they make markets, distribute research, underwrite, execute, and provide financing to institutional clients; buy-side firms (Fidelity, BlackRock, Bridgewater, Citadel) manage capital for end investors — they consume sell-side services and make portfolio decisions',
    [
      ['Buy-side firms only buy securities and sell-side firms only sell', 'Both sides buy and sell. The label is about the role in the market: sell-side intermediates and sells services to clients; buy-side manages money for end investors. Direction of trade is not the distinction.'],
      ['Sell-side firms are public companies and buy-side firms are private', 'Plenty of buy-side firms are public (BlackRock, T. Rowe Price, State Street). Plenty of sell-side firms are private historically (Goldman before 1999) or now part of larger public groups. Public/private is not the distinguishing line.'],
      ['Sell-side firms only serve retail clients; buy-side firms only serve institutions', 'Sell-side firms serve both retail (through brokerage) and institutions (through capital markets). Buy-side firms include retail-facing mutual fund managers and institutional hedge funds. The line is about role in the market, not client base.'],
    ],
    'Sell-side = intermediaries who make markets, advise, and execute. Buy-side = asset managers who invest capital. The salesperson sits on the sell-side and covers buy-side clients; the trader sits on the sell-side and provides liquidity to buy-side desks. Getting the two labels straight is the most basic vocabulary on a trading floor.'),

  q(4380035, 'Career Skills', CHAPTER, 'Hedge fund vs mutual fund vs pension client',
    'Three different buy-side clients call the desk in the same morning — a long/short equity hedge fund, an actively managed mutual fund, and a corporate pension fund. How should the salesperson expect their flow profile and trading preferences to differ?',
    'Hedge fund: smaller AUM but higher turnover, leverage and shorts, tactical trades, willing to use derivatives. Mutual fund: large AUM with daily liquidity constraint, long-only typically, lower turnover, sensitive to market impact on large positions. Pension fund: largest AUM, very long horizon, infrequent rebalancing, focused on liability matching and low-cost beta',
    [
      ['All three trade roughly the same way — the salesperson does not need to differentiate', 'Their mandates, leverage rules, and turnover profiles are very different. Treating them the same is a way to lose the trust of all three — each expects a salesperson who knows how their book actually runs.'],
      ['Hedge funds always do the most volume; pension funds never trade', 'Volume per trade and turnover are different. Pension funds trade infrequently but in massive size when they do; hedge funds trade more often but in smaller per-trade clips. "Never trade" is wrong about pensions even if turnover is low.'],
      ['Mutual funds always use the most leverage; hedge funds always go long-only', 'Reversed. Mutual funds are typically constrained on leverage by 1940 Act limits and most equity mutual funds are long-only or long-biased. Hedge funds are the category that uses leverage and shorts most heavily.'],
    ],
    'Buy-side client types differ on AUM, mandate, leverage, turnover, and liquidity needs. Hedge funds, mutual funds, and pensions sit in different parts of that map, and the salesperson who knows where each client sits picks better ideas to bring them and earns more trust over time.'),

  q(4380036, 'Career Skills', CHAPTER, 'Pension funds as clients',
    'A salesperson covers a state pension fund with $80bn AUM. What is the typical mandate and trading rhythm of a large public pension client, and what does it imply about the sales conversation?',
    'Long horizon (decades) matched to retiree liabilities, broad asset allocation across equities, fixed income, real assets, and private markets, generally low turnover with infrequent rebalancing trades — the sales conversation tends to focus on large-block execution at low impact, fixed income inventory, and macro/strategy color rather than fast tactical ideas',
    [
      ['Pensions trade like hedge funds, just with bigger size', 'Mandate horizon and turnover are completely different. Pensions rarely trade in and out of positions on tactical signals; their flow is dominated by periodic rebalancing and asset-allocation shifts. Pitching them like a hedge fund will land badly.'],
      ['Pensions only invest in US Treasuries and not in equities or credit', 'Public pensions hold diversified portfolios across equities, credit, real estate, infrastructure, and private equity — Treasuries are one slice, not the whole book. Treating them as Treasury-only ignores most of what the fund actually does.'],
      ['Pensions are retail clients and do not use sell-side trading desks', 'Public and corporate pensions are major institutional clients of sell-side desks, especially for fixed income execution and large-block equity trades. They are firmly in the institutional client category.'],
    ],
    'Pensions are long-horizon, liability-driven institutional investors with large AUM and low turnover. The covering salesperson focuses on block execution, asset-class color, and strategy-level conversation — not on the tactical trade ideas that a hedge fund would care about.'),

  q(4380037, 'Career Skills', CHAPTER, 'Sovereign wealth funds as clients',
    'The desk picks up coverage of a Middle Eastern sovereign wealth fund. What characterizes SWFs as a client category, and how does coverage differ from a typical pension or hedge fund relationship?',
    'SWFs are state-owned investment pools (e.g., ADIA, GIC, Norges Bank Investment Management, Saudi PIF) typically with very large AUM, long horizons, broad global mandates spanning public and private markets, and strategic objectives that can include policy considerations alongside returns — coverage tends to be senior, multi-product, and relationship-intensive',
    [
      ['SWFs are exactly the same as pension funds with a different name', 'Mandate scope differs — SWFs often have broader strategic objectives (industrial policy, currency reserve management, sovereign-level diversification) that pure pension funds do not have. The investment scope, governance, and relationship style differ accordingly.'],
      ['SWFs are private hedge funds based offshore', 'SWFs are state-owned investment vehicles, not private hedge funds. Norges Bank Investment Management is run by the Norwegian central bank; GIC is owned by the Singapore government; ADIA is part of the Abu Dhabi government. They are public-sector entities.'],
      ['SWFs only invest in their home country and do not engage with US sell-side desks', 'Major SWFs are some of the most active global investors and significant clients of US sell-side desks across equities, fixed income, and alternatives. Home-country-only is the wrong picture.'],
    ],
    'Sovereign wealth funds are state-owned, very-long-horizon, multi-asset pools that often touch policy as well as returns. Coverage is typically senior, multi-product, and built over years — knowing the largest names (ADIA, GIC, Norges, KIA, PIF, Mubadala, CIC, Temasek) and their mandates is part of basic institutional-client literacy.'),

  q(4380038, 'Career Skills', CHAPTER, 'Asset managers — Vanguard, BlackRock, State Street',
    'The Big Three asset managers — Vanguard, BlackRock, and State Street — together manage well over $20 trillion. What do they actually do, and what does that scale imply for sell-side coverage?',
    'They are predominantly index and ETF asset managers running passive and active mandates for institutional and retail end investors; the scale means very large but typically low-frequency rebalancing flows, deep relationships across the sell-side for block execution and ETF creation/redemption, and significant influence on corporate governance through their voting power',
    [
      ['They are hedge funds that take leveraged directional positions', 'They are predominantly long-only asset managers with passive and active strategies — not leveraged hedge funds. Treating BlackRock\'s iShares franchise as a hedge fund is a category error.'],
      ['They are sell-side broker-dealers that compete with Goldman and JPM', 'They are buy-side asset managers, not sell-side intermediaries. They use sell-side desks for execution; they do not make markets to clients in the way Goldman or JPM do.'],
      ['They are small boutiques with concentrated holdings in a few names', '"Big Three" because they are anything but small — Vanguard alone manages roughly $9 trillion. Concentrated boutiques is the opposite of what they are.'],
    ],
    'Vanguard, BlackRock, and State Street are the dominant passive asset managers — central clients for ETF flow, block equity execution, and increasingly fixed-income too. Their scale shapes sell-side coverage: relationship is long-term, execution-quality focused, and voting/governance considerations sit alongside trading on the desk\'s mind.'),

  q(4380039, 'Career Skills', CHAPTER, 'Corporate treasury hedging',
    'A US industrial company with $4bn in EUR revenue calls the FX desk to discuss hedging. What does corporate treasury typically need from a sell-side desk, and how does that differ from a hedge fund FX client?',
    'Corporate treasury hedges operational exposures (revenue, costs, balance-sheet items) to reduce earnings volatility, typically with vanilla forwards or simple option structures over horizons matched to forecast cash flows; the relationship is advisory and longer-cycle, vs a hedge fund that takes speculative directional positions and trades intraday',
    [
      ['Corporate treasuries take speculative FX positions to generate trading P&L', 'Corporate treasury is generally constrained by board-approved hedging policies to reduce risk, not to speculate. A treasurer running speculative positions would usually be outside policy.'],
      ['Corporate treasuries do not use sell-side desks — they hedge through internal banking', 'Major corporates have substantial sell-side FX relationships for execution, structuring, and credit lines. Internal banking is an additional layer at the largest groups but does not replace external desk relationships.'],
      ['Corporate treasuries only trade interest-rate swaps and never FX', 'Corporate treasury covers FX, rates, commodity, and credit exposures depending on the business — multinational industrials are major FX hedgers. Limiting them to rates only ignores most of the book.'],
    ],
    'Corporate treasury is a long-cycle hedging client driven by operational exposure and earnings volatility, not by speculative views. The desk\'s job is advisory — picking the right hedge instrument, sizing it against forecast cash flows, and pricing it competitively. It is one of the most relationship-driven flow categories in FX and rates.'),

  q(4380040, 'Career Skills', CHAPTER, 'Market-maker P&L sources',
    'A junior asks how a market-making desk actually makes money. What are the main P&L drivers, and which one is structural vs which is residual?',
    'Three main drivers: (1) capturing the bid-ask spread on round-trip flow, (2) inventory P&L from holding positions between facilitations (can be positive or negative), and (3) hedging cost and basis P&L from offsetting risk in correlated instruments. Spread capture is the structural earnings; inventory and hedge P&L are residuals that can swing either way',
    [
      ['Market makers make money only on directional bets on the market', 'Directional inventory P&L is one component but is not the primary earnings driver of a flow market-making desk — spread capture across high-volume facilitation is the engine. Calling it all directional misses the structural business.'],
      ['Market makers earn purely from commission on each trade', 'In a principal market-making business, the desk does not charge commission per trade — the spread *is* the commission, embedded in the price the client receives. Commission-based businesses are a different model (pure agency brokerage).'],
      ['Market makers cannot lose money because they are always hedged', 'Hedges are imperfect (basis risk, gamma, liquidity gaps in the hedge instrument) and inventory is rarely instantly flatten-able. Market makers absolutely can lose money — risk limits, VaR, and stress testing exist precisely because they can.'],
    ],
    'Market-making P&L decomposes into spread capture (the structural earnings), inventory carry P&L (residual, sign-flipping), and hedge basis P&L (residual). Understanding the three components is what lets you ask the right questions on a tough P&L day — "did we lose the spread, the inventory, or the hedge?" is the first decomposition.'),

  q(4380041, 'Career Skills', CHAPTER, 'High-touch vs low-touch execution',
    'A buy-side trader can route an equity order through the desk\'s high-touch sales-trader or through a low-touch algorithmic execution channel. What is the cleanest distinction, and what does each typically cost the client?',
    'High-touch: human sales-trader works the order, providing color, finding natural blocks, and committing capital when needed — typically priced as commission in cents per share. Low-touch: client routes electronically to an execution algo (VWAP, TWAP, POV, IS) with little human intervention — typically priced in basis points or a much smaller cents-per-share figure',
    [
      ['High-touch and low-touch are the same and cost the same', 'They are pricing-tier and service distinct. High-touch carries higher per-share fees because a human is committing time and the desk may commit capital; low-touch is automated and priced as commodity execution.'],
      ['Low-touch always achieves better execution because algorithms are faster', '"Better" depends on order size and complexity. For small, liquid trades, low-touch is usually preferred for cost and speed; for large blocks, illiquid names, or news events, human high-touch judgment and capital can produce better outcomes. Neither dominates universally.'],
      ['High-touch is only available to retail clients while low-touch is only for institutions', 'Reversed. Retail clients overwhelmingly use low-touch automated execution (through their broker\'s router); institutional clients are the ones who actually use high-touch sales-traders when block size or news flow makes human handling worth the cost.'],
    ],
    'High-touch vs low-touch is the human-vs-algorithm split in equity execution. High-touch costs more per share but adds judgment and capital commitment; low-touch is cheaper and faster but offers no human nuance. Most large buy-side firms use both routinely depending on order characteristics.'),

  q(4380042, 'Career Skills', CHAPTER, 'VWAP, TWAP, POV, and IS algos',
    'A buy-side trader asks the desk to "run it as Implementation Shortfall, not VWAP" on a 200,000-share order. What is the difference between these algo families, and when does each fit?',
    'VWAP tracks the volume-weighted average price across the day — useful as a benchmarked, slow execution. TWAP slices evenly over time — useful when the trader wants a constant rate independent of volume. POV (Percentage of Volume) participates as a fixed share of market volume — adapts to liquidity but signals participation. IS (Implementation Shortfall) trades faster early to minimize slippage vs the decision price — fits when alpha is decaying and time-to-completion matters',
    [
      ['VWAP and IS are the same algorithm with different names', 'They optimize against different benchmarks. VWAP minimizes deviation from the day\'s volume-weighted average; IS minimizes deviation from the price at decision time. The aggression and shape of the schedule differ accordingly.'],
      ['POV trades evenly over time regardless of market volume', 'TWAP trades evenly over time; POV trades as a percentage of market volume, adapting to actual liquidity. Confusing the two is a common junior mistake.'],
      ['Algos are deterministic and always achieve the benchmark exactly', 'Algos have slippage — they aim at a benchmark but execute in a stochastic market. Treating algo execution as deterministic misses the entire post-trade TCA conversation.'],
    ],
    'VWAP, TWAP, POV, and IS are the four core execution-algo families and they optimize against different benchmarks. VWAP and TWAP are passive schedules; POV is volume-adaptive; IS is alpha-loss-minimizing and tends to trade more aggressively early. Knowing which fits which order is what the buy-side execution trader is actually trained on.'),

  q(4380043, 'Career Skills', CHAPTER, 'Series 7 / 63 / 79 licensing',
    'An incoming S&T analyst is told they will need to take "Series 7 and 63" before they can speak to clients, and that an investment-banking analyst at the same firm needs "Series 79 and 63 instead." What do each of these exams actually cover?',
    'Series 7 (General Securities Representative) qualifies the holder to recommend and trade most securities products — required for S&T sales and traders. Series 63 (Uniform Securities Agent State Law) covers state securities regulations. Series 79 (Investment Banking Representative) is a narrower license limited to investment banking activities. S&T typically needs 7+63; IB typically needs 79+63',
    [
      ['Series 7 and Series 79 are identical and interchangeable', 'They cover different product scopes. Series 7 is the broad general securities license; Series 79 is the narrower IB-only license. An S&T trader on a Series 79 alone could not legally trade most securities products.'],
      ['Series 63 is a federal exam administered by the SEC', 'Series 63 is administered by FINRA but covers state-level securities regulations (Uniform Securities Act). It is not a federal SEC exam — the state-law focus is the entire point.'],
      ['Licensing is no longer required for institutional-only desks', 'FINRA licensing is required for registered representatives regardless of whether the desk serves institutions or retail. Some products and roles have narrower license scopes (Series 79 for IB), but the general requirement does not disappear for institutional desks.'],
    ],
    'Series 7 + 63 is the S&T standard; Series 79 + 63 is the IB analog. SIE (Securities Industry Essentials) is a prerequisite for both that most new entrants take first. Knowing which license covers which activity is the first thing compliance asks new joiners, and it shapes which products they can legally talk to clients about.'),

  q(4380044, 'Career Skills', CHAPTER, 'Multi-dealer platforms — Tradeweb, Bloomberg, MarketAxess',
    'A buy-side trader sends a corporate bond RFQ on MarketAxess and a Treasury order on Tradeweb. How do these multi-dealer platforms work, and how do they fit alongside voice trading and exchanges?',
    'Multi-dealer platforms (MDPs) host RFQ workflows where the buy-side trader requests competing quotes from multiple dealers simultaneously — Tradeweb for rates and credit, Bloomberg (BMTF) across many fixed-income products, MarketAxess for credit; they sit alongside voice trading (still important for large blocks and complex structures) and operate as ATSs or SEFs depending on product, complementing rather than replacing dealer relationships',
    [
      ['MDPs are exchanges that match orders anonymously, like NYSE for stocks', 'MDPs typically run RFQ workflows where the buy-side names the dealers it wants to ask (counterparty disclosed) rather than central limit order books. Some MDP venues do offer CLOB protocols for specific products, but the dominant pattern in credit and rates is RFQ, not anonymous order matching.'],
      ['MDPs are unregulated venues that operate outside SEC and CFTC oversight', 'Tradeweb operates as a registered SEF (for swaps) and ATS (for fixed income); MarketAxess operates as an ATS and broker-dealer. They are regulated, not outside the regulatory perimeter.'],
      ['MDPs have completely replaced voice trading in fixed income', 'Voice still handles large blocks, complex structures, and illiquid names. MDP volume has grown significantly but the larger or harder trades still flow through voice — the two coexist rather than the platform replacing the dealer relationship.'],
    ],
    'Tradeweb, Bloomberg, and MarketAxess are the dominant fixed-income MDPs, hosting RFQ workflows that put multiple dealers in competition on a buy-side order. They are regulated as ATSs/SEFs/broker-dealers, complement rather than replace voice trading, and reshape how the sales-trader-to-client conversation happens — especially in liquid credit and on-the-run rates where electronic RFQ is now the default channel.'),
]

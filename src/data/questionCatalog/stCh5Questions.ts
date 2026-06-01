import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// SALES & TRADING CHAPTER 5 — Regulation and Desk Communication
// ----------------------------------------------------------------------------
// 43 questions (IDs 4380400–4380442) extending the existing 7 ST Ch5
// questions in careerAgentGeneratedRoadmapFinance.ts (4200030–4200032,
// 4107362, 4107832, 4107823, 4107833).
//
// Scope: US sell-side cash and derivatives desks, with awareness of
// MiFID II spillover into US practice. Covers the regulators learners
// will actually be examined by (SEC, FINRA, CFTC, MSRB, state), the
// Dodd-Frank surface that touches S&T (Volcker, swap clearing, SEFs,
// security-based-swap split), and the everyday compliance gates a
// desk lives inside — restricted/watch list mechanics, off-channel
// comms enforcement, personal account trading, OFAC screening, Reg M
// quiet periods, Reg NMS routing, Reg SHO locates, TRACE/TRF reporting,
// and the surveillance triggers that catch spoofing, layering, marking
// the close, and front-running of research.
//
// Voice rules: bespoke whyWrong on every distractor; misconceptions are
// the ones desk traders and salespeople actually carry (e.g., "WhatsApp
// is fine if you delete it"; "watch list = restricted list"; "Reg SHO
// only applies to retail short sellers"; "best ex means cheapest
// commission"; "Volcker doesn't apply if we make a market").
// ----------------------------------------------------------------------------

const SOURCE = 'Floe S&T Ch5 canonical bank'

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

const CHAPTER = 'Regulation and Desk Communication'

// Difficulty target: 13 at 3, 22 at 4, 8 at 5 (43 total).
export const ST_CH5_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Regulator landscape
  4380400: 3, // SEC vs FINRA scope
  4380401: 3, // CFTC scope post Dodd-Frank
  4380402: 4, // Security-based swap vs swap jurisdiction
  4380403: 3, // MSRB and muni-related conduct
  4380404: 4, // State regulators and the desk

  // Dodd-Frank
  4380405: 4, // Volcker Rule prop ban + market-making exception
  4380406: 5, // Volcker exception abuse pattern
  4380407: 4, // Swap clearing mandate
  4380408: 4, // SEF execution requirement
  4380409: 5, // Push-out and swap-dealer registration

  // Reg NMS
  4380410: 3, // NBBO and the trade-through rule
  4380411: 4, // Intermarket sweep order (ISO)
  4380412: 3, // Sub-penny rule

  // MiFID II awareness
  4380413: 4, // Research unbundling in US conversations
  4380414: 4, // Best-ex documentation discipline

  // Reg M
  4380415: 4, // Reg M restricted-period bidding
  4380416: 5, // Passive market-making exception under Reg M

  // Reg AC
  4380417: 3, // Analyst certification separation

  // Reg SHO
  4380418: 3, // Locate requirement basics
  4380419: 4, // Threshold list and fail-to-deliver
  4380420: 5, // Bona-fide market-maker exception

  // Manipulation prohibitions
  4380421: 4, // Spoofing pattern recognition
  4380422: 4, // Layering distinct from legitimate iceberg
  4380423: 4, // Marking the close
  4380424: 4, // Painting the tape / wash trades

  // Insider trading
  4380425: 4, // 10b-5 elements on a desk
  4380426: 5, // Newman / Salman tipper-tippee personal benefit
  4380427: 4, // MNPI through a corporate-access channel

  // MNPI handling
  4380428: 3, // Watch list vs restricted list
  4380429: 4, // Control-room logging

  // Communications surveillance
  4380430: 3, // Recorded lines and electronic comms
  4380431: 4, // Off-channel comms (WhatsApp / Signal)
  4380432: 5, // Books and Records Rule 17a-4 retention

  // Personal account trading + gifts + politics
  4380433: 3, // Pre-clearance and blackout window
  4380434: 4, // Gift and entertainment limit
  4380435: 4, // MSRB G-37 political contribution

  // Order tags and best-ex reporting
  4380436: 3, // Solicited vs unsolicited tagging
  4380437: 3, // Rule 605 vs 606 reporting

  // Trade reporting
  4380438: 3, // TRACE for corporate bonds
  4380439: 4, // TRF for off-exchange equities

  // Cross-border + OFAC / AML
  4380440: 4, // Reg S vs Rule 144A
  4380441: 5, // OFAC sanctions screening on a counterparty
  4380442: 3, // SAR / AML escalation
}

export const stCh5Questions: Question[] = [
  // -------------------------------------------------------------------------
  // REGULATOR LANDSCAPE (4380400–4380404)
  // -------------------------------------------------------------------------
  q(4380400, 'Career Skills', CHAPTER, 'SEC versus FINRA scope',
    'A new desk hire asks why the firm answers to both the SEC and FINRA. What is the cleanest way to explain the division of responsibility?',
    'The SEC is the federal statutory regulator for broker-dealers, exchanges, and securities markets; FINRA is the self-regulatory organization that registers, examines, and disciplines broker-dealers and their registered reps under SEC oversight',
    [
      ['FINRA only handles retail complaints; the SEC handles everything institutional', 'FINRA examines and disciplines on institutional conduct too — manipulation, supervisory failures, reporting violations on the institutional desk all flow through FINRA enforcement.'],
      ['FINRA is a private trade group with no enforcement power; the SEC is the only real regulator', 'FINRA fines and bars happen weekly and they hit institutional desks. Treating FINRA as toothless is a fast way to be surprised by an AWC letter.'],
      ['The SEC writes rules and FINRA writes guidance, but only the SEC can take a case', 'FINRA brings its own enforcement cases under its own rulebook. SEC and FINRA cases on the same conduct are common, not exclusive.'],
    ],
    'SEC is the statutory federal regulator; FINRA is the SRO that supervises broker-dealers day-to-day under SEC oversight. Both can examine the desk and both can bring enforcement — the desk does not get to pick which one matters.'),

  q(4380401, 'Career Skills', CHAPTER, 'CFTC scope post Dodd-Frank',
    'A junior trader on the rates desk asks which regulator covers the swap book. What is the right framing post Dodd-Frank?',
    'The CFTC regulates futures and the bulk of swaps; Dodd-Frank gave the CFTC explicit authority over swap dealers, clearing, and trade execution for most interest-rate, FX, and commodity swaps',
    [
      ['The SEC took over the entire swap market under Dodd-Frank', 'Dodd-Frank split jurisdiction. The SEC got security-based swaps (single-name CDS, equity swaps); the CFTC got the much larger pool — including rates and most FX.'],
      ['Swaps remain unregulated bilateral contracts as they were pre-2008', 'The whole point of Title VII was to drag swaps into a regulated regime — registration, reporting, clearing where required, and SEF execution.'],
      ['The Fed regulates the swap book because it regulates the bank', 'The Fed regulates the bank holding company prudentially. Conduct on the swap book — registration, trade reporting, clearing — runs through the CFTC.'],
    ],
    'Post Dodd-Frank, the CFTC owns most of the swap market and the SEC owns security-based swaps. The desk has to know which side of the split each instrument falls on because the registration, clearing, and reporting regimes differ.'),

  q(4380402, 'Career Skills', CHAPTER, 'Security-based swap versus swap jurisdiction',
    'A salesperson is structuring an equity total-return swap on a single US listed name and a parallel basket swap on the S&P 500. Which regulator covers which product?',
    'The single-name equity TRS is a security-based swap under the SEC; the broad-based index swap is a swap under the CFTC — Dodd-Frank split jurisdiction by reference asset, not by booking entity',
    [
      ['Both are CFTC products because they are derivatives', 'Equity single-name and narrow-based index derivatives are security-based swaps under the SEC. Calling all derivatives CFTC erases the Title VII split.'],
      ['Both are SEC products because they reference equity', 'Broad-based index swaps fall on the CFTC side even though the underlying is equity-linked. The narrow-versus-broad index distinction is the actual line.'],
      ['Whichever regulator the bank chooses to register the trade with', 'Jurisdiction is statutory, not elective. The desk cannot pick which regulator covers a trade — the product definition does that.'],
    ],
    'The SEC/CFTC split for derivatives follows the reference asset. Single-name and narrow-index equity derivatives are SEC security-based swaps; broad-based index, rates, FX, and commodity derivatives are CFTC swaps.'),

  q(4380403, 'Career Skills', CHAPTER, 'MSRB and muni-related conduct',
    'The muni desk wants to know which rulebook governs sales practices and political contributions in muni securities. What is the right answer?',
    'MSRB writes the rules for muni securities activity; the rules are enforced for broker-dealers by FINRA and the SEC, and MSRB Rule G-37 specifically restricts political contributions to issuer officials',
    [
      ['FINRA has its own muni rulebook separate from MSRB', 'FINRA enforces the MSRB rulebook for broker-dealers. There is one muni rulebook and MSRB writes it.'],
      ['Muni activity is unregulated because munis are exempt securities', 'Munis are exempt from registration but conduct, disclosure, fair dealing, and political-contribution rules apply through MSRB. The exemption is for registration, not behavior.'],
      ['The Treasury regulates munis because they are government securities', 'Treasury does not regulate state and local government debt. MSRB does, and FINRA/SEC enforce.'],
    ],
    'Munis live under MSRB rules enforced by FINRA and SEC. G-37 in particular constrains political giving to issuer officials and is a frequent source of pay-to-play enforcement.'),

  q(4380404, 'Career Skills', CHAPTER, 'State regulators and the desk',
    'A salesperson is opening a new institutional account in a state where the firm is registered but the salesperson personally has lapsed their state registration. What is the issue?',
    'Individual registered reps generally need to maintain registration in each state where they transact with clients; the firm being registered does not cover an unregistered individual',
    [
      ['Firm registration covers all employees automatically', 'Series-licensing and state registration are individual. The firm being registered is necessary but not sufficient for the rep.'],
      ['State registration only matters for retail brokers, not institutional sales', 'Most state regimes apply regardless of customer type, with limited institutional exemptions that vary by state. Assuming exemption without checking is how state actions start.'],
      ['Only the state where the client is headquartered matters', 'Multiple states can claim jurisdiction depending on where calls are placed, where the rep sits, and where the client decision-maker is. Single-state thinking misses the actual surface.'],
    ],
    'States regulate securities professionals in parallel with the SEC and FINRA. A lapsed state registration on an individual is a real problem even when the firm is fully registered.'),

  // -------------------------------------------------------------------------
  // DODD-FRANK (4380405–4380409)
  // -------------------------------------------------------------------------
  q(4380405, 'Career Skills', CHAPTER, 'Volcker Rule and the market-making exception',
    'A junior on the credit desk asks whether the Volcker Rule bans the desk from holding inventory. What is the right framing?',
    'Volcker prohibits proprietary trading by banking entities but permits inventory held in connection with market-making, underwriting, hedging, and certain other activities — the exception requires inventory sized to reasonably expected near-term customer demand (RENTD) and documented compliance',
    [
      ['Volcker is a flat ban on inventory; the desk can only hold positions intraday', 'The rule has a market-making exception. The discipline is about how the inventory is sized and documented, not about flattening every night.'],
      ['Volcker does not apply if the desk calls itself a market maker', 'Naming yourself a market maker does not unlock the exception. The exception requires actual MM behavior, RENTD analysis, and documented compliance.'],
      ['Volcker only applies to hedge funds owned by the bank, not to the trading desk', 'Covered fund restrictions are one part of Volcker. The proprietary-trading prohibition with MM and hedging exceptions is the part that governs the cash and derivatives desks directly.'],
    ],
    'Volcker bans prop but permits market-making within sized, documented limits. The exception is a compliance regime, not a label — desks live inside RENTD analysis, position limits, and metric reporting.'),

  q(4380406, 'Career Skills', CHAPTER, 'Volcker exception abuse pattern',
    'A trader argues that as long as the desk is officially a market-making desk, any position the trader puts on is automatically permissible under Volcker. What is wrong with that reasoning?',
    'The market-making exception covers inventory reasonably tied to customer demand and proper hedging; positions that are directional bets unconnected to expected customer flow are still prop trading and lose the exception, regardless of which desk books them',
    [
      ['Nothing is wrong — the label of the desk controls', 'Volcker enforcement specifically targets prop trading dressed up as market-making. Examiners look at the trade behavior, not the desk\'s name on the org chart.'],
      ['The problem is only that the trader is junior; senior traders can hold larger directional positions', 'Seniority does not unlock the exception. The same RENTD test applies regardless of who pressed the button.'],
      ['It is wrong only if the position loses money', 'P&L outcome does not determine whether a trade is prop. A profitable directional bet is just as much a Volcker problem as a losing one.'],
    ],
    'The classic Volcker enforcement pattern is a desk badged as market-making running directional positions disconnected from customer demand. The exception lives or dies on the behavior, not the badge.'),

  q(4380407, 'Career Skills', CHAPTER, 'Swap clearing mandate',
    'A client wants to execute a plain-vanilla 5-year USD interest rate swap bilaterally. The desk says it has to be cleared. Why?',
    'Dodd-Frank mandated central clearing for swap classes the CFTC has designated subject to clearing — plain-vanilla USD IRS is in that set, so the trade must be cleared through a registered derivatives clearing organization unless an end-user exception applies',
    [
      ['The bank prefers cleared trades for balance-sheet efficiency, but the client can opt out', 'Where the clearing mandate applies, the bank cannot waive it for the client. End-user exemption is narrow and conditional, not optional.'],
      ['All swaps must be cleared under Dodd-Frank without exception', 'The mandate is by product class plus counterparty; not every swap is mandated and there are real exceptions (commercial end-user hedging, certain inter-affiliate trades).'],
      ['Clearing is required only for exchange-traded products like futures', 'Cleared swaps are precisely the Dodd-Frank innovation. The whole point of Title VII was to push standardized OTC products through CCPs.'],
    ],
    'The clearing mandate is product-specific and counterparty-specific. Vanilla USD IRS is the canonical mandated class — bespoke or non-standard structures may not be, but the desk should never assume.'),

  q(4380408, 'Career Skills', CHAPTER, 'SEF execution requirement',
    'A client asks why the desk routes mandated swaps through a Swap Execution Facility instead of just confirming bilaterally. What is the right answer?',
    'Dodd-Frank requires that swaps subject to the clearing mandate and "made available to trade" be executed on a SEF or DCM, not bilaterally — the SEF provides pre-trade price transparency through RFQ or order-book methods',
    [
      ['SEFs are voluntary and the desk uses them only when it wants better pricing', 'For MAT swaps, SEF execution is mandatory. Bilateral execution outside a SEF for a MAT product is a Title VII violation, not a routing preference.'],
      ['SEFs are required only for retail clients', 'SEFs are an institutional venue. Retail clients are not who SEF mandates were designed for — eligible contract participants are.'],
      ['SEFs only handle credit default swaps', 'SEFs cover a wide range of swap classes including IRS and CDS. They are an execution venue type, not a CDS-only platform.'],
    ],
    'For swaps that are both clearing-mandated and "made available to trade," SEF or DCM execution is required. The desk has to know which products are MAT — bilateral confirmation for a MAT swap is a clear rule break.'),

  q(4380409, 'Career Skills', CHAPTER, 'Push-out and swap dealer registration',
    'A bank entity is dealing in commodity and equity derivatives at scale. A trader assumes the bank holding company can just absorb all of it without separate registration. What did the trader miss?',
    'Entities that meet the swap-dealer or security-based-swap-dealer de minimis thresholds must register with the CFTC or SEC respectively, comply with capital, business-conduct, and reporting requirements, and historically Section 716 push-out limited certain swap activities in insured depository institutions — the dealing entity must be the registered one',
    [
      ['Registration is automatic when the bank registers with the SEC and FINRA', 'Swap-dealer registration is separate and product-specific. SEC/FINRA broker-dealer registration does not cover swap-dealer status.'],
      ['Push-out was fully repealed so any bank entity can deal any swap', 'Push-out was partially rolled back in 2014 but not eliminated wholesale, and even where it does not apply, the swap-dealer registration regime still does.'],
      ['Dealing activity below $100B notional is unregulated', 'The de minimis thresholds are far lower than that and have changed over time. Treating the threshold as a free pass instead of a tested limit is how unregistered dealing accidents happen.'],
    ],
    'Swap-dealer and SBSD registration regimes are their own world — capital, business-conduct, reporting, and historically push-out. The dealing entity has to be the registered entity, and that is a structuring decision, not a trading-floor afterthought.'),

  // -------------------------------------------------------------------------
  // REG NMS (4380410–4380412)
  // -------------------------------------------------------------------------
  q(4380410, 'Career Skills', CHAPTER, 'NBBO and the trade-through rule',
    'A US equities trader wants to fill a client market order at a price worse than the displayed best offer because the venue is more convenient. What does Reg NMS say?',
    'Reg NMS Rule 611 (the trade-through or Order Protection Rule) prohibits trading through a protected NBBO quotation — the order must be routed to take the better-priced protected quote unless an exception applies',
    [
      ['Trade-throughs are permitted as long as the client agrees in writing', 'Client consent does not waive Rule 611. The protection runs to displayed quotes, not client preference.'],
      ['Trade-through rules apply only to retail orders', 'Rule 611 applies to all trading centers and orders, not just retail. Institutional executions are equally subject.'],
      ['NBBO is informational; brokers are free to fill anywhere they can find liquidity', 'NBBO is the legal benchmark for protected quotes. Trading through it without a recognized exception (ISO, sub-penny, benchmark trade, etc.) is a Rule 611 violation.'],
    ],
    'Reg NMS makes the NBBO a hard constraint on routing. A worse fill than a protected quote needs either a recognized exception or it is a trade-through.'),

  q(4380411, 'Career Skills', CHAPTER, 'Intermarket sweep orders',
    'A large client order is going to walk through several venues. The trader wants to fire at multiple price levels simultaneously without each child order being blocked by NBBO. What tool exists for this?',
    'An Intermarket Sweep Order (ISO) lets the broker route multiple orders at the same time to sweep protected quotes at multiple venues — the broker takes responsibility for simultaneously routing to the better-priced protected quotes, which satisfies the trade-through obligation',
    [
      ['A market order tagged "not held" is the standard tool', 'Not-held discretion is about timing and price, not the trade-through mechanism. ISOs are the specific Reg NMS construct.'],
      ['A peg-to-NBBO order automatically sweeps multiple venues', 'Pegging tracks the NBBO; it does not authorize a multi-venue sweep that breaks through it. ISOs do.'],
      ['Splitting the order manually across venues over time', 'Sequential routing is exactly what ISOs avoid. Manual splitting risks trade-through violations and is far slower in fast markets.'],
    ],
    'ISOs are the Reg NMS-compliant way to sweep protected quotes across venues simultaneously. The broker accepts the obligation that the simultaneous routing satisfies trade-through, and the order can then take liquidity at multiple levels in one move.'),

  q(4380412, 'Career Skills', CHAPTER, 'Sub-penny rule',
    'A market-making algo is quoting an NMS stock at $24.5012 to try to step in front of the NBBO. Is that permitted?',
    'Reg NMS Rule 612 generally prohibits displaying, ranking, or accepting orders in sub-penny increments for NMS stocks priced at or above $1.00 — quoting at $24.5012 is a sub-penny violation for a non-sub-dollar stock',
    [
      ['Sub-penny quoting is fine if it offers price improvement', 'Rule 612 forbids the quote regardless of intent. Price improvement at sub-penny increments is exactly the behavior the rule was written to prevent.'],
      ['Sub-penny is allowed on dark venues and only banned on lit exchanges', 'Rule 612 applies to all trading centers for NMS stocks above $1.00 — venue type does not change it.'],
      ['Sub-penny is permitted for institutional orders', 'The rule applies regardless of customer type for displayed and accepted orders.'],
    ],
    'For NMS stocks at $1.00 or higher, quoting and accepting orders below the penny tick is a Reg NMS violation. The rule constrains the algo regardless of whether the intent is to provide price improvement.'),

  // -------------------------------------------------------------------------
  // MIFID II AWARENESS (4380413–4380414)
  // -------------------------------------------------------------------------
  q(4380413, 'Career Skills', CHAPTER, 'MiFID II research unbundling',
    'A US-based sales coverage role is on a call with a European asset manager who refuses to take a research call unless it is contractually priced separately. What is going on?',
    'MiFID II requires European buy-side firms to pay for investment research separately from execution — they cannot accept bundled research-for-flow soft-dollar arrangements the way some US accounts historically did, so research access has to be contractually priced',
    [
      ['The client is being difficult; US rules permit bundled research', 'The client is bound by their local regulator. The unbundling requirement is on them, not the broker — refusing to engage on it shuts the relationship.'],
      ['MiFID II only applies to European brokers, not to US firms serving European clients', 'When the buy-side client is bound by MiFID II, the broker has to accommodate the unbundled-payment model to keep serving them, regardless of the broker\'s home regulator.'],
      ['Research is free to everyone under MiFID II', 'Unbundling makes research a paid product, not a free one. The whole point is that research has an explicit price.'],
    ],
    'MiFID II unbundling pushed the entire European buy-side onto separately priced research. US sales teams covering European accounts have to operate inside that constraint, and "we don\'t do that here" is not a workable answer.'),

  q(4380414, 'Career Skills', CHAPTER, 'Best-ex documentation discipline',
    'A trader fills a client order at NBBO and books it without documenting venue analysis. The trader argues that filling at NBBO is automatic best ex. Why is that not enough?',
    'Best execution is a process obligation, not a single-trade price test — the firm has to demonstrate ongoing review of venue routing decisions across factors (price, speed, fill rate, market impact, fees) and document that review, even when individual fills are at NBBO',
    [
      ['NBBO fill is by definition best ex', 'NBBO is one factor. Best ex examines fill rate, market impact, certainty, fees, and other dimensions that an NBBO touch does not capture.'],
      ['Best ex only applies to retail orders', 'Best-ex obligations apply across customer types, including institutional. The factors weighted may differ, but the obligation does not vanish.'],
      ['Documentation is only required if a client complains', 'Periodic best-ex documentation is a standing FINRA/SEC obligation and a routine exam item. Waiting for a complaint is exactly what gets the firm cited.'],
    ],
    'Best execution is a documented process: regular and rigorous review of routing, venue performance, and execution quality. A single NBBO fill is evidence on one trade; the firm has to show the system that produces those fills is itself reviewed.'),

  // -------------------------------------------------------------------------
  // REG M (4380415–4380416)
  // -------------------------------------------------------------------------
  q(4380415, 'Career Skills', CHAPTER, 'Reg M restricted-period bidding',
    'The firm is in a syndicate distributing a follow-on equity offering pricing tomorrow. The cash desk wants to keep market-making the same name on the secondary book. What does Reg M say?',
    'Reg M Rule 101 imposes a restricted period (typically one or five business days before pricing depending on float) during which distribution participants generally cannot bid for or purchase the covered security, with limited exceptions for unsolicited brokerage, passive market-making, and stabilizing transactions',
    [
      ['Market-making continues normally because Rule 101 only covers the syndicate book', 'Rule 101 reaches distribution participants in their proprietary capacity. The cash desk inside a participant is subject — exceptions exist but the default is restriction.'],
      ['Reg M only restricts the issuer, not the underwriter', 'Rule 102 covers issuers and selling stockholders; Rule 101 covers distribution participants including the underwriter. Both sides are restricted, not just one.'],
      ['Restricted-period bans apply only to retail customer orders', 'The restriction is on the distribution participant\'s own bidding and purchasing, not on retail customer orders. Mixing the two up causes the wrong things to be restricted and the wrong things to be permitted.'],
    ],
    'Reg M\'s restricted period is the canonical pre-pricing quiet zone. Distribution participants — including their proprietary and market-making activity — face explicit limits, with only narrow recognized exceptions.'),

  q(4380416, 'Career Skills', CHAPTER, 'Passive market-making under Reg M',
    'A trader on the offering wants to keep quoting the name through the restricted period and points to "passive market-making" as the way to do it. What does that actually require?',
    'The Reg M passive market-making exception is highly conditional — the market maker can bid at or below the highest independent bid, cannot raise its bid, has a daily net-purchase cap, and the activity must be documented as compliant; it is not a free pass to keep trading normally',
    [
      ['It lets the desk continue quoting two-sided markets without changes', 'Passive MM bans raising the bid and caps net purchases. "Continue normally" is precisely what the exception does not allow.'],
      ['It only applies to NASDAQ market-makers', 'The construct historically came up around NASDAQ but the exception conditions are about behavior, not venue. Treating it as venue-defined misreads the rule.'],
      ['It is automatic once the trader checks the "passive MM" box on the order ticket', 'Passive MM is a documented compliance regime, not a flag. The desk has to actually behave passively and the firm has to evidence that behavior.'],
    ],
    'Passive market-making is a narrow Reg M exception with hard behavioral limits. Using the label without observing the conditions is a classic source of Reg M enforcement.'),

  // -------------------------------------------------------------------------
  // REG AC (4380417)
  // -------------------------------------------------------------------------
  q(4380417, 'Career Skills', CHAPTER, 'Reg AC analyst certification',
    'A research analyst publishes a note with a buy rating after a long discussion with the trading desk about position positioning. What does Reg AC require?',
    'Reg AC requires research analysts to certify that the views expressed reflect their personal views and that no part of their compensation was, is, or will be directly or indirectly related to specific recommendations or views — the analyst must be independent of trading and banking influence on the rating',
    [
      ['Reg AC only requires that the analyst disclose their personal trades in the stock', 'Personal trading disclosure is one piece, but the core of Reg AC is the certification about independence of the views themselves.'],
      ['Reg AC is satisfied if the trading desk signs off on the note', 'Trading desk sign-off is the opposite of what Reg AC protects. Research independence from trading is the whole point of the certification.'],
      ['Reg AC was repealed once MiFID II took effect', 'Reg AC remains in force in the US. MiFID II handles different ground (unbundling) — it does not replace Reg AC.'],
    ],
    'Reg AC is the wall between research opinion and trading or banking incentives. The certification is the formal statement that the rating is the analyst\'s own view, paid for in a way that does not bend it.'),

  // -------------------------------------------------------------------------
  // REG SHO (4380418–4380420)
  // -------------------------------------------------------------------------
  q(4380418, 'Career Skills', CHAPTER, 'Reg SHO locate requirement',
    'A hedge fund client wants to short 200,000 shares of an NMS stock. Before the trader marks the order short, what does Reg SHO require?',
    'Reg SHO Rule 203(b)(1) requires the broker-dealer to have reasonable grounds to believe the security can be borrowed and delivered by settlement — a documented locate must be obtained before a short sale is executed, with limited exceptions',
    [
      ['Locate is only required if the client has previously failed to deliver', 'Locate is required up front for every short, not as a remedial step after fails. Treating it as conditional is the most common SHO violation.'],
      ['Reg SHO only applies to retail short sellers; institutional shorts are exempt', 'Reg SHO applies to all short sales of equity securities. The carve-out is for bona-fide market makers in narrow circumstances, not for institutional clients generally.'],
      ['The client\'s prime broker handles locate, so the executing broker has no role', 'The executing broker still has to satisfy itself that a locate exists. Outsourcing the obligation to "the prime" without confirmation is exactly the gap regulators target.'],
    ],
    'Reg SHO\'s locate requirement is the basic gate before any short is executed. The desk has to confirm borrow availability up front, not after the fact.'),

  q(4380419, 'Career Skills', CHAPTER, 'Threshold list and fail-to-deliver',
    'A name appears on the Reg SHO threshold securities list because of persistent fails. What is the practical consequence for a clearing broker carrying fails in that name?',
    'For threshold securities, persistent fails-to-deliver trigger a mandatory close-out — the clearing broker must purchase or borrow shares to close out the fail within the specified Reg SHO timeline, and the firm cannot continue to accept short sales in the name without a pre-borrow until cleaned up',
    [
      ['Threshold listing is informational; no specific action is required', 'Threshold listing is precisely what triggers the mandatory close-out and the pre-borrow restriction. Treating it as informational is the violation.'],
      ['The threshold list applies only to penny stocks', 'Any NMS security can land on the threshold list when fails persist above the threshold. It is not a microcap-only mechanism.'],
      ['Threshold securities have to be liquidated entirely from the book', 'The remedy is close-out of the fail, not blanket liquidation of the position. Confusing the two over-reacts in the wrong way.'],
    ],
    'Reg SHO threshold-list mechanics are a forced-cleanup regime. Persistent fails trigger close-out and pre-borrow obligations; ignoring the list is one of the cleanest enforcement paths regulators have on short selling.'),

  q(4380420, 'Career Skills', CHAPTER, 'Bona-fide market-maker exception',
    'A market-making desk argues it has a Reg SHO exception that lets it short without a locate. A trader takes this to mean any short on the MM book is exempt. Where is the trader wrong?',
    'The bona-fide market-maker exception is narrow — it covers shorts entered into in connection with bona-fide market-making activity (providing two-sided liquidity, hedging customer flow), not directional shorts the trader chooses to put on the MM book; misuse of the exception is a recurring enforcement target',
    [
      ['Nothing is wrong; the MM book is fully exempt from locates', 'The exception is activity-based, not book-based. A directional short on the MM book without bona-fide MM activity is a locate violation.'],
      ['The exception only applies to options market-makers, not equity MMs', 'Both equity and options market-makers can fall within the bona-fide MM exception, but in both cases only for genuine MM activity.'],
      ['The exception applies to anything booked before 9:30am', 'Time of day is not the test. The character of the activity — actual two-sided MM versus directional positioning — is.'],
    ],
    'The bona-fide market-maker exception under Reg SHO is narrow and behavior-based. Booking a directional short to the MM book to dodge the locate is one of the more common enforcement fact patterns.'),

  // -------------------------------------------------------------------------
  // MANIPULATION PROHIBITIONS (4380421–4380424)
  // -------------------------------------------------------------------------
  q(4380421, 'Career Skills', CHAPTER, 'Spoofing pattern recognition',
    'Surveillance flags a trader who repeatedly posts large bids at multiple levels, then cancels them within milliseconds, while a smaller offer trades on the other side. What is the issue?',
    'This is the canonical spoofing pattern — entering orders with no intent to execute to create a misleading impression of supply or demand, then cancelling once the market moves; spoofing is explicitly prohibited under Dodd-Frank Section 747 and is the subject of repeated DOJ and CFTC enforcement',
    [
      ['Cancelling orders quickly is just normal high-frequency behavior', 'Legitimate HFT cancels orders; the spoof signature is the *combination* of no-intent-to-execute orders with simultaneous executions on the opposite side. Surveillance flags the pattern, not the speed.'],
      ['Spoofing rules apply only to futures markets, not equities', 'Spoofing is prohibited across markets — Section 747 for futures, and 10b-5 and exchange rules for equities. The conduct is illegal in both.'],
      ['It is fine because each individual order was a valid order at entry', 'Intent at entry is the test. Orders entered without intent to execute, used to move price, are not "valid" — they are the actus reus of spoofing.'],
    ],
    'Spoofing is one of the clearest manipulation fact patterns and enforcement is aggressive — DOJ has secured criminal convictions, not just civil fines. Cancelling fast is not the violation; cancelling fast as part of a pattern designed to mislead the market is.'),

  q(4380422, 'Career Skills', CHAPTER, 'Layering distinct from legitimate iceberg orders',
    'A trader posts several visible bids at descending price levels to build apparent depth, while quietly working a sell order at a higher price. The trader argues this is just an iceberg strategy. Where is the line?',
    'Layering — entering multiple non-bona-fide orders on one side of the book to create a false impression of market depth while executing on the opposite side — is manipulation; an iceberg order, by contrast, is a single bona-fide order with only a visible slice displayed, and is permitted',
    [
      ['The two are the same thing under different names', 'They are not. Icebergs hide size of a real order; layering displays size of orders that are not real. The intent and the bona-fide nature of the displayed orders is the line.'],
      ['Layering is only illegal if it causes a price move', 'Manipulation can be charged on the conduct itself; outcome is evidence but not a necessary element for many surveillance and enforcement actions.'],
      ['Layering is fine as long as the trader cancels the resting orders eventually', 'Cancellation does not cure the misimpression created while the orders rested. The non-bona-fide character at entry is the violation.'],
    ],
    'Layering is the multi-level cousin of spoofing — orders posted to mislead about depth, not to execute. Iceberg orders are a legitimate execution tactic for hiding the size of a real order; the distinction is intent and the bona-fide nature of the displayed orders.'),

  q(4380423, 'Career Skills', CHAPTER, 'Marking the close',
    'A portfolio manager calls the desk at 3:58pm asking for an aggressive market-on-close buy to "make sure the print is strong" for month-end NAV. What is the issue?',
    'Trading specifically to influence the closing price for a benchmarking or NAV purpose is "marking the close" — a classic manipulation pattern, especially around month, quarter, and year end; the desk should escalate to compliance rather than execute as instructed',
    [
      ['It is normal end-of-day execution; clients always buy on close', 'The issue is the stated intent to influence the close for NAV. Routine MOC buying is fine; buying *to mark the close* is the violation.'],
      ['Only the PM is exposed; the desk is fine because it is just executing', 'The desk is a knowing participant once the intent is stated. Knowing facilitation of manipulation is itself a violation.'],
      ['Marking the close only applies to small-cap stocks', 'Marking the close has been charged across cap sizes — large-cap month-end manipulation cases exist. Cap size is not the test.'],
    ],
    'Marking the close is one of the oldest manipulation patterns and surveillance watches month/quarter/year ends specifically. An explicit instruction to influence the close is a stop-and-escalate moment, not an execution challenge.'),

  q(4380424, 'Career Skills', CHAPTER, 'Painting the tape and wash trades',
    'Two affiliated accounts at different brokers trade the same illiquid name back and forth at successively higher prices through the morning. What manipulation patterns does this match?',
    'It matches both painting the tape (creating misleading activity to attract real buyers) and wash trades (matched trades between affiliated accounts with no change in beneficial ownership) — both are explicitly prohibited regardless of which broker each leg is booked at',
    [
      ['It is fine because each leg cleared at a different broker', 'Splitting legs across brokers is exactly the pattern surveillance is built to detect. Different brokers does not change beneficial ownership.'],
      ['Painting the tape applies only to closing prices', 'Painting the tape applies to creating misleading impressions of activity at any time, not only at the close.'],
      ['Wash trades are only an issue in futures, not equities', 'Wash trade prohibitions exist across markets. The matched-orders-with-no-economic-change pattern is illegal in equities, futures, and options.'],
    ],
    'Painting the tape and wash trades are both about manufactured activity that has no genuine economic substance. Routing through different brokers, accounts, or even time gaps does not cure the conduct — surveillance reconciles across venues.'),

  // -------------------------------------------------------------------------
  // INSIDER TRADING (4380425–4380427)
  // -------------------------------------------------------------------------
  q(4380425, 'Career Skills', CHAPTER, '10b-5 elements on a desk',
    'A trader hears about an upcoming acquisition from a relative who works at the target company and trades on it. What does the government have to prove for a 10b-5 insider trading case?',
    'Trading or tipping on material non-public information in breach of a duty of trust or confidence, with scienter — the duty can come directly from the insider (classical theory) or from misappropriation of confidential information from the source (misappropriation theory)',
    [
      ['That the trader made a profit', 'Profit is evidence but not an element. Losing trades on MNPI are still 10b-5 violations.'],
      ['That the trader worked at a public company', 'Outsider tippees can be liable under misappropriation theory or as tippees of insiders. The trader does not need to be a corporate insider themselves.'],
      ['That the information was true', 'Trading on rumored MNPI that turns out to be false can still be a violation; the materiality and non-public character at the time of trading is what matters.'],
    ],
    '10b-5 reaches both classical insider trading and misappropriation. The duty-plus-MNPI-plus-scienter frame is what the government has to make out — and tipping relatives is a fact pattern with a long enforcement history.'),

  q(4380426, 'Career Skills', CHAPTER, 'Newman / Salman tipper-tippee liability',
    'A trader on a desk receives a stock tip from a friend whose acquaintance works at the target firm. The trader argues that Newman protects them because there was no obvious cash payment to the original tipper. What is the more accurate post-Salman picture?',
    'Salman (2016) made clear that a personal benefit to the tipper can be inferred from a gift of information to a trading relative or friend — Newman\'s narrower view of personal benefit was substantially walked back, so a "no cash, no liability" defense is much weaker than it looked in 2014',
    [
      ['Newman still controls and absence of cash payment to the tipper is dispositive', 'Salman directly addressed this and rejected the narrow Newman reading. Relying on Newman alone post-2016 is a misreading of the case law.'],
      ['Salman only applies to family tippers, not friends', 'Salman explicitly extends the gift-to-trading-relative-or-friend reasoning beyond strict family ties. Treating "friend" as outside Salman misreads the holding.'],
      ['Personal benefit is no longer required for tippee liability', 'Personal benefit remains an element — the question is how easily it can be inferred. Salman lowered that bar; it did not eliminate the element.'],
    ],
    'Post-Salman, the personal-benefit element can be inferred from a gift of information to a trading friend or relative. Desk-side rumors that route through a personal relationship are squarely within tippee-liability reach.'),

  q(4380427, 'Career Skills', CHAPTER, 'MNPI through a corporate-access channel',
    'A salesperson sets up a one-on-one between a hedge-fund PM and a CFO. After the meeting, the PM trades hard in the name. What is the desk\'s exposure?',
    'If the CFO selectively disclosed MNPI to the PM in the meeting, the trading violates 10b-5 (and the CFO violated Reg FD); the broker arranging the meeting can face exposure for facilitating MNPI flow if surveillance shows the desk knew or should have known the channel was being used for selective disclosure',
    [
      ['No exposure because the broker did not make the trade', 'Facilitation of selective disclosure can be charged. The broker arranging access is not a passive bystander when MNPI is the result.'],
      ['Reg FD only applies to the issuer, so the broker is safe', 'Reg FD does apply primarily to the issuer, but 10b-5 reaches the trading and the facilitation. Broker exposure runs through 10b-5, not Reg FD.'],
      ['Corporate access meetings are unregulated', 'Corporate access is a heavily scrutinized channel precisely because of the MNPI risk. Compliance overlays exist for a reason.'],
    ],
    'Corporate access meetings are the highest-risk MNPI channel sales runs. The desk\'s discipline is to set the rules of engagement with the issuer up front and to escalate immediately when post-meeting trading patterns suggest selective disclosure happened.'),

  // -------------------------------------------------------------------------
  // MNPI HANDLING (4380428–4380429)
  // -------------------------------------------------------------------------
  q(4380428, 'Career Skills', CHAPTER, 'Watch list versus restricted list',
    'A new joiner to the desk thinks the watch list and the restricted list are the same thing. How are they actually different?',
    'The watch list is confidential to control room and senior compliance — it flags names where the firm has MNPI for surveillance purposes, but desks are not told the name is on it; the restricted list is firm-wide and tells the desk it cannot trade or research the name (or can only do so under conditions)',
    [
      ['They are the same list with two names', 'They have different audiences and different effects. Confusing them either leaks MNPI (telling the desk what is on the watch list) or fails to restrict trading (treating the restricted list as informational).'],
      ['Watch list is for retail names and restricted list is for institutional', 'Neither list is segmented by customer type. The distinction is who sees the list and what it does.'],
      ['The watch list is public and the restricted list is private', 'Both are internal. The watch list is *more* restricted in audience than the restricted list, not less.'],
    ],
    'The watch list lets the firm surveil trading in names it has MNPI about without revealing that MNPI to the desk; the restricted list constrains the desk\'s activity in known-to-the-desk names. Mixing them up causes real compliance accidents.'),

  q(4380429, 'Career Skills', CHAPTER, 'Control-room logging',
    'A banker brings a salesperson into a wall-crossed conversation about a possible follow-on offering. What does the control room expect to see logged?',
    'The wall crossing — identity of the person crossed, the deal, time, and the specific information shared — must be logged in the control room\'s records, and the name typically moves to the watch list (and possibly the restricted list at the appropriate stage); the salesperson is now over the wall and subject to MNPI handling rules',
    [
      ['Logging is optional unless the salesperson trades the name personally', 'Logging is mandatory for wall crossings regardless of subsequent trading. The record is the firm\'s defense to a Chinese-wall failure allegation.'],
      ['Only the banker has to remember the conversation; no firm-level record is needed', 'Wall crossings are a firm record, not a banker\'s memory. Without the control-room log, the firm cannot evidence its information-barrier program.'],
      ['Logging only applies if the deal actually launches', 'The cross is logged at the moment it happens, not retrospectively. Deals that fall away are still logged events.'],
    ],
    'Control-room logging of wall crossings is the firm\'s audit trail for information-barrier integrity. Logging is contemporaneous, comprehensive, and not contingent on what the deal does afterwards.'),

  // -------------------------------------------------------------------------
  // COMMUNICATIONS SURVEILLANCE (4380430–4380432)
  // -------------------------------------------------------------------------
  q(4380430, 'Career Skills', CHAPTER, 'Recorded lines and electronic comms',
    'A new associate is told all desk phones are recorded and all Bloomberg chats are archived. They ask whether that is really enforced. What is the right framing?',
    'Recording of trading-floor lines and archival of business electronic communications (Bloomberg, email, internal chat) is required by FINRA and SEC books-and-records rules and is routinely produced in exams and enforcement — the records exist and are reviewed, not theoretical',
    [
      ['Recording is policy theater; nobody actually listens', 'Surveillance teams sample and run NLP across recorded comms continuously. Enforcement actions regularly cite Bloomberg chat content verbatim.'],
      ['Only client-facing lines are recorded', 'Trading-floor lines and business comms broadly are recorded, not just client-facing channels. Internal coordination is a frequent surveillance trigger.'],
      ['Recording stops at the end of the official trading day', 'After-hours business comms on recorded systems are recorded too. The system does not care about market hours.'],
    ],
    'Recorded lines and archived chats are the firm\'s evidence base. Enforcement cases routinely quote desk chat verbatim — operating on the assumption nobody is listening is how careers end.'),

  q(4380431, 'Career Skills', CHAPTER, 'Off-channel comms (WhatsApp / Signal)',
    'A salesperson uses WhatsApp to text a hedge-fund client about market color "just to be responsive" and figures it is fine because they delete the messages weekly. What is wrong with this?',
    'Business communications on unmonitored platforms (WhatsApp, Signal, personal text, ephemeral messaging) violate books-and-records requirements regardless of deletion practices — the SEC has fined firms over $2B in aggregate (2022–2023) specifically for off-channel comms, and deletion makes the violation worse, not better',
    [
      ['Deletion solves the issue because there are no records to produce', 'Deletion is the violation, not the cure. The rule requires retention; destroying records compounds the books-and-records failure and adds spoliation concerns.'],
      ['WhatsApp is fine as long as the salesperson does not discuss specific trades', 'Books-and-records rules cover business communications broadly, not just trade-specific ones. Market color counts; relationship maintenance counts.'],
      ['Personal devices are private and out of scope', 'Business comms on personal devices are in scope. The SEC sweeps explicitly addressed personal-device business comms, with multi-hundred-million-dollar fines per firm.'],
    ],
    'Off-channel comms enforcement has been the dominant books-and-records story of the last few years. WhatsApp/Signal for business comms is a violation; deleting the messages makes it worse; "just to be responsive" is the most common rationalization in the enforcement orders.'),

  q(4380432, 'Career Skills', CHAPTER, 'Books and Records Rule 17a-4',
    'In an SEC sweep, the firm is asked to produce all business communications by named employees over the prior six years. The IT team complains they only have three years of archives. What rule are they running into?',
    'SEC Rule 17a-4 requires broker-dealers to preserve specific records, with most business communications retained for at least three years and certain other records longer — and the records must be retained in a non-rewritable, non-erasable format (WORM) accessible to the SEC',
    [
      ['Records only have to be kept for one year', 'One year is well below the 17a-4 minimum for most categories. Treating retention as one year is itself a violation.'],
      ['Records can be kept in any format the firm prefers', 'WORM (write-once-read-many) format is the regulatory requirement for the relevant categories — exactly to prevent the kind of edit-after-the-fact issues that arise in enforcement.'],
      ['Rule 17a-4 only applies to trade tickets, not communications', 'Rule 17a-4 covers business communications and a wide range of other records, not just trade tickets. Communications are squarely in scope.'],
    ],
    'Rule 17a-4 is the books-and-records backbone for broker-dealers. WORM format, multi-year retention, and SEC-accessibility are not optional, and shortfalls show up immediately in exam findings.'),

  // -------------------------------------------------------------------------
  // PERSONAL ACCOUNT TRADING + GIFTS + POLITICS (4380433–4380435)
  // -------------------------------------------------------------------------
  q(4380433, 'Career Skills', CHAPTER, 'Pre-clearance and blackout windows',
    'A trader wants to buy 500 shares of a name in their personal account that the research desk just initiated coverage on with a buy rating yesterday. What is the issue?',
    'Personal account trading typically requires pre-clearance and is subject to blackout windows around firm research, including a typical post-publication blackout that prevents the employee from front-running or piggybacking the firm\'s recommendation; many firms also impose a holding period (commonly 30 days) on PA trades',
    [
      ['It is fine because the employee is not on the research desk', 'PA restrictions apply firm-wide, not just to research staff. Being on the trading desk does not exempt the employee from blackout around firm research.'],
      ['It is fine because the rating is publicly disclosed', 'Public disclosure does not lift PA blackout. The firm-level rule exists precisely to prevent the conflicted appearance of employees riding firm recommendations.'],
      ['It is fine if the employee does not exceed $10,000 in the trade', 'PA pre-clearance and blackout rules apply regardless of size. There is no de minimis pass.'],
    ],
    'Personal account trading lives inside pre-clearance, blackout windows around firm research, and often a minimum holding period. The rule is structural — being on a different desk does not exempt the employee.'),

  q(4380434, 'Career Skills', CHAPTER, 'Gift and entertainment limit',
    'A client offers to take the salesperson and their spouse to a championship game with seats valued at $1,200 each. What is the standard treatment?',
    'FINRA Rule 3220 caps non-cash gifts at $100 per person per year, and most firms apply specific entertainment limits and pre-approval procedures for higher-value events; the $1,200 ticket is well over the gift threshold and requires firm pre-approval or a decline',
    [
      ['Sports events are excluded from gift limits', 'Entertainment is not exempt. It is governed by separate firm policies that typically require pre-approval above a threshold.'],
      ['The limit only applies to gifts from the broker to the client, not the other way around', 'The limit is on gifts received as well as given by associated persons. Direction does not change the rule.'],
      ['The $100 limit applies per gift, not per year', 'FINRA 3220 is a $100-per-person-per-year aggregate, not per gift. Splitting a large gift into installments does not solve it.'],
    ],
    'Gifts and entertainment have hard limits and pre-approval gates. A $1,200 ticket is not a borderline case — it lands well over the threshold and goes through the firm\'s G&E approval process or it gets declined.'),

  q(4380435, 'Career Skills', CHAPTER, 'MSRB G-37 political contributions',
    'A muni-desk salesperson personally donates $500 to a state treasurer\'s campaign in a state where their firm underwrites muni offerings. What is the consequence?',
    'MSRB Rule G-37 can result in a two-year ban on the firm engaging in negotiated municipal securities business with the issuer if a covered municipal finance professional makes more than a de minimis political contribution to an issuer official with whom the firm does business — the de minimis is generally $250 (or $0 if the MFP is not entitled to vote for the official)',
    [
      ['Personal donations are personal and do not affect the firm', 'G-37 specifically attributes covered employee contributions to the firm. The whole point of the rule is to address pay-to-play.'],
      ['G-37 only applies to corporate donations, not individual ones', 'G-37 primarily targets individual contributions by covered MFPs. Routing through the firm would actually be a different (and also prohibited) issue.'],
      ['The two-year ban only kicks in for contributions over $10,000', 'The threshold is much lower — $250 for officials the MFP can vote for, $0 otherwise. $500 to a state treasurer is comfortably over the line.'],
    ],
    'G-37 is one of the highest-cost rules an individual can trigger — a small personal donation can cost the firm two years of negotiated muni business with that issuer. Pre-clearance of political contributions is non-negotiable for muni-covered staff.'),

  // -------------------------------------------------------------------------
  // ORDER TAGS AND BEST-EX REPORTING (4380436–4380437)
  // -------------------------------------------------------------------------
  q(4380436, 'Career Skills', CHAPTER, 'Solicited versus unsolicited tagging',
    'A retail client calls to buy a stock the broker had recommended in a sales call earlier in the week. The broker tags the order "unsolicited" to keep the suitability profile clean. What is wrong with that?',
    'An order arising from the broker\'s prior recommendation is solicited regardless of who placed the call — mistagging an order as unsolicited to avoid suitability obligations is itself a violation and a recurring enforcement fact pattern',
    [
      ['Tagging follows whoever initiated the latest call, so it is correctly unsolicited', 'Tagging follows the source of the recommendation, not the direction of the most recent call. A solicited order does not become unsolicited because the client dialed in.'],
      ['Tags are administrative; they have no regulatory consequence', 'Tags drive suitability and Reg BI obligations, supervision sampling, and complaint handling. They are far from administrative.'],
      ['Unsolicited tagging is the default whenever the broker is unsure', 'Default-to-unsolicited is a known pattern and is treated as evasion in enforcement. The default should be solicited when there is any plausible link to a recommendation.'],
    ],
    'Order-tag integrity is a basic supervisory control. Mistagging solicited orders as unsolicited is its own violation and a marker of much bigger suitability problems.'),

  q(4380437, 'Career Skills', CHAPTER, 'Rule 605 versus 606 reporting',
    'A compliance trainee mixes up SEC Rule 605 and Rule 606. What is the cleanest distinction?',
    'Rule 605 is the market center execution quality report (filled by exchanges and other execution venues, covering metrics like effective spread and price improvement); Rule 606 is the broker-dealer order routing report (showing where brokers route customer orders and any payments for order flow received)',
    [
      ['605 and 606 are alternate names for the same report', 'They are distinct reports filed by different parties about different things. Treating them as one creates real confusion about who owes what disclosure.'],
      ['605 covers retail and 606 covers institutional', 'The split is by reporter and content (venue execution quality versus broker routing), not by customer type.'],
      ['Only 606 is still in effect; 605 was repealed', '605 remains in effect and was actually modernized; both reports continue to be required.'],
    ],
    'Rule 605 = execution venues report quality. Rule 606 = brokers report routing and payment for order flow. The pair is the public-facing window into how customer orders get to fills.'),

  // -------------------------------------------------------------------------
  // TRADE REPORTING (4380438–4380439)
  // -------------------------------------------------------------------------
  q(4380438, 'Career Skills', CHAPTER, 'TRACE for corporate bonds',
    'A trader on the IG credit desk does a $5mm block in a corporate bond. What is the reporting obligation?',
    'FINRA TRACE requires reporting of OTC secondary market corporate-bond transactions, generally within 15 minutes of execution (with shorter time frames now standard for many securities), and TRACE then disseminates the trade to the public with appropriate size caps for large blocks',
    [
      ['Corporate bond trades are not publicly reported', 'TRACE has reported corporate bond trades since 2002 and now covers a broad bond universe. Pre-TRACE opacity is long gone.'],
      ['Reports are due at end of day, not in 15 minutes', 'The standard reporting window is much tighter than end of day; many products are 15 minutes or less. Late reporting is one of the most common bond-desk supervisory findings.'],
      ['TRACE only applies to investment-grade bonds', 'TRACE covers IG, HY, structured, and Treasuries (with their own framework). It is not IG-only.'],
    ],
    'TRACE is the corporate-bond trade-reporting backbone. Tight reporting windows and broad product coverage mean the supervisory burden is real and persistent — late or missed reports are routine exam findings.'),

  q(4380439, 'Career Skills', CHAPTER, 'TRF for off-exchange equities',
    'An equity block trade is executed off-exchange in a dark pool. Where does it get reported to the consolidated tape?',
    'Off-exchange equity trades are reported to a FINRA Trade Reporting Facility (TRF) — typically run jointly with an exchange (Nasdaq/NYSE) — within the prescribed time after execution, which then disseminates the print to the consolidated tape with appropriate identifiers',
    [
      ['Off-exchange trades do not appear on the tape', 'Off-exchange equity trades appear on the consolidated tape via the TRF print. The tape is consolidated precisely so dark/ATS prints surface.'],
      ['The dark pool reports directly to the SEC and not the tape', 'TRF reporting flows to the consolidated tape, not just to a regulator. Market transparency is the explicit goal.'],
      ['Only trades over $1mm get reported', 'All trades are reported; only some are subject to delayed dissemination for very large blocks. The reporting itself is universal.'],
    ],
    'The TRF is how off-exchange equity prints reach the tape. Every off-exchange trade is reported within the prescribed window; only the dissemination timing varies for very large blocks.'),

  // -------------------------------------------------------------------------
  // CROSS-BORDER + OFAC / AML (4380440–4380442)
  // -------------------------------------------------------------------------
  q(4380440, 'Career Skills', CHAPTER, 'Reg S versus Rule 144A',
    'A US issuer is selling debt to QIBs in the US and to non-US buyers offshore in a single transaction. What are the two relevant registration exemptions?',
    'Rule 144A allows resales of restricted securities to Qualified Institutional Buyers (QIBs) in the US without registration; Regulation S provides a safe harbor for offers and sales made outside the United States — issuers commonly use both in parallel to reach domestic QIBs and offshore buyers in one deal',
    [
      ['Both 144A and Reg S are for retail offerings', 'Both are designed to avoid public registration and serve institutional or offshore buyers, not retail. Retail offers in the US generally require registration.'],
      ['144A and Reg S are mutually exclusive — issuers must pick one', 'Side-by-side 144A and Reg S tranches are routine. The exemptions serve different buyers and operate in parallel.'],
      ['Reg S is for US sales and 144A is for offshore', 'It is the reverse. Reg S is the offshore safe harbor; 144A is the QIB resale exemption in the US.'],
    ],
    'Rule 144A reaches US QIBs; Reg S reaches offshore buyers. Together they are the standard institutional debt issuance toolkit and let issuers raise globally without full SEC registration.'),

  q(4380441, 'Career Skills', CHAPTER, 'OFAC sanctions screening',
    'A new institutional account is being onboarded. The KYC team flags that one of the signatories shares a name with someone on the OFAC SDN list. What has to happen?',
    'OFAC requires US persons to block property and transactions of Specially Designated Nationals; a name hit must be investigated to confirm whether it is the listed individual (using identifiers like DOB, address, passport), and if so the account cannot be opened and the firm must report — false positives are common but cannot be cleared informally',
    [
      ['The account can be opened if the address does not match', 'OFAC clearance has to be a documented match resolution, not an informal field comparison. The firm has to evidence its screening conclusion.'],
      ['OFAC only applies to wire transfers, not account opening', 'OFAC applies across the relationship — onboarding, transactions, payments. Any property of a blocked person must be blocked.'],
      ['Compliance can override OFAC for important clients', 'OFAC has no relationship-importance exception. Blocking is mandatory; client importance is irrelevant.'],
    ],
    'OFAC screening is one of the few rules with effectively no exceptions and severe penalties for failure. A name hit is a stop-and-resolve event with documented evidence, not a discretionary check.'),

  q(4380442, 'Career Skills', CHAPTER, 'SAR and AML escalation',
    'A salesperson notices a client repeatedly funding small wires from multiple unrelated entities before placing large block trades, with no obvious commercial rationale. What is the right response?',
    'The pattern is a potential red flag for layering or structuring; AML policy requires the salesperson to escalate to the firm\'s AML/BSA officer, who evaluates whether a Suspicious Activity Report (SAR) should be filed with FinCEN — the salesperson must not tip off the client about the inquiry',
    [
      ['Ask the client directly to explain, then drop it if they answer', 'Asking the client risks tipping — a separate offense — and is not a substitute for AML escalation. Inquiry is the AML officer\'s job, not the desk\'s.'],
      ['Treat the pattern as harmless unless each wire crosses the CTR threshold', 'The $10,000 currency transaction reporting threshold is a different regime (CTRs). SAR triggers are about suspicious patterns, not single-transaction size.'],
      ['File the SAR directly from the desk', 'SAR filing runs through the AML/BSA officer, not individual desk staff. The desk escalates; the firm files.'],
    ],
    'AML red flags get escalated, not investigated by sales. The AML/BSA officer decides on SAR filings; tipping the client is itself a violation. The desk\'s job is to spot and route, with documentation.'),
]

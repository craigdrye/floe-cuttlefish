import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// EQUITY RESEARCH — Chapter 2: Filings, Earnings, and Management Commentary
// ----------------------------------------------------------------------------
// 44 questions (IDs 4370100–4370143) extending the existing 6 ER Ch2 Qs in
// careerAgentGeneratedRoadmapFinance.ts. Covers SEC filings (10-K, 10-Q, 8-K,
// proxy, S-1, 13F, 13D/13G, Form 4), earnings releases and prepared remarks,
// guidance mechanics, non-GAAP adjustments, backlog vs RPO vs deferred revenue,
// segment reporting, risk factors, management commentary patterns, and
// restatements.
//
// Voice matches jargonBusters.ts and the IB/VC chapter expansions: specific,
// US-GAAP / SEC-anchored, no boilerplate, every wrong answer with a unique
// bespoke whyWrong tied to a real ER misconception.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe ER Ch2 canonical bank'

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

const CHAPTER = 'Filings, Earnings, and Management Commentary'

// Difficulty distribution: 13 at 3 (~30%), 22 at 4 (~50%), 9 at 5 (~20%).
export const ER_CH2_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // SEC filings block (4370100–4370116)
  4370100: 3, // 10-K vs 10-Q audit scope
  4370101: 3, // MD&A as the read-first section
  4370102: 4, // Risk factor changes year over year
  4370103: 3, // 8-K event triggers
  4370104: 4, // 8-K Item 5.02 — officer departure
  4370105: 4, // 8-K Item 1.01 — material agreement
  4370106: 3, // DEF 14A — what is actually disclosed
  4370107: 4, // S-1 priorities versus 10-K
  4370108: 4, // 13F utility and limits
  4370109: 5, // 13D vs 13G — activist intent signal
  4370110: 4, // Form 4 insider buying vs selling reads
  4370111: 4, // 10-Q unaudited and the SAS 100 review
  4370112: 3, // Segment disclosure source documents
  4370113: 4, // CODM test — what counts as a segment
  4370114: 5, // Segments and SOTP valuation
  4370115: 4, // Risk factor as forward signal
  4370116: 5, // New risk factor appears mid-year

  // Earnings releases and prepared remarks (4370117–4370124)
  4370117: 3, // Press release vs prepared remarks
  4370118: 4, // Q&A vs scripted commentary
  4370119: 3, // Sell-side queue order
  4370120: 4, // Buy-side participation on calls
  4370121: 4, // Why both GAAP and non-GAAP matter
  4370122: 5, // Tax-effected non-GAAP discipline
  4370123: 4, // SBC add-back debate
  4370124: 4, // Recurring "one-time" charges

  // Guidance mechanics (4370125–4370131)
  4370125: 3, // Range vs point estimate
  4370126: 4, // Raised vs narrowed vs lowered
  4370127: 4, // Beat-and-raise vs beat-and-miss-guide
  4370128: 5, // Beat-and-lower-guide scenario
  4370129: 3, // Full-year vs quarterly guidance
  4370130: 4, // Guidance withdrawn — what it signals
  4370131: 4, // Conservative-bias detection

  // Leading indicators (4370132–4370136)
  4370132: 3, // Backlog vs RPO vs deferred revenue
  4370133: 4, // When RPO replaces backlog
  4370134: 4, // RPO covered vs uncovered
  4370135: 5, // Deferred revenue and ASC 606 mechanics
  4370136: 4, // Bookings disclosure quirks

  // Management commentary and restatements (4370137–4370143)
  4370137: 3, // Hedging language patterns
  4370138: 4, // CEO tone shift across calls
  4370139: 4, // Restructuring add-back recurrence
  4370140: 5, // Acquisition amortization add-back
  4370141: 4, // Big R vs Little r restatements
  4370142: 5, // Non-GAAP gap widening over multiple quarters
  4370143: 5, // 10-K with three new risk factors
}

export const erCh2Questions: Question[] = [
  // -------------------------------------------------------------------------
  // SEC FILINGS (4370100–4370116)
  // -------------------------------------------------------------------------
  q(4370100, 'Career Skills', CHAPTER, '10-K versus 10-Q audit scope',
    'A junior on the team asks why the 10-K takes priority over the three preceding 10-Qs when initiating coverage. What is the most precise answer?',
    'The 10-K is annual, audited under PCAOB standards, and carries the full MD&A, segment, and risk-factor disclosures; 10-Qs are unaudited interim reports with abbreviated disclosures and a SAS 100 review rather than a full audit',
    [
      ['10-Qs are less reliable because they are filed faster after quarter end', 'Speed of filing is not what changes reliability — the audit standard does. A 10-Q is timely *and* unaudited; the difference matters because it changes what the auditors have signed off on, not because it was rushed.'],
      ['The 10-K replaces all three preceding 10-Qs because it is more recent', 'The 10-K covers the full fiscal year, which includes the three quarters. It does not "replace" them — Q1, Q2, and Q3 detail still sits in the 10-Qs, and any analyst working a build by quarter still pulls from them.'],
      ['10-Ks are required to disclose forward guidance while 10-Qs are not', 'Neither filing is required to disclose forward guidance. Guidance lives in press releases and prepared remarks; treating the 10-K as the forward document confuses the historical-with-MD&A document with the forward-looking ones.'],
    ],
    'The 10-K is the foundation document because it carries audit, segment, risk, and MD&A in one place. 10-Qs are useful for quarter-on-quarter detail but lack the audit depth and disclosure breadth.'),

  q(4370101, 'Career Skills', CHAPTER, 'MD&A as the read-first section',
    'When pulling apart a 10-K for the first time, which section gives the highest density of management\'s own framing of the year and is typically read before the financial statements?',
    'Management\'s Discussion and Analysis (MD&A), because it is management\'s narrative explanation of results, liquidity, and known trends — disclosed under Item 7 of Form 10-K',
    [
      ['The auditor\'s report, because it sets the credibility of every number that follows', 'The auditor\'s report is short and binary in practice — clean opinion or qualified. It tells you whether to trust the numbers but does not give management\'s narrative of why those numbers came out the way they did.'],
      ['The risk factors section, because it lists everything that could affect the company', 'Risk factors are a forward-signal source but are largely boilerplate quarter to quarter. They are read carefully for *changes*, not as the first pass on the year\'s actual results.'],
      ['The exhibits index, because all material contracts are listed there', 'Exhibits are a reference list to filed contracts and certifications. They are not a narrative source and are typically scanned only when something specific (a new debt agreement, a CEO employment contract) needs lookup.'],
    ],
    'MD&A is where management chooses what to highlight, what to explain, and what to soft-pedal. Reading it first frames the rest of the filing and tells the analyst what management itself thinks the story is.'),

  q(4370102, 'Career Skills', CHAPTER, 'Risk factor year-over-year deltas',
    'A research associate compares the risk factor section in the current 10-K to last year\'s. Three risk factors are new and two have been substantially reworded. What is the right read?',
    'Treat new or reworded risk factors as management-flagged disclosure changes — they generally reflect issues that have surfaced enough that counsel insisted on the language; the rest of the section is mostly stable boilerplate',
    [
      ['Risk factors are written by counsel for liability protection, so year-over-year changes carry no signal', 'Counsel does draft them, but counsel changes language because something has changed at the company — a new lawsuit, a new dependency, a new competitor. The whole section is boilerplate; the deltas are not.'],
      ['Three new risk factors is normal turnover and not worth flagging', 'New risk factors are not statistical noise. Each new one usually corresponds to something specific management is anticipating — supply concentration, regulatory exposure, customer loss — and is worth tying to MD&A and call commentary.'],
      ['Risk factors only matter when the company is in legal trouble', 'Risk factors anticipate trouble before it materializes. By the time the company is in obvious legal trouble, the disclosure has typically been in place for two or three filings already.'],
    ],
    'Risk factors are forward-signal documents in disguise. The static portion is boilerplate but the year-over-year deltas often map to genuine management concerns that have crossed counsel\'s threshold for disclosure.'),

  q(4370103, 'Career Skills', CHAPTER, '8-K event triggers',
    'An associate asks what kind of event actually requires an 8-K. Which framing is most accurate?',
    '8-Ks disclose specified material events on a per-item basis (acquisitions, departures of officers, material agreements, results of operations, ratings changes, and so on) and are generally due within four business days of the triggering event',
    [
      ['8-Ks are filed only when the company has positive news to announce, such as an acquisition or a new contract', 'This is one of the most common misreads. 8-Ks are event-driven, not sentiment-driven — they cover departures, defaults, restatements, and impairments just as much as acquisitions. Treating them as a positive-news channel will miss the most informative ones.'],
      ['8-Ks are quarterly summaries that supplement the 10-Q', 'There is no quarterly cadence — 8-Ks are filed within four business days of an event, irregularly. The 10-Q is the quarterly summary.'],
      ['8-Ks are filed only at the company\'s discretion when they choose to communicate with the market', 'The triggers are mandatory under specified Items (1.01, 2.01, 5.02, etc.). A company that delays or skips a required 8-K invites SEC enforcement.'],
    ],
    'The 8-K is the event channel. It is item-coded, mandatory on specific triggers, and includes both good news and bad news — the bad-news 8-Ks (Item 4.02 non-reliance, Item 5.02 departures, Item 2.04 defaults) are often the most analytically informative.'),

  q(4370104, 'Career Skills', CHAPTER, '8-K Item 5.02 officer departure',
    'A company files an 8-K under Item 5.02 announcing that the CFO is leaving "to pursue other interests," effective in 30 days, with no successor named and no separation agreement filed as an exhibit. What is the right initial read?',
    'The combination of no named successor and no separation agreement filed as an exhibit is itself a signal — orderly transitions usually announce the replacement and attach the separation terms; this pattern raises the probability of a non-amicable exit',
    [
      ['"Pursue other interests" is standard language and carries no information', 'The phrase is standard, but the *structure* of the filing carries information. A planned departure typically has a successor in place and the separation agreement filed; the absence of both is the signal, not the wording.'],
      ['CFO departures are routine and only matter if the stock reacts', 'Treating the market reaction as the signal is circular — the analyst job is to read the filing for what *would* move the stock, not to wait for the move. CFO departures are also rarely routine; they cluster around audit issues, guidance friction, or strategic disputes.'],
      ['The 30-day notice period proves the transition is amicable', '30 days is in fact short for a senior CFO. Amicable transitions usually allow a longer overlap with the successor; a tight notice with no named replacement is more consistent with friction.'],
    ],
    'Item 5.02 8-Ks are read by structure, not just content. Successor named, separation agreement filed, transition period — these structural features are what distinguish a planned retirement from a friction exit.'),

  q(4370105, 'Career Skills', CHAPTER, '8-K Item 1.01 material agreement',
    'A company files an 8-K under Item 1.01 disclosing a new five-year supply agreement with a single customer for an amount the filing describes as "material." The agreement itself is filed as an exhibit with significant redactions. How should the analyst handle this?',
    'Read the redacted agreement for what *is* visible — counterparty, term, termination triggers, exclusivity — and use the materiality threshold (typically 10% of revenue or contracts that would be material under Reg S-K Item 601(b)(10)) to bracket the size; do not assume pricing because it is redacted',
    [
      ['Skip the exhibit because redactions make it useless', 'Redacted agreements still disclose term, counterparty type, termination rights, and exclusivity clauses — all of which are analytically valuable. Only pricing and certain commercially sensitive details are typically redacted under confidential treatment requests.'],
      ['Assume the redactions hide unfavorable pricing for the company', 'Redactions are usually requested to protect *competitive* terms, not to hide bad news. Inferring direction from the existence of redaction is speculation; the visible terms tell you more than the missing ones.'],
      ['Treat the agreement as already in the run rate because it is signed', 'Signed material agreements often have ramp periods, contingencies, or take-or-pay structures. The 8-K tells you the contract exists; the modeling work is whether and when it converts to recognized revenue.'],
    ],
    'Item 1.01 8-Ks are model-affecting events. The redactions are normal but everything else is fair game — counterparty, term, exclusivity, termination — and that information often drives the estimate change more than the price would.'),

  q(4370106, 'Career Skills', CHAPTER, 'DEF 14A — what is actually disclosed',
    'When pulling the most recent DEF 14A (proxy) for a US public company, which of the following is reliably disclosed?',
    'Named executive officer compensation by component (salary, bonus, stock awards, option awards, non-equity incentive, perquisites), board composition with biographies, and shareholder proposals up for vote',
    [
      ['Detailed forecasts of the company\'s financials for the coming year', 'Proxies are governance documents, not forward financial documents. Any forward financial detail in a proxy is typically tied to a compensation target (e.g., the bonus plan), not a company forecast.'],
      ['A list of every employee by name and salary band', 'Compensation disclosure is limited to named executive officers — CEO, CFO, and the next three highest-paid. Below that, only aggregate figures are required.'],
      ['Customer concentration and segment revenue by quarter', 'Customer and segment detail lives in the 10-K and 10-Q. The proxy is governance, compensation, and director-election material.'],
    ],
    'The proxy is a governance disclosure. It is the source of truth for compensation, board structure, and shareholder votes — and is often underused by junior analysts who treat it as a non-financial filing.'),

  q(4370107, 'Career Skills', CHAPTER, 'S-1 priorities versus 10-K',
    'You are reading an S-1 for a company about to go public. Which sections are typically richer in an S-1 than in a steady-state 10-K and why?',
    'Use of proceeds, dilution table, related-party transactions, principal stockholders, and historical financial statements with longer narrative — the S-1 is the registration document and must explain the company end-to-end to a first-time public investor',
    [
      ['MD&A is shorter in the S-1 because the company has less history', 'MD&A is typically *longer* and more detailed in an S-1 because management has to construct a coherent narrative from the historical financials for an investor base that has never seen the company. The depth, not the length, is what changes.'],
      ['Risk factors are minimal in the S-1 because underwriters do not want to scare investors', 'Risk factors are typically the longest in any filing the company will ever file — underwriters insist on thorough risk disclosure as liability insurance under Securities Act Section 11. The opposite of the claim is true.'],
      ['The S-1 omits audited financials because the company has just been audited as a private entity', 'The S-1 requires audited financials (typically three years for the company and two for the comparative periods). Skipping them would be a registration deficiency.'],
    ],
    'The S-1 is a one-shot education for the public market. Use of proceeds, dilution, related-party transactions, and full historical disclosure are the sections that exist precisely because new investors have no prior context.'),

  q(4370108, 'Career Skills', CHAPTER, '13F utility and limits',
    'A salesperson asks what a 13F actually tells you about an institutional holder\'s position. Which framing is correct?',
    'A 13F discloses long US equity holdings of institutions managing $100M+ as of quarter-end, filed within 45 days — it omits shorts, non-US securities, cash, and is a snapshot that can be up to 45 days stale by the time it is public',
    [
      ['A 13F is a real-time feed of what each major holder owns', 'There is no real-time component. 13Fs are quarterly snapshots filed up to 45 days after quarter-end, meaning the data can be over four months old by the time it is referenced.'],
      ['A 13F includes the holder\'s short positions, which is what makes it useful for crowded-trade analysis', 'Shorts are explicitly excluded. The 13F is a long-only snapshot, which is why it cannot answer crowded-short questions and is mostly used for long-side concentration analysis.'],
      ['A 13F tells you the cost basis and entry price of each position', 'Cost basis is not required and is almost never disclosed. The 13F shows shares and quarter-end market value only.'],
    ],
    'The 13F is useful for what it discloses (long US holdings of large institutions) and dangerous for what it does not (shorts, non-US, derivatives, cash, intra-quarter trading, cost basis). Reading it as anything more than a stale long snapshot is a common error.'),

  q(4370109, 'Career Skills', CHAPTER, '13D versus 13G — activist intent',
    'An institutional investor crosses the 5% beneficial ownership threshold in a company you cover. They file a Schedule 13D rather than a 13G. What is the most precise read?',
    'A 13D signals the investor is not passive — under Rule 13d-1, 13G is for passive investors (institutions, qualified holders) and 13D is required for those who may seek to influence control; choosing 13D announces, in effect, that activism or engagement is on the table',
    [
      ['13D and 13G are interchangeable forms and the choice is administrative', 'They are not interchangeable. The eligibility criteria and the disclosure obligation differ specifically because 13D filers must disclose purpose, plans, and intent — which 13G filers do not.'],
      ['13D filers are required to seek board seats within 60 days of filing', 'There is no such requirement. The 13D discloses purpose and any plans but does not bind the filer to a specific action timeline.'],
      ['13G is for stakes above 10% and 13D is for stakes below 10%', 'The thresholds are about *intent and filer type*, not size. Both forms are triggered at 5%; the choice between them is about passivity, not stake size.'],
    ],
    'The 13D/13G choice is a disclosed declaration of intent. Reading it correctly is the difference between recognizing that an activist has arrived and assuming a quiet institution just rebalanced into the name.'),

  q(4370110, 'Career Skills', CHAPTER, 'Form 4 insider buying vs selling',
    'A CFO files three Form 4s in a quarter — two open-market purchases and one sale under a 10b5-1 plan adopted nine months ago. How should you weight these signals?',
    'Treat the open-market purchases as higher-signal because they are discretionary and use the insider\'s own capital; the 10b5-1 sale was pre-scheduled and the insider had no recent choice about timing, so it carries far less information',
    [
      ['All Form 4s carry equal weight because they all reflect insider activity', 'Form 4 signal depends entirely on whether the trade was discretionary at the moment of execution. A 10b5-1 sale set up nine months ago tells you nothing about today\'s view; a same-day open-market buy is high-signal.'],
      ['The two purchases offset the sale and the net signal is zero', 'Netting share count ignores the asymmetric information content. Two discretionary buys outweigh one pre-scheduled sale even if the share counts are equal — the relevant axis is informational, not arithmetic.'],
      ['Sales under 10b5-1 plans are themselves bearish because insiders only adopt them when they want to sell', 'The 10b5-1 framework is specifically designed to separate the sale from any contemporaneous information. The adoption date is months earlier; reading the execution as bearish reverses the regulatory purpose of the plan.'],
    ],
    'Form 4 reads require attention to *how* the trade was executed. Open-market discretionary buys are the highest-signal insider activity; 10b5-1 sales are typically the lowest. Confusing the two is one of the most common Form 4 misreads.'),

  q(4370111, 'Career Skills', CHAPTER, '10-Q SAS 100 review',
    'A junior asks why 10-Qs are "unaudited" if a CPA firm is still involved. What is the cleanest explanation?',
    'The quarterly financials are subject to an interim review under AS 4105 (formerly SAS 100) — substantially less procedure than an audit, providing limited assurance rather than reasonable assurance — which is why the 10-Q carries an unaudited label',
    [
      ['Auditors are not involved in 10-Q preparation at all', 'They are involved — they perform an interim review. The review is narrower than a full audit but it is still a CPA-firm engagement, not a no-involvement filing.'],
      ['The 10-Q is unaudited only because management does not want to pay for four audits per year', 'The framework choice (review rather than audit on interim) is driven by SEC rule and audit standards, not by cost. The cost differential is real but it is not the reason 10-Qs are reviewed and 10-Ks are audited.'],
      ['"Unaudited" means the numbers are unreliable and should not be modeled', 'Reviewed financials are still reliable enough to base estimates on — analysts do this every quarter. "Unaudited" describes the level of CPA assurance, not the reliability of the underlying books.'],
    ],
    'The 10-Q review provides limited assurance ("we are not aware of any material modifications") rather than the reasonable assurance of an audit ("present fairly, in all material respects"). The label matters for understanding why year-end numbers sometimes restate earlier quarters.'),

  q(4370112, 'Career Skills', CHAPTER, 'Segment disclosure source documents',
    'Where in the 10-K does the official segment financial detail live, and what is the governing accounting standard?',
    'In the segment reporting footnote, governed by ASC 280, which requires disclosure of the segments management uses internally — revenue, profit/loss measure used by the chief operating decision maker (CODM), assets in some cases, and reconciliation to consolidated totals',
    [
      ['The segment detail lives in the MD&A and there is no separate footnote', 'MD&A discusses segments narratively but the *quantitative* disclosure required by ASC 280 lives in the financial statement footnotes. The MD&A frames; the footnote anchors.'],
      ['Segments are disclosed only in the proxy statement', 'The proxy is governance; the segment data is financial statement material in the 10-K and 10-Q footnotes.'],
      ['Segment data is voluntary disclosure and not governed by a specific standard', 'ASC 280 is the governing standard and it is mandatory for public registrants. The judgment ASC 280 gives is in *which* segments to report (the CODM test), not whether to report them.'],
    ],
    'ASC 280 makes segments management-defined — companies report the segments their CODM uses internally. That gives discretion on lumping or splitting, which is why segment changes between filings are themselves a signal.'),

  q(4370113, 'Career Skills', CHAPTER, 'CODM test for segment reporting',
    'A company combines what investors think of as two distinct businesses into a single reportable segment. Management defends this under ASC 280. What is the actual test the company has applied?',
    'The chief operating decision maker (CODM) test — segments are reported as management actually reviews them internally; if the CODM (typically the CEO or an executive committee) reviews discrete operating results for each business, they should be separate segments, otherwise they can be combined',
    [
      ['Segments are defined by SIC code and the company has no discretion', 'SIC codes are an external classification used by data vendors, not the standard for ASC 280 segment reporting. The standard is the CODM test, not industry coding.'],
      ['Segments are defined by revenue threshold — anything over 10% of consolidated revenue must be a separate segment', 'The 10% quantitative threshold determines which *operating segments* must be disclosed separately as reportable, *after* operating segments are first identified using the CODM test. The threshold is downstream of the test, not the test itself.'],
      ['Segments are defined by margin profile — businesses with similar margins must be combined', 'Margin similarity is one criterion for *aggregating* operating segments under ASC 280-10-50-11, but only after the CODM test has identified them. It is not the test itself.'],
    ],
    'Segment definition is judgmental and management-led under the CODM test. Knowing this lets the analyst challenge whether combined segments are obscuring different economics — and gives a basis to push for sub-segment disclosure in IR conversations.'),

  q(4370114, 'Career Skills', CHAPTER, 'Segments and SOTP valuation',
    'Your team is moving from a single-multiple valuation to a sum-of-the-parts on a conglomerate. Which segment-reporting feature determines whether SOTP is actually buildable?',
    'Whether segment-level revenue, profitability measure (segment EBIT, EBITDA, or operating profit per management\'s definition), and ideally segment assets are disclosed — without segment profitability, SOTP collapses into a revenue-only multiple per business, which is structurally weaker',
    [
      ['Whether the company has issued segment-level guidance', 'Guidance is helpful but not required for SOTP. Historic segment profitability is the load-bearing disclosure; without it no amount of forward guidance can rescue a missing baseline.'],
      ['Whether the segments have separate ticker symbols or tracking stocks', 'Tracking stocks are extremely rare and not necessary for SOTP. SOTP works on disclosed segment financials, not separately traded securities.'],
      ['Whether the auditor has separately opined on each segment', 'Auditors opine on the consolidated financials, not segment by segment. The segment disclosure is a footnote within the audited statements, not a separately audited document.'],
    ],
    'A SOTP only holds up when the company discloses enough segment economics to value each piece. The footnote under ASC 280 is the document that either enables or blocks the methodology — and gaps in disclosure are themselves a discussion to raise with IR.'),

  q(4370115, 'Career Skills', CHAPTER, 'Risk factors as forward signal',
    'In a 10-K for a cloud software company, you notice a new risk factor about "concentration of revenue with a small number of large customers." The previous year\'s 10-K had no such language. What is the most informed read?',
    'The risk factor language has crossed counsel\'s threshold for required disclosure — typically meaning customer concentration has materially increased, often into the range where a single customer is approaching 10% of revenue (a separate quantitative disclosure trigger under ASC 280)',
    [
      ['Counsel adds new risk factors every year as standard practice and this is not informative', 'Counsel does refresh language, but materially new categories — especially concentration disclosures — are typically tied to a specific underlying change, not a calendar refresh.'],
      ['The new language means the company has lost a major customer', 'Customer loss would be flagged through a different disclosure path (impairment, guidance revision, possibly an 8-K). New concentration language is more consistent with one customer growing into outsized weight than with losing one.'],
      ['Risk factors are written in advance of risks that have not yet materialized, so the addition is purely prospective', 'In practice, counsel adds risk factors when the underlying risk has *already* materialized or is materializing. Purely speculative additions are rare because they invite questions.'],
    ],
    'New risk factor categories are usually anchored in a present-tense change at the company. The job is to identify what that change is — and customer concentration language paired with the ASC 280 10% threshold is a tractable place to look.'),

  q(4370116, 'Career Skills', CHAPTER, 'New risk factor appearing mid-year',
    'A company has not historically had any environmental or remediation risk factors. The current 10-K introduces three new ones — about a manufacturing site, about prior-year disposal practices, and about regulatory inquiry. The MD&A does not mention any of this. How should you reconcile?',
    'Treat the gap between risk factors and MD&A silence as itself informative — material risks generally appear in MD&A under "Known Trends and Uncertainties" once they cross the threshold; if counsel insisted on risk factor disclosure but management has not yet narrated the issue in MD&A, the situation is likely live and developing',
    [
      ['Risk factors and MD&A are independent disclosures and the gap is meaningless', 'They are independent in form but in practice management is required to disclose material known trends in MD&A. Counsel-driven risk language without MD&A counterpart is a tension worth flagging, not an artifact of independent drafting.'],
      ['MD&A silence proves the issue is not material and the risk factors are boilerplate', 'The opposite read is more common — counsel does not add three new environmental risk factors as boilerplate. The MD&A silence is more likely a function of timing or active investigation than non-materiality.'],
      ['The risk factors must reflect a prior-period issue already disclosed and now restated', 'Restated prior-period disclosures would appear in the financial statement footnotes or an 8-K Item 4.02, not as new risk factors. The pattern described is consistent with a current, developing issue.'],
    ],
    'Cross-reading risk factors against MD&A is one of the higher-leverage moves in filing analysis. New risk factors without MD&A counterpart often precede an 8-K or a guidance event within one to two filings.'),

  // -------------------------------------------------------------------------
  // EARNINGS RELEASES AND PREPARED REMARKS (4370117–4370124)
  // -------------------------------------------------------------------------
  q(4370117, 'Career Skills', CHAPTER, 'Press release vs prepared remarks',
    'A junior on the team asks why both the earnings press release and the prepared remarks are circulated separately. What is the cleanest explanation of the difference?',
    'The press release is the 8-K-attached Reg G-compliant document with results, tables, and reconciliations; prepared remarks are the scripted opening of the call, written and approved in advance and typically read by the CEO and CFO before Q&A',
    [
      ['The press release and prepared remarks are the same document with different formatting', 'They are different documents. The press release is the legal disclosure; prepared remarks are the call script. Treating them as interchangeable misses places where the prepared remarks expand on or hedge what the press release stated.'],
      ['The press release contains forward guidance, while prepared remarks are historical only', 'It is usually the other way around in detail — the press release gives the guidance numbers, but the prepared remarks are where management explains the *assumptions* behind them. Both touch the forward period.'],
      ['Prepared remarks are not legally enforceable disclosures and can be ignored', 'Prepared remarks are public statements subject to the same Reg FD and antifraud framework as any other public communication. They are enforceable and routinely cited in securities litigation.'],
    ],
    'Press release is the document of record; prepared remarks are the framing. The most useful earnings reads compare the two — a number that is loud in the release but quiet in the script is a different signal from one that is loud in both.'),

  q(4370118, 'Career Skills', CHAPTER, 'Q&A versus scripted commentary',
    'Why do senior analysts treat the Q&A portion of an earnings call differently from the prepared remarks?',
    'Prepared remarks are pre-written and rehearsed; Q&A is live and unscripted, so management\'s word choice, hedges, pauses, and refusal-to-answer patterns carry more information per minute even though the *content* is less comprehensive',
    [
      ['Q&A is more informative because management has had less time to think about it', 'The premise is right but the mechanism is sharper than "less time to think." The information comes from unscripted *choice* — what management volunteers, what they decline, and how they phrase hedges — not from cognitive load.'],
      ['Q&A is less informative because management gives shorter answers', 'Shorter answers in Q&A often contain more signal than longer ones because they are unrehearsed. Length is a weak proxy for information content.'],
      ['Q&A is purely a courtesy and analysts should focus on the prepared remarks', 'Q&A is where most informational divergence from the script happens. Treating it as courtesy misses the most analytically dense portion of the call.'],
    ],
    'The Q&A is the part of the call that cannot be fully pre-controlled. Reading it well — including who got called on, who got the longest answer, and what management refused to address — is one of the highest-leverage habits in an earnings cycle.'),

  q(4370119, 'Career Skills', CHAPTER, 'Sell-side queue order',
    'On a typical large-cap earnings call, in what order does IR queue sell-side analysts for Q&A?',
    'Typically the largest banks and the analysts with the closest IR relationship get called first, then a roughly descending order by coverage seniority and relationship — buy-side analysts are rarely queued on calls and usually engage via 1x1s and conferences',
    [
      ['Strictly first-come, first-served based on when they dial in', 'Most IR teams curate the queue rather than relying on dial-in order. The pretense of fairness is a constraint on operator-managed queues, not on IR-managed ones, which is the more common large-cap setup.'],
      ['Whichever analysts have published the most bullish notes', 'IR teams that favored bull-only voices would lose credibility quickly with the buy-side. The bias is toward *relationship and seniority*, not rating direction.'],
      ['Buy-side analysts are usually called first because they own the stock', 'Buy-side participation on public calls is uncommon. The structure of the call is largely a sell-side forum; buy-side engagement happens through 1x1s and direct IR channels.'],
    ],
    'Knowing the queue logic is part of reading the call. The first three analysts called typically frame the narrative for the rest of the session, and IR\'s ordering decisions are themselves a signal of which sell-side voices they want amplified.'),

  q(4370120, 'Career Skills', CHAPTER, 'Buy-side participation on calls',
    'A buy-side portfolio manager wants to ask a question on the earnings call but is not called. Why is this normal rather than exceptional?',
    'Earnings call Q&A is structured for sell-side analysts who publish — they are the public-facing channel; buy-side investors typically engage management through 1x1 meetings, NDR (non-deal roadshow) schedules, and conferences where they are the customer rather than a public participant',
    [
      ['Buy-side investors are not allowed to ask questions on public calls under Reg FD', 'Reg FD does not bar buy-side from asking; it bars *selective* disclosure. Buy-side can in principle dial in. They are rarely queued because the call format is sell-side-centric, not because of a legal bar.'],
      ['IR teams have no way to identify buy-side participants on the line', 'IR teams routinely know who is on the line — dial-in IDs, host platforms, and pre-call lists give them visibility. The non-participation is a format convention, not an information gap.'],
      ['Buy-side questions are filtered through sell-side analysts who then ask them', 'There is no formal channel for this. Buy-side investors do not feed questions through sell-side as a matter of course; the buy-side engages directly with IR and management privately.'],
    ],
    'The format of the public call is sell-side facing. Buy-side participation happens off the call, which is one reason the most informationally rich management interactions never appear in a transcript.'),

  q(4370121, 'Career Skills', CHAPTER, 'Why GAAP and non-GAAP both matter',
    'A company reports both GAAP EPS and adjusted (non-GAAP) EPS each quarter. Why does serious research track both rather than picking one?',
    'GAAP is the standardized accounting result and the basis for tax, debt covenants, and audit; non-GAAP reflects management\'s view of recurring economics and is what consensus is typically built on — the *gap between them* is itself an analytical signal',
    [
      ['Non-GAAP is the "real" earnings number and GAAP is irrelevant', 'GAAP earnings drive cash taxes, covenant compliance, and the audit opinion. Calling it irrelevant ignores the legal and financial plumbing that uses GAAP exclusively.'],
      ['GAAP is the "real" number and non-GAAP is management spin to be ignored', 'Non-GAAP, used well, does normalize for legitimately non-recurring items and is the consensus benchmark. Dismissing it means modeling against a number no one trades against.'],
      ['The two numbers should be averaged to get a fair view', 'Averaging is meaningless — they measure different things by different rules. The analytical move is to track both and explain the gap, not to compute an arithmetic midpoint.'],
    ],
    'GAAP and non-GAAP serve different purposes — legal vs operational, audited vs adjusted, covenanted vs consensus. The disciplined analyst tracks both and treats the gap as a quality metric on its own.'),

  q(4370122, 'Career Skills', CHAPTER, 'Tax-effected non-GAAP discipline',
    'A company adds back $50M of stock-based compensation pre-tax to compute adjusted EPS, but does not tax-effect the add-back. What is the technical issue?',
    'Non-GAAP earnings adjustments should generally be tax-effected at the appropriate marginal rate so that the adjusted earnings line reflects the after-tax economics of the adjustment; failing to do so inflates non-GAAP EPS by the value of the un-taxed shield',
    [
      ['Stock-based compensation is non-cash so it should not be tax-effected', 'Non-cash and tax-deductible are separate concepts. SBC is generally tax-deductible when shares vest, which makes its tax treatment economically real even though the expense is non-cash.'],
      ['Tax-effecting adjustments is optional under SEC guidance and most companies skip it', 'SEC Reg G guidance and the staff Compliance and Disclosure Interpretations have repeatedly pushed companies *toward* tax-effected non-GAAP, not away from it. Skipping it is increasingly flagged as a disclosure deficiency.'],
      ['Tax-effecting adjustments would make non-GAAP and GAAP look the same', 'Tax-effecting reduces the size of the adjustment but it does not eliminate the gap — the underlying add-back is still there, just sized correctly after-tax.'],
    ],
    'Tax-effecting non-GAAP adjustments is one of the cleanest tells of disclosure rigor. Companies that add back pre-tax items and pass the full amount through to net income are quietly overstating adjusted EPS by the tax that would have been owed.'),

  q(4370123, 'Career Skills', CHAPTER, 'SBC add-back debate',
    'A company adds back stock-based compensation to compute adjusted EBITDA and frames it as a non-cash item. A senior PM in your firm pushes back: "SBC is not non-cash, it is dilution." Who is right?',
    'The PM is right in the way that matters for valuation — SBC does not consume cash today, but it transfers economic ownership to employees, and that dilution shows up in share count and ultimately per-share value; an EBITDA number that adds it back without consequence overstates owner economics',
    [
      ['SBC is non-cash and should be added back to EBITDA without qualification', 'It is non-cash in the period but it is not free. The dilution it creates is a real claim on future cash flows; treating SBC as costless treats the share count as fixed when it is not.'],
      ['SBC is fully cash because companies typically repurchase shares to offset it', 'Buyback offsets are common but partial; share count net of buybacks usually still drifts up over time. The "buybacks make SBC free" argument generally does not survive a multi-year share count walk.'],
      ['The PM is wrong because dilution only matters when shares are actually issued at vesting', 'Accounting recognizes SBC expense over the service period precisely to match the economic transfer to its earning. Waiting for vesting to recognize the economics would mismatch the expense with the work being compensated.'],
    ],
    'The SBC add-back debate is the cleanest live disagreement in non-GAAP discipline. The technically correct answer is that SBC is non-cash *and* dilutive, and any framework that treats it as one without the other will overvalue the equity.'),

  q(4370124, 'Career Skills', CHAPTER, '"One-time" charges that recur',
    'A company has reported "restructuring charges" as a non-GAAP add-back in seven of the last eight quarters. The amounts vary but the line is essentially continuous. How should you treat this in your model?',
    'Treat the line as recurring and reverse the add-back — "one-time" charges that appear every quarter are by definition not one-time, and the SEC has repeatedly flagged this pattern as a non-GAAP misuse under the "individually tailored accounting principles" guidance',
    [
      ['Trust management\'s classification — they have better visibility into whether each charge is non-recurring', 'Management\'s line-by-line classification is reasonable for any single quarter but breaks down across a multi-quarter pattern. Seven of eight is a structural pattern that overrides per-period framing.'],
      ['Add back any quarter\'s charge but not the multi-quarter cumulative total', 'This is the implicit approach when only the current quarter is in view — and it is exactly why the practice persists. Looking across quarters reveals that the per-period add-back compounds into a recurring expense.'],
      ['Restructuring charges are by SEC definition always non-recurring and must be added back', 'There is no SEC definition that protects recurring restructuring lines. The SEC staff has, on the contrary, pursued enforcement on continuous "one-time" classifications.'],
    ],
    'The "individually tailored accounting principles" line of SEC guidance specifically targets recurring non-GAAP add-backs. When a charge appears every quarter, the disciplined treatment is to fold it back into the recurring cost base and price the company on that view.'),

  // -------------------------------------------------------------------------
  // GUIDANCE MECHANICS (4370125–4370131)
  // -------------------------------------------------------------------------
  q(4370125, 'Career Skills', CHAPTER, 'Range versus point estimate',
    'A company guides next quarter revenue as "$480M to $500M" rather than "approximately $490M." What does the choice of a range versus a point estimate typically reflect?',
    'A range is the more common large-cap convention and reflects management\'s view of plausible outcomes; range width is the analytical signal — narrow ranges typically express higher confidence, wide ranges express lower confidence or higher cycle/mix sensitivity',
    [
      ['Ranges are always more conservative than point estimates', 'A range can sit higher or lower than a comparable point estimate. The conservatism is in how the midpoint is set, not in the choice of format.'],
      ['Ranges are used only when management does not know the answer yet', 'Even highly confident management teams use ranges because business outcomes are stochastic. The range format is structural, not a confession of ignorance.'],
      ['Point estimates are required when guidance is reaffirmed', 'There is no such requirement. Reaffirmation simply restates prior guidance, in whatever format it was originally given.'],
    ],
    'Range width is the underused dimension of guidance. A range tightening (e.g., from $20M wide to $5M wide) usually signals improving visibility; a range widening signals the opposite — both moves often happen without the midpoint moving at all.'),

  q(4370126, 'Career Skills', CHAPTER, '"Raised, narrowed, lowered" semantics',
    'Management raises the low end of full-year guidance but leaves the high end unchanged. How is this best characterized?',
    'A raise *and* a narrow — the midpoint moves up, the range tightens, and the implication is that management has eliminated some downside scenarios while not yet adding upside scenarios',
    [
      ['Pure narrow — no real change since the high end is unchanged', 'Moving the low end mechanically moves the midpoint and the implied probability mass. Calling it pure narrow ignores the upward shift in expected value.'],
      ['Pure raise — the high end is the only thing that matters', 'The high end being unchanged means management has not added upside, just removed downside. Treating only the high end as the signal misses the asymmetry of the move.'],
      ['Neutral — moves in opposite ends cancel out', 'There are no moves in opposite ends here. Both endpoints either moved up or stayed flat; nothing was lowered.'],
    ],
    'Guidance moves should be decomposed into midpoint shift and range-width shift. "Raised and narrowed" is the strongest typical move because it shifts the central case up *and* expresses confidence by tightening — but it can mask conservatism in the high end.'),

  q(4370127, 'Career Skills', CHAPTER, 'Beat-and-raise versus beat-and-miss-guide',
    'On a single quarter, a company reports above-consensus revenue and EPS but raises next quarter guidance by less than the consensus expected. The market reacts negatively. Why is this consistent with rational pricing?',
    'The beat is backward-looking and already partially in the stock through whisper expectations; the smaller-than-expected raise implies the beat does not flow through to forward periods — investors are pricing the forward path, not the trailing quarter',
    [
      ['The market is wrong because a beat is unambiguously positive', 'A beat is positive on its own, but valuation is forward-looking. If forward guidance does not extend the beat, the present value of the move is smaller than the headline suggests.'],
      ['The stock fell because investors prefer companies that do not beat at all', 'No investor structurally prefers misses. The reaction is about the *gap between trailing beat and forward extension*, not a preference for misses.'],
      ['Beat-and-raise is always neutral when consensus had already moved up', 'If consensus is fully in the price, a beat-in-line is neutral. But the question describes a smaller-than-expected raise, which is a forward-period downward revision relative to consensus — that is negative, not neutral.'],
    ],
    'The "beat-and-raise" archetype only works as a positive read when the raise *exceeds* the consensus walk for the forward periods. A raise that lags consensus is, in valuation terms, a guide-down — which is why stocks can fall on apparently positive headlines.'),

  q(4370128, 'Career Skills', CHAPTER, 'Beat-and-lower-guide scenario',
    'A company beats current-quarter revenue and EPS by mid-single digits but cuts full-year guidance materially, citing softer order pace exiting the quarter. How should the research note frame this?',
    'The beat is stale information about a quarter that has closed; the cut is fresh information about future quarters, with management directly attributing it to weakening order pace — the right framing leads with the cut and treats the beat as legacy',
    [
      ['Headline the beat because the trailing quarter is what most readers will see first', 'Headlining the beat in the face of a guide-down is exactly the framing failure investors complain about. The trailing quarter is no longer the actionable information; the guide-down is.'],
      ['Treat the cut as conservatism and assume the company is sandbagging the forward period', 'Sandbagging is a real possibility but requires evidence — a recent management pattern of beats, end-market data inconsistent with the cut, or specific commentary. Defaulting to "sandbagging" without that evidence is a way of dismissing the data point.'],
      ['Issue no view until the next quarter\'s data to avoid overreacting to one quarter', 'Withholding a view on a guide-down with attributed weakening order pace is functionally a hold call by inaction. Estimates and rating should move on the new information.'],
    ],
    'Beat-and-lower-guide is one of the highest-information patterns in earnings. Management has *both* the trailing beat (positive) and the forward visibility to cut (negative) at the same time — and they chose the cut. The note should lead with the choice they made, not the headline they printed.'),

  q(4370129, 'Career Skills', CHAPTER, 'Full-year versus quarterly guidance',
    'A US large-cap industrial gives full-year revenue and EPS guidance but does not give quarterly guidance. A new associate asks why both are not given. What is the most accurate framing?',
    'Quarterly guidance creates earnings-cycle pressure and is increasingly avoided by mature companies in favor of full-year ranges; the full-year format reduces short-term timing noise (mix, customer pull-ins, weather) and shifts the conversation toward annual trajectory',
    [
      ['Quarterly guidance is mandatory under SEC rule for large-cap companies', 'No SEC rule requires guidance at any cadence. Guidance is voluntary; the SEC only requires that whatever is communicated complies with Reg G and Reg FD.'],
      ['Companies that do not give quarterly guidance have inferior visibility', 'The opposite is often true. Many companies with strong visibility move to annual-only to discourage short-term gaming of expectations.'],
      ['Quarterly guidance is more common at large caps; only smaller companies use annual-only', 'In practice, the trend has been the other way over the last 15 years — many large caps have moved to annual or "long-term framework" guidance, while smaller companies still often give quarterly.'],
    ],
    'Guidance cadence is a deliberate choice with real implications for how the stock trades. Analysts should know which cadence each name in coverage uses and what that means for catalyst calendars and earnings-day volatility.'),

  q(4370130, 'Career Skills', CHAPTER, 'Guidance withdrawn',
    'A company "suspends" or "withdraws" forward guidance mid-year, citing macro uncertainty. How should the analyst read this?',
    'Treat the withdrawal as a guidance event in its own right — companies rarely withdraw guidance when the macro outcome is symmetric; the most common pattern is that the central case has deteriorated enough that the range no longer protects management, and withdrawal is preferred to a formal cut',
    [
      ['Withdrawal is neutral because management has simply stopped opining', 'Stopping opining when previously opining is itself a directional move. Withdrawal almost always signals downside relative to the previously communicated range; otherwise management would reaffirm or revise.'],
      ['Withdrawal is bullish because management is removing the risk of a public miss', 'Removing the *visible* miss does not remove the underlying performance. Withdrawal generally moves estimates lower and ratings worse, not better.'],
      ['Withdrawal is mandatory under SEC rule when macro volatility exceeds a threshold', 'There is no such threshold or mandate. Withdrawal is a discretionary management choice.'],
    ],
    'Guidance withdrawals are typically guide-downs in disguise. The cleanest reads pair the withdrawal with the most recent prepared remarks language to identify what specifically broke between the last reaffirmation and the withdrawal.'),

  q(4370131, 'Career Skills', CHAPTER, 'Conservative-bias detection',
    'You suspect a company guides conservatively. What evidence over multiple quarters would best support that view?',
    'A multi-quarter pattern where actual results land near or above the high end of guidance, paired with raises that are smaller than the implied beat — the company beats then re-anchors only modestly, leaving room to beat again',
    [
      ['A single quarter where actuals landed above the midpoint', 'Single-quarter overshoots are normal even from non-conservative managements. Conservatism is a pattern question, not a single observation.'],
      ['Management explicitly stating that they guide conservatively', 'Management self-description is the weakest evidence — it is unfalsifiable and uncosted. The actual numerical pattern is the only audit.'],
      ['Below-consensus guidance issued at the start of the year', 'Below-consensus guidance can reflect conservatism *or* genuine weakness. Without the subsequent beat-and-raise pattern, the initial guide alone cannot distinguish them.'],
    ],
    'Conservative-bias detection is multi-quarter pattern recognition: actuals at or above the high end, modest raises that preserve the asymmetry, and a tendency to re-anchor below the implied trajectory. Single-quarter observations are too noisy to support the claim.'),

  // -------------------------------------------------------------------------
  // LEADING INDICATORS (4370132–4370136)
  // -------------------------------------------------------------------------
  q(4370132, 'Career Skills', CHAPTER, 'Backlog vs RPO vs deferred revenue',
    'Three terms appear in different parts of a software 10-K: backlog, remaining performance obligations (RPO), and deferred revenue. How are they actually different?',
    'Deferred revenue is amounts billed but not yet recognized (a balance sheet liability); RPO is total contracted revenue not yet recognized — billed and unbilled — disclosed under ASC 606; backlog is a non-GAAP management metric, less standardized, often closer to RPO but defined per company',
    [
      ['They are interchangeable names for the same disclosure', 'They differ in scope and authority. Deferred revenue is on the balance sheet; RPO is an ASC 606 disclosure; backlog is a management-defined non-GAAP metric. Conflating them produces double counts or scope errors.'],
      ['Backlog is the GAAP term and RPO is the non-GAAP term', 'It is the opposite — RPO is the ASC 606 (GAAP) disclosure; backlog is the non-GAAP company-defined version. Confusing the direction is a common error in software ER.'],
      ['Deferred revenue covers all future contracted revenue including unbilled', 'Deferred revenue only includes amounts already billed. The unbilled portion of multi-year contracts lives in RPO, not deferred revenue.'],
    ],
    'In SaaS specifically, the order of leading-indicator quality typically goes RPO (full ASC 606 contracted view) > backlog (often similar but management-defined) > deferred revenue (billed-only liability). Knowing which one a company reports — and which they emphasize — is itself a disclosure-quality read.'),

  q(4370133, 'Career Skills', CHAPTER, 'When RPO replaces backlog',
    'A software company stops disclosing "backlog" and starts disclosing "remaining performance obligations." How should you interpret the change?',
    'The transition is typically driven by ASC 606 adoption and the desire to standardize the leading indicator to the GAAP-defined disclosure; the levels may differ from the prior backlog measure because the scope and conventions are not identical, so historical comparability has to be re-bridged',
    [
      ['The change means the company has fewer contracts in the pipeline', 'The metric change does not imply a contract change. The two metrics measure overlapping but distinct populations; a level difference at the changeover usually reflects scope, not underlying business deterioration.'],
      ['Backlog and RPO are identical, so the change is purely cosmetic', 'They are not identical. Backlog is company-defined; RPO has an ASC 606 definition. The levels at transition often differ by several percentage points, and those differences need to be bridged before comparing growth rates.'],
      ['Companies switch to RPO only when they are about to be acquired', 'The driver is accounting standardization, not M&A. The shift to RPO has happened broadly across SaaS regardless of acquisition status.'],
    ],
    'The backlog-to-RPO transition is a disclosure standardization, not a business change. The analytical work is rebridging the historical series so growth rates on the new metric are comparable to the old.'),

  q(4370134, 'Career Skills', CHAPTER, 'RPO covered versus uncovered',
    'A software company reports RPO of $5.2B and notes that approximately 60% is expected to be recognized in the next 12 months. What is the conventional read of these two numbers together?',
    'The 60% portion (often called current RPO or short-term RPO) is a near-term revenue coverage view — comparing it to forward 12-month consensus revenue tells you how much of next year is already contracted versus needing fresh bookings',
    [
      ['Current RPO is identical to next-12-month revenue', 'Current RPO is contracted but not yet recognized — it has to clear delivery, acceptance, or service-period passage before becoming revenue. There is also new bookings that will contribute to next-12-month revenue but is not yet in RPO.'],
      ['Long-term RPO (the 40%) is the more useful disclosure because it captures multi-year commitments', 'Long-term RPO matters for visibility into outyears but is less actionable for near-term estimate work. The 12-month coverage view is the higher-frequency read.'],
      ['Total RPO divided by trailing 12-month revenue is a definitive predictor of growth', 'Total-RPO-to-TTM-revenue is one ratio that some analysts track but it is not deterministic — bookings duration mix and contract length affect the ratio independently of growth.'],
    ],
    'The covered/uncovered RPO read is one of the cleanest near-term visibility frames in SaaS research. Pairing current RPO with forward consensus revenue tells you how much of the model is contracted versus depending on new sales execution.'),

  q(4370135, 'Career Skills', CHAPTER, 'Deferred revenue and ASC 606 mechanics',
    'A SaaS company reports deferred revenue declining sequentially while RPO grows. A junior asks why these can move in opposite directions. What is the technical explanation?',
    'Deferred revenue is billed-not-yet-recognized; RPO is contracted-not-yet-recognized (billed plus unbilled). If new contracts are large multi-year deals with annual billing, RPO captures the full contract but deferred revenue only reflects the first year invoiced — the two metrics can decouple based on billing terms',
    [
      ['Deferred revenue and RPO must always move together because they measure the same thing', 'They do not measure the same thing. Deferred revenue requires invoicing; RPO captures the full contracted value regardless of billing. The divergence is a feature of ASC 606, not an error.'],
      ['Deferred revenue declining means revenue is declining', 'Deferred revenue can decline simply because recognition is outpacing new billings in a period, even while business is healthy and RPO grows. Conflating the two is a common pitfall.'],
      ['RPO is a balance sheet item and deferred revenue is a disclosure footnote', 'It is the opposite — deferred revenue is the balance sheet liability; RPO is a disclosure required under ASC 606-10-50-13.'],
    ],
    'The deferred-revenue-versus-RPO mechanics are the cleanest illustration of why ASC 606 introduced a separate disclosure. Companies with annual billing on multi-year deals will see the metrics decouple, and that decoupling carries real information about contract mix and duration.'),

  q(4370136, 'Career Skills', CHAPTER, 'Bookings disclosure quirks',
    'A company highlights "bookings" growth in prepared remarks but does not disclose bookings in any filing. What should the analyst note?',
    'Bookings is a management-defined non-GAAP metric — there is no GAAP definition — so what counts as a "booking" can shift across periods without notice; analysts should ask IR for the definition and the historical methodology, and be wary of using prepared-remarks bookings as a comparable series without that anchor',
    [
      ['Bookings is a GAAP disclosure and the company is non-compliant by omitting it', 'Bookings is not a GAAP metric. There is no requirement to disclose it; the issue is that what is disclosed verbally has no standard definition.'],
      ['Bookings always equals new contract value plus renewals', 'Definitions vary by company. Some include only new business, some include renewals, some include partial renewals or upgrades. There is no universal convention.'],
      ['Bookings figures verbally given in prepared remarks are auditable', 'Verbal non-GAAP figures are public statements subject to Reg G but are not "audited" in the financial-statement sense. The auditor opined on the financial statements, not on verbal commentary.'],
    ],
    'Bookings is the most-cited and least-defined SaaS leading metric. Treating it as a comparable series without first pinning down the company\'s definition is one of the cleanest ways to get a SaaS model wrong.'),

  // -------------------------------------------------------------------------
  // MANAGEMENT COMMENTARY AND RESTATEMENTS (4370137–4370143)
  // -------------------------------------------------------------------------
  q(4370137, 'Career Skills', CHAPTER, 'Hedging language patterns',
    'In the prepared remarks, the CFO says: "We anticipate, depending on macro conditions, that revenue will land within the range we provided." Compared to a clean "we expect revenue to land within the range," what is the read?',
    'The hedge ("depending on macro conditions") is doing real work — it offers management a public out if results land below range; serious readers track these hedges quarter to quarter and weight guidance accordingly when hedges proliferate',
    [
      ['Hedging language is boilerplate written by counsel and carries no signal', 'The boilerplate framing applies to risk factors and forward-looking-statement legends, not to specific commentary inside prepared remarks. CFO-level hedges in narrative are typically deliberate.'],
      ['Hedging language is bullish because it shows management is being honest about uncertainty', 'Honesty is not the question — directionality is. Hedges typically appear when management wants public flexibility, which is more common when the central case is softer than when it is firming.'],
      ['Hedging language is identical to the safe harbor language at the start of the call', 'Safe harbor is general legal boilerplate about forward-looking statements; targeted in-script hedges are specific commentary about particular forward expectations. They are not the same.'],
    ],
    'Hedging language is one of the simplest commentary patterns to track and one of the most under-read. A guidance reaffirmation surrounded by hedges is a softer reaffirmation than one without — and the hedge density typically rises a quarter or two before a formal cut.'),

  q(4370138, 'Career Skills', CHAPTER, 'CEO tone shift across calls',
    'Across four consecutive earnings calls, the CEO has moved from "we are confident in our trajectory" to "we are working through near-term challenges" to "we remain focused on executing the plan we communicated." How should the trajectory of tone be read?',
    'Tone has degraded along a recognizable arc — from confidence, to acknowledgment of challenges, to defensive framing around an unchanged plan; analysts who track tone over time often catch trouble before formal estimate revisions, especially when paired with hedging-language density and Q&A behavior',
    [
      ['Tone is subjective and not a serious analytical input', 'Tone, tracked systematically across calls (same speakers, same phrase categories, same questions), is one of the empirically more useful soft signals. Dismissing it as subjective misses a well-documented pattern.'],
      ['The final framing ("focused on executing the plan") is the strongest of the three', '"Focused on executing the plan" is typically defensive — it asserts continuity rather than progress. As the third step in a degrading arc, it is the weakest position, not the strongest.'],
      ['Tone changes only matter if they correspond to a guidance cut in the same quarter', 'Tone often degrades before the formal cut. Waiting for the guidance cut to act on the tone shift means using the lagging signal instead of the leading one.'],
    ],
    'Management tone is a leading indicator when tracked over multiple periods. Confidence language giving way to "working through" giving way to defensive plan-restatement is the canonical arc into a guidance cut, and is reliably visible one to two quarters ahead.'),

  q(4370139, 'Career Skills', CHAPTER, 'Restructuring add-back recurrence',
    'A diversified industrial has reported "restructuring" as a non-GAAP add-back every year for six years, with the annual amount averaging about 1.5% of revenue. How should the analyst treat the line going forward?',
    'Treat restructuring as a recurring operating cost roughly equal to the historical run-rate (~1.5% of revenue); a charge that has appeared every year for six years is not non-recurring even if individual projects close — it is the normal cost of ongoing portfolio reshaping',
    [
      ['Continue adding back restructuring because each charge corresponds to a discrete project', 'Each individual project may be discrete but the *flow* of restructuring projects is continuous. The analytical question is the flow, not the project-by-project framing management presents.'],
      ['Reverse the add-back only for the current year because past years are already in consensus', 'Past consensus is not the standard for the right treatment. The fact that earlier consensus accepted the add-back does not validate it; the disciplined approach is to reverse going forward and reconcile.'],
      ['Restructuring should always be added back because it is one-time by accounting definition', 'There is no accounting definition that makes restructuring automatically non-recurring. ASC 420 defines the *measurement* of exit and disposal costs; it does not classify them as non-recurring for non-GAAP purposes.'],
    ],
    'The six-year recurrence test is one of the cleanest ways to identify pseudo-one-time charges. If a category appears every year, the per-year amount should be folded back into the recurring cost base — the company has revealed it as a normal operating expense.'),

  q(4370140, 'Career Skills', CHAPTER, 'Acquisition amortization add-back',
    'A serial acquirer adds back "amortization of acquired intangibles" to compute adjusted EPS. The add-back has grown each year as more acquisitions have closed. Is this a defensible add-back, and how should consensus treat it?',
    'It is partially defensible — the underlying asset purchase is a one-time event per deal — but for a serial acquirer who depends on M&A as a growth strategy, the cumulative amortization flow is a recurring cost of that strategy; the disciplined treatment is to deduct expected ongoing acquisition amortization from adjusted EPS',
    [
      ['It is fully defensible because acquired intangible amortization is non-cash', 'Non-cash and economically real are different. Acquired intangibles represent capital deployed in M&A — pretending the amortization is free decouples the EPS from the capital invested to generate it.'],
      ['It is not defensible at all and the full amortization should be reversed every quarter', 'Adding back amortization on a one-off acquisition for a non-serial acquirer can be reasonable. The argument against the add-back gets stronger as the M&A becomes more central to the strategy, not weaker.'],
      ['Whether to add it back depends on the tax treatment of the underlying acquisition', 'Tax structure (asset deal vs stock deal) affects cash taxes but not the non-GAAP framing of amortization. The defensibility of the add-back turns on recurrence of the M&A strategy, not the tax wrapper.'],
    ],
    'Acquisition amortization is the textbook case of a per-event one-time charge that becomes recurring at the strategy level. For a serial acquirer, the EPS comparison that matters is *post-amortization*, because that is the EPS that reflects the cost of the growth strategy.'),

  q(4370141, 'Career Skills', CHAPTER, 'Big R vs Little r restatements',
    'A company announces it will restate prior financials. The CFO calls it "an immaterial revision" and says no 8-K Item 4.02 is being filed. How should the analyst classify this?',
    'A "Little r" revision — corrected in the next periodic filing without an Item 4.02 8-K because the error is not material to previously issued financials; "Big R" restatements are material, require non-reliance disclosure under Item 4.02, and trigger broader investor and regulatory attention',
    [
      ['All restatements are Big R and must trigger an Item 4.02 8-K', 'The Little r framework explicitly accommodates immaterial revisions that are correctable in the next periodic filing without non-reliance disclosure. Treating all restatements as Big R overstates the consequence.'],
      ['Little r revisions are unaudited and Big R restatements are audited', 'Both categories live within the audited financial statements ultimately. The distinction is materiality and the resulting disclosure path, not audit status.'],
      ['Big R and Little r restatements are interchangeable terms with no SEC distinction', 'The SEC staff has explicitly addressed this distinction, including increased scrutiny of Little r classification in recent years. The categories carry real disclosure consequences.'],
    ],
    'The Big R vs Little r distinction has been a focus of SEC enforcement attention. Companies that classify revisions as Little r when the underlying error is closer to material face elevated scrutiny — and an aggressive Little r call is itself a soft red flag worth tracking.'),

  q(4370142, 'Career Skills', CHAPTER, 'Non-GAAP gap widening over time',
    'Over five years at one company, the gap between GAAP EPS and adjusted EPS has widened from $0.20 to $1.10 per share annually. Revenue has grown ~30%. How should the analyst frame this in a note?',
    'The widening gap suggests the non-GAAP construct is doing more work over time — adjustments are growing faster than the business — which typically reflects accumulating "one-time" add-backs (restructuring, SBC, deal costs, intangibles amortization); the disciplined response is to reanchor on GAAP EPS or a defensible cash-EPS, not on adjusted',
    [
      ['Widening gap is bullish because it shows management is normalizing more carefully', 'Widening gap is not normalization quality — it is normalization quantity. Carefully normalized adjustments would scale with the *non-recurring* events, not faster than revenue over five years.'],
      ['Widening gap is irrelevant if both numbers grow proportionally', 'Both numbers do not grow proportionally in this scenario — the gap grew 5.5x while revenue grew 1.3x. That is the definition of disproportionate growth and is the entire point of the question.'],
      ['Widening gap is purely the result of acquisition activity and cannot be analyzed separately', 'Acquisition activity does drive part of the gap (acquired intangibles, deal costs), but it does not explain SBC growth, recurring restructuring, or "other" buckets that typically also expand. Pinning the whole gap on M&A waves away the analytical work.'],
    ],
    'Non-GAAP-to-GAAP gap is one of the cleanest quality metrics across a multi-year window. A gap that compounds faster than revenue is almost always doing too much accounting work, and the corrective is to value the company on GAAP or a tight cash-EPS, not on the constantly expanding adjusted construct.'),

  q(4370143, 'Career Skills', CHAPTER, '10-K with three new risk factors',
    'A 10-K introduces three new risk factors: customer concentration, cybersecurity material incident exposure, and dependence on a single regulatory approval. MD&A briefly mentions only the regulatory item. Q&A on the call did not address any of the three. How should the research note integrate this?',
    'Lead with the disclosure-pattern observation — three new risk factor categories appearing simultaneously, with MD&A coverage on only one and call commentary on none, is a high-information pattern that typically precedes specific disclosures (8-K, guidance event, or impairment) within one to three filings; flag each item with what would resolve or confirm it',
    [
      ['Cover only the regulatory item because that is what MD&A and management have addressed', 'Following only what management has chosen to address is exactly the bias the disclosure pattern is meant to reveal. The two items management did *not* address are likely the higher-signal ones for forward analysis.'],
      ['Wait for an 8-K or future filing to address all three before publishing', 'Waiting for the resolution disclosure means publishing after the stock has moved. The analytical edge is in flagging the pattern at the 10-K filing, not after the confirming event.'],
      ['Treat all three as standard counsel-driven boilerplate and move on', 'Three new risk factor categories in one filing is well above any boilerplate baseline. Counsel does not refresh in clusters; clusters typically reflect a specific underlying change in the company\'s situation.'],
    ],
    'The most informative 10-K reads combine risk factor deltas, MD&A coverage, and call commentary into a single pattern check. Items disclosed in risk factors but not in MD&A or Q&A often precede specific event disclosures, and flagging the pattern up front is one of the highest-leverage ER moves available from the filing alone.'),
]

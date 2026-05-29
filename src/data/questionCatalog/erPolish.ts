// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the Equity Research roadmap.
//
// ER_SUB_TOPICS maps question id -> cluster label (within its chapter).
// Used by the polish pipeline to surface fine-grained study clusters
// underneath the broader chapter taxonomy.
//
// ER_MENTOR_HINTS provides a one-line bespoke `mentorHint` per question —
// voice is a senior ER analyst nudging an associate toward the reasoning
// move without revealing the answer. US-GAAP / SEC framing throughout.
//
// ER_CORRECT_SHORTENED trims the `correct` string for questions flagged
// in the Phase 4 length audit. Any explanatory clauses removed from
// `correct` are reattached to the lesson via `lessonAddendum` so no
// substantive content is lost.

// ============================================================================
// SUB-TOPIC CLUSTERS
// ============================================================================
// Clusters are per chapter. Cap of 8 per chapter.
// Chapter 1 — Company and Industry Setup
// Chapter 2 — Filings, Earnings, and Management Commentary
// Chapter 3 — Forecasting and Model Discipline
// Chapter 4 — Valuation and Rating Logic
// Chapter 5 — Research Note and Investor Debate
// Capstone — MeridianHealth Systems (MHSY) initiation note
// ----------------------------------------------------------------------------

export const ER_SUB_TOPICS: Record<number, string> = {
  // --------------------------------------------------------------------------
  // CHAPTER 1 — Company and Industry Setup
  // The 6 original Ch1 questions in careerAgentGeneratedRoadmapFinance.ts
  4103020: 'Industry Structure',
  4105080: 'Revenue Drivers',
  4105081: 'Margin & Cost Pass-Through',
  4107337: 'Industry Structure',
  4107807: 'Industry Structure',
  4107816: 'Regulation & Industry',

  // Ch1 expansion bank (4370000–4370043)
  4370000: 'Business Model Anatomy',
  4370001: 'Business Model Anatomy',
  4370002: 'Business Model Anatomy',
  4370003: 'Business Model Anatomy',
  4370004: 'Unit Economics',
  4370005: 'Unit Economics',
  4370006: 'Unit Economics',
  4370007: 'Unit Economics',
  4370008: 'Revenue Drivers',
  4370009: 'Revenue Drivers',
  4370010: 'Revenue Drivers',
  4370011: 'Revenue Drivers',
  4370012: 'Revenue Drivers',
  4370013: 'Revenue Drivers',
  4370014: 'Revenue Drivers',
  4370015: 'Segment Reporting',
  4370016: 'Segment Reporting',
  4370017: 'Segment Reporting',
  4370018: 'Segment Reporting',
  4370019: 'Segment Reporting',
  4370020: 'Competitive Moat',
  4370021: 'Competitive Moat',
  4370022: 'Competitive Moat',
  4370023: 'Competitive Moat',
  4370024: 'Competitive Moat',
  4370025: 'Industry Structure',
  4370026: 'Industry Structure',
  4370027: 'Industry Structure',
  4370028: 'Industry Structure',
  4370029: 'Industry Structure',
  4370030: 'Cycles',
  4370031: 'Cycles',
  4370032: 'Cycles',
  4370033: 'Cycles',
  4370034: 'Regulation & Industry',
  4370035: 'Regulation & Industry',
  4370036: 'Regulation & Industry',
  4370037: 'Regulation & Industry',
  4370038: 'Peer Set Selection',
  4370039: 'Peer Set Selection',
  4370040: 'Peer Set Selection',
  4370041: 'Peer Set Selection',
  4370042: 'Bull vs Bear Framing',
  4370043: 'Bull vs Bear Framing',

  // --------------------------------------------------------------------------
  // CHAPTER 2 — Filings, Earnings, and Management Commentary
  // The 6 original Ch2 questions
  4103021: 'Guidance Mechanics',
  4105082: 'GAAP vs Non-GAAP',
  4105083: 'Catalyst Mapping (Ch2)',
  4107339: 'Backlog / RPO / Deferred Rev',
  4107809: 'Guidance Mechanics',
  4107817: 'Earnings Release vs Call',

  // Ch2 expansion bank (4370100–4370143)
  4370100: '10-K vs 10-Q vs 8-K',
  4370101: '10-K vs 10-Q vs 8-K',
  4370102: 'Risk Factor Reading',
  4370103: '10-K vs 10-Q vs 8-K',
  4370104: '10-K vs 10-Q vs 8-K',
  4370105: '10-K vs 10-Q vs 8-K',
  4370106: 'Proxy / S-1 / 13F',
  4370107: 'Proxy / S-1 / 13F',
  4370108: 'Proxy / S-1 / 13F',
  4370109: 'Proxy / S-1 / 13F',
  4370110: 'Proxy / S-1 / 13F',
  4370111: '10-K vs 10-Q vs 8-K',
  4370112: 'Segment Reporting',
  4370113: 'Segment Reporting',
  4370114: 'Segment Reporting',
  4370115: 'Risk Factor Reading',
  4370116: 'Risk Factor Reading',
  4370117: 'Earnings Release vs Call',
  4370118: 'Earnings Release vs Call',
  4370119: 'Earnings Release vs Call',
  4370120: 'Earnings Release vs Call',
  4370121: 'GAAP vs Non-GAAP',
  4370122: 'GAAP vs Non-GAAP',
  4370123: 'GAAP vs Non-GAAP',
  4370124: 'GAAP vs Non-GAAP',
  4370125: 'Guidance Mechanics',
  4370126: 'Guidance Mechanics',
  4370127: 'Guidance Mechanics',
  4370128: 'Guidance Mechanics',
  4370129: 'Guidance Mechanics',
  4370130: 'Guidance Mechanics',
  4370131: 'Guidance Mechanics',
  4370132: 'Backlog / RPO / Deferred Rev',
  4370133: 'Backlog / RPO / Deferred Rev',
  4370134: 'Backlog / RPO / Deferred Rev',
  4370135: 'Backlog / RPO / Deferred Rev',
  4370136: 'Backlog / RPO / Deferred Rev',
  4370137: 'Earnings Release vs Call',
  4370138: 'Earnings Release vs Call',
  4370139: 'GAAP vs Non-GAAP',
  4370140: 'GAAP vs Non-GAAP',
  4370141: 'Restatements',
  4370142: 'GAAP vs Non-GAAP',
  4370143: 'Risk Factor Reading',

  // --------------------------------------------------------------------------
  // CHAPTER 3 — Forecasting and Model Discipline
  // The 6 original Ch3 questions
  4103016: 'Margin Bridge',
  4103017: 'Working Capital',
  4103022: 'Margin Bridge',
  4105076: 'Working Capital',
  4105077: 'EPS & Flow-Through',
  4105084: 'Backlog / Deferred Rev (Ch3)',
  4107802: 'Backlog / Deferred Rev (Ch3)',
  4107814: 'Revenue Build',

  // Ch3 expansion bank (4370200–4370241)
  4370200: 'Revenue Build',
  4370201: 'Revenue Build',
  4370202: 'Revenue Build',
  4370203: 'Revenue Build',
  4370204: 'Revenue Build',
  4370205: 'Revenue Build',
  4370206: 'Revenue Build',
  4370207: 'Margin Bridge',
  4370208: 'Margin Bridge',
  4370209: 'Margin Bridge',
  4370210: 'Margin Bridge',
  4370211: 'Margin Bridge',
  4370212: 'Margin Bridge',
  4370213: 'Margin Bridge',
  4370214: 'Working Capital',
  4370215: 'Working Capital',
  4370216: 'Working Capital',
  4370217: 'Working Capital',
  4370218: 'Working Capital',
  4370219: 'Capex Discipline',
  4370220: 'Capex Discipline',
  4370221: 'Capex Discipline',
  4370222: 'Capex Discipline',
  4370223: 'EPS & Dilution',
  4370224: 'EPS & Dilution',
  4370225: 'EPS & Dilution',
  4370226: 'EPS & Dilution',
  4370227: 'FCF Definitions',
  4370228: 'FCF Definitions',
  4370229: 'FCF Definitions',
  4370230: 'FCF Definitions',
  4370231: 'Model Audit',
  4370232: 'Model Audit',
  4370233: 'Model Audit',
  4370234: 'Model Audit',
  4370235: 'Model Audit',
  4370236: 'Model Audit',
  4370237: 'Model Audit',
  4370238: 'Model Audit',
  4370239: 'Model Audit',
  4370240: 'Model Audit',
  4370241: 'Model Audit',

  // --------------------------------------------------------------------------
  // CHAPTER 4 — Valuation and Rating Logic
  // The 6 original Ch4 questions (and 2 extras at 4107804, 4107815, 4107334, 4107805)
  4103018: 'Multiples Theory',
  4103019: 'Target Price & Risk/Reward',
  4105078: 'Target Price & Risk/Reward',
  4105079: 'Multiples Theory',
  4107334: 'Football Field & SOTP',
  4107805: 'DCF Construction',
  4107815: 'Target Price & Risk/Reward',
  4107804: 'Rating Systems',

  // Ch4 expansion bank (4370300–4370341)
  4370300: 'Multiples Theory',
  4370301: 'Multiples Theory',
  4370302: 'Multiples Theory',
  4370303: 'Multiples Theory',
  4370304: 'Sector-Specific Multiples',
  4370305: 'Sector-Specific Multiples',
  4370306: 'Sector-Specific Multiples',
  4370307: 'Sector-Specific Multiples',
  4370308: 'Sector-Specific Multiples',
  4370309: 'Multiples Theory',
  4370310: 'Multiples Theory',
  4370311: 'Multiples Theory',
  4370312: 'DCF Construction',
  4370313: 'DCF Construction',
  4370314: 'DCF Construction',
  4370315: 'DCF Construction',
  4370316: 'DCF Construction',
  4370317: 'DCF Construction',
  4370318: 'DCF Construction',
  4370319: 'DCF Construction',
  4370320: 'Football Field & SOTP',
  4370321: 'Football Field & SOTP',
  4370322: 'Target Price & Risk/Reward',
  4370323: 'Target Price & Risk/Reward',
  4370324: 'Target Price & Risk/Reward',
  4370325: 'Target Price & Risk/Reward',
  4370326: 'Target Price & Risk/Reward',
  4370327: 'Target Price & Risk/Reward',
  4370328: 'Target Price & Risk/Reward',
  4370329: 'Target Price & Risk/Reward',
  4370330: 'Rating Systems',
  4370331: 'Rating Systems',
  4370332: 'Rating Systems',
  4370333: 'Catalyst Mapping',
  4370334: 'Catalyst Mapping',
  4370335: 'Catalyst Mapping',
  4370336: 'Catalyst Mapping',
  4370337: 'Catalyst Mapping',
  4370338: 'Rating Systems',
  4370339: 'Rating Systems',
  4370340: 'Catalyst Mapping',
  4370341: 'DCF Construction',

  // --------------------------------------------------------------------------
  // CHAPTER 5 — Research Note and Investor Debate
  // The 6 original Ch5 questions
  4103023: 'Compliance & Reg FD',
  4105085: 'Initiation Structure',
  4107342: 'Compliance & Reg FD',
  4107343: 'Compliance & Reg FD',
  4107812: 'Compliance & Reg FD',
  4107813: 'Compliance & Reg FD',

  // Ch5 expansion bank (4370400–4370443)
  4370400: 'Note Types',
  4370401: 'Note Types',
  4370402: 'Note Types',
  4370403: 'Note Types',
  4370404: 'Note Types',
  4370405: 'Note Types',
  4370406: 'Initiation Structure',
  4370407: 'Initiation Structure',
  4370408: 'Initiation Structure',
  4370409: 'Initiation Structure',
  4370410: 'Initiation Structure',
  4370411: 'Thesis Articulation',
  4370412: 'Thesis Articulation',
  4370413: 'Variant Perception',
  4370414: 'Thesis Articulation',
  4370415: 'Thesis Articulation',
  4370416: 'Thesis Articulation',
  4370417: 'Variant Perception',
  4370418: 'Thesis Articulation',
  4370419: 'Thesis Articulation',
  4370420: 'Channel Checks (Reg FD)',
  4370421: 'Channel Checks (Reg FD)',
  4370422: 'Channel Checks (Reg FD)',
  4370423: 'Channel Checks (Reg FD)',
  4370424: 'Channel Checks (Reg FD)',
  4370425: 'Channel Checks (Reg FD)',
  4370426: 'Compliance & Reg FD',
  4370427: 'Compliance & Reg FD',
  4370428: 'Compliance & Reg FD',
  4370429: 'Compliance & Reg FD',
  4370430: 'Compliance & Reg FD',
  4370431: 'Compliance & Reg FD',
  4370432: 'Distribution & Reception',
  4370433: 'Distribution & Reception',
  4370434: 'Distribution & Reception',
  4370435: 'Distribution & Reception',
  4370436: 'Distribution & Reception',
  4370437: 'Distribution & Reception',
  4370438: '1x1s & IR Dynamics',
  4370439: '1x1s & IR Dynamics',
  4370440: '1x1s & IR Dynamics',
  4370441: '1x1s & IR Dynamics',
  4370442: '1x1s & IR Dynamics',
  4370443: '1x1s & IR Dynamics',

  // --------------------------------------------------------------------------
  // CAPSTONE — MHSY Initiation Note (4370500–4370549)
  4370500: 'Industry Setup',
  4370501: 'Industry Setup',
  4370502: 'Industry Setup',
  4370503: 'Industry Setup',
  4370504: 'Industry Setup',
  4370505: 'Industry Setup',
  4370506: 'Industry Setup',
  4370507: 'Industry Setup',
  4370508: 'Industry Setup',
  4370509: 'Industry Setup',
  4370510: 'Filings & Earnings',
  4370511: 'Filings & Earnings',
  4370512: 'Filings & Earnings',
  4370513: 'Filings & Earnings',
  4370514: 'Filings & Earnings',
  4370515: 'Filings & Earnings',
  4370516: 'Filings & Earnings',
  4370517: 'Filings & Earnings',
  4370518: 'Filings & Earnings',
  4370519: 'Filings & Earnings',
  4370520: 'Forecast Model',
  4370521: 'Forecast Model',
  4370522: 'Forecast Model',
  4370523: 'Forecast Model',
  4370524: 'Forecast Model',
  4370525: 'Forecast Model',
  4370526: 'Forecast Model',
  4370527: 'Forecast Model',
  4370528: 'Forecast Model',
  4370529: 'Forecast Model',
  4370530: 'Valuation',
  4370531: 'Valuation',
  4370532: 'Valuation',
  4370533: 'Valuation',
  4370534: 'Valuation',
  4370535: 'Valuation',
  4370536: 'Valuation',
  4370537: 'Valuation',
  4370538: 'Valuation',
  4370539: 'Valuation',
  4370540: 'Initiation Note Synthesis',
  4370541: 'Initiation Note Synthesis',
  4370542: 'Initiation Note Synthesis',
  4370543: 'Initiation Note Synthesis',
  4370544: 'Initiation Note Synthesis',
  4370545: 'Initiation Note Synthesis',
  4370546: 'Initiation Note Synthesis',
  4370547: 'Initiation Note Synthesis',
  4370548: 'Initiation Note Synthesis',
  4370549: 'Initiation Note Synthesis',
}

// ============================================================================
// MENTOR HINTS
// ============================================================================
// One-line second-person nudges. Voice: senior ER analyst mentoring an
// associate. Each hint names the reasoning move without giving the answer.
// ----------------------------------------------------------------------------

export const ER_MENTOR_HINTS: Record<number, string> = {
  // --- Original Ch1 (in main roadmap file) ---
  4103020: 'Three resellers is a sample, not a market. What incentive do they have to talk up the pipeline, and how do you triangulate against it?',
  4105080: 'Company growth below category growth has a name. Ask whether the dollars rising are masking share lost in points.',
  4105081: 'Costs flow into COGS immediately; price increases land next quarter. The shape of the bridge depends on the lag, not on whether the company will eventually offset.',
  4107337: 'In a slowing market, new capacity is the textbook setup for a price war. Ask what utilization looks like once the new plants come online.',
  4107807: 'Well-funded entrants can discount for years. Underwrite the durability of the threat, not the duration of the promotional period.',
  4107816: 'Fixed compliance costs are regressive at scale. Ask whether the regulation widens or narrows the moat for the larger competitors.',

  // --- Ch1 expansion (4370000–4370043) ---
  4370000: 'Mix is about the bundle, not the build. What does the 60/40 split tell you that a single revenue number cannot?',
  4370001: 'Each margin includes a different cost stack. Which one carries the thesis on this name, and why?',
  4370002: 'A 66-point gap between gross and operating margin is not a quality flaw — it is a reinvestment posture. What is being reinvested into?',
  4370003: 'Same gross margin, different cost stack below the line. Where does the hardware overhead live that the services firm does not have?',
  4370004: 'High gross margin does not exempt the model from CAC discipline. What math compares payback against the implied lifetime here?',
  4370005: 'The device is the door. What pays the rent over the ownership period, and how is it sized?',
  4370006: 'Services do not run on ARR. What is the unit of production, and what is the cost of an idle hour on it?',
  4370007: 'A blended multiple averages two qualities of revenue. Which slice deserves the higher multiple and why?',

  4370008: 'Volume, price, and mix are three independent levers. Which one has the most fragile durability if competitors hold price?',
  4370009: 'Subscription and transactional do not share a forecast template. What is the stock variable on one and the flow variable on the other?',
  4370010: 'Project revenue is lumpy by accounting design. What anchor (backlog, book-to-bill, TTM) belongs in the note instead of QoQ deltas?',
  4370011: 'Reported growth is what shareholders receive. Organic is what the business earned on its own — strip out what the company bought.',
  4370012: 'Negative volume with positive price/mix is a margin trade, not a share trade. What would tell you whether competitors are following?',
  4370013: 'Mix is quiet price-taking. What channel and product changes can lift realized price without ever raising a list price?',
  4370014: 'Reported revenue carries FX translation; the operating story lives in constant currency. What is the right rate convention for the period?',

  4370015: 'ASC 280 follows the management approach. What does the CODM actually see, and what is required to be disclosed at the segment level?',
  4370016: 'The blended margin is already revenue-weighted. What does SOTP add that the headline obscures?',
  4370017: 'A line that is 12% of revenue and 30% of operating income is not a rounding bucket. What is hiding in it?',
  4370018: 'Restatements break time series. What gets rebuilt on the new basis and what gets asked from IR to bridge the old?',
  4370019: 'Both are total-revenue cuts of the same pie. Why do they never sum to each other?',

  4370020: '12% of what? A share number without a denominator is decoration — name the TAM, SAM, or category before quoting it.',
  4370021: 'Market share is across customers; wallet share is inside one. The gap between them is the upsell story — or the displacement risk.',
  4370022: 'High retention plus long implementation is a fingerprint. What kind of switching cost matches that pattern and how durable is it?',
  4370023: 'Brand decays slowly with reinvestment; networks tip. Which decay curve fits this moat and what would break it?',
  4370024: 'Margin compression with growth is the canonical early signal of moat decay. Is the spend earning returns or buying defense?',

  4370025: 'Three OEMs with annual repricing set the supplier\'s margin ceiling. What insulates the supplier — and is it durable?',
  4370026: 'Two airframe makers, multi-decade fleets, enormous switching cost. Where does buyer leverage exist, and where does it not?',
  4370027: 'CR4 is a quick concentration read but not deterministic. What other inputs (private label, retailer power) shape pricing power?',
  4370028: 'HHI above 2,500 is the DOJ/FTC concentrated threshold. What does that imply for pricing discipline and merger review?',
  4370029: 'Substitution is technology delivering the same job; entry is the same product from a new competitor. Which is which here?',

  4370030: 'Volatility is not cyclicality. What pattern over multiple years would prove the swings track an external cycle?',
  4370031: 'Monthly sales are coincident. What turns earlier than the OEM print and gives the analyst time?',
  4370032: 'Record bookings + peak utilization + new capacity announcements has a name. Where in the cycle does that pattern live?',
  4370033: 'Mean reversion is a tendency, not a timing tool. What evidence — destocking, demand, leading data — has to turn before you call the bottom?',

  4370034: 'Pharma economics is regulation-gated. What does the probability tree look like across approve, CRL, and reject, and where does the franchise value live?',
  4370035: 'Spectrum is the supply curve for wireless capacity. Which carrier owns which band — and what does that mean for who can deliver 5G?',
  4370036: 'Utility earnings = allowed ROE × equity portion of rate base. Where does the case settle versus the ask, and what is the historical pattern?',
  4370037: 'Banks are capital-constrained businesses. What sets the ceiling on buybacks and dividends — and what could move that ceiling?',

  4370038: 'Peer comparability is about business overlap, not sector label. What dimensions actually have to match for the comps to mean something?',
  4370039: 'Largest is not the same as comparable. What is wrong with anchoring a $5B regional grocer against Walmart and Amazon?',
  4370040: 'Same product on opposite continents is still different economics. What gap in growth, regulation, or listing venue can sustain a multiple difference?',
  4370041: 'Same SIC code, inverted segment mix. What is the disciplined fix when the headline classifications match but the mix does not?',

  4370042: 'Debates are about specific claims with testable evidence — not a flattened consensus and not the extreme tails. What structure forces that?',
  4370043: 'A thesis is only useful if it is falsifiable. What specific evidence in the next 12 months would force you to flip the rating?',

  // --- Original Ch2 (in main roadmap file) ---
  4103021: 'A one-quarter shift with intact backlog has a name. Distinguish timing from demand destruction before changing the rating.',
  4105082: 'EPS quality matters as much as EPS level. A tax-driven beat does not extend the way an operating beat does — separate the lines.',
  4105083: 'A useful catalyst path names the data points and what each one would confirm or challenge. What would you watch and when?',
  4107339: 'Backlog is contracted but not converted. What constrains the conversion timing, and where does that show up in working capital?',
  4107809: 'Unchanged numbers with harder underlying assumptions are riskier numbers. What is loaded into the back half that was not loaded before?',
  4107817: 'Preannouncements set sentiment; evidence sets estimates. What independent data has to confirm the recovery claim before you can act on it?',

  // --- Ch2 expansion (4370100–4370143) ---
  4370100: 'The audit standard, not the speed, is what changes reliability. What does PCAOB sign-off cover that a SAS 100 review does not?',
  4370101: 'Read MD&A first because management gets to frame the year there. What does ordering tell you about what the rest of the filing will say?',
  4370102: 'The boilerplate is boilerplate; the deltas are not. What threshold does counsel cross before adding a new risk factor?',
  4370103: '8-Ks are event-coded, not sentiment-coded. Which Items are the highest-information triggers (4.02, 5.02, 2.04)?',
  4370104: 'The structure of the filing is the signal — successor named, separation agreement attached, transition length. What does the absence of each imply?',
  4370105: 'Redactions usually cover competitive terms, not bad news. What is visible — counterparty, term, exclusivity — that still moves the model?',
  4370106: 'The proxy is governance, not forecast. What compensation, board, and shareholder-vote detail lives there and nowhere else?',
  4370107: 'An S-1 is a one-shot education for the public market. Which sections are richer than the steady-state 10-K, and why?',
  4370108: 'A 13F is a stale long-only snapshot. What does it omit (shorts, non-US, derivatives, cost basis) and why does that matter?',
  4370109: 'Schedule choice is a disclosed declaration of intent. What does electing 13D over 13G announce to the market?',
  4370110: 'Open-market discretionary buys are high-signal; pre-scheduled 10b5-1 sales are low. The execution mechanic, not the share count, is the read.',
  4370111: '"Unaudited" means limited assurance from an interim review, not no involvement. What does the auditor actually do at the quarter?',
  4370112: 'Segments are footnoted under ASC 280, not MD&A. Which document anchors and which one frames?',
  4370113: 'The CODM test is judgmental. What lets you challenge whether combined segments are obscuring different economics?',
  4370114: 'SOTP requires segment profitability disclosed, not just segment revenue. What does the footnote either enable or block?',
  4370115: 'A new "customer concentration" risk factor usually pairs with one customer approaching 10% of revenue. What threshold under ASC 280 should you check?',
  4370116: 'New risk factors + MD&A silence is a high-information pattern. What does counsel know that management has not yet narrated?',
  4370117: 'Press release is the legal disclosure; prepared remarks are the script. What is loud in one and quiet in the other?',
  4370118: 'Prepared remarks are rehearsed; Q&A is unscripted. What does the choice — what management volunteers, what they decline — carry?',
  4370119: 'IR curates the queue. What does the choice of who gets called first tell you about which voices the company wants amplified?',
  4370120: 'The earnings call is a sell-side forum. Where does buy-side engagement with management actually happen?',
  4370121: 'GAAP drives taxes, covenants, audit. Non-GAAP is the consensus benchmark. What does the gap between them tell you?',
  4370122: 'Pre-tax add-backs without tax-effecting inflate adjusted EPS by the value of the un-taxed shield. What does the SEC say about that?',
  4370123: 'SBC is non-cash in the period but it is not free — it dilutes. Which framing is the PM right to push on?',
  4370124: 'Seven of eight quarters is not "one-time." What does the SEC\'s "individually tailored accounting principles" guidance call this?',
  4370125: 'Range width is the underused dimension of guidance. What does tightening or widening tell you that the midpoint does not?',
  4370126: 'Raising the low end while holding the high moves the midpoint and tightens the range. Both are real moves — what asymmetry does it express?',
  4370127: 'The forward extension is what matters. A raise that lags the consensus walk is, in PV terms, a guide-down.',
  4370128: 'Management had both the trailing beat and the forward visibility to cut. They chose the cut — that is the information.',
  4370129: 'Guidance cadence is a deliberate choice. Why have many large caps moved from quarterly to annual or long-term framework?',
  4370130: 'Withdrawal is almost always a guide-down in disguise. What about reaffirming or revising would have been simpler if the central case held?',
  4370131: 'Conservative bias is a multi-quarter pattern: actuals at the high end, modest raises, asymmetry preserved. What single observation will not prove it?',
  4370132: 'Backlog is non-GAAP; RPO is ASC 606; deferred is billed-only. The hierarchy and the scope differ — which one carries the most signal?',
  4370133: 'The shift from backlog to RPO is accounting standardization, not business change. What has to be rebridged across the transition?',
  4370134: 'Current RPO maps to the next-12-month coverage view. What gap remains versus consensus forward revenue, and what fills it?',
  4370135: 'Deferred requires invoicing; RPO captures contracted regardless of billing. What contract shape produces the divergence?',
  4370136: 'Bookings is the most-cited and least-defined SaaS metric. What is the first question to ask IR before treating it as a series?',
  4370137: 'Targeted in-script hedges are not safe-harbor boilerplate. What does increased hedge density typically precede?',
  4370138: 'Tone arcs — confidence → working through → defensive — lead guidance cuts by a quarter or two. Which step are you reading here?',
  4370139: 'Six years of "restructuring" is restructuring as a recurring operating cost. What is the disciplined treatment going forward?',
  4370140: 'Per-deal one-time; per-strategy recurring. For a serial acquirer, what EPS comparison actually reflects the cost of growth?',
  4370141: 'Big R triggers an Item 4.02 non-reliance 8-K; Little r corrects in the next periodic filing. What is the SEC scrutinizing on aggressive Little r calls?',
  4370142: 'The gap compounded 5.5× while revenue grew 1.3×. The non-GAAP construct is doing too much work — what is the corrective?',
  4370143: 'Three new categories with MD&A silence and no Q&A coverage is a high-information pattern. What typically follows in one to three filings?',

  // --- Original Ch3 (in main roadmap file) ---
  4103016: 'A revenue beat from low-margin wholesale is not the same as one from high-margin direct. What does the mix shift mean for forward EBITDA?',
  4103017: 'Receivables growing 4× sales growth has a name. What does cash lagging revenue say about quality of earnings?',
  4103022: 'Operating leverage is incremental contribution after fixed costs. What does the math give you when revenue grows 8% and fixed costs grow 2%?',
  4105076: 'Flat sales + 28% inventory build + slowing orders is a balance-sheet warning. What hits the income statement when the inventory clears?',
  4105077: 'Contribution margin × revenue change = EBITDA change. What does the math actually give you at 30% × $50M?',
  4105084: 'Billings growth above revenue growth means the leading indicator is ahead of recognition. What contract and renewal questions does that raise?',
  4107802: 'Billings tell you about next quarter; revenue tells you about last. A revenue beat with slowing billings is the setup for what?',
  4107814: 'Price-led growth on declining volume is a real revenue dynamic but a fragile one. What would tell you whether elasticity is biting?',

  // --- Ch3 expansion (4370200–4370241) ---
  4370200: 'Bottom-up belongs where the drivers are observable. With store count, traffic, and ticket disclosed, what is the right build?',
  4370201: 'Top-down belongs where bottom-up inputs are not yet disclosed. What makes a station-by-station EV charging build dishonest precision?',
  4370202: 'Three product families with different ASP and volume trajectories cannot be blended. What unit lets the mix shift drop out of the build?',
  4370203: 'M&A contribution runs off after the anniversary. What does using the headline 14% growth rate do to next year mechanically?',
  4370204: 'Pricing actions stay in the level, not the growth rate. What does extending last year\'s 7% forward implicitly claim?',
  4370205: 'Revenue-weighted average of segment growth, not simple average. Run the math: (400×8% + 250×4% + 150×−3%) / 800.',
  4370206: 'Constant currency is the operating story; FX is translation. What is the discipline for forecasting each separately?',
  4370207: 'Software at 76%, hardware at 35%, hardware moving from 0 to 15%. What does the arithmetic force on blended GM?',
  4370208: '60% of COGS in foreign currencies vs 40% of revenue. The mismatch in weights is the whole point — what is the net direction?',
  4370209: 'Historical pass-through is 70% with a 1–2 quarter lag. What does the trough quarter look like before the price action lands?',
  4370210: 'Operating leverage shows up as the ratio declining over time. What anchors the trajectory — rep ramp, productivity, marketing efficiency?',
  4370211: 'R&D often scales nearly with revenue; G&A scales more slowly. What does that imply for which line generates the leverage?',
  4370212: 'Operating leverage = % change in operating profit / % change in revenue. What drives the magnitude — fixed cost intensity?',
  4370213: 'Outsourcing-to-in-house moves dollars from COGS to opex. What looks like margin expansion can be reclassification.',
  4370214: 'DSO rising sharply with revenue growing modestly is a quality flag, not a working-capital flag. What does it preview?',
  4370215: 'Days inventory outstanding building into a slowdown previews markdowns and write-downs. What lands on the income statement next?',
  4370216: 'DPO extension is a one-time cash lever, not recurring. What does the model look like in year 2 when the lever has been pulled?',
  4370217: 'CCC = DSO + DIO − DPO. Which component is structural and which is discretionary for this name?',
  4370218: 'Quarterly WC swings are mechanical for seasonal businesses. What annual cadence smooths them, and what does each quarter actually tell you?',
  4370219: 'Maintenance capex preserves the asset base; growth capex expands it. The DCF cares about the split — what discloses or proxies it?',
  4370220: 'Capitalized software depreciates as intangibles; expensed software hits opex now. What does the choice do to reported margins and cash?',
  4370221: 'Depreciation lags capex by the asset life. After a capex wave, what happens to D&A and how does it move EBIT vs EBITDA?',
  4370222: 'Capacity utilization above ~85% triggers the next capex step in many industries. What is the right way to model the lumpy build?',
  4370223: 'Treasury stock method is in-the-money options netted against assumed buyback at average price. What does the math give you for diluted share count?',
  4370224: 'SBC dilution is a real drag even when buybacks partially offset. What does the multi-year share count walk usually show?',
  4370225: 'Buyback timing — average price, beginning vs ending share count — moves EPS by pennies. What is the discipline for modeling it?',
  4370226: 'Consensus EPS embeds analyst assumptions on share count, tax rate, and SBC. Where does the gap to guidance usually live?',
  4370227: 'FCFF is firm-level cash flow before financing; FCFE is to equity holders after debt service. Which discounts at WACC and which at cost of equity?',
  4370228: 'CFO − capex skips working capital nuance and SBC. Where does the shortcut break, and what is the cleaner build?',
  4370229: 'SBC is non-cash in the period but it is dilutive. The "true FCF" debate is whether to add it back — what does the PM-friendly version do?',
  4370230: 'Cash taxes vs book taxes diverge because of timing differences. What does the model use for the DCF and why?',
  4370231: 'Blue for hardcodes, black for formulas, green for links. What does breaking the convention do to model review?',
  4370232: 'Goal-seeking to consensus is a discipline failure that gets caught in review. What is the alternative when your forecast diverges?',
  4370233: 'The three statements link or the model is wrong. What flow audits the linkage — net income to retained earnings to cash?',
  4370234: 'Revolver feedback creates a circular reference (interest depends on debt, debt depends on cash, cash depends on interest). What is the standard fix?',
  4370235: 'Balance sheet imbalance is the model telling you a link is broken. What is the first place to check before patching the imbalance with a plug?',
  4370236: 'A 2D sensitivity surfaces interactions the 1D table cannot show. Which two variables actually move the call here?',
  4370237: 'Bull/base/bear cases earn their place when they have named drivers and specific values. What forces the locking step?',
  4370238: '"You\'re 2 cents above consensus" is the senior asking whether the gap is defensible or accidental. What is the right way to read and answer?',
  4370239: 'Year 1 has data; year 5 is a guess; terminal is a long-run economic claim. What level of rigor matches each?',
  4370240: 'An inherited model carries an inherited thesis. What is the checklist for tracing assumptions before publishing under your name?',
  4370241: 'Consensus 5% above your number is a meaningful gap. Where do you go — your number, the channel, or back to the model?',

  // --- Original Ch4 (in main roadmap file) ---
  4103018: 'Higher multiples are rational for better businesses. What dimensions of quality justify a premium over peers?',
  4103019: 'A rating change without a defensible bridge is unenforceable. What chain — evidence to estimates to target — has to be auditable?',
  4105078: 'Risk-reward is upside vs downside in dollars. What does $12 upside / $6 downside actually express in ratio terms?',
  4105079: 'Stocks discount forward expectations. A beat with weaker forward growth nets to what?',
  4107334: 'Different businesses deserve different valuation frameworks. What does SOTP reveal that a blended multiple buries?',
  4107805: 'Terminal growth above long-term industry growth implies infinite share gain. What constraint forces discipline on the assumption?',
  4107815: 'A point target hides binary risk. What framing communicates the scenario tree better — and supports the rating honestly?',
  4107804: 'A target reached on multiple expansion compresses forward upside. What does the rating need to reassess at the new price?',

  // --- Ch4 expansion (4370300–4370341) ---
  4370300: 'P/E carries leverage; EV/EBITDA is capital-structure-neutral. What does each isolate when one company is levered and the other is net-cash?',
  4370301: 'Tax-rate differences move P/E mechanically. What does a 24% vs 10% tax rate do to the comparison — and how do you adjust it out?',
  4370302: 'EV/EBITDA flatters capital-heavy businesses because it ignores recurring maintenance capex. What cross-check fixes this?',
  4370303: 'EBITDA and earnings are negative, so any earnings multiple is undefined. What discipline has to accompany the EV/Sales lens?',
  4370304: 'Sub-scale, high-growth, unprofitable — which multiple does the SaaS comp set actually trade on, and what is the cross-check?',
  4370305: 'Mature consumer staples trade on P/E and EV/EBITDA. What earnings stability and capital intensity make those work?',
  4370306: 'Banks trade on P/TBV — book value is meaningful and reflects capital adequacy. What does the multiple actually express?',
  4370307: 'REIT earnings are distorted by depreciation. What metric — and why FFO rather than net income?',
  4370308: 'Patent cliffs create a discontinuity in earnings. What multiple framing actually prices the cliff rather than averaging across it?',
  4370309: 'NTM looks forward 12 months; LTM looks back. Which one prices growth correctly at this stage?',
  4370310: 'LTM trailing on a growth company anchors on the slow year. What systematic bias does that create on screens?',
  4370311: 'Forward visibility (RPO, backlog, multi-year contracts) supports a premium multiple. What does the buy-side actually pay for here?',
  4370312: '5 to 10 years is the standard explicit period. What determines the length — and what happens beyond it?',
  4370313: 'Gordon growth assumes perpetual constant growth; exit multiple anchors on comps. Which is right for a stable mid-cap?',
  4370314: 'CAPM = rf + β × ERP. What discipline does each input require — and which one analysts get wrong most often?',
  4370315: 'Levered beta reflects capital structure; unlevered strips it out. What is the relevering step for a target capital structure?',
  4370316: 'Mid-year discounting assumes cash flows arrive evenly; end-of-year assumes lumpy. Which is closer to the actual cash flow profile?',
  4370317: 'FCFF discounts at WACC; FCFE at cost of equity. What goes wrong when the two get mixed?',
  4370318: 'A DCF that is 70% terminal value is mostly an assumption about the long run. What does that mean for the rigor of TV inputs?',
  4370319: 'Implied exit multiple is the sanity check on TV. What does divergence from peer multiples tell you about the assumptions?',
  4370320: 'Different segments belong to different valuation universes. What is the trigger for SOTP rather than a blended multiple?',
  4370321: 'Conglomerate discounts persist for years. What is the honest target — full SOTP or current market with spinoff as upside?',
  4370322: 'A defensible premium is grounded in observable, durable fundamentals. What anchors — growth, margins, FCF conversion — actually justify it?',
  4370323: '"Like management" and "the story is exciting" are not multiple anchors. What is the senior\'s point about subjective preference?',
  4370324: '12 months forward is the convention. Why does that horizon work — and what does shorter or longer do to client usability?',
  4370325: 'NTM EPS at the horizon date is what becomes LTM in 12 months. Why does that not double-count growth?',
  4370326: 'Bull/bear bands earn their place when specific drivers move by named amounts. What does a flat ±20% band fail to communicate?',
  4370327: '30% up vs 15% down is roughly 2:1. What rating does most desks use as the threshold for constructive?',
  4370328: 'Downside dominates upside — that is the inverted ratio. What rating does the asymmetry support?',
  4370329: 'Symmetric risk-reward at modest magnitudes is the canonical Hold. What is the analytical content — not "no view"?',
  4370330: 'FINRA Rule 2241 requires disclosure of rating systems and distributions. What does it not standardize?',
  4370331: 'Hold-heavy vs Hold-light distributions carry different signal. What does the buy-side normalize by — and why?',
  4370332: '45% Holds, 8% Sells — that is structural, not statistical. What forces (access, banking, asymmetric risk) inflate the bucket?',
  4370333: 'A catalyst needs a directional thesis attached. What separates an event from a catalyst?',
  4370334: 'Beat-and-raise is two catalysts — the surprise and the estimate revisions. Which leg often matters more for the trade?',
  4370335: 'Buybacks compress share count; spinoffs unlock structure. What separates these from generic "positive catalysts"?',
  4370336: 'Variant perception has to point at sourcing — channel checks, alt data, framework differences. What is the Reg FD constraint on company sources?',
  4370337: 'When variant perception fails to play out, the discipline is to retest the sourcing. What separates broken thesis from slow timing?',
  4370338: 'A 15%+ target move without a rating change creates inconsistency. What is the firm-policy guardrail doing?',
  4370339: 'A broken thesis demands a fresh start, not a mechanical hold on the new risk-reward. What does the new upside actually depend on?',
  4370340: 'Headline beat with negative reaction has a sub-headline cause — whisper numbers, sub-segment growth, KPI miss. What is the discipline to find it?',
  4370341: 'DCF is more complete but more sensitive; multiples encode market judgment compactly. Use both — what do divergences tell you?',

  // --- Original Ch5 (in main roadmap file) ---
  4103023: 'Trading on potential MNPI is a criminal offense, not a research edge. What is the firm process when a source crosses the line?',
  4105085: 'Honest risk disclosure builds credibility. What balance — risks explicit, thesis still supported — defends a Buy with real risks?',
  4107342: 'Post–Global Settlement firewalls exist precisely for this conflict. What is the right escalation when banking pressures research?',
  4107343: 'Selective preview to one client is selective disclosure of material research. What rule governs fair dissemination?',
  4107812: 'An expert call crossing into confidential customer detail ends now. What is the discipline — and why does "improving the model" not help?',
  4107813: 'Issuer-edited research is by definition not research. What is the line between fact-check and influence?',

  // --- Ch5 expansion (4370400–4370443) ---
  4370400: 'An initiation introduces full coverage in one document — rating, target, model, valuation, debates. What is the defining feature?',
  4370401: 'Updates are incremental. What does restating the full thesis in an update dilute?',
  4370402: 'Previews set up the framework for reading the print. What is it not — and what does the buy-side use it for?',
  4370403: 'Tie each line back to what the preview said to expect. What separates a strong recap from chasing the after-hours move?',
  4370404: 'A thematic is a cross-name framework with name-level implications. What turns it into seven updates stapled together?',
  4370405: 'Channel checks need sourcing, dates, and triangulation. What structure makes the note actionable rather than anecdotal?',
  4370406: 'Verdict, thesis, catalysts, risks, then evidence. What does the 10-minute reader need from the front page?',
  4370407: 'Two to three bullets force the analyst to commit to the load-bearing claims. What does a seven-bullet thesis signal?',
  4370408: 'Debates have two sides with evidence; risks are downside-only. What is the structure that earns the section\'s place?',
  4370409: 'Hidden risks reappear in client conversations. What does honest disclosure do to the credibility of the rating?',
  4370410: 'The model lives in the appendix where the working buy-side analyst tests the call. What does dropping it cost?',
  4370411: 'A thesis is only useful if it is falsifiable. What specific evidence would force a rating change in the next 12 months?',
  4370412: 'Disagreement with consensus is the symptom of variant perception, not the evidence. What sourcing earns the variant claim?',
  4370413: 'Variant perception has to point at a durable, specific difference. What separates a real variant from "we are more bullish"?',
  4370414: 'Catalysts need dates and directional theses. What does "continued execution" signal to the buy-side?',
  4370415: '"We expect" vs "we anticipate, depending on macro conditions" — the hedge does real work. What does proliferation precede?',
  4370416: 'Numerate evidence — specific data points, specific magnitudes — anchors a thesis. What does adjective-driven writing fail to support?',
  4370417: 'A controversial Sell wrong for six months tests whether the analyst can hold the call. What separates discipline from stubbornness?',
  4370418: 'Rating change is a step-function call; estimate revision is a continuous one. When does estimate movement force a rating reassessment?',
  4370419: '"More optimistic than consensus" is a stance, not a thesis. What is the missing piece — the specific testable claim?',
  4370420: 'Distributors talk up the pipeline because their incentives reward it. What is the discipline for triangulating their claims?',
  4370421: 'Customer channel checks are higher signal than distributor ones — but harder to source. What gives access and what limits it?',
  4370422: 'Ex-employees can describe past company practice but not current MNPI. What compliance constraints actually apply on these calls?',
  4370423: 'Third-party data sets — credit card, web traffic, satellite — are inputs, not conclusions. What is the cleanest way to use them?',
  4370424: 'Confirmation bias in channel work is the textbook trap. What forces the analyst to test the contrary view?',
  4370425: 'Trade publications are leads, not conclusions. What does the follow-up — checks, company data, synthesis — look like?',
  4370426: 'Reg FD prohibits issuers from selective disclosure of material non-public information. Whose communication is the target?',
  4370427: 'A CFO sharing forward gross margin beyond public guidance is the textbook Reg FD setup. What stops the conversation?',
  4370428: 'Quiet period is an issuer practice, not an SEC restriction on sell-side. What can the analyst still do during it?',
  4370429: 'Blue sheet is internal compliance and supervisory review — disclosures, sourcing, ratings consistency. What is it not?',
  4370430: 'Skip-level rating changes (Buy to Sell) need supervisory and compliance approval. What is the workflow that protects the firm?',
  4370431: 'Peer-sourced MNPI is still MNPI. What defines materiality — and what does sourcing not sanitize?',
  4370432: 'Pre-market lets the buy-side absorb the note before the open. What does intraday publication invite?',
  4370433: 'Multi-channel dissemination broadens the audience beyond direct clients. What does that imply for how the note has to read on Bloomberg search?',
  4370434: 'Material research goes wide; lighter content can be targeted. What is the selective-disclosure-of-research line?',
  4370435: 'PMs read 30 seconds; buy-side analysts read 30 minutes. What structure serves both in the same document?',
  4370436: 'Rating → target → thesis bullet. What is the PM\'s decision tree — and why does inverting the hierarchy lose the reader?',
  4370437: 'The appendix is where the buy-side analyst tests the call. What chain of influence flows from there?',
  4370438: 'Conferences create curated access. What is the analyst\'s job on the day — and what wastes the access?',
  4370439: 'NDRs are two days of buy-side meetings without a transaction. What does the analyst bridge — and why does it matter more without a deal?',
  4370440: 'One question per call. What shape — specific, public-data-grounded, room-to-be-informative — extracts signal without burning the relationship?',
  4370441: 'A Sell call costs access. What is the cost of trading the call back for the access?',
  4370442: '5% Sells is structural, not statistical. What forces — access, banking, asymmetric reputational risk — inflate the Hold bucket?',
  4370443: 'Controversial coverage builds the franchise. What is the long-game economics — and why does consensus-only writing fade?',

  // --- Capstone — MHSY (4370500–4370549) ---
  4370500: 'The buy-side will skim the primer in two minutes. What specific framing — best-of-breed above the EHR core — actually positions MHSY?',
  4370501: 'Payer reimbursement flows through hospital budgets within 12–18 months. What transmission mechanism connects payer dynamics to MHSY bookings?',
  4370502: 'CMIO sponsors, CIO controls integration, CFO signs capital. What does the three-party committee imply for deal slip and renewal risk?',
  4370503: 'Best-of-breed wins when the bundled module is materially worse and the workflow gain is measurable. What evidence supports that claim?',
  4370504: 'Epic could build a thinner version in 18 months. What survives that — eight years of outcome studies, non-Epic integrations, configured customer state?',
  4370505: 'Evidence thresholds make a thesis testable. What load-bearing claim does the falsifying evidence have to speak directly to?',
  4370506: 'Bottom-up sizing with units, addressability, and ACV beats "5% of a big number" every time. What inputs make it defensible?',
  4370507: 'Subscription is the durable line; services leads by 1–3 quarters. How does the buy-side rate the mix and what does that mean for the note?',
  4370508: 'Concentration is a renewal-window question, not a percentage question. What contract calendar matters more than the static top-customer share?',
  4370509: 'Why-now anchors on a specific event window in the next 4–8 quarters. What integrates the DiagnostixAI bolt-on with the adoption thesis?',

  4370510: '10-K read is prioritization, not coverage. Which four sections — MD&A, risk factors, contract liability, concentration — carry the load?',
  4370511: 'Subscription bookings flow through deferred revenue first; services is real-time percent-completion. What does the model preserve about each?',
  4370512: 'New AI and HIPAA risk factors are management-signal disclosures, not boilerplate. What does year-over-year delta tell you?',
  4370513: 'Mixed quarter — subscription beat is durable, services slip is timing. What does narrowing toward the lower half of guidance add?',
  4370514: 'Top end falls, bottom holds — that is a soft guide-down. What does management lose visibility on when the upside scenarios disappear?',
  4370515: 'A single named deferral usually implies a quieter pattern behind it. What backlog, RPO, and headcount data tests that?',
  4370516: 'Cross-sell expansion tests the platform thesis; new-logo pull-forward is timing. Which contribution actually moves the read?',
  4370517: 'RPO and deferred growth below subscription growth previews deceleration 2–4 quarters out. What does the forecast do with that signal?',
  4370518: 'Inorganic always sits on its own row. What does blending DiagnostixAI revenue into the subscription line do to the thesis?',
  4370519: 'When disclosure is thin, triangulate visibly. What sources — customer count, proxy, references — support the reconstructed segment view?',

  4370520: 'Subscription off net logos × ACV × NRR; services off implementation backlog with a lag. What does a top-down growth rate hide?',
  4370521: 'Logo additions are bounded by sales capacity — heads × productivity × ramp. What does trend extrapolation miss at inflections?',
  4370522: 'Cohort-level ACV separates new-logo land from installed-base expansion. What does a blended 5% ACV growth rate erase?',
  4370523: 'NRR drifts down as the customer base matures. What trajectory — 109% toward 106–108% — reflects scale dynamics honestly?',
  4370524: 'Services has its own driver (implementation backlog) and its own role as a leading indicator. What does forecasting it as a residual cost?',
  4370525: 'Synergies belong in a separate scenario row, not the base case. What does management-guided synergy timing routinely do?',
  4370526: 'Margin trajectory has to be earned line by line — gross margin scale, S&M leverage, R&D reinvestment, services drag. What does a smooth ramp hide?',
  4370527: 'Annual upfront billing makes subscription positive on working capital. What dynamic does the cash flow build have to capture?',
  4370528: 'Capex at ~4–5% is structural for health IT — capitalized software development is the largest piece. What does aspirational reduction ignore?',
  4370529: 'Stress-test through the three drivers — logos, ACV, NRR. What does a flat ±3pt sensitivity on headline growth fail to show?',

  4370530: 'EV/NTM revenue is the buy-side\'s primary frame for a 14%-subscription-growth name. What does P/E or EV/EBITDA put you in the wrong comp fight?',
  4370531: 'Veeva, Inovalon, Health Catalyst, R1, Premier — five to seven comps spanning business model and sector. What does a broad SaaS index lose?',
  4370532: 'Veeva at 9.5x vs MHSY at 4.2x is a margin gap, not a discount. What does the multiple-vs-growth+margin regression actually show?',
  4370533: 'Five-year explicit + Gordon Growth at 3.5–4% terminal. What does exit-multiple terminal do to a multiple-based primary methodology?',
  4370534: 'No debt — cost of equity equals WACC. What inputs — comp beta, current risk-free, ERP — let the buy-side argue with each piece?',
  4370535: 'Target is a synthesis, not an average. What does weighting EV/revenue heavily and confirming with DCF give you at ~$55–56?',
  4370536: 'Horizontal bars per methodology with disclosed inputs and a vertical line for the target. What does a single averaged chart hide?',
  4370537: 'Health Catalyst grows faster but lower-margin and unprofitable. What is the quality-of-growth-adjusted defense of the premium?',
  4370538: 'Three named catalysts in the next 12 months — Q3 synergy disclosure, FY guidance reset, top-50 renewals. What does "continued execution" do?',
  4370539: 'DCF $54 vs multiple $58 — the gap is informative, not noise. What does walking through the implied growth and margin reveal?',

  4370540: 'Verdict, thesis, catalysts, risks, then evidence. What does chronological structure cost the 10-minute reader?',
  4370541: 'Three sentences: best-of-breed durability, DiagnostixAI + margin pressure catalysts, peer re-rating path. What does generic phrasing fail to support?',
  4370542: 'Bull case requires specific upside conditions — synergies 2 quarters earlier and 30% larger, NRR at 110%+. What does "everything goes well" not commit to?',
  4370543: 'Bear case is a specific scenario — Epic bundling, top-50 re-evaluation, NRR drift to 102–104%. What does a laundry list of risks lose?',
  4370544: 'Variant perception is on integration speed, not on the long-term story. What does "higher quality than consensus thinks" fail to communicate?',
  4370545: 'Concede where the bear has a point, defend with specific evidence. What does holding the line without engagement cost in the room?',
  4370546: '15% upside without a dividend at the threshold. What does conviction plus catalyst proximity add to the rating decision?',
  4370547: 'Three to five named risks with triggers, impact, and monitoring. What does a boilerplate "competition, regulation, macro" section achieve?',
  4370548: 'Each quarterly print maps to a specific thesis test. What does reactive coverage cost on the leading indicators?',
  4370549: 'The thesis reduces to one variable — best-of-breed durability against Epic. What does the buy-side track once the initiation lands?',
}

// ============================================================================
// CORRECT-ANSWER SHORTENINGS
// ============================================================================
// For questions flagged in the Phase 4 length audit. The `newCorrect` keeps
// the load-bearing answer; the `lessonAddendum` carries the trimmed clauses
// onto the lesson so no substantive content is lost.
// ----------------------------------------------------------------------------

export const ER_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {
  // --- Ch2: very long correct strings ---
  4370105: {
    newCorrect:
      'Read the redacted agreement for what is visible — counterparty, term, termination triggers, exclusivity — and use the materiality threshold to bracket the size.',
    lessonAddendum:
      'Reg S-K Item 601(b)(10) governs material agreement filings; redactions under confidential treatment requests typically cover pricing and certain commercially sensitive details, not the structural terms. The visible terms usually drive the estimate change more than the pricing would.',
  },
  4370109: {
    newCorrect:
      'A 13D signals the investor is not passive — under Rule 13d-1, 13G is for passive investors and 13D is required for those who may seek to influence control.',
    lessonAddendum:
      'Choosing 13D over 13G announces, in effect, that activism or engagement is on the table. Reading the choice correctly is the difference between recognizing an activist has arrived and assuming a quiet institution just rebalanced.',
  },
  4370112: {
    newCorrect:
      'In the segment reporting footnote, governed by ASC 280, which requires revenue, the CODM\'s profit/loss measure, assets in some cases, and reconciliation to consolidated totals.',
    lessonAddendum:
      'MD&A discusses segments narratively, but the quantitative disclosure required by ASC 280 lives in the financial statement footnotes. The MD&A frames; the footnote anchors.',
  },
  4370113: {
    newCorrect:
      'The chief operating decision maker (CODM) test — segments are reported as management actually reviews them internally; if the CODM reviews discrete operating results for each business, they should be separate segments.',
    lessonAddendum:
      'The CODM is typically the CEO or an executive committee. The 10% quantitative threshold and margin-aggregation criteria are downstream of the CODM test, not substitutes for it.',
  },
  4370114: {
    newCorrect:
      'Whether segment-level revenue, profitability (segment EBIT/EBITDA per management\'s definition), and ideally segment assets are disclosed — without segment profitability, SOTP collapses into a revenue-only multiple per business.',
    lessonAddendum:
      'A SOTP only holds up when the company discloses enough segment economics to value each piece. The ASC 280 footnote either enables or blocks the methodology — gaps in disclosure are themselves a conversation to raise with IR.',
  },
  4370115: {
    newCorrect:
      'The risk factor language has crossed counsel\'s threshold for required disclosure — typically meaning customer concentration has materially increased, often into the range where a single customer is approaching 10% of revenue.',
    lessonAddendum:
      'The 10% threshold is a separate quantitative disclosure trigger under ASC 280. New concentration language is more consistent with one customer growing into outsized weight than with losing one.',
  },
  4370116: {
    newCorrect:
      'Treat the gap between risk factors and MD&A silence as itself informative — material known trends should appear in MD&A; counsel-driven risk language without MD&A counterpart is likely live and developing.',
    lessonAddendum:
      'Cross-reading risk factors against MD&A is one of the higher-leverage moves in filing analysis. New risk factors without MD&A counterpart often precede an 8-K or guidance event within one to two filings.',
  },
  4370123: {
    newCorrect:
      'The PM is right — SBC does not consume cash today but transfers economic ownership to employees; dilution shows up in share count and per-share value, so EBITDA that adds it back without consequence overstates owner economics.',
    lessonAddendum:
      'Buyback offsets are common but partial; share count net of buybacks usually drifts up over time. The technically correct answer is that SBC is non-cash *and* dilutive — any framework that treats it as one without the other will overvalue the equity.',
  },
  4370130: {
    newCorrect:
      'Treat the withdrawal as a guidance event in its own right — companies rarely withdraw when the macro outcome is symmetric; the central case has typically deteriorated enough that withdrawal is preferred to a formal cut.',
    lessonAddendum:
      'Withdrawals almost always signal downside relative to the previously communicated range; otherwise management would reaffirm or revise. The cleanest reads pair the withdrawal with the most recent prepared remarks to identify what specifically broke.',
  },
  4370132: {
    newCorrect:
      'Deferred revenue is amounts billed but not yet recognized (balance-sheet liability); RPO is contracted revenue not yet recognized (billed plus unbilled) under ASC 606; backlog is a non-GAAP management metric.',
    lessonAddendum:
      'Quality hierarchy is typically RPO > backlog > deferred revenue. Knowing which one a company reports — and which they emphasize — is itself a disclosure-quality read.',
  },
  4370133: {
    newCorrect:
      'The transition is typically driven by ASC 606 adoption and the desire to standardize on the GAAP-defined disclosure; levels may differ from prior backlog because scope and conventions are not identical.',
    lessonAddendum:
      'Backlog is company-defined; RPO has an ASC 606 definition. Levels at transition often differ by several percentage points — historical comparability has to be rebridged before comparing growth rates.',
  },
  4370135: {
    newCorrect:
      'Deferred revenue is billed-not-yet-recognized; RPO is contracted-not-yet-recognized (billed plus unbilled). Multi-year deals with annual billing put the full contract in RPO but only year one in deferred.',
    lessonAddendum:
      'The decoupling is a feature of ASC 606, not an error. Companies with annual billing on multi-year deals will see the metrics diverge, and that decoupling carries real information about contract mix and duration.',
  },
  4370136: {
    newCorrect:
      'Bookings is a management-defined non-GAAP metric — there is no GAAP definition — so what counts as a booking can shift across periods without notice; ask IR for the definition before treating it as a comparable series.',
    lessonAddendum:
      'Definitions vary by company: new business only, new plus renewals, partial renewals, or upgrades. Treating verbal bookings as a comparable series without pinning down the company\'s convention is one of the cleanest ways to get a SaaS model wrong.',
  },
  4370138: {
    newCorrect:
      'Tone has degraded along a recognizable arc — confidence, to acknowledgment of challenges, to defensive framing around an unchanged plan; tracked over time this often catches trouble before formal estimate revisions.',
    lessonAddendum:
      'Confidence → "working through" → defensive plan-restatement is the canonical arc into a guidance cut, reliably visible one to two quarters ahead. Pair tone tracking with hedging-language density and Q&A behavior.',
  },
  4370140: {
    newCorrect:
      'Partially defensible — the underlying asset purchase is one-time per deal — but for a serial acquirer the cumulative amortization is a recurring cost of the strategy; the disciplined treatment deducts expected ongoing acquisition amortization from adjusted EPS.',
    lessonAddendum:
      'Adding back amortization on a one-off acquisition for a non-serial acquirer is reasonable; the argument weakens as M&A becomes central to the strategy. For a serial acquirer the EPS that matters is post-amortization, because that is the EPS reflecting the cost of growth.',
  },
  4370141: {
    newCorrect:
      'A "Little r" revision — corrected in the next periodic filing without a non-reliance 8-K because the error is not material to previously issued financials; "Big R" restatements require Item 4.02 disclosure.',
    lessonAddendum:
      'The Big R / Little r distinction has been a focus of SEC enforcement attention in recent years. Aggressive Little r classification when the underlying error is closer to material is itself a soft red flag worth tracking.',
  },
  4370142: {
    newCorrect:
      'The widening gap suggests the non-GAAP construct is doing more work over time — adjustments grew 5.5x while revenue grew 1.3x; the disciplined response is to reanchor on GAAP EPS or a defensible cash-EPS, not on adjusted.',
    lessonAddendum:
      'Widening usually reflects accumulating "one-time" add-backs (restructuring, SBC, deal costs, intangibles amortization). A gap that compounds faster than revenue is almost always doing too much accounting work.',
  },
  4370143: {
    newCorrect:
      'Lead with the disclosure-pattern observation — three new risk factor categories with MD&A coverage on only one and call commentary on none is a high-information pattern that typically precedes specific disclosures within one to three filings.',
    lessonAddendum:
      'Combine risk factor deltas, MD&A coverage, and call commentary into a single pattern check. Items disclosed in risk factors but not in MD&A or Q&A often precede specific event disclosures — flagging the pattern at the 10-K is the high-leverage move.',
  },

  // --- Ch3: longest correct strings ---
  4370214: {
    newCorrect:
      'A DSO trending up sharply against modest revenue growth is a quality flag — collections are lagging, channel-stuffing risk rises, and revenue recognition aggressiveness should be tested before the next print.',
    lessonAddendum:
      'DSO = AR / (Revenue / 365). Rising DSO with rising revenue can be normal mix/seasonality; rising DSO with flat revenue is harder to explain benignly. Pair it with allowance for doubtful accounts and any change in revenue recognition policy.',
  },
  4370218: {
    newCorrect:
      'Build the working capital lines on a seasonal-quarter basis using the trailing-period seasonal pattern — inventory and AR swing predictably for retailers and seasonal industrials, and overlaying an annualized smoothing erases the cash signal in the worst quarter.',
    lessonAddendum:
      'Quarterly working capital is a real cash signal even when full-year is smooth. The disciplined model preserves the seasonal shape, flags the trough quarter, and shows how the seasonal swing interacts with the revolver and any working-capital facility.',
  },
  4370219: {
    newCorrect:
      'Maintenance capex preserves the existing asset base; growth capex expands capacity, geography, or product set. Most 10-Ks do not split them — proxy with depreciation as a floor on maintenance and triangulate via capex per existing unit.',
    lessonAddendum:
      'For DCF, maintenance capex matters because it sets the recurring cash drag on existing operations. Growth capex is optional from a steady-state perspective — if the company stopped growing, maintenance is what would still hit the cash flow statement.',
  },
  4370222: {
    newCorrect:
      'Capacity utilization above ~85% triggers the next capex step in many industries. Model the lumpy build with a step function — capex compresses FCF in the build year, depreciation rises after the asset comes online, and EBITDA scales as utilization on the new capacity ramps.',
    lessonAddendum:
      'The lumpy capex pattern is why EV/EBITDA and EV/(EBITDA-capex) diverge for capital-heavy businesses. The note should model the timing of the step, not smooth it into a percentage of revenue — that hides the actual cash dynamics.',
  },
  4370229: {
    newCorrect:
      '"True FCF" with SBC excluded is the most-cited buy-side metric for software, but SBC is dilutive — the disciplined version of FCF for valuation purposes deducts SBC, then a separate cash-EPS view can add it back transparently.',
    lessonAddendum:
      'The two views serve different audiences: pre-SBC FCF supports the operating-cash story management likes to tell; post-SBC FCF supports the per-share economic story the equity holder cares about. The note should show both and explain the gap.',
  },
  4370234: {
    newCorrect:
      'Circular references from a revolver feedback (interest depends on debt, debt depends on cash, cash depends on interest) are unavoidable in a fully-linked model — enable iterative calculation, document the assumption, and stress-test that the revolver does not toggle off in the sensitivity tables.',
    lessonAddendum:
      'The disciplined fix is to enable iterative calculation in Excel (File → Options → Formulas) and set the convergence threshold tight. Some firms prefer a manually-toggled circuit-breaker that snaps the revolver to a fixed plug when stress scenarios are run.',
  },
  4370239: {
    newCorrect:
      'Year 1 needs data-grounded line-item rigor; year 5 is structural — driver assumptions defended against industry mid-cycle; terminal is an economic claim about long-run growth and returns. Match the rigor to the forecast horizon rather than spreading uniform precision.',
    lessonAddendum:
      'Uniform precision across the forecast is a tell that the analyst has not separated the periods. The buy-side wants the near term tied to disclosed data, the medium term to defensible drivers, and the terminal to economic plausibility.',
  },
  4370240: {
    newCorrect:
      'Inherited model trace: read the assumption sheet first, walk each driver back to its 10-K source, identify any goal-seek or hardcoded plug, re-run the historicals to confirm the model ties, and update any stale macro inputs before changing forecasts.',
    lessonAddendum:
      'The inherited model carries an inherited thesis — sometimes one the prior analyst did not fully document. The trace forces the new analyst to own each assumption before the model leaves their desk under their name.',
  },
  4370241: {
    newCorrect:
      'A 5% gap is meaningful and the senior is testing whether the gap is defensible. Walk through your build line by line, identify the specific drivers where you differ from consensus (likely 1–2 lines), and either defend the variance or update the model.',
    lessonAddendum:
      'The right discipline is to know exactly where your gap to consensus comes from before discussing it. "I am 5% above" without identifying the specific revenue, margin, or share-count line that creates the gap is unprepared.',
  },

  // --- Ch4 ---
  4370318: {
    newCorrect:
      'A DCF that is 70% terminal value is a long-run economics statement dressed as a near-term valuation. Rebuild the explicit period (lengthen it, refine the inputs, normalize the mid-period margins) and stress-test the terminal growth and exit-multiple inputs explicitly.',
    lessonAddendum:
      'High terminal-value share is common for growth and capital-light businesses, but the discipline is to make the terminal inputs defensible — not to hide behind them. Sensitivity tables on terminal growth and discount rate should accompany any DCF where TV dominates.',
  },
  4370332: {
    newCorrect:
      'Hold is the rating that maintains corporate access, avoids open conflict with banking clients, and keeps the analyst out of contentious client conversations — the PM treats Hold as soft-Sell at Hold-rare brokers and as noise at Hold-heavy ones.',
    lessonAddendum:
      'Structural reasons inflate the Hold bucket: corporate access, banking conflicts (despite Global Settlement firewalls), and analyst-management relationships. Sophisticated buy-side reading translates "Hold at a Sell-shy broker" as a soft-Sell and watches estimate trajectory rather than rating level.',
  },
  4370341: {
    newCorrect:
      'Neither is more accurate in the abstract — DCF is more complete (it forces explicit assumptions on growth, margins, capital, discount rate) but more sensitive to inputs; multiples encode the market\'s aggregate judgment at the cost of opacity. Use both and explain divergences.',
    lessonAddendum:
      'DCF and multiples are complementary. DCF forces a complete, auditable set of assumptions; multiples encode market pricing in a compact way. The good note presents both, explains divergences, and lets the reader see the assumptions that drive the gap.',
  },

  // --- Ch5 ---
  4370422: {
    newCorrect:
      'Ex-employees can describe past company practice but not current confidential information — calls should be set up through an expert network, with compliance-approved scripts that exclude trade secrets, current customer/pricing detail, and any information protected by the employee\'s prior NDA.',
    lessonAddendum:
      'Expert network platforms (GLG, AlphaSights, Third Bridge) build compliance frameworks for exactly this reason. The analyst still has to enforce the line during the call — when an ex-employee starts sharing current MNPI, the call ends and the contact is flagged.',
  },
  4370426: {
    newCorrect:
      'Regulation Fair Disclosure prohibits issuers from selectively disclosing material non-public information to securities professionals or holders without simultaneous or prompt public disclosure — its target is the issuer\'s communication, but it shapes what the sell-side can ask for and what the issuer can share.',
    lessonAddendum:
      'Reg FD reshaped sell-side ER by closing the channel of selective disclosure from issuers to favored analysts. The regulation\'s target is the issuer, but the consequence for the analyst is that the IR conversation now has explicit guardrails.',
  },
  4370428: {
    newCorrect:
      'Quiet period is primarily a self-imposed issuer practice — companies typically restrict communications with investors in the weeks before earnings to avoid Reg FD violations and control disclosure timing; the analyst can still do all non-issuer work but should not expect IR access until after the print.',
    lessonAddendum:
      'There is no SEC quiet period for sell-side research on covered companies — analysts publish previews and updates during issuer quiet periods routinely. What the period restricts is the issuer\'s communications, not the analyst\'s.',
  },
  4370430: {
    newCorrect:
      'Draft the note with the new rating and target, submit to research management and compliance for evidence and disclosure review, satisfy any firm policy on skip-level changes, schedule publication for a fair-dissemination window, and prepare for IR fallout — all before the note hits clients.',
    lessonAddendum:
      'Rating-change workflows are deliberately structured to prevent both compliance failures and reputational ones. Research-management approval, compliance review, and dissemination discipline together protect the firm — and the analyst — from the predictable problems that follow rushed or selective rating changes.',
  },
  4370440: {
    newCorrect:
      'Ask a specific, public-data-grounded question that gives management room to be informative without forcing them into a Reg FD problem — e.g., "Given the move in [specific input cost], can you walk us through how you are thinking about COGS cadence into next quarter and whether the offsets you discussed last call have flowed through?"',
    lessonAddendum:
      'The craft is asking the right shape of question, not the most pointed one. Specific, anchored in public data, leaves management room to address the cadence of the answer — that is how analysts elicit signal and preserve access over years.',
  },
  4370442: {
    newCorrect:
      'Multiple structural forces inflate Holds and suppress Sells: companies dislike Sells and reduce access, the buy-side is largely long-only and has less direct use for Sell calls, IR relationships compound over time, and the reputational risk of a wrong Sell is asymmetric.',
    lessonAddendum:
      'The Sell rate sits well below 10% at most firms because of the structural economics of sell-side coverage, not because Sell calls are inappropriate. Understanding why they are rare is the first step to understanding their value when an analyst does issue one — the rarity itself is part of the signal.',
  },

  // --- Capstone (MHSY) ---
  4370513: {
    newCorrect:
      'Mixed quarter — subscription strength is the durable signal and supports the thesis, services slip is timing-driven and recoverable, but the guidance narrowing toward the lower half implies management is hedging on services recovery in the back half.',
    lessonAddendum:
      'Net interpretation is neutral on the print and modestly cautious on near-term services. Earnings recaps in initiation notes have to decompose the print rather than collapse it to a headline — the subscription beat and the services slip carry different implications for the thesis.',
  },
  4370529: {
    newCorrect:
      'Decompose the variance into three drivers — net new logos, ACV ramp, and NRR — show which combination of softer-than-base on each gets to 10%, and which combination of stronger-than-base on each gets to 16%.',
    lessonAddendum:
      'The senior analyst is testing whether you understand which lever moves the model most. For MHSY the load-bearing levers are logo additions, ACV ramp, and NRR; decomposing the variance through each is what separates a defensible model from one that just reports a single growth rate.',
  },
  4370541: {
    newCorrect:
      'MHSY is the leading best-of-breed clinical decision support vendor for US hospital systems, with durable subscription growth and a defensible position above the EHR core. The DiagnostixAI integration plus hospital margin pressure should drive attach-rate acceleration in the next 4–6 quarters, supporting a re-rating toward peer multiples. Initiate Buy, $55 target, 15% upside.',
    lessonAddendum:
      'A 3-sentence thesis has to commit to a specific business read, a specific catalyst window, and a specific valuation outcome. Generic phrasing — "high-quality" or "continued execution" — gives the buy-side nothing to engage with and does not survive the 10-minute read.',
  },
  4370545: {
    newCorrect:
      'Acknowledge the strength of the objection, point to the specific evidence (eight years of outcome studies, non-Epic integrations, configured rule libraries) that addresses it, and concede where the argument is weakest (timing of Epic\'s next major release).',
    lessonAddendum:
      'Pushing back without conceding the legitimate piece loses credibility on the next call. For MHSY against an Epic bear, partial concession plus specific evidence is what builds the durable analyst-buy-side relationship — holding ground on the strong parts of the thesis while engaging with the bear\'s real points.',
  },
}

// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the Investment Banking roadmap (299 questions across Chapters 1-5 and
// the Northwind capstone). Same three-export pattern as the Quant Core
// polish files (quantCorePolishBrainTeasers.ts, quantCorePolishProbability.ts).
//
//   IB_SUB_TOPICS         — id -> cluster name (3-7 clusters per chapter,
//                            capped at 8). Groups related questions so the
//                            UI can surface progress and "weakest cluster"
//                            diagnostics.
//   IB_MENTOR_HINTS       — id -> bespoke one-line hint replacing the
//                            generic Career Skills scaffold. Voice is
//                            senior associate to junior analyst: names the
//                            reasoning move, does not reveal the answer.
//   IB_CORRECT_SHORTENED  — id -> { newCorrect, lessonAddendum } for
//                            questions where the audit flagged the correct
//                            answer as guessable by length (correct >= 1.8x
//                            longest wrong, gap >= 20 chars). Top ~60 worst
//                            offenders by ratio are shortened; the trimmed
//                            explanatory clauses move to lessonAddendum so
//                            no teaching content is lost.

// ---------------------------------------------------------------------------
// SUB-TOPIC CLUSTERS
// ---------------------------------------------------------------------------
// 6 chapters x ~6 clusters each = ~38 clusters total. Names are 2-4 words,
// descriptive, US deal-context vocabulary.
// ---------------------------------------------------------------------------

export const IB_SUB_TOPICS: Record<number, string> = {
  // -------------------------------------------------------------------------
  // CHAPTER 1: Banking Workflow and Client Context (50 questions)
  // -------------------------------------------------------------------------
  // VDR & Confidentiality Stack
  4351000: 'VDR & Confidentiality Stack',
  4351001: 'VDR & Confidentiality Stack',
  4351002: 'VDR & Confidentiality Stack',
  4351003: 'VDR & Confidentiality Stack',
  // Process Sequencing & Buyer Outreach
  4351004: 'Process Sequencing & Outreach',
  4351005: 'Process Sequencing & Outreach',
  4351006: 'Process Sequencing & Outreach',
  4351007: 'Process Sequencing & Outreach',
  4351008: 'Process Sequencing & Outreach',
  4200012: 'Process Sequencing & Outreach',
  // IOI / LOI / Deal Protections
  4351009: 'IOI, LOI & Deal Protections',
  4351010: 'IOI, LOI & Deal Protections',
  4351011: 'IOI, LOI & Deal Protections',
  4351012: 'IOI, LOI & Deal Protections',
  4351013: 'IOI, LOI & Deal Protections',
  4351014: 'IOI, LOI & Deal Protections',
  4351015: 'IOI, LOI & Deal Protections',
  4200015: 'IOI, LOI & Deal Protections',
  // Engagement Letter Mechanics
  4351016: 'Engagement Letter Mechanics',
  4351017: 'Engagement Letter Mechanics',
  4351018: 'Engagement Letter Mechanics',
  4351019: 'Engagement Letter Mechanics',
  4351020: 'Engagement Letter Mechanics',
  4351021: 'Engagement Letter Mechanics',
  4351022: 'Engagement Letter Mechanics',
  // League Tables, Fairness & Board Duties
  4351023: 'League Tables, Fairness & Board',
  4351024: 'League Tables, Fairness & Board',
  4351025: 'League Tables, Fairness & Board',
  4351026: 'League Tables, Fairness & Board',
  4351027: 'League Tables, Fairness & Board',
  4351028: 'League Tables, Fairness & Board',
  4351029: 'League Tables, Fairness & Board',
  4351030: 'League Tables, Fairness & Board',
  // Coverage vs Product Groups
  4351031: 'Coverage vs Product Groups',
  4351032: 'Coverage vs Product Groups',
  4351033: 'Coverage vs Product Groups',
  4351034: 'Coverage vs Product Groups',
  4200010: 'Coverage vs Product Groups',
  4200011: 'Coverage vs Product Groups',
  // Analyst Output Discipline
  4351035: 'Analyst Output Discipline',
  4351036: 'Analyst Output Discipline',
  4351037: 'Analyst Output Discipline',
  4351038: 'Analyst Output Discipline',
  4351039: 'Analyst Output Discipline',
  4351040: 'Analyst Output Discipline',
  4351041: 'Analyst Output Discipline',
  4351042: 'Analyst Output Discipline',
  4351043: 'Analyst Output Discipline',
  4200013: 'Analyst Output Discipline',
  4200014: 'Analyst Output Discipline',

  // -------------------------------------------------------------------------
  // CHAPTER 2: Accounting and Financial Statement Links (50 questions)
  // -------------------------------------------------------------------------
  // Three-Statement Linkage
  4351100: 'Three-Statement Linkage',
  4351101: 'Three-Statement Linkage',
  4351114: 'Three-Statement Linkage',
  4351115: 'Three-Statement Linkage',
  4351128: 'Three-Statement Linkage',
  4351135: 'Three-Statement Linkage',
  4351136: 'Three-Statement Linkage',
  4351137: 'Three-Statement Linkage',
  4105066: 'Three-Statement Linkage',
  4103008: 'Three-Statement Linkage',
  // Taxes, SBC & Deferred Items
  4351102: 'Taxes, SBC & Deferred Items',
  4351103: 'Taxes, SBC & Deferred Items',
  4351104: 'Taxes, SBC & Deferred Items',
  4351105: 'Taxes, SBC & Deferred Items',
  4351106: 'Taxes, SBC & Deferred Items',
  // Working Capital & FCF
  4351107: 'Working Capital & FCF',
  4351108: 'Working Capital & FCF',
  4351109: 'Working Capital & FCF',
  4351129: 'Working Capital & FCF',
  4351130: 'Working Capital & FCF',
  4351132: 'Working Capital & FCF',
  4105067: 'Working Capital & FCF',
  4107787: 'Working Capital & FCF',
  // Revenue Recognition & Subscription Mechanics
  4351110: 'Revenue Recognition & Subscription',
  4351111: 'Revenue Recognition & Subscription',
  4351141: 'Revenue Recognition & Subscription',
  4107786: 'Revenue Recognition & Subscription',
  // Debt Schedules & Interest Circularity
  4351116: 'Debt Schedules & Interest Circularity',
  4351117: 'Debt Schedules & Interest Circularity',
  4351118: 'Debt Schedules & Interest Circularity',
  4351119: 'Debt Schedules & Interest Circularity',
  4103009: 'Debt Schedules & Interest Circularity',
  // EBITDA Adjustments & Lease Accounting
  4351123: 'EBITDA Adjustments & ASC 842',
  4351124: 'EBITDA Adjustments & ASC 842',
  4351125: 'EBITDA Adjustments & ASC 842',
  4351126: 'EBITDA Adjustments & ASC 842',
  4351127: 'EBITDA Adjustments & ASC 842',
  4351131: 'EBITDA Adjustments & ASC 842',
  4351122: 'EBITDA Adjustments & ASC 842',
  4340000: 'EBITDA Adjustments & ASC 842',
  4340001: 'EBITDA Adjustments & ASC 842',
  // Consolidation, Purchase Accounting & Special Items
  4351112: 'Purchase Accounting & Special Items',
  4351113: 'Purchase Accounting & Special Items',
  4351120: 'Purchase Accounting & Special Items',
  4351121: 'Purchase Accounting & Special Items',
  4351133: 'Purchase Accounting & Special Items',
  4351134: 'Purchase Accounting & Special Items',
  4351138: 'Purchase Accounting & Special Items',
  4351139: 'Purchase Accounting & Special Items',
  4351140: 'Purchase Accounting & Special Items',

  // -------------------------------------------------------------------------
  // CHAPTER 3: Valuation Core (50 questions)
  // -------------------------------------------------------------------------
  // DCF Construction
  4351200: 'DCF Construction',
  4351201: 'DCF Construction',
  4351202: 'DCF Construction',
  4351203: 'DCF Construction',
  4351209: 'DCF Construction',
  4351210: 'DCF Construction',
  4351211: 'DCF Construction',
  4351212: 'DCF Construction',
  4103011: 'DCF Construction',
  // WACC Components
  4351204: 'WACC Components',
  4351205: 'WACC Components',
  4351206: 'WACC Components',
  4351207: 'WACC Components',
  4351208: 'WACC Components',
  4340010: 'WACC Components',
  // Public Comps & Multiples Selection
  4351213: 'Public Comps & Multiples',
  4351214: 'Public Comps & Multiples',
  4351215: 'Public Comps & Multiples',
  4351216: 'Public Comps & Multiples',
  4351228: 'Public Comps & Multiples',
  4351229: 'Public Comps & Multiples',
  4351230: 'Public Comps & Multiples',
  4351240: 'Public Comps & Multiples',
  4103010: 'Public Comps & Multiples',
  4107318: 'Public Comps & Multiples',
  4107788: 'Public Comps & Multiples',
  // Precedent Transactions
  4351217: 'Precedent Transactions',
  4351218: 'Precedent Transactions',
  4351219: 'Precedent Transactions',
  4105068: 'Precedent Transactions',
  // Football Field & Synthesis
  4351220: 'Football Field & Synthesis',
  4351221: 'Football Field & Synthesis',
  4351222: 'Football Field & Synthesis',
  4351223: 'Football Field & Synthesis',
  4351224: 'Football Field & Synthesis',
  4351225: 'Football Field & Synthesis',
  4351226: 'Football Field & Synthesis',
  4351227: 'Football Field & Synthesis',
  4340011: 'Football Field & Synthesis',
  // EV Bridge & Share Count
  4351231: 'EV Bridge & Share Count',
  4351232: 'EV Bridge & Share Count',
  4351233: 'EV Bridge & Share Count',
  4351234: 'EV Bridge & Share Count',
  4351235: 'EV Bridge & Share Count',
  4351236: 'EV Bridge & Share Count',
  4351237: 'EV Bridge & Share Count',
  4351238: 'EV Bridge & Share Count',
  4351239: 'EV Bridge & Share Count',
  4105069: 'EV Bridge & Share Count',
  4107331: 'EV Bridge & Share Count',

  // -------------------------------------------------------------------------
  // CHAPTER 4: M&A and Capital Markets Materials (49 questions)
  // -------------------------------------------------------------------------
  // CIM, Teaser & Management Materials
  4351300: 'CIM, Teaser & Mgmt Materials',
  4351301: 'CIM, Teaser & Mgmt Materials',
  4351302: 'CIM, Teaser & Mgmt Materials',
  4351303: 'CIM, Teaser & Mgmt Materials',
  4351304: 'CIM, Teaser & Mgmt Materials',
  4351305: 'CIM, Teaser & Mgmt Materials',
  4351306: 'CIM, Teaser & Mgmt Materials',
  4351307: 'CIM, Teaser & Mgmt Materials',
  // Buyer Outreach & Strategic vs Sponsor
  4351308: 'Buyer Outreach & Buyer Type',
  4351309: 'Buyer Outreach & Buyer Type',
  4351310: 'Buyer Outreach & Buyer Type',
  4351311: 'Buyer Outreach & Buyer Type',
  4103012: 'Buyer Outreach & Buyer Type',
  // LOI, Definitive Agreement & Insurance
  4351313: 'LOI, Definitive Agreement & R&W',
  4351314: 'LOI, Definitive Agreement & R&W',
  4351315: 'LOI, Definitive Agreement & R&W',
  4351316: 'LOI, Definitive Agreement & R&W',
  4351317: 'LOI, Definitive Agreement & R&W',
  4351318: 'LOI, Definitive Agreement & R&W',
  4103013: 'LOI, Definitive Agreement & R&W',
  4107327: 'LOI, Definitive Agreement & R&W',
  // Fairness Opinion & Board Process
  4351319: 'Fairness Opinion & Board Process',
  4351320: 'Fairness Opinion & Board Process',
  4351321: 'Fairness Opinion & Board Process',
  4351322: 'Fairness Opinion & Board Process',
  // Synergies, Accretion & Consideration
  4351323: 'Synergies, Accretion & Consideration',
  4351324: 'Synergies, Accretion & Consideration',
  4351325: 'Synergies, Accretion & Consideration',
  4351326: 'Synergies, Accretion & Consideration',
  4351327: 'Synergies, Accretion & Consideration',
  4351328: 'Synergies, Accretion & Consideration',
  4351329: 'Synergies, Accretion & Consideration',
  4105071: 'Synergies, Accretion & Consideration',
  4107796: 'Synergies, Accretion & Consideration',
  4107791: 'Synergies, Accretion & Consideration',
  4340020: 'Synergies, Accretion & Consideration',
  4340021: 'Synergies, Accretion & Consideration',
  // Regulatory Approvals
  4351330: 'Regulatory Approvals',
  4351331: 'Regulatory Approvals',
  4107800: 'Regulatory Approvals',
  // Capital Markets (IPO, Follow-on, HY)
  4351332: 'Capital Markets (IPO / HY / Converts)',
  4351333: 'Capital Markets (IPO / HY / Converts)',
  4351334: 'Capital Markets (IPO / HY / Converts)',
  4351335: 'Capital Markets (IPO / HY / Converts)',
  4351336: 'Capital Markets (IPO / HY / Converts)',
  4351337: 'Capital Markets (IPO / HY / Converts)',
  4351338: 'Capital Markets (IPO / HY / Converts)',
  4351339: 'Capital Markets (IPO / HY / Converts)',
  4351340: 'Capital Markets (IPO / HY / Converts)',

  // -------------------------------------------------------------------------
  // CHAPTER 5: Execution, Comments, and Quality Control (50 questions)
  // -------------------------------------------------------------------------
  // Model Audit Discipline
  4351400: 'Model Audit Discipline',
  4351401: 'Model Audit Discipline',
  4351402: 'Model Audit Discipline',
  4351403: 'Model Audit Discipline',
  4351404: 'Model Audit Discipline',
  4351405: 'Model Audit Discipline',
  4351406: 'Model Audit Discipline',
  4351407: 'Model Audit Discipline',
  4351408: 'Model Audit Discipline',
  4351409: 'Model Audit Discipline',
  4351410: 'Model Audit Discipline',
  4107793: 'Model Audit Discipline',
  4107794: 'Model Audit Discipline',
  // Version Control
  4351411: 'Version Control',
  4351412: 'Version Control',
  4351413: 'Version Control',
  4351414: 'Version Control',
  4351415: 'Version Control',
  4351416: 'Version Control',
  4103015: 'Version Control',
  // Comments Turnaround
  4351417: 'Comments Turnaround',
  4351418: 'Comments Turnaround',
  4351419: 'Comments Turnaround',
  4351420: 'Comments Turnaround',
  4351421: 'Comments Turnaround',
  4351422: 'Comments Turnaround',
  4107320: 'Comments Turnaround',
  // Client Comms & Escalation
  4351423: 'Client Comms & Escalation',
  4351424: 'Client Comms & Escalation',
  4351425: 'Client Comms & Escalation',
  4351426: 'Client Comms & Escalation',
  4351427: 'Client Comms & Escalation',
  4107799: 'Client Comms & Escalation',
  // Hours, Staffing & Performance Reviews
  4351428: 'Hours, Staffing & Reviews',
  4351429: 'Hours, Staffing & Reviews',
  4351430: 'Hours, Staffing & Reviews',
  4351431: 'Hours, Staffing & Reviews',
  4351432: 'Hours, Staffing & Reviews',
  4351433: 'Hours, Staffing & Reviews',
  4351434: 'Hours, Staffing & Reviews',
  4351435: 'Hours, Staffing & Reviews',
  4351436: 'Hours, Staffing & Reviews',
  // Pitchbook Craftsmanship & Tie-Out
  4351437: 'Pitchbook Craftsmanship & Tie-Out',
  4351438: 'Pitchbook Craftsmanship & Tie-Out',
  4351439: 'Pitchbook Craftsmanship & Tie-Out',
  4351440: 'Pitchbook Craftsmanship & Tie-Out',
  4351441: 'Pitchbook Craftsmanship & Tie-Out',
  4105074: 'Pitchbook Craftsmanship & Tie-Out',
  4340030: 'Pitchbook Craftsmanship & Tie-Out',
  4340031: 'Pitchbook Craftsmanship & Tie-Out',

  // -------------------------------------------------------------------------
  // CAPSTONE: Sell-Side Analyst Packet — Northwind Industries (50 questions)
  // -------------------------------------------------------------------------
  // Northwind Marketing Materials
  4351500: 'Northwind Marketing Materials',
  4351501: 'Northwind Marketing Materials',
  4351502: 'Northwind Marketing Materials',
  4351503: 'Northwind Marketing Materials',
  4351510: 'Northwind Marketing Materials',
  4351511: 'Northwind Marketing Materials',
  // Buyer-List & Outreach
  4351504: 'Buyer-List & Outreach',
  4351505: 'Buyer-List & Outreach',
  4351506: 'Buyer-List & Outreach',
  4351507: 'Buyer-List & Outreach',
  4351508: 'Buyer-List & Outreach',
  4351509: 'Buyer-List & Outreach',
  4340101: 'Buyer-List & Outreach',
  // Diligence & Bidder Management
  4351512: 'Diligence & Bidder Management',
  4351513: 'Diligence & Bidder Management',
  4351514: 'Diligence & Bidder Management',
  4351515: 'Diligence & Bidder Management',
  4351516: 'Diligence & Bidder Management',
  4351517: 'Diligence & Bidder Management',
  4351518: 'Diligence & Bidder Management',
  4351519: 'Diligence & Bidder Management',
  // Valuation Triangulation
  4351520: 'Valuation Triangulation',
  4351521: 'Valuation Triangulation',
  4351522: 'Valuation Triangulation',
  4351523: 'Valuation Triangulation',
  4351524: 'Valuation Triangulation',
  4351525: 'Valuation Triangulation',
  4340100: 'Valuation Triangulation',
  // Final Bid & Recommendation
  4351526: 'Final Bid & Recommendation',
  4351527: 'Final Bid & Recommendation',
  4351528: 'Final Bid & Recommendation',
  4351529: 'Final Bid & Recommendation',
  4351530: 'Final Bid & Recommendation',
  4351545: 'Final Bid & Recommendation',
  4340102: 'Final Bid & Recommendation',
  // LOI, DA & Closing Mechanics
  4351531: 'LOI, DA & Closing Mechanics',
  4351532: 'LOI, DA & Closing Mechanics',
  4351533: 'LOI, DA & Closing Mechanics',
  4351534: 'LOI, DA & Closing Mechanics',
  4351535: 'LOI, DA & Closing Mechanics',
  4351536: 'LOI, DA & Closing Mechanics',
  4351537: 'LOI, DA & Closing Mechanics',
  4351538: 'LOI, DA & Closing Mechanics',
  4351539: 'LOI, DA & Closing Mechanics',
  4351540: 'LOI, DA & Closing Mechanics',
  4351541: 'LOI, DA & Closing Mechanics',
  4351542: 'LOI, DA & Closing Mechanics',
  4351543: 'LOI, DA & Closing Mechanics',
  4351544: 'LOI, DA & Closing Mechanics',
  4351546: 'LOI, DA & Closing Mechanics',
}

// ---------------------------------------------------------------------------
// MENTOR HINTS
// ---------------------------------------------------------------------------
// One bespoke hint per question (299 entries). Voice: senior associate
// mentoring an analyst. Names the actual reasoning move. Does not reveal
// the answer.
// ---------------------------------------------------------------------------

export const IB_MENTOR_HINTS: Record<number, string> = {
  // -------------------------------------------------------------------------
  // CHAPTER 1: Banking Workflow and Client Context
  // -------------------------------------------------------------------------
  4351000: 'NDA execution is the gate for general data, not for top-customer pricing. Ask what disclosure damage the NDA actually undoes if the buyer never gets to LOI.',
  4351001: 'NDA prohibits use; it does not erase what the buyer\'s commercial team saw. Antitrust counsel insists on a different mechanism precisely for competitor-to-competitor diligence.',
  4351002: 'These labels mean the same thing in US M&A; standstill is a separate clause. Do not over-read the choice of acronym.',
  4351003: 'Diligence flows from seller to buyer on a sell-side. Ask which side is doing the disclosing before reaching for "mutual."',
  4351004: 'Day 1 / Day 2 in deal-process language is about prep vs live phases, not signing vs closing and not bidder rounds. The phase split is internal.',
  4351005: 'The MD is reviewing strategic logic and prioritization, not the alphabet. Group the list by buyer type first, then tier within each group.',
  4351006: 'A sponsor\'s required IRR bounds them to standalone DCF math. What can a strategic add to the cash flow stream that a sponsor cannot defensibly model?',
  4351007: 'The process letter is the rulebook for the round, not a marketing document. Ask what each bidder needs to know to submit a comparable bid by the deadline.',
  4351008: 'First-round screens; second-round commits. What new information does each advanced bidder now have, and what additional commitment can the seller demand in return?',
  4351009: 'IOI is a non-binding indication of interest; LOI is a more formal letter that typically triggers exclusivity. The change in commitment is the point of the document.',
  4351010: 'You cannot compare bids on headline price when financing certainty and structure differ. Translate each into a risk-adjusted certain-equivalent and rank on that.',
  4351011: 'Exclusivity is a one-way option granted to the leading buyer. What does the seller surrender in price discovery, and what should they extract in exchange?',
  4351012: 'A MAC clause is a walk-away right. Ask what counts as "material adverse" and which side is bearing the risk that the world changes between sign and close.',
  4351013: 'Carve-outs (industry, economy, regulation) push pre-close risk back onto the buyer. Disproportionate-impact language is the typical seller compromise — name the move.',
  4351014: 'A break fee is paid by the target when the target walks; a reverse break fee is paid by the buyer when the buyer cannot close. Match the fee direction to the failure mode.',
  4351015: 'A 2% reverse break fee is option premium on a financing-conditioned bid. Compare it to the seller\'s alternative of a higher-certainty bidder at a slightly lower price.',
  4351016: 'WGL ownership sits with the senior associate or VP who actually maintains the live list. Counsel and client both feed names; one person needs to own the master.',
  4351017: 'Conflicts checks run against the bank\'s entire active mandate list. The check happens before the engagement letter is signed because the answer can disqualify the bank from accepting.',
  4351018: 'KYC and AML are regulatory onboarding requirements on the client side, not deliverables. Naming who the beneficial owners are is the gating step.',
  4351019: 'A retainer is paid up-front and typically credited against the success fee at close. The point is to signal commitment from the client, not to enrich the bank.',
  4351020: 'Success fees are a percentage of deal value, with a minimum floor for small deals. The structure (flat vs Lehman vs ramped) changes incentives — ask which fits the deal size.',
  4351021: 'A tail provision protects the bank if the client signs with a previously-introduced buyer shortly after terminating. The duration and the introduced-buyer list are the negotiated levers.',
  4351022: 'Expenses are usually pass-through to a documented cap; indemnity is for third-party claims arising from the engagement. Both are standard but each has a typical negotiation lever.',
  4351023: 'A league table measures aggregated deal credit per the data provider\'s rules over a defined period. It does not measure revenue, satisfaction, or success rate.',
  4351024: 'Different providers split deal credit differently — full credit to each, pro-rata, or by role. Pitch decks that claim "full credit" without specifying the provider are misrepresentation bait.',
  4351025: 'A fairness opinion answers a narrow question: is the consideration fair from a financial point of view? It does not opine on strategic merit or post-closing fit.',
  4351026: 'Delivery sits with senior bankers and a fairness committee, not the deal team alone. The committee\'s independence is what gives the opinion its evidentiary weight to the board.',
  4351027: 'Directors owe duties of care and loyalty. In a sale, "care" means an informed decision with adequate process — that is the standard the banker\'s documentation has to support.',
  4351028: 'Once change-of-control is inevitable, the duty narrows from "long-term value" to "best price reasonably available." Ask what the process record now has to prove.',
  4351029: 'Public processes get broader buyer reach but leak signal to competitors, employees, and customers. Private (targeted) processes preserve confidentiality at the cost of buyer breadth.',
  4351030: 'A go-shop is a post-signing window to solicit higher bids; a no-shop bars active solicitation. The go-shop reduces the Revlon-process gap but adds friction for the lead buyer.',
  4351031: 'FA (financial advisor) and non-FA labels matter for fairness, league tables, and conflict allocation. The FA owns the strategic advice; non-FA roles run financing or specific products.',
  4351032: 'Capital markets execute issuance (debt or equity); M&A executes change-of-control transactions. The two cadences (days for an offering, months for a deal) drive separate staffing.',
  4351033: 'ECM cadence is pre-announcement marketing weeks then a roadshow; DCM cadence is documentation then a day-of-pricing. Each market has its own investor-coverage cycle.',
  4351034: 'Sell-side advises the seller and runs the auction; buy-side advises the buyer and runs diligence and negotiation. The workstreams mirror but the deliverables differ.',
  4351035: 'Live deals have client deadlines; pitches do not. Push back on the second-priority work, not on the work that is on the critical path to a close.',
  4351036: 'Model versioning is date plus version plus initials, in a single canonical folder. Anything else lets two people overwrite each other on a Saturday.',
  4351037: 'When more than one person edits a model, only one holds the live copy at any moment. The "next editor" rule prevents two parallel edits that have to be merged manually.',
  4351038: 'CIM markups go on a printed copy with red pen, scanned for the associate. Tracked-changes in Word loses the layout review that the markup is actually for.',
  4351039: 'Every number on every page traces to a source line. Footnote discipline is what survives litigation, an SEC inquiry, or just a board member asking where the number came from.',
  4351040: 'Comp tables are sourced from filings, not from the bank\'s internal model. The audit trail goes back to the 10-K, the proxy, or CapIQ — every number per the source.',
  4351041: 'Hierarchy is analyst → associate → VP → MD, with each layer owning a different output. Sending output past the layer above invites a comments storm and breaks trust.',
  4351042: 'The MD reads the executive summary, the football field, the sensitivities, and the recommendation. Make those four artifacts pristine; the rest of the deck supports, not leads.',
  4351043: 'A comments log captures every reviewer, every issue, and the resolution. No comment is silently dropped; no reviewer is surprised by the next turn.',
  4200010: 'Two axes inside the bank: industry coverage (relationship) and product groups (execution). A sale and a refi need different product owners with the same coverage team.',
  4200011: 'Pitch is sales; live deal is paid execution with binding deadlines. The cadence and the priority order change when you cross that line.',
  4200012: 'Teaser is anonymized one-pager (no NDA). CIM has confidential data (NDA-gated). Sending them in the wrong order leaks information that the NDA cannot recall.',
  4200013: 'Ten items is a tracker; the answer is which one is blocking the close. Ladder the detail to the audience — clients and MDs want the gating item, not the list.',
  4200014: 'Eight hundred items routed through the CEO will stall the company and the deal. A single seller-side project manager gates the queue through functional owners.',
  4200015: 'Signing creates contractual obligations; closing transfers ownership and cash. The gap (regulatory, financing, MAC) is exactly where deal risk lives between sign and close.',

  // -------------------------------------------------------------------------
  // CHAPTER 2: Accounting and Financial Statement Links
  // -------------------------------------------------------------------------
  4351100: 'Depreciation hits IS as expense, BS as accumulated depreciation, and CF as a non-cash addback in CFO. Walk all three legs before answering.',
  4351101: 'D&A is non-cash and lives below net income. The CFO bridge starts at NI and adds it back to recover cash from operations.',
  4351102: 'Current tax is what you pay this period; deferred tax is the timing-difference reconciliation. Ask which one is on the IS and which builds the BS line.',
  4351103: 'Tax depreciation faster than book depreciation creates a future tax liability. The DTL is the time value of a tax you have not yet paid.',
  4351104: 'NOLs only have value if you expect future taxable income to use them. A valuation allowance writes the DTA down when that future income is not "more likely than not."',
  4351105: 'TSM treats in-the-money options as exercised at the strike, with the proceeds buying back shares at the average market price. The net incremental count is what hits dilution.',
  4351106: 'SBC is real economic compensation but cash never leaves. The IS recognizes it; the CFS adds it back; the buyer should not treat it as free.',
  4351107: 'AR up means cash collected later than revenue recognized. The change in AR is a use of cash on the CFS — sign matters.',
  4351108: 'A retailer holds inventory; higher DIO means more capital tied up per dollar of COGS. Compare to industry norms before reading it as good or bad.',
  4351109: 'Stretching DPO is free financing from suppliers until they push back on terms. Ask what happens to supplier reliability when you stretch past their patience.',
  4351110: 'ASC 606 ties revenue to performance obligations, not to billing or cash. Annual billing collected up-front recognizes ratably.',
  4351111: 'Point-in-time recognition lands at delivery; over-time recognition spreads across the performance period. Contract modification can shift the pattern — read what the customer now controls.',
  4351112: 'Goodwill is not amortized for public companies under US GAAP. It is tested for impairment annually, which is the moment over-payment finally hits the IS.',
  4351113: 'Goodwill impairment is a non-cash IS charge that writes down the BS asset. CF: nothing — but the equity reduction is real.',
  4351114: 'PP&E roll-forward: opening + capex − D&A − dispositions = closing. Every line ties; reconcile against the BS before moving on.',
  4351115: 'A capex spike compresses cash even when EBITDA is flat. The divergence shows up in FCF, not in earnings — that is the diagnostic.',
  4351116: 'Term loans amortize on a fixed schedule; the mandatory payment hits the CF financing line whether or not the company has cash.',
  4351117: 'Interest on average balance is more accurate than ending balance because the debt level moves. Most production models use average; ask why the iteration matters.',
  4351118: 'A revolver sweep direction: cash above the minimum pays down the revolver; cash below draws on it. The revolver is the elastic in the model.',
  4351119: 'Iterative calc resolves the loop numerically, not analytically. If you have to turn it on, document why and verify the steady-state value.',
  4351120: 'MI shows up on consolidated revenue (full top line) but not on the parent\'s share of NI. The "less: NI attributable to NCI" line is the bridge.',
  4351121: 'Equity-method is a one-line investment with proportional NI flowing through. Compare to consolidation (line-by-line) and ask which control level applies.',
  4351122: 'A restructuring charge is accrued on the IS when committed; cash leaves later as severance pays out. The accrual reverses out of CFO as a non-cash addback.',
  4351123: 'Real one-time items (legal settlement, specific transaction costs) survive. Vague "growth investments" or "owner add-backs without detail" do not survive QofE.',
  4351124: 'Operating lease: straight-line rent in operating expense. Finance lease: depreciation in operating, interest in non-operating. The split changes EBITDA.',
  4351125: 'ASC 842 puts both lease types on the BS as an ROU asset and a lease liability. The IS treatment is what diverges by lease classification.',
  4351126: 'In a rising-cost environment, LIFO assigns higher COGS than FIFO. The LIFO reserve is the cumulative inventory understatement vs FIFO at any point in time.',
  4351127: 'FIFO inflates gross margin in rising costs (old, cheap inventory matched to current revenue); LIFO suppresses it. Watch which method the comp uses before reading margin signals.',
  4351128: 'CFO = NI + D&A + other non-cash − ΔNWC + other. Build the bridge cleanly so each line can be sensitized independently.',
  4351129: 'FCFF = EBIT(1−t) + D&A − capex − ΔNWC. It is unlevered (pre-interest) because it represents cash available to all capital providers.',
  4351130: 'FCFE = FCFF − after-tax interest + net borrowings. The bridge from unlevered to levered is the financing line — match it exactly.',
  4351131: 'LBO normalizations strip owner perks, personal expenses, and discretionary comp to a market-rate run-rate. The sponsor underwrites the normalized number, not the reported one.',
  4351132: 'The NWC peg is usually the trailing-12-month average. Anything else lets seasonality manipulate the closing-day adjustment.',
  4351133: 'PP&E and identifiable intangibles get written up to fair value at acquisition. The write-up increases future D&A and reduces future earnings — sponsors model this explicitly.',
  4351134: 'Goodwill = purchase price − fair value of identifiable net assets. It captures synergies, control, and over-payment that the IS will eventually surface via impairment.',
  4351135: 'RE: opening + NI − dividends = closing. Dividends never touch the IS; they reduce equity directly.',
  4351136: 'Net income closes to retained earnings each period. Dividends declared on common stock reduce RE but do not flow through the IS.',
  4351137: 'A clean tie-out: change in cash on the BS equals net change in cash from the CFS. If those two do not match, something is broken upstream.',
  4351138: 'Service cost is operating; the rest of net periodic pension cost is non-operating under ASC 715. Cash contributions are a separate CFS line.',
  4351139: 'AFS unrealized gains bypass NI and go to OCI, building AOCI on the equity side. No IS impact, no cash impact — but real equity moves.',
  4351140: 'A write-down is non-cash; the IS takes the hit, the BS reduces the asset, and the CFS adds it back. Cash never moves.',
  4351141: 'Capitalized software amortizes over its useful life rather than expensing on the IS at the time of spend. The CFS shows the cash leaving as investing, not operating.',
  4103008: 'Driver-based revenue (price × volume × mix) exposes the assumptions for sensitivity testing. A flat-percentage growth rate cannot be sensitized — it has no diagnostic surface.',
  4103009: 'Cash → interest → debt → cash is the classic three-statement loop. Break it with iterative calc or an averaging convention, but document the choice.',
  4105066: 'A plug equal to the change in debt points at the financing flow, not retained earnings. Trace the debt schedule into the CFS first.',
  4105067: 'DSO times sales / 365 = AR. The relationship has to hold every year — anything else implies collection cycles change for no reason.',
  4107786: 'Subscription billings are collected up-front, recognized ratably, and build deferred revenue. The deferred line ties to bookings, not to NI — that is the diagnostic.',
  4107787: 'Working capital should reflect operating cycles. A retailer\'s peak inventory borrowing is what matters to lenders, not the average.',
  4340000: 'Maintenance capex is the floor on unlevered FCF; growth capex is discretionary. Lenders underwrite to maintenance; sponsors flex growth. Without the split, the analyst defends neither.',
  4340001: 'Defensible add-backs (legal, founder comp, owner perks) survive QofE. Vague "growth investments" with no documentation do not.',

  // -------------------------------------------------------------------------
  // CHAPTER 3: Valuation Core
  // -------------------------------------------------------------------------
  4351200: 'Unlevered FCF = EBIT(1−t) + D&A − capex − ΔNWC. Make sure every line is operating (pre-financing) and ties to the three-statement model.',
  4351201: 'Gordon growth uses a perpetuity formula with a long-term growth rate. Exit multiple anchors to a comp multiple at the end of the forecast. Each is sensitive to a different assumption.',
  4351202: 'A terminal growth rate above long-run GDP is not defensible. Cap it at the lower of long-run real GDP plus expected inflation, and the industry\'s mature-state outlook.',
  4351203: 'Mid-year discounting assumes cash flows arrive evenly through the year. End-of-year piles them at year-end. The convention shifts value by roughly half a year of discount.',
  4351204: 'Unlever each comp\'s equity beta to get asset beta, take the median, then relever at the target\'s capital structure. The unlevering removes the leverage noise.',
  4351205: 'After-tax cost of debt = pretax yield × (1 − tax rate). Use the market yield on the company\'s comparable debt, not the coupon rate from old issuance.',
  4351206: 'CAPM: rf + beta × ERP. The risk-free rate is a long-term government bond yield; the beta is asset-side then relevered; the ERP is the contested input.',
  4351207: 'The ERP is the equity premium over the risk-free rate. Sources disagree (Damodaran, Duff & Phelps, historical) — pick one source and stick with it across the model.',
  4351208: 'A thinly-traded comp has unreliable beta. Use a peer-group median or an industry-level beta rather than letting one stale trade drive the WACC.',
  4351209: 'Terminal value carrying more than ~70% of total value is a red flag. Sensitize on terminal growth and exit multiple separately and disclose the range.',
  4351210: 'The final forecast year is the run-rate that compounds into perpetuity. Normalize capex to roughly equal D&A; normalize NWC change to match revenue growth.',
  4351211: 'In the terminal year, capex should approximately equal D&A so the asset base is stable. Anything else implies an indefinite reinvestment or shrinkage profile.',
  4351212: 'Implied exit multiple = terminal value / terminal-year EBITDA. Compare to current trading comps; if implied is materially above current, the perpetuity is doing the work.',
  4351213: 'Comp universe filters on industry, geography, size, growth, and profitability. A bad universe makes a multiple meaningless; one or two bad comps drag the median.',
  4351214: 'Calendarize each comp to a common period (CY or NTM) before comparing multiples. Mixing FY-end June with FY-end December produces nonsense.',
  4351215: 'Inside-comp EBITDA adjustments matter: management-reported "adjusted" EBITDA includes add-backs you may not want. Trace to the source and apply consistent rules.',
  4351216: 'NTM (next twelve months) reflects forward expectations; LTM (last twelve months) reflects realized. Forward multiples are smaller because numerator grows.',
  4351217: 'Precedents older than the current cycle reflect different rates and sentiment. A 5-year horizon is typical for relevance; 10 years includes structural noise.',
  4351218: 'A control premium in precedents is implicit — the announced price reflects what a buyer paid for control. Compare it to the unaffected trading price to size the premium.',
  4351219: 'Public-target precedents print higher because the price reflects a premium over an observable trading price. Private-target deal value is reported less reliably.',
  4351220: 'A football field is one bar per methodology, low-to-high. Center each bar on the central estimate and let the spread tell the story.',
  4351221: 'A football field with very wide bars is a methodology problem, not a value problem. Tighten each method\'s assumptions before showing the chart.',
  4351222: 'Sum-of-the-parts requires segment-level financials and segment-level multiples. The discount or holding-company adjustment goes at the bottom.',
  4351223: 'An LBO at the sponsor\'s required IRR gives a floor on what a sponsor will pay. Strategics can clear that floor by adding synergies.',
  4351224: 'A 20-25% IRR target translates back to a maximum purchase price for given operating assumptions. Solve backward from IRR to entry price.',
  4351225: 'Accretion direction is roughly: buyer P/E vs target P/E. If buyer P/E > target P/E and the deal is funded with stock, expect accretion (first-pass intuition).',
  4351226: 'Accretion is an EPS arithmetic; it is not value creation. A deal can be accretive at the same time as destroying shareholder value.',
  4351227: 'Premium to unaffected = (offer price − unaffected price) / unaffected price. "Unaffected" means before deal rumors moved the stock — pick the date carefully.',
  4351228: 'EV/EBITDA is capital-structure neutral; P/E is sensitive to leverage and tax. For M&A you compare operating businesses, so EV/EBITDA leads.',
  4351229: 'EV/Sales works for pre-EBITDA companies but ignores profitability. Use it as a sanity check, not as the primary multiple.',
  4351230: 'High-growth companies trade on revenue or forward EBITDA; mature companies trade on current EBITDA or earnings. Match the multiple to the maturity.',
  4351231: 'Market cap is equity only; enterprise value adds net debt and other claims. The two converge for unlevered companies but diverge for anyone with debt.',
  4351232: 'Public float is the share count tradeable in the market — excludes insider locks and certain restricted holdings. Smaller float means less liquidity, wider spreads.',
  4351233: 'TSM: in-the-money options exercised at strike, proceeds buy back shares at average market price. Net incremental shares hit diluted count.',
  4351234: 'When the stock is right at the option strike, TSM gives near-zero incremental shares. Above strike, dilution accumulates as the stock rises.',
  4351235: 'A convertible note converts at the conversion ratio if-in-the-money. Use the if-converted method or net share settlement per the indenture — they are not the same.',
  4351236: 'Minority interest is a claim on subsidiary equity owned by outside parties. Add it to EV because the buyer of the parent is buying the parent\'s share of NI, not the full consolidated NI.',
  4351237: 'Preferred is a senior claim on equity, settled at liquidation preference. Add it to EV because a buyer of the enterprise has to clear that claim.',
  4351238: 'ASC 842 puts operating leases on the BS. Treat the lease liability as debt-like in the EV bridge and verify EBITDA has been adjusted consistently.',
  4351239: 'Strip non-recurring items from LTM EBITDA the same way you would in QofE. The multiple has to be applied to a clean, run-rate denominator.',
  4351240: 'Cross-border comps need consistent currency for both numerator (EV) and denominator (EBITDA). FX moves can swing a multiple by 10-20% — control for it.',
  4103010: 'EV/EBITDA fits profitable companies; EV/Revenue works for high-growth pre-profit. The choice follows the business model, not analyst preference.',
  4103011: 'A 92% terminal weighting means the explicit forecast is barely doing any work. Sensitize the growth and discount rate; if the answer collapses, the assumptions are too aggressive.',
  4105068: 'Precedent transactions are useful only when the set is relevant. Filter on industry, size, geography, deal context, and timing before averaging anything.',
  4105069: 'EV = equity + debt − cash. Other claims (preferred, MI, operating leases under ASC 842) follow the same logic — add senior claims, subtract netting items.',
  4107318: 'Mixing CY and FY in a comps table produces inconsistent multiples. Calendarize to a common period before comparing.',
  4107788: 'A retailer with heavy store leases has operating-lease liabilities under ASC 842. Match the EV adjustment to the EBITDA adjustment so the multiple is consistent.',
  4107331: 'Diluted share count includes in-the-money options (via TSM), convertibles (if-converted), and any other dilutive instruments. Ignoring them understates equity value.',
  4340010: 'WACC = (E/V)·Re + (D/V)·Rd·(1−t). Use target capital structure (not historical), market values where possible, and document each input source.',
  4340011: 'A football field synthesizes methodology dispersion. Anchoring on the high end of one method while the others cluster lower is a tell — name the disagreement.',

  // -------------------------------------------------------------------------
  // CHAPTER 4: M&A and Capital Markets Materials
  // -------------------------------------------------------------------------
  4351300: 'CIM structure: executive summary, market, company, financials, growth, transaction considerations. Each section answers a buyer question — what would they ask in order?',
  4351301: 'Teaser is anonymized, one page, no financial detail beyond high-level metrics. The whole point is to screen interest before NDA disclosure.',
  4351302: 'CIM financials present three years historical, current year, and a forward forecast. Adjusted EBITDA bridge belongs here with explicit add-back lines.',
  4351303: 'Management presentation cadence: overview, financials, growth, then Q&A — usually 2-3 hours. Rehearse the CEO on the questions you expect, not on the answers you want.',
  4351304: 'The CIM contains confidential customer, pricing, and personnel data. It only goes to NDA-signing buyers; circulation logs matter for later disputes.',
  4351305: 'Adjusted EBITDA bridges from reported EBITDA via documented add-backs. Each line needs a defensible footnote; vague items get haircut in QofE.',
  4351306: 'The CIM should show a defensible base case and an explicit upside case with named drivers. Embedding 25% growth in the base when history shows 11% invites buyer skepticism.',
  4351307: 'Teasers do not name a price. They sell the company\'s story; the price discovery happens after CIM and through the bidder process.',
  4351308: 'Tiered buyer list: most likely → less likely within each segment (strategics, sponsors, platforms). The tiering communicates the banker\'s point of view to the MD.',
  4351309: 'A mixed process (strategics + sponsors) lets the seller use the tension to push pricing. Strategics-only loses sponsor optionality; sponsors-only loses synergy bidders.',
  4351310: 'Most likely buyers go first — they have time to engage seriously before the process compresses. Lower-likelihood buyers fill the funnel but cannot drive timing.',
  4351311: 'Tier 1 (general financials, market) opens at NDA. Tier 2 (named customers, pricing, sensitive HR) opens at IOI when the bidder list narrows. The gate is the process milestone.',
  4351313: 'No-shop bars active solicitation; exclusivity bars discussions for a period; lookback allows reacting to unsolicited superior offers. Three different operations on price discovery.',
  4351314: 'IOI is indicative range; LOI is a single point with structure, financing, conditions, and timeline. The LOI is a real proposal the seller can sign.',
  4351315: 'LOI exclusivity surrenders price discovery for a fixed period. The seller should extract concrete commitments (financing, diligence scope, signing target) in exchange.',
  4351316: 'Definitive agreement reps and warranties cover the seller\'s representations about the business. MAC carve-outs allocate pre-close risk — disproportionate-impact language is the typical compromise.',
  4351317: 'R&W insurance sits between the buyer\'s retention and the policy cap. The basket and the cap are the most-negotiated numbers because they govern seller exposure.',
  4351318: 'Stapled financing is debt financing pre-arranged by the seller\'s bank, offered to all buyers. Speeds the process but creates a conflict if the bank also wants to advise the buyer.',
  4351319: 'Fairness opinions are not SEC-required but are standard practice for public-company boards under Delaware law (Smith v. Van Gorkom). They support the duty of care.',
  4351320: 'A fairness opinion covers whether the consideration is fair from a financial point of view. It does not cover strategic merit, tax, or individual shareholder economics.',
  4351321: 'Board book fairness analyses include DCF, comps, precedents, premium analyses, and a football field. Each method has documented inputs and is signed off by the fairness committee.',
  4351322: 'If the sell-side advisor has a conflict (success fee, prior relationship), the board often gets a second fairness opinion from an independent bank. The conflict disclosure goes in the proxy.',
  4351323: 'Cash deals dilute the buyer if cash is funded by debt and the after-tax cost exceeds target earnings yield. Stock deals dilute or accrete based on relative P/E.',
  4351324: 'Synergies arrive in phases — typically 30/60/100% over three years. Front-loading synergies in the EPS bridge makes the deal look better than it is.',
  4351325: 'Break-even synergy is the level that just offsets dilution. Solve for the synergy number that makes year-1 EPS flat; compare to management\'s stated synergy estimate.',
  4351326: 'Purchase price allocation assigns the price across identifiable assets (PP&E, intangibles) at fair value; the residual is goodwill. The allocation drives future D&A and tax.',
  4351327: 'Cash gives target shareholders certainty; stock preserves buyer capital but exposes target to buyer-equity risk. The mix follows the target shareholders\' tax preference and the buyer\'s capacity.',
  4351328: 'Fixed exchange ratio puts buyer-price risk on the target (between sign and close). Floating ratio puts it on the buyer. Collars allocate risk only in extreme moves.',
  4351329: 'Inside the collar, the ratio adjusts to preserve value. Outside the outer band, the target often gets a walk-away right because dilution becomes punitive to buyer shareholders.',
  4351330: 'HSR review is 30 days (15 days for cash tenders). A second request adds 6-12 months and requires extensive document production. Reverse termination fees price this risk.',
  4351331: 'Industry approvals (FCC, FERC, OCC, CFIUS) run in parallel with HSR but on their own statutory clock. Outside dates and reverse fees should reflect the longest path.',
  4351332: 'S-1 review by the SEC typically takes 3-4 months with multiple rounds of comments. The roadshow follows registration effectiveness; pricing is the day before listing.',
  4351333: 'Bookbuilding collects indications of interest (price-and-quantity pairs). The bookrunner reads the demand curve and recommends a price-and-size at the pricing call.',
  4351334: 'The greenshoe is an underwriter option to sell additional shares at the offering price within 30 days. Underwriters short the greenshoe; cover by exercising if up, by buying in the market if down.',
  4351335: 'Follow-on is a registered public offering; block trade is a privately-negotiated overnight sale. Different mechanics, different fees, different SEC filings.',
  4351336: 'Lock-up expiry typically triggers a wave of insider selling. Follow-ons launched right at expiry let pre-IPO holders exit cleanly; before expiry requires underwriter waivers.',
  4351337: 'Convertible bonds have a conversion ratio (shares per bond) and a call provision (issuer\'s right to force conversion after a date). Both are negotiated upfront.',
  4351338: 'Traditional converts have an investor option to convert; mandatories automatically convert at maturity. Mandatories count as equity for rating purposes — that is the issuer use case.',
  4351339: 'Investment-grade (BBB-/Baa3 or higher) prices tight off Treasuries with incurrence covenants; high-yield prices wide with maintenance covenants. Different desks, different investors.',
  4351340: 'League-table credit is one allocation rule (often equal split among bookrunners); fee economics are negotiated separately on the cover. The two diverge — and banks pitch for both.',
  4103012: 'IOIs let the seller screen interest before granting access to detailed diligence. The process letter sets the form, content, and deadline so bids are comparable.',
  4103013: 'A WC peg is the normalized working capital level the price assumes. The closing-day true-up adjusts the price by the gap between actual and pegged.',
  4105071: 'Synergy haircuts apply integration-risk and timing discounts. A $80M run-rate synergy with 50% closing-conditional dependency is worth materially less than $80M of certain savings.',
  4107327: 'Sixty days of exclusivity is a long option for the buyer. The seller should price the time premium and extract diligence commitments in return.',
  4107800: 'Antitrust overlap in two markets means a likely second request, possibly divestiture remedies. Reverse termination fees and outside dates have to reflect that timeline.',
  4107796: 'A buyer paying for synergies is paying the strategic premium. Sponsors cannot defend synergy assumptions to LPs, so synergy-driven price is strategic-only territory.',
  4107791: 'Management lowering forecasts mid-process is a credibility event. The banker has to surface it with the seller; hiding it from buyers invites later rep-and-warranty claims.',
  4340020: 'First-pass: deal is accretive if buyer earnings yield (1/PE) exceeds the deal\'s after-tax financing cost. Refine with synergy phasing and exact share-issuance math.',
  4340021: 'Sources = debt tranches + sponsor equity. Uses = purchase price + refinancing of target debt + fees. Debt capacity follows LTV and DSCR underwriting standards.',

  // -------------------------------------------------------------------------
  // CHAPTER 5: Execution, Comments, and Quality Control
  // -------------------------------------------------------------------------
  4351400: 'Sum-of-parts cross-check: each segment\'s output ties to the consolidated total, with no double-counting at the corporate line. Reconcile or document the gap.',
  4351401: 'Cell-by-cell tracing on a borrowed model: start at the output, walk every dependency back to a sourced input, document any cell you cannot defend.',
  4351402: 'Hardcodes in green or yellow; formulas in black; inputs in blue. The color discipline is what lets a reviewer find inputs without parsing every formula.',
  4351403: 'Blue inputs, black formulas — the standard convention across street banks. Deviating breaks reviewer expectations; sticking to it speeds every audit.',
  4351404: 'Error checks at the top of every tab (BS balance, sources = uses, cash flow tie). If any check fails, the model is not ready to leave your desk.',
  4351405: 'Footing tables (rows and columns sum to the totals) is the cheapest audit. Run sum(range) = total before claiming the table works.',
  4351406: 'The BS breaks on debt, cash, working capital, or retained earnings — in that order of frequency. A plug equal to a single year\'s NI is RE; equal to debt change is financing flow.',
  4351407: 'A circular that "resolves" still resolves to whatever the initial guess pulled the model toward. Verify steady state by perturbing the initial value and confirming convergence.',
  4351408: 'A sensitivity table that shows the same number in every cell is broken. The output formula is pointing at a hard-coded cell, not the live driver.',
  4351409: 'Inputs labeled "DriverX" with no description are reviewer poison. Name conventions ladder to comprehension; one hour of naming saves five hours of comments.',
  4351410: 'Print preview shows what the MD will actually see: cut-off columns, awkward page breaks, footnotes off the page. Run it before every send-up.',
  4351411: 'Date-version-initials (e.g. v07_2025-03-19_CR.xlsx) is the canonical pattern. Anything else lets two people overwrite each other.',
  4351412: 'One person holds the live copy at any moment. "Next editor" handoff is explicit (email, Slack), and the new file name reflects who has it.',
  4351413: 'Restore from the most recent good archive, document the edits between that version and the lost state, and tell the team in writing. The transparency protects the analyst.',
  4351414: 'Stop editing immediately. Preserve the overwritten file as evidence before any further changes — the priority is recovery, not concealment.',
  4351415: 'Two people editing in parallel is a merge conflict waiting to happen. The fix is a clear handoff protocol — one editor at a time, with the live copy named.',
  4351416: 'Anchor on the most recent send-up email — that is the canonical version. Rename it cleanly, archive the rest, and circulate the new name to the team.',
  4351417: 'Print the red-line markup with line numbers and reviewer initials. The associate needs to see what changed; the analyst needs the record for later turns.',
  4351418: 'Resolve every comment in the next turn or escalate it. Comments left unaddressed compound across rounds and surface as MD frustration on the third draft.',
  4351419: 'A comments log lists reviewer, page, issue, status, resolution. Each turn closes some items and adds others; the log is the audit trail.',
  4351420: 'An MD comment is a directive; an associate comment is a suggestion in a comments queue. Apply MD comments first; bring conflicts back through the associate, not around them.',
  4351421: 'Marking a comment "resolved" when the underlying issue is not fixed creates trust debt. Either fix it or flag it as deferred with the reviewer\'s sign-off.',
  4351422: 'Comment turnaround clock starts when the analyst receives the markup and ends when the next clean draft is back. Default is overnight for live deals.',
  4351423: 'Analysts do not email clients directly. Every external communication routes through the associate or VP, with the MD copied as needed.',
  4351424: 'When VP and associate are unreachable on a live deal, escalation is to the staffer or another VP in the group — not to client. Document the attempted contacts.',
  4351425: 'The analyst\'s job is to make the MD and VP look good. That means anticipating questions, surfacing risks early, and never letting them be surprised in a client meeting.',
  4351426: 'Anything containing a live price, a buyer name, or an unverified projection does not leave the bank without VP review. The default is "no" if not reviewed.',
  4351427: 'External email cc only the seniors who need visibility (MD, VP). CC\'ing the full internal team exposes structure to counterparts.',
  4351428: 'Live deals have weekend protection in the form of explicit staffer coverage — not an entitlement to be off, but a coverage rotation. Confirm coverage before turning off email.',
  4351429: 'Dead week is between major deal milestones; the expectation is admin catch-up, model cleanup, and pitches in flight. Not nothing — just not crisis cadence.',
  4351430: 'Saying no to a second staffing is a conversation with the staffer about capacity, not a refusal to the partner. The frame is "I can do A or B well; not both."',
  4351431: 'Protected Saturday rotates among the analyst class; one Saturday per month is fully off-line. The policy works only if the staffer and the deal team respect it.',
  4351432: 'Year-end reviews cover technical, client-facing, teamwork, and ownership dimensions. Each dimension is rated independently; comp follows the composite.',
  4351433: 'Bottom decile is a recoverable but explicit performance signal. Recovery requires staffer help on a visible deal, not just trying harder on the same staffings.',
  4351434: 'Top bucket goes to analysts who own the entire output (model, deck, story), anticipate problems, and never need follow-up. Effort alone does not get top bucket.',
  4351435: 'Receive feedback by listening, taking notes, and asking clarifying questions. Pushback comes in a separate conversation, not in the moment of the feedback itself.',
  4351436: 'Feedback up the chain is most useful when concrete and scoped. "Page 17 of last week\'s draft had three pivot errors" lands better than "comments are confusing."',
  4351437: 'Body 10-11pt, chart labels 8-9pt, consistent page headers, no chart broken across pages, source line on every data page. Pitch books read on screen and on paper.',
  4351438: 'Every chart and table has a source line citing the underlying document or model. The source line is what survives an audit, an SEC inquiry, or a board challenge.',
  4351439: 'Analyst owns the model; associate owns the slide story; VP owns the message. The failure mode is layer-blurring — analyst trying to own the story, VP editing the model.',
  4351440: 'The binder is the MD\'s in-room knowledge base — pitchbook, model output, recent press, anticipated questions with answers. The MD should never say "let me get back to you."',
  4351441: 'Color, double-sided, clipped, with tabs for sections. The physical artifact carries the MD through the meeting when the iPad fails or the room has no screen.',
  4103015: 'Two parallel edits is the classic version-control failure. The fix is canonical naming, single live copy, and explicit handoff — not "we\'ll merge it later."',
  4105074: 'A footnote mismatch on send-up is a small error that destroys reviewer trust. Reconcile the footnote to the source before circulating, not after the comment lands.',
  4107320: 'A buyer-question log tracks who asked what, when, and what was answered. It exists so every bidder sees consistent answers and the seller has a record.',
  4107794: 'Cross-border models need currency consistency at every step. Mix euro revenue with dollar debt without an FX line and the model is wrong by 10-20% silently.',
  4107793: 'A formula break right before a call is a small bug or a copy-paste error. Trace the broken cell, fix it, document the fix in the model, then call.',
  4107799: 'Distribution lists for confidential documents go through a check — every recipient on the list, every recipient out, before send. One wrong cc undoes a process.',
  4340030: 'Full tie-out means every number on every page traces to a sourced exhibit. The common miss is the second occurrence of a number tied out the first time but stale.',
  4340031: 'Management presentation prep is two weeks of rehearsal — overview, financials, growth, Q&A. The CEO should never see the deck for the first time in front of buyers.',

  // -------------------------------------------------------------------------
  // CAPSTONE: Sell-Side Analyst Packet — Northwind Industries
  // -------------------------------------------------------------------------
  4351500: 'Anonymize Northwind by industry profile, revenue band, and geography — never by anything that uniquely identifies the company. The teaser screens interest, not a search engine.',
  4351501: 'The 2024 bolt-on is part of Northwind\'s pro-forma story. Position it as integration complete with normalized run-rate, or flag it as still-integrating with explicit add-backs.',
  4351502: 'Owner add-backs (founder comp normalization, personal expenses, owner-paid perks) are standard QofE items. Each one needs a defensible footnote — vague items get haircut by buyer\'s diligence.',
  4351503: 'Working capital is a story in the CIM, not just a number. Show the seasonal pattern, the average, and the peak — and how the company funds the peak.',
  4351504: 'Twelve strategics plus eight sponsors is a balanced mix. The strategics drive synergy-based pricing; the sponsors drive process tension. Each list segment has its own logic.',
  4351505: 'Customer concentration data (38% in top 3) goes in the data room behind a tier-2 NDA gate, not in the CIM. The buyer can underwrite once they\'re committed to diligence.',
  4351506: 'Tier 1 (general financials, market, company overview) opens at NDA. Tier 2 (named customers, pricing, sensitive HR) opens at IOI for advancing bidders only.',
  4351507: 'Sequence: teasers go out Friday, NDAs return through the next week, CIMs distributed at second-tier NDA, IOIs due 4-6 weeks later. The process letter is the rulebook.',
  4351508: 'Pre-marketing meetings with the sponsor short list let the CEO test the pitch before the formal process starts. Skip them and the first management presentation is your rehearsal.',
  4351509: 'The founder\'s retirement is the change-of-control trigger. Position it as planned and value-maximizing for the family; weak framing invites buyer concerns about continuity risk.',
  4351510: 'Management presentation arc: business overview, commercial momentum, financials and WC plan, growth roadmap, leadership transition. End on continuity, not on Q&A.',
  4351511: 'A defensive answer ("they have been with us 14 years") reads as denial. Script tenure plus operational depth plus active mitigation — three parts that take the question seriously.',
  4351512: 'Beyond headline price: financing source named, conditions called out, diligence timeline, and language quality. A sponsor articulating a thesis is more durable than a generic letter.',
  4351513: 'IOI valuation range needs to triangulate against your DCF midpoint, trading comps, and precedents. If the spread is wider than your football field, ask why.',
  4351514: 'Six second-rounders is the standard advance from 14. Cut on price, financing certainty, and engagement quality — not on prestige of the bidder name.',
  4351515: 'Second-round process letter requires markup of the definitive agreement, committed financing, board approval, and disclosure schedules. Conditionality, not price, is the differentiator now.',
  4351516: 'Data room build-out for second round: open Tier 2, add customer detail, layer in expert calls. The room expands with each bidder advance — never contracts.',
  4351517: 'Customer reference calls require curated reference customers, a "strategic review" framing, and pre-briefing by the CEO. Each bidder gets the same call list to keep disclosure equitable.',
  4351518: 'QofE pro-forma adjustments survive only with documentation. Pro-forma synergies from the 2024 bolt-on get haircut; pro-forma cost takeouts that are already implemented stand.',
  4351519: 'A quiet sponsor between rounds usually signals IC reservations or financing changes. The MD calls the sponsor partner directly to surface the issue without applying pressure.',
  4351520: 'Final bids arrive in different structures — cash, rollover, earnout, stock. Translate each to a risk-adjusted cleared-cash number before ranking.',
  4351521: 'Northwind\'s DCF triangulates against trading comps and precedents. If your DCF is materially above the comps, sensitize WACC, terminal growth, and capex — find the lever.',
  4351522: 'Trading comps for a specialty distributor: filter on size, end market, growth, and margin profile. National players are reference points, not directly comparable.',
  4351523: 'Distribution-sector precedents track the consolidation cycle — pricing rises with sponsor activity, falls when public consolidators pause. Time-window matters.',
  4351524: 'LBO ceiling at 22-25% IRR gives the sponsor floor on what they will pay. Anything above the LBO ceiling is strategic synergy money — read the bid stack accordingly.',
  4351525: 'Strategics typically share 30-50% of synergies with the seller. Run the math on the strategic\'s implied synergy-sharing and ask if there is more room to push.',
  4351526: 'Headline price is not cleared price. Sponsor at $760M with committed financing clears more than strategic at $735M with stock; rank on cleared cash adjusted for certainty.',
  4351527: 'A 2% reverse termination fee is option premium on the buyer\'s right to walk. Specific performance is full obligation to close — those two structures are not comparable.',
  4351528: 'The board is split. The recommendation names cleared price, certainty, cultural fit, and family alignment — then identifies the lever that would resolve the gap.',
  4351529: 'Family rollover at sponsor pricing requires board seat, tag-along, drag-along, and an exit waterfall that does not subordinate the family. The LOI sets terms; the DA documents them.',
  4351530: 'LOI economic terms: price, structure, exclusivity. Non-economic terms: governance, employment, board, transition. The non-economic terms get less attention and matter just as much.',
  4351531: 'Exclusivity period: 30-45 days for clean deals, longer for regulatory complexity. The seller surrenders price discovery — measure the gain in commitment against the loss.',
  4351532: 'During exclusivity the seller must not engage other buyers. The data room remains open but with frozen content; any new buyer outreach waits until exclusivity expires.',
  4351533: 'Definitive agreement workstream sequencing: financial reps and warranties first, MAC clause, indemnification, closing conditions, schedules. Each piece negotiates against the others.',
  4351534: 'Northwind-specific reps: top-20 customer contracts, environmental at industrial sites, employee benefits and union, plus 2024 bolt-on integration. These are the high-risk areas.',
  4351535: 'R&W insurance retention (the deductible) and policy cap are the most-negotiated numbers. Standard retention is ~1% of deal value; cap typically 10-20% of price.',
  4351536: 'Carve out general economic, industry-wide, regulatory, war/terror, weather, and pandemic conditions — with disproportionate-impact language for the first two. Standard seller protection.',
  4351537: 'Indemnification caps (general 10-25% of price) and survival periods (12-24 months general, longer for fundamental reps and taxes). Negotiated against R&W policy structure.',
  4351538: 'Fairness opinion needs separate engagement letter, conflict disclosure of the success fee, methodology disclosure, and an explicit statement of what it does not cover.',
  4351539: 'Specific performance is the right to compel closing through court order — strongest seller protection. Reverse termination fee is the right to be paid if buyer walks — weaker.',
  4351540: 'Signing-day press release plus 8-K filing within 4 business days. Coordinate the script across both, with consistent deal terms and timing — the SEC reads both.',
  4351541: 'HSR filing within 30 days post-signing. Second-request risk depends on competitive overlap — model the 6-12 month delay and the reverse fee implications upfront.',
  4351542: 'A 12-month NWC average target penalizes a seasonal seller closing at peak. Negotiate a seasonally-adjusted target or a corridor adjustment that triggers only on material variance.',
  4351543: 'Closing checklist with named owners for every deliverable; funds flow with exact wire instructions and a backup contact; Thursday dry run before Friday close.',
  4351544: 'Post-close: 90-day post-close coordinator, transition document, CEO transition to chairman emeritus, integration team owner. Friday close is not the end of the bank\'s role.',
  4351545: 'A Revlon-record needs the full bid comparison, the bank\'s recommendation framework, the fairness opinion, and board minutes documenting each consideration. Documentation defeats challenges.',
  4351546: 'A post-mortem captures which buyers converted, which CIM sections produced the most questions, which adjustments survived QofE, and what retraded in the DA. One owner, one file.',
  4340100: 'Football field reconciliation for the IC: each method, its central estimate, the range, and the methodology disagreement. Show methodology dispersion explicitly — that is the IC discussion.',
  4340101: 'Honor the CEO\'s exclusion list (documented client direction). Segment remaining strategics by deal logic, sponsors by sector fit; tier customer concentration data behind a second-tier NDA gate.',
  4340102: 'Strategic A at $660M with no financing condition is higher-certainty than Sponsor C at $680M with financing risk. Recommend the strategic but first push the sponsor to remove the condition.',
}

// ---------------------------------------------------------------------------
// CORRECT-ANSWER SHORTENINGS
// ---------------------------------------------------------------------------
// Top ~60 questions where correct answer was >=3.5x longer than longest wrong
// (or >=2.5x and >300 chars). Trimmed content moves to lessonAddendum so no
// teaching content is lost.
// ---------------------------------------------------------------------------

export const IB_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {
  4351339: {
    newCorrect: 'IG (BBB- or higher) prices off Treasuries at a tight spread with incurrence covenants; HY (BB+ or lower) prices wider with maintenance covenants and call schedules — separate syndicate desks, different investor coverage.',
    lessonAddendum: 'IG is sold to insurance companies and pension funds; HY is sold to dedicated HY funds and CLOs. The bank\'s syndicate desks for each market are separate and the deal mechanics differ — call protection, covenant package, and roadshow length all change.',
  },
  4351330: {
    newCorrect: 'Standard HSR review is a 30-day waiting period (15 days for cash tender offers); either agency can issue a "second request" before expiry, extending the timeline 6–12 months and materially compressing deal certainty.',
    lessonAddendum: 'Second requests are issued when the agency wants a closer look at competitive overlap and require extensive document production. Reverse termination fees and outside dates have to be sized to the longest realistic regulatory path, not the HSR-only path.',
  },
  4351327: {
    newCorrect: 'Cash gives target shareholders certainty but uses buyer cash or debt capacity; stock preserves buyer cash but exposes target holders to buyer-equity risk; mix balances target tax-deferral, buyer currency cost, and deal certainty.',
    lessonAddendum: 'Mixed consideration is common when the buyer wants to preserve cash and the target wants partial certainty. Tax-deferral preferences on the target side (long-term holders vs arbitrage) often drive the exact mix, since stock consideration can qualify for tax-deferred reorganization treatment.',
  },
  4351543: {
    newCorrect: 'Closing checklist with named owners for every deliverable (signatures, board resolutions, officer certificates, lien releases, FIRPTA, R&W policy bind, escrow, paying agent); funds flow with wire instructions and a Thursday dry run.',
    lessonAddendum: 'The funds flow must reflect the exact closing-day amounts: purchase price minus the estimated working-capital adjustment, minus escrow, minus paying agent fee, minus debt payoff to the lender. A backup contact at the wire bank is non-optional. The dry run on the Thursday before close catches every error that would otherwise surface Friday morning.',
  },
  4351440: {
    newCorrect: 'The pitchbook tabbed, model output pages, comparable transactions summary, recent press on the parties, one-pager of anticipated questions with answers, and the MD\'s notes from the last meeting. The binder is the in-room knowledge base.',
    lessonAddendum: 'The ritual exists so the MD can answer any client question without saying "let me get back to you." Modern MDs may read on iPad too, but the printed binder remains the failsafe — and the act of assembling it forces the analyst to anticipate the meeting before it happens.',
  },
  4351538: {
    newCorrect: 'Separate engagement letter for the fairness opinion, explicit conflict disclosure of the success fee, opinion scope limited to "fair from a financial point of view," methodology disclosure with valuation ranges, and explicit statement of what it does not address.',
    lessonAddendum: 'The fairness opinion is often delivered by a different team within the bank or a separate firm to mitigate the success-fee conflict. The opinion explicitly does not address strategic merit, post-closing performance, or individual shareholder tax — limits matter for the board\'s reliance.',
  },
  4351439: {
    newCorrect: 'Analyst owns the model — every number, every formula; associate owns the slide story — page sequence and narrative; VP owns the message — meeting purpose and room dynamics.',
    lessonAddendum: 'The failure mode is layer-blurring: an analyst trying to own the story (overproduced slides, mis-positioned), an associate trying to own the message (out over their skis), or a VP editing the model directly and introducing errors only the analyst can catch. Each layer is a distinct discipline.',
  },
  4351028: {
    newCorrect: 'Once change of control is inevitable, the board\'s duty narrows from "long-term value" to "best price reasonably available for shareholders" — the banker must document a competitive process and justify any decision to favor one bidder.',
    lessonAddendum: 'This is the Revlon doctrine (Revlon v. MacAndrews & Forbes). The record needs to support the price-maximization standard: every bidder considered, every decision recorded with reasoning, every favoring of one bidder over another explicitly justified on the price-or-certainty axis.',
  },
  4351016: {
    newCorrect: 'The lead banker (typically the senior associate or VP on the deal) maintains the WGL. It lists every named individual at the seller, bank, counsel, and advisors with contact details and code-name discipline.',
    lessonAddendum: 'Code-name discipline lets the team make confidential references without naming the actual company — important when emails or calls might be overheard. The WGL is the operational backbone of the deal: every workstream contact is in it, and it updates as personnel change.',
  },
  4340030: {
    newCorrect: 'Every number on every page traces to a sourced exhibit (audited statement, internal report, or labeled model cell); footnotes, header dates, and chart labels cross-checked against source.',
    lessonAddendum: 'The most common analyst miss is the second occurrence of a number: a figure tied out cleanly the first time it appears, then pasted from a stale tab in a later section. Run the tie-out against every appearance, not just the first one.',
  },
  4351529: {
    newCorrect: 'LOI specifies rollover percentage, pricing (sponsor equity valuation), board representation, and tag-along; DA includes shareholders agreement with drag-along, tag-along, minority protections, and an exit-mechanism waterfall that does not subordinate the family.',
    lessonAddendum: 'Drag-along lets the sponsor force the family to sell at sponsor exit; tag-along lets the family ride along on partial sponsor exits. The exit waterfall is the most-litigated piece — make sure the family\'s pro-rata claim on exit proceeds is not subordinated to sponsor preferences or fees.',
  },
  4351542: {
    newCorrect: 'Negotiate a normalized WC target reflecting the closing-month seasonality (target the month-typical NWC, not the 12-month average), or a corridor adjustment that triggers only if final NWC is more than ±$3M from target.',
    lessonAddendum: 'A 12-month average target penalizes a seller closing at the seasonal peak — they get charged for inventory they normally hold. The seasonally-adjusted target or the corridor mechanism keeps the working-capital adjustment from becoming a backdoor price reduction.',
  },
  4351333: {
    newCorrect: 'Bookrunner collects indications of interest at varying price-and-quantity levels; demand builds in real time; at the pricing call the bookrunner recommends a price-and-size from the demand curve and the issuer approves.',
    lessonAddendum: 'Investors signal demand in formats like "10M shares at $20 limit" or "5M shares strikes" (no price limit). Allocation happens after pricing, not before — the bookrunner has discretion to allocate to long-only investors and away from quick-flip hedge funds to support an orderly aftermarket.',
  },
  4351526: {
    newCorrect: 'Sponsor C at $760M cash with committed financing delivers the highest cleared cash, subject to financing-condition language; Strategic A at $750M is the highest certainty all-cash. Cleared-cash ranking: C > A > D > B, with certainty inverting some of that order.',
    lessonAddendum: 'Sponsor D\'s rollover (5% at sponsor pricing) is real but discounted — the family bears sponsor-exit risk and timing. Strategic B\'s stock component is similarly discounted by buyer-equity risk and tax implications. The recommendation has to translate each bid to a risk-adjusted cleared-cash number, not rank on headline price.',
  },
  4351334: {
    newCorrect: 'The greenshoe gives underwriters the right to sell an additional 15% (1.5M shares) at the offering price within 30 days; underwriters short the shares at IPO and cover by exercising if up, or buying in the market if down. Purpose: price stabilization plus upsize optionality.',
    lessonAddendum: 'If stock trades above $20, exercising the greenshoe lets the issuer raise additional capital at the offering price. If stock trades below, covering in the open market provides price support without exposing the underwriter to losses on the short. The mechanic is also called the "over-allotment option."',
  },
  4351544: {
    newCorrect: 'Pre-close, assign a senior banker as post-close coordinator for the first 90 days; deliver a transition document covering open items (WC true-up, R&W claims, escrow timing, family rollover, indemnification); CEO transitions to chairman emeritus with named cadence; integration team owner identified.',
    lessonAddendum: 'The Friday close is a milestone, not an endpoint. Open items include any post-close working-capital true-up, the R&W policy claims protocol, escrow release timing, family rollover documentation, and the indemnification claim mechanism. The 90-day coordinator role exists to keep these from falling between buyer and seller after the deal team has moved on.',
  },
  4351317: {
    newCorrect: 'R&W insurance sits between the buyer\'s retention and the policy cap; the basket is the threshold below which no indemnity claim can be made; the general cap limits seller exposure above the policy. Retention and cap are the most-negotiated numbers.',
    lessonAddendum: 'The retention (the deductible the seller still bears) typically runs ~1% of deal value; the policy cap typically runs 10-20% of deal value. These two numbers directly affect seller hold-back economics and post-close exposure — they get more attention than the basket, which is usually a smaller absolute number.',
  },
  4340101: {
    newCorrect: 'Honor the CEO\'s two-name exclusion list as documented client direction; segment remaining strategics by deal logic (geographic adjacency, product complementarity, channel) and sponsors by sector fit; sequence teaser-then-NDA-then-CIM with customer concentration gated behind a second-tier NDA.',
    lessonAddendum: 'The CEO\'s exclusion list is non-negotiable client direction — document it in the file. The 38% top-3 customer concentration goes in the data room behind a tier-2 NDA gate, not in the CIM, so only committed bidders see the named data. Generic concentration figures (without customer names) can appear in the CIM body.',
  },
  4351427: {
    newCorrect: 'External emails cc only the seniors required to be visible — typically the MD and the relevant VP — and put the broader internal team on bcc or leave them off. CC\'ing the full team exposes structure to external counterparts.',
    lessonAddendum: 'Counterparts read the cc line to learn who is on the deal: how many junior bankers, who reports to whom, and where pressure points are. A short cc list keeps that information closed. Internal-only updates ride a separate thread or an internal email after the external send.',
  },
  4351534: {
    newCorrect: 'Top-20 customer contract reps (change-of-control language), environmental reps (current and historical industrial sites), employee benefits and union reps (legacy plans, organized facilities), and operating reps tied to the 2024 bolt-on (integration complete, no undisclosed liabilities).',
    lessonAddendum: 'These are the reps with the most Northwind-specific risk surface. Generic operating reps follow standard templates and negotiate quickly; the Northwind-specific reps drive most of the back-and-forth and most of the post-close indemnification exposure. R&W insurance covers some of the risk but not all.',
  },
  4351437: {
    newCorrect: 'Body text 10-11pt; chart labels 8-9pt; consistent page header (deal/section name); section divider pages distinct; never break a chart across two pages; source line at the bottom of every data page.',
    lessonAddendum: 'Pitchbooks read on both screen and printed page; the conventions hold for both. One MD/group typographic template applied consistently across the book is what separates a finished deck from a draft. Picking up the most recent group pitchbook as a starting template is the fastest path to conformity.',
  },
  4351511: {
    newCorrect: 'Script a three-part answer: tenure and contract structure (14 years, 5-year master with auto-renew), the operational depth (integrated EDI, regional warehouses, named-account service), and active risk mitigation (account diversification underway).',
    lessonAddendum: 'Run two more rehearsals until the CEO delivers it crisply without hesitation. A defensive answer ("they have been with us 14 years, no risk") reads as denial; the three-part answer takes the question seriously by acknowledging the concentration, explaining the lock-in, and naming the mitigation.',
  },
  4351319: {
    newCorrect: 'A fairness opinion is not legally required but is effectively standard practice for public-company boards under Delaware law (Smith v. Van Gorkom). Typically delivered by an investment bank, supporting the board\'s satisfaction of the duty of care.',
    lessonAddendum: 'The opinion can come from the lead M&A advisor if the engagement letter contemplates it, or from a separate bank to avoid conflict with the success fee. Smith v. Van Gorkom established that boards relying on management\'s number without independent financial advice may breach their duty of care.',
  },
  4340102: {
    newCorrect: 'Recommend the strategic at $660M as the higher-certainty path: the $20M premium from the sponsor is more than offset by financing-condition risk — but first ask the sponsor to remove the financing condition or improve the reverse termination fee.',
    lessonAddendum: 'The recommendation is not the answer alone; it is the framework. Name the cleared-price ranking, the certainty ranking, the lever that would close the gap (remove the financing condition, raise the reverse fee), and proceed with the strategic if the sponsor will not match certainty. The board needs the framework to make an informed decision.',
  },
  4351042: {
    newCorrect: 'The MD reads the executive summary, the football field, two or three sensitivities, and the recommendation. The analyst must ensure those four artifacts are pristine and ladder cleanly to the underlying model.',
    lessonAddendum: 'A 45-minute MD review will not cover 60 slides or 200 tabs. The MD decides on the four artifacts above and trusts the rest; the analyst\'s job is to make those four pristine and to have the supporting depth ready when an MD question lands.',
  },
  4351545: {
    newCorrect: 'The record needs the full bid comparison table, the bank\'s recommendation memo showing the framework, the fairness opinion with methodology and ranges, board minutes recording each consideration, and explicit consideration of the $10M headline gap against the certainty premium.',
    lessonAddendum: 'The Revlon record must document that the board considered the higher headline bid rather than dismissing it. Saying "the bank recommended Strategic A" is not enough — the minutes need to show the framework, the weighing, and the reasoning. This is what defeats a post-close shareholder challenge.',
  },
  4351331: {
    newCorrect: 'Industry approvals (FCC for telecom, FERC for energy, OCC for banks, CFIUS for foreign acquirers) run in parallel with HSR but follow their own statutory standards and timelines — typically 6–12 months and sometimes much longer for contested matters.',
    lessonAddendum: 'Bankers structure reverse termination fees and outside dates to reflect the longest expected approval path, not the HSR path. A deal with both HSR and FCC approval has its closing certainty determined by FCC, not HSR — and the financing must be long-dated enough to bridge that timeline.',
  },
  4351338: {
    newCorrect: 'Traditional convertibles are bonds with an investor option to convert into stock; mandatory convertibles automatically convert into stock at maturity at a formula price. Mandatories are treated as equity by rating agencies — the issuer use case for credit-pressured raises.',
    lessonAddendum: 'The cost of mandatories is a higher coupon (3-6%) reflecting the forced-conversion economics. Finance-sector issuers (banks, insurance) use mandatories during credit stress because the equity treatment supports the capital ratio without immediately diluting the common via a follow-on.',
  },
  4351414: {
    newCorrect: 'Stop editing immediately, copy the overwritten file to a "recovered_v05_corrupted" file, restore v06 from archive as the new working baseline, and reconcile any edits between v06 and the overwritten state.',
    lessonAddendum: 'The priority is preserving evidence before continuing edits. Once you keep editing, you destroy the trail that lets the team understand what was lost. The transparency (telling the team in writing) protects the analyst — concealment surfaces later when someone notices the gap.',
  },
  4351340: {
    newCorrect: 'League-table credit splits deal size equally among joint bookrunners (sometimes with active-bookrunner weighting); economics are split by negotiated percentages on the cover (e.g. 40/40/20 for three bookrunners). Banks pitch for both, and they can diverge.',
    lessonAddendum: 'Co-managers receive small pool allocations relative to bookrunners. League-table credit drives mandate-winning reputation; fee economics drive actual revenue. A bank can take a small economic split for league-table credit on a flagship deal, or vice versa — the negotiation is separate from the deal size.',
  },
  4351527: {
    newCorrect: 'Strategic A\'s no-financing-condition structure is materially stronger than Sponsor C\'s 2% reverse termination fee — specific performance with full obligation to close is an order of magnitude better than a $15M walk option. Certainty premium should value above the $10M headline gap.',
    lessonAddendum: 'A reverse termination fee is a buyer option premium — they can pay the fee and walk for any reason inside the financing-out. Specific performance compels closing through court order, subject only to regulatory failure. The two are not on the same axis of deal certainty.',
  },
  4351238: {
    newCorrect: 'Treat operating lease liabilities as debt-like in the EV bridge — add to enterprise value alongside financial debt — and verify EBITDA has been treated consistently (under ASC 842, rent on operating leases hits operating expense).',
    lessonAddendum: 'Pre-ASC 842, operating leases were off-balance-sheet and the financing component was buried in rent expense. Post-842, leases are on the BS as ROU assets and lease liabilities, but EBITDA conventions vary — some practitioners back out the financing component, others do not. Consistency between numerator and denominator is the audit.',
  },
  4351329: {
    newCorrect: 'Inside the collar, share count adjusts to preserve dollar value (more shares if buyer stock falls, fewer if it rises). Outside an outer band (often 30-40% below original), the target typically has a walk-away right because dilution becomes punitive to buyer shareholders.',
    lessonAddendum: 'The walk-away right is symmetric in principle but rarely exercised on the upside — a target receiving a windfall does not walk. The downside walk-away is the negotiated protection: a target locked into a deal where buyer stock has fallen 40% is receiving compromised consideration and gains the right to terminate.',
  },
  4351546: {
    newCorrect: 'Documented lessons file: which buyer names converted to IOIs and why; which CIM sections produced the most buyer questions; which QofE adjustments held; which DA terms got retraded; family rollover and reverse fee learnings — with one named principal who owns the file going forward.',
    lessonAddendum: 'Lessons compound across deals only if the file is named, owned, and updated. A summary memo for the partner credit file is not a post-mortem; the post-mortem captures specific buyer behavior, specific QofE outcomes, and specific negotiation moves so the next sell-side\'s analyst can avoid the same surprises.',
  },
  4351512: {
    newCorrect: 'Evaluate each IOI on five dimensions: stated price and structure, named financing source (committed vs to-be-arranged), explicit diligence requirements and timeline, key conditions, and language quality (a sponsor articulating a thesis reads more durable than a generic letter).',
    lessonAddendum: 'Ranking on headline price alone advances bidders who may not close. A sponsor with a generic letter at $720M is less reliable than one with a thesis-articulated letter at $700M. The language quality is the cheapest signal of how serious the underwriting is.',
  },
  4351043: {
    newCorrect: 'Track each round of comments with a log (reviewer, page, issue, resolution), resolve each comment in the next turn, escalate conflicts between reviewers explicitly, and confirm in writing when a round is closed.',
    lessonAddendum: 'The discipline ensures no comment is silently dropped and no reviewer is surprised by the next draft. A short close-of-round email — "round 3 comments addressed; next draft attached; please flag any remaining items by 8am tomorrow" — closes the loop and resets the clock.',
  },
  4351510: {
    newCorrect: 'Business overview (who Northwind serves, why it wins), then commercial momentum (customer wins, share gains, bolt-on integration), then financial detail and the working-capital plan, then growth roadmap, closing with leadership transition and family rollover as continuity evidence.',
    lessonAddendum: 'The closing on continuity matters because the founder retirement is the change-of-control trigger. Leading with financials reads as defensive; leading with growth reads as overreach. The overview-then-momentum sequence lets the business stand on its own before the numbers are scrutinized.',
  },
  4351010: {
    newCorrect: 'Translate each to a risk-adjusted certain-equivalent: discount the financing-contingent bid by failed-financing probability and cost, discount the rollover/earnout bid by payout probability and time value, compare against the unconditional bid.',
    lessonAddendum: 'A headline-price ranking ($650M > $620M > $590M) ignores the structural differences. The $650M bid with $50M rollover and FY+2 earnout might clear $580M of certain cash; the $620M financing-conditional bid might clear $590M after probability-weighting the financing failure. The certain-equivalent ranking is what the seller actually receives.',
  },
  4351228: {
    newCorrect: 'EV/EBITDA is capital-structure-neutral — it values the operating business independent of financing, so two companies with different leverage produce comparable multiples. P/E is sensitive to financial structure and tax rate, which obscures the operating comparison.',
    lessonAddendum: 'For M&A specifically, the buyer is acquiring the operating business and refinancing the capital structure. Comparing operating businesses requires a multiple that strips the financing effect, which is exactly what EV/EBITDA does. P/E remains useful for public-equity valuation where the financing structure persists.',
  },
  4351314: {
    newCorrect: 'LOI replaces the indicative range with a single point price, names the form of consideration, specifies financing assumption (committed vs best-efforts), defines exclusivity, lists key conditions (regulatory, financing, MAC), and proposes a timeline to signing.',
    lessonAddendum: 'The IOI was a screen; the LOI is a real proposal. By the LOI stage, the seller should have done enough diligence on the buyer to credit the financing claim. Any IOI conditions left unresolved at LOI become red flags — they signal a buyer not ready to commit.',
  },
  4351416: {
    newCorrect: 'Identify the genuine live version (most recent send-up email is the canonical anchor), rename it with date+version+initials, archive all the others to a clearly-labeled archive folder, and circulate the new file name to the team.',
    lessonAddendum: 'The team got here by never using a date+version naming convention. The recovery is mechanical, but the lasting fix is a naming standard the group enforces — Model_2025-03-19_v07_CR.xlsx — and a single canonical folder. Files outside that folder are by definition stale.',
  },
  4351525: {
    newCorrect: 'Acknowledge the $8M synergy in the rationale but note strategics typically share 30-50% of synergies; the $70M premium over financial floor is consistent with ~50% sharing — the strategic may have small additional room if their IC accepts a tighter share.',
    lessonAddendum: 'Pushing for the full $8M synergy ($68M of NPV at 8.5x) reads as naive — no strategic buyer underwrites a deal where the seller captures the entire synergy. The negotiation is on the share, not on whether synergies exist. Knowing the strategic\'s IC threshold (typical share range) is the lever for pushing without breaking the deal.',
  },
  4351528: {
    newCorrect: 'Present the analysis in actionable form: name the cleared-price ranking, certainty ranking, cultural-continuity considerations, and family-alignment considerations — then recommend the strategic if certainty is the priority, the sponsor if cleared price is, and identify the lever (push the sponsor\'s reverse fee or specific performance) that would resolve the gap.',
    lessonAddendum: 'The recommendation is not "pick A or B" — it is the framework that lets the split board decide. By naming the lever that would close the gap (sponsor improvement on certainty), the banker gives the board an actionable next step rather than an either/or vote.',
  },
  4351517: {
    newCorrect: 'Frame as a "strategic review" customer reference (the CEO can credibly say Northwind is evaluating partnership opportunities), curate 3–4 willing customers, run them through the CEO before the call, limit each bidder to the same call list.',
    lessonAddendum: 'Equitable disclosure across bidders is what keeps the process clean — if one bidder gets a reference call the others did not get, the seller has tilted the playing field and exposed itself to later challenge. The "strategic review" framing is credible because Northwind genuinely is evaluating options, and it does not force the CEO to lie to long-standing customers.',
  },
  4351309: {
    newCorrect: 'Run a mixed process — 8-12 high-fit strategics and 10-15 sponsors with sector experience — because the strategic-vs-financial tension is itself the lever that pushes pricing, and a mixed process preserves optionality on deal structure (rollover, partnership).',
    lessonAddendum: 'A strategics-only process gives up sponsor optionality on family rollover and minority preservation. A sponsors-only process gives up the synergy-driven pricing that only strategics can defensibly model. The tension between the two buyer classes is what compresses the bid spread upward — both segments matter.',
  },
  4351313: {
    newCorrect: 'No-shop bars active solicitation; exclusivity bars discussions with other parties for a fixed period; lookback gives the seller a window to consider an unsolicited superior offer. Exclusivity duration is typically the most negotiable because the cost (lost competitive tension) is clearest.',
    lessonAddendum: 'A 30-day exclusivity period is standard; the negotiation is whether it extends automatically if the buyer makes progress, what counts as a "superior" unsolicited offer, and the seller\'s break-fee exposure if it accepts one. Sellers should price exclusivity carefully because surrendering price discovery for a month has measurable cost.',
  },
  4351237: {
    newCorrect: 'Add the preferred stock value (typically liquidation preference plus accrued dividends, or fair value if it trades) to enterprise value — preferred is a senior claim that sits ahead of common equity and behind debt.',
    lessonAddendum: 'A buyer of the enterprise has to settle the preferred claim. If the preferred is convertible and in the money, treat it as if-converted and add the common-equivalent shares instead of the liquidation value. If the preferred is redeemable, use the redemption amount.',
  },
  4351515: {
    newCorrect: 'Specify final bid deadline (3 weeks from process letter), required deliverables (markup of draft definitive agreement, fully committed financing for sponsors, board approval for strategics, equity commitment letter, disclosure schedules), and explicit signal that conditionality is now the differentiator.',
    lessonAddendum: 'By the final-round letter, price has narrowed and the differentiation is on certainty: committed financing, no MAC outs the seller cannot accept, regulatory-risk allocation. The letter\'s job is to force bidders to put their conditionality on paper rather than leave it implicit for later negotiation.',
  },
  4351306: {
    newCorrect: 'Present the base case at a defensible CAGR close to historical with explicit drivers, then show the upside case (25%) separately with the specific new-product and geographic-expansion assumptions called out — let the buyer underwrite the upside themselves.',
    lessonAddendum: 'Embedding aggressive growth in the base case invites the buyer to discount the entire CIM. Showing the base + upside lets the buyer credit some of the upside without forcing the seller to defend an indefensible base. The footnoted assumptions on the upside case give the buyer something to interrogate rather than to dismiss.',
  },
  4351024: {
    newCorrect: 'Different league-table providers apply different credit rules: some give all advisors full credit, others split pro-rata or by role. Claiming full credit when only one provider does so, or when the role was junior co-advisor, is the kind of misrepresentation that gets pitch decks audited.',
    lessonAddendum: 'Sophisticated clients now ask which provider\'s methodology supports the claim. Citing the specific provider (Refinitiv vs Dealogic vs Bloomberg) and showing the underlying credit allocation is what makes a league-table page credible. A footnote of "credit per [provider] full-credit methodology" pre-empts the audit question.',
  },
  4351336: {
    newCorrect: 'Follow-on offerings during lock-up require waivers from the underwriters, which are case-by-case. Clean execution waits for lock-up expiry, then executes the follow-on with a brief filing-to-pricing window.',
    lessonAddendum: 'Pre-IPO holders selling without lock-up release violates the IPO underwriting agreement. Underwriters protect the lock-up because their reputation depends on orderly secondary trading post-IPO; a lock-up break shortly after IPO damages the bank\'s ability to win the next IPO mandate.',
  },
  4351519: {
    newCorrect: 'Quiet sponsors usually signal internal IC reservations, financing market changes, or competing capital allocation. The right move is a direct call from the MD to the sponsor partner to surface the issue without applying pressure — the seller needs to know whether to plan around a drop-out.',
    lessonAddendum: 'Applying pressure (a hard deliverable deadline) often accelerates the drop-out rather than re-engaging the sponsor. The MD-to-partner call is direct, low-stakes, and gives the sponsor permission to surface whatever the concern is — which is information the seller needs even if the sponsor ultimately walks.',
  },
  4351219: {
    newCorrect: 'Public-target precedents typically print higher because the announced price reflects an explicit premium over an observable unaffected trading price, full diligence access, and competitive process dynamics; private-target precedents reflect more bilateral negotiation and asymmetry.',
    lessonAddendum: 'When mixing the two in a single precedent set, separate them visually and consider showing the public-target multiple-adjusted-for-control-premium against the raw private-target multiple. The spread between them is itself a useful signal of process dynamics in the sector.',
  },
  4351023: {
    newCorrect: 'Aggregate announced or closed deal value (or deal count, depending on table) credited to the advisor over a defined period and within a defined deal-size band — credit allocated per the data provider\'s rules.',
    lessonAddendum: 'League tables do not measure revenue, client satisfaction, or success rate. The "#3 in US mid-market M&A" claim is meaningful only with the provider, the time window, the geography, and the size-band all specified. A footnote tying the ranking to the provider methodology is the audit-proof version.',
  },
  4351536: {
    newCorrect: 'Carve out: general economic conditions, industry-wide conditions, financial markets, changes in law or regulation, acts of war or terrorism, weather, and pandemics — with disproportionate-impact language (MAE only if the seller is impacted disproportionately) for the industry and economic carve-outs.',
    lessonAddendum: 'Disproportionate-impact language is the standard seller compromise: the buyer cannot walk just because the economy turned, but if the seller is hit harder than comparable companies by that turn, the MAE is preserved. Without disproportionate-impact, the carve-outs swallow the MAE entirely.',
  },
  4351328: {
    newCorrect: 'Fixed exchange ratio puts buyer-price risk on the target between sign and close; floating exchange ratio puts that risk on the buyer; the typical compromise is a fixed ratio with a collar (ceiling and floor on buyer price) that re-allocates risk only in extreme moves.',
    lessonAddendum: 'A 20% collar on both sides is common. Inside the collar, the fixed ratio holds and both parties share the price risk symmetrically. Outside the outer band (often 30-40% below original), the collar typically gives the target a walk-away right because the dilution to receive fixed value becomes punitive to buyer shareholders.',
  },
  4351433: {
    newCorrect: 'Bottom decile is typically a formal performance-improvement signal — explicit conversation with the staffer or group head, named development areas, and a 60-90 day window. Recoverable in the first year but not the second, and recovery requires staffer help to get on a deal where the analyst can visibly improve.',
    lessonAddendum: 'The recovery path is not "work harder on the same staffings" — those staffings already produced the bottom-decile rating. The staffer needs to put the analyst on a deal with a different team or a different problem set, so the improvement is visible and attributable. Trying harder without changing the visible work is the path that does not recover.',
  },
  4351134: {
    newCorrect: 'Goodwill represents the premium paid over identifiable fair-value net assets — typically synergies, control, brand value not separately identifiable, assembled workforce, and sometimes over-payment. It sits on the BS as a non-amortizing asset (public companies) and is tested annually for impairment.',
    lessonAddendum: 'Goodwill is not amortized for public companies; it is tested for impairment when triggering events occur, with an annual minimum. The impairment test is the moment the "over-payment" portion of goodwill finally gets recognized on the IS as a non-cash charge.',
  },
  4351138: {
    newCorrect: 'IS: $20M service cost as operating expense; the rest of net periodic pension cost (interest, expected return, prior service amortization) flows through non-operating income under ASC 715. CFS: $30M cash contribution is a CFO outflow; the gap between expense and funding is captured by changes in the pension liability on the BS.',
    lessonAddendum: 'Pre-ASC 715, all pension cost components were operating. Post-715, the non-service-cost components moved below operating income, which makes operating margins more comparable across pension-heavy and non-pension companies. The cash contribution is independent of the expense recognition — they are reconciled only through the BS pension liability.',
  },
  4351139: {
    newCorrect: 'IS: no impact (AFS unrealized gains bypass net income). OCI: $5M flows through other comprehensive income, building AOCI on equity. CFS: no impact (no cash moved).',
    lessonAddendum: 'AFS treatment differs from trading-security treatment, which marks through earnings. The OCI bypass is what lets banks hold long-duration AFS portfolios without earnings volatility — but the AOCI line on the BS still moves, and AOCI losses on AFS securities have been a flashpoint in regional bank stress (e.g., March 2023).',
  },
}

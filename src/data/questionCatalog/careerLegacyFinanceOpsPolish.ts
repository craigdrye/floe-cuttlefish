// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the career agent-generated legacy finance ops top-off pack
// (3 tracks × ~20-32 questions: AML Compliance, Series 86, Customs Broker).
//
// CAREER_LEGACY_FIN_OPS_SUB_TOPICS maps each question id to a lesson-shaped
// cluster label, grouped by chapter within each track. Labels are
// track-scoped (no overlap) so the same id never appears in two clusters.
//
// CAREER_LEGACY_FIN_OPS_MENTOR_HINTS overrides the generic career-skills
// scaffold hint with a one-line nudge in the voice of a senior finance ops
// practitioner — AML investigations lead, equity research supervisor, or
// licensed customs broker — that names the reasoning move without giving
// the answer away.
//
// CAREER_LEGACY_FIN_OPS_CORRECT_SHORTENED trims `correct` strings flagged by
// the length-heuristic audit (correct ≥1.8x longer than longest wrong AND
// ≥20 chars longer). Trimmed explanatory clauses are reattached via
// `lessonAddendum` so no compliance nuance is lost.

export const CAREER_LEGACY_FIN_OPS_SUB_TOPICS: Record<number, string> = {
  // ============================================================
  // AML COMPLIANCE — US Bank Secrecy Act / FinCEN
  // ============================================================

  // ---------- Customer Due Diligence and KYC ----------
  4260100: 'AML: KYC Address & Identity Verification',
  4260101: 'AML: Beneficial Ownership Look-Through',
  4260102: 'AML: Dynamic Risk Rating',
  4260107: 'AML: Source of Funds and EDD',
  4260109: 'AML: Source of Funds and EDD',
  4260111: 'AML: KYC Address & Identity Verification',

  // ---------- Transaction Monitoring ----------
  4260103: 'AML: Structuring and Pattern Alerts',
  4260115: 'AML: Rule Tuning and Validation',
  4260118: 'AML: Data Quality in Monitoring',

  // ---------- Sanctions, PEPs, and Screening ----------
  4260106: 'AML: Sanctions Match Handling',
  4260113: 'AML: Sanctions Match Handling',

  // ---------- Investigations and Case Building ----------
  4260105: 'AML: Alert Disposition Quality',
  4260110: 'AML: Adverse Media and Periodic Review',

  // ---------- Suspicious Activity Reporting and Documentation ----------
  4260104: 'AML: SAR Confidentiality and Tipping Off',
  4260114: 'AML: SAR Threshold and Standard',

  // ---------- AML Program Governance ----------
  4260108: 'AML: Audit Findings and Remediation',
  4260116: 'AML: Independence Under Relationship Pressure',
  4260117: 'AML: Exit, Restrict, or Continue Decisions',
  4260119: 'AML: Analyst Training and Tradecraft',

  // ---------- Advanced Typologies and Emerging Risk ----------
  4260112: 'AML: Correspondent and Nested Banking Risk',

  // ============================================================
  // SERIES 86 — Equity Research Analyst Credential
  // ============================================================

  // ---------- Forecasting and Earnings Drivers ----------
  4260200: 'S86: EPS, Share Count, and Dilution',
  4260201: 'S86: Revenue Driver Decomposition',
  4260208: 'S86: Normalizing One-Time Items',
  4260211: 'S86: Forecast Horizon Discipline',
  4260213: 'S86: EPS, Share Count, and Dilution',

  // ---------- Ratios, Margins, and Quality of Earnings ----------
  4260202: 'S86: Margin Assumption Defensibility',
  4260205: 'S86: Working Capital and Cash Quality',
  4260206: 'S86: Adjusted EBITDA Skepticism',
  4260212: 'S86: Inventory and Demand Signals',
  4260215: 'S86: Beat Quality and Earnings Mix',

  // ---------- Financial Statements and Accounting Linkages ----------
  4260207: 'S86: Three-Statement Integration',

  // ---------- Valuation Methods ----------
  4260203: 'S86: Relative Valuation and Peer Logic',
  4260204: 'S86: DCF Terminal Value Discipline',
  4260209: 'S86: Sensitivity and Driver Fragility',
  4260214: 'S86: Sum-of-the-Parts and Segments',
  4260216: 'S86: Cost of Capital and Risk Updates',
  4260217: 'S86: Comparable Selection and Adjustments',
  4260218: 'S86: EBITDA vs Free Cash Flow',

  // ---------- Research Logic and Investment Conclusions ----------
  4260210: 'S86: Rating, Thesis, and Disclosure Alignment',

  // ---------- Exam Practice, Error Review, and Internal Floe Resources ----------
  4260219: 'S86: Supervisory Review and Distribution',

  // ============================================================
  // CUSTOMS BROKER — US CBP / HTSUS
  // ============================================================

  // ---------- Classification With the HTSUS ----------
  4260300: 'CB: Classifying the Article as Imported',
  4260301: 'CB: GRIs, Section and Chapter Notes',
  4260310: 'CB: Binding Rulings for Uncertain Goods',
  4260325: 'CB: Ruling Maintenance and Product Change',

  // ---------- Country of Origin, Marking, and Trade Programs ----------
  4260302: 'CB: Substantial Transformation and Origin',
  4260314: 'CB: Marking Compliance for Retail',
  4260324: 'CB: Preferential Duty Claims and Proof',

  // ---------- Valuation ----------
  4260303: 'CB: Transaction Value Conditions',
  4260304: 'CB: Assists and Free Tooling',
  4260311: 'CB: Related-Party Pricing',
  4260312: 'CB: First-Sale Documentation',
  4260313: 'CB: Incoterms and Dutiable Charges',

  // ---------- Entry, Release, and Entry Summary ----------
  4260305: 'CB: Entry Document Sufficiency',
  4260309: 'CB: Partner Government Agencies',
  4260315: 'CB: Sample, Temporary, and Intended Use',
  4260326: 'CB: Pre-Filing Data Accuracy',

  // ---------- Recordkeeping, Corrections, and Compliance ----------
  4260306: 'CB: Recordkeeping and Retention',
  4260307: 'CB: Reasonable Care and Broker Judgment',
  4260308: 'CB: Advisory Duty and Client Disclosure',
  4260317: 'CB: Protests and Post-Liquidation Remedy',
  4260318: 'CB: Post Summary Correction',
  4260319: 'CB: Power of Attorney',
  4260320: 'CB: Client Confidentiality',
  4260327: 'CB: Supervision of Trainee Filings',
  4260328: 'CB: False Description Instructions',
  4260329: 'CB: Prior Disclosure',
  4260330: 'CB: Redelivery, Bonds, and Liquidated Damages',
  4260331: 'CB: Exam Strategy and Reasonable Care',

  // ---------- Duties, Fees, AD/CVD, and Special Situations ----------
  4260316: 'CB: AD/CVD Scope Screening',
  4260321: 'CB: Quota and Timing',
  4260322: 'CB: Drawback Recordkeeping',
  4260323: 'CB: Foreign Trade Zones',
}

export const CAREER_LEGACY_FIN_OPS_MENTOR_HINTS: Record<number, string> = {
  // ---------- AML: Customer Due Diligence and KYC ----------
  4260100: 'Treat a mailbox-as-residence as a discrepancy to resolve, not a quirk to accept. The customer narrative is not the verification.',
  4260101: 'CDD looks through legal wrappers to a natural person. If the chart stops at entities, you have not finished the rule.',
  4260102: 'Risk rating is dynamic. New jurisdictions and a changed business purpose are the exact triggers reassessment was built for.',
  4260107: 'Cash-heavy growth into ATM servicing is a textbook EDD prompt — source, location controls, and expected activity before you let the risk through.',
  4260109: 'A social media post is not source-of-funds evidence. Scale documentation to the size and unfamiliarity of the inflow.',
  4260111: 'A DOB mismatch is a CIP discrepancy. Resolve before reliance — assistant typos are still your problem to document.',

  // ---------- AML: Transaction Monitoring ----------
  4260103: 'Eighteen wires just under threshold over two days is the structuring fact pattern. Read the pattern, not the individual wire.',
  4260115: 'A rule that goes quiet through a high-risk business launch is more likely broken than vindicated. Validate against the current risk profile.',
  4260118: 'Monitoring inherits its quality from the data feeding it. Blank occupation codes break expected-activity scenarios silently.',

  // ---------- AML: Sanctions, PEPs, and Screening ----------
  4260106: 'OFAC obligations attach before settlement. The customer being impatient is not a release reason — hold and resolve.',
  4260113: 'A false positive still gets a documented disposition. The screening program is the audit trail, not just the hit list.',

  // ---------- AML: Investigations and Case Building ----------
  4260105: '"Known to bank" is a label, not analysis. A QC reviewer needs to see facts reviewed, rationale, and the escalation call.',
  4260110: 'Adverse media is a CDD input, not a transaction signal. Reassess risk on the news even when monitoring is silent.',

  // ---------- AML: Suspicious Activity Reporting and Documentation ----------
  4260104: 'SAR confidentiality is non-negotiable. A relationship manager helping the customer "explain better" is the textbook tipping-off path.',
  4260114: 'The SAR threshold is reasonable suspicion, not proven crime. Inconsistent explanations plus unsupported purpose can clear that bar.',

  // ---------- AML: AML Program Governance ----------
  4260108: 'Audit findings close on accountable, prioritized remediation with validation — not on a training slide.',
  4260116: 'AML independence exists precisely for high-value relationships. "Keep it informal" is the request the formal process is designed to refuse.',
  4260117: 'Unanswered EDD plus inconsistent activity plus prior escalations means restriction, exit, or documented continued monitoring — pick one explicitly.',
  4260119: 'Checklist recall is not red-flag application. Coach analysts on messy documents with feedback on the disposition, not on memorization.',

  // ---------- AML: Advanced Typologies and Emerging Risk ----------
  4260112: 'Undisclosed nested relationships change the actual risk profile of the correspondent. Update due diligence to where the payment chain really sits.',

  // ---------- Series 86: Forecasting and Earnings Drivers ----------
  4260200: 'EPS is earnings divided by shares. An acquisition financed in stock moves both terms — model both.',
  4260201: 'Decompose revenue into volume, price, and mix before believing the headline growth rate. Flat volume plus weakening pricing rarely supports 12%.',
  4260208: 'A one-time settlement rate is not a forecast rate. Use a normalized statutory-plus-state rate unless evidence says otherwise.',
  4260211: 'Forecast horizon needs operating support. Three more years of acceleration without capacity, share, or price is decoration.',
  4260213: 'Debt-funded buybacks move the share count, the interest line, and the tax shield. EPS accretion is a calculation, not a press release.',

  // ---------- Series 86: Ratios, Margins, and Quality of Earnings ----------
  4260202: 'Flat gross margin through cost inflation needs an economic story — pricing power or productivity. Without one, it is a wish, not a forecast.',
  4260205: 'Receivables growing faster than revenue with weakening FCF is the classic working-capital tell. Look at DSO and collections before the celebration.',
  4260206: 'A restructuring add-back that appears every year is operating cost wearing a one-time costume. Test recurring-in-substance, not the label.',
  4260212: 'Inventory ahead of sales while management claims strong demand is a balance-sheet smoke signal. Check sell-through and obsolescence reserves.',
  4260215: 'Quality of beat matters more than the beat itself. A timing-driven EPS beat with a revenue miss and weaker guidance is not bullish.',

  // ---------- Series 86: Financial Statements and Accounting Linkages ----------
  4260207: 'Capex echoes in PP&E and depreciation. An integrated model carries the link automatically — a flat IS-only model does not.',

  // ---------- Series 86: Valuation Methods ----------
  4260203: 'A one-day price drop does not make a stock cheap. Premium or discount has to be defended against growth, risk, and profitability vs the comp set.',
  4260204: 'Terminal value drives the DCF. A terminal growth rate above long-run GDP needs an economic argument, not a recommendation-rescue setting.',
  4260209: 'A 50 bps margin sensitivity moving the rating is the kind of fragility the partnership needs to see. Publish the table, not the point estimate.',
  4260214: 'Apply one peer multiple to two businesses and you blur both. SOTP is the discipline when growth and margin profiles diverge.',
  4260216: 'Selling a cyclical division and deleveraging changes beta and capital structure. The discount rate is what carries those changes.',
  4260217: 'Comparable selection is the analyst\'s judgment, not a search filter. Currency, accounting, and business-model differences need adjustment or interpretation.',
  4260218: 'EBITDA hides the capex line. For capital-intensive businesses, FCF is the test the multiple cannot duck.',

  // ---------- Series 86: Research Logic and Investment Conclusions ----------
  4260210: 'Rating, thesis, valuation, and risks have to point the same direction. Outperform on a memo that says risks are rising is a supervisory finding.',

  // ---------- Series 86: Exam Practice and Distribution ----------
  4260219: 'Twelve minutes to the open is not an exception. Supervisory review and disclosure timing are the rule that holds in every clock.',

  // ---------- Customs Broker: Classification With the HTSUS ----------
  4260300: 'Classify the article as imported, motor and all. A marketing name is a description, not a classification.',
  4260301: 'Notes come before headings, and headings come before duty rate. Walk the GRIs in order — the lowest duty rate is the wrong starting point.',
  4260310: 'When the article is novel and prior guidance is thin, prospective certainty comes from a binding ruling — submitted with complete facts.',
  4260325: 'A ruling binds to its specific product facts. Added wireless and changed materials means re-evaluate, not auto-apply.',

  // ---------- Customs Broker: Country of Origin and Trade Programs ----------
  4260302: 'Country of origin turns on substantial transformation and the manufacturing facts, not on where the invoice or the vessel sat.',
  4260314: '"Designed in USA" is a marketing claim, not country-of-origin marking. The ultimate purchaser needs the country of manufacture on the article.',
  4260324: '"Should qualify" is a hope. A preference claim needs origin certification and production support contemporaneous with the entry.',

  // ---------- Customs Broker: Valuation ----------
  4260303: 'A discount tied to post-import services is a condition of sale. Test whether transaction value still applies before deducting.',
  4260304: 'Free molds supplied to the manufacturer are an assist. Add the value to transaction value — the absence of an invoice is not the absence of value.',
  4260311: 'Related-party pricing needs the influence-on-price analysis. Family is not a customs valuation exception.',
  4260312: 'First-sale is conditional: bona fide sale for export to the US, documented. The earliest invoice is not a discount button.',
  4260313: 'Incoterms decide what is in the price. DDP totals usually include freight, insurance, and duties that valuation rules treat separately.',

  // ---------- Customs Broker: Entry, Release, and Entry Summary ----------
  4260305: 'A truck at the border is not a reason to guess. Reasonable care requires sufficient information — guess and you own the consequences.',
  4260309: 'Food-contact articles bring a partner government agency to the entry. The duty rate is the smaller half of the question.',
  4260315: 'The word "samples" does not erase commercial intent. Entry treatment turns on intended use, value, and post-show plans.',
  4260326: 'A 10x quantity typo cascades into value and duty. Catch it pre-transmission — that is exactly what pre-filing review is for.',

  // ---------- Customs Broker: Recordkeeping and Compliance ----------
  4260306: 'Client request does not override the retention statute. Deletion to prevent "misunderstanding" is the headline a regulator wants to write.',
  4260307: 'Reasonable care needs support to file the lower-rate code. No data, no filing — escalate or decline.',
  4260308: 'A potentially wrong origin running for months is a clear-explanation moment. Document the advice, request facts, frame the correction options.',
  4260317: 'Post-liquidation, the remedy is a protest within the deadline — supported, not bare. The clock is the constraint, not the door being closed.',
  4260318: 'Pre-liquidation discovery of an omitted assist is what PSC exists for. File the correction, do not paper the file and move on.',
  4260319: 'No valid POA, no customs business. Email signatures are not authority — and an affiliate POA does not extend across entities.',
  4260320: 'Another client\'s HTS code is their data. General guidance is fine; their codes are not.',
  4260327: 'A trainee on a complex chemical with PGA reach is exactly when supervisory control needs to show on the file — not after CBP asks.',
  4260328: '"Decorative trim" on aluminum extrusions to dodge duties is a false description. Written client instructions do not launder the entry.',
  4260329: 'Past undeclared assists carry forward exposure. Prior disclosure is the structured path — with specificity and counsel, not a vague apology.',
  4260330: 'Repeated missed redelivery notices is a bond and liquidated-damages issue. Build a process for CBP notices before the next one lands.',
  4260331: 'On exam day, the answer that applies reasonable care almost always wins. Get the facts, apply the rule, document the call.',

  // ---------- Customs Broker: Duties, Fees, AD/CVD, and Special Situations ----------
  4260316: 'AD/CVD scope sits on top of the base HTS rate and can dwarf it. Screen scope before filing the routine-looking entry.',
  4260321: 'Quota availability is administered at entry, not held by warehouse cartons. A delayed entry can lose quota and admissibility.',
  4260322: 'Drawback matches import to export with records and deadlines. The job is documentation, not enthusiasm about refunds.',
  4260323: 'FTZ is deferral with inventory controls and status decisions. It is within customs jurisdiction, not outside it.',
}

// CAREER_LEGACY_FIN_OPS_CORRECT_SHORTENED — questions where the correct
// answer ran substantially longer than the longest distractor (≥1.8x ratio
// and ≥20 char gap). Each entry trims `correct` to a punchier line and
// pushes the trimmed compliance nuance into `lessonAddendum` so coverage
// holds.

export const CAREER_LEGACY_FIN_OPS_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {
  // ---------- AML Compliance ----------
  4260100: {
    newCorrect: 'Resolve the address discrepancy under risk-based KYC and document the true address — or escalate if it cannot be verified.',
    lessonAddendum: 'A mailbox-as-residence is a recognized AML red flag. The CIP and CDD rules require reasonable verification and discrepancy resolution before reliance — the customer\'s explanation does not satisfy the rule.',
  },
  4260101: {
    newCorrect: 'Obtain and verify beneficial ownership, including any control person when ownership is obscured by holding companies.',
    lessonAddendum: 'The CDD rule looks through legal wrappers to natural-person owners (≥25%) and a control person regardless of ownership. A chart that stops at entities has not satisfied the rule.',
  },
  4260103: {
    newCorrect: 'Review the below-threshold pattern as possible structuring and escalate based on full context.',
    lessonAddendum: 'Structuring is defined precisely by patterns of transactions designed to avoid reporting or internal review thresholds. A two-day cluster of just-below wires to unrelated recipients is a textbook pattern alert.',
  },
  4260104: {
    newCorrect: 'Block disclosure of SAR-related review details and route any contact through no-tipping-off procedures.',
    lessonAddendum: 'SAR confidentiality is statutory. Sharing detection logic with the subject — even via a well-meaning relationship manager — can constitute prohibited tipping off under 31 USC 5318(g)(2).',
  },
  4260107: {
    newCorrect: 'Run EDD on source of funds, locations, and controls before accepting the changed risk.',
    lessonAddendum: 'Cash-intensive private ATM servicing is a higher-risk activity that requires deeper due diligence into source, purpose, and expected behavior — and may require ongoing enhanced monitoring once accepted.',
  },
  4260111: {
    newCorrect: 'Resolve and document the discrepancy under CIP before relying on the identity information.',
    lessonAddendum: 'Customer identification procedures require reasonable verification and discrepancy resolution. An assistant\'s explanation does not substitute for matching the ID to the application.',
  },
  4260112: {
    newCorrect: 'Review the correspondent relationship for nested activity, refresh due diligence, and apply controls for the higher risk.',
    lessonAddendum: 'Undisclosed nested relationships change the actual risk profile of a correspondent. Section 312 of the USA PATRIOT Act and FFIEC guidance require enhanced due diligence on correspondent banking risk as the picture changes.',
  },
  4260114: {
    newCorrect: 'A SAR can be filed on reasonable suspicion after a facts review — no confession or conviction is required.',
    lessonAddendum: 'The SAR standard is "suspicious or has no apparent lawful purpose" — a much lower bar than criminal conviction. Inconsistent explanations and unsupported business purpose can meet it.',
  },
  4260117: {
    newCorrect: 'Whether to restrict, exit, or continue monitoring under documented risk-based procedures.',
    lessonAddendum: 'When EDD cannot support the relationship, the program must consider account restriction, relationship exit, or documented continued monitoring. The decision is governance-owned, not relationship-owned.',
  },

  // ---------- Series 86 ----------
  4260200: {
    newCorrect: 'Both the higher net income and the larger diluted share count — EPS divides earnings by shares.',
    lessonAddendum: 'A stock-financed acquisition moves the numerator (net income) and the denominator (diluted shares). Modeling only the income side overstates EPS accretion.',
  },
  4260201: {
    newCorrect: 'Break revenue into volume, price, mix, and market so growth is supportable.',
    lessonAddendum: 'Flat unit volumes plus weakening pricing rarely support 12% revenue growth. Driver decomposition is what separates a defensible forecast from a single magic number.',
  },
  4260205: {
    newCorrect: 'Whether collections, channel stuffing, or payment terms are weakening working capital and cash conversion.',
    lessonAddendum: 'Receivables growing faster than revenue with FCF weakening is a classic quality-of-earnings flag. Walk the balance sheet to DSO and the cash flow statement to operating cash conversion before believing the headline growth.',
  },
  4260207: {
    newCorrect: 'Depreciation expense and PP&E balances, because new capex affects future earnings and book assets.',
    lessonAddendum: 'An integrated three-statement model carries capex into PP&E and into depreciation over the asset life. Isolated capex without those links breaks the model\'s diagnostic value.',
  },
  4260212: {
    newCorrect: 'Possible slowing demand, obsolescence, channel stuffing, or a temporary build with a specific reason.',
    lessonAddendum: 'Inventory growth ahead of sales is a quality-of-earnings flag. The balance sheet often signals demand or margin trouble before management commentary does.',
  },
  4260213: {
    newCorrect: 'Lower share count, incremental interest expense, tax effects, and timing of diluted EPS.',
    lessonAddendum: 'Debt-funded buybacks move both numerator and denominator. EPS accretion depends on the after-tax yield gap between the cost of debt and the earnings yield being repurchased.',
  },
  4260215: {
    newCorrect: 'The quality and sustainability of the beat — revenue trends, expense timing, and forward guidance.',
    lessonAddendum: 'A timing-driven EPS beat with a revenue miss and lower guidance is a worse signal than a balanced miss. Research discipline asks whether the surprise improves future cash flows or just shifted costs in time.',
  },
  4260219: {
    newCorrect: 'Complete supervisory and compliance review before distributing the research communication.',
    lessonAddendum: 'FINRA Rules 2241 and 3110 require supervisory review and proper distribution channels for research communications. Time pressure does not change the obligation.',
  },

  // ---------- Customs Broker ----------
  4260300: {
    newCorrect: 'Obtain complete product details and classify the article as imported — including the motorized function.',
    lessonAddendum: 'Classification depends on the actual article and its essential characteristics under the General Rules of Interpretation, not on the marketing name on the invoice.',
  },
  4260302: {
    newCorrect: 'Apply origin rules — substantial transformation or special program rules — to the manufacturing facts.',
    lessonAddendum: 'Country of origin for goods assembled from components of multiple countries turns on substantial transformation analysis or the specific rules of any applicable trade program. Invoice paperwork and port of export do not determine origin.',
  },
  4260303: {
    newCorrect: 'Whether the conditional discount and related payments affect transaction value under the valuation rules.',
    lessonAddendum: 'A discount tied to a post-import obligation is a condition of sale that may disqualify transaction value or require additions. The invoice total is the starting point, not the answer.',
  },
  4260305: {
    newCorrect: 'Obtain sufficient entry information before filing under reasonable care, documenting any permitted corrections.',
    lessonAddendum: 'Reasonable care under 19 USC 1484 requires accurate entry information. Urgency at the border does not convert guesses into compliance — incomplete invoices warrant a hold for clarification.',
  },
  4260308: {
    newCorrect: 'Explain the issue, request facts, discuss corrections, and document the advice without guaranteeing outcomes.',
    lessonAddendum: 'Brokers carry an advisory duty to inform clients of compliance issues. The communication should be documented, practical, and free of penalty guarantees — clients need accurate risk information, not reassurance.',
  },
  4260311: {
    newCorrect: 'Whether the relationship influenced the price and whether transaction value is acceptable.',
    lessonAddendum: 'Related-party transactions require the circumstances-of-sale or test-values analysis under 19 USC 1401a(b). The starting question is whether the relationship affected the price.',
  },
  4260312: {
    newCorrect: 'That first-sale conditions are met — bona fide sale for export to the US, with proper documentation.',
    lessonAddendum: 'First-sale valuation under Nissho Iwai requires a bona fide sale, goods clearly destined for the US at the earlier sale, and arm\'s-length pricing. It is a documented election, not an automatic discount.',
  },
  4260313: {
    newCorrect: 'Whether freight, insurance, duties, or other charges are included and how the rules treat them.',
    lessonAddendum: 'DDP and similar terms bundle charges that are excluded from dutiable value under 19 USC 1401a if separately identified. Delivery terms decide the build-up.',
  },
  4260314: {
    newCorrect: 'Marking noncompliance — and required corrective action before release or sale.',
    lessonAddendum: 'Country-of-origin marking under 19 USC 1304 requires the article (or container, where permitted) to be marked with the country of manufacture in a manner the ultimate purchaser can read. "Designed in USA" is a marketing claim, not origin marking.',
  },
  4260315: {
    newCorrect: 'Proper entry treatment based on intended use, value, sale plans, and any sample or temporary import conditions.',
    lessonAddendum: 'Sample or temporary importation treatments are conditional. Resale plans after a trade show change the analysis — the label "samples" does not erase commercial intent.',
  },
  4260316: {
    newCorrect: 'Check the scope of any antidumping or countervailing duty order before filing.',
    lessonAddendum: 'AD/CVD duties are in addition to ordinary HTS duties and can exceed the base rate many times over. Scope rulings and the published orders are the authority — not supplier opinion.',
  },
  4260318: {
    newCorrect: 'File a post summary correction or other appropriate correction within the allowed timeframe.',
    lessonAddendum: 'A PSC under 19 CFR 174 lets the entry be corrected before liquidation. Internal-only fixes do not change CBP\'s record of the entry — the correction has to be filed to count.',
  },
  4260319: {
    newCorrect: 'Confirm valid authority via a proper power of attorney before transacting customs business.',
    lessonAddendum: 'A broker cannot transact customs business without a valid POA from the importer of record under 19 CFR 141.46. Email signatures and affiliate POAs do not extend across entities.',
  },
  4260321: {
    newCorrect: 'Quota availability, timing, documentation, and the risk delay creates for admissibility or duty.',
    lessonAddendum: 'Tariff-rate quotas open and fill at entry, not at warehouse arrival. Delay risks losing the lower duty tier or admissibility entirely.',
  },
  4260323: {
    newCorrect: 'FTZ procedures require admission, inventory controls, status decisions, and CBP-rule compliance.',
    lessonAddendum: 'Foreign trade zones under 19 CFR 146 are within US customs jurisdiction. Benefits include duty deferral, inverted tariff, and weekly entry — earned through inventory and status discipline, not erasure of obligations.',
  },
  4260325: {
    newCorrect: 'Compare the new product to the ruling and seek updated guidance if material differences affect classification.',
    lessonAddendum: 'CBP rulings bind to specific product facts under 19 CFR 177. Material changes such as added wireless functionality or different materials warrant a new ruling request rather than reliance on the old one.',
  },
  4260328: {
    newCorrect: 'Refuse the misleading description, explain the issue, and escalate or withdraw if the client persists.',
    lessonAddendum: 'Knowingly filing a false description violates 19 USC 1592 regardless of client instructions. Written bad instructions do not launder the entry — the broker\'s reasonable-care duty overrides them.',
  },
  4260329: {
    newCorrect: 'Whether prior disclosure under 19 USC 1592(c)(4) is appropriate, with full facts and counsel.',
    lessonAddendum: 'Prior disclosure can substantially reduce penalty exposure when made before CBP discovery, with full disclosure of the circumstances and tender of any owed duties. Vague or partial disclosure does not qualify.',
  },
  4260330: {
    newCorrect: 'Liquidated damages, bond consequences, and the need for a CBP-notice response process.',
    lessonAddendum: 'Missed redelivery notices under 19 CFR 141.113 trigger liquidated damages claims against the importer\'s bond. A documented response process is the standard mitigation.',
  },
}

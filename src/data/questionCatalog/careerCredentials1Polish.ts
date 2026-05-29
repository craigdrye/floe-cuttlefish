// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the consolidated Credentials bank (~392 questions across 10 credential
// tracks: AML, Series 86, CCEP, NERC, Patent Bar, CRCM, AIGP, API Inspectors,
// CDFM, Certified General Appraiser, Clinical Research).
//
// CAREER_CREDENTIALS1_SUB_TOPICS groups each chapter's questions into
// lesson-shaped clusters. Because several tracks share chapter names (e.g.
// "Investigations and Case Building" appears in AML and CCEP), cluster keys
// are prefixed with the track abbreviation.
//
// CAREER_CREDENTIALS1_MENTOR_HINTS overrides the generic scaffold hint with a
// one-line second-person nudge in the voice of a senior credentialed
// professional in the relevant domain (a senior AML investigator, a sell-side
// research director, a chief compliance officer, a NERC-certified system
// operator, a registered patent practitioner, a senior bank compliance
// manager, an AI governance lead, an API authorized inspector, a DoD comptroller,
// a senior commercial appraiser, a clinical research auditor).
//
// CAREER_CREDENTIALS1_CORRECT_SHORTENED trims `correct` strings flagged by the
// length-heuristic audit (correct >=1.8x longer than longest wrong AND >=20
// chars longer). Trimmed explanatory clauses are reattached via
// `lessonAddendum` so no information is lost.

export const CAREER_CREDENTIALS1_SUB_TOPICS: Record<string, number[]> = {
  // ============================================================
  // AML Compliance (CAMS-shaped)
  // ============================================================
  'AML: Customer Due Diligence and KYC': [
    4101200, 4101205, 4101208, 4101213, 4101220, 4101225, 4101228,
  ],
  'AML: Transaction Monitoring': [
    4101201, 4101202, 4101203, 4101206, 4101216,
  ],
  'AML: Investigations and Case Building': [
    4101204, 4101210, 4101215, 4101217, 4101229,
  ],
  'AML: SAR Filing and Tipping-Off Discipline': [
    4101207, 4101212, 4101218, 4101223, 4101226,
  ],
  'AML: Sanctions, PEPs, and Screening': [
    4101219, 4101222, 4101227,
  ],
  'AML: Advanced Typologies and Emerging Risk': [
    4101209, 4101211, 4101214, 4101221, 4101224,
  ],

  // ============================================================
  // Series 86 (Equity Research Analyst Qualification)
  // ============================================================
  'S86: Financial Statements and Linkages': [
    4101300, 4101302, 4101307, 4101311, 4101318,
  ],
  'S86: Ratios, Margins, and Earnings Quality': [
    4101303, 4101315, 4101319, 4101321, 4101322, 4107069,
  ],
  'S86: Valuation Methods and DCF Mechanics': [
    4101301, 4101304, 4101305, 4101308, 4101310, 4101312, 4101314, 4101323,
  ],
  'S86: Equity Valuation Toolkit': [
    4101400, 4101403, 4101406, 4101409, 4101415, 4106891, 4107060,
  ],
  'S86: Forecasting, Modeling, and Sensitivity': [
    4101306, 4101412, 4107061, 4107066,
  ],
  'S86: Research Logic and Variant Thesis': [
    4101313, 4101317, 4101324, 4101326, 4101327, 4106890, 4107068,
  ],
  'S86: Research Report Discipline': [
    4101401, 4101404, 4101407, 4101410, 4101413, 4101416, 4106886, 4107065,
  ],
  'S86: Analyst Ethics and MNPI Boundaries': [
    4101402, 4101405, 4101408, 4101411, 4101414, 4101417, 4106882, 4106898, 4107062, 4107064,
  ],
  'S86: Industry and Macro Context': [
    4101309, 4101325, 4107067,
  ],
  'S86: Supervision and Exam Practice': [
    4101316, 4101329, 4107070,
  ],

  // ============================================================
  // CCEP (Certified Compliance and Ethics Professional)
  // ============================================================
  'CCEP: Governance, Independence, and Architecture': [
    4101500, 4101516, 4106801,
  ],
  'CCEP: Reporting Channels and Speak-Up Culture': [
    4101501, 4101507,
  ],
  'CCEP: Risk Assessment and Control Prioritization': [
    4101506, 4101518, 4101520, 4106806,
  ],
  'CCEP: Policies, Training, and Code': [
    4101503, 4101511,
  ],
  'CCEP: Investigations and Case Management': [
    4101504, 4101508, 4106803,
  ],
  'CCEP: Monitoring, Auditing, and Effectiveness': [
    4101502, 4101509, 4101512, 4101527, 4101529, 4106816, 4106819,
  ],
  'CCEP: Discipline, Remediation, and Reporting': [
    4101505, 4101510, 4101522, 4101523, 4101528, 4106800, 4106812, 4106813,
  ],

  // ============================================================
  // NERC System Operator
  // ============================================================
  'NERC: Reliability Standards and Operating Limits': [
    4101600, 4101604, 4101618, 4106820,
  ],
  'NERC: Situational Awareness and Tools': [
    4101601, 4101605, 4101614, 4106825,
  ],
  'NERC: Communications and Shift Discipline': [
    4101602, 4101606, 4101611, 4101615, 4101620, 4106821, 4106829, 4106836,
  ],
  'NERC: Balancing, Frequency, and Interchange': [
    4101607, 4310000, 4310001, 4310002, 4310003, 4310004, 4310005,
  ],
  'NERC: Transmission Ops and Contingency Response': [
    4101610, 4101616, 4101624,
  ],
  'NERC: Emergency Operations and Load Shed': [
    4101613, 4101621, 4101626, 4106838, 4106839, 4310006, 4310007, 4310008, 4310009,
  ],
  'NERC: Restoration and Exam Readiness': [
    4101603, 4101623, 4101629, 4106832,
  ],

  // ============================================================
  // Patent Bar (USPTO Registration)
  // ============================================================
  'Patent: Prior Art and Novelty (§102)': [
    4101700, 4101709, 4101720, 4101721,
  ],
  'Patent: Claims and Specification Support (§112)': [
    4101701, 4101704, 4101706, 4101707, 4101716, 4101724, 4106900, 4106905, 4106916,
  ],
  'Patent: Obviousness Doctrine (§103)': [
    4101703, 4101722, 4101723, 4310100, 4310101, 4310102, 4310103, 4310104, 4310105, 4310106, 4310107,
  ],
  'Patent: Subject-Matter Eligibility (§101)': [
    4101718, 4101719, 4106910,
  ],
  'Patent: Prosecution Procedure and Office Actions': [
    4101702, 4101705, 4101708, 4101711, 4106906,
  ],
  'Patent: USPTO Ethics and Practitioner Duties': [
    4101725, 4101729, 4106904, 4106909,
  ],
  'Patent: MPEP Procedural Edge Cases': [
    4101728, 4106911,
  ],

  // ============================================================
  // CRCM (Certified Regulatory Compliance Manager)
  // ============================================================
  'CRCM: Program Foundations and Product Mapping': [
    4101800, 4101811, 4101813,
  ],
  'CRCM: Core Consumer Regulations': [
    4101818, 4101819, 4101820, 4101822, 4101829, 4106842,
  ],
  'CRCM: Fair Lending and CRA': [
    4101803, 4101825, 4101828, 4106840, 4106851,
  ],
  'CRCM: UDAAP and Customer Harm': [
    4101801, 4101804, 4101816, 4106844, 4106848, 4106859,
  ],
  'CRCM: Monitoring, Testing, and Issue Management': [
    4101802, 4101808, 4101809, 4101810, 4106847,
  ],
  'CRCM: Regulatory Change and Board Reporting': [
    4101805, 4101807,
  ],
  'CRCM: BSA/AML, Privacy, and Safeguards': [
    4101824, 4106855,
  ],

  // ============================================================
  // AIGP (IAPP AI Governance Professional)
  // ============================================================
  'AIGP: Governance Roles and Accountability': [
    4101900, 4101914,
  ],
  'AIGP: Inventory and Risk Triage': [
    4101901, 4101909, 4101915,
  ],
  'AIGP: Impact Assessments and Documentation': [
    4101902, 4101910, 4101913, 4101916, 4101919, 4101929, 4106863, 4106864, 4106874,
  ],
  'AIGP: Transparency, Notices, and Human Oversight': [
    4101903, 4101907, 4101911, 4106876,
  ],
  'AIGP: Vendor Controls and Monitoring': [
    4101904, 4101906, 4101908, 4101927,
  ],
  'AIGP: Generative AI Evaluation and Security': [
    4101905, 4101912, 4101922, 4101923, 4101924, 4101925, 4106873,
  ],
  'AIGP: NIST AI RMF': [
    4101918, 4120008, 4120009, 4120010, 4120011,
  ],
  'AIGP: EU AI Act Readiness': [
    4101920, 4101921, 4120000, 4120001, 4120002, 4120003, 4120004, 4120005, 4120006, 4120007,
  ],

  // ============================================================
  // API Authorized Inspectors (510 / 570 / 653)
  // ============================================================
  'API: Inspector Role and Code Navigation': [
    4102000, 4102005, 4102016,
  ],
  'API: Inspection Planning, Intervals, and Methods': [
    4102001, 4102002, 4102008, 4102010, 4102013, 4102014, 4102026, 4106922,
  ],
  'API 510: Pressure Vessel Inspection': [
    4102003, 4102011, 4102012, 4102022, 4102023, 4102024,
  ],
  'API 570: Piping Inspection': [
    4102015, 4102019,
  ],
  'API: Corrosion and Damage Mechanisms': [
    4102004, 4102018, 4106920, 4106925, 4106930,
  ],
  'API: Fitness-for-Service and Records': [
    4102007, 4102009, 4102017, 4102027, 4102028, 4106926,
  ],

  // ============================================================
  // CDFM (Certified Defense Financial Manager)
  // ============================================================
  'CDFM: Resource Environment and Budget Roles': [
    4102118, 4102119, 4102120, 4102121,
  ],
  'CDFM: Fiscal Law and Funds Availability': [
    4102100, 4102101, 4102102, 4102106, 4102109, 4102113, 4106940, 4106941, 4106943,
  ],
  'CDFM: PPBE and Program Execution': [
    4102103, 4102104, 4102108, 4102110, 4102115, 4102124, 4102125,
  ],
  'CDFM: Internal Controls and Stewardship': [
    4102105, 4102112, 4102114, 4102117, 4102123, 4102126,
  ],
  'CDFM: Accounting, Audit, and FIAR': [
    4102107, 4102127, 4102128, 4102129,
  ],

  // ============================================================
  // Certified General Appraiser
  // ============================================================
  'Appraisal: Assignment Setup and Standards': [
    4102203, 4102205, 4102224, 4102225, 4102229, 4106967, 4106972,
  ],
  'Appraisal: Property Rights and Market Analysis': [
    4102200, 4102215, 4102218, 4102228,
  ],
  'Appraisal: Sales Comparison Approach': [
    4102204, 4102206, 4102220, 4106962,
  ],
  'Appraisal: Income Approach': [
    4102201, 4102202, 4102208, 4102209, 4102210, 4102219, 4102221, 4102223, 4106976,
  ],
  'Appraisal: Cost Approach and Depreciation': [
    4102212, 4102213, 4102226, 4106964,
  ],
  'Appraisal: Reconciliation and Reporting': [
    4102207, 4106969,
  ],

  // ============================================================
  // Clinical Research (ACRP/SOCRA-shaped)
  // ============================================================
  'CR: Consent, Eligibility, and Visit Planning': [
    4102300, 4102301, 4102315, 4102318, 4102326, 4106980, 4106989,
  ],
  'CR: Source Documentation and Data Integrity': [
    4102302, 4102306, 4102308, 4102311, 4102312, 4102319, 4106985,
  ],
  'CR: Safety, Deviations, and Escalation': [
    4102303, 4102305, 4102309, 4102316, 4102324, 4102327,
  ],
  'CR: Trial Ecosystem and Site Roles': [
    4102304, 4102313, 4102320,
  ],
  'CR: Monitoring, Closeout, and Inspection Readiness': [
    4102307, 4102314, 4102317, 4102322, 4102325, 4102328, 4102329, 4106999,
  ],
}

export const CAREER_CREDENTIALS1_MENTOR_HINTS: Record<number, string> = {
  // ============================================================
  // AML Compliance — voice: senior AML investigator / MLRO
  // ============================================================
  4101200: 'Nominee manager, foreign UBO, oversized wires. Industry label does not override contradictory facts — escalate to EDD.',
  4101201: 'Profile-vs-activity mismatch is the first analytical move in monitoring. Speed and weekend timing are noise here.',
  4101202: 'Four deposits, all just under $10K, different branches. Name the typology — do not chase the math.',
  4101203: 'A clean false-positive disposition still needs the evidence trail. "Looks fine" is not a defensible note.',
  4101204: 'Strong narratives separate facts from conclusions and include the benign explanations. Suppression is what fails examiner review.',
  4101205: 'PEP status is a risk factor, not a verdict. Match the response intensity to the exposure, do not assume guilt.',
  4101206: '25 in, near-zero out, two hours. Pass-through is the typology — savings would accumulate, payroll would not fan in.',
  4101207: 'Tipping-off is a legal risk, not a customer-service question. The relationship manager script will compromise the case.',
  4101208: 'Multiply through the chain: 60% × 80%. Indirect ownership is a product, not a sum.',
  4101209: 'Above-market import price + offshore counterparty = TBML over-invoicing. Warranty and cyber explanations do not fit.',
  4101210: 'Risk-based means small dollars can still escalate when geography, source of funds, and conflicting stories combine.',
  4101211: 'Crypto is not the issue — the in-and-out pattern across new wallets is. Test fit against the customer profile.',
  4101212: 'Non-escalation still needs a defensible file. The note should let QC see why the invoices reasonably resolved the alert.',
  4101213: 'Source-of-funds is about the origin of the money, not cosmetic identity details. Pick the question that actually tests origin.',
  4101214: 'Same beneficiary, fan-in, fan-out at slightly reduced amounts — that is mule-network mechanics, not scholarship payments.',
  4101215: 'QC bounce-backs are about evidence and reasoning, not about flipping the conclusion or hiding the red flag.',
  4101216: 'Twelve $4,950s and a $59,400 outgoing. Aggregation and layering — the neat arithmetic is part of the concern, not comfort.',
  4101217: 'Investigator handoffs should land with the next reviewer in five minutes — profile, transactions, red flags, evidence, gaps.',
  4101218: 'Once detection facts support a SAR, the regulatory clock starts. Track the deadline alongside the analytical work.',
  4101219: 'Sanctions matching is identifier-driven. Document why the partial hit is or is not a true match before disposition.',
  4101220: 'When no individual owner clears the threshold, the rule reaches for the control person — authority is the test, not percentage.',
  4101221: 'Nested correspondents hide downstream parties. The risk is opacity, not the foreign FI label.',
  4101222: 'Two 30% blocked-party owners can aggregate to majority. Read the OFAC 50% rule literally before clearing the account.',
  4101223: 'Continuing patterns drive continuing SARs and updated analysis. One-and-done filing is not how the regime works.',
  4101224: 'Hotel, online ads, ride-share, third-party deposits — the trafficking typology is on the FinCEN advisory list. Document it.',
  4101225: 'A risk rating is dynamic. New international wires plus opaque ownership changes are exactly when to refresh the file.',
  4101226: 'Telling a customer "your SAR is almost done" discloses the report itself — that is the textbook tipping-off violation.',
  4101227: 'Permitted destination but sanctioned transit. The full transaction path matters, not just the endpoint country.',
  4101228: 'A claimed business sale with no agreement, tax records, or public evidence has not been corroborated. Source-of-wealth has to be supported.',
  4101229: 'When facts are mixed, write the case with both the suspicion and the limitations so the reviewer can decide cleanly.',

  // ============================================================
  // Series 86 — voice: senior sell-side equity research director
  // ============================================================
  4101300: '$84M / 42M shares. Diluted EPS is income divided by the weighted diluted count — straight arithmetic.',
  4101301: 'Forward P/E = price / next-year EPS. $54 / $3.60 — read the number before second-guessing it.',
  4101302: 'Gross margin = (Revenue − COGS) / Revenue. $180M / $500M — do not introduce SG&A here.',
  4101303: 'Sales +6% but receivables +35% and DSO up. That is the classic channel-stuffing or collection-quality flag.',
  4101304: 'EV = equity + debt − cash. 900 + 250 − 80. Bridge, not formula gymnastics.',
  4101305: 'Unlevered free cash flow discounts at WACC. That is the matching-cost-of-capital principle, not a trick.',
  4101306: 'A beat driven by pre-price-increase load-in is a pull-forward. Discount the headline and look at the next quarter.',
  4101307: 'Inventory up $30M means $30M of cash tied up. Working-capital builds reduce operating cash flow one-for-one.',
  4101308: 'PEG = P/E divided by growth percentage. 18 / 9 — using the whole-number convention.',
  4101309: 'Public filings, lawful supplier calls, industry data — that is the mosaic, and it stays inside MNPI boundaries.',
  4101310: 'A bank and a software company have different balance-sheet realities. EV/EBITDA and P/E land in very different places.',
  4101311: 'Operating cash flow = NI + non-cash charges − ΔWC. $40 + $12, with WC unchanged.',
  4101312: 'Accretion test for share issuance: does added earnings exceed the dilution and financing cost? Run the math, do not eyeball.',
  4101313: 'Executive comp details live in the proxy. The 10-K covers a lot, but DEF 14A is the right pointer.',
  4101314: 'Perpetual growth at 6.8% with 7% WACC blows up the Gordon denominator. That is the diagnostic — flag it, do not defend it.',
  4101315: 'A 300 bp margin lift on $800M revenue = $24M of operating income. Hold revenue constant and read the delta.',
  4101316: 'Under exam-time pressure, mark and move. Easy points first, hard valuation work last — that is the scoring math.',
  4101317: 'Variant perception names what you think the market is missing and why. Anything else is consensus.',
  4101318: '$20M of depreciation: P&L down, add-back in CFO, accumulated depreciation up (PP&E net down). Trace all three.',
  4101319: 'Three-year prepaid contract — book deferred revenue, recognize over service period. Cash billed ≠ revenue recognized.',
  4101321: 'ROIC = NOPAT / invested capital. 75 / 500. Sanity-check against WACC before drawing a conclusion.',
  4101322: 'Inventory turnover = COGS / average inventory. 400 / 80 — and 5x is a reasonable retail-ish number.',
  4101323: 'Target price = next-year EPS × target multiple. $5.00 × 18x — the discipline is justifying the multiple, not the arithmetic.',
  4101324: 'A consensus gap memo names the assumption delta and the supporting evidence, not just the bottom-line number.',
  4101325: 'Floating-rate debt + near-term refinancing exposes a levered company to a rate shock most directly. Cash-rich names are insulated.',
  4101326: 'A risk section earns its keep when it names specific drivers, valuation impact, and the evidence that would confirm or deny.',
  4101327: 'IBD pressure to delay a downgrade is the Chinese-wall test. Independence is the value of the research, not a courtesy.',
  4101329: 'Error log is for the repeated concept error and the cue. Write the cue down so it triggers the right approach next time.',
  4101400: 'Target price = EPS × multiple. $4.25 × 16x. Then defend the multiple in the body of the report.',
  4101401: 'Underwriter relationship + research coverage means disclosure. Readers price the bias if they know about it.',
  4101402: 'An offer of unreleased quarterly bookings is MNPI by any reasonable reading. Decline; never accept on a no-quote handshake.',
  4101403: 'EV/EBITDA = $2.4B / $300M. The multiple is the language — make sure your peer set supports it.',
  4101404: 'Rating change reports show the work: assumptions changed, estimates moved, valuation upside opened. Conclusion last.',
  4101405: 'Selective dissemination — even to a large client — defeats fair-access principles. The downgrade publishes, then the call.',
  4101406: 'When 100 bps of terminal margin moves valuation materially, that is your sensitivity story. Test it, do not hide it.',
  4101407: 'Bullish reports still need credible downside. Sandbagging the risk section is what makes the thesis look indefensible later.',
  4101408: 'An expensive gift after a favorable initiation is a textbook objectivity threat. Decline or escalate — never quietly accept.',
  4101409: 'Sum-of-parts works when the pieces deserve different multiples. Forcing one multiple across mixed businesses understates value.',
  4101410: '10% in text, 1% in model — reconcile both. A published draft with that gap looks careless and may mislead.',
  4101411: 'Trader-sourced rumor is not a publishable basis. Verification first, then a note if it survives.',
  4101412: '$0.30 EPS lift: $0.20 operating, $0.10 tax. Two-thirds is operating — that is the quality-of-beat read.',
  4101413: 'A bear-case price target alongside the base case shows how the valuation breaks if assumptions fail. That is risk transparency.',
  4101414: 'Personal holdings in a covered name trigger firm policy. Disclose, manage, and follow restricted-list rules before coverage continues.',
  4101415: 'Diluted shares = basic + in-the-money awards. $120M / 55M ≈ $2.18. Use the full diluted denominator, not basic.',
  4101416: 'A copied model tab without formula review will embed the prior assumption set. Always re-verify links before relying on output.',
  4101417: 'Pressure for access in exchange for softened analysis is the independence threat that ruins research franchises. Hold the line.',
  4106882: 'CFO whisper about tomorrow\'s guide = potential MNPI. Stop, escalate, and respect the trading restriction list.',
  4106886: 'A general research note is not a recommendation for a specific account. Keep the IA boundary clean — the PM has separate channels.',
  4106890: 'A biotech risk paragraph that omits the binary trial is performance theater. Name the material risk — that is what affects valuation.',
  4106891: 'Forcing a software-peer multiple onto a hardware comp set is reverse-engineering the price target. The peer set must defend itself.',
  4106898: 'Trading ahead of research dissemination is a hard line. Preclearance and personal-account rules exist precisely for this moment.',
  4107060: 'Sanity-check the DCF against peer multiples, margins, and growth before writing it up. Models can lie; comp sets call them out.',
  4107061: 'Five years of margin expansion against rising input costs needs to be justified explicitly, not assumed. Show the evidence.',
  4107062: 'IBD client + Buy rating on a draft = required disclosure. The fine print is the regulatory protection — not optional.',
  4107064: 'A supplier-emailed customer-order spreadsheet showing tomorrow\'s numbers is MNPI. Stop and escalate before any analytical use.',
  4107065: 'Rating, thesis, target, and risk must align. A Buy rating with a shrug thesis is what enforcement actions get built around.',
  4107066: 'When one assumption drives most of the target price, sensitivity analysis on that input is the load-bearing chart of the report.',
  4107067: 'Three reseller calls is anecdote, not statistic. Triangulate, name the limitations, and resist the urge to upgrade on thin evidence.',
  4107068: 'Sudden CFO change + filing delay + related-party transactions = governance risk. Map the consequence to estimates and target.',
  4107069: 'If "nonrecurring" recurs every year, it is recurring. Normalize earnings and present the run-rate management is masking.',
  4107070: 'The publish button has a supervisor on it for a reason. Comply with the review process — competitor speed is not a defense.',

  // ============================================================
  // CCEP — voice: experienced Chief Compliance Officer
  // ============================================================
  4101500: 'A CCO whose dotted line runs through the COO has structural independence problems. Board access is the test, not org-chart aesthetics.',
  4101501: 'Anonymous hotlines die without follow-up. Triage, investigate, communicate back — the loop has to close or the channel decays.',
  4101502: 'Policy says one thing; floor practice says another. The CCO\'s job is to see the gap and close it, not to take the policy at face value.',
  4101503: 'Risk-based training targets the people whose decisions create exposure. Annual everyone-takes-the-same-module is not risk-based.',
  4101504: 'Scope creep in an investigation is fine if the new facts demand it. The discipline is documenting the expansion, not avoiding it.',
  4101505: 'Material issues escalate to oversight while the picture is still incomplete — with caveats. Waiting for certainty is how boards get blindsided.',
  4101506: 'Third-party onboarding is where most FCPA cases start. The risk-based gate is a controlled checkpoint, not a paperwork stamp.',
  4101507: 'Speak-up silence in a hot business unit is itself a signal — not comfort. Investigate why no one is calling.',
  4101508: 'Interview order matters: peripheral witnesses first, principals last. That sequence preserves evidence and limits collusion risk.',
  4101509: 'Sample size has to support the conclusion. Five out of ten thousand transactions is a story, not an assurance opinion.',
  4101510: 'Retaliation clues are subtle — schedule changes, exclusion, performance reviews that suddenly soften. Track the pattern, not the language.',
  4101511: 'Code syntax matters for anti-bribery: pre-approval before offering anything of value to a public official, with documented exception paths.',
  4101512: 'Root-cause analysis is what distinguishes a remediation from a re-occurrence. Treat the symptom and the same finding returns next cycle.',
  4101516: 'Compliance reporting through the General Counsel creates a privilege-vs-independence tension. The architecture has to resolve it, not paper over it.',
  4101518: 'Risk assessments refresh when the business changes, not on a calendar. A new product, a new geography, a new acquisition — that is your trigger.',
  4101520: 'Every red flag needs a named owner with authority to act. Unowned red flags are how programs fail in front of regulators.',
  4101522: 'Incentive plans drive behavior more than codes do. If the comp plan rewards the wrong thing, the program is fighting the bonus pool.',
  4101523: 'The board packet should show the trend, the worst outcomes, and the unresolved items. Green-light packets erode credibility on the first surprise.',
  4101527: 'Post-acquisition integration is where compliance programs go to die quietly. Bring risk assessment, controls, training, and monitoring into the acquired entity.',
  4101528: 'When facts suggest potential government-reporting obligations, escalate to legal and governance to evaluate options. Quiet decisions become bigger problems.',
  4101529: 'Effectiveness is evidenced by behavior change over time — testing, remediation, speak-up usage, and discipline consistency. Not the existence of policies.',
  4106800: 'Boards deserve the real weather, not the curated forecast. Honest reporting builds the credibility you need when something actually breaks.',
  4106801: 'Dotted-line fog hides accountability. Clear up who actually decides, who actually reports, and who can override — that is the governance ask.',
  4106803: 'When the subject is an executive, the investigation runs through independent channels — outside counsel, audit committee. Internal escalation is too political.',
  4106806: 'A consultant with a "magic cousin" relationship to the decision-maker is the textbook FCPA setup. Diligence the relationship before the engagement.',
  4106812: 'Star-seller force fields are real — and that is precisely why discipline must be consistent. Disparate treatment is what undoes the program.',
  4106813: 'Same facts, different outcomes signals biased application of policy. Document the framework; review past dispositions for consistency.',
  4106816: 'A repeat finding is a process failure, not a coincidence. Stop closing the same issue; redesign the control or escalate.',
  4106819: 'A paper program looks fine until it is stress-tested by an actual issue. Effectiveness = the program holding when something real happens.',

  // ============================================================
  // NERC — voice: senior NERC-certified system operator / RC
  // ============================================================
  4101600: 'N-1 means the system holds after any single contingency. Plan for it before it happens — not after.',
  4101601: 'Alarm floods need triage by reliability impact, not chronological order. The biggest threat to the BES gets your attention first.',
  4101602: 'Closed-loop communication: repeat back, confirm, then act. That is what COM-002 requires — and what stops cascading mistakes.',
  4101603: 'Blackstart sequencing follows the documented plan and the cranking path. Improvisation in restoration is how you re-collapse the system.',
  4101604: 'Margin math means having enough headroom for the next credible contingency. The number is the constraint, not a suggestion.',
  4101605: 'A stale model that does not reflect open breakers will lie to you. Verify the model state before trusting the EMS picture.',
  4101606: 'Emergency wording must be unambiguous: clear directive, named asset, named timing. Soft language gets misheard under pressure.',
  4101607: 'Frequency below 60 Hz across the interconnection means generation is short. ACE sign tells you whether your area is contributing.',
  4101610: 'Voltage support comes from reactive resources — capacitors, reactors, generator excitation. Real power does not solve voltage problems.',
  4101611: 'Handoff notes need: current system state, open clearances, pending actions, and known abnormalities. Anything less is a setup for the next shift.',
  4101613: 'Load shed judgment under EEA-3 is about preserving the rest of the system. The discipline is acting before the cascade — not after.',
  4101614: 'Two-source mismatch means stop and reconcile. Trusting the wrong source in real-time is how you lose situational awareness.',
  4101615: 'Three-part repeat: directive, repeat-back, confirm. Skip a step and you have a procedural violation under COM-002.',
  4101616: 'Contingency ranking is by reliability impact, not by likelihood alone. The biggest credible outage drives the operating plan.',
  4101618: 'IROL is the harder constraint — exceed it and cascading is possible. SOL is the system limit, IROL is the do-not-cross line.',
  4101620: 'Acknowledge clearly, carry out or escalate immediately if you cannot, then report status. That is the COM-002 sequence.',
  4101621: 'Capacity-emergency ladder: market purchases, demand response, public appeals, voltage reduction, then load shed. Climb the rungs in order.',
  4101623: 'Cranking paths are pre-engineered. Use the documented path with verified equipment status — restoration is not the time to design new ones.',
  4101624: 'Your contingency response affects neighbors. Coordinate before acting on flows or schedules that touch the interconnection.',
  4101626: 'Manual load shed is a deliberate tool — used to reduce demand and help restore balance before automatic schemes fire.',
  4101629: 'Cold-load pickup brings restored load back in measured increments. Slamming it on collapses what you just restored.',
  4106820: 'Standards over vibes. If the procedure says do X, you do X — confidence and intuition are not auditable evidence under TOP/EOP.',
  4106821: 'If it is not logged, it did not happen. Operating logs are your defense — and your successor\'s only window into what you decided.',
  4106825: 'A model showing a closed breaker when the field shows it open is a dangerous lie. Reconcile field state and model state before any decision.',
  4106829: 'Timestamps that do not agree across systems are forensic poison. Sync time sources, document offsets, and resolve discrepancies before you need them.',
  4106832: 'A pothole in the blackstart path means coordinating an alternate path with verified equipment status. Stick to documented procedures.',
  4106836: 'Badge-door discipline applies to the control room. CIP says who gets in, when, and with what authorization — no friendly exceptions.',
  4106838: 'Conservative operations is the right posture when uncertainty is high. Reduce risk on the BES first; document the rationale after.',
  4106839: 'When you cannot execute a directive, you communicate that immediately along with the safety constraint, then coordinate an alternate action.',
  4310000: 'Negative ACE + low frequency = your BA is under-generating relative to schedule and frequency bias. Read the sign before the magnitude.',
  4310001: 'CPS1 is a 12-month statistical measure tied to frequency; BAAL is a real-time ACE boundary with a 30-minute clock. Different tools, different windows.',
  4310002: 'During EEA-2, keep AGC in tie-line bias control and use scheduled emergency ramps. Switching modes mid-emergency invites interchange chaos.',
  4310003: 'FRO math: 0.06 Hz drop × 18 MW per 0.1 Hz ≈ 10.8 MW. Governors and frequency-responsive resources had to deliver that.',
  4310004: 'Reserve sharing only counts when the loss qualifies as a Reportable Balancing Contingency Event and you follow the agreed activation procedure.',
  4310005: 'A creeping II balance against neighbors gets paid back through scheduled interchange adjustments — without disturbing real-time ACE control.',
  4310006: 'EEA-1 is the first declaration when capacity is committed and you expect to lean on Operating Reserves. Do not jump to EEA-2 before the criteria are met.',
  4310007: 'UFLS stages exist so governors and reserves can recover frequency at minimum cost. Deeper steps fire only if shallower steps fail.',
  4310008: 'A blackstart unit untested for nearly two years carries restoration risk until it is verified per the plan. Coordinate the test with the TOP and RC.',
  4310009: 'Three-part: word-for-word repeat-back, issuer confirmation, then execution. If you cannot execute, communicate the inability immediately with the reason.',

  // ============================================================
  // Patent Bar — voice: registered patent practitioner / agent
  // ============================================================
  4101700: '§102 novelty is a single-reference inquiry — every element of the claim must be in one prior-art reference. Combinations live under §103.',
  4101701: 'Boundary sentences in the claim define the metes and bounds. Vague boundaries invite §112 indefiniteness rejections.',
  4101702: 'Office action response strategy starts with reading the rejection precisely — every claim, every basis, every reference. Then plan amendment vs argument.',
  4101703: '§103 obviousness combinations require articulated reasoning under Graham and KSR. "Could combine" is not "would combine."',
  4101704: 'Antecedent basis: every "the X" needs a prior "an X" or "a X." It is a §112(b) clarity issue, fix it in the next amendment.',
  4101705: 'Calendar discipline at the USPTO is unforgiving — six months statutory, three months without fee, extensions purchased in monthly increments.',
  4101706: 'Enablement under §112(a) requires the specification teach how to make and use the full scope of the claim. Breadth that outruns disclosure invites rejection.',
  4101707: 'Narrowing to overcome prior art trades scope for allowance. Read every limitation you add — it lives forever in infringement analysis.',
  4101708: 'Examiner interviews are most useful after a clear plan: identify the disputed limitation, propose a path, listen to the examiner\'s position.',
  4101709: 'Prior-art date logic under post-AIA §102: was it patented, published, in public use, on sale, or otherwise available before the effective filing date.',
  4101711: 'A complete response addresses every rejection and objection — claim amendments, arguments traversing each ground, and any required formal items.',
  4101716: 'Specification support means the claim limitation can be tied to disclosure in the as-filed application. Reaching beyond is new matter under §132.',
  4101718: 'Generic-computer matter under Alice/Mayo: a §101 abstract-idea claim is not saved by reciting "on a computer." Look for an inventive concept.',
  4101719: 'No credible utility under §101 is rare but real — incredible asserted utility (perpetual motion, cold fusion in classical conditions) fails the test.',
  4101720: 'A commercial offer for sale of the claimed invention triggers the §102(a)(1) on-sale bar — even private offers count under Helsinn.',
  4101721: 'Inventor\'s own disclosure within the one-year grace period is excepted from §102(a)(1) under §102(b)(1)(A). Document the timeline carefully.',
  4101722: 'Reason to combine under KSR: market pressure, design need, predictable variation, or other articulated rationale. Not pure hindsight.',
  4101723: 'Commercial success rebuttals need a nexus to the claimed features — not to marketing, price, or unclaimed elements (MPEP 2145).',
  4101724: '"Optimal performance" without a numeric bound is §112 indefiniteness territory. Functional language has to be tied to a measurable referent.',
  4101725: 'Foreign prior art is fully citable under post-AIA §102 — geography is not a filter. The duty of disclosure under 37 CFR 1.56 reaches it.',
  4101728: 'Foreign priority claims under §119 require timing within 12 months (utility) and matching the foreign application disclosure. Check both.',
  4101729: 'Incorrect statements to the USPTO implicate the duty of candor under 37 CFR 1.56 and inequitable-conduct doctrine. Correct on the record promptly.',
  4106900: 'One word — like "comprising" vs "consisting of" — sets the fence width of the claim. Pick the word with the scope you want.',
  4106904: 'Known art in the drawer that should have been disclosed under 37 CFR 1.56 is exactly the fact pattern inequitable-conduct cases run on. Submit it.',
  4106905: 'New matter is the §132 bar — disclosure has to be in the as-filed application. If it is not, you may need a CIP or a new application.',
  4106906: 'Three inventions in one suitcase = restriction requirement. Elect one for prosecution; the others wait for divisional applications.',
  4106909: 'Late citation pile near issue raises a duty-of-disclosure timing question. File the IDS promptly under 37 CFR 1.97 with the fees as required.',
  4106910: 'Helpful inventor-manager cameos in §101 analysis do not save abstract-idea claims. Look for the inventive concept, not the org chart.',
  4106911: 'A claim-set sequel after a final rejection means RCE, continuation, or appeal. Pick the procedural vehicle that matches the prosecution goal.',
  4106916: 'Means-plus-function under §112(f) maps the claim to corresponding structure in the spec. If structure is missing, the claim is indefinite under Williamson.',
  4310100: 'Graham factors: scope/content of prior art, differences from the claims, level of ordinary skill, and objective evidence. All four, every time.',
  4310101: 'KSR rejected rigid TSM as exclusive. TSM is a useful heuristic, but obviousness also rides on market pressure, design need, and obvious-to-try.',
  4310102: 'Conclusory "both are from the same art" fails post-KSR — examiners must articulate the reasoning with rational underpinning per MPEP 2143.',
  4310103: 'Secondary considerations carry weight only with a nexus to the claimed features. Sales numbers alone, without that nexus, are not persuasive.',
  4310104: 'Obvious-to-try applies when there is a finite number of identified, predictable solutions and a reasonable expectation of success. Mind both prongs.',
  4310105: 'Analogous art test: same field of endeavor, or reasonably pertinent to the problem the inventor was solving. Both prongs are independently sufficient.',
  4310106: 'Teaching-away rebuttals work when the prior art specifically criticizes the proposed combination. Generic preference is weaker.',
  4310107: 'Reasonable expectation of success — especially in unpredictable arts — can defeat an otherwise plausible §103 combination. Argue the unpredictability.',

  // ============================================================
  // CRCM — voice: senior bank regulatory compliance manager
  // ============================================================
  4101800: 'Product-rule mapping starts with feature inventory: overdraft, debit, savings link, mobile capture — each maps to a different reg.',
  4101801: 'Three grumbles can be three customers or three signals of one defect. UDAAP cleanup starts with reading complaints as data, not noise.',
  4101802: 'Sample size has to support the conclusion. Five accounts out of 50,000 is not population-representative monitoring.',
  4101803: 'A marketing map that excludes protected communities without a defensible business reason creates fair-lending risk — even without lending intent.',
  4101804: 'Tiny print on a fee disclosure is the UDAAP marker. The question is whether a reasonable consumer would have understood the cost.',
  4101805: 'Reg-change tracking needs an implementation plan with owners, dates, procedure updates, training, and testing evidence. Spreadsheet alone is not enough.',
  4101807: 'Dashboard fog at the board level is a reporting failure. Specific, actionable metrics on rising risks — not green-light averages.',
  4101808: 'Click-through disclosures bury the cost. The compliance question is whether the design actually communicated, not whether the customer technically clicked.',
  4101809: 'A vendor reading from an outdated script generates regulatory exposure for the bank. Vendor monitoring is your obligation, not the vendor\'s.',
  4101810: 'A recurring oops is a control failure, not a coincidence. Root-cause and population-impact analysis go together.',
  4101811: 'Risk-rating soup hides exposure. Define the tiers, the criteria, and the consequence — then test that the rating is actually driving controls.',
  4101813: 'A verbal green-light from senior leadership without documented analysis is not a defensible position. Memorialize facts, conditions, and rationale.',
  4101816: 'Refund decisions follow the harm framework: fee impact, customer count, root cause, fix verification. Skipping any of these undercuts the remediation.',
  4101818: 'APR or fee changes trigger Reg Z/DD timing rules. Read the rule, calendar the change-in-terms notice — do not estimate the window.',
  4101819: 'Adverse-action notices require specific reasons under ECOA and FCRA. Generic statements fail; the consumer needs to know which factor drove denial.',
  4101820: 'HMDA reportability is rule-driven: covered loan, covered institution, application complete enough. Then data integrity controls have to hold.',
  4101822: 'Unauthorized EFT under Reg E has hard timing tiers — 2 days, 60 days, beyond. Liability caps change at each tier; track the report date precisely.',
  4101824: 'Vendor data sharing under GLBA Safeguards requires contract terms, controls, and ongoing monitoring. A signed NDA is not a Safeguards control.',
  4101825: 'Assessment-area definition shapes the entire CRA exam. Branch footprint, deposit base, and lending pattern all feed into how the area is drawn.',
  4101828: 'Military-status protections under SCRA and MLA are rate-, fee-, and disclosure-specific. The control has to identify the customer before treatment can apply.',
  4101829: 'Funds availability holds under Reg CC have categorical rules and timing windows. Document the basis for any extended hold contemporaneously.',
  4106840: 'A branch-footprint map that shows fair-lending exposure is exactly the visualization that examiners build on first. See it before they do.',
  4106842: 'Application pipeline fog usually hides ECOA timing issues. Track the application from receipt to disposition with timestamps that survive audit.',
  4106844: 'One spicy complaint can be the tip of a population. Read it for systemic signals before disposing as a one-off.',
  4106847: 'Servicer script drift away from the approved version is a UDAAP and vendor-monitoring issue. Find it through call sampling, not annual attestation.',
  4106848: 'A refund population is everyone affected by the same root cause, not just the customers who complained. Identify the full set, fix, validate.',
  4106851: 'Pricing exceptions without documented rationale create unexplained disparities. The trail is the defense — without it, the disparity is what regulators see.',
  4106855: 'A shared drive holding customer information without access controls is a Safeguards Rule failure. Inventory the data, then secure or dispose.',
  4106859: 'Default settings that steer customers into avoidable fees are the textbook UDAAP design pattern. Choice has to be meaningful.',

  // ============================================================
  // AIGP — voice: experienced AI governance lead / DPO
  // ============================================================
  4101900: 'Hiring-model ownership has to land with a named accountable executive, not a working group. Diffuse ownership is how high-risk systems fail unsupervised.',
  4101901: 'Same model, different stakes — hiring vs internal scheduling — means different risk tiers. Use-case context is the test, not the model architecture.',
  4101902: 'More data is not a strategy. Necessity, proportionality, lawful basis, and purpose-compatibility are the controls — not training-set size.',
  4101903: 'Rubber-stamp reviewers do not satisfy Article 14 or any equivalent oversight regime. Human-in-the-loop has to mean understanding, time, and authority to override.',
  4101904: 'Vendor drift is the silent governance failure. Periodic re-testing on your data, your distribution, and your population — not the vendor\'s claims.',
  4101905: 'A confusion matrix is the read on misclassification cost. False positives and false negatives carry different harms — score them separately.',
  4101906: 'A vendor "black box" with no documentation cannot be governed. Either obtain the documentation or do not deploy in a high-risk context.',
  4101907: 'AI-system disclosure timing matters: at the start of the interaction, in language the user can read. After-the-fact disclosure is not disclosure.',
  4101908: 'A biased-output alarm is the trigger, not the conclusion. Validate, isolate the cause, decide on accept/mitigate/escalate/suspend.',
  4101909: 'You cannot govern what you cannot inventory. The unknown-model-zoo problem starts with shadow IT and is solved by discovery + registration.',
  4101910: 'Repurposing chatbot logs for training crosses purpose-limitation boundaries unless the original consent and DPIA cover it. Almost always: it does not.',
  4101911: 'Reason codes for adverse decisions exist for contestability. Generic explanations do not let an affected person dispute or correct.',
  4101912: 'Prompt-leak risk grows when system instructions live alongside user inputs. Treat instructions and data as separate trust domains.',
  4101913: 'Aggregate accuracy hides subgroup harm. Slice the eval — gender, age, geography, language — and report disparities, not just the headline.',
  4101914: 'Lifecycle ownership includes reassignment, periodic review, and named criteria for suspension or retirement. Models without a retirement plan never retire.',
  4101915: 'Triage first by harm potential and decision automation, not by model novelty. The highest-stakes use cases queue ahead of the most interesting ones.',
  4101916: 'A model card connects use case, controls, owners, and escalation path. Generic accuracy numbers without that operational binding are not governance.',
  4101918: 'NIST AI RMF: Govern, Map, Measure, Manage. Govern is the foundation — without it, the other three are unmoored from accountability.',
  4101919: 'Risk tiering needs affected-person analysis, required controls, sign-off gates, and review depth scaled to harm. Same gate for all systems is not risk-based.',
  4101920: 'EU AI Act Article 5 prohibits specific practices outright — social scoring across unrelated domains, real-time biometric ID in public spaces (with narrow exceptions).',
  4101921: 'Provider vs deployer distinction under the EU AI Act drives obligations. Identify which role you occupy for each system, then read the duties from there.',
  4101922: 'Hallucination evaluation for legal-help systems tests factuality, citation reliability, uncertainty handling, and user-harm escalation — not generic perplexity.',
  4101923: 'Instructions vs data separation is the prompt-injection defense. Treat user inputs as untrusted, even when they look helpful.',
  4101924: 'Wrong-document retrieval in RAG is a relevance/grounding failure. Eval should test retrieval quality independently of generation quality.',
  4101925: 'Adversarial testing evidence before rollout: what was tested, what failed, what was fixed, what residual risk remains — and who signed off.',
  4101927: 'Silent version changes from the vendor are a monitoring failure. Pin versions, monitor for changes, and re-evaluate before deploying the new version.',
  4101929: 'When evaluation evidence does not support intended use, the decision is "do not launch." That decision is the value of the governance program.',
  4106863: 'Customer chat reuse for training crosses purpose-limitation unless contracts and notices cover it. Check the lawful basis before the data scientist starts.',
  4106864: 'Aggregate-score comfort masks subgroup harm. The disaggregated read is the operational truth, not the executive headline.',
  4106873: 'A prompt-box spill where customer data is disclosed to an unauthorized service is a textbook DPA breach. Stop the flow, notify, remediate.',
  4106874: 'Proxy variables (zip, name) can re-introduce protected-class signal. Test for proxy effects explicitly — auditors and regulators will.',
  4106876: 'Appeal mazes defeat contestability. A meaningful path to human review needs to be short, signposted, and effective — not buried.',
  4120000: 'Article 5 social-scoring prohibition reaches general scores from unrelated public-life behavior used for detrimental treatment in another domain.',
  4120001: 'Real-time remote biometric ID in public spaces by law enforcement is prohibited as the baseline — narrow exceptions exist, with prior authorization required.',
  4120002: 'Annex III high-risk reaches employment recruitment/selection regardless of whether a human signs off. The "human still decides" defense does not change classification.',
  4120003: 'Article 10 training-data requirements: relevant, representative, as error-free and complete as possible, with bias examination and mitigation.',
  4120004: 'Article 14 oversight bites when the overseer can actually understand, monitor, interpret, override, and intervene. A Yes/No button without context fails the test.',
  4120005: 'Article 50 disclosure: tell the user they are interacting with AI, in a clear and distinguishable manner — unless it is obvious from context.',
  4120006: 'GPAI above 10^25 FLOPs is presumed systemic-risk: extra obligations on model evaluation, risk mitigation, incident reporting, cybersecurity.',
  4120007: 'Where a high-risk system is a safety component of a product under existing third-party conformity assessment, the AI Act assessment integrates into that procedure.',
  4120008: 'Govern is the cross-cutting function under NIST AI RMF — policies, roles, accountability, risk tolerance. Without it, Map/Measure/Manage have no mandate.',
  4120009: 'A NIST AI RMF Profile is a use-case- or sector-specific application that selects, prioritizes, and tailors the framework to the deployment context.',
  4120010: 'Accountable/Transparent and Explainable/Interpretable are the trustworthy-AI gaps when a model is accurate but cannot be understood or contested.',
  4120011: 'Identifying the disparity is Measure; deciding what to do — accept, mitigate, escalate, suspend — is Manage. The functions run in sequence on the same finding.',

  // ============================================================
  // API Inspectors — voice: API Authorized Inspector
  // ============================================================
  4102000: 'Open-book exam does not mean open shortcut. Knowing where each requirement lives is the speed advantage — flag your code books before exam day.',
  4102001: 'Corrosion rate sets the inspection interval. Higher rate, shorter interval — and you need representative thickness data to compute it.',
  4102002: 'Tank-bottom remaining life ties to thickness, corrosion rate, and minimum thickness criteria under API 653. Calendar autopilot misses real deterioration.',
  4102003: 'A patch with a documented engineering review may qualify as a repair; a structural change qualifies as an alteration. The paperwork classifies it, not the welder.',
  4102004: 'Pretty paint hides corrosion under insulation and CUI mechanisms. Method selection should match the damage mechanism, not the visual.',
  4102005: 'Wrong-book error is common — 510 vs 570 vs 653 each govern different equipment. Confirm scope before applying acceptance criteria.',
  4102007: 'Metal-loss judgment runs against applicable acceptance criteria, remaining-life calculation, or FFS assessment — not against visual instinct.',
  4102008: 'Calendar-only inspection misses condition-driven risk. RBI ties intervals to credible damage mechanisms and consequences.',
  4102009: 'Missing repair trail is a records gap — and a regulatory exposure. Reconstruct what you can, document what you cannot, and address gaps in the next outage.',
  4102010: 'RBI focuses inspection resources where damage and consequence are credible. Treating every item identically is the opposite of risk-based.',
  4102011: 'Test pressure under API 510 is rule-driven — verify applicable test or alternative evaluation before returning to service.',
  4102012: 'Lower-pressure operation may allow alternative inspection or testing under specific rule provisions. Read the section, do not estimate.',
  4102013: 'No NDE method is magic. Choose based on the credible damage mechanism — UT, RT, PT, MT each see different defects.',
  4102014: 'A two-year nibble in thickness with a known mechanism trends to a remaining-life number. Trend it; do not eyeball it.',
  4102015: 'Clamp comfort is a temporary measure. Under API 570, document the clamp, set the inspection plan, and plan the permanent repair.',
  4102016: 'Production pressure to defer inspection is the moment the inspector\'s independence matters most. Document the recommendation, escalate if overridden.',
  4102017: 'FFS Level 1 → Level 2 → Level 3 — each requires more data and engineering rigor. Pick the level matched to the criticality and the available data.',
  4102018: 'Wet H2S exposure suggests HIC, SOHIC, SSCC mechanisms. Inspection methods and intervals should match the credible mechanism.',
  4102019: 'TML placement at representative and higher-risk locations: dead legs, injection points, elbows, high-corrosion service. Not just convenient access points.',
  4102022: 'Change of service triggers engineering review of design conditions, materials, damage mechanisms, and inspection plan — even before equipment moves.',
  4102023: 'Heat-treatment requirements depend on code, material, thickness, service, and welder qualification. Check each — exemptions exist but require documentation.',
  4102024: 'A relief-device mismatch is a Process Safety event in progress. Pressure-relief sizing has to match service conditions; correct before continued operation.',
  4102026: 'Radiography limits include thickness range, geometry, source/film access, and weld type. Pick UT or alternative methods when RT cannot cover the case.',
  4102027: 'Level-of-assessment selection in FFS is driven by data, criticality, and time. Higher level = more confidence but more engineering effort.',
  4102028: 'Open-book exam habits: index your code, mark the cross-references, and practice timing. The index is the difference between confident and rushed.',
  4106920: 'Pit-depth surprise means localized metal loss against applicable criteria. Update remaining-life, decide repair vs FFS, document the path.',
  4106922: 'A pretty weld does not mean an accepted weld. The specified NDE has to be performed and accepted before equipment returns to service.',
  4106925: 'New feed chemistry can introduce mechanisms the existing inspection plan was not built for. Re-evaluate IOWs and mechanisms before the next outage.',
  4106926: 'Below-minimum thickness requires engineering evaluation or FFS — and risk-based action until resolved. Continued operation needs documented basis.',
  4106930: 'Insulation blindfolds you to CUI. Strip strategically — start at the highest-risk geometry and history points, not whatever is easiest to access.',

  // ============================================================
  // CDFM — voice: senior DoD/federal comptroller
  // ============================================================
  4102100: 'Purpose fence: appropriation X funds purpose X. Spend it on Y and you have a potential Antideficiency Act problem.',
  4102101: 'Obligations record legal commitments before cash moves. Track them — they discipline forecasting, funds availability, and ADA exposure.',
  4102102: '"Almost enough" funds is exactly when ADA risk is highest. Do not incur the obligation until funds are legally available.',
  4102103: 'Burn-rate check: cumulative outlays vs phased plan. Deviation triggers a forecast update, not a year-end surprise.',
  4102104: 'Quiet underspend signals execution problems — capability gaps go unaddressed. Surface it early; do not let it land as an end-of-year reprogramming.',
  4102105: 'Certifier pause is exactly the discipline ADA was built for. If the funds are not clearly available, do not certify — escalate.',
  4102106: 'Reprogramming and transfer authorities are limited and rule-bound. Verify thresholds and notifications before moving money between accounts.',
  4102107: 'Evidence over assertion is the FIAR posture. Reconcilable, traceable, complete — that is the audit standard, not "we know it is correct."',
  4102108: 'Cheap now, costly later — life-cycle cost analysis is how PPBE handles this. Acquisition unit price is one input, not the decision.',
  4102109: 'September shopping carts are the textbook fiscal-year-end pressure pattern. Document the requirement and the prioritization, or expect IG questions.',
  4102110: 'Estimate at Completion uses actual costs plus revised forecast — not the original baseline. Update the EAC when reality diverges from plan.',
  4102112: 'A one-person kingdom is a segregation-of-duties failure. Compensating controls have to exist; redesign the role if they cannot.',
  4102113: 'A future-year wish list is not a current-year obligation. Bona fide needs rule prevents using this year\'s funds for next year\'s requirement.',
  4102114: 'Corrective-action plans need measurable steps, owners, dates, and independent validation. Without validation, the finding will return next cycle.',
  4102115: 'Shared-server bills follow benefitting-activity allocation. Document the basis — usage data or proportional share — for the audit trail.',
  4102117: 'Finance exists to enable mission execution within the rules. Stewardship and ADA discipline are the constraints — not optional courtesy.',
  4102118: 'OMB formulates and executes; CBO informs Congress; Treasury manages central financial operations. Know the lane before you place the question.',
  4102119: 'Authorization permits the program; appropriation provides the budget authority to obligate. Both are required — neither substitutes for the other.',
  4102120: 'CRs typically provide temporary, limited authority — and restrict new starts and rate-of-operation changes. Read the specific CR language each time.',
  4102121: 'Apportionment chain: OMB apportions to agencies, agencies allot down. Obligations only happen within apportioned and allotted amounts.',
  4102123: 'Prioritized response planning with named owners and proportional controls — risk acceptance is a decision, not a default.',
  4102124: 'Phase confusion blurs PPBE — Planning, Programming, Budgeting, Execution each have different deliverables and stakeholders. Anchor the question to a phase.',
  4102125: 'Behind schedule AND over cost = serious program execution issue. Both variances matter; either alone may be recoverable.',
  4102126: 'Prompt-pay rules create interest exposure and audit issues. Late invoice processing is a control failure, not a paperwork delay.',
  4102127: 'Budgetary accounting tracks authority and execution; proprietary tracks financial position, cost, and net position. Different views, same transactions.',
  4102128: 'Audit opinion meaning: unqualified, qualified, adverse, disclaimer — each has specific implications for what users can rely on.',
  4102129: 'Fixing the root means the same finding does not return. Treating the symptom is a recurring-finding generator.',
  4106940: 'Purpose, time, amount — the three appropriation-law tests. If your requirement fails any one, the appropriation is wrong color of money.',
  4106941: 'A handshake commitment without recorded obligation is an ADA hazard. Record obligations contemporaneously; do not let "we will handle the paperwork" be policy.',
  4106943: 'A tiny overrun on a small appropriation can still be an ADA violation. The threshold is zero, not "material."',

  // ============================================================
  // Certified General Appraiser — voice: senior commercial appraiser
  // ============================================================
  4102200: 'Highest and best use: legally permissible, physically possible, financially feasible, maximally productive — and supported by evidence.',
  4102201: 'NOI = EGI − operating expenses (no debt service, no income tax, no capital reserves above line). Walk through the line items once before you trust the number.',
  4102202: 'Cap rate = NOI / Value. Coffee math: 80 / 1,000 = 8%. The harder question is whether the cap rate is market-supported.',
  4102203: 'A client requesting a specific number is an immediate USPAP red flag. Walk away, or convert to a consulting assignment with no value opinion.',
  4102204: 'Comp selection: same property type, similar location, similar use, recent date, arm\'s-length. Compromises require adjustments — and disclosure.',
  4102205: 'Scope of work has to match assignment complexity. Underscoping creates USPAP exposure; overscoping wastes client money.',
  4102206: 'Time adjustment uses market change between sale and effective date — paired sales, market indices, or trend analysis. Document the support.',
  4102207: 'Reconciliation weighs the three approaches by reliability for the property type and assignment. Average is not reconciliation.',
  4102208: 'A 1% cap rate is a fantasy or a typo. Sanity-check against market data before defending a number — and against reasonableness on cross-exam.',
  4102209: 'Debt service does not belong in NOI. The cap rate and value are pre-financing; that is the whole point of separating value from financing.',
  4102210: 'Above-market rent: capitalize contract rent at a higher rate or convert to market rent and value the leased fee separately. Either way, transparent treatment.',
  4102212: 'An awkward warehouse — odd shape, inferior access — needs adjustments under sales comparison. Functional obsolescence under cost approach.',
  4102213: 'Road-closure gloom is external obsolescence — accrued depreciation from outside the property. Document the cause and the market evidence.',
  4102215: 'Absorption analysis: how many units can the market absorb per period at the proposed price/rent. Without it, the income/cost approach is detached.',
  4102218: 'Which interest is being valued: fee simple, leased fee, leasehold? The interest defines the income stream and the appropriate approach.',
  4102219: 'Sale-derived cap rate = NOI / sale price for comparable, recent, arm\'s-length sales. Then adjust for property differences from the subject.',
  4102220: 'A superior location justifies a downward adjustment to the comp\'s sale price for the subject. The principle is matching subject to comp on a level field.',
  4102221: 'EGI arithmetic: gross potential income − vacancy and collection loss + other income. Run through it line by line.',
  4102223: 'Terminal cap rate is typically higher than going-in cap rate to reflect future uncertainty and aging. Document the spread reasoning.',
  4102224: 'A pending environmental report is an extraordinary assumption — disclose it, identify the effect on value if the assumption is wrong.',
  4102225: 'As-repaired value uses a hypothetical condition under USPAP: explicitly stated, disclosed, and tied to specified work.',
  4102226: 'RCN less depreciation: replacement cost new minus accrued depreciation (physical, functional, external). Then add land value.',
  4102228: 'Before-and-after appraisal for partial-take cases: value before, value after the taking. The difference is just compensation, with disclosure of method.',
  4102229: 'A specialized refinery is a special-purpose property — cost approach often dominates because comparable sales are scarce. Document the reasoning.',
  4106962: 'A comparable-ish sale with seller financing needs adjustment to a market-equivalent cash basis. Treat financing as a cash-equivalency issue.',
  4106964: 'A new roof on an old building reduces physical depreciation but does not eliminate effective age. Cure curable items, depreciate the rest.',
  4106967: 'A storm after inspection but before effective date raises a date-of-value question. The value opinion reflects conditions on the effective date.',
  4106969: 'When the three approaches disagree, the reconciliation explains the weighting — by data quality, applicability to the property type, and reliability.',
  4106972: 'Contamination maybe = extraordinary assumption territory. Disclose, state the effect, and recommend the appropriate environmental investigation.',
  4106976: 'Full-building fantasy ignores lease-up, market vacancy, absorption, and concessions. Stabilized income comes after the lease-up adjustment, not before.',

  // ============================================================
  // Clinical Research — voice: senior clinical research auditor / CRA
  // ============================================================
  4102300: 'A new risk update is a re-consent trigger when the change is material to the participant\'s decision. Do not gate it on visit timing.',
  4102301: 'Screening wobble: eligibility criteria are protocol-bound. Escalate to the PI; do not enroll for convenience.',
  4102302: 'A CRF entry without source documentation is a CRF ghost. ALCOA requires source — recreate it cleanly or document the gap.',
  4102303: 'Clinic-closing-time pressure does not change safety obligations. Assess the participant, document, escalate per site SOP.',
  4102304: 'A delegation log gap means the site cannot demonstrate the task was assigned to a qualified, trained person — that is an FDA 483 finding.',
  4102305: 'A missed window is a protocol deviation. Document, assess impact, follow sponsor/IRB process — do not paper over.',
  4102306: 'Monitor queries are opportunities to correct the record cleanly. Address them with source-referenced answers, not narrative explanations.',
  4102307: 'Pill count math: dispensed − returned − reported taken. Discrepancies are compliance and safety signals, not arithmetic curiosities.',
  4102308: 'Unblinding temptation is exactly when the protocol\'s unblinding procedure exists. Follow the documented path, do not improvise.',
  4102309: 'SAE clock: notify the PI promptly, follow protocol, sponsor, IRB, and regulatory reporting requirements. The clock starts at site awareness.',
  4102311: 'Wrong-stratum enrollment is a deviation — document, assess impact, follow sponsor/protocol guidance. Do not alter the record to fit the assignment.',
  4102312: 'Late notes use dated late entries identifying who wrote them and why. Backdating is a data-integrity violation, full stop.',
  4102313: 'Recruitment flyer changes need IRB approval before use. The principle is that subject-facing materials are part of the approved protocol package.',
  4102314: 'Inspection readiness = records, staff explanations, delegation, source, and actual practices all align with the protocol and SOPs.',
  4102315: 'A protocol window puzzle outside the window is a deviation unless the protocol or approved guidance allows it. Escalate before randomizing.',
  4102316: 'A repeat deviation is a CAPA trigger — root-cause and corrective action. Repeat without CAPA is what brings the warning letter.',
  4102317: 'A last binder check before closeout ensures the final study record is complete, accurate, traceable, and ready for retention or inspection.',
  4102318: 'Teach-back is the consent-comprehension control. Pause and support the discussion if the participant cannot teach back the core elements.',
  4102319: 'eSource edit trail is the data-integrity backbone of electronic systems. Confirm timestamps, attributions, and reason-for-change are captured.',
  4102320: 'A PI too distant from the trial is an oversight finding — investigator responsibilities cannot be delegated wholesale to coordinators.',
  4102322: 'Monitors need source access for verification. Site policies on access have to align with the sponsor\'s monitoring plan and the participant\'s consent.',
  4102324: 'An "important deviation" requires documented assessment, escalation, reporting, and corrective action — not informal handling.',
  4102325: 'Missing delegation evidence at closeout is a closeout-blocker. Reconstruct from CV, training, and signatures; address gaps with the sponsor.',
  4102326: 'Withdrawal requests are honored per the protocol and consent — including the participant\'s rights regarding already-collected data.',
  4102327: 'Temperature excursions on study product: quarantine, document, notify, and await disposition before any further use.',
  4102328: 'A lab transfer gap means specimen chain-of-custody and accountability cannot be reconstructed. Investigate and document, do not assume.',
  4102329: 'Record retention is essential-records-driven. Know the required period for your jurisdiction and sponsor — and keep them accessible for inspection.',
  4106980: 'Consent after the blood draw is consent failure — the procedure cannot be unwound. Document, report, and address the protocol breach.',
  4106985: 'Sticky-note vital signs that get transcribed and discarded fail ALCOA — the original is the source, and it has to be preserved.',
  4106989: '"Almost eligible" is not eligible. Clinical intuition does not override protocol criteria; exceptions require approved procedures.',
  4106999: 'A PI signature marathon the night before inspection does not show timely oversight. Inspectors read the pattern, not the signatures alone.',
}

export const CAREER_CREDENTIALS1_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {
  // ============================================================
  // AML
  // ============================================================
  4101217: {
    newCorrect: 'Profile, transactions, red flags, evidence, and unresolved questions in one concise summary.',
    lessonAddendum: 'A clean handoff lets the next investigator absorb the case in five minutes without re-reading every artifact. The shape — profile, key transactions, flags, corroboration, gaps — is the standard format examiners expect to see.',
  },
  4101229: {
    newCorrect: 'Write both the suspicious indicators and the limitations so reviewers can decide on balanced facts.',
    lessonAddendum: 'Balanced narratives are the strongest under examiner scrutiny. They preserve the suspicion, name the unresolved exculpatory evidence, and avoid the two failure modes — overstating suspicion or burying contrary facts.',
  },

  // ============================================================
  // Series 86
  // ============================================================
  4101319: {
    newCorrect: 'Billings, deferred revenue, and recognition timing — cash billed is not the same as recognized revenue.',
    lessonAddendum: 'A three-year prepaid contract is the textbook case where billings, deferred revenue, and recognition all matter. Recognized revenue spreads over the service period; deferred revenue sits on the balance sheet until earned.',
  },
  4101326: {
    newCorrect: 'Name specific downside drivers, their effect on estimates or valuation, and the evidence that would confirm them.',
    lessonAddendum: 'Useful risk sections operate at the level of model drivers. A generic "the company has risks" is exactly what FINRA and the SEC have flagged in deficiency letters — sections need to connect specific uncertainties to specific thesis-failure paths.',
  },
  4101329: {
    newCorrect: 'The repeated concept error, the cue that should trigger EV vs equity value, and a targeted practice plan.',
    lessonAddendum: 'An error log earns its keep when it captures both the diagnosis (you keep using equity value on enterprise-level questions) and the cue you will recognize next time (any question with debt or cash mentions should trigger an EV check).',
  },
  4101415: {
    newCorrect: 'State the evidence, valuation support, drivers, risks, and what would change the recommendation.',
    lessonAddendum: 'A thesis that can take a punch names the drivers, the evidence behind them, and the disconfirming signals. "Management is best-in-class" is not a thesis — it is a sentiment.',
  },
  4101402: {
    newCorrect: 'Decline material nonpublic information and keep the discussion to public-information boundaries.',
    lessonAddendum: 'A "no-quote" handshake does not sanitize MNPI. The selective whisper is exactly what enforcement actions are built around — even when the analyst does not trade on it personally.',
  },
  4107060: {
    newCorrect: 'Sanity-check the model against peer multiples, growth, margins, and quality before relying on the output.',
    lessonAddendum: 'Sell-side directors routinely flag DCFs that imply outlier valuations without a corresponding business-quality story. The valuation sanity check is the seatbelt — comp set, growth, margins, and quality all have to support the target price.',
  },
  4107067: {
    newCorrect: 'Assess sample size and bias, corroborate with other evidence, and describe limitations before changing the call.',
    lessonAddendum: 'Three reseller calls is anecdote, not data. A defensible upgrade after channel checks names the sample, the bias risks, and the corroborating evidence — and acknowledges what the small sample cannot conclude.',
  },
  4107068: {
    newCorrect: 'Analyze governance and reporting risks as thesis drivers, including valuation impact and specific risk disclosure.',
    lessonAddendum: 'Abrupt CFO change, filing delay, and related-party transactions cluster as a governance red-flag signal. The analyst\'s job is to convert that signal into estimate, valuation, and risk-section adjustments — not just to mention it.',
  },
  4107069: {
    newCorrect: 'Test whether the adjustments are truly nonrecurring; present normalized earnings reflecting ongoing economics.',
    lessonAddendum: 'When "nonrecurring" recurs annually, it is recurring. The discipline is normalizing earnings against the underlying business rather than reciting management\'s adjusted number — and showing the gap explicitly in the report.',
  },
  4106898: {
    newCorrect: 'Follow personal-trading restrictions and preclearance; do not trade ahead of research dissemination.',
    lessonAddendum: 'Trading personally on a known-to-be-coming research note is one of the brightest enforcement lines. Preclearance and dissemination-timing rules exist precisely for this moment; firm policy almost always prohibits the order entirely.',
  },

  // ============================================================
  // CCEP
  // ============================================================
  4101505: {
    newCorrect: 'When material enough for oversight, with caveats about what remains unknown.',
    lessonAddendum: 'Material-issue timing is a balance: waiting for full certainty is how boards get blindsided, but escalating prematurely on thin facts erodes credibility. Escalate with caveats — name what is known, what is unknown, what is being done.',
  },
  4101511: {
    newCorrect: 'Pre-approve anything of value to a public official, unless a documented exception applies.',
    lessonAddendum: 'Anti-bribery code syntax matters: pre-approval is the control, with exceptions tightly defined (reasonable hospitality, marketing items below threshold, etc.) and documented. Reactive approval is not a control — it is an audit finding waiting to happen.',
  },
  4101527: {
    newCorrect: 'Integrate the acquired business into risk assessment, controls, training, reporting, and monitoring.',
    lessonAddendum: 'Post-acquisition integration is where compliance programs commonly slip. The acquired entity inherits the parent\'s standards on day one of close, but the operational reality often lags — closing that gap is the integration plan.',
  },
  4101528: {
    newCorrect: 'Escalate promptly to legal and governance to evaluate obligations and response options.',
    lessonAddendum: 'Self-disclosure questions involve cooperation credit, voluntary disclosure programs, and litigation strategy — not a CCO solo decision. Get legal and governance in the room early; document the analytical path.',
  },
  4101529: {
    newCorrect: 'Risk-based controls are tested, issues are remediated, employees speak up, and behavior changes over time.',
    lessonAddendum: 'Effectiveness evidence is behavioral, not documentary. Testing results, remediation closure rates, speak-up usage trends, and disciplinary consistency are what enforcement and audit committees look at — not the existence of the policy library.',
  },
  4106819: {
    newCorrect: 'Controls operate, reports are investigated, issues remediated, discipline consistent, leadership gets candid metrics.',
    lessonAddendum: 'A paper program holds up until something real happens. Stress-tested effectiveness — through internal investigations, audit findings, and management responses — is the bar that distinguishes programs that work from those that exist.',
  },

  // ============================================================
  // NERC
  // ============================================================
  4101620: {
    newCorrect: 'Acknowledge clearly, carry out or escalate inability promptly, and report status through the proper channel.',
    lessonAddendum: 'Directive authority under COM-002: the receiving operator acknowledges, executes, or reports inability. Silence or partial acknowledgment is exactly what disturbance reports cite when communication failures cascade.',
  },
  4101621: {
    newCorrect: 'Use established emergency procedures and communications to obtain resources or reduce risk.',
    lessonAddendum: 'The capacity emergency ladder under EOP-011 escalates through market purchases, demand response, public appeals, voltage reduction, and finally load shed. Each rung is documented; the discipline is climbing in order, not skipping to the bottom.',
  },
  4101626: {
    newCorrect: 'Reduce demand deliberately to help restore balance before a wider collapse.',
    lessonAddendum: 'Manual load shed is the operator-initiated counterpart to automatic UFLS. The judgment is acting early enough to preserve the rest of the system rather than waiting for the automatic schemes to fire on a collapsing frequency.',
  },
  4106832: {
    newCorrect: 'Coordinate an approved alternate path using verified equipment status and restoration procedures.',
    lessonAddendum: 'A blackstart path with a pothole calls for the documented alternate, not improvisation. EOP-005/006 procedures and verified field status are the inputs; coordination with the TOP and RC is the discipline.',
  },
  4106839: {
    newCorrect: 'Communicate the inability and safety constraint immediately, then coordinate an alternate reliability action.',
    lessonAddendum: 'When you cannot execute a directive, COM-002 obligates immediate notification of the inability and the reason — and then a coordinated alternate. Quietly working around it is the procedural violation that disturbance reports cite.',
  },
  4310001: {
    newCorrect: 'CPS1 is a 12-month statistical frequency-related measure; BAAL is a real-time ACE boundary with a 30-minute clock.',
    lessonAddendum: 'BAL-001-2 separates statistical accountability (CPS1, over a long horizon) from real-time boundary enforcement (BAAL, with a 30-consecutive-clock-minute limit). Different tools, different windows, different consequences for exceedance.',
  },
  4310004: {
    newCorrect: 'The loss must qualify as a Reportable Balancing Contingency Event and the BA must follow the agreed activation procedure.',
    lessonAddendum: 'BAL-002 reserve-sharing claims only count when the loss meets the RBCE threshold (single largest contingency or RSG-defined criteria) and the activation/notification procedure is followed. Both conditions are independently required.',
  },
  4310005: {
    newCorrect: 'Coordinate a deliberate payback through scheduled interchange adjustments without disturbing ACE control.',
    lessonAddendum: 'Inadvertent Interchange accumulation pays back through scheduled adjustments coordinated with the affected neighbors so II decays toward zero. Forcing ACE to absorb it disturbs real-time control and creates the next problem.',
  },
  4310007: {
    newCorrect: 'Staged shedding gives governors, AGC, and reserves time to arrest the decline at minimum cost.',
    lessonAddendum: 'UFLS schemes stage shedding so the first step gives primary frequency response and reserves a chance to arrest the decline. Deeper steps only fire if shallower ones fail — minimizing customer impact while preserving the interconnection.',
  },
  4310008: {
    newCorrect: 'Treat the unit as carrying restoration risk until tested per plan, and coordinate testing with TOP and RC.',
    lessonAddendum: 'Blackstart verification under EOP-005/006 ties capability to documented testing on a defined cadence. An untested unit carries unmitigated restoration risk; treat it that way until the test or compensating procedure is coordinated.',
  },
  4310009: {
    newCorrect: 'Repeat word-for-word, get confirmation, then execute — or immediately communicate inability and the reason.',
    lessonAddendum: 'Three-part communication under COM-002: directive, repeat-back, confirmation. The fourth move — when execution is not possible — is immediate notification with the safety or operational reason, coordinated through proper channels.',
  },

  // ============================================================
  // Patent Bar
  // ============================================================
  4106905: {
    newCorrect: 'New matter is not permitted; new subject matter may require a new application.',
    lessonAddendum: 'Section 132 prohibits introducing new matter through amendment. When the desired claim scope outruns the as-filed disclosure, the correct vehicle is a continuation-in-part — with appropriate priority-date consequences for the new subject matter.',
  },
  4106906: {
    newCorrect: 'The applicant elects an invention or traverses; non-elected claims can be pursued later.',
    lessonAddendum: 'Restriction practice under §121 forces election among independent and distinct inventions. The non-elected claims survive — they can be pursued in divisional applications without losing priority benefit.',
  },
  4106916: {
    newCorrect: 'Means-plus-function treatment is possible; check whether the specification discloses corresponding structure.',
    lessonAddendum: 'Under §112(f), means-plus claims map to the corresponding structure (and equivalents) disclosed in the specification. The Williamson v. Citrix Online line of cases tightens the structure requirement — generic functional language often fails.',
  },
  4310100: {
    newCorrect: 'Scope/content of prior art, differences, level of ordinary skill, and objective evidence of nonobviousness.',
    lessonAddendum: 'Graham v. John Deere (1966) set the four factual inquiries — these are mandatory before reaching the legal conclusion of obviousness. MPEP 2141 codifies them as the framework every §103 analysis must walk through.',
  },
  4310101: {
    newCorrect: 'Rigid TSM is inconsistent with §103; TSM is a guide, but other rationales (market pressure, design need, obvious-to-try) also apply.',
    lessonAddendum: 'KSR International Co. v. Teleflex Inc. (2007) rejected rigid teaching-suggestion-motivation as the exclusive obviousness test. The Court endorsed a more flexible analysis allowing market pressures, design needs, and "obvious to try" — provided each rationale is supported by articulated reasoning.',
  },
  4310102: {
    newCorrect: 'The rejection lacks articulated reasoning explaining why a person of ordinary skill would have combined the references.',
    lessonAddendum: 'Post-KSR, MPEP 2143 requires examiners to articulate reasoning with rational underpinning — "could combine" is not "would combine." A bare "same art" assertion is the textbook applicant rebuttal opportunity.',
  },
  4310103: {
    newCorrect: 'A nexus between the claimed features and the asserted commercial success or long-felt need.',
    lessonAddendum: 'MPEP 2145 requires the nexus showing — secondary considerations carry weight only when they tie to the claimed invention, not to marketing, pricing, or unclaimed features. Without nexus, even strong commercial-success evidence is discounted.',
  },
  4310104: {
    newCorrect: '"Obvious to try" — choosing among a finite, identified set of predictable solutions with reasonable expectation of success.',
    lessonAddendum: 'The obvious-to-try rationale post-KSR requires both prongs: a finite, identified set of predictable solutions, and a reasonable expectation of success. Open-ended experimentation or unpredictable arts do not satisfy the test.',
  },
  4310105: {
    newCorrect: 'Analogous if from the same field of endeavor or reasonably pertinent to the inventor\'s problem.',
    lessonAddendum: 'MPEP 2141.01(a) sets the two-prong analogous-art test. Either prong is independently sufficient — a reference from a different field can still be analogous if it addresses the same problem the inventor was solving.',
  },
  4310106: {
    newCorrect: 'A reference teaching away undermines motivation to combine and can support nonobviousness when the criticism is specific.',
    lessonAddendum: 'MPEP 2143.01 and 2145 distinguish specific criticism (which can teach away) from mere preference (which cannot). The strength of the teaching-away argument scales with how directly the prior art criticizes the proposed modification.',
  },
  4310107: {
    newCorrect: 'Reasonable expectation of success is required; absence (especially in unpredictable arts) can defeat the rejection.',
    lessonAddendum: 'MPEP 2143 requires reasonable expectation of success as part of the obviousness analysis. In biotech, chemistry, and other unpredictable arts, Federal Circuit decisions repeatedly hold that absent reasonable expectation, even combinable references do not establish obviousness.',
  },

  // ============================================================
  // CRCM
  // ============================================================
  4101803: {
    newCorrect: 'Outreach patterns that exclude protected communities without a defensible reason create fair-lending risk.',
    lessonAddendum: 'Fair lending under ECOA and the Fair Housing Act reaches marketing and outreach, not just credit decisions. Geographic patterns that skip protected communities — even unintentionally — create disparate-impact exposure regulators flag in CRA and fair-lending exams.',
  },
  4101805: {
    newCorrect: 'A tracked implementation plan with owners, dates, procedure updates, training, testing, and evidence of completion.',
    lessonAddendum: 'Regulatory-change management is a process, not a memo. The implementation plan is the audit-defensible artifact — without owners, dates, and validation evidence, regulators will treat the change as unimplemented regardless of intent.',
  },
  4101813: {
    newCorrect: 'A documented analysis showing facts, conditions, rationale, approvals, and required follow-up.',
    lessonAddendum: 'A verbal green light from senior leadership without documented analysis cannot survive examiner scrutiny. The contemporaneous documentation — facts, conditions, rationale, approval, follow-up — is the defensible artifact.',
  },
  4101820: {
    newCorrect: 'Whether transactions meet HMDA coverage and reporting criteria, and whether data-integrity controls failed.',
    lessonAddendum: 'HMDA reportability turns on the coverage rules — covered institution, covered loan, application complete enough to require reporting. Beyond coverage, data integrity controls must hold; CFPB has imposed material penalties for systemic LAR errors.',
  },
  4101828: {
    newCorrect: 'Controls identify SCRA/MLA-protected customers and support required rate, fee, disclosure, and servicing treatment.',
    lessonAddendum: 'Military-status protections under SCRA and MLA create rate caps, fee restrictions, and servicing obligations. The control framework has to identify protected customers at origination and through servicing — failure to identify is the failure pattern in enforcement actions.',
  },
  4106847: {
    newCorrect: 'Review the script change, customer impact, vendor monitoring, complaints, and corrective action.',
    lessonAddendum: 'Servicer script drift away from approved language is a UDAAP issue and a third-party-risk issue. The compliance response examines the change, quantifies impact, traces how monitoring missed it, and drives corrective action.',
  },
  4106848: {
    newCorrect: 'Identify the full affected population, correct the root cause, reimburse as appropriate, and validate the fix.',
    lessonAddendum: 'A refund population is everyone affected by the same root cause — not just complainers. Defensible remediation goes population-wide, validates the fix held, and documents the analytical basis for the population definition.',
  },
  4106851: {
    newCorrect: 'Discretionary pricing without documentation can create unexplained disparities and weak monitoring evidence.',
    lessonAddendum: 'Pricing exceptions are not the problem per se — undocumented exceptions are. The compliance defense is contemporaneous justification (customer relationship, competitor pricing, retention) and monitoring that surfaces disparities by protected class.',
  },
  4106855: {
    newCorrect: 'Customer data needs access controls, retention limits, secure storage, and disposal under safeguards rules.',
    lessonAddendum: 'GLBA Safeguards and the FTC\'s revised Safeguards Rule require access controls, encryption, retention/disposal procedures, and monitoring. A shared drive without controls is an inventory-and-remediation event, not a paperwork update.',
  },
  4106859: {
    newCorrect: 'The enrollment design may be unfair or deceptive if it steers customers into avoidable fees without clear choice.',
    lessonAddendum: 'UDAAP analysis of default settings asks whether the design provided meaningful, informed choice or steered the consumer into fees they would not have selected. CFPB enforcement actions on overdraft-opt-in defaults are the canonical examples.',
  },

  // ============================================================
  // AIGP
  // ============================================================
  4101902: {
    newCorrect: 'Whether the added data is necessary, permitted, proportionate, protected, and aligned with original purpose.',
    lessonAddendum: 'GDPR purpose-limitation and minimization principles apply just as strongly to AI training data. The questions stack: was collection lawful, is reuse purpose-compatible, are minimization and security controls in place, and does the DPIA cover the new processing.',
  },
  4101903: {
    newCorrect: 'Human role is nominal — reviewers lack practical ability to understand, challenge, or override the output.',
    lessonAddendum: 'Rubber-stamp review fails EU AI Act Article 14 and any meaningful operationalization of human-in-the-loop. The Article 14 test is whether the overseer actually can understand, monitor, interpret, and override — not whether a button exists.',
  },
  4101907: {
    newCorrect: 'Tell users when they are interacting with AI, with clear paths for help, correction, or escalation.',
    lessonAddendum: 'EU AI Act Article 50 and parallel transparency regimes set disclosure timing at the start of the interaction, in plain language. Late or buried disclosure does not satisfy the obligation — and undermines trust independently of the legal question.',
  },
  4101909: {
    newCorrect: 'Governance is not feasible because the company does not know what systems exist or how they are used.',
    lessonAddendum: 'Unknown-model-zoo problems are the AI-governance equivalent of shadow IT. The first remediation is discovery and inventory — controls cannot reach systems the program does not know about.',
  },
  4101913: {
    newCorrect: 'Aggregate accuracy hides subgroup harm; evaluation should examine performance across relevant populations.',
    lessonAddendum: 'NIST AI RMF and the EU AI Act both require disaggregated evaluation. A 95% aggregate accuracy that masks 60% performance on a protected subgroup is the classic failure pattern — and the one regulators look for first.',
  },
  4101914: {
    newCorrect: 'Lifecycle ownership with reassignment, periodic review, and criteria for suspension or retirement.',
    lessonAddendum: 'A retirement plan is the often-missing AI-governance element. Without explicit criteria — drift thresholds, regulatory changes, business deprecation — models persist past their useful and safe lifespan.',
  },
  4101916: {
    newCorrect: 'Documentation connecting the model to its use case, controls, owners, and escalation path.',
    lessonAddendum: 'Model cards as operational artifacts (vs marketing material) bind a system to its governance context: intended use, limitations, controls, owners, escalation routes. The limits section is what differentiates a real card from a brochure.',
  },
  4101919: {
    newCorrect: 'Risk tiering, affected-person analysis, controls, sign-off gates, and review depth matched to potential harm.',
    lessonAddendum: 'Risk-tier gates are the operational hinge of an AI governance program. The same review depth for hiring AI and meeting-room booking AI is not risk-based — the tiering and the matched control set are what make the framework defensible.',
  },
  4101921: {
    newCorrect: 'Which obligations belong to provider vs deployer, and what evidence is needed for the intended use.',
    lessonAddendum: 'The EU AI Act assigns distinct obligations to providers and deployers. Many failures arise from companies assuming they are deployers when they substantially modify the system (and become providers), or vice versa. Clarify role per system.',
  },
  4101922: {
    newCorrect: 'Test factuality, citation reliability, uncertainty handling, escalation, and user harm in the intended context.',
    lessonAddendum: 'Hallucination evaluation in legal-help contexts has to test more than perplexity — it has to test factual grounding, citation accuracy, the system\'s handling of uncertainty, and what happens when a user is on a harmful path. The eval suite reflects the intended use.',
  },
  4101925: {
    newCorrect: 'Documented adversarial testing — what was tested, what failed, what was fixed, what residual risk remains.',
    lessonAddendum: 'Pre-launch adversarial testing is governance evidence, not just engineering work. The four elements — tested, failed, fixed, residual — are what an auditor or regulator needs to see to assess whether the rollout was responsible.',
  },
  4106873: {
    newCorrect: 'Customer data may be disclosed to an unauthorized service without proper controls, notices, or terms.',
    lessonAddendum: 'A prompt-box spill to an unauthorized service is a textbook data-protection incident — DPA breach, potential GDPR or sectoral exposure, and an internal control failure. Stop the flow, notify, and run the breach playbook.',
  },
  4120001: {
    newCorrect: 'Real-time remote biometric ID in public spaces for law enforcement is prohibited, with narrow exceptions.',
    lessonAddendum: 'EU AI Act Article 5 baseline-prohibits live remote biometric identification in publicly accessible spaces by law enforcement. The exceptions (specific serious threats, prior authorization, strict safeguards) are narrow and procedurally demanding.',
  },
  4120002: {
    newCorrect: 'High-risk under Annex III — employment recruitment/selection, regardless of whether a human signs off.',
    lessonAddendum: 'Annex III high-risk classification under the EU AI Act is structural, not contingent on the level of human review. A system that filters or ranks candidates is in scope even if a recruiter formally makes the decision.',
  },
  4120003: {
    newCorrect: 'Relevant, sufficiently representative, as error-free and complete as possible, with bias examination and mitigation.',
    lessonAddendum: 'Article 10 sets data-governance requirements for high-risk training, validation, and test datasets. The standards — relevance, representativeness, accuracy, bias mitigation — are documented in the technical file and reviewed during conformity assessment.',
  },
  4120004: {
    newCorrect: 'The overseer must actually understand the system, monitor, interpret outputs, override, and intervene.',
    lessonAddendum: 'Article 14 oversight is operational, not nominal. Information, time, authority, and capability — all four — have to be present for the overseer. A Yes/No button without context, training, or override power does not satisfy the standard.',
  },
  4120005: {
    newCorrect: 'Natural persons must be informed they are interacting with AI, clearly, unless obvious from context.',
    lessonAddendum: 'Article 50 transparency for AI systems interacting with natural persons requires clear, distinguishable disclosure. The obviousness exception is narrow and tested against a reasonably well-informed person standard — not against the easiest assumption.',
  },
  4120006: {
    newCorrect: 'Presumed systemic risk — adds evaluation, mitigation, incident reporting, and cybersecurity obligations.',
    lessonAddendum: 'GPAI above the 10^25 FLOPs threshold triggers the systemic-risk regime on top of baseline GPAI duties. Providers run model evaluations, manage systemic risks, report serious incidents, and maintain cybersecurity — significant operational lift.',
  },
  4120007: {
    newCorrect: 'No — the AI Act assessment integrates into the existing third-party conformity procedure for the underlying product.',
    lessonAddendum: 'Where the high-risk AI system is a safety component of a product already subject to third-party conformity assessment (medical devices, machinery, etc.), the AI Act\'s conformity assessment runs through that existing procedure — not internal control.',
  },
  4120008: {
    newCorrect: 'Govern — the cross-cutting function for policies, roles, accountability; without it, the others lack mandate.',
    lessonAddendum: 'The NIST AI RMF Govern function is the foundation. Inventory, testing, and remediation can exist tactically, but without executive sponsorship, acceptable-use policy, and named roles, those activities have no organizational mandate or escalation path.',
  },
  4120009: {
    newCorrect: 'A use-case- or sector-specific application of the AI RMF tailored to deployment context and risk tolerance.',
    lessonAddendum: 'A NIST AI RMF Profile operationalizes the framework for a specific context — it selects, prioritizes, and tailors functions, categories, and subcategories. Generic adoption is rarely useful; the Profile is where the framework meets the deployment.',
  },
  4120010: {
    newCorrect: 'Accountable/Transparent and Explainable/Interpretable — the system lacks disclosure and reasoning for oversight.',
    lessonAddendum: 'NIST AI RMF trustworthy-AI characteristics include valid/reliable, safe, secure/resilient, accountable/transparent, explainable/interpretable, privacy-enhanced, and fair. A model can be technically valid yet fail accountability and explainability — that gap is the diagnosis here.',
  },
  4120011: {
    newCorrect: 'Quantifying the disparity is Measure; deciding what to do is Manage; the functions run in sequence.',
    lessonAddendum: 'The Measure/Manage boundary in NIST AI RMF is clean once you see it. Measure produces evidence; Manage produces decisions and actions on that evidence. The disparity finding crosses the boundary as it moves from analytical to operational.',
  },

  // ============================================================
  // API Inspectors
  // ============================================================
  4102003: {
    newCorrect: 'Whether the work is classified correctly and reviewed under applicable code before execution.',
    lessonAddendum: 'API 510 distinguishes repairs from alterations by the nature and scope of the change. Misclassification — calling an alteration a repair — bypasses required engineering review and re-rating, and creates significant downstream PHA exposure.',
  },
  4102004: {
    newCorrect: 'Do not rely on exterior appearance; select methods based on damage mechanisms and service.',
    lessonAddendum: 'Corrosion under insulation, dead-leg corrosion, and erosion-corrosion all hide behind clean exterior paint. The method selection (UT, RT, profile RT, guided wave) has to match the credible mechanism — not the ease of access.',
  },
  4102007: {
    newCorrect: 'Evaluate measured condition against applicable acceptance, remaining-life, or fitness-for-service criteria.',
    lessonAddendum: 'Metal loss is not a verdict in itself — it is an input to the acceptance, remaining-life, or FFS analysis under API 510/570 and API 579. The right comparison depends on whether the loss is general, local, or pitting.',
  },
  4102010: {
    newCorrect: 'Focus inspection on credible damage mechanisms and consequence rather than treating every item alike.',
    lessonAddendum: 'Risk-based inspection under API 580/581 reallocates inspection effort based on likelihood and consequence. The discipline is targeting effort where it matters most — and accepting that lower-risk equipment carries longer intervals.',
  },
  4102011: {
    newCorrect: 'Verify applicable test or alternative evaluation requirements before returning to service.',
    lessonAddendum: 'API 510 covers pressure-test requirements after repair or alteration. Alternative evaluation paths (extensive NDE in lieu of test) exist under specific conditions — always verify the applicable section before assuming a test is or is not required.',
  },
  4102012: {
    newCorrect: 'A documented engineering evaluation must support the new conditions; required records or markings must be updated.',
    lessonAddendum: 'Operating below original design pressure may permit alternative inspection or testing under specific API 510 provisions. The trigger is documented engineering evaluation and updated equipment records — not informal practice.',
  },
  4102019: {
    newCorrect: 'At representative and higher-risk locations based on corrosion mechanisms, geometry, history, and consequence.',
    lessonAddendum: 'TML placement under API 570 is risk-informed: dead legs, injection points, mixing points, elbows, high-corrosion service. Convenient-access TMLs that miss the real damage zones are the failure pattern — and exactly what FFS findings flag.',
  },
  4102022: {
    newCorrect: 'Engineering review of design conditions, materials, damage mechanisms, inspection plan, and approvals or rerating.',
    lessonAddendum: 'Change of service triggers full Management of Change under API 510 — the equipment, the inspection plan, and any required re-rating all come into scope. Skipping this is exactly how subtle service mismatches become process safety events.',
  },
  4102023: {
    newCorrect: 'Verify applicable code, material, thickness, service, procedure, and exemption requirements before accepting.',
    lessonAddendum: 'Heat treatment requirements under ASME and API depend on a stack of factors: code edition, material, thickness, service severity, welder qualifications, and exemptions. Each layer needs explicit verification — exemptions exist but are conditional.',
  },
  4106920: {
    newCorrect: 'Evaluate localized metal loss against applicable criteria; update remaining-life and determine repair or FFS.',
    lessonAddendum: 'Pit-depth surprises trigger API 510/570 acceptance evaluation and, where local thinning is severe, API 579 FFS analysis. The remaining-life calculation drives the inspection interval; severity drives the repair decision.',
  },
  4106922: {
    newCorrect: 'Ensure specified NDE is performed and accepted before returning equipment to service.',
    lessonAddendum: 'Visual inspection is not NDE. The applicable code section calls out the required NDE — UT, RT, MT, PT — and that examination must be performed and accepted by qualified personnel before the equipment returns to service.',
  },
  4106926: {
    newCorrect: 'Escalate for engineering evaluation or FFS, and risk-based action before continued operation.',
    lessonAddendum: 'Equipment below minimum required thickness requires API 579 FFS or engineering evaluation. Continued operation in the interim needs documented risk-based action — temporary repair, reduced operating envelope, or shutdown.',
  },

  // ============================================================
  // CDFM
  // ============================================================
  4102101: {
    newCorrect: 'Obligations record legal commitments before cash, supporting control, forecasting, and funds availability.',
    lessonAddendum: 'Obligations are the legal-commitment record that disciplines federal financial execution. Recorded contemporaneously, they support funds-availability tracking, forecasting, and Antideficiency Act compliance — and they are the audit-trail backbone for FIAR.',
  },
  4102102: {
    newCorrect: 'Do not incur the obligation until funds are legally available, or reduce the requirement.',
    lessonAddendum: 'Antideficiency Act exposure starts the moment funds are obligated without legal availability. The right move when "almost enough" funds exist is to defer, reduce, or seek reprogramming — never to incur first and resolve later.',
  },
  4102109: {
    newCorrect: 'Year-end pressure can lead to weak justification, poor prioritization, or improper use of funds.',
    lessonAddendum: 'September shopping carts are the textbook fiscal-year-end pattern — spend-or-lose dynamics produce weak requirements analysis and ADA risk. Contemporaneous documentation of necessity and prioritization is the audit defense.',
  },
  4102114: {
    newCorrect: 'A corrective-action plan that is measurable, time-bound, owned, and independently validated.',
    lessonAddendum: 'Open audit findings close only when the corrective action is independently verified, not just self-attested. The four elements — measurable, dated, owned, validated — are the IG and audit standard for closure.',
  },
  4102118: {
    newCorrect: 'OMB supports executive budget; CBO supports Congress; Treasury manages central federal finance.',
    lessonAddendum: 'The three central institutions have non-overlapping roles: OMB serves the executive, CBO serves the legislative, Treasury handles central financial operations including cash management and federal financial reporting. Knowing the lane keeps requests on the right desk.',
  },
  4102119: {
    newCorrect: 'Authorization permits or shapes the program; budget authority to obligate comes through appropriations.',
    lessonAddendum: 'The authorization-appropriation distinction is foundational. Authorization establishes the program and its legal contours; appropriation provides the obligational authority. Activity without both is unauthorized — or, more commonly, results in an ADA event.',
  },
  4102120: {
    newCorrect: 'CRs provide temporary, limited funding authority and often restrict new starts, rates of operation, or new activities.',
    lessonAddendum: 'Continuing resolutions are the default fiscal posture when appropriations lapse. The standard restrictions — no new starts, no rate-of-operation increases, no new activities — vary by specific CR language and must be read each time.',
  },
  4102123: {
    newCorrect: 'Prioritized response with clear ownership, controls, monitoring, and escalation proportional to risk.',
    lessonAddendum: 'Risk-response selection — accept, avoid, mitigate, transfer — depends on risk severity and tolerance. The operational discipline is named ownership, proportional controls, and an escalation path the organization will actually use.',
  },
  4102126: {
    newCorrect: 'Prompt-payment rules and internal controls require timely processing and create interest or compliance exposure.',
    lessonAddendum: 'Prompt Payment Act creates interest exposure for late vendor payments, and internal controls require contemporaneous documentation of receiving reports and invoice approval. Late invoice processing aggregates both into a recurring finding.',
  },
  4102127: {
    newCorrect: 'Budgetary accounting tracks authority and execution; proprietary tracks position, cost, and net position.',
    lessonAddendum: 'Federal financial systems run dual-track: budgetary (tracking authority — appropriations, apportionments, allotments, commitments, obligations, outlays) and proprietary (tracking financial position — assets, liabilities, net position, cost). Both views describe the same activity.',
  },
  4106940: {
    newCorrect: 'Whether the appropriation\'s purpose, time, and amount rules allow it to fund the requirement.',
    lessonAddendum: 'The "wrong color of money" test is appropriations-law shorthand for the purpose, time, and amount rules under 31 U.S.C. § 1301 and related provisions. Failing any one makes the appropriation the wrong source for the requirement.',
  },

  // ============================================================
  // Certified General Appraiser
  // ============================================================
  4102200: {
    newCorrect: 'Legally permissible, physically possible, financially feasible, maximally productive — supported by evidence.',
    lessonAddendum: 'Highest-and-best-use analysis under USPAP is the four-prong sequential test. The maximally-productive prong is the tiebreaker among feasible options. The discipline is evidence — the appraiser must support each prong with market data, not assertion.',
  },
  4102210: {
    newCorrect: 'Contract rent, market rent, lease term, and risk — and how they affect the property interest valued.',
    lessonAddendum: 'Above-market or below-market contract rent creates a leased-fee interest that differs from fee simple. The appraiser either capitalizes contract rent at a yield reflecting the rent risk, or values market rent and separately accounts for the lease differential.',
  },
  4106962: {
    newCorrect: 'Adjust or analyze the sale for financing terms so it reflects market-equivalent cash conditions.',
    lessonAddendum: 'Seller financing, atypical terms, or below-market interest distort the cash-equivalent sale price. The appraiser converts the transaction to a cash equivalent — through cash-equivalency analysis — before using it as a comp.',
  },
  4106967: {
    newCorrect: 'The value opinion reflects conditions as of the effective date; later events handled only if relevant.',
    lessonAddendum: 'Effective-date discipline is foundational under USPAP. Events after the effective date — even a storm that affects the property — do not change the value opinion unless the assignment specifically addresses retrospective or post-event scenarios.',
  },
  4106972: {
    newCorrect: 'Use a clearly disclosed extraordinary assumption if credible results require assuming a condition.',
    lessonAddendum: 'Extraordinary assumptions under USPAP allow the appraiser to proceed when a condition affecting value (environmental, structural, legal) is uncertain. The disclosure is explicit — what is assumed, why, and the potential effect if the assumption is wrong.',
  },
  4106976: {
    newCorrect: 'Lease-up time, market vacancy, absorption, concessions, and risk before applying stabilized income.',
    lessonAddendum: 'Stabilized-NOI valuation skips the lease-up period — which is exactly where the risk and discount live. Discounted-cash-flow with explicit lease-up assumptions, or a value as-is plus separate stabilized-value calculation, is the defensible approach.',
  },

  // ============================================================
  // Clinical Research
  // ============================================================
  4102301: {
    newCorrect: 'Escalate to the investigator and follow protocol eligibility criteria rather than enrolling for convenience.',
    lessonAddendum: 'Eligibility wobble at screening is exactly when investigator judgment under the protocol matters most. Enrolling a participant who does not clearly meet criteria creates GCP and data-integrity exposure — and may compromise the participant\'s safety.',
  },
  4102303: {
    newCorrect: 'Participant safety assessment and AE documentation or escalation through the site process.',
    lessonAddendum: 'Clinic-closing-time pressure does not change the obligation. Safety assessment is the first step; documentation and escalation through the established site process follow — same standard as any other visit.',
  },
  4102304: {
    newCorrect: 'The site may lack evidence the task was properly delegated to qualified, trained personnel.',
    lessonAddendum: 'Delegation log gaps are among the most common 483 findings. The log evidences PI delegation, the qualifications and training of the delegated person, and the scope of the delegation. Missing entries cannot be cured at audit time.',
  },
  4102309: {
    newCorrect: 'Notify the investigator promptly and follow protocol, sponsor, IRB, and regulatory reporting requirements.',
    lessonAddendum: 'SAE timelines are protocol- and regulation-driven — typically 24 hours from site awareness for life-threatening or fatal events. The site\'s job is contemporaneous notification through every required channel; do not consolidate or delay.',
  },
  4102311: {
    newCorrect: 'Document and escalate, assess impact, and follow sponsor or protocol instructions without altering records improperly.',
    lessonAddendum: 'Wrong-stratum assignments are deviations, not errors to be quietly corrected. The right path is contemporaneous documentation, impact assessment, sponsor consultation, and any required CAPA — never altering the original record to hide the deviation.',
  },
  4102312: {
    newCorrect: 'Make a dated late entry that identifies who wrote it, what was added, and why — without backdating.',
    lessonAddendum: 'ALCOA-CCEA principles allow late entries when properly identified as such. The cure for a forgotten note is a dated, signed addendum; the violation is backdating to suggest contemporaneous recording when the data are integrity-compromised.',
  },
  4102314: {
    newCorrect: 'Records, staff explanations, delegation, source data, and practices all align with protocol and procedures.',
    lessonAddendum: 'Inspection readiness is about congruence — what the records say, what staff describe, what source documents show, and what daily practice looks like must all agree with the protocol. Inspectors triangulate; misalignment surfaces fast.',
  },
  4102315: {
    newCorrect: 'Outside the window unless protocol or approved guidance allows otherwise — escalate before randomizing.',
    lessonAddendum: 'Visit-window protocol deviations require documented assessment. Randomizing a participant outside the window without sponsor or protocol authorization compromises both data integrity and participant safety considerations the window was designed to address.',
  },
  4102317: {
    newCorrect: 'Help ensure the final study record is complete, accurate, traceable, and ready for retention or inspection.',
    lessonAddendum: 'A last binder check before closeout reconciles the trial master file with the investigator site file, confirms regulatory documents are current, and ensures essential records meet retention requirements. It is the controlled handoff from active conduct to archive.',
  },
  4102318: {
    newCorrect: 'Pause and support the consent discussion so understanding and voluntariness are addressed.',
    lessonAddendum: 'Teach-back failure during consent signals comprehension gaps — and informed consent requires comprehension, not signature. The right action is to pause enrollment, address the gaps, and document the supplemental discussion before proceeding.',
  },
  4102324: {
    newCorrect: 'Treat as potentially important — requires documented assessment, escalation, reporting, and corrective action.',
    lessonAddendum: '"Important deviations" under ICH GCP are those that may significantly affect participant safety, data integrity, or trial conduct. They require contemporaneous assessment, escalation through site-sponsor-IRB channels, and corrective action — not informal handling.',
  },
  4102327: {
    newCorrect: 'Quarantine product if needed, document the excursion, notify, and await disposition before use.',
    lessonAddendum: 'Temperature excursions on study product follow GMP-aligned excursion management. The product is quarantined pending sponsor and QA disposition; documentation captures the excursion magnitude, duration, and any cumulative-effect analysis required before release.',
  },
  4102329: {
    newCorrect: 'Retain essential records for the required period and keep them accessible for audit or inspection.',
    lessonAddendum: 'Record-retention requirements under ICH E6, FDA 21 CFR 312, and EU CTR vary by jurisdiction and sponsor — typically a minimum of 15 years for FDA-regulated trials, longer in some EU contexts. The records must remain accessible and reconstructable throughout the period.',
  },
  4106985: {
    newCorrect: 'The original data may not be preserved as attributable, legible, contemporaneous, original, and accurate.',
    lessonAddendum: 'ALCOA (and ALCOA+) sets the source-data integrity standard. Sticky notes that get transcribed and discarded fail "original" — the original record is what was first captured, and it must be preserved regardless of subsequent transcription.',
  },
  4106989: {
    newCorrect: 'Do not enroll unless protocol-allowed or sponsor/IRB-approved procedures support an exception.',
    lessonAddendum: 'Eligibility criteria are protocol-bound; clinical intuition does not override them. Documented exception procedures exist for some protocols, but they require sponsor and IRB authorization in advance — never analyst-initiated rounding or workarounds.',
  },
}

// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the Bank Compliance / AML roadmap (~300 questions across 5 chapters +
// Capstone).
//
// BC_SUB_TOPICS groups each chapter's questions into 5-9 lesson-shaped
// clusters that match the way a BSA Officer would teach the material on a
// whiteboard.
//
// BC_MENTOR_HINTS overrides the generic BC scaffold hint with a one-line,
// second-person nudge that names the regulatory hook or analytical move
// without giving the answer — voice: BSA Officer mentoring a junior
// compliance analyst.
//
// BC_CORRECT_SHORTENED trims `correct` strings flagged by the length-
// heuristic audit (correct ≥1.8x longer than longest wrong AND ≥20 chars
// longer). Trimmed explanatory clauses are reattached via `lessonAddendum`
// so no information is lost.

export const BC_SUB_TOPICS: Record<string, number[]> = {
  // -------------------- Chapter 1: Bank Compliance Foundations --------------
  'BSA Framework': [
    4420000, 4420001, 4420002, 4420003, 4420004, 4420005, 4420006,
  ],
  'AML Pillars': [
    4200080, 4200081, 4200082, 4420007, 4420008, 4420009, 4420010, 4420011,
    4420012,
  ],
  'Regulators (OCC/Fed/FDIC/FinCEN/OFAC)': [
    4420013, 4420014, 4420015, 4420016, 4420017,
  ],
  'Patriot Act 2001': [
    4420018, 4420019, 4420020, 4420021, 4420022,
  ],
  'Beneficial Ownership Rule': [
    4420023, 4420024, 4420025, 4420026, 4420027,
  ],
  'CDD Requirements': [
    4420028, 4420029, 4420030, 4420031, 4420032,
  ],
  'Enhanced Due Diligence': [
    4420033, 4420034, 4420035, 4420036, 4420037,
  ],
  'OFAC Sanctions Basics': [
    4420038, 4420039, 4420040, 4420041, 4420042,
  ],
  'Reporting (SAR/CTR/8300)': [
    4420043, 4420044, 4420045, 4420046,
  ],

  // -------------------- Chapter 2: KYC and Customer Risk --------------------
  'CIP Procedures': [
    4107412, 4420100, 4420101, 4420102, 4420103, 4420104, 4420105,
  ],
  'KYC at Account Opening': [
    4107883, 4420106, 4420107, 4420108, 4420109, 4420110, 4420111,
  ],
  'Beneficial Ownership Identification': [
    4107413, 4107894, 4420112, 4420113, 4420114, 4420115, 4420116, 4420117,
  ],
  'Risk Ratings': [
    4420118, 4420119, 4420120, 4420121, 4420122, 4420123,
  ],
  'High-Risk Customer Types': [
    4420124, 4420125, 4420126, 4420127, 4420128, 4420129,
  ],
  'PEPs': [
    4107424, 4107882, 4420130, 4420131, 4420132, 4420133, 4420134,
  ],
  'Country Risk': [
    4420135, 4420136, 4420137, 4420138, 4420139,
  ],
  'Periodic Review': [
    4420140, 4420141, 4420142, 4420143,
  ],

  // -------------------- Chapter 3: Sanctions and Screening ------------------
  'OFAC Framework': [
    4420200, 4420201, 4420202, 4420203, 4420204, 4420205, 4420206,
  ],
  'List Screening': [
    4107416, 4420207, 4420208, 4420209, 4420210, 4420211, 4420212,
  ],
  '50 Percent Rule': [
    4107886, 4420213, 4420214, 4420215, 4420216, 4420217,
  ],
  'Apparent Violations & Reporting': [
    4107896, 4420218, 4420219, 4420220, 4420221, 4420222, 4420223,
  ],
  'Russia Sanctions': [
    4107426, 4420224, 4420225, 4420226, 4420227, 4420228, 4420229, 4420230,
  ],
  'Wind-Down Licenses': [
    4420231, 4420232, 4420233, 4420234, 4420235,
  ],
  'Trade-Based ML & Dual-Use': [
    4107417, 4107887, 4420236, 4420237, 4420238, 4420239,
  ],
  'Secondary Sanctions': [
    4420240, 4420241, 4420242, 4420243,
  ],

  // -------------------- Chapter 4: Transaction Monitoring and Alerts -------
  'Rule-Based Monitoring': [
    4107414, 4420300, 4420301, 4420302, 4420303, 4420304, 4420305,
  ],
  'ML/AI Monitoring': [
    4420306, 4420307, 4420308, 4420309, 4420310,
  ],
  'False Positive Management': [
    4420311, 4420312, 4420313, 4420314, 4420315,
  ],
  'Alert Disposition': [
    4107415, 4420316, 4420317, 4420318, 4420319, 4420320, 4420321,
  ],
  'Structuring Variants': [
    4107884, 4107895, 4420322, 4420323, 4420324, 4420325, 4420326,
  ],
  'Trade-Based ML Signals': [
    4420327, 4420328, 4420329, 4420330, 4420331,
  ],
  'Wire Fraud Signals': [
    4107885, 4420332, 4420333, 4420334, 4420335, 4420336,
  ],
  'Crypto / VASP Touchpoints': [
    4107425, 4420337, 4420338, 4420339, 4420340,
  ],
  'SAR Narratives (TM)': [
    4420341, 4420342, 4420343,
  ],

  // -------------------- Chapter 5: Investigations, SARs, QC -----------------
  'SAR Filing Requirements': [
    4107420, 4107891, 4420400, 4420401, 4420402, 4420403, 4420404, 4420405,
    4420406,
  ],
  'SAR Narrative Discipline': [
    4107418, 4420407, 4420408, 4420409, 4420410, 4420411, 4420412,
  ],
  'Investigation Procedures': [
    4107419, 4107888, 4107889, 4420413, 4420414, 4420415, 4420416, 4420417,
    4420418,
  ],
  'Whistleblower / Escalations': [
    4107421, 4107890, 4420419, 4420420, 4420421,
  ],
  'Information Sharing (314a/b)': [
    4420422, 4420423, 4420424, 4420425,
  ],
  'Quality Control & Model Validation': [
    4107892, 4420426, 4420427, 4420428, 4420429, 4420430,
  ],
  'Enforcement & Penalties': [
    4420431, 4420432, 4420433, 4420434, 4420435,
  ],
  'Recent Enforcement Cases': [
    4420436, 4420437, 4420438, 4420439, 4420440,
  ],

  // -------------------- Capstone: First Heritage Bank -----------------------
  'First Heritage: Initial Assessment': [
    4420500, 4420501, 4420502, 4420503, 4420504, 4420505, 4420506, 4420507,
    4420508, 4420509,
  ],
  'First Heritage: TM Tuning': [
    4420510, 4420511, 4420512, 4420513, 4420514, 4420515, 4420516, 4420517,
    4420518, 4420519,
  ],
  'First Heritage: BO Refresh': [
    4420520, 4420521, 4420522, 4420523, 4420524, 4420525, 4420526, 4420527,
    4420528, 4420529,
  ],
  'First Heritage: SAR Backlog': [
    4420530, 4420531, 4420532, 4420533, 4420534, 4420535, 4420536, 4420537,
    4420538, 4420539,
  ],
  'First Heritage: Regulator Reporting': [
    4420540, 4420541, 4420542, 4420543, 4420544, 4420545, 4420546, 4420547,
    4420548, 4420549,
  ],
}

export const BC_MENTOR_HINTS: Record<number, string> = {
  // ---------- Chapter 1 inline (legacy three) ----------
  4200080: 'Three lines: ops execute, compliance oversees, audit tests. Day-to-day monitoring lives in the first line, not the second.',
  4200081: 'The "four pillars" plus the 2018 CDD fifth — controls, officer, training, testing, ongoing CDD. Outputs like CTRs are not the pillars.',
  4200082: 'A finding is closed by owner + plan + milestones + validation. Policy edits without remediation reopen at the next exam.',

  // ---------- Chapter 1: BSA Framework ----------
  4420000: 'The 1970 statute is a paper-trail law — records and reports for later investigators. It is not a prohibition or a blocking regime.',
  4420001: 'BSA coverage flows from 31 U.S.C. § 5312\'s "financial institution" definition. Far broader than commercial banks; narrower than every business.',
  4420002: 'Annunzio-Wylie 1992 is the bridge between recordkeeping and program-based AML. SAR authority and program-mandate authority come from here.',
  4420003: 'The 1994 statute targeted check cashers and money transmitters. MSB registration with Treasury is the headline.',
  4420004: 'List the pillars by what regulators test against — not by what reports the program produces. Outputs are not structure.',
  4420005: 'Section 326 of the Patriot Act is the CIP statute. The other amendments are 312 (correspondent/private banking) and 314 (info sharing).',
  4420006: 'BSA penalties run civil and criminal, institutional and individual. Examiners count per-violation; recent matters reach hundreds of millions.',

  // ---------- Chapter 1: AML Pillars ----------
  4420007: 'Internal controls = the documented spine: policies, procedures, risk-rating methodology, risk assessment. Not satisfaction surveys.',
  4420008: 'A BSA officer needs authority, independence, resources, and a reporting line to the board. Title alone is the classic finding.',
  4420009: 'Independent means independent of the program being tested. Self-assessment is not the answer the rule contemplates.',
  4420010: 'Training has to be role-tailored, ongoing, attended, and tested. One annual module taken by everyone is the textbook weakness.',
  4420011: 'Ongoing CDD is what the 2018 rule added — monitoring + refresh, not just identity at opening.',
  4420012: 'Governance is woven through every pillar, not numbered alongside them. Examiners test board engagement separately.',

  // ---------- Chapter 1: Regulators ----------
  4420013: 'National bank → OCC. Prudential-regulator mapping is the first thing to clarify on any new engagement.',
  4420014: 'BHCs and state member banks → Fed. The holding-company AML program is supervised at that level.',
  4420015: 'FDIC is the primary federal regulator for state non-member insured banks. Insurance ≠ supervision.',
  4420016: 'FinCEN administers the BSA, receives SARs/CTRs, processes 314(a). It does not run prudential exams.',
  4420017: 'OFAC enforces strict-liability sanctions on US persons including foreign branches of US banks. Intent is not required.',

  // ---------- Chapter 1: Patriot Act ----------
  4420018: '314(a) is law-enforcement-initiated through FinCEN — banks search records on named subjects and report matches.',
  4420019: '314(b) is voluntary bank-to-bank sharing with a safe harbor. SAR filings themselves are never shared bank-to-bank.',
  4420020: 'Section 312 EDD targets two account types: correspondent and private banking (the $1M-aggregate non-US-person test).',
  4420021: 'CIP collects four data elements: name, DOB, address, and an identification number. Memorize the four.',
  4420022: 'The bank-facing BO rule is the 2016/2018 CDD Rule, not Patriot 2001 and not the Corporate Transparency Act. Keep the three straight.',

  // ---------- Chapter 1: Beneficial Ownership Rule ----------
  4420023: 'The ownership-prong threshold is 25%. Up to four people; sometimes zero. A lower internal trigger is a policy choice, not the rule.',
  4420024: 'The control prong is exactly one person with significant managerial responsibility. The board is not the control prong.',
  4420025: 'Reliance on the certification is conditional on no contrary facts. Willful blindness is not a defense.',
  4420026: 'Exemptions are narrow and tied to entities whose ownership is already disclosed or regulated. Tenure does not create an exemption.',
  4420027: 'BO refresh is event-driven on a risk basis — ownership changes, control changes. Not "never" and not "every quarter."',

  // ---------- Chapter 1: CDD Requirements ----------
  4420028: 'Documentary or non-documentary methods are both permitted under CIP. The discipline is documenting which methods were used.',
  4420029: 'CIP notice must precede or accompany opening, in a manner the customer can see. Notarization is not the standard.',
  4420030: 'Nature-and-purpose is the baseline transaction monitoring needs. It is not identity, and it is not creditworthiness.',
  4420031: 'Ownership and control prongs run in parallel. The same person can satisfy both, but both are documented.',
  4420032: 'Risk rating blends customer, geography, product, and ownership inputs. Credit score is a different question.',

  // ---------- Chapter 1: EDD ----------
  4420033: 'PEPs warrant EDD — source of wealth, source of funds, senior approval, enhanced monitoring. Not refusal, not standard CDD.',
  4420034: 'FATF "call for action" jurisdictions drive countermeasures aligned with FinCEN advisories. Not universal foreign rejection.',
  4420035: 'Section 312 correspondent EDD asks about the respondent\'s AML controls and any nesting. Self-attestation alone does not satisfy it.',
  4420036: 'Private banking under Section 312 is a three-part definition: $1M aggregate, non-US person, officer liaison. All three or none.',
  4420037: 'Enhanced ongoing monitoring is the EDD half that examiners focus on in mature programs. EDD at opening alone is the trap.',

  // ---------- Chapter 1: OFAC Basics ----------
  4420038: 'SDN matches are blocked, not silently rejected, and reported to OFAC within 10 business days. Tipping off is forbidden.',
  4420039: 'SSI prohibits specific transaction types (new debt, new equity) — narrower than SDN. Treating SSI as SDN over-blocks.',
  4420040: 'Block vs reject: blockable property interest → block; prohibited transaction with no blockable interest → reject. Both get 10-day reports.',
  4420041: 'General licenses are categorical and self-executing; specific licenses are issued to a named applicant on application.',
  4420042: 'The 50% Rule reaches unnamed entities via aggregate blocked-person ownership at or above 50%. Beneficial-ownership data must feed sanctions screening.',

  // ---------- Chapter 1: Reporting ----------
  4420043: 'Bank SAR threshold: $5K with a suspect, $25K aggregate without. CTR is separate at $10K cash. Do not conflate.',
  4420044: 'SAR clock: 30 calendar days from initial detection, extendable to 60 if no suspect identified. Detection ≠ confirmation.',
  4420045: 'CTRs aggregate by person by business day. Three $4K deposits in one day cross the $10K threshold — file the CTR.',
  4420046: 'Form 8300 is the non-financial trade-or-business cash report, jointly IRS/FinCEN. Not a CTR and not a SAR.',

  // ---------- Chapter 2 inline ----------
  4107412: 'Mismatched addresses on a new business customer need explanation in the file. Pick-one or reject-all are both wrong.',
  4107413: 'Resistance to identifying natural-person owners is itself the AML signal. The CDD rule reaches the people, not the holdcos.',
  4107424: 'PEPs are bankable with EDD — source of wealth, ownership, senior approval. Categorical refusal is not the regulator-preferred posture.',
  4107882: 'Vague offshore explanations + large balances = the textbook profile for documented SOW + SOF + escalation.',
  4107894: 'Nominee directors are placeholders. KYC has to reach the actual control persons behind them.',
  4107883: 'A material change in business purpose invalidates the original profile. Refresh the rating and approvals; do not coast.',

  // ---------- Chapter 2: CIP ----------
  4420100: 'The four CIP elements are name, DOB, address, and TIN. Memorize them; missing one is a write-up regardless of what else is collected.',
  4420101: 'Documentary CIP relies on an unexpired government photo ID. Utility bills support; social media is not a recognized document.',
  4420102: 'Non-documentary verification = independent corroboration (credit bureau, public records, identity vendor) + documentation of why.',
  4420103: 'CIP allows "within a reasonable time after" opening, if the written CIP defines that window and imposes risk-based controls during it.',
  4420104: 'Non-US persons substitute passport / alien ID / government document for the SSN. Every customer has an identifying number — just not always an SSN.',
  4420105: 'CIP retention: five years after account closure. Investigations frequently arrive after the relationship ends.',

  // ---------- Chapter 2: KYC at Opening ----------
  4420106: 'Expected-activity profile = channel, frequency, amount ranges, expected geographies. Service preferences do not feed monitoring.',
  4420107: 'Source of funds explains one wire; source of wealth explains the whole picture. For higher-risk customers, both are documented.',
  4420108: 'Generic occupations ("consultant," "investor") need documented specificity at onboarding. The fix is depth, not rejection.',
  4420109: 'Initial risk score blends customer type, products, geographies, and any negative-news/watchlist hits. RM endorsement is not the model.',
  4420110: 'A 17x variance from the documented cash profile is the alert worth working. Auto-widening the profile to match is the cited "tuning to suppress" finding.',
  4420111: 'Negative-news hits are evaluated for materiality and documented — not auto-rejected and not ignored.',

  // ---------- Chapter 2: BO Identification ----------
  4420112: 'One 100% owner is one beneficial owner under the ownership prong — not four. The 25% threshold is a minimum, not a quota.',
  4420113: 'The control prong is mandatory and applies in every case — exactly one person with significant managerial control.',
  4420114: 'The certification gets reliance unless the bank knows facts that undermine it. Conditional reliance, not absolute.',
  4420115: 'Multi-tier ownership looks through entities to the natural person. The intermediate holdco is not the beneficial owner.',
  4420116: 'Trustee is the identified individual when a trust owns 25%+ of the entity. Beneficiaries are not aggregated.',
  4420117: 'New 25%+ owners are a refresh trigger. The certification is not frozen at onboarding.',

  // ---------- Chapter 2: Risk Ratings ----------
  4420118: 'Risk rating drives diligence depth, monitoring sensitivity, review cadence, and approval level. It is not pricing and not marketing.',
  4420119: 'Weights have to be calibrated to actual experience and documented. Equal-weight or uncalibrated is the finding pattern.',
  4420120: 'Overrides are governed, not banned. Rationale + evidence + second-line approval + population review is the structure.',
  4420121: 'Pure averaging hides high signals behind low ones. Aggregation typically elevates when any factor is high.',
  4420122: 'Refresh cadence is tiered (annual / biennial / triennial) plus event-based triggers. Both halves are required.',
  4420123: 'High rating triggers downstream controls: EDD, tighter thresholds, annual review, senior approval. A rating with no downstream is decorative.',

  // ---------- Chapter 2: High-Risk Customer Types ----------
  4420124: 'MSB = FinCEN-regulated. The bank checks FinCEN registration and state licensure, applies EDD, and monitors. Not categorical refusal.',
  4420125: 'Cash-intensive businesses get EDD + documented expected ranges + structuring monitoring. Bankable, not de-risked.',
  4420126: 'NGOs in conflict zones are a recognized higher-risk category. EDD covers governance, partners, and OFAC controls.',
  4420127: 'No employees + registered-agent address + opaque purpose = shell-company indicator stack. Escalate, do not rubber-stamp.',
  4420128: 'MRBs sit between state legality and federal Schedule I. The 2014 FinCEN guidance + MRB SAR categories form the framework.',
  4420129: 'Nested correspondents amplify visibility loss. EDD covers the respondent\'s customer base and AML program, not just a BIC.',

  // ---------- Chapter 2: PEPs ----------
  4420130: 'US AML rules anchor PEP on foreign officials; domestic senior figures are addressed via risk-based bank policy.',
  4420131: 'Family members and close associates of foreign PEPs carry the same residual risk — that is how illicit funds typically move.',
  4420132: 'PEP risk is residual after office for a documented period. Not permanent, not switch-off-on-day-of-departure.',
  4420133: 'PEP diligence centers on source of wealth — does the overall wealth picture reconcile with the role? SOF alone does not answer it.',
  4420134: 'PEP approval is pre-opening, by designated senior authority, with the full EDD package. After-the-fact approval defeats the control.',

  // ---------- Chapter 2: Country Risk ----------
  4420135: 'FATF "call for action" list is small and specific. Read FATF\'s actual published list, not the geopolitical headlines.',
  4420136: 'Grey list = increased monitoring (EDD, elevated rating). Black list = call for action (countermeasures). Different tiers, different responses.',
  4420137: 'OFAC is mandatory law and sets the floor. FATF tiers sharpen the rating around the edges. Both apply.',
  4420138: 'CPI is one composite-model input. Combine with FATF, OFAC posture, AML mutual evaluations, and own exposure.',
  4420139: 'Counterparty geography of actual flows often matters more than the customer\'s residence. Domestic customer + high-risk corridors is not low risk.',

  // ---------- Chapter 2: Periodic Review ----------
  4420140: 'Tiered cadence — annual/biennial/triennial — is how risk-based AML allocates finite review capacity.',
  4420141: 'Periodic cadence + event-based triggers cover the book together. One without the other under-reviews or over-reacts.',
  4420142: 'A real review checks profile-vs-reality, activity-vs-expected, news, ownership, and rating. Contact-detail refresh is not a review.',
  4420143: 'Closing the loop: re-rate, refresh EDD, adjust monitoring, reset cadence, document rationale. Evidence-without-action is the finding.',

  // ---------- Chapter 3 inline ----------
  4107416: 'Partial sanctions matches resolve on identifiers, not on freezing reflex or customer convenience.',
  4107417: 'Trade finance puts the bank in the shipping chain. Vessel identity, ownership, flag, routing, and cargo all sit in the analysis.',
  4107426: 'Sanctions live in any link of the payment chain — including intermediaries. The full route is the analysis.',
  4107886: 'The 50 Percent Rule extends sanctions through ownership. Names alone are not the screening unit.',
  4107887: '"Equipment" + restricted jurisdiction is the dual-use / export-control red flag. Press for goods, parties, routing, end use.',
  4107896: 'False-positive clearances must show *which* identifiers proved the match wrong. "Not our customer" is not documentation.',

  // ---------- Chapter 3: OFAC Framework ----------
  4420200: 'Comprehensive country programs block broadly; targeted programs hit named persons or specific activities. Different shapes, different procedures.',
  4420201: 'North Korea is a comprehensive program — virtually all dealings prohibited absent a specific license.',
  4420202: 'Cuba sanctions allow defined travel-related categories but prohibit most economic dealings. Read the program text, not the headlines.',
  4420203: 'SSI listings impose directive-specific prohibitions (new debt, new equity, specific projects). They are not SDN.',
  4420204: 'Venezuela moved from sectoral (EO 13808, 2017) to a broad block of the Government of Venezuela (EO 13884, 2019). Which order applies is the question.',
  4420205: 'Block when there is a blockable property interest in the bank\'s possession; reject when the transaction is prohibited but no blockable interest is held.',
  4420206: 'Facilitation captures US persons routing prohibited conduct through non-US affiliates. ING and others paid for exactly this.',

  // ---------- Chapter 3: List Screening ----------
  4420207: 'The binding US screening universe is OFAC\'s — SDN plus the other OFAC lists. Other lists (FBI, Interpol, UN) inform but do not bind.',
  4420208: 'A Directive 4 SSI hit applies to deepwater/Arctic/shale projects, not ordinary payroll. The hit starts the analysis, not the block.',
  4420209: 'Foreign branches of US banks are US persons under OFAC AND subject to host-country law. Layered obligation, not either/or.',
  4420210: 'EU subsidiaries are bound by EU law; US-person facilitation and OFAC-EU program overlap (especially Russia) drive parent exposure.',
  4420211: 'OFSI binds UK activity. The strictest applicable regime governs; OFAC silence does not cure a UK obligation.',
  4420212: 'FBI list hits are AML/KYC and law-enforcement inputs, not OFAC blocks. Mechanical blocking on any hit collapses regimes that should stay separate.',

  // ---------- Chapter 3: 50 Percent Rule ----------
  4420213: 'Aggregate 50%+ blocked-person ownership flows blocked status to the unnamed entity. The rule reaches names that are not on the list.',
  4420214: 'Aggregation sums across multiple blocked owners. Two blocked persons at 30% each = 60% aggregate = blocked entity.',
  4420215: 'Indirect ownership counts the same as direct. A chain of holdcos resolves to the natural-person blocked status at the top.',
  4420216: 'The 50% Rule is ownership; control is a separate analysis under specific programs. Do not confuse them.',
  4420217: 'Missing BO data is the operational failure mode. Sanctions screening needs the same beneficial-ownership data the CDD program collects.',

  // ---------- Chapter 3: Apparent Violations ----------
  4420218: 'Both block and reject reports go to OFAC within 10 business days. The categorization, not the timing, is what banks misclassify.',
  4420219: 'Unblocking requires an OFAC license — general or specific. Self-help releases are violations in themselves.',
  4420220: 'Voluntary self-disclosure is a major mitigating factor in OFAC\'s penalty matrix. Speed and completeness move the number.',
  4420221: 'Egregious vs non-egregious is OFAC\'s severity tier — it changes the penalty cap dramatically. Reckless conduct + senior knowledge pushes toward egregious.',
  4420222: 'The Pre-Penalty Notice is the formal step before assessment; settlement negotiation runs through it.',
  4420223: 'OFAC penalty base is per-violation transaction value (capped). Volume × value is the math.',

  // ---------- Chapter 3: Russia Sanctions ----------
  4420224: 'The 2014 Russia program started sectoral (Directives 1-4 under EO 13662) after Crimea annexation.',
  4420225: 'Post-2022, EO 14024 added broad blocking authority and the program expanded sharply — services, goods, finance.',
  4420226: 'Correspondent restrictions on certain Russian banks shut down USD clearing for those names. Operational impact runs through the wire.',
  4420227: 'The oil price cap permits Russian oil transport/services only below the cap. Above-cap dealings are prohibited.',
  4420228: 'Russian central bank reserves were frozen, not seized. Legal status of frozen assets sits in active policy debate.',
  4420229: 'Secondary sanctions reach non-US persons enabling Russia\'s war economy — third-country banks face USD-clearing risk.',
  4420230: 'Service prohibitions (legal, accounting, management consulting) added in 2022. Service is itself the prohibited deliverable.',

  // ---------- Chapter 3: Wind-Down Licenses ----------
  4420231: 'General licenses authorize categories self-executingly — anyone meeting the terms is covered. No application needed.',
  4420232: 'Specific licenses are applied for and granted to a named applicant for a particular transaction.',
  4420233: 'GL expirations create tail risk: activity that was lawful yesterday becomes prohibited tomorrow. Forecast the calendar.',
  4420234: 'GLs and SLs carry conditions and reporting. Read the license; comply with both halves.',
  4420235: 'Mature programs track GL expirations as a calendar across the book — not as one-off surprises.',

  // ---------- Chapter 3: TBML & Dual-Use ----------
  4420236: 'Under-invoicing moves value out — exporter receives less than the goods are worth, recipient pays the difference offshore.',
  4420237: 'Over-invoicing moves value in — exporter receives more than market value, the excess is the laundered transfer.',
  4420238: 'Phantom shipping settles payment with no actual goods moving. Documents say one thing, ports and bills of lading say another.',
  4420239: 'Dual-use goods (BIS-controlled) need export-license analysis on top of OFAC. Two regulators, two reviews.',

  // ---------- Chapter 3: Secondary Sanctions ----------
  4420240: 'Secondary sanctions reach non-US persons by threatening exclusion from the US financial system. The threat is the leverage.',
  4420241: 'CAATSA codified Russia/Iran secondary sanctions in 2017. Mandatory, not waivable at the President\'s sole discretion.',
  4420242: 'USD clearing is the enforcement chokepoint. A bank cut off from US correspondent banking loses dollar functionality globally.',
  4420243: 'Iran snapback restored UN sanctions in 2020. Secondary sanctions on Iran are some of the broadest US tools deployed.',

  // ---------- Chapter 4 inline ----------
  4107414: 'Repeated round-dollar amounts just under thresholds = structuring under 31 USC 5324. Deliberate avoidance is itself the SAR signal.',
  4107415: 'Dormant account + sudden international flows + immediate onward wires = textbook layering. Review, do not celebrate.',
  4107425: 'Crypto on-ramps run through banks. Evaluate fit-to-profile, not blanket suspicion or blanket dismissal.',
  4107884: 'Many unrelated counterparties → internal layering → offshore wires = the structural layering pattern. Internal hops are not safety.',
  4107885: 'Consulting firm + heavy cash = profile mismatch. The business model is the baseline against which activity is judged.',
  4107895: 'Rapid pass-through with no retained balance lacks economic purpose. High-risk source jurisdiction is explicit BSA red flag.',

  // ---------- Chapter 4: Rule-Based Monitoring ----------
  4420300: 'Multiple sub-$10K deposits in patterns that look engineered = structuring rule trigger. The rule fires on the pattern, not the single amount.',
  4420301: 'Velocity rules look for funds in, funds out within a short window — the layering signature.',
  4420302: 'Threshold rules trade precision for recall. Lower threshold = more alerts (and more false positives); higher = fewer alerts (and more misses).',
  4420303: 'Peer-group rules compare a customer to similarly-typed customers, not to absolute thresholds. Calibration depends on group definition.',
  4420304: 'Pure threshold rules drown analysts because they ignore context. Layered logic (rule + peer + behavioral) is how mature programs cut FP rates.',
  4420305: 'Cross-account structuring rules aggregate by person across multiple accounts. Single-account thresholds miss the deliberate split.',

  // ---------- Chapter 4: ML/AI Monitoring ----------
  4420306: 'Behavioral baselines compare a customer to their own history. They catch deviation static rules miss.',
  4420307: 'Unsupervised anomaly detection finds outliers without labels — useful when label data is sparse.',
  4420308: 'Supervised models need labels — confirmed-SAR data is the gold label. Quality of labels limits the model.',
  4420309: 'SR 11-7 is the Fed/OCC model risk management framework. AML models are covered; documentation, validation, and governance apply.',
  4420310: 'Drift = the population the model was trained on no longer matches the current population. Monitor for it; retrain when it crosses thresholds.',

  // ---------- Chapter 4: False Positive Management ----------
  4420311: 'TM false-positive rates run 90-99% across the industry. The math of detecting a rare event in a large population.',
  4420312: 'Precision-recall tuning is a tradeoff, not a free lunch. Tightening one loosens the other.',
  4420313: 'Segmentation lifts productivity by routing different rule sets to different customer segments. One-size-fits-all rules generate noise.',
  4420314: 'Lowering thresholds to clear alert backlogs is the cited "tuning to suppress" finding. The fix is segmentation, not suppression.',
  4420315: 'Above-the-line/below-the-line testing samples on both sides of a threshold to validate the calibration. Examiners specifically look for this.',

  // ---------- Chapter 4: Alert Disposition ----------
  4420316: 'L1 reviewers triage and close obvious false positives. Escalation criteria define what moves to L2.',
  4420317: 'L2 escalation triggers cover pattern, customer-risk-tier, and dollar thresholds. Defined, not discretionary.',
  4420318: 'Case management consolidates multiple alerts on the same subject. One investigation, not five duplicate ones.',
  4420319: 'Disposition decision tree: close, refer for further investigation, file SAR. Each branch needs documented rationale.',
  4420320: 'SAR standard is "reasonable suspicion" — not certainty, not proof. Totality of facts is the test.',
  4420321: 'Continuing-activity SARs file at ~90-day intervals while suspicious activity persists. The first SAR is not a one-shot.',

  // ---------- Chapter 4: Structuring Variants ----------
  4420322: 'Classic smurfing = multiple people making sub-threshold deposits on behalf of one beneficial owner.',
  4420323: 'Micro-structuring spreads activity even thinner — many small deposits engineered to fall well below thresholds and peer norms.',
  4420324: 'Multi-account structuring uses several accounts at one bank to split activity. Cross-account aggregation rules catch it.',
  4420325: 'Multi-branch structuring routes deposits through different branches on the same day. Branch-blind aggregation is the control.',
  4420326: 'Mixed-instrument structuring uses cash + money orders + cashier\'s checks to disguise the aggregate. Mix is the tell.',

  // ---------- Chapter 4: TBML Signals ----------
  4420327: 'Over-invoicing red flag: invoice value far above market for the goods. Compare to public price data.',
  4420328: 'Under-invoicing red flag: invoice value far below market. Importer-side gain that bypasses customs.',
  4420329: 'Double-invoicing pairs an inflated invoice with a real one. Bank sees only one number; the other settles elsewhere.',
  4420330: 'Phantom-shipment red flags: missing bills of lading, port records that contradict the file, suspicious routing.',
  4420331: 'Goods flow vs payment flow mismatch: payment direction inconsistent with where goods actually moved.',

  // ---------- Chapter 4: Wire Fraud Signals ----------
  4420332: 'ATO tells: device change, IP change, behavioral change, large unusual wire shortly after access. Cluster, not single signal.',
  4420333: 'BEC = impersonation of an executive or vendor via email to redirect a payment. Urgency + new beneficiary + executive pressure = classic profile.',
  4420334: 'High-risk corridor payments raise wire-fraud risk independently. Corridor + behavioral change is the compound signal.',
  4420335: 'Urgency-and-authority pressure ("the CEO needs this wire NOW") is the social-engineering tell on BEC.',
  4420336: 'FinCEN Rapid Response can recall recently-sent wires. Speed matters; the window is short.',

  // ---------- Chapter 4: Crypto / VASP ----------
  4420337: 'On-ramps and off-ramps are where crypto meets banking. The bank sees fiat; the chain explains the rest.',
  4420338: 'FATF Travel Rule applies to VASPs — originator/beneficiary info travels with transfers above thresholds.',
  4420339: 'Mixers and tumblers break the on-chain trail. Use of one is a red flag, not necessarily proof.',
  4420340: 'Unhosted wallet exposure raises monitoring difficulty — no VASP counterparty to query.',

  // ---------- Chapter 4: SAR Narratives (TM) ----------
  4420341: 'Five Ws = who, what, when, where, why. Narrative spine that lets law enforcement read the case quickly.',
  4420342: 'Conclusory language ("clearly suspicious") is weaker than the facts that support it. Show the facts; let the reader draw the conclusion.',
  4420343: 'Linking continuing-activity SARs to the prior SAR reference number is the trail that makes the series usable.',

  // ---------- Chapter 5 inline ----------
  4107418: '"Customer seems fine" is not a narrative. The defensible disposition shows facts reviewed, rationale, and escalation decision.',
  4107419: 'SAR standard is totality of facts → reasonable suspicion. A single smoking gun is not required.',
  4107420: 'SAR timing: 30 days from initial detection (60 with extension). Customer notice is tipping-off under 31 USC 5318(g)(2).',
  4107421: 'Detailed alert-status disclosure to customers is tipping-off — a separate federal crime. Use approved generic language.',
  4107888: 'Adverse-media common-name hits resolve on identifiers. Both treating-as-proof and dismissing-as-noise are wrong.',
  4107889: 'Customer explanations are evidence to test against the facts, not magic erasers. Conflicts are signal.',
  4107890: 'Approved generic language for RMs avoids tipping-off while preserving relationship continuity.',
  4107891: 'After the first SAR, continuing-activity reviews and supplemental filings continue. The clock keeps running.',
  4107892: 'QA patterns need root-cause + retraining + procedure update + monitored remediation. Email-and-move-on is not governance.',

  // ---------- Chapter 5: SAR Filing ----------
  4420400: 'The 30-day clock starts at initial detection of facts that *may* be a basis for filing — not at confirmation of wrongdoing.',
  4420401: 'Initial detection is the documented identification of the suspicious facts. Examiners look at how detection date is set in the file.',
  4420402: 'SAR threshold: $5K with identifiable suspect, $25K aggregate without. Insider abuse: any amount.',
  4420403: 'Terrorism financing and insider abuse have no dollar threshold. Any amount, file the SAR.',
  4420404: 'Continuing-activity SARs file at ~90-day intervals while activity persists. Reference the prior SAR number.',
  4420405: 'BSA E-Filing System is the FinCEN portal. Filings go electronically with structured fields and the narrative.',
  4420406: '60-day extension applies only when the subject is unidentifiable — capped at 60 from initial detection, not 60 added on top of 30.',

  // ---------- Chapter 5: SAR Narrative ----------
  4420407: 'Five Ws are the narrative spine — who, what, when, where, why. Add how if it sharpens the story.',
  4420408: 'Factual statements ("customer wired $50K to X on March 3") beat speculative ones ("customer may be laundering"). Show the facts.',
  4420409: 'Name counterparties, account numbers, and dollar amounts in the narrative. Law enforcement uses these to expand the investigation.',
  4420410: 'Do not conclude what the file does not support. "Reasonable suspicion" is the standard, not "proved beyond doubt."',
  4420411: 'Linking related SARs by reference number lets the FinCEN system stitch the picture together. Standalone SARs lose context.',
  4420412: 'Plain English beats acronyms and jargon. The reader is a law-enforcement analyst, not a compliance peer.',

  // ---------- Chapter 5: Investigation Procedures ----------
  4420413: 'When activity does not match the KYC profile, refresh the profile and re-rate. The original profile is the baseline that just broke.',
  4420414: 'Activity review window typically reaches 6-12 months back from the alert. Defined in the procedure; defensible to an examiner.',
  4420415: 'Transactional pattern review for structuring aggregates by person across accounts and channels.',
  4420416: 'Source-of-funds verification standards depend on risk: third-party documentary evidence for higher-risk cases; risk-based otherwise.',
  4420417: 'Cross-account aggregation pulls activity across the customer relationship — checking + savings + card + loans.',
  4420418: 'Investigator independence from the front line is a structural control. The RM cannot influence the disposition.',

  // ---------- Chapter 5: Whistleblower ----------
  4420419: 'Internal tip lines are intake channels with anonymity and tracking. Closure of tips runs through second-line review.',
  4420420: 'BSA Officer access to the board (or board committee) is a program requirement. Reporting lines that go through the front office are findings.',
  4420421: 'AMLA whistleblower program (2020/2022 updates) added bounties and protections. No-retaliation rules are statutory, not policy.',

  // ---------- Chapter 5: Information Sharing ----------
  4420422: '314(a) is law-enforcement-initiated. Banks search prior 6 months of transactions and 12 months of customer records and report matches.',
  4420423: '314(b) is voluntary bank-to-bank. Registration with FinCEN required; the safe harbor protects participating institutions.',
  4420424: '314(b) safe harbor covers good-faith sharing for AML/terrorism-financing purposes. Outside that scope, the safe harbor does not apply.',
  4420425: 'MLATs are government-to-government; subpoenas reach institutions directly. Different channels, different timelines.',

  // ---------- Chapter 5: QC & Model Validation ----------
  4420426: 'Independent testing is a BSA pillar. Audit or external — the point is independence from the program being tested.',
  4420427: 'Internal audit (third line) tests the program; second-line QA tests the day-to-day work. Different scope, both required.',
  4420428: 'Model validation cadence is typically annual for AML monitoring models, with revalidation triggered by material changes.',
  4420429: 'MRA = Matter Requiring Attention; MRIA = Matter Requiring Immediate Attention. The "I" changes the timeline and the escalation.',
  4420430: 'Alert backlog expectations: no aged backlog above the SAR clock. Backlogs that breach 30/60 days draw findings.',

  // ---------- Chapter 5: Enforcement & Penalties ----------
  4420431: 'CMPs (civil money penalties) for willful BSA violations run into the millions per violation. Aggregation across volume is the math.',
  4420432: '31 USC 5321 supports individual liability — BSA Officers, executives, board members can be named.',
  4420433: 'DPAs (deferred prosecution agreements) impose monitors, remediation, and reporting. Conditions can run multiple years.',
  4420434: 'Civil enforcement runs through FinCEN and prudential regulators; criminal runs through DOJ. Same matter can run both tracks.',
  4420435: 'Lookback reviews ordered by regulators force the bank to re-examine months or years of prior activity. Expensive and exam-priority.',

  // ---------- Chapter 5: Recent Cases ----------
  4420436: 'TD Bank 2024: AML program failures, ~$3B in penalties, an asset cap, individual accountability. Read the consent order.',
  4420437: 'Wells Fargo fake-accounts era: control failures that extended into AML monitoring. Cultural and governance findings.',
  4420438: 'HSBC 2012: $1.9B settlement for Mexican cartel money + Iran sanctions stripping. The matter that set the modern enforcement tone.',
  4420439: 'Deutsche Bank mirror trades: $630M settlement; controls vs revenue is the case study question.',
  4420440: 'Standard Chartered: Iran sanctions stripping, multiple settlements, ultimately $1.1B+ across actions.',

  // ---------- Capstone: Initial Assessment ----------
  4420500: 'The MRA letter names findings, root causes, and required actions. Read for severity tier (MRA vs MRIA) and commitment dates.',
  4420501: 'Scoping the remediation program = inventorying findings, mapping owners, sizing effort. The program is bigger than the findings.',
  4420502: 'Root cause for TM is usually rule design + tuning + segmentation, not one bad rule. Diagnose the system.',
  4420503: 'Root cause for BO refresh is usually trigger-event logic + outreach + documentation standards. Find the breaking step.',
  4420504: 'Root cause for SAR backlog is usually triage + investigator capacity + clock-management. Throughput math.',
  4420505: 'Prioritize MRAs by regulatory severity (MRIA first), then by safety-and-soundness consequence. Not by what is easiest.',
  4420506: 'Resource ask to the executive committee = sized people, time, and budget mapped to commitment dates. Not a vague request.',
  4420507: 'MRA vs MRIA implications: MRIA elevates urgency, triggers board attention, and shortens the clock.',
  4420508: 'Engage internal audit early — the third-line validation will gate closure. Surprises at the end are expensive.',
  4420509: 'EIC (examiner-in-charge) communication cadence is weekly to biweekly during remediation. Predictability lowers temperature.',

  // ---------- Capstone: TM Tuning ----------
  4420510: 'False-positive baseline measurement = current FP rate per rule, per segment. Without it, tuning has no anchor.',
  4420511: 'Peer-group construction for MSBs needs same business model and similar volume — not "all MSBs" lumped together.',
  4420512: 'Threshold recalibration for structuring needs above-the-line/below-the-line testing to defend the new threshold.',
  4420513: 'ATL/BTL testing samples both sides of the threshold and looks for missed productive alerts in BTL. Examiners specifically ask.',
  4420514: 'Suppression rules suppress noise but can suppress productive alerts. The productivity trap is unmonitored suppression.',
  4420515: 'Model validation independence: validator cannot have built the model. Independence is the whole point of validation.',
  4420516: 'Tuning rationale documentation lives in the validation file: what changed, why, evidence supporting the change.',
  4420517: 'Fintech partner programs scope TM to the partner\'s customers and activity. The bank cannot outsource the obligation.',
  4420518: 'Correspondent banking TM for LatAm corridors needs corridor-specific rules — generic rules under-detect.',
  4420519: 'Coverage assessment before sign-off: do the rules collectively cover the typology universe? Gaps now are findings later.',

  // ---------- Capstone: BO Refresh ----------
  4420520: 'Stale BO population = customers with BO certifications older than the policy refresh window AND with triggering events.',
  4420521: 'Prioritization within the 12% gap: high-risk customers first, then customers with intervening triggers, then the tail.',
  4420522: 'Outreach channel choice depends on customer segment: secure portal for online customers, RM for relationship-managed, mail for retail.',
  4420523: 'Documentation standard for refreshed BO matches initial onboarding: certification + identity verification on listed individuals.',
  4420524: 'Non-responsive customers get escalated outreach, then offboarding decision. Indefinite servicing of a customer with stale BO is the finding.',
  4420525: 'Trigger events (ownership change, control change) drive refresh on a risk basis. Calendar refresh is the floor, not the ceiling.',
  4420526: 'Layered ownership at the 25% threshold needs look-through to the natural person. The chain is the diligence.',
  4420527: 'Nominee directors require identifying the actual control person, not just the nominee\'s name on the form.',
  4420528: 'Audit trail and exam-readiness: the file should walk the examiner through the refresh from trigger to documented outcome.',
  4420529: 'Closing the gap permanently = process change, not one-off campaign. Triggers, ownership, and accountability must be wired in.',

  // ---------- Capstone: SAR Backlog ----------
  4420530: 'Triaging 180 cases: rank by SAR-clock urgency (already late > about to be late > comfortable), then by risk-tier and dollar.',
  4420531: 'Continuing-activity discipline: cases already filed once may need supplemental filing now; do not start the clock fresh.',
  4420532: 'Narrative quality on rushed cases is the failure mode. Speed cannot trade off against five-Ws and naming counterparties.',
  4420533: 'The 30-day clock runs from discovery date — and discovery is documented. Manipulating discovery dates is itself the finding.',
  4420534: 'No-SAR decisions need documented rationale showing facts reviewed and standard applied. "Closed" without rationale is a gap.',
  4420535: 'Escalation criteria during clearance: any case with PEP / sanctions overlap / 314(a) hit / continuing activity escalates regardless of throughput pressure.',
  4420536: 'Avoiding tipping during outreach: scripted generic language only, no alert details, no SAR references.',
  4420537: 'Re-filing vs supplemental SAR: supplemental references the original; re-filing is for materially different new activity.',
  4420538: 'Resourcing the backlog clearance team: temporary staff augmentation + dedicated L2 reviewers + QA sampling.',
  4420539: 'Quality-control sampling during throughput: random sample of cleared cases reviewed for narrative quality and decision soundness.',

  // ---------- Capstone: Regulator Reporting ----------
  4420540: 'Internal audit report structure: scope, methodology, findings, root cause, management response, validation criteria.',
  4420541: 'Board-level escalation framing: what changed, why it matters, what the bank is doing, what success looks like.',
  4420542: 'OCC response letter tone is factual, accountable, and specific. Defensiveness is the giveaway examiners look for.',
  4420543: 'Commitment dates are credibility currency. Missing a committed date is worse than asking for a longer commitment up front.',
  4420544: 'Root cause vs symptom in the response letter: identify the underlying control failure, not the surface event.',
  4420545: 'Self-identifying additional issues that were not in the MRA earns regulator credit. Hiding them earns the opposite.',
  4420546: 'Quarterly progress reporting cadence: same template each quarter, marked against original commitments. Predictable is good.',
  4420547: 'Independent validation of remediation: third-line testing closes the loop. Self-validation does not.',
  4420548: 'Coordinating with FinCEN findings (if any) alongside the prudential regulator: aligned timelines and consistent messaging.',
  4420549: 'Closing the MRA = sustained evidence of remediation, not one-off pass. Sustainability is the test for full closure.',
}

// BC_CORRECT_SHORTENED — questions where the correct answer was substantially
// longer than the longest wrong distractor. Each entry replaces `correct` with
// a punchier line and pushes the trimmed explanatory detail into
// `lessonAddendum` so no information is lost.
export const BC_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  4420001: {
    newCorrect: 'Banks, credit unions, MSBs, broker-dealers, casinos, and other "financial institutions" defined in 31 U.S.C. § 5312',
    lessonAddendum: 'BSA coverage extends well beyond commercial banks. Knowing the statutory list matters because the same FinCEN rules apply across very different business models — and the line between "covered" and "Form 8300 only" is sharp.',
  },
  4420005: {
    newCorrect: 'A mandatory customer identification program (CIP) for every new account, codified at Section 326',
    lessonAddendum: 'Patriot Act 2001 added several BSA hooks: Section 326 (CIP), Section 312 (correspondent/private banking EDD), Section 314(a) (law-enforcement info requests), and Section 314(b) (voluntary bank-to-bank info sharing).',
  },
  4420020: {
    newCorrect: 'Correspondent accounts for foreign FIs and private banking accounts for non-US persons (private banking aggregates at $1M)',
    lessonAddendum: 'Section 312 targets two account types as inherently higher-risk. FinCEN\'s implementing rules specify EDD steps: respondent AML controls for correspondents; source of wealth and PEP screening for private banking.',
  },
  4420021: {
    newCorrect: 'Name, date of birth, address, and an identification number (SSN, passport, or alien ID for non-US persons)',
    lessonAddendum: 'CIP is the floor. Every new account must collect and verify these four core data elements. CDD (relationship purpose) and EDD (high-risk layer) sit on top of CIP, not in place of it.',
  },
  4420022: {
    newCorrect: 'The FinCEN CDD Final Rule, issued May 2016 with a May 11, 2018 compliance date',
    lessonAddendum: 'Two beneficial-ownership regimes coexist: the bank-facing CDD Rule (2016/2018) and the Corporate Transparency Act registry (2021, phased). They interact but are not the same rule.',
  },
  4420040: {
    newCorrect: 'Reject the transaction and file a Rejected Transaction Report with OFAC within 10 business days — funds return to the sender',
    lessonAddendum: 'Block vs reject is the practical hinge of sanctions operations. Both have 10-business-day reporting timelines, but funds-flow consequences differ sharply and the bank must categorize correctly.',
  },
  4420041: {
    newCorrect: 'A general license authorizes a defined category of transactions self-executingly; a specific license is granted to a named applicant',
    lessonAddendum: 'Legitimate, authorized activity often runs through general licenses. Banks that treat every sanctioned-country touch as a rejection over-block humanitarian and other licensed activity and may themselves face customer-harm scrutiny.',
  },
  4420042: {
    newCorrect: 'An entity owned 50% or more in the aggregate by one or more blocked persons is itself blocked, even if not separately listed',
    lessonAddendum: 'The 50% Rule is one of the highest-leverage concepts in sanctions compliance. Screening cannot stop at the listed name — beneficial-ownership data must feed sanctions screening, not just AML CDD.',
  },
  4420044: {
    newCorrect: '30 calendar days from initial detection, extendable by 30 more days if no suspect is identified — capped at 60',
    lessonAddendum: 'The 30-day clock starts at "initial detection of facts that may constitute a basis for filing" — not at confirmation of wrongdoing. Programs that wait for certainty often miss the window; programs that file too defensively burden FinCEN.',
  },
  4420045: {
    newCorrect: 'File a CTR — the BSA aggregates multiple cash transactions by the same person on the same business day above $10,000',
    lessonAddendum: 'CTRs are mechanical, mandatory, and aggregated. Cash-intensive businesses can benefit from FinCEN\'s "Phase I" and "Phase II" exemption process — knowing the exemption pathway prevents both over- and under-reporting.',
  },
  4420107: {
    newCorrect: 'Source of funds = origin of this specific deposit; source of wealth = how overall wealth was accumulated. Higher-risk customers need both.',
    lessonAddendum: 'Source of funds answers "where did this specific money come from?" Source of wealth answers "how did this customer accumulate wealth overall?" The two questions are distinct and examiners cite files that conflate them.',
  },
  4420110: {
    newCorrect: 'Open an investigation: verify the actual business model, reassess source of funds, update or close the profile gap, consider a SAR',
    lessonAddendum: 'The expected-activity profile is the baseline; a large variance is the AML signal the system was designed to surface. Suppressing the alert by widening the profile is exactly the misuse regulators have penalized.',
  },
  4420123: {
    newCorrect: 'EDD at onboarding and refresh, lower monitoring thresholds, annual review, senior approval, and documented source of wealth',
    lessonAddendum: 'High risk = more work, not less customer. The rating only matters when it drives downstream controls. A rating with no operational consequence is a label, not a control.',
  },
  4420134: {
    newCorrect: 'Route the EDD package and rating proposal to the designated PEP approver and obtain documented approval before opening',
    lessonAddendum: 'PEP relationships need pre-opening senior approval with the full EDD package on the desk. Approval is the control; bypassing it — even with strong EDD — is the finding examiners write up.',
  },
  4420143: {
    newCorrect: 'Re-rate to high, apply the controls (EDD refresh, threshold adjust, senior approval), document rationale, reset cadence',
    lessonAddendum: 'A review only adds value if its outcome flows through to controls. Reviews that surface facts but change nothing downstream are exactly what regulators have penalized as program weaknesses.',
  },
  4420205: {
    newCorrect: 'Block when a blocked person has a property interest in the bank\'s possession; reject when the transaction is prohibited but no blockable interest is held',
    lessonAddendum: 'Block-vs-reject is a property-interest analysis. Over-blocking creates its own problems — banks have been criticized for freezing non-blockable funds. The distinction must live in the written procedure.',
  },
  4420209: {
    newCorrect: 'Apply UN-implementing local law at the branch and apply OFAC to the US-person branch — both regimes attach',
    lessonAddendum: 'Multinational sanctions screening is a layered obligation: home-country (OFAC, even at foreign branches), host-country law, and the international regime. Each layer can produce hits the others do not.',
  },
  4420210: {
    newCorrect: 'The EU subsidiary must follow EU law; the US parent has facilitation exposure if US-person employees approve the dealings',
    lessonAddendum: 'For a US bank, EU designations bind the EU subsidiary directly; the US parent\'s exposure runs through facilitation, US-person involvement, and overlap with OFAC programs (notably Russia).',
  },
  4420211: {
    newCorrect: 'Treat the counterparty as designated for the London branch under UK law, and assess OFAC posture independently',
    lessonAddendum: 'OFSI maintains the UK consolidated list. For US banks operating in the UK, the UK list binds the UK activity regardless of OFAC. The compliance discipline is mapping each branch\'s activity to the right regime\'s list.',
  },
  4420212: {
    newCorrect: 'Use FBI matches as AML/KYC risk signals — they may feed CDD, EDD, or SAR work but do not trigger OFAC blocking',
    lessonAddendum: 'Lists serve different purposes: OFAC drives blocking; FBI/Interpol drive AML and law-enforcement workflows. A mature program maps each list to the right downstream procedure and avoids collapsing them into a single "block on any hit" rule.',
  },
}

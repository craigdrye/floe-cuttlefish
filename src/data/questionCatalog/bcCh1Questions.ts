import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// BANK COMPLIANCE / AML — Chapter 1: Bank Compliance Foundations
// ----------------------------------------------------------------------------
// 47 questions (IDs 4420000–4420046) extending the existing trio
// (4200080–4200082 in careerAgentGeneratedRoadmapFinance.ts) for the
// "Bank Compliance Foundations" chapter of the bankComplianceAmlRoadmap.
//
// US-context throughout. Coverage:
//   - BSA framework (Bank Secrecy Act 1970), Annunzio-Wylie 1992, MLSA 1994,
//     Money Laundering Suppression Act 1994, Patriot Act 2001 amendments
//   - The five AML "pillars" (CIP, CDD, monitoring, reporting, training,
//     governance), and how the 2018 CDD/BO rule added the fifth
//   - Federal regulators: OCC (national banks), Federal Reserve (BHCs/SMBs),
//     FDIC (state non-member insured banks), NCUA (credit unions), FinCEN
//     (BSA administrator), OFAC (sanctions), state regulators
//   - Patriot Act 2001: Sections 312 (correspondent/private banking due
//     diligence), 314(a) (law-enforcement info request), 314(b) (voluntary
//     bank-to-bank info sharing), 326 (CIP)
//   - 2018 Beneficial Ownership Rule (FinCEN CDD final rule): 25% equity
//     ownership prong, single-individual control prong, certification form
//   - CDD requirements at account opening: name/DOB/address/ID number
//     verification, beneficial ownership identification for legal entities
//   - Enhanced due diligence (EDD): PEPs, high-risk jurisdictions (FATF),
//     correspondent banking, private banking ($1M+ threshold under Sec 312)
//   - OFAC sanctions: SDN list, sectoral sanctions (SSI), blocking and
//     rejecting transactions, general vs specific licenses
//   - Reporting: SAR (Suspicious Activity Report, $5K threshold for banks,
//     $25K aggregate when no suspect identified), CTR ($10K cash threshold),
//     Form 8300 ($10K cash for non-financial trades and businesses)
//
// Voice matches the canonical Floe career questions — specific, bespoke
// rationales, no strawman distractors.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe BC Ch1 canonical bank'

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

const CHAPTER = 'Bank Compliance Foundations'

// Difficulty distribution: 14 at 3 (≈30%), 24 at 4 (≈51%), 9 at 5 (≈19%).
export const BC_CH1_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // BSA framework (4420000–4420006)
  4420000: 3,
  4420001: 3,
  4420002: 4,
  4420003: 4,
  4420004: 4,
  4420005: 5,
  4420006: 4,

  // AML pillars (4420007–4420012)
  4420007: 3,
  4420008: 4,
  4420009: 4,
  4420010: 4,
  4420011: 3,
  4420012: 4,

  // Regulators (4420013–4420017)
  4420013: 3,
  4420014: 4,
  4420015: 3,
  4420016: 4,
  4420017: 4,

  // Patriot Act 2001 (4420018–4420022)
  4420018: 4,
  4420019: 4,
  4420020: 5,
  4420021: 4,
  4420022: 4,

  // Beneficial Ownership Rule 2018 (4420023–4420027)
  4420023: 3,
  4420024: 4,
  4420025: 4,
  4420026: 5,
  4420027: 4,

  // CDD requirements (4420028–4420032)
  4420028: 3,
  4420029: 3,
  4420030: 4,
  4420031: 4,
  4420032: 4,

  // EDD (4420033–4420037)
  4420033: 4,
  4420034: 5,
  4420035: 4,
  4420036: 5,
  4420037: 4,

  // OFAC sanctions (4420038–4420042)
  4420038: 3,
  4420039: 4,
  4420040: 5,
  4420041: 4,
  4420042: 5,

  // Reporting requirements (4420043–4420046)
  4420043: 3,
  4420044: 4,
  4420045: 5,
  4420046: 3,
}

export const bcCh1Questions: Question[] = [
  // -------------------------------------------------------------------------
  // BSA FRAMEWORK (4420000–4420006)
  // -------------------------------------------------------------------------
  q(4420000, 'Career Skills', CHAPTER, 'Bank Secrecy Act 1970 purpose',
    'The Bank Secrecy Act, enacted in 1970, established the foundational US AML recordkeeping and reporting regime. What was its original primary purpose?',
    'Create paper trails — through reports and records of cash and foreign transactions — that would be useful to criminal, tax, and regulatory investigations',
    [
      ['Prohibit banks from accepting deposits from foreign nationals without State Department clearance', 'The BSA did not bar foreign-national deposits. It was a recordkeeping and reporting statute, not a prohibition on relationships.'],
      ['Require banks to freeze accounts suspected of drug trafficking', 'Account freezing under sanctions law sits with OFAC, not the BSA. The BSA\'s 1970 design was reporting, not blocking.'],
      ['Force banks to share customer transaction data with the IRS in real time', 'The BSA created reporting thresholds (e.g., CTRs for cash above $10K) — not a real-time data feed. Real-time access is not the statute\'s mechanism.'],
    ],
    'The BSA — formally the Currency and Foreign Transactions Reporting Act of 1970 — is fundamentally a recordkeeping and reporting law. Every later AML expansion (Annunzio-Wylie, Patriot Act, CDD Rule) builds on this paper-trail foundation.'),

  q(4420001, 'Career Skills', CHAPTER, 'BSA coverage scope',
    'Which set of institutions is covered by the Bank Secrecy Act today?',
    'Banks, credit unions, money services businesses, broker-dealers, casinos, and other "financial institutions" defined in 31 U.S.C. § 5312 — far broader than commercial banks alone',
    [
      ['Only federally chartered commercial banks', 'The BSA reaches state-chartered banks, credit unions, MSBs, broker-dealers, casinos, and many non-bank financial institutions. Limiting to federally chartered banks misses most of the regulated universe.'],
      ['Only institutions insured by the FDIC', 'FDIC insurance is one regulatory line, but BSA coverage extends to credit unions (NCUA-insured) and many non-depository institutions. The two lists do not match.'],
      ['All US businesses that accept payments', 'The BSA does not blanket all merchants. Non-financial trades and businesses do have a Form 8300 obligation for $10K+ cash, but that is a narrow slice — not full BSA coverage.'],
    ],
    'BSA coverage flows from the statutory definition of "financial institution," which Congress has expanded several times. Knowing the scope matters because the same FinCEN rules apply across very different business models.'),

  q(4420002, 'Career Skills', CHAPTER, 'Annunzio-Wylie 1992 amendment',
    'The Annunzio-Wylie Anti-Money Laundering Act of 1992 made one structural change that shaped the modern AML program. What was it?',
    'Authorized Treasury to require banks to maintain anti-money-laundering programs and created Suspicious Activity Report authority',
    [
      ['Created the Office of Foreign Assets Control', 'OFAC traces to Treasury authorities dating from the 1940s (and earlier wartime precursors). Annunzio-Wylie did not create OFAC.'],
      ['Imposed the $10,000 cash CTR threshold', 'The CTR threshold dates from the original 1970 BSA implementing regulations, not Annunzio-Wylie.'],
      ['Mandated beneficial ownership identification at account opening', 'Beneficial ownership identification at account opening came from FinCEN\'s 2016 CDD Rule (effective 2018), not the 1992 statute.'],
    ],
    'Annunzio-Wylie 1992 is the bridge between the BSA\'s 1970 recordkeeping origin and the program-based AML regime we know today — it gave regulators the hook to require formal AML programs and SAR reporting.'),

  q(4420003, 'Career Skills', CHAPTER, 'Money Laundering Suppression Act 1994',
    'The Money Laundering Suppression Act of 1994 changed how money services businesses are treated under the BSA. What did it require?',
    'Registration of money services businesses with Treasury and state-level supervision, bringing non-bank financial actors more clearly into the BSA framework',
    [
      ['Imposed a flat ban on cash transactions over $10,000', 'Cash transactions over $10K trigger a CTR report, not a ban. The 1994 statute did not prohibit large cash activity.'],
      ['Required banks to close all correspondent accounts with foreign banks', 'Correspondent banking restrictions came later — the Patriot Act of 2001 (§ 312) imposed enhanced due diligence; 1994 did not require closure.'],
      ['Created the Suspicious Activity Report form', 'SAR authority traces to Annunzio-Wylie 1992; the SAR form itself was rolled out in 1996. The 1994 MLSA targeted MSBs.'],
    ],
    'MLSA 1994 was the moment the AML regime recognized that money laundering increasingly flows through check cashers, money transmitters, and other non-bank channels. MSB registration is now a foundational FinCEN program.'),

  q(4420004, 'Career Skills', CHAPTER, 'BSA program required elements',
    'A US bank\'s formal BSA/AML compliance program is required to include which set of elements (the historic "four pillars" plus the fifth added in 2018)?',
    'Internal controls; a designated BSA officer; independent testing; ongoing employee training; and ongoing customer due diligence including beneficial ownership',
    [
      ['Board approval, customer complaint logging, vendor risk reviews, and product launch sign-off', 'These are general governance and operational risk controls. They are not the BSA program elements regulators test against.'],
      ['CTR filing, SAR filing, OFAC screening, and recordkeeping', 'These are outputs and operational tasks the program produces — not the structural pillars of the program itself.'],
      ['Annual risk assessment, quarterly board reporting, monthly metrics, and weekly tuning', 'Reporting cadence is part of governance practice, but the regulatory pillars name controls, officer, testing, training, and CDD — not a meeting calendar.'],
    ],
    'The five pillars — codified by the 2018 CDD Rule — are the regulator\'s checklist. An exam that finds any pillar weak will produce a finding regardless of how many reports the bank files.'),

  q(4420005, 'Career Skills', CHAPTER, 'Patriot Act 2001 BSA amendments',
    'The USA PATRIOT Act of 2001 amended the BSA in multiple ways. Which of these was a direct PATRIOT Act addition, not a pre-existing BSA provision?',
    'A mandatory customer identification program (CIP) for every new account, codified at Section 326',
    [
      ['The $10,000 cash CTR filing requirement', 'CTRs trace to the 1970 BSA. PATRIOT did not create them.'],
      ['The requirement that banks maintain an AML program', 'AML program requirements were authorized by Annunzio-Wylie 1992 and implemented through later rules. PATRIOT expanded the regime but did not introduce the program requirement itself.'],
      ['The Suspicious Activity Report', 'SARs flow from Annunzio-Wylie 1992. PATRIOT broadened scope but did not introduce SAR authority.'],
    ],
    'PATRIOT Act Section 326 is the statutory basis for CIP — the requirement to verify identity at account opening. It sits alongside other PATRIOT additions: Sections 312 (correspondent/private banking EDD), 314(a) (law-enforcement info requests), and 314(b) (voluntary bank-to-bank info sharing).'),

  q(4420006, 'Career Skills', CHAPTER, 'BSA penalties structure',
    'A bank willfully fails to file required CTRs over a sustained period. Under the BSA, what is the structure of the resulting penalty exposure?',
    'Both civil money penalties (potentially per-violation) and criminal liability for willful violations — applied to the institution and, where supported, to individuals',
    [
      ['A single fixed-dollar fine regardless of the number of violations', 'BSA civil penalties scale with the number and severity of violations. Calling it a "fixed fine" understates the exposure and the per-violation math examiners run.'],
      ['Only reputational consequences; the BSA has no monetary penalties', 'The BSA carries both civil and criminal penalties — these are real money exposures, frequently in the hundreds of millions for major matters.'],
      ['Loss of FDIC insurance automatically', 'Insurance termination is a separate FDIC remedy and is not the automatic consequence of BSA violations. Penalties flow through enforcement orders and money sanctions.'],
    ],
    'BSA enforcement is multi-layered: FinCEN, the prudential regulator, and DOJ can each act. Recent enforcement history shows individual accountability is increasingly part of the calculus, not just institutional fines.'),

  // -------------------------------------------------------------------------
  // AML PILLARS (4420007–4420012)
  // -------------------------------------------------------------------------
  q(4420007, 'Career Skills', CHAPTER, 'Pillar — internal controls',
    'A bank\'s "internal controls" pillar of its AML program covers which practical artifacts an examiner would expect to see?',
    'Written policies and procedures, defined risk-rating methodology, monitoring scenarios with tuning records, and a current AML risk assessment',
    [
      ['Quarterly customer satisfaction surveys', 'Customer satisfaction is a business metric, not an AML control. Examiners are looking for controls that detect and prevent illicit activity.'],
      ['A single combined policy document covering all bank operations', 'A single mega-policy does not satisfy the BSA program requirement. Examiners expect AML-specific written controls tied to identified risks.'],
      ['Executive bonus plans tied to compliance metrics', 'Compensation design may influence culture, but it is not what "internal controls" means under the BSA — that pillar is about policies, procedures, methodology, and the risk assessment.'],
    ],
    'Internal controls are the program\'s skeleton: the documented policies, procedures, methodology, and risk assessment that examiners walk through first. Weakness here cascades into every other pillar.'),

  q(4420008, 'Career Skills', CHAPTER, 'Pillar — designated BSA officer',
    'The BSA officer role required by the AML program rule must meet which characteristics?',
    'A specifically designated individual with sufficient authority, independence, and resources to oversee day-to-day AML compliance — reporting to the board or a board committee',
    [
      ['The general counsel, by default, regardless of bank size', 'There is no rule that GC fills the BSA officer role. Many banks separate the roles to preserve independence and to ensure dedicated AML focus.'],
      ['A committee of business-line heads with no individual designated', 'The rule requires a *designated* individual. Spreading the role across a committee fails the BSA program requirement.'],
      ['Any officer at vice-president level or above, even without AML responsibilities', 'Title alone does not satisfy the role. Authority, independence, and active oversight are the substantive tests examiners apply.'],
    ],
    'Examiner findings often hinge on whether the BSA officer has real authority and access. A title without budget, staff, and a reporting line to the board is a classic finding pattern.'),

  q(4420009, 'Career Skills', CHAPTER, 'Pillar — independent testing',
    'What does the "independent testing" pillar of an AML program require?',
    'Periodic testing of the AML program by qualified, independent parties — internal audit or external — covering scope, coverage, sample sizes, findings, and management response',
    [
      ['A self-assessment by the compliance team each year', 'Self-assessment is not independent. The pillar exists precisely to bring an outside view to the program.'],
      ['Regulator examinations only — banks do not need their own testing', 'Regulator exams are separate. Independent testing is a *bank* obligation in addition to whatever the regulator does.'],
      ['Testing only of monitoring scenarios, not the broader program', 'Testing scope must cover the full program — policies, training, CDD, monitoring, reporting — not a single component.'],
    ],
    'Independent testing is the program\'s self-check. Findings here — closed and validated — protect the bank in the next exam; findings ignored become exam findings.'),

  q(4420010, 'Career Skills', CHAPTER, 'Pillar — training',
    'A bank\'s AML training pillar is examined by regulators. What characteristics do examiners look for in defensible training?',
    'Role-tailored content, regular cadence, attendance tracking, knowledge testing, and documentation of board and senior-management training',
    [
      ['A single annual computer-based module taken by every employee with the same content', 'One-size-fits-all training rarely satisfies examiners. A teller, a private banker, and a board member need different content tied to their AML responsibilities.'],
      ['New-hire training only, with no refresher cadence', 'Training must be ongoing. New-hire-only training fails the "ongoing" requirement and the role-evolution problem.'],
      ['Training delivered only to the BSA officer and direct reports', 'The pillar covers all staff with AML responsibilities — front-line, operations, and senior management. Restricting to compliance staff misses the point.'],
    ],
    'Training is the cheapest pillar to do well and one of the most common places examiners find weakness. Role-tailoring and documentation are what separate a real training program from a check-the-box module.'),

  q(4420011, 'Career Skills', CHAPTER, 'Pillar — ongoing CDD',
    'The 2018 CDD Rule formalized a fifth program pillar: ongoing customer due diligence. What does ongoing CDD actually require?',
    'Understanding the nature and purpose of customer relationships, identifying beneficial owners at account opening, and conducting ongoing monitoring to update customer information and identify suspicious activity',
    [
      ['Verifying customer identity once at account opening and then leaving the file alone', 'The ongoing element is exactly what the 2018 rule added. One-time CIP at opening is not enough.'],
      ['Annual KYC refresh for every customer regardless of risk', 'CDD refresh is risk-based, not blanket annual. High-risk customers get more frequent updates; lower-risk customers less so.'],
      ['Source-of-funds documentation for every transaction over $1,000', 'There is no $1,000-per-transaction documentation rule. Source-of-funds work is risk-based and concentrates on EDD cases.'],
    ],
    'The fifth pillar — ongoing CDD — connects account opening to monitoring and to SAR triggers. It is the requirement that turns a static file into a living relationship view.'),

  q(4420012, 'Career Skills', CHAPTER, 'Governance and the AML program',
    'Where does AML program governance — board and senior management oversight — sit relative to the five pillars?',
    'It is a cross-cutting expectation woven through every pillar, with explicit responsibilities including approving the program, receiving regular reporting, and ensuring adequate resources',
    [
      ['It is a separate seventh pillar', 'Governance is not numbered as a separate pillar — but examiners absolutely test it. It sits across the program rather than alongside.'],
      ['It is delegated entirely to the BSA officer with no board involvement', 'The BSA officer reports to the board; the board cannot delegate its oversight role away. Programs that lack board engagement draw findings.'],
      ['It is only required at institutions over $10 billion in assets', 'Governance expectations apply across the regulated universe. Sophistication scales with size, but the obligation does not vanish below a threshold.'],
    ],
    'Governance is the load-bearing structure underneath all five pillars. Boards approve the program, see the risk assessment, hear the monitoring metrics, and confirm resourcing — without this, the pillars sit on sand.'),

  // -------------------------------------------------------------------------
  // REGULATORS (4420013–4420017)
  // -------------------------------------------------------------------------
  q(4420013, 'Career Skills', CHAPTER, 'OCC jurisdiction',
    'A federally chartered national bank conducting BSA-covered activity is supervised for safety-and-soundness and BSA compliance primarily by which agency?',
    'The Office of the Comptroller of the Currency (OCC), which charters and supervises national banks and federal savings associations',
    [
      ['The Federal Reserve, because all banks are member banks', 'The Fed supervises state member banks and bank holding companies. National banks are OCC-chartered and OCC-supervised.'],
      ['The FDIC, because the bank is insured', 'FDIC insurance does not equal FDIC primary supervision. FDIC is the primary federal regulator for state non-member insured banks, not national banks.'],
      ['FinCEN, because FinCEN administers the BSA', 'FinCEN issues BSA regulations and receives reports, but functional bank supervision sits with the prudential regulator — OCC for national banks.'],
    ],
    'The prudential-regulator map matters because exam authority, enforcement orders, and the day-to-day examiner relationship live with the primary federal regulator. National bank → OCC.'),

  q(4420014, 'Career Skills', CHAPTER, 'Federal Reserve and BHCs',
    'A bank holding company that owns several subsidiary banks is supervised at the holding-company level by which regulator?',
    'The Federal Reserve, which supervises bank holding companies and state-chartered member banks under the Bank Holding Company Act',
    [
      ['The OCC, because the OCC supervises the largest banks', 'The OCC supervises national-bank subsidiaries within a BHC, but the *holding company* itself sits with the Fed.'],
      ['The FDIC, because the FDIC insures the banks in the group', 'FDIC supervises the deposit-insurance fund and acts as primary federal regulator for state non-member insured banks. It does not supervise BHCs.'],
      ['FinCEN, because the BSA is administered at the consolidated entity', 'FinCEN administers BSA rules but is not the prudential supervisor of BHCs. Holding-company supervision is the Fed\'s role.'],
    ],
    'BHC supervision matters in AML because the consolidated AML program — and intra-affiliate sharing under Patriot Section 314(b) — operate at the holding-company level under Fed oversight.'),

  q(4420015, 'Career Skills', CHAPTER, 'FDIC jurisdiction',
    'Which set of insured depository institutions has the FDIC as its primary federal regulator?',
    'State-chartered banks that are not members of the Federal Reserve System — i.e., state non-member insured banks',
    [
      ['All FDIC-insured banks regardless of charter', 'FDIC is the *insurer* of all FDIC-insured banks, but primary federal regulator only for state non-member banks. National banks → OCC, state member banks → Fed.'],
      ['Federal credit unions', 'Federal credit unions are supervised by NCUA, not FDIC. NCUA also administers the share-insurance fund for credit unions.'],
      ['Foreign branches of US banks operating overseas', 'Foreign-branch supervision is a different question — primarily home-country regulator (OCC, Fed, or FDIC) plus host-country authorities, with no general FDIC primary role over foreign branches.'],
    ],
    'The federal banking regulator triangle — OCC, Fed, FDIC — splits primary supervision by charter and Fed-membership. Knowing which regulator owns the bank is the first thing an AML practitioner clarifies.'),

  q(4420016, 'Career Skills', CHAPTER, 'FinCEN role',
    'What is FinCEN\'s role in the BSA/AML regulatory architecture?',
    'Administrator of the BSA — issuing regulations, receiving SARs and CTRs, processing 314(a) requests, and bringing enforcement actions for BSA violations',
    [
      ['Primary safety-and-soundness examiner of all US banks', 'Safety-and-soundness examination is the role of the OCC, Fed, and FDIC depending on the charter. FinCEN does not run prudential examinations.'],
      ['Issuer of OFAC sanctions designations', 'Sanctions designations come from OFAC, not FinCEN. The two agencies sit in different parts of Treasury with different mandates.'],
      ['Manager of the federal deposit insurance fund', 'Deposit insurance is the FDIC. FinCEN has no insurance-fund role.'],
    ],
    'FinCEN is the BSA administrator and the destination for SARs, CTRs, and Form 8300 filings. Prudential regulators enforce at the bank; FinCEN enforces at the BSA program level — both can act on the same matter.'),

  q(4420017, 'Career Skills', CHAPTER, 'OFAC role and authority',
    'OFAC enforces US economic and trade sanctions. What is the most accurate description of OFAC\'s authority over a US bank?',
    'OFAC authority reaches US persons (including US banks), foreign branches of US banks, and certain transactions touching the US financial system — with strict-liability civil penalties for violations',
    [
      ['OFAC only acts against the foreign parties named on its lists, not against US banks that process transactions involving them', 'US banks themselves face enforcement exposure for processing prohibited transactions. The strict-liability standard is part of what makes sanctions compliance distinct from the BSA risk-based regime.'],
      ['OFAC only matters for international wires; domestic activity is out of scope', 'Domestic transactions can touch SDN names and blocked property too — an SDN customer or a domestic transaction involving an SDN both raise OFAC exposure.'],
      ['OFAC compliance is voluntary because OFAC sits inside Treasury', 'Sanctions are mandatory legal prohibitions. The penalty regime is some of the most aggressive in financial regulation.'],
    ],
    'OFAC sanctions are strict liability — intent is not required for a violation. That is why OFAC screening is a separate, mandatory control even within a risk-based AML program.'),

  // -------------------------------------------------------------------------
  // PATRIOT ACT 2001 (4420018–4420022)
  // -------------------------------------------------------------------------
  q(4420018, 'Career Skills', CHAPTER, 'Patriot Section 314(a)',
    'Patriot Act Section 314(a) creates a specific information-sharing channel. How does it work?',
    'FinCEN, on behalf of a law-enforcement agency investigating money laundering or terrorism, sends a request to financial institutions, which then search records for matches on named persons or entities and report back',
    [
      ['Banks share suspicious customer information directly with each other on request', 'Bank-to-bank sharing is the *314(b)* program — voluntary and bank-initiated. 314(a) is law-enforcement-initiated through FinCEN.'],
      ['The Treasury Secretary requires banks to publish lists of high-risk customers publicly', 'There is no public-publication mechanism. 314(a) requests are confidential between FinCEN, the requesting agency, and the institution.'],
      ['Law enforcement subpoenas every transaction over $10,000 monthly', 'There is no automatic subpoena process tied to CTR thresholds. 314(a) is a targeted, named-subject information request.'],
    ],
    'Section 314(a) is the law-enforcement on-ramp to bank records on named subjects. Banks search prior six-month transaction records and one-year customer records (per FinCEN guidance) and report matches confidentially.'),

  q(4420019, 'Career Skills', CHAPTER, 'Patriot Section 314(b)',
    'Patriot Act Section 314(b) authorizes a different kind of information sharing. What does it allow?',
    'Voluntary information sharing between financial institutions — both directions — for purposes of identifying and reporting possible money laundering or terrorist financing, with safe-harbor protection from civil liability',
    [
      ['Mandatory sharing of every SAR filed with every other US bank', 'SAR confidentiality is strict and SARs are never shared bank-to-bank. 314(b) allows sharing of suspicion *information*, not SAR filings themselves.'],
      ['Sharing only between affiliates within the same holding company', 'Intra-affiliate sharing has its own rules, but 314(b) is *between unaffiliated* institutions. Limiting to affiliates misses the point of the program.'],
      ['Sharing only with regulators, not with other banks', 'Regulator sharing is a separate channel. 314(b) is the bank-to-bank channel — the whole purpose of the section.'],
    ],
    '314(b) is the optional but powerful bank-to-bank channel that lets institutions piece together activity that crosses books. Participation requires registration with FinCEN; non-participation can leave investigators with half the picture.'),

  q(4420020, 'Career Skills', CHAPTER, 'Patriot Section 312 EDD',
    'Patriot Act Section 312 added enhanced due diligence requirements for certain account types. Which accounts does Section 312 specifically target?',
    'Correspondent accounts for foreign financial institutions and private banking accounts maintained for non-US persons (with an aggregate threshold of $1 million)',
    [
      ['Every account held by a non-US citizen at a US bank', 'Section 312 does not blanket every non-US citizen account. It targets *correspondent* and *private banking* relationships, which carry distinct higher-risk profiles.'],
      ['Every account opened after 2001', 'Universal post-2001 EDD is not the rule. CIP under Section 326 applies broadly, but the EDD layer of Section 312 is narrower.'],
      ['Every account with an average balance over $10,000', 'Balance thresholds do not drive Section 312. Account *type* (correspondent or private banking) is what triggers the EDD obligation.'],
    ],
    'Section 312 is why correspondent banking and private banking are treated as inherently higher-risk: the statute mandates EDD, and FinCEN\'s implementing regulations specify the steps. Private banking gets the $1M aggregate threshold; correspondent gets type-based treatment.'),

  q(4420021, 'Career Skills', CHAPTER, 'Patriot Section 326 CIP',
    'Patriot Act Section 326 — implemented by joint regulator rules — required US banks to adopt a Customer Identification Program. What four data elements must CIP collect (at minimum) for individual customers?',
    'Name, date of birth, address, and an identification number (such as a Social Security number or, for non-US persons, an equivalent like a passport or alien ID number)',
    [
      ['Name, employer, salary, and credit score', 'Employer, salary, and credit score are not CIP elements. They may matter for underwriting, but not for the BSA identity requirement.'],
      ['Name, fingerprints, retina scan, and voice print', 'Biometric collection is not a CIP requirement. The rule asks for documentary or non-documentary verification, not biometric capture.'],
      ['Name, mother\'s maiden name, prior addresses, and tax filing status', 'These are not the four CIP data elements. The rule names a specific minimum set: name, DOB, address, ID number.'],
    ],
    'CIP is the floor — every new account must collect and verify the four core data elements. CDD (the relationship-purpose layer) and EDD (the high-risk layer) sit on top of CIP, not in place of it.'),

  q(4420022, 'Career Skills', CHAPTER, 'Patriot beneficial-ownership origin',
    'The Patriot Act in 2001 contemplated beneficial ownership identification as a concept, but the binding federal rule requiring banks to identify legal-entity beneficial owners at account opening came later. When?',
    'The FinCEN CDD Final Rule was issued in May 2016 with a compliance date of May 11, 2018 — adding the fifth pillar and the beneficial-ownership certification at account opening',
    [
      ['Immediately at Patriot Act enactment in 2001', 'Patriot Act 2001 did not impose a binding bank-level beneficial-ownership rule at the customer-account level. That came with the 2016/2018 CDD Rule.'],
      ['With the Annunzio-Wylie Act in 1992', 'Annunzio-Wylie predates the modern beneficial-ownership rule by more than two decades. It authorized AML programs but not the BO requirement.'],
      ['With the Corporate Transparency Act in 2021', 'The Corporate Transparency Act creates a *registry* requirement for entity formation reporting to FinCEN. That is different from the bank-level CDD/BO obligation, which is the 2016/2018 rule.'],
    ],
    'There are two beneficial-ownership regimes to keep straight: the bank-facing CDD Rule (2016/2018) and the new Corporate Transparency Act registry (2021, phased implementation). They interact but are not the same rule.'),

  // -------------------------------------------------------------------------
  // BENEFICIAL OWNERSHIP RULE 2018 (4420023–4420027)
  // -------------------------------------------------------------------------
  q(4420023, 'Career Skills', CHAPTER, 'BO Rule — ownership prong',
    'Under the 2018 CDD Rule, when a legal entity opens an account, the bank must identify beneficial owners under two prongs. What is the ownership-prong threshold?',
    'Each individual who directly or indirectly owns 25% or more of the equity interests of the legal entity must be identified',
    [
      ['Each individual who owns 10% or more of the equity interests', '10% is not the BO Rule\'s threshold. The bank may set a lower internal trigger as a risk policy, but the federal rule\'s threshold is 25%.'],
      ['Only the individual who owns more than 50% of the entity', 'Majority ownership is a different test. The BO Rule identifies every owner at 25% or above, which can produce zero, one, two, three, or four owners under the ownership prong.'],
      ['Any individual the entity names as a beneficial owner regardless of ownership percentage', 'The customer cannot redefine the threshold. The 25% ownership prong is rule-based, not customer-elected.'],
    ],
    'The 25% ownership prong can produce up to four named individuals (if four people each own 25%) or zero (if no one reaches 25%). The bank must still capture a control-prong individual either way.'),

  q(4420024, 'Career Skills', CHAPTER, 'BO Rule — control prong',
    'In addition to the ownership prong, the 2018 CDD Rule requires a separate "control-prong" identification. What does that mean?',
    'A single individual with significant responsibility to control, manage, or direct the legal entity — such as the CEO, CFO, COO, managing member, general partner, or other executive officer',
    [
      ['Every individual on the company\'s board of directors', 'The rule requires *one* control-prong individual, not the entire board. Banks may collect more as risk policy, but the rule names a single person.'],
      ['The lawyer who incorporated the entity', 'Formation counsel does not satisfy the control prong. The rule looks at who controls or manages the *entity*, not who filed the paperwork.'],
      ['Whichever shareholder owns the largest stake regardless of percentage', 'Largest shareholder is an ownership concept, not a control one. The control prong is a separate identification that always applies, even when no one reaches 25% ownership.'],
    ],
    'The control prong always produces at least one identified individual, even when no one passes the 25% ownership test. That backstop is what keeps shell-company structures from washing out all named owners.'),

  q(4420025, 'Career Skills', CHAPTER, 'BO Rule — certification',
    'How is beneficial-ownership information collected and attested under the 2018 CDD Rule?',
    'The legal entity\'s representative certifies the identity of the beneficial owners — typically via FinCEN\'s standard certification form or substantially similar bank form — and the bank verifies identity using risk-based methods',
    [
      ['The bank independently traces ownership through public records without involving the customer', 'Independent tracing alone is not the mechanism. The customer\'s certification is the foundation; the bank then verifies the named individuals\' identities.'],
      ['The bank takes the customer\'s word verbally with no written record', 'A verbal attestation does not satisfy the rule. A signed certification (or equivalent record) is the documentation regulators expect to see in the file.'],
      ['The bank refuses to open accounts for any entity with foreign owners', 'There is no foreign-ownership prohibition. The rule applies regardless of nationality; risk-based controls handle higher-risk situations through EDD, not refusal.'],
    ],
    'The certification is a customer-signed attestation; the bank verifies the *identity* of named individuals (like any CIP) and may apply EDD if risk warrants. The form itself is the audit trail an examiner will look for.'),

  q(4420026, 'Career Skills', CHAPTER, 'BO Rule — entity exemptions',
    'The 2018 CDD Rule lists categories of legal entities for which beneficial-ownership identification is not required. Which of the following is exempt?',
    'Publicly traded companies listed on a US stock exchange, regulated financial institutions, and certain SEC-registered investment vehicles — entities whose ownership is otherwise transparent or regulated',
    [
      ['All entities with revenues under $5 million', 'There is no revenue-based exemption. Small businesses must still be diligenced under the rule.'],
      ['All sole proprietorships', 'A sole proprietorship operating in the owner\'s name is typically not a "legal entity customer" under the rule because it has no separate legal personality. But that is a definitional question, not an "exemption."'],
      ['Any entity that has had an account at the bank for more than five years', 'Tenure does not create exemption. The rule applies at *new account opening* for legal-entity customers; existing accounts are addressed under ongoing CDD.'],
    ],
    'The exemption list is narrow and ties to entities whose ownership is already disclosed or regulated. Treating exemptions casually is a common finding — examiners look for the specific exemption category the bank relied on.'),

  q(4420027, 'Career Skills', CHAPTER, 'BO Rule — trigger events',
    'After initial account opening, when must a bank update beneficial-ownership information under the 2018 CDD Rule?',
    'On a risk-based basis, particularly when the bank becomes aware of changes — ownership transfers, control changes, or other events that suggest the prior certification is no longer accurate',
    [
      ['Every calendar quarter regardless of risk', 'Quarterly refresh is not the rule. The rule uses a risk-based "ongoing CDD" trigger model.'],
      ['Never — the certification is final once collected', 'Permanent certification is the opposite of the rule. The whole point of the ongoing-CDD pillar is that customer information evolves and must be updated.'],
      ['Only when the customer asks for a credit increase', 'Credit application is not the rule\'s trigger. AML refresh runs on AML risk events, not credit events.'],
    ],
    'Ongoing CDD pairs with the BO Rule: the bank watches for events suggesting prior information is stale, and updates accordingly. High-risk customers get more proactive refresh than lower-risk ones.'),

  // -------------------------------------------------------------------------
  // CDD REQUIREMENTS (4420028–4420032)
  // -------------------------------------------------------------------------
  q(4420028, 'Career Skills', CHAPTER, 'CIP — identity verification methods',
    'The CIP rule allows banks to verify customer identity using which methods?',
    'Documentary methods (e.g., unexpired driver\'s license or passport), non-documentary methods (e.g., comparing customer information to consumer reports, public databases), or a combination — with the choice documented in the CIP',
    [
      ['Only documentary methods — original photo ID is the only acceptable verification', 'Non-documentary verification is explicitly permitted. Many remote-onboarding programs depend on it.'],
      ['Only non-documentary methods — banks must avoid asking for ID', 'There is no prohibition on documentary verification. In fact, traditional branch onboarding leans heavily on documentary verification.'],
      ['Only methods approved in writing by FinCEN for that specific bank', 'CIP methods do not require bespoke FinCEN approval. The bank designs its CIP and documents the methods it uses.'],
    ],
    'CIP flexibility is the point — the rule scales from branch to remote to digital onboarding. The discipline is documenting *which* methods are used and ensuring they actually verify identity, not just collect data.'),

  q(4420029, 'Career Skills', CHAPTER, 'CIP — customer notice',
    'The CIP rule requires banks to give customers notice that information will be requested to verify identity. Which framing of the notice is correct?',
    'The bank must provide notice before opening the account, in a manner reasonably designed to ensure the customer can see it — for example, posted in branches, on the website, or in the application',
    [
      ['The customer must sign a notarized acknowledgment that they understand CIP', 'A notarized acknowledgment is not required. The rule asks for reasonable notice, not formal notarization.'],
      ['The notice can be delivered only after the account is open', 'Notice must come before or contemporaneous with account opening, not after. The whole point is transparency at onboarding.'],
      ['Notice is optional and many banks skip it', 'Notice is mandatory under the CIP rule. Skipping it is a finding.'],
    ],
    'The CIP notice is one of the simplest pieces of the rule and one of the most easily overlooked. Examiners check it as a basic-compliance question — having the notice posted and documented is a low-cost win.'),

  q(4420030, 'Career Skills', CHAPTER, 'CDD — nature and purpose',
    'A core CDD obligation is understanding the "nature and purpose" of customer relationships. What does that mean in practice for a new business banking customer?',
    'Document the type of business, expected transaction volume and types, geographies served, and the source of funds — enough to establish a baseline that monitoring can compare actual activity against',
    [
      ['Verify the legal name and tax ID and stop there', 'Name and tax ID are CIP elements, not the nature-and-purpose layer. Nature-and-purpose is what gives monitoring its baseline.'],
      ['Forecast next year\'s revenue for the customer', 'Revenue forecasting is the customer\'s business, not the bank\'s CDD output. The bank documents expected activity, not financial projections.'],
      ['Run a single credit report and use the credit score as the risk rating', 'Credit score is not an AML risk rating. AML risk weighs business type, geography, products, and ownership — not creditworthiness.'],
    ],
    'Nature-and-purpose is what makes monitoring meaningful. Without it, an alert has nothing to compare against — every transaction looks like noise or every transaction looks suspicious.'),

  q(4420031, 'Career Skills', CHAPTER, 'CDD — beneficial owner at opening',
    'A US-incorporated LLC opens a new checking account. Two individuals each own 50% and one of them is also the CEO. Under the BO Rule, who must be identified?',
    'Both 50% owners under the ownership prong, and the CEO under the control prong (which may be one of the two owners, in which case that individual is named on both prongs)',
    [
      ['Only the CEO, because she is the control person', 'The ownership prong is separate. Each 25%+ owner must be identified in addition to the single control-prong individual.'],
      ['Only the larger of the two owners', 'There is no "larger of" rule. Both owners pass the 25% threshold and must each be identified.'],
      ['Neither — the LLC itself is the customer and ownership transparency is not required for an LLC', 'LLCs are exactly the entity type the BO Rule was designed for. They are not exempt — far from it, they were the rule\'s primary target.'],
    ],
    'The ownership and control prongs run in parallel. The same person can satisfy both, but the bank still documents both prongs — the rule\'s certification form has separate sections for that reason.'),

  q(4420032, 'Career Skills', CHAPTER, 'CDD — risk rating',
    'A bank\'s CDD program assigns a customer risk rating at onboarding. What inputs typically feed that rating?',
    'Customer type, geography, products used, ownership structure, source of funds, and (for businesses) industry — combined into a methodology documented in the AML program',
    [
      ['Credit score alone', 'Credit score is a different risk dimension entirely. AML risk is about money-laundering and terrorism-financing risk, not creditworthiness.'],
      ['Account balance alone', 'High balance does not equal high AML risk and low balance does not equal low risk. Wealth is one factor among many, not the whole rating.'],
      ['Whether the customer was referred by an existing customer', 'Referral source can be a small input in some methodologies but is not the basis of a risk rating. The rating uses substantive factors.'],
    ],
    'A defensible risk-rating methodology is one of the documents examiners ask to see early. Inputs, weights, override policy, and refresh cadence are all expected — and inconsistency between methodology and observed ratings is a classic finding.'),

  // -------------------------------------------------------------------------
  // ENHANCED DUE DILIGENCE / EDD (4420033–4420037)
  // -------------------------------------------------------------------------
  q(4420033, 'Career Skills', CHAPTER, 'EDD — politically exposed persons',
    'A new private banking client is a senior member of a foreign government\'s finance ministry. What does this status trigger?',
    'EDD as a politically exposed person (PEP) — source-of-wealth and source-of-funds inquiries, senior-officer approval, and ongoing enhanced monitoring throughout the relationship',
    [
      ['Automatic account refusal — banks cannot serve foreign government officials', 'There is no blanket prohibition on PEP relationships. The requirement is enhanced diligence and senior approval, not exclusion.'],
      ['Standard CDD only, because PEPs are not separately defined in US rules', 'US AML regulations and FATF guidance both recognize PEPs (especially senior foreign political figures). The expectation is EDD, not standard CDD.'],
      ['Routine annual review at the same cadence as any other customer', 'PEP relationships expect enhanced ongoing monitoring at a higher cadence than ordinary customers — exactly because the public-position status changes the risk profile.'],
    ],
    'PEP risk is not about presumed wrongdoing — it is about the elevated potential for corruption-related flows. EDD documents source of wealth, source of funds, expected activity, and approval at the right level.'),

  q(4420034, 'Career Skills', CHAPTER, 'EDD — high-risk jurisdictions',
    'A US bank\'s customer regularly receives wires from a jurisdiction that FATF has listed as a "Jurisdiction subject to a Call for Action." What is the expected response?',
    'Apply enhanced due diligence to the relationship and transactions involving that jurisdiction, including countermeasures consistent with FinCEN guidance — and consider whether continued activity is appropriate',
    [
      ['Treat the jurisdiction the same as any other since FATF lists are not binding in the US', 'FATF designations carry weight in US examinations. FinCEN frequently issues advisories that align with FATF actions and examiners expect EDD aligned with those designations.'],
      ['Reject every wire from any country other than the United States', 'Universal foreign-wire rejection is not the rule and would shut down legitimate trade. The discipline is risk-based EDD targeted at the named higher-risk jurisdictions.'],
      ['File a SAR for every transaction involving that jurisdiction regardless of facts', 'Jurisdiction risk does not by itself make every transaction "suspicious" for SAR purposes. The SAR test is suspicious activity, not country risk alone — though country risk informs the analysis.'],
    ],
    'High-risk-jurisdiction EDD lives at the intersection of FATF designations, OFAC sanctions, and FinCEN advisories. Banks track all three and route higher-risk geographies through enhanced controls.'),

  q(4420035, 'Career Skills', CHAPTER, 'EDD — correspondent banking',
    'A US bank is opening a correspondent account for a foreign bank. Under Patriot Act Section 312, what specific EDD steps are required?',
    'Assess AML controls of the respondent, determine whether the respondent itself maintains correspondent accounts for other foreign banks ("nested" relationships), and document the purpose and expected use of the account',
    [
      ['Refuse all foreign correspondent relationships', 'There is no prohibition on correspondent banking. The statute requires *enhanced diligence*, not refusal.'],
      ['Treat foreign correspondent accounts as standard CDD accounts', 'Section 312 specifically takes correspondent relationships out of standard CDD. The whole point of the section is enhanced treatment.'],
      ['Rely entirely on the foreign bank\'s own attestation with no independent inquiry', 'Self-attestation alone is not enough under Section 312. The bank must form a reasoned view of the respondent\'s AML controls, not just collect a form.'],
    ],
    'Correspondent banking is where dollar clearing meets cross-border risk. Section 312 EDD is the standing requirement; FinCEN special measures (Section 311) can layer on top when a specific jurisdiction or institution is named.'),

  q(4420036, 'Career Skills', CHAPTER, 'EDD — private banking',
    'Patriot Act Section 312 also requires EDD for "private banking accounts." What is the technical definition of a private banking account under the implementing rule?',
    'An account that requires a minimum aggregate deposit of $1,000,000 or more, is established on behalf of or for the benefit of one or more non-US persons, and is administered by a bank officer acting as a liaison with the customer',
    [
      ['Any account at a bank\'s private banking unit regardless of balance or customer nationality', 'The statutory definition is specific. Not every "private banking" branded account meets the legal definition — and not every account that meets the definition lives in a "private banking" unit.'],
      ['Any account holding investment products', 'Product mix does not define the statutory category. The $1M aggregate, non-US-person, and officer-liaison elements are what trigger Section 312 private-banking EDD.'],
      ['Any account belonging to a politically exposed person', 'PEP status is a separate EDD trigger. The private-banking definition under Section 312 stands on the dollar threshold and non-US-person test, even before PEP status is considered.'],
    ],
    'The three-part definition matters because Section 312 mandates specific EDD steps — including source-of-wealth determination and PEP screening — that flow only from meeting the statutory definition. Banks document the definition test, then apply the EDD.'),

  q(4420037, 'Career Skills', CHAPTER, 'EDD — ongoing monitoring intensity',
    'A customer is rated high-risk at onboarding and EDD is applied. What does "enhanced ongoing monitoring" look like in practice, compared to standard customers?',
    'Higher-frequency periodic reviews, more aggressive monitoring scenario thresholds, source-of-funds documentation refresh, and proactive review of public-record adverse media',
    [
      ['Identical monitoring to standard customers — only the onboarding step is enhanced', 'EDD is not just an onboarding step. The "ongoing" part is what regulators test in mature programs.'],
      ['No ongoing monitoring because EDD at onboarding is sufficient for the life of the account', 'EDD at opening alone is exactly the trap examiners hunt for. The relationship\'s risk profile is dynamic.'],
      ['Random monthly sampling regardless of activity', 'Random sampling is not enhanced monitoring — it is a different control. Enhanced monitoring targets risk indicators specific to the customer\'s profile.'],
    ],
    'Enhanced monitoring is what closes the loop between an EDD rating at opening and a defensible SAR investigation later. Without the ongoing component, the rating is decorative.'),

  // -------------------------------------------------------------------------
  // OFAC SANCTIONS (4420038–4420042)
  // -------------------------------------------------------------------------
  q(4420038, 'Career Skills', CHAPTER, 'OFAC — SDN list',
    'OFAC maintains the Specially Designated Nationals and Blocked Persons (SDN) list. What is the obligation when a US bank identifies a customer or transaction matching an SDN?',
    'Block (freeze) the property and report to OFAC within 10 business days of blocking; the property remains blocked until OFAC issues a license or removes the designation',
    [
      ['Reject the transaction silently with no report', 'Silent rejection is not the rule for SDN matches. Blocking is required for SDN-designated property, with a 10-day report to OFAC.'],
      ['Continue processing while compliance investigates', 'Processing transactions involving SDN parties is itself a violation — strict-liability exposure. Activity stops at identification, not at investigation completion.'],
      ['Notify the customer immediately of the SDN match before blocking', 'Tipping off the SDN-listed party can be unlawful and would defeat the purpose. The block is performed first; communication with the customer follows OFAC\'s rules.'],
    ],
    'Blocking vs rejecting depends on the sanctions program. Comprehensive sanctions and SDN designations generally require blocking; rejecting is appropriate for prohibited transactions involving sanctioned countries without a blocking interest, depending on the program.'),

  q(4420039, 'Career Skills', CHAPTER, 'OFAC — sectoral sanctions',
    'Some OFAC designations appear on the Sectoral Sanctions Identifications (SSI) List rather than the SDN list. What is the practical difference?',
    'SSI designations prohibit specific categories of transactions (e.g., new debt or new equity above defined maturities) but do not require blocking the entity\'s property generally — they are narrower, targeted prohibitions',
    [
      ['SSI designations are voluntary guidelines that banks can choose to follow', 'SSI prohibitions are binding US sanctions law. Compliance is mandatory, not voluntary.'],
      ['SSI designations always require blocking the entity\'s full property', 'Full blocking is the SDN treatment. SSI is narrower — it carves out specific prohibited transaction types while allowing other dealings.'],
      ['SSI designations expire automatically after 12 months', 'There is no automatic expiry. SSI designations remain in effect until OFAC removes them.'],
    ],
    'SSI is the targeted-sanctions tool that lets the US restrict specific market activity without freezing an entire entity. Understanding the carve-outs is essential because the wrong assumption — that SSI = SDN — produces false rejects and damages legitimate business.'),

  q(4420040, 'Career Skills', CHAPTER, 'OFAC — blocking vs rejecting',
    'A US bank identifies an outgoing wire that would violate a comprehensive sanctions program but does not involve a blocked person\'s property. What is the right action?',
    'Reject the transaction and file a Rejected Transaction Report with OFAC within 10 business days — funds are returned to the sender; nothing is held',
    [
      ['Block the funds and hold them until OFAC issues a license', 'Blocking is reserved for situations involving a blocked person\'s property. A program-based prohibition without a blocking interest is rejected, not blocked.'],
      ['Process the transaction and file a SAR', 'A SAR is a BSA-side report and does not authorize processing of a sanctioned transaction. The bank cannot complete a prohibited wire.'],
      ['Process the transaction internally and decide later whether to report', 'Sanctions violations are strict liability. There is no "process now, decide later" path.'],
    ],
    'The block-vs-reject distinction is the practical hinge of sanctions operations. Both have 10-business-day reporting timelines, but the funds-flow consequences are very different and the bank must categorize correctly.'),

  q(4420041, 'Career Skills', CHAPTER, 'OFAC — general vs specific licenses',
    'OFAC issues both "general licenses" and "specific licenses" that authorize otherwise-prohibited activity. What is the difference?',
    'A general license authorizes a defined category of transactions for any party meeting its terms (no application required); a specific license is granted by OFAC to a named applicant for a particular transaction or set of transactions',
    [
      ['General licenses cost more than specific licenses', 'There is no cost differential of this kind. License type is a regulatory mechanism, not a pricing one.'],
      ['Specific licenses are issued automatically; general licenses require approval', 'It is the reverse. General licenses are self-executing for parties meeting the terms; specific licenses require application and OFAC adjudication.'],
      ['General licenses apply only to financial institutions; specific licenses apply only to individuals', 'There is no such party-type split. Both license types are available across applicants — the difference is scope (categorical vs particular).'],
    ],
    'Understanding the license architecture matters because legitimate, authorized activity often runs through general licenses. Banks that treat every sanctioned-country touch as a rejection over-block humanitarian and other licensed activity and may themselves face customer-harm scrutiny.'),

  q(4420042, 'Career Skills', CHAPTER, 'OFAC — 50% rule',
    'OFAC\'s "50 Percent Rule" extends sanctions to entities that are not themselves named on the SDN list. How does it work?',
    'An entity that is owned, directly or indirectly, 50% or more in the aggregate by one or more blocked persons is itself considered blocked, even if not separately listed on the SDN list',
    [
      ['Only entities explicitly named on the SDN list are subject to sanctions', 'The 50% Rule is exactly the mechanism that reaches *unnamed* entities. Treating only listed entities as blocked is the most common sanctions-compliance error.'],
      ['Any entity with any sanctioned-person ownership is blocked, regardless of percentage', 'There is no zero-threshold rule. The 50% aggregate test is the bright line — below it, blocking does not automatically attach (though risk-based decisions may still apply).'],
      ['The rule applies only to majority ownership by a single blocked person, not aggregate', 'Aggregate is the key word. The rule sums up blocked-person ownership across multiple blocked persons; it does not require a single 50% owner.'],
    ],
    'The 50% Rule is one of the highest-leverage concepts in sanctions compliance. It is why screening cannot stop at the listed name — beneficial-ownership data must feed sanctions screening, not just AML CDD.'),

  // -------------------------------------------------------------------------
  // REPORTING REQUIREMENTS (4420043–4420046)
  // -------------------------------------------------------------------------
  q(4420043, 'Career Skills', CHAPTER, 'SAR — bank threshold',
    'A US bank identifies a potentially suspicious transaction by a known suspect. What is the dollar threshold above which a SAR must be filed?',
    '$5,000 or more in aggregate funds or assets, when a suspect is identified or can be identified',
    [
      ['$10,000, the same threshold as a CTR', 'CTR is $10K cash, but SAR is a separate threshold. The two reports answer different questions and should not be conflated.'],
      ['$50,000, regardless of whether a suspect can be identified', 'The $50K-without-suspect figure is not a real threshold. The actual no-suspect threshold is $25,000 in aggregate.'],
      ['Any amount, with no threshold', 'There is a threshold structure. Below the threshold a SAR is not required (though it may be filed voluntarily); above it, the report is mandatory.'],
    ],
    'SAR thresholds for banks: $5,000 when a suspect is identified or identifiable; $25,000 in aggregate when no suspect can be identified; and any amount for transactions involving insider abuse. Other institutions have different thresholds — MSBs, broker-dealers, casinos each have their own rules.'),

  q(4420044, 'Career Skills', CHAPTER, 'SAR — filing timeline',
    'Once a bank determines that a SAR must be filed, how long does it have to file?',
    '30 calendar days from initial detection of facts that may constitute a basis for filing — extendable by 30 more days if no suspect has been identified, capped at 60 days from detection',
    [
      ['10 business days, same as the OFAC blocking report', 'OFAC and SAR timelines are different. SAR is 30 calendar days (extendable to 60 in defined circumstances).'],
      ['90 calendar days, with no extensions', 'The standard window is 30 days, not 90. The 60-day cap applies only when extended for suspect identification.'],
      ['Immediately on identification, with no defined window', 'A defined window exists precisely so banks have time to investigate. "Immediately" is not the rule — but neither is open-ended delay.'],
    ],
    'The 30-day clock starts at "initial detection of facts that may constitute a basis for filing" — not at confirmation of wrongdoing. Programs that wait for certainty often miss the window; programs that file too defensively burden FinCEN. Disciplined SAR timing is a quality marker.'),

  q(4420045, 'Career Skills', CHAPTER, 'CTR mechanics',
    'A bank customer makes three cash deposits of $4,000 each at the same branch on the same business day. What is the bank\'s reporting obligation?',
    'File a Currency Transaction Report (CTR) — the BSA requires aggregation of multiple cash transactions by or on behalf of the same person on the same business day that total more than $10,000',
    [
      ['No CTR — each individual transaction is under $10,000', 'CTR aggregation is the entire point of the rule. Three $4K deposits aggregate to $12K and require a CTR.'],
      ['File a SAR for structuring without filing a CTR', 'Splitting deposits to evade reporting (structuring) can trigger a SAR, but it does *not* replace the CTR. Both reports can be required in the same fact pattern; CTR is mandatory whenever the aggregation threshold is crossed.'],
      ['File a CTR only if the customer is identified as suspicious', 'CTRs are not suspicion-based. They are mechanical: above $10K aggregate cash in one business day, the report is filed regardless of suspicion.'],
    ],
    'CTRs are mechanical, mandatory, and aggregated. Cash-intensive businesses can drive significant CTR volume and benefit from FinCEN\'s exemption process for "Phase I" and "Phase II" exempt customers — knowing the exemption pathway prevents both over- and under-reporting.'),

  q(4420046, 'Career Skills', CHAPTER, 'Form 8300 — non-bank cash reporting',
    'A non-financial business — for example, a car dealer — receives a $15,000 cash payment from a customer. What BSA-related report is triggered?',
    'IRS/FinCEN Form 8300, which non-financial trades and businesses must file for cash payments over $10,000 received in a trade or business',
    [
      ['A CTR, identical to what a bank would file', 'CTRs are the bank-side report. Non-banks use Form 8300, jointly administered by the IRS and FinCEN, which is a distinct form with its own rules.'],
      ['No federal report — only state-level reporting may apply', 'There is a federal report: Form 8300 is required. Treating non-bank cash as unreported is the most common Form 8300 mistake among non-financial businesses.'],
      ['A SAR filed by the car dealer', 'Form 8300 has a "suspicious" box that can be checked, but Form 8300 itself is the report — not a SAR in the bank sense. Most non-financial businesses do not file SARs.'],
    ],
    'Form 8300 extends BSA-style cash transparency outside the financial sector. Banks see it indirectly: customers operating non-financial businesses may ask about thresholds, and bank AML teams must understand the parallel regime to read cross-source data correctly.'),
]

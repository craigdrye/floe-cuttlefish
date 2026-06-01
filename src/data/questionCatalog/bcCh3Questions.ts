import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// BANK COMPLIANCE — Chapter 3: Sanctions and Screening
// ----------------------------------------------------------------------------
// 44 questions (IDs 4420200–4420243) extending the existing six BC Ch3
// questions (4107416, 4107417, 4107426, 4107886, 4107887, 4107896 in
// careerAgentGeneratedRoadmapFinance.ts). These take the learner from the
// shape of the OFAC framework through list screening, the 50 Percent Rule,
// apparent-violation reporting, Russia sanctions, wind-down licenses,
// trade-based money laundering, and secondary sanctions exposure.
//
// US-context, OFAC framework. Voice matches the existing BC pack and the
// VC capstone style: specific, evidence-anchored, no strawman distractors.
// Bespoke whyWrong rationales tie back to real OFAC enforcement actions
// (BNP Paribas $8.97B 2014, Credit Suisse $536M 2009, Standard Chartered
// $1.1B 2019, HSBC $1.9B 2012, Commerzbank $1.45B 2015, ING $619M 2012,
// Société Générale $1.34B 2018, Deutsche Bank, ZTE, Halkbank, etc.).
// ----------------------------------------------------------------------------

const SOURCE = 'Floe BC Ch3 canonical bank'

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

const CHAPTER = 'Sanctions and Screening'

// Difficulty distribution: 13 at 3, 22 at 4, 9 at 5 (44 total).
export const BC_CH3_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // OFAC sanctions framework (7)
  4420200: 3,
  4420201: 4,
  4420202: 4,
  4420203: 3,
  4420204: 4,
  4420205: 5,
  4420206: 4,

  // List screening (6)
  4420207: 3,
  4420208: 4,
  4420209: 3,
  4420210: 4,
  4420211: 4,
  4420212: 3,

  // 50% rule (5)
  4420213: 4,
  4420214: 5,
  4420215: 4,
  4420216: 4,
  4420217: 5,

  // Apparent violations and reporting (6)
  4420218: 4,
  4420219: 3,
  4420220: 4,
  4420221: 5,
  4420222: 4,
  4420223: 3,

  // Russia sanctions (7)
  4420224: 3,
  4420225: 4,
  4420226: 4,
  4420227: 5,
  4420228: 4,
  4420229: 4,
  4420230: 5,

  // Wind-down licenses (5)
  4420231: 3,
  4420232: 4,
  4420233: 4,
  4420234: 5,
  4420235: 4,

  // Trade-based money laundering (4)
  4420236: 3,
  4420237: 4,
  4420238: 3,
  4420239: 4,

  // Secondary sanctions (4)
  4420240: 4,
  4420241: 5,
  4420242: 3,
  4420243: 4,
}

export const bcCh3Questions: Question[] = [
  // -------------------------------------------------------------------------
  // OFAC SANCTIONS FRAMEWORK (4420200–4420206)
  // The shape of the US sanctions universe: comprehensive country programs,
  // targeted list-based programs, sectoral programs, and how each constrains
  // what a US-touching bank may do.
  // -------------------------------------------------------------------------
  q(4420200, 'Career Skills', CHAPTER, 'Comprehensive vs targeted programs',
    'A new analyst asks why payments touching Iran are treated differently from payments touching a single SDN-listed person in Mexico. What is the cleanest framing of the distinction in OFAC programs?',
    'Iran is a comprehensive country program — virtually all transactions involving Iran or Iranian persons are prohibited absent a license, while SDN-listed-person programs are targeted: the prohibition attaches to the named person (and their 50%+ owned entities), not to the entire jurisdiction',
    [
      ['Iran is on the SDN list as a country, and Mexico is not', 'Countries are not on the SDN list — the SDN list names persons, entities, vessels, and aircraft. Country programs are codified separately under jurisdiction-specific regulations (e.g. the Iranian Transactions and Sanctions Regulations, 31 CFR 560).'],
      ['Iran has more SDN entries than Mexico, so the volume of names is the difference', 'Volume of listings is a symptom, not the distinction. Even if Iran had only one SDN entry, the comprehensive embargo would still apply to all Iranian-origin transactions because the country program itself prohibits them.'],
      ['The difference is that Iran is OFAC and Mexico is FinCEN', 'OFAC and FinCEN are different agencies with different mandates — OFAC administers sanctions; FinCEN administers BSA/AML. Both Iran and Mexico-based SDN matters are OFAC questions.'],
    ],
    'Comprehensive programs (Iran, Cuba, North Korea, Syria, Crimea/so-called DNR/LNR regions) prohibit broad categories of dealings with a jurisdiction; targeted/list-based programs prohibit dealings with named persons regardless of jurisdiction. The screening and licensing posture differs sharply between the two.'),

  q(4420201, 'Career Skills', CHAPTER, 'Comprehensive program scope: North Korea',
    'A US bank receives a wire request to pay a Chinese trading company that publicly markets coal sourced from North Korea. The trading company is not on the SDN list. Under the North Korea program, how should the bank treat the request?',
    'Block or reject under the comprehensive DPRK program — North Korea-origin goods (including coal) are prohibited regardless of where the intermediary is incorporated, and processing the payment exposes the bank to OFAC liability even though the trading company is not individually listed',
    [
      ['Process the payment because only SDN-listed companies are off-limits', 'Comprehensive programs do not require the counterparty to be SDN-listed. The North Korea program (31 CFR 510) prohibits importation and related transactions involving DPRK-origin goods irrespective of who the immediate counterparty is.'],
      ['Process the payment because the trading company is Chinese, not North Korean', 'Jurisdiction of the intermediary does not cleanse the underlying DPRK nexus. BNP Paribas was fined $8.97B in 2014 partly because Sudanese-, Iranian-, and Cuban-origin transactions were stripped of their nexus through European intermediaries — the nexus, not the immediate party, drives the violation.'],
      ['Process the payment if the trading company signs a representation that the goods are not North Korean', 'Self-certification by the counterparty is not a defense when the public marketing already shows DPRK origin. OFAC treats willful blindness and reliance on facially incredible reps as aggravating factors.'],
    ],
    'Comprehensive country programs attach to the goods, services, or jurisdictional nexus, not just to named parties. A US bank cannot cleanse that nexus by routing through a non-sanctioned intermediary or accepting a counterparty representation that contradicts visible facts.'),

  q(4420202, 'Career Skills', CHAPTER, 'Cuba program scope and travel-related payments',
    'A US bank processes a card transaction for a US cardholder paying a Havana hotel. The cardholder claims the travel was for a journalistic purpose. How should the bank evaluate the transaction under the Cuba program?',
    'Travel-related transactions are prohibited unless they fall within one of the twelve authorized categories of travel under the Cuban Assets Control Regulations (31 CFR 515); the bank may rely on the cardholder\'s certification but should document the asserted general-license category and apply enhanced review if patterns suggest tourism',
    [
      ['Block all card transactions to Cuba because Cuba is a comprehensive embargo', 'Cuba is comprehensive but the CACR explicitly authorize twelve categories of travel by general license, including journalistic activity. Treating all Cuba travel as prohibited misreads the framework and over-blocks lawful transactions.'],
      ['Process the transaction because the cardholder said it was journalism', 'Pure verbal claims without documentation do not satisfy OFAC\'s recordkeeping expectations. The bank does not have to investigate every claim, but it should be able to show it captured the asserted category and applied risk-based scrutiny.'],
      ['Process the transaction because card transactions are exempt from the Cuba program', 'There is no card-transaction carve-out. The CACR applies to all US-person transactions; card networks themselves implement category controls and reporting.'],
    ],
    'The Cuba program is comprehensive but layered with general licenses for categorized travel and people-to-people activity. Sound compliance distinguishes "the program is comprehensive" from "all activity is prohibited" — both errors damage credibility with examiners.'),

  q(4420203, 'Career Skills', CHAPTER, 'Sectoral sanctions identifications (SSI) list',
    'A US bank is asked to extend 60-day trade financing to a Russian state-owned bank that is on OFAC\'s Sectoral Sanctions Identifications (SSI) list under Directive 1. The customer is not on the SDN list. How should the bank treat the financing?',
    'Reject — Directive 1 prohibits dealings in new debt of greater than the specified maturity (originally 30 days, later tightened to 14 days for certain entities) issued by listed Russian financial institutions; 60-day financing is new debt and falls within the prohibition even though the bank is not SDN-listed',
    [
      ['Process the financing because SSI listing is not the same as a block', 'SSI listings are not full blocks — assets are not frozen — but the directive-specific prohibitions still bind. Treating SSI as "informational only" is the mistake that exposed multiple US institutions to enforcement after 2014.'],
      ['Process the financing because the customer is a bank and bank-to-bank lines are exempt', 'There is no bank-to-bank exemption under the directives. The directives target debt and equity dealings with the listed entity regardless of counterparty type.'],
      ['Process the financing if the customer certifies the proceeds will not be used in Crimea', 'End-use certification does not cure a Directive 1 maturity violation. The prohibition attaches to the instrument (new debt over the maturity threshold) regardless of how proceeds are deployed.'],
    ],
    'Sectoral programs are calibrated: they prohibit specific kinds of dealings (new debt, new equity, deepwater/Arctic/shale activities) with named entities, while leaving other dealings open. The compliance discipline is matching the proposed transaction against the specific directive, not against a generic "is this person sanctioned" check.'),

  q(4420204, 'Career Skills', CHAPTER, 'Venezuela sectoral program',
    'A US bank is approached to refinance debt of a Venezuelan state-owned oil entity. Under the Venezuela-related Executive Orders, what is the principal compliance question the bank must answer before agreeing?',
    'Whether the entity (or any 50%+ owner of it) is blocked under EO 13808 and EO 13884, which together broadly prohibit dealings with PdVSA and the Government of Venezuela; refinancing prohibited debt is itself a prohibited transaction without a specific license',
    [
      ['Whether the customer has a US affiliate that can act as guarantor', 'A US-affiliate guarantor does not cure a prohibited dealing. If the underlying entity is blocked, structuring around it through an affiliate is exactly the conduct OFAC penalizes.'],
      ['Whether the refinancing rate is at market', 'Market pricing is irrelevant to the sanctions question. OFAC does not adjudicate the economics; it adjudicates whether the dealing is permitted.'],
      ['Whether the bank has previously done business with the entity', 'Prior dealings do not grandfather a new prohibited transaction. Each transaction is evaluated against the program as it stands at the time, not against legacy relationship.'],
    ],
    'Venezuela sanctions expanded from sectoral (EO 13808, 2017) to a broad block of the Government of Venezuela (EO 13884, 2019). The compliance question is which order applies to the specific entity and transaction — not whether the entity is on the SDN list in name.'),

  q(4420205, 'Career Skills', CHAPTER, 'Distinguishing block, reject, and license',
    'A US bank flags a wire that hits a sanctions match. Under what circumstances must the bank "block" the funds versus "reject" the wire? Pick the framing that examiners expect to see in a written procedure.',
    'Block (freeze) funds when the transaction involves property in which a blocked person has an interest (most SDN matters, comprehensive country programs); reject (return) when the transaction would violate a prohibition but no blockable property interest is in the bank\'s possession (e.g. a payment merely transiting through where no party has a blockable interest, but the transaction itself is prohibited)',
    [
      ['Always block if there is any sanctions hit and never return funds without a license', 'Over-blocking creates its own problems — banks have been criticized for freezing non-blockable funds and triggering reporting they did not actually owe. The block/reject distinction is part of the procedure OFAC expects to see.'],
      ['Always reject so the funds go back to the originator; blocking is too operationally complex', 'Rejecting funds that should have been blocked is a substantive violation. Several enforcement matters cite rejection-when-block-was-required as the underlying error.'],
      ['Block only for SDN list hits; reject for everything else', 'Comprehensive country program hits often require blocking when there is a property interest of the sanctioned jurisdiction or its government. The decision is driven by interest and program, not by which list produced the hit.'],
    ],
    'Block vs reject is a property-interest analysis: block when a blockable person has an interest in property in the bank\'s possession or control; reject when the transaction is prohibited but no blockable property interest is held. Both decisions must be reported to OFAC within ten business days.'),

  q(4420206, 'Career Skills', CHAPTER, 'Facilitation as an independent prohibition',
    'A US bank declines to lend directly to an Iranian buyer but agrees to introduce the buyer to a European affiliate that is willing to lend. Under OFAC rules, what is the principal risk in this arrangement?',
    'Facilitation by a US person — the introduction, referral, or approval of a transaction by a foreign person that the US person could not itself perform is independently prohibited under most comprehensive programs, regardless of who ultimately funds the loan',
    [
      ['No risk because the European affiliate is not a US person and the loan is not booked in the US', 'Facilitation captures exactly this scenario. The US bank cannot indirectly do what it cannot directly do. ING ($619M, 2012) and others paid significant penalties for facilitation-style conduct routed through non-US affiliates.'],
      ['Risk only if the European affiliate is majority-owned by the US bank', 'Ownership matters for "US-person" status of the affiliate (foreign branches and subs of US banks are themselves US persons), but facilitation liability attaches to the *US person\'s* role in approving or referring the deal regardless of the affiliate\'s ownership.'],
      ['Risk only if the loan proceeds physically move through the US financial system', 'Facilitation does not require a US-dollar nexus or US-cleared payment. The act of the US person referring, approving, or financing the prohibited transaction is itself the violation.'],
    ],
    'Facilitation is an independent prohibition under OFAC programs. US persons cannot use foreign affiliates, non-US subsidiaries, or third parties as conduits for what they could not lawfully do themselves. This is the single most-missed concept in introductory sanctions training.'),

  // -------------------------------------------------------------------------
  // LIST SCREENING (4420207–4420212)
  // The list landscape: SDN, SSI, FBI, UN, EU, UK HMT. What each list is for,
  // when each binds, and the operational risk of mis-mapping them.
  // -------------------------------------------------------------------------
  q(4420207, 'Career Skills', CHAPTER, 'SDN list as the primary US screening list',
    'A new compliance hire asks which list a US bank "must" screen against. What is the right answer for the foundation of the screening program?',
    'The Specially Designated Nationals and Blocked Persons (SDN) list, plus all other OFAC-maintained lists (Sectoral Sanctions Identifications, Foreign Sanctions Evaders, Non-SDN Palestinian Legislative Council, Consolidated Sanctions List components) — OFAC is the binding US authority',
    [
      ['The FBI Most Wanted list because it is the most public US list', 'FBI Most Wanted is a law-enforcement tool, not a sanctions list. Hits on it may inform SAR filings or law-enforcement referrals but do not by themselves trigger OFAC blocking obligations.'],
      ['The UN Consolidated Sanctions List, because the US is a UN member', 'UN listings are binding internationally but in the US they are implemented through US executive orders that typically add the names to the SDN list. The operative US list for a US bank is OFAC\'s.'],
      ['The Interpol Red Notice list', 'Red Notices are international law-enforcement notices, not sanctions. They are relevant to AML/KYC risk but do not by themselves create blocking obligations.'],
    ],
    'The OFAC-maintained lists are the binding US screening lists for a US bank. Other lists (FBI, UN, Interpol) inform AML/KYC risk and may shape SAR filings but do not by themselves create OFAC blocking obligations.'),

  q(4420208, 'Career Skills', CHAPTER, 'Non-SDN sectoral identifications',
    'A US bank\'s screening engine flags a Russian energy company on the SSI list under Directive 4 (deepwater, Arctic, shale projects). The bank is being asked to process an ordinary corporate payroll wire for the company. How should the bank treat the hit?',
    'Allow the wire — Directive 4 prohibits the provision of goods, services, or technology in support of specified deepwater, Arctic offshore, or shale projects with potential to produce oil, not ordinary corporate operations like payroll; the SSI hit alerts the bank to apply the directive-specific analysis, not to block by default',
    [
      ['Block the wire because any SSI listing triggers blocking', 'SSI listings do not impose general blocking. Reflexive blocking on every SSI hit over-blocks lawful activity and shows the screening team does not understand the directives.'],
      ['Reject the wire because Russia sanctions cover all payments to Russian companies', 'Russia sanctions are not a comprehensive embargo of the entire Russian economy. Many ordinary transactions remain permitted; sectoral and SDN-specific prohibitions cut into specific activities.'],
      ['Process the wire without any further documentation', 'Allowing the wire is correct, but the bank should document the analysis showing the wire is outside Directive 4\'s scope. Documentation is what defends the decision to an examiner.'],
    ],
    'Each OFAC directive prohibits a defined slice of activity. Sectoral listings require *directive-specific* analysis: an SSI listing under Directive 1 does not bind the same activity as a listing under Directive 4. The screening hit is the start of analysis, not the end.'),

  q(4420209, 'Career Skills', CHAPTER, 'UN Consolidated Sanctions List',
    'A US bank operates a branch in Singapore. The branch flags a name on the UN Consolidated Sanctions List that is not currently on the OFAC SDN list. How should the branch treat the match?',
    'Apply both UN and Singaporean implementation requirements at the branch (because UN sanctions are implemented by member states through national law), and additionally apply OFAC rules to the US-person branch — UN sanctions members typically translate UN designations into national lists, and a US bank\'s foreign branches remain US persons under OFAC',
    [
      ['Treat the hit as informational only because it is not currently an OFAC SDN match', 'Foreign branches of US banks are US persons under OFAC, but they are also subject to the law of the host jurisdiction. Ignoring UN-implementing local law is a separate violation.'],
      ['Block immediately under OFAC because UN designations are automatically SDN', 'UN designations are not automatically on the SDN list. In practice OFAC implements most UN designations, but the timing and scope can differ — the right answer matches the actual list, not the assumption.'],
      ['Refer to Singapore\'s MAS but not OFAC, because the branch is in Singapore', 'A US bank\'s foreign branch is a US person and remains subject to OFAC. Foreign branches that ignored OFAC have produced significant settlements (Standard Chartered $1.1B, 2019; BNP Paribas $8.97B, 2014).'],
    ],
    'Multinational sanctions screening is a layered obligation: home-country (OFAC for US banks, even at foreign branches), host-country law, and the international regime (UN). Each layer can produce hits the others do not, and procedures must distinguish them.'),

  q(4420210, 'Career Skills', CHAPTER, 'EU Consolidated List and US bank exposure',
    'A US bank\'s European subsidiary is doing business with a person on the EU Consolidated List of designated persons. The person is not on the OFAC SDN list. What is the US bank\'s exposure?',
    'The European subsidiary must comply with EU law; the US parent has no direct OFAC liability for the subsidiary\'s EU-only activity, but US-person employees of the parent cannot facilitate or approve the subsidiary\'s dealings that would violate OFAC if performed by a US person — and EU listings increasingly overlap with OFAC for the Russia program',
    [
      ['No exposure at all, because EU designations are not US designations', 'No exposure to OFAC for the EU-only activity is true; no exposure at all is overstated. US-person employees facilitating the activity, or overlap with OFAC programs, create real exposure.'],
      ['Full OFAC liability, because a subsidiary of a US bank is a US person', 'Foreign subsidiaries of US banks are not automatically US persons (foreign branches are). The Cuba and Iran programs have specific extensions to foreign subsidiaries; other programs generally do not.'],
      ['Liability only if the EU person is also a Russian national', 'Nationality is not the trigger; program coverage is. The OFAC liability question depends on whether the conduct touches a US person, US property, or a US-implementing jurisdictional nexus — not on the counterparty\'s nationality alone.'],
    ],
    'For a US bank, EU designations bind the EU subsidiary directly; the US parent\'s exposure runs through facilitation, US-person involvement, and overlap with OFAC programs. The Russia program is the most common case where OFAC and EU lists overlap heavily but not perfectly.'),

  q(4420211, 'Career Skills', CHAPTER, 'UK HMT (OFSI) consolidated list',
    'A US bank\'s London branch flags a counterparty on the UK\'s OFSI consolidated list under the UK Russia regulations. The counterparty is not on the OFAC SDN list. What is the right operational response?',
    'Treat the counterparty as designated for purposes of London-branch activity (the branch is subject to UK law via OFSI), and independently assess OFAC posture — UK and US lists overlap heavily for Russia but diverge in scope and timing, and the bank must comply with the strictest applicable regime',
    [
      ['Continue dealing because OFAC has not designated the counterparty', 'OFAC silence does not cure a UK obligation. A London branch operating in the UK is subject to OFSI; ignoring that produces UK enforcement risk regardless of US position.'],
      ['Treat the counterparty as SDN-equivalent for global purposes', 'Treating a UK-only designation as global over-extends US-program scope. The US screening team should not freeze global activity on a UK listing absent a corresponding OFAC or program basis.'],
      ['Process the activity and refer to OFAC for a license', 'OFAC does not issue licenses for non-US sanctions. The licensing authority for a UK designation is OFSI, not OFAC.'],
    ],
    'OFSI (the UK Office of Financial Sanctions Implementation) maintains the UK consolidated list. For US banks operating in the UK, the UK list binds the UK activity, regardless of OFAC. The compliance discipline is mapping each branch\'s activity to the right regime\'s list.'),

  q(4420212, 'Career Skills', CHAPTER, 'FBI Most Wanted list in screening',
    'A US bank\'s screening vendor includes the FBI Most Wanted list as a screened source. The list produces hits on the bank\'s customer base periodically. How should the program treat these hits?',
    'Use FBI matches as AML/KYC risk signals — they may inform CDD review, EDD, SAR filing under 31 CFR 1020.320, or law-enforcement subpoena response — but do not treat them as OFAC blocking events; the FBI list is an investigative tool, not a sanctions list',
    [
      ['Block the account, because anyone on a federal wanted list is sanctioned', 'A federal wanted notice is not a sanctions designation. Blocking without authority can itself give rise to claims (wrongful seizure, civil rights, contract). The two regimes do not collapse.'],
      ['Treat FBI matches as outside the AML workflow because they are not sanctions designations', 'OFAC is the operative sanctions authority, but the BSA imposes independent SAR obligations and CDD scrutiny that an FBI hit clearly informs. Ignoring it would miss real AML risk.'],
      ['File a SAR automatically on every FBI list hit', 'SAR filing requires the suspicious-activity standard (31 CFR 1020.320); an FBI list match is a strong input but not by itself an automatic-trigger. Mechanical SAR-filing on every hit floods FinCEN and dilutes signal.'],
    ],
    'Lists serve different purposes: OFAC lists drive blocking and reject decisions; FBI/Interpol lists drive AML and law-enforcement workflows. A mature program maps each list to the right downstream procedure and avoids collapsing them into a single "block on any hit" rule.'),

  // -------------------------------------------------------------------------
  // 50% RULE (4420213–4420217)
  // The OFAC 50 Percent Rule: blocked status flows through to entities owned
  // 50% or more, in the aggregate, by one or more blocked persons.
  // -------------------------------------------------------------------------
  q(4420213, 'Career Skills', CHAPTER, '50 Percent Rule basics',
    'An SDN person owns 60% of Company A. Company A is not separately named on the SDN list. Under OFAC\'s 50 Percent Rule, how should a US bank treat Company A?',
    'Treat Company A as blocked — under OFAC\'s 50 Percent Rule, entities owned 50% or more (directly or indirectly, individually or in the aggregate) by one or more blocked persons are themselves blocked, even if not separately listed on the SDN list',
    [
      ['Treat Company A as permitted because it is not on the SDN list', 'This is the exact mistake the 50 Percent Rule exists to prevent. The rule has been codified since 2008 and tightened in 2014; relying solely on the SDN list misses the largest category of derived blocks.'],
      ['Treat Company A as permitted unless the SDN person has signature authority', 'Signature authority is not the trigger; ownership is. A passive 60% owner blocks the entity even if a separate manager runs operations.'],
      ['Treat Company A as a high-risk customer requiring enhanced due diligence but still permissible', 'EDD is not a substitute for the blocking obligation. The 50 Percent Rule converts the entity itself into a blocked person — the dealings are prohibited, not merely risky.'],
    ],
    'The 50 Percent Rule extends blocking through ownership. Owning 50%+ of an entity (in aggregate across blocked persons, directly or indirectly) blocks the entity automatically. Screening that checks only the SDN list misses every derived block this rule creates.'),

  q(4420214, 'Career Skills', CHAPTER, 'Aggregation across multiple SDN owners',
    'SDN Person X owns 30% of Company B. SDN Person Y owns 25% of Company B. The two SDNs are unrelated. Is Company B blocked under the 50 Percent Rule?',
    'Yes — the rule aggregates ownership across all blocked persons. Two blocked persons together owning 55% of Company B blocks the company, regardless of whether the SDNs are related to each other or coordinated',
    [
      ['No, because neither SDN individually owns 50% or more', 'Aggregation is the explicit point of the 2014 update to OFAC\'s guidance on the rule. Pre-2014 some firms read the rule as single-owner-only; the current guidance is unambiguously cumulative.'],
      ['No, because the SDNs are unrelated', 'Relatedness or coordination of the SDNs is irrelevant to aggregation. The ownership math is the test.'],
      ['Only if Company B itself is a financial institution', 'Entity type is not a condition of the rule. The rule applies across all entity types and sectors.'],
    ],
    'Aggregation is the load-bearing piece of the 50 Percent Rule. Compliance teams that screen for single owners ≥50% miss the derived blocks where multiple smaller blocked-person stakes combine to cross the threshold.'),

  q(4420215, 'Career Skills', CHAPTER, 'Indirect ownership through tiers',
    'SDN Person Z owns 100% of Holdco P. Holdco P owns 51% of Opco Q. Opco Q owns 49% of Subco R. How should a US bank treat Subco R?',
    'Subco R is not automatically blocked by ownership — Z\'s effective indirect interest in R is 100% × 51% × 49% = approximately 25%, below the 50% threshold; however, OFAC encourages caution and may consider control facts separately under non-SDN programs',
    [
      ['Subco R is blocked because Z indirectly owns it through two layers', 'OFAC\'s guidance is explicit that the threshold applies to the ownership percentage flowing through the chain, not to the existence of any indirect interest. The math controls the per se rule.'],
      ['Subco R is permitted because Opco Q owns less than 50% of it', 'Subco R is correctly not blocked under the per se rule, but the rationale matters: it is the multiplied ownership down the chain that determines status, not just the bottom-tier percentage in isolation.'],
      ['Subco R is permitted because two-tier ownership is outside the rule\'s scope', 'The rule does cover indirect ownership through any number of tiers. Two-tier ownership is squarely within scope; it just happens not to cross 50% in this fact pattern.'],
    ],
    'The 50 Percent Rule multiplies down the ownership chain. Direct and indirect ownership both count; what matters is whether the effective ownership of one or more blocked persons aggregates to 50% or more. Compliance teams must map the structure, not just the immediate counterparty.'),

  q(4420216, 'Career Skills', CHAPTER, 'Control without 50% ownership',
    'SDN Person W owns only 40% of Company C but appoints a majority of its board and unilaterally directs its strategy. Does the 50 Percent Rule block Company C?',
    'Not per se — the rule is an ownership test, not a control test; however, OFAC has repeatedly cautioned that control facts can independently support designation, and US banks should treat such situations as high-risk and consider whether to do business at all',
    [
      ['Yes, control alone triggers the rule', 'Control alone does not trigger the per se rule. That said, OFAC may separately designate Company C, and continuing to do business while expecting designation creates real wind-down risk.'],
      ['No, and the bank should treat the company as ordinary because W is below 50%', 'Treating control situations as ordinary risk understates the program risk. OFAC FAQs explicitly note that ownership of less than 50% with control merits caution, and designations can follow.'],
      ['Yes, because OFAC always treats control and ownership the same', 'OFAC distinguishes them deliberately — the per se rule is ownership-based; control is a separately weighted consideration in designation, but does not create automatic blocking.'],
    ],
    'Ownership is the per se test; control is a caution flag. A mature program does not block on control alone, but it does treat 40-something-percent-with-control as a special category that may need legal review, enhanced documentation, or a decision to exit the relationship.'),

  q(4420217, 'Career Skills', CHAPTER, 'Beneficial-ownership data gaps in 50% Rule analysis',
    'A US bank\'s screening engine catches a direct SDN ownership match but cannot reliably trace indirect ownership through a chain of foreign holding companies. What is the right operational posture?',
    'Treat the gap as a known limitation: invest in beneficial-ownership tooling (databases like Dow Jones, Refinitiv, Sayari, OpenSanctions), document the inquiries performed, and apply EDD or de-risk when the structure remains opaque — examiners expect *some* line of sight beyond the immediate counterparty under FinCEN\'s 2018 CDD rule',
    [
      ['Rely entirely on counterparty self-certification of beneficial ownership', 'Self-certification is part of the BO process but cannot be the whole of it when public records contradict the cert or the chain is opaque. OFAC penalties have repeatedly cited over-reliance on customer attestations.'],
      ['Treat the lack of visible ownership as evidence the entity is not 50%-owned by an SDN', 'Absence of evidence is not evidence of absence in beneficial-ownership work. Opaque chains are themselves a risk signal, especially when paired with high-risk jurisdictions or PEPs.'],
      ['Block all foreign holding-company structures on the theory that opacity equals risk', 'Blanket blocking on opacity over-blocks lawful structures (legitimate trust, holding, and tax arrangements exist) and is not what OFAC asks. The expected response is investigation, documentation, and risk-based EDD.'],
    ],
    'The 50 Percent Rule lives or dies on beneficial-ownership data quality. The mature program acknowledges that perfect visibility is rare, invests in the tools and processes to narrow the gap, documents the inquiries made, and applies clear escalation when the chain stays opaque.'),

  // -------------------------------------------------------------------------
  // APPARENT VIOLATIONS AND REPORTING (4420218–4420223)
  // What happens when something goes wrong: blocking and rejection reporting,
  // voluntary self-disclosure, unblocking license requests, mitigating factors.
  // -------------------------------------------------------------------------
  q(4420218, 'Career Skills', CHAPTER, 'Block and reject reporting timing',
    'A US bank blocks a wire on a Tuesday based on an SDN match. When must the bank file the blocking report with OFAC?',
    'Within ten business days of the date the property became blocked — using OFAC\'s reporting forms (the BL-1 / blocking report or equivalent OFAC Reporting and License Application Forms (ORLAF) submission)',
    [
      ['Within 30 days, the same as a SAR', 'The 30-day window applies to SAR filing under 31 CFR 1020.320, not to OFAC blocking reports. Conflating the two timelines is a common error in newer compliance programs.'],
      ['Within 24 hours of blocking', '24 hours is the rumor-mill answer; the actual deadline is ten business days. Mistaking it for 24 hours leads to either rushed, error-filled submissions or unnecessary alarm.'],
      ['When the annual report of blocked property is filed each September', 'The annual report (also required) is separate from the initial blocking report. Both are required; mixing them up means the initial report is filed too late.'],
    ],
    'OFAC requires an initial blocking or rejection report within ten business days of the event and a separate annual report of all blocked property by September 30 each year. Operationalizing both timelines is part of a credible sanctions program.'),

  q(4420219, 'Career Skills', CHAPTER, 'Unblocking license requirement',
    'A blocked wire is held in the bank\'s blocked account. The originator now produces what they claim is evidence the counterparty was a false-positive match. How may the bank release the funds?',
    'The bank may not release the funds unilaterally; release of blocked property generally requires a specific license (or, where applicable, a general license) from OFAC — the bank must submit a license application explaining the basis for unblocking, even when the bank believes the block was a mistake',
    [
      ['Release the funds because the originator provided exonerating evidence', 'Once funds are blocked, only OFAC can authorize their release. Releasing on the bank\'s own initiative is itself a violation, even if the original block was mistaken — Standard Chartered\'s ($1.1B, 2019) and BNP Paribas\'s settlements both cite unauthorized handling of blocked property.'],
      ['Hold the funds for 90 days then release if the originator has not been added to the SDN list', 'There is no automatic release after a waiting period. Blocked property stays blocked until OFAC licenses its release.'],
      ['Transfer the funds to a different segregated account pending review', 'Transfers of blocked property between accounts at the same institution may also require licensing, especially if they affect the property interest. The default rule is "no movement without OFAC."'],
    ],
    'Blocking is a one-way operation absent a license. Even where the bank concludes the original block was a false positive, releasing the funds requires OFAC authorization through the licensing process. This is one of the most-litigated points in practical sanctions compliance.'),

  q(4420220, 'Career Skills', CHAPTER, 'Voluntary self-disclosure mitigation',
    'A US bank discovers an apparent violation during its annual review — six months earlier it processed a wire that should have been blocked. The bank has not yet been contacted by OFAC. What is the strongest mitigation move?',
    'File a voluntary self-disclosure (VSD) under OFAC\'s Economic Sanctions Enforcement Guidelines (31 CFR Part 501, Appendix A) — VSD is an explicit mitigating factor that can reduce the base penalty by up to 50%, but only if the disclosure precedes OFAC discovery and is substantively complete',
    [
      ['Wait to see if OFAC discovers the matter independently', 'Waiting forfeits the VSD mitigation. Once OFAC discovers the matter on its own (through a counterparty filing, examination, or referral), the VSD discount is no longer available.'],
      ['Make a partial disclosure of the most defensible facts only', 'Partial or selective disclosure can disqualify the bank from VSD treatment under the Enforcement Guidelines. OFAC expects substantively complete disclosure; trimming the facts forfeits the credit.'],
      ['Treat the matter internally and add a control without external reporting', 'Internal remediation is necessary but insufficient. Without VSD, the bank loses the largest single mitigating factor in OFAC\'s penalty matrix.'],
    ],
    'Voluntary self-disclosure is the single biggest mitigation lever in OFAC enforcement. The discipline is fact-complete, timely (before OFAC discovery), and paired with credible remediation. Banks that get all three right have settled at materially lower penalty multipliers; banks that get them wrong (Credit Suisse, $536M in 2009) have not.'),

  q(4420221, 'Career Skills', CHAPTER, 'Egregious vs non-egregious classification',
    'Under OFAC\'s Enforcement Guidelines, what factors most strongly push an apparent violation toward "egregious" classification, which roughly doubles the applicable base penalty?',
    'Willfulness or recklessness (especially involvement of senior management), awareness of conduct that led to the violation, harm to sanctions program objectives, and the financial sophistication and experience of the subject — the four "General Factors" weighted most heavily for egregiousness',
    [
      ['The dollar amount of the violation alone', 'Dollar amount affects the base penalty calculation but is not itself the test for egregiousness. A small-dollar violation can be egregious if senior management knowingly authorized it.'],
      ['Whether the violation involved a foreign currency or US dollars', 'Currency does not determine egregiousness. The factors are conduct-centric (willfulness, awareness, harm, sophistication), not currency-mechanical.'],
      ['The number of separate transactions involved', 'Transaction count drives the count of "apparent violations" but not the egregiousness determination per violation. The qualitative factors above drive egregiousness.'],
    ],
    'Egregiousness in OFAC\'s framework hinges on willfulness, awareness, harm, and sophistication — not on dollar amount or transaction count. Senior-management involvement is the single most influential factor in tipping a matter toward the egregious category.'),

  q(4420222, 'Career Skills', CHAPTER, 'Pre-Penalty Notice and settlement track',
    'OFAC sends a US bank a Pre-Penalty Notice proposing a penalty for a series of apparent violations. What is the practical purpose of the Pre-Penalty Notice within the enforcement process?',
    'It opens a formal response window in which the bank may contest the facts, offer mitigation evidence, and negotiate settlement; the Pre-Penalty Notice is OFAC\'s formal statement of the case and triggers the back-and-forth that typically ends in either a settlement agreement or a Penalty Notice',
    [
      ['It is a final determination that cannot be contested', 'The Pre-Penalty Notice is explicitly *not* final — it is the starting point of the formal administrative process. Treating it as final forfeits the response opportunity that produces most settlements.'],
      ['It is a courtesy notification before public press release', 'OFAC does not characterize the Pre-Penalty Notice as a courtesy. It is a formal procedural step with response rights.'],
      ['It is identical to the Cautionary Letter at the end of the process', 'A Cautionary Letter is a no-penalty disposition for less severe matters; a Pre-Penalty Notice precedes a proposed penalty and signals a contested settlement track. They are different dispositions.'],
    ],
    'OFAC\'s enforcement track moves from administrative subpoena/inquiry, through Pre-Penalty Notice and bank response, to either Settlement Agreement or Penalty Notice. The Pre-Penalty Notice is the opening of formal negotiation, not the close — engaging it thoughtfully is where mitigation is realized.'),

  q(4420223, 'Career Skills', CHAPTER, 'OFAC penalty calculation base',
    'For an "egregious case, voluntarily self-disclosed" matter, OFAC\'s Enforcement Guidelines provide a starting point for the base penalty. What is the framework\'s structure?',
    'A two-by-two matrix: egregious vs non-egregious, voluntarily self-disclosed vs not voluntarily self-disclosed, with each quadrant producing a different base penalty calculation method (one-half of the transaction value for VSD non-egregious; up to the statutory maximum for non-VSD egregious)',
    [
      ['A flat percentage of the transaction value regardless of facts', 'A flat percentage misrepresents the framework. The matrix explicitly varies treatment based on VSD and egregiousness — the entire point is that conduct and disclosure change the math.'],
      ['A discretionary judgment by the enforcement officer with no published structure', 'The Enforcement Guidelines were specifically published to add transparency. The matrix and the General Factors are public; the application is discretionary but the structure is not.'],
      ['A formula based on the bank\'s assets under management', 'AUM is not the base. The base is rooted in the transaction value, with adjustments for the General Factors and the matrix position.'],
    ],
    'OFAC\'s base-penalty matrix has four quadrants; mitigating factors (cooperation, compliance program, remedial response) and aggravating factors (willfulness, harm, management involvement) then move the proposed penalty up or down from the base. Understanding the matrix is the first step in setting reserves for an open matter.'),

  // -------------------------------------------------------------------------
  // RUSSIA SANCTIONS (4420224–4420230)
  // The post-2014 sectoral program, the post-2022 expansion (E.O. 14024 and
  // its directives), oil price cap, frozen central bank reserves.
  // -------------------------------------------------------------------------
  q(4420224, 'Career Skills', CHAPTER, 'Origins of the Russia program in 2014',
    'A new analyst asks why the Russia sanctions program looks structurally different from Iran or Cuba — why "sectoral" rather than "comprehensive". What is the historical/policy explanation?',
    'The 2014 Russia program (responding to Crimea annexation) was designed to impose targeted costs on specific sectors (financial services, energy, defense) while preserving broader US–Russia economic ties; comprehensive embargo of a G-20 economy would have outsized spillovers, so OFAC built the Sectoral Sanctions Identifications (SSI) list and directive structure',
    [
      ['Because the US never imposes comprehensive sanctions on European countries', 'Geographic generalizations are inaccurate as a policy rule. Comprehensive programs apply to states the US treats as state sponsors of terrorism or as fundamentally hostile actors; the 2014 calibration was a deliberate choice, not a geographic rule.'],
      ['Because Russia is a UN Security Council member and cannot be comprehensively sanctioned', 'UNSC membership does not legally bar US comprehensive sanctions; the US has imposed unilateral comprehensive programs many times. The 2014 architecture was a policy choice, not a constraint.'],
      ['Because Russia was already covered by the Magnitsky Act, which is comprehensive', 'The Magnitsky Act (2012) and Global Magnitsky (2016) target individuals for human-rights and corruption conduct; they are not comprehensive country programs.'],
    ],
    'The 2014 Russia program is the canonical example of sectoral sanctions: targeted at sectors via directives, preserving broader economic relations. Understanding the architecture is essential because the 2022 expansion built on, rather than replaced, the 2014 framework.'),

  q(4420225, 'Career Skills', CHAPTER, 'Post-2022 expansion and EO 14024',
    'After February 2022 the Russia program expanded substantially. Which architectural change matters most for day-to-day screening at a US bank?',
    'EO 14024 added authority to designate broad classes (officials, financial-sector actors, defense-sector actors, "Harmful Foreign Activities" generally) and OFAC issued multiple new directives — most notably the prohibitions on dealings with the Central Bank of Russia, Ministry of Finance, and National Wealth Fund — alongside numerous SDN designations of major Russian banks',
    [
      ['Russia became a comprehensive embargo country like Iran or Cuba', 'Russia did not become a comprehensive embargo in 2022. The architecture remained directive-and-list-based, though the volume of designations and the scope of prohibited dealings expanded dramatically.'],
      ['The SDN list was retired in favor of a Russia-specific list', 'The SDN list was not retired; it was expanded. Russia designations sit on the SDN list alongside other program designations.'],
      ['All Russian banks were designated SDN', 'Many large Russian banks were designated SDN (Sberbank, VTB, VEB, Otkritie, Sovcombank, Promsvyazbank, Novikombank) but not literally all. Some were subjected to correspondent banking restrictions (Directive 2) rather than full block.'],
    ],
    'The 2022 expansion turned an already-complex sectoral program into one of the most operationally demanding sanctions regimes in modern history. Day-to-day screening must distinguish full SDN designations from correspondent-banking restrictions from debt-and-equity prohibitions from frozen sovereign assets.'),

  q(4420226, 'Career Skills', CHAPTER, 'Correspondent banking restrictions',
    'Directive 2 under EO 14024 prohibits US financial institutions from opening or maintaining correspondent or payable-through accounts for certain Russian banks. How should a US bank implement this?',
    'Close any existing correspondent and PTA accounts for listed banks within the wind-down window provided by the directive (typically 30 days from designation), reject new account requests, and ensure payment-screening rules block USD clearing legs that would route through those banks — the prohibition is on the account relationship, not on every payment',
    [
      ['Treat the listed Russian banks as SDN and block all customer property', 'Directive 2 banks are not SDN-blocked under the directive itself. Some are also separately SDN-listed and must be blocked on that basis; the directive\'s effect alone is to prohibit the correspondent relationship.'],
      ['Allow correspondent accounts but require pre-clearance for each payment', 'The directive prohibits the relationship itself. Pre-clearing individual payments while keeping the account open does not satisfy the prohibition.'],
      ['Continue existing accounts indefinitely because they predate the directive', 'Pre-existing accounts must be wound down within the directive\'s window. There is no grandfather clause.'],
    ],
    'Correspondent-banking restrictions are a specific type of prohibition that targets the relationship rather than the property. Implementation requires both account closure and payment-system controls to prevent the USD clearing leg from re-establishing the prohibited relationship operationally.'),

  q(4420227, 'Career Skills', CHAPTER, 'Russian oil price cap',
    'A US bank is asked to provide trade financing for a shipment of Russian-origin crude oil. The shipper certifies the price is below the G7 oil price cap. How should the bank treat the financing under the price-cap policy?',
    'Conditionally permissible — under the G7/EU price-cap framework (implemented in the US by OFAC determinations under EO 14071), services including financing for the maritime transport of Russian oil are permitted if the oil is purchased at or below the cap and the bank obtains the appropriate attestation from the shipper consistent with OFAC\'s guidance; falsified or unsupported attestations expose the bank',
    [
      ['Prohibited absolutely because all Russian oil dealings are sanctioned', 'The price cap creates a permission carved into a broader prohibition. Treating all Russian oil as absolutely prohibited misreads the framework.'],
      ['Permitted automatically because the shipper certified compliance', 'Reliance on attestations alone, without diligence proportionate to risk, has been called out by OFAC. Attestations are necessary but not sufficient; the bank must show it acted in good faith.'],
      ['Permitted only if the cargo unloads at a US port', 'Port of unload is not the trigger. The framework applies to US-person service provision (financing, insurance, shipping) for Russian-origin crude oil bound for non-Russian markets, regardless of unload location.'],
    ],
    'The Russian oil price cap is a carved permission inside a broader prohibition. It depends on tier-based attestations, recordkeeping, and good-faith reliance — falsified attestations transfer liability up the chain to the service provider who failed to perform reasonable diligence.'),

  q(4420228, 'Career Skills', CHAPTER, 'Frozen Russian central bank assets',
    'The US, EU, UK, Japan, Canada, and Australia froze Russian central bank assets after February 2022. From the perspective of a US bank that custodies dollar-denominated Russian central bank reserves, what is the operative obligation?',
    'Block the assets under OFAC\'s prohibition on transactions with the Central Bank of the Russian Federation, the National Wealth Fund, and the Ministry of Finance; report the blocked property under the standard blocking-report timeline and the annual report; and treat the assets as immobilized — not seized or transferred — absent a specific OFAC license',
    [
      ['Transfer the assets to the US Treasury under the seizure framework for hostile state assets', 'Blocking is not seizure. Assets remain the property of the blocked entity, immobilized in place. Repurposing them requires separate legal authority (the REPO Act, 2024, created a framework specifically because blocking alone does not authorize seizure).'],
      ['Hold the assets in a standard interest-bearing custody account', 'Blocked assets are subject to specific rules on segregation, interest accrual, and reporting. Treating them as ordinary custody assets is a violation.'],
      ['Continue ordinary operations until a court order specifies otherwise', 'Blocking is self-executing on the effective date of the prohibition. No court order is needed; the bank must implement immediately.'],
    ],
    'Blocking immobilizes property; it does not transfer ownership. Several jurisdictions have explored seizure-and-transfer of frozen Russian sovereign assets, but those are separate legal authorities (e.g. the REPO for Ukrainians Act of 2024). The custody bank\'s obligation is blocking and reporting, not seizure.'),

  q(4420229, 'Career Skills', CHAPTER, 'Secondary sanctions on Russian energy enablers',
    'A US bank notices that a non-US bank counterparty has been publicly criticized for helping a Russian SDN evade sanctions. The non-US bank is not itself on the SDN list. What is the principal risk to the US bank?',
    'Secondary sanctions exposure under CAATSA and related authorities — non-US persons who knowingly facilitate significant transactions on behalf of designated Russian persons may themselves be designated, and US banks that maintain correspondent relationships with such facilitators risk being drawn into the chain or losing access if the facilitator is later designated',
    [
      ['No risk, because the non-US bank is not on the SDN list', 'Secondary-sanctions risk is specifically the risk of dealing with a non-US person whose conduct exposes them to future designation. "Not on the list yet" is a present-tense observation that may change quickly.'],
      ['Risk only if the bank books a transaction in US dollars', 'USD nexus is a common trigger, but secondary sanctions exposure can attach to non-USD conduct as well, particularly under CAATSA where significant transactions with designated persons are the trigger.'],
      ['Risk only if the non-US bank is European', 'Jurisdiction is not the gating factor. CAATSA and analogous authorities target conduct, not jurisdiction of the actor.'],
    ],
    'Secondary sanctions extend US reach beyond US persons by threatening designation of non-US persons whose conduct facilitates designated persons. For US banks, the exposure runs through correspondent relationships, syndicated deals, and trade-finance chains where a counterparty is later designated.'),

  q(4420230, 'Career Skills', CHAPTER, 'Service prohibitions to Russia',
    'OFAC issued determinations prohibiting US persons from providing certain services (e.g. accounting, trust and corporate formation, management consulting, quantum computing, IT consulting under specific determinations) to persons located in Russia. A US bank\'s consulting subsidiary is asked to advise a non-sanctioned Russian corporate. How should the bank treat the engagement?',
    'Decline absent a license — the service prohibitions apply to the categories of services regardless of whether the recipient is SDN-listed; "located in Russia" is the trigger, and the recipient\'s non-listed status does not cure it',
    [
      ['Accept the engagement because the corporate is not SDN', 'The service prohibitions are categorical (defined service × Russian-located recipient) and do not require the recipient to be sanctioned. Conflating the two is the most common compliance error in the post-2022 expansion.'],
      ['Accept if the engagement is performed entirely outside Russia', 'Place of performance is not the test. The prohibition turns on the location of the recipient, not the place of work.'],
      ['Accept and apply enhanced due diligence as compensation', 'EDD does not cure a categorical prohibition. The right answer is decline or license, not heightened diligence.'],
    ],
    'Service-category prohibitions are a powerful tool in the post-2022 Russia toolkit. They cut against the intuition that "non-SDN = permitted" and require the compliance team to track which service categories OFAC has determined apply and on what timetable.'),

  // -------------------------------------------------------------------------
  // WIND-DOWN LICENSES (4420231–4420235)
  // General Licenses (GLs) and Specific Licenses (SLs); how they work, when
  // they expire, what "tail risk" remains after expiration.
  // -------------------------------------------------------------------------
  q(4420231, 'Career Skills', CHAPTER, 'General License basics',
    'OFAC issues a General License (GL) authorizing certain wind-down activities with a newly designated SDN for 30 days. How should a US bank operationalize the GL?',
    'Treat the GL as a self-executing authorization for the specified activities, document each transaction against the GL\'s scope, ensure all activity completes by the expiration date, and report any blocked property that remains after the wind-down window — banks do not need to apply for the GL, but they must operate strictly within its terms',
    [
      ['Apply to OFAC for permission to use the GL', 'GLs are self-executing — applying for permission misunderstands the instrument. SLs require application; GLs do not.'],
      ['Continue any activity that began before the GL expiration date, even if it completes after', 'GL coverage typically ends at the expiration date for the activity itself, not just the start. Activity that completes after expiration usually requires an SL.'],
      ['Use the GL broadly to cover similar activities not explicitly listed', 'GLs are read narrowly. Activities outside the GL\'s explicit terms are not authorized merely by analogy.'],
    ],
    'General Licenses are the workhorse of orderly market exits after major designations. The operational discipline is strict adherence to the GL\'s scope, timing, and recordkeeping requirements — over-reading a GL converts a permitted activity into an apparent violation.'),

  q(4420232, 'Career Skills', CHAPTER, 'Specific License application',
    'A US bank cannot complete a wind-down under the available GL because a particular contract has unique structural features. What is the right next step?',
    'Apply for a Specific License (SL) from OFAC, describing the contract, the parties, the timeline, the requested authorization, and why the GL is insufficient — SLs are case-by-case authorizations and require a written application; processing time varies and the bank should not assume approval',
    [
      ['Proceed under the GL anyway because the GL covers "similar" activity', 'Stretching a GL to cover non-conforming activity converts a lawful transaction into a violation. The conservative move is the SL application.'],
      ['Wait until OFAC issues a new GL covering the gap', 'OFAC may or may not issue a new GL; waiting is rarely a viable commercial timeline. The SL pathway exists precisely for the situations the GLs do not reach.'],
      ['Use the bank\'s discretion to extend the GL deadline by 30 days', 'Banks do not have discretion to extend GL deadlines. Only OFAC can extend or supersede a GL.'],
    ],
    'Specific Licenses are the case-by-case escape valve for transactions the GLs do not reach. The discipline is filing early (processing times are not guaranteed) and not assuming approval — many transactions die at the SL stage and the bank should plan accordingly.'),

  q(4420233, 'Career Skills', CHAPTER, 'Tail risk after GL expiration',
    'A bank winds down a relationship under a GL by the expiration date. Six months later, the bank discovers that a small residual obligation (an unbilled fee) was not collected from the now-blocked counterparty during the wind-down. How should the bank treat the residual?',
    'Treat the residual as a blocked claim — collecting it from the now-blocked counterparty after the GL expired is a prohibited transaction unless the bank obtains an SL; the bank should book the residual to blocked-account treatment or apply for licensing rather than attempt to collect',
    [
      ['Bill the counterparty for the residual because the underlying activity was authorized', 'The underlying activity\'s authorization expired with the GL. Collecting on a post-expiration claim is a new prohibited transaction — the original authorization does not extend to ancillary collection efforts.'],
      ['Write off the residual without notifying OFAC', 'Write-offs of blocked claims may themselves require licensing or reporting. Quietly writing off a claim against a blocked counterparty does not satisfy OFAC requirements.'],
      ['Net the residual against other amounts in any active accounts', 'Netting across blocked and non-blocked accounts is itself problematic. Set-off against blocked property generally requires authorization.'],
    ],
    'Wind-down GLs handle the principal activities but rarely capture every residual. The discipline is identifying tail items during the wind-down window and either resolving them inside the window or planning the licensing pathway for what remains.'),

  q(4420234, 'Career Skills', CHAPTER, 'License conditions and reporting',
    'OFAC issues a Specific License authorizing a transaction subject to several conditions, including periodic reporting to OFAC. The bank completes the transaction. What is the most-missed obligation in this scenario?',
    'Performing all license conditions completely and timely — including periodic reports, recordkeeping for five years, and any sub-license restrictions — because failure to meet license conditions can void the license retroactively and convert the authorized transaction into an apparent violation',
    [
      ['Renewing the license annually whether or not the activity continues', 'Licenses generally do not renew automatically and do not need renewal absent ongoing activity. The most-missed obligation is condition compliance, not blanket renewal.'],
      ['Notifying counterparties of the license terms', 'Counterparty notification may be a condition in some licenses, but it is not universal. The universal expectation is full performance of stated conditions and reporting.'],
      ['Publishing the license publicly on the bank\'s website', 'Licenses are not generally required to be published; some include confidentiality protections. Publication is the wrong mental model.'],
    ],
    'License conditions are the often-overlooked second half of an SL. A bank that obtains the SL but does not perform the reporting, recordkeeping, or scope-of-use conditions can find itself in an apparent-violation posture for activity it believed was authorized.'),

  q(4420235, 'Career Skills', CHAPTER, 'Forecasting GL expirations across the book',
    'A bank with significant Russia exposure has dozens of wind-down GLs in different stages. What is the right management posture for these GLs collectively?',
    'Maintain a live GL inventory mapped to specific accounts, contracts, and counterparties, with expiration calendaring, owner assignment, and escalation triggers — the operational risk is not any single GL but the inability to track the full set simultaneously and miss expirations that convert lawful wind-downs into open violations',
    [
      ['Track GLs centrally in legal but let the business units manage execution', 'Splitting tracking from execution is the failure mode in most large-bank programs. The expirations and the execution have to live in the same view, with owner assignment and escalation, or things get missed.'],
      ['Rely on OFAC to publish reminders before GL expirations', 'OFAC does not publish reminders before expirations; the original GL text contains the date and the bank is expected to manage to it. Banks who wait for reminders miss expirations.'],
      ['Treat all GLs as expiring on the same date for simplicity', 'GLs do not expire on uniform dates; each has its own scope and deadline. Collapsing them into one date risks missing the actual deadlines.'],
    ],
    'Wind-down management at scale is an inventory-and-calendar problem. The compliance failure is rarely understanding a single GL — it is losing track across many. Tooling, ownership, and escalation are what convert the legal authority into operational reality.'),

  // -------------------------------------------------------------------------
  // TRADE-BASED MONEY LAUNDERING (4420236–4420239)
  // Under/over-invoicing, phantom shipping, dual-use goods controls.
  // -------------------------------------------------------------------------
  q(4420236, 'Career Skills', CHAPTER, 'Under-invoicing as TBML',
    'A US bank\'s trade-finance team sees a letter of credit for an export at $300/unit when public market prices are $1,500/unit. The exporter is in a high-risk jurisdiction. What pattern should the team consider?',
    'Under-invoicing — invoicing below market price moves value out of the importing country and accumulates it for the exporter abroad; combined with a high-risk-jurisdiction nexus, this is a classic trade-based money laundering pattern that may simultaneously implicate sanctions evasion',
    [
      ['Likely a discount or volume arrangement that does not require review', 'Five-fold price gaps are not normal volume discounts. The combination of price anomaly and high-risk jurisdiction is exactly the pattern FATF and FinCEN advisories flag.'],
      ['Likely an FX-effect that resolves at settlement', 'FX volatility does not produce 5x price gaps on commodity-style goods at settlement. FX is a red herring here.'],
      ['Not a TBML concern because TBML is only about over-invoicing', 'TBML works in both directions: under-invoicing moves value out; over-invoicing moves value in. Each pattern matches a different laundering purpose.'],
    ],
    'TBML uses trade documents to move value across borders while disguising the underlying transfer. Under-invoicing accumulates value at the exporter; over-invoicing moves value to the importer. Both patterns require comparison of invoiced prices against credible market benchmarks.'),

  q(4420237, 'Career Skills', CHAPTER, 'Over-invoicing as TBML',
    'A US bank sees an import LC for a small machine part priced at $50,000 per unit when the market rate is $5,000. The importer claims premium engineering. What is the compliance step?',
    'Investigate before processing — request product specifications, manufacturer attestations, and independent valuation; document the rationale; and consider SAR filing if the explanation does not hold under scrutiny — over-invoicing of low-value goods is a recognized TBML and sanctions-evasion pattern',
    [
      ['Process the LC because the importer explained the premium', 'Explanations are part of the investigation, not the conclusion. The compliance question is whether the explanation is supported by documentation and consistent with what is visible in the file.'],
      ['Decline the LC and exit the customer without further diligence', 'Exiting reflexively without analysis (de-risking by reflex) creates its own problems — examiners increasingly criticize banks that exit relationships without first attempting investigation and SAR filing. The right move is to investigate first.'],
      ['Process the LC but file a SAR after the fact', 'A post-hoc SAR is not a substitute for pre-transaction investigation. If the file warrants SAR-level scrutiny, the bank should not have processed without resolving the concern.'],
    ],
    'TBML investigation is documentation-driven: market comparables, product specifications, independent valuations, and customer explanations are weighed against each other. The right outcome is sometimes processing with a SAR, sometimes declining, but always with documentation that supports the decision.'),

  q(4420238, 'Career Skills', CHAPTER, 'Phantom shipping',
    'A trade-finance file references a vessel that, on independent vessel-tracking data (AIS), never visited the claimed port. What does this pattern suggest?',
    'Phantom shipping — the documents describe a movement of goods that did not physically occur, often used to move value while creating a paper trail that supports a legitimate-looking trade transaction; common in both TBML and sanctions evasion (e.g. ship-to-ship transfers, AIS spoofing on Iran-, Venezuela-, and North Korea-origin cargoes)',
    [
      ['Likely an AIS data error and not a compliance concern', 'AIS data is robust enough that a complete absence of port visit is rarely a data error. OFAC\'s 2020 advisory on maritime industry sanctions specifically called out AIS gaps and spoofing as red flags.'],
      ['A scheduling issue that does not affect the transaction', 'Whether or not a ship arrived at a claimed port is a fact about the transaction, not a scheduling detail. The discrepancy is the issue.'],
      ['A normal variation when ships divert for weather', 'Weather diversions appear in the AIS track and are explainable. Phantom voyages do not appear at all.'],
    ],
    'Vessel-tracking data has become a central tool in trade-sanctions compliance. AIS gaps, transponder disablement, ship-to-ship transfers in known evasion zones, and port-visit mismatches are flagged in OFAC\'s Maritime Industry Advisory and FATF guidance. Trade-finance reviews should incorporate vessel-track data where the risk profile warrants.'),

  q(4420239, 'Career Skills', CHAPTER, 'Dual-use goods and BIS coordination',
    'A US bank\'s LC references "industrial pumps" being exported to a customer in a high-risk jurisdiction. What is the principal compliance concern beyond ordinary sanctions screening?',
    'Export-control exposure — industrial pumps can be dual-use goods (controlled under the Export Administration Regulations administered by BIS, in addition to OFAC sanctions); the bank should consider whether an export license is required and whether the destination, end-user, or end-use creates additional restrictions beyond the OFAC layer',
    [
      ['No additional concern because BIS export controls are the exporter\'s problem, not the bank\'s', 'Banks financing or facilitating export transactions can themselves face liability under the EAR for "general prohibitions" and the Entity List. Banks are not free of the export-control overlay.'],
      ['Only concern if the destination is on the OFAC SDN list', 'The OFAC layer is necessary but not sufficient. BIS administers a parallel regime (Entity List, Unverified List, Military End-User list) that can prohibit transactions OFAC does not.'],
      ['No concern because pumps are not classified as weapons', 'Dual-use goods controls cover items that are not weapons but have potential military or proliferation applications. Pumps, valves, certain chemicals, electronics, and software regularly appear in dual-use controls.'],
    ],
    'Sanctions and export controls operate as parallel and partially overlapping regimes. A mature trade-finance program screens for OFAC, BIS, and the Entity List together; missing the BIS layer has produced enforcement actions (ZTE $1.19B, 2017; Huawei-related matters) where the underlying trade looked sanctions-clean but violated export controls.'),

  // -------------------------------------------------------------------------
  // SECONDARY SANCTIONS (4420240–4420243)
  // Non-US persons exposed to US sanctions reach; banks losing US dollar
  // clearing access as the implicit enforcement mechanism.
  // -------------------------------------------------------------------------
  q(4420240, 'Career Skills', CHAPTER, 'Secondary sanctions concept',
    'A senior partner asks: "How can OFAC effectively reach a non-US bank that has no US branches and does business entirely outside the US?" What is the cleanest explanation of the enforcement mechanism?',
    'Through secondary sanctions — OFAC may designate the non-US bank itself if it knowingly facilitates significant transactions on behalf of designated persons, which cuts the non-US bank off from the US financial system (correspondent USD clearing especially); the implicit mechanism is the bank\'s dependence on USD access, which is hard to replace',
    [
      ['Through international treaties that require non-US banks to comply', 'No general international treaty requires non-US banks to comply with US sanctions. The mechanism is the threat of US-side designation and loss of USD access, not treaty obligation.'],
      ['Through extraterritorial criminal jurisdiction over non-US persons', 'US criminal jurisdiction over non-US persons exists in limited circumstances but is not the main lever in sanctions. Designation and USD access loss are the operative mechanisms.'],
      ['Through the WTO dispute resolution process', 'WTO has no role in sanctions enforcement. The mechanism is unilateral US designation authority.'],
    ],
    'Secondary sanctions function through the threat of designation and the loss of USD clearing access. Most large non-US banks depend on USD correspondents (JPMorgan, Citi, BoNY, BNY Mellon) and cannot operationally afford to be designated, which is the practical lever of the entire regime.'),

  q(4420241, 'Career Skills', CHAPTER, 'CAATSA secondary sanctions',
    'A non-US bank is reported to have helped a Russian SDN move funds through a third-country account. Under CAATSA (Countering America\'s Adversaries Through Sanctions Act, 2017), what is the principal designation authority?',
    'Section 228 of CAATSA authorizes secondary sanctions against foreign persons who knowingly facilitate significant transactions for or on behalf of designated Russian persons; designation results in addition to the SDN list, with all the blocking and exclusion consequences that follow',
    [
      ['Section 5318(k) of the BSA, which addresses correspondent banking', 'Section 5318(k) is a separate authority used by Treasury to terminate correspondent relationships in specific cases (e.g. North Korea), but the principal CAATSA secondary-sanctions hook is Section 228.'],
      ['The International Emergency Economic Powers Act (IEEPA), which is the general delegation of presidential authority', 'IEEPA is the general statutory backbone for many OFAC programs, but CAATSA is the specific statute that codifies several of the Russia-related secondary-sanctions authorities. The specific statute controls in this context.'],
      ['The Magnitsky Act, which targets human-rights violators', 'Magnitsky targets human-rights and corruption conduct, not generalized facilitation of designated Russian persons. CAATSA Section 228 is the operative provision.'],
    ],
    'Secondary-sanctions authorities are codified across multiple statutes (CAATSA Section 228 for Russia; Iran-related provisions including ITRSHRA, IFCA, and CISADA; Hong Kong Autonomy Act for HK; PEESA for pipeline-related activity). Counsel needs to identify the specific authority for each program; "secondary sanctions" is a category, not a single legal hook.'),

  q(4420242, 'Career Skills', CHAPTER, 'USD clearing as enforcement leverage',
    'A non-US bank receives an inquiry from OFAC about its dealings with a designated Iranian person. The non-US bank holds USD correspondent accounts at several US banks. Why is the inquiry such a serious matter for the non-US bank, even if it has no US branches?',
    'Because designation or loss of USD clearing capability through correspondent terminations effectively cuts the non-US bank off from a substantial portion of international commerce — USD is the dominant currency for global trade and finance, and the loss of USD access is often existential for a large bank',
    [
      ['Because OFAC can seize the non-US bank\'s assets directly', 'OFAC cannot reach assets the non-US bank holds outside the US through ordinary blocking authority; the leverage runs through USD correspondents and access to the US financial system, not extraterritorial seizure.'],
      ['Because the non-US bank\'s home country regulator will automatically revoke its license', 'Home-country regulator response varies; some are aligned with US designations, others are not. The lever is OFAC\'s, not the home regulator\'s.'],
      ['Because the non-US bank\'s shareholders will be personally liable', 'Shareholder personal liability is not a typical consequence of secondary sanctions. The corporate-level consequence (designation, USD access) is the operative threat.'],
    ],
    'The credibility of secondary sanctions rests on USD\'s position in global finance. Non-US banks cannot easily substitute another currency for the breadth of transactions USD supports, which is why the threat of USD access loss is enough to drive behavior change without formal designation in most cases.'),

  q(4420243, 'Career Skills', CHAPTER, 'Snapback and Iran secondary sanctions',
    'A non-US bank is considering financing an oil shipment from Iran. The bank\'s board asks about US secondary-sanctions exposure under the Iran program. What is the right framing?',
    'Under the post-2018 reinstated US sanctions on Iran (following withdrawal from the JCPOA), most Iran-related significant transactions by non-US persons can expose them to secondary sanctions under the Iran Freedom and Counter-Proliferation Act (IFCA) and related authorities — the bank should assume robust US enforcement appetite for Iran and treat such financing as creating real designation risk',
    [
      ['No exposure because the bank is not a US person and the transaction is in non-USD', 'Currency does not cure secondary-sanctions exposure for Iran. The Iran program has explicit non-US-person reach through IFCA and CISADA; the lever, again, is USD access and designation, not currency of the underlying trade.'],
      ['Exposure only if the cargo touches a US port', 'Port nexus is not the trigger for Iran secondary sanctions. The trigger is significant transactions involving Iranian persons or the Iranian energy sector, regardless of where the cargo physically moves.'],
      ['Exposure only if the counterparty is on the SDN list', 'For Iran, the secondary-sanctions reach extends beyond SDN-listed counterparties to the energy, banking, shipping, and shipbuilding sectors broadly, especially after the 2018 reinstatement.'],
    ],
    'Iran secondary sanctions are among the broadest in scope. Non-US banks cannot rely on non-USD currency, non-US jurisdiction, or non-SDN status to insulate themselves from US designation risk when significant Iran-related transactions are involved. The realistic posture is to treat Iran-related financing as creating substantial secondary-sanctions exposure regardless of structuring.'),
]

import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// BANK COMPLIANCE — CHAPTER 2: KYC and Customer Risk
// ----------------------------------------------------------------------------
// 44 additional questions (IDs 4420100–4420143) extending the existing six
// KYC/Customer-Risk questions that live in
// careerAgentGeneratedRoadmapFinance.ts (4107412, 4107413, 4107424, 4107882,
// 4107894, 4107883). No overlap with those: this batch goes deeper on the
// mechanics — CIP, account-opening due diligence, beneficial ownership, risk
// rating methodology, high-risk customer typologies, PEPs, country risk, and
// periodic-review cadence.
//
// US context throughout: BSA/AML, FinCEN CDD rule, OFAC, FATF, FFIEC
// examination expectations. Bespoke whyWrong on every wrong answer.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe BC Ch2 canonical bank'

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

const CHAPTER = 'KYC and Customer Risk'

// Difficulty distribution target: 13 at 3, 22 at 4, 9 at 5.
export const BC_CH2_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // CIP procedures (4420100–4420105)
  4420100: 3, // CIP four data elements
  4420101: 3, // Acceptable government ID documents
  4420102: 4, // Non-documentary verification fallback
  4420103: 4, // CIP timing — before vs reasonable time after
  4420104: 4, // CIP for non-US persons
  4420105: 3, // CIP recordkeeping retention

  // KYC at account opening (4420106–4420111)
  4420106: 3, // Expected activity profile
  4420107: 4, // Source of funds vs source of wealth
  4420108: 4, // Occupation/business profile depth
  4420109: 4, // Initial risk scoring at onboarding
  4420110: 5, // Cash-deposit expected profile vs reality
  4420111: 3, // Negative-news screening at onboarding

  // Beneficial ownership (4420112–4420117)
  4420112: 3, // 25% ownership threshold
  4420113: 4, // Control prong — one person required
  4420114: 4, // Certified beneficial owner form
  4420115: 4, // Multi-tiered ownership look-through
  4420116: 5, // Trust beneficial owners
  4420117: 4, // Refresh trigger for ownership

  // Risk ratings (4420118–4420123)
  4420118: 3, // Three-tier rating model
  4420119: 4, // Scoring methodology weights
  4420120: 4, // Override and rationale documentation
  4420121: 5, // Aggregating product / geography / customer factors
  4420122: 3, // Risk-rating refresh cadence
  4420123: 3, // What a "high risk" rating actually triggers

  // High-risk customer types (4420124–4420129)
  4420124: 3, // MSB definition
  4420125: 4, // Cash-intensive businesses
  4420126: 4, // NGO and charity risk
  4420127: 5, // Shell company indicators
  4420128: 5, // Marijuana-related businesses (MRBs)
  4420129: 4, // Correspondent / nested account risk

  // PEPs (4420130–4420134)
  4420130: 3, // Foreign vs domestic PEP framing
  4420131: 4, // Family members and close associates
  4420132: 4, // Residual risk after leaving office
  4420133: 5, // PEP source-of-wealth diligence
  4420134: 5, // PEP escalation and approval

  // Country / jurisdiction risk (4420135–4420139)
  4420135: 3, // FATF blacklist countries
  4420136: 4, // FATF grey list vs blacklist
  4420137: 4, // OFAC sanctions overlap with country risk
  4420138: 4, // Transparency International CPI as input
  4420139: 5, // Cross-border activity weighting

  // Periodic review cadence (4420140–4420143)
  4420140: 3, // Annual / biennial / triennial cadence
  4420141: 4, // Trigger-based off-cycle reviews
  4420142: 4, // What a periodic review actually checks
  4420143: 5, // Closing the loop — rerating after review
}

export const bcCh2Questions: Question[] = [
  // -------------------------------------------------------------------------
  // CIP PROCEDURES (4420100–4420105)
  // The Customer Identification Program is the BSA front door. Six questions
  // on the mechanics: what you collect, what you accept as proof, what to do
  // when documents fail, when timing applies, and how long records live.
  // -------------------------------------------------------------------------
  q(4420100, 'Career Skills', CHAPTER, 'CIP four data elements',
    'A new individual customer is opening a personal checking account. Under the BSA Customer Identification Program rule, what four data elements must the bank collect at minimum before opening the account?',
    'Name, date of birth, residential or business street address, and a taxpayer identification number (typically SSN for US persons)',
    [
      ['Name, employer, monthly income, and a copy of the most recent pay stub', 'Income and employer feed the KYC risk profile but are not the four CIP data elements. The CIP rule is specifically about identity, not financial standing.'],
      ['Name, phone number, email address, and preferred branch location', 'Contact preferences are operational data, not identity data. The CIP rule lists name, DOB, address, and TIN — and an examiner will look for exactly those four.'],
      ['Name, government-issued photo ID number, mother\'s maiden name, and security questions', 'A photo-ID number is one acceptable verification document, but it is not one of the four required data elements. Security questions are an authentication layer, not CIP.'],
    ],
    'The CIP rule (31 CFR 1020.220) specifies four minimum data elements for every new customer account. Memorize them; missing one is a CIP gap an examiner will write up regardless of how much other information was collected.'),

  q(4420101, 'Career Skills', CHAPTER, 'Acceptable verification documents',
    'A US individual customer presents documents to verify their identity at account opening. Which combination is the standard documentary verification set under CIP?',
    'An unexpired government-issued ID bearing a photograph (such as a driver\'s license or passport), supplemented if needed by a secondary document confirming the residential address',
    [
      ['A utility bill alone, because it confirms both name and address', 'A utility bill is a useful address-confirming secondary, but it does not verify identity by itself — CIP requires a primary photo ID for documentary verification.'],
      ['A social media profile printout showing the customer\'s name and photo', 'Social media is not a recognized identity document. The CIP rule contemplates unexpired government-issued documents, not user-generated profiles.'],
      ['A handwritten letter from the customer attesting to their identity', 'Self-attestation is the opposite of verification. CIP requires that the bank — not the customer — confirm identity to its reasonable satisfaction.'],
    ],
    'Documentary verification under CIP relies on unexpired government-issued ID with a photograph as the anchor. Secondary documents (utility bills, lease agreements) support but do not replace it.'),

  q(4420102, 'Career Skills', CHAPTER, 'Non-documentary verification fallback',
    'A customer opening an account online cannot produce a clear scan of a government photo ID. The CIP policy permits non-documentary verification. Which approach is consistent with the rule?',
    'Use independent sources — credit bureau data, public records, and a third-party identity-verification service — to confirm the customer\'s identity, and document why documentary verification was not feasible',
    [
      ['Skip verification because the customer is opening online and the bank has no way to see the ID', 'Channel constraints do not waive CIP. The rule explicitly anticipates non-documentary methods precisely so online and remote accounts can still be opened compliantly.'],
      ['Accept a screenshot of the customer\'s online banking session at another institution', 'A screenshot of another bank\'s session is not an independent identity source. CIP non-documentary methods rely on third-party data the bank can corroborate, not the customer\'s own screen.'],
      ['Ask the customer to verify themselves by answering challenge questions only they would know', 'Knowledge-based authentication is one component, but standing alone it is weak. Non-documentary CIP usually combines multiple independent sources — credit bureau, public records, identity-vendor — not just self-answered questions.'],
    ],
    'CIP allows non-documentary verification when documents are unavailable, but it requires independent corroboration and clear documentation of the method used. The file should show why the bank concluded the customer\'s identity was verified.'),

  q(4420103, 'Career Skills', CHAPTER, 'CIP timing requirement',
    'A retail branch opens a new checking account on Monday but cannot complete the address verification step until Wednesday because the credit-bureau response is delayed. Is this CIP-compliant?',
    'Yes, if the bank\'s written CIP allows verification within a reasonable time after account opening and Wednesday falls inside that window with documented controls on the unverified account',
    [
      ['No — CIP always requires that identity verification be completed before any account opening takes place', 'The rule actually permits verification within a reasonable time after opening, provided the bank\'s written CIP defines that window and applies risk-based controls during it.'],
      ['Yes — there is no timing requirement under CIP as long as verification eventually happens', 'There is a timing requirement: "within a reasonable time," as defined in the bank\'s written CIP. Open-ended delay is a CIP weakness an examiner will cite.'],
      ['No — the account must be closed and reopened on Wednesday once the verification completes', 'Close-and-reopen is not what the rule contemplates. The compliant path is to keep the account open under risk-based controls and complete verification within the defined window.'],
    ],
    'CIP timing is "before or within a reasonable time after" account opening. The bank\'s written program must define what "reasonable" means and impose controls (transaction limits, monitoring) during the gap.'),

  q(4420104, 'Career Skills', CHAPTER, 'CIP for non-US persons',
    'A foreign national without an SSN wants to open a US deposit account. What does CIP require in place of the SSN for the TIN element?',
    'One or more of: passport number and country of issuance, alien identification card number, or another government-issued document evidencing nationality or residence and bearing a photograph or similar safeguard',
    [
      ['The customer must obtain an SSN before any US account can be opened', 'CIP does not require an SSN for non-US persons. The rule explicitly lists alternative identification numbers from the customer\'s home jurisdiction.'],
      ['No identification number is required for non-US persons because they are not US taxpayers', 'CIP still requires an identification number — just not necessarily an SSN. The alternatives (passport, alien ID, foreign government document) substitute for the SSN.'],
      ['The bank should use the customer\'s home country bank account number as the TIN', 'A foreign bank account number is not an identifying number under CIP. The rule lists specific government-issued alternatives; a private-sector account number is not one of them.'],
    ],
    'CIP accommodates non-US persons by accepting alternative identifying numbers from passports or other government-issued documents. The principle is: every customer has an identifying number, but it does not have to be a US SSN.'),

  q(4420105, 'Career Skills', CHAPTER, 'CIP recordkeeping retention',
    'How long must a bank retain CIP records for a customer who closes their account?',
    'Five years after the account is closed — covering both the identifying information collected and the methods used to verify identity',
    [
      ['Two years after account closure, matching general consumer record retention', 'Two years is shorter than the BSA standard for CIP records. The required retention is five years post-closure for identifying information and verification records.'],
      ['Indefinitely, because CIP records cannot ever be destroyed', 'The rule sets a specific retention period (five years), not an indefinite one. Banks should not over-retain data beyond regulatory requirements absent another reason.'],
      ['As long as the account is open, with no post-closure retention requirement', 'Retention extends past closure precisely because investigations and lookbacks often arrive after the customer relationship ends. Stopping at closure would defeat the purpose.'],
    ],
    'CIP records survive the relationship — identifying information for five years after account closure, and verification methods for five years after the record was made. Investigations frequently rely on these retained files.'),

  // -------------------------------------------------------------------------
  // KYC AT ACCOUNT OPENING (4420106–4420111)
  // CIP confirms identity; KYC builds the customer profile. Six questions on
  // expected activity, source of funds vs source of wealth, occupation detail,
  // initial risk scoring, cash-deposit profiling, and negative news.
  // -------------------------------------------------------------------------
  q(4420106, 'Career Skills', CHAPTER, 'Expected activity profile',
    'You are building the expected activity profile for a new small-business deposit customer (a 12-truck plumbing contractor). Which set of data points is the right baseline to capture?',
    'Expected monthly deposit volume, typical deposit channel (check, ACH, wire, cash), expected outgoing wire frequency and corridors, and expected cash activity range',
    [
      ['Customer\'s favorite branch, preferred teller, and contact-preference settings', 'Service preferences are useful for operations but useless for transaction monitoring. The expected-activity profile feeds the monitoring system, not the relationship manager.'],
      ['A single number representing the customer\'s estimated annual revenue', 'A revenue estimate is a partial input, not the profile. Monitoring needs ranges by channel and frequency to spot variances that matter.'],
      ['The customer\'s credit score and most recent loan balance', 'Credit data informs credit risk, not AML risk. The activity profile is about what flows through the account, not creditworthiness.'],
    ],
    'The expected-activity profile is the baseline transaction monitoring compares actual activity against. Without channel, frequency, and amount ranges, monitoring alerts are noise — every variance looks the same.'),

  q(4420107, 'Career Skills', CHAPTER, 'Source of funds vs source of wealth',
    'A new wealth-management customer is depositing $4M to open the relationship. What is the distinction between source of funds and source of wealth, and which is required at onboarding?',
    'Source of funds is the origin of the specific $4M (e.g., proceeds from sale of XYZ business on a specific date); source of wealth is how the customer accumulated overall wealth over time — both should be documented at onboarding for higher-risk customers',
    [
      ['They are the same thing — both refer to the customer\'s current bank balance', 'They are distinct concepts and the distinction matters: examiners cite files that conflate them. Source of funds is transactional; source of wealth is biographical.'],
      ['Only source of funds is required; source of wealth is optional and rarely useful', 'For higher-risk customers and large deposits, source of wealth is the more diagnostic question — it tests whether the overall wealth picture is plausible, not just one wire.'],
      ['Source of wealth only applies to PEPs and is not relevant for other customers', 'Source of wealth applies whenever the wealth picture itself is the risk question — large deposits, complex structures, high-risk geographies. PEPs are one category, not the only one.'],
    ],
    'Source of funds answers "where did this specific money come from?" Source of wealth answers "how did this customer accumulate wealth overall?" Higher-risk onboarding requires both with documentary support.'),

  q(4420108, 'Career Skills', CHAPTER, 'Occupation and business profile',
    'A new individual customer lists their occupation as "consultant." From a KYC perspective, what is the appropriate depth of follow-up before approving the account?',
    'Clarify the specific consulting field, typical client types and geographies, fee structure and expected payment channels, and document the answers so the activity profile reflects the actual business',
    [
      ['Accept "consultant" as written, because occupation is a self-attested field and verification is not required', 'Self-attestation is the input; KYC depth is the work. "Consultant" without specificity is one of the most-cited generic occupation entries in enforcement actions.'],
      ['Require the customer to produce a copy of every consulting contract they hold', 'Production of every contract is disproportionate at onboarding. The KYC standard is a documented profile of the business, not a full evidentiary file.'],
      ['Reject the account because "consultant" is too vague to be a real occupation', 'Rejection on vagueness is overreach. Many consultants are legitimate; the response is more diligence at onboarding, not categorical denial.'],
    ],
    'Generic occupations ("consultant," "investor," "self-employed") are KYC red flags only because they hide the actual activity. The fix is documented specificity — what the work actually is, who pays, in what channels.'),

  q(4420109, 'Career Skills', CHAPTER, 'Initial risk scoring inputs',
    'Your bank assigns every new customer an initial risk score at onboarding. Which combination of inputs is the standard set the score should reflect?',
    'Customer type (individual, entity, structure complexity), products requested, geographies of activity (residence, business operations, counterparties), and any negative-news or watchlist hits',
    [
      ['The customer\'s opening deposit amount, with higher deposits scoring higher risk', 'Deposit size is one input but not the whole score. A $500 deposit from a shell company in a high-risk jurisdiction is higher risk than a $5M deposit from a domestic public-company employee.'],
      ['Whether the relationship manager personally vouches for the customer', 'RM judgment is qualitative input, not the score itself. Examiners look for a documented, repeatable methodology — not "the RM knows them."'],
      ['Only the customer\'s country of citizenship', 'Citizenship is one geography signal among several. Operating geography, counterparty geography, and product geography often matter more than the passport.'],
    ],
    'Initial risk scoring blends customer, product, and geography signals into a defensible rating. A score that ignores any of those dimensions will misclassify cases the monitoring system was supposed to catch.'),

  q(4420110, 'Career Skills', CHAPTER, 'Cash-deposit profile vs reality',
    'A new customer (described at onboarding as a small online retailer) reports expected monthly cash deposits of $2,000 — consistent with incidental cash. In month two, cash deposits run $35,000. What is the right KYC response?',
    'Open an investigation: verify the actual business model, reassess source of funds, update the expected-activity profile or close the gap, and consider whether a SAR is warranted on the unexplained variance',
    [
      ['Raise the expected cash profile to $35,000 to suppress further alerts', 'Auto-raising the profile to match alerts is the textbook documented "tuning to suppress" finding that examiners and DOJ enforcement actions cite repeatedly.'],
      ['Wait three more months to see whether the pattern stabilizes before acting', 'Waiting on a 17x variance from a documented profile turns the monitoring system into theater. The variance itself is the alert worth acting on now.'],
      ['Close the account immediately without investigation, because the variance proves wrongdoing', 'Variance is a trigger for investigation, not a proven conclusion. Closing without inquiry can be premature and may also obstruct potential SAR work.'],
    ],
    'The expected-activity profile is the baseline; a large variance from it is the AML signal the system was designed to surface. Suppressing the alert by widening the profile is exactly the misuse regulators have penalized.'),

  q(4420111, 'Career Skills', CHAPTER, 'Negative-news screening at onboarding',
    'A new corporate customer\'s name returns a negative-news hit alleging environmental violations at a subsidiary five years ago. The matter was settled and there are no current charges. How should KYC handle this?',
    'Document the hit, evaluate the materiality (jurisdiction, severity, recency, ongoing exposure), check for related sanctions or watchlist matches, and decide whether to onboard at standard rating, elevated rating, or escalate',
    [
      ['Reject any customer with any negative-news hit, regardless of subject matter or age', 'Categorical rejection on any hit is overreach. KYC negative-news screening is about materiality — the bank still has to evaluate, not auto-reject.'],
      ['Disregard the hit because the matter was settled and is more than three years old', 'Settled and older does not mean immaterial. Recurrence patterns, related entities, and severity all matter. The hit goes in the file with a documented evaluation, not into the trash.'],
      ['Pass the hit to the relationship manager to handle informally', 'Informal handling means the bank cannot prove it considered the hit. Negative-news evaluations need to live in the file with a documented conclusion.'],
    ],
    'Negative-news screening produces hits that must be evaluated, not auto-rejected and not ignored. The defensible file shows what was found, what it meant, and what the bank decided to do with it.'),

  // -------------------------------------------------------------------------
  // BENEFICIAL OWNERSHIP (4420112–4420117)
  // FinCEN CDD rule — 25% threshold, the control prong, the certification
  // form, look-through, trusts, refresh triggers. Six questions.
  // -------------------------------------------------------------------------
  q(4420112, 'Career Skills', CHAPTER, '25% ownership threshold',
    'Under the FinCEN CDD rule, a covered legal-entity customer must identify each individual who owns 25% or more of the entity. If a single individual owns 100% directly, how many ownership-prong beneficial owners are identified?',
    'One — the single 100% owner satisfies the ownership prong; no further owners need to be identified under that prong',
    [
      ['Four — because 100% divided by the 25% threshold equals four required owners', 'The 25% threshold is a minimum, not a quota. One person owning 100% is one beneficial owner under the ownership prong, not four.'],
      ['Zero — sole ownership exempts the entity from beneficial-ownership identification', 'Sole ownership does not exempt the entity. The 100% owner is the beneficial owner and must be identified and verified.'],
      ['Two — the owner and their spouse must both be listed regardless of formal ownership', 'Spousal listing is not a CDD rule requirement. The ownership prong is based on actual beneficial ownership of the entity, not marital status.'],
    ],
    'The 25% threshold defines who counts as an owner under the CDD rule. Up to four owners can exist under that prong; sometimes there is only one. The point is to identify each natural person who owns 25% or more.'),

  q(4420113, 'Career Skills', CHAPTER, 'Control prong',
    'In addition to ownership-prong individuals, the CDD rule requires identification of one individual under the "control prong." Who qualifies?',
    'A single individual with significant managerial control of the entity — typically a CEO, CFO, COO, managing member, general partner, president, or treasurer',
    [
      ['Every member of the board of directors must be identified as control individuals', 'The rule requires one individual under the control prong, not the entire board. Listing the whole board is over-collection and misses the point of identifying who actually runs the entity.'],
      ['The control prong is optional and can be skipped if ownership-prong individuals are identified', 'The control prong is mandatory: every covered legal-entity customer must have exactly one individual identified under it, regardless of how many ownership-prong individuals exist.'],
      ['The control prong applies only when no individual owns 25% or more', 'The control prong applies in every case. It is independent of whether ownership-prong individuals exist — both prongs must be addressed.'],
    ],
    'The CDD rule has two prongs: ownership (zero to four people, 25%+ each) and control (always exactly one person with managerial control). Both must be addressed for every covered legal-entity customer.'),

  q(4420114, 'Career Skills', CHAPTER, 'Certified beneficial owner form',
    'The bank collects beneficial-ownership information using a certification form signed by an individual opening the account on behalf of the legal entity. What is the legal effect of that certification?',
    'The bank may rely on the certification — including the information about beneficial owners — provided it has no knowledge of facts that would reasonably call into question the reliability of the information',
    [
      ['The certification creates absolute liability protection regardless of what the bank knows', 'Reliance is conditional, not absolute. If the bank has facts that contradict or undercut the certification, it cannot blindly rely on it.'],
      ['The certification is a courtesy and the bank must independently verify every beneficial owner with documentary evidence', 'Independent documentary verification of every owner is not what the rule requires; the certification framework is the mechanism. CIP-style verification applies to the identifying information of the listed beneficial owners.'],
      ['The certification can be skipped if the account is below $10,000', 'There is no dollar threshold that exempts beneficial-ownership collection. Every covered legal-entity customer must complete the certification.'],
    ],
    'The certification is the standard CDD-rule mechanism for collecting beneficial ownership. Reliance on it is permitted but conditional on the bank not knowing facts that undermine it — willful blindness is not a defense.'),

  q(4420115, 'Career Skills', CHAPTER, 'Multi-tiered ownership look-through',
    'Entity A is opening an account. Entity A is 100% owned by Entity B, which is in turn 100% owned by a natural person Jane Doe. Who is the beneficial owner under the ownership prong?',
    'Jane Doe — the rule looks through intermediate entities to identify the natural persons who ultimately own 25% or more',
    [
      ['Entity B — because it is the immediate owner of Entity A', 'The ownership prong requires identification of natural persons, not other entities. Stopping at Entity B defeats the purpose of the look-through.'],
      ['No one — multi-tiered ownership is exempt from the CDD rule', 'Multi-tiered structures are explicitly contemplated by the rule. Layering does not exempt the entity; it triggers a look-through.'],
      ['Both Entity B and Jane Doe must be identified as separate owners', 'Only the natural person at the end of the chain is the beneficial owner. Listing the intermediate entity alongside misstates the rule and clutters the record.'],
    ],
    'The ownership prong looks through entities to the natural persons. A chain of 100%-owned holdcos resolves to whoever sits at the bottom. Indirect ownership counts the same as direct ownership for the 25% threshold.'),

  q(4420116, 'Career Skills', CHAPTER, 'Trust beneficial owners',
    'A legal entity customer is owned 50% by an irrevocable trust. For purposes of the CDD beneficial-ownership rule, who is the relevant individual to identify under the ownership prong for that 50% interest?',
    'The trustee — the rule treats the trustee as the individual to identify when a trust owns 25% or more of a covered legal-entity customer',
    [
      ['Every beneficiary of the trust, regardless of how many there are or their interest', 'Beneficiaries can have fluctuating or contingent interests and may number in the dozens. The rule resolves the question by pointing to the trustee, not every beneficiary.'],
      ['The settlor who originally created the trust, even if they no longer control it', 'For irrevocable trusts the settlor has typically given up control. The CDD rule does not look back to the settlor when a present trustee exists.'],
      ['No one — trusts are excluded from beneficial-ownership identification', 'Trusts are not excluded. The rule handles them by designating the trustee as the identified individual for ownership-prong purposes.'],
    ],
    'When a trust owns 25%+ of a covered legal entity, the trustee is the identified individual under the ownership prong. This is a deliberate simplification — beneficiaries are not aggregated and analyzed.'),

  q(4420117, 'Career Skills', CHAPTER, 'Beneficial ownership refresh trigger',
    'A corporate customer was onboarded two years ago. Today the bank learns the company has restructured and added two new equity investors holding 30% each. What is the appropriate KYC response?',
    'Refresh the beneficial-ownership certification: collect identifying information for the new 25%+ owners, verify per the bank\'s procedures, and update the risk rating and customer profile to reflect the new owners',
    [
      ['No action required — beneficial-ownership information collected at onboarding is permanent', 'Beneficial-ownership information is not frozen at onboarding. Material changes — ownership restructures included — trigger refresh.'],
      ['Wait until the next scheduled periodic review and update at that time', 'Material change is a trigger event, not something that waits for the calendar. Delaying refresh leaves the bank serving customers it has not properly identified.'],
      ['Close the account because the original certification is now inaccurate', 'Closure is not the default response to a refresh trigger. The first step is to refresh; closure is reserved for cases where refresh cannot be completed satisfactorily.'],
    ],
    'Beneficial-ownership data refreshes on a triggering event basis — restructures, new significant owners, mergers, material changes in control. Examiners look at how quickly the file caught up to reality.'),

  // -------------------------------------------------------------------------
  // RISK RATINGS (4420118–4420123)
  // Tiered ratings, scoring methodology, overrides, aggregation, refresh
  // cadence, and what a "high" rating triggers operationally.
  // -------------------------------------------------------------------------
  q(4420118, 'Career Skills', CHAPTER, 'Three-tier rating model',
    'Most US banks use a low / medium / high three-tier customer risk rating. What is the operational point of the tiering — what does it actually do for the bank?',
    'It assigns the level of due diligence, the monitoring sensitivity, the review cadence, and the approval level applied to the customer — making the AML program proportionate rather than uniform',
    [
      ['It determines the customer\'s deposit-account interest rate', 'Risk rating does not set product pricing. It governs the AML controls applied to the customer.'],
      ['It is a marketing classification used to target product cross-sell', 'AML risk ratings are not marketing tools and should not feed sales targeting. Confusing the two creates serious conduct and regulatory problems.'],
      ['It is a single number used in board reports but has no operational effect', 'A rating that has no operational consequence is an exam finding waiting to happen. The whole point is that it drives downstream controls.'],
    ],
    'Risk ratings turn the AML program from one-size-fits-all into proportionate. Higher ratings get more diligence, tighter monitoring, more frequent review, and higher-level approvals — uniform treatment is neither efficient nor defensible.'),

  q(4420119, 'Career Skills', CHAPTER, 'Scoring methodology weights',
    'A bank\'s risk-rating model scores customers on customer factors, product factors, and geography factors. What is the right way to think about weights across those buckets?',
    'Weights should reflect the bank\'s actual risk experience and be calibrated, documented, and periodically validated — there is no universal "correct" weighting, but the choices must be defensible',
    [
      ['Each bucket should be weighted exactly 33.3% for simplicity and fairness', 'Equal weights are not inherently right. The relevant weighting depends on the bank\'s product mix, geography, and customer base — and on its actual loss experience.'],
      ['Geography should always dominate because country risk is the strongest predictor', 'Geography matters but it is not categorically dominant. A bank with a high cash-business concentration may find customer-type factors more predictive than geography.'],
      ['Weights do not matter as long as some scoring exists', 'Weights determine the output. An undocumented, uncalibrated, unvalidated model is a finding regardless of how sophisticated the rest of the program looks.'],
    ],
    'A scoring model is defensible when its weights are calibrated to evidence, documented, and validated periodically. The choice of weights is a judgment call; the lack of a documented basis for the choice is a finding.'),

  q(4420120, 'Career Skills', CHAPTER, 'Override and rationale documentation',
    'A relationship manager wants to override a model-generated "high" risk rating to "medium" for a long-standing corporate client. How should the bank handle the override?',
    'Permit overrides under a documented policy — requiring written rationale, evidence supporting the lower rating, second-line review or approval, and tracking of overrides as a population for governance review',
    [
      ['Prohibit all overrides — the model output is binding regardless of additional facts', 'Hard prohibition ignores the reality that models do not capture every relevant fact. The right answer is governed overrides, not no overrides.'],
      ['Allow the RM to change the rating directly in the system without documentation', 'Undocumented changes by front-line staff are the textbook control gap. Overrides require rationale and second-line review.'],
      ['Allow overrides only downward, never upward', 'Overrides can run either direction. A model that under-rates a customer should be overridable upward too — the governance is what makes overrides defensible, not the direction.'],
    ],
    'Overrides are a feature, not a bug — they let humans correct model misses. The defensible structure: documented rationale, supporting evidence, second-line approval, and population-level governance to detect override patterns.'),

  q(4420121, 'Career Skills', CHAPTER, 'Aggregating factors into a rating',
    'A customer is a domestic public-company employee (low customer factor), holds only a basic checking product (low product factor), but the salary deposits come from a high-risk-country subsidiary (high geography factor). How should the model aggregate?',
    'Use the bank\'s documented aggregation logic — typically the highest single factor drives the rating or a weighted blend that nonetheless elevates when any factor is high — and apply the result with full documentation of the calculation',
    [
      ['Average the factors and assign the resulting middle tier regardless of any high score', 'Pure averaging hides high factors behind low ones. A high geography signal that disappears into an average is exactly the kind of misclassification AML programs are supposed to prevent.'],
      ['Take only the lowest factor because favorable signals deserve weight too', 'Taking the lowest factor systematically under-rates customers — the inverse of the prudent approach. AML models lean toward elevating when any dimension flags.'],
      ['Pick one factor at random because aggregation is too complex to standardize', 'Randomness is not a methodology. The aggregation has to be deterministic, documented, and defensible to an examiner.'],
    ],
    'Aggregation is where many programs fail: a low-tier overall rating with a high-tier factor inside it is hard to defend. Either the highest-factor rule or an elevation logic is standard — averaging tends to mask the very signal that mattered.'),

  q(4420122, 'Career Skills', CHAPTER, 'Risk-rating refresh cadence',
    'How often should a customer\'s risk rating be refreshed in the normal course?',
    'On the periodic review cadence (typically annually for high, biennially for medium, triennially for low) and additionally on any triggering event — material activity change, new product, new geography, negative news',
    [
      ['Once at onboarding and then never again unless the customer requests a review', 'Static ratings are exactly what regulators have penalized. The risk picture changes; the rating has to keep up.'],
      ['Every quarter for every customer regardless of rating tier', 'Quarterly refresh for every customer is operationally infeasible and not what the rule contemplates. Tiered cadence is the standard.'],
      ['Only when an alert is generated by the transaction monitoring system', 'Alert-driven refresh is reactive. Periodic refresh is the proactive baseline; alerts are an additional trigger, not a replacement.'],
    ],
    'Risk ratings refresh on a tiered cadence (higher tier = more frequent) and on triggering events. A program with only one of those two halves will leave large parts of the book under-refreshed.'),

  q(4420123, 'Career Skills', CHAPTER, 'What a "high risk" rating triggers',
    'A customer is rated high risk. Operationally, what set of controls should that rating drive?',
    'Enhanced due diligence (EDD) at onboarding and refresh, lower monitoring thresholds or specialized rules, annual review cadence, senior-officer approval for the relationship, and additional documentation requirements (source of wealth, beneficial-ownership refresh)',
    [
      ['A higher fee schedule applied to the customer\'s accounts', 'Risk rating drives compliance controls, not pricing. Linking pricing to AML rating creates conduct and disclosure problems.'],
      ['Faster account closure with no further investigation', 'High risk is not by itself grounds for closure. It is grounds for more diligence; closure decisions follow from EDD outcomes, not from the rating.'],
      ['Notification to the customer that they have been flagged', 'Customer notification of a risk rating can tip off the subject of monitoring and may itself be a problem under SAR confidentiality rules.'],
    ],
    'High risk = more work, not less customer. EDD, tighter monitoring, annual review, senior approval, and documented source-of-wealth are the standard package. The rating only matters when it drives those controls.'),

  // -------------------------------------------------------------------------
  // HIGH-RISK CUSTOMER TYPES (4420124–4420129)
  // MSBs, cash-intensive businesses, NGOs, shell companies, MRBs, and
  // correspondent / nested account risk.
  // -------------------------------------------------------------------------
  q(4420124, 'Career Skills', CHAPTER, 'MSB definition and risk',
    'A new customer describes their business as "we cash checks and wire money for our community." Under FinCEN rules, what is this customer and what does that imply for KYC?',
    'A money service business (MSB) — the customer must be registered with FinCEN, hold any required state money-transmitter licenses, have its own BSA/AML program, and be onboarded with EDD as a higher-risk customer',
    [
      ['A standard retail customer, since check-cashing is just a service they offer', 'Check-cashing and money transmission are FinCEN-regulated MSB activities. Treating them as standard retail misses both the customer\'s regulatory obligations and the bank\'s EDD obligations.'],
      ['A prohibited customer that no US bank may serve under any circumstances', 'MSBs are bankable with appropriate controls. Categorical refusal — "de-risking" — has been specifically criticized by regulators.'],
      ['Exempt from KYC because the customer\'s own AML program covers everything', 'The customer\'s AML program does not replace the bank\'s. The bank still performs its own KYC and risk rating on the MSB as a customer.'],
    ],
    'MSBs are higher-risk but bankable. The bank verifies FinCEN registration and state licensure, evaluates the MSB\'s own AML program, applies EDD, and monitors the relationship — categorical refusal is not the regulator-preferred answer.'),

  q(4420125, 'Career Skills', CHAPTER, 'Cash-intensive businesses',
    'A new customer operates a chain of car washes and laundromats. What KYC posture is appropriate for cash-intensive businesses (CIBs)?',
    'Apply enhanced due diligence proportionate to cash-intensity risk: verify the business model, document expected cash deposit ranges and locations, monitor for structuring, and review periodically — but onboard if diligence supports it',
    [
      ['Reject categorically — cash-intensive businesses cannot be banked under BSA', 'Cash-intensive businesses are not prohibited. Examiners have specifically warned banks against blanket de-risking of CIBs.'],
      ['Treat the same as any other small business with no additional controls', 'CIBs have a documented elevated risk profile because cash is anonymous. The standard onboarding treatment is too thin for the risk.'],
      ['Allow only ATM deposits, no branch deposits or armored-car pickups', 'Channel restrictions are not a substitute for diligence. The right answer is documented profile + monitoring + periodic review, not a channel ban.'],
    ],
    'Cash-intensive businesses get EDD, documented expected cash ranges, structuring-pattern monitoring, and periodic review. They are bankable; what is not defensible is treating them like a stationery store.'),

  q(4420126, 'Career Skills', CHAPTER, 'NGO and charity risk',
    'A new customer is a US-based NGO that funds humanitarian projects in conflict zones. What is the KYC risk profile and the appropriate posture?',
    'Higher risk due to geography and the difficulty of tracking end-use of funds in conflict zones — apply EDD covering governance, funding sources, country exposure, partner organizations, and OFAC controls, and review more frequently',
    [
      ['Lower risk than commercial customers because charities are nonprofit', 'Nonprofit status does not lower AML risk. Some of the highest-profile AML and sanctions cases have involved charitable diversion.'],
      ['No KYC required because charities are exempt from BSA', 'There is no charity exemption from BSA. NGOs are covered customers and often warrant higher-tier diligence.'],
      ['Standard SMB treatment with annual review', 'Standard SMB treatment misses the conflict-zone and end-use risk. The relationship needs EDD and tighter cadence.'],
    ],
    'Charities operating in high-risk geographies are a recognized AML and sanctions risk category. EDD, OFAC controls on counterparties, and faster review cadence are standard — not exemption.'),

  q(4420127, 'Career Skills', CHAPTER, 'Shell company indicators',
    'A new corporate customer has no operating address other than a registered-agent address in Delaware, no employees, no website, no obvious business activity, and the beneficial owner resists explaining purpose. What is the KYC concern?',
    'These are classic shell-company indicators — the bank cannot verify legitimate business purpose and must escalate, conduct EDD on beneficial owners and source of funds, and consider declining or filing a SAR on suspicious circumstances',
    [
      ['Delaware incorporation is itself proof of legitimacy and no further work is needed', 'Delaware is a legitimate incorporation state but it is also a high-frequency jurisdiction for shell structures. Incorporation state alone says nothing about purpose.'],
      ['The customer is fine because the certification of beneficial ownership was signed', 'The certification is a starting point, not the finishing line. The CDD rule explicitly conditions reliance on the bank not having facts that undermine the certification — these facts do.'],
      ['Shell companies are explicitly authorized so banks must accept them', 'There is no statutory entitlement for a customer to be banked. When indicators stack up and purpose is opaque, declining the relationship is a legitimate outcome.'],
    ],
    'Shell company indicators — no employees, no operations, registered-agent address, opaque purpose — require escalation, EDD, and a hard look at whether the relationship can be opened or maintained. Examiners specifically look for these patterns.'),

  q(4420128, 'Career Skills', CHAPTER, 'Marijuana-related businesses (MRBs)',
    'A state-licensed cannabis dispensary in Colorado applies to open a deposit account. Cannabis is legal under state law but remains a Schedule I controlled substance federally. What governs the bank\'s decision?',
    'The 2014 FinCEN guidance — banks may serve MRBs with enhanced due diligence, ongoing monitoring, and specific SAR filings (Marijuana Limited, Priority, or Termination) — and the bank must apply that framework or decline the relationship',
    [
      ['Federal law prohibits any bank from servicing MRBs, so the application must be declined', 'Federal law remains complex, but the 2014 FinCEN guidance creates an operational framework banks can use to serve MRBs with EDD and MRB-specific SAR filings. Categorical decline is not the only legal option.'],
      ['State legality fully resolves the issue and the customer is treated as a normal retail business', 'State legality does not resolve the federal Schedule I status. Standard retail treatment ignores the MRB-specific guidance and SAR framework.'],
      ['The customer can be served only if they pay in gold or other non-cash assets', 'There is no requirement to use non-cash assets. The framework is EDD + monitoring + MRB-specific SARs, not payment-form restrictions.'],
    ],
    'MRBs sit in the gap between state legality and federal prohibition. The 2014 FinCEN guidance, the MRB SAR categories (Limited / Priority / Termination), and EDD form the framework — banks must apply that framework or decline. There is no middle ground of "treat as normal."'),

  q(4420129, 'Career Skills', CHAPTER, 'Correspondent and nested accounts',
    'Your bank holds a correspondent account for a foreign bank. You learn the foreign bank uses that account to provide services to its own customers — including some small foreign banks that themselves serve customers. What is the concern?',
    'This is nested or downstream-correspondent risk: the bank ultimately serves customers it has not identified, with limited visibility into their activity, and must apply EDD on the correspondent including questions about its customer base, AML program, and any nesting',
    [
      ['No concern — the correspondent relationship is between the two banks and downstream customers are out of scope', 'Downstream customers are precisely the regulatory concern with correspondents. The bank must understand the correspondent\'s customer base — examiners specifically look at this.'],
      ['Concern only if the nested banks are in sanctioned countries', 'Sanctions overlap is one issue, but nesting risk exists even when no sanctions country is involved. Visibility loss alone is the AML concern.'],
      ['Concern resolved by collecting a SWIFT BIC from each nested bank', 'A SWIFT BIC is operational data, not diligence. Nesting requires EDD on the correspondent\'s customer base and AML program — not a BIC.'],
    ],
    'Correspondent banking is a recognized high-risk category, and nesting amplifies it: the bank loses visibility into who is ultimately being served. EDD covers the correspondent\'s AML program, its customer base, and explicit questions about downstream correspondent activity.'),

  // -------------------------------------------------------------------------
  // PEPs (4420130–4420134)
  // Foreign vs domestic, family / close associates, residual risk after
  // leaving office, source of wealth, escalation. Five questions.
  // -------------------------------------------------------------------------
  q(4420130, 'Career Skills', CHAPTER, 'Foreign vs domestic PEP framing',
    'A new customer is a sitting US state-level legislator. Under US BSA expectations, how does the PEP framework apply?',
    'Domestic US public officials are not formally designated "PEPs" under US AML rules in the same way foreign PEPs are — but they still warrant risk-based EDD where corruption risk is elevated, and the bank applies its own policy on senior US political figures',
    [
      ['Domestic US officials are full PEPs requiring the same EDD as foreign PEPs by US rule', 'US AML rules historically focus the PEP construct on foreign officials. Domestic officials are addressed through risk-based diligence in policy, not the formal foreign-PEP regime.'],
      ['Domestic officials never warrant any additional diligence regardless of role', 'Risk-based diligence still applies to senior US political figures. The framework is just different from the formal foreign-PEP construct.'],
      ['Only the President and Vice President count as PEPs in any context', 'PEP-style scrutiny is not limited to those two roles. Senior officials at multiple levels can warrant elevated diligence under bank policy.'],
    ],
    'US AML rules anchor the formal PEP construct on foreign officials; domestic senior political figures are addressed via risk-based bank policy. The distinction matters operationally — examiners look at whether the bank has a coherent policy on both.'),

  q(4420131, 'Career Skills', CHAPTER, 'Family members and close associates',
    'A foreign minister\'s adult child opens a US bank account. The child holds no public office personally. How does the PEP framework treat this customer?',
    'As a family member of a foreign PEP — subject to the same EDD considerations as the PEP themselves, because corruption-derived funds are commonly held by family members and close associates rather than the official directly',
    [
      ['Standard onboarding — only the official themselves is a PEP', 'The framework explicitly extends to immediate family members and close associates precisely because that is how corruption funds typically move.'],
      ['Categorical decline — family members of any foreign official are prohibited customers', 'Family of foreign officials are bankable with EDD. Categorical decline is not the regulator-preferred posture.'],
      ['EDD only if the family member personally holds power of attorney for the PEP', 'POA is one signal but not the trigger. Family relationship to a foreign PEP is itself the trigger for EDD under the standard framework.'],
    ],
    'The PEP framework treats immediate family and close associates as carrying the same residual risk as the official — because those are the channels through which illicit funds typically flow. EDD applies; categorical refusal does not.'),

  q(4420132, 'Career Skills', CHAPTER, 'Residual risk after office',
    'A foreign minister leaves office. Six months later they apply for a US account. Are they still treated as a PEP?',
    'Yes, on a residual-risk basis — the standard guidance is that PEP risk does not evaporate immediately on leaving office; banks apply EDD for a documented period after departure, typically informed by the role, the country, and the manner of departure',
    [
      ['No — PEP status ends the day the official leaves office', 'PEP risk is residual. Funds and influence accumulated while in office persist after departure; the framework reflects that.'],
      ['Yes — but only if the former official was removed for corruption', 'Residual PEP treatment applies regardless of the reason for departure. The risk attaches to the prior role, not to the circumstances of leaving.'],
      ['Yes — PEP status is permanent and never expires', 'Most policies set a documented residual period rather than treating PEP status as permanent. Permanent treatment is operationally rigid and not what guidance contemplates.'],
    ],
    'PEP risk persists after office for a documented period — usually one to several years depending on role and country. The file must show what window the bank applies and why. Treating PEP as a switch that turns off on departure day is a finding.'),

  q(4420133, 'Career Skills', CHAPTER, 'PEP source-of-wealth diligence',
    'A foreign PEP customer credibly explains the source of funds for a specific large incoming wire (sale of family real estate). Is that sufficient diligence?',
    'No — source of funds explains one transaction; for a PEP the bank must also document overall source of wealth (how the PEP came to hold the wealth in question, consistent with known role and compensation) and reconcile any apparent gap',
    [
      ['Yes — source of funds for the transaction is the complete diligence requirement for PEPs', 'For PEPs, source of wealth is the more diagnostic question. A clean source-of-funds story on one transaction does not establish that the overall wealth picture is plausible.'],
      ['No — only source of wealth is required; source of funds is not relevant', 'Both are required for PEPs. Source of funds explains a specific transaction; source of wealth explains the overall picture. Neither replaces the other.'],
      ['No — the bank must obtain a sworn affidavit from the PEP\'s home-country regulator', 'Foreign-regulator affidavits are not a typical or available diligence input. The standard tools are documented source of wealth and source of funds with supporting evidence.'],
    ],
    'PEP diligence centers on source of wealth — does the overall wealth picture reconcile with the known role and compensation? A single clean source-of-funds story does not answer the wealth question, and examiners look specifically for the wealth reconciliation.'),

  q(4420134, 'Career Skills', CHAPTER, 'PEP escalation and approval',
    'Your bank\'s policy requires senior-level approval for any PEP relationship. A relationship manager wants to onboard a foreign PEP with strong EDD documentation. What is the right escalation path?',
    'Route the file (including EDD package, source-of-wealth documentation, country-risk assessment, and risk-rating proposal) to the designated approval authority — typically a senior compliance officer or PEP committee — and obtain documented approval before opening',
    [
      ['The RM can open the account once EDD is complete and document the approval afterward', 'After-the-fact approval is the opposite of what the policy is designed to do. The approval gates the relationship; opening before approval defeats the control.'],
      ['Any branch manager can approve PEP relationships if EDD is documented', 'PEP approval is reserved for designated senior authorities, not general branch management. Decentralizing PEP approval is a textbook control weakness.'],
      ['The approval can be skipped if the PEP\'s home country is on the FATF white list', 'There is no FATF white list, and country-risk assessment does not waive PEP approval. The approval framework operates independently of country tier.'],
    ],
    'PEP relationships need pre-opening senior approval with the full EDD package on the desk. Approval is the control; bypassing it — even with good EDD — is the finding examiners write up.'),

  // -------------------------------------------------------------------------
  // COUNTRY / JURISDICTION RISK (4420135–4420139)
  // FATF blacklist and grey list, OFAC overlap, TI CPI, cross-border activity.
  // Five questions.
  // -------------------------------------------------------------------------
  q(4420135, 'Career Skills', CHAPTER, 'FATF blacklist countries',
    'FATF designates certain jurisdictions as "high-risk jurisdictions subject to a call for action" (the blacklist). Which countries currently sit on that list, and what is the implication for a US bank?',
    'Iran and North Korea — banks should apply countermeasures or enhanced scrutiny to any activity touching those jurisdictions, and most relationships with those geographies are also subject to comprehensive US sanctions',
    [
      ['Russia and China — because of geopolitical tensions with the US', 'Geopolitical posture is a separate axis from FATF designations. Russia and China are not on the FATF blacklist; conflating geopolitics and FATF status is a common error.'],
      ['Every country other than the US and its closest allies', 'FATF blacklisting is narrow and specific. The vast majority of countries are not on it.'],
      ['The list changes monthly and depends on each bank\'s internal model', 'FATF maintains a public list updated on a published cadence — not monthly, not bank-specific. Banks reference FATF\'s actual designations.'],
    ],
    'FATF maintains a small "call for action" list (currently Iran and North Korea) and a separate grey list of jurisdictions under increased monitoring. Banks should track FATF\'s actual public designations, not approximate from geopolitical reading.'),

  q(4420136, 'Career Skills', CHAPTER, 'FATF grey list vs blacklist',
    'A customer\'s primary business operations are in a country on FATF\'s grey list (jurisdictions under increased monitoring) but not the blacklist. What does that imply for KYC?',
    'Elevated country-risk score and enhanced diligence on activity touching that jurisdiction — but not the more severe countermeasures the blacklist typically triggers; document the elevated rating and tighter monitoring',
    [
      ['Grey-list and blacklist countries are treated identically by FATF guidance', 'They are explicitly different categories: grey is "increased monitoring," black is "call for action." Treating them identically over-controls grey and under-resources black.'],
      ['Grey-list status carries no implications and can be ignored', 'Grey-list status is a publicly designated elevated risk and should feed the country-risk component of the customer rating. Ignoring it is a finding.'],
      ['Grey-list countries require automatic account closure', 'Grey-list status does not require closure. EDD and elevated monitoring are the standard response.'],
    ],
    'FATF\'s two-tier framework gives banks calibrated signals: grey = increased monitoring (EDD, elevated rating), black = call for action (countermeasures, often near-prohibition combined with US sanctions). The two should not collapse into one treatment.'),

  q(4420137, 'Career Skills', CHAPTER, 'OFAC sanctions overlap with country risk',
    'A customer routes payments through a country that is on the FATF grey list but is also subject to comprehensive US OFAC sanctions. Which framework governs the bank\'s response?',
    'OFAC sanctions are the primary constraint and effectively prohibit most activity regardless of FATF status — FATF country risk feeds rating and diligence, but OFAC sanctions are mandatory and override most FATF-tier nuance',
    [
      ['FATF grey-list treatment applies and OFAC sanctions are advisory', 'OFAC sanctions are mandatory law, not advisory. FATF tiers inform risk rating; OFAC compliance is a hard legal constraint.'],
      ['The bank can choose whichever framework is less restrictive', 'There is no choice between OFAC and FATF. OFAC is mandatory and typically more restrictive in the cases where they overlap.'],
      ['FATF and OFAC are mutually exclusive and the bank applies only the most recently updated framework', 'They are not mutually exclusive — they operate in parallel. OFAC is the binding sanctions regime; FATF is the AML risk framework. Both apply.'],
    ],
    'OFAC sanctions and FATF country-risk are parallel but distinct: OFAC is mandatory US law with hard prohibitions; FATF is risk-based AML guidance. When they overlap, OFAC sets the floor and FATF sharpens the rating around the edges.'),

  q(4420138, 'Career Skills', CHAPTER, 'Transparency International CPI input',
    'The bank\'s country-risk model uses Transparency International\'s Corruption Perceptions Index (CPI) as one input. What is the right way to use it?',
    'As one input among several — corruption perception correlates with AML risk but is not by itself definitive; combine with FATF status, OFAC posture, AML mutual-evaluation results, and the bank\'s own exposure to produce a country score',
    [
      ['Use the CPI score alone to assign the country tier, since it is the most comprehensive index', 'CPI is informative but not comprehensive for AML purposes. AML mutual evaluations, FATF status, and OFAC posture each capture dimensions CPI does not.'],
      ['Ignore the CPI because it is a perception measure and not a legal designation', 'Perception measures are valuable risk signals even when they are not legal designations. The CPI is widely used in country-risk models and discounting it entirely under-uses available evidence.'],
      ['Use the CPI to set product pricing for customers from each country', 'Country-risk inputs drive AML treatment, not pricing. Using CPI to price customers creates serious conduct and disclosure problems.'],
    ],
    'Country-risk models work best as composites: FATF status + OFAC posture + AML evaluation results + corruption indices + the bank\'s own exposure. Any single input over-relied on creates a misclassified country tier.'),

  q(4420139, 'Career Skills', CHAPTER, 'Cross-border activity weighting',
    'A US-domestic customer (rated low risk) regularly wires funds to and from a high-risk-country counterparty. How should the bank reflect that cross-border activity in the rating?',
    'Elevate the geography factor and the resulting overall rating to reflect the counterparty geography — the customer\'s own location is one input; counterparty geography of actual flows is another and often the more diagnostic one',
    [
      ['No change — the rating reflects the customer\'s own country of residence only', 'Counterparty geography is exactly what AML guidance treats as a key country-risk input. Ignoring it produces a rating that says nothing about where the money actually goes.'],
      ['Elevate only if the counterparty country is also on OFAC\'s sanctioned list', 'OFAC overlap is one trigger but not the only one. High-risk-country counterparties drive risk rating even when they are not OFAC sanctioned.'],
      ['Decline the relationship because any cross-border activity is prohibited', 'Cross-border activity is not prohibited. The point is to rate and monitor it appropriately, not to refuse it.'],
    ],
    'Country risk in customer rating includes the geographies the customer actually transacts with — residence is necessary but not sufficient. A low-risk domestic customer wiring to high-risk corridors is not, in AML terms, low risk.'),

  // -------------------------------------------------------------------------
  // PERIODIC REVIEW CADENCE (4420140–4420143)
  // Tiered cadence, trigger-based off-cycle reviews, what reviews check,
  // and closing the loop with rerating. Four questions.
  // -------------------------------------------------------------------------
  q(4420140, 'Career Skills', CHAPTER, 'Periodic review cadence by tier',
    'Your bank\'s policy applies annual review to high-risk customers, biennial to medium, and triennial to low. What does the choice of those cadences reflect?',
    'A risk-based allocation of finite review capacity — higher-rated customers consume more review effort more often because their risk picture changes faster and the consequences of missing changes are larger',
    [
      ['An arbitrary choice that could just as easily be annual for all tiers', 'Tiered cadence is not arbitrary — it is the operational mechanism that makes risk-based AML feasible. Uniform annual review burns capacity on low-risk customers that did not need it.'],
      ['Regulatory minimums that cannot be changed even if the bank has data to support different cadences', 'Cadences are policy choices the bank calibrates to its book and validates over time. Specific cadences are not codified minimums.'],
      ['A marketing decision unrelated to AML risk', 'Periodic review cadence is core AML program design. Treating it as marketing entirely misframes the control.'],
    ],
    'Tiered cadence — typically annual / biennial / triennial — is how risk-based AML allocates review effort. Cadences should be supported by the bank\'s own data and validated; a flat cadence usually means the program has not done that work.'),

  q(4420141, 'Career Skills', CHAPTER, 'Trigger-based off-cycle reviews',
    'A medium-rated customer is two months into a biennial review window. The transaction monitoring system generates a productive alert (one that resulted in further investigation). Should the bank wait until the scheduled review?',
    'No — productive alerts, material activity changes, negative-news hits, new beneficial owners, new high-risk geographies, and similar triggers should drive off-cycle (event-based) reviews regardless of where the customer sits in the periodic cycle',
    [
      ['Yes — the periodic cycle is binding and reviews cannot happen outside it', 'Strict adherence to the cycle without trigger-based reviews leaves the bank serving customers whose risk picture has clearly changed. Event-based reviews are the complement to the cycle, not an exception to it.'],
      ['No — the customer should be downgraded automatically to high risk and reviewed weekly', 'Trigger-based review is not the same as automatic re-rating to high. The review evaluates whether re-rating is warranted; auto-downgrade short-circuits the analysis.'],
      ['Yes — but accelerate the next periodic review by one month', 'Tinkering with cadence does not address the present trigger. The right response is an off-cycle review now, evaluating what changed and what the appropriate rating now is.'],
    ],
    'Periodic cadence + event-based triggers together cover the customer population. Banks that have one without the other either under-review (cadence-only with no triggers) or over-react (triggers without a steady cadence).'),

  q(4420142, 'Career Skills', CHAPTER, 'What a periodic review actually checks',
    'A periodic review of an existing customer is scheduled. What should the review actually examine?',
    'Whether the customer profile (occupation/business, geography, products, beneficial ownership, expected activity) still matches reality; whether actual activity has tracked the expected profile; whether new negative news, sanctions, or PEP designations apply; and whether the risk rating remains appropriate',
    [
      ['Only whether the contact details (phone, email, address) are still current', 'Contact-detail refresh is operational, not AML. A "review" that consists of confirming the phone number is the textbook tick-the-box review examiners write up.'],
      ['Only whether the customer is still profitable for the bank', 'Profitability is irrelevant to AML review. The review is about risk, not revenue.'],
      ['Only whether any SARs have been filed in the period', 'SAR-filing history is one input. A review that looks only at SARs misses changes in profile, ownership, or geography that haven\'t yet generated SARs but should change the rating.'],
    ],
    'A real periodic review compares the customer file to current reality across profile, activity, ownership, news, and rating. A review that does anything less leaves the program with stale files dressed up as refreshed ones.'),

  q(4420143, 'Career Skills', CHAPTER, 'Closing the loop after review',
    'A periodic review of a medium-rated customer surfaces facts that suggest the rating should now be high. What is the correct way to close the loop?',
    'Re-rate the customer to high, apply the controls that come with the new rating (EDD refresh, monitoring threshold adjustments, senior approval if required), document the rationale, and reset the review cadence to the new tier',
    [
      ['File the review with a "no change" disposition since the rating was medium at the start', '"No change" with contradictory facts in the file is the cleanest finding an examiner can write. The review either changes things or it does not — leaving evidence and rating divorced is the failure mode.'],
      ['Re-rate to high but leave the controls (monitoring, EDD, cadence) unchanged', 'A rating with no downstream control consequence is a label, not a control. The point of the rating system is to drive the controls — if they do not move, neither does risk.'],
      ['Inform the customer of the new rating so they can dispute it', 'Tipping off the customer about a rating change can compromise SAR confidentiality and the investigation. Customer notification is not part of the closing-the-loop process.'],
    ],
    'A review only adds value if its outcome flows through to controls: re-rate, refresh EDD, adjust monitoring, reset cadence, document rationale. Reviews that surface facts but change nothing downstream are exactly what regulators have penalized as program weaknesses.'),
]

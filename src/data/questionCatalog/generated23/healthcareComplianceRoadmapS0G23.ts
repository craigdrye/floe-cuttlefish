import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const healthcareComplianceRoadmapS0G23: Question[] = [
  makeSimpleQuestion(
    9540000,
    'Career Skills',
    'Privacy, Security, and Patient Rights',
    "Business associate agreement before disclosure",
    "A clinic manager wants to start sending appointment data containing patient names, dates of birth, and diagnoses to a new outside transcription vendor next week. The vendor's sales rep has verbally promised, and put in an email, that the company is \"fully HIPAA compliant\" and will protect the data. No signed contract addressing PHI is in place yet. As the compliance analyst, what is the defensible position before any PHI is sent?",
    "PHI may not be disclosed to the vendor until a signed business associate agreement meeting HIPAA's requirements is in place; the verbal and emailed assurances do not substitute for it",
    [
      ["The emailed promise to be \"HIPAA compliant\" is written assurance, so disclosure can proceed", "HIPAA requires the assurance to take the specific form of a business associate agreement that meets the regulatory content requirements, not a general marketing claim that the vendor is compliant.", "Insist on a signed BAA that defines permitted uses, safeguards, breach reporting, and subcontractor flow-down before any PHI moves."],
      ["No BAA is needed because the vendor only transcribes and does not treat patients", "A vendor that creates, receives, maintains, or transmits PHI to perform a service for the clinic is a business associate regardless of whether it provides clinical care, so the BAA obligation applies.", "Classify the vendor by what it does with PHI, not by whether it is clinical, and execute the BAA on that basis."],
      ["Disclosure is fine now; the BAA can be backfilled and signed within 60 days of going live", "There is no grace period that lets PHI flow first and paper the contract later; disclosing PHI to a business associate without a BAA is itself a Privacy Rule violation even if the vendor never mishandles the data.", "Treat the signed BAA as a precondition to the first disclosure, not a follow-up administrative task."],
    ],
    "Under the HIPAA Privacy Rule, a covered entity may not disclose PHI to a business associate unless it first obtains satisfactory assurances, and those assurances must take the form of a written business associate agreement meeting the regulatory content requirements. The violation is the disclosure-without-a-BAA itself, independent of any actual breach, so the agreement must be executed before PHI is shared. A general claim of being \"HIPAA compliant\" is not a BAA.",
    'Floe generated',
    true,
    "Ask what specific form HIPAA requires the vendor's assurance to take, and when that form has to exist relative to the first time PHI leaves the building.",
    { challengeRating: 5 },
  ),
  makeSimpleQuestion(
    9540001,
    'Career Skills',
    'Privacy, Security, and Patient Rights',
    "Security Rule risk analysis is required, not optional",
    "During an internal review, the IT director points to the organization's written Privacy and Security Policies binder and a recent staff privacy-training log as proof that the practice satisfies the HIPAA Security Rule. There is no document assessing where ePHI is stored or transmitted, the threats to it, or the vulnerabilities that could expose it, and none has ever been performed. What gap should you flag as the priority?",
    "The organization has not performed the required, documented risk analysis of threats and vulnerabilities to its ePHI, which the Security Rule mandates as a foundational implementation specification",
    [
      ["No gap exists, because written security policies and completed training already satisfy the Security Rule", "Having policies and training is necessary but does not meet the separate, required risk-analysis implementation specification, which demands an accurate and thorough assessment of risks to ePHI that the policies are supposed to address.", "Treat the risk analysis as the foundation the policies and safeguards are built on, and complete one that is documented and current."],
      ["A risk analysis is an addressable specification the practice can reasonably decide to skip given its small size", "The risk analysis is a required implementation specification, not an addressable one, so it cannot be skipped; size affects how it is scaled, not whether it is done.", "Scale the analysis to the organization's size and complexity, but perform and document it regardless."],
      ["The annual breach report to HHS already covers the analysis obligation, so a separate assessment is redundant", "Annual reporting of small breaches is a Breach Notification Rule duty about events that already happened; it is not the prospective Security Rule risk analysis of threats and vulnerabilities to ePHI.", "Keep the proactive risk analysis distinct from after-the-fact breach reporting and complete the analysis the Security Rule requires."],
    ],
    "The HIPAA Security Rule requires covered entities and business associates to conduct an accurate and thorough assessment of the potential risks and vulnerabilities to the confidentiality, integrity, and availability of all ePHI they create, receive, maintain, or transmit. This risk analysis is a required implementation specification and the foundation for choosing safeguards; a policy binder or training log describes intended controls but does not assess actual risk. A missing or stale risk analysis is among the most common findings in OCR enforcement.",
    'Floe generated',
    true,
    "Distinguish a description of controls the organization intends to have from an assessment of the actual threats and vulnerabilities to its ePHI, and ask which one the Security Rule specifically requires.",
    { challengeRating: 6 },
  ),
]

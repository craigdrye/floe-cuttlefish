import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const customsBrokerS0G23: Question[] = [
  makeSimpleQuestion(
    8820000,
    'Career Skills',
    'Broker Role, Exam Format, and Reference Navigation',
    "Importer of record vs. broker liability",
    "Your brokerage files an entry under a valid power of attorney for an importer. Months later CBP finds the declared value was understated because the importer never disclosed a royalty it paid as a condition of sale. The importer says, \"You filed it, so the duty shortfall and any penalty are on your firm.\" Under U.S. customs law, who bears PRIMARY legal responsibility for the accuracy of the declared value, classification, and rate of duty on this entry?",
    "The importer of record bears primary liability under 19 U.S.C. 1484, and the broker owes a separate reasonable-care duty as agent but does not absorb that primary liability",
    [
      [
        "The broker, because the broker prepared and transmitted the entry summary",
        "Preparing and transmitting the filing does not transfer the importer's primary liability under 19 U.S.C. 1484; the broker acts as the importer's agent, not as the party who must pay the duties as a matter of law. Here the understatement traces to information the importer withheld.",
        "Separate the two duties: the importer of record is primarily liable for the duties and the entry's accuracy, while the broker is independently accountable only for exercising reasonable care on the information it was given.",
      ],
      [
        "Liability is split 50/50 between the importer and the broker by regulation",
        "There is no statutory 50/50 split. CBP holds the importer of record primarily liable for the duties; the broker's exposure is a distinct reasonable-care/Part 111 question, not a fixed share of the importer's obligation.",
        "Drop the idea of a fixed split and ask two independent questions: did the importer of record meet its duty (no), and did the broker exercise reasonable care on the data it had?",
      ],
      [
        "Whoever signed the power of attorney is liable, so the importer's officer is personally on the hook",
        "Granting a power of attorney appoints the broker as agent; it does not shift duty liability to the individual signer. The liable party is the importer of record itself, not the officer who executed the POA.",
        "Treat the POA as the source of the broker's authority to act, then locate primary duty liability with the importer of record under 19 U.S.C. 1484.",
      ],
    ],
    "Under 19 U.S.C. 1484, the importer of record must use reasonable care to file entry and declare the value, classification, and rate of duty, and it bears primary liability for the duties owed. A broker acting under a power of attorney is the importer's agent: it owes its own reasonable-care duty and can be penalized or disciplined under 19 CFR Part 111 for its own failures, but hiring a broker does not transfer the importer's primary legal responsibility. The key distinction is between the importer's primary liability for the entry and the broker's separate, conduct-based duty.",
    "Floe generated",
    true,
    "Ask which party the statute names as primarily liable for the duties, versus which party merely owes a duty of care as an agent.",
    { challengeRating: 5 },
  ),
]

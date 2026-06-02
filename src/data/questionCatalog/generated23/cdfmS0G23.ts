import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const cdfmS0G23: Question[] = [
  makeSimpleQuestion(
    9000000,
    'Career Skills',
    'Internal Controls and Stewardship',
    "Improper payment definition",
    'During a payment-review sample you find four items: (1) a vendor paid $1,200 when the contract priced the work at $1,000; (2) a travel voucher paid $300 when the entitlement was actually $350; (3) a disbursement to a recipient who, on review, was eligible and paid the correct amount; and (4) a payment whose support package is missing the receiving report, so you cannot confirm from the file whether it was proper. There is no evidence of intent to deceive in any item. Under the Payment Integrity Information Act and OMB Circular A-123 Appendix C, which items must be included in the agency\'s reported error rate (its combined improper-and-unknown payment estimate)?',
    'Items 1, 2, and 4 — items 1 and 2 are improper payments (incorrect amounts), and item 4 is an "unknown" payment (a distinct PIIA category, not itself an improper payment) that is still reported alongside them in the combined estimate; fraud and intent are irrelevant, and underpayments count',
    [
      ["Only item 1, because an improper payment means the government paid out more than it owed", "This treats improper payments as overpayments only. The PIIA / OMB definition is any payment made in an incorrect amount, which expressly includes underpayments like item 2 as well as overpayments. Limiting the count to overpayments understates the agency's error rate.", "Score both directions of dollar error as improper: an underpayment is just as much a payment in an incorrect amount as an overpayment."],
      ["Only items 1 and 2, because item 4 might actually have been a correct payment and was not proven wrong", "This applies a presumption of innocence to undocumented payments. OMB A-123 Appendix C treats a payment that cannot be determined proper for insufficient or lacking documentation as an 'unknown' payment that is still reported in the agency's combined improper-and-unknown error estimate, so leaving item 4 out understates that rate; the burden is on the file to prove the payment was proper, not on the reviewer to prove it was wrong.", "Count an unsupportable payment in the error rate: if the file cannot establish the payment was proper, it is reported as an 'unknown' payment alongside the improper ones, regardless of what 'might' have been true."],
      ["None of them, because without proof of fraud or intent to deceive there is no improper payment", "This conflates improper payments with fraud. PIIA expressly states that improper payments do not necessarily indicate fraud or monetary loss; an honest amount error or a missing-document payment is improper regardless of intent. Fraud is a separate, intent-based determination.", "Separate the two tests: improper-payment reporting turns on amount/eligibility/support, while fraud turns on intent — an error is improper even when no one did anything dishonest."],
    ],
    'Under the Payment Integrity Information Act and OMB Circular A-123 Appendix C, an improper payment is any payment that should not have been made or that was made in an incorrect amount — and that explicitly captures both overpayments and underpayments. Improper payments do not necessarily indicate fraud; intent is irrelevant to the classification. Critically, a payment that cannot be confirmed proper because supporting documentation is missing or insufficient is reported as an "unknown" payment — a distinct PIIA category that is not itself an improper payment but is still rolled into the combined improper-and-unknown error estimate — which is why a certifying official cannot rely on an unsupported package. A correct, eligible, fully documented payment is the only one of these that is not an error.',
    'Floe generated',
    true,
    'Test each item against three independent questions: right amount, right eligibility, and provable from the file — and remember fraud is a different question entirely.',
    { challengeRating: 6 },
  ),
]

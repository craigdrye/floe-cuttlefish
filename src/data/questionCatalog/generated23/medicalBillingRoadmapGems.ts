import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const medicalBillingRoadmapGems: Question[] = [
  // ----------------------------------------------------------------------------
  // Remittance, Payment Posting, and Underpayments
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10053000,
    'Career Skills',
    'Remittance, Payment Posting, and Underpayments',
    "The same number, two different owners",
    "A $300 charge comes back on the remittance with the allowed amount set at $180. The $120 difference is reported with the group code CO (reason 45: charges exceed the fee schedule). A new biller, eager to collect, prepares a patient statement for that $120. Why is that the wrong move, and what would have to be different for the patient to owe it?",
    "CO means Contractual Obligation: the provider's own contract requires writing off the $120, so it cannot be billed to the patient; only a PR (Patient Responsibility) code, such as a deductible or coinsurance, makes a balance the patient's to pay",
    [
      ["The $120 is billable now, because any amount the insurer did not pay automatically becomes the patient's balance", "Whatever the payer leaves unpaid does NOT default to the patient; the group code, CO versus PR, decides ownership, and CO amounts are the provider's contractual write-off.", "Read the group code before billing: CO is the practice's loss, PR is the patient's bill."],
      ["The $120 is billable, but only after the practice first appeals the CO-45 as an underpayment", "A correctly applied CO-45 reflects the agreed contract rate, not an underpayment to appeal; appealing a legitimate contractual adjustment wastes effort and still never converts a CO amount into patient responsibility.", "Distinguish a genuine underpayment (paid below the contracted rate) from a correct contractual write-off you simply absorb."],
      ["The $120 can never be collected from anyone, so the practice should void the charge entirely", "The charge is not voided; $180 is legitimately collected from the payer under contract, and the $120 is a routine write-off, not an error to reverse.", "A write-off adjusts the balance to the contracted amount; it does not erase the revenue actually earned."],
    ],
    "Group codes encode who owns the dollar, and the same reason number can land in two different buckets. CO (Contractual Obligation) is the price the provider agreed to eat by signing the contract; PR (Patient Responsibility) is what the patient genuinely owes. The deep point is that billing sits at the intersection of money and trust: the fastest way to 'collect' the $120 is also a contract violation and, in network, a balance-billing breach. Honoring the write-off is not a loss of nerve; it is the practice keeping the bargain it already struck.",
    'Floe generated',
    true,
    "Look at the group code, not the dollar amount: CO is the provider's write-off, PR is the patient's bill.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10053001,
    'Career Skills',
    'Remittance, Payment Posting, and Underpayments',
    "The leak you only see in aggregate",
    "Across one payer, hundreds of claims are each paid about $4 below the contracted rate. Every single line looks trivially close to correct, so each posts without complaint. A reviewer suspecting a fee-schedule load error wants to argue this is worth chasing. What is the strongest reason this pattern, not any one claim, is the real problem?",
    "A systematic per-claim shortfall multiplied across the full volume aggregates into material lost revenue and signals a contract or fee-schedule load error that will keep recurring until the schedule itself is corrected",
    [
      ["It is not worth chasing: $4 is below any reasonable threshold, so posting each as paid-in-full is correct", "Per-claim size is the wrong lens; small variances that recur across high volume sum to material loss, and ignoring them is exactly the trap of letting a load error run unchecked.", "Judge underpayments by aggregate impact and pattern, not by the size of a single line."],
      ["The patient should be billed the $4 to recover the shortfall on each claim", "The shortfall is a payer underpayment against the contract, not patient responsibility; billing the patient hides the payer's error and creates a wrongful balance.", "An underpayment is the payer's contract breach to recover from the payer, never a balance to shift to the patient."],
      ["Each $4 gap should simply be written off as a contractual adjustment, like a CO-45", "A correct CO-45 reflects the agreed rate; here the payer is paying BELOW the contracted rate, so writing it off accepts and conceals the very load error that should be fixed.", "Do not confuse a true contractual write-off with a payer paying less than the contract requires."],
    ],
    "Underpayment review is a lesson in scale: the harm is invisible per claim and obvious in aggregate. A fee-schedule load error produces tiny, plausible shortfalls that each slip past posting, yet across thousands of lines they become real money and a structural defect. The conceptual hook is that the right unit of analysis is the pattern, not the instance; fixing one claim is futile, while fixing the loaded schedule stops the leak at its source. Vigilance here means resisting the comfort of 'close enough.'",
    'Floe generated',
    true,
    "Multiply the small variance by the claim volume, then ask what single upstream error would produce it.",
    { challengeRating: 6 },
  ),
  // ----------------------------------------------------------------------------
  // Rejections, Denials, and the Appeals Ladder
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10053002,
    'Career Skills',
    'Rejections, Denials, and the Appeals Ladder',
    "Rejected is not the same as refused",
    "A claim bounces back from the clearinghouse the same afternoon it was sent, flagged for a transposed subscriber ID. A coworker calls it a denial and starts drafting an appeal letter with supporting documentation. Why is the appeal effort misdirected, and what actually happened to this claim?",
    "This is a rejection, not a denial: the claim never reached the payer's adjudication system, so there is nothing to appeal; the fix is to correct the subscriber ID and resubmit it as an original claim",
    [
      ["It is a denial, so an appeal with clinical documentation is the correct next step", "An appeal answers a payer's adjudicated refusal; a rejected claim was never adjudicated, so there is no decision to appeal and clinical documentation cannot cure a bad subscriber ID.", "Ask whether the payer ever adjudicated the claim; if a clearinghouse bounced it, it is a rejection to correct, not a denial to appeal."],
      ["It is a denial, and because no payment was issued the timely-filing clock has already stopped", "It is a rejection, and crucially the timely-filing clock keeps running because the payer never received an accepted claim; treating it as a stopped clock risks blowing the deadline.", "A rejected claim does not preserve timely filing; the clock is still ticking until the payer accepts it."],
      ["It is a denial that should be resubmitted unchanged, since the clearinghouse will forward it after review", "Resubmitting unchanged repeats the same rejection; the transposed ID must be fixed first, and the clearinghouse will not silently correct it for you.", "Never resubmit without fixing the flagged error, or you simply regenerate the same bounce."],
    ],
    "The rejection-versus-denial line marks the boundary of the payer's adjudication system, and which side a claim is on dictates every next step. A rejection (front-end, clearinghouse, never adjudicated) is corrected and resubmitted as an original; a denial (adjudicated and refused) may be appealed against the payer's policy. The unsettling implication is the silent clock: a rejection feels harmless because it is easy to fix, yet timely filing keeps running, so a 'minor' bounce left sitting can quietly cost the entire claim.",
    'Floe generated',
    true,
    "Decide first whether the payer ever adjudicated it: clearinghouse bounce equals rejection, payer refusal equals denial.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10053003,
    'Career Skills',
    'Rejections, Denials, and the Appeals Ladder',
    "Some denials cannot be argued away",
    "A specialist visit denies for no referral on file: the patient's plan required a primary-care referral before the visit, and none was ever obtained. A biller wants to build a strong appeal packet with the full clinical chart to prove the visit was justified. Why is this usually a losing appeal, and where did the account truly fail?",
    "A missing referral is a front-end access failure, not a clinical dispute: no amount of documentation can retroactively create the referral that was required before the service, so the back-end appeal cannot rescue it; backdating a referral would be fraud",
    [
      ["A thorough clinical packet will win the appeal by proving the visit was medically appropriate", "The denial is not about medical appropriateness; it is about a required administrative authorization that did not exist when the service occurred, so clinical proof answers a question the payer never asked.", "Match the appeal to the denial reason: a process gate (referral) is not overcome with clinical justification."],
      ["The biller should ask the referring physician to backdate a referral to before the visit date", "Backdating a referral fabricates a record that did not exist and is fraud; it is an automatic wrong answer regardless of how reasonable the visit was.", "Any date, code, or document manipulation to chase payment is fraud and never the next action."],
      ["The denial should be treated as a rejection and the claim simply resubmitted with the same data", "It was adjudicated and refused, so it is a denial, not a rejection; resubmitting unchanged regenerates the same denial and risks a duplicate-denial flag.", "Resubmission cannot conjure a referral that was never obtained, and reflexive resubmission breeds duplicate denials."],
    ],
    "Not every denial is a fight worth having, and recognizing the unwinnable one is itself a skill. A missing-referral denial is a front-end failure: the requirement existed before the encounter and cannot be satisfied after the fact, so document-dumping the chart only answers a question the payer did not ask. The deeper lesson is that billing rewards prevention over heroics; the cure lives at scheduling, in a feedback loop that stops the next missing referral, while the fraudulent shortcut of backdating is never on the table.",
    'Floe generated',
    true,
    "Ask whether the missing item could only have been obtained before the service; if so, no back-end appeal restores it.",
    { challengeRating: 6 },
  ),
  // ----------------------------------------------------------------------------
  // Eligibility, Benefits, and Coverage Order
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10053004,
    'Career Skills',
    'Eligibility, Benefits, and Coverage Order',
    "Active coverage is a promise, not a payment",
    "A verification screen confirms the patient's plan is active on the date of service, so the front desk tells the patient the visit is fully covered. The procedure later denies as not a covered benefit under that plan. Where did the verification go wrong, and what does confirming 'active' actually establish?",
    "Active eligibility only confirms the policy is in force; it does not confirm that the specific service is a covered, payable benefit, so the biller must verify the benefit for that service, not just that the card is live",
    [
      ["Active coverage guarantees payment, so the denial must be a payer error to appeal", "Active status and benefit coverage are different questions; a service can be excluded or limited even on a fully active plan, so the denial may be entirely correct and the appeal baseless.", "Separate 'is the plan in force' from 'does the plan pay for THIS service' before promising coverage."],
      ["Because the plan is active, the unpaid amount is automatically the patient's responsibility to bill", "Whether and how the patient can be billed depends on the benefit, the network status, and the group code on the remittance, not on the bare fact that coverage is active.", "Active coverage does not by itself determine patient responsibility; the benefit and remittance codes do."],
      ["Active coverage means the service is in-network and payable, so network status need not be checked", "Active eligibility says nothing about network status; an active plan can still leave a large out-of-network liability that 'active' never revealed.", "Eligibility and network status are distinct checks; an active plan can still be out of network for this provider."],
    ],
    "Eligibility verification is really three questions wearing one name: is coverage active, what does the benefit pay, and is this provider in network. Confirming the card is live answers only the first and tempts a false promise. The conceptual hook is the gap between a contract existing and a contract paying: 'active' is necessary but never sufficient, and the patient's trust is staked on the difference. A good biller translates a benefit into an expected responsibility before the patient hears the word 'covered.'",
    'Floe generated',
    true,
    "Treat 'active' as only the first of three checks: eligibility, the specific benefit, and network status.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10053005,
    'Career Skills',
    'Eligibility, Benefits, and Coverage Order',
    "The calendar, not the candles",
    "A child is covered by both parents' employer plans. The mother was born in March 1985; the father was born in July 1990. The biller must decide which plan is primary. Under the standard birthday rule for coordinating benefits on a dependent child, whose plan is primary, and on what basis?",
    "The mother's plan is primary, because the birthday rule makes primary the parent whose birthday (month and day) falls earlier in the calendar year; March precedes July, and the parents' ages are irrelevant",
    [
      ["The father's plan is primary, because he is the younger parent and younger parents' plans pay first", "The rule keys on whose birthday falls earlier in the year, not on who is younger; the birth YEAR is deliberately ignored, so being younger confers nothing.", "The birthday rule compares month and day, never the birth year or the parents' ages."],
      ["The father's plan is primary, because he is the older parent and the senior policyholder pays first", "Age and seniority do not decide order under the birthday rule; only whose birthday comes first in the calendar year does, which here is the March parent.", "Do not substitute 'oldest parent' for 'earliest birthday'; the rule is about the date, not the person's age."],
      ["The parents may simply choose which plan is primary based on which has the lower deductible", "Coverage order is set by the coordination-of-benefits rule, not by patient preference or which plan looks cheaper; choosing by deductible is exactly the trap the rule forbids.", "Payer order follows the COB rule, not the family's convenience or the plan design."],
    ],
    "The birthday rule is a small marvel of arbitrary-but-fair design: to settle which of two parents' plans pays first for a child, it picks whoever's birthday lands earlier in the calendar year and pointedly ignores the birth year, so age is irrelevant. The lingering idea is why such an apparently random tie-breaker is good policy: it is objective, verifiable, and immune to the gaming that 'pick the cheaper plan' or 'the older parent decides' would invite. Coverage order is a rule to apply, never a preference to choose.",
    'Floe generated',
    true,
    "Compare only the month and day of each parent's birthday; ignore the year and ignore who is older.",
    { challengeRating: 6 },
  ),
]

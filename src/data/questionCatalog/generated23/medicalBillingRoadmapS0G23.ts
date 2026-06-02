import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const medicalBillingRoadmapS0G23: Question[] = [
  // ===========================================================================
  // Patient Responsibility and Consumer-Protection Rules (1 new -> reaches 8)
  // ===========================================================================
  makeSimpleQuestion(
    9460000,
    'Career Skills',
    'Patient Responsibility and Consumer-Protection Rules',
    'Ancillary services cannot waive NSA protection',
    'A patient has scheduled non-emergency surgery at an in-network hospital. The out-of-network anesthesiologist who will be assigned that day is asking the registration team to have the patient sign a notice-and-consent form so the practice can balance-bill the difference. What should the billing team advise?',
    'The waiver is not allowed for ancillary services like anesthesiology, so the patient keeps balance-billing protection and may only be charged the in-network cost-share',
    [
      ['Have the patient sign the notice-and-consent form so the balance bill is valid', 'The No Surprises Act flatly prohibits notice-and-consent waivers for ancillary services (anesthesiology, pathology, radiology, neonatology, and similar) at an in-network facility, so a signed form does not make the balance bill collectible. Relying on the signature would lead to billing a patient an amount the law protects them from.', 'Treat ancillary services at an in-network facility as never waivable and bill only the in-network cost-share.'],
      ['Balance-bill the patient because the anesthesiologist is genuinely out of network', 'Out-of-network status is exactly the situation the NSA addresses for in-network-facility care; the provider being out of network is what triggers the protection, not what defeats it. Billing the difference is the prohibited balance bill.', 'Recognize that out-of-network ancillary providers at an in-network facility are the protected case, and limit the charge to the in-network cost-share.'],
      ['Send the full charge now and let the patient dispute it through arbitration if they object', 'This shifts a non-collectible balance onto the patient and counts on them to fight it; the protection is automatic and does not depend on a patient initiating a dispute. It also risks a compliance violation for billing a protected amount.', 'Apply the protection at billing time rather than waiting for the patient to challenge an improper bill.'],
    ],
    'The No Surprises Act lets some out-of-network providers seek a signed notice-and-consent waiver for certain non-emergency services, but that waiver is never permitted for emergency care or for ancillary services such as anesthesiology, pathology, radiology, and neonatology delivered at an in-network facility. For those services the patient is protected regardless of any signature and may be charged only the in-network cost-sharing amount.',
    'Floe generated',
    true,
    'Ask whether this specialty is one the law lists as never-waivable, not whether the patient could sign something.',
    { challengeRating: 7 },
  ),

  // ===========================================================================
  // Revenue Cycle Overview (3 new -> reaches 8)
  // ===========================================================================
  makeSimpleQuestion(
    9460001,
    'Career Skills',
    'Revenue Cycle Overview',
    'A/R days as a cash-velocity metric',
    'A practice manager reports that gross charges are up year over year but cash collections feel slow and unpredictable. A biller suggests tracking "A/R days" (days in accounts receivable). What does this metric actually tell the team?',
    'It estimates how many days, on average, it takes to collect a dollar of revenue after it is billed, so a rising figure signals a slowdown in cash conversion',
    [
      ['It counts the number of claims currently sitting unpaid in the system', 'A raw claim count is workload, not velocity; A/R days normalizes the outstanding balance against average daily charges so a small number of large, slow claims is not hidden by many small fast ones. Counting claims would miss where the cash is actually stuck.', 'Track the dollar-weighted time to collect, not the raw count of open claims.'],
      ['It measures the percentage of claims denied on first submission', 'That describes the denial rate, a different metric entirely; A/R days measures collection speed across all paid and unpaid balances, not the share rejected at adjudication. Confusing the two would lead the team to chase denials when the real problem might be slow posting or follow-up.', 'Separate the denial rate (quality of submission) from A/R days (speed of collection).'],
      ['It tells you the profit margin on each encounter', 'Margin compares revenue to cost; A/R days says nothing about cost and everything about timing. Reading it as profitability would misdirect a cash-flow conversation into a pricing one.', 'Use A/R days for cash velocity and a separate margin analysis for profitability.'],
    ],
    'Days in A/R is total accounts receivable divided by average daily charges, and it estimates how long revenue sits uncollected after billing. A rising trend points to a slowdown in cash conversion (slow posting, aging follow-up, payer delays) even when charges are growing, which is why managers watch it alongside, but distinct from, denial rate and clean-claim rate.',
    'Floe generated',
    true,
    'Decide whether the number is about how fast money arrives or how often claims fail.',
    { challengeRating: 5 },
  ),
  makeSimpleQuestion(
    9460002,
    'Career Skills',
    'Revenue Cycle Overview',
    'High denial rate is a process signal',
    'A billing supervisor sees the first-pass denial rate climb from 6% to 14% over a quarter and proposes hiring two more billers to work the rising denial queue. What is the better diagnosis of what the rising rate is telling the team?',
    'A jump in the denial rate usually signals an upstream process defect to find and fix, not simply more work to staff against',
    [
      ['It is a workload problem that more staff in the denial queue will resolve', 'Adding hands to rework treats the symptom and leaves the defect generating new denials at the same rate; the queue refills as fast as it is worked. The rate is a process signal, so staffing alone does not move it.', 'Find the root cause feeding the denials and fix it upstream before sizing the rework team.'],
      ['It means payers tightened their rules and nothing can be done locally', 'Some payer policy shifts do occur, but assuming the cause is external skips the analysis; a 14% rate almost always includes correctable internal defects like a registration field or a missing modifier. Blaming payers forfeits the fixable share.', 'Segment the denials by reason and owner first, then separate the truly external from the correctable.'],
      ['It is normal seasonal variation and should be left alone', 'A more-than-doubling of the rate is well outside noise and points to a specific change in the process or the payer mix. Dismissing it as seasonal lets a structural leak keep running.', 'Compare denial reason codes period over period to see whether the spike is concentrated in a fixable cause.'],
    ],
    'Denial rate is a quality-of-process metric, not a measure of how busy the team is. A sustained rise typically traces to a specific upstream defect (a registration error, an authorization gap, a coding or modifier mistake), so the durable fix is to segment denials by reason and owner, correct the source, and feed it back to the front end. Staffing the rework queue without fixing the cause just keeps refilling it.',
    'Floe generated',
    true,
    'Ask whether more people clearing the queue would change the rate, or just the backlog.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    9460003,
    'Career Skills',
    'Revenue Cycle Overview',
    'Charge capture as a control point',
    'A clinic finds that a provider performed and documented a joint injection, but the charge never reached the claim, so the visit billed only the office E/M. Where in the revenue cycle did this account break, and who owns the fix?',
    'It broke at charge capture, where documented services are translated into billable charges, and the charge-capture or coding workflow owns closing the gap',
    [
      ['It broke at adjudication and the payer should be appealed for the missing line', 'Adjudication only evaluates what was submitted; the payer never saw the injection because it was never billed, so there is nothing to appeal. Sending an appeal would waste the deadline on a self-inflicted omission.', 'Add the missing charge through a corrected claim, then fix the charge-capture step that dropped it.'],
      ['It broke at eligibility because coverage was not verified for the injection', 'Eligibility governs whether coverage is active and the service is payable, not whether a documented service made it onto the claim. The encounter shows the service was done and documented; the failure is translating it into a charge.', 'Distinguish a coverage question from a missing-charge question and route to charge capture.'],
      ['It broke at payment posting because the injection payment was misapplied', 'Posting handles money that arrives, and no money arrived for a charge that was never submitted. Looking in posting for a charge that was never created sends the work to the wrong owner.', 'Trace back to the step that converts documentation into charges rather than the step that records remittances.'],
    ],
    'Charge capture is the control point where documented clinical services become billable charges on a claim. When a documented procedure never appears on the claim, the defect is at charge capture, not at adjudication, eligibility, or posting. The fix is to add the missing charge (typically via a corrected claim) and then repair the workflow or reconciliation that allowed a documented service to drop, so the same revenue does not leak next time.',
    'Floe generated',
    true,
    'Locate the step that turns what was documented into what was billed.',
    { challengeRating: 5 },
  ),

  // ===========================================================================
  // Eligibility, Benefits, and Authorization (2 new -> reaches 8)
  // ===========================================================================
  makeSimpleQuestion(
    9460004,
    'Career Skills',
    'Eligibility, Benefits, and Authorization',
    'Birthday rule for a dependent child',
    "A child is covered as a dependent under both parents' active employer plans. The mother was born March 12, 1990; the father was born July 3, 1985. Neither plan is court-ordered primary. Under the standard coordination-of-benefits birthday rule, which plan is primary for the child?",
    "The mother's plan is primary, because her birthday (March 12) falls earlier in the calendar year",
    [
      ["The father's plan, because he is the older parent", 'The birthday rule turns on whose birth date is earlier in the calendar year (month and day), not on which parent is older. The father is older but his July birthday is later in the year, so using age would key the wrong plan as primary.', 'Compare month and day only, ignoring birth year, to set the order.'],
      ["The plan with the lower deductible, to minimize the family's cost", 'COB order is rule-based, not chosen to minimize cost; deductible size never determines primary versus secondary. Picking by deductible would file in the wrong order and likely trigger a coordination denial.', 'Apply the birthday rule first; the deductible affects what the patient owes, not who pays first.'],
      ["Whichever plan the parents designate as primary", 'Parents cannot simply elect the order for a dependent child under standard COB; the birthday rule controls unless a court order or specific exception applies. Letting them choose would conflict with the payer rule and cause rework.', 'Default to the birthday rule and override only for a divorce decree or other documented exception.'],
    ],
    "The coordination-of-benefits birthday rule makes the plan of the parent whose birthday (month and day, not year) falls earlier in the calendar year the primary plan for a dependent child covered under both parents. Birth year and parental age are irrelevant. Exceptions exist (for example, a court order in divorce, or longest-coverage tiebreaker for identical birthdays), but absent those, the earlier-in-the-year birthday wins.",
    'Floe generated',
    true,
    'Look at the calendar date, not how old each parent is.',
    { challengeRating: 5 },
  ),
  makeSimpleQuestion(
    9460005,
    'Career Skills',
    'Eligibility, Benefits, and Authorization',
    'Billed units exceed the authorized units',
    'A patient has a valid prior authorization for 8 physical-therapy visits. The clinic delivered and is now billing 12 visits. The authorization number, dates, and service type all match. What is the correct read on this account before the claim goes out?',
    'The 4 visits beyond the authorized 8 are at risk of denial because the billed units exceed the authorization, so the unit gap must be resolved before or after submission',
    [
      ['The claim is clean because a valid authorization number is on file', 'A matching authorization number is necessary but not sufficient; authorizations approve a specific number of units, and billing beyond them invites denial of the excess. Treating the number alone as approval ignores the unit limit that the payer will enforce.', 'Reconcile billed units against authorized units, not just the presence of an auth number.'],
      ['Change the date span so all 12 visits appear to fall under the original 8-unit approval', 'Manipulating dates to disguise unauthorized units is fraud and will not survive an audit against the visit record. It also does nothing to obtain real approval for the extra care.', 'Pursue a legitimate add-on or extension authorization for the additional visits rather than altering dates.'],
      ['Bill all 12 and let the payer simply pay what was authorized', 'Submitting 12 against an 8-unit auth typically produces a denial on the excess (or the whole line), creating rework and a confused patient balance rather than a tidy partial pay. Hoping the payer reconciles for you wastes the timely window.', 'Address the 4 excess units up front, seeking a retroactive or add-on authorization where the payer allows it.'],
    ],
    'A prior authorization approves a defined service, date range, and number of units. Even with the correct authorization number, billing more units than were approved exposes the excess to denial. The defensible move is to reconcile billed units against authorized units and, for the overage, pursue a legitimate add-on or extension authorization under the payer rules, never to alter dates or units to disguise the gap.',
    'Floe generated',
    true,
    'Check not just whether an authorization exists, but how many units it actually approved.',
    { challengeRating: 6 },
  ),

  // ===========================================================================
  // Claims and Clean Submission (2 new -> reaches 8)
  // ===========================================================================
  makeSimpleQuestion(
    9460006,
    'Career Skills',
    'Claims and Clean Submission',
    'Resolving an NCCI edit with modifier 59',
    'A claim scrubber flags an NCCI procedure-to-procedure edit: a column 2 procedure is bundled into the column 1 procedure. The documentation clearly shows the two procedures were performed at separate anatomic sites during the same encounter. The edit carries a modifier indicator of 1. What is the correct way to get both paid?',
    'Append a distinct-service modifier such as 59 (or the more specific X{EPSU} modifier) to the column 2 code, supported by the documentation showing the separate site',
    [
      ['Override the scrubber edit and submit both codes without any modifier', 'A bare override does not tell the payer why the bundle should be unbundled, so the column 2 code will still be denied as included in the column 1 code. The edit indicator of 1 means a modifier, not an override, is what permits separate payment.', 'Add the appropriate distinct-service modifier to the column 2 code rather than suppressing the edit.'],
      ['Append modifier 25 to the column 2 procedure code', 'Modifier 25 is only for a significant, separately identifiable E/M service on the same day as a procedure; it does not unbundle two procedure codes. Using it here is the wrong tool and will not clear a procedure-to-procedure edit.', 'Reserve modifier 25 for E/M services and use 59 or an X modifier to unbundle two procedures.'],
      ['Drop the column 2 procedure entirely so the edit disappears', 'Removing a documented, separately performed procedure forfeits earned revenue and underreports the care delivered. The edit was unbundlable; the service should be billed, not abandoned.', 'Bill the documented service and unbundle it correctly with the distinct-service modifier.'],
    ],
    'An NCCI procedure-to-procedure edit with a modifier indicator of 1 may be unbundled when the documentation supports a distinct service, for example procedures at separate anatomic sites or separate sessions. The correct method is to append a distinct-procedural-service modifier (59, or the more specific XE/XP/XS/XU) to the column 2 code, not to override the scrubber, not to use modifier 25 (which is for E/M services), and not to delete the legitimate charge.',
    'Floe generated',
    true,
    'Ask which tool actually tells the payer "these were genuinely separate," and whether it applies to procedures or to E/M.',
    { challengeRating: 7 },
  ),
  makeSimpleQuestion(
    9460007,
    'Career Skills',
    'Claims and Clean Submission',
    'Modifier 25 for a separate E/M',
    'During a scheduled lesion-removal visit, the provider also evaluates and documents a new, unrelated complaint of chest tightness, performing a significant, separately identifiable E/M service the same day. To bill both the procedure and the E/M cleanly, what should the biller do?',
    'Append modifier 25 to the E/M code to indicate a significant, separately identifiable evaluation and management service on the same day as the procedure',
    [
      ['Append modifier 59 to the E/M code', 'Modifier 59 marks a distinct procedural service between two procedures; it is not used to separate an E/M service from a procedure. Using 59 on the E/M misapplies the modifier and is likely to deny.', 'Use modifier 25 on the E/M and reserve 59 for unbundling two procedures.'],
      ['Bill only the procedure and fold the E/M work into it', 'Bundling away a significant, separately identifiable evaluation underreports the work actually documented and loses legitimate revenue. The separate complaint supports a separate, billable E/M.', 'Report both services and signal the separate E/M with modifier 25.'],
      ['Bill the E/M and the procedure with no modifier and expect both to pay', 'Without modifier 25, payers typically bundle the same-day E/M into the procedure and deny it, because the global package is presumed to include routine pre-procedure evaluation. The modifier is what flags the work as separate.', 'Attach modifier 25 so the payer recognizes the E/M as distinct from the procedure.'],
    ],
    'Modifier 25 is appended to an E/M code to show that a significant, separately identifiable evaluation and management service was provided on the same day as a procedure or other service. It is distinct from modifier 59, which unbundles two procedure codes. Documentation must support that the E/M was above and beyond the usual pre- and post-procedure work for the modifier to hold up.',
    'Floe generated',
    true,
    'Decide whether you are separating an E/M from a procedure, or two procedures from each other.',
    { challengeRating: 6 },
  ),

  // ===========================================================================
  // Denials, Appeals, and Follow-Up (2 new -> reaches 8)
  // ===========================================================================
  makeSimpleQuestion(
    9460008,
    'Career Skills',
    'Denials, Appeals, and Follow-Up',
    'Medicare redetermination deadline',
    'A high-dollar Original Medicare claim was denied 90 days ago as not medically necessary (CARC CO-50). The biller has gathered the chart notes and the applicable coverage determination and is ready to challenge it. What is the first level of the Medicare appeals ladder and the deadline to file it?',
    'A redetermination, filed with the Medicare Administrative Contractor within 120 days of receiving the denial notice',
    [
      ['A QIC reconsideration, filed within 180 days of the denial', 'Reconsideration by a Qualified Independent Contractor is the second level and is only available after an unfavorable redetermination; its clock runs from the redetermination decision, not the original denial. Jumping straight to it skips the required first level.', 'File the level-one redetermination first; reconsideration comes only if that is denied.'],
      ['An ALJ hearing, because the amount in controversy is high', 'The Administrative Law Judge hearing is the third level and requires a minimum amount in controversy plus completion of the prior two levels; it cannot be the first step regardless of dollar size. Filing there now would be procedurally premature.', 'Start at redetermination and climb the ladder in order.'],
      ['A corrected claim resubmission to fix the medical-necessity denial', 'A corrected claim is for fixing claim errors before or instead of an appeal, but a not-medically-necessary determination is an adjudicated denial that is appealed, not corrected by resubmitting the same service. Resubmitting risks a duplicate denial and may eat the appeal window.', 'Treat CO-50 as an appealable denial and file a redetermination with supporting documentation.'],
    ],
    'The Original Medicare appeals ladder runs redetermination (level 1, filed with the MAC within 120 days of the denial notice), then QIC reconsideration (level 2, 180 days from the redetermination decision), then ALJ hearing (level 3, with a minimum amount in controversy and a 60-day window), and beyond. Each level requires completing the one before it, and a not-medically-necessary denial like CO-50 is appealed, not corrected by resubmission.',
    'Floe generated',
    true,
    'Identify the very first rung of the ladder and count its clock from the denial notice.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    9460009,
    'Career Skills',
    'Denials, Appeals, and Follow-Up',
    'Rejection versus adjudicated denial',
    'A claim comes back from the clearinghouse the same day it was sent, flagged because the subscriber ID is missing a digit. The payer never assigned a claim number and never adjudicated it. A new biller wants to file a formal appeal. What is the correct triage?',
    'This is a front-end rejection, not a denial, so the fix is to correct the subscriber ID and resubmit, not to appeal',
    [
      ['File an appeal because the claim was refused payment', 'An appeal applies to a claim that was adjudicated and denied; this claim never entered adjudication, so there is no determination to appeal. Filing an appeal on a rejection wastes effort and may sit unactioned while the timely-filing clock runs.', 'Correct the rejection and resubmit; reserve appeals for adjudicated denials.'],
      ['Treat it as a CO-45 contractual write-off and adjust the balance', 'CO-45 is a remittance adjustment that only appears after adjudication on an 835; a clearinghouse rejection produces no remittance and no group code at all. Writing it off would erase a collectible, fixable claim.', 'Recognize there is no remittance yet and simply repair and resend the claim.'],
      ['Bill the patient for the balance since the payer would not process it', 'The payer did not refuse coverage; it never received a processable claim because of a data error the practice can fix. Billing the patient for a self-inflicted rejection creates an unfair, indefensible balance.', 'Fix the data and resubmit so the payer can adjudicate before any patient responsibility is determined.'],
    ],
    'A rejection happens at the front end or clearinghouse before adjudication: the payer never accepted or processed the claim, usually because of a data or format error. A denial happens after adjudication, when the payer evaluated the claim and refused payment. Rejections are corrected and resubmitted; denials are appealed or corrected per their reason code. Confusing the two leads to filing appeals on claims that were never adjudicated.',
    'Floe generated',
    true,
    'Ask whether the payer ever actually processed and ruled on this claim.',
    { challengeRating: 5 },
  ),

  // ===========================================================================
  // Payments, Underpayments, and Patient Balances (3 new -> reaches 8)
  // ===========================================================================
  makeSimpleQuestion(
    9460010,
    'Career Skills',
    'Payments, Underpayments, and Patient Balances',
    'CO write-off is not patient responsibility',
    'An 835 remittance on a participating-provider claim shows: billed $300, allowed $180, with $120 adjusted under group code CO (CARC 45, charge exceeds the fee schedule), and a $36 PR coinsurance. The remaining $144 was paid. What should be posted to patient responsibility?',
    'Only the $36 PR coinsurance is patient responsibility; the $120 CO-45 amount is a contractual write-off and may not be billed to the patient',
    [
      ['$156, by adding the $120 CO-45 amount to the $36 coinsurance', 'CO group adjustments are contractual obligations the participating provider agreed to write off; billing the $120 to the patient violates the contract and is a classic improper balance bill. Only the PR-coded amount is the patient share.', 'Post the CO-45 as a write-off and bill the patient only the PR-coded $36.'],
      ['$120, treating the fee-schedule reduction as the patient owes the difference', 'The fee-schedule reduction under CO-45 is precisely what the provider may not collect from the patient; the allowed amount caps what anyone pays. Charging the difference inverts the meaning of the contractual adjustment.', 'Read CO as "provider write-off" and never push it to the patient.'],
      ['$0, because the payer already paid $144 so nothing is owed', 'The $36 coinsurance is explicitly assigned to the patient under the PR group code and remains collectible; ignoring it leaves earned, legitimate revenue uncollected. Payment of the plan share does not extinguish the patient share.', 'Bill the PR-coded coinsurance while writing off only the CO amount.'],
    ],
    'On a remittance, the group code tells you who owes what: CO (contractual obligation) amounts, including CO-45 fee-schedule reductions on a participating claim, are provider write-offs that cannot be billed to the patient, while PR (patient responsibility) amounts such as deductible, coinsurance, and copay are the patient share. Posting the CO amount as patient responsibility is one of the most common and most damaging billing errors.',
    'Floe generated',
    true,
    'Sort the adjustment lines by group code before deciding what the patient sees.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    9460011,
    'Career Skills',
    'Payments, Underpayments, and Patient Balances',
    'Medicare 60-day overpayment return',
    'During posting, a biller identifies that Original Medicare paid twice on the same claim line, leaving a clear overpayment credit balance on a Medicare account. What is the compliant way to handle it, and what timing matters?',
    'Report and return the identified Medicare overpayment through the contractor process by the later of 60 days after it was identified or the due date of any applicable cost report',
    [
      ['Hold the credit and apply it against the patient or payer next time a balance comes up', 'Applying a Medicare overpayment to a future balance is not returning it; retaining an identified overpayment past the deadline turns it into an obligation that can create False Claims Act exposure. Self-application is not the prescribed return process.', 'Use the Medicare credit-balance or refund process to return the money within the deadline.'],
      ['Wait for Medicare to notice and recoup it on its own schedule', 'The obligation to report and return runs on the provider once the overpayment is identified; passively waiting does not satisfy the 60-day rule and the clock is already running. Inaction is the exact behavior the rule penalizes.', 'Proactively return the identified overpayment rather than waiting for recoupment.'],
      ['Refund it to the patient since the account shows a credit', 'The overpayment came from Medicare on a duplicate payment, so the funds belong back to Medicare, not the patient; refunding the wrong party leaves the Medicare obligation unsatisfied and creates a second error. Credit balances must go to the correct payer.', 'Resolve the credit to the party that overpaid, here Medicare, through its return process.'],
    ],
    "Under the Medicare 60-day overpayment rule, once a provider identifies an overpayment it must report and return it by the later of 60 days after identification or the due date of any applicable cost report. Identified overpayments retained past that deadline become an 'obligation' that can trigger False Claims Act liability, with a six-year lookback. Credit balances must be resolved to the party that overpaid, using the contractor's credit-balance or refund process.",
    'Floe generated',
    true,
    'Ask who the money belongs to and what clock starts the moment you recognize the overpayment.',
    { challengeRating: 7 },
  ),
  makeSimpleQuestion(
    9460012,
    'Career Skills',
    'Payments, Underpayments, and Patient Balances',
    'Sequence the secondary claim before statementing',
    'A patient has primary and secondary coverage. The primary 835 has posted, showing an allowed amount with a remaining balance the primary left as patient responsibility. The secondary claim has not yet been filed or adjudicated. The system is ready to drop a patient statement for that remaining balance. What should happen first?',
    'File and adjudicate the secondary claim first, then statement the patient only for what remains after the secondary processes',
    [
      ['Send the statement now for the full primary patient-responsibility balance', 'Statementing before the secondary processes bills the patient for an amount the secondary plan may cover, producing an inaccurate balance and a likely refund later. It also erodes trust by demanding money the patient may not owe.', 'Sequence the secondary claim first so the statement reflects true remaining responsibility.'],
      ['Write off the remaining balance because the primary already paid its share', 'The primary leaving a balance does not make it a write-off; that balance may be the secondary plan\'s responsibility or, after coordination, a legitimate patient amount. Writing it off forfeits collectible revenue from the secondary.', 'Coordinate to the secondary payer before deciding any amount is uncollectible.'],
      ['Bill the patient and let them submit the secondary claim themselves', 'Coordination of benefits is the practice\'s responsibility when it holds the secondary information; pushing the secondary filing onto the patient delays payment and produces a wrong statement. It also risks missing the secondary timely-filing window.', 'File the secondary claim from the office, then statement only the true residual.'],
    ],
    'When a patient has secondary coverage, the secondary claim must be filed and adjudicated before the patient is statemented, so the statement reflects only the residual the patient actually owes after both plans process. Sending a statement after only the primary posts produces inflated balances, refunds, and patient distrust. The remaining primary balance is not automatically a write-off or a pure patient charge until coordination completes.',
    'Floe generated',
    true,
    'Ask whether another payer still has a turn before the patient should ever see a bill.',
    { challengeRating: 6 },
  ),
]

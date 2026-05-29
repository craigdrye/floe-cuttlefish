# Medical Billing Jargon Buster
**ID**: `medicalBillingJargon` - **Discipline**: Healthcare - **Level**: Career

## Course Aim
Revenue-cycle work fails not because people lack intelligence but because the language is engineered to obscure the next action. A payer writes "CO-50" and means "we decided this was not medically necessary, you eat the cost, and you have 120 days to prove us wrong." A scrubber says "modifier conflict" and means "you billed two codes that bundle unless you can document they were genuinely separate." This course teaches learners to translate payer, coding, and EDI shorthand into the single most useful thing in this work: a correct next step with the evidence and deadline attached.

The course covers the full arc a claim travels — eligibility and registration, clean-claim construction, the difference between a rejection and a denial, remittance interpretation (EOB/ERA, CARC/RARC), modifier and NCCI-edit logic, medical necessity and prior authorization, coordination of benefits and secondary billing, underpayment detection against contract, and the formal appeals ladder. It is deliberately concrete and decision-oriented: every concept is anchored to "what do I do Monday morning when this lands in my work queue."

The intended learner is an adult moving into or up within billing, coding, AR follow-up, or practice management — someone who can already read English but is drowning in acronyms, payer dialects, and the polite menace of reimbursement correspondence. The voice is plain, rigorous, and occasionally dry-humored, because the work is serious but the jargon deserves to be mocked into submission.

## Course Design Notes
Route questions here when they test billing shorthand, denial and remittance language, payer edits, claim-format and EDI distinctions, payment methodologies, documentation support, coordination of benefits, contract/underpayment logic, or appeal mechanics. Two question styles coexist in the bank: a playful "decode the payer's dialect into the real ask" scenario style (the original 7501–7520 set), and a precise definitional/exam-grade style (the top-up set) that pins down exact codes, deadlines, and distinctions. Both should always resolve to a defensible operational action, never to abstract theory.

Keep facts current and US-centric: CARC/RARC are X12 code sets, NCCI/PTP edits and Medicare appeal deadlines are CMS rules, and dollar thresholds (e.g., the OMHA/ALJ amount-in-controversy) change yearly — favor the relationship and mechanism over a memorized dollar figure where possible. Distinguish payer-specific behavior from universal rules. Reward the answer that finds the evidence and the deadline; punish the answer that resubmits blindly, bills the patient prematurely, or treats a rejection like a denial.

## Chapter 1: Eligibility, Registration, and the Front-End Trap
- **Key concepts**: eligibility verification, the 270/271 transaction, subscriber vs. patient, member ID and group number, plan type, copay/coinsurance/deductible, demographics, "garbage in, garbage out."
- **Core questions**: Was coverage active on the date of service? Is the subscriber the patient or a dependent? Did a registration error cause this downstream problem?
- **Applied skills**: read an eligibility response, distinguish copay from coinsurance from deductible, trace a denial back to a front-end data error.
- **Common traps**: assuming billing owns every denial; confusing the date of the eligibility check with the date of service; treating "active coverage" as "this service is covered."

## Chapter 2: Building the Clean Claim
- **Key concepts**: clean claim, encounter, CPT, ICD-10-CM, HCPCS Level II, NPI (rendering vs. billing), place of service, units, charge entry, superbill, first-pass / clean-claim rate.
- **Core questions**: What field is wrong before this goes out? Does the diagnosis support the procedure? Is the right form/transaction being used for this service?
- **Applied skills**: run a clean-claim pre-submission check; match CMS-1500/837P (professional) vs. UB-04/837I (institutional); read a place-of-service code (11 office, 21 inpatient, 22 on-campus outpatient, 23 ER).
- **Common traps**: billing facility charges on a professional form; assuming a higher-paying code without documentation; thinking "clean" means "looks tidy" rather than "complete and accurate on first pass."

## Chapter 3: Rejection vs. Denial — The EDI Pipeline
- **Key concepts**: rejection (pre-adjudication, front-end), denial (post-adjudication), clearinghouse, scrubber, 837 (claim), 999 (functional ack), 277CA (claim acknowledgment), 835 (remittance), payer edit.
- **Core questions**: Did the claim get rejected or denied? Did it ever reach the payer's adjudication engine? Where in the pipeline did it stop?
- **Applied skills**: read a 277CA to find which claims were accepted vs. rejected; recognize that a rejection is corrected and resubmitted (no appeal), a denial may require an appeal; watch the error reports so rejected claims don't silently vanish.
- **Common traps**: appealing a rejection (there is nothing to appeal — it never adjudicated); assuming silence means acceptance; conflating the clearinghouse acknowledgment with payer payment.

## Chapter 4: Remittance — Reading EOB, ERA, CARC, and RARC
- **Key concepts**: EOB (patient-facing) vs. ERA/835 (provider-facing), allowed amount, contractual adjustment/write-off, patient responsibility, CARC (Claim Adjustment Reason Code), RARC (Remittance Advice Remark Code), group codes (CO, PR, OA, PI), payment posting.
- **Core questions**: What got paid, adjusted, denied, or shifted to the patient? Is this a write-off or a balance I can bill? What is the CARC telling me to do?
- **Applied skills**: post an 835 line by line; separate contractual write-off (CO) from patient responsibility (PR); use the CARC for the reason and the RARC for the supplemental detail; spot an "Alert:" informational RARC.
- **Common traps**: posting everything as paid to clear the queue; billing the patient for a contractual (CO) adjustment; ignoring the RARC that names the actual fix.

## Chapter 5: Modifiers, Bundling, and NCCI Edits
- **Key concepts**: modifier logic, NCCI PTP (procedure-to-procedure) edits, Column One/Column Two, modifier indicator (0 = never unbundle, 1 = bypass allowed), modifier 59 and the X{EPSU} subset, modifier 25 vs. 57, medically unlikely edits (MUE), laterality (RT/LT).
- **Core questions**: Does the modifier describe a real clinical distinction or is it being used to force payment? Is this edit bypassable? What documentation supports the override?
- **Applied skills**: decide when 59/XE/XS/XP/XU applies (separate encounter, site, practitioner, or unrelated service); choose modifier 25 (significant separate E/M, minor procedure) vs. 57 (decision for major surgery, 90-day global); respect a modifier-indicator-0 edit.
- **Common traps**: stacking modifiers "for safety"; using 59 when a more specific X modifier exists; appending 25 to an E/M that was really the decision for surgery (should be 57).

## Chapter 6: Medical Necessity and Prior Authorization
- **Key concepts**: medical necessity, prior authorization vs. referral, LCD/NCD, payer medical policy, retro/retroactive authorization, ABN (Advance Beneficiary Notice), the GA/GX/GY/GZ modifier family.
- **Core questions**: Was authorization required, and does the approval match what was billed? Does the documentation meet the payer's policy? Who is financially liable if Medicare won't pay?
- **Applied skills**: confirm an auth covers the right CPT/units/dates; map ABN modifiers (GA = ABN on file for expected medical-necessity denial; GZ = expected denial, no valid ABN, provider eats it; GY = statutorily excluded; GX = voluntary ABN for an excluded service); decide when a service can be billed to the patient.
- **Common traps**: assuming "authorized" means "authorized exactly as performed"; billing the patient under GZ (you can't — no valid ABN); treating an LCD as advisory rather than a coverage rule.

## Chapter 7: Coordination of Benefits and Secondary Billing
- **Key concepts**: coordination of benefits (COB), primary vs. secondary payer, the birthday rule, Medicare Secondary Payer (MSP), crossover claim, COB adjustment (OA-23), balance vs. allowed-amount logic on the secondary.
- **Core questions**: Which payer is primary? What does the secondary actually owe after the primary's allowed amount and adjustments? Why did the secondary deny for "COB"?
- **Applied skills**: apply the birthday rule for a dependent child; sequence Medicare correctly under MSP; bill a secondary with the primary's EOB/835 attached; read OA-23 as "the primary already adjusted this."
- **Common traps**: billing the wrong payer first; double-counting an adjustment the primary already took; assuming the secondary pays the full patient balance.

## Chapter 8: Underpayments, Appeals, and AR Follow-Up
- **Key concepts**: contract/fee schedule, allowed-amount audit, underpayment, timely filing, corrected claim vs. appeal, the Medicare appeals ladder (redetermination → reconsideration → ALJ/OMHA → Appeals Council → judicial review), reconsideration, AR aging buckets, write-off decisions.
- **Core questions**: Did the payer pay the contracted rate? What deadline applies, and what evidence goes with the appeal? Is this account worth pursuing or should it be closed?
- **Applied skills**: compare payment to contract to catch underpayment; pick the right Medicare appeal level and watch the clock (redetermination within 120 days of the initial determination; reconsideration within 180 days; ALJ within 60 days); assemble an appeal packet with documentation and the precise rebuttal; triage an aging work queue by recoverability and deadline.
- **Common traps**: missing timely-filing windows; filing a corrected claim when an appeal was needed (or vice versa); appealing without the evidence that would actually overturn the decision; writing off recoverable balances out of fatigue.

## Capstone
Take a denial-and-AR work queue of mixed items. For each, classify it: rejection or denial; root cause (eligibility, coding/modifier, medical necessity, authorization, COB, contract/underpayment, or front-end data); the owner; the evidence needed; the controlling deadline; and the single next action (correct-and-resubmit, appeal at the right level, rebill secondary, query the provider, write off, or escalate). Produce a one-line operational diagnosis of where the revenue cycle is leaking and what to fix first.

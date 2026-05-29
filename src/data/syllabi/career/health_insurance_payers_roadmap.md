# Health Insurance Payers Roadmap
**ID**: `healthInsurancePayersRoadmap` - **Discipline**: Healthcare - **Level**: Career

## Course Aim
A health insurance payer is, at bottom, a machine for pricing and managing risk while moving money between members, employers, the government, and providers. This course teaches you how that machine actually runs: how benefits get designed and funded, how a claim travels from a swiped insurance card to a paid (or denied) line item, how utilization and pharmacy spend get managed, how the plan gets paid for sicker members, and how quality and member-experience scores turn into real dollars. The aim is operational judgment, not vocabulary recall. By the end you should be able to look at a payer problem and say who bears the risk, which rule or contract term governs, where the money and the member sit, and what the defensible next action is.

The payer world is unusually dense with acronyms and segment-specific rules, and the same word can mean different things in commercial, Medicare Advantage, and Medicaid managed care. So the course is built around a few transferable habits: always ask which line of business you are in, separate the benefit (what is covered) from the network (who is in) from the payment (how much and to whom), and trace every operational decision back to a member impact and a regulatory deadline. Those habits travel across roles, whether you sit in claims, UM, network, actuarial, risk adjustment, quality, appeals, or product.

This is a moving target. Prior authorization reform, surprise-billing protections, price transparency, and interoperability mandates have reshaped payer operations in the last few years, and risk-adjustment models keep changing. The course treats current rules as load-bearing facts but trains you to reason about why they exist, so the judgment survives the next regulatory cycle.

## Course Design Notes
Route questions here when they test payer operations: plan design and funding, claims adjudication and payment, eligibility and coordination of benefits, provider contracting and network adequacy, utilization management and medical policy, pharmacy and PBM mechanics, risk adjustment, quality and Star Ratings, value-based contracts, appeals and grievances, member experience, and the regulatory frame (ACA, ERISA, Medicare Advantage, Medicaid managed care, No Surprises Act, transparency and prior-authorization rules). Keep every concept concrete: tie it to a decision, a workflow, a dollar, a deadline, or a member sitting on the other end. Prefer questions that force the learner to distinguish lines of business, separate covered-benefit logic from network and payment logic, and name the rule or contract term that controls. Favor realistic ambiguity over trivia. When a fact is rule-bound (timely-filing windows, appeal deadlines, network-adequacy standards), test whether the learner knows it is rule-bound and where to look, not just the number.

## Chapter 1: Payer Ecosystem and Lines of Business
- **Core questions**: Which line of business am I in, and who actually bears the financial risk? Who is the payer's customer versus the patient?
- **Key concepts**: commercial fully insured vs. self-funded (ERISA) employer plans, ASO arrangements, stop-loss; Medicare Advantage and the bid/benchmark/rebate flow; Medicaid managed care and state contracts; individual ACA marketplace; TPA vs. carrier; premium, MLR, and the 80/85 percent medical loss ratio rebate rule.
- **Applied skills**: Classify a plan by funding model and segment; identify who is at risk for claims (insurer, employer, or government); read which regulator and rulebook applies.
- **Common traps**: Assuming the insurer always bears claims risk (self-funded employers do, the carrier just administers); treating Medicare Advantage like Original Medicare; confusing the member with the customer; thinking MLR is a profit cap rather than a floor on spending.

## Chapter 2: Benefit Design and Cost Sharing
- **Core questions**: What does the plan cover, and how much does the member pay before and after the plan does? How does cost sharing change member and provider behavior?
- **Key concepts**: deductible, copay, coinsurance, out-of-pocket maximum; in-network vs. out-of-network benefits; essential health benefits and ACA preventive-services mandate; HDHP/HSA pairing; tiered networks and benefit differentials; medical vs. pharmacy benefit split; actuarial value and metal tiers.
- **Applied skills**: Walk a charge through the cost-sharing waterfall (deductible, then coinsurance, until OOP max); explain why a "covered" service can still leave a large member bill; map a benefit to the right cost-share bucket.
- **Common traps**: Confusing deductible with out-of-pocket maximum; assuming preventive care is free in all situations (diagnostic follow-ups are not); forgetting that out-of-network usually has a separate, higher (or no) OOP max; treating "covered" as "free."

## Chapter 3: Eligibility, Enrollment, and Coordination of Benefits
- **Core questions**: Is this person actually covered on this date, under which plan, and who pays first when two plans exist?
- **Key concepts**: eligibility verification, effective and termination dates, retroactive term, dependent and Medicaid redetermination; primary vs. secondary payer and COB order; Medicare Secondary Payer rules; birthday rule; 834 enrollment file and 270/271 eligibility transactions; special enrollment periods.
- **Applied skills**: Determine coverage on a date of service; sequence primary and secondary payers; spot a retro-term that will trigger claim recoupment.
- **Common traps**: Paying as primary when the plan is secondary; ignoring Medicare Secondary Payer obligations; assuming active coverage without checking the date of service against term dates; mishandling COB so the member is double-charged or the plan overpays.

## Chapter 4: Claims Adjudication and Provider Payment
- **Core questions**: Was this claim paid correctly, and which contract term or edit drove the amount?
- **Key concepts**: 837 claim, allowed amount, contracted/fee-schedule rate vs. billed charge, capitation, DRG and APC institutional payment, bundled payments; edits and code editing (NCCI), modifiers, place of service; 835 remittance and the EOB; clean claim and prompt-pay rules; recoupment and overpayment recovery.
- **Applied skills**: Reconcile billed vs. allowed vs. paid vs. member responsibility on a remittance; identify why a line denied or down-coded; trace a payment to the governing contract term.
- **Common traps**: Confusing billed charge with allowed amount (the discount is the point); assuming fee-for-service when the provider is capitated or under a DRG; missing a bundling/NCCI edit; treating a denial code as the explanation rather than as a pointer to policy.

## Chapter 5: Provider Networks, Contracting, and Adequacy
- **Core questions**: Is this provider in network, on what terms, and is the network broad enough to meet the rules?
- **Key concepts**: credentialing and re-credentialing, participation agreement, fee schedule negotiation, narrow and tiered networks, single-case agreements; network adequacy standards (time/distance and appointment-wait standards, especially in MA and Medicaid); provider directory accuracy obligations; No Surprises Act and out-of-network balance-billing protection.
- **Applied skills**: Determine in-network status and the correct contracted rate; assess whether a network meets adequacy standards for a county; apply No Surprises Act protections to an out-of-network emergency or facility-based claim.
- **Common traps**: Assuming a credentialed provider is in network for every product (it varies by plan); ignoring provider-directory accuracy rules; missing No Surprises Act protections and letting a member be balance-billed; treating network adequacy as optional rather than a contractual/regulatory floor.

## Chapter 6: Utilization Management and Medical Policy
- **Core questions**: Does this request meet medical-necessity policy, what evidence is missing, and what is the member risk if it is delayed or denied?
- **Key concepts**: prior authorization, concurrent and retrospective review, step therapy, medical necessity, clinical criteria (e.g., MCG/InterQual), medical policy and coverage determinations, peer-to-peer review; the CMS interoperability and prior-authorization final rule (electronic PA, decision-timeliness, and reason-transparency requirements).
- **Applied skills**: Apply clinical criteria to a request and document the decision; write an appeal-ready denial rationale that cites the criterion and the missing evidence; identify when a delay creates clinical or regulatory risk.
- **Common traps**: Denying for "not medically necessary" without naming the unmet criterion; confusing a benefit exclusion with a medical-necessity denial (different appeal paths); blowing decision-timeliness deadlines; forgetting that an expedited/urgent request has a shorter clock.

## Chapter 7: Pharmacy Benefits and the PBM
- **Core questions**: How is a drug covered and paid for, and where does the PBM sit between the plan, the pharmacy, and the manufacturer?
- **Key concepts**: formulary and tiers, prior authorization and step therapy on drugs, specialty drugs, rebates and spread vs. pass-through pricing, MAC pricing, pharmacy network, point-of-sale adjudication; PBM role and conflicts; medical vs. pharmacy benefit drugs (buy-and-bill, J-codes); the Inflation Reduction Act Part D redesign and Medicare drug-price negotiation.
- **Applied skills**: Explain why a drug rejected at the pharmacy counter and what override is needed; distinguish a medical-benefit from a pharmacy-benefit drug; reason about how rebates affect net cost vs. member cost.
- **Common traps**: Confusing list price with net price after rebates; assuming the member's coinsurance reflects the plan's net cost; missing that the same drug can be billed under either benefit; treating the PBM as a neutral pass-through.

## Chapter 8: Risk Adjustment and Plan Revenue
- **Core questions**: How does the plan get paid more for sicker members, and is the documentation accurate and compliant?
- **Key concepts**: risk adjustment, HCC (hierarchical condition categories) and the v28 model transition, RAF score, MA bid and benchmark, Medicaid and ACA risk-adjustment programs; RADV audits; the difference between coding accuracy and coding intensity; chart review and supplemental data.
- **Applied skills**: Explain how a documented chronic condition changes plan revenue; distinguish legitimate gap-closure from non-compliant upcoding; reason about RADV audit exposure.
- **Common traps**: Treating risk adjustment as billing (it is revenue from CMS/state, not from claims); chasing codes without supporting documentation (RADV/False Claims exposure); ignoring the v28 model changes that dropped or reweighted conditions; conflating diagnosis capture with quality care.

## Chapter 9: Quality, Star Ratings, and Value-Based Care
- **Core questions**: Which quality or cost gap matters most, how is it measured, and what dollars ride on it?
- **Key concepts**: HEDIS measures, CAHPS and member-experience weighting, Medicare Advantage Star Ratings and the quality-bonus payment, care gaps, value-based and shared-savings contracts, capitation and downside risk, population health and total cost of care, attribution.
- **Applied skills**: Identify the highest-leverage care gap given Star weights; design an incentive that changes provider behavior without gaming the measure; explain how a Star rating change moves plan revenue.
- **Common traps**: Optimizing a measure instead of the outcome it proxies; ignoring that CAHPS/member-experience measures are heavily weighted and slow to move; assuming shared savings means no downside; confusing attribution (which patients count) with performance.

## Chapter 10: Appeals, Grievances, and Member Experience
- **Core questions**: What does the member need now, which deadline applies, and what documentation proves the plan handled it fairly?
- **Key concepts**: grievance vs. appeal, standard vs. expedited timelines, internal appeal levels, external/independent review, state vs. federal vs. MA/Medicaid appeal tracks, EOB and adverse-benefit-determination notices, call-center access standards, audit readiness and case documentation.
- **Applied skills**: Route an issue correctly (grievance vs. appeal vs. coverage determination) and apply the right clock; assemble a defensible case file; write a member-facing decision that is accurate, clear, and compliant.
- **Common traps**: Misclassifying a grievance as an appeal (or vice versa) and applying the wrong deadline; missing the expedited timeline when health is at risk; under-documenting so the decision fails an audit; using jargon the member cannot act on.

## Chapter 11: Regulation, Transparency, and Compliance
- **Core questions**: Which rulebook governs this line of business, and what must the plan disclose, report, or prove?
- **Key concepts**: ACA, ERISA, HIPAA privacy/security and transactions, Mental Health Parity (MHPAEA and NQTL analysis), No Surprises Act, Transparency in Coverage and machine-readable files, Hospital/plan price transparency, MA and Medicaid managed-care regulations, state DOI oversight, fraud-waste-abuse and SIU.
- **Applied skills**: Identify the controlling regulator and obligation for a given plan and issue; spot a parity problem in a UM policy; connect a transparency or PA-reform rule to an operational change.
- **Common traps**: Applying state-insurance rules to a self-funded ERISA plan (largely preempted); ignoring mental-health parity in UM and network design; treating transparency files as a compliance afterthought; confusing FWA (fraud) with simple claim error.

## Capstone
Work a fictional payer operations case end to end and produce a leadership-ready packet. You are handed a member, a plan, a provider, and a problem: classify the line of business and who bears risk; verify eligibility and coordinate benefits; adjudicate a disputed claim against the contract and edits; resolve a prior-authorization and a pharmacy denial with appeal-ready rationale; assess one risk-adjustment and one Star/quality gap and the dollars attached; route and document a member appeal under the correct deadline; and flag the governing regulatory obligations (including any No Surprises Act, parity, or PA-reform issues). Close with a one-page executive summary that states the decision, the member impact, the financial and compliance tradeoffs, the owner, and the follow-up metric. The packet is graded on whether each decision names the right line of business, the controlling rule or contract term, and the member sitting on the other end.

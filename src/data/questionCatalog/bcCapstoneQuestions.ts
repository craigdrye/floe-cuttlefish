import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// BC CAPSTONE — BSA/AML Program Review (First Heritage Bank)
// ----------------------------------------------------------------------------
// 50 integrative questions (IDs 4420500–4420549) covering the remediation week
// at a fictional regional bank under an OCC exam finding. All set on the SAME
// fictional institution so the learner experiences the full remediation arc
// across the five capstone lessons — initial assessment, TM tuning fix, BO
// refresh, SAR backlog clearance, and reporting to regulators.
//
// First Heritage Bank context (consistent across every question below):
//   - $45B-asset US regional bank, headquartered in Atlanta.
//   - ~250 branches across the Southeast US.
//   - Recent OCC exam identified MRA (Matter Requiring Attention) findings in
//     three areas:
//       * Transaction monitoring tuning — high false-positive rate, weak
//         peer-group rules for cash-intensive businesses.
//       * Beneficial ownership refresh gaps — 12% of high-risk accounts older
//         than 5 years are out of date.
//       * SAR backlog — 180 cases sitting over the 30-day filing window.
//   - $3B in commercial real estate exposure, growing fintech partner program,
//     expanding correspondent banking with Latin American banks.
//   - The learner is a senior compliance analyst leading the program
//     remediation.
//
// Voice: matches the existing capstone canon — specific, evidence-anchored,
// no filler, no strawman distractors. Each wrong-answer rationale is bespoke;
// the lesson on each question is the integrative takeaway that ties the
// choice back to the wider remediation program.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe BC capstone canonical bank'

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

const CHAPTER = 'Capstone: BSA/AML Program Review'

// Difficulty distribution target: 15 at 3, 25 at 4, 10 at 5 (50 Qs total).
export const BC_CAPSTONE_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Lesson 1: Initial Assessment (4420500–4420509)
  4420500: 3, // Reading the MRA letter
  4420501: 4, // Scoping the remediation program
  4420502: 3, // Root-cause framing for TM
  4420503: 4, // Root-cause framing for BO refresh
  4420504: 4, // Root-cause framing for SAR backlog
  4420505: 3, // Prioritization across three MRAs
  4420506: 4, // Resource ask to executive committee
  4420507: 5, // Distinguishing MRA vs MRIA implications
  4420508: 4, // Engaging internal audit early
  4420509: 3, // Communication cadence with OCC examiner-in-charge

  // Lesson 2: TM Tuning Fix (4420510–4420519)
  4420510: 3, // False-positive baseline measurement
  4420511: 4, // Peer-group construction for cash-intensive MSBs
  4420512: 4, // Threshold recalibration for structuring rule
  4420513: 5, // Above-the-line / below-the-line testing
  4420514: 4, // Suppression rules and the productivity trap
  4420515: 4, // Model validation independence
  4420516: 3, // Documenting tuning rationale
  4420517: 5, // Fintech partner program TM scope
  4420518: 4, // Correspondent-bank TM rules for LatAm flows
  4420519: 4, // Coverage assessment before sign-off

  // Lesson 3: BO Refresh Remediation (4420520–4420529)
  4420520: 3, // Defining the population of stale BO records
  4420521: 3, // Prioritization within the 12% gap
  4420522: 3, // Outreach channel choice
  4420523: 3, // Documentation standard for refreshed BO
  4420524: 4, // Handling non-responsive customers
  4420525: 5, // Trigger events vs calendar refresh
  4420526: 4, // Layered ownership and 25% threshold edge cases
  4420527: 4, // Legal-entity customers with nominee directors
  4420528: 3, // Audit trail and exam-readiness
  4420529: 5, // Closing the gap permanently vs one-time sweep

  // Lesson 4: SAR Backlog Clearance (4420530–4420539)
  4420530: 3, // Triaging the 180-case backlog
  4420531: 4, // Continuing-activity discipline on aged cases
  4420532: 4, // Narrative quality on rushed cases
  4420533: 5, // 30-day clock and the discovery-date question
  4420534: 4, // No-SAR decisions documented properly
  4420535: 4, // Escalation criteria during clearance
  4420536: 3, // Avoiding tipping during outreach
  4420537: 5, // Re-filing vs supplemental SAR
  4420538: 4, // Resourcing the backlog clearance team
  4420539: 4, // Quality-control sampling during throughput push

  // Lesson 5: Reporting to Regulators (4420540–4420549)
  4420540: 4, // Internal audit report structure
  4420541: 3, // Board-level escalation framing
  4420542: 4, // OCC response letter tone
  4420543: 5, // Commitment dates and the credibility cost of slipping
  4420544: 4, // Root cause vs symptom in the response letter
  4420545: 4, // Self-identifying additional issues during remediation
  4420546: 3, // Quarterly progress reporting cadence
  4420547: 5, // Independent validation of remediation
  4420548: 4, // Coordinating with FinCEN exam findings
  4420549: 5, // Closing the MRA — evidence of sustainability
}

export const bcCapstoneQuestions: Question[] = [
  // -------------------------------------------------------------------------
  // LESSON 1 — Initial Assessment (4420500–4420509)
  // Output: reading the OCC MRA, scoping a remediation program, identifying
  // root cause for each of the three findings, and getting the executive
  // committee aligned before the real work begins.
  // -------------------------------------------------------------------------
  q(4420500, 'Career Skills', CHAPTER, 'Reading the MRA letter',
    'You are a senior compliance analyst at First Heritage Bank. The OCC exam report names three MRAs — TM tuning, BO refresh gaps, and a 180-case SAR backlog. Your CCO asks for your first read on what the MRA is actually telling the bank. What is the most accurate framing to bring back?',
    'An MRA is a deficiency the OCC expects the bank to fix on its own timeline with management commitment — it is short of an enforcement action but signals that examiners see program weakness the board has to own and resolve, with follow-up tracking at each exam',
    [
      ['An MRA is a formal enforcement action that triggers a public consent order and civil money penalties', 'MRAs are supervisory findings, not enforcement actions. Treating an MRA like a consent order overstates the legal posture and panics the executive committee unnecessarily — the difference matters when scoping the response.'],
      ['An MRA is essentially a comment letter and the bank can address it informally without a structured remediation plan', 'MRAs are tracked at every subsequent exam and unaddressed MRAs commonly escalate to MRIAs or enforcement. Treating it informally is exactly how a single MRA becomes a multi-year supervisory problem.'],
      ['An MRA is a private finding that does not need to be reported to the board because it is not public', 'Federal banking guidance is clear that MRAs go to the board. Hiding the finding from the board is both a governance failure and the kind of behavior that escalates the next exam.'],
    ],
    'An MRA sits in a specific place on the supervisory ladder — more than a comment, less than a public enforcement action — and its handling expectations follow from that. The right opening read is one that names the board ownership, the management-led timeline, and the follow-up tracking, because each of those shapes the remediation plan.'),

  q(4420501, 'Career Skills', CHAPTER, 'Scoping the remediation program',
    'The CCO wants you to scope the First Heritage remediation in your first week. The three MRAs touch TM, BO, and SAR operations — each owned by a different team. What is the right scoping move before any workstream starts?',
    'Stand up a single program with three workstreams under one executive sponsor, with a shared milestone tracker and weekly steering — the OCC will read disjointed responses as a governance issue on top of the underlying findings',
    [
      ['Let each functional team handle its own MRA on its own timeline, since the issues are technically separate', 'Letting each team run independently is exactly how response letters end up inconsistent and milestones slip without anyone noticing until the OCC asks. Three MRAs landing in the same exam are a *program* signal, not three accidents.'],
      ['Outsource the remediation to an external consultancy and have them run all three workstreams end-to-end', 'External help is often part of the answer, especially for model validation or independent testing, but handing the whole program to a consultancy reads as the bank refusing to own the issues — examiners notice when management has not internalized the findings.'],
      ['Focus only on the SAR backlog first because filing-window violations are the most visible and the other two can wait', 'Sequential single-track remediation lets the other findings age, and aging findings escalate. The OCC expects parallel progress on all three with credible milestones, not a queue.'],
    ],
    'Three MRAs in one exam are not three projects — they are one program. Standing it up under a single executive sponsor with shared governance is what makes the response credible, because the regulator is reading the bank\'s ability to manage the program as much as the technical fixes themselves.'),

  q(4420502, 'Career Skills', CHAPTER, 'Root-cause framing for TM',
    'The OCC noted a high false-positive rate and weak peer-group rules for cash-intensive businesses. The TM team\'s instinct is to "tighten the rules and reduce alerts." What is the right root-cause framing to push back with?',
    'The issue is not alert volume but coverage — the peer groups for cash-intensive businesses do not reflect First Heritage\'s actual customer mix, so productive alerts are buried under unproductive ones; the fix is segmentation and threshold rationale, not blanket tightening',
    [
      ['The TM vendor scored the rules poorly, so the root cause is the vendor and replacing the platform is the fix', 'Blaming the vendor before testing the tuning is a classic deflection. TM platforms are tunable — most "vendor problem" diagnoses are actually configuration and segmentation problems the bank owns.'],
      ['Investigators are spending too much time per alert, so the root cause is operations productivity and the fix is more staffing', 'Productivity is a downstream symptom of bad alert quality, not the root cause. Throwing investigators at a poorly tuned model masks the finding rather than fixing it.'],
      ['The OCC dislikes high false-positive rates, so the root cause is regulatory preference and the fix is reducing the alert count', 'Reducing alerts without re-establishing coverage is exactly the behavior that produces SAR misses — the next exam will find under-reporting on top of bad tuning. The finding is about *quality* of coverage, not raw volume.'],
    ],
    'Root cause for a TM finding is almost always about whether the rules cover the right behavior for the bank\'s actual customers, not about volume. Naming coverage and segmentation as the cause keeps the remediation pointed at the real fix and protects against the second-order failure of under-reporting.'),

  q(4420503, 'Career Skills', CHAPTER, 'Root-cause framing for BO refresh',
    'Twelve percent of First Heritage\'s high-risk accounts older than 5 years have stale beneficial ownership records. The retail team says "we refresh BO at account opening and that is the requirement." What is the right root-cause framing?',
    'CDD rule expectations include ongoing monitoring and refresh at trigger events or risk-based intervals — the gap reveals that First Heritage has no operational mechanism for periodic BO refresh on aged high-risk accounts, which is a process design problem, not a documentation lapse',
    [
      ['The retail team is correct that BO is collected at account opening and the OCC is being overly strict on refresh expectations', 'Treating the OCC finding as overreach is the wrong posture in a remediation. Even if the underlying regulatory language has interpretive room, the bank\'s job in remediation is to meet the standard the examiner expects, not relitigate it.'],
      ['The branches that opened the accounts five years ago were not following procedure, so the root cause is staff training', 'Pinning a 12% gap on individual staff at branches that opened accounts years ago is both unfair and almost certainly wrong. A gap that size is a *system* problem — no refresh trigger, no aging review — not a training problem.'],
      ['The BO records are stored in a legacy system that does not flag stale entries, so the root cause is the technology platform', 'Technology is part of the answer but not the root cause — the root cause is that the bank\'s CDD program does not include a periodic refresh requirement at all. Fixing the platform without fixing the program design just hides the same gap in better software.'],
    ],
    'Root cause for a BO refresh finding is usually a missing program element: no periodic refresh cadence on aged high-risk accounts and no trigger-event review. Naming the missing element is the fix, because patching it with training, technology, or interpretation arguments leaves the underlying program shape unchanged.'),

  q(4420504, 'Career Skills', CHAPTER, 'Root-cause framing for SAR backlog',
    'The SAR backlog at First Heritage is 180 cases past the 30-day window. The FIU manager says "we just need more investigators." Before approving a staffing ask, what is the right root-cause framing to insist on?',
    'A backlog of this size points to throughput and intake imbalance — alert volume from poorly tuned TM is feeding a queue faster than investigators can clear it, and SAR-decision quality controls are slowing the late-stage close; staffing fixes the symptom but only if intake and process are addressed together',
    [
      ['The FIU is right that staffing is the answer and the fix is to hire 15 more investigators immediately', 'Adding investigators to a poorly tuned intake queue burns budget without solving the underlying problem — and the next exam will likely find the same backlog at a higher cost base. Staffing without fixing intake is not a remediation.'],
      ['The backlog exists because the SAR-decision criteria are too strict and the fix is to lower the SAR-filing threshold so cases close faster', 'Lowering the filing threshold to clear a backlog risks defensive over-filing and degrades the value of SAR data — this is exactly the behavior FinCEN guidance warns against. The fix is filing the right SARs faster, not filing more SARs to empty the queue.'],
      ['The 30-day clock is too tight given First Heritage\'s volumes, so the root cause is the regulatory window and the fix is requesting an extension', 'The 30-day window is set by FinCEN regulation, not by exam negotiation. Framing the rule itself as the problem during a remediation is not a credible position.'],
    ],
    'SAR backlogs almost always sit at the intersection of intake (TM tuning) and throughput (FIU capacity and process). Naming both in the root cause is what gives the remediation a chance of holding — a staffing-only fix typically returns as a finding in a later exam.'),

  q(4420505, 'Career Skills', CHAPTER, 'Prioritization across three MRAs',
    'You have to recommend a sequence and weighting for the three remediation workstreams at First Heritage. Which prioritization actually maps to risk and to OCC expectations?',
    'Run all three in parallel with the SAR backlog getting the fastest-clock treatment, BO refresh getting a clear deadline and a sustainable trigger mechanism, and TM tuning getting the longest runway because it requires testing and validation — sequence reflects regulatory urgency and technical depth',
    [
      ['Do TM tuning first because it is the most technical, then SAR backlog, then BO refresh', 'Putting TM first while the SAR backlog ages is a clock failure — late SARs are an ongoing regulatory exposure that compounds every day. Tuning depth does not justify deprioritizing a live filing-window issue.'],
      ['Do BO refresh first because it touches customer outreach and takes the longest', 'Long-pole reasoning ignores risk weighting. BO refresh has a real deadline but does not have an active clock running on individual cases — the SAR backlog does.'],
      ['Do them in alphabetical order or in the order the OCC listed them, since all three are equally important', 'Order-by-list is not a remediation strategy. The MRAs are not equally urgent — late SARs accumulate live regulatory exposure every day, while TM tuning is a slower-build risk. Treating them identically is a planning failure.'],
    ],
    'Prioritizing remediation is risk-weighted, not effort-weighted. The SAR backlog has live clocks; BO refresh has a deadline but no per-day deterioration; TM tuning has the longest technical tail. Mapping the sequence to those characteristics is what makes a remediation plan credible to the OCC.'),

  q(4420506, 'Career Skills', CHAPTER, 'Resource ask to executive committee',
    'You need to take a resource ask to the First Heritage executive committee — additional headcount, consultant spend, and technology investment. How should you frame the ask so the committee actually approves it without watering it down?',
    'Tie each dollar and each FTE to a named milestone the OCC will track, with a cost-of-failure framing that compares the ask to the cost of a consent order, civil money penalty, or franchise damage if the MRAs escalate',
    [
      ['Present the ask as a total number with a note that the OCC requires it, since regulatory mandates pass executive committees more easily', 'Presenting the OCC as the requester is misleading — the OCC does not approve specific budgets. The committee will see through it and the ask will be re-litigated when the line items become visible.'],
      ['Present a range from minimum to maximum so the committee can choose a middle option', 'Anchor-and-compromise pricing is a tactic that erodes credibility on a regulatory ask. The committee should be choosing whether the program is adequate, not negotiating the price down to a sub-adequate level.'],
      ['Present the ask without specific milestones because milestones lock the team into commitments that may slip', 'Vague asks are exactly what executive committees should reject. The whole point is to bind dollars to deliverables — without milestones, the program loses accountability internally and credibility externally.'],
    ],
    'Resource asks for regulatory remediation are credible when they bind spend to milestones the regulator will see and when the cost-of-failure framing makes the alternative concrete. Vague asks, range asks, and "the regulator made me do it" framings all degrade the credibility of the program at the moment it most needs to be funded.'),

  q(4420507, 'Career Skills', CHAPTER, 'MRA vs MRIA implications',
    'The CCO asks what happens if any of the three MRAs at First Heritage are not closed by the next exam. Specifically, when does an MRA become an MRIA, and what does that mean for the bank?',
    'An MRA escalates to an MRIA (Matter Requiring Immediate Attention) when the OCC concludes the issue threatens safe-and-sound operation or compliance with law — MRIAs carry a higher supervisory urgency, faster response expectations, and a meaningfully higher chance of formal enforcement if not promptly addressed',
    [
      ['MRAs become MRIAs automatically after one exam cycle without closure, regardless of severity', 'Escalation is judgement-based on severity and progress, not a fixed timer. Treating it as automatic both misstates the rules and obscures the actual lever — sustained, credible progress is what prevents escalation.'],
      ['MRIA is an internal OCC term that has no operational difference from MRA for the bank', 'MRIA carries materially different supervisory expectations, including faster response timelines and heightened scrutiny. Treating them as equivalent is a misreading that leads to under-prioritization.'],
      ['MRIA status requires the bank to immediately set aside reserves for civil money penalties', 'MRIA is a supervisory designation, not an accounting trigger. Civil money penalties may follow if formal enforcement results, but MRIA itself does not require any specific reserves treatment.'],
    ],
    'The MRA-to-MRIA distinction matters because it changes what credible remediation looks like. An MRA gives the bank time and a management-led timeline; an MRIA compresses both. Understanding the line and what crosses it is part of running a remediation that does not accidentally escalate.'),

  q(4420508, 'Career Skills', CHAPTER, 'Engaging internal audit early',
    'You consider whether to involve First Heritage Internal Audit during remediation, or whether to wait until the program is complete and let them validate at the end. What is the right choice and why?',
    'Engage Internal Audit early as an independent advisor on program design, but keep their formal validation work to the end so they preserve the independence the OCC will rely on — bringing them in for design feedback is not the same as having them own design',
    [
      ['Keep Internal Audit completely separate from the remediation until validation, since any earlier involvement compromises their independence', 'Total separation is a misreading of independence standards. Audit can advise on design without owning execution; the independence concern is about *ownership*, not contact. Refusing all contact actually weakens the program.'],
      ['Have Internal Audit lead the remediation directly, since they have the most independent view of the bank\'s controls', 'Audit leading remediation is exactly the conflict of interest the independence standards exist to prevent — they cannot then validate their own work. This blurs the lines the OCC most cares about.'],
      ['Wait until the program is complete and engage Internal Audit only for the final closure validation', 'Late engagement misses the chance to catch design flaws before they are baked in. By the time audit looks, fixing structural issues means re-doing work — early advisory contact is the cheap version of catching the same issues.'],
    ],
    'The line between advisory engagement and ownership is the line that protects audit independence. Early audit advice on program design is appropriate and improves outcomes; audit *owning* the design is not. Getting this balance right is one of the quieter signals to the OCC that the bank takes the second-line/third-line distinction seriously.'),

  q(4420509, 'Career Skills', CHAPTER, 'Communication cadence with EIC',
    'The OCC examiner-in-charge (EIC) for First Heritage has offered to take periodic updates during the remediation. What cadence and content posture should you propose?',
    'Monthly status updates with a written summary of completed milestones, current blockers, and any newly identified issues — the EIC values predictable, evidence-led updates and dislikes either silence or unstructured ad-hoc check-ins',
    [
      ['Wait until the next exam to update the EIC, so the bank does not appear to be over-communicating or seeking informal approval', 'Silence during a remediation reads as either avoidance or progress problems. Predictable updates are the norm and the EIC has explicitly invited them — declining the invitation is a credibility cost.'],
      ['Daily check-ins by phone so the EIC always has the freshest view', 'Daily contact overwhelms the EIC and signals that the bank cannot run the program without constant supervisory hand-holding. Predictable cadence beats frequency.'],
      ['Send updates only when something goes wrong, so the EIC associates communication with bad news', 'Bad-news-only communication trains the EIC to expect problems whenever the bank reaches out, and means the program\'s wins go unseen. Both effects degrade the working relationship.'],
    ],
    'EIC communication during remediation is a steady-cadence written discipline, not a reactive scramble or a silent run. Predictability and evidence are the two ingredients — the EIC has to be able to summarize the bank\'s progress in their own internal reporting, and a good cadence makes that easy.'),

  // -------------------------------------------------------------------------
  // LESSON 2 — TM Tuning Fix (4420510–4420519)
  // Output: recalibrating the transaction monitoring rules, building proper
  // peer groups for cash-intensive businesses, addressing fintech-partner
  // and correspondent-banking flows, and documenting the rationale.
  // -------------------------------------------------------------------------
  q(4420510, 'Career Skills', CHAPTER, 'False-positive baseline measurement',
    'Before tuning, you need a defensible baseline of First Heritage\'s current TM false-positive rate. How should you measure it so the post-tuning comparison is credible to the OCC?',
    'Define a productive alert as one that leads to a SAR or a documented heightened-review action, measure the productive-alert rate by rule and by segment over a stable historical window, and publish the methodology before tuning so the OCC sees the same numbers you do',
    [
      ['Use the total SAR-to-alert ratio across the entire bank as a single false-positive rate', 'A single global ratio hides exactly the rule-and-segment information the OCC needs. Tuning happens at the rule level; the baseline has to support that resolution or there is nothing to compare against later.'],
      ['Measure false positives as any alert closed without a SAR, regardless of investigation depth', 'Counting all closed-without-SAR alerts as false positives ignores valuable no-SAR outcomes like documented enhanced monitoring decisions. The definition needs to capture *productive* outcomes, not just SAR-filed ones.'],
      ['Skip the baseline and report only post-tuning numbers, since the pre-tuning state was broken anyway', 'Without a baseline, there is no way to demonstrate improvement. The OCC will ask for the comparison; the absence of one is read as either avoidance or a measurement problem.'],
    ],
    'A defensible baseline is rule-level, segment-level, and explicit about what counts as productive. Publishing the methodology pre-tuning is the move that makes the eventual comparison credible — the OCC has to be able to verify the same numbers, and a baseline measured only after the fact never quite earns full trust.'),

  q(4420511, 'Career Skills', CHAPTER, 'Peer-group construction for MSBs',
    'First Heritage banks ~600 cash-intensive businesses including check cashers, convenience stores, and money transmitters. The OCC criticized the peer-group construction. How should you redesign the peer groups?',
    'Segment cash-intensive businesses by NAICS sub-code, geography, and average monthly cash volume — building peer groups tight enough that a check casher in Atlanta does not sit in the same group as a convenience store in rural Alabama, because their normal cash patterns are not comparable',
    [
      ['Put all cash-intensive businesses in one peer group so the bank sees the whole population on the same scale', 'A single peer group is exactly the failure the OCC flagged. Mixing check cashers and convenience stores in the same group produces a normal that fits neither — every alert becomes either too sensitive or too dull.'],
      ['Use the bank\'s own internal customer-tier rating as the peer-group axis', 'Internal tier ratings often reflect commercial relationship value, not behavioral peers. Using them for TM peer grouping conflates two different segmentations and produces alerts misaligned with actual behavior.'],
      ['Build peer groups by SIC code only, since SIC is the long-standing industry classification', 'SIC has been superseded by NAICS for most modern segmentation work, and even NAICS at top level is too coarse for cash-intensive businesses. The redesign needs sub-code resolution plus geography and volume.'],
    ],
    'Peer-group construction is the load-bearing piece of any cash-intensive TM rule. Tight, behaviorally homogeneous groups produce useful alerts; loose groups produce noise. The OCC reads peer-group design as a leading indicator of whether the bank actually understands its customer base.'),

  q(4420512, 'Career Skills', CHAPTER, 'Threshold recalibration for structuring rule',
    'First Heritage\'s structuring rule flags cash deposits totaling >$9,500 across 5 days. The rule produces too many alerts on small business customers with legitimate cash deposits. How should you recalibrate it?',
    'Combine peer-group-relative thresholds with absolute floors — a small retailer with $30K monthly cash routinely deposits near the $10K line, so the rule should fire on departures from that customer\'s own pattern and the peer-group pattern, not on an absolute number alone',
    [
      ['Raise the threshold to $12,000 so fewer small businesses trip it', 'A flat threshold change without peer-group logic just shifts the line — it does not address the underlying issue that legitimate customers above the new threshold still produce alerts and legitimate customers below it still hide structuring. The rule needs *shape*, not a different number.'],
      ['Suppress alerts on any customer with prior alerts already closed as no-SAR', 'Auto-suppressing customers with closed alerts is a coverage failure waiting to happen — structuring patterns can change, and yesterday\'s no-SAR decision should not blind today\'s rule. This is exactly the kind of suppression rule that creates examination findings.'],
      ['Lower the threshold to $8,000 so more cases get reviewed, then close more of them faster', 'Lowering thresholds and clearing alerts faster is the wrong response to a tuning problem — it increases noise and degrades investigator quality on real cases. The fix is precision, not volume.'],
    ],
    'Threshold recalibration is rarely about a single number — it is about combining peer-relative behavior with absolute floors so the rule fires on actual departures, not on category-typical activity. Flat thresholds plus blanket suppressions are exactly the pattern that produced the original finding.'),

  q(4420513, 'Career Skills', CHAPTER, 'Above-the-line / below-the-line testing',
    'To validate the new TM thresholds at First Heritage, you propose above-the-line / below-the-line testing. The CCO asks why this method specifically. What is the right answer?',
    'Above-the-line testing samples alerts that fired at the new threshold to confirm productive capture; below-the-line testing samples activity just below the threshold to detect missed coverage — together they bracket the threshold and reveal both over- and under-sensitivity, which a one-sided sample cannot',
    [
      ['Above-the-line / below-the-line testing is required by FFIEC, so the bank has no choice', 'Pinning the method on a regulatory requirement misstates the basis. FFIEC examination guidance discusses the technique because it is the standard way to validate thresholds — the bank should adopt it for its analytical value, not as a checkbox.'],
      ['Below-the-line testing alone is sufficient because if nothing is missed, the threshold is fine', 'Below-the-line alone does not test productive capture above the threshold — a rule that misses nothing because it fires on everything passes the test trivially. Both directions are required to validate sensitivity *and* specificity.'],
      ['Above-the-line testing alone is sufficient because if alerts are productive, the rule is working', 'Above-the-line alone does not test for missed activity below the threshold — a rule with 100% productive above-line alerts could still be missing 90% of suspicious activity sitting just under the line. Both directions are required.'],
    ],
    'Above-the-line / below-the-line testing is the technique that bounds the threshold from both sides — productive capture above and coverage adequacy below. Each test alone answers half the question; together they answer whether the threshold is in the right place. Documenting both is what makes the tuning defensible at the next exam.'),

  q(4420514, 'Career Skills', CHAPTER, 'Suppression rules and productivity trap',
    'The TM team at First Heritage proposes adding suppression rules to filter out "obviously legitimate" customer types from alert generation. What is the right posture on these proposals?',
    'Treat every suppression rule as a potential coverage gap — each suppression must be documented with a stated risk rationale, an exception for trigger events, and periodic re-testing to confirm the suppressed segment is not generating missed activity',
    [
      ['Approve suppressions broadly because they reduce false positives and free investigator capacity', 'Broad suppression is the fastest way to manufacture future findings. The category "obviously legitimate" is precisely the kind of judgement that conceals risk — high-net-worth private banking customers, for example, have historically been exempted from monitoring and turned out to be material risks.'],
      ['Reject all suppressions as a matter of principle, since they reduce coverage', 'Blanket rejection treats every suppression as equally risky, which is also not right. Well-documented, peer-group-informed suppressions with periodic testing can be appropriate — the discipline is in the documentation and re-test cadence, not the existence of suppression itself.'],
      ['Approve suppressions on the largest customers first because they have the most legitimate volume', 'Suppressing the largest customers is exactly inverted from the risk: large customers can hide large suspicious activity in legitimate volume. Customer size is not a risk basis for reduced monitoring.'],
    ],
    'Suppression rules are the productivity trap that catches under-resourced TM teams every cycle. The right test is not whether the suppression reduces alerts — it always does — but whether the bank can defend the suppressed segment as genuinely lower risk with evidence, exceptions, and re-testing. Documentation discipline is the whole game here.'),

  q(4420515, 'Career Skills', CHAPTER, 'Model validation independence',
    'First Heritage uses a vendor TM platform with internally calibrated rules. The OCC also raised concerns about model validation. Who should validate the recalibrated model and why?',
    'An independent validation function — either an internal team that does not own model development or an external party with the relevant expertise — must validate the model, because the team that built or tuned it cannot also be the team that signs off it works',
    [
      ['The TM tuning team can validate its own work since they have the deepest understanding of the model', 'Self-validation is the exact independence failure SR 11-7 and OCC 2011-12 are designed to prevent. The team that built or tuned the model cannot also sign off that it works — that is the definitional model risk management failure.'],
      ['The vendor should validate the model since they know the platform best', 'Vendor validation is not independent of the vendor\'s commercial interest, and is not a substitute for the bank\'s own independent validation. Vendor materials can inform validation but cannot replace it.'],
      ['Validation is only required for credit and market risk models, not for TM rules', 'Model risk management expectations apply to TM models — they are quantitative tools used in regulatory decisions and fall squarely inside SR 11-7 scope. Treating TM as out-of-scope is a common but incorrect read.'],
    ],
    'Model validation independence is one of the small number of compliance program rules where there is no good edge case. The team that built or tuned a model cannot validate it. Getting this right is mechanical, and getting it wrong is one of the most common reasons TM remediation findings recur.'),

  q(4420516, 'Career Skills', CHAPTER, 'Documenting tuning rationale',
    'For each rule First Heritage retunes, the OCC expects a documented rationale. What does an adequate rationale actually contain?',
    'The threshold value and the peer-group definition; the data window and method used to derive them; above-the-line and below-the-line test results; named owner and approval date; and the trigger conditions for the next re-tune',
    [
      ['A summary paragraph for each rule explaining the new threshold in plain language', 'A plain-language summary is the public-facing wrapper, not the rationale. The OCC will ask for the data window, the test results, and the trigger conditions — without those, the documentation is just narrative.'],
      ['An email chain showing the TM team\'s discussion and the final decision', 'Email chains are not a documentation standard. They make the rationale unreviewable for anyone who joins later and they typically lack the structured elements (data, tests, owner, re-tune trigger) the OCC expects.'],
      ['A vendor report showing the recommended threshold from the platform\'s built-in optimizer', 'Vendor outputs can be evidence but not rationale. The bank still has to record why it accepted (or modified) the vendor recommendation, what data it tested against, and who owns the decision.'],
    ],
    'Documented tuning rationale is the artifact that lets the next exam re-trace why each threshold is where it is. Without the data window, the tests, the owner, and the re-tune trigger, the documentation cannot answer the questions an examiner asks — and the absence of answers is itself a finding.'),

  q(4420517, 'Career Skills', CHAPTER, 'Fintech partner program TM scope',
    'First Heritage\'s growing fintech partner program serves end-customers through partner-branded apps. The TM platform covers First Heritage\'s direct customers but the fintech end-customer flows sit at the partners. What is the right TM scope here?',
    'First Heritage as the bank-of-record owns the BSA/AML obligation for fintech end-customer activity flowing through the bank and must either run TM on the underlying transaction data or rely on partner monitoring with rigorous oversight, data-sharing, and independent testing — outsourcing the work does not outsource the obligation',
    [
      ['The fintech partners run their own compliance programs, so First Heritage is not responsible for monitoring their end-customers', 'The bank-of-record cannot delegate its BSA/AML obligation. Partner programs without bank-level monitoring or rigorous oversight of partner monitoring are exactly the structure that has produced the major fintech-bank enforcement actions of recent years.'],
      ['First Heritage should require partners to file their own SARs and absolve itself of monitoring duties', 'SARs filed by partners on behalf of a bank are not a substitute for the bank\'s own monitoring obligation, and structurally the SAR-filing entity is the bank when the bank holds the underlying account. Treating SAR responsibility as transferable to a partner misreads the regulatory architecture.'],
      ['The fintech end-customer flows are too low-value to warrant TM coverage', 'Volume rather than per-transaction value is what creates BSA/AML risk in fintech partner programs — millions of small transactions can mask structuring, layering, and sanctions exposure. Low-value framing is exactly the gap recent enforcement has targeted.'],
    ],
    'BaaS and fintech-partner programs sit at the most-enforced edge of the current BSA/AML landscape. The principle is durable: the bank-of-record owns the obligation, regardless of who operates the customer-facing app. Building or overseeing TM coverage of partner flows is now part of the table-stakes program design for a bank that wants to run a partner program.'),

  q(4420518, 'Career Skills', CHAPTER, 'Correspondent banking TM rules for LatAm',
    'First Heritage is expanding correspondent banking with Latin American respondent banks. The OCC has previously highlighted correspondent banking as a high-risk channel. What TM rule design is appropriate?',
    'Build rules that monitor expected vs actual respondent activity patterns — wire corridor distributions, originator/beneficiary geographies, nested-correspondent indicators, and sudden volume shifts — and combine with periodic due-diligence refresh of each respondent bank\'s own AML program',
    [
      ['Apply the same TM rules used for retail customers, since dollars are dollars', 'Retail TM rules are designed for a fundamentally different risk shape — direct customer behavior — and miss the structure-specific risks of correspondent banking like nested correspondents, third-party originators, and respondent-level AML weakness. Reusing retail rules is a coverage failure.'],
      ['Rely on the respondent bank\'s own monitoring since they have the customer relationship', 'Respondent-bank monitoring is part of the picture but not a substitute. The correspondent has obligations under the USA PATRIOT Act §312 and FFIEC guidance to perform its own due diligence and monitor for unusual respondent-level activity.'],
      ['Exclude correspondent flows from TM since they are bank-to-bank rather than customer-to-bank', 'Bank-to-bank framing ignores that the underlying originators and beneficiaries are the people the BSA aims to monitor. Excluding correspondent flows is exactly the structural blindness that produced the largest historical AML enforcement cases.'],
    ],
    'Correspondent banking TM is its own design problem — the rules monitor flows at a different layer than retail TM and have to account for nested correspondents and respondent-level AML quality. Latin American corridors specifically have elevated risk profiles that the OCC will look at closely, and a copy-paste of retail rules is not a credible answer.'),

  q(4420519, 'Career Skills', CHAPTER, 'Coverage assessment before sign-off',
    'Before signing off on the retuned TM model, you need to perform a coverage assessment. What does an adequate coverage assessment cover at First Heritage?',
    'A walk-through of the bank\'s products, customer segments, geographies, and channels — including fintech partners and correspondent banking — confirming that for each, there is a TM rule designed to detect the typologies the segment can plausibly produce, with documented gaps and a plan to close them',
    [
      ['Confirm that every rule from the prior model still fires in the new model', 'Rule continuity is not coverage — a rule that survives the retune can still leave a typology uncovered, and a new rule may have replaced an old one with broader coverage. Coverage has to be assessed against typologies and segments, not rule lineage.'],
      ['Confirm that the new model produces fewer alerts than the old model', 'Alert-count reduction was the symptom the regulator flagged, not the goal. A model with fewer alerts and worse coverage is worse than the starting point — the coverage assessment exists specifically to prevent this trade-off going unnoticed.'],
      ['Confirm that the vendor platform supports all available rules out of the box', 'Vendor capability inventories are not coverage assessments. What matters is whether the bank\'s specific products and segments are covered, not what the platform could in principle do.'],
    ],
    'Coverage assessment is the discipline that prevents a retuning project from accidentally narrowing the program. The output is a typology-by-segment matrix with named owners and explicit gap plans — anything less leaves the bank unable to answer the OCC\'s coverage questions at the next exam.'),

  // -------------------------------------------------------------------------
  // LESSON 3 — BO Refresh Remediation (4420520–4420529)
  // Output: identifying the gap population, prioritizing outreach, getting
  // refreshed BO into the system with documentation that survives an exam,
  // and building a sustainable mechanism so the gap does not recur.
  // -------------------------------------------------------------------------
  q(4420520, 'Career Skills', CHAPTER, 'Defining the population of stale BO',
    'The OCC said "12% of high-risk accounts older than 5 years have stale BO." Before remediating, you have to define the population precisely. Which definition holds up?',
    'High-risk-rated legal-entity customers (per First Heritage\'s CDD risk-rating methodology) opened more than 5 years ago whose beneficial-ownership record has not been verified or updated within the bank\'s defined refresh cadence — name each criterion explicitly so the population count is reproducible',
    [
      ['Any account older than 5 years with no recent BO update, regardless of risk rating', 'Including non-high-risk accounts inflates the population and dilutes the remediation. The OCC finding was scoped to high-risk; broadening it does not strengthen the program, it confuses the milestone.'],
      ['The accounts the OCC specifically flagged in its examination work-papers', 'Remediating only the examiner\'s sample misses the population that produced the sample. The finding is on the *rate* in the broader population, not on the named cases — fixing only the sample leaves the gap intact.'],
      ['All legal-entity customers, since the CDD rule applies to all of them', 'Treating the entire legal-entity book as the population conflates the rule\'s applicability with the finding\'s scope. The finding is on high-risk aged accounts; the broader population may also need attention but should be sequenced after the named gap is closed.'],
    ],
    'Populations are defined by writing down each inclusion criterion in language another analyst could reproduce. Risk rating, account age, last-refresh date — each criterion is a control point, and an underdefined population is the most common reason a remediation runs over schedule or under-delivers.'),

  q(4420521, 'Career Skills', CHAPTER, 'Prioritization within the 12% gap',
    'Within the high-risk aged-account population at First Heritage, you have ~3,500 accounts to refresh. With limited bandwidth, what is the right prioritization order?',
    'Prioritize by risk score and recent activity — the highest-risk customers with the largest recent volumes get refreshed first, because they are the customers whose stale BO would produce the biggest TM and SAR-quality gap right now',
    [
      ['Refresh oldest-first, since age was the criterion the OCC cited', 'Age was the *threshold* for inclusion in the finding, not the risk-ranking within the population. Once an account is in the population, risk weighting takes over — refreshing a dormant 7-year account before an active 5-year account misreads the risk.'],
      ['Refresh smallest-first to clear the count quickly and report progress', 'Optimizing for case-count throughput hides the risk concentration and produces a report that looks good without addressing the customers who actually matter. The OCC will ask for risk-weighted progress, not raw counts.'],
      ['Refresh alphabetically so the ordering is reproducible and unbiased', 'Alphabetical ordering is reproducible but not risk-aligned, and remediation prioritization is not about avoiding bias in selection — it is about closing the most material risk first.'],
    ],
    'Prioritization inside a defined population is a risk-weighting exercise. The customers whose stale BO is producing live risk — high score, active volume — go first, even if older customers are technically more aged. The principle is the same as triaging anywhere: the highest-impact case opens the queue.'),

  q(4420522, 'Career Skills', CHAPTER, 'Outreach channel choice',
    'For 3,500 high-risk customers, you need to choose an outreach channel for BO refresh. Each option has different response-rate and operational-cost trade-offs. What is the right channel mix?',
    'A tiered approach — relationship-manager outreach for the highest-risk and largest customers, secure-message-plus-form for mid-tier, and bulk secure mail for the residual — with escalation paths for non-response and clear timelines at each tier',
    [
      ['Send a single bulk email to all 3,500 customers with a self-service form link', 'Bulk email under-serves the highest-risk customers and produces a low response rate where high response matters most. It also lacks audit trail of authenticated delivery, which is part of what BO documentation needs.'],
      ['Have branch staff call each customer individually, regardless of risk tier', 'Universal phone outreach burns scarce relationship-manager and branch time on lower-risk cases where a written request would suffice. It also delays the highest-risk refreshes behind a queue of lower-priority calls.'],
      ['Wait for customers to come into the branch for other business and update BO at that point', 'Passive opportunistic refresh is the operating model that produced the original gap. Replacing it with itself does not solve the finding — the OCC expects active outreach with a defined timeline.'],
    ],
    'Outreach tiering matches the channel intensity to the risk and to the customer\'s materiality. Universal-bulk and universal-personal are both wrong because they ignore that the population is heterogeneous — and the operational discipline of running a tiered program is exactly what the OCC reads as evidence of mature CDD.'),

  q(4420523, 'Career Skills', CHAPTER, 'Documentation standard for refreshed BO',
    'When a customer responds with updated BO information, what documentation standard should the file contain to satisfy an OCC re-test?',
    'Identifying information for each beneficial owner at 25% or more and the single control person; the source documents used to verify each (or a documented reliance on the customer\'s certified attestation per the rule), the date of refresh, the staff member who reviewed it, and the next scheduled refresh',
    [
      ['Just the customer\'s signed BO form, since that is what the rule requires', 'The form is the minimum input, not the documentation standard. The file also needs the verification work, the reviewer, and the next-refresh schedule — without those, an examiner cannot tell whether the bank actually did anything beyond collecting paper.'],
      ['A short note in the customer profile saying "BO refreshed on [date]"', 'A note without the actual ownership details and verification record is exactly the kind of weak documentation that produced the original finding. The OCC will sample the file, not just the note.'],
      ['Copies of every document the customer submitted, with no analysis layer', 'Document piles without an analysis layer leave the examiner to do the work of verifying the bank\'s decision. The standard is that the file should answer the question "what did the bank conclude and on what basis?" not just "what did the customer send?"'],
    ],
    'Documentation standards exist so that a stranger to the case — examiner, auditor, future analyst — can re-trace the decision. The four pieces are the ownership identification, the verification work, the reviewer, and the next refresh. Files missing any one of those leave a hole the next exam will find.'),

  q(4420524, 'Career Skills', CHAPTER, 'Handling non-responsive customers',
    'After two outreach attempts, ~400 First Heritage customers have not responded to the BO refresh request. What is the right next step?',
    'Escalate to a defined non-response protocol — additional documented outreach, account-restriction or hold consideration based on risk rating, and ultimately exit consideration for customers whose risk profile cannot be re-verified; treat non-response as a risk signal rather than a documentation gap',
    [
      ['Treat the customer as in-compliance since the bank made reasonable outreach attempts', 'Reasonable outreach does not refresh the BO record. The bank still has stale information on a high-risk customer; the response gap is not the customer\'s problem, it is the bank\'s ongoing CDD exposure.'],
      ['Close the accounts automatically after a fixed period without further review', 'Automatic closure without risk consideration mistreats commercial relationships and may itself produce account-closure complaints or unbanking concerns. Closure has to be a risk-considered decision, not a default outcome.'],
      ['Mark the file as "non-responsive" and move on to the next customer', 'Documentation that the customer did not respond does not solve the underlying problem — the bank still cannot verify its high-risk customer\'s BO. The marking is part of the audit trail but cannot substitute for an actual resolution.'],
    ],
    'Non-response in a BO refresh is itself a risk signal that has to be acted on, not a closed loop. The right architecture has escalation tiers — more outreach, then restrictions, then exit consideration — with risk weighting at each step. This is one of the places where program maturity is most visible to an examiner.'),

  q(4420525, 'Career Skills', CHAPTER, 'Trigger events vs calendar refresh',
    'To prevent recurrence, First Heritage has to design ongoing BO refresh. Should refresh be calendar-based, trigger-based, or both?',
    'Both — calendar refresh at risk-weighted intervals (annually for high risk, less frequently for low risk) combined with trigger-event refresh on ownership changes, control changes, significant activity changes, or risk-rating upgrades — calendar catches stagnant cases, triggers catch material change',
    [
      ['Calendar-based only, with all customers refreshed every three years', 'Pure calendar refresh misses ownership changes between cycles and can be wasteful on low-risk customers who would refresh sooner under risk weighting. The risk and the change-event signal both have to be in the design.'],
      ['Trigger-based only, since calendar refresh creates unnecessary work for unchanged customers', 'Trigger-only refresh assumes the bank can reliably detect every relevant trigger, which it cannot. Calendar refresh exists to backstop the cases where a trigger was missed or never reached the bank.'],
      ['Refresh only when the customer initiates a new product or transaction', 'Customer-initiated refresh is the model that produced the original gap. The customer\'s product activity is not a reliable signal for BO change, and many high-risk customers do not initiate new activity for years.'],
    ],
    'Sustainable BO programs combine calendar and trigger-based refresh because each catches what the other misses. The trigger logic catches change-driven cases; the calendar catches stagnant cases. Designing the program with both is the single most important step to prevent the gap from recurring at the next exam.'),

  q(4420526, 'Career Skills', CHAPTER, 'Layered ownership and 25% threshold',
    'Several First Heritage legal-entity customers have layered ownership where each direct owner is below 25% but ultimate beneficial owners (UBOs) cross the threshold once layers are aggregated. How should the BO record handle this?',
    'Aggregate ownership through each layer to identify any natural person whose effective ownership reaches 25% or more, and record those as beneficial owners — direct-only reading misses the rule\'s intent, which is to identify the natural-person owners regardless of structural layering',
    [
      ['Record only the direct owners and note that no direct owner exceeds 25%', 'Direct-only reading misses the regulatory intent of the rule, which is to look through legal structures to natural-person beneficial owners. Aggregation is built into the standard interpretation.'],
      ['Record the names of the legal entities that own the customer, not the natural persons behind them', 'BO records identify natural persons, not legal entities. Recording legal-entity owners is exactly what the BO rule was designed to prevent — the whole point is to see through the structures.'],
      ['Treat the absence of any direct 25% owner as confirmation that no beneficial owner exists', 'The control-person element of the rule still applies regardless of ownership distribution — a single control person must always be identified. Treating "no 25% owner" as "no beneficial owner" misreads the rule.'],
    ],
    'Layered ownership is one of the most-tested elements of CDD examinations because it tests whether the bank actually understands the rule\'s look-through intent. Aggregation through layers and identification of a control person regardless of ownership distribution are both required — getting either wrong is a recurring finding pattern.'),

  q(4420527, 'Career Skills', CHAPTER, 'Legal entities with nominee directors',
    'A First Heritage correspondent-banking respondent has nominee directors and a trust ownership structure that obscures the underlying UBOs. The OCC views nominees as a red flag. How should you handle this account?',
    'Require enhanced due diligence including documentation of the underlying beneficial owners behind the nominee and trust structures — if the bank cannot satisfy itself as to the identity of the natural-person UBOs, the relationship should be re-evaluated for exit, not maintained on a thin record',
    [
      ['Accept the nominee director information at face value since the structure is legally permissible in the home jurisdiction', 'Legal permissibility in the jurisdiction does not satisfy the bank\'s own CDD obligation. Nominee structures specifically require look-through diligence; treating them as opaque-by-design is exactly what the rule prohibits.'],
      ['Record the nominee director\'s name as the beneficial owner since they are listed as the controlling person', 'Nominees by definition are not the beneficial owners — they hold the role on behalf of someone else. Recording the nominee in the BO field is documenting an answer the rule explicitly rejects.'],
      ['Mark the account as low documentation but maintain the relationship because it is commercially valuable', 'Trading documentation quality for commercial value on a high-risk correspondent is exactly the trade-off that produces the largest enforcement actions. Commercial value cannot offset look-through inability.'],
    ],
    'Nominee directors and opaque trusts are the highest-attention area in correspondent and high-net-worth CDD. The bank has to either satisfy itself as to the natural-person UBOs or exit the relationship — there is no middle option where commercial value substitutes for documentation. Examiners read willingness to exit as the strongest signal of program seriousness.'),

  q(4420528, 'Career Skills', CHAPTER, 'Audit trail and exam-readiness',
    'You want each refreshed BO file at First Heritage to be exam-ready. What does exam-ready actually mean operationally?',
    'A pulled file can answer, within minutes, who the beneficial owners are, what documentation supports each, what the risk rating is, when it was last refreshed, who reviewed it, and when the next refresh is due — without the analyst having to assemble the story from scattered locations',
    [
      ['All BO documentation is stored centrally in the bank\'s document management system', 'Storage location is necessary but not sufficient. The OCC will pull a file and ask the questions above — if those answers require an analyst to dig across systems, the file is not exam-ready even if everything is technically retained.'],
      ['Every BO refresh has been signed off by a compliance officer', 'Sign-off is one element but says nothing about the substantive content or the ability to retrieve the story quickly. Exam-readiness is about what a pulled file actually shows, not who signed it.'],
      ['Refreshed BO records have been entered into the core banking system', 'Core-system entry is operationally important but does not constitute exam-readiness on its own — the supporting documentation, risk rating, and refresh schedule also have to be retrievable as a coherent file.'],
    ],
    'Exam-readiness is a retrieval test: pull a random file and see whether it tells the story without analyst assembly. Filing things in the right places matters, but the test is the speed and completeness of the story the file produces — and this is the most common gap an exam-day walkthrough exposes.'),

  q(4420529, 'Career Skills', CHAPTER, 'Closing the gap permanently',
    'You have cleared the 12% gap. The OCC will ask how First Heritage prevents recurrence. What is the right framing for permanent closure rather than one-time sweep?',
    'A standing BO refresh program with calendar and trigger-based refresh, documented exception handling, monthly aging metrics reported to the CCO and reviewed by audit, and an annual independent test — the gap recurs when there is no standing process, so the closure is the process, not the sweep',
    [
      ['A one-time sweep with a second sweep scheduled in three years to catch new aging', 'Periodic sweeps without a standing process are exactly how the original gap formed — between sweeps, accounts age without any monitoring. The fix is continuous, not periodic.'],
      ['Adding a stricter BO collection requirement at account opening so that going forward, fresh accounts have full records', 'Front-end controls help the future flow but do not address the back-book aging problem at all. The standing refresh program is the only thing that prevents the back book from re-aging into a gap.'],
      ['Hiring more CDD staff so that capacity for refresh is no longer the constraint', 'Capacity helps but does not constitute a program. Without aging metrics, exception handling, and audit oversight, additional staff can be busy without preventing recurrence.'],
    ],
    'Permanent closure of a CDD finding is process-based, not sweep-based. The standing program — calendar plus triggers, aging metrics, audit oversight, periodic independent test — is what the OCC reads as sustainable. A clean sweep without a standing process is a finding waiting to recur at the next exam cycle.'),

  // -------------------------------------------------------------------------
  // LESSON 4 — SAR Backlog Clearance (4420530–4420539)
  // Output: triaging 180 cases past the 30-day window, getting narrative
  // quality right under throughput pressure, handling continuing activity,
  // and clearing the backlog without creating new findings.
  // -------------------------------------------------------------------------
  q(4420530, 'Career Skills', CHAPTER, 'Triaging the 180-case backlog',
    'You inherit 180 SAR cases past the 30-day filing window. With limited investigator capacity, how should you triage them?',
    'Triage by risk and aging — highest-risk cases and cases approaching the 60-day end of the extended window get cleared first, with parallel tracks so no single bottleneck holds up a tranche, and an immediate stop on new aging by surge-resourcing intake',
    [
      ['Clear oldest-first across all risk levels, since aging is the primary regulatory concern', 'Pure oldest-first ignores risk concentration — clearing a 90-day low-risk case before a 35-day high-risk case is not how examiners read the population. Risk and aging both factor in, with risk usually dominating.'],
      ['Clear easiest cases first to maximize throughput and demonstrate progress', 'Easiest-first inflates the report numbers without addressing the high-risk concentration. It also typically leaves the hardest cases as a residual cluster that ages further while easy cases are picked off.'],
      ['Wait until all 180 cases are decided before filing any, so the batch is consistent', 'Holding decisions until the batch is complete keeps every case open for longer and worsens aging across the entire backlog. Cases are filed as they are decided, not in a batch.'],
    ],
    'Backlog triage is risk-weighted and aging-aware, and runs parallel tracks to avoid bottlenecks. The first priority is to stop the bleeding — surge intake so new cases do not age while the team works the backlog — and then clear the existing population in risk-and-aging order.'),

  q(4420531, 'Career Skills', CHAPTER, 'Continuing-activity discipline',
    'Several First Heritage backlog cases involve customers with continuing suspicious activity. The 90-day continuing-activity review framework matters here. What is the right discipline?',
    'For each customer with continuing activity, file the initial SAR within the 30-day window from discovery, then track and file continuing-activity SARs at 90-day intervals while the activity continues — the backlog of initial SARs does not extend the 90-day clock on already-filed customers',
    [
      ['Wait until all activity has stopped on a customer before filing any SAR, so the narrative captures the complete pattern', 'Waiting for activity to stop violates the 30-day filing window from discovery of suspicious activity. The framework specifically anticipates continuing activity through the 90-day re-filing structure — there is no "wait for the full pattern" option.'],
      ['File one SAR per customer per year, regardless of activity volume or pattern', 'Annual single-file does not match the 90-day continuing-activity framework. It under-reports active patterns and leaves a gap in the SAR trail that law enforcement relies on for ongoing investigations.'],
      ['File separate SARs for each individual transaction, even if part of the same continuing pattern', 'Per-transaction filing inflates SAR volume without adding analytic value and is not the framework FinCEN expects. Continuing-activity SARs aggregate the activity period in a single narrative with appropriate detail.'],
    ],
    'Continuing-activity discipline is the bridge between one-shot SAR thinking and ongoing investigations. The 30-day initial filing window plus the 90-day continuing-activity re-filing cadence is the structure — clearing a backlog means tracking each customer\'s position in that cadence, not collapsing it into "we filed once."'),

  q(4420532, 'Career Skills', CHAPTER, 'Narrative quality on rushed cases',
    'Under backlog pressure, the FIU manager suggests using a standardized narrative template to speed up case writing. What is the right view on this?',
    'Standardized structural elements are appropriate (the five W\'s, transaction summary, customer details, conclusion) but the substantive narrative has to be specific to each case — FinCEN guidance is explicit that boilerplate narratives reduce SAR usefulness and have been the subject of repeated enforcement attention',
    [
      ['Adopt the template and use it as-is to maximize throughput', 'Boilerplate narratives have been specifically called out by FinCEN as a quality problem — and several enforcement actions have referenced repetitive narratives as evidence of program inadequacy. Throughput cannot come at the cost of substantive specificity.'],
      ['Reject all templates and require every narrative to be written from scratch', 'Structural templates are not the problem — they help ensure each SAR addresses the five W\'s and the transaction summary. Rejecting all standardization conflates structure with content; the issue is content specificity, not section headings.'],
      ['Use the template but skip the narrative section entirely since the data fields already capture the activity', 'The narrative is not optional — it is the part of the SAR that law enforcement uses to understand what the data fields mean in context. Skipping it would render the SAR effectively useless for downstream investigation.'],
    ],
    'Narrative quality is the most-scrutinized output of the SAR program. Structural templating is fine; substantive boilerplate is not. The discipline under throughput pressure is to keep the structure consistent and the substance case-specific — getting this balance wrong is one of the most common reasons backlog clearances produce new findings.'),

  q(4420533, 'Career Skills', CHAPTER, '30-day clock and discovery date',
    'The 30-day SAR filing window runs from the date of discovery of facts that may constitute the basis for filing. Several backlog cases at First Heritage have disputed discovery dates. How should you handle this?',
    'Document the discovery date with the specific evidence that establishes it — typically the date the alert was generated and reviewed by an investigator who identified suspicion, or the earliest date a reasonable person would have identified the suspicion based on available information — and accept that some prior cases were late once that date is fixed',
    [
      ['Set the discovery date as the date the case was first assigned to the FIU, since the FIU is the body that determines whether a SAR is required', 'Case-assignment date may post-date discovery — if the alert was sitting in a queue, the suspicion existed at the alert generation point and a reasonable-person standard applies. Pushing discovery to assignment is the kind of move examiners specifically scrutinize.'],
      ['Set the discovery date as the date the SAR-decision was made, since that is when the filing requirement crystallized', 'SAR-decision date is the *end* of the analytic process, not the discovery point. The 30-day clock measures from the discovery of the *facts*, not from the conclusion that those facts require a SAR.'],
      ['Document whichever date produces a within-window filing to minimize late filings on the books', 'Choosing the date to fit the filing is exactly the bad-faith documentation problem that surfaces in exams and FinCEN enforcement. The date is what it is — and the program\'s integrity depends on documenting the actual date and accepting the late filings that result.'],
    ],
    'The 30-day clock is the most-litigated date in SAR compliance. Discovery is defined by when the facts were known or reasonably should have been known, not by internal process choices. Documenting it honestly produces late filings on aged cases — which the OCC has already seen — and accepting that is the cost of an honest record.'),

  q(4420534, 'Career Skills', CHAPTER, 'No-SAR decisions documented properly',
    'A material fraction of First Heritage\'s 180 backlog cases will close without a SAR. The OCC will sample no-SAR decisions during follow-up. What does an adequate no-SAR record contain?',
    'The specific reasons the activity did not meet the SAR threshold, the supporting evidence reviewed, any alternative actions taken (enhanced monitoring, customer outreach), and a reviewer sign-off — no-SAR decisions are reviewed as carefully as SAR-filed cases',
    [
      ['A brief note saying "reviewed and determined no SAR required"', 'Brief no-SAR notes are exactly what exam sampling targets. The OCC pulls them specifically to test whether the bank can defend the decision, and "no SAR required" without supporting reasoning is the most common no-SAR finding pattern.'],
      ['Only the SAR-filed cases need documented rationale, since no-SAR decisions are by definition not reportable', 'Reportability and reviewability are different. The bank still has to be able to defend why a no-SAR decision was correct — without that, the OCC cannot distinguish a defensible decision from a missed SAR.'],
      ['A copy of the alert and a note that it was investigated, with no decision rationale beyond that', 'Investigation evidence without decision rationale leaves the reviewer to reverse-engineer why no SAR was filed. The standard is explicit rationale tied to the suspicion threshold — anything less invites the examiner to substitute their own judgement.'],
    ],
    'No-SAR documentation is the often-overlooked half of SAR quality. The OCC samples no-SAR decisions because they reveal whether the bank actually applies the suspicion threshold or just clears cases without testing them. Documenting the reasoning, the evidence, and any alternative actions is the standard — and the discipline scales whether the backlog has 18 cases or 180.'),

  q(4420535, 'Career Skills', CHAPTER, 'Escalation criteria during clearance',
    'During backlog clearance, some cases will reveal activity meaningfully more serious than alert-level routine — large-scale fraud rings, potential sanctions exposure, suspected human trafficking indicators. What is the right escalation discipline?',
    'Pre-defined escalation criteria route specific case types — sanctions, OFAC matches, human-trafficking indicators, large fraud, insider activity — directly to senior compliance and (where appropriate) law enforcement contacts, regardless of standard backlog throughput sequencing',
    [
      ['Process all cases in backlog order, since the OCC is measuring backlog clearance and special handling would slow the count', 'Treating backlog throughput as the only metric is exactly the kind of one-dimensional response that misses critical risk. Escalation criteria override sequencing precisely because some cases cannot wait in the queue.'],
      ['Allow individual investigators to decide when to escalate, since they have the most context', 'Investigator discretion without pre-defined criteria produces inconsistent escalation and missed cases. Criteria have to be written down so any investigator can apply them; this is one of the places a clear playbook matters most.'],
      ['Escalate only after the standard SAR filing is complete, so the SAR is the trigger for downstream action', 'Some escalations — sanctions matches, imminent-harm cases — cannot wait for the SAR to be filed first. The escalation runs in parallel to or ahead of the SAR, not after it.'],
    ],
    'Escalation criteria are the safety valve on backlog throughput. They acknowledge that the queue is not all the same risk and that some cases need to leave the queue immediately. Written, named criteria — applied by any investigator without case-by-case judgement — are what make this work under throughput pressure.'),

  q(4420536, 'Career Skills', CHAPTER, 'Avoiding tipping during outreach',
    'Several backlog cases involve customers whose accounts the investigators want to ask follow-up questions on. What is the line between legitimate due diligence and tipping?',
    'The bank can ask customers ordinary CDD-type questions about source of funds or business purpose without disclosing the existence of a SAR or the suspicion — questions framed as routine due diligence are permissible; any disclosure that a SAR has been or might be filed is statutorily prohibited',
    [
      ['Any contact with a customer who is under SAR review is tipping and must be avoided entirely', 'Routine customer contact and CDD questioning are not tipping — the prohibition is on disclosing the SAR itself. Avoiding all contact would shut down legitimate due diligence and is not the rule.'],
      ['Investigators can mention that "we are doing some compliance reviews" so the customer understands the context of the questions', 'Even general statements about compliance review can constitute tipping if they signal to a customer that they are under suspicion. The safer ground is to frame questions as routine CDD without referencing any review process.'],
      ['The bank can ask the customer directly whether they think their activity is suspicious, since their answer would inform the SAR decision', 'Asking the customer whether they think their activity is suspicious telegraphs the SAR consideration and is exactly the tipping behavior that the statute prohibits. Investigations do not ask the suspect for their view on whether to file.'],
    ],
    'The tipping line is precise: ordinary CDD questioning is fine, disclosing the SAR or the suspicion is not. Investigators need to internalize the framing — "source of funds for this large deposit" is a routine question, "we are reviewing your account for suspicious activity" is a disclosure. Getting this right is part of the basic training of any FIU.'),

  q(4420537, 'Career Skills', CHAPTER, 'Re-filing vs supplemental SAR',
    'A previously filed SAR from First Heritage has new information that materially changes the picture — additional related accounts, a new typology indicator, or a connection to a known entity. Should the bank re-file or file a supplemental?',
    'File a continuing-activity SAR (or a new SAR if it is a distinct typology) that explicitly references the prior SAR by BSA ID and explains what is new — re-filing the same SAR is not the mechanism; the structure is forward-additive with cross-references, which preserves the audit and law-enforcement trail',
    [
      ['Re-file the original SAR with the new information added, replacing the prior filing', 'SAR filings are not replaced. The framework is additive — new SARs reference prior ones, and the prior filing remains in the record. Replacing a SAR is not a mechanism the system supports.'],
      ['Wait until the next 90-day continuing-activity window and include the new information in the regular re-filing', 'Material new information that meaningfully changes the picture should not wait for the standard cadence — if the new information is itself the basis for a SAR filing (a new typology, a new related account), the 30-day clock from discovery of *that* information applies.'],
      ['Note the new information internally but do not file again, since the activity is already on record with FinCEN', 'Internal-only notes do not satisfy the SAR obligation when new information itself triggers it. FinCEN relies on the SAR record to update law enforcement, and silent internal annotation is invisible at the federal level.'],
    ],
    'SAR re-filing structure is forward-additive: continuing activity gets a new SAR every 90 days, and material new information that meets the suspicion threshold gets its own SAR with cross-references to the original. The mechanism preserves the analytic trail and respects the 30-day clock — replacement and silent annotation both break it.'),

  q(4420538, 'Career Skills', CHAPTER, 'Resourcing the backlog clearance team',
    'You have to resource the backlog clearance team — 180 cases plus ongoing new intake. Options include reallocating internal staff, hiring contractors, or engaging a consultancy. What is the right mix?',
    'Combine internal staff who know First Heritage\'s systems and customers with vetted external contractors for capacity, under direct oversight of the bank\'s FIU manager — and ensure all SAR decisions are reviewed and signed by bank employees, not contractors',
    [
      ['Outsource the entire backlog to a specialist consultancy and have them file the SARs', 'SAR filings are made by the financial institution under its own attestation. Contractors can support investigation, but the filing decision and sign-off must rest with bank employees — outsourcing the decision itself is structurally problematic.'],
      ['Use only internal staff to maintain consistency, even if it means accepting a longer clearance timeline', 'Internal-only at 180 cases plus ongoing intake will not clear in any reasonable window — and a long clearance period itself creates ongoing aging that compounds the original finding.'],
      ['Hire 15 new permanent investigators on a full-time basis to handle the backlog', 'Permanent hiring for a one-time backlog overshoots the steady-state need and locks in cost beyond the clearance window. The clearance is a surge, not a permanent capacity change — the steady-state capacity question is separate.'],
    ],
    'Backlog resourcing is a hybrid problem: internal staff own the decisions, external contractors expand capacity for the surge, and steady-state hiring is sized to the *post-clearance* normal, not the backlog. Getting the contractor scope right — investigation support, not filing decisions — is the discipline that keeps the structure clean.'),

  q(4420539, 'Career Skills', CHAPTER, 'Quality-control sampling during throughput',
    'As the team clears cases at high throughput, the risk of quality regression is real. What QC sampling plan should run alongside the clearance?',
    'A risk-stratified sample of completed cases (both SAR-filed and no-SAR) reviewed by independent QC staff, with sample size scaled to throughput and findings fed back to investigators in real time so quality issues are corrected mid-clearance rather than discovered at the end',
    [
      ['Wait until the backlog is fully cleared and then sample the completed cases to confirm quality', 'End-of-clearance sampling discovers quality issues after they have already happened and after the cases are filed — by that point, the only remedy is potentially re-filing or supplementing. Real-time sampling catches issues while they are still cheap to fix.'],
      ['Sample only the SAR-filed cases, since those are the ones FinCEN sees', 'SAR-filed and no-SAR decisions both have to be quality-sampled. No-SAR decisions are exactly the place where rushed clearance produces missed SARs, and an audit-day pull will sample both populations.'],
      ['Skip QC sampling during clearance to maximize throughput, then have audit review at the end', 'Skipping QC trades short-term throughput for long-term remediation pain — issues compound through the backlog and surface in audit findings or in the OCC follow-up exam. QC during the run is cheaper than rework after.'],
    ],
    'Quality-control during throughput surge is one of the moments where program maturity is most visible. Real-time sampling, both SAR-filed and no-SAR, with feedback to investigators mid-clearance, is what prevents a backlog finding from becoming a quality finding on top of it. The discipline is the same discipline that runs in steady state, scaled to the throughput.'),

  // -------------------------------------------------------------------------
  // LESSON 5 — Reporting to Regulators (4420540–4420549)
  // Output: internal audit report, board-level escalation, OCC response
  // letter, commitment dates, and the evidence that demonstrates the
  // remediation is sustainable rather than a one-time push.
  // -------------------------------------------------------------------------
  q(4420540, 'Career Skills', CHAPTER, 'Internal audit report structure',
    'Internal Audit is preparing its report on the First Heritage remediation for the audit committee. What structure best serves both internal accountability and the OCC follow-up?',
    'For each MRA: original finding, root cause, remediation actions taken, validation evidence, residual risk assessment, and a forward-looking sustainability statement — structured so that the OCC can map each section to the original exam finding and assess closure independently',
    [
      ['A single narrative summary of remediation activity across all three MRAs', 'Single-narrative reporting makes it hard for the OCC to map progress to each specific finding. The structure should mirror the OCC\'s own finding structure — that is what produces a clean closure assessment.'],
      ['A short executive summary with backup detail available on request', 'Short summaries with detail-on-request work for some audiences but not for a remediation audit. The audit committee and OCC need to see the substance in the primary document; pulling backup adds friction without adding value.'],
      ['A timeline of actions with dates and owners, without analytical framing', 'Activity timelines show what was done but not whether it worked. The audit\'s value-add is the residual-risk assessment and sustainability statement — without those, the report is a project log, not an audit.'],
    ],
    'Internal audit reporting on regulatory remediation is structured to mirror the original finding structure and to support independent closure assessment. The format is finding-by-finding with root cause, actions, validation, residual risk, and sustainability — anything less makes it harder for the OCC to close the MRAs cleanly.'),

  q(4420541, 'Career Skills', CHAPTER, 'Board-level escalation framing',
    'You are preparing the board update on the First Heritage remediation. How should you frame it so the board fulfills its oversight role without getting buried in operational detail?',
    'Lead with the regulatory posture (three MRAs, status of each, OCC interaction quality), then root causes and remediation strategy, then financial and reputational exposure if remediation falters — keep operational metrics in an appendix the directors can drill into if they ask',
    [
      ['Walk the board through each operational metric in detail so they have full visibility', 'Operational-metric overload is a common way to make a board update less effective — directors disengage from the load and miss the strategic signals. Detail belongs in appendix, not body.'],
      ['Keep the update high-level with no specific metrics so the board is not distracted by numbers', 'Detail-free updates fail the board\'s oversight role. Directors need specific metrics to ask informed questions; the discipline is in choosing which metrics, not in suppressing all of them.'],
      ['Have the CCO present without compliance-team support, since the CCO owns the program', 'Single-person presentation on a multi-MRA remediation under regulatory pressure increases the risk of follow-up questions going unanswered. Team backup is appropriate at a board update of this scope.'],
    ],
    'Board updates on regulatory remediation are structured for governance, not for operations. The board\'s job is to confirm the program is adequate, the strategy is sound, and the exposure is understood — operational metrics support those conversations but should not displace them.'),

  q(4420542, 'Career Skills', CHAPTER, 'OCC response letter tone',
    'You draft First Heritage\'s response letter to the OCC for the three MRAs. The CCO asks about tone — defensive, technical, contrite, or matter-of-fact. What is the right tone and why?',
    'Matter-of-fact and evidence-led — acknowledge each finding, present root cause without minimization, lay out the remediation plan with specific milestones and owners, and commit to evidence-based closure; the OCC reads tone as a proxy for program seriousness',
    [
      ['Defensive — push back on the findings the bank believes are overreach and accept only those it agrees with', 'Defensive posture in an MRA response letter is one of the surest ways to escalate. The OCC reads pushback as either denial or disagreement with the supervisory framework — neither helps. Pushback, where warranted, happens in conversation, not in writing.'],
      ['Contrite — emphasize regret and commitment to do better, without dwelling on specifics', 'Contrition without substance reads as performance, not engagement. The OCC wants to see what the bank actually plans to do, with milestones and evidence — apology language without those is unhelpful.'],
      ['Highly technical — pack the letter with detail to demonstrate the bank\'s expertise', 'Excessive technical density obscures the response\'s readability and can come across as defensive complexity. The letter has to be specific but readable — buried substance is not the same as transparent substance.'],
    ],
    'OCC response letters are matter-of-fact and evidence-led. The tone is part of the substance: an honest, specific, milestone-bound letter signals a program that takes the findings seriously. Defensive, contrite-without-substance, and over-technical tones each communicate something the bank does not want communicated.'),

  q(4420543, 'Career Skills', CHAPTER, 'Commitment dates and credibility',
    'The OCC response requires commitment dates for remediation completion. What is the right discipline on setting them — and what is the cost of slipping?',
    'Set commitment dates the bank can credibly meet with confidence intervals, with milestones at each quarter so progress can be measured and any slippage caught early; missed commitment dates compound supervisory concern much more than aggressive initial dates ever buy, because credibility is itself a regulatory currency',
    [
      ['Set aggressive dates to signal urgency, accepting some slippage as inevitable', 'Aggressive-then-slip is one of the worst patterns in regulatory remediation. The OCC compares stated commitments to delivery — slipping signals either inability to plan or willingness to commit to things the bank cannot deliver. Both readings hurt.'],
      ['Set conservative dates to ensure delivery, even if they extend the remediation timeline materially', 'Excessively conservative dates can read as lack of urgency and may themselves invite supervisory pressure to accelerate. The right framing is credible — neither aggressive nor padded — and grounded in actual capacity.'],
      ['Decline to commit to specific dates and instead use ranges with flexibility for execution', 'Declining to commit to dates is rarely an option in a response letter — the OCC expects specific dates and reads ranges as either capacity unease or unwillingness to be held accountable. The discipline is to commit credibly, not to avoid commitment.'],
    ],
    'Commitment dates are a credibility currency that compounds across exams. A bank that meets its commitments earns supervisory benefit of the doubt; a bank that misses them loses it for years. Setting dates conservatively enough to be met and aggressively enough to show seriousness is the discipline — and choosing that point is one of the harder judgement calls in a remediation.'),

  q(4420544, 'Career Skills', CHAPTER, 'Root cause vs symptom in response letter',
    'In the First Heritage response letter, for each MRA you have to write a root-cause analysis. The instinct is to describe what the bank will do — the actions, not the cause. What is the right approach?',
    'Lead each section with the root cause — the underlying program weakness that produced the finding — and then derive the remediation actions from it; the OCC reads root-cause analysis as evidence the bank understands why the issue occurred, not just how to clean it up',
    [
      ['Describe the symptoms (high false-positive rate, BO gap, SAR aging) and then list the remediation actions, since those are what the OCC is checking', 'Symptom-then-action reading is exactly what gets remediation plans rejected as superficial. Without root-cause analysis, the remediation actions are point fixes that may not address the underlying program weakness — and the OCC notices.'],
      ['Skip root-cause framing because the OCC already knows the root cause from the exam', 'The exam findings describe what was observed, not necessarily the bank\'s articulation of why. The bank\'s own root-cause analysis is what demonstrates internalization and program understanding — skipping it leaves the impression that the bank does not see beyond the symptom.'],
      ['Conflate root cause with remediation steps, since they are tightly linked', 'Root cause and remediation are linked but distinct. Conflating them produces a section that lists actions without explaining why those actions are the right ones — exactly the gap a careful examiner probes.'],
    ],
    'Root-cause analysis in a regulatory response is the bridge between finding and remediation. Leading with the cause, then deriving the actions from it, is the structure that signals program maturity. Skipping or conflating root cause is one of the most common reasons response letters get returned with follow-up questions.'),

  q(4420545, 'Career Skills', CHAPTER, 'Self-identifying additional issues',
    'During the remediation, the team identifies a fourth issue the OCC did not find — a gap in OFAC sanctions screening for the correspondent banking corridor. The question is whether to disclose it to the OCC or fix it quietly. What is the right call?',
    'Self-identify and disclose proactively, with remediation already underway — self-disclosure of issues found during program review demonstrates a maturing compliance culture and is treated favorably in supervisory assessments; concealing it and having the OCC find it later is materially worse for the supervisory relationship',
    [
      ['Fix it quietly without disclosing, since the OCC did not flag it and disclosure invites scrutiny', 'Hidden remediation is risky on multiple dimensions — the OCC may find it later (which is worse), audit will likely surface it, and the long-term supervisory cost of being seen as non-transparent compounds across exams. Quiet fixes are rarely as quiet as intended.'],
      ['Wait until the current remediation is closed before disclosing, so the OCC does not pile on findings', 'Sequencing disclosure to manage optics is exactly the kind of move that erodes supervisory trust. The OCC values timely transparency; delayed disclosure with strategic intent is read as the wrong direction of culture.'],
      ['Disclose only if the issue is material enough to risk an MRA on its own', 'Self-disclosure is not about materiality threshold — it is about transparency and culture. A pattern of disclosing only material issues signals materiality-judgement-as-shield, which examiners notice.'],
    ],
    'Self-disclosure of issues found during remediation is one of the strongest signals of a maturing program. Supervisory assessments specifically reward proactive transparency, and concealment carries asymmetric downside — if discovered, it materially worsens the relationship for years. The principle is durable: surface it, own it, fix it.'),

  q(4420546, 'Career Skills', CHAPTER, 'Quarterly progress reporting cadence',
    'The OCC asks for quarterly progress reports on the First Heritage remediation. What should each report contain to actually be useful?',
    'Status against each milestone with delta vs prior quarter; key metrics (TM productive-alert rate, BO refresh completion, SAR aging) trended over time; any newly identified issues; and a brief look-ahead with named milestones for the coming quarter',
    [
      ['A narrative summary of activity during the quarter, organized chronologically', 'Chronological narratives obscure milestone status and make it hard to see whether the program is on track. The OCC needs status-against-plan, not a diary of activity.'],
      ['Final metrics at the end of the quarter only, without prior-quarter comparison', 'Single-point metrics lose the trend information that tells the OCC whether the program is improving, holding, or regressing. Trended metrics are what make progress assessment possible.'],
      ['Only the metrics that show improvement, with backwards-trending metrics handled separately', 'Selective metric reporting telegraphs that the bank is curating the picture — the OCC reads this as evasion. Full metric reporting, including the metrics that have not improved or have regressed, is what builds the credibility the bank needs.'],
    ],
    'Quarterly progress reports are status-against-milestone documents with trended metrics, full honesty on what has not moved, and look-ahead commitments. The honest report builds credibility quarter after quarter; the curated report erodes it the first time the regulator notices what is missing.'),

  q(4420547, 'Career Skills', CHAPTER, 'Independent validation of remediation',
    'The First Heritage remediation will be subject to independent validation before the OCC closes the MRAs. Who can perform this and what does it cover?',
    'A qualified party that did not own or perform the remediation work — typically internal audit (third line) or an external firm — performs targeted testing on the remediation outcomes, including transaction-level re-performance, sample-based file review, and assessment of the sustainability of the new processes',
    [
      ['The compliance team can validate its own remediation since they did the work', 'Self-validation is exactly the independence failure that produces the recurring-finding pattern. The team that performed the work cannot validate it — this is a foundational rule, not a flexible one.'],
      ['The OCC itself will validate during the next exam, so internal validation is not needed before then', 'OCC validation at the next exam is on top of, not instead of, the bank\'s own independent validation. The bank validating its own work first is part of demonstrating that the program is sustainable — and the OCC expects to see that validation work as part of its own assessment.'],
      ['A senior compliance officer who was not involved day-to-day can validate informally', 'Informal validation by a related party does not meet the independence standard. The validation has to be structured, documented, and performed by a function with independence from the remediation execution — not a more senior version of the same team.'],
    ],
    'Independent validation is the third-line confirmation that the remediation actually closes the gap. The validation has to be performed by a function structurally independent of execution, with documented testing methodology, sampling, and conclusions. Anything less leaves the closure assessment vulnerable when the OCC tests it.'),

  q(4420548, 'Career Skills', CHAPTER, 'Coordinating with FinCEN findings',
    'During the remediation, FinCEN sends First Heritage a request for additional information on several historical SAR filings — separate from the OCC MRA. How should you coordinate the two regulatory streams?',
    'Treat them as related but distinct — the OCC focuses on safety-and-soundness program adequacy, FinCEN focuses on the SAR record itself — and ensure that the same underlying facts and remediation actions are presented consistently to both, with coordination at the CCO level to prevent conflicting narratives',
    [
      ['Handle each regulator separately so they do not become aware of each other\'s involvement', 'Both agencies are aware of the bank\'s status with the other — there is established information-sharing between regulators. Acting as if they are blind to each other introduces inconsistency risk without any actual confidentiality benefit.'],
      ['Combine responses and send the same letter to both agencies', 'Combined responses lose the substantive differences in what each agency is asking. OCC and FinCEN have different jurisdictions and different questions; the *facts* should be consistent, but the responses should address the specific questions each agency raised.'],
      ['Wait for the OCC remediation to be closed before responding to FinCEN', 'Deferring a FinCEN request to clear an OCC remediation is not an option — FinCEN has its own timeline and the bank cannot prioritize one regulator over another. The discipline is to handle both in parallel with consistent facts.'],
    ],
    'Multi-regulator engagement requires consistent facts and tailored responses. The CCO\'s job is to ensure that any data point quoted to FinCEN matches what was quoted to the OCC, and that the bank\'s narrative across both is internally coherent. Coordination at this level is one of the small differentiators between a mature compliance function and a reactive one.'),

  q(4420549, 'Career Skills', CHAPTER, 'Closing the MRA — sustainability',
    'The OCC will close First Heritage\'s MRAs only when satisfied that the remediation is sustainable, not just complete. What evidence demonstrates sustainability rather than a one-time fix?',
    'Evidence the new processes have operated through multiple cycles (refresh rounds, tuning re-tests, SAR aging metrics) with stable outcomes; metrics trended in management reporting; independent validation showing the gap has not recurred; and a culture-level change visible in training, governance, and self-identification of new issues',
    [
      ['The original gaps have been closed and the immediate fixes are in place', 'Closing the immediate gaps is necessary but not sufficient. Sustainability is the question of whether the gaps would recur if the OCC stopped watching — and that requires evidence of process operation over time, not just a clean point-in-time state.'],
      ['Headcount has been added in the relevant compliance functions to handle the workload', 'Headcount is a capacity input, not a sustainability output. The question is whether the program will continue to operate correctly with the staff and processes in place — which requires evidence over time, not just a different org chart.'],
      ['New policies and procedures have been written and approved', 'Policy approval is paperwork, not sustainability. The OCC has seen many banks with excellent policies and failing programs. The evidence has to be operational — processes running through cycles and producing stable outcomes — not document-level.'],
    ],
    'Closing an MRA on sustainability grounds is a higher bar than closing it on completion grounds. The OCC is asking whether the gap will recur without supervisory attention — and the only convincing answer is operational evidence over time, validated independently, embedded in management metrics, and visible in the bank\'s culture of self-identification. This is the standard the bank should aim for, not just because the OCC requires it, but because it is what actually makes the program robust.'),
]

import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// BC CHAPTER 4 — Transaction Monitoring and Alerts
// ----------------------------------------------------------------------------
// 44 additional questions (IDs 4420300–4420343) deepening the existing
// 6-question Chapter 4 set in careerAgentGeneratedRoadmapFinance.ts
// (4107414 round-dollar pattern, 4107415 dormant account wakes, 4107425
// crypto exchange flow, 4107884 layering pattern, 4107885 cash-intensive
// mismatch, 4107895 rapid pass-through).
//
// The original 6 cover canonical red flags. This bank goes operational:
// rule-based monitoring (structuring/velocity/threshold/peer-group),
// ML/AI-based monitoring (anomaly detection, supervised vs unsupervised,
// SR 11-7 model risk management), false positive economics (90%+ rates,
// tuning, productivity), alert disposition (L1/L2, case management, SAR
// thresholds), structuring tradecraft (smurfing, micro-structuring,
// multi-account, multi-branch), trade-based money laundering signals
// (over-invoicing, double-invoicing, phantom shipments), wire fraud
// patterns (ATO, BEC, urgency tells, high-risk corridors), crypto/VASP
// touchpoints (on/off-ramps, FATF travel rule, mixers), and SAR
// narrative writing.
//
// US context throughout: 31 USC 5324, 31 CFR 1010 (BSA), FinCEN SAR
// filing (Form 111), CTR thresholds at $10K, FATF guidance as it lands
// on US banks, OCC/FRB/FDIC examination expectations, SR 11-7 for model
// governance. No UK/EU specifics.
//
// Voice anchors on jargonBusters.ts and the existing 4107414+ canonical
// set. Each wrong answer is a bespoke whyWrong reflecting a real
// L1/L2 analyst failure mode — never strawmen or generic filler.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe BC Ch4 canonical bank'

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

const CHAPTER = 'Transaction Monitoring and Alerts'

// Difficulty distribution target: 13 at 3, 22 at 4, 9 at 5 (44 total).
export const BC_CH4_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Block A — Rule-based monitoring (6 Qs, 4420300–4420305)
  4420300: 3, // Structuring rule: multiple sub-$10K deposits
  4420301: 4, // Velocity rule: rapid in/out within 24 hours
  4420302: 3, // Threshold-based rule design tradeoffs
  4420303: 4, // Peer group comparison logic
  4420304: 4, // Why pure threshold rules drown analysts
  4420305: 5, // Structuring rule that aggregates across accounts

  // Block B — ML/AI-based monitoring (5 Qs, 4420306–4420310)
  4420306: 4, // Behavioral baseline model vs static rule
  4420307: 4, // Unsupervised anomaly detection use cases
  4420308: 4, // Supervised models need labeled SARs
  4420309: 5, // SR 11-7 model risk management governance
  4420310: 5, // Drift monitoring for ML AML models

  // Block C — False positive rates (5 Qs, 4420311–4420315)
  4420311: 3, // Typical alert false-positive rate (~95%)
  4420312: 4, // Tuning thresholds: precision vs recall tradeoff
  4420313: 3, // Productivity gain from segmentation
  4420314: 4, // Why "lower the threshold" is the wrong reflex
  4420315: 4, // Above-the-line / below-the-line testing

  // Block D — Alert disposition (6 Qs, 4420316–4420321)
  4420316: 3, // L1 reviewer scope and limits
  4420317: 3, // L2 escalation triggers
  4420318: 4, // Case management consolidation logic
  4420319: 4, // Disposition decision tree (close/escalate/SAR)
  4420320: 4, // SAR threshold: reasonable suspicion standard
  4420321: 5, // Continuing activity SAR cadence (90/120 day)

  // Block E — Structuring variants (5 Qs, 4420322–4420326)
  4420322: 3, // Classic smurfing definition
  4420323: 4, // Micro-structuring under bank internal thresholds
  4420324: 4, // Multi-account structuring at one bank
  4420325: 5, // Multi-branch structuring across geographies
  4420326: 4, // Structuring via mixed instruments (cash + MIs)

  // Block F — Trade-based money laundering (5 Qs, 4420327–4420331)
  4420327: 4, // Over-invoicing signal
  4420328: 4, // Under-invoicing signal
  4420329: 4, // Double-invoicing / multiple invoices same shipment
  4420330: 5, // Phantom shipment red flags
  4420331: 3, // Goods-flow vs payment-flow mismatch

  // Block G — Wire fraud signals (5 Qs, 4420332–4420336)
  4420332: 3, // Account takeover (ATO) behavioral tells
  4420333: 4, // Business email compromise (BEC) pattern
  4420334: 4, // High-risk corridor payments
  4420335: 4, // Urgency / authority pressure as a tell
  4420336: 5, // Recovery and FinCEN Rapid Response

  // Block H — Crypto/VASP touchpoints (4 Qs, 4420337–4420340)
  4420337: 4, // On-ramp / off-ramp FI exposure
  4420338: 4, // FATF Travel Rule applied to VASPs
  4420339: 5, // Mixers and tumblers as SAR indicators
  4420340: 4, // Unhosted wallet exposure assessment

  // Block I — SAR narrative writing (3 Qs, 4420341–4420343)
  4420341: 3, // Five Ws structure of the narrative
  4420342: 4, // Avoiding conclusory language in narratives
  4420343: 4, // Linking continuing activity SARs to prior filings
}

export const bcCh4Questions: Question[] = [
  // -------------------------------------------------------------------------
  // BLOCK A — Rule-based monitoring (4420300–4420305)
  // Classic threshold and pattern rules — the bedrock the rest of the chapter
  // tunes, ML-augments, and dispositions against. Learner has to know what
  // each rule type actually fires on and where each one breaks.
  // -------------------------------------------------------------------------
  q(4420300, 'Career Skills', CHAPTER, 'Structuring rule: multiple sub-$10K',
    'You are scoping a structuring rule for a US retail bank. Cash deposits at $10,000 or above trigger a Currency Transaction Report. Which rule design best detects classic structuring while respecting the BSA framework?',
    'Aggregate same-day cash deposits per customer across all accounts and channels, and alert when the total exceeds $10,000 OR when there are three or more deposits between $9,000 and $9,999 in a rolling 7-day window',
    [
      ['Alert only on individual cash deposits of exactly $9,999 to catch the textbook structurer', 'Structurers vary the amount precisely to avoid an "exactly $9,999" pattern — $8,500 + $9,200 + $7,800 is the more common shape. An exact-amount rule catches almost no real structuring.'],
      ['Alert on any single cash deposit at or above $9,000', 'A simple single-deposit threshold ignores the entire point of structuring, which is the *pattern across multiple deposits*. It also produces a huge volume of false positives from legitimate near-threshold deposits.'],
      ['Wait until cumulative deposits exceed $30,000 in a month before alerting', 'A $30,000 monthly threshold misses the BSA reporting trigger entirely and gives the structurer three weeks of head start. The aggregation window has to be tight enough to catch the pattern that 31 USC 5324 prohibits.'],
    ],
    'A working structuring rule aggregates across accounts, channels, and a short rolling window — the pattern is the signal, not the individual deposit. The $10,000 CTR threshold under 31 CFR 1010.311 is the anchor; the rule\'s job is to surface deliberate avoidance of it under 31 USC 5324.'),

  q(4420301, 'Career Skills', CHAPTER, 'Velocity rule: rapid in/out',
    'A velocity rule is meant to detect funds that arrive and leave the account quickly with little economic purpose. Which definition will hold up in an OCC exam and not drown the L1 team?',
    'Inbound credits of $10K+ that are withdrawn or wired out within 24 hours, where outbound counterparty differs from inbound source AND the account\'s average retained balance falls below 10% of the inbound amount',
    [
      ['Any account where funds in and funds out within a day exceed $5,000', 'A flat $5,000 in-and-out rule fires on any active checking account that gets paid Friday and pays bills Monday. The signal has to combine velocity *with* counterparty mismatch and retained-balance collapse, or it just flags normal life.'],
      ['Accounts whose monthly turnover exceeds 10x the average daily balance', 'Monthly turnover ratios are useful as a profiling input but are too slow and too coarse for a velocity rule. The pass-through pattern lives at the 24-72 hour timescale, and a monthly aggregate misses it entirely.'],
      ['Any outbound wire that occurs on the same day as an inbound wire', 'Same-day in-and-out is normal treasury behavior for businesses that net cash and sweep. Without the retained-balance and counterparty conditions, this rule generates so many alerts that L1 throughput collapses.'],
    ],
    'Pass-through velocity is defined by three things together: speed, counterparty mismatch, and low retained balance. Any one of them alone is a normal banking pattern; combining them is what isolates suspected layering activity for review.'),

  q(4420302, 'Career Skills', CHAPTER, 'Threshold rule design tradeoffs',
    'A wire-aggregation rule currently alerts on cumulative outbound wires above $50,000 in 30 days. Compliance wants higher productivity. What is the right way to think about adjusting the threshold?',
    'Run above-the-line / below-the-line testing on a representative sample at multiple candidate thresholds, measure SAR yield at each, and pick the threshold where SAR yield does not materially drop',
    [
      ['Raise the threshold to $100,000 because the team is overwhelmed and most $50,000 alerts close', 'Raising a threshold without measuring SAR yield in the band you are about to silence is exactly what the OCC and FinCEN flag in MRAs. The bank has to prove the segment between $50K and $100K had no productive alerts before excluding it.'],
      ['Lower the threshold to $25,000 to be safer and catch more activity', 'Going lower without analysis multiplies alert volume, exhausts the team, and rarely changes SAR output — most of the new alerts are noise. "Safer" sounds defensible but is operationally counterproductive and not what examiners want to see.'],
      ['Leave it at $50,000 because the original threshold was approved by model governance', 'Original approval does not freeze the threshold forever — periodic tuning is itself a model-governance expectation. The question is how to retune, not whether to.'],
    ],
    'Threshold tuning is an evidence-based exercise: pick the threshold that preserves SAR yield with the lowest false-positive cost, document the testing, and have model risk management sign off. Adjusting on gut feel is the documented failure mode regulators write up.'),

  q(4420303, 'Career Skills', CHAPTER, 'Peer group comparison logic',
    'A peer-group rule compares each customer\'s monthly activity to peers with similar profile attributes. Which segmentation approach gives the most useful peer cohorts for monitoring?',
    'Segment by NAICS industry code, revenue band, geography, and product mix — so a $5M revenue Texas convenience store is compared with other $5M Texas convenience stores, not with a Manhattan law firm',
    [
      ['Use one peer group per account type (checking, savings, money market)', 'Account type alone is far too coarse. A $50M manufacturer and a $200K sole proprietor both hold business checking and should never sit in the same peer cohort.'],
      ['Compare each customer only to its own historical baseline, not to peers', 'Self-baselines are useful but miss the case where the entire baseline is anomalous — a shell company has a stable "baseline" of suspicious activity. Peer comparison catches the customer who never looked normal to begin with.'],
      ['Use the bank\'s overall average activity as the comparison point', 'A whole-bank average dilutes everything — a Park Avenue private banking customer drags up the average and makes the convenience store look quiet, even when the store\'s cash flow is wildly off-pattern.'],
    ],
    'Peer-group monitoring is only as good as the cohort definition. Industry, revenue, geography, and product mix are the four cuts that produce cohorts an examiner will accept as a defensible "expected behavior" reference.'),

  q(4420304, 'Career Skills', CHAPTER, 'Why pure threshold rules drown analysts',
    'Pure threshold-based rules tend to produce 95%+ false positive rates. Why is the response not "just keep adding analysts"?',
    'False positives have a real opportunity cost — every closed-as-false alert is time an L2 reviewer did not spend on the truly suspicious one, so productivity gains must come from tuning, segmentation, and ML augmentation rather than headcount',
    [
      ['False positive rates do not really matter as long as every alert is reviewed within SLA', 'False positives matter directly to SAR quality. When 95% of alerts are noise, analyst fatigue degrades the review of the 5% that matter — this is the documented "alert fatigue" effect FinCEN has called out.'],
      ['Adding analysts is fine because regulators reward visible compliance investment', 'Regulators reward *effective* compliance, not headcount. An exam that finds 95% false-positive rates with no tuning history will produce a finding regardless of how many analysts the bank hired.'],
      ['False positive rates of 95% are actually a good sign because they show the model is sensitive', 'Sensitivity without precision is not a virtue — it is an under-tuned model. A 95% FP rate means precision is 5%, which is exactly the metric examiners ask about when productivity drops.'],
    ],
    'False positives are a cost, not a neutral byproduct. The economic case for ML augmentation, segmentation, and threshold tuning is built on this — every wasted review hour is a real risk to SAR quality on the genuine positives buried in the alert queue.'),

  q(4420305, 'Career Skills', CHAPTER, 'Cross-account structuring rule',
    'A small business deposits $7,500 cash into its operating account on Monday, $6,800 into a personal account of the owner on Tuesday, and $8,200 into a second personal account on Wednesday. What is the rule design implication?',
    'Aggregation has to traverse related-party and beneficial-owner relationships, not just account numbers — three accounts under the same beneficial owner depositing aggregate $22,500 in 72 hours is the exact pattern 31 USC 5324 was written for',
    [
      ['No alert needed because no single account crossed $10,000 in a day', 'Per-account daily aggregation is precisely how naive structuring rules miss real cases. The BSA aggregation requirement looks at the *person*, not the account — and FinCEN guidance is unambiguous about this.'],
      ['Alert only the operating account because it is the business and personal accounts are unrelated', 'When the bank knows the same individual is the beneficial owner of multiple accounts, treating them as unrelated is a customer-identification failure on top of the monitoring miss. CDD-required entity linkage is what powers cross-account aggregation.'],
      ['Wait until a single account itself exceeds $10,000 in a 7-day window, then alert', 'Single-account-only aggregation lets a structurer who knows the rule defeat it by opening two accounts. The whole point of a structuring rule is to follow the person, not the wrapper.'],
    ],
    'Effective structuring detection follows the beneficial owner across accounts, instruments, branches, and time. The CDD rule under 31 CFR 1010.230 exists in part so the bank has the linkages needed to aggregate this way — the rule then has to actually use them.'),

  // -------------------------------------------------------------------------
  // BLOCK B — ML/AI-based monitoring (4420306–4420310)
  // Behavioral baselines, anomaly detection, supervised models, and the
  // SR 11-7 governance overlay that determines whether the model is
  // operating safely or quietly drifting.
  // -------------------------------------------------------------------------
  q(4420306, 'Career Skills', CHAPTER, 'Behavioral baseline vs static rule',
    'Your bank is evaluating a behavioral-baseline model that learns each customer\'s normal pattern and alerts on deviation. How is this fundamentally different from the static velocity rule that fires at "$10K in/$10K out within 24 hours"?',
    'The baseline model alerts on deviation from *that customer\'s own* historical pattern, so a payroll-day spike at a small business is normal while the same spike at a dormant retiree account is anomalous — the threshold is per-customer, not bank-wide',
    [
      ['The baseline model uses neural networks and the static rule uses arithmetic, which is the main difference', 'The technology stack is the least interesting difference. The actual contrast is what the threshold is *relative to* — per-customer dynamic versus bank-wide static — and that is what regulators want to understand.'],
      ['The baseline model produces fewer alerts overall, so it is strictly better', 'Volume reduction is not the test. A well-tuned baseline model produces *more relevant* alerts; if it also produces fewer, that is a happy byproduct, not the value proposition.'],
      ['The baseline model replaces SR 11-7 governance because it is self-tuning', 'Self-tuning models attract *more* governance under SR 11-7, not less. The bank still has to validate the model, monitor drift, and document the training data — being "AI" does not exempt it.'],
    ],
    'Behavioral baselines work because expected activity is customer-specific. The static rule treats every account identically; the model treats each account against its own history. Both have a role, but the baseline model is what catches the customer whose statics never fire because their normal already looks high-velocity.'),

  q(4420307, 'Career Skills', CHAPTER, 'Unsupervised anomaly detection',
    'When is unsupervised anomaly detection (clustering, isolation forests, autoencoders) the right tool versus a supervised classifier?',
    'When labeled SAR outcomes are scarce or biased toward what current rules already catch — unsupervised methods can surface novel patterns the rule book has not yet codified, which is exactly the typology-emergence problem',
    [
      ['Unsupervised methods are always preferred because they avoid the labeling cost', 'Unsupervised methods produce clusters and outliers but do not say which clusters are *suspicious* — that judgment still requires investigator review. They are not free; they shift the cost from labeling to triage.'],
      ['Supervised classifiers are always preferred because they have measurable performance', 'Measurable performance against a label set is only as useful as the label set itself. If the labels reflect only rule-driven SARs, the classifier learns to rediscover what rules already catch — and stays blind to new typologies.'],
      ['Unsupervised methods are only useful for fraud, not for AML monitoring', 'Anomaly detection is widely used in both fraud and AML. The two share the same statistical problem: rare, evolving, adversarial patterns where labels lag the behavior.'],
    ],
    'Unsupervised methods are the right tool when the typology is changing faster than the SAR label set can keep up. They are weakest when you already have rich labels and a stable phenomenon — that is where supervised models earn their keep.'),

  q(4420308, 'Career Skills', CHAPTER, 'Supervised models need labels',
    'A vendor pitches a supervised classifier trained to predict SAR-worthiness. Your bank has filed 1,200 SARs in three years. What is the most important diligence question?',
    'Where do the training labels come from, what counts as a positive (filed SAR vs sustained SAR vs law-enforcement feedback), and how is class imbalance handled given fewer than 0.1% of alerts result in SARs',
    [
      ['What neural network architecture does the model use', 'Architecture is downstream of the data question. A state-of-the-art model trained on garbage labels is a garbage model — examiners will ask about the label provenance long before they ask about the layers.'],
      ['How fast does the model score new transactions in production', 'Latency is an operational concern but does not address whether the model is detecting the right thing. Speed without accuracy just makes wrong answers faster.'],
      ['How many features does the model use as inputs', 'Feature count is a vanity metric. The right question is whether the features are causally related to suspicious activity, not how many of them there are.'],
    ],
    'Supervised AML models live or die on label quality. The bank has to know what "positive" means, how leakage is prevented, and how the model handles extreme class imbalance — without those answers, the model is unscorable and unauditable.'),

  q(4420309, 'Career Skills', CHAPTER, 'SR 11-7 governance for AML models',
    'Federal Reserve SR 11-7 governs model risk management. Which control is most load-bearing when applying SR 11-7 to a production AML monitoring model?',
    'Independent model validation by a function separate from model development — covering conceptual soundness, outcomes analysis (including ongoing performance), and effective challenge before production and at least annually thereafter',
    [
      ['The developer signing off that the model performed well in backtesting', 'Developer self-certification is exactly what SR 11-7 was written to prevent. The guidance is explicit about independence — the validator cannot be the builder, or the bank has no real second line.'],
      ['Audit reviewing the model code line-by-line for bugs', 'Internal audit is the third line and reviews the *governance process*, not the model code. Confusing audit\'s role with validation\'s role is a common SR 11-7 finding.'],
      ['Documenting the model in a model inventory and tagging it as in-scope', 'Inventory and scoping are necessary but not load-bearing — they precede validation. A model can be perfectly inventoried and still be invalid; the validation is what makes it production-safe.'],
    ],
    'SR 11-7 is built on three pillars: development with documentation, independent validation, and ongoing monitoring. For AML models specifically, validation has to cover data lineage, threshold testing, and outcomes analysis tied to SAR yield — and it has to be done by someone who did not build the model.'),

  q(4420310, 'Career Skills', CHAPTER, 'Drift monitoring for ML AML models',
    'An ML transaction-monitoring model was validated 14 months ago and has been in production since. Alert volumes are stable, but L2 escalation rates have dropped from 8% to 2%. What is the correct read?',
    'Stable volume with collapsing escalation rate is a classic model-drift signature — the model is still firing, but on a population that increasingly does not warrant L2 review, suggesting the underlying behavior or population has shifted since training',
    [
      ['Good news — the model is producing cleaner alerts and the team can move faster', 'A 4x drop in escalation rate without a documented model change is not "cleaner alerts" — it is a red flag that the model\'s relevance has decayed. Escalation rate dropping in isolation almost always means the model is firing on the wrong population.'],
      ['Neutral — escalation rates fluctuate and 14 months is not yet drift territory', '14 months in production without revalidation is exactly when ongoing monitoring should be catching drift, and a 4x change in escalation rate is well past the threshold any reasonable monitoring dashboard would flag.'],
      ['Bad — the L2 team has gotten lazy and needs retraining on disposition standards', 'Blaming the L2 team for a statistical signal in the alert population conflates model performance with reviewer behavior. The right first move is to look at the alerts themselves, not the people closing them.'],
    ],
    'SR 11-7 ongoing monitoring exists to catch exactly this. Alert volume, escalation rate, SAR yield, and population characteristics all need to be tracked over time — divergence between them is the drift signal that triggers revalidation or retraining.'),

  // -------------------------------------------------------------------------
  // BLOCK C — False positive rates (4420311–4420315)
  // The economic and operational reality of TM. Why FP rates run 90-99%,
  // how to tune without breaking SAR yield, and what the OCC actually
  // wants to see in tuning documentation.
  // -------------------------------------------------------------------------
  q(4420311, 'Career Skills', CHAPTER, 'Typical FP rate in TM',
    'Industry benchmarks for transaction monitoring report false-positive rates routinely above 90%, often 95-98%. What does this number mean operationally?',
    'Fewer than 1 in 10 alerts results in a SAR — the rest are closed at L1 or L2 after review — which is why throughput, segmentation, and tuning matter as much as detection sensitivity itself',
    [
      ['The models are fundamentally broken and need full replacement', 'A 90%+ FP rate is the operating norm for AML monitoring across the industry, not evidence of broken models. The shape of the problem — rare, adversarial, hidden — produces these rates even with well-tuned systems.'],
      ['90%+ FP means analysts only close 10% of alerts, which is unsustainable', 'Analysts close *all* alerts — closure as no-SAR is still a closure. The 90% number describes the SAR conversion rate, not whether the alerts are being worked.'],
      ['False positives in TM mean the alert never should have fired and the rule was wrong', 'False positive in TM means "alert closed without SAR" — it does not mean the rule was wrong. A rule firing on legitimate activity that needed review is still doing its job; the cost is the review, not a rule defect.'],
    ],
    'FP rates above 90% are the structural reality of AML monitoring. The work is making the 5-10% productive without losing the rare SAR-worthy alerts in the noise — which is why tuning, segmentation, and ML overlays exist as a discipline.'),

  q(4420312, 'Career Skills', CHAPTER, 'Precision vs recall tuning',
    'A model risk validator asks how the bank trades off precision (fraction of alerts that yield SARs) against recall (fraction of true suspicious activity that gets caught). What is the defensible framing?',
    'Recall has near-veto status because missed suspicious activity is a regulatory and law-enforcement harm — the bank tunes precision as high as possible *subject to* not measurably degrading recall, evidenced through below-the-line testing',
    [
      ['Maximize precision because that is what frees up the L2 team to focus on real cases', 'Maximizing precision alone collapses recall and lets real suspicious activity through. The OCC and FinCEN treat missed SARs as a far more serious finding than excess false positives, so the tradeoff is asymmetric.'],
      ['Hold both at 50% to balance the two objectives equally', 'There is no symmetric tradeoff here — the costs of missing a SAR (regulatory risk, law-enforcement harm) are much larger than the costs of closing a no-SAR alert. Equal weighting misunderstands the loss function entirely.'],
      ['Recall is a research metric and does not apply to production AML', 'Recall is exactly the metric examiners ask about under the label "did we miss anything we should have caught?" The below-the-line testing requirement in tuning guidance is a direct measure of recall.'],
    ],
    'AML tuning is precision-maximization subject to a recall constraint. Below-the-line testing — sampling the activity *below* the threshold to confirm it would not have produced SARs — is how the bank evidences that constraint and earns examiner trust in the tuning decision.'),

  q(4420313, 'Career Skills', CHAPTER, 'Productivity via segmentation',
    'Bank A runs one set of TM rules for the whole book. Bank B segments its customers (retail, small business, correspondent, private banking) and runs different rule sets per segment. Why does Bank B typically see higher SAR productivity?',
    'A rule calibrated for a corner-store cash-deposit pattern is the wrong rule for a private-banking client moving family trust funds — segmentation lets each cohort\'s "normal" be modeled honestly, so the alerts that fire are the ones that actually deviate',
    [
      ['Bank B can use fewer analysts because the rules fire less often', 'Segmentation can reduce volume but the productivity gain is from *better* alerts, not fewer ones. Lower volume without better SAR yield is not a productivity win — it just means you turned the rules down.'],
      ['Bank B is exempt from the BSA aggregation requirement because of segmentation', 'Segmentation has nothing to do with BSA aggregation requirements. The aggregation across accounts under 31 CFR 1010 applies regardless of how rules are segmented for alerting.'],
      ['Bank B can ignore high-net-worth clients because they pose less risk', 'Private-banking clients pose specific risks (PEPs, cross-border flows, complex structures) that low-risk-band logic would miss entirely. Segmentation routes them to the *right* rules, not to no rules.'],
    ],
    'Segmentation works because expected activity differs by customer type. A one-size-fits-all rule either over-alerts on private banking or under-alerts on corner stores — segmenting lets each cohort\'s alerts mean something, which is the precondition for productivity.'),

  q(4420314, 'Career Skills', CHAPTER, 'Lower-the-threshold reflex',
    'L1 closes most velocity-rule alerts as no-SAR. A manager suggests "lower the threshold so we catch more." Why is this the wrong first move?',
    'Lowering an already-overshooting threshold multiplies the noise without improving the signal — alert volume rises, FP rate rises with it, and SAR yield is unlikely to change because the missed SARs are not sitting just below the current line',
    [
      ['Lowering thresholds is always wrong because the original threshold was approved', 'Original approval does not freeze thresholds — periodic retuning is required. The objection is to lowering without analysis, not to changing thresholds in principle.'],
      ['The team should raise the threshold instead to reduce volume', 'Raising the threshold to reduce volume without below-the-line testing is the *other* documented failure mode — it can silence productive alerts. Neither direction should move without measurement.'],
      ['The team should switch rule vendors because the existing one is misconfigured', 'Vendor-switching as a first reflex assumes the rule is the problem, when the actual issue is the tuning method. Above-the-line and below-the-line testing on the existing rule is the first step, not procurement.'],
    ],
    'Threshold changes — in either direction — are evidence-based decisions, not gut responses to volume pressure. The OCC tuning expectations are explicit: above-the-line and below-the-line testing, model governance review, and documented rationale before any change goes live.'),

  q(4420315, 'Career Skills', CHAPTER, 'Above-the-line / below-the-line',
    'You are tuning a structuring rule and considering raising the threshold from $9,000 to $9,500. What does "below-the-line testing" mean operationally?',
    'Sample the activity between $9,000 and $9,500 — the band you are about to silence — and review it as if alerts had fired, to confirm the bank would not have filed SARs on any of that activity at the new threshold',
    [
      ['Test the model performance below its production line of business owners', 'This conflates two unrelated terms. Below-the-line is a tuning-test concept about the activity band below the proposed threshold, not an organizational concept about lines of business.'],
      ['Run the model in a non-production environment before deploying it', 'Non-production testing is part of model deployment hygiene, but below-the-line testing specifically refers to investigating the would-have-missed alert band to validate a threshold change.'],
      ['Review historical SARs filed below the threshold to confirm they were valid', 'Reviewing past valid SARs is post-hoc analysis. Below-the-line testing looks forward at the activity the new threshold would have skipped, sampled and reviewed to confirm none of it warranted a SAR.'],
    ],
    'Above-the-line and below-the-line testing is the language regulators use to evaluate tuning quality. Above-the-line confirms what would still fire; below-the-line confirms what would no longer fire is genuinely non-productive. Without both, a threshold change is unsupported.'),

  // -------------------------------------------------------------------------
  // BLOCK D — Alert disposition (4420316–4420321)
  // L1, L2, case management, decision logic, SAR threshold, and continuing
  // activity cadence. The day-to-day mechanics of what happens after an
  // alert fires and where the SAR comes out.
  // -------------------------------------------------------------------------
  q(4420316, 'Career Skills', CHAPTER, 'L1 reviewer scope',
    'An L1 analyst reviews an inbound wire alert. The customer profile, recent activity, and counterparty all look consistent with the stated business. What is the appropriate L1 action?',
    'Close the alert with documented rationale citing the specific facts reviewed — profile fit, counterparty consistency, prior activity comparable — so the file shows the basis for closure',
    [
      ['Escalate to L2 by default since every alert that fires deserves a second look', 'Escalating every alert by default defeats the purpose of L1 and overwhelms L2. L1 exists precisely to close the alerts where the facts are clear; escalation should reflect actual residual concern, not procedural caution.'],
      ['Close the alert with a one-line "no concern" note', 'A one-line note without facts cited produces an indefensible audit trail. Examiners reading closed alerts want to see *what was reviewed* and *why* — "no concern" tells them nothing about whether the review actually happened.'],
      ['Call the customer to confirm the wire purpose before closing', 'Routine customer contact on every cleared alert is not L1\'s mandate and risks tipping off. L1 reaches outside the alert file only when documentary review is genuinely insufficient — not as a default.'],
    ],
    'L1 disposition is fact-based closure or escalation with documented rationale. The closed file has to show that the analyst looked at the relevant evidence and could defend the decision later — closure is a real disposition, not a non-decision.'),

  q(4420317, 'Career Skills', CHAPTER, 'L2 escalation triggers',
    'Which fact pattern most clearly warrants L1-to-L2 escalation rather than L1 closure?',
    'Profile fit is unclear, the counterparty appears in adverse media, OR the activity pattern crosses multiple alerts on the same customer in a short window — any one of which produces residual concern L1 cannot fully resolve',
    [
      ['The alert was generated by an ML model rather than a static rule', 'The originating rule type is irrelevant to escalation logic. An ML alert with clear documentary explanation closes at L1; a rule alert with adverse media warrants L2 — the facts drive the level, not the source.'],
      ['The dollar value of the alert is above $100,000', 'Dollar value alone is not an escalation trigger — large transactions are normal in many segments. Escalation reflects unresolved concern, not transaction size, and treating size as automatic escalation produces noisy L2 queues.'],
      ['The customer is a long-tenured client of the bank', 'Long tenure is an input to risk assessment, not an escalation gate. A long-tenured client whose facts do not fit profile still escalates; a new client whose facts do fit profile may not.'],
    ],
    'Escalation is the analyst\'s honest admission that L1-level facts do not resolve the question. The trigger is residual concern — counterparty risk, profile mismatch, pattern across alerts — not dollar size or alert origin.'),

  q(4420318, 'Career Skills', CHAPTER, 'Case management consolidation',
    'A single customer generates seven alerts in 30 days across structuring, velocity, and high-risk-jurisdiction rules. How should case management handle them?',
    'Consolidate into a single case under the customer, work the alerts together so the analyst can see the pattern across rules, and disposition the case rather than each alert in isolation',
    [
      ['Work each alert separately so each disposition stands on its own', 'Working in isolation hides the pattern across alerts — the whole point of seven alerts on one customer is that the totality is the signal, not any individual alert. Isolation is exactly how investigators miss the layering picture.'],
      ['Auto-close the redundant alerts because the customer is already being reviewed', 'Auto-closure suppresses information without disposition. The right move is to *consolidate* into one case so all evidence is reviewed together, not to silently discard alerts.'],
      ['Refer the customer to relationship management to ask them about the activity', 'Customer contact during an active investigation risks tipping off and is not the case management response. Case management is an internal consolidation discipline; outreach is a separate, controlled decision.'],
    ],
    'Case-level disposition is where pattern recognition happens. Alert-level disposition handles one signal at a time; case-level disposition lets the analyst see the same customer hitting multiple rules and disposition the underlying behavior, which is what FinCEN expects when activity is "related and continuing."'),

  q(4420319, 'Career Skills', CHAPTER, 'Disposition decision tree',
    'An L2 analyst finishes case review. The facts show a clear pattern inconsistent with the stated business and the customer\'s explanation does not reconcile to the transaction data. What is the right disposition?',
    'Refer to the SAR committee or designated decision-maker with a recommendation, including the facts reviewed, the inconsistencies identified, and the analyst\'s reasonable-suspicion assessment',
    [
      ['File the SAR directly because L2 is empowered to disposition cases', 'Most bank SAR programs require a committee or designated officer to make the final SAR filing decision under 31 CFR 1020.320 — L2 prepares the recommendation but does not unilaterally file in most institutional structures.'],
      ['Close the case because the customer has not been criminally charged', 'SAR filing requires reasonable suspicion, not criminal charges or proof. The 31 CFR 1020.320 standard is much lower than the criminal standard, and waiting for charges defeats the BSA\'s purpose.'],
      ['Send the file back to L1 for re-review with the customer explanation in hand', 'Bouncing escalated cases back to L1 muddies accountability and stretches the SAR timeline. L2 either resolves or refers up — not down.'],
    ],
    'Case disposition at L2 ends in one of three places: closure with documented rationale, referral to the SAR decision-maker with recommendation, or referral up for further investigation. The committee or officer makes the final SAR call; L2\'s job is a complete, defensible recommendation.'),

  q(4420320, 'Career Skills', CHAPTER, 'SAR reasonable suspicion standard',
    'Under 31 CFR 1020.320, what is the standard that triggers a SAR filing decision?',
    'The bank knows, suspects, or has reason to suspect that the transaction involves funds from illegal activity, is designed to evade BSA requirements, has no apparent business purpose, or involves the bank being used to facilitate criminal activity — at the $5,000 aggregate transaction threshold',
    [
      ['Proof beyond a reasonable doubt that the customer has committed a crime', 'Criminal proof is the wrong standard entirely. The SAR standard is "reason to suspect," which is intentionally far lower than criminal proof to support law-enforcement detection of unknown crimes.'],
      ['A clear preponderance of evidence that the activity was illegal', 'Civil "preponderance" is also too high. The BSA SAR standard is "reason to suspect" — a deliberately permissive threshold to encourage reporting even when the activity is ambiguous.'],
      ['Any unusual activity, regardless of dollar amount or pattern', 'Unusual activity alone is not a SAR trigger — the bank still needs reasonable suspicion that one of the four prongs (illegal funds, BSA evasion, no business purpose, criminal facilitation) applies, and the $5,000 aggregate threshold applies for institution-level filings.'],
    ],
    'The reasonable-suspicion standard is the heart of SAR filing. It is meant to be a low bar so that law enforcement gets the financial intelligence even on ambiguous cases — and the bank\'s documented reasoning is what shows the standard was applied honestly, not whether the suspicion turned out to be right.'),

  q(4420321, 'Career Skills', CHAPTER, 'Continuing activity SAR cadence',
    'Your bank filed an initial SAR on a customer 75 days ago. The suspicious activity is continuing. What is the operating expectation under FinCEN guidance?',
    'File a continuing activity SAR no later than 120 days after the initial SAR, covering the activity in the intervening period and explicitly referencing the prior filing — and continue this cadence as long as the activity persists',
    [
      ['Wait until the activity stops, then file one comprehensive update', 'Waiting for activity to stop defeats the purpose of continuing SARs — law enforcement needs current intelligence, not retrospective summaries. The 120-day cadence is explicit FinCEN guidance, not optional.'],
      ['File a new initial SAR every 30 days to keep the timeline current', 'A 30-day cadence is more aggressive than FinCEN guidance requires for continuing activity SARs and overburdens the program. The standard cadence is 90/120 days, with the explicit linkage to the prior filing.'],
      ['Close the customer relationship instead of filing additional SARs', 'Customer exit may be a parallel decision but does not replace the continuing SAR obligation. The activity that occurred while the customer was still banked has to be reported, and exit itself can warrant a SAR.'],
    ],
    'Continuing activity SAR cadence is roughly every 90 days of investigation with a 30-day filing window — practically, file no later than 120 days after the prior SAR while the activity continues. The linkage to the prior filing is what lets law enforcement string the story together across filings.'),

  // -------------------------------------------------------------------------
  // BLOCK E — Structuring variants (4420322–4420326)
  // The specific tradecraft taxonomy. Learner has to recognize each
  // variant in transaction data and know how the rules have to be
  // shaped to catch them.
  // -------------------------------------------------------------------------
  q(4420322, 'Career Skills', CHAPTER, 'Classic smurfing',
    'In AML terminology, what specifically distinguishes "smurfing" from other forms of structuring?',
    'Smurfing uses multiple individuals (the "smurfs"), each making sub-threshold deposits on behalf of the same beneficial source — the network of depositors is the defining feature, not just the size of any deposit',
    [
      ['Smurfing is any deposit under $10,000', 'A single sub-threshold deposit is not smurfing — it is just a deposit. Smurfing requires the coordinated multiple-individual structure, which is what 31 USC 5324 specifically targets when third parties are involved.'],
      ['Smurfing is depositing into multiple accounts owned by the same person', 'Multi-account same-person structuring is a real variant, but the smurfing label specifically refers to multiple *people* depositing on behalf of the same source — the distinct typology is the network of agents.'],
      ['Smurfing is using cryptocurrency to break funds into small transfers', 'Crypto-native fragmentation has its own terminology (peel chains, layering). "Smurfing" is a US bank-monitoring term anchored on the network of human agents making structured cash deposits.'],
    ],
    'Smurfing is the network typology of structuring — many individuals, one source. Detection requires looking across depositors to find the linkage, which is why CDD-based beneficial ownership and counterparty patterns matter, not just per-account aggregation.'),

  q(4420323, 'Career Skills', CHAPTER, 'Micro-structuring',
    'You discover a customer making 14 cash deposits in a month, none above $2,500, totaling $28,400. The bank\'s structuring rule alerts at the $10,000 CTR threshold. Why is this still potentially suspicious?',
    'Micro-structuring deliberately stays well below the CTR threshold to evade not just CTR reporting but the bank\'s monitoring rules — the pattern itself (frequency, consistency, deliberate sub-threshold sizing) is the signal, not proximity to $10,000',
    [
      ['It is not suspicious because none of the deposits crossed any reporting threshold', 'BSA evasion under 31 USC 5324 does not require proximity to $10,000 — it requires deliberate avoidance of reporting requirements. Micro-structuring is a textbook example regulators have specifically warned about.'],
      ['It is suspicious only because the total exceeded $10,000', 'Total volume is part of the picture but not the whole story — the *pattern* of consistent small deposits matters even if the total were smaller. Micro-structuring is about the design of the deposit cadence, not just the cumulative number.'],
      ['It is suspicious only if all deposits were made by the same person', 'Single-depositor micro-structuring is one variant; multiple-depositor micro-structuring (a hybrid with smurfing) is another. Either way the pattern of deliberate small deposits is the concern.'],
    ],
    'Micro-structuring is the response of a structurer who knows the bank\'s monitoring threshold and goes well below it. Detection requires pattern-based rules — frequency, regularity, deliberate sub-threshold sizing — not just proximity to the $10,000 CTR line.'),

  q(4420324, 'Career Skills', CHAPTER, 'Multi-account structuring',
    'A customer maintains a personal checking, a personal savings, and two business accounts at your bank. Cash deposits of $4,000-$6,000 hit different accounts on different days. What is the structuring concern?',
    'Multi-account structuring at the same institution — the customer is using account diversity inside one bank to defeat per-account aggregation, which is why BSA aggregation has to traverse all accounts under the same beneficial owner',
    [
      ['No concern because different accounts are different relationships', 'Different account numbers under the same beneficial owner are not different relationships for BSA purposes. The CDD rule under 31 CFR 1010.230 gives the bank exactly the linkages needed to aggregate across accounts.'],
      ['Concern only if all four accounts received deposits on the same day', 'Same-day deposits are one shape; spread-across-days is another. Multi-account structuring frequently spreads activity over time precisely to defeat day-level aggregation — the rule has to cover both.'],
      ['Concern only if the deposits were exactly at $9,999', 'Exact-amount thinking is a recurring trap. Structurers vary sizes deliberately; the pattern across accounts is the signal, not the individual deposit size.'],
    ],
    'Multi-account structuring at one bank is the simplest case for aggregation because the bank already has the relationships and CDD linkages. The hard part is operationalizing the aggregation across accounts, channels, and time — and the rule design has to do that automatically.'),

  q(4420325, 'Career Skills', CHAPTER, 'Multi-branch structuring',
    'A customer makes $8,500 cash deposits at the Houston branch on Monday, Austin on Tuesday, and San Antonio on Wednesday — all into the same account. What is the structuring concern and what is the rule implication?',
    'Multi-branch structuring uses geographic dispersion to avoid attracting attention from any single branch teller — detection requires bank-wide aggregation across branches, which is exactly the case for centralized rather than branch-local monitoring',
    [
      ['No concern because each branch sees only one deposit per week', 'Branch-local visibility is precisely what the structurer is exploiting. The whole architecture of centralized BSA monitoring exists to defeat this — the bank as a whole sees the pattern even when each branch sees only one transaction.'],
      ['Concern only if the same teller processed all three deposits', 'Same-teller is not the standard — geographic structuring is by definition across different branches and tellers. The detection has to live at the institution level, not the teller level.'],
      ['Concern only if the customer crosses state lines between deposits', 'State borders are not the operative concept. Multi-branch structuring within a single state (Texas in the example) is exactly as much a structuring pattern as cross-state versions.'],
    ],
    'Multi-branch structuring exploits the natural blindspot between local-branch observation and institution-level aggregation. The cure is centralized monitoring that aggregates by customer and by beneficial owner across all branches, channels, and locations.'),

  q(4420326, 'Career Skills', CHAPTER, 'Mixed-instrument structuring',
    'A customer deposits $5,000 cash, purchases an $8,000 cashier\'s check with cash, and wires $6,500 inbound — all in a 48-hour window. Why is the mixed-instrument pattern itself a concern?',
    'Mixed-instrument structuring blends cash, monetary instruments, and other payment rails to defeat single-rail aggregation rules and to disguise the source — detection requires rules that aggregate across instrument types, not just within them',
    [
      ['No concern because monetary instrument purchases are not subject to CTR reporting', 'Monetary instrument purchases between $3,000 and $10,000 in cash trigger separate BSA recordkeeping requirements under 31 CFR 1010.415, and mixed cash-plus-instruments activity is a long-flagged FinCEN pattern.'],
      ['Concern only if any individual transaction crossed $10,000', 'The whole logic of the mixed-instrument pattern is that no single transaction crosses any threshold. The signal is the aggregation across instruments, which is exactly the rule shape needed to catch it.'],
      ['Concern only if the wires were international', 'Domestic mixed-instrument patterns are just as much a structuring concern as international ones. Geography is one input to risk; instrument-mix patterns are an independent signal.'],
    ],
    'Mixed-instrument structuring crosses the boundaries that legacy rules respect — cash rules, MI rules, wire rules. Modern monitoring has to aggregate across instruments per customer per window, and FinCEN advisories have repeatedly highlighted MI-plus-cash combinations as the canonical pattern.'),

  // -------------------------------------------------------------------------
  // BLOCK F — Trade-based money laundering (4420327–4420331)
  // TBML is value transfer through trade documentation. Learner has to
  // recognize the invoicing patterns and the goods/payment-flow
  // mismatches that signal it.
  // -------------------------------------------------------------------------
  q(4420327, 'Career Skills', CHAPTER, 'Over-invoicing',
    'A small US importer pays $480,000 for a container shipment that comparable trade data values at roughly $120,000. What TBML pattern does this match?',
    'Over-invoicing — the importer pays more than the goods are worth, transferring the excess value abroad through what looks like a legitimate trade payment; the inflated invoice is the laundering vehicle',
    [
      ['Just bad procurement — the importer paid too much', 'Procurement error is the innocent explanation, and it can be true, but a 4x markdown against comparable trade data is large enough that the bank has to test whether the overpayment is the point. TBML over-invoicing is exactly this shape.'],
      ['Under-invoicing because the goods are worth less than declared', 'Under-invoicing is the *opposite* pattern — the importer pays less than the goods are worth. Both are TBML typologies but they move value in opposite directions, and the question describes over-invoicing.'],
      ['Phantom shipment because the goods may not exist', 'Phantom shipments are a different typology where no goods move at all. Here the question stipulates a container shipment exists; the issue is the price relative to value.'],
    ],
    'Over-invoicing transfers value from importer to exporter using inflated trade documentation. The bank\'s monitoring leverage is comparing invoice prices to publicly available trade data (HS code, route, period) — a large mismatch is the TBML red flag FinCEN and FATF have both highlighted.'),

  q(4420328, 'Career Skills', CHAPTER, 'Under-invoicing',
    'A US exporter ships $750,000 of goods (per trade reference pricing) but invoices the foreign buyer for only $200,000. Why is this a TBML signal?',
    'Under-invoicing lets value flow from the exporter to the buyer abroad — the buyer receives goods worth far more than they paid, which is value transferred from the US side outward, often used to settle prior illicit obligations',
    [
      ['Under-invoicing only matters for tax evasion, not AML', 'Under-invoicing is both a tax issue and a money-laundering issue, and FinCEN/FATF treat it specifically as a TBML typology. The value gap is the laundering signal regardless of whether tax is also implicated.'],
      ['It only matters if the foreign buyer is in a high-risk jurisdiction', 'Jurisdiction is one input to overall risk but does not gate the typology — under-invoicing to a low-risk jurisdiction can still be a TBML pattern, and the bank has to flag the price gap independently.'],
      ['Under-invoicing is the same as over-invoicing for AML purposes', 'They are mirror typologies moving value in opposite directions. The detection technique is similar (compare to reference pricing) but the value flow and underlying use cases differ, and conflating them muddles the analysis.'],
    ],
    'Under-invoicing moves value out of the US side of the trade by undercharging the foreign buyer for goods worth more. Detection mirrors over-invoicing — compare invoiced amounts to reference trade data — but the implication for the bank\'s customer is different and the SAR narrative should reflect that.'),

  q(4420329, 'Career Skills', CHAPTER, 'Double-invoicing',
    'Your bank is asked to settle two separate invoices for what appears to be the same container shipment — same vessel, same bill of lading number, same goods description, but two different counterparties on the receiving side. What TBML pattern is this?',
    'Double-invoicing or multiple invoicing — the same underlying shipment is used to justify two payment flows, doubling the value moved through the trade-finance channel for what is in reality one set of goods',
    [
      ['Legitimate trade financing where two banks each finance part of the shipment', 'Co-financing one shipment is a real practice but follows specific syndication structures and does not produce two complete invoices to different counterparties. The shape described — two full settlements against one bill of lading — is the TBML variant.'],
      ['A clerical error in invoice numbering', 'Clerical-error explanations have to be tested, not assumed. When two invoices reference the same bill of lading with the same goods but different counterparties, the bank cannot close the alert on "probably a typo" without verification.'],
      ['Standard practice for commodities trading', 'Even in commodities, the same physical lot generally maps to one settlement chain. Two complete settlements against one underlying shipment is the multiple-invoicing pattern FATF and FinCEN flag specifically.'],
    ],
    'Double-invoicing moves twice the value through the trade-finance rail using one set of goods as cover. The signal is the duplication on identifying fields (BoL, vessel, goods description) across two payment requests — and the disposition usually requires shipping-document verification, not just bank records.'),

  q(4420330, 'Career Skills', CHAPTER, 'Phantom shipment red flags',
    'A trade-finance application requests a $2M letter of credit referencing a shipment from a Southeast Asian port to a US importer. Which combination of facts most strongly signals a phantom shipment (no actual goods moving)?',
    'Vessel name and IMO number do not appear in public AIS shipping data for the claimed dates, the seller is a recently formed company at a residential address, and the bill of lading is on plain-paper letterhead without a recognized carrier issuer',
    [
      ['The L/C is being requested for the first time by this customer', 'First-time L/C requests are routine for growing importers and not by themselves a phantom-shipment signal. The combination of unverifiable vessel, paper-thin counterparty, and irregular shipping documentation is what raises the typology to phantom shipment.'],
      ['The L/C amount is above $1M', 'Large L/Cs are normal for many trade flows. Dollar value is an input to overall risk but not a phantom-shipment signal — the signal lives in the verifiability of the underlying shipment.'],
      ['The goods are described as "general merchandise" without itemization', 'Vague goods descriptions are a separate red flag worth pursuing, but a phantom shipment specifically requires evidence that the shipment itself did not occur — which is what AIS and shipping-document verification tests.'],
    ],
    'Phantom-shipment detection rests on independent verification of the goods movement itself. The L/C application can be perfectly clean on paper while the underlying shipment does not exist — AIS data, carrier verification, and bill-of-lading authenticity are the controls that catch it, not just transaction-level monitoring.'),

  q(4420331, 'Career Skills', CHAPTER, 'Goods vs payment flow mismatch',
    'A US importer routinely receives shipments from a Chilean exporter but pays a third-party intermediary in the UAE rather than the exporter directly. Why is this a TBML concern?',
    'Goods-flow and payment-flow mismatch — the value is moving in a path that diverges from the trade documentation, which is a classic TBML pattern where the third party is either a layering hop or the actual beneficial party to the laundering arrangement',
    [
      ['Not a concern because the payment is to a legitimate UAE business', 'Legitimacy of the UAE entity is not the gating question — the question is why the payment routes there at all when the goods come from Chile. Without a documented commercial reason, the mismatch itself is the signal.'],
      ['Concern only if the UAE is on a sanctions list', 'Sanctions are a separate control. TBML payment-route mismatches are a concern whether or not sanctions are implicated; the structural mismatch is what the rule has to catch.'],
      ['Concern only if the third party charges a substantial markup', 'Markup size is one piece of the picture but the structural anomaly — payment routing to a non-trading-party jurisdiction — is the typology, regardless of fee size. Even zero-markup intermediaries are a question if there is no commercial reason for them.'],
    ],
    'Trade-based laundering frequently uses payment-flow / goods-flow asymmetry. The bank\'s leverage is asking the question the documentation does not answer: why does the money go where the goods do not come from? Without a documented commercial reason, the mismatch warrants further review.'),

  // -------------------------------------------------------------------------
  // BLOCK G — Wire fraud signals (4420332–4420336)
  // ATO, BEC, urgency tells, corridor risk, and the FinCEN Rapid Response
  // recovery channel. Customer-protection mechanics that overlap with AML.
  // -------------------------------------------------------------------------
  q(4420332, 'Career Skills', CHAPTER, 'Account takeover (ATO) tells',
    'A long-time retail customer logs in from a new device in a new city, immediately changes the contact email, adds an external account, and initiates a wire of 80% of the balance. What is the dominant pattern?',
    'Account takeover — the rapid sequence of credential-based session, profile changes that defeat notifications, beneficiary addition, and large outbound transfer is the textbook ATO chain, regardless of whether each step alone would alert',
    [
      ['Routine customer behavior because each step is individually allowed by the account agreement', 'Permissibility of individual actions is not the standard — the rule has to look at the sequence and the speed. The ATO signal is the *chain* compressed into one session, which is what behavioral models flag even when each step is normally legal.'],
      ['Possible identity theft but not ATO because the customer credentials were correct', 'ATO almost always uses correct credentials — that is what makes it ATO rather than identity theft of a new account. Credential validity does not rule out takeover; it is the precondition for it.'],
      ['Probable BEC because there is an external transfer', 'BEC is a different typology — it targets the customer\'s counterparty rather than the customer\'s account directly. ATO is the customer\'s own account being controlled by a third party, which is what the facts here describe.'],
    ],
    'ATO is recognized by sequence-of-actions in a session, not by any single action. The behavioral chain — new device, profile changes that suppress notifications, beneficiary addition, large outbound — is what monitoring has to detect and intervene on before the wire executes.'),

  q(4420333, 'Career Skills', CHAPTER, 'Business email compromise',
    'A small commercial customer wires $340,000 to a new beneficiary, citing an updated invoice from their long-time supplier. The supplier later confirms they never updated banking instructions. What is this pattern?',
    'Business email compromise — the attacker impersonated the supplier in email correspondence and substituted attacker-controlled wire instructions, so the customer authorized a legitimate-looking payment to the wrong destination',
    [
      ['Account takeover of the customer\'s account', 'In BEC the customer\'s account is not taken over — the customer logs in normally and authorizes the wire. The compromise is in the *email channel* between customer and supplier, which is why detection has to look at the wire instructions themselves, not the login session.'],
      ['Internal fraud by a customer employee', 'Internal fraud is a possible parallel theory but the facts (supplier impersonation, fake updated invoice) match the BEC pattern specifically. The pattern is externally-driven and well-documented by the FBI IC3.'],
      ['Phishing of the customer\'s online banking credentials', 'Credential phishing supports ATO, not BEC. BEC does not need banking credentials — it only needs the customer to authorize a wire they believe is legitimate.'],
    ],
    'BEC routes around bank authentication entirely — the customer authorizes the wire themselves under deception. Detection comes from beneficiary-change patterns, mismatch between historical supplier accounts and the new destination, and corridor risk; not from session monitoring, which sees nothing unusual.'),

  q(4420334, 'Career Skills', CHAPTER, 'High-risk corridor payments',
    'A customer who never previously sent funds outside the US suddenly wires $90,000 to an account in a jurisdiction flagged on the FATF grey list. What is the monitoring implication?',
    'New-corridor activity to a higher-risk jurisdiction is a compound signal — the corridor change itself is one alert vector, the jurisdiction risk is another, and the combination warrants escalation regardless of dollar size',
    [
      ['Concerning only if the jurisdiction is on the OFAC SDN list', 'OFAC sanctions are a hard-stop control, but FATF grey-list jurisdictions are a *risk* signal, not a hard stop. AML monitoring is built around risk-based escalation for grey-list flows, which is its own discipline separate from sanctions.'],
      ['Not concerning because $90,000 is below most international wire thresholds', 'New-corridor activity by a customer with no prior international history is concerning at much lower dollar amounts. The signal is the change in pattern, not the size of the payment.'],
      ['Concerning only if the receiving entity is on a public watchlist', 'Watchlist hits are one control. Corridor-based monitoring catches the case where the receiving entity is clean on every list but the *flow itself* — first-time, sudden, to a higher-risk jurisdiction — is the anomaly.'],
    ],
    'Corridor risk combines geography, customer history, and amount. A new corridor to a FATF grey-list country is one of the highest-yield monitoring signals in retail banking — the pattern change is what makes it more than just a wire to a flagged country.'),

  q(4420335, 'Career Skills', CHAPTER, 'Urgency and authority pressure',
    'During wire-fraud investigations, what role do "urgency" and "authority-pressure" social-engineering tells play in the analyst\'s assessment?',
    'They are behavioral indicators in the originating context, often visible in the customer\'s emails or call notes to the wire team — fraudsters compress decision time and invoke executive authority to defeat the customer\'s second-guess and the bank\'s callback procedures',
    [
      ['Urgency and authority are customer-side issues and not relevant to bank monitoring', 'When the customer\'s context is available — call transcripts, emails attached to wire instructions, branch-staff notes — these tells are exactly what supports the bank\'s decision to delay, callback, or refuse the wire. They are not just customer hygiene; they are signal.'],
      ['They matter only for consumer wires, not commercial', 'Authority-pressure tells are the *defining feature* of commercial BEC — "the CEO needs this wire today" is the textbook social-engineering line in commercial fraud cases. They matter more for commercial than for retail.'],
      ['They are unreliable signals because urgency is also common in legitimate commercial activity', 'Legitimate urgency exists, but the *combination* of urgency plus new beneficiary plus instruction-channel change is the fraud pattern. Used alongside corridor and beneficiary signals, urgency is one of the most actionable behavioral inputs.'],
    ],
    'Wire-fraud social engineering relies on time compression and authority invocation. When the bank has any visibility into the customer\'s decision context — branch staff, callback notes, attached email threads — these tells should weight the disposition toward delay and callback, especially in combination with beneficiary or corridor anomalies.'),

  q(4420336, 'Career Skills', CHAPTER, 'Recovery and FinCEN Rapid Response',
    'A commercial customer reports a $1.2M BEC wire 18 hours after settlement. Beyond filing the SAR, what is the most consequential operational step?',
    'Initiate a request through FinCEN\'s Rapid Response Program (typically via FBI IC3 referral) within the recovery window — funds in domestic and many foreign accounts can be frozen or recalled if the request reaches the beneficiary bank before the funds are moved onward',
    [
      ['Wait for the SAR to be processed before any recovery attempt', 'Recovery and SAR filing are parallel tracks, not sequential. SAR processing takes weeks; recovery windows close in days. Waiting on the SAR is exactly the mistake that loses recoverable funds.'],
      ['Tell the customer they will need to sue the receiving bank to recover funds', 'Civil litigation is months long and rarely the right first response. The Rapid Response and beneficiary-bank-hold mechanisms exist precisely so funds can be frozen before legal process begins.'],
      ['Cancel the wire through the bank\'s internal reversal process', 'Settled wires are not reversible through internal cancellation. Once funds have left the originating bank, recovery requires coordination through FinCEN/FBI channels with the beneficiary bank.'],
    ],
    'BEC recovery is a clock — funds become un-recoverable as they are moved out of the first beneficiary account. FinCEN\'s Rapid Response Program, accessed through the FBI IC3 channel, is the established mechanism for cross-border holds, and the bank\'s operations team should know how to invoke it within hours of the report.'),

  // -------------------------------------------------------------------------
  // BLOCK H — Crypto / VASP touchpoints (4420337–4420340)
  // Where crypto and traditional banking meet. On/off-ramps, the FATF
  // Travel Rule, mixers, and unhosted wallets — all from the perspective
  // of the US bank that touches the flow.
  // -------------------------------------------------------------------------
  q(4420337, 'Career Skills', CHAPTER, 'On-ramp and off-ramp exposure',
    'Your bank does not custody crypto but processes ACH and wires to and from several US-registered crypto exchanges (Coinbase, Kraken, etc.). What is your AML perimeter?',
    'The bank is the fiat on-ramp and off-ramp for customer crypto activity — the FI sees the dollars but not the crypto, so monitoring has to use customer profile, exchange counterparty, frequency, and amount patterns to assess whether the crypto activity fits the customer',
    [
      ['Crypto exchange flows are outside the bank\'s monitoring scope because the bank does not touch crypto', 'On-ramp/off-ramp fiat flows are squarely inside the bank\'s BSA obligations. The bank cannot abdicate monitoring just because the asset on the other side is crypto — the dollars are the bank\'s, and FinCEN guidance is explicit about this.'],
      ['The crypto exchange is itself a regulated MSB so the bank can rely on its monitoring', 'US crypto exchanges are MSBs under FinCEN registration and have their own BSA programs, but reliance on a counterparty\'s program does not discharge the bank\'s own obligation to monitor its customer\'s activity.'],
      ['Only inbound flows from exchanges need monitoring, not outbound', 'Both directions matter — outbound (buy) flows can be money-laundering layering, and inbound (sell) flows can be the cash-out leg of upstream illicit activity. The perimeter covers both.'],
    ],
    'For a US bank without crypto custody, the on-ramp/off-ramp activity *is* the AML perimeter for crypto. The fiat leg is observable; the crypto leg is not. Monitoring leans on customer profile fit, frequency, exchange counterparty risk, and pattern changes — exactly the framework FinCEN expects for these flows.'),

  q(4420338, 'Career Skills', CHAPTER, 'FATF Travel Rule applied to VASPs',
    'The FATF Travel Rule (Recommendation 16, applied to VASPs) requires originator and beneficiary information to travel with virtual asset transfers above a threshold. From the bank\'s perspective, what does this practically mean when banking a US-registered VASP?',
    'The VASP customer must be capable of capturing and transmitting originator/beneficiary information for crypto transfers above $3,000 (the US implementation), and the bank should evaluate the VASP\'s Travel Rule capability as part of CDD/EDD on the VASP itself',
    [
      ['The bank has to collect originator/beneficiary information on the underlying crypto transfers', 'The Travel Rule obligation sits on the VASP, not on the FI banking the VASP. The FI\'s job is to assess whether the VASP can comply, as part of due diligence on the VASP relationship.'],
      ['The Travel Rule does not apply to US VASPs because it is a FATF recommendation', 'FinCEN implements the Travel Rule under 31 CFR 1010.410(f), and applies it to MSBs including registered crypto exchanges. It is binding US law, not just an aspirational FATF recommendation.'],
      ['The Travel Rule only applies to transfers above $10,000', 'The US implementation threshold is $3,000 for the Travel Rule on funds transfers, lower than the CTR threshold. The thresholds serve different purposes and should not be conflated.'],
    ],
    'The Travel Rule sits on the VASP, but the FI evaluates the VASP\'s ability to comply as part of due diligence on the relationship — capacity, technical interoperability with other VASPs, and policies are all in scope. The threshold for funds-transfer recordkeeping under 31 CFR 1010.410(f) is $3,000.'),

  q(4420339, 'Career Skills', CHAPTER, 'Mixers and tumblers',
    'A customer\'s crypto-exchange activity shows repeated deposits into the exchange that originated from a known mixer or tumbler (Tornado Cash, Wasabi mixing service, etc.). What is the monitoring implication?',
    'Mixer-origin funds are a high-risk indicator that FinCEN and OFAC have flagged specifically — exposure to OFAC-sanctioned mixers (Tornado Cash was sanctioned in August 2022) is itself a sanctions issue, and exposure to non-sanctioned mixers is a heightened SAR consideration',
    [
      ['Mixing is a legitimate privacy practice and is not a red flag', 'Privacy use is one rationale, but FinCEN and OFAC have explicitly identified mixer exposure as a heightened risk. Tornado Cash specifically was placed on the SDN list, making any direct exposure a hard-stop sanctions issue.'],
      ['Concerning only if the customer is in a high-risk jurisdiction', 'Mixer exposure is a behavioral red flag regardless of customer jurisdiction. A US customer touching mixer-origin funds raises the same monitoring question as any other.'],
      ['Concerning only if the dollar amounts are large', 'Mixer-origin funds are a structural risk signal that does not have a clean dollar threshold. The pattern itself — funds passing through a service designed to obscure provenance — is the concern.'],
    ],
    'Mixers exist to break the chain of provenance, which is exactly what AML monitoring is designed to follow. OFAC-sanctioned mixers (Tornado Cash) make any exposure a sanctions issue; non-sanctioned mixers are a heightened SAR consideration with explicit FinCEN guidance behind it.'),

  q(4420340, 'Career Skills', CHAPTER, 'Unhosted wallet exposure',
    'Your VASP customer reports that 40% of their withdrawal volume goes to "unhosted wallets" (wallets not held at another VASP). What is the appropriate way to think about this exposure?',
    'Unhosted wallet exposure removes the counterparty-VASP layer where Travel Rule information would normally be exchanged, so the bank\'s due diligence on its VASP customer has to focus on how the VASP risk-rates and monitors those flows themselves — heavy unhosted exposure is not automatically wrong, but it requires more EDD',
    [
      ['Unhosted wallets are illegal and the bank should exit the VASP relationship', 'Self-custody is a legal feature of crypto, not an illegality. The bank\'s question is how the VASP manages the *risk* of unhosted exposure, not whether unhosted activity itself is permitted.'],
      ['Unhosted wallets are equivalent to hosted wallets for monitoring purposes', 'They are explicitly *not* equivalent — the absence of a counterparty VASP means no Travel Rule information exchange and no second-set-of-controls. FinCEN has proposed enhanced recordkeeping for unhosted flows specifically because of this asymmetry.'],
      ['The bank can ignore unhosted activity because the VASP is the regulated party', 'Reliance on the VASP\'s controls is appropriate up to a point, but the bank\'s own due diligence has to test whether those controls are adequate. Heavy unhosted exposure is exactly when EDD has to dig in.'],
    ],
    'Unhosted wallet exposure is the part of the VASP relationship where the chain of custody breaks for monitoring purposes. The bank cannot see the wallets, the VASP can only verify ownership with on-chain signatures or message tests, and the FI\'s diligence has to focus on how the VASP\'s own controls compensate for the missing counterparty layer.'),

  // -------------------------------------------------------------------------
  // BLOCK I — SAR narrative writing (4420341–4420343)
  // The writing discipline that turns the investigation into a usable
  // intelligence product for FinCEN and law enforcement.
  // -------------------------------------------------------------------------
  q(4420341, 'Career Skills', CHAPTER, 'Five Ws structure',
    'FinCEN guidance instructs SAR narratives to cover the "five essential elements." What are they and what does each one anchor?',
    'Who is conducting the activity, What instruments or transactions were involved, When the activity occurred (with dates and frequency), Where it took place (accounts, branches, jurisdictions), and Why the activity is suspicious — the narrative\'s job is to make each of the five immediately answerable',
    [
      ['A summary of the customer\'s relationship with the bank, including tenure and product mix', 'Customer-relationship context belongs inside the narrative as supporting detail, but it is not one of the five essential elements. FinCEN\'s framework is the five Ws — relationship facts inform "Who" but do not replace the structural list.'],
      ['A legal conclusion that the customer has committed money laundering', 'SAR narratives explicitly avoid legal conclusions. The narrative describes facts and articulates suspicion — it does not adjudicate criminal liability, which is the law enforcement role.'],
      ['A list of every transaction the bank reviewed, in chronological order, with all metadata', 'Exhaustive transaction listings belong in the supporting documentation, not the narrative. The narrative summarizes pattern and rationale; raw transaction logs are appendix material.'],
    ],
    'The Five Ws (Who/What/When/Where/Why) are FinCEN\'s structural ask for narratives. A well-built narrative answers each in plain English at the top, with supporting detail beneath — examiners and investigators reading thousands of SARs rely on this consistency to extract intelligence quickly.'),

  q(4420342, 'Career Skills', CHAPTER, 'Avoiding conclusory language',
    'A draft SAR narrative reads: "The customer is clearly laundering money through this account based on the pattern observed." What is wrong with this?',
    'It is conclusory rather than evidentiary — the narrative should state the *facts* (the pattern, the amounts, the inconsistency with profile) and articulate *why* they raise suspicion, leaving the criminal characterization to law enforcement',
    [
      ['The narrative is too short and needs to be expanded', 'Length is not the issue — concise narratives are good. The issue is that the sentence makes a legal conclusion ("is clearly laundering money") rather than describing the facts that produced the suspicion.'],
      ['The narrative needs to identify the specific predicate offense', 'SARs do not require identification of a specific predicate offense. The standard is suspicion that the activity may involve illegal funds or BSA evasion — predicate-offense determination is law enforcement\'s job.'],
      ['The narrative is fine as written and meets FinCEN guidance', 'Conclusory language is exactly what FinCEN guidance warns against. The narrative should describe what was observed and why it raises suspicion, not assert that a crime occurred.'],
    ],
    'SAR narratives describe evidence and suspicion, not adjudicated crime. "The customer made twelve sub-$10K cash deposits across three branches in seven days with no apparent business purpose" is evidentiary; "The customer is laundering money" is conclusory. The former is the right register; the latter creates downstream legal risk and is not what FinCEN wants.'),

  q(4420343, 'Career Skills', CHAPTER, 'Linking continuing activity SARs',
    'You are drafting a continuing activity SAR. The bank filed two prior SARs on this customer covering different transactions in the same broad pattern. How should the new narrative handle the prior filings?',
    'Reference the prior SARs by BSA document control number and filing date, summarize the prior pattern briefly, and focus the new narrative on the activity in the current reporting period — the linkage lets law enforcement string the filings together without duplicating content',
    [
      ['Restate the full content of both prior SARs in the new narrative for completeness', 'Restating prior SARs in full duplicates content investigators already have and obscures the *new* activity that triggered the continuing filing. The standard is reference-and-summarize, not restate.'],
      ['Omit reference to the prior SARs to keep each filing independent', 'Independent filings break the law-enforcement workflow — FinCEN specifically asks for linkage so the continuing pattern is visible across filings. Omitting the reference defeats the purpose of the continuing-activity cadence.'],
      ['Reference the prior SARs only if law enforcement has contacted the bank about them', 'Linkage is required at filing time, not contingent on law-enforcement contact. The bank typically does not know whether law enforcement is pursuing the prior filings, and FinCEN guidance assumes it should not.'],
    ],
    'Continuing-activity SAR narratives reference prior filings (by BSA control number and date), summarize the prior pattern in a sentence or two, and then focus on the new activity. This linkage is what lets FinCEN and law enforcement see the case as continuous — and it is the operational reason for the 90/120-day continuing-SAR cadence in the first place.'),
]

import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const bankComplianceAmlRoadmapS0G23: Question[] = [
  makeSimpleQuestion(
    9520000,
    'Career Skills',
    'Sanctions and Screening',
    "Blocking versus rejecting",
    'An incoming wire screens positive: the originator is a confirmed SDN, so a blockable interest exists. A different outgoing payment is to a non-listed party in a comprehensively sanctioned jurisdiction with no SDN interest in the funds. Your team confirms both hits are real. How should each be handled?',
    'Block (freeze and segregate) the wire with the SDN interest, and reject (decline and return to the originator) the payment that is prohibited but has no blockable interest; report both to OFAC within 10 business days.',
    [
      [
        'Block both transactions, since any confirmed OFAC hit means the funds must be frozen and held.',
        'This conflates the two remedies. Blocking is required only when a blockable interest (an SDN or blocked party) is present; freezing funds with no blockable interest over-seizes property OFAC does not require you to hold.',
        'Match the remedy to the interest: blockable SDN interest means block; prohibited-but-no-blockable-interest means reject and return.',
      ],
      [
        'Reject both transactions by returning the funds to the originators so the bank never holds tainted money.',
        'Returning SDN funds to the originator releases blocked property and is itself a violation. The SDN-interest wire must be frozen, not sent back.',
        'When an SDN has an interest in the funds, you must block and segregate them, not return them to the sender.',
      ],
      [
        'Block the SDN wire but treat the rejected payment as a routine decline that needs no OFAC notification.',
        'Rejections are not silent. Both blocked and rejected transactions carry a mandatory report to OFAC within 10 business days under 31 C.F.R. 501.603 and 501.604.',
        'File the required OFAC report for the rejection too; only the ongoing obligations (segregation, annual report) differ between blocking and rejecting.',
      ],
    ],
    'Lesson: OFAC distinguishes two remedies. You block when a sanctioned party has an interest in the funds or property (freeze, segregate in an interest-bearing account, no debits without OFAC license, and file the annual report each September 30). You reject when the transaction is prohibited but no blocked party has an interest in the funds, returning them to the originator. Both require a report to OFAC within 10 business days; the difference is the continuing custody and reporting obligations that follow a block.',
    'Floe generated',
    true,
    'Ask one question first: does a sanctioned party actually have an interest in these specific funds? That answer, not the mere existence of a hit, decides block versus reject.',
    { challengeRating: 7 },
  ),
  makeSimpleQuestion(
    9520001,
    'Career Skills',
    'Sanctions and Screening',
    "PEP status as a risk factor",
    'Onboarding flags a new customer as a politically exposed person: a deputy minister from another country. The file shows a modest salary-funded checking account, a documented and legitimate source of funds, and low expected volume. A junior analyst wants to decline the relationship outright because the customer is a PEP. What is the defensible approach?',
    'Treat PEP status as one risk factor and apply due diligence proportionate to the actual risk; a PEP is not prohibited, and a low-volume, documented relationship can reasonably be rated lower risk.',
    [
      [
        'Decline the relationship, because banks are prohibited from maintaining accounts for politically exposed persons.',
        'There is no US prohibition on serving PEPs. The 2020 interagency statement makes clear PEP status alone does not make a customer high risk, and reflexively de-risking discards a legitimate, manageable relationship.',
        'Treat PEP as a risk factor to weigh against the facts, not a disqualifier; rate the relationship on its actual profile.',
      ],
      [
        'Open the account but automatically apply the bank\'s maximum enhanced due diligence package required for every PEP.',
        'The CDD Rule creates no special, automatic EDD package unique to PEPs. Forcing maximum diligence onto a low-risk, well-documented PEP wastes resources and treats status as if it were risk.',
        'Calibrate the diligence to the assessed risk of this specific relationship rather than to a one-size-fits-all PEP template.',
      ],
      [
        'Open the account and skip extra review, since the source of funds is already documented as legitimate.',
        'Documented source of funds lowers risk but does not erase the heightened bribery and corruption exposure PEP relationships can carry. PEP status still warrants ongoing attention proportionate to the risk.',
        'Use the legitimate source of funds as a mitigating fact in a risk-based assessment, not as a reason to suspend monitoring entirely.',
      ],
    ],
    'Lesson: A politically exposed person is a person entrusted with a prominent public function, which can elevate bribery and corruption risk. Under the 2020 joint interagency statement, PEP status is a risk factor to be weighed, not a prohibition, and there is no automatic, unique EDD requirement. Diligence must be commensurate with the actual risk: a low-volume PEP account with a documented legitimate source of funds can be reasonably characterized as lower risk, while a complex, high-value relationship warrants more scrutiny.',
    'Floe generated',
    true,
    'Status is not the same as risk. Ask what the facts of this specific relationship actually show before deciding how much diligence the PEP label should buy.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    9520002,
    'Career Skills',
    'Transaction Monitoring and Alerts',
    "Tuning versus suppressing a scenario",
    'A structuring scenario fires hundreds of alerts a month and your team clears most as false positives, but a recent QA sample found two of the cleared alerts were genuine structuring that should have been escalated. Leadership wants the noise gone. A colleague proposes adding a suppression rule so the scenario stops generating alerts for that high-volume customer segment. What is the better move?',
    'Tune the scenario (for example via below-the-line testing to find a threshold that preserves true positives) and govern any suppression tightly with documented rationale and approval, rather than blanket-suppressing a scenario that is catching real activity.',
    [
      [
        'Add the suppression rule as proposed, since the segment produces overwhelmingly false positives and suppression is the fastest way to cut the noise.',
        'A blanket suppression on a scenario that just missed two real cases means the bank is choosing not to look at activity that contains true positives. That is a detection gap an examiner will treat as a control failure.',
        'Recalibrate the threshold so false positives fall without dropping known true positives, and reserve suppression for narrowly defined, governed benign patterns.',
      ],
      [
        'Lower the alert threshold so the scenario fires even more often, guaranteeing the two missed cases would have been caught.',
        'Dialing the threshold down to catch every edge case floods the team with even more false positives, which is what produced the rushed clears that missed the real cases in the first place. More volume is not more detection.',
        'Use above-the-line and below-the-line testing to find the calibration that keeps true positives in view without burying the team.',
      ],
      [
        'Leave the scenario untouched and instead set a target alert-clear rate so analysts close the backlog faster.',
        'Treating clear-rate or volume as the goal rewards speed over quality and recreates the exact failure QA found. A volume metric measures throughput, not whether suspicious activity is being caught.',
        'Address the root cause by recalibrating detection and pairing any volume metric with a quality measure such as QA accuracy or SAR conversion.',
      ],
    ],
    'Lesson: Tuning recalibrates a scenario\'s thresholds, using above-the-line and below-the-line testing to confirm you are not raising the bar past real true positives. Suppression stops alerts for a defined benign pattern and, because it is the firm deliberately choosing not to look, demands tight governance: documented scope, rationale, and approval. A scenario that is still catching genuine activity should be tuned, not suppressed; suppressing it would create a detection gap, and every change must be preserved in an auditable trail.',
    'Floe generated',
    true,
    'Suppression means the bank decides not to look at certain activity. Before that, ask whether the scenario is firing on real patterns, because if it is, the answer is calibration, not silence.',
    { challengeRating: 7 },
  ),
  makeSimpleQuestion(
    9520003,
    'Career Skills',
    'Transaction Monitoring and Alerts',
    "Customer baseline versus population",
    'An alert fires on a retail savings customer who sent a $7,000 wire. The analyst notes that $7,000 is well under the bank\'s typical wire sizes and far below what corporate clients move daily, and is inclined to clear it as unremarkable for the wire population. The customer has never wired more than $1,000 and lists no business activity. What is the key flaw in the analyst\'s reasoning?',
    'Unusual must be judged against this customer\'s own baseline and peer group, not the overall population; a 7x jump from a never-above-$1,000 retail saver is the anomaly the alert is meant to surface.',
    [
      [
        'There is no flaw; $7,000 is small relative to what the bank moves, so clearing it as unremarkable is correct.',
        'Benchmarking against the bank-wide or corporate population hides customer-level anomalies. An amount that is trivial for a treasury account can be a sharp, unexplained deviation for a retail saver.',
        'Compare the transaction to the customer\'s own history and peer group, where a 7x jump stands out clearly.',
      ],
      [
        'The flaw is that the analyst should have escalated to a SAR immediately, since any sudden 7x increase is confirmed suspicious activity.',
        'An alert is a hypothesis to test, not a verdict. A spike could have a benign explanation (a tax refund, a gift, a one-off purchase), so the next step is to gather facts, not to file.',
        'Investigate the deviation against the profile and gather a verifying explanation before deciding to clear, request more information, or escalate.',
      ],
      [
        'The flaw is that the analyst used a dollar threshold at all; only fixed regulatory thresholds like the $10,000 CTR limit should drive monitoring.',
        'Restricting monitoring to fixed regulatory thresholds misses exactly the sub-threshold, customer-relative anomalies that behavioral monitoring exists to catch. A $7,000 spike never triggers a CTR yet is highly unusual for this customer.',
        'Use behavioral baselines and peer-group comparison alongside fixed thresholds, since suspicious activity often hides below the mechanical reporting limits.',
      ],
    ],
    'Lesson: Effective transaction monitoring measures what is unusual for this customer, not what is unusual in the abstract. A transaction normal for a corporate treasury account can be highly anomalous for a retail saver, so analysts compare activity to the customer\'s own history and to peer-group norms rather than to a bank-wide population. A 7x deviation from an established baseline is the signal the alert exists to surface, and the right response is to test it against the profile, not to clear it because it looks small next to bigger accounts.',
    'Floe generated',
    true,
    'Ask "unusual compared to what?" The meaningful comparison is the customer\'s own pattern and peer group, not the largest accounts at the bank.',
    { challengeRating: 5 },
  ),
]

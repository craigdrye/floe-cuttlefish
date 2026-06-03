import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const clinicalResearchJargonGems: Question[] = [
  // ===== Safety Language — AE, SAE, SUSAR, and the Reporting Clock =====
  makeSimpleQuestion(
    10022000,
    'Career Skills',
    'Safety Language — AE, SAE, SUSAR, and the Reporting Clock',
    'The maybe-SAE that sat overnight',
    "A coordinator catches you in the hallway on Friday afternoon: \"Patient 14 was admitted to hospital last night, probably the flu, probably nothing to do with our drug. I'll write it up Monday once I know more.\" You glance at the protocol: it requires the site to notify the sponsor of any serious adverse event within 24 hours of the site becoming aware. What is the defensible move?",
    "Treat the hospitalization as a serious adverse event now and notify the sponsor within the 24-hour clock, recording it as related/unknown causality, with the facts that are known and the facts still pending",
    [
      ["Wait until Monday to gather more facts, since you should not report an SAE until causality and the full picture are confirmed", "The clock starts when the site first becomes aware of the event, not when the story is complete; an incomplete report filed on time beats a complete one filed late.", "Notify within 24 hours with known and pending facts, then update; never let a possible SAE wait on certainty."],
      ["Log it as a non-serious adverse event for now, because the coordinator believes it is unrelated to the study drug", "Hospitalization is itself a seriousness criterion regardless of suspected cause; seriousness is about the outcome, not your guess at causality.", "An overnight admission meets the SAE definition on its face; downgrading it on a hunch is the classic 'default to non-serious' error."],
      ["Email the medical monitor informally over the weekend and consider the obligation met once someone has been told", "A casual email is not the validated safety workflow and does not document the formal 24-hour notification; the report must go through the safety pathway.", "Use the formal SAE reporting workflow within the clock; an informal heads-up neither starts the clock cleanly nor creates a defensible record."],
    ],
    "Seriousness and causality are two different axes, and the reporting clock answers to seriousness, not to your confidence about the cause. Hospitalization is a regulatory definition of 'serious' on its own, so the event is reportable even if the drug is almost certainly innocent. The deeper idea is that the clock starts at awareness, not at understanding: clinical research deliberately prefers a fast, honest, incomplete report over a slow, tidy, complete one, because a delayed safety signal can harm the next participant while you polish the narrative. 'I'll know more Monday' is exactly the sentence the 24-hour rule exists to override.",
    'Floe generated',
    true,
    'Decide seriousness from the outcome first; the clock starts when you become aware, not when you understand.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10022001,
    'Career Skills',
    'Safety Language — AE, SAE, SUSAR, and the Reporting Clock',
    'Why a SUSAR has a faster clock than a plain SAE',
    "Two serious events land on the same day. Event A is a heart attack already listed as a known risk in the Investigator's Brochure. Event B is acute liver failure that is not in the Brochure and is suspected to be drug-related — a SUSAR. Both are serious. A new colleague asks why the regulations push the SUSAR onto a tighter expedited clock (7 calendar days if fatal or life-threatening, 15 otherwise) when both events are equally grave for the patient in front of you. What is the real reason?",
    "Expedited reporting is about new knowledge, not about how sick this one patient is: a SUSAR is suspected, serious, AND unexpected, so it may be the first signal of a previously unknown hazard that could threaten everyone still on the drug",
    [
      ["Because acute liver failure is medically more dangerous than a heart attack, so the law ranks events by clinical severity", "The clock is not a severity ranking; a known fatal risk can be graver to the patient yet still not require an expedited report, because it teaches regulators nothing new.", "Both events are serious; what makes the SUSAR expedited is unexpectedness, the arrival of new safety knowledge, not a higher injury score."],
      ["Because the heart attack is unrelated to the drug and therefore is not an adverse event at all, so only one event needs reporting", "A known, expected event is still a genuine adverse event and is still recorded and reported in aggregate; it simply does not trigger the individual expedited pathway.", "Expectedness changes the reporting route, not whether the event counts; the heart attack remains a reportable AE/SAE, just not a SUSAR."],
      ["Because the sponsor wants to limit its liability for off-label outcomes, so it front-loads the paperwork on novel events", "Expedited reporting is a participant-protection mechanism aimed at surfacing emerging hazards quickly, not a liability-management tactic.", "The driver is protecting current and future participants from an unknown signal, not shielding the sponsor."],
    ],
    "The word that does the work in SUSAR is 'unexpected.' Serious and suspected describe one patient; unexpected describes the state of the world's knowledge. A known fatal risk, however terrible, tells regulators nothing they did not already weigh into the risk-benefit calculus, so it rides the routine reporting route. An unexpected serious event suspected of being drug-related may be the leading edge of a hazard nobody has priced in yet, and every other participant is still being dosed while you write. That is why the expedited clock is keyed to novelty rather than to severity: the system is racing the spread of an unknown danger, and the Investigator's Brochure is the reference that tells you whether what you are seeing is genuinely new.",
    'Floe generated',
    true,
    'Ask what the event teaches the world, not only what it does to this patient.',
    { challengeRating: 6 },
  ),

  // ===== Source, CRFs, and Data Integrity (ALCOA+) =====
  makeSimpleQuestion(
    10022002,
    'Career Skills',
    'Source, CRFs, and Data Integrity (ALCOA+)',
    'The query you make disappear',
    "A monitor raises a query: the eCRF lists a systolic blood pressure of 1320, an obvious typo for 132. The real source — the nurse's signed paper vital-signs sheet — clearly reads 132. A colleague says the fastest fix is to just type 132 over the 1320 in the eCRF so the query closes. Under ALCOA+, why is the colleague's reflex the wrong one even though 132 is the correct value?",
    "Because the correction must preserve the original entry — you change it through the audit trail so 1320 remains visible alongside who changed it, when, and why ('transcription error, source reads 132'); silently overwriting destroys the very traceability that makes the right value trustworthy",
    [
      ["The colleague is right: since 132 is the true value from source, typing it over the error makes the record accurate, which is what ALCOA+ ultimately cares about", "Accuracy without an audit trail is unverifiable; ALCOA+ also demands Original and Attributable, so a correct-looking value with no record of the change is not actually defensible.", "Being right is not enough; the change must be traceable. Overwriting erases the Original and the reason, leaving a clean number nobody can verify."],
      ["The colleague is wrong because you should never alter an eCRF value at all once entered; you must open a brand-new visit record instead", "Corrections are expected and permitted; the rule is not 'never change' but 'never change invisibly.' Spawning a duplicate record creates a worse data-integrity problem.", "ALCOA+ allows corrections through the audit trail; it forbids only changes that hide the original, not changes themselves."],
      ["The colleague is wrong because the source document should be amended to match the 1320 in the eCRF, keeping the two records consistent", "This inverts the hierarchy: the CRF is derived from source, never the other way around. Editing source to match a typo is falsification, the gravest integrity failure.", "Source governs the CRF, not the reverse; you reconcile the CRF to source, and you never rewrite source to protect a data-entry mistake."],
    ],
    "The instinct to 'close the query' treats data integrity as the absence of visible errors, but ALCOA+ treats it as the presence of a verifiable history. A blood pressure of 1320 is plainly wrong, yet the honest fix is not to make the wrong number vanish — it is to correct it in a way that leaves the wrong number, the corrector, the timestamp, and the reason all standing. The deep and slightly counterintuitive point is that a wrong value with a clean audit trail is more trustworthy than a right value that appeared from nowhere, because reviewers cannot trust data they cannot trace. Falsification rarely begins with a lie; it begins with the small, well-meant act of making an inconvenient truth disappear.",
    'Floe generated',
    true,
    'The goal is a traceable history, not a clean-looking field; never make a value vanish, even a wrong one.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10022003,
    'Career Skills',
    'Source, CRFs, and Data Integrity (ALCOA+)',
    'The note written from memory on Monday',
    "On Monday a coordinator realizes that last Wednesday's consent conversation was never documented. The conversation genuinely happened and went well. She writes a thorough note and, to make the timeline look clean, dates it the prior Wednesday. A reviewer later flags this not as a clerical slip but as one of the most serious things she could have done. Under ALCOA+, which principle did she break, and why is back-dating treated so harshly?",
    "She broke 'Contemporaneous' and, by misdating, also corrupted attribution: the fix was a note written today that honestly states the conversation occurred last Wednesday and is being recorded late; back-dating turns an honest late entry into a fabricated record",
    [
      ["She broke nothing serious: since the conversation truly happened and the note is accurate, dating it to the real event date simply restores the correct timeline", "Accuracy of content does not license falsifying the recording date; a true event documented with a false timestamp is still a fabricated record under ALCOA+.", "The event being real does not make the date real; the entry was created Monday, so dating it Wednesday is fabrication, not restoration."],
      ["Her only error is Legibility, easily cured by adding a clearer signature and a printed name beneath the entry", "The flaw is temporal honesty, not handwriting; no amount of legibility fixes a date that misrepresents when the record was actually made.", "Legibility is irrelevant here; the breach is that the record claims a creation date that never happened."],
      ["She violated 'Original' only, and could have cured it by photocopying the note and filing the copy as the source", "Copying does not address the problem; the issue is that the recording date is false. An original of a back-dated note is just a false record in its first draft.", "Originality is not the issue; a back-dated note is untrustworthy whether it is the original or a copy of it."],
    ],
    "Contemporaneous means recorded at the time of the activity, and the principle exists because memory and motive both drift — a note written while events are fresh is more reliable than one reconstructed days later. The crucial insight is that a late entry is not itself a violation; honesty about lateness is the cure. Writing today, 'documenting on Monday a consent discussion held last Wednesday,' is fully defensible. Back-dating is catastrophic precisely because it converts a forgivable lapse into deliberate fabrication: it lies about when the record came into being, and once a reviewer catches one false timestamp, every clean-looking date in the file becomes suspect. Integrity systems forgive being late far more readily than they forgive pretending you were not.",
    'Floe generated',
    true,
    'Late is curable by admitting it is late; the unforgivable move is dating the record to a time it did not exist.',
    { challengeRating: 6 },
  ),

  // ===== Sponsor/CRO Speak, RBQM, and Modern Trial Design =====
  makeSimpleQuestion(
    10022004,
    'Career Skills',
    'Sponsor/CRO Speak, RBQM, and Modern Trial Design',
    'The thick binder that proves nothing',
    "Under the older checklist culture, a CRA might verify 100% of every data point against source (full SDV) and leave behind a fat monitoring report as proof of diligence. A sponsor moving to risk-based quality management (RBQM) under ICH E6(R3) says it will instead concentrate monitoring on the few critical-to-quality (CtQ) factors and use centralized data review for the rest. A site manager protests that this is 'just less monitoring' and therefore lower quality. Why is that the wrong reading of RBQM?",
    "Because RBQM is not less oversight but oversight aimed at what actually matters: it concentrates effort on the data and processes whose failure would threaten participant safety or trial reliability, so quality is judged by the decisions the monitoring drives, not by the volume of checks performed",
    [
      ["The site manager is essentially right — RBQM trades thoroughness for cost savings, accepting lower quality in exchange for cheaper, lighter monitoring", "RBQM's premise is that 100% SDV wastes attention on trivial fields while missing systemic risks; it reallocates effort rather than reducing rigor.", "Effort is redirected toward high-risk factors, not removed; spreading attention evenly over everything is what actually lets the dangerous failures hide."],
      ["RBQM means trusting central statistics so completely that on-site monitoring and source verification are eliminated for good", "RBQM blends centralized signal detection with targeted on-site and source review; it reprioritizes monitoring rather than abolishing any single mode.", "On-site and source checks remain in the toolkit, now triggered by risk signals; RBQM is a mix, not the deletion of fieldwork."],
      ["RBQM is mainly a documentation reform: keep doing full SDV, but record it in a risk register so the same checks look more organized", "RBQM changes what you monitor and why, not merely how you log it; preserving 100% SDV under a new label misses the entire point.", "The reform is substantive, not cosmetic; if the checks themselves do not become risk-targeted, nothing has actually changed."],
    ],
    "The seductive equation 'more checks equals more quality' is exactly what RBQM rejects. Verifying every data point treats a misspelled middle name and a missed safety lab as equally worthy of your scarce attention, which means the catastrophic failure can hide inside the noise of the trivial one. RBQM, and the E6(R3) culture behind it, reframes quality as a property of judgment rather than volume: you first identify the critical-to-quality factors — the handful of things whose corruption would actually endanger a participant or invalidate the result — and you point your oversight there. The lingering implication is uncomfortable for checklist cultures: a thinner, sharper monitoring effort can be higher quality than an exhaustive one, because quality lives in the decisions oversight enables, not in the thickness of the binder it leaves behind.",
    'Floe generated',
    true,
    'Ask whether the oversight is aimed at what would actually hurt the trial, not at how much got checked.',
    { challengeRating: 6 },
  ),
]

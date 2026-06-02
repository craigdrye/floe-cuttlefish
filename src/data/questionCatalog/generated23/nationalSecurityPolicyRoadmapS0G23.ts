import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const nationalSecurityPolicyRoadmapS0G23: Question[] = [
  // ----------------------------------------------------------------------------
  // Crisis Management and Decision Tempo
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    9400001,
    'Career Skills',
    'Crisis Management and Decision Tempo',
    "Reversibility sets decision speed",
    'In a fast-moving crisis the cell faces two pending choices: (a) repositioning a surveillance aircraft to a different orbit, which can be undone within hours, and (b) authorizing a kinetic strike that cannot be recalled once weapons release. The lead is told to "decide everything now to keep tempo up." How should tempo be allocated across the two decisions?',
    'Move fast on the reversible repositioning since the cost of delay outweighs the cost of error, but slow the irreversible strike decision — buy time to close gaps and route it to the right authority, because an unrecoverable mistake there is far costlier than a brief delay',
    [
      [
        'Decide both immediately and identically, because in a crisis a uniform fast tempo is what keeps the cell from freezing',
        'Treating a recallable orbit change and an unrecoverable strike as the same speed problem ignores that error cost differs by orders of magnitude; a uniform "fast on everything" rule spends the same haste on a decision you cannot take back as on one you can.',
        'Sort by reversibility first: fast on two-way-door choices, deliberate on one-way-door choices.',
      ],
      [
        'Slow down both decisions equally until the assessment is complete, since haste causes the worst crisis errors',
        'Holding the reversible repositioning for full certainty forfeits a low-risk move whose main danger is delay, not error; blanket caution is as much a failure as blanket speed.',
        'Do not pay the deliberation tax on a decision you can simply reverse; spend that time on the irreversible one.',
      ],
      [
        'Prioritize whichever decision the most senior principal raised first, since seniority sets crisis tempo',
        'Order of mention by a senior is not a measure of how recoverable a choice is; routing tempo by who spoke first can rush an irreversible strike while a cheap reversible move sits idle.',
        'Let consequence and recoverability set the pace, not the seating chart of who asked.',
      ],
    ],
    'A core crisis-tempo discipline is sorting decisions by reversibility. Reversible ("two-way door") actions should be made quickly because the dominant risk is the cost of delay, not the cost of being wrong. Irreversible ("one-way door") actions deserve more time, more gap-closing, and the right decision authority because the error cannot be undone. Applying a single uniform speed to both — fast or slow — misallocates the cell\'s scarcest resource.',
    'Floe generated',
    true,
    'Ask which of these choices you could take back tomorrow, and which one you could not — then let that decide where the clock pressure should land.',
    { challengeRating: 6 },
  ),

  // ----------------------------------------------------------------------------
  // Crisis and Policy Communication
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    9400002,
    'Career Skills',
    'Crisis and Policy Communication',
    "The holding statement",
    'An incident breaks within the hour, reporters are already calling, and the facts are still being reconciled across agencies. The communications lead wants to put nothing out until a complete, verified account is ready. What is the better first move?',
    'Issue a brief holding statement now: acknowledge the incident, state the few facts that are confirmed, say what the government is doing, and commit to a specific next-update time — then refine as the picture firms up',
    [
      [
        'Stay silent until a complete, fully verified account is ready, because any early statement risks being wrong',
        'A communications vacuum in the first hour gets filled by speculation and rumor that the government must later chase; waiting for completeness cedes the narrative and can read as evasion or incompetence.',
        'Acknowledge early with confirmed facts and a next-update commitment; completeness comes in later updates, not the first one.',
      ],
      [
        'Release a confident, detailed narrative immediately so the story is fully framed before rumors spread',
        'A detailed account built on unreconciled reporting locks the government into specifics it may have to retract, which costs far more credibility than a brief, bounded holding statement.',
        'Bound the first statement to what is confirmed; do not commit to details the evidence cannot yet support.',
      ],
      [
        'Have several officials each speak to the press informally to show transparency and fill the gap quickly',
        'Multiple uncoordinated voices in the first hour produce contradictory accounts that compound the rumor problem rather than solving it; transparency without coordination reads as chaos.',
        'Channel the early response through one approved holding statement, not a scattering of off-the-cuff comments.',
      ],
    ],
    'A holding statement is the disciplined first public communication in a crisis: acknowledge the event, share only confirmed facts, describe the response underway, and promise a next update by a stated time. It buys credibility and limits speculation without committing the government to details it cannot yet verify. Silence cedes the narrative; a premature detailed account invites a damaging retraction.',
    'Floe generated',
    true,
    'The first statement is not the full story — it is a promise that you are engaged and an honest line on what is and is not yet known.',
    { challengeRating: 4 },
  ),

  makeSimpleQuestion(
    9400003,
    'Career Skills',
    'Crisis and Policy Communication',
    "One voice, consistent message",
    'During a crisis, the press office, a deployed component commander, and a senior official at headquarters are each fielding press questions separately, and their accounts have begun to diverge on basic facts. What structural fix should the communications plan impose?',
    'Designate an approved spokesperson channel and shared, current key messages so that everyone who speaks publicly conveys the same confirmed facts — others route inquiries to that channel rather than improvising',
    [
      [
        'Let each official keep speaking independently, since more voices signal transparency and openness',
        'Independent, uncoordinated voices are exactly what produced the diverging accounts; multiple unsynchronized speakers read as confusion, not openness, and erode credibility.',
        'Openness comes from one consistent, accurate message across speakers, not from many contradictory ones.',
      ],
      [
        'Order complete public silence from everyone except the most senior official, who personally handles all media',
        'Funneling every press contact through one senior person creates a bottleneck that cannot scale to crisis volume and leaves field-level inquiries unanswered; the goal is consistency, not a single overloaded mouth.',
        'Designate an approved channel and shared messages so multiple speakers can stay on one line, rather than choking everything through one person.',
      ],
      [
        'Tell each official to speak only about their own area so the accounts cannot conflict',
        'Topic-splitting does not prevent contradictions on the shared core facts (what happened, what is being done) and still leaves no mechanism to keep those facts synchronized as they update.',
        'Subject-matter spokespeople can speak to their lane, but only off a shared, current set of approved core messages.',
      ],
    ],
    'Crisis messaging must speak with one voice: a designated, approved spokesperson channel working from a shared, continually updated set of key messages, so that everyone who speaks publicly conveys the same confirmed facts. Multiple uncoordinated speakers generate contradictions that destroy credibility, while total silence cedes the narrative. The fix is coordination of message, not suppression of all but one person.',
    'Floe generated',
    true,
    'The problem is not how many people are talking but whether they are working from the same approved, current facts.',
    { challengeRating: 5 },
  ),

  makeSimpleQuestion(
    9400004,
    'Career Skills',
    'Crisis and Policy Communication',
    "Notify partners before going public",
    'The government will publicly announce a significant response to a crisis within hours. Two key allies are directly affected, and the relevant congressional oversight members have not yet been briefed. A staffer proposes releasing the public statement first and notifying allies and Congress afterward "to control the rollout." What is the better sequencing?',
    'Brief the affected allies and the required congressional members before or simultaneous with the public release, so partners learn it through the relationship rather than from the news — coordinated notification preserves trust and meets oversight obligations',
    [
      [
        'Release publicly first and notify allies and Congress afterward, because controlling the public rollout is the top priority',
        'Letting affected allies and oversight members learn of a major response from the press blindsides them, damages the partnerships the response depends on, and can breach notification obligations; rollout control does not outrank not surprising the people you need.',
        'Sequence notification ahead of or alongside the public release; surprising partners costs more than a tidy rollout is worth.',
      ],
      [
        'Notify only the allies, since congressional notification can always wait until after the operation is well underway',
        'Skipping or indefinitely deferring required congressional notification ignores oversight obligations (for a use of force, the War Powers Resolution sets a 48-hour reporting trigger) and invites an avoidable accountability finding.',
        'Treat allied coordination and congressional notification as parallel duties, not a choice between them.',
      ],
      [
        'Leak the announcement to a friendly outlet first to shape the framing, then notify partners',
        'An unauthorized pre-release leak forfeits message control to the outlet, blindsides the very partners you must brief, and can violate disclosure statutes — the opposite of disciplined notification.',
        'Use the official, on-the-record notification sequence; leaking trades long-term trust and legality for one news cycle.',
      ],
    ],
    'Notification discipline means affected allies and required congressional members are briefed before or simultaneous with a public announcement, never left to learn of it from the news. This preserves the trust that partners and oversight relationships run on and satisfies statutory duties — for a use of force, the War Powers Resolution requires a report to Congress within 48 hours. Public-rollout control never justifies blindsiding the partners and overseers the response depends on.',
    'Floe generated',
    true,
    'Ask who would be embarrassed or undercut by hearing this on the news first — those are the people who must hear it from you beforehand.',
    { challengeRating: 6 },
  ),
]

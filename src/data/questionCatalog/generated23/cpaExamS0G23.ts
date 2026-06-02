import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const cpaExamS0G23: Question[] = [
  makeSimpleQuestion(
    9120000,
    'Career Skills',
    'CPA Exam Architecture and Study Operating System',
    "ISC 60/40 scoring weight",
    'You are building study plans for two candidates. One is sitting FAR (a Core section); the other chose ISC as their Discipline. Both ask the same question: "How should I split my practice time between multiple-choice questions and task-based simulations?" You decide to anchor each plan to how the section is actually scored. Which split correctly reflects the scoring weights, and what is the planning implication for the ISC candidate?',
    'FAR is weighted 50% MCQ / 50% TBS, but ISC is the lone exception at 60% MCQ / 40% TBS, so the ISC candidate should weight MCQ drilling more heavily than they would on a 50/50 section rather than pouring equal effort into simulations',
    [
      ["Both sections are 50/50, so identical practice splits are correct; the section name does not change scoring", "This applies the common 50/50 split to every section. It is right for AUD, FAR, REG, BAR, and TCP, but ISC is the single exception at 60/40, so an identical plan under-rewards the ISC candidate's MCQ work and over-invests in simulations that carry only 40 cents on the dollar.", "Memorize the one exception: every section is 50/50 except ISC, which is 60% MCQ / 40% TBS, and plan the ISC candidate's hours toward the heavier MCQ weight."],
      ["ISC is 60% TBS / 40% MCQ because Discipline sections lean on applied simulation work", "This reverses the ISC weighting. The 60% on ISC sits on the multiple-choice testlets, not the simulations, so building the plan around heavy TBS effort chases the lighter-weighted component and mis-budgets the candidate's scarcest resource, time.", "Keep the direction straight: on ISC the MCQ testlets carry 60% and the TBS testlets carry 40%, the opposite of the intuition that 'simulations must be worth more.'"],
      ["The weights are irrelevant to study planning because all five testlets contribute equally to the score regardless of section", "This treats the testlets as equally weighted, but MCQ and TBS testlets are scored as weighted components, not as five equal blocks. Ignoring the weight means the candidate cannot tell which kind of practice actually moves their score the most.", "Tie the plan to the published scoring weight per item type, then concentrate effort where the points are, which for ISC means the 60%-weighted MCQ side."],
    ],
    "Every CPA section runs four hours across five testlets (two MCQ, then three TBS), and the MCQ/TBS scoring is 50/50 on AUD, FAR, REG, BAR, and TCP. ISC is the one exception, weighted 60% MCQ / 40% TBS, so a study plan copied from a 50/50 section over-invests in simulations there. Anchoring practice time to the actual scoring weight, not to a guess about what 'should' matter, is the core of a blueprint-aware study operating system.",
    'Floe generated',
    true,
    'Four sections share one scoring split; one Discipline breaks it. Identify which section is the exception and which item type carries the heavier weight there.',
    { challengeRating: 5 },
  ),
  makeSimpleQuestion(
    9120001,
    'Career Skills',
    'CPA Exam Architecture and Study Operating System',
    "30-month rolling credit window",
    'A candidate passes their first section, FAR, and the score is released on March 15. They want to know the latest date by which they must pass their remaining three sections before that FAR credit expires, under the current NASBA model rules (assuming their state board has adopted the standard window). How is the deadline determined?',
    'The 30-month conditional-credit clock runs from the score-release date, so the FAR credit expires roughly 30 months after March 15; each subsequently passed section starts its own 30-month clock, and the candidate must finish before the earliest credit lapses',
    [
      ["The clock is 18 months and runs from the date the candidate sat for FAR, not the score-release date", "This uses the old 18-month window and the wrong start point. NASBA extended the conditional-credit window from 18 to 30 months, and for a normal passed section the clock starts on the score-release date, not the exam (sit) date, so an 18-month-from-sit-date calculation expires the credit far too early.", "Use 30 months measured from score release for a standard passed section; reserve the 'sit date' rule only for the narrow last-section exception."],
      ["All four sections share a single 30-month window that starts when the candidate passes the very last section", "This inverts the mechanics. The window is anchored to the first credit earned, not the last, and it is rolling: each passed section carries its own 30-month life, so the binding deadline is the earliest-expiring credit, not a clock that starts at the end.", "Track each section's own 30-month expiry from its score release and protect the earliest one, because that credit lapses first if the remaining sections drag."],
      ["There is no real deadline because passed sections never expire under the post-Evolution rules", "This ignores conditional credit entirely. Passing a section earns conditional credit that does expire if the rest are not completed in time; the 2024 change lengthened the window from 18 to 30 months, it did not abolish expiration.", "Build the calendar around the expiry: confirm your jurisdiction's adopted window and finish the remaining sections before the first credit's 30 months run out."],
    ],
    "Under the current NASBA model rules, passing a CPA section earns conditional credit valid for 30 months (extended from the prior 18), and for a normally passed section the clock starts on the score-release date. The window is rolling, so each passed section carries its own 30-month life and the earliest-expiring credit sets the real deadline. A narrow exception measures credit for a candidate's final section from the sit date, and because state boards adopt on their own timelines, candidates should confirm their jurisdiction's window before locking a calendar.",
    'Floe generated',
    true,
    'Two variables decide the deadline: how long the credit lasts and what date starts the clock. The recent change moved both away from the old 18-month-from-sit-date assumption.',
    { challengeRating: 6 },
  ),
]

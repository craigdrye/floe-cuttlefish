import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const pmpWranglerS0G23: Question[] = [
  makeSimpleQuestion(
    9160001,
    'Career Skills',
    'PMP Operating System',
    "Choosing the life cycle from scenario clues",
    'A career-changer is sponsoring a new internal product where the customer admits the detailed requirements are genuinely unknown and will be discovered as early versions get used. Stakeholders want working features in front of users every few weeks and expect priorities to shift based on feedback. There is no fixed-scope contract and no regulatory deadline. Before reaching for any template, which delivery approach best fits this project, and why?',
    'An adaptive/agile life cycle, because high requirement uncertainty plus a need for frequent feedback and re-prioritization favors short iterations that deliver value incrementally',
    [
      [
        'A predictive (waterfall) life cycle, because every project should first lock scope and a baseline before work begins',
        'Treating predictive as the universal default is the classic PMP trap; locking a baseline up front only works when requirements are well understood and stable, which the scenario explicitly says they are not.',
        'Read the requirement-stability clue first: high uncertainty plus a feedback-driven backlog points to adaptive delivery, not a frozen baseline.',
      ],
      [
        'A hybrid life cycle, because combining predictive governance with iterative delivery is always the safest middle ground',
        'Hybrid is not a default safe choice; it is justified when specific clues (fixed funding, regulation, or a stable component alongside an evolving one) demand both. This scenario gives only adaptive clues, so adding predictive governance would be unjustified ceremony.',
        'Pick hybrid only when the scenario names a constraint that needs predictive control; absent that, do not bolt on governance the work does not require.',
      ],
      [
        'Whichever life cycle the PMO standard mandates, because the organizational process asset overrides the project context',
        'PMI expects tailoring to the work; an organizational standard is an input to consider, not a rule that overrides clear project characteristics like uncertainty and feedback needs. Defaulting to the PMO standard skips the judgment the exam is testing.',
        'Use the PMO standard as an input, then tailor: let the project context (uncertainty, feedback cadence, constraints) drive the approach.',
      ],
    ],
    'The PMP "best next action" mindset starts by reading the project context, not by grabbing a template. Predictive life cycles fit stable, well-understood scope; adaptive/agile life cycles fit high uncertainty with frequent feedback and re-prioritization; hybrid fits when both a stable and an evolving element coexist or a constraint (regulation, fixed funding) requires predictive control alongside iteration. Roughly half of current exam items and a majority of 2026 items lean adaptive, so predictive is never the automatic default.',
    'Floe generated',
    true,
    'Look for the requirement-stability and feedback clues before naming an approach: unknown, evolving requirements with frequent feedback are adaptive tells, not predictive ones.',
    { challengeRating: 5 },
  ),
]

# UX Design
**ID**: `uxDesign` · **Discipline**: Design · **Level**: Career

## Course Aim
This course builds the judgment a working UX designer needs: deciding what to build, proving it works, and shipping it without breaking the experience for people who use a keyboard, a screen reader, or a slow phone on a crowded train. It is mobile-first and product-first. Pretty screens are the easy part; the hard part is knowing which screen is even worth designing, and being able to defend that decision to a product manager, an engineer, and a skeptical user in turn.

The spine of the course is the loop every mature design team runs: frame a real problem, research it cheaply, structure the information, design and prototype the interaction, test it with actual humans, make it accessible, and hand it off cleanly. You will learn the named frameworks reviewers and interviewers expect you to know cold — Nielsen's ten heuristics, the POUR principles, WCAG 2.2 thresholds, Fitts's and Hick's laws, jobs-to-be-done, the system usability scale — and, more importantly, when each one applies and when it is the wrong tool.

The course is rigorous on the facts that have right answers (a contrast ratio is 4.5:1 or it is not; a keyboard trap blocks a real person) and honest about the parts that are judgment calls (how many participants, which finding to fix first, whether to fight engineering over two weeks of work). By the end you should be able to take a flawed workflow, diagnose it with evidence, redesign it, and tell the story of your decisions in a portfolio case study that survives a hiring panel.

## Course Design Notes
The syllabus tracks the pillars common to Google's UX certificate, Nielsen Norman Group training, and the W3C accessibility curriculum — research, IA, wireframes, prototyping, testing, inclusive design — but pushes harder on three things those programs under-serve at the career-entry level: (1) measurable usability, so learners stop confusing "I like it" with "it works"; (2) accessibility as interaction and not just color, since keyboard focus and target size are where real products fail audits; and (3) collaboration and handoff, because designs that engineering cannot build or that conflict with the design system never reach users. Common traps are called out per chapter because most UX mistakes are not exotic — they are the same dozen errors made confidently.

## Chapter 1: UX Mindset and Problem Framing
- **Core questions**: Who is the user and what job are they hiring this product to do? What does success look like as a metric, not a vibe? Which stated request hides the real problem?
- **Key concepts**: user goals vs business goals vs constraints, problem statements, jobs-to-be-done, assumptions, leading vs lagging success metrics, the difference between a symptom ("it looks old") and a problem ("users cannot complete checkout").
- **Applied skills**: write a problem brief with user, context, pain, constraint, and a measurable outcome; reframe a feature request as a user problem; identify which metric would prove the design worked.
- **Common traps**: solving the stated solution instead of the underlying problem; optimizing aesthetics when the task is broken; using output metrics ("we shipped it") as if they were outcome metrics ("abandonment fell").

## Chapter 2: Research That Changes the Design
- **Core questions**: What must we learn before we draw anything? Which finding is strongest, and which assumption is still untested? Does the method match the question — and the use context?
- **Key concepts**: generative vs evaluative research, interviews and contextual inquiry, surveys and their limits, leading-question and confirmation bias, personas and jobs-to-be-done, affinity mapping and synthesis, the difference between what users say and what they do.
- **Applied skills**: plan a lightweight research session for a specific decision; spot a leading question; synthesize raw notes into an affinity map of findings and opportunities; choose between observing in context and asking in a room.
- **Common traps**: research theater that confirms an existing plan; trusting self-reported preference over observed behavior; running a survey to answer a "why" question; treating one loud participant as a trend.

## Chapter 3: Information Architecture and User Flows
- **Core questions**: Where do users expect content to live? Does our labeling match their vocabulary or ours? Where can the flow branch, stall, or dead-end?
- **Key concepts**: navigation and hierarchy, mental models, content grouping, labeling, task flows vs user journeys, decision points and branches, edge cases, empty and error paths; card sorting (open, closed, hybrid) to build IA and tree testing to validate it.
- **Applied skills**: produce a site/app map and two annotated user flows showing decision points and both branches; choose open vs closed card sorting for a given stage; run a tree test to check findability before redesigning navigation.
- **Common traps**: clever, internal labels users will never guess; diagramming only the happy path; confusing a flow (sequence) with a journey (experience over time); reorganizing IA from team intuition instead of card-sort evidence.

## Chapter 4: Wireframes and Interaction Structure
- **Core questions**: What is the single primary action on this screen? What feedback does the user need at each step? What happens when input is invalid, slow, or empty?
- **Key concepts**: layout and visual hierarchy, affordance and signifiers, the full set of states (default, loading, empty, error, success, disabled), feedback and system status, error prevention, progressive disclosure; Fitts's law (target size and distance) and Hick's law (number of choices) as design levers.
- **Applied skills**: produce low- and mid-fidelity wireframes for a core workflow including loading, empty, and error states; make the primary action win the visual hierarchy; apply Hick's law to cut decision overload; size and place touch targets using Fitts's law.
- **Common traps**: designing only the happy, full-data screen; equal visual weight on every action so nothing reads as primary; interactive elements that look static (broken affordance); pixel-locking a wireframe before structure is settled.

## Chapter 5: Prototyping and Usability Testing
- **Core questions**: Can a real user complete the task without help? Where do they hesitate or go wrong? Which issue costs the most, and which do we fix first?
- **Key concepts**: clickable prototypes and fidelity choices, moderated vs unmoderated testing, the think-aloud protocol, task scripts and success criteria, core metrics (task success rate, time on task, error rate), the System Usability Scale (~68 is the average benchmark, not a percentage), Nielsen's "five users surface ~85% of issues" finding and its limits, severity rating and prioritization, iteration.
- **Applied skills**: write neutral, non-leading task scenarios; run a think-aloud session; compute and interpret a task success rate; rate findings by severity and produce a prioritized revision list; decide moderated vs unmoderated for a given question and budget.
- **Common traps**: leading the participant to the answer; dismissing a finding because "the team understood it"; reporting that everyone "liked it" instead of whether they succeeded; treating a SUS of 68 as "68% usable"; assuming five users is always enough regardless of method or user segments.

## Chapter 6: Accessibility and Inclusive Design
- **Core questions**: Can someone complete this with a keyboard alone? Does the interface communicate state without relying on color? Which user is currently locked out?
- **Key concepts**: the POUR principles (Perceivable, Operable, Understandable, Robust); WCAG conformance levels A/AA/AAA; contrast minimums (4.5:1 normal text, 3:1 large text at AA); target size minimum (24×24 CSS px, SC 2.5.8); keyboard operability and focus management; keyboard traps; semantic structure and labels; not using color as the only signal; readable copy and cognitive load.
- **Applied skills**: run an accessibility review against POUR; check a color pair against the AA contrast threshold; verify focus order and an escape path through a modal; flag a color-only status indicator; specify accessible names for controls.
- **Common traps**: treating accessibility as "add alt text and pick nicer colors"; modals that trap or lose keyboard focus; conveying errors with red alone; assuming visible size equals the hit target; chasing AAA everywhere when AA is the legal/practical bar.

## Chapter 7: Product Collaboration and Handoff
- **Core questions**: Which details must be specified vs left to an existing component? Which tradeoff needs explicit product agreement? What will engineering have to invent if you stay silent?
- **Key concepts**: design systems, design tokens vs hardcoded values, components and variants, the full state matrix, responsive behavior and breakpoints, redlines/specs, engineering cost and tradeoffs, structured critique, decision records, the 8-point spacing grid as a shared scale.
- **Applied skills**: assemble an annotated handoff with component states, responsive rules, and open questions; reference a design-system component instead of redrawing it; give specific, actionable critique tied to a principle; negotiate a costly interaction by surfacing user value and a cheaper alternative.
- **Common traps**: handing off only the desktop happy path; inventing a fifth date picker instead of reusing the system's; hardcoding spacing/colors that should be tokens; vague critique ("make it pop") that no one can act on; treating an engineering cost estimate as an insult instead of a constraint.

## Chapter 8: Portfolio Case Study
- **Core questions**: What changed because of your work, and how do you know? Which decisions show judgment rather than taste? What would you do differently next time?
- **Key concepts**: story arc (problem → research → decisions → outcome), constraints and tradeoffs, evidence over adjectives, before/after, honest reflection, visual clarity, tailoring depth to the reviewer.
- **Applied skills**: structure a case study as problem, user evidence, constraints, iterations, tradeoffs, outcome, and reflection; quantify impact where possible; cut process that does not demonstrate judgment.
- **Common traps**: final screenshots with no reasoning; listing tools instead of decisions; claiming impact with no metric or comparison; hiding the messy middle where the real judgment lives.

## Capstone
Redesign a flawed product workflow end to end. Deliver: a problem brief with a measurable outcome; a lightweight research plan plus a synthesized affinity map; a site/app map and two annotated flows with branches and edge cases; low/mid-fidelity wireframes covering loading, empty, and error states; a clickable prototype with a task script; a usability test of five-plus users with severity-rated findings and a prioritized revision list; an accessibility review against POUR including a contrast check and a keyboard pass; final screens; an annotated engineering handoff; and a portfolio case study telling the story with evidence.

## Assessment Ideas
- Research synthesis graded on evidence quality, bias control, and design relevance.
- Prototype graded on task completion rate, state coverage, accessibility, and clarity of the primary action.
- Accessibility review graded on correct application of POUR and WCAG thresholds (contrast, target size, keyboard).
- Portfolio case study graded on decision quality, honest tradeoff explanation, and measurable impact.

## Research Notes
- Google UX Design Professional Certificate: https://www.coursera.org/professional-certificates/google-ux-design
- Nielsen Norman Group UX training and articles: https://www.nngroup.com/
- W3C WAI accessibility fundamentals: https://www.w3.org/WAI/fundamentals/
- WCAG 2.2 Understanding SC 2.5.8 Target Size (Minimum): https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- Laws of UX (Fitts, Hick, and others): https://lawsofux.com/
- CareerFoundry UX Design Program: https://careerfoundry.com/en/courses/become-a-ux-designer/

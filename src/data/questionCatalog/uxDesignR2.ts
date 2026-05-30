import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe uxDesign 103-pass'

export const uxDesignR2Questions: Question[] = makeQuestionBank('Career Skills', [
  // ---- Chapter 1: UX Mindset and Problem Framing ----
  {
    id: 7606000,
    chapter: 'UX Mindset and Problem Framing',
    title: 'Leading vs lagging indicator',
    prompt:
      'A team wants an early signal that an onboarding redesign is working, weeks before churn data arrives. Which metric is a leading indicator of success?',
    correct: 'The percentage of new users who complete the first key action within their first session',
    wrong: [
      miss(
        '90-day retention rate measured next quarter',
        'Retention is a lagging indicator: it confirms the outcome long after the design shipped, so it cannot give an early signal.',
        'A leading indicator moves first and predicts the lagging result; ask what changes within days, not months.',
      ),
      miss(
        'Total lifetime revenue per cohort',
        'Lifetime value accumulates over months and is shaped by many factors, so it lags far behind the design change.',
        'You need a near-term behavior that precedes and predicts the slow outcome.',
      ),
      miss(
        'The number of screens the team redesigned',
        'That is an output count, not an indicator of user behavior at all, leading or lagging.',
        'Indicators describe user results; deliverable counts describe team activity.',
      ),
    ],
    lesson:
      'Leading indicators (e.g., first-action completion) move early and predict the slower lagging outcome (retention, revenue). Pairing one of each lets a team steer during a launch instead of waiting months to learn whether the redesign worked.',
    source,
    generated: true,
  },
  {
    id: 7606001,
    chapter: 'UX Mindset and Problem Framing',
    title: 'Proxy metric risk',
    prompt:
      'A team picks "time on page" as a success metric for a help article and celebrates when it rises. Why is this a risky proxy?',
    correct: 'Longer time can mean the article is confusing and users are struggling, not that it is more valuable',
    wrong: [
      miss(
        'Time on page is impossible to measure accurately, so any number is meaningless',
        'Analytics can estimate time on page reasonably; the real problem is that the metric is ambiguous about what it signals.',
        'The flaw is interpretation, not measurability — ask what high time actually implies for a help doc.',
      ),
      miss(
        'Time on page only matters for video content, never for text',
        'It is tracked for any page type; the issue is that for help content, more time may signal difficulty rather than success.',
        'The metric is available everywhere; question whether "more" is good for this task.',
      ),
      miss(
        'The team should have used time on page but multiplied it by ten',
        'Scaling the number does not fix a metric that points the wrong direction for help articles.',
        'A bad proxy stays bad when you rescale it; the direction of "good" is the problem.',
      ),
    ],
    lesson:
      'A proxy metric stands in for the thing you actually care about, and it fails when "more" of the proxy can mean either success or failure. For help content, low time plus task success is good; high time may mean people are lost. Always ask which direction of the proxy maps to real value.',
    source,
    generated: true,
  },
  {
    id: 7606002,
    chapter: 'UX Mindset and Problem Framing',
    title: 'Google HEART framework',
    prompt:
      'Google’s HEART framework offers categories of UX metrics. Which set are they?',
    correct: 'Happiness, Engagement, Adoption, Retention, Task success',
    wrong: [
      miss(
        'Hypothesis, Experiment, Analysis, Result, Theory',
        'That is a generic scientific-method mnemonic, not Google’s product UX metrics framework.',
        'HEART is about user-experience signal categories, not the steps of an experiment.',
      ),
      miss(
        'Heuristics, Empathy, Accessibility, Research, Testing',
        'These are UX activities, not the named metric categories in the HEART model.',
        'HEART names things you measure about users, not methods you run.',
      ),
      miss(
        'Headlines, Engagement, Ads, Reach, Traffic',
        'Those are marketing/funnel terms; HEART is a product UX metrics framework from Google research.',
        'The acronym maps to user outcomes like adoption and retention, not ad metrics.',
      ),
    ],
    lesson:
      'HEART (Happiness, Engagement, Adoption, Retention, Task success) is Google’s framework for choosing UX metrics. Teams pair each chosen category with Goals–Signals–Metrics so they measure what matters for a feature rather than whatever is easy to count.',
    source,
    generated: true,
  },
  {
    id: 7606003,
    chapter: 'UX Mindset and Problem Framing',
    title: 'Assumption vs hypothesis',
    prompt:
      'A designer writes: "We believe that adding a progress bar to checkout will reduce abandonment for first-time buyers, because they lose track of how many steps remain. We will know this is true when abandonment drops by 5%." What is the value of phrasing it this way?',
    correct: 'It makes the assumption testable by stating who, the expected change, the reason, and a measurable signal of success',
    wrong: [
      miss(
        'It guarantees the progress bar will work because the logic is sound',
        'A well-formed hypothesis is still a guess; its value is that it can be tested and disproven, not that it is correct.',
        'Structure makes a claim falsifiable; it does not make it true.',
      ),
      miss(
        'It removes the need to test, since the reasoning is already written down',
        'Writing the reasoning is the setup for a test, not a substitute for one — the whole point is the measurable signal.',
        'A hypothesis exists precisely so you can go check it against evidence.',
      ),
      miss(
        'It commits the team to shipping the progress bar regardless of results',
        'A hypothesis invites a decision based on the result; it does not lock in the feature before evidence arrives.',
        'The measurable signal is there to let you change course, not to force a ship.',
      ),
    ],
    lesson:
      'A good design hypothesis names the user, the expected effect, the underlying reason, and a measurable success signal. That structure turns a vague assumption ("a progress bar would help") into something a test can confirm or kill, which is the core of evidence-driven design.',
    source,
    generated: true,
  },
  {
    id: 7606004,
    chapter: 'UX Mindset and Problem Framing',
    title: 'North Star metric',
    prompt:
      'A product team adopts a single "North Star metric." What should that metric ideally represent?',
    correct: 'The value users get from the product, which the business believes drives sustainable growth',
    wrong: [
      miss(
        'The total number of features the team has shipped this year',
        'Feature count is an output and is disconnected from delivered value; a North Star should track value, not activity.',
        'A North Star points at user value that fuels growth, not at how much was built.',
      ),
      miss(
        'Quarterly marketing spend across all channels',
        'Spend is an input cost, not a measure of the value users receive or the growth it produces.',
        'Inputs you pour in are not the same as the outcome you want to grow.',
      ),
      miss(
        'The designer’s personal satisfaction with the visual style',
        'A North Star is a shared product metric tied to user value, not an individual aesthetic judgment.',
        'It must be a measurable, value-linked signal the whole team can rally around.',
      ),
    ],
    lesson:
      'A North Star metric is a single measure that captures the core value users get and that the business believes predicts durable growth (e.g., nights booked, messages sent). It aligns teams, but it works only when it reflects real user value rather than vanity output or input spend.',
    source,
    generated: true,
  },
  {
    id: 7606005,
    chapter: 'UX Mindset and Problem Framing',
    title: 'Constraint as design input',
    prompt:
      'Engineering says the search backend can only return results in batches of 20 with a one-second delay. How should a UX designer treat this constraint?',
    correct: 'As a real design input to design around, e.g., with paging, skeleton loading, and clear status, rather than ignore',
    wrong: [
      miss(
        'Ignore it and design infinite instant results, then demand engineering match the design',
        'Designing against a hard technical limit produces a spec that cannot ship and wastes the collaboration.',
        'Constraints are part of the problem; design the best experience within them, not against them.',
      ),
      miss(
        'Treat the constraint as proof the feature should be cancelled entirely',
        'A batch limit and a small delay are workable with good loading and paging patterns; they do not doom the feature.',
        'A constraint shapes the design; it rarely kills the whole task on its own.',
      ),
      miss(
        'Hide the delay by showing fake instant results and loading the real ones silently',
        'Showing fabricated results misleads users and breaks trust when the real data replaces them.',
        'Honest system status beats faking instant results the system cannot deliver.',
      ),
    ],
    lesson:
      'Constraints — technical, legal, time, budget — are part of the problem statement, not obstacles to wish away. Mature designers fold them in early (loading states, paging, honest status) so the resulting design is both good and buildable.',
    source,
    generated: true,
  },
  // ---- Chapter 2: Research That Changes the Design ----
  {
    id: 7606006,
    chapter: 'Research That Changes the Design',
    title: 'Contextual inquiry principles',
    prompt:
      'Contextual inquiry is built on a "master–apprentice" relationship. What does that model mean for the researcher’s stance?',
    correct: 'The user is the master demonstrating real work in context while the researcher is the apprentice observing and asking why',
    wrong: [
      miss(
        'The researcher is the master who teaches the user the correct way to do the task',
        'That inverts the model; in contextual inquiry the user holds the expertise and the researcher learns from them.',
        'Apprentice means the researcher learns; the user demonstrates the real work.',
      ),
      miss(
        'Both sit in a lab so the researcher can fully control the environment',
        'Contextual inquiry deliberately happens in the user’s real environment; a controlled lab strips away the context it exists to capture.',
        'The "context" principle requires the user’s actual setting, not a lab.',
      ),
      miss(
        'The researcher writes the questions in advance and never deviates from the script',
        'It is a flexible, in-context interview that follows the work as it unfolds, not a rigid fixed script.',
        'Following the real task as it happens matters more than a locked script.',
      ),
    ],
    lesson:
      'Contextual inquiry follows four principles — context, partnership, interpretation, and focus — using a master–apprentice frame: you observe real work in the user’s environment and ask "why" as it happens. It surfaces the hidden, habitual practices users never think to mention in a conference room.',
    source,
    generated: true,
  },
  {
    id: 7606007,
    chapter: 'Research That Changes the Design',
    title: 'Confirmation bias in research',
    prompt:
      'A PM runs interviews already convinced a new feature is needed, asks mostly about that feature, and quotes only the supportive answers in the readout. What bias is this?',
    correct: 'Confirmation bias — seeking and weighting evidence that supports a pre-existing belief',
    wrong: [
      miss(
        'Recency bias — overweighting the most recent information',
        'Recency bias is about the timing of evidence; here the distortion is selecting evidence that fits a held belief.',
        'The pattern is "only the supportive quotes," which is about belief, not which answer came last.',
      ),
      miss(
        'Survivorship bias — only analyzing cases that made it through some filter',
        'Survivorship bias is about a missing population (the ones that dropped out); here the issue is cherry-picking confirming answers.',
        'No survivor filter is described; the PM is filtering for agreement instead.',
      ),
      miss(
        'Anchoring bias — over-relying on the first number presented',
        'Anchoring concerns numeric reference points; this is about selectively gathering and reporting supportive evidence.',
        'There is no anchor number here, just a prior belief being protected.',
      ),
    ],
    lesson:
      'Confirmation bias is the tendency to seek, notice, and report evidence that supports what you already believe while discounting the rest. In research it shows up as leading questions, selective quoting, and "research theater." Pre-registering questions and reporting disconfirming findings are the antidotes.',
    source,
    generated: true,
  },
  {
    id: 7606008,
    chapter: 'Research That Changes the Design',
    title: 'Surveys answer what, not why',
    prompt:
      'A team wants to understand the deep reasons users abandon a complex tax-filing flow. Why is a large multiple-choice survey a poor primary method here?',
    correct: 'Surveys are good at measuring how many and which, but weak at uncovering the unanticipated "why" behind behavior',
    wrong: [
      miss(
        'Surveys cannot reach more than about fifty people, so the sample is too small',
        'Surveys actually scale to thousands; the limitation is depth of reasoning, not reach.',
        'Sample size is a strength of surveys; the gap is explanatory depth.',
      ),
      miss(
        'Surveys always produce biased data and should never be used in UX',
        'Surveys are valid for the right questions (incidence, satisfaction, prioritization); they are simply the wrong tool for open "why."',
        'The issue is method-question fit, not that surveys are universally invalid.',
      ),
      miss(
        'Surveys take longer to run than moderated interviews',
        'Surveys are usually faster to field at scale; the real problem is they cannot probe unexpected reasons.',
        'Speed is not the weakness; depth and follow-up are.',
      ),
    ],
    lesson:
      'Closed surveys excel at quantifying known options ("how many," "which one," "how satisfied") but cannot follow an unexpected thread or ask "why was that hard?" For deep, emergent reasons, qualitative interviews or contextual inquiry fit the question; a survey can size what those reveal.',
    source,
    generated: true,
  },
  {
    id: 7606009,
    chapter: 'Research That Changes the Design',
    title: 'Affinity mapping purpose',
    prompt:
      'After 12 interviews you have hundreds of sticky notes of raw observations. You cluster them into emergent themes and name each cluster. What is this synthesis step called and why does it matter?',
    correct: 'Affinity mapping — it turns scattered raw data into patterns and opportunities the team can act on',
    wrong: [
      miss(
        'A tree test — it validates whether users can find content in a navigation structure',
        'A tree test evaluates findability in an IA, not the bottom-up clustering of interview observations.',
        'Tree testing checks navigation; clustering raw notes into themes is a different activity.',
      ),
      miss(
        'A heuristic evaluation — experts inspect the interface against usability principles',
        'Heuristic evaluation inspects a design against heuristics; it does not synthesize interview data into themes.',
        'No interface is being inspected here; you are organizing research findings.',
      ),
      miss(
        'A/B testing — comparing two variants to see which performs better',
        'A/B testing measures live variant performance, not the qualitative synthesis of observations into themes.',
        'Clustering notes is analysis of qualitative data, not a controlled live experiment.',
      ),
    ],
    lesson:
      'Affinity mapping (affinity diagramming) groups individual observations into emergent themes from the bottom up, so a team moves from anecdote to pattern. Done well it surfaces the few opportunities worth designing for and prevents one loud quote from driving the roadmap.',
    source,
    generated: true,
  },
  {
    id: 7606010,
    chapter: 'Research That Changes the Design',
    title: 'Diary study fit',
    prompt:
      'You want to understand how people’s use of a habit-tracking app changes over three weeks, including moments you could never observe live. Which method fits best?',
    correct: 'A diary study, where participants self-report experiences over time in their own context',
    wrong: [
      miss(
        'A single 60-minute moderated usability test',
        'One session captures a snapshot in a lab; it cannot reveal how behavior and motivation evolve across weeks.',
        'You need longitudinal data over time, which a single session cannot provide.',
      ),
      miss(
        'A five-second test of the home screen',
        'A five-second test measures first impressions of a static screen, not multi-week behavior change.',
        'First-impression tests are instantaneous; the question spans three weeks.',
      ),
      miss(
        'A closed card sort of the settings menu',
        'Card sorting probes mental models of content grouping, not how usage unfolds over time.',
        'Card sorts inform IA; they say nothing about longitudinal habit change.',
      ),
    ],
    lesson:
      'A diary study has participants log experiences over days or weeks in their real context, capturing moments a researcher could never observe directly. It is the go-to method for longitudinal questions like habit formation, where behavior and motivation shift over time.',
    source,
    generated: true,
  },
  {
    id: 7606011,
    chapter: 'Research That Changes the Design',
    title: 'One loud participant',
    prompt:
      'In a five-person study, one very articulate participant insists the app needs a calendar view. No one else mentions it. How should the team weight this?',
    correct: 'Treat it as one signal to explore, not a validated trend, and look for whether it recurs in more data',
    wrong: [
      miss(
        'Build the calendar view immediately because the feedback was so clearly stated',
        'Eloquence is not evidence of prevalence; one persuasive voice in five is not a validated pattern.',
        'How well something is argued is not how often it is true across users.',
      ),
      miss(
        'Discard the comment entirely because only one person said it',
        'A single observation can still be a useful lead worth probing; dismissing it outright loses a possible signal.',
        'One data point is a lead to investigate, not automatically noise to delete.',
      ),
      miss(
        'Average all five participants’ satisfaction scores and ship whatever scores highest',
        'Averaging unrelated satisfaction scores does not address whether the calendar request is a real, recurring need.',
        'The question is about pattern strength, not a satisfaction average.',
      ),
    ],
    lesson:
      'Small qualitative studies surface candidate problems, not validated frequencies. A single articulate participant is a lead to investigate, not a mandate. Good synthesis distinguishes a recurring pattern across participants from a one-off opinion, however well it is delivered.',
    source,
    generated: true,
  },
  {
    id: 7606012,
    chapter: 'Research That Changes the Design',
    title: 'Recruiting the right participants',
    prompt:
      'A B2B accounting tool is tested for usability, but the recruiter signs up random consumers with no accounting background for convenience. What is the core problem?',
    correct: 'The sample does not represent the real users, so findings may not generalize to the people who actually use the tool',
    wrong: [
      miss(
        'The sample size is the only issue; more random consumers would fix it',
        'Adding more of the wrong population does not make it representative; the mismatch is who, not how many.',
        'Scaling an unrepresentative sample keeps it unrepresentative.',
      ),
      miss(
        'There is no problem because all users are essentially the same',
        'Domain expertise strongly shapes how people use specialized tools; accountants and novices behave very differently here.',
        'Specialized tools have specialized users; their mental models differ sharply.',
      ),
      miss(
        'Random recruiting guarantees an unbiased and therefore better study',
        'Randomly sampling the wrong population is not unbiased for this product; representativeness, not randomness alone, is the goal.',
        'Unbiased only helps if you are sampling from the actual user population.',
      ),
    ],
    lesson:
      'Usability findings only generalize to the population you sampled. Testing a specialized B2B tool with random consumers measures novices’ confusion, not the experience of real accountant users. Screening for representative participants is as important as the test itself.',
    source,
    generated: true,
  },
  {
    id: 7606013,
    chapter: 'Research That Changes the Design',
    title: 'Persona built on data',
    prompt:
      'What separates a useful research-based persona from a harmful one?',
    correct: 'A useful persona is grounded in real behavioral data and patterns; a harmful one is invented from assumptions and stereotypes',
    wrong: [
      miss(
        'A useful persona always includes a stock photo and a catchy name',
        'A photo and name are cosmetic; what makes a persona trustworthy is its grounding in real research, not its styling.',
        'Decoration does not make a persona valid; evidence behind it does.',
      ),
      miss(
        'A useful persona lists every demographic detail you can imagine',
        'Piling on demographics does not help and can entrench stereotypes; relevant goals and behaviors matter more than exhaustive traits.',
        'More demographic detail is not the same as more accuracy or usefulness.',
      ),
      miss(
        'A useful persona is one the marketing team likes the look of',
        'Stakeholder preference is irrelevant to whether the persona reflects actual users and their goals.',
        'A persona earns its keep by representing real users, not by being liked.',
      ),
    ],
    lesson:
      'Personas are only as good as the research behind them. A data-grounded persona captures real goals, behaviors, and pain points and keeps a team aligned on who they serve. An assumption-driven persona launders stereotypes into the process and can actively mislead design decisions.',
    source,
    generated: true,
  },
  // ---- Chapter 3: Information Architecture and User Flows ----
  {
    id: 7606014,
    chapter: 'Information Architecture and User Flows',
    title: 'Hybrid card sort',
    prompt:
      'You have some categories you are fairly confident about but suspect a few are missing. Which card-sorting variant lets participants use your categories and also create their own?',
    correct: 'A hybrid card sort',
    wrong: [
      miss(
        'A strictly closed card sort',
        'A closed sort only allows your fixed categories; it cannot reveal the missing ones you suspect exist.',
        'Closed locks the categories; you specifically want to allow new ones too.',
      ),
      miss(
        'A strictly open card sort',
        'A purely open sort discards your existing categories entirely; you wanted to keep the ones you trust and still allow new ones.',
        'Open starts from scratch; here you want to test existing groups while permitting additions.',
      ),
      miss(
        'A first-click test',
        'A first-click test measures where users click on a designed screen, not how they group content into categories.',
        'First-click evaluates a layout; card sorting is about grouping content.',
      ),
    ],
    lesson:
      'A hybrid card sort gives participants predefined categories but also lets them rename, merge, or add their own. It is ideal when you have a partial IA you trust but want to discover gaps — combining the validation of a closed sort with the discovery of an open one.',
    source,
    generated: true,
  },
  {
    id: 7606015,
    chapter: 'Information Architecture and User Flows',
    title: 'First-click test value',
    prompt:
      'Research repeatedly shows that when a user’s first click on a task is correct, their overall task success is dramatically higher. What does this justify?',
    correct: 'Running first-click tests on key screens, because the first navigation choice strongly predicts task success',
    wrong: [
      miss(
        'Ignoring navigation entirely, because users recover easily from wrong first clicks',
        'The finding is the opposite: a wrong first click sharply lowers success, so the first choice matters a great deal.',
        'The data shows recovery is hard, not easy, after a wrong first click.',
      ),
      miss(
        'Adding more menu items so users have more first-click options',
        'More options usually dilutes the correct path and worsens first-click accuracy, not improves it.',
        'Increasing choices tends to hurt, not help, getting the first click right.',
      ),
      miss(
        'Replacing all usability testing with first-click tests',
        'First-click testing answers one focused question (initial wayfinding); it does not replace task-based usability testing.',
        'It is one targeted method, not a full substitute for usability testing.',
      ),
    ],
    lesson:
      'Studies (notably by Bob Bailey and colleagues) found users who get the first click right succeed far more often than those who do not. A first-click test isolates that pivotal initial navigation decision cheaply, making it a strong early check on labels and IA before building out a flow.',
    source,
    generated: true,
  },
  {
    id: 7606016,
    chapter: 'Information Architecture and User Flows',
    title: 'Breadth vs depth in navigation',
    prompt:
      'On a mobile app you must choose between a flat menu with many top-level items (broad/shallow) and a deeply nested one with few items per level (narrow/deep). What is the central tradeoff?',
    correct: 'Breadth shows more options at once but can overwhelm; depth simplifies each screen but adds taps and hides options',
    wrong: [
      miss(
        'Depth is always better than breadth on mobile, with no downside',
        'Deep hierarchies add clicks/taps and bury content, increasing the chance users never find or recall what exists.',
        'Each extra level costs taps and can hide options; depth is not free.',
      ),
      miss(
        'Breadth is always better because users love long menus',
        'Very broad menus can overwhelm and exceed scanning capacity, especially on a small screen.',
        'Too many top-level items at once strains scanning and choice.',
      ),
      miss(
        'There is no real difference; both produce identical task success',
        'Empirical IA research shows measurable tradeoffs in findability, error, and speed between broad and deep structures.',
        'The structures behave differently; the choice has real consequences.',
      ),
    ],
    lesson:
      'Broad-and-shallow IA exposes more at each level (good for findability, risky for overload), while narrow-and-deep IA keeps screens simple but adds navigation steps and hides options. The right balance depends on content size, label clarity, and how often users need each item — it is a judgment call, not a fixed rule.',
    source,
    generated: true,
  },
  {
    id: 7606017,
    chapter: 'Information Architecture and User Flows',
    title: 'Polyhierarchy',
    prompt:
      'A recipe app needs "vegan lasagna" to be reachable under both "Vegan" and "Pasta." What IA concept supports an item living in more than one category?',
    correct: 'Polyhierarchy — an item belongs to multiple parent categories at once',
    wrong: [
      miss(
        'Card sorting — the method for an item to appear in multiple menus',
        'Card sorting is a research method for building IA, not the structural concept of multi-parent membership.',
        'You are naming a structure, not the study used to discover it.',
      ),
      miss(
        'Progressive disclosure — revealing the item only when needed',
        'Progressive disclosure is about deferring complexity, not letting one item sit in several categories.',
        'That concept hides detail; it does not assign multiple parents.',
      ),
      miss(
        'A keyboard trap — the recipe is reachable from many places',
        'A keyboard trap is an accessibility failure unrelated to category membership.',
        'That term is about focus getting stuck, not IA structure.',
      ),
    ],
    lesson:
      'A polyhierarchy lets a single item belong to several categories simultaneously (vegan lasagna under both "Vegan" and "Pasta"). It matches how users think about cross-cutting content but raises consistency and maintenance challenges, so it is a deliberate IA tradeoff, not an accident.',
    source,
    generated: true,
  },
  {
    id: 7606018,
    chapter: 'Information Architecture and User Flows',
    title: 'Faceted navigation',
    prompt:
      'An e-commerce site lets users filter shoes by size, color, brand, and price simultaneously, in any order. What navigation pattern is this?',
    correct: 'Faceted navigation — users narrow results by combining independent attribute filters',
    wrong: [
      miss(
        'A linear wizard — a fixed sequence of required steps',
        'A wizard forces an ordered, mandatory sequence; faceted nav lets users apply filters independently in any order.',
        'Facets are order-independent filters; a wizard is a fixed sequence.',
      ),
      miss(
        'A breadcrumb trail — showing the path back up a hierarchy',
        'Breadcrumbs show location within a hierarchy; they do not let users combine multiple independent attribute filters.',
        'Breadcrumbs reflect where you are; facets let you cut the set by attributes.',
      ),
      miss(
        'A mega menu — a large dropdown of navigation links',
        'A mega menu is a way to display navigation links, not a system for filtering a result set by attributes.',
        'Mega menus expose links; facets filter results by combinable attributes.',
      ),
    ],
    lesson:
      'Faceted (or faceted search) navigation lets users filter a large set by multiple independent attributes — size, color, brand, price — in any combination and order. It scales well for large catalogs because users converge on results through whichever attributes matter to them, not a predetermined path.',
    source,
    generated: true,
  },
  {
    id: 7606019,
    chapter: 'Information Architecture and User Flows',
    title: 'Error and empty paths in flows',
    prompt:
      'A designer diagrams a checkout flow showing only the steps where everything succeeds. What is the most important omission for engineering?',
    correct: 'The branches for failure states — declined payment, out-of-stock item, network timeout, and empty cart',
    wrong: [
      miss(
        'A higher-resolution export of the happy-path diagram',
        'Resolution does not add the missing failure branches engineering must still build.',
        'Crispness does not supply the error and edge paths that are missing.',
      ),
      miss(
        'The brand color palette applied to each flow box',
        'Colors are cosmetic; the flow is missing the decision branches for things going wrong.',
        'Styling the diagram does not specify what happens when steps fail.',
      ),
      miss(
        'A list of competitor checkout flows for comparison',
        'Benchmarking is out of scope here; the gap is this flow’s own unhandled failure states.',
        'Competitor research does not define your flow’s error handling.',
      ),
    ],
    lesson:
      'A flow that shows only the happy path forces engineering to invent error, empty, and edge-case behavior on the fly — inconsistently. Mapping declined payments, timeouts, out-of-stock, and empty states is where most real design decisions live, and it is the part juniors most often skip.',
    source,
    generated: true,
  },
  {
    id: 7606020,
    chapter: 'Information Architecture and User Flows',
    title: 'Match system and real world',
    prompt:
      'A banking app labels a menu "Pecuniary Instruments" instead of "Cards & Accounts." Which Nielsen heuristic does this most directly violate?',
    correct: 'Match between the system and the real world — speak the user’s language, not internal jargon',
    wrong: [
      miss(
        'Error prevention — design to stop mistakes before they happen',
        'Error prevention is about avoiding slips and mistakes; the issue here is unfamiliar vocabulary, not a preventable error.',
        'The failure is wording users will not recognize, not an unguarded action.',
      ),
      miss(
        'Aesthetic and minimalist design — remove irrelevant content',
        'Minimalist design is about cutting clutter; the label is concise but uses the wrong, jargon-heavy words.',
        'The problem is the words chosen, not how much content is shown.',
      ),
      miss(
        'Flexibility and efficiency of use — accelerators for expert users',
        'That heuristic is about shortcuts for experts; it does not address jargon that confuses ordinary users.',
        'This is about familiar language for all users, not expert accelerators.',
      ),
    ],
    lesson:
      '"Match between the system and the real world" is one of Nielsen’s ten heuristics: use words, phrases, and concepts familiar to users and follow real-world conventions, rather than internal or technical jargon. "Cards & Accounts" matches the user’s vocabulary; "Pecuniary Instruments" does not.',
    source,
    generated: true,
  },
  // ---- Chapter 4: Wireframes and Interaction Structure ----
  {
    id: 7606021,
    chapter: 'Wireframes and Interaction Structure',
    title: 'Visibility of system status',
    prompt:
      'A file upload shows no progress bar, no spinner, and no confirmation — the user has no idea whether it worked. Which Nielsen heuristic is violated?',
    correct: 'Visibility of system status — keep users informed about what is going on through timely feedback',
    wrong: [
      miss(
        'Recognition rather than recall — minimize memory load',
        'That heuristic is about not making users remember information; here the failure is the system not reporting its own state.',
        'The gap is missing status feedback, not a demand on the user’s memory.',
      ),
      miss(
        'Consistency and standards — follow platform conventions',
        'Consistency concerns matching conventions across the product; the problem here is the absence of any status feedback at all.',
        'Nothing inconsistent is described — there is simply no feedback shown.',
      ),
      miss(
        'User control and freedom — provide an emergency exit',
        'User control is about undo and escape routes; the missing piece here is feedback on the upload’s progress and outcome.',
        'No exit is being denied; the system is just silent about its state.',
      ),
    ],
    lesson:
      '"Visibility of system status" is Nielsen’s first heuristic: the system should always keep users informed about what is happening through appropriate, timely feedback. An upload needs progress, success, and error feedback so users know whether to wait, retry, or move on.',
    source,
    generated: true,
  },
  {
    id: 7606022,
    chapter: 'Wireframes and Interaction Structure',
    title: 'User control and freedom',
    prompt:
      'After a user accidentally archives an important email, the best design response per Nielsen’s "user control and freedom" heuristic is to:',
    correct: 'Offer an easy, clearly marked undo so the user can reverse the unwanted action',
    wrong: [
      miss(
        'Show a long modal asking them to confirm they truly understand archiving',
        'Heavy confirmation upfront adds friction to every action; a reversible undo afterward serves control better for low-stakes slips.',
        'The heuristic favors an easy exit/undo, not a blocking interrogation on every action.',
      ),
      miss(
        'Permanently hide the archive feature so the mistake cannot recur',
        'Removing a useful feature to prevent one slip punishes everyone; the goal is reversibility, not amputation.',
        'Control means letting users recover, not deleting the capability.',
      ),
      miss(
        'Log the user out to reset their session after the mistake',
        'Logging out destroys context and in-progress work; it does nothing to let the user reverse the archive.',
        'The user needs to undo the action, not lose their session.',
      ),
    ],
    lesson:
      '"User control and freedom" calls for clearly marked emergency exits — most powerfully, undo and redo — so users can recover from mistakes without penalty. A lightweight "Undo" toast after archiving beats blocking confirmations that slow every interaction.',
    source,
    generated: true,
  },
  {
    id: 7606023,
    chapter: 'Wireframes and Interaction Structure',
    title: 'Miller’s law misread',
    prompt:
      'A designer insists every menu must have exactly seven items, "because Miller’s law says working memory holds 7±2 things." Why is this a misapplication?',
    correct: 'Miller’s 7±2 was about memory span for chunks, not a rule that interface lists must contain seven items',
    wrong: [
      miss(
        'Miller’s law actually requires exactly five items, not seven',
        'Miller observed a span around seven chunks; the error is treating any such number as a design quota, not the specific figure.',
        'The flaw is using the number as a UI quota at all, not which number it is.',
      ),
      miss(
        'Miller’s law only applies to phone numbers and nothing else',
        'Miller’s work generalized about chunking in short-term memory; it is not limited to phone numbers.',
        'The misuse is turning a memory finding into a layout mandate, regardless of domain.',
      ),
      miss(
        'Miller’s law proves menus should have as many items as possible',
        'That contradicts the finding entirely; Miller’s point is a limited memory span, not a license for huge lists.',
        'The research points to limits on held chunks, not to maximizing items.',
      ),
    ],
    lesson:
      'Miller’s "magical number seven, plus or minus two" described how many chunks people can hold in short-term memory, and later work suggests the real limit is closer to four. It was never a rule that menus or lists must contain seven items — a classic UX misquotation. Use chunking and grouping, not a magic count.',
    source,
    generated: true,
  },
  {
    id: 7606024,
    chapter: 'Wireframes and Interaction Structure',
    title: 'Tesler’s law',
    prompt:
      'Tesler’s law (conservation of complexity) says that for any task there is an irreducible amount of complexity. What design implication follows?',
    correct: 'You can decide whether the system or the user absorbs the remaining complexity, but you cannot make it vanish',
    wrong: [
      miss(
        'If you design well enough, all complexity can be eliminated entirely',
        'That is exactly what Tesler’s law denies: a core of complexity is irreducible and must be carried by someone.',
        'The law says some complexity is irreducible; it cannot be erased, only moved.',
      ),
      miss(
        'Complexity should always be pushed onto the user to keep the system simple',
        'The law is neutral about where complexity goes; good UX usually has the system absorb it, not the user.',
        'The point is choosing who bears it; defaulting it onto users is poor design, not the law.',
      ),
      miss(
        'Complexity only exists in the visual design, not the underlying task',
        'Tesler’s law is about inherent task complexity, not merely visual styling.',
        'It concerns the task’s essential complexity, not surface appearance.',
      ),
    ],
    lesson:
      'Tesler’s law (the law of conservation of complexity) holds that every process has irreducible complexity that must be absorbed somewhere. The design choice is whether the system handles it (smart defaults, automation) or shoves it onto the user. Good UX usually means the product, not the person, carries that weight.',
    source,
    generated: true,
  },
  {
    id: 7606025,
    chapter: 'Wireframes and Interaction Structure',
    title: 'Doherty threshold',
    prompt:
      'The Doherty threshold suggests that keeping interactive system response under roughly 400 milliseconds:',
    correct: 'Keeps users engaged and productive because neither the person nor the computer waits on the other',
    wrong: [
      miss(
        'Is required by WCAG for accessibility conformance',
        'The Doherty threshold is a productivity/engagement guideline from HCI research, not a WCAG accessibility requirement.',
        'It is a responsiveness heuristic, not a conformance criterion.',
      ),
      miss(
        'Means slower responses over 400ms always make users more patient',
        'The opposite holds: crossing ~400ms tends to break flow and reduce engagement, not build patience.',
        'Going past the threshold hurts engagement; it does not cultivate patience.',
      ),
      miss(
        'Only applies to page load and never to in-app interactions',
        'It concerns interactive system response generally, including in-app actions, not just initial page load.',
        'The threshold is about interaction responsiveness broadly, not load time alone.',
      ),
    ],
    lesson:
      'The Doherty threshold (about 400ms) is the point below which system response feels effectively instantaneous, sustaining attention and productivity. When you cannot respond that fast, use perceived-performance tactics — skeletons, optimistic UI, progress feedback — to keep the interaction feeling responsive.',
    source,
    generated: true,
  },
  {
    id: 7606026,
    chapter: 'Wireframes and Interaction Structure',
    title: 'Serial position effect',
    prompt:
      'You want the two most important navigation items to be remembered. Where does the serial position effect suggest placing them?',
    correct: 'At the very beginning and the very end of the list, where recall is strongest',
    wrong: [
      miss(
        'Both squarely in the middle of the list for balance',
        'The middle is exactly where recall is weakest; placing key items there hurts memorability.',
        'The serial position effect penalizes the middle, not the ends.',
      ),
      miss(
        'Wherever there is the most empty space, regardless of order',
        'Whitespace affects scanning but does not override the position-based recall pattern; order still matters most for memory.',
        'The effect is about position in the sequence, not surrounding space.',
      ),
      miss(
        'Randomly, since position has no measurable effect on recall',
        'Decades of memory research show position strongly affects recall (primacy and recency); it is not random.',
        'Position demonstrably shapes recall; the first and last spots win.',
      ),
    ],
    lesson:
      'The serial position effect combines primacy (items at the start are recalled well) and recency (items at the end are recalled well), leaving the middle weakest. Placing your most important nav items first and last — and lower-priority ones in the middle — aligns with how memory works.',
    source,
    generated: true,
  },
  {
    id: 7606027,
    chapter: 'Wireframes and Interaction Structure',
    title: 'Aesthetic-usability effect',
    prompt:
      'In testing, users rate a polished prototype as "easier to use" even when it has the same task-completion problems as an ugly one. What is happening, and why does it matter for testing?',
    correct: 'The aesthetic-usability effect — attractive design biases perceived usability, so beauty can mask real usability problems in tests',
    wrong: [
      miss(
        'The polished prototype is genuinely more usable, so there is nothing to watch for',
        'The task data shows equal real problems; the higher rating reflects perception biased by aesthetics, not actual usability.',
        'Equal task failures mean it is not actually easier; the rating is biased.',
      ),
      miss(
        'Aesthetics have no effect on perceived usability in any study',
        'Research since 1995 shows attractive interfaces are consistently perceived as more usable; the effect is well documented.',
        'The effect is real and replicated; perception is influenced by beauty.',
      ),
      miss(
        'It means you should always test only with ugly prototypes',
        'The lesson is to weigh behavior over impressions, not to make everything ugly; fidelity choices serve the question.',
        'The fix is trusting behavioral data, not banning visual polish.',
      ),
    ],
    lesson:
      'The aesthetic-usability effect means users perceive attractive designs as more usable and may forgive or overlook minor problems. In testing this is a trap: pretty prototypes can earn inflated satisfaction scores, so weight observed task behavior over self-reported impressions.',
    source,
    generated: true,
  },
  {
    id: 7606028,
    chapter: 'Wireframes and Interaction Structure',
    title: 'Signifier vs affordance',
    prompt:
      'In Don Norman’s refined terminology, a flat colored rectangle that the system will accept a tap on has the affordance of being tappable, but users keep missing it. What is most likely missing?',
    correct: 'A signifier — a perceivable cue (shadow, label, shape) that communicates the affordance to the user',
    wrong: [
      miss(
        'A second affordance layered on top of the first',
        'The action is already possible (the affordance exists); what is missing is the perceivable cue that signals it.',
        'The tap works; users just cannot tell it does — that is a signifier gap.',
      ),
      miss(
        'A keyboard trap to keep focus on the button',
        'A keyboard trap is an accessibility defect, not a way to communicate that an element is interactive.',
        'That term is an a11y failure, unrelated to signaling tappability.',
      ),
      miss(
        'More whitespace around the rectangle',
        'Spacing may help slightly, but the core issue is the absence of a signifier that the element is interactive.',
        'Whitespace alone does not say "tap me"; a signifier does.',
      ),
    ],
    lesson:
      'Norman distinguishes an affordance (what an object allows you to do) from a signifier (the perceivable cue that tells you so). A tappable element with no visual signal has the affordance but lacks the signifier; adding shadow, color, a label, or button shape makes the affordance discoverable.',
    source,
    generated: true,
  },
  {
    id: 7606029,
    chapter: 'Wireframes and Interaction Structure',
    title: 'Jakob’s law',
    prompt:
      'A team invents a wildly novel shopping-cart interaction that ignores every e-commerce convention. Per Jakob’s law, what is the main risk?',
    correct: 'Users spend most of their time on other sites, so they expect your site to work like the ones they already know',
    wrong: [
      miss(
        'Novel interactions are always more accessible than conventional ones',
        'Novelty has no inherent accessibility benefit; departing from familiar patterns often raises the learning burden.',
        'Jakob’s law is about familiarity, not a claim that novelty aids accessibility.',
      ),
      miss(
        'Users prefer relearning core interactions on every new site',
        'Relearning is friction; Jakob’s law says users transfer expectations from other sites and dislike surprises in core flows.',
        'Familiar conventions reduce effort; relearning is a cost, not a delight.',
      ),
      miss(
        'Conventions only matter for visual styling, not interaction behavior',
        'Jakob’s law applies to interaction patterns and mental models, not just styling.',
        'It is about how things work, not merely how they look.',
      ),
    ],
    lesson:
      'Jakob’s law states that users spend most of their time on other sites, so they prefer your product to work the way those familiar ones do. Innovating on the core, conventional parts of a flow (cart, checkout) usually raises friction; save novelty for where it adds real value.',
    source,
    generated: true,
  },
  {
    id: 7606030,
    chapter: 'Wireframes and Interaction Structure',
    title: 'Consistency and standards',
    prompt:
      'Within one app, the primary action button is green on one screen, blue on another, and a text link on a third. Which Nielsen heuristic is most violated?',
    correct: 'Consistency and standards — users should not have to wonder whether different things mean the same thing',
    wrong: [
      miss(
        'Help and documentation — provide guidance when needed',
        'Help and documentation is about supporting users who get stuck, not about inconsistent button treatments.',
        'The issue is that the same action looks different, not missing help text.',
      ),
      miss(
        'Visibility of system status — keep users informed of what is happening',
        'System status concerns feedback about ongoing processes, not the inconsistent styling of the same action.',
        'No status feedback is missing; the same action just looks different each time.',
      ),
      miss(
        'Error prevention — stop mistakes before they happen',
        'While inconsistency can cause errors, the direct heuristic at stake is consistency of presentation and behavior.',
        'The named, most-direct heuristic here is consistency, not error prevention.',
      ),
    ],
    lesson:
      '"Consistency and standards" requires that the same action, word, or component behaves and looks the same throughout the product (internal consistency) and follows platform conventions (external consistency). Three different primary-button treatments force users to relearn the same action repeatedly.',
    source,
    generated: true,
  },
  // ---- Chapter 5: Prototyping and Usability Testing ----
  {
    id: 7606031,
    chapter: 'Prototyping and Usability Testing',
    title: 'SUS scoring mechanics',
    prompt:
      'The System Usability Scale has 10 items that alternate positive and negative wording. How is a raw item sum converted to the final 0–100 score?',
    correct: 'Normalize each item, sum the contributions, and multiply by 2.5',
    wrong: [
      miss(
        'Average the 10 raw 1–5 responses and call that the score out of 5',
        'SUS is not a simple average of raw responses; items are normalized (accounting for reverse wording) and the sum is scaled by 2.5.',
        'You must handle the alternating wording and scale to 0–100, not average 1–5.',
      ),
      miss(
        'Add the 10 raw responses and report that number directly',
        'Raw sums ignore the reverse-scored negative items and never reach the 0–100 range; the ×2.5 step is required.',
        'Negative items must be reversed first, and the total must be scaled.',
      ),
      miss(
        'Count how many users scored above 3 and report that percentage',
        'SUS is not a count of users above a threshold; it is a per-respondent 0–100 score computed from all 10 items.',
        'The score comes from the item math, not a tally of users.',
      ),
    ],
    lesson:
      'SUS scoring handles its alternating wording: for odd (positive) items subtract 1 from the response, for even (negative) items subtract the response from 5, sum those 10 contributions (0–40), then multiply by 2.5 for a 0–100 score. The number is normalized, not a percentage, and the cross-study average is ~68.',
    source,
    generated: true,
  },
  {
    id: 7606032,
    chapter: 'Prototyping and Usability Testing',
    title: 'Time on task interpretation',
    prompt:
      'Across two designs, task success is identical, but median time on task drops from 95 seconds to 40 seconds in version B. What does this most directly indicate?',
    correct: 'Version B is more efficient for this task, even though both let users succeed',
    wrong: [
      miss(
        'Version B is less usable because users spent less time exploring it',
        'For a goal-directed task, less time at equal success means more efficiency, not worse usability.',
        'Shorter time with equal success is a win, not a loss, for task efficiency.',
      ),
      miss(
        'The two versions are identical in usability because success rates match',
        'Success rate and efficiency are different metrics; equal success can hide a large efficiency gap, which time on task reveals.',
        'Same success does not mean same experience; time captures a different dimension.',
      ),
      miss(
        'Version B must have higher satisfaction, which time on task proves',
        'Time on task is a behavioral efficiency measure and does not directly prove a satisfaction (attitudinal) difference.',
        'Time measures efficiency, not how users felt; use a separate satisfaction measure.',
      ),
    ],
    lesson:
      'Time on task is an efficiency metric: when success rates are equal, the design that lets users finish faster is generally more efficient. It complements success rate (effectiveness) and satisfaction (attitude) — the three classic usability dimensions — and each can move independently.',
    source,
    generated: true,
  },
  {
    id: 7606033,
    chapter: 'Prototyping and Usability Testing',
    title: 'Error rate vs success rate',
    prompt:
      'A user eventually completes a task but makes four wrong selections and backtracks twice along the way. A pure binary success rate would record this as:',
    correct: 'A success, which is why error rate is tracked separately to capture the friction along the way',
    wrong: [
      miss(
        'A failure, because any error during a task counts as a failed task',
        'Binary task success records completion regardless of errors; the task was completed, so it counts as a success.',
        'Completion equals success in a binary measure, even if the path was rough.',
      ),
      miss(
        'Both a success and a failure, since the metric is undefined here',
        'Binary success is well defined as completed-or-not; this case is a clear completion, recorded as success.',
        'The metric is not ambiguous; the user did finish.',
      ),
      miss(
        'Neither, because errors make the data invalid',
        'Errors do not invalidate the data; they are precisely what a separate error-rate metric is designed to capture.',
        'Errors are signal to record, not a reason to discard the session.',
      ),
    ],
    lesson:
      'Binary task success records only whether the user finished, so a rocky-but-completed task still counts as a success. Error rate (wrong actions, backtracks, recoveries) is tracked separately to capture the friction that success rate alone hides — together they give a fuller usability picture.',
    source,
    generated: true,
  },
  {
    id: 7606034,
    chapter: 'Prototyping and Usability Testing',
    title: 'Within vs between subjects',
    prompt:
      'You want to compare two checkout designs but worry that participants who try design A first will learn the task and do better on design B. Which study setup mitigates this learning/order effect?',
    correct: 'A between-subjects design where each participant sees only one design (or a within-subjects design with counterbalanced order)',
    wrong: [
      miss(
        'A within-subjects design where everyone always sees A first, then B',
        'Always showing A then B bakes in the order/learning effect you are trying to avoid; that is the problem, not the fix.',
        'A fixed order is exactly what creates the learning bias; you must split or counterbalance.',
      ),
      miss(
        'Testing only design A and assuming B performs the same',
        'Never testing B gives you no comparison at all; you cannot conclude anything about B’s relative performance.',
        'You cannot compare two designs by testing only one of them.',
      ),
      miss(
        'Increasing the number of tasks per participant to dilute the effect',
        'Adding tasks does not remove the systematic order advantage; you need separate groups or counterbalancing.',
        'More tasks does not cancel a directional order effect; design structure does.',
      ),
    ],
    lesson:
      'In a between-subjects design each participant sees only one condition, eliminating learning carryover but requiring more participants. A within-subjects design reuses each person across conditions (more efficient, controls individual differences) but must counterbalance order to neutralize learning and fatigue effects.',
    source,
    generated: true,
  },
  {
    id: 7606035,
    chapter: 'Prototyping and Usability Testing',
    title: 'Pilot session value',
    prompt:
      'Why do experienced researchers run a pilot session before the real usability study?',
    correct: 'To catch broken prototype links, confusing task wording, and timing problems before they ruin real sessions',
    wrong: [
      miss(
        'To collect the most important findings, since the pilot is the real data',
        'The pilot is a dry run to debug the study itself; its data is usually discarded, not treated as the key findings.',
        'A pilot tests the test, not the product; its results are not the headline data.',
      ),
      miss(
        'To increase the sample size for statistical significance',
        'A pilot is one rehearsal session; it is about validating the protocol, not boosting sample size or significance.',
        'Pilots refine the method; they are not added to the analysis for power.',
      ),
      miss(
        'To let the participant practice so they perform better in the study',
        'Pilots use a separate person and aim to fix the study, not to coach the eventual participants to higher scores.',
        'The point is debugging the script and setup, not training participants.',
      ),
    ],
    lesson:
      'A pilot (dry run) with one stand-in participant surfaces broken prototype hotspots, ambiguous or leading task wording, technical glitches, and sessions that run long — problems that would otherwise contaminate or waste real sessions. Its data is typically discarded; its value is a clean, debugged protocol.',
    source,
    generated: true,
  },
  {
    id: 7606036,
    chapter: 'Prototyping and Usability Testing',
    title: 'Unmoderated test tradeoffs',
    prompt:
      'A team runs an unmoderated remote usability test with 60 participants overnight. What is the key tradeoff versus moderated testing?',
    correct: 'You gain scale and speed but lose the ability to ask live follow-up questions when something unexpected happens',
    wrong: [
      miss(
        'You gain the ability to probe reasoning in real time but cannot reach many people',
        'That describes moderated testing; unmoderated trades away live probing in exchange for reach.',
        'You have the two methods reversed — live probing belongs to moderated.',
      ),
      miss(
        'Unmoderated tests are strictly better and have no downsides',
        'They sacrifice depth, the ability to clarify confusion, and to chase unexpected behavior — real downsides.',
        'Scale comes at the cost of depth; there is a genuine tradeoff.',
      ),
      miss(
        'Unmoderated tests can only be run in a physical lab',
        'Unmoderated tests are typically remote and tool-based; they are not lab-bound.',
        'The method is usually remote, not confined to a lab.',
      ),
    ],
    lesson:
      'Unmoderated testing scales cheaply and fast and reduces moderator bias, but no facilitator is present to clarify a confusing task or probe a surprising behavior. Choose it for well-defined tasks and quantitative signal; choose moderated when you need to understand the "why" behind unexpected actions.',
    source,
    generated: true,
  },
  {
    id: 7606037,
    chapter: 'Prototyping and Usability Testing',
    title: 'Severity rating dimensions',
    prompt:
      'Nielsen’s usability severity rating combines several factors. Beyond frequency (how many users hit it) and impact (how badly it hurts), what third factor is included?',
    correct: 'Persistence — whether users can overcome the problem once they know it, or keep hitting it repeatedly',
    wrong: [
      miss(
        'The cost to engineering of fixing the issue',
        'Fix cost informs prioritization but is not part of the severity rating, which is about user impact factors.',
        'Effort to fix is a prioritization input, not a severity dimension.',
      ),
      miss(
        'Whether a stakeholder personally noticed the issue',
        'Stakeholder attention is irrelevant to severity, which is grounded in how the problem affects users.',
        'Severity is about user impact, not who on the team flagged it.',
      ),
      miss(
        'The visual attractiveness of the affected screen',
        'Aesthetics are not a severity factor; severity weighs impact, frequency, and persistence of the problem.',
        'How pretty the screen is does not change how severe the usability problem is.',
      ),
    ],
    lesson:
      'Nielsen’s severity scale weighs frequency (how common), impact (how hard to overcome when it occurs), and persistence (a one-time hurdle or a repeated nuisance). High-frequency, high-impact, persistent problems are catastrophic and fixed first; cosmetic, rare, easily-overcome issues rank lowest. Fix cost is a separate prioritization lever.',
    source,
    generated: true,
  },
  {
    id: 7606038,
    chapter: 'Prototyping and Usability Testing',
    title: 'Concurrent vs retrospective think-aloud',
    prompt:
      'In a precise timing study, you worry that asking users to narrate while they work will slow them down and distort time-on-task. Which think-aloud variant avoids that?',
    correct: 'Retrospective think-aloud, where the user completes the task silently and then narrates afterward, often over a recording',
    wrong: [
      miss(
        'Concurrent think-aloud, where the user narrates while performing the task',
        'Concurrent narration is exactly what slows users and inflates time on task; it is the source of the distortion, not the fix.',
        'Talking while working is the cause of the timing distortion you want to avoid.',
      ),
      miss(
        'A first-click test of the opening screen',
        'A first-click test measures one initial choice; it does not provide the verbal reasoning a think-aloud captures.',
        'That method answers a different question and yields no narration.',
      ),
      miss(
        'A System Usability Scale questionnaire after the task',
        'SUS yields a numeric attitude score, not the moment-by-moment reasoning a think-aloud provides.',
        'A questionnaire is not a think-aloud; it gives a score, not narration.',
      ),
    ],
    lesson:
      'Concurrent think-aloud captures reasoning live but can slow users and inflate time-on-task. Retrospective think-aloud keeps the task itself clean for timing, then has the user narrate afterward (often reviewing a recording) — trading some memory accuracy for undistorted behavioral metrics.',
    source,
    generated: true,
  },
  {
    id: 7606039,
    chapter: 'Prototyping and Usability Testing',
    title: 'Prototype fidelity choice',
    prompt:
      'You need to validate the basic structure and flow of a brand-new feature quickly and cheaply, before committing to visuals. Which prototype fidelity fits best?',
    correct: 'A low-fidelity prototype (paper or grayscale clickable), because it tests structure fast and invites honest feedback',
    wrong: [
      miss(
        'A pixel-perfect high-fidelity prototype with final visuals and copy',
        'High fidelity is slow and expensive to make and tends to draw feedback toward polish, not the structural questions you need answered now.',
        'Final visuals waste effort and steer feedback to color, not flow.',
      ),
      miss(
        'No prototype — ship the feature to production and watch analytics',
        'Shipping untested skips the cheap validation step and risks building the wrong structure for real users.',
        'You can learn far more cheaply before shipping; that is the point of a prototype.',
      ),
      miss(
        'A fully coded production build behind a feature flag',
        'A coded build is the most expensive way to test structure and defeats the purpose of validating before committing.',
        'Writing production code first is the opposite of cheap, fast structural validation.',
      ),
    ],
    lesson:
      'Match fidelity to the question. Low-fidelity prototypes test structure and flow quickly, cost little to change, and signal "not finished" so reviewers critique substance rather than pixels. Save high fidelity for validating visual design, micro-interactions, and final copy once the structure is settled.',
    source,
    generated: true,
  },
  // ---- Chapter 6: Accessibility and Inclusive Design ----
  {
    id: 7606040,
    chapter: 'Accessibility and Inclusive Design',
    title: 'WCAG 2.2 new criteria',
    prompt:
      'WCAG 2.2 added several new success criteria. Which of these is one of them?',
    correct: 'Dragging Movements (2.5.7) — functionality using dragging must have a single-pointer alternative',
    wrong: [
      miss(
        'Color contrast of 4.5:1 for normal text (1.4.3)',
        'Contrast (1.4.3) has existed since WCAG 2.0; it is not new in 2.2.',
        'That criterion is long-standing, not one of the 2.2 additions.',
      ),
      miss(
        'Keyboard operability (2.1.1)',
        'Keyboard operability (2.1.1) dates back to WCAG 2.0; it is foundational, not new in 2.2.',
        'Keyboard access is original to WCAG, not a 2.2 addition.',
      ),
      miss(
        'Non-text content alternatives (1.1.1)',
        'Text alternatives (1.1.1) is a Level A criterion from WCAG 2.0, not new in 2.2.',
        'Alt-text requirements predate 2.2 by many years.',
      ),
    ],
    lesson:
      'WCAG 2.2 (2023) added nine new success criteria, including Focus Not Obscured (2.4.11), Dragging Movements (2.5.7), Target Size Minimum (2.5.8), Consistent Help (3.2.6), Redundant Entry (3.3.7), and Accessible Authentication (3.3.8). Long-standing criteria like contrast and keyboard operability come from earlier versions.',
    source,
    generated: true,
  },
  {
    id: 7606041,
    chapter: 'Accessibility and Inclusive Design',
    title: 'Accessible Authentication',
    prompt:
      'WCAG 2.2’s Accessible Authentication (Minimum, SC 3.3.8, AA) is designed to remove which barrier from login?',
    correct: 'Requiring a cognitive function test (like solving a puzzle or transcribing characters) with no accessible alternative',
    wrong: [
      miss(
        'Requiring users to choose a password at least eight characters long',
        'A length requirement is not a cognitive function test in the SC’s sense; the criterion targets memory/puzzle-style barriers, not password length.',
        'The barrier is cognitive-test hurdles, not minimum password length.',
      ),
      miss(
        'Allowing users to log in with biometric methods like a fingerprint',
        'Biometrics are an accepted accessible alternative the criterion encourages, not a barrier it removes.',
        'That is a solution the SC permits, not the problem it forbids.',
      ),
      miss(
        'Showing a contrast ratio below 3:1 on the login button',
        'Low contrast is governed by contrast criteria (1.4.3/1.4.11), not by the authentication criterion.',
        'Contrast is a different SC; this one is about cognitive-test logins.',
      ),
    ],
    lesson:
      'SC 3.3.8 Accessible Authentication (Minimum) says no step of authentication may rely on a cognitive function test — remembering a password, solving a puzzle, transcribing characters — unless an accessible alternative exists. Allowing password managers, copy-paste, or biometrics satisfies it; users with cognitive disabilities should not be locked out.',
    source,
    generated: true,
  },
  {
    id: 7606042,
    chapter: 'Accessibility and Inclusive Design',
    title: 'Redundant Entry',
    prompt:
      'A multi-step booking form makes the user retype their email and address on a later step they already entered earlier in the same process. WCAG 2.2’s Redundant Entry (3.3.7) requires that the design instead:',
    correct: 'Auto-populate the earlier information or let the user select it, rather than re-enter it',
    wrong: [
      miss(
        'Display the earlier information larger so it is easier to retype',
        'The criterion is about not making users re-enter the data at all, not about making retyping more legible.',
        'It eliminates re-entry; it does not optimize the act of retyping.',
      ),
      miss(
        'Require the user to confirm the data by typing it a second time',
        'Forcing a second entry is exactly the redundant entry the criterion is meant to remove.',
        'Re-typing for confirmation is the very burden the SC forbids.',
      ),
      miss(
        'Encrypt the earlier information so it cannot be reused',
        'Encryption is a security measure unrelated to reusing already-entered data within a process for the user’s benefit.',
        'The SC is about reusing prior input, not about encrypting it.',
      ),
    ],
    lesson:
      'SC 3.3.7 Redundant Entry (Level A) requires that information a user already entered in a multi-step process be auto-populated or available to select, rather than entered again — with narrow exceptions (e.g., re-entering a password for security). It reduces memory and motor burden, helping everyone but especially users with cognitive or mobility disabilities.',
    source,
    generated: true,
  },
  {
    id: 7606043,
    chapter: 'Accessibility and Inclusive Design',
    title: 'Focus Not Obscured',
    prompt:
      'A sticky cookie banner covers the bottom of the screen, and when a keyboard user tabs to a field there, the focused field is completely hidden behind the banner. Which WCAG 2.2 criterion does this fail?',
    correct: 'Focus Not Obscured (Minimum), SC 2.4.11 — a focused component must not be entirely hidden by author content',
    wrong: [
      miss(
        'Contrast Minimum, SC 1.4.3 — text must meet a contrast ratio',
        'Contrast concerns color legibility, not whether a focused element is hidden behind overlapping content.',
        'Nothing about color is failing; the field is physically covered.',
      ),
      miss(
        'Resize Text, SC 1.4.4 — text must scale to 200% without loss',
        'Resize text is about zooming text, not about sticky content obscuring the keyboard focus indicator.',
        'No zoom problem is described; the issue is the focused element being hidden.',
      ),
      miss(
        'Pointer Gestures, SC 2.5.1 — multipoint gestures need alternatives',
        'Pointer gestures concern complex touch gestures, not a keyboard-focused element hidden by a banner.',
        'This is a keyboard-focus visibility problem, not a gesture one.',
      ),
    ],
    lesson:
      'SC 2.4.11 Focus Not Obscured (Minimum, AA) requires that when an element receives keyboard focus, author-created content like sticky headers, footers, or banners must not entirely hide it. Otherwise keyboard users cannot see where they are. The enhanced version (2.4.12, AAA) forbids any obscuring at all.',
    source,
    generated: true,
  },
  {
    id: 7606044,
    chapter: 'Accessibility and Inclusive Design',
    title: 'Reflow at 320px',
    prompt:
      'WCAG 2.2 SC 1.4.10 Reflow requires that content reflow without two-dimensional scrolling down to what equivalent width (for vertically scrolling content)?',
    correct: '320 CSS pixels, equivalent to a 1280px viewport zoomed to 400%',
    wrong: [
      miss(
        '768 CSS pixels, the common tablet breakpoint',
        '768px is a popular tablet breakpoint, but the Reflow criterion specifies 320 CSS pixels, not 768.',
        'The SC fixes 320px; 768 is just a familiar design breakpoint.',
      ),
      miss(
        '24 CSS pixels',
        '24px is the Target Size minimum (2.5.8), an entirely different criterion, not the Reflow width.',
        'You are recalling target size; Reflow is about a much larger viewport width.',
      ),
      miss(
        '1280 CSS pixels, the full desktop width',
        '1280px is the starting viewport; the criterion is that content reflows down to the 320px equivalent at 400% zoom.',
        'That is the pre-zoom width, not the reflow target the SC names.',
      ),
    ],
    lesson:
      'SC 1.4.10 Reflow (AA) requires content to reflow without horizontal scrolling at a width equivalent to 320 CSS pixels (1280px at 400% zoom) for vertical content, and 256 CSS pixels of height for horizontal content. It is what makes high-zoom and small-screen use work, and it relates to but is stricter than 1.4.4 Resize Text (200%).',
    source,
    generated: true,
  },
  {
    id: 7606045,
    chapter: 'Accessibility and Inclusive Design',
    title: 'Decorative image alt text',
    prompt:
      'A purely decorative flourish image sits beside a heading and adds no information. What is the correct accessibility treatment?',
    correct: 'Give it an empty alt attribute (alt="") so assistive technology skips it',
    wrong: [
      miss(
        'Write a detailed alt description of the decorative flourish',
        'Describing a purely decorative image adds audible clutter for screen-reader users with no informational benefit.',
        'Decorative images should be skipped, not narrated in detail.',
      ),
      miss(
        'Omit the alt attribute entirely from the img tag',
        'Omitting alt can cause some screen readers to announce the image file name instead of skipping it; an empty alt is required.',
        'No alt attribute is not the same as an empty one; the file name may be read aloud.',
      ),
      miss(
        'Add the flourish as a foreground content image with a caption',
        'Promoting decoration to captioned content misrepresents it as informative and adds noise.',
        'A decorative element should recede, not be elevated to captioned content.',
      ),
    ],
    lesson:
      'For purely decorative images, use a null/empty alt attribute (alt="") so assistive technology ignores them. Omitting the attribute risks the screen reader announcing the file name; a verbose description adds clutter. Informative images, by contrast, need concise, meaningful alt text describing their content or function.',
    source,
    generated: true,
  },
  {
    id: 7606046,
    chapter: 'Accessibility and Inclusive Design',
    title: 'Heading structure for screen readers',
    prompt:
      'A page styles text to look like headings using only large bold font, with no real <h1>–<h6> markup. Why does this hurt screen-reader users?',
    correct: 'Screen-reader users navigate by heading structure, so visual-only headings give them no way to jump between sections',
    wrong: [
      miss(
        'Bold text is impossible for screen readers to announce at all',
        'Screen readers can read bold text; the problem is the missing semantic heading structure for navigation, not that text is unreadable.',
        'The text is readable; what is missing is the navigable heading hierarchy.',
      ),
      miss(
        'Large fonts always fail the color-contrast requirement',
        'Font size relates to contrast thresholds but does not by itself cause a contrast failure; the issue here is missing semantic markup.',
        'This is a structure/semantics problem, not a contrast problem.',
      ),
      miss(
        'Visual headings break the 8-point spacing grid',
        'Spacing grids are a layout convention unrelated to whether headings are semantically marked up for assistive technology.',
        'The grid is irrelevant; the failure is the absent heading semantics.',
      ),
    ],
    lesson:
      'Screen-reader users rely on a proper heading hierarchy (h1–h6) to scan and jump between page sections, much like a sighted user skims bold titles. Faking headings with styling alone removes that structure, forcing assistive-technology users to wade through everything linearly. Real semantic markup is part of being "Perceivable" and "Robust."',
    source,
    generated: true,
  },
  {
    id: 7606047,
    chapter: 'Accessibility and Inclusive Design',
    title: 'AAA is not the default bar',
    prompt:
      'A stakeholder demands every screen hit WCAG Level AAA everywhere. Why is this usually the wrong target?',
    correct: 'AA is the standard legal and practical conformance bar; AAA cannot be met for all content and is recommended as an aspiration, not a blanket requirement',
    wrong: [
      miss(
        'AAA is actually weaker than AA, so it is too low a bar',
        'AAA is stricter than AA, not weaker; the issue is that it is impractical as a universal mandate, not that it is too lenient.',
        'You have the levels reversed — AAA is the most demanding.',
      ),
      miss(
        'AAA does not exist in WCAG; only A and AA are defined',
        'WCAG defines three levels: A, AA, and AAA. AAA exists; it is simply not the standard compliance target.',
        'There are three levels; AAA is real, just not the default bar.',
      ),
      miss(
        'Meeting AA automatically means you have also met AAA',
        'AAA adds stricter criteria beyond AA (e.g., 7:1 contrast); meeting AA does not satisfy AAA.',
        'AAA layers additional, harder requirements on top of AA.',
      ),
    ],
    lesson:
      'WCAG has three conformance levels: A, AA, and AAA. AA is the widely adopted legal and practical target; the W3C itself notes AAA cannot be satisfied for all content. Chasing AAA everywhere wastes effort and is often impossible — aim for solid AA and apply AAA selectively where it matters most.',
    source,
    generated: true,
  },
  {
    id: 7606048,
    chapter: 'Accessibility and Inclusive Design',
    title: 'Non-text contrast',
    prompt:
      'A form’s input fields are outlined in a very light gray that is hard to distinguish from the white background. Which WCAG criterion addresses the contrast of such UI component boundaries?',
    correct: 'Non-text Contrast (SC 1.4.11), which requires 3:1 contrast for UI components and meaningful graphics',
    wrong: [
      miss(
        'Contrast Minimum (SC 1.4.3), which requires 4.5:1 for the field outlines',
        'SC 1.4.3 covers text contrast at 4.5:1; the contrast of non-text UI boundaries is governed by SC 1.4.11 at 3:1.',
        'Text uses 1.4.3; component boundaries fall under non-text contrast.',
      ),
      miss(
        'Target Size (SC 2.5.8), which requires fields to be 24×24 px',
        'Target size concerns the tappable area, not the contrast of the field’s visible boundary against its background.',
        'That SC sizes hit areas; it says nothing about boundary contrast.',
      ),
      miss(
        'Reflow (SC 1.4.10), which requires content to reflow at 320px',
        'Reflow concerns layout at narrow widths/high zoom, not the contrast of a field outline.',
        'Reflow is about layout adaptation, not contrast of borders.',
      ),
    ],
    lesson:
      'SC 1.4.11 Non-text Contrast (AA) requires at least 3:1 contrast for the visual boundaries of active UI components (like input borders and focus indicators) and for meaningful graphical objects. Text has its own thresholds (4.5:1 / 3:1 under 1.4.3); barely-visible field outlines fail 1.4.11.',
    source,
    generated: true,
  },
  {
    id: 7606049,
    chapter: 'Accessibility and Inclusive Design',
    title: 'Logical focus order',
    prompt:
      'A page’s tab order jumps from the header to the footer, then back up to the main form, confusing keyboard users. Which WCAG criterion is most directly at stake?',
    correct: 'Focus Order (SC 2.4.3) — the navigation order must preserve meaning and operability',
    wrong: [
      miss(
        'Use of Color (SC 1.4.1) — color must not be the only means of conveying information',
        'Use of color concerns conveying meaning by color alone; this is about the sequence in which focus moves.',
        'No color-only signal is described; the problem is the order of focus.',
      ),
      miss(
        'Bypass Blocks (SC 2.4.1) — provide a way to skip repeated content',
        'Bypass blocks is about skip links past repeated navigation; here the issue is a scrambled overall focus sequence.',
        'That SC adds skip links; it does not fix an illogical tab order.',
      ),
      miss(
        'Label in Name (SC 2.5.3) — the accessible name must contain the visible label',
        'Label in Name concerns matching visible text to the accessible name, unrelated to the sequence of focus movement.',
        'That is about naming controls, not the order focus visits them.',
      ),
    ],
    lesson:
      'SC 2.4.3 Focus Order (Level A) requires that when users navigate sequentially (e.g., by Tab), the focus order preserves meaning and operability — typically matching the visual/reading order. A focus order that leaps around disorients keyboard and screen-reader users even when every element is individually reachable.',
    source,
    generated: true,
  },
  // ---- Chapter 7: Product Collaboration and Handoff ----
  {
    id: 7606050,
    chapter: 'Product Collaboration and Handoff',
    title: '8-point spacing grid',
    prompt:
      'A design system specs spacing as multiples of 8 (8, 16, 24, 32…). Beyond visual rhythm, what practical benefit does the 8-point grid give engineering?',
    correct: 'It scales cleanly across common screen densities and gives design and code a shared, predictable spacing scale',
    wrong: [
      miss(
        'It guarantees WCAG contrast conformance automatically',
        'A spacing grid governs layout rhythm, not color contrast; it does nothing for WCAG contrast ratios.',
        'Spacing and contrast are unrelated; the grid does not address color.',
      ),
      miss(
        'It lets each engineer pick any spacing value they personally prefer',
        'The grid exists to constrain spacing to a shared scale, the opposite of ad-hoc per-engineer values.',
        'The point is one shared scale, not individual freedom to choose any value.',
      ),
      miss(
        'It removes the need for responsive breakpoints entirely',
        'An 8-point grid sets a spacing scale; responsive layout still needs breakpoints to adapt across screen sizes.',
        'A spacing scale and breakpoints solve different problems; one does not replace the other.',
      ),
    ],
    lesson:
      'The 8-point grid sizes and spaces elements in multiples of 8, which divides evenly across common resolutions and pixel densities (1x, 2x, 3x), avoiding sub-pixel blur. Encoded as spacing tokens, it gives designers and engineers one predictable, shared scale, cutting redline disputes and inconsistency.',
    source,
    generated: true,
  },
  {
    id: 7606051,
    chapter: 'Product Collaboration and Handoff',
    title: 'Primitive vs semantic tokens',
    prompt:
      'A design system defines blue-500 = #2563EB (a primitive token) and color-action = blue-500 (a semantic token). Why route components through the semantic token instead of the primitive?',
    correct: 'Components reference intent (color-action), so the team can change which blue means "action" in one place without touching every component',
    wrong: [
      miss(
        'Semantic tokens render faster than primitive tokens at runtime',
        'Token aliasing has negligible runtime cost; the benefit is maintainability and intent, not rendering speed.',
        'The advantage is a layer of intent, not performance.',
      ),
      miss(
        'Primitive tokens are inaccessible and semantic tokens are required by WCAG',
        'Neither token type is mandated by WCAG; the distinction is about meaning and maintainability, not conformance.',
        'WCAG does not require this pattern; it is a system-design convention.',
      ),
      miss(
        'Semantic tokens let each designer invent new hex values per screen',
        'Semantic tokens enforce shared intent and reduce ad-hoc values; they are the opposite of per-screen invention.',
        'They constrain choices to shared meanings, not free per-screen hexes.',
      ),
    ],
    lesson:
      'Primitive (base) tokens name raw values (blue-500 = #2563EB); semantic (alias) tokens name intent (color-action = blue-500). Components reference the semantic layer, so rebranding or theming means re-pointing a few semantic tokens rather than editing every component — the indirection is what makes a token system maintainable and themeable.',
    source,
    generated: true,
  },
  // ---- Chapter 8: Portfolio Case Study ----
  {
    id: 7606052,
    chapter: 'Portfolio Case Study',
    title: 'Quantifying impact honestly',
    prompt:
      'A portfolio case study claims "my redesign increased conversions." A hiring panel will find which version most credible?',
    correct: '"Checkout conversion rose from 61% to 74% over six weeks in an A/B test against the old flow"',
    wrong: [
      miss(
        '"The redesign made the product dramatically more beautiful and modern"',
        'Adjectives about beauty are taste claims with no evidence of impact; panels want a measured outcome and a comparison.',
        'Beauty is subjective; an impact claim needs a number and a baseline.',
      ),
      miss(
        '"Everyone on the team agreed the new design felt much better"',
        'Internal agreement is not user evidence; "felt better" has no metric, baseline, or comparison group.',
        'Team consensus is not measured user impact; it cannot stand in for data.',
      ),
      miss(
        '"I used the latest tools and followed a rigorous process"',
        'Listing tools and process effort does not demonstrate that anything changed for users or the business.',
        'Effort and tooling are inputs, not the outcome the panel is evaluating.',
      ),
    ],
    lesson:
      'Strong case studies quantify impact with a metric, a baseline, a timeframe, and ideally a comparison (A/B or before/after) — e.g., "conversion rose from 61% to 74% in a controlled test." Vague adjectives, internal consensus, and tool lists signal taste and activity, not the evidence of judgment a hiring panel is screening for.',
    source,
    generated: true,
  },
])

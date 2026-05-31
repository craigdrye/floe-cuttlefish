import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe uxDesign top-up'

export const uxDesignTopUpQuestions: Question[] = makeQuestionBank('Career Skills', [
  // ---- Chapter 1: UX Mindset and Problem Framing ----
  {
    id: 7323000,
    chapter: 'UX Mindset and Problem Framing',
    title: 'Output vs outcome metric',
    prompt:
      'A team says their redesign was a success because they "shipped 14 new screens this quarter." Why is this a weak success metric for a UX project?',
    correct: 'It measures output (work produced) rather than an outcome (a change in what users can do)',
    mentorHint: 'Separate the artifact from the user result. A UX outcome should describe whether users can complete a task more successfully, quickly, confidently, or accessibly, not how many screens the team produced.',
    wrong: [
      miss(
        'It is too low; a strong team should ship at least 30 screens',
        'Screen count is the wrong axis entirely — more output does not prove the user task improved.',
        'A good UX metric describes a change for the user, not a tally of deliverables.',
      ),
      miss(
        'It uses a quarter; UX metrics must always be measured weekly',
        'The time window is not the problem; the metric measures activity, not user impact, at any cadence.',
        'Ask what changed for the user, regardless of the reporting period.',
      ),
      miss(
        'It is fine — shipping screens is the only thing designers control',
        'Designers also shape whether users succeed; an outcome metric like task-completion or abandonment captures that.',
        'A defensible metric ties to a user result you set out to move.',
      ),
    ],
    lesson:
      'Output metrics count the work you produced; outcome metrics measure the change for users or the business (e.g., checkout abandonment fell from 22% to 14%). UX success should be framed as an outcome, because shipping more screens can easily make an experience worse.',
    source,
    generated: true,
  },
  {
    id: 7323001,
    chapter: 'UX Mindset and Problem Framing',
    title: 'Jobs to be done',
    prompt:
      'Using a jobs-to-be-done lens, which statement best captures why someone buys a drill?',
    correct: 'They are hiring the drill to make a hole so they can hang a shelf',
    mentorHint: 'Jobs-to-be-done asks what progress the person is trying to make in a situation. Look past the product, demographic, or preference and name the practical outcome the tool helps accomplish.',
    wrong: [
      miss(
        'They want to own the most powerful drill on the market',
        'Owning the tool is a feature preference, not the underlying job; JTBD looks past the product to the goal.',
        'Ask what progress the user is trying to make, not which product they pick.',
      ),
      miss(
        'They are a member of the "drill enthusiast" demographic',
        'A demographic persona describes who, not the job; JTBD is about the situation and desired progress.',
        'JTBD focuses on the task and context, not the buyer category.',
      ),
      miss(
        'They enjoy the aesthetic of cordless power tools',
        'Aesthetic appeal may influence choice but is not the job being hired for.',
        'Strip away the product and name the outcome the person actually needs.',
      ),
    ],
    lesson:
      'Jobs-to-be-done reframes design around the progress a user is trying to make in a situation ("hang a shelf"), not the product they happen to choose. It keeps teams from over-indexing on features or demographics and points them at the real outcome.',
    source,
    generated: true,
  },
  {
    id: 7323002,
    chapter: 'UX Mindset and Problem Framing',
    title: 'Problem before solution',
    prompt:
      'A stakeholder asks for "a chatbot on the homepage." What is the most useful first move for the designer?',
    correct: 'Find out which user problem the chatbot is meant to solve and whether it is the best way to solve it',
    mentorHint: 'A feature request is evidence that someone perceives a problem, but it is not proof that the proposed feature is the right solution. First translate the request into a user need, then compare solution options against that need.',
    wrong: [
      miss(
        'Start designing the chatbot UI immediately to show momentum',
        'Building the requested solution before understanding the problem risks shipping a chatbot nobody needed.',
        'Treat a feature request as a clue to a problem, not a finished spec.',
      ),
      miss(
        'Refuse the request because chatbots are unfashionable',
        'Dismissing on taste skips the diagnosis; the chatbot might be right once the problem is clear.',
        'Investigate the underlying need before accepting or rejecting the solution.',
      ),
      miss(
        'Ask engineering how long a chatbot takes to build',
        'Effort estimates matter later; first confirm the chatbot addresses a real user problem at all.',
        'Cost is premature until you know the problem is worth solving.',
      ),
    ],
    lesson:
      'Stakeholders often arrive with a solution ("add a chatbot") that masks an unstated problem (e.g., "users cannot find help"). Good designers translate the requested solution back into the user problem before committing, so they can confirm the request actually solves it.',
    source,
    generated: true,
  },
  // ---- Chapter 2: Research That Changes the Design ----
  {
    id: 7323003,
    chapter: 'Research That Changes the Design',
    title: 'Leading question',
    prompt: 'Which interview question is most likely to bias the answer?',
    correct: 'How much did you love our new streamlined checkout?',
    mentorHint: 'Leading questions smuggle judgment into the wording and encourage agreement. Watch for adjectives, praise, or assumptions that tell the participant how they are supposed to feel before they answer.',
    wrong: [
      miss(
        'Walk me through the last time you bought something here.',
        'This is an open, behavior-focused prompt; it invites a story rather than steering toward a verdict.',
        'Leading questions presuppose the answer; this one asks the user to recount what happened.',
      ),
      miss(
        'What were you trying to do on this screen?',
        'This is neutral and task-focused; it does not plant a judgment.',
        'A non-leading question lets the user supply the framing.',
      ),
      miss(
        'Was there anything confusing or unexpected here?',
        'This is balanced and does not assume a positive or negative answer.',
        'Compare which option assumes its own conclusion ("love", "streamlined").',
      ),
    ],
    lesson:
      'A leading question embeds the desired answer ("love", "streamlined"), so respondents tend to agree to be polite. Neutral, open, behavior-focused questions ("walk me through...", "what were you trying to do?") produce evidence you can trust.',
    source,
    generated: true,
  },
  {
    id: 7323004,
    chapter: 'Research That Changes the Design',
    title: 'Say-do gap',
    prompt:
      'In a survey, 80% of users say they would pay for a premium tier, but when it launches almost no one subscribes. What does this best illustrate?',
    correct: 'The gap between what users say they will do and what they actually do',
    mentorHint: 'Future-intent survey answers are weak evidence because there is no real cost to saying yes. Behavioral evidence becomes stronger when users must spend money, time, attention, or effort.',
    wrong: [
      miss(
        'The survey sample was too large to be reliable',
        'Larger samples generally improve reliability; the issue is self-reported intent, not sample size.',
        'The problem is stated vs actual behavior, not how many people answered.',
      ),
      miss(
        'Users lied deliberately to sabotage the product',
        'Intent overstatement is usually honest optimism or social desirability, not sabotage.',
        'No malice required — people genuinely misjudge their own future behavior.',
      ),
      miss(
        'The premium tier was simply priced one dollar too high',
        'Price might matter, but the survey could not have predicted purchase regardless of price.',
        'The lesson is about attitudinal claims failing to predict behavior.',
      ),
    ],
    lesson:
      'Self-reported intent ("I would pay") routinely overstates real behavior because of optimism and social desirability bias. This say-do gap is why behavioral evidence — observed usage, actual purchases, usability tasks — beats stated preference when the stakes are real.',
    source,
    generated: true,
  },
  {
    id: 7323005,
    chapter: 'Research That Changes the Design',
    title: 'Generative vs evaluative research',
    prompt:
      'Before any designs exist, a team wants to understand how field technicians currently diagnose equipment faults. Which type of research fits?',
    correct: 'Generative (discovery) research, such as contextual interviews and observation',
    mentorHint: 'Choose research methods based on the stage of uncertainty. When no design exists and the team needs to understand current behavior, use methods that generate insight rather than methods that evaluate a finished artifact.',
    wrong: [
      miss(
        'Evaluative research, such as a usability test of the prototype',
        'There is no prototype yet to evaluate; usability testing measures an existing design, not an unmet need.',
        'Evaluative methods test a design that already exists; this is the discovery phase.',
      ),
      miss(
        'A/B testing two production variants',
        'A/B testing compares shipped variants; you cannot run it before anything is built.',
        'A/B testing optimizes an existing flow; here you are still learning the problem space.',
      ),
      miss(
        'A satisfaction survey of current customers',
        'A satisfaction survey measures attitudes toward what exists, not how technicians work or what they need.',
        'Discovery work observes behavior in context rather than scoring an existing product.',
      ),
    ],
    lesson:
      'Generative (discovery) research explores needs and behavior before solutions exist — interviews, contextual inquiry, observation. Evaluative research (usability tests, A/B tests) measures how well a specific design works. Matching method to phase prevents wasted studies.',
    source,
    generated: true,
  },
  // ---- Chapter 3: Information Architecture and User Flows ----
  {
    id: 7323006,
    chapter: 'Information Architecture and User Flows',
    title: 'Open vs closed card sort',
    prompt:
      'You are designing a brand-new product and want to learn how users would naturally group its content. Which method fits best?',
    correct: 'An open card sort, where participants create and name their own categories',
    mentorHint: 'Information architecture work often starts by discovering the user’s mental model before validating your own. If the categories are not known yet, choose a method that lets participants create structure rather than fit items into yours.',
    wrong: [
      miss(
        'A closed card sort, where participants sort items into your predefined categories',
        'A closed sort tests categories you already have; here you do not yet know what the categories should be.',
        'Use a closed sort to validate existing groups, an open sort to discover them.',
      ),
      miss(
        'A tree test of the proposed navigation',
        'A tree test validates findability in a structure that already exists; there is no structure yet to test.',
        'Tree testing comes after you have a candidate IA, not before.',
      ),
      miss(
        'A first-click test on the homepage wireframe',
        'A first-click test needs a designed screen; it does not reveal how users would group content from scratch.',
        'First-click testing evaluates a layout, not users’ mental categories.',
      ),
    ],
    lesson:
      'An open card sort lets participants form and label their own groups, revealing their mental model — ideal early when you are building IA. A closed sort checks whether items fit categories you already chose, and a tree test validates findability once a structure exists.',
    source,
    generated: true,
  },
  {
    id: 7323007,
    chapter: 'Information Architecture and User Flows',
    title: 'Tree testing purpose',
    prompt: 'What does a tree test (reverse card sort) primarily measure?',
    correct: 'Whether users can find content by navigating a proposed structure',
    mentorHint: 'Tree testing strips away visual design so you can isolate the structure of the navigation. Ask whether the method is generating categories or testing whether people can find things in a proposed hierarchy.',
    wrong: [
      miss(
        'How visually appealing the navigation menu looks',
        'Tree tests are deliberately text-only and stripped of visuals; appeal is out of scope.',
        'Tree testing isolates structure and findability, not aesthetics.',
      ),
      miss(
        'How users would group content into new categories',
        'That is what an open card sort does; tree testing evaluates an existing structure instead of generating one.',
        'Generating categories is card sorting; validating findability is tree testing.',
      ),
      miss(
        'How fast a page loads on a slow connection',
        'Load performance is unrelated to a tree test, which uses a simplified text hierarchy.',
        'Tree testing is about navigability, not technical performance.',
      ),
    ],
    lesson:
      'A tree test presents the IA as a bare text hierarchy and asks users to find where a task lives, measuring findability without visual design getting in the way. It is the validation counterpart to card sorting, which generates the structure in the first place.',
    source,
    generated: true,
  },
  {
    id: 7323008,
    chapter: 'Information Architecture and User Flows',
    title: 'Flow vs journey map',
    prompt:
      'A designer wants to capture a user’s emotions, pain points, and touchpoints across signing up, onboarding, and first week of use over several days. Which artifact fits best?',
    correct: 'A user journey map',
    mentorHint: 'Choose the artifact by the scale of the experience. Screen flows are good for task steps and branches, while journeys capture stages over time, touchpoints, emotions, and pain points across a broader experience.',
    wrong: [
      miss(
        'A user flow diagram',
        'A flow shows step-by-step screens and decision points within a task, not emotions across days.',
        'Flows capture interaction sequence; journeys capture experience and feeling over time.',
      ),
      miss(
        'A site map',
        'A site map shows content hierarchy, not the temporal, emotional arc of a multi-day experience.',
        'Site maps describe where content lives, not how the experience feels over time.',
      ),
      miss(
        'A wireframe',
        'A wireframe shows the layout of a single screen, not a multi-stage emotional arc.',
        'Wireframes are screen-level; you need an artifact spanning the whole experience.',
      ),
    ],
    lesson:
      'A user flow diagrams the steps and branches inside a task; a journey map spans stages over time and layers in emotions, pain points, and touchpoints. When the question is about feeling and experience across a span, you want a journey map, not a flow.',
    source,
    generated: true,
  },
  // ---- Chapter 4: Wireframes and Interaction Structure ----
  {
    id: 7323009,
    chapter: 'Wireframes and Interaction Structure',
    title: 'Hick’s law',
    prompt:
      'A landing page offers 18 equally weighted call-to-action buttons and conversions are low. Which UX law most directly explains the problem?',
    correct: 'Hick’s law — decision time grows as the number of choices increases',
    mentorHint: 'Diagnose the friction: is the user struggling to decide among many options, reach a physical target, or recognize a familiar pattern? Too many equal choices primarily create decision load.',
    wrong: [
      miss(
        'Fitts’s law — time to acquire a target depends on its size and distance',
        'Fitts’s law is about pointing speed, not choice overload; the issue here is too many options, not target reach.',
        'Hick is about how many choices; Fitts is about reaching one target.',
      ),
      miss(
        'The Pareto principle — 80% of effects come from 20% of causes',
        'Pareto is a distribution heuristic, not an explanation for slow decisions caused by too many options.',
        'You need the law specifically about number of choices and decision time.',
      ),
      miss(
        'Jakob’s law — users expect your site to work like others they know',
        'Jakob’s law is about familiarity with conventions, not the cost of presenting many equal options.',
        'The symptom is choice paralysis, which maps to Hick’s law.',
      ),
    ],
    lesson:
      'Hick’s law states that the time to make a decision rises (logarithmically) with the number and complexity of choices. Eighteen equal CTAs create choice paralysis; reducing or prioritizing options speeds decisions and lifts conversion.',
    source,
    generated: true,
  },
  {
    id: 7323010,
    chapter: 'Wireframes and Interaction Structure',
    title: 'Fitts’s law',
    prompt:
      'Per Fitts’s law, which change makes a frequently used "Send" button faster and easier to hit on mobile?',
    correct: 'Make the button larger and place it within easy thumb reach',
    mentorHint: 'Fitts’s law is about movement cost. For frequent actions, reduce the distance to the target and increase the target size so users can hit it faster with fewer errors.',
    wrong: [
      miss(
        'Make the button tiny so it takes up less screen space',
        'Smaller targets take longer to acquire and raise error rates — the opposite of what Fitts’s law recommends.',
        'Fitts’s law rewards bigger, closer targets, not smaller ones.',
      ),
      miss(
        'Place the button in a far corner to keep the layout balanced',
        'Greater distance to a frequent target increases acquisition time under Fitts’s law.',
        'Distance hurts; put high-frequency targets close, not far.',
      ),
      miss(
        'Change the button color from blue to green',
        'Color affects noticeability, not the movement-time relationship Fitts’s law describes.',
        'Fitts is about size and distance, not hue.',
      ),
    ],
    lesson:
      'Fitts’s law says the time to reach a target is a function of its distance and size: bigger and closer targets are faster and less error-prone. For frequent mobile actions, enlarge the target and keep it within natural thumb reach.',
    source,
    generated: true,
  },
  {
    id: 7323011,
    chapter: 'Wireframes and Interaction Structure',
    title: 'Recognition over recall',
    prompt:
      'Nielsen’s "recognition rather than recall" heuristic favors which design choice?',
    correct: 'Showing recently used items and visible options so users can pick rather than remember',
    mentorHint: 'Memory load is a design cost. Interfaces are easier when users can see and recognize available actions instead of remembering commands, locations, or meanings from scratch.',
    wrong: [
      miss(
        'Requiring users to type exact command names from memory',
        'Forcing recall of exact strings increases memory load — the heuristic argues against this.',
        'Recognition means showing options; recall means making users remember them.',
      ),
      miss(
        'Hiding all navigation until the user types the right keyword',
        'Hiding options forces recall of what exists; the heuristic prefers visible, selectable choices.',
        'Make information visible and selectable rather than memorized.',
      ),
      miss(
        'Removing labels so the interface looks cleaner',
        'Stripping labels forces users to recall what each control does, raising memory burden.',
        'Visible labels support recognition; their absence demands recall.',
      ),
    ],
    lesson:
      '"Recognition rather than recall" is one of Nielsen’s ten heuristics: minimize the user’s memory load by making objects, actions, and options visible. Recently used lists, visible menus, and clear labels let users recognize the right choice instead of remembering it.',
    source,
    generated: true,
  },
  {
    id: 7323012,
    chapter: 'Wireframes and Interaction Structure',
    title: 'Progressive disclosure',
    prompt:
      'A form has 6 essential fields plus 20 optional advanced settings most users never touch. Which approach best reflects progressive disclosure?',
    correct: 'Show the 6 essential fields and reveal the advanced settings behind an "Advanced options" expander',
    mentorHint: 'Progressive disclosure manages complexity without deleting capability. Prioritize the common path first, then reveal advanced or rare controls only when users intentionally need them.',
    wrong: [
      miss(
        'Show all 26 fields at once so nothing is hidden',
        'Dumping every field at once overloads users and buries the common path — the opposite of progressive disclosure.',
        'Progressive disclosure reveals complexity only when needed.',
      ),
      miss(
        'Remove the 20 advanced settings entirely to keep it simple',
        'Deleting capabilities some users need is not disclosure; it is amputation.',
        'The goal is to defer advanced options, not eliminate them.',
      ),
      miss(
        'Split the 26 fields across 13 mandatory steps',
        'Forcing everyone through 13 steps adds friction for the majority who only need 6 fields.',
        'Disclosure means optional depth, not mandatory length.',
      ),
    ],
    lesson:
      'Progressive disclosure shows users only what they need for the common task and tucks advanced or rare options behind a clear expander or secondary screen. It reduces cognitive load without removing capability for power users.',
    source,
    generated: true,
  },
  // ---- Chapter 5: Prototyping and Usability Testing ----
  {
    id: 7323013,
    chapter: 'Prototyping and Usability Testing',
    title: 'Five-user finding',
    prompt:
      'Nielsen’s well-known guidance that testing with about five users uncovers roughly 85% of usability problems is best understood how?',
    correct:
      'As a rule of thumb for one round of qualitative testing within a single user group, not a universal guarantee',
    mentorHint: 'Treat small-sample usability guidance as an iteration strategy, not a universal law. Qualitative tests find many obvious problems quickly, but different user groups, quantitative claims, and complex products can require more participants.',
    wrong: [
      miss(
        'As proof that you never need to test with more than five users ever',
        'Distinct user segments, complex products, and quantitative goals all justify more participants and more rounds.',
        'It is a starting heuristic, not a hard cap on all testing.',
      ),
      miss(
        'As a requirement that exactly five users must be in every study type',
        'It is a guideline for qualitative usability testing, not a fixed rule for surveys, A/B tests, or card sorts.',
        'The number depends on method and goals, not a single mandated count.',
      ),
      miss(
        'As a claim that five users reveal 85% of all possible problems',
        'The finding is about the most evident issues in one segment, not every problem that could ever exist.',
        'It covers the most obvious issues per group, not the full universe of bugs.',
      ),
    ],
    lesson:
      'Nielsen’s finding (with Landauer) is that ~5 users surface about 85% of the most evident usability problems in one round for one user group, so iterating in small rounds beats one large test. It is a heuristic: distinct segments or quantitative claims need more participants.',
    source,
    generated: true,
  },
  {
    id: 7323014,
    chapter: 'Prototyping and Usability Testing',
    title: 'System Usability Scale',
    prompt:
      'A product scores 68 on the System Usability Scale (SUS). How should this be interpreted?',
    correct: 'It is right at the historical average; 68 is the benchmark mean, roughly a "C" grade',
    mentorHint: 'SUS is a normalized usability score with benchmarks, not a literal percent usable. Compare the score to historical norms and grade interpretations rather than treating the number as a pass/fail percentage.',
    wrong: [
      miss(
        'The product is 68% usable',
        'SUS is not a percentage; a 68 does not mean two-thirds of usability is achieved.',
        'SUS is a normalized 0–100 score, not a percent-usable figure.',
      ),
      miss(
        'The product passed because anything above 50 is good',
        'Below ~51 is roughly an "F"; 68 is merely average, not a strong pass.',
        'Average (~68) is a C, not a clear win; the bar for "good" (A) is around 80+.',
      ),
      miss(
        'The score is invalid unless 68 users completed the survey',
        'SUS is a 10-item questionnaire; the number 68 is the score, unrelated to how many people responded.',
        'The 68 is the score on the scale, not a participant count.',
      ),
    ],
    lesson:
      'The SUS is a 10-item questionnaire yielding a 0–100 score. The cross-study average is ~68, which sits at a "C" on the Sauro–Lewis curved grade scale; roughly 80+ earns an "A." Crucially, the score is normalized, not a percentage of usability.',
    source,
    generated: true,
  },
  {
    id: 7323015,
    chapter: 'Prototyping and Usability Testing',
    title: 'Severity prioritization',
    prompt:
      'A usability test surfaces four issues. Which one should typically be fixed first?',
    correct: 'A frequent, blocking issue that stops most users from completing the core task',
    mentorHint: 'Severity combines consequence and frequency. A practical triage question is: how many users hit this, and does it merely annoy them or prevent completion of a high-value task?',
    wrong: [
      miss(
        'A cosmetic misalignment one participant mentioned in passing',
        'Low frequency and low impact make this minor; it should not jump ahead of a task-blocker.',
        'Severity weighs impact and frequency; a cosmetic one-off ranks low.',
      ),
      miss(
        'The issue that is cheapest for engineering to fix',
        'Ease of fixing is a tiebreaker, not the primary criterion; a cheap cosmetic fix should not outrank a blocker.',
        'Prioritize by user impact first, then consider effort.',
      ),
      miss(
        'The issue the loudest stakeholder cares about most',
        'Stakeholder volume is not evidence of user impact; severity should be driven by frequency and consequence.',
        'Rank by how badly and how often it hurts users, not by who shouts.',
      ),
    ],
    lesson:
      'Usability issues are prioritized by severity — a function of impact (how badly it hurts the task), frequency (how many users hit it), and persistence. Frequent, task-blocking problems come first; cosmetic, one-off issues come last, with fix cost as a secondary tiebreaker.',
    source,
    generated: true,
  },
  {
    id: 7323016,
    chapter: 'Prototyping and Usability Testing',
    title: 'Moderated vs unmoderated',
    prompt:
      'You need rich, in-the-moment reasoning about why users hesitate on a confusing new flow, with the ability to ask follow-up questions. Which method fits best?',
    correct: 'Moderated usability testing with a think-aloud protocol',
    mentorHint: 'Method choice is about the kind of evidence you need. If you need live reasoning and follow-up probes, prioritize depth and facilitation over scale and automation.',
    wrong: [
      miss(
        'A large unmoderated test with 100 participants',
        'Unmoderated tests scale and quantify but cannot probe the "why" with live follow-ups when users hesitate.',
        'Probing reasoning in real time needs a moderator present.',
      ),
      miss(
        'An A/B test of two button colors in production',
        'A/B testing measures which variant performs better, not the reasoning behind hesitation on a new flow.',
        'A/B tells you what wins, not why users hesitate.',
      ),
      miss(
        'A satisfaction survey emailed after launch',
        'A post-hoc survey captures attitudes, not the live, step-by-step reasoning you need during the flow.',
        'You need observed in-task reasoning, which surveys cannot capture.',
      ),
    ],
    lesson:
      'Moderated testing puts a facilitator with the participant, so you can probe reasoning live via think-aloud and follow-up questions — ideal for diagnosing why a flow confuses people. Unmoderated tests scale to large samples and quantify behavior but sacrifice that depth.',
    source,
    generated: true,
  },
  {
    id: 7323017,
    chapter: 'Prototyping and Usability Testing',
    title: 'Task success rate',
    prompt:
      'In a usability test, 12 of 15 participants complete the core task unaided. What is the task success rate, and what does it tell you?',
    correct: '80% — a behavioral measure of how many users could finish the task',
    mentorHint: 'Task success is a behavioral proportion: successful completions divided by attempts. Keep it separate from satisfaction scores, because users can finish a task and still dislike the experience, or enjoy a task they failed.',
    wrong: [
      miss(
        '12 — the raw count is the success rate',
        'A rate is a proportion (12 of 15 = 80%), not the raw numerator on its own.',
        'Convert the count to a proportion: completions ÷ participants.',
      ),
      miss(
        '3% — because three people failed',
        'Three failures out of fifteen is a 20% failure rate; the success rate is 80%, and 3% misreads the arithmetic.',
        'Failures were 3 of 15 (20%); success is the complement, 80%.',
      ),
      miss(
        '80% — meaning users rated the task 80 out of 100 for satisfaction',
        'Task success is whether they completed it, a behavioral outcome, not a self-reported satisfaction rating.',
        'Success rate counts completions, not opinion scores.',
      ),
    ],
    lesson:
      'Task success rate is completions divided by attempts (12/15 = 80%), a core behavioral usability metric. It captures whether users can actually finish a task — distinct from attitudinal scores like satisfaction or SUS, which measure how the experience felt.',
    source,
    generated: true,
  },
  // ---- Chapter 6: Accessibility and Inclusive Design ----
  {
    id: 7323018,
    chapter: 'Accessibility and Inclusive Design',
    title: 'WCAG AA contrast',
    prompt:
      'Under WCAG 2.2 Level AA, what is the minimum contrast ratio between normal-size body text and its background?',
    correct: '4.5:1',
    mentorHint: 'WCAG contrast thresholds depend on text size and conformance level. Normal body text at AA has a stricter minimum than large text, while AAA raises the bar further.',
    wrong: [
      miss(
        '3:1',
        '3:1 is the AA minimum for large text (and UI components/graphics), not for normal-size body text.',
        'Large text needs 3:1; normal text needs the higher 4.5:1 at AA.',
      ),
      miss(
        '7:1',
        '7:1 is the Level AAA (enhanced) requirement for normal text, stricter than the AA minimum.',
        'That is the AAA bar; AA for normal text is lower.',
      ),
      miss(
        '2:1',
        '2:1 meets no WCAG text-contrast level; it is below even the large-text minimum.',
        'No WCAG level accepts 2:1 for text; the AA normal-text floor is higher.',
      ),
    ],
    lesson:
      'WCAG 2.2 SC 1.4.3 (AA) requires 4.5:1 contrast for normal text and 3:1 for large text (about 18pt regular or 14pt bold). Level AAA (1.4.6) raises these to 7:1 and 4.5:1. Non-text UI components and meaningful graphics need 3:1 under SC 1.4.11.',
    source,
    generated: true,
  },
  {
    id: 7323019,
    chapter: 'Accessibility and Inclusive Design',
    title: 'Target size minimum',
    prompt:
      'WCAG 2.2 added a Level AA target-size criterion (SC 2.5.8). What is the minimum size for a pointer target (absent the spacing or other exceptions)?',
    correct: '24 by 24 CSS pixels',
    mentorHint: 'Target-size rules protect users with motor limitations by ensuring controls are not too small to activate reliably. Distinguish the WCAG AA minimum from stricter AAA or platform-specific touch guidelines.',
    wrong: [
      miss(
        '44 by 44 CSS pixels',
        '44×44 is the stricter AAA target size (SC 2.5.5) and a common iOS guideline, not the WCAG 2.2 AA minimum.',
        'AA minimum is 24×24; 44×44 is the enhanced/AAA figure.',
      ),
      miss(
        '10 by 10 CSS pixels',
        '10×10 is far below the AA minimum and would fail SC 2.5.8 for most users with motor impairments.',
        'The AA floor is larger than 10px; recall the 24px figure.',
      ),
      miss(
        '48 by 48 device pixels',
        'The criterion is specified in CSS pixels at 24×24, not 48 device pixels; the units and number are wrong.',
        'It is 24×24 CSS pixels, not a device-pixel measure.',
      ),
    ],
    lesson:
      'WCAG 2.2 SC 2.5.8 (Target Size, Minimum, Level AA) requires pointer targets of at least 24×24 CSS pixels, unless an exception applies (sufficient spacing, an equivalent control, inline targets, user-agent defaults, or essential presentation). The stricter 44×44 figure is the AAA criterion 2.5.5.',
    source,
    generated: true,
  },
  {
    id: 7323020,
    chapter: 'Accessibility and Inclusive Design',
    title: 'POUR principles',
    prompt:
      'A status message conveys errors using red color alone, with no icon or text. Which of WCAG’s four POUR principles does this most directly violate?',
    correct: 'Perceivable — information must be presented in ways users can perceive, not by color alone',
    mentorHint: 'POUR categories map to different failure modes: seeing or sensing information, operating controls, understanding behavior, and compatibility with assistive tech. Color-only meaning fails before interaction or comprehension, because some users cannot perceive the distinction.',
    wrong: [
      miss(
        'Operable — interface components must be usable',
        'Operable concerns interaction (keyboard, timing, navigation); the failure here is perceiving the error, not operating it.',
        'Color-only meaning is a perception problem, not an operation one.',
      ),
      miss(
        'Understandable — content and operation must be understandable',
        'Understandable covers readable, predictable content; here the issue is that the signal is not perceivable at all by some users.',
        'If a colorblind user cannot detect the signal, that is perceivability first.',
      ),
      miss(
        'Robust — content must work with assistive technologies',
        'Robust is about compatibility with current and future user agents and AT, not about color-only meaning.',
        'Robust is a markup/compatibility concern, not color reliance.',
      ),
    ],
    lesson:
      'POUR = Perceivable, Operable, Understandable, Robust. Conveying meaning with color alone fails the Perceivable principle (SC 1.4.1, Use of Color), because users with color vision deficiencies cannot perceive the distinction. Pair color with text, icons, or patterns.',
    source,
    generated: true,
  },
  {
    id: 7323021,
    chapter: 'Accessibility and Inclusive Design',
    title: 'Accessible name for icon button',
    prompt:
      'A toolbar uses an icon-only button (a magnifying glass) with no text. For screen-reader users, what must the design ensure?',
    correct: 'The button has a programmatically determined accessible name, such as "Search"',
    mentorHint: 'Assistive technology needs a control’s purpose in text form, not just a visual symbol. For icon-only buttons, ask what a screen reader would announce for the name, role, and state.',
    wrong: [
      miss(
        'The icon is drawn at a higher resolution',
        'Higher resolution helps sighted users slightly but gives screen-reader users nothing to announce.',
        'Screen readers need a text label, not a sharper picture.',
      ),
      miss(
        'A tooltip appears only on mouse hover',
        'Hover tooltips are unavailable to keyboard and screen-reader users, so they do not supply an accessible name.',
        'Hover-only text excludes the very users who need the label.',
      ),
      miss(
        'The button is given a bright, attention-grabbing color',
        'Color does not convey the button’s purpose to assistive technology, which reads names, roles, and states.',
        'Assistive tech announces the name; color is not a substitute.',
      ),
    ],
    lesson:
      'Icon-only controls need an accessible name (via visible text, aria-label, or equivalent) so assistive technology can announce their purpose. Without it, a screen reader may announce only "button," leaving the user unable to know what it does.',
    source,
    generated: true,
  },
  // ---- Chapter 7: Product Collaboration and Handoff ----
  {
    id: 7323022,
    chapter: 'Product Collaboration and Handoff',
    title: 'Design tokens',
    prompt:
      'Why do mature design systems define a token like color-primary or space-200 instead of hardcoding a hex value or pixel number on each component?',
    correct:
      'Tokens give one named source of truth that updates everywhere and stays in sync between design and code',
    mentorHint: 'Design tokens are about governance and consistency across systems. Named values let teams change a design decision once and propagate it through both design files and implementation instead of chasing scattered hardcoded values.',
    wrong: [
      miss(
        'Hardcoded hex values render faster in the browser',
        'Token resolution has negligible runtime cost; the benefit is consistency and maintainability, not speed.',
        'The win is a single source of truth, not rendering performance.',
      ),
      miss(
        'Tokens let each designer pick personal favorite colors per screen',
        'Tokens exist precisely to prevent ad-hoc per-screen choices; they enforce shared values.',
        'Tokens standardize values; they are the opposite of personal freelancing.',
      ),
      miss(
        'Tokens are required by WCAG for accessibility conformance',
        'WCAG sets outcome thresholds (e.g., contrast); it does not mandate the token implementation pattern.',
        'Tokens are an engineering/design convention, not a WCAG requirement.',
      ),
    ],
    lesson:
      'Design tokens are named, reusable values (colors, spacing, type) that act as a single source of truth shared by design files and code. Change the token once and every component updates, which keeps the system consistent and prevents drift between designers and engineers.',
    source,
    generated: true,
  },
  {
    id: 7323023,
    chapter: 'Product Collaboration and Handoff',
    title: 'Component state matrix in handoff',
    prompt:
      'A designer hands off a single "default" screenshot of a primary button. What is the most important thing missing for engineering?',
    correct: 'The full set of states — hover, focus, active, disabled, loading, and error',
    mentorHint: 'A component spec must describe behavior across states, not just its prettiest default appearance. Engineering needs to know what happens when the component is focused, unavailable, in progress, pressed, hovered, or showing an error.',
    wrong: [
      miss(
        'A higher-resolution export of the same default state',
        'Resolution does not tell engineering how the button should look or behave when focused, disabled, or loading.',
        'Engineers need the other states, not a crisper copy of one.',
      ),
      miss(
        'The designer’s personal rationale for choosing the button shape',
        'Backstory is nice but does not unblock implementation; the missing build-critical detail is the states.',
        'A spec needs behavioral states more than design backstory.',
      ),
      miss(
        'A list of every other button used across the entire product',
        'A product-wide inventory is out of scope for this handoff; what is missing is this button’s own states.',
        'Specify this component’s states, not a catalog of unrelated buttons.',
      ),
    ],
    lesson:
      'A button is not one image; it is a set of states. A complete handoff specifies hover, focus, active, disabled, loading, and error states (plus responsive behavior), or engineering will invent them inconsistently. Defining the state matrix is core to a quality spec.',
    source,
    generated: true,
  },
])

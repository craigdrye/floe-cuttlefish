// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the high-school standard (non-AP) question banks: 144 items from
// highAgentGenerated.ts (8 tracks: biology, psychology, US history,
// economics, web foundations, math extensions, IB history, grammar) plus
// 10 each from the NGSS biology, NGSS physics, and OpenLogic argumentation
// batches. 174 questions total.
//
// HIGH_STANDARD_SUB_TOPICS maps each question id to a short sub-topic label
// that groups it inside its chapter into a lesson-shaped cluster (cap 8
// clusters per chapter, since lesson grouping caps at 8 lessons per chapter).
//
// HIGH_STANDARD_MENTOR_HINTS overrides the generic scaffold hint with a
// one-line second-person nudge — voice: a sharp high-school teacher who
// has taught the unit many times and is naming the move, not the answer.
//
// HIGH_STANDARD_CORRECT_SHORTENED trims `correct` strings flagged by the
// length-heuristic audit (correct ≥1.8x longer than the longest distractor
// AND ≥20 chars longer). Trimmed explanatory clauses are reattached via
// `lessonAddendum` so no information is lost.

export const HIGH_STANDARD_SUB_TOPICS: Record<number, string> = {
  // -------------------------- highAgentGenerated.ts --------------------------

  // ---------- biology_2e — Biology: Cells and Energy ----------
  2100000: 'Membrane Transport',          // diffusion of dye
  2100001: 'Enzyme Anatomy',              // active site
  2100002: 'Membrane Transport',          // osmosis hypertonic
  2100003: 'Enzyme Inhibition',           // competitive
  2100004: 'Membrane Transport',          // endocytosis
  2100005: 'Enzyme Inhibition',           // noncompetitive
  // ---------- biology_2e — Biology: Photosynthesis and Respiration ----------
  2100006: 'Light Reactions',             // chlorophyll
  2100007: 'Respiration Stages',          // glycolysis
  2100008: 'Calvin Cycle',                // inputs
  2100009: 'Anaerobic Pathways',          // fermentation
  2100010: 'ATP Production',              // chemiosmosis
  2100011: 'ATP Production',              // O2 final acceptor
  // ---------- biology_2e — Biology: Genetics and Ecology ----------
  2100012: 'Mendelian Crosses',           // monohybrid
  2100013: 'Energy Flow',                 // 10% rule
  2100014: 'Non-Mendelian Inheritance',   // codominance
  2100015: 'Community Roles',             // keystone
  2100016: 'Mendelian Crosses',           // dihybrid ratio
  2100017: 'Energy Flow',                 // biomagnification

  // ---------- psychology_2e — Research Methods ----------
  2101000: 'Experimental Design',         // IV
  2101001: 'Descriptive Statistics',      // mode
  2101002: 'Experimental Design',         // confound
  2101003: 'Descriptive Statistics',      // median
  2101004: 'Operationalizing Variables',  // op def
  2101005: 'Descriptive Statistics',      // SD
  // ---------- psychology_2e — Learning and Perception ----------
  2101006: 'Sensation & Perception',      // sensory adaptation
  2101007: 'Classical Conditioning',      // fish tap
  2101008: 'Operant Conditioning',        // fixed-ratio
  2101009: 'Sensation & Perception',      // monocular cues
  2101010: 'Operant Conditioning',        // negative punishment
  2101011: 'Observational Learning',      // Nico flinch
  // ---------- psychology_2e — Cognition and Social Psychology ----------
  2101012: 'Memory',                      // retroactive interference
  2101013: 'Attribution',                 // FAE
  2101014: 'Problem-Solving',             // algorithm
  2101015: 'Social Influence',            // conformity
  2101016: 'Heuristics & Biases',         // availability
  2101017: 'Memory',                      // constructive memory

  // ---------- usHistory — Colonies and Revolution ----------
  2102000: 'Colonial Regions',            // New England
  2102001: 'Founding Documents',          // AoC weakness
  2102002: 'Road to Revolution',          // no taxation
  2102003: 'Constitutional Convention',   // Great Compromise
  2102004: 'Road to Revolution',          // FIW aftermath
  2102005: 'Founding Documents',          // Bill of Rights
  // ---------- usHistory — Reform and Civil Rights ----------
  2102006: 'Reconstruction Amendments',   // 13th
  2102007: 'Progressive Era',             // muckrakers
  2102008: 'Antebellum Conflict',         // slavery in territories
  2102009: 'Labor Movement',              // collective bargaining
  2102010: 'Civil Rights & Limits',       // limits on rights
  2102011: 'Progressive Era',             // antitrust
  // ---------- usHistory — Modern America ----------
  2102012: 'Depression & New Deal',       // NRA
  2102013: 'Civil Rights Movement',       // Brown
  2102014: 'World War II',                // Pearl Harbor
  2102015: 'Civil Rights Movement',       // CRA 1964
  2102016: 'Cold War',                    // containment
  2102017: 'Postwar Politics',            // Watergate

  // ---------- principles_economics_3e — Core Concepts and AD/AS ----------
  2103000: 'Scarcity & Trade-Offs',       // opportunity cost
  2103001: 'AD/AS Model',                 // AD shift
  2103002: 'PPF & Opportunity Cost',      // PPF
  2103003: 'Multipliers',                 // spending multiplier
  2103004: 'Trade & Specialization',      // comparative advantage
  2103005: 'AD/AS Model',                 // recessionary gap
  // ---------- principles_economics_3e — Policy and Money ----------
  2103006: 'Money & Banking',             // functions of money
  2103007: 'Fiscal Policy',               // expansionary fiscal
  2103008: 'Money & Banking',             // money multiplier
  2103009: 'Fiscal Policy',               // tax multiplier
  2103010: 'Fiscal Policy',               // crowding out
  2103011: 'Monetary Policy',             // open market purchase
  // ---------- principles_economics_3e — Growth and International ----------
  2103012: 'Growth Drivers',              // human capital
  2103013: 'Exchange Rates',              // appreciation & NX
  2103014: 'Productivity',                // productivity calc
  2103015: 'Exchange Rates',              // depreciation
  2103016: 'Balance of Payments',         // BoP classification
  2103017: 'Exchange Rates',              // tech & depreciation

  // ---------- basic_html_and_html5 — Structure and Content ----------
  2104000: 'Document Head',               // title
  2104001: 'Images & Media',              // alt text
  2104002: 'Body & Content',              // visible placement
  2104003: 'Lists & Text Elements',       // ul/li
  2104004: 'Semantic Regions',            // semantic regions
  2104005: 'Forms',                       // label/input
  // ---------- basic_html_and_html5 — Semantics and Accessibility ----------
  2104006: 'Landmarks',                   // nav landmark
  2104007: 'Accessible Links',            // descriptive link text
  2104008: 'Interactive Elements',        // button vs span
  2104009: 'Heading Structure',           // heading hierarchy
  2104010: 'Article Semantics',           // self-contained content
  2104011: 'Accessible Forms',            // accessible form field
  // ---------- basic_html_and_html5 — Debugging and Web Literacy ----------
  2104012: 'Layers of the Web',           // HTML/CSS/JS roles
  2104013: 'Debugging Markup',            // missing src
  2104014: 'Debugging Markup',            // closing list items
  2104015: 'Layers of the Web',           // adding JS
  2104016: 'Debugging Markup',            // nesting order
  2104017: 'Web Literacy',                // progressive enhancement

  // ---------- mathematics_extensions — Proof and Algebra ----------
  2105000: 'Direct Proof',                // odd squared
  2105001: 'Surds & Manipulation',        // simplifying surds
  2105002: 'Quadratics',                  // discriminant
  2105003: 'Function Transformations',   // graph transforms
  2105004: 'Proof by Contradiction',      // sqrt(2)
  2105005: 'Polynomial Methods',          // factor theorem
  // ---------- mathematics_extensions — Calculus ----------
  2105006: 'Differentiation',             // velocity from position
  2105007: 'Integration',                 // definite integral
  2105008: 'Stationary Points',           // stationary points
  2105009: 'Integration Techniques',      // by parts
  2105010: 'Optimization',                // constrained max
  2105011: 'Differential Equations',      // solving ODE
  // ---------- mathematics_extensions — Probability and Mechanics ----------
  2105012: 'Probability Basics',          // simple probability
  2105013: 'Vectors',                     // displacement magnitude
  2105014: 'Discrete Distributions',      // binomial
  2105015: 'Newtonian Mechanics',         // Newton's second law
  2105016: 'Counting & Sets',             // inclusion-exclusion
  2105017: 'Projectile Motion',           // horizontal projectile

  // ---------- ib_history — WWI Causes ----------
  2106000: 'M.A.I.N. Causes',             // militarism
  2106001: 'M.A.I.N. Causes',             // alliances
  2106002: 'Imperialism',                 // imperial competition
  2106003: 'Total War',                   // concept of total war
  2106004: 'Industrialization & War',     // industrialization
  2106005: 'Triggers vs. Long Causes',    // trigger vs cause
  // ---------- ib_history — Revolutions and Interwar ----------
  2106006: 'Enlightenment',               // Enlightenment thought
  2106007: 'Interwar Economy',            // Great Depression
  2106008: 'Ideological Contrast',        // Enlightenment vs totalitarian
  2106009: 'Rise of Fascism',             // fascist appeals
  2106010: 'Comparing Revolutions',       // 1789 vs 1933
  2106011: 'Rise of Fascism',             // conditions for fascism
  // ---------- ib_history — Sources and Change ----------
  2106012: 'Source Types',                // primary vs secondary
  2106013: 'Source Types',                // secondary identification
  2106014: 'Source Criticism',            // source criticism
  2106015: 'Continuity & Change',         // continuity & change
  2106016: 'Conflicting Sources',         // conflicting sources
  2106017: 'Historical Argumentation',    // overgeneralization

  // ---------- col-grammar — Parts and Clauses ----------
  2107000: 'Parts of Speech',             // preposition
  2107001: 'Subject & Predicate',         // subject
  2107002: 'Objects',                     // indirect object
  2107003: 'Sentence Boundaries',         // fragments
  2107004: 'Sentence Boundaries',         // run-on
  2107005: 'Clause Types',                // dependent clauses
  // ---------- col-grammar — Voice and Punctuation ----------
  2107006: 'Agreement',                   // subject-verb
  2107007: 'Apostrophes',                 // possessive
  2107008: 'Active vs Passive Voice',     // active voice
  2107009: 'Semicolons',                  // semicolons
  2107010: 'Mood',                        // subjunctive
  2107011: 'Colons',                      // colon introducing list
  // ---------- col-grammar — Clarity and Style ----------
  2107012: 'Modifiers',                   // dangling modifier
  2107013: 'Pronoun Reference',           // ambiguous reference
  2107014: 'Parallelism',                 // parallel structure
  2107015: 'Pronoun Agreement',           // antecedent agreement
  2107016: 'Modifiers',                   // misplaced modifier
  2107017: 'Pronoun Reference',           // clarifying ambiguous

  // ----------------- highSchoolBiologyNgssExamBatch.ts -----------------
  442001: 'Enzymes & Catalysis',          // Cells
  442002: 'Mitosis',                      // Cell Division
  442003: 'Meiosis',                      // Genetics
  442004: 'Transcription',                // Molecular Biology
  442005: 'Translation',                  // Molecular Biology
  442006: 'Evidence of Evolution',        // Evolution
  442007: 'Energy Flow',                  // Ecology
  442008: 'Feedback Loops',               // Homeostasis
  442009: 'Mutations',                    // Mutations
  442010: 'Population Dynamics',          // Populations

  // ------------------ highSchoolPhysicsNgssExamBatch.ts ------------------
  443001: 'Kinematics',                   // Motion
  443002: 'Newton\'s Laws',               // Forces
  443003: 'Work & Energy',                // Energy
  443004: 'Conservation of Energy',       // Energy
  443005: 'Ohm\'s Law',                   // Circuits
  443006: 'Series & Parallel',            // Circuits
  443007: 'Wave Equation',                // Waves
  443008: 'Coulomb Interactions',         // Electric Fields
  443009: 'Impulse & Momentum',           // Momentum
  443010: 'Motion Graphs',                // Graphing Motion

  // -------------- highLogicArgumentationOpenLogicBatch.ts --------------
  425001: 'Premises & Conclusions',       // Argument Structure
  425002: 'Validity',                     // Validity
  425003: 'Soundness',                    // Soundness
  425004: 'Material Conditional',         // Conditionals
  425005: 'Affirming the Consequent',     // Formal Fallacies
  425006: 'Denying the Antecedent',       // Formal Fallacies
  425007: 'Universal Quantifiers',        // Quantifier Thinking
  425008: 'Existential Quantifiers',      // Quantifier Thinking
  425009: 'Counterexamples',              // Counterexample
  425010: 'Necessary Conditions',         // Definitions
}

// HIGH_STANDARD_MENTOR_HINTS — one-line nudge per question, in the voice of
// a high-school teacher who has taught the unit many times. Names the
// move; never gives the answer.

export const HIGH_STANDARD_MENTOR_HINTS: Record<number, string> = {
  // ---------- Biology 2e: Cells and Energy ----------
  2100000: 'No membrane in the picture — strip out anything that needs proteins or ATP.',
  2100001: 'The substrate-shaped pocket has a name. Match the word to the geometry.',
  2100002: 'Salt outside is higher. Water always heads toward the saltier side; the cell pays the price.',
  2100003: 'If more substrate undoes the block, the inhibitor must be sitting where substrate would sit.',
  2100004: 'Vesicle forming from the membrane = the cell is wrapping its arms around something big.',
  2100005: 'Substrate cannot rescue it, so the inhibitor is not at the active site. Where else could it bind?',
  // ---------- Biology 2e: Photosynthesis and Respiration ----------
  2100006: 'Chlorophyll is a pigment. Pigments do one job — catch photons.',
  2100007: 'Six carbons become two threes in the cytoplasm. That is the first chapter of respiration.',
  2100008: 'The light reactions hand the Calvin cycle two currencies. Name both.',
  2100009: 'Glycolysis stalls without NAD+. Find the pathway that recycles it.',
  2100010: 'Protons flow downhill through a turbine. Name the turbine process, not the turbine.',
  2100011: 'Electrons need somewhere to land at the end of the chain. That is oxygen\'s only job here.',
  // ---------- Biology 2e: Genetics and Ecology ----------
  2100012: 'Draw the Punnett square: Tt × Tt. Count the tt corner only.',
  2100013: 'Ten percent rule, applied once. Not twice.',
  2100014: 'Both alleles showing simultaneously in the same animal — what is the textbook name for that?',
  2100015: 'Disproportionate impact relative to abundance. The word starts with a K.',
  2100016: 'Memorize 9:3:3:1. The 9 is the both-dominant box.',
  2100017: 'Concentration goes up as you climb the food chain. Name that pattern.',

  // ---------- Psychology 2e: Research Methods ----------
  2101000: 'What is the researcher changing between groups? Not what they measure — what they set.',
  2101001: 'Mode = most often. Count, do not average.',
  2101002: 'Two things differ between groups when only one was supposed to. Name what that extra one is called.',
  2101003: 'One enormous score is pulling the mean. The middle value ignores it.',
  2101004: 'Defining kindness as "pencils picked up" — that move has a textbook name.',
  2101005: 'Wider spread, bigger spread statistic. Pick the group with the wider range.',
  // ---------- Psychology 2e: Learning and Perception ----------
  2101006: 'Same smell, weaker response over time. Receptors, not learning.',
  2101007: 'Tap predicts food, fish anticipates food. Two stimuli getting linked — what kind of conditioning is that?',
  2101008: 'Reward after a set count of responses. Two words: fixed and ratio.',
  2101009: 'A flat drawing cannot give the brain two-eye input. So the depth must come from one-eye cues.',
  2101010: 'Behavior decreases when something pleasant is taken away. Two-word label.',
  2101011: 'He copied the friend (process one). Then the surprise wore off (process two).',
  // ---------- Psychology 2e: Cognition and Social Psychology ----------
  2101012: 'New learning crowded out the old. The direction matters — newer disrupting older.',
  2101013: 'Blame the person, miss the situation. That is the classic attribution bias.',
  2101014: 'Step by step, every combination, guaranteed to find it. That is the textbook definition of an algorithm.',
  2101015: 'Ambiguous situation, follow the crowd. One-word answer.',
  2101016: 'Vivid memories feel frequent. That is the shortcut.',
  2101017: 'Memory is not a recording — suggestion can write into it. Pick the option that respects that.',

  // ---------- U.S. History: Colonies and Revolution ----------
  2102000: 'Rocky soil, ports, shipbuilding. North, not South.',
  2102001: 'The Articles deliberately starved the federal level. Where did that show up most painfully?',
  2102002: 'The slogan literally states the grievance. Pick the option that matches the slogan.',
  2102003: 'House by population, Senate by state. The compromise that married both plans.',
  2102004: 'War costs went on the colonies\' tab. That is what set off the imperial crisis.',
  2102005: 'Several states held out until rights were promised in writing. The Bill of Rights closed that deal.',
  // ---------- U.S. History: Reform and Civil Rights ----------
  2102006: 'Three numbers, three amendments. The first one is the one that abolishes slavery.',
  2102007: 'Investigative reporters who dragged corruption into the light during the Progressive Era.',
  2102008: 'Free-state, slave-state balance in the new territories was the issue that broke the union.',
  2102009: 'Workers negotiating as a group, not one at a time. That phrase is the answer.',
  2102010: 'Even with rights on paper, enforcement and state action can hollow them out.',
  2102011: 'Trusts gained too much power. Reformers passed laws to break them. One word: antitrust.',
  // ---------- U.S. History: Modern America ----------
  2102012: 'Federal government took on a bigger relief and regulatory role in the 1930s. Name the program.',
  2102013: 'The 1954 ruling that said "separate but equal" had no place in public schools.',
  2102014: 'December 7, 1941 — the surprise attack that ended American neutrality.',
  2102015: 'Public accommodations and employment discrimination both banned. The 1964 Act.',
  2102016: 'Truman Doctrine, NATO, Korea — all instances of one Cold War strategy.',
  2102017: 'A presidential scandal followed by a resignation. Trust in government took the hit.',

  // ---------- Economics: Core Concepts and AD/AS ----------
  2103000: 'What you gave up to get what you chose. That is the cost economists track.',
  2103001: 'Consumer confidence rises → people spend more → AD shifts which way?',
  2103002: 'On a PPF, gaining more of one good costs you units of the other. Read the slope.',
  2103003: '1 / (1 − MPC). Plug in 0.5 and compute.',
  2103004: 'Lower opportunity cost wins the comparison. Compare the give-up rates, not the absolutes.',
  2103005: 'Multiplier × initial spending = total gap closed. Solve for the initial spending you need.',
  // ---------- Economics: Policy and Money ----------
  2103006: 'Medium of exchange, unit of account, store of value. Three jobs for one tool.',
  2103007: 'Expansionary = boost AD = spend more or tax less. Pick the lever, not the direction.',
  2103008: '1 / reserve ratio. Plug it in.',
  2103009: '−MPC / (1 − MPC). Negative because taxes pull spending down.',
  2103010: 'Government borrowing raises rates and squeezes private investment. Name the squeeze.',
  2103011: 'Fed buying bonds = injecting reserves = interest rates fall.',
  // ---------- Economics: Growth and International ----------
  2103012: 'Skills and education embodied in workers. Two words.',
  2103013: 'Strong currency makes exports expensive abroad. Net exports go which way?',
  2103014: 'Output per worker, or output per hour. Pick the ratio, not the headcount.',
  2103015: 'Weaker currency cheapens exports → boosts net exports → which way does AD shift?',
  2103016: 'Goods and services trade goes in current account; financial assets go in capital/financial account.',
  2103017: 'Better tech can boost exports and weaken the need to import, which moves the currency how?',

  // ---------- Web Foundations: Structure and Content ----------
  2104000: 'The browser tab text comes from one element. It lives in the head.',
  2104001: 'Alt text describes what the image shows so non-visual users get the same information.',
  2104002: 'The thing the user sees in the page goes in one specific element. Hint: not <head>.',
  2104003: 'Unordered list = bullet points. Two tag names, parent and child.',
  2104004: 'Use <header>, <main>, <footer>, <nav>. Those are the semantic regions.',
  2104005: 'Linking the label to the input is a `for`/`id` job.',
  // ---------- Web Foundations: Semantics and Accessibility ----------
  2104006: 'Site navigation lives in a landmark named after itself.',
  2104007: 'Screen readers list links out of context. "Click here" gives them nothing.',
  2104008: 'If clicking it does something, it should be a real button — keyboard reachable, screen-reader friendly.',
  2104009: 'h1 once, then h2, then h3 — do not skip levels. Outline structure, not visual size.',
  2104010: 'A self-contained piece that could stand alone (a blog post, a card). One tag for that.',
  2104011: 'A visible label connected to its control is the accessibility floor for form fields.',
  // ---------- Web Foundations: Debugging and Web Literacy ----------
  2104012: 'HTML = structure. CSS = presentation. JS = behavior. Match each to its job.',
  2104013: 'An <img> with no `src` has nothing to load. That attribute is required.',
  2104014: 'Every <li> needs to be closed before the list ends, or nesting goes sideways.',
  2104015: 'Animations and click handlers are behavior. Behavior lives in JavaScript.',
  2104016: 'Tags close in the reverse order they opened. First open, last closed.',
  2104017: 'Start with semantic HTML that works without JS, then layer enhancements on top.',

  // ---------- Math Extensions: Proof and Algebra ----------
  2105000: 'Let n = 2k+1, square it, and show the result is also of the form 2m+1.',
  2105001: 'Pull out perfect-square factors from under the radical sign.',
  2105002: 'b² − 4ac > 0 = two real roots; = 0 = one; < 0 = none.',
  2105003: 'f(x − a) shifts right by a; f(x) + b shifts up by b. Read the parentheses carefully.',
  2105004: 'Assume √2 = a/b in lowest terms, square it, derive a contradiction about parity.',
  2105005: 'If (x − r) is a factor of f, then f(r) = 0. Run it the other way too.',
  // ---------- Math Extensions: Calculus ----------
  2105006: 'Velocity is the derivative of position. Differentiate.',
  2105007: 'Integrate the polynomial term by term, then evaluate at the endpoints and subtract.',
  2105008: 'Stationary points are where f\'(x) = 0. Solve the derivative equation.',
  2105009: 'Pick u and dv. Then ∫ u dv = uv − ∫ v du.',
  2105010: 'Use the constraint to eliminate a variable, differentiate, set to zero.',
  2105011: 'Separable equation? Move all y to one side, all x to the other, then integrate.',
  // ---------- Math Extensions: Probability and Mechanics ----------
  2105012: 'Favorable outcomes over total outcomes. Equal-likelihood model.',
  2105013: 'Magnitude of a 2D vector = √(x² + y²). Pythagoras.',
  2105014: 'Binomial: C(n,k) · p^k · (1−p)^(n−k). Identify n, k, p first.',
  2105015: 'F = ma. Solve for whichever variable is missing.',
  2105016: '|A ∪ B| = |A| + |B| − |A ∩ B|. Subtract the overlap once.',
  2105017: 'Horizontal motion is constant velocity; vertical is free fall. Treat them independently.',

  // ---------- IB History: WWI Causes ----------
  2106000: 'M is for militarism. Build-up of armies and navies as state policy.',
  2106001: 'One assassination dragged half of Europe in because of treaty entanglements.',
  2106002: 'Industrial powers wanted raw materials and markets — that competition fed European tension.',
  2106003: 'Total war mobilizes the entire economy and population, not just an army.',
  2106004: 'Industrial production made mass-casualty warfare possible. That is the structural shift.',
  2106005: 'Trigger ≠ underlying cause. The assassination was a trigger, not the deep cause.',
  // ---------- IB History: Revolutions and Interwar ----------
  2106006: 'Reason, individual rights, social contract — those are the Enlightenment moves.',
  2106007: 'Mass unemployment and currency collapse set the stage for radical politics in the 1930s.',
  2106008: 'Enlightenment limits power; totalitarianism concentrates it. They sit on opposite sides.',
  2106009: 'Fascism promised order in chaos and scapegoats for grievance. Pick the appeal that matches.',
  2106010: '1789 challenged monarchy with rights-based claims; 1933 dismantled democracy with mass mobilization.',
  2106011: 'Economic collapse, democratic fragility, charismatic leadership, scapegoats. Pick the cluster.',
  // ---------- IB History: Sources and Change ----------
  2106012: 'Primary = produced at the time. Secondary = produced about that time later.',
  2106013: 'A textbook written in 2010 about WWI is the textbook example of a secondary source.',
  2106014: 'Author, purpose, audience, context. That is the OPCVL checklist.',
  2106015: 'Continuity = what stayed the same. Change = what shifted. Both can be true at once.',
  2106016: 'Conflicting sources are not failure — they are evidence about authorship and perspective.',
  2106017: 'One source, one anecdote — not enough to generalize about a whole society.',

  // ---------- Grammar: Parts and Clauses ----------
  2107000: 'Prepositions show a relationship — usually of place or time. Look for the small connector word.',
  2107001: 'Who or what is doing the verb? That noun is the subject.',
  2107002: 'Indirect object answers "to whom?" or "for whom?" the action is done.',
  2107003: 'A sentence needs a subject and a finite verb. Without both, it is a fragment.',
  2107004: 'Two independent clauses jammed together with no joiner — that is a run-on. Pick the legal join.',
  2107005: 'Starts with a subordinator (because, although, since, when). Cannot stand alone.',
  // ---------- Grammar: Voice and Punctuation ----------
  2107006: 'Singular subject takes a singular verb. Find the head noun and match.',
  2107007: 'Singular noun + apostrophe + s. The order matters.',
  2107008: 'Active voice = subject does the action. Flip the sentence so the doer comes first.',
  2107009: 'Two complete sentences joined without a conjunction — that is the semicolon\'s job.',
  2107010: '"If I were" not "if I was." Subjunctive uses "were" for contrary-to-fact situations.',
  2107011: 'A colon introduces a list only after a complete independent clause.',
  // ---------- Grammar: Clarity and Style ----------
  2107012: 'The opening modifier needs to modify the subject that comes right after the comma.',
  2107013: 'Two possible nouns the pronoun could refer to — that is the ambiguity. Rewrite to disambiguate.',
  2107014: 'Items in a list should share grammatical form — all gerunds, all infinitives, or all nouns.',
  2107015: 'Pronoun and antecedent must agree in number. Plural antecedent, plural pronoun.',
  2107016: 'A modifier must sit next to what it modifies, or it modifies the wrong thing.',
  2107017: 'When "it" or "they" could mean two things, name the noun outright.',

  // ---------- NGSS Biology ----------
  442001: 'Enzymes are catalysts. Catalysts lower activation energy and speed reactions up.',
  442002: 'Mitosis = two identical body cells. Meiosis = four different gametes. Pick the right one.',
  442003: 'Homologous chromosomes pair up and swap segments. That swap has a name.',
  442004: 'DNA gets read into RNA in the nucleus. That step has a one-word name.',
  442005: 'Ribosomes do translation. Either floating in the cytoplasm or on the rough ER.',
  442006: 'Same bone plan, different functions across species — that is the fingerprint of common ancestry.',
  442007: 'Roughly 90% of energy is lost at each level — mostly as heat. Only 10% transfers.',
  442008: 'Negative feedback reverses the change. Find the option where the response counters the stimulus.',
  442009: 'Mutations matter when they change a protein that affects a trait — and get passed on.',
  442010: 'Carrying capacity is the long-run population the environment can support without crash.',

  // ---------- NGSS Physics ----------
  443001: 'a = Δv / Δt. (25 − 10) / 5.',
  443002: 'Newton\'s third law: every push produces an equal-and-opposite push back.',
  443003: 'W = F · d when force and motion line up. 20 × 3.',
  443004: 'Ignore air resistance and energy is conserved. PE drops, KE rises, the sum stays put.',
  443005: 'V = IR. Multiply.',
  443006: 'Series = one path. Whatever current enters has to pass through every component.',
  443007: 'λ = v / f. Divide.',
  443008: 'Like charges repel; unlike charges attract. Two positives = repel.',
  443009: 'Impulse = F · Δt = Δ(mv). It is the change in momentum.',
  443010: 'Slope on a position-time graph = rise over run = position per time = velocity.',

  // ---------- Open Logic ----------
  425001: 'The conclusion is whatever the argument is trying to prove. "Therefore" points at it.',
  425002: 'Validity is structural — the premises being true forces the conclusion to be true.',
  425003: 'Sound = valid + true premises. Both conditions, both required.',
  425004: 'The only row of the truth table where P → Q is false: P true, Q false.',
  425005: 'Affirming the consequent: knowing Q does not let you conclude P. Other things could make Q true.',
  425006: 'Denying the antecedent: not-P does not give you not-Q. Q could still be true another way.',
  425007: 'To disprove "all," find one case inside the group that fails. One is enough.',
  425008: 'To prove "some," produce one witness that fits the description. One is enough.',
  425009: 'A counterexample disproves a generalization by showing one case where it fails.',
  425010: 'Necessary condition = required. If it is missing, the outcome cannot happen.',
}

// HIGH_STANDARD_CORRECT_SHORTENED — questions where the correct answer ran
// substantially longer than the longest distractor. Each entry shortens
// `correct` to a tighter line and pushes the trimmed detail to
// `lessonAddendum` so no content is lost.

export const HIGH_STANDARD_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  2100011: {
    newCorrect: 'Oxygen accepts electrons at the end of the chain.',
    lessonAddendum: 'Oxygen is the final electron acceptor for the electron transport chain — without it, the chain backs up and aerobic respiration stalls.',
  },
  2101000: {
    newCorrect: 'The audio condition: whale-song vs silence.',
    lessonAddendum: 'The independent variable is what the researcher manipulates between groups — in this case, whether students study with whale-song audio or in silence.',
  },
  2102003: {
    newCorrect: 'A bicameral Congress: House by population, Senate equal per state.',
    lessonAddendum: 'The Great Compromise blended the Virginia Plan (representation by population) with the New Jersey Plan (equal representation by state) into a two-chamber legislature.',
  },
  2102010: {
    newCorrect: 'State laws, violence, and weak enforcement can undermine paper rights.',
    lessonAddendum: 'Constitutional rights on paper are only as strong as enforcement. State-level laws, private violence, and lax federal enforcement repeatedly hollowed out federal protections during Reconstruction and Jim Crow.',
  },
  2102011: {
    newCorrect: 'Monopolies could limit competition, raise prices, and concentrate power.',
    lessonAddendum: 'Progressive Era antitrust reform responded to monopolies that suppressed competition, hiked prices for consumers, and accumulated political as well as economic power.',
  },
  2102015: {
    newCorrect: 'Banned segregation in public accommodations and employment.',
    lessonAddendum: 'The Civil Rights Act of 1964 outlawed discrimination based on race, color, religion, sex, or national origin in public accommodations and employment, and authorized federal enforcement.',
  },
  2102017: {
    newCorrect: 'It raised distrust of government and tightened checks on the presidency.',
    lessonAddendum: 'The Watergate scandal damaged public trust in government, drove reforms to campaign finance and executive accountability, and renewed attention to congressional oversight of the presidency.',
  },
  2104001: {
    newCorrect: 'Add an `alt` attribute describing the image content.',
    lessonAddendum: 'Example: <img src="hamster.jpg" alt="Hamster wearing sunglasses">. The alt text is what screen readers announce and what shows when the image fails to load.',
  },
  2105004: {
    newCorrect: 'Assume √2 = a/b in lowest terms; derive that both a and b are even — contradiction.',
    lessonAddendum: 'Full sketch: if √2 = a/b reduced, then a² = 2b² so a is even. Let a = 2c; then b² = 2c², so b is even too. But a/b was supposed to be in lowest terms — contradiction, so √2 cannot be rational.',
  },
  2106002: {
    newCorrect: 'Industrial states competed for raw materials, markets, and strategic territory.',
    lessonAddendum: 'Industrialization drove demand for resources and overseas markets, which fueled imperial rivalries between European powers and helped build the tensions that exploded in 1914.',
  },
  2106005: {
    newCorrect: 'Trigger = the assassination; deeper causes = alliances, militarism, imperialism, nationalism.',
    lessonAddendum: 'Historians distinguish the proximate trigger (the assassination of Archduke Franz Ferdinand) from the long-term structural causes — the M.A.I.N. cluster of militarism, alliances, imperialism, and nationalism — that made the war system-wide.',
  },
  2106008: {
    newCorrect: 'Enlightenment emphasized rights and limits on power; totalitarianism concentrated power.',
    lessonAddendum: 'Enlightenment thinkers argued for individual rights and constitutional limits on government, while totalitarian regimes in the twentieth century sought broad central control over economic, political, and cultural life.',
  },
  2106010: {
    newCorrect: 'Both faced legitimacy crises, but rights-based revolutions and totalitarian seizures diverge sharply.',
    lessonAddendum: 'Both 1789 and 1933 occurred amid legitimacy crises and economic strain. But Enlightenment-inspired revolutions (1789) challenged monarchy with rights claims, while interwar fascist seizures dismantled democracies through mass mobilization.',
  },
  2106015: {
    newCorrect: 'Imperial competition continued, but industrial tech reshaped warfare\'s scale.',
    lessonAddendum: 'Continuity: great-power rivalry and imperial competition persisted across the nineteenth and twentieth centuries. Change: industrial technology made war vastly more destructive — machine guns, artillery, chemical weapons, and total mobilization.',
  },
  2107013: {
    newCorrect: 'It could mean the sandwich or the notebook.',
    lessonAddendum: 'When a pronoun could refer to two different nouns, the sentence is ambiguous. Rewrite to name the referent explicitly.',
  },
  443002: {
    newCorrect: 'The ground pushes forward on the skateboarder (Newton\'s third law).',
    lessonAddendum: 'Every action force has an equal and opposite reaction. Push backward on the ground, and the ground pushes forward on you — that forward reaction force is what accelerates the skateboarder.',
  },
}

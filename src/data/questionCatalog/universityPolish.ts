// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings for
// the university-tier roadmaps (~780 questions across the five university*.ts
// files: universityAcademic, universityAgentGenerated, universityPrep,
// universityCollege, and the cycled math quizzes in universityBuilders).
//
// UNIVERSITY_SUB_TOPICS groups each track's questions into lesson-shaped
// clusters by chapter/topic. Where a track exposes more than 8 natural
// clusters, the grouping caps at 8 to match the lesson grouping ceiling.
//
// UNIVERSITY_MENTOR_HINTS overrides the generic scaffold hint with a one-line
// second-person nudge in the voice of a university lecturer or TA familiar
// with the subject — calc TA for calculus, neuro postdoc for neuroscience,
// econ prof for intermediate micro, MCAT tutor for MCAT items, etc.
//
// UNIVERSITY_CORRECT_SHORTENED trims `correct` strings flagged by the length
// heuristic (correct >= 1.8x longest wrong AND >= 20 chars longer). Trimmed
// explanatory clauses move into `lessonAddendum` so no information is lost.

export const UNIVERSITY_SUB_TOPICS: Record<string, number[]> = {
  // ==================== universityAcademic.ts ====================

  // -------------------- Organic Chemistry --------------------
  'Org Chem: Structure & Bonding': [16301, 16302, 16305, 16317, 16323],
  'Org Chem: Nomenclature & Stereo': [16304, 16306, 16307, 16310, 16311, 16316],
  'Org Chem: Mechanisms & Energy': [16303, 16309, 16312, 16313, 16315],
  'Org Chem: Spectroscopy': [16308, 16314, 16320],
  'Org Chem: Alkene & Alkyne Reactions': [16318, 16319, 16321, 16324],
  'Org Chem: Advanced Synthesis': [16322, 16901, 16902, 16903, 16904, 16905, 16906, 16907, 16908, 16909, 16910],

  // -------------------- Neuroscience --------------------
  'Neuro: Cellular & Anatomy': [16401, 16403, 16406, 16408, 16420],
  'Neuro: Synaptic Chemistry': [16402, 16404, 16407, 16411, 16414, 16418, 16424],
  'Neuro: Membrane Physiology': [16409, 16410, 16413, 16415],
  'Neuro: Sensory & Motor Systems': [16417, 16419],
  'Neuro: Cognition & Memory': [16405, 16412, 16416, 16421, 16423],
  'Neuro: Advanced Topics': [16422, 17001, 17002, 17003, 17004, 17005, 17006, 17007, 17008, 17009, 17010],

  // -------------------- Research Methods --------------------
  'Methods: Questions, Variables, Validity': [16501, 16503, 16505, 16523],
  'Methods: Measurement & Levels': [16502, 16508, 16512, 16522],
  'Methods: Sampling & Power': [16504, 16510, 16517],
  'Methods: Experimental Design': [16507, 16513, 16515, 16516, 16518],
  'Methods: Inferential Statistics': [16506, 16509, 16511, 16514, 16520, 16521],
  'Methods: Ethics & Replication': [16519],
  'Methods: Advanced (IV, RDD, Mixed Methods)': [16524, 17101, 17102, 17103, 17104, 17105, 17106, 17107, 17108, 17109, 17110],

  // -------------------- Philosophy --------------------
  'Phil: Doing Philosophy': [16601, 16604, 16605, 16609, 16610],
  'Phil: Epistemology & Skepticism': [16602, 16607, 16611, 16615, 16619],
  'Phil: Ethics & Moral Theory': [16603, 16608, 16613, 16621, 16624],
  'Phil: Metaphysics & Mind': [16606, 16612, 16616, 16617, 16618, 16622, 16623],
  'Phil: Religion & Politics': [16614, 16620],
  'Phil: Advanced Topics': [17201, 17202, 17203, 17204, 17205, 17206, 17207, 17208, 17209, 17210],

  // -------------------- Data Structures --------------------
  'DS: Linear Structures': [16701, 16702, 16706],
  'DS: Hash Tables': [16704, 16707],
  'DS: Trees & BSTs': [16703, 16708, 16709],
  'DS: Heaps': [16710],
  'DS: Graphs': [16711, 16712, 16713],
  'DS: Complexity & Disjoint Sets': [16705, 16714],

  // -------------------- International Relations --------------------
  'IR: Foundations': [16801, 16802, 16803],
  'IR: Theories & Soft Power': [16804, 16805, 16806, 16807],
  'IR: Foreign Policy': [16808, 16809],
  'IR: International Law': [16810, 16811],
  'IR: Political Economy': [16812, 16813],
  'IR: Contemporary': [16814],

  // -------------------- Marketing --------------------
  'Marketing: STP & Positioning': [420059, 420060],
  'Marketing: Strategy & Frameworks': [420055, 420056, 420061],
  'Marketing: Consumer & Research': [420057, 420058],
  'Marketing: Value & Brand': [420052, 420053],
  'Marketing: Promotion & Metrics': [420062, 420063, 420054],
  'Marketing: Behavioral Pricing': [420064],

  // ==================== universityAgentGenerated.ts ====================

  // -------------------- MCAT --------------------
  'MCAT: Chem/Phys Foundations': [3104000, 3104002, 3104004, 3106000, 3106001, 3106002, 3106003, 3106004, 3106005, 3106006, 3106007, 3106008, 3106009, 3106010, 3106011, 3106012, 3106013, 3106014, 3106015, 3106016, 3106017],
  'MCAT: Bio/Biochem Foundations': [3104001, 3104003, 3104012, 3104016, 3107000, 3107001, 3107002, 3107003, 3107004, 3107005, 3107006, 3107007, 3107008, 3107009, 3107010, 3107011, 3107012, 3107013, 3107014, 3107015, 3107016, 3107017],
  'MCAT: Psych/Soc Foundations': [3104006, 3104009, 3104010],
  'MCAT: Physiology': [3104005],
  'MCAT: Experimental Design & Stats': [3104007, 3104008, 3104011, 3104013, 3104015, 3104017, 3104014],
  'MCAT: CARS': [4310200, 4310201, 4310202, 4310203, 4310204, 4310205, 4310206, 4310207],
  'EngComp: Argument & Structure': [3105000, 3105001, 3105002, 3105003, 3105004, 3105005, 3105011, 3105015, 3105016, 3105017],
  'EngComp: Research & Sources': [3105006, 3105007, 3105008, 3105009, 3105010],
  'EngComp: Revision & Style': [3105012, 3105013, 3105014],

  // -------------------- LSAT --------------------
  'LSAT: Conditional & Quantified Logic': [3108000, 3108002, 3108004, 3108005],
  'LSAT: Argument Structure': [3108001, 3108006, 3108012],
  'LSAT: Flaws & Causal Reasoning': [3108003, 3108011],
  'LSAT: Assumptions & Strengthen/Weaken': [3108007, 3108008, 3108009, 3108010],
  'LSAT: Reading Comp': [3108013, 3108014, 3108015, 3108016, 3108017],

  // -------------------- Anatomy & Physiology --------------------
  'A&P: Terminology & Histology': [3109000, 3109001, 3109002, 3109004, 3109005],
  'A&P: Nervous Tissue & APs': [3109003, 3109007, 3109008, 3109010],
  'A&P: Muscle Contraction': [3109006, 3109011],
  'A&P: Autonomic & Cardiac': [3109009, 3109012, 3109014, 3109016],
  'A&P: Renal & Acid-Base': [3109013, 3109015, 3109017],

  // -------------------- General Chemistry II --------------------
  'GenChem II: Kinetics': [3110000, 3110001, 3110002, 3110003, 3110004, 3110005],
  'GenChem II: Equilibrium & Acid-Base': [3110006, 3110007, 3110008, 3110009, 3110010, 3110011, 3110012, 3110013, 3110014, 3110015, 3110016, 3110017],

  // -------------------- Financial Accounting --------------------
  'FinAcct: Equation & Statements': [3111000, 3111001, 3111002, 3111003, 3111004, 3111005],
  'FinAcct: Recognition & Accruals': [3111006, 3111007, 3111008, 3111009, 3111010, 3111011],
  'FinAcct: Cost, Inventory, Receivables': [3111012, 3111013, 3111014, 3111015, 3111016, 3111017],

  // -------------------- Electrical Engineering --------------------
  'EE: DC Circuits & Op-Amps': [3112000, 3112001, 3112002, 3112003, 3112004, 3112005],
  'EE: Transients & AC': [3112006, 3112007, 3112008, 3112009, 3112010, 3112011],
  'EE: Frequency Response': [3112012, 3112014, 3112016],
  'EE: Digital Logic': [3112013, 3112015, 3112017],

  // -------------------- Eureka Math Precalculus + early courses --------------------
  'Precalc: Complex Numbers & Polar': [3113000, 3113002, 3113004],
  'Precalc: Linear Algebra Intro': [3113001, 3113003, 3113005, 3113006, 3113007, 3113008, 3113009, 3113010, 3113011],
  'Precalc: Trig & Functions': [3113012, 3113013, 3113014, 3113016, 3113017],
  'Precalc: Limits': [3113015],
  'Bio I: Molecules & Cells': [3100000, 3100001, 3100002, 3100003, 3100004, 3100005],
  'Bio I: Bioenergetics': [3100006, 3100007, 3100008, 3100009, 3100010, 3100011],
  'Bio I: Genetics': [3100012, 3100013, 3100014, 3100015, 3100016, 3100017],
  'Chem I: Matter & Atoms': [3101000, 3101001, 3101002, 3101003, 3101004, 3101005],
  'Chem I: Bonding & Stoichiometry': [3101006, 3101007, 3101008, 3101009, 3101010, 3101011],
  'Chem I: Gases & Thermo': [3101012, 3101013, 3101014, 3101015, 3101016, 3101017],
  'Physics I: Kinematics': [3102000, 3102001, 3102002, 3102003, 3102004, 3102005],
  'Physics I: Forces & Energy': [3102006, 3102007, 3102008, 3102009, 3102010],
  'Physics I: Circular & Rotational': [3102011, 3102012, 3102013, 3102014, 3102015, 3102016, 3102017],

  // -------------------- Introduction to Sociology --------------------
  'Soc: Foundations & Theory': [3103000, 3103001, 3103002, 3103003, 3103004],
  'Soc: Self, Group, Deviance': [3103005, 3103006, 3103007, 3103008, 3103009],
  'Soc: Stratification & Inequality': [3103010, 3103011],
  'Soc: Institutions': [3103012, 3103013, 3103014, 3103015],
  'Soc: Change & Urban': [3103016, 3103017],

  // ==================== universityPrep.ts ====================

  // -------------------- ML --------------------
  'ML: SQL & Stats Fundamentals': [2005, 2006],
  'ML: Algorithms & Regularization': [2007, 2008, 2009],
  'ML: A/B Testing': [2010, 2011],
  'ML: Production & Drift': [2012, 2013],
  'ML: Bias-Variance': [2014],

  // -------------------- Software Engineering --------------------
  'SWE: Algorithms & Data Structures': [3005, 3006, 3007, 3008, 3009],
  'SWE: System Design': [3010, 3011, 3012],
  'SWE: OOD & Patterns': [3013, 3014],

  // -------------------- Research Prep --------------------
  'ResearchPrep: Literature & Critique': [4005],
  'ResearchPrep: Causal Inference': [4006, 4007],
  'ResearchPrep: Statistics': [4008, 4009],
  'ResearchPrep: Applied ML/Stats': [4010, 4011],
  'ResearchPrep: Communication': [4012, 4013, 4014],

  // -------------------- UX Research --------------------
  'UXR: Strategy & Recruiting': [11005, 11006],
  'UXR: Interview Craft': [11007, 11008],
  'UXR: Synthesis': [11009, 11010],
  'UXR: Stakeholder Communication': [11011, 11012],
  'UXR: Portfolio & Advanced': [11013, 11014],

  // ==================== universityCollege.ts (inline) ====================
  'LinAlg: Vectors & Matrices': [16001, 16002, 16003, 16004],

  // ==================== universityBuilders.ts cycled quizzes ====================
  // Each cycled quiz emits 50 questions cycling through N blueprints; we list
  // the base IDs and rely on per-cycle clustering by blueprint chapter via the
  // mentor-hint table below.
  'Calc AB: Cycled Blueprints (24901-24950)': Array.from({ length: 50 }, (_, i) => 24901 + i),
  'AP Stats: Cycled Blueprints (25001-25050)': Array.from({ length: 50 }, (_, i) => 25001 + i),
  'Trig: Cycled Blueprints (25101-25150)': Array.from({ length: 50 }, (_, i) => 25101 + i),
  'College Algebra: Cycled Blueprints (25201-25250)': Array.from({ length: 50 }, (_, i) => 25201 + i),
  'Stats/Prob: Cycled Blueprints (25301-25350)': Array.from({ length: 50 }, (_, i) => 25301 + i),
  'Calc BC: Cycled Blueprints (25401-25450)': Array.from({ length: 50 }, (_, i) => 25401 + i),
}

// Voice notes:
//  - Org chem hints: experienced TA who has graded too many synthesis problems.
//  - Neuro hints: postdoc who teaches the section in a Bear-Connors-Paradiso course.
//  - Methods hints: methodologist who reviewers for behavioral journals.
//  - Phil hints: professor who actually argues for a living.
//  - DS/SWE/ML hints: senior IC mentoring an intern who wants a FAANG offer.
//  - MCAT hints: a Kaplan/Princeton-Review-style tutor pattern.
//  - Marketing/IR/FinAcct/EE hints: subject-matter instructor in the corresponding course.
//  - Calc/Stats cycled hints: math TA at office hours.

export const UNIVERSITY_MENTOR_HINTS: Record<number, string> = {
  // ---------- Organic Chemistry ----------
  16301: 'Organic = carbon-centric. Hydrocarbons, functional groups, mechanisms — they all hang off C.',
  16302: 'Strip the word: hydro- + -carbon. Two elements, no more.',
  16303: 'Functional groups are reactivity templates. Same group, same pattern, across molecules.',
  16304: 'Same formula, different connectivity or 3D arrangement. Constitutional vs stereo branches.',
  16305: 'Methane is the textbook sp3 case: four equivalent C-H bonds, tetrahedral, 109.5 degrees.',
  16306: 'Walk the prefix ladder: meth, eth, prop, but, pent, hex. Five carbons = pent.',
  16307: 'Chiral = handed = no internal mirror plane. The hand metaphor is exactly right.',
  16308: 'OH stretches are broad because of H-bonding. ~3300 cm-1 broad is the OH signature.',
  16309: 'More alkyl neighbors stabilize the cation by hyperconjugation and induction. Tertiary wins.',
  16310: 'CIP priority: atomic number at the first atom out, then walk further if tied.',
  16311: 'Anti-staggered keeps the methyl groups 180 degrees apart — minimum strain.',
  16312: 'SN2 = backside attack = Walden inversion. Stereocenter flips, period.',
  16313: 'Zaitsev favors the more substituted alkene because alkene stability increases with substitution.',
  16314: 'n + 1 rule: 3 equivalent neighbors give 4 peaks. Count the protons on adjacent carbons.',
  16315: 'Bulky strong base on a secondary substrate steers the reaction toward E2 elimination.',
  16316: 'cis-1,2-disubstituted on a chair must be one-axial-one-equatorial. Both equatorial requires trans.',
  16317: 'Complete octets dominate; minimizing formal charge is the secondary criterion.',
  16318: 'Hydroboration is anti-Markovnikov and syn. OH ends up on the less substituted carbon.',
  16319: '1-Bromobutane to 1-butyne: eliminate to the alkene, brominate, then double-eliminate with NaNH2.',
  16320: 'Singlet at 2.1 ppm (3H) plus carbonyl IR at 1715 cm-1 — that is the methyl ketone fingerprint.',
  16321: 'E/Z is CIP applied to each end. Same side = Z, opposite side = E.',
  16322: 'Endo is favored by secondary orbital overlap in the transition state — kinetic, not thermodynamic.',
  16323: 'Trichloroacetic acid: three EWGs stabilize the conjugate base inductively. Lowest pKa wins.',
  16324: 'mCPBA epoxidation is syn-addition; trans alkene gives trans epoxide as a racemate.',
  // ---------- Neuroscience ----------
  16401: 'Neurons are electrochemical signal-carriers. Everything else is downstream of that core function.',
  16402: 'Synapse = communication junction between cells. Chemical or electrical, but always cell-to-cell.',
  16403: 'Cerebrum = cortex + subcortex. Higher cognition, conscious processing, language, perception.',
  16404: 'Neurotransmitters are chemical messengers in the cleft. Bind, signal, get cleared.',
  16405: 'H.M.: bilateral medial temporal removal, profound anterograde amnesia. Hippocampus = declarative memory.',
  16406: 'Dendrites = input. Axon = output. Cell body integrates.',
  16407: 'Glutamate is fast excitation everywhere in vertebrate CNS. GABA is the inhibitory counterpart.',
  16408: 'Frontal lobe houses prefrontal cortex — planning, judgment, working memory, decisions.',
  16409: 'Myelin sheaths force the action potential to jump between Nodes of Ranvier. Saltatory = leaping.',
  16410: 'Na/K-ATPase: 3 Na out, 2 K in. Net positive charge leaves the cell each cycle.',
  16411: 'Ionotropic receptors ARE ion channels — direct gating, microsecond timescale.',
  16412: "Broca = broken speech production. Wernicke = wrecked comprehension. Both left-hemisphere in most.",
  16413: 'Voltage-gated Na+ channels inactivate via an inactivation gate after depolarization — that is the absolute refractory.',
  16414: 'Ca2+ entry through voltage-gated channels at the terminal triggers vesicle fusion. Calcium is THE trigger.',
  16415: 'Nernst at body temp: 61 mV * log(out/in). Higher K inside means efflux drives membrane negative.',
  16416: 'LTP postsynaptic: AMPA receptor insertion into the membrane. More receptors, larger EPSP.',
  16417: 'Photoreceptors are weird: depolarized in the dark, hyperpolarized by light. cGMP keeps the dark current on.',
  16418: 'SNAREs winch vesicle and plasma membrane together. Calcium binds synaptotagmin, which triggers the SNARE conformation.',
  16419: 'Direct pathway is a double negative: inhibits the inhibitor of thalamus. Net effect is GO.',
  16420: 'Cortical area scales with receptor density and behavioral importance, not physical size.',
  16421: 'NMDA needs glutamate AND depolarization to expel the Mg2+ block. Pre + post coincidence = Hebbian rule.',
  16422: 'BOLD measures the oxy/deoxy hemoglobin ratio. It is an indirect, delayed proxy for neural activity.',
  16423: "Parkinson's = dopaminergic cell loss in substantia nigra pars compacta. Motor symptoms follow.",
  16424: 'Three EPSPs at the same spot, different times = temporal summation. Spatial would be different locations, same time.',
  17001: 'Absolute refractory is the Na+ inactivation gate closed. No depolarization can re-open it until reset.',
  17002: 'SNARE complex pulls vesicle and membrane together. Calcium-triggered fusion follows.',
  17003: 'Indirect pathway inhibits the thalamus more strongly — the brake on unwanted movement.',
  17004: 'In the dark: high cGMP, CNG channels open, sodium influx depolarizes the rod. Light closes that current.',
  17005: 'NMDA = coincidence detector. Glutamate binding plus postsynaptic depolarization expels the Mg2+ block.',
  17006: 'GABA-A is the ionotropic chloride channel. Cl- influx hyperpolarizes the postsynaptic cell.',
  17007: 'Growth cones follow chemical gradients of guidance cues — netrins, semaphorins, slits, ephrins.',
  17008: 'Cortical magnification reflects tactile acuity, not body part size. Two-point discrimination is the readout.',
  17009: 'Cerebellar damage = ataxia. Intention tremor and dysmetria, not resting tremor.',
  17010: 'Astrocytes vacuum glutamate out of the cleft via EAAT transporters. Failure causes excitotoxicity.',

  // ---------- Research Methods ----------
  16501: 'A hypothesis is a testable prediction. If nothing could disprove it, it is not a hypothesis.',
  16502: 'Quantitative = numbers. Qualitative = narrative. Mixed methods combine both deliberately.',
  16503: 'The independent variable is what you manipulate. Dependent is what you measure as a consequence.',
  16504: 'Sample = subset of the larger population you want to generalize to. Representativeness is the question.',
  16505: 'Caffeine is the manipulation; test score is the outcome. IV = caffeine.',
  16506: 'Null hypothesis = "no relationship." H0 is the default you try to reject.',
  16507: 'Numerical measurement = quantitative. Categorical descriptions = qualitative.',
  16508: 'Consistent but wrong = reliable but invalid. Validity requires accuracy on top of consistency.',
  16509: 'Mean is pulled by outliers; median resists them. With billionaires in town, take the median.',
  16510: 'Stratified: divide the population into strata, then random sample within each. Guarantees subgroup representation.',
  16511: 'Type I = false positive = reject true H0. Alpha controls the rate.',
  16512: 'Ordinal = ordered categories without equal spacing. Rank is the canonical example.',
  16513: 'RCTs randomize assignment — that is the engine of causal inference. Selection bias evaporates.',
  16514: 'p = 0.05 means a 5% chance of seeing this data IF the null is true. It is not P(H0 | data).',
  16515: 'Year-long study, growing kids — maturation is the threat. History would be an external event.',
  16516: 'Regression discontinuity: assignment is forced by a sharp cutoff. Compare just above to just below.',
  16517: 'Lower alpha = harder to reject H0 = more Type II error = less power. Power and alpha trade off.',
  16518: 'Matching constructs balanced groups when you cannot randomize. It is a quasi-experimental tool.',
  16519: 'Belmont: Respect, Beneficence, Justice. Distributing burdens fairly is justice.',
  16520: 'p-hacking = trying tests, subsets, transformations until something hits p < 0.05. It inflates false positives.',
  16521: 'Three or more group means = one-way ANOVA. T-tests across pairs inflate Type I error.',
  16522: 'Construct validity = does the measure capture the theoretical concept? IQ vs the concept of intelligence.',
  16523: 'Scoping review maps the landscape; systematic review answers a focused PICO question.',
  16524: 'Instruments correlate with the IV but only touch the DV via the IV. They solve endogeneity.',
  17101: 'Construct validity: does the operationalization match the theoretical construct?',
  17102: 'Double-blind blocks expectancy effects on both sides — researcher and participant.',
  17103: 'Type I error = false positive = rejecting a true H0. "Crying wolf" is the right mnemonic.',
  17104: 'Stratified sampling guarantees proportional representation of subgroups, reducing sampling variance.',
  17105: 'Beneficence = maximize benefits, minimize harms. Risk-benefit analysis sits here.',
  17106: 'Grounded theory builds the theory inductively from the data. Theory is "grounded" in observations.',
  17107: 'Reliable + invalid = precisely wrong. The broken scale that always reads 100 lb is the canonical case.',
  17108: 'Quasi-experimental = no random assignment. Control group can exist; randomization is what is missing.',
  17109: 'Multiple t-tests across k groups inflate family-wise alpha. ANOVA controls it with one omnibus test.',
  17110: 'Sequential Explanatory: quant first (the what), then qual to explain it (the why).',

  // ---------- Philosophy ----------
  16601: 'Argument = premises supporting a conclusion via reasoning. Volume and confidence are irrelevant.',
  16602: 'Classical JTB: knowledge as justified true belief. Then Gettier broke it.',
  16603: 'Ethics studies right conduct and moral value — normative, not descriptive.',
  16604: 'Premises provide independent support for the conclusion. Restating the conclusion is not a premise.',
  16605: 'Validity is about logical structure: if the premises were true, the conclusion could not be false.',
  16606: 'Metaphysics asks what exists; epistemology asks how we know; ethics asks what we ought to do.',
  16607: "In Plato's cave, shadows stand for appearances taken as reality. The outside world and sun are the truth side.",
  16608: 'Utilitarianism aggregates wellbeing; deontology obeys rules regardless of outcome.',
  16609: 'Ad hominem swerves from the claim to the person making it. Ask whether the reply attacks the argument or just the arguer.',
  16610: 'Modus ponens affirms the antecedent: if P then Q; P; therefore Q. Do not reverse it into Q therefore P.',
  16611: 'Gettier cases show that JTB can be satisfied without genuine knowledge — luck contaminates justification.',
  16612: "Ship of Theseus: identity over time when constitution changes. Persistence is the question.",
  16613: "Kant's categorical imperative: act only on maxims you can universalize without contradiction.",
  16614: 'Problem of evil: how can an omnipotent, omniscient, benevolent God permit suffering?',
  16615: 'Gettier cases keep belief, truth, and justification, then add luck. That is why JTB is not sufficient for knowledge.',
  16616: 'Free will vs determinism: compatibilism tries to thread the needle by redefining freedom.',
  16617: 'Functionalism: mental states are defined by their causal role, not by physical substrate.',
  16618: 'Nagel asks about first-person experience: even perfect physical facts may miss what it is like from the inside.',
  16619: 'Hume asks how past regularity could prove future regularity without using the very inductive pattern being questioned.',
  16620: "Rawls' veil of ignorance: choose principles without knowing your position. Justice as fairness.",
  16621: 'Euthyphro asks whether goodness depends on divine command or whether divine command responds to independent goodness.',
  16622: "Mary's Room tests whether knowing all physical facts still leaves out the felt character of experience.",
  16623: 'Parfit fission cases stress-test personal identity: two psychologically continuous survivors make strict one-to-one identity wobble.',
  16624: 'Error theory (Mackie): moral claims purport to describe objective values, but no such values exist.',
  17201: 'Gettier challenged the JTB account by showing justified true beliefs that still look too lucky to count as knowledge.',
  17202: 'Hard problem of consciousness: why is there subjective experience at all, alongside the functional story?',
  17203: "Kant's universal-law test asks whether your maxim could be rationally willed as a rule for everyone.",
  17204: 'Rule utilitarianism: follow rules whose general adoption maximizes utility, not act-by-act calculation.',
  17205: 'Deductive validity means truth preservation: there is no possible case where all premises are true and the conclusion false.',
  17206: "Rawls' veil removes knowledge of your own position so principles are chosen without self-serving bias.",
  17207: 'Sartrean bad faith is self-deception about freedom: acting as if you are only a fixed role or object.',
  17208: 'Popper emphasizes falsifiability: a scientific theory must risk being shown wrong by evidence.',
  17209: 'Kantian disinterest means judging beauty without wanting to own, use, consume, or morally approve the object.',
  17210: 'Later Wittgenstein ties meaning to use inside language-games, not to a hidden essence behind every word.',

  // ---------- Data Structures ----------
  16701: 'Stack = LIFO. Push, pop, peek — three operations, last item served first.',
  16702: 'Queue = FIFO. Enqueue at the tail, dequeue at the head.',
  16703: 'Trees encode parent-child hierarchy — file systems, DOM, expression trees.',
  16704: 'Hash maps win on O(1) average-case keyed lookup. Sorted iteration is not their job.',
  16705: 'T(n) = 2T(n/2) + O(n) by Master theorem case 2 is O(n log n). Merge sort recurrence.',
  16706: "Floyd's tortoise and hare: two pointers, one moves twice as fast. They meet iff there is a cycle.",
  16707: 'Linear probing creates primary clusters because adjacent occupied slots make any nearby collision land in the same blob.',
  16708: 'Replace with in-order successor (or predecessor). It preserves the BST ordering invariant.',
  16709: 'Left-Right rotation: imbalance from inserting into right subtree of left child. Zig-zag pattern.',
  16710: 'Build-heap bottom-up is O(n), not O(n log n). The sum of heights argument is the proof.',
  16711: 'Adjacency matrix: O(V^2) space, O(1) edge query. Worth it only when dense.',
  16712: "Dijkstra's greedy assumption breaks with negative edges — extending a path can decrease its total cost.",
  16713: "Kruskal's uses union-find for O(alpha) cycle checks while iterating edges in weight order.",
  16714: 'Path compression flattens the tree on every find — amortized inverse Ackermann per operation.',

  // ---------- International Relations ----------
  16801: 'A state in IR is a sovereign political entity with territory, population, and recognition.',
  16802: 'Diplomacy = managed communication and negotiation between political actors. Force is the alternative.',
  16803: 'Alliances are formal cooperative agreements, usually with security obligations.',
  16804: 'Soft power: attraction, culture, ideology. Hard power: coercion, military, economic pressure.',
  16805: 'Waltzian neorealism: anarchy + distribution of capabilities determines behavior. Domestic politics black-boxed.',
  16806: 'Democratic peace mechanism: institutional constraints plus shared liberal norms. Mature democracies, specifically.',
  16807: "Wendt: anarchy's effects depend on shared ideas. Cultures of enmity, rivalry, or friendship are constructed.",
  16808: "Allison Model III: policy = outcome of bureaucratic bargaining. Where you stand depends on where you sit.",
  16809: 'MAD requires secure second-strike. Vulnerability is what makes mutual deterrence stable.',
  16810: 'R2P recasts sovereignty as conditional on protecting citizens. Westphalian non-interference is the casualty.',
  16811: 'P5 veto: the 1945 winners can block any binding Security Council action.',
  16812: 'Bretton Woods 1944: IMF, World Bank, fixed exchange rates pegged to USD pegged to gold. Economic stability post-WWII.',
  16813: 'Comparative advantage: specialize where opportunity cost is lowest. Trade Pareto-improves even with absolute disadvantage.',
  16814: 'Hegemonic stability: open liberal economy needs a hegemon willing to bear public-good costs of enforcing rules.',

  // ---------- Marketing ----------
  420051: 'Marketing target = the specific audience the message and product address. Not everyone, on purpose.',
  420052: 'A brand creates recognition and shapes expectations — that is its core economic function.',
  420053: 'Value proposition = the customer-facing reason to choose this product over alternatives.',
  420054: 'A conversion is the user completing the action you wanted — purchase, signup, install.',
  420055: 'BCG: Question Mark = low share, high growth. Investment decision: turn it into a Star, or divest.',
  420056: 'PESTLE scans macro-environmental forces — political, economic, social, technological, legal, environmental.',
  420057: 'Post-purchase dissonance is buyers remorse. High-involvement decisions trigger it.',
  420058: 'Primary data is gathered for your specific question — tailored but expensive. Secondary data is repurposed.',
  420059: 'Psychographics segment by mind: lifestyle, values, attitudes, interests.',
  420060: 'Perceptual maps plot brands on two attribute axes from the customer perspective. Gaps suggest positioning opportunities.',
  420061: 'Penetration pricing: low entry price to capture share fast, accept thin margins, scale with volume.',
  420062: 'PR is earned media — no payment, no message control, reputation-building.',
  420063: 'LTV >> CAC is the sustainability test. The 3:1 ratio is the working benchmark.',
  420064: 'Decoy effect: an asymmetrically dominated third option steers choice toward a target alternative.',

  // ---------- MCAT ----------
  3104000: 'Dose first (kg × mg/kg), then volume (dose / concentration). Two-step calculation, do not collapse.',
  3104001: 'Lysine at pH 7.4: alpha-COO- (-1), alpha-NH3+ (+1), side-chain NH3+ (+1). Net +1.',
  3104002: 'Parallel resistors: 1/Req = sum of reciprocals. Then V/Req gives total current.',
  3104003: 'Competitive inhibitor: Vmax unchanged, Km increases. Plateau holds, curve shifts right.',
  3104004: 'dG = -nFE. Positive Ecell, small magnitude: spontaneous but weakly product-favored.',
  3104005: 'Starling: net = hydrostatic out - oncotic in = 35 - 25 = 10 mmHg outward.',
  3104006: 'Habituation: nonassociative learning. Repeated benign stimulus loses salience.',
  3104007: 'DV = what is measured as outcome. Salivary cortisol here, not the manipulation.',
  3104008: 'Correlation alone does not imply causation. A confounder like workload is the standard rebuttal.',
  3104009: 'Anterograde amnesia after head injury = hippocampal damage. Old memories intact, new ones blocked.',
  3104010: 'Social-psych manipulations need control groups for the placebo effect to be ruled out.',
  3104011: 'Effect sizes plus confidence intervals beat p-values for evaluating practical significance.',
  3104012: 'Allosteric noncompetitive inhibitor: Vmax drops, Km unchanged. Substrate cannot rescue.',
  3104013: 'Randomized assignment to condition is what produces causal inference. Without it, selection bias.',
  3104014: 'Mendelian ratios assume independent assortment and no linkage. Deviations imply linkage or selection.',
  3104015: 'Construct validity vs internal validity: are you measuring the right thing, vs is the causal story clean?',
  3104016: 'Uncompetitive inhibition binds ES only — both Km and Vmax decrease, in the same direction.',
  3104017: 'DNA repair experiment design: control for the repair pathway being intact, vary the damage type.',
  4310200: 'CARS central thesis: find the single claim the passage is built to defend, not a side example.',
  4310201: 'Tone questions: pick the adjective the passage cumulatively justifies. Avoid extreme tones.',
  4310202: "Inference questions ask what the author would agree with, even if not stated. Stay close to the text.",
  4310203: 'Strengthen = add evidence supporting the conclusion. Watch for irrelevant boosts.',
  4310204: 'Weaken = undermine a premise or the link to the conclusion. Direct refutation beats lateral attack.',
  4310205: 'Application: take the principle the passage states and apply it to a new fact pattern.',
  4310206: 'Assumption questions: identify the unstated premise the argument requires.',
  4310207: 'Combined tone and inference: anchor to passage tone first, then infer within that frame.',

  // ---------- English Composition ----------
  3105000: 'Rhetorical situation: audience, purpose, context, and constraints. Every analysis touches all four.',
  3105001: 'A thesis stakes a contestable claim. "Add machines" is a position, not a topic.',
  3105002: 'Toulmin: claim, grounds, warrant, backing, qualifier, rebuttal. The warrant is usually unstated.',
  3105003: 'Paragraphs hold one idea, signaled by a topic sentence and supported by evidence and analysis.',
  3105004: 'Fallacy identification: name the structure of the bad inference, not just call it bad.',
  3105005: 'Counterclaims strengthen arguments by acknowledging opposition. Concede then rebut.',
  3105006: 'Database search: combine Boolean operators with relevant subject terms — narrow purposefully.',
  3105007: 'Source types: scholarly (peer-reviewed), trade (industry), popular (general). Match source to purpose.',
  3105008: 'Annotated bibliography: each entry summarizes, evaluates, and explains relevance.',
  3105009: 'Synthesis: place sources in conversation. Do not list summaries — show agreement, tension, gap.',
  3105010: 'Academic integrity: cite all ideas, paraphrases, and language that are not your own.',
  3105011: 'Strong rebuttals concede partial validity before refuting. Total dismissal weakens the response.',
  3105012: 'Revision is structural, not cosmetic. Reorder, cut, sharpen — proofreading comes last.',
  3105013: 'Cohesion comes from old-to-new information flow and consistent topic threads.',
  3105014: 'Style is choice: voice, sentence variety, diction. Cohesion serves clarity; style serves voice.',
  3105015: 'Rebuttal-style argument: acknowledge cost, then explain why benefits exceed it. Demand evidence.',
  3105016: 'Fix the fallacy by reconstructing the argument with a valid inference structure.',
  3105017: 'Conclusions synthesize, do not summarize. Move from the specific claim to broader implications.',

  // ---------- General Physics 2 ----------
  3106000: 'Electric field points away from positive charges; field lines never cross.',
  3106001: 'Series resistors add; parallel resistors combine reciprocally. Mind which combination.',
  3106002: 'Field magnitude from a point charge: kQ/r^2. Direction by sign convention.',
  3106003: 'RC charging: V(t) = V0(1 - e^(-t/RC)). Time constant tau = RC.',
  3106004: 'Power = IV = I^2 R = V^2/R. Pick the form that matches what you know.',
  3106005: 'Lorentz force: F = qv × B. Direction by right-hand rule, magnitude by qvB sin(theta).',
  3106006: "Faraday's law: induced EMF = -dPhi/dt. Lenz gives the direction.",
  3106007: 'Snell: n1 sin(theta1) = n2 sin(theta2). Higher index = slower light, bends toward normal.',
  3106008: 'Motional EMF: EMF = BLv. Charges in the moving rod feel qv × B.',
  3106009: 'Thin lens equation: 1/f = 1/do + 1/di. Sign conventions matter.',
  3106010: 'LC oscillation: omega = 1/sqrt(LC). Energy bounces between inductor and capacitor.',
  3106011: 'TIR requires going from higher to lower index and exceeding the critical angle.',
  3106012: 'Field direction = direction a positive test charge would accelerate.',
  3106013: 'Photoelectric: KEmax = hf - phi. Threshold is at hf = phi.',
  3106014: 'Constructive interference: path difference = m*lambda. Destructive: (m + 1/2)*lambda.',
  3106015: 'Capacitor energy: U = 1/2 CV^2. Or 1/2 QV, or Q^2/(2C).',
  3106016: 'E = -dV/dx. Field points from high to low potential.',
  3106017: 'de Broglie: lambda = h/p. Massive particles get tiny wavelengths.',

  // ---------- General Biology 2 ----------
  3107000: 'Evolution acts on heritable variation under differential reproductive success. Mechanism vs pattern.',
  3107001: 'Population ecology integrates birth, death, immigration, emigration. Logistic adds carrying capacity.',
  3107002: 'Hardy-Weinberg: p^2 + 2pq + q^2 = 1 when no evolutionary forces act. Deviation signals evolution.',
  3107003: 'Phylogeny: shared derived characters (synapomorphies) define clades, not overall similarity.',
  3107004: 'Gene flow homogenizes allele frequencies between populations. It opposes drift and local selection.',
  3107005: 'Logistic growth: dN/dt = rN(1 - N/K). Carrying capacity K bends the curve.',
  3107006: 'Fungi are heterotrophs that absorb digested nutrients. Chitin cell walls; reproduce by spores.',
  3107007: 'Bilateral symmetry correlates with cephalization and directional movement.',
  3107008: 'Plant evolution sequence: nonvascular, vascular seedless, gymnosperms, angiosperms.',
  3107009: 'Deuterostomes: blastopore becomes anus. Echinoderms and chordates.',
  3107010: 'Prokaryotic diversity dwarfs eukaryotic — bacteria and archaea occupy nearly all metabolic niches.',
  3107011: 'Invertebrate body plans diverge in symmetry, segmentation, cephalization, and coelom structure.',
  3107012: 'Amniotic egg untethered tetrapods from water for reproduction.',
  3107013: 'Energy flows one way; nutrients cycle. Trophic levels lose ~90% of energy at each step.',
  3107014: 'Respiratory exchange depends on surface area, partial pressure gradient, and diffusion distance.',
  3107015: 'Logistic plateau means dN/dt approaches zero as N approaches K.',
  3107016: 'Excretion balances osmolarity and removes nitrogenous waste. Nephron functional unit in vertebrates.',
  3107017: 'Keystone species: outsized ecological impact relative to abundance. Removal reorganizes the community.',

  // ---------- LSAT ----------
  3108000: 'Conditional: "if A then B" means A is sufficient, B is necessary. Contrapositive: not B implies not A.',
  3108001: 'Main conclusion: the claim the rest of the argument supports. Pre-mark indicator words ("therefore", "thus").',
  3108002: "Necessary conditions are required, not sufficient. Confusing the two is the classic logical-reasoning error.",
  3108003: 'Causal flaw: assuming correlation implies causation, or reversing cause and effect.',
  3108004: 'Quantified logic: "some" and "all" interact via Aristotelian square. Watch the existential leaps.',
  3108005: 'Mistaken reversal: confusing if A then B with if B then A. The reverse is not entailed.',
  3108006: 'Main conclusion vs supporting subclaim — diagram the argument before answering.',
  3108007: 'Necessary assumption: without it, the argument falls apart. Negate the candidate and check.',
  3108008: 'Weakening: identify the link or premise to attack, then pick the answer that targets it.',
  3108009: 'Sufficient assumption: when added, the argument becomes valid. Stronger than necessary assumption.',
  3108010: 'Evaluate: which question would help most in deciding if the argument is sound?',
  3108011: 'False dilemma: presents two options as exhaustive when a third exists.',
  3108012: 'Passage structure: map paragraphs by function — claim, evidence, counter, conclusion.',
  3108013: 'Main point question in RC: the central thesis, distilled.',
  3108014: 'Tone in RC: pick the adjective the passage justifies cumulatively, not based on one sentence.',
  3108015: 'Inference in RC: what must be true given the passage, not what is merely plausible.',
  3108016: 'Comparative passages: focus on points of agreement and disagreement between the two.',
  3108017: 'Main point distillation: the thesis line, not a supporting claim or example.',

  // ---------- Anatomy & Physiology ----------
  3109000: 'Anatomical directional terms are relative to standard anatomical position. Anterior/posterior, medial/lateral.',
  3109001: 'Histology: epithelial, connective, muscle, nervous. Tissue type predicts function.',
  3109002: 'Body planes: sagittal, frontal (coronal), transverse. Cuts define imaging views.',
  3109003: 'Nervous tissue: neurons (signaling) plus glia (support, myelin, immune). Both essential.',
  3109004: 'Body cavities: dorsal (cranial, spinal) and ventral (thoracic, abdominopelvic). Know the boundary structures.',
  3109005: 'Histology requires staining to see tissue architecture. H&E is the bread-and-butter.',
  3109006: 'Sliding filament: actin and myosin slide past each other; ATP-dependent cross-bridge cycling.',
  3109007: 'Resting potential ~-70 mV, set by K+ leak and Na/K-ATPase. Equilibrium is for K+.',
  3109008: 'NMJ: ACh from presynaptic motor neuron binds nicotinic receptors on muscle, depolarizing it.',
  3109009: 'Sympathetic = fight or flight (NE, fast onset). Parasympathetic = rest and digest (ACh, slower).',
  3109010: 'Action potential: depolarize past threshold, Na+ in, then K+ out for repolarization, hyperpolarization, reset.',
  3109011: 'Sliding filament needs Ca2+ to bind troponin, moving tropomyosin off the actin binding site.',
  3109012: 'Cardiac conduction: SA node → atria → AV node (delay) → bundle of His → Purkinje fibers → ventricles.',
  3109013: 'PCT reabsorbs the bulk (Na, glucose, amino acids, water). Loop of Henle establishes the medullary gradient.',
  3109014: 'Cardiac cycle: systole (ventricular contraction) and diastole (filling). Pressure curves drive valve action.',
  3109015: 'ADH increases water reabsorption in the collecting duct via aquaporin insertion.',
  3109016: 'ECG: P (atrial depol), QRS (ventricular depol), T (ventricular repol). Atrial repol is buried in QRS.',
  3109017: 'Acid-base: pH = 7.35-7.45. Bicarb buffer plus respiratory CO2 and renal HCO3- regulation.',

  // ---------- General Chemistry II ----------
  3110000: 'Rate law: rate = k[A]^m[B]^n. Orders come from mechanism, not stoichiometry, except for elementary steps.',
  3110001: 'Catalysts lower activation energy; do not change dG or equilibrium position.',
  3110002: 'First-order half-life: t1/2 = ln(2)/k. Independent of starting concentration.',
  3110003: 'Initial rates: vary one concentration, hold others, see how rate scales. Recover the order.',
  3110004: 'Arrhenius: k = A exp(-Ea/RT). Higher T or lower Ea = larger k.',
  3110005: 'Rate-determining step is the slowest elementary step. Mechanism must sum to overall reaction.',
  3110006: "Q vs K: Q < K means net forward; Q > K means net reverse; Q = K is equilibrium.",
  3110007: "Le Chatelier: perturb the system, equilibrium shifts to oppose. Pressure, T, concentration are the levers.",
  3110008: 'Ksp: product of ion activities at saturation. Common ion suppresses solubility.',
  3110009: 'Acid-base equilibrium: Ka = [H+][A-]/[HA]. pKa = -log(Ka). Lower pKa = stronger acid.',
  3110010: 'Buffer pH: Henderson-Hasselbalch, pH = pKa + log([A-]/[HA]). Best buffering near pKa.',
  3110011: 'Titration equivalence point: moles acid = moles base. Half-equivalence pH = pKa.',
  3110012: 'Ka × Kb = Kw for a conjugate acid-base pair. Stronger acid = weaker conjugate base.',
  3110013: 'Polyprotic acids: stepwise dissociation, each with its own Ka. Usually first dissociation dominates.',
  3110014: 'Salt of weak acid + strong base = basic solution. Hydrolysis of the conjugate base.',
  3110015: 'Solubility: temperature-dependent for most solids. Pressure matters mainly for gases (Henry).',
  3110016: 'Common ion effect: adding a shared ion reduces solubility of a sparingly soluble salt.',
  3110017: 'Colligative properties scale with particle count, not particle identity. Van Hoff factor matters for electrolytes.',

  // ---------- Financial Accounting ----------
  3111000: 'Accounting equation: Assets = Liabilities + Equity. Always balances; every transaction maintains it.',
  3111001: 'Three primary statements: balance sheet (snapshot), income statement (period), cash flows (period).',
  3111002: 'Owner contributions increase both assets and equity simultaneously — equation balanced.',
  3111003: 'Retained earnings = beginning RE + net income - dividends. Closes the income statement to equity.',
  3111004: 'Net income = revenues - expenses. Different from cash flow because of accruals.',
  3111005: 'Loan payment splits between interest expense and principal reduction. Amortization schedule details.',
  3111006: 'Journal entries: debits = credits, every time. Pick the correct accounts on each side.',
  3111007: 'Revenue recognition: earned when performance obligation is satisfied. Not when cash is received.',
  3111008: 'Adjusting entries align timing of recognition with the accrual basis at period end.',
  3111009: 'Unearned revenue is a liability — cash collected for services not yet delivered.',
  3111010: 'Accrued salaries: expense recognized in the period worked, even if paid next period.',
  3111011: 'Accrual revenue: earned in the period but cash arrives later. AR records the receivable.',
  3111012: 'Gross profit = revenue - COGS. The first margin layer; operating expenses come next.',
  3111013: 'Straight-line depreciation: (cost - salvage) / useful life. Allocates cost over years of service.',
  3111014: 'FIFO: first goods in are first sold. In a rising-price environment, FIFO gives higher net income.',
  3111015: 'Bank reconciliation: book balance vs bank balance, adjusting for outstanding checks, deposits in transit, fees.',
  3111016: 'Weighted-average inventory: total cost / total units, applied to ending inventory and COGS.',
  3111017: 'Allowance method for bad debts: estimate uncollectibles and expense them in the period of sale.',

  // ---------- Electrical Engineering ----------
  3112000: 'Voltage divider: Vout = Vin × R2/(R1+R2). Only valid under no-load (or high-impedance load).',
  3112001: 'Inverting op-amp gain: -Rf/Rin. Virtual short forces V- = V+.',
  3112002: 'Nodal analysis: KCL at each node, solve for node voltages. Reference ground at zero.',
  3112003: 'Summing op-amp: Vout = -Rf(V1/R1 + V2/R2 + ...). Weighted sum at the inverting input.',
  3112004: "Thevenin: replace any linear network with one source and series resistor. Voc and Isc give Vth and Rth.",
  3112005: 'Difference amplifier: amplifies V2 - V1 with the right resistor matching. Common-mode rejected.',
  3112006: 'RC transient: v(t) = Vfinal + (Vinit - Vfinal) exp(-t/RC). Tau = RC.',
  3112007: 'Capacitor impedance: Zc = 1/(j omega C). Approaches 0 at high freq, infinity at DC.',
  3112008: 'RL transient: i(t) = Ifinal + (Iinit - Ifinal) exp(-t R/L). Tau = L/R.',
  3112009: 'Power factor = cos(theta) between voltage and current. Reactive loads lower PF; correction adds capacitance.',
  3112010: 'RLC damping: underdamped (oscillates), critically damped (fastest non-oscillating), overdamped (slow).',
  3112011: 'Parallel resonance: impedance peaks at omega_0 = 1/sqrt(LC). Tank circuit.',
  3112012: 'Bode plots: log-log magnitude, log-linear phase. Asymptotic approximations from pole and zero positions.',
  3112013: 'Boolean algebra: De Morgan, distributive, absorption. Simplify before implementing.',
  3112014: 'Bode slope: -20 dB/decade per pole, +20 per zero. Phase shifts 90 degrees per pole/zero.',
  3112015: 'MOSFET as switch: Vgs above threshold turns it on (low Rds_on). Below threshold = off.',
  3112016: 'Stability: all closed-loop poles in left-half plane. Phase margin and gain margin are the readouts.',
  3112017: 'Flip-flops store one bit: D-FF samples on clock edge, JK-FF toggles when both J and K are 1.',

  // ---------- Eureka Math Precalculus ----------
  3113000: 'Complex numbers: a + bi. Modulus = sqrt(a^2 + b^2), argument = atan2(b, a).',
  3113001: 'Matrix transformations: rotations, reflections, scalings. Linear maps preserve origin.',
  3113002: 'Polar form: r(cos theta + i sin theta) = r e^(i theta). Euler is the bridge.',
  3113003: 'Composing transformations: matrix multiplication, in reverse order of application.',
  3113004: "De Moivre: z^n = r^n (cos(n theta) + i sin(n theta)). Easiest in polar form.",
  3113005: 'Rotation matrix: [[cos, -sin], [sin, cos]]. Counterclockwise by theta.',
  3113006: 'Vector magnitude: sqrt(sum of squared components). Pythagoras in n dimensions.',
  3113007: 'Determinant of 2x2: ad - bc. Sign indicates orientation, magnitude is area scaling.',
  3113008: 'Dot product: a · b = |a||b| cos(theta). Zero means perpendicular.',
  3113009: 'Systems: row reduce, back-substitute. Infinite, unique, or no solution from the rank.',
  3113010: 'Cross product magnitude = area of parallelogram = |a||b| sin(theta).',
  3113011: '3x3 determinant: cofactor expansion along any row. Sign pattern + - +.',
  3113012: 'Unit circle: (cos theta, sin theta). Memorize the special angles, derive the rest.',
  3113013: 'Rational functions: zeros from numerator, vertical asymptotes from denominator. Holes when factors cancel.',
  3113014: 'Trig graphs: amplitude, period, phase, vertical shift. Period for sin/cos is 2pi/B for sin(Bx).',
  3113015: 'Limit by direct substitution if continuous; else factor, rationalize, or use known forms.',
  3113016: 'Inverse trig has restricted ranges. arcsin: [-pi/2, pi/2]; arccos: [0, pi]; arctan: (-pi/2, pi/2).',
  3113017: 'Horizontal asymptote: ratio of leading coefficients if degrees match, 0 if denom higher, none if numer higher.',

  // ---------- General Biology I ----------
  3100000: 'Cell membrane: phospholipid bilayer with embedded proteins. Selective permeability is the function.',
  3100001: "Water's polarity drives hydrogen bonding, surface tension, and solvation of polar molecules.",
  3100002: 'Macromolecules: carbohydrates, lipids, proteins, nucleic acids. Monomers polymerize via dehydration.',
  3100003: 'Protein structure levels: primary (sequence), secondary (alpha helix, beta sheet), tertiary (3D fold), quaternary (subunits).',
  3100004: 'Membrane transport: passive (gradient-driven) vs active (ATP-driven). Facilitated diffusion via channels and carriers.',
  3100005: 'Extreme pH disrupts ionizable side chains; salt bridges and H-bonds collapse; protein denatures.',
  3100006: 'Enzymes lower activation energy; do not change dG. Specificity from active site shape and chemistry.',
  3100007: 'Cellular respiration: glycolysis, pyruvate ox, citric acid cycle, electron transport. Glucose to CO2 + ATP.',
  3100008: 'Glycolysis happens in cytoplasm; oxidative phosphorylation on mitochondrial inner membrane.',
  3100009: 'ATP synthase uses proton gradient (chemiosmosis) to phosphorylate ADP. Coupling is the elegant part.',
  3100010: 'Fermentation regenerates NAD+ without oxygen: lactic acid in muscle, ethanol in yeast.',
  3100011: 'Photosynthesis: light reactions (thylakoid) make ATP and NADPH; Calvin cycle (stroma) fixes CO2.',
  3100012: 'Mendelian inheritance assumes independent assortment of unlinked loci, no epistasis, dominant/recessive alleles.',
  3100013: 'Punnett squares predict ratios when alleles segregate independently. Modify for linked or X-linked traits.',
  3100014: 'Chromosome theory: genes are on chromosomes; their behavior in meiosis explains inheritance.',
  3100015: 'Linkage: closer loci recombine less often. Map distance estimated from recombination frequency.',
  3100016: 'DNA replication is semiconservative: each daughter helix has one parental and one newly synthesized strand.',
  3100017: 'Gel electrophoresis: smaller fragments migrate farther. Read by band positions relative to ladder.',

  // ---------- General Chemistry I ----------
  3101000: 'SI units, sig figs, dimensional analysis. The arithmetic of measurement.',
  3101001: 'Matter classifications: element, compound, homogeneous mixture, heterogeneous mixture.',
  3101002: 'Moles = Avogadro count = mass / molar mass. Universal currency of stoichiometry.',
  3101003: 'Periodic trends: atomic radius decreases across, increases down. IE and EN go opposite directions.',
  3101004: 'Empirical formula: simplest whole-number ratio. Multiply through to get molecular if you know molar mass.',
  3101005: 'Quantum model: electrons in orbitals defined by n, l, ml, ms. Aufbau, Hund, Pauli fill them.',
  3101006: 'Ionic vs covalent: electronegativity difference. > ~1.7 = ionic; < ~0.5 = nonpolar covalent.',
  3101007: 'Molarity = mol solute / L solution. Dilution: M1V1 = M2V2.',
  3101008: 'Lewis structures: count valence electrons, distribute to satisfy octets, minimize formal charge.',
  3101009: 'Stoichiometry pipeline: grams → moles → mole ratio → moles → grams.',
  3101010: 'Reaction types: synthesis, decomposition, single replacement, double replacement, combustion, redox.',
  3101011: 'Arrhenius vs Brønsted-Lowry vs Lewis acids — each broader than the last.',
  3101012: 'Ideal gas: PV = nRT. R = 0.0821 L atm / (mol K).',
  3101013: 'Thermochemistry: dH negative = exothermic. Hess law lets you combine known reactions to get unknown ones.',
  3101014: "Dalton's partial pressures: P_total = sum of partials. Each gas behaves independently.",
  3101015: "Graham's effusion: rate inversely proportional to sqrt(molar mass). Light gases effuse faster.",
  3101016: 'Calorimetry: q = mc dT for water; for cal constants, use C dT directly.',
  3101017: 'Solution behavior: electrolyte vs nonelectrolyte. Strong electrolytes fully dissociate.',

  // ---------- General Physics I ----------
  3102000: 'Vectors: magnitude and direction. Add tip-to-tail or by components.',
  3102001: 'Position vs displacement: displacement is final - initial; path length is total distance traveled.',
  3102002: 'Kinematics equations apply only to constant acceleration. Watch for changing a.',
  3102003: 'Projectile: vertical is constant g, horizontal is constant velocity. Independence of components.',
  3102004: 'Relative velocity: v_AB = v_A - v_B. Frame choice matters.',
  3102005: '2D kinematics: decompose into x and y; solve each as 1D.',
  3102006: "Newton II: F_net = ma. Free body diagrams isolate forces on one object.",
  3102007: 'Work = F · d = Fd cos(theta). Only the component along displacement does work.',
  3102008: 'Static friction adjusts up to mu_s N; kinetic friction is mu_k N and roughly constant.',
  3102009: 'Conservation of energy: KE + PE + heat = constant for closed systems. Add work done by external forces.',
  3102010: 'Power = work / time = F · v. Instantaneous power scales with speed at constant force.',
  3102011: 'Centripetal acceleration: a = v^2 / r, directed toward center. Net inward force = mv^2/r.',
  3102012: 'Momentum: p = mv. Conserved in absence of external forces. Collisions are the key application.',
  3102013: 'Impulse = F dt = dp. Long contact time reduces force for the same momentum change.',
  3102014: 'Elastic collisions conserve both KE and momentum; inelastic only momentum; perfectly inelastic stick.',
  3102015: 'SHM: omega = sqrt(k/m) for spring; sqrt(g/L) for pendulum. Energy oscillates KE ↔ PE.',
  3102016: 'Rotational analogs: tau = I alpha; L = I omega; KE_rot = 1/2 I omega^2.',
  3102017: "Angular momentum conserved if no external torque. Skater pulling arms in is the canonical demo.",

  // ---------- Introduction to Sociology ----------
  3103000: "Sociological imagination (Mills): connecting personal troubles to public issues.",
  3103001: 'Culture: shared beliefs, values, norms, symbols, practices that organize a group.',
  3103002: 'Three classical theories: functionalism (Durkheim), conflict (Marx), symbolic interactionism (Mead).',
  3103003: 'Methods: surveys, interviews, ethnography, experiments, content analysis. Match method to question.',
  3103004: 'Operationalization: turning abstract concepts into measurable variables. Validity and reliability matter.',
  3103005: 'Roles: behavioral expectations tied to social positions. Role conflict and strain are common.',
  3103006: 'Primary vs secondary groups: intimate and enduring vs task-focused and impersonal.',
  3103007: 'Deviance: behavior violating norms. Functionalists see it as boundary-setting; conflict theorists see power.',
  3103008: 'Labeling theory: deviance is partly a product of social labels and the responses they provoke.',
  3103009: "Weber's bureaucracy: hierarchy, division of labor, written rules, impersonality. Trade-offs in modern organizations.",
  3103010: "Class, status, party (Weber): three dimensions of stratification. Marx focused on class alone.",
  3103011: 'Intersectionality: overlapping systems of disadvantage (race, gender, class) compound, do not just add.',
  3103012: 'Institutions: persistent patterned arrangements (family, education, economy, polity, religion).',
  3103013: 'Education: reproduces inequality (Bourdieu) or sorts by merit (functionalist), depending on the lens.',
  3103014: 'Economic systems: market, command, mixed. Each distributes resources differently.',
  3103015: "Work and meaning: industrial vs post-industrial; alienation vs craft.",
  3103016: "Social change drivers: technology, demography, conflict, ideology, environmental shifts.",
  3103017: 'Urban sociology: density, diversity, segregation. Concentric zone vs sector vs multi-nuclei models.',

  // ---------- ML (university prep) ----------
  2005: 'ROW_NUMBER over partition by user, order by date desc — each user gets a 1, 2, 3 sequence from most recent.',
  2006: 'Expected flips for HH: setup the recursive expectation. x = 0.5(1+x) + 0.25(2+x) + 0.25(2), solve x = 6.',
  2007: 'L1 (Lasso) zeroes coefficients; L2 (Ridge) shrinks asymptotically. Feature selection is L1 territory.',
  2008: 'Imbalanced data: rebalance via SMOTE/weights, evaluate via P/R/F1 — never just accuracy.',
  2009: 'AUC-ROC = probability that a randomly chosen positive ranks above a randomly chosen negative.',
  2010: 'SUTVA: treatment of one unit cannot affect another. Ride-sharing violates it via marketplace coupling.',
  2011: 'Smaller MDE at fixed power means more samples or longer experiments. Power = f(N, alpha, MDE).',
  2012: 'Data drift = P(X) shifts; concept drift = P(Y|X) shifts. Different monitoring, different retraining triggers.',
  2013: 'Cold start: lean on content-based features when collaborative signal is missing.',
  2014: 'Complex models = low bias, high variance — fit training noise. Regularize or simplify.',

  // ---------- Software Engineering (university prep) ----------
  3005: 'Sliding window invariant for K distinct chars: shrink left while distinct > K.',
  3006: 'Monotonic decreasing stack: each element pops smaller-or-equal items, which then find their next greater.',
  3007: 'Trie insert is O(L) where L is the word length, assuming fixed alphabet. Each step is O(1).',
  3008: 'BFS level order means first arrival is shortest path in unweighted graphs.',
  3009: 'Tabulation avoids recursion depth — no stack overflow on huge inputs.',
  3010: 'CAP: under partition, pick consistency or availability. You cannot have both during P.',
  3011: 'Consistent hashing: only ~K/N keys move when a node joins or leaves. Modulo hashing reshuffles everything.',
  3012: 'WebSockets: persistent bidirectional connection. Ideal for chat, presence, real-time updates.',
  3013: 'Open/closed: extend via inheritance or composition; do not edit existing tested code.',
  3014: 'Strategy pattern: family of interchangeable algorithms behind a common interface.',

  // ---------- Research Prep ----------
  4005: 'SOTA papers often over-tune their method while baselines use defaults. Compute budgets must match.',
  4006: 'RDD: compare just above and just below a sharp cutoff. The local randomization argument works near the threshold.',
  4007: 'Conditioning on a collider opens a spurious path. Berkson bias is the canonical example.',
  4008: 'MCMC samples from intractable posteriors. Metropolis-Hastings and Gibbs are the basics.',
  4009: 'MNAR: missingness depends on the unobserved value itself. Hardest case; needs sensitivity analysis.',
  4010: 'SGD noise from minibatches creates oscillation. Momentum and learning-rate schedules dampen it.',
  4011: 'Edge deployment: quantize, distill, prune. Reduce footprint without losing critical accuracy.',
  4012: "Acknowledge limitations explicitly and bound them. A sensitivity analysis shows how much the confounder would have to matter.",
  4013: 'Executive audience: lead with impact and effect size. Skip the derivations.',
  4014: 'Grant proposals: significance, innovation, approach. The gap and the impact are the highest-leverage sections.',

  // ---------- UX Research ----------
  11005: 'Generative research uncovers unknown problems. Use contextual inquiry, diary studies, open interviews.',
  11006: 'Good screeners hide the target criteria behind plausible distractors. Otherwise participants self-select.',
  11007: 'Behavioral questions ("walk me through last time you...") beat hypothetical opinions every time.',
  11008: "Five Whys digs past the first answer to the underlying motivation or root cause.",
  11009: 'Affinity mapping is bottom-up: let themes emerge, do not force them into your prior taxonomy.',
  11010: 'Personas should be grounded in behavioral patterns from real users, not marketing aspirations.',
  11011: 'Defend qualitative findings with thematic saturation, not sample-size arguments borrowed from quant.',
  11012: 'Prioritize issues by impact-vs-effort matrix. Severity drives the user side; feasibility drives engineering.',
  11013: 'Portfolio impact comes from showing the decision your research changed. Process is supporting, not the headline.',
  11014: 'MaxDiff forces trade-offs and recovers true preference rank. Likert scales drift toward the middle and ceiling.',

  // ---------- Linear Algebra (universityCollege inline) ----------
  16001: 'Vector magnitude = its length, a single nonnegative scalar. Direction is the separate piece.',
  16002: 'Matrices organize numbers in a rectangular grid. Rows times columns is the access pattern.',
  16003: 'Identity matrix is the multiplicative identity: I × M = M and v stays v. Like multiplying by 1.',
  16004: 'Independent vectors: none expressible as a linear combination of the others. The set has no redundancy.',

  // ---------- universityBuilders cycled quizzes (50 questions each, blueprint cycle) ----------
  // For each base + offset, the same blueprint repeats every N indices. We
  // anchor a hint per blueprint position so all cycles share the lesson voice.

  // Calc AB (24901-24950, 9 blueprints, cycle every 9)
  24901: 'Limit by direct substitution for continuous functions. Evaluate at the point.',
  24902: 'Power rule: bring the exponent down, decrement by one. Two-line derivative.',
  24903: 'Chain rule: derivative of the outer, evaluated at the inner, times derivative of the inner.',
  24904: 'Velocity = derivative of position. Differentiate term by term.',
  24905: 'Critical points where f prime is zero or undefined. Solve f prime equals zero.',
  24906: 'Reverse the power rule for antiderivatives. Increment the exponent, divide by the new exponent, add C.',
  24907: 'Separable ODE: get y on one side, x on the other, integrate both sides.',
  24908: 'Area between curves: integrate (top - bottom) over the interval. Sign matters.',
  24909: 'Free-response strategy: read the prompt twice, show every step, units in the answer.',

  // AP Stats (25001-25050, 13 blueprints)
  25001: 'Categorical data needs frequency tables and proportions, not means.',
  25002: 'Quantitative displays: histograms, dotplots, boxplots. Pick by shape and spread questions.',
  25003: 'Summary stats: mean and SD for symmetric; median and IQR for skewed.',
  25004: 'Z-score = (value - mean) / SD. Compare positions across distributions.',
  25005: 'Two-variable quantitative: scatterplot first, then correlation, then regression.',
  25006: 'Sampling design and randomization protect against bias. Match design to inference goal.',
  25007: 'Probability rules: addition for unions, multiplication for independents, conditional via Bayes.',
  25008: 'Discrete vs continuous random variables. Use the right PDF/PMF and the right cumulative.',
  25009: 'Sampling distribution of the mean has SE = sigma / sqrt(n). Normal under CLT for large n.',
  25010: 'Inference for proportions: SE = sqrt(p(1-p)/n). z-procedures when conditions hold.',
  25011: 'Inference for means: t-procedures with df = n - 1. SE = s / sqrt(n).',
  25012: 'Chi-square: goodness of fit, independence, homogeneity. Df depends on the test.',
  25013: 'Slope inference: t-test on b1, df = n - 2. SE of slope from the regression output.',

  // Trigonometry (25101-25150, 9 blueprints)
  25101: 'SOHCAHTOA in right triangles. Identify opposite, adjacent, hypotenuse first.',
  25102: 'Trig functions on the unit circle: cos = x, sin = y. Sign by quadrant.',
  25103: 'Periodicity: sin and cos have period 2pi; tan has period pi.',
  25104: 'Reciprocal identities: csc = 1/sin, sec = 1/cos, cot = 1/tan. Same domain restrictions.',
  25105: 'Law of sines: a/sin A = b/sin B = c/sin C. Use for AAS, ASA, SSA.',
  25106: 'Pythagorean identity: sin^2 + cos^2 = 1. Two derivatives by dividing.',
  25107: 'Trig equations: solve over a period, then add 2pi k for full general solution.',
  25108: 'Inverse trig: principal branches give one answer; add multiples to get the rest.',
  25109: 'Polar form: r(cos theta + i sin theta). Multiplication multiplies r, adds theta.',

  // College Algebra (25201-25250, 9 blueprints)
  25201: 'Linear equations: isolate the variable. Inequalities flip on multiplication by a negative.',
  25202: 'Function: each input maps to exactly one output. Vertical line test on graphs.',
  25203: 'Polynomial roots: factor or use synthetic division. Rational root theorem narrows the search.',
  25204: 'Exponentials and logs are inverses. ln undoes e; log_b undoes b^x.',
  25205: 'Systems: substitution, elimination, or matrices. Pick by structure.',
  25206: 'Matrix determinant nonzero means invertible. Solve Ax = b via x = A^(-1) b.',
  25207: 'Sequences: arithmetic (constant difference) or geometric (constant ratio). Sums have closed forms.',
  25208: 'Conic sections by quadratic form: circle, ellipse, parabola, hyperbola. Complete the square to standard form.',
  25209: 'Probability: counting times probability per outcome. Combinations vs permutations matters.',

  // Stats/Prob (25301-25350, 16 blueprints)
  25301: 'Categorical analysis uses counts and proportions. Bar charts, not histograms.',
  25302: 'Compare distributions side-by-side. Center, spread, shape, unusual features.',
  25303: 'Quantitative summary: 5-number summary plus mean/SD. Match by distribution shape.',
  25304: 'Normal model: bell curve, 68-95-99.7 rule. z-scores standardize.',
  25305: 'Bivariate scatterplot: form, direction, strength. Correlation captures linear association only.',
  25306: 'Observational vs experimental study design. Randomization is the engine of causal inference.',
  25307: 'Probability rules and conditional probability. Bayes for reversing direction.',
  25308: 'Counting: factorials for permutations, binomial coefficients for combinations.',
  25309: 'Random variables: mean E[X], variance Var(X). Linear transformations behave predictably.',
  25310: 'Sampling distributions standardize sample statistics. CLT delivers normality at large n.',
  25311: 'Confidence interval: estimate plus/minus margin of error. Margin = critical value times SE.',
  25312: 'Significance test: state H0/Ha, compute test stat, find p-value, decide vs alpha.',
  25313: 'Two-sample inference: independent or paired? The structure picks the procedure.',
  25314: 'Chi-square test stat = sum((obs - exp)^2 / exp). Df depends on the test type.',
  25315: 'Multiple regression: each coefficient is the marginal effect controlling for the others.',
  25316: 'ANOVA decomposes variability between vs within groups. F-statistic compares the two.',

  // Calc BC (25401-25450, 11 blueprints)
  25401: 'Limit techniques: substitution, factoring, conjugate, L Hopital. Pick by indeterminate form.',
  25402: 'Power, product, quotient rules. Memorize derivatives of standard functions cold.',
  25403: 'Chain rule on composites; implicit on equations with y inside; inverse via 1/(f prime of y).',
  25404: 'Related rates: name the variables, differentiate the relationship in time, solve for the unknown rate.',
  25405: 'First derivative for monotonicity; second derivative for concavity. Sign analysis is the work.',
  25406: 'Definite integrals as accumulated change. FTC links derivative and integral.',
  25407: 'Separable, linear first-order, integrating factors. ODE technique by form.',
  25408: 'Volumes of revolution: disks, washers, shells. Pick by the axis of revolution and slice direction.',
  25409: 'Parametric: dy/dx = (dy/dt)/(dx/dt). Polar: r(theta), area via 1/2 integral r^2 d theta.',
  25410: 'Convergence tests: ratio, root, comparison, alternating series. Match the test to the series.',
  25411: 'BC free-response: show every step, units in the answer, justify convergence carefully.',
}

// Fill in cycled-quiz hints for offsets 9-49 (Calc AB), 13-49 (AP Stats), etc.
// Cycle the blueprint hint forward by N indices.
const _cycle = (base: number, n: number) => {
  for (let i = 0; i < 50; i++) {
    const id = base + i
    if (UNIVERSITY_MENTOR_HINTS[id] === undefined) {
      UNIVERSITY_MENTOR_HINTS[id] = UNIVERSITY_MENTOR_HINTS[base + (i % n)]
    }
  }
}
_cycle(24901, 9)
_cycle(25001, 13)
_cycle(25101, 9)
_cycle(25201, 9)
_cycle(25301, 16)
_cycle(25401, 11)

// UNIVERSITY_CORRECT_SHORTENED — entries where `correct` substantially exceeded
// the longest distractor. Each entry shortens `correct` and pushes the trimmed
// explanatory detail into `lessonAddendum` so no information is lost.

export const UNIVERSITY_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  // ---------- universityAcademic ----------
  16318: {
    newCorrect: 'trans-2-methylcyclopentanol',
    lessonAddendum: 'Hydroboration-oxidation is anti-Markovnikov and syn-addition. The OH ends up on the less substituted carbon, and the OH and methyl end up on opposite faces — giving trans-2-methylcyclopentanol as a racemate.',
  },
  16404: {
    newCorrect: 'A chemical messenger used in neural communication.',
    lessonAddendum: 'Neurotransmitters are released from presynaptic terminals, diffuse across the cleft, and bind receptors on the postsynaptic cell. They are the chemical step in cell-to-cell neural signaling.',
  },
  16418: {
    newCorrect: 'Pulls vesicle and presynaptic membrane together to drive fusion.',
    lessonAddendum: 'SNARE proteins (syntaxin and SNAP-25 on the plasma membrane, synaptobrevin on the vesicle) coil into a four-helix bundle that mechanically forces the two membranes into contact. Synaptotagmin senses Ca2+ and triggers full fusion.',
  },
  16507: {
    newCorrect: 'Temperature in degrees Celsius.',
    lessonAddendum: 'Quantitative data is numerical and supports arithmetic operations and statistical summaries. Temperature, weight, count, and reaction time are all quantitative. Color and mood description are qualitative.',
  },
  16516: {
    newCorrect: 'A strict cutoff score on a pre-existing metric.',
    lessonAddendum: 'Regression discontinuity exploits a sharp threshold rule (scholarship at GPA 3.5, age cutoff, test cutoff). Just above and just below the cutoff are comparable in expectation, so the discontinuity in outcome at the threshold estimates the local causal effect.',
  },
  16612: {
    newCorrect: 'Whether an object stays the same when its parts are replaced.',
    lessonAddendum: 'The Ship of Theseus problem asks about identity through change. Different theories — mereological essentialism, four-dimensionalism, psychological continuity for persons — give different answers. The puzzle is whether identity is constituted by parts, structure, history, or function.',
  },
  16902: {
    newCorrect: 'Steric hindrance at carbon and nucleophile concentration.',
    lessonAddendum: 'SN2 is bimolecular, concerted, and backside-attack. Its rate law is k[substrate][nucleophile]. Tertiary substrates are too crowded for SN2; primary substrates favor it. Protic solvents slow SN2 by solvating the nucleophile.',
  },
  16907: {
    newCorrect: 'Formation of a stable conjugated alpha,beta-unsaturated carbonyl.',
    lessonAddendum: 'In aldol condensation, the dehydration step removes water from the beta-hydroxy carbonyl to give an enone. Conjugation between the new C=C and the existing C=O stabilizes the product, providing the thermodynamic driving force.',
  },
  16909: {
    newCorrect: 'Meta, because it is strongly electron-withdrawing.',
    lessonAddendum: 'NO2 withdraws electrons by induction and resonance. The ortho and para positions are destabilized in the sigma complex (positive charge ends up adjacent to N+), so EAS is forced to the meta position. Strong deactivators (except halogens) are meta directors.',
  },
  16910: {
    newCorrect: 'Carboxylic acids — the Grignard deprotonates the acidic OH first.',
    lessonAddendum: 'Grignards (RMgX) are both strong nucleophiles and very strong bases. Any group with an acidic proton (COOH, OH, NH, terminal alkyne) deprotonates the Grignard before any addition can occur. This is why Grignard reagents must be prepared in anhydrous ether/THF with no protic functionality.',
  },
  17002: {
    newCorrect: 'Mediates synaptic vesicle fusion upon calcium entry.',
    lessonAddendum: 'The SNARE complex (syntaxin, SNAP-25, synaptobrevin) zippers vesicle and presynaptic membranes together. Calcium influx through voltage-gated Ca2+ channels binds synaptotagmin, which triggers the final fusion step.',
  },
  17007: {
    newCorrect: 'Attractive and repulsive guidance cues like netrins and semaphorins.',
    lessonAddendum: 'Axonal growth cones extend filopodia that sample local concentration gradients of guidance molecules. Netrins, slits, semaphorins, and ephrins act as attractive or repulsive cues depending on the receptors expressed. The result is highly specific wiring of the nervous system.',
  },
  17009: {
    newCorrect: 'Ataxia — uncoordinated and inaccurate voluntary movements.',
    lessonAddendum: 'Cerebellar damage produces ataxia: limb dysmetria, intention tremor, dysdiadochokinesia, and ataxic gait. The cerebellum calibrates ongoing movement in real time using sensory feedback, so its loss makes movements imprecise but does not paralyze them.',
  },
  17010: {
    newCorrect: 'Clearing glutamate from the synaptic cleft to prevent excitotoxicity.',
    lessonAddendum: 'Astrocytes use EAAT (excitatory amino acid transporter) family glutamate transporters to take up cleft glutamate, convert it to glutamine, and shuttle it back to neurons for resynthesis. Failure of this clearance causes pathological elevations of extracellular glutamate and NMDA-mediated excitotoxicity.',
  },
  17110: {
    newCorrect: 'Quantitative data first, then qualitative to explain the results.',
    lessonAddendum: 'In Sequential Explanatory mixed methods, quantitative findings (the "what") are followed by qualitative work (interviews, focus groups) to interpret unexpected results, mechanism, or context. The qualitative phase explains the quantitative.',
  },

  // ---------- universityPrep ----------
  2007: {
    newCorrect: 'Lasso can drive coefficients to exactly zero, performing feature selection.',
    lessonAddendum: 'L1 regularization\'s diamond-shaped constraint region has corners on the axes, so the optimal solution often lands on an axis, zeroing that coefficient. L2 (Ridge) uses a circular constraint and shrinks asymptotically without hitting zero.',
  },
  2009: {
    newCorrect: 'Probability that a random positive outranks a random negative.',
    lessonAddendum: 'AUC-ROC evaluates ranking quality at all thresholds simultaneously. It is invariant to class-imbalance issues and is interpreted as: pick one positive and one negative at random — AUC is the probability the model gives the positive a higher score.',
  },
  2010: {
    newCorrect: 'The Stable Unit Treatment Value Assumption (SUTVA).',
    lessonAddendum: 'SUTVA requires that the treatment of one unit does not affect the outcome of another. Marketplaces, networks, and shared-supply systems (like ride-sharing) routinely violate it via spillover and interference. Cluster randomization or switchback designs help.',
  },
  2012: {
    newCorrect: 'Data drift shifts P(X); concept drift shifts P(Y|X).',
    lessonAddendum: 'Data drift means the input distribution changes (new traffic mix, seasonality, new user demographics). Concept drift means the relationship between inputs and target changes (user preferences flip, fraud patterns mutate). They demand different monitors and different retraining strategies.',
  },
  2014: {
    newCorrect: 'Low bias and high variance — prone to overfitting.',
    lessonAddendum: 'Highly flexible models fit the training data extremely well (low bias) but their predictions swing wildly with small data changes (high variance). Regularization, more data, or simpler model classes reduce variance.',
  },
  3005: {
    newCorrect: 'When the distinct-character count in the map exceeds K.',
    lessonAddendum: 'The sliding-window invariant is: the window contains at most K distinct characters. When a new character pushes the count to K+1, advance left until the count is back to K. The right pointer drives growth, the left enforces validity.',
  },
  3008: {
    newCorrect: 'BFS level order guarantees first arrival is the shortest path.',
    lessonAddendum: 'BFS expands by level from the source, so when a node is first dequeued, no shorter path can reach it. DFS may find a much longer path first and would need to backtrack. The unweighted case is what BFS handles directly; Dijkstra generalizes to weighted.',
  },
  3009: {
    newCorrect: 'Avoids recursion stack overhead and stack overflow.',
    lessonAddendum: 'Bottom-up tabulation builds the DP table iteratively from base cases. It removes the recursive call stack, lets you control iteration order, and tolerates input sizes that would blow the stack in memoization. Memoization is easier to write; tabulation is more robust.',
  },
  3011: {
    newCorrect: 'Minimizes the number of keys remapped when nodes change.',
    lessonAddendum: 'Consistent hashing maps both nodes and keys onto a ring. Adding or removing a node only affects keys assigned to that node\'s arc, so roughly K/N keys move. Modulo hashing (key % N) reshuffles nearly every key when N changes.',
  },
  3012: {
    newCorrect: 'Real-time, low-latency, bidirectional communication.',
    lessonAddendum: 'WebSockets maintain a persistent TCP connection with low-overhead framing for many small messages. They suit chat, presence, collaborative editing, and live dashboards. Static content, batch jobs, and large media streams are better served by HTTP, message queues, or streaming protocols.',
  },
  4005: {
    newCorrect: 'That the hyperparameter tuning budget was identical for both.',
    lessonAddendum: 'SOTA papers frequently report results where the proposed method has been tuned aggressively while baselines used default settings. Equal-budget comparisons (e.g., HPO with the same trial count) are the fair benchmark, and many SOTA gains shrink or disappear under that protocol.',
  },
  4006: {
    newCorrect: 'Comparing observations narrowly on either side of a sharp cutoff.',
    lessonAddendum: 'In Regression Discontinuity, assignment is forced by a threshold (test score, age, time). Just above and just below the cutoff are comparable in expectation on unobservables, so the jump in outcome at the threshold identifies the local average treatment effect.',
  },
  4008: {
    newCorrect: 'Approximate intractable posterior distributions.',
    lessonAddendum: 'MCMC methods (Metropolis-Hastings, Gibbs, HMC) draw samples from the posterior by constructing a Markov chain whose stationary distribution is the target. They are essential when the normalizing constant of the posterior is impossible to compute analytically.',
  },
  4010: {
    newCorrect: 'Mini-batch gradient noise causes oscillation and stalls.',
    lessonAddendum: 'Stochastic gradient estimates from mini-batches are noisy approximations of the true gradient. Without dampening, optimization oscillates or stalls. Momentum integrates past gradients, learning-rate schedules anneal step size, and adaptive methods (Adam) normalize per-coordinate to smooth the trajectory.',
  },
  4012: {
    newCorrect: 'Acknowledge it and bound how the bias could affect conclusions.',
    lessonAddendum: 'The rigorous move is to acknowledge the unmeasured confounder explicitly, run a sensitivity analysis (e.g., E-value), and report how strong the confounder would have to be to overturn the result. Defending against valid critique or dodging it damages credibility.',
  },

  // ---------- universityAgentGenerated (English Composition long-correct items) ----------
  3105001: {
    newCorrect: 'Add more dorm laundry machines: shortages waste student time.',
    lessonAddendum: 'A workable thesis stakes a contestable, specific claim and previews the reason. The full development can include cost estimates, comparable schools, and a counterargument; the thesis itself should be a one-sentence stance.',
  },
  3105011: {
    newCorrect: 'A short financial-literacy unit could fit by trimming review topics, reducing future student debt.',
    lessonAddendum: 'Counterargument-strong responses concede the legitimate cost (curriculum is full) and rebut with a specific tradeoff and benefit. The acknowledgement makes the rebuttal credible and the proposal practicable.',
  },
  3105015: {
    newCorrect: 'Demand data could let the university offer evening classes profitably despite higher staffing costs.',
    lessonAddendum: 'Effective rebuttals concede the cost concern, then offer evidence that the benefit exceeds it. Citing demand data is the load-bearing move — without it, the rebuttal collapses into wishful thinking.',
  },
  3100005: {
    newCorrect: 'Extra H+ disrupts charges on side chains, unfolding the protein.',
    lessonAddendum: 'Low pH protonates carboxylate side chains (Asp, Glu) and the imidazole of His, disrupting salt bridges and H-bonds that maintain tertiary structure. The result is denaturation and loss of function.',
  },
  3100017: {
    newCorrect: 'Top band = larger fragment; bottom band = smaller; no band = no DNA.',
    lessonAddendum: 'In gel electrophoresis, smaller fragments migrate farther through the gel matrix. A missing band can indicate that the template was absent, the PCR failed, or the fragment ran off the gel — context dictates which.',
  },
}

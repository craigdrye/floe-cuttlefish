# Raw Mapping Audit Samples

Generated on 2026-05-03T05:13:39.965Z.

## How To Use This

- Read the samples for each priority entry before wiring that entry into a live course.
- If any sample feels misplaced, inspect the whole collection or split the mapping again.
- Treat raw candidate-track overlap as a weak signal only; several miners used older heuristic target ids.
- Treat prompt-quality flags as blockers before live course exposure.
- For small entries, review every question before exposing them.
- Held sources are preserved in JSON but omitted from the main Markdown queue.

## Overall

- Mapping entries audited: 294
- Priority entries shown: 80
- Sampled questions in priority queue: 396

## Priority Queue

### numbas_exams::source

- Source: Numbas reusable exams (`numbas_exams`)
- Status: seed-new-course; Confidence: medium; Risk score: 115
- Matched questions: 12063
- Target family: math-depth
- Existing track ids: collegeAlgebra, apCalculusAB, apCalculusBc, linearAlgebra, trigonometry, genPhys1
- Proposed tracks: mathDiagnostics (Math Diagnostics), mechanicsDrills (Mechanics Drills)
- Review recommendation: Review representative samples, then design the new course boundary.

Samples:

- Raw index 0; collection `numbas-exam::13304`
  Source id: numbas-exam::13304::1
  Title: Equilibrium of a rigid body: raise pole
  Prompt: A {mass} homogeneous pole with a length of {L} is being raised by pulling with a cable at $B$. {geogebra_applet('pf8c3vcn',[['&alpha;',alpha +'&deg;'],['&beta;',beta +'&deg;']])} Determine the tension in the cable and the magnitude and direction of the reaction force at point $A$.
  Answer evidence: This problem can be solved by the standard method: Draw a free body diagram of the pole. Include the weight of the pole at the center of gravity. Note that mass must be converted to weight. Use $\Sigma M_A = 0$ to fin...
  Raw candidates: genPhys1, quantAdvanced
  Candidate overlap: yes
- Raw index 4021; collection `numbas-exam::34829`
  Source id: numbas-exam::34829::35
  Title: Merryn's copy of Converting between Mixed Numbers and Improper Fractions
  Prompt: [missing prompt preview]
  Answer evidence: c) A mixed number is a number consisting of an integer and a proper fraction, i.e. a number in the form $ a \displaystyle \frac{b}{c}$ where $a$ is an integer and $\displaystyle\frac{b}{c}$ is a proper fraction: $b$ i...
  Raw candidates: none
  Candidate overlap: yes
  Prompt quality flags: missing-prompt
- Raw index 6031; collection `numbas-exam::2740`
  Source id: numbas-exam::2740::2
  Title: Inventory analysis: single price break point
  Prompt: {company} uses {products} at a rate of {demand} {units} per week. Holding costs (storage, insurance, lost interest) amount to &pound;{dpformat(holding_cost,2)} per {unit} per week. The cost of an order for more {products} is &pound;{order_cost} (including book-keeping, transport and handling). The price of {products...
  Answer evidence: a) The economic order quantity is given by \[ \mathrm{EOQ} = \sqrt{\frac{2ad}{h}} \] where $a = \var{order_cost}$ is the set-up cost of each order, $d = \var{demand}$ is the annual demand, and $h = \var{holding_cost}$...
  Raw candidates: none
  Candidate overlap: yes
- Raw index 12062; collection `numbas-exam::2027`
  Source id: numbas-exam::2027::1
  Title: Confidence Interval
  Prompt: The ages of patients coming into a small rural doctor's surgery during the school holidays are noted down on each Monday and Friday thoughout August. {table([['Monday']+mon,['Friday']+fri],[])}
  Answer evidence: a) The mean of the sample of patients visiting on Mondays is \[ \bar{x} = \frac{1}{n}(\sum x_i) = \var{precround(monday_mean,2)} \text{ (to 2 d.p.)} \] The standard deviation is \[ s = \sqrt{\frac{1}{n}\sum \left(x_i-...
  Raw candidates: none
  Candidate overlap: yes

### webwork_opl::source

- Source: WeBWorK Open Problem Library (`webwork_opl`)
- Status: support-bank; Confidence: low; Risk score: 95
- Matched questions: 22861
- Target family: math-depth
- Existing track ids: collegeAlgebra, apCalculusAB, apCalculusBc, linearAlgebra, trigonometry, quantAdvanced
- Proposed tracks: contestMathDrills (Contest Math Drills), collegeAlgebraWorkout (College Algebra Workout)
- Review recommendation: Review manually before any live exposure.

Samples:

- Raw index 0; collection `webwork-opl::unknown-subject::unknown-chapter`
  Source id: webwork-opl::OpenProblemLibrary/270/setDerivatives1/osu_dr_1_12.pg
  Title: OpenProblemLibrary/270/setDerivatives1/osu_dr_1_12.pg
  Prompt: Let f(x)= b x- a . Then according to the definition of derivative f'(x) = _ t x (Your answer above and the next few answers below will involve the variables t and x.) The expression inside the limit simplifies to a simple fraction with numerator = and denominator = We can cancel the factor appearing in the denominat...
  Raw candidates: apCalculusAB, apCalculusBC, genMath1
  Candidate overlap: yes
- Raw index 11430; collection `webwork-opl::unknown-subject::unknown-chapter`
  Source id: webwork-opl::OpenProblemLibrary/PCC/BasicAlgebra/OrderOfOperations/orderOfOperations50.pg
  Title: OpenProblemLibrary/PCC/BasicAlgebra/OrderOfOperations/orderOfOperations50.pg
  Prompt: Evaluate this expression: [` [$a]- = `] [________]
  Raw candidates: none
  Candidate overlap: yes
- Raw index 22860; collection `webwork-opl::unknown-subject::unknown-chapter`
  Source id: webwork-opl::OpenProblemLibrary/org.sparta/Linear_Functions_and_Relations/TorF_Problem1.pg
  Title: OpenProblemLibrary/org.sparta/Linear_Functions_and_Relations/TorF_Problem1.pg
  Prompt: Are the following statements true or false?
  Raw candidates: none
  Candidate overlap: yes

### numbas::source

- Source: Numbas public database (`numbas`)
- Status: seed-new-course; Confidence: medium; Risk score: 90
- Matched questions: 9808
- Target family: math-depth
- Existing track ids: collegeAlgebra, apCalculusAB, apCalculusBc, linearAlgebra, trigonometry, apStatistics
- Proposed tracks: algebraWorkout (Algebra Workout), mechanicsDrills (Mechanics Drills), quantitativeMethods (Quantitative Methods)
- Review recommendation: Review representative samples, then design the new course boundary.

Samples:

- Raw index 0; collection `numbas::reuse-questions`
  Source id: numbas::202414
  Title: Dump Truck
  Prompt: The combined weight of the truck bed and its contents is {W} lb with a center of gravity at $G$. Determine: The force acting at on the dump bed at point $B$. The magnitude and direction of the reaction at pin $C$. {applet}
  Answer evidence: {fbd} 0. Draw a neat and accurate free-body diagram. 1. Assign symbols to known values $d_1 = \var{D(dx)}, d_2 = \var{D(L-dx)}, d_3 = \var{d(dy)}$ $\alpha = \var{alpha}^\circ, \theta=\var{theta}^\circ, \phi = 180 - \a...
  Raw candidates: genPhys1, quantAdvanced
  Candidate overlap: no
- Raw index 3269; collection `numbas::reuse-questions`
  Source id: numbas::94129
  Title: Matrix multiplication AB
  Prompt: \[A = \left(\begin{array}{rrr} \var{a11} & \var{a12} & \var{a13}\\ \var{a21} & \var{a22} & \var{a23}\\ \var{a31} & \var{a32} & \var{a33}\\ \end{array}\right),\;\;\;\; B= \left(\begin{array}{rrr} \var{b11} & \var{b12} & \var{b13}\\ \var{b21} & \var{b22} & \var{b23}\\ \var{b31} & \var{b32} & \var{b33}\\ \end{array}\ri...
  Answer evidence: Please see lecture slides for worked example.
  Raw candidates: linearAlgebra, quantAdvanced
  Candidate overlap: yes
- Raw index 4904; collection `numbas::reuse-questions`
  Source id: numbas::12182
  Title: Calculate probabilities from normal distribution,
  Prompt: The {amount}, $X$, of {stuff} is normally distributed with mean {m}k and standard deviation {s}{units1}. i.e. \[X \sim \operatorname{N}(\var{m},\var{s}^2)\]
  Answer evidence: 1. Converting to $\operatorname{N}(0,1)$ $\simplify[all,!collectNumbers]{P(X < {lower}) = P(Z < ({lower} -{m}) / {s}) =1 -P(Z < {m-lower}/{s})} = 1-P(z<\var{zlower})=1 -\var{p} = \var{prob1}$ to 2 decimal places. 2. C...
  Raw candidates: apStatistics, quant, introDataScience
  Candidate overlap: yes
- Raw index 9807; collection `numbas::reuse-questions`
  Source id: numbas::8878
  Title: A comparison of the means of two groups (2).
  Prompt: A medical researcher is concerned that a new drug may be affecting a patient&rsquo;s ability to concentrate. She finds six (6) sets of identical twins, randomly gives one a placebo pill (a medically inert and inactive substance) and the other the drug, then measures their reaction times. The data is in the table bel...
  Answer evidence: First, recognise that this is a paired t-test: paired because twins are genetically identical. So calculate the differences (placebo $-$ drug) between those two observations: {d} Note: If you have a graphical calculat...
  Raw candidates: apStatistics, quant, introDataScience
  Candidate overlap: yes

### nysed_science_2024::grade-5

- Source: NYSED 2024 Grade 5 and Grade 8 Science Released Questions (`nysed_science_2024`)
- Status: map-now; Confidence: medium; Risk score: 65
- Matched questions: 40
- Target family: school-science-support
- Existing track ids: scienceYear5
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 0; collection `nysed-science-2024::grade-5`
  Source id: nysed-science-2024::grade-5::0
  Title: NYSED 2024 Grade 5 Science
  Prompt: 1986 1996 2006 Year Amount of Fish Caught (Metric ton) 2016
  Raw candidates: scienceYear5, ck12, khanacademy
  Candidate overlap: yes
- Raw index 10; collection `nysed-science-2024::grade-5`
  Source id: nysed-science-2024::grade-5::10
  Title: NYSED 2024 Grade 5 Science
  Prompt: Multiple Choice B 1 3-ESS2-1 ESS 0.52
  Answer evidence: Multiple Choice; correct=B; points=1; standard=3-ESS2-1
  Raw candidates: scienceYear5, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 20; collection `nysed-science-2024::grade-5`
  Source id: nysed-science-2024::grade-5::20
  Title: NYSED 2024 Grade 5 Science
  Prompt: Multiple Choice D 1 5-PS1-1 PS 0.34
  Answer evidence: Multiple Choice; correct=D; points=1; standard=5-PS1-1
  Raw candidates: scienceYear5, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 30; collection `nysed-science-2024::grade-5`
  Source id: nysed-science-2024::grade-5::30
  Title: NYSED 2024 Grade 5 Science
  Prompt: Multiple Choice B 1 3-PS2-3 PS 0.47
  Answer evidence: Multiple Choice; correct=B; points=1; standard=3-PS2-3
  Raw candidates: scienceYear5, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 39; collection `nysed-science-2024::grade-5`
  Source id: nysed-science-2024::grade-5::80
  Title: NYSED 2024 Grade 5 Science
  Prompt: 40
  Raw candidates: scienceYear5, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: very-short-prompt, numeric-only-prompt

### staar_2022::grade-5-science

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status: map-now; Confidence: medium; Risk score: 65
- Matched questions: 36
- Target family: school-science-support
- Existing track ids: scienceYear5
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 441; collection `staar-2022::grade-5-science`
  Source id: staar-2022::grade-5-science::1
  Title: Grade 5 Science
  Prompt: Which circuit shown will produce light when the switch is closed? A Bulb Switch Battery C Bulb Switch Battery B Bulb Switch Battery D Bulb Switch Battery 25577_4
  Answer evidence: 1 2 Readiness 5.6(B) 5.2(D) B
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
- Raw index 450; collection `staar-2022::grade-5-science`
  Source id: staar-2022::grade-5-science::10
  Title: Grade 5 Science
  Prompt: Students observe a gerbil in a cage. They write their observations as shown. • It twitches its whiskers. • It burrows in the bedding. • It drinks water from a metal tube. • It walks on four legs. Which of these observations is most likely a learned behavior? F Twitching its whiskers G Burrowing in the bedding H Drin...
  Answer evidence: 10 4 Readiness 5.10(B) H
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
- Raw index 459; collection `staar-2022::grade-5-science`
  Source id: staar-2022::grade-5-science::19
  Title: Grade 5 Science
  Prompt: The student is observing part of a plant with a microscope. © Darren Baker/Dreamstime.com Which statement describes a behavior of light in the microscope? A Light travels through the microscope lens without changing direction. B Moving in straight lines causes light to increase in brightness. C Light refracts throug...
  Answer evidence: 19 2 Readiness 5.6(C) 5.4(A) C
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
- Raw index 468; collection `staar-2022::grade-5-science`
  Source id: staar-2022::grade-5-science::28
  Title: Grade 5 Science
  Prompt: Which Texas land formation is correctly paired with the force that made the land formation? F A canyon at Palo Duro Canyon State Park was formed by a river. G A sand dune at Monahans Sandhills State Park was formed by an earthquake. H A delta at the end of the Guadalupe River was formed by wind. J A rock formation w...
  Answer evidence: 28 3 Readiness 5.7(B) F
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
- Raw index 476; collection `staar-2022::grade-5-science`
  Source id: staar-2022::grade-5-science::36
  Title: Grade 5 Science
  Prompt: Students conduct experiments to investigate friction. Which experiment will best test the effect of friction on objects? F Drop two balls from the same height at the same time G Roll two marbles on the carpet from the same starting point at the same time and with the same amount of force H Roll three marbles across ...
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no

### nysed_science_2025::grade-5

- Source: NYSED 2025 Grade 5 and Grade 8 Science Released Questions (`nysed_science_2025`)
- Status: map-now; Confidence: medium; Risk score: 65
- Matched questions: 35
- Target family: school-science-support
- Existing track ids: scienceYear5
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 0; collection `nysed-science-2025::grade-5`
  Source id: nysed-science-2025::grade-5::1
  Title: NYSED 2025 Grade 5 Science
  Prompt: Multiple Choice A 1 3-LS3-1 LS 0.56
  Answer evidence: Multiple Choice; correct=A; points=1; standard=3-LS3-1
  Raw candidates: scienceYear5, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 8; collection `nysed-science-2025::grade-5`
  Source id: nysed-science-2025::grade-5::9
  Title: NYSED 2025 Grade 5 Science
  Prompt: Multiple Choice C 1 5-PS1-3 PS 0.50
  Answer evidence: Multiple Choice; correct=C; points=1; standard=5-PS1-3
  Raw candidates: scienceYear5, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 16; collection `nysed-science-2025::grade-5`
  Source id: nysed-science-2025::grade-5::18
  Title: NYSED 2025 Grade 5 Science
  Prompt: 25
  Raw candidates: scienceYear5, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: very-short-prompt, numeric-only-prompt
- Raw index 17; collection `nysed-science-2025::grade-5`
  Source id: nysed-science-2025::grade-5::19
  Title: NYSED 2025 Grade 5 Science
  Prompt: 26
  Raw candidates: scienceYear5, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: very-short-prompt, numeric-only-prompt
- Raw index 34; collection `nysed-science-2025::grade-5`
  Source id: nysed-science-2025::grade-5::36
  Title: NYSED 2025 Grade 5 Science
  Prompt: Multiple Choice C 1 4-PS3-2 PS 0.49 THE STATE EDUCATION DEPARTMENT * This item map identifies the Performance Expectation with which each test question is aligned. All NYSP-12SLS Performance Expectations are three-dimensional (https://www.nysed.gov/sites/default/files/programs/standards-instruction/p-12-science- lea...
  Answer evidence: Multiple Choice; correct=C; points=1; standard=4-PS3-2
  Raw candidates: scienceYear5, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, answer-map-row

### staar_2023_redesign::grade-5-science

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status: map-now; Confidence: medium; Risk score: 65
- Matched questions: 32
- Target family: school-science-support
- Existing track ids: scienceYear5
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 566; collection `staar-2023-redesign::grade-5-science`
  Source id: staar-2023-redesign::grade-5-science::1
  Title: Grade 5 Science
  Prompt: 100 23 77
  Answer evidence: 1 is closed, which lightbulbs will glow? Select TWO correct answers. In what order do these steps occur during the formation of sedimentary rock? Select ONE correct answer for each row. A Erosion B Deposition C Compac...
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
  Prompt quality flags: very-short-prompt
- Raw index 574; collection `staar-2023-redesign::grade-5-science`
  Source id: staar-2023-redesign::grade-5-science::9
  Title: Grade 5 Science
  Prompt: A student watches a toy car speed up as it rolls down a ramp. After the car gets to the bottom of the ramp, the car slows to a stop as it rolls across the classroom floor. Which force caused the car to speed up when rolling down the ramp, and which force caused it to slow down when rolling across the floor? A Gravit...
  Answer evidence: 9 Multiple Choice 2.3.6.B
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
- Raw index 582; collection `staar-2023-redesign::grade-5-science`
  Source id: staar-2023-redesign::grade-5-science::17
  Title: Grade 5 Science
  Prompt: Black walnut trees produce and release a chemical from their roots that prevents nearby plants of different species from growing. Which statement describes the MOST LIKELY advantage for the black walnut trees of releasing this chemical? A Less sunlight is needed to produce food. B Walnuts are protected from animal p...
  Answer evidence: 17 Multiple Choice 4.5.9.A
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
- Raw index 590; collection `staar-2023-redesign::grade-5-science`
  Source id: staar-2023-redesign::grade-5-science::25
  Title: Grade 5 Science
  Prompt: Which statement explains why the sun appears to move across the sky during the day? A Earth revolves around the sun. B Earth rotates on its axis. C The sun revolves around Earth. D The sun rotates on its axis. 84755
  Answer evidence: 25 Multiple Choice 3.5.8.C
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
- Raw index 597; collection `staar-2023-redesign::grade-5-science`
  Source id: staar-2023-redesign::grade-5-science::32
  Title: Grade 5 Science
  Prompt: A group of animals is shown. Which habitat are these animals BEST suited for? A A part of the ocean that is permanently covered in ice B A tropical area of the ocean that contains rocks and living coral C A shallow body of freshwater that has plants growing around its edges D A fast-moving freshwater stream that flo...
  Answer evidence: 32 Multiple Choice 4.3.9.A
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no

### staar_2025_rationales::grade-5-science

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status: map-now; Confidence: medium; Risk score: 65
- Matched questions: 31
- Target family: school-science-support
- Existing track ids: scienceYear5
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 647; collection `staar-2025-rationale::grade-5-science`
  Source id: staar-2025-rationale::grade-5-science::0
  Title: Grade 5 Science
  Prompt: pt The response is incorrect or irrelevant.
  Answer evidence: 0 Layer
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
- Raw index 654; collection `staar-2025-rationale::grade-5-science`
  Source id: staar-2025-rationale::grade-5-science::7
  Title: Grade 5 Science
  Prompt: Option D is correct Objects
  Answer evidence: 7 Multiple Choice 5.6(A)
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 661; collection `staar-2025-rationale::grade-5-science`
  Source id: staar-2025-rationale::grade-5-science::16
  Title: Grade 5 Science
  Prompt: Option B is correct All the materials are solids. Option A is incorrect The wood will float, but bricks and copper wire do not float. Option C is incorrect The wire is flexible, but the brick is not. Option D is incorrect Only the wire conducts electricity.
  Answer evidence: 16 Multiple Choice 5.6(A)
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 662; collection `staar-2025-rationale::grade-5-science`
  Source id: staar-2025-rationale::grade-5-science::17
  Title: Grade 5 Science
  Prompt: Part A Option B is correct The angle of the beam of light changes as it moves from the air to the surface material. Option A is incorrect Together Arrow W and Arrow X show reflection of light. Option C is incorrect Arrow Y and Arrow Z show light refracting as it moves from the surface material to the air. Option D i...
  Answer evidence: 17 Multipart 5.8(C)
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 677; collection `staar-2025-rationale::grade-5-science`
  Source id: staar-2025-rationale::grade-5-science::32
  Title: Grade 5 Science
  Prompt: Option B is correct Position
  Answer evidence: 32 Multiple Choice 5.10(B)
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
  Prompt quality flags: rationale-only

### staar_2023::grade-5-science

- Source: Texas STAAR 2023 paper samplers (`staar_2023`)
- Status: map-now; Confidence: medium; Risk score: 65
- Matched questions: 10
- Target family: school-science-support
- Existing track ids: scienceYear5
- Proposed tracks: none
- Review recommendation: Small enough to review fully before wiring.

Samples:

- Raw index 240; collection `staar-2023::grade-5-science`
  Source id: staar-2023::grade-5-science::1
  Title: Grade 5 Science
  Prompt: A circuit is shown. Which lightbulbs in the circuit will produce light? Select FOUR correct answers. 8904 Science
  Answer evidence: W; Z
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
- Raw index 242; collection `staar-2023::grade-5-science`
  Source id: staar-2023::grade-5-science::3
  Title: Grade 5 Science
  Prompt: Students are given five different mixtures to separate. What method can students BEST use to separate each mixture into two parts? Select the correct answer for each box. Each answer may be used more than once. A Hand sorting B Magnetism C Filtering Mixture Separation Method Sand and water A B C Pebbles and glass ma...
  Answer evidence: because both have a density greater than liquid water.
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
- Raw index 244; collection `staar-2023::grade-5-science`
  Source id: staar-2023::grade-5-science::5
  Title: Grade 5 Science
  Prompt: This question has two parts. First, answer Part A. Then, answer Part B. Seaweeds look like plants. They have leaflike structures that make food from light energy and rootlike structures that keep them in place. However, seaweeds are not plants. They are part of a different group of organisms called algae. Seaweeds a...
  Answer evidence: Drag and Drop 1.5.5.B; PS.5.2.D
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
- Raw index 245; collection `staar-2023::grade-5-science`
  Source id: staar-2023::grade-5-science::6
  Title: Grade 5 Science
  Prompt: This question has two parts. First, answer Part A. Then, answer Part B. A student on a farm observes a cow and a horse as shown in the diagram. Part A Based on the student’s observations, which statement BEST describes an interaction between one of the animals and a living component of its environment? A The cow is ...
  Answer evidence: Drag and Drop 3.5.7.A
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no
- Raw index 249; collection `staar-2023::grade-5-science`
  Source id: staar-2023::grade-5-science::10
  Title: Grade 5 Science
  Prompt: A diagram of the water cycle is shown. Clouds are shown in the diagram above Arrow 1 and Arrow 3. Science What is the process that forms clouds? Provide a description with your answer. Look at the diagram carefully. Then record your answer and description in the box provided. 8917 STAAR GRADE 5 Science Paper Item Sa...
  Answer evidence: Multiselect 3.3.8.D
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: no

### opendsa::core-cs

- Source: OpenDSA (`opendsa`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 691
- Target family: computer-science
- Existing track ids: introCS, software, dataStructures
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 61; collection `open-dsa::background`
  Source id: opendsa::Background/IntroMCQeff.html
  Title: Introduction Question Efficiency
  Prompt: A tool for measuring the efficiency of an algorithm or problem is:
  Answer evidence: Algorithm analysis
  Raw candidates: introCS, logicCriticalThinking
  Candidate overlap: yes
- Raw index 388; collection `open-dsa::introtosoftwaredesign`
  Source id: opendsa::IntroToSoftwareDesign/Week2Quiz2Q3.html
  Title: Class Hierarchy and Inheritance
  Prompt: True or False - A subclass can represent a less specialized concept than its superclass
  Answer evidence: False - a subclass can represent a more specialized concept than its superclass
  Raw candidates: introCS, software
  Candidate overlap: yes
- Raw index 625; collection `open-dsa::mengbridgecourse`
  Source id: opendsa::MengBridgeCourse/DesignCheckpoint2Q5.html
  Title: Design Checkpoint 2
  Prompt: Review the following case study to answer this question. This case study is the same across all questions Case Study - e-Commerce solution (online storefront) for ABC Ltd. You are required to produce a design for an e-commerce solution (online storefront) for the retail company ABC Ltd. ABC will use the solution to ...
  Answer evidence: User Class - email, username, password Customer Class - billingAddress, shippingAddress, paymentOption
  Raw candidates: introCS
  Candidate overlap: yes
- Raw index 626; collection `open-dsa::mengbridgecourse`
  Source id: opendsa::MengBridgeCourse/EfficiencyCheckpoint1Q1.html
  Title: Efficiency Checkpoint 1
  Prompt: An algorithm has...
  Answer evidence: Both Time and Space Requirements
  Raw candidates: introCS
  Candidate overlap: yes
  Prompt quality flags: very-short-prompt
- Raw index 1125; collection `open-dsa::simpledemo`
  Source id: opendsa::SimpleDemo/Simple_demo_ex3.html
  Title: Pick the largest using multiple-choice
  Prompt: What is the largest value in this list of numbers?
  Answer evidence: theAnswer
  Raw candidates: introCS
  Candidate overlap: yes

### opensat::math

- Source: OpenSAT / PineSAT API (`opensat`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 401
- Target family: exam-prep
- Existing track ids: col-sat-math
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 799; collection `opensat::math`
  Source id: opensat::281a4f3b
  Prompt: A certain college had 3,000 students enrolled in 2015. The college predicts that after 2015, the number of students enrolled each year will be 2% less than the number of students enrolled the year before. Which of the following functions models the relationship between the number of students enrolled, *f(x)*, and th...
  Answer evidence: correct=D
  Raw candidates: sat, elevenPlus, high_algebra_2, apCalculusAB, mathExtensions
  Candidate overlap: no
- Raw index 899; collection `opensat::math`
  Source id: opensat::a9d72d33
  Prompt: If $x + y = 5$ and $x - y = 1$, what is the value of $x$?
  Answer evidence: correct=B
  Raw candidates: sat, elevenPlus, high_algebra_2, apCalculusAB
  Candidate overlap: no
- Raw index 999; collection `opensat::math`
  Source id: opensat::7c38d13a
  Prompt: A store sells apples for $1.50 each and oranges for $0.75 each. If a customer buys 3 apples and 5 oranges, how much will the customer spend in total?
  Answer evidence: correct=D
  Raw candidates: sat, elevenPlus, high_algebra_2, apCalculusAB, apStatistics, introDataScience, quant
  Candidate overlap: no
- Raw index 1099; collection `opensat::math`
  Source id: opensat::98d37f8d
  Prompt: If $2x + 3y = 12$ and $x - y = 1$, what is the value of $x$?
  Answer evidence: correct=B
  Raw candidates: sat, elevenPlus, high_algebra_2, apCalculusAB
  Candidate overlap: no
- Raw index 1199; collection `opensat::math`
  Source id: opensat::4bc98d5f
  Prompt: A circle has a radius of 5. What is the area of the circle? (Express your answer in terms of pi.)
  Answer evidence: correct=C
  Raw candidates: sat, elevenPlus, high_algebra_2, apCalculusAB
  Candidate overlap: no

### openintro_ims::inference

- Source: Introduction to Modern Statistics (`openintro_ims`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 142
- Target family: statistics-data-science
- Existing track ids: apStatistics, quant, medical
- Proposed tracks: statisticsLab (Statistics Lab)
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 186; collection `openintro-ims::inference-one-prop`
  Source id: openintro-ims::inference-one-prop::1
  Title: Do aliens exist?
  Prompt: 1. **Do aliens exist?** In May 2021, YouGov asked 4,839 adult Great Britain residents whether they think aliens exist, and if so, if they have or have not visited Earth. You want to evaluate if more than a quarter (25%) of Great Britain adults think aliens don't exist. In the survey 22% responded "I think they exist...
  Answer evidence: First, the hypotheses should be about the population proportion ($p$), not the sample proportion. Second, the null value should be what we are testing (0.25), not the observed value (0.29). The correct way to set up t...
  Raw candidates: apStatistics, introDataScience, quant, medical
  Candidate overlap: yes
- Raw index 221; collection `openintro-ims::inference-two-props`
  Source id: openintro-ims::inference-two-props::6
  Title: Renewable energy.
  Prompt: 6. **Renewable energy.** A 2021 Gallup poll surveyed 5,447 randomly sampled US adults who are Republican (or Republican leaning) and 7,962 who are Democrats (or Democrat leaning). 31% of Republicans and 81% of Democrats said "government regulations are necessary to encourage businesses and consumers to rely more on ...
  Answer evidence: \(a) In effect, we're checking whether men are paid more than women (or vice-versa), and we'd expect these outcomes with either chance under the null hypothesis: $H_0: p = 0.5$ and $H_A: p \neq 0.5.$ We'll use $p$ to ...
  Raw candidates: apStatistics, introDataScience, quant, medical
  Candidate overlap: yes
- Raw index 256; collection `openintro-ims::inference-one-mean`
  Source id: openintro-ims::inference-one-mean::3
  Title: Heights of adults.
  Prompt: 3. **Heights of adults.** Researchers studying anthropometry collected body measurements, as well as age, weight, height and gender, for 507 physically active adults. Summary statistics for the distribution of heights (measured in centimeters, cm), along with a histogram, are provided below.[^_19-ex-inference-one-me...
  Answer evidence: \(a\) The kindergartners will have a smaller standard deviation of heights. We would expect their heights to be more similar to each other compared to a group of adults' heights. (b) The standard error of the mean wil...
  Raw candidates: apStatistics, introDataScience, quant, medical
  Candidate overlap: yes
- Raw index 257; collection `openintro-ims::inference-one-mean`
  Source id: openintro-ims::inference-one-mean::4
  Title: Heights of adults, standard error.
  Prompt: 4. **Heights of adults, standard error.** Heights of 507 physically active adults have a mean of 171 cm and a standard deviation of 9.4 cm. Provide an estimate for the standard error of the mean for samples of following sizes.[^_19-ex-inference-one-mean-2] a. n = 10 b. n = 50 c. n = 100 d. n = 1000 e. The standard e...
  Answer evidence: \(a\) $df=6-1=5$, $t_{5}^{\star} = 2.02$. (b) $df=21-1=20$, $t_{20}^{\star} = 2.53$. (c) $df=28$, $t_{28}^{\star} = 2.05$. (d) $df=11$, $t_{11}^{\star} = 3.11$.
  Raw candidates: apStatistics, introDataScience, quant, medical
  Candidate overlap: yes
- Raw index 327; collection `openintro-ims::inference-many-means`
  Source id: openintro-ims::inference-many-means::14
  Title: Child care hours.
  Prompt: 14. **Child care hours.** The China Health and Nutrition Survey aims to examine the effects of the health, nutrition, and family planning policies and programs implemented by national and local governments. It, for example, collects information on number of hours Chinese parents spend taking care of their children u...
  Raw candidates: apStatistics, introDataScience, quant, medical
  Candidate overlap: yes

### openintro_ims::foundations-and-exploration

- Source: Introduction to Modern Statistics (`openintro_ims`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 128
- Target family: statistics-data-science
- Existing track ids: apStatistics, introDataScience
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 0; collection `openintro-ims::data-hello`
  Source id: openintro-ims::data-hello::1
  Title: Marvel Cinematic Universe films.
  Prompt: 1. **Marvel Cinematic Universe films.** The data frame below contains information on Marvel Cinematic Universe films through the Infinity saga (a movie storyline spanning from Ironman in 2008 to Endgame in 2019). Box office totals are given in millions of US Dollars. How many observations and how many variables does...
  Answer evidence: 23 observations and 7 variables.
  Raw candidates: apStatistics, introDataScience, logicCriticalThinking
  Candidate overlap: yes
- Raw index 32; collection `openintro-ims::data-design`
  Source id: openintro-ims::data-design::13
  Title: Evaluate sampling methods.
  Prompt: 13. **Evaluate sampling methods.** A university wants to determine what fraction of its undergraduate student body support a new \$25 annual fee to improve the student union. For each proposed method below, indicate whether the method is reasonable or not. a. Survey a simple random sample of 500 students. b. Stratif...
  Answer evidence: \(a\) Experiment. (b) Treatment: 25 grams of chia seeds twice a day, control: placebo. (c) Yes, gender. (d) Yes, single blind since the patients were blinded to the treatment they received. (e) Since this is an experi...
  Raw candidates: apStatistics, introDataScience, logicCriticalThinking
  Candidate overlap: yes
- Raw index 64; collection `openintro-ims::explore-numerical`
  Source id: openintro-ims::explore-numerical::5
  Title: Make-up exam.
  Prompt: 5. **Make-up exam.** In a class of 25 students, 24 of them took an exam in class and 1 student took a make-up exam the following day. The professor graded the first batch of 24 exams and found an average score of 74 points with a standard deviation of 8.9 points. The student who took the make-up the following day sc...
  Answer evidence: \(a\) Dist B has a higher mean since $20 > 13$, and a higher standard deviation since 20 is further from the rest of the data than 13. (b) Dist A has a higher mean since $-20 > -40$, and Dist B has a higher standard d...
  Raw candidates: apStatistics, introDataScience, logicCriticalThinking
  Candidate overlap: yes
- Raw index 154; collection `openintro-ims::foundations-bootstrapping`
  Source id: openintro-ims::foundations-bootstrapping::3
  Title: Social media users and news, bootstrapping.
  Prompt: 3. **Social media users and news, bootstrapping.** A poll conducted in 2022 found that 50% of U.S. adults get news from social media sometimes or often. However, the value was based on a sample, so it may not be a perfect estimate for the population parameter of interest on its own. The study was based on a sample o...
  Answer evidence: \(a\) A or perhaps D. (b) A, B, C, or D. (c) B or C. (d) B. (e) None.
  Raw candidates: apStatistics, introDataScience, quant, medical
  Candidate overlap: yes
- Raw index 185; collection `openintro-ims::foundations-errors`
  Source id: openintro-ims::foundations-errors::10
  Title: Hypothesis statements.
  Prompt: 10. **Hypothesis statements.** For each of the research claims below, fill in the value and the direction of the null and alternative hypotheses. That is, complete all aspects of the following hypothesis statements. Additionally, for each item, describe $p$ in words. $$H_0: p \_\_\_\_ \_\_\_\_ \quad \quad H_A: p \_\...
  Raw candidates: apStatistics, introDataScience, quant, medical
  Candidate overlap: yes

### openintro_ims::modeling

- Source: Introduction to Modern Statistics (`openintro_ims`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 98
- Target family: statistics-data-science
- Existing track ids: introDataScience, apStatistics, ml
- Proposed tracks: statisticsLab (Statistics Lab)
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 86; collection `openintro-ims::model-slr`
  Source id: openintro-ims::model-slr::1
  Title: Visualizing residuals.
  Prompt: 1. **Visualizing residuals.** The scatterplots shown below each have a superimposed regression line. If we were to construct a residual plot (residuals versus $x$) for each, describe in words what those plots would look like.
  Answer evidence: \(a\) The residual plot will show randomly distributed residuals around 0. The variance is also approximately constant. (b) The residuals will show a fan shape, with higher variability for smaller $x$. There will also...
  Raw candidates: apStatistics, introDataScience, ml, quantAdvanced
  Candidate overlap: yes
- Raw index 110; collection `openintro-ims::model-slr`
  Source id: openintro-ims::model-slr::25
  Title: Outliers, I.
  Prompt: 25. **Outliers, I.** Identify the outliers in the scatterplots shown below, and determine what type of outliers they are. Explain your reasoning.
  Raw candidates: apStatistics, introDataScience, ml, quantAdvanced
  Candidate overlap: yes
- Raw index 134; collection `openintro-ims::model-logistic`
  Source id: openintro-ims::model-logistic::1
  Title: True / False.
  Prompt: 1. **True / False.** Determine which of the following statements are true and false. For each statement that is false, explain why it is false. a. In logistic regression we fit a line to model the relationship between the predictor(s) and the binary outcome. b. In logistic regression, we expect the residuals to be e...
  Answer evidence: \(a\) False. The line is fit to predict the probability of success, not the binary outcome. (b) False. Residuals are not used in logistic regression like they are in linear regression because the observed value is alw...
  Raw candidates: apStatistics, introDataScience, ml, quantAdvanced
  Candidate overlap: yes
- Raw index 135; collection `openintro-ims::model-logistic`
  Source id: openintro-ims::model-logistic::2
  Title: Logistic regression fact checking.
  Prompt: 2. **Logistic regression fact checking.** Determine which of the following statements are true and false. For each statement that is false, explain why it is false. a. Suppose we consider the first two observations based on a logistic regression model, where the first variable in observation 1 takes a value of $x_1 ...
  Answer evidence: \(a\) There are a few potential outliers, e.g., on the left in the variable total length, but nothing that will be of serious concern in a dataset this large. (b) When coefficient estimates are sensitive to which vari...
  Raw candidates: apStatistics, introDataScience, ml, quantAdvanced
  Candidate overlap: yes
- Raw index 367; collection `openintro-ims::inf-model-logistic`
  Source id: openintro-ims::inf-model-logistic::8
  Title: Premature babies, cross-validation to choose model.
  Prompt: 8. **Premature babies, cross-validation to choose model.** US Department of Health and Human Services, Centers for Disease Control and Prevention collect information on births recorded in the country. The data used here are a random sample of 1000 births from 2014 (with some rows removed due to missing data). We use...
  Raw candidates: apStatistics, introDataScience, ml, quantAdvanced
  Candidate overlap: yes

### staar_2022::english-ii

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 78
- Target family: school-reading-support
- Existing track ids: col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 167; collection `staar-2022::english-ii`
  Source id: staar-2022::english-ii::1
  Title: English II
  Prompt: Inspiration for science projects can be found almost anywhere, even in the most common of tasks. Nathan Deng, 14, found his doing the dishes. The teen wondered why hot water worked better than cold water when washing, and what made soap a good cleaner. The simple experiments he devised to investigate these matters e...
  Answer evidence: 1 5 Readiness Standard 9.C D
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 186; collection `staar-2022::english-ii`
  Source id: staar-2022::english-ii::20
  Title: English II
  Prompt: BARRINGTON: It is an honor, young man.
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 205; collection `staar-2022::english-ii`
  Source id: staar-2022::english-ii::39
  Title: English II
  Prompt: What do lines 9 through 11 reveal about Wolfgang? A He desires his father’s approval. B He is frightened by his father’s attitude. C He is arrogant from his father’s praise. D He worries about his father’s abilities. 54363
  Answer evidence: 39 2 Readiness Standard 6.B A
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 206; collection `staar-2022::english-ii`
  Source id: staar-2022::english-ii::40
  Title: English II
  Prompt: Which quotation from the play best reveals Anna Maria’s reason for becoming angry with Leopold? F ANNA MARIA: But we have done very well in London, Leopold. Why is this one night keeping you in such a fuss? (line 5) G ANNA MARIA: Honestly, Leopold. I should think you would be more concerned over all the dreadful rum...
  Answer evidence: 40 2 Readiness Standard 5.C J
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 244; collection `staar-2022::english-ii`
  Source id: staar-2022::english-ii::78
  Title: English II
  Prompt: ANNA MARIA: He is your son! Reprinted with permission of Dramatic Publishing Co., 311 Washington St. Woodstock, IL 60098, Phone: 1-800-448-7469 Fax: 1-800-334-5302 6035 English II Form 001
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### staar_2022::grade-8-science

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 71
- Target family: school-science-support
- Existing track ids: middleSchoolEarthSpace
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 766; collection `staar-2022::grade-8-science`
  Source id: staar-2022::grade-8-science::0
  Title: Grade 8 Science
  Prompt: 1
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: yes
  Prompt quality flags: very-short-prompt, numeric-only-prompt
- Raw index 783; collection `staar-2022::grade-8-science`
  Source id: staar-2022::grade-8-science::17
  Title: Grade 8 Science
  Prompt: A student is building a model of a solar eclipse. Solar eclipses occur only during a new moon phase. Which motion best demonstrates a solar eclipse? A The moon moves between the sun and Earth, casting a shadow of the moon on Earth. B The sun moves between the moon and Earth, casting a shadow of the sun on Earth. C E...
  Answer evidence: 17 3 Readiness 8.7(B) 8.3(B) A
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: yes
- Raw index 800; collection `staar-2022::grade-8-science`
  Source id: staar-2022::grade-8-science::34
  Title: Grade 8 Science
  Prompt: Sea anemones and clown fish live together in the ocean. Which statement best describes one way sea anemones depend on clown fish for an abiotic factor in an ecosystem? F Clown fish protect sea anemones from predatory fish. G Clown fish decrease competition among sea anemones. H Clown fish consume the remains of orga...
  Answer evidence: 34 4 Readiness 8.11(A) 8.3(A) J
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: yes
- Raw index 801; collection `staar-2022::grade-8-science`
  Source id: staar-2022::grade-8-science::35
  Title: Grade 8 Science
  Prompt: The picture shows a bicyclist increasing speed while riding down a hill during a bicycle race. © Maxim Petrichuk/Dreamstime.com Which statements accurately describe the potential and kinetic energy of this bicyclist? A Kinetic energy increases. Potential energy decreases. C Kinetic energy remains constant. Potential...
  Answer evidence: 35 2 Supporting 6.8(A) A
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: yes
- Raw index 836; collection `staar-2022::grade-8-science`
  Source id: staar-2022::grade-8-science::87
  Title: Grade 8 Science
  Prompt: 88 1041 05 1061 07 1081 09
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: yes
  Prompt quality flags: numeric-table-fragment

### staar_2022::u-s-history

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 71
- Target family: school-stage-support
- Existing track ids: usHistory
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 881; collection `staar-2022::u-s-history`
  Source id: staar-2022::u-s-history::0
  Title: U.S. History
  Prompt: 10,000 20,000 30,000 40,000 Source: Congressional Research Service Which option contributed to the trend shown on this graph? A A military response to a terrorist attack B A desire to stop the spread of communism C The development of weapons of mass destruction D The resurgence of ethnic cleansing policies 6168 COMM...
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
- Raw index 898; collection `staar-2022::u-s-history`
  Source id: staar-2022::u-s-history::17
  Title: U.S. History
  Prompt: Read the list and answer the question that follows. • Passage of the Clayton Antitrust Act • Ratification of the Eighteenth Amendment • Passage of the Pure Food and Drug Act In which historical time period were these laws enacted? A The Great Society B The Progressive Era C The Great Depression D The Jazz Age 6537 C...
  Answer evidence: 17 1 Readiness H.2(A) H.28(B) B
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
- Raw index 915; collection `staar-2022::u-s-history`
  Source id: staar-2022::u-s-history::34
  Title: U.S. History
  Prompt: Which action by the federal government was one cause of the Great Depression? F Failing to decrease the reserve requirement G Refusing to regulate the stock market H Abolishing the use of the gold standard J Eliminating tariffs on foreign trade 7019 COMMON U.S. History Form 001
  Answer evidence: 34 4 Readiness H.16(B) H.28(B) G
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
- Raw index 916; collection `staar-2022::u-s-history`
  Source id: staar-2022::u-s-history::35
  Title: U.S. History
  Prompt: Source: Library of Congress, Prints and Photographs Division What was one effect of this type of advertising during World War II? A Women’s colleges closed as wartime employment opportunities grew. B The number of women in nontraditional roles increased. C Women’s organizations secured passage of the GI Bill for ret...
  Answer evidence: 35 4 Readiness H.17(A) H.28(A) B
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
- Raw index 951; collection `staar-2022::u-s-history`
  Source id: staar-2022::u-s-history::90
  Title: U.S. History
  Prompt: 80
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
  Prompt quality flags: very-short-prompt, numeric-only-prompt

### staar_2021::u-s-history

- Source: Texas STAAR 2021 released tests (`staar_2021`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 70
- Target family: school-stage-support
- Existing track ids: usHistory
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 429; collection `staar-2021::u-s-history`
  Source id: staar-2021::u-s-history::0
  Title: U.S. History
  Prompt: 1950 1960 1970 Population (millions) 1980 1990 KEY South Midwest Northeast West Decade Source: U.S. Census Bureau What were two reasons for the population patterns shown on this graph? F More passenger trains and better subway systems in the Sun Belt G More government regulation and fewer natural disasters in the Su...
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
- Raw index 446; collection `staar-2021::u-s-history`
  Source id: staar-2021::u-s-history::17
  Title: U.S. History
  Prompt: What effect did the sinking of the Lusitania have on World War I? A Germany joined the Central Powers. B U.S. public opinion shifted against Germany. C Germany refused to join the League of Nations. D U.S. leaders proposed a military alliance with Germany. U .S. History
  Answer evidence: 17 1 Readiness H.4(C) H.28(B) B
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
- Raw index 463; collection `staar-2021::u-s-history`
  Source id: staar-2021::u-s-history::34
  Title: U.S. History
  Prompt: Which diagram shows a cause-and-effect relationship related to the Spanish-American War? F United States acquires new territories in the Caribbean and Pacific Growth of U.S. commerce and influence G The opening of a transcontinental railroad Expansion of U.S. trade and shipping H The development of conservationist p...
  Answer evidence: 34 4 Readiness H.15(D) H.28(B) F
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
- Raw index 464; collection `staar-2021::u-s-history`
  Source id: staar-2021::u-s-history::35
  Title: U.S. History
  Prompt: Read the excerpt and answer the question that follows. In 1966, Congress authorized the federal government to set safety standards for new cars. By 1968, seat belts, padded dashboards, and other safety features were mandatory equipment. —“America on the Move” Exhibit, National Museum of American History, www.amhisto...
  Answer evidence: 35 4 Readiness H.27(A) H.28(A) C
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
- Raw index 498; collection `staar-2021::u-s-history`
  Source id: staar-2021::u-s-history::80
  Title: U.S. History
  Prompt: 60
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
  Prompt quality flags: very-short-prompt, numeric-only-prompt

### staar_2023_redesign::grade-8-science

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 66
- Target family: school-science-support
- Existing track ids: middleSchoolEarthSpace
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 963; collection `staar-2023-redesign::grade-8-science`
  Source id: staar-2023-redesign::grade-8-science::0
  Title: Grade 8 Science
  Prompt: STAAR GRADE 8 SCIENCE REFERENCE MATERIALS SLNAWS1S AHL AO AIEGVL OIGOTYAd SCIENCE SCIENCE Science Science
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: yes
  Prompt quality flags: reference-materials
- Raw index 979; collection `staar-2023-redesign::grade-8-science`
  Source id: staar-2023-redesign::grade-8-science::16
  Title: Grade 8 Science
  Prompt: Two students push on the opposite sides of a crate, with the force applied by each student in newtons (N), as shown in the diagram. Assuming the crate is on a frictionless surface, describe the effect of these forces on the crate. • Will the crate move toward the left, toward the right, or not at all? • What is the ...
  Answer evidence: 16 Short Constructed Response 8.2.8.6.A
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: yes
- Raw index 995; collection `staar-2023-redesign::grade-8-science`
  Source id: staar-2023-redesign::grade-8-science::32
  Title: Grade 8 Science
  Prompt: A student turns on a battery-operated fan. The batteries are located in the base of the fan. After five minutes, the student notices that the base of the fan is warm. Which statement BEST describes the conversion of energy taking place in the fan? A Chemical energy is being converted into mechanical energy and light...
  Answer evidence: 32 Multiple Choice 8.2.6.9.C
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: yes
- Raw index 996; collection `staar-2023-redesign::grade-8-science`
  Source id: staar-2023-redesign::grade-8-science::33
  Title: Grade 8 Science
  Prompt: A student wants to plan a family camping trip during a full moon. The student looks outside to see that the moon is currently in its first quarter phase. About how many days does the student need to wait in order to go camping on the night of a full moon? A 4 days B 8 days C 13 days D 20 days 82209 Science
  Answer evidence: 33 Multiple Choice 8.3.8.7.B
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: yes
- Raw index 1028; collection `staar-2023-redesign::grade-8-science`
  Source id: staar-2023-redesign::grade-8-science::87
  Title: Grade 8 Science
  Prompt: 88 1041 05 1061 07 1081 09
  Raw candidates: middleSchoolEarthSpace, scienceDiscovery
  Candidate overlap: yes
  Prompt quality flags: numeric-table-fragment

### staar_2024_rationales::u-s-history

- Source: Texas STAAR 2024 rationales (`staar_2024_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 66
- Target family: school-stage-support
- Existing track ids: usHistory
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 372; collection `staar-2024-rationale::u-s-history`
  Source id: staar-2024-rationale::u-s-history::0
  Title: U.S. History
  Prompt: points Does not provide a response, or the response is incorrect or irrelevant.
  Answer evidence: 0 Source : Federa l Election Commission Based on the table a nd your knowled ge of U.S. histo ry, identify how Ralph Nader's third -party cand idacy affected t he outco me of this election . Move the correct answer to...
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
  Prompt quality flags: rubric-row
- Raw index 388; collection `staar-2024-rationale::u-s-history`
  Source id: staar-2024-rationale::u-s-history::16
  Title: U.S. History
  Prompt: Option A is correct The power of impeachment was put in place to provide a check on the other branches. Option B is incorrect The power to appoint a president was not given to the legislature; it is controlled through the Electoral College. Option C is incorrect One power of the judiciary and the Supreme Court is to...
  Answer evidence: 16 Multiple Choice H.1.A
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
  Prompt quality flags: rationale-only
- Raw index 404; collection `staar-2024-rationale::u-s-history`
  Source id: staar-2024-rationale::u-s-history::32
  Title: U.S. History
  Prompt: Option C is correct During the Vietnam War, there was an increase of media coverage from the battlefield. The coverage of the Tet Offensive led to weakened support for U.S. participation in Vietnam, as the public saw the horrors of war through their televisions. The public saw for themselves that the enemy had plent...
  Answer evidence: 32 Multiple Choice H.8.F
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
  Prompt quality flags: rationale-only
- Raw index 405; collection `staar-2024-rationale::u-s-history`
  Source id: staar-2024-rationale::u-s-history::33
  Title: U.S. History
  Prompt: Option B is correct President Truman used an executive order to desegregate the military, despite facing opposition. For this item, the student applies critical-thinking skills to identify a cause-and-effect relationship. Option A is incorrect The president does not have the power to issue an order to the Supreme Co...
  Answer evidence: 33 Multiple Choice H.9.G
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
  Prompt quality flags: rationale-only
- Raw index 437; collection `staar-2024-rationale::u-s-history`
  Source id: staar-2024-rationale::u-s-history::84
  Title: U.S. History
  Prompt: million Americans on the home front. For this item, the student applies critical-thinking skills to analyze a primary source to acquire information to answer a historical question. Image 1, “United We Are Strong, United We Will Win,” is incorrect This image shows artillery gun barrels decorated with the flags of the...
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes

### staar_2025_rationales::u-s-history

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 65
- Target family: school-stage-support
- Existing track ids: usHistory
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 1189; collection `staar-2025-rationale::u-s-history`
  Source id: staar-2025-rationale::u-s-history::1
  Title: U.S. History
  Prompt: million wage-and-salary jobs between 1998 and 2008.” is incorrect This excerpt describes an economic change to society that was not a result of the Civil Rights Movement. Option “The top tax rate has been cut six times since 1980.” is incorrect This excerpt describes economic changes to society that were not results...
  Answer evidence: 1 in 1965 to 70.
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
  Prompt quality flags: fragment-start
- Raw index 1205; collection `staar-2025-rationale::u-s-history`
  Source id: staar-2025-rationale::u-s-history::17
  Title: U.S. History
  Prompt: Option D is correct Saddam Hussein believed that Kuwait was stealing oil from Iraqi fields and used that claim to justify invading the country in August 1990. Option A is incorrect No members of the Iraqi government were killed in Kuwait. Option B is incorrect The invasion of Kuwait by Iraqi forces led to U.S. invol...
  Answer evidence: 17
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
  Prompt quality flags: rationale-only
- Raw index 1221; collection `staar-2025-rationale::u-s-history`
  Source id: staar-2025-rationale::u-s-history::33
  Title: U.S. History
  Prompt: Option “In Dallas County the percentage of African Americans signed up to vote zoomed from 2.
  Answer evidence: 33 Hot Text 9.I
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
- Raw index 1237; collection `staar-2025-rationale::u-s-history`
  Source id: staar-2025-rationale::u-s-history::49
  Title: U.S. History
  Prompt: Option C is correct The amendments shown all deal in some way with expanding participation in the democratic process, namely by extending voting rights to new groups and expanding the role of voters in the United States. Option A is incorrect The amendments shown are not established procedures but rather the results...
  Answer evidence: 49 Multiple Choice 22.A
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
  Prompt quality flags: rationale-only
- Raw index 1253; collection `staar-2025-rationale::u-s-history`
  Source id: staar-2025-rationale::u-s-history::69
  Title: U.S. History
  Prompt: percent of the electoral votes. Perot thus did not cause Bush to win. Option D is incorrect People did not argue that Ross Perot’s campaign violated constitutional requirements.
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
  Prompt quality flags: rationale-only, fragment-start

### staar_2023::grade-5-rla

- Source: Texas STAAR 2023 paper samplers (`staar_2023`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 64
- Target family: school-reading-support
- Existing track ids: readingVocab5th
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 176; collection `staar-2023::grade-5-rla`
  Source id: staar-2023::grade-5-rla::1
  Title: Grade 5 RLA
  Prompt: [The Three Bears’ house. Mama Bear puts on her apron and reaches for a pot on the stove. She begins to scoop porridge into bowls placed on the kitchen table.]
  Answer evidence: funnier
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 192; collection `staar-2023::grade-5-rla`
  Source id: staar-2023::grade-5-rla::17
  Title: Grade 5 RLA
  Prompt: C MAMA BEAR: He will always be my Baby Bear.
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 208; collection `staar-2023::grade-5-rla`
  Source id: staar-2023::grade-5-rla::33
  Title: Grade 5 RLA
  Prompt: MAMA BEAR: Hello, Goldie. You remember Baby Bear.
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 224; collection `staar-2023::grade-5-rla`
  Source id: staar-2023::grade-5-rla::49
  Title: Grade 5 RLA
  Prompt: BABY BEAR: You mean the one kids call Little Red?
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 239; collection `staar-2023::grade-5-rla`
  Source id: staar-2023::grade-5-rla::64
  Title: Grade 5 RLA
  Prompt: GOLDIE: Thanks, Baby B—I mean, Robert. THE END 448 Grade 5 Reading
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### staar_2022::algebra-i

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 63
- Target family: school-math-support
- Existing track ids: col-algebra-1
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 0; collection `staar-2022::algebra-i`
  Source id: staar-2022::algebra-i::0
  Title: Algebra I
  Prompt: 460
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
  Prompt quality flags: very-short-prompt, numeric-only-prompt
- Raw index 15; collection `staar-2022::algebra-i`
  Source id: staar-2022::algebra-i::15
  Title: Algebra I
  Prompt: 960
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
  Prompt quality flags: very-short-prompt, numeric-only-prompt
- Raw index 30; collection `staar-2022::algebra-i`
  Source id: staar-2022::algebra-i::30
  Title: Algebra I
  Prompt: Given f(x) = x
  Answer evidence: 30 4 Supporting Standard A.7(B) H
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
  Prompt quality flags: very-short-prompt
- Raw index 31; collection `staar-2022::algebra-i`
  Source id: staar-2022::algebra-i::31
  Title: Algebra I
  Prompt: A function is shown. f(x) = 7 − 4x What is the value of f(−5)? A 27 B −13 C −15 D 140 11095 Algebra I Form 01
  Answer evidence: 31 1 Supporting Standard A.12(B) A
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
- Raw index 62; collection `staar-2022::algebra-i`
  Source id: staar-2022::algebra-i::96
  Title: Algebra I
  Prompt: 84
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
  Prompt quality flags: very-short-prompt, numeric-only-prompt

### staar_2025_rationales::algebra-i

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 62
- Target family: school-math-support
- Existing track ids: col-algebra-1
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 0; collection `staar-2025-rationale::algebra-i`
  Source id: staar-2025-rationale::algebra-i::0
  Title: Algebra I
  Prompt: 6−
  Answer evidence: 0 .SS)r, where t represen ts t he nu mber of yea rs since 2010 . Choose the correct answer from each drop-dow n m enu to comp lete t he sentences. The init ial popu lation of t he town in 2010 was [ 26,080 ~l- ~------...
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
  Prompt quality flags: very-short-prompt
- Raw index 15; collection `staar-2025-rationale::algebra-i`
  Source id: staar-2025-rationale::algebra-i::15
  Title: Algebra I
  Prompt: – 4, or 7v = 11. Last, the student likely divided both sides of the equation by 7, resulting in 7𝑣𝑣
  Answer evidence: 15 -
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
- Raw index 30; collection `staar-2025-rationale::algebra-i`
  Source id: staar-2025-rationale::algebra-i::30
  Title: Algebra I
  Prompt: Dashed line going through (0, –3) and (1, 2); shading the area that includes the point (0, 0) To determine the solution set for the linear inequality y > 5x – 3, the student could have first recognized that the graph of the boundary line is dashed since the inequality is non-inclusive. Next, the student could have r...
  Answer evidence: 30 Graphing A1.2.3.D
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
- Raw index 31; collection `staar-2025-rationale::algebra-i`
  Source id: staar-2025-rationale::algebra-i::31
  Title: Algebra I
  Prompt: Option D is correct To determine which equation is equivalent to 5x – 8y =
  Answer evidence: 31 Multiple Choice A1.1.12.E
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 61; collection `staar-2025-rationale::algebra-i`
  Source id: staar-2025-rationale::algebra-i::95
  Title: Algebra I
  Prompt: ≤ c ≤ 199.80. The student needs to focus on understanding how to identify the domain and range of a linear function with discrete values. Option C is incorrect The student likely identified the values of the domain instead of the range, resulting in {1, 2, 3, 4}. The student needs to focus on understanding how to id...
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
  Prompt quality flags: rationale-only

### staar_2018::u-s-history

- Source: Texas STAAR 2018 released tests (`staar_2018`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 62
- Target family: school-stage-support
- Existing track ids: usHistory
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 410; collection `staar-2018::u-s-history`
  Source id: staar-2018::u-s-history::0
  Title: U.S. History
  Prompt: 1
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
  Prompt quality flags: very-short-prompt, numeric-only-prompt
- Raw index 425; collection `staar-2018::u-s-history`
  Source id: staar-2018::u-s-history::15
  Title: U.S. History
  Prompt: 16 Magneto Assembly Line at Ford Motor Company, 1913 From the collections of The Henry Ford, copy and reuse restrictions apply, http://www.TheHenryFord.org/copyright.aspx How did the process shown in this photograph enhance the automobile industry? A By speeding up production of automobiles at lower costs B By requi...
  Answer evidence: 15 4 Readiness H.27(C) H.29(H) A
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
  Prompt quality flags: frontmatter-or-copyright
- Raw index 440; collection `staar-2018::u-s-history`
  Source id: staar-2018::u-s-history::31
  Title: U.S. History
  Prompt: 32 ? : A term that originated during President Lyndon Johnson’s administration to describe the perception of a discrepancy between public statements and actual policies. Which term completes this text box? A Hawk mentality B Credibility gap C Living-room war D Flexible response Percent of Voting-Age Population Casti...
  Answer evidence: 31 1 Readiness H.8(F) H.29(B) B
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
- Raw index 441; collection `staar-2018::u-s-history`
  Source id: staar-2018::u-s-history::34
  Title: U.S. History
  Prompt: 33 What was one economic effect of the Spanish–American War? A Shipbuilding industries in the United States declined. B New free and fair trade treaties were established between the United States and developing countries. C The United States gained direct access to additional natural resources and overseas markets. ...
  Answer evidence: 34 3 Supporting H.24(B) H.29(H) H
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
- Raw index 471; collection `staar-2018::u-s-history`
  Source id: staar-2018::u-s-history::68
  Title: U.S. History
  Prompt: Which action is the best example of a civic responsibility? F Writing an editorial piece for a newspaper G Volunteering to sell raffle tickets H Voting on election day J Opening a business BE SURE YOU HAVE RECORDED ALL OF YOUR ANSWERS U.S. History ON THE ANSWER DOCUMENT. STOP STAAR U.S. History May 2018 806424
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes

### staar_2025_rationales::grade-8-math

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 60
- Target family: school-math-support
- Existing track ids: col-class-8-math
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 1004; collection `staar-2025-rationale::grade-8-math`
  Source id: staar-2025-rationale::grade-8-math::0
  Title: Grade 8 Math
  Prompt: ), as the center of dilation produces a figure that is the same shape but is enlarged in size. The student should have concluded that a dilation with a scale factor of
  Answer evidence: 0 1.11
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
- Raw index 1019; collection `staar-2025-rationale::grade-8-math`
  Source id: staar-2025-rationale::grade-8-math::15
  Title: Grade 8 Math
  Prompt: ÷ 2, or r = 7.5. Next, the student should have substituted r = 7.
  Answer evidence: 15 Multiple Choice 8.3.7.D
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
- Raw index 1034; collection `staar-2025-rationale::grade-8-math`
  Source id: staar-2025-rationale::grade-8-math::30
  Title: Grade 8 Math
  Prompt: Rationales $14.25, $25.
  Answer evidence: 30 Drag and Drop 8.2.4.C
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: very-short-prompt
- Raw index 1049; collection `staar-2025-rationale::grade-8-math`
  Source id: staar-2025-rationale::grade-8-math::52
  Title: Grade 8 Math
  Prompt: To complete the equation that represents V, the volume of the swimming pool in cubic feet, the student should have used the formula for the volume of a cylinder (V = Bh, where B represents the area of the base and h represents the height). To determine the area of the base, B, the student should have recognized that...
  Answer evidence: 52 See Appendix 1.
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
- Raw index 1063; collection `staar-2025-rationale::grade-8-math`
  Source id: staar-2025-rationale::grade-8-math::92
  Title: Grade 8 Math
  Prompt: –
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: very-short-prompt

### staar_2022::grade-7-rla

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 60
- Target family: school-reading-support
- Existing track ids: col-7th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 614; collection `staar-2022::grade-7-rla`
  Source id: staar-2022::grade-7-rla::1
  Title: Grade 7 RLA
  Prompt: Most people know that exercise is important. When people think of exercise, they probably envision someone muscular lifting hundreds of pounds on a barbell or swift and strong sprinters speeding along a racetrack. It is daunting to think about exerting this kind of energy. However, you don’t have to be like the prof...
  Answer evidence: 1 3 Supporting Standard 9.C C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 629; collection `staar-2022::grade-7-rla`
  Source id: staar-2022::grade-7-rla::16
  Title: Grade 7 RLA
  Prompt: Use Last Dance to answer the following question. What does the word reminisce mean in paragraph 11 of the story “Last Dance”? F To remember past events G To have doubts H To judge someone’s actions J To resolve an issue 49226_4
  Answer evidence: 16 1 Readiness Standard 2.B F
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 644; collection `staar-2022::grade-7-rla`
  Source id: staar-2022::grade-7-rla::31
  Title: Grade 7 RLA
  Prompt: Which sentence suggests that Brittany’s performance suffers because of Alix’s absence? A “I’m sorry, Brittany, I know you’re great at gymnastics, but I was just trying to offer some advice.” (paragraph 4) B Five days had passed since Brittany had confronted Alix—and just two days were left until the competition. (pa...
  Answer evidence: 31 2 Readiness Standard 6.C C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 659; collection `staar-2022::grade-7-rla`
  Source id: staar-2022::grade-7-rla::46
  Title: Grade 7 RLA
  Prompt: WASHINGTON: Who goes there? (Sam goes center, surprised at the sight of Washington.) Your face is familiar.
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 673; collection `staar-2022::grade-7-rla`
  Source id: staar-2022::grade-7-rla::60
  Title: Grade 7 RLA
  Prompt: WASHINGTON: (Thoughtfully.) So that is why young Betsy attempted to break through the lines tonight. I see now why she was reluctant to discuss her mission. “Martha Washington’s Spy” by Earl J. Dias is reprinted with the permission of Plays, the Drama Magazine for a Young People/Sterling Partners, Inc. Copyright © 1...
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: frontmatter-or-copyright

### nysed_science_2025::grade-8

- Source: NYSED 2025 Grade 5 and Grade 8 Science Released Questions (`nysed_science_2025`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 59
- Target family: school-science-support
- Existing track ids: middleSchoolEarthSpace
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 35; collection `nysed-science-2025::grade-8`
  Source id: nysed-science-2025::grade-8::0
  Title: NYSED 2025 Grade 8 Science
  Prompt: 10
  Raw candidates: middleSchoolEarthSpace, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: very-short-prompt, numeric-only-prompt
- Raw index 49; collection `nysed-science-2025::grade-8`
  Source id: nysed-science-2025::grade-8::14
  Title: NYSED 2025 Grade 8 Science
  Prompt: Multiple Choice C 1 MS-ESS1-3 ESS 0.31
  Answer evidence: Multiple Choice; correct=C; points=1; standard=MS-ESS1-3
  Raw candidates: middleSchoolEarthSpace, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 63; collection `nysed-science-2025::grade-8`
  Source id: nysed-science-2025::grade-8::28
  Title: NYSED 2025 Grade 8 Science
  Prompt: Constructed Response 1 MS-ESS2-3 ESS 0.07
  Raw candidates: middleSchoolEarthSpace, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: answer-key-row
- Raw index 64; collection `nysed-science-2025::grade-8`
  Source id: nysed-science-2025::grade-8::29
  Title: NYSED 2025 Grade 8 Science
  Prompt: Multiple Choice A 1 MS-ESS2-3 ESS 0.47
  Answer evidence: Multiple Choice; correct=A; points=1; standard=MS-ESS2-3
  Raw candidates: middleSchoolEarthSpace, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 93; collection `nysed-science-2025::grade-8`
  Source id: nysed-science-2025::grade-8::92
  Title: NYSED 2025 Grade 8 Science
  Prompt: Model of Guppy Cells During Reproduction
  Raw candidates: middleSchoolEarthSpace, ck12, khanacademy
  Candidate overlap: yes

### staar_2018::algebra-i

- Source: Texas STAAR 2018 released tests (`staar_2018`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 58
- Target family: school-math-support
- Existing track ids: col-algebra-1
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 0; collection `staar-2018::algebra-i`
  Source id: staar-2018::algebra-i::0
  Title: Algebra I
  Prompt: ≤ x≤ 8 B 80 ≤ y≤ 440 C 0 ≤ x≤ 10 D 45 ≤ y≤ 685
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
- Raw index 14; collection `staar-2018::algebra-i`
  Source id: staar-2018::algebra-i::14
  Title: Algebra I
  Prompt: 12
  Answer evidence: 14 4 Readiness A.7(C) –6 15 3 Readiness A.5(C) A
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
  Prompt quality flags: very-short-prompt, numeric-only-prompt
- Raw index 28; collection `staar-2018::algebra-i`
  Source id: staar-2018::algebra-i::29
  Title: Algebra I
  Prompt: Which graph best represents a quadratic function that has only one zero? A C B D Algebra I
  Answer evidence: 29 4 Readiness A.7(A) B
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
- Raw index 29; collection `staar-2018::algebra-i`
  Source id: staar-2018::algebra-i::30
  Title: Algebra I
  Prompt: What is the solution set for − −4x + 10 ≥ 5x + 55? F x ≥ 5 G x ≥ 45 H x ≤ − −5 J x ≤ − −45 221x + 13x − − 2031 Which expression is a factor of ? A 3x −− 4 B 7x −− 5 C 7x + 4 D 3x + 5 Algebra I 1− − 6 y
  Answer evidence: 30 3 Supporting A.5(B) H
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
- Raw index 57; collection `staar-2018::algebra-i`
  Source id: staar-2018::algebra-i::96
  Title: Algebra I
  Prompt: ? y
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
  Prompt quality flags: very-short-prompt

### staar_2024_rationales::algebra-i

- Source: Texas STAAR 2024 rationales (`staar_2024_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 58
- Target family: school-math-support
- Existing track ids: col-algebra-1
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 0; collection `staar-2024-rationale::algebra-i`
  Source id: staar-2024-rationale::algebra-i::0
  Title: Algebra I
  Prompt: ≤ y ≤ 100, instead of identifying the domain. The student needs to focus on understanding how to represent the domain of a linear function when given a part of the graph.
  Answer evidence: 0 I a Choos e t wo factor s to crea te an exp ress ion equiva lent to 4x
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
- Raw index 14; collection `staar-2024-rationale::algebra-i`
  Source id: staar-2024-rationale::algebra-i::14
  Title: Algebra I
  Prompt: or 4k3m1/2. Then the student likely interpreted m1/
  Answer evidence: 14
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
- Raw index 28; collection `staar-2024-rationale::algebra-i`
  Source id: staar-2024-rationale::algebra-i::28
  Title: Algebra I
  Prompt: Option B is correct To determine the equation in point-slope form [y – y
  Answer evidence: 28 Multiple Choice A1.3.2.E
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 29; collection `staar-2024-rationale::algebra-i`
  Source id: staar-2024-rationale::algebra-i::29
  Title: Algebra I
  Prompt: Option B is correct To determine the coordinates of the vertex of the graph of g, the student could have identified f(x) = x
  Answer evidence: 29 Multiple Choice A1.4.7.C
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 57; collection `staar-2024-rationale::algebra-i`
  Source id: staar-2024-rationale::algebra-i::90
  Title: Algebra I
  Prompt: = $3.70, since the second customer purchased
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no

### nysed_science_2024::grade-8

- Source: NYSED 2024 Grade 5 and Grade 8 Science Released Questions (`nysed_science_2024`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 58
- Target family: school-science-support
- Existing track ids: middleSchoolEarthSpace
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 40; collection `nysed-science-2024::grade-8`
  Source id: nysed-science-2024::grade-8::0
  Title: NYSED 2024 Grade 8 Science
  Prompt: Year Historical Supply and Use Projected Future Supply and Demand Predicted Usage Predicted Water Supply (10-year Running Average)Water Use (10-year Running Average) Water Supply (10-year Running Average) Volume (Million Acre-feet)
  Raw candidates: middleSchoolEarthSpace, ck12, khanacademy
  Candidate overlap: yes
- Raw index 54; collection `nysed-science-2024::grade-8`
  Source id: nysed-science-2024::grade-8::14
  Title: NYSED 2024 Grade 8 Science
  Prompt: Multiple Choice A 1 MS-PS3-1 PS 0.80
  Answer evidence: Multiple Choice; correct=A; points=1; standard=MS-PS3-1
  Raw candidates: middleSchoolEarthSpace, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 68; collection `nysed-science-2024::grade-8`
  Source id: nysed-science-2024::grade-8::28
  Title: NYSED 2024 Grade 8 Science
  Prompt: Multiple Choice B 1 MS-PS2-4 PS 0.37
  Answer evidence: Multiple Choice; correct=B; points=1; standard=MS-PS2-4
  Raw candidates: middleSchoolEarthSpace, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 69; collection `nysed-science-2024::grade-8`
  Source id: nysed-science-2024::grade-8::29
  Title: NYSED 2024 Grade 8 Science
  Prompt: Multiple Choice C 1 MS-PS2-4 PS 0.42
  Answer evidence: Multiple Choice; correct=C; points=1; standard=MS-PS2-4
  Raw candidates: middleSchoolEarthSpace, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 97; collection `nysed-science-2024::grade-8`
  Source id: nysed-science-2024::grade-8::80
  Title: NYSED 2024 Grade 8 Science
  Prompt: kg
  Raw candidates: middleSchoolEarthSpace, ck12, khanacademy
  Candidate overlap: yes
  Prompt quality flags: very-short-prompt

### staar_2021::english-i

- Source: Texas STAAR 2021 released tests (`staar_2021`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 56
- Target family: school-reading-support
- Existing track ids: col-9th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 104; collection `staar-2021::english-i`
  Source id: staar-2021::english-i::1
  Title: English I
  Prompt: Dr . Horatio Nelson Jackson agreed to a wager that made road-trip history on May 19, 1903. He proposed to drive across the continent within three months. He wanted to disprove the belief that over long distances “the automobile was an unreliable novelty.” Although he had learned to drive only a few weeks earlier , J...
  Answer evidence: 1 5 Readiness D.9(C) B
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 118; collection `staar-2021::english-i`
  Source id: staar-2021::english-i::15
  Title: English I
  Prompt: Let that key message be your North Star. If you can’t state your idea in a single sentence, don’t give up. Keep at it. For many speakers, this is the hardest part of their speech—and the most critical one.
  Answer evidence: 15 6 Readiness D.9(D) A
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 132; collection `staar-2021::english-i`
  Source id: staar-2021::english-i::29
  Title: English I
  Prompt: Which theme is present in the poem “Sybil Ludington’s Ride”? A Personal sacrifice is more important than family. B Trust will always lead to new realizations. C Confronting danger requires courage and fortitude. D Accepting one’s fate requires skill and stamina.
  Answer evidence: 29 2 Supporting D.4(F) C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 146; collection `staar-2021::english-i`
  Source id: staar-2021::english-i::43
  Title: English I
  Prompt: What can the reader conclude from paragraph 14? A The author’s advice has been followed by great speakers in the past. B A background in sales is helpful when writing an effective speech. C The author’s suggestions for writing strong speeches apply in many situations. D Most world leaders rely on professional writer...
  Answer evidence: 43 3 Supporting D.4(F) C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 159; collection `staar-2021::english-i`
  Source id: staar-2021::english-i::65
  Title: English I
  Prompt: Such is the legend of Sybil’s ride T o summon the men from the countryside A true tale, making her title clear As a lovely feminine Paul Revere! Used with permission. 1A tattoo is a fast and rhythmic tap or knock. English I Use The Boston Girl (pp. 26–27) to answer questions 19–24. Then fill in the answers on your a...
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### ims_tutorials::modeling-and-inference

- Source: IMS Tutorials (`ims_tutorials`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 56
- Target family: statistics-data-science
- Existing track ids: apStatistics, introDataScience
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 24; collection `ims-tutorials::03-model`
  Source id: ims-tutorials::03-model::01-lesson::1
  Title: 03-model/01-lesson/03-01-lesson.Rmd
  Prompt: Describe the form, direction, and strength of this relationship
  Raw candidates: apStatistics, introDataScience, ml, quantAdvanced
  Candidate overlap: yes
- Raw index 38; collection `ims-tutorials::03-model`
  Source id: ims-tutorials::03-model::06-lesson::2
  Title: 03-model/06-lesson/03-06-lesson.Rmd
  Prompt: Choose the correct interpretation of the coefficient on condused:
  Raw candidates: apStatistics, introDataScience, ml, quantAdvanced
  Candidate overlap: yes
- Raw index 64; collection `ims-tutorials::05-infer`
  Source id: ims-tutorials::05-infer::01-lesson::3
  Title: 05-infer/01-lesson/05-01-lesson.Rmd
  Prompt: Which of the following statements is correct?
  Raw candidates: apStatistics, introDataScience, quant, medical
  Candidate overlap: yes
- Raw index 78; collection `ims-tutorials::05-infer`
  Source id: ims-tutorials::05-infer::06-lesson::3
  Title: 05-infer/06-lesson/05-06-lesson.Rmd
  Prompt: Which of the following is the correct definition of the p-value of this hypothesis test?
  Raw candidates: apStatistics, introDataScience, quant, medical
  Candidate overlap: yes
- Raw index 91; collection `ims-tutorials::06-model-infer`
  Source id: ims-tutorials::06-model-infer::05-lesson::2
  Title: 06-model-infer/05-lesson/06-05-lesson.Rmd
  Prompt: What is the correct interpretation of the coefficient on Service in the linear model which regresses Price on Service, Food, and Decor? ?
  Raw candidates: apStatistics, introDataScience, ml, quantAdvanced, quant, medical
  Candidate overlap: yes

### staar_2025_rationales::grade-7-math

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 55
- Target family: school-math-support
- Existing track ids: col-class-7-math
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 901; collection `staar-2025-rationale::grade-7-math`
  Source id: staar-2025-rationale::grade-7-math::0
  Title: Grade 7 Math
  Prompt: is
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: very-short-prompt
- Raw index 914; collection `staar-2025-rationale::grade-7-math`
  Source id: staar-2025-rationale::grade-7-math::13
  Title: Grade 7 Math
  Prompt: 40. The student needs to focus on understanding how to determine the probability of a compound event. Option D is incorrect The student likely added the probabilities of the two events, rather than multiplying, resulting in
  Answer evidence: 13 Multiple Choice 7.1.6.I
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 927; collection `staar-2025-rationale::grade-7-math`
  Source id: staar-2025-rationale::grade-7-math::26
  Title: Grade 7 Math
  Prompt: Option C is correct To determine the volume (amount of three-dimensional space) of the rectangular pyramid in cubic centimeters, the student should have used the formula for the volume of a pyramid: 𝑉𝑉=
  Answer evidence: 26 Multiple Choice 7.3.9.A
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 928; collection `staar-2025-rationale::grade-7-math`
  Source id: staar-2025-rationale::grade-7-math::27
  Title: Grade 7 Math
  Prompt: more than, exactly To complete the statement about Roberto’s budget, the student should have calculated the amounts Roberto spends on rent and insurance each month and compared the amounts to $1,000 and $500, respectively. To calculate the amount Roberto spends on rent each month, the student could have multiplied t...
  Answer evidence: 27 Drag and Drop 7.4.13.B
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
- Raw index 955; collection `staar-2025-rationale::grade-7-math`
  Source id: staar-2025-rationale::grade-7-math::92
  Title: Grade 7 Math
  Prompt: inches away from Austin on the map. This is an efficient way to solve the problem; however, other methods could be used to solve the problem correctly.
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no

### staar_2022::grade-6-rla

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 55
- Target family: school-reading-support
- Existing track ids: readingVocab6th
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 515; collection `staar-2022::grade-6-rla`
  Source id: staar-2022::grade-6-rla::1
  Title: Grade 6 RLA
  Prompt: In Brazil the beetles have such beautifully colored, hard-shelled coats upon their backs that they are often set in pins and necklaces like precious stones. Once upon a time, years and years ago, they had ordinary plain brown coats. This is how it happened that the Brazilian beetle earned a new coat.
  Answer evidence: 1 3 Readiness Standard 5.F C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 528; collection `staar-2022::grade-6-rla`
  Source id: staar-2022::grade-6-rla::14
  Title: Grade 6 RLA
  Prompt: “I did not know that you could fly,” said the big grey rat in a subdued little voice.
  Answer evidence: 14 2 Supporting Standard 5.C G
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 541; collection `staar-2022::grade-6-rla`
  Source id: staar-2022::grade-6-rla::27
  Title: Grade 6 RLA
  Prompt: Use “Dive into a Sunken Museum” and “A Modern-Day Treasure Hunt” to answer the following question. What is a major way Jason Taylor’s sculptures in the selection “Dive into a Sunken Museum” DIFFER from Forrest Fenn’s treasure in the selection “A Modern-Day Treasure Hunt”? A Taylor wants his sculptures to be protecte...
  Answer evidence: 27 1 Readiness Standard 5.E B
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 542; collection `staar-2022::grade-6-rla`
  Source id: staar-2022::grade-6-rla::28
  Title: Grade 6 RLA
  Prompt: Use “Dive into a Sunken Museum” and “A Modern-Day Treasure Hunt” to answer the following question. In what way is the focus of the selections “Dive into a Sunken Museum” and “A Modern-Day Treasure Hunt” SIMILAR? F Both selections show how an individual has used a talent to protect nature. G Both selections illustrat...
  Answer evidence: 28 1 Readiness Standard 5.E J
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 569; collection `staar-2022::grade-6-rla`
  Source id: staar-2022::grade-6-rla::60
  Title: Grade 6 RLA
  Prompt: years, thousands of people have helped scientists study these incredible insects.
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### staar_2019::algebra-i

- Source: Texas STAAR 2019 released tests (`staar_2019`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 55
- Target family: school-math-support
- Existing track ids: col-algebra-1
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 0; collection `staar-2019::algebra-i`
  Source id: staar-2019::algebra-i::0
  Title: Algebra I
  Prompt: 18
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
  Prompt quality flags: very-short-prompt, numeric-only-prompt
- Raw index 13; collection `staar-2019::algebra-i`
  Source id: staar-2019::algebra-i::14
  Title: Algebra I
  Prompt: 13
  Answer evidence: 14 4 Readiness A.8(A) 4.5 15 3 Supporting A.2(H) B
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
  Prompt quality flags: very-short-prompt, numeric-only-prompt
- Raw index 26; collection `staar-2019::algebra-i`
  Source id: staar-2019::algebra-i::27
  Title: Algebra I
  Prompt: What is the value of the y-intercept of the graph of hx( ) = 29(5.2)x? Record your answer and fill in the bubbles on your answer document. Algebra I y
  Answer evidence: 27 5 Readiness A.9(D) 29 28 4 Supporting A.6(C) H
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
- Raw index 27; collection `staar-2019::algebra-i`
  Source id: staar-2019::algebra-i::28
  Title: Algebra I
  Prompt: The graph of a quadratic function is shown on the grid. Which function is best represented by this graph? F G hx() = x 2 + 3x −− 9 H hx() = x 2 −− 6x J hx() = x 2 + 6x
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
- Raw index 54; collection `staar-2019::algebra-i`
  Source id: staar-2019::algebra-i::90
  Title: Algebra I
  Prompt: 80
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
  Prompt quality flags: very-short-prompt, numeric-only-prompt

### staar_2024_rationales::english-ii

- Source: Texas STAAR 2024 rationales (`staar_2024_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 55
- Target family: school-reading-support
- Existing track ids: col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 149; collection `staar-2024-rationale::english-ii`
  Source id: staar-2024-rationale::english-ii::1
  Title: English II
  Prompt: of the excerpt and in line
  Answer evidence: 1 Read lines
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 162; collection `staar-2024-rationale::english-ii`
  Source id: staar-2024-rationale::english-ii::14
  Title: English II
  Prompt: or make clear what Amir concludes about his phone. Option D is incorrect The information that the writer gives about the navigation app on Amir’s phone is irrelevant and does not support sentence 14.
  Answer evidence: 14 Multiple Choice 2.B
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only, fragment-start
- Raw index 175; collection `staar-2024-rationale::english-ii`
  Source id: staar-2024-rationale::english-ii::27
  Title: English II
  Prompt: Option C is correct As Christian states, “There aren’t a lot of hard rules governing tourism.” This indicates the current lack of laws and regulations. Countries that are part of the treaty that presides over Antarctica are still looking for ways to balance tourism with the need to protect the area. Option A is inco...
  Answer evidence: 27 Multiple Choice 4.F
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 176; collection `staar-2024-rationale::english-ii`
  Source id: staar-2024-rationale::english-ii::28
  Title: English II
  Prompt: Option C is correct The information presented by the author in this article is a chronological review of the treaty created to govern Antarctica and of the challenges raised by increased access to the Antarctic. Option A is incorrect The article is about some of the challenges faced in Antarctica, specifically incre...
  Answer evidence: 28 Multiple Choice 8.B
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 203; collection `staar-2024-rationale::english-ii`
  Source id: staar-2024-rationale::english-ii::57
  Title: English II
  Prompt: is in response to Lina’s invitation to hear a new song, and it shows that the problem caused by Joelle’s dismissive comment (line 28) has been resolved.
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### staar_2023::grade-4-rla

- Source: Texas STAAR 2023 paper samplers (`staar_2023`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 55
- Target family: school-reading-support
- Existing track ids: readingVocab4th
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 106; collection `staar-2023::grade-4-rla`
  Source id: staar-2023::grade-4-rla::1
  Title: Grade 4 RLA
  Prompt: [Settings: Miss Pinkham’s third-grade classroom; Herbie’s house.]
  Answer evidence: came
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 119; collection `staar-2023::grade-4-rla`
  Source id: staar-2023::grade-4-rla::14
  Title: Grade 4 RLA
  Prompt: Tyler has made an error in sentence 2. Select the response that corrects the error. A Palo Duro Canyon B Palo Duro canyon The is large, so we explored it by horse. C Palo duro canyon D palo duro Canyon
  Answer evidence: Inline Choice 4.11.Dix
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 132; collection `staar-2023::grade-4-rla`
  Source id: staar-2023::grade-4-rla::27
  Title: Grade 4 RLA
  Prompt: NARRATOR: Very carefully, Herbie printed his street address. When he came to his zip code, Herbie was in trouble. Grade 4 Reading
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 133; collection `staar-2023::grade-4-rla`
  Source id: staar-2023::grade-4-rla::28
  Title: Grade 4 RLA
  Prompt: HERBIE: 0 . . . 6 . . . 7 . . . 9 . . . What is that last number of my zip code?
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 160; collection `staar-2023::grade-4-rla`
  Source id: staar-2023::grade-4-rla::55
  Title: Grade 4 RLA
  Prompt: ALL: [Clap.] Grade 4 Reading 7160
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### staar_2021::algebra-i

- Source: Texas STAAR 2021 released tests (`staar_2021`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 54
- Target family: school-math-support
- Existing track ids: col-algebra-1
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 0; collection `staar-2021::algebra-i`
  Source id: staar-2021::algebra-i::0
  Title: Algebra I
  Prompt: $20.00
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
  Prompt quality flags: very-short-prompt
- Raw index 13; collection `staar-2021::algebra-i`
  Source id: staar-2021::algebra-i::13
  Title: Algebra I
  Prompt: Which graph best represents the solution set to this system of inequalities? x+<y 1 xy− − ≤2 A C B D Algebra I
  Answer evidence: 13 2 Supporting A.3(H) A
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
- Raw index 26; collection `staar-2021::algebra-i`
  Source id: staar-2021::algebra-i::27
  Title: Algebra I
  Prompt: What is the value of the y-intercept of the graph of ? Record your answer and fill in the bubbles on your answer document. Algebr a I y
  Answer evidence: 27 5 Readiness A.9(D) 73 28 4 Readiness A.7(C) J
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
- Raw index 27; collection `staar-2021::algebra-i`
  Source id: staar-2021::algebra-i::28
  Title: Algebra I
  Prompt: The graph of fx() = x2 is reflected over the x-axis and is stretched horizontally to create the graph of function g. Which graph could represent g? F H G J Algebra I y
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
- Raw index 53; collection `staar-2021::algebra-i`
  Source id: staar-2021::algebra-i::92
  Title: Algebra I
  Prompt: B 24 6 C 42 3 D 44 6 184 ? Algebra I y
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no

### staar_2019::u-s-history

- Source: Texas STAAR 2019 released tests (`staar_2019`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 54
- Target family: school-stage-support
- Existing track ids: usHistory
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 404; collection `staar-2019::u-s-history`
  Source id: staar-2019::u-s-history::1
  Title: U.S. History
  Prompt: to 4 Less than 1 Source: U.S . Census Bureau Which factor best explains the population change in California, Texas, and Florida during this time period? A An increase in the number of coal-mining jobs B Fewer environmental protection laws C A lack of a sales tax on consumer goods D An increase in the number of econo...
  Answer evidence: 1 1 Supporting H.10(F) H.29(B) A
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
  Prompt quality flags: fragment-start
- Raw index 417; collection `staar-2019::u-s-history`
  Source id: staar-2019::u-s-history::17
  Title: U.S. History
  Prompt: Which phrase best defines the Holocaust? A The U.S. plan to relocate Japanese Americans to internment camps B The Allied plan to liberate concentration camps in Eastern Europe C The Nazi campaign to use genocide to eliminate European Jews D The Japanese military strategy to destroy U.S. aircraft carriers U.S. Histor...
  Answer evidence: 17 1 Readiness H.7(D) C
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
- Raw index 430; collection `staar-2019::u-s-history`
  Source id: staar-2019::u-s-history::35
  Title: U.S. History
  Prompt: 34 What was the purpose of the Pure Food and Drugs Act of 1906? F To protect consumers by regulating the food and drug industry G To lower the cost of essential foods and drugs for consumers H To prevent shortages by regulating the supply of food and drugs J To reduce production costs for food and drug manufacturers...
  Answer evidence: 35 2 Readiness H.14(A) H.29(B) D
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
- Raw index 431; collection `staar-2019::u-s-history`
  Source id: staar-2019::u-s-history::36
  Title: U.S. History
  Prompt: ? • Built sod houses • Used steel plows • Developed dry farming techniques What is the best title for this list? F How Sharecroppers Lived in the Deep South G Ways Migrant Workers Lived in the Southwest H How Miners Took Advantage of Gold Rush Opportunities J Ways Settlers Adapted to Conditions on the Great Plains
  Answer evidence: 36 2 Readiness H.12(A) H.29(B) J
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes
- Raw index 457; collection `staar-2019::u-s-history`
  Source id: staar-2019::u-s-history::68
  Title: U.S. History
  Prompt: Source: Library of Congress, Prints and Photographs Division What was the primary reason for these masks during World War I? F To hide the identities of soldiers from approaching enemies G To protect soldiers from spreading contagious diseases H To help soldiers use night vision technology to find the enemy J To pro...
  Raw candidates: apHistory, usHistory
  Candidate overlap: yes

### staar_2025_rationales::grade-5-math

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 53
- Target family: school-math-support
- Existing track ids: class5Math
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 553; collection `staar-2025-rationale::grade-5-math`
  Source id: staar-2025-rationale::grade-5-math::0
  Title: Grade 5 Math
  Prompt: on the partial products in both the first and the second step of multiplication, resulting in 43,040 + 21,520 = 64,560. The student needs to focus on understanding how to use placeholders of zero when carrying out the steps in the multiplication algorithm (procedure). Option C is incorrect The student likely did not...
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: rationale-only, fragment-start
- Raw index 566; collection `staar-2025-rationale::grade-5-math`
  Source id: staar-2025-rationale::grade-5-math::13
  Title: Grade 5 Math
  Prompt: gift bags are filled. This is an efficient way to solve the problem; however, other methods could be used to solve the problem correctly.
  Answer evidence: 13 1.14
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
- Raw index 579; collection `staar-2025-rationale::grade-5-math`
  Source id: staar-2025-rationale::grade-5-math::26
  Title: Grade 5 Math
  Prompt: Option D is correct To determine how many milliliters of iced tea are in all
  Answer evidence: 26 Multiple Choice 5.3.7.A
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 592; collection `staar-2025-rationale::grade-5-math`
  Source id: staar-2025-rationale::grade-5-math::44
  Title: Grade 5 Math
  Prompt: feet. This is an efficient way to solve the problem; however, other methods could be used to solve the problem correctly. Option A is incorrect The student likely added the two side lengths and multiplied by
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: rationale-only, fragment-start
- Raw index 605; collection `staar-2025-rationale::grade-5-math`
  Source id: staar-2025-rationale::grade-5-math::99
  Title: Grade 5 Math
  Prompt: from the total of 2.
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: very-short-prompt

### staar_2025_rationales::english-i

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 53
- Target family: school-reading-support
- Existing track ids: col-9th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 101; collection `staar-2025-rationale::english-i`
  Source id: staar-2025-rationale::english-i::1
  Title: English I
  Prompt: of the article, the author explains that the time capsule was “assembled by none other than Samuel Adamas and Paul Revere.” Although this is an interesting fact to include in the introductory paragraph, it is not a key idea of the article. Option D is incorrect The author mentions in paragraph
  Answer evidence: 1 A
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only, fragment-start
- Raw index 114; collection `staar-2025-rationale::english-i`
  Source id: staar-2025-rationale::english-i::14
  Title: English I
  Prompt: because the claim that it may take time to find an appealing story is not related to thinking more critically about the world. Option C is incorrect Inserting this sentence informs the reader about different types of fiction, but this information is not relevant to thinking more critically about the world. Option D ...
  Answer evidence: 14 Multiple Choice 8.E
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only, fragment-start
- Raw index 127; collection `staar-2025-rationale::english-i`
  Source id: staar-2025-rationale::english-i::27
  Title: English I
  Prompt: Option B is correct In paragraph
  Answer evidence: 27 Multiselect 4.F
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 140; collection `staar-2025-rationale::english-i`
  Source id: staar-2025-rationale::english-i::40
  Title: English I
  Prompt: Option D is correct This sentence is correctly written and does not need to be revised. Option A is incorrect By repeating the phrase “conscious effort,” the writer creates unnecessary redundancy in the new sentence. Option B is incorrect In this revision, the writer creates awkwardness by inserting the phrase “whic...
  Answer evidence: 40 Multiple Choice 9.C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 153; collection `staar-2025-rationale::english-i`
  Source id: staar-2025-rationale::english-i::60
  Title: English I
  Prompt: years later in 1855, the people were so determined to preserve the items, they decided to pay for and build a whole new box that would keep the sacred artifacts safter for years to come! People’s actions towards the historic time capsule throughout the years emphasize its importance and value to the citizens of the ...
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### staar_2025_rationales::english-ii

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 53
- Target family: school-reading-support
- Existing track ids: col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 154; collection `staar-2025-rationale::english-ii`
  Source id: staar-2025-rationale::english-ii::1
  Title: English II
  Prompt: of the article, the author mentions that the lights from cities can be seen from space as forming a web of lines across Earth, but this is a detail. It is not a key idea that needs to be included in a summary of the article. Option C is incorrect In paragraphs
  Answer evidence: 1 Based on deta ils from the story "Moon Landing " and the poem "The Apollo
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only, fragment-start
- Raw index 167; collection `staar-2025-rationale::english-ii`
  Source id: staar-2025-rationale::english-ii::14
  Title: English II
  Prompt: Option A is correct In paragraphs
  Answer evidence: 14 Multiple Choice 6.A
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 180; collection `staar-2025-rationale::english-ii`
  Source id: staar-2025-rationale::english-ii::27
  Title: English II
  Prompt: Option B is correct The author uses a chronological structure in the section “Piedmont Meets Plain” to help develop the thesis of the article by explaining the geologic events that formed the fall line. The author describes the events in order, starting with shifting of tectonic plates causing continents to push int...
  Answer evidence: 27 Multiple Choice 7.Dii
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 193; collection `staar-2025-rationale::english-ii`
  Source id: staar-2025-rationale::english-ii::40
  Title: English II
  Prompt: Option B is correct By replacing “They” with “Tensions around the world,” the writer makes it clear that the tensions described in the preceding sentences are what “continued to escalate.” Option A is incorrect Replacing “They” with “Decisions made by leaders” would not make sense because a decision is fixed and doe...
  Answer evidence: 40 Multiple Choice 9.C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 206; collection `staar-2025-rationale::english-ii`
  Source id: staar-2025-rationale::english-ii::95
  Title: English II
  Prompt: because it is fun.
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: very-short-prompt

### staar_2022::english-i

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 53
- Target family: school-reading-support
- Existing track ids: col-9th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 114; collection `staar-2022::english-i`
  Source id: staar-2022::english-i::1
  Title: English I
  Prompt: When my editors asked me to report on forest bathing, I packed a swimsuit. I assumed it must involve a dip in the water.
  Answer evidence: 1 5 Readiness Standard 9.Bii B
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 127; collection `staar-2022::english-i`
  Source id: staar-2022::english-i::14
  Title: English I
  Prompt: “It’s my hope that the health care system will include [forest therapy] into the range of services they reimburse for,” Clifford says.
  Answer evidence: 14 6 Supporting Standard 9.Dvi J
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 140; collection `staar-2022::english-i`
  Source id: staar-2022::english-i::27
  Title: English I
  Prompt: But today most of us spend much of our life indoors, or at least tethered to devices. Perhaps the new forest bathing trend is a recognition that many of us need a little nudge to get back out there. ©2017 National Public Radio, Inc. News report titled “Forest Bathing: A Retreat To Nature Can Boost Immunity And Mood”...
  Answer evidence: 27 3 Readiness Standard 7.Di C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 153; collection `staar-2022::english-i`
  Source id: staar-2022::english-i::40
  Title: English I
  Prompt: close the door on thirty years gone forever. “Shoe Store” is reproduced from Collected Poems of Raymond Souster by permission of Oberon Press GO ONEnglish I Form 001
  Answer evidence: 40 3 Readiness Standard 7.Di H
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 166; collection `staar-2022::english-i`
  Source id: staar-2022::english-i::53
  Title: English I
  Prompt: Read this excerpt from lines 37 and 38 from the poem. I don’t ask for a ticket and he doesn’t offer one. What can the reader infer about the speaker based on the excerpt from these lines? A The speaker trusts the shoemaker to repair his shoe. B The speaker is confused why the shoemaker does not offer him a ticket. C...
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### nysed_math_2017::grade-7

- Source: NYSED 2017 Grades 3-8 Mathematics Released Questions (`nysed_math_2017`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 53
- Target family: school-math-support
- Existing track ids: col-class-7-math
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 182; collection `nysed-math-2017::grade-7`
  Source id: nysed-math-2017::grade-7::0
  Title: NYSED 2017 Grade 7 Math
  Prompt: 10
  Raw candidates: col-class-7-math, naplanYear7
  Candidate overlap: yes
  Prompt quality flags: very-short-prompt, numeric-only-prompt
- Raw index 195; collection `nysed-math-2017::grade-7`
  Source id: nysed-math-2017::grade-7::14
  Title: NYSED 2017 Grade 7 Math
  Prompt: Multiple Choice B 1 CCSS.Math.Content.7.NS.A.2d The Number System 0.68
  Answer evidence: Multiple Choice; correct=B; points=1
  Raw candidates: col-class-7-math, naplanYear7
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 208; collection `nysed-math-2017::grade-7`
  Source id: nysed-math-2017::grade-7::33
  Title: NYSED 2017 Grade 7 Math
  Prompt: Multiple Choice C 1 CCSS.Math.Content.7.RP.A.1 Ratios and Proportional Relationships 0.67
  Answer evidence: Multiple Choice; correct=C; points=1
  Raw candidates: col-class-7-math, naplanYear7
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 221; collection `nysed-math-2017::grade-7`
  Source id: nysed-math-2017::grade-7::46
  Title: NYSED 2017 Grade 7 Math
  Prompt: Multiple Choice B 1 CCSS.Math.Content.7.NS.A.3 The Number System 0.53
  Answer evidence: Multiple Choice; correct=B; points=1
  Raw candidates: col-class-7-math, naplanYear7
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 234; collection `nysed-math-2017::grade-7`
  Source id: nysed-math-2017::grade-7::61
  Title: NYSED 2017 Grade 7 Math
  Prompt: Constructed Response 3 CCSS.Math.Content.7.RP.A.3 Ratios and Proportional Relationships 0.66 0.22 *This item map is intended to identify the primary analytic skills necessary to successfully answer each question. However, some questions measure proficiencies described in multiple standards, including a balanced comb...
  Raw candidates: col-class-7-math, naplanYear7
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, standards-table-row

### staar_2023_redesign::english-i

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 52
- Target family: school-reading-support
- Existing track ids: col-9th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 96; collection `staar-2023-redesign::english-i`
  Source id: staar-2023-redesign::english-i::1
  Title: English I
  Prompt: 5 You may go to Stamford and there see a man Who wears a white shirt and is asking for hands; You may ask him for work and he’ll answer you short, He will hurry you up, for he wants you to start. He will put you in a wagon and be off in the rain,
  Answer evidence: 1 • A complete response will thoroughly explain how the descriptive organizational pattern helps to develop the thesis of the article. o Descriptions of the appearance and features of the chuck wagon help to show how ...
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 109; collection `staar-2023-redesign::english-i`
  Source id: staar-2023-redesign::english-i::14
  Title: English I
  Prompt: A good cook was essential to the drive’s success. One cowboy recalled, “A camp cook could do more toward making life pleasant . . . than any other man in the outfit.”
  Answer evidence: 14 Multiple Choice 8.C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 122; collection `staar-2023-redesign::english-i`
  Source id: staar-2023-redesign::english-i::27
  Title: English I
  Prompt: What does the repetitive structure of the poem “The U-S-U Range” help convey? A The teamwork valued by a cowboy B The singer’s resigned acceptance of cowboy life C The singer’s process of becoming a cowboy D The drive of a cowboy to overcome adversity 59105 English I
  Answer evidence: 27 Multiple Choice 7.B
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 135; collection `staar-2023-redesign::english-i`
  Source id: staar-2023-redesign::english-i::40
  Title: English I
  Prompt: What revision, if any, is needed in sentence 7? A Becca had always loved animals because one silly encounter, being with a rabbit in the backyard, had made an enormous impression on her family. B Becca had always loved animals and with a rabbit in the backyard, one silly encounter had made an enormous impression on ...
  Answer evidence: 40 Multiple Choice 9.C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 147; collection `staar-2023-redesign::english-i`
  Source id: staar-2023-redesign::english-i::52
  Title: English I
  Prompt: What change, if any, is needed in sentence 11? A Change recent to resent B Insert a comma after thru-hikers C Change have skyrocketed to has skyrocketed D No change is needed. 56154 STAAR English I PRACTICE STAAR English I PRACTICE
  Answer evidence: 52 Multiple Choice 9.Di
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### staar_2023_redesign::english-ii

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 52
- Target family: school-reading-support
- Existing track ids: col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 148; collection `staar-2023-redesign::english-ii`
  Source id: staar-2023-redesign::english-ii::1
  Title: English II
  Prompt: spread forth below
  Answer evidence: 1 Rationale: This prompt will allow students to write a letter to their principal stating and supporting a position about who a volunteer program at school could most benefit to a clearly identified audience. Students...
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: very-short-prompt
- Raw index 161; collection `staar-2023-redesign::english-ii`
  Source id: staar-2023-redesign::english-ii::14
  Title: English II
  Prompt: Which statement best expresses the author’s claim about volunteerism? A People should volunteer in order to help themselves as well as others. B Volunteering is a declining American tradition. C Volunteering their time is a sacrifice more people should make. D People who volunteer deserve good health. 59350 English II
  Answer evidence: 14 Multiple Choice 7.Ei
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 174; collection `staar-2023-redesign::english-ii`
  Source id: staar-2023-redesign::english-ii::27
  Title: English II
  Prompt: Read lines 15 and 16 of the poem “London Snow.” The eye marvelled—marvelled at the dazzling whiteness; The ear hearkened to the stillness of the solemn air; How does the figurative language in these lines reveal the speaker’s attitude toward the snow? A By suggesting that human productivity is hampered by the unexpe...
  Answer evidence: 27 Multiple Choice 8.D
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 187; collection `staar-2023-redesign::english-ii`
  Source id: staar-2023-redesign::english-ii::40
  Title: English II
  Prompt: Julia has used a weak transitional phrase at the beginning of sentence 17. Select the ONE phrase that BEST replaces In addition to this in this sentence. A As the year went on B In response to her teacher C While her parents watched D After so much disappointment , Natalia continued to work on her technique and lear...
  Answer evidence: 40 Inline Choice 9.Bi
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 199; collection `staar-2023-redesign::english-ii`
  Source id: staar-2023-redesign::english-ii::52
  Title: English II
  Prompt: What change should be made in sentence 12? A Change But to While B Change is to was C Change Zilker Park holiday tree to Zilker Park Holiday Tree D Change its to it’s 56335 STAAR English II PRACTICE STAAR English II PRACTICE
  Answer evidence: 52 Multiple Choice 9.Div
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### staar_2021::english-ii

- Source: Texas STAAR 2021 released tests (`staar_2021`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 52
- Target family: school-reading-support
- Existing track ids: col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 160; collection `staar-2021::english-ii`
  Source id: staar-2021::english-ii::1
  Title: English II
  Prompt: For more than ten years now the neighbors have grown accustomed to the noises from the Erdahl family’s garden: bang-bang-bang-bang-bang. Then a brief pause while Kevin collects the pucks. Then bang-bang-bang-bang-bang.H e was two and a half years old the first time he put a pair of skates on, three when he got his f...
  Answer evidence: 1 5 Readiness E.9(C) C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 173; collection `staar-2021::english-ii`
  Source id: staar-2021::english-ii::14
  Title: English II
  Prompt: I listed all my points in favor of a grand, babbling with enthusiasm as I recited the litany.
  Answer evidence: 14 6 Supporting E.9(D) F
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 186; collection `staar-2021::english-ii`
  Source id: staar-2021::english-ii::27
  Title: English II
  Prompt: Read this quotation from paragraph 2 of the excerpt from the article “Those Old Piano Blues.” Then a slow, downward sales arpeggio started. What does the author’s use of musical terminology convey in the quotation? A How the popularity of the piano has shifted like notes in a song B How piano dealers use musical lan...
  Answer evidence: 27 3 Readiness E.4(F) A
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 199; collection `staar-2021::english-ii`
  Source id: staar-2021::english-ii::40
  Title: English II
  Prompt: In paragraph 4, what does grandeur most nearly mean? F Elegance G Magnificence H Sophistication J Shapeliness English II
  Answer evidence: 40 1 Readiness E.2(B) G
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 211; collection `staar-2021::english-ii`
  Source id: staar-2021::english-ii::52
  Title: English II
  Prompt: Read this quotation from paragraph 7. He’s a Beartown man, his dad’s a Beartown man, and that may not mean a thing anywhere else, but it means something here. Based on the quotation, the reader can infer that Kevin feels — F appreciated G trapped H loyal J embarrassed BE SURE YOU HAVE RECORDED ALL OF YOUR ANSWERS En...
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### staar_2018::english-i

- Source: Texas STAAR 2018 released tests (`staar_2018`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 52
- Target family: school-reading-support
- Existing track ids: col-9th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 112; collection `staar-2018::english-i`
  Source id: staar-2018::english-i::1
  Title: English I
  Prompt: As children return to school this fall and sign up for a new year’s worth of extracurricular activities, parents should keep one question in mind. Whether your kid loves Little League or gymnastics, ask the program organizers this: “Which kids get awards?” If the answer is, “Everybody gets a trophy,” find another pr...
  Answer evidence: 1 5 Readiness D.13(C) A
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 125; collection `staar-2018::english-i`
  Source id: staar-2018::english-i::14
  Title: English I
  Prompt: Ha ving studied recent increases in narcissism and entitlement among college students, she warns that when living rooms are filled with participation trophies, it’s part of a larger cultural message: to succeed, you just have to show up. In college, those who’ve grown up receiving endless awards do the requisite wor...
  Answer evidence: 14 6 Readiness D.19(A) G
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 138; collection `staar-2018::english-i`
  Source id: staar-2018::english-i::27
  Title: English I
  Prompt: The author compares the pieces of her grandfather’s collection to “dear old friends” in paragraph 2 to suggest that the grandfather — A had acquired most of the collection as gifts B was aware the collection might help him later in life C feels a strong emotional bond to his collected objects D fondly knew many of t...
  Answer evidence: 27 2 Supporting D.7 Fig. 19(B) C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 151; collection `staar-2018::english-i`
  Source id: staar-2018::english-i::40
  Title: English I
  Prompt: How does the photograph support an important detail in paragraph 4? F By showing the number of crew members on the Tangaroa G By demonstrating how Happy Feet used the slide H By showing the terrible weather conditions J By revealing what Happy Feet’s custom-built crate looked like
  Answer evidence: 40 3 Supporting D.12 Fig. 19(B) J
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 163; collection `staar-2018::english-i`
  Source id: staar-2018::english-i::52
  Title: English I
  Prompt: Which interpretation of the cartoon best supports the author’s position in the article? F The boy is excited about winning a competition. G The boy would like to win more trophies for his collection. H The boy wants to improve his skills so that he will continue to win. J The boy is used to getting trophies simply f...
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### staar_2018::english-ii

- Source: Texas STAAR 2018 released tests (`staar_2018`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 52
- Target family: school-reading-support
- Existing track ids: col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 164; collection `staar-2018::english-ii`
  Source id: staar-2018::english-ii::1
  Title: English II
  Prompt: A polite no would have done the trick, no thanks, I’m afraid not, not today, then the closing of the door and the heavy click of the latch, but I’d seen the lines of dirt in the black shoe-creases, the worn-down heels, the shine on the jacket sleeves, the glint of desperation in his eyes. All the more reason, I said...
  Answer evidence: 1 5 Readiness E.13(C) D
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 177; collection `staar-2018::english-ii`
  Source id: staar-2018::english-ii::14
  Title: English II
  Prompt: For the rest of us, this constant connectedness may have a bittersweet aftertaste. My recent trek into the Himalaya was a reminder of the pleasures of remoteness. It was a joy to escape from the hamster wheel of distractions, and immerse myself in the expanded moment of real time. Because being connected—really conn...
  Answer evidence: 14 6 Readiness E.18(B) F
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 190; collection `staar-2018::english-ii`
  Source id: staar-2018::english-ii::27
  Title: English II
  Prompt: In 2008, what did the author notice about how the new technology was affecting those who work near Mount Everest? A They did not have the means to take advantage of the new technology. B They were becoming much more efficient in their jobs. C They preferred to stick with traditional forms of communication. D They we...
  Answer evidence: 27 3 Readiness E.8(A) D
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 203; collection `staar-2018::english-ii`
  Source id: staar-2018::english-ii::40
  Title: English II
  Prompt: Which of these lines contains poetic language that conveys a sense of gentleness? F And the eyes of those two Indian ponies Darken with kindness. G At home once more, They begin munching the young tufts of spring in the darkness. H We step over the barbed wire into the pasture Where they have been grazing all day, a...
  Answer evidence: 40 2 Supporting E.3 Fig. 19(B) F
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 215; collection `staar-2018::english-ii`
  Source id: staar-2018::english-ii::52
  Title: English II
  Prompt: The narrator’s polishing of the mirror suggests a theme of — F the opportunity for renewal G the importance of self-care H the inaccuracies found in images J the rewards of honest work BE SURE YOU HAVE RECORDED ALL OF YOUR ANSWERS English II ON THE ANSWER DOCUMENT. STOP STAAR English II April 2018 806422
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### staar_2019::english-i

- Source: Texas STAAR 2019 released tests (`staar_2019`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 52
- Target family: school-reading-support
- Existing track ids: col-9th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 106; collection `staar-2019::english-i`
  Source id: staar-2019::english-i::1
  Title: English I
  Prompt: Then an adult voice said behind us: “What are you boys doing up here?”
  Answer evidence: 1 5 Readiness D.13(C) D
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 119; collection `staar-2019::english-i`
  Source id: staar-2019::english-i::14
  Title: English I
  Prompt: T. J. started forward. “You can’t do that,” he said. “We toted it up here, and it’s our earth. We planted it and raised it and toted it up here.”
  Answer evidence: 14 6 Readiness D.17(C) J
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 132; collection `staar-2019::english-i`
  Source id: staar-2019::english-i::27
  Title: English I
  Prompt: “They ain’t gonna touch my earth,” he said fiercely. “They ain’t gonna lay a hand on it! Come on.”
  Answer evidence: 27 3 Supporting D.10 Fig. 19(B) D
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 145; collection `staar-2019::english-i`
  Source id: staar-2019::english-i::40
  Title: English I
  Prompt: In paragraph 30, what does the word laboriously mean? F At great cost G For good reason H Quietly and in secrecy J Slowly and with difficulty English I
  Answer evidence: 40 1 Readiness D.1(B) J
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 157; collection `staar-2019::english-i`
  Source id: staar-2019::english-i::52
  Title: English I
  Prompt: The repetition in lines 19 through 21 is used to emphasize that the desk — F contains messages written long ago G is worth a great amount of money H is outdated in its appearance J creates a timeless bond BE SURE YOU HAVE RECORDED ALL OF YOUR ANSWERS English I ON THE ANSWER DOCUMENT. STOP STAAR English I April 2019
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### staar_2019::english-ii

- Source: Texas STAAR 2019 released tests (`staar_2019`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 52
- Target family: school-reading-support
- Existing track ids: col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 158; collection `staar-2019::english-ii`
  Source id: staar-2019::english-ii::1
  Title: English II
  Prompt: The fell beast‚ a black dragon with snake teeth and razor talons‚ swoops down on the wizard Gandalf. Cut to Frodo‚ a hobbit from the Shire‚ holding the ring of power over the fiery Cracks of Doom. As the ring falls‚ Mount Doom starts to explode‚ leaving Frodo stranded‚ surrounded on all sides by red-hot lava‚ and fa...
  Answer evidence: 1 5 Supporting E.15(A) C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 171; collection `staar-2019::english-ii`
  Source id: staar-2019::english-ii::14
  Title: English II
  Prompt: Adopting an expanded view of the national park ethic in our urban spaces would exponentially increase our ability to protect wildlife and biodiversity around the world.
  Answer evidence: 14 6 Readiness E.13(D) J
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 184; collection `staar-2019::english-ii`
  Source id: staar-2019::english-ii::27
  Title: English II
  Prompt: In paragraphs
  Answer evidence: 27 2 Supporting E.5(C) D
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: very-short-prompt
- Raw index 197; collection `staar-2019::english-ii`
  Source id: staar-2019::english-ii::40
  Title: English II
  Prompt: In paragraph 12, why does the author refer to milkweed plants as “gas stations” for monarch butterflies? F Milkweed plants are enjoyed by several species of butterflies. G Milkweed plants are becoming more available in cities. H Milkweed plants can be grown in any environment. J Milkweed plants are essential for the...
  Answer evidence: 40 3 Supporting E.10 Fig. 19(B) J
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 209; collection `staar-2019::english-ii`
  Source id: staar-2019::english-ii::52
  Title: English II
  Prompt: Which of these best describes the author’s purpose for writing this article? F To inform people about what makes a movie-watching experience enjoyable G To analyze the techniques moviemakers use to create popular movies H To compare the experiences of watching a movie at home and in a theater J To persuade people to...
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### staar_2024_rationales::english-i

- Source: Texas STAAR 2024 rationales (`staar_2024_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 52
- Target family: school-reading-support
- Existing track ids: col-9th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 97; collection `staar-2024-rationale::english-i`
  Source id: staar-2024-rationale::english-i::1
  Title: English I
  Prompt: Option B is correct In paragraph 2, the author states that neglecting to cite sources is “a kind of theft,” which is dishonest, indicating that neglecting to cite sources is wrong, and states that, if we fail to give due credit, “we are dishonestly taking the work of others” and “trying to pass it off as our own.” O...
  Answer evidence: 1 C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 110; collection `staar-2024-rationale::english-i`
  Source id: staar-2024-rationale::english-i::14
  Title: English I
  Prompt: Option D is correct The author’s use of chronological organization in paragraphs
  Answer evidence: 14 Multiple Choice 7.Dii
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 123; collection `staar-2024-rationale::english-i`
  Source id: staar-2024-rationale::english-i::27
  Title: English I
  Prompt: Option C is correct The author’s use of a chronological structure allows the reader to better understand the reasons for Helen’s decision by providing context around the sudden opportunity of the Parnassus. Option A is incorrect Although the reader can tell that the excerpt takes place during a single morning, the a...
  Answer evidence: 27 Multiple Choice 8.B
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 136; collection `staar-2024-rationale::english-i`
  Source id: staar-2024-rationale::english-i::40
  Title: English I
  Prompt: Option B is correct “Traditional” can mean “adhering to past practices,” and the writer is describing materials that have been used for many years. Therefore, “traditional” is a more effective word than “old” for sentence 25. Option A is incorrect The word “mature” means “fully developed physically,” which makes thi...
  Answer evidence: 40 Multiple Choice 9.C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 148; collection `staar-2024-rationale::english-i`
  Source id: staar-2024-rationale::english-i::52
  Title: English I
  Prompt: Option C is correct There are two independent clauses in sentence 11, and they are connected with a comma, which creates a comma-splice error. This revision of the sentence corrects that error. Option A is incorrect The second structure in this answer choice is a fragment and is therefore incorrect. Option B is inco...
  Answer evidence: 52 Multiple Choice 9.Di
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only

### open_logic_project::modal-and-counterfactual

- Source: Open Logic Project (`open_logic_project`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 52
- Target family: logic-philosophy
- Existing track ids: philosophy, logicCriticalThinking, philSenior
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 0; collection `open-logic-project::applied-modal-logic`
  Source id: openlogic::applied-modal-logic/epistemic-logic/truth-at-w.tex::1
  Title: applied-modal-logic/epistemic-logic/truth-at-w.tex
  Prompt: Consider which of the following hold in [el][trw] fig:simple : - $M q [w_1]$; - $M _a q [w_1]$; - $M _b q [w_1]$; - $M _b q _b q [w_2]$; - $M _a( _b q _b q) [w_2]$; - $M _ \ a,b\ q [w_3]$;
  Raw candidates: philosophy, logicCriticalThinking, philSenior
  Candidate overlap: yes
- Raw index 233; collection `open-logic-project::normal-modal-logic`
  Source id: openlogic::normal-modal-logic/axioms-systems/systems-distinct.tex::1
  Title: normal-modal-logic/axioms-systems/systems-distinct.tex
  Prompt: Give an alternative proof of [prf][dis] thm:KD5not4 using a model with $3$ worlds.
  Raw candidates: philosophy, logicCriticalThinking, philSenior
  Candidate overlap: yes
- Raw index 246; collection `open-logic-project::normal-modal-logic`
  Source id: openlogic::normal-modal-logic/frame-definability/properties-accessibility.tex::2
  Title: normal-modal-logic/frame-definability/properties-accessibility.tex
  Prompt: Prove the claims in [frd][acc] prop:reflexive .
  Raw candidates: philosophy, logicCriticalThinking, philSenior
  Candidate overlap: yes
- Raw index 259; collection `open-logic-project::normal-modal-logic`
  Source id: openlogic::normal-modal-logic/syntax-and-semantics/schemas.tex::6
  Title: normal-modal-logic/syntax-and-semantics/schemas.tex
  Prompt: For each of the following schemas find a model $M$ such that every instance of the formula is true in $M$: - $p p$; - $ p p$.
  Raw candidates: philosophy, logicCriticalThinking, philSenior
  Candidate overlap: yes
- Raw index 271; collection `open-logic-project::normal-modal-logic`
  Source id: openlogic::normal-modal-logic/tableaux/soundness.tex::1
  Title: normal-modal-logic/tableaux/soundness.tex
  Prompt: Complete the proof of [tab][sou] thm:tableau-soundness .
  Raw candidates: philosophy, logicCriticalThinking, philSenior
  Candidate overlap: yes

### openintro_stats::foundations

- Source: OpenIntro Statistics (`openintro_stats`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 52
- Target family: statistics-data-science
- Existing track ids: apStatistics, introDataScience
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 0; collection `openintro-stats::ch_distributions`
  Source id: openintro-stats::ch_distributions::35
  Title: Roulette winnings
  Prompt: Roulette winnings In the game of roulette, a wheel is spun and you place bets on where it will stop. One popular bet is that it will stop on a red slot; such a bet has an 18/38 chance of winning. If it stops on red, you double the money you bet. If not, you lose the money you bet. Suppose you play 3 times, each time...
  Raw candidates: apStatistics, introDataScience, quant, quantAdvanced
  Candidate overlap: yes
- Raw index 13; collection `openintro-stats::ch_distributions`
  Source id: openintro-stats::ch_distributions::48
  Title: Multiple choice quiz
  Prompt: Multiple choice quiz In a multiple choice quiz there are 5 questions and 4 choices for each question (a, b, c, d). Robin has not studied for the quiz at all, and decides to randomly guess the answers. What is the probability that - the first question she gets right is the $3^ rd $ question? - she gets exactly 3 or e...
  Raw candidates: apStatistics, introDataScience, quant, quantAdvanced
  Candidate overlap: yes
  Prompt quality flags: answer-key-row
- Raw index 50; collection `openintro-stats::ch_intro_to_data`
  Source id: openintro-stats::ch_intro_to_data::36
  Title: Stressed out, Part II
  Prompt: Stressed out, Part II In a study evaluating the relationship between stress and muscle cramps, half the subjects are randomly assigned to be exposed to increased stress by being placed into an elevator that falls rapidly and stops abruptly and the other half are left at no or baseline stress. - What type of study is...
  Raw candidates: apStatistics, introDataScience
  Candidate overlap: yes
- Raw index 63; collection `openintro-stats::ch_probability`
  Source id: openintro-stats::ch_probability::43
  Title: Cost of breakfast
  Prompt: Cost of breakfast Sally gets a cup of coffee and a muffin every day for breakfast from one of the many coffee shops in her neighborhood. She picks a coffee shop each morning at random and independently of previous days. The average price of a cup of coffee is $1.40 with a standard deviation of 30 ( $0.30), the avera...
  Answer evidence: (a) E = $3.90. SD = $0.34. (b) E = $27.30. SD = $0.89.
  Raw candidates: apStatistics, introDataScience, quant, quantAdvanced
  Candidate overlap: yes
- Raw index 88; collection `openintro-stats::ch_summarizing_data`
  Source id: openintro-stats::ch_summarizing_data::34
  Title: Marathon winners
  Prompt: Marathon winners The histogram and box plots below show the distribution of finishing times in hours for male and female winners of the New York Marathon between 1970 and 1999. - What features of the distribution are apparent in the histogram and not the box plot? What features are apparent in the box plot but not i...
  Raw candidates: apStatistics, introDataScience
  Candidate overlap: yes

### staar_2025_rationales::grade-6-math

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 51
- Target family: school-math-support
- Existing track ids: class6Math
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 804; collection `staar-2025-rationale::grade-6-math`
  Source id: staar-2025-rationale::grade-6-math::0
  Title: Grade 6 Math
  Prompt: + (–4) = –12. The student needs to focus on adding, subtracting, multiplying, and dividing integers in the correct order.
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
- Raw index 816; collection `staar-2025-rationale::grade-6-math`
  Source id: staar-2025-rationale::grade-6-math::12
  Title: Grade 6 Math
  Prompt: = –33) but applied the multiplication rule for two negative values to the sum of negative values and made the answer positive (33). The student needs to focus on adding, subtracting, multiplying, and dividing integers in the correct order. Option D is incorrect The student likely solved
  Answer evidence: 12 Multiple Choice 6.2.3.E
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 828; collection `staar-2025-rationale::grade-6-math`
  Source id: staar-2025-rationale::grade-6-math::24
  Title: Grade 6 Math
  Prompt: and –12, resulting in 12. Option A is incorrect The student likely multiplied –
  Answer evidence: 24 Multiple Choice 6.2.3.D
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: rationale-only, fragment-start
- Raw index 829; collection `staar-2025-rationale::grade-6-math`
  Source id: staar-2025-rationale::grade-6-math::25
  Title: Grade 6 Math
  Prompt: back to fraction form, −
  Answer evidence: 25 Multiple Choice 6.2.4.B
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: very-short-prompt
- Raw index 854; collection `staar-2025-rationale::grade-6-math`
  Source id: staar-2025-rationale::grade-6-math::99
  Title: Grade 6 Math
  Prompt: was less than the range 200 or more. The student needs to focus on interpreting numeric data summarized in histograms. Option D is incorrect The student likely misinterpreted the height of the bars as representing the number of miles driven and noticed that two bars have a height of 30. Therefore, the student likely...
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: rationale-only, fragment-start

### staar_2023_redesign::algebra-i

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 51
- Target family: school-math-support
- Existing track ids: col-algebra-1
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 0; collection `staar-2023-redesign::algebra-i`
  Source id: staar-2023-redesign::algebra-i::1
  Title: Algebra I
  Prompt: -2
  Answer evidence: 1 is shown on the grid. Which points are in the solution set of 3x -y > 1? Select THREE correct answers. The equation of line k is y = -x + 17. Line n is parallel to line k and passes through the point (-5, 7). Determ...
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
  Prompt quality flags: very-short-prompt
- Raw index 12; collection `staar-2023-redesign::algebra-i`
  Source id: staar-2023-redesign::algebra-i::13
  Title: Algebra I
  Prompt: The graph of a linear function is shown on the coordinate plane. Which function best represents the relationship shown in the graph? A y = 2x − 4 B y = 2x + 2 1C y = x − 42 1D y = x + 22 Algebra I 82516
  Answer evidence: 13 Multiple Choice 3.2.C
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
- Raw index 24; collection `staar-2023-redesign::algebra-i`
  Source id: staar-2023-redesign::algebra-i::25
  Title: Algebra I
  Prompt: A football player sprinted at a constant rate. The part of the linear function shown represents the distance the football player sprinted in yards, y, as a function of the time in seconds, x. What is the range of the function for this situation? A 0 ≤ y ≤ 9 B 0 ≤ x ≤ 9 C 0 ≤ y ≤ 80 D 0 ≤ x ≤ 80 82367
  Answer evidence: 25 Multiple Choice 3.2.A
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
- Raw index 25; collection `staar-2023-redesign::algebra-i`
  Source id: staar-2023-redesign::algebra-i::26
  Title: Algebra I
  Prompt: Which expression is a factor of −6x2 − 19x + 20? A 3x − 5 B 6x − 5 C x − 5 D 2x − 5 82288 Algebra I
  Answer evidence: 26 Multiple Choice 1.10.E
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no
- Raw index 50; collection `staar-2023-redesign::algebra-i`
  Source id: staar-2023-redesign::algebra-i::55
  Title: Algebra I
  Prompt: 5.85 What is the rate of change of the total cost in dollars with respect to the number of additional minutes? A $0.17 per min B $0.35 per min C $0.07 per min D $0.56 per min 82322 Algebra I
  Raw candidates: high_algebra_1, high_algebra_2, sat
  Candidate overlap: no

### staar_2022::grade-4-rla

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 49
- Target family: school-reading-support
- Existing track ids: readingVocab4th
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 353; collection `staar-2022::grade-4-rla`
  Source id: staar-2022::grade-4-rla::1
  Title: Grade 4 RLA
  Prompt: Are you one of those people who loves listening to music? Do you listen to it whenever you can? If so, you’re doing something good for your mind and body. If not, you should think about adding more music to your life. It just might make you happier, healthier, and better rested. It could even make you a better stude...
  Answer evidence: 1 2 Readiness Standard 8.B B
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 365; collection `staar-2022::grade-4-rla`
  Source id: staar-2022::grade-4-rla::13
  Title: Grade 4 RLA
  Prompt: “Father is falling!” yelled See Far frantically.
  Answer evidence: 13 3 Readiness Standard 7.C C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 377; collection `staar-2022::grade-4-rla`
  Source id: staar-2022::grade-4-rla::25
  Title: Grade 4 RLA
  Prompt: I don’t know what, I need a little drink. Reading And once I see that I’m all right,
  Answer evidence: 25 3 Readiness Standard 10.A C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 389; collection `staar-2022::grade-4-rla`
  Source id: staar-2022::grade-4-rla::37
  Title: Grade 4 RLA
  Prompt: NELSON: [Forcefully.] Dad, I just know Lucia has my book.
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 401; collection `staar-2022::grade-4-rla`
  Source id: staar-2022::grade-4-rla::49
  Title: Grade 4 RLA
  Prompt: [Nelson smiles and makes himself comfortable on the couch and opens up Space Ride.] Reading 42308_2
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### nysed_math_2017::grade-8

- Source: NYSED 2017 Grades 3-8 Mathematics Released Questions (`nysed_math_2017`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 49
- Target family: school-math-support
- Existing track ids: col-class-8-math
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 235; collection `nysed-math-2017::grade-8`
  Source id: nysed-math-2017::grade-8::1
  Title: NYSED 2017 Grade 8 Math
  Prompt: Multiple Choice A 1 CCSS.Math.Content.8.EE.A.3 Expressions and Equations 0.62
  Answer evidence: Multiple Choice; correct=A; points=1
  Raw candidates: col-class-8-math, high_algebra_1
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 247; collection `nysed-math-2017::grade-8`
  Source id: nysed-math-2017::grade-8::19
  Title: NYSED 2017 Grade 8 Math
  Prompt: Multiple Choice B 1 CCSS.Math.Content.8.SP.A.4 Statistics and Probability 0.67
  Answer evidence: Multiple Choice; correct=B; points=1
  Raw candidates: col-class-8-math, high_algebra_1
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 259; collection `nysed-math-2017::grade-8`
  Source id: nysed-math-2017::grade-8::34
  Title: NYSED 2017 Grade 8 Math
  Prompt: Multiple Choice C 1 CCSS.Math.Content.8.G.A.1 Geometry 0.58
  Answer evidence: Multiple Choice; correct=C; points=1
  Raw candidates: col-class-8-math, high_algebra_1
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 271; collection `nysed-math-2017::grade-8`
  Source id: nysed-math-2017::grade-8::47
  Title: NYSED 2017 Grade 8 Math
  Prompt: Multiple Choice C 1 CCSS.Math.Content.8.EE.C.7a Expressions and Equations 0.57
  Answer evidence: Multiple Choice; correct=C; points=1
  Raw candidates: col-class-8-math, high_algebra_1
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 283; collection `nysed-math-2017::grade-8`
  Source id: nysed-math-2017::grade-8::61
  Title: NYSED 2017 Grade 8 Math
  Prompt: Constructed Response 3 CCSS.Math.Content.8.F.A.3 Functions 1.60 0.53 *This item map is intended to identify the primary analytic skills necessary to successfully answer each question. However, some questions measure proficiencies described in multiple standards, including a balanced combination of procedural and con...
  Raw candidates: col-class-8-math, high_algebra_1
  Candidate overlap: yes
  Prompt quality flags: answer-key-row, standards-table-row

### staar_2025_rationales::grade-4-math

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 48
- Target family: school-math-support
- Existing track ids: class4Math
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 375; collection `staar-2025-rationale::grade-4-math`
  Source id: staar-2025-rationale::grade-4-math::0
  Title: Grade 4 Math
  Prompt: in the tenths place (6.0). The student needs to focus on attending to the details of the question and understanding how to accurately solve problems that involve whole numbers and decimals.
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: fragment-start
- Raw index 387; collection `staar-2025-rationale::grade-4-math`
  Source id: staar-2025-rationale::grade-4-math::12
  Title: Grade 4 Math
  Prompt: as a little greater than
  Answer evidence: 12
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: very-short-prompt
- Raw index 399; collection `staar-2025-rationale::grade-4-math`
  Source id: staar-2025-rationale::grade-4-math::24
  Title: Grade 4 Math
  Prompt: Option D is correct To determine which set of data the frequency table (a table that shows how often each value in a set of data occurs) could represent, the student could have identified the number of tally marks for each range in the table. The table shows that
  Answer evidence: 24 Multiple Choice 4.4.9.A
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 411; collection `staar-2025-rationale::grade-4-math`
  Source id: staar-2025-rationale::grade-4-math::41
  Title: Grade 4 Math
  Prompt: or any equivalent decimal value To determine the standard form of the number shown in expanded notation (the form of a number shown as a sum of each digit multiplied by its place value), the student could have evaluated the products in the given expression to find that (
  Answer evidence: 41 See Appendix 1.
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
- Raw index 422; collection `staar-2025-rationale::grade-4-math`
  Source id: staar-2025-rationale::grade-4-math::90
  Title: Grade 4 Math
  Prompt: 100. This is an efficient way to solve the problem; however, other methods could be used to solve the problem correctly.
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no

### staar_2025_rationales::grade-7-rla

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 48
- Target family: school-reading-support
- Existing track ids: col-7th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 956; collection `staar-2025-rationale::grade-7-rla`
  Source id: staar-2025-rationale::grade-7-rla::0
  Title: Grade 7 RLA
  Prompt: to 19. The diagram does not indicate whether students enjoy learning to use Mayan symbols. Option D is incorrect In paragraph 5, the author states that “students can use physical objects . . . to represent numbers and solve equations.” However, there is no indication in the diagram of the way students move objects a...
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only, fragment-start
- Raw index 968; collection `staar-2025-rationale::grade-7-rla`
  Source id: staar-2025-rationale::grade-7-rla::12
  Title: Grade 7 RLA
  Prompt: Option A is correct The author wrote the article “Counting like the Maya” most likely to describe the origins and basic details of the math system used by the Maya people. In paragraphs
  Answer evidence: 12 Multiple Choice 9.A
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 980; collection `staar-2025-rationale::grade-7-rla`
  Source id: staar-2025-rationale::grade-7-rla::24
  Title: Grade 7 RLA
  Prompt: Option A is correct The main theme, or universal idea about life, of the selection is that people sometimes fail to appreciate the small experiences in life. In paragraph 7, the author reflects on this idea, stating that “life’s lasting lessons do not always come in monumental moments” and hoping that her “grandmoth...
  Answer evidence: 24 Multiple Choice 7.A
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 992; collection `staar-2025-rationale::grade-7-rla`
  Source id: staar-2025-rationale::grade-7-rla::36
  Title: Grade 7 RLA
  Prompt: Option B is correct In this paragraph, the writer is disproving the idea that working on puzzles is not worthwhile. Since the adjective “advantageous” means beneficial or helpful, it is an effective word to use in affirming the value of doing puzzles. Option A is incorrect “Supreme,” is similar to the word “superior...
  Answer evidence: 36 Multiple Choice 10.C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 1003; collection `staar-2025-rationale::grade-7-rla`
  Source id: staar-2025-rationale::grade-7-rla::50
  Title: Grade 7 RLA
  Prompt: she hopes to redeem herself in the next scene. In this context, the reader can understand that redeem means “to restore personal honor or reputation.” In other words, she wants others to have a good opinion of her. Definition
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### nysed_math_2017::grade-6

- Source: NYSED 2017 Grades 3-8 Mathematics Released Questions (`nysed_math_2017`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 48
- Target family: school-math-support
- Existing track ids: class6Math
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 134; collection `nysed-math-2017::grade-6`
  Source id: nysed-math-2017::grade-6::1
  Title: NYSED 2017 Grade 6 Math
  Prompt: Multiple Choice B 1 CCSS.Math.Content.6.RP.A.3a Ratios and Proportional Relationships 0.56
  Answer evidence: Multiple Choice; correct=B; points=1
  Raw candidates: col-class-6-math, naplanYear7
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 146; collection `nysed-math-2017::grade-6`
  Source id: nysed-math-2017::grade-6::18
  Title: NYSED 2017 Grade 6 Math
  Prompt: Multiple Choice A 1 CCSS.Math.Content.6.RP.A.3c Ratios and Proportional Relationships 0.53
  Answer evidence: Multiple Choice; correct=A; points=1
  Raw candidates: col-class-6-math, naplanYear7
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 158; collection `nysed-math-2017::grade-6`
  Source id: nysed-math-2017::grade-6::35
  Title: NYSED 2017 Grade 6 Math
  Prompt: Multiple Choice C 1 CCSS.Math.Content.6.RP.A.3 Ratios and Proportional Relationships 0.68
  Answer evidence: Multiple Choice; correct=C; points=1
  Raw candidates: col-class-6-math, naplanYear7
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 170; collection `nysed-math-2017::grade-6`
  Source id: nysed-math-2017::grade-6::50
  Title: NYSED 2017 Grade 6 Math
  Prompt: Multiple Choice C 1 CCSS.Math.Content.6.G.A.1 Geometry 0.35
  Answer evidence: Multiple Choice; correct=C; points=1
  Raw candidates: col-class-6-math, naplanYear7
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 181; collection `nysed-math-2017::grade-6`
  Source id: nysed-math-2017::grade-6::61
  Title: NYSED 2017 Grade 6 Math
  Prompt: Constructed Response 3 CCSS.Math.Content.6.NS.C.5 The Number System 1.96 0.65 *This item map is intended to identify the primary analytic skills necessary to successfully answer each question. However, some questions measure proficiencies described in multiple standards, including a balanced combination of procedura...
  Raw candidates: col-class-6-math, naplanYear7
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row

### staar_2022::grade-8-math

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 47
- Target family: school-math-support
- Existing track ids: col-class-8-math
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 674; collection `staar-2022::grade-8-math`
  Source id: staar-2022::grade-8-math::0
  Title: Grade 8 Math
  Prompt: 1234567 789 0 1234567 789 Time (minutes) Time (minutes) Mathematics 36108_4
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
- Raw index 685; collection `staar-2022::grade-8-math`
  Source id: staar-2022::grade-8-math::11
  Title: Grade 8 Math
  Prompt: 10
  Answer evidence: 11 2 Readiness Standard 8.4(C) D
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: very-short-prompt, numeric-only-prompt
- Raw index 696; collection `staar-2022::grade-8-math`
  Source id: staar-2022::grade-8-math::22
  Title: Grade 8 Math
  Prompt: A teacher bought sets of books at a cost of $17.95 per set. The teacher also paid a one-time shipping fee of $22. Which table shows the relationship between the total cost of the books and the number of sets of books the teacher bought? Cost of Books Cost of Books Sets of Total Cost Books (dollars)
  Answer evidence: 22 2 Supporting Standard 8.5(B) J
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
- Raw index 697; collection `staar-2022::grade-8-math`
  Source id: staar-2022::grade-8-math::23
  Title: Grade 8 Math
  Prompt: Two customers spent the same total amount of money at a restaurant. • The first customer bought 8 hot wings and left a $4 tip. • The second customer bought 10 hot wings and left a $2.80 tip. • Both customers paid the same amount per hot wing. How much does one hot wing cost at this restaurant in dollars and cents? R...
  Answer evidence: 23 2 Readiness Standard 8.8(C) 0.60 24 4 Readiness Standard 8.5(D) H
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
- Raw index 720; collection `staar-2022::grade-8-math`
  Source id: staar-2022::grade-8-math::99
  Title: Grade 8 Math
  Prompt: 220 Crestview Camden Which list shows these distances from least to greatest? A 10 √17, 40, _586 _675 2, 11113 , 16 , √ B 40, 10 √17, _675 _586 2, 11116 , 13 , √ _586 _675C 13 , 16 , 10 √17, √2, 111, 40 D 40, _675 _586 2, 111, 10 √1716 , 13 , √ Distances for Di˜erent Proposed Routes (km) 675
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no

### staar_2025_rationales::grade-6-rla

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 46
- Target family: school-reading-support
- Existing track ids: readingVocab6th
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 855; collection `staar-2025-rationale::grade-6-rla`
  Source id: staar-2025-rationale::grade-6-rla::1
  Title: Grade 6 RLA
  Prompt: that the bats come out of the cave “just before the sun sets,” there is no mention in the introduction section of why the bats fly when it is dark. It is not until paragraph
  Answer evidence: 1 A
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: fragment-start
- Raw index 866; collection `staar-2025-rationale::grade-6-rla`
  Source id: staar-2025-rationale::grade-6-rla::12
  Title: Grade 6 RLA
  Prompt: Option D is correct A theme is a central message that conveys a universal idea about life. The author of the selection develops the theme that dedication is required in order to find one’s path in life. In paragraph 1, Matt understood that to make his dream a reality, he would need to take writing classes and practi...
  Answer evidence: 12 Multiple Choice 7.A
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 877; collection `staar-2025-rationale::grade-6-rla`
  Source id: staar-2025-rationale::grade-6-rla::23
  Title: Grade 6 RLA
  Prompt: Option A is correct The author emphasizes the number of bats and the size of the swarm in the introduction section of the selection. These bats can form “a huge cloud of as many as
  Answer evidence: 23 Multiple Choice 8.Dii
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 878; collection `staar-2025-rationale::grade-6-rla`
  Source id: staar-2025-rationale::grade-6-rla::24
  Title: Grade 6 RLA
  Prompt: Option C is correct This paraphrase accurately captures the important information from the sentences in paragraph 5. It includes the detail about the size of the bat group leaving the cave being so significant that it can be detected on radar. It also connects the idea of the group size being measurable on radar wit...
  Answer evidence: 24 Multiple Choice 6.D
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 900; collection `staar-2025-rationale::grade-6-rla`
  Source id: staar-2025-rationale::grade-6-rla::70
  Title: Grade 6 RLA
  Prompt: national and regional events each year” (paragraph 1). The author of the selection from Behind the Desk with Matt Christopher: The #
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### staar_2025_rationales::grade-8-rla

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 46
- Target family: school-reading-support
- Existing track ids: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 1064; collection `staar-2025-rationale::grade-8-rla`
  Source id: staar-2025-rationale::grade-8-rla::1
  Title: Grade 8 RLA
  Prompt: is written in present tense, this tense should be continued in sentence 2. A shift to the past-tense verb “needed” would be an error. Option C is incorrect “Detailed” is the correct spelling of the word being used in this sentence. It is not necessary to double the final consonant in “detail” before adding the suffi...
  Answer evidence: 1 B
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only, fragment-start
- Raw index 1075; collection `staar-2025-rationale::grade-8-rla`
  Source id: staar-2025-rationale::grade-8-rla::12
  Title: Grade 8 RLA
  Prompt: Option B is correct This summary includes all the important ideas from the section “The Role of a Teacher,” including Morgan’s work with an influential conductor and Morgan’s professional work connecting schoolchildren to music. Option A is incorrect This summary is incomplete. The ideas from paragraph
  Answer evidence: 12 Multiple Choice 6.D
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 1086; collection `staar-2025-rationale::grade-8-rla`
  Source id: staar-2025-rationale::grade-8-rla::23
  Title: Grade 8 RLA
  Prompt: Option D is correct In paragraph 2, the author notes that native peoples of the “northernmost regions have developed ways of adapting” their houses, clothing, and food to the harsh environment. In paragraph 9, the author points out several advantages of ancient snow goggles over modern sunglasses. Based on the infor...
  Answer evidence: 23 Multiple Choice 5.H
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 1087; collection `staar-2025-rationale::grade-8-rla`
  Source id: staar-2025-rationale::grade-8-rla::24
  Title: Grade 8 RLA
  Prompt: Option B is correct The author’s use of the phrases “migrated long distances” and “across . . . the Arctic Circle region” help the reader determine that the meaning of span as it is used in paragraph
  Answer evidence: 24 Multiple Choice 2.A
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 1109; collection `staar-2025-rationale::grade-8-rla`
  Source id: staar-2025-rationale::grade-8-rla::51
  Title: Grade 8 RLA
  Prompt: concludes, but does not develop, the play’s dramatic action. The apologies are part of the resolution. Option D is incorrect In scene 2, the volume of Maura and Jorge’s conversations does not develop the dramatic action in the play. Maura and Jorge speak loudly enough for Belinda and Robert to hear their conversatio...
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: rationale-only, fragment-start

### staar_2023_redesign::grade-7-rla

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 46
- Target family: school-reading-support
- Existing track ids: col-7th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Sample review is enough for first pass; escalate to full review if any sample feels misplaced.

Samples:

- Raw index 831; collection `staar-2023-redesign::grade-7-rla`
  Source id: staar-2023-redesign::grade-7-rla::0
  Title: Grade 7 RLA
  Prompt: .... Ul >­E rt] ~ __________________ ____,;:;_ ~ The Infinity Room at the House on the Rock :g ,__ __________________ ___, 0 6309 (11) People began to hear about Jordan’s unusual house. (12) Some drove by just to catch a glimpse of the odd structure. (13) A few asked if they could get a closer look. (14) In 1960 he ...
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 842; collection `staar-2023-redesign::grade-7-rla`
  Source id: staar-2023-redesign::grade-7-rla::11
  Title: Grade 7 RLA
  Prompt: The problem-and-solution organizational pattern in paragraphs 7 through 11 of the excerpt from “Cool Jobs: Sports Science” supports the topic by — A highlighting the way gymnasts cannot rely on their coaches for feedback B suggesting that no gymnast can land perfectly every time, even with practice C revealing how h...
  Answer evidence: 11 Multiple Choice 8.Diii
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 853; collection `staar-2023-redesign::grade-7-rla`
  Source id: staar-2023-redesign::grade-7-rla::22
  Title: Grade 7 RLA
  Prompt: This question has two parts. First, answer Part A. Then, answer Part B. Part A The word “politician” has a Greek root that means “affairs of the city.” Based on this information, what does the word politicians mean as it is used in paragraph 7? A People who supervise transportation systems B People in charge of buyi...
  Answer evidence: 22 Multipart 2.C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 854; collection `staar-2023-redesign::grade-7-rla`
  Source id: staar-2023-redesign::grade-7-rla::23
  Title: Grade 7 RLA
  Prompt: Which sentence from the article shows that some people viewed the camels as useful? A Davis hoped that the camels could be used to explore the deserts of west Texas, New Mexico, Arizona, and California. (paragraph 2) B He suggested that he could save the U.S. government more than $500 each month by ending the Camel ...
  Answer evidence: 23 Multiple Choice 6.C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 876; collection `staar-2023-redesign::grade-7-rla`
  Source id: staar-2023-redesign::grade-7-rla::45
  Title: Grade 7 RLA
  Prompt: What change should be made in sentence 7? A Change recent to resent B Change are to is C Change reason to reasen D Change struggle to struggling 57204 BE SURE YOU HAVE RECORDED ALL OF YOUR ANSWERS IN THE TEST BOOKLET. STOP STAAR GRADE 7 Reading Language Arts PRACTICE
  Answer evidence: 45 Multiple Choice 10.Div
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### nysed_math_2017::grade-4

- Source: NYSED 2017 Grades 3-8 Mathematics Released Questions (`nysed_math_2017`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 46
- Target family: school-math-support
- Existing track ids: class4Math
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 45; collection `nysed-math-2017::grade-4`
  Source id: nysed-math-2017::grade-4::0
  Title: NYSED 2017 Grade 4 Math
  Prompt: 1 — 1 0 1 — 1 2 2 Rainfall (inches) Rainfall (inches) Book 2 A student has 3 puzzles. Each puzzle has 1,250 pieces. What is the total number 25 of pieces in the puzzles? A 3,650 B 3,750 C 4,650 D 4,750 A baseball cap costs $8. A matching shirt costs 4 times as much as the cap. 26 Which of the following can be used t...
  Raw candidates: col-class-4-math, naplanYear5
  Candidate overlap: no
- Raw index 56; collection `nysed-math-2017::grade-4`
  Source id: nysed-math-2017::grade-4::11
  Title: NYSED 2017 Grade 4 Math
  Prompt: Multiple Choice C 1 CCSS.Math.Content.4.MD.A.3 Measurement and Data 0.32
  Answer evidence: Multiple Choice; correct=C; points=1
  Raw candidates: col-class-4-math, naplanYear5
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 67; collection `nysed-math-2017::grade-4`
  Source id: nysed-math-2017::grade-4::26
  Title: NYSED 2017 Grade 4 Math
  Prompt: Multiple Choice D 1 CCSS.Math.Content.4.OA.A.1 Operations and Algebraic Thinking 0.93
  Answer evidence: Multiple Choice; correct=D; points=1
  Raw candidates: col-class-4-math, naplanYear5
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 68; collection `nysed-math-2017::grade-4`
  Source id: nysed-math-2017::grade-4::27
  Title: NYSED 2017 Grade 4 Math
  Prompt: Multiple Choice B 1 CCSS.Math.Content.4.NF.A.1 Number and Operations— Fractions 0.36
  Answer evidence: Multiple Choice; correct=B; points=1
  Raw candidates: col-class-4-math, naplanYear5
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 90; collection `nysed-math-2017::grade-4`
  Source id: nysed-math-2017::grade-4::55
  Title: NYSED 2017 Grade 4 Math
  Prompt: Constructed Response 3 CCSS.Math.Content.4.OA.A.2 Operations and Algebraic Thinking 1.74 0.58 *This item map is intended to identify the primary analytic skills necessary to successfully answer each question. However, some questions measure proficiencies described in multiple standards, including a balanced combinat...
  Raw candidates: col-class-4-math, naplanYear5
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row

### nysed_ela_2017::grade-7

- Source: NYSED 2017 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2017`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 46
- Target family: school-reading-support
- Existing track ids: col-7th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 160; collection `nysed-ela-2017::grade-7`
  Source id: nysed-ela-2017::grade-7::1
  Title: NYSED 2017 Grade 7 ELA
  Prompt: Multiple Choice D 1 CCSS.ELA-Literacy.RI.7.1 Reading 0.88
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 171; collection `nysed-ela-2017::grade-7`
  Source id: nysed-ela-2017::grade-7::12
  Title: NYSED 2017 Grade 7 ELA
  Prompt: Multiple Choice C 1 CCSS.ELA-Literacy.RI.7.1 Reading 0.58
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 182; collection `nysed-ela-2017::grade-7`
  Source id: nysed-ela-2017::grade-7::34
  Title: NYSED 2017 Grade 7 ELA
  Prompt: Multiple Choice D 1 CCSS.ELA-Literacy.RL.7.6 Reading 0.49
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 183; collection `nysed-ela-2017::grade-7`
  Source id: nysed-ela-2017::grade-7::35
  Title: NYSED 2017 Grade 7 ELA
  Prompt: Multiple Choice A 1 CCSS.ELA-Literacy.RL.7.3 Reading 0.63 Book 2
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 205; collection `nysed-ela-2017::grade-7`
  Source id: nysed-ela-2017::grade-7::80
  Title: NYSED 2017 Grade 7 ELA
  Prompt: percent of the country had made the switch. Today, while the mechanics have remained much the same, the refrigerator has gotten ever fancier. Freon, the chlorofluorocarbon that changed the future, has been replaced with coolants that don’t eat through the ozone layer. Hydrators, automatic defrost systems, and icemak...
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no

### nysed_ela_2023::grade-7

- Source: NYSED 2023 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2023`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 46
- Target family: school-reading-support
- Existing track ids: col-7th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 147; collection `nysed-ela-2023::grade-7`
  Source id: nysed-ela-2023::grade-7::1
  Title: NYSED 2023 Grade 7 ELA
  Prompt: “at’s what makes it so horrifying, ” Haymet says. “e micro-plastic1 is the same size as the stuﬀ living in the water column.2 How would we ever go out and collect it? So far no one’s come up with a plan to separate all the micro-plastic from the living life that’s the same size.” . . .
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
- Raw index 158; collection `nysed-ela-2023::grade-7`
  Source id: nysed-ela-2023::grade-7::12
  Title: NYSED 2023 Grade 7 ELA
  Prompt: Miss Bedell continued, “ . . . if I was a man I would vote for you to but I will try and get every one to vote you that I can. ”
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
- Raw index 169; collection `nysed-ela-2023::grade-7`
  Source id: nysed-ela-2023::grade-7::23
  Title: NYSED 2023 Grade 7 ELA
  Prompt: Multiple Choice B 1 NGLS.ELA.Content.NY-7.R.5Reading Standards for Literature Reading 0.47
  Answer evidence: Multiple Choice; correct=B; points=1; standard=NGLS.ELA.Content.NY-7.R.5Reading
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 170; collection `nysed-ela-2023::grade-7`
  Source id: nysed-ela-2023::grade-7::24
  Title: NYSED 2023 Grade 7 ELA
  Prompt: Multiple Choice B 1 NGLS.ELA.Content.NY-7.R.4Reading Standards for Literature Reading 0.53
  Answer evidence: Multiple Choice; correct=B; points=1; standard=NGLS.ELA.Content.NY-7.R.4Reading
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 192; collection `nysed-ela-2023::grade-7`
  Source id: nysed-ela-2023::grade-7::46
  Title: NYSED 2023 Grade 7 ELA
  Prompt: Constructed Response 4 NGLS.ELA.Content.NY-7.R.8Reading Standards for Informational TextWriting to Sources 2.15 0.54 Constructed Response Questions *This item map is intended to identify the primary analytic skills necessary to successfully answer each question on the 2023 operational ELA test. However, each constru...
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row

### nysed_ela_2023::grade-8

- Source: NYSED 2023 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2023`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 46
- Target family: school-reading-support
- Existing track ids: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 193; collection `nysed-ela-2023::grade-8`
  Source id: nysed-ela-2023::grade-8::1
  Title: NYSED 2023 Grade 8 ELA
  Prompt: Multiple Choice B 1 NGLS.ELA.Content.NY-8.R.2Reading Standards for Literature Reading 0.85
  Answer evidence: Multiple Choice; correct=B; points=1; standard=NGLS.ELA.Content.NY-8.R.2Reading
  Raw candidates: naplanYear9, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 204; collection `nysed-ela-2023::grade-8`
  Source id: nysed-ela-2023::grade-8::12
  Title: NYSED 2023 Grade 8 ELA
  Prompt: is question is worth 2 credits. Read this sentence from paragraph 12 of “Excerpt from Keep the ‘Wild’ in Wildlife.” But, in general, the best bet for your safety, and that of the animal involved, is to leave wildlife alone, whenever possible keeping them truly wild. What does the phrase “keeping them truly wild” su...
  Raw candidates: naplanYear9, satReadingWriting
  Candidate overlap: no
- Raw index 215; collection `nysed-ela-2023::grade-8`
  Source id: nysed-ela-2023::grade-8::23
  Title: NYSED 2023 Grade 8 ELA
  Prompt: Multiple Choice C 1 NGLS.ELA.Content.NY-8.R.3Reading Standards for Literature Reading 0.76
  Answer evidence: Multiple Choice; correct=C; points=1; standard=NGLS.ELA.Content.NY-8.R.3Reading
  Raw candidates: naplanYear9, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 216; collection `nysed-ela-2023::grade-8`
  Source id: nysed-ela-2023::grade-8::24
  Title: NYSED 2023 Grade 8 ELA
  Prompt: Multiple Choice B 1 NGLS.ELA.Content.NY-8.R.2Reading Standards for Literature Reading 0.60
  Answer evidence: Multiple Choice; correct=B; points=1; standard=NGLS.ELA.Content.NY-8.R.2Reading
  Raw candidates: naplanYear9, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 238; collection `nysed-ela-2023::grade-8`
  Source id: nysed-ela-2023::grade-8::46
  Title: NYSED 2023 Grade 8 ELA
  Prompt: Constructed Response 4 NGLS.ELA.Content.NY-8.R.3Reading Standards for Informational TextWriting to Sources 2.28 0.57 *This item map is intended to identify the primary analytic skills necessary to successfully answer each question on the 2023 operational ELA test. However, each constructed-response question measures...
  Raw candidates: naplanYear9, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row

### nysed_ela_2024::grade-7

- Source: NYSED 2024 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2024`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 46
- Target family: school-reading-support
- Existing track ids: col-7th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 145; collection `nysed-ela-2024::grade-7`
  Source id: nysed-ela-2024::grade-7::1
  Title: NYSED 2024 Grade 7 ELA
  Prompt: ey spotted a newly hatched cicada hanging low to the ground, got down to its level and watched it dry out its new wings—for an entire hour .
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
- Raw index 156; collection `nysed-ela-2024::grade-7`
  Source id: nysed-ela-2024::grade-7::12
  Title: NYSED 2024 Grade 7 ELA
  Prompt: “If you go out and preach, preach, preach, they’ll tune you out, ” Y ork says. 13 Alt believes parents’ teaching is absorbed by infants, but there’s a certain point to stop doing it.
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
- Raw index 167; collection `nysed-ela-2024::grade-7`
  Source id: nysed-ela-2024::grade-7::23
  Title: NYSED 2024 Grade 7 ELA
  Prompt: Multiple Choice D 1 NGLS.ELA.Content.NY-7.R.2Reading 0.46
  Answer evidence: Multiple Choice; correct=D; points=1; standard=NGLS.ELA.Content.NY-7.R.2Reading
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 168; collection `nysed-ela-2024::grade-7`
  Source id: nysed-ela-2024::grade-7::24
  Title: NYSED 2024 Grade 7 ELA
  Prompt: Multiple Choice B 1 NGLS.ELA.Content.NY-7.R.6Reading 0.54
  Answer evidence: Multiple Choice; correct=B; points=1; standard=NGLS.ELA.Content.NY-7.R.6Reading
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 190; collection `nysed-ela-2024::grade-7`
  Source id: nysed-ela-2024::grade-7::46
  Title: NYSED 2024 Grade 7 ELA
  Prompt: Constructed Response 4 NGLS.ELA.Content.NY-7.R.3Writing to Sources 2.24 0.56 *This item map is intended to identify the primary analytic skills necessary to successfully answer each question on the 2024 operational ELA test. However, each constructed-response question measures proficiencies described in multiple sta...
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row

### nysed_ela_2024::grade-8

- Source: NYSED 2024 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2024`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 46
- Target family: school-reading-support
- Existing track ids: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 191; collection `nysed-ela-2024::grade-8`
  Source id: nysed-ela-2024::grade-8::1
  Title: NYSED 2024 Grade 8 ELA
  Prompt: e days glided into weeks, and still he fed upon the berries and gathered the golden pebbles. His father had ceased to send messengers to him, knowing that nothing but a long experience would teach his child the value of life’s many blessings, and that gold alone has no power to bless us. e father suﬀered much in k...
  Raw candidates: naplanYear9, satReadingWriting
  Candidate overlap: no
- Raw index 202; collection `nysed-ela-2024::grade-8`
  Source id: nysed-ela-2024::grade-8::12
  Title: NYSED 2024 Grade 8 ELA
  Prompt: e captain asked what she was doing so far from home. In a so, hushed voice, Lydia told him about the British plan. Captain Craig thanked her and raced to headquarters.
  Raw candidates: naplanYear9, satReadingWriting
  Candidate overlap: no
- Raw index 213; collection `nysed-ela-2024::grade-8`
  Source id: nysed-ela-2024::grade-8::23
  Title: NYSED 2024 Grade 8 ELA
  Prompt: Multiple Choice B 1 NGLS.ELA.Content.NY-8.R.4Reading 0.55
  Answer evidence: Multiple Choice; correct=B; points=1; standard=NGLS.ELA.Content.NY-8.R.4Reading
  Raw candidates: naplanYear9, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 214; collection `nysed-ela-2024::grade-8`
  Source id: nysed-ela-2024::grade-8::24
  Title: NYSED 2024 Grade 8 ELA
  Prompt: Multiple Choice C 1 NGLS.ELA.Content.NY-8.R.6Reading 0.65
  Answer evidence: Multiple Choice; correct=C; points=1; standard=NGLS.ELA.Content.NY-8.R.6Reading
  Raw candidates: naplanYear9, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 236; collection `nysed-ela-2024::grade-8`
  Source id: nysed-ela-2024::grade-8::46
  Title: NYSED 2024 Grade 8 ELA
  Prompt: Constructed Response 4 NGLS.ELA.Content.NY-8.R.6Writing to Sources 1.91 0.48 *This item map is intended to identify the primary analytic skills necessary to successfully answer each question on the 2024 operational ELA test. However, each constructed-response question measures proficiencies described in multiple sta...
  Raw candidates: naplanYear9, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row

### staar_2023_redesign::grade-6-rla

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 45
- Target family: school-reading-support
- Existing track ids: readingVocab6th
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 744; collection `staar-2023-redesign::grade-6-rla`
  Source id: staar-2023-redesign::grade-6-rla::1
  Title: Grade 6 RLA
  Prompt: From the humble penny to the heftier quarter, over the centuries many changes were made to how coins look and to the materials used. Early Production
  Answer evidence: 1 Rationale: This prompt will allow students to explain how India’s reactions to a series of surprises help develop her character. Students could begin in one paragraph by focusing on the first surprise introduced in ...
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 755; collection `staar-2023-redesign::grade-6-rla`
  Source id: staar-2023-redesign::grade-6-rla::12
  Title: Grade 6 RLA
  Prompt: Because our currency was such a complicated system, there is plenty of history behind it. Next time you get your hands on a $1 bill, look at the Great Seal of the United States on the back. The two images, featuring an eagle and a pyramid, first appeared on the dollar bill in 1935. An early design had the images rev...
  Answer evidence: 12 Multiple Choice 5.C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: frontmatter-or-copyright
- Raw index 766; collection `staar-2023-redesign::grade-6-rla`
  Source id: staar-2023-redesign::grade-6-rla::23
  Title: Grade 6 RLA
  Prompt: In the article “U.S. Currency Has a Rich History,” which statement best explains the organizational pattern used in paragraphs 8 and 9? A The problem of preventing counterfeiters was solved by using a special ink which has influenced the appearance of American currency ever since. B The color of the original America...
  Answer evidence: 23 Multiple Choice 8.Diii
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 777; collection `staar-2023-redesign::grade-6-rla`
  Source id: staar-2023-redesign::grade-6-rla::34
  Title: Grade 6 RLA
  Prompt: What is the BEST way to revise sentence 2 to avoid repeating ideas? A It can lower stress that helps people sleep well. B It can reduce stress for helping people sleep well. C It can lower and help people sleep well with stress. D It can reduce stress and help people sleep well. 57005
  Answer evidence: 34 Multiple Choice 10.C
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 788; collection `staar-2023-redesign::grade-6-rla`
  Source id: staar-2023-redesign::grade-6-rla::45
  Title: Grade 6 RLA
  Prompt: What change should be made in sentence 8? A Change decorate to decerate B Insert a comma after cookies C Change make to making D Change send to sent 57104
  Answer evidence: 45 Multiple Choice 10.Dviii
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### staar_2023_redesign::grade-8-rla

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 45
- Target family: school-reading-support
- Existing track ids: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 918; collection `staar-2023-redesign::grade-8-rla`
  Source id: staar-2023-redesign::grade-8-rla::1
  Title: Grade 8 RLA
  Prompt: When Ellison Nguyen was 4 years old, he got the chance to meet Thi Bui, the illustrator of one of his favorite books. He was so inspired by her work that he promptly wrote and drew his own picture book—“It came to me,” Ellison, now 6, explains simply.
  Answer evidence: 1 • A complete response will thoroughly explain the characteristics of the story that help identify it as realistic fiction. o Descriptions of the characters are similar to students in real life; set in a school with ...
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 929; collection `staar-2023-redesign::grade-8-rla`
  Source id: staar-2023-redesign::grade-8-rla::12
  Title: Grade 8 RLA
  Prompt: “It was great,” he says.
  Answer evidence: 12 Multiple Choice 2.B
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: very-short-prompt
- Raw index 940; collection `staar-2023-redesign::grade-8-rla`
  Source id: staar-2023-redesign::grade-8-rla::23
  Title: Grade 8 RLA
  Prompt: Read this paragraph about the article “Chicken of the Sea Is So Wacky—Of Course It Was Created by Kids.” Inspired by Thi Bui, the illustrator of one of his favorite books, four-year-old Ellison Nguyen decided to write his own book titled Chicken of the Sea. The book is about three chickens who go on an adventure. El...
  Answer evidence: 23 Multiple Choice 6.D
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 951; collection `staar-2023-redesign::grade-8-rla`
  Source id: staar-2023-redesign::grade-8-rla::34
  Title: Grade 8 RLA
  Prompt: Niko has included a sentence that does not belong in the fourth paragraph (sentences 15–19). Which sentence should he remove from this paragraph? A Sentence 15 B Sentence 17 C Sentence 18 D Sentence 19 Grade 8 RLA - REVISING 57288 90975
  Answer evidence: 34 Multiple Choice 10.Bii
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 962; collection `staar-2023-redesign::grade-8-rla`
  Source id: staar-2023-redesign::grade-8-rla::45
  Title: Grade 8 RLA
  Prompt: What change should be made in sentence 8? A Change He to It B Delete the comma after better C Change had to which had D Change affect to effect 57416 STAAR GRADE 8 Reading Language Arts PRACTICE
  Answer evidence: 45 Multiple Choice 10.Dvii
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### staar_2022::grade-8-rla

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 45
- Target family: school-reading-support
- Existing track ids: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 721; collection `staar-2022::grade-8-rla`
  Source id: staar-2022::grade-8-rla::1
  Title: Grade 8 RLA
  Prompt: Maybe I ought to just live in my tree—when I am up here, I can just be myself, by myself. Here, I don’t have to contend with Mom saying, “Cheer up, Millie. I’m sure you’ll make new friends. You just have to try a little harder.”
  Answer evidence: 1 1 Supporting Standard 2.A D
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 732; collection `staar-2022::grade-8-rla`
  Source id: staar-2022::grade-8-rla::12
  Title: Grade 8 RLA
  Prompt: Somehow I managed to struggle through the rest of the game. Not making eye contact with anyone helped, although I am sure my teammates were miffed that I kept bumping into them.
  Answer evidence: 12 2 Readiness Standard 7.B G
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 743; collection `staar-2022::grade-8-rla`
  Source id: staar-2022::grade-8-rla::23
  Title: Grade 8 RLA
  Prompt: I could have explained that because I went through school at an accelerated rate, I was never expected to fully participate in physical education. Yet if Emily knew I was a genius she might weird out on me like the rest of them. In a nanosecond I had to decide whether to tell the truth and risk losing a potential fr...
  Answer evidence: 23 3 Supporting Standard 9.C B
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
  Prompt quality flags: frontmatter-or-copyright
- Raw index 754; collection `staar-2022::grade-8-rla`
  Source id: staar-2022::grade-8-rla::34
  Title: Grade 8 RLA
  Prompt: Which key idea is supported by details in paragraph 7? F Babies should eat carrot-flavored cereal because it is a healthful food. G People’s food preferences can be influenced by other people in their lives. H People will like a new food after they have had a conversation about it. J Babies will dislike foods that t...
  Answer evidence: 34 3 Readiness Standard 5.G G
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no
- Raw index 765; collection `staar-2022::grade-8-rla`
  Source id: staar-2022::grade-8-rla::60
  Title: Grade 8 RLA
  Prompt: minutes each way. That is less than half the time it takes to get there by car! High-speed trains provide a method of reaching far distances in a short amount of time. Therefore, people who work far from where they live would be able to cut their travel time significantly. Travelers using a high-speed rail system ca...
  Raw candidates: satReadingWriting, logicCriticalThinking
  Candidate overlap: no

### nysed_math_2017::grade-3

- Source: NYSED 2017 Grades 3-8 Mathematics Released Questions (`nysed_math_2017`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 45
- Target family: school-math-support
- Existing track ids: class3Math
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 0; collection `nysed-math-2017::grade-3`
  Source id: nysed-math-2017::grade-3::0
  Title: NYSED 2017 Grade 3 Math
  Prompt: 1 Which recipe needs 3
  Raw candidates: naplanYear3, col-class-3-math
  Candidate overlap: no
  Prompt quality flags: very-short-prompt
- Raw index 11; collection `nysed-math-2017::grade-3`
  Source id: nysed-math-2017::grade-3::13
  Title: NYSED 2017 Grade 3 Math
  Prompt: Multiple Choice A 1 CCSS.Math.Content.3.MD.B.3 Measurement and Data 0.66
  Answer evidence: Multiple Choice; correct=A; points=1
  Raw candidates: naplanYear3, col-class-3-math
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 22; collection `nysed-math-2017::grade-3`
  Source id: nysed-math-2017::grade-3::27
  Title: NYSED 2017 Grade 3 Math
  Prompt: Multiple Choice A 1 CCSS.Math.Content.3.MD.C.7a Measurement and Data 0.91
  Answer evidence: Multiple Choice; correct=A; points=1
  Raw candidates: naplanYear3, col-class-3-math
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 33; collection `nysed-math-2017::grade-3`
  Source id: nysed-math-2017::grade-3::41
  Title: NYSED 2017 Grade 3 Math
  Prompt: Multiple Choice B 1 CCSS.Math.Content.3.NF.A.2b Number and Operations— Fractions 0.76
  Answer evidence: Multiple Choice; correct=B; points=1
  Raw candidates: naplanYear3, col-class-3-math
  Candidate overlap: no
  Prompt quality flags: answer-key-row, standards-table-row, answer-map-row
- Raw index 44; collection `nysed-math-2017::grade-3`
  Source id: nysed-math-2017::grade-3::70
  Title: NYSED 2017 Grade 3 Math
  Prompt: balloons. Andy said Mrs. Ruiz bought a total of 75 balloons. Andy is incorrect. What error did Andy make when calculating the total number of balloons? What is the total number of balloons Mrs. Ruiz bought? Show your work. Answer balloons Book 3
  Raw candidates: naplanYear3, col-class-3-math
  Candidate overlap: no
  Prompt quality flags: fragment-start

### nysed_ela_2017::grade-8

- Source: NYSED 2017 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2017`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 45
- Target family: school-reading-support
- Existing track ids: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 206; collection `nysed-ela-2017::grade-8`
  Source id: nysed-ela-2017::grade-8::1
  Title: NYSED 2017 Grade 8 ELA
  Prompt: Multiple Choice A 1 CCSS.ELA-Literacy.RL.8.4 Reading 0.72
  Raw candidates: naplanYear9, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 217; collection `nysed-ela-2017::grade-8`
  Source id: nysed-ela-2017::grade-8::23
  Title: NYSED 2017 Grade 8 ELA
  Prompt: Multiple Choice B 1 CCSS.ELA-Literacy.RI.8.8 Reading 0.77
  Raw candidates: naplanYear9, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 228; collection `nysed-ela-2017::grade-8`
  Source id: nysed-ela-2017::grade-8::34
  Title: NYSED 2017 Grade 8 ELA
  Prompt: Multiple Choice A 1 CCSS.ELA-Literacy.RI.8.5 Reading 0.70
  Raw candidates: naplanYear9, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 239; collection `nysed-ela-2017::grade-8`
  Source id: nysed-ela-2017::grade-8::45
  Title: NYSED 2017 Grade 8 ELA
  Prompt: Constructed Response 4 CCSS.ELA-Literacy.RI.8.2 Writing to Sources CCSS.ELA-Literacy.L.8.1, CCSS.ELA-Literacy.L.8.2, CCSS.ELA-Literacy.L.8.3, CCSS.ELA-Literacy.L.8.4 2.58 0.65 Book 3
  Raw candidates: naplanYear9, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row
- Raw index 250; collection `nysed-ela-2017::grade-8`
  Source id: nysed-ela-2017::grade-8::75
  Title: NYSED 2017 Grade 8 ELA
  Prompt: your own favorite flavor of pain. Book 1
  Raw candidates: naplanYear9, satReadingWriting
  Candidate overlap: no

### staar_2022::grade-7-math

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 44
- Target family: school-math-support
- Existing track ids: col-class-7-math
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 570; collection `staar-2022::grade-7-math`
  Source id: staar-2022::grade-7-math::0
  Title: Grade 7 Math
  Prompt: 1,0001,5002,000 Online Game Users C y x Total Number of Users Time (days) 2,000 1,500 1,000 500 102 3 4 Online Game Users B y x Total Number of Users Time (days) 1,000 750 500 250 100 20 30 40 Online Game Users D y x Total Number of Users Time (days) 4,000 3,000 2,000 1,000 204 68 Online Game Users Mathematics 34016_1
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
- Raw index 581; collection `staar-2022::grade-7-math`
  Source id: staar-2022::grade-7-math::11
  Title: Grade 7 Math
  Prompt: 11 11 1
  Answer evidence: 11 4 Readiness Standard 7.6(G) C
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: very-short-prompt
- Raw index 592; collection `staar-2022::grade-7-math`
  Source id: staar-2022::grade-7-math::22
  Title: Grade 7 Math
  Prompt: The price of a computer is $899.00. The sales tax rate is 7%. What is the sales tax on this computer in dollars and cents? Record your answer and fill in the bubbles on your answer document. Be sure to use the correct place value. Mathematics 33712_4
  Answer evidence: 22 4 Supporting Standard 7.13(A) 62.93 23 2 Readiness Standard 7.4(A) D
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
- Raw index 603; collection `staar-2022::grade-7-math`
  Source id: staar-2022::grade-7-math::33
  Title: Grade 7 Math
  Prompt: A student has a set of cards. Each card has a picture of one shape. The table shows the number of cards that have a picture of each shape. The student will randomly select one card from the set. Shape Cards Shape Number of Cards Circle 8 Pentagon 12 Rectangle 10 Square 6 Triangle 4 Which statement is true? A The pro...
  Answer evidence: 33 1 Supporting Standard 7.6(E) C
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
- Raw index 613; collection `staar-2022::grade-7-math`
  Source id: staar-2022::grade-7-math::80
  Title: Grade 7 Math
  Prompt: 60
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: very-short-prompt, numeric-only-prompt

### nysed_ela_2017::grade-6

- Source: NYSED 2017 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2017`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 44
- Target family: school-reading-support
- Existing track ids: readingVocab6th
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 116; collection `nysed-ela-2017::grade-6`
  Source id: nysed-ela-2017::grade-6::1
  Title: NYSED 2017 Grade 6 ELA
  Prompt: fronds: branches Book 2 Her dad had laughed. “He thought he was. But no. He’s King Charlemagne of France. Charles the Great! He made war on absolutely everybody. ” And now, here we were, only a week later, confronted with one of Charles the Great’s
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
- Raw index 127; collection `nysed-ela-2017::grade-6`
  Source id: nysed-ela-2017::grade-6::17
  Title: NYSED 2017 Grade 6 ELA
  Prompt: Multiple Choice A 1 CCSS.ELA-Literacy.RL.6.1 Reading 0.65
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 138; collection `nysed-ela-2017::grade-6`
  Source id: nysed-ela-2017::grade-6::34
  Title: NYSED 2017 Grade 6 ELA
  Prompt: Multiple Choice C 1 CCSS.ELA-Literacy.RI.6.2 Reading 0.53
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row, answer-map-row
- Raw index 149; collection `nysed-ela-2017::grade-6`
  Source id: nysed-ela-2017::grade-6::45
  Title: NYSED 2017 Grade 6 ELA
  Prompt: Constructed Response 4 CCSS.ELA-Literacy.RI.6.6 Writing to Sources CCSS.ELA-Literacy.L.6.1, CCSS.ELA-Literacy.L.6.2, CCSS.ELA-Literacy.L.6.3, CCSS.ELA-Literacy.L.6.4 2.38 0.59 Book 3
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: answer-key-row
- Raw index 159; collection `nysed-ela-2017::grade-6`
  Source id: nysed-ela-2017::grade-6::65
  Title: NYSED 2017 Grade 6 ELA
  Prompt: city for?’ ” Book 2 Why does the author compare how people treat “pets” and “pests” in the article? How does the author develop ways that people are helping “pests” throughout the article? Use details from the article to support your response. In your response, be sure to • explain why the author compares how people...
  Raw candidates: naplanYear7, satReadingWriting
  Candidate overlap: no
  Prompt quality flags: fragment-start

### staar_2025_rationales::grade-3-math

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status: map-now; Confidence: high; Risk score: 50
- Matched questions: 43
- Target family: school-math-support
- Existing track ids: class3Math
- Proposed tracks: none
- Review recommendation: Fix extraction quality before wiring; one or more samples do not look like usable questions.

Samples:

- Raw index 207; collection `staar-2025-rationale::grade-3-math`
  Source id: staar-2025-rationale::grade-3-math::0
  Title: Grade 3 Math
  Prompt: p.m., resulting in 5:
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: very-short-prompt
- Raw index 217; collection `staar-2025-rationale::grade-3-math`
  Source id: staar-2025-rationale::grade-3-math::10
  Title: Grade 3 Math
  Prompt: and will therefore be rounded using the digit in the ones place. Since Andrea has
  Answer evidence: 10
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
- Raw index 227; collection `staar-2025-rationale::grade-3-math`
  Source id: staar-2025-rationale::grade-3-math::20
  Title: Grade 3 Math
  Prompt: minutes from 6:
  Answer evidence: 20 Multiple Choice 3.3.6.C
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: very-short-prompt
- Raw index 228; collection `staar-2025-rationale::grade-3-math`
  Source id: staar-2025-rationale::grade-3-math::22
  Title: Grade 3 Math
  Prompt: Option D is correct To determine which statement is an example of using credit, the student should have recognized that credit is used when a need exceeds a person’s ability to pay for an item. Therefore, the person must borrow money from a lender, as represented by the example of getting a loan to pay for a car. Op...
  Answer evidence: 22 Multiple Choice 3.4.9.D
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: rationale-only
- Raw index 249; collection `staar-2025-rationale::grade-3-math`
  Source id: staar-2025-rationale::grade-3-math::94
  Title: Grade 3 Math
  Prompt: hours more during summer and winter combined than in the fall. This is an efficient way to solve the problem; however, other methods could be used to solve the problem correctly. Option A is incorrect The student likely understood that the number of hours spent hiking in the summer and the number of hours spent hiki...
  Raw candidates: naplanYear5, naplanYear7, high_algebra_1
  Candidate overlap: no
  Prompt quality flags: rationale-only, fragment-start


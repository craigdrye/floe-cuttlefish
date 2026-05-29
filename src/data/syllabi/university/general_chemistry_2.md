# General Chemistry II
**ID**: `generalChemistry2` · **Discipline**: Science · **Year**: University Freshman

## Course Aim
General Chemistry I asks "what is matter made of and how do we count it?" General Chemistry II asks the harder, more interesting questions: how *fast* does a reaction go, how *far* does it go, and which *direction* does nature actually prefer? This course is the pivot from descriptive chemistry to predictive chemistry. By the end you should be able to look at an unfamiliar reaction and reason about its rate, its equilibrium position, its spontaneity, and whether it can be harnessed to move electrons through a wire.

The intellectual spine of the semester is a single recurring idea seen from four angles: **kinetics** tells you the *path* and *speed*, **equilibrium** tells you the *destination*, **thermodynamics** tells you *why* that destination is favored, and **electrochemistry** shows the same free energy doing useful work. These are not four disconnected units to memorize separately; ΔG° = -RT ln K = -nFE°cell literally ties equilibrium, thermodynamics, and electrochemistry into one equation. A student who treats them as silos will pass exams by formula-matching and never understand chemistry. A student who sees the connections can derive what they forget.

The course is unapologetically quantitative, but the goal is never arithmetic for its own sake. Every calculation should end with a sentence in plain English: *the reaction is product-favored*, *the buffer resists base better than acid*, *the cell will run until the concentrations equalize*. We grade the interpretation as hard as the number, because in real labs and industry a confident answer with the wrong chemical meaning is worse than no answer at all.

## Course Design Notes
Route questions here that test chemical kinetics, chemical equilibrium, acid-base chemistry, aqueous solubility and complex-ion equilibria, the second and third laws and Gibbs free energy, electrochemistry, nuclear chemistry, coordination chemistry, and integrated quantitative problem solving at the first-year university level. This is the second-semester partner to General Chemistry I (stoichiometry, atomic structure, bonding, gases); send pure stoichiometry, periodicity, or Lewis-structure items there.

Design principles for authored content: (1) every quantitative item should have an explicit setup — balanced equation, the relevant rate/equilibrium/Nernst expression, stated assumptions, and units — so a student can reconstruct the reasoning, not just check a number; (2) distractors must encode *real misconceptions* (confusing Q with K, dropping the n in the Nernst equation, reporting pOH as pH, taking Ksp instead of √Ksp), never random near-misses; (3) prefer questions that force a conceptual decision (which way does it shift? is ΔG positive or negative?) over plug-and-chug; (4) keep numbers clean enough to do on paper, using standard constants (R = 8.314 J·mol⁻¹·K⁻¹ or 0.0821 L·atm·mol⁻¹·K⁻¹, F = 96 485 C·mol⁻¹, 0.0592 V at 25 °C). Anchor to OpenStax Chemistry 2e topic ordering so chapters map onto a real syllabus.

## Chapter 1: Reaction Rates and Rate Laws
- **Core questions**: What is the difference between average and instantaneous rate? How do you extract a rate law and overall order from initial-rate data, and what are the units of k for zero-, first-, and second-order reactions?
- **Key concepts**: Rate as change in concentration over time, relating rates of different species via stoichiometric coefficients, differential rate laws, reaction order, rate constant k and its order-dependent units, the method of initial rates.
- **Applied skills**: Determine the order in each reactant by comparing experimental runs; assemble the overall rate law; compute k with correct units; relate the rate of disappearance of a reactant to the rate of appearance of a product.
- **Common traps**: Reading stoichiometric coefficients as reaction orders (order is experimental, not from the balanced equation); forgetting that the units of k change with overall order; sign confusion between consumption (negative) and formation (positive) rates; comparing runs where two concentrations change at once.

## Chapter 2: Integrated Rate Laws and Half-Life
- **Core questions**: How do you tell zero-, first-, and second-order reactions apart from concentration-vs-time data? Why is the half-life of a first-order reaction independent of starting concentration, and how do the other orders behave?
- **Key concepts**: Integrated forms [A]t = [A]₀ - kt (zero), ln[A]t = ln[A]₀ - kt (first), 1/[A]t = 1/[A]₀ + kt (second); linear-plot test (which axis is straight); half-life expressions t½ = [A]₀/2k, 0.693/k, 1/(k[A]₀).
- **Applied skills**: Pick the order from which plot is linear; compute remaining concentration after a given time; calculate elapsed time to reach a target concentration; chain half-lives for first-order decay.
- **Common traps**: Using the first-order half-life formula for a non-first-order reaction; forgetting that first-order half-life is constant while second-order half-life grows as concentration drops; confusing the slope sign (zero/first negative, second positive); plugging a concentration ratio into the wrong integrated form.

## Chapter 3: Mechanisms, Collision Theory, and Temperature
- **Core questions**: How does a multistep mechanism produce an observed rate law, and how do you verify a proposed mechanism? How do activation energy and temperature control the rate constant?
- **Key concepts**: Elementary steps and molecularity, the rate-determining (slow) step, reaction intermediates vs catalysts, collision theory (frequency, orientation, energy), activation energy Ea, the transition state, reaction-coordinate diagrams, the Arrhenius equation and its two-temperature form, catalysis (homogeneous, heterogeneous, enzymatic).
- **Applied skills**: Derive the predicted rate law from the slow step (using a fast pre-equilibrium when needed); identify intermediates and catalysts; compute Ea from k at two temperatures; read forward vs reverse Ea and ΔE off a reaction-coordinate diagram.
- **Common traps**: Writing the rate law from overall stoichiometry instead of the slow step; treating an intermediate (made then consumed) as a catalyst (present at start, regenerated); assuming a catalyst shifts the equilibrium position (it only speeds approach to it); sign error in the Arrhenius two-point equation (rate *rises* with T).

## Chapter 4: Chemical Equilibrium
- **Core questions**: What does it mean for a reaction to be at dynamic equilibrium, and what does the magnitude of K tell you? How do you predict the direction of reaction and the disturbance response of a system?
- **Key concepts**: Dynamic equilibrium, the equilibrium constant Kc and Kp, the relationship Kp = Kc(RT)^Δn, pure solids and liquids omitted from K, the reaction quotient Q, ICE tables, the x-is-small approximation and when it fails (the 5% rule), Le Châtelier's principle for concentration, pressure/volume, and temperature changes.
- **Applied skills**: Compute K from equilibrium concentrations; use Q vs K to predict direction; solve for equilibrium concentrations with an ICE table; convert between Kc and Kp; predict and justify the shift after adding reagent, changing volume, or changing temperature.
- **Common traps**: Including solids or pure liquids in K; comparing Q and K backwards (Q < K shifts *forward*); assuming adding a catalyst or an inert gas at constant volume changes the equilibrium position; treating temperature like any other stress (it actually changes K itself, with direction set by the sign of ΔH).

## Chapter 5: Acids, Bases, and pH
- **Core questions**: How do the Brønsted-Lowry definitions identify conjugate pairs, and how do you compute pH for strong acids/bases, weak acids/bases, polyprotic acids, and salts?
- **Key concepts**: Brønsted-Lowry acids/bases and conjugate pairs, autoionization of water and Kw, pH and pOH (pH + pOH = 14 at 25 °C), strong vs weak electrolytes, Ka and Kb and their relationship KaKb = Kw, percent ionization, polyprotic acids (stepwise Ka), salt hydrolysis, the leveling effect.
- **Applied skills**: Identify conjugate acid-base pairs; compute pH of a strong acid/base directly; set up the weak-acid/weak-base equilibrium and solve (often with the x-small approximation); rank acid strength by Ka; predict whether a salt solution is acidic, basic, or neutral from its ions.
- **Common traps**: Reporting pOH when pH is asked (or vice versa); treating a weak acid as fully dissociated; assuming the conjugate base of a *strong* acid is basic (it is essentially neutral); forgetting that for a diprotic acid the second ionization is far weaker; using [H⁺] = concentration for a weak acid.

## Chapter 6: Buffers, Titrations, and Acid-Base Equilibria
- **Core questions**: How does a buffer resist pH change, and how do you design one for a target pH? How do you read and predict every region of a titration curve?
- **Key concepts**: The common-ion effect, buffer action and buffer capacity, the Henderson-Hasselbalch equation, choosing a conjugate pair near the target pH, titration curves for strong-strong, weak-strong, and polyprotic systems, equivalence vs half-equivalence point, indicator selection (pKₐ near equivalence pH).
- **Applied skills**: Compute buffer pH from the conjugate ratio; predict the pH change after adding strong acid/base to a buffer; locate the equivalence point pH (neutral, basic, or acidic depending on the system); identify pH = pKa at the half-equivalence point; choose an appropriate indicator.
- **Common traps**: Assuming every equivalence point is at pH 7 (only true for strong-strong); inverting the acid/base ratio in Henderson-Hasselbalch; using Henderson-Hasselbalch outside the buffer region; confusing buffer capacity (how much it can absorb) with buffer pH (where it sits); forgetting that the half-equivalence point is where pH = pKa.

## Chapter 7: Solubility and Complex-Ion Equilibria
- **Core questions**: How does Ksp set molar solubility, and how do the common-ion effect, pH, and complex-ion formation change it? When will a precipitate form?
- **Key concepts**: The solubility product Ksp, molar solubility and the stoichiometry that links them, Qsp vs Ksp for precipitation, the common-ion effect, pH-dependent solubility of salts with basic anions, selective precipitation, complex-ion formation and Kf, amphoterism.
- **Applied skills**: Convert between Ksp and molar solubility for 1:1, 1:2, and 2:1 salts; show that a common ion suppresses solubility; predict whether mixing two solutions precipitates a salt via Qsp; explain why hydroxides and carbonates dissolve more in acid; combine Ksp and Kf for a dissolving-by-complexation scenario.
- **Applied skills note**: stoichiometry matters — for AₓBᵧ, Ksp relates to solubility with the (x)(y) exponents, not a flat square root.
- **Common traps**: Reporting Ksp as the solubility (you need the appropriate root); using the same √Ksp formula for a 1:2 salt as for a 1:1 salt; ignoring the common ion already present in solution; assuming pH never affects solubility (it strongly does for basic anions); forgetting that complex formation *increases* solubility.

## Chapter 8: Entropy and the Second Law
- **Core questions**: What is entropy physically, and how do you predict the sign of ΔS for a process? How does the second law decide spontaneity for the *universe*, not just the system?
- **Key concepts**: Entropy as dispersal of energy and matter, the second law (ΔSuniverse > 0 for spontaneous change), the third law and absolute (standard molar) entropies, predicting ΔS° sign from phase changes and moles of gas, computing ΔS°rxn from standard molar entropies, ΔSsurroundings = -ΔHsys/T.
- **Applied skills**: Predict the sign of ΔS for melting, vaporization, dissolution, and gas-mole changes; compute ΔS°rxn = ΣS°products - ΣS°reactants; relate the surroundings' entropy change to the system's enthalpy and temperature; explain why a process can be spontaneous despite a negative system entropy.
- **Common traps**: Confusing "disorder" hand-waving with the actual gas-mole and phase reasoning; thinking standard entropies of elements are zero (only the *enthalpy* of formation of an element is zero — S° is positive); forgetting the temperature dependence of ΔSsurroundings; judging spontaneity from ΔSsystem alone instead of ΔSuniverse.

## Chapter 9: Gibbs Free Energy and Spontaneity
- **Core questions**: How does ΔG = ΔH - TΔS combine the two laws into a single system-only spontaneity test, and how do temperature, Q, and K enter? Why is ΔG° = -RT ln K the bridge between thermodynamics and equilibrium?
- **Key concepts**: Gibbs free energy and the meaning of its sign, the four ΔH/ΔS sign combinations and their temperature behavior, the crossover temperature T = ΔH/ΔS, standard ΔG°rxn from ΔG°f or from ΔH° and ΔS°, nonstandard ΔG = ΔG° + RT ln Q, the relationships ΔG° = -RT ln K and ΔG = 0 at equilibrium.
- **Applied skills**: Compute ΔG° and decide spontaneity; find the temperature at which a reaction becomes spontaneous; convert between ΔG° and K (and reason about whether K is large or small); use ΔG = ΔG° + RT ln Q to find the instantaneous driving force and direction.
- **Common traps**: Mixing energy units (ΔH in kJ, ΔS in J — convert before subtracting); confusing ΔG (sign tells current spontaneity) with ΔG° (a fixed reference tied to K); thinking ΔG° = 0 at equilibrium (it is *ΔG*, not ΔG°, that is zero); concluding a positive ΔG° means the reaction cannot proceed at all (it can, until Q = K).

## Chapter 10: Electrochemistry
- **Core questions**: How do you build and analyze a galvanic cell, compute its standard and nonstandard potential, and connect E°cell to ΔG° and K? How do electrolytic cells and Faraday's law let you compute mass deposited?
- **Key concepts**: Oxidation/reduction and half-reactions, balancing redox by half-reactions in acid and base, galvanic vs electrolytic cells, anode/cathode/salt bridge and electron flow, standard reduction potentials and E°cell = E°cathode - E°anode, the Nernst equation E = E° - (0.0592/n)log Q, concentration cells, ΔG° = -nFE°cell, electrolysis and Faraday's law, batteries and corrosion.
- **Applied skills**: Balance redox equations in acidic and basic solution; identify anode/cathode and electron-flow direction; compute E°cell from a table of reduction potentials; apply the Nernst equation for nonstandard or concentration cells; link E°cell to ΔG° and K; compute grams deposited from current and time.
- **Common traps**: Reversing the cathode-minus-anode subtraction (never flip the sign of the listed reduction potential — the equation already handles it); multiplying reduction potentials by stoichiometric coefficients (E° is intensive); dropping the electron count n in the Nernst equation or in ΔG° = -nFE°cell; mixing up galvanic (spontaneous, E°cell > 0) and electrolytic (forced, E°cell < 0).

## Chapter 11: Nuclear Chemistry
- **Core questions**: How do you balance nuclear equations and predict decay mode, and how does the constant nuclear half-life drive radioactive dating? Where does nuclear binding energy come from?
- **Key concepts**: Modes of decay (alpha, beta-minus, beta-plus/positron, electron capture, gamma), balancing mass and atomic numbers in nuclear equations, first-order kinetics of radioactive decay and constant half-life, mass defect and E = mc², binding energy per nucleon and the fission/fusion divide near iron.
- **Applied skills**: Identify the daughter nuclide and decay particle; balance a nuclear equation; compute remaining activity or mass after n half-lives; carbon-14 / radiometric dating calculations; reason qualitatively about why fusion of light nuclei and fission of heavy nuclei both release energy.
- **Common traps**: Failing to conserve both mass number and atomic number; confusing beta-minus (n → p, Z increases) with positron emission/electron capture (Z decreases); applying chemical activation-energy thinking to nuclear stability; assuming heavier always means more stable (binding energy *per nucleon* peaks near iron-56).

## Chapter 12: Coordination Chemistry and Chemistry II Studio
- **Core questions**: How do you determine the oxidation state and coordination number of a metal center, name a complex, and use crystal-field theory to explain color and magnetism? How do all the semester's tools combine on one real system?
- **Key concepts**: Coordination complexes, ligands and denticity, coordination number, metal oxidation state, IUPAC naming, isomerism (geometric and optical), crystal-field theory for octahedral fields (t2g below eg, splitting Δo), high-spin vs low-spin and the spectrochemical series, integrated multi-topic problem solving.
- **Applied skills**: Assign the oxidation state of the central metal from ligand charges and overall charge; determine coordination number; predict octahedral d-orbital occupancy and high/low spin from Δo vs pairing energy; relate Δo to absorbed wavelength and observed color; integrate kinetics, equilibrium, thermodynamics, and electrochemistry on a single process.
- **Common traps**: Forgetting that neutral ligands (NH₃, H₂O) do not change the metal's oxidation-state arithmetic while anionic ligands (Cl⁻, CN⁻) do; confusing coordination number with oxidation state; placing eg below t2g (in octahedral fields eg is *higher*); assuming the observed color equals the absorbed color (it is the complement).

## Capstone
Students choose one real reaction or process — an industrial synthesis (Haber-Bosch, contact process), a battery or fuel cell, a biological buffer system, an environmental remediation, or a radiometric dating problem — and analyze it through all four lenses of the course. Required: a rate analysis (rate law, catalysis, temperature sensitivity), an equilibrium analysis (K, Le Châtelier levers an engineer could pull), a thermodynamic verdict (ΔG° sign, temperature dependence, link to K), and either an electron-transfer or acid-base treatment as appropriate. The deliverable is a short technical brief that ends with a defensible, quantitatively supported recommendation — e.g., "run the contact process near 450 °C as a kinetics-vs-yield compromise, not at the thermodynamically ideal low temperature." Students must explicitly show where ΔG° = -RT ln K = -nFE°cell unifies their separate analyses.

## Assessment Ideas
- Mixed calculation sets that demand setup, explicit assumptions, units, and a one-sentence chemical interpretation.
- Data-driven kinetics and equilibrium labs: extract a rate law or K from real measurements and defend the fit.
- Titration, solubility, and electrochemistry practical writeups with curve interpretation and procedural critique.
- Fast conceptual checks contrasting Q vs K, ΔG vs ΔG°, rate vs extent, and intermediate vs catalyst.
- A cumulative oral or written defense of the capstone system showing the four-lens unification.

## Research Notes
- OpenStax Chemistry 2e: https://openstax.org/books/chemistry-2e/pages/index
- ACS Standards and Guidelines for chemistry education: https://www.acs.org/education/policies.html
- 2023 ACS Guidelines for Undergraduate Chemistry Programs: https://www.acs.org/content/dam/acsorg/education/standards-guidelines/approval-program/1-guidelines-approved-jan2023v3.pdf
- Chemistry LibreTexts (General Chemistry Map): https://chem.libretexts.org/Bookshelves/General_Chemistry

// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the AP Science roadmaps: AP Biology (50), AP Chemistry (50), AP Physics (50).
//
// AP_SCIENCE_SUB_TOPICS groups each bank's questions into AP-aligned units
// (Biology = 8 units + cross-unit; Chemistry = 9 units; Physics = 15 topic clusters).
//
// AP_SCIENCE_MENTOR_HINTS overrides the generic scaffold hint with a one-line
// second-person nudge in the voice of an AP teacher who knows the exam traps.
//
// AP_SCIENCE_CORRECT_SHORTENED trims `correct` strings flagged by the length
// heuristic audit (correct ≥1.8x longer than longest wrong AND ≥20 chars gap).
// Trimmed explanatory clauses are reattached via `lessonAddendum` so no info is lost.

export const AP_SCIENCE_SUB_TOPICS: Record<number, string> = {
  // ============================== AP BIOLOGY ==============================
  // Unit 1: Chemistry of Life
  4400000: 'Chemistry of Life',
  4400001: 'Chemistry of Life',
  4400002: 'Chemistry of Life',
  4400003: 'Chemistry of Life',
  4400004: 'Chemistry of Life',
  4400005: 'Chemistry of Life',
  // Unit 2: Cell Structure & Function
  4400006: 'Cell Structure & Function',
  4400007: 'Cell Structure & Function',
  4400008: 'Cell Structure & Function',
  4400009: 'Cell Structure & Function',
  4400010: 'Cell Structure & Function',
  4400011: 'Cell Structure & Function',
  // Unit 3: Cellular Energetics
  4400012: 'Cellular Energetics',
  4400013: 'Cellular Energetics',
  4400014: 'Cellular Energetics',
  4400015: 'Cellular Energetics',
  4400016: 'Cellular Energetics',
  4400017: 'Cellular Energetics',
  // Unit 4: Cell Communication & Cell Cycle
  4400018: 'Cell Communication & Cell Cycle',
  4400019: 'Cell Communication & Cell Cycle',
  4400020: 'Cell Communication & Cell Cycle',
  4400021: 'Cell Communication & Cell Cycle',
  4400022: 'Cell Communication & Cell Cycle',
  4400023: 'Cell Communication & Cell Cycle',
  // Unit 5: Heredity
  4400024: 'Heredity',
  4400025: 'Heredity',
  4400026: 'Heredity',
  4400027: 'Heredity',
  4400028: 'Heredity',
  4400029: 'Heredity',
  // Unit 6: Gene Expression & Regulation
  4400030: 'Gene Expression & Regulation',
  4400031: 'Gene Expression & Regulation',
  4400032: 'Gene Expression & Regulation',
  4400033: 'Gene Expression & Regulation',
  4400034: 'Gene Expression & Regulation',
  4400035: 'Gene Expression & Regulation',
  // Unit 7: Natural Selection
  4400036: 'Natural Selection',
  4400037: 'Natural Selection',
  4400038: 'Natural Selection',
  4400039: 'Natural Selection',
  4400040: 'Natural Selection',
  4400041: 'Natural Selection',
  // Unit 8: Ecology
  4400042: 'Ecology',
  4400043: 'Ecology',
  4400044: 'Ecology',
  4400045: 'Ecology',
  4400046: 'Ecology',
  4400047: 'Ecology',
  // Cross-Unit Synthesis
  4400048: 'Cross-Unit Synthesis',
  4400049: 'Cross-Unit Synthesis',

  // ============================== AP CHEMISTRY ==============================
  // Unit 1: Atomic Structure & Properties
  4400100: 'Atomic Structure & Properties',
  4400101: 'Atomic Structure & Properties',
  4400102: 'Atomic Structure & Properties',
  4400103: 'Atomic Structure & Properties',
  4400104: 'Atomic Structure & Properties',
  4400105: 'Atomic Structure & Properties',
  // Unit 2: Molecular & Ionic Compound Structure
  4400106: 'Molecular & Ionic Compound Structure',
  4400107: 'Molecular & Ionic Compound Structure',
  4400108: 'Molecular & Ionic Compound Structure',
  4400109: 'Molecular & Ionic Compound Structure',
  4400110: 'Molecular & Ionic Compound Structure',
  4400111: 'Molecular & Ionic Compound Structure',
  // Unit 3: Intermolecular Forces
  4400112: 'Intermolecular Forces',
  4400113: 'Intermolecular Forces',
  4400114: 'Intermolecular Forces',
  4400115: 'Intermolecular Forces',
  4400116: 'Intermolecular Forces',
  // Unit 4: Chemical Reactions
  4400117: 'Chemical Reactions',
  4400118: 'Chemical Reactions',
  4400119: 'Chemical Reactions',
  4400120: 'Chemical Reactions',
  4400121: 'Chemical Reactions',
  4400122: 'Chemical Reactions',
  // Unit 5: Kinetics
  4400123: 'Kinetics',
  4400124: 'Kinetics',
  4400125: 'Kinetics',
  4400126: 'Kinetics',
  4400127: 'Kinetics',
  4400128: 'Kinetics',
  // Unit 6: Thermodynamics
  4400129: 'Thermodynamics',
  4400130: 'Thermodynamics',
  4400131: 'Thermodynamics',
  4400132: 'Thermodynamics',
  4400133: 'Thermodynamics',
  4400134: 'Thermodynamics',
  // Unit 7: Equilibrium
  4400135: 'Equilibrium',
  4400136: 'Equilibrium',
  4400137: 'Equilibrium',
  4400138: 'Equilibrium',
  4400139: 'Equilibrium',
  4400140: 'Equilibrium',
  // Unit 8: Acids & Bases
  4400141: 'Acids & Bases',
  4400142: 'Acids & Bases',
  4400143: 'Acids & Bases',
  4400144: 'Acids & Bases',
  4400145: 'Acids & Bases',
  4400146: 'Acids & Bases',
  // Unit 9: Electrochem & Thermo Applications
  4400147: 'Electrochem & Thermo Applications',
  4400148: 'Electrochem & Thermo Applications',
  4400149: 'Electrochem & Thermo Applications',

  // ============================== AP PHYSICS ==============================
  // Kinematics
  4400200: 'Kinematics',
  4400201: 'Kinematics',
  4400202: 'Kinematics',
  4400203: 'Kinematics',
  // Forces & Newton's Laws
  4400204: "Forces & Newton's Laws",
  4400205: "Forces & Newton's Laws",
  4400206: "Forces & Newton's Laws",
  // Energy & Work
  4400207: 'Energy & Work',
  4400208: 'Energy & Work',
  4400209: 'Energy & Work',
  // Momentum & Collisions
  4400210: 'Momentum & Collisions',
  4400211: 'Momentum & Collisions',
  4400212: 'Momentum & Collisions',
  // Circular Motion & Gravitation
  4400213: 'Circular Motion & Gravitation',
  4400214: 'Circular Motion & Gravitation',
  4400215: 'Circular Motion & Gravitation',
  // Simple Harmonic Motion
  4400216: 'Simple Harmonic Motion',
  4400217: 'Simple Harmonic Motion',
  4400218: 'Simple Harmonic Motion',
  // Torque & Rotation
  4400219: 'Torque & Rotation',
  4400220: 'Torque & Rotation',
  4400221: 'Torque & Rotation',
  // Fluids
  4400222: 'Fluids',
  4400223: 'Fluids',
  4400224: 'Fluids',
  // Thermodynamics
  4400225: 'Thermodynamics',
  4400226: 'Thermodynamics',
  4400227: 'Thermodynamics',
  // Waves & Sound
  4400228: 'Waves & Sound',
  4400229: 'Waves & Sound',
  4400230: 'Waves & Sound',
  // Electrostatics
  4400231: 'Electrostatics',
  4400232: 'Electrostatics',
  4400233: 'Electrostatics',
  // DC Circuits
  4400234: 'DC Circuits',
  4400235: 'DC Circuits',
  4400236: 'DC Circuits',
  // Magnetism
  4400237: 'Magnetism',
  4400238: 'Magnetism',
  4400239: 'Magnetism',
  4400240: 'Magnetism',
  // Optics
  4400241: 'Optics',
  4400242: 'Optics',
  4400243: 'Optics',
  4400244: 'Optics',
  // Modern Physics
  4400245: 'Modern Physics',
  4400246: 'Modern Physics',
  4400247: 'Modern Physics',
  4400248: 'Modern Physics',
  4400249: 'Modern Physics',
}

export const AP_SCIENCE_MENTOR_HINTS: Record<number, string> = {
  // ============================== AP BIOLOGY ==============================
  4400000: "Water's emergent properties trace back to one signature: H bonded to N/O/F creating partial charges that attract neighbors. Don't confuse intra- with intermolecular bonds.",
  4400001: 'Lock in the four pairings before exam day: carbs/monosaccharides, proteins/amino acids, nucleic acids/nucleotides, lipids/fatty acids+glycerol. AP loves swapping monomers in distractors.',
  4400002: 'Build polymers, lose water (dehydration). Break polymers, add water (hydrolysis). The bond name matches the monomer class — glycosidic for sugars, peptide for amino acids.',
  4400003: 'A change to amino acid identity IS a change to primary structure by definition. Higher-order folding shifts are downstream effects, not the proximate change.',
  4400004: 'pH is logarithmic: each unit = factor of 10 in [H+]. A 2-unit drop means 100× more H+, not "2× more" or "twice as acidic".',
  4400005: "Carbon's superpower is four valence electrons enabling four covalent bonds — chains, rings, branches. Not ionic, not noble-gas behavior.",
  4400006: 'Trace the secretory path from ribosome outward: rough ER → Golgi → vesicle → membrane. Mitochondria and chloroplasts are NOT endomembrane stops.',
  4400007: 'Volume scales as r^3 but surface area as r^2. As cells grow, demand outruns exchange — that ratio is why cells stay small or fold their membranes.',
  4400008: 'Water moves toward higher solute concentration. Cell at 0.3 M in 0.1 M means outside is hypotonic — water rushes in, turgor rises. Don\'t flip "hyper" and "hypo".',
  4400009: 'Against a gradient = needs ATP. The Na/K pump is the classic primary active transport example — count the ions and the directions.',
  4400010: 'Unsaturated kinks prevent tight packing; cholesterol buffers both extremes. Together they keep membranes fluid across temperature ranges.',
  4400011: 'Endosymbiotic evidence: own DNA (circular), own ribosomes (70S = prokaryote-sized), double membrane, binary fission. The DNA + ribosomes pair is the strongest single line.',
  4400012: 'Enzymes lower activation energy — they do NOT change delta-G or shift equilibrium. They only speed up arrival at the same destination.',
  4400013: 'Competitive inhibitors fight for the active site, so flooding with substrate wins. Noncompetitive bind elsewhere and cannot be outcompeted.',
  4400014: 'Glycolysis: cytoplasm, net 2 ATP, 2 NADH, 2 pyruvate. Memorize this triplet — it is the gateway to every respiration question.',
  4400015: 'ATP synthase is powered by proton flow down the gradient from intermembrane space to matrix. The ETC builds the gradient; synthase cashes it in.',
  4400016: 'Fermentation skips Krebs and the ETC entirely, so ATP yield collapses from ~30 to 2 per glucose. NAD+ regeneration is what keeps glycolysis going.',
  4400017: 'Light reactions produce ATP and NADPH; the Calvin cycle spends them to fix CO2 into G3P. Always pair "products of light reactions" with "inputs to Calvin".',
  4400018: 'The canonical trio: reception, transduction, response. Distractors swap in transcription/translation language — those are downstream, not the named stages.',
  4400019: 'Second messengers like cAMP exist to amplify a single ligand binding into thousands of downstream events. PKA is the usual partner.',
  4400020: 'G2/M checks DNA integrity before mitosis. G1/S checks for damage and conditions before commitment to S. Pair each checkpoint with what it gates.',
  4400021: 'p53 normally pauses or kills damaged cells. Lose it and damaged cells keep dividing — that is how loss-of-function tumor suppressors drive cancer.',
  4400022: 'Crossing over and homolog pairing happen only in meiosis (prophase I). Mitosis never pairs homologs.',
  4400023: 'RTKs dimerize on ligand binding, then trans-autophosphorylate tyrosines to create docking sites for relay proteins. Dimerization first, then phosphorylation.',
  4400024: 'Pp × pp is a test cross — half offspring carry the dominant allele, half are recessive. Write the Punnett if in doubt.',
  4400025: 'Two independently assorting heterozygotes always give 9:3:3:1 in F2. If the ratio drifts, suspect linkage or epistasis.',
  4400026: 'X-linked sons get their single X from mom. A heterozygous carrier mother yields 1/2 affected sons regardless of dad.',
  4400027: 'Linked genes co-segregate, giving recombination frequencies below 50%. The closer the linkage, the lower the recombination.',
  4400028: 'Nondisjunction = failure to separate during meiosis. It produces n+1 or n-1 gametes. Trisomies and monosomies trace back to this single error.',
  4400029: 'Autosomal dominant: equal sex ratio, every generation, no skipping. If affected children always have an affected parent, suspect dominant.',
  4400030: 'DNA → RNA → protein. Transcription in the nucleus, translation at the ribosome. Memorize the arrows and what enzyme catalyzes each.',
  4400031: 'A single insertion in a coding region shifts the reading frame, garbling every codon downstream. That is the textbook frameshift.',
  4400032: 'Lac operon ON requires BOTH: lactose present (releases repressor) AND glucose low (CAP-cAMP active). One alone is not enough.',
  4400033: 'Eukaryotic mRNA processing trio: 5\' cap, 3\' poly-A tail, splice out introns. All three before nuclear export.',
  4400034: 'Transcription factors bind DNA (promoters or enhancers) to recruit or block RNA Pol II. They are not enzymes that catalyze the chemistry of transcription.',
  4400035: 'CpG methylation in promoters silences genes by recruiting repressive chromatin. It is reversible — sequence stays intact, expression flips.',
  4400036: "Hardy-Weinberg: if q^2 = 0.16, q = 0.4 and p = 0.6. Always take the square root before solving for the dominant allele frequency.",
  4400037: "All five HW conditions must hold: no selection, no mutation, no migration, random mating, large N. Violate any one and frequencies shift.",
  4400038: 'Allopatric = geographic isolation drives divergence. Sympatric = isolation arises without physical separation (polyploidy, niche).',
  4400039: 'Mate at different times = temporal. Different places = habitat. Different rituals = behavioral. All are PREzygotic.',
  4400040: 'Founder effect is genetic drift from a small founding sample — allele frequencies drift just by sampling chance, no selection needed.',
  4400041: 'Most recent common ancestor = the node where two lineages last share a branch. Tips on opposite ends share an MRCA further back, not at a tip.',
  4400042: 'Logistic growth flattens at K because limited resources push birth and death toward balance. Exponential ignores K entirely.',
  4400043: 'r-selected: many offspring, little care, short life, disturbed habitats. K-selected: few offspring, heavy investment, stable habitats.',
  4400044: 'About 10% of energy moves up each trophic level — the rest is heat, respiration, or uneaten. That is why food chains are short.',
  4400045: 'Only nitrogen has a fixation step (N2 → NH3) by bacteria. Carbon does not need biological fixation of N2.',
  4400046: 'A keystone species has disproportionate effect relative to its abundance. Pisaster on mussels is the textbook example.',
  4400047: 'Density-dependent factors intensify as the population grows: disease, competition, predation. Weather and fires are density-independent.',
  4400048: 'Mutation creates variation; selection acts on what already exists. Antibiotics do not induce adaptive mutations — they filter them.',
  4400049: 'Trace energy in three transformations: photosynthesis (light → glucose), respiration (glucose → ATP), trophic transfer (mostly heat loss).',

  // ============================== AP CHEMISTRY ==============================
  4400100: "Weighted average mass = sum of (mass × fractional abundance). 63 × 0.692 + 65 × 0.308 ≈ 63.6 — that mass and pattern fingerprint copper.",
  4400101: 'Read PES peaks right-to-left as 1s, 2s, 2p, 3s, 3p... Heights = electrons per orbital. 2:2:6:2:1 reads as 1s² 2s² 2p⁶ 3s¹ → sodium.',
  4400102: 'Coulombic force scales as (q1·q2)/r². Higher charges win — Mg²⁺/O²⁻ beats any +1/−1 pair regardless of size.',
  4400103: "O loses an electron more easily than N because removing a paired 2p electron relieves repulsion. N's half-filled 2p subshell is unusually stable.",
  4400104: 'Look for the BIG jump in successive IEs. After two easy electrons leave, the third comes from a core shell — that gap signals group 2.',
  4400105: 'For transition metals, remove the 4s electrons FIRST when ionizing. Fe is [Ar] 4s² 3d⁶, so Fe²⁺ is [Ar] 3d⁶.',
  4400106: 'Formal charge = valence − (lone pair e) − ½(bonding e). For sulfate, expand the octet so S carries 0 and only single-bonded O atoms keep −1.',
  4400107: 'SF4 has 5 electron domains (4 bonds + 1 lone pair) → see-saw. Asymmetry from the lone pair makes it polar despite electronegative F atoms.',
  4400108: 'sp2 = ~120°, but lone pair on central O compresses to ~117°. Resonance gives equivalent O-O bonds of order 1.5, not alternating single/double.',
  4400109: "Lone pairs squeeze bond angles harder than bonding pairs. 4 bond pairs (CH4) > 3 bonds + 1 LP (NH3) > 2 bonds + 2 LP (H2O).",
  4400110: 'HCN has H-C-≡N. The triple bond = 1 sigma + 2 pi. So total: 2 sigma (H-C and one of C-N) + 2 pi.',
  4400111: 'Polar bonds + symmetric geometry = nonpolar molecule. CO2 is linear; dipoles cancel as vectors. Always check geometry, not just bonds.',
  4400112: 'Ionic always beats molecular. Among molecular: H-bonding > polar > nonpolar. Within nonpolar, more electrons wins via stronger LDFs.',
  4400113: 'Ethanol has O-H so it hydrogen-bonds; dimethyl ether has C-O-C with no O-H. Weaker IMFs = higher vapor pressure.',
  4400114: 'LDF strength scales with electron count and polarizability. Bigger, fluffier electron clouds = stronger dispersion. I2 vastly out-LDFs F2.',
  4400115: 'Like dissolves like. Hexane is nonpolar, so it dissolves nonpolar solutes — I2, not ionic or H-bonding species.',
  4400116: 'Real gases deviate from ideal when molecules are forced close (high P) or move slow (low T) — IMFs and molecular volume start mattering.',
  4400117: 'Find the limiting reagent first: convert each reactant to mol, divide by coefficient, smaller wins. Then run stoichiometry from there.',
  4400118: 'Percent yield = (actual / theoretical) × 100. Always plug actual mass into the numerator — never moles vs grams.',
  4400119: 'Net ionic equation: drop spectators (Na+ and NO3- here). What remains is the actual chemistry — precipitate formation.',
  4400120: 'Sum of oxidation numbers = ion charge. For MnO4-: 4 O at -2 = -8, so Mn = +7 to give net -1.',
  4400121: 'OIL RIG: oxidation is loss, reduction is gain (of electrons). Zn: 0 → +2 (lost e, oxidized). H+: +1 → 0 (gained e, reduced).',
  4400122: 'Empirical formula: convert masses to moles, divide all by the smallest, get whole-number ratio. C:H:O ratio of 1:2:1 here gives CH2O.',
  4400123: '[A] doubles → rate ×4 means order 2 in A. [B] doubles → no change means order 0 in B. Rate = k[A]^2.',
  4400124: "First-order half-life = ln(2)/k, INDEPENDENT of concentration. Plug k = 0.0231: t½ ≈ 30 min, and it stays 30 min throughout.",
  4400125: 'First-order: ln[A] vs t is linear. Second-order: 1/[A] vs t is linear. Zero-order: [A] vs t is linear. Memorize the trio.',
  4400126: 'k = A e^(-Ea/RT). Higher T → exponentially more collisions clear the Ea barrier. The exponential is the key word — not "linearly".',
  4400127: 'For a slow first step, the rate law comes straight from its stoichiometry: rate = k[A][B]. No need for pre-equilibrium math when step 1 is rate-determining.',
  4400128: 'Catalysts lower Ea by providing a new pathway. They do NOT change delta-H, delta-G, or K — only the route.',
  4400129: "Hess's law: reverse and add target equations. Target = (1) − (2): C + ½O2 → CO with delta-H = -394 - (-283) = -111 kJ.",
  4400130: 'delta-H = (bonds broken) − (bonds formed). Broken: H-H + Cl-Cl = 679. Formed: 2(H-Cl) = 862. Net: 679 - 862 = -183.',
  4400131: 'More moles of gas = more entropy. Liquid → 3 gas molecules is unambiguously +delta-S. Track moles of gas, not total moles.',
  4400132: 'delta-G = delta-H − T·delta-S. When both are positive, raising T eventually flips delta-G negative. Crossover at T = delta-H/delta-S.',
  4400133: 'Heat lost by metal = heat gained by water. m·c·delta-T balance. Don\'t confuse "delta-T metal" (70°) with "delta-T water" (5°) — they\'re different.',
  4400134: 'delta-Hf = 0 only for elements in their standard state (O2(g), N2(g), C(graphite), etc.). Compounds and allotropes off-standard are not zero.',
  4400135: 'For exothermic, heat is a product. Raise T = stress on product side → shift left, K decreases. K changes only with T, never with concentration.',
  4400136: 'Q > K means too much product; reaction runs reverse to consume product. Q < K runs forward. Compare them and let Q chase K.',
  4400137: 'ICE table for N2O4 ↔ 2 NO2: K = (2x)^2 / (1 - x) = 4. Solve the quadratic (small-x fails) → x ≈ 0.62, [NO2] ≈ 1.24 M.',
  4400138: 'Common ion effect: adding Cl- pushes equilibrium back to AgCl(s), lowering solubility. 0.10 M NaCl provides the strongest common ion.',
  4400139: 'Compress gas → shift toward FEWER moles. 2 SO2 + O2 (3 mol) → 2 SO3 (2 mol) shifts right.',
  4400140: 'Kp = Kc (RT)^(delta-n). delta-n = 2 - 4 = -2. Kp = 0.061 × (0.0821 × 500)^(-2) ≈ 3.6 × 10^-5.',
  4400141: 'Strong acid fully ionizes: [H+] = [HCl] = 0.025. pH = -log(0.025) ≈ 1.60. No ICE table needed.',
  4400142: 'Ka · Kb = Kw = 10^-14. So Kb = 10^-14 / 1.8×10^-5 ≈ 5.6 × 10^-10. Memorize Kw at 25°C.',
  4400143: 'Henderson-Hasselbalch: pH = pKa + log([A-]/[HA]) = 4.74 + log(0.40/0.20) = 4.74 + 0.30 ≈ 5.04.',
  4400144: 'Weak acid + strong base equivalence point pH > 7 because the conjugate base hydrolyzes. Never assume the equivalence point is pH 7.',
  4400145: 'Pick an indicator whose pKa is near the equivalence-point pH. Weak acid + strong base → equivalence > 7 → phenolphthalein (pKa ~9).',
  4400146: 'Strong = full ionization (HCl, HNO3, H2SO4...). Weak = partial ionization (acetic, etc.). It is about the extent, not the concentration.',
  4400147: 'E_cell = E_cathode - E_anode (both as reductions). +0.34 - (-0.76) = +1.10 V. Zn anode (oxidized), Cu cathode (reduced).',
  4400148: 'delta-G = -RT ln K. Negative delta-G means K > 1 (products favored). At -50 kJ/mol, K is on the order of 10^8 — much greater than 1.',
  4400149: 'Nernst: E = E° - (RT/nF) ln Q. Increase product → increase Q → reduce E. The cell potential decays as products accumulate.',

  // ============================== AP PHYSICS ==============================
  4400200: 'Speed uses distance; velocity uses displacement. Closed loop = zero displacement = zero average velocity, even with high speed.',
  4400201: 'Time of flight (returning to launch height): t = 2 v sin(theta) / g. Here 2 × 20 × 0.5 / 10 = 2.0 s.',
  4400202: 'Acceleration = slope of v-t graph. Slope = (final v - initial v)/delta-t = (-2 - 6)/4 = -2 m/s^2.',
  4400203: 'In vacuum, only gravity acts. Mass cancels in F = ma when F = mg, so all objects fall at g regardless of mass.',
  4400204: 'On an incline, N = mg·cos(theta), NOT mg. Resolve weight into perpendicular and parallel components first.',
  4400205: 'Atwood: a = (m2 - m1)g / (m1 + m2) = (5-3)(10)/8 = 2.5 m/s^2. The heavier side pulls the lighter side up.',
  4400206: 'mu_s > mu_k, so the moment sliding begins, friction force DROPS and the net force jumps — the crate accelerates suddenly.',
  4400207: 'Work-energy theorem: W = delta-KE. Constant force over distance: W = F·d = 6·3 = 18 J → final KE = 18 J (started at rest).',
  4400208: 'Use energy conservation: mgh = 10(1)(5) = 50 J enters the friction patch. Friction must dissipate ALL of it to stop the block.',
  4400209: 'Spring energy → kinetic: ½kx² = ½mv². 100(0.01)/2 = 1 J = ¼(0.5)v² → v² = 4, v = 2 m/s.',
  4400210: 'Elastic + equal masses + one at rest: the moving cart STOPS and the struck cart leaves at the original speed. Classic result, memorize it.',
  4400211: 'Impulse = change in momentum. delta-p = 0.2(−3 − 5) = −1.6 kg·m/s. F·t = -1.6 → F = -80 N (opposite original motion).',
  4400212: 'Perfectly inelastic: m1·v1 = (m1+m2)·v_final. 1500(20)/2500 = 12 m/s east.',
  4400213: 'Centripetal acceleration always points TOWARD the center. Magnitude v²/r. Constant speed still means accelerating direction.',
  4400214: "Kepler's third: T² ∝ r³. So T ∝ r^(3/2). r×4 → T × 4^(3/2) = 8.",
  4400215: 'On a banked turn with no friction, only the NORMAL force has a horizontal component, and that component supplies centripetal force.',
  4400216: 'Period of mass-spring: T = 2π√(m/k). Independent of amplitude. Doubling A leaves T unchanged.',
  4400217: 'Pendulum period: T = 2π√(L/g). On the Moon, g is 1/6 of Earth → T scales by √6 ≈ 2.45. So 2.0 × 2.45 ≈ 4.9 s.',
  4400218: '½kA² = ½mv²_max. Solve for v_max = A·√(k/m) = 0.1·√(400) = 2 m/s.',
  4400219: 'Torque = rF·sin(theta). 2·50·sin(30) = 50 N·m. Only the perpendicular component of F contributes.',
  4400220: "Angular momentum L = Iω conserved → ω triples when I → I/3. KE = ½Iω², which becomes ½(I/3)(3ω)² = 3·(½Iω²). She does positive work.",
  4400221: "Hollow shell has larger I/(mr²) so MORE energy goes into rotation, less into translation. The solid sphere wins the race.",
  4400222: 'Buoyant force = weight of displaced fluid = ρ·V·g = 1000(0.01)(10) = 100 N upward.',
  4400223: 'Continuity: A1·v1 = A2·v2. 4·1 = 1·v2 → v2 = 4 m/s. Smaller pipe means faster flow.',
  4400224: "Bernoulli: where speed is higher, pressure is lower. Constricted section → faster + lower pressure. The two go together.",
  4400225: 'PV = nRT. With V, n fixed: P ∝ T. Double T → double P.',
  4400226: "Work by gas = P·delta-V (constant P) = 200,000(0.002) = 400 J. Convert L → m³ carefully.",
  4400227: 'Second law is about TOTAL entropy of isolated systems, not subsystems. Local entropy can decrease as long as the universe pays more elsewhere.',
  4400228: 'Approaching source: observer hears higher frequency. Receding: lower. The shift is direction-dependent — not just "louder/softer".',
  4400229: 'Fundamental: lambda = 2L = 2.0 m. f_n = n·f1, so 2nd harmonic = 400 Hz. Both ends fixed → integer harmonics, all present.',
  4400230: "Path difference of (n+½)λ gives destructive interference. 2.5λ = 2λ + ½λ → destructive.",
  4400231: "Coulomb: F ∝ 1/r². Triple distance → F divided by 9.",
  4400232: 'E-field points AWAY from positive charge along radial lines. For a +x-axis test point, E points in +x.',
  4400233: 'Dielectric multiplies capacitance: C_new = κ·C. κ = 4 → C_new = 4C.',
  4400234: 'Two R in parallel = R/2. Series with R = R/2 + R = 1.5R.',
  4400235: 'P = IV = 12·2 = 24 W. Also = I²R or V²/R — pick what the data hands you.',
  4400236: 'KVL: traversing a resistor WITH the current direction = potential drop = negative IR term. Against current = +IR.',
  4400237: 'F = BIL·sin(theta). Perpendicular: F = 0.2·4·0.5 = 0.4 N.',
  4400238: "Right-hand rule for positive charge: point fingers in v direction (+x), curl toward B (+y), thumb points in F direction (+z).",
  4400239: "Lenz: induced current opposes the CHANGE in flux. Approaching N-pole-down magnet → flux increases downward → induced current creates upward B to oppose.",
  4400240: "EMF = N·delta-Phi/delta-t = 100·(0.03)/0.1 = 30 V. Take magnitude; sign comes from Lenz separately.",
  4400241: "Thin-lens: 1/f = 1/d_o + 1/d_i. 1/10 = 1/30 + 1/d_i → d_i = 15 cm. Positive d_i means real and inverted.",
  4400242: 'Diverging lens: f is NEGATIVE in AP sign convention. Real object → virtual, upright, reduced image. Always.',
  4400243: "Fringe spacing y = lambda·L/d. Double d → halve y.",
  4400244: 'Soap film in air: top reflection has 180° flip; bottom does not. Net phase shift λ/2 means smallest bright thickness = λ/4 inside film.',
  4400245: 'Photoelectric: KE_max = h·f − phi, but ONLY if h·f > phi. Below threshold, no electrons emit regardless of intensity.',
  4400246: 'de Broglie: lambda = h/p. Memorize and apply — works for any moving particle.',
  4400247: 'Photon energy emitted = E_initial − E_final (positive number leaving the atom). Sign of energy levels is negative but the emitted photon energy is positive.',
  4400248: 'More intensity = more photons = more electrons. But each electron\'s max KE depends only on frequency, not intensity.',
  4400249: 'Photon momentum: p = h/lambda (equivalently E/c). It is the de Broglie relation applied to a massless particle.',
}

// AP_SCIENCE_CORRECT_SHORTENED — questions where the correct answer was substantially
// longer than the longest distractor. Each entry shortens `correct` to a punchier line
// and pushes the trimmed explanatory detail into `lessonAddendum`.

export const AP_SCIENCE_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  // -------------------- AP Biology --------------------
  4400000: {
    newCorrect: 'Hydrogen bonds between partial-positive H of one water molecule and partial-negative O of another',
    lessonAddendum: "Water's polarity creates extensive intermolecular hydrogen bonding — H of one molecule attracts the O of a neighbor. That signature interaction drives cohesion, high specific heat, and the floating-ice anomaly.",
  },
  4400005: {
    newCorrect: 'Four valence electrons enabling four covalent bonds — chains, rings, and branches',
    lessonAddendum: 'With four valence electrons, carbon forms stable single, double, and branched skeletons. This versatility underlies every macromolecule class and the diversity of functional-group chemistry.',
  },
  4400007: {
    newCorrect: 'Cells stay small so membrane exchange keeps up with internal demand',
    lessonAddendum: 'Volume grows as r^3 while surface area grows as r^2. As cells enlarge, surface-area-to-volume ratio falls and exchange across the membrane lags internal metabolic demand — the constraint that caps cell size or drives folding/microvilli.',
  },
  4400018: {
    newCorrect: 'Reception, transduction, and response — the three canonical stages of cell signaling',
    lessonAddendum: 'Reception is ligand-receptor binding; transduction is the relay through second messengers and phosphorylation cascades; response is the downstream cellular change (gene expression, enzyme activation, secretion).',
  },
  4400025: {
    newCorrect: '9 : 3 : 3 : 1',
    lessonAddendum: 'The four phenotype classes are dominant-dominant, dominant-recessive, recessive-dominant, recessive-recessive in that 9:3:3:1 ratio. This signature ratio confirms independent assortment for two heterozygous parents.',
  },
  4400027: {
    newCorrect: 'Be inherited together more often than predicted, with low recombination frequency',
    lessonAddendum: "Independent assortment predicts a 9:3:3:1 dihybrid ratio. Linked genes break that ratio: recombination frequency below 50% signals linkage, and the closer the genes lie on the chromosome, the lower the recombination.",
  },
  4400028: {
    newCorrect: 'Nondisjunction during meiosis',
    lessonAddendum: 'Nondisjunction is the failure of homologs (meiosis I) or sister chromatids (meiosis II) to separate, producing n+1 or n-1 gametes. It is the proximate cause of trisomies and monosomies in humans.',
  },
  4400032: {
    newCorrect: 'Lactose is present and glucose is low',
    lessonAddendum: 'Two conditions must hold simultaneously: lactose presence releases the lac repressor, and low glucose lets CAP-cAMP bind the promoter to enhance transcription. Either condition alone keeps the operon largely off.',
  },
  4400034: {
    newCorrect: 'Binding specific DNA sequences and recruiting or blocking RNA polymerase II',
    lessonAddendum: 'Transcription factors recognize promoters and enhancers and either recruit RNA Pol II (activators) or block its access (repressors). They regulate transcription without catalyzing the chemistry of mRNA synthesis themselves.',
  },
  4400035: {
    newCorrect: 'Silences gene expression by recruiting repressive chromatin proteins',
    lessonAddendum: 'CpG methylation in promoter regions attracts methyl-binding proteins and HDACs, condensing chromatin and blocking transcription factors. The underlying DNA sequence is unchanged — this is reversible epigenetic regulation.',
  },
  4400042: {
    newCorrect: 'Logistic growth, where growth rate slows as N approaches K',
    lessonAddendum: 'Logistic growth dN/dt = rN(1 − N/K) flattens the exponential curve into an S-shape as the population nears its carrying capacity K. Density-dependent factors (resources, predation, disease) drive the slowdown.',
  },
  4400048: {
    newCorrect: 'Mutation generated new variation; selection then amplified the resistant allele',
    lessonAddendum: 'Antibiotics do NOT induce adaptive mutations. They impose strong directional selection on pre-existing genetic variation — resistant alleles, already present at low frequency, dominate the population within months.',
  },
  4400049: {
    newCorrect: 'Sun → Calvin cycle → glucose → herbivore respiration → predator respiration',
    lessonAddendum: 'Energy flow involves three transformations: photosynthesis (light → chemical bonds in glucose), respiration (glucose → ATP plus heat), and trophic transfer (with ~90% lost as heat at each level).',
  },

  // -------------------- AP Chemistry --------------------
  4400103: {
    newCorrect: "Removing O's paired 2p electron relieves repulsion, while N's half-filled 2p is unusually stable",
    lessonAddendum: "Across period 2, ionization energy generally increases, but a dip appears at oxygen. N has three half-filled 2p orbitals — an unusually stable configuration. O's fourth 2p electron must pair, so removing it relieves electron-electron repulsion and costs less energy than expected.",
  },
  4400114: {
    newCorrect: 'I2 has more electrons and a more polarizable electron cloud, producing stronger LDFs',
    lessonAddendum: 'Both molecules are nonpolar, so only London dispersion forces are in play. LDF strength scales with electron count and polarizability — I2 has 106 electrons in a large, floppy cloud, vastly more than F2 with 18 electrons in a tight cloud.',
  },

  // -------------------- AP Physics --------------------
  4400208: {
    newCorrect: '50 J entering the patch; 0 J at the end',
    lessonAddendum: 'Initial PE = mgh = 1·10·5 = 50 J becomes KE as the block leaves the frictionless ramp. Friction dissipates all 50 J over the rough patch — including the 30 J described plus an additional 20 J in subsequent travel — until the block stops with zero mechanical energy left.',
  },
  4400214: {
    newCorrect: '8 times',
    lessonAddendum: "Kepler's third law: T^2 ∝ r^3, so T ∝ r^(3/2). Quadrupling r multiplies T by 4^(3/2) = 8.",
  },
  4400227: {
    newCorrect: 'The total entropy of an isolated system never decreases',
    lessonAddendum: 'The second law constrains TOTAL entropy of isolated systems, not subsystems. A local region (e.g., a refrigerator interior) can lose entropy as long as the surroundings gain more. Heat does not spontaneously flow from cold to hot.',
  },
  4400236: {
    newCorrect: 'Negative, because you traverse from higher to lower potential',
    lessonAddendum: 'Walking a resistor in the same direction as the conventional current means moving down the potential drop. KVL assigns a negative sign to the IR term in that case; flip the sign if you traverse against the current.',
  },
  4400247: {
    newCorrect: 'E_3 − E_2, a positive amount of energy carried away',
    lessonAddendum: "Bohr energy levels are negative numbers that grow less negative with larger n. When the electron drops from n=3 to n=2, the atom releases a photon whose energy equals the level difference E_3 − E_2 (positive, since E_3 > E_2).",
  },
}

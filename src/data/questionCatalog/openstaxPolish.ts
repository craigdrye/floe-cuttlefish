// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the OpenStax open-textbook roadmap (~579 questions sourced from six
// OpenStax titles: College Physics 2e, Biology 2e, Psychology 2e, U.S. History,
// Chemistry 2e, and Principles of Economics 3e).
//
// OPENSTAX_SUB_TOPICS maps each question id to a chapter-shaped cluster name.
// Where multiple textbooks contribute, the cluster name is prefixed with the
// discipline ("PHY:", "BIO:", "PSY:", "HIST:", "CHEM:", "ECON:") so the
// lesson grouping stays disambiguated across the combined catalog.
//
// OPENSTAX_MENTOR_HINTS overrides the generic OpenStax scaffold hint with a
// one-line, second-person nudge. Voice is tuned to the dominant discipline
// behind each id — a physics TA pointing at a free-body diagram, a chem
// lecturer naming the stoichiometric move, an econ professor pointing at the
// supply/demand intersection, etc. Hints name the chapter concept or framework
// without giving the answer.
//
// OPENSTAX_CORRECT_SHORTENED is intentionally near-empty: OpenStax exercises
// in this bank store `correct` as the placeholder string "No solution provided."
// or "See Solution", which the bank-level sanitizer removes before the catalog
// emits questions. There is no long-correct vs short-wrong audit gap to repair.
//
// ─────────────────────────────────────────────────────────────────────────────
// Note on id collisions: the raw OpenStax payload reuses small numeric ids
// (e.g. 40020, 4002, 40024) across multiple chapters and textbooks because the
// upstream scrape concatenated chapter-and-exercise numbers without a textbook
// prefix. Because these Records are keyed by `number`, hints for a colliding
// id apply to every question that shares that id; we therefore tune each such
// hint to the meta-pattern shared across the colliding entries (e.g. "an
// open-ended OpenStax review prompt — argue from the chapter's central
// framework, not from intuition") rather than to a single chapter.

export const OPENSTAX_SUB_TOPICS: Record<number, string> = {
  // ── HIST: Pre-Columbian, Atlantic World, and Early Colonization ──────────
  4000: 'HIST: Pre-Columbian & Colonial Foundations',

  // ── PHY: Physics 2e core mechanics (Ch. 1–3) ─────────────────────────────
  4001: 'PHY: Models, Theories & Measurement',
  4002: 'PHY/HIST: Cross-Discipline Open-Ended (id collision)',
  4003: 'PHY: Models, Theories & Measurement',
  4004: 'PHY/HIST: Cross-Discipline Open-Ended (id collision)',
  4005: 'PHY: Models, Theories & Measurement',
  4006: 'PHY/HIST: Cross-Discipline Open-Ended (id collision)',
  4007: 'PHY: Models, Theories & Measurement',
  4008: 'PHY/HIST: Cross-Discipline Open-Ended (id collision)',
  4009: 'PHY: Classical vs Relativistic Regimes',
  40010: 'PHY/HIST: Units, Conventions & Open-Ended',
  40011: 'PHY: Accuracy & Uncertainty',
  40012: 'PHY/HIST: Unit Conversion & Open-Ended',
  40013: 'PHY: Kinematics — Vectors vs Scalars',
  40014: 'PHY/HIST: Kinematics & Open-Ended',
  40015: 'PHY: Kinematics — Velocity & Acceleration',
  40016: 'PHY: Kinematics — Sign Conventions',
  40017: 'PHY: Kinematics — Problem-Solving Strategy',
  40018: 'PHY: Kinematics — Choosing the Right Equation',
  40019: 'PHY: Kinematics — Sanity-Checking',
  40020: 'CHEM/PHY: Catch-All Even-Numbered Exercise (id collision)',
  40021: 'PHY/PSY: Open-Ended Conceptual (id collision)',
  40022: 'CHEM/PHY/PSY: Catch-All Exercise (id collision)',
  40023: 'PHY/PSY: Open-Ended Conceptual (id collision)',
  40024: 'CHEM/BIO/PSY/PHY: Catch-All Exercise (id collision)',
  40025: 'BIO/PSY/PHY: Foundational Review (id collision)',
  40026: 'CHEM/BIO/PSY/PHY: Catch-All Exercise (id collision)',
  40027: 'BIO/PSY/PHY: Foundational Review (id collision)',
  40028: 'CHEM/BIO/PSY/PHY: Catch-All Exercise (id collision)',
  40029: 'BIO/PSY/PHY: Foundational Review (id collision)',
  40030: 'PHY: Kinematics — Order-of-Magnitude Estimation',
  40031: 'PHY: Kinematics — Motion Graphs',
  40032: 'PHY: Kinematics — Applied Acceleration',
  40034: 'PHY: Kinematics — Deceleration & Forces',
  40036: 'PHY: Projectile & Range Problems',
  40038: 'PHY/ECON: Tradeoffs & Acceleration (id collision)',
  40039: 'ECON: Budget Constraints & Scarcity',
  40040: 'PHY: Projectile Motion — Falling Objects',
  40042: 'PHY: Projectile & Free Fall',
  40044: 'PHY: Free Fall & Range',
  40046: 'PHY: Projectile & Free Fall',
  40048: 'PHY: Free Fall & Vertical Motion',
  40050: 'PHY: Free Fall & Range',
  40051: 'PHY: Constructed Projectile Problem',
  40052: 'PHY: Free Fall — Distance & Velocity',
  40053: 'PHY: Relative Velocity — Wind',
  40054: 'PHY: Free Fall — Window-Drop',
  40055: 'PHY: Relative Motion — Frames of Reference',
  40056: 'PHY: Collisions & Impulse',
  40057: 'PHY: Relative Velocity — Ocean Currents',
  40058: 'PHY: Collisions & Impulse',
  40059: 'PHY: Relative Velocity — Course Correction',
  40060: 'PHY: Motion Graphs — Slopes',
  40061: 'PHY: Relative Velocity — Ship & Sandal',
  40062: 'PHY: Motion Graphs — Acceleration from v(t)',
  40063: 'PHY: Hubble Recession (Relative Velocity)',
  40064: 'PHY: Motion Graphs — Instantaneous Velocity',
  40065: 'PHY: Relative Velocity — Swimmer',
  40066: 'PHY: Position–Time to Velocity–Time',
  40067: 'PHY: Relative Velocity — Hockey Geometry',
  40068: 'PHY: Unreasonable Results — Orbital Launch',
  40069: 'PHY: Unreasonable Results — Tailwind Plane',
  40070: 'PHY: Constructed Crosswind Problem',
  400210: 'BIO/PSY/CHEM: Cross-Discipline Concept Quiz (id collision)',
  400211: 'BIO/PSY: Cell & Method Definitions (id collision)',
  400212: 'BIO/PSY/CHEM: Cross-Discipline Concept Quiz (id collision)',
  400213: 'BIO/PSY: Concept Definitions (id collision)',
  400214: 'BIO/PSY/CHEM: Cross-Discipline Concept Quiz (id collision)',
  400215: 'BIO/PSY: Hierarchies & Roles (id collision)',
  400216: 'BIO/PSY/CHEM: Cross-Discipline Concept Quiz (id collision)',
  400217: 'BIO/PSY: Structure–Function (id collision)',
  400218: 'BIO/PSY/CHEM: Cross-Discipline Concept Quiz (id collision)',
  400219: 'BIO/PSY: Building Blocks (id collision)',
  400220: 'BIO/PSY/CHEM: Cross-Discipline Concept Quiz (id collision)',
  400221: 'PSY: Research Ethics — IRB vs IACUC',
  400222: 'PSY/CHEM: Cross-Discipline Review (id collision)',
  400223: 'PSY: Research Ethics — Voluntary Participation',
  400224: 'PSY/CHEM: Cross-Discipline Review (id collision)',

  // ── CHEM: Chemistry 2e (Ch. 1–3) ─────────────────────────────────────────
  400226: 'CHEM: Properties — Chemical vs Physical',
  400228: 'CHEM: Properties — Chemical vs Physical',
  400230: 'CHEM: Conservation of Matter & Phase Change',
  400232: 'CHEM: Extensive vs Intensive Properties',
  400234: 'CHEM: SI Units & Magnitudes',
  400236: 'CHEM: SI Units & Derived Units',
  400238: 'CHEM: SI Prefixes',
  400240: 'CHEM: Density & Displacement',
  400242: 'CHEM: Density Simulations',
  400244: 'CHEM: Scientific Notation & Sig Figs',
  400246: 'CHEM: Exact vs Measured Quantities',
  400248: 'CHEM: Significant Figures — Counting',
  400250: 'CHEM: Significant Figures in Labels',
  400252: 'CHEM: Rounding & Sig Figs',
  400254: 'CHEM: Calculations with Sig Figs',
  400256: 'CHEM: Accuracy vs Precision',
  400258: 'CHEM: Conversion Factors',
  400260: 'CHEM: Conversion Factors — Real Labels',
  400262: 'CHEM: Unit Conversion — Sports & Objects',
  400264: 'CHEM: Unit Conversion — Volumes',
  400265: 'PHY: Sprinter v–t Graph',
  400266: 'CHEM: Unit Conversion — Sub-mm Scales',
  400268: 'CHEM: Mass Conversion — kg vs lb',
  400270: 'CHEM: Unit Conversion — Doses',
  400272: 'CHEM: SI Unit Conversions',
  400274: 'CHEM: Volume Conversion — Gal/L',
  400276: 'CHEM: Multi-Unit Conversion',
  400278: 'CHEM: Extreme Unit Conversions',
  400280: 'CHEM: Density × Volume Mass Calculations',
  400282: 'CHEM: Mass Sufficiency Check',
  400284: 'CHEM: Speed & Compound Unit Conversion',
  400286: 'CHEM: Concentration — ppb to Mass',
  400288: 'CHEM: Density Calculations',
  400290: 'CHEM: Mass from Density',
  400292: 'CHEM: Volume from Density',
  400294: 'CHEM: Temperature Conversion',
  400296: 'CHEM: Temperature Conversion — Cryogenic',
  400298: 'CHEM: Temperature Conversion — Safety Labels',

  // ── ECON: Principles of Economics 3e (Ch. 1–3) ───────────────────────────
  400310: 'ECON: Division of Labor & Why Study Econ',
  400311: 'ECON: Why Study Economics',
  400312: 'ECON: Micro vs Macro & Equilibrium',
  400313: 'ECON: Agents & Demand Slope',
  400314: 'ECON: Macro Goals & Demand-Curve Shape',
  400315: 'ECON: Keynes & Supply-Curve Shape',
  400316: 'ECON: Markets & Equilibrium Conditions',
  400317: 'ECON: Firms vs Households / Finding Equilibrium',
  400318: 'ECON: Economic Systems & Surplus/Shortage',
  400319: 'ECON: Globalization & Market Adjustment',
  400320: 'ECON: Demand vs Quantity Demanded',
  400321: 'ECON: Supply vs Quantity Supplied',
  400322: 'ECON: Ceteris Paribus',
  400323: 'ECON: Demand Shifters',
  400324: 'ECON: Supply Shifters',
  400325: 'ECON: Dual Shifts in Supply & Demand',
  400326: 'ECON: Movement Along vs Shift Of',
  400327: 'ECON: Price Ceilings',
  400328: 'ECON: Price Ceilings — Effects',
  400329: 'ECON: Price Floors',
  400330: 'ECON: Price Floors — Effects',
  400331: 'ECON: Consumer Surplus',
  400332: 'ECON: Producer Surplus',
  400333: 'ECON: Total Surplus',
  400334: 'ECON: Efficiency & Surplus',
  400335: 'ECON: Surplus & Welfare',

  // ── PHY: tail-end physics 3 Problem Exercises ────────────────────────────
  400349: 'PHY: Vector Paths — Distance vs Displacement',
  400351: 'PHY: 2D Walk — Compass Bearing',
  400353: 'PHY: Vector Paths — Components',
  400354: 'PHY: Vector Components — SF→Sacramento',
}

export const OPENSTAX_MENTOR_HINTS: Record<number, string> = {
  // ── PHY: Physics 2e — Ch. 1 Conceptual & Problems ────────────────────────
  4001: 'A model is a simplified stand-in; ask what the model deliberately leaves out, not what it includes.',
  4003: 'When two theories fit data equally well, parsimony and predictive scope decide — not aesthetic preference.',
  4005: 'Extraordinary claims demand extraordinary evidence; calibrate the bar to how much the result would force a rewrite of the textbook.',
  4007: 'Classical physics holds when speeds are much less than c and actions are much greater than h. Name both bounds.',
  4009: '7,500 m/s is roughly 2.5e-5 of c — well within the classical regime. Compare to c before invoking relativity.',
  40011: 'Accuracy is closeness to truth; uncertainty is the spread around your measurement. They are different axes, not synonyms.',
  40013: 'Speed is a magnitude; velocity carries direction. The minus sign in front of 10 m/s is the giveaway.',
  40015: 'A ball at the top of its arc has v = 0 but a ≠ 0. Reach for that example before any other.',
  // 40016–40019 collide between Ch. 2 (kinematics) and Ch. 3 (vectors); the
  // consolidated hints below cover both chapter contexts.
  40016: 'Ch. 2: a sign-reducing acceleration on a leftward train points rightward — opposite to v. Ch. 3: a nonzero vector has a zero component along any axis perpendicular to it.',
  40017: 'Ch. 2: an acceleration that shrinks |v| points opposite to v. Ch. 3: plus/minus signs encode direction in 1D motion — they are not magnitudes.',
  40018: 'Ch. 2: pick the kinematic equation whose variables are exactly your knowns plus your unknown. Ch. 3 problems-exercises: same rule, just decompose into components first.',
  40019: 'Ch. 2: the last step is the reasonableness check — units, sign, magnitude, real-world plausibility. Always.',
  40030: 'A generation is ~25–30 years; divide the elapsed time by that. Fermi estimation, not a calculator.',
  40031: 'Up the incline, a points downhill (decelerating); past the turning point, a still points downhill (now accelerating). The acceleration graph never flips sign at the top.',
  40032: 'Use v² = 2·a·d. With v = 0.6 m/s and d = 2.0 mm, a is hundreds of m/s². Express in g by dividing by 9.80.',
  40034: 'a = v²/(2d) with v = 54 m/s and d = 3.0 m. The number is large — convert to g by dividing by 9.80.',
  40036: 'Treat the long jump as projectile motion at the optimal 45°. Range = v²·sin(2θ)/g. State your assumptions (no drag, no lift, level ground) explicitly.',
  40040: 'Horizontal velocity stays at 3.00 m/s; vertical velocity grows from 0 under g. Combine via Pythagoras at impact.',
  40042: 'Same kinematic equations work whether you throw up or down — just keep the sign of v₀ consistent with your axis.',
  40044: 'Use y = v₀t + ½gt² with v₀ = −1.40 m/s downward and t = 1.8 s. The negative sign keeps your axis honest.',
  40046: 'Treat takeoff to peak and peak to water separately, or use v² = v₀² − 2gy in one shot if signs are clean.',
  40048: 'Compute time to fall back to 2.20 − 1.80 = 0.40 m above release point. He needs to be clear by then.',
  40050: 'Use v² = 2gh to get takeoff speed, then double the up-time for total air time.',
  40051: 'Constructed problem — the rubric is: identify knowns/unknowns, pick the equation, check that the answer is physically reasonable.',
  40052: 'Distance in the first second is ½g(1)² = 4.9 m. Final velocity from v² = 2gh. Last-second distance = total − distance through t−1.',
  40053: 'Bird ground speed = 6.00 km / 1200 s = 5.00 m/s. Wind = bird airspeed − ground speed = 9 − 5 = 4 m/s headwind.',
  40054: 'Use Δy = v·t + ½gt² across the window to solve for v at the bottom of the window. Then back-propagate to ground.',
  40055: 'In Earth\'s frame, horizontal distance = airliner speed × fall time. The coin keeps the plane\'s horizontal velocity.',
  40056: 'a = Δv/Δt during contact. The bounce reverses v, so Δv is roughly 2v, not 0.05v.',
  40057: 'Vector sum: v_ship/ground = v_ship/water + v_water/ground. Decompose into N and E components, then magnitude and bearing.',
  40058: 'Same approach as the steel ball, but contact is 3.50 ms — much longer, much smaller deceleration. Compare to ms scale.',
  40059: 'You want the resultant to point due north; tilt the ship\'s heading into the current until the eastward components cancel.',
  40060: 'Slope = rise/run on the position-vs-time curve at t = 10 s. Pick two close points on the line and divide.',
  40061: 'In ship\'s frame, sandal falls straight down. In Earth\'s frame, it carries the ship\'s 1.75 m/s south during the fall.',
  40062: 'Slope of v–t at t = 10 s is the instantaneous acceleration. Read off two nearby points and divide Δv by Δt.',
  40063: 'Hubble\'s law: v = H₀·d. Plug in the receding galaxy distance and Hubble constant; sanity-check the units.',
  40064: 'Slope of the curve at 2.5 s gives v at 2.5 s. Verify against the v–t plot in Figure 2.63 — they must agree.',
  40065: 'Across the river: 25 m at 0.5 m/s → 50 s. Downstream: 40 m / 50 s = 0.8 m/s. Swimmer ground speed is the vector sum.',
  40066: 'Differentiate the position graph segment by segment. Acceleration = slope of the resulting v–t graph.',
  40067: 'Player moves 8 m/s, puck speed relative to player is 29 m/s, and the goal line is perpendicular. Use the velocity-addition triangle.',
  40068: 'v² = 2gh with g local and h = 3.6e7 m gives a launch v near 27 km/s — well above escape velocity. Premise is the problem.',
  40069: 'Ground speed = 3000 km / 1.5 h = 2000 km/h ≈ 556 m/s. Subtract 280 m/s east airspeed to get the tailwind component — but it is far too large.',
  40070: 'Constructed problem — you set the wind, runway heading, and airspeed, then solve for the crab angle and ground speed.',

  // ── HIST: U.S. History (Ch. 1–3) — id 4000 covers the multiple-choice path
  4000: 'OpenStax U.S. History opens with three multiple-choice prompts per chapter; each tests a single named concept (cliff dwellings, Crusades, road systems, encomienda). Match the choice to the chapter\'s definition.',

  // ── Cross-discipline id collisions (open-ended) ──────────────────────────
  4002: 'This id collides across physics conceptual prompts and U.S. History MC questions — read the chapter context before answering. Argue from the chapter framework, not intuition.',
  4004: 'Cross-discipline id — for physics conceptual prompts cite the operational definition; for the U.S. History prompt cite the named cultural feature in the chapter.',
  4006: 'Same id, different disciplines: physics asks whether something can return to a starting point (acceleration/velocity); history asks about Venice and the spice trade. Identify the textbook first.',
  4008: 'Cross-discipline collision: physics asks about adding vectors of different magnitudes; history asks about European feudalism. Check the chapter, then pick the framework.',
  40010: 'Cross-discipline id — for physics 3, a nonzero vector has a zero component along any axis perpendicular to it; for history 1, name the West African scholarly capital.',
  40012: 'Cross-discipline id — for physics conceptual, perpendicular vectors have zero projection; for problem-set physics, propagate signal speed × distance; for history, identify the Columbian Exchange.',
  40014: 'Cross-discipline id — for physics conceptual, constant velocity ⇒ a = 0; for problems, decompose displacement into legs; for history, name the technological impact of muskets on Native societies.',

  // ── id 40020 — the catch-all collision (physics + chemistry) ─────────────
  40020: 'This id is reused for many even-numbered chemistry exercises (Ch. 1–3) and several physics problems — read the prompt for the actual topic: SI units, sig figs, conversions, kinematics, or molarity.',
  40021: 'Cross-discipline id — for physics it is the acceleration-vs-time-of-flight prompt; for psychology it is a Ch. 1–3 multiple-choice term (skills, falsifiability, mutation).',
  40022: 'Cross-discipline id — physics: solve for muzzle velocity; psychology: observable realities are facts; chemistry: identify Dalton\'s postulate of equal-mass conservation.',
  40023: 'Cross-discipline id — physics: air resistance dissipates kinetic energy on the round trip; psychology: scientific knowledge is empirical.',
  40024: 'Cross-discipline catch-all: physics kinematics, biology atoms (isotopes/neutrons), psychology research methods, chemistry Dalton postulates. Read the prompt; do not assume.',
  40025: 'Cross-discipline id — biology: isotopes vary in neutrons; psychology: Freud\'s case-study method; physics: gravity on the Moon is ~1/6 of Earth.',
  40026: 'Cross-discipline catch-all: physics blood-flow kinematics, biology electron shells (K → 2,8,8,1), psychology naturalistic observation, chemistry molecular mass selection.',
  40027: 'Cross-discipline id — biology: hydrogen bonds are weak; psychology: case studies cannot generalize; physics: motorcycle a = Δv/Δt.',
  40028: 'Cross-discipline catch-all: physics motorcycle acceleration & distance, biology water is not Earth\'s most abundant atmospheric molecule, psychology Skinner box, chemistry α-particle scattering.',
  40029: 'Cross-discipline id — biology: adding acid lowers pH; psychology: archival research uses existing records; physics: fireworks shell, use v² = 2ad.',

  // ── ECON: Principles of Economics 3e ─────────────────────────────────────
  40038: 'Cross-discipline id — physics: 2.0 m/s² acceleration over 12 s; econ: scarcity forces tradeoffs because resources have alternative uses.',
  40039: 'A budget constraint represents all combinations of two goods you can just afford; rational buyers spend everything (no inside), and cannot exceed it (no outside).',
  400310: 'Adam Smith\'s three reasons: specialization, learning by doing, and economies of scale through division of labor.',
  400311: 'Three reasons: better citizenship and voting, better personal financial decisions, and competence in the modern workplace.',
  400312: 'Microeconomics studies individual decisions and markets; macroeconomics studies aggregates — output, unemployment, inflation, growth.',
  400313: 'Individual economic agents are households, firms, and governments — the units whose decisions micro analyzes.',
  400314: 'The three macro goals are growth in living standards, low unemployment, and stable prices.',
  400315: 'Keynes defined economics as the study of human behavior in the ordinary business of life — production, distribution, exchange.',
  400316: 'Households are buyers in goods and services, but sellers in the labor market — they sell their labor for wages.',
  400317: 'Firms are sellers in the goods and services market, but buyers in the labor market — they purchase labor inputs.',
  400318: 'The three economic systems are traditional, command, and market — most modern economies are mixed market-and-command.',
  400319: 'Globalization is the growing trade and capital integration across countries; recent decades brought lower tariffs and global supply chains.',
  400320: 'Quantity demanded is a single point on the demand curve at one price; demand is the entire schedule across all prices.',
  400321: 'Quantity supplied is one point on the supply curve at one price; supply is the full schedule across the price axis.',
  400322: 'Ceteris paribus — hold all other factors constant and analyze one shift at a time.',
  400323: 'Demand shifters: income, tastes, prices of related goods (substitutes/complements), expectations, and number of buyers.',
  400324: 'Supply shifters: input prices, technology, taxes/subsidies, expectations, and number of sellers.',
  400325: 'When both curves shift, the direction of one variable (P or Q) is determined and the other is ambiguous without magnitudes.',
  400326: 'A price change moves you along the curve; a non-price factor shifts the whole curve. Diagnose which is happening.',
  400327: 'A price ceiling is a legal maximum, set below equilibrium to make a price lower (e.g., rent control).',
  400328: 'A binding price ceiling raises quantity demanded, lowers quantity supplied, and creates a shortage.',
  400329: 'A price floor is a legal minimum, set above equilibrium to make a price higher (e.g., minimum wage, agricultural price supports).',
  400330: 'A binding price floor lowers quantity demanded, raises quantity supplied, and creates a surplus.',
  400331: 'Consumer surplus is the triangle below the demand curve and above the market price — the willingness-to-pay gap.',
  400332: 'Producer surplus is the triangle above the supply curve and below the market price — the willingness-to-accept gap.',
  400333: 'Total surplus is consumer surplus plus producer surplus — the entire gain from trade at the equilibrium quantity.',
  400334: 'Total surplus is maximized at the competitive equilibrium quantity — that is the textbook definition of allocative efficiency.',
  400335: 'Surplus measures welfare; deadweight loss is the surplus destroyed when quantity diverges from the efficient level.',

  // ── CHEM: Chemistry 2e even-numbered exercises (Ch. 1–3) ─────────────────
  400226: 'For each underlined adjective: does it describe the substance as-is (physical) or describe what it becomes after a reaction (chemical)?',
  400228: 'Coal burning is chemical (combustion forms new substances); ice melting is physical (phase change, same H₂O molecules).',
  400230: 'Combining hydrogen and oxygen to form water vapor is a chemical change — bonds break and reform.',
  400232: 'Volume scales with sample size (extensive); temperature, density, boiling point do not (intensive).',
  400234: '1 L ≈ 1.057 quarts — closest to a quart. Calibrate this in your head; you will use it constantly.',
  400236: 'Length → meters (m), mass → kilograms (kg), volume → cubic meters (m³), temperature → kelvin (K). Derived units combine these.',
  400238: 'kilo = 10³, centi = 10⁻², deci = 10⁻¹, milli = 10⁻³, mega = 10⁶, micro = 10⁻⁶. Memorize the ladder, both directions.',
  400240: 'Volume displaced = 61.2 − 48.6 = 12.6 mL; density = mass/volume = 132.6/12.6 g/mL. Plug numbers, then sanity-check against gold (19.3) or silver (10.5).',
  400242: 'Use mass-from-balance / volume-from-displacement. The simulation lets you confirm that buoyancy depends on the ratio of densities.',
  400244: 'Scientific notation: one nonzero digit left of the decimal, then ×10^n. Sig figs are preserved from the original number.',
  400246: 'Counts (eggs, seconds-per-hour by definition) are exact; physical measurements (mass, distance) are always uncertain.',
  400248: 'Trailing zeros after a decimal point are significant; leading zeros are not. For 9.74150 × 10⁻⁴, all six digits count.',
  400250: 'Trailing zero after a decimal counts; "3% peroxide" without a decimal is ambiguous — treat as one sig fig unless context clarifies.',
  400252: 'Round to the nearest value with exactly two significant digits, applying banker\'s-rounding on a 5 only if your course requires it.',
  400254: 'Multiplication/division: result keeps the fewest sig figs of the inputs. Addition/subtraction: result keeps the fewest decimal places.',
  400256: 'Accurate ≈ close to true; precise ≈ close to each other. Tightly clustered but wrong = precise but not accurate.',
  400258: '1 mile = 1.609 km; 1 ft³ = 28.32 L; 1 oz = 28.35 g. Write each as a ratio with the conversion on top of what cancels.',
  400260: 'Divide the metric value by the English value: 978 g / 34.5 oz ≈ 28.3 g/oz — three sig figs.',
  400262: 'Multiply circumference (in × 2.54 cm/in) and mass (oz × 28.35 g/oz). Carry sig figs through; the range becomes a centimeter range.',
  400264: '1 gal = 3.785 L; 42 gal × 3.785 = 159 L. The "42 gal exactly" means treat 42 as infinite sig figs.',
  400266: 'Multiply 1.21e-8 cm by (1 in / 2.54 cm) → about 4.76e-9 in. Carry the exponent through carefully.',
  400268: '192 kg × (2.205 lb/kg) ≈ 423 lb. The 197-lb body weight is the lifter\'s mass, not the lift.',
  400270: '325 mg × (1 g / 1000 mg) = 0.325 g — three sig figs preserved.',
  400272: 'Each prefix change is a power of ten. Practice gram↔milligram and meter↔centimeter until it is reflexive.',
  400274: 'Half a US gallon is 1.893 L (since 1 gal = 3.785 L). Three sig figs.',
  400276: 'Multi-step conversions chain ratios; lay out the dimensional analysis so units cancel diagonally on the page.',
  400278: '50 × 10¹² Å × (1 m / 10¹⁰ Å) = 5000 m = 5 km ≈ 3.1 miles. Two sig figs.',
  400280: 'Mass = volume × density. Convert 22.3 gal → liters → mL, then multiply by 0.8206 g/mL, then convert g → kg and lb.',
  400282: '1/4 lb = 113.4 g — less than 125 g. Answer: no, not enough.',
  400284: '229.8 km/h × (1000 m/km) / (3600 s/h) → m/s; then × 3.281 ft/m → ft/s. Chain the ratios.',
  400286: 'ppb by weight means 1 g per 10⁹ g of water. 0.68 ppb × (mass of stream sample) gives mass of mercury.',
  400288: 'Density = mass/volume = 2.72 / 0.121 ≈ 22.5 g/cm³. Osmium is one of the two densest stable elements.',
  400290: 'Mass = density × volume. For chlorine gas (3.16 g/L), convert mL to L first.',
  400292: 'Volume = mass / density. For gaseous hydrogen, convert mass in g to volume in L using the gas density.',
  400294: '54 °C = 54·1.8 + 32 = 129 °F; K = 54 + 273.15 = 327.15 K.',
  400296: '−77 °C = −77·1.8 + 32 = −106.6 °F; K = −77 + 273.15 = 196.15 K.',
  400298: '130 °F = (130 − 32)/1.8 ≈ 54.4 °C; K = 54.4 + 273.15 ≈ 327.6 K.',

  // ── Cross-discipline 400210–400224 collisions (BIO/PSY/CHEM/PHY) ─────────
  400210: 'Cross-discipline id — biology: cells; chemistry: heterogeneous (visible phases) vs homogeneous (uniform); psychology: longitudinal research.',
  400211: 'Cross-discipline id — biology: viruses lack cells (or fail to meet "life" criteria); psychology: a survey is a list of paper-administered questions.',
  400212: 'Cross-discipline id — biology: eukaryotic cells have a nuclear envelope; chemistry: compounds vs elements differ by chemical decomposition; psychology: attrition complicates longitudinal studies.',
  400213: 'Cross-discipline id — biology: a population is conspecifics in one area; psychology: positive correlation means both variables move together.',
  400214: 'Cross-discipline id — biology: organization hierarchy runs biosphere → ecosystem → community → population → organism; chemistry: build a neutral O-16 atom; psychology: −.90 is the strongest |r|.',
  400215: 'Cross-discipline id — biology: most recently evolved organisms sit at the branch tips; psychology: negative correlation example with TV vs grade.',
  400216: 'Cross-discipline id — biology: α-helix and β-pleated sheet are secondary structure; psychology: r closest to 0 is the weakest relationship; chemistry: classify (a)–(g) as element/compound/mixture.',
  400217: 'Cross-discipline id — biology: prion misfolding affects tertiary structure; psychology: random sampling gives everyone equal chance of inclusion.',
  400218: 'Cross-discipline id — biology: DNA contains deoxyribose + thymine; psychology: independent variable is manipulated, dependent is measured; chemistry: count protons/neutrons/electrons in isotopes.',
  400219: 'Cross-discipline id — biology: nucleic acid building blocks are nucleotides; psychology: researchers operationalize concepts so others can replicate.',
  400220: 'Cross-discipline id — biology: complementary base pairing creates stability; psychology: placebos control for expectancy effects; chemistry: build isotope abundance from a simulator.',
  400221: 'IACUC reviews animal protocols; IRB reviews human protocols. Match the agency to the subject.',
  400222: 'Cross-discipline id — psychology: deception is used when full disclosure would skew responses; chemistry: list 15 everyday materials and label phases/mixtures.',
  400223: 'Participation in research must be voluntary — that is the bedrock principle of informed consent.',
  400224: 'Cross-discipline id — psychology: informed consent is the signed pre-experiment form; chemistry: predict whether a system\'s mass increases, decreases, or stays the same (conservation).',

  // ── PHY: Physics 3 Problems vector exercises (singletons) ────────────────
  400265: 'Average velocity for 0–4 s is the slope of position-vs-time over that window. Instantaneous is the tangent slope at t = 5 s.',
  400349: 'Distance is path length (sum of leg magnitudes); displacement is the straight-line vector from start to end.',
  400351: 'Decompose each leg into N and E components, sum them, then convert back to magnitude and compass bearing.',
  400353: 'Walk path C — sum the leg vectors graphically AND analytically; the two should agree within sig-fig tolerance.',
  400354: 'SF to Sacramento is roughly NE; project the displacement onto N and E axes using the bearing in Figure 3.54.',
}

// OPENSTAX_CORRECT_SHORTENED — intentionally empty.
//
// The OpenStax payload stores correct answers as the placeholder string
// "No solution provided." or "See Solution" for every exercise. The bank-level
// sanitizer (`sanitizeOpenStaxDefinitions` in openstax.ts) filters out any
// definition whose `correct` matches those placeholders, so no surviving
// question has a correct-vs-wrong length-ratio problem to repair. If the
// upstream payload is later enriched with real correct answers, this record
// should be populated using the same audit heuristic that drives VC_CORRECT_SHORTENED
// (correct ≥1.8x longest wrong AND ≥20 chars longer → trim + reattach via
// lessonAddendum).
export const OPENSTAX_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {}

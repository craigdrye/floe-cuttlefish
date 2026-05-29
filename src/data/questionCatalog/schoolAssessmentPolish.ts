// Bespoke mentor hints, sub-topic clusters, and (currently empty) correct-answer
// shortenings for the three STAAR-derived school assessment banks:
//   - schoolAssessmentMathScienceImported.ts (Algebra I, Grade 7/8 Math, HS Biology)
//   - schoolAssessmentReadingSocialImported.ts (Reading/Writing, US History, Logic)
//   - primaryScienceAssessmentImported.ts (Grade 5 Science + middle school Earth, Bio, Chem, Physics)

export const SCHOOL_ASSESSMENT_SUB_TOPICS: Record<string, number[]> = {
  // --- Math: Algebra I + Grade 7/8 ---
  'Causation and Correlation': [463001],
  'Polynomials and Like Terms': [463002],
  'Function Evaluation': [463003],
  'Systems of Linear Equations': [463004],
  'Solving Linear Equations': [463005],
  'Unit Rates and Proportional Reasoning': [463101, 463103],
  'Area and Geometry Formulas': [463102, 463202],
  'Probability and Likelihood': [463104],
  'Financial Literacy and Simple Interest': [463105, 463201],
  'Proportional vs Non-Proportional Linear Relationships': [463203],
  'Rigid Transformations': [463204],
  'Number Systems and Sets': [463205],

  // --- High school biology ---
  'Energy Flow and Trophic Levels': [463301],
  'Cell Division and Differentiation': [463302],
  'Natural Selection and Evolution': [463303],
  'Membrane Transport': [463304, 465203],
  'Symbiotic Relationships and Community Ecology': [463305],
  'Taxonomy and Scientific Naming': [463306, 465204],
  'Body Systems and Homeostasis': [463307],
  'Molecular Genetics and DNA Chemistry': [463308],
  'Mendelian Inheritance and Punnett Squares': [463309],
  'Mutations and Heritability': [463310],

  // --- Reading and Writing revision ---
  'Spelling and Mechanics': [464001, 464007],
  'Active Voice and Concise Revision': [464002, 464005],
  'Pronoun Reference and Clarity': [464003],
  'Controlling Ideas and Thesis': [464004, 464201],
  'Cohesion and Transitions': [464006],
  'Citing Textual Evidence': [464008, 464202],

  // --- US History (Grade 8 social studies) ---
  'Colonial Politics and Self-Government': [464101],
  'Road to Revolution': [464102],
  'Colonial Economies and Geography': [464103],
  'Industrial Revolution in America': [464104],
  'Jacksonian Era and Party Formation': [464105],

  // --- Primary (Grade 5) science ---
  'Earth Rotation and Apparent Sky Motion': [465001],
  'Solar System Order and Scale': [465002],
  'Water Cycle Processes': [465003],
  'Identifying Metals by Properties': [465004],
  'Solutions and Physical Changes': [465005],
  'Renewable and Nonrenewable Resources': [465006],
  'Magnetism and Separation Techniques': [465007],
  'Inherited vs Acquired Traits': [465008],
  'Limiting Factors in Ecosystems': [465009, 465201, 465202],
  'Erosion and Landforms': [465010],

  // --- Middle school Earth/Space ---
  'Eclipses and Earth-Moon-Sun Geometry': [465101],
  'Apparent Brightness and Stellar Distance': [465102],
  'Stars vs Other Celestial Bodies': [465103],

  // --- Middle school biology (additional) ---
  'Human Impact on Ocean Food Supplies': [465205],

  // --- Middle school chemistry ---
  'Evidence of a Chemical Reaction': [465301],
  'Periodic Table Groups and Properties': [465302],

  // --- Middle school physics ---
  'Constant Speed and Distance-Time Reasoning': [465401],
  'Kinetic and Potential Energy Transfer': [465402],
  'Gravity and Projectile Motion': [465403],
}

export const SCHOOL_ASSESSMENT_MENTOR_HINTS: Record<number, string> = {
  // --- Algebra I ---
  463001: 'Causation requires a direct mechanism: hours worked sets pay because wage = rate × hours. Mere co-variation (bus riders vs zoo animals) is correlation, not causation.',
  463002: 'Add coefficients only of matching variable groups: rt with rt, rw with rw, tw with tw. Keep signs: 5+6=11rt, -3+(-4)=-7rw, -8+2=-6tw.',
  463003: 'Substitute the input for x: f(-5) = 7 - 4(-5) = 7 + 20 = 27. The product of two negatives flips to positive before the subtraction.',
  463004: 'Set up 16m + 12a = 141 and 10m + 15a = 123.75, then eliminate (multiply equations to match a coefficient) — m solves to 5.25 miles.',
  463005: 'Distributive property both sides: 80 - 10y = 10y + 5 - 5y, simplify to 80 - 10y = 5y + 5, then 75 = 15y so y = 5.',

  // --- Grade 7 math ---
  463101: 'Unit rate = total cost ÷ total ounces. X gives 11.25/15 = $0.75/oz, the highest. Per-ounce price, not bottle price, decides cheapness.',
  463102: 'Rectangle area = length × width. Floor 1: 12.5 × 10 = 125 sq ft; Floor 2: 15.75 × 10 = 157.5 sq ft. Sum the two areas = 282.5.',
  463103: 'Constant ratio: 6 spy novels in 3 bags is 2 per bag. So extra bags × 2 = extra spy novels; 2 more bags (6→8) adds 4 spy novels.',
  463104: 'Theoretical probability = favorable ÷ total. Purple has 8, red has 2; the ratio 8:2 means purple is exactly 4× as likely as red.',
  463105: 'Simple interest I = P × r × t. Plug in: 24820 × 0.035 × 1 = $868.70. Convert percent to decimal by dividing by 100 first.',

  // --- Grade 8 math ---
  463201: 'Total saved = principal + monthly × months = 1200 + 50×60 = $4,200. Compare to each yearly cost; only the in-state 2-year option fits.',
  463202: 'Cylinder volume V = π r² h. Diameter 6 → radius r = 3, so V = π(3)²(21). Half the diameter, then square the radius.',
  463203: 'Proportional means y = kx with zero y-intercept. Surface area 2πx + 2π has a constant +2π term, so y/x is not constant — non-proportional.',
  463204: 'Rotations are rigid motions: they preserve length, angle, area, and congruence. Only orientation/position change, not measurements.',
  463205: 'Rational numbers are any a/b with integer a and nonzero integer b. Every integer n = n/1, so integers are a subset of the rationals.',

  // --- HS Biology ---
  463301: '10% energy transfer rule between trophic levels (Lindeman). Producers→primary consumers: 12,000 × 0.10 = 1,200 kJ. The rest is lost as heat/respiration.',
  463302: 'Differentiation is driven by selective gene expression — different transcription factors activate different gene sets, even with identical DNA in every cell.',
  463303: 'Natural selection acts on existing heritable variation. Fish that already had larger fins survived predator escape (fitness advantage) and passed the trait on.',
  463304: 'Active transport pumps solutes against the concentration gradient using ATP hydrolysis (e.g., Na+/K+ pump). Passive modes — diffusion, osmosis — need no ATP.',
  463305: 'Mutualism (+/+): both species benefit. Ants get digestible food from fungi; fungi get leaves plus antibiotic protection. Each fitness rises through the partnership.',
  463306: 'Binomial nomenclature (Linnaeus): Genus species is unique to one species worldwide, removing the ambiguity of regional common names across languages.',
  463307: 'Negative feedback loop: rising body temp → integumentary system (sweat glands in skin) excretes sweat → evaporative cooling restores set point.',
  463308: 'All life uses the same four DNA nucleotides — adenine, thymine, guanine, cytosine — pointing to common ancestry. Genome size and kingdom differ.',
  463309: 'Hh × Hh Punnett square gives 1 HH : 2 Hh : 1 hh. Homozygous smooth (hh) is 1/4 = 25%. Distinguish genotype hh from recessive phenotype probability.',
  463310: 'Only germline (gamete) mutations enter the next generation via fertilization. Somatic mutations stay with the individual and exit the gene pool at death.',

  // --- Reading & Writing ---
  464001: 'Spelling fix: "correspondence" follows the -ence pattern (like "difference, reference"). "Correspondense" with an -ense ending is the misspelling.',
  464002: 'Active voice puts the doer first: "Cassilly welded…" makes the subject the agent. Avoid the wordy passive "were welded by Cassilly."',
  464003: 'Pronoun-antecedent rule: replace an ambiguous "they" with the specific noun ("visitors") so the reader knows exactly who is meant.',
  464004: 'A controlling idea is the broad thesis the paper proves. "Wings are necessary for survival" can organize multiple body paragraphs of evidence.',
  464005: 'Combine with a participial phrase: "Huge flames shot out…, heating the air…" keeps modifiers adjacent to the noun they describe — no comma splice.',
  464006: 'Strong transitions signal sequence and forward motion. "Finally, it was time…" cues the next event in the chronological narrative.',
  464007: 'Double comparative error: "more quieter" stacks "more" + "-er." Use one form only: either "quieter" or "more quiet," not both.',
  464008: 'Evidence for a claim must directly state outcomes. The "growing body of evidence… boost immunity and mood… reduce stress" line names measurable effects.',

  // --- US History ---
  464101: 'Salutary neglect: months-long transatlantic communication forced colonial assemblies to legislate and adjudicate locally, growing self-government practice.',
  464102: 'Coercive (Intolerable) Acts of 1774 → First Continental Congress (Philadelphia, Sept 1774) coordinated boycotts and unified colonial political resistance.',
  464103: 'Chesapeake Bay tobacco economy: Virginia’s warm climate, long growing season, and tidewater plantations defined the colonial tobacco region.',
  464104: 'The factory system mechanized production with interchangeable parts and division of labor (Lowell mills), sharply raising output per worker.',
  464105: 'The Democratic Party formed around Andrew Jackson’s 1828 victory, mobilizing the "common man" coalition that defined Jacksonian democracy.',

  // --- Logic / Argumentation transfer ---
  464201: 'A controlling claim must be specific and defensible — broad enough to support several reasons but narrow enough to argue. "Necessary for survival" qualifies.',
  464202: 'Strong evidence directly links cause to effect. "Growing body of evidence" naming outcomes outranks anecdote, popularity, or tangential medical facts.',

  // --- Primary science ---
  465001: 'Earth rotates on its axis once per ~24 hours; this spin produces the apparent east-to-west motion of the sun across the sky each day.',
  465002: 'Planet order from sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Neptune is the farthest of the eight planets.',
  465003: 'Condensation = gas → liquid. Water vapor cools and collects into droplets (clouds, dew). Compare to evaporation (liquid → gas) and melting.',
  465004: 'Metals share key properties: thermal and electrical conductivity, luster, malleability. Conductivity tests one of these distinguishing properties directly.',
  465005: 'Dissolving is a physical change: solute particles disperse among solvent particles. The sugar is still sugar — no new substance forms in a true solution.',
  465006: 'Renewable resources replenish on human timescales: wind, sunlight, hydropower. Fossil fuels (coal, oil, natural gas) form over millions of years.',
  465007: 'Magnets attract ferromagnetic materials — iron, nickel, cobalt. Fortified cereals contain iron particles that respond to a magnet through the slurry.',
  465008: 'Inherited traits are genetically passed (color, body plan). A missing antenna is an acquired injury, not encoded in DNA — that’s the exception.',
  465009: 'Limiting factor in forest understory = light. The dense canopy intercepts most photosynthetically active radiation before it reaches ground plants.',
  465010: 'Glacial erosion carves broad U-shaped valleys (e.g., Yosemite). Rivers carve narrow V-shaped valleys; wind builds dunes; deposition builds deltas.',

  // --- Middle school Earth/Space ---
  465101: 'Solar eclipse geometry: Sun – Moon – Earth in line. The new-moon disk blocks sunlight, casting the Moon’s umbral shadow on Earth.',
  465102: 'Apparent brightness depends on luminosity and distance² (inverse-square law). The Sun is only 8 light-minutes away; the next star is ~4 light-years.',
  465103: 'Stars produce their own light through nuclear fusion (hydrogen → helium). Self-luminosity is what distinguishes a star from planets, comets, asteroids.',

  // --- Middle school biology ---
  465201: 'Fertilizer runoff carries nitrate/phosphate into waterways, triggering eutrophication and algal blooms. Low-fertilizer crops cut nutrient loading at the source.',
  465202: 'Invasive species outcompete natives for limited resources (space, water), causing native population decline — a classic competitive exclusion outcome.',
  465203: 'Both cell membranes and plant cell walls regulate movement of water and selected molecules into and out of the cell — their shared boundary function.',
  465204: 'Plantae kingdom traits: multicellular, autotrophic (photosynthesis), eukaryotic, both sexual and asexual reproduction (e.g., runners, spores).',
  465205: 'Overfishing = harvest rate > reproductive rate. Catching fish faster than they reproduce reduces stock and is direct evidence of negative human impact.',

  // --- Middle school chemistry ---
  465301: 'A precipitate (new insoluble solid) forming when two clear solutions mix signals a new chemical compound — evidence of a chemical reaction, not phase change.',
  465302: 'Same group = similar chemistry: same number of valence electrons. Sulfur and selenium are both in Group 16 (chalcogens) with 6 valence electrons.',

  // --- Middle school physics ---
  465401: 'Constant speed: distance = speed × time. Speeds are 40/60 and 20/60 m/s; in 90 s they cover 60 m and 30 m. Scale by 90/60 = 1.5.',
  465402: 'Conservation of mechanical energy: as height drops, gravitational PE = mgh decreases; as speed grows, KE = ½mv² increases. Energy converts PE → KE.',
  465403: 'After release, the only force on the coin is gravity (~9.8 m/s² downward), which steadily changes its velocity — slowing on the way up, accelerating down.',
}

export const SCHOOL_ASSESSMENT_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {}

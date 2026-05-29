import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe col-high-school-biology-ngss high top-up'

export const colHighSchoolBiologyNgssHighTopUpQuestions: Question[] = makeQuestionBank('Science', [
  // Chapter 1: Biology Practices and the Chemistry of Life
  {
    id: 7545000,
    chapter: 'Biology Practices and the Chemistry of Life',
    title: 'Identifying the controlled variables',
    prompt:
      'A student tests how temperature affects how fast catalase breaks down hydrogen peroxide. They run the same enzyme and peroxide amounts at 10, 20, 30, and 40 degrees C and time the bubbles. Which is a controlled (constant) variable?',
    correct: 'The amount of hydrogen peroxide used in each trial',
    wrong: [
      miss('The temperature of each trial', 'Temperature is the independent variable here because the student deliberately changes it.', 'A controlled variable is one kept the same so it cannot explain the results.'),
      miss('The rate of bubble production', 'That is the dependent variable being measured, not something held constant.', 'Look for what stays identical across all four trials.'),
      miss('Whether catalase is present', 'Catalase is present in every trial, so it is part of the setup, not a tested or controlled variable.', 'A controlled variable is a factor that could affect the result but is deliberately held steady.'),
    ],
    lesson:
      'In an experiment the independent variable is what you change (temperature), the dependent variable is what you measure (reaction rate), and controlled variables are everything else kept constant so they cannot confound the result. Holding peroxide and enzyme amounts equal ensures any rate difference comes from temperature alone.',
    source,
    generated: true,
  },
  {
    id: 7545001,
    chapter: 'Biology Practices and the Chemistry of Life',
    title: 'Why water dissolves salts',
    prompt:
      'Water is an excellent solvent for ionic compounds such as table salt. Which property of water best explains this?',
    correct: 'Water molecules are polar, so they surround and separate charged ions',
    wrong: [
      miss('Water molecules are nonpolar and slide past ions', 'Water is polar, not nonpolar; nonpolar molecules like oils do not dissolve salts well.', 'Think about whether water has partial charges.'),
      miss('Water has a very high boiling point', 'A high boiling point relates to heat storage, not to pulling ions apart.', 'Connect the property to attraction between charges.'),
      miss('Water is denser as a solid than as a liquid', 'Ice is actually less dense than liquid water, and density does not dissolve salts.', 'Focus on charge interactions, not density.'),
    ],
    lesson:
      'Water is a polar molecule: oxygen pulls electrons so it carries a partial negative charge while the hydrogens are partial positive. These partial charges attract and surround the positive and negative ions of a salt, pulling them apart and dissolving the compound. Polarity also explains hydrogen bonding and cohesion.',
    source,
    generated: true,
  },
  {
    id: 7545002,
    chapter: 'Biology Practices and the Chemistry of Life',
    title: 'Monomers of proteins',
    prompt: 'Which type of monomer joins together to build a protein?',
    correct: 'Amino acids',
    wrong: [
      miss('Nucleotides', 'Nucleotides are the monomers of nucleic acids such as DNA and RNA, not proteins.', 'Match the building block to the macromolecule it forms.'),
      miss('Monosaccharides', 'Simple sugars (monosaccharides) are the monomers of carbohydrates.', 'Carbohydrates, not proteins, are made of sugars.'),
      miss('Fatty acids', 'Fatty acids and glycerol build lipids, not proteins.', 'Lipids, not proteins, use fatty acids.'),
    ],
    lesson:
      'The four macromolecule families have distinct monomers: carbohydrates from monosaccharides, lipids from fatty acids and glycerol, nucleic acids from nucleotides, and proteins from amino acids. Amino acids link by peptide bonds into polypeptides that fold into functional proteins.',
    source,
    generated: true,
  },
  {
    id: 7545003,
    chapter: 'Biology Practices and the Chemistry of Life',
    title: 'High temperature and enzymes',
    prompt:
      'When an enzyme is heated well above its optimum temperature, its reaction rate drops sharply and does not recover on cooling. What has most likely happened?',
    correct: 'The enzyme denatured, changing the shape of its active site',
    wrong: [
      miss('The enzyme was used up as a product of the reaction', 'Enzymes are catalysts and are not consumed, so being used up does not explain the drop.', 'Permanent loss of function with heat points to a shape change.'),
      miss('The substrate ran out at high temperature', 'Substrate supply does not change just because temperature rose; rate fell because of the enzyme.', 'Think about what heat does to protein structure.'),
      miss('The enzyme turned into the substrate', 'Enzymes do not convert into their substrates; they only speed reactions.', 'Recall that the active site depends on a precise 3-D shape.'),
    ],
    lesson:
      'Excess heat breaks the hydrogen and ionic bonds that hold an enzyme in its folded shape, distorting the active site so the substrate no longer fits. This denaturation is usually permanent, which is why activity does not return on cooling. Each enzyme has an optimum temperature where its shape works best.',
    source,
    generated: true,
  },
  // Chapter 2: Cells, Membranes, and Transport
  {
    id: 7545004,
    chapter: 'Cells, Membranes, and Transport',
    title: 'Red blood cell in pure water',
    prompt:
      'A red blood cell is placed in a beaker of distilled (pure) water. What will most likely happen, and why?',
    correct: 'It swells and may burst because water moves into the cell by osmosis',
    wrong: [
      miss('It shrivels because water leaves the cell', 'Water leaves a cell only in a hypertonic solution; pure water is hypotonic to the cell.', 'Water moves toward the side with more dissolved solute.'),
      miss('Nothing changes because the membrane blocks all water', 'The membrane is permeable to water, so osmosis occurs.', 'Recall which way water diffuses across a membrane.'),
      miss('It actively pumps water out using ATP', 'Animal cells do not have a contractile vacuole; osmosis here is passive water gain.', 'Distilled water is hypotonic, so water enters.'),
    ],
    lesson:
      'Pure water is hypotonic to a red blood cell because the cell has more dissolved solute inside. Osmosis moves water from the region of higher water concentration (outside) into the cell, which swells and can lyse. Plant cells avoid bursting in the same situation because a rigid cell wall resists swelling.',
    source,
    generated: true,
  },
  {
    id: 7545005,
    chapter: 'Cells, Membranes, and Transport',
    title: 'Energy cost of facilitated diffusion',
    prompt:
      'Glucose enters many cells through a carrier protein, moving from high to low concentration. How does this compare to active transport?',
    correct: 'It is passive and uses no ATP because it moves down the concentration gradient',
    wrong: [
      miss('It requires ATP because a protein is involved', 'Needing a transport protein does not mean energy is used; the move still follows the gradient.', 'Decide by gradient direction, not by whether a protein helps.'),
      miss('It moves glucose against the gradient like a pump', 'Going from high to low concentration is with the gradient, the opposite of pumping.', 'Active transport is what moves substances against a gradient.'),
      miss('It is the same as simple diffusion through the lipid bilayer', 'Glucose is too large and polar to cross the bilayer directly, so it needs a carrier protein.', 'Both are passive, but only one uses a protein.'),
    ],
    lesson:
      'Facilitated diffusion uses channel or carrier proteins to move polar or large molecules across the membrane, but it is still passive: substances flow down their concentration gradient and no ATP is spent. Active transport differs because it moves substances against the gradient and must use energy.',
    source,
    generated: true,
  },
  {
    id: 7545006,
    chapter: 'Cells, Membranes, and Transport',
    title: 'Surface area to volume ratio',
    prompt:
      'As a cell grows larger, why does it become harder for the cell to exchange materials efficiently?',
    correct: 'Volume grows faster than surface area, so each unit of volume has less membrane to use',
    wrong: [
      miss('Surface area grows faster than volume, leaving too much membrane', 'It is the reverse: volume outpaces surface area as size increases.', 'Compare how area and volume scale with size.'),
      miss('The membrane stops being selectively permeable in big cells', 'Membrane selectivity does not depend on cell size.', 'The problem is geometric, about the ratio of area to volume.'),
      miss('Larger cells have fewer organelles to do the work', 'Organelle number is not what limits exchange; the limiting factor is membrane surface relative to volume.', 'Think about the math of scaling, not organelle counts.'),
    ],
    lesson:
      'When a cell doubles in width, its surface area increases by a factor of about four but its volume increases by about eight. The shrinking surface-area-to-volume ratio means there is too little membrane to supply the interior with nutrients and remove wastes fast enough, which is why cells stay small or divide.',
    source,
    generated: true,
  },
  // Chapter 3: Energy in Living Systems
  {
    id: 7545007,
    chapter: 'Energy in Living Systems',
    title: 'Reactants of photosynthesis',
    prompt: 'Which set lists the main raw materials (reactants) a plant uses in photosynthesis?',
    correct: 'Carbon dioxide and water',
    wrong: [
      miss('Glucose and oxygen', 'Glucose and oxygen are the products of photosynthesis, and the reactants of respiration.', 'The reactants are what go in, not what comes out.'),
      miss('Oxygen and water', 'Oxygen is released by photosynthesis, not consumed by it.', 'Recall which gas is taken in versus given off.'),
      miss('Glucose and carbon dioxide', 'Glucose is a product, so it cannot be a raw material.', 'List only the inputs that get built into sugar.'),
    ],
    lesson:
      'Photosynthesis uses carbon dioxide and water, powered by light energy, to produce glucose and oxygen. Cellular respiration runs essentially in reverse, using glucose and oxygen to release energy and giving off carbon dioxide and water. Keeping the reactants and products straight links the two processes.',
    source,
    generated: true,
  },
  {
    id: 7545008,
    chapter: 'Energy in Living Systems',
    title: 'Do plants respire?',
    prompt:
      'A student claims that plants only perform photosynthesis and never carry out cellular respiration. Why is this incorrect?',
    correct: 'Plant cells respire continuously to release usable energy (ATP) from sugars',
    wrong: [
      miss('Plants get all their ATP directly from sunlight', 'Light energy is captured as sugar first; cells still need respiration to make ATP from that sugar.', 'Photosynthesis stores energy; respiration releases it as ATP.'),
      miss('Plants do not need energy because they do not move', 'All living cells need ATP for growth, transport, and maintenance, even non-moving ones.', 'Every cell uses energy, movement or not.'),
      miss('Only the roots respire, never the leaves', 'All living plant cells, including leaf cells, carry out respiration.', 'Respiration happens in every living plant cell, day and night.'),
    ],
    lesson:
      'Photosynthesis stores light energy in glucose, but cells cannot use glucose directly to do work. Plants, like all organisms, run cellular respiration in their mitochondria to convert sugar into ATP. They photosynthesize when light is available but respire around the clock.',
    source,
    generated: true,
  },
  {
    id: 7545009,
    chapter: 'Energy in Living Systems',
    title: 'Fermentation in muscle cells',
    prompt:
      'During intense exercise when oxygen is scarce, human muscle cells switch to fermentation. What is the main product that builds up?',
    correct: 'Lactic acid (lactate)',
    wrong: [
      miss('Ethanol and carbon dioxide', 'That is the product of fermentation in yeast, not in human muscle.', 'Match the organism to its fermentation pathway.'),
      miss('Large amounts of ATP', 'Fermentation yields very little ATP compared with aerobic respiration.', 'Fermentation is a low-yield backup, not a big ATP source.'),
      miss('Oxygen gas', 'Fermentation occurs because oxygen is lacking; it does not produce oxygen.', 'Think about what accumulates when oxygen runs short.'),
    ],
    lesson:
      'When oxygen is limited, muscle cells use lactic acid fermentation to keep generating small amounts of ATP from glucose without oxygen. The buildup of lactate contributes to muscle fatigue. Yeast and some bacteria instead carry out alcoholic fermentation, producing ethanol and carbon dioxide.',
    source,
    generated: true,
  },
  // Chapter 4: DNA, Cell Division, and Gene Expression
  {
    id: 7545010,
    chapter: 'DNA, Cell Division, and Gene Expression',
    title: 'Complementary base pairing',
    prompt:
      'One strand of DNA reads 5-prime A T G C 3-prime. What is the base sequence of the complementary strand (written 3-prime to 5-prime)?',
    correct: 'T A C G',
    wrong: [
      miss('A T G C', 'A complementary strand is not identical; each base must pair with its partner.', 'Pair A with T and G with C.'),
      miss('U A C G', 'Uracil replaces thymine in RNA, but DNA uses thymine, so U should not appear.', 'This is DNA, so use T instead of U.'),
      miss('G C A T', 'These bases are the right partners but listed in the wrong order for the given strand.', 'Pair each base in order: A-T, T-A, G-C, C-G.'),
    ],
    lesson:
      'In DNA, adenine pairs with thymine and guanine pairs with cytosine, and the two strands run antiparallel (opposite directions). So the complement of A T G C is T A C G. This base-pairing rule underlies both replication and transcription.',
    source,
    generated: true,
  },
  {
    id: 7545011,
    chapter: 'DNA, Cell Division, and Gene Expression',
    title: 'Translating a codon',
    prompt:
      'A messenger RNA strand contains the codon AUG (read 5-prime to 3-prime). Using the genetic code, what does this codon specify?',
    correct: 'The start signal and the amino acid methionine',
    wrong: [
      miss('A stop signal that ends translation', 'Stop codons are UAA, UAG, and UGA, not AUG.', 'AUG is the special codon that begins protein synthesis.'),
      miss('The amino acid tryptophan', 'Tryptophan is coded by UGG, not AUG.', 'Recall the unique role of AUG at the start of an mRNA.'),
      miss('Nothing, because AUG is found only in DNA', 'AUG is a normal mRNA codon (DNA would use T instead of U).', 'mRNA uses U, so AUG is a valid mRNA codon.'),
    ],
    lesson:
      'AUG is the start codon: it signals where translation begins and codes for the amino acid methionine. Translation continues codon by codon until a stop codon (UAA, UAG, or UGA) is reached. Each three-base codon is read by a matching tRNA anticodon carrying the correct amino acid.',
    source,
    generated: true,
  },
  {
    id: 7545012,
    chapter: 'DNA, Cell Division, and Gene Expression',
    title: 'Outcome of meiosis',
    prompt:
      'A human body cell has 46 chromosomes. After meiosis is complete, how many chromosomes does each resulting gamete contain?',
    correct: '23 chromosomes',
    wrong: [
      miss('46 chromosomes', 'That would be the result of mitosis, which keeps the chromosome number the same.', 'Meiosis halves the chromosome number to make gametes.'),
      miss('92 chromosomes', 'No normal cell division doubles the chromosome number into the gametes.', 'Gametes carry half the body-cell number.'),
      miss('12 chromosomes', 'Halving 46 gives 23, not 12.', 'Divide the diploid number in half.'),
    ],
    lesson:
      'Meiosis is reduction division: it takes a diploid cell (46 chromosomes in humans) and produces four haploid gametes, each with 23 chromosomes. When two gametes fuse at fertilization, the full diploid number is restored, keeping chromosome number constant across generations.',
    source,
    generated: true,
  },
  // Chapter 5: Inheritance and Biotechnology
  {
    id: 7545013,
    chapter: 'Inheritance and Biotechnology',
    title: 'Heterozygous cross ratio',
    prompt:
      'In pea plants, purple flowers (P) are dominant over white (p). If two heterozygous plants (Pp x Pp) are crossed, what phenotype ratio is expected in the offspring?',
    correct: '3 purple : 1 white',
    wrong: [
      miss('1 purple : 1 white', 'A 1:1 phenotype ratio comes from a cross of a heterozygote with a homozygous recessive (Pp x pp).', 'Use a Punnett square for Pp x Pp and count phenotypes.'),
      miss('All purple, no white', 'A white (pp) offspring is possible whenever both parents carry a recessive allele.', 'Each Pp parent can pass on a p allele.'),
      miss('1 purple : 2 mixed : 1 white', 'A 1:2:1 pattern is a genotype ratio (or incomplete dominance), not the phenotype ratio for full dominance.', 'With full dominance, both PP and Pp look purple.'),
    ],
    lesson:
      'A Pp x Pp cross gives genotypes in a 1 PP : 2 Pp : 1 pp ratio. Because P is fully dominant, PP and Pp both show the purple phenotype, so three of four offspring are purple and one is white: a 3:1 phenotype ratio. Distinguishing genotype ratios from phenotype ratios is a common source of errors.',
    source,
    generated: true,
  },
  {
    id: 7545014,
    chapter: 'Inheritance and Biotechnology',
    title: 'Incomplete dominance',
    prompt:
      'In snapdragons, crossing a red-flowered plant with a white-flowered plant produces all pink offspring. This pattern is an example of:',
    correct: 'Incomplete dominance, where the heterozygote shows a blended intermediate phenotype',
    wrong: [
      miss('Codominance, where both alleles appear fully and separately', 'In codominance both traits show at once (like red and white patches), not a blend.', 'Pink is a blend, not two distinct colors side by side.'),
      miss('Complete dominance of the red allele', 'If red were fully dominant the offspring would be red, not pink.', 'A new intermediate color signals neither allele is fully dominant.'),
      miss('A mutation creating a brand-new pink allele', 'No new allele is needed; pink results from one red and one white allele together.', 'The heterozygote blends the two existing alleles.'),
    ],
    lesson:
      'In incomplete dominance the heterozygote has a phenotype intermediate between the two homozygotes, such as pink from red and white. This differs from codominance, where both alleles are expressed fully and distinctly (for example AB blood type), and from complete dominance, where the heterozygote matches one parent.',
    source,
    generated: true,
  },
  // Chapter 6: Evolution and Biological Diversity
  {
    id: 7545015,
    chapter: 'Evolution and Biological Diversity',
    title: 'What evolves: individual or population?',
    prompt:
      'A biologist says, "An individual giraffe stretched its neck during its life, so it evolved a longer neck." Why is this statement biologically wrong?',
    correct: 'Evolution is a change in allele frequencies in a population over generations, not a change in one organism during its life',
    wrong: [
      miss('Giraffes cannot change their necks at all, so no evolution is possible', 'Neck length does vary and can be heritable; the error is that individuals do not evolve.', 'Focus on who evolves: the population, not the individual.'),
      miss('Stretching always shortens necks, so the direction is wrong', 'The flaw is not the direction; it is the idea that a lifetime change is inherited.', 'Acquired traits from use are not passed to offspring.'),
      miss('Evolution only happens to plants, not animals', 'All living populations can evolve, including animals.', 'Reconsider the level at which evolution acts.'),
    ],
    lesson:
      'Evolution acts on populations across generations as allele frequencies shift, not on individuals within a lifetime. Traits acquired through use or environment are generally not heritable. Longer-necked giraffes arose because variation in neck length already existed and individuals with longer necks left more offspring (natural selection).',
    source,
    generated: true,
  },
  {
    id: 7545016,
    chapter: 'Evolution and Biological Diversity',
    title: 'Homologous versus analogous structures',
    prompt:
      'A human arm and a whale flipper share the same underlying bone arrangement but serve different functions. What does this tell us?',
    correct: 'They are homologous structures, evidence of descent from a common ancestor',
    wrong: [
      miss('They are analogous structures with no shared ancestry', 'Analogous structures share function but not underlying anatomy; here the bone plan is the same.', 'Shared internal structure points to common ancestry, not just similar use.'),
      miss('They prove the two species are the same species', 'Sharing an ancestor does not make different species the same species.', 'Common ancestry is not the same as being one species.'),
      miss('They show the structures appeared by chance with no relationship', 'A matching bone plan across species is strong evidence of relationship, not coincidence.', 'Think about what shared anatomy implies about descent.'),
    ],
    lesson:
      'Homologous structures share a common anatomical plan inherited from a shared ancestor, even when their functions differ (arm, flipper, wing, leg). Analogous structures, like a bird wing and an insect wing, perform similar jobs but evolved independently and have different underlying structure. Homology is a key line of evidence for common descent.',
    source,
    generated: true,
  },
  // Chapter 7: Ecology and Human Impacts
  {
    id: 7545017,
    chapter: 'Ecology and Human Impacts',
    title: 'Nitrogen fixation',
    prompt:
      'Plants cannot use nitrogen gas (N2) directly from the air. Which process converts atmospheric nitrogen into a form plants can absorb?',
    correct: 'Nitrogen fixation by bacteria, which converts N2 into ammonium/nitrates',
    wrong: [
      miss('Denitrification, which returns nitrogen gas to the atmosphere', 'Denitrification does the opposite, releasing N2 back to the air rather than making it usable.', 'You need the step that brings nitrogen into the soil, not out of it.'),
      miss('Photosynthesis, which fixes nitrogen along with carbon', 'Photosynthesis fixes carbon dioxide, not nitrogen gas.', 'Nitrogen is handled by specialized bacteria, not by photosynthesis.'),
      miss('Transpiration, which pulls nitrogen up through the plant', 'Transpiration moves water through the plant and does not convert N2.', 'Look for the step that chemically changes nitrogen gas.'),
    ],
    lesson:
      'Atmospheric N2 is very stable, so most organisms cannot use it. Nitrogen-fixing bacteria (some living in legume root nodules) convert N2 into ammonium, which nitrifying bacteria turn into nitrates that plants absorb. Decomposition recycles nitrogen, and denitrifying bacteria return N2 to the air, completing the nitrogen cycle.',
    source,
    generated: true,
  },
])

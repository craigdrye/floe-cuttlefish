import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe col-high-school-biology top-up'

export const colHighSchoolBiologyHigh103TopUpBQuestions: Question[] = makeQuestionBank('High', [
  // Chapter: Cellular respiration
  {
    id: 7902500,
    chapter: 'Cellular respiration',
    title: 'Net ATP from glycolysis',
    prompt:
      'Glycolysis breaks one glucose molecule into two pyruvate molecules in the cytoplasm. What is the net gain of ATP directly produced by glycolysis itself?',
    correct: '2 ATP',
    wrong: [
      miss('38 ATP', 'About 36 to 38 ATP is the total yield from the entire aerobic process, not from glycolysis alone.', 'The question asks only about the glycolysis step, not the whole pathway.'),
      miss('4 ATP', '4 ATP are made during glycolysis, but 2 were invested to start it, so the net is 2.', 'Subtract the ATP used to start the reaction from the ATP produced.'),
      miss('0 ATP', 'Glycolysis does produce a net gain of ATP without needing oxygen.', 'Glycolysis is where the cell first captures usable energy from glucose.'),
    ],
    lesson:
      'Glycolysis splits glucose into two pyruvate molecules in the cytoplasm and does not require oxygen. It produces 4 ATP but spends 2 to begin, giving a net of 2 ATP plus 2 NADH. The much larger ATP yield comes later from the Krebs cycle and the electron transport chain.',
    source,
    generated: true,
  },
  {
    id: 7902501,
    chapter: 'Cellular respiration',
    title: 'Final electron acceptor',
    prompt:
      'In aerobic cellular respiration, what molecule serves as the final electron acceptor at the end of the electron transport chain?',
    correct: 'Oxygen',
    wrong: [
      miss('Carbon dioxide', 'Carbon dioxide is a waste product released during the Krebs cycle, not the electron acceptor.', 'Think about what we breathe in versus what we breathe out.'),
      miss('Glucose', 'Glucose is the original fuel that donates electrons, not the molecule that accepts them at the end.', 'The final acceptor is taken in from the air.'),
      miss('Water', 'Water is the product formed when oxygen accepts electrons, not the acceptor itself.', 'Water is the result, so identify what combines with electrons and hydrogen to form it.'),
    ],
    lesson:
      'The electron transport chain passes electrons down a series of proteins in the inner mitochondrial membrane to pump protons and drive ATP synthesis. Oxygen accepts the spent electrons at the end and combines with hydrogen ions to form water. Without oxygen, the chain backs up and aerobic respiration stops.',
    source,
    generated: true,
  },
  {
    id: 7902502,
    chapter: 'Cellular respiration',
    title: 'Fermentation in muscle cells',
    prompt:
      'When human muscle cells run low on oxygen during intense exercise, they switch to lactic acid fermentation. What is the main purpose of fermentation for the cell?',
    correct: 'To regenerate NAD+ so glycolysis can keep producing ATP',
    wrong: [
      miss('To produce large amounts of ATP directly', 'Fermentation itself produces no extra ATP; the ATP still comes from glycolysis.', 'Ask what fermentation supplies back to glycolysis.'),
      miss('To break down lactic acid into glucose', 'Fermentation makes lactic acid; it does not convert it back to glucose.', 'Consider the direction of the reaction and what coenzyme is recycled.'),
      miss('To use oxygen more efficiently', 'Fermentation is used precisely because oxygen is scarce, not to use it better.', 'Fermentation is an anaerobic backup pathway.'),
    ],
    lesson:
      'Glycolysis needs a supply of NAD+ to keep running. When oxygen is unavailable, the electron transport chain cannot recycle NADH back to NAD+. Fermentation solves this by converting pyruvate to lactic acid (or ethanol in yeast), regenerating NAD+ so glycolysis can continue making a small amount of ATP.',
    source,
    generated: true,
  },
  {
    id: 7902503,
    chapter: 'Cellular respiration',
    title: 'Location of the Krebs cycle',
    prompt:
      'Where in a eukaryotic cell does the Krebs cycle (citric acid cycle) take place?',
    correct: 'The mitochondrial matrix',
    wrong: [
      miss('The cytoplasm', 'Glycolysis occurs in the cytoplasm, but the Krebs cycle takes place inside the mitochondrion.', 'Recall which stage happens before pyruvate enters the mitochondrion.'),
      miss('The inner mitochondrial membrane', 'The inner membrane houses the electron transport chain, not the Krebs cycle.', 'Distinguish the fluid interior from the folded membrane.'),
      miss('The ribosomes', 'Ribosomes build proteins and have no role in the Krebs cycle.', 'Think about which organelle is the powerhouse of the cell.'),
    ],
    lesson:
      'After glycolysis, pyruvate enters the mitochondrion and is converted to acetyl-CoA, which enters the Krebs cycle in the mitochondrial matrix. The cycle releases carbon dioxide and loads electron carriers NADH and FADH2. These carriers then deliver electrons to the inner membrane for the electron transport chain.',
    source,
    generated: true,
  },

  // Chapter: Photosynthesis
  {
    id: 7902504,
    chapter: 'Photosynthesis',
    title: 'Inputs of photosynthesis',
    prompt:
      'Which set of raw materials does a plant use as the inputs for photosynthesis?',
    correct: 'Carbon dioxide, water, and light energy',
    wrong: [
      miss('Oxygen, glucose, and light energy', 'Oxygen and glucose are the products of photosynthesis, not the inputs.', 'Photosynthesis runs the opposite direction from respiration.'),
      miss('Carbon dioxide, oxygen, and water', 'Oxygen is released, not consumed, during photosynthesis.', 'Identify which gas is taken in versus given off.'),
      miss('Glucose, water, and oxygen', 'These are largely the materials of respiration, not the inputs of photosynthesis.', 'List what enters the leaf to be built into sugar.'),
    ],
    lesson:
      'Photosynthesis uses carbon dioxide from the air, water from the soil, and light energy captured by chlorophyll. These are converted into glucose and oxygen. The overall reaction is essentially the reverse of cellular respiration, storing light energy in the chemical bonds of sugar.',
    source,
    generated: true,
  },
  {
    id: 7902505,
    chapter: 'Photosynthesis',
    title: 'Source of released oxygen',
    prompt:
      'During photosynthesis, the oxygen gas a plant releases comes from the splitting of which molecule?',
    correct: 'Water',
    wrong: [
      miss('Carbon dioxide', 'The carbon and oxygen from carbon dioxide are used to build sugar, not released as O2.', 'Recall the role of the light reactions in splitting a molecule.'),
      miss('Glucose', 'Glucose is a product built later; it is not split to release oxygen.', 'The oxygen comes from a reactant, not a product.'),
      miss('Chlorophyll', 'Chlorophyll absorbs light but is not consumed or split to release oxygen.', 'Identify the input molecule broken apart in the light reactions.'),
    ],
    lesson:
      'In the light-dependent reactions, water molecules are split (photolysis) to supply electrons and hydrogen ions and to replace electrons lost by chlorophyll. The oxygen released as a by-product comes entirely from this splitting of water, which is why plants give off O2 in the light.',
    source,
    generated: true,
  },
  {
    id: 7902506,
    chapter: 'Photosynthesis',
    title: 'Role of the Calvin cycle',
    prompt:
      'What does the Calvin cycle (the light-independent reactions) accomplish in photosynthesis?',
    correct: 'It uses ATP and NADPH to build sugar from carbon dioxide',
    wrong: [
      miss('It captures light energy to make ATP and NADPH', 'That is the job of the light-dependent reactions, which power the Calvin cycle.', 'The Calvin cycle consumes ATP and NADPH rather than making them.'),
      miss('It splits water to release oxygen', 'Water splitting happens in the light reactions, not the Calvin cycle.', 'The Calvin cycle works with carbon, not water splitting.'),
      miss('It breaks glucose down to release energy', 'Breaking down glucose is cellular respiration, not the Calvin cycle.', 'The Calvin cycle builds sugar rather than breaking it down.'),
    ],
    lesson:
      'The Calvin cycle takes place in the stroma of the chloroplast and does not directly require light. It uses the ATP and NADPH produced by the light reactions to fix carbon dioxide into organic molecules, ultimately building glucose. Because it depends on those products, it stops soon after light is removed.',
    source,
    generated: true,
  },
  {
    id: 7902507,
    chapter: 'Photosynthesis',
    title: 'Function of chlorophyll',
    prompt:
      'A leaf appears green because chlorophyll absorbs red and blue light but reflects green light. What is the main role of chlorophyll in photosynthesis?',
    correct: 'To absorb light energy that powers the light-dependent reactions',
    wrong: [
      miss('To absorb carbon dioxide from the air', 'Carbon dioxide enters through stomata; chlorophyll absorbs light, not gas.', 'Chlorophyll is a light-capturing pigment.'),
      miss('To store the glucose the plant produces', 'Glucose is stored as starch elsewhere; chlorophyll does not store sugar.', 'Connect the pigment to energy capture, not storage.'),
      miss('To give the plant structural support', 'Support comes from cell walls and tissues, not from a pigment.', 'Think about what pigments do with light.'),
    ],
    lesson:
      'Chlorophyll is the main pigment in chloroplasts. It absorbs light most strongly in the red and blue wavelengths and reflects green, which is why plants look green. The absorbed light energy excites electrons that drive the light-dependent reactions, producing the ATP and NADPH the Calvin cycle needs.',
    source,
    generated: true,
  },

  // Chapter: Cell division
  {
    id: 7902508,
    chapter: 'Cell division',
    title: 'Chromosome number after mitosis',
    prompt:
      'A human skin cell with 46 chromosomes undergoes mitosis. How many chromosomes does each of the two daughter cells contain?',
    correct: '46 chromosomes',
    wrong: [
      miss('23 chromosomes', 'Halving the chromosome number happens in meiosis to make gametes, not in mitosis.', 'Mitosis makes identical copies, not half-sets.'),
      miss('92 chromosomes', 'The number doubles only briefly during replication, then is split equally into the daughter cells.', 'The doubled DNA is divided between two cells.'),
      miss('48 chromosomes', 'Mitosis does not add chromosomes; it produces an exact copy of the original.', 'Daughter cells are genetically identical to the parent.'),
    ],
    lesson:
      'Mitosis produces two daughter cells that are genetically identical to the parent cell. DNA is replicated so each chromosome has two sister chromatids, then the chromatids are separated equally. The result is two diploid cells, each with the full set of 46 chromosomes, used for growth and repair.',
    source,
    generated: true,
  },
  {
    id: 7902509,
    chapter: 'Cell division',
    title: 'Purpose of meiosis',
    prompt:
      'What is the main biological purpose of meiosis?',
    correct: 'To produce haploid gametes for sexual reproduction',
    wrong: [
      miss('To repair damaged tissues in the body', 'Tissue repair and growth use mitosis, which makes identical body cells.', 'Meiosis is tied to reproduction, not repair.'),
      miss('To make identical copies of body cells', 'Meiosis produces genetically varied, non-identical cells, unlike mitosis.', 'Think about which division creates variation.'),
      miss('To increase the chromosome number in cells', 'Meiosis halves the chromosome number rather than increasing it.', 'Gametes must have half the chromosomes so fertilization restores the full set.'),
    ],
    lesson:
      'Meiosis is a special two-stage division that produces gametes (eggs and sperm) with half the normal chromosome number. This ensures that when two gametes fuse at fertilization, the offspring has the correct diploid number. Crossing over and independent assortment during meiosis also create genetic variation.',
    source,
    generated: true,
  },
  {
    id: 7902510,
    chapter: 'Cell division',
    title: 'Crossing over',
    prompt:
      'During prophase I of meiosis, homologous chromosomes exchange segments of DNA. What is this process called, and what does it produce?',
    correct: 'Crossing over, which increases genetic variation',
    wrong: [
      miss('Replication, which copies the DNA', 'DNA replication happens earlier, during S phase, before meiosis begins.', 'This event involves swapping segments between two chromosomes.'),
      miss('Cytokinesis, which divides the cytoplasm', 'Cytokinesis splits the cell at the very end, not the exchange of DNA segments.', 'Focus on the swapping of genetic material, not cell splitting.'),
      miss('Nondisjunction, which causes errors', 'Nondisjunction is a mistake in chromosome separation, not the normal exchange of segments.', 'Crossing over is a normal, beneficial source of variation.'),
    ],
    lesson:
      'In prophase I, homologous chromosomes pair up and exchange matching segments in a process called crossing over (recombination). This shuffles alleles between chromosomes, creating new combinations not present in either parent chromosome. Along with independent assortment, crossing over is a major source of genetic diversity.',
    source,
    generated: true,
  },
  {
    id: 7902511,
    chapter: 'Cell division',
    title: 'The cell cycle checkpoint',
    prompt:
      'The cell cycle has checkpoints that must be passed before division continues. What is the main role of these checkpoints?',
    correct: 'To verify that conditions and DNA are correct before proceeding',
    wrong: [
      miss('To speed up division as fast as possible', 'Checkpoints can pause the cycle to prevent errors, not rush it.', 'Their purpose is quality control, not speed.'),
      miss('To copy the DNA during the M phase', 'DNA is copied during S phase, not at the checkpoints during M phase.', 'Checkpoints inspect rather than copy.'),
      miss('To permanently stop all cell division', 'Checkpoints regulate the cycle but do not permanently halt all division.', 'They allow division when conditions are right.'),
    ],
    lesson:
      'Checkpoints act as quality-control stops in the cell cycle, for example checking that DNA is undamaged and fully replicated before mitosis. If a problem is detected, the cycle pauses for repair or the cell may undergo programmed death. Loss of checkpoint control can allow damaged cells to divide uncontrollably, as in cancer.',
    source,
    generated: true,
  },

  // Chapter: Classical genetics and heredity
  {
    id: 7902512,
    chapter: 'Classical genetics and heredity',
    title: 'Genotype versus phenotype',
    prompt:
      'A pea plant has the genotype Tt for height, where T (tall) is dominant over t (short). What is the plant\'s phenotype?',
    correct: 'Tall',
    wrong: [
      miss('Short', 'Short would require two recessive alleles (tt); one dominant T allele makes the plant tall.', 'A single dominant allele is enough to show the dominant trait.'),
      miss('Medium height between tall and short', 'In simple dominance there is no blending; the dominant trait fully shows.', 'This is complete dominance, not blending of traits.'),
      miss('Tt', 'Tt is the genotype, not the phenotype; the phenotype is the visible trait.', 'Phenotype describes appearance, not the letters of the alleles.'),
    ],
    lesson:
      'Genotype is the genetic makeup (the alleles present), while phenotype is the observable trait. Because T is dominant, a Tt plant shows the tall phenotype even though it carries one recessive allele. Only a tt genotype, with two recessive alleles, produces the short phenotype.',
    source,
    generated: true,
  },
  {
    id: 7902513,
    chapter: 'Classical genetics and heredity',
    title: 'Monohybrid cross ratio',
    prompt:
      'Two heterozygous tall pea plants (Tt) are crossed. What is the expected phenotype ratio of tall to short offspring?',
    correct: '3 tall : 1 short',
    wrong: [
      miss('1 tall : 1 short', 'A 1:1 ratio comes from crossing a heterozygote with a homozygous recessive, not two heterozygotes.', 'Set up the Punnett square for Tt x Tt and count phenotypes.'),
      miss('All tall', 'Although tall is common, the tt combination still appears in one of four boxes.', 'One quarter of the offspring inherit two recessive alleles.'),
      miss('1 tall : 3 short', 'This reverses the ratio; the dominant phenotype is more common in this cross.', 'Three of four boxes contain at least one dominant allele.'),
    ],
    lesson:
      'A Tt x Tt cross gives offspring in the genotype ratio 1 TT : 2 Tt : 1 tt. Since both TT and Tt show the dominant tall phenotype, three of four offspring are tall and one is short, a 3:1 phenotype ratio. This classic Mendelian result reflects how dominant and recessive alleles combine.',
    source,
    generated: true,
  },
  {
    id: 7902514,
    chapter: 'Classical genetics and heredity',
    title: 'Law of segregation',
    prompt:
      'Mendel\'s law of segregation describes what happens to alleles during gamete formation. Which statement best expresses this law?',
    correct: 'The two alleles for a trait separate so each gamete carries only one',
    wrong: [
      miss('Both alleles for a trait stay together in each gamete', 'If both stayed together, gametes would be diploid and ratios would not work.', 'Each gamete must receive only one allele per gene.'),
      miss('Alleles for different traits are always inherited together', 'That contradicts the law of independent assortment, and traits often sort independently.', 'This statement is about a different law and is also generally false.'),
      miss('New alleles are created during gamete formation', 'Segregation separates existing alleles; it does not create new ones.', 'No new alleles are made, only separated.'),
    ],
    lesson:
      'The law of segregation states that the two alleles an individual carries for a gene separate during meiosis, so each gamete receives just one allele. At fertilization, offspring then inherit one allele from each parent. This explains why recessive traits can reappear in later generations.',
    source,
    generated: true,
  },
  {
    id: 7902515,
    chapter: 'Classical genetics and heredity',
    title: 'Test cross logic',
    prompt:
      'A tall pea plant could be TT or Tt. To determine which, it is crossed with a short (tt) plant. If any short offspring appear, what does that reveal about the tall parent?',
    correct: 'The tall parent must be heterozygous (Tt)',
    wrong: [
      miss('The tall parent must be homozygous dominant (TT)', 'A TT parent crossed with tt produces only tall (Tt) offspring, never short.', 'Short offspring require a recessive allele from the tall parent.'),
      miss('The short parent must be heterozygous', 'A short plant showing the recessive trait must be tt, by definition homozygous.', 'The recessive phenotype only appears with two recessive alleles.'),
      miss('The cross cannot reveal anything useful', 'A test cross is specifically designed to reveal an unknown genotype.', 'The appearance of short offspring is informative.'),
    ],
    lesson:
      'A test cross pairs an individual showing a dominant trait with a homozygous recessive individual. If the dominant parent is TT, all offspring are tall; if it is Tt, about half are short. So the appearance of any short (tt) offspring proves the tall parent carried a hidden recessive allele and is heterozygous.',
    source,
    generated: true,
  },
  {
    id: 7902516,
    chapter: 'Classical genetics and heredity',
    title: 'Codominance versus incomplete dominance',
    prompt:
      'In humans with blood type AB, both the A and B antigens are fully expressed on red blood cells. This inheritance pattern is an example of what?',
    correct: 'Codominance',
    wrong: [
      miss('Incomplete dominance', 'Incomplete dominance blends traits into an intermediate; here both alleles show fully and separately.', 'Ask whether the two traits blend or appear together unchanged.'),
      miss('Complete dominance', 'In complete dominance only one allele shows; in type AB both show at once.', 'Both alleles are visible, so neither masks the other.'),
      miss('Sex-linked inheritance', 'Blood type is on an autosome, not a sex chromosome.', 'Sex linkage is about genes on the X or Y chromosome.'),
    ],
    lesson:
      'Codominance occurs when both alleles in a heterozygote are fully and separately expressed, as in blood type AB where both A and B antigens appear. This differs from incomplete dominance, where the heterozygote shows a blended intermediate (such as pink from red and white flowers). In codominance neither allele is hidden or blended.',
    source,
    generated: true,
  },

  // Chapter: Sex-linked traits and pedigrees
  {
    id: 7902517,
    chapter: 'Sex-linked traits and pedigrees',
    title: 'Why color blindness is more common in males',
    prompt:
      'Red-green color blindness is a recessive trait carried on the X chromosome. Why is it more common in males than in females?',
    correct: 'Males have only one X chromosome, so one recessive allele causes the trait',
    wrong: [
      miss('The allele is carried on the Y chromosome', 'The color blindness allele is on the X chromosome, not the Y.', 'Recall which chromosome carries the gene.'),
      miss('Males inherit two recessive alleles more easily', 'Males have only one X, so they cannot carry two copies of an X-linked gene.', 'Count how many X chromosomes a male has.'),
      miss('The trait is dominant in males but recessive in females', 'The allele is recessive in everyone; the difference is the number of X chromosomes.', 'Dominance does not change between sexes here.'),
    ],
    lesson:
      'Males are XY, so they have only one X chromosome. For an X-linked recessive trait, a single recessive allele is enough to show the condition because there is no second X to mask it. Females are XX and usually need two recessive alleles to be affected, making them more often carriers than affected.',
    source,
    generated: true,
  },
  {
    id: 7902518,
    chapter: 'Sex-linked traits and pedigrees',
    title: 'Carrier mother cross',
    prompt:
      'A carrier mother (X^H X^h) for hemophilia has children with an unaffected father (X^H Y). What fraction of their sons is expected to have hemophilia?',
    correct: 'One half of the sons',
    wrong: [
      miss('None of the sons', 'The mother can pass the X^h allele, so some sons will be affected.', 'Track which X chromosome each son receives from the mother.'),
      miss('All of the sons', 'The mother also carries a healthy X^H allele, so only some sons inherit X^h.', 'The mother passes one of her two X chromosomes at random.'),
      miss('One quarter of the sons', 'Half of sons receive the X^h; the one-quarter figure would count all children, not just sons.', 'The question asks specifically about sons.'),
    ],
    lesson:
      'Sons inherit their single X from their mother and their Y from their father. A carrier mother (X^H X^h) passes either the healthy or the affected X with equal chance, so half her sons receive X^h and have hemophilia. Daughters receive X^H from the father, so none are affected, though half are carriers.',
    source,
    generated: true,
  },
  {
    id: 7902519,
    chapter: 'Sex-linked traits and pedigrees',
    title: 'Reading a pedigree',
    prompt:
      'In a pedigree chart, two unaffected parents have a child who shows a genetic disorder. What does this most strongly suggest about the trait?',
    correct: 'The trait is recessive',
    wrong: [
      miss('The trait is dominant', 'A dominant trait would have to appear in at least one parent to show in the child.', 'Affected children of unaffected parents point to a hidden allele.'),
      miss('The trait was caused by a new infection', 'A pedigree tracks inherited genetic traits, not infections.', 'Pedigrees follow patterns of inheritance.'),
      miss('The parents are not the biological parents', 'There is a simple genetic explanation, so this is not the most reasonable conclusion.', 'Consider how two carriers can have an affected child.'),
    ],
    lesson:
      'When two unaffected parents produce an affected child, the trait is almost certainly recessive: both parents are carriers who each passed a recessive allele. A dominant trait, by contrast, would appear in every generation and could not skip both parents. Pedigrees use such patterns to deduce dominance and linkage.',
    source,
    generated: true,
  },

  // Chapter: DNA structure and replication
  {
    id: 7902520,
    chapter: 'DNA structure and replication',
    title: 'Complementary base pairing',
    prompt:
      'In DNA, the nitrogenous bases pair in a specific way. Which pairing is correct?',
    correct: 'Adenine pairs with thymine, and guanine pairs with cytosine',
    wrong: [
      miss('Adenine pairs with guanine, and thymine pairs with cytosine', 'These pairings mismatch purines and pyrimidines; the correct pairs are A-T and G-C.', 'Each pair joins one larger purine with one smaller pyrimidine.'),
      miss('Adenine pairs with cytosine, and guanine pairs with thymine', 'These are incorrect pairings; A always pairs with T and G with C.', 'Remember the rule A-T and G-C.'),
      miss('Each base can pair with any other base', 'Base pairing is highly specific, not random, which is what keeps the code stable.', 'The specificity comes from hydrogen bonding shapes.'),
    ],
    lesson:
      'DNA bases follow complementary base-pairing rules: adenine bonds with thymine (A-T) and guanine bonds with cytosine (G-C). Each pair links a purine with a pyrimidine, giving the double helix a uniform width. This specific pairing lets each strand serve as a template for making an exact copy.',
    source,
    generated: true,
  },
  {
    id: 7902521,
    chapter: 'DNA structure and replication',
    title: 'Semiconservative replication',
    prompt:
      'DNA replication is described as semiconservative. What does this mean for each new DNA molecule produced?',
    correct: 'Each new molecule has one original strand and one newly made strand',
    wrong: [
      miss('Each new molecule is made of two brand-new strands', 'That would be conservative replication, which experiments have ruled out.', 'One strand of the parent is kept in each daughter molecule.'),
      miss('Both original strands stay together in one new molecule', 'The original strands separate and each serves as a template, so they do not stay paired.', 'The parent strands act as templates and end up in different molecules.'),
      miss('The new molecule contains only fragments of the original', 'Replication produces complete strands, not just scattered fragments.', 'Each daughter molecule is a full double helix.'),
    ],
    lesson:
      'In semiconservative replication, the double helix unzips and each original strand acts as a template for a new complementary strand. Each resulting DNA molecule therefore contains one old (conserved) strand and one new strand. The Meselson-Stahl experiment confirmed this model over conservative and dispersive alternatives.',
    source,
    generated: true,
  },
  {
    id: 7902522,
    chapter: 'DNA structure and replication',
    title: 'Calculating base percentages',
    prompt:
      'A sample of double-stranded DNA is found to contain 30% adenine. According to Chargaff\'s rules, what percentage of the DNA is guanine?',
    correct: '20%',
    wrong: [
      miss('30%', 'Guanine equals cytosine, not adenine; A equals T at 30% each, leaving 40% for G and C combined.', 'Use the fact that A=T and G=C, and the totals add to 100%.'),
      miss('40%', '40% is the combined total of guanine and cytosine, which must be split equally between them.', 'Divide the remaining percentage between two equal bases.'),
      miss('70%', '70% would ignore base-pairing rules entirely.', 'Start by finding how much is left after A and T.'),
    ],
    lesson:
      'Chargaff\'s rules state that in double-stranded DNA, %A equals %T and %G equals %C. If adenine is 30%, then thymine is also 30%, accounting for 60% of the bases. The remaining 40% is shared equally by guanine and cytosine, so each is 20%.',
    source,
    generated: true,
  },

  // Chapter: Protein synthesis and the central dogma
  {
    id: 7902523,
    chapter: 'Protein synthesis and the central dogma',
    title: 'Direction of the central dogma',
    prompt:
      'The central dogma of molecular biology describes the normal flow of genetic information in a cell. What is that direction?',
    correct: 'DNA to RNA to protein',
    wrong: [
      miss('Protein to RNA to DNA', 'This reverses the flow; information normally moves from DNA outward, not back from protein.', 'Start with the molecule that stores the genetic instructions.'),
      miss('RNA to DNA to protein', 'DNA is the starting blueprint, transcribed into RNA, not the other way around in the standard pathway.', 'Identify which molecule is the permanent store of information.'),
      miss('DNA to protein to RNA', 'Protein is the end product; RNA is the intermediate made before protein.', 'RNA is the messenger that comes between DNA and protein.'),
    ],
    lesson:
      'The central dogma states that genetic information flows from DNA to RNA to protein. Transcription copies a gene from DNA into messenger RNA, and translation uses that mRNA to assemble a protein. DNA stores the instructions, RNA carries them, and protein carries out the function.',
    source,
    generated: true,
  },
  {
    id: 7902524,
    chapter: 'Protein synthesis and the central dogma',
    title: 'Reading the codon table',
    prompt:
      'A messenger RNA codon is a sequence of three bases that specifies one amino acid. How many bases make up a single codon?',
    correct: 'Three',
    wrong: [
      miss('One', 'A single base could code for only 4 options, far too few for 20 amino acids.', 'Count how many bases are needed to specify 20 amino acids.'),
      miss('Two', 'Two bases give 16 combinations, still not enough for all 20 amino acids.', 'Three bases give 64 combinations, which is enough.'),
      miss('Four', 'Codons are read in groups of three, not four, in the genetic code.', 'The genetic code is read in triplets.'),
    ],
    lesson:
      'The genetic code is read in triplets called codons, each three bases long. With four possible bases, three positions give 64 possible codons, more than enough to specify the 20 amino acids plus start and stop signals. This triplet structure is why mutations that insert or delete one base can shift the reading frame.',
    source,
    generated: true,
  },
  {
    id: 7902525,
    chapter: 'Protein synthesis and the central dogma',
    title: 'Role of transfer RNA',
    prompt:
      'During translation at the ribosome, what is the main job of transfer RNA (tRNA)?',
    correct: 'To bring the correct amino acid to match each mRNA codon',
    wrong: [
      miss('To carry the genetic message out of the nucleus', 'That is the role of messenger RNA, not transfer RNA.', 'Distinguish the molecule that reads codons from the one that delivers amino acids.'),
      miss('To unzip the DNA during replication', 'DNA unzipping is done by enzymes like helicase, not tRNA.', 'tRNA works during translation, not DNA replication.'),
      miss('To join amino acids into a chain on its own', 'The ribosome catalyzes peptide bonds; tRNA delivers the amino acids.', 'tRNA is the delivery molecule, not the bond-former.'),
    ],
    lesson:
      'Transfer RNA molecules each carry a specific amino acid and have an anticodon that pairs with a matching codon on the mRNA. At the ribosome, tRNAs deliver amino acids in the order specified by the codons. The ribosome then links the amino acids together, building the polypeptide.',
    source,
    generated: true,
  },
  {
    id: 7902526,
    chapter: 'Protein synthesis and the central dogma',
    title: 'Transcribing a DNA template',
    prompt:
      'A segment of the DNA template strand reads 3\'-TAC-5\'. What is the corresponding mRNA codon produced during transcription?',
    correct: '5\'-AUG-3\'',
    wrong: [
      miss('5\'-TAC-3\'', 'RNA uses uracil instead of thymine and must be complementary to the template, not identical.', 'Replace thymine with uracil and pair complementary bases.'),
      miss('5\'-ATG-3\'', 'RNA contains uracil (U), not thymine (T), so an mRNA strand never has T.', 'Recall which base replaces thymine in RNA.'),
      miss('5\'-UAC-3\'', 'This is not complementary to the template; complementary pairing gives AUG.', 'Pair each template base with its complement, using U for A.'),
    ],
    lesson:
      'During transcription, RNA polymerase builds an mRNA strand complementary to the DNA template. Bases pair A-U, T-A, G-C, and C-G, with uracil replacing thymine in RNA. A template of 3\'-TAC-5\' produces the mRNA codon 5\'-AUG-3\', which happens to be the start codon for translation.',
    source,
    generated: true,
  },

  // Chapter: Mutations and gene regulation
  {
    id: 7902527,
    chapter: 'Mutations and gene regulation',
    title: 'Frameshift mutation',
    prompt:
      'Inserting a single extra base into the middle of a gene\'s coding sequence usually has a large effect on the protein. Why?',
    correct: 'It shifts the reading frame, changing every codon downstream',
    wrong: [
      miss('It changes only the one amino acid at that position', 'A single point substitution changes one codon, but an insertion shifts the whole frame.', 'Codons are read in groups of three from a fixed starting point.'),
      miss('It prevents the gene from being copied at all', 'The gene can still be transcribed; the problem is how the message is read.', 'The mutation affects reading, not whether copying occurs.'),
      miss('It makes the protein twice as long', 'The protein is usually altered or truncated, not simply doubled in length.', 'Shifting the frame often creates an early stop codon.'),
    ],
    lesson:
      'Because the genetic code is read in non-overlapping triplets, inserting or deleting a base (unless in multiples of three) causes a frameshift. Every codon after the insertion is misread, typically producing a completely different and nonfunctional protein, often ending early at a premature stop codon. This makes frameshifts far more damaging than most single substitutions.',
    source,
    generated: true,
  },
  {
    id: 7902528,
    chapter: 'Mutations and gene regulation',
    title: 'Silent mutation',
    prompt:
      'A point mutation changes a codon from GAA to GAG, but both codons still code for the amino acid glutamate. What type of mutation is this?',
    correct: 'A silent mutation',
    wrong: [
      miss('A missense mutation', 'A missense mutation changes which amino acid is coded; here the amino acid stays the same.', 'Check whether the amino acid actually changed.'),
      miss('A nonsense mutation', 'A nonsense mutation creates a stop codon; this codon still codes for an amino acid.', 'The codon still specifies glutamate, so translation continues.'),
      miss('A frameshift mutation', 'A frameshift comes from inserting or deleting bases; this is a single substitution.', 'No bases were added or removed.'),
    ],
    lesson:
      'The genetic code is redundant: several codons can specify the same amino acid. A silent mutation changes a base but, because of this redundancy, the codon still codes for the same amino acid, so the protein is unchanged. This contrasts with missense (different amino acid) and nonsense (premature stop) mutations.',
    source,
    generated: true,
  },
  {
    id: 7902529,
    chapter: 'Mutations and gene regulation',
    title: 'Why cells regulate genes',
    prompt:
      'A muscle cell and a nerve cell in your body contain the same DNA, yet they look and function very differently. What best explains this?',
    correct: 'Different genes are turned on or off in each cell type',
    wrong: [
      miss('Each cell type has a completely different set of genes', 'Nearly all body cells contain the same complete genome, not different gene sets.', 'The difference is which genes are expressed, not which genes are present.'),
      miss('Muscle cells have lost their DNA over time', 'Most specialized cells keep their full DNA; they do not lose it.', 'The genome stays intact; expression differs.'),
      miss('The cells obtained DNA from different parents', 'All of an individual\'s cells come from the same original fertilized egg.', 'Every body cell shares the same inherited DNA.'),
    ],
    lesson:
      'Almost every cell in the body carries the same full set of genes, yet cells differ because of gene regulation: each cell type expresses a specific subset of genes while keeping others silent. This selective gene expression determines a cell\'s structure and function. Signals, regulatory proteins, and the cell\'s history control which genes are active.',
    source,
    generated: true,
  },

  // Chapter: Biotechnology
  {
    id: 7902530,
    chapter: 'Biotechnology',
    title: 'How PCR is used',
    prompt:
      'The polymerase chain reaction (PCR) is a key laboratory technique. What does PCR accomplish?',
    correct: 'It makes many copies of a specific DNA sequence',
    wrong: [
      miss('It separates DNA fragments by size', 'Separating fragments by size is done by gel electrophoresis, not PCR.', 'PCR is about copying DNA, not sorting it.'),
      miss('It translates DNA directly into protein', 'PCR works only with DNA; it does not make protein.', 'No protein synthesis occurs in a PCR reaction.'),
      miss('It permanently deletes a gene from an organism', 'PCR amplifies DNA in a tube; it does not edit an organism\'s genome.', 'Think about amplification, not gene removal.'),
    ],
    lesson:
      'PCR rapidly amplifies a chosen DNA sequence, producing millions of copies from a tiny starting sample. It works by repeated cycles of heating to separate strands, cooling so primers attach, and using a heat-stable polymerase to copy the strands. This is essential for forensics, diagnostics, and genetic research.',
    source,
    generated: true,
  },
  {
    id: 7902531,
    chapter: 'Biotechnology',
    title: 'Gel electrophoresis separation',
    prompt:
      'In gel electrophoresis, DNA fragments are placed in a gel and an electric current is applied. How do the fragments move through the gel?',
    correct: 'Smaller fragments move farther because they pass through the gel more easily',
    wrong: [
      miss('Larger fragments move farther because they carry more charge', 'Larger fragments move more slowly because they get caught in the gel mesh.', 'Size, not just charge, controls how far a fragment travels.'),
      miss('All fragments move the same distance regardless of size', 'Separation by size is the whole point, so fragments do not move equally.', 'The technique works by sorting fragments by length.'),
      miss('Fragments move toward the negative electrode', 'DNA is negatively charged, so it moves toward the positive electrode.', 'Recall the charge on the DNA backbone.'),
    ],
    lesson:
      'DNA is negatively charged because of its phosphate backbone, so it migrates toward the positive electrode in an electric field. The gel acts like a sieve: smaller fragments slip through more easily and travel farther, while larger fragments lag behind. This sorts a mixture of fragments by size into visible bands.',
    source,
    generated: true,
  },
  {
    id: 7902532,
    chapter: 'Biotechnology',
    title: 'Recombinant DNA and insulin',
    prompt:
      'Human insulin can be produced by bacteria that have had the human insulin gene inserted into them. What is the term for DNA made by combining sequences from two different sources like this?',
    correct: 'Recombinant DNA',
    wrong: [
      miss('Mitochondrial DNA', 'Mitochondrial DNA is the cell\'s own organelle DNA, not engineered combinations.', 'The key idea is joining DNA from different organisms.'),
      miss('Complementary DNA', 'Complementary DNA (cDNA) is made from RNA; it is not defined by combining two sources.', 'Focus on the merging of genes from different organisms.'),
      miss('Junk DNA', 'Junk DNA refers to noncoding regions, not engineered constructs.', 'The term describes deliberately combined DNA.'),
    ],
    lesson:
      'Recombinant DNA is formed when DNA from two different sources is joined, for example inserting a human gene into a bacterial plasmid. The bacteria then read the human gene and manufacture the human protein, such as insulin. This technology underlies the large-scale production of many medical proteins.',
    source,
    generated: true,
  },

  // Chapter: Evolution and natural selection
  {
    id: 7902533,
    chapter: 'Evolution and natural selection',
    title: 'Mechanism of natural selection',
    prompt:
      'Which statement best describes the mechanism of natural selection?',
    correct: 'Individuals with advantageous heritable traits survive and reproduce more',
    wrong: [
      miss('Organisms develop new traits because they need them, then pass them on', 'This is the discredited Lamarckian idea; traits are not acquired through need and inherited.', 'Selection acts on variation that already exists, not on need-driven changes.'),
      miss('Every individual in a population evolves during its lifetime', 'Individuals do not evolve; populations change over generations through differential reproduction.', 'Evolution happens to populations across generations, not to one organism.'),
      miss('Mutations are guided to produce exactly the right adaptation', 'Mutations are random, not directed toward a useful outcome.', 'Variation arises randomly; selection then favors what works.'),
    ],
    lesson:
      'Natural selection works because heritable variation exists in a population and resources are limited. Individuals with traits better suited to the environment tend to survive and reproduce more, passing those traits on. Over many generations the favorable traits become more common, and the population gradually adapts.',
    source,
    generated: true,
  },
  {
    id: 7902534,
    chapter: 'Evolution and natural selection',
    title: 'Source of genetic variation',
    prompt:
      'Natural selection acts on variation in a population, but it cannot create variation. What is the ultimate source of new genetic variation?',
    correct: 'Mutation',
    wrong: [
      miss('Natural selection itself', 'Selection sorts existing variation but does not generate new alleles.', 'Ask what introduces brand-new versions of genes.'),
      miss('The conscious effort of organisms', 'Organisms cannot deliberately create new genes through effort.', 'Variation arises at the molecular level, not by intention.'),
      miss('A constant, unchanging environment', 'A stable environment does not create new alleles; it only affects which survive.', 'Look for the process that changes DNA sequences.'),
    ],
    lesson:
      'Mutation is the original source of new alleles, introducing changes into DNA that may produce new variations. Sexual reproduction then shuffles these alleles into new combinations through recombination and independent assortment. Natural selection and genetic drift act on this variation, but they do not create it.',
    source,
    generated: true,
  },
  {
    id: 7902535,
    chapter: 'Evolution and natural selection',
    title: 'Homologous structures as evidence',
    prompt:
      'The forelimbs of humans, whales, and bats have the same basic bone arrangement despite different functions. What does this similarity provide evidence for?',
    correct: 'Common ancestry through descent with modification',
    wrong: [
      miss('That these animals evolved their limbs completely independently', 'Independently evolved similar structures are analogous, but matching bone patterns indicate shared ancestry.', 'Look at the underlying structure, not just the function.'),
      miss('That the animals currently live in the same habitat', 'Sharing a habitat does not explain matching internal bone structure.', 'Homology reflects ancestry, not current environment.'),
      miss('That the structures have no evolutionary meaning', 'Homologous structures are key evidence for evolution, not meaningless.', 'These shared structures strongly support common descent.'),
    ],
    lesson:
      'Homologous structures share a common underlying anatomy because they were inherited from a common ancestor, even when they now serve different purposes. The shared bone pattern of vertebrate forelimbs is strong evidence of descent with modification. This contrasts with analogous structures, which look similar due to similar function but arose independently.',
    source,
    generated: true,
  },
  {
    id: 7902536,
    chapter: 'Evolution and natural selection',
    title: 'Antibiotic resistance evolution',
    prompt:
      'A population of bacteria is repeatedly exposed to an antibiotic, and over time the bacteria become resistant. What best explains this increase in resistance?',
    correct: 'Resistant bacteria survived and reproduced while susceptible ones died',
    wrong: [
      miss('The antibiotic taught each bacterium how to resist it', 'Bacteria do not learn; resistant variants were already present and were selected.', 'Resistance comes from pre-existing variation, not learning.'),
      miss('Each bacterium changed its own DNA in response to the drug', 'Individual bacteria do not deliberately alter their DNA to fit the environment.', 'Random mutations create resistance before exposure.'),
      miss('The antibiotic created new resistance genes in the bacteria', 'The antibiotic selects for resistance but does not create the genes.', 'The drug filters existing variation rather than creating it.'),
    ],
    lesson:
      'Antibiotic resistance evolves by natural selection. Random mutations produce a few resistant bacteria before exposure. When the antibiotic is applied, susceptible bacteria die while resistant ones survive and reproduce, passing resistance on. Over generations the resistant trait becomes common, which is why overusing antibiotics drives resistance.',
    source,
    generated: true,
  },
  {
    id: 7902537,
    chapter: 'Evolution and natural selection',
    title: 'Genetic drift in small populations',
    prompt:
      'In a very small population, allele frequencies can change from one generation to the next purely by chance, regardless of fitness. What is this process called?',
    correct: 'Genetic drift',
    wrong: [
      miss('Natural selection', 'Natural selection changes frequencies based on fitness, not random chance.', 'This process happens even when traits offer no advantage.'),
      miss('Gene flow', 'Gene flow is the movement of alleles between populations, not random change within one.', 'No migration is involved in this scenario.'),
      miss('Directional selection', 'Directional selection consistently favors one extreme; this is purely random.', 'The change here has no relation to advantage or fitness.'),
    ],
    lesson:
      'Genetic drift is random change in allele frequencies due to chance events in which individuals reproduce. Its effects are strongest in small populations, where chance can quickly increase or eliminate an allele regardless of whether it is helpful. Unlike natural selection, drift is not driven by fitness and can reduce genetic diversity.',
    source,
    generated: true,
  },
  {
    id: 7902538,
    chapter: 'Evolution and natural selection',
    title: 'Defining a biological species',
    prompt:
      'According to the biological species concept, what defines members of the same species?',
    correct: 'They can interbreed and produce fertile offspring',
    wrong: [
      miss('They simply look similar to one another', 'Appearance can be misleading; some look-alike organisms cannot interbreed and some that interbreed look different.', 'The key test is successful reproduction, not appearance.'),
      miss('They live in the same geographic area', 'Different species often share an area, and one species can span many areas.', 'Location does not define a species under this concept.'),
      miss('They have exactly identical DNA', 'Members of a species have very similar but not identical DNA; identical DNA would mean clones.', 'Some genetic variation is normal within a species.'),
    ],
    lesson:
      'The biological species concept defines a species as a group of organisms that can interbreed in nature and produce fertile offspring. Reproductive isolation, not mere appearance or location, marks the boundary between species. When populations can no longer interbreed successfully, speciation has occurred.',
    source,
    generated: true,
  },

  // Chapter: History of life and classification
  {
    id: 7902539,
    chapter: 'History of life and classification',
    title: 'Reading a phylogenetic tree',
    prompt:
      'On a phylogenetic tree, what does a branch point (node) represent?',
    correct: 'A common ancestor from which the branching groups diverged',
    wrong: [
      miss('The exact year a species went extinct', 'A node marks a shared ancestor and divergence, not an extinction date.', 'Branch points show where lineages split apart.'),
      miss('A place where two unrelated species merged into one', 'Lineages split at nodes; they do not generally merge.', 'Trees show divergence from ancestors, not fusion.'),
      miss('The current population size of a species', 'Trees show evolutionary relationships, not population sizes.', 'A node is about ancestry, not numbers.'),
    ],
    lesson:
      'A phylogenetic tree shows hypothesized evolutionary relationships among groups. Each branch point, or node, represents the most recent common ancestor of the lineages that diverge from it. Tracing back to shared nodes reveals how closely related different groups are.',
    source,
    generated: true,
  },
  {
    id: 7902540,
    chapter: 'History of life and classification',
    title: 'Domains of life',
    prompt:
      'Modern classification places all living things into three domains. What are they?',
    correct: 'Bacteria, Archaea, and Eukarya',
    wrong: [
      miss('Plants, Animals, and Fungi', 'These are kingdoms within Eukarya, not the three top-level domains.', 'Domains are broader than kingdoms.'),
      miss('Prokaryotes, Eukaryotes, and Viruses', 'Viruses are not classified in a domain, and prokaryotes split into Bacteria and Archaea.', 'The prokaryotes are divided into two separate domains.'),
      miss('Monera, Protista, and Animalia', 'These are older kingdom-level categories, not the current three domains.', 'The three-domain system replaced this older scheme.'),
    ],
    lesson:
      'The three-domain system divides life into Bacteria, Archaea, and Eukarya. Bacteria and Archaea are both prokaryotic but differ greatly in their biochemistry, while Eukarya includes all organisms with nucleated cells: protists, fungi, plants, and animals. This system reflects deep evolutionary relationships revealed by molecular data.',
    source,
    generated: true,
  },
  {
    id: 7902541,
    chapter: 'History of life and classification',
    title: 'Importance of early photosynthesis',
    prompt:
      'Early photosynthetic organisms (cyanobacteria) dramatically changed Earth\'s early atmosphere. What was their major impact?',
    correct: 'They added large amounts of oxygen to the atmosphere',
    wrong: [
      miss('They removed all oxygen from the atmosphere', 'They produced oxygen rather than removing it, in what is called the Great Oxidation Event.', 'Photosynthesis releases oxygen as a by-product.'),
      miss('They filled the atmosphere with methane only', 'While early atmospheres had methane, cyanobacteria are known for adding oxygen.', 'Connect photosynthesis to the gas it gives off.'),
      miss('They had no effect on the atmosphere', 'Their oxygen output transformed Earth and enabled aerobic life.', 'Their impact was enormous, not negligible.'),
    ],
    lesson:
      'Photosynthetic cyanobacteria released oxygen as a by-product, gradually building up atmospheric oxygen in the Great Oxidation Event over two billion years ago. This rising oxygen reshaped Earth\'s chemistry, drove many anaerobic organisms to decline, and set the stage for aerobic respiration and complex life.',
    source,
    generated: true,
  },

  // Chapter: Ecology and ecosystems
  {
    id: 7902542,
    chapter: 'Ecology and ecosystems',
    title: 'Energy loss between trophic levels',
    prompt:
      'In a food chain, roughly how much of the energy at one trophic level is passed on to the next level up?',
    correct: 'About 10%',
    wrong: [
      miss('About 90%', 'Around 90% is lost, mostly as heat and through life processes, so only about 10% transfers.', 'Most energy is used or lost, not passed on.'),
      miss('About 50%', 'The transfer is far less efficient than half; only about a tenth moves up.', 'Recall the common rule of thumb for energy transfer.'),
      miss('Nearly 100%', 'Energy transfer is highly inefficient, so almost none would mean food chains could be endless.', 'Energy is steadily lost at each step.'),
    ],
    lesson:
      'Only about 10% of the energy stored at one trophic level is passed to the next; the rest is used for the organism\'s own life processes or lost as heat. This inefficiency explains why food chains rarely have more than four or five levels and why top predators are relatively few.',
    source,
    generated: true,
  },
  {
    id: 7902543,
    chapter: 'Ecology and ecosystems',
    title: 'Role of decomposers',
    prompt:
      'What essential role do decomposers such as bacteria and fungi play in an ecosystem?',
    correct: 'They break down dead matter and recycle nutrients back to the environment',
    wrong: [
      miss('They produce food using sunlight for the ecosystem', 'Producing food from sunlight is the role of producers, not decomposers.', 'Decomposers break things down rather than build with light.'),
      miss('They are the top predators that control all populations', 'Decomposers are not predators; they feed on dead material.', 'Their role is recycling, not hunting.'),
      miss('They prevent any nutrients from re-entering the soil', 'Decomposers release nutrients into the soil rather than blocking them.', 'They return nutrients, not withhold them.'),
    ],
    lesson:
      'Decomposers break down dead organisms and waste, releasing the stored nutrients back into the soil, water, and air. This recycling makes nutrients like nitrogen and phosphorus available again to producers. Without decomposers, dead matter and locked-up nutrients would accumulate and nutrient cycles would stall.',
    source,
    generated: true,
  },
  {
    id: 7902544,
    chapter: 'Ecology and ecosystems',
    title: 'Carbon cycle processes',
    prompt:
      'Which pair of processes moves carbon between the atmosphere and living things in opposite directions?',
    correct: 'Photosynthesis removes carbon dioxide; respiration releases it',
    wrong: [
      miss('Photosynthesis releases carbon dioxide; respiration removes it', 'This reverses the roles; photosynthesis takes in carbon dioxide and respiration gives it off.', 'Recall which process builds sugar from carbon dioxide.'),
      miss('Both photosynthesis and respiration release carbon dioxide', 'Photosynthesis consumes carbon dioxide rather than releasing it.', 'The two processes work in opposite directions.'),
      miss('Both photosynthesis and respiration remove carbon dioxide', 'Respiration releases carbon dioxide as a waste product, not removes it.', 'One process is a source and the other a sink for carbon dioxide.'),
    ],
    lesson:
      'In the carbon cycle, photosynthesis pulls carbon dioxide from the atmosphere and locks the carbon into sugars and other organic molecules. Cellular respiration does the reverse, breaking down those molecules and releasing carbon dioxide back into the air. Together they keep carbon cycling between the living and nonliving world.',
    source,
    generated: true,
  },
  {
    id: 7902545,
    chapter: 'Ecology and ecosystems',
    title: 'Carrying capacity',
    prompt:
      'A population grows quickly, then levels off and fluctuates around a steady number. The size at which it stabilizes is best described as the environment\'s what?',
    correct: 'Carrying capacity',
    wrong: [
      miss('Biotic potential', 'Biotic potential is the maximum possible growth rate, not the stable population level.', 'Carrying capacity is set by limited resources.'),
      miss('Exponential growth rate', 'Exponential growth describes the early rapid phase, not the leveling-off point.', 'The population stops growing exponentially as it nears this limit.'),
      miss('Population density', 'Density is individuals per area, not the maximum the environment can sustain.', 'Look for the term meaning the sustainable maximum.'),
    ],
    lesson:
      'Carrying capacity is the maximum population size an environment can support given its food, space, water, and other resources. As a population approaches it, limiting factors slow growth, producing the characteristic S-shaped (logistic) curve that levels off. The population then fluctuates around this capacity.',
    source,
    generated: true,
  },
  {
    id: 7902546,
    chapter: 'Ecology and ecosystems',
    title: 'Symbiosis: mutualism',
    prompt:
      'Bees collect nectar from flowers and, in doing so, transfer pollen between plants. Both the bees and the plants benefit. What type of relationship is this?',
    correct: 'Mutualism',
    wrong: [
      miss('Parasitism', 'In parasitism one organism is harmed; here both bee and plant benefit.', 'Check whether either partner is harmed.'),
      miss('Commensalism', 'In commensalism one benefits while the other is unaffected; here both benefit.', 'Both partners gain something in this relationship.'),
      miss('Predation', 'Predation involves one organism eating another, which is not what happens here.', 'Neither partner is consumed by the other.'),
    ],
    lesson:
      'Mutualism is a symbiotic relationship in which both species benefit. Bees gain food (nectar) while plants gain pollination, helping them reproduce. This contrasts with commensalism (one benefits, the other unaffected), parasitism (one benefits, the other is harmed), and predation (one eats another).',
    source,
    generated: true,
  },
  {
    id: 7902547,
    chapter: 'Ecology and ecosystems',
    title: 'Keystone species',
    prompt:
      'In some ecosystems, removing a single predator causes the whole community to collapse or change dramatically. A species with this outsized influence is called what?',
    correct: 'A keystone species',
    wrong: [
      miss('An invasive species', 'An invasive species is a non-native organism that spreads harmfully; that is a different concept.', 'The term here describes a native species with disproportionate impact.'),
      miss('A producer', 'Producers make their own food and are not defined by their impact on community structure.', 'Focus on the species\' large effect relative to its abundance.'),
      miss('An indicator species', 'An indicator species reflects ecosystem health but does not necessarily structure the community.', 'The key idea is a species whose removal causes dramatic change.'),
    ],
    lesson:
      'A keystone species has an effect on its ecosystem far greater than its numbers would suggest. Removing it can trigger a cascade of changes and even ecosystem collapse, as when removing a top predator lets prey overgraze. Sea otters and certain sea stars are classic examples of keystone species.',
    source,
    generated: true,
  },
  {
    id: 7902548,
    chapter: 'Ecology and ecosystems',
    title: 'Ecological succession',
    prompt:
      'After a volcanic eruption leaves bare rock, lichens and mosses colonize first, followed gradually by larger plants and a developing community. What is this process called?',
    correct: 'Primary succession',
    wrong: [
      miss('Secondary succession', 'Secondary succession follows a disturbance where soil remains; here the process starts on bare rock with no soil.', 'Check whether soil was already present.'),
      miss('Eutrophication', 'Eutrophication is nutrient enrichment of water bodies, not community development on land.', 'This scenario is about colonizing new land.'),
      miss('Biomagnification', 'Biomagnification is the buildup of toxins up a food chain, unrelated to colonization.', 'Focus on how a community develops over time.'),
    ],
    lesson:
      'Primary succession begins in a lifeless area with no soil, such as bare rock after a volcanic eruption or a retreating glacier. Pioneer species like lichens and mosses break down rock and build soil, allowing larger plants and a richer community to follow. Secondary succession, by contrast, occurs where soil already exists after a disturbance.',
    source,
    generated: true,
  },
  {
    id: 7902549,
    chapter: 'Ecology and ecosystems',
    title: 'Biomagnification of toxins',
    prompt:
      'A pesticide that does not break down builds up in tissues. In a food chain, where would you expect the highest concentration of this toxin?',
    correct: 'In the top predators',
    wrong: [
      miss('In the producers at the base', 'Producers have the lowest concentrations; the toxin becomes more concentrated higher up.', 'The toxin accumulates as it moves up the chain.'),
      miss('It is spread evenly across all levels', 'Concentrations increase at each level, so they are not equal.', 'Each level eats many organisms from the level below.'),
      miss('In the decomposers only', 'Decomposers process dead matter but are not where biomagnified toxins peak.', 'Think about who eats the most contaminated prey.'),
    ],
    lesson:
      'Persistent toxins that are not broken down or excreted accumulate in organisms, a process called bioaccumulation. As each predator eats many contaminated prey, the toxin becomes more concentrated at higher trophic levels, called biomagnification. Top predators therefore carry the highest concentrations, which is how DDT severely harmed birds of prey.',
    source,
    generated: true,
  },
  {
    id: 7902550,
    chapter: 'Ecology and ecosystems',
    title: 'Nitrogen fixation',
    prompt:
      'Plants need nitrogen but cannot use nitrogen gas (N2) from the air directly. What converts atmospheric nitrogen into a form plants can absorb?',
    correct: 'Nitrogen-fixing bacteria',
    wrong: [
      miss('Sunlight acting directly on the leaves', 'Sunlight powers photosynthesis but does not fix nitrogen for the plant.', 'A living organism carries out this conversion.'),
      miss('Decomposers breaking down rock', 'Decomposers recycle organic matter, but fixing atmospheric N2 specifically requires special bacteria.', 'Focus on converting nitrogen gas, not breaking down rock.'),
      miss('The plant\'s own roots converting N2 directly', 'Plants cannot fix nitrogen gas on their own; they depend on bacteria.', 'Recall which organisms partner with plant roots to supply nitrogen.'),
    ],
    lesson:
      'Nitrogen-fixing bacteria, many living in nodules on the roots of legumes, convert inert atmospheric nitrogen gas into ammonia and related compounds that plants can absorb. This step is essential to the nitrogen cycle because most organisms cannot use N2 directly. The nitrogen then passes through food webs and is eventually returned to the air by other bacteria.',
    source,
    generated: true,
  },
])

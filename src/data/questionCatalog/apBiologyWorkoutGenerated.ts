import { makeQuestionBank } from './base'
import { polish as runPolish } from './polishPipeline'
import {
  AP_WORKOUT_SCIENCE_SUB_TOPICS,
  AP_WORKOUT_SCIENCE_MENTOR_HINTS,
  AP_WORKOUT_SCIENCE_CORRECT_SHORTENED,
} from './apWorkoutSciencePolish'

// Wave 4 HS Sciences (2026-05-18): canonical AP Biology bank. Merged from:
//   - apBiologyWorkoutGenerated (drill set, 50 Q, IDs 401001-401050)
//   - apBiologyExamBatch (exam-style set, 10 Q, IDs 448001-448010)
//   - apBiologyAnimalEcologyBatch (ecology/animal set, trimmed from ~30 to ~20 mechanism rows; IDs 460xxx kept where mechanism-strong)
//   - Chapter 4 (Cell Communication and Cell Cycle) checkpoint/cancer/apoptosis additions (new IDs 4300001-4300012)
//   - Chapter 8 (FRQ / experimental design) additions (new IDs 4300050-4300060)
// Per-distractor explanations throughout. No DEFAULT_FLAW. Chapter labels aligned to AP Biology syllabus (Chemistry of Life,
// Cells, Cell Energetics, Cell Communication/Cycle, Heredity & Gene Expression, Evolution, Ecology, Experimental Design).

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

const q = (
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson:
    'Floe-native AP Biology drill or exam item. Distractors carry per-option explanations and rebound hints. Chapter labels match the AP Biology Course and Exam Description.',
  source: 'Floe AP Biology coverage (merged 2026-05-18)',
})

const _baseApBiologyWorkoutGeneratedQuestions = makeQuestionBank('Science', [
  // ---- Chapter 1: Biology Practices and Chemistry of Life ----
  q(448001, 'Chemistry of Life', 'Water cohesion', 'Which property of water best explains the cohesion between water molecules?', 'Hydrogen bonding between polar water molecules', [
    miss('Ionic bonding between water molecules', 'Water molecules attract through hydrogen bonds, not full ionic bonds.', 'Use polarity and partial charges.'),
    miss('Water being nonpolar', 'Water is polar; its oxygen pulls electron density more than the hydrogens.', 'Look at electron sharing in O-H bonds.'),
    miss('Peptide bonds joining water molecules', 'Peptide bonds join amino acids, not water molecules.', 'Match bond type to molecule.'),
  ]),
  q(4300001, 'Chemistry of Life', 'Macromolecule families', 'Which four macromolecule classes appear in cells?', 'Carbohydrates, lipids, proteins, nucleic acids', [
    miss('Carbohydrates, salts, proteins, water', 'Salts and water are not macromolecule classes in the AP biology framework.', 'Macromolecules are polymers (or large lipids).'),
    miss('Sugars, vitamins, minerals, hormones', 'Vitamins and minerals are micronutrients, not macromolecule classes.', 'Classify by polymer chemistry.'),
    miss('Only proteins and DNA', 'That misses carbohydrates and lipids.', 'Four major classes.'),
  ]),
  q(4300002, 'Chemistry of Life', 'pH scale logic', 'A solution at pH 4 contains how many times more H+ than a solution at pH 6?', '100 times more H+', [
    miss('2 times more H+', 'pH is a base-10 logarithmic scale, not a linear one.', 'Each pH unit is a factor of 10.'),
    miss('The same H+', 'Different pH means different H+ concentrations.', 'pH = -log[H+].'),
    miss('1,000 times more H+', 'That is 3 pH units; the difference here is 2 units.', 'Count the unit gap.'),
  ]),
  q(401050, 'Experimental Design', 'Control group', 'In a biology experiment, a control group exists to:', 'Provide a baseline for comparing the treatment effect', [
    miss('Guarantee the hypothesis is true', 'Controls do not guarantee outcomes.', 'They help isolate the variable.'),
    miss('Receive every possible treatment at once', 'Controls usually receive a placebo or no treatment, not all of them.', 'Baseline matters.'),
    miss('Eliminate the need for data', 'Experiments still need measurements.', 'Controls support interpretation.'),
  ]),

  // ---- Chapter 2: Cell Structure, Membranes, and Transport ----
  q(401001, 'Cell Structure', 'Nucleus role', 'In a eukaryotic cell, the nucleus primarily:', 'Stores DNA and controls gene expression', [
    miss('Produces most ATP directly', 'ATP comes mainly from mitochondria.', 'The nucleus is the genetic control center.'),
    miss('Digests worn-out organelles', 'That is lysosome function.', 'Think DNA storage.'),
    miss('Makes the plasma membrane waterproof', 'Membrane lipids do not depend on the nucleus.', 'Use genetic information.'),
  ]),
  q(401002, 'Cell Structure', 'Ribosomes', 'Ribosomes are the cellular structures that:', 'Build proteins by translating mRNA', [
    miss('Store hereditary information long term', 'DNA stores hereditary information.', 'Ribosomes act on mRNA.'),
    miss('Package proteins for secretion only', 'Golgi modifies and packages.', 'Ribosomes synthesize.'),
    miss('Break down glucose for ATP only', 'Cellular respiration is mainly mitochondrial.', 'Ribosomes make polypeptides.'),
  ]),
  q(401003, 'Cell Structure', 'Mitochondria', 'Mitochondria are most directly associated with:', 'ATP production by cellular respiration', [
    miss('Photosynthesis in animals', 'Animals do not photosynthesize.', 'Mitochondria release energy from food.'),
    miss('Protein translation on mRNA', 'That is ribosome function.', 'Think energy conversion.'),
    miss('Storing digestive enzymes', 'That is lysosome-like.', 'Use ATP.'),
  ]),
  q(401004, 'Cell Structure', 'Chloroplasts', 'Chloroplasts in plants and algae perform:', 'Photosynthesis using light, water, and CO2', [
    miss('Binary fission only', 'Binary fission is prokaryotic cell division.', 'Chloroplasts capture light energy.'),
    miss('Protein digestion', 'Digestive organelles break down materials.', 'Use light and sugar production.'),
    miss('Nerve signaling', 'That is animal physiology.', 'Think plant cells.'),
  ]),
  q(401005, 'Cell Membranes', 'Phospholipid bilayer', 'The cell membrane is mainly a phospholipid bilayer because phospholipids have:', 'Hydrophilic heads and hydrophobic tails', [
    miss('Only hydrophobic heads', 'Heads interact with water.', 'Amphipathic structure drives bilayer formation.'),
    miss('No interaction with water', 'Phospholipids organize because of water interactions.', 'Heads and tails differ.'),
    miss('Only protein subunits', 'Proteins are present but phospholipids form the bilayer.', 'Use lipid structure.'),
  ]),
  q(401006, 'Cell Membranes', 'Diffusion', 'Diffusion is the net movement of particles from:', 'High concentration to low concentration', [
    miss('Low concentration to high concentration without energy', 'That is against the gradient and usually needs energy.', 'Passive diffusion follows the gradient.'),
    miss('Nucleus to mitochondria only', 'Diffusion is not organelle-specific.', 'Use concentration gradient.'),
    miss('Only through protein pumps using ATP', 'That describes active transport.', 'Diffusion is passive.'),
  ]),
  q(401007, 'Cell Membranes', 'Osmosis', 'Osmosis is the diffusion of:', 'Water across a selectively permeable membrane', [
    miss('DNA through a ribosome', 'That is not osmosis.', 'Osmosis concerns water.'),
    miss('Proteins into the nucleus only', 'Protein import is not osmosis.', 'Use water movement.'),
    miss('Electrons down an ETC', 'That is electron transport.', 'Osmosis is water.'),
  ]),
  q(401008, 'Cell Membranes', 'Active transport', 'Active transport differs from diffusion because it:', 'Can move substances against their concentration gradient using cellular energy', [
    miss('Never uses membrane proteins', 'Many active transporters are proteins.', 'Pumps use energy.'),
    miss('Only moves water', 'Water movement is osmosis.', 'Active transport can move ions and molecules.'),
    miss('Always moves high to low with no ATP', 'That is passive diffusion.', 'Against gradient needs energy.'),
  ]),
  q(448002, 'Cell Membranes', 'Selective permeability', 'Small nonpolar molecules cross a phospholipid bilayer more easily than ions because they:', 'Dissolve through the hydrophobic interior of the membrane', [
    miss('Are always smaller than ions', 'Size alone does not predict crossing rate; charge and polarity matter.', 'Compare polarity, not size.'),
    miss('Are repelled by the hydrophobic interior', 'They are compatible with the hydrophobic interior, not repelled.', 'Like dissolves like.'),
    miss('Pass via active transport only', 'They diffuse passively when nonpolar.', 'No ATP needed.'),
  ]),

  // ---- Chapter 3: Cellular Energetics ----
  q(401009, 'Cellular Energetics', 'Photosynthesis equation', 'Photosynthesis uses carbon dioxide and water to produce:', 'Sugars and oxygen', [
    miss('ATP only with no sugar', 'ATP is used in the process; sugar is a main product.', 'Track carbon fixation.'),
    miss('Carbon dioxide and glucose', 'CO2 is a reactant, not a product in the overall equation.', 'Products include glucose and O2.'),
    miss('Nitrogen gas only', 'Nitrogen fixation is separate.', 'Use the photosynthesis equation.'),
  ]),
  q(448003, 'Cellular Energetics', 'Oxygen in respiration', 'In aerobic cellular respiration, oxygen is used mainly as:', 'The final electron acceptor in the electron transport chain', [
    miss('The sugar that gets broken down first', 'Glucose is the fuel, not oxygen.', 'Oxygen acts near the end of the chain.'),
    miss('The enzyme that splits ATP', 'Oxygen is a molecule, not an ATP-splitting enzyme.', 'Track electrons through the pathway.'),
    miss('The source of carbon in glucose', 'Carbon in glucose comes from CO2 in photosynthesis, not from O2 in respiration.', 'Use the electron transport role.'),
  ]),
  q(401010, 'Cellular Energetics', 'Respiration products', 'Cellular respiration uses glucose and oxygen to produce:', 'Carbon dioxide, water, and ATP', [
    miss('Glucose and oxygen', 'Those are reactants.', 'Respiration breaks down glucose.'),
    miss('DNA and RNA', 'Those are information molecules.', 'Think energy release.'),
    miss('Light and chlorophyll', 'Those are photosynthesis components.', 'Use respiration products.'),
  ]),
  q(401011, 'Cellular Energetics', 'ATP role', 'ATP is useful to cells because it:', 'Transfers usable energy through its terminal phosphate bond', [
    miss('Stores genetic information', 'DNA and RNA store information.', 'ATP is energy currency.'),
    miss('Forms the cell wall in animals', 'Animals lack cell walls.', 'ATP powers processes.'),
    miss('Is always a structural protein', 'ATP is a nucleotide.', 'Use energy transfer.'),
  ]),
  q(448004, 'Cellular Energetics', 'Light reactions output', 'What is produced directly by the light reactions of photosynthesis?', 'ATP and NADPH', [
    miss('Glucose only', 'Glucose is assembled later through the Calvin cycle.', 'Light reactions make energy carriers.'),
    miss('Carbon dioxide', 'CO2 is consumed in carbon fixation, not produced directly by light reactions.', 'Separate inputs and outputs.'),
    miss('DNA and ribosomes', 'Those are not direct products of photosynthetic light reactions.', 'Focus on photosynthetic energy transfer.'),
  ]),

  // ---- Chapter 4: Cell Communication and Cell Cycle ----
  q(401012, 'Cell Cycle', 'Mitosis result', 'Mitosis typically produces:', 'Two genetically identical diploid daughter cells', [
    miss('Four genetically diverse gametes', 'That is meiosis.', 'Mitosis preserves chromosome set.'),
    miss('One cell with no DNA', 'DNA is distributed to daughter cells.', 'Think growth and repair.'),
    miss('Only sperm cells', 'Gamete production uses meiosis.', 'Mitosis occurs in somatic cells.'),
  ]),
  q(401013, 'Cell Cycle', 'Meiosis result', 'Meiosis typically produces:', 'Haploid gametes carrying genetic variation', [
    miss('Two identical diploid cells', 'That is mitosis.', 'Meiosis halves chromosome number.'),
    miss('Only body cells for repair', 'Repair uses mitosis.', 'Meiosis makes gametes.'),
    miss('Cells with no chromosomes', 'Gametes still have chromosomes.', 'Haploid means one set.'),
  ]),
  q(401014, 'Cell Cycle', 'Crossing over', 'Crossing over increases genetic variation by:', 'Exchanging DNA between non-sister chromatids of homologous chromosomes', [
    miss('Destroying all chromosomes', 'Crossing over swaps segments, not destroys chromosomes.', 'Homologs swap arms.'),
    miss('Copying RNA into protein', 'That is translation.', 'Crossing over happens in meiosis prophase I.'),
    miss('Moving water through membranes', 'That is osmosis.', 'This is genetic recombination.'),
  ]),
  q(4300003, 'Cell Cycle', 'G1/S checkpoint', 'At the G1/S checkpoint, the cell mainly verifies that:', 'DNA is undamaged and growth signals are adequate', [
    miss('Spindle fibers are attached to every kinetochore', 'That is the spindle assembly checkpoint at the M phase.', 'Each checkpoint guards a different transition.'),
    miss('Cytokinesis has finished', 'Cytokinesis follows mitosis; G1/S is much earlier.', 'Check order of phases.'),
    miss('Glucose levels match the surrounding tissue', 'Glucose sensing is metabolic, not the checkpoint criterion.', 'Focus on DNA integrity.'),
  ]),
  q(4300004, 'Cell Cycle', 'Cyclin role', 'Cyclins drive the cell cycle by:', 'Activating cyclin-dependent kinases that phosphorylate cycle proteins', [
    miss('Cutting chromatids apart directly', 'Separase cleaves cohesin; cyclins activate kinases.', 'Cyclins regulate, separase cuts.'),
    miss('Decoding mRNA into protein', 'That is translation.', 'Cyclins regulate CDKs.'),
    miss('Adding lipids to membranes', 'That is membrane biology, not cell-cycle control.', 'Use kinase regulation.'),
  ]),
  q(4300005, 'Cell Communication', 'Signal transduction', 'Signal transduction is:', 'Conversion of an external signal into an internal cellular response cascade', [
    miss('Random diffusion of all proteins out of the cell', 'Signal transduction is regulated communication.', 'Think receptor to response.'),
    miss('Replication of DNA before mitosis only', 'DNA replication is not signal transduction.', 'Use the communication context.'),
    miss('Movement of water through aquaporins', 'That is transport, not signaling.', 'Look for message relay.'),
  ]),
  q(4300006, 'Cell Communication', 'Apoptosis trigger', 'Apoptosis is best described as:', 'Programmed cell death triggered by intracellular or external signals', [
    miss('Necrosis caused by physical injury', 'Necrosis is unprogrammed and pathological.', 'Apoptosis is orderly.'),
    miss('A failure of DNA replication that stops the cell', 'Failed replication may trigger apoptosis but is not the definition.', 'Programmed disassembly is key.'),
    miss('Random fusion of two cells', 'Cell fusion is unrelated to apoptosis.', 'Death pathway.'),
  ]),
  q(4300007, 'Cell Communication', 'Cancer hallmark', 'A common feature of cancer cells is:', 'Loss of checkpoint regulation, leading to uncontrolled division', [
    miss('Permanent arrest at G1 with no division', 'That is senescence, the opposite phenotype.', 'Cancer divides too much.'),
    miss('Loss of all DNA', 'Cancer cells retain DNA, often with mutations.', 'Mutations drive overdivision.'),
    miss('Production of chlorophyll', 'Animal cancer cells do not photosynthesize.', 'Lose cycle control.'),
  ]),

  // ---- Chapter 5: Heredity, Gene Expression, and Biotechnology ----
  q(401015, 'Genetics', 'Allele', 'An allele is best described as:', 'An alternative version of a gene at a specific locus', [
    miss('A whole organism only', 'Alleles are gene variants.', 'Think alternative forms.'),
    miss('A ribosome subunit', 'Ribosomes translate proteins.', 'Alleles are genetic.'),
    miss('A type of lipid membrane', 'Not membrane structure.', 'Use heredity vocabulary.'),
  ]),
  q(401016, 'Genetics', 'Genotype', 'Genotype refers to:', 'The genetic makeup (allele combination) of an organism for a trait', [
    miss('Only visible appearance', 'That is phenotype.', 'Genotype is allele combination.'),
    miss('Only environmental condition', 'Environment affects phenotype, not genotype definition.', 'Use genes.'),
    miss('The number of cells', 'Cell count is not genotype.', 'Look at alleles.'),
  ]),
  q(401017, 'Genetics', 'Phenotype', 'Phenotype refers to:', 'The observable traits expressed by an organism', [
    miss('Only allele symbols', 'Allele symbols describe genotype.', 'Phenotype is expressed trait.'),
    miss('DNA replication method', 'That is molecular.', 'Think observable outcome.'),
    miss('Only chromosome number', 'Chromosome number can matter, but phenotype is broader.', 'Use measurable traits.'),
  ]),
  q(401018, 'Genetics', 'Dominant allele', 'A dominant allele is expressed in the phenotype when:', 'At least one copy is present in a diploid organism', [
    miss('Only two copies are present', 'That describes recessive-only expression.', 'Dominant shows even in heterozygotes.'),
    miss('No copies are present', 'An allele cannot express if absent.', 'Need at least one.'),
    miss('Only the environment is absent', 'Dominance is allele interaction.', 'Use genotype.'),
  ]),
  q(401019, 'Genetics', 'Recessive phenotype', 'A recessive phenotype usually appears when an individual has:', 'Two recessive alleles (homozygous recessive)', [
    miss('One dominant and one recessive allele', 'The dominant allele usually masks recessive phenotype.', 'Use homozygous recessive.'),
    miss('No alleles', 'Organisms have alleles for genes.', 'Need two recessive copies.'),
    miss('Only mitochondrial DNA', 'This question is about Mendelian nuclear inheritance.', 'Use allele pair.'),
  ]),
  q(401020, 'Genetics', 'Punnett square', 'A Punnett square predicts:', 'Possible offspring genotypes and their relative frequencies', [
    miss('Exact adult body size', 'Punnett squares predict genetic combinations, not exact complex traits.', 'Use allele probabilities.'),
    miss('ATP yield only', 'That is cellular respiration.', 'This is inheritance.'),
    miss('Protein folding shape only', 'Not the main use.', 'Use crosses.'),
  ]),
  q(401021, 'Molecular Genetics', 'DNA pairing', 'In DNA, adenine pairs with:', 'Thymine', [
    miss('Cytosine', 'Cytosine pairs with guanine.', 'Use A-T and C-G.'),
    miss('Uracil', 'Uracil is used in RNA.', 'DNA uses thymine.'),
    miss('Ribose', 'Ribose is a sugar, not a base pair partner.', 'Pair bases.'),
  ]),
  q(401022, 'Molecular Genetics', 'RNA pairing', 'In RNA, adenine pairs with:', 'Uracil', [
    miss('Thymine', 'RNA uses uracil instead of thymine.', 'DNA has T; RNA has U.'),
    miss('Guanine', 'Guanine pairs with cytosine.', 'Use RNA base pairing.'),
    miss('Deoxyribose', 'That is a sugar, not a base.', 'Pair bases.'),
  ]),
  q(401023, 'Molecular Genetics', 'Replication', 'DNA replication is called semiconservative because:', 'Each new DNA molecule has one parental strand and one newly synthesized strand', [
    miss('Both old strands are destroyed', 'Old strands serve as templates and remain.', 'Half is retained.'),
    miss('No template is used', 'Replication uses templates.', 'Each original strand guides a new strand.'),
    miss('RNA becomes protein', 'That is gene expression, not replication.', 'Focus on DNA copies.'),
  ]),
  q(401024, 'Molecular Genetics', 'Transcription', 'Transcription produces:', 'RNA from a DNA template', [
    miss('Protein from mRNA', 'That is translation.', 'Transcription writes RNA.'),
    miss('DNA from protein', 'Information does not flow protein to DNA in the central dogma.', 'Use DNA to RNA.'),
    miss('ATP from glucose', 'That is respiration.', 'This is gene expression.'),
  ]),
  q(401025, 'Molecular Genetics', 'Translation', 'Translation produces:', 'A polypeptide from mRNA at a ribosome', [
    miss('mRNA from DNA', 'That is transcription.', 'Translation reads codons.'),
    miss('DNA from RNA only', 'That is reverse transcription in special cases.', 'Ribosomes build protein.'),
    miss('Glucose from sunlight', 'That is photosynthesis.', 'Use protein synthesis.'),
  ]),
  q(401026, 'Molecular Genetics', 'Codon', 'A codon is a sequence of:', 'Three nucleotides that specifies one amino acid or a stop signal', [
    miss('Two amino acids that specify DNA', 'Codons are nucleotide triplets.', 'Read mRNA in threes.'),
    miss('One lipid in a membrane', 'Not gene coding.', 'Use nucleotide sequence.'),
    miss('A full chromosome only', 'Codons are small coding units.', 'Triplets.'),
  ]),
  q(401027, 'Molecular Genetics', 'Mutation', 'A mutation is:', 'Any change in DNA sequence, regardless of effect', [
    miss('Always an improvement', 'Mutations can be harmful, neutral, or beneficial.', 'Definition is sequence change.'),
    miss('Only movement of water', 'That is osmosis.', 'Use DNA.'),
    miss('Protein digestion', 'That is catabolism.', 'Mutation affects genetic code.'),
  ]),
  q(448006, 'Gene Regulation', 'Operon operator', 'In a bacterial operon, the operator is best described as:', 'A DNA region where a regulatory protein can bind to affect transcription', [
    miss('The protein product made by every gene', 'The operator is DNA, not a protein product.', 'It is a control sequence.'),
    miss('The ribosome binding to mRNA after translation', 'That mixes transcriptional control with translation.', 'Operons regulate transcription.'),
    miss('A carbohydrate used for energy storage', 'That is unrelated to operon regulation.', 'Stay with gene expression.'),
  ]),
  q(401044, 'Biotechnology', 'PCR', 'PCR is used to:', 'Amplify a specific DNA sequence through cycles of denaturation, annealing, and extension', [
    miss('Digest proteins in the stomach', 'That is enzyme digestion.', 'PCR copies DNA.'),
    miss('Measure blood pressure', 'Not PCR.', 'Use DNA amplification.'),
    miss('Create ATP in mitochondria', 'Not PCR.', 'Polymerase chain reaction amplifies DNA.'),
  ]),
  q(401045, 'Biotechnology', 'Gel electrophoresis', 'Gel electrophoresis separates DNA fragments primarily by:', 'Size, with smaller fragments migrating farther in the gel', [
    miss('Personality', 'Not a molecular property.', 'Fragments move through gel by size.'),
    miss('Color only', 'Dyes help visualize but separation is by size and charge.', 'DNA fragments have similar charge-to-mass ratio.'),
    miss('Cell organelle type', 'Gel electrophoresis separates molecules, not organelles.', 'Use fragment length.'),
  ]),
  q(401046, 'Biotechnology', 'Restriction enzymes', 'Restriction enzymes:', 'Cut DNA at specific recognition sequences', [
    miss('Translate mRNA into protein', 'Ribosomes translate.', 'Restriction enzymes cut DNA.'),
    miss('Move water across membranes', 'Aquaporins help water movement.', 'Use DNA cutting.'),
    miss('Build cell walls from cellulose', 'Not restriction enzyme function.', 'They recognize sequences.'),
  ]),

  // ---- Chapter 6: Evolution and Phylogeny ----
  q(401028, 'Evolution', 'Natural selection requirement', 'Natural selection requires variation that is:', 'Heritable and affects survival or reproduction', [
    miss('Always acquired during life and not inherited', 'Acquired traits are generally not the raw material for natural selection.', 'Inheritance matters.'),
    miss('Identical in every individual', 'Selection needs differences.', 'Variation is essential.'),
    miss('Completely unrelated to fitness', 'Selection acts through differential reproductive success.', 'Fitness matters.'),
  ]),
  q(401029, 'Evolution', 'Fitness', 'In evolutionary biology, fitness means:', 'Relative reproductive success in a given environment', [
    miss('Physical strength only', 'Strength can affect fitness, but fitness means reproduction.', 'Use offspring contribution.'),
    miss('Life span only', 'Longevity matters only if it affects reproduction.', 'Think genes in next generation.'),
    miss('Body size only', 'Size is not the definition.', 'Use reproductive success.'),
  ]),
  q(401030, 'Evolution', 'Genetic drift', 'Genetic drift is strongest in:', 'Small populations, where random allele sampling has bigger effects', [
    miss('Very large populations', 'Random fluctuations are smaller in large populations.', 'Small samples drift more.'),
    miss('Only populations with no genes', 'All populations have alleles.', 'Use random allele frequency change.'),
    miss('Only extinct populations', 'Drift happens in living populations.', 'Population size matters.'),
  ]),
  q(401031, 'Evolution', 'Gene flow', 'Gene flow occurs when:', 'Alleles move between populations through migration and interbreeding', [
    miss('DNA is translated into protein', 'That is gene expression.', 'Flow between populations.'),
    miss('A single cell divides by mitosis', 'That is cell division.', 'Use migration and interbreeding.'),
    miss('All mutations stop', 'Gene flow is movement, not mutation halt.', 'Alleles move.'),
  ]),
  q(401032, 'Evolution', 'Speciation', 'Speciation is the formation of:', 'New species through reproductive isolation of populations', [
    miss('New ATP molecules only', 'ATP production is metabolism.', 'Species split over evolutionary time.'),
    miss('New ribosomes only', 'Ribosomes are cell structures.', 'Speciation is macroevolutionary.'),
    miss('New water molecules only', 'Not speciation.', 'Use species formation.'),
  ]),
  q(401049, 'Evolution', 'Homologous structures', 'Homologous structures suggest:', 'Common ancestry, even when current functions differ', [
    miss('No evolutionary relationship', 'Shared underlying structure often supports common ancestry.', 'Compare origin, not just function.'),
    miss('Identical current function always', 'Homologous structures can have different functions.', 'Same ancestry, modified uses.'),
    miss('Only artificial selection', 'Homology can arise naturally.', 'Use shared descent.'),
  ]),
  q(448008, 'Evolution', 'Hardy-Weinberg condition', 'Hardy-Weinberg equilibrium requires:', 'No natural selection acting on the alleles in question', [
    miss('Very strong natural selection every generation', 'Selection changes allele frequencies, violating equilibrium.', 'Equilibrium assumes no evolutionary forces.'),
    miss('Only a very small population', 'Small populations are more affected by genetic drift.', 'Hardy-Weinberg assumes large population size.'),
    miss('Constant mutation pressure', 'Mutation can change allele frequencies.', 'No mutation is one assumption.'),
  ]),
  q(448007, 'Evolution', 'Phylogenetic node', 'On a phylogenetic tree, a node most often represents:', 'A common ancestor of the lineages branching from it', [
    miss('An organism that has no ancestors', 'Nodes usually represent shared ancestry.', 'Read branching points.'),
    miss('The exact date of extinction for every species', 'Trees can include time, but a node primarily marks a branching relationship.', 'Use relationship logic.'),
    miss('A trait that cannot be inherited', 'Phylogenies track inherited relationships.', 'Think ancestry.'),
  ]),
  q(460022, 'Evolution', 'Convergent evolution', 'Unrelated animals evolving similar traits because they face similar selection pressures is called:', 'Convergent evolution', [
    miss('Genetic drift only', 'Drift is random allele frequency change.', 'Similar pressures shape similar traits.'),
    miss('Osmosis', 'Osmosis is water movement.', 'This is an evolutionary pattern.'),
    miss('A food web', 'Food webs show feeding relationships, not trait origin pattern.', 'Independent similarity.'),
  ]),

  // ---- Chapter 7: Ecology and Systems Interactions ----
  q(401033, 'Ecology', 'Producer', 'In an ecosystem, producers are organisms that:', 'Make organic molecules from inorganic sources (photo- or chemosynthesis)', [
    miss('Only eat other animals', 'That describes consumers.', 'Producers make food.'),
    miss('Only decompose dead matter', 'That describes decomposers.', 'Think photosynthesis/chemosynthesis.'),
    miss('Never use energy', 'All organisms use energy.', 'Producers capture energy.'),
  ]),
  q(401034, 'Ecology', 'Primary consumer', 'A primary consumer eats:', 'Producers (it is a herbivore)', [
    miss('Top predators only', 'That would be higher trophic levels.', 'Primary consumers are herbivores.'),
    miss('Only decomposers', 'Not the definition.', 'They feed on producers.'),
    miss('Sunlight directly', 'Producers capture sunlight.', 'Consumers eat organisms.'),
  ]),
  q(401035, 'Ecology', 'Energy pyramid', 'Energy generally decreases at higher trophic levels because:', 'Energy is lost as heat and to metabolism at each transfer', [
    miss('Atoms are destroyed', 'Matter is conserved; energy transforms.', 'Energy transfer is inefficient.'),
    miss('Top predators photosynthesize', 'Most top predators do not photosynthesize.', 'Use transfer efficiency.'),
    miss('Producers consume all predators', 'Wrong trophic relationship.', 'Energy loss accumulates.'),
  ]),
  q(401036, 'Ecology', 'Carrying capacity', 'Carrying capacity is:', 'The maximum population size an environment can sustain long term', [
    miss('The fastest possible mutation rate', 'Mutation rate is genetic, not carrying capacity.', 'Use resource limits.'),
    miss('The number of chromosomes in a species', 'That is karyotype-related.', 'Carrying capacity is ecological.'),
    miss('The minimum number of predators always', 'Not the definition.', 'Use sustainable population size.'),
  ]),
  q(401037, 'Ecology', 'Density-dependent factor', 'Which factor is density-dependent?', 'Disease spreading faster in crowded populations', [
    miss('A volcanic eruption', 'That is density-independent.', 'Crowding changes disease transmission.'),
    miss('A hurricane', 'Weather disasters are often density-independent.', 'Look for a population density effect.'),
    miss('Day length', 'Day length does not depend on population density.', 'Use crowding.'),
  ]),
  q(401038, 'Ecology', 'Mutualism', 'Mutualism is an interaction where:', 'Both species benefit from the relationship', [
    miss('One benefits and one is harmed', 'That is parasitism/predation.', 'Mutual means both.'),
    miss('Neither species is affected', 'That is neutralism-like, not mutualism.', 'Both benefit.'),
    miss('One benefits and the other is unaffected', 'That is commensalism.', 'Mutualism helps both.'),
  ]),
  q(448009, 'Ecology', 'Nitrogen fixation', 'Why are nitrogen-fixing bacteria important?', 'They convert atmospheric N2 into forms organisms can use (NH3/NH4+)', [
    miss('They remove all nitrogen from ecosystems permanently', 'Nitrogen cycles rather than disappearing.', 'Think conversion of forms.'),
    miss('They make sunlight for producers', 'Sunlight is not produced by bacteria.', 'Use nutrient cycling.'),
    miss('They turn proteins directly into DNA in every cell', 'That is not nitrogen fixation.', 'Focus on atmospheric nitrogen.'),
  ]),
  q(460016, 'Ecology', 'Predator role', 'A predator is an organism that:', 'Kills and eats other organisms (its prey)', [
    miss('Makes its own food from sunlight only', 'That describes many producers.', 'Predator-consumer role.'),
    miss('Always decomposes dead leaves only', 'That describes decomposers/detritivores.', 'Predation involves consuming prey.'),
    miss('Never affects population dynamics', 'Predators can strongly affect prey populations.', 'Food-web interaction.'),
  ]),
  q(460017, 'Ecology', 'Camouflage', 'Camouflage helps prey animals mainly by:', 'Reducing detection by visual predators', [
    miss('Making predators easier to see', 'That is the opposite of camouflage.', 'Blend with background.'),
    miss('Producing ATP directly from sunlight', 'Camouflage is not photosynthesis.', 'Avoid detection.'),
    miss('Guaranteeing unlimited reproduction', 'It may improve survival, not guarantee reproduction.', 'Survival advantage.'),
  ]),
  q(460025, 'Conservation Biology', 'Habitat loss', 'Habitat destruction threatens species mainly because it:', 'Removes or fragments the resources and spaces species need to survive', [
    miss('Always creates unlimited new resources', 'Habitat destruction usually reduces usable habitat.', 'Shelter, food, breeding sites.'),
    miss('Has no link to population size', 'Habitat affects carrying capacity and survival.', 'Resource base.'),
    miss('Only changes Latin names', 'Taxonomy labels are not the main impact.', 'Physical habitat changes.'),
  ]),
  q(460026, 'Conservation Biology', 'Small population risk', 'Very small isolated populations can suffer because:', 'Low genetic diversity raises inbreeding and chance-extinction risk', [
    miss('They have infinite genetic variation', 'Small isolated populations often have less diversity.', 'Genetic bottleneck risk.'),
    miss('They are immune to disease and chance events', 'Small populations are more vulnerable, not immune.', 'Demographic and genetic risk.'),
    miss('They stop needing reproduction', 'Reproduction remains essential.', 'Population viability.'),
  ]),
  q(460028, 'Biodiversity', 'Species richness', 'Species richness means:', 'The number of different species in a community', [
    miss('The amount of money a species has', 'Richness is ecological count, not wealth.', 'Count species.'),
    miss('Only the mass of one organism', 'That is not species richness.', 'Diversity component.'),
    miss('The pH of rainfall', 'That is environmental measurement.', 'Community species count.'),
  ]),
  q(460029, 'Biodiversity', 'Keystone predator', 'A keystone predator can maintain biodiversity by:', 'Preventing one prey or competitor species from dominating the community', [
    miss('Removing every species except itself', 'That would reduce biodiversity.', 'Keystone effects can balance communities.'),
    miss('Turning prey into sunlight', 'No.', 'Trophic control.'),
    miss('Having no ecological interactions', 'Keystone species have strong interactions.', 'Disproportionate effect.'),
  ]),

  // ---- Plant and animal physiology (kept high-yield items) ----
  q(401039, 'Physiology', 'Homeostasis', 'Homeostasis is:', 'Maintenance of stable internal conditions despite external change', [
    miss('Changing randomly without regulation', 'Homeostasis is regulated stability.', 'Think feedback loops.'),
    miss('Making gametes only', 'That is reproductive biology.', 'Use internal balance.'),
    miss('Digesting DNA', 'Not homeostasis.', 'Stable internal environment.'),
  ]),
  q(401040, 'Physiology', 'Negative feedback', 'Negative feedback usually:', 'Counteracts a change to restore a set point', [
    miss('Amplifies a change away from set point', 'That is positive feedback.', 'Negative feedback reverses deviation.'),
    miss('Stops all body functions', 'It regulates, not stops.', 'Use thermostat analogy.'),
    miss('Only affects DNA base pairing', 'Feedback loops are physiological systems.', 'Set points.'),
  ]),
  q(401041, 'Plant Biology', 'Xylem', 'Xylem in vascular plants mainly transports:', 'Water and dissolved minerals upward from roots', [
    miss('Sugars from leaves to sinks', 'That is phloem.', 'Xylem carries water.'),
    miss('Nerve impulses', 'Plants do not use animal nerves.', 'Use vascular tissue.'),
    miss('DNA between species', 'Not xylem function.', 'Water transport.'),
  ]),
  q(401042, 'Plant Biology', 'Phloem', 'Phloem mainly transports:', 'Sugars and other organic nutrients from sources to sinks', [
    miss('Only water upward', 'That is xylem.', 'Phloem carries photosynthate.'),
    miss('Oxygen in red blood cells', 'Plants do not have red blood cells.', 'Use plant vascular tissue.'),
    miss('Neutrons in roots', 'Not biological transport.', 'Sugars.'),
  ]),
  q(401043, 'Plant Biology', 'Stomata', 'Stomata are leaf pores that regulate:', 'Gas exchange (CO2 in, O2 out) and water loss by transpiration', [
    miss('Chromosome crossing over', 'That occurs during meiosis.', 'Stomata are leaf pores.'),
    miss('Protein translation', 'That occurs at ribosomes.', 'Use leaf gas exchange.'),
    miss('Bone growth', 'Plants do not have bones.', 'Regulate CO2 and water vapor.'),
  ]),
  q(401047, 'Immune System', 'Antibody', 'Antibodies are immune proteins that:', 'Bind specific antigens to mark them for destruction or neutralization', [
    miss('Store glucose as glycogen', 'That is metabolism/storage.', 'Antibodies recognize antigens.'),
    miss('Carry oxygen in plants only', 'Hemoglobin carries oxygen in animals.', 'Use immune recognition.'),
    miss('Replicate DNA', 'Polymerases replicate DNA.', 'Antibodies bind targets.'),
  ]),
  q(401048, 'Immune System', 'Vaccine', 'A vaccine works mainly by:', 'Training adaptive immune memory against a specific antigen', [
    miss('Replacing all white blood cells permanently', 'Vaccines stimulate immune response, not replace cells.', 'Memory is key.'),
    miss('Removing all mutations from DNA', 'Vaccines do not edit DNA.', 'Use adaptive immunity.'),
    miss('Stopping all protein synthesis', 'That would harm cells.', 'Immune priming.'),
  ]),

  // ---- Chapter 8: Exam Studio (FRQ / data / chi-square / figure-reading) ----
  q(4300050, 'Experimental Design', 'Chi-square use', 'A chi-square goodness-of-fit test is most appropriate when comparing:', 'Observed counts in categories with counts predicted by a hypothesis', [
    miss('Two slopes from line graphs', 'Slope comparison uses regression methods, not chi-square.', 'Chi-square is for categorical counts.'),
    miss('Average heights of two groups', 'Means of continuous data use t-tests.', 'Use counts vs predictions.'),
    miss('A correlation coefficient', 'Correlation is a different question.', 'Chi-square tests fit of frequencies.'),
  ]),
  q(4300051, 'Experimental Design', 'Chi-square interpretation', 'In a chi-square test with df=1, a calculated chi-square value of 4.5 (critical value 3.84) supports:', 'Rejecting the null hypothesis at the 0.05 level', [
    miss('Failing to reject the null hypothesis', 'A larger calculated value than the critical value triggers rejection.', 'Compare calc vs critical.'),
    miss('Accepting the alternative as proven', 'Statistical tests do not prove; they reject or fail to reject.', 'Use the exact verb.'),
    miss('Reporting a probability of exactly 0', 'p-values approach 0 but rarely equal 0.', 'Use the inequality.'),
  ]),
  q(4300052, 'Experimental Design', 'Figure reading: bar with error bars', 'Two means with non-overlapping standard error bars suggest:', 'The means differ, though a formal test is still required', [
    miss('The means are statistically identical', 'Non-overlapping SE bars argue against identity.', 'Look at error bar overlap.'),
    miss('No conclusion is possible without sample sizes', 'Sample size matters but a directional inference is appropriate.', 'Use inferential statistics, not zero info.'),
    miss('One mean has zero variance', 'Error bars by definition reflect non-zero variance unless explicitly stated.', 'Read the y-axis.'),
  ]),
  q(4300053, 'Experimental Design', 'Claim-evidence-reasoning', 'In a CER (claim-evidence-reasoning) response, the reasoning section should:', 'Explain why the evidence supports the claim using a biological principle', [
    miss('Repeat the original claim verbatim', 'That is rhetorical filler, not reasoning.', 'Connect evidence to principle.'),
    miss('Introduce a new claim unrelated to the evidence', 'That breaks argumentative coherence.', 'Stay on one claim.'),
    miss('List every measurement individually', 'That is the evidence step, not reasoning.', 'Use a mechanism explanation.'),
  ]),
  q(4300054, 'Experimental Design', 'Independent variable', 'In a controlled experiment, the independent variable is:', 'The variable the researcher manipulates intentionally', [
    miss('The variable that depends on the outcome', 'That is the dependent variable.', 'Manipulated vs measured.'),
    miss('Any variable that stays constant', 'Those are controls.', 'Pick the manipulated one.'),
    miss('The error term in statistics', 'That is residual variance.', 'Use design vocabulary.'),
  ]),
  q(4300055, 'Experimental Design', 'Variable control', 'Holding the room temperature constant while testing enzyme activity at different pH values is an example of:', 'Controlling a potential confounding variable', [
    miss('Manipulating the dependent variable', 'Dependent variables are measured, not held constant.', 'Use control logic.'),
    miss('Random assignment of subjects', 'Random assignment is a different design step.', 'Hold extraneous factors constant.'),
    miss('Increasing the sample size automatically', 'That is a different sampling decision.', 'Use control vocabulary.'),
  ]),
  q(4300056, 'Experimental Design', 'Replicates rationale', 'Running multiple replicates of a treatment helps researchers:', 'Estimate variability and improve confidence in means', [
    miss('Make every measurement identical', 'Replicates reveal variability, not eliminate it.', 'Replicates inform statistics.'),
    miss('Replace the need for a control', 'Replicates supplement, not replace, controls.', 'Use both.'),
    miss('Lower the cost of the experiment', 'More replicates usually cost more, not less.', 'Use scientific reasoning.'),
  ]),
  q(4300057, 'Experimental Design', 'Pedigree interpretation', 'In a pedigree showing an autosomal recessive trait, two unaffected parents have an affected child. The parents must be:', 'Both heterozygous carriers', [
    miss('Both homozygous dominant', 'They could not transmit two recessive alleles.', 'Affected child needs two recessive alleles.'),
    miss('Both homozygous recessive', 'Then they would be affected themselves.', 'Unaffected rules this out.'),
    miss('One homozygous dominant, one homozygous recessive', 'Their children would all be heterozygous and unaffected.', 'Both must carry.'),
  ]),
  q(4300058, 'Experimental Design', 'Bar graph vs line graph', 'A bar graph is more appropriate than a line graph when:', 'The independent variable is categorical rather than continuous', [
    miss('Both variables are continuous quantities', 'That is the line-graph use case.', 'Categorical x-axis = bars.'),
    miss('You want to imply trend continuity between categories', 'Bars do not imply continuity; lines do.', 'Choose based on data type.'),
    miss('The data have no units', 'Units do not determine chart type.', 'Use variable type.'),
  ]),
  q(4300059, 'Experimental Design', 'Hardy-Weinberg calculation', 'In a population with allele frequencies p = 0.7 and q = 0.3 at Hardy-Weinberg equilibrium, the expected frequency of heterozygotes is:', '0.42', [
    miss('0.09', 'That is the homozygous recessive frequency q^2.', 'Heterozygotes are 2pq.'),
    miss('0.49', 'That is the homozygous dominant frequency p^2.', 'Heterozygotes are 2pq.'),
    miss('0.30', 'That is the recessive allele frequency q, not heterozygote genotype frequency.', 'Use 2pq.'),
  ]),
  q(4300060, 'Experimental Design', 'Energy data interpretation', 'A trophic-level energy table shows producers store 100,000 kJ, primary consumers 9,500 kJ, and secondary consumers 850 kJ. The transfer efficiency from primary to secondary consumers is closest to:', 'About 9%', [
    miss('About 90%', 'That divides the larger number by the smaller.', 'Compute 850/9500.'),
    miss('About 0.85%', 'That divides by the producer level, not the primary consumer level.', 'Use adjacent levels.'),
    miss('Exactly 10% (by rule of thumb)', 'The rule of thumb predicts ~10%; the table data give a more specific value.', 'Use the actual table values.'),
  ]),
])

export const apBiologyWorkoutGeneratedQuestions = runPolish(_baseApBiologyWorkoutGeneratedQuestions, [
  {
    subTopics: AP_WORKOUT_SCIENCE_SUB_TOPICS,
    mentorHints: AP_WORKOUT_SCIENCE_MENTOR_HINTS,
    correctShortened: AP_WORKOUT_SCIENCE_CORRECT_SHORTENED,
    source: 'apWorkoutScience',
  },
])

import { makeQuestionBank } from './base'

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
    'Coverage source: OpenStax Biology, AP Biology-aligned OER, and public biology review collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  source: 'Generated from OpenStax/OER AP Biology coverage',
})

export const apBiologyExamBatchQuestions = makeQuestionBank('AP', [
  q(448001, 'Chemistry of Life', 'Water polarity', 'Which property of water helps explain cohesion between water molecules?', 'Hydrogen bonding between polar water molecules', [
    miss('Ionic bonding between water molecules', 'Water molecules attract through hydrogen bonds, not full ionic bonds.', 'Use polarity and partial charges.'),
    miss('Water being nonpolar', 'Water is polar.', 'Oxygen and hydrogen share electrons unequally.'),
    miss('Peptide bonds joining water molecules', 'Peptide bonds join amino acids, not water molecules.', 'Match bond type to molecule.'),
  ]),
  q(448002, 'Cell Membranes', 'Selective permeability', 'Why can small nonpolar molecules often cross a phospholipid bilayer more easily than ions?', 'They can dissolve through the hydrophobic interior of the membrane', [
    miss('Ions are always smaller than nonpolar molecules', 'Size alone does not explain membrane crossing.', 'Charge and polarity matter strongly.'),
    miss('The membrane interior is highly charged', 'The bilayer interior is hydrophobic, not highly charged.', 'Think fatty acid tails.'),
    miss('All molecules cross at the same rate', 'Membranes are selectively permeable.', 'Compare polarity and charge.'),
  ]),
  q(448003, 'Cellular Energetics', 'Respiration oxygen role', 'In aerobic cellular respiration, oxygen is used mainly as:', 'The final electron acceptor in the electron transport chain', [
    miss('The sugar that gets broken down first', 'Glucose is the fuel, not oxygen.', 'Oxygen acts near the end.'),
    miss('The enzyme that splits ATP', 'Oxygen is a molecule, not the ATP-splitting enzyme.', 'Track electrons through the pathway.'),
    miss('The source of carbon in glucose', 'Carbon in glucose comes from carbon-containing molecules, not O2 in respiration.', 'Use the electron transport role.'),
  ]),
  q(448004, 'Photosynthesis', 'Light reactions', 'What is produced directly by the light reactions of photosynthesis?', 'ATP and NADPH', [
    miss('Glucose only', 'Glucose is assembled later through the Calvin cycle.', 'Light reactions make energy carriers.'),
    miss('Carbon dioxide', 'CO2 is consumed in carbon fixation, not produced directly by light reactions.', 'Separate inputs and outputs.'),
    miss('DNA and ribosomes', 'Those are not direct products of photosynthetic light reactions.', 'Focus on photosynthetic energy transfer.'),
  ]),
  q(448005, 'Cell Communication', 'Signal transduction', 'What is signal transduction?', 'Conversion of an external signal into an internal cellular response pathway', [
    miss('Random diffusion of all proteins out of the cell', 'Signal transduction is regulated communication.', 'Think receptor to response.'),
    miss('Replication of DNA before mitosis only', 'DNA replication is not the same as signaling.', 'Use the communication context.'),
    miss('Movement of water through aquaporins', 'That is transport, not signaling pathway conversion.', 'Look for message relay.'),
  ]),
  q(448006, 'Gene Regulation', 'Operon control', 'In a bacterial operon, what is the operator?', 'A DNA region where a regulatory protein can bind to affect transcription', [
    miss('The protein product made by every gene', 'The operator is DNA, not a protein product.', 'It is a control sequence.'),
    miss('The ribosome binding to mRNA after translation', 'That mixes transcriptional control with translation.', 'Operons regulate transcription.'),
    miss('A carbohydrate used for energy storage', 'That is unrelated to operon regulation.', 'Stay with gene expression.'),
  ]),
  q(448007, 'Evolution', 'Phylogenetic trees', 'On a phylogenetic tree, a node most often represents:', 'A common ancestor of the lineages branching from it', [
    miss('An organism that has no ancestors', 'Nodes usually represent shared ancestry.', 'Read branching points.'),
    miss('The exact date of extinction for every species', 'Trees can include time, but a node primarily marks a branching relationship.', 'Use relationship logic.'),
    miss('A trait that cannot be inherited', 'Phylogenies track inherited relationships.', 'Think ancestry.'),
  ]),
  q(448008, 'Population Genetics', 'Hardy-Weinberg condition', 'Which condition is required for Hardy-Weinberg equilibrium?', 'No natural selection acting on the alleles', [
    miss('Very strong natural selection every generation', 'Selection changes allele frequencies, violating equilibrium.', 'Equilibrium assumes no evolutionary forces.'),
    miss('Only a very small population', 'Small populations are more affected by genetic drift.', 'Hardy-Weinberg assumes large population size.'),
    miss('Constant mutation pressure', 'Mutation can change allele frequencies.', 'No mutation is one assumption.'),
  ]),
  q(448009, 'Ecology', 'Nitrogen cycle', 'Why are nitrogen-fixing bacteria important?', 'They convert atmospheric nitrogen into forms organisms can use', [
    miss('They remove all nitrogen from ecosystems permanently', 'Nitrogen cycles rather than disappearing.', 'Think conversion of forms.'),
    miss('They make sunlight for producers', 'Sunlight is not produced by bacteria.', 'Use nutrient cycling.'),
    miss('They turn proteins directly into DNA in every cell', 'That is not nitrogen fixation.', 'Focus on atmospheric nitrogen.'),
  ]),
  q(448010, 'Experimental Design', 'Control group', 'In a biology experiment, why include a control group?', 'To provide a comparison for evaluating the treatment effect', [
    miss('To guarantee every result is statistically significant', 'Controls do not guarantee significance.', 'They support comparison.'),
    miss('To remove all variables from living systems', 'Controls manage comparison but do not eliminate all biological variation.', 'Think baseline.'),
    miss('To make the treatment group unnecessary', 'The control and treatment groups serve different roles.', 'You need both for comparison.'),
  ]),
])

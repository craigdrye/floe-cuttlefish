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
    'Coverage source: STAAR Biology, NYSED Living Environment, OpenStax Biology, and OER biology collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  source: 'Generated from STAAR/NYSED/OpenStax/OER high-school biology coverage',
})

export const highSchoolBiologyNgssExamBatchQuestions = makeQuestionBank('AP', [
  q(442001, 'Cells', 'Enzyme function', 'What is the main role of an enzyme in a cell?', 'It speeds up a chemical reaction by lowering activation energy', [
    miss('It becomes the main product of every reaction', 'Enzymes help reactions happen but are not usually consumed as products.', 'Think catalyst.'),
    miss('It stores genetic information for the cell', 'That is the role of DNA, not enzymes.', 'Match molecule type to function.'),
    miss('It prevents all reactions from occurring', 'Enzymes usually increase reaction rates.', 'Use the catalyst idea.'),
  ]),
  q(442002, 'Cell Division', 'Mitosis purpose', 'What is the usual result of mitosis in multicellular organisms?', 'Two genetically identical daughter cells', [
    miss('Four genetically different gametes', 'That describes meiosis, not mitosis.', 'Mitosis supports growth and repair.'),
    miss('One cell with half the chromosomes', 'Mitosis preserves chromosome number.', 'Think identical body cells.'),
    miss('A zygote formed by fertilization', 'Fertilization combines gametes; it is not mitosis.', 'Separate reproduction steps from cell division type.'),
  ]),
  q(442003, 'Genetics', 'Meiosis variation', 'Which process during meiosis creates new combinations of alleles on chromosomes?', 'Crossing over', [
    miss('Binary fission', 'That is a prokaryotic reproduction process.', 'Focus on paired homologous chromosomes.'),
    miss('Transcription', 'Transcription makes RNA from DNA, not new chromosome combinations.', 'This happens during meiosis.'),
    miss('Osmosis', 'Osmosis is water movement across membranes.', 'Use the genetics process.'),
  ]),
  q(442004, 'Molecular Biology', 'Transcription product', 'What molecule is produced during transcription?', 'RNA', [
    miss('Protein', 'Protein is produced during translation.', 'Transcription copies genetic information into a nucleic-acid message.'),
    miss('Glucose', 'Glucose is tied to photosynthesis and respiration, not transcription.', 'Think gene expression.'),
    miss('Lipid bilayer', 'Membrane lipids are not the direct product of transcription.', 'Use the central dogma.'),
  ]),
  q(442005, 'Molecular Biology', 'Translation location', 'Where does translation occur in a cell?', 'At ribosomes', [
    miss('Inside the Golgi apparatus', 'The Golgi modifies and packages molecules after synthesis.', 'Protein synthesis happens at ribosomes.'),
    miss('Only in the cell wall', 'Cell walls are structural and not translation sites.', 'Look for the protein-making structure.'),
    miss('In the vacuole as water enters', 'Vacuoles handle storage and water balance, not translation.', 'Use the central dogma location.'),
  ]),
  q(442006, 'Evolution', 'Evidence from homologous structures', 'Homologous structures in different species are best explained by:', 'Common ancestry', [
    miss('Identical lifestyles in every detail', 'Homologous structures can have different functions.', 'The shared pattern points to ancestry.'),
    miss('No evolutionary relationship', 'Homology is evidence for relatedness.', 'Compare underlying structure, not just function.'),
    miss('A trait acquired only during an individual lifetime', 'Acquired lifetime traits are not the explanation for inherited structures.', 'Think inherited body plans.'),
  ]),
  q(442007, 'Ecology', 'Energy pyramid', 'Why is less energy available at higher trophic levels?', 'Energy is lost as heat and used for life processes at each transfer', [
    miss('Energy is created at each higher level', 'Energy is not created as it moves through trophic levels.', 'Energy transfer is inefficient.'),
    miss('Consumers do not need energy', 'Consumers require energy for metabolism.', 'Track energy use and loss.'),
    miss('Producers absorb all predators', 'That is not how food webs work.', 'Use the energy-flow model.'),
  ]),
  q(442008, 'Homeostasis', 'Negative feedback', 'Which example best shows negative feedback?', 'Body temperature rises, so sweating increases to cool the body', [
    miss('A small stimulus causes a larger response in the same direction forever', 'That describes positive feedback more than negative feedback.', 'Negative feedback counters a change.'),
    miss('Blood sugar rises and insulin decreases', 'Insulin generally increases to lower high blood sugar.', 'Look for a response that reverses the change.'),
    miss('The body ignores changes in temperature', 'Homeostasis involves responses to change.', 'Use the stabilizing response.'),
  ]),
  q(442009, 'Mutations', 'Mutation effect', 'A mutation in DNA is most likely to affect a trait if it:', 'Changes the sequence of a protein important for that trait', [
    miss('Occurs in a region that is never used or inherited', 'Not every DNA change affects a trait.', 'Connect mutation to gene product and inheritance.'),
    miss('Always improves survival', 'Mutations can be beneficial, harmful, or neutral.', 'Avoid assuming direction.'),
    miss('Turns DNA into a carbohydrate', 'Mutations change DNA sequence, not molecule class.', 'Stay with genetic information.'),
  ]),
  q(442010, 'Populations', 'Carrying capacity', 'What does carrying capacity describe?', 'The largest population size an environment can support over time', [
    miss('The speed of one animal running', 'That is individual movement, not population ecology.', 'Think population size and resources.'),
    miss('The number of chromosomes in a cell', 'That is genetics, not carrying capacity.', 'Use the ecology context.'),
    miss('The exact number of offspring every organism has', 'Reproduction rates vary and do not define carrying capacity.', 'Focus on environmental limits.'),
  ]),
])

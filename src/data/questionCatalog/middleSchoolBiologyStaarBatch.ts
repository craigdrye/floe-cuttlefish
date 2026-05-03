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
    'Coverage source: STAAR Biology and NYSED middle-school science raw collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  source: 'Generated from STAAR/NYSED middle-school biology coverage',
})

export const middleSchoolBiologyStaarBatchQuestions = makeQuestionBank('AP', [
  q(428001, 'Cells', 'Cell membrane', 'The cell membrane mainly helps a cell by:', 'Controlling what enters and leaves the cell', [
    miss('Making all of the cell DNA', 'DNA is stored and copied through other cell processes.', 'Think boundary and transport.'),
    miss('Turning sunlight directly into bones', 'That is not a cell membrane role.', 'Use the membrane-as-gate idea.'),
    miss('Replacing the need for cytoplasm', 'Cells still need cytoplasm.', 'The membrane controls exchange.'),
  ]),
  q(428002, 'Cells', 'Nucleus role', 'In many eukaryotic cells, the nucleus is most directly responsible for:', 'Storing genetic information', [
    miss('Digesting food outside the organism', 'That is not the nucleus main role.', 'Think DNA.'),
    miss('Producing all motion by itself', 'Movement involves structures like muscles, cilia, or cytoskeleton.', 'The nucleus stores instructions.'),
    miss('Letting only water through the cell boundary', 'That points more toward membranes/osmosis.', 'Nucleus and DNA.'),
  ]),
  q(428003, 'Cell Energy', 'Photosynthesis input', 'Which pair is needed for photosynthesis?', 'Carbon dioxide and water', [
    miss('Oxygen and glucose', 'Those are products of photosynthesis, not the main inputs.', 'Plants make glucose and release oxygen.'),
    miss('Nitrogen gas and table salt', 'Those are not the core photosynthesis reactants.', 'Use the standard equation.'),
    miss('Rock and metal', 'Photosynthesis uses matter from air and water.', 'Think CO2 plus H2O.'),
  ]),
  q(428004, 'Cell Energy', 'Cellular respiration', 'Cellular respiration releases usable energy mainly by breaking down:', 'Glucose', [
    miss('DNA', 'DNA stores information, not the usual fuel for respiration.', 'Think sugar fuel.'),
    miss('Sand', 'Sand is not biological fuel.', 'Cells use organic molecules.'),
    miss('Oxygen only', 'Oxygen helps the process but is not the fuel being broken down.', 'Glucose is the energy-rich molecule.'),
  ]),
  q(428005, 'Genetics', 'Inherited trait', 'An inherited trait is passed from parents to offspring through:', 'Genes', [
    miss('Weather reports', 'Weather does not transmit inherited traits.', 'Think DNA.'),
    miss('Practice alone', 'Practice can affect skills, but inherited traits come through genes.', 'Inherited means genetic.'),
    miss('The color of a classroom wall', 'Wall color is environmental and unrelated.', 'Use heredity.'),
  ]),
  q(428006, 'Genetics', 'Punnett square', 'A Punnett square is used to predict:', 'Possible allele combinations in offspring', [
    miss('The exact weather for next year', 'That is not genetics.', 'Punnett squares model inheritance.'),
    miss('The age of a fossil layer', 'That belongs to Earth science dating.', 'Look at parent alleles.'),
    miss('How fast a planet orbits', 'That is astronomy/physics.', 'This is heredity.'),
  ]),
  q(428007, 'Evolution', 'Adaptation', 'An adaptation is best described as:', 'A heritable trait that helps an organism survive or reproduce in its environment', [
    miss('Any habit learned for one afternoon only', 'Adaptations are heritable over generations.', 'Think inherited advantage.'),
    miss('A trait that always harms survival', 'Helpful survival/reproduction effect is key.', 'Fitness matters.'),
    miss('A random label scientists put on animals', 'Adaptation has a biological meaning.', 'Trait plus environment.'),
  ]),
  q(428008, 'Ecology', 'Producer', 'In an ecosystem, a producer is an organism that:', 'Makes its own food, often using sunlight', [
    miss('Only eats other animals', 'That describes a consumer.', 'Producers make food.'),
    miss('Breaks down dead matter only', 'That describes decomposers.', 'Think plants and photosynthesis.'),
    miss('Has no role in food webs', 'Producers are the base of many food webs.', 'They supply energy-rich matter.'),
  ]),
  q(428009, 'Ecology', 'Decomposer', 'Decomposers are important because they:', 'Break down dead organisms and recycle nutrients', [
    miss('Stop all nutrient cycling', 'They help cycling continue.', 'Breakdown returns materials.'),
    miss('Create sunlight for plants', 'They do not create sunlight.', 'Focus on dead matter and nutrients.'),
    miss('Only hunt large predators', 'Decomposers are not defined by hunting.', 'Think fungi and bacteria.'),
  ]),
  q(428010, 'Body Systems', 'Circulatory function', 'The circulatory system mainly transports:', 'Blood carrying materials such as oxygen and nutrients', [
    miss('Only thoughts between neurons', 'That is nervous system signaling.', 'Circulation moves blood.'),
    miss('Light from the Sun to leaves', 'That is not an animal circulatory role.', 'Think vessels and heart.'),
    miss('Rocks between tectonic plates', 'That is Earth science, not body systems.', 'Use the body transport system.'),
  ]),
])

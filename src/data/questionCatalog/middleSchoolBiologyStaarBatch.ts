import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

function lessonFor(chapter: string, title: string, correct: string) {
  if (/cells|cell energy/i.test(chapter)) {
    return `${title} is about how cells stay alive. The useful answer is "${correct}"; connect the cell part or molecule to its job in moving materials, storing instructions, or releasing energy.`
  }
  if (/genetics/i.test(chapter)) {
    return `${title} is about heredity. The useful answer is "${correct}"; inherited traits come from genes and allele combinations, not from practice or the environment alone.`
  }
  if (/evolution/i.test(chapter)) {
    return `${title} is about traits changing across generations. The useful answer is "${correct}"; an adaptation must be heritable and help survival or reproduction in a real environment.`
  }
  if (/ecology/i.test(chapter)) {
    return `${title} is about roles in an ecosystem. The useful answer is "${correct}"; follow where food, energy, and recycled nutrients move through a food web.`
  }
  if (/body systems/i.test(chapter)) {
    return `${title} is about how body systems move materials and signals. The useful answer is "${correct}"; identify the organ system and the job it performs for the whole organism.`
  }
  return `${title} is a middle-school biology concept. The useful answer is "${correct}"; connect the term to the living-system job it performs.`
}

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
  lesson: lessonFor(chapter, title, correct),
  source: 'Generated from STAAR/NYSED middle-school biology coverage',
})

export const middleSchoolBiologyStaarBatchQuestions = makeQuestionBank('AP', [
  q(428001, 'Cells', 'Cell membrane', 'The cell membrane mainly helps a cell by:', 'Controlling what enters and leaves the cell', [
    miss('Making all of the cell DNA', 'DNA is stored and copied through other cell processes.', 'Think boundary and transport.'),
    miss('Making energy by capturing sunlight in chloroplasts', 'That describes photosynthesis in chloroplasts, not the membrane boundary.', 'Use the membrane-as-gate idea.'),
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
    miss('Changes in daily weather during the offspring’s life', 'Weather can affect an organism, but it does not carry inherited instructions from parent to offspring.', 'Think DNA.'),
    miss('Practice alone', 'Practice can affect skills, but inherited traits come through genes.', 'Inherited means genetic.'),
    miss('The habitat color an organism grows up seeing', 'Environment can influence behavior or survival, but inherited traits are passed through genetic information.', 'Use heredity.'),
  ]),
  q(428006, 'Genetics', 'Punnett square', 'A Punnett square is used to predict:', 'Possible allele combinations in offspring', [
    miss('Which parent will teach the offspring a learned behavior first', 'Learned behaviors are not allele combinations, and Punnett squares model genetic inheritance.', 'Punnett squares model inheritance.'),
    miss('The age of a fossil layer', 'That belongs to Earth science dating.', 'Look at parent alleles.'),
    miss('The exact adult size of every offspring without variation', 'Punnett squares predict possible allele combinations, not a guaranteed full life history for each offspring.', 'This is heredity.'),
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
    miss('Air through the lungs without using blood vessels', 'The respiratory system moves air, while the circulatory system carries materials in blood.', 'Think vessels and heart.'),
    miss('Digested food through the intestines only', 'The digestive tract breaks down and moves food, but circulation carries absorbed nutrients through blood.', 'Use the body transport system.'),
  ]),
])

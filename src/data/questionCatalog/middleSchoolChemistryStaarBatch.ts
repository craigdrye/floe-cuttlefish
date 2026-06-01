import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

function lessonFor(chapter: string, title: string, correct: string) {
  if (/matter|physical properties/i.test(chapter)) {
    return `${title} is about describing what matter is like. The useful answer is "${correct}"; focus on mass, volume, particle arrangement, and properties that can be measured.`
  }
  if (/physical changes|chemical changes/i.test(chapter)) {
    return `${title} is about whether a substance has changed identity. The useful answer is "${correct}"; physical changes keep the substance, while chemical reactions make new substances.`
  }
  if (/atoms|compounds|mixtures/i.test(chapter)) {
    return `${title} is about how matter is built. The useful answer is "${correct}"; distinguish one kind of atom, chemically bonded substances, and physical mixtures.`
  }
  if (/conservation/i.test(chapter)) {
    return `${title} is about tracking atoms through a reaction. The useful answer is "${correct}"; in a closed system, atoms rearrange but total mass is conserved.`
  }
  if (/solutions/i.test(chapter)) {
    return `${title} is about particles spreading through a mixture. The useful answer is "${correct}"; dissolving disperses particles without making them vanish.`
  }
  return `${title} is a middle-school chemistry concept. The useful answer is "${correct}"; decide whether the question is about particles, substances, properties, or reactions.`
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
  source: 'Generated from STAAR/NYSED middle-school chemistry coverage',
})

export const middleSchoolChemistryStaarBatchQuestions = makeQuestionBank('AP', [
  q(429001, 'Matter', 'Matter definition', 'Matter is anything that:', 'Has mass and takes up space', [
    miss('Has no mass and no volume', 'That is the opposite of matter.', 'Use the basic definition.'),
    miss('Exists only as light', 'Light is energy, not matter in this course definition.', 'Matter has mass.'),
    miss('Can only be seen with the naked eye', 'Some matter is too small to see directly.', 'Visibility is not required.'),
  ]),
  q(429002, 'Matter', 'States of matter', 'In a solid, particles generally:', 'Vibrate in fixed positions', [
    miss('Move freely to fill any container', 'That describes gas behavior.', 'Solids keep shape.'),
    miss('Slide past each other while keeping volume', 'That describes liquids.', 'Solids have fixed positions.'),
    miss('Stop moving completely', 'Particles still vibrate.', 'Temperature above absolute zero means motion.'),
  ]),
  q(429003, 'Physical Properties', 'Density', 'Density is calculated as:', 'Mass divided by volume', [
    miss('Volume divided by mass', 'That reverses the formula.', 'Density tells mass per unit volume.'),
    miss('Mass plus volume', 'Density is a ratio, not a sum.', 'Use m/V.'),
    miss('Weight divided by temperature', 'Weight and temperature are useful measurements, but density compares mass with volume.', 'Use mass and volume.'),
  ]),
  q(429004, 'Physical Changes', 'Melting', 'When ice melts into liquid water, the change is:', 'A physical change', [
    miss('A chemical change that creates a new substance', 'Water remains H2O.', 'Only state changes.'),
    miss('A nuclear reaction', 'No atomic nuclei change.', 'Melting is phase change.'),
    miss('Photosynthesis', 'Photosynthesis is a biological chemical process.', 'This is about ice changing state.'),
  ]),
  q(429005, 'Chemical Changes', 'Evidence of reaction', 'Which observation is strongest evidence that a chemical reaction may have occurred?', 'A new gas forms with bubbling', [
    miss('A paper is cut in half', 'Cutting changes size/shape, not necessarily substance.', 'Look for new substances.'),
    miss('Ice is crushed into smaller pieces', 'That is physical change.', 'Same material, different size.'),
    miss('A pencil is moved across a desk', 'Movement alone is not chemical evidence.', 'Reaction evidence includes gas, precipitate, energy change, new color.'),
  ]),
  q(429006, 'Atoms', 'Element', 'An element is a substance made of:', 'Only one kind of atom', [
    miss('Two or more substances physically mixed', 'That describes a mixture.', 'One atom type.'),
    miss('Several compounds dissolved together', 'Compounds contain bonded elements.', 'Element means one type.'),
    miss('Only living cells', 'Elements can be in living and nonliving matter.', 'Think periodic table.'),
  ]),
  q(429007, 'Compounds', 'Compound', 'Water, H2O, is a compound because it:', 'Contains hydrogen and oxygen atoms chemically bonded', [
    miss('Is only one kind of atom', 'Water has two elements.', 'H and O are bonded.'),
    miss('Is hydrogen and oxygen stirred together without bonds', 'A compound has atoms chemically bonded in a fixed ratio, not just mixed together.', 'Use formula H2O.'),
    miss('Cannot be represented by a formula', 'H2O is its formula.', 'Compounds have fixed chemical formulas.'),
  ]),
  q(429008, 'Mixtures', 'Mixture', 'Salt water is best classified as:', 'A mixture', [
    miss('A pure element', 'It contains more than one substance.', 'Salt and water are combined physically.'),
    miss('A single atom', 'Salt water has many particles.', 'Mixtures contain substances together.'),
    miss('A vacuum', 'A vacuum has no matter; salt water is matter.', 'Use composition.'),
  ]),
  q(429009, 'Conservation', 'Mass in reactions', 'In a closed system during a chemical reaction, total mass:', 'Stays the same', [
    miss('Always disappears', 'Matter is conserved in closed systems.', 'Atoms rearrange.'),
    miss('Always doubles', 'Reactions do not create extra mass in this context.', 'Count matter before and after.'),
    miss('Changes only if the products look different', 'A visible change can happen while total mass stays the same in a closed system.', 'Closed system is the clue.'),
  ]),
  q(429010, 'Solutions', 'Dissolving', 'When sugar dissolves in water, the sugar:', 'Spreads out among water particles', [
    miss('Stops existing entirely', 'The sugar particles are still present.', 'Dissolving disperses particles.'),
    miss('Chemically changes into water molecules', 'The sugar particles spread out, but they do not become water molecules.', 'This is a solution process.'),
    miss('Settles as one solid layer because it cannot mix', 'Dissolving means the sugar particles disperse through the water rather than staying as a separate layer.', 'Think particles mixing.'),
  ]),
])

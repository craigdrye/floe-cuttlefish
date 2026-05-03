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
    'Coverage source: STAAR and NYSED middle-school physical science raw collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
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
    miss('Temperature divided by color', 'Those are not the density formula quantities.', 'Use mass and volume.'),
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
    miss('Is a random mixture of rocks', 'Water is a chemical compound, not a rock mixture.', 'Use formula H2O.'),
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
    miss('Depends only on color', 'Color does not determine mass conservation.', 'Closed system is the clue.'),
  ]),
  q(429010, 'Solutions', 'Dissolving', 'When sugar dissolves in water, the sugar:', 'Spreads out among water particles', [
    miss('Stops existing entirely', 'The sugar particles are still present.', 'Dissolving disperses particles.'),
    miss('Turns into metal', 'No metal is formed.', 'This is a solution process.'),
    miss('Becomes the container', 'The container is separate from the solution.', 'Think particles mixing.'),
  ]),
])

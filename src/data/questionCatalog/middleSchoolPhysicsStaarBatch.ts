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
  source: 'Generated from STAAR/NYSED middle-school physics coverage',
})

export const middleSchoolPhysicsStaarBatchQuestions = makeQuestionBank('AP', [
  q(430001, 'Motion', 'Speed formula', 'Speed is calculated as:', 'Distance divided by time', [
    miss('Time divided by distance', 'That reverses the relationship.', 'Speed tells distance per unit time.'),
    miss('Distance plus time', 'Speed is a ratio, not a sum.', 'Use distance/time.'),
    miss('Mass divided by color', 'Those quantities do not define speed.', 'Use motion quantities.'),
  ]),
  q(430002, 'Motion', 'Acceleration', 'Acceleration means a change in:', 'Velocity over time', [
    miss('Mass only', 'Mass can affect motion through force, but acceleration is velocity change.', 'Think speed or direction changing.'),
    miss('Color over time', 'Color change is not acceleration.', 'Motion is the clue.'),
    miss('Temperature only', 'Heating is not the definition of acceleration.', 'Use velocity.'),
  ]),
  q(430003, 'Forces', 'Balanced forces', 'If forces on an object are balanced, the net force is:', 'Zero', [
    miss('Always upward', 'Balanced forces cancel in all directions.', 'Net means combined effect.'),
    miss('Equal to the object color', 'Color is irrelevant.', 'Add force vectors.'),
    miss('Infinite', 'Balanced means no leftover force.', 'Opposing forces cancel.'),
  ]),
  q(430004, 'Forces', 'Unbalanced force', 'An unbalanced force on an object can cause:', 'A change in motion', [
    miss('No possible acceleration', 'Unbalanced force is what can produce acceleration.', 'Newton second law idea.'),
    miss('The object mass to become zero', 'Forces do not erase mass.', 'Focus on motion change.'),
    miss('The object to stop existing', 'That is not the basic physics effect.', 'Motion can change.'),
  ]),
  q(430005, 'Energy', 'Kinetic energy', 'Kinetic energy is the energy of:', 'Motion', [
    miss('Stored position only', 'Stored position energy is potential energy.', 'Kinetic means moving.'),
    miss('A chemical formula only', 'Chemical energy is different.', 'Think moving object.'),
    miss('No movement at all', 'Kinetic requires motion.', 'Speed matters.'),
  ]),
  q(430006, 'Energy', 'Potential energy', 'A book held above the floor has gravitational potential energy because of its:', 'Position in a gravitational field', [
    miss('Color on the cover', 'Color does not create gravitational potential energy.', 'Height matters.'),
    miss('Sound volume', 'Sound is a different energy form.', 'Think position and gravity.'),
    miss('Number of pages only', 'Mass matters, but the key clue is elevated position.', 'Height gives stored energy.'),
  ]),
  q(430007, 'Energy Transfer', 'Conduction', 'Thermal conduction transfers energy mainly through:', 'Direct contact between particles', [
    miss('Empty space with no interaction', 'Conduction needs matter in contact.', 'Particles pass energy along.'),
    miss('Only visible light beams', 'That is radiation, not conduction.', 'Touching/contact is the clue.'),
    miss('A change in gene frequency', 'That is biology, not heat transfer.', 'Stay with thermal energy.'),
  ]),
  q(430008, 'Waves', 'Wave amplitude', 'For a wave, greater amplitude usually means greater:', 'Energy carried by the wave', [
    miss('Certainty that the wave is a solid', 'Waves are not classified that way.', 'Amplitude relates to size of vibration.'),
    miss('Number of atoms in a compound', 'That is chemistry.', 'Wave height/energy.'),
    miss('Distance from Earth to the Moon', 'That is unrelated astronomy.', 'Use wave properties.'),
  ]),
  q(430009, 'Light', 'Reflection', 'Reflection occurs when light:', 'Bounces off a surface', [
    miss('Is absorbed into every surface with no bounce', 'That describes absorption, not reflection.', 'Mirrors reflect.'),
    miss('Turns into a fossil', 'Light does not fossilize.', 'Think bouncing ray.'),
    miss('Stops being energy', 'Light remains energy as it travels or interacts.', 'Surface interaction.'),
  ]),
  q(430010, 'Electricity', 'Complete circuit', 'A simple electric circuit needs a complete path so that:', 'Electric charge can flow', [
    miss('The wire can become a plant', 'That is unrelated.', 'Circuits are about charge flow.'),
    miss('The battery can disappear', 'The battery supplies energy; it does not vanish.', 'Path plus source.'),
    miss('No current can ever flow', 'An open path prevents current; a complete path allows it.', 'Closed circuit.'),
  ]),
])

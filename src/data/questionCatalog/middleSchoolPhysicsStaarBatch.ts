import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

function lessonFor(chapter: string, title: string, correct: string) {
  if (/motion/i.test(chapter)) {
    return `${title} is about describing motion with relationships, not just everyday words. The useful answer is "${correct}"; look for distance, time, speed, velocity, and whether something is changing.`
  }
  if (/forces/i.test(chapter)) {
    return `${title} is about the combined effect of pushes and pulls. The useful answer is "${correct}"; net force tells whether forces cancel or whether motion can change.`
  }
  if (/energy/i.test(chapter)) {
    return `${title} is about energy forms and transfers. The useful answer is "${correct}"; ask whether energy is stored by position, carried by motion, or transferred through particles.`
  }
  if (/waves|light/i.test(chapter)) {
    return `${title} is about wave behavior. The useful answer is "${correct}"; connect the property or interaction to what the wave is doing: vibrating, carrying energy, or bouncing from a surface.`
  }
  if (/electricity/i.test(chapter)) {
    return `${title} is about charge flow. The useful answer is "${correct}"; a closed conducting path lets electric charge move through the circuit.`
  }
  return `${title} is a middle-school physics concept. The useful answer is "${correct}"; identify the quantity, then use the relationship that connects it to the situation.`
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
  source: 'Generated from STAAR/NYSED middle-school physics coverage',
})

export const middleSchoolPhysicsStaarBatchQuestions = makeQuestionBank('AP', [
  q(430001, 'Motion', 'Speed formula', 'Speed is calculated as:', 'Distance divided by time', [
    miss('Time divided by distance', 'That reverses the relationship.', 'Speed tells distance per unit time.'),
    miss('Distance plus time', 'Speed is a ratio, not a sum.', 'Use distance/time.'),
    miss('Mass divided by time', 'Mass can matter for other motion ideas, but speed compares distance with time.', 'Use motion quantities.'),
  ]),
  q(430002, 'Motion', 'Acceleration', 'Acceleration means a change in:', 'Velocity over time', [
    miss('Mass only', 'Mass can affect motion through force, but acceleration is velocity change.', 'Think speed or direction changing.'),
    miss('Distance without considering time', 'Distance alone does not tell whether velocity is changing over time.', 'Motion is the clue.'),
    miss('Temperature only', 'Heating is not the definition of acceleration.', 'Use velocity.'),
  ]),
  q(430003, 'Forces', 'Balanced forces', 'If forces on an object are balanced, the net force is:', 'Zero', [
    miss('Always upward', 'Balanced forces cancel in all directions.', 'Net means combined effect.'),
    miss('Equal to the largest single force', 'Net force combines all forces, so equal opposite forces can cancel.', 'Add force vectors.'),
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
    miss('Constant temperature while it is held still', 'Temperature is thermal energy, but gravitational potential energy depends on height in a gravitational field.', 'Height matters.'),
    miss('Sound volume', 'Sound is a different energy form.', 'Think position and gravity.'),
    miss('Number of pages only', 'Mass matters, but the key clue is elevated position.', 'Height gives stored energy.'),
  ]),
  q(430007, 'Energy Transfer', 'Conduction', 'Thermal conduction transfers energy mainly through:', 'Direct contact between particles', [
    miss('Empty space with no interaction', 'Conduction needs matter in contact.', 'Particles pass energy along.'),
    miss('Only visible light beams', 'That is radiation, not conduction.', 'Touching/contact is the clue.'),
    miss('A fluid current carrying warmer matter around', 'That describes convection more than conduction.', 'Stay with thermal energy.'),
  ]),
  q(430008, 'Waves', 'Wave amplitude', 'For a wave, greater amplitude usually means greater:', 'Energy carried by the wave', [
    miss('Frequency only, with no change in energy', 'Frequency is a different wave property; amplitude is tied to the size of the vibration.', 'Amplitude relates to size of vibration.'),
    miss('Wavelength only, no matter how tall the wave is', 'Wavelength measures spacing between waves, while amplitude measures height from rest.', 'Wave height/energy.'),
    miss('Speed only because all bigger waves move faster', 'Wave speed depends on the medium; greater amplitude is more directly about carried energy.', 'Use wave properties.'),
  ]),
  q(430009, 'Light', 'Reflection', 'Reflection occurs when light:', 'Bounces off a surface', [
    miss('Is absorbed into every surface with no bounce', 'That describes absorption, not reflection.', 'Mirrors reflect.'),
    miss('Passes through a transparent material and bends', 'That describes refraction, not reflection.', 'Think bouncing ray.'),
    miss('Stops being energy', 'Light remains energy as it travels or interacts.', 'Surface interaction.'),
  ]),
  q(430010, 'Electricity', 'Complete circuit', 'A simple electric circuit needs a complete path so that:', 'Electric charge can flow', [
    miss('Charge can pile up at one end without moving', 'A complete circuit is needed for continuous charge flow, not just a pileup.', 'Circuits are about charge flow.'),
    miss('The battery can disappear', 'The battery supplies energy; it does not vanish.', 'Path plus source.'),
    miss('No current can ever flow', 'An open path prevents current; a complete path allows it.', 'Closed circuit.'),
  ]),
])

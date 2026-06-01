import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

function lessonFor(chapter: string, title: string, correct: string) {
  if (/motion|graphing|momentum/i.test(chapter)) {
    return `${title} is about describing how motion changes. The useful answer is "${correct}"; track which quantity is changing and whether the relationship uses slope, time, force, or momentum.`
  }
  if (/forces/i.test(chapter)) {
    return `${title} is about interactions, not one-way pushes. The useful answer is "${correct}"; identify the paired forces and remember that equal-and-opposite forces act on different objects.`
  }
  if (/energy/i.test(chapter)) {
    return `${title} is about energy transfer or conservation. The useful answer is "${correct}"; decide whether energy is being multiplied by distance, transformed between forms, or conserved in the ideal model.`
  }
  if (/circuits|electric/i.test(chapter)) {
    return `${title} is about electrical relationships. The useful answer is "${correct}"; follow charge, current, voltage, resistance, and sign rather than treating the numbers as interchangeable.`
  }
  if (/waves/i.test(chapter)) {
    return `${title} is about how a repeating disturbance moves. The useful answer is "${correct}"; connect wave speed, frequency, and wavelength with v = f lambda.`
  }
  return `${title} is a physics concept. The useful answer is "${correct}"; name the quantity in the prompt, then choose the relationship or principle that governs it.`
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
  source: 'Generated from STAAR/NYSED/OpenStax/OER high-school physics coverage',
})

// Topic tag corrected 2026-05-18 (HS Sciences Wave 4): NGSS HS Physics is not AP-tier.
export const highSchoolPhysicsNgssExamBatchQuestions = makeQuestionBank('Science', [
  q(443001, 'Motion', 'Acceleration meaning', 'A car changes velocity from 10 m/s to 25 m/s in 5 s. What is its average acceleration?', '3 m/s^2', [
    miss('15 m/s^2', 'That is the change in velocity, not acceleration.', 'Divide velocity change by time.'),
    miss('5 m/s^2', 'That uses the time as the acceleration.', 'Compute (25 - 10)/5.'),
    miss('7 m/s^2', 'That uses the average velocity loosely.', 'Acceleration is change in velocity over time.'),
  ]),
  q(443002, 'Forces', 'Newton third law', 'When a skateboarder pushes backward on the ground, why does the skateboarder move forward?', 'The ground pushes forward on the skateboarder with an equal and opposite force', [
    miss('The backward force disappears', 'Forces do not vanish; they act in pairs.', 'Use Newton’s third law.'),
    miss('The skateboarder has no inertia', 'Inertia resists motion changes but does not explain the forward force.', 'Identify the reaction force.'),
    miss('Gravity turns into horizontal force', 'Gravity acts downward here, not as the forward push.', 'Look at contact forces with the ground.'),
  ]),
  q(443003, 'Energy', 'Work formula', 'A 20 N force moves an object 3 m in the direction of the force. How much work is done?', '60 J', [
    miss('23 J', 'That adds force and distance instead of multiplying.', 'Work is force times distance when aligned.'),
    miss('6.7 J', 'That divides force by distance.', 'Use W = Fd.'),
    miss('0 J', 'Work is not zero when force and displacement point together.', 'Check the direction condition.'),
  ]),
  q(443004, 'Energy', 'Energy conservation', 'Ignoring air resistance, what happens to total mechanical energy as a ball falls?', 'It stays constant while potential energy changes into kinetic energy', [
    miss('It disappears as the ball speeds up', 'Energy changes form; it does not vanish in this ideal model.', 'Use conservation.'),
    miss('It becomes only potential energy near the ground', 'Potential energy decreases as height decreases.', 'Track height and speed.'),
    miss('It doubles every second', 'There is no doubling rule for total mechanical energy here.', 'Use the conservation principle.'),
  ]),
  q(443005, 'Circuits', 'Ohm law', 'A resistor has current 2 A and resistance 6 ohms. What is the voltage across it?', '12 V', [
    miss('3 V', 'That divides resistance by current.', 'Use V = IR.'),
    miss('8 V', 'That adds current and resistance.', 'Voltage is a product here.'),
    miss('0.33 V', 'That divides current by resistance.', 'Check Ohm’s law direction.'),
  ]),
  q(443006, 'Circuits', 'Series current', 'In a simple series circuit, what is true about current through each resistor?', 'The current is the same through each resistor', [
    miss('The current is zero after the first resistor', 'Charge continues through the single path.', 'Series circuits have one path.'),
    miss('Each resistor gets a completely unrelated current', 'The same loop current passes through each element.', 'Use the one-path idea.'),
    miss('Current only flows through the largest resistor', 'All series elements are in the same path.', 'Current cannot skip a series component.'),
  ]),
  q(443007, 'Waves', 'Wavelength', 'If wave speed is 12 m/s and frequency is 3 Hz, what is the wavelength?', '4 m', [
    miss('36 m', 'That multiplies speed and frequency instead of dividing.', 'Use v = f lambda.'),
    miss('9 m', 'That subtracts frequency from speed.', 'Use the wave equation.'),
    miss('15 m', 'That adds the values.', 'Wavelength is speed divided by frequency.'),
  ]),
  q(443008, 'Electric Fields', 'Charge interaction', 'What happens between two positive electric charges?', 'They repel each other', [
    miss('They attract each other', 'Like charges repel; opposite charges attract.', 'Check the signs.'),
    miss('They become neutral immediately', 'Charges do not automatically cancel at a distance.', 'Use electrostatic force.'),
    miss('They have no force between them', 'Electric charges exert forces on each other.', 'Like positive charges still interact.'),
  ]),
  q(443009, 'Momentum', 'Impulse meaning', 'When a force acts over a time interval, which motion quantity does impulse measure the change in?', 'Change in momentum', [
    miss('Change in temperature', 'Temperature is not the momentum quantity.', 'Impulse connects force over time to motion.'),
    miss('Mass divided by velocity', 'Momentum is mass times velocity; impulse is its change.', 'Recall the impulse-momentum theorem.'),
    miss('Only the distance traveled', 'Distance alone does not describe impulse.', 'Use force-time or momentum change.'),
  ]),
  q(443010, 'Graphing Motion', 'Position-time slope', 'On a position-time graph, what does the slope represent?', 'Velocity', [
    miss('Acceleration directly', 'Acceleration is related to the change in velocity, not the slope of position-time.', 'Slope of position versus time is velocity.'),
    miss('Mass', 'Mass is not read from a position-time graph slope.', 'Use graph axes.'),
    miss('Total energy', 'Energy is not represented by this slope.', 'Interpret rise over run: position over time.'),
  ]),
])

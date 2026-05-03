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
    'Coverage source: OpenStax Physics, AP Physics-aligned OER, and public physics review collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  source: 'Generated from OpenStax/OER AP Physics coverage',
})

export const apPhysicsExamBatchQuestions = makeQuestionBank('AP', [
  q(447001, 'Forces', 'Free-body diagram', 'A book rests on a horizontal table. Which forces act on the book?', 'Gravity downward and normal force upward', [
    miss('Only gravity downward', 'The table exerts an upward normal force.', 'Resting does not mean no contact force.'),
    miss('Only normal force upward', 'Earth still pulls the book downward.', 'Include gravity.'),
    miss('A horizontal force to the right', 'No horizontal interaction is described.', 'Use only forces supported by the setup.'),
  ]),
  q(447002, 'Circular Motion', 'Centripetal acceleration', 'For uniform circular motion, centripetal acceleration points:', 'Toward the center of the circle', [
    miss('Tangent to the circle', 'Velocity is tangent; acceleration points inward.', 'Separate velocity direction from acceleration direction.'),
    miss('Away from the center', 'The required acceleration is inward, not outward.', 'Centripetal means center-seeking.'),
    miss('Always straight upward', 'Direction depends on the position in the circle.', 'Use radial direction.'),
  ]),
  q(447003, 'Springs', 'Hooke law', 'A spring has k = 200 N/m and is stretched 0.10 m. What is the magnitude of the spring force?', '20 N', [
    miss('2000 N', 'That divides by displacement instead of multiplying.', 'Use F = kx.'),
    miss('2 N', 'That likely uses 0.01 m instead of 0.10 m.', 'Multiply 200 by 0.10.'),
    miss('0.5 N', 'That inverts the relationship.', 'Spring force grows with stretch.'),
  ]),
  q(447004, 'Impulse', 'Force-time graph', 'On a force-time graph, the area under the curve represents:', 'Impulse', [
    miss('Power', 'Power is energy per time, not force-time area.', 'Area under force-time has units N*s.'),
    miss('Displacement', 'Displacement comes from velocity-time area.', 'Match graph axes to units.'),
    miss('Spring constant', 'A spring constant relates force to stretch.', 'Use the impulse-momentum theorem.'),
  ]),
  q(447005, 'Electric Potential', 'Potential energy', 'A positive charge moves to a point of higher electric potential. What happens to its electric potential energy?', 'It increases', [
    miss('It decreases', 'For positive charge, U = qV increases when V increases.', 'Check the sign of q.'),
    miss('It becomes zero automatically', 'Higher potential does not imply zero energy.', 'Use U = qV.'),
    miss('It changes into mass only', 'That is not the electric-potential relationship here.', 'Use electrostatic energy.'),
  ]),
  q(447006, 'Capacitance', 'Capacitor definition', 'Capacitance is defined as:', 'Charge stored per electric potential difference', [
    miss('Current divided by resistance', 'That does not define capacitance.', 'Use C = Q/V.'),
    miss('Mass times acceleration', 'That is force.', 'Capacitors store charge.'),
    miss('Work divided by time', 'That is power.', 'Use charge and voltage.'),
  ]),
  q(447007, 'Magnetism', 'Magnetic force on charge', 'A charged particle moving parallel to a magnetic field experiences what magnetic force?', 'Zero magnetic force', [
    miss('Maximum magnetic force', 'Magnetic force is maximum when velocity is perpendicular to the field.', 'Use the sine of the angle.'),
    miss('A force opposite gravity always', 'Magnetic force depends on velocity, charge, and field direction.', 'No gravity relationship is given.'),
    miss('A force equal to qB only', 'Velocity and angle matter.', 'Use qvB sin(theta).'),
  ]),
  q(447008, 'Optics', 'Converging lens', 'A converging lens is also called a:', 'Convex lens', [
    miss('Concave lens', 'A concave lens usually diverges parallel light rays.', 'Connect shape to convergence.'),
    miss('Plane mirror', 'A mirror reflects; a lens refracts.', 'Use lens terminology.'),
    miss('Resistor', 'A resistor is an electric circuit component.', 'Stay in optics.'),
  ]),
  q(447009, 'Simple Harmonic Motion', 'Mass-spring period', 'For a mass-spring oscillator, increasing the mass while keeping k fixed does what to the period?', 'Increases the period', [
    miss('Decreases the period', 'The period is proportional to sqrt(m/k).', 'More mass oscillates more slowly.'),
    miss('Leaves the period unchanged', 'Mass affects a spring oscillator period.', 'Check the formula.'),
    miss('Makes the period zero', 'A larger mass does not eliminate oscillation period.', 'Use physical reasonableness.'),
  ]),
  q(447010, 'Fluids', 'Pressure with depth', 'In a fluid at rest, pressure generally does what as depth increases?', 'Increases', [
    miss('Decreases', 'More depth means more fluid weight above.', 'Use hydrostatic pressure.'),
    miss('Stays exactly the same in all fluids', 'Hydrostatic pressure depends on depth.', 'Think p = p0 + rho gh.'),
    miss('Turns into velocity', 'Pressure and velocity are different quantities.', 'Use the static-fluid context.'),
  ]),
])

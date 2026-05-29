import { makeQuestionBank } from './base'
import { polish as runPolish } from './polishPipeline'
import {
  AP_WORKOUT_SCIENCE_SUB_TOPICS,
  AP_WORKOUT_SCIENCE_MENTOR_HINTS,
  AP_WORKOUT_SCIENCE_CORRECT_SHORTENED,
} from './apWorkoutSciencePolish'

// Wave 4 HS Sciences (2026-05-18): canonical AP Physics bank. Merged from:
//   - apPhysicsWorkoutGenerated (drill set, 50 Q, IDs 399001-399050)
//   - apPhysicsExamBatch (exam-style set, 10 Q, IDs 447001-447010)
//   - Chapter 1 (modelling/uncertainty) additions (new IDs 4300200-4300204)
//   - Rotational dynamics additions (torque, I, angular momentum; new IDs 4300210-4300216)
//   - Chapter 8 (FRQ / symbolic derivation / units check) additions (new IDs 4300220-4300226)
// Per-distractor explanations throughout. No DEFAULT_FLAW. Chapter labels aligned to AP Physics 1 CED.

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
    'Floe-native AP Physics drill or exam item. Distractors carry per-option explanations and rebound hints. Chapter labels match the AP Physics 1 Course and Exam Description.',
  source: 'Floe AP Physics coverage (merged 2026-05-18)',
})

const _baseApPhysicsWorkoutGeneratedQuestions = makeQuestionBank('Science', [
  q(399001, 'Kinematics', 'Average velocity', 'A runner moves 100 m east in 20 s. What is the average velocity?', '5 m/s east', [
    miss('5 m/s west', 'The magnitude is right but the direction is wrong.', 'Velocity includes direction.'),
    miss('80 m/s east', 'That subtracts time from distance.', 'Use displacement divided by time.'),
    miss('2000 m/s east', 'That multiplies distance and time.', 'Average velocity is a ratio.'),
  ]),
  q(399002, 'Kinematics', 'Constant acceleration', 'An object starts from rest and accelerates at 3 m/s^2 for 4 s. Its final speed is:', '12 m/s', [
    miss('7 m/s', 'That adds acceleration and time.', 'Use v = v0 + at.'),
    miss('3 m/s', 'That is the acceleration value, not final speed.', 'Multiply acceleration by time from rest.'),
    miss('48 m/s', 'That multiplies by time twice.', 'Final speed is 3*4.'),
  ]),
  q(399003, 'Kinematics', 'Displacement from rest', 'Starting from rest with constant acceleration 2 m/s^2 for 5 s, displacement is:', '25 m', [
    miss('10 m', 'That uses at but misses the 1/2 t factor for displacement.', 'Use s = 1/2 at^2.'),
    miss('50 m', 'That misses the factor of 1/2.', 'From rest, displacement is half acceleration times time squared.'),
    miss('7 m', 'That adds acceleration and time.', 'Use the kinematics equation.'),
  ]),
  q(399004, 'Kinematics', 'Projectile horizontal speed', 'Ignoring air resistance, a projectile launched horizontally has horizontal velocity that:', 'Stays constant', [
    miss('Increases because of gravity', 'Gravity acts vertically.', 'Separate horizontal and vertical motion.'),
    miss('Immediately becomes zero', 'No horizontal force means no horizontal acceleration.', 'Velocity persists without air resistance.'),
    miss('Oscillates up and down', 'That is not projectile motion.', 'Use independent components.'),
  ]),
  q(399005, 'Kinematics', 'Free fall acceleration', 'Near Earth, an object in free fall has acceleration approximately:', '9.8 m/s^2 downward', [
    miss('9.8 m/s upward', 'The acceleration due to gravity points downward.', 'Direction matters.'),
    miss('0 m/s^2', 'Free fall means gravity is acting.', 'Ignoring air resistance does not remove gravity.'),
    miss('Depends on mass only', 'All masses share the same gravitational acceleration near Earth.', 'Mass cancels in free fall.'),
  ]),
  q(399006, 'Forces', 'Newton second law', 'If net force is 20 N on a 4 kg object, acceleration is:', '5 m/s^2', [
    miss('80 m/s^2', 'That multiplies force and mass.', 'Use a = F/m.'),
    miss('16 m/s^2', 'That subtracts mass from force.', 'Use Newton second law.'),
    miss('24 m/s^2', 'That adds force and mass.', 'Acceleration is force divided by mass.'),
  ]),
  q(399007, 'Forces', 'Net force zero', 'If the net force on an object is zero, then its acceleration is:', '0', [
    miss('Always 9.8 m/s^2', 'Only gravity alone near Earth gives that; net force zero means forces balance.', 'Use Fnet = ma.'),
    miss('Always positive', 'Acceleration follows net force.', 'Zero net force gives zero acceleration.'),
    miss('Undefined', 'Acceleration is defined; it is zero.', 'Balanced forces can still mean constant velocity.'),
  ]),
  q(399008, 'Forces', 'Weight', 'Weight is best defined as:', 'The gravitational force on an object', [
    miss('The amount of matter in an object', 'That is mass.', 'Weight is a force.'),
    miss('Velocity times time', 'That is displacement under constant velocity.', 'Use gravity.'),
    miss('Normal force in every situation', 'Normal force can equal weight in some cases, but not by definition.', 'Weight is mg.'),
  ]),
  q(399009, 'Forces', 'Normal force', 'For a book resting on a horizontal table with no other vertical forces, the normal force equals:', 'The book\'s weight in magnitude', [
    miss('Zero', 'The table pushes up on the book.', 'Vertical forces balance.'),
    miss('Twice the book\'s weight', 'That would create upward acceleration.', 'At rest means net vertical force zero.'),
    miss('The book\'s horizontal velocity', 'Normal force is vertical contact force.', 'Use force balance.'),
  ]),
  q(399010, 'Forces', 'Friction direction', 'Kinetic friction on a sliding box acts:', 'Opposite the direction of sliding motion', [
    miss('In the same direction as sliding motion', 'Friction resists relative motion.', 'It opposes sliding.'),
    miss('Always upward', 'Friction is tangent to the contact surface.', 'Direction depends on sliding direction.'),
    miss('Only when gravity is absent', 'Friction often depends on normal force from gravity.', 'It occurs with contact.'),
  ]),
  q(399011, 'Circular Motion', 'Centripetal acceleration', 'For uniform circular motion, acceleration points:', 'Toward the center of the circle', [
    miss('Tangent to the circle only', 'Velocity is tangent; acceleration points inward.', 'Direction of velocity changes toward center.'),
    miss('Away from the center', 'The required acceleration is inward.', 'Centripetal means center-seeking.'),
    miss('Nowhere because speed is constant', 'Constant speed can still mean changing velocity direction.', 'Acceleration can change direction, not speed.'),
  ]),
  q(399012, 'Circular Motion', 'Centripetal acceleration formula', 'Centripetal acceleration is:', 'v^2/r', [
    miss('vr^2', 'That has the wrong dependence and units.', 'Acceleration grows with speed squared and shrinks with radius.'),
    miss('r/v^2', 'The ratio is inverted.', 'Use speed squared over radius.'),
    miss('mv', 'That is momentum magnitude.', 'Centripetal acceleration does not include mass.'),
  ]),
  q(399013, 'Energy', 'Kinetic energy', 'The kinetic energy of mass m moving at speed v is:', '1/2 mv^2', [
    miss('mv', 'That is momentum.', 'Energy depends on speed squared.'),
    miss('mgh', 'That is gravitational potential energy.', 'Kinetic means motion.'),
    miss('1/2 m^2v', 'The square is on velocity, not mass.', 'Recall KE formula.'),
  ]),
  q(399014, 'Energy', 'Work', 'Work done by a constant force along displacement is:', 'F d cos(theta)', [
    miss('F/d', 'Work multiplies force by displacement component.', 'Use dot product.'),
    miss('Fd sin(theta) always', 'The component along displacement uses cosine.', 'Dot products use cos(theta).'),
    miss('mass times velocity', 'That is momentum.', 'Work transfers energy.'),
  ]),
  q(399015, 'Energy', 'Work-energy theorem', 'Net work equals change in:', 'Kinetic energy', [
    miss('Momentum only', 'Impulse changes momentum.', 'Work changes kinetic energy.'),
    miss('Mass', 'Ordinary work does not change mass in AP mechanics.', 'Use energy.'),
    miss('Charge', 'Charge is not changed by mechanical work.', 'Think KE final minus KE initial.'),
  ]),
  q(399016, 'Energy', 'Potential energy', 'Near Earth, gravitational potential energy is:', 'mgh', [
    miss('1/2 mv^2', 'That is kinetic energy.', 'Potential depends on height.'),
    miss('mg/h', 'Height should multiply, not divide.', 'Use weight times height.'),
    miss('mv', 'That is momentum.', 'Use gravitational energy formula.'),
  ]),
  q(399017, 'Energy', 'Conservation', 'With no nonconservative work, total mechanical energy is:', 'Conserved', [
    miss('Always increasing', 'Without nonconservative work, energy transforms but total stays fixed.', 'Kinetic and potential trade off.'),
    miss('Always zero', 'Conserved does not mean zero.', 'It means constant.'),
    miss('Equal to momentum', 'Energy and momentum are different quantities.', 'Use mechanical energy.'),
  ]),
  q(399018, 'Momentum', 'Momentum', 'Linear momentum is:', 'mv', [
    miss('1/2 mv^2', 'That is kinetic energy.', 'Momentum is mass times velocity.'),
    miss('ma', 'That relates to force.', 'Use velocity, not acceleration.'),
    miss('mgh', 'That is potential energy.', 'Momentum is motion quantity.'),
  ]),
  q(399019, 'Momentum', 'Impulse', 'Impulse equals change in:', 'Momentum', [
    miss('Mass', 'Impulse changes momentum, not mass.', 'Impulse is force times time.'),
    miss('Position only', 'Impulse is not displacement.', 'Use J = delta p.'),
    miss('Temperature', 'Not in basic mechanics impulse.', 'Think collision force over time.'),
  ]),
  q(399020, 'Momentum', 'Elastic collision', 'In an elastic collision, which quantities are conserved for the system?', 'Momentum and kinetic energy', [
    miss('Momentum only', 'That is true for many collisions but elastic also conserves KE.', 'Elastic means no kinetic energy lost.'),
    miss('Kinetic energy only', 'System momentum is also conserved absent external impulse.', 'Collisions conserve momentum.'),
    miss('Mass and charge only', 'Those may be conserved, but the defining mechanics pair is momentum and KE.', 'Use collision classification.'),
  ]),
  q(399021, 'Rotation', 'Torque', 'Torque is best described as:', 'Rotational effect of a force', [
    miss('Linear momentum only', 'Torque causes angular acceleration.', 'Think twist.'),
    miss('Stored electric charge', 'That is not torque.', 'Torque is rotational mechanics.'),
    miss('Mass per unit volume', 'That is density.', 'Use force times lever arm.'),
  ]),
  q(399022, 'Rotation', 'Torque formula', 'For a perpendicular force, torque magnitude is:', 'rF', [
    miss('F/r', 'Torque increases with lever arm.', 'Use lever arm times force.'),
    miss('mv', 'That is momentum.', 'Torque uses force and radius.'),
    miss('r/F', 'The force should multiply.', 'Units are N m.'),
  ]),
  q(399023, 'Rotation', 'Rotational equilibrium', 'For rotational equilibrium, net torque is:', '0', [
    miss('Always 1', 'Equilibrium requires zero net torque.', 'No angular acceleration.'),
    miss('Equal to mass', 'Torque and mass are different quantities.', 'Use sum of torques.'),
    miss('Undefined', 'Net torque is defined and zero.', 'Balanced rotation.'),
  ]),
  q(399024, 'Rotation', 'Angular momentum', 'Angular momentum is conserved when external net torque is:', '0', [
    miss('Maximum', 'External torque changes angular momentum.', 'No external torque means conservation.'),
    miss('Equal to weight', 'Weight is a force, not the condition.', 'Use torque.'),
    miss('Always negative', 'Sign is not the conservation condition.', 'Net torque must vanish.'),
  ]),
  q(399025, 'Simple Harmonic Motion', 'Hooke law', 'A spring force is often modeled as:', 'F = -kx', [
    miss('F = k/x', 'Spring force is proportional to displacement.', 'Hooke law is linear.'),
    miss('F = mv', 'That is momentum.', 'Use displacement from equilibrium.'),
    miss('F = kx^2', 'Basic Hooke law is linear, not quadratic.', 'The minus sign restores toward equilibrium.'),
  ]),
  q(399026, 'Simple Harmonic Motion', 'Spring energy', 'Elastic potential energy in a spring is:', '1/2 kx^2', [
    miss('kx', 'That has the form of force magnitude, not energy.', 'Energy integrates force over distance.'),
    miss('mgx', 'That is gravitational-style energy.', 'Use spring constant k.'),
    miss('1/2 mv^2', 'That is kinetic energy.', 'Spring energy depends on displacement.'),
  ]),
  q(399027, 'Waves', 'Wave speed', 'Wave speed equals:', 'Frequency times wavelength', [
    miss('Frequency divided by wavelength', 'The standard relation multiplies.', 'v = f lambda.'),
    miss('Wavelength divided by mass', 'Mass is not in the basic wave-speed relation.', 'Use f and lambda.'),
    miss('Amplitude times charge', 'Amplitude affects energy, not the basic speed relation.', 'Recall v=fλ.'),
  ]),
  q(399028, 'Waves', 'Period and frequency', 'Frequency is the reciprocal of:', 'Period', [
    miss('Wavelength', 'Frequency and wavelength relate through speed, not reciprocal generally.', 'f = 1/T.'),
    miss('Amplitude', 'Amplitude is wave size.', 'Frequency counts cycles per time.'),
    miss('Mass', 'Mass is unrelated here.', 'Use time per cycle.'),
  ]),
  q(399029, 'Waves', 'Sound medium', 'Sound waves in air are:', 'Longitudinal pressure waves', [
    miss('Transverse electromagnetic waves', 'That describes light, not sound in air.', 'Air molecules compress and rarefy.'),
    miss('Static electric fields', 'Sound is mechanical vibration.', 'It needs a medium.'),
    miss('Only gravitational waves', 'Sound is not spacetime ripple.', 'Use pressure variation.'),
  ]),
  q(399030, 'Waves', 'Standing waves', 'A standing wave forms from:', 'Interference of waves traveling in opposite directions', [
    miss('A single particle at rest forever', 'Standing waves come from superposition.', 'Opposite directions interfere.'),
    miss('Only constant electric current', 'That is circuit language.', 'Use wave interference.'),
    miss('Removing all reflections', 'Reflections often help create standing waves.', 'Nodes and antinodes arise from interference.'),
  ]),
  q(399031, 'Electricity', 'Coulomb force', 'Coulomb force magnitude varies with distance r as:', '1/r^2', [
    miss('r^2', 'Force decreases with distance, not increases.', 'Inverse-square law.'),
    miss('1/r', 'The exponent is 2.', 'Compare to gravity form.'),
    miss('r', 'That is a linear increase.', 'Electric force weakens with distance squared.'),
  ]),
  q(399032, 'Electricity', 'Electric field', 'Electric field is force per unit:', 'Charge', [
    miss('Mass', 'Force per mass is gravitational field/acceleration.', 'Electric field uses test charge.'),
    miss('Time', 'Force per time is not electric field.', 'Use E = F/q.'),
    miss('Velocity', 'That is not field definition.', 'Divide force by charge.'),
  ]),
  q(399033, 'Electricity', 'Potential difference', 'Voltage is electric potential energy per unit:', 'Charge', [
    miss('Mass', 'That would be gravitational-style energy per mass.', 'Voltage is energy per coulomb.'),
    miss('Distance only', 'Electric field can be voltage per distance, but voltage itself is energy per charge.', 'Use joules per coulomb.'),
    miss('Frequency', 'Frequency is cycles per second.', 'Voltage is potential difference.'),
  ]),
  q(399034, 'Circuits', 'Ohm law', 'Ohm\'s law is:', 'V = IR', [
    miss('P = mv', 'That is not Ohm law.', 'Voltage equals current times resistance.'),
    miss('F = ma', 'That is Newton second law.', 'Use circuit variables.'),
    miss('V = I/R', 'Resistance should multiply current.', 'Solve current as I=V/R.'),
  ]),
  q(399035, 'Circuits', 'Series current', 'In a series circuit, current through each component is:', 'The same', [
    miss('Always zero', 'Current can flow through a series circuit.', 'There is one path.'),
    miss('Split equally at every component', 'Splitting occurs at parallel branches.', 'Series has no branching.'),
    miss('Unrelated to voltage', 'Ohm law connects current and voltage/resistance.', 'But the same current passes through each element.'),
  ]),
  q(399036, 'Circuits', 'Parallel voltage', 'In a parallel circuit, voltage across each branch is:', 'The same', [
    miss('Always zero', 'Branches can have source voltage across them.', 'Parallel branches share endpoints.'),
    miss('Different by necessity', 'Parallel elements have the same potential difference.', 'Same two nodes means same voltage.'),
    miss('Equal to total resistance', 'Voltage and resistance are different quantities.', 'Use circuit node idea.'),
  ]),
  q(399037, 'Circuits', 'Power', 'Electrical power can be calculated as:', 'P = IV', [
    miss('P = I/V', 'Power multiplies current and voltage.', 'Use watts = amps times volts.'),
    miss('P = R/V', 'That is not a standard power relation.', 'Start from IV.'),
    miss('P = mv', 'That is momentum notation.', 'Use circuit variables.'),
  ]),
  q(399038, 'Magnetism', 'Magnetic force on charge', 'A moving charge in a magnetic field feels force proportional to:', 'qvB sin(theta)', [
    miss('qB/v', 'Velocity should multiply and angle matters.', 'Use cross product magnitude.'),
    miss('qE only', 'That is electric force, not magnetic.', 'Magnetic force depends on velocity.'),
    miss('mv^2/r only', 'That is centripetal force form.', 'Use charge, speed, and magnetic field.'),
  ]),
  q(399039, 'Magnetism', 'Right hand rule', 'Right-hand rules are used to determine:', 'Directions of magnetic forces or fields', [
    miss('Only numerical magnitudes', 'Right-hand rules give direction.', 'Use vector cross products.'),
    miss('Mass of a particle', 'Mass is not found by hand direction.', 'This is vector direction.'),
    miss('Temperature of a wire', 'Not the purpose of the rule.', 'Think current, field, force directions.'),
  ]),
  q(399040, 'Optics', 'Reflection law', 'The law of reflection says:', 'Angle of incidence equals angle of reflection', [
    miss('Angle of incidence is always twice the reflected angle', 'The two angles are equal.', 'Measure from the normal.'),
    miss('Light stops at every mirror', 'Light reflects; it does not stop.', 'Use angle equality.'),
    miss('Frequency always becomes zero', 'Reflection does not imply zero frequency.', 'Direction changes.'),
  ]),
  q(399041, 'Optics', 'Snell law', 'Refraction is bending of light due to change in:', 'Wave speed between media', [
    miss('Object mass', 'Light bending at boundaries is not due to object mass in AP optics.', 'Speed changes in media.'),
    miss('Battery voltage only', 'Voltage is circuit language.', 'Use index of refraction.'),
    miss('The observer\'s name', 'Names do not affect refraction.', 'Physical media matter.'),
  ]),
  q(399042, 'Optics', 'Converging lens', 'A converging lens is thicker in the middle and can bring parallel rays to:', 'A focal point', [
    miss('A resistor', 'That is a circuit component.', 'Lenses focus light.'),
    miss('A standing wave node only', 'Nodes are wave interference points, not lens focus.', 'Use ray optics.'),
    miss('No point ever', 'Converging lenses can focus parallel rays.', 'Think convex lens.'),
  ]),
  q(399043, 'Fluids', 'Density', 'Density is:', 'Mass per unit volume', [
    miss('Volume per unit charge', 'Charge is unrelated to density definition.', 'Density uses mass and volume.'),
    miss('Force per unit time', 'That is not density.', 'Use rho = m/V.'),
    miss('Energy per wavelength', 'Not density.', 'Mass divided by volume.'),
  ]),
  q(399044, 'Fluids', 'Pressure', 'Pressure is:', 'Force per unit area', [
    miss('Force times area', 'Pressure divides by area.', 'Same force over smaller area gives larger pressure.'),
    miss('Mass times velocity', 'That is momentum.', 'Use force and area.'),
    miss('Energy per charge', 'That is voltage.', 'Pressure is mechanical.'),
  ]),
  q(399045, 'Fluids', 'Buoyant force', 'Buoyant force equals the weight of:', 'Displaced fluid', [
    miss('The object\'s color', 'Color is irrelevant.', 'Archimedes principle uses displaced fluid.'),
    miss('The surrounding air only in every case', 'For objects in liquids, the displaced liquid matters.', 'Use the fluid displaced.'),
    miss('The object\'s velocity', 'Velocity is not the buoyant-force weight.', 'Buoyancy is based on displaced volume.'),
  ]),
  q(399046, 'Thermal Physics', 'Temperature', 'Temperature is related to average molecular:', 'Kinetic energy', [
    miss('Charge only', 'Temperature is not charge.', 'Think random motion.'),
    miss('Mass only', 'Mass contributes, but temperature tracks average kinetic energy.', 'Use particle motion.'),
    miss('Color only', 'Color can correlate with temperature in radiation, but not the definition.', 'Use microscopic motion.'),
  ]),
  q(399047, 'Thermal Physics', 'First law', 'The first law of thermodynamics is a statement of conservation of:', 'Energy', [
    miss('Charge only', 'Charge conservation is separate.', 'Thermodynamics tracks heat, work, internal energy.'),
    miss('Momentum only', 'Momentum conservation is mechanics.', 'First law uses energy accounting.'),
    miss('Wavelength only', 'Not the law.', 'Energy is conserved.'),
  ]),
  q(399048, 'Modern Physics', 'Photoelectric effect', 'In the photoelectric effect, increasing light frequency above threshold increases emitted electrons\':', 'Kinetic energy', [
    miss('Rest mass', 'Electron rest mass does not change.', 'Frequency affects photon energy.'),
    miss('Charge magnitude', 'Electron charge is fixed.', 'Photon energy goes into KE.'),
    miss('Number of protons', 'Electrons emitted are not protons.', 'Use E = hf.'),
  ]),
  q(399049, 'Modern Physics', 'Photon energy', 'Photon energy is proportional to:', 'Frequency', [
    miss('Wavelength directly', 'Energy is inversely proportional to wavelength.', 'E = hf = hc/lambda.'),
    miss('Mass density', 'Photons are not handled by mass density here.', 'Use frequency.'),
    miss('Circuit resistance only', 'Resistance is unrelated to photon energy.', 'Use Planck relation.'),
  ]),
  q(399050, 'Experimental Skills', 'Unit check', 'Which unit is equivalent to a newton?', 'kg m/s^2', [
    miss('kg m/s', 'That is the momentum unit.', 'Force is mass times acceleration.'),
    miss('J/s', 'That is the watt, a power unit.', 'Use F = ma.'),
    miss('C/V', 'That is the farad, a capacitance unit.', 'Newton is mechanical force.'),
  ]),

  // ---- Exam batch (merged from apPhysicsExamBatch) ----
  q(447001, 'Forces', 'Free-body diagram', 'A book rests on a horizontal table. Which forces act on the book?', 'Gravity downward and the normal force from the table upward', [
    miss('Only gravity downward', 'The table exerts an upward normal force.', 'Resting does not mean no contact force.'),
    miss('Only normal force upward', 'Earth still pulls the book downward.', 'Include gravity.'),
    miss('A horizontal force to the right', 'No horizontal interaction is described.', 'Use only forces supported by the setup.'),
  ]),
  q(447002, 'Circular Motion', 'Centripetal direction', 'For uniform circular motion, centripetal acceleration points:', 'Toward the center of the circle', [
    miss('Tangent to the circle', 'Velocity is tangent; acceleration points inward.', 'Separate velocity direction from acceleration.'),
    miss('Away from the center', 'The required acceleration is inward, not outward.', 'Centripetal = center-seeking.'),
    miss('Always straight upward', 'Direction depends on position in the circle.', 'Use radial direction.'),
  ]),
  q(447003, 'Springs', 'Hooke law calc', 'A spring has k = 200 N/m and is stretched 0.10 m. What is the magnitude of the spring force?', '20 N', [
    miss('2000 N', 'That divides by displacement instead of multiplying.', 'Use F = kx.'),
    miss('2 N', 'That likely uses 0.01 m instead of 0.10 m.', 'Multiply 200 by 0.10.'),
    miss('0.5 N', 'That inverts the relationship.', 'Spring force grows with stretch.'),
  ]),
  q(447004, 'Impulse', 'Force-time area', 'On a force-time graph, the area under the curve represents:', 'Impulse (change in momentum)', [
    miss('Power', 'Power is energy per time, not force-time area.', 'Area has units N*s.'),
    miss('Displacement', 'Displacement comes from velocity-time area.', 'Match graph axes to units.'),
    miss('Spring constant', 'A spring constant relates force to stretch.', 'Use impulse-momentum theorem.'),
  ]),
  q(447005, 'Electric Potential', 'PE of positive charge', 'A positive charge moves to a point of higher electric potential. What happens to its electric potential energy?', 'It increases (U = qV with positive q)', [
    miss('It decreases', 'For positive q, U increases as V increases.', 'Check the sign of q.'),
    miss('It becomes zero automatically', 'Higher potential does not imply zero energy.', 'Use U = qV.'),
    miss('It changes into mass only', 'That is not the electric-potential relationship here.', 'Use electrostatic energy.'),
  ]),
  q(447006, 'Capacitance', 'Capacitance definition', 'Capacitance is defined as:', 'Charge stored per electric potential difference (C = Q/V)', [
    miss('Current divided by resistance', 'That does not define capacitance.', 'Use C = Q/V.'),
    miss('Mass times acceleration', 'That is force.', 'Capacitors store charge.'),
    miss('Work divided by time', 'That is power.', 'Use charge and voltage.'),
  ]),
  q(447007, 'Magnetism', 'Parallel velocity to B', 'A charged particle moving parallel to a magnetic field experiences what magnetic force?', 'Zero magnetic force (sin 0 = 0)', [
    miss('Maximum magnetic force', 'Magnetic force is maximum when velocity is perpendicular to the field.', 'Use sine of the angle.'),
    miss('A force opposite gravity always', 'Magnetic force depends on v, q, and B direction.', 'No gravity relationship given.'),
    miss('A force equal to qB only', 'Velocity and angle matter.', 'Use qvB sin(theta).'),
  ]),
  q(447008, 'Optics', 'Converging lens type', 'A converging lens is also called a:', 'Convex lens', [
    miss('Concave lens', 'A concave lens usually diverges parallel light rays.', 'Connect shape to convergence.'),
    miss('Plane mirror', 'A mirror reflects; a lens refracts.', 'Use lens terminology.'),
    miss('Resistor', 'A resistor is an electric circuit component.', 'Stay in optics.'),
  ]),
  q(447009, 'Simple Harmonic Motion', 'Mass-spring period change', 'For a mass-spring oscillator, increasing mass while keeping k fixed does what to the period?', 'Increases the period (T proportional to sqrt(m/k))', [
    miss('Decreases the period', 'The period is proportional to sqrt(m/k).', 'More mass oscillates more slowly.'),
    miss('Leaves the period unchanged', 'Mass affects the spring-oscillator period.', 'Check the formula.'),
    miss('Makes the period zero', 'A larger mass does not eliminate the period.', 'Use physical reasonableness.'),
  ]),
  q(447010, 'Fluids', 'Hydrostatic pressure', 'In a fluid at rest, pressure does what as depth increases?', 'Increases (p = p0 + rho g h)', [
    miss('Decreases', 'More depth means more fluid weight above.', 'Use hydrostatic pressure.'),
    miss('Stays exactly the same in all fluids', 'Hydrostatic pressure depends on depth.', 'Think p = p0 + rho g h.'),
    miss('Turns into velocity', 'Pressure and velocity are different quantities.', 'Use the static-fluid context.'),
  ]),

  // ---- Chapter 1: Physics Practices and Modeling (new) ----
  q(4300200, 'Practices and Modeling', 'System choice', 'When applying Newton\'s second law, defining "the system" matters because:', 'External forces depend on what is inside vs outside the system boundary', [
    miss('System choice changes the universal value of g', 'Local g is set by Earth, not by your bookkeeping.', 'Use system to track forces, not constants.'),
    miss('System choice changes whether energy is conserved overall', 'Energy conservation holds; what counts as internal vs external work changes.', 'Bookkeeping changes, conservation does not.'),
    miss('System choice is purely cosmetic with no physical effect', 'It changes which forces appear in your equations.', 'Boundary matters.'),
  ]),
  q(4300201, 'Practices and Modeling', 'Uncertainty', 'A length is reported as 3.20 +/- 0.05 m. This implies the true value most likely:', 'Lies within 3.15 to 3.25 m with stated uncertainty', [
    miss('Is exactly 3.20 m with no possibility of error', 'Uncertainty intervals exist for a reason.', 'Use the +/- value.'),
    miss('Could equally be 0 m or 100 m', 'The interval is narrow, not unbounded.', 'Read the +/- value carefully.'),
    miss('Will move outside the interval with high probability', 'A stated uncertainty usually defines a high-confidence range.', 'Use measurement convention.'),
  ]),
  q(4300202, 'Practices and Modeling', 'Significant figures', 'Multiplying 2.5 m (2 sig figs) by 4.000 s (4 sig figs), the result should be reported to:', '2 significant figures (10. m s)', [
    miss('4 significant figures (10.00 m s)', 'In multiplication, sig figs follow the least precise factor.', 'Use the smallest sig-fig count.'),
    miss('1 significant figure (10 m s)', 'The product of 2.5 and 4.000 has 2 sig figs, not 1.', 'Match the limiting factor.'),
    miss('6 significant figures', 'Sig figs do not add when multiplying.', 'Use rule for products.'),
  ]),
  q(4300203, 'Practices and Modeling', 'Graph slope meaning', 'On a velocity-time graph, the slope of the line represents:', 'Acceleration', [
    miss('Displacement', 'Displacement is the area under a v-t graph.', 'Slope = rate of change of v.'),
    miss('Force', 'Force comes from mass times acceleration, not directly from v-t slope.', 'Slope alone is a.'),
    miss('Total energy', 'Total energy is not the slope of v vs t.', 'Use the graph axes directly.'),
  ]),
  q(4300204, 'Practices and Modeling', 'Free-body assumptions', 'Drawing a free-body diagram for a sliding block typically assumes the block is:', 'A point particle at the center of mass', [
    miss('A rigid extended body needing torque analysis', 'Translational FBDs treat the object as a point unless rotation matters.', 'Use point-particle model.'),
    miss('A perfectly fluid body', 'Solid blocks are not modeled as fluids in basic FBDs.', 'Choose the right model.'),
    miss('A massless object', 'FBDs include weight (mg), so mass is not zero.', 'Mass matters.'),
  ]),

  // ---- Rotational Dynamics (new — biggest audit gap) ----
  q(4300210, 'Rotation', 'Moment of inertia meaning', 'Moment of inertia I of a rotating rigid body measures:', 'Resistance to angular acceleration about a chosen axis', [
    miss('The total kinetic energy of the body', 'KE_rot uses 1/2 I omega^2, but I itself is the inertial measure.', 'I is resistance, not energy.'),
    miss('The body\'s mass alone', 'Distribution of mass relative to the axis matters, not just mass.', 'Use mass and distance.'),
    miss('The torque applied to the body', 'Torque is the cause; I is the response factor.', 'Different sides of tau = I alpha.'),
  ]),
  q(4300211, 'Rotation', 'Torque magnitude', 'For a force F applied perpendicular to a lever arm of length r, the torque magnitude about the pivot is:', 'rF', [
    miss('F/r', 'Torque increases with lever arm, so the lever arm should multiply.', 'Use tau = rF sin(theta) with theta = 90.'),
    miss('mv', 'That is momentum.', 'Torque uses force and lever arm.'),
    miss('r/F', 'The force should multiply.', 'Units are N m.'),
  ]),
  q(4300212, 'Rotation', 'Angular momentum conservation', 'A figure skater pulling her arms in spins faster because:', 'Angular momentum L = I omega is conserved while I decreases', [
    miss('Energy is conserved and her mass increased', 'Mass does not change; arm position changes I.', 'Use L conservation.'),
    miss('External torque from her arms speeds her up', 'No external torque is being applied; arms exert internal forces.', 'Internal vs external.'),
    miss('Gravity provides a tangential push', 'Gravity acts through the center; no torque about the rotation axis.', 'Look at torque source.'),
  ]),
  q(4300213, 'Rotation', 'Rolling without slipping', 'A ball rolling without slipping has velocity of its center v and angular velocity omega related by:', 'v = R omega (R is the ball\'s radius)', [
    miss('v = omega / R', 'That inverts the radius factor.', 'Linear velocity scales with radius.'),
    miss('v = R / omega', 'Same dimensional error.', 'Use v = R omega.'),
    miss('No simple relationship exists', 'Pure rolling gives a clean constraint.', 'Pure rolling = no slip.'),
  ]),
  q(4300214, 'Rotation', 'Net torque condition', 'For rotational equilibrium of a rigid body, what must be true?', 'Net torque about every axis equals zero', [
    miss('Net force equals zero only', 'Translational equilibrium is necessary but not sufficient for rotation.', 'Add the torque condition.'),
    miss('Angular velocity equals zero', 'A body can be in rotational equilibrium while spinning at constant rate.', 'Equilibrium is about no acceleration.'),
    miss('Moment of inertia equals zero', 'I is a property of the body, not zero in equilibrium.', 'Use torque sum.'),
  ]),
  q(4300215, 'Rotation', 'Solid sphere vs hoop', 'A solid sphere and a hoop of the same mass and radius roll down the same incline. Which reaches the bottom first?', 'The solid sphere, because it has a smaller moment of inertia coefficient (2/5 vs 1)', [
    miss('The hoop, because it has a smaller I', 'The hoop has the larger I/MR^2 ratio.', 'Compare I to MR^2.'),
    miss('Both reach at the same time', 'Different I means different translational acceleration.', 'Use energy conservation with rolling.'),
    miss('Neither moves because of friction', 'Static friction enables rolling but does not prevent motion down the incline.', 'Friction is the rolling agent.'),
  ]),
  q(4300216, 'Rotation', 'Newton second law for rotation', 'The rotational analog of F = ma is:', 'tau_net = I alpha', [
    miss('tau_net = m alpha', 'Mass alone does not replace I in rotation.', 'Use moment of inertia I.'),
    miss('omega = I alpha', 'Angular velocity is not the rotational force.', 'Torque is the rotational force.'),
    miss('F = I omega', 'That mixes translational and rotational variables incorrectly.', 'Use rotational analog directly.'),
  ]),

  // ---- Chapter 8: Exam Studio (new — FRQ-style) ----
  q(4300220, 'Exam Studio', 'Symbolic derivation', 'On an AP Physics free-response item asking for a symbolic answer in terms of m, g, and h, the best response is:', 'Algebraic expression with only those variables, e.g., sqrt(2gh)', [
    miss('A specific numerical answer like 4.5 m/s', 'A symbolic answer must remain in terms of the requested variables.', 'Do not substitute numbers.'),
    miss('A graphical sketch instead of an equation', 'A symbolic derivation requires algebra.', 'Use variables.'),
    miss('An estimate to two significant figures', 'Estimates are numerical, not symbolic.', 'Stay symbolic.'),
  ]),
  q(4300221, 'Exam Studio', 'Justify with physics', 'When an AP rubric asks to justify a conclusion "using physics principles," the response must reference:', 'A named law or principle (e.g., conservation of momentum) tied to the situation', [
    miss('A famous physicist by name only', 'Names without the underlying principle do not justify.', 'Cite the principle, not just the person.'),
    miss('An unrelated formula like p = mv with no link', 'The formula must tie to the situation.', 'Connect formula to scenario.'),
    miss('Intuition without further explanation', 'AP justifications must invoke specific principles.', 'Use named physics.'),
  ]),
  q(4300222, 'Exam Studio', 'Graph claim-evidence', 'A position-time graph shows a horizontal line at x = 5 m for 4 s, then a sloped line rising to x = 15 m at t = 6 s. The object\'s motion is best described as:', 'At rest for 4 s, then moving at 5 m/s for 2 s', [
    miss('Moving at constant 5 m/s throughout', 'The first segment shows no position change, so the object was at rest.', 'Read each segment separately.'),
    miss('Accelerating uniformly throughout', 'A straight line on a position-time graph means constant velocity, not acceleration.', 'Distinguish slope from curvature.'),
    miss('Accelerating in the first segment', 'No motion (horizontal line) means no acceleration during that segment.', 'Horizontal line = at rest.'),
  ]),
  q(4300223, 'Exam Studio', 'Units check', 'A student computes a force and gets 25 kg m/s. The most likely error is:', 'They computed momentum, not force', [
    miss('They forgot a factor of 9.8', 'Adding 9.8 would not change the units kg m/s.', 'Check the unit equation.'),
    miss('They computed power, not force', 'Power is J/s = kg m^2/s^3, different from kg m/s.', 'Match units to quantity.'),
    miss('The answer is correct as a force', 'Force has units of kg m/s^2, not kg m/s.', 'Dimensional analysis.'),
  ]),
  q(4300224, 'Exam Studio', 'Tension in a pulley', 'Two blocks of equal mass m hang from opposite sides of a frictionless pulley over a fixed axle. The tension in the rope is:', 'mg', [
    miss('2mg', 'The rope supports each block, but the tension at any point is mg, not the sum.', 'Tension is the force pulling on one side.'),
    miss('Zero, because the system is balanced', 'Balanced does not mean tensionless; gravity still acts.', 'Use Newton\'s second law on one block.'),
    miss('mg/2', 'You may be dividing the weight between two blocks, but each block requires full mg tension to hang.', 'Tension supports one block.'),
  ]),
  q(4300225, 'Exam Studio', 'Power efficiency', 'A motor consumes 200 W of electrical power and delivers 150 W of mechanical power. Its efficiency is:', '75%', [
    miss('33%', 'You used input over output instead of output over input.', 'Efficiency = useful out / total in.'),
    miss('50 W', 'Efficiency is a ratio (or percent), not a power.', 'Ratio without units.'),
    miss('100%', 'Real motors lose some energy to heat and friction.', 'Use the ratio.'),
  ]),
  q(4300226, 'Exam Studio', 'Reading a graph slope', 'On a force-displacement (F vs x) graph for a spring, the slope of the line equals:', 'The spring constant k', [
    miss('The work done by the spring', 'Work is the area under the curve, not the slope.', 'Slope vs area.'),
    miss('The kinetic energy of the mass', 'KE depends on motion, not the F vs x slope.', 'Different variable.'),
    miss('The mass of the attached object', 'Mass is not read directly from this graph.', 'Use F = kx to identify slope.'),
  ]),
])

export const apPhysicsWorkoutGeneratedQuestions = runPolish(_baseApPhysicsWorkoutGeneratedQuestions, [
  {
    subTopics: AP_WORKOUT_SCIENCE_SUB_TOPICS,
    mentorHints: AP_WORKOUT_SCIENCE_MENTOR_HINTS,
    correctShortened: AP_WORKOUT_SCIENCE_CORRECT_SHORTENED,
    source: 'apWorkoutScience',
  },
])

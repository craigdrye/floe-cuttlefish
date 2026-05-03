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
    'Coverage source: Numbas mechanics clusters plus reviewed physics rows. This is an authored Floe-native drill item, not a direct raw import.',
  source: 'Generated from Numbas/AP Physics coverage',
})

export const apPhysicsWorkoutGeneratedQuestions = makeQuestionBank('AP', [
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
    miss('kg m/s', 'That is momentum unit.', 'Force is mass times acceleration.'),
    miss('J/s', 'That is watt, a power unit.', 'Use F = ma.'),
    miss('C/V', 'That is farad, capacitance.', 'Newton is mechanical force.'),
  ]),
])

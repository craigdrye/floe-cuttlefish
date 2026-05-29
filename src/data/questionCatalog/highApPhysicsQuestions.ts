import { makeQuestionBank } from './base'
import type { Question } from './types'

export const highApPhysicsQuestions: Question[] = makeQuestionBank('AP', [
  // -----------------------------------------------------------------------
  // Kinematics (1D + 2D, projectiles)
  // -----------------------------------------------------------------------
  {
    id: 4400200,
    chapter: 'Kinematics',
    title: 'Velocity vs speed',
    prompt: 'A runner completes one full lap around a 400 m circular track in 80 s. Which statement best describes the runner over that interval?',
    correct: 'Average speed is 5 m/s and average velocity is zero because displacement is zero',
    wrong: [
      ['Average speed and average velocity are both 5 m/s', 'Average velocity uses displacement, and after one lap displacement is zero even though distance traveled is 400 m.', 'Velocity is displacement over time, not distance over time.'],
      ['Average velocity is 5 m/s and average speed is zero', 'Speed cannot be zero if the runner is moving; only velocity can vanish when displacement is zero.', 'Distinguish the scalar from the vector.'],
      ['Both average speed and average velocity are zero', 'Average speed = total distance / time = 400 / 80 = 5 m/s, which is not zero.', 'Speed is always non-negative when motion occurs.'],
    ],
    lesson: 'Speed is a scalar built from distance; velocity is a vector built from displacement. Closed loops drive average velocity to zero while leaving average speed positive.',
  },
  {
    id: 4400201,
    chapter: 'Kinematics',
    title: 'Projectile range vs height',
    prompt: 'A ball is launched at 20 m/s at 30 degrees above the horizontal. Using g = 10 m/s^2 and ignoring air resistance, how long is the ball in the air before returning to launch height?',
    correct: '2.0 s',
    wrong: [
      ['1.0 s', 'This uses only the rise time (v sin theta / g), not the full up-and-down flight time (2 v sin theta / g).', 'The ball rises and falls back; double the rise time.'],
      ['3.5 s', 'This treats the full 20 m/s as vertical instead of multiplying by sin 30 = 0.5.', 'Decompose the launch velocity first.'],
      ['4.0 s', 'This uses cos 30 instead of sin 30 for the vertical component.', 'Vertical motion uses the sine of the launch angle.'],
    ],
    lesson: 'For symmetric projectile motion, time of flight is 2 v sin(theta) / g. With v = 20 m/s and theta = 30 deg, vertical component is 10 m/s and flight time is 2.0 s.',
  },
  {
    id: 4400202,
    chapter: 'Kinematics',
    title: 'Velocity-time graph slope',
    prompt: 'A velocity-vs-time graph shows a straight line sloping downward from +6 m/s at t = 0 to -2 m/s at t = 4 s. What is the acceleration of the object?',
    correct: '-2 m/s^2 (constant)',
    wrong: [
      ['-1 m/s^2', 'The slope is delta v / delta t = (-2 - 6) / 4 = -2 m/s^2, not -1.', 'Use the change in velocity, not just the final value.'],
      ['+2 m/s^2', 'The velocity is decreasing, so the slope (acceleration) is negative.', 'Sign comes from the direction of slope.'],
      ['Zero, because the object reverses direction', 'Reversal of direction means velocity passes through zero; the acceleration that causes it is nonzero and constant.', 'Constant slope means constant acceleration.'],
    ],
    lesson: 'On a v-t graph, acceleration is the slope. The line passing through v = 0 does not imply a = 0; reversal of motion occurs precisely because acceleration is nonzero.',
  },
  {
    id: 4400203,
    chapter: 'Kinematics',
    title: 'Free-fall comparison',
    prompt: 'A coin and a feather are dropped simultaneously from the same height inside a sealed tube that has been evacuated of air. Which statement is correct?',
    correct: 'They hit the bottom at the same time because both accelerate at g',
    wrong: [
      ['The coin hits first because it is heavier', 'In a vacuum, gravitational acceleration is independent of mass; air drag is what normally makes the feather lag.', 'No air means no drag.'],
      ['The feather hits first because it has less inertia', 'Less inertia does not mean greater acceleration under gravity; a = g for all masses.', 'Newton 2 with gravity: F = mg gives a = g.'],
      ['Neither falls because there is no air to push them down', 'Gravity acts regardless of the presence of air; air is what resists, not what causes falling.', 'Gravity is the cause; air is a brake.'],
    ],
    lesson: 'In free fall, all objects accelerate at g regardless of mass. Galilean equivalence underpins both classical kinematics and the equivalence principle in general relativity.',
  },

  // -----------------------------------------------------------------------
  // Forces & Newton's Laws
  // -----------------------------------------------------------------------
  {
    id: 4400204,
    chapter: "Forces and Newton's Laws",
    title: 'Normal force on incline',
    prompt: 'A 10 kg block rests on a frictionless incline at 30 degrees above horizontal. Using g = 10 m/s^2, what is the magnitude of the normal force on the block?',
    correct: 'About 87 N (mg cos 30)',
    wrong: [
      ['100 N (equal to mg)', 'On an incline the normal force balances only the component of gravity perpendicular to the surface, mg cos theta, not the full weight.', 'Decompose gravity into parallel and perpendicular components.'],
      ['50 N (mg sin 30)', 'mg sin 30 is the component of gravity along the slope that accelerates the block, not the normal force.', 'Normal force is perpendicular to the surface.'],
      ['Zero, because the surface is frictionless', 'Friction is parallel to the surface; the absence of friction does not eliminate the perpendicular normal force.', 'Normal force exists whenever surfaces press together.'],
    ],
    lesson: 'On an incline of angle theta, normal force N = mg cos(theta), strictly less than mg. The component mg sin(theta) is parallel to the slope and produces acceleration when friction is absent.',
  },
  {
    id: 4400205,
    chapter: "Forces and Newton's Laws",
    title: 'Atwood machine',
    prompt: 'Two masses m1 = 3 kg and m2 = 5 kg hang from opposite ends of a massless string over a frictionless pulley. Using g = 10 m/s^2, what is the magnitude of the acceleration of the system?',
    correct: '2.5 m/s^2',
    wrong: [
      ['10 m/s^2', 'This is g, which would only be the acceleration if one mass were absent; the other mass pulls back through the string.', 'Both masses share one acceleration.'],
      ['1.25 m/s^2', 'Using (m2 - m1) g / (m1 + m2) gives 2 * 10 / 8 = 2.5, not 1.25; do not double the denominator.', 'Sum, not twice, the masses.'],
      ['5 m/s^2', 'This forgets to divide by the total inertia; the net force 20 N accelerates 8 kg, not just one block.', 'Newton 2 uses the system mass.'],
    ],
    lesson: 'For an Atwood machine, a = (m2 - m1) g / (m1 + m2). The net gravitational force on the difference accelerates the combined inertia.',
  },
  {
    id: 4400206,
    chapter: "Forces and Newton's Laws",
    title: 'Static vs kinetic friction',
    prompt: 'A crate sits on a level floor with coefficient of static friction 0.5 and coefficient of kinetic friction 0.3. A horizontal force is gradually increased until the crate just begins to slide. What happens at the moment sliding begins?',
    correct: 'The friction force drops from mu_s N to mu_k N and the crate accelerates',
    wrong: [
      ['Friction increases as the crate begins to move', 'Kinetic friction is generally less than peak static friction; the friction force decreases at the onset of sliding.', 'Static peak exceeds kinetic level.'],
      ['Friction stays the same magnitude throughout the motion', 'Static friction varies up to its maximum; once sliding begins, it transitions to a smaller kinetic value.', 'Two regimes, not one.'],
      ['Friction becomes zero once the crate is moving', 'Kinetic friction acts on any sliding surface; it is reduced, not eliminated.', 'Moving surfaces still resist.'],
    ],
    lesson: 'Static friction can adjust up to mu_s N. Once slipping begins, kinetic friction (mu_k N, typically smaller) acts, often producing a sudden net force and acceleration.',
  },

  // -----------------------------------------------------------------------
  // Energy & Work
  // -----------------------------------------------------------------------
  {
    id: 4400207,
    chapter: 'Energy and Work',
    title: 'Work-energy theorem',
    prompt: 'A 2 kg cart, initially at rest, is pushed across a frictionless surface by a constant 6 N horizontal force for 3 m. What is its final kinetic energy?',
    correct: '18 J',
    wrong: [
      ['12 J', 'This uses F times time (impulse-like reasoning) rather than F times distance (work).', 'Work depends on displacement, not time.'],
      ['6 J', 'This is just the force value; work requires multiplying by displacement.', 'KE = work done by net force.'],
      ['36 J', 'This doubles the work, perhaps by including a return trip not specified.', 'Single 3 m push, single application of W = Fd.'],
    ],
    lesson: 'The work-energy theorem states W_net = Delta KE. Constant force F over displacement d delivers work Fd, which equals the change in kinetic energy when no other forces do work.',
  },
  {
    id: 4400208,
    chapter: 'Energy and Work',
    title: 'Energy conservation with friction',
    prompt: 'A 1 kg block slides down a frictionless ramp of height 5 m and then encounters a horizontal rough patch where it eventually stops. The block lost 30 J of mechanical energy to friction on the rough patch. Using g = 10 m/s^2, with what kinetic energy did it enter the rough patch, and how much mechanical energy is left when it stops?',
    correct: '50 J entering the patch; 0 J at the end because friction dissipated 50 J in total over the full stop',
    wrong: [
      ['50 J entering the patch; 20 J at the end', 'The block stops, so its final kinetic energy is zero; "20 J left" contradicts "eventually stops."', 'Stopping means KE = 0.'],
      ['30 J entering the patch; 0 J at the end', 'Entering KE equals mgh = 1 * 10 * 5 = 50 J, not 30 J; 30 J was only a partial loss midway.', 'Use the full ramp height first.'],
      ['50 J entering the patch; -50 J at the end', 'Kinetic energy cannot be negative; the missing energy becomes heat, not negative KE.', 'Energy leaves the mechanical account.'],
    ],
    lesson: 'Mechanical energy is conserved only without nonconservative forces. With friction, KE + PE decreases by the work done against friction; the lost energy becomes thermal.',
  },
  {
    id: 4400209,
    chapter: 'Energy and Work',
    title: 'Spring potential energy',
    prompt: 'A spring with force constant k = 200 N/m is compressed 0.1 m from its natural length and used to launch a 0.5 kg block on a frictionless surface. What is the maximum speed of the block?',
    correct: '2 m/s',
    wrong: [
      ['4 m/s', 'This uses (1/2)kx without the square root, or forgets the factor of 1/2.', 'PE_spring = (1/2) k x^2, then set equal to (1/2) m v^2.'],
      ['1 m/s', 'This drops a factor of 2 from k or m; recompute (1/2)(200)(0.01) = 1 J, then v = sqrt(2 * 1 / 0.5) = 2.', 'Carry units carefully.'],
      ['10 m/s', 'This treats the spring force times displacement as kx (not (1/2)kx^2) for energy.', 'Spring work is the area under F vs x, a triangle.'],
    ],
    lesson: 'Spring potential energy is (1/2) k x^2. Setting it equal to (1/2) m v^2 gives v = x sqrt(k/m), here 0.1 * sqrt(400) = 2 m/s.',
  },

  // -----------------------------------------------------------------------
  // Momentum & Collisions
  // -----------------------------------------------------------------------
  {
    id: 4400210,
    chapter: 'Momentum and Collisions',
    title: 'Elastic collision equal masses',
    prompt: 'A 2 kg cart moving at 4 m/s collides head-on with an identical 2 kg cart at rest on a frictionless track. The collision is perfectly elastic. What are the velocities of the carts after the collision?',
    correct: 'Incoming cart stops; struck cart moves off at 4 m/s',
    wrong: [
      ['Both carts move forward at 2 m/s', 'That is a perfectly inelastic collision (they stick), not an elastic one; momentum is conserved but KE is not.', 'Elastic collisions conserve KE as well as momentum.'],
      ['Incoming cart rebounds at 4 m/s; struck cart stays put', 'Rebounding while the other stays would violate momentum conservation; total momentum would reverse.', 'Equal masses with elastic collision swap velocities.'],
      ['Both carts come to rest', 'That would conserve neither momentum (8 kg m/s lost) nor energy.', 'Energy and momentum cannot both vanish.'],
    ],
    lesson: 'In a 1D elastic collision between equal masses, the moving object stops and the stationary one takes its velocity. This "velocity exchange" follows from simultaneous conservation of momentum and kinetic energy.',
  },
  {
    id: 4400211,
    chapter: 'Momentum and Collisions',
    title: 'Impulse and contact time',
    prompt: 'A 0.2 kg ball moving at 5 m/s strikes a wall and rebounds at 3 m/s in the opposite direction. The collision lasts 0.02 s. What is the average force the wall exerts on the ball?',
    correct: '80 N opposite to the original motion',
    wrong: [
      ['20 N opposite to the original motion', 'This uses delta v = 5 - 3 = 2 instead of 5 - (-3) = 8 m/s; the rebound flips the velocity sign.', 'Account for the reversal in direction.'],
      ['50 N in the original direction', 'The force on the ball points back from the wall, opposite to the ball\'s incoming motion.', 'Newton 3 and impulse direction.'],
      ['0.16 N opposite to the original motion', 'This divides momentum change by 0.02 incorrectly or by 1, missing the impulse formula F = delta p / delta t.', 'Average force is impulse over contact time.'],
    ],
    lesson: 'Impulse equals change in momentum. With a velocity reversal, delta v adds magnitudes: |delta v| = 5 + 3 = 8 m/s. Then F = m delta v / delta t = 0.2 * 8 / 0.02 = 80 N.',
  },
  {
    id: 4400212,
    chapter: 'Momentum and Collisions',
    title: 'Perfectly inelastic collision',
    prompt: 'A 1500 kg car moving east at 20 m/s collides with and sticks to a 1000 kg car at rest. What is the velocity of the joined wreck immediately after the collision?',
    correct: '12 m/s east',
    wrong: [
      ['20 m/s east', 'The struck car must accelerate from rest, slowing the system; conservation of momentum requires a smaller final speed.', 'Add masses, then divide momentum.'],
      ['8 m/s east', 'This uses the wrong mass ratio; final v = m1 v1 / (m1 + m2) = 1500 * 20 / 2500 = 12.', 'Be careful with which mass goes on top.'],
      ['0 m/s', 'Only equal and opposite momenta would yield rest, but the second car had zero momentum before the collision.', 'Initial total momentum is 30000 kg m/s east.'],
    ],
    lesson: 'In perfectly inelastic collisions, momentum is conserved but kinetic energy is not. The wreck speed is total momentum divided by total mass: 30000 / 2500 = 12 m/s.',
  },

  // -----------------------------------------------------------------------
  // Circular Motion & Gravitation
  // -----------------------------------------------------------------------
  {
    id: 4400213,
    chapter: 'Circular Motion and Gravitation',
    title: 'Centripetal direction',
    prompt: 'A car drives at constant speed around a flat circular track. Which statement about its acceleration is correct?',
    correct: 'The acceleration points toward the center of the circle and has magnitude v^2 / r',
    wrong: [
      ['The acceleration is zero because the speed is constant', 'Constant speed does not mean constant velocity; the direction changes, so velocity changes and acceleration is nonzero.', 'Velocity is a vector.'],
      ['The acceleration points in the direction of motion', 'Tangential acceleration would change the speed; here the speed is constant, so acceleration is purely radial.', 'Tangential vs radial.'],
      ['The acceleration points outward, away from the center', 'There is no real outward "centrifugal" force; the centripetal acceleration points inward, supplied by friction here.', 'Inertia feels outward but is not a force.'],
    ],
    lesson: 'Uniform circular motion has centripetal acceleration v^2/r directed toward the center, supplied by some real force (friction, tension, gravity). Centripetal is a description of direction, not a distinct force.',
  },
  {
    id: 4400214,
    chapter: 'Circular Motion and Gravitation',
    title: 'Orbital period and radius',
    prompt: 'Two satellites orbit Earth in circular orbits. Satellite B has four times the orbital radius of satellite A. By what factor is satellite B\'s orbital period greater than satellite A\'s?',
    correct: '8 times (T scales as r^(3/2))',
    wrong: [
      ['4 times', 'This treats T as proportional to r; Kepler 3 gives T^2 ~ r^3, so T ~ r^(3/2).', 'Use Kepler\'s third law.'],
      ['16 times', 'This squares the radius ratio; the right exponent on r is 3/2, giving 4^(3/2) = 8.', 'Period grows as r^(3/2), not r^2.'],
      ['2 times', 'This takes a square root of 4 alone; the correct power is 4^(3/2) = 8.', 'sqrt(r^3), not sqrt(r).'],
    ],
    lesson: 'Kepler\'s third law for circular orbits gives T^2 proportional to r^3, so T proportional to r^(3/2). A factor of 4 in radius gives a factor of 8 in period.',
  },
  {
    id: 4400215,
    chapter: 'Circular Motion and Gravitation',
    title: 'Banked curve free-body',
    prompt: 'A car rounds a banked turn at the design speed with no friction needed. Which force component provides the centripetal acceleration?',
    correct: 'The horizontal component of the normal force from the road',
    wrong: [
      ['The full normal force, directed toward the center', 'On a banked turn the normal force is perpendicular to the road surface, not horizontal; only its horizontal component is centripetal.', 'Decompose the normal force.'],
      ['Static friction, directed toward the center', 'At the design speed, friction is not required; banking alone provides the centripetal component.', 'Frictionless design speed is the special case.'],
      ['Gravity, directed toward the center of the circle', 'Gravity points straight down, not toward the center of the horizontal turn.', 'Direction matters; circle is horizontal.'],
    ],
    lesson: 'On a banked, frictionless curve at the design speed, N sin(theta) = m v^2 / r and N cos(theta) = m g. Banking lets the road push the car inward without relying on friction.',
  },

  // -----------------------------------------------------------------------
  // Simple Harmonic Motion
  // -----------------------------------------------------------------------
  {
    id: 4400216,
    chapter: 'Simple Harmonic Motion',
    title: 'Period of mass-spring',
    prompt: 'A mass on a spring is set oscillating with amplitude A and period T. If the amplitude is doubled to 2A but mass and spring constant remain unchanged, what happens to the period?',
    correct: 'The period stays the same',
    wrong: [
      ['The period doubles', 'For ideal SHM the period depends only on mass and spring constant: T = 2 pi sqrt(m/k), not on amplitude.', 'Check the SHM period formula.'],
      ['The period halves', 'Amplitude affects maximum speed and energy, but not the time to complete one cycle in ideal SHM.', 'Isochronism: same period regardless of amplitude.'],
      ['The period quadruples', 'Period scales with sqrt(m/k); amplitude enters only through energy and speed.', 'Amplitude does not appear in T.'],
    ],
    lesson: 'For ideal simple harmonic motion (linear restoring force), T = 2 pi sqrt(m/k) for a spring and 2 pi sqrt(L/g) for a small-angle pendulum. The period is independent of amplitude (isochronism).',
  },
  {
    id: 4400217,
    chapter: 'Simple Harmonic Motion',
    title: 'Pendulum on the Moon',
    prompt: 'A simple pendulum on Earth has period 2.0 s. If taken to the Moon where g is about 1/6 of Earth\'s, what is its period there?',
    correct: 'About 4.9 s (sqrt(6) times longer)',
    wrong: [
      ['About 0.82 s (1/sqrt(6) times)', 'Smaller g makes the restoring force smaller and the period longer, not shorter.', 'Weaker gravity, slower swing.'],
      ['About 12 s (six times longer)', 'Period scales with sqrt(L/g); the factor is sqrt(6), about 2.45, not 6.', 'Square root, not linear.'],
      ['Exactly 2.0 s, period is independent of g', 'Pendulum period depends on g, unlike a mass-spring system; only the spring case is g-independent.', 'Compare spring and pendulum formulas.'],
    ],
    lesson: 'A pendulum period is T = 2 pi sqrt(L/g). Reducing g by a factor of 6 multiplies T by sqrt(6), so 2.0 s becomes about 4.9 s.',
  },
  {
    id: 4400218,
    chapter: 'Simple Harmonic Motion',
    title: 'Energy of SHM',
    prompt: 'A block of mass 0.5 kg attached to a spring of force constant 200 N/m oscillates with amplitude 0.1 m on a frictionless surface. What is its maximum speed during the motion?',
    correct: '2 m/s',
    wrong: [
      ['1 m/s', 'This drops a factor of 2 somewhere; using (1/2)kA^2 = (1/2)mv^2 gives v = A sqrt(k/m) = 0.1 * 20 = 2.', 'Energy balance at extremes vs equilibrium.'],
      ['4 m/s', 'This doubles the correct value, perhaps by using kA^2 = mv^2 without the factors of 1/2.', 'The 1/2 factors cancel correctly.'],
      ['0.4 m/s', 'This uses v = A * k / m instead of v = A sqrt(k/m).', 'Take the square root of k/m, not the ratio.'],
    ],
    lesson: 'At equilibrium, all energy in SHM is kinetic: (1/2) k A^2 = (1/2) m v_max^2, so v_max = A sqrt(k/m). For A = 0.1, k = 200, m = 0.5, v_max = 2 m/s.',
  },

  // -----------------------------------------------------------------------
  // Torque & Rotation
  // -----------------------------------------------------------------------
  {
    id: 4400219,
    chapter: 'Torque and Rotation',
    title: 'Torque from off-axis force',
    prompt: 'A horizontal beam is hinged at one end. A 50 N force is applied at the other end, 2.0 m from the hinge, at 30 degrees above the beam. What is the magnitude of the torque about the hinge?',
    correct: '50 N m',
    wrong: [
      ['100 N m', 'This uses the full force times distance, omitting the sin 30 = 0.5 factor for the perpendicular component.', 'Use the component perpendicular to the lever arm.'],
      ['25 N m', 'This uses cos 30 instead of sin 30; the perpendicular force component is F sin(theta).', 'Check which trig function applies.'],
      ['200 N m', 'This doubles the lever arm or omits the sine factor; 50 * 2 * sin 30 = 50.', 'Decompose first, then multiply.'],
    ],
    lesson: 'Torque is tau = r F sin(theta), where theta is the angle between the lever arm and the force. Here 2.0 * 50 * sin 30 = 50 N m.',
  },
  {
    id: 4400220,
    chapter: 'Torque and Rotation',
    title: 'Angular momentum conservation',
    prompt: 'A spinning figure skater pulls her arms inward, reducing her moment of inertia to one-third of its original value. Assuming no external torque, what happens to her angular velocity and rotational kinetic energy?',
    correct: 'Angular velocity triples; rotational KE triples (work done by her muscles supplies the extra energy)',
    wrong: [
      ['Angular velocity triples; rotational KE stays the same', 'L = I omega is conserved, but KE = (1/2) I omega^2 = (1/2) L omega increases with omega.', 'KE scales with omega, not just L.'],
      ['Angular velocity is unchanged; KE drops to one-third', 'If I drops, omega must increase to keep L = I omega constant; omega cannot stay the same.', 'Conservation of angular momentum drives omega up.'],
      ['Angular velocity drops to one-third; KE drops to one-ninth', 'This is backwards; smaller I with the same L means larger omega, not smaller.', 'Inverse relation between I and omega.'],
    ],
    lesson: 'With no external torque, L = I omega is conserved. If I drops to I/3, omega triples. Rotational KE = L^2 / (2 I), which then triples; the skater\'s muscles do the extra work.',
  },
  {
    id: 4400221,
    chapter: 'Torque and Rotation',
    title: 'Rolling without slipping',
    prompt: 'A solid sphere and a hollow spherical shell of the same mass and radius roll without slipping down identical inclines from the same height. Which reaches the bottom first?',
    correct: 'The solid sphere, because it has a smaller moment of inertia and so converts more energy into translational KE',
    wrong: [
      ['The hollow shell, because it has more inertia to keep it rolling', 'More rotational inertia means more energy must go into rotation, leaving less for translation; the shell is slower, not faster.', 'Less rotational inertia means more translational KE.'],
      ['They tie, because they have the same mass and start from the same height', 'Mass cancels but the shape of the moment of inertia changes the split between rotational and translational energy.', 'Geometry matters via I.'],
      ['The hollow shell, because it accelerates faster on the surface', 'Acceleration down an incline rolling without slipping is g sin(theta) / (1 + I/(mR^2)), which is larger for smaller I.', 'Acceleration favors smaller I.'],
    ],
    lesson: 'For rolling without slipping, a = g sin(theta) / (1 + I/(mR^2)). The solid sphere (I = 2/5 m R^2) beats the hollow shell (I = 2/3 m R^2) on the same incline.',
  },

  // -----------------------------------------------------------------------
  // Fluids
  // -----------------------------------------------------------------------
  {
    id: 4400222,
    chapter: 'Fluids',
    title: 'Buoyant force basics',
    prompt: 'A solid cube of volume 0.01 m^3 is fully submerged in water (rho = 1000 kg/m^3). Using g = 10 m/s^2, what is the buoyant force on the cube?',
    correct: '100 N upward, equal to the weight of the displaced water',
    wrong: [
      ['100 N downward', 'Buoyant force points upward, opposing gravity; pressure is higher beneath the cube than above it.', 'Archimedes: upward.'],
      ['Depends on the cube\'s weight, not its volume', 'Archimedes\' principle uses the displaced fluid weight (volume times rho times g), independent of the cube\'s own weight.', 'Buoyancy cares about displaced fluid.'],
      ['10 N upward', 'This forgets a factor of 10 (g): rho V g = 1000 * 0.01 * 10 = 100 N.', 'Multiply rho, V, and g.'],
    ],
    lesson: 'Archimedes\' principle: the buoyant force equals the weight of the fluid displaced, F_b = rho_fluid V_displaced g. It is independent of the submerged object\'s density or weight.',
  },
  {
    id: 4400223,
    chapter: 'Fluids',
    title: 'Continuity equation',
    prompt: 'Water flows through a horizontal pipe whose cross-sectional area decreases from 4 cm^2 to 1 cm^2. If the speed in the wide section is 1 m/s, what is the speed in the narrow section?',
    correct: '4 m/s',
    wrong: [
      ['0.25 m/s', 'This inverts the relationship; smaller area means higher speed, not lower.', 'A v product is constant; smaller A demands larger v.'],
      ['1 m/s', 'Speed must change to keep volumetric flow rate constant when area changes.', 'A1 v1 = A2 v2 for incompressible flow.'],
      ['16 m/s', 'This squares the area ratio; continuity uses A1 v1 = A2 v2 linearly.', 'Area ratio, not its square.'],
    ],
    lesson: 'For incompressible flow, the continuity equation A1 v1 = A2 v2 holds. Cutting area by a factor of 4 multiplies speed by 4.',
  },
  {
    id: 4400224,
    chapter: 'Fluids',
    title: 'Bernoulli intuition',
    prompt: 'A horizontal pipe constricts from a wide section to a narrow section with no change in height. Compared to the wide section, the narrow section has:',
    correct: 'Higher flow speed and lower pressure',
    wrong: [
      ['Higher flow speed and higher pressure', 'Bernoulli\'s equation gives an inverse relation between speed and pressure at the same height; faster flow has lower pressure.', 'Energy conservation along a streamline.'],
      ['Lower flow speed and lower pressure', 'Continuity demands higher speed in the narrow section; lower speed there would violate mass conservation.', 'Narrow means faster, not slower.'],
      ['Lower flow speed and higher pressure', 'This reverses both relations; the narrow section is faster and at lower pressure.', 'Recheck continuity, then Bernoulli.'],
    ],
    lesson: 'Continuity gives higher speed in narrower sections; Bernoulli\'s equation then gives lower pressure where speed is higher (at constant height), explaining lift, Venturi effects, and aspirators.',
  },

  // -----------------------------------------------------------------------
  // Thermodynamics
  // -----------------------------------------------------------------------
  {
    id: 4400225,
    chapter: 'Thermodynamics',
    title: 'Ideal gas law application',
    prompt: 'A fixed amount of ideal gas in a sealed rigid container is heated so that its absolute temperature doubles. What happens to the pressure?',
    correct: 'It doubles',
    wrong: [
      ['It stays the same because the container is sealed', 'Sealed means n and V are fixed; PV = nRT then gives P proportional to T, not constant.', 'Apply PV = nRT with constant V and n.'],
      ['It halves', 'P is directly proportional to T at fixed V and n, not inversely proportional.', 'P and T move together in this setup.'],
      ['It quadruples', 'P proportional to T linearly, not quadratically.', 'Linear, not square.'],
    ],
    lesson: 'At constant volume and amount, the ideal gas law reduces to P proportional to T (in Kelvin). Doubling absolute temperature doubles pressure.',
  },
  {
    id: 4400226,
    chapter: 'Thermodynamics',
    title: 'PV diagram work',
    prompt: 'An ideal gas is taken through a process represented as a straight horizontal line on a PV diagram from V1 = 1 L to V2 = 3 L at pressure 200 kPa. How much work is done by the gas?',
    correct: '400 J of work done by the gas',
    wrong: [
      ['400 J of work done on the gas', 'Volume increases, so the gas expands and does positive work on the surroundings; the surroundings do negative work on the gas.', 'Expansion = gas does positive work.'],
      ['Zero, because pressure is constant', 'Zero work would require zero volume change; isobaric processes can still do plenty of work.', 'Work is area under PV curve.'],
      ['200 J', 'This forgets to multiply by the volume change in correct units; 200 kPa * 2e-3 m^3 = 400 J.', 'Convert liters to cubic meters.'],
    ],
    lesson: 'On a PV diagram, work done by the gas is the area under the curve. For isobaric expansion, W = P delta V. Expansion gives positive W (gas does work on surroundings); compression gives negative W.',
  },
  {
    id: 4400227,
    chapter: 'Thermodynamics',
    title: 'Second law misconception',
    prompt: 'Which statement best captures the second law of thermodynamics?',
    correct: 'The total entropy of an isolated system never decreases; heat does not spontaneously flow from cold to hot',
    wrong: [
      ['Energy is always conserved in any process', 'That is the first law of thermodynamics; the second law concerns directionality and entropy.', 'First law is conservation; second is direction.'],
      ['No process can convert any heat into work', 'Heat engines do convert some heat into work; the second law only forbids 100% conversion in a cyclic process.', 'Some conversion is allowed, just not all.'],
      ['Entropy of every subsystem must always increase', 'Local entropy can decrease (e.g. a refrigerator) as long as the total entropy of the isolated system rises.', 'Total, not local.'],
    ],
    lesson: 'The second law forbids spontaneous heat flow from cold to hot and limits heat-engine efficiency. Equivalently, the total entropy of an isolated system cannot decrease.',
  },

  // -----------------------------------------------------------------------
  // Waves & Sound
  // -----------------------------------------------------------------------
  {
    id: 4400228,
    chapter: 'Waves and Sound',
    title: 'Doppler effect direction',
    prompt: 'A police siren emits sound at a fixed frequency. As a stationary observer hears the siren approach, pass, and recede, how does the perceived frequency change?',
    correct: 'It is higher than emitted while approaching and lower than emitted while receding',
    wrong: [
      ['It is higher while approaching and higher while receding', 'Receding sources are blue-shifted in this view, but motion away always gives a longer wavelength and lower frequency.', 'Receding = lower frequency.'],
      ['It is the same throughout because the source frequency is fixed', 'Doppler shift depends on relative motion, not on whether the source frequency itself changes.', 'Relative motion shifts perception.'],
      ['It is lower while approaching and higher while receding', 'This reverses the Doppler effect; approach compresses wavefronts and raises frequency.', 'Compression up, expansion down.'],
    ],
    lesson: 'The Doppler effect raises perceived frequency for approaching sources and lowers it for receding sources. The classical formula is f\' = f (v +/- v_o) / (v -/+ v_s).',
  },
  {
    id: 4400229,
    chapter: 'Waves and Sound',
    title: 'Standing waves on a string',
    prompt: 'A string fixed at both ends has length 1.0 m and supports a fundamental frequency of 200 Hz. What is the frequency of the second harmonic, and what is the wavelength of the fundamental?',
    correct: '400 Hz; wavelength 2.0 m',
    wrong: [
      ['200 Hz; wavelength 1.0 m', 'The fundamental wavelength on a string fixed at both ends is 2L, not L; that gives 2.0 m here.', 'The string fits half a wavelength in the fundamental.'],
      ['400 Hz; wavelength 1.0 m', 'The second harmonic frequency is correct, but the fundamental wavelength is 2L = 2.0 m.', 'L = lambda / 2.'],
      ['100 Hz; wavelength 4.0 m', 'The second harmonic is twice the fundamental, not half; and L = lambda / 2.', 'Harmonics multiply, not divide.'],
    ],
    lesson: 'A string fixed at both ends has standing-wave wavelengths lambda_n = 2L/n and frequencies f_n = n f_1. The fundamental fits half a wavelength on the string.',
  },
  {
    id: 4400230,
    chapter: 'Waves and Sound',
    title: 'Two-source interference',
    prompt: 'Two coherent in-phase sources emit identical wavelengths lambda. At a point P, the path lengths from the two sources differ by 2.5 lambda. What kind of interference occurs at P?',
    correct: 'Fully destructive interference, because the path difference is a half-integer multiple of the wavelength',
    wrong: [
      ['Fully constructive interference, because 2.5 is greater than 2', 'Constructive interference requires the path difference to be an integer multiple of lambda; 2.5 lambda is half-integer.', 'Integer = constructive.'],
      ['No interference at all, because the path lengths are different', 'Interference requires path-length difference; equal lengths or unequal lengths both can interfere.', 'Difference is what matters.'],
      ['Partial interference, neither maximum nor minimum', 'For two equal-amplitude sources, half-integer-lambda differences give exact cancellation, not partial.', 'Half-integer is a strict minimum.'],
    ],
    lesson: 'For two coherent in-phase sources, constructive interference requires path difference equal to n lambda (integer n); destructive requires (n + 1/2) lambda.',
  },

  // -----------------------------------------------------------------------
  // Electrostatics
  // -----------------------------------------------------------------------
  {
    id: 4400231,
    chapter: 'Electrostatics',
    title: 'Coulomb scaling',
    prompt: 'Two point charges are separated by a distance r and exert a force F on each other. If the distance is tripled, by what factor does the force change?',
    correct: 'It becomes F/9',
    wrong: [
      ['It becomes F/3', 'Coulomb\'s law has an inverse-square distance dependence, not inverse-linear.', 'F proportional to 1/r^2.'],
      ['It becomes 3F', 'Larger separation reduces, not increases, the force between point charges.', 'Distance and force are inversely related.'],
      ['It becomes F/6', 'The denominator gets squared and tripled, so the factor is 9, not 6.', '3 squared, not 3 times 2.'],
    ],
    lesson: 'Coulomb\'s law gives F = k q1 q2 / r^2. Tripling the separation reduces force by a factor of 9, the hallmark inverse-square behavior.',
  },
  {
    id: 4400232,
    chapter: 'Electrostatics',
    title: 'Field from positive charge',
    prompt: 'A positive point charge sits at the origin. At a point on the positive x-axis, the electric field vector points:',
    correct: 'In the +x direction, away from the positive charge',
    wrong: [
      ['In the -x direction, toward the positive charge', 'Field lines point away from positive charges by convention (force on a positive test charge points away).', 'Field convention: away from +.'],
      ['In the +y direction, perpendicular to the displacement', 'The field from a point charge is radial, along the line connecting the charge and the point.', 'Radial fields, not transverse.'],
      ['It is zero on the axis of a point charge', 'Field is only zero at infinity for a single point charge; the axis has a nonzero radial field.', 'Field magnitude is k|q|/r^2, not 0.'],
    ],
    lesson: 'Electric field from a positive point charge points radially outward; from a negative charge, radially inward. The field at a location indicates the force per unit charge on a positive test charge.',
  },
  {
    id: 4400233,
    chapter: 'Electrostatics',
    title: 'Parallel-plate capacitance',
    prompt: 'A parallel-plate capacitor in vacuum has capacitance C. If a dielectric of dielectric constant kappa = 4 is inserted to fill the space between the plates while the geometry is unchanged, what is the new capacitance?',
    correct: '4C',
    wrong: [
      ['C/4', 'Dielectrics increase capacitance by a factor of kappa, not decrease it.', 'Dielectrics help store more charge.'],
      ['C, because geometry has not changed', 'Capacitance depends on geometry and dielectric constant; the dielectric raises it.', 'C = kappa epsilon_0 A / d.'],
      ['16C', 'kappa multiplies linearly, not as kappa^2.', 'Linear in kappa.'],
    ],
    lesson: 'For a parallel-plate capacitor, C = kappa epsilon_0 A / d. Inserting a dielectric of constant kappa multiplies capacitance by kappa, allowing more charge stored at a given voltage.',
  },

  // -----------------------------------------------------------------------
  // DC Circuits
  // -----------------------------------------------------------------------
  {
    id: 4400234,
    chapter: 'DC Circuits',
    title: 'Series and parallel resistors',
    prompt: 'Three identical resistors of resistance R are arranged: two are in parallel, and that combination is then in series with the third. What is the equivalent resistance?',
    correct: '1.5 R',
    wrong: [
      ['3R', 'This would be three resistors all in series, ignoring the parallel pair.', 'Parallel pair reduces resistance.'],
      ['R/3', 'This would be three resistors all in parallel, ignoring the series element.', 'Only two are in parallel.'],
      ['2R', 'This adds R to R instead of (R/2) to R; the parallel pair is R/2, not R.', 'Two equal Rs in parallel give R/2.'],
    ],
    lesson: 'Two equal resistors in parallel give R/2. Adding the third in series adds R, for a total of 1.5R.',
  },
  {
    id: 4400235,
    chapter: 'DC Circuits',
    title: 'Power dissipation',
    prompt: 'A 12 V battery drives a current of 2 A through a resistor. What power is dissipated in the resistor?',
    correct: '24 W',
    wrong: [
      ['6 W', 'This computes V/I = 6, which has units of ohms, not watts.', 'Power equals voltage times current.'],
      ['14 W', 'This adds V and I instead of multiplying.', 'Multiply, do not add.'],
      ['48 W', 'This doubles, perhaps applying P = 2 V I instead of V I.', 'No factor of 2 here.'],
    ],
    lesson: 'For a resistor, power dissipated is P = V I = I^2 R = V^2 / R. With V = 12 V and I = 2 A, P = 24 W.',
  },
  {
    id: 4400236,
    chapter: 'DC Circuits',
    title: 'Kirchhoff loop signs',
    prompt: 'When applying Kirchhoff\'s voltage law around a loop, you traverse a resistor in the same direction as the conventional current. What sign do you assign to the I R term?',
    correct: 'Negative, because you are moving from higher to lower potential across the resistor',
    wrong: [
      ['Positive, because current and traversal agree', 'A current in a resistor flows from high potential to low; following that direction means a drop, so a negative contribution in the loop equation.', 'Current goes downhill in resistors.'],
      ['Zero, because the resistor has no EMF', 'Resistors are not EMF sources, but they still contribute potential drops to the loop equation.', 'Loop sum includes both EMFs and IR.'],
      ['It depends on the magnitude of the resistance', 'Sign depends on direction of traversal relative to current, not on resistance value.', 'Direction, not value.'],
    ],
    lesson: 'In KVL, traversing a resistor with the current direction yields -IR (potential drop). Traversing against the current direction yields +IR. EMFs flip sign based on the direction of traversal through the cell.',
  },

  // -----------------------------------------------------------------------
  // Magnetism
  // -----------------------------------------------------------------------
  {
    id: 4400237,
    chapter: 'Magnetism',
    title: 'Force on a current-carrying wire',
    prompt: 'A straight wire of length 0.5 m carries a current of 4 A through a uniform magnetic field of 0.2 T directed perpendicular to the wire. What is the magnitude of the magnetic force on the wire?',
    correct: '0.4 N',
    wrong: [
      ['0.04 N', 'This drops a factor of 10; F = I L B = 4 * 0.5 * 0.2 = 0.4 N.', 'Multiply all three quantities.'],
      ['2.0 N', 'This uses L = 2.5 m or similar; check the 0.5 m length.', 'L is half a meter here.'],
      ['Zero, because the wire is straight', 'A straight current-carrying wire in a perpendicular B field feels a force; only parallel orientation gives zero.', 'Perpendicular orientation maximizes F.'],
    ],
    lesson: 'For a straight wire in a uniform field, F = I L B sin(theta). When B is perpendicular to the current (theta = 90), F = I L B; here 4 * 0.5 * 0.2 = 0.4 N.',
  },
  {
    id: 4400238,
    chapter: 'Magnetism',
    title: 'Right-hand rule',
    prompt: 'A positive charge moves in the +x direction through a magnetic field pointing in the +y direction. In what direction is the magnetic force on the charge?',
    correct: '+z direction',
    wrong: [
      ['-z direction', 'For a positive charge with v in +x and B in +y, the right-hand rule (v cross B) gives +z, not -z.', 'Use the right hand for positive charges.'],
      ['+x direction, along the motion', 'Magnetic force is always perpendicular to the velocity; it cannot be along the motion.', 'No work done; perpendicular force.'],
      ['+y direction, along the field', 'Magnetic force is also perpendicular to B; it lies in neither v nor B alone.', 'Cross product is perpendicular to both inputs.'],
    ],
    lesson: 'The magnetic force on a moving charge is F = q v cross B, perpendicular to both v and B. Right-hand rule for positive charges (left-hand for negative) gives the direction.',
  },
  {
    id: 4400239,
    chapter: 'Magnetism',
    title: 'Lenz\'s law',
    prompt: 'A bar magnet with its north pole pointing downward is dropped through a horizontal conducting loop. As the magnet approaches the loop from above, the induced current in the loop flows:',
    correct: 'In a direction that creates an upward magnetic field inside the loop, opposing the approaching magnet',
    wrong: [
      ['In a direction that creates a downward magnetic field inside the loop, helping the magnet through', 'Lenz\'s law requires the induced current to oppose the change in flux, not assist it.', 'Induction opposes change.'],
      ['In whichever direction was last established in the loop', 'Loops do not have memory; induced current responds to current flux change.', 'Flux change, not history.'],
      ['No current is induced because gravity, not magnetism, drives the motion', 'Motion of the magnet changes the flux through the loop, which induces an EMF regardless of why the magnet moves.', 'Cause of motion does not matter; flux change does.'],
    ],
    lesson: 'Lenz\'s law: induced currents oppose the change in flux that produced them. A north pole approaching from above induces a current that makes the loop\'s top face north-like, repelling the magnet.',
  },
  {
    id: 4400240,
    chapter: 'Magnetism',
    title: 'Faraday induced EMF',
    prompt: 'A coil of 100 turns experiences a uniform magnetic flux through each turn that changes from 0.02 Wb to 0.05 Wb over 0.1 s. What is the magnitude of the average induced EMF?',
    correct: '30 V',
    wrong: [
      ['3 V', 'This omits the factor of N = 100 turns in the EMF formula.', 'Multiply by number of turns.'],
      ['300 V', 'This adds an extra factor of 10; check delta Phi / delta t carefully.', 'Recompute step by step.'],
      ['0.3 V', 'This forgets factors of N and of 1/delta t; |EMF| = N |delta Phi| / delta t = 100 * 0.03 / 0.1 = 30 V.', 'Plug in all factors.'],
    ],
    lesson: 'Faraday\'s law gives |EMF| = N |d Phi / d t|. For 100 turns, flux change 0.03 Wb, time 0.1 s: 100 * 0.03 / 0.1 = 30 V.',
  },

  // -----------------------------------------------------------------------
  // Geometric & Physical Optics
  // -----------------------------------------------------------------------
  {
    id: 4400241,
    chapter: 'Geometric and Physical Optics',
    title: 'Thin lens equation',
    prompt: 'An object is placed 30 cm in front of a converging lens of focal length 10 cm. Where is the image, and what type is it?',
    correct: '15 cm on the opposite side; real and inverted',
    wrong: [
      ['15 cm on the same side; virtual and upright', 'Object outside f for a converging lens produces a real image on the opposite side, not a virtual image on the same side.', 'Beyond f, image is real.'],
      ['30 cm on the opposite side; real and inverted', 'Using 1/30 + 1/d_i = 1/10 gives d_i = 15, not 30; recheck the arithmetic.', 'Solve the thin lens equation.'],
      ['10 cm on the opposite side; real and upright', 'Real images from a single converging lens are inverted, not upright; only virtual images can be upright.', 'Real = inverted.'],
    ],
    lesson: 'Thin lens equation 1/d_o + 1/d_i = 1/f. With d_o = 30 cm and f = 10 cm, d_i = 15 cm; positive d_i for a converging lens means a real, inverted image on the far side.',
  },
  {
    id: 4400242,
    chapter: 'Geometric and Physical Optics',
    title: 'Diverging lens sign',
    prompt: 'In the AP sign convention for thin lenses, what is the sign of the focal length f for a diverging lens, and what kind of image does it form of a real object?',
    correct: 'f is negative; the image is virtual, upright, and reduced',
    wrong: [
      ['f is positive; image is real and inverted', 'Diverging lenses have negative focal length by convention and never form real images of real objects.', 'Only converging lenses focus rays to a real image.'],
      ['f is positive; image is virtual and reduced', 'A diverging lens does form virtual reduced images, but f is negative, not positive, by convention.', 'Sign convention: diverging = negative.'],
      ['f is negative; image is real and inverted', 'A real object with a diverging lens never produces a real image; the image is virtual on the same side as the object.', 'No real image possible.'],
    ],
    lesson: 'Sign convention: converging lenses have positive f; diverging lenses have negative f. A real object before a diverging lens always yields a virtual, upright, reduced image.',
  },
  {
    id: 4400243,
    chapter: 'Geometric and Physical Optics',
    title: 'Double-slit fringe spacing',
    prompt: 'In a double-slit experiment, the slit separation is doubled while the wavelength and screen distance stay fixed. What happens to the spacing between adjacent bright fringes on the screen?',
    correct: 'It is halved',
    wrong: [
      ['It is doubled', 'Fringe spacing y is L lambda / d, inversely proportional to slit separation d; doubling d halves y.', 'Inverse, not direct.'],
      ['It is unchanged', 'Slit separation directly controls fringe spacing through y = L lambda / d.', 'Spacing depends on d.'],
      ['It is quartered', 'Fringe spacing is inversely proportional to d, not to d squared.', 'Linear inverse, not square.'],
    ],
    lesson: 'For a double slit, fringe spacing y = L lambda / d. Doubling d halves y; doubling lambda or L doubles y.',
  },
  {
    id: 4400244,
    chapter: 'Geometric and Physical Optics',
    title: 'Thin-film interference',
    prompt: 'A thin soap film in air appears bright at a particular thickness. What is the smallest film thickness that gives a bright reflection for light of wavelength lambda inside the film?',
    correct: 'lambda / 4, because one reflection at the top surface produces a half-wavelength phase shift',
    wrong: [
      ['lambda / 2, because two passes through the film add to a full wavelength', 'A pi phase shift at the top air-to-film boundary means a quarter-wavelength gives a path-shift that constructively interferes.', 'Account for the phase flip on reflection.'],
      ['lambda, because the round trip must equal one wavelength', 'The phase flip changes the bright-condition formula from 2t = m lambda to 2t = (m + 1/2) lambda.', 'Half-wavelength shift modifies the count.'],
      ['Zero, because any path difference works in a thin film', 'Zero thickness produces a path difference of zero, but the phase flip then makes it appear dark, not bright.', 'Phase flip rules the limit.'],
    ],
    lesson: 'For a soap film in air, the top reflection flips phase and the bottom does not. Bright reflection requires 2 n t = (m + 1/2) lambda_vacuum, so the smallest bright thickness is lambda / 4 in the film.',
  },

  // -----------------------------------------------------------------------
  // Modern Physics
  // -----------------------------------------------------------------------
  {
    id: 4400245,
    chapter: 'Modern Physics',
    title: 'Photoelectric threshold',
    prompt: 'Light of frequency f shines on a metal with work function phi. Which statement about the maximum kinetic energy KE of emitted electrons is correct?',
    correct: 'KE = h f - phi, only if h f exceeds phi; otherwise no emission',
    wrong: [
      ['KE = h f, regardless of work function', 'The work function phi is the minimum energy to release an electron; it must be subtracted from h f.', 'Subtract phi.'],
      ['KE depends only on light intensity, not frequency', 'Intensity controls how many photoelectrons emerge, not their maximum kinetic energy; that is the key insight Einstein won the Nobel for.', 'Frequency sets KE; intensity sets rate.'],
      ['KE = phi - h f', 'This swaps signs; KE is positive when h f exceeds phi, not the other way around.', 'Watch the order.'],
    ],
    lesson: 'The photoelectric effect equation is KE_max = h f - phi, valid only when h f >= phi. Below threshold, no electrons are emitted regardless of intensity.',
  },
  {
    id: 4400246,
    chapter: 'Modern Physics',
    title: 'de Broglie wavelength',
    prompt: 'A particle has momentum p. What is its de Broglie wavelength?',
    correct: 'lambda = h / p',
    wrong: [
      ['lambda = h p', 'Wavelength is inversely proportional to momentum, not directly proportional.', 'Inverse relation; h on top, p on bottom.'],
      ['lambda = p / h', 'The constants and momentum are in the wrong positions; h / p has units of length.', 'Check units; h has Joule-seconds.'],
      ['lambda = h f, where f is frequency', 'That is photon energy (E = h f), not the de Broglie wavelength relation.', 'Wavelength, not energy.'],
    ],
    lesson: 'de Broglie matter waves: lambda = h / p. Wave behavior of electrons (diffraction) confirms this relation and underpins quantum mechanics.',
  },
  {
    id: 4400247,
    chapter: 'Modern Physics',
    title: 'Bohr energy levels',
    prompt: 'A hydrogen atom emits a photon when an electron transitions from n = 3 to n = 2. The photon\'s energy equals:',
    correct: 'The difference between the energy levels, E_3 - E_2 (a positive amount of energy carried away)',
    wrong: [
      ['The sum of the energy levels, E_3 + E_2', 'Energy conservation requires the photon to carry the difference, not the sum.', 'Conservation: lost = gained.'],
      ['The energy of level n = 2 alone', 'The photon energy reflects the gap between levels, not the energy of either single level.', 'Look at the gap.'],
      ['Zero, because the electron stays bound to the atom', 'A transition between bound states still releases a photon; otherwise atomic spectra would not exist.', 'Bound states have well-defined gaps.'],
    ],
    lesson: 'In atomic transitions, photon energy equals the magnitude of the energy difference: h f = |E_i - E_f|. Hydrogen\'s Balmer line at n = 3 to n = 2 corresponds to about 656 nm.',
  },
  {
    id: 4400248,
    chapter: 'Modern Physics',
    title: 'Intensity vs frequency in photoelectric effect',
    prompt: 'Increasing the intensity of monochromatic light above the photoelectric threshold for a metal does which of the following?',
    correct: 'Increases the rate of electrons emitted without changing their maximum kinetic energy',
    wrong: [
      ['Increases the maximum kinetic energy of each electron', 'Maximum KE depends only on frequency and work function, not intensity.', 'Frequency controls KE; intensity controls count.'],
      ['Decreases the work function of the metal', 'Work function is a property of the metal, set by its electronic structure; intensity does not alter it.', 'Material property.'],
      ['Raises the threshold frequency', 'Threshold frequency is also a property of the metal alone; intensity cannot shift it.', 'Threshold is fixed by phi.'],
    ],
    lesson: 'Above threshold, more intense light delivers more photons per second, producing more photoelectrons per second. Maximum KE per electron depends only on photon frequency (and phi), not on intensity.',
  },
  {
    id: 4400249,
    chapter: 'Modern Physics',
    title: 'Photon momentum',
    prompt: 'A photon of wavelength lambda carries momentum equal to:',
    correct: 'h / lambda',
    wrong: [
      ['Zero, because photons are massless', 'Photons have no rest mass but still carry momentum, observed in radiation pressure and Compton scattering.', 'Massless does not mean momentum-less.'],
      ['m c, using a small effective mass m', 'Photons do not have a rest mass; the correct expression bypasses mass entirely.', 'Use p = h / lambda directly.'],
      ['lambda / h', 'Units are wrong; momentum is inversely proportional to wavelength, not directly.', 'Same form as de Broglie\'s relation.'],
    ],
    lesson: 'Photons carry momentum p = h / lambda = E / c. Compton scattering and radiation pressure (e.g. solar sails) confirm this; massless does not imply momentumless.',
  },
])

# General Physics I (Mechanics)
**ID**: `genPhys1` · **Discipline**: Science · **Stage**: University Freshman (ages 18-19)
**Aligns with**: typical first-semester university mechanics; algebra-based or calculus-based versions; AP Physics C: Mechanics extension

## Course Aim
General Physics I builds the mechanical worldview: the small set of laws — Newton's three, conservation of energy, conservation of momentum, conservation of angular momentum — from which almost all everyday motion can be predicted. The goal is not to memorize fifty equations but to recognize which of a handful of principles governs a situation, set it up correctly, and trust the result. A student who finishes this course should be able to look at a braking car, a swinging pendulum, a spinning skater, or a floating ship and say, before touching a calculator, which conserved quantity or equation of motion applies and roughly what the answer should be.

The course treats problem solving as a disciplined chain of choices rather than a search for the right formula. Every problem starts the same way: sketch the system, choose a coordinate frame, draw the forces or identify the conserved quantity, write the governing relation, solve symbolically, then substitute numbers and check units and limiting cases. This habit — reasoning before substitution — is what separates students who can solve problems they have seen from students who can solve problems they have never seen. We deliberately reward correct setup and sound assumptions as heavily as correct final numbers, because in real physics the setup is where the thinking lives.

The two common course flavors share one conceptual map. Calculus-based sections (often paralleling AP Physics C: Mechanics) treat velocity and acceleration as derivatives, work as a line integral of force, and use vector dot and cross products fluently. Algebra-based sections (often paralleling AP Physics 1 or College Physics) cover the same phenomena using constant-acceleration equations, graphical slope-and-area reasoning, and component methods. Both reach the same destination — fluent conservation-law reasoning and a working laboratory practice — and this syllabus serves both.

## Course Design Notes
Route questions here when they involve units and dimensional analysis, vectors, kinematics in one or two dimensions, free-body diagrams, Newton's laws, friction and drag, circular motion, work and energy, power, momentum and impulse, collisions, center of mass, rotation and torque, moment of inertia, angular momentum, static equilibrium, gravitation and orbits, simple harmonic motion, fluids, measurement and uncertainty, or first-year mechanics labs. Send thermodynamics, waves and sound, electricity and magnetism, and optics to General Physics II; send pure differential-equation manipulation or multivariable vector calculus to the mathematics tracks even when the example is physical.

The intended difficulty is genuine freshman university level: numerical answers should require choosing a principle and combining two or three steps, not a one-line plug-in, and conceptual answers should hinge on a distinction students routinely get wrong (mass versus weight, average versus instantaneous, force versus impulse, energy versus momentum, real force versus centripetal requirement). Use g = 9.8 m/s^2 unless a problem states otherwise. Favor SI units, but include at least occasional unit-conversion and order-of-magnitude estimation so students keep their physical intuition calibrated.

## Chapter 1: Measurement, Units, and Vectors
**Core questions**: How do we know an equation is even possible before we solve it? When is a quantity a scalar and when is it a vector, and how do we add vectors that point in different directions?
**Key concepts**: SI base units; dimensional analysis and dimensional homogeneity; significant figures and order-of-magnitude (Fermi) estimation; scalars vs. vectors; vector components and unit vectors; vector addition and subtraction; magnitude and direction; the dot product (and its link to work) and the cross product (and its link to torque).
**Applied skills**: Check any equation for dimensional consistency before trusting it; resolve a vector into perpendicular components and recombine them; compute A·B and the magnitude of A×B; estimate a real-world quantity to within an order of magnitude with stated assumptions.
**Common traps**: Treating displacement (a vector) as if it equaled path length; adding vector magnitudes arithmetically instead of by components; assuming a dimensionally correct equation is therefore physically correct (dimensional analysis can catch wrong equations but cannot confirm dimensionless factors); confusing the dot product's scalar result with the cross product's vector result.

## Chapter 2: Kinematics in One Dimension
**Core questions**: What is the difference between velocity and acceleration, and between their average and instantaneous values? How do position, velocity, and acceleration graphs encode one another?
**Key concepts**: Position, displacement, distance; average vs. instantaneous velocity and acceleration; the constant-acceleration (kinematic) equations; free fall and the role of g; reading slope (derivative) and area (integral) on motion graphs.
**Applied skills**: Solve braking, launch, and free-fall problems by choosing the kinematic equation that omits the unknown you do not have; convert fluently among x-t, v-t, and a-t graphs by reading slope and area; identify when constant-acceleration equations are legal (constant a only).
**Common traps**: Applying the constant-acceleration equations when acceleration is not constant; assuming velocity is zero at the highest point means acceleration is zero there (it is still g); confusing the sign of displacement with the sign of velocity; using sqrt(h/g) instead of sqrt(2h/g) for free-fall time.

## Chapter 3: Motion in Two Dimensions
**Core questions**: Why can horizontal and vertical motion be analyzed independently? How does relative velocity change what an observer measures?
**Key concepts**: Two-dimensional position, velocity, and acceleration as vectors; the independence of perpendicular components; projectile motion (constant horizontal velocity, constant vertical acceleration); range, maximum height, and time of flight; relative velocity and frame transformations.
**Applied skills**: Split a projectile problem into independent x and y equations sharing only time; find launch angle for a given range or target; solve river-crossing and aircraft-in-wind relative-velocity problems by vector addition.
**Common traps**: Believing a horizontally launched object falls slower than a dropped one (vertical motion is identical); putting gravity into the horizontal equation; forgetting that maximum range for level ground occurs at 45 degrees; adding relative velocities as scalars when they point in different directions.

## Chapter 4: Forces and Newton's Laws
**Core questions**: What does a force actually do, and what does it not do? How do we turn a physical scene into a free-body diagram and then into equations?
**Key concepts**: Newton's three laws; inertial frames; mass vs. weight; the free-body diagram; normal force, tension, weight, applied force; static and kinetic friction (f_s <= mu_s N, f_k = mu_k N); Newton's third-law action-reaction pairs; connected systems and Atwood machines; inclined planes.
**Applied skills**: Draw a correct free-body diagram before writing a single equation; apply F_net = ma along chosen axes; find the static-friction threshold for slipping; solve coupled-system problems with a shared acceleration.
**Common traps**: Cancelling Newton's third-law pairs because they are "equal and opposite" (they act on different bodies, so they never cancel on one body); treating the normal force as always equal to mg (it is not on an incline or in an accelerating elevator); using f = mu_s N as an equality when static friction is actually <= that value; inventing a "centripetal force" as a new applied force rather than the net of real forces.

## Chapter 5: Circular Motion and Applications of Newton's Laws
**Core questions**: When something moves in a circle at constant speed, what is accelerating, and what supplies the force? What sets the limits — the maximum safe speed on a curve, the minimum speed at the top of a loop?
**Key concepts**: Uniform circular motion; centripetal acceleration a_c = v^2/r; the centripetal force requirement F_net = mv^2/r; banked and unbanked curves; vertical circles and loops; the conical pendulum; drag and terminal velocity.
**Applied skills**: Identify which real force (friction, tension, normal, gravity, or a combination) provides the centripetal requirement in a given setup; find the maximum speed before a car slips on a flat or banked curve; find minimum speed at the top of a vertical loop; reason qualitatively about terminal velocity.
**Common traps**: Adding an outward "centrifugal force" to a free-body diagram in an inertial frame; thinking constant-speed circular motion means zero acceleration (direction changes, so velocity changes); assuming the normal force equals weight on a banked curve; forgetting that at the top of a loop gravity points toward the center and can supply the centripetal force.

## Chapter 6: Work, Energy, and Power
**Core questions**: When is energy the smarter tool than force? How do we account for every joule when motion involves friction, springs, and changing forces?
**Key concepts**: Work as W = F·d (and as an integral for variable force); kinetic energy and the work-energy theorem; gravitational and elastic potential energy; conservative vs. nonconservative forces; conservation of mechanical energy; energy dissipated by friction; power as rate of energy transfer.
**Applied skills**: Choose energy methods over force methods when only speeds and heights matter, not time or trajectory; compute work done by a variable (e.g., spring) force; do full energy accounting for a roller-coaster, spring-launcher, or sliding block with friction; compute average and instantaneous power.
**Common traps**: Forgetting that work is the dot product, so a force perpendicular to motion (e.g., normal force, or the string tension on a pendulum) does zero work; treating friction's negative work as if energy disappeared rather than became thermal energy; using mgh with the wrong reference height; confusing power (rate) with work or energy.

## Chapter 7: Momentum, Impulse, and Collisions
**Core questions**: What is conserved in a collision when energy is not? How does the impulse-momentum theorem explain why crumple zones and airbags save lives?
**Key concepts**: Linear momentum p = mv; impulse J = F·Δt = Δp; conservation of momentum for isolated systems; elastic, inelastic, and perfectly inelastic collisions; collisions in two dimensions; center of mass and its motion; explosions and recoil.
**Applied skills**: Decide whether a system is isolated (no net external impulse) before applying momentum conservation; use impulse to relate force, time, and momentum change from a force-time graph; solve one- and two-dimensional collision and explosion problems; track the center of mass of a multi-body system.
**Common traps**: Assuming kinetic energy is conserved in every collision (only elastic ones); applying momentum conservation when a large external force (e.g., the ground during a bounce) acts over the interval; confusing impulse (force times time) with work (force times distance); getting the sign of momentum or impulse wrong by not fixing a positive direction first.

## Chapter 8: Rotation, Torque, and Angular Momentum
**Core questions**: What plays the role of mass, force, and momentum when an object spins instead of slides? Why does a figure skater spin faster when she pulls her arms in?
**Key concepts**: Angular position, velocity, and acceleration; rotational kinematics (the angular analogs of the constant-acceleration equations); torque tau = rF sin(theta); moment of inertia and how it depends on mass distribution; the parallel-axis theorem; rotational kinetic energy and rolling without slipping; angular momentum L = I*omega and its conservation.
**Applied skills**: Translate between linear and angular quantities (v = r*omega, a = r*alpha); compute net torque about a chosen axis; apply tau_net = I*alpha; use energy methods for rolling objects; apply conservation of angular momentum to spin-up and spin-down problems.
**Common traps**: Using the wrong moment of inertia for the shape (solid sphere 2/5 MR^2, hollow sphere 2/3 MR^2, solid disk/cylinder 1/2 MR^2, hoop MR^2, rod about center 1/12 ML^2, rod about end 1/3 ML^2); forgetting the sin(theta) factor or the lever arm in torque; assuming a rolling object's energy is only translational (it is translational plus rotational); thinking angular momentum changes when only the moment of inertia changes with no external torque (it is conserved, so omega adjusts).

## Chapter 9: Static Equilibrium and Elasticity
**Core questions**: What two conditions must hold for an object to be in static equilibrium, and how do we pick a pivot to make the algebra easy?
**Key concepts**: The two equilibrium conditions (net force zero and net torque zero); center of gravity; choosing a rotation axis to eliminate unknown forces; stability and toppling; stress, strain, and Young's modulus as an introduction to elasticity.
**Applied skills**: Solve beam, ladder, cantilever, and hanging-sign problems by summing forces and summing torques about a cleverly chosen pivot; locate the center of gravity of a composite object; judge whether an object will tip or slide first.
**Common traps**: Summing torques about an axis but using the wrong perpendicular lever arms; forgetting that the choice of pivot is free and that a smart choice zeroes out an unknown force; ignoring the wall's friction or normal force in a ladder problem; assuming the center of gravity is always at the geometric center.

## Chapter 10: Gravitation and Orbits
**Core questions**: Why does the same force that drops an apple hold the Moon in orbit? How do orbital period, radius, and speed relate?
**Key concepts**: Newton's law of universal gravitation F = G m1 m2 / r^2; gravitational field strength g = GM/r^2; gravitational potential energy U = -G m1 m2 / r; circular orbital speed and period; Kepler's three laws; escape speed v_esc = sqrt(2GM/R).
**Applied skills**: Relate orbital speed to radius via v = sqrt(GM/r); apply Kepler's third law (T^2 proportional to r^3) to compare orbits; compute escape speed; explain weightlessness in orbit as continuous free fall, not absence of gravity.
**Common traps**: Using the flat-Earth U = mgh near a planet but the -GMm/r form far away without noticing the reference point differs; thinking astronauts in orbit feel no gravity (gravity supplies the centripetal force); confusing escape speed with orbital speed (escape speed is larger by sqrt(2)); forgetting that gravitational PE is negative and increases toward zero as r grows.

## Chapter 11: Oscillations and Simple Harmonic Motion
**Core questions**: What makes a motion "simple harmonic," and why do a mass on a spring and a small-angle pendulum obey the same mathematics?
**Key concepts**: Restoring force proportional to displacement (F = -kx); simple harmonic motion and its sinusoidal solution; angular frequency, period, and frequency; the mass-spring oscillator omega = sqrt(k/m); the simple pendulum T = 2*pi*sqrt(L/g) in the small-angle limit; energy exchange between kinetic and potential; damping and resonance.
**Applied skills**: Identify whether a system is SHM by checking for a linear restoring force; compute period and frequency for spring and pendulum systems; track the exchange between kinetic and potential energy over a cycle; explain resonance and why driving frequency matters.
**Common traps**: Believing a pendulum's period depends on its mass or (for small swings) its amplitude (it depends on L and g only); using T = 2*pi*sqrt(L/g) at large amplitudes where the small-angle approximation fails; confusing frequency (Hz) with angular frequency (rad/s), which differ by 2*pi; thinking maximum speed occurs at maximum displacement (it occurs at equilibrium).

## Chapter 12: Fluids
**Core questions**: Why does pressure increase with depth, why do some objects float, and what does Bernoulli's principle really say?
**Key concepts**: Density and pressure; pressure with depth P = P0 + rho*g*h; Pascal's principle and hydraulics; Archimedes' principle and buoyant force; the continuity equation (A1 v1 = A2 v2); Bernoulli's equation and its assumptions (steady, incompressible, nonviscous flow).
**Applied skills**: Compute gauge and absolute pressure at depth; determine whether an object floats, sinks, or is neutrally buoyant and find the submerged fraction; apply continuity to relate speed and cross-section; use Bernoulli's equation to relate pressure and speed in a pipe or over a wing.
**Common traps**: Thinking the buoyant force depends on the object's weight rather than the weight of displaced fluid; assuming pressure depends on the container's shape or total volume rather than depth; using Bernoulli where its assumptions fail (turbulent or viscous flow); forgetting that in continuity a narrower pipe means faster, not slower, flow.

## Chapter 13: Measurement, Uncertainty, and the Mechanics Laboratory
**Core questions**: How do we turn messy laboratory data into a defensible physical conclusion, and how much should we trust the number we report?
**Key concepts**: Experimental design and control of variables; random vs. systematic error; uncertainty and significant figures; linearization and curve fitting; residuals and goodness of fit; uncertainty propagation; reproducibility and clear scientific communication.
**Applied skills**: Decide what to measure, what to vary, and what to hold constant; linearize a relationship so a straight-line fit reveals a physical constant (e.g., plotting T^2 vs. L for a pendulum to extract g); read a residual plot to judge whether a model fits; propagate uncertainty through a simple calculation and report a result with appropriate significant figures.
**Common traps**: Reporting more significant figures than the measurement justifies; mistaking precision (repeatability) for accuracy (closeness to truth); fitting a curve when a linearized straight line would expose the physics more cleanly; treating an outlier as wrong rather than investigating it; ignoring systematic error because the random scatter looks small.

## Capstone
Choose a real mechanical system — a bicycle braking event, a playground swing, an elevator ride, a falling or thrown object, a rotating platform, a loaded beam or bridge support, or a fluid-flow device — and analyze it two independent ways, for example force analysis and energy conservation, or momentum and impulse, so that the two methods cross-check each other. Build the analysis as a short technical report: state assumptions and the idealized model, draw the diagrams, derive the governing relations symbolically, predict a measurable quantity, then compare against measured or simulated data and discuss the discrepancy in terms of the assumptions you made. The deliverable must show the full chain — sketch, frame, principle, symbolic result, numerical answer with units, and a limit or sanity check — and must explicitly name which conservation law or law of motion did the work and why it was the right choice.

## Assessment Ideas
Use frequent diagram-first problem sets where the free-body or energy-bar diagram is graded before the algebra; short conceptual checks targeting the named common traps; lab notebooks judged on design and uncertainty reasoning as much as on the final value; oral defense of one solved problem; and cumulative exams that award substantial credit for correct setup, assumptions, and unit checks even when the arithmetic slips. Include at least one practical task where students must select the governing model from messy evidence rather than being handed the equation.

## Research Notes
- OpenStax, *University Physics Volume 1*: https://openstax.org/details/books/university-physics-volume-1
- OpenStax, *College Physics 2e*: https://openstax.org/details/books/college-physics-2e
- HyperPhysics, mechanics reference (Georgia State University): http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html
- American Association of Physics Teachers, undergraduate laboratory curriculum recommendations: https://www.aapt.org/Resources/upload/LabGuidelinesDocument_EBendorsed_nov10.pdf
- PhET Interactive Simulations, physics collection: https://phet.colorado.edu/en/simulations/filter?subjects=physics

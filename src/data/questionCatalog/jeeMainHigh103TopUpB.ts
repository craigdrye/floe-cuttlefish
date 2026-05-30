import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe jeeMain top-up'

export const jeeMainHigh103TopUpBQuestions: Question[] = makeQuestionBank('High', [
  // ============================================================
  // Physics: Electrostatics
  // ============================================================
  {
    id: 7970500,
    chapter: 'Physics: Electrostatics',
    title: 'Field inside a charged conductor',
    prompt: 'A solid metal sphere carries a net charge Q in electrostatic equilibrium. What is the electric field at a point inside the metal of the sphere?',
    correct: 'Zero everywhere inside the conducting material',
    wrong: [
      miss('kQ/r^2 directed radially outward', 'This is the field outside the sphere (or at its surface), not inside the conductor. Inside a conductor in equilibrium the field must vanish.', 'Where do the charges sit on a conductor in equilibrium?'),
      miss('Uniform and equal to the surface field', 'The field is not constant and non-zero inside; if any field existed, free charges would keep moving until it cancelled.', 'Equilibrium means no net force on the free electrons.'),
      miss('Q/(epsilon_0 V) where V is the volume', 'This mixes up volume charge density with field; in a conductor the excess charge resides on the surface, not throughout the volume.', 'Excess charge on a conductor lives on its outer surface.'),
    ],
    lesson: 'In a conductor at electrostatic equilibrium the free charges rearrange until the electric field inside the material is exactly zero; any residual field would drive currents. All excess charge resides on the outer surface. Outside the sphere the field is kQ/r^2, identical to that of a point charge at the centre.',
    source,
    generated: true,
  },
  {
    id: 7970501,
    chapter: 'Physics: Electrostatics',
    title: 'Energy stored in a capacitor',
    prompt: 'A 10 microfarad capacitor is charged to a potential difference of 200 V. How much energy is stored in it?',
    correct: '0.2 J',
    wrong: [
      miss('2 J', 'This uses E = CV instead of E = (1/2)CV^2, and also mishandles the factor; check the formula carefully.', 'The energy formula has a one-half and the voltage squared.'),
      miss('0.1 J', 'This uses E = (1/2)CV instead of (1/2)CV^2, dropping one factor of V.', 'The voltage must be squared in the energy expression.'),
      miss('400 J', 'This forgets the microfarad prefix (10^-6) entirely, treating C as 10 F.', 'Convert 10 microfarad to 10 x 10^-6 F before substituting.'),
    ],
    lesson: 'Energy stored in a capacitor is U = (1/2)CV^2 = 0.5 x 10 x 10^-6 x (200)^2 = 0.5 x 10^-5 x 4 x 10^4 = 0.2 J. Equivalent forms are U = (1/2)QV and U = Q^2/(2C). Always convert prefixes (micro = 10^-6) before substituting.',
    source,
    generated: true,
  },
  // ============================================================
  // Physics: Current Electricity
  // ============================================================
  {
    id: 7970502,
    chapter: 'Physics: Current Electricity',
    title: 'Resistors in parallel',
    prompt: 'Two resistors of 6 ohm and 3 ohm are connected in parallel. What is their equivalent resistance?',
    correct: '2 ohm',
    wrong: [
      miss('9 ohm', 'This simply adds the resistances, which is the rule for a series connection, not parallel.', 'In parallel the equivalent is always smaller than the smallest resistor.'),
      miss('4.5 ohm', 'This averages the two resistances, which is not how parallel combination works.', 'Use 1/R = 1/R1 + 1/R2, then invert.'),
      miss('18 ohm', 'This multiplies the resistances without dividing by their sum, dropping the denominator of the product-over-sum rule.', 'The product-over-sum rule is R1R2/(R1+R2).'),
    ],
    lesson: 'For two resistors in parallel, 1/R = 1/6 + 1/3 = 1/6 + 2/6 = 3/6, so R = 2 ohm. The product-over-sum shortcut gives R = (6 x 3)/(6 + 3) = 18/9 = 2 ohm. The parallel equivalent is always less than the smallest individual resistor.',
    source,
    generated: true,
  },
  {
    id: 7970503,
    chapter: 'Physics: Current Electricity',
    title: 'Drift velocity and current',
    prompt: 'In a metallic conductor, the current I is related to the drift velocity v_d of electrons by which expression? (n = number density, A = cross-section area, e = electron charge)',
    correct: 'I = n A e v_d',
    wrong: [
      miss('I = n A e / v_d', 'Current increases with drift velocity, so v_d belongs in the numerator, not the denominator.', 'Faster drift means more charge passing per second.'),
      miss('I = A e v_d / n', 'More charge carriers (larger n) means more current, so n must multiply, not divide.', 'Doubling the carrier density should double the current.'),
      miss('I = n e v_d / A', 'A larger cross-sectional area carries more current, so A multiplies; it should not divide.', 'Think of charge per second crossing a section of area A.'),
    ],
    lesson: 'Current is the charge crossing a section per second: in time t the electrons in a length v_d t sweep through, giving I = n A e v_d. Drift velocities are tiny (about 10^-4 m/s) even though signals travel near light speed, because the drift is a slow superimposed motion on fast random thermal motion.',
    source,
    generated: true,
  },
  // ============================================================
  // Physics: Magnetic Effects of Current and Magnetism
  // ============================================================
  {
    id: 7970504,
    chapter: 'Physics: Magnetic Effects of Current',
    title: 'Force on a moving charge',
    prompt: 'A charged particle moves parallel to a uniform magnetic field. What magnetic force acts on it?',
    correct: 'Zero, because the velocity is parallel to the field',
    wrong: [
      miss('qvB, maximum force', 'The force qvB sin theta is maximum only when the velocity is perpendicular to B; here theta = 0 so sin theta = 0.', 'Recall the angle factor in the magnetic force law.'),
      miss('qvB directed along the field', 'The magnetic force is always perpendicular to both v and B, never along the field, and here it is zero anyway.', 'The Lorentz magnetic force is a cross product.'),
      miss('qE, an electric-type force', 'There is no electric field given; the magnetic force depends on v x B, which vanishes for parallel vectors.', 'Distinguish electric force qE from magnetic force qv x B.'),
    ],
    lesson: 'The magnetic force is F = qv x B, with magnitude qvB sin theta where theta is the angle between v and B. When the charge moves parallel (theta = 0) or antiparallel (theta = 180) to the field, sin theta = 0 and the force vanishes, so the particle continues in a straight line. Maximum force qvB occurs at theta = 90 degrees, giving circular motion.',
    source,
    generated: true,
  },
  {
    id: 7970505,
    chapter: 'Physics: Magnetic Effects of Current',
    title: 'Field inside a long solenoid',
    prompt: 'What is the magnitude of the magnetic field deep inside a long solenoid carrying current I with n turns per unit length?',
    correct: 'mu_0 n I',
    wrong: [
      miss('mu_0 n I / 2', 'The factor of one-half applies at the end of a solenoid or at the centre of a circular loop, not deep inside a long solenoid.', 'The interior field of an ideal long solenoid has no one-half.'),
      miss('mu_0 I / (2 pi r)', 'This is the field of a long straight wire at distance r, not the uniform field inside a solenoid.', 'A solenoid field does not depend on distance from a wire.'),
      miss('mu_0 N I where N is total turns', 'The field uses turns per unit length n, not the total turn count N; otherwise the units are wrong.', 'Use n = N/L, the turn density.'),
    ],
    lesson: 'Applying Ampere\'s law to an ideal long solenoid gives a uniform interior field B = mu_0 n I directed along the axis, where n is turns per unit length; the field outside is approximately zero. At an end of the solenoid the field drops to mu_0 n I / 2, and a toroid has B = mu_0 N I / (2 pi r).',
    source,
    generated: true,
  },
  // ============================================================
  // Physics: Electromagnetic Induction and Alternating Currents
  // ============================================================
  {
    id: 7970506,
    chapter: 'Physics: Electromagnetic Induction and AC',
    title: 'Lenz\'s law direction',
    prompt: 'A bar magnet is pushed north-pole-first toward a coil. According to Lenz\'s law, the induced current in the coil faces the approaching magnet with which pole?',
    correct: 'A north pole, opposing the approach',
    wrong: [
      miss('A south pole, attracting the magnet', 'If the coil attracted the magnet, energy would be created from nothing, violating conservation; the induced effect must oppose the change.', 'Lenz\'s law conserves energy by opposing the motion.'),
      miss('No definite pole; the direction is random', 'The induced current direction is fully determined by Lenz\'s law, not random.', 'The induced current always opposes the flux change causing it.'),
      miss('Whichever pole maximises the current', 'The pole is set by opposition to the flux change, not by maximising current magnitude.', 'Focus on opposing the change, not maximising current.'),
    ],
    lesson: 'Lenz\'s law states the induced current opposes the change in magnetic flux that produces it, which is a statement of energy conservation. A north pole approaching induces a north pole on the near face of the coil, repelling the magnet, so external work must be done to push it in. This appears in the minus sign of Faraday\'s law, EMF = -dPhi/dt.',
    source,
    generated: true,
  },
  {
    id: 7970507,
    chapter: 'Physics: Electromagnetic Induction and AC',
    title: 'RMS value of AC',
    prompt: 'A sinusoidal alternating voltage has a peak value of 311 V. What is its root-mean-square (rms) value?',
    correct: 'About 220 V',
    wrong: [
      miss('About 311 V', 'This quotes the peak value itself; the rms value is the peak divided by the square root of two.', 'rms is smaller than the peak for a sine wave.'),
      miss('About 156 V', 'This halves the peak, which would be the average over a half cycle scaled wrongly, not the rms.', 'Divide the peak by 1.414, not by 2.'),
      miss('About 440 V', 'This multiplies the peak by the square root of two instead of dividing by it.', 'rms equals peak divided by root two, so it must be smaller.'),
    ],
    lesson: 'For a sinusoid, V_rms = V_peak / sqrt(2) = 311 / 1.414 ≈ 220 V, which is the standard Indian mains rms voltage. The rms value is the effective DC-equivalent value: an AC of rms V dissipates the same average power in a resistor as a DC of that voltage. Similarly I_rms = I_peak / sqrt(2).',
    source,
    generated: true,
  },
  // ============================================================
  // Physics: Optics
  // ============================================================
  {
    id: 7970508,
    chapter: 'Physics: Optics',
    title: 'Young\'s double-slit fringe width',
    prompt: 'In Young\'s double-slit experiment, the fringe width depends on slit separation d and screen distance D how? (lambda = wavelength)',
    correct: 'Fringe width = lambda D / d',
    wrong: [
      miss('Fringe width = lambda d / D', 'This inverts the roles of d and D; widening the slit separation actually narrows the fringes.', 'Larger slit separation should give narrower fringes.'),
      miss('Fringe width = d D / lambda', 'Longer wavelength gives wider fringes, so lambda must be in the numerator, not the denominator.', 'Red light gives wider fringes than blue.'),
      miss('Fringe width = lambda / (d D)', 'Increasing the screen distance D widens the fringes, so D belongs in the numerator.', 'Moving the screen farther spreads the fringes out.'),
    ],
    lesson: 'In Young\'s experiment the fringe width is beta = lambda D / d, the spacing between consecutive bright (or dark) fringes. Wider fringes result from longer wavelength, larger screen distance, or smaller slit separation. This is the standard way to measure wavelength, and the central maximum lies at zero path difference.',
    source,
    generated: true,
  },
  {
    id: 7970509,
    chapter: 'Physics: Optics',
    title: 'Critical angle and total internal reflection',
    prompt: 'Light travels from a medium of refractive index 1.5 toward a medium of refractive index 1.0. Total internal reflection can occur if the angle of incidence exceeds the critical angle given by which relation?',
    correct: 'sin(theta_c) = 1.0 / 1.5',
    wrong: [
      miss('sin(theta_c) = 1.5 / 1.0', 'This gives a sine greater than one, which is impossible; the denser-to-rarer ratio must be less than one.', 'A sine cannot exceed 1, so check which index goes on top.'),
      miss('cos(theta_c) = 1.0 / 1.5', 'The critical angle is defined through the sine, since at the critical angle the refracted ray grazes at 90 degrees.', 'Use Snell\'s law with the refraction angle at 90 degrees.'),
      miss('tan(theta_c) = 1.0 / 1.5', 'Snell\'s law involves sines, not tangents; the tangent appears in Brewster\'s angle, a different concept.', 'Brewster\'s angle uses tangent; critical angle uses sine.'),
    ],
    lesson: 'Total internal reflection requires light going from a denser to a rarer medium (n1 > n2) at an incidence beyond the critical angle, where sin(theta_c) = n2/n1. Here sin(theta_c) = 1.0/1.5 = 0.667, so theta_c ≈ 41.8 degrees. This principle underlies optical fibres and prism reflectors.',
    source,
    generated: true,
  },
  // ============================================================
  // Physics: Dual Nature of Matter and Radiation
  // ============================================================
  {
    id: 7970510,
    chapter: 'Physics: Dual Nature of Matter',
    title: 'Photoelectric threshold',
    prompt: 'In the photoelectric effect, increasing the intensity of light (at fixed frequency above threshold) changes what?',
    correct: 'The number of photoelectrons (current) increases, but their maximum kinetic energy is unchanged',
    wrong: [
      miss('The maximum kinetic energy of photoelectrons increases', 'Maximum kinetic energy depends only on frequency, not intensity; more intense light delivers more photons, not more energetic ones.', 'Which property of light sets the electron energy?'),
      miss('Both current and maximum kinetic energy increase', 'Current rises with intensity, but kinetic energy is fixed by frequency alone for given metal.', 'Intensity and frequency control different things.'),
      miss('Nothing changes if the frequency stays the same', 'Higher intensity does increase the photocurrent by ejecting more electrons per second.', 'More photons per second means more electrons per second.'),
    ],
    lesson: 'Einstein\'s photoelectric equation is KE_max = h f - phi, so the maximum kinetic energy depends only on the frequency f and the work function phi. Intensity sets the number of photons per second and hence the saturation photocurrent, but not the energy per electron. Below the threshold frequency no emission occurs regardless of intensity, a key failure of classical wave theory.',
    source,
    generated: true,
  },
  {
    id: 7970511,
    chapter: 'Physics: Dual Nature of Matter',
    title: 'De Broglie wavelength',
    prompt: 'The de Broglie wavelength of a particle of momentum p is given by which expression? (h = Planck constant)',
    correct: 'lambda = h / p',
    wrong: [
      miss('lambda = p / h', 'This inverts the relation; larger momentum gives a shorter wavelength, so p must be in the denominator.', 'Heavier, faster particles have smaller wavelengths.'),
      miss('lambda = h p', 'A product would make wavelength grow with momentum, opposite to observation.', 'Wavelength and momentum are inversely related.'),
      miss('lambda = h / (m v^2)', 'The correct relation uses momentum p = mv (first power of v), not v squared, which would be energy-like.', 'Use momentum mv, not kinetic-energy form.'),
    ],
    lesson: 'De Broglie proposed that matter has wave properties with wavelength lambda = h/p = h/(mv). The wavelength is inversely proportional to momentum, so it is utterly negligible for everyday objects but significant for electrons, explaining electron diffraction. This wave-particle duality is foundational to quantum mechanics.',
    source,
    generated: true,
  },
  // ============================================================
  // Physics: Atoms and Nuclei
  // ============================================================
  {
    id: 7970512,
    chapter: 'Physics: Atoms and Nuclei',
    title: 'Bohr model energy levels',
    prompt: 'In the Bohr model of hydrogen, the energy of the n-th level is E_n = -13.6/n^2 eV. What is the energy required to ionise a hydrogen atom from its ground state?',
    correct: '13.6 eV',
    wrong: [
      miss('3.4 eV', 'This is the energy of the n = 2 level magnitude; ionisation from the ground state (n = 1) requires 13.6 eV.', 'Ionisation starts from n = 1, not n = 2.'),
      miss('10.2 eV', 'This is the energy of the first excited transition (n = 1 to n = 2), not the energy to remove the electron entirely.', 'Ionisation takes the electron to n = infinity, where E = 0.'),
      miss('-13.6 eV', 'The energy supplied to ionise is positive; the level energy is negative, but the required input is its magnitude.', 'Energy must be added, so the answer is positive.'),
    ],
    lesson: 'The ionisation energy is the energy needed to take the electron from n = 1 (E = -13.6 eV) to n = infinity (E = 0), which is +13.6 eV. The negative sign of E_n indicates the electron is bound. Transitions between levels emit or absorb photons whose energies match the level differences, giving the hydrogen spectral series.',
    source,
    generated: true,
  },
  {
    id: 7970513,
    chapter: 'Physics: Atoms and Nuclei',
    title: 'Radioactive half-life',
    prompt: 'A radioactive sample has a half-life of 5 days. What fraction of the original nuclei remains undecayed after 15 days?',
    correct: '1/8',
    wrong: [
      miss('1/3', 'This treats decay as linear (15 days = 3 half-lives implies one-third left), but decay is exponential, halving each period.', 'Each half-life multiplies the remaining amount by one-half.'),
      miss('1/16', 'This corresponds to 4 half-lives, but 15 days is only 3 half-lives at 5 days each.', 'Count 15 / 5 = 3 half-lives.'),
      miss('1/6', 'This is neither an exponential factor nor matches three halvings; it confuses dividing by a number with repeated halving.', 'Multiply 1/2 three times: 1/2 x 1/2 x 1/2.'),
    ],
    lesson: 'Radioactive decay is exponential: after n half-lives the remaining fraction is (1/2)^n. In 15 days there are 15/5 = 3 half-lives, so the fraction left is (1/2)^3 = 1/8. The number of nuclei follows N = N_0 e^(-lambda t), with the decay constant lambda = ln 2 / half-life.',
    source,
    generated: true,
  },
  // ============================================================
  // Physics: Electronic Devices
  // ============================================================
  {
    id: 7970514,
    chapter: 'Physics: Electronic Devices',
    title: 'PN junction diode forward bias',
    prompt: 'A silicon PN-junction diode is forward biased. What happens to the width of the depletion region and the diode\'s conduction?',
    correct: 'Depletion region narrows and the diode conducts readily',
    wrong: [
      miss('Depletion region widens and the diode conducts readily', 'Forward bias narrows the depletion region; widening occurs under reverse bias, which blocks conduction.', 'Which bias shrinks the barrier?'),
      miss('Depletion region narrows but the diode blocks current', 'A narrower barrier under forward bias allows current to flow once the threshold (about 0.7 V for Si) is exceeded.', 'Narrow barrier means easier conduction.'),
      miss('Depletion region is unchanged and the diode conducts equally either way', 'A diode is not symmetric; bias direction strongly changes both the depletion width and conduction.', 'A diode is a one-way valve for current.'),
    ],
    lesson: 'Forward biasing a PN junction (p-side to positive terminal) reduces the built-in potential barrier and narrows the depletion region, allowing significant current once the threshold voltage (about 0.7 V for silicon, 0.3 V for germanium) is reached. Reverse bias widens the depletion region and permits only a tiny leakage current, giving the diode its rectifying property.',
    source,
    generated: true,
  },
  // ============================================================
  // Chemistry: Electrochemistry
  // ============================================================
  {
    id: 7970515,
    chapter: 'Chemistry: Electrochemistry',
    title: 'Nernst equation effect',
    prompt: 'For the electrode reaction M^n+ + n e- -> M, how does increasing the concentration of M^n+ ions affect the electrode (reduction) potential?',
    correct: 'It increases (makes more positive) the reduction potential',
    wrong: [
      miss('It decreases the reduction potential', 'Higher reactant (oxidised form) concentration favours reduction, raising the potential per the Nernst equation, not lowering it.', 'More oxidised species pushes the reduction forward.'),
      miss('It has no effect at constant temperature', 'The Nernst equation explicitly makes the potential depend on ion concentration; only at unit activity does it equal the standard value.', 'The reaction quotient appears in the Nernst equation.'),
      miss('It reverses the sign of the potential', 'Changing concentration shifts the potential continuously; it does not generally flip the sign for a modest change.', 'Concentration shifts potential, not necessarily its sign.'),
    ],
    lesson: 'The Nernst equation E = E_standard - (RT/nF) ln Q shows the electrode potential depends on ion concentrations. For a reduction M^n+ + n e- -> M, the reaction quotient is Q = 1/[M^n+], so increasing [M^n+] decreases ln Q and raises E (more positive), favouring reduction, consistent with Le Chatelier\'s principle.',
    source,
    generated: true,
  },
  {
    id: 7970516,
    chapter: 'Chemistry: Electrochemistry',
    title: 'Faraday\'s laws of electrolysis',
    prompt: 'How much charge (in coulombs) is required to deposit one mole of a metal from a solution of its trivalent ions (M^3+)? (Faraday constant F ≈ 96500 C/mol)',
    correct: 'About 289500 C (3F)',
    wrong: [
      miss('About 96500 C (1F)', 'Depositing M^3+ requires 3 moles of electrons per mole of metal, so 3F, not 1F.', 'How many electrons reduce one M^3+ ion?'),
      miss('About 48250 C (F/2)', 'This halves the Faraday constant, which would apply to neither this nor any whole-charge ion; M^3+ needs three electrons.', 'Each M^3+ needs 3 electrons; total is 3 x 96500.'),
      miss('About 32167 C (F/3)', 'Dividing by 3 is backwards; a higher charge state requires more charge, so multiply by 3.', 'Higher ionic charge means more electrons, not fewer.'),
    ],
    lesson: 'Faraday\'s first law states the mass deposited is proportional to charge passed. Reducing one mole of M^3+ to M requires 3 moles of electrons, so charge = 3 x 96500 ≈ 289500 C. In general, charge = n x F per mole, where n is the number of electrons in the half-reaction, which equals the ionic charge for simple metal deposition.',
    source,
    generated: true,
  },
  // ============================================================
  // Chemistry: Chemical Kinetics
  // ============================================================
  {
    id: 7970517,
    chapter: 'Chemistry: Chemical Kinetics',
    title: 'Order versus molecularity',
    prompt: 'For a first-order reaction, how does the half-life depend on the initial concentration of the reactant?',
    correct: 'It is independent of the initial concentration',
    wrong: [
      miss('It is directly proportional to the initial concentration', 'That is the behaviour of a zero-order reaction, not first order; first-order half-life is concentration-independent.', 'Which order gives a constant half-life?'),
      miss('It is inversely proportional to the initial concentration', 'Inverse dependence characterises a second-order reaction; first-order half-life stays constant.', 'Second order, not first, gives inverse dependence.'),
      miss('It is proportional to the square of the initial concentration', 'No common simple order gives this dependence; first-order half-life has no concentration dependence at all.', 'Recall the formula t_half = 0.693/k for first order.'),
    ],
    lesson: 'For a first-order reaction the half-life is t_half = 0.693/k, depending only on the rate constant, not on initial concentration, which is why radioactive decay (also first order) has a fixed half-life. Zero-order half-life is proportional to initial concentration, and second-order half-life is inversely proportional to it.',
    source,
    generated: true,
  },
  {
    id: 7970518,
    chapter: 'Chemistry: Chemical Kinetics',
    title: 'Arrhenius and activation energy',
    prompt: 'According to the Arrhenius equation, raising the temperature increases the rate constant mainly because of which factor?',
    correct: 'A larger fraction of molecules has energy exceeding the activation energy',
    wrong: [
      miss('The activation energy itself decreases with temperature', 'Activation energy is a fixed property of the reaction path (lowered only by a catalyst), not by temperature.', 'What does a catalyst change versus what temperature changes?'),
      miss('The collision frequency alone accounts for the large increase', 'Collision frequency rises only modestly (as sqrt of T); the dominant effect is the exponential Boltzmann factor.', 'The exponential term dominates over the slow collision-rate change.'),
      miss('The enthalpy change of the reaction increases', 'The overall enthalpy change is the difference of product and reactant energies, unrelated to the rate boost from temperature.', 'Thermodynamic enthalpy is not the kinetic barrier.'),
    ],
    lesson: 'The Arrhenius equation k = A exp(-Ea/RT) shows the rate constant depends exponentially on temperature through the Boltzmann factor exp(-Ea/RT), which represents the fraction of molecules with enough energy to react. A small rise in T sharply increases this fraction. A catalyst speeds reactions by lowering Ea, providing an alternative pathway, without being consumed.',
    source,
    generated: true,
  },
  // ============================================================
  // Chemistry: Coordination Compounds
  // ============================================================
  {
    id: 7970519,
    chapter: 'Chemistry: Coordination Compounds',
    title: 'Oxidation state in a complex',
    prompt: 'What is the oxidation state of the central iron atom in the complex ion [Fe(CN)_6]^3-?',
    correct: '+3',
    wrong: [
      miss('+2', 'This would give an overall charge of -4 with six CN- ligands; the actual overall charge is -3, requiring Fe to be +3.', 'Balance the charges: Fe + 6(-1) = -3.'),
      miss('+6', 'This ignores the contribution of the six cyanide ligands; you must subtract the ligand charges from the overall charge.', 'CN- each carry -1; account for all six.'),
      miss('-3', 'The -3 is the overall charge of the whole ion, not the oxidation state of iron alone.', 'Separate the metal oxidation state from the complex charge.'),
    ],
    lesson: 'The oxidation state of the central metal is found by balancing: each cyanide (CN-) contributes -1, so for six of them the total ligand charge is -6. With an overall ion charge of -3, the iron must be +3 (since +3 - 6 = -3). This complex, the hexacyanoferrate(III) or ferricyanide ion, has iron in the +3 state.',
    source,
    generated: true,
  },
  {
    id: 7970520,
    chapter: 'Chemistry: Coordination Compounds',
    title: 'Crystal field and colour',
    prompt: 'According to crystal field theory, the colour of many transition-metal complexes arises from which process?',
    correct: 'Electronic transitions of d-electrons between the split d-orbital energy levels (d-d transitions)',
    wrong: [
      miss('Promotion of electrons from filled s-orbitals to empty p-orbitals', 'Complex colour in CFT comes from d-orbital splitting, not s-to-p transitions, which lie in the ultraviolet for these species.', 'The splitting that matters is among the d-orbitals.'),
      miss('Reflection of all wavelengths equally by the metal centre', 'Equal reflection would give white or grey, not selective colour; selective absorption of certain wavelengths produces colour.', 'Colour comes from selective absorption, not uniform reflection.'),
      miss('Vibrational transitions of the ligand bonds', 'Vibrational transitions absorb in the infrared, not the visible, so they do not produce visible colour.', 'Visible colour requires electronic, not vibrational, transitions.'),
    ],
    lesson: 'In an octahedral or tetrahedral field, ligands split the metal d-orbitals into sets separated by the crystal field splitting energy (Delta). When this gap corresponds to visible-light energy, a d-electron absorbs a photon and jumps between levels (a d-d transition); the complementary colour is seen. The size of Delta, set by ligand strength in the spectrochemical series, determines the colour.',
    source,
    generated: true,
  },
  // ============================================================
  // Chemistry: d- and f-Block Elements
  // ============================================================
  {
    id: 7970521,
    chapter: 'Chemistry: d- and f-Block Elements',
    title: 'Variable oxidation states',
    prompt: 'Transition metals commonly show variable oxidation states. This is primarily because of which feature?',
    correct: 'The energies of the (n-1)d and ns electrons are close, so both can take part in bonding',
    wrong: [
      miss('They have very large atomic radii that hold electrons loosely', 'Transition metal radii are relatively small and similar across a period; the key factor is the small energy gap between ns and (n-1)d electrons.', 'Focus on orbital energies, not size.'),
      miss('Their nuclei are unstable and easily change charge', 'Nuclear stability is unrelated to chemical oxidation states, which involve electron loss, not nuclear change.', 'Oxidation involves electrons, not the nucleus.'),
      miss('They have completely filled d-subshells in every state', 'A filled d-subshell would resist losing electrons; it is the partly filled d-subshell with accessible electrons that enables variable states.', 'Partly filled d-orbitals are the source of variety.'),
    ],
    lesson: 'Transition elements show multiple oxidation states because the (n-1)d and ns orbitals are very close in energy, so a variable number of electrons can be removed for bonding. For example, manganese ranges from +2 to +7. This contrasts with s-block metals, where only the ns electrons are accessible, giving fixed oxidation states.',
    source,
    generated: true,
  },
  // ============================================================
  // Chemistry: Haloalkanes and Haloarenes
  // ============================================================
  {
    id: 7970522,
    chapter: 'Chemistry: Haloalkanes and Haloarenes',
    title: 'SN1 versus SN2 mechanism',
    prompt: 'A tertiary alkyl halide undergoes nucleophilic substitution predominantly by which mechanism, and why?',
    correct: 'SN1, because the tertiary carbocation intermediate is stabilised by the alkyl groups',
    wrong: [
      miss('SN2, because the bulky groups speed backside attack', 'Bulky tertiary groups actually hinder backside attack, slowing SN2; tertiary halides favour SN1.', 'Steric crowding blocks the SN2 backside approach.'),
      miss('SN1, because a tertiary carbanion is very stable', 'The SN1 intermediate is a carbocation, not a carbanion; alkyl groups stabilise positive charge by donating electrons.', 'Which charged intermediate forms when the halide leaves?'),
      miss('SN2, because tertiary substrates form no intermediate', 'Tertiary substrates do form a carbocation intermediate (SN1); it is methyl/primary substrates that favour the concerted SN2 with no intermediate.', 'Tertiary carbocations are the most stable, favouring SN1.'),
    ],
    lesson: 'Tertiary alkyl halides react mainly by SN1 because departure of the leaving group gives a tertiary carbocation, stabilised by the electron-donating (hyperconjugation and inductive) effect of three alkyl groups; the rate depends only on the substrate. Steric bulk simultaneously blocks the SN2 backside attack. Primary halides, with unstable carbocations and little steric hindrance, prefer the concerted SN2 pathway.',
    source,
    generated: true,
  },
  // ============================================================
  // Chemistry: Alcohols, Phenols and Ethers
  // ============================================================
  {
    id: 7970523,
    chapter: 'Chemistry: Alcohols, Phenols and Ethers',
    title: 'Acidity of phenol versus alcohol',
    prompt: 'Phenol is significantly more acidic than ethanol. The best explanation is which of the following?',
    correct: 'The phenoxide ion is stabilised by resonance delocalisation of the negative charge into the ring',
    wrong: [
      miss('Phenol has a stronger O-H bond than ethanol', 'A stronger O-H bond would make phenol less acidic, not more; the real reason is stabilisation of the conjugate base.', 'Acidity depends on conjugate-base stability.'),
      miss('Ethanol cannot lose its proton at all', 'Ethanol is weakly acidic and does ionise slightly; phenol is simply much more acidic due to resonance.', 'Both can lose a proton; compare the resulting anions.'),
      miss('The benzene ring donates electrons, intensifying the negative charge', 'The ring delocalises and disperses the negative charge by resonance, stabilising the anion; it does not intensify the charge.', 'Resonance spreads charge out, lowering energy.'),
    ],
    lesson: 'Phenol (pKa about 10) is far more acidic than ethanol (pKa about 16) because the phenoxide ion delocalises its negative charge into the aromatic ring through resonance, lowering its energy and favouring ionisation. The ethoxide ion has no such stabilisation, so the charge stays localised on oxygen. Electron-withdrawing substituents like -NO2 further increase phenol acidity.',
    source,
    generated: true,
  },
  // ============================================================
  // Chemistry: Aldehydes, Ketones and Carboxylic Acids
  // ============================================================
  {
    id: 7970524,
    chapter: 'Chemistry: Aldehydes, Ketones and Carboxylic Acids',
    title: 'Distinguishing aldehydes from ketones',
    prompt: 'Which reagent gives a positive test (silver mirror) with aldehydes but not with ketones?',
    correct: 'Tollens\' reagent (ammoniacal silver nitrate)',
    wrong: [
      miss('Bromine water alone', 'Bromine water does not produce a silver mirror and does not reliably distinguish aldehydes from ketones in this way.', 'A silver mirror points to a specific silver reagent.'),
      miss('Concentrated sulfuric acid', 'Concentrated sulfuric acid is a dehydrating acid, not a selective oxidising test for the aldehyde group.', 'Think of a mild oxidising reagent that deposits silver.'),
      miss('Sodium hydroxide solution', 'Sodium hydroxide is a base, not an oxidiser, and does not give a silver mirror with aldehydes.', 'The test relies on oxidation depositing metallic silver.'),
    ],
    lesson: 'Tollens\' reagent contains the diamminesilver(I) complex; aldehydes reduce it, depositing metallic silver as a mirror, while ketones (lacking the easily oxidised C-H of the carbonyl) do not react. Fehling\'s and Benedict\'s solutions similarly oxidise aliphatic aldehydes (red Cu2O precipitate). These are classic JEE-level functional-group identification tests.',
    source,
    generated: true,
  },
  {
    id: 7970525,
    chapter: 'Chemistry: Aldehydes, Ketones and Carboxylic Acids',
    title: 'Cannizzaro reaction requirement',
    prompt: 'Which aldehyde undergoes the Cannizzaro reaction with concentrated alkali?',
    correct: 'Benzaldehyde (an aldehyde with no alpha-hydrogen)',
    wrong: [
      miss('Acetaldehyde (CH3CHO)', 'Acetaldehyde has alpha-hydrogens, so it undergoes aldol condensation rather than Cannizzaro.', 'Cannizzaro requires the absence of alpha-hydrogens.'),
      miss('Propanal (CH3CH2CHO)', 'Propanal also has alpha-hydrogens and undergoes aldol reactions, not Cannizzaro.', 'Check whether the carbon next to the carbonyl bears hydrogens.'),
      miss('Any aldehyde, regardless of structure', 'Only aldehydes lacking alpha-hydrogens give Cannizzaro; those with alpha-hydrogens prefer aldol condensation.', 'The reaction is selective for alpha-hydrogen-free aldehydes.'),
    ],
    lesson: 'The Cannizzaro reaction is a disproportionation of aldehydes that lack alpha-hydrogens (such as benzaldehyde or formaldehyde) under concentrated base: one molecule is oxidised to a carboxylate and another reduced to an alcohol. Aldehydes with alpha-hydrogens instead undergo base-catalysed aldol condensation, so the absence of alpha-hydrogen is the deciding structural feature.',
    source,
    generated: true,
  },
  // ============================================================
  // Chemistry: Amines and Biomolecules
  // ============================================================
  {
    id: 7970526,
    chapter: 'Chemistry: Amines',
    title: 'Carbylamine test',
    prompt: 'The carbylamine (isocyanide) test, which produces a foul-smelling product on heating with chloroform and alcoholic KOH, is given by which class of amines?',
    correct: 'Primary amines only',
    wrong: [
      miss('Secondary amines only', 'Secondary amines do not give the carbylamine test; it is specific to primary amines, which have two N-H bonds.', 'The test needs a primary R-NH2 group.'),
      miss('Tertiary amines only', 'Tertiary amines have no N-H hydrogens and cannot form isocyanides, so they give no carbylamine test.', 'Tertiary amines lack the required N-H bonds.'),
      miss('All amines equally', 'Only primary amines respond; secondary and tertiary amines do not give the foul isocyanide smell.', 'The test distinguishes primary from secondary and tertiary amines.'),
    ],
    lesson: 'The carbylamine test is a specific qualitative test for primary amines: heating a primary amine with chloroform and alcoholic KOH gives an isocyanide (carbylamine) with an extremely offensive smell. Secondary and tertiary amines give no such product, so the test reliably distinguishes primary amines from the other two classes.',
    source,
    generated: true,
  },
  {
    id: 7970527,
    chapter: 'Chemistry: Biomolecules',
    title: 'Peptide bond',
    prompt: 'Amino acids link together in proteins through which type of bond?',
    correct: 'A peptide (amide) bond formed between a carboxyl and an amino group with loss of water',
    wrong: [
      miss('A glycosidic bond between two hydroxyl groups', 'Glycosidic bonds join sugar units in carbohydrates, not amino acids in proteins.', 'Glycosidic bonds belong to carbohydrate chemistry.'),
      miss('A phosphodiester bond', 'Phosphodiester bonds link nucleotides in nucleic acids (DNA/RNA), not amino acids.', 'Phosphodiester bonds are found in DNA and RNA.'),
      miss('A disulfide bond between two amino groups', 'Disulfide bonds form between cysteine thiol (-SH) side chains, not between amino groups, and they stabilise tertiary structure rather than form the backbone.', 'The backbone link is an amide, not a sulfur bridge.'),
    ],
    lesson: 'Proteins are polymers of amino acids joined by peptide bonds, which are amide linkages formed when the carboxyl group of one amino acid condenses with the amino group of the next, releasing water. This repeating amide backbone defines the protein\'s primary structure; disulfide bonds and hydrogen bonds then shape its higher-order folding.',
    source,
    generated: true,
  },
  // ============================================================
  // Mathematics: Coordinate Geometry (Conic Sections)
  // ============================================================
  {
    id: 7970528,
    chapter: 'Mathematics: Coordinate Geometry',
    title: 'Eccentricity of an ellipse',
    prompt: 'For the ellipse x^2/25 + y^2/16 = 1, what is the eccentricity?',
    correct: '3/5',
    wrong: [
      miss('4/5', 'This uses b/a, but eccentricity for an ellipse is e = sqrt(1 - b^2/a^2), giving 3/5 here, not 4/5.', 'Use e^2 = 1 - b^2/a^2 with a^2 = 25, b^2 = 16.'),
      miss('5/3', 'This exceeds 1, which is impossible for an ellipse; e must lie between 0 and 1.', 'An ellipse always has eccentricity less than 1.'),
      miss('9/25', 'This is e^2, the square of the eccentricity, not e itself.', 'Take the square root after finding e^2.'),
    ],
    lesson: 'For an ellipse x^2/a^2 + y^2/b^2 = 1 with a > b, the eccentricity is e = sqrt(1 - b^2/a^2). Here a^2 = 25, b^2 = 16, so e^2 = 1 - 16/25 = 9/25 and e = 3/5. The eccentricity of an ellipse is always between 0 (a circle) and 1; it equals 1 for a parabola and exceeds 1 for a hyperbola.',
    source,
    generated: true,
  },
  {
    id: 7970529,
    chapter: 'Mathematics: Coordinate Geometry',
    title: 'Focus of a parabola',
    prompt: 'What are the coordinates of the focus of the parabola y^2 = 12x?',
    correct: '(3, 0)',
    wrong: [
      miss('(0, 3)', 'The parabola y^2 = 12x opens along the x-axis, so its focus lies on the x-axis at (3, 0), not the y-axis.', 'For y^2 = 4ax the focus is on the x-axis.'),
      miss('(12, 0)', 'This uses 4a = 12 directly as the focus coordinate; instead solve 4a = 12 to get a = 3.', 'Compare with the standard form y^2 = 4ax.'),
      miss('(6, 0)', 'This takes half of 12 (treating 12 as 2a), but the standard form is y^2 = 4ax, so a = 3.', 'Match the coefficient to 4a, not 2a.'),
    ],
    lesson: 'Comparing y^2 = 12x with the standard form y^2 = 4ax gives 4a = 12, so a = 3. The parabola opens rightward with vertex at the origin, focus at (a, 0) = (3, 0), and directrix x = -3. The length of the latus rectum is 4a = 12.',
    source,
    generated: true,
  },
  // ============================================================
  // Mathematics: Integral Calculus
  // ============================================================
  {
    id: 7970530,
    chapter: 'Mathematics: Integral Calculus',
    title: 'Definite integral of sine',
    prompt: 'Evaluate the definite integral of sin(x) from 0 to pi.',
    correct: '2',
    wrong: [
      miss('0', 'This would be the integral of sin(x) over a full period from 0 to 2pi; over 0 to pi the sine is entirely positive.', 'Sketch sin(x) on [0, pi]: it stays above the axis.'),
      miss('1', 'This may come from evaluating only -cos(pi/2) or stopping the limits midway; complete the evaluation from 0 to pi.', 'Apply the limits: [-cos(x)] from 0 to pi.'),
      miss('-2', 'The antiderivative is -cos(x); evaluating it gives -cos(pi) - (-cos(0)) = 1 + 1 = +2, a positive area.', 'Watch the signs: -cos(pi) = +1 and -(-cos(0)) = +1.'),
    ],
    lesson: 'The antiderivative of sin(x) is -cos(x). Evaluating from 0 to pi gives [-cos(x)] from 0 to pi = -cos(pi) - (-cos(0)) = -(-1) - (-(1)) = 1 + 1 = 2. Geometrically this is the positive area under one arch of the sine curve, which equals exactly 2.',
    source,
    generated: true,
  },
  {
    id: 7970531,
    chapter: 'Mathematics: Integral Calculus',
    title: 'Integration by substitution',
    prompt: 'The integral of 2x times cos(x^2) dx with respect to x equals which expression (C is the constant of integration)?',
    correct: 'sin(x^2) + C',
    wrong: [
      miss('cos(x^2) + C', 'Differentiating cos(x^2) gives -2x sin(x^2), not the integrand; you must integrate, finding sin(x^2).', 'Check by differentiating your answer back.'),
      miss('x^2 sin(x^2) + C', 'This wrongly multiplies by x^2; the factor 2x is exactly the derivative of x^2 needed for the substitution u = x^2.', 'Let u = x^2 so that du = 2x dx.'),
      miss('-sin(x^2) + C', 'The sign is wrong: the integral of cos u is +sin u, so the result is +sin(x^2).', 'Recall that the antiderivative of cosine is positive sine.'),
    ],
    lesson: 'Substitute u = x^2, so du = 2x dx; the integral becomes the integral of cos(u) du = sin(u) + C = sin(x^2) + C. The presence of the 2x factor, which is exactly du/dx, signals that substitution will work cleanly. Always verify by differentiating: d/dx[sin(x^2)] = 2x cos(x^2).',
    source,
    generated: true,
  },
  // ============================================================
  // Mathematics: Differential Equations
  // ============================================================
  {
    id: 7970532,
    chapter: 'Mathematics: Differential Equations',
    title: 'Order and degree',
    prompt: 'What are the order and degree of the differential equation (d^2y/dx^2)^3 + (dy/dx)^2 + y = 0?',
    correct: 'Order 2, degree 3',
    wrong: [
      miss('Order 3, degree 2', 'The order is the highest derivative present (the second derivative, so order 2); the exponent on it (3) is the degree.', 'Order is the highest derivative; degree is its power.'),
      miss('Order 2, degree 2', 'The highest-order derivative d^2y/dx^2 is raised to the power 3, so the degree is 3, not 2.', 'Read the exponent on the highest derivative.'),
      miss('Order 1, degree 3', 'The presence of d^2y/dx^2 makes the order 2, not 1; do not confuse it with the first derivative term.', 'The second derivative sets the order at 2.'),
    ],
    lesson: 'The order of a differential equation is the order of the highest derivative it contains: here d^2y/dx^2 makes it order 2. The degree is the power of that highest-order derivative once the equation is polynomial in derivatives: here the second derivative is cubed, so the degree is 3. Degree is only defined when the equation is a polynomial in its derivatives.',
    source,
    generated: true,
  },
  // ============================================================
  // Mathematics: Vector Algebra and 3D Geometry
  // ============================================================
  {
    id: 7970533,
    chapter: 'Mathematics: Vector Algebra and 3D Geometry',
    title: 'Dot product and perpendicularity',
    prompt: 'For what value of k are the vectors a = 2i + 3j + k and b = i - 2j + k mutually perpendicular?',
    correct: 'k = 4',
    wrong: [
      miss('k = -4', 'Setting the dot product to zero gives 2 - 6 + k = 0, so k = 4, not -4; check the sign of the constant terms.', 'Compute 2(1) + 3(-2) + k(1) = 0.'),
      miss('k = 0', 'With k = 0 the dot product is 2 - 6 + 0 = -4, which is non-zero, so the vectors are not perpendicular.', 'The dot product must equal zero for perpendicularity.'),
      miss('k = 8', 'This doubles the correct value; solving 2 - 6 + k = 0 gives k = 4.', 'Solve the linear equation 2 - 6 + k = 0.'),
    ],
    lesson: 'Two vectors are perpendicular when their dot product is zero. Here a.b = (2)(1) + (3)(-2) + (k)(1) = 2 - 6 + k = k - 4. Setting this to zero gives k = 4. The dot product also gives the projection of one vector onto another and equals |a||b|cos(theta).',
    source,
    generated: true,
  },
  {
    id: 7970534,
    chapter: 'Mathematics: Vector Algebra and 3D Geometry',
    title: 'Direction cosines',
    prompt: 'A line has direction ratios 1, 2, 2. What is the direction cosine corresponding to the x-axis?',
    correct: '1/3',
    wrong: [
      miss('1', 'Direction ratios are not direction cosines; you must divide by the magnitude sqrt(1^2 + 2^2 + 2^2) = 3.', 'Normalise the direction ratios by their magnitude.'),
      miss('1/9', 'This divides by 9 (the magnitude squared) instead of by the magnitude 3.', 'Divide by sqrt of the sum of squares, which is 3, not 9.'),
      miss('1/5', 'This may come from dividing by 1 + 2 + 2 = 5 (the sum), but you must divide by the magnitude sqrt(1 + 4 + 4) = 3.', 'Use the square root of the sum of squares.'),
    ],
    lesson: 'Direction cosines are the direction ratios divided by their magnitude. The magnitude here is sqrt(1^2 + 2^2 + 2^2) = sqrt(9) = 3, so the direction cosines are (1/3, 2/3, 2/3). The x-axis direction cosine is l = 1/3. Direction cosines always satisfy l^2 + m^2 + n^2 = 1.',
    source,
    generated: true,
  },
  // ============================================================
  // Mathematics: Probability
  // ============================================================
  {
    id: 7970535,
    chapter: 'Mathematics: Probability',
    title: 'Conditional probability and independence',
    prompt: 'Two events A and B are independent with P(A) = 0.4 and P(B) = 0.5. What is P(A and B)?',
    correct: '0.2',
    wrong: [
      miss('0.9', 'This adds the probabilities; addition (minus the intersection) gives the union P(A or B), not the intersection.', 'For independent events multiply the probabilities.'),
      miss('0.45', 'This averages the two probabilities, which is not how the joint probability of independent events is found.', 'Use P(A and B) = P(A) x P(B) for independence.'),
      miss('0.1', 'This appears to multiply incorrectly; 0.4 x 0.5 = 0.20, not 0.10.', 'Carefully compute 0.4 times 0.5.'),
    ],
    lesson: 'For independent events the joint probability is the product: P(A and B) = P(A) x P(B) = 0.4 x 0.5 = 0.2. Independence means knowing one event occurred does not change the probability of the other, so P(A given B) = P(A). This contrasts with mutually exclusive events, where P(A and B) = 0.',
    source,
    generated: true,
  },
])

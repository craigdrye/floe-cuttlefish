import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe col-jee-main-prep-india top-up'

export const colJeeMainPrepIndiaHigh103TopUpBQuestions: Question[] = makeQuestionBank('High', [
  // ============================================================
  // Physics: Electrostatics
  // ============================================================
  {
    id: 7974500,
    chapter: 'Physics: Electrostatics',
    title: 'Equivalent capacitance in series',
    prompt: 'Two capacitors of 2 microfarad and 3 microfarad are connected in series. What is their equivalent capacitance?',
    correct: '1.2 microfarad',
    wrong: [
      miss('5 microfarad', 'This adds the capacitances, which is the rule for a parallel connection, not series.', 'In series the equivalent capacitance is smaller than the smallest capacitor.'),
      miss('6 microfarad', 'This multiplies the values without dividing by their sum, dropping the denominator of the product-over-sum rule.', 'Use 1/C = 1/C1 + 1/C2, then invert.'),
      miss('2.5 microfarad', 'This averages the two capacitances, which is not how series combination works.', 'Series capacitors combine like parallel resistors.'),
    ],
    lesson: 'For capacitors in series the reciprocals add: 1/C = 1/2 + 1/3 = 5/6, so C = 6/5 = 1.2 microfarad. Equivalently C = (C1 C2)/(C1 + C2) = (2 x 3)/(2 + 3) = 6/5. The series combination is always smaller than the smallest individual capacitor because the same charge sits across a larger total voltage.',
    source,
    generated: true,
  },
  {
    id: 7974501,
    chapter: 'Physics: Electrostatics',
    title: 'Potential energy of a dipole',
    prompt: 'An electric dipole of moment p is placed in a uniform field E. In which orientation is its potential energy maximum?',
    correct: 'Antiparallel to the field (theta = 180 degrees)',
    wrong: [
      miss('Parallel to the field (theta = 0 degrees)', 'When the dipole is aligned with the field U = -pE, which is the minimum (most stable) energy, not the maximum.', 'Recall U = -pE cos(theta); minimise means cos(theta) = +1.'),
      miss('Perpendicular to the field (theta = 90 degrees)', 'At 90 degrees U = -pE cos(90) = 0, an intermediate value, not the maximum.', 'Evaluate U = -pE cos(theta) at the three special angles.'),
      miss('It is the same in every orientation', 'The energy depends on orientation through cos(theta); a uniform field still does orientation-dependent work on a dipole.', 'A torque acts on the dipole, so energy must depend on angle.'),
    ],
    lesson: 'The potential energy of a dipole in a uniform field is U = -p . E = -pE cos(theta). It is minimum (-pE, stable) when the dipole aligns with the field at theta = 0, and maximum (+pE, unstable) when it points opposite the field at theta = 180 degrees. At theta = 90 degrees the energy is zero.',
    source,
    generated: true,
  },
  // ============================================================
  // Physics: Current Electricity
  // ============================================================
  {
    id: 7974502,
    chapter: 'Physics: Current Electricity',
    title: 'Terminal voltage of a cell',
    prompt: 'A cell of emf 12 V and internal resistance 0.5 ohm drives a current of 4 A through an external resistor. What is the terminal voltage across the cell?',
    correct: '10 V',
    wrong: [
      miss('12 V', 'This ignores the internal resistance; the terminal voltage equals the emf only when no current flows.', 'Subtract the internal voltage drop Ir from the emf.'),
      miss('14 V', 'This adds the internal drop instead of subtracting it; terminal voltage during discharge is below the emf.', 'During discharge V = E - Ir, a subtraction.'),
      miss('2 V', 'This computes only the internal voltage drop Ir = 4 x 0.5 = 2 V, not the terminal voltage.', 'The terminal voltage is what remains after the internal drop.'),
    ],
    lesson: 'When a cell delivers current, the terminal voltage is V = E - Ir = 12 - (4 x 0.5) = 12 - 2 = 10 V. The internal resistance causes a drop Ir inside the cell, so the voltage available to the external circuit is less than the emf. Only at open circuit (I = 0) does the terminal voltage equal the emf.',
    source,
    generated: true,
  },
  {
    id: 7974503,
    chapter: 'Physics: Current Electricity',
    title: 'Wheatstone bridge balance',
    prompt: 'In a balanced Wheatstone bridge with arms P, Q, R, S (galvanometer between the P-Q and R-S junctions), which condition must hold?',
    correct: 'P/Q = R/S',
    wrong: [
      miss('P/R = Q/S only if all resistances are equal', 'The balance condition P/Q = R/S holds for any values, not just equal ones; the equal-resistance case is just a special instance.', 'Write the no-current-through-galvanometer condition in general.'),
      miss('P + Q = R + S', 'Balance is about the ratio of arms, not their sums; sums do not determine the potential at the galvanometer junctions.', 'Equal potential at the two junctions gives a ratio, not a sum.'),
      miss('PQ = RS', 'A product condition does not follow from equal junction potentials; the correct relation is a ratio equality.', 'Set the potential drops equal and cross-multiply carefully.'),
    ],
    lesson: 'A Wheatstone bridge is balanced when no current flows through the galvanometer, which requires the potentials at its two ends to be equal. This gives the ratio condition P/Q = R/S (equivalently P/R = Q/S). The condition is independent of the supply voltage and lets an unknown resistance be found from three known ones.',
    source,
    generated: true,
  },
  // ============================================================
  // Physics: Magnetic Effects of Current and Magnetism
  // ============================================================
  {
    id: 7974504,
    chapter: 'Physics: Magnetic Effects of Current and Magnetism',
    title: 'Force on a current in a field',
    prompt: 'A straight wire of length 0.5 m carrying 4 A is placed perpendicular to a uniform magnetic field of 0.2 T. What is the magnetic force on the wire?',
    correct: '0.4 N',
    wrong: [
      miss('1.6 N', 'This omits the length factor or multiplies incorrectly; check F = BIL with all three factors.', 'Multiply B, I, and L together for a perpendicular wire.'),
      miss('0.04 N', 'This is off by a factor of ten, likely from mishandling the 0.2 and 0.5 decimals.', 'Compute 0.2 x 4 x 0.5 carefully.'),
      miss('2 N', 'This uses only B x I x (something) and drops or mis-substitutes the length; recheck the numbers.', 'F = BIL = 0.2 x 4 x 0.5.'),
    ],
    lesson: 'The force on a straight current-carrying wire in a magnetic field is F = BIL sin(theta). With the wire perpendicular to the field, sin(theta) = 1, so F = 0.2 x 4 x 0.5 = 0.4 N. The direction is given by the right-hand rule (or F = I L x B).',
    source,
    generated: true,
  },
  {
    id: 7974505,
    chapter: 'Physics: Magnetic Effects of Current and Magnetism',
    title: 'Radius of a charged particle in a field',
    prompt: 'A charged particle moving perpendicular to a magnetic field follows a circular path. If its speed is doubled while charge, mass and field stay fixed, how does the radius change?',
    correct: 'It doubles',
    wrong: [
      miss('It stays the same', 'The radius r = mv/(qB) depends on speed, so changing v must change r.', 'Write r in terms of v and see which factors are fixed.'),
      miss('It is halved', 'This gets the dependence backwards; r is proportional to v, not inversely proportional to it.', 'r increases with momentum mv.'),
      miss('It quadruples', 'r depends on v to the first power, not the square; that mistake comes from confusing with kinetic energy.', 'Use r = mv/(qB), which is linear in v.'),
    ],
    lesson: 'For circular motion in a magnetic field, the magnetic force qvB provides the centripetal force mv^2/r, giving r = mv/(qB). The radius is directly proportional to speed, so doubling v doubles r. The period T = 2 pi m/(qB), by contrast, is independent of speed.',
    source,
    generated: true,
  },
  // ============================================================
  // Physics: Electromagnetic Induction and AC
  // ============================================================
  {
    id: 7974506,
    chapter: 'Physics: Electromagnetic Induction and AC',
    title: 'RMS value of alternating current',
    prompt: 'An alternating current has a peak value of 10 A. What is its root-mean-square (rms) value?',
    correct: 'About 7.07 A',
    wrong: [
      miss('10 A', 'This is the peak value itself; the rms value of a sinusoid is smaller than the peak by a factor of root 2.', 'Divide the peak by root 2 for a sine wave.'),
      miss('5 A', 'This halves the peak, but the correct factor is 1/root 2 (about 0.707), not 1/2.', 'The rms factor for a sinusoid is 0.707, not 0.5.'),
      miss('14.14 A', 'This multiplies the peak by root 2 instead of dividing; rms must be less than the peak.', 'rms = peak / root 2, a division.'),
    ],
    lesson: 'For a sinusoidal alternating current, the rms value is the peak value divided by root 2: I_rms = I_0 / root(2) = 10 / 1.414 = 7.07 A. The rms value is the steady DC current that would dissipate the same average power in a resistor, which is why AC ratings are quoted as rms.',
    source,
    generated: true,
  },
  {
    id: 7974507,
    chapter: 'Physics: Electromagnetic Induction and AC',
    title: 'Resonance in a series LCR circuit',
    prompt: 'At the resonant frequency of a series LCR circuit, what is true about the impedance?',
    correct: 'The impedance is minimum and equals the resistance R',
    wrong: [
      miss('The impedance is maximum', 'In a series circuit resonance gives minimum impedance (maximum current); maximum impedance occurs at resonance only for a parallel circuit.', 'At series resonance the reactances cancel, leaving only R.'),
      miss('The impedance is zero', 'The inductive and capacitive reactances cancel, but the resistance R remains, so impedance is R, not zero.', 'Even at resonance the resistive part is still present.'),
      miss('The impedance equals X_L + X_C', 'At resonance X_L equals X_C and they subtract (being out of phase), so the net reactance is zero, not their sum.', 'Reactances of L and C oppose each other in phase.'),
    ],
    lesson: 'At resonance in a series LCR circuit, the inductive reactance equals the capacitive reactance (X_L = X_C), so they cancel and the net reactance is zero. The impedance Z = root(R^2 + (X_L - X_C)^2) then reduces to its minimum value R, producing maximum current. The resonant frequency is f = 1/(2 pi root(LC)).',
    source,
    generated: true,
  },
  // ============================================================
  // Physics: Ray and Wave Optics
  // ============================================================
  {
    id: 7974508,
    chapter: 'Physics: Ray and Wave Optics',
    title: 'Power of a converging lens',
    prompt: 'A converging lens has a focal length of 25 cm. What is its power in dioptres?',
    correct: '+4 D',
    wrong: [
      miss('+25 D', 'This uses the focal length in centimetres directly; power requires the focal length in metres.', 'Convert 25 cm to 0.25 m before taking the reciprocal.'),
      miss('-4 D', 'A converging (convex) lens has positive power; the negative sign would indicate a diverging lens.', 'Converging lenses have positive focal length and positive power.'),
      miss('+0.04 D', 'This takes the reciprocal of 25 (in cm) rather than 0.25 m, giving a value 100 times too small.', 'P = 1/f with f in metres, so 1/0.25.'),
    ],
    lesson: 'The power of a lens is P = 1/f, where f must be expressed in metres. Here f = 25 cm = 0.25 m, so P = 1/0.25 = +4 dioptres. Converging (convex) lenses have positive power, while diverging (concave) lenses have negative power.',
    source,
    generated: true,
  },
  {
    id: 7974509,
    chapter: 'Physics: Ray and Wave Optics',
    title: 'Fringe width in Young\'s double slit',
    prompt: 'In Young\'s double-slit experiment, how does the fringe width change if the separation between the two slits is doubled (everything else fixed)?',
    correct: 'It is halved',
    wrong: [
      miss('It doubles', 'Fringe width beta = lambda D/d is inversely proportional to slit separation d, so increasing d decreases the fringe width.', 'Check whether d appears in the numerator or denominator.'),
      miss('It stays the same', 'Fringe width depends on d through beta = lambda D/d, so changing d must change the fringes.', 'Write the fringe-width formula and identify the role of d.'),
      miss('It quadruples', 'Fringe width varies as 1/d to the first power, not as 1/d squared.', 'beta is proportional to 1/d, a linear inverse relation.'),
    ],
    lesson: 'In Young\'s experiment the fringe width is beta = lambda D/d, where lambda is wavelength, D is the slit-to-screen distance, and d is the slit separation. Because beta is inversely proportional to d, doubling the slit separation halves the fringe width. Wider slit separation packs the fringes closer together.',
    source,
    generated: true,
  },
  // ============================================================
  // Physics: Modern Physics (Dual Nature, Atoms and Nuclei)
  // ============================================================
  {
    id: 7974510,
    chapter: 'Physics: Dual Nature of Matter and Radiation',
    title: 'Photoelectric threshold',
    prompt: 'The work function of a metal is 2.0 eV. What is the maximum kinetic energy of photoelectrons ejected by photons of energy 5.0 eV?',
    correct: '3.0 eV',
    wrong: [
      miss('7.0 eV', 'This adds the work function to the photon energy; the work function is the cost of escaping and must be subtracted.', 'Use KE_max = photon energy minus work function.'),
      miss('5.0 eV', 'This ignores the work function entirely; some energy is always spent freeing the electron from the metal.', 'Subtract the energy needed to escape the surface.'),
      miss('2.5 eV', 'This halves the photon energy, which has no basis in the photoelectric equation.', 'Einstein\'s equation is KE = hf - phi, a subtraction.'),
    ],
    lesson: 'Einstein\'s photoelectric equation gives KE_max = hf - phi, where phi is the work function. Here KE_max = 5.0 - 2.0 = 3.0 eV. The work function is the minimum energy needed to liberate an electron from the metal surface; only photons with energy above phi can eject electrons.',
    source,
    generated: true,
  },
  {
    id: 7974511,
    chapter: 'Physics: Atoms and Nuclei',
    title: 'Radioactive half-life decay',
    prompt: 'A radioactive sample has a half-life of 4 days. What fraction of the original sample remains after 12 days?',
    correct: '1/8',
    wrong: [
      miss('1/3', 'This treats decay as linear (12 = 3 x 4 days, so one third left), but radioactive decay is exponential, not linear.', 'Each half-life multiplies the amount by 1/2.'),
      miss('1/6', 'This combines the wrong factors; after each half-life you multiply by 1/2, and there are three half-lives.', 'Count how many half-lives fit in 12 days, then apply 1/2 each time.'),
      miss('1/12', 'This wrongly takes the reciprocal of the elapsed days; decay depends on the number of half-lives.', '12 days is exactly three half-lives of 4 days.'),
    ],
    lesson: 'After n half-lives the remaining fraction is (1/2)^n. In 12 days there are 12/4 = 3 half-lives, so the fraction left is (1/2)^3 = 1/8. Radioactive decay is exponential, so equal time intervals each remove half of whatever is currently present, not a fixed amount.',
    source,
    generated: true,
  },
  // ============================================================
  // Physics: Oscillations and Waves
  // ============================================================
  {
    id: 7974512,
    chapter: 'Physics: Oscillations and Waves',
    title: 'Period of a simple pendulum',
    prompt: 'A simple pendulum has a certain period on Earth. If its length is increased to four times the original, how does the period change?',
    correct: 'It doubles',
    wrong: [
      miss('It quadruples', 'The period depends on the square root of the length, so a four-fold length change multiplies the period by 2, not 4.', 'T is proportional to root(L), not L.'),
      miss('It stays the same', 'The period of a pendulum depends on its length, so changing the length must change the period.', 'Recall T = 2 pi root(L/g).'),
      miss('It is halved', 'Increasing the length increases the period; halving would require a shorter pendulum.', 'Longer pendulums swing more slowly.'),
    ],
    lesson: 'The period of a simple pendulum is T = 2 pi root(L/g), so T is proportional to the square root of the length. Increasing L by a factor of 4 multiplies T by root(4) = 2. The period is independent of the bob mass and (for small swings) of the amplitude.',
    source,
    generated: true,
  },
  {
    id: 7974513,
    chapter: 'Physics: Oscillations and Waves',
    title: 'Beat frequency',
    prompt: 'Two tuning forks of frequencies 256 Hz and 260 Hz are sounded together. What beat frequency is heard?',
    correct: '4 Hz',
    wrong: [
      miss('516 Hz', 'This adds the two frequencies; beats arise from the difference, not the sum.', 'Beat frequency is the difference between the two frequencies.'),
      miss('258 Hz', 'This is the average of the two frequencies, which is the perceived pitch, not the beat rate.', 'The beat frequency is how often loudness rises and falls.'),
      miss('2 Hz', 'This halves the correct difference; the beat frequency equals the full difference between the frequencies.', 'Subtract 256 from 260 directly.'),
    ],
    lesson: 'When two notes of nearly equal frequency interfere, the loudness rises and falls at the beat frequency, which equals the magnitude of the difference of the two frequencies: |260 - 256| = 4 Hz. The ear hears a tone at the average frequency (258 Hz) modulated in amplitude four times per second.',
    source,
    generated: true,
  },
  // ============================================================
  // Physics: Kinetic Theory and Thermodynamics
  // ============================================================
  {
    id: 7974514,
    chapter: 'Physics: Kinetic Theory and Thermodynamics',
    title: 'Efficiency of a Carnot engine',
    prompt: 'A Carnot engine operates between a hot reservoir at 400 K and a cold reservoir at 300 K. What is its maximum efficiency?',
    correct: '25%',
    wrong: [
      miss('75%', 'This computes T_cold/T_hot = 300/400 instead of 1 - T_cold/T_hot; the ratio gives the heat rejected fraction, not efficiency.', 'Efficiency is 1 minus the temperature ratio.'),
      miss('33%', 'This uses (400-300)/300, dividing by the cold temperature instead of the hot temperature.', 'Divide the temperature difference by the hot reservoir temperature.'),
      miss('100 K', 'Efficiency is a dimensionless ratio (or percentage), not a temperature; this just reports the difference in kelvin.', 'Efficiency has no units; it is a fraction.'),
    ],
    lesson: 'The maximum (Carnot) efficiency is eta = 1 - T_cold/T_hot, with temperatures in kelvin. Here eta = 1 - 300/400 = 1 - 0.75 = 0.25, or 25%. No real engine working between these reservoirs can exceed this limit set by the second law of thermodynamics.',
    source,
    generated: true,
  },
  {
    id: 7974515,
    chapter: 'Physics: Kinetic Theory and Thermodynamics',
    title: 'Work done in an isothermal process',
    prompt: 'For an ideal gas undergoing a reversible isothermal expansion, which statement about the internal energy change is correct?',
    correct: 'The internal energy is unchanged, so all heat absorbed becomes work done by the gas',
    wrong: [
      miss('The internal energy increases because the gas expands', 'For an ideal gas internal energy depends only on temperature; in an isothermal process temperature, and hence internal energy, is constant.', 'Internal energy of an ideal gas is a function of T alone.'),
      miss('No heat is exchanged with the surroundings', 'That describes an adiabatic process; an isothermal expansion absorbs heat to keep temperature constant while doing work.', 'Isothermal means constant temperature, not zero heat flow.'),
      miss('The work done by the gas is zero', 'The gas expands against external pressure, so it does positive work; only an isochoric (constant-volume) process does no expansion work.', 'Expansion against pressure always does work.'),
    ],
    lesson: 'For an ideal gas, internal energy depends only on temperature, so an isothermal process has delta-U = 0. By the first law (Q = delta-U + W), all the heat absorbed equals the work done by the gas: Q = W = nRT ln(V2/V1). This contrasts with an adiabatic process, where Q = 0 and the temperature changes.',
    source,
    generated: true,
  },
  // ============================================================
  // Chemistry: Electrochemistry
  // ============================================================
  {
    id: 7974516,
    chapter: 'Chemistry: Electrochemistry',
    title: 'Standard cell potential',
    prompt: 'For the cell Zn | Zn2+ || Cu2+ | Cu, with standard reduction potentials E(Zn2+/Zn) = -0.76 V and E(Cu2+/Cu) = +0.34 V, what is the standard cell emf?',
    correct: '+1.10 V',
    wrong: [
      miss('-0.42 V', 'This adds the two reduction potentials; the correct emf is E(cathode) minus E(anode).', 'Use E_cell = E_cathode - E_anode.'),
      miss('+0.42 V', 'This subtracts in the wrong direction or sums magnitudes incorrectly; the copper electrode is the cathode.', 'The more positive electrode is the cathode.'),
      miss('-1.10 V', 'A spontaneous cell has positive emf; this gets the sign reversed by swapping cathode and anode.', 'Zinc is oxidised (anode); copper is reduced (cathode).'),
    ],
    lesson: 'The standard cell emf is E_cell = E_cathode - E_anode. Copper (higher reduction potential) is the cathode and zinc the anode, so E_cell = 0.34 - (-0.76) = 1.10 V. A positive emf confirms the reaction (Zn reducing Cu2+) is spontaneous as written.',
    source,
    generated: true,
  },
  {
    id: 7974517,
    chapter: 'Chemistry: Electrochemistry',
    title: 'Faraday\'s laws of electrolysis',
    prompt: 'A charge of 96500 C (one Faraday) is passed through molten aluminium chloride. Approximately what mass of aluminium (molar mass 27) is deposited?',
    correct: 'About 9 g',
    wrong: [
      miss('About 27 g', 'This assumes one mole of electrons deposits one mole of Al, but Al3+ requires three electrons per atom.', 'How many electrons are needed to reduce Al3+?'),
      miss('About 3 g', 'This divides the molar mass by 9 instead of by 3 (the number of electrons); only a factor of 3 applies.', 'The equivalent mass is molar mass divided by valency 3.'),
      miss('About 81 g', 'This multiplies by 3 instead of dividing; passing one Faraday deposits one mole of electrons worth of metal, fewer atoms for a higher charge.', 'More charge per atom means less metal per Faraday.'),
    ],
    lesson: 'By Faraday\'s law, one Faraday (96500 C) deposits one equivalent of substance. For Al3+ + 3e- to Al, three electrons are needed per atom, so the equivalent mass is 27/3 = 9 g. Hence one Faraday deposits about 9 g of aluminium.',
    source,
    generated: true,
  },
  // ============================================================
  // Chemistry: Chemical Kinetics
  // ============================================================
  {
    id: 7974518,
    chapter: 'Chemistry: Chemical Kinetics',
    title: 'Half-life of a first-order reaction',
    prompt: 'A first-order reaction has a rate constant k = 0.693 per minute. What is its half-life?',
    correct: '1 minute',
    wrong: [
      miss('0.693 minute', 'This sets the half-life equal to k itself; the relation is t(1/2) = 0.693/k, a division.', 'Divide 0.693 by the rate constant.'),
      miss('1.44 minutes', 'This takes the reciprocal of k (1/0.693), but the first-order half-life carries the factor ln 2 = 0.693.', 'Use t(1/2) = ln 2 / k, not 1/k.'),
      miss('It depends on the initial concentration', 'A defining feature of first-order kinetics is that the half-life is independent of initial concentration.', 'First-order half-life is constant throughout the reaction.'),
    ],
    lesson: 'For a first-order reaction the half-life is t(1/2) = ln 2 / k = 0.693/k. With k = 0.693 per minute, t(1/2) = 0.693/0.693 = 1 minute. A key property is that this half-life does not depend on the starting concentration, unlike zero- or second-order reactions.',
    source,
    generated: true,
  },
  {
    id: 7974519,
    chapter: 'Chemistry: Chemical Kinetics',
    title: 'Effect of temperature on rate',
    prompt: 'According to the Arrhenius equation, what mainly causes the rate constant to rise sharply when temperature increases?',
    correct: 'A larger fraction of molecules have energy exceeding the activation energy',
    wrong: [
      miss('The activation energy of the reaction decreases', 'Activation energy is essentially a fixed property of the reaction pathway; temperature changes the distribution of molecular energies, not Ea itself.', 'A catalyst lowers Ea; temperature does not.'),
      miss('The collisions become less frequent but more violent', 'Higher temperature increases collision frequency too, and the dominant effect is the exponential rise in molecules above Ea.', 'Think about the Boltzmann factor exp(-Ea/RT).'),
      miss('The enthalpy change of the reaction increases', 'The overall enthalpy change is the energy difference between products and reactants and does not control the rate constant.', 'Rate depends on the energy barrier, not the net enthalpy.'),
    ],
    lesson: 'The Arrhenius equation k = A exp(-Ea/RT) shows the rate constant grows with temperature mainly through the exponential factor: raising T increases the fraction of molecules whose energy exceeds the activation energy Ea. The activation energy itself stays fixed; only a catalyst lowers Ea by offering an alternative pathway.',
    source,
    generated: true,
  },
  // ============================================================
  // Chemistry: Coordination Compounds
  // ============================================================
  {
    id: 7974520,
    chapter: 'Chemistry: Coordination Compounds',
    title: 'Oxidation state of the central metal',
    prompt: 'What is the oxidation state of iron in the complex ion [Fe(CN)6]4-?',
    correct: '+2',
    wrong: [
      miss('+3', 'This would give a net charge of -3 for the ion (3 - 6), not the observed -4; recheck the charge balance.', 'Cyanide carries -1 each; balance to the overall -4 charge.'),
      miss('+4', 'A +4 iron with six -1 cyanides would give a net -2 charge, not -4.', 'Sum the ligand charges and the metal charge to match the ion charge.'),
      miss('-2', 'Iron in this complex is in a positive oxidation state; a negative value ignores that the ligands are the negatively charged part.', 'The six CN- ligands supply the negative charge.'),
    ],
    lesson: 'Each cyanide ligand carries a charge of -1, so six of them contribute -6. For the overall ion charge of -4, the iron must be x where x + (-6) = -4, giving x = +2. So iron is in the +2 oxidation state in the hexacyanoferrate(II) ion.',
    source,
    generated: true,
  },
  {
    id: 7974521,
    chapter: 'Chemistry: Coordination Compounds',
    title: 'Coordination number and geometry',
    prompt: 'In the complex [Co(NH3)6]3+, what are the coordination number of cobalt and the most common geometry?',
    correct: 'Coordination number 6, octahedral',
    wrong: [
      miss('Coordination number 3, trigonal planar', 'This confuses the oxidation state (+3) with the coordination number; there are six ammonia ligands.', 'Count the number of donor atoms bonded to the metal.'),
      miss('Coordination number 6, tetrahedral', 'A coordination number of 6 corresponds to octahedral geometry; tetrahedral applies to coordination number 4.', 'Match coordination number 6 with its standard shape.'),
      miss('Coordination number 4, square planar', 'There are six ammonia ligands, not four, so the coordination number is 6, not 4.', 'Each NH3 donates one lone pair; count all six.'),
    ],
    lesson: 'The coordination number is the number of ligand donor atoms directly bonded to the central metal. With six ammonia ligands, cobalt has coordination number 6, which gives an octahedral geometry. Do not confuse the coordination number (6) with the oxidation state of cobalt (+3).',
    source,
    generated: true,
  },
  // ============================================================
  // Chemistry: d- and f-Block Elements
  // ============================================================
  {
    id: 7974522,
    chapter: 'Chemistry: d- and f-Block Elements',
    title: 'Colour of transition metal ions',
    prompt: 'Why are most aqueous transition metal ions coloured while Zn2+ is colourless?',
    correct: 'Zn2+ has a fully filled d-subshell, so no d-d electronic transition is possible',
    wrong: [
      miss('Zn2+ is too small to absorb visible light', 'Ion size is not the determining factor for colour; the presence of partially filled d-orbitals is.', 'Look at the d-electron configuration of Zn2+.'),
      miss('Zn2+ has no electrons in any orbital', 'Zn2+ still has a full set of inner electrons, including a complete d-subshell; it is not bare.', 'Zn2+ is 3d10, a filled subshell.'),
      miss('Zinc is not a transition metal in any compound', 'While debatable in strict definitions, the colourlessness is explained by the filled d10 configuration, not by excluding zinc from the block.', 'Focus on the d-d transition requirement.'),
    ],
    lesson: 'Colour in transition metal ions arises from d-d electronic transitions, where an electron absorbs a photon of visible light to jump between split d-orbitals. This requires a partially filled d-subshell. Zn2+ is 3d10 (completely filled), so no d-d transition is possible and the ion appears colourless.',
    source,
    generated: true,
  },
  {
    id: 7974523,
    chapter: 'Chemistry: d- and f-Block Elements',
    title: 'Lanthanoid contraction',
    prompt: 'What is the main consequence of the lanthanoid contraction across the 4f series?',
    correct: 'Second and third transition series elements of the same group have very similar atomic and ionic radii',
    wrong: [
      miss('The atomic radii increase steadily across the lanthanoids', 'The contraction means radii decrease across the series, not increase, due to poor shielding by 4f electrons.', 'A contraction implies shrinking, not growing.'),
      miss('The lanthanoids all become strongly radioactive', 'Radioactivity is unrelated to the lanthanoid contraction, which is a size effect from f-orbital shielding.', 'The contraction is about atomic size, not nuclear stability.'),
      miss('The first transition series elements become much larger than expected', 'The contraction affects elements following the lanthanoids (the third series), making them similar to the second series.', 'The effect is felt by elements after the 4f series.'),
    ],
    lesson: 'The lanthanoid contraction is the steady decrease in size across the 4f series caused by the poor shielding of nuclear charge by 4f electrons. Its key consequence is that third-row transition metals (such as Hf, Ta, W) have radii very close to their second-row counterparts (Zr, Nb, Mo), making pairs like Zr and Hf chemically very similar and hard to separate.',
    source,
    generated: true,
  },
  // ============================================================
  // Chemistry: Haloalkanes and Haloarenes
  // ============================================================
  {
    id: 7974524,
    chapter: 'Chemistry: Haloalkanes and Haloarenes',
    title: 'SN1 versus SN2 reactivity',
    prompt: 'Which substrate reacts fastest by an SN1 mechanism?',
    correct: 'Tertiary butyl bromide (a tertiary halide)',
    wrong: [
      miss('Methyl bromide', 'Methyl halides react fastest by SN2, not SN1, because they form no stable carbocation and are sterically open.', 'SN1 rate depends on carbocation stability.'),
      miss('A primary halide such as 1-bromopropane', 'Primary halides favour SN2; their carbocations are too unstable for an SN1 path.', 'Primary carbocations are high in energy.'),
      miss('Vinyl bromide', 'Vinyl (and aryl) halides resist both SN1 and SN2 because the C-X bond is strengthened by partial double-bond character.', 'Vinyl halides are notoriously unreactive to substitution.'),
    ],
    lesson: 'SN1 reactions proceed through a carbocation intermediate, so they are fastest for substrates that form the most stable carbocation. Tertiary halides give stable tertiary carbocations and therefore react fastest by SN1. Methyl and primary halides, by contrast, favour the concerted SN2 pathway.',
    source,
    generated: true,
  },
  {
    id: 7974525,
    chapter: 'Chemistry: Haloalkanes and Haloarenes',
    title: 'Reactivity of aryl halides',
    prompt: 'Why is chlorobenzene much less reactive toward nucleophilic substitution than chloroethane?',
    correct: 'Resonance gives the C-Cl bond partial double-bond character, strengthening it',
    wrong: [
      miss('Chlorine is a better leaving group in chloroethane', 'The leaving group is chloride in both cases; the difference is the bond strength and ring stabilisation, not leaving-group ability.', 'The chloride leaving group is identical in both molecules.'),
      miss('The benzene ring is electron-poor and attracts nucleophiles strongly', 'The aromatic ring is electron-rich and repels nucleophiles, which further hinders substitution.', 'Aromatic rings repel, not attract, nucleophiles.'),
      miss('Chlorobenzene has a much weaker carbon-chlorine bond', 'The bond is actually stronger in chlorobenzene due to resonance and sp2 character, which is why it resists substitution.', 'A stronger, not weaker, bond explains the low reactivity.'),
    ],
    lesson: 'In chlorobenzene the lone pairs on chlorine delocalise into the aromatic ring, giving the C-Cl bond partial double-bond character. This shortens and strengthens the bond, and the carbon is sp2 hybridised, both of which make nucleophilic substitution far harder than in an sp3 alkyl halide like chloroethane.',
    source,
    generated: true,
  },
  // ============================================================
  // Chemistry: Aldehydes, Ketones and Carboxylic Acids
  // ============================================================
  {
    id: 7974526,
    chapter: 'Chemistry: Aldehydes, Ketones and Carboxylic Acids',
    title: 'Distinguishing aldehydes from ketones',
    prompt: 'Which reagent gives a positive (silver mirror) test with aldehydes but not with ketones?',
    correct: 'Tollens\' reagent (ammoniacal silver nitrate)',
    wrong: [
      miss('Bromine water', 'Bromine water tests for unsaturation (alkenes) or phenols, not specifically for the aldehyde group versus ketones.', 'Think of the classic silver mirror test.'),
      miss('Sodium bicarbonate solution', 'Sodium bicarbonate reacts with carboxylic acids to release CO2, not with aldehydes to form a silver mirror.', 'Bicarbonate detects acids, not aldehydes.'),
      miss('Neutral ferric chloride', 'Ferric chloride gives colours with phenols, not a silver mirror with aldehydes.', 'Ferric chloride is a phenol test.'),
    ],
    lesson: 'Aldehydes are readily oxidised, while ketones generally are not. Tollens\' reagent (ammoniacal silver nitrate) is reduced by aldehydes, depositing metallic silver as a mirror on the glass, giving a positive test. Ketones do not reduce Tollens\' reagent, so the test distinguishes the two carbonyl classes.',
    source,
    generated: true,
  },
  {
    id: 7974527,
    chapter: 'Chemistry: Aldehydes, Ketones and Carboxylic Acids',
    title: 'Acidity of carboxylic acids',
    prompt: 'Why is trichloroacetic acid (CCl3COOH) a stronger acid than acetic acid (CH3COOH)?',
    correct: 'The electron-withdrawing chlorine atoms stabilise the carboxylate anion through an inductive effect',
    wrong: [
      miss('Chlorine atoms donate electrons to the carboxyl group', 'Chlorine is electron-withdrawing, not electron-donating; donating electrons would destabilise the anion and weaken the acid.', 'Consider whether Cl pulls or pushes electron density.'),
      miss('The larger molecule simply has more hydrogen atoms to lose', 'Acidity here concerns the single carboxyl proton, not the number of hydrogens; the extra Cl atoms do not add acidic protons.', 'Both acids ionise at the same -COOH proton.'),
      miss('Trichloroacetic acid forms stronger hydrogen bonds with water', 'The acidity difference is governed by anion stability via induction, not by hydrogen bonding to solvent.', 'Focus on how Cl affects the conjugate base.'),
    ],
    lesson: 'Acid strength depends on the stability of the conjugate base. The three electron-withdrawing chlorine atoms in trichloroacetic acid pull electron density away through the inductive effect, dispersing the negative charge on the carboxylate and stabilising it. A more stable anion means a stronger acid, so CCl3COOH is far more acidic than CH3COOH.',
    source,
    generated: true,
  },
  // ============================================================
  // Chemistry: Biomolecules
  // ============================================================
  {
    id: 7974528,
    chapter: 'Chemistry: Biomolecules',
    title: 'Glycosidic linkage in disaccharides',
    prompt: 'In sucrose, the two monosaccharide units glucose and fructose are joined by which type of bond?',
    correct: 'A glycosidic linkage between their anomeric carbons',
    wrong: [
      miss('A peptide bond', 'Peptide bonds link amino acids in proteins, not sugar units; carbohydrates use glycosidic linkages.', 'Peptide bonds belong to proteins, not sugars.'),
      miss('An ester bond between two carboxyl groups', 'Monosaccharides such as glucose and fructose lack carboxyl groups to form a simple sugar-sugar ester; they connect via glycosidic bonds.', 'Sugars link through their hydroxyl and anomeric carbons.'),
      miss('A disulphide bridge', 'Disulphide bridges link cysteine residues in proteins; they have no role in joining sugar molecules.', 'Disulphide bonds involve sulphur in proteins.'),
    ],
    lesson: 'Monosaccharides are joined into disaccharides and polysaccharides by glycosidic linkages, formed by a condensation reaction between hydroxyl groups (often involving the anomeric carbon). In sucrose, the linkage joins the anomeric carbons of glucose and fructose, which is why sucrose is a non-reducing sugar.',
    source,
    generated: true,
  },
  // ============================================================
  // Mathematics: Coordinate Geometry
  // ============================================================
  {
    id: 7974529,
    chapter: 'Mathematics: Coordinate Geometry',
    title: 'Distance of a point from a line',
    prompt: 'What is the perpendicular distance from the point (1, 2) to the line 3x + 4y - 10 = 0?',
    correct: '1/5',
    wrong: [
      miss('1', 'This omits dividing by root(3^2 + 4^2) = 5; the numerator alone is not the distance.', 'Divide the substituted value by the square root of the sum of squares of the coefficients.'),
      miss('5', 'This inverts the formula, multiplying by 5 instead of dividing by it.', 'The denominator root(a^2+b^2) goes underneath, so you divide.'),
      miss('11/5', 'This mishandles the sign of the constant term; substitute carefully into 3(1)+4(2)-10.', 'Compute 3(1) + 4(2) - 10 = 1, then take the absolute value.'),
    ],
    lesson: 'The distance from a point (x0, y0) to the line ax + by + c = 0 is |a x0 + b y0 + c| / root(a^2 + b^2). Substituting: |3(1) + 4(2) - 10| / root(9 + 16) = |3 + 8 - 10| / 5 = |1| / 5 = 1/5.',
    source,
    generated: true,
  },
  {
    id: 7974530,
    chapter: 'Mathematics: Coordinate Geometry',
    title: 'Eccentricity of an ellipse',
    prompt: 'For the ellipse x^2/25 + y^2/9 = 1, what is the eccentricity?',
    correct: '4/5',
    wrong: [
      miss('3/5', 'This uses b/a or computes root(1 - a^2/b^2) by swapping a and b; for an ellipse e = root(1 - b^2/a^2).', 'Identify a^2 = 25 (larger) and b^2 = 9 (smaller).'),
      miss('5/4', 'Eccentricity of an ellipse is always less than 1; a value above 1 would describe a hyperbola.', 'An ellipse has 0 < e < 1.'),
      miss('16/25', 'This is e^2, not e; the question asks for the eccentricity itself.', 'Take the square root after finding 1 - b^2/a^2.'),
    ],
    lesson: 'For an ellipse x^2/a^2 + y^2/b^2 = 1 with a > b, the eccentricity is e = root(1 - b^2/a^2). Here a^2 = 25, b^2 = 9, so e = root(1 - 9/25) = root(16/25) = 4/5. The eccentricity of an ellipse always lies strictly between 0 and 1.',
    source,
    generated: true,
  },
  // ============================================================
  // Mathematics: Differential Calculus
  // ============================================================
  {
    id: 7974531,
    chapter: 'Mathematics: Differential Calculus',
    title: 'Derivative and local extrema',
    prompt: 'The function f(x) = x^3 - 3x has stationary points where f\'(x) = 0. At x = 1, what type of point is it?',
    correct: 'A local minimum',
    wrong: [
      miss('A local maximum', 'The second derivative f\'\'(x) = 6x is positive at x = 1, indicating a minimum, not a maximum.', 'Check the sign of f\'\'(1).'),
      miss('A point of inflection', 'An inflection requires f\'\'(x) = 0 with a sign change; here f\'\'(1) = 6 is non-zero, so it is a genuine extremum.', 'Inflection points need the second derivative to vanish.'),
      miss('Not a stationary point at all', 'f\'(x) = 3x^2 - 3, and f\'(1) = 0, so x = 1 is indeed stationary.', 'Substitute x = 1 into the first derivative.'),
    ],
    lesson: 'Differentiating, f\'(x) = 3x^2 - 3, which is zero at x = ±1. The second derivative is f\'\'(x) = 6x; at x = 1, f\'\'(1) = 6 > 0, so the curve is concave up there, making x = 1 a local minimum. (At x = -1, f\'\'(-1) = -6 < 0, a local maximum.)',
    source,
    generated: true,
  },
  // ============================================================
  // Mathematics: Integral Calculus
  // ============================================================
  {
    id: 7974532,
    chapter: 'Mathematics: Integral Calculus',
    title: 'Definite integral of a polynomial',
    prompt: 'Evaluate the definite integral of 2x from x = 0 to x = 3.',
    correct: '9',
    wrong: [
      miss('6', 'This evaluates the integrand 2x at x = 3 instead of integrating; integrating 2x gives x^2.', 'Find the antiderivative first, then apply the limits.'),
      miss('18', 'This forgets to halve, or integrates 2x to 2x^2 instead of x^2.', 'The integral of 2x is x^2, not 2x^2.'),
      miss('3', 'This appears to integrate incorrectly or just take the difference of limits; recompute the antiderivative.', 'Antiderivative of 2x is x^2; evaluate at 3 and 0.'),
    ],
    lesson: 'The antiderivative of 2x is x^2. Evaluating from 0 to 3 gives [x^2] from 0 to 3 = 3^2 - 0^2 = 9 - 0 = 9. Geometrically this is the area under the line y = 2x between x = 0 and x = 3, a triangle of base 3 and height 6, giving area 9.',
    source,
    generated: true,
  },
  // ============================================================
  // Mathematics: Vector Algebra and 3D Geometry
  // ============================================================
  {
    id: 7974533,
    chapter: 'Mathematics: Vector Algebra and 3D Geometry',
    title: 'Scalar (dot) product and angle',
    prompt: 'Two vectors a and b each have magnitude 2, and their dot product is 2. What is the angle between them?',
    correct: '60 degrees',
    wrong: [
      miss('30 degrees', 'This comes from taking cos(theta) = root(3)/2 by mistake; here cos(theta) = 1/2, giving 60 degrees.', 'Compute cos(theta) = (a.b)/(|a||b|) first.'),
      miss('90 degrees', 'A 90-degree angle would require the dot product to be zero, but here it equals 2.', 'Perpendicular vectors have a zero dot product.'),
      miss('45 degrees', 'This would need cos(theta) = 1/root(2), but the calculation gives cos(theta) = 1/2.', 'Find cos(theta) = 2/(2 x 2) = 1/2.'),
    ],
    lesson: 'The dot product satisfies a.b = |a||b| cos(theta). Rearranging, cos(theta) = (a.b)/(|a||b|) = 2/(2 x 2) = 2/4 = 1/2. The angle whose cosine is 1/2 is 60 degrees.',
    source,
    generated: true,
  },
  // ============================================================
  // Mathematics: Matrices and Determinants
  // ============================================================
  {
    id: 7974534,
    chapter: 'Mathematics: Matrices and Determinants',
    title: 'Determinant of a 2x2 matrix',
    prompt: 'What is the determinant of the matrix with first row (3, 5) and second row (2, 4)?',
    correct: '2',
    wrong: [
      miss('22', 'This adds the products of the diagonals (12 + 10) instead of subtracting; a determinant uses a difference.', 'The 2x2 determinant is ad - bc, a subtraction.'),
      miss('12', 'This is only the product of the main diagonal (3 x 4) and ignores the other term.', 'Subtract the off-diagonal product bc from ad.'),
      miss('-2', 'This subtracts in the wrong order (bc - ad); the determinant is ad - bc.', 'Take main-diagonal product minus off-diagonal product.'),
    ],
    lesson: 'For a 2x2 matrix with entries a, b in the top row and c, d in the bottom row, the determinant is ad - bc. Here that is (3)(4) - (5)(2) = 12 - 10 = 2. A non-zero determinant means the matrix is invertible.',
    source,
    generated: true,
  },
  // ============================================================
  // Mathematics: Probability
  // ============================================================
  {
    id: 7974535,
    chapter: 'Mathematics: Probability',
    title: 'Conditional probability',
    prompt: 'Two fair dice are rolled. Given that the sum is 7, what is the probability that one of the dice shows a 2?',
    correct: '1/3',
    wrong: [
      miss('1/6', 'This is the probability of rolling a 2 on one die unconditionally, ignoring the given condition that the sum is 7.', 'Restrict the sample space to outcomes summing to 7.'),
      miss('2/6', 'This counts a 2 appearing among all dice without conditioning on the sum being 7.', 'Only outcomes with sum 7 belong in the reduced sample space.'),
      miss('1/2', 'This overcounts; among the six equally likely ordered pairs summing to 7, only two contain a 2.', 'List the pairs summing to 7 and count those with a 2.'),
    ],
    lesson: 'Given the sum is 7, the equally likely ordered outcomes are (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) - six in all. Those containing a 2 are (2,5) and (5,2), which is 2 of the 6. So the conditional probability is 2/6 = 1/3. Conditioning shrinks the sample space to only those outcomes consistent with the given information.',
    source,
    generated: true,
  },
])

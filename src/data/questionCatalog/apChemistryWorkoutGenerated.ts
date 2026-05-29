import { makeQuestionBank } from './base'
import { polish as runPolish } from './polishPipeline'
import {
  AP_WORKOUT_SCIENCE_SUB_TOPICS,
  AP_WORKOUT_SCIENCE_MENTOR_HINTS,
  AP_WORKOUT_SCIENCE_CORRECT_SHORTENED,
} from './apWorkoutSciencePolish'

// Wave 4 HS Sciences (2026-05-18): canonical AP Chemistry bank. Merged from:
//   - apChemistryWorkoutGenerated (drill set, 50 Q, IDs 400001-400050)
//   - apChemistryExamBatch (exam-style set, 10 Q, IDs 446001-446010)
//   - Multistep calculation additions to address audit's "definition-heavy, calculation-light" finding
//     (Hess's law, calorimetry, ICE/Ka, EMF; new IDs 4300100-4300108)
//   - Chapter 8 (FRQ / particulate diagrams / data tables) additions (new IDs 4300120-4300130)
// Per-distractor explanations throughout. No DEFAULT_FLAW. Chapter labels aligned to AP Chemistry CED.

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
    'Floe-native AP Chemistry drill or exam item. Distractors carry per-option explanations and rebound hints. Chapter labels match the AP Chemistry Course and Exam Description.',
  source: 'Floe AP Chemistry coverage (merged 2026-05-18)',
})

const _baseApChemistryWorkoutGeneratedQuestions = makeQuestionBank('Science', [
  // ---- Chapter 1: Practices and Atomic Structure ----
  q(400001, 'Atomic Structure', 'Protons identify element', 'The number of protons in an atom determines its:', 'Element identity', [
    miss('Mass number only', 'Mass number includes protons plus neutrons.', 'Atomic number identifies the element.'),
    miss('Charge only', 'Charge changes with electrons, not protons alone.', 'Use atomic number.'),
    miss('Physical state only', 'State depends on conditions and bonding.', 'Element identity is proton count.'),
  ]),
  q(400002, 'Atomic Structure', 'Isotopes', 'Isotopes of the same element differ in their number of:', 'Neutrons', [
    miss('Protons', 'Changing protons changes the element.', 'Same element means same proton count.'),
    miss('Electrons only', 'Different electrons make ions.', 'Isotopes are nuclear.'),
    miss('Bonds', 'Bonding does not define isotopes.', 'Look inside the nucleus.'),
  ]),
  q(400003, 'Atomic Structure', 'Ion charge from electron loss', 'A neutral atom that loses two electrons becomes:', 'A 2+ ion', [
    miss('A 2- ion', 'Losing negative charge makes the ion positive.', 'Remove electrons.'),
    miss('A neutral isotope', 'Electron loss changes charge, not isotope.', 'Ions involve electrons.'),
    miss('A new element', 'Proton count did not change.', 'Element identity stays fixed.'),
  ]),
  q(400004, 'Atomic Structure', 'Mass number', 'Mass number equals:', 'Protons plus neutrons', [
    miss('Protons plus electrons', 'Electrons contribute little mass and are not counted in mass number.', 'Use nucleus particles.'),
    miss('Neutrons minus protons', 'Mass number is a sum.', 'Add nucleons.'),
    miss('Electrons only', 'Electrons do not define mass number.', 'Look at the nucleus.'),
  ]),
  q(400005, 'Atomic Structure', 'Valence electrons', 'Valence electrons occupy:', 'The outermost occupied shell', [
    miss('The nucleus', 'Electrons are outside the nucleus.', 'Valence concerns bonding.'),
    miss('Only the first shell always', 'Valence shell depends on the atom.', 'Use outermost occupied shell.'),
    miss('Neutrons', 'Neutrons are not electrons.', 'Stay with electron arrangement.'),
  ]),

  // ---- Chapter 2: Periodicity, Bonding, and Molecular Structure ----
  q(400006, 'Periodicity', 'Atomic radius trend', 'Across a period from left to right, atomic radius generally:', 'Decreases as effective nuclear charge increases', [
    miss('Increases', 'Effective nuclear charge pulls electrons closer.', 'Across a row, attraction increases.'),
    miss('Stays exactly constant', 'Periodic trends change across rows.', 'Think nuclear charge.'),
    miss('Becomes infinite', 'Atoms remain finite.', 'Use trend direction.'),
  ]),
  q(400007, 'Periodicity', 'Ionization energy', 'Ionization energy is the energy required to:', 'Remove an electron from a gaseous atom or ion', [
    miss('Add a neutron', 'That is nuclear, not ionization.', 'Ionization involves electrons.'),
    miss('Break a molecule into protons', 'Too extreme and not the definition.', 'Remove one electron.'),
    miss('Condense a gas', 'Phase change is unrelated.', 'Think electron removal.'),
  ]),
  q(400008, 'Periodicity', 'Electronegativity', 'Electronegativity measures an atom\'s tendency to:', 'Attract shared electrons in a bond', [
    miss('Repel all electrons', 'Electronegativity is attraction, not repulsion.', 'Shared electrons are key.'),
    miss('Gain neutrons', 'Neutrons are nuclear.', 'Bonding uses electrons.'),
    miss('Increase temperature', 'Not a thermal property.', 'Use bonding attraction.'),
  ]),
  q(400009, 'Bonding', 'Ionic bonding', 'An ionic bond is best described as attraction between:', 'Oppositely charged ions formed by electron transfer', [
    miss('Two nuclei sharing neutrons', 'Bonding does not share neutrons.', 'Ionic means charges.'),
    miss('Identical neutral atoms only', 'Ionic bonding needs ions.', 'Opposite charges attract.'),
    miss('Electrons and photons', 'That is not ionic bonding.', 'Use cations and anions.'),
  ]),
  q(400010, 'Bonding', 'Covalent bonding', 'A covalent bond involves:', 'Sharing of one or more electron pairs between atoms', [
    miss('Transferring only neutrons', 'Neutrons are not transferred in bonds.', 'Covalent means shared electrons.'),
    miss('Only metal cations in a sea of electrons', 'That describes metallic bonding.', 'Use shared pairs.'),
    miss('No electrons at all', 'Electrons create chemical bonds.', 'Focus on valence electrons.'),
  ]),
  q(400011, 'Bonding', 'Polar covalent', 'A polar covalent bond forms when bonded atoms have:', 'Unequal attraction for the shared electrons', [
    miss('Exactly equal electronegativity', 'Equal attraction makes nonpolar covalent.', 'Polarity comes from imbalance.'),
    miss('No electrons', 'Covalent bonds share electrons.', 'Compare electronegativity.'),
    miss('Identical charges only', 'Bond polarity is not identical charge.', 'Use electron distribution.'),
  ]),
  q(400012, 'Bonding', 'Lewis dot diagram', 'Lewis dot structures primarily show:', 'Valence electrons and bonding/lone pairs around atoms', [
    miss('Only neutrons', 'Lewis structures track valence electrons.', 'Dots are electrons.'),
    miss('Exact 3D motion of atoms', 'Lewis structures are simplified.', 'Not dynamics.'),
    miss('Nuclear binding energy', 'That is nuclear chemistry.', 'Use valence shell.'),
  ]),
  q(400013, 'Bonding', 'Octet rule', 'The octet rule predicts that many main-group atoms tend to:', 'Achieve eight valence electrons in their outer shell', [
    miss('Have eight protons', 'That would specify oxygen only.', 'Octet concerns valence electrons.'),
    miss('Lose all electrons', 'Atoms generally seek stable valence configurations.', 'Eight in outer shell.'),
    miss('Form exactly eight bonds', 'Eight electrons is not eight bonds.', 'Count electrons, not bonds.'),
  ]),
  q(446006, 'Bonding', 'Ionic bonding mechanism', 'An ionic bond most directly involves:', 'Transfer of electrons between atoms, followed by electrostatic attraction', [
    miss('Equal sharing of electrons between identical atoms', 'That describes nonpolar covalent bonding.', 'Ionic bonding creates ions.'),
    miss('Temporary dipoles only between neutral molecules', 'That describes dispersion forces, not ionic bonds.', 'Think charged particles.'),
    miss('Metal atoms floating in an electron sea only', 'That describes metallic bonding.', 'Use cation-anion attraction.'),
  ]),

  // ---- Chapter 3: Intermolecular Forces and Properties ----
  q(446007, 'Intermolecular Forces', 'Hydrogen bonding', 'Which substance can form hydrogen bonds between its molecules?', 'H2O', [
    miss('CH4', 'Methane lacks H bonded to N, O, or F.', 'Hydrogen bonding needs a very electronegative partner.'),
    miss('CO2', 'Carbon dioxide has no hydrogen atoms.', 'Check the formula first.'),
    miss('He', 'Helium atoms do not hydrogen bond.', 'Hydrogen bonding requires hydrogen attached to N, O, or F.'),
  ]),

  // ---- Chapter 4: Reactions and Stoichiometry ----
  q(400014, 'Stoichiometry', 'Mole count', 'How many particles are in one mole?', '6.022 x 10^23', [
    miss('6.022 x 10^-23', 'The exponent sign is wrong.', 'Avogadro\'s number is huge.'),
    miss('1 particle', 'A mole is a large counting unit.', 'Think dozen, but enormous.'),
    miss('22.4 particles', '22.4 L is a gas-volume fact at STP, not particle count.', 'Use Avogadro number.'),
  ]),
  q(400015, 'Stoichiometry', 'Molar mass unit', 'Molar mass is measured in:', 'g/mol', [
    miss('mol/g', 'That is the reciprocal of molar mass.', 'Mass per mole.'),
    miss('L/s', 'That is not mass per amount.', 'Use grams and moles.'),
    miss('J/K', 'That is entropy/heat-capacity style.', 'Molar mass uses mass units.'),
  ]),
  q(400016, 'Stoichiometry', 'Conservation in equations', 'A balanced chemical equation conserves:', 'Atoms of each element', [
    miss('Only total charge and not atoms', 'Charge matters in ionic equations, but balancing conserves atoms.', 'Count each element.'),
    miss('Molecule names only', 'Names are not conserved quantities.', 'Use atom counts.'),
    miss('Color of reactants', 'Color can change.', 'Matter conservation means atoms.'),
  ]),
  q(400017, 'Stoichiometry', 'Limiting reactant', 'The limiting reactant is the reactant that:', 'Runs out first and therefore limits the amount of product formed', [
    miss('Has the largest molar mass', 'Largest molar mass does not determine limiting status.', 'Compare stoichiometric amounts.'),
    miss('Is written first always', 'Order in the equation is irrelevant.', 'Use mole ratios.'),
    miss('Is never consumed', 'Reactants are consumed.', 'Limiting means exhausted first.'),
  ]),
  q(400018, 'Stoichiometry', 'Percent yield formula', 'Percent yield equals:', '(Actual yield / theoretical yield) x 100%', [
    miss('Theoretical / actual x 100%', 'The ratio is inverted.', 'Actual performance over maximum predicted.'),
    miss('Actual + theoretical', 'Percent yield is a ratio.', 'Divide then multiply by 100.'),
    miss('Moles / liters', 'That is concentration-related.', 'Use yields.'),
  ]),
  q(446001, 'Stoichiometry', 'Mole ratio calc', 'For 2H2 + O2 -> 2H2O, how many moles of H2O form from 4 moles of H2 with excess O2?', '4 moles', [
    miss('2 moles', 'That treats the coefficient of H2 as limiting the product incorrectly.', 'H2 and H2O have a 2:2 ratio.'),
    miss('8 moles', 'That doubles the amount without using the balanced ratio.', 'Use coefficients as mole ratios.'),
    miss('1 mole', 'That uses oxygen\'s coefficient, but O2 is excess.', 'Start from H2.'),
  ]),

  // ---- Gases (Chapter 4 cont.) ----
  q(400019, 'Gases', 'Ideal gas law', 'The ideal gas law is:', 'PV = nRT', [
    miss('P = nR/T', 'Volume is missing and the arrangement is wrong.', 'Pressure times volume.'),
    miss('V = IR', 'That is Ohm\'s law.', 'Use gas variables.'),
    miss('PV = mgh', 'mgh is potential energy.', 'Recall PV=nRT.'),
  ]),
  q(400020, 'Gases', 'Boyle\'s law direction', 'At constant temperature and moles, pressure and volume are:', 'Inversely proportional (PV = constant)', [
    miss('Directly proportional', 'As volume decreases, pressure increases.', 'Think compression.'),
    miss('Unrelated', 'Boyle\'s law links them.', 'PV constant.'),
    miss('Always equal', 'They have different units.', 'Use inverse relationship.'),
  ]),
  q(400021, 'Gases', 'Kelvin requirement', 'Gas-law temperature should be measured in:', 'Kelvin (an absolute temperature scale)', [
    miss('Celsius only', 'Gas laws need absolute temperature.', 'Convert to Kelvin.'),
    miss('Grams', 'Grams measure mass.', 'Temperature unit needed.'),
    miss('Moles', 'Moles measure amount.', 'Use absolute temperature.'),
  ]),
  q(446009, 'Gases', 'Boyle qualitative', 'At constant temperature, if gas volume decreases, what happens to pressure?', 'Pressure increases', [
    miss('Pressure decreases', 'Boyle\'s law gives an inverse relationship.', 'Smaller volume means more wall collisions per area.'),
    miss('Pressure stays fixed for all gases', 'At constant temperature, pressure changes when volume changes.', 'Use PV = constant.'),
    miss('Temperature must double', 'Temperature is held constant in the prompt.', 'Do not change a controlled variable.'),
  ]),

  // ---- Chapter 5: Kinetics ----
  q(400025, 'Kinetics', 'Reaction rate definition', 'Reaction rate measures how fast:', 'Reactant concentrations decrease or product concentrations increase per unit time', [
    miss('Atoms disappear from the universe', 'Atoms are conserved.', 'Track concentration changes.'),
    miss('The periodic table changes', 'The table does not change during a reaction.', 'Use concentration per time.'),
    miss('Molar mass changes', 'Molar masses are fixed for substances.', 'Rate is time-based.'),
  ]),
  q(400026, 'Kinetics', 'Catalyst mechanism', 'A catalyst speeds a reaction by:', 'Providing a lower-activation-energy pathway', [
    miss('Increasing reactant mass', 'Catalysts do not add mass.', 'They change pathway.'),
    miss('Being consumed permanently', 'Catalysts are regenerated overall.', 'Not consumed net.'),
    miss('Raising activation energy', 'That would slow the reaction.', 'Lower barrier.'),
  ]),
  q(400027, 'Kinetics', 'Activation energy', 'Activation energy is:', 'The minimum energy barrier reactants must overcome to react', [
    miss('The energy released by all products only', 'That is not the barrier definition.', 'Think hill before reaction proceeds.'),
    miss('The mass of a catalyst', 'Not mass.', 'It is an energy threshold.'),
    miss('The final temperature always', 'Temperature affects rates but is not activation energy.', 'Use barrier idea.'),
  ]),
  q(400028, 'Kinetics', 'Temperature effect', 'Higher temperature usually increases reaction rate because particles:', 'Move faster and a larger fraction exceed the activation energy', [
    miss('Stop moving', 'Higher temperature increases kinetic energy.', 'Particles move faster.'),
    miss('Lose all electrons', 'Temperature does not generally ionize everything.', 'Use collisions.'),
    miss('Become heavier', 'Mass does not increase.', 'Energy distribution shifts.'),
  ]),
  q(446008, 'Kinetics', 'Catalyst pathway', 'What does a catalyst do?', 'Provides an alternative pathway with lower activation energy', [
    miss('Raises the activation energy', 'Catalysts lower activation energy.', 'Think faster reaction path.'),
    miss('Changes the overall balanced equation', 'Catalysts are not consumed in the net reaction.', 'They affect pathway, not stoichiometry.'),
    miss('Makes equilibrium impossible', 'Catalysts speed approach to equilibrium but do not prevent it.', 'Separate rate from equilibrium position.'),
  ]),
  q(4300100, 'Kinetics', 'Rate law from initial rates', 'A reaction A + B -> C shows: doubling [A] doubles the rate; doubling [B] quadruples the rate. The rate law is:', 'rate = k[A][B]^2', [
    miss('rate = k[A]^2[B]', 'Doubling [A] would quadruple the rate if order were 2 in A.', 'Match doubling effect to exponent.'),
    miss('rate = k[A][B]', 'Doubling [B] would only double the rate if order were 1 in B.', 'Quadruple = 2^2 means order 2.'),
    miss('rate = k', 'A zero-order rate law would not change with either concentration.', 'Use the observed effects.'),
  ]),
  q(4300101, 'Kinetics', 'Mechanism step identification', 'In a multistep mechanism, the slow step is often called:', 'The rate-determining step', [
    miss('The reverse step', 'A reverse step is not necessarily slow.', 'Slowest step controls overall rate.'),
    miss('The catalyst regeneration step', 'Catalyst regeneration is unrelated to identifying the slowest step.', 'Use kinetics language.'),
    miss('The thermodynamic anchor step', 'No such term in standard kinetics vocabulary.', 'Rate-determining is the term.'),
  ]),

  // ---- Chapter 6: Thermochemistry and Thermodynamics ----
  q(400022, 'Thermochemistry', 'Exothermic definition', 'An exothermic process:', 'Releases heat to the surroundings', [
    miss('Absorbs heat from surroundings', 'That is endothermic.', 'Exo means out.'),
    miss('Always has no energy change', 'Heat release is an energy change.', 'Energy leaves system.'),
    miss('Only changes color', 'Color may change, but heat flow defines exothermic.', 'Track heat.'),
  ]),
  q(400023, 'Thermochemistry', 'Endothermic effect', 'An endothermic process causes surroundings to:', 'Cool down as the system absorbs heat from them', [
    miss('Warm up because heat is released', 'That is exothermic.', 'System absorbs heat from surroundings.'),
    miss('Stay impossible to measure', 'Temperature change can often be measured.', 'Heat leaves surroundings.'),
    miss('Become a gas automatically', 'Phase changes vary.', 'Use heat direction.'),
  ]),
  q(400024, 'Thermochemistry', 'Enthalpy sign', 'For an exothermic reaction, delta H is:', 'Negative', [
    miss('Positive', 'Positive delta H indicates endothermic.', 'Products at lower enthalpy than reactants.'),
    miss('Always zero', 'Heat is released, so enthalpy changes.', 'Sign matters.'),
    miss('Undefined', 'Delta H can be defined.', 'Use heat flow at constant pressure.'),
  ]),
  q(446002, 'Thermochemistry', 'Classify heat release', 'A reaction that releases heat to the surroundings is classified as:', 'Exothermic', [
    miss('Endothermic', 'Endothermic reactions absorb heat from surroundings.', 'Release means heat exits the system.'),
    miss('Isotopic', 'Isotopic describes atoms with different neutron counts, not heat flow.', 'Use thermochemistry language.'),
    miss('Neutralization only', 'Some neutralizations are exothermic, but heat release is broader.', 'Classify by energy transfer.'),
  ]),
  q(4300102, 'Thermochemistry', 'Hess\'s law setup', 'If reaction A has delta H = -100 kJ and reaction B has delta H = +30 kJ, the overall delta H for (A + B) is:', '-70 kJ', [
    miss('-130 kJ', 'That subtracts instead of adding signed enthalpies.', 'Add the signed values.'),
    miss('+70 kJ', 'The sign of the more exothermic step dominates here.', 'Sum with signs.'),
    miss('-100 kJ', 'That ignores reaction B entirely.', 'Use both steps.'),
  ]),
  q(4300103, 'Thermochemistry', 'Calorimetry', 'Using q = mc(delta T), 50.0 g of water (c = 4.18 J/g K) warms from 25.0 C to 35.0 C. How much heat was absorbed?', '2090 J', [
    miss('209 J', 'You used delta T = 1 instead of 10.', 'Compute 50 x 4.18 x 10.'),
    miss('209,000 J', 'You used 1000 g instead of 50 g.', 'Units must match.'),
    miss('41.8 J', 'You forgot delta T entirely.', 'Use q = mc delta T fully.'),
  ]),
  q(4300104, 'Thermodynamics', 'Gibbs free energy criterion', 'A reaction is spontaneous as written when:', 'Delta G is negative', [
    miss('Delta G is positive', 'Positive delta G means nonspontaneous as written.', 'Sign matters.'),
    miss('Delta G is zero exactly', 'Delta G = 0 marks equilibrium, not spontaneity.', 'Use the inequality.'),
    miss('Delta H is positive', 'Delta H sign alone does not determine spontaneity.', 'Use delta G overall.'),
  ]),
  q(400046, 'Thermodynamics', 'Negative delta G', 'At constant temperature and pressure, negative delta G indicates:', 'A spontaneous process under those conditions', [
    miss('A nonspontaneous process', 'Positive delta G indicates nonspontaneous as written.', 'Negative Gibbs energy favors process.'),
    miss('No chemical change possible', 'Negative delta G supports change.', 'Use sign of G.'),
    miss('A reaction at equilibrium only', 'At equilibrium delta G is zero.', 'Negative means forward spontaneous.'),
  ]),
  q(400047, 'Thermodynamics', 'Delta G at equilibrium', 'At equilibrium, delta G is:', '0', [
    miss('Always negative', 'Negative delta G means spontaneous forward, not equilibrium.', 'Equilibrium has no net driving force.'),
    miss('Always positive', 'Positive means nonspontaneous forward.', 'Equilibrium is zero.'),
    miss('Undefined', 'Delta G is defined.', 'Use thermodynamic condition.'),
  ]),

  // ---- Chapter 7: Equilibrium, Acids/Bases, Electrochemistry ----
  q(400029, 'Equilibrium', 'Dynamic equilibrium', 'At dynamic equilibrium:', 'Forward and reverse reaction rates are equal', [
    miss('All reaction stops completely', 'Microscopic reactions continue.', 'Dynamic means ongoing.'),
    miss('Only products exist', 'Equilibrium mixture may contain both.', 'Rates equal, concentrations stable.'),
    miss('Reactants and products must have equal concentrations', 'Rates equal does not require equal concentrations.', 'K decides ratios.'),
  ]),
  q(400030, 'Equilibrium', 'Le Chatelier', 'Le Chatelier\'s principle predicts a system shifts to:', 'Oppose an imposed stress', [
    miss('Amplify every stress', 'Equilibrium shifts reduce stress.', 'System responds against change.'),
    miss('Stop all reactions', 'Equilibrium can shift dynamically.', 'Rates adjust.'),
    miss('Make K equal zero', 'K changes only with temperature.', 'Shift composition, not K generally.'),
  ]),
  q(400031, 'Equilibrium', 'K changes when', 'For a reaction at fixed conditions, K changes only when:', 'Temperature changes', [
    miss('Only concentration changes', 'Changing concentration shifts position but not K at fixed temperature.', 'K is temperature-dependent.'),
    miss('Adding a catalyst', 'Catalysts speed both directions and do not change K.', 'They affect rate, not equilibrium constant.'),
    miss('Changing container color', 'Color of container is irrelevant.', 'Temperature changes K.'),
  ]),
  q(400032, 'Equilibrium', 'Q vs K direction', 'If Q < K, the reaction shifts:', 'Toward products (to increase Q until it equals K)', [
    miss('Toward reactants', 'That happens when Q > K.', 'Q too small means more product needed.'),
    miss('Nowhere always', 'If Q differs from K, system shifts.', 'Compare Q to K.'),
    miss('Only temperature changes', 'Shift can happen at fixed temperature.', 'Use the reaction quotient.'),
  ]),
  q(446003, 'Equilibrium', 'Le Chatelier shift', 'For N2(g) + 3H2(g) <-> 2NH3(g), what happens if NH3 is removed?', 'Equilibrium shifts right to make more NH3', [
    miss('It shifts left to consume N2', 'Removing product usually favors making more product.', 'Systems oppose disturbance.'),
    miss('It stops permanently', 'Equilibrium can re-establish after a stress.', 'Use Le Chatelier.'),
    miss('No shift can occur in gases', 'Gas equilibria can shift.', 'Look at product removal.'),
  ]),
  q(400033, 'Acids and Bases', 'Bronsted acid', 'A Bronsted-Lowry acid is a:', 'Proton (H+) donor', [
    miss('Proton acceptor', 'That is a Bronsted base.', 'Acid donates H+.'),
    miss('Electron-pair donor', 'That is a Lewis base.', 'Use proton transfer.'),
    miss('Neutron donor', 'Neutrons are not acid-base particles.', 'Think H+.'),
  ]),
  q(400034, 'Acids and Bases', 'Bronsted base', 'A Bronsted-Lowry base is a:', 'Proton (H+) acceptor', [
    miss('Proton donor', 'That is an acid.', 'Base accepts H+.'),
    miss('Neutron acceptor', 'Not acid-base chemistry.', 'Use protons.'),
    miss('Always a metal', 'Many bases are not metals.', 'Definition is proton acceptance.'),
  ]),
  q(400035, 'Acids and Bases', 'pH definition', 'pH is defined as:', '-log[H+]', [
    miss('log[H+]', 'The negative sign is missing.', 'More H+ means lower pH.'),
    miss('[OH-]/[H+]', 'That is not pH definition.', 'Use logarithm.'),
    miss('14 + [H+]', 'pH is not direct addition.', 'Use -log.'),
  ]),
  q(400036, 'Acids and Bases', 'Neutral pH', 'At 25 C, a neutral aqueous solution has pH about:', '7', [
    miss('0', 'pH 0 is strongly acidic.', 'Neutral water is middle of 0-14 scale.'),
    miss('14', 'pH 14 is strongly basic.', 'Neutral is neither acid nor base.'),
    miss('1', 'That is acidic.', 'Use water at 25 C.'),
  ]),
  q(400037, 'Acids and Bases', 'Strong acid', 'A strong acid in water:', 'Dissociates essentially completely into ions', [
    miss('Never produces H+', 'Acids produce/donate H+ in water.', 'Strong means complete dissociation.'),
    miss('Is always concentrated', 'Strength and concentration differ.', 'Strong means degree of ionization.'),
    miss('Has pH exactly 7', 'Strong acids are acidic.', 'Complete dissociation lowers pH.'),
  ]),
  q(400038, 'Acids and Bases', 'Buffer', 'A buffer resists changes in:', 'pH when small amounts of acid or base are added', [
    miss('Mass number', 'Buffers are solution acid-base systems.', 'They stabilize pH.'),
    miss('Atomic number', 'Atomic number does not change in buffers.', 'Use acid/base equilibrium.'),
    miss('Element identity', 'Buffers do not change elements.', 'They resist pH change.'),
  ]),
  q(446004, 'Acids and Bases', 'pH calculation', 'What is the pH of a solution with [H+] = 1 x 10^-3 M?', '3', [
    miss('-3', 'pH is -log[H+], so this becomes positive 3.', 'Use pH = -log[H+].'),
    miss('11', 'That would be the pOH for this acidic solution at 25 C.', 'Do not switch to pOH unless asked.'),
    miss('0.001', 'That repeats the concentration, not pH.', 'Convert with the logarithm.'),
  ]),
  q(4300105, 'Acids and Bases', 'Ka and weak acid', 'For a weak monoprotic acid HA with Ka = 1.0 x 10^-5 in 0.10 M solution, the approximate [H+] at equilibrium is:', '1.0 x 10^-3 M', [
    miss('1.0 x 10^-5 M', 'That is Ka itself, not [H+].', 'Use [H+] = sqrt(Ka x C0).'),
    miss('1.0 x 10^-6 M', 'You forgot to multiply Ka by initial concentration.', 'Use the approximation.'),
    miss('1.0 x 10^-1 M', 'Weak acids do not fully dissociate.', 'Apply Ka equilibrium.'),
  ]),
  q(4300106, 'Acids and Bases', 'Ksp expression', 'For BaSO4(s) <-> Ba2+(aq) + SO4^2-(aq), the solubility product expression Ksp equals:', '[Ba2+][SO4^2-]', [
    miss('[Ba2+] + [SO4^2-]', 'Equilibrium expressions multiply, not add.', 'Use the product form.'),
    miss('[Ba2+][SO4^2-] / [BaSO4]', 'Pure solids are excluded from K expressions.', 'Drop the solid term.'),
    miss('[Ba2+]^2[SO4^2-]^2', 'The stoichiometry is 1:1, not 2:2.', 'Use coefficients from the balanced equation.'),
  ]),
  q(400039, 'Solubility', 'Precipitate', 'A precipitate is:', 'An insoluble solid that forms from solution', [
    miss('A gas dissolved in water only', 'Precipitate means solid comes out.', 'Look for insoluble solid.'),
    miss('A pure solvent', 'Solvent dissolves substances.', 'Precipitate separates.'),
    miss('An electron shell', 'Not solution chemistry.', 'Think solid product.'),
  ]),
  q(400040, 'Solubility', 'Ksp meaning', 'Ksp describes equilibrium for:', 'A sparingly soluble ionic solid dissolving in water', [
    miss('Combustion of hydrocarbons only', 'Ksp is solubility-product equilibrium.', 'Think dissolving salt.'),
    miss('Ideal gas expansion', 'That uses gas laws.', 'Ksp uses ion concentrations.'),
    miss('Nuclear decay', 'Not solubility.', 'Use ionic solid equilibrium.'),
  ]),

  // ---- Electrochemistry ----
  q(400041, 'Electrochemistry', 'Oxidation', 'Oxidation is:', 'Loss of electrons by a species', [
    miss('Gain of electrons', 'That is reduction.', 'OIL RIG: oxidation is loss.'),
    miss('Gain of neutrons', 'Not redox chemistry.', 'Redox tracks electrons.'),
    miss('Loss of protons only', 'Acid-base may transfer protons; redox transfers electrons.', 'Use electron loss.'),
  ]),
  q(400042, 'Electrochemistry', 'Reduction', 'Reduction is:', 'Gain of electrons by a species', [
    miss('Loss of electrons', 'That is oxidation.', 'Reduction gains electrons.'),
    miss('Gain of heat only', 'Heat is not the reduction definition.', 'Use electrons.'),
    miss('Breaking all bonds', 'Reduction is electron gain.', 'Track charge changes.'),
  ]),
  q(400043, 'Electrochemistry', 'Anode site', 'In an electrochemical cell, oxidation occurs at the:', 'Anode', [
    miss('Cathode', 'Reduction occurs at the cathode.', 'An Ox, Red Cat.'),
    miss('Salt bridge only', 'Salt bridge balances charge, not the reaction site.', 'Use electrode names.'),
    miss('Voltmeter', 'Voltmeter measures potential.', 'Reaction occurs at electrodes.'),
  ]),
  q(400044, 'Electrochemistry', 'Cathode site', 'Reduction occurs at the:', 'Cathode', [
    miss('Anode', 'Oxidation occurs at the anode.', 'Red Cat.'),
    miss('Wire insulation', 'Not a reaction site.', 'Use electrode.'),
    miss('Beaker label', 'Labels do not define redox site.', 'Cathode reduction.'),
  ]),
  q(400045, 'Electrochemistry', 'Galvanic cell function', 'A galvanic cell converts:', 'Chemical energy from a spontaneous redox reaction into electrical energy', [
    miss('Electrical energy into nonspontaneous chemical change', 'That describes electrolytic cells.', 'Galvanic is spontaneous electricity generation.'),
    miss('Light into mass', 'Not galvanic cell chemistry.', 'Use redox energy.'),
    miss('Heat into sound only', 'Not electrochemistry.', 'Think battery.'),
  ]),
  q(446005, 'Electrochemistry', 'Oxidation framing', 'Oxidation is best described as:', 'Loss of electrons by a species', [
    miss('Gain of electrons', 'Gain of electrons is reduction.', 'Use OIL RIG.'),
    miss('Loss of protons only', 'Electron transfer defines oxidation-reduction here.', 'Focus on electrons.'),
    miss('Formation of a precipitate only', 'Precipitation is a different reaction type.', 'Redox tracks electron movement.'),
  ]),
  q(4300107, 'Electrochemistry', 'EMF calculation', 'For a cell with E_cathode = +0.34 V and E_anode = -0.76 V (both as reduction potentials), the standard EMF is:', '+1.10 V', [
    miss('+0.42 V', 'That is the simple difference of magnitudes without sign care.', 'E_cell = E_cathode - E_anode.'),
    miss('-1.10 V', 'Sign error; spontaneous galvanic cells have positive E_cell.', 'Compute (+0.34) - (-0.76).'),
    miss('+0.34 V', 'You used only the cathode value.', 'Use both half-cells.'),
  ]),

  // ---- Solutions ----
  q(400048, 'Solutions', 'Molarity definition', 'Molarity is:', 'Moles of solute per liter of solution', [
    miss('Liters of solute per mole of solution', 'The ratio is inverted.', 'M = mol/L.'),
    miss('Grams per second', 'That is a rate-like unit.', 'Use amount over volume.'),
    miss('Moles of solvent per kilogram', 'That is closer to molality structure.', 'Molarity uses liters solution.'),
  ]),
  q(400049, 'Solutions', 'Dilution conserves', 'In dilution, moles of solute are:', 'Conserved (only volume changes)', [
    miss('Destroyed', 'Adding solvent does not destroy solute.', 'Amount of solute stays same.'),
    miss('Doubled automatically', 'Adding solvent does not add solute.', 'Only volume changes.'),
    miss('Changed into neutrons', 'Not chemistry dilution.', 'Track solute amount.'),
  ]),
  q(446010, 'Solutions', 'Dilution formula', 'Which equation is commonly used for dilution calculations?', 'M1V1 = M2V2', [
    miss('PV = nRT', 'That is the ideal gas law.', 'Dilution conserves moles of solute.'),
    miss('q = mcDeltaT', 'That is calorimetry.', 'Use concentration-volume relationship.'),
    miss('rate = k[A]', 'That is a rate-law form.', 'Dilution uses initial and final molarity and volume.'),
  ]),

  // ---- Chapter 8: Exam Studio ----
  q(400050, 'Experimental Skills', 'Significant figures', 'Significant figures mainly communicate:', 'Measurement precision', [
    miss('Atomic identity', 'Element identity comes from atomic number.', 'Sig figs are about measurements.'),
    miss('Reaction spontaneity', 'Spontaneity uses thermodynamics.', 'Sig figs show precision.'),
    miss('Only molecular geometry', 'Geometry is structural.', 'Use measurement reporting.'),
  ]),
  q(4300120, 'Exam Studio', 'Particulate diagram', 'A particulate diagram for an ideal gas at higher temperature compared with the same gas at lower temperature should show:', 'Faster-moving particles (longer motion arrows) with the same average spacing', [
    miss('Particles closer together permanently', 'Higher temperature does not crowd particles at constant pressure/volume.', 'Focus on motion, not spacing.'),
    miss('A new chemical species formed', 'Heating an ideal gas without reaction does not change identity.', 'Use kinetic theory.'),
    miss('Particles fused into one large blob', 'Ideal gas particles do not coalesce.', 'Keep particles independent.'),
  ]),
  q(4300121, 'Exam Studio', 'Data-table interpretation', 'A titration table shows pH = 4.0 at 0 mL, 7.0 at the half-equivalence volume, and 9.0 at full equivalence. The titrated species is most likely:', 'A weak acid being titrated with a strong base', [
    miss('A strong acid being titrated with a strong base', 'A strong acid would start near pH 1 and have an equivalence around pH 7.', 'Use starting pH and equivalence pH.'),
    miss('A weak base being titrated with a strong acid', 'Then the pH would decrease, not increase, through titration.', 'Track pH direction.'),
    miss('A pure salt of a strong acid and strong base', 'That would not have an inflection or equivalence shift.', 'Match shape to acid/base type.'),
  ]),
  q(4300122, 'Exam Studio', 'Calculation justification', 'On an AP free-response item asking you to "support your claim with a calculation," the best practice is to:', 'Show the formula, the substituted values with units, and the final answer with units', [
    miss('State only the final numerical answer', 'AP rubrics typically require setup work for full credit.', 'Show work.'),
    miss('Use only words and avoid numbers', 'Calculation responses must include math.', 'Calculation = numbers.'),
    miss('Cite outside web sources', 'AP exam responses must be self-contained.', 'Use the prompt data.'),
  ]),
  q(4300123, 'Exam Studio', 'Lab safety choice', 'Which procedure is safest when diluting concentrated sulfuric acid?', 'Add the acid slowly to a larger volume of water, stirring', [
    miss('Add water to the concentrated acid quickly', 'Water boiling on hot acid can splash dangerously.', 'Always acid to water.'),
    miss('Heat the concentrated acid first to dilute it', 'Heating concentrated acid is dangerous and unnecessary.', 'Dilute carefully without heat.'),
    miss('Mix both in equal volumes simultaneously', 'Order matters because of localized heating.', 'Acid into water.'),
  ]),
  q(4300124, 'Exam Studio', 'Net ionic equation', 'For NaOH(aq) + HCl(aq) -> NaCl(aq) + H2O(l), the net ionic equation is:', 'H+(aq) + OH-(aq) -> H2O(l)', [
    miss('Na+(aq) + Cl-(aq) -> NaCl(s)', 'Spectator ions remain dissolved here; no precipitate forms.', 'Eliminate spectators.'),
    miss('NaOH(s) + HCl(g) -> NaCl(s) + H2O(g)', 'The original reactants are aqueous, not solid/gas.', 'Match states to prompt.'),
    miss('OH-(aq) -> H2O(l)', 'That omits H+ on the reactant side.', 'Both ions react.'),
  ]),
  q(4300125, 'Exam Studio', 'Redox half-reaction', 'In the half-reaction Zn -> Zn2+ + 2e-, zinc is:', 'Oxidized (losing electrons)', [
    miss('Reduced (gaining electrons)', 'Electrons are products here, so Zn loses them.', 'Read which side the electrons are on.'),
    miss('Both oxidized and reduced (disproportionation)', 'Only one process occurs in a single half-reaction.', 'One half-reaction = one process.'),
    miss('Acting as the cathode species', 'Oxidation occurs at the anode in a galvanic cell.', 'Anode vs cathode by process.'),
  ]),
])

export const apChemistryWorkoutGeneratedQuestions = runPolish(_baseApChemistryWorkoutGeneratedQuestions, [
  {
    subTopics: AP_WORKOUT_SCIENCE_SUB_TOPICS,
    mentorHints: AP_WORKOUT_SCIENCE_MENTOR_HINTS,
    correctShortened: AP_WORKOUT_SCIENCE_CORRECT_SHORTENED,
    source: 'apWorkoutScience',
  },
])

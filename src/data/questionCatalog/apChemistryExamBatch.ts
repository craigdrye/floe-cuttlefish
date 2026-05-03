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
    'Coverage source: OpenStax Chemistry, AP Chemistry-aligned OER, and public chemistry review collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  source: 'Generated from OpenStax/OER AP Chemistry coverage',
})

export const apChemistryExamBatchQuestions = makeQuestionBank('AP', [
  q(446001, 'Stoichiometry', 'Mole ratio', 'For the reaction 2H2 + O2 -> 2H2O, how many moles of H2O form from 4 moles of H2 with excess O2?', '4 moles', [
    miss('2 moles', 'That treats the coefficient of H2 as limiting the product incorrectly.', 'H2 and H2O have a 2:2 ratio.'),
    miss('8 moles', 'That doubles the amount without using the balanced ratio.', 'Use coefficients as mole ratios.'),
    miss('1 mole', 'That uses oxygen’s coefficient, but O2 is excess.', 'Start from H2.'),
  ]),
  q(446002, 'Thermochemistry', 'Exothermic reaction', 'If a reaction releases heat to the surroundings, how is it classified?', 'Exothermic', [
    miss('Endothermic', 'Endothermic reactions absorb heat from surroundings.', 'Release means heat exits the system.'),
    miss('Isotopic', 'Isotopic describes atoms with different neutron counts, not heat flow.', 'Use thermochemistry language.'),
    miss('Neutralization only', 'Some neutralizations are exothermic, but heat release is broader.', 'Classify by energy transfer.'),
  ]),
  q(446003, 'Equilibrium', 'Le Chatelier', 'For N2(g) + 3H2(g) <-> 2NH3(g), what happens if NH3 is removed?', 'The equilibrium shifts right to make more NH3', [
    miss('It shifts left to consume N2', 'Removing product usually favors making more product.', 'Systems oppose the disturbance.'),
    miss('It stops permanently', 'Equilibrium can re-establish after a stress.', 'Use Le Chatelier’s principle.'),
    miss('No shift can occur in gases', 'Gas equilibria can shift.', 'Look at product removal.'),
  ]),
  q(446004, 'Acids and Bases', 'pH calculation', 'What is the pH of a solution with [H+] = 1 x 10^-3 M?', '3', [
    miss('-3', 'pH is the negative log of [H+], so this becomes positive 3.', 'Use pH = -log[H+].'),
    miss('11', 'That would be the pOH for this acidic solution at 25 C.', 'Do not switch to pOH unless asked.'),
    miss('0.001', 'That repeats the concentration, not pH.', 'Convert with the logarithm.'),
  ]),
  q(446005, 'Electrochemistry', 'Oxidation', 'Oxidation is best described as:', 'Loss of electrons', [
    miss('Gain of electrons', 'Gain of electrons is reduction.', 'Use OIL RIG.'),
    miss('Loss of protons only', 'Electron transfer defines oxidation-reduction here.', 'Focus on electrons.'),
    miss('Formation of a precipitate only', 'Precipitation is a different reaction type.', 'Redox tracks electron movement.'),
  ]),
  q(446006, 'Bonding', 'Ionic bonding', 'An ionic bond most directly involves:', 'Transfer of electrons and attraction between oppositely charged ions', [
    miss('Equal sharing of electrons between identical atoms', 'That describes nonpolar covalent bonding.', 'Ionic bonding creates ions.'),
    miss('Temporary dipoles only between neutral molecules', 'That describes dispersion forces, not ionic bonds.', 'Think charged particles.'),
    miss('Metal atoms floating in an electron sea only', 'That describes metallic bonding.', 'Use cation-anion attraction.'),
  ]),
  q(446007, 'Intermolecular Forces', 'Hydrogen bonding', 'Which substance can form hydrogen bonds between its molecules?', 'H2O', [
    miss('CH4', 'Methane lacks H bonded to N, O, or F.', 'Hydrogen bonding needs a very electronegative partner.'),
    miss('CO2', 'Carbon dioxide has no hydrogen atoms.', 'Check the formula first.'),
    miss('He', 'Helium atoms do not hydrogen bond.', 'Hydrogen bonding requires hydrogen in the molecule.'),
  ]),
  q(446008, 'Kinetics', 'Catalyst effect', 'What does a catalyst do?', 'Provides a lower activation-energy pathway', [
    miss('Raises the activation energy', 'Catalysts lower activation energy.', 'Think faster reaction path.'),
    miss('Changes the overall balanced equation', 'Catalysts are not consumed in the net reaction.', 'They affect pathway, not stoichiometry.'),
    miss('Makes equilibrium impossible', 'Catalysts speed approach to equilibrium but do not prevent it.', 'Separate rate from equilibrium position.'),
  ]),
  q(446009, 'Gases', 'Boyle law', 'At constant temperature, if gas volume decreases, what happens to pressure?', 'Pressure increases', [
    miss('Pressure decreases', 'Boyle’s law gives an inverse relationship.', 'Smaller volume means more wall collisions per area.'),
    miss('Pressure stays fixed for all gases', 'At constant temperature, pressure changes when volume changes.', 'Use PV = constant.'),
    miss('Temperature must double', 'Temperature is held constant in the prompt.', 'Do not change a controlled variable.'),
  ]),
  q(446010, 'Solutions', 'Dilution', 'Which equation is commonly used for dilution calculations?', 'M1V1 = M2V2', [
    miss('PV = nRT', 'That is the ideal gas law, not dilution.', 'Dilution conserves moles of solute.'),
    miss('q = mcDeltaT', 'That is calorimetry.', 'Use concentration-volume relationship.'),
    miss('rate = k[A]', 'That is a rate law form.', 'Dilution uses initial and final molarity and volume.'),
  ]),
])

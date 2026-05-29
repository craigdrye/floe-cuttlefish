import { makeQuestionBank } from './base'

export const highApChemistryQuestions = makeQuestionBank('AP', [
  // -----------------------------------------------------------------------
  // Unit 1: Atomic Structure & Properties
  // -----------------------------------------------------------------------
  {
    id: 4400100,
    chapter: 'Unit 1: Atomic Structure and Properties',
    title: 'Mass spectrum interpretation',
    prompt: 'A mass spectrum of an unknown element shows two peaks: one at mass 63 with relative abundance 69.2%, and one at mass 65 with relative abundance 30.8%. What is the average atomic mass and the most likely identity of the element?',
    correct: 'Approximately 63.6 amu; copper (Cu)',
    wrong: [
      ['Approximately 64.0 amu; zinc (Zn)', 'A simple arithmetic mean ignores the unequal abundances. Weighted by abundance the value is 63.6, and zinc has a different isotopic pattern.', 'Weight each mass by its fractional abundance.'],
      ['Approximately 63.0 amu; copper (Cu)', 'You would only get exactly 63 if isotope-63 were 100% abundant; the 30.8% mass-65 contribution raises the average.', 'Include the heavier isotope in the average.'],
      ['Approximately 65.0 amu; copper (Cu)', 'Mass 65 is the less abundant isotope, so the weighted mean cannot equal it; it must fall closer to the more abundant peak at 63.', 'The mean must lie between the two peaks, closer to the more abundant one.'],
    ],
    lesson: 'Average atomic mass on a mass spectrum is a weighted mean: sum of (isotope mass) x (fractional abundance). The result must lie between the lightest and heaviest peaks, biased toward the most abundant.',
  },
  {
    id: 4400101,
    chapter: 'Unit 1: Atomic Structure and Properties',
    title: 'PES of a third-period element',
    prompt: 'A photoelectron spectrum shows peaks at binding energies (in MJ/mol, approximate) of 104, 6.84, 3.67, 0.738, and 0.496, with relative peak heights of 2:2:6:2:1. Which element is most consistent with this spectrum?',
    correct: 'Sodium (Na), with electron configuration 1s2 2s2 2p6 3s1',
    wrong: [
      ['Neon (Ne), with electron configuration 1s2 2s2 2p6', 'Neon would show only three peaks (1s, 2s, 2p) and no peak corresponding to a 3s electron.', 'Count the peaks and match to subshells, then check the height ratios.'],
      ['Magnesium (Mg), with electron configuration 1s2 2s2 2p6 3s2', 'A magnesium 3s peak would have a relative height of 2, not 1, since magnesium has two valence electrons.', 'The 3s peak height tells you how many valence s-electrons.'],
      ['Fluorine (F), with electron configuration 1s2 2s2 2p5', 'Fluorine has only two principal shells, so it should show three peaks, not five.', 'The number of peaks equals the number of occupied subshells.'],
    ],
    lesson: 'In PES, each peak corresponds to a subshell, the binding energy reveals how tightly the electron is held (deeper subshells = higher energy), and peak height is proportional to the number of electrons in that subshell.',
  },
  {
    id: 4400102,
    chapter: 'Unit 1: Atomic Structure and Properties',
    title: 'Coulombic attraction trend',
    prompt: 'Which of the following pairs of ions experiences the strongest Coulombic attraction in its ionic compound?',
    correct: 'Mg2+ and O2- (in MgO)',
    wrong: [
      ['Na+ and Cl- (in NaCl)', 'Both ions carry charges of magnitude 1, and the ionic radii are larger than the Mg-O pair, so the product |q1 q2|/r is smaller.', 'Coulombic force scales with the product of charges and inversely with distance.'],
      ['K+ and Br- (in KBr)', 'K+ and Br- are both larger and singly charged, giving the smallest attraction in this list.', 'Larger radius and smaller charges weaken the attraction.'],
      ['Ca2+ and S2- (in CaS)', 'Although charges match Mg-O at 2+ and 2-, Ca2+ and S2- are both substantially larger than Mg2+ and O2-, so the distance is larger and attraction weaker.', 'Compare ionic radii within the same charge category.'],
    ],
    lesson: 'Coulomb\'s law: F is proportional to |q1 q2|/r^2. Higher charge magnitudes and smaller ionic radii both increase attraction, which raises lattice energy and melting point.',
  },
  {
    id: 4400103,
    chapter: 'Unit 1: Atomic Structure and Properties',
    title: 'Ionization energy anomaly',
    prompt: 'The first ionization energy of oxygen is slightly lower than the first ionization energy of nitrogen, even though oxygen is to the right of nitrogen on the periodic table. The best explanation is:',
    correct: 'Oxygen has a paired electron in 2p that experiences extra electron-electron repulsion, making it easier to remove than one of nitrogen\'s half-filled 2p electrons',
    wrong: [
      ['Oxygen has a smaller effective nuclear charge than nitrogen', 'Effective nuclear charge increases left to right, so oxygen actually has a higher Zeff than nitrogen.', 'Zeff rises with proton count across a period.'],
      ['Oxygen\'s outer electrons are in a higher principal energy level than nitrogen\'s', 'Both oxygen and nitrogen are in period 2 and use the 2p subshell.', 'Check the principal quantum number.'],
      ['Oxygen has a fully filled 2p subshell that is unusually stable', 'A filled 2p would require six p-electrons; oxygen has only four.', 'Count the p-electrons in oxygen.'],
    ],
    lesson: 'Pairing penalty: when a fourth electron enters 2p in oxygen, it must pair, and the resulting repulsion lowers the energy needed to remove it. This produces the well-known N-to-O ionization energy dip.',
  },
  {
    id: 4400104,
    chapter: 'Unit 1: Atomic Structure and Properties',
    title: 'Successive ionization energies',
    prompt: 'A neutral atom shows the following successive ionization energies (in kJ/mol): 738, 1450, 7730, 10500, 13600. Which group of the periodic table does this atom most likely belong to?',
    correct: 'Group 2 (alkaline earth metals)',
    wrong: [
      ['Group 1 (alkali metals)', 'A Group 1 element would show a single small IE then a huge jump after the first electron is removed; here the jump occurs after the second electron.', 'Look at which ionization shows the giant gap.'],
      ['Group 13', 'A Group 13 element would show two relatively low IEs and then a large jump after the third electron, not the second.', 'Group 13 has three valence electrons.'],
      ['Group 17 (halogens)', 'Halogens have seven valence electrons, so the giant jump would not appear until after the seventh ionization.', 'The jump appears after the valence shell is emptied.'],
    ],
    lesson: 'A huge jump in successive ionization energies signals that the next electron must come from a core shell. The location of the jump reveals the number of valence electrons and thus the group.',
  },
  {
    id: 4400105,
    chapter: 'Unit 1: Atomic Structure and Properties',
    title: 'Electron configuration of Fe2+',
    prompt: 'What is the ground-state electron configuration of the Fe2+ ion?',
    correct: '[Ar] 3d6',
    wrong: [
      ['[Ar] 4s2 3d4', 'When a transition metal forms a cation, electrons are removed from the 4s subshell before the 3d. The 4s should be empty in Fe2+.', 'Cation rule: remove 4s electrons before 3d.'],
      ['[Ar] 3d8', 'Fe has 26 electrons; Fe2+ has 24. The argon core accounts for 18, leaving 6 for the 3d subshell, not 8.', 'Count total electrons remaining after the charge is applied.'],
      ['[Ar] 4s1 3d5', 'This is the Cr-style half-filled configuration, but Fe2+ does not adopt it. Both 4s electrons are removed in forming the 2+ ion.', 'Remember the 4s-before-3d removal rule.'],
    ],
    lesson: 'For first-row transition metal cations, remove 4s electrons before 3d electrons. Fe ([Ar] 4s2 3d6) loses both 4s electrons to give Fe2+ = [Ar] 3d6.',
  },

  // -----------------------------------------------------------------------
  // Unit 2: Molecular & Ionic Compound Structure
  // -----------------------------------------------------------------------
  {
    id: 4400106,
    chapter: 'Unit 2: Molecular and Ionic Compound Structure',
    title: 'Formal charge minimization',
    prompt: 'For the sulfate ion (SO4 2-), which Lewis structure is preferred based on formal charge minimization?',
    correct: 'A structure with two S=O double bonds and two S-O single bonds, giving formal charges of 0 on S, 0 on the doubly bonded O atoms, and -1 on each singly bonded O',
    wrong: [
      ['A structure with all four S-O single bonds, giving formal charges of +2 on S and -1 on each O', 'Although this satisfies the octet for second-row atoms, formal charges of +2 and four -1 are much larger than necessary. Sulfur can expand its octet to reduce formal charges.', 'Total formal charges should be minimized when allowed.'],
      ['A structure with one S=O double bond and three S-O single bonds, giving formal charges of +1 on S, 0 on the doubly bonded O, and -1 on each single-bonded O', 'This is intermediate and has higher formal-charge magnitudes than the two-double-bond version.', 'Two double bonds reduce S formal charge to zero.'],
      ['A structure with four S=O double bonds, giving formal charges of -2 on S and 0 on each O', 'This requires sulfur to have 12 electrons and overall the formal charge sum (-2) matches the ion, but the formal-charge magnitude on sulfur is unnecessarily large.', 'Spread negative charge onto the more electronegative oxygens.'],
    ],
    lesson: 'For oxoanions of third-row central atoms (S, P, Cl), the preferred Lewis structure minimizes formal charges, even if it requires expanded octets. Place negative formal charge on the more electronegative atom.',
  },
  {
    id: 4400107,
    chapter: 'Unit 2: Molecular and Ionic Compound Structure',
    title: 'VSEPR shape of SF4',
    prompt: 'Sulfur tetrafluoride (SF4) has a central sulfur atom bonded to four fluorines with one lone pair. What is the molecular geometry, and is the molecule polar?',
    correct: 'See-saw geometry; polar',
    wrong: [
      ['Tetrahedral geometry; nonpolar', 'Tetrahedral requires four bonded atoms and zero lone pairs. The lone pair on sulfur distorts the shape to see-saw.', 'Count the steric number including lone pairs.'],
      ['Square planar geometry; nonpolar', 'Square planar arises with steric number 6 and two lone pairs (as in XeF4), not steric number 5 with one lone pair.', 'Square planar = AX4E2.'],
      ['Trigonal pyramidal geometry; polar', 'Trigonal pyramidal is AX3E (like NH3), not AX4E.', 'Match the AXE notation: SF4 is AX4E.'],
    ],
    lesson: 'AX4E (steric number 5 with one lone pair) gives see-saw geometry. The lone pair occupies an equatorial position. SF4 is polar because the bond dipoles do not cancel.',
  },
  {
    id: 4400108,
    chapter: 'Unit 2: Molecular and Ionic Compound Structure',
    title: 'Hybridization in ozone',
    prompt: 'In the ozone molecule (O3), the central oxygen is sp2 hybridized. What is the approximate O-O-O bond angle, and how is the structure best described?',
    correct: 'About 117 degrees; two resonance structures with equivalent O-O bonds of bond order 1.5',
    wrong: [
      ['Exactly 120 degrees; one O=O double bond and one O-O single bond, never interchanging', 'Although sp2 predicts 120 degrees, lone-pair repulsion compresses it slightly. Also, the actual molecule is a resonance hybrid; the two O-O bonds are equivalent.', 'Lone pairs on the central atom alter the ideal angle slightly.'],
      ['About 109.5 degrees; sp3 hybridization with two lone pairs', 'Ozone\'s central oxygen is sp2 (steric number 3: two bonds plus one lone pair), not sp3.', 'Steric number 3 = sp2.'],
      ['About 180 degrees; linear geometry due to two resonance contributors', 'A linear arrangement would require steric number 2 with no lone pairs; the central O has one lone pair, giving bent geometry.', 'Bent shape, not linear.'],
    ],
    lesson: 'Steric number 3 with one lone pair gives bent geometry near 120 degrees (slightly compressed). Resonance in O3 averages the two O-O bonds to bond order 1.5.',
  },
  {
    id: 4400109,
    chapter: 'Unit 2: Molecular and Ionic Compound Structure',
    title: 'Bond angle ranking',
    prompt: 'Rank the following molecules from largest to smallest H-X-H bond angle: CH4, NH3, H2O.',
    correct: 'CH4 (109.5 degrees) > NH3 (about 107 degrees) > H2O (about 104.5 degrees)',
    wrong: [
      ['H2O > NH3 > CH4', 'This reverses the trend. More lone pairs on the central atom push bonded pairs together, decreasing the H-X-H angle.', 'Lone pairs compress bond angles.'],
      ['NH3 > CH4 > H2O', 'CH4 has zero lone pairs and the ideal tetrahedral angle. NH3 with one lone pair must be smaller than CH4.', 'No lone pairs = the largest H-X-H angle.'],
      ['All three are exactly 109.5 degrees because all are sp3', 'Although the steric number is 4 for all three, lone-pair repulsion compresses NH3 and H2O below 109.5 degrees.', 'Hybridization predicts an ideal; lone pairs adjust it.'],
    ],
    lesson: 'Lone-pair-bond-pair repulsion is stronger than bond-pair-bond-pair repulsion. Each additional lone pair compresses bond angles below the ideal sp3 value.',
  },
  {
    id: 4400110,
    chapter: 'Unit 2: Molecular and Ionic Compound Structure',
    title: 'Sigma and pi bonds in HCN',
    prompt: 'How many sigma (sigma) and pi (pi) bonds are in the hydrogen cyanide (HCN) molecule?',
    correct: '2 sigma and 2 pi bonds',
    wrong: [
      ['3 sigma and 0 pi bonds', 'HCN contains a C-N triple bond, which is one sigma and two pi bonds, not three sigmas.', 'Count multiple bonds carefully.'],
      ['2 sigma and 1 pi bond', 'A triple bond contains two pi bonds, not one. The H-C bond is one sigma, and C-N is one sigma plus two pi bonds.', 'Triple bond = 1 sigma + 2 pi.'],
      ['1 sigma and 3 pi bonds', 'Every bond between two atoms includes exactly one sigma; the remaining bonds in a multiple bond are pi bonds. HCN has two distinct bonded pairs, so at least 2 sigmas.', 'Each pair of bonded atoms contributes exactly one sigma.'],
    ],
    lesson: 'Every covalent bond has exactly one sigma bond. Double bonds add one pi bond; triple bonds add two pi bonds. HCN: H-C (1 sigma) + C triple-bond N (1 sigma + 2 pi) = 2 sigma, 2 pi.',
  },
  {
    id: 4400111,
    chapter: 'Unit 2: Molecular and Ionic Compound Structure',
    title: 'Bond polarity vs molecular polarity',
    prompt: 'Carbon dioxide (CO2) contains two polar C=O bonds, yet the molecule is nonpolar overall. The best explanation is:',
    correct: 'CO2 has a linear geometry, so the two equal and opposite C=O bond dipoles cancel each other vectorially',
    wrong: [
      ['Oxygen and carbon have nearly identical electronegativities, so the C=O bonds are not actually polar', 'Oxygen is much more electronegative than carbon; C=O bonds are quite polar individually.', 'Check the electronegativity difference.'],
      ['CO2 is bent, but the bond dipoles cancel because both oxygens point downward', 'CO2 is linear (steric number 2, no lone pairs on C). If it were bent, the dipoles would not cancel.', 'CO2 has no lone pairs on carbon.'],
      ['CO2 has resonance, which averages out the polarity', 'Resonance affects bond order, not whether a molecule is polar overall. Geometry determines net dipole.', 'Molecular polarity depends on the vector sum of bond dipoles.'],
    ],
    lesson: 'A polar molecule requires polar bonds AND a geometry that does not cancel the bond dipoles. Symmetric arrangements (linear AX2, trigonal planar AX3, tetrahedral AX4) of identical atoms produce nonpolar molecules even with polar bonds.',
  },

  // -----------------------------------------------------------------------
  // Unit 3: Intermolecular Forces & Properties
  // -----------------------------------------------------------------------
  {
    id: 4400112,
    chapter: 'Unit 3: Intermolecular Forces and Properties',
    title: 'Boiling point ranking',
    prompt: 'Rank from highest to lowest boiling point: CH4, CH3OH, CH3F, NaCl.',
    correct: 'NaCl > CH3OH > CH3F > CH4',
    wrong: [
      ['CH3OH > NaCl > CH3F > CH4', 'NaCl has ionic bonds (much stronger than any intermolecular force), giving it the highest boiling point by far.', 'Ionic > hydrogen bonding > dipole-dipole > LDF.'],
      ['CH3F > CH3OH > NaCl > CH4', 'CH3OH is hydrogen-bonded (O-H bond enables H-bonding), which is stronger than the dipole-dipole forces in CH3F.', 'O-H, N-H, and F-H enable hydrogen bonding.'],
      ['CH4 > CH3F > CH3OH > NaCl', 'CH4 has only London dispersion forces and the smallest mass, giving the lowest boiling point.', 'Nonpolar small molecules have the lowest boiling points.'],
    ],
    lesson: 'IMF strength ranking: ionic bonds and metallic bonds and network covalent (very high BP) > hydrogen bonding > dipole-dipole > London dispersion. Hydrogen bonding requires H bonded directly to N, O, or F.',
  },
  {
    id: 4400113,
    chapter: 'Unit 3: Intermolecular Forces and Properties',
    title: 'Vapor pressure and IMF',
    prompt: 'At the same temperature, ethanol (CH3CH2OH) and dimethyl ether (CH3OCH3) have the same molecular formula (C2H6O) but very different vapor pressures. Which substance has the higher vapor pressure, and why?',
    correct: 'Dimethyl ether has a higher vapor pressure because its molecules cannot hydrogen-bond, so weaker IMFs allow easier escape into the vapor phase',
    wrong: [
      ['Ethanol has a higher vapor pressure because it has more O-H polarity and escapes faster', 'Stronger IMFs (here, H-bonding) reduce vapor pressure because more energy is required to escape the liquid.', 'Stronger IMF = lower vapor pressure.'],
      ['Both have the same vapor pressure because they are structural isomers with identical molar mass', 'Same molar mass does not mean same IMFs; the position of the oxygen changes whether H-bonding is possible.', 'IMFs depend on structure, not just formula.'],
      ['Dimethyl ether has a lower vapor pressure because the central oxygen creates a strong dipole', 'Although CH3OCH3 has a dipole, it lacks O-H, so its only strong-ish IMFs are dipole-dipole and LDF, both weaker than ethanol\'s H-bonds.', 'Dipole-dipole < H-bonding in strength.'],
    ],
    lesson: 'Stronger intermolecular forces lower vapor pressure (and raise boiling point). Hydrogen bonding requires an H atom bonded directly to N, O, or F; the O in ethers cannot H-bond as a donor.',
  },
  {
    id: 4400114,
    chapter: 'Unit 3: Intermolecular Forces and Properties',
    title: 'LDF strength factors',
    prompt: 'Why does I2 have a much higher boiling point (184 degrees C) than F2 (-188 degrees C), even though both are nonpolar diatomic halogens?',
    correct: 'I2 has many more electrons and a much larger, more polarizable electron cloud, producing stronger London dispersion forces',
    wrong: [
      ['I2 is more polar than F2', 'Both I2 and F2 are nonpolar (identical atoms bonded together). The difference is dispersion-force magnitude.', 'Diatomic elements with identical atoms have zero permanent dipole.'],
      ['I2 has hydrogen bonding but F2 does not', 'Neither molecule contains hydrogen; neither can H-bond.', 'H-bonding requires N-H, O-H, or F-H.'],
      ['F2 has dipole-dipole forces that I2 lacks', 'Both lack permanent dipoles; only LDF acts in either case.', 'Same molecule type means same IMF type.'],
    ],
    lesson: 'London dispersion forces (LDF) strengthen with more electrons and greater polarizability. For nonpolar molecules, larger molar mass and more diffuse electron clouds raise the boiling point.',
  },
  {
    id: 4400115,
    chapter: 'Unit 3: Intermolecular Forces and Properties',
    title: 'Solubility "like dissolves like"',
    prompt: 'Which substance is most likely to be soluble in hexane (C6H14)?',
    correct: 'I2 (a nonpolar molecular solid)',
    wrong: [
      ['NaCl (an ionic solid)', 'NaCl is highly polar (ionic) and dissolves in polar solvents like water. It is not soluble in nonpolar hexane.', 'Polar solutes prefer polar solvents.'],
      ['Sucrose (a polar molecular solid with many O-H groups)', 'Sucrose is rich in O-H groups and hydrogen-bonds strongly with water, but cannot interact favorably with nonpolar hexane.', 'Sugar dissolves in water, not in oil.'],
      ['NH3 (a polar molecule with strong hydrogen bonding)', 'NH3 is polar and H-bonds; it prefers polar solvents.', 'Hexane is nonpolar.'],
    ],
    lesson: 'Like dissolves like: nonpolar solvents dissolve nonpolar solutes (LDF interactions). Polar and ionic solutes generally require polar (especially H-bonding) solvents.',
  },
  {
    id: 4400116,
    chapter: 'Unit 3: Intermolecular Forces and Properties',
    title: 'Real vs ideal gas',
    prompt: 'Under which conditions does a real gas deviate most significantly from ideal gas behavior?',
    correct: 'High pressure and low temperature',
    wrong: [
      ['Low pressure and high temperature', 'These are the conditions under which real gases behave most ideally because molecules are far apart and have high kinetic energy.', 'Ideal behavior happens at low P and high T.'],
      ['Low pressure and low temperature', 'Although low temperature increases deviation, low pressure tends to reduce it. The combination is mixed.', 'Two effects compete; both must favor deviation.'],
      ['High pressure and high temperature', 'High pressure brings molecules close (increasing deviation), but high temperature reduces the influence of intermolecular forces.', 'High T weakens the deviation that high P creates.'],
    ],
    lesson: 'Real gases deviate from PV = nRT when (1) molecular volumes become significant compared to container volume (high pressure) and (2) intermolecular attractions become significant compared to kinetic energy (low temperature).',
  },

  // -----------------------------------------------------------------------
  // Unit 4: Chemical Reactions (stoichiometry, net ionic, redox)
  // -----------------------------------------------------------------------
  {
    id: 4400117,
    chapter: 'Unit 4: Chemical Reactions',
    title: 'Limiting reagent calculation',
    prompt: 'When 4.0 g of H2 reacts with 32.0 g of O2 according to 2 H2 + O2 -> 2 H2O, which reactant is limiting, and how many grams of H2O are produced?',
    correct: 'O2 is limiting; about 36.0 g of H2O is produced',
    wrong: [
      ['H2 is limiting; about 36.0 g of H2O is produced', 'Moles of H2 = 4.0/2.0 = 2.0 mol; moles of O2 = 32.0/32.0 = 1.0 mol. Ratio needed is 2:1, so we have exactly stoichiometric amounts of H2 (2 mol) for the 1 mol of O2. Wait, that means neither limits. Check the ratios carefully.', 'Convert each reactant to moles and compare to coefficients.'],
      ['H2 is limiting; about 18.0 g of H2O is produced', 'With 2 mol H2 and 1 mol O2 in a 2:1 ratio, they react completely. H2 is not limiting; the answer should produce more water than 18 g.', 'Both reactants are in the exact stoichiometric ratio.'],
      ['O2 is limiting; about 18.0 g of H2O is produced', '1 mol O2 produces 2 mol H2O = 36 g, not 18 g. The mole-to-gram conversion is missing a factor.', 'Use the coefficients: 1 mol O2 -> 2 mol H2O.'],
    ],
    lesson: 'For limiting reagent problems: convert each reactant to moles, divide by its coefficient, and the smallest quotient is the limiting reactant. Here moles are stoichiometrically matched, so both are consumed and 2 mol H2O (36 g) results.',
  },
  {
    id: 4400118,
    chapter: 'Unit 4: Chemical Reactions',
    title: 'Percent yield',
    prompt: 'A reaction theoretically produces 8.50 g of product, but only 7.23 g is actually isolated. What is the percent yield?',
    correct: 'About 85.1%',
    wrong: [
      ['About 14.9%', 'This is 100% minus the percent yield. Percent yield is actual divided by theoretical, not the loss.', 'Percent yield = actual / theoretical.'],
      ['About 117.6%', 'This is theoretical divided by actual. Percent yield is the other way around and cannot exceed 100% in a clean experiment.', 'Actual goes on top of the fraction.'],
      ['About 1.18%', 'This is the ratio interpreted incorrectly. (7.23 / 8.50) x 100 = 85.1%.', 'Multiply by 100 to convert the ratio to a percent.'],
    ],
    lesson: 'Percent yield = (actual yield / theoretical yield) x 100%. Values above 100% indicate impure product, wet product, or measurement error.',
  },
  {
    id: 4400119,
    chapter: 'Unit 4: Chemical Reactions',
    title: 'Net ionic equation',
    prompt: 'When aqueous solutions of AgNO3 and NaCl are mixed, a white precipitate forms. What is the correct net ionic equation?',
    correct: 'Ag+(aq) + Cl-(aq) -> AgCl(s)',
    wrong: [
      ['AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq)', 'This is the complete molecular equation, not the net ionic. It includes spectator ions that do not participate.', 'Net ionic removes spectator ions.'],
      ['Ag+(aq) + NO3-(aq) + Na+(aq) + Cl-(aq) -> AgCl(s) + Na+(aq) + NO3-(aq)', 'This is the complete ionic equation. Cancel spectator ions (Na+ and NO3-) to get the net ionic.', 'Eliminate ions that appear on both sides unchanged.'],
      ['2 Ag+(aq) + 2 Cl-(aq) -> Ag2Cl2(s)', 'AgCl is a 1:1 compound, not Ag2Cl2. The net ionic uses the simplest whole-number ratio.', 'Write the precipitate formula correctly.'],
    ],
    lesson: 'Net ionic equations show only species that change. Strong electrolytes dissociate; spectator ions (those appearing identically on both sides) are removed.',
  },
  {
    id: 4400120,
    chapter: 'Unit 4: Chemical Reactions',
    title: 'Oxidation number assignment',
    prompt: 'What is the oxidation number of manganese in the permanganate ion (MnO4-)?',
    correct: '+7',
    wrong: [
      ['+2', '+2 is manganese\'s common cation, but in MnO4- with four oxygens at -2 and overall charge -1, manganese must balance: x + 4(-2) = -1 gives x = +7.', 'Apply the algebra: sum of oxidation states equals ion charge.'],
      ['+4', 'This is the oxidation state of Mn in MnO2, not in MnO4-.', 'Different compounds give different oxidation states.'],
      ['-1', '-1 is the overall ion charge, not the manganese oxidation state.', 'The ion charge is the sum of all atomic oxidation states.'],
    ],
    lesson: 'To find oxidation numbers: oxygen is usually -2, hydrogen +1, and the sum of oxidation states equals the overall charge. For MnO4-: x + 4(-2) = -1, so x = +7.',
  },
  {
    id: 4400121,
    chapter: 'Unit 4: Chemical Reactions',
    title: 'Identifying redox',
    prompt: 'In the reaction Zn(s) + 2 HCl(aq) -> ZnCl2(aq) + H2(g), which species is oxidized and which is reduced?',
    correct: 'Zn is oxidized (0 to +2); H+ is reduced (+1 to 0)',
    wrong: [
      ['Zn is reduced; H+ is oxidized', 'Reduction is a gain of electrons (decrease in oxidation number). Zn goes from 0 to +2, which is a loss of electrons (oxidation).', '"LEO the lion says GER": Loss of Electrons = Oxidation; Gain = Reduction.'],
      ['Cl is oxidized; Zn is reduced', 'Cl remains at -1 on both sides; it is a spectator and is neither oxidized nor reduced.', 'Track only species whose oxidation state changes.'],
      ['Nothing is oxidized or reduced because both products contain Cl', 'Cl is unchanged, but Zn and H+ both change oxidation states. The reaction is a single-replacement redox.', 'Single-replacement reactions are always redox.'],
    ],
    lesson: 'In redox, oxidation = loss of electrons (oxidation number increases); reduction = gain of electrons (oxidation number decreases). Identify by tracking oxidation-state changes for each element.',
  },
  {
    id: 4400122,
    chapter: 'Unit 4: Chemical Reactions',
    title: 'Empirical formula',
    prompt: 'A 4.50 g sample of a compound contains 1.50 g of carbon, 0.250 g of hydrogen, and the rest oxygen. What is the empirical formula?',
    correct: 'CH2O',
    wrong: [
      ['C2H4O2', 'This is the molecular formula of acetic acid, which has the empirical formula CH2O. The question asks for the empirical (simplest) formula.', 'Reduce to simplest whole-number ratio.'],
      ['CHO', 'Hydrogen has 0.250/1.01 = 0.247 mol while carbon has 1.50/12.0 = 0.125 mol. The H:C ratio is about 2:1, not 1:1.', 'Recompute moles of H carefully.'],
      ['C3H6O3', 'This is a multiple of CH2O. The empirical formula is the smallest whole-number ratio.', 'Divide all subscripts by the GCD.'],
    ],
    lesson: 'Empirical formula procedure: convert grams of each element to moles, divide all by the smallest mole quantity, and round to small whole numbers. The result is the simplest mole ratio.',
  },

  // -----------------------------------------------------------------------
  // Unit 5: Kinetics
  // -----------------------------------------------------------------------
  {
    id: 4400123,
    chapter: 'Unit 5: Kinetics',
    title: 'Determining rate law from initial rates',
    prompt: 'For the reaction 2 A + B -> products, doubling [A] (with [B] constant) quadruples the rate; doubling [B] (with [A] constant) has no effect. What is the rate law?',
    correct: 'rate = k[A]^2',
    wrong: [
      ['rate = k[A]^2[B]', 'If doubling [B] has no effect, [B] does not appear in the rate law (order = 0).', 'Zero order means concentration does not affect rate.'],
      ['rate = k[A][B]', '[A] doubling quadruples the rate, so [A] is second order, not first. Also [B] is zero order, so it should not appear.', 'Quadrupling on doubling indicates order 2 (2^2 = 4).'],
      ['rate = k[A][B]^2', 'Reversed: it is [A] that is second order and [B] that is zero order.', 'Match each concentration change to its rate effect.'],
    ],
    lesson: 'For initial-rate data, the order with respect to each reactant is determined by how the rate scales with concentration. If doubling [X] multiplies rate by 2^n, then [X] is order n. Stoichiometric coefficients do not predict orders.',
  },
  {
    id: 4400124,
    chapter: 'Unit 5: Kinetics',
    title: 'First-order half-life',
    prompt: 'A first-order reaction has a rate constant k = 0.0231 min^-1. What is its half-life, and does the half-life change as the reaction proceeds?',
    correct: 'About 30.0 min; the half-life is constant (independent of concentration)',
    wrong: [
      ['About 30.0 min; the half-life doubles after each half-life passes', 'For first-order reactions specifically, the half-life is concentration-independent. Doubling halves apply to zero-order, where the next half-life is half as long.', 'First-order half-life is a constant.'],
      ['About 43.3 min; the half-life is constant', 'The half-life formula for first order is t1/2 = ln(2)/k = 0.693/0.0231 = 30.0 min.', 'Use t1/2 = 0.693/k.'],
      ['About 30.0 min; the half-life decreases as concentration decreases (zero-order behavior)', 'Zero-order reactions have a half-life proportional to [A]_0, so successive half-lives shorten. First-order half-lives are constant.', 'Distinguish zero-order vs first-order half-life behavior.'],
    ],
    lesson: 'For a first-order reaction, t1/2 = 0.693/k regardless of starting concentration. Zero-order: t1/2 = [A]_0 / 2k (depends on initial concentration). Second-order: t1/2 = 1/(k[A]_0) (depends inversely).',
  },
  {
    id: 4400125,
    chapter: 'Unit 5: Kinetics',
    title: 'Integrated rate law graphs',
    prompt: 'For which reaction order is a plot of ln[A] versus time linear?',
    correct: 'First order; the slope equals -k',
    wrong: [
      ['Zero order; the slope equals -k', 'For zero order, a plot of [A] (not ln[A]) versus time is linear with slope -k.', 'Zero order: linear [A] vs t.'],
      ['Second order; the slope equals -k', 'For second order, a plot of 1/[A] versus time is linear with slope +k.', 'Second order: linear 1/[A] vs t.'],
      ['First order; the slope equals +k', 'The slope is negative because [A] decreases over time. ln[A] decreases linearly with slope -k.', 'The reactant is consumed, so the slope is negative.'],
    ],
    lesson: 'Graphical tests for kinetics: zero order linearizes [A] vs t (slope -k); first order linearizes ln[A] vs t (slope -k); second order linearizes 1/[A] vs t (slope +k).',
  },
  {
    id: 4400126,
    chapter: 'Unit 5: Kinetics',
    title: 'Arrhenius equation',
    prompt: 'According to the Arrhenius equation, how does the rate constant k change as temperature increases?',
    correct: 'k increases exponentially with temperature because more molecular collisions have energy greater than the activation energy',
    wrong: [
      ['k decreases as temperature increases because faster molecules collide less effectively', 'Higher temperature increases both collision frequency and the fraction of energetic collisions. Rate constants rise with T.', 'Hotter = faster reactions, almost always.'],
      ['k changes linearly with temperature', 'The dependence is exponential: k = A exp(-Ea/RT). Plots of ln(k) vs 1/T are linear, not k vs T.', 'Arrhenius is exponential, not linear.'],
      ['k is independent of temperature; only concentration affects rate', 'k absolutely depends on temperature; that is why reactions speed up when you heat them.', 'Temperature is the most important factor for k.'],
    ],
    lesson: 'Arrhenius: k = A exp(-Ea/RT). Higher T means more molecules exceed Ea, so k rises exponentially. A plot of ln(k) vs 1/T has slope -Ea/R, useful for finding activation energy.',
  },
  {
    id: 4400127,
    chapter: 'Unit 5: Kinetics',
    title: 'Rate-determining step',
    prompt: 'A proposed mechanism is: Step 1 (slow): A + B -> C; Step 2 (fast): C + B -> D. What is the predicted rate law, and why?',
    correct: 'rate = k[A][B]; the slow (rate-determining) first step controls the overall rate',
    wrong: [
      ['rate = k[A][B]^2; combine the stoichiometry of both elementary steps', 'You sum the elementary-step concentration dependences only when both steps contribute (e.g., when the slow step involves an intermediate). Here the slow step is the first step and uses only A and B once each.', 'Rate-determining step alone sets the rate when no intermediate is in it.'],
      ['rate = k[C][B]; the second step rate involves the intermediate', 'C is an intermediate produced and consumed, so it should not appear in the rate law. Express the rate in terms of original reactants from the slow step.', 'Intermediates do not appear in the overall rate law.'],
      ['rate = k[A]; the second step has nothing to do with the rate', 'The slow step is A + B -> C, which is bimolecular (one A and one B). The rate law must include [B].', 'Match the molecularity of the slow elementary step.'],
    ],
    lesson: 'For an elementary reaction, the rate law follows directly from stoichiometry. When the slow step comes first, the overall rate law is simply the rate law of that elementary step. Intermediates and fast post-RDS steps do not appear in the final rate law.',
  },
  {
    id: 4400128,
    chapter: 'Unit 5: Kinetics',
    title: 'Catalyst effect on energy profile',
    prompt: 'A catalyst affects a reaction\'s energy profile by:',
    correct: 'Providing an alternative pathway with a lower activation energy, without changing the overall delta-H',
    wrong: [
      ['Lowering the energy of the products to make the reaction more exothermic', 'Catalysts do not change thermodynamics (delta-H, delta-G, K). They only change kinetics (Ea and k).', 'Catalysts speed up reactions but do not change equilibrium.'],
      ['Raising the energy of the reactants to push them toward products', 'Catalysts do not raise reactant energy; they create a lower-energy transition state alternative.', 'Catalysts work by lowering the energy barrier.'],
      ['Lowering only the forward activation energy, not the reverse', 'Both forward and reverse activation energies are lowered by the same amount, so the equilibrium constant is unchanged.', 'Catalysts speed up both directions equally.'],
    ],
    lesson: 'Catalysts lower the activation energy (often by providing an alternative pathway), increasing both forward and reverse rate constants equally. They do not change delta-H, delta-G, or the equilibrium constant K.',
  },

  // -----------------------------------------------------------------------
  // Unit 6: Thermodynamics
  // -----------------------------------------------------------------------
  {
    id: 4400129,
    chapter: 'Unit 6: Thermodynamics',
    title: 'Hess\'s law application',
    prompt: 'Given (1) C(s) + O2(g) -> CO2(g) with delta-H1 = -394 kJ/mol; (2) CO(g) + 1/2 O2(g) -> CO2(g) with delta-H2 = -283 kJ/mol; what is delta-H for C(s) + 1/2 O2(g) -> CO(g)?',
    correct: '-111 kJ/mol',
    wrong: [
      ['-677 kJ/mol', 'You added the two enthalpies; instead, reverse equation 2 and add it to equation 1 (subtract -283 from -394).', 'Direction matters: a reversed equation flips the sign of delta-H.'],
      ['+111 kJ/mol', 'Sign error: forming CO from C and 1/2 O2 is exothermic (combustion releases heat).', 'Combustion-like steps are exothermic.'],
      ['-394 kJ/mol', 'That is the enthalpy of full combustion to CO2, not of partial combustion to CO.', 'Use Hess\'s law to combine equations.'],
    ],
    lesson: 'Hess\'s law: delta-H is path-independent. To find an unknown delta-H, manipulate the given thermochemical equations (reverse, multiply) until they sum to the target equation; combine their enthalpies the same way. (-394) - (-283) = -111 kJ/mol.',
  },
  {
    id: 4400130,
    chapter: 'Unit 6: Thermodynamics',
    title: 'Enthalpy from bond energies',
    prompt: 'Using bond energies (in kJ/mol): H-H = 436, Cl-Cl = 243, H-Cl = 431. What is delta-H for H2(g) + Cl2(g) -> 2 HCl(g)?',
    correct: '-183 kJ',
    wrong: [
      ['+183 kJ', 'Sign error: bond energies released (bonds formed) outweigh bonds broken when H-Cl bonds are stronger than the average of H-H and Cl-Cl.', 'Formula is bonds broken - bonds formed; if result is negative, reaction is exothermic.'],
      ['-862 kJ', 'You forgot to subtract the energy of bonds broken; you only counted bonds formed.', 'Use delta-H = sum(bonds broken) - sum(bonds formed).'],
      ['-118 kJ', 'You used only one H-Cl bond. The product 2 HCl contains two H-Cl bonds, so multiply 431 by 2.', 'Count the coefficient: 2 HCl means 2 H-Cl bonds.'],
    ],
    lesson: 'Delta-H ~ sum(bond energies of bonds broken in reactants) - sum(bond energies of bonds formed in products). Here: (436 + 243) - (2 x 431) = 679 - 862 = -183 kJ.',
  },
  {
    id: 4400131,
    chapter: 'Unit 6: Thermodynamics',
    title: 'Sign of entropy change',
    prompt: 'For the reaction 2 H2O(l) -> 2 H2(g) + O2(g), the sign of delta-S is most likely:',
    correct: 'Positive, because gas molecules are formed from a liquid and the number of gas particles increases',
    wrong: [
      ['Negative, because the products have fewer atoms per molecule', 'Number of atoms per molecule is not the right metric; phase changes from liquid to gas dramatically increase entropy.', 'Phase change to gas dominates entropy considerations.'],
      ['Zero, because mass is conserved', 'Conservation of mass has nothing to do with entropy; entropy concerns disorder and microstate availability.', 'Entropy is about disorder, not mass.'],
      ['Negative, because more energy is needed to break bonds', 'Energy required is delta-H, not delta-S. The number and phase of particles drives entropy changes.', 'Distinguish delta-H from delta-S.'],
    ],
    lesson: 'Predicting delta-S signs: increases (positive) when (1) solid/liquid -> gas, (2) moles of gas increase, (3) temperature rises, (4) a substance dissolves to make solution from solid. Decreases (negative) for the reverse.',
  },
  {
    id: 4400132,
    chapter: 'Unit 6: Thermodynamics',
    title: 'Gibbs free energy and favorability',
    prompt: 'A reaction has delta-H = +50 kJ/mol and delta-S = +200 J/(mol K). At what temperature does the reaction become thermodynamically favorable (delta-G < 0)?',
    correct: 'Above 250 K (since delta-G = 0 when T = delta-H / delta-S = 50000/200 = 250 K)',
    wrong: [
      ['Below 250 K', 'For endothermic reactions with positive delta-S, the entropy term -T delta-S becomes more negative at higher T, eventually overcoming positive delta-H. So favorable at HIGH T.', 'When both delta-H and delta-S are positive, raising T helps.'],
      ['At all temperatures', 'At low T, the +50 kJ enthalpy dominates and the reaction is unfavorable. It is favorable only above the crossover.', 'Positive delta-H disfavors at low T.'],
      ['Never; positive delta-H always means non-spontaneous', 'Positive delta-H alone does not preclude spontaneity if delta-S is positive enough at sufficient T (e.g., melting ice above 0 C).', 'Spontaneity depends on the combination delta-H - T delta-S.'],
    ],
    lesson: 'Delta-G = delta-H - T delta-S. When both are positive, delta-G < 0 only at high T (favored at high T). When both are negative, only at low T. Mixed signs give always-favored or never-favored at all T.',
  },
  {
    id: 4400133,
    chapter: 'Unit 6: Thermodynamics',
    title: 'Calorimetry calculation',
    prompt: 'A 50.0 g sample of metal at 100.0 degrees C is dropped into 100.0 g of water at 25.0 degrees C. The final temperature is 30.0 degrees C. What is the specific heat capacity of the metal? (Water\'s specific heat = 4.18 J/(g K).)',
    correct: 'About 0.598 J/(g K)',
    wrong: [
      ['About 4.18 J/(g K)', 'You used water\'s specific heat instead of solving for the metal\'s. Set q_metal = -q_water and isolate c_metal.', 'Apply conservation of energy between the two substances.'],
      ['About 2.39 J/(g K)', 'Arithmetic error; you may have confused the temperature changes. Water: delta-T = 5.0 K; metal: delta-T = -70.0 K. Different magnitudes.', 'The metal cools more than the water warms.'],
      ['About 0.0598 J/(g K)', 'Off by a factor of 10; m_water x c_water x delta-T_water = 100.0 x 4.18 x 5.0 = 2090 J, and 2090 / (50.0 x 70.0) = 0.597.', 'Check the order of magnitude.'],
    ],
    lesson: 'In a calorimetry problem: q_lost = -q_gained, so m_metal x c_metal x delta-T_metal = -m_water x c_water x delta-T_water. Solve for the unknown, watching signs and units.',
  },
  {
    id: 4400134,
    chapter: 'Unit 6: Thermodynamics',
    title: 'Standard enthalpy of formation',
    prompt: 'Which species has, by definition, delta-Hf = 0?',
    correct: 'O2(g)',
    wrong: [
      ['O3(g)', 'Ozone is not the most stable form of oxygen at 25 C and 1 atm. O2 is the reference standard state.', 'Reference state is the most stable allotrope under standard conditions.'],
      ['H2O(l)', 'Water is a compound and has a nonzero formation enthalpy (about -285.8 kJ/mol).', 'Compounds always have nonzero delta-Hf.'],
      ['CO2(g)', 'Carbon dioxide is a compound formed from C and O2; its delta-Hf is about -393.5 kJ/mol.', 'Only elements in their standard state have zero delta-Hf.'],
    ],
    lesson: 'Delta-Hf = 0 for elements in their standard (most stable) state at 1 atm and (usually) 25 C: O2(g), N2(g), H2(g), Na(s), Cl2(g), graphite (C), etc.',
  },

  // -----------------------------------------------------------------------
  // Unit 7: Equilibrium
  // -----------------------------------------------------------------------
  {
    id: 4400135,
    chapter: 'Unit 7: Equilibrium',
    title: 'Le Chatelier with temperature',
    prompt: 'For an exothermic reaction A + B <-> C + D + heat, what is the effect on the equilibrium position and on K when the temperature is increased?',
    correct: 'Equilibrium shifts left (toward reactants); K decreases',
    wrong: [
      ['Equilibrium shifts right; K increases', 'Adding heat to an exothermic equilibrium is like adding a "product" (heat is on the right). The system shifts left to relieve it, and K decreases.', 'Treat heat as a product in exothermic reactions.'],
      ['Equilibrium shifts right; K is unchanged', 'Temperature is the only stress that changes K. Concentration and pressure changes shift position but leave K alone; T changes both.', 'Only temperature changes K.'],
      ['Equilibrium does not shift, but K decreases', 'A change in K necessarily means the equilibrium position changes (more reactants relative to products).', 'A new K implies a new equilibrium mix.'],
    ],
    lesson: 'For exothermic reactions, raising T shifts equilibrium left and decreases K. For endothermic reactions, raising T shifts right and increases K. This is the only stress that changes K itself.',
  },
  {
    id: 4400136,
    chapter: 'Unit 7: Equilibrium',
    title: 'Reaction quotient Q vs K',
    prompt: 'For a reaction with K = 2.0, the current concentration ratio gives Q = 5.0. In which direction will the reaction proceed to reach equilibrium?',
    correct: 'Reverse (right to left, forming more reactants)',
    wrong: [
      ['Forward (left to right)', 'Q > K means too many products; the system shifts back toward reactants.', 'Q too big = shift to reduce products.'],
      ['No net shift; the system is at equilibrium', 'Q = K is the equilibrium condition; Q != K means the system is not at equilibrium and must shift.', 'Compare Q and K to determine direction.'],
      ['Forward, because Q is positive', 'The sign of Q is not relevant; the comparison Q vs K determines direction.', 'Compare magnitudes of Q and K.'],
    ],
    lesson: 'If Q < K, the reaction proceeds forward (more products needed). If Q > K, the reaction proceeds in reverse (too many products, need to make more reactants). If Q = K, equilibrium.',
  },
  {
    id: 4400137,
    chapter: 'Unit 7: Equilibrium',
    title: 'ICE table simple equilibrium',
    prompt: 'For the equilibrium N2O4(g) <-> 2 NO2(g) with Kc = 4.0, if the initial concentration of N2O4 is 1.0 M and no NO2 is present, what is the equilibrium concentration of NO2? (Assume small-x is not justified.)',
    correct: 'About 1.24 M',
    wrong: [
      ['2.0 M', 'You assumed all the N2O4 dissociated, which would be the case only if K were infinite.', 'Kc = 4.0 is large but finite; some N2O4 remains.'],
      ['About 0.62 M', 'You may have forgotten to multiply x by 2 to get [NO2]. The ICE table gives [NO2] = 2x, where x is the moles N2O4 reacted.', 'For 2 NO2, [NO2] = 2x.'],
      ['About 0.5 M', 'Underestimate; this would require K to be much smaller. With Kc = 4.0, dissociation is substantial.', 'Solve the quadratic from the ICE table.'],
    ],
    lesson: 'ICE table for N2O4 <-> 2 NO2 with Kc = 4.0: [(2x)^2]/(1-x) = 4. Expanding: 4x^2 = 4 - 4x, so 4x^2 + 4x - 4 = 0, x^2 + x - 1 = 0, x = (-1 + sqrt(5))/2 ~ 0.618. Then [NO2] = 2x ~ 1.24 M.',
  },
  {
    id: 4400138,
    chapter: 'Unit 7: Equilibrium',
    title: 'Common ion effect on Ksp',
    prompt: 'AgCl has Ksp = 1.8 x 10^-10. In which solution will AgCl be LEAST soluble?',
    correct: '0.10 M NaCl(aq)',
    wrong: [
      ['Pure water', 'In pure water, AgCl reaches its full Ksp-determined solubility. Adding Cl- through NaCl suppresses dissolution (common ion effect).', 'Common ions decrease solubility.'],
      ['0.10 M NaNO3(aq)', 'Na+ and NO3- are spectator ions for AgCl and do not share an ion with AgCl, so solubility is essentially unchanged from water.', 'Look for an ion shared with AgCl.'],
      ['0.10 M HNO3(aq)', 'HNO3 contributes H+ and NO3-, neither of which is common to AgCl. Solubility is unchanged.', 'Need a shared ion (Ag+ or Cl-).'],
    ],
    lesson: 'Common ion effect: adding an ion already in the equilibrium shifts the equilibrium toward the undissolved solid (Le Chatelier), reducing solubility. NaCl provides extra Cl-, which suppresses AgCl dissolution.',
  },
  {
    id: 4400139,
    chapter: 'Unit 7: Equilibrium',
    title: 'Pressure change and gas equilibrium',
    prompt: 'For the equilibrium 2 SO2(g) + O2(g) <-> 2 SO3(g), how does increasing the total pressure (by decreasing the container volume) shift the equilibrium?',
    correct: 'To the right, toward fewer moles of gas (toward SO3)',
    wrong: [
      ['To the left, toward more moles of gas', 'Increasing pressure shifts toward the side with FEWER moles of gas. Reactant side has 3 moles, product side has 2 moles, so shift is right.', 'Count moles of gas on each side.'],
      ['No shift; pressure does not affect equilibrium', 'Pressure changes do shift equilibria when the total moles of gas differ between sides.', 'Pressure matters when delta-n(gas) is nonzero.'],
      ['Shift depends on the value of K, not pressure', 'Direction of pressure-induced shift depends on stoichiometry (moles of gas), not the value of K.', 'Le Chatelier predicts direction from stoichiometry.'],
    ],
    lesson: 'For gaseous equilibria, increasing pressure (decreasing volume) shifts toward the side with fewer moles of gas; decreasing pressure shifts toward more moles of gas. Pressure changes do not change K, only position.',
  },
  {
    id: 4400140,
    chapter: 'Unit 7: Equilibrium',
    title: 'Kp from Kc',
    prompt: 'For the reaction N2(g) + 3 H2(g) <-> 2 NH3(g) at 500 K, Kc = 0.061. What is Kp? (Use R = 0.0821 L atm/(mol K).)',
    correct: 'About 3.62 x 10^-5',
    wrong: [
      ['About 0.061 (same as Kc)', 'Kp = Kc only when delta-n(gas) = 0. Here delta-n = 2 - 4 = -2, so Kp differs from Kc.', 'Kp = Kc(RT)^(delta-n).'],
      ['About 102', 'You may have used delta-n with the wrong sign. Delta-n = (moles gas products) - (moles gas reactants) = 2 - 4 = -2.', 'Carefully compute delta-n.'],
      ['About 2.50', 'Arithmetic error; Kc x (RT)^(-2) = 0.061 / (0.0821 x 500)^2 = 0.061 / 1685 ~ 3.62 x 10^-5.', 'Compute (RT)^2 first.'],
    ],
    lesson: 'Kp = Kc x (RT)^(delta-n), where delta-n is the change in moles of gas (products - reactants). For 2 NH3 from N2 + 3 H2, delta-n = -2.',
  },

  // -----------------------------------------------------------------------
  // Unit 8: Acids & Bases
  // -----------------------------------------------------------------------
  {
    id: 4400141,
    chapter: 'Unit 8: Acids and Bases',
    title: 'pH of strong acid',
    prompt: 'What is the pH of a 0.025 M HCl(aq) solution?',
    correct: 'About 1.60',
    wrong: [
      ['About 12.4', 'That is the pOH, not the pH. HCl is a strong acid; the solution is acidic with pH well below 7.', 'pH + pOH = 14; strong acids give low pH.'],
      ['About 2.5', 'Order-of-magnitude error; pH = -log(0.025) = -log(2.5 x 10^-2) = 1.60.', 'Use -log[H+] carefully.'],
      ['About 0.025', 'This is the concentration in M, not the pH. pH requires the negative log.', 'Take the negative log of [H+].'],
    ],
    lesson: 'For a strong monoprotic acid: pH = -log[HA]_0. HCl, HNO3, H2SO4 (first proton), HBr, HI, HClO4, HClO3 are the AP-listed strong acids.',
  },
  {
    id: 4400142,
    chapter: 'Unit 8: Acids and Bases',
    title: 'Ka and Kb relationship',
    prompt: 'Acetic acid (CH3COOH) has Ka = 1.8 x 10^-5. What is Kb for its conjugate base, acetate (CH3COO-), at 25 degrees C?',
    correct: 'About 5.6 x 10^-10',
    wrong: [
      ['About 1.8 x 10^-5 (same as Ka)', 'Ka and Kb are not equal except in unusual cases. The relationship is Ka x Kb = Kw = 1.0 x 10^-14.', 'Use Ka x Kb = Kw.'],
      ['About 1.0 x 10^-14', 'That is Kw, not Kb. Compute Kb = Kw / Ka.', 'Kw is the ion product of water, not Kb.'],
      ['About 1.8 x 10^9', 'You divided Ka by Kw instead of the other way; this gives an enormous unphysical Kb.', 'Kb = Kw / Ka, with Kw the small number.'],
    ],
    lesson: 'For a conjugate acid-base pair at 25 C: Ka x Kb = Kw = 1.0 x 10^-14. Strong acid means very weak conjugate base; weak acid means weak conjugate base too (but stronger than for a strong acid).',
  },
  {
    id: 4400143,
    chapter: 'Unit 8: Acids and Bases',
    title: 'Buffer pH (Henderson-Hasselbalch)',
    prompt: 'A buffer contains 0.20 M acetic acid (pKa = 4.74) and 0.40 M sodium acetate. What is the pH?',
    correct: 'About 5.04',
    wrong: [
      ['About 4.74', 'That would be the pH only if [base] = [acid]. Here [base] > [acid], so pH > pKa.', 'Apply Henderson-Hasselbalch: pH = pKa + log([A-]/[HA]).'],
      ['About 4.44', 'Sign error: log(0.40/0.20) = log(2) ~ +0.30, so pH = 4.74 + 0.30 = 5.04, not 4.74 - 0.30.', 'Conjugate base in excess raises pH.'],
      ['About 9.26', 'You used the pKb or pOH instead. pKa = 4.74 corresponds to a weak acid; the buffer pH is mildly acidic.', 'Weak-acid buffers are typically acidic.'],
    ],
    lesson: 'Henderson-Hasselbalch: pH = pKa + log([conjugate base]/[acid]). When [base] = [acid], pH = pKa. When [base] > [acid], pH > pKa. Reverse ratios give the opposite.',
  },
  {
    id: 4400144,
    chapter: 'Unit 8: Acids and Bases',
    title: 'Titration equivalence point pH',
    prompt: 'In the titration of a weak acid (e.g., acetic acid) with a strong base (NaOH), the pH at the equivalence point is:',
    correct: 'Greater than 7, because the conjugate base of the weak acid hydrolyzes to produce OH-',
    wrong: [
      ['Exactly 7, because equal moles of acid and base have reacted', 'Exactly 7 occurs only for strong-acid/strong-base titrations. For weak acid + strong base, the conjugate base remains and raises pH above 7.', 'Equivalence point pH depends on the species left in solution.'],
      ['Less than 7, because some weak acid is still present', 'At the equivalence point, all the weak acid has been neutralized; only its conjugate base remains.', 'Equivalence = stoichiometric completion.'],
      ['Equal to the pKa of the weak acid', 'pH = pKa occurs at the HALF-equivalence point, not the equivalence point.', 'Half-equivalence: pH = pKa.'],
    ],
    lesson: 'Equivalence-point pH depends on the species at completion. Strong acid + strong base: pH = 7. Weak acid + strong base: pH > 7 (basic conjugate). Strong acid + weak base: pH < 7 (acidic conjugate). Half-equivalence: pH = pKa.',
  },
  {
    id: 4400145,
    chapter: 'Unit 8: Acids and Bases',
    title: 'Choosing an indicator',
    prompt: 'For the titration of a weak acid (pKa = 4.74) with a strong base, which indicator is most appropriate?',
    correct: 'Phenolphthalein (pKa about 9), which changes color near pH 8-10 (close to the equivalence point pH)',
    wrong: [
      ['Methyl orange (pKa about 3.5), which changes color near pH 3-4', 'Methyl orange changes color in acidic regions before the equivalence point, giving a poor endpoint match.', 'Choose an indicator whose pKa is near the equivalence-point pH.'],
      ['Bromothymol blue, which changes color near pH 6-8', 'Bromothymol blue is good for strong-acid/strong-base titrations (equivalence at pH 7), but weak-acid/strong-base titrations have equivalence well above 7.', 'Match indicator pKa to expected equivalence pH.'],
      ['No indicator is appropriate; use a pH meter only', 'Indicators work fine when chosen properly. Phenolphthalein is the standard choice for weak-acid/strong-base titrations.', 'Indicators are valid for the right pH range.'],
    ],
    lesson: 'Choose an indicator whose pKa (transition pH) lies within the steep portion of the titration curve, near the equivalence-point pH. Phenolphthalein for weak-acid/strong-base; methyl orange for strong-acid/weak-base.',
  },
  {
    id: 4400146,
    chapter: 'Unit 8: Acids and Bases',
    title: 'Strong vs weak acid distinction',
    prompt: 'Which statement best distinguishes a strong acid from a weak acid?',
    correct: 'A strong acid fully ionizes in water, while a weak acid only partially ionizes',
    wrong: [
      ['A strong acid is more concentrated than a weak acid', 'Strength refers to the degree of ionization, not concentration. You can have dilute HCl (strong) and concentrated acetic acid (weak).', 'Strength and concentration are different ideas.'],
      ['A strong acid has more hydrogen atoms in its formula', 'Polyprotic does not mean strong: H2SO3 has two H atoms but is weak, while HCl has one and is strong.', 'Number of H is unrelated to strength.'],
      ['A strong acid has a higher pH than a weak acid at the same concentration', 'Reverse: at the same concentration, a strong acid has a LOWER pH (more H+) than a weak acid.', 'More H+ means lower pH.'],
    ],
    lesson: 'Strength is about ionization extent in water, not concentration or number of acidic protons. A strong acid (like HCl) completely dissociates; a weak acid (like acetic acid) reaches equilibrium with most molecules intact.',
  },

  // -----------------------------------------------------------------------
  // Unit 9: Applications of Thermodynamics and Equilibrium (Electrochem)
  // -----------------------------------------------------------------------
  {
    id: 4400147,
    chapter: 'Unit 9: Applications of Thermodynamics and Equilibrium',
    title: 'Standard cell potential from half-reactions',
    prompt: 'For a galvanic cell built from Zn/Zn2+ (E_red = -0.76 V) and Cu/Cu2+ (E_red = +0.34 V), what is the standard cell potential E_cell?',
    correct: '+1.10 V (zinc oxidized at anode, copper reduced at cathode)',
    wrong: [
      ['-1.10 V', 'Sign convention: a galvanic cell has a positive E_cell. The species with more positive E_red is the cathode (reduction); subtract anode E_red from cathode E_red.', 'Galvanic cells have positive E_cell.'],
      ['+0.42 V', 'You may have added the two values with mismatched signs. E_cell = E_red(cathode) - E_red(anode) = 0.34 - (-0.76) = 1.10 V.', 'Subtract the anode reduction potential.'],
      ['+0.34 V (only the copper half-cell contributes)', 'Both half-cells contribute to the cell potential.', 'Take both half-reactions into account.'],
    ],
    lesson: 'E_cell = E_red(cathode) - E_red(anode), both as reduction potentials. The half-cell with the more positive E_red becomes the cathode. Positive E_cell means a galvanic (spontaneous) cell; negative means electrolytic (requires external voltage).',
  },
  {
    id: 4400148,
    chapter: 'Unit 9: Applications of Thermodynamics and Equilibrium',
    title: 'Delta-G and K relationship',
    prompt: 'A reaction has delta-G_naught = -50 kJ/mol at 298 K. Which best describes K for this reaction?',
    correct: 'K is much greater than 1 (products favored)',
    wrong: [
      ['K is much less than 1 (reactants favored)', 'Negative delta-G corresponds to K > 1. The relationship delta-G_naught = -RT ln K means a negative delta-G implies a positive ln K, hence K > 1.', 'Negative delta-G favors products.'],
      ['K is approximately 1 (about equal concentrations)', 'K = 1 corresponds to delta-G_naught = 0. A delta-G of -50 kJ/mol is far from zero.', 'Delta-G_naught = 0 implies K = 1.'],
      ['K cannot be determined without knowing delta-H and delta-S', 'Delta-G_naught alone determines K via delta-G_naught = -RT ln K; we do not need the components.', 'One equation, one unknown.'],
    ],
    lesson: 'Delta-G_naught = -RT ln K. Negative delta-G means ln K > 0, so K > 1 (products favored). Positive delta-G means K < 1 (reactants favored). At equilibrium, delta-G_naught = 0 gives K = 1.',
  },
  {
    id: 4400149,
    chapter: 'Unit 9: Applications of Thermodynamics and Equilibrium',
    title: 'Nernst equation qualitative shift',
    prompt: 'For a galvanic cell, when the concentration of the product ion in the cathode compartment is increased above standard conditions, the measured cell potential E_cell:',
    correct: 'Decreases, because Q increases and E_cell = E_naught - (RT/nF) ln Q',
    wrong: [
      ['Increases, because more product makes the reaction more favorable', 'Increasing product concentration increases Q, which DECREASES E_cell (Le Chatelier perspective: system pushes back toward reactants).', 'More product = lower driving force.'],
      ['Stays the same, because E_naught is a fixed standard value', 'E_naught is fixed, but the actual E_cell varies with Q according to the Nernst equation.', 'Nernst predicts non-standard E_cell.'],
      ['Becomes negative immediately', 'E_cell decreases gradually; it only becomes negative when Q exceeds K (and the cell is then "dead").', 'Negative E_cell signals the cell is past equilibrium.'],
    ],
    lesson: 'Nernst equation: E_cell = E_naught - (RT/nF) ln Q (or - (0.0592/n) log Q at 25 C). Higher Q (more products / fewer reactants) reduces E_cell, consistent with Le Chatelier. At equilibrium, E_cell = 0 and Q = K.',
  },
])

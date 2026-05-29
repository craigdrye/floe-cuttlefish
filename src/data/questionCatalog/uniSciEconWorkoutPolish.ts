// Bespoke mentor hints and sub-topic clusters for the five university-level
// science and economics workout banks (Organic Chemistry, Cosmology and
// Astronomy, Neuroscience, Macroeconomics, Microeconomics).
//
// Each mentor hint is bespoke to the question's prompt + correct answer,
// names the mechanism/law/structure, and stays under ~180 characters.

export const UNI_SCIECON_WORKOUT_SUB_TOPICS: Record<string, number[]> = {
  // ---------- Organic Chemistry (418001-418050) ----------
  'Structure and Bonding': [418001, 418005, 418006, 418007, 418008],
  Hybridization: [418002, 418003, 418004],
  'Acid Base Chemistry': [418009, 418010, 418011, 418012],
  Stereochemistry: [418013, 418014, 418015, 418016],
  Conformations: [418017, 418018, 418019],
  'Substitution Reactions': [418020, 418021, 418022, 418023],
  Elimination: [418024, 418025, 418026],
  'Alkene Addition': [418027, 418028, 418029, 418030],
  Alkynes: [418031, 418032],
  Aromaticity: [418033, 418034],
  'Aromatic Substitution': [418035, 418036, 418037],
  Alcohols: [418038, 418039],
  'Ethers and Epoxides': [418040],
  Carbonyls: [418041, 418042],
  'Carboxylic Acids and Derivatives': [418043, 418044],
  Amines: [418045],
  Spectroscopy: [418046, 418047, 418048],
  Synthesis: [418049, 418050],

  // ---------- Cosmology and Astronomy (413001-413050) ----------
  'Observing the Sky': [413001, 413002, 413003, 413004, 413005],
  'Solar System': [413006, 413007, 413008, 413009, 413010],
  'The Moon and Eclipses': [413011, 413012, 413013, 413014, 413015],
  'Stars - Properties': [413016, 413017, 413018, 413019, 413020, 413021],
  'Stellar Evolution': [413022, 413023, 413024, 413025],
  Galaxies: [413026, 413027, 413028, 413029, 413030],
  'Big Bang Cosmology': [413031, 413032, 413033, 413034, 413035, 413036, 413037],
  'Astronomical Tools': [413038, 413039, 413040],
  'History of Astronomy': [413041, 413042, 413043, 413044, 413045],
  'Small Solar System Bodies': [413046, 413047, 413048, 413049],
  Habitability: [413050],

  // ---------- Neuroscience (408001-408050) ----------
  'Neuron Structure': [408001, 408002, 408003, 408004, 408005],
  'Action Potentials': [408006, 408007, 408008, 408009, 408010],
  'Synaptic Transmission': [408011, 408012, 408013, 408014, 408015, 408016],
  Neurotransmitters: [408017, 408018, 408019, 408020],
  'Nervous System Divisions': [408021, 408022, 408023, 408024, 408025, 408026],
  'Subcortical Brain Regions': [408027, 408028, 408029, 408030, 408031, 408032],
  'Cortical Lobes': [408033, 408034, 408035, 408036],
  'Language Areas': [408037, 408038],
  'Imaging Methods': [408039, 408040, 408041, 408042],
  'Plasticity and Learning': [408043, 408044, 408045],
  'Sensory Receptors': [408046, 408047],
  'Clinical Neuroscience': [408048, 408049, 408050],

  // ---------- Macroeconomics (421001-421050) ----------
  'Macro Indicators': [
    421001, 421002, 421003, 421004, 421005, 421006, 421007, 421008, 421009, 421010,
  ],
  'Business Cycle': [421011, 421012, 421013],
  'AD-AS Model': [421014, 421015, 421016, 421017, 421018, 421019],
  'Fiscal Policy and Multipliers': [421020, 421021, 421022, 421023, 421024, 421025],
  'Money and Banking': [421026, 421027, 421028, 421029, 421030],
  'Monetary Policy': [421031, 421032, 421033, 421034, 421035],
  'Inflation and Unemployment': [
    421036, 421037, 421038, 421039, 421040, 421041,
  ],
  'Long-Run Growth': [421042, 421043, 421044, 421045],
  'Open Economy and Exchange Rates': [421046, 421047, 421048, 421049, 421050],

  // ---------- Microeconomics (422001-422050) ----------
  'Choice and Tradeoffs': [422001, 422002, 422003, 422004],
  'Demand and Supply': [422005, 422006, 422007, 422008, 422009, 422010],
  Elasticity: [422011, 422012, 422013, 422014, 422015],
  'Consumer Theory': [422016, 422017, 422018, 422019, 422020],
  'Producer Theory': [422021, 422022, 422023, 422024, 422025],
  'Perfect Competition': [422026, 422027, 422028],
  'Monopoly and Imperfect Competition': [422029, 422030, 422031, 422032, 422033],
  'Game Theory': [422034, 422035],
  'Welfare and Government Intervention': [422036, 422037, 422038, 422039],
  Externalities: [422040, 422041],
  'Public Goods and Commons': [422042, 422043, 422044, 422045],
  'Labor Markets': [422046, 422047],
  'Asymmetric Information': [422048, 422049],
  'Natural Monopoly Regulation': [422050],
}

export const UNI_SCIECON_WORKOUT_MENTOR_HINTS: Record<number, string> = {
  // ---------- Organic Chemistry ----------
  418001:
    'Neutral carbon needs four covalent bonds to complete its octet of eight valence electrons - tetravalence drives nearly every organic structure.',
  418002:
    'Four sp3 hybrid orbitals point to the corners of a tetrahedron at 109.5 degrees - that is methane and every saturated carbon center.',
  418003:
    'Three sp2 hybrids leave one unhybridized p orbital for the pi bond - the carbon sits flat with 120 degree bond angles, as in ethene.',
  418004:
    'Two sp hybrids leave two perpendicular p orbitals for the pi system - linear 180 degree geometry as in acetylene and nitriles.',
  418005:
    'Sigma bonds form by direct head-on overlap along the internuclear axis - they are the strong single-bond framework of every organic molecule.',
  418006:
    'Pi bonds form by parallel side-on overlap of two p orbitals above and below the sigma axis - they are weaker and restrict rotation in alkenes.',
  418007:
    'Formal charge is just electron bookkeeping: valence electrons minus lone-pair electrons minus half the bonding electrons assigned to that atom.',
  418008:
    'The best resonance contributor obeys the octet rule and pushes formal charges toward zero - especially negative charge onto the more electronegative atom.',
  418009:
    'A Bronsted-Lowry acid is a proton donor; the conjugate base is what remains after H+ leaves - distinct from Lewis acid-base electron-pair chemistry.',
  418010:
    'Stronger acids have more stable conjugate bases - resonance, induction, and electronegativity all stabilize the negative charge that forms.',
  418011:
    'pKa is -log(Ka), so lower pKa means larger Ka and a stronger acid - sulfuric acid sits near -3 while ethanol sits near 16.',
  418012:
    'Electron-withdrawing groups stabilize nearby negative charge by inductive pull - that is why trichloroacetic acid is much stronger than acetic acid.',
  418013:
    'A stereocenter is a tetrahedral carbon bonded to four different substituents - that asymmetry is what generates non-superimposable mirror images.',
  418014:
    'Enantiomers are non-superimposable mirror images with opposite R/S at every stereocenter - identical physical properties except optical rotation.',
  418015:
    'Diastereomers are stereoisomers that are not mirror images - they differ in some but not all stereocenters and have different physical properties.',
  418016:
    'A meso compound has stereocenters but an internal mirror plane cancels the chirality - it is optically inactive despite having R and S centers.',
  418017:
    'Staggered ethane minimizes torsional strain by separating the C-H bonds with a 60 degree dihedral - eclipsed conformers cost about 3 kcal/mol.',
  418018:
    'The chair conformation puts every C-C-C angle near 109.5 degrees and staggers all adjacent C-H bonds - the half-chair and boat conformers are higher energy.',
  418019:
    'Axial bonds in the chair alternate up-down parallel to the ring axis - equatorial bonds splay outward and are usually preferred for bulky substituents.',
  418020:
    'SN2 is a one-step concerted backside attack: the nucleophile pushes in as the leaving group departs, inverting stereochemistry like an umbrella in the wind.',
  418021:
    'SN2 is bimolecular: rate = k[substrate][nucleophile] - both species appear in the rate-determining transition state.',
  418022:
    'SN1 ionizes first to a flat carbocation, then the nucleophile attacks - tertiary substrates and polar protic solvents favor this stepwise route.',
  418023:
    'The planar SN1 carbocation can be attacked from either face, giving racemization - SN2 by contrast inverts cleanly via backside Walden inversion.',
  418024:
    'E2 is concerted: a strong base removes the beta hydrogen while the leaving group departs anti-periplanar, forming the pi bond in one step.',
  418025:
    'Zaitsev predicts the more substituted alkene because hyperconjugation and alkyl donation stabilize the more substituted pi bond - the thermodynamic product.',
  418026:
    'Bulky bases like tert-butoxide cannot reach internal beta hydrogens, so they grab the more accessible terminal H - Hofmann (less substituted) alkene wins.',
  418027:
    'Markovnikov addition routes the proton to the carbon already bearing more H atoms, placing the carbocation (and X) on the more substituted carbon.',
  418028:
    'Hydroboration-oxidation gives anti-Markovnikov syn hydration: BH3 adds with boron on the less hindered carbon, then peroxide swaps B for OH with retention.',
  418029:
    'Br2 adds through a three-membered bromonium ion intermediate - the second bromide opens it from the opposite face, giving anti dibromide stereochemistry.',
  418030:
    'Ozonolysis cleaves the C=C double bond entirely; reductive workup with Zn/H2O gives two carbonyl fragments (aldehydes or ketones).',
  418031:
    'Terminal alkyne C-H has pKa around 25 because the conjugate base sits in an sp orbital with 50 percent s-character - that holds the negative charge close to the nucleus.',
  418032:
    'Acetylide anions are strong carbon nucleophiles - they attack primary alkyl halides via SN2 to forge new C-C bonds, but eliminate on hindered substrates.',
  418033:
    'Huckel rule: 4n+2 pi electrons in a planar, fully conjugated cyclic system - benzene with 6, naphthalene with 10, cyclopentadienyl anion with 6.',
  418034:
    'Benzene has three pi bonds, two electrons each, giving six delocalized pi electrons - that matches Huckel 4n+2 with n=1.',
  418035:
    'In EAS the arenium (sigma) intermediate forms, then deprotonation restores aromaticity - so the aromatic sextet survives and the ring keeps its stability.',
  418036:
    'Activating ortho/para directors (alkyl, OR, NR2) donate electrons to stabilize the arenium ion when attack lands at ortho or para positions.',
  418037:
    'Strongly deactivating groups (NO2, CN, SO3H, carbonyls) withdraw electrons - they destabilize ortho/para arenium ions, so meta substitution dominates.',
  418038:
    'PCC stops a primary alcohol at the aldehyde; chromic acid or KMnO4 oxidizes all the way to the carboxylic acid by going through the aldehyde hydrate.',
  418039:
    'Secondary alcohols oxidize to ketones - they lack the second alpha hydrogen needed to climb further to a carboxylic acid.',
  418040:
    'Epoxides carry roughly 27 kcal/mol of ring strain in a three-membered C-C-O ring - nucleophiles open them readily despite ethers normally being inert.',
  418041:
    'C=O is highly polarized toward oxygen, leaving carbon with a partial positive charge and a low-lying pi-star LUMO - the classic electrophilic site for nucleophiles.',
  418042:
    'Aldehydes and ketones undergo nucleophilic addition at the carbonyl carbon - the pi bond breaks and oxygen picks up the electrons as alkoxide.',
  418043:
    'Acyl reactivity tracks leaving-group ability: chloride is a weak base and good leaving group, while alkoxide is strongly basic - so acid chlorides outrun esters.',
  418044:
    'Fischer esterification is acid-catalyzed equilibrium: carboxylic acid + alcohol go to ester + water - drive it forward by removing water or using excess alcohol.',
  418045:
    'Amine basicity comes from the nitrogen lone pair grabbing H+ to form an ammonium - pKa of the conjugate acid for an aliphatic amine sits near 10.',
  418046:
    'A strong sharp peak near 1700 cm^-1 is the C=O stretch - ketones near 1715, aldehydes near 1725, esters near 1735, carboxylic acids near 1710.',
  418047:
    'n+1 rule: n equivalent neighboring protons split a signal into n+1 lines with Pascal-triangle intensities - a CH2 next to a CH3 gives a quartet.',
  418048:
    'Electronegative atoms (O, N, halogen) deshield nearby protons by pulling electron density away - the resonance shifts downfield to higher ppm.',
  418049:
    'Retrosynthesis works backward through strategic disconnections - find C-C or C-X bonds to cleave that map onto known forward reactions and synthons.',
  418050:
    'Chemoselectivity is the choice between functional groups - NaBH4 reduces aldehydes but not esters; LiAlH4 takes both - pick the reagent that targets only what you need.',

  // ---------- Cosmology and Astronomy ----------
  413001:
    'Astronomy studies celestial objects and phenomena beyond Earth - stars, planets, galaxies, and cosmic radiation - using physics, chemistry, and observation.',
  413002:
    'One light-year equals about 9.46 trillion kilometers - the distance light travels in vacuum in a Julian year. Despite the name, it is a distance, not a time.',
  413003:
    'One AU is about 150 million kilometers, the mean Earth-Sun distance - the natural ruler for measuring orbits inside the Solar System.',
  413004:
    'Parallax uses Earth-orbit baseline of 2 AU to triangulate nearby stars - 1 arcsecond shift gives 1 parsec (3.26 light-years).',
  413005:
    'Apparent brightness follows inverse-square law: flux = luminosity / (4 pi d^2) - a star twice as far away appears one-quarter as bright.',
  413006:
    'Orbits are gravity bending what would otherwise be straight-line inertial motion - Newton showed the same g that pulls apples down holds planets in their paths.',
  413007:
    'Keplers first law: planetary orbits are ellipses with the Sun at one focus - perfect circles are a special case Galileo and Copernicus had clung to.',
  413008:
    'Keplers second law (equal areas in equal times) means planets sweep faster at perihelion - Earth moves about 30.3 km/s in January, 29.3 km/s in July.',
  413009:
    'Keplers third law: T^2 is proportional to a^3 (in AU and years for the Sun) - a planet twice as far orbits in 2.83 times the period.',
  413010:
    'Tides come from the gradient of the Moons and Suns gravity across Earth - the Moon dominates (about twice the solar tide) and creates spring/neap variation.',
  413011:
    'Phases come from the changing geometry of Sun-Moon-Earth - we see a varying fraction of the Moons sunlit hemisphere as it orbits Earth once per month.',
  413012:
    'Tidal locking makes the Moons rotation period equal its orbital period (~27.3 days) - so the same hemisphere always faces Earth.',
  413013:
    'A lunar eclipse needs Sun-Earth-Moon alignment with Earth in the middle - Earths shadow falls on the full Moon, often giving the reddish blood-moon Rayleigh tint.',
  413014:
    'A solar eclipse needs Sun-Moon-Earth alignment with the new Moon in the middle - the lunar shadow paints a narrow path of totality across Earth.',
  413015:
    'No atmosphere, no liquid water, and no plate tectonics means lunar impact craters preserved for billions of years - Earth erases its craters in a geologic blink.',
  413016:
    'Stars shine by nuclear fusion in their cores - the proton-proton chain or CNO cycle converts hydrogen to helium and releases energy via E=mc^2.',
  413017:
    'Main-sequence stars fuse hydrogen into helium - the Sun is about 90 percent of the way through its main-sequence lifetime.',
  413018:
    'Luminosity is the total power output in watts integrated over all wavelengths - distinct from apparent brightness which depends on distance.',
  413019:
    'Wiens law links color to temperature: blue O and B stars run 20000-40000 K, red M dwarfs sit near 3000 K - hotter peaks shorter wavelength.',
  413020:
    'The H-R diagram plots luminosity (or absolute magnitude) versus temperature (or spectral class OBAFGKM) - reveals the main sequence, giants, and white dwarfs.',
  413021:
    'Main-sequence stars sit in hydrostatic equilibrium: gravity inward balances radiation/gas pressure from core hydrogen fusion outward.',
  413022:
    'When core hydrogen exhausts, the core contracts and shell hydrogen burning expands the envelope - the star reddens and swells into a red giant.',
  413023:
    'White dwarfs are electron-degenerate cores left after low/mid-mass stars shed their envelopes as planetary nebulae - Chandrasekhar limit is 1.4 solar masses.',
  413024:
    'A supernova is a stellar explosion releasing about 10^44 joules - Type Ia from white-dwarf detonation, Type II from massive-star core collapse.',
  413025:
    'Neutron stars are degenerate neutron remnants of core-collapse supernovae - about 1.4 solar masses packed into 20 km radius, density beyond nuclear matter.',
  413026:
    'A galaxy is a gravitationally bound system of stars, gas, dust, and dark matter - typical luminous galaxies host 10^8 to 10^12 stars.',
  413027:
    'The Milky Way is our barred spiral galaxy, roughly 100000 light-years across with about 200 billion stars - the Sun sits about 26000 light-years from the center.',
  413028:
    'Spiral galaxies show a flat rotating disk with arms, a central bulge, and a halo - Sa to Sc Hubble types differ in arm tightness and bulge size.',
  413029:
    'Ellipticals (E0 to E7) are smooth ellipsoids with old stellar populations, little cold gas, and minimal recent star formation - often the products of mergers.',
  413030:
    'Galaxy rotation curves stay flat far past the visible disk - inferring extra gravitating mass that does not emit light: dark matter, about 27 percent of cosmic energy.',
  413031:
    'Cosmology studies the universe as a whole - its origin, large-scale structure, expansion history, and ultimate fate via general relativity and observation.',
  413032:
    'The Big Bang model: the observable universe expanded from a hot dense early state about 13.8 billion years ago - the expansion stretches space itself, not an explosion in space.',
  413033:
    'The cosmic microwave background is relic blackbody radiation from recombination 380000 years after the Big Bang - now 2.725 K with tiny anisotropies seeding structure.',
  413034:
    'Cosmological redshift stretches photon wavelengths as space expands - z = (lambda_observed - lambda_emitted) / lambda_emitted measures expansion since emission.',
  413035:
    'Hubbles law: v = H0 d, where H0 is roughly 70 km/s/Mpc - more distant galaxies recede faster, evidence the universe is expanding.',
  413036:
    'Type Ia supernova distance ladders showed expansion accelerating since about 6 billion years ago - dark energy makes up about 68 percent of cosmic energy density.',
  413037:
    'Finite light speed makes telescopes time machines - JWSTs view of z=10 galaxies shows them as they were 13.3 billion years ago.',
  413038:
    'A telescopes light-gathering power scales with aperture area - bigger primary mirrors collect more photons and resolve finer detail (diffraction limit ~ lambda/D).',
  413039:
    'Radio telescopes detect long-wavelength EM radiation (mm to m) - they pierce dust, map neutral hydrogen at 21 cm, and probe pulsars and AGN jets.',
  413040:
    'Space telescopes (Hubble, JWST) escape atmospheric blurring, absorption, and OH airglow - they reach UV, mid-IR, and far-IR bands ground telescopes cannot.',
  413041:
    'Ptolemys geocentric model placed Earth at the center with epicycles - it fit naked-eye data but required ever more complex constructions to match retrograde motion.',
  413042:
    'Heliocentrism puts the Sun near the planetary system center - Earth becomes the third planet rather than the cosmic pivot.',
  413043:
    'Copernicus 1543 De Revolutionibus revived Aristarchus heliocentrism with mathematical detail - retrograde motion fell out naturally from Earths own orbit.',
  413044:
    'Galileos 1610 telescope work showed Venus phases (only possible if Venus orbits the Sun) and four Galilean moons orbiting Jupiter - decisive evidence against pure geocentrism.',
  413045:
    'Newtons universal gravitation (F = G m1 m2 / r^2) plus three laws of motion derived Keplers laws and unified terrestrial and celestial physics.',
  413046:
    'Most asteroids orbit in the main belt between Mars and Jupiter (2.2 to 3.2 AU) - Jupiters resonances sculpt Kirkwood gaps in the belt.',
  413047:
    'Comets are icy dirty-snowball nuclei from the Kuiper belt or Oort cloud - solar heating sublimates ices into the coma and gives the dust and ion tails.',
  413048:
    'A meteor is the bright atmospheric streak (ablation glow) when a meteoroid plunges in at 11-72 km/s - the rock itself is a meteoroid, the survivor a meteorite.',
  413049:
    'A meteorite is the surviving fragment that reaches the ground - chondrites preserve early Solar System material; iron meteorites sample differentiated cores.',
  413050:
    'The circumstellar habitable zone is the orbital band where stellar flux allows surface liquid water - for the Sun roughly 0.95 to 1.5 AU.',

  // ---------- Neuroscience ----------
  408001:
    'Dendrites are the receiving arms of the neuron - postsynaptic membranes integrate excitatory EPSPs and inhibitory IPSPs and sum toward axon-hillock threshold.',
  408002:
    'The axon conducts action potentials away from the soma toward synaptic terminals - this is the output cable, sometimes a meter long in motor neurons.',
  408003:
    'Myelin (oligodendrocytes in CNS, Schwann cells in PNS) wraps the axon as a high-resistance insulator - enabling saltatory conduction up to about 120 m/s.',
  408004:
    'Nodes of Ranvier are unmyelinated gaps packed with voltage-gated Na+ channels - the action potential leaps from node to node in saltatory conduction.',
  408005:
    'The soma is the neurons cell body housing the nucleus, ER, Golgi, and mitochondria - it integrates dendritic input and synthesizes proteins for the whole cell.',
  408006:
    'Resting membrane potential sits near -70 mV inside-negative - set by K+ leak channels and the Na+/K+ ATPase maintaining ion gradients.',
  408007:
    'Depolarization fires when voltage-gated Na+ channels open and sodium rushes in down its electrochemical gradient - the rising phase of the spike.',
  408008:
    'Repolarization comes from voltage-gated K+ channels opening as Na+ channels inactivate - K+ efflux drives the membrane back toward (and briefly past) rest.',
  408009:
    'Threshold near -55 mV is the voltage where enough Na+ channels open to launch positive feedback - depolarization becomes regenerative and the spike ignites.',
  408010:
    'Action potentials are all-or-none: once threshold is crossed the spike has stereotyped amplitude - intensity is coded by firing rate, not spike size.',
  408011:
    'The synaptic cleft is a 20-40 nm gap where presynaptic neurotransmitter diffuses to postsynaptic receptors - the chemical bridge between cells.',
  408012:
    'Synaptic vesicles store neurotransmitter packets (quanta) ready for Ca2+-triggered fusion via SNARE proteins at the active zone.',
  408013:
    'Voltage-gated Ca2+ channels open when the spike invades the terminal - Ca2+ entry binds synaptotagmin and triggers SNARE-mediated vesicle fusion in under a millisecond.',
  408014:
    'Reuptake transporters (DAT for dopamine, SERT for serotonin, NET for norepinephrine) pull neurotransmitter back into the presynaptic terminal or glia for recycling.',
  408015:
    'An agonist binds the receptor and activates it like the endogenous transmitter - morphine on mu-opioid receptors, nicotine on nicotinic ACh receptors.',
  408016:
    'An antagonist binds the receptor but does not activate it - it blocks the endogenous ligand. Naloxone on opioid receptors, haloperidol on D2 dopamine receptors.',
  408017:
    'Glutamate is the main excitatory transmitter in the CNS - acts via AMPA, NMDA, and kainate ionotropic receptors plus metabotropic mGluRs.',
  408018:
    'GABA is the main inhibitory transmitter in the adult CNS - GABA-A is a chloride channel (the benzodiazepine and ethanol target), GABA-B a Gi-coupled metabotropic.',
  408019:
    'Dopamine projects from substantia nigra (motor, nigrostriatal) and VTA (reward, mesolimbic) - loss causes Parkinson; dysregulation implicated in schizophrenia and addiction.',
  408020:
    'Serotonin (5-HT) raphe-nucleus projections broadly modulate mood, sleep, appetite, and aggression - SSRIs block SERT reuptake to treat depression.',
  408021:
    'The CNS consists of the brain and spinal cord - encased in skull and vertebral column, bathed in CSF, and protected by blood-brain barrier.',
  408022:
    'The PNS is everything outside the CNS - cranial and spinal nerves plus ganglia carrying sensory afferents in and motor efferents out.',
  408023:
    'The somatic nervous system drives voluntary skeletal muscle and carries conscious sensory input - one motor neuron from cord to muscle.',
  408024:
    'The autonomic nervous system regulates involuntary visceral functions - heart rate, blood pressure, digestion, glands - via a two-neuron chain.',
  408025:
    'Sympathetic activation is fight-or-flight - released norepinephrine from postganglionic neurons raises heart rate, dilates pupils, and shunts blood to muscle.',
  408026:
    'Parasympathetic activation is rest-and-digest - the vagus nerve releases acetylcholine to slow the heart, constrict pupils, and stimulate gut motility.',
  408027:
    'The thalamus is the sensory relay of the diencephalon - all senses except olfaction synapse here before reaching cortex (LGN for vision, MGN for audition).',
  408028:
    'The hypothalamus runs homeostasis: thermoregulation, hunger, thirst, circadian rhythms via the SCN, and pituitary control of the endocrine system.',
  408029:
    'The amygdala assigns emotional salience, especially fear and threat learning - lateral nucleus learns CS-US pairings in classical fear conditioning.',
  408030:
    'The hippocampus consolidates new declarative (episodic and semantic) memories - bilateral damage (patient H.M.) produces dense anterograde amnesia.',
  408031:
    'The cerebellum tunes coordination, balance, motor timing, and motor learning - damage causes ataxia and dysmetria; also implicated in cognitive timing.',
  408032:
    'The brainstem (midbrain, pons, medulla) runs life-support: respiration, heart rate, blood pressure, arousal via reticular activating system.',
  408033:
    'The frontal lobe handles executive functions in prefrontal cortex - planning, working memory, inhibition, decision-making - and voluntary movement in M1.',
  408034:
    'The temporal lobe houses primary auditory cortex, Wernickes language comprehension area, and medial temporal memory structures (hippocampus, amygdala).',
  408035:
    'The parietal lobe runs somatosensory cortex (S1 in postcentral gyrus), spatial attention (right parietal neglect with damage), and visuomotor integration.',
  408036:
    'The occipital lobe houses primary visual cortex (V1) and extrastriate visual areas - retinotopic maps process orientation, color, motion, and form.',
  408037:
    'Brocas area (left inferior frontal gyrus) damage gives expressive aphasia - halting telegraphic speech with relatively spared comprehension.',
  408038:
    'Wernickes area (left superior temporal gyrus) damage gives receptive aphasia - fluent paraphasic speech with severely impaired comprehension.',
  408039:
    'MRI uses strong magnetic fields plus radiofrequency pulses to map proton relaxation - excellent millimeter spatial resolution of soft tissue, no ionizing radiation.',
  408040:
    'EEG records summed cortical pyramidal-cell dendritic currents at the scalp - millisecond temporal resolution but coarse spatial localization (centimeters).',
  408041:
    'fMRI BOLD signal tracks deoxyhemoglobin changes from neurovascular coupling - indirect, hemodynamic, 2-3 mm spatial but ~1 s sluggish temporal resolution.',
  408042:
    'PET injects radioisotope-labeled tracers (FDG for glucose metabolism, raclopride for D2 receptors) and detects emitted positron-annihilation gamma pairs.',
  408043:
    'Neuroplasticity is experience-dependent change in synaptic strength, dendritic structure, and circuit wiring - the substrate of learning and recovery from injury.',
  408044:
    'LTP is a lasting NMDA-receptor-dependent strengthening of synapses after high-frequency activity - the cellular model for memory formation.',
  408045:
    'Hebbs rule: cells that fire together wire together - correlated pre and postsynaptic firing strengthens connections; the basis for LTP and associative learning.',
  408046:
    'Rods (rhodopsin, scotopic/low light) and cones (three opsins for L/M/S photopic color) transduce photons in the retina via the phototransduction cascade.',
  408047:
    'Cochlear inner hair cells convert basilar membrane vibration into receptor potentials via stereocilia tip-links opening mechanotransduction channels.',
  408048:
    'Parkinson disease results from progressive loss of dopaminergic neurons in the substantia nigra pars compacta - depleting the nigrostriatal pathway and disrupting movement.',
  408049:
    'MS is an autoimmune demyelinating disease of the CNS - T-cell attack on oligodendrocyte myelin slows conduction and gives relapsing-remitting plaques on MRI.',
  408050:
    'Stroke is acute neurological injury from disrupted cerebral blood flow - 87 percent ischemic (clot) and 13 percent hemorrhagic (bleed), causing the ischemic cascade.',

  // ---------- Macroeconomics ----------
  421001:
    'Nominal GDP values output at current-year prices - it mixes real growth with inflation, so two-year changes overstate true output gains.',
  421002:
    'Real GDP holds prices fixed at a base year - it isolates true output growth from inflation, the headline measure of expansion or recession.',
  421003:
    'The GDP deflator is nominal GDP / real GDP times 100 - it tracks the prices of all domestically produced final goods, broader than CPI.',
  421004:
    'GDP per capita = GDP / population - the standard rough measure of average material living standards across countries.',
  421005:
    'Labor force = employed + unemployed actively seeking work - excludes retirees, students, discouraged workers, and others not searching.',
  421006:
    'Unemployment rate = unemployed / labor force times 100 - U-3 is the headline measure; U-6 adds discouraged and marginally attached workers.',
  421007:
    'Labor force participation rate = labor force / working-age population - US has trended down from a 67 percent peak in 2000 to about 62 percent.',
  421008:
    'CPI tracks the price of a fixed market basket of consumer goods and services - the BLS reweights and substitutes; it overstates inflation by ignoring substitution.',
  421009:
    'Inflation rate is the percent change in a broad price index (CPI or deflator) - measures the erosion of purchasing power across the basket.',
  421010:
    'Fisher equation: real rate ~ nominal rate - inflation - what borrowers and lenders actually pay/earn after stripping out price growth.',
  421011:
    'An expansion is the business-cycle phase of rising real GDP, employment, and incomes - the NBER dates US cycles peak-to-peak.',
  421012:
    'A peak is the cycles high turning point where expansion gives way to contraction - real GDP, employment, and incomes start to fall after this point.',
  421013:
    'A trough is the cycles low turning point where contraction ends and recovery begins - NBER dates the 2020 trough at April 2020.',
  421014:
    'AD slopes down because of three effects: real-balances (lower P raises real money), interest-rate (lower P lowers rates and boosts I), and net-exports.',
  421015:
    'Aggregate demand: AD = C + I + G + NX - the expenditure approach to GDP, the same identity that defines output spending.',
  421016:
    'SRAS slopes up because input prices (especially nominal wages) are sticky - higher output prices widen profit margins and call forth more production.',
  421017:
    'LRAS is vertical at potential output - in the long run, output depends on capital, labor, technology, and institutions, not on the price level.',
  421018:
    'A negative AD shock shifts AD leftward - cuts short-run output and price level, raises unemployment - the classic recession story.',
  421019:
    'A negative supply shock shifts SRAS leftward - drives stagflation: lower output with higher prices, the 1970s oil-shock pattern.',
  421020:
    'Expansionary fiscal policy raises G or cuts T to shift AD right - the textbook recession response, financed by larger deficits.',
  421021:
    'Automatic stabilizers like progressive income taxes and unemployment insurance dampen the cycle without new legislation - they shrink the multiplier on shocks.',
  421022:
    'Simple Keynesian multiplier = 1 / (1 - MPC) - higher marginal propensity to consume means each dollar respends more rounds before leakage.',
  421023:
    'Crowding out: government borrowing raises the demand for loanable funds, pushing real interest rates up and squeezing out private investment.',
  421024:
    'A budget deficit is the annual flow where government spending exceeds tax revenue - it adds to the stock of national debt.',
  421025:
    'Public debt is the stock of accumulated past deficits - US federal debt held by the public is over 100 percent of GDP after a series of large deficits.',
  421026:
    'Money has three classic functions: medium of exchange, unit of account, and store of value - fiat money still serves all three.',
  421027:
    'Fractional reserve banking lets banks hold only a fraction of deposits as reserves and lend out the rest - the mechanism that creates inside money.',
  421028:
    'A reserve requirement is the minimum fraction of deposits banks must hold as reserves - lowering it can expand lending capacity (the Fed cut it to 0 in 2020).',
  421029:
    'The simple money multiplier is 1 / rr - with a 10 percent reserve ratio one new dollar of reserves theoretically supports up to 10 dollars of deposits.',
  421030:
    'A central bank (Fed, ECB, BOJ) sets monetary policy, supervises banks, and serves as lender of last resort - independent from elected fiscal authorities.',
  421031:
    'Expansionary monetary policy lowers the policy rate, expands reserves via open-market purchases, and boosts AD through C and I channels.',
  421032:
    'Contractionary monetary policy raises the policy rate to cool aggregate demand and slow inflation - the Volcker disinflation of 1979-82 is the textbook case.',
  421033:
    'An open-market purchase of Treasuries by the Fed credits primary-dealer reserve accounts - expanding reserves and pushing the federal funds rate down.',
  421034:
    'Policy lags include recognition, decision, implementation, and impact lags - monetary policy takes 12-18 months for the full effect on inflation and output.',
  421035:
    'A liquidity trap is when nominal rates hit the zero lower bound and further rate cuts cannot stimulate demand - 2008-15 US, Japan since the 1990s.',
  421036:
    'Demand-pull inflation: AD outpaces potential output, the AD curve rides up SRAS - too much money chasing too few goods.',
  421037:
    'Cost-push inflation: rising input costs (oil, wages) shift SRAS leftward - higher prices with lower output, the stagflation pattern.',
  421038:
    'Deflation is a sustained fall in the overall price level - dangerous because it raises real debt burdens and can trap policy at the zero lower bound.',
  421039:
    'Expected inflation gets embedded in wage contracts, loan rates, and price-setting (Fisher equation) - making expectations a self-fulfilling driver of actual inflation.',
  421040:
    'Cyclical unemployment rises when AD falls below potential - it disappears when output returns to full employment, distinct from structural and frictional.',
  421041:
    'Structural unemployment is mismatch between worker skills/location and available jobs - displaced manufacturing or coal-mining workers are the textbook example.',
  421042:
    'Productivity is real output per unit of input (labor productivity = Y / hours) - the central driver of long-run growth in living standards.',
  421043:
    'Human capital is the stock of skills, education, health, and knowledge embodied in workers - schooling and training raise wages and productivity.',
  421044:
    'Physical capital is produced means of production - machines, buildings, vehicles, tools - distinct from natural resources or human capital.',
  421045:
    'Diminishing marginal returns to capital: holding labor fixed, each extra machine adds less output - the Solow model engine driving convergence.',
  421046:
    'Net exports NX = exports - imports - the trade-balance component of GDP and the channel through which exchange rates touch aggregate demand.',
  421047:
    'A currency appreciates when it buys more of another currency - makes exports more expensive abroad and imports cheaper at home.',
  421048:
    'The current account records trade in goods/services, primary income (investment earnings), and secondary income (transfers) - balances with the capital and financial accounts.',
  421049:
    'High capital mobility means financial assets flow freely across borders chasing returns - constrains independent monetary policy under fixed exchange rates.',
  421050:
    'Mundells trilemma: a country can pick at most two of fixed exchange rate, free capital mobility, and independent monetary policy - the third must give.',

  // ---------- Microeconomics ----------
  422001:
    'Scarcity is the basic economic problem: resources are limited while wants are unlimited - forcing tradeoffs and giving rise to opportunity costs and prices.',
  422002:
    'Opportunity cost is the value of the next-best forgone alternative - the true cost of any choice, not just monetary outlay.',
  422003:
    'Marginal analysis compares marginal benefit and marginal cost of one more unit - decisions should expand activity until MB = MC.',
  422004:
    'Comparative advantage depends on lower opportunity cost, not absolute productivity - Ricardos insight that mutual gains from trade arise from relative tradeoffs.',
  422005:
    'Normal goods have positive income elasticity - higher income shifts demand right (steaks, restaurant meals, vacations).',
  422006:
    'Substitutes have positive cross-price elasticity - when coffees price rises consumers substitute toward tea, shifting tea demand right.',
  422007:
    'Complements have negative cross-price elasticity - cheaper printers raise the demand for ink, the joint-use partner good.',
  422008:
    'Lower input costs widen profit margins at every price - shifting the supply curve rightward, the standard cost-shock response.',
  422009:
    'Equilibrium is where Qd = Qs at the market-clearing price - no surplus, no shortage, no unilateral incentive to change behavior.',
  422010:
    'A shortage means Qd > Qs at the prevailing price (often a price ceiling like rent control) - upward pressure on price normally clears it.',
  422011:
    'Elastic demand: |%change Q / %change P| > 1, quantity responds strongly to price - luxury goods and goods with close substitutes.',
  422012:
    'Inelastic demand: |%change Q / %change P| < 1, weak quantity response - necessities, insulin, gasoline in the short run, addictive goods.',
  422013:
    'Total revenue test: with elastic demand, raising price cuts TR because quantity drops by a larger percentage - with inelastic demand, raising price raises TR.',
  422014:
    'Positive cross-price elasticity flags substitutes - the larger the positive value, the closer the substitution relationship.',
  422015:
    'Negative income elasticity flags an inferior good - bus rides, generic brands, instant noodles - demand falls as income rises.',
  422016:
    'Utility is the satisfaction or welfare a consumer derives from a bundle of goods - ordinal preference ranking, not a cardinal measurable quantity.',
  422017:
    'Marginal utility is the extra satisfaction from one more unit - the slope of the total utility curve.',
  422018:
    'Diminishing marginal utility: each extra slice of pizza adds less satisfaction than the last - the principle behind downward-sloping demand.',
  422019:
    'The budget constraint is the line Px X + Py Y = I - all affordable bundles given prices and income, the consumers feasible set.',
  422020:
    'Consumer optimum: equate MUx/Px = MUy/Py across all goods - the equimarginal principle, equal bang per buck so no reallocation can raise utility.',
  422021:
    'Fixed costs do not change with output in the short run - rent, insurance, equipment leases - sunk in shutdown decisions.',
  422022:
    'Variable costs rise with output - raw materials, hourly wages, energy - they determine the shape of the marginal cost curve.',
  422023:
    'Marginal product is the extra output from one more unit of variable input (typically labor) holding other inputs fixed.',
  422024:
    'Diminishing marginal product: with a fixed plant, each extra worker eventually adds less output - the foundation of upward-sloping marginal cost.',
  422025:
    'Average total cost ATC = TC / Q - U-shaped because spreading fixed cost falls while diminishing returns push variable cost per unit up.',
  422026:
    'Perfect competition: many small firms, identical products, free entry, and price-taking behavior - each firm faces a horizontal demand at the market price.',
  422027:
    'Competitive firms profit-maximize where P = MR = MC - they take the market price and equate it to marginal cost to set output.',
  422028:
    'Shut down in the short run if P < AVC - revenue cannot even cover variable cost, so producing only deepens losses beyond fixed cost.',
  422029:
    'A monopolist faces the entire downward-sloping market demand - it sets price and quantity together, with MR < P at every quantity.',
  422030:
    'Monopoly deadweight loss: setting MR = MC restricts Q below the efficient P = MC level - triangle of lost gains from trade between MC and demand.',
  422031:
    'Price discrimination charges different prices to different buyers based on willingness to pay (not cost) - requires market power, segmentation, and no resale.',
  422032:
    'Monopolistic competition: many sellers with differentiated products, free entry - downward-sloping firm demand, zero long-run economic profit, excess capacity.',
  422033:
    'Oligopoly: a few interdependent firms - strategic behavior matters, analyzed with game theory; classic models include Cournot, Bertrand, and Stackelberg.',
  422034:
    'A dominant strategy gives a higher payoff than any alternative regardless of opponents choices - confessing in the prisoners dilemma is the canonical example.',
  422035:
    'Nash equilibrium: each player best-responds to the others strategies, so no one gains by unilaterally deviating - may be socially inefficient (prisoners dilemma).',
  422036:
    'Consumer surplus is the area below the demand curve and above the price line - the difference between willingness to pay and price actually paid.',
  422037:
    'Producer surplus is the area above the supply curve and below the price line - revenue received minus the minimum willingness to accept.',
  422038:
    'Deadweight loss is the lost total surplus from trades that would have happened at P = MC but do not under a distortion (tax, monopoly, quota).',
  422039:
    'Statutory incidence does not determine economic incidence - the more inelastic side of the market (less able to escape) bears the larger share of the tax burden.',
  422040:
    'A negative externality imposes uncompensated costs on third parties - pollution, secondhand smoke - the market overproduces relative to the social optimum.',
  422041:
    'A positive externality gives uncompensated benefits to third parties - vaccinations, education, R&D - the market underproduces.',
  422042:
    'A pure public good is nonrival (one persons use does not diminish anothers) and nonexcludable (cannot prevent free riders) - national defense, lighthouses.',
  422043:
    'A free rider enjoys a nonexcludable goods benefit without paying - the central reason public goods are underprovided by private markets.',
  422044:
    'A common-pool resource is rival but nonexcludable - fisheries, groundwater - prone to the tragedy of the commons unless governed (Ostrom).',
  422045:
    'Coase theorem: with well-defined property rights and zero transaction costs, parties bargain to the efficient outcome regardless of initial assignment.',
  422046:
    'Labor demand is derived from product demand - firms hire workers to produce output, so labor demand shifts with output-market conditions and productivity.',
  422047:
    'Marginal revenue product MRP = MP x MR - the extra revenue an extra unit of labor generates - profit-maximizing firms hire until MRP = wage.',
  422048:
    'Adverse selection: hidden information before the transaction - the lemons problem in used cars; high-risk types overrepresented in insurance pools.',
  422049:
    'Moral hazard: hidden action after the transaction - insured drivers take more risks because the insurer bears the cost - addressed by deductibles and copays.',
  422050:
    'Natural monopoly arises when one firms long-run average cost curve declines over the entire relevant range - utilities, pipelines - usually regulated with price caps.',
}

export const UNI_SCIECON_WORKOUT_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {}

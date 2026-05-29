import { makeQuestionBank } from './base'

export const highApBiologyQuestions = makeQuestionBank('AP', [
  // -----------------------------------------------------------------------
  // Unit 1: Chemistry of Life
  // -----------------------------------------------------------------------
  {
    id: 4400000,
    chapter: 'Unit 1: Chemistry of Life',
    title: 'Hydrogen bonding in water',
    prompt: 'Many of water\'s emergent properties (cohesion, high specific heat, high heat of vaporization) are most directly explained by:',
    correct: 'Hydrogen bonds forming between the partially positive H of one water molecule and the partially negative O of another',
    wrong: [
      ['Covalent bonds between adjacent water molecules', 'Within a single water molecule the O-H bonds are covalent, but the bonds between separate water molecules are weaker hydrogen bonds.', 'Distinguish intramolecular from intermolecular bonds.'],
      ['Ionic attraction between sodium and chloride dissolved in water', 'Water\'s emergent properties exist in pure water without dissolved salts; ions are not required.', 'Think about pure H2O.'],
      ['Hydrophobic interactions within each water molecule', 'Water is polar, not hydrophobic; hydrophobic exclusion describes nonpolar solutes in water, not water itself.', 'Water is the universal polar solvent.'],
    ],
    lesson: 'Water\'s polarity creates extensive hydrogen bonding, which produces cohesion, adhesion, surface tension, high specific heat, high heat of vaporization, and ice that floats.',
  },
  {
    id: 4400001,
    chapter: 'Unit 1: Chemistry of Life',
    title: 'Macromolecule monomers',
    prompt: 'Which pairing of macromolecule and monomer is correct?',
    correct: 'Proteins are polymers of amino acids joined by peptide bonds',
    wrong: [
      ['Carbohydrates are polymers of fatty acids', 'Carbohydrate polymers are built from monosaccharides; fatty acids are components of lipids.', 'Sugars build carbs.'],
      ['Nucleic acids are polymers of glycerol', 'Glycerol is the backbone of triglycerides; nucleic acids are polymers of nucleotides.', 'Think DNA building blocks.'],
      ['Lipids are polymers of amino acids', 'Lipids are not true polymers in the same repeating-monomer sense, and they are built from fatty acids and glycerol, not amino acids.', 'Amino acids build proteins.'],
    ],
    lesson: 'AP requires fluency in macromolecule-monomer pairings: carbohydrates/monosaccharides, proteins/amino acids, nucleic acids/nucleotides, lipids/fatty acids+glycerol.',
  },
  {
    id: 4400002,
    chapter: 'Unit 1: Chemistry of Life',
    title: 'Dehydration synthesis',
    prompt: 'When two glucose monomers are joined into maltose, the reaction:',
    correct: 'Removes a water molecule and forms a glycosidic bond between the two sugars',
    wrong: [
      ['Adds a water molecule to break the bond between sugars', 'That describes hydrolysis, which breaks polymers apart rather than building them.', 'Building polymers loses water.'],
      ['Releases CO2 as the bond forms', 'No CO2 is released in glycosidic bond formation; the byproduct is H2O.', 'Track atoms in and out.'],
      ['Forms a peptide bond between the sugars', 'Peptide bonds join amino acids, not sugars; sugars are linked by glycosidic bonds.', 'Match bond name to monomer class.'],
    ],
    lesson: 'Dehydration synthesis builds polymers by removing a water; hydrolysis breaks polymers by adding water. Each macromolecule class has its own bond name (glycosidic, peptide, ester, phosphodiester).',
  },
  {
    id: 4400003,
    chapter: 'Unit 1: Chemistry of Life',
    title: 'Protein structure levels',
    prompt: 'A single point mutation changes one amino acid in a protein, causing it to lose function. The mutation has most directly altered:',
    correct: 'Primary structure, which then changes how higher-order folding occurs',
    wrong: [
      ['Quaternary structure only, leaving primary intact', 'A change in amino acid identity is a primary-structure change by definition; higher levels are downstream consequences.', 'Primary is the amino acid sequence itself.'],
      ['Tertiary structure without affecting primary sequence', 'Tertiary folding depends on side-chain interactions that come from the primary sequence; you cannot change tertiary without changing what folds.', 'Sequence drives shape.'],
      ['Only the protein\'s solubility, not its sequence', 'Solubility can change as a downstream effect, but the proximate change is the amino acid sequence (primary).', 'Identify the most direct change.'],
    ],
    lesson: 'Primary structure (amino acid sequence) determines secondary (alpha-helix/beta-sheet), tertiary (overall 3D fold), and quaternary (multi-subunit assembly). A point mutation changes primary first.',
  },
  {
    id: 4400004,
    chapter: 'Unit 1: Chemistry of Life',
    title: 'pH and buffers',
    prompt: 'A solution moves from pH 7 to pH 5. The hydrogen ion concentration has:',
    correct: 'Increased 100-fold because pH is a logarithmic scale',
    wrong: [
      ['Decreased by a factor of 2 because the number dropped by 2', 'pH is logarithmic, not linear; a 2-unit drop is a 10^2 = 100-fold increase in [H+].', 'Logs, not subtraction.'],
      ['Increased by exactly 2 mol/L', 'pH values are not direct molar concentrations; they are negative log10 of [H+].', 'Use the log relationship.'],
      ['Stayed the same because pH only measures basicity', 'pH measures acidity/basicity, and lower pH means more H+, not less.', 'Lower pH = more acidic.'],
    ],
    lesson: 'pH = -log10[H+], so each unit change is a 10-fold change in [H+]. Buffers resist pH change by accepting or donating H+.',
  },
  {
    id: 4400005,
    chapter: 'Unit 1: Chemistry of Life',
    title: 'Properties of carbon',
    prompt: 'Carbon\'s ability to build the diverse skeletons of biological molecules depends most directly on:',
    correct: 'Four valence electrons that allow four covalent bonds and stable single, double, or branched chains',
    wrong: [
      ['Carbon\'s tendency to form ionic bonds with metals', 'Biological carbon chemistry is built on covalent bonding, not ionic transfer of electrons.', 'Think shared electrons, not transferred.'],
      ['Its very large atomic radius compared with oxygen', 'Carbon is small, not large; small radius helps form strong covalent bonds.', 'Carbon is in period 2.'],
      ['The fact that carbon is a noble gas with full shells', 'Carbon is not a noble gas; it has four valence electrons and is highly reactive in bonding.', 'Group 14, not 18.'],
    ],
    lesson: 'Carbon\'s four valence electrons enable the chains, rings, and branched skeletons underlying all four macromolecule classes and functional-group chemistry.',
  },

  // -----------------------------------------------------------------------
  // Unit 2: Cell Structure and Function
  // -----------------------------------------------------------------------
  {
    id: 4400006,
    chapter: 'Unit 2: Cell Structure and Function',
    title: 'Endomembrane pathway',
    prompt: 'A secreted protein is translated, modified, packaged, and exported. The correct order of organelles it passes through is:',
    correct: 'Rough ER → Golgi apparatus → secretory vesicle → plasma membrane',
    wrong: [
      ['Smooth ER → mitochondrion → Golgi → plasma membrane', 'Mitochondria are not part of the secretory pathway, and protein synthesis for secretion happens on the rough ER, not smooth.', 'Mitochondria handle energy, not export.'],
      ['Lysosome → Golgi → rough ER → plasma membrane', 'The order is reversed; lysosomes are downstream destinations from the Golgi, not the starting point.', 'Trace from ribosome outward.'],
      ['Nucleus → chloroplast → Golgi → plasma membrane', 'Chloroplasts are not in animal secretory pathways and are not part of standard protein export.', 'Stay inside the endomembrane system.'],
    ],
    lesson: 'The endomembrane system links rough ER (synthesis and folding), Golgi (modification and sorting), and vesicles (transport) into a continuous secretory pathway.',
  },
  {
    id: 4400007,
    chapter: 'Unit 2: Cell Structure and Function',
    title: 'Surface area to volume',
    prompt: 'As a spherical cell doubles in radius, its surface area increases by a factor of 4 but its volume increases by a factor of 8. This relationship explains why:',
    correct: 'Cells stay small to maintain adequate exchange of materials across the membrane relative to internal demand',
    wrong: [
      ['Larger cells always have faster diffusion to their center', 'Larger cells have slower, not faster, diffusion to the center because path length grows.', 'Bigger means slower diffusion in.'],
      ['Surface area is irrelevant to cell function', 'Surface area is the exchange interface; it is central to transport rates.', 'Membrane is the gateway.'],
      ['Volume shrinks faster than surface area as cells grow', 'Volume grows faster than surface area as cells grow; that is exactly the constraint.', 'Compare r^2 vs r^3.'],
    ],
    lesson: 'Surface area scales with r^2 while volume scales with r^3, so SA:V drops as cells grow. This sets upper limits on cell size and drives adaptations like microvilli.',
  },
  {
    id: 4400008,
    chapter: 'Unit 2: Cell Structure and Function',
    title: 'Osmosis direction',
    prompt: 'A plant cell with an internal solute concentration of 0.3 M is placed in a 0.1 M solution. What will happen?',
    correct: 'Water will move into the cell because the external solution is hypotonic; turgor pressure will rise',
    wrong: [
      ['Water will leave the cell because the outside is hypertonic', 'The outside has fewer solutes (0.1 M < 0.3 M), so it is hypotonic, not hypertonic.', 'Compare solute concentrations.'],
      ['Solutes will move into the cell down their concentration gradient', 'Osmosis describes water movement; solutes will not freely cross most membranes, and water is what moves here.', 'Focus on water, not solutes.'],
      ['No net movement will occur because cells are impermeable to water', 'Cells are permeable to water via aquaporins and the lipid bilayer; net water movement depends on tonicity.', 'Aquaporins matter.'],
    ],
    lesson: 'Water moves from areas of higher water potential (lower solute) to lower water potential (higher solute). In a hypotonic environment, plant cells become turgid; animal cells may lyse.',
  },
  {
    id: 4400009,
    chapter: 'Unit 2: Cell Structure and Function',
    title: 'Active vs passive transport',
    prompt: 'The sodium-potassium pump moves 3 Na+ out and 2 K+ in against their gradients. This process:',
    correct: 'Requires ATP hydrolysis because solutes are moved against their electrochemical gradients',
    wrong: [
      ['Uses facilitated diffusion through a channel protein', 'Facilitated diffusion is passive and moves solutes down their gradients; the pump moves them up gradients.', 'Against the gradient costs energy.'],
      ['Occurs without any membrane protein involvement', 'Charged ions cannot cross the bilayer alone; the pump is itself an integral membrane protein.', 'Ions need protein highways.'],
      ['Generates ATP as a byproduct of ion movement', 'The pump consumes ATP; it does not produce it.', 'Pumping uphill costs ATP.'],
    ],
    lesson: 'Active transport uses energy (ATP directly or a coupled gradient) to move solutes against gradients. The Na+/K+ ATPase establishes the membrane potential and resting electrochemical gradient.',
  },
  {
    id: 4400010,
    chapter: 'Unit 2: Cell Structure and Function',
    title: 'Membrane fluidity',
    prompt: 'A cell membrane contains many unsaturated fatty acid tails and cholesterol. At low temperatures, this composition will:',
    correct: 'Maintain fluidity because unsaturated tails introduce kinks and cholesterol prevents tight packing',
    wrong: [
      ['Cause the membrane to solidify because cholesterol stiffens it', 'Cholesterol stiffens membranes at high temperatures but prevents excessive solidification at low temperatures; its role is buffering.', 'Cholesterol is a buffer, not a switch.'],
      ['Make the membrane completely impermeable to all molecules', 'Membranes are always selectively permeable; small nonpolar molecules pass even when fluid.', 'Permeability is selective.'],
      ['Allow free passage of large polar molecules', 'Fluidity does not abolish selectivity; large polar molecules still require transport proteins.', 'Fluidity is not openness.'],
    ],
    lesson: 'Unsaturated fatty acid kinks prevent tight packing at low temperatures, and cholesterol buffers fluidity across temperature ranges. Together they keep membranes functional.',
  },
  {
    id: 4400011,
    chapter: 'Unit 2: Cell Structure and Function',
    title: 'Endosymbiotic theory',
    prompt: 'Which observation provides the strongest evidence that mitochondria evolved from engulfed prokaryotes?',
    correct: 'Mitochondria contain their own circular DNA and 70S ribosomes similar to bacteria',
    wrong: [
      ['Mitochondria divide only when the entire cell divides', 'Mitochondria divide independently by a fission-like process, not in lockstep with the cell.', 'Independent reproduction is the clue.'],
      ['Mitochondria are bound by a single phospholipid membrane', 'They have a double membrane, consistent with engulfment of one organism by another.', 'Count the membranes.'],
      ['Mitochondria synthesize proteins using the same ribosomes as the cytoplasm', 'Their ribosomes are 70S (bacterial-like), distinct from the 80S ribosomes of the eukaryotic cytoplasm.', 'Ribosome size differs.'],
    ],
    lesson: 'Endosymbiotic theory is supported by mitochondria/chloroplasts having their own circular DNA, 70S ribosomes, double membranes, and binary-fission-like division.',
  },

  // -----------------------------------------------------------------------
  // Unit 3: Cellular Energetics
  // -----------------------------------------------------------------------
  {
    id: 4400012,
    chapter: 'Unit 3: Cellular Energetics',
    title: 'Enzyme function',
    prompt: 'An enzyme increases reaction rate primarily by:',
    correct: 'Lowering the activation energy of the reaction without changing the overall free-energy change',
    wrong: [
      ['Making the reaction exergonic when it would otherwise be endergonic', 'Enzymes do not change the thermodynamic favorability (ΔG); they only change the kinetics.', 'Enzymes change speed, not direction.'],
      ['Adding energy to the reactants from ATP hydrolysis', 'Most enzymes do not directly couple ATP to every reaction they catalyze; they lower activation energy by binding substrates.', 'Catalysis is not the same as energy coupling.'],
      ['Permanently changing the chemical bonds of the products', 'Enzymes are not consumed and the products have the same bonds whether catalyzed or not; only the path differs.', 'Enzymes are reusable.'],
    ],
    lesson: 'Enzymes lower Ea by stabilizing the transition state. They do not change ΔG, equilibrium position, or product identity; they only change reaction rate.',
  },
  {
    id: 4400013,
    chapter: 'Unit 3: Cellular Energetics',
    title: 'Competitive vs noncompetitive inhibition',
    prompt: 'A drug binds the active site of an enzyme and competes directly with the natural substrate. Increasing substrate concentration:',
    correct: 'Can overcome the inhibition because the substrate and drug compete for the same site',
    wrong: [
      ['Cannot reverse inhibition because the drug is bound permanently', 'Competitive inhibitors bind reversibly; high substrate concentrations outcompete them.', 'Reversible binding can be outcompeted.'],
      ['Will increase Vmax beyond its uninhibited value', 'Competitive inhibition leaves Vmax unchanged at high substrate; it only raises apparent Km.', 'Vmax is unchanged.'],
      ['Has no effect because competitive inhibitors act on an allosteric site', 'Competitive inhibitors bind the active site by definition; allosteric binding describes noncompetitive inhibition.', 'Active site, not allosteric.'],
    ],
    lesson: 'Competitive inhibitors raise apparent Km but leave Vmax unchanged; noncompetitive (allosteric) inhibitors lower Vmax and cannot be overcome by adding substrate.',
  },
  {
    id: 4400014,
    chapter: 'Unit 3: Cellular Energetics',
    title: 'Glycolysis location and yield',
    prompt: 'Glycolysis takes place in the ____ and produces a net ____ ATP per glucose.',
    correct: 'Cytoplasm; net 2 ATP (plus 2 NADH and 2 pyruvate)',
    wrong: [
      ['Mitochondrial matrix; net 36 ATP', 'The matrix hosts the Krebs cycle, not glycolysis; 36 ATP is the approximate full aerobic yield, not glycolysis alone.', 'Glycolysis is upstream of the mitochondrion.'],
      ['Inner mitochondrial membrane; net 2 GTP', 'The inner membrane hosts the electron transport chain; GTP is a Krebs product.', 'Glycolysis is cytoplasmic.'],
      ['Cytoplasm; net 0 ATP', 'Glycolysis uses 2 ATP and produces 4, for a net gain of 2 ATP.', 'Subtract investment from payoff.'],
    ],
    lesson: 'Glycolysis (cytoplasm) splits glucose into 2 pyruvate with a net gain of 2 ATP and 2 NADH. It runs without oxygen and is the first stage of both aerobic and anaerobic metabolism.',
  },
  {
    id: 4400015,
    chapter: 'Unit 3: Cellular Energetics',
    title: 'Chemiosmosis',
    prompt: 'In oxidative phosphorylation, ATP synthase produces ATP by:',
    correct: 'Allowing protons to flow down their electrochemical gradient from the intermembrane space into the matrix',
    wrong: [
      ['Pumping protons against their gradient using ATP as the input', 'That describes proton-pumping complexes I, III, and IV; ATP synthase runs the opposite direction, harvesting the gradient.', 'Synthase runs downhill.'],
      ['Splitting water to release oxygen as a byproduct', 'Water splitting (photolysis) occurs in photosynthesis at photosystem II, not in mitochondrial ATP synthase.', 'That is photosynthesis.'],
      ['Directly oxidizing glucose at the inner membrane', 'Glucose is broken down earlier (glycolysis, Krebs); the ETC and synthase work with electrons carried by NADH/FADH2.', 'No glucose enters the ETC.'],
    ],
    lesson: 'The ETC pumps H+ from matrix to intermembrane space; ATP synthase couples the return flow of H+ to ATP production. This proton-motive force is chemiosmosis.',
  },
  {
    id: 4400016,
    chapter: 'Unit 3: Cellular Energetics',
    title: 'Anaerobic vs aerobic yield',
    prompt: 'A yeast cell switches from aerobic respiration to fermentation when oxygen is removed. The most important consequence is:',
    correct: 'A large drop in ATP yield per glucose because the ETC and Krebs cycle no longer run',
    wrong: [
      ['An increase in ATP yield because fermentation is more efficient', 'Fermentation yields only 2 ATP per glucose, far less than aerobic respiration\'s ~30-32 ATP.', 'Compare net ATP yields.'],
      ['No change in ATP yield because glycolysis runs either way', 'Glycolysis runs in both cases, but only aerobic respiration adds Krebs and ETC output.', 'Glycolysis is not the whole story.'],
      ['Production of CO2 stops entirely', 'Alcoholic fermentation in yeast still produces CO2 as ethanol is generated from pyruvate.', 'Yeast still off-gases CO2.'],
    ],
    lesson: 'Without oxygen, the ETC backs up and NAD+ runs out. Fermentation regenerates NAD+ from NADH so glycolysis can keep running, but the cell forfeits Krebs and ETC ATP yield.',
  },
  {
    id: 4400017,
    chapter: 'Unit 3: Cellular Energetics',
    title: 'Light vs dark reactions',
    prompt: 'Which best describes how the light reactions support the Calvin cycle?',
    correct: 'They produce ATP and NADPH that the Calvin cycle uses to reduce CO2 into G3P',
    wrong: [
      ['They fix CO2 directly into glucose using sunlight', 'Carbon fixation happens in the Calvin cycle (light-independent), not in the light reactions.', 'Light reactions handle energy, not carbon.'],
      ['They release oxygen by reducing CO2', 'O2 is released from the splitting of water at photosystem II; CO2 is reduced later in the Calvin cycle.', 'Track water and CO2 separately.'],
      ['They consume ATP that the Calvin cycle generates', 'The flow goes the other direction: light reactions make ATP and NADPH; Calvin cycle spends them.', 'Energy flows light → dark.'],
    ],
    lesson: 'Light reactions in thylakoids split water, pump protons, and produce ATP + NADPH + O2. The Calvin cycle in the stroma uses ATP and NADPH to fix CO2 via RuBisCO into G3P.',
  },

  // -----------------------------------------------------------------------
  // Unit 4: Cell Communication and Cell Cycle
  // -----------------------------------------------------------------------
  {
    id: 4400018,
    chapter: 'Unit 4: Cell Communication and Cell Cycle',
    title: 'Stages of signal transduction',
    prompt: 'A signaling pathway involves a hormone binding to a membrane receptor, which activates a relay molecule, which triggers a change in gene expression. These steps illustrate:',
    correct: 'Reception, transduction, and response — the three canonical stages of cell signaling',
    wrong: [
      ['Reception, replication, and translation', 'Replication and translation are molecular biology terms, not the stages of signaling.', 'Signaling has three named stages.'],
      ['Transcription, transduction, and termination', 'Transcription is RNA synthesis; termination is the end of transcription or translation, not a signaling stage.', 'Mind the vocabulary.'],
      ['Diffusion, hydrolysis, and apoptosis', 'These are unrelated processes; apoptosis is programmed cell death, not a signaling step.', 'Signaling is not always lethal.'],
    ],
    lesson: 'Cell signaling proceeds through reception (ligand binds receptor), transduction (relay molecules, often phosphorylation cascades), and response (gene expression or enzyme activity).',
  },
  {
    id: 4400019,
    chapter: 'Unit 4: Cell Communication and Cell Cycle',
    title: 'Second messengers',
    prompt: 'Cyclic AMP (cAMP) functions in many signaling pathways as a:',
    correct: 'Second messenger that amplifies the signal by activating protein kinase A',
    wrong: [
      ['Hormone secreted directly into the bloodstream', 'cAMP is generated inside cells from ATP; it is not secreted as a hormone.', 'cAMP is intracellular.'],
      ['Membrane-bound receptor that binds ligands directly', 'cAMP is a small soluble molecule, not a receptor.', 'Receptors are usually proteins.'],
      ['Transcription factor that binds DNA on its own', 'cAMP acts on PKA, which can phosphorylate transcription factors; cAMP itself does not bind DNA directly.', 'cAMP works through kinases.'],
    ],
    lesson: 'Second messengers (cAMP, Ca2+, IP3, DAG) amplify and distribute intracellular signals downstream of G-protein-coupled receptors and other surface receptors.',
  },
  {
    id: 4400020,
    chapter: 'Unit 4: Cell Communication and Cell Cycle',
    title: 'Cell cycle checkpoints',
    prompt: 'The G2/M checkpoint primarily ensures that:',
    correct: 'DNA replication is complete and undamaged before the cell enters mitosis',
    wrong: [
      ['Chromosomes are properly attached to spindle fibers before anaphase', 'That is the spindle assembly checkpoint within M phase, not G2/M.', 'Different checkpoint, different question.'],
      ['The cell has grown large enough and has nutrients before S phase', 'That is the G1/S (restriction) checkpoint, which gates entry into DNA synthesis.', 'G1/S is earlier.'],
      ['Apoptosis has been initiated to remove the cell', 'Checkpoints can trigger apoptosis if damage is severe, but their primary role is quality control, not killing.', 'Checkpoints check first, kill last.'],
    ],
    lesson: 'G1/S gates DNA synthesis based on growth and signals; G2/M gates mitosis based on DNA replication and damage; the M (spindle) checkpoint gates anaphase on kinetochore attachment.',
  },
  {
    id: 4400021,
    chapter: 'Unit 4: Cell Communication and Cell Cycle',
    title: 'Cancer as checkpoint failure',
    prompt: 'A mutation that inactivates p53, a tumor-suppressor gene, contributes to cancer because:',
    correct: 'Damaged cells continue dividing instead of pausing for repair or undergoing apoptosis',
    wrong: [
      ['Cells lose the ability to enter S phase entirely', 'Loss of p53 lifts a brake; cells enter S phase too readily, not too rarely.', 'p53 is a brake, not a gas pedal.'],
      ['DNA polymerase is destroyed and replication stops', 'p53 regulates checkpoint response; it does not destroy the replication machinery.', 'p53 is regulatory.'],
      ['The mitotic spindle forms too many microtubules', 'Spindle problems are not the primary phenotype of p53 loss; checkpoint failure and apoptosis bypass are.', 'Think regulation, not architecture.'],
    ],
    lesson: 'Tumor suppressors (like p53) halt division of damaged cells or trigger apoptosis. Loss-of-function mutations remove these brakes and let damaged DNA propagate.',
  },
  {
    id: 4400022,
    chapter: 'Unit 4: Cell Communication and Cell Cycle',
    title: 'Mitosis vs meiosis',
    prompt: 'Which feature is unique to meiosis and not seen in mitosis?',
    correct: 'Pairing of homologous chromosomes and crossing over during prophase I',
    wrong: [
      ['Separation of sister chromatids in anaphase', 'Sister chromatid separation occurs in mitosis and in meiosis II; it is not unique to meiosis.', 'That is shared, not unique.'],
      ['Replication of DNA during S phase before division', 'DNA replication precedes both mitosis and meiosis; it is not a distinguishing feature.', 'S phase happens in both.'],
      ['Cytokinesis at the end of cell division', 'Cytokinesis occurs in mitosis and meiosis alike.', 'Common to both.'],
    ],
    lesson: 'Meiosis includes synapsis, crossing over, and independent assortment of homologs, producing 4 haploid genetically distinct gametes from one diploid cell. Mitosis produces 2 identical diploid cells.',
  },
  {
    id: 4400023,
    chapter: 'Unit 4: Cell Communication and Cell Cycle',
    title: 'Receptor tyrosine kinases',
    prompt: 'Receptor tyrosine kinases (RTKs) initiate signaling by:',
    correct: 'Dimerizing upon ligand binding and cross-phosphorylating tyrosine residues to recruit relay proteins',
    wrong: [
      ['Releasing a G-alpha subunit that activates adenylyl cyclase', 'That is the G-protein-coupled receptor mechanism, not RTKs.', 'GPCRs work via G-proteins.'],
      ['Opening an ion channel to let Ca2+ into the cytoplasm', 'Ion channel coupling describes ligand-gated ion channels, not RTKs.', 'Different receptor class.'],
      ['Directly binding DNA as transcription factors after activation', 'RTKs are membrane-anchored; their signal reaches DNA only through downstream relays.', 'RTKs do not enter the nucleus.'],
    ],
    lesson: 'RTKs are the prototypical receptor for growth factors. Ligand binding triggers dimerization, cross-phosphorylation, and recruitment of relay proteins (often initiating MAP kinase cascades).',
  },

  // -----------------------------------------------------------------------
  // Unit 5: Heredity
  // -----------------------------------------------------------------------
  {
    id: 4400024,
    chapter: 'Unit 5: Heredity',
    title: 'Monohybrid cross',
    prompt: 'A heterozygous purple-flowered pea plant (Pp) is crossed with a homozygous recessive white plant (pp). What is the expected phenotypic ratio of offspring?',
    correct: '1 purple : 1 white',
    wrong: [
      ['3 purple : 1 white', 'A 3:1 ratio comes from a Pp × Pp cross, not Pp × pp.', 'Identify the right cross.'],
      ['All purple', 'All purple would result from PP × pp; here half of offspring receive p from the heterozygous parent.', 'Pp parent gives p half the time.'],
      ['9 : 3 : 3 : 1', 'A 9:3:3:1 ratio is the dihybrid F2 result, not a single-trait test cross.', 'That is two traits.'],
    ],
    lesson: 'A test cross (heterozygote × homozygous recessive) produces a 1:1 phenotypic ratio and is used to determine the genotype of an organism with a dominant phenotype.',
  },
  {
    id: 4400025,
    chapter: 'Unit 5: Heredity',
    title: 'Dihybrid F2 ratio',
    prompt: 'In a dihybrid cross of two heterozygotes (RrYy × RrYy) for independently assorting genes, the expected phenotypic ratio in F2 is:',
    correct: '9 : 3 : 3 : 1 dominant-dominant : dominant-recessive : recessive-dominant : recessive-recessive',
    wrong: [
      ['1 : 1 : 1 : 1 for all four combinations', 'A 1:1:1:1 ratio comes from a dihybrid test cross (RrYy × rryy), not RrYy × RrYy.', 'Different parents, different ratio.'],
      ['3 : 1 single-trait pattern only', '3:1 describes a monohybrid F2; with two genes, the joint pattern is 9:3:3:1.', 'Multiply across two genes.'],
      ['1 : 2 : 1 like a codominant cross', '1:2:1 is the genotypic ratio of a monohybrid cross with incomplete dominance, not a dihybrid phenotypic ratio.', 'Wrong number of traits.'],
    ],
    lesson: 'Mendel\'s Law of Independent Assortment predicts a 9:3:3:1 phenotypic ratio in F2 of a dihybrid cross when genes are on different chromosomes (or far apart on the same chromosome).',
  },
  {
    id: 4400026,
    chapter: 'Unit 5: Heredity',
    title: 'Sex-linked inheritance',
    prompt: 'A color-blind father and a heterozygous carrier mother have children. What is the probability that a randomly chosen son will be color-blind?',
    correct: '1/2, because sons inherit their single X from the mother and she is heterozygous',
    wrong: [
      ['0, because the father cannot pass color blindness to his sons', 'That is true (fathers give Y to sons), but the mother is a carrier so half her sons inherit the affected X.', 'Mother\'s X matters here.'],
      ['1, because the father is affected', 'Affected fathers pass X to daughters, not sons; sons inherit only Y from dad.', 'Sons get Y from dad.'],
      ['1/4, by combining father and mother probabilities', '1/4 mixes up the calculation; the probability is independent of dad\'s X for sons.', 'Sons inherit one X, from mom only.'],
    ],
    lesson: 'X-linked recessive traits: sons inherit X only from mom, so a heterozygous mother gives 1/2 of sons the affected X. Fathers transmit X only to daughters.',
  },
  {
    id: 4400027,
    chapter: 'Unit 5: Heredity',
    title: 'Linkage and recombination',
    prompt: 'Two genes located close together on the same chromosome will most likely:',
    correct: 'Be inherited together more often than independent assortment predicts, with low recombination frequency',
    wrong: [
      ['Always be inherited together with zero recombination', 'Crossing over can occur even between close genes; recombination is rare but not zero unless distance is zero.', 'Rare is not zero.'],
      ['Show a 9:3:3:1 dihybrid ratio identical to unlinked genes', 'Unlinked genes give 9:3:3:1; linked genes deviate from this with parental classes overrepresented.', 'Linkage warps ratios.'],
      ['Assort independently regardless of physical location', 'Independent assortment requires different chromosomes or very large distances along the same chromosome.', 'Distance breaks linkage.'],
    ],
    lesson: 'Linked genes deviate from independent assortment in proportion to map distance. Recombination frequency (% recombinants) approximates map distance up to ~50 centimorgans.',
  },
  {
    id: 4400028,
    chapter: 'Unit 5: Heredity',
    title: 'Nondisjunction',
    prompt: 'A gamete contains 24 chromosomes instead of the normal 23 for humans. The most likely cause is:',
    correct: 'Nondisjunction during meiosis, causing homologs or sister chromatids to fail to separate',
    wrong: [
      ['A point mutation in a single gene', 'Point mutations change DNA sequence within chromosomes but do not change chromosome count.', 'Sequence vs number.'],
      ['Normal independent assortment', 'Independent assortment produces normal haploid (23-chromosome) gametes by definition.', 'Assortment is the rule, not the error.'],
      ['Crossing over between homologs', 'Crossing over reshuffles alleles but conserves chromosome number.', 'Recombination keeps count.'],
    ],
    lesson: 'Nondisjunction in meiosis I (homologs fail to separate) or meiosis II (sister chromatids fail to separate) produces aneuploid gametes — the basis of trisomy 21 and similar conditions.',
  },
  {
    id: 4400029,
    chapter: 'Unit 5: Heredity',
    title: 'Pedigree analysis',
    prompt: 'A pedigree shows a trait that affects roughly equal numbers of males and females, appears in every generation, and an affected child always has at least one affected parent. The most likely inheritance pattern is:',
    correct: 'Autosomal dominant',
    wrong: [
      ['Autosomal recessive', 'Recessive traits commonly skip generations and unaffected parents can have affected children, which contradicts the pedigree.', 'Recessive traits skip.'],
      ['X-linked recessive', 'X-linked recessive traits affect males more than females and can skip generations through carrier mothers.', 'X-linked recessive skews male.'],
      ['Y-linked', 'Y-linked traits affect only males and pass father-to-son exclusively.', 'Y-linked is male-only.'],
    ],
    lesson: 'Pedigree pattern rules: dominant traits do not skip generations; recessive traits often do; X-linked recessive skews male; Y-linked passes only father-to-son.',
  },

  // -----------------------------------------------------------------------
  // Unit 6: Gene Expression and Regulation
  // -----------------------------------------------------------------------
  {
    id: 4400030,
    chapter: 'Unit 6: Gene Expression and Regulation',
    title: 'Central dogma',
    prompt: 'The central dogma of molecular biology describes the flow of information as:',
    correct: 'DNA → RNA → protein, with transcription producing RNA and translation producing protein',
    wrong: [
      ['Protein → RNA → DNA in normal cells', 'That reverses the flow; proteins do not normally template RNA or DNA.', 'Information flows forward.'],
      ['DNA → protein directly without an RNA intermediate', 'mRNA is the obligate intermediate in eukaryotic and prokaryotic gene expression.', 'RNA is the messenger.'],
      ['RNA → DNA in all cells as the primary route', 'Reverse transcription occurs in retroviruses, but the normal flow in cells is DNA → RNA → protein.', 'Retroviruses are an exception.'],
    ],
    lesson: 'Transcription (DNA → mRNA) happens in the nucleus (eukaryotes) using RNA polymerase. Translation (mRNA → protein) happens at the ribosome using tRNAs and the genetic code.',
  },
  {
    id: 4400031,
    chapter: 'Unit 6: Gene Expression and Regulation',
    title: 'Mutation types',
    prompt: 'A single nucleotide insertion in the middle of a coding sequence is most likely to cause:',
    correct: 'A frameshift that changes nearly every downstream amino acid',
    wrong: [
      ['A silent mutation with no effect on the protein', 'Insertions shift the reading frame and rarely produce silent effects; silent mutations are point substitutions in degenerate codons.', 'Insertions shift, not swap.'],
      ['A single amino acid substitution at the insertion site', 'A single substitution would result from a point mutation, not an insertion that shifts the frame.', 'Mind the deletion/insertion category.'],
      ['Loss of all transcription of the gene', 'Transcription typically still occurs; the protein is translated but mis-encoded downstream.', 'Transcription survives; translation suffers.'],
    ],
    lesson: 'Point mutations: silent, missense, nonsense (stop). Indels of non-multiples of 3 cause frameshifts that scramble the downstream sequence and often introduce premature stop codons.',
  },
  {
    id: 4400032,
    chapter: 'Unit 6: Gene Expression and Regulation',
    title: 'Lac operon regulation',
    prompt: 'In E. coli, the lac operon is transcribed only when:',
    correct: 'Lactose is present and glucose is absent (or low), so the repressor is released and CAP-cAMP enhances transcription',
    wrong: [
      ['Glucose is abundant and lactose is absent', 'Abundant glucose lowers cAMP and lactose absence keeps the repressor bound; transcription is off.', 'Glucose suppresses cAMP.'],
      ['Both glucose and lactose are abundant', 'High glucose keeps CAP inactive even if lactose lifts the repressor; transcription is only weak.', 'Catabolite repression dominates.'],
      ['Neither glucose nor lactose is present', 'Without lactose, the repressor still binds the operator and shuts transcription off.', 'No lactose means no induction.'],
    ],
    lesson: 'The lac operon integrates two signals: lactose presence (relieves the lac repressor) and glucose scarcity (raises cAMP, activating CAP). Both are needed for full induction.',
  },
  {
    id: 4400033,
    chapter: 'Unit 6: Gene Expression and Regulation',
    title: 'RNA processing in eukaryotes',
    prompt: 'Before a eukaryotic mRNA leaves the nucleus, it is typically modified by:',
    correct: 'Adding a 5\' cap, a poly-A tail, and splicing out introns',
    wrong: [
      ['Removing the 5\' cap to expose the ribosome binding site', 'The 5\' cap is added (not removed) and is required for ribosome recognition.', 'Cap is needed for translation.'],
      ['Reverse-transcribing the mRNA back into DNA', 'Reverse transcription is performed by retroviruses, not normal cellular mRNA processing.', 'mRNA stays as RNA.'],
      ['Splicing out exons and keeping introns', 'Introns are removed; exons are retained in the mature mRNA.', 'Exons exit the nucleus.'],
    ],
    lesson: 'Eukaryotic pre-mRNA receives a 5\' cap, a 3\' poly-A tail, and undergoes intron splicing. Alternative splicing allows multiple proteins from one gene.',
  },
  {
    id: 4400034,
    chapter: 'Unit 6: Gene Expression and Regulation',
    title: 'Transcription factors',
    prompt: 'In eukaryotes, transcription factors regulate gene expression primarily by:',
    correct: 'Binding specific DNA sequences (promoters or enhancers) and recruiting or blocking RNA polymerase II',
    wrong: [
      ['Catalyzing peptide bond formation at the ribosome', 'That is the role of ribosomal RNA in the large ribosomal subunit, not transcription factors.', 'Wrong machinery.'],
      ['Splicing introns out of pre-mRNA', 'Splicing is done by the spliceosome, not transcription factors.', 'Different complex.'],
      ['Degrading mature mRNA in the cytoplasm', 'mRNA degradation is a post-transcriptional control, not the role of DNA-binding transcription factors.', 'TFs work at the DNA.'],
    ],
    lesson: 'Eukaryotic transcription factors are DNA-binding proteins that activate or repress RNA polymerase II via promoter and enhancer interactions; they are central to differential gene expression.',
  },
  {
    id: 4400035,
    chapter: 'Unit 6: Gene Expression and Regulation',
    title: 'Epigenetic regulation',
    prompt: 'Methylation of cytosine bases in promoter regions typically:',
    correct: 'Silences gene expression by recruiting repressive chromatin proteins and blocking transcription factors',
    wrong: [
      ['Mutates the underlying DNA sequence permanently', 'Methylation is a reversible chemical modification that does not change the underlying nucleotide identity.', 'Methylation is not mutation.'],
      ['Activates transcription by loosening histones', 'Histone acetylation (not cytosine methylation) generally loosens chromatin; promoter methylation usually represses.', 'Different mark, opposite effect.'],
      ['Has no effect on gene expression', 'DNA methylation is one of the best-characterized regulators of gene silencing in eukaryotes.', 'Methylation matters.'],
    ],
    lesson: 'Epigenetic marks (DNA methylation, histone modifications) regulate gene expression without changing DNA sequence and can be inherited through cell divisions and sometimes generations.',
  },

  // -----------------------------------------------------------------------
  // Unit 7: Natural Selection
  // -----------------------------------------------------------------------
  {
    id: 4400036,
    chapter: 'Unit 7: Natural Selection',
    title: 'Hardy-Weinberg equation',
    prompt: 'In a population in Hardy-Weinberg equilibrium, the frequency of the recessive homozygous phenotype is 0.16. What is the frequency of the dominant allele?',
    correct: '0.6, because q = 0.4 (sqrt of 0.16) and p = 1 - q',
    wrong: [
      ['0.16, equal to the recessive phenotype frequency', '0.16 is q^2, the frequency of homozygous recessives, not an allele frequency.', 'Take the square root.'],
      ['0.4, because that is q', '0.4 is the recessive allele frequency (q), not the dominant allele frequency (p).', 'Solve for p.'],
      ['0.84, because that is the dominant phenotype frequency', '0.84 = 1 - 0.16 is the dominant phenotype frequency (p^2 + 2pq), not the allele frequency.', 'Phenotype vs allele.'],
    ],
    lesson: 'Hardy-Weinberg: p + q = 1 and p^2 + 2pq + q^2 = 1. Solve for q from q^2 (homozygous recessive), then derive p, then heterozygote frequency 2pq.',
  },
  {
    id: 4400037,
    chapter: 'Unit 7: Natural Selection',
    title: 'Hardy-Weinberg assumptions',
    prompt: 'Which condition is required for a population to remain in Hardy-Weinberg equilibrium?',
    correct: 'No natural selection, no mutation, no gene flow, random mating, and large population size',
    wrong: [
      ['Strong directional selection on a single trait', 'Selection changes allele frequencies and breaks the equilibrium.', 'Equilibrium means no evolution.'],
      ['Small population size to keep allele frequencies stable', 'Small populations are subject to genetic drift, which breaks the equilibrium.', 'Small = unstable.'],
      ['Migration of new alleles into the population each generation', 'Gene flow changes allele frequencies and violates the assumption of no migration.', 'Migration breaks equilibrium.'],
    ],
    lesson: 'Hardy-Weinberg defines a null hypothesis of no evolution. Violations of any of the five conditions cause allele frequencies to change — i.e., the population evolves.',
  },
  {
    id: 4400038,
    chapter: 'Unit 7: Natural Selection',
    title: 'Allopatric vs sympatric speciation',
    prompt: 'A river permanently divides a beetle population, and over many generations the two groups become reproductively isolated. This is an example of:',
    correct: 'Allopatric speciation driven by geographic isolation',
    wrong: [
      ['Sympatric speciation through polyploidy', 'Sympatric speciation occurs without geographic separation; here a river physically separates the groups.', 'Same place vs different place.'],
      ['Convergent evolution in a single population', 'Convergent evolution describes unrelated lineages developing similar traits, not one population splitting.', 'Convergence vs divergence.'],
      ['Coevolution between two species', 'Coevolution involves reciprocal adaptation between species, not one species splitting.', 'One population, not two species.'],
    ],
    lesson: 'Allopatric speciation: geographic barriers reproductively isolate populations until they diverge. Sympatric speciation: reproductive isolation arises within a shared range (e.g., polyploidy, niche partitioning).',
  },
  {
    id: 4400039,
    chapter: 'Unit 7: Natural Selection',
    title: 'Reproductive isolation mechanisms',
    prompt: 'Two closely related fly species mate at different times of day and so almost never interbreed. This is an example of:',
    correct: 'Temporal isolation, a prezygotic reproductive barrier',
    wrong: [
      ['Hybrid inviability, a postzygotic barrier', 'Hybrid inviability acts after fertilization; here mating itself does not happen.', 'Prezygotic blocks zygote formation.'],
      ['Behavioral isolation only', 'Behavioral isolation involves courtship differences; the question specifies timing, which is temporal.', 'Same category, different mechanism.'],
      ['Geographic isolation only', 'The flies share a location; geography is not the barrier.', 'Same place, different time.'],
    ],
    lesson: 'Prezygotic barriers (temporal, habitat, behavioral, mechanical, gametic) prevent fertilization. Postzygotic barriers (hybrid inviability, sterility, breakdown) reduce hybrid fitness.',
  },
  {
    id: 4400040,
    chapter: 'Unit 7: Natural Selection',
    title: 'Genetic drift',
    prompt: 'A small founding population establishes itself on a remote island. Allele frequencies among founders happen to differ from the source population. This describes:',
    correct: 'The founder effect, a form of genetic drift',
    wrong: [
      ['Natural selection favoring island-adapted alleles', 'The shift here is due to sampling, not differential survival or reproduction.', 'Drift is random; selection is not.'],
      ['Gene flow back to the mainland', 'Gene flow would homogenize populations, not create founder-effect divergence.', 'No migration happens here.'],
      ['A balanced polymorphism maintained by heterozygote advantage', 'Heterozygote advantage maintains alleles within a stable population; it does not describe founding events.', 'Balanced vs sampled.'],
    ],
    lesson: 'Genetic drift includes the founder effect (new population, small sample) and bottleneck effect (population crash). Both reduce genetic variation and can produce allele frequencies unrepresentative of the source.',
  },
  {
    id: 4400041,
    chapter: 'Unit 7: Natural Selection',
    title: 'Phylogenetic trees',
    prompt: 'On a cladogram, the most recent common ancestor of two species is represented by:',
    correct: 'The node where the two species\' lineages last meet before branching apart',
    wrong: [
      ['The species at the tip of the tree closest to either branch', 'Tips represent extant or terminal taxa, not ancestors; ancestors are at nodes.', 'Tips vs nodes.'],
      ['The full set of all branches above the node', 'That set represents the clade descended from the ancestor, not the ancestor itself.', 'Clade vs ancestor.'],
      ['The root of the entire tree by definition', 'The root is the most recent common ancestor of all taxa shown; for any two species it is usually a more recent node.', 'MRCA depends on which species.'],
    ],
    lesson: 'Cladograms depict evolutionary relationships. Nodes are inferred ancestors; tips are taxa; the most recent common ancestor of two taxa is the node where their lineages join.',
  },

  // -----------------------------------------------------------------------
  // Unit 8: Ecology
  // -----------------------------------------------------------------------
  {
    id: 4400042,
    chapter: 'Unit 8: Ecology',
    title: 'Exponential vs logistic growth',
    prompt: 'A population grows rapidly at first, then slows as it approaches a stable maximum. This pattern is described by:',
    correct: 'Logistic growth, where growth rate slows as N approaches carrying capacity K',
    wrong: [
      ['Exponential growth with no upper bound', 'Exponential growth produces a J-curve with no leveling off; the described S-curve has a ceiling.', 'J vs S curve.'],
      ['Linear growth at a constant rate', 'Linear growth would be a straight line, not rapid-then-slowing.', 'Same slope throughout would be linear.'],
      ['Negative growth as resources increase', 'Negative growth would describe a declining population, not one approaching equilibrium.', 'Slowing is not declining.'],
    ],
    lesson: 'Exponential growth: dN/dt = rN. Logistic growth: dN/dt = rN(K-N)/K. The S-curve arises because density-dependent limits slow growth near K.',
  },
  {
    id: 4400043,
    chapter: 'Unit 8: Ecology',
    title: 'r vs K selected species',
    prompt: 'A species produces thousands of offspring with little parental investment, has a short generation time, and typifies disturbed habitats. This species is best described as:',
    correct: 'r-selected, favoring high reproductive output in unstable environments',
    wrong: [
      ['K-selected with high parental investment per offspring', 'K-selected species produce few well-cared-for offspring and live in stable environments near K.', 'K means quality, not quantity.'],
      ['Specialist with narrow ecological tolerance', 'Specialization is orthogonal to r/K; the question describes high output and disturbance tolerance, classic r-selection.', 'Wrong axis.'],
      ['Apex predator at the top of the food chain', 'Apex predators tend to be K-selected with low reproductive output and long life spans.', 'Apex predators are usually K.'],
    ],
    lesson: 'r-selected species: many small offspring, short generation time, unstable habitats (weeds, insects). K-selected species: few offspring with high investment, stable populations near K (whales, elephants).',
  },
  {
    id: 4400044,
    chapter: 'Unit 8: Ecology',
    title: 'Trophic energy transfer',
    prompt: 'Approximately what fraction of energy in one trophic level is typically transferred to the next?',
    correct: 'About 10 percent, with the rest lost as heat, used in metabolism, or unconsumed',
    wrong: [
      ['About 90 percent, with most energy passed up the chain', 'That reverses the actual fraction; most energy is lost between trophic levels.', 'Most is lost, not transferred.'],
      ['Essentially 100 percent because energy is conserved', 'Energy is conserved overall (1st law) but the usable chemical energy passed up the food chain is small; the rest becomes heat.', 'Energy is conserved in form, not concentration.'],
      ['About 50 percent for plants and 1 percent for predators', 'The rough rule across trophic levels is ~10 percent, not differing by level this drastically.', 'Use the 10% rule of thumb.'],
    ],
    lesson: 'The 10 percent rule: only about a tenth of energy at one trophic level becomes biomass at the next. This explains short food chains and the rarity of higher predators.',
  },
  {
    id: 4400045,
    chapter: 'Unit 8: Ecology',
    title: 'Biogeochemical cycling',
    prompt: 'Which step is unique to the nitrogen cycle and absent from the carbon cycle?',
    correct: 'Fixation of atmospheric N2 by bacteria into ammonia (NH3)',
    wrong: [
      ['Photosynthetic uptake of an atmospheric gas', 'Photosynthesis fixes CO2 in the carbon cycle, paralleling N fixation but not unique to nitrogen.', 'Both cycles use atmospheric pools.'],
      ['Respiration releasing the element to the atmosphere', 'Respiration releases CO2 in the carbon cycle; it is not unique to nitrogen.', 'Carbon also returns by respiration.'],
      ['Sedimentation into rocks over millions of years', 'Carbon and nitrogen both have sedimentary reservoirs; the nitrogen-specific step is microbial N2 fixation.', 'Both have rock reservoirs.'],
    ],
    lesson: 'Nitrogen cycle: N2 fixation (only certain bacteria/archaea), nitrification, assimilation, ammonification, denitrification. Carbon cycle: photosynthesis, respiration, combustion, sedimentation.',
  },
  {
    id: 4400046,
    chapter: 'Unit 8: Ecology',
    title: 'Keystone species',
    prompt: 'Removing a particular sea star from an intertidal community causes mussel populations to explode and biodiversity to collapse. The sea star is best described as a:',
    correct: 'Keystone species whose effect on community structure exceeds its abundance',
    wrong: [
      ['Dominant species whose removal has no community-wide effect', 'Dominant species are abundant, but the question highlights an outsized effect for the species\' size — that defines keystone, not dominant.', 'Outsized impact = keystone.'],
      ['Invasive species spreading beyond its native range', 'Nothing in the question indicates the sea star is invasive; it is a native top consumer being removed.', 'Native vs invasive.'],
      ['Producer at the base of the food web', 'Sea stars are predators, not producers.', 'Producers do photosynthesis.'],
    ],
    lesson: 'Keystone species have community impacts disproportionate to their abundance. Their removal often triggers trophic cascades and biodiversity loss (Paine\'s classic Pisaster experiment).',
  },
  {
    id: 4400047,
    chapter: 'Unit 8: Ecology',
    title: 'Density-dependent vs independent factors',
    prompt: 'Which is a density-dependent factor limiting population growth?',
    correct: 'Disease transmission that intensifies as individuals come into closer contact',
    wrong: [
      ['A sudden hurricane killing organisms regardless of density', 'Weather events are density-independent: their effect does not scale with population size.', 'Storms hit everyone.'],
      ['A wildfire that burns through the habitat', 'Fires are density-independent; their lethality is not a function of density.', 'Fire is indifferent to N.'],
      ['A drought that reduces water availability everywhere', 'Drought is typically density-independent unless competition for water becomes the limiting factor explicitly.', 'Abiotic stress is usually independent.'],
    ],
    lesson: 'Density-dependent factors (disease, competition, predation) intensify with population density. Density-independent factors (weather, disasters) affect populations regardless of size.',
  },

  // -----------------------------------------------------------------------
  // Cross-Unit Synthesis
  // -----------------------------------------------------------------------
  {
    id: 4400048,
    chapter: 'Cross-Unit Synthesis',
    title: 'Mutation through to ecology',
    prompt: 'A single point mutation in a bacterial gene confers antibiotic resistance. Within months, resistance dominates the local population. The best cross-unit explanation is:',
    correct: 'Mutation generated new variation; antibiotic exposure imposed strong directional selection that increased allele frequency',
    wrong: [
      ['The antibiotic directly caused bacteria to mutate adaptively', 'Mutations arise randomly; the antibiotic selects on existing variation, it does not direct mutation.', 'Selection acts on variation, it does not create it.'],
      ['Genetic drift alone explains the rapid shift', 'Drift can shift allele frequencies, but a consistent, rapid increase under antibiotic pressure indicates selection, not random sampling.', 'Selection vs drift.'],
      ['Horizontal gene transfer is the only possible source', 'HGT can contribute, but a single point mutation as described is itself sufficient and is what the question specifies.', 'Take the prompt at its word.'],
    ],
    lesson: 'Antibiotic resistance is the canonical microevolution case: random mutation supplies variation; strong selection rapidly shifts allele frequency. This integrates Units 6 (mutation) and 7 (selection).',
  },
  {
    id: 4400049,
    chapter: 'Cross-Unit Synthesis',
    title: 'Energy from sun to top predator',
    prompt: 'Which sequence correctly traces the energy in a single glucose molecule from the sun to a top predator?',
    correct: 'Sunlight → Calvin cycle in plant → glucose → cellular respiration in herbivore → ATP/heat → predator consumes herbivore → ATP/heat',
    wrong: [
      ['Sunlight → mitochondrion in plant → glucose → herbivore → predator', 'Plants fix CO2 in chloroplasts via the Calvin cycle; mitochondria handle respiration, not glucose synthesis.', 'Chloroplast vs mitochondrion.'],
      ['Sunlight → glucose → predator without intermediate trophic levels', 'Most top predators do not photosynthesize and must consume prey; energy must travel up trophic levels.', 'Predators are heterotrophs.'],
      ['Glucose → photosynthesis → sun → predator', 'Energy flows from the sun into glucose, not the other way around.', 'Direction matters.'],
    ],
    lesson: 'Energy flows one way: sun → producers (photosynthesis) → consumers (respiration) → heat. Matter cycles, energy does not. This integrates Units 3 (energetics) and 8 (ecology).',
  },
])

import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const apiInspectorsS0G23: Question[] = [
  makeSimpleQuestion(
    8980000,
    'Career Skills',
    'Equipment Design Basics and Inspection Data',
    "Recomputing MAWP from measured thickness",
    'A carbon-steel vessel shell operates under internal pressure. Your latest UT survey gives a measured minimum thickness of 0.75 in. The corroded inside radius is 30 in., the allowable stress S is 17,500 psi, and the longitudinal seams were examined by spot radiography (Type 1 butt joint). Using the ASME Section VIII Div 1 circumferential-stress rule, what is the recomputed MAWP that governs continued service?',
    'About 366 psi, from MAWP = SEt / (R + 0.6t) = (17,500 x 0.85 x 0.75) / (30 + 0.6 x 0.75)',
    [
      ["About 431 psi, treating the joint efficiency as E = 1.0", "Spot radiography on a Type 1 butt joint gives E = 0.85, not 1.0; full radiography is required before E = 1.0 may be used. Plugging in 1.0 inflates the numerator and overstates MAWP by roughly 18 percent.", "Read the radiography level off the inspection record first, then select the UW-12 joint efficiency (full = 1.0, spot = 0.85, none = 0.70) before computing."],
      ["About 426 psi, using the nominal (as-built) thickness of 0.875 in.", "ASME design symbols are evaluated in the corroded condition, so the fitness-for-continued-service MAWP must use the measured minimum thickness, not the nominal as-built value. Using nominal thickness ignores the metal already lost.", "Use the actual measured minimum thickness from the survey, and confirm whether any future corrosion allowance should also be deducted for the next interval."],
      ["About 751 psi, from the longitudinal-stress (circumferential-seam) formula 2SEt/(R - 0.4t)", "The longitudinal-stress equation governs the circumferential seam and almost always yields a higher allowable pressure; the controlling MAWP is the lower value, which comes from the circumferential-stress (longitudinal-seam) equation with the +0.6t denominator term.", "Compute both stress directions when in doubt and take the lower MAWP as the governing value; for thin shells the circumferential-stress equation usually controls."],
    ],
    'For a thin cylindrical shell under internal pressure, ASME Section VIII Div 1 UG-27 gives the circumferential (hoop) stress requirement t = PR/(SE - 0.6P), which rearranges to MAWP = SEt/(R + 0.6t). All dimensions are taken in the corroded condition, so t is the measured minimum thickness and R is the corroded inside radius. The joint efficiency E comes from UW-12 and depends on the degree of radiography (full = 1.0, spot = 0.85, none = 0.70 for a Type 1 butt joint), so misreading the radiography level is a direct error in the answer.',
    'Floe generated',
    true,
    'Two inputs are easy to get wrong here: which thickness the code wants in a corroded-condition calculation, and what joint efficiency a spot-radiographed seam actually earns.',
    { challengeRating: 7 },
  ),
  makeSimpleQuestion(
    8980001,
    'Career Skills',
    'Equipment Design Basics and Inspection Data',
    "Joint efficiency and radiography level",
    'You are setting up a t-min calculation for a Type 1 double-welded butt joint on a pressure-vessel shell. The fabrication records show the longitudinal seams received spot radiography that met the acceptance criteria, but the documentation does not claim full radiographic examination. Which joint efficiency E should you use, and why does the choice matter to the calculation?',
    'E = 0.85, because spot radiography on a Type 1 butt joint earns 0.85 per ASME UW-12; a lower E raises the required minimum thickness',
    [
      ["E = 1.0, because a Type 1 double-welded butt joint is the strongest joint type and is inspected", "Joint geometry alone does not set E; the degree of radiographic examination does. A Type 1 joint earns 1.0 only with full radiography. Spot radiography caps it at 0.85, and using 1.0 would understate the required thickness.", "Decouple joint type from radiography level: confirm the examination extent in the records, then read E from the UW-12 table."],
      ["E = 0.70, because anything short of full radiography is treated as no radiography", "Spot radiography is a recognized middle category that earns 0.85, not the 0.70 reserved for joints with no radiography. Dropping to 0.70 is over-conservative and would force an unnecessarily thick t-min.", "Distinguish the three radiography tiers (full = 1.0, spot = 0.85, none = 0.70) rather than collapsing spot into the no-RT case."],
      ["E does not affect t-min; it only matters for the hydrotest pressure", "E appears directly in the thin-wall thickness formula t = PR/(SE - 0.6P), so it changes the required thickness and the recomputed MAWP. It is not confined to test-pressure determination.", "Trace where E lives in the design equation: it scales allowable stress in the denominator, so a smaller E always demands more wall."],
    ],
    'ASME Section VIII Div 1 UW-12 sets the joint efficiency E from both the joint type and the extent of radiographic examination. For a Type 1 butt joint, full radiography earns E = 1.0, spot radiography earns 0.85, and no radiography earns 0.70. Because E multiplies the allowable stress S in the denominator of t = PR/(SE - 0.6P), a lower E increases the required minimum thickness and lowers the recomputed MAWP, so misreading the radiography level on a data sheet propagates straight into a fitness-for-service error.',
    'Floe generated',
    true,
    'The joint type and the radiography extent are two separate inputs; only one of them sets E by itself.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    8980002,
    'Career Skills',
    'Equipment Design Basics and Inspection Data',
    "Static head added to operating pressure",
    'A vertical vessel holds a column of liquid with a specific gravity of 1.0. The design pressure at the top of the vessel is 100 psig. You are evaluating the bottom shell course, which sits about 46 ft below the liquid surface. When you compute t-min and the design basis for that bottom course, what pressure should the calculation use?',
    'The design pressure plus the static liquid head at that elevation: about 100 + 20 = 120 psig at the bottom course',
    [
      ["Just the 100 psig design pressure, because the vessel is rated for 100 psig everywhere", "A single nameplate design pressure does not capture the extra load from liquid weight; the bottom course also carries the static head of the column above it, which the thin-wall formula must include. Ignoring head under-sizes the lower course.", "Add the static head (about 0.433 psi per foot for water-like fluid) to the design pressure when evaluating any course below the liquid surface."],
      ["The static head alone, about 20 psig, since head replaces the gas-space design pressure at the bottom", "Static head adds to the pressure at depth; it does not replace the design pressure acting on the liquid surface. The bottom sees both, so using head alone omits the 100 psig and under-predicts the load.", "Sum the two contributions: surface design pressure plus the hydrostatic head down to the course in question."],
      ["About 320 psig, by adding 0.433 psi per foot of head as if the column were 460 ft tall", "The head term is roughly 0.433 psi per foot for a fluid of specific gravity 1.0, so 46 ft gives about 20 psi, not 200. Misplacing the decimal or the column height grossly overstates the pressure.", "Check the head arithmetic: head (psi) = 0.433 x specific gravity x height in feet; 46 ft of water is about 20 psi."],
    ],
    'The pressure that drives a thin-wall t-min calculation at a given elevation is the local pressure, which for a liquid-filled vessel is the design (surface) pressure plus the static head of liquid above that point. For a fluid with specific gravity 1.0, static head is about 0.433 psi per foot of depth, so a course 46 ft below the surface sees roughly 20 psi of head added to the 100 psig design pressure. Lower courses therefore require more wall than the top, and omitting head is a classic way to under-size the bottom of a tall column.',
    'Floe generated',
    true,
    'Ask what pressure the steel at the bottom of a tall liquid column actually feels, compared with what the nameplate states at the top.',
    { challengeRating: 5 },
  ),
]

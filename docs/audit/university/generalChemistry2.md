# Audit: generalChemistry2

**Syllabus**: [`src/data/syllabi/university/general_chemistry_2.md`](../../../src/data/syllabi/university/general_chemistry_2.md)
**Track id**: `generalChemistry2`
**Tier**: university
**Region**: Jurisdiction-neutral (OpenStax/ACS-aligned)

## Coverage map (syllabus to questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Kinetics and Rate Laws | Partial | Rate law scaling; no integrated rate law / half-life |
| 2. Mechanisms, Catalysis, Temperature Effects | Missing | No Arrhenius, no activation energy, no rate-determining step |
| 3. Chemical Equilibrium | Partial | ICE / Kc present; no Q vs K reasoning, no Le Chatelier |
| 4. Acids, Bases, Buffers | Partial | pH calculation, Henderson-Hasselbalch; no polyprotic, no salt hydrolysis |
| 5. Titrations, Solubility, Complex Ions | Partial | Ksp / molar solubility item; no titration curve interpretation |
| 6. Thermodynamics and Free Energy | Partial | ΔG = ΔH - TΔS, ΔG-vs-K link; no entropy ranking |
| 7. Electrochemistry | Partial | Galvanic cell EMF; no Nernst-equation numeric, no electrolysis Faraday math |
| 8. Nuclear, Coordination, Chemistry II Studio | Missing | Zero nuclear decay, zero coordination chemistry |

Chapter labels in the questions track the syllabus reasonably ("General Chemistry II: Rate Laws", "General Chemistry II: Acid-Base"), but coverage is uneven and the two final chapters are completely absent.

## Per-file recommendations

| File | gChem2 Q's | Bucket | Reason |
|---|---|---|---|
| [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts) (generalChemistry2 section, ids 3110000+) | 18 | **FIX** | Calculations are sound (rate law scaling, Henderson-Hasselbalch, Ksp). **Same DEFAULT_FLAW problem as the rest of the file**: the `q()` helper hard-codes the file-wide constant for every distractor. Per-distractor rewrite required. Then close the Mechanism (Ch 2), Nuclear (Ch 8), and Coordination chemistry (Ch 8) gaps. |

**No other files wire to generalChemistry2.** No exam batches, no workout-generated bank. 18 questions is thin for a second-semester gateway course; this should sit closer to 60-80.

## Cross-cutting flags

- **DEFAULT_FLAW** — confirmed; every wrong answer uses the file-level constant. Same systemic finding as genChem1, generalPhysics2, generalBiology2, genBio1, genPhys1, anatomyAndPhysiology, electricalEngineering.
- **Tone whiplash.** "Molecule goblin scaling", "polite galvanic cell", "tiny lightning goblin" alongside Nernst-equation problem setups. Some character is fine, but Chem II is pre-MCAT / pre-med-school territory; the sober register should dominate. Compare with `universityPrep.ts`.
- **Jurisdiction-neutral** — no US-only framing detected.
- **Chapter 8 absence is the biggest content gap** — nuclear chemistry (half-life, binding energy) and coordination chemistry (ligands, oxidation states in complexes) are core to second-semester chem and downstream MCAT prep.

## Open actions (priority order)

1. **Per-distractor rewrite of 18 existing Qs** — name the misconception each wrong answer encodes (e.g. for rate-law scaling: "Doubling [A] in rate = k[A]^2[B] gives 4x, not 2x; second-order in A").
2. **Author Chapter 2 questions** (Arrhenius, transition state, rate-determining step) — ~6 questions.
3. **Author Chapter 8 questions** (nuclear decay equations, half-life math, coordination naming, ligand fields) — ~8 questions.
4. **Add Q vs K reasoning** to Chapter 3 (predict shift direction) and Le Chatelier disturbance items.
5. **Add Nernst numeric calculations** (Ch 7) — current item only treats standard-state EMF.

## Estimated effort

- Per-distractor rewrite: ~3 hours
- ~20 new questions across Ch 2, 3, 7, 8: ~7 hours
- Total: ~1.5 working days

## Notes for next auditor

This track sits on the path to MCAT, pharmacy admission, and engineering chemistry pre-reqs. The thin coverage (18 Qs across 8 chapters) is a real product gap, not just a polish issue. Pair the rewrite with a coverage build-out rather than just a refactor. Cross-reference the `mcat` track's chemistry section (ids 3104000+) — there may be calorimetry, equilibrium, and acid-base items there that should be lifted or duplicated into generalChemistry2.

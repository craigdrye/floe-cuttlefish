# Audit: apChemistry

**Syllabus**: [`src/data/syllabi/high/ap_chemistry.md`](../../../src/data/syllabi/high/ap_chemistry.md)
**Track ids**: `apChemistry` (line 29 in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)) — wired bank. Plus `col-ap-chemistry` (line 1510) — same syllabus, **zero questions wired**. **Track-id duplication.**
**Tier**: high
**Region**: US (College Board AP — assumed; not currently tagged)
**Status**: both `playable`; only `apChemistry` has content. Syllabus "Covers: `col-ap-chemistry`" disagrees with the wired id.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Chemistry Practices and Atomic Structure | ✅ | Protons/neutrons/electrons, isotopes, ion charge, mass number, electron shells in workout. No mass-spectra or PES items. |
| 2. Periodicity, Bonding, and Molecular Structure | ✅ | Atomic radius trend, ionization energy, electronegativity, ionic/covalent/polar covalent, Lewis dots, octet rule. **No VSEPR / molecular geometry items.** |
| 3. Intermolecular Forces and Properties | ⚠️ partial | Hydrogen bonding identified once. No London dispersion ranking, no boiling-point reasoning chain, no chromatography or distillation. |
| 4. Chemical Reactions and Stoichiometry | ✅ | Mole concept, balanced equations, mole ratios, limiting reactant, percent yield, ideal gas, Boyle's law. **No net ionic equations, no titration, no redox half-reactions.** |
| 5. Kinetics | ✅ | Rate, catalyst, activation energy, temperature effect. **No rate-law determination from initial-rates data, no mechanism step identification.** |
| 6. Thermochemistry and Thermodynamics | ⚠️ partial | Exo/endothermic, enthalpy sign covered. **No Hess's-law calculation, no calorimetry, no Gibbs/entropy.** |
| 7. Equilibrium, Acids and Bases, Electrochemistry | ✅ | Le Chatelier, K vs Q, Bronsted acid/base, pH, neutral pH, strong acid, buffers. **No Ksp, no Ka/Kb calc, no galvanic cell EMF.** |
| 8. AP Chemistry Exam Studio | ❌ | **Real gap.** No particulate diagrams, no FRQ-style calculation justification, no data-table interpretation. |

## Per-file recommendations

| File | apChem Q's | Bucket | Reason |
|---|---|---|---|
| [`apChemistryExamBatch.ts`](../../../src/data/questionCatalog/apChemistryExamBatch.ts) | 10 | **KEEP** | Hand-authored, per-distractor explanations, chapter tags ("Stoichiometry", "Thermochemistry", "Equilibrium", "Bonding", "Acids and Bases", "Kinetics") map directly to syllabus chapters 4–7. Floe-native conversion. |
| [`apChemistryWorkoutGenerated.ts`](../../../src/data/questionCatalog/apChemistryWorkoutGenerated.ts) | 50 | **KEEP** | High-quality drill items, per-distractor explanations throughout. Chapter labels align well with syllabus. Some definitional ("ideal gas law is PV=nRT") but appropriate for foundation drill. |
| [`openTriviaChemistryQuestions`](../../../src/data/questionCatalog/openTriviaCuratedAdditionalImported.ts) | ~30 (wired) | **AUDIT — likely DELETE** | Curated openTrivia subset. Likely shares the DEFAULT_FLAW stem; confirm and salvage 5–10 mechanism items before cutting. |
| [`openTriviaChemistryExtensionImported.ts`](../../../src/data/questionCatalog/openTriviaChemistryExtensionImported.ts) | ~85 | **DELETE** (auto-FIX flag) | **DEFAULT_FLAW**: every distractor uses stock string *"This option does not match the chemistry clue in the prompt. Use the bonding, atomic-structure, nuclear-chemistry, or materials concept directly."* Many rows are also trivia-flavoured (e.g., "Dihydrogen monoxide hoax"). Salvage 0–3 strong rows. |

## Open actions (priority order)

1. **Delete `openTriviaChemistryExtensionImported.ts`** (auto-FIX DEFAULT_FLAW). ~30 min including salvage.
2. **Author Chapter 8 FRQ-style items (10–12)** — particulate diagrams, data-table interpretation, calculation justification. Voice template: `apChemistryExamBatch`.
3. **Close stoichiometry/kinetics calculation gaps** — author 6–10 numerical items (Hess's law, calorimetry, initial-rates rate law, EMF, Ksp). The current bank is heavy on definitions and light on multistep calculation, which is the actual AP exam shape.
4. **Resolve `apChemistry` vs `col-ap-chemistry` double-track** — same fix as AP Bio.
5. **Add `regions: ['US']`** to the track entry.
6. **Audit `organicChemistryWorkoutGenerated.ts`** — it exists at university tier but may contain rows usable as Chapter 5/7 extensions.

## Estimated effort

- DEFAULT_FLAW triage + delete: ~45 min
- FRQ/particulate authoring: ~4 hours (12 items × 20 min)
- Calculation gap-closing: ~3 hours (10 items × 18 min, including ICE tables, Hess cycles)
- Track-id consolidation: ~30 min

**~1 working day.** Headline: 60 high-quality Floe-native questions plus ~85 DEFAULT_FLAW imports — deletion plus targeted calculation authoring closes the gap.

## Notes for next auditor

Coverage is **definition-heavy, calculation-light**. The AP Chem exam shape is the opposite (~60% calculation, ~40% conceptual). The Floe-native files are good per-question but the bank as a whole over-rewards recall. The same imbalance is likely present in `apPhysics`.

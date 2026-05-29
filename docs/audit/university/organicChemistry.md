# Audit: organicChemistry

**Syllabus**: [`src/data/syllabi/university/organic_chemistry.md`](../../../src/data/syllabi/university/organic_chemistry.md)
**Track id**: `organicChemistry`
**Tier**: university
**Region**: Jurisdiction-neutral (OpenStax / LibreTexts / Master Organic Chemistry)

## Coverage map (syllabus to questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Structure, Bonding, Acid-Base Reasoning | Yes | Hybridization, sigma vs pi, formal charge, resonance contributor, pKa with EWG, Brønsted acid |
| 2. Nomenclature, Conformation, Stereochemistry | Yes | IUPAC alkane naming, chirality, R/S CIP, Newman, chair conformations, meso |
| 3. Reaction Energy and Mechanism Logic | Partial | Diels-Alder transition state; no formal energy-diagram / Hammond items |
| 4. Substitution and Elimination | Yes | Carbocation stability, SN2 inversion, Zaitsev, SN2 rate law, E2 anti-periplanar |
| 5. Alkenes, Alkynes, Radical Chemistry | Yes | Hydroboration-oxidation, E/Z, epoxidation, halogenation, terminal alkyne acidity, ozonolysis |
| 6. Aromaticity and Carbonyl Chemistry | Yes | Hückel 4n+2, EAS, ortho/para vs meta directors, Aldol, Fischer esterification, Grignard incompatibility |
| 7. Spectroscopy and Structure Determination | Yes | IR carbonyl 1700, IR OH 3300, NMR n+1, multiplicity, structure elucidation |
| 8. Synthesis Strategy and Laboratory Thinking | Yes | Retrosynthesis, chemoselectivity, synthesis sequence (1-bromobutane → 1-butyne) |

**This is the strongest coverage map in the cluster.** All eight syllabus chapters have meaningful representation across two wired files.

## Per-file recommendations

| File | OrgChem Q's | Bucket | Reason |
|---|---|---|---|
| [`universityAcademic.ts`](../../../src/data/questionCatalog/universityAcademic.ts) — organicChemistry section (ids 16301-16324, 16901-16910) | ~34 | **KEEP** | Hand-shaped: every wrong answer has its own `[answer, whyWrong, hint]` triple with real chemistry reasoning ("That is the (Z) isomer — Zusammen = together", "That would be Markovnikov addition", "NaOH would give an alcohol, not an alkyne"). No DEFAULT_FLAW pattern. Chapter labels ("Structure and Bonding", "Alkanes and Stereochemistry", "Spectroscopy", "Stretch Zone") are reasonable; consider relabeling "Stretch Zone" to the underlying syllabus chapter for searchability. |
| [`organicChemistryWorkoutGenerated.ts`](../../../src/data/questionCatalog/organicChemistryWorkoutGenerated.ts) | 50 | **KEEP** | **Verified surprisingly solid per May 2026 audit finding.** Uses the `miss(answer, why, hint)` triple helper — no DEFAULT_FLAW constant. Distractor explanations are specific and short ("Eclipsed has more torsional strain", "Chloride is a better leaving group than alkoxide", "Ortho/para directors stabilize σ-complex by donation"). Coverage spans the full syllabus systematically (52 items, ~6-7 per chapter). The lesson field references "OpenStax chemistry/organic chemistry adjacent rows plus Organic Chemistry course skill gaps" — honest source attribution. |

**No other files feed organicChemistry.** Both wired files are KEEP. **This is the cleanest track audited in the cluster.**

## Cross-cutting flags

- **No DEFAULT_FLAW** — neither file uses a templated explanation constant. Both manually author each wrong-answer explanation.
- **No region issues.** Universal chemistry.
- **Tone is sober and exam-appropriate** — no cute mascots, no goblin framing. Matches the difficulty register of pre-MCAT / pre-pharmacy work.
- **Chapter naming has some "Stretch Zone" buckets** — these are the harder items inherited from a generic difficulty-tier scheme. Consider renaming to the syllabus chapter for consistency with how genChem1 / genPhys1 / generalChemistry2 should be re-labeled.
- **Slight overlap** between the two files on a few topics (chirality, SN2 mechanism, NMR splitting). Acceptable spaced-repetition overlap, not duplicative.

## Open actions (priority order)

1. **Relabel "Stretch Zone" chapters** in the universityAcademic.ts organicChemistry section to the underlying syllabus chapter (so coverage analytics can roll up properly).
2. **Add 3-4 reaction-energy / Hammond postulate items** to close the only thin spot (Chapter 3).
3. **Add 2-3 radical halogenation / allylic substitution items** — Chapter 5 mentions these but they're not represented in either bank.
4. **Maintenance note**: when adding new items, follow the existing per-distractor pattern. **Do not regress to DEFAULT_FLAW.**
5. **Consider promoting `organicChemistryWorkoutGenerated.ts` as the cluster reference** — its `miss()` triple shape is exactly the model the cluster's broken files (genChem1, genBio1, anatomyAndPhysiology, etc.) should imitate.

## Estimated effort

- Chapter relabeling: ~30 min
- 5-7 new questions for Ch 3 and Ch 5 gaps: ~2-3 hours
- Total: ~half a working day

## Notes for next auditor

`organicChemistry` is the **gold-standard track** in the science cluster. After-Effects: when the cluster pruning wave runs, this track should be a reference example for what KEEP-quality content looks like under syllabus-driven coverage. The workout-generated file's `miss()` helper signature is the right pattern to spread to the other workout-generated files. The May 2026 "surprisingly solid" finding is confirmed.

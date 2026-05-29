# Audit: neuroscience

**Syllabus**: [`src/data/syllabi/university/neuroscience.md`](../../../src/data/syllabi/university/neuroscience.md)
**Track id**: `neuroscience`
**Tier**: university
**Region**: Jurisdiction-neutral (OpenStax, BrainFacts.org, SfN, NINDS)

## Coverage map (syllabus to questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Neural Cells, Neuroanatomy, Organization | Yes | Neuron parts, glial types, brain lobes, regions (hippocampus, amygdala, thalamus, hypothalamus, brainstem, cerebellum) |
| 2. Membranes, Ion Channels, Electrical Signaling | Yes | Resting potential sign, Na+/K+ pump stoichiometry, Nernst at body temp, myelin saltatory, refractory period |
| 3. Synapses, Neurotransmitters, Neuropharmacology | Yes | SNARE, Ca2+ trigger, ionotropic vs metabotropic, glutamate/GABA/dopamine/serotonin/ACh, agonist vs antagonist |
| 4. Sensory Systems and Perception | Partial | Photoreceptor dark depolarization, hair cell mechanotransduction; no auditory tonotopy / receptive field items |
| 5. Motor Systems, Autonomic Control, Homeostasis | Partial | Basal ganglia direct vs indirect, cerebellum ataxia, sympathetic/parasympathetic; no central pattern generator |
| 6. Plasticity, Learning, Memory, Development | Yes | LTP via AMPA insertion, NMDA coincidence detection, Hebbian, axon guidance via netrins/semaphorins |
| 7. Cognition, Emotion, Language, Social | Partial | Broca vs Wernicke aphasia, homunculus organization; no attention / executive function / reward items |
| 8. Methods, Disorders, Translational | Yes | MRI vs EEG vs fMRI vs PET, Parkinson's substantia nigra, MS demyelination, stroke vascular |

## Per-file recommendations

| File | Neuro Q's | Bucket | Reason |
|---|---|---|---|
| [`universityAcademic.ts`](../../../src/data/questionCatalog/universityAcademic.ts) — neuroscience section (ids 16401-16424, 17001-17010) | ~34 | **KEEP** | Hand-shaped per-distractor triples with real neuroscience reasoning ("Metabotropic receptors use G-proteins and second messengers, making them slower", "Magnesium ion literally plugs the pore at resting potential"). Strong mnemonics in the hint field ("Broca = Broken speech", "Saltare means 'to jump'", "Direct = Go; Indirect = No-go"). Chapter labels ("Neuroanatomy", "Synaptic Transmission", "Neurophysiology", "Cognitive Neuroscience") match the syllabus structure. Some "Neuroscience Cove / Lagoon / Reef / Dock" intro items (16401-16404) feel out of register vs the rest. |
| [`neuroscienceWorkoutGenerated.ts`](../../../src/data/questionCatalog/neuroscienceWorkoutGenerated.ts) | 50 | **KEEP** | **Verified surprisingly solid per May 2026 audit finding.** Uses `miss()` triple helper — no DEFAULT_FLAW. Per-distractor explanations are specific ("Oligodendrocytes make myelin in CNS", "Antagonists block or reduce effects", "Hebbian learning depends on correlated activity"). Coverage is systematic across neuron structure → action potentials → synapses → neurotransmitters → CNS/PNS → brain regions → lobes → language → methods → plasticity → sensation → clinical. Solid pedagogy throughout. |

**No other files feed neuroscience.** Both wired files are KEEP.

## Cross-cutting flags

- **No DEFAULT_FLAW** — both files manually author every wrong-answer explanation.
- **Tone is generally sober** with some early-chapter playful titles ("Cove", "Lagoon", "Dock", "Reef") that feel like a different course's voice. These first four items per-bucket should be retitled.
- **Chapter labels are well-aligned** to the syllabus chapter structure.
- **No region issues.** Universal neuroscience.
- **No `lastReviewed`** — fine, this isn't regulation-adjacent. Could be useful if drug-mechanism items expand (e.g. SSRI, benzo) since pharmacology updates over time.

## Open actions (priority order)

1. **Retitle the four "Neuroscience Dock / Reef / Cove / Lagoon" items** (ids 16401-16404) to plain syllabus-chapter titles. Inherited naming from a beachy theme that doesn't fit the rest of the bank.
2. **Add 3-4 attention / executive function / reward items** for Chapter 7 — prefrontal cortex tasks, dopamine reward prediction error, working memory.
3. **Add 2-3 sensory-systems items** for Chapter 4 — auditory tonotopy, somatosensory receptive fields, olfactory coding.
4. **Maintenance note**: when adding new items, follow the existing per-distractor pattern. Both authoring shapes (universityAcademic's inline triples and the workout-generated `miss()` helper) are equally good; pick whichever fits the file location.
5. **Consider promoting this track as a reference example** alongside `organicChemistry` for what KEEP-quality science content looks like.

## Estimated effort

- Retitling: ~15 min
- 5-7 new items: ~2-3 hours
- Total: ~half a working day

## Notes for next auditor

`neuroscience` is one of the **strongest tracks** in the science cluster. After-Effects: the two wired files together yield ~84 questions covering nearly all eight syllabus chapters with real per-distractor explanations. Pair this audit with `organicChemistry` and `cosmologyAndAstronomy` as the cluster's "KEEP" reference set. The May 2026 finding that `neuroscienceWorkoutGenerated.ts` is "surprisingly solid" is confirmed.

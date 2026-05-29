# Audit: genBio1

**Syllabus**: [`src/data/syllabi/university/general_biology_1.md`](../../../src/data/syllabi/university/general_biology_1.md)
**Track id**: `genBio1`
**Tier**: university
**Region**: Jurisdiction-neutral (OpenStax / Vision and Change / HHMI-aligned)

## Coverage map (syllabus to questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Biology as Evidence, Chemistry, and Scale | Partial | Water cohesion / polarity item; no experimental-control or pH/buffer Qs |
| 2. Macromolecules and Structure-Function | Partial | Dehydration synthesis, pH-induced denaturation; no nucleic-acid item |
| 3. Cells, Organelles, and Membranes | Partial | Golgi, hypertonic osmosis, fluid mosaic; no micrograph/prokaryote item |
| 4. Energy, Enzymes, and Metabolism | Yes | ATP, enzyme catalysis, competitive inhibition, ATP-coupling, proton-gradient |
| 5. Cellular Respiration and Photosynthesis | Partial | Calvin cycle ATP/NADPH dependence; no glycolysis / ETC trace |
| 6. Cell Cycle, Mitosis, and Meiosis | Partial | Mitosis (cat scratch repair); no checkpoint / cancer / nondisjunction items |
| 7. Mendelian Genetics and Molecular Inheritance | Yes | Pp x Pp ratio, DNA replication, central dogma, crossing-over and assortment |
| 8. Biotechnology, Lab Skills, and Biology Studio | Partial | PCR/gel interpretation; no sequencing/BLAST/CRISPR, no biosafety |

Chapter labels in questions use grouped tags ("Molecules and Cells", "Energy and Enzymes", "Photosynthesis", "Genetics", "Genetics Lab") that compress the eight-chapter syllabus into five buckets. Acceptable but the syllabus structure should win the mapping.

## Per-file recommendations

| File | genBio1 Q's | Bucket | Reason |
|---|---|---|---|
| [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts) (genBio1 section, ids 3100000-3100017) | 18 | **FIX** | Content is correct (Calvin-cycle dependence on ATP/NADPH, 1/4 white offspring from Pp x Pp, gel-band-size logic). **DEFAULT_FLAW applied to every wrong answer** via the file-level `q()` helper. Per-distractor rewrite required. Then close Ch 5 (glycolysis/ETC trace) and Ch 6 (checkpoint/cancer) gaps. |

No other files feed genBio1.

## Cross-cutting flags

- **DEFAULT_FLAW** — confirmed.
- **Tone is mostly acceptable** — "water bead gossip", "cell cafe shipping desk", "salty red cell drama", "Calvin cycle lunch money", "purple pea odds" are evocative without being silly. Closer to the right register than genChem1/genPhys1.
- **No region issues.** Universal biology content.
- **Chapter compression** — five labels for eight syllabus chapters means the syllabus-to-question mapping needs explicit work. Worth aligning chapter strings to the syllabus headings before the per-distractor rewrite (it's an easy global find-replace).
- **Lab/biotech is one item.** Chapter 8 of the syllabus calls for microscopy, pipetting, dilutions, sterile technique, gel electrophoresis, PCR, sequencing, CRISPR, BLAST, biosafety. Only PCR/gel is covered.

## Open actions (priority order)

1. **Per-distractor rewrite of 18 existing Qs** — name the misconception each wrong answer encodes (e.g. for the gel-band Q: "Larger fragments migrate less, not more — they appear closer to the well/higher band").
2. **Align chapter labels to the eight syllabus chapters** — global rename in the genBio1 section. Trivial diff, makes coverage gaps measurable.
3. **Author Chapter 5 trace items** — glycolysis end-products, ETC complex IV, fermentation lactate vs ethanol, C3 vs C4 vs CAM. ~5 questions.
4. **Author Chapter 6 cell-cycle items** — cyclin/CDK checkpoint logic, cancer as checkpoint failure, nondisjunction → trisomy. ~4 questions.
5. **Add Chapter 8 biotech breadth** — sequencing/Sanger logic, CRISPR guide-RNA target, BLAST e-value interpretation, BSL-1 vs BSL-2 distinction. ~4 questions.

## Estimated effort

- Per-distractor rewrite + chapter rename: ~3.5 hours
- ~13 new Qs across Ch 5, 6, 8: ~5 hours
- Total: ~1 working day

## Notes for next auditor

genBio1 is the **second-best content track** in the agent-generated cluster (after generalPhysics2) and the **best on tone calibration**. It's a useful reference for what the rest of the cluster should sound like once the cute-tone problem is dialed down. The Calvin-cycle and ATP-coupling questions are particularly strong — they actually test causal reasoning rather than memorization. The genBio1/generalBiology2 split mirrors the genPhys1/generalPhysics2 split: pair the audits when planning the rewrite wave.

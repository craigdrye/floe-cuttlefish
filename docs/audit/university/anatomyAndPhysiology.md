# Audit: anatomyAndPhysiology

**Syllabus**: [`src/data/syllabi/university/anatomy_and_physiology.md`](../../../src/data/syllabi/university/anatomy_and_physiology.md)
**Track id**: `anatomyAndPhysiology`
**Tier**: university
**Region**: Jurisdiction-neutral (OpenStax A&P; clinical reference is MedlinePlus / NIH-aligned)

## Coverage map (syllabus to questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Anatomical Language, Tissues, Homeostasis | Yes | Proximal vs distal, epithelial vs connective vs nervous, body planes/cavities |
| 2. Integumentary and Skeletal Systems | Missing | None observed |
| 3. Muscles, Movement, Biomechanics | Yes | Sarcomere sliding-filament, A/I band logic, neuromuscular ACh blockade |
| 4. Nervous System and Sensory Integration | Partial | Resting potential sign, voltage-gated Na+ blockade; no sensory pathway items |
| 5. Endocrine Control and Blood | Partial | ADH urine concentration; no thyroid/insulin/CBC items |
| 6. Cardiovascular and Respiratory Systems | Yes | SA node, cardiac cycle valves, ECG conduction delay |
| 7. Lymphatic, Immune, Digestive, Metabolic | Missing | None observed |
| 8. Urinary, Reproductive, Fluid Balance, Integration | Partial | Glucose reabsorption, ADH, acid-base via H+/bicarbonate; no reproductive items |

Chapter labels in the questions ("Anatomy & Physiology: Directional Terms", "Sliding Filament Model", "Cardiac Conduction") are descriptive but don't roll up cleanly to the eight syllabus chapters. Coverage is uneven: muscles/cardio are well represented, integument/skeletal and lymph/immune/digestive are absent.

## Per-file recommendations

| File | A&P Q's | Bucket | Reason |
|---|---|---|---|
| [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts) (anatomyAndPhysiology section, ids 3109000-3109017) | 18 | **FIX** | Content is clinically correct (ACh blockade prevents muscle AP, ADH concentrates urine, SA node as pacemaker, AV delay between P and QRS). **DEFAULT_FLAW for every wrong answer** via the file-level `q()` helper. Per-distractor rewrite required. Then close skeletal, immune/digestive, and reproductive gaps. |

No other files wire to anatomyAndPhysiology.

## Cross-cutting flags

- **DEFAULT_FLAW** — confirmed.
- **Tone is mixed.** "Alien doctor", "tile-floor tissue", "magician front-back slice", "thick-filament trophy", "toothpaste ventricles" lean playful for a course that doubles as pre-nursing / pre-med prep. The clinical reasoning ("late ventricular memo" → AV node delay) is actually sharp; tone shouldn't undercut that. Compare register with `universityPrep.ts` MCAT items.
- **Clinical content is correct but uncited.** The ADH, ECG, and nephron reabsorption explanations are textbook-accurate. For an A&P track that may be used by pre-clinical students, consider adding a `source:` field referencing OpenStax A&P or MedlinePlus per the `CONTENT_AUDIT.md` quality bar.
- **No region issues** (clinical norms are universal; no jurisdiction-specific dosing or guidelines).
- **`lastReviewed` metadata** — not strictly required (this isn't regulation-adjacent), but for pre-clinical content it would be a defensible add.

## Open actions (priority order)

1. **Per-distractor rewrite of 18 existing Qs** — name the misconception each wrong answer encodes (e.g. for ACh receptor blockade: "Myosin detachment requires ATP, not ACh receptor binding — that's a different drug class").
2. **Author Chapter 2 (integument/skeletal) items** — bone matrix cell types (osteoblast/cyte/clast), joint classification, fracture-healing stages. ~5 questions.
3. **Author Chapter 7 (lymph/immune/digestive) items** — innate vs adaptive, B vs T cell, GI enzyme location, liver functions. ~6 questions.
4. **Add reproductive Qs** to Chapter 8 — gametogenesis, ovarian/menstrual cycle hormones.
5. **Consider adding `source:` and `lastReviewed:` metadata** for the clinical items if the schema supports it.

## Estimated effort

- Per-distractor rewrite: ~3 hours
- ~15 new questions across Ch 2, 7, 8: ~5 hours
- Total: ~1 working day

## Notes for next auditor

A&P is one of the most-requested courses in pre-health prep and is referenced by the `mcat` track as adjacent content. After the rewrite, consider whether some A&P items should be cross-wired into the MCAT track (specifically the cardiovascular/respiratory and nephron items, which appear in the Biological Foundations section of the exam). Coordinate with the MCAT audit before duplicating content.

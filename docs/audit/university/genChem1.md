# Audit: genChem1

**Syllabus**: [`src/data/syllabi/university/general_chemistry_1.md`](../../../src/data/syllabi/university/general_chemistry_1.md)
**Track id**: `genChem1`
**Tier**: university
**Region**: Jurisdiction-neutral (SI units, OpenStax/ACS-aligned)

## Coverage map (syllabus to questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Matter, Measurement, and the Mole | Partial | Density, moles, Avogadro, empirical formula — present but thin |
| 2. Atomic Structure and Periodic Trends | Partial | One ionization-trend Q, one quantum numbers Q |
| 3. Bonding, Lewis Structures, and Molecular Shape | Partial | CO2 geometry, NH4+ electron count — no resonance/formal charge |
| 4. Intermolecular Forces and Properties | Missing | Zero IMF, boiling-point ranking, or solubility questions |
| 5. Stoichiometry and Aqueous Reactions | Partial | Limiting reactant, AgCl net ionic, titration mole calc |
| 6. Gases and Gas Stoichiometry | Yes | Ideal gas, partial pressure, effusion |
| 7. Thermochemistry | Partial | Heat sign convention, q = mcΔT — no Hess's law |
| 8. Solutions, Colligative Properties, Lab Studio | Partial | van't Hoff factor; no titration curves, no lab-procedure items |

The chapter naming inside questions ("General Chemistry I: Solutions", "General Chemistry I: Gases") roughly tracks the syllabus but compresses Chapter 3 (Bonding) and Chapter 4 (IMF) into a single "Bonding" bucket. IMF is effectively absent.

## Per-file recommendations

| File | genChem1 Q's | Bucket | Reason |
|---|---|---|---|
| [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts) (genChem1 section, ids 3101000-3101017) | 18 | **FIX** | Calculations are accurate and the lesson lines are real chemistry. **Fatal flaw: every wrong answer uses the file-wide `DEFAULT_FLAW` constant** ("This is a plausible distractor, but it does not match the scenario or syllabus concept"). The `q()` helper at line 7 hard-codes this for all distractors in the file — nothing in genChem1 escapes it. Per-distractor rewrite required. Also close the IMF gap (Chapter 4) and add Hess's law (Chapter 7) while reworking. |

**No other files wire to genChem1.** No exam batches, no workout-generated, no OpenStax. 18 questions across 8 syllabus chapters is genuinely thin for a freshman gateway course.

## Cross-cutting flags

- **DEFAULT_FLAW** — confirmed; the `q()` wrapper (line 7-28) injects the same string for every wrong answer. This is the same antipattern called out in `CONTENT_AUDIT.md` and matches the VC roadmap finding.
- **Tone mismatch.** Many questions lean cute ("salty molarity cup", "molecule goblin scaling", "tiny chemistry parade") for a course whose syllabus aim is "use units as a guardrail rather than decoration." Acceptable for warm-up; the sober tone should dominate per-chapter assessment. Compare with the hand-authored register in `universityPrep.ts`.
- **No region issues.** SI units throughout; ACS/OpenStax sources are international.
- **No `lastReviewed` metadata** — fine, this isn't regulation-adjacent.

## Open actions (priority order)

1. **Rewrite the 18 distractor sets per-question** — replace `DEFAULT_FLAW` with explanations that name the misconception (e.g. for empirical formula: "C2H4O2 is the molecular formula scaled by 2, not the simplest ratio"). This is the single highest-leverage fix.
2. **Add ~8 IMF questions** (Chapter 4) — boiling-point ranking, H-bonding vs dispersion, solubility predictions. Voice template: `universityPrep.ts`.
3. **Add Hess's law and bond-energy estimation** (Chapter 7).
4. **Add Lewis structure / formal charge / resonance items** (Chapter 3) — currently only 2 bonding Qs.
5. **Sober the chapter labels** — drop "Dock/Reef/Cove/Lagoon"-style decorative names if any are inherited; use the syllabus chapter titles.

## Estimated effort

- Per-distractor rewrite of 18 existing Qs: ~3 hours
- Author ~15 new Qs to close IMF + Hess + Lewis gaps: ~5 hours
- Total: ~1 working day

## Notes for next auditor

The `universityAgentGenerated.ts` file holds **eight** tracks (mcat, englishComposition101, generalPhysics2, generalBiology2, lsat, anatomyAndPhysiology, generalChemistry2, electricalEngineering, eurekaMathPrecalculus, genBio1, genChem1, genPhys1, introToSociology, financialAccounting). All share the same `q()` helper and the same `DEFAULT_FLAW` constant. **One file-level fix — replacing the helper signature to accept per-distractor explanations — unlocks consistency for the entire cluster.** Audit those tracks expecting the same finding.

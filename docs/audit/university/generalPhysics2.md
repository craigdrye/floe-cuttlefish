# Audit: generalPhysics2

**Syllabus**: [`src/data/syllabi/university/general_physics_2.md`](../../../src/data/syllabi/university/general_physics_2.md)
**Track id**: `generalPhysics2`
**Tier**: university
**Region**: Jurisdiction-neutral (SI units, OpenStax/AAPT-aligned)

## Coverage map (syllabus to questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Electric Charge, Fields, and Potential | Yes | Midpoint field/potential, dipole field, single-charge field direction |
| 2. Capacitance, Current, DC Circuits | Yes | Ohm's law power, RC time constant, capacitor energy, series-parallel total |
| 3. Magnetic Fields and Magnetic Forces | Partial | Lorentz crossed-field cancellation; no Ampere's law, no force-on-wire |
| 4. Electromagnetic Induction and AC | Partial | Lenz approach, motional EMF, LC resonance frequency; no transformer, no RMS |
| 5. EM Waves and Geometric Optics | Partial | Refraction at glass, lens image distance, TIR critical angle; no mirror items |
| 6. Interference, Diffraction, Physical Optics | Partial | Young's double-slit fringe spacing; no diffraction grating, no polarization |
| 7. Relativity and Quantum Foundations | Partial | Photoelectric (frequency vs intensity), de Broglie λ — no time dilation |
| 8. Modern Physics and E&M Lab Studio | Missing | No atomic spectra, no decay/half-life, no lab/data-fit items |

Coverage is broader and more even than genPhys1. The chapter labels ("General Physics 2: Electric Fields", "General Physics 2: RC Circuits", "General Physics 2: Lenses") track the syllabus well and the calculation difficulty is appropriate for second-semester physics.

## Per-file recommendations

| File | gPhys2 Q's | Bucket | Reason |
|---|---|---|---|
| [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts) (generalPhysics2 section, ids 3106000-3106017) | 18 | **FIX** | Content is the strongest in the agent-generated cluster: the calculations are right, the worked numbers are realistic (RC = 1.0 s, fringe spacing 6 mm, de Broglie 0.1 nm for 150 V electron), and the `lesson` lines actually explain the physics. **DEFAULT_FLAW for every wrong answer** is the only blocking issue. Per-distractor rewrite required. Then add Chapter 8 (modern physics / decay) plus the missing diffraction-grating and transformer items. |

No other files feed generalPhysics2.

## Cross-cutting flags

- **DEFAULT_FLAW** — confirmed; same `q()` helper as the rest of `universityAgentGenerated.ts`. The most painful instance in this cluster because the underlying content is the best.
- **Tone whiplash.** "Crispy bagel toaster", "dust bunny dipole", "camera flash goblin", "tiny rail-cart" sit next to genuinely sober physics setups. Bagel toaster is fine; "lightning goblin" framing should not be the default voice for E&M.
- **Chapter naming is good.** "General Physics 2: RC Circuits" / "Lorentz Force" / "Refraction" match the syllabus closely — better alignment than most courses in the cluster.
- **No region issues.** SI units throughout.

## Open actions (priority order)

1. **Per-distractor rewrite of 18 existing Qs.** This is the single highest-leverage action in the cluster: the underlying content is solid; only the explanations are templated. For each wrong answer name the specific physics error (e.g. for the photoelectric Q: "Increasing intensity adds more photons but doesn't change individual photon energy — frequency threshold still applies").
2. **Add Chapter 8 items** — radioactive decay/half-life math, atomic spectra emission lines, fission/fusion energetics. ~6 questions.
3. **Add diffraction grating wavelength calculation** (Ch 6) and **transformer voltage/current ratio** (Ch 4) — these are exam-frequency topics currently uncovered.
4. **Add at least one time-dilation / length-contraction numeric** (Ch 7) — relativity is currently only represented by photoelectric/de Broglie items.
5. **Sober the question titles for the bulk of items** — keep playful framing for ≤30% of the bank.

## Estimated effort

- Per-distractor rewrite: ~3 hours
- ~10 new Qs to close Ch 6/7/8 gaps: ~4 hours
- Total: ~1 working day

## Notes for next auditor

generalPhysics2 is the **best-content track** in this cluster despite sharing the DEFAULT_FLAW antipattern. After the per-distractor rewrite, this is the model the agent-generated genChem1/genBio1/anatomyAndPhysiology rewrites should imitate. Worth prioritizing this rewrite first to establish a reference for the rest of the file's tracks.

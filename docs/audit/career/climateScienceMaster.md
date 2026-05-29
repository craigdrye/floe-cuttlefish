# Audit: climateScienceMaster

**Syllabus**: [`src/data/syllabi/career/climate_science_master.md`](../../../src/data/syllabi/career/climate_science_master.md)
**Track id**: `climateScienceMaster`
**Tier**: career (ageGroup `nerd`)
**Region**: jurisdiction-neutral (some adaptation/policy examples are US-tinted)
**Status**: `playable` — has questions wired

## Coverage map (syllabus → questions)

The syllabus is unusually ambitious — 11 expert chapters spanning dynamical cores, radiative transfer, cloud parameterization, ocean/cryosphere, data assimilation, attribution, ensembles, numerics, extremes, and integrated assessment. The expectation is "challenge senior climate scientists, model developers, attribution researchers."

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Dynamical Core and Geophysical Fluid Dynamics | ❌ | **No questions.** Real gap — primitive equations, PV inversion, Rossby waves, baroclinic instability, jet maintenance. |
| 2. Radiative Transfer and Forcing Diagnostics | ⚠️ | One-line ERF/feedback decomposition framing in topoff; no kernel/correlated-k/forcing-feedback rigour. |
| 3. Clouds, Convection, BL Parameterization | ❌ | **No questions.** Convection closures, low-cloud feedback, superparameterization — all missing. |
| 4. Ocean, Cryosphere, Coupled Dynamics | ✅ | Strongest area — mixed-layer depth, mode waters, AMOC freshwater, sea-ice albedo all in `career.ts` |
| 5. Land Surface, Biosphere, Carbon Cycle | ⚠️ | One "sink saturation" question in topoff; no Revelle factor, no TCRE, no permafrost carbon detail |
| 6. Data Assimilation, Observations, Reanalysis | ❌ | **No questions.** 4D-Var, EnKF, reanalysis discontinuities, Argo bias — missing |
| 7. Detection, Attribution, Causal Inference | ⚠️ | "Signal vs noise" framing only; no optimal fingerprinting, fraction of attributable risk, storyline vs probabilistic |
| 8. Model Ensembles, Uncertainty, Evaluation | ⚠️ | Ensemble spread question is too easy; no model genealogy, weighting, emergent constraints |
| 9. Numerical Methods and HPM | ❌ | **No questions.** CFL, conservation, ML parameterizations — missing |
| 10. Extremes, Risk, Tails | ⚠️ | One rainfall-intensity question; no EVT, no compound extremes |
| 11. Scenarios, Mitigation, Integrated Assessment | ⚠️ | One CO2e horizon question; no SSP architecture, IAM damage functions, geoengineering |

**The syllabus says "beyond basic PhD recall, multi-step reasoning across physics/numerics/observations/uncertainty."** The wired questions are mostly literacy-level — they would not challenge a senior climate scientist. There is a serious tonal mismatch.

## Per-file recommendations

| File | climateScienceMaster Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) `climateScienceMaster` block (lines 1518+) | ~10+ | **KEEP** | Hand-authored, multi-paragraph, per-distractor explanations, expert-level (mixed-layer heat capacity, mode-water ventilation, AMOC freshwater). This is the only content that meets the syllabus's "expert seminar" bar. |
| [`careerAgentGeneratedClimateScienceTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedClimateScienceTopOff.ts) | 14 | **FIX or DELETE** | Every distractor uses `DEFAULT_FLAW`. Worse, the questions are climate-literacy difficulty (single-step reasoning, cartoonish distractors like "Whether the spreadsheet title is green") that directly **violate the syllabus's "Reject If" rules** ("denialist caricatures rather than plausible expert mistakes"). Either rewrite to expert level or DELETE — these would alienate the target audience. |
| [`careerAgentGeneratedCareerSkillsPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerSkillsPolish.ts) `climateScienceMaster` block (lines 141–162) | 4 | **DELETE** | Front-door climate-literacy ("heatwave attribution", "ice-albedo feedback") — wrong audience for a Beyond-PhD course. `DEFAULT_FLAW` throughout. |

**Net effect**: 28 generated questions → 10 expert-grade hand-authored kept + DELETE the literacy banks + need ~30–50 new expert questions to even start filling Chapters 1, 3, 6, 9.

## Open actions (priority order)

1. **Resolve the audience mismatch.** The syllabus targets senior researchers; ~18 of 28 wired questions are climate-literacy difficulty. Either (a) downgrade syllabus ambition to "informed reader" (and re-tag `ageGroup`), or (b) commit to expert authoring and DELETE the literacy topoff/polish content.
2. **DELETE the `careerAgentGeneratedCareerSkillsPolish.ts` climate block.** Wrong tier; `DEFAULT_FLAW`; duplicates basics.
3. **FIX or DELETE the ClimateScienceTopOff bank.** Per the syllabus's own "Reject If" rules, several questions (aerosol mask, weather-claim jump) qualify for rejection because the distractors are caricatures, not plausible expert mistakes.
4. **Close Chapters 1, 3, 6, 9 gaps if continuing as expert track** — author 20–30 expert-grade questions on dynamics, clouds, data assimilation, numerics. Each needs multi-step reasoning and at least two near-miss distractors per syllabus rule.
5. **No region tag needed** — climate physics is jurisdiction-neutral. But flag the Chapter 11 adaptation examples (heat AC subsidy, coastal seawall) for US bias if launch market diverges.
6. **Note**: `ageGroup: 'nerd'` not `'career'` — this is a long-tail enthusiast track, not a credential. Investment decision should reflect that.

## Estimated effort

- If keeping as expert track: 20–30 hours of expert-grade authoring (specialist; not a generalist task)
- If downgrading to informed-reader: ~6 hours rewriting topoff `DEFAULT_FLAW` and pruning
- DELETE pass: ~30 min

**Wide range: 1–4 working days** depending on whether the syllabus's "Beyond PhD" ambition is real or aspirational.

## Notes for next auditor

This is the clearest mismatch between syllabus ambition and wired content in the niche cluster. The hand-authored expert questions are gold; the generated content is at completely the wrong difficulty. Recommend descoping unless Floe has access to specialist climate authoring. No other track in this cluster has the same kind of literacy/expert split.

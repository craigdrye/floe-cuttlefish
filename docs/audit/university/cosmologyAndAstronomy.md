# Audit: cosmologyAndAstronomy

**Syllabus**: [`src/data/syllabi/university/cosmology_and_astronomy.md`](../../../src/data/syllabi/university/cosmology_and_astronomy.md)
**Track id**: `cosmologyAndAstronomy`
**Tier**: university
**Region**: Jurisdiction-neutral (OpenStax Astronomy 2e, NASA, ESA, LIGO)

## Coverage map (syllabus to questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Observing the Sky and Measuring the Universe | Yes | Light-year, AU, parallax, apparent brightness, telescope role, radio astronomy |
| 2. Celestial Mechanics and Gravity | Yes | Kepler's three laws, gravity vs inertia, tides, Newton's contribution |
| 3. Stars, Fusion, and Stellar Evolution | Yes | Main sequence, H-R diagram, red giant, white dwarf, supernova, neutron star |
| 4. Galaxies and Large-Scale Structure | Yes | Galaxy definition, Milky Way, spiral vs elliptical, dark matter inferred from gravity |
| 5. Relativity, Black Holes, Gravitational Waves | Missing | None observed — no Schwarzschild, no event horizon, no LIGO/lensing item |
| 6. Big Bang Cosmology and the Early Universe | Yes | Big Bang model, CMB, redshift, Hubble's law, lookback time |
| 7. Dark Matter, Dark Energy, Cosmic Fate | Partial | Dark matter inference, dark energy as accelerating expansion; no critical density / Friedmann |
| 8. Frontiers, Uncertainty, Scientific Communication | Missing | No claim-critique / model-uncertainty items |

Chapter 5 (relativity/black holes) is the most prominent gap. The remaining coverage is strong and well-distributed.

## Per-file recommendations

| File | Cosmo Q's | Bucket | Reason |
|---|---|---|---|
| [`cosmologyAstronomyWorkoutGenerated.ts`](../../../src/data/questionCatalog/cosmologyAstronomyWorkoutGenerated.ts) | 50 | **KEEP** | **Verified surprisingly solid per May 2026 audit finding.** Uses `miss(answer, why, hint)` triples — no DEFAULT_FLAW. Distractor explanations are specific and astronomy-correct ("Light-year includes 'year' but measures distance light travels in a year", "Lunar eclipse is Earth shadow on Moon; solar eclipse is Moon shadow on Earth"). Coverage spans observing → solar system → moon → stars → galaxies → cosmology → tools → history → small bodies → habitability. Source attribution honest ("OpenTriviaQA astronomy rows plus cosmology and astronomy skill gaps"). |
| [`cosmologyAstronomyExamBatch2.ts`](../../../src/data/questionCatalog/cosmologyAstronomyExamBatch2.ts) | ~50 | **FIX** | Same `miss()` triple shape — per-distractor explanations are real ("Neptune is associated with the sea", "Charon orbits Pluto, not Earth"). Sourced from OpenTriviaQA science-technology rows; mostly solar-system trivia (Pluto orbit, Mars name, Charon, Uranian moons). **Too trivia-flavored for an upper-division astronomy course** — too many "X is named after the Roman god of Y" items, not enough conceptual reasoning. Cull / rewrite the trivia items; keep the orbital-mechanics, planetary-science, and habitability ones. |
| [`openTriviaAstronomyQuestions`](../../../src/data/questionCatalog/openTriviaScienceMicroImported.ts) (wired via universityAcademic.ts line 343) | small | **DELETE** | Generic distractor flaw ("This option does not match the astronomy clue in the prompt") repeated for every wrong answer across the file — a classic DEFAULT_FLAW pattern. |
| [`openTriviaAstronomyExtensionQuestions`](../../../src/data/questionCatalog/openTriviaAstronomyExtensionImported.ts) (wired line 344) | ~150 | **DELETE** | Identical DEFAULT_FLAW pattern ("This option does not match the astronomy clue in the prompt. Anchor the answer to Moon phases, planets, stars, spacecraft, or Solar System structure"). 150+ items with no real per-distractor reasoning. Net negative for the bank quality. |

## Cross-cutting flags

- **DEFAULT_FLAW** — present in the two `openTrivia*` imports; **absent** from both `cosmologyAstronomyWorkoutGenerated.ts` and `cosmologyAstronomyExamBatch2.ts`.
- **No region issues.** Universal astronomy.
- **Tone is sober** in the workout-generated and exam batch files. No cute mascots — appropriate for a senior-year course.
- **OpenTrivia astronomy extension is the largest single content drag** — 150+ items with templated explanations diluting the bank.
- **Chapter 5 gap is notable** — Schwarzschild radius, event horizon, gravitational lensing, LIGO merger signals are all in the syllabus and entirely uncovered.

## Open actions (priority order)

1. **Delete the two openTrivia astronomy imports from `universityAcademic.ts`** (lines 343-344). The workout-generated and exam-batch files already cover the same ground with real explanations. (Flag for next consolidation wave; source edits out of scope here.)
2. **Cull the trivia-heavy items** in `cosmologyAstronomyExamBatch2.ts` (Roman-god mythology, satellite-trivia naming). Keep the orbital-mechanics, planetary-science, and habitability items.
3. **Author Chapter 5 items** — Schwarzschild radius calculation, event-horizon definition, gravitational-wave merger signal interpretation, gravitational lensing of distant galaxies. ~5 questions.
4. **Add Chapter 7 quantitative items** — critical density Ω, Friedmann equation intuition, supernova-distance-vs-redshift evidence for dark energy. ~3 questions.
5. **Add a "claim critique" item or two for Chapter 8** — distinguish established evidence from speculation (multiverse, string theory, parameter estimation).

## Estimated effort

- Wiring cleanup + exam batch culling: ~2 hours
- ~10 new questions for Ch 5, 7, 8: ~4 hours
- Total: ~1 working day

## Notes for next auditor

The May 2026 finding holds: `cosmologyAstronomyWorkoutGenerated.ts` is one of the best workout-generated files in the catalog. It's the only one in this cluster that achieves near-full syllabus coverage with per-distractor explanations and a sober register. Use it as a reference when judging the rest of the science workout-generated files. The largest cut opportunity here is the openTrivia astronomy extension — pure DEFAULT_FLAW filler that nothing of value depends on.

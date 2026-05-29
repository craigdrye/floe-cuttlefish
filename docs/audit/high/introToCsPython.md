# Audit: introToCsPython

**Syllabus**: [`src/data/syllabi/high/intro_to_cs_python.md`](../../../src/data/syllabi/high/intro_to_cs_python.md)
**Track id**: `col-intro-to-cs---python` (per age catalog line 2005; note triple-hyphen artefact from slugifier)
**Tier**: high (year 10)
**Region**: not jurisdiction-specific

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Computing, Python, and the Programming Loop | ⚠️ | Generator computing blueprints touch on errors and program-anatomy generically |
| 2. Variables, Types, and Input | ⚠️ | Generic Boolean/variable items in generator; no Python-specific type-coercion items |
| 3. Conditions and Boolean Logic | ⚠️ | Generic if/else surface coverage |
| 4. Loops and Program Tracing | ⚠️ | Loop blueprints exist but produce templated content |
| 5. Functions and Decomposition | ❌ | No items on `print` vs `return`, scope, parameters |
| 6. Strings, Lists, Dictionaries, Data Patterns | ❌ | No Python list/dict items in this track's bundle |
| 7. Files, APIs, Debugging, Testing | ❌ | No items on file I/O, exceptions, JSON, unit tests |
| 8. Simple Algorithms and Project Studio | ❌ | No Python-flavored search/min-max items |

**Routing problem.** Track id `col-intro-to-cs---python` (note the triple-hyphen — `slugifyTrackId` turned " - " into `---`) is not in `highMath/Advanced/Fun` sets → falls through to `high-generated`. The genuine Python content lives in `introCsWorkoutGeneratedQuestions` but is wired only to the **university** `introCS` track in `universityPrep.ts:62`. HS users opening "Intro to CS - Python" see the procedural blueprint generator.

The syllabus header also names `col-computer-programming` and `col-computers-and-the-internet` as covered IDs. Neither exists in the age catalog — both are dead references.

**Chapter taxonomy mismatch.** Generator's `computing` family emits chapters like "Variables and Types 2", "Conditionals 3" — superficially close to the syllabus but variant suffixes are noise. `introCsWorkoutGenerated` chapters (Software topic) need realignment to the eight HS chapter names if merged in.

## Per-file recommendations

| File | Items for introToCsPython | Bucket | Reason |
|---|---|---|---|
| [`introCsWorkoutGenerated.ts`](../../../src/data/questionCatalog/introCsWorkoutGenerated.ts) | not wired | **MERGE → HS routing** | Genuine intro-CS content. Wire `col-intro-to-cs---python` to a HS bundle that includes this file. |
| [`openDsaBridgeCourseImported.ts`](../../../src/data/questionCatalog/openDsaBridgeCourseImported.ts) | not sampled | **EVALUATE** | Bridge-course content may suit Chapter 8 algorithms; sample to confirm. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) computing blueprints (top-up) | 50 templated | **FIX (procedural generator)** | The only thing users see now. Not Python-specific (the syllabus is). Flag generator usage. |
| FCC `basic_javascript` bundle (referenced from `highAdvanced.ts:84`) | n/a | n/a | JavaScript-only; not a substitute for Python coverage. |

## Open actions (priority order)

1. **Rename the track id** from `col-intro-to-cs---python` to something clean like `introToCsPython` (drop the slugifier artefact) and update the age catalog + collection title.
2. **Wire** the renamed track into `highAdvancedTrackIds`, then add a bundle entry that pulls `introCsWorkoutGeneratedQuestions` (and any sampled OpenDSA bridge content) + the existing Python-style items already living under `introCS`.
3. **Author 8–12 Python-specific items** covering: `print` vs `return`, scope/local variables, list mutation pitfalls, dict key/value patterns, `try`/`except` for missing files, f-string formatting.
4. **Remove dead "Covers" references** to `col-computer-programming` and `col-computers-and-the-internet` from the syllabus header (or stand the tracks up).
5. **Realign chapter labels** to the eight syllabus chapters.

## Estimated effort

- Track rename + routing: ~1 hour
- Python authoring (8–12 items): ~4 hours
- Chapter rename: ~1 hour

## Notes for next auditor

The `col-intro-to-cs---python` slug artefact is a smell. Search the codebase for other `---` slugs (e.g. `col-hsc---vce-maths-australia`) and consider fixing the slugifier or standardising on camelCase ids for high-traffic tracks. The "Covers" line in the syllabus is aspirational fiction — the two extra ids don't exist anywhere in the age catalog.

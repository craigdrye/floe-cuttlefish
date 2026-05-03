# Numbas Conversion Plan

Generated from `data/raw_collections/numbas/numbas_questions.json`, `data/raw_collections/numbas/numbas_summary.md`, and the existing `reports/numbas-import-analysis.*` reports.

## Recommendation

Do not wire Numbas questions into app code directly.

The practical path is an offline conversion pipeline:

1. Select source records by licence, part type, topic, and target course route.
2. Refetch the full Numbas `.exam` payload for each candidate.
3. Render deterministic static variants with the Numbas engine.
4. Convert reviewed rendered variants into Floe fixed-choice cards.
5. Only then add approved generated cards to app catalog files in a separate task.

The current extraction is useful for triage and routing, but not enough for assessed import. It omits answer/correctness configuration for assessed parts, so even apparently simple multiple-choice records cannot be converted safely without refetching full part definitions.

## Source Snapshot

- Folder: `data/raw_collections/numbas`
- Raw records: 9,808 public reusable Numbas questions
- Collection id: `numbas::reuse-questions`
- Search scope: Numbas public database questions marked `Free to reuse`
- Existing analysis: `reports/numbas-import-analysis.md`
- Existing conclusion confirmed: Numbas is conversion-required, not direct-import-ready.

Top part types in this folder:

| Part type | Count |
| --- | ---: |
| `gapfill` | 13,983 |
| `numberentry` | 2,550 |
| `jme` | 1,795 |
| `1_n_2` | 1,504 |
| `m_n_2` | 351 |
| `m_n_x` | 305 |
| `matrix` | 125 |
| `patternmatch` | 70 |
| `yes-no` | 25 |
| `true-false` | 11 |

Top licences:

| Licence | Count |
| --- | ---: |
| Creative Commons Attribution 4.0 International | 6,467 |
| Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International | 2,469 |
| Creative Commons Attribution-NonCommercial 4.0 International | 604 |
| Creative Commons Attribution-ShareAlike 4.0 International | 167 |
| Creative Commons Attribution-NonCommercial-NoDerivs 4.0 International | 101 |

## Can Any Subset Become Fixed Choice?

Yes, but not as direct import. A real fixed-choice subset exists after parameter rendering and answer refetch.

The best initial filter is:

- Licence is CC BY 4.0 or CC BY-SA 4.0.
- Part types are only `1_n_2`, `m_n_2`, `m_n_x`, `yes-no`, or `true-false`.
- Record has a useful target route or strong topic tags.
- Statement/advice does not depend on live GeoGebra, JSXGraph, spreadsheets, custom marking scripts, or free-form math entry.

This yields 498 permissively licensed choice-like records in the raw public database folder. These are the first conversion candidates, not ready-to-ship cards. They still require full `.exam` payloads to recover choice text, correct options, feedback, marking settings, and variable-generation logic.

There is also a second-tier transformable subset:

- `numberentry`, simple `gapfill`, and some `jme` records can become generated fixed-choice cards by evaluating the correct answer and synthesizing distractors.
- This is especially attractive for arithmetic, algebra, calculus, statistics, and linear algebra drills.
- It should come after the native choice-like subset because answer normalization and distractor generation create more QA risk.

Avoid initially:

- Applet-heavy mechanics questions.
- `extension`, `spreadsheet`, `mark-code-3`, `matrix` input, custom part types, and paper-submission records.
- Records with NC, ND, all-rights-reserved, or unspecified licences unless project policy explicitly permits a separate lane.

## Metadata And Chapter Routing

Each raw record includes enough metadata to route and prioritize candidates:

- `source_id`, `question_id`, `slug`, `source_url`
- `title`
- `licence`
- `contributors`
- `tags`
- `topic_tags`
- `part_types`
- `variable_names`
- `candidate_track_ids`
- `statement_html`, `advice_html`
- `exam_length`

The existing candidate route field is useful but imperfect. It routes many records into current or proposed track ids:

| Candidate track id | Raw records |
| --- | ---: |
| `high_algebra_2` | 2,296 |
| `mathExtensions` | 2,296 |
| `quantAdvanced` | 980 |
| `genMath1` | 841 |
| `apCalculusBC` | 841 |
| `apCalculusAB` | 841 |
| `linearAlgebra` | 723 |
| `quant` | 719 |
| `introDataScience` | 719 |
| `apStatistics` | 719 |
| `genPhys1` | 304 |
| `logicCriticalThinking` | 80 |
| `brainBurners` | 80 |

For the permissively licensed choice-like subset, routed counts are smaller:

| Candidate track id | Fixed-choice candidates |
| --- | ---: |
| `high_algebra_2` | 52 |
| `mathExtensions` | 52 |
| `apCalculusAB` | 41 |
| `apCalculusBC` | 41 |
| `genMath1` | 41 |
| `apStatistics` | 21 |
| `introDataScience` | 21 |
| `quant` | 21 |
| `linearAlgebra` | 20 |
| `quantAdvanced` | 20 |
| `logicCriticalThinking` | 19 |
| `brainBurners` | 19 |

Routing caveat: some candidate track ids appear to be future/proposed ids rather than current `ageCatalog` ids. For example, `linearAlgebra`, `apStatistics`, `apCalculusAB`, `genPhys1`, `logicCriticalThinking`, `introDataScience`, `quant`, `brainBurners`, and `quantAdvanced` are present in catalog seed files; `high_algebra_2`, `mathExtensions`, `apCalculusBC`, and `genMath1` did not appear in the inspected catalog seed files and should be mapped or created before import.

Suggested route normalization:

| Raw candidate id | Practical target |
| --- | --- |
| `high_algebra_2` | High-school Algebra 2 / College Algebra / new Algebra Workout |
| `mathExtensions` | new Math Extensions / Quantitative Methods |
| `genMath1` | College Algebra or AP Calculus AB, depending on tags |
| `apCalculusBC` | AP Calculus AB initially unless BC track is created |
| `linearAlgebra` | Linear Algebra |
| `apStatistics` | AP Statistics |
| `introDataScience` | Introduction to Data Science |
| `quant` | Quant Interview Core |
| `quantAdvanced` | Quant Interview Advanced |
| `genPhys1` | General Physics I (Mechanics) |
| `logicCriticalThinking` | Logic & Critical Thinking |
| `brainBurners` | Brain Burners |

Chapter routing should come from normalized Numbas tags, not title alone. Good tag families already exist: `calculus`, `differentiation`, `integration`, `statistics`, `probability`, `linear algebra`, `matrices`, `vectors`, `statics`, `mechanics`, `solving equations`, `fractions`, `logarithms`, `factorisation`, `complex numbers`, and `functions`.

## Script Architecture Needed

The converter should be a separate offline importer, not runtime app code.

Recommended scripts:

| Script | Responsibility |
| --- | --- |
| `scripts/numbas/select-candidates.ts` | Read raw JSON, apply licence/part-type/tag/route gates, emit a review queue. |
| `scripts/numbas/fetch-exam.ts` | Download and cache full `.exam` payloads by `question_id` / `source_url`; preserve source provenance. |
| `scripts/numbas/render-variant.ts` | Use the Numbas runtime/compiler in a sandboxed Node or browser context to evaluate variables for deterministic seeds. |
| `scripts/numbas/extract-parts.ts` | Extract rendered prompt, choices, correct answer index/indices, feedback, advice, marks, and part metadata. |
| `scripts/numbas/render-assets.ts` | Convert supported LaTeX, SVG, generated plots, and simple diagrams into static assets. Quarantine applets. |
| `scripts/numbas/to-floe-candidates.ts` | Emit JSON candidates matching Floe fixed-choice shape, with `source`, `licence`, `contributors`, `seed`, `route`, and `reviewStatus`. |
| `scripts/numbas/qa.ts` | Flag missing answers, answer leakage, unresolved `{variables}`, applet placeholders, unsupported HTML, too-long prompts, and weak distractors. |

Data products:

- `data/generated/numbas/cache/*.exam.json`: immutable fetched source payloads.
- `data/generated/numbas/rendered/*.json`: rendered variants with seed and provenance.
- `data/generated/numbas/floe-candidates.json`: reviewable fixed-choice candidates.
- `reports/numbas-conversion-plan.json`: planning summary and candidate family examples.
- A later import task can selectively copy approved candidates into question catalog modules.

Minimum candidate schema:

```json
{
  "id": "numbas-12037-seed-0001",
  "source": {
    "sourceId": "numbas::12037",
    "sourceUrl": "https://numbas.mathcentre.ac.uk/question/12037/are-given-matrices-in-reduced-row-echelon-form/",
    "licence": "Creative Commons Attribution 4.0 International",
    "contributors": ["..."],
    "seed": 1
  },
  "route": {
    "trackId": "linearAlgebra",
    "chapter": "Matrices",
    "tags": ["linear algebra", "matrices", "echelon form"]
  },
  "question": {
    "promptHtml": "...",
    "choices": ["...", "...", "..."],
    "correctChoiceIndexes": [1],
    "rationaleHtml": "..."
  },
  "reviewStatus": "candidate"
}
```

## Candidate Question Families

These examples are concrete records from the raw Numbas public database. The target courses are conversion targets, not app wiring changes.

| Family | Example source ids | Target courses | Fit | Notes |
| --- | --- | --- | --- | --- |
| BODMAS / order of operations multiple choice | `numbas::60569`, `numbas::57944`, `numbas::60870`, `numbas::97880`, `numbas::107707` | `high_algebra_2`, `mathExtensions`, College Algebra | High | Choice-like arithmetic rules; good first pilot after answer refetch. |
| Algebraic graph recognition | `numbas::97909`, `numbas::97910`, `numbas::29832`, `numbas::29834`, `numbas::30351` | `high_algebra_2`, `mathExtensions`, AP Calculus AB | Medium | Fixed-choice if graphs render as static assets; reject live GeoGebra variants. |
| Factor theorem and polynomial factors | `numbas::29360`, `numbas::41247` | `high_algebra_2`, `mathExtensions` | High | Multiple-select factor identification maps cleanly. |
| Simple quadratic equations | `numbas::97883` | `high_algebra_2`, `mathExtensions` | High | Small variable set and single-choice part. |
| Matrix row echelon classification | `numbas::12037`, `numbas::32976` | Linear Algebra, Quant Interview Advanced | High | Matching/classification with rendered matrices. |
| Matrix dimensions true/false | `numbas::69197` | Linear Algebra, Quant Interview Advanced | High | True/false is closest to existing fixed-choice cards. |
| Graph adjacency matrices | `numbas::113784` | Linear Algebra, Quant Interview Advanced | Medium | Needs static graph rendering; target as a second pilot. |
| Quantifiers and predicates | `numbas::11836`, `numbas::11827`, `numbas::16275` | Logic & Critical Thinking, Brain Burners | High | Strong conceptual fixed-choice family. |
| Binomial vs Poisson modeling | `numbas::462` | AP Statistics, Introduction to Data Science, Quant Interview Core | High | Useful classification-style statistics cards. |
| Independent events classification | `numbas::88235` | AP Statistics, Introduction to Data Science, Quant Interview Core | High | Can be flattened into individual fixed-choice checks. |
| Correlation and data-type classification | `numbas::154121`, `numbas::154584`, `numbas::168614` | AP Statistics, Introduction to Data Science, Quant Interview Core | Medium | Good target, but route metadata is incomplete for some records. |
| Integration by substitution MCQ | `numbas::126096` | AP Calculus AB, AP Calculus BC / future, College Math | High | Symbolic choices can render to one fixed-choice card. |
| Graphical derivative matching | `numbas::41508` | AP Calculus AB, AP Calculus BC / future, College Math | Medium | Good if plots render statically. |
| Mean, median, mode, range | `numbas::6523` | AP Statistics, Introduction to Data Science, Quant Interview Core | Medium | Numeric gapfill can become fixed choice with generated distractors. |
| Card-and-die probability | `numbas::12531` | AP Statistics, Introduction to Data Science, Quant Interview Core | Medium | Requires computed distractors; not native fixed choice. |
| Engineering statics equilibrium | `numbas::70552`, `numbas::58035` | General Physics I (Mechanics), Quant Interview Advanced | Low for first pass | High-value content but applet/GeoGebra/gapfill-heavy. |

## Pilot Plan

Start with three small pilots:

1. Choice-native algebra pilot: 25-50 BODMAS, quadratic, factor theorem, and order-of-operations variants routed to Algebra Workout / College Algebra.
2. Choice-native linear algebra pilot: 25-50 matrix echelon, matrix-size true/false, and adjacency-matrix variants routed to Linear Algebra.
3. Choice-native logic/statistics pilot: 25-50 quantifiers, binomial-vs-Poisson, independent-events, and data-type classification variants routed to Logic & Critical Thinking, AP Statistics, and Introduction to Data Science.

Acceptance gates:

- No unresolved `{var}`, `\var{...}`, `{applet}`, GeoGebra, JSXGraph, or Numbas function placeholders.
- Correct answer index/indices recovered from full source payload, not inferred from text.
- Licence retained and compatible with import policy.
- Static rendered variant includes source id, source URL, contributor attribution, licence, and seed.
- Prompt and rationale are understandable outside Numbas.
- Distractors are visible, distinct, and not obviously malformed.

## Decision

Numbas should be treated as a high-value generated-question reservoir, not a raw fixed-choice bank. The immediate conversion value is in a filtered, refetched, rendered choice-like subset of roughly 500 public-database records, plus a later transform lane for simple numeric/symbolic gapfill records. The mechanics/statics and calculus reservoirs are valuable but need a renderer and asset pipeline before they can become reliable Floe cards.

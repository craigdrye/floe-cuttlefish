# Syllabus Coverage Report

Generated on 2026-05-02.

This report now counts only syllabus files that actually exist under `src/data/syllabi/`, plus explicit validated mappings in [src/data/syllabi/index.ts](/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/syllabi/index.ts).

## Summary

- Total course tracks scanned: `219`
- Tracks with validated syllabus coverage: `198`
- Tracks still unmatched: `21`

## Coverage By Catalog

- `career.ts`: `21 / 21`
- `high.ts`: `97 / 115`
- `primary.ts`: `31 / 34`
- `university.ts`: `49 / 49`

## High-Value Existing-File Mappings

These are now cleanly represented in [src/data/syllabi/index.ts](/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/syllabi/index.ts):

- `apHistory` -> `high/ap_us_history.md`
- `philYear7` and `introToEthics` -> `high/intro_to_ethics.md`
- `middleSchoolEarthSpace` -> `high/middle_school_earth_space.md`
- `naplanYear3` / `naplanYear5` / `naplanYear7` / `naplanYear9`
- `elevenPlus`
- `genBio1` / `genChem1` / `genPhys1`
- `introDataScience`
- `introToPsychology`
- `logicCriticalThinking`
- `apCalculusAB` / `apCalculusBc` / `apStatistics` / `collegeAlgebra`

## Actual Missing Coverage

### Career

Career coverage is now complete via the new `src/data/syllabi/career/` directory and explicit mappings in [src/data/syllabi/index.ts](/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/syllabi/index.ts).

### High

- `biology_2e`
- `psychology_2e`
- `principles_economics_3e`
- `basic_javascript`
- `basic_html_and_html5`
- `mathematics_extensions`
- `ib_history`
- `philYear12`
- `col-ap-economics`
- `advancedEthicsMoralPhilosophy`
- `col-a-level-economics`
- `col-ap-physics`
- `col-ap-world-history`
- `col-a-level-biology`
- `col-ap-calculus`
- `col-ap-us-government-politics`
- `col-grammar`
- `col-hsc---vce-maths-australia`

### Primary

- `khanacademy`
- `ck12`
- `socialEmotionalLearning`

### University

University coverage is now complete after wiring the existing prep files for:

- `ml` -> `university/data_science_ml_prep.md`
- `software` -> `university/software_engineering_prep.md`
- `research` -> `university/research_scientist_prep.md`
- `uxResearch` -> `university/ux_researcher_prep.md`
- `introCS` -> `university/intro_computer_science.md`

## Notes

- The prior heuristic version of this report overstated coverage for some career tracks by assuming syllabus files that were not actually present.
- That gap has now been resolved by adding concrete syllabus files for the full career catalog.
- The explicit mapping source of truth now lives in [src/data/syllabi/index.ts](/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/syllabi/index.ts).

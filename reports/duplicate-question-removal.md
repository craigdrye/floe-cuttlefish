# Duplicate Question Removal Report

Generated on 2026-05-03T19:13:55.982Z.

## Summary

- Raw question instances: 44822
- Live normalized question instances: 29592
- Exact duplicate question instances removed from live catalogs: 15230
- Within-course duplicate prompt groups before removal: 3632
- Within-course duplicate prompt groups after removal: 0

## Biggest Removals By Course

- ck12 (primary): removed 4166; 17694 -> 13528
- khanacademy (primary): removed 786; 2306 -> 1520
- col-class-3-math (primary): removed 417; 1379 -> 962
- col-class-6-math (primary): removed 339; 926 -> 587
- col-class-4-math (primary): removed 146; 488 -> 342
- col-class-1-math (primary): removed 132; 275 -> 143
- software (university-prep): removed 99; 557 -> 458
- col-class-5-math (primary): removed 88; 374 -> 286
- col-class-2-math (primary): removed 76; 373 -> 297
- col-sat-math (high-math): removed 53; 401 -> 348
- advancedEthicsMoralPhilosophy (high-generated): removed 48; 50 -> 2
- alevelEconomics (high-generated): removed 48; 50 -> 2
- apEconomics (high-generated): removed 48; 50 -> 2
- chessTactics (high-generated): removed 48; 50 -> 2
- col-ap-economics (high-generated): removed 48; 50 -> 2
- col-ap-macroeconomics (high-generated): removed 48; 50 -> 2
- col-ap-microeconomics (high-generated): removed 48; 50 -> 2
- col-finance-and-capital-markets (high-generated): removed 48; 50 -> 2
- col-macroeconomics (high-generated): removed 48; 50 -> 2
- col-microeconomics (high-generated): removed 48; 50 -> 2
- collegeAdmissions (high-generated): removed 48; 50 -> 2
- creativeWriting (high-generated): removed 48; 50 -> 2
- detectiveLogic (high-generated): removed 48; 50 -> 2
- epistemologyBasics (high-generated): removed 48; 50 -> 2
- existentialism (high-generated): removed 48; 50 -> 2
- financeAndCapitalMarkets (high-generated): removed 48; 50 -> 2
- gameDesign (high-generated): removed 48; 50 -> 2
- gameDesignBasics (high-generated): removed 48; 50 -> 2
- introToEthics (high-generated): removed 48; 50 -> 2
- lifeSkillsAndAdulting (high-generated): removed 48; 50 -> 2
- lifeSkillsHigh (high-generated): removed 48; 50 -> 2
- logicAndArgumentation (high-generated): removed 48; 50 -> 2
- macroeconomics (high-generated): removed 48; 50 -> 2
- microeconomics (high-generated): removed 48; 50 -> 2
- mythologyAndMonsters (high-generated): removed 48; 50 -> 2
- mythologyMonsters (high-generated): removed 48; 50 -> 2
- philYear10 (high-generated): removed 48; 50 -> 2
- philYear11 (high-generated): removed 48; 50 -> 2
- philYear12 (high-generated): removed 48; 50 -> 2
- philYear7 (high-generated): removed 48; 50 -> 2

## Logic & Argumentation Examples Removed

### logicAndArgumentation (high-generated)

- Prompt: A classmate says, “All dragons love toast. Pebble loves toast. Therefore Pebble is a dragon.” What is wrong?
- Instances before removal: 25
- Kept first ID: 1906900
- Removed duplicate IDs: 1906902, 1906904, 1906906, 1906908, 1906910, 1906912, 1906914, 1906916, 1906918, 1906920, 1906922, 1906924, 1906926, 1906928, 1906930, 1906932, 1906934, 1906936, 1906938, 1906940, 1906942, 1906944, 1906946, 1906948

### logicAndArgumentation (high-generated)

- Prompt: A game asks players to collect moon cheese, upgrade a backpack, then collect stranger cheese. What is being described?
- Instances before removal: 25
- Kept first ID: 1906901
- Removed duplicate IDs: 1906903, 1906905, 1906907, 1906909, 1906911, 1906913, 1906915, 1906917, 1906919, 1906921, 1906923, 1906925, 1906927, 1906929, 1906931, 1906933, 1906935, 1906937, 1906939, 1906941, 1906943, 1906945, 1906947, 1906949

### philYear8 (high-generated)

- Prompt: A classmate says, “All dragons love toast. Pebble loves toast. Therefore Pebble is a dragon.” What is wrong?
- Instances before removal: 25
- Kept first ID: 1903000
- Removed duplicate IDs: 1903002, 1903004, 1903006, 1903008, 1903010, 1903012, 1903014, 1903016, 1903018, 1903020, 1903022, 1903024, 1903026, 1903028, 1903030, 1903032, 1903034, 1903036, 1903038, 1903040, 1903042, 1903044, 1903046, 1903048

### philYear8 (high-generated)

- Prompt: A game asks players to collect moon cheese, upgrade a backpack, then collect stranger cheese. What is being described?
- Instances before removal: 25
- Kept first ID: 1903001
- Removed duplicate IDs: 1903003, 1903005, 1903007, 1903009, 1903011, 1903013, 1903015, 1903017, 1903019, 1903021, 1903023, 1903025, 1903027, 1903029, 1903031, 1903033, 1903035, 1903037, 1903039, 1903041, 1903043, 1903045, 1903047, 1903049


## Remaining Exact Within-Course Duplicate Groups

- None found after normalization.

## Notes

- This does not delete source questions from files; it removes duplicate exact prompts from the live normalized catalog.
- The first occurrence in each course is kept.
- Numeric variants are not treated as duplicates unless the full prompt text is otherwise identical after punctuation/whitespace normalization.

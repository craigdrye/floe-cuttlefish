# Audit: col-grammar

**Syllabus**: [`src/data/syllabi/high/grammar.md`](../../../src/data/syllabi/high/grammar.md)
**Track id**: `col-grammar` (high, English, `status: 'playable'`)
**Region**: Universal (English mechanics — not jurisdiction-specific, though some usage conventions are US-tilted)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Sentence Foundations | YES | "Hamster preposition", "Glitter robot subject", "Jellybean sentence", "Tap-dancing penguin clause", "Owl run-on" — covered under "Grammar: Parts and Clauses" |
| 2. Parts of Speech in Context | Partial | "Hamster preposition", "Dragon indirect object" cover basics; no function-shift Q |
| 3. Clause Types and Sentence Variety | Partial | "Tap-dancing penguin clause" covers dependent-clause ID; no compound-complex, no coordination/subordination tradeoff Q |
| 4. Fragments, Run-Ons, and Boundaries | YES | "Owl run-on", "Llama semicolon", "Wizard colon", "Jellybean sentence" |
| 5. Verbs, Agreement, Voice, and Mood | YES | "Moon pies agreement", "Cupcake active voice", "Vending subjunctive" |
| 6. Pronouns, Modifiers, and Parallelism | YES | "Snail race modifier", "Sticky pronoun", "Alien parallel list", "Goblin pronoun agreement", "Sprinkle modifier", "Tortoise pronoun" |
| 7. Punctuation and Style | Partial | "Goblin apostrophe", "Llama semicolon", "Wizard colon" — no commas around restrictive/nonrestrictive, no hyphen/dash items |
| 8. Grammar for Editing and Rhetoric | **No** | None — no concision, no rhetorical-fragment, no proofreading items |

**Partial chapter-taxonomy mismatch.** Question banks use 3 condensed chapters — "Grammar: Parts and Clauses", "Grammar: Voice and Punctuation", "Grammar: Clarity and Style" — that collapse the syllabus's 8 chapters. The mapping is roughly:
- Parts and Clauses → Ch 1, 2, 3
- Voice and Punctuation → Ch 4, 5, 7
- Clarity and Style → Ch 6, partial Ch 8

Workable but loses the syllabus's distinctions (e.g. compound-complex sentence variety vs. plain clause identification).

## Per-file recommendations

| File | Qs feeding this track | Bucket | Reason |
|---|---|---|---|
| [`highAgentGenerated.ts`](../../../src/data/questionCatalog/highAgentGenerated.ts) → `'col-grammar'` key | 18 | **FIX** | Strongest dedicated content in the ELA cluster. Prompts vivid and on-target ("Goblin apostrophe", "Cupcake active voice", "Snail race modifier"). **But the `q()` helper assigns `DEFAULT_FLAW` (line 5) to every distractor** — all 18 Qs share one generic "why this is wrong" string. Rewrite per-distractor with rule-specific reasoning. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) → `englishBlueprints()` (top-up) | ~1 unique to grammar | **DELETE for this track** | Only "Comma splice repair" is grammar — the other 3 are inference/tone/evidence, off-topic. Filter `englishBlueprints` away from `col-grammar`. |

**Net effect**: ~19 live Qs, all with DEFAULT_FLAW boilerplate distractors. Best **content coverage** in the cluster (6 of 8 chapters touched) but the worst **distractor quality**.

## Open actions (priority order)

1. **Rewrite per-distractor explanations** for the 18 `col-grammar` items — replace DEFAULT_FLAW with rule-specific reasoning. Highest priority in this audit cluster: content exists, just needs the explain-the-wrong-answer pass.
2. **Author 8-12 new Qs to close Chapter 8** (Editing and Rhetoric) — rhetorical fragments, concision cuts, before/after edits.
3. **Author 4-6 Qs to close Chapter 7 gaps**: restrictive/nonrestrictive commas, hyphen vs. dash, appositives.
4. **Realign chapter labels** to the 8 syllabus chapters.
5. **Strip `englishBlueprints()` top-up** for this track.
6. **Consider region tag.** Subjunctive "were" and Oxford-comma items are US/formal-register specific.

## Estimated effort

~8 hours: 3h rewriting distractors, 3h authoring 12 new Qs for Ch 7-8, 1h relabelling, 1h routing cleanup.

## Notes for next auditor

DEFAULT_FLAW in [`highAgentGenerated.ts:5`](../../../src/data/questionCatalog/highAgentGenerated.ts) affects every track in that file: biology_2e, psychology_2e, us_history, principles_economics_3e, basic_html_and_html5, mathematics_extensions, ib_history, col-grammar. Treat as one cross-cutting cleanup.

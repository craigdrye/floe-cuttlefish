# quantEndlessQuestions.ts — archived 2026-05-18

## Why archived

The file `src/data/quantEndlessQuestions.ts` (619 lines) defined a `QuantQuestion` type with a richer schema than the catalog's standard `Question`:

```ts
type QuantQuestion = {
  id: number
  kind: 'quick' | 'deep'
  topic: 'Game theory' | 'Probability' | 'Expected value' | 'Statistics'
  title: string
  chapter: string
  briefing: string
  prompt: string
  fieldNote: string
  mentorHint: string
  answers: Answer[]   // with optional Misconception[] per answer
  solution: string
  xp: number
}
```

It exported `quantEndlessQuestions: QuantQuestion[]` as a procedurally-generated bank covering Expected Value, Bayes, Statistics, and Game Theory (the tiger / pirate puzzle families).

**Nothing imports it.** A `grep` across `src/` for `quantEndlessQuestions` returns only the file's own export — it has no consumers in the running app. It's been silently orphaned, likely since an earlier prototype that hadn't been wired into the main `Question`-shaped catalog.

## Why preserved (not deleted)

The procedural generators produce content that doesn't exist elsewhere in the catalog — particularly the variant-style EV/Bayes drills with templated parameters. Could be revived as either:

1. **Raw material** for hand-written Q's in `quant.ts` under Probability / Expected Value chapters, or
2. **A second "endless drill" mode** for the Core track if we ever build one — would need the schema adapted to the standard `Question` shape (collapse briefing/fieldNote/mentorHint into the lesson; convert Misconception triples into the standard wrong-answer tuples).

## How to restore

Move back: `mv archive/2026-05-18-quant-endless-orphan/quantEndlessQuestions.ts src/data/quantEndlessQuestions.ts` — but be prepared to wire up an importer in `src/data/questionCatalog/career.ts` (or wherever the consumer lives) and a schema adapter from `QuantQuestion` to `Question`.

## Context

This archive is part of the Phase 1 quant-track refactor (see `docs/audit/PRUNING_PLAN.md`) — explicit ID-based track routing in `quant.ts` replacing the previous chapter + title-allowlist match.

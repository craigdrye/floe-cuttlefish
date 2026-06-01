# Semantic Question Quality Audit

Generated on 2026-06-01T15:20:12.524Z.

Scans `src/data/questionCatalog/*.ts` directly with the TypeScript parser, so it does not depend on app course wiring or runtime imports.

## Summary

- Files scanned: 758
- Question-like records scanned: 56985
- Extracted question records before quarantine: 57142
- Non-playable import placeholders skipped: 157
- Distinct question ids seen: 38775
- Total semantic issues found: 0
- JSON issue rows stored: 0

## Flag Counts

| Flag | Count | Meaning |
|---|---:|---|

## Highest-Signal Examples

| Rank | Priority | Flag | File | Question | Field | Evidence | Detail |
|---:|---:|---|---|---|---|---|---|

## Detection Notes

- `formulaic-wrapper` catches prompt wrappers such as `This X question is about...`, `A learner runs into...`, and generic completion tails.
- `source-jargon-leak` catches learner-facing source/import terms such as `IMS exercise`, `source prompt`, and raw source ids.
- `obvious-irrelevant-distractor` is intentionally conservative: it requires an explicit off-topic marker and low overlap with the prompt context.
- `repeated-why-wrong` is counted across normalized distractor flaw text with a minimum repeat threshold of three.
- OpenStax rows that are already filtered from runtime play (`See Solution`, `No solution provided.`, or `N/A (Open-ended)`) are skipped as non-playable import placeholders.

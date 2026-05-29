# Floe Content Audit

Method for sorting Floe's question banks course-by-course, anchored on the syllabi as canonical structure.

## Why this exists

The May 2026 multi-agent audit found ~280 tracks and ~5,000+ questions dominated by iterative AI generation with no consolidation. The job: walk every course, anchor it to its syllabus, and bucket every question file as **KEEP / FIX / MERGE / DELETE**.

Floe is pre-launch — cuts are safe, no migration risk. Career is the strategic priority (it's Floe's differentiator). Order: career → high school → university → primary/preschool.

## Output: one audit file per course

`docs/audit/<tier>/<courseId>.md` containing:

1. **Course identity** — id, syllabus path, current track wiring, status flag
2. **Coverage map** — which syllabus chapters have question coverage, which don't
3. **Per-file recommendations** — table of every question file feeding this course with bucket + reason
4. **Open actions** — concrete prioritised next steps
5. **Estimated effort** — rough sizing so we can plan

Worked example: [`docs/audit/career/ventureCapitalRoadmap.md`](./audit/career/ventureCapitalRoadmap.md).

## Bucket definitions

| Bucket | When | Required note |
|---|---|---|
| **KEEP** | Meets quality bar as-is | Brief reason it's good |
| **FIX** | Worth keeping; has fixable issues | Specific issues to address |
| **MERGE → X** | Content has value but belongs in another file | Target file + which questions to lift |
| **DELETE** | Net negative or fully duplicated | Justification; flag any salvageable questions first |

## Quality bar (per question)

A question is high-quality if it meets **all** of:

- **Per-distractor explanation** — each wrong answer has a specific "why this is wrong" line. No `DEFAULT_FLAW` constants.
- **Plausible distractors** — wrong answers reflect real misconceptions, not silly/cartoonish filler.
- **Tone matches audience** — playful is fine for primary brain burners; sober for MCAT/AP/credentials.
- **Factually defensible** — regulation-adjacent content should carry `lastReviewed: <date>` metadata (schema change to add).
- **Region-tagged if jurisdiction-specific** — US content explicitly labelled (US-first launch; everything else gets pruned or tagged later).

A file is **KEEP** only if the majority of its questions meet this bar. Otherwise FIX, MERGE, or DELETE.

## Cross-cutting flags to check on every file

- Uses a `DEFAULT_FLAW` constant for distractor explanations → FIX or DELETE
- Duplicates concepts from another file in the same course → MERGE candidate
- Chapter names don't match the syllabus → note for FIX
- Silently US-only → flag for region tagging
- Track has `status: 'soon'` but the file has questions → promote to `playable`
- Imports source content with stripped context (e.g. `imsTutorialsImported.ts`) → likely DELETE

## Workflow per course

1. Read the syllabus
2. Identify every question file that feeds the course — grep by track id in `career.ts` / age catalog wiring; grep by topic keyword for orphans
3. Sample each file (5–10 questions)
4. Score against the quality bar
5. Write `docs/audit/<tier>/<courseId>.md`
6. Aggregate per-tier into a pruning plan

## Scaling

Parallelisable via subagents — one agent per course (or per industry cluster for career). One audit doc per course in this directory; review in batches; act in waves.

## Quality bar for new authoring

When closing coverage gaps or replacing deleted content, the bar is the hand-authored work in:

- [`src/data/questionCatalog/jargonBusters.ts`](../src/data/questionCatalog/jargonBusters.ts) — career voice
- [`src/data/questionCatalog/primaryBuilders.ts`](../src/data/questionCatalog/primaryBuilders.ts) — primary `[answer, whyWrong, nudge]` triple shape
- [`src/data/questionCatalog/highBuilders.ts`](../src/data/questionCatalog/highBuilders.ts) — high school math style
- [`src/data/questionCatalog/universityPrep.ts`](../src/data/questionCatalog/universityPrep.ts) — university interview-grade prompts

These are the model. Anything new should match their per-distractor rigour.

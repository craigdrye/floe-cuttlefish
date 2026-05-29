# Floe

Mobile-first learning trainer with cuttlefish mascots. Spans **age 8 → career-changer** across five tiers (primary · high school · university · career-hopper · career). Career-changer is the strategic differentiator — practical interview/credential/role prep for people switching fields.

## Where things live

- **`src/data/ageCatalog/`** — track definitions per tier. Each tier has its own age catalog file. Tracks carry `id`, `title`, `subtitle`, `status: 'playable' | 'soon'`, `discipline`, `ageGroup`, and (where jurisdiction-specific) `regions: string[]`.
- **`src/data/questionCatalog/`** — question banks. Hand-authored gold-standard banks (e.g. `jargonBusters.ts`, `primaryBuilders.ts`, `highBuilders.ts`, `universityPrep.ts`, `civicPoliticsQuestions.ts`) plus consolidated agent-generated banks (post-Wave-4) like `careerAgentGeneratedRoadmapFinance.ts`. The aggregator at `careerAgentGenerated.ts` merges agent-generated content for runtime topup.
- **`src/data/syllabi/`** — markdown syllabus per course. The syllabi are the canonical source of chapter structure for content audits and consolidation work.
- **`src/components/screens/`** — top-level screens (Welcome, AudienceSelect, InterestSelect, TrackSelect, Trainer, Map, Profile) + 16 mini-games (Wordle family, Connections, Sudoku, Kakuro, Rikudo, 2048, Nerdle, Sumplete, Pong, Invaders, Fight, Letterboxed, Waffle, etc).
- **`src/hooks/useQuizData.ts`** — quiz runtime: picks the active question set, remixes wording, shuffles answers, handles review/daily/course modes.
- **`src/store/`** — Zustand slices (quiz, auth, progress).
- **`docs/audit/`** — audit framework, per-course audit docs (~300 active), pruning plan, strategic review, playtest notes, and the flagship-course review template (`career/_flagship/`).
- **`archive/`** — content cut from active source but preserved (e.g., `2026-05-18-age-floor-cut/` holds preschool tier and primary age 5-7 syllabi).

## Quick play loop

`Welcome` → `AudienceSelect` (age + interests + adult focus) → `InterestSelect` → `TrackSelect` (courses or games mode) → `Trainer` or game screen.

Wordle weights its solution pool 65% toward the player's selected interests; other puzzle/arcade games are jurisdiction-neutral.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:5173/`. Vite boots in ~1.5s.

## Build & typecheck

```bash
npm run build         # vite build (full bundle)
npx tsc -b            # type-check (strict, with project references)
npx tsc --noEmit      # type-check (looser — preferred for quick checks)
npm run lint          # eslint .
```

## Audit & content quality

This repo has gone through a multi-pass audit + Wave 4 consolidation:

- **316 per-course audit docs** live under `docs/audit/{career,high,university,primary,preschool}/`
- **`docs/audit/PRUNING_PLAN.md`** — execution log of every consolidation, deletion, and rewrite wave
- **`docs/audit/STRATEGIC_REVIEW.md`** — what Floe is for, what the gaps are, the recommended ship sequence
- **`docs/audit/PLAYTEST_NOTES.md`** — code-walkthrough findings + fixed P0 onboarding bugs
- **`docs/audit/BACKLOG.md`** — ranked queue of remaining content/UX work
- **`docs/audit/career/_flagship/ventureCapitalRoadmap_review.md`** — the template for pedagogical reviews. Use this voice + structure when polishing any career-tier track.

Quality bar (codified in `docs/CONTENT_AUDIT.md`):
- Every wrong answer has a bespoke `whyWrong` line (no `DEFAULT_FLAW` constants)
- Distractors reflect real misconceptions, not cartoonish strawmen
- Chapter names match the syllabus literal
- Regulation-adjacent content carries `lastReviewed` metadata
- Jurisdiction-specific content carries `regions: [...]`

## Notable

- **Age floor**: 8 (preschool tier and primary Year 1-2 / Class 1-2 / 1st-2nd grade content was archived 2026-05-18 — see `archive/`). Aligns with phone-ownership inflection per Pew/Common Sense Media.
- **Localisation**: US-first. Tracks tagged with `regions: ['US']` or multi-region arrays where applicable. International exam prep (UK A-Levels, JEE/NEET, NAPLAN, PSLE) is tagged but currently thin.
- **Infinite random** is the intended replay model — no daily puzzles. Track-level progress is local.
- **PWA** manifest + service worker are wired (`public/manifest.webmanifest`, `public/sw.js`).
- Originally seeded as a quant-finance interview prep prototype; the catalog has grown well beyond that scope. The "Pirates, but make it corporate" backward-induction puzzle is gone from the starter fallback as of 2026-05-18.

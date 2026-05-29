# Playtest Notes — 2026-05-18

Code-walkthrough playtest (headless, no browser interaction). Tracing the player flow through the source to identify what would break or feel wrong for a real user.

**Runtime status**: Dev server boots cleanly (Vite 1.5s, HTTP 200). Build green (`tsc -b` and `tsc --noEmit` both clean).

## Flow traced

`WelcomeScreen` → `AudienceSelectScreen` → `InterestSelectScreen` → `TrackSelectScreen` → `TrainerScreen` (or a game screen)

## Findings

### 🔴 P0 — Onboarding broken for ages 5-7 (FIXED IN-LINE)
- **Bug**: `AudienceSelectScreen.tsx:49` had `MIN_AGE = 5`. After the age-8 floor cut, all preschool + primary Year 1-2 content was removed but the age wheel still let users pick 5-7. They'd land in an empty `primary` tier.
- **Bug**: `coursePersonalization.ts:113` mapped age ≤ 6 to `'primary-year-1'` (cut). Ages 7 also mapped to `primary-year-2` (cut).
- **Fix applied this session**: `MIN_AGE = 8`; `stageDetailForNumericAge` updated to clamp primary year to 3-6.
- **Still TODO**: review the rest of `coursePersonalization.ts` for stale assumptions.

### 🔴 P0 — Pirates puzzle is the universal fallback question
- **`useQuizData.ts:168`**: `(activeSet.length ? activeSet : starterQuestions)[index % ...]`
- **`starterQuestions.ts:9`**: First starter question is "Pirates, but make it corporate" — a quant-finance backward-induction puzzle.
- **Impact**: Any user whose chosen track has zero playable questions sees Pirates. After Wave 2 / Wave 4 cleanups, fewer tracks are truly empty, but this fallback still exists. A primary-tier kid who picks an empty Big Questions Year track gets Pirates.
- **Recommended fix**: replace `starterQuestions.ts` with a small bank of audience-appropriate fallback questions, picked based on selected age group. Or: gate empty tracks earlier (`countPlayableQuestions === 0` → show "coming soon" state instead of routing to the trainer).

### 🟠 P1 — No real authentication
- `WelcomeScreen` collects "username or email" as plain text inputs (lines 105-119).
- `register/login/loginAsGuest` are called but inspecting `authSlice.ts` shows these are local store operations — no auth provider, no email verification, no password.
- **Fine for prototype/internal testing.** Not ship-ready.
- **Recommended**: ship as guest-only for closed beta; add real auth only when ready for public launch.

### 🟠 P1 — Onboarding header says "Step 2 of 3"
- `AudienceSelectScreen.tsx:212`: `<p className="audience-eyebrow">Step 2 of 3</p>`
- Step 3 is `InterestSelectScreen` (toggled after this screen). But Welcome → Audience → Interests is actually 3 steps if you count Welcome as 1. So "Step 2 of 3" suggests interests is the last step — which it is.
- **Acceptable**, but verify Step 1 indicator on `WelcomeScreen` exists (a quick check shows no "Step 1 of 3" — minor inconsistency).

### 🟠 P1 — Catalog still wires deleted content paths
- `useQuizData.ts` and related runtime code expect `activeSet` from `chapterQuestions` / `reviewQuestions` / `dailyQuestions` / `courseQuestions`.
- **`mode === 'daily'`** path exists but Craig's strategic direction is **infinite random, no daily**. The daily mode is still hooked. Is it reachable from UI?
- **Recommended**: trace where `mode='daily'` is set and either wire it up properly or rip the daily path out for clarity.

### 🟢 P2 — Welcome screen polish
- Cuttlefish character rotation works (5 characters, 2-second cycle).
- Auth inputs read fine for prototype.
- "Let's go" CTA is clear.
- Underwater bubbles animation looks intentional.
- **Status**: looks good for a prototype welcome screen.

### 🟢 P2 — Audience picker UX is sophisticated
- Drum-wheel age picker with touch + scroll + drag (`AudienceSelectScreen.tsx:52+`).
- Topic multi-select grid with visual checkmarks.
- Adult-focus quick-pick shown only at age ≥ 23.
- **Status**: feels well-designed. Topic infrastructure already exists for the Wordle-interest-link work.

### 🟢 P2 — TrackSelectScreen has games AND courses modes
- `TrackSelectScreen` exports `mode='courses' | 'games'`.
- Game catalog is enumerated with categories: 'Top', 'Mystery', 'Word', 'Math', 'Arcade'.
- All 18 game screens are wired.
- **This is where game scope decisions land**: cutting Slots/Fight means deleting their entries here too, not just the screen files.

### 🟢 P2 — Auto-FIX'd content is wired
- Verified via grep that `careerAgentGeneratedRoadmapFinance.ts`, `Credentials1.ts`, `RoadmapHealthcare.ts`, `RoadmapTech.ts`, `RoadmapGovernment.ts`, `RoadmapFinance.ts` etc. are all imported in `career.ts` and `careerAgentGenerated.ts` aggregator.
- The 6,500+ rewritten distractor explanations WILL render to actual users (subject to UI styling).

### ⚪ Untested in this pass
- How does a question actually look in the UI? (Layout, distractor presentation, lesson display, transitions.)
- What does a 12-question quiz session feel like flow-wise?
- How does the Map / progress UI feel? (Screen exists but I didn't read.)
- What does the Wordle game actually look like in-app?
- Does the Trainer screen handle "0 questions" gracefully or crash?
- What's the Connections / Wordle / Sudoku visual quality?
- Mobile viewport — does anything break at iPhone width?

## Most important next moves (revised priority based on this trace)

1. **Replace `starterQuestions.ts` with audience-aware fallback OR gate empty tracks at the route level.** (~30m–1h) — eliminates the Pirates onboarding hazard.
2. **Open the app in a real browser, do a 15-minute click-through, take screenshots/notes.** This trace caught code-level issues; real interaction will catch rendering/layout/flow issues this can't.
3. **Audit `coursePersonalization.ts` end-to-end** for other stale age-floor assumptions.
4. **Decide and execute game scope cuts** (Slots, Fight, possibly Pong/Invaders).
5. **Pick a flagship course** for full pedagogical review (proposal: ventureCapitalRoadmap).

## What this trace did NOT find

- Catastrophic code-level bugs. The runtime infrastructure is solid.
- Missing screens or broken routes.
- Unsalvageable architecture.

That's good news. The remaining work is mostly: content quality + UX polish + game philosophy. Not "fix the foundation."

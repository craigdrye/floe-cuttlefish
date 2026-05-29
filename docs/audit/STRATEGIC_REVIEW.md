# Strategic Review — Where Floe Is, What's Missing, What's Next

Written 2026-05-18 after extended catalog-engineering session. Honest critique, not session-end victory lap.

## What Floe is trying to be

A mobile-first, Duolingo-style learning trainer spanning **age 8 → career-changer**. Five tiers: primary, high school, university, career-hopper, career. Plus 16 mini-games.

Strategic differentiator (per Craig): **career-changer**. Other tiers are "nice to have for the same lifetime user." Brand: cuttlefish mascots, nerdy-but-accessible voice. US-first localisation.

## What we've achieved this session arc

Honestly: **a lot of content engineering**.

- 5 auto-FIX waves rewrote ~6,500 question distractor explanations
- 6 Wave 4 cluster consolidations on career
- 51+ catalog files deleted (from 222 → ~150 active)
- 6 architecture executions (cuts, merges, splits)
- 316 per-course audit docs produced
- 4 real content bugs caught and fixed
- Schema additions (`regions`, `lastReviewed`)
- Region tagging on 31+ tracks
- Age-8 floor cut applied with 17 syllabi archived
- BACKLOG.md compiled with ~7 hours of queued improvements

Build green throughout. Real progress.

## The honest critique

We've been doing **content engineering**, not **product thinking**. The catalog is cleaner. The question-level quality bar is higher. But none of this work has been validated against a player's actual experience.

I haven't:
- Run `npm run dev` and clicked through the app once
- Verified what tracks actually appear in the UI for a given user persona
- Tested any quiz flow end-to-end
- Checked whether the auto-FIX'd questions render correctly
- Looked at the onboarding flow
- Tried any game

We could ship "improved" content that has rendering bugs, layout issues, broken nav, or UX problems we can't see from the code.

## The gaps I see now

### Gap 1 — Ship readiness is unknown
We haven't tested the player experience. The catalog work is necessary but not sufficient for shipping.

### Gap 2 — Course structure quality hasn't been touched
We've fixed *questions* and *chapter taxonomies*. We haven't asked:
- Is the chapter **order** pedagogically right?
- Are chapter **grain sizes** consistent? (some have 3 Qs, others 30+)
- What's the **learning arc** across a course? (foundation → application → synthesis?)
- Are there **capstones** that integrate chapters? (audits flagged "Chapter 8 synthesis consistently empty" in primary)

### Gap 3 — Per-question pedagogical quality unaudited
Auto-FIX waves fixed *distractor explanations*. They didn't audit:
- Whether questions test **understanding** vs recall
- Whether **correct answers are actually correct** (we caught 4 bugs in math; how many elsewhere?)
- Whether **difficulty is calibrated** (audit found AP-labeled questions at GCSE level)
- Whether **language is clear** and age-appropriate

### Gap 4 — Games haven't been touched (PARTIALLY ADDRESSED 2026-05-18)
Craig's strategic direction was: games should be "more educational, nerdy." Current state after this session's work:
- Wordle now interest-linked (65% sub-pool bias toward selected interests) — DONE
- FightScreen rebranded ("Reef Throwdown") — DONE
- SlotsScreen — **Final call: CUT (2026-05-18 PM)**. Craig flipped twice, landed on cut. "Bad vibes" — the gambling-coded framing was the real problem, not the underlying task. Audit was right after all.
- Pong, Invaders, Kakuro, Rikudo — Craig wants ALL kept ("I like the games, even tho some are not educational please keep them all"). The earlier audit recommendation to convert or cut is overridden.
- No daily puzzle (intentional per Craig — infinite random)

**New direction**: keep growing the game collection; prefer nerdier/more educational angles when authoring new ones; don't cut existing games.

### Gap 5 — Onboarding is broken
Audit: `starterQuestions.ts` is entirely quant-finance Pirates content. A new 8-year-old or career changer's first question would be a Pirates Bayesian puzzle. The onboarding flow is broken for any non-quant user.

### Gap 6 — Discovery / skill paths absent
~200 tracks across tiers. How does a user find the right one?
- The age catalog organizes by tier+age but doesn't help with "I want to learn X"
- No skill paths (e.g., "complete these 5 courses to become a SOC analyst")
- No prerequisites, no recommended order, no "you should do this next"

For a **career-changer** product, this is fatal. A career changer wants a **journey**, not a question bank.

### Gap 7 — Progress / motivation loops weak
Mobile learning apps live on habit. Floe currently:
- Infinite random questions (no daily anchor)
- Streak / XP / level visibility unclear (need to inspect UI code)
- No completion certificates
- No social / competitive

Career-changer angle especially needs **progression structure**. A user training for the Series 87 wants to feel they're 30% there, not "answer infinite Q's forever."

### Gap 8 — Backlog vs capacity mismatch
We have 316 audit docs and a BACKLOG.md with 7+ hours of "make existing content better." None of it addresses Gaps 1-7. The catalog could keep improving for months without shipping.

## What I think is the next most important step

**Stop refactoring the catalog. Run the app.**

Specifically:
1. `npm run dev` and click through 3-4 real user journeys:
   - 8-year-old learns primary math
   - A US college student browses university physics
   - A career changer evaluates VC vs IB tracks
   - Someone tries to play Wordle and Sudoku
2. Document what's actually broken/clunky/missing
3. Compare against audit findings — which audit items survive contact with real experience? Which fade in importance?
4. Re-prioritize against real friction, not audit-doc abstraction

This is the most important step because:
- It re-grounds us in user experience
- It surfaces problems audits can't (rendering, navigation, flow)
- It may invalidate some BACKLOG.md priorities
- It may reveal new high-value work (onboarding fix, game wiring, progress loops)

## What comes after the play-test

In rough priority order, based on what I expect to find:

1. **Fix the onboarding flow** — replace Pirates starter Qs with audience-appropriate content
2. **Build at least one course-completion journey** — pick one career track (VC?), define a clear chapter progression, add a visible progress indicator
3. **Decide game philosophy** — cut the off-brand games (Slots, Fight as-is), commit to converting Pong/Invaders to educational OR cutting them too, ship interest-linked Wordle
4. **Course-by-course quality review** — this is what Craig asked about. But it should come AFTER 1-3, because:
   - Without onboarding, no user reaches the courses
   - Without progress structure, courses feel like infinite quizzes
   - With those in place, course quality matters most

Course-by-course review = months of work. It happens against a working app, not in isolation.

5. **Then iterate**: ship a closed beta, collect player feedback, prioritize content fixes against real usage, repeat.

## The course-by-course question that Craig asked

Craig specifically asked about going course-by-course, thinking about each question, course structure, chapters, game design.

My honest answer: **we're not ready for that yet**. The audits already did course-by-course at a structural level (316 docs). The next layer (per-question pedagogical review) is:
- **Too slow** to do for all ~200 tracks before any player feedback
- **Too noisy** without knowing which courses real users actually pick
- **Better done after launch** when we know which courses are loved/abandoned

What we CAN do well:
- Pick **one flagship course** (suggestion: `ventureCapitalRoadmap` — already gone through Wave 4, is a career-changer differentiator, Craig's worked example)
- Apply **full pedagogical review** to that one course: per-question scrutiny, chapter-progression check, capstone design, voice consistency, possible image/video adjuncts
- Use it as the **template** for what "great" looks like
- Then ship it as a beta-testable flagship, see what users actually do with it

That's the right unit of investment. Not all tracks; one done well.

## Recommended re-prioritized backlog (replacing the current 7-hour grind)

| Priority | Block | Estimated time |
|---|---|---|
| 1 | **Run the app, document what's broken, take screenshots** | 1-2h |
| 2 | **Fix onboarding starter content** (Pirates → audience-appropriate) | 30m-1h |
| 3 | **Sketch a progress / chapter-completion UX** even if static at first | 1-2h |
| 4 | **Decide game scope**: cut Slots; cut or convert Fight; commit to Wordle interest-link | 1-2h |
| 5 | **Pick flagship course (VC?)** and do full pedagogical review including chapters + capstone | 4-6h |
| 6 | **Ship to a few beta testers** and capture friction | external |
| 7 | THEN come back and chew through the BACKLOG.md against actual user signal | weeks |

## What's in flight as of writing

E1 (Univ Wave 4 consolidation) is still running. Let it complete. After it lands, **don't immediately queue more catalog work**. That's the discipline this review is asking for.

## One more honest thing

It is satisfying to crunch through agent-driven catalog work. The reports look impressive. The numbers go up (questions rewritten, files deleted). But satisfying ≠ valuable. The next 10 hours of catalog grinding would produce another impressive-sounding report and may move ship-readiness very little.

The next 1 hour of clicking through the app would tell us what to actually do.

# Prompt experiment — ledger (which prompt produced which question, and how it rated)

Goal: find the best prompts for generating questions. Each round, a set of distinct prompt *strategies* generates questions; we wire them into a lesson, rate them in-app (1–5 slider), then map ratings back to the prompt that produced each.

Ratings are read from the live app via the browser driver:
`localStorage 'floe-storage-v7' → state.questionQualityRatings[id].learnerRating`.

---

## Round 1 + 2 results (Backward Induction lesson) — see `quant-backward-induction-ratings-results.md`
- **Winner:** "Whiteboard Whisperer" (answer = the right setup/representation). Both its questions 4–5/5.
- Content signal: rich structural puzzles win; race-to-N / misère / egg-drop lose. Saved in `good-prompts.md`.

---

## Round 3 — 11 strategies × 2 lessons (Backward Induction + Optimization & Movement)

All 11 strategies share the same base context (course/audience/app) and the same **recipe** (answer = structural insight; rich structural puzzle; BAN race-to-N, misère/Nim, egg-drop, and any recycled puzzle). Only the strategy voice/framing differs — that is the variable being tested.

### The 11 strategies (full prompt text)
1. **whiteboard** — The Whiteboard Whisperer: the correct answer is the right clarifying question or representation/first move that makes the structure visible (tree, state label, recursion, complement, invariant); ideally not a number but a choice of setup. *(Proven round-1/2 winner; included as control.)*
2. **invariant** — The Invariant Hunter: built around a hidden invariant (conserved quantity, parity, colouring, monovariant); correct answer names/applies it; distractors are quantities that aren't actually preserved.
3. **elegant_aha** — The Olympiad Setter: a puzzle whose solution is a single surprising line; the correct answer IS that crisp insight; optimize for the "oh!" and a reusable theorem.
4. **brute_vs_elegant** — The Brute-vs-Elegant Discriminator: tempting answer is brute force (enumerate/simulate/full DP), correct answer is the elegant shortcut; one "correct-but-overkill" distractor.
5. **markets** — The Markets Strategist: a genuine markets/trading scenario whose solution is a structural insight (dominance, hedging, sequencing, allocation); desk-interviewer voice; distractors are real junior mistakes.
6. **sensei_cuttle** — Sensei Cuttle: a charming reef story wrapping a genuinely structural puzzle; ends with a named "reef rule."
7. **reason_from_goal** — The Reason-From-the-Goal Coach: anchor on the end/win condition; correct answer is the backward deduction; distractors are forward-reasoning traps.
8. **technique_namer** — The Technique Recognizer: correct answer names which tool unlocks it (work-backward / parity / exchange argument / pigeonhole / greedy-with-proof / extremal); teaches the whole family.
9. **socratic** — The Socratic Teacher: teaches by asking; a chain of pointed questions leads to the answer; distractors are premature conclusions; TEACH ME is the Socratic dialogue. *(Added at user request — they liked the Socratic style.)*
10. **kind_friend** — The Kind, Thoughtful Friend: warm, patient, no jargon-flexing; builds from a relatable everyday analogy; wants you to *understand*. *(Added at user request.)*
11. **thoughtful_brother** — The Thoughtful Older Sibling: invested, a little informal, cuts to the one idea that matters and shares it like a gift; conveys why it matters. *(Added at user request.)*

### Question-id mapping (filled after generation)
_Pending — see the table appended below once the 22 questions are wired in._

### Question-id mapping (round 3, wired 22 questions)

Each cell is `id — title (difficulty)`. To read ratings after a pass: pull `state.questionQualityRatings[id].learnerRating` from localStorage `floe-storage-v7` (via the browser driver), then look up the id here.

| Strategy | Lesson 1 (Backward Induction) | Lesson 2 (Optimization & Movement) |
|---|---|---|
| **whiteboard** | 19851 — The King Crawls Home (medium) | 19871 — The Jeep and the Endless Desert (hard) |
| **invariant** | 19852 — The Token and the Hidden Pairing (hard) | 19872 — How Far Can the Army March? (hard) |
| **elegant_aha** | 19853 — The Divisor Duel (medium) | 19873 — The Ant on the Stretching Rope (medium) |
| **brute_vs_elegant** | 19854 — The Divisor Duel (medium) | 19874 — The Tank That Knows Where to Start (medium) |
| **markets** | 19855 — Passing the Block (hard) | 19875 — One Pipe, Three Orders (medium) |
| **sensei_cuttle** | 19856 — The Poisoned Coral Bar (hard) | 19876 — The Lagoon Loop (medium) |
| **reason_from_goal** | 19857 — Corner the Cuttle (hard) | 19877 — The Tank That Must Never Empty (medium) |
| **technique_namer** | 19858 — The Divisor Duel (medium) | 19878 — Beads That Bounce on a Loop (medium) |
| **socratic** | 19859 — Race to a Thousand, the Hard Way (hard) | — (did not generate) |
| **kind_friend** | 19860 — The Pawn, the Board, and the Missing Corners (hard) | 19880 — The Round-the-Lake Fuel Run (medium) |
| **thoughtful_brother** | 19861 — The Queen in the Corner (hard) | 19881 — The Camel That Eats Its Cargo (hard) |

Notes:
- **socratic × Optimization & Movement did not generate** (the agent returned no structured output), so socratic has only a Lesson-1 question.
- **Convergence to watch:** three strategies (elegant_aha 19853, brute_vs_elegant 19854, technique_namer 19858) independently chose the same "Divisor Duel" puzzle — a natural experiment isolating the *framing* on identical content. Several Lesson-2 questions are fuel-around-a-loop / jeep-desert variants.
- Lesson sizes after wiring: Backward Induction = 23, Optimization & Movement = 16.

## Round 4 — 10 styles × 5 Brain-Teaser lessons (50 questions, ids 21001–21050)

Pool = 2 proven controls (whiteboard, invariant) + 8 in the new batch (elegant_shortcut, reframe_complement, one_line_proof, worst_case_adversary, counterintuitive_truth, and the 3 warm personas socratic/kind_friend/thoughtful_brother). Each style wrote one question per lesson. Generator had a hard format rule (no answer choices inside the prompt); wiring verified 0 embedded-option prompts and 0 bare-letter buttons.

| Style | Lateral | Weighing | Counting | Invariants | Logic |
|---|---|---|---|---|---|
| **whiteboard** | 21001 The Locker Room Lottery | 21011 Which Stacks Are Loaded? | 21021 The Million-Number Digit Hunt | 21031 Four Frogs on a Lily Pad Square | 21041 The Reef of Restless Chromatophores |
| **invariant** | 21002 Sensei Cuttle's Numbered Shell Hats | 21012 Six Bins, One Reading, Any Number Fake | 21022 The Tide-Pool Cuttlefish | 21032 Three Grasshoppers and the 2025th Jump | 21042 The Tide Pool That Won't Tile |
| **elegant_shortcut** | 21003 The Sommelier's Single Sip | 21013 The Merchant's Shattered Counterweight | 21023 The Climbing Numbers | 21033 The Grasshoppers and the Growing Square | 21043 The Dinner Where Nobody Agreed |
| **reframe_complement** | 21004 Three Divers, Two Shell Colors, One Shot at Freedom | 21014 The Tide Pool Ledger | 21024 The Reef-Code Beacon | 21034 The Knight on the Odd Board | 21044 The Dinner Party Handshake |
| **one_line_proof** | 21005 The Blindfolded Bartender's Invariant | 21015 Thirteen Coins, Three Weighings: The Off-By-One That Bites | 21025 Fifty-One in the Hundred | 21035 Four Grasshoppers, One Lattice | 21045 The Cuttlefish Colony |
| **worst_case_adversary** | 21006 The Warden's Rainbow Line | 21016 The Spiteful Quartermaster's Scale | 21026 The Adversary's Shuffle | 21036 The Soldiers Who Can Never Take the Ridge | 21046 The Host Who Wants Everyone Different |
| **counterintuitive_truth** | 21007 The Prisoners and the Boxes | 21017 The Bags That Confess in One Reading | 21027 Galileo's Dice: 11 vs 12 | 21037 The Knight That Can't Go Corner to Corner | 21047 The Truel: Why the Worst Shot Goes First |
| **socratic** | 21008 The Counterfeit Stack and the Single Weighing | 21018 The Spice Merchant's Four Weights | 21028 The Tide That Only Rises | 21038 Four Grasshoppers and the Shrinking Square | 21048 The Pearl That Can't Be Zero |
| **kind_friend** | 21009 The Token Foundry's Mystery Machines | 21019 The Pearl Diver's Five Chests | 21029 The Tournament That Books Its Own Courts | 21039 The Grasshoppers and the Square | 21049 The Party Where Everyone Shook a Different Number of Hands |
| **thoughtful_brother** | 21010 The Stacks That Confess in One Weighing | 21020 The Five Suspicious Stacks (One Reading, Any Subset Fake) | 21030 Six Points on a Circle (and the Pattern That Lies to You) | 21040 Four Grasshoppers and the Square That Got Away | 21050 The Number That Describes Itself |

Lessons after wiring: Lateral & Observability 15, Weighing & Information 15, Counting & Arithmetic 18, Invariants & Parity 15, Logic & Constraint 14 (10 new generated in each).

## Round 5 — best-10 prompt styles applied to 3 new courses (each a single rateable "Lesson 1")

Same 10 styles as round 4 (2 controls + 8). The quant "structural puzzle" recipe was swapped for a domain-judgment recipe per course. Each style wrote one question; ids map by style order (whiteboard, invariant, elegant_shortcut, reframe_complement, one_line_proof, worst_case_adversary, counterintuitive_truth, socratic, kind_friend, thoughtful_brother).

### Public Speaking (`publicSpeaking`) — chapter/subtopic "Speaking Foundations"

| id | style | title |
|---|---|---|
| 8490001 | whiteboard | Before You Open PowerPoint |
| 8490002 | invariant | The Why-Before-What Test |
| 8490003 | elegant_shortcut | The 90% You'll Lose by Tuesday |
| 8490004 | reframe_complement | The Question That Sounds Like an Attack |
| 8490005 | one_line_proof | The Thirty-Second Apology Tax |
| 8490006 | worst_case_adversary | The Loaded Question in the Budget Review |
| 8490007 | counterintuitive_truth | The Two-Second Eternity |
| 8490008 | socratic | The First Sentence of a Budget Pitch |
| 8490009 | kind_friend | The First Thirty Seconds at the All-Hands |
| 8490010 | thoughtful_brother | Designing for the Room That's Actually There |

### Home Plumbing (`plumbingBasics`) — chapter/subtopic "Plumbing Foundations"

| id | style | title |
|---|---|---|
| 8491001 | whiteboard | The Tap That Tells On the Whole House |
| 8491002 | invariant | The Gurgle That Steals the Seal |
| 8491003 | elegant_shortcut | The Toilet That Won't Stop Hissing |
| 8491004 | reframe_complement | The Sink That Only Gurgles on Cue |
| 8491005 | one_line_proof | The Bang After the Washer Shuts Off |
| 8491006 | worst_case_adversary | The Laundry Room Geyser |
| 8491007 | counterintuitive_truth | The Bang After the Washer |
| 8491008 | socratic | The Bang After the Washer Fills |
| 8491009 | kind_friend | The Gurgling Bathroom Sink |
| 8491010 | thoughtful_brother | The One Valve That Stops Everything |

### CFA Level I Ethics (`cfaLevelOne`) — chapter/subtopic "Ethics Reflexes"

| id | style | title |
|---|---|---|
| 8492001 | whiteboard | The Spouse's Slice of the Limited Offering |
| 8492002 | invariant | Marlowe Capital IPO allocation |
| 8492003 | elegant_shortcut | The hot IPO and the spouse's account |
| 8492004 | reframe_complement | The Sister's Account in the Blackout Window |
| 8492005 | one_line_proof | The spouse's account and the pending block order |
| 8492006 | worst_case_adversary | The oversubscribed placement and the spouse's account |
| 8492007 | counterintuitive_truth | The pre-cleared family account that still front-runs |
| 8492008 | socratic | The Pending Order and the Spouse's Account |
| 8492009 | kind_friend | Marlowe's daughter and the pending client buy |
| 8492010 | thoughtful_brother | The Spouse's Account and the Pending Block Order |

## Round 5 FIX — CFA + Plumbing regenerated (convergence fix)

Problem: giving all 10 styles the SAME narrow topic made them converge on one scenario (CFA: all Priority-of-Transactions; Plumbing: water-hammer/gurgle ×3 each). Fix: **pre-assign each style a different broad topic** so they cannot collapse. Same ids reused.

### CFA Level I Ethics (v2 — distinct topics)

| id | style | title |
|---|---|---|
| 8492001 | whiteboard | Marlowe's Cross-Border Disclosure Rule |
| 8492002 | invariant | The Sponsored Report and the Warrant |
| 8492003 | elegant_shortcut | Mosaic vs. the one tainted fact |
| 8492004 | reframe_complement | The Conviction Thread |
| 8492005 | one_line_proof | Whose proxy is it anyway? |
| 8492006 | worst_case_adversary | The Partial Fill and the Anchor Client |
| 8492007 | counterintuitive_truth | The Standalone-Risk Reflex |
| 8492008 | socratic | The "Verified" Composite |
| 8492009 | kind_friend | The Spreadsheet You Built |
| 8492010 | thoughtful_brother | The referral that pays you back |

### Home Plumbing (v2 — distinct topics)

| id | style | title |
|---|---|---|
| 8491001 | whiteboard | Forceful Faucet, Banging Pipes |
| 8491002 | invariant | The Cushion That Filled Up |
| 8491003 | elegant_shortcut | Just This One Toilet |
| 8491004 | reframe_complement | The Shrinking Hot Shower |
| 8491005 | one_line_proof | Charging the New Expansion Tank |
| 8491006 | worst_case_adversary | The Tank That Won't Stop Filling |
| 8491007 | counterintuitive_truth | The Drip You Make Worse by Fixing It |
| 8491008 | socratic | Where the Old Pipe Rots First |
| 8491009 | kind_friend | The Toilet That Talks to the Shower |
| 8491010 | thoughtful_brother | The Hose Left in the Bucket |

## Round 6 — CFA Level II Ethics (cfaLevelTwo), chapter/subtopic "CFA L2 Ethics", ids 8493001-10

10 styles, each a DISTINCT broad ethics Standard; soft 80-word prompts (avg 72w).

| id | style | title |
|---|---|---|
| 8493001 | whiteboard | The trade blotter that doesn't add up |
| 8493002 | invariant | Whose asset is the commission? |
| 8493003 | elegant_shortcut | The client's performance bonus |
| 8493004 | reframe_complement | The "harmless" message-board post |
| 8493005 | one_line_proof | The law of locality clause |
| 8493006 | worst_case_adversary | The IPO the CIO wants steered |
| 8493007 | counterintuitive_truth | What "GIPS-verified" actually buys you |
| 8493008 | socratic | The borrowed regression, lightly seasoned |
| 8493009 | kind_friend | The black-box momentum model |
| 8493010 | thoughtful_brother | The board seat the clients never heard about |

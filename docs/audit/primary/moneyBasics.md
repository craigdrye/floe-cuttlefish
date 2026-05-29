# Audit: moneyBasics

**Syllabus**: [`src/data/syllabi/primary/money_basics.md`](../../../src/data/syllabi/primary/money_basics.md)
**Track id**: `moneyBasics` (note: syllabus header lists `col-money-basics` but the wiring in `primary.ts` line 117 uses `moneyBasics`)
**Tier**: primary (Tech & Life, Year 1, ages 5-6)
**Status**: track entry **missing** from `ageCatalog/primary.ts` — no `TrackSeed` exists with id `moneyBasics`. Catalog references it in `primaryCollectionGroups` only by title list.
**Region**: untagged but content is **US-only** — every existing question uses USD ($), pennies, dimes, quarters, ten-dollar bills.

## Coverage map (syllabus → questions)

Single source: `openTriviaForKidsQuestionsByTrack.moneyBasics` (`openTriviaForKidsImported.ts`) — **9 questions, all "Money Word Problems"**. No `topUp()` call in `primary.ts` line 117, so no generator content is added.

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. What Money Does (buy, sell, pay, exchange) | ❌ | No conceptual buy/sell/pay content |
| 2. Coins, Notes, and Values (worth, more/less) | ❌ partial | Stephanie quarter-for-dime question touches this implicitly |
| 3. Counting Small Amounts | ✅ partial | Casey's $39 total, all-friends $25.00 total |
| 4. Needs and Wants | ❌ | No needs/wants sort, no choice prompts |
| 5. Saving for Later | ❌ | No save/wait/goal content |
| 6. Playing Shop | ✅ partial | Yo-yo and Mets-ticket purchase math |
| 7. Change and Giving | ✅ partial | Refrigerator-change, bookstore-change problems |
| 8. Cards, Phones, and Digital Money | ❌ | No card, tap, account, adult-help content |

**Critical findings**:
1. **No dedicated content** beyond 9 imported word-problems (May 2026 audit flag confirmed).
2. **Audience mismatch**: syllabus is age 5–6. Sample: *"If Joe had $900 in life savings and bought a refrigerator for $600..."* — targets 9–11 year olds.
3. **Currency / region**: 100% USD. Non-US children confused by pennies/dimes/quarters.
4. **TrackSeed missing**: no `TrackSeed` for `moneyBasics` exists in `ageCatalog/primary.ts`. The wiring attaches questions to a key with no published track metadata.

## Per-file recommendations

| File | moneyBasics Q's | Bucket | Reason |
|---|---|---|---|
| [`openTriviaForKidsImported.ts`](../../../src/data/questionCatalog/openTriviaForKidsImported.ts) (moneyBasics entry) | 9 | **DELETE** (or **MERGE → arithmetic / class2Math**) | All 9 are USD arithmetic, age-inappropriate for the Year-1 syllabus, and every wrong answer uses the identical `DEFAULT_FLAW` template. Math is salvageable for a US-tagged Class 2/3 money sub-section but does not belong on a 5–6-year-old financial-habits course. |
| (no other source) | 0 | **GAP** | All 8 syllabus chapters need fresh hand-authored content using the `primaryBuilders.ts` triple shape, age 5–6 prompts (coin sort, needs vs wants, save jar, play shop, tap-the-card), currency-agnostic framing. |

## Open actions (priority order)

1. **Add a `TrackSeed` entry** in `ageCatalog/primary.ts` for `moneyBasics` (Tech & Life, primary, status `soon` until content lands).
2. **Author ~30 hand-authored questions** across the 8 chapters, age 5–6 voice, using `primaryBuilders.ts` as the model.
3. **Decide currency strategy**: per-region authoring (US/UK/AU/SG) or generic "coin / note / token" framing.
4. **Delete or relocate the 9 OpenTrivia word problems**. If kept, MERGE into `arithmetic` or `class2Math` with US tag.
5. **Add `region: 'US'` if any current USD content is kept**.

## Estimated effort

- TrackSeed addition: ~15 min
- Author 30 age-appropriate questions: ~10 hours
- Currency strategy decision + per-region duplication if needed: ~2 hours design, ~4 hours per region
- OpenTrivia relocation: ~30 min

**~2 working days for a US-only launch; longer if multi-region from day one.**

## Notes for next auditor

The mismatch between catalog (`moneyBasics`), syllabus header (`col-money-basics`), and missing `TrackSeed` indicates this track was wired before the syllabus was written. The entry is effectively a placeholder. Children at 5–6 should meet money through concrete prompts, not USD subtraction word problems.

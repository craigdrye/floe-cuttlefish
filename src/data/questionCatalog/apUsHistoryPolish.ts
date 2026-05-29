// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the AP US History track (questions in schoolAssessmentUsHistoryQuestions).
//
// AP_USHISTORY_SUB_TOPICS groups questions into lesson-shaped clusters that
// follow the AP USH curriculum periods (Period 1: 1491-1607, Period 2: 1607-1754,
// Period 3: 1754-1800, Period 4: 1800-1848, Period 5: 1844-1877, Period 6:
// 1865-1898, Period 7: 1890-1945, Period 8: 1945-1980, Period 9: 1980-present).
// Within each period, clusters reflect the natural lesson shape — colonial
// political culture, revolutionary crises, regional economies, Jacksonian
// democracy, and so on.
//
// AP_USHISTORY_MENTOR_HINTS overrides the generic scaffold hint with a one-line
// second-person nudge in the voice of an AP US History teacher with strong
// primary-source instincts. Each hint names the period, the event, the
// cause-and-effect mechanism, or the historiographical lens — but never gives
// the answer.
//
// AP_USHISTORY_CORRECT_SHORTENED trims `correct` strings flagged by the
// length-heuristic audit (correct ≥1.8x longer than the longest wrong AND ≥20
// chars longer). Trimmed explanatory clauses are reattached via `lessonAddendum`
// so no information is lost.

export const AP_USHISTORY_SUB_TOPICS: Record<string, number[]> = {
  // -------------------- Period 2: Colonial America (1607-1754) --------------------
  // Two questions sit inside the long colonial century: one on the political
  // culture that distance from Britain produced, one on the regional economies
  // that determined where colonists settled.
  'Colonial Political Culture': [
    464101,
  ],
  'Colonial Regional Economies': [
    464103,
  ],

  // -------------------- Period 3: Revolution & Constitution (1754-1800) -----------
  // The imperial crisis cluster — taxes, coercive acts, and the colonial
  // pivot from petitioning to unified political resistance.
  'Imperial Crisis & Resistance': [
    464102,
  ],

  // -------------------- Period 4: Antebellum & Manifest Destiny (1800-1848) -------
  // The early-republic transformation: factory production reshapes the northern
  // economy while Jacksonian democracy reshapes the party system.
  'Market Revolution & Industrial Takeoff': [
    464104,
  ],
  'Jacksonian Democracy & Party Formation': [
    464105,
  ],
}

// ---------------------------------------------------------------------------
// AP_USHISTORY_MENTOR_HINTS — second-person nudges in the voice of an AP US
// History teacher. Each hint names a period, event, mechanism, or lens without
// supplying the answer itself.
// ---------------------------------------------------------------------------

export const AP_USHISTORY_MENTOR_HINTS: Record<number, string> = {
  // ---------- Period 2: Colonial America (1607-1754) ----------
  464101: 'Three-thousand-mile Atlantic crossings took weeks. Ask what colonists had to decide locally because London simply could not answer in time — that habit is the period\'s political legacy.',
  464103: 'Climate and soil drove colonial labor systems. Early-1700s tobacco needs warm growing seasons and Chesapeake-style plantations — match the crop to the latitude.',

  // ---------- Period 3: Revolution & Constitution (1754-1800) ----------
  464102: 'The Intolerable Acts (1774) targeted Massachusetts after the Boston Tea Party. Track how colonial response escalated from local protest to intercolonial coordination — that pivot is the whole story.',

  // ---------- Period 4: Antebellum & Manifest Destiny (1800-1848) ----------
  464104: 'The factory system substitutes machines and concentrated labor for household production. Ask what mechanized manufacturing did to output before asking about its second-order effects on trade or politics.',
  464105: 'The Democratic Party crystallized around the 1828 election and Jacksonian coalition-building. Anchor on the figure whose name and base define the party\'s founding moment.',
}

// ---------------------------------------------------------------------------
// AP_USHISTORY_CORRECT_SHORTENED — questions where the correct answer was
// substantially longer than the longest distractor. After audit, no AP USH
// questions in this bank crossed the 1.8x length threshold, so this map is
// intentionally empty. Future imports can populate it as needed.
// ---------------------------------------------------------------------------

export const AP_USHISTORY_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {}

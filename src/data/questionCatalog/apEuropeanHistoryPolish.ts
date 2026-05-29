// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the AP European History track (8 hand-authored questions across the
// canonical AP Euro periodisation plus an exam-studio chapter).
//
// AP_EURHISTORY_SUB_TOPICS groups questions into AP-period clusters
// (1450-1648, 1648-1815, 1815-1914, 1914-present, plus exam studio).
//
// AP_EURHISTORY_MENTOR_HINTS overrides the generic scaffold with a one-line
// second-person nudge in an AP Euro teacher voice — name the historiographical
// move or the specific cause without giving the answer.
//
// AP_EURHISTORY_CORRECT_SHORTENED trims `correct` strings flagged by the
// length-heuristic audit (correct ~1.8x longer than the longest wrong AND
// ≥20 chars longer). Trimmed clauses are reattached via `lessonAddendum`
// so no AP-relevant detail is lost.

export const AP_EURHISTORY_SUB_TOPICS: Record<string, number[]> = {
  // -------------------- Period 1: 1450-1648 (Renaissance, Reformation, Religious Wars) --------------------
  'Print, Renaissance, and Early Modern Tools': [
    482001,
  ],
  'Reformation and Confessional State-Building': [
    482002,
  ],

  // -------------------- Period 2: 1648-1815 (Absolutism, Enlightenment, French Revolution) --------------------
  'Absolutism vs Constitutionalism': [
    482003,
  ],
  'Revolution, Napoleon, and the Code': [
    482004,
  ],

  // -------------------- Period 3: 1815-1914 (Industrialisation, Nationalism, Imperialism) --------------------
  'Why Britain First: Industrial Causation': [
    482005,
  ],
  'Nationalism, Realpolitik, and Unification': [
    482006,
  ],

  // -------------------- Period 4: 1914-Present (World Wars, Cold War, EU) --------------------
  'Cold War Origins and Recovery': [
    482007,
  ],

  // -------------------- Exam Studio --------------------
  'DBQ and LEQ Craft': [
    482008,
  ],
}

export const AP_EURHISTORY_MENTOR_HINTS: Record<number, string> = {
  // ---------- Period 1: 1450-1648 ----------
  482001: 'Print is a scaling technology — ask what it multiplied (vernacular Bibles, scientific letters), not what it replaced.',
  482002: 'Westphalia is the canonical marker of sovereign territoriality, not toleration. Confessional choice still tracked the ruler.',

  // ---------- Period 2: 1648-1815 ----------
  482003: '1688-89 moves England away from Stuart absolutist claims toward parliamentary supremacy. Read it as the constitutional fork from Louis XIV.',
  482004: 'The Code is the Enlightenment-meets-Bonapartism complexity argument: legal equality for male citizens, narrower rights for married women, slavery restored in 1802.',

  // ---------- Period 3: 1815-1914 ----------
  482005: 'Strong AP causation stacks geography, capital, institutions, and prior agricultural change. Single-cause stories (one inventor, one resource) lose complexity credit.',
  482006: 'Realpolitik names a method — pragmatic, interest-driven — not an aim. Pair it with Bismarck rejecting 1848 liberalism.',

  // ---------- Period 4: 1914-Present ----------
  482007: 'Marshall is the three-part Cold War answer: recovery, anti-communist political stabilisation, and a market for US exports. No US occupation, no Soviet participation.',

  // ---------- Exam Studio ----------
  482008: 'Outside evidence is one specific, period-appropriate fact that is not in the packet. Name a thing, not a trend.',
}

// AP_EURHISTORY_CORRECT_SHORTENED — questions where the correct answer was
// substantially longer than the longest distractor. Each entry shortens
// `correct` to a punchier line and pushes the trimmed AP-essay detail into
// `lessonAddendum`.

export const AP_EURHISTORY_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  482003: {
    newCorrect: 'Established that the monarch ruled with Parliament under a Bill of Rights — a constitutional, not absolutist, trajectory.',
    lessonAddendum: 'The 1689 settlement anchored parliamentary supremacy and a Protestant succession, contrasting deliberately with the absolutist path of Louis XIV. AP essays should pair 1688-89 with the French model to make the constitutional fork visible.',
  },
  482005: {
    newCorrect: 'A bundle of coal near water, agricultural gains, Atlantic-trade capital, flexible labour, and patent-protected innovation.',
    lessonAddendum: 'The strongest AP causation stacks geography (coal, navigable water), capital (Atlantic-trade profits and banking), institutions (patents, property law, relatively flexible wage labour) and prior agricultural productivity. Single-cause stories — one inventor, one resource — lose complexity credit.',
  },
  482006: {
    newCorrect: 'Pursuing concrete national-interest goals through whatever practical means available, rather than from fixed ideology.',
    lessonAddendum: 'AP responses should connect Realpolitik to specific Bismarckian moves: the wars of unification (1864, 1866, 1870-71), the post-1871 alliance system, the Kulturkampf, and the explicit rejection of 1848 liberal-nationalism.',
  },
  482007: {
    newCorrect: 'To accelerate European recovery, stabilise democracies vulnerable to communist parties, and build a market for US exports.',
    lessonAddendum: 'The Plan moved aid through European recipient governments rather than US occupation, and the Soviets rejected participation — deepening the East-West divide. AP Cold War essays should keep Marshall aid separate from later NATO defence planning.',
  },
}

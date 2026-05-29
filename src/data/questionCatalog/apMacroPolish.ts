// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the AP Macroeconomics track (`highMacroeconomicsHandBankQuestions`).
//
// AP_MACRO_SUB_TOPICS clusters the 34 macro items into the six AP Macro
// units (CED 2024-25): Unit 1 Basic Economic Concepts; Unit 2 Economic
// Indicators and the Business Cycle; Unit 3 National Income and Price
// Determination; Unit 4 Financial Sector; Unit 5 Long-Run Consequences of
// Stabilization Policies; Unit 6 Open Economy.
//
// AP_MACRO_MENTOR_HINTS overrides the generic scaffold hint with a one-line
// second-person nudge in the voice of an AP Macro teacher — naming the
// model (AD/AS, money market, Phillips, Solow, Mundell-Fleming, loanable
// funds) or the transmission channel without giving the answer.
//
// AP_MACRO_CORRECT_SHORTENED trims `correct` strings where the answer ran
// substantially longer than the longest wrong, pushing the trimmed
// explanatory detail into `lessonAddendum` so no information is lost.

export const AP_MACRO_SUB_TOPICS: Record<string, number[]> = {
  // -------------------- Unit 2: Economic Indicators and the Business Cycle --------------------
  // (GDP, unemployment, inflation, CPI vs PPI vs GDP deflator, business cycle)
  'GDP & National Accounts': [
    16201, 16205, 16209, 16210,
  ],
  'Inflation & Price Level': [
    16202, 16207,
  ],
  'Unemployment & Business Cycle': [
    16204, 16206, 16208,
  ],

  // -------------------- Unit 3: National Income and Price Determination --------------------
  // (AD/AS, output gap, multipliers, fiscal policy)
  'Fiscal Policy Tools': [
    16203, 16214,
  ],
  'Multipliers & AD': [
    16211,
  ],
  'Ricardian Equivalence & AD Offsets': [
    16223, 16810,
  ],

  // -------------------- Unit 4: Financial Sector --------------------
  // (money supply, banking, Fed, monetary policy transmission)
  'Money Market & Interest Rates': [
    16212, 16224,
  ],
  'Banking & Money Multiplier': [
    16217, 16809,
  ],
  'Quantity Theory & QE': [
    16221, 16806,
  ],

  // -------------------- Unit 5: Long-Run Consequences of Stabilization Policies --------------------
  // (Phillips curve, crowding out, deficit/debt, long-run growth)
  'Phillips Curve': [
    16215, 16805,
  ],
  'Crowding Out & Loanable Funds': [
    16216, 16802,
  ],
  'Long-Run Growth (Solow)': [
    16222, 16803,
  ],
  'Policy Rules & RBC': [
    16801, 16807,
  ],

  // -------------------- Unit 6: Open Economy --------------------
  // (BoP, exchange rates, net exports, comparative advantage, trilemma)
  'Comparative Advantage & Trade': [
    16213,
  ],
  'Exchange Rates & Capital Flows': [
    16218, 16804, 16808,
  ],
  'Balance of Payments & Trilemma': [
    16219, 16220,
  ],
}

export const AP_MACRO_MENTOR_HINTS: Record<number, string> = {
  // ---------- Unit 2: Economic Indicators and the Business Cycle ----------
  16201: 'GDP is a flow of final-goods production. Strip out anything that is not a newly produced good or service this year.',
  16202: 'Inflation is the change in the aggregate price level — measured by CPI, PPI, or the GDP deflator. Not a single price.',
  16204: 'A recession is a broad fall in real output, employment, and income — not one firm and not a total shutdown.',
  16205: 'Y = C + I + G + NX. G captures government purchases of goods and services; transfer payments do not count.',
  16206: 'AP categorizes unemployment as frictional, structural, or cyclical. Job search and graduates fall under frictional.',
  16207: 'Inflation is a sustained rise in the overall price level. Distinguish the definition from its consequences and causes.',
  16208: 'Business cycle phases: peak, recession, trough, expansion. The turning point at the bottom has a name.',
  16209: 'Circular flow: injections (I, G, X) add to spending; leakages (S, T, M) pull out. Match the pairs.',
  16210: 'Use the Fisher approximation: real growth ≈ nominal growth − inflation. Subtract the deflator from nominal GDP growth.',

  // ---------- Unit 3: National Income and Price Determination ----------
  16203: 'Fiscal policy = G and T. Distinguish it from monetary policy (the Fed) and from non-policy variables.',
  16211: 'Spending multiplier = 1 / (1 − MPC) = 1 / MPS. Apply the formula, do not invert it.',
  16214: 'Discretionary fiscal policy requires new legislation. Automatic stabilizers move with the cycle without new law.',
  16223: 'Ricardian equivalence: forward-looking consumers save the tax cut because they anticipate higher future taxes.',
  16810: 'Same Ricardian logic — the household sees lifetime wealth as unchanged and adjusts saving, not consumption.',

  // ---------- Unit 4: Financial Sector ----------
  16212: 'On the MS/MD diagram, an increase in MS shifts supply right. The nominal rate falls until the market clears.',
  16217: 'Actual money multiplier = 1 / (required + excess + cash drain). Add all three leakages in the denominator.',
  16221: 'Quantity theory MV = PY. If V and Y are fixed, %ΔM = %ΔP. Money is neutral in the long run.',
  16224: 'In the abundant-reserves framework, the Fed steers the funds rate using IORB (and ON RRP) — not daily OMOs.',
  16806: 'QE buys long-duration assets to push down long-term rates once the policy rate is at the zero lower bound.',
  16809: 'A higher currency-deposit ratio shrinks the multiplier because cash held by the public is not loanable reserves.',

  // ---------- Unit 5: Long-Run Consequences of Stabilization Policies ----------
  16215: 'On the Phillips curve, a supply shock shifts the SRPC right — higher inflation and higher unemployment together.',
  16216: 'In the loanable funds market, deficit borrowing shifts demand right. The real rate rises and private I falls.',
  16222: 'In Solow, capital deepening hits diminishing returns. Only technological progress drives long-run per-capita growth.',
  16801: 'Taylor rule responds to two gaps: inflation vs target and output vs potential. Both feed the rate setting.',
  16802: 'Trace the channel: deficit → loanable funds demand right → real rate up → private investment down. That is crowding out.',
  16803: 'Solow steady state: savings sets the level, but only A — technology — sets the long-run growth rate.',
  16805: 'LRPC is vertical at the natural rate because expectations fully adjust. Money is neutral in the long run.',
  16807: 'Real Business Cycle theory blames technology and productivity shocks — supply-side, not aggregate demand.',

  // ---------- Unit 6: Open Economy ----------
  16213: 'Comparative advantage is about opportunity cost, not absolute productivity. Compute the trade-off ratios first.',
  16218: 'Higher US real rates pull capital inward. Demand for dollars shifts right, and the dollar appreciates.',
  16219: 'Balance of payments identity: CA + KA + FA = 0. A current account deficit must be financed by a capital/financial surplus.',
  16220: 'The Mundell-Fleming trilemma: fixed exchange rate, free capital, independent monetary policy — pick any two.',
  16804: 'Mundell-Fleming with floating rates and perfect capital mobility — fiscal expansion appreciates the currency and crowds out NX.',
  16808: 'Absolute PPP rests on the Law of One Price across a common basket. The real exchange rate equals one when it holds.',
}

// AP_MACRO_CORRECT_SHORTENED — questions where the correct answer ran
// substantially longer than the longest distractor. The trimmed clause is
// reattached via `lessonAddendum` so no teaching content is lost.

export const AP_MACRO_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  16804: {
    newCorrect: 'Cause the currency to appreciate, crowding out net exports and leaving income roughly unchanged.',
    lessonAddendum: 'In the Mundell-Fleming small-open-economy model with floating rates and perfect capital mobility, fiscal expansion pulls capital in, appreciates the currency, and the fall in net exports offsets the original spending stimulus. The exchange rate channel — not the multiplier — does the absorbing work.',
  },
  16806: {
    newCorrect: 'It buys long-term securities to push down long-term rates once short rates are at the zero lower bound.',
    lessonAddendum: 'Traditional open market operations target the overnight federal funds rate via short-term Treasury purchases. QE is qualitatively different: large-scale purchases of long-duration assets (Treasuries and MBS) to flatten the yield curve and ease financial conditions when conventional policy has run out of room.',
  },
}

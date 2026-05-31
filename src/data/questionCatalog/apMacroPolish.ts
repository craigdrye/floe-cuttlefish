// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the AP Macroeconomics track (`highMacroeconomicsHandBankQuestions`).
//
// AP_MACRO_SUB_TOPICS clusters the 34 macro items into the six AP Macro
// units (CED 2024-25): Unit 1 Basic Economic Concepts; Unit 2 Economic
// Indicators and the Business Cycle; Unit 3 National Income and Price
// Determination; Unit 4 Financial Sector; Unit 5 Long-Run Consequences of
// Stabilization Policies; Unit 6 Open Economy.
//
// AP_MACRO_MENTOR_HINTS overrides the generic scaffold hint with a learner-facing
// AP Macro nudge: name the model (AD/AS, money market, Phillips, Solow,
// Mundell-Fleming, loanable funds) or transmission channel and point the learner
// toward the reasoning without giving away the answer.
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
  16201: 'GDP is a flow measure of production during a period of time. Look for newly produced final goods and services, and exclude assets, resale, weather, and other things that are not current output.',
  16202: 'Inflation describes the overall price level, not one unusually expensive item. Think of indexes like CPI or the GDP deflator, which summarize many prices across the economy.',
  16204: 'A recession is a broad macroeconomic downturn, not a single business struggling or the whole economy disappearing forever. Look for language about economy-wide decline in output, income, or employment.',
  16205: 'Use the expenditure identity Y = C + I + G + NX. For G, include government purchases that buy current goods and services, but leave out transfers because they only move income from one group to another.',
  16206: 'Sort unemployment by cause. Frictional unemployment comes from normal search and matching, structural from mismatched skills or locations, and cyclical from weak demand during downturns.',
  16207: 'Keep the definition of inflation separate from its causes and effects. The definition is about the sustained movement of the overall price level over time, while purchasing power and money growth are related ideas.',
  16208: 'The business cycle has phases and turning points. When activity stops falling and begins rising, identify the named turning point rather than the whole period of growth that follows.',
  16209: 'In the circular flow model, injections add spending to the domestic income stream while leakages pull spending out. Match I with saving, G with taxes, and exports with imports before choosing.',
  16210: 'Real GDP growth removes inflation from nominal GDP growth. Use the approximation that real growth is nominal growth minus the growth in the price level.',

  // ---------- Unit 3: National Income and Price Determination ----------
  16203: 'Fiscal policy is the government budget side of stabilization policy. Ask whether the choice changes government purchases or taxes, as opposed to the central bank changing interest rates or the money supply.',
  16211: 'The spending multiplier depends on the fraction of each extra dollar that gets re-spent. Convert MPC into MPS first, then use multiplier = 1 / MPS.',
  16214: 'Discretionary fiscal policy requires an active policy choice, usually a new law changing spending or taxes. Automatic stabilizers respond to the business cycle without a new vote.',
  16223: 'Ricardian equivalence assumes forward-looking households connect today\'s debt-financed tax cuts with tomorrow\'s taxes. The key reasoning step is whether current disposable income actually changes lifetime wealth.',
  16810: 'Use the same Ricardian logic, but focus on household behavior. If people expect the government debt to become future tax bills, ask whether they treat the tax cut as spendable income or set it aside.',

  // ---------- Unit 4: Financial Sector ----------
  16212: 'Use the money market graph with the nominal interest rate as the price of holding money. When the central bank increases money supply, shift the vertical supply curve and find the new market-clearing rate.',
  16217: 'The simple money multiplier works only when required reserves are the only leakage. Here, excess reserves and cash held by the public also block deposit creation, so add all leakage ratios before taking the reciprocal.',
  16221: 'Quantity theory uses MV = PY. If velocity and real output are fixed, a change in money mainly shows up in nominal variables, so compare the percentage change in M with the percentage change in P.',
  16224: 'In an abundant-reserves system, banks already hold plenty of reserves, so tiny daily reserve adjustments are not the main steering wheel. Think about the administered rate the Fed pays on reserve balances as the floor for the federal funds market.',
  16806: 'Quantitative easing is used when the usual short-term policy rate has little room left to fall. It works through large-scale central bank purchases of longer-term assets, aiming to affect longer-term yields and financial conditions.',
  16809: 'The money multiplier depends on how much money stays inside banks as deposits and reserves. When the public holds more currency, banks have less deposit funding to support loans and multiple rounds of money creation.',

  // ---------- Unit 5: Long-Run Consequences of Stabilization Policies ----------
  16215: 'The short-run Phillips curve shows a tradeoff unless something shifts the whole curve. Stagflation is the clue that inflation and unemployment are moving in the same bad direction, which usually points to a supply shock or changed expectations.',
  16216: 'Crowding out runs through the loanable funds market. Government deficits increase borrowing demand, which changes the real interest rate and affects firms\' willingness to finance private investment projects.',
  16222: 'In the Solow model, adding more capital per worker eventually runs into diminishing marginal returns. Sustained growth in output per person requires something that keeps making workers more productive over time.',
  16801: 'The Taylor Rule is a monetary policy reaction function, not a fiscal rule. It tells the central bank how to adjust the nominal interest rate when inflation differs from target or output differs from potential.',
  16802: 'Trace the financial-market channel step by step. Deficit spending raises government borrowing in loanable funds, and the resulting rate pressure makes some private investment no longer worthwhile.',
  16803: 'In Solow steady state, savings and capital accumulation can raise the level of income per worker, but diminishing returns stop them from creating permanent per-capita growth. Look for the factor that shifts productivity itself.',
  16805: 'The long-run Phillips curve is vertical because expected inflation eventually catches up with actual inflation. Once expectations adjust, unemployment returns to the natural rate even if inflation is higher or lower.',
  16807: 'Real Business Cycle theory explains fluctuations from the supply side. It emphasizes real shocks to technology or productivity rather than demand failures, sticky wages, or central bank mistakes.',

  // ---------- Unit 6: Open Economy ----------
  16213: 'Comparative advantage is about relative sacrifice, not who uses fewer total resources. Translate production choices into opportunity costs and compare the tradeoffs between countries.',
  16218: 'Exchange rates respond to capital flows as well as trade flows. If one country offers a higher real return, trace how foreign investors must acquire that country\'s currency to buy its assets.',
  16219: 'The balance of payments is an accounting identity: money flowing out through one account must be offset by money flowing in through another. A current account gap is therefore matched by the capital/financial side, not by unrelated indicators like inflation.',
  16220: 'The open-economy trilemma says a country cannot simultaneously maintain a fixed exchange rate, free capital mobility, and independent monetary policy. If an option is not one of those three policy goals, it is outside the trilemma.',
  16804: 'Use the Mundell-Fleming model for a small open economy with floating exchange rates and perfect capital mobility. Expansionary fiscal policy can pull in capital, move the exchange rate, and offset the demand effect through net exports.',
  16808: 'Absolute purchasing power parity comes from the Law of One Price applied to a common basket of goods. When it holds exactly, goods-market arbitrage aligns purchasing power across currencies.',
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

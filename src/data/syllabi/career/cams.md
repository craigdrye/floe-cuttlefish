# Certified Anti-Money Laundering Specialist (CAMS): The Risk-Scorer Reading Wires for the Public
**ID**: `cams` · **Discipline**: Anti-Money Laundering / Financial Crime Compliance

## Course Aim
A CAMS-certified AML officer is the person sitting between a payment system and the public. The job is risk scoring (who is this customer, how do they make money, why this transaction?), transaction monitoring (which alerts are noise, which are typology hits?), sanctions screening (does this name match an SDN, an SSI, or a generic false positive?), SAR/STR filing (a narrative an FIU can actually use), and program governance (training, audit, the right escalation path) — under the FATF 40 Recommendations and a patchwork of national laws (US BSA + USA PATRIOT Act + AMLA 2020, EU AMLD 4/5/6, UK MLR 2017, and dozens more). The CAMS exam tests the whole stack because the role demands it.

The CAMS exam (ACAMS, 120 multiple-choice items, 3.5 hours, scaled passing score around 75) follows the current Study Guide (6th Edition). The four domains weight roughly: Risks and Methods 25-30%, Compliance Standards 30-35%, AML Compliance Program 30-35%, Investigations 25-30%. Pacing ~1.75 minutes per item — never skip; mark and return only with deliberate triage.

This syllabus trains the four habits that distinguish a working AML officer from a checklist filler: typology recognition (trade-based, hawala, real estate, virtual assets, NPO abuse, beneficial-ownership obfuscation, sanctions evasion), risk-based-approach thinking (calibrated to customer/product/geography/channel, not blanket de-risking), regulator-fluent communication (writing a SAR an FIU will read, talking to an examiner without panic, sharing information lawfully via 314(b) or Joint Money Laundering Intelligence Taskforces), and the moral steadiness to make a defensible recommendation under commercial pressure.

The goal is a working AML toolkit and a passing score: FATF-fluent risk thinking, comparative literacy across BSA and AMLD, calm sanctions practice (OFAC SDN/SSI, EU consolidated list, UK OFSI, UN 1267/1373/1718/2231), KYC/CDD/EDD calibration by risk tier, and the discipline to file a SAR that helps an investigator rather than discharging a duty.

## Course Design Notes
Route questions here when they cover ACAMS exam content specifically — AML/CTF, not fraud (CFE) and not GDPR (CIPP/E). CAMS centers on the financial-crime control framework: stages of laundering, typologies, FATF and national laws, program design, and investigations. When a fact pattern is really about predicate fraud detection (lapping, billing schemes), route to CFE. When it is about personal data handling rather than financial crime control, route to CIPP/E. The voice should respect that AML mistakes hurt real people — both sanctioned victims and wrongly de-banked customers — and that de-risking is itself a risk.

## Exam Map and Study Rhythm
120 MCQ, 3.5 hours, ~75 scaled passing. Canonical preparation: ACAMS CAMS Certification Study Guide (6th Ed) plus the ACAMS practice exam. Typical cadence: 100-200 hours over 3-6 months; ACAMSExamProvider and other vendor practice question banks add fact-pattern reps.

| Domain | Weight | What It Tests | Study Posture |
|---|---:|---|---|
| Risks and Methods of ML/TF | 25-30% | Placement/layering/integration; predicate crimes; typologies — trade-based ML, hawala/IVTS, real estate, shell/shelf companies, beneficial ownership obfuscation, cash-intensive businesses, NPO abuse, virtual assets/crypto, prepaid cards, smurfing/structuring, sanctions evasion, financial inclusion balance, PEP risk | Typology fluency with fact patterns; predicate offense flashcards |
| Compliance Standards | 30-35% | FATF 40 Recommendations + Immediate Outcomes IO1-IO11, Wolfsberg Principles, Basel CDD Principles, EU AMLD 4/5/6 + AML Regulation/AMLA, US BSA + USA PATRIOT Act + AMLA 2020 incl. Corporate Transparency Act, UK MLR 2017, sanctions (OFAC SDN/SSI, EU restrictive measures, UN Security Council resolutions) | Crosswalk national rules to FATF; statute one-pagers |
| AML Compliance Program | 30-35% | Risk-Based Approach (RBA), KYC/CDD/EDD with customer risk classifications, beneficial ownership 25% threshold, PEP EDD, sanctions screening (real-time + batch + delta + filter tuning), transaction monitoring (rule-based + behavioral + AI), SAR/STR filing, recordkeeping 5+ years, training, independent audit, Three Lines of Defense | Tier customer book and justify EDD; tune monitoring scenarios |
| Investigations | 25-30% | Internal investigations, regulator interactions, 314(a)/(b), Joint AML Task Forces, MLAT, FinCEN designations, ACAMS investigation methodology | SAR narrative rubric; mock regulator findings response |

## Chapter 1: The Three Stages and the Modern ML Reality
**Core questions:** What are placement, layering, and integration, and why do practitioners increasingly say "the stages overlap" rather than march in order?

**Key concepts**
- Placement: introducing illicit proceeds into the financial system (cash deposits, smurfing/structuring, casinos, money services businesses, prepaid cards)
- Layering: obscuring the audit trail through transactions/jurisdictions/instruments (wire transfers, cross-border, conversion to securities, crypto chain-hopping)
- Integration: returning funds to the legitimate economy with apparent legitimacy (real estate, business acquisition, luxury goods, art)
- Predicate offenses: corruption, drug trafficking, fraud, tax crimes, environmental crime, human trafficking, cybercrime
- Terrorist financing: small amounts, sometimes legal source, end-use matters
- Proliferation financing: WMD-related; FATF Recommendations 7 and Immediate Outcome 11
- Stages overlap and reverse in modern cases

**Applied skills**
- Identify stage and typology from a transaction story
- Articulate why a small-dollar TF case can be more dangerous than a large ML case

**Common traps**
- **Layering vs integration.** Both are post-placement. Layering = obscure source via multiple transactions/jurisdictions/instruments. Integration = bring funds back into the legitimate economy via investments/real estate/businesses. Detect layering with transaction-monitoring complexity rules; detect integration with reverse-tracing from suspicious assets.
- **TF vs ML.** ML hides illicit source; TF can use clean source for illicit end-use. Same controls, different signal.
- **Smurfing vs structuring.** Smurfing uses multiple people; structuring (US BSA term) splits cash to evade CTR threshold. Both can co-occur.
- **Placement is not always cash.** Crypto-on-ramp, prepaid loads, MSB deposits — all can be placement.

**Authoritative sources:** ACAMS CAMS Study Guide 6th Ed; FATF Guidance on the Risk-Based Approach.

## Chapter 2: Typologies — TBML, Hawala, Real Estate, NPOs, Virtual Assets, Beneficial Ownership
**Core questions:** What do trade-based ML, hawala, real estate ML, NPO abuse, virtual-asset ML, and beneficial-ownership obfuscation actually look like in practice?

**Key concepts**
- Trade-Based Money Laundering (TBML): over- and under-invoicing, multi-invoicing, phantom shipments, misdescription of goods, dual-use goods, FATF Trade-Based ML guidance
- Hawala/hundi/fei-chien and other Informal Value Transfer Systems (IVTS): no value moves across borders, settlement nets out, regulation varies (US licensed money transmitter; UK FCA EMI; many unlicensed providers globally)
- Real estate ML: shell-owned all-cash purchases, FinCEN Geographic Targeting Orders (US major metros), broker due diligence, lawyer enabling
- Shell companies vs shelf companies: shell = no operations; shelf = aged, registered to appear established
- Beneficial-ownership obfuscation: layered legal entities, nominee directors, bearer shares (mostly abolished but still encountered), complex trusts, US CTA/FinCEN BOI reporting requirements
- NPO/charity abuse: cross-border transfers to conflict zones; FATF recognizes only a subset of NPOs as high-risk; financial inclusion balance
- Virtual assets: mixers/tumblers, peel chains, chain-hopping (BTC → privacy coin → ETH), DeFi exploits, non-compliant exchanges, FATF Travel Rule for VASPs, US BSA application to VASPs, EU MiCA
- PEP typologies: foreign vs domestic vs international organization PEPs; family + close associates; senior management approval, EDD

**Applied skills**
- Pick the most likely typology when several look plausible
- Identify the "red flag bouquet" that elevates risk
- Unwind a four-layer beneficial-ownership structure

**Common traps**
- **TBML signals.** Invoice price wildly outside market range, goods/shipment route inconsistent with business purpose, payments from unrelated third parties, structured letter-of-credit terms.
- **Hawala vs MSB.** Both move value; hawala settles informally and is often unlicensed. Detection signal: customer wires to/from individuals in jurisdictions where banking is impractical.
- **Beneficial ownership thresholds.** FATF guidance and most national rules use a 25% direct/indirect threshold for ownership, and a separate "control" test. US CTA/FinCEN BOI uses 25% ownership or substantial control.
- **NPO risk.** Most NPOs are low risk; FATF criticizes blanket NPO de-risking. Focus on cross-border conflict-zone transfers, opacity of beneficiaries, governance gaps.
- **Crypto pseudonymity.** Bitcoin is pseudonymous, not anonymous. Mixers and chain-hopping increase opacity; Travel Rule and VASP KYC reduce it.

**Authoritative sources:** FATF Trade-Based ML, Virtual Assets, Real Estate, and NPO guidance; ACAMS Study Guide typologies section.

## Chapter 3: FATF and Global Standards
**Core questions:** What are the FATF 40 Recommendations and Immediate Outcomes, how do mutual evaluations work, and why do they shape every national regime?

**Key concepts**
- FATF 40 Recommendations key clusters: R.1 Risk-Based Approach, R.6/7 targeted financial sanctions (terrorism / proliferation), R.10 CDD, R.11 records 5+ years, R.12 PEPs, R.13 correspondent banking, R.15 new technologies (VAs/VASPs), R.16 wire transfers (originator and beneficiary information), R.20 STR/SAR, R.21 tipping-off prohibition + safe harbor, R.22/23 DNFBPs (lawyers, accountants, real estate, dealers in precious metals/stones, TCSPs), R.24/25 beneficial ownership of legal persons + arrangements, R.26-28 supervisor + sanctions proportionate, R.29-32 FIUs, R.33-34 statistics, R.36-40 international cooperation including MLATs
- Immediate Outcomes (IO1-IO11): effectiveness framework, evaluated by mutual evaluations
- Mutual evaluations + follow-up; ICRG process; high-risk jurisdictions ("black list") and increased monitoring ("grey list")
- Egmont Group, FIUs, information sharing
- Wolfsberg Principles, Basel CDD Principles
- FATF style guidance: VAs/VASPs (2019, updated), real estate, professional enablers, beneficial ownership (R.24 revised 2022)

**Applied skills**
- Map a national rule (e.g., US BSA CDD rule) to its FATF Recommendation
- Explain the risk-based approach to a business line that wants a checklist

**Common traps**
- **Technical compliance vs effectiveness.** Mutual evaluations test both. A country can have laws on the books but fail IOs.
- **FATF status.** FATF is not a treaty body; it issues standards that members commit to implement. National laws give them force.
- **R.16 wire transfer rule.** Originator AND beneficiary name, account number, and address required for cross-border wires; thresholds vary by jurisdiction.
- **DNFBP scope.** Lawyers and accountants are FATF-mandated reporting parties for certain transactions; national implementation varies sharply.

**Authoritative sources:** FATF 40 Recommendations (current edition); FATF Methodology for Assessment; Wolfsberg Group principles.

## Chapter 4: National Regimes — BSA, AMLD, UK MLR, AMLA 2020, Sanctions
**Core questions:** Where do US, EU, and UK rules align, and where will the exam try to trip you on the differences?

**Key concepts**
- US Bank Secrecy Act + USA PATRIOT Act: CTR (>$10,000 cash), SAR thresholds ($5,000 for FIs / $2,000 for MSBs) and timing (30 days from initial detection, with 60-day extension), CDD Rule, beneficial ownership reporting under Corporate Transparency Act (effective Jan 2024), USA PATRIOT Act 311 (special measures), 312 (correspondent banking EDD), 313 (prohibition on US correspondent accounts for foreign shell banks), 314(a) (law enforcement → FIs), 314(b) (FI ↔ FI), 319 (forfeiture jurisdiction), Travel Rule (>$3,000)
- AMLA 2020 (Anti-Money Laundering Act): AML whistleblower program (10-30% bounty, anti-retaliation), expanded penalties, Corporate Transparency Act (BOI to FinCEN), priorities of AML (NPAs)
- EU AMLD 4/5/6: PEPs, central UBO registers (post-WM/Sovim CJEU access limits), virtual assets (AMLD 5), predicate-offense harmonization (AMLD 6), corporate criminal liability
- EU AML Single Rulebook: AML Regulation (directly applicable) + AMLA (the new EU AML Authority based in Frankfurt)
- UK MLR 2017 (Money Laundering Regulations), OFSI sanctions, FCA expectations, Joint Money Laundering Intelligence Taskforce (JMLIT)
- Sanctions: OFAC SDN list, 50% Rule (aggregation of indirect ownership), sectoral sanctions (SSI), secondary sanctions, country-based (Iran/Cuba/North Korea/Syria/Russia post-2022 expanded), EU consolidated list, UK OFSI, UN Security Council resolutions (1267 ISIL/Al-Qaida, 1373 terrorism, 1718 DPRK, 2231 Iran)

**Applied skills**
- File the right report in the right jurisdiction within the right window
- Spot secondary-sanctions exposure on a non-US transaction
- Apply the OFAC 50% Rule to a layered ownership structure

**Common traps**
- **CTR vs SAR.** CTR = cash > $10,000, filed FinCEN Form 112, no suspicion required. SAR = suspicion-based, filed FinCEN Form 111, threshold and timing rules apply.
- **SAR filing clock.** 30 days from initial detection of facts that may constitute a basis for filing; 60-day extension if no subject identified. Continuing-activity SARs every 90 days.
- **OFAC 50% Rule.** A non-SDN entity owned 50% or more (aggregating direct + indirect interests of one or more blocked persons) is itself blocked by operation of law, even without listing.
- **Secondary sanctions.** Apply to non-US persons engaging in specified conduct with sanctioned parties. Not the same as primary sanctions.
- **AMLD 6 vs predicate list.** AMLD 6 harmonizes a list of 22 predicate offenses; member states implement nationally.

**Authoritative sources:** FinCEN regulations; OFAC SDN/SSI; EU AMLD/AMLR; UK MLR 2017; HM Treasury OFSI guidance.

## Chapter 5: Building the Compliance Program — KYC, CDD, EDD, RBA
**Core questions:** What does a risk-based program look like in practice, and how do you tier customers without over- or under-protecting them?

**Key concepts**
- Five pillars (US): policies/procedures/internal controls, designated AML/BSA Officer, training, independent testing, CDD with beneficial ownership
- KYC/CDD elements: identification (name, DOB, address, gov't ID for individuals; incorporation documents for entities), verification, beneficial ownership (25% ownership OR substantial control), purpose and nature of relationship, ongoing monitoring
- Simplified Due Diligence (SDD): low-risk only, narrowly defined
- Enhanced Due Diligence (EDD): PEPs, correspondent banking (USA PATRIOT 312), high-risk jurisdictions, complex structures, private banking, source of wealth + source of funds
- PEP: foreign vs domestic vs international organization PEP; family + close associates; senior management approval; ongoing EDD; FATF says risk-based, not all-life-prohibition
- Correspondent banking: USA PATRIOT 312 (EDD required for foreign banks), 313 (no shell-bank correspondents), nested correspondents, payable-through accounts
- Sanctions screening: real-time (payments) + batch (customer file) + delta (changes) + filter tuning (fuzzy matching, transliteration, false positive ratios)
- Transaction monitoring: rule-based scenarios (thresholds, velocity), behavioral baselines, AI/ML supplementing rules; model risk management (SR 11-7)
- Recordkeeping: 5+ years standard; CDD records, transaction records, SAR/STR + supporting docs (separately stored)
- Three Lines of Defense (now Three Lines Model): 1st business line, 2nd compliance + risk, 3rd internal audit
- Independent testing: annual or risk-based, internal or external

**Applied skills**
- Tier a customer book and justify the EDD set
- Tune a monitoring scenario without inviting either an alert flood or an information drought
- Apply the OFAC 50% Rule to a real ownership structure

**Common traps**
- **CDD vs KYC.** KYC is the identification/verification piece; CDD is the broader risk-assessment lifecycle that includes ongoing monitoring.
- **PEP de-risking.** FATF and the Wolfsberg Group reject auto-exit on PEP status; EDD, not exit, is the standard.
- **Beneficial ownership thresholds.** 25% is the FATF default and the US CDD Rule control prong's reference. Substantial control prong has no percentage.
- **De-risking harms.** Blanket exit of customer categories shifts risk to less-regulated channels and harms financial inclusion. FATF, FinCEN, and Wolfsberg all warn against it.
- **Independent testing.** Need not always be external; internal audit can perform if independent of compliance.

**Authoritative sources:** FinCEN CDD Rule; FATF R.10 + Guidance on RBA; Wolfsberg CDD Principles; SR 11-7 Model Risk Management.

## Chapter 6: Investigations, SARs, Information Sharing
**Core questions:** How do you write a SAR an FIU will actually use, and how do you handle a subpoena, MLAT request, 314(a)/(b) query, or regulator exam?

**Key concepts**
- Internal investigation: triage alerts, evidence preservation, interviews, escalation to BSA Officer, decision to file
- SAR/STR narrative: who, what, when, where, why, how; subject identification; specific dollar amounts; pattern description; jurisdictions; clarity over hedging
- US SAR timing: 30 days from initial detection of facts (60-day extension if no subject identified); continuing activity SAR every 90 days
- Tipping-off prohibition: customer must not be informed of SAR filing or investigation
- Safe harbor: BSA 31 USC 5318(g)(3) immunity for SAR filers acting in good faith
- 314(a): law enforcement query to FIs via FinCEN; 14-day response window; record search only
- 314(b): voluntary FI ↔ FI sharing under safe harbor; both parties must register
- Joint Money Laundering Intelligence Taskforce (JMLIT) UK equivalent
- MLAT: Mutual Legal Assistance Treaty; formal government-to-government channel; slow
- FinCEN designations under USA PATRIOT 311 (primary money laundering concern)
- Regulator interactions: matters requiring attention (MRA), consent orders, look-back reviews, deferred and non-prosecution agreements

**Applied skills**
- Convert a typology hit into a SAR narrative that names the conduct and avoids speculation
- Prepare a look-back scope and resourcing plan
- Respond to a 314(a) request inside the 14-day window

**Common traps**
- **SAR is not a conclusion of guilt.** "Suspicious" + meets threshold = file. The SAR records suspicion, not adjudication.
- **Tipping off.** Even confirming "we cannot service this transaction" can tip off; coordinate with counsel.
- **314(a) vs 314(b).** 314(a) is mandatory record-search response to LE. 314(b) is voluntary FI ↔ FI information sharing.
- **Continuing activity SAR.** Even after one SAR, if activity continues, file again every 90 days while monitoring continues.
- **MLAT timing.** MLAT requests are slow (months to years). Plan urgency outside formal MLAT where lawful.

**Authoritative sources:** FinCEN SAR Activity Review; FinCEN 314 program docs; ACAMS Study Guide investigations section.

## Chapter 7: Ethics, Conduct, and Capstone — Exam-Day Discipline
**Core questions:** What does it mean to be an AML professional whose loyalty is to the law and the integrity of the system, even when business pressure pushes the other way?

**Key concepts**
- ACAMS Code of Ethics
- Tipping-off prohibitions and confidentiality
- Conflicts between commercial pressure and SAR judgment
- De-risking harms and the duty to consider financial inclusion
- Whistleblower protections (US AMLA 2020 whistleblower program)
- Documentation discipline: if it isn't written, it didn't happen

**Common traps**
- **Tipping off vs customer service.** Refusing to explain "why" is sometimes required by law, even when service expectations push the other way.
- **Senior management override.** Approval of a high-risk relationship can be lawful and well-documented; a senior person waving away a SAR cannot.
- **The "best" answer.** On CAMS, two answer choices often look defensible; the most reliable rule is to pick the choice most consistent with the risk-based approach and the stated facts, not the most aggressive or most lenient.

**Authoritative sources:** ACAMS Code of Ethics; FinCEN advisories on de-risking.

## Capstone: Exam-Day Discipline
Pacing target: ~1.75 minutes per item. Strategy: never skip; mark and review only if time allows. The CAMS exam rewards measured, RBA-aligned reasoning over hair-trigger escalation. Don't pick the harshest answer (e.g., immediate account closure) when the facts support calibrated EDD + monitoring. Don't pick the most lenient (e.g., "no action required") when red flags cluster.

**Capstone deliverables**
- One 60-item mixed drill across all domains in final 2 weeks
- Personal exam-day playbook with timing checkpoints
- Error log review keyed to domain and typology

# Flagship Pedagogical Review: apUsGovernment

**Reviewed**: 2026-05-18
**Track**: `col-ap-us-government-politics` (no camelCase variant in `high.ts`; `apUsGovernment` is the conventional shorthand used in audit docs)
**Source file**: [`src/data/questionCatalog/civicPoliticsQuestions.ts`](../../../src/data/questionCatalog/civicPoliticsQuestions.ts) (`highApUsGovernmentQuestions` block, lines ~997–1660)
**Syllabus**: [`src/data/syllabi/high/ap_us_government.md`](../../../src/data/syllabi/high/ap_us_government.md)
**Prior audits**: [`apUsGovernment.md`](../apUsGovernment.md) (cluster audit, called this bank "cluster's gold standard")
**Template reference**: [`docs/audit/career/_flagship/ventureCapitalRoadmap_review.md`](../../career/_flagship/ventureCapitalRoadmap_review.md)

This document is the **HS-tier template for future flagship reviews** — the unit of analysis Floe should apply to other AP tier flagships (apEnglish, apHistory, apEuropeanHistory) before shipping a beta. Read it once before reviewing the next AP flagship.

---

## 1. What the track looked like before this review

By the time this review opened, the AP US Government bank had already been called the "gold standard" of the high-school humanities cluster. The cluster audit ([`apUsGovernment.md`](../apUsGovernment.md)) explicitly noted:

- **No DEFAULT_FLAW anywhere in the file.** The entire `civicPoliticsQuestions.ts` source uses bespoke per-distractor `whyWrong` lines.
- **Voice register already strong.** Sober, nonpartisan, evidence-anchored. Names specific constitutional clauses, required documents, and landmark cases. No comedy distractors; no strawmen of the kind Wave 4 had to clean up on the VC bank.
- **Required-case coverage already broad.** Marbury, McCulloch, Brown, Engel, Tinker, Gideon, Citizens United, McDonald, Lopez, Yoder, NYT v United States, Baker v Carr, Shaw v Reno — all present.

What that left:

- **38 questions** across a mishmash of file-local chapter labels ("Foundations", "Civil Rights", "Civil Liberties", "Constitutional Interpretation", "Executive Branch", "Judicial Branch", "Institutions", "Political Participation", "Exam Skills") that did **not** match the syllabus's eight-chapter spine.
- **Chapter 3 (Congress and Representation) was almost empty** at the chapter level. Baker and Shaw existed but were tagged "Political Participation"; no House/Senate procedural item, no delegate-vs-trustee model item, no oversight item.
- **Chapter 4 (Presidency and the Bureaucracy) was thin.** Federalist 70, iron triangles, and bureaucratic discretion existed, but there was no item on the limits of executive orders and no item on notice-and-comment rulemaking.
- **Chapter 7 (Political Beliefs and Public Opinion) had one item** (margin of error). No socialization, no ideology mapping, no question-wording bias.
- **Chapter 8 (Participation, Elections, Parties, Interest Groups, Media)** had Citizens United, Baker, Shaw — but no voting-rights amendments, no free-rider problem, no parties-as-linkage, no agenda setting.
- **No stimulus items.** The AP exam routinely opens with primary-source excerpts; this bank carried none at the time of review.
- **No capstone.** The syllabus describes an applied civics briefing as the year-end work-output, but no question simulated that output.
- **A small handful of distractors leaned on weak strawmen** ("The Second Amendment because students could not protest" on Brown; "The president decides which civil liberties exist" on selective incorporation; "A random protest group with no connection to government institutions" on iron triangles). These were rare exceptions to the file's otherwise strong voice — the cluster audit had not flagged them individually, but they did not match the bank's own standard.

That was the starting state.

---

## 2. What changed in this review

| Action | Count | Notes |
|---|---|---|
| Questions before | 38 | Across mismatched chapter labels, no capstone |
| Questions after | 53 | Now mapped onto 8 syllabus chapters plus Exam Skills plus capstone |
| New questions authored | 15 | 12 coverage gap-fillers + 3 capstone |
| Questions reordered / rechaptered | All 38 | Every prior question now sits under a syllabus-literal chapter |
| Distractors tightened | ~12 lines across ~8 questions | Strawmen, weak whys, missed connections |
| Lessons strengthened | ~6 | Added precedent connections, named tests, named statutes |
| New chapter literals adopted | 8 | All match the syllabus exactly |
| New capstone chapter | 1 | "Capstone: Applied Civics Briefing" — shared Greenfield County scenario |
| Build status | green | `npx tsc -b` exit 0 |

### 2.1 Chapter rename — alignment to syllabus spine

The single largest mechanical change. Every chapter literal in the bank now matches the syllabus chapter heading **exactly**, including the chapter number prefix:

- "Foundations" → **"Chapter 1: Constitutional Foundations and Democratic Ideals"**
- "Federalism" → **"Chapter 2: Federalism and the National-State Balance"**
- "Political Participation" (Baker, Shaw) → **"Chapter 3: Congress and Representation"** (districting belongs to Congress, not turnout)
- "Executive Branch" / "Institutions" → **"Chapter 4: The Presidency and the Bureaucracy"**
- "Constitutional Interpretation" / "Judicial Branch" → **"Chapter 5: The Courts and Constitutional Interpretation"**
- "Civil Rights" / "Civil Liberties" → **"Chapter 6: Civil Liberties and Civil Rights"** (College Board treats both together for the required-cases unit)
- (new) **"Chapter 7: Political Beliefs, Ideology, and Public Opinion"**
- "Political Participation" (Citizens United, voting) → **"Chapter 8: Participation, Elections, Parties, Interest Groups, and Media"**
- "Exam Skills" retained as a cross-cutting cluster (spirals every chapter per syllabus design note)
- (new) **"Capstone: Applied Civics Briefing"**

### 2.2 Chapter 1 — Difficulty arc fixed, stimulus item added

Reordered so the chapter opens with the more concrete foundational ideas (Declaration of consent → Articles weakness → Federalist 10 → Federalist 51 → Brutus 1) before stepping up to application-style document pairings.

Added **4330010 `Federalist 10 stimulus`** — a primary-source quotation item ("By a faction, I understand a number of citizens, whether amounting to a majority or a minority of the whole…"). This is the AP exam's signature stimulus format and the bank previously carried no example.

Tightened distractors on `Articles of Confederation` (482022) — added a more specific "command state militias" misconception in place of the original vaguer line. Strengthened the Federalist 10 lesson to name the Brutus dialectic.

### 2.3 Chapter 2 — Categories of power and conditions of aid

Added two coverage gap-fillers:

- **4330020 `Categories of power`** — concurrent / reserved / enumerated / denied. The scenario pairs state medical licensure with federal DEA registration. The bank previously moved straight from McCulloch to Lopez with no items on the basic federalism vocabulary the AP exam tests.
- **4330021 `Grants and conditions`** — conditional federal highway funding tied to a uniform commercial-driver licensing standard. Tests the difference between conditions of aid, preemption, and commandeering. Closing arc question for the chapter.

### 2.4 Chapter 3 — Congress chapter authored

The biggest authoring effort. Previously the chapter (as the audit noted) lived almost entirely outside this bank. Now sits as a full chapter with four new items plus two relocated cases:

- **4330030 `House and Senate rules`** — entry-friendly. Explains why a House majority bill stalls in the Senate (filibuster / Rules Committee).
- **4330031 `Delegate or trustee`** — application of representation models. Closes with the politico distinction.
- **4330032 `Reapportionment v gerrymandering`** — SCOTUS-comparison shape; pairs Baker (justiciability) with Shaw (substantive racial gerrymander).
- **4330033 `Congressional oversight`** — implied power of oversight, balanced against executive privilege.

Relocated `Baker v. Carr` (482014) and `Shaw v. Reno` (482016) into Chapter 3 from "Political Participation".

### 2.5 Chapter 4 — Executive order limits and rulemaking

Added two gap-fillers:

- **4330040 `Executive order limits`** — Youngstown-style scenario. Tests the misconception that EOs are automatically valid because the president signs them. The bank previously had no executive-order item despite the syllabus listing them as a key concept.
- **4330041 `Rulemaking process`** — notice-and-comment under the Administrative Procedure Act. The bank had a bureaucratic-discretion item (482019) but no item on the procedural mechanism by which discretion is exercised.

Tightened distractors on `Iron triangles` (482012) — replaced the "random protest group" strawman with a real misconception that confuses iron triangles with issue networks.

### 2.6 Chapter 5 — Checks on the Court

Added **4330050 `Checks on the Court`** — Congress passes a statute clarifying language the Court had read narrowly. Tests the crucial AP distinction between statutory rulings (revisable by ordinary legislation) and constitutional rulings (revisable only by amendment or later Court reversal). The bank previously had Marbury and Federalist 78 but no item on the reciprocal checks the Court faces.

Tightened the Marbury lesson and one Marbury distractor to clarify that judicial supremacy is bounded.

### 2.7 Chapter 6 — Schenck added; weak Brown distractor replaced

Added **4330060 `Schenck v. United States`** — clear and present danger. The audit listed Schenck as a missing required-case item.

Tightened distractors on:

- `Brown v. Board` (482006) — replaced "The Second Amendment because students could not protest" (a strawman noted in the audit) with the substantively important misconception that Brown ruled on due process alone without overruling Plessy.
- `Selective incorporation` (482009) — replaced "The president decides which civil liberties exist" (strawman) with the more substantive misconception that all Bill of Rights protections are incorporated automatically and at once.
- `Engel v. Vitale` (482007) — replaced the Commerce Clause strawman with a more plausible Free Exercise misconception about compulsion.
- `Tinker v. Des Moines` (482008) — replaced "advance approval from Congress" with "advance approval from school administrators" (prior restraint), a real student misconception.
- `New York Times v. United States` (482034) — replaced the off-topic Tinker distractor with the more substantive misconception that the holding immunizes post-publication consequences.
- `McDonald v. Chicago` (482028) — connected the lesson explicitly to District of Columbia v. Heller.

### 2.8 Chapter 7 — New chapter authored

Previously Chapter 7 had a single item (482010 `Margin of error`). Added three gap-fillers:

- **4330070 `Political socialization`** — family transmission of party identification. Tests the difference between socialization, sampling design, and affective polarization.
- **4330071 `Question wording`** — paired-question scenario with loaded vs neutral framings. Tests the difference between question wording and sample-size effects.
- **4330072 `Ideology mapping`** — voter profile with libertarian-style positions. Tests the misconception that libertarian = conservative-with-tax-cuts.

### 2.9 Chapter 8 — Voting rights, parties, free-rider, agenda setting

Added four gap-fillers and relocated `Citizens United`:

- **4330080 `Voting rights amendments`** — Fifteenth / Nineteenth / Twenty-Fourth / Twenty-Sixth. The bank had no item on the franchise-expansion amendments by number.
- **4330081 `Parties as linkage`** — bundling function. Tests the misconception that parties make regulations.
- **4330082 `Free-rider problem`** — environmental group lobbies for clean-air rules; non-members benefit. Tests the difference between free-rider, iron triangle, and grassroots mobilization.
- **4330083 `Agenda setting`** — distinguishes agenda setting, framing, gatekeeping, and watchdog roles. The bank had no media-roles item despite the syllabus listing all four.

Tightened the third distractor on `Citizens United` (482015) — replaced the "must donate to a candidate" strawman with the more substantive misconception that the case removed limits on direct corporate contributions (it did not; that distinction is heavily tested).

### 2.10 Capstone authored

New chapter literal: **"Capstone: Applied Civics Briefing"**. Three integrative questions, all set in the same fictional jurisdiction (**Greenfield County voter-ID and mail-ballot dispute**), so the learner follows one civic issue across three decision points:

- **4330100 `Greenfield: constitutional frame`** — choose the constitutional frame for the dispute (Equal Protection plus Voting Rights Act, not Second Amendment or Commerce). Integrates Chapter 1 (rights), Chapter 6 (equal protection), Chapter 8 (voting).
- **4330101 `Greenfield: institutional actors`** — map the actors and authorities (state legislature writes rules; courts review; Congress and DOJ enforce VRA). Integrates Chapter 3 (Congress), Chapter 4 (executive enforcement), Chapter 5 (judicial review).
- **4330102 `Greenfield: data and recommendation`** — choose the recommendation form (specific evidence-based reforms with named reasoning) given a quantitative record that includes a 6-point turnout decline within the margin of error, a survey, and a state report on fraud. Integrates Chapter 7 (quantitative reasoning) and Chapter 8 (civic action) and forces the nonpartisan-recommendation discipline the syllabus capstone explicitly requires.

The shared scenario across all three is intentional and mirrors the VC flagship's FieldChart pattern: one civic issue, three decision points, three different chapters under load each time.

---

## 3. Pedagogical principles applied (use these as the HS-tier template)

Same seven principles as the VC flagship review, restated for AP humanities content.

### Principle 1 — Test understanding, not recall

Aim for ~70% application questions (apply a doctrine or institution to a new scenario) and ~30% recall (definition pinning). Audit pass: every question now presents a scenario or document quotation, and asks the learner to make a *decision* the scenario supports. The closest things to recall (`Voting rights amendments`, `Federalist 51`) still require the learner to match a specific structural claim to the right document or amendment, not just to identify the document by name.

### Principle 2 — Difficulty arc per chapter

Open easy (one concept, concrete scenario), close hard (multi-concept integration or judgment under conflicting evidence). Specifically:

- First question: **entry-friendly** — one doctrine, clean fact pattern, single concept.
- Middle questions: **stacking** — combine two or more concepts within the chapter.
- Last question: **integration / synthesis** — points forward to the capstone.

This review reordered Chapter 1 (open with Declaration, not Federalist 10) and constructed Chapter 3 from scratch with the arc baked in.

### Principle 3 — Distractors are real misconceptions, not strawmen

Tightened ~12 distractor lines that leaned on jokes or unrelated topics. The new test: every distractor should make a learner stop and think "is that actually wrong?" — not laugh and skip. Replaced "The Second Amendment because students could not protest" (Brown), "The president decides which civil liberties exist" (incorporation), and the "random protest group" (iron triangles) with substantive misconceptions a real AP student might genuinely hold.

### Principle 4 — Stimulus items where the AP exam uses them

The AP US Government exam runs roughly 30% of its multiple-choice items off primary-source stimulus (founding-document excerpts, court excerpts, charts, political cartoons, news quotes). The bank previously had none and now carries at least one (`Federalist 10 stimulus`, 4330010). The capstone Question 3 (4330102) also embeds a multi-source quantitative stimulus. A future authoring pass should grow this further (especially a Federalist 51 excerpt and a court-opinion excerpt from Brown or Marbury).

### Principle 5 — Coverage vs syllabus is checked at the concept level, not the chapter level

A chapter can be "covered" (has questions in it) without covering the **key concepts** the syllabus lists for that chapter. Build the coverage matrix at the concept level (see Section 4 below), find the gaps, author to fill them. Chapter 3 (Congress) had two questions in the prior bank but was missing the entire procedural and representation-model layer.

### Principle 6 — Capstone simulates the work-output

The syllabus capstone calls for a nonpartisan civic briefing covering an issue question, founding-document anchor, official government source, quantitative source, and practical recommendation. A natural temptation is to author one question per artifact. That would be wrong: the capstone tests **integration**, not artifact enumeration. The three-question structure here uses a **shared fictional jurisdiction (Greenfield County)** across all three, with each question targeting a different layer of the briefing.

### Principle 7 — Voice consistency: sober, nonpartisan, evidence-anchored

The AP US Government bank's voice is *not* the same as the VC bank's. There is no whimsy in the prompt. The register is closer to a careful civics teacher: precise nouns, clause names, case names, dates where they help (1870 for the Fifteenth, 1971 for the Twenty-Sixth). No comedy distractors of the FieldChart "office snack budget" variety would ever fit here. The voice this bank should match is the existing `civicPoliticsQuestions.ts` voice, not the `jargonBusters.ts` voice. Authors of future AP humanities banks should hold to that standard.

### Principle 8 (HS-specific) — Map every item to an AP skill

The AP US Government framework names five skills (concept application, SCOTUS comparison, quantitative analysis, source analysis, argumentation). Every item in the bank now exercises at least one of these and most exercise two. The Exam Skills chapter explicitly spirals all five.

---

## 4. Coverage matrix (syllabus concept → question id(s))

### Chapter 1 — Constitutional Foundations and Democratic Ideals

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Natural rights, consent of the governed | 482021 | Declaration of Independence |
| Articles of Confederation weaknesses | 482022 | Tax, commerce, enforcement |
| Federalist 10 (faction, extended republic) | 482001, 4330010 | Application + stimulus excerpt |
| Federalist 51 (separated powers) | 482002, 482036 | Definition + document-match |
| Brutus 1 (Anti-Federalist consolidation worry) | 482003, 482035 | Definition + application |
| Republicanism, popular sovereignty | 482021 | Embedded in Declaration item |
| Document pairing skill | 482037 | Fed 10 vs Brutus 1 |

All listed concepts covered. The participatory / pluralist / elite models of democracy are not yet tested by a dedicated item (see flag below).

### Chapter 2 — Federalism and the National-State Balance

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Enumerated, implied, reserved, concurrent, denied powers | 4330020 | New — categories of power |
| Necessary and Proper Clause, Supremacy Clause | 482005 | McCulloch |
| Commerce Clause | 482027 | Lopez |
| Federalist Tenth Amendment | 4330020 | Embedded in concurrent-powers item |
| Grants, conditions of aid | 4330021 | New |
| Preemption, commandeering | 4330021 | Tested as distractors with bespoke whys |
| McCulloch v. Maryland | 482005 | Required case |
| United States v. Lopez | 482027 | Required case |

All listed concepts covered.

### Chapter 3 — Congress and Representation

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| House and Senate differences (rules, debate, cloture) | 4330030 | New |
| Delegate, trustee, politico | 4330031 | New |
| Reapportionment, redistricting, gerrymandering | 4330032, 482014, 482016 | New SCOTUS-comparison + Baker + Shaw |
| Baker v. Carr | 482014 | Required case |
| Shaw v. Reno | 482016 | Required case |
| Oversight, impeachment, confirmation | 4330033 | New |
| Bicameralism, enumerated powers of Congress | 4330030 | Embedded |

All listed concepts covered. Filibuster, cloture, conference committee, logrolling, pork-barrel are now at least named in distractors and lessons; a future item on the conference-committee mechanic specifically would help (flagged).

### Chapter 4 — The Presidency and the Bureaucracy

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Article II powers | 482013, 4330040 | Federalist 70 framing + EO limits |
| Federalist 70 | 482013 | Required document |
| Executive orders, signing statements | 4330040 | New |
| Cabinet, independent agencies, regulatory commissions | 482012 | Iron-triangles context |
| Rulemaking, notice-and-comment | 4330041 | New |
| Discretion, implementation | 482019 | Existing |
| Iron triangles, issue networks | 482012 | Distinction now in distractors |
| Checks on agencies | 4330040 | EO limits scenario |

All listed concepts covered.

### Chapter 5 — The Courts and Constitutional Interpretation

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Judicial review, Marbury | 482004 | Required case |
| Federalist 78, independent judiciary | 482023 | Required document |
| Precedent, stare decisis | 482018 | Roe/Dobbs comparison |
| Checks on the Court | 4330050 | New — statutory vs constitutional rulings |
| SCOTUS comparison skill | 482025, 4330032 | Skill item + Baker/Shaw application |

All listed concepts covered. Specific items on standing and original-vs-appellate jurisdiction are not present (flagged).

### Chapter 6 — Civil Liberties and Civil Rights

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Selective incorporation | 482009, 482017, 482028 | Doctrine + Gideon + McDonald applications |
| Establishment Clause (Engel) | 482007, 482030 | Required case + application |
| Free Exercise (Yoder) | 482033 | Required case |
| Speech (Schenck, Tinker) | 4330060, 482008, 482029 | New Schenck + Tinker + application |
| Press (NYT v US) | 482034 | Required case |
| Right to counsel (Gideon) | 482017 | Required case |
| Second Amendment (McDonald) | 482028 | Required case |
| Equal protection (Brown) | 482006 | Required case |
| Letter from Birmingham Jail | 482024 | Required document |
| Substantive due process (Roe, Dobbs) | 482018 | Comparison item |

All listed required cases covered. Required cases for AP US Gov as of the College Board 2026 framework: Marbury, McCulloch, Engel, Schenck, Tinker, NYT v US, Gideon, Brown, Wisconsin v Yoder, Shaw v Reno, Citizens United, McDonald, Baker v Carr, US v Lopez. **All 14 are now in the bank.**

### Chapter 7 — Political Beliefs, Ideology, and Public Opinion

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Political socialization | 4330070 | New |
| Ideology (liberal, conservative, libertarian, populist) | 4330072 | New |
| Public opinion methods (margin of error, sampling) | 482010 | Existing |
| Question wording, framing | 4330071 | New |
| Political culture concepts | 4330070 | Embedded |

All listed concepts covered. Affective polarization is named in distractors only; an applied item on selective exposure or affective polarization would close the last gap (flagged).

### Chapter 8 — Participation, Elections, Parties, Interest Groups, Media

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Voting rights amendments | 4330080 | New |
| Parties as linkage | 4330081 | New |
| Campaign finance | 482015 | Citizens United |
| Citizens United v. FEC | 482015 | Required case |
| Interest groups, free-rider | 4330082 | New |
| Media roles (agenda setting, framing, gatekeeping, watchdog) | 4330083 | New |

All listed concepts covered. The Electoral College mechanic is not yet tested by a dedicated item (flagged).

### Exam Skills (cross-cutting)

| AP skill | Question id(s) | Notes |
|---|---|---|
| Concept application | 482031 | Federalism / Lopez argument essay |
| SCOTUS comparison | 482025, 4330032 | Skill item + Baker/Shaw application |
| Quantitative analysis | 482020, 482032 | Turnout, trust-in-government chart |
| Source analysis | 482026, 4330010 | Chart-based + Federalist 10 stimulus |
| Argumentation | 482011, 482031, 482038 | Reasoning, evidence, rebuttal |

All five AP skills covered.

### Capstone — Applied Civics Briefing

| Syllabus capstone element | Question id(s) | Notes |
|---|---|---|
| Issue question | 4330100 | Greenfield County voter-ID and mail-ballot scenario |
| Founding-document / case anchor | 4330100 | Fourteenth Amendment frame |
| Official government source | 4330101 | State legislature, courts, DOJ under VRA |
| Quantitative source | 4330102 | 6-pp turnout decline, survey within margin |
| Practical civic-action recommendation | 4330102 | Specific reforms, nonpartisan |
| Nonpartisan reflection | 4330102 | Three distractors test the failure modes |

All capstone work-output elements addressed by one of the three questions.

---

## 5. Difficulty arc per chapter (post-review)

For each chapter, the entry question, midpoint, and closing question. The arc should move from one-concept to multi-concept.

- **Ch1 Foundations** — open: `Declaration principles` (482021) → mid: `Federalist 10` (482001) → close: `Federalist 10 stimulus` (4330010) and document-pairing applications (482036, 482037).
- **Ch2 Federalism** — open: `Categories of power` (4330020) → mid: `McCulloch` (482005), `Lopez` (482027) → close: `Grants and conditions` (4330021).
- **Ch3 Congress** — open: `House and Senate rules` (4330030) → mid: `Delegate or trustee` (4330031), `Reapportionment v gerrymandering` (4330032) → close: `Oversight` (4330033).
- **Ch4 Presidency** — open: `Federalist 70` (482013) → mid: `Executive order limits` (4330040), `Rulemaking process` (4330041) → close: `Bureaucratic discretion` (482019).
- **Ch5 Courts** — open: `Marbury` (482004) → mid: `Federalist 78` (482023) → close: `Checks on the Court` (4330050).
- **Ch6 Civil Liberties / Rights** — open: `Selective incorporation` (482009) → mid: required-case application items → close: `Letter from Birmingham Jail` (482024) and `Roe and Dobbs` (482018), both judgment-heavy.
- **Ch7 Public Opinion** — open: `Political socialization` (4330070) → mid: `Margin of error` (482010), `Question wording` (4330071) → close: `Ideology mapping` (4330072).
- **Ch8 Participation** — open: `Voting rights amendments` (4330080) → mid: `Parties as linkage` (4330081), `Citizens United` (482015), `Free-rider` (4330082) → close: `Agenda setting` (4330083).
- **Exam Skills** — spirals across all chapters; each item targets one named AP skill.
- **Capstone** — three integrative questions on the shared Greenfield County dispute. 4330100 → 4330101 → 4330102 maps directly to the syllabus work-output sequence.

---

## 6. Capstone design rationale

The syllabus capstone work-output is six artifacts: issue question, founding-document anchor, official government source, quantitative source, practical recommendation, and reflection. A natural temptation is to author six questions — one per artifact. That would be wrong: the capstone is supposed to test **integration**, not **the ability to list six artifacts in a row**.

The three-question structure adopted here uses a **shared fictional jurisdiction (Greenfield County voter-ID and mail-ballot dispute)** across all three, with each question targeting a different decision point on the same brief:

1. **Constitutional frame** — forces the learner to identify the correct legal frame (Equal Protection plus VRA, not Second Amendment or Commerce). Integrates Chapter 1 (rights) and Chapter 6 (equal protection).
2. **Institutional mapping** — forces the learner to map who decides what across state legislature, courts, Congress, and DOJ. Integrates Chapters 3, 4, and 5.
3. **Data and recommendation** — forces the learner to read a multi-source quantitative record (turnout, survey within margin, fraud report) and choose a nonpartisan recommendation. Integrates Chapter 7 (quantitative reasoning) and Chapter 8 (civic action) while testing the nonpartisan discipline the syllabus explicitly requires.

This pattern — **shared scenario across capstone questions** — is the recommended template for other HS-tier flagships. It mirrors what a careful student actually experiences during the capstone project (same issue, multiple analytic passes) far better than three unrelated questions on three unrelated issues.

A second design decision worth flagging: the capstone deliberately uses a **fictional county**, not a real jurisdiction. This avoids partisan framing inherited from any real case, while preserving the realism of the legal frame, the institutions, and the kind of evidence available. Future humanities capstones should consider the same fictional-jurisdiction pattern for any politically sensitive applied scenario.

---

## 7. Flags for human review

Items the next reviewer should look at:

1. **Required-case currency.** All 14 required AP US Gov cases as of the 2026 framework are now in the bank. The College Board occasionally adjusts the list. Verify the required-cases list at the start of each AP cycle and update accordingly. `Roe and Dobbs` (482018) is **not** on the required-cases list but is included as a substantive due process / precedent comparison; this is appropriate as long as the lesson line continues to flag it as comparison material rather than as a required case.
2. **Voting Rights Act enforcement language.** The capstone Question 2 (4330101) references "Congress and the Department of Justice may intervene under the Voting Rights Act." The VRA's preclearance regime was narrowed by Shelby County v. Holder (2013); Section 2 litigation remains active. The language used is deliberately general ("may intervene under the VRA") to remain accurate across enforcement-doctrine shifts. Verify against current VRA scholarship every two years.
3. **Citizens United distractor on direct contributions.** Question 482015's third distractor now reads "Direct contributions from corporations to candidates are now unlimited" — the case did not change that limit. This is the most heavily tested AP misconception in the area and should remain. If federal campaign-finance statutes change materially (e.g., a future overturn of the Tillman Act direct-corporate-contribution ban), revisit.
4. **Federalist 10 stimulus excerpt** (4330010) uses the standard widely-anthologized English-language Madison quotation. Verify quotation accuracy against the Library of Congress text before any printing.
5. **Three uncovered concepts flagged in Section 4** — democracy models (participatory / pluralist / elite), Electoral College mechanic, affective polarization. A 2-3 question follow-on pass could close these; not urgent.
6. **No image or political-cartoon items.** AP US Gov MCQs draw heavily on political cartoons and infographics. The current schema is text-only. When image-bearing schema lands, this bank is the strongest candidate for a small set of cartoon-anchored items, particularly in Chapter 8 (media-roles) and Chapter 4 (presidency).
7. **Cross-track overlap with `usGovAndCivics`.** The cluster audit noted the two banks share a source file but route to different tracks. No content was duplicated in this review; the AP bank pulls all its identifiers from the 482xxx and 4330xxx ranges and does not overlap with `highUsGovernmentCivicsQuestions` IDs.

---

## 8. What made this review good — the one-paragraph summary

The starting bank was already the cluster's gold standard for voice and per-distractor whys, so the work was not about cleanup — it was about **structural alignment** and **integration**. The two biggest wins were the chapter-rename pass (every chapter literal now matches the syllabus spine exactly, which lets the coverage matrix actually do its job) and the new capstone chapter (which the syllabus explicitly called for and the bank had never carried). The 12 coverage gap-fills inside the chapters — House/Senate rules, delegate/trustee, oversight, executive-order limits, rulemaking, checks on the Court, Schenck, political socialization, question wording, ideology, voting amendments, parties as linkage, free-rider, agenda setting — each address a concept the AP exam tests and the bank had implied but not asked about. The single stimulus item (Federalist 10 excerpt) opens the door to a future stimulus-heavy authoring pass that should grow over time. Distractor tightenings were small but substantive: the half-dozen strawman lines that survived the original authoring pass are now gone, and every distractor in the bank now represents a misconception a real AP student might genuinely hold. The total cost was 15 new questions, about 12 distractor edits, and the rechapter pass; the value is that the track now reads as a coherent AP-aligned course, not a strong bank with the right tags on it. **That gap — between "a strong bank" and "an AP course" — is the gap the HS flagship template is designed to close.**

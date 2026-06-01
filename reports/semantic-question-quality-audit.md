# Semantic Question Quality Audit

Generated on 2026-06-01T08:22:55.945Z.

Scans `src/data/questionCatalog/*.ts` directly with the TypeScript parser, so it does not depend on app course wiring or runtime imports.

## Summary

- Files scanned: 758
- Question-like records scanned: 56977
- Extracted question records before quarantine: 57134
- Non-playable import placeholders skipped: 157
- Distinct question ids seen: 38775
- Total semantic issues found: 60
- JSON issue rows stored: 60

## Flag Counts

| Flag | Count | Meaning |
|---|---:|---|
| `meta-distractor` | 60 | A wrong answer teaches test-taking behavior or vague strategy instead of a plausible content misconception. |

## Highest-Signal Examples

| Rank | Priority | Flag | File | Question | Field | Evidence | Detail |
|---:|---:|---|---|---|---|---|---|
| 1 | 66 | `meta-distractor` | src/data/questionCatalog/alevelMathsHighTopUp.ts:398 | `7507025` Optimisation setup | distractor | Assume h = x to make the box a cube | Wrong answer is about answering strategy rather than content. |
| 2 | 66 | `meta-distractor` | src/data/questionCatalog/careerCredentialsPersonalityIq.ts:718 | `5140021` Multi-rule matrix | distractor | Skip the item — single-rule items dominate APM | Wrong answer is about answering strategy rather than content. |
| 3 | 66 | `meta-distractor` | src/data/questionCatalog/erCh2Questions.ts:160 | `4370105` 8-K Item 1.01 material agreement | distractor | Skip the exhibit because redactions make it useless | Wrong answer is about answering strategy rather than content. |
| 4 | 66 | `meta-distractor` | src/data/questionCatalog/erCh2Questions.ts:161 | `4370105` 8-K Item 1.01 material agreement | distractor | Assume the redactions hide unfavorable pricing for the company | Wrong answer is about answering strategy rather than content. |
| 5 | 66 | `meta-distractor` | src/data/questionCatalog/erCh5Questions.ts:544 | `4370440` Earnings call question craft | distractor | Skip the question and email IR after the call for the answer privately | Wrong answer is about answering strategy rather than content. |
| 6 | 66 | `meta-distractor` | src/data/questionCatalog/existentialismHighTopUp.ts:458 | `7538029` My freedom and yours | distractor | Ignore others, since each person’s freedom is totally separate | Wrong answer is about answering strategy rather than content. |
| 7 | 66 | `meta-distractor` | src/data/questionCatalog/formalLogicGenerated.ts:117 | `390008` Conditional Proof | distractor | Assume the consequent and derive the antecedent | Wrong answer is about answering strategy rather than content. |
| 8 | 66 | `meta-distractor` | src/data/questionCatalog/formalLogicGenerated.ts:118 | `390008` Conditional Proof | distractor | Assume the conclusion is false in every proof | Wrong answer is about answering strategy rather than content. |
| 9 | 66 | `meta-distractor` | src/data/questionCatalog/hfCh2Questions.ts:299 | `4400116` Channel checks scope and limits | distractor | Ignore the three positive readings because 17 locations had inventory | Wrong answer is about answering strategy rather than content. |
| 10 | 66 | `meta-distractor` | src/data/questionCatalog/hfCh3Questions.ts:320 | `4400218` Separating catalyst from steady-state DCF | distractor | Ignore the catalyst because DCFs should reflect steady-state assumptions only | Wrong answer is about answering strategy rather than content. |
| 11 | 66 | `meta-distractor` | src/data/questionCatalog/highAgentGenerated.ts:706 | `2105004` Proof by contradiction for sqrt(2) | distractor | Assume sqrt(2) = 2, then 2 = 4, which is impossible. | Wrong answer is about answering strategy rather than content. |
| 12 | 66 | `meta-distractor` | src/data/questionCatalog/highAgentGenerated.ts:919 | `2106016` Conflicting sources | distractor | Assume both sources are useless because they disagree. | Wrong answer is about answering strategy rather than content. |
| 13 | 66 | `meta-distractor` | src/data/questionCatalog/ibCh1Questions.ts:223 | `4351010` What makes an IOI comparable | distractor | Pick the all-cash bid ($590M) because certainty always beats nominal price | Wrong answer is about answering strategy rather than content. |
| 14 | 66 | `meta-distractor` | src/data/questionCatalog/logicAndArgumentationHighTopUp.ts:123 | `7556007` The principle of charity | distractor | Assume they mean phones should be banned everywhere, forever | Wrong answer is about answering strategy rather than content. |
| 15 | 66 | `meta-distractor` | src/data/questionCatalog/logicCriticalThinkingTopUp.ts:122 | `7435003` The Principle of Charity | distractor | Assume they are arguing in bad faith and dismiss them | Wrong answer is about answering strategy rather than content. |
| 16 | 66 | `meta-distractor` | src/data/questionCatalog/mathDiagnosticsGenerated.ts:290 | `391019` Approximation Sense | distractor | Assume the calculator result is always right | Wrong answer is about answering strategy rather than content. |
| 17 | 66 | `meta-distractor` | src/data/questionCatalog/mathDiagnosticsGenerated.ts:292 | `391019` Approximation Sense | distractor | Ignore units and context | Wrong answer is about answering strategy rather than content. |
| 18 | 66 | `meta-distractor` | src/data/questionCatalog/mathematics_extensionsHigh103TopUpA.ts:154 | `7981009` The inductive step structure | distractor | Assume the statement holds for all n, then check n = k | Wrong answer is about answering strategy rather than content. |
| 19 | 66 | `meta-distractor` | src/data/questionCatalog/mathematics_extensionsHigh103TopUpB.ts:215 | `7981513` Base case of induction | distractor | Assume true for n = k | Wrong answer is about answering strategy rather than content. |
| 20 | 66 | `meta-distractor` | src/data/questionCatalog/mlTopUp.ts:487 | `7300031` Sample ratio mismatch | distractor | Ignore it, since a few percent imbalance is normal random variation | Wrong answer is about answering strategy rather than content. |
| 21 | 66 | `meta-distractor` | src/data/questionCatalog/naplanYear9HighTopUp.ts:183 | `7566011` Reading a graph in a text | distractor | Ignore the graph because the words contain the real argument | Wrong answer is about answering strategy rather than content. |
| 22 | 66 | `meta-distractor` | src/data/questionCatalog/naplanYear9HighTopUp.ts:184 | `7566011` Reading a graph in a text | distractor | Assume the graph contradicts the text unless told otherwise | Wrong answer is about answering strategy rather than content. |
| 23 | 66 | `meta-distractor` | src/data/questionCatalog/nationalSecurityPolicyRoadmapTopUp.ts:363 | `7304011` Analysis of Competing Hypotheses | distractor | Pick the hypothesis with the most pieces of supporting evidence | Wrong answer is about answering strategy rather than content. |
| 24 | 66 | `meta-distractor` | src/data/questionCatalog/negotiationR2.ts:49 | `7609002` Estimating their reservation point | distractor | Assume it is the mirror image of your own reservation point | Wrong answer is about answering strategy rather than content. |
| 25 | 66 | `meta-distractor` | src/data/questionCatalog/negotiationTopUp.ts:284 | `7316017` Separate people from problem | distractor | Ignore the relationship entirely and push only on the facts | Wrong answer is about answering strategy rather than content. |
| 26 | 66 | `meta-distractor` | src/data/questionCatalog/openIntroStatsAdditionalImported.ts:289 | `386028` Predicting from a regression line | distractor | Choose the country with the highest residual | Wrong answer is about answering strategy rather than content. |
| 27 | 66 | `meta-distractor` | src/data/questionCatalog/peCh1Questions.ts:370 | `4390022` Multiple expansion realism | distractor | Assume multiple expansion based on long-run upward trend in PE entry multiples | Wrong answer is about answering strategy rather than content. |
| 28 | 66 | `meta-distractor` | src/data/questionCatalog/peCh1Questions.ts:425 | `4390027` FCF conversion floor | distractor | Ignore the FCF conversion metric and rely on EBITDA growth instead | Wrong answer is about answering strategy rather than content. |
| 29 | 66 | `meta-distractor` | src/data/questionCatalog/peCh3Questions.ts:491 | `4390235` Severance stack and change-of-control | distractor | Ignore — change-of-control packages are standard and not material | Wrong answer is about answering strategy rather than content. |
| 30 | 66 | `meta-distractor` | src/data/questionCatalog/peCh4Questions.ts:146 | `4390304` When the bridge is mostly multiple expansion | distractor | Ignore the bridge and focus only on net IRR and DPI | Wrong answer is about answering strategy rather than content. |
| 31 | 66 | `meta-distractor` | src/data/questionCatalog/peCh4Questions.ts:399 | `4390327` Add-on synergy quantification: cost | distractor | Ignore cost synergies because they are too uncertain to model | Wrong answer is about answering strategy rather than content. |
| 32 | 66 | `meta-distractor` | src/data/questionCatalog/philosophyIntroQuestions.ts:660 | `7226046` The meaning of life question | distractor | Assume the question has one obvious answer everyone shares | Wrong answer is about answering strategy rather than content. |
| 33 | 66 | `meta-distractor` | src/data/questionCatalog/philosophyYear1Prim103TopUp.ts:274 | `7837017` Including everyone | distractor | Ignore them and carry on | Wrong answer is about answering strategy rather than content. |
| 34 | 66 | `meta-distractor` | src/data/questionCatalog/philosophyYear1Prim103TopUp.ts:350 | `7837022` Being patient | distractor | Grab the toy away | Wrong answer is about answering strategy rather than content. |
| 35 | 66 | `meta-distractor` | src/data/questionCatalog/philosophyYear2Prim103TopUp.ts:91 | `7838005` Someone is being left out | distractor | Ignore them and keep playing | Wrong answer is about answering strategy rather than content. |
| 36 | 66 | `meta-distractor` | src/data/questionCatalog/philosophyYear3Prim103TopUp.ts:495 | `7839031` Standing up kindly | distractor | Ignore it because it is not your problem | Wrong answer is about answering strategy rather than content. |
| 37 | 66 | `meta-distractor` | src/data/questionCatalog/philosophyYear6Prim103TopUp.ts:430 | `7842027` Listening to all sides | distractor | Believe whoever spoke first without checking | Wrong answer is about answering strategy rather than content. |
| 38 | 66 | `meta-distractor` | src/data/questionCatalog/philYear12High103TopUpA.ts:732 | `7925047` Charity in interpretation | distractor | Ignore arguments that disagree with your own position | Wrong answer is about answering strategy rather than content. |
| 39 | 66 | `meta-distractor` | src/data/questionCatalog/philYear9High103TopUp.ts:775 | `7982049` Charitable reading | distractor | Ignore the argument if you do not like the conclusion | Wrong answer is about answering strategy rather than content. |
| 40 | 66 | `meta-distractor` | src/data/questionCatalog/physicianPracticeRoadmapR2.ts:752 | `7622024` Charge reconciliation method | distractor | Assume billing will notice any visit that was missed when revenue looks low | Wrong answer is about answering strategy rather than content. |
| 41 | 66 | `meta-distractor` | src/data/questionCatalog/physicianPracticeRoadmapR2.ts:912 | `7622029` Posting an underpayment | distractor | Ignore it because $30 is too small to bother pursuing | Wrong answer is about answering strategy rather than content. |
| 42 | 66 | `meta-distractor` | src/data/questionCatalog/pregnancyBasicsQuestions.ts:361 | `7224025` Decreased fetal movement | distractor | Assume the baby is just sleeping and ignore it | Wrong answer is about answering strategy rather than content. |
| 43 | 66 | `meta-distractor` | src/data/questionCatalog/pregnancyBasicsQuestions.ts:591 | `7224041` Seeking help for mood | distractor | Assume it means they are a bad parent | Wrong answer is about answering strategy rather than content. |
| 44 | 66 | `meta-distractor` | src/data/questionCatalog/primaryPrim103TopUpA.ts:756 | `7858048` Staying healthy | distractor | Skip drinking water | Wrong answer is about answering strategy rather than content. |
| 45 | 66 | `meta-distractor` | src/data/questionCatalog/publicAffairsR2.ts:226 | `7643015` Internal alignment first | distractor | Assume internal teams agree because no one has objected yet | Wrong answer is about answering strategy rather than content. |
| 46 | 66 | `meta-distractor` | src/data/questionCatalog/publicSpeakingR2.ts:621 | `7608039` Answer-bridge-return | distractor | Skip answering, bridge straight to your talking point, and keep going | Wrong answer is about answering strategy rather than content. |
| 47 | 66 | `meta-distractor` | src/data/questionCatalog/publicSpeakingTopUp.ts:92 | `7321005` Rule of three | distractor | Choose the three reasons that are easiest to explain regardless of strength | Wrong answer is about answering strategy rather than content. |
| 48 | 66 | `meta-distractor` | src/data/questionCatalog/quantCoreCh1InterviewMap.ts:29 | `19920` Underspecified by Design | distractor | Pick the most general case (asymmetric, different starts, finite horizon) and solve that, since it covers all sub-cases. | Wrong answer is about answering strategy rather than content. |
| 49 | 66 | `meta-distractor` | src/data/questionCatalog/softwareR2.ts:428 | `7652037` Triaging a vulnerable dependency | distractor | Ignore every CVE, since scanners always produce noise not worth reading | Wrong answer is about answering strategy rather than content. |
| 50 | 66 | `meta-distractor` | src/data/questionCatalog/stCh4Questions.ts:522 | `4380337` Basel III RWA pressure | distractor | Ignore RWA because regulators only care about VaR | Wrong answer is about answering strategy rather than content. |
| 51 | 66 | `meta-distractor` | src/data/questionCatalog/stCh5Questions.ts:602 | `4380442` SAR and AML escalation | distractor | Ignore the pattern unless the wires exceed $10,000 each | Wrong answer is about answering strategy rather than content. |
| 52 | 66 | `meta-distractor` | src/data/questionCatalog/understandingAnxietyQuestions.ts:676 | `7228047` When worry takes over a week | distractor | Assume it will pass and avoid thinking about it | Wrong answer is about answering strategy rather than content. |
| 53 | 66 | `meta-distractor` | src/data/questionCatalog/understandingAnxietyR2.ts:783 | `7637050` Foundations before fancy techniques | distractor | Skip all the basics and rely only on willpower to never feel anxious | Wrong answer is about answering strategy rather than content. |
| 54 | 66 | `meta-distractor` | src/data/questionCatalog/understandingDepressionQuestions.ts:708 | `7227049` First step in concern | distractor | Assume nothing can help, so do nothing | Wrong answer is about answering strategy rather than content. |
| 55 | 66 | `meta-distractor` | src/data/questionCatalog/understandingLonelinessQuestions.ts:572 | `7229040` Who Can Help | distractor | Assume nothing can ever be done about it | Wrong answer is about answering strategy rather than content. |
| 56 | 66 | `meta-distractor` | src/data/questionCatalog/understandingLonelinessQuestions.ts:586 | `7229041` Crisis Support | distractor | Assume the feeling proves the situation is hopeless | Wrong answer is about answering strategy rather than content. |
| 57 | 66 | `meta-distractor` | src/data/questionCatalog/uniScienceTopUp.ts:385 | `7451024` Preprints | distractor | Assume it has been retracted if it is not yet in a journal | Wrong answer is about answering strategy rather than content. |
| 58 | 66 | `meta-distractor` | src/data/questionCatalog/uniScienceTopUp.ts:414 | `7451026` Conflicts of interest | distractor | Ignore the funding source, since the journal published it | Wrong answer is about answering strategy rather than content. |
| 59 | 66 | `meta-distractor` | src/data/questionCatalog/universityAgentGenerated.ts:408 | `3105014` Stronger sentence revision | distractor | We did, like, a super official nap-pod vibe check | Wrong answer is about answering strategy rather than content. |
| 60 | 66 | `meta-distractor` | src/data/questionCatalog/uxDesignR2.ts:162 | `7606005` Constraint as design input | distractor | Ignore it and design infinite instant results, then demand engineering match the design | Wrong answer is about answering strategy rather than content. |

## Detection Notes

- `formulaic-wrapper` catches prompt wrappers such as `This X question is about...`, `A learner runs into...`, and generic completion tails.
- `source-jargon-leak` catches learner-facing source/import terms such as `IMS exercise`, `source prompt`, and raw source ids.
- `obvious-irrelevant-distractor` is intentionally conservative: it requires an explicit off-topic marker and low overlap with the prompt context.
- `repeated-why-wrong` is counted across normalized distractor flaw text with a minimum repeat threshold of three.
- OpenStax rows that are already filtered from runtime play (`See Solution`, `No solution provided.`, or `N/A (Open-ended)`) are skipped as non-playable import placeholders.

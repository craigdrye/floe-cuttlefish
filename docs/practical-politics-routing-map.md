# Practical Politics Routing Map

This note keeps the Practical Politics vertical coherent as we add more questions. The courses overlap by design, but each should own a different learner job.

## Course Roles

| Course | Learner level | Owns |
| --- | --- | --- |
| Political Philosophy | High school, early | Values, legitimacy, justice, liberty, ideology, and "should we?" arguments. |
| Constitution 101 | High school | U.S. constitutional text, amendments, clauses, rights scenarios, and constitutional reasoning. |
| U.S. Government and Civics | High school | Everyday U.S. institutions, federal/state/local authority, parties, elections, and civic participation. |
| AP U.S. Government & Politics | High school, exam | AP framework, required documents/cases, data analysis, SCOTUS comparison, and FRQ-style reasoning. |
| Practical Politics & Voting | High school seniors | Cross-system voter fluency across the U.S., U.K., and EU; voting systems; media literacy; money; lobbying; civic action. |
| Comparative Practical Politics | University | Institutional comparison, veto points, party systems, courts, EU governance, implementation, and policy tracing. |
| Public Affairs: Policy Maze | Career | Stakeholder maps, advocacy strategy, lobbying compliance, consultation responses, political risk, implementation, and executive deliverables. |

## Question Lanes

| Lane | Best primary route | Notes |
| --- | --- | --- |
| Who has authority? | Practical Politics & Voting | High school questions should start with "who can actually act?" before ideology. |
| U.S. constitutional rights | Constitution 101 | Route AP-specific required-case framing to AP U.S. Government. |
| U.S. federal/state/local government | U.S. Government and Civics | Use Practical Politics when comparing with U.K./EU systems. |
| Congress, POTUS, agencies, courts | U.S. Government and Civics | Use Comparative Practical Politics for advanced institutional tradeoffs. |
| U.K. Commons, Lords, confidence, devolution | Practical Politics & Voting | Use university course for party discipline, devolution, and comparative executive-legislative logic. |
| EU Commission, Parliament, Council, directives, regulations | Practical Politics & Voting | Use career course when framed as operating advice for a client or organization. |
| Voting systems and election administration | Practical Politics & Voting | Add district magnitude, PR, ranked choice, FPTP, primaries, turnout, gerrymandering. |
| Parties and ideology | Political Philosophy | Use Practical Politics for how parties choose candidates and govern. |
| Money, lobbying, donations | Practical Politics & Voting | Use Public Affairs when compliance, disclosure, registration, or client strategy matters. |
| Media, polling, public opinion | Practical Politics & Voting | University can take agenda-setting, median voter, and turnout models. |
| Civic action | Practical Politics & Voting | Public Affairs owns professional advocacy and coalition execution. |
| Policy implementation | Comparative Practical Politics | Public Affairs owns budgets, rulemaking, comments, public records, and implementation risk. |

## Current Expansion

The Practical Politics bank has grown `src/data/questionCatalog/practicalPoliticsQuestions.ts` from 32 to 169 questions across the first, third, eighth, ninth, and tenth expansion passes:

| Export | Before | After | Additions |
| --- | ---: | ---: | ---: |
| `highPracticalPoliticsQuestions` | 12 | 61 | 49 |
| `universityComparativePoliticsQuestions` | 12 | 56 | 44 |
| `careerPublicAffairsQuestions` | 8 | 52 | 44 |

The second, fourth, fifth, sixth, and seventh expansion passes add `src/data/questionCatalog/civicPoliticsQuestions.ts`, a dedicated feeder bank for nearby high-school politics courses:

| Export | Course | Questions |
| --- | --- | ---: |
| `highConstitution101Questions` | Constitution 101 | 38 |
| `highUsGovernmentCivicsQuestions` | U.S. Government and Civics | 38 |
| `highApUsGovernmentQuestions` | AP U.S. Government & Politics | 38 |
| `highPoliticalPhilosophyQuestions` | Political Philosophy | 38 |

These arrays are prepended in `highGenerated.ts` before the generic generated top-up, preserving the existing minimum-count and prompt-dedup behavior while improving the first questions a learner sees.

The tenth expansion pass added another practical scenario layer:

| Export | Added focus |
| --- | --- |
| `highPracticalPoliticsQuestions` | Election observers, debate fact-checking, public records requests, budget hearings, candidate scorecards, voter registration drives, civic calendars, and tracking promises after elections. |
| `universityComparativePoliticsQuestions` | Electoral management bodies, media systems, corruption control, judicial appointments, protest policing, interest-group systems, constitutional amendment rules, and coalition durability. |
| `careerPublicAffairsQuestions` | Select committee prep, regulator consultation meetings, issue heat maps, partner due diligence, budget asks, public inquiry response, post-election scenario planning, and decision logs. |

The first audit pass sharpened existing Practical Politics items without changing counts:

| Export | Audit focus |
| --- | --- |
| `highPracticalPoliticsQuestions` | Clarified single-winner ranked-choice wording, distinguished primary-rule effects from basic primary definitions, tightened protest-permit language, separated casework from policy advocacy, and removed a too-jokey scorecard lesson phrase. |
| `universityComparativePoliticsQuestions` | Converted U.S.-specific committee and executive-power items into comparative versions, made campaign coverage and turnout items more system-comparative, improved district-magnitude distractors, and fixed one survey-response ambiguity. |
| `careerPublicAffairsQuestions` | Reduced stakeholder-map overlap by turning one item into outreach sequencing, shifted coalition letters toward sign-off governance, strengthened advocacy evaluation around decision-maker movement, and replaced several too-obvious distractors. |

The second audit pass reduced remaining conceptual repetition without changing counts:

| Export | Audit focus |
| --- | --- |
| `highPracticalPoliticsQuestions` | Replaced one generic constituent-contact item with casework limits, shifted one campaign-ad question toward budget-record checking, added fiscal-note literacy, and changed a crowded engagement/timing item into a courts-before-suing question. |
| `universityComparativePoliticsQuestions` | Added semi-presidentialism, comparative party-label analysis, party-family analysis, asymmetric devolution/federalism, open-list PR, and portfolio-allocation framing to reduce coalition, ideology, and decentralization overlap. |
| `careerPublicAffairsQuestions` | Separated reporter-deadline response from rumor escalation, made contribution analysis more explicit, turned retrospectives toward learning-system design, and changed risk-register/heat-map items from checklists into operational decision tools. |

The third audit pass focused on item polish rather than scope:

| Export | Audit focus |
| --- | --- |
| `highPracticalPoliticsQuestions` | Replaced remaining cartoon distractors with plausible misconceptions and consolidated several singleton chapter labels into broader learner-facing buckets. |
| `universityComparativePoliticsQuestions` | Replaced several too-easy comparative distractors around semi-presidentialism, party families, lobbying, median-voter logic, and survey sampling. |
| `careerPublicAffairsQuestions` | Made stakeholder mapping more scenario-based and replaced a few obvious professional distractors around timing, cross-system comparison, and decision logs. |

The ninth expansion pass added another practical, comparative, and career layer:

| Export | Added focus |
| --- | --- |
| `highPracticalPoliticsQuestions` | Voter guides, candidate forums, open data, public comment follow-up, campaign ads, coalition letters, evaluating policy promises, and finding the right representative. |
| `universityComparativePoliticsQuestions` | Constitutional design, party finance, social movements, courts in autocracies, fiscal decentralization, comparative surveys, cabinet formation, and electoral thresholds. |
| `careerPublicAffairsQuestions` | Ministerial submissions, board updates, FOI strategy, regulator relationship maps, coalition governance, campaign retrospectives, risk registers, and implementation handovers. |

The eighth expansion pass returned to practical, comparative, and career scenarios:

| Export | Added focus |
| --- | --- |
| `highPracticalPoliticsQuestions` | Campaign volunteering, local news ecosystems, issue advocacy, town halls, petitioning rules, party primaries, contacting representatives, and reading legislative agendas. |
| `universityComparativePoliticsQuestions` | Authoritarian resilience, welfare-state tradeoffs, state-market relations, coalition bargaining, PR party incentives, measurement validity, democratic backsliding, and civil service capacity. |
| `careerPublicAffairsQuestions` | Executive briefings, pre-bid engagement, compliance edge cases, crisis rumor response, litigation coordination, advocacy evaluation, stakeholder escalation, and coalition maintenance. |

The seventh expansion pass completed the remaining feeder-course gaps from the prior TODO list:

| Export | Added focus |
| --- | --- |
| `highConstitution101Questions` | Mootness and ripeness, original versus appellate jurisdiction, selective incorporation review, compelled speech, vagueness, and overbreadth. |
| `highUsGovernmentCivicsQuestions` | School boards, zoning hearings, participatory budgeting, ethics commissions, inspector generals, and state ballot initiatives. |
| `highApUsGovernmentQuestions` | Wisconsin v. Yoder, New York Times v. United States, Brutus 1, Federalist 51, document pairing, and argument rebuttal. |
| `highPoliticalPhilosophyQuestions` | Restorative justice, transitional justice, feminist political theory, Indigenous sovereignty, misinformation and democratic legitimacy, and AI rights/responsibility. |

The sixth expansion pass rounded out the current feeder-course TODO list:

| Export | Added focus |
| --- | --- |
| `highConstitution101Questions` | Miranda warnings, standing and case-or-controversy, ex post facto laws, procedural versus substantive due process, emergency powers, and prior restraint. |
| `highUsGovernmentCivicsQuestions` | Public-records appeals, public procurement, local tax measures, public safety oversight, civic technology, and constituent services. |
| `highApUsGovernmentQuestions` | United States v. Lopez, McDonald v. Chicago, Tinker, Engel, argument essay evidence, and visual interpretation. |
| `highPoliticalPhilosophyQuestions` | Colonialism, punishment theory, workplace democracy, epistemic injustice, privacy, and algorithmic governance. |

The fifth expansion pass filled the next feeder-course gaps:

| Export | Added focus |
| --- | --- |
| `highConstitution101Questions` | Supremacy Clause conflicts, Fifth versus Sixth Amendment distinctions, informal constitutional change, Article V, due process versus equal protection, establishment and free exercise. |
| `highUsGovernmentCivicsQuestions` | County government, special districts, public records, local election offices, state constitutions, and public-service delivery. |
| `highApUsGovernmentQuestions` | Declaration of Independence, Articles of Confederation, Federalist 78, Letter from Birmingham Jail, SCOTUS comparison, and FRQ source analysis. |
| `highPoliticalPhilosophyQuestions` | Recognition and dignity, cosmopolitan duties, care ethics, libertarianism, democratic socialism, and perfectionism. |

The fourth expansion pass deepened the feeder courses:

| Export | Added focus |
| --- | --- |
| `highConstitution101Questions` | Incorporation, Fourth Amendment search, viewpoint neutrality, commerce power, implied powers, takings, habeas corpus, election law authority. |
| `highUsGovernmentCivicsQuestions` | Tribal sovereignty, emergency powers, public health authority, state courts, public budgets, open meetings, redistricting, agency rulemaking. |
| `highApUsGovernmentQuestions` | Federalist 70, Baker v. Carr, Citizens United, Shaw v. Reno, Gideon, Roe/Dobbs, bureaucratic discretion, quantitative turnout interpretation. |
| `highPoliticalPhilosophyQuestions` | Religion and public reason, disability justice, republican non-domination, civic republicanism, nationalism, environmental justice, borders, deliberative democracy. |

The third expansion pass deepened practical, comparative, and career scenarios:

| Export | Added focus |
| --- | --- |
| `highPracticalPoliticsQuestions` | Election administration, ballot measures, protest rules, democratic norms, U.K. devolution, EU institution names, misinformation, disclosure, city councils, manifestos. |
| `universityComparativePoliticsQuestions` | Hybrid regimes, welfare-state models, coalition theory, administrative law, constitutional courts, subsidiarity, subnational authority, political economy, cleavage structures, comparative methods. |
| `careerPublicAffairsQuestions` | Crisis statements, procurement rules, litigation coordination, advocacy measurement, stakeholder escalation, political due diligence, opposition research ethics, consultation responses, media risk, implementation dashboards. |

## Remaining High-Value Gaps

- Practical Politics has had three quality audits. A future pass should focus less on broad rewrites and more on spot-checking learner-facing tone, testing random draws in the UI, and adding only genuinely new learner jobs.
- Add future high-school scenarios only where they add new learner jobs: ballot curing, poll worker basics, public comment strategy, campaign data privacy, and how to read fiscal notes.
- Add future comparative scenarios around migration politics, constitutional courts versus ordinary courts, civil-military relations, bureaucratic politicization, party membership decline, and comparative local government.
- Add future career simulations around parliamentary questions, amendment drafting support, coalition data rooms, litigation holds, regulator remediation plans, and executive decision memos.

# CIPP/E: The GDPR Practitioner Who Maps Data, Picks a Lawful Basis, and Lives the 72-Hour Clock
**ID**: `cippE` · **Discipline**: Privacy / Data Protection (European Framework)

## Course Aim
A CIPP/E credential signals you can navigate the European data-protection framework as a working privacy professional, not as someone who has memorized the GDPR table of contents. The role is concrete: map data flows across business functions, draft a Records of Processing Activities (ROPA) under Article 30 and the DPIA (Article 35) for high-risk processing, choose a lawful basis under Article 6 before drafting the notice (not after), advise on Article 9 special-category data and Article 22 automated decision-making with safeguards, execute data-subject rights under Articles 12-22 within the one-month clock, and manage international transfers under Articles 44-49 in a post-Schrems II world that did not get easier.

The CIPP/E exam (IAPP, 90 multiple-choice items, 2.5 hours, scaled passing 300 on a 100-500 scale, roughly 70% correct in raw terms) covers the current Body of Knowledge across three domains: Introduction to European Data Protection (~10-15%), European Data Protection Law and Regulation (~50-55%, the GDPR engine room), and Compliance with European Data Protection Law (~35-45%, applied scenarios). Pacing ~1.7 minutes per item rewards conservative reading and article-grounded answers over instinct.

This syllabus trains the four habits of a CIPP/E-grade privacy practitioner: article-citation fluency (Articles 5, 6, 9, 13/14, 15-22, 25, 28, 30, 32, 33/34, 35, 37-39, 44-49, 51-59, 68-76, 83), CJEU-caselaw literacy (Schrems I, Schrems II, Google Spain, Bara, Lindqvist, Fashion ID, Digital Rights Ireland, La Quadrature du Net), regulator-fluent thinking (EDPB guidelines, lead supervisory authority cooperation, national DPA variations — CNIL, ICO, BfDI, Garante, DPC), and applied scenario judgment across employment, marketing, surveillance, outsourcing, and breach response. The voice should respect the rights at stake — Articles 7 and 8 of the EU Charter, Article 8 of the ECHR — without making the law sound mystical.

The goal is a working privacy toolkit and a passing scaled score: confident citation of the GDPR; fluent application in employment, marketing, surveillance, and outsourcing; transfer-mechanism literacy after Schrems II and the EU-US Data Privacy Framework (2023); and a steady hand under a 72-hour Article 33 breach clock.

## Course Design Notes
Route questions here when they cover IAPP CIPP/E content specifically — the European framework. CIPP/E differs from CIPP/US (US sectoral and state law) and CIPM (privacy program management). When a question is really about a US privacy law (CCPA/CPRA, HIPAA, GLBA, FERPA), route to CIPP/US. When it is about how to operationalize a privacy program (metrics, vendor management process), route to CIPM. When it is about AI governance or AI Act details beyond GDPR interplay, route to AIGP. The voice should respect rights at stake while keeping the law accessible.

## Exam Map and Study Rhythm
90 MCQ, 2.5 hours, scaled passing 300. Canonical preparation: IAPP textbook European Data Protection (current edition) + IAPP Practice Test + online prep. Typical cadence: 80-120 hours over 2-4 months.

| Domain | Weight | What It Tests | Study Posture |
|---|---:|---|---|
| Introduction to European Data Protection | 10-15% | History — Convention 108, EU Directive 95/46, Charter Articles 7 and 8; institutions — Commission, Council, Parliament, EDPB, EDPS, CJEU; Council of Europe + ECHR Article 8 | Institutions map; instrument typology |
| European Data Protection Law and Regulation | 50-55% | GDPR articles cluster by cluster — scope, definitions, principles, lawful bases, special categories, rights, controller/processor obligations, security, breach notification, DPO/DPIA, transfers, supervisory authorities, sanctions; ePrivacy 2002/58; NIS2; DSA/DMA; AI Act interplay | Article-by-article notes; EDPB guidelines list |
| Compliance with European Data Protection Law | 35-45% | Employment, marketing/profiling, surveillance (CCTV, biometrics), outsourcing (Art 28), cross-border transfers post-Schrems II + TIAs, breach response operational, member-state variations | Scenario practice with article + recital citation |

## Chapter 1: Origins, Instruments, Institutions
**Core questions:** Where does European data protection come from, and which body does what?

**Key concepts**
- Council of Europe Convention 108 (1981, the first binding international data-protection treaty) and 108+ (modernized 2018); ECHR Article 8 (private and family life)
- EU Charter of Fundamental Rights Article 7 (private/family life) and Article 8 (protection of personal data, with independent supervision and judicial review)
- From the 1995 Data Protection Directive (95/46/EC) to the GDPR (Regulation 2016/679, applicable May 2018)
- EU institutions: Commission (executive, proposes), Council (member states), Parliament (co-legislator), CJEU (Court of Justice), EDPB (European Data Protection Board, formerly WP29), EDPS (supervises EU institutions), national DPAs
- Law Enforcement Directive 2016/680 (parallel regime for criminal-justice data)
- Pending ePrivacy Regulation (in trilogue); current ePrivacy Directive 2002/58 governs cookies and electronic communications

**Applied skills**
- Match the right legal instrument to the right factual context (commercial vs criminal vs EU institutions)
- Explain the difference between a regulation (directly applicable) and a directive (requires transposition)

**Common traps**
- **CoE vs EU.** Council of Europe (Strasbourg, 46 members, includes UK and non-EU) is distinct from the EU. Convention 108 is a CoE treaty, not EU legislation.
- **EDPB vs EDPS.** EDPB coordinates national DPAs; EDPS supervises the EU institutions themselves.
- **Directive vs regulation.** Directives require national transposition (so Member State variation persists). The GDPR is a regulation but contains 50+ "opening clauses" allowing national variation.
- **WP29 still relevant.** EDPB has endorsed many WP29 guidelines; they remain authoritative until superseded.

**Authoritative sources:** Convention 108 + 108+; EU Charter; GDPR Recitals 1-7; EDPB Rules of Procedure.

## Chapter 2: Scope, Definitions, Key Concepts (Articles 2-4)
**Core questions:** When does the GDPR apply, and who is who?

**Key concepts**
- Material scope (Art 2): wholly or partly automated processing, plus structured manual filing systems; exclusions — household activity, law enforcement (covered by LED), national security
- Territorial scope (Art 3): (1) processing in the context of EU establishment activities (regardless of where processing occurs); (2) non-EU controllers targeting EU data subjects with offering of goods/services OR monitoring behavior in the EU
- Personal data (Art 4(1)): any information relating to an identified or identifiable natural person; Breyer C-582/14 confirms dynamic IPs are personal data where reasonable means to identify exist
- Special categories (Art 9(1)): racial/ethnic origin, political opinions, religious/philosophical beliefs, trade-union membership, genetic, biometric (for unique identification), health, sex life or sexual orientation
- Article 10 criminal-conviction data
- Pseudonymization (Art 4(5)) — still personal data; anonymization — out of scope (must be irreversible per WP29/EDPB)
- Controller, processor, joint controllers (Art 26), recipients, third parties

**Applied skills**
- Decide whether a non-EU SaaS provider is in scope and on what theory
- Distinguish controller from processor in a multi-party data flow

**Common traps**
- **Targeting vs incidental access.** Art 3(2)(a) requires intent to offer goods/services to EU data subjects — payment in EUR, EU-language site, shipping to EU. A merely accessible English-language site does not target the EU by itself (Recital 23).
- **Monitoring.** Art 3(2)(b) covers behavioral monitoring (tracking cookies, profiling) — broader than "marketing."
- **Joint controllers vs controller-processor.** Joint controllers jointly determine purposes and means (Art 26) and must have an arrangement allocating responsibilities AND make the essence available to data subjects; both are jointly and severally liable under Art 82(4). A processor only acts on documented controller instructions under Art 28.
- **Anonymization is hard.** Hashing alone is pseudonymization, not anonymization. Re-identification by reasonable means re-engages the GDPR.

**Authoritative sources:** EDPB Guidelines 3/2018 territorial scope; EDPB Guidelines 7/2020 controller-processor concepts; WP29/EDPB anonymization guidance.

## Chapter 3: Principles and Lawful Bases (Articles 5, 6, 9, 10)
**Core questions:** What are the seven data-protection principles, and which lawful basis fits this case (and only this case)?

**Key concepts**
- Article 5 principles: (a) lawfulness, fairness, transparency; (b) purpose limitation; (c) data minimization; (d) accuracy; (e) storage limitation; (f) integrity and confidentiality; plus accountability (5(2)) — the controller must be able to demonstrate compliance
- Article 6 lawful bases: (a) consent; (b) contract performance; (c) legal obligation; (d) vital interests; (e) public interest/official authority; (f) legitimate interests (not available to public authorities for their tasks per Art 6(1) sentence 2)
- Article 7 conditions for consent: freely given, specific, informed, unambiguous; demonstrable; withdrawable as easily as given; not bundled with services
- Article 9(2) exceptions for special categories: explicit consent, employment/social-security/social-protection, vital interests where data subject incapable, foundation/association legitimate activities, manifestly made public by data subject, legal claims, substantial public interest, preventive/occupational medicine, public health, archiving/research
- Article 10 criminal-conviction data: only under EU/MS law authority
- Legitimate-interests three-step test: purpose test (legitimate?), necessity test (necessary?), balancing test (does data subject's interest override?); Recital 47 recognizes direct marketing as a legitimate interest; data subject can object absolutely under Art 21(3) for direct marketing

**Applied skills**
- Pick the lawful basis before drafting any notice
- Run a defensible LIA and document it

**Common traps**
- **Consent vs contract for online services.** EDPB Guidelines 2/2019 on contract performance: do not use Art 6(1)(b) for processing that is not objectively necessary to perform the contract (e.g., behavioral advertising). Consent (Art 6(1)(a)) is the proper basis where contract necessity fails.
- **Consent for special categories.** Art 9 requires "explicit" consent — separate, unambiguous statement; meeting Art 7 alone is not enough.
- **Public authorities and legitimate interests.** Art 6(1)(f) sentence 2 forbids public authorities from using legitimate interests for processing in performance of their tasks.
- **Children's consent.** Art 8 sets a default age of 16 for information-society services, member states may lower to as low as 13.
- **LIA documentation.** Failure to document a Legitimate Interests Assessment is itself an accountability failure under Art 5(2).

**Authoritative sources:** GDPR Articles 5-10, Recitals 39-50; EDPB Guidelines 5/2020 consent; EDPB Guidelines 2/2019 contract performance.

## Chapter 4: Data Subject Rights (Articles 12-22)
**Core questions:** What rights apply, what limits apply, and how do you operationalize them under a one-month clock?

**Key concepts**
- Modalities (Art 12): plain language, intelligible, free of charge, one month + 2-month extension for complex requests; manifestly unfounded or excessive: refuse or reasonable fee
- Information (Arts 13 collected from subject, 14 collected from third parties): full content including legal basis, recipients, retention, rights, complaints to DPA
- Right of access (Art 15): confirmation + copy + content metadata (purposes, categories, recipients, retention); third-party rights and trade secrets may limit
- Rectification (Art 16): correction/completion
- Erasure / "right to be forgotten" (Art 17): six grounds (no longer necessary, withdrawal of consent, objection, unlawful processing, legal obligation, children's data); five exceptions (freedom of expression, legal obligation/public-interest task, public-health, archiving/research/statistics, legal claims) — Google Spain C-131/12 established the right vis-à-vis search engines
- Restriction (Art 18): four grounds; controller may store but not otherwise process
- Portability (Art 20): only data provided by the subject, processed under consent or contract, by automated means; structured, commonly used, machine-readable
- Objection (Art 21): absolute right for direct marketing; for legitimate-interests/public-task processing, controller must show compelling legitimate grounds
- Automated decision-making and profiling (Art 22): right not to be subject to a decision based solely on automated processing with legal/similarly significant effects, subject to exceptions (contract necessity, EU/MS law, explicit consent); safeguards including human intervention, right to express view, right to contest

**Applied skills**
- Handle a DSAR mixing valid requests with fishing
- Explain Article 22 limits on solely automated decisions with legal or similarly significant effects

**Common traps**
- **Erasure exceptions.** "Right to be forgotten" is not absolute. Art 17(3) lists five exceptions — freedom of expression and information being the most exam-tested.
- **Portability scope.** Only data the subject provided (consciously and actively, or via service observation per EDPB), and only consent/contract bases. Inferred data (analytics-derived) is generally outside scope.
- **Objection vs withdrawal of consent.** Withdrawal applies to consent-based processing. Objection applies to legitimate-interests, public-task, or direct-marketing processing.
- **Art 22 "solely."** Human "rubber stamp" review does not break the "solely automated" character. Meaningful review with authority to override is required.
- **DSAR identity verification.** Reasonable measures only; cannot demand disproportionate identification documents.

**Authoritative sources:** GDPR Arts 12-22, Recitals 58-73; EDPB Guidelines on automated decision-making (WP251rev.01); Google Spain C-131/12.

## Chapter 5: Controller / Processor Obligations (Articles 24-39)
**Core questions:** What does accountability mean beyond a slogan?

**Key concepts**
- Article 24 controller responsibility; Article 25 data protection by design and by default
- Article 26 joint controllers (arrangement + essence to data subjects); Art 27 representative for non-EU controllers/processors
- Article 28 processor obligations + eight mandatory contract terms (subject matter, duration, nature/purpose, type of data, categories of data subjects, controller obligations and rights, and detailed processor duties — process on documented instructions; confidentiality; security; sub-processor authorization; assistance with rights; assistance with breach/DPIA/consultation; deletion/return; audit cooperation)
- Sub-processor authorization (Art 28(2)): prior specific or general written authorization; controller may object
- Article 30 Records of Processing Activities: required of controllers and processors; exemption for <250 employees IF processing is occasional AND not high-risk AND no special categories — narrow exemption
- Article 32 security: state of the art + costs vs risk; pseudonymization, encryption, confidentiality/integrity/availability/resilience, restore capability, regular testing
- Article 33 breach notification to SA: without undue delay, where feasible within 72 hours; content per Art 33(3) — nature, categories and approximate numbers, DPO contact, likely consequences, measures
- Article 34 communication to data subjects: when high risk to rights/freedoms; exceptions — encryption/measures rendering data unintelligible, subsequent measures eliminating high risk, disproportionate effort (then public communication)
- DPIA (Art 35): required for high-risk processing — large-scale special categories, systematic monitoring of publicly accessible areas, large-scale evaluation/scoring with legal effects, EDPB list-of-9 criteria (two of nine usually triggers)
- Prior consultation (Art 36): residual high risk after DPIA mitigations
- DPO (Arts 37-39): required for public authorities (except courts), core activities of systematic large-scale monitoring of subjects, or large-scale processing of Art 9 or Art 10 data; independence, reporting to highest level, expertise, tasks under Art 39

**Applied skills**
- Build a defensible ROPA without melting the business
- Decide whether a project triggers a DPIA and document the answer
- Draft an Art 28 processor contract that survives DPA scrutiny

**Common traps**
- **ROPA <250 employees exemption.** Conjunctive: must be occasional AND not high-risk AND no special categories AND not criminal data. In practice, very few SMEs qualify because customer-data processing is usually not occasional.
- **72-hour clock.** From "awareness" — confirmed knowledge of the breach, not the first signal. Clock can pause only briefly for confirmation.
- **DPO independence.** No instructions from the employer on tasks; cannot be dismissed for performing tasks; reports to highest level. May not hold a position that would create a conflict.
- **Joint-controller Art 26 arrangement.** Must allocate respective responsibilities AND essence available to data subjects. Both controllers remain jointly and severally liable to data subjects (Art 82(4)).
- **Article 28 vs Article 26.** Processor contracts (Art 28) and joint-controller arrangements (Art 26) are different instruments with different obligations.

**Authoritative sources:** GDPR Arts 24-39; EDPB Guidelines 9/2022 personal data breach notification; EDPB Guidelines on DPIA WP248 rev.01; EDPB Guidelines on DPO WP243.

## Chapter 6: International Transfers (Articles 44-49) — Post-Schrems II
**Core questions:** How do you move personal data outside the EEA after Schrems II without pretending nothing happened?

**Key concepts**
- General principle (Art 44): no transfer unless conditions of Chapter V are met
- Article 45 adequacy decisions: current adequacy countries include Andorra, Argentina, Canada (commercial), Faroe Islands, Guernsey, Isle of Man, Israel, Japan, Jersey, New Zealand, Republic of Korea, Switzerland, United Kingdom, Uruguay, and EU-US Data Privacy Framework (July 2023)
- Article 46 appropriate safeguards: SCCs (new 2021 modular set — C2C, C2P, P2P, P2C; review every 18 months for material changes); BCRs (Art 47, lengthy approval process via lead SA + EDPB); approved codes of conduct (Art 40); approved certifications (Art 42)
- Article 49 derogations: explicit consent, contract performance, important public interest, legal claims, vital interests, public register; narrowly construed (one-off, not systematic)
- Schrems I (CJEU C-362/14, 2015): invalidated Safe Harbor
- Schrems II (CJEU C-311/18, 2020): invalidated Privacy Shield; held SCCs valid only if accompanied by supplementary measures sufficient to ensure essentially equivalent protection where the importer's local law (especially government access) undermines them
- EDPB Recommendations 1/2020 on supplementary measures: technical (encryption + key control, pseudonymization), contractual, organizational
- Transfer Impact Assessment (TIA): assess importer's local law, third-country government access, safeguards, supplementary measures
- EU-US Data Privacy Framework (July 2023): adequacy decision; new redress mechanism (Data Protection Review Court); Executive Order 14086 limitations on US intelligence; self-certification by US importers via Department of Commerce

**Applied skills**
- Run a TIA for a US processor and pick supplementary measures with eyes open
- Distinguish a transfer from mere "processing in transit"
- Pick the right SCC module (C2C / C2P / P2P / P2C)

**Common traps**
- **Adequacy ≠ SCCs.** Adequacy is a unilateral Commission decision per country. SCCs are a bilateral contractual safeguard between exporter and importer.
- **Onward transfers.** Onward transfer from a country with adequacy to a non-adequate third country still requires an Article 46 mechanism.
- **DPF self-certification.** EU-US DPF only covers US importers that have self-certified with Commerce. A US importer NOT self-certified must use SCCs + supplementary measures.
- **Derogations are not for routine flows.** Art 49 must be one-off; EDPB Guidelines 2/2018 confirm derogations cannot be the default mechanism for ongoing transfers.
- **Schrems II for non-US transfers.** The TIA logic applies to all third-country transfers (e.g., India, China, Russia), not just the US.

**Authoritative sources:** GDPR Arts 44-50; EDPB Recommendations 1/2020 supplementary measures; EDPB Recommendations 2/2020 European Essential Guarantees; Schrems II C-311/18.

## Chapter 7: Supervisory Authorities, EDPB, Enforcement, Sanctions (Articles 51-84)
**Core questions:** Who enforces, how do they cooperate, and what fines actually look like?

**Key concepts**
- National DPAs (Arts 51-59): independent supervisory authorities, investigative + corrective + authorization + advisory powers
- Lead supervisory authority + one-stop-shop: for cross-border processing, the LSA is in the main establishment; cooperation under Art 60; consistency mechanism Arts 63-67; EDPB binding decision Art 65 in case of disagreement
- EDPB (Arts 68-76): adopts guidelines, opinions, binding decisions; chaired by an SA head
- Administrative fines (Art 83): two tiers — up to €10m or 2% global turnover for procedural breaches (Arts 8, 11, 25-39, 41-43); up to €20m or 4% global turnover for substantive breaches (Arts 5, 6, 7, 9, 12-22, 44-49, 58 orders); whichever is higher
- Compensation (Art 82) — material and non-material damage; controllers/processors liable, joint and several for joint controllers
- Judicial remedies: Art 78 against SA; Art 79 against controller/processor; representative actions (Art 80)
- Notable enforcement: Meta (multiple, large), Amazon Luxembourg (€746m), TikTok, Clearview AI, Google (CNIL early Schrems II case)

**Applied skills**
- Identify the LSA for a cross-border processing operation
- Calibrate risk between low- and high-tier fines

**Common traps**
- **LSA test.** Main establishment for controllers is the place where decisions on purposes/means are made (Recital 36), not necessarily the registered HQ.
- **One-stop-shop limits.** Local processing not crossing borders stays with the local DPA; concerned SAs can submit relevant and reasoned objections.
- **Tier of fine.** Article 5 principles violations are top tier (4% / €20m). Article 30 ROPA breach is bottom tier (2% / €10m). The exam tests the distinction.
- **EDPB binding decisions.** Used to resolve LSA/concerned SA disagreement under Art 65 — relatively rare but consequential (e.g., WhatsApp Ireland 2021).

**Authoritative sources:** GDPR Arts 51-84; EDPB binding decisions; CNIL, ICO, BfDI, DPC enforcement registers.

## Chapter 8: ePrivacy, NIS2, AI Act, DSA/DMA Interplay
**Core questions:** Where does the GDPR end and other EU regimes begin?

**Key concepts**
- ePrivacy Directive 2002/58 (as amended 2009): confidentiality of electronic communications, cookies and similar tracking technologies (Art 5(3) — informed consent required for storage/access to non-strictly-necessary terminal-equipment information), direct marketing (Art 13 — opt-in for unsolicited email, soft opt-in for existing customers)
- Pending ePrivacy Regulation status (in trilogue; still pending)
- NIS2 Directive (2022/2555): essential and important entities, cybersecurity risk management measures, incident reporting (early warning 24h, full notification 72h, final report 1 month)
- DSA (Digital Services Act) and DMA (Digital Markets Act): online platforms, gatekeepers, advertising transparency
- AI Act (Regulation 2024/1689): risk-based — prohibited practices, high-risk AI systems with data-protection interplay (transparency, human oversight, data governance)
- Law Enforcement Directive 2016/680 (criminal-justice processing)
- National laws variations: UK GDPR + Data Protection Act 2018 + Data Protection and Digital Information Bill (now DPDI Act); Germany BDSG; France Loi Informatique et Libertés (as amended); Italy DLgs 196 as amended; Ireland Data Protection Act 2018

**Applied skills**
- Choose the correct instrument for a cookie banner question or a marketing email question
- Sequence NIS2 incident notification alongside GDPR breach notification

**Common traps**
- **Cookies = ePrivacy lex specialis.** Storage/access on a user's device requires consent under ePrivacy Art 5(3), regardless of personal-data status. Then the GDPR governs any personal data processed thereafter.
- **Direct marketing legal basis.** Email: ePrivacy opt-in (or soft opt-in for similar products to existing customers). Postal: GDPR legitimate interests usually fine. SMS: opt-in. Calls: depends on national rule.
- **NIS2 vs GDPR breach.** Different triggers (NIS2: significant incident; GDPR: personal-data breach with risk). Both clocks can run in parallel; harmonize internal incident response.
- **AI Act and GDPR.** AI Act adds requirements on top of the GDPR (transparency, data governance for training data); does not displace data-protection law.

**Authoritative sources:** ePrivacy Directive 2002/58; NIS2 Directive 2022/2555; AI Act Regulation 2024/1689; national DPA cookie guidance (CNIL, ICO, DSK).

## Chapter 9: Compliance Scenarios — Employment, Marketing, Surveillance, Outsourcing, Breach
**Core questions:** Can you handle a fact pattern in employment, marketing, surveillance, outsourcing, and breach response without losing the thread?

**Key concepts**
- Employment: works councils consultation (in DE — Betriebsrat; AT, IT); proportionality test for monitoring; hiring (background checks limited); BYOD; performance monitoring; whistleblowing (EU Whistleblower Directive 2019/1937)
- Marketing: opt-in email under ePrivacy; soft opt-in for similar products to existing customers; OBA (online behavioral advertising) and consent vs legitimate interest debate; profiling; EDPB Guidelines 8/2020 targeting social media users
- Surveillance: CCTV — EDPB Guidelines 3/2019 video devices; biometric workplace surveillance restricted (Art 9); location data; vehicle telematics
- Outsourcing: Art 28 processor contracts mandatory provisions; sub-processor authorization (general or specific); audit rights; sub-processor list maintenance
- Breach response operational: what is a breach (confidentiality, integrity, OR availability); risk assessment to data subjects; 72-hour SA notification (Art 33(1)); content (Art 33(3)); communication to data subjects when high risk (Art 34); documentation regardless of notification (Art 33(5))

**Applied skills**
- Triage a breach with incomplete facts and a running clock
- Sequence DPIA, ROPA update, and notice changes after a product change

**Common traps**
- **Cookie consent and legitimate interests.** Cookies are governed by ePrivacy first — consent is required for non-strictly-necessary cookies. Legitimate-interests basis under the GDPR does not displace the ePrivacy consent rule.
- **Soft opt-in narrow.** Applies only to existing customer + similar products + opt-out provided at collection AND in every message. B2B in some Member States (e.g., Germany) is highly restricted by national unfair-competition law (UWG).
- **DPIA mandatory.** Art 35(3) lists three mandatory triggers + EDPB nine-criteria list (two of nine usually triggers). Failure to perform DPIA is a separate breach.
- **Breach availability.** Loss of access (e.g., ransomware encryption) is a personal-data breach even without exfiltration.
- **CCTV proportionality.** Public-area surveillance must be necessary and proportionate; covert workplace surveillance is rarely lawful; signage and ROPA mandatory.

**Authoritative sources:** EDPB Guidelines 3/2019 video devices; EDPB Guidelines 8/2020 targeting social media; EDPB Guidelines 9/2022 personal data breaches; national DPA employment guidance.

## Capstone: Exam-Day Discipline
Pacing target: ~1.7 minutes per item. Strategy: identify the relevant GDPR article (and sometimes the EDPB guideline) in mind, then pick the answer that aligns with its exact wording. Avoid the "most consumer-friendly" trap (the answer that sounds protective is sometimes legally wrong) and the "longest-answer" trap. Article-grounded thinking covers most of the exam: scope (Art 3), basis (Art 6/9), rights (12-22), transfers (44-50), accountability (5(2), 30, 35), breach (33-34), sanctions (83).

**Capstone deliverables**
- One mixed 45-item drill across all domains
- Personal exam-day playbook with timing checkpoints
- Error log review keyed to GDPR article cluster

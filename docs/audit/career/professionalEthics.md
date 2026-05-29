# Audit: professionalEthics

**Syllabus**: [`src/data/syllabi/career/professional_ethics.md`](../../../src/data/syllabi/career/professional_ethics.md)
**Track id**: `professionalEthics` (title "Professional Ethics: No Tiny Crimes")
**Tier**: career
**Status**: `playable`
**Region**: Mostly non-jurisdictional (ethics frameworks transfer). Some scenarios (FCPA-style charity bribery, US-style harassment response, employee monitoring under US law) carry implicit US framing. Recommend `region: 'US'` only on questions that depend on US employment/anti-bribery doctrine; the rest can stay region-agnostic.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Integrity, Role Duties, and the Law/Ethics Gap | Partial | "Out of depth" (competence), "audit buddy" (independence) hit role duties; explicit law/ethics gap drills missing. |
| 2. Stakeholders, Harms, and Incentives | Yes | Conflicts (vendor cousin, intern shortlist), incentives (bonus plan with blinders — in `Credentials*` files for other tracks but spirit present), pressure (ship known bug). |
| 3. Ethical Frameworks That Actually Help | **Gap** | Only one question (hand-authored in `careerPhilosophyQualificationQuestions.ts` — "Consequences and Duties") directly drills frameworks. No reversibility, publicity test, virtue, care, or moral residue drills. |
| 4. Speaking Up, Escalation, and Documentation | Yes | "Internal path" whistleblowing, "small safety signal", "backdated approval", "verbal approval", "boss edits finding" — strong. |
| 5. Fair Process, Investigations, and Bias | Partial | "Promotion packet" fairness, "flexible schedule" equal treatment, "fast exception" consistency. No explicit due-process/procedural-justice drills. |
| 6. Ethical Culture and Control Design | Partial | "Near miss cleanup", "quiet punishment" retaliation, "manipulative metrics", "training records" — present but spread thin. Normalization-of-deviance not explicitly drilled. |
| 7. Sector Dilemmas (Finance, Healthcare, Law, Tech, Management) | Partial | Tech (AI output, customer data, synthetic reference), finance/procurement (split purchase, vendor fairness), management (harassment, accessibility) covered. Healthcare-ethics dilemmas under-covered (consent, vulnerable patients, billing). |
| 8. Capstone: The Tiny Crime Audit | n/a | Capstone is a deliverable, not a question chapter. |

**Chapter taxonomy mismatch.** The hand-authored bank uses simple names: "Workplace Ethics", "Decision Ethics", "Applied Philosophy", "Speaking Up". The generated files use long "Professional Ethics: X" prefixes (e.g., "Professional Ethics: Conflicts", "Professional Ethics: Confidentiality", "Professional Ethics: Data Integrity"). Neither matches the syllabus' descriptive chapter titles. Realign on the syllabus' 8 chapter framing, then translate into shorter chapter labels that match the hand-authored voice.

## Per-file recommendations

| File | PE Q's | Bucket | Reason |
|---|---|---|---|
| [`careerPhilosophyQualificationQuestions.ts`](../../../src/data/questionCatalog/careerPhilosophyQualificationQuestions.ts) `professionalEthicsQuestions` | 4 | **KEEP** | **Gold standard for the cluster.** Hand-authored, per-distractor explanations, sharp voice ("Conflict of Interest", "Duty Under Pressure", "Consequences and Duties", "Escalation"). Sourced as `Floe authored career expansion`. Use as voice template for all new authoring. |
| [`careerAgentGeneratedQualificationsEthicsOps.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsEthicsOps.ts) (professionalEthics slice, lines 31–122) | ~18 | **FIX** | Genuinely strong scenarios with good voice ("vendor cousin", "elevator numbers", "dashboard polish", "backdated approval", "promotion packet"). Every wrong answer uses `DEFAULT_FLAW`. Rewrite per-distractor, align chapter names to syllabus, become canonical bank. |
| [`careerAgentGeneratedQualificationsEthicsOps2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsEthicsOps2.ts) (professionalEthics slice, lines 31–172) | ~28 | **MERGE → EthicsOps** | Significant volume with novel scenarios (synthetic citation, accidental competitor deck, charity bribery, panel quote, side consulting, training records, near miss). Heavy overlap with EthicsOps on conflicts/data-integrity/escalation. Salvageable ~10–14 novel scenarios. Same `DEFAULT_FLAW` string as EthicsOps — easier merge than other cluster files. Cut duplicates. |
| [`careerAgentGeneratedProfessionalPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedProfessionalPracticePolish.ts) (professionalEthics slice, lines 119–140) | ~4 | **DELETE** | Polish slice — already covered. Different `DEFAULT_FLAW`. |
| [`careerAgentGeneratedQualificationFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationFrontDoorPolish.ts) (professionalEthics slice, lines 141–162) | ~4 | **DELETE** | Polish slice — already covered. Yet another `DEFAULT_FLAW`. |
| [`careerAgentGeneratedCoreFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreFinalTopOff.ts) (professionalEthics slice, lines 251–272) | ~4 | **DELETE** | Already-covered ground. `DEFAULT_FLAW` chain. |

**Net effect**: ~62 PE questions across 6 files → 4 hand-authored KEEP + ~25 in 1 canonical merged bank. Adding 4–6 Chapter 3 (frameworks) questions and 4 healthcare-ethics sector dilemmas closes the two real gaps.

## Open actions (priority order)

1. **Author 4–6 Chapter 3 (Ethical Frameworks) questions** — this is the largest content gap. The syllabus explicitly names reversibility, publicity test, proportionality, moral residue, care, virtue, justice — none drilled today. Use the `careerPhilosophyQualificationQuestions.ts` "Consequences and Duties" question as voice template.
2. **Consolidate `EthicsOps` and `EthicsOps2`** into one canonical bank with per-distractor rewrites and syllabus-aligned chapter names.
3. **Delete the three Polish slices** (`ProfessionalPracticePolish`, `QualificationFrontDoorPolish`, `CoreFinalTopOff`) after confirming no salvageable content.
4. **Author 4 healthcare-ethics scenarios** for Chapter 7 (consent, vulnerable patients, billing fairness).
5. **Region-tag the bribery/employment-law scenarios** as `US` (FCPA-style charity bribery, employee monitoring, harassment-response procedure). Leave general ethics-framework questions region-agnostic.
6. **Add `lastReviewed` metadata** to law-adjacent questions (FCPA, employment law, retaliation protections) — the framework guidance evolves.

## Estimated effort

- New authoring (Chapter 3 frameworks + healthcare scenarios): ~3.5 hours (10 questions × 20 min)
- Per-distractor rewrite + merge across EthicsOps and EthicsOps2: ~6 hours (~46 questions × 8 min)
- Delete polish slices: ~30 min
- Region tagging + lastReviewed: ~1 hour

**~1.5 working days** to bring Professional Ethics to bar.

## Notes for next auditor

The hand-authored `professionalEthicsQuestions` in `careerPhilosophyQualificationQuestions.ts` is one of the best-written assets in the whole career catalog — alongside `jargonBusters.ts` it defines the Floe voice for soft-skill-meets-rigor career courses. Use both as templates. Note: `EthicsOps` and `EthicsOps2` also feed `supplyChain` and `technicalSales` — those audits should follow the same per-distractor rewrite pattern. The 8th chapter is a capstone deliverable, not question-bank territory — coverage assessment should treat chapters 1–7 as the actual question surface.

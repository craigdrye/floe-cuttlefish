# Audit: clinicalResearchJargon

**Syllabus**: [`src/data/syllabi/career/clinical_research_jargon_buster.md`](../../../src/data/syllabi/career/clinical_research_jargon_buster.md)
**Track id**: `clinicalResearchJargon`
**Tier**: career
**Status**: `playable`
**Region**: US (assumed throughout — IRB, FDA, ICH GCP; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Consent, Eligibility, Participant Rights | ✅ | jargonBusters `Consent Bay`, GovClinicalTopOff "Check the consent sequence" / "Prove the checkbox" |
| 2. Source, CRFs, Data Integrity | ✅ | jargonBusters `Source Shelf` / `Query Cove`, GovClinicalTopOff "Fix late entry clarity" / "Resolve impossible value" / "Explain the correction" |
| 3. Safety Language | ✅ | jargonBusters `Safety Reef` / `AE Channel` / `Safety Shelf`, GovClinicalTopOff "Route the symptom" / "Close the safety loop" |
| 4. Deviations and CAPA | ✅ | jargonBusters `Protocol Reach` / `Deviation Channel`, GovClinicalTopOff "Name the real miss" |
| 5. Monitoring, Closeout, Inspection Readiness | ✅ | jargonBusters `Monitor Letter` / `Monitoring Bay` / `Inspection Lagoon` / `Closeout Bay`, GovClinicalTopOff "Turn noted into done" / "Reconcile open loops" |

Full coverage — no gaps. This track is content-rich, with the hand-written `jargonBusters` set as the anchor and a generated TopOff adding scenario depth.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`jargonBusters.ts` → clinicalResearchJargonQuestions (lines 511–672)](../../../src/data/questionCatalog/jargonBusters.ts) | ~20 | **KEEP** | **Gold standard.** Hand-authored with per-distractor reasoning ("Raccoons are a joke about messy setup"), distinctive voice (Site Initiation, Consent Bay, Query Cove, Reg Binder, Closeout Bay), every wrong answer explained. The model for career voice. |
| [`careerAgentGeneratedJargonGovClinicalTopOff.ts` → clinicalResearchJargon (lines 184–335)](../../../src/data/questionCatalog/careerAgentGeneratedJargonGovClinicalTopOff.ts) | 30 | **FIX** | Scenarios are genuinely good and add range (audit trail, vendor oversight, remote monitoring, conmed reconciliation, randomization protection). But every wrong answer uses the file-wide `DEFAULT_FLAW` constant ("This is a plausible distractor, but it does not match the scenario or practical jargon translation."). Rewrite per-distractor explanations and this becomes a strong companion to jargonBusters. |
| [`careerAgentGeneratedJargonPracticePolish.ts` → clinicalResearchJargon (lines 97–117)](../../../src/data/questionCatalog/careerAgentGeneratedJargonPracticePolish.ts) | 4 | **MERGE → jargonBusters or DELETE** | Only 4 questions, all hitting concepts already covered by jargonBusters (query, deviation severity, source vs CRF, SAE definition) but with shallower DEFAULT_FLAW distractors. The jargonBusters versions are better in every dimension — delete unless one specific item should be lifted. |

**Net effect**: ~54 questions across 3 files → ~50 high-quality after fixing GovClinicalTopOff and pruning PracticePolish overlaps.

## Open actions (priority order)

1. **Rewrite per-distractor explanations in `careerAgentGeneratedJargonGovClinicalTopOff.ts`** clinicalResearchJargon block (30 items × ~5 min each ≈ 2.5 hours). The scenarios are solid; only the boilerplate "why wrong" lines need replacement.
2. **Delete the 4-item `clinicalResearchJargon` block from `careerAgentGeneratedJargonPracticePolish.ts`** — fully covered by jargonBusters at higher quality. Update `career.ts:194` to drop the spread.
3. **Add `region: 'US'` and `lastReviewed: <date>`** to the track entry in [`src/data/ageCatalog/career.ts:181`](../../../src/data/ageCatalog/career.ts). All content references US/international regulatory frameworks (IRB, FDA, ICH GCP); should be tagged for future jurisdiction filtering.
4. **Verify chapter taxonomy alignment**: jargonBusters chapters ("Site Initiation", "Consent Bay", "Safety Reef") read as voice flavor rather than the syllabus chapters (Consent / Source / Safety / Deviations / Monitoring). Document as intentional voice convention or remap to syllabus.

## Estimated effort

- DEFAULT_FLAW rewrite for GovClinicalTopOff: ~3 hours
- Delete PracticePolish 4-item block + rewire: 15 min
- Region/date tagging: 15 min

**~½ working day.** Track is in good shape — the only real work is the per-distractor rewrite on the TopOff bank.

## Notes for next auditor

This is the highest-quality healthcare track in the cluster. Use the `jargonBusters.ts` clinicalResearchJargonQuestions block as the voice/quality template for all healthcare authoring. The "name the real miss" pattern from GovClinicalTopOff (workflow euphemism → required action) is a particularly good question shape worth replicating for hospital admin, nursing, and billing tracks.

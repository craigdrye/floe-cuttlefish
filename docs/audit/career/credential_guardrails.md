# Career Credential Guardrails

Last updated: 2026-05-20

This note is the maintenance checklist for the career-level credential push. The current target is a runtime floor of 200 questions for each prioritized credential or credential-adjacent career track, with generated expansion questions carrying the internal source tag below.

## Internal Generated Source

Use this exact source value for new generated credential questions:

`Floe career agent-generated credential expansion 2026-05-20`

The audit treats this as the marker for questions produced during the credential expansion pass. Keep it stable so review queues, downstream exports, and temporary question-quality sliders can identify generated material even after the app changes.

## Target Tracks

The guarded tracks are:

- `series86`
- `series87`
- `cfaLevelOne`
- `cpaExam`
- `barExam`
- `pmpWrangler`
- `shrmPeople`
- `patentBar`
- `crcm`
- `ccep`
- `amlCompliance`
- `bankComplianceAmlRoadmap`
- `customsBroker`
- `aigp`
- `nerc`
- `apiInspectors`
- `cdfm`
- `certifiedGeneralAppraiser`
- `medicalCodingRoadmap`
- `clinicalResearchRoadmap`
- `healthcareComplianceRoadmap`
- `regulatoryAffairsRoadmap`
- `pharmaDrugSafetyRoadmap`
- `healthInsurancePayersRoadmap`
- `procurementContractingRoadmap`
- `defenseBudgetingRoadmap`

## Required Checks

Run the combined guardrail before shipping credential-bank changes:

```bash
npm run audit:career-credential-all
```

For a compact daily check, run:

```bash
npm run audit:career-credential-summary
```

That command runs both checks:

- `npm run audit:career-credentials` verifies the 200-question floor, the generated source tag, duplicate IDs, duplicate prompts within each track, generated ID collisions, and malformed answer sets.
- `npm run audit:career-credential-balance` verifies that runtime chapter labels stay on the parsed syllabus spine and that every parsed syllabus chapter has at least 5 questions.

The summary command runs the same checks but prints only the totals and failure list.

For a normal pre-ship pass, also run:

```bash
npm run lint
npm run build
```

The production build currently warns about large chunks, especially `career` and `kolibri`. That warning is expected with the expanded generated banks, but a failed typecheck or build is not expected.

## Where Content Lives

The tailored credential expansion banks live under `src/data/questionCatalog/`:

- `careerAgentGeneratedCredentialExpansionFinance.ts`
- `careerAgentGeneratedCredentialExpansionProfessional.ts`
- `careerAgentGeneratedCredentialExpansionCompliance.ts`
- `careerAgentGeneratedCredentialExpansionGovIndustrial.ts`
- `careerAgentGeneratedCredentialExpansionHealthcare.ts`
- `careerAgentGeneratedCredentialBalanceTopOff.ts`

The generic fallback bank is:

- `careerAgentGeneratedCredentialExpansion.ts`

Chapter cleanup lives in:

- `careerCredentialChapterNormalization.ts`

The main generated-bank merge point is:

- `careerAgentGenerated.ts`

## When Adding More Questions

- Prefer source-specific, scenario-heavy questions over generic exam-strategy filler.
- Preserve the exact generated source tag above.
- Keep IDs unique across all generated credential expansion files.
- Put new generated chapter labels on the syllabus spine where possible.
- When a generated subtopic is more specific than the syllabus chapter, put the syllabus chapter in `chapter` and the specific label in `subTopic`.
- If an official outline changes, update the syllabus first, then update normalization and balance top-off only as needed.

## Current Verified State

As of 2026-05-20 01:05 EDT:

- `npm run audit:career-credential-all` passes.
- `npm run lint` passes.
- `npm run build` passes, with large chunk warnings.
- All 26 guarded tracks resolve to 200 questions.
- Every parsed syllabus chapter in those tracks has at least 5 runtime questions.
- No off-syllabus runtime chapters are reported by the balance audit.

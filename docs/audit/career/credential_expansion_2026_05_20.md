# Career Credential Expansion - 2026-05-20

## Scope

Expanded credential-style career tracks toward a 200-question runtime floor using source-tagged generated banks:

- `Floe career agent-generated credential expansion 2026-05-20`

The expansion prioritizes exam/certification tracks and credential-adjacent professional tracks, especially Series 86/87, finance credentials, compliance/regulatory, government/industrial credentials, and healthcare credentials.

## Runtime Counts

All checked credential tracks now resolve to 200 questions after `buildCareerQuestionCatalog()` and `topUpCareerAgentGeneratedCatalog()`.

| Track | Count | Expansion questions used | Critique / next improvement |
|---|---:|---:|---|
| `series86` | 200 | 160 | Stronger now after source-specific FINRA-style analytical questions. Syllabus now maps to information/data, analysis, and valuation/forecasting functions. |
| `series87` | 200 | 180 | Syllabus was too valuation-heavy; now refocused on research communications, disclosures, public appearances, supervision, dissemination, corrections, and MNPI. |
| `cfaLevelOne` | 200 | 141 | Good breadth; needs annual CFA topic-weight review metadata. |
| `cpaExam` | 200 | 143 | Good Core/Discipline coverage; needs CPA blueprint date review metadata. |
| `barExam` | 200 | 149 | Good UBE/NextGen-style breadth; maintain jurisdiction caveats. |
| `pmpWrangler` | 200 | 156 | Strong scenario fit; needs explicit July 2026 ECO transition note. |
| `shrmPeople` | 200 | 162 | Good SJI-style direction; keep BASK review current. |
| `patentBar` | 200 | 154 | Better MPEP/procedure depth; needs source-material revision review cadence. |
| `crcm` | 200 | 170 | Now much stronger; needs ABA 2026 outline freshness metadata. |
| `ccep` | 200 | 170 | Better program-effectiveness scenarios; keep DOJ ECCP/USSG review cadence. |
| `amlCompliance` | 200 | 146 | Better FFIEC-style investigation depth; retain US/BSA specificity. |
| `bankComplianceAmlRoadmap` | 200 | 120 | Good roadmap/control-building coverage; keep chapter labels tight. |
| `customsBroker` | 200 | 170 | Much stronger entry/classification/origin coverage; needs CBLE reference cadence. |
| `aigp` | 200 | 170 | Stronger AI governance life-cycle coverage; review quarterly due EU AI Act/NIST changes. |
| `nerc` | 200 | 170 | Better operator-scenario coverage; keep RC/TO standard references current. |
| `apiInspectors` | 200 | 170 | Stronger 510/570/653 spread; chapter labels remain broad and should be normalized later. |
| `cdfm` | 200 | 170 | Better module-style federal financial management coverage; keep fiscal-law references reviewed. |
| `certifiedGeneralAppraiser` | 200 | 170 | Better USPAP/scope/workfile coverage; add valuation-bias/fair-housing review cadence. |
| `medicalCodingRoadmap` | 200 | 143 | Stronger CPC/documentation/modifier logic; annual ICD/CPT review needed. |
| `clinicalResearchRoadmap` | 200 | 106 | Good GCP/source/deviation coverage; align references to ICH E6(R3). |
| `healthcareComplianceRoadmap` | 200 | 175 | Stronger OIG hotline/investigation/program coverage. |
| `regulatoryAffairsRoadmap` | 200 | 116 | Better FDA change-control/submission/labeling coverage. |
| `pharmaDrugSafetyRoadmap` | 200 | 175 | Stronger PV intake, duplicate detection, labeling, and signal logic. |
| `healthInsurancePayersRoadmap` | 200 | 175 | Stronger UM/appeals/grievance/COB workflow coverage. |
| `procurementContractingRoadmap` | 200 | 180 | Better FAR competition/source-selection/contract-type coverage. |
| `defenseBudgetingRoadmap` | 200 | 176 | Better PPBE/appropriations/execution/reprogramming coverage. |

## Integration Notes

- Ongoing maintenance checklist: `docs/audit/career/credential_guardrails.md`.
- Source-specific expansion banks are imported before older generated banks so newer source-researched questions fill the 200-question floor first.
- The generic expansion bank remains as a fallback for credential tracks without a tailored worker bank.
- No new generated expansion question is missing the internal `source` tag.
- The credential floor is now guarded by `npm run audit:career-credentials`, which checks the target tracks, generated source tag, duplicate IDs/prompts within each track, generated ID collisions, and malformed answer sets.
- Chapter/syllabus alignment is now guarded by `npm run audit:career-credential-balance`, which checks all 26 target tracks for runtime chapters outside their syllabus spine and fails on empty or thin syllabus chapters.
- Both credential guardrails can be run together with `npm run audit:career-credential-all`.
- A compact version for frequent checks is available with `npm run audit:career-credential-summary`.
- All targeted credential tracks now normalize generated question `chapter` values back to their syllabus chapters while preserving the original generated label as `subTopic` for later review.
- The first balance top-off pass now gives every parsed syllabus chapter in the 26 target tracks at least 5 runtime questions, with zero off-syllabus runtime chapters.

## Sources Used

- FINRA Series 86/87 exam page and content outline
- CFA Institute Level I candidate resources and topic outlines
- AICPA/NASBA CPA exam blueprint resources
- NCBE UBE, MBE, MEE, and MPT materials
- PMI PMP exam content outline
- SHRM BASK/certification resources
- USPTO registration exam and MPEP source materials
- ABA CRCM 2026 outline
- SCCE/HCCA CCEP resources, DOJ ECCP, and USSG compliance-program guidance
- FFIEC BSA/AML manual and FinCEN CDD resources
- CBP Customs Broker License Examination resources and 19 CFR Part 111
- IAPP AIGP, NIST AI RMF, EU AI Act
- NERC system operator certification materials
- API ICP 510/570/653 resources
- SDFM CDFM resources
- Appraisal Foundation USPAP/AQB/national exam resources
- CMS, FDA, ICH, HHS OIG, and AAPC healthcare credential resources

# Audit: dataAiGovernanceRoadmap

**Syllabus**: [`src/data/syllabi/career/data_ai_governance_roadmap.md`](../../../src/data/syllabi/career/data_ai_governance_roadmap.md)
**Track id**: `dataAiGovernanceRoadmap`
**Tier**: career
**Region**: Jurisdiction-neutral (designed as workplace-jargon). Sister track `aigp` carries the US/EU certification framing.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Data Foundations (owner, steward, lineage, classification, quality, retention, access) | ✅ | `RoadmapTech` "Where data came from", "Sensitive column", `GovTechFinalTopOff` "Owner missing", "Lineage", "Data Quality bad address cascade" — comprehensive |
| 2. Model Risk and Use-Case Triage | ✅ | "High-stakes use", "Shadow model", "Model intake" |
| 3. Evaluation and Guardrails | ✅ | "Accuracy is not enough", "Prompt injection", "Leaky benchmark", "Bias testing approval gap" |
| 4. Monitoring and Drift | ✅ | "Silent drift", "Model drift whisper", "Decommissioning retired but running" |
| 5. Transparency and Human Oversight | ✅ | "Rubber stamp", "Appeal path", "Auto-denial concern" |
| (Implicit) Synthetic Data, Consent/Purpose, Generative AI Use, Vendor Models, Retention, Change Mgmt | ✅ | All present across the three files |

**Coverage is the most complete in the cluster.** ~33 questions across 2 files, spanning all 5 chapters plus extension topics. Chapter taxonomy uses "Data AI Governance: X" / "Data and AI Governance: Y" prefix — does not match syllabus chapter names. Two slightly different prefix variants across files (`Data AI Governance:` vs `Data and AI Governance:`) — flag for alignment.

## Per-file recommendations

| File | Track Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapTech.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapTech.ts) (dataAiGovernanceRoadmap, lines 307-398) | 18 | **FIX** | Strong governance content (lineage, classification, prompt injection, drift, decommissioning) but every wrong answer uses `DEFAULT_FLAW`. Rewrite per-distractor explanations and become canonical bank. Chapter prefix is `Data AI Governance:`. |
| [`careerAgentGeneratedRoadmapGovTechFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapGovTechFinalTopOff.ts) (dataAiGovernanceRoadmap, lines 605-end) | 16 | **MERGE → RoadmapTech** | Adds genuinely novel angles (shadow spreadsheet model, ZIP-code proxy feature, confidential-prompt leak to public AI tool, risk-heat-map exec reporting). Lift the new content; dedupe black-box-vendor + accuracy-not-enough overlaps. Chapter prefix is `Data and AI Governance:` — pick one and normalise. |
| **Vendor "black-box" duplication across 3 files** | — | **MERGE** | Same prompt appears in `aigp`-track-bound `QualificationsTechnicalPolish` (id 4109039), here in `RoadmapTech.dataAiGovernanceRoadmap` (id 4105364), and `GovTechFinalTopOff.dataAiGovernanceRoadmap` (id 4108018). Aggregator dedupes by prompt, but variants leak. Decide canonical track. |
| **Cross-track duplication with `aigp`** | ~60% of content | **Strategic decision needed** | This track and `aigp` share most concepts. Either officially mirror (and one becomes a tag-rename of the other) or split into clear lanes: `aigp` = certification framings (EU AI Act, NIST RMF functions, IAPP exam style); `dataAiGovernanceRoadmap` = workplace shorthand (lineage, drift, monitoring, governance ops). |

## Open actions (priority order)

1. **Resolve the `aigp` ↔ `dataAiGovernanceRoadmap` split.** They are 60% duplicate today. Recommended split: aigp = certification/regulatory, dataAiGovernance = workplace ops. This affects authoring direction for every future question.
2. **Consolidate the pair** (`RoadmapTech` + `GovTechFinalTopOff`) into one file with per-distractor explanations. ~33 → ~25 questions.
3. **Normalise chapter prefix** to one of `Data and AI Governance:` (preferred — matches "Data / AI Governance" track title in `career.ts`) or fully realigned to syllabus chapter names ("Data Foundations", "Model Risk and Use-Case Triage", etc.).
4. **Add `lastReviewed` metadata.** Tied with `aigp` for highest-rotation content in the catalog. GenAI guardrails and drift practices change quarterly.
5. **No regional tagging needed today** but the syllabus is silent on jurisdiction. Decide whether to add EU AI Act framing here or keep it `aigp`-only.

## Estimated effort

- `aigp` ↔ this track split decision + content move: ~3 hours (deciding) + ~2 hours (executing)
- Consolidation + per-distractor rewrite: ~5 hours (33 → 25 questions)
- Chapter prefix normalisation + `lastReviewed` schema: ~1 hour

**~1.25 working days.** Cannot be fully audited without the aigp-split decision; the two tracks must be planned together.

## Notes for next auditor

Most duplication-prone track in the cluster — "vendor black box" appears in 3 places. Aggregator prompt-key dedupe hides it at runtime, but the *catalog* contains duplication and a second author cannot tell which file is canonical. Sister track: `aigp.md`.

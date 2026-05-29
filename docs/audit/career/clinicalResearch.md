# Audit: clinicalResearch (Clinical Research Coordinator)

**Syllabus**: [`src/data/syllabi/career/clinical_research_coordinator.md`](../../../src/data/syllabi/career/clinical_research_coordinator.md)
**Track id**: `clinicalResearch`
**Tier**: career
**Status**: `playable`
**Region**: US (assumed — references ICH GCP, FDA guidance, IRB; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. CRC Role and Clinical Trial Ecosystem | ✅ | Hand-written `Consent Dock` set + careerLabs ADaM/CDISC items partially fit Chapter 1 |
| 2. Participant Protection and Informed Consent | ✅ | Hand-authored Q 8001 + jargonBusters `Consent Bay` |
| 3. Protocol, Eligibility, and Visit Flow | ⚠️ | Hand-authored deviation Q 8002 only; visit-window/eligibility thin |
| 4. Source Documentation and Data Quality | ✅ | Q 8003 + careerLabs ADaM items + jargonBusters `Source Shelf` |
| 5. Safety, Adverse Events, Concomitant Meds | ✅ | Q 8004 + jargonBusters `Safety Reef`/`AE Channel` |
| 6. Study Product, Randomization, Blinding | ❌ | **Gap.** IP accountability, blinding, dispensing not covered for this track |
| 7. Monitoring, Audits, Regulatory Binder | ⚠️ | jargonBusters covers monitor letters and reg binder; track-specific items missing |
| 8. Startup, Closeout, Site Operations | ❌ | **Gap.** No startup/closeout/recruitment items for this id |

The current `clinicalResearch` bank is anchored on `careerLabsClinicalResearchQuestions` (a small CDISC/ADaM lab import that doesn't match the syllabus) plus four hand-authored items. The richer clinical-research content lives under sibling tracks (`clinicalResearchJargon`, `socraAcrp`, `clinicalResearchRoadmap`) — see Open actions.

## Per-file recommendations

| File | This-track Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts` (hand-authored clinicalResearch block, lines 1987–2021)](../../../src/data/questionCatalog/career.ts) | 4 | **KEEP** | Per-distractor explanations, syllabus-aligned chapters (Consent/Protocol/Source/Safety). Voice matches `jargonBusters` standard. |
| [`careerLabsImported.ts` → careerLabsClinicalResearchQuestions](../../../src/data/questionCatalog/careerLabsImported.ts) | ~10 | **DELETE** | Stripped-context CDISC/ADaM lab problems ("USUBJID sort key", "ADSL row meaning"). This is biostatistics-tooling trivia, not CRC site judgment. Doesn't match course aim (participant protection, protocol visits, monitoring). |
| Other roadmap files (`careerAgentGeneratedRoadmapHealthcare*`) | 0 | n/a | None wire questions to this id; all clinical-research content goes to `clinicalResearchRoadmap` instead. **Consider merging or deprecating one of the two tracks** — they have the same syllabus chapter spine. |

**Net effect**: 14 questions today → 4 high-quality + ~25 newly authored to close Chapters 3, 6, 7, 8. Total ~30 syllabus-aligned questions.

## Open actions (priority order)

1. **Delete `careerLabsClinicalResearchQuestions` from the wiring** in `career.ts` line 1988 — it dilutes the bank with non-CRC content.
2. **Resolve track duplication**: `clinicalResearch` (CRC) and `clinicalResearchRoadmap` share substantially the same syllabus. Pick one as canonical, or differentiate (e.g. CRC = coordinator certification prep, Roadmap = "what is this career" front door).
3. **Author 20–25 new items** covering Chapters 3, 6, 7, 8 (visit windows, IP accountability, monitor visits, closeout). Voice template: `jargonBusters.ts` clinicalResearch entries.
4. **Add `region: 'US'` and `lastReviewed: <date>`** tags to the track entry in [`src/data/ageCatalog/career.ts:412`](../../../src/data/ageCatalog/career.ts) — ICH GCP and FDA references are jurisdiction-specific.
5. **Align chapter names**: the four hand-authored items use "Consent Dock / Protocol Reef / Source Data Swamp / Safety Lagoon" — playful but inconsistent with the syllabus chapter list. Rename or accept as voice convention and document.

## Estimated effort

- Delete + rewire: 30 min
- New authoring (25 Qs × 20 min): ~8 hours
- Region/date tagging: 15 min
- Track-duplication decision (architectural): 1–2 hours scoping

**~1.5 working days** to bring `clinicalResearch` to syllabus-complete with the jargonBusters quality bar.

## Notes for next auditor

The `clinicalResearchRoadmap`, `socraAcrp`, and `clinicalResearchJargon` tracks should be audited together — they overlap heavily in syllabus scope and pull from many of the same agent-generated banks. Decide whether the cluster should remain four tracks or collapse to two (one career-front-door, one certification prep).

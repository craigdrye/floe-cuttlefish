# Audit: comparativePracticalPolitics

**Syllabus**: [`src/data/syllabi/university/comparative_practical_politics.md`](../../../src/data/syllabi/university/comparative_practical_politics.md)
**Track id**: `comparativePracticalPolitics`
**Tier**: university (`universityAcademicTrackIds` → `universityAcademic.ts:385`)
**Region**: **explicit tri-jurisdiction (US / UK / EU)** by design. Syllabus deliberately compares across systems; questions follow suit. No region tag needed beyond the existing comparative framing.
**Status**: `playable` ([`src/data/ageCatalog/university.ts:104`](../../../src/data/ageCatalog/university.ts))

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Comparing Political Systems | ✅ | "Comparative Institutions" — presidential vs parliamentary, semi-presidentialism, federalism, supranationalism |
| 2. Elections, Representation, Party Systems | ✅ | "Voting Systems" — FPTP, PR, MMP, thresholds, primaries |
| 3. Legislatures and Lawmaking | ✅ | "Comparative Legislatures" — committees, bicameralism, Commons confidence, Lords scrutiny |
| 4. Executives, Bureaucracy, Implementation | ✅ | "Executive Power" — decree powers, ministerial accountability; comitology referenced |
| 5. Courts, Constitutions, Rights, Legal Constraints | ✅ partial | Judicial review and EU supremacy present but light |
| 6. Ideology, Cleavages, Political Conflict | ✅ partial | Ideology translation referenced; Brexit-specific items thin |
| 7. Money, Interests, Media, Public Pressure | ✅ | "Interest Groups" / "Public Pressure" — lobbying disclosure, transparency register |
| 8. Policy Case Workshops | ⚠️ | No dedicated policy-case items; framework concepts present in abstract |

**Chapter taxonomy**: `practicalPoliticsQuestions.ts:799` uses functional chapter names ("Comparative Institutions", "Comparative Legislatures", "Executive Power", "Voting Systems", "Interest Groups") that map cleanly onto the syllabus units. Coverage is the most syllabus-aligned in the cluster.

## Per-file recommendations

| File | comparativePracticalPolitics Q's | Bucket | Reason |
|---|---|---|---|
| [`practicalPoliticsQuestions.ts`](../../../src/data/questionCatalog/practicalPoliticsQuestions.ts) `universityComparativePoliticsQuestions` (id 478001–478056) | 56 | **KEEP** | **Gold standard for this track.** Hand-authored with per-distractor `why` + `hint` triples — each wrong answer carries specific reasoning ("That describes the Senate" rather than DEFAULT_FLAW). Sober comparative-politics tone. Operational framing ("where authority sits, who can veto") matches the syllabus's stated method. Includes the explicit U.S./U.K./E.U. comparison the course is built around. |
| (no `comparativePracticalPoliticsWorkoutGenerated.ts`) | 0 | **N/A** | No agent-generated bank exists for this track. The hand-authored 56 are the entire bank. |

**No DEFAULT_FLAW. No US-only framing. No taxonomy mismatch.** This is the **highest-quality wiring in the cluster** — single canonical source, clean chapter names, syllabus-aligned content.

**Net effect**: 56 wired questions, all high-quality. Open gap is chapter 8 (policy-case workshops) and depth on chapters 5–6 (courts, ideology).

## Open actions (priority order)

1. **Author 8–10 policy-case items** for chapter 8: a climate target moving differently in U.S./U.K./EU, an immigration case across local/national/supranational venues, a digital regulation case (DSA/GDPR vs U.S. sectoral approach), a fiscal-rule constraint case. Voice template: existing `universityComparativePoliticsQuestions`.
2. **Add 5–6 chapter-5 deepening items** on judicial review variation, Court of Justice supremacy, U.K. Human Rights Act, U.S. constitutional review. Specifically: a post-Brexit legal-conflict item, a CJEU infringement-proceedings item, a state-implementation-of-federal-law item.
3. **Add 4–5 chapter-6 realignment items** on Brexit reorganizing UK conflict, EU integration cleavage vs left-right, populism family, affective polarization in the U.S. context.
4. **Add `region: 'US/UK/EU'` or `regions: ['US', 'UK', 'EU']` tag** to the track entry in [`src/data/ageCatalog/university.ts:104`](../../../src/data/ageCatalog/university.ts) for surface-level transparency about scope.

## Estimated effort

- Chapter 8 case authoring: ~3 hours (10 questions × 20 min)
- Chapter 5 deepening: ~2 hours (6 questions × 20 min)
- Chapter 6 realignment items: ~1.5 hours (5 questions × 20 min)
- Region tag: ~5 min

**~0.75 working day.** Lightest authoring lift in the cluster behind `brainBurners` (career). The bank is already at quality bar; only coverage closure remains.

## Notes for next auditor

`comparativePracticalPolitics` is the **best-wired track in the cluster.** Single hand-authored source, per-distractor explanations throughout, syllabus-aligned chapters, explicit comparative framing baked into the prompts ("A simple way to distinguish the U.S. House from the Senate is..."). The author of `practicalPoliticsQuestions.ts` understood that comparative politics needs comparative *items*, not country-by-country trivia, and built the bank accordingly.

Two adjacent tracks use the same file: `highPracticalPoliticsQuestions` (AP-level) and `careerPublicAffairsQuestions` (career). Any chapter-name refactor here cascades — coordinate with the high-school and career audits if renaming chapters.

The May 2026 audit's "surprisingly solid" verdict on `internationalRelationsWorkoutGenerated` etc. extends here: `practicalPoliticsQuestions` is the same caliber of work, with the added strength of explicit cross-system comparison built into the prompts.

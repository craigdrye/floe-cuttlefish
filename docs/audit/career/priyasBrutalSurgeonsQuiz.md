# Audit: priyasBrutalSurgeonsQuiz

**Syllabus**: [`src/data/syllabi/career/priyas_brutal_surgeons_quiz.md`](../../../src/data/syllabi/career/priyas_brutal_surgeons_quiz.md)
**Track id**: `priyasBrutalSurgeonsQuiz`
**Tier**: career (ageGroup: `nerd`)
**Status**: `playable`
**Region**: Global (the syllabus is anatomy/physiology-grounded; references SAGES, ACS, WSES, ESSO — multi-jurisdictional surgical-society guidelines, not US regulation)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Hostile Operative Anatomy | ✅ | Cholecystectomy traps, infundibular trap, Berry's ligament, obturator fossa, perihilar anatomy |
| 2. Source Control and Postoperative Sepsis | ✅ | Contained leaks, false-negative CT, quiet drains, "abscess does not care about the tumor board agenda" |
| 3. HPB Catastrophes | ✅ | Vasculobiliary injury, post-Whipple sentinel bleed, future-liver-remnant cases, perihilar cholangiocarcinoma |
| 4. Vascular, Trauma, Damage Control | ✅ | AAA + abdominal compartment, Zone III hematoma in anticoagulated trauma, popliteal reperfusion + compartment syndrome |
| 5. Anticoagulation, Coagulopathy, Competing Catastrophes | ✅ | Mechanical mitral valve + perforated diverticulitis, PE-vs-bleed sequencing, warfarin reversal logic |
| 6. Endocrine, Head-and-Neck, Airway Traps | ✅ | RLN signal loss with staging decision, MTC with adrenal lurker (MEN2), neck hematoma with calm sat |
| 7. Oncologic Surgical Judgment | ✅ | T4b en bloc, rectal cancer MRI risk features, MDT sequencing, MTC/sarcoma/HPB onco-tradeoffs |
| 8. Diagnostic Traps and False Reassurance | ✅ | Recurring across chapters — calm drain, IV-only CT, preserved pulses with compartment syndrome |

**Full syllabus coverage across all 8 chapters**, with the approximate 20–25% / 15–20% / 15–20% / 10–15% / 10–15% / 10–15% / 5–10% distribution targets visibly respected in the chapter tags.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts` → priyasBrutalSurgeonsQuiz block (lines 240 onwards, ids 51953–52046)](../../../src/data/questionCatalog/career.ts) | **94** | **KEEP (the gold standard for the catalog)** | **Verified hand-written and excellent.** Every question has a difficulty-level structure (medium / hard / very hard), at least two reasoning steps, per-distractor explanations with their own teaching line, a longer wrong answer that sounds like a tempting expert plan ("APR gives a distal margin; case closed"), sequence-only traps where each ingredient is plausible but only one order is safe, missing-data traps, and a named decision hinge. Voice is distinctive ("the abdomen becomes a bad landlord", "the rectum files a margin complaint", "the lipoma wearing a false mustache") without obscuring the clinical decision. Distractor design follows the syllabus rule that wrong answers must be plausible to a hurried expert. **This is the model for senior-audience authoring across the whole catalog.** |

**No generated files feed this track.** None of the `careerAgentGenerated*` healthcare files contain a `priyasBrutalSurgeonsQuiz` block — checked across RoadmapHealthcare, TopOff, FinalTopOff, HealthcareAppliedTopOff, RegulatoryMedicalTopOff, JargonGovClinicalTopOff, PracticePolish 1–4, CoreRoadmapPolish, and JargonPracticePolish. Confirmed clean.

## Open actions (priority order)

1. **Protect this bank from agent-generated content.** If future "top-off" passes are run, explicitly exclude `priyasBrutalSurgeonsQuiz` from the input list to prevent dilution with DEFAULT_FLAW-style filler.
2. **Document this as the senior-audience voice template** alongside `jargonBusters.ts` in [`docs/CONTENT_AUDIT.md`](../../CONTENT_AUDIT.md) "Quality bar for new authoring." Currently the audit framework points to `jargonBusters`/`primaryBuilders`/`highBuilders`/`universityPrep` — Priya should be added as the expert/oral-board model.
3. **Add `lastReviewed: <date>`** to the track entry in [`src/data/ageCatalog/career.ts:379`](../../../src/data/ageCatalog/career.ts) for consistency, even though the content is anatomy/physiology-driven rather than regulation-bound (margins, sequencing, MDT guidance can drift with society updates).
4. **No region tag needed urgently** — the content references international surgical-society guidelines (SAGES, ACS, WSES, ESSO) and the anatomy is universal. Add `region: 'global'` or leave untagged with a documented decision.
5. **Consider seeding new very-hard questions** for under-represented sub-domains (currently the bank already hits HPB and pelvic-sepsis heavily per the syllabus's coverage goals; check whether vascular/trauma and endocrine/head-and-neck have hit their target percentages).

## Estimated effort

- Update CONTENT_AUDIT.md to add Priya as a voice template: 30 min
- Date/region tagging: 15 min
- Optional coverage-percentage audit against syllabus targets: 1 hour

**~2 hours.** This is the cleanest track in the cluster.

## Notes for next auditor

The 94 hand-authored questions here represent significant time investment and are a strategic asset for the brand (`ageGroup: 'nerd'` differentiates Floe at the high end). When the cluster-wide consolidation happens, this file should not be touched by any "rewrite distractors" or "merge top-offs" batch operation — it is already at the bar. The chapter labels here ("Anticoagulation, Coagulopathy, and Competing Catastrophes", "HPB Catastrophes", etc.) are voice-flavored and match the syllabus structure; do not "normalize" them.

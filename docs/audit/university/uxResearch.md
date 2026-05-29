# Audit: uxResearch (UX Researcher Interview Prep)

**Syllabus**: [`src/data/syllabi/university/ux_researcher_prep.md`](../../../src/data/syllabi/university/ux_researcher_prep.md)
**Track id**: `uxResearch`
**Tier**: university (career-hopper discipline, ageGroup `career-hopper`)
**Region**: jurisdiction-neutral (UX hiring practices vary slightly but most concepts are universal; GDPR/CCPA framing optional)
**Status**: `playable` ([`src/data/ageCatalog/university.ts:185`](../../../src/data/ageCatalog/university.ts))

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. The UX Research Role and Hiring Signal | ✅ | Generative research (Q 11005) — addresses "explain what a UXR contributes beyond talking to users" prompt from syllabus |
| 2. Research Planning and Method Selection | ✅ | Generative research (Q 11005), screener design (Q 11006) |
| 3. Recruiting, Ethics, Research Operations | ✅ thin | Screener (Q 11006); no consent/privacy/observer-guidelines items |
| 4. Interview Craft and Moderation | ✅ | Neutral question (Q 11007), Five Whys (Q 11008) |
| 5. Usability Testing and Evaluative Research | ❌ | **No task-design, think-aloud, severity-rating, prototype-fidelity items.** This is a core chapter; gap is significant. |
| 6. Surveys and Quantitative UX Basics | ✅ thin | MaxDiff (Q 11014); no Likert design, NPS/SUS/CSAT distinction, sample-size limits |
| 7. Synthesis, Insight, Recommendation | ✅ | Affinity mapping (Q 11009), personas (Q 11010) |
| 8. Product Collaboration, Portfolios, Interview Performance | ✅ | Sample-size pushback (Q 11011), prioritization (Q 11012), portfolio presentation (Q 11013) |

Coverage hits 7 of 8 chapters but very thinly — usually 1–2 questions per chapter, with the entire usability-testing chapter (chapter 5) missing. Net 10 questions for a `playable` interview-prep track is below threshold; the syllabus describes a "career-prep studio" needing real depth.

## Per-file recommendations

| File | uxResearch Q's | Bucket | Reason |
|---|---|---|---|
| [`universityPrep.ts`](../../../src/data/questionCatalog/universityPrep.ts) `uxResearch: [...]` (id 11005–11014) | 10 | **KEEP** | **Gold-standard, hand-authored, interview-grade.** May 2026 audit flagged this file as protected and verified here — confirmed. Per-distractor `[wrongAnswer, whyWrong, hint]` triples with real misconception analysis ("That practically demands the user say 'yes'", "Hypothetical future behavior is highly unreliable", "Confirmation bias destroys the value of research"). Sober tone matches the interview-prep audience. Cites NNG's "5 users catch 85% of usability issues" by name — domain-correct. **Protect — do not edit. This is one of the four hand-authored exemplars.** |
| (no other UX research files) | — | — | No imported third-party UX bank; no agent-generated overflow; no entry in `universityAgentGenerated.ts`. |

**Net effect**: 10 high-quality questions, syllabus-aligned but volume-thin. Needs ~20–30 more questions to feel like a real interview-prep course (a UXR interview loop spans 4–6 rounds; 10 questions is one mock).

## Open actions (priority order)

1. **Author chapter 5 (Usability Testing) coverage** — currently zero. Topics: task-design without telling participants what to click, moderated vs unmoderated tradeoffs, think-aloud protocol, severity rating systems, prototype-fidelity selection, formative vs summative testing. ~6–8 questions. Voice template: existing 110xx items in `universityPrep.ts` (this *is* the gold standard — do not invent a new voice).
2. **Strengthen chapter 3 (Ethics/ResearchOps)** — author 3–4 questions on consent language, participant data handling in portfolio narratives, observer-note discipline, sensitive-topic moderation.
3. **Strengthen chapter 6 (Surveys/Quant)** — author 3–4 questions on Likert wording bias, NPS/SUS/CSAT distinctions, sample-size honesty, MaxDiff complement (current Q 11014 is the only quant item).
4. **Add a 30-minute whiteboard prompt** (or 2–3) as a longer-form scenario item — the syllabus's chapter 8 specifically calls out "outline a 30-minute research plan for a parking app, onboarding funnel, or enterprise dashboard". The current bank has zero whiteboard items.
5. **Do NOT touch the existing 10 items.** They are the interview-grade voice template for any new authoring.

## Estimated effort

- Chapter 5 authoring (~7 questions): ~3 hours
- Chapter 3 + 6 strengthening (~7 questions): ~3 hours
- Whiteboard scenario items (2–3 longer prompts): ~3 hours

**~1 working day** to bring volume to ~27 questions while preserving the gold-standard voice. The bar is set; only the wordcount is missing.

## Notes for next auditor

`uxResearch` is one of four tracks in [`universityPrep.ts`](../../../src/data/questionCatalog/universityPrep.ts) (with `ml`, `software`, `research`) that are hand-authored to interview-grade quality. All four flagged in the May 2026 audit as KEEP-and-protect. Expect the same finding when auditing the others: gold-standard but volume-thin — additive authoring, not surgery. `ageGroup: 'career-hopper'` (not `'university'`) reflects the working-professional audience.

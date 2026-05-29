# Audit: introToSociology

**Syllabus**: [`src/data/syllabi/university/intro_to_sociology.md`](../../../src/data/syllabi/university/intro_to_sociology.md)
**Track id**: `introToSociology`
**Tier**: university (default `university-generated` bucket → `universityAgentGenerated.ts:1227`)
**Region**: jurisdiction-neutral by stated framing, but **OpenStax Introduction to Sociology 3e + ASA + U.S. Census Bureau** anchors are US-centric. Examples (campus pizza, dorm chat, gig economy) read US/global, not jurisdiction-specific. No region tag currently applied.
**Status**: `playable` ([`src/data/ageCatalog/university.ts:346`](../../../src/data/ageCatalog/university.ts))

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Sociological Imagination and the Discipline | ✅ partial | Sociological imagination present; **no founder items** (Du Bois, Addams, Marx, Durkheim, Weber) |
| 2. Theory and Sociological Explanation | ✅ | Dramaturgical analysis, Davis-Moore vs Marxist conflict, intersectionality |
| 3. Research Methods, Data, Ethics | ✅ partial | Ethnography + correlation/causation; no sampling, ASA ethics, positionality |
| 4. Culture, Socialization, Identity | ✅ | Norms vs values, hidden curriculum |
| 5. Social Interaction, Groups, Organizations, Networks | ✅ | Role conflict vs strain, primary vs secondary groups, McDonaldization |
| 6. Deviance, Social Control, Law | ✅ partial | Deviance as social construction, labeling; no strain theory, white-collar crime, incarceration |
| 7. Stratification, Inequality, Race, Class, Gender | ✅ partial | Intersectionality only; no Lorenz/Gini, no caste vs class, no race/gender mechanisms |
| 8. Institutions, Population, Social Change | ✅ | Family as institution, hidden curriculum, capitalist vs socialist, gig economy |

**Chapter taxonomy**: chapter strings are prefixed `"Introduction to Sociology:"` plus topic — direct mapping. No taxonomy mismatch.

## Per-file recommendations

| File | introToSociology Q's | Bucket | Reason |
|---|---|---|---|
| [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts) `introToSociology: [...]` block (id 3103000+) | ~16–20 | **FIX** | **Prompts are pedagogically strong** — real sociological scenarios (Maya's mall internship + sociological imagination, dramaturgy of dorm-lounge meme curation, ethnography vs experiment, role conflict vs role strain, primary/secondary group classification). Distractors are recognizable sociology mistakes ("Social Darwinism", "tabula rasa", "biological determinism"). **But every distractor uses the file-wide `DEFAULT_FLAW` constant** `'This is a plausible distractor, but it does not match the scenario or syllabus concept.'`. The conceptual work is done; only per-distractor explanations need writing. |
| (no `introToSociologyWorkoutGenerated.ts`) | 0 | **N/A** | No hand-authored alternative bank exists. The agent-generated block is the entire track. |

**Tone observation**: "Sketchy Sam label", "Friendship field notes", "Coffee stress goblin", "pajama lecture geography" — same playful campus-life voice as `englishComposition101`. Defensible for first-year intro; less professional than the workout files. Don't strip; calibrate.

**Net effect**: ~18 questions held back from quality bar by `DEFAULT_FLAW`. Rewrite is high-ROI; conceptual work is real.

## Open actions (priority order)

1. **Rewrite per-distractor explanations** for all `introToSociology` items. Distractors like "Tabula rasa", "Population ecology", "Mechanical solidarity only" each name a real sociological concept — the rewrite says what's wrong with applying it here.
2. **Author 6–8 chapter-1 founder items** — Marx (alienation), Durkheim (anomie, social facts, organic solidarity), Weber (rationalization, Protestant ethic), Du Bois (double consciousness, the veil), Addams.
3. **Author 4–5 chapter-7 stratification items** — Lorenz/Gini, caste vs class, race as social construction with mechanisms, gender pay gap interpretation, cumulative advantage.
4. **Author 3–4 chapter-6 deviance items** — strain theory, differential association, restorative vs retributive justice, white-collar crime measurement.
5. **Author 4–5 chapter-3 methods items** — sampling bias diagnosis, ASA ethics, positionality, validity vs reliability.
6. **Consider region disclosure** — examples and frameworks are US/global; OpenStax 3e + US Census are explicit US source anchors.

## Estimated effort

- Per-distractor rewrite: ~4 hours (18 × ~13 min)
- Chapter 1 founders: ~2.5 hours (8 × 20 min)
- Chapter 7 + 6 + 3 gap-closing: ~4.5 hours (14 × 20 min)

**~1.5 working days.** Same shape as `englishComposition101` — strong prompts blocked by DEFAULT_FLAW, plus targeted chapter authoring.

## Notes for next auditor

`introToSociology` is the **second clearest demonstration** (after `englishComposition101`) that DEFAULT_FLAW masks real pedagogical work. The author understood sociological scenarios — turning Maya's personal problem into a structural one, distinguishing dramaturgy from population ecology, role conflict vs role strain. Prompts teach; distractors are real misconceptions; only the per-distractor explanations are blank.

Tone leans playful ("Friendship field notes", "Sketchy Sam"). Defensible at first-year level; if calibrating tone across the file, lean toward `introPsychologyWorkoutGenerated.ts` (sober) rather than the more cartoonish MCAT block. No downstream `.filter()` derivations.

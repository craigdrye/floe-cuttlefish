# Audit: contemporaryEthics

**Syllabus**: [`src/data/syllabi/university/contemporary_ethical_theory.md`](../../../src/data/syllabi/university/contemporary_ethical_theory.md)
**Track id**: `contemporaryEthics`
**Tier**: university (`universityAcademicTrackIds` → `universityAcademic.ts:372`)
**Region**: jurisdiction-neutral. Cases (climate finance, refugee policy, pandemic triage) are framed in global / cosmopolitan terms; no US-specific framing.
**Status**: `playable` ([`src/data/ageCatalog/university.ts:236`](../../../src/data/ageCatalog/university.ts))

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. What Ethical Theory Is For (reflective equilibrium, moral uncertainty) | ⚠️ | Argument-structure items only; nothing on reflective equilibrium or moral uncertainty |
| 2. Moral Truth, Relativism, Objectivity | ✅ | Euthyphro + Error Theory inherited via chapter filter |
| 3. Reasons, Motivation, Responsibility | ❌ | No coverage |
| 4. Normative Theories Under Pressure | ✅ | Utilitarianism, Categorical Imperative, virtue ethics, deontology inherited |
| 5. Technology, AI, Human Agency | ❌ | **No items on algorithmic bias, accountability gaps, consent, AI alignment** — the syllabus's signature contemporary chapter |
| 6. Global Justice, Climate, Future People | ❌ | **No items on cosmopolitanism, intergenerational justice, non-identity, discounting** |
| 7. Bodies, Life, Moral Status (personhood, QALY, triage) | ❌ | No coverage |
| 8. Public Ethics and Democratic Disagreement | ⚠️ | Veil of Ignorance + Political Philosophy inherited; no public-reason or compromise items |

**Coverage is the weakest in the cluster.** The track is wired by `.filter()` over `philosophy` chapters `['Ethics', 'Political Philosophy', 'Philosophy of Mind']` plus the OpenTrivia philosophy imports. The result is **classical metaethics + canonical Rawls/Nozick + Mind-Body philosophy** — almost nothing on the syllabus's *contemporary* edge (AI ethics, climate, bioethics, public reason).

## Per-file recommendations

| File | contemporaryEthics Q's | Bucket | Reason |
|---|---|---|---|
| Moral Crossroads filter (titles in `moralCrossroadsTitles` set, [`universityAcademic.ts:61`](../../../src/data/questionCatalog/universityAcademic.ts)) | ~10 | **KEEP** | Hand-authored items by title match: Utilitarianism, Categorical Imperative, Problem of Evil, Veil of Ignorance, Euthyphro, Error Theory. Per-distractor explanations are real. Bedrock items. |
| `philosophy.filter(chapter ∈ ['Ethics', 'Political Philosophy', 'Philosophy of Mind'])` ([`universityAcademic.ts:374`](../../../src/data/questionCatalog/universityAcademic.ts)) | ~15 | **KEEP / RESCOPE** | Pulls more ethics + Chinese Room/Mary's Room/Nagel. **Phil of Mind doesn't belong here** — consciousness items pad count without serving the syllabus. Remove `'Philosophy of Mind'` from filter; items belong on `philJunior` only. |
| [`openTriviaPhilosophyQuestions`](../../../src/data/questionCatalog/openTriviaArtPhilosophyMicroImported.ts) | ~16 | **DELETE** | DEFAULT_FLAW pattern — canned distractor string. Trivia recall, not ethical reasoning. Same delete recommended in `philosophy.md` audit. |
| [`openTriviaPhilosophyExtensionQuestions`](../../../src/data/questionCatalog/openTriviaArtPhilosophyExtensionImported.ts) | unknown (~10–20) | **DELETE** | Same DEFAULT_FLAW pattern. |

**No dedicated `contemporaryEthicsWorkoutGenerated.ts` exists** — largest authoring gap in the cluster.

**Net effect**: ~50 wired → ~25 high-quality items once OpenTrivia imports + Phil-of-Mind padding are cut. 30–40 question authoring backlog to cover the contemporary syllabus (chapters 1, 3, 5, 6, 7, 8).

## Open actions (priority order)

1. **Remove `'Philosophy of Mind'` from the chapter filter** at [`universityAcademic.ts:374`](../../../src/data/questionCatalog/universityAcademic.ts). Consciousness/qualia/Mary's Room are not contemporary ethics; they live in `philJunior`.
2. **DELETE both OpenTriviaQA philosophy imports** from the wiring — same DEFAULT_FLAW problem flagged in `philosophy.md`.
3. **Author 30–40 contemporary ethics questions** covering the gaps: ch1 (reflective equilibrium, moral uncertainty), ch3 (moral luck, responsibility under systems), ch5 (algorithmic accountability, consent in data systems, AI alignment), ch6 (cosmopolitanism, intergenerational justice, climate discounting, non-identity), ch7 (personhood, QALY, animal ethics, triage), ch8 (public reason, epistemic injustice). Voice template: `philosophyWorkoutGenerated.ts` plus Moral Crossroads hand-rolls.
4. **Create a `contemporaryEthicsWorkoutGenerated.ts` file** so the track has dedicated content rather than relying on philosophy `.filter()` overlap.

## Estimated effort

- Filter + delete cleanup: ~30 min
- Contemporary authoring: ~14 hours (40 × 20 min) — biggest authoring lift in the cluster
- Capstone case-style items: ~3 hours

**~2.5 working days.** Largest authoring backlog in the cluster.

## Notes for next auditor

This track is the **most syllabus/content mismatched track in the cluster.** Syllabus title is "Contemporary Ethical Theory" with chapters on AI, climate, future people, bioethics, public reason. Wired questions are 1960s–1990s analytic philosophy classics inherited from `philosophy`. Track is *playable* only because metaethics/normative chapters are well-covered; the contemporary edge is missing entirely.

`philSenior` (Moral Crossroads) is wired as `moralCrossroadsQuestions` only — a strict subset of what feeds `contemporaryEthics`. Any rewrite to the moral-crossroads filter cascades to both tracks. See [`universityAcademic.ts:48–72`](../../../src/data/questionCatalog/universityAcademic.ts) for the hardcoded title sets.

# Audit: lifeSkillsUni (Adulting & Life Skills)

**Syllabus**: [`src/data/syllabi/university/adulting_and_life_skills.md`](../../../src/data/syllabi/university/adulting_and_life_skills.md)
**Track id**: `lifeSkillsUni`
**Tier**: university
**Region**: **US-specific in current syllabus** — references W-4/W-2/1099, HSA/FSA, Roth IRA, HMO/PPO, ACA, CFPB, Federal Student Aid, IRS, DOL. UK/EU/AU equivalents (PAYE/P60, ISA/SIPP, NHS, pension auto-enrolment, Citizens Advice) entirely absent. **Region tag missing** in [`src/data/ageCatalog/university.ts:258`](../../../src/data/ageCatalog/university.ts).
**Status**: `soon` — confirmed.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Money Map and Budgeting on Real Income | ❌ | No 50/30/20, emergency fund, sinking fund, automation items |
| 2. Credit, Debt, Student Loans, Saving | ❌ | No APR/utilization/Roth-vs-traditional items |
| 3. Housing, Leases, Roommates, Utilities | ❌ | No lease-clause analysis, deposit/guarantor, joint-and-several-liability items |
| 4. Career Launch and Professional Communication | ❌ | No resume-tailoring, STAR-method, outreach-email items |
| 5. Offers, Negotiation, Workplace Rights | ❌ | No offer comparison, salary research, benefits-tradeoff items |
| 6. Healthcare, Insurance, Taxes | ❌ | No premium/deductible/copay, HMO/PPO, W-4 items |
| 7. Domestic Systems, Food, Transport, Maintenance | ❌ | No meal-planning, cleaning rotation, repair-vs-replace items |
| 8. Time, Conflict, Boundaries, Burnout | ❌ | No calendar systems, boundary scripts, burnout-signal items |

**Zero coverage.** No file in `src/data/questionCatalog/` defines a `lifeSkillsUni` (or `adulting` / `lifeSkills`) track key. The only grep hit is a `highGenerated.ts` keyword-classifier mention used for a different track's routing logic. The track is correctly `status: 'soon'`.

May 2026 audit note confirmed: `adulting_and_life_skills` may be `status: 'soon'` stub — verified empty.

## Per-file recommendations

| File | lifeSkillsUni Q's | Bucket | Reason |
|---|---|---|---|
| (no file directly wired) | 0 | **N/A** | Track has no banks. Status `soon` is honest. |
| Potential future seed: [`careerAgentGeneratedQualifications*.ts`](../../../src/data/questionCatalog/) | unknown | (assess later) | Career qualifications files cover offer/negotiation/HR topics for the career tier; some chapter-5 content may be salvageable for cross-wire when this track promotes. |
| Potential future seed: career roadmap files for healthcare/finance | unknown | (assess later) | Tax forms and insurance plan structure may have partial coverage in healthcare/finance career roadmaps — cross-wire candidates, not source-of-truth. |

## Open actions (priority order)

1. **Decide region strategy first.** This syllabus is entirely US-specific. Either:
   - Tag the track `region: 'US'` and add a UK/EU/AU variant later (`lifeSkillsUniUK` etc.), OR
   - Rewrite the syllabus to be region-neutral with explicit US/UK/EU/AU side-panels for tax/insurance/loan specifics.
   Given that Floe's US-first launch matches this content's framing, **tag as US for now** and revisit when international launch is planned.
2. **Decide promotion timeline.** This is a high-value differentiator (no competitor ships a "what is a W-4" course inside a learning app) but high authoring cost given its 8-chapter breadth and regulation-adjacency. Minimum credible volume: ~80 questions (10/chapter).
3. **Add `lastReviewed: <date>` metadata** to any future bank — tax forms, loan repayment rules, ACA structure all change annually. Schema change needed.
4. **If promoting**: author ~80 questions. Voice template: `jargonBusters.ts` style (clear, direct, names systems by their real names — "W-4", "APR", "joint and several liability") plus `philosophyWorkoutGenerated`'s per-distractor-explanation discipline.
5. **Cross-wire opportunities to assess at promotion time**:
   - Chapter 5 offer/negotiation: career qualifications files
   - Chapter 6 healthcare/taxes: healthcare-roadmap and finance-roadmap career banks
   - Chapter 4 career launch: career-tier interview/communication content

## Estimated effort

- Region tag + subtitle clarification: ~10 min
- Schema change for `lastReviewed` metadata: ~2 hours (engineering)
- Authoring 80 questions across 8 chapters: ~27 hours (regulatory accuracy slows authoring)
- Annual review/refresh of regulatory items: ~4 hours/year ongoing

**~4 working days** initial authoring; ongoing review burden makes this the most expensive `soon` track in the cluster to bring playable. Worth it if Floe's positioning includes "learn the systems of adult life" — defer otherwise.

## Notes for next auditor

`adulting_and_life_skills` is a thematic outlier in this cluster. Consider regrouping into a "Career & Life Skills" cluster next round. Annual `lastReviewed` discipline is the single most important schema gap surfaced — already noted in [`docs/CONTENT_AUDIT.md`](../../CONTENT_AUDIT.md); this audit confirms the need.

# Audit: multivariableCalculus

**Syllabus**: [`src/data/syllabi/university/multivariable_calculus.md`](../../../src/data/syllabi/university/multivariable_calculus.md)
**Track id**: `multivariableCalculus`
**Tier**: university
**Region**: Universal (no jurisdiction — math is math). No region tag needed.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Vectors, Curves, Geometry in Space | yes | Vector length, dot product, orthogonal, unit vector, cross-product direction, plane normal |
| 2. Functions of Several Variables, Partial Derivatives | yes | Domain (sqrt restriction), level curve, graph dimension, path test for limits, continuity, partial derivative semantics, basic partials, second partial notation |
| 3. Chain Rules, Gradients, Directional Change | yes | Gradient definition, steepest-increase direction, directional derivative (grad f · u), level-curve perpendicularity, chain rule setup, implicit surfaces |
| 4. Optimization and Constrained Problems | yes | Critical points, second derivative test (D > 0 / D < 0 / D = 0), Lagrange multipliers (grad f = λ grad g), constraint role |
| 5. Double Integrals and Planar Accumulation | yes | Double integral meaning, rectangular region, Fubini, Type I region, order-change rationale, polar conversion (x²+y² = r²), polar area element r dr dθ |
| 6. Triple Integrals and Change of Variables | partial | Triple integral meaning, cylindrical/spherical when to use; **Jacobian computation absent**, change-of-variables formula absent |
| 7. Vector Fields and Line Integrals | yes | Vector field definition, divergence vs curl, line integral, work integral (∫F·dr), conservative field, potential function |
| 8. Surface Integrals and Integral Theorems | yes | Surface integral, Green's theorem, divergence theorem |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`multivariableCalculusWorkoutGenerated.ts`](../../../src/data/questionCatalog/multivariableCalculusWorkoutGenerated.ts) | 50 | **KEEP** | **Confirms May 2026 audit's "surprisingly solid" call.** Per-distractor explanations + nudges throughout. No `DEFAULT_FLAW`. Chapter labels (Vectors and Space / Functions of Several Variables / Partial Derivatives / Gradient / Tangent Planes / Chain Rule / Optimization / Constrained Optimization / Double Integrals / Polar Coordinates / Triple Integrals / Vector Fields / Line Integrals / Conservative Fields / Surface Integrals / Theorems) align almost 1-to-1 with syllabus chapters. Strong distractor discipline ("That is f_y" when asked for f_x; "That is divergence" when asked for curl). The compact single-line `q()` formatting is dense but content-rich. |

That's the entire bank for this track. Wired at `universityCollege.ts:89`. No other content routes here.

## Cross-cluster flags

- **Math notation**: ASCII (`<3, 4, 12>`, `f_x`, `grad f dot u`, `r dr dtheta`). Greek as words. Renderer-safe. **No mismatch.**
- **Region**: universal. No tag needed.
- **Stokes' theorem missing** — divergence and Green's covered but not Stokes' (the 3D bridge). Single-question gap.
- **No Jacobian-computation drill** — change-of-variables mentioned conceptually (cylindrical/spherical) but the actual `|∂(x,y)/∂(u,v)|` Jacobian is absent. Two-question gap.
- **Single-file architecture**: cleanest track in the cluster — one bank, no duplication risk.

## Open actions (priority order)

1. **Author 3 Stokes' theorem items** (chapter 8 gap): theorem statement, when to choose Stokes vs Green vs Divergence, surface orientation choice.
2. **Author 3 Jacobian items** (chapter 6 gap): 2D linear Jacobian, polar Jacobian derivation, general change-of-variables formula.
3. **Author 2 spherical-coordinate volume items** (chapter 6 deepening): spherical volume element ρ²sinφ dρ dφ dθ, sphere volume via spherical integration.
4. **Consider 2–3 quadric surface ID items** — current bank asks "identify a quadric surface" conceptually but doesn't distinguish ellipsoid vs paraboloid vs hyperboloid.

**No region tagging needed. No `DEFAULT_FLAW` to remove. No deletes. No merges.** This track only needs ~10 net new items to be complete.

## Estimated effort

- Stokes / Jacobian / spherical authoring: ~5 hours (10 items × 30 min)

**~half a working day.** Easiest track in the cluster to bring to full coverage.

## Notes for next auditor

"What good looks like" exemplar for `*WorkoutGenerated.ts` math files. Use as the baseline when scoring other workout-generated banks. Compact one-line `q()` formatting is harder to read than multi-line equivalents — consider reformatting for editor experience.

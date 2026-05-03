# Numbas Import Analysis

## Conclusion

The Numbas and Numbas Exams raw collections should be treated as conversion-required, not direct-import-ready. The only safe direct-import subset found from the current extraction is `information`-only content with permissive licensing and no dynamic Numbas markup; this subset is effectively empty in the captured data. A small plaintext assessed subset may become importable only after refetching full `.exam` part answer configuration.

## Counts

- Total question records analysed: 21871
- `requires_parameter_rendering_or_conversion`: 21858
- `safe_direct_import`: 5
- `possible_direct_after_answer_refetch`: 8

## Counts By Source

- `numbas`: `requires_parameter_rendering_or_conversion` 9800, `safe_direct_import` 3, `possible_direct_after_answer_refetch` 5
- `numbas_exams`: `requires_parameter_rendering_or_conversion` 12058, `safe_direct_import` 2, `possible_direct_after_answer_refetch` 3

## Top Part Types

- `gapfill`: 28224
- `numberentry`: 5296
- `1_n_2`: 3939
- `jme`: 3662
- `m_n_x`: 717
- `information`: 623
- `m_n_2`: 608
- `matrix`: 443
- `patternmatch`: 201
- `(none)`: 166
- `mark-code-3`: 107
- `extension`: 67
- `yes-no`: 57
- `quantity`: 48
- `true-false`: 38
- `spreadsheet`: 31
- `write-a-word-producing-a-given-permutation`: 12
- `list-of-numbers`: 9
- `submit-an-answer-on-paper`: 3
- `differential-equation`: 3
- `number-entry-modulo`: 2
- `daniella-s-copy-of-true-or-false`: 2
- `give-a-numerical-input-for-an-expression`: 2
- `write-a-permutation-in-cycle-notation`: 2
- `will-s-copy-of-differential-equation`: 1
- `have-you-submitted-your-answer-to-canvas`: 1

## Top Tags

- `checked2015`: 2588
- `calculus`: 2315
- `steps`: 1713
- `taxonomy`: 1241
- `mas1601`: 1064
- `rebelmaths`: 860
- `differentiation`: 785
- `rebel`: 782
- `jsxgraph`: 668
- `integration`: 640
- `statics`: 556
- `mechanics`: 540
- `statistics`: 537
- `solving equations`: 534
- `algebraic manipulation`: 518
- `probability`: 492
- `fractions`: 488
- `algebra`: 453
- `mas1602`: 418
- `indefinite integration`: 377
- `mean`: 368
- `factorisation`: 361
- `numbas`: 318
- `constant of integration`: 277
- `tested1`: 272
- `integrals`: 268
- `chain rule`: 258
- `substitution`: 244
- `logarithms`: 231
- `linear equations`: 229
- `product rule`: 224
- `integration by substitution`: 224
- `logs`: 219
- `matrix`: 198
- `complex numbers`: 198
- `vectors`: 192
- `functions`: 192
- `matrices`: 186
- `sc`: 181
- `data analysis`: 177

## Top Licences

- `Creative Commons Attribution 4.0 International`: 13516
- `Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International`: 5277
- `None specified`: 1437
- `Creative Commons Attribution-NonCommercial 4.0 International`: 1012
- `Creative Commons Attribution-NonCommercial-NoDerivs 4.0 International`: 267
- `Creative Commons Attribution-ShareAlike 4.0 International`: 256
- `All rights reserved`: 106

## Blockers

- raw extraction omitted answer/correctness configuration for assessed parts: 21626
- uses answer part types not directly represented in Floe catalog: 21484
- contains variables/placeholders/applets/LaTeX needing Numbas rendering: 20864
- licence requires filtering or manual policy decision: 8099
- no part type captured: 166
- requires full .exam part answer fields: 8

## Blocker Examples

### requires_parameter_rendering_or_conversion
- `numbas::202414` [Dump Truck](https://numbas.mathcentre.ac.uk/question/202414/dump-truck/): parts=['gapfill'], variables=20, licence=`Creative Commons Attribution-NonCommercial 4.0 International`. Reasons: licence requires filtering or manual policy decision; contains variables/placeholders/applets/LaTeX needing Numbas rendering; uses answer part types not directly represented in Floe catalog; raw extraction omitted answer/correctness configuration for assessed parts. Snippet: The combined weight of the truck bed and its contents is {W} lb with a center of gravity at $G$. Determine: The force acting at on the dump bed at point $B$. The magnitude and direction of the reaction at pin $C$. {apple
- `numbas::36904` [Moment of a Force: using Varignon's Theorem](https://numbas.mathcentre.ac.uk/question/36904/moment-of-a-force-using-varignon-s-theorem/): parts=['gapfill', 'gapfill'], variables=27, licence=`Creative Commons Attribution-NonCommercial 4.0 International`. Reasons: licence requires filtering or manual policy decision; contains variables/placeholders/applets/LaTeX needing Numbas rendering; uses answer part types not directly represented in Floe catalog; raw extraction omitted answer/correctness configuration for assessed parts. Snippet: Force $\mathbf{F}$, which has a magnitude of {F}, acts along a line passing through points $D$ and $D'$. The grid units are in [ {units[0]} ] and counter-clockwise moments are positive. Determine the moment of the force 
- `numbas::37903` [Opposing moments using Varignon's theorem](https://numbas.mathcentre.ac.uk/question/37903/opposing-moments-using-varignon-s-theorem/): parts=['gapfill'], variables=22, licence=`Creative Commons Attribution-NonCommercial 4.0 International`. Reasons: licence requires filtering or manual policy decision; contains variables/placeholders/applets/LaTeX needing Numbas rendering; uses answer part types not directly represented in Floe catalog; raw extraction omitted answer/correctness configuration for assessed parts. Snippet: An L shaped bracket is held in equilibrium by a frictionless pin at $A$ and cable $BD$. {applet} When a $\var{F}$ load $F$ is applied as shown, determine: the magnitude of the moment of force $\mathbf{F}$ about point $A$
- `numbas::140954` [Equivalent Force-couple system: Bracket](https://numbas.mathcentre.ac.uk/question/140954/equivalent-force-couple-system-bracket/): parts=['gapfill', 'gapfill'], variables=14, licence=`Creative Commons Attribution-NonCommercial 4.0 International`. Reasons: licence requires filtering or manual policy decision; contains variables/placeholders/applets/LaTeX needing Numbas rendering; uses answer part types not directly represented in Floe catalog; raw extraction omitted answer/correctness configuration for assessed parts. Snippet: Two forces act on a bracket as shown. Replace these forces with an equivalent force-couple system acting at point $B$. {applet}
- `numbas::37760` [Equilibrium of a rigid body: cantilever beam](https://numbas.mathcentre.ac.uk/question/37760/equilibrium-of-a-rigid-body-cantilever-beam/): parts=['gapfill'], variables=20, licence=`Creative Commons Attribution-NonCommercial 4.0 International`. Reasons: licence requires filtering or manual policy decision; contains variables/placeholders/applets/LaTeX needing Numbas rendering; uses answer part types not directly represented in Floe catalog; raw extraction omitted answer/correctness configuration for assessed parts. Snippet: A beam of length $L$ = {L} {units[1]} is supported by a fixed (cantilever) support at $O$, and supports these loads: $A$ = {magA} {units[0]}, $B$ = {abs(M)} {units[0]}-{units[1]} and $C$ = {magC} {units[0]}. {geogebra_ap

### safe_direct_import
- `numbas::164541` [Me Q009 - Beam Equilibrium](https://numbas.mathcentre.ac.uk/question/164541/me-q009-beam-equilibrium/): parts=['information', 'information', 'information', 'information', 'information', 'information', 'information'], variables=0, licence=`Creative Commons Attribution 4.0 International`. Reasons: none. Snippet: The horizontal beam shown in the diagram is pin supported at A and roller supported at D. The beam carries a vertical point load as shown at B and an inclined point load as shown at C. l 1 = 3m, l 2 = 7m, l 3 = 1.2m, θ=4
- `numbas::93623` [Make yourself comfortable](https://numbas.mathcentre.ac.uk/question/93623/make-yourself-comfortable/): parts=['information', 'information', 'information'], variables=0, licence=`Creative Commons Attribution 4.0 International`. Reasons: none. Snippet: You can adjust Numbas to make it easier for you to use.
- `numbas::93735` [What to do if you have trouble](https://numbas.mathcentre.ac.uk/question/93735/what-to-do-if-you-have-trouble/): parts=['information', 'information'], variables=0, licence=`Creative Commons Attribution 4.0 International`. Reasons: none. Snippet: If you have any trouble using Numbas, or a query about a test, contact your instructor first. If they can't solve the problem, they'll pass your message on to the Numbas team.
- `numbas-exam::21108::1` [Make yourself comfortable](https://numbas.mathcentre.ac.uk/exam/21108/getting-started/): parts=['information', 'information', 'information'], variables=0, licence=`Creative Commons Attribution 4.0 International`. Reasons: none. Snippet: You can adjust Numbas to make it easier for you to use.
- `numbas-exam::21108::3` [What to do if you have trouble](https://numbas.mathcentre.ac.uk/exam/21108/getting-started/): parts=['information', 'information'], variables=0, licence=`Creative Commons Attribution 4.0 International`. Reasons: none. Snippet: If you have any trouble using Numbas, or a query about a test, contact your instructor first. If they can't solve the problem, they'll pass your message on to the Numbas team.

### possible_direct_after_answer_refetch
- `numbas::6536` [match text pattern part for MH](https://numbas.mathcentre.ac.uk/question/6536/match-text-pattern-part-for-mh/): parts=['patternmatch', 'patternmatch'], variables=0, licence=`Creative Commons Attribution 4.0 International`. Reasons: requires full .exam part answer fields. Snippet: 
- `numbas::82347` [ What is your name?](https://numbas.mathcentre.ac.uk/question/82347/what-is-your-name/): parts=['patternmatch'], variables=0, licence=`Creative Commons Attribution 4.0 International`. Reasons: requires full .exam part answer fields. Snippet: 
- `numbas::51387` [Match absolutely any text](https://numbas.mathcentre.ac.uk/question/51387/match-absolutely-any-text/): parts=['patternmatch'], variables=0, licence=`Creative Commons Attribution 4.0 International`. Reasons: requires full .exam part answer fields. Snippet: 
- `numbas::47582` [Chi squ area v rubbish](https://numbas.mathcentre.ac.uk/question/47582/chi-squ-area-v-rubbish/): parts=['yes-no'], variables=0, licence=`Creative Commons Attribution-ShareAlike 4.0 International`. Reasons: requires full .exam part answer fields. Snippet: 
- `numbas::16214` [match text pattern part for MH](https://numbas.mathcentre.ac.uk/question/16214/match-text-pattern-part-for-mh/): parts=['patternmatch', 'patternmatch'], variables=0, licence=`Creative Commons Attribution 4.0 International`. Reasons: requires full .exam part answer fields. Snippet: 

## Importer / Conversion Plan

1. Refetch source `.exam` payloads for candidate records and preserve complete question parts, marking schemes, custom part type extensions, variables, functions, rulesets, and resources. The current raw JSON is insufficient for assessed direct import because it keeps only part type names.
2. Apply licence gates before content generation: allow CC BY and CC BY-SA by default; exclude or separately review NC, ND, all-rights-reserved, and unspecified records.
3. Build a Numbas rendering/conversion stage that executes variable generation with deterministic seeds and emits one or more static variants per question. Replace `{var}`, `\var{...}`, applet placeholders, and generated diagrams with rendered text/assets.
4. Map supported assessed part types first: `numberentry`, `jme`, `patternmatch`, `m_n_2`, `1_n_2`, `matrix`, and simple `gapfill` children into Floe question shapes with generated answer/rationale fields.
5. Quarantine extension/custom part types, spreadsheets, code-marking, GeoGebra/JSXGraph-heavy questions, and multi-part gapfills until there is a dedicated renderer or manual review workflow.
6. Import only generated static variants into app catalog files after separate approval. Keep provenance fields pointing back to Numbas source IDs, licences, contributors, and rendering seed.

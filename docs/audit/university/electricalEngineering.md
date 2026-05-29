# Audit: electricalEngineering

**Syllabus**: [`src/data/syllabi/university/electrical_engineering.md`](../../../src/data/syllabi/university/electrical_engineering.md)
**Track id**: `electricalEngineering`
**Tier**: university
**Region**: Jurisdiction-neutral (MIT OCW, All About Circuits, Analog Devices, TI)

## Coverage map (syllabus to questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Circuit Variables and DC Analysis | Yes | Voltage division, nodal analysis with mixed sources |
| 2. Circuit Theorems and Op-Amps | Yes | Inverting amplifier, summing amp, difference amp, Thevenin + max power transfer |
| 3. Capacitors, Inductors, First-Order Transients | Yes | RC charging (1τ → 63%), RL step response at multiple time constants |
| 4. RLC and Dynamic Systems | Yes | Series RLC damping with α and ω₀, parallel resonance frequency |
| 5. AC Steady State and Power | Yes | Capacitor impedance at 1 kHz, power factor correction kVAR calculation |
| 6. Frequency Response, Filters, Laplace | Yes | -3 dB at cutoff, two-pole Bode slope -40 dB/decade |
| 7. Semiconductors and Analog Electronics | Partial | nMOS V_GS > V_TH condition; no diode/rectifier, no BJT biasing, no small-signal |
| 8. Digital Logic, Signals, Control Extensions | Partial | Boolean A + A'B simplification, D flip-flop, Routh-Hurwitz stability range; no K-map, no Fourier, no PID detail |

## Per-file recommendations

| File | EE Q's | Bucket | Reason |
|---|---|---|---|
| [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts) (electricalEngineering section, ids 3112000-3112017) | 18 | **FIX** | The most technically demanding content in the agent-generated cluster — Thevenin equivalents with max power transfer (Vth²/4Rth), Routh-Hurwitz K range from characteristic polynomial s³+7s²+10s+K=0, RLC underdamped condition with α<ω₀. **Calculations are correct.** **DEFAULT_FLAW applied to every wrong answer** via the file-level `q()` helper. Per-distractor rewrite required — and is harder here than in genChem1/genBio1 because EE distractors need to encode specific arithmetic or conceptual misconceptions (sign error in op-amp gain, swapped α and ω₀, RL τ confusion). Then close Ch 7 (diodes, BJT) and Ch 8 (K-map, Fourier) gaps. |

No other files wire to electricalEngineering.

## Cross-cutting flags

- **DEFAULT_FLAW** — confirmed. Particularly painful here because the underlying difficulty is genuinely senior-year and the distractors *could* encode specific misconceptions (e.g. "+0.94 V" as the sign-error trap for an inverting amp, "RL = 8 kohm" as the wrong-form-of-max-power-transfer trap).
- **Tone whiplash** at senior-year register. "Voltage-lifting workout", "dramatic node voltage", "suspicious soup summer", "phasor dance floor", "capacitor goblin charge" — at this content difficulty, the playful framing reads as condescending. Compare with the sober register of `universityPrep.ts` interview-style prompts.
- **No region issues.** SI units throughout.
- **Chapter coverage is even** across the first six chapters; the gaps are concentrated in semiconductor electronics (Ch 7) and digital/signal/control extensions (Ch 8), which is fair — those are full courses unto themselves.

## Open actions (priority order)

1. **Per-distractor rewrite of 18 existing Qs.** This is high-value: the distractor values for each question (e.g. RL = 8 kohm, 4 kohm, 12 kohm for max power transfer) almost certainly encode specific student errors and deserve to be named. Highest leverage in the cluster after generalPhysics2.
2. **Author Chapter 7 semiconductor items** — diode I-V regions, half-wave vs full-wave rectifier output, BJT active vs saturation, MOSFET triode vs saturation distinction, small-signal gain estimation. ~6 questions.
3. **Author Chapter 8 digital/signal extensions** — Karnaugh map simplification of a 4-variable expression, basic Fourier series of a square wave, PID intuition (P vs I vs D action). ~5 questions.
4. **Sober the question voice for the bulk of items.** At senior-year EE difficulty, the playful framing fights the audience. Keep ≤20% of items in that voice.
5. **Cross-reference with `software` / `softwareDesign` / `algorithms` tracks** — for the digital-logic items, there may be combinational/sequential logic content already authored elsewhere that should be lifted or cross-wired.

## Estimated effort

- Per-distractor rewrite (more involved than other tracks because of numeric distractors): ~5 hours
- ~11 new questions across Ch 7, 8: ~5 hours
- Total: ~1.5 working days

## Notes for next auditor

electricalEngineering is the **most-difficult-content track** in the agent-generated cluster. The calculation accuracy is impressive (Routh-Hurwitz, Thevenin + max power, RLC damping diagnostics all worked out correctly) — but the DEFAULT_FLAW pattern is most damaging here because each distractor numeric *should* be teaching a specific misconception. Treat the rewrite as the highest priority after generalPhysics2 in the agent-generated rewrite wave. The Chapter 7-8 build-out can be deferred; the rewrite cannot. Also: the syllabus capstone ("design, simulate, and document a small electrical system") calls for project-style assessment that question banks can't address directly — flag as a content type Floe may not be the right venue for.

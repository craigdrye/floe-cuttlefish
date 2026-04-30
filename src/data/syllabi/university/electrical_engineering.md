# Electrical Engineering
**ID**: `electricalEngineering` · **Discipline**: Engineering · **Year**: University Senior

## Course Philosophy
This course provides a rigorous foundation in circuit theory, electronics, and signals/systems. It is highly mathematical, requiring proficiency in differential equations and complex numbers to analyze dynamic electrical networks.

## Module 1: DC Circuit Analysis (20%)
- Core concepts: Charge, current, voltage, power, and energy
- Passive sign convention
- Ohm's Law and Kirchhoff's Laws (KVL, KCL)
- Nodal analysis and Mesh analysis (including supernodes and supermeshes)
- Circuit Theorems: Superposition, Thevenin's Theorem, Norton's Theorem, and Maximum Power Transfer
- Operational Amplifiers (Op-Amps): Ideal op-amp model, inverting/non-inverting amplifiers, summing amplifiers, difference amplifiers
- **Questions**: Finding the Thevenin equivalent of a complex circuit, designing an op-amp circuit to perform a specific mathematical operation (e.g., $V_{out} = -2V_1 + 3V_2$)

## Module 2: Capacitors, Inductors, and Transient Analysis (20%)
- Physics of capacitors ($i = C \frac{dv}{dt}$) and inductors ($v = L \frac{di}{dt}$)
- Energy storage in electric and magnetic fields
- First-order circuits (RC and RL): Natural response, step response, and the time constant ($\tau$)
- Second-order circuits (RLC): Series and parallel RLC networks; overdamped, critically damped, and underdamped responses
- Solving transient circuits using differential equations
- **Questions**: Calculating the voltage across a capacitor 5 milliseconds after a switch closes, determining the damping ratio of a series RLC circuit

## Module 3: AC Steady-State Analysis (20%)
- Sinusoidal sources and complex forcing functions
- Phasor representation of sinusoids (Euler's identity)
- Impedance ($Z$) and Admittance ($Y$) of R, L, and C components
- Nodal and mesh analysis in the frequency domain (using complex numbers)
- AC Power: Instantaneous power, average (real) power, reactive power, apparent power, and complex power
- Power Factor and Power Factor Correction
- **Questions**: Calculating the complex power delivered by a source, designing a capacitor network to correct the power factor of an inductive load to 0.95

## Module 4: Frequency Response, Filters, and Laplace Transforms (20%)
- Transfer functions ($H(s)$ or $H(j\omega)$)
- Bode plots: Magnitude and phase approximations
- Passive Filters: Low-pass, high-pass, band-pass, and band-stop filters; cutoff frequencies and resonance
- Active Filters (using Op-Amps)
- Laplace Transform in Circuit Analysis: S-domain equivalent circuits (including initial conditions)
- Poles, zeros, and system stability
- **Questions**: Sketching the Bode plot for a given transfer function, analyzing the stability of a system based on its pole locations in the s-plane

## Module 5: Semiconductor Devices and Digital Logic (20%)
- Introduction to semiconductors (p-n junctions, depletion regions)
- Diodes: Ideal vs practical models, rectifiers (half-wave, full-wave), clipping and clamping circuits
- Bipolar Junction Transistors (BJTs) and Field Effect Transistors (MOSFETs): Operating regions (cutoff, active/saturation, saturation/triode) and basic amplifier configurations
- Digital Logic: Boolean algebra, logic gates (AND, OR, NOT, NAND, NOR, XOR), combinational logic design, Karnaugh maps (K-maps)
- Sequential Logic: Flip-flops (D, JK), registers, and counters
- **Questions**: Designing a half-wave rectifier with a smoothing capacitor, simplifying a Boolean expression using a K-map

## Stretch Zone
- Fourier Series analysis of non-sinusoidal periodic waveforms
- Introduction to control systems (PID controllers)

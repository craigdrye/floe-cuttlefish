import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const astrophysicsIntroS0G23: Question[] = [
  makeSimpleQuestion(
    9380000,
    'Career Skills',
    'Dark Matter and Dark Energy',
    "Why dark energy comes to dominate",
    'As the universe expands, the average density of ordinary matter and dark matter drops, because the same amount of stuff is spread through ever more space. Yet observations point to dark energy growing more important over time, eventually driving an accelerating expansion. What is the simplest reason dark energy wins out in the long run?',
    'Dark energy (as a cosmological constant) is a property of space itself, so its density stays roughly constant as space expands, while matter dilutes; over time the unchanging dark energy comes to outweigh the thinning matter',
    [
      ["Dark energy is matter that is continuously being created in empty space, so there is always more of it to push", "This pictures dark energy as new particles spontaneously appearing, which is not the standard model; the density stays constant not because new energy is manufactured but because dark energy is an intrinsic feature of each volume of space, with the same energy per cubic meter no matter how much space there is.", "Think of constant density per volume, not freshly minted matter: as space grows, total dark energy grows simply because there is more space holding the same density."],
      ["Dark matter slowly converts into dark energy as galaxies age, so the balance shifts", "There is no known process turning dark matter into dark energy; they are distinct and dark matter dilutes with expansion just like ordinary matter. The shift comes from dark energy's density staying flat while matter thins, not from one transforming into the other.", "Treat dark matter and dark energy as separate components that do not interconvert; the dominance shift is about dilution, not conversion."],
      ["Gravity from matter weakens with cosmic distance, letting dark energy take over by default", "Gravity follows an inverse-square law with distance but does not simply 'switch off' at large scale, and that is not why dark energy dominates. The real driver is that matter density falls as space expands while dark energy density does not, so dark energy's share of the total energy budget rises.", "Compare how each component's density changes with expansion: matter thins out, dark energy holds steady, and the steady one eventually leads."],
    ],
    'In the standard picture, ordinary matter and dark matter dilute as the universe expands: their density falls roughly as the inverse cube of the scale factor, since a fixed amount of stuff fills a growing volume. Dark energy, modeled as a cosmological constant, behaves completely differently: it is an intrinsic energy of space with a density that stays essentially constant, so total dark energy grows as new space appears. Because matter keeps thinning while dark energy holds steady, dark energy inevitably comes to dominate the energy budget and drives the accelerating expansion seen in distant supernovae.',
    'Floe generated',
    true,
    'Ask what happens to each component\'s density when you double the volume of space, then see which one is left standing.',
    { challengeRating: 6 },
  ),
]

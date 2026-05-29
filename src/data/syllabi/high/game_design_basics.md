# Game Design Basics
Design play on purpose: turn rules, choices, and feedback into experiences people actually want to keep playing.

**ID**: `gameDesignBasics` · **Discipline**: Computing/Arts

## Course Aim
This course introduces game design as a creative systems discipline rather than a programming task. Students learn to see any game as a set of rules, goals, constraints, and feedback that together produce a player experience, and to reason deliberately about how a designer's choices shape what players feel and do. The emphasis is on thinking like a designer: forming a clear intent, building the smallest playable thing that tests it, watching real players, and iterating.

Across eight chapters students move from analysis (taking familiar games apart) to synthesis (building, tuning, and pitching original work). They use the MDA framework to separate what they build (mechanics) from what emerges in play (dynamics) and what players feel (aesthetics), then apply that lens to core loops, meaningful choice, level pacing, systems and economy balance, and narrative. The course closes with the professional concerns that make a game shippable and responsible: accessibility, inclusive design, ethics, and a clear pitch.

The course is medium-agnostic. Students can prototype with paper, cards, dice, slides, block coding, or a simple engine, so the learning transfers whether a student goes on to digital development, tabletop design, or any field that builds interactive systems. Assessment rewards evidence-based reasoning about design rather than polish.

## Course Design Notes
This course draws on the MDA framework (Hunicke, LeBlanc, and Zubek), the playcentric, iterative tradition of Tracy Fullerton's *Game Design Workshop*, level-design fundamentals from professional engine curricula, and game-education frameworks from organizations such as the IGDA. It is deliberately light on math and code so that design thinking, not tooling, stays in the foreground. Vocabulary is introduced precisely (mechanic vs. dynamic, source vs. sink, embedded vs. emergent narrative) because shared language is what lets designers critique and improve each other's work. Every chapter pairs a concept with a small, testable design output so students practice the iterate-and-playtest habit that defines the field.

## Chapter 1: What Game Designers Design
- **Core questions**: What is the player trying to do, and what rule makes that hard? What feedback tells the player what just happened? How is a game different from a toy or a story?
- **Key concepts**: game, goal, rules, constraints, actions, feedback, player, system, prototype, the difference between a goal and a win condition.
- **Applied skills**: deconstruct a familiar game into goal, rules, actions, and feedback; write a one-page analysis using precise design vocabulary.
- **Common traps**: confusing theme or graphics with mechanics; describing what a game *is about* instead of what the player *does*; treating "fun" as a single undefined thing.

## Chapter 2: Mechanics, Dynamics, and Aesthetics
- **Core questions**: Which mechanic produces this player behavior? What feeling (the aesthetic) is the design aiming for? What dynamic emerged that the designer did not directly build?
- **Key concepts**: the MDA framework; mechanics as rules and components; dynamics as run-time behavior; aesthetics as the eight kinds of player experience (sensation, fantasy, narrative, challenge, fellowship, discovery, expression, submission); designer view vs. player view.
- **Applied skills**: produce an MDA breakdown of two contrasting games; trace a felt experience back to the mechanic that caused it.
- **Common traps**: collapsing mechanics and dynamics into one idea; assuming a mechanic guarantees a feeling; reading MDA only from the designer's side and forgetting the player encounters it in reverse (aesthetics first).

## Chapter 3: Core Loops and Meaningful Choice
- **Core questions**: What does the player do over and over, and why is it satisfying each time? Which choice has a real consequence? What single dominant strategy would make the game stale?
- **Key concepts**: core loop, short-term vs. long-term goals, agency, risk/reward, resource tradeoffs, opportunity cost, meaningful vs. false choice, dominant strategy.
- **Applied skills**: diagram a core loop for an original concept; build a choice map showing tradeoffs; identify and remove a dominant strategy.
- **Common traps**: offering "choices" that all lead to the same outcome; loops with no reward or no escalation; mistaking many options for meaningful options.

## Chapter 4: Prototyping and Playtesting
- **Core questions**: What exactly are we testing with this prototype? What did players actually do (versus what we assumed)? Which one change should we try next?
- **Key concepts**: paper prototype, minimum playable version, design hypothesis, observation vs. opinion, leading vs. open questions, iteration cycle.
- **Applied skills**: build a playable paper or digital prototype; run a short playtest and record observations on a notes sheet; choose the next iteration from evidence.
- **Common traps**: polishing before testing; asking players "did you like it?" instead of watching behavior; defending the design instead of listening; changing many variables at once so cause and effect blur.

## Chapter 5: Level Design, Pacing, and Onboarding
- **Core questions**: How does the player learn the game without being lectured? Where does difficulty rise, and is the rise earned? What visual cue guides the next action?
- **Key concepts**: signposting, affordance, tutorialization, challenge curve, flow, pacing, safe practice space, foreshadowing, the "show, don't tell" of teaching mechanics.
- **Applied skills**: sketch a level or encounter that teaches a mechanic through play; plan pacing with rest and intensity beats; place cues that direct attention.
- **Common traps**: front-loading rules as text walls; difficulty spikes that punish things the game never taught; no safe space to practice a new ability; cues the player cannot notice.

## Chapter 6: Systems, Economy, and Balance
- **Core questions**: Where does each resource enter the system (source) and leave it (sink)? Who currently holds an advantage, and is that intended? What tuning change improves fairness without flattening the game?
- **Key concepts**: sources and sinks, positive and negative feedback loops, progression, randomness vs. determinism, fairness, symmetry vs. asymmetry, snowballing, power creep, the role of a balance table.
- **Applied skills**: build a balance table listing variables, expected effects, and a test plan; identify a runaway feedback loop and propose a brake.
- **Common traps**: confusing a source with a sink; assuming randomness equals fairness; balancing only on paper without playtesting; letting power creep make old content meaningless.

## Chapter 7: Narrative, World, and Theme
- **Core questions**: What story comes from the player's own actions? What does the environment imply with no dialogue? Does the mechanic reinforce or fight the theme?
- **Key concepts**: embedded (authored) narrative, emergent narrative, environmental storytelling, tone, character goals, theme, ludonarrative dissonance, the integration of mechanic and meaning.
- **Applied skills**: write a short narrative design brief for a level, quest, or scenario; use environmental detail to tell story without text; align a mechanic with a theme.
- **Common traps**: bolting a story on top of unrelated mechanics; relying on cutscenes to carry all meaning; ludonarrative dissonance where the action contradicts the message.

## Chapter 8: Ethics, Accessibility, and the Final Pitch
- **Core questions**: Who can play this comfortably, and who is excluded? Which design choice manipulates the player rather than delighting them? How would you explain the game in one minute?
- **Key concepts**: accessibility, inclusive design, difficulty and remappable options, dark patterns, predatory monetization, privacy, community safety and moderation, pitch structure (hook, core experience, evidence, ask).
- **Applied skills**: audit a design for accessibility barriers; distinguish a dark pattern from a fair retention mechanic; deliver a one-minute pitch backed by prototype and playtest evidence.
- **Common traps**: treating accessibility as an optional add-on; defending engagement-maximizing dark patterns as "just good design"; pitching features instead of the player experience and the evidence for it.

## Capstone
Create a small original game or a substantial redesign of an existing one. Submit a complete design package: a design brief stating the intended player experience, a playable prototype, playtest notes from real players, the tuning or balance changes you made in response, an accessibility and ethics review, and a final one-minute pitch. The work is judged on clarity of design intent, evidence that playtesting changed the design, and how well mechanics, pacing, theme, and fairness serve the experience you set out to create.

## Assessment Ideas
- Analysis tasks graded on precise design vocabulary and evidence, not opinion.
- Prototypes graded on playability, focus on a single hypothesis, and visible iteration.
- Capstone graded on player experience, demonstrated playtest learning, fairness/accessibility, and clarity of the pitch.

## Research Notes
- MDA framework paper: https://aaai.org/papers/ws04-04-001-mda-a-formal-approach-to-game-design-and-game-research/
- Unity Learn level design fundamentals: https://learn.unity.com/project/fundamentals-of-professional-level-design
- IGDA game education resources: https://igda.org/sigs/game-education/
- Game Design Workshop reference: https://www.routledge.com/Game-Design-Workshop-A-Playcentric-Approach-to-Creating-Innovative-Gam/Fullerton/p/book/9781032607009

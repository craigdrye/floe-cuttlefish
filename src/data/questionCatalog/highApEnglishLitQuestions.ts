import { makeQuestionBank } from './base'
import type { Question } from './types'

// AP ENGLISH LITERATURE — CORE BANK
// ---------------------------------------------------------------------------
// 50 questions (IDs 4400400–4400449) covering the core AP Literature surface:
//   - Poetic devices and short-passage analysis (~12 Qs)
//   - Drama, with attention to Shakespeare (~8 Qs)
//   - Prose fiction and narrative technique (~12 Qs)
//   - Character and relationship analysis (~6 Qs)
//   - Theme, motif, and meaning-making (~6 Qs)
//   - Essay craft: thesis, evidence, line of reasoning (~6 Qs)
//
// Difficulty mix follows the College Board's CED weighting: roughly 30%
// device recognition, 50% application to passages, 20% interpretive synthesis.
// Distractors target the actual confusions AP students bring to the page —
// most often, conflating adjacent devices (caesura vs enjambment, metonymy
// vs synecdoche, dramatic vs verbal irony) or mistaking paraphrase for
// commentary. Where a quoted passage appears, the prompt names the writer
// so students aren't asked to identify the source from a fragment alone.

export const highApEnglishLitQuestions: Question[] = makeQuestionBank('AP', [
  // ---------------------------------------------------------------------
  // Poetic devices and short-passage analysis
  // ---------------------------------------------------------------------
  {
    id: 4400400,
    chapter: 'Poetic Devices',
    title: 'Enjambment',
    prompt: 'In the lines "I shall be telling this with a sigh / Somewhere ages and ages hence" (Frost), the lack of end-stop punctuation across the line break is best identified as:',
    correct: 'Enjambment, which pulls the reader\'s eye onward and mimics the speaker\'s wistful breath',
    wrong: [
      ['Caesura, since the line pauses mid-thought', 'A caesura is an internal pause inside a line; enjambment is the absence of a pause at the line\'s end.', 'Look at where the pause sits — middle of a line versus end.'],
      ['End-stop, because the thought completes within one line', 'End-stop means syntax and punctuation close at the line break; here the syntax runs over.', 'Check whether the syntax matches the line break.'],
      ['Anaphora, since "ages and ages" repeats', 'Anaphora is repetition at the start of successive clauses or lines, not internal word repetition.', 'Anaphora concerns line starts, not run-on syntax.'],
    ],
    lesson: 'Enjambment is the continuation of a sentence past a line break without a pause. Frost uses it to stretch a reflective tone and slow the reader\'s eye across the turn.',
  },
  {
    id: 4400401,
    chapter: 'Poetic Devices',
    title: 'Caesura',
    prompt: 'Consider this line from Eliot\'s "The Waste Land": "April is the cruellest month, breeding / Lilacs out of the dead land". The comma after "month" creates which effect inside the line?',
    correct: 'A caesura, a deliberate internal pause that lets the paradox of cruelty and breeding settle',
    wrong: [
      ['An enjambment, because the line breaks without a period', 'Enjambment names what happens at the line break "breeding / Lilacs"; the comma sits mid-line, so it can\'t be enjambment.', 'Locate where in the line the pause falls.'],
      ['Apostrophe, because the speaker addresses April', 'Apostrophe is direct address to an absent entity; Eliot describes April, he does not call out to it.', 'Apostrophe requires "O" or direct address.'],
      ['Anaphora, because cruellest is repeated', 'Anaphora is repetition at line starts and the word is not in fact repeated here.', 'Anaphora is a repetition pattern, not a pause.'],
    ],
    lesson: 'A caesura is a strong mid-line pause, often signalled by punctuation. It controls the pacing of a line and can dramatize a contradiction or shift in tone.',
  },
  {
    id: 4400402,
    chapter: 'Poetic Devices',
    title: 'Metaphor vs simile',
    prompt: 'Dickinson writes, "Hope is the thing with feathers / That perches in the soul". The figure of speech here is best identified as:',
    correct: 'An extended metaphor that equates an abstraction with a living bird without using "like" or "as"',
    wrong: [
      ['A simile, because hope is compared to a bird', 'A simile would say "Hope is like a bird"; Dickinson collapses the comparison by saying hope simply is a bird-like thing.', 'Watch for "like" or "as" — they mark similes.'],
      ['Personification, because hope is given human traits', 'Hope is given bird traits (feathers, perching), not specifically human traits.', 'Personification is human attributes; this is animal imagery.'],
      ['Metonymy, because feathers stand in for the whole bird', 'Metonymy substitutes a related concept; here the whole metaphor builds, it does not contract by substitution.', 'Metonymy is a swap, not an extended comparison.'],
    ],
    lesson: 'A metaphor asserts identity between unlike things ("X is Y") without "like" or "as". Dickinson extends the metaphor across stanzas, building a small allegory of hope as a small persistent bird.',
  },
  {
    id: 4400403,
    chapter: 'Poetic Devices',
    title: 'Synecdoche vs metonymy',
    prompt: 'When a poem refers to "all hands on deck" to mean sailors, the figure used is:',
    correct: 'Synecdoche, because a part (hands) stands for the whole (the sailors themselves)',
    wrong: [
      ['Metonymy, because a related concept replaces the thing meant', 'Metonymy substitutes a related but separate concept (the crown for monarchy); synecdoche specifically uses a part for the whole.', 'Ask whether the substitute is a part of the thing or merely associated with it.'],
      ['Personification, because the hands act on their own', 'Personification gives human traits to non-human things; hands are already human parts.', 'No non-human thing is acquiring human qualities.'],
      ['Apostrophe, because the line addresses the sailors', 'Apostrophe requires direct address to an absent or abstract entity, not the use of a body part as shorthand.', 'No "O thou" address is present.'],
    ],
    lesson: 'Synecdoche uses a part to mean the whole (or vice versa). Metonymy uses a related concept (the White House for the executive branch). Students often blur the two — the test is whether the substitute is literally a piece of the thing.',
  },
  {
    id: 4400404,
    chapter: 'Poetic Devices',
    title: 'Tone vs mood',
    prompt: 'A student writes that the speaker in a Keats ode feels "weary and yearning, but also reverent toward the nightingale". This sentence describes:',
    correct: 'Tone, the speaker\'s attitude toward the subject as expressed through diction and imagery',
    wrong: [
      ['Mood, the emotional atmosphere produced in the reader', 'Mood describes the feeling created in the reader; the sentence here describes how the speaker feels toward the subject.', 'Tone belongs to the speaker; mood belongs to the reader.'],
      ['Theme, the central claim the poem advances about life', 'Theme is a generalizable claim, not an attitudinal stance.', 'A theme is a claim, not an attitude.'],
      ['Meter, the rhythmic pattern of the lines', 'Meter is a structural property of sound, not an emotional stance.', 'Meter measures syllables, not feelings.'],
    ],
    lesson: 'Tone is the speaker\'s attitude toward the subject; mood is the atmosphere the reader feels. AP rubrics reward students who name the tone precisely and trace it to specific diction.',
  },
  {
    id: 4400405,
    chapter: 'Poetic Devices',
    title: 'Diction and connotation',
    prompt: 'A poem describes a city street as "throbbing" rather than "busy". The word choice most directly works to:',
    correct: 'Layer the street with bodily, almost wound-like connotations that intensify the imagery',
    wrong: [
      ['Establish meter by adding two syllables', 'Both "busy" and "throbbing" are disyllabic; the change is connotative, not metrical.', 'Compare what each word makes you feel, not how many syllables it has.'],
      ['Create a simile, since "throbbing" likens the street to something else', 'A simile requires "like" or "as"; "throbbing" is a metaphorical adjective, not a simile.', 'No "like" or "as" appears.'],
      ['Demonstrate alliteration with surrounding words', 'Alliteration depends on repeated initial consonants in nearby words; this question gives only one word.', 'Alliteration is a pattern across words.'],
    ],
    lesson: 'Diction is the writer\'s word choice, and its work is largely connotative. Strong literary analysis links a chosen word to the precise feeling or image it activates, rather than merely calling the word "descriptive".',
  },
  {
    id: 4400406,
    chapter: 'Poetic Devices',
    title: 'Imagery and the senses',
    prompt: 'Bishop\'s "The Fish" describes "the frightening gills, / fresh and crisp with blood". The imagery here is best described as:',
    correct: 'Tactile and visual imagery that estranges the reader from a familiar object by insisting on its strangeness',
    wrong: [
      ['Purely auditory imagery built on sound', 'No sound is depicted; the lines emphasize texture and sight.', 'List the senses the lines actually engage.'],
      ['Olfactory imagery built on smell', 'Smell is not named; the description focuses on touch ("crisp") and sight ("fresh and crisp with blood").', 'Bishop does not appeal to smell here.'],
      ['Abstract imagery with no sensory base', 'The imagery is concrete and sense-based, which is precisely what makes it powerful.', 'Imagery is always sensory; the question is which sense.'],
    ],
    lesson: 'Imagery refers to sensory language. AP analysis improves when students identify the specific sense engaged (tactile, visual, auditory, olfactory, gustatory, kinesthetic) and the effect on the reader\'s perception.',
  },
  {
    id: 4400407,
    chapter: 'Poetic Devices',
    title: 'Iambic pentameter',
    prompt: 'Shakespeare\'s Sonnet 18 opens, "Shall I compare thee to a summer\'s day?". The metrical pattern of this line is:',
    correct: 'Iambic pentameter — five iambs of unstressed-stressed syllables per line',
    wrong: [
      ['Trochaic tetrameter — four trochees of stressed-unstressed syllables', 'Trochaic tetrameter would scan "SHALL i COM-pare" with stress reversed; Shakespeare\'s line scans unstressed-stressed.', 'Count syllables and where the stress falls.'],
      ['Dactylic hexameter — six dactyls per line', 'Dactylic hexameter is the meter of classical epic (Homer, Virgil); it is rare in English lyric verse.', 'Hexameter has six feet, not five.'],
      ['Free verse — no fixed metrical pattern', 'Sonnets are by definition metrically regular, and this line scans cleanly as iambic pentameter.', 'Sonnets follow a fixed meter.'],
    ],
    lesson: 'Iambic pentameter is the dominant meter of the English sonnet and of Shakespearean drama. Recognising it lets students discuss substitutions (a trochee in the first foot, a spondee for emphasis) as deliberate disruptions.',
  },
  {
    id: 4400408,
    chapter: 'Poetic Devices',
    title: 'Volta in a sonnet',
    prompt: 'A Shakespearean sonnet most often turns or shifts at:',
    correct: 'The final couplet, where the argument resolves, ironizes, or surprises the preceding twelve lines',
    wrong: [
      ['The opening line, where the speaker states the conclusion first', 'Shakespearean sonnets typically develop a problem across three quatrains before turning, not in the first line.', 'The volta is a turn after development, not before it.'],
      ['Between lines four and five, in the Petrarchan octave-sestet break', 'That is the Petrarchan volta location; the Shakespearean sonnet uses a different structure that turns later.', 'You are mixing up two sonnet forms.'],
      ['Always between lines eleven and twelve regardless of form', 'There is no fixed line-eleven rule; the volta\'s placement is what distinguishes the two main sonnet forms.', 'Different sonnet forms turn at different points.'],
    ],
    lesson: 'A volta is the turn in a sonnet\'s thought. Petrarchan sonnets turn at the octave-sestet break (lines 8-9). Shakespearean sonnets typically turn in the final couplet (lines 13-14).',
  },
  {
    id: 4400409,
    chapter: 'Poetic Devices',
    title: 'Free verse and Whitman',
    prompt: 'Whitman\'s long, unmetered, cataloguing lines in "Song of Myself" are most accurately described as:',
    correct: 'Free verse — verse without regular meter or end-rhyme, organized by breath, parallelism, and image',
    wrong: [
      ['Blank verse — unrhymed iambic pentameter', 'Blank verse is unrhymed but metrical; Whitman\'s lines have no consistent metrical pattern.', 'Blank verse is metrical; free verse is not.'],
      ['Heroic couplets — rhymed iambic pentameter pairs', 'Heroic couplets are short, rhymed, and metrical; Whitman\'s lines are long, unrhymed, and unmetered.', 'Couplets rhyme; Whitman rarely rhymes.'],
      ['Sprung rhythm — Hopkins\'s stress-only meter', 'Sprung rhythm counts stresses but unevenly distributed; Whitman uses no metrical contract at all.', 'Sprung rhythm is Hopkins\'s technique, not Whitman\'s.'],
    ],
    lesson: 'Free verse abandons regular meter and rhyme in favor of organic patterning — anaphora, parallelism, image, and the breath of the line. Whitman is the founding English-language practitioner; later modernists extend the mode.',
  },
  {
    id: 4400410,
    chapter: 'Poetic Devices',
    title: 'Dramatic monologue',
    prompt: 'Browning\'s "My Last Duchess" features a speaker (the Duke) addressing a silent listener whose response we infer. The form is best identified as:',
    correct: 'A dramatic monologue, in which a single speaker unwittingly reveals character to an implied auditor',
    wrong: [
      ['A soliloquy, since one character speaks alone', 'A soliloquy occurs on stage with the character alone, speaking thoughts aloud; the Duke addresses a present listener.', 'Soliloquy = alone on stage; dramatic monologue = speaking to someone.'],
      ['A villanelle, since the speaker repeats himself across lines', 'A villanelle is a fixed nineteen-line form with repeating refrains; the form here is irregular.', 'Villanelle is a strict refrain form.'],
      ['An aubade, since the poem occurs in a domestic setting', 'An aubade is a dawn poem about parting lovers; setting alone does not make a form.', 'Aubade is specifically about dawn and parting.'],
    ],
    lesson: 'A dramatic monologue stages a single speaker addressing a silent auditor in a specific occasion. The form\'s power comes from dramatic irony: the speaker reveals more than they intend.',
  },
  {
    id: 4400411,
    chapter: 'Poetic Devices',
    title: 'Allusion',
    prompt: 'Eliot opens "The Love Song of J. Alfred Prufrock" with an epigraph from Dante\'s Inferno. The function of this allusion is best understood as:',
    correct: 'Framing Prufrock\'s confession as a damned soul\'s — one who can speak only because no one will return to tell',
    wrong: [
      ['Demonstrating Eliot\'s knowledge of Italian', 'AP analysis treats allusion as meaning-making, not as biographical display by the poet.', 'Ask what the borrowed text does to the new poem, not what it shows about the poet.'],
      ['Decorating the poem with classical language for prestige', 'Modernist allusion is structural and ironic, not ornamental.', 'Eliot uses allusion to do interpretive work.'],
      ['Establishing the meter of the poem that follows', 'The epigraph is in Italian terza rima; the English poem that follows is not in terza rima.', 'Epigraphs frame meaning, not meter.'],
    ],
    lesson: 'An allusion is a brief reference to another text or event that imports its associations. The richest allusions work structurally — Dante\'s damned Guido frames Prufrock\'s speech as confession from a place of no return.',
  },
  // ---------------------------------------------------------------------
  // Drama and Shakespeare
  // ---------------------------------------------------------------------
  {
    id: 4400412,
    chapter: 'Drama and Shakespeare',
    title: 'Soliloquy',
    prompt: 'Hamlet\'s "To be, or not to be" speech is a soliloquy because:',
    correct: 'Hamlet is alone on stage and speaks his interior thoughts aloud for the audience to overhear',
    wrong: [
      ['He directs his words to Ophelia, who answers him', 'A soliloquy by definition is delivered alone; if another character were addressed, it would be a dialogue or aside.', 'Soliloquies require an empty stage.'],
      ['He breaks the fourth wall to praise the audience directly', 'A soliloquy is overheard, not addressed; the convention is that we eavesdrop on private thought.', 'The audience is not addressed.'],
      ['He speaks in prose rather than verse', 'Hamlet\'s soliloquy is in blank verse; the form distinction is not what makes it a soliloquy.', 'Soliloquy is about who is on stage, not which register is used.'],
    ],
    lesson: 'A soliloquy is a stage convention in which a character alone on stage speaks their thoughts aloud, allowing the audience direct access to interiority. Distinguish it from an aside (a brief private remark in the presence of others) and a monologue (a long speech addressed to other characters).',
  },
  {
    id: 4400413,
    chapter: 'Drama and Shakespeare',
    title: 'Dramatic irony',
    prompt: 'In Othello, the audience knows Iago is lying about Desdemona while Othello believes him. This gap between audience knowledge and character knowledge is:',
    correct: 'Dramatic irony, which intensifies the tragic suspense as we watch a deception we cannot stop',
    wrong: [
      ['Verbal irony, since Iago says the opposite of what he means', 'Verbal irony names what Iago does inside his speech; dramatic irony names the wider audience-character knowledge gap.', 'Verbal irony is local; dramatic irony is structural.'],
      ['Situational irony, since the outcome reverses expectations', 'Situational irony is about unexpected outcomes; the audience here is not surprised by the outcome.', 'Situational irony requires reversal of expectation.'],
      ['Cosmic irony, since fate works against Othello', 'Cosmic irony involves a hostile or indifferent universe; Othello is undone by a human agent, not by fate.', 'Cosmic irony attributes the gap to fate, not to a villain.'],
    ],
    lesson: 'Dramatic irony occurs when the audience knows something a character does not. It is the engine of Shakespearean tragedy: we watch Othello believe Iago, knowing it will destroy him.',
  },
  {
    id: 4400414,
    chapter: 'Drama and Shakespeare',
    title: 'Blank verse',
    prompt: 'Most of the dialogue between noble characters in Shakespeare\'s plays is written in:',
    correct: 'Blank verse — unrhymed iambic pentameter',
    wrong: [
      ['Heroic couplets — rhymed iambic pentameter pairs', 'Shakespeare uses couplets to mark scene endings or epigrams, not for general dialogue.', 'Couplets are for closure, not for ordinary speech.'],
      ['Prose, with no metrical structure', 'Prose is reserved for lower-status characters, comic scenes, or scenes of madness; nobles in serious moments speak verse.', 'Prose has a different social function in Shakespeare.'],
      ['Sprung rhythm — accentual meter with no fixed syllable count', 'Sprung rhythm is Hopkins\'s nineteenth-century innovation, postdating Shakespeare by 250 years.', 'Hopkins came centuries after Shakespeare.'],
    ],
    lesson: 'Blank verse — unrhymed iambic pentameter — is the dominant medium of Shakespearean drama for serious noble speech. Shifts to prose, couplets, or song are meaningful and worth flagging in AP analysis.',
  },
  {
    id: 4400415,
    chapter: 'Drama and Shakespeare',
    title: 'Tragic hero and hamartia',
    prompt: 'In Aristotle\'s Poetics, the tragic hero falls through:',
    correct: 'Hamartia, an error or flaw in judgment that drives the reversal of fortune',
    wrong: [
      ['Hubris alone, defined as physical violence against the gods', 'Hubris in Greek usage means overweening pride or insolence, but the broader cause is hamartia, of which hubris is one form.', 'Hubris is one variety of hamartia, not the whole concept.'],
      ['Catharsis, the purification the hero achieves at the end', 'Catharsis is the audience\'s emotional discharge of pity and fear, not the cause of the hero\'s fall.', 'Catharsis is what the audience feels, not what the hero does.'],
      ['Anagnorisis, the moment the hero recognizes the truth', 'Anagnorisis is the recognition scene that accompanies reversal, not the underlying cause.', 'Anagnorisis is the recognition, not the flaw.'],
    ],
    lesson: 'Aristotle\'s tragic vocabulary distinguishes hamartia (flaw or error), peripeteia (reversal), anagnorisis (recognition), and catharsis (the audience\'s purification). AP students should keep these terms distinct rather than collapse them into "tragic flaw".',
  },
  {
    id: 4400416,
    chapter: 'Drama and Shakespeare',
    title: 'Shakespearean comedy structure',
    prompt: 'Shakespearean comedies such as A Midsummer Night\'s Dream and Twelfth Night typically resolve through:',
    correct: 'Marriage, restored social order, and the integration of outsiders into the community',
    wrong: [
      ['The death of the protagonist and the destruction of the social order', 'That ending is characteristic of Shakespearean tragedy, not comedy.', 'Death in the final scene marks tragedy, not comedy.'],
      ['Open-ended ambiguity in which no resolution is reached', 'Shakespearean comedy reliably closes with celebratory ritual; ambiguity is more typical of modern drama.', 'Renaissance comedy closes with festivity.'],
      ['The exile of all characters from the comic green world', 'Characters leave the green world to return to a renewed court or city, not to permanent exile.', 'They return integrated, not banished.'],
    ],
    lesson: 'Shakespearean comedy follows a movement from a disordered court, into a green world of transformation, and back to a restored social order signalled by marriage and festivity. The structural opposite — death, isolation, and disorder retained — defines his tragedies.',
  },
  {
    id: 4400417,
    chapter: 'Drama and Shakespeare',
    title: 'Aside',
    prompt: 'Late in Macbeth, Macbeth speaks a few private lines while other characters remain on stage, unheard by them. This convention is:',
    correct: 'An aside, in which a character\'s words reach the audience but not the other characters on stage',
    wrong: [
      ['A soliloquy, since Macbeth speaks his private thoughts', 'A soliloquy requires the speaker to be alone on stage; here other characters are present.', 'Soliloquy = alone; aside = others present but unhearing.'],
      ['A chorus, since it comments on the action', 'A chorus is a separate dramatic role that comments collectively on the action, not a private remark by a principal character.', 'A chorus is its own role, not a passing remark.'],
      ['A prologue, since it precedes the next scene', 'A prologue opens a play or act and frames it for the audience; an aside is embedded in ongoing action.', 'Prologue comes before; an aside is during.'],
    ],
    lesson: 'An aside is a stage convention in which a character speaks to the audience (or themselves) without other characters hearing. It is a compact way to reveal interiority without clearing the stage.',
  },
  {
    id: 4400418,
    chapter: 'Drama and Shakespeare',
    title: 'Stichomythia',
    prompt: 'A scene of fast, alternating one-line exchanges between two characters — as when Hamlet trades barbs with Claudius — is called:',
    correct: 'Stichomythia, a rapid line-by-line exchange that heightens conflict and verbal pressure',
    wrong: [
      ['Catharsis, the audience\'s release of pity and fear', 'Catharsis describes an emotional effect on the audience, not a pattern of dialogue.', 'Catharsis is felt by viewers, not performed by characters.'],
      ['Apostrophe, addressing an absent figure', 'Apostrophe is direct address to an absent or abstract entity, not an exchange between present speakers.', 'Apostrophe is a solo device.'],
      ['Hypotaxis, the subordination of clauses', 'Hypotaxis is a syntactic structure, not a dialogue pattern.', 'Hypotaxis is about sentence shape, not exchange rhythm.'],
    ],
    lesson: 'Stichomythia is a classical inheritance: rapid alternating single-line exchanges that compress conflict. Shakespeare deploys it in moments of escalating pressure — confrontation scenes, witty courtship, interrogations.',
  },
  {
    id: 4400419,
    chapter: 'Drama and Shakespeare',
    title: 'Iambic substitution',
    prompt: 'When Shakespeare opens Richard III with "Now is the winter of our discontent", the first foot scans as a trochee rather than an iamb. The effect of this substitution is most directly to:',
    correct: 'Stress the word "Now" and seize the audience\'s attention before settling into the metrical norm',
    wrong: [
      ['Break the line into free verse with no metrical contract', 'A single substitution within an otherwise regular pentameter does not abandon the meter; it dramatizes it.', 'One foot of substitution is not free verse.'],
      ['Signal that Richard is speaking in prose rather than verse', 'The speech is verse throughout; a trochaic substitution remains within the metrical contract.', 'Prose has no foot structure to substitute within.'],
      ['Convert the line to dactylic meter for epic effect', 'A trochee is two syllables (stressed-unstressed); a dactyl is three (stressed-unstressed-unstressed). One foot does not change the line\'s overall meter.', 'A single trochee is not a dactyl.'],
    ],
    lesson: 'Metrical substitution is one of Shakespeare\'s most precise tools: a trochee in the first foot of a pentameter line drops a stress where the ear expects an unstressed syllable. The departure from the norm is itself the meaning.',
  },
  // ---------------------------------------------------------------------
  // Prose fiction and narrative technique
  // ---------------------------------------------------------------------
  {
    id: 4400420,
    chapter: 'Prose Fiction and Narrative Technique',
    title: 'Free indirect discourse',
    prompt: 'Woolf writes in Mrs Dalloway, "What a lark! What a plunge! For so it had always seemed to her, when, with a little squeak of the hinges, she had burst open the French windows at Bourton". The narration is best identified as:',
    correct: 'Free indirect discourse, blending the third-person narrator\'s voice with Clarissa\'s remembered inflection',
    wrong: [
      ['First-person narration, since Clarissa speaks directly', 'The grammar is third person ("it had always seemed to her"); the voice colors that third person with Clarissa\'s feeling.', 'Check the pronouns — first person uses "I", not "her".'],
      ['Objective omniscient narration, with no access to thought', 'The passage gives privileged interior access; an objective narrator reports only external behavior.', 'Objective narration cannot enter consciousness.'],
      ['Direct interior monologue, set off in italics or quotation marks', 'Direct interior monologue presents thought verbatim, often in first person; free indirect discourse retains third-person grammar.', 'Look for the grammatical person used.'],
    ],
    lesson: 'Free indirect discourse keeps the grammar of third-person narration while letting a character\'s diction, rhythm, and feeling flood the sentence. It is the central technique of modernist and post-Austen fiction.',
  },
  {
    id: 4400421,
    chapter: 'Prose Fiction and Narrative Technique',
    title: 'Unreliable narrator',
    prompt: 'In Kazuo Ishiguro\'s The Remains of the Day, the butler Stevens\'s reflections steadily reveal what he cannot admit about Miss Kenton and Lord Darlington. Stevens is best described as:',
    correct: 'An unreliable narrator whose self-presentation differs systematically from what the reader infers',
    wrong: [
      ['An omniscient narrator with full access to all characters', 'Stevens narrates only what he sees and chooses to say; he lacks access to others\' interiority.', 'Omniscience requires access to multiple minds.'],
      ['A second-person narrator addressing the reader as "you"', 'Stevens narrates in first person; second-person narration is uncommon and structurally different.', 'Check the grammatical person of the narration.'],
      ['A reliable narrator whose account the reader should take at face value', 'The reader\'s task in Ishiguro is precisely to read against the narrator\'s self-account.', 'The novel rewards distrust of the narrator.'],
    ],
    lesson: 'An unreliable narrator presents a version of events the reader is invited to question. The unreliability can stem from naivety, self-deception, mental illness, or moral compromise — diagnosing the kind matters for analysis.',
  },
  {
    id: 4400422,
    chapter: 'Prose Fiction and Narrative Technique',
    title: 'Stream of consciousness',
    prompt: 'Faulkner\'s opening of The Sound and the Fury, narrated by Benjy, juxtaposes present sensory impressions with sudden time-shifts into childhood memory. The technique is:',
    correct: 'Stream of consciousness, which renders thought as it actually moves rather than as it would be reported',
    wrong: [
      ['Epistolary narration, told through letters between characters', 'No letters are exchanged; Benjy narrates from inside his own perception.', 'Epistolary novels are built from documents.'],
      ['Frame narrative, with one story enclosing another', 'A frame narrative uses an outer story to introduce an inner one (as in Heart of Darkness); Faulkner gives no such outer frame here.', 'Frame narratives have an outer storyteller.'],
      ['In medias res, beginning in the middle of action', 'In medias res names where a story starts in the plot, not how thought is rendered on the page.', 'In medias res is about plot order, not consciousness.'],
    ],
    lesson: 'Stream of consciousness is a narrative technique that imitates the unstructured flow of thought — sensory impressions, memory, association — without the tidying of formal report. Joyce, Woolf, and Faulkner are its central English-language practitioners.',
  },
  {
    id: 4400423,
    chapter: 'Prose Fiction and Narrative Technique',
    title: 'In medias res',
    prompt: 'A novel that opens with the protagonist already in the middle of a battle, with the cause of the conflict revealed only in later chapters, uses:',
    correct: 'In medias res, a structure that begins in the middle of action and supplies backstory through flashback or exposition',
    wrong: [
      ['Anachronism, the misplacement of an item outside its historical period', 'Anachronism is about something appearing in the wrong era, not about narrative starting point.', 'Anachronism is a historical mismatch, not a structural choice.'],
      ['Bildungsroman, the novel of formation across youth', 'A bildungsroman tracks development from childhood; the issue here is where the narrative starts, not what it traces.', 'Bildungsroman names a genre, not a structural device.'],
      ['Foreshadowing, the planting of hints about later events', 'Foreshadowing prepares the reader for a future moment; in medias res concerns the order of presentation.', 'Foreshadowing points forward; in medias res concerns starting position.'],
    ],
    lesson: 'In medias res ("in the middle of things") is a structural convention as old as Homer. The opening drops the reader into mid-action and trusts later passages to fill in cause.',
  },
  {
    id: 4400424,
    chapter: 'Prose Fiction and Narrative Technique',
    title: 'Setting as agent',
    prompt: 'In Achebe\'s Things Fall Apart, the Igbo village of Umuofia is rendered with such density of ritual, kinship, and proverb that it shapes how the reader evaluates Okonkwo\'s choices. Setting here functions most directly as:',
    correct: 'A pressure that constitutes character — Okonkwo\'s rigidity is legible only against the village\'s code',
    wrong: [
      ['Pure decoration, providing local color but no analytical weight', 'Achebe\'s setting carries the novel\'s ethical and political argument; it is not ornamental.', 'Look for whether setting affects how characters are evaluated.'],
      ['A symbol of colonial governance', 'Umuofia represents the pre-colonial order against which the later colonial encounter is measured; conflating the two flattens the novel\'s critique.', 'Distinguish what Umuofia stands for from what colonial administration stands for.'],
      ['A neutral container in which any story could occur', 'The specificity of Umuofia is the point; the story is unintelligible without it.', 'Setting in Achebe is irreplaceable, not interchangeable.'],
    ],
    lesson: 'Strong setting in fiction is not backdrop but pressure: it shapes what counts as virtue, what counts as failure, and what choices are legible at all. Achebe\'s Umuofia is a foundational example.',
  },
  {
    id: 4400425,
    chapter: 'Prose Fiction and Narrative Technique',
    title: 'Point of view',
    prompt: 'A narrative told by an outside voice that reports the thoughts of only one character but no others is best classified as:',
    correct: 'Third-person limited, restricted to the consciousness of a single character',
    wrong: [
      ['Third-person omniscient, with access to all characters\' minds', 'Omniscience reports the interiority of more than one character; the description here restricts access to one.', 'Limited and omniscient differ on how many minds the narrator enters.'],
      ['First-person, narrated by a character using "I"', 'First-person narration uses "I"; the description here specifies an outside voice.', 'Watch the pronoun the narrator uses for themselves.'],
      ['Second-person, addressing the reader as "you"', 'Second-person narration is rare and uses "you"; the question specifies third-person grammar.', 'Second-person addresses the reader directly.'],
    ],
    lesson: 'Point of view classifications matter. First-person uses "I". Second-person uses "you". Third-person limited follows one consciousness from outside. Third-person omniscient enters multiple minds. Each choice constrains what the reader can know.',
  },
  {
    id: 4400426,
    chapter: 'Prose Fiction and Narrative Technique',
    title: 'Frame narrative',
    prompt: 'Conrad\'s Heart of Darkness opens with sailors on a yawl in the Thames, where Marlow then tells the story of his journey up the Congo. This structure is a:',
    correct: 'Frame narrative, in which an outer storytelling situation encloses an inner tale',
    wrong: [
      ['Bildungsroman, the novel of moral formation', 'A bildungsroman tracks personal development; this is a structural device, not a genre.', 'The structure here is about who tells the story.'],
      ['Epistolary novel, told through letters', 'Conrad uses oral narration, not exchanged letters.', 'Letters are not the medium.'],
      ['Picaresque, a novel of episodic rogue adventures', 'Picaresque names a genre about loose, episodic adventure; this is a structural choice about narration.', 'Picaresque describes content, not structure.'],
    ],
    lesson: 'A frame narrative uses an outer narrator or scene to introduce, comment on, or complicate an inner story. The frame is rarely neutral — it can make the inner tale\'s reliability available for inspection.',
  },
  {
    id: 4400427,
    chapter: 'Prose Fiction and Narrative Technique',
    title: 'Symbol vs motif',
    prompt: 'In Toni Morrison\'s Beloved, the recurring image of the chokecherry tree on Sethe\'s back appears repeatedly across the novel, gathering meaning each time. This is best described as:',
    correct: 'A motif — a recurring image that accumulates significance through repetition',
    wrong: [
      ['A simile, since it compares scars to a tree', 'A simile would require "like" or "as"; the image works through metaphorical identification and repetition, not explicit comparison.', 'No "like" or "as" structure is present.'],
      ['An allegory, in which each detail maps to a fixed concept', 'Allegory imposes a one-to-one decoding scheme; the chokecherry tree is open and accumulative, not allegorical.', 'Allegory is rigid; motif is layered.'],
      ['Pure description with no symbolic weight', 'Morrison\'s repetitions are pointedly symbolic; treating the image as flat description misses its function.', 'Repeated images in literary fiction rarely sit flat.'],
    ],
    lesson: 'A symbol carries meaning beyond itself. A motif is a recurring element (image, phrase, situation) that gathers significance through repetition. Morrison\'s chokecherry tree is both — the motif builds the symbol over time.',
  },
  {
    id: 4400428,
    chapter: 'Prose Fiction and Narrative Technique',
    title: 'Pacing through scene and summary',
    prompt: 'Across a single chapter, a novelist might compress a year of action into one paragraph and then expand a fifteen-minute conversation across six pages. The technique that distinguishes the two is best described as:',
    correct: 'The contrast between summary (compressing time) and scene (expanding time)',
    wrong: [
      ['The contrast between first-person and third-person narration', 'Person is a different axis from pace; the same narrator can summarize and dramatize.', 'Person and pacing are independent choices.'],
      ['The contrast between simile and metaphor', 'Both similes and metaphors are figures of speech; neither names a pacing choice.', 'Figures of speech are not pacing units.'],
      ['The contrast between iambic and trochaic meter', 'Meter belongs to verse, not to prose pacing.', 'Meter is a verse property.'],
    ],
    lesson: 'Prose fiction controls time through the contrast between summary (a paragraph holding a year) and scene (a page holding minutes). What a writer expands and what they compress is itself an interpretive claim.',
  },
  {
    id: 4400429,
    chapter: 'Prose Fiction and Narrative Technique',
    title: 'Bildungsroman',
    prompt: 'A novel that traces a young protagonist\'s moral and intellectual development from childhood toward maturity — Jane Eyre, Great Expectations, A Portrait of the Artist as a Young Man — belongs to which genre?',
    correct: 'Bildungsroman, the novel of formation',
    wrong: [
      ['Picaresque, the episodic novel of a roguish wanderer', 'Picaresque protagonists travel through loosely linked adventures without strong moral arc; bildungsroman tracks growth.', 'Picaresque is about loose episodes; bildungsroman is about growth.'],
      ['Gothic, the genre of haunted houses and uncanny terror', 'Jane Eyre contains gothic elements, but the genre that names the developmental arc is bildungsroman.', 'Gothic names atmosphere; bildungsroman names trajectory.'],
      ['Roman à clef, a novel keyed to real persons under disguise', 'Roman à clef labels a relation to historical figures, not a developmental shape.', 'Roman à clef is about real-life keys; bildungsroman is about growth.'],
    ],
    lesson: 'A bildungsroman ("novel of formation") tracks a protagonist\'s development from youth toward maturity. The form remains foundational for AP-relevant texts — Dickens, Brontë, Joyce, Morrison\'s Song of Solomon.',
  },
  {
    id: 4400430,
    chapter: 'Prose Fiction and Narrative Technique',
    title: 'Tone in prose',
    prompt: 'Jane Austen opens Pride and Prejudice: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife". The tone of this sentence is best described as:',
    correct: 'Ironic — the grand "universally acknowledged" inflates a marketplace cliché until it audibly mocks itself',
    wrong: [
      ['Sincere admiration for the institution of marriage', 'The sentence\'s sincerity is precisely what is undermined; reading it straight misses the gap between elevated diction and trivial premise.', 'Ask whether the diction matches the seriousness of the claim.'],
      ['Sombre and elegiac, mourning a vanishing social world', 'Nothing in the sentence is mournful; the register is mock-philosophical, not elegiac.', 'No grief or loss is present.'],
      ['Plain and reportorial, with no attitudinal coloring', 'The phrase "universally acknowledged" is openly mock-philosophical; it cannot be read as neutral.', 'Listen for the inflated diction.'],
    ],
    lesson: 'Tone in prose is carried by the gap between diction and subject matter. Austen\'s grand abstract diction over a marriage-market cliché creates the irony for which the novel is famous. AP analysis names this gap precisely.',
  },
  {
    id: 4400431,
    chapter: 'Prose Fiction and Narrative Technique',
    title: 'Setting and atmosphere',
    prompt: 'Emily Brontë\'s repeated insistence on storms, moors, and broken windows in Wuthering Heights most directly functions to:',
    correct: 'Establish an atmosphere of elemental passion that mirrors the central characters\' interior weather',
    wrong: [
      ['Demonstrate the geographical accuracy of nineteenth-century Yorkshire', 'AP analysis treats setting as meaning-making, not as regional documentation.', 'Ask what the weather does to feeling, not whether it is accurate.'],
      ['Provide neutral background that the action could occur in any setting', 'Wuthering Heights without the moor is not Wuthering Heights; the setting is constitutive, not neutral.', 'Test whether the story could move elsewhere unchanged.'],
      ['Conform to the conventions of comic pastoral', 'Comic pastoral presents an idealized rural calm; Brontë\'s moors are not calm.', 'Brontë\'s mode is gothic, not comic pastoral.'],
    ],
    lesson: 'Atmosphere is the emotional weather of a setting. Strong AP commentary connects atmospheric choices to characters\' interior states, rather than treating weather as decoration.',
  },
  // ---------------------------------------------------------------------
  // Character and relationship analysis
  // ---------------------------------------------------------------------
  {
    id: 4400432,
    chapter: 'Character and Relationships',
    title: 'Foil',
    prompt: 'Laertes\'s decisive vengeance for his father throws Hamlet\'s hesitation into sharper relief. Laertes serves as a:',
    correct: 'Foil — a character whose contrast illuminates qualities in another',
    wrong: [
      ['Doppelgänger — a supernatural double whose existence threatens the protagonist', 'A doppelgänger is a supernatural double, often uncanny; Laertes is a mortal counterpart, not Hamlet\'s ghostly twin.', 'Doppelgänger carries a supernatural charge a foil does not.'],
      ['Static character — one who undergoes no significant change', 'Whether Laertes changes is a separate question from his function relative to Hamlet.', 'Foil and static describe different axes.'],
      ['Antagonist — the character who opposes the protagonist\'s goals', 'Claudius is Hamlet\'s antagonist; Laertes is a contrasting young avenger drawn into the larger plot.', 'Laertes and Hamlet are aligned in grief, not opposed in goal.'],
    ],
    lesson: 'A foil is a character whose contrast illuminates another. Laertes, Fortinbras, and Hamlet are a classic triangle of young men avenging fathers; each makes the others\' choices legible by contrast.',
  },
  {
    id: 4400433,
    chapter: 'Character and Relationships',
    title: 'Dynamic vs static character',
    prompt: 'A character who undergoes a meaningful internal transformation across a novel — shifting how they understand themselves or the world — is best described as:',
    correct: 'A dynamic character',
    wrong: [
      ['A static character', 'A static character remains fundamentally the same throughout; the description here specifies transformation.', 'Dynamic = changes; static = does not.'],
      ['A flat character', 'Flat describes how fully a character is drawn (a single trait vs many); it is independent of whether they change.', 'Flat and round describe complexity, not change.'],
      ['A stock character', 'A stock character fits a recognizable type with little variation; the description here implies a particular interior arc.', 'Stock characters are conventional types, not arcs.'],
    ],
    lesson: 'Two independent axes describe characters. Flat vs round measures how complexly a character is drawn. Static vs dynamic measures whether the character changes. A round character may still be static; a dynamic character may begin flat.',
  },
  {
    id: 4400434,
    chapter: 'Character and Relationships',
    title: 'Archetype',
    prompt: 'Identifying Odysseus, Huck Finn, and Holden Caulfield as variants of "the wanderer" relies on which interpretive concept?',
    correct: 'Archetype — a recurring character type or pattern across cultures and periods',
    wrong: [
      ['Anachronism — an item out of its historical period', 'Anachronism concerns historical placement, not character pattern.', 'Anachronism is about time mismatch.'],
      ['Allusion — a brief reference to another text', 'Allusion is a specific gesture inside a text, not a general typology across texts.', 'Allusion is a discrete reference; archetype is a pattern.'],
      ['Anaphora — repetition at line starts in verse', 'Anaphora is a poetic device about repeated openings, not a character pattern.', 'Anaphora belongs to verse repetition.'],
    ],
    lesson: 'An archetype is a recurring pattern — the wanderer, the trickster, the wise elder, the scapegoat — that appears across cultures. Identifying an archetype helps explain how a character resonates beyond their own story.',
  },
  {
    id: 4400435,
    chapter: 'Character and Relationships',
    title: 'Round vs flat character',
    prompt: 'E. M. Forster\'s distinction between "flat" and "round" characters concerns:',
    correct: 'How fully a character is drawn — a single recognizable trait versus many sides capable of surprising the reader',
    wrong: [
      ['Whether a character speaks in verse or prose', 'Speech register is not the distinction Forster names; he is concerned with depth of characterization.', 'Forster is talking about depth, not speech.'],
      ['Whether a character is morally good or morally bad', 'Flat and round are independent of moral judgment; a round villain is still round.', 'Flat vs round is about complexity, not ethics.'],
      ['Whether a character belongs to the protagonist or the antagonist side', 'Both sides may have flat or round characters; the distinction does not align with allegiance.', 'Position in plot does not determine complexity.'],
    ],
    lesson: 'Forster\'s flat/round distinction is about complexity. A flat character can be summarized by one trait; a round character resists reduction and "surprises in a convincing way". Strong novels use both, deliberately.',
  },
  {
    id: 4400436,
    chapter: 'Character and Relationships',
    title: 'Indirect characterization',
    prompt: 'A novel reveals a character\'s vanity by showing them adjusting their hat in every reflective surface, rather than by stating "she was vain". This is an example of:',
    correct: 'Indirect characterization — revealing a character through action, speech, and detail rather than narrator statement',
    wrong: [
      ['Direct characterization — narrator statement about a character\'s qualities', 'Direct characterization names the trait outright; the example here works through behavior.', 'Direct = told; indirect = shown.'],
      ['Foreshadowing — planted hints about future events', 'Foreshadowing points forward to events; characterization reveals who a character is now.', 'Foreshadowing concerns plot; this concerns identity.'],
      ['Apostrophe — direct address to an absent figure', 'Apostrophe is a rhetorical device, not a characterization technique.', 'Apostrophe is a kind of address, not a way of drawing character.'],
    ],
    lesson: 'Indirect characterization reveals a character through what they do, say, and notice, rather than through narrator statement. AP commentary almost always works better when grounded in indirect-characterization evidence.',
  },
  {
    id: 4400437,
    chapter: 'Character and Relationships',
    title: 'Antagonism without villainy',
    prompt: 'In some literary fiction, the principal antagonism is between a protagonist and a structural force — class, race, gender, family expectation — rather than another individual. This kind of conflict is best described as:',
    correct: 'External conflict between character and society, where social structure functions as antagonist',
    wrong: [
      ['Internal conflict, since the protagonist struggles only within their own mind', 'Internal conflict is within a single consciousness; the description here names an external structural force.', 'Internal conflict has no outside antagonist.'],
      ['Cosmic conflict, since fate or the gods oppose the protagonist', 'Cosmic conflict involves supernatural or fated forces; social structure is human and historical.', 'Cosmic conflict is supernatural; social conflict is structural.'],
      ['Anti-conflict, the absence of any opposing force', 'A story without conflict is rare and unrelated to this description.', 'A protagonist opposing a structure is conflict, not its absence.'],
    ],
    lesson: 'Antagonism need not be a person. Character vs society is a major axis of literary conflict, and recognizing it lets students avoid the trap of looking for a "villain" in novels by Achebe, Morrison, Eliot, or Hardy.',
  },
  // ---------------------------------------------------------------------
  // Theme, motif, and meaning-making
  // ---------------------------------------------------------------------
  {
    id: 4400438,
    chapter: 'Theme and Meaning',
    title: 'Theme vs topic',
    prompt: 'Which of the following is properly a theme rather than a topic?',
    correct: 'Self-knowledge often arrives too late to redeem the choices it would have changed',
    wrong: [
      ['Self-knowledge', 'A single noun phrase names a topic; a theme is a claim about that topic.', 'A theme is a full sentence claim, not a label.'],
      ['Family', 'Family is a topic that themes can be built around, but it is not itself a theme.', 'Family alone is a subject, not a claim.'],
      ['Coming of age', 'Coming of age names a category of story, not a specific claim about what coming of age means.', 'A category is not a claim.'],
    ],
    lesson: 'A topic is what the work is about (love, power, knowledge). A theme is what the work claims about that topic (love survives loss; power corrupts gradually). AP rubrics reward theme statements that are full claims, not single nouns.',
  },
  {
    id: 4400439,
    chapter: 'Theme and Meaning',
    title: 'Motif as accumulation',
    prompt: 'Across The Great Gatsby, references to green lights, eyes on billboards, and ash heaps recur. The proper interpretive move is to:',
    correct: 'Treat the repeated images as a motif network that accumulates meaning across the novel',
    wrong: [
      ['Read each image as a separate symbol unrelated to the others', 'Motifs gain force precisely from their accumulation and interaction; reading in isolation flattens the network.', 'Look at how the images speak to each other.'],
      ['Discount the recurrences as accidents of style', 'Repeated images in literary fiction are almost never accidental; treating them as noise misses the design.', 'Repetition is design, not noise.'],
      ['Decode each image into one fixed concept', 'Imposing rigid one-to-one decoding (green light = X) misses the way motifs evolve as the novel proceeds.', 'Motifs evolve; allegory fixes.'],
    ],
    lesson: 'Motif-tracking is one of the most reliable strategies for AP analysis. Strong commentary connects motif occurrences, shows how their meaning shifts, and lets the accumulated weight underwrite a thematic claim.',
  },
  {
    id: 4400440,
    chapter: 'Theme and Meaning',
    title: 'Ambiguity as meaning',
    prompt: 'Henry James\'s The Turn of the Screw resists settling whether the governess actually sees ghosts or is psychologically unwell. The novel\'s ambiguity is best treated as:',
    correct: 'A constitutive feature of the work\'s meaning, not a defect to be resolved',
    wrong: [
      ['A flaw the reader should correct by choosing the more plausible reading', 'James designs the ambiguity; treating it as a defect to be patched undoes the work.', 'Ambiguity here is designed, not accidental.'],
      ['A signal that the author had not decided between two endings', 'AP analysis treats published ambiguity as authorial choice, not indecision.', 'Distinguish published design from biographical guesswork.'],
      ['Evidence that the text has no determinate meaning at all', 'Ambiguity is not nihilism; the text means something specific by withholding resolution.', 'Designed ambiguity is still meaningful.'],
    ],
    lesson: 'Literary ambiguity is often the point. Strong AP commentary names ambiguity precisely, identifies what is being left unresolved, and shows how the unresolved tension carries the work\'s meaning.',
  },
  {
    id: 4400441,
    chapter: 'Theme and Meaning',
    title: 'Juxtaposition',
    prompt: 'A novel places a scene of a wedding immediately beside a scene of a funeral in the next village. The structural choice is best identified as:',
    correct: 'Juxtaposition — the deliberate placement of contrasting elements to generate meaning',
    wrong: [
      ['Foreshadowing — planted hints about future events', 'Foreshadowing prepares the reader for a later event; juxtaposition derives meaning from immediate adjacency.', 'Foreshadowing points forward; juxtaposition compares side by side.'],
      ['Allusion — brief reference to another text or event', 'Allusion borrows from another work; the question concerns the arrangement of the novel\'s own scenes.', 'Allusion looks outside the text; juxtaposition arranges inside it.'],
      ['Anachronism — an item out of its historical period', 'Anachronism is a historical mismatch, not a structural pairing.', 'Anachronism is about time, not arrangement.'],
    ],
    lesson: 'Juxtaposition generates meaning by adjacency. A wedding next to a funeral, a poem of war beside a poem of pastoral peace, a chapter of plenty before a chapter of famine — the meaning lives in the gap.',
  },
  {
    id: 4400442,
    chapter: 'Theme and Meaning',
    title: 'Irony as theme-builder',
    prompt: 'Across Tess of the d\'Urbervilles, the most respectable characters do the most damage and the most "fallen" character is the moral center. This pattern is best read as:',
    correct: 'A sustained structural irony that drives the novel\'s critique of Victorian moral categories',
    wrong: [
      ['A failure of plotting that the novelist should have corrected', 'Hardy designs the inversion to make his argument; reading it as a plotting failure misses the critique.', 'The pattern is too consistent to be an error.'],
      ['A coincidence with no thematic load', 'A pattern repeated across hundreds of pages is rarely coincidence; AP commentary looks for design.', 'Repetition signals design.'],
      ['A purely local instance of verbal irony in one line', 'The pattern is structural across the novel, not contained in a single line.', 'Verbal irony is local; this pattern is novel-wide.'],
    ],
    lesson: 'Structural irony — sustained reversal of expectation across a whole work — is one of the most powerful theme-builders available to novelists. Hardy uses it to indict the Victorian moral order that destroys Tess.',
  },
  {
    id: 4400443,
    chapter: 'Theme and Meaning',
    title: 'Symbol and overdetermination',
    prompt: 'The whale in Moby-Dick is variously read as evil, divinity, nature\'s indifference, the unconscious, and American empire. The richest critical move is to:',
    correct: 'Acknowledge the symbol\'s overdetermination — its capacity to hold multiple meanings without collapsing into one',
    wrong: [
      ['Choose one reading and dismiss the others as wrong', 'Forcing a single answer flattens a symbol designed to hold many.', 'Strong symbols carry more than one meaning.'],
      ['Conclude that the whale means nothing in particular', 'Overdetermination is not vacancy; multiple meanings cohere around the same image.', 'Multiplicity is not emptiness.'],
      ['Treat the whale as pure plot mechanism with no symbolic weight', 'The novel\'s structure is built around the whale\'s symbolic charge; treating it as plot device misses the book.', 'Plot mechanism cannot account for the chapters of speculation.'],
    ],
    lesson: 'Great symbols are overdetermined: they hold multiple, sometimes contradictory, meanings simultaneously. Strong literary essays acknowledge the multiplicity rather than collapsing it to a single decoding.',
  },
  // ---------------------------------------------------------------------
  // Essay craft: claims, evidence, and line of reasoning
  // ---------------------------------------------------------------------
  {
    id: 4400444,
    chapter: 'Essay Craft',
    title: 'Defensible thesis',
    prompt: 'Which of the following best meets the AP Literature rubric\'s requirement of a "defensible thesis"?',
    correct: 'In "Ode to a Nightingale", Keats stages the speaker\'s longing for escape and his ironic recognition that art cannot finally release him from mortality',
    wrong: [
      ['Keats wrote "Ode to a Nightingale" in 1819 and it is about a bird', 'A defensible thesis must make an interpretive claim, not merely report a fact about composition.', 'A thesis is a claim, not a date.'],
      ['"Ode to a Nightingale" uses many literary devices including metaphor, imagery, and alliteration', 'Listing devices without naming what they accomplish does not advance an interpretive argument.', 'A defensible thesis says what the devices do, not just that they exist.'],
      ['"Ode to a Nightingale" is a beautiful poem that uses words well', 'AP rubrics specifically reject evaluative-but-unfalsifiable claims of this kind.', 'A thesis must be defensible — testable against the text.'],
    ],
    lesson: 'A defensible thesis makes an interpretive claim a reader could agree or disagree with, and that the text\'s evidence can be brought to bear on. Listing devices, restating plot, or making vague aesthetic judgments fails the test.',
  },
  {
    id: 4400445,
    chapter: 'Essay Craft',
    title: 'Evidence vs paraphrase',
    prompt: 'A student\'s essay paragraph quotes a four-line stanza and then writes: "Here, the poet describes a person sitting in a chair feeling sad and watching the rain". This sentence functions as:',
    correct: 'Paraphrase, which the rubric treats as restatement rather than analysis',
    wrong: [
      ['Strong commentary, because it explains what the poem says', 'Saying what the poem says is summary, not commentary; commentary explains how the language creates meaning.', 'Commentary is about how, not what.'],
      ['A defensible thesis statement', 'A thesis is a claim about the work as a whole, not a sentence-level restatement.', 'A thesis is broader than a single image.'],
      ['Evidence, since it contains a description', 'Evidence is the quotation itself; the student\'s sentence is not evidence but commentary on it (and weak commentary at that).', 'Evidence is what is quoted; commentary explains it.'],
    ],
    lesson: 'AP rubrics distinguish evidence (the quotation), commentary (the analysis of how that quotation creates meaning), and paraphrase (restating the quotation in different words). Paraphrase looks like analysis but does no analytical work.',
  },
  {
    id: 4400446,
    chapter: 'Essay Craft',
    title: 'Line of reasoning',
    prompt: 'The AP Literature rubric awards a point for a "line of reasoning". This refers to:',
    correct: 'A logical progression of claims across body paragraphs that builds toward the thesis\'s argument',
    wrong: [
      ['A bullet list of every literary device found in the text', 'A line of reasoning is an argument, not an inventory of devices.', 'Reasoning is sequential argument, not a list.'],
      ['A summary of the plot in chronological order', 'Plot summary does not reason; the rubric distinguishes between narrating and arguing.', 'Summary follows the text; reasoning follows an argument.'],
      ['The first sentence of each body paragraph regardless of content', 'Topic sentences contribute to a line of reasoning, but they must actually develop an argument.', 'The structure matters only if it is doing argumentative work.'],
    ],
    lesson: 'A line of reasoning is the chain of claims that connects body paragraphs to the thesis. AP graders look for whether each paragraph advances the argument and whether the paragraphs together build something the introduction promised.',
  },
  {
    id: 4400447,
    chapter: 'Essay Craft',
    title: 'Sophistication point',
    prompt: 'The AP Literature rubric reserves a "sophistication" point for essays that demonstrate complexity of thought. Which of the following is most likely to earn it?',
    correct: 'Identifying a tension or contradiction the work holds open, and arguing for its interpretive significance',
    wrong: [
      ['Using more advanced vocabulary across the essay', 'Sophistication is about complexity of thinking, not lexical decoration.', 'Big words do not signal sophistication; complex argument does.'],
      ['Writing longer paragraphs with more sentences', 'Length is not the criterion; sustained complex argument is.', 'More words do not equal more depth.'],
      ['Quoting more lines per paragraph than other essays', 'Volume of quotation is not the criterion; how the quotation is used is.', 'More quotes do not equal more thought.'],
    ],
    lesson: 'The sophistication point rewards interpretive complexity — most reliably, identifying a tension the work refuses to resolve and arguing for what that tension does. Sophistication is a quality of thinking, not vocabulary.',
  },
  {
    id: 4400448,
    chapter: 'Essay Craft',
    title: 'Embedded quotation',
    prompt: 'Which sentence best integrates textual evidence into analytical prose?',
    correct: 'Donne\'s speaker collapses devotion and demand when he commands the sun to "Busy old fool, unruly Sun", grafting intimate impatience onto the cosmological order',
    wrong: [
      ['"Busy old fool, unruly Sun" — Donne. This quote shows that the speaker is upset', 'AP commentary embeds the quotation in a sentence that does interpretive work; standalone block-and-restate gets minimal credit.', 'Embedded quotation does more work than block-and-restate.'],
      ['The speaker is upset at the sun for being unruly and busy and a fool, basically', 'Paraphrase without quotation drops the textual specificity AP rubrics reward.', 'Strong evidence keeps the writer\'s words on the page.'],
      ['I think this poem shows that Donne was a complicated person', 'Biographical speculation untethered from the text is not literary analysis.', 'Anchor commentary to the words on the page.'],
    ],
    lesson: 'Embedded quotation — short fragments of the original woven into the writer\'s own sentence — keeps textual specificity in the prose while doing analytical work. It outperforms block-quote-then-restate every time.',
  },
  {
    id: 4400449,
    chapter: 'Essay Craft',
    title: 'Commentary that earns its keep',
    prompt: 'A strong piece of AP commentary on a single quoted line should do which of the following?',
    correct: 'Name the technique at work, identify the precise effect on meaning or feeling, and connect that effect to the essay\'s larger claim',
    wrong: [
      ['Restate the quotation in different words to show understanding', 'Restatement in different words is paraphrase, which the rubric distinguishes from commentary.', 'Saying the same thing again is not commentary.'],
      ['List every device that appears anywhere in the quotation', 'Listing devices without naming their function is exactly what AP graders are trained to discount.', 'Naming devices is not the same as analysing them.'],
      ['Speculate about what the author was feeling when they wrote the line', 'Biographical speculation is not textual analysis; the rubric rewards engagement with the text itself.', 'Analysis stays with the words on the page.'],
    ],
    lesson: 'The three moves of strong AP commentary are: name the technique, identify the specific effect on meaning, and connect that effect to the larger argument. Commentary that stops short of any of the three does not yet earn its keep on the rubric.',
  },
])

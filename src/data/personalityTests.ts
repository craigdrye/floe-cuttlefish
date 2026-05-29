/**
 * Personality test items for Big Five (OCEAN) and MBTI.
 *
 * These are NOT scored as right/wrong. Each response maps to a trait
 * (Big Five) or a dichotomy pole (MBTI), and the final score yields a
 * personality result.
 *
 * Big Five items use a 5-point Likert scale. Each item declares its
 * trait and a `direction` (+1 = higher response means higher trait,
 * -1 = reverse-keyed). 10 items per trait × 5 traits = 50.
 *
 * MBTI items are forced-choice between two options, each option marks
 * one pole of a dichotomy (EI / SN / TF / JP). ~12-13 items per
 * dichotomy = 50.
 *
 * Sources / framing: items are paraphrased from the public-domain
 * IPIP-NEO short pools (Big Five) and standard MBTI-style A/B
 * preference probes. Wording is original; no items are copied verbatim
 * from copyrighted instruments.
 */

export type BigFiveTrait = 'O' | 'C' | 'E' | 'A' | 'N'

export type BigFiveItem = {
  id: string
  prompt: string
  trait: BigFiveTrait
  /** +1 = agree → higher trait; -1 = reverse-keyed (agree → lower trait) */
  direction: 1 | -1
}

export const LIKERT_OPTIONS: Array<{ value: 1 | 2 | 3 | 4 | 5; label: string }> = [
  { value: 1, label: 'Strongly disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly agree' },
]

export const BIG_FIVE_TRAIT_INFO: Record<BigFiveTrait, {
  name: string
  short: string
  high: string
  low: string
}> = {
  O: {
    name: 'Openness',
    short: 'Openness to experience',
    high: 'Curious, imaginative, drawn to new ideas, art, and unconventional perspectives.',
    low: 'Practical, conventional, prefers the familiar and the tested over the novel.',
  },
  C: {
    name: 'Conscientiousness',
    short: 'Conscientiousness',
    high: 'Organised, disciplined, goal-directed, dependable about plans and details.',
    low: 'Flexible, spontaneous, comfortable with looser structure and improvisation.',
  },
  E: {
    name: 'Extraversion',
    short: 'Extraversion',
    high: 'Outgoing, energised by people, enthusiastic, comfortable taking the floor.',
    low: 'Reserved, energised by solitude, measured in groups, content with quiet.',
  },
  A: {
    name: 'Agreeableness',
    short: 'Agreeableness',
    high: 'Cooperative, empathetic, trusts others, prioritises harmony.',
    low: 'Direct, skeptical, willing to challenge, comfortable with conflict.',
  },
  N: {
    name: 'Neuroticism',
    short: 'Neuroticism (emotional volatility)',
    high: 'Reactive, prone to worry, mood swings, and stress sensitivity.',
    low: 'Emotionally steady, calm under pressure, resilient to setbacks.',
  },
}

export const BIG_FIVE_ITEMS: BigFiveItem[] = [
  // ── Openness (O) ───────────────────────────────────────────
  { id: 'o01', trait: 'O', direction: 1, prompt: 'I have a vivid imagination.' },
  { id: 'o02', trait: 'O', direction: 1, prompt: 'I enjoy thinking about abstract ideas.' },
  { id: 'o03', trait: 'O', direction: 1, prompt: 'I am drawn to art, music, or poetry that moves me.' },
  { id: 'o04', trait: 'O', direction: 1, prompt: 'I like exploring unfamiliar places, foods, or cultures.' },
  { id: 'o05', trait: 'O', direction: 1, prompt: 'I often see connections between things others miss.' },
  { id: 'o06', trait: 'O', direction: -1, prompt: 'I prefer routines over surprises.' },
  { id: 'o07', trait: 'O', direction: -1, prompt: 'I have little interest in abstract or theoretical discussions.' },
  { id: 'o08', trait: 'O', direction: -1, prompt: 'I find experimental art or music more pretentious than interesting.' },
  { id: 'o09', trait: 'O', direction: 1, prompt: 'I enjoy questioning assumptions that most people take for granted.' },
  { id: 'o10', trait: 'O', direction: -1, prompt: 'I rarely think about why things are the way they are.' },

  // ── Conscientiousness (C) ──────────────────────────────────
  { id: 'c01', trait: 'C', direction: 1, prompt: 'I make plans and follow through on them.' },
  { id: 'c02', trait: 'C', direction: 1, prompt: 'I keep my belongings and workspace tidy.' },
  { id: 'c03', trait: 'C', direction: 1, prompt: 'I pay attention to details others overlook.' },
  { id: 'c04', trait: 'C', direction: 1, prompt: 'I finish what I start, even when it stops being fun.' },
  { id: 'c05', trait: 'C', direction: 1, prompt: 'I prepare in advance rather than improvising at the last minute.' },
  { id: 'c06', trait: 'C', direction: -1, prompt: 'I often leave things half-finished.' },
  { id: 'c07', trait: 'C', direction: -1, prompt: 'I procrastinate on tasks I know are important.' },
  { id: 'c08', trait: 'C', direction: -1, prompt: 'I lose track of small details when I get bored.' },
  { id: 'c09', trait: 'C', direction: -1, prompt: 'My space tends to get messy without me noticing.' },
  { id: 'c10', trait: 'C', direction: 1, prompt: 'I set goals and work towards them steadily.' },

  // ── Extraversion (E) ───────────────────────────────────────
  { id: 'e01', trait: 'E', direction: 1, prompt: 'I feel energised after spending time with people.' },
  { id: 'e02', trait: 'E', direction: 1, prompt: 'I find it easy to start conversations with strangers.' },
  { id: 'e03', trait: 'E', direction: 1, prompt: 'I am comfortable being the centre of attention.' },
  { id: 'e04', trait: 'E', direction: 1, prompt: 'I tend to take charge in group situations.' },
  { id: 'e05', trait: 'E', direction: 1, prompt: 'I like having a busy social schedule.' },
  { id: 'e06', trait: 'E', direction: -1, prompt: 'I need quiet time alone to recharge.' },
  { id: 'e07', trait: 'E', direction: -1, prompt: 'I prefer one-on-one conversations over big groups.' },
  { id: 'e08', trait: 'E', direction: -1, prompt: 'I keep my thoughts to myself in group settings.' },
  { id: 'e09', trait: 'E', direction: -1, prompt: 'Large social events leave me drained.' },
  { id: 'e10', trait: 'E', direction: 1, prompt: 'I make new friends easily.' },

  // ── Agreeableness (A) ──────────────────────────────────────
  { id: 'a01', trait: 'A', direction: 1, prompt: 'I trust that most people mean well.' },
  { id: 'a02', trait: 'A', direction: 1, prompt: 'I feel other people’s emotions strongly.' },
  { id: 'a03', trait: 'A', direction: 1, prompt: 'I try to make sure everyone in a group feels included.' },
  { id: 'a04', trait: 'A', direction: 1, prompt: 'I would rather compromise than win an argument.' },
  { id: 'a05', trait: 'A', direction: 1, prompt: 'I go out of my way to help people, even when it costs me.' },
  { id: 'a06', trait: 'A', direction: -1, prompt: 'I have little patience for people who are inefficient.' },
  { id: 'a07', trait: 'A', direction: -1, prompt: 'I am suspicious of strangers’ motives until they earn my trust.' },
  { id: 'a08', trait: 'A', direction: -1, prompt: 'I enjoy a sharp debate, even if it ruffles feathers.' },
  { id: 'a09', trait: 'A', direction: -1, prompt: 'I would rather be right than be liked.' },
  { id: 'a10', trait: 'A', direction: 1, prompt: 'I try to see disagreements from the other person’s perspective.' },

  // ── Neuroticism (N) ────────────────────────────────────────
  { id: 'n01', trait: 'N', direction: 1, prompt: 'I worry about things even when I know I shouldn’t.' },
  { id: 'n02', trait: 'N', direction: 1, prompt: 'My mood can change quickly for no clear reason.' },
  { id: 'n03', trait: 'N', direction: 1, prompt: 'I get stressed more easily than most people.' },
  { id: 'n04', trait: 'N', direction: 1, prompt: 'Small setbacks bother me for longer than they probably should.' },
  { id: 'n05', trait: 'N', direction: 1, prompt: 'I often replay things I said and wish I’d said differently.' },
  { id: 'n06', trait: 'N', direction: -1, prompt: 'I stay calm in tense situations.' },
  { id: 'n07', trait: 'N', direction: -1, prompt: 'I bounce back quickly from disappointments.' },
  { id: 'n08', trait: 'N', direction: -1, prompt: 'I rarely feel anxious about the future.' },
  { id: 'n09', trait: 'N', direction: -1, prompt: 'My emotional state is pretty stable day to day.' },
  { id: 'n10', trait: 'N', direction: 1, prompt: 'I feel overwhelmed when several things go wrong at once.' },

  // ── Openness · expansion (20) ─────────────────────────────
  { id: 'o11', trait: 'O', direction: 1, prompt: 'I notice patterns and connections in everyday life.' },
  { id: 'o12', trait: 'O', direction: 1, prompt: 'I enjoy debating ideas just to see where they lead.' },
  { id: 'o13', trait: 'O', direction: 1, prompt: 'I can lose myself in a beautiful piece of art or music.' },
  { id: 'o14', trait: 'O', direction: 1, prompt: 'I am curious about how my own mind works.' },
  { id: 'o15', trait: 'O', direction: 1, prompt: 'I am drawn to ideas that don’t have an obvious application.' },
  { id: 'o16', trait: 'O', direction: 1, prompt: 'I enjoy challenging my own beliefs.' },
  { id: 'o17', trait: 'O', direction: 1, prompt: 'I think about big philosophical questions more than most people.' },
  { id: 'o18', trait: 'O', direction: 1, prompt: 'I am drawn to experimental approaches in any field.' },
  { id: 'o19', trait: 'O', direction: 1, prompt: 'A walk through an unfamiliar neighbourhood excites me.' },
  { id: 'o20', trait: 'O', direction: 1, prompt: 'I enjoy puzzles, riddles, and brain teasers.' },
  { id: 'o21', trait: 'O', direction: -1, prompt: 'I trust common sense over clever theories.' },
  { id: 'o22', trait: 'O', direction: -1, prompt: 'I prefer practical knowledge to abstract speculation.' },
  { id: 'o23', trait: 'O', direction: -1, prompt: 'I find most modern art baffling rather than interesting.' },
  { id: 'o24', trait: 'O', direction: -1, prompt: 'I would rather follow a proven recipe than experiment.' },
  { id: 'o25', trait: 'O', direction: -1, prompt: 'Poetry and symbolism mostly leave me cold.' },
  { id: 'o26', trait: 'O', direction: -1, prompt: 'I avoid trying unfamiliar foods most of the time.' },
  { id: 'o27', trait: 'O', direction: -1, prompt: 'I rarely daydream.' },
  { id: 'o28', trait: 'O', direction: -1, prompt: 'I’d rather use a tool than understand how it works.' },
  { id: 'o29', trait: 'O', direction: 1, prompt: 'I am moved by unfamiliar perspectives on familiar topics.' },
  { id: 'o30', trait: 'O', direction: 1, prompt: 'I find myself wondering “what if it were the other way around?”' },

  // ── Conscientiousness · expansion (20) ────────────────────
  { id: 'c11', trait: 'C', direction: 1, prompt: 'I show up on time for things that matter to others.' },
  { id: 'c12', trait: 'C', direction: 1, prompt: 'I double-check my work before calling it done.' },
  { id: 'c13', trait: 'C', direction: 1, prompt: 'I keep promises, even small ones.' },
  { id: 'c14', trait: 'C', direction: 1, prompt: 'I think carefully before committing to a plan.' },
  { id: 'c15', trait: 'C', direction: 1, prompt: 'I track my expenses, deadlines, or commitments somehow.' },
  { id: 'c16', trait: 'C', direction: 1, prompt: 'I’d rather under-promise and over-deliver.' },
  { id: 'c17', trait: 'C', direction: 1, prompt: 'When I commit to a habit I usually stick with it.' },
  { id: 'c18', trait: 'C', direction: 1, prompt: 'I prefer to know what I’m doing tomorrow.' },
  { id: 'c19', trait: 'C', direction: 1, prompt: 'I do the boring prep before the fun part.' },
  { id: 'c20', trait: 'C', direction: 1, prompt: 'I keep my files, contacts, or notes organised enough to find things.' },
  { id: 'c21', trait: 'C', direction: -1, prompt: 'I tend to wing it more than I prepare.' },
  { id: 'c22', trait: 'C', direction: -1, prompt: 'I find rigid planning a bit suffocating.' },
  { id: 'c23', trait: 'C', direction: -1, prompt: 'I forget appointments unless something nudges me.' },
  { id: 'c24', trait: 'C', direction: -1, prompt: 'Deadlines often catch me by surprise.' },
  { id: 'c25', trait: 'C', direction: -1, prompt: 'I leave clutter around without it bothering me.' },
  { id: 'c26', trait: 'C', direction: -1, prompt: 'I’d rather start fresh than finish what I began.' },
  { id: 'c27', trait: 'C', direction: -1, prompt: 'I’m easily distracted from what I meant to do.' },
  { id: 'c28', trait: 'C', direction: -1, prompt: 'I usually rely on a last-minute burst of effort.' },
  { id: 'c29', trait: 'C', direction: 1, prompt: 'I review what I’ve done at the end of a project, not just at the start.' },
  { id: 'c30', trait: 'C', direction: 1, prompt: 'I’d rather get something 90% right and shipped than 100% right and late.' },

  // ── Extraversion · expansion (20) ─────────────────────────
  { id: 'e11', trait: 'E', direction: 1, prompt: 'I light up when I’m around energetic people.' },
  { id: 'e12', trait: 'E', direction: 1, prompt: 'I’m happy to speak up in front of a group.' },
  { id: 'e13', trait: 'E', direction: 1, prompt: 'I look forward to social plans more than time alone.' },
  { id: 'e14', trait: 'E', direction: 1, prompt: 'I’d rather work in a team than solo.' },
  { id: 'e15', trait: 'E', direction: 1, prompt: 'I get a kick out of meeting strangers.' },
  { id: 'e16', trait: 'E', direction: 1, prompt: 'I enjoy being the one who tells the story at dinner.' },
  { id: 'e17', trait: 'E', direction: 1, prompt: 'I find silence in a room awkward and want to fill it.' },
  { id: 'e18', trait: 'E', direction: 1, prompt: 'I am usually the one suggesting we go out.' },
  { id: 'e19', trait: 'E', direction: 1, prompt: 'My voice carries even when I don’t mean it to.' },
  { id: 'e20', trait: 'E', direction: 1, prompt: 'I find energy from being seen and heard.' },
  { id: 'e21', trait: 'E', direction: -1, prompt: 'I take a while to warm up to new people.' },
  { id: 'e22', trait: 'E', direction: -1, prompt: 'I prefer texting to phone calls.' },
  { id: 'e23', trait: 'E', direction: -1, prompt: 'I’d rather skip a party than show up tired.' },
  { id: 'e24', trait: 'E', direction: -1, prompt: 'I think more clearly when I’m alone.' },
  { id: 'e25', trait: 'E', direction: -1, prompt: 'Small talk drains me.' },
  { id: 'e26', trait: 'E', direction: -1, prompt: 'I find it easier to listen than to lead a conversation.' },
  { id: 'e27', trait: 'E', direction: -1, prompt: 'My ideal night is at home with one or two people.' },
  { id: 'e28', trait: 'E', direction: -1, prompt: 'I avoid being singled out in a group.' },
  { id: 'e29', trait: 'E', direction: 1, prompt: 'I find solo travel a bit lonely.' },
  { id: 'e30', trait: 'E', direction: -1, prompt: 'I need recovery time after intense social events.' },

  // ── Agreeableness · expansion (20) ────────────────────────
  { id: 'a11', trait: 'A', direction: 1, prompt: 'I try to assume the most generous interpretation of others.' },
  { id: 'a12', trait: 'A', direction: 1, prompt: 'I notice when someone is quietly upset and check in on them.' },
  { id: 'a13', trait: 'A', direction: 1, prompt: 'I would lend money to a friend without making a big deal of it.' },
  { id: 'a14', trait: 'A', direction: 1, prompt: 'I avoid hurting people’s feelings whenever I can.' },
  { id: 'a15', trait: 'A', direction: 1, prompt: 'I’d rather find common ground than score a point.' },
  { id: 'a16', trait: 'A', direction: 1, prompt: 'I forgive more easily than most people.' },
  { id: 'a17', trait: 'A', direction: 1, prompt: 'I find it hard to say no when someone really needs help.' },
  { id: 'a18', trait: 'A', direction: 1, prompt: 'I’m happiest when the people around me are happy.' },
  { id: 'a19', trait: 'A', direction: 1, prompt: 'I assume the best of strangers until I have a reason not to.' },
  { id: 'a20', trait: 'A', direction: 1, prompt: 'I’d rather be generous and occasionally wrong than guarded.' },
  { id: 'a21', trait: 'A', direction: -1, prompt: 'I think a lot of people are out for themselves.' },
  { id: 'a22', trait: 'A', direction: -1, prompt: 'I don’t mind making people uncomfortable if it’s true.' },
  { id: 'a23', trait: 'A', direction: -1, prompt: 'I have a low tolerance for sentimentality.' },
  { id: 'a24', trait: 'A', direction: -1, prompt: 'I find a lot of niceness performative.' },
  { id: 'a25', trait: 'A', direction: -1, prompt: 'I don’t feel obliged to soften criticism.' },
  { id: 'a26', trait: 'A', direction: -1, prompt: 'I prefer transactions to favours.' },
  { id: 'a27', trait: 'A', direction: -1, prompt: 'I find “let’s see both sides” discussions exhausting.' },
  { id: 'a28', trait: 'A', direction: -1, prompt: 'I trust evidence more than I trust people.' },
  { id: 'a29', trait: 'A', direction: 1, prompt: 'I notice when someone is left out and try to include them.' },
  { id: 'a30', trait: 'A', direction: 1, prompt: 'I find genuine cruelty hard to even imagine in myself.' },

  // ── Neuroticism · expansion (20) ──────────────────────────
  { id: 'n11', trait: 'N', direction: 1, prompt: 'I lie awake replaying conversations.' },
  { id: 'n12', trait: 'N', direction: 1, prompt: 'Minor criticism stings me more than it probably should.' },
  { id: 'n13', trait: 'N', direction: 1, prompt: 'I feel a knot in my stomach before things that don’t really warrant it.' },
  { id: 'n14', trait: 'N', direction: 1, prompt: 'My mood often depends on small things going right.' },
  { id: 'n15', trait: 'N', direction: 1, prompt: 'I get irritable when I’m tired.' },
  { id: 'n16', trait: 'N', direction: 1, prompt: 'I imagine worst-case scenarios more vividly than best-case ones.' },
  { id: 'n17', trait: 'N', direction: 1, prompt: 'I take constructive feedback personally even when I try not to.' },
  { id: 'n18', trait: 'N', direction: 1, prompt: 'I notice my heartbeat in stressful moments.' },
  { id: 'n19', trait: 'N', direction: 1, prompt: 'I get jealous more easily than I’d like to admit.' },
  { id: 'n20', trait: 'N', direction: 1, prompt: 'I find it hard to relax once I’m worked up.' },
  { id: 'n21', trait: 'N', direction: -1, prompt: 'I can usually shake off a bad mood within an hour.' },
  { id: 'n22', trait: 'N', direction: -1, prompt: 'I’m steady under pressure.' },
  { id: 'n23', trait: 'N', direction: -1, prompt: 'I rarely feel insecure about my place with people.' },
  { id: 'n24', trait: 'N', direction: -1, prompt: 'Setbacks energise me more than they discourage me.' },
  { id: 'n25', trait: 'N', direction: -1, prompt: 'I sleep well even when there’s a lot going on.' },
  { id: 'n26', trait: 'N', direction: -1, prompt: 'I don’t take things personally that aren’t about me.' },
  { id: 'n27', trait: 'N', direction: -1, prompt: 'I trust I’ll figure things out, even when I can’t see how yet.' },
  { id: 'n28', trait: 'N', direction: -1, prompt: 'I rarely catastrophise.' },
  { id: 'n29', trait: 'N', direction: 1, prompt: 'I get hung up on mistakes I made a long time ago.' },
  { id: 'n30', trait: 'N', direction: 1, prompt: 'I worry about things I have no control over.' },
]

// ────────────────────────────────────────────────────────────────
// MBTI
// ────────────────────────────────────────────────────────────────

export type MbtiDichotomy = 'EI' | 'SN' | 'TF' | 'JP'
export type MbtiPole = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'

export type MbtiItem = {
  id: string
  dichotomy: MbtiDichotomy
  prompt: string
  options: Array<{
    label: string
    pole: MbtiPole
  }>
}

export const MBTI_DICHOTOMY_INFO: Record<MbtiDichotomy, { poles: [MbtiPole, MbtiPole]; question: string }> = {
  EI: { poles: ['E', 'I'], question: 'Where you get your energy from' },
  SN: { poles: ['S', 'N'], question: 'How you take in information' },
  TF: { poles: ['T', 'F'], question: 'How you make decisions' },
  JP: { poles: ['J', 'P'], question: 'How you organise your outer world' },
}

export const MBTI_POLE_INFO: Record<MbtiPole, { name: string; blurb: string }> = {
  E: { name: 'Extraversion', blurb: 'Energised by interacting with the outer world of people and activity.' },
  I: { name: 'Introversion', blurb: 'Energised by the inner world of thoughts, reflection, and depth.' },
  S: { name: 'Sensing', blurb: 'Trusts concrete, observable facts and present-moment detail.' },
  N: { name: 'Intuition', blurb: 'Trusts patterns, possibilities, and what things could mean.' },
  T: { name: 'Thinking', blurb: 'Decides through logic, consistency, and impartial analysis.' },
  F: { name: 'Feeling', blurb: 'Decides through values, empathy, and impact on people.' },
  J: { name: 'Judging', blurb: 'Prefers structure, closure, and decisions made in advance.' },
  P: { name: 'Perceiving', blurb: 'Prefers flexibility, options open, and adapting as you go.' },
}

export const MBTI_TYPE_DESCRIPTIONS: Record<string, { nickname: string; summary: string }> = {
  ISTJ: { nickname: 'The Inspector', summary: 'Practical, dependable, and steady. You honour commitments, respect tradition, and notice the details others miss.' },
  ISFJ: { nickname: 'The Protector', summary: 'Warm, loyal, and quietly observant. You remember what matters to the people around you and show up consistently.' },
  INFJ: { nickname: 'The Counsellor', summary: 'Insightful and idealistic. You read people deeply and are drawn to meaningful, long-arc work.' },
  INTJ: { nickname: 'The Strategist', summary: 'Independent and systems-minded. You build long-range plans and trust your own analysis over consensus.' },
  ISTP: { nickname: 'The Craftsperson', summary: 'Calm, hands-on problem solver. You learn by taking things apart and prefer competence to ceremony.' },
  ISFP: { nickname: 'The Composer', summary: 'Gentle, aesthetic, and present. You express yourself through what you make and the way you treat people.' },
  INFP: { nickname: 'The Healer', summary: 'Idealistic and values-driven. You guard a rich inner world and want your outer life to match it.' },
  INTP: { nickname: 'The Architect', summary: 'Curious and analytical. You chase ideas down to their foundations and resist accepting anything on authority.' },
  ESTP: { nickname: 'The Dynamo', summary: 'Energetic, observant, and action-oriented. You read a room fast and prefer doing to planning.' },
  ESFP: { nickname: 'The Performer', summary: 'Spontaneous, warm, and engaging. You bring life to the room and treat the present moment as the point.' },
  ENFP: { nickname: 'The Champion', summary: 'Enthusiastic and possibility-driven. You connect people and ideas and turn sparks into momentum.' },
  ENTP: { nickname: 'The Visionary', summary: 'Quick, inventive, and provocative. You enjoy stress-testing ideas and finding angles no one else has tried.' },
  ESTJ: { nickname: 'The Supervisor', summary: 'Decisive and organised. You set direction, hold people to standards, and get things shipped on time.' },
  ESFJ: { nickname: 'The Provider', summary: 'Warm, sociable, and conscientious. You take responsibility for the well-being of the group and notice who needs support.' },
  ENFJ: { nickname: 'The Teacher', summary: 'Charismatic and people-developing. You see potential in others and help them grow into it.' },
  ENTJ: { nickname: 'The Commander', summary: 'Strategic and driven. You set ambitious goals, mobilise people, and turn plans into outcomes.' },
}

export const MBTI_ITEMS: MbtiItem[] = [
  // ── E / I (13) ────────────────────────────────────────────
  { id: 'ei01', dichotomy: 'EI', prompt: 'At a party where you only know one or two people, you usually…', options: [
    { label: 'Mingle and meet new people', pole: 'E' },
    { label: 'Stick close to the people you came with', pole: 'I' },
  ]},
  { id: 'ei02', dichotomy: 'EI', prompt: 'After a long, social day you feel…', options: [
    { label: 'Wound up and still wanting more', pole: 'E' },
    { label: 'Drained and craving quiet', pole: 'I' },
  ]},
  { id: 'ei03', dichotomy: 'EI', prompt: 'You’d rather spend a free Saturday…', options: [
    { label: 'Out with a group doing something', pole: 'E' },
    { label: 'Home with a book, a project, or a few close people', pole: 'I' },
  ]},
  { id: 'ei04', dichotomy: 'EI', prompt: 'In meetings you tend to…', options: [
    { label: 'Think out loud as you talk', pole: 'E' },
    { label: 'Work things out in your head before speaking', pole: 'I' },
  ]},
  { id: 'ei05', dichotomy: 'EI', prompt: 'When you meet someone new, you typically…', options: [
    { label: 'Open up quickly and share freely', pole: 'E' },
    { label: 'Stay reserved until you know them better', pole: 'I' },
  ]},
  { id: 'ei06', dichotomy: 'EI', prompt: 'You describe yourself as more…', options: [
    { label: 'Expressive and outwardly engaged', pole: 'E' },
    { label: 'Reflective and inwardly focused', pole: 'I' },
  ]},
  { id: 'ei07', dichotomy: 'EI', prompt: 'In a new city, your default move is to…', options: [
    { label: 'Find people, events, and conversation', pole: 'E' },
    { label: 'Wander and explore on your own', pole: 'I' },
  ]},
  { id: 'ei08', dichotomy: 'EI', prompt: 'You’re more comfortable…', options: [
    { label: 'Working in a buzzy, open environment', pole: 'E' },
    { label: 'Working somewhere quiet and uninterrupted', pole: 'I' },
  ]},
  { id: 'ei09', dichotomy: 'EI', prompt: 'When you have something on your mind you tend to…', options: [
    { label: 'Talk it through with someone', pole: 'E' },
    { label: 'Sit with it and process internally', pole: 'I' },
  ]},
  { id: 'ei10', dichotomy: 'EI', prompt: 'You’d rather have…', options: [
    { label: 'Many friendly acquaintances', pole: 'E' },
    { label: 'A few deep friendships', pole: 'I' },
  ]},
  { id: 'ei11', dichotomy: 'EI', prompt: 'At a workshop you usually…', options: [
    { label: 'Jump in, ask questions, contribute', pole: 'E' },
    { label: 'Listen carefully and contribute when it matters', pole: 'I' },
  ]},
  { id: 'ei12', dichotomy: 'EI', prompt: 'Phone calls feel…', options: [
    { label: 'Energising — a quick way to connect', pole: 'E' },
    { label: 'Mildly draining — you’d prefer to text', pole: 'I' },
  ]},
  { id: 'ei13', dichotomy: 'EI', prompt: 'You’d describe your social battery as…', options: [
    { label: 'Charged by people, drained by solitude', pole: 'E' },
    { label: 'Charged by solitude, drained by people', pole: 'I' },
  ]},

  // ── S / N (12) ────────────────────────────────────────────
  { id: 'sn01', dichotomy: 'SN', prompt: 'You trust more…', options: [
    { label: 'What you can see, touch, and verify', pole: 'S' },
    { label: 'Hunches, patterns, and what something could become', pole: 'N' },
  ]},
  { id: 'sn02', dichotomy: 'SN', prompt: 'You’d rather a teacher…', options: [
    { label: 'Walk through concrete, worked examples', pole: 'S' },
    { label: 'Sketch the big idea and let you connect the dots', pole: 'N' },
  ]},
  { id: 'sn03', dichotomy: 'SN', prompt: 'When you describe a memory, you tend to focus on…', options: [
    { label: 'What actually happened, step by step', pole: 'S' },
    { label: 'What it meant, or what it reminded you of', pole: 'N' },
  ]},
  { id: 'sn04', dichotomy: 'SN', prompt: 'You’re more interested in…', options: [
    { label: 'How things work right now', pole: 'S' },
    { label: 'How things might work in the future', pole: 'N' },
  ]},
  { id: 'sn05', dichotomy: 'SN', prompt: 'In a new project you start by…', options: [
    { label: 'Listing concrete steps and resources', pole: 'S' },
    { label: 'Sketching the vision and possibilities', pole: 'N' },
  ]},
  { id: 'sn06', dichotomy: 'SN', prompt: 'You’d rather read…', options: [
    { label: 'A how-to with clear instructions', pole: 'S' },
    { label: 'A speculative essay that opens up new ideas', pole: 'N' },
  ]},
  { id: 'sn07', dichotomy: 'SN', prompt: 'A friend says something cryptic. You…', options: [
    { label: 'Ask them to be more specific', pole: 'S' },
    { label: 'Read between the lines and guess what they mean', pole: 'N' },
  ]},
  { id: 'sn08', dichotomy: 'SN', prompt: 'You’re more drawn to…', options: [
    { label: 'Realistic stories rooted in everyday life', pole: 'S' },
    { label: 'Imaginative stories with strange premises', pole: 'N' },
  ]},
  { id: 'sn09', dichotomy: 'SN', prompt: 'When solving a problem you’d rather…', options: [
    { label: 'Use a method you know works', pole: 'S' },
    { label: 'Invent a new angle nobody’s tried', pole: 'N' },
  ]},
  { id: 'sn10', dichotomy: 'SN', prompt: 'You notice first…', options: [
    { label: 'The concrete details of a place', pole: 'S' },
    { label: 'The atmosphere or feeling of a place', pole: 'N' },
  ]},
  { id: 'sn11', dichotomy: 'SN', prompt: 'You’d describe yourself as more…', options: [
    { label: 'Grounded and practical', pole: 'S' },
    { label: 'Imaginative and theoretical', pole: 'N' },
  ]},
  { id: 'sn12', dichotomy: 'SN', prompt: 'When someone explains an idea, you want to know…', options: [
    { label: 'How it applies in real situations', pole: 'S' },
    { label: 'Where it leads if you push it further', pole: 'N' },
  ]},

  // ── T / F (12) ────────────────────────────────────────────
  { id: 'tf01', dichotomy: 'TF', prompt: 'When deciding something tough, you lean on…', options: [
    { label: 'Logic and consistency', pole: 'T' },
    { label: 'Values and how it affects people', pole: 'F' },
  ]},
  { id: 'tf02', dichotomy: 'TF', prompt: 'A friend’s plan has a flaw. You…', options: [
    { label: 'Point out the flaw directly', pole: 'T' },
    { label: 'Find a way to raise it gently', pole: 'F' },
  ]},
  { id: 'tf03', dichotomy: 'TF', prompt: 'You’d rather be seen as…', options: [
    { label: 'Fair and rigorous', pole: 'T' },
    { label: 'Warm and considerate', pole: 'F' },
  ]},
  { id: 'tf04', dichotomy: 'TF', prompt: 'In an argument, you mostly want to…', options: [
    { label: 'Figure out what’s actually true', pole: 'T' },
    { label: 'Make sure everyone feels heard', pole: 'F' },
  ]},
  { id: 'tf05', dichotomy: 'TF', prompt: 'You’re more bothered by…', options: [
    { label: 'Sloppy reasoning', pole: 'T' },
    { label: 'Hurtful behaviour', pole: 'F' },
  ]},
  { id: 'tf06', dichotomy: 'TF', prompt: 'When someone’s upset you tend to…', options: [
    { label: 'Try to help them solve the underlying problem', pole: 'T' },
    { label: 'Sit with them and let them feel it', pole: 'F' },
  ]},
  { id: 'tf07', dichotomy: 'TF', prompt: 'Good feedback is…', options: [
    { label: 'Honest, even if it stings', pole: 'T' },
    { label: 'Honest, but delivered with care', pole: 'F' },
  ]},
  { id: 'tf08', dichotomy: 'TF', prompt: 'You’d rather a leader who is…', options: [
    { label: 'Fair and analytical', pole: 'T' },
    { label: 'Compassionate and people-focused', pole: 'F' },
  ]},
  { id: 'tf09', dichotomy: 'TF', prompt: 'Hard decisions should be made…', options: [
    { label: 'Based on the principles, not the personalities', pole: 'T' },
    { label: 'With real care for the people affected', pole: 'F' },
  ]},
  { id: 'tf10', dichotomy: 'TF', prompt: 'You’d describe yourself as more…', options: [
    { label: 'Tough-minded', pole: 'T' },
    { label: 'Tender-hearted', pole: 'F' },
  ]},
  { id: 'tf11', dichotomy: 'TF', prompt: 'A coworker’s work is below standard. You…', options: [
    { label: 'Tell them clearly so they can fix it', pole: 'T' },
    { label: 'Check if something’s going on for them first', pole: 'F' },
  ]},
  { id: 'tf12', dichotomy: 'TF', prompt: 'It bothers you more when…', options: [
    { label: 'A decision is illogical', pole: 'T' },
    { label: 'A decision is unkind', pole: 'F' },
  ]},

  // ── J / P (13) ────────────────────────────────────────────
  { id: 'jp01', dichotomy: 'JP', prompt: 'You’d rather…', options: [
    { label: 'Make a plan and stick to it', pole: 'J' },
    { label: 'Keep your options open', pole: 'P' },
  ]},
  { id: 'jp02', dichotomy: 'JP', prompt: 'On a trip, you prefer to…', options: [
    { label: 'Have the days roughly mapped out', pole: 'J' },
    { label: 'See what feels right when you get there', pole: 'P' },
  ]},
  { id: 'jp03', dichotomy: 'JP', prompt: 'Deadlines feel…', options: [
    { label: 'Useful — they help you finish', pole: 'J' },
    { label: 'Restrictive — they squeeze the work', pole: 'P' },
  ]},
  { id: 'jp04', dichotomy: 'JP', prompt: 'Your workspace tends to be…', options: [
    { label: 'Tidy and organised', pole: 'J' },
    { label: 'Lived-in and flexible', pole: 'P' },
  ]},
  { id: 'jp05', dichotomy: 'JP', prompt: 'You’d rather decide…', options: [
    { label: 'As early as possible and move on', pole: 'J' },
    { label: 'As late as possible, when you have more information', pole: 'P' },
  ]},
  { id: 'jp06', dichotomy: 'JP', prompt: 'When something unplanned comes up, you…', options: [
    { label: 'Feel a bit thrown and want to reset the plan', pole: 'J' },
    { label: 'Roll with it — that’s half the fun', pole: 'P' },
  ]},
  { id: 'jp07', dichotomy: 'JP', prompt: 'A to-do list is…', options: [
    { label: 'A satisfying way to run the day', pole: 'J' },
    { label: 'A loose suggestion you mostly ignore', pole: 'P' },
  ]},
  { id: 'jp08', dichotomy: 'JP', prompt: 'You prefer projects that are…', options: [
    { label: 'Scoped, scheduled, and finishable', pole: 'J' },
    { label: 'Open-ended and free to evolve', pole: 'P' },
  ]},
  { id: 'jp09', dichotomy: 'JP', prompt: 'You feel best when…', options: [
    { label: 'Things are settled and decided', pole: 'J' },
    { label: 'Possibilities are still on the table', pole: 'P' },
  ]},
  { id: 'jp10', dichotomy: 'JP', prompt: 'Rules and procedures are…', options: [
    { label: 'A helpful structure you usually follow', pole: 'J' },
    { label: 'A starting point you bend when it makes sense', pole: 'P' },
  ]},
  { id: 'jp11', dichotomy: 'JP', prompt: 'Big tasks get done because you…', options: [
    { label: 'Schedule them and stick to the schedule', pole: 'J' },
    { label: 'Hit a burst of focus when something clicks', pole: 'P' },
  ]},
  { id: 'jp12', dichotomy: 'JP', prompt: 'You feel uneasy when…', options: [
    { label: 'Something is unresolved or undecided', pole: 'J' },
    { label: 'You’re locked in with no room to move', pole: 'P' },
  ]},
  { id: 'jp13', dichotomy: 'JP', prompt: 'A good weekend is…', options: [
    { label: 'Planned out a few days ahead', pole: 'J' },
    { label: 'Decided when you wake up Saturday', pole: 'P' },
  ]},

  // ── E / I · expansion (25) ────────────────────────────────
  { id: 'ei14', dichotomy: 'EI', prompt: 'You’d describe your default volume as…', options: [
    { label: 'On the louder side', pole: 'E' },
    { label: 'On the quieter side', pole: 'I' },
  ]},
  { id: 'ei15', dichotomy: 'EI', prompt: 'Group brainstorms feel…', options: [
    { label: 'Productive — ideas spark off each other', pole: 'E' },
    { label: 'Distracting — you think better on your own', pole: 'I' },
  ]},
  { id: 'ei16', dichotomy: 'EI', prompt: 'You’d rather…', options: [
    { label: 'Host a dinner for ten people', pole: 'E' },
    { label: 'Have dinner with one person', pole: 'I' },
  ]},
  { id: 'ei17', dichotomy: 'EI', prompt: 'Your phone screen-time is mostly…', options: [
    { label: 'Messaging and calls with people', pole: 'E' },
    { label: 'Reading, watching, or browsing alone', pole: 'I' },
  ]},
  { id: 'ei18', dichotomy: 'EI', prompt: 'When you’re excited, you tend to…', options: [
    { label: 'Tell someone immediately', pole: 'E' },
    { label: 'Sit with it and savour it first', pole: 'I' },
  ]},
  { id: 'ei19', dichotomy: 'EI', prompt: 'You enter a room of strangers and you…', options: [
    { label: 'Look for someone to talk to', pole: 'E' },
    { label: 'Look for somewhere to settle quietly', pole: 'I' },
  ]},
  { id: 'ei20', dichotomy: 'EI', prompt: 'When making decisions you tend to…', options: [
    { label: 'Talk through options aloud', pole: 'E' },
    { label: 'Mull things over privately', pole: 'I' },
  ]},
  { id: 'ei21', dichotomy: 'EI', prompt: 'Holidays are best when they involve…', options: [
    { label: 'Other people and shared experiences', pole: 'E' },
    { label: 'Space to think, read, or walk alone', pole: 'I' },
  ]},
  { id: 'ei22', dichotomy: 'EI', prompt: 'You feel most “yourself”…', options: [
    { label: 'In motion among people', pole: 'E' },
    { label: 'Somewhere quiet and unobserved', pole: 'I' },
  ]},
  { id: 'ei23', dichotomy: 'EI', prompt: 'You’d rather have a job that…', options: [
    { label: 'Involves talking with lots of different people', pole: 'E' },
    { label: 'Lets you focus deeply with few interruptions', pole: 'I' },
  ]},
  { id: 'ei24', dichotomy: 'EI', prompt: 'A new acquaintance probably finds you…', options: [
    { label: 'Easy to read', pole: 'E' },
    { label: 'A bit hard to read at first', pole: 'I' },
  ]},
  { id: 'ei25', dichotomy: 'EI', prompt: 'You speak…', options: [
    { label: 'More than you listen, in most groups', pole: 'E' },
    { label: 'Less than you listen, in most groups', pole: 'I' },
  ]},
  { id: 'ei26', dichotomy: 'EI', prompt: 'You prefer to give a presentation…', options: [
    { label: 'Live — feeding off the audience’s energy', pole: 'E' },
    { label: 'Recorded — once, in private', pole: 'I' },
  ]},
  { id: 'ei27', dichotomy: 'EI', prompt: 'Group chats are…', options: [
    { label: 'Lively spaces you enjoy contributing to', pole: 'E' },
    { label: 'Mostly background noise you check rarely', pole: 'I' },
  ]},
  { id: 'ei28', dichotomy: 'EI', prompt: 'You usually meet new friends through…', options: [
    { label: 'Events, activities, and going places', pole: 'E' },
    { label: 'A few close people who introduce you', pole: 'I' },
  ]},
  { id: 'ei29', dichotomy: 'EI', prompt: 'When you’re stressed, you’d rather…', options: [
    { label: 'Be around someone you trust', pole: 'E' },
    { label: 'Have space and quiet to reset', pole: 'I' },
  ]},
  { id: 'ei30', dichotomy: 'EI', prompt: 'You’d rather work…', options: [
    { label: 'In an office with people around', pole: 'E' },
    { label: 'From home, mostly undisturbed', pole: 'I' },
  ]},
  { id: 'ei31', dichotomy: 'EI', prompt: 'You usually find networking…', options: [
    { label: 'A useful skill you can mostly enjoy', pole: 'E' },
    { label: 'A draining performance you’d rather skip', pole: 'I' },
  ]},
  { id: 'ei32', dichotomy: 'EI', prompt: 'Your best ideas often come…', options: [
    { label: 'Talking with someone you trust', pole: 'E' },
    { label: 'Walking, showering, or just sitting quietly', pole: 'I' },
  ]},
  { id: 'ei33', dichotomy: 'EI', prompt: 'You’d rather lead a team by…', options: [
    { label: 'Being visible and in the conversation', pole: 'E' },
    { label: 'Setting direction and trusting people to run', pole: 'I' },
  ]},
  { id: 'ei34', dichotomy: 'EI', prompt: 'You’d describe your inner life as…', options: [
    { label: 'About as busy as your outer life', pole: 'E' },
    { label: 'Much busier than your outer life', pole: 'I' },
  ]},
  { id: 'ei35', dichotomy: 'EI', prompt: 'You’d rather receive recognition…', options: [
    { label: 'Publicly, in front of the team', pole: 'E' },
    { label: 'Privately, in a one-on-one', pole: 'I' },
  ]},
  { id: 'ei36', dichotomy: 'EI', prompt: 'You learn best when you…', options: [
    { label: 'Discuss it with someone', pole: 'E' },
    { label: 'Read or work through it yourself', pole: 'I' },
  ]},
  { id: 'ei37', dichotomy: 'EI', prompt: 'Cancelled plans usually feel…', options: [
    { label: 'Disappointing — you were looking forward to it', pole: 'E' },
    { label: 'A small gift — you get the evening back', pole: 'I' },
  ]},
  { id: 'ei38', dichotomy: 'EI', prompt: 'Your friends would describe you as…', options: [
    { label: 'Outgoing and energetic', pole: 'E' },
    { label: 'Thoughtful and self-contained', pole: 'I' },
  ]},

  // ── S / N · expansion (25) ────────────────────────────────
  { id: 'sn13', dichotomy: 'SN', prompt: 'You’d describe yourself as more…', options: [
    { label: 'Detail-oriented', pole: 'S' },
    { label: 'Big-picture oriented', pole: 'N' },
  ]},
  { id: 'sn14', dichotomy: 'SN', prompt: 'You’re more drawn to…', options: [
    { label: 'Facts and case studies', pole: 'S' },
    { label: 'Theories and frameworks', pole: 'N' },
  ]},
  { id: 'sn15', dichotomy: 'SN', prompt: 'You’re reading a news article. You focus on…', options: [
    { label: 'What exactly happened', pole: 'S' },
    { label: 'What it might mean for the future', pole: 'N' },
  ]},
  { id: 'sn16', dichotomy: 'SN', prompt: 'You’re more comfortable…', options: [
    { label: 'When the instructions are precise', pole: 'S' },
    { label: 'When you have to figure it out as you go', pole: 'N' },
  ]},
  { id: 'sn17', dichotomy: 'SN', prompt: 'You’re more impressed by someone who is…', options: [
    { label: 'Reliable and meticulous', pole: 'S' },
    { label: 'Inventive and visionary', pole: 'N' },
  ]},
  { id: 'sn18', dichotomy: 'SN', prompt: 'When someone explains an idea you ask…', options: [
    { label: '“Can you give me an example?”', pole: 'S' },
    { label: '“What’s the underlying principle?”', pole: 'N' },
  ]},
  { id: 'sn19', dichotomy: 'SN', prompt: 'Daydreaming is…', options: [
    { label: 'A rare distraction for you', pole: 'S' },
    { label: 'A regular feature of your day', pole: 'N' },
  ]},
  { id: 'sn20', dichotomy: 'SN', prompt: 'In a museum you’re drawn to…', options: [
    { label: 'The history and the labels', pole: 'S' },
    { label: 'The atmosphere and the ideas behind the work', pole: 'N' },
  ]},
  { id: 'sn21', dichotomy: 'SN', prompt: 'When you buy something, you trust…', options: [
    { label: 'Specs and reviews', pole: 'S' },
    { label: 'How it feels and what it represents', pole: 'N' },
  ]},
  { id: 'sn22', dichotomy: 'SN', prompt: 'Routine work is…', options: [
    { label: 'Satisfying — it’s clear and finishable', pole: 'S' },
    { label: 'Suffocating — you crave novelty', pole: 'N' },
  ]},
  { id: 'sn23', dichotomy: 'SN', prompt: 'You’d rather hear…', options: [
    { label: '“Here’s exactly what happened.”', pole: 'S' },
    { label: '“Here’s what it tells us about people.”', pole: 'N' },
  ]},
  { id: 'sn24', dichotomy: 'SN', prompt: 'You find metaphors…', options: [
    { label: 'Sometimes helpful but often vague', pole: 'S' },
    { label: 'A great way to grasp something quickly', pole: 'N' },
  ]},
  { id: 'sn25', dichotomy: 'SN', prompt: 'You enjoy a story more when it…', options: [
    { label: 'Could really have happened', pole: 'S' },
    { label: 'Plays with the rules of reality', pole: 'N' },
  ]},
  { id: 'sn26', dichotomy: 'SN', prompt: 'You feel more alive when…', options: [
    { label: 'You’re doing something concrete', pole: 'S' },
    { label: 'You’re imagining something new', pole: 'N' },
  ]},
  { id: 'sn27', dichotomy: 'SN', prompt: 'You’d rather work on…', options: [
    { label: 'A defined problem with a measurable answer', pole: 'S' },
    { label: 'A fuzzy problem that might reshape the question', pole: 'N' },
  ]},
  { id: 'sn28', dichotomy: 'SN', prompt: 'A teacher you remember fondly was…', options: [
    { label: 'Clear, structured, and patient', pole: 'S' },
    { label: 'Inspiring, idea-rich, and a bit eccentric', pole: 'N' },
  ]},
  { id: 'sn29', dichotomy: 'SN', prompt: 'You’d rather be praised for being…', options: [
    { label: 'Practical and useful', pole: 'S' },
    { label: 'Insightful and original', pole: 'N' },
  ]},
  { id: 'sn30', dichotomy: 'SN', prompt: 'You feel more confident…', options: [
    { label: 'When you have the data in front of you', pole: 'S' },
    { label: 'When the idea clicks, data or not', pole: 'N' },
  ]},
  { id: 'sn31', dichotomy: 'SN', prompt: 'You’re more energised by…', options: [
    { label: 'Solving a problem you’ve seen before', pole: 'S' },
    { label: 'Solving a problem nobody has framed yet', pole: 'N' },
  ]},
  { id: 'sn32', dichotomy: 'SN', prompt: 'You think the future is best predicted by…', options: [
    { label: 'Looking carefully at the present', pole: 'S' },
    { label: 'Imagining how trends might compound', pole: 'N' },
  ]},
  { id: 'sn33', dichotomy: 'SN', prompt: 'You’d rather your home be…', options: [
    { label: 'Functional and well-organised', pole: 'S' },
    { label: 'Atmospheric and full of meaning', pole: 'N' },
  ]},
  { id: 'sn34', dichotomy: 'SN', prompt: 'You enjoy explaining something most when you can…', options: [
    { label: 'Walk through a worked example step by step', pole: 'S' },
    { label: 'Show how it connects to a bigger idea', pole: 'N' },
  ]},
  { id: 'sn35', dichotomy: 'SN', prompt: 'Plans without clear logistics make you…', options: [
    { label: 'Anxious — what are we actually doing?', pole: 'S' },
    { label: 'Excited — there’s room to invent', pole: 'N' },
  ]},
  { id: 'sn36', dichotomy: 'SN', prompt: 'You find symbolism in everyday life…', options: [
    { label: 'Mostly invented after the fact', pole: 'S' },
    { label: 'Almost everywhere if you look', pole: 'N' },
  ]},
  { id: 'sn37', dichotomy: 'SN', prompt: 'You’d rather be remembered for…', options: [
    { label: 'Quiet, lasting craftsmanship', pole: 'S' },
    { label: 'A bold new way of seeing something', pole: 'N' },
  ]},

  // ── T / F · expansion (25) ────────────────────────────────
  { id: 'tf13', dichotomy: 'TF', prompt: 'You’d rather a doctor be…', options: [
    { label: 'Precise and matter-of-fact', pole: 'T' },
    { label: 'Warm and reassuring', pole: 'F' },
  ]},
  { id: 'tf14', dichotomy: 'TF', prompt: 'You take pride in being…', options: [
    { label: 'Clear-headed', pole: 'T' },
    { label: 'Kind-hearted', pole: 'F' },
  ]},
  { id: 'tf15', dichotomy: 'TF', prompt: 'A team rule feels right when…', options: [
    { label: 'It applies the same way to everyone', pole: 'T' },
    { label: 'It takes individual circumstances into account', pole: 'F' },
  ]},
  { id: 'tf16', dichotomy: 'TF', prompt: 'You judge an argument mostly by…', options: [
    { label: 'Whether the reasoning holds up', pole: 'T' },
    { label: 'Whether the person engaging is being fair', pole: 'F' },
  ]},
  { id: 'tf17', dichotomy: 'TF', prompt: 'You’re more likely to ask…', options: [
    { label: '“Is this true?”', pole: 'T' },
    { label: '“How does this affect everyone?”', pole: 'F' },
  ]},
  { id: 'tf18', dichotomy: 'TF', prompt: 'You’re more comfortable being…', options: [
    { label: 'Right and disliked', pole: 'T' },
    { label: 'Liked and a little ambiguous', pole: 'F' },
  ]},
  { id: 'tf19', dichotomy: 'TF', prompt: 'When you assess a job candidate, you weight more heavily…', options: [
    { label: 'Their reasoning and competence', pole: 'T' },
    { label: 'Their character and team fit', pole: 'F' },
  ]},
  { id: 'tf20', dichotomy: 'TF', prompt: 'You’d rather an apology be…', options: [
    { label: 'Specific and demonstrate understanding of the mistake', pole: 'T' },
    { label: 'Warm and demonstrate care about the hurt', pole: 'F' },
  ]},
  { id: 'tf21', dichotomy: 'TF', prompt: 'You see fairness mostly as…', options: [
    { label: 'The same rules for everyone', pole: 'T' },
    { label: 'The right rule for each person', pole: 'F' },
  ]},
  { id: 'tf22', dichotomy: 'TF', prompt: 'A “tough call” usually means…', options: [
    { label: 'A complicated logical trade-off', pole: 'T' },
    { label: 'A decision that will hurt someone you care about', pole: 'F' },
  ]},
  { id: 'tf23', dichotomy: 'TF', prompt: 'When you’re in pain you’d rather a friend…', options: [
    { label: 'Help you analyse what to do', pole: 'T' },
    { label: 'Just be there with you', pole: 'F' },
  ]},
  { id: 'tf24', dichotomy: 'TF', prompt: 'You find empathy easier when…', options: [
    { label: 'You can understand someone’s reasoning', pole: 'T' },
    { label: 'You can feel what they feel', pole: 'F' },
  ]},
  { id: 'tf25', dichotomy: 'TF', prompt: 'You distrust decisions made…', options: [
    { label: 'Purely on emotion', pole: 'T' },
    { label: 'Purely on spreadsheets', pole: 'F' },
  ]},
  { id: 'tf26', dichotomy: 'TF', prompt: 'You’d rather negotiate by…', options: [
    { label: 'Sticking to objective criteria', pole: 'T' },
    { label: 'Building real rapport', pole: 'F' },
  ]},
  { id: 'tf27', dichotomy: 'TF', prompt: 'You find debate…', options: [
    { label: 'Stimulating and fun', pole: 'T' },
    { label: 'Stressful when it gets personal', pole: 'F' },
  ]},
  { id: 'tf28', dichotomy: 'TF', prompt: 'You’re more bothered by…', options: [
    { label: 'A statistic that doesn’t check out', pole: 'T' },
    { label: 'A story where someone was treated unkindly', pole: 'F' },
  ]},
  { id: 'tf29', dichotomy: 'TF', prompt: 'When you give advice, you tend to…', options: [
    { label: 'Cut to what the data suggests', pole: 'T' },
    { label: 'Check how the person is feeling first', pole: 'F' },
  ]},
  { id: 'tf30', dichotomy: 'TF', prompt: 'You believe firmness is usually…', options: [
    { label: 'A form of respect', pole: 'T' },
    { label: 'A failure of patience', pole: 'F' },
  ]},
  { id: 'tf31', dichotomy: 'TF', prompt: 'You think the best leaders are…', options: [
    { label: 'Decisive and impartial', pole: 'T' },
    { label: 'Empathic and people-aware', pole: 'F' },
  ]},
  { id: 'tf32', dichotomy: 'TF', prompt: 'You’d rather a movie be…', options: [
    { label: 'Sharp and well-constructed', pole: 'T' },
    { label: 'Moving and emotionally true', pole: 'F' },
  ]},
  { id: 'tf33', dichotomy: 'TF', prompt: 'You find tears in a meeting…', options: [
    { label: 'A bit uncomfortable', pole: 'T' },
    { label: 'Completely understandable', pole: 'F' },
  ]},
  { id: 'tf34', dichotomy: 'TF', prompt: 'When you disagree with someone, you try to…', options: [
    { label: 'Show them where their argument breaks', pole: 'T' },
    { label: 'Stay connected while you work it out', pole: 'F' },
  ]},
  { id: 'tf35', dichotomy: 'TF', prompt: 'You’d rather be told you’re…', options: [
    { label: 'Reasonable', pole: 'T' },
    { label: 'Caring', pole: 'F' },
  ]},
  { id: 'tf36', dichotomy: 'TF', prompt: 'You’re more wary of…', options: [
    { label: 'Sentimentality clouding judgement', pole: 'T' },
    { label: 'Cold rationality losing the human point', pole: 'F' },
  ]},
  { id: 'tf37', dichotomy: 'TF', prompt: 'A friend asks for honest feedback. You…', options: [
    { label: 'Give it straight — they asked for it', pole: 'T' },
    { label: 'Give it carefully — they’re asking for a reason', pole: 'F' },
  ]},

  // ── J / P · expansion (25) ────────────────────────────────
  { id: 'jp14', dichotomy: 'JP', prompt: 'You like a calendar that is…', options: [
    { label: 'Fully blocked out', pole: 'J' },
    { label: 'Mostly empty with options open', pole: 'P' },
  ]},
  { id: 'jp15', dichotomy: 'JP', prompt: 'On a Sunday night you…', options: [
    { label: 'Picture how the week will go', pole: 'J' },
    { label: 'Take it as it comes when Monday arrives', pole: 'P' },
  ]},
  { id: 'jp16', dichotomy: 'JP', prompt: 'You finish projects best when you…', options: [
    { label: 'Break them down and march through', pole: 'J' },
    { label: 'Wait for the moment when you click into them', pole: 'P' },
  ]},
  { id: 'jp17', dichotomy: 'JP', prompt: 'You prefer a kitchen where…', options: [
    { label: 'Everything has a place', pole: 'J' },
    { label: 'You can find what you need eventually', pole: 'P' },
  ]},
  { id: 'jp18', dichotomy: 'JP', prompt: 'You’d rather travel with a…', options: [
    { label: 'Day-by-day itinerary', pole: 'J' },
    { label: 'Loose direction and a phone', pole: 'P' },
  ]},
  { id: 'jp19', dichotomy: 'JP', prompt: 'When a meeting overruns you…', options: [
    { label: 'Feel mildly stressed about the next thing', pole: 'J' },
    { label: 'Mostly go with it', pole: 'P' },
  ]},
  { id: 'jp20', dichotomy: 'JP', prompt: 'Your shopping style is…', options: [
    { label: 'List, route, in and out', pole: 'J' },
    { label: 'See what catches your eye', pole: 'P' },
  ]},
  { id: 'jp21', dichotomy: 'JP', prompt: 'When ordering food with a group you’re usually…', options: [
    { label: 'One of the first to decide', pole: 'J' },
    { label: 'Still deciding when the waiter comes', pole: 'P' },
  ]},
  { id: 'jp22', dichotomy: 'JP', prompt: 'Procrastination feels…', options: [
    { label: 'Uncomfortable — you’d rather just start', pole: 'J' },
    { label: 'Useful — pressure helps you focus', pole: 'P' },
  ]},
  { id: 'jp23', dichotomy: 'JP', prompt: 'You’re drawn to roles that…', options: [
    { label: 'Have defined deliverables', pole: 'J' },
    { label: 'Reward improvisation and adaptability', pole: 'P' },
  ]},
  { id: 'jp24', dichotomy: 'JP', prompt: 'A surprise change of plans makes you feel…', options: [
    { label: 'Off-balance until you reset', pole: 'J' },
    { label: 'Curious about what will happen now', pole: 'P' },
  ]},
  { id: 'jp25', dichotomy: 'JP', prompt: 'You prefer a project brief that is…', options: [
    { label: 'Detailed and specific', pole: 'J' },
    { label: 'High-level and leaves room', pole: 'P' },
  ]},
  { id: 'jp26', dichotomy: 'JP', prompt: 'You sleep better when…', options: [
    { label: 'The to-do list is decided for tomorrow', pole: 'J' },
    { label: 'Tomorrow is still open', pole: 'P' },
  ]},
  { id: 'jp27', dichotomy: 'JP', prompt: 'You think rituals are…', options: [
    { label: 'Comforting and grounding', pole: 'J' },
    { label: 'Limiting once you’ve done them a few times', pole: 'P' },
  ]},
  { id: 'jp28', dichotomy: 'JP', prompt: 'You measure a day as good if…', options: [
    { label: 'You got the things on your list done', pole: 'J' },
    { label: 'Interesting things happened, planned or not', pole: 'P' },
  ]},
  { id: 'jp29', dichotomy: 'JP', prompt: 'You feel uneasy when a decision…', options: [
    { label: 'Drags on without being made', pole: 'J' },
    { label: 'Has to be made too early', pole: 'P' },
  ]},
  { id: 'jp30', dichotomy: 'JP', prompt: 'A great teammate, for you, is someone who…', options: [
    { label: 'Hits their deadlines without drama', pole: 'J' },
    { label: 'Stays loose and rolls with changes', pole: 'P' },
  ]},
  { id: 'jp31', dichotomy: 'JP', prompt: 'You think structure mostly…', options: [
    { label: 'Sets you free', pole: 'J' },
    { label: 'Boxes you in', pole: 'P' },
  ]},
  { id: 'jp32', dichotomy: 'JP', prompt: 'When you’re asked “what shall we do tonight?” you…', options: [
    { label: 'Propose something specific', pole: 'J' },
    { label: 'Ask what they feel like', pole: 'P' },
  ]},
  { id: 'jp33', dichotomy: 'JP', prompt: 'You’d rather a vacation be…', options: [
    { label: 'Booked and confirmed before you go', pole: 'J' },
    { label: 'Booked one step at a time', pole: 'P' },
  ]},
  { id: 'jp34', dichotomy: 'JP', prompt: 'You finish books…', options: [
    { label: 'Once you start them, almost always', pole: 'J' },
    { label: 'Sometimes — depends on the mood', pole: 'P' },
  ]},
  { id: 'jp35', dichotomy: 'JP', prompt: 'When work piles up you tend to…', options: [
    { label: 'Sort and prioritise it before doing anything', pole: 'J' },
    { label: 'Dive into whichever piece feels alive', pole: 'P' },
  ]},
  { id: 'jp36', dichotomy: 'JP', prompt: 'You think the phrase “we’ll figure it out” is…', options: [
    { label: 'A red flag for poor planning', pole: 'J' },
    { label: 'A sign things will probably go fine', pole: 'P' },
  ]},
  { id: 'jp37', dichotomy: 'JP', prompt: 'You enjoy mornings most when…', options: [
    { label: 'You know exactly what you’re doing first', pole: 'J' },
    { label: 'You can let the day shape itself', pole: 'P' },
  ]},
  { id: 'jp38', dichotomy: 'JP', prompt: 'You’d rather a friendship be…', options: [
    { label: 'Regular, with predictable rhythms', pole: 'J' },
    { label: 'Spontaneous, with bursts of contact', pole: 'P' },
  ]},
]

// ────────────────────────────────────────────────────────────────
// Scoring
// ────────────────────────────────────────────────────────────────

export type BigFiveResult = {
  /** Percent (0–100) per trait. 50 = middle of the population. */
  scores: Record<BigFiveTrait, number>
}

export function scoreBigFive(answers: Record<string, 1 | 2 | 3 | 4 | 5>): BigFiveResult {
  const totals: Record<BigFiveTrait, { sum: number; count: number }> = {
    O: { sum: 0, count: 0 },
    C: { sum: 0, count: 0 },
    E: { sum: 0, count: 0 },
    A: { sum: 0, count: 0 },
    N: { sum: 0, count: 0 },
  }
  for (const item of BIG_FIVE_ITEMS) {
    const raw = answers[item.id]
    if (!raw) continue
    // Reverse-key: if direction is -1, flip 1↔5, 2↔4, 3 stays.
    const oriented = item.direction === 1 ? raw : (6 - raw)
    totals[item.trait].sum += oriented
    totals[item.trait].count += 1
  }
  const scores: Record<BigFiveTrait, number> = { O: 50, C: 50, E: 50, A: 50, N: 50 }
  for (const trait of Object.keys(totals) as BigFiveTrait[]) {
    const { sum, count } = totals[trait]
    if (count === 0) continue
    // Per-item: scale 1..5 → 0..100. Avg of percents across items in the trait.
    const avgRaw = sum / count
    scores[trait] = Math.round(((avgRaw - 1) / 4) * 100)
  }
  return { scores }
}

export type MbtiResult = {
  type: string
  /** Percent preference strength per pole, 50 = tied. */
  strengths: Record<MbtiDichotomy, { pole: MbtiPole; pct: number }>
}

export function scoreMbti(answers: Record<string, MbtiPole>): MbtiResult {
  const buckets: Record<MbtiDichotomy, Record<MbtiPole, number>> = {
    EI: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
    SN: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
    TF: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
    JP: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
  }
  for (const item of MBTI_ITEMS) {
    const choice = answers[item.id]
    if (!choice) continue
    buckets[item.dichotomy][choice] += 1
  }
  const strengths = {} as Record<MbtiDichotomy, { pole: MbtiPole; pct: number }>
  let type = ''
  for (const dichotomy of Object.keys(buckets) as MbtiDichotomy[]) {
    const [poleA, poleB] = MBTI_DICHOTOMY_INFO[dichotomy].poles
    const a = buckets[dichotomy][poleA]
    const b = buckets[dichotomy][poleB]
    const total = a + b
    const winner = a >= b ? poleA : poleB
    const pct = total === 0 ? 50 : Math.round((Math.max(a, b) / total) * 100)
    strengths[dichotomy] = { pole: winner, pct }
    type += winner
  }
  return { type, strengths }
}

// ────────────────────────────────────────────────────────────────
// Test length + balanced sampling
// ────────────────────────────────────────────────────────────────

export type TestLength = 'short' | 'long'

export const SHORT_TEST_SIZE = 30
export const LONG_BIG_FIVE_SIZE = BIG_FIVE_ITEMS.length
export const LONG_MBTI_SIZE = MBTI_ITEMS.length

function shuffleInPlace<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/**
 * Pick a balanced 30-item Big Five sample: 6 items per trait, with as even a
 * forward/reverse mix as the pool allows. Re-shuffled each call so repeat
 * runs feel different.
 */
export function sampleShortBigFive(): BigFiveItem[] {
  const perTrait = SHORT_TEST_SIZE / 5 // = 6
  const halfFwd = Math.ceil(perTrait / 2)
  const halfRev = perTrait - halfFwd
  const traits: BigFiveTrait[] = ['O', 'C', 'E', 'A', 'N']
  const picked: BigFiveItem[] = []
  for (const trait of traits) {
    const inTrait = BIG_FIVE_ITEMS.filter((q) => q.trait === trait)
    const fwd = shuffleInPlace(inTrait.filter((q) => q.direction === 1))
    const rev = shuffleInPlace(inTrait.filter((q) => q.direction === -1))
    const chosen: BigFiveItem[] = [...fwd.slice(0, halfFwd), ...rev.slice(0, halfRev)]
    // Top up from whichever pool has more, if one side ran short.
    while (chosen.length < perTrait) {
      const remaining = inTrait.filter((q) => !chosen.includes(q))
      if (!remaining.length) break
      chosen.push(remaining[Math.floor(Math.random() * remaining.length)])
    }
    picked.push(...chosen)
  }
  return shuffleInPlace(picked)
}

/**
 * Pick a balanced 30-item MBTI sample. Splits 30 across 4 dichotomies as
 * 8/7/7/8 (or close) and shuffles within each before merging. Re-shuffled
 * each call.
 */
export function sampleShortMbti(): MbtiItem[] {
  const dichotomies: MbtiDichotomy[] = ['EI', 'SN', 'TF', 'JP']
  // 30 = 8 + 7 + 7 + 8
  const sizes: Record<MbtiDichotomy, number> = { EI: 8, SN: 7, TF: 7, JP: 8 }
  const picked: MbtiItem[] = []
  for (const dichotomy of dichotomies) {
    const pool = shuffleInPlace(MBTI_ITEMS.filter((q) => q.dichotomy === dichotomy))
    picked.push(...pool.slice(0, sizes[dichotomy]))
  }
  return shuffleInPlace(picked)
}

export function buildBigFiveSession(length: TestLength): BigFiveItem[] {
  return length === 'short' ? sampleShortBigFive() : BIG_FIVE_ITEMS
}

export function buildMbtiSession(length: TestLength): MbtiItem[] {
  return length === 'short' ? sampleShortMbti() : MBTI_ITEMS
}

export const PERSONALITY_TRACK_IDS = {
  bigFive: 'bigFivePersonality',
  mbti: 'mbtiPersonality',
} as const

export type PersonalityTrackId = typeof PERSONALITY_TRACK_IDS[keyof typeof PERSONALITY_TRACK_IDS]

export function isPersonalityTrackId(id: string | null | undefined): id is PersonalityTrackId {
  return id === PERSONALITY_TRACK_IDS.bigFive || id === PERSONALITY_TRACK_IDS.mbti
}

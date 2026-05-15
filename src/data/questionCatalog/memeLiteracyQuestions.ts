import { makeSimpleQuestion } from './base'
import type { Question, QuestionMedia } from './types'

const source = 'Floe meme literacy bank v1'

type MemeDifficulty = 'kids' | 'adults' | 'experts'

function svgDataUrl(svg: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

function memeCardSvg(title: string, left: string, right: string, accent: string, layout: 'split' | 'stack' | 'chaos' = 'split') {
  const panels = layout === 'stack'
    ? `<rect x="42" y="72" width="236" height="50" rx="14" fill="#fff7e6"/><rect x="42" y="138" width="236" height="50" rx="14" fill="#e8f3ff"/>`
    : layout === 'chaos'
      ? `<rect x="46" y="72" width="98" height="92" rx="16" fill="#fff7e6" transform="rotate(-5 95 118)"/><rect x="172" y="72" width="98" height="92" rx="16" fill="#e8f3ff" transform="rotate(6 221 118)"/><path d="M146 126 L174 126" stroke="${accent}" stroke-width="8" stroke-linecap="round"/>`
      : `<rect x="36" y="76" width="110" height="94" rx="16" fill="#fff7e6"/><rect x="174" y="76" width="110" height="94" rx="16" fill="#e8f3ff"/>`

  return svgDataUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240">
    <rect width="320" height="240" rx="24" fill="#f8efe2"/>
    <rect x="22" y="24" width="276" height="192" rx="22" fill="#fffdf8" stroke="${accent}" stroke-width="5"/>
    <text x="160" y="54" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="800" fill="#263238">${title}</text>
    ${panels}
    <circle cx="92" cy="108" r="18" fill="${accent}" opacity=".85"/>
    <circle cx="228" cy="108" r="18" fill="#263238" opacity=".78"/>
    <path d="M82 140 C92 150 104 150 114 140" fill="none" stroke="#263238" stroke-width="5" stroke-linecap="round"/>
    <path d="M218 140 C228 132 240 132 250 140" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>
    <text x="91" y="194" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#263238">${left}</text>
    <text x="229" y="194" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#263238">${right}</text>
  </svg>`)
}

function media(title: string, left: string, right: string, accent: string, layout?: 'split' | 'stack' | 'chaos'): QuestionMedia[] {
  return [
    {
      type: 'image',
      src: memeCardSvg(title, left, right, accent, layout),
      alt: `Stylized meme-card clue for ${title}.`,
      label: 'Meme card',
      caption: 'A copyright-safe sketch of the meme structure.',
    },
    {
      type: 'image',
      src: memeCardSvg('tone clue', 'setup', 'punchline', '#5d6d7e', layout),
      alt: `Abstract tone map for ${title}.`,
      label: 'Tone clue',
      caption: 'Read the relationship between the panels, not just the faces.',
    },
  ]
}

function q(
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
  lesson: string,
  difficulty: MemeDifficulty,
  clue: QuestionMedia[],
): Question {
  return {
    ...makeSimpleQuestion(id, 'Fun', chapter, title, prompt, correct, wrong, lesson, source),
    difficulty,
    media: clue,
  }
}

export const guessTheMemeQuestions: Question[] = [
  q(6_108_001, 'Classic Templates', 'Distracted choice template', 'A meme shows someone ignoring the sensible existing option to stare at a shiny new temptation. What meme function is this?', 'Distracted attention / tempting alternative', [['Wholesome approval', 'Wholesome approval memes celebrate something rather than show temptation.', 'Look for attention pulled away from the responsible choice.'], ['Impossible dilemma', 'A dilemma asks the viewer to choose between two hard options.', 'This setup is about distraction, not equal difficulty.'], ['Literal product review', 'The image is not mainly reviewing an item.', 'Read the social situation as the joke.']], 'This template works when the humor is that someone abandons a responsible or expected choice for a tempting alternative.', 'kids', media('temptation', 'old plan', 'new shiny', '#f28c38')),
  q(6_108_002, 'Classic Templates', 'Preference panels', 'A two-panel meme rejects one option and approves a second option. What is the main job of the format?', 'Show a preference contrast', [['Explain a timeline', 'A timeline shows change over time.', 'This is about rejecting A and choosing B.'], ['Admit confusion', 'Confusion memes usually show uncertainty, not clean preference.', 'The second panel clearly approves.'], ['Warn about danger', 'Warning memes focus on risk.', 'This format is usually a taste or judgment comparison.']], 'Preference-panel memes are efficient because they turn a value judgment into a visual yes/no contrast.', 'kids', media('preference', 'no thanks', 'yes please', '#6c8cff')),
  q(6_108_003, 'Escalation Memes', 'Expanding brain ladder', 'A meme presents four increasingly intense levels of an idea, ending in an absurd cosmic version. What is the joke structure?', 'Escalating a thought until it becomes absurd', [['Choosing between two buttons', 'Two-button memes are about a dilemma.', 'This one climbs levels.'], ['Predictable consequence shock', 'That joke is about acting surprised after an obvious outcome.', 'Here, each row gets more extreme.'], ['One person copying another', 'Copying memes show resemblance or imitation.', 'This one ranks escalating versions.']], 'Escalation memes are funny because each step pretends to be more enlightened while often becoming less reasonable.', 'adults', media('escalation', 'normal', 'cosmic', '#9b59b6', 'stack')),
  q(6_108_004, 'Dilemma Memes', 'Two buttons panic', 'A character sweats between two buttons with bad tradeoffs. What situation fits this meme best?', 'A forced choice where both options are uncomfortable', [['A simple factual correction', 'Corrections are not usually dilemmas.', 'The sweat implies pressure between options.'], ['A celebration after winning', 'A win does not create the central tension here.', 'Look for anxiety.'], ['A before-and-after glow-up', 'Before-and-after memes show transformation.', 'This template is about choice pressure.']], 'The two-buttons format is a compact way to show conflict when every available option has a cost.', 'kids', media('two buttons', 'bad A', 'bad B', '#e74c3c', 'chaos')),
  q(6_108_005, 'Coping Memes', 'This is fine energy', 'A calm character sits inside obvious chaos and insists everything is okay. What is the meme usually saying?', 'Denial or forced calm during a bad situation', [['Excited discovery', 'Discovery memes show surprise or delight.', 'This scene is calm despite danger.'], ['Detailed technical analysis', 'The joke is emotional, not technical.', 'The mismatch is between danger and calm.'], ['A fair compromise', 'Nothing here suggests negotiation.', 'The setup is about denial.']], 'This kind of meme works by pairing visible disaster with a calm caption, making denial the punchline.', 'kids', media('fine', 'chaos', 'calm face', '#e67e22')),
  q(6_108_006, 'Argument Memes', 'Change my mind table', 'Someone sits behind a bold claim and invites strangers to argue. What is the core meme move?', 'Provocative claim framed as open debate', [['Secret niche pride', 'Secret pride memes show private thoughts in public.', 'This one actively invites argument.'], ['A plan backfiring', 'Backfire memes show steps going wrong.', 'No plan sequence appears here.'], ['Visual identification', 'This is not about naming an object.', 'It is about argument posture.']], 'The format is useful for opinions that are intentionally blunt, debatable, or bait-like.', 'adults', media('debate', 'claim', 'argue?', '#2ecc71')),
  q(6_108_007, 'Consequence Memes', 'Obvious outcome shock', 'A meme shows someone shocked after doing something that obviously caused the result. What is the joke?', 'Pretending to be surprised by a predictable consequence', [['Showing a hard ethical tradeoff', 'The tradeoff is not the point.', 'The result was predictable.'], ['Giving sincere praise', 'Praise memes do not rely on consequence blindness.', 'Look for fake surprise.'], ['Ranking skill levels', 'Ranking memes compare levels.', 'This meme compares action and obvious result.']], 'The humor comes from the gap between the person acting as if the outcome is shocking and the audience knowing it was obvious.', 'kids', media('shock', 'does thing', 'gets result', '#f1c40f')),
  q(6_108_008, 'Recognition Memes', 'Pointing duplicates', 'Two nearly identical characters point at each other. What does this template usually communicate?', 'Mutual recognition, duplication, or hypocrisy', [['A private victory nobody notices', 'Private-victory memes are about hidden inner life.', 'This is about resemblance.'], ['A calm denial of chaos', 'Denial memes contrast calm with disaster.', 'Here, both sides mirror each other.'], ['An expert field guide clue', 'The setup is social comparison, not identification.', 'The pointing marks sameness.']], 'Pointing-duplicate memes work when two people, groups, or ideas accuse each other while looking very similar.', 'adults', media('same energy', 'you?', 'also you?', '#3498db')),
  q(6_108_009, 'Failure Memes', 'Plan backfires panel', 'A sequence shows a confident plan, then the final panel reveals the plan has accidentally defeated itself. What template logic is this?', 'A plan that exposes its own flaw', [['A clean preference contrast', 'Preference memes have a simple reject/approve structure.', 'This is a sequence with a twist.'], ['A fossil identification clue', 'No object is being identified.', 'Read the panels as a failed strategy.'], ['A wholesome gratitude post', 'The ending is ironic, not purely grateful.', 'The plan collapses.']], 'Backfire-panel memes are mini stories: step one sounds clever, but the last step makes the flaw unavoidable.', 'adults', media('the plan', 'step 1', 'oops', '#34495e', 'stack')),
  q(6_108_010, 'Dilemma Memes', 'Refuse the easy fix', 'A meme offers someone a simple action, but they would rather take a ridiculous penalty than do it. What is the function?', 'Mocking stubborn refusal to do the obvious fix', [['Celebrating discipline', 'The person is not making a noble sacrifice.', 'The refusal is the joke.'], ['Asking for source citations', 'Citation memes are about evidence.', 'This is about avoiding an easy action.'], ['Showing two equal preferences', 'The choice is not balanced.', 'One option is obviously easier.']], 'This meme is useful when the correct move is simple but someone refuses it for pride, habit, or chaos.', 'kids', media('refusal', 'easy fix', 'huge penalty', '#d35400')),
  q(6_108_011, 'Misread Memes', 'Is this a pigeon energy', 'A character confidently labels something as the wrong thing. What kind of joke is being made?', 'Confident misidentification', [['Careful expert comparison', 'The whole joke is that the label is not careful.', 'Confidence plus wrongness is the clue.'], ['Escalating enlightenment', 'Escalation memes climb through levels.', 'This is one wrong label.'], ['Reward celebration', 'Celebrations praise success.', 'This template highlights a mistake.']], 'Misidentification memes are useful for calling out category mistakes, bad analogies, or wildly misplaced confidence.', 'kids', media('wrong label', 'object', 'bad name', '#16a085')),
  q(6_108_012, 'Social Memes', 'They do not know', 'A person stands at a party while thinking about a niche achievement nobody else notices. What does the meme express?', 'Private pride or private anxiety in a public room', [['A two-option policy dilemma', 'Policy dilemmas involve conflicting choices.', 'This is about inner life versus public setting.'], ['A literal safety warning', 'Safety warnings point to real danger.', 'Here the tension is social invisibility.'], ['A plan backfiring', 'No sequence collapses.', 'The joke is hidden thought.']], 'This meme captures the strange feeling of carrying a private obsession, fear, or achievement while everyone else is just socializing.', 'adults', media('inner monologue', 'party', 'my lore', '#8e44ad')),
  q(6_108_013, 'Workplace Memes', 'Suggestion punished', 'A meeting meme shows someone offering the sensible idea and getting punished for it. What situation fits?', 'A group rejecting the useful but inconvenient suggestion', [['A personal taste comparison', 'Taste comparisons reject one option and prefer another.', 'This is about group dynamics.'], ['A field identification quiz', 'No specimen is being named.', 'The key is the punished suggestion.'], ['A simple win celebration', 'The useful idea loses socially.', 'That is not a clean win.']], 'This format is useful for joking about organizations that say they want solutions but punish the person who names the real issue.', 'experts', media('meeting', 'good idea', 'out you go', '#c0392b', 'chaos')),
  q(6_108_014, 'Tone Memes', 'Alternating caps mockery', 'A phrase is rewritten with alternating capital letters to imitate a mocking voice. What is the tone?', 'Sarcastic imitation', [['Sincere apology', 'The typography signals mockery, not remorse.', 'Read the voice implied by the casing.'], ['Neutral summary', 'Alternating caps are not neutral.', 'The style adds attitude.'], ['Scientific classification', 'The casing is not taxonomy.', 'It is a social tone cue.']], 'Meme literacy includes typography: alternating caps usually means the writer is parodying or belittling the quoted phrase.', 'adults', media('mock text', 'quote', 'sarcasm', '#7f8c8d')),
  q(6_108_015, 'Wholesome Memes', 'Wholesome approval', 'A meme uses exaggerated approval for a tiny good behavior, like drinking water or being kind. What is the format doing?', 'Celebrating a small positive action', [['Mocking predictable failure', 'Failure memes point at a mistake.', 'This one rewards tiny goodness.'], ['Inviting an argument', 'Argument memes provoke debate.', 'This one affirms.'], ['Showing denial during chaos', 'Denial memes minimize danger.', 'This one is openly supportive.']], 'Wholesome memes turn small acts into tiny ceremonies, which makes encouragement feel playful instead of preachy.', 'kids', media('tiny win', 'good job', 'approved', '#27ae60')),
  q(6_108_016, 'Meta Memes', 'Meme about using memes', 'A meme comments on the fact that someone is using a meme format too much. What makes it meta?', 'It jokes about meme-making itself', [['It identifies a fossil', 'A fossil question names physical evidence.', 'This is about the meme system.'], ['It gives a sincere product review', 'A review evaluates a product.', 'The subject is the meme format.'], ['It asks a math calculation', 'There is no calculation.', 'The joke points at its own medium.']], 'A meta meme turns the camera back on meme culture, joking about templates, overuse, captions, or the people sharing them.', 'experts', media('meta', 'meme', 'about memes', '#2c3e50')),
  q(6_108_017, 'Context Memes', 'Caption changes everything', 'The same image can be funny, rude, or confusing depending on the caption. What should you check first?', 'The implied social context of the caption', [['Only the color palette', 'Color can matter, but meme meaning often comes from caption context.', 'Ask who is speaking and why.'], ['The file size', 'File size rarely explains the joke.', 'The social setup matters more.'], ['Whether it has two panels', 'Panel count is not enough.', 'A one-panel meme can still shift meaning by caption.']], 'Meme meaning is contextual: caption, audience, timing, and shared reference can completely change the joke.', 'experts', media('context', 'same pic', 'new meaning', '#1abc9c')),
  q(6_108_018, 'Context Memes', 'When not to post it', 'A meme is funny in a group chat but could be cruel in response to someone sharing bad news. What skill is this testing?', 'Audience and timing judgment', [['Template memorization only', 'Knowing the template is not enough.', 'You need social judgment too.'], ['Ignoring tone because memes are jokes', 'Jokes still have context and effects.', 'The audience changes the meaning.'], ['Choosing the loudest reaction image', 'Loud is not always appropriate.', 'Timing and audience are the key.']], 'Good meme literacy includes restraint: the same joke can land warmly, awkwardly, or hurtfully depending on timing and audience.', 'experts', media('timing', 'group chat', 'read room', '#e84393')),
]

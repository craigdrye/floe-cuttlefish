export type SpeakerRole =
  | 'drill'
  | 'explorer'
  | 'mentor'
  | 'champion'
  | 'thinker'
  | 'strongman'
  | 'hulkster'
  | 'karate'
  | 'captain'
  | 'professor'
  | 'pirate'
  | 'mechanic'

interface SpeakerPortraitProps {
  role: SpeakerRole
}

export function SpeakerPortrait({ role }: SpeakerPortraitProps) {
  const src = {
    drill: '/assets/fun_characters_transparent/army.png',
    explorer: '/assets/fun_characters_transparent/explorer.png',
    mentor: '/assets/fun_characters_transparent/philos.png',
    champion: '/assets/fun_characters_transparent/elvis.png',
    thinker: '/assets/fun_characters_transparent/thought.png',
    strongman: '/assets/fun_characters_transparent/strong man.png',
    hulkster: '/assets/fun_characters_transparent/hulk.png',
    karate: '/assets/fun_characters_transparent/karate.png',
    captain: '/assets/fun_characters_transparent/pilot.png',
    professor: '/assets/fun_characters_transparent/einstein.png',
    pirate: '/assets/fun_characters_transparent/pirate.png',
    mechanic: '/assets/fun_characters_transparent/mechanic.png',
  }[role]

  return <img className="speaker-portrait" src={src} alt="" aria-hidden="true" />
}

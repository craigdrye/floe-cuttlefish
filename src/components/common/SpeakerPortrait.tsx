export type SpeakerRole = 'drill' | 'explorer' | 'mentor' | 'champion' | 'thinker'

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
  }[role]

  return <img className="speaker-portrait" src={src} alt="" aria-hidden="true" />
}

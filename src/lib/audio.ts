let audioContext: AudioContext | null = null

export function getAudioContext() {
  audioContext ??= new AudioContext()
  return audioContext
}

export function playTone(
  frequency: number,
  start: number,
  duration: number,
  volume = 0.08,
  type: OscillatorType = 'sine'
) {
  const context = getAudioContext()
  const oscillator = context.createOscillator()
  const gain = context.createGain()

  oscillator.type = type
  oscillator.frequency.setValueAtTime(frequency, start)
  gain.gain.setValueAtTime(0.0001, start)
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.015)
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration)

  oscillator.connect(gain)
  gain.connect(context.destination)
  oscillator.start(start)
  oscillator.stop(start + duration + 0.03)
}

export function playSuccessSound() {
  const context = getAudioContext()
  const now = context.currentTime
  playTone(523.25, now, 0.13, 0.06)
  playTone(659.25, now + 0.09, 0.13, 0.065)
  playTone(783.99, now + 0.18, 0.18, 0.075)
}

type RewardVoiceIntensity = 'success' | 'combo' | 'stage'

export function playRewardVoiceSound(intensity: RewardVoiceIntensity = 'success') {
  const context = getAudioContext()
  const now = context.currentTime

  if (intensity === 'stage') {
    playTone(523.25, now, 0.12, 0.05, 'triangle')
    playTone(659.25, now + 0.1, 0.12, 0.055, 'triangle')
    playTone(880, now + 0.2, 0.2, 0.06, 'triangle')
    playTone(1174.66, now + 0.34, 0.28, 0.055, 'sine')
    return
  }

  if (intensity === 'combo') {
    playTone(659.25, now, 0.08, 0.045, 'square')
    playTone(880, now + 0.07, 0.1, 0.05, 'square')
    playTone(1318.51, now + 0.16, 0.16, 0.04, 'triangle')
    return
  }

  playTone(740, now, 0.06, 0.045, 'triangle')
  playTone(988, now + 0.07, 0.11, 0.05, 'triangle')
}

export function playComboSound(combo: number) {
  if (combo < 3) return
  const context = getAudioContext()
  const now = context.currentTime
  const lift = Math.min(combo, 10) * 18
  playTone(392 + lift, now, 0.08, 0.045, 'triangle')
  playTone(523.25 + lift, now + 0.07, 0.1, 0.05, 'triangle')
  if (combo >= 5) playTone(783.99 + lift, now + 0.15, 0.14, 0.055, 'sine')
}

export function playWrongSound() {
  const context = getAudioContext()
  const now = context.currentTime
  const sounds = [
    () => {
      playTone(220, now, 0.09, 0.055, 'square')
      playTone(146.83, now + 0.1, 0.16, 0.06, 'sawtooth')
    },
    () => {
      playTone(180, now, 0.05, 0.05, 'triangle')
      playTone(160, now + 0.06, 0.05, 0.05, 'triangle')
      playTone(140, now + 0.12, 0.1, 0.05, 'triangle')
    },
    () => {
      playTone(98, now, 0.18, 0.06, 'sawtooth')
      playTone(123.47, now + 0.03, 0.14, 0.035, 'square')
    },
    () => {
      playTone(330, now, 0.06, 0.045, 'square')
      playTone(247, now + 0.08, 0.06, 0.045, 'square')
      playTone(185, now + 0.16, 0.12, 0.045, 'square')
    },
    () => {
      playTone(261.63, now, 0.07, 0.05, 'triangle')
      playTone(207.65, now + 0.07, 0.07, 0.05, 'triangle')
      playTone(164.81, now + 0.14, 0.12, 0.05, 'triangle')
    },
    () => {
      playTone(392, now, 0.04, 0.04, 'square')
      playTone(196, now + 0.05, 0.16, 0.05, 'square')
    },
    () => {
      playTone(110, now, 0.08, 0.05, 'sawtooth')
      playTone(116.54, now + 0.08, 0.08, 0.045, 'sawtooth')
      playTone(103.83, now + 0.16, 0.12, 0.04, 'sawtooth')
    },
    () => {
      playTone(277.18, now, 0.05, 0.05, 'triangle')
      playTone(138.59, now + 0.07, 0.2, 0.055, 'sawtooth')
    },
  ]

  sounds[Math.floor(Math.random() * sounds.length)]()
}

export function playFanfare() {
  const context = getAudioContext()
  const now = context.currentTime
  playTone(523.25, now, 0.15, 0.08, 'square')
  playTone(659.25, now + 0.15, 0.15, 0.08, 'square')
  playTone(783.99, now + 0.3, 0.3, 0.08, 'square')
  playTone(1046.50, now + 0.6, 0.5, 0.08, 'square')
}

// Simple ambient underwater white noise generator
let ambientSource: AudioBufferSourceNode | null = null
let ambientGain: GainNode | null = null

export function toggleAmbientSound(enable: boolean) {
  const context = getAudioContext()
  
  if (enable) {
    if (ambientSource) return
    const bufferSize = 2 * context.sampleRate
    const noiseBuffer = context.createBuffer(1, bufferSize, context.sampleRate)
    const output = noiseBuffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      // Pink noise approximation for a deep underwater rumble
      const white = Math.random() * 2 - 1
      output[i] = (lastOut + (0.02 * white)) / 1.02
      lastOut = output[i]
      output[i] *= 3.5 // (roughly) compensate for gain
    }
    
    const noiseSource = context.createBufferSource()
    noiseSource.buffer = noiseBuffer
    noiseSource.loop = true
    
    // Lowpass filter to muffle it like underwater
    const filter = context.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 400
    
    ambientGain = context.createGain()
    ambientGain.gain.value = 0.03
    
    noiseSource.connect(filter)
    filter.connect(ambientGain)
    ambientGain.connect(context.destination)
    
    noiseSource.start()
    ambientSource = noiseSource
  } else {
    if (ambientGain) {
      ambientGain.gain.setTargetAtTime(0, context.currentTime, 0.1)
      setTimeout(() => {
        if (ambientSource) {
          try {
            ambientSource.stop()
          } catch {
            // Already stopped.
          }
          ambientSource.disconnect()
        }
        if (ambientGain) ambientGain.disconnect()
        ambientSource = null
        ambientGain = null
      }, 200)
    }
  }
}

let lastOut = 0

// ScoreWeaver の中核となる楽曲モデル

export interface Song {
  id: string
  meta: SongMeta
  tracks: Track[]
  tempoMap: TempoChange[]
  timeSignatureMap: TimeSignatureChange[]
}

export interface SongMeta {
  title: string
  composer?: string
  description?: string
  bpm: number
  timeSignature: TimeSignature
  key?: string
  createdAt?: string
  updatedAt?: string
}

export interface TimeSignature {
  numerator: number
  denominator: number
}

export interface TempoChange {
  atBeat: number
  bpm: number
}

export interface TimeSignatureChange {
  atBeat: number
  timeSignature: TimeSignature
}

export interface Track {
  id: string
  name: string
  instrument: Instrument
  channel?: number
  notes: Note[]
  muted?: boolean
  solo?: boolean
}

export type Instrument =
  | "piano"
  | "strings"
  | "guitar"
  | "bass"
  | "drums"
  | "synth"
  | "pad"
  | "lead"
  | "custom"

export interface Note {
  id: string
  pitch: Pitch
  startBeat: number
  durationBeats: number
  velocity: number // 0–127 想定
  tiedToNext?: boolean
}

export type PitchNotation = "midi" | "abc" | "name"

export interface Pitch {
  notation: PitchNotation
  midi?: number        // 60 = C4
  name?: string        // "C4", "G#3" など
  abc?: string         // "C", "G,", "c'" など
}

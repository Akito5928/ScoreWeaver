import { Song, Note, Track } from "../types/song"

// 将来は本物の MIDI バイナリを生成する。
// 今は MVP として空の MIDI を返す。
export function generateMIDI(song: Song): Uint8Array {
  console.warn("MIDI generator: placeholder implementation")

  // 将来の実装イメージ（コメントだけ先に置く）
  //
  // 1. tempoMap を読み取る
  // 2. timeSignatureMap を読み取る
  // 3. 各 Track の Note を MIDI イベントに変換
  // 4. MIDI header / track chunk を組み立てる
  // 5. Uint8Array にパックして返す

  return new Uint8Array()
}

// 将来のためのイベント変換の骨格
export function noteToMIDIEvents(note: Note, channel = 0) {
  console.warn("noteToMIDIEvents: placeholder")
  return []
}

// Track → MIDI イベントの骨格
export function trackToMIDI(track: Track) {
  console.warn("trackToMIDI: placeholder")
  return []
}

import { useState } from "react"
import { Song } from "../../core/types/song"
import { generateMIDI } from "../../core/midi/midiGenerator"

export default function MidiPlayer({ song }: { song: Song }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    const midiData = generateMIDI(song)
    console.log("Generated MIDI:", midiData)

    // MVP: 再生は console.log のみ
    // 将来: WebAudio or WebMIDI で再生
    setIsPlaying(true)
  }

  const handleStop = () => {
    console.log("Stop MIDI")
    setIsPlaying(false)
  }

  return (
    <div>
      <h2>MIDI Player (MVP)</h2>

      {!isPlaying ? (
        <button onClick={handlePlay}>Play</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
    </div>
  )
}

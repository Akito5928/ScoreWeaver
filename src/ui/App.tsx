import { useState } from "react"
import { Song } from "@/core/types/song"
import EditorTabs from "@/ui/Editor/EditorTabs"
import EditorToolbar from "@/ui/Editor/EditorToolbar"
import MidiPlayer from "@/ui/Player/MidiPlayer"
import { generateSong } from "@/core/ai/hfClient"

export default function App() {
  const [song, setSong] = useState<Song>({
    id: "init",
    meta: {
      title: "Untitled",
      bpm: 120,
      timeSignature: { numerator: 4, denominator: 4 }
    },
    tracks: [],
    tempoMap: [],
    timeSignatureMap: []
  })

  const handleAIGenerate = async () => {
    const newSong = await generateSong("Make a simple melody")
    setSong(newSong)
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>ScoreWeaver MVP</h1>

      <EditorToolbar onAIGenerate={handleAIGenerate} />
      <EditorTabs song={song} onChange={setSong} />

      <MidiPlayer song={song} />
    </div>
  )
}

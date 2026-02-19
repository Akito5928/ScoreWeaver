import { useState } from "react"
import { Song } from "@/core/types/song"

import Header from "@/ui/Layout/Header"
import Sidebar from "@/ui/Layout/Sidebar"
import MainArea from "@/ui/Layout/MainArea"
import MidiPlayer from "@/ui/Player/MidiPlayer"

import { generateSong } from "@/core/ai/hfClient"

import "./App.css"

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
    <div className="app-container">
      <Header onAIGenerate={handleAIGenerate} />

      <div className="main-layout">
        {/* 左列 */}
        <Sidebar />

        {/* 中央列 */}
        <MainArea song={song} onChange={setSong} />

        {/* 右列 */}
        <div className="player-area">
          <MidiPlayer song={song} />
        </div>
      </div>
    </div>
  )
}

import { generateSong, generateABC } from "../core/ai/hfClient"
import { useMIDI } from "./useMIDI"
import { useSong } from "./useSong"

export function useAI() {
  const { playSong } = useMIDI()
  const { setSong } = useSong()

  async function handleGenerate() {
    try {
      // ① JSON 構造を生成
      const song = await generateSong("4/4, BPM120 の短いメロディ")

      // ② ABC を生成
      const abc = await generateABC("短いメロディ")

      // ③ Song に ABC を追加（ScoreWeaver の tracks 構造に合わせる）
      song.tracks = [
        {
          id: "track-1",
          instrument: "piano",
          abc: abc
        }
      ]

      // ④ UI に反映
      setSong(song)

      // ⑤ MIDI 再生
      playSong(song)

    } catch (err) {
      console.error("AI Generate failed:", err)
    }
  }

  return { handleGenerate }
}

import { Song } from "../types/song"
import { buildPrompt } from "./promptBuilder"

const HF_API_URL = "https://api-inference.huggingface.co/models/YOUR_MODEL"
const HF_API_KEY = import.meta.env.VITE_HF_API_KEY

export async function generateSong(prompt: string): Promise<Song> {
  console.warn("HF client: using placeholder implementation")

  // 将来の本実装では:
  // 1. buildPrompt(prompt) でプロンプト生成
  // 2. fetch で HF API 呼び出し
  // 3. JSON を Song 型にパース
  // 4. エラー処理

  // 今は MVP として「空の Song を返す」
  return {
    id: "temp-id",
    meta: {
      title: "Untitled",
      bpm: 120,
      timeSignature: { numerator: 4, denominator: 4 }
    },
    tracks: [],
    tempoMap: [],
    timeSignatureMap: []
  }
}

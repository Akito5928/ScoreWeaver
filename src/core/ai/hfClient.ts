import { Song } from "../types/song"
import { buildPrompt } from "./promptBuilder"

const HF_API_URL = "https://api-inference.huggingface.co/models/Qwen/Qwen2.5-3B-Instruct"
const HF_API_KEY = import.meta.env.VITE_HF_TOKEN

// JSON構造を生成
export async function generateSong(prompt: string): Promise<Song> {
  const fullPrompt = buildPrompt(prompt, "json")

  const res = await fetch(HF_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HF_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: fullPrompt }),
  })

  if (!res.ok) {
    throw new Error(`HF API error: ${res.status} ${res.statusText}`)
  }

  const data = await res.json()

  try {
    const song: Song = JSON.parse(data[0].generated_text)
    return song
  } catch (err) {
    console.error("Failed to parse HF response:", data)
    throw err
  }
}

// ABC記法を生成
export async function generateABC(prompt: string): Promise<string> {
  const fullPrompt = buildPrompt(prompt, "abc")

  const res = await fetch(HF_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HF_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: fullPrompt }),
  })

  if (!res.ok) {
    throw new Error(`HF API error: ${res.status} ${res.statusText}`)
  }

  const data = await res.json()

  try {
    const abc: string = data[0].generated_text.trim()
    return abc
  } catch (err) {
    console.error("Failed to parse HF response:", data)
    throw err
  }
}

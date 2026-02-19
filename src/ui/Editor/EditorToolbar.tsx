import { generateSong } from "../../core/ai/hfClient"

export default function EditorToolbar({ onAIGenerate }: { onAIGenerate: () => void }) {
  return (
    <div>
      <button onClick={onAIGenerate}>AI Generate</button>
    </div>
  )
}

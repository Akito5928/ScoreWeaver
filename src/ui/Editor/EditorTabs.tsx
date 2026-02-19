import { useState } from "react"
import JsonEditor from "./JsonEditor"
import AbcEditor from "./AbcEditor"
import { Song } from "../../core/types/song"

export default function EditorTabs({
  song,
  onChange
}: {
  song: Song
  onChange: (s: Song) => void
}) {
  const [tab, setTab] = useState<"json" | "abc">("json")

  return (
    <div>
      <div>
        <button onClick={() => setTab("json")}>JSON</button>
        <button onClick={() => setTab("abc")}>ABC</button>
      </div>

      {tab === "json" && <JsonEditor song={song} onChange={onChange} />}
      {tab === "abc" && <AbcEditor />}
    </div>
  )
}

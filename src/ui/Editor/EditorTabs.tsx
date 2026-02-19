import { useState } from "react"
import JsonEditor from "./JsonEditor"
import AbcEditor from "./AbcEditor"
import { Song } from "@/core/types/song"

interface Props {
  song: Song
  onChange: (s: Song) => void
}

export default function EditorTabs({ song, onChange }: Props) {
  const [tab, setTab] = useState<"json" | "abc">("json")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: 0, // ★ これが最重要
      }}
    >
      <div style={{ display: "flex", marginBottom: "var(--space-md)" }}>
        <button
          onClick={() => setTab("json")}
          className={tab === "json" ? "tab-active" : "tab"}
        >
          JSON
        </button>

        <button
          onClick={() => setTab("abc")}
          className={tab === "abc" ? "tab-active" : "tab"}
        >
          ABC
        </button>
      </div>

      <div
        style={{
          flex: 1,
          minHeight: 0, // ★ これが無いと中身が暴走する
          display: "flex",
          flexDirection: "column",
        }}
      >
        {tab === "json" && <JsonEditor song={song} onChange={onChange} />}
        {tab === "abc" && <AbcEditor song={song} onChange={onChange} />}
      </div>
    </div>
  )
}

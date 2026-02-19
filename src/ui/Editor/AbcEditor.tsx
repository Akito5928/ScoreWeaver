import { Song } from "@/core/types/song"

interface Props {
  song: Song
  onChange: (s: Song) => void
}

export default function AbcEditor({ song, onChange }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: 0, // ★ 必須
      }}
    >
      <h3 style={{ marginTop: 0 }}>ABC Editor</h3>

      <textarea
        placeholder="ABC notation here..."
        style={{
          flex: 1,
          minHeight: 0, // ★ これが無いと潰れる
          width: "100%",
          background: "#111",
          color: "var(--text)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          padding: "var(--space-md)",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "16px",
          resize: "none",
          overflowY: "auto",
        }}
      />
    </div>
  )
}

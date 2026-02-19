import { Song } from "@/core/types/song"

interface Props {
  song: Song
  onChange: (s: Song) => void
}

export default function JsonEditor({ song, onChange }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: 0, // ★ 必須
      }}
    >
      <textarea
        value={JSON.stringify(song, null, 2)}
        onChange={(e) => {
          try {
            onChange(JSON.parse(e.target.value))
          } catch {}
        }}
        style={{
          flex: 1,
          minHeight: 0, // ★ これが無いとバーが出る
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

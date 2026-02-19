import EditorTabs from "@/ui/Editor/EditorTabs"
import EditorToolbar from "@/ui/Editor/EditorToolbar"
import { Song } from "@/core/types/song"

interface Props {
  song: Song
  onChange: (s: Song) => void
}

export default function MainArea({ song, onChange }: Props) {
  return (
    // ★ ここは中央列そのもの（className 付けない）
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        minHeight: 0,
      }}
    >
      {/* ★ editor-area は “中身” としてここに置く */}
      <div className="editor-area" style={{ flex: 1, minHeight: 0 }}>
        <EditorToolbar />
        <EditorTabs song={song} onChange={onChange} />
      </div>
    </div>
  )
}

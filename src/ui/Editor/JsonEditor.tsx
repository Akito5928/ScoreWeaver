import { Song } from "@/core/types/song"

export default function JsonEditor({
  song,
  onChange
}: {
  song: Song
  onChange: (updated: Song) => void
}) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const parsed = JSON.parse(e.target.value)
      onChange(parsed)
    } catch {
      // JSON が壊れてても無視（MVP）
    }
  }

  return (
    <div>
      <h2>JSON Editor (MVP)</h2>
      <textarea
        style={{ width: "100%", height: "300px" }}
        defaultValue={JSON.stringify(song, null, 2)}
        onChange={handleChange}
      />
    </div>
  )
}

import { useAI } from "../../hooks/useAI"

export default function EditorToolbar() {
  const { handleGenerate } = useAI()

  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        marginBottom: "var(--space-md)",
        flexShrink: 0,
        height: "auto",
      }}
    >
      <button
        onClick={handleGenerate}
        style={{
          background: "var(--accent)",
          border: "none",
          padding: "8px 16px",
          borderRadius: "var(--radius)",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        AI Generate
      </button>
    </div>
  )
}

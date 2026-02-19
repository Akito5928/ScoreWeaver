interface Props {
  onAIGenerate?: () => void
}

export default function EditorToolbar({ onAIGenerate }: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        marginBottom: "var(--space-md)",
        flexShrink: 0,   // ★ これが最重要
        height: "auto",  // ★ 高さを確保
      }}
    >
      <button
        onClick={onAIGenerate}
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

export default function Header() {
  return (
    <header
      style={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        background: "#111",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <h1 style={{ fontSize: "20px", margin: 0 }}>ScoreWeaver MVP</h1>

      <button
        style={{
          background: "var(--accent)",
          border: "none",
          padding: "10px 16px",
          borderRadius: "var(--radius)",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        AI Generate
      </button>
    </header>
  )
}

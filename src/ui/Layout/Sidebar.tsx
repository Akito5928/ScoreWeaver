export default function Sidebar() {
  return (
    <aside
      style={{
        background: "#111",
        padding: "var(--space-md)",
        borderRight: "1px solid var(--border)",
      }}
    >
      <h3 style={{ marginTop: 0 }}>Navigation</h3>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ marginBottom: "12px", opacity: 0.8 }}>Project</li>
        <li style={{ marginBottom: "12px", opacity: 0.8 }}>Settings</li>
        <li style={{ marginBottom: "12px", opacity: 0.8 }}>Presets</li>
      </ul>
    </aside>
  )
}

export default function MidiPlayer() {
  return (
    <div>
      <h3>MIDI Player</h3>

      <button style={{ marginRight: "8px" }}>▶ Play</button>
      <button>■ Stop</button>

      <div style={{ marginTop: "16px", opacity: 0.8 }}>BPM: 120</div>
    </div>
  )
}

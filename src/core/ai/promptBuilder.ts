export function buildPrompt(userInput: string, mode: "json" | "abc" = "json"): string {
  if (mode === "json") {
    return `
You are ScoreWeaver AI.
Generate a JSON Song structure based on this request:

"${userInput}"

Requirements:
- Return ONLY valid JSON
- Must include: id, meta (title, bpm, timeSignature), tracks, tempoMap, timeSignatureMap
- No extra text, comments, or explanations
`
  }

  if (mode === "abc") {
    return `
You are ScoreWeaver AI.
Generate a short melody in ABC notation based on this request:

"${userInput}"

Requirements:
- Return ONLY valid ABC notation
- Must include headers: M:4/4, L:1/8, K:C (or as requested)
- Use notes CDEFGAB with rhythm symbols
- No extra text, comments, or explanations
`
  }

  return userInput
}

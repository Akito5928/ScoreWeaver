export function buildPrompt(userInput: string): string {
  return `
You are ScoreWeaver AI. 
Generate a JSON Song structure based on this request:

"${userInput}"

Return ONLY valid JSON.
`
}

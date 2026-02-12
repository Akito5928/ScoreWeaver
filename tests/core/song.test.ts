import { describe, it, expect } from "vitest"
import { Song } from "../../src/core/types/song"

describe("Song type", () => {
  it("should exist", () => {
    const s: Song = {} as Song
    expect(s).toBeDefined()
  })
})

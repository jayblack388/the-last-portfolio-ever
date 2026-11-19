import { describe, expect, it } from "vitest";
import { resolveTheme } from "../../src/scripts/theme";

describe("resolveTheme", () => {
  it("uses a stored dark choice over a light system", () => {
    expect(resolveTheme("dark", false)).toBe("dark");
  });
  it("uses a stored light choice over a dark system", () => {
    expect(resolveTheme("light", true)).toBe("light");
  });
  it("follows the system when nothing is stored", () => {
    expect(resolveTheme(null, true)).toBe("dark");
  });
  it("ignores an unknown stored value", () => {
    expect(resolveTheme("banana", false)).toBe("light");
  });
});

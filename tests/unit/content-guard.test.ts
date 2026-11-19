import { existsSync, readdirSync, readFileSync } from "node:fs";
import { extname, join } from "node:path";
import { describe, expect, it } from "vitest";

// Strings that must never be published. HCM stays off the site until HCM signs off;
// the phone number stays off entirely; em dashes are banned by the copy rules.
const BANNED = ["Henrico", "Christmas Mother", "HCM", "tel:", "—"];
// Only text a visitor reads. Minified JS, CSS and fonts can contain short strings by chance.
const TEXT = new Set([".html", ".xml", ".md", ".txt"]);

function files(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const path = join(dir, d.name);
    return d.isDirectory() ? files(path) : TEXT.has(extname(d.name)) ? [path] : [];
  });
}

describe("content guard", () => {
  it("finds a build to scan", () => {
    expect(files("dist").length).toBeGreaterThan(0);
  });

  it("publishes none of the banned strings", () => {
    const hits = [...files("dist"), ...files("src/content")].flatMap((path) => {
      const text = readFileSync(path, "utf8");
      return BANNED.filter((s) => text.includes(s)).map((s) => `${path}: ${JSON.stringify(s)}`);
    });
    expect(hits).toEqual([]);
  });
});

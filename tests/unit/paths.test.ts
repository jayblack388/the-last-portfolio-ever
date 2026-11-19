import { describe, expect, it } from "vitest";
import { cleanPath, navCurrent } from "../../src/lib/paths";

describe("cleanPath", () => {
  it("maps the built home page to /", () => {
    expect(cleanPath("/index.html")).toBe("/");
    expect(cleanPath("/")).toBe("/");
  });
  it("drops the .html that build.format 'file' adds", () => {
    expect(cleanPath("/about.html")).toBe("/about");
    expect(cleanPath("/work/homelab.html")).toBe("/work/homelab");
  });
  it("leaves clean paths alone", () => {
    expect(cleanPath("/about")).toBe("/about");
  });
});

describe("navCurrent", () => {
  it("marks the exact page", () => {
    expect(navCurrent("/work", "/work")).toBe("page");
  });
  it("marks the section on a child page", () => {
    expect(navCurrent("/work/homelab", "/work")).toBe("true");
  });
  it("does not match a page that only shares a prefix", () => {
    expect(navCurrent("/workshop", "/work")).toBeUndefined();
  });
  it("does not match an unrelated page", () => {
    expect(navCurrent("/about", "/work")).toBeUndefined();
  });
});

import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { PAGES } from "./pages";

const TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];
const SCHEMES = ["light", "dark"] as const;
const WIDTHS = [320, 1280] as const;

for (const path of PAGES) {
  for (const scheme of SCHEMES) {
    for (const width of WIDTHS) {
      test(`${path} ${scheme} ${width}px: axe clean`, async ({ page }) => {
        await page.emulateMedia({ colorScheme: scheme, reducedMotion: "reduce" });
        await page.setViewportSize({ width, height: 900 });
        await page.goto(path);
        const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
        expect(results.violations).toEqual([]);
      });
    }

    test(`${path} ${scheme} 320px: no horizontal scroll`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme });
      await page.setViewportSize({ width: 320, height: 900 });
      await page.goto(path);
      const fits = await page.evaluate(
        () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
      );
      expect(fits).toBe(true);
    });
  }
}

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });
  for (const path of PAGES) {
    test(`${path}: content renders`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator("h1")).toBeVisible();
    });
  }
});

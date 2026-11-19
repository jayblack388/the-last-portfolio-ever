import { expect, test } from "@playwright/test";

const ORIGIN = "https://www.johnblackwell.dev";

for (const [path, expected] of [
  ["/", `${ORIGIN}/`],
  ["/about", `${ORIGIN}/about`],
  ["/work/homelab", `${ORIGIN}/work/homelab`],
] as const) {
  test(`${path}: canonical and og:url match the sitemap URL`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", expected);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", expected);
  });
}

test("nav marks the current page and its section", async ({ page }) => {
  await page.goto("/work");
  await expect(page.locator('nav a[href="/work"]')).toHaveAttribute("aria-current", "page");
  await page.goto("/work/homelab");
  await expect(page.locator('nav a[href="/work"]')).toHaveAttribute("aria-current", "true");
  await expect(page.locator('nav a[href="/about"]')).not.toHaveAttribute("aria-current", /.*/);
});

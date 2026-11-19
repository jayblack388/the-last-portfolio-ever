import { expect, test } from "@playwright/test";

test("toggle switches to dark and the choice survives a reload", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  const toggle = page.locator("#theme-toggle");
  await expect(toggle).toHaveAttribute("aria-pressed", "false");
  await toggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(toggle).toHaveAttribute("aria-pressed", "true");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.locator("#theme-toggle")).toHaveAttribute("aria-pressed", "true");
});

test("an unknown stored theme falls back to the system scheme without errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.addInitScript(() => localStorage.setItem("theme", "banana"));
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  expect(errors).toEqual([]);
});

test("reduced motion turns off transitions", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const duration = await page
    .locator("nav a")
    .first()
    .evaluate((el) => getComputedStyle(el).transitionDuration);
  expect(duration).toBe("0s");
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });
  test("the toggle is hidden", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#theme-toggle")).toHaveCount(1);
    await expect(page.locator("#theme-toggle")).toBeHidden();
  });
});

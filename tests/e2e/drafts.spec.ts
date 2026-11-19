import { expect, test } from "@playwright/test";

test("a draft work entry has no page", async ({ request }) => {
  const res = await request.get("/work/example-draft");
  expect(res.status()).toBe(404);
});

test("a draft work entry is not listed", async ({ page }) => {
  await page.goto("/work");
  await expect(page.locator("main")).not.toContainText("Draft fixture");
});

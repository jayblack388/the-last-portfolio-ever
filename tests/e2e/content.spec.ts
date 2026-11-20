import { expect, test } from "@playwright/test";

const PITCH = "Senior software engineer and team lead who builds software that works for everyone.";

test.describe("page content without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("home shows the name, pitch, contact and three featured projects", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toHaveText("John Blackwell");
    await expect(page.locator("main")).toContainText(PITCH);
    await expect(page.locator('main a[href^="mailto:"]')).toHaveCount(1);
    await expect(page.locator("#selected-work article")).toHaveCount(3);
  });

  test("about shows the current role", async ({ page }) => {
    await page.goto("/about");
    await expect(page.locator("main")).toContainText("Senior Software Engineer (Lead)");
    await expect(page.locator("main")).toContainText("Hometap");
  });

  test("consulting covers AI, full stack and frontend work", async ({ page }) => {
    await page.goto("/consulting");
    await expect(page.locator("h1")).toHaveText("Consulting");
    const headings = (await page.locator("main h2, main h3").allInnerTexts()).join(" | ").toLowerCase();
    expect(headings).toContain("ai");
    expect(headings).toContain("full stack");
    expect(headings).toContain("frontend");
    await expect(page.locator('main a[href^="mailto:"]')).toHaveCount(1);
  });

  test("consulting has a community section with reduced or waived rates", async ({ page }) => {
    await page.goto("/consulting");
    const section = page.locator("#community");
    await expect(section.locator("h2")).toContainText(/nonprofits/i);
    const text = (await section.innerText()).toLowerCase();
    expect(text).toContain("reduced");
    expect(text).toContain("waived");
  });
});

test("the resume link downloads a PDF", async ({ page, request }) => {
  await page.goto("/");
  const href = await page.locator("main a", { hasText: /resume/i }).first().getAttribute("href");
  expect(href).toBeTruthy();
  const res = await request.get(href!);
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toMatch(/^application\/pdf/);
});

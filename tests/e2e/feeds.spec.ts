import { expect, test } from "@playwright/test";

test("RSS feed is served and leaves out drafts", async ({ request }) => {
  const res = await request.get("/rss.xml");
  expect(res.status()).toBe(200);
  const body = await res.text();
  expect(body).toContain("<channel>");
  expect(body).not.toContain("Draft post fixture");
});

test("sitemap lists real pages and no drafts", async ({ request }) => {
  const index = await request.get("/sitemap-index.xml");
  expect(index.status()).toBe(200);
  const loc = (await index.text()).match(/<loc>([^<]+)<\/loc>/)?.[1];
  expect(loc).toBeTruthy();
  const sitemap = await request.get(new URL(loc!).pathname);
  expect(sitemap.status()).toBe(200);
  const body = await sitemap.text();
  expect(body).toContain("https://www.johnblackwell.dev/work/homelab");
  expect(body).not.toContain("example-draft");
  expect(body).not.toContain("/404");
});

test("an unknown URL gets a 404 page with a way home", async ({ page }) => {
  const res = await page.goto("/does-not-exist");
  expect(res?.status()).toBe(404);
  await expect(page.locator('main a[href="/"]')).toHaveCount(1);
});

test("the blog index says posts are coming", async ({ page }) => {
  await page.goto("/blog");
  await expect(page.locator("main")).toContainText("First posts are on the way.");
  await expect(page.locator('main a[href="/rss.xml"]')).toHaveCount(1);
});

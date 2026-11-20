import { describe, expect, it, vi } from "vitest";
import worker from "../../worker/index";

const env = () => ({ ASSETS: { fetch: vi.fn(async () => new Response("asset")) } });

describe("worker", () => {
  it("redirects the bare domain to www, keeping path and query", async () => {
    const r = await worker.fetch(new Request("https://johnblackwell.dev/work/homelab?x=1"), env());
    expect(r.status).toBe(301);
    expect(r.headers.get("location")).toBe("https://www.johnblackwell.dev/work/homelab?x=1");
  });

  it("redirects plain http on the bare domain to https www", async () => {
    const r = await worker.fetch(new Request("http://johnblackwell.dev/"), env());
    expect(r.headers.get("location")).toBe("https://www.johnblackwell.dev/");
  });

  it("sends the old nonprofits page to the consulting page's community section", async () => {
    const r = await worker.fetch(new Request("https://www.johnblackwell.dev/nonprofits"), env());
    expect(r.status).toBe(301);
    expect(r.headers.get("location")).toBe("https://www.johnblackwell.dev/consulting#community");
  });

  it("redirects the old nonprofits page on the bare domain in one hop", async () => {
    const r = await worker.fetch(new Request("https://johnblackwell.dev/nonprofits.html"), env());
    expect(r.headers.get("location")).toBe("https://www.johnblackwell.dev/consulting#community");
  });

  it("serves assets on www", async () => {
    const e = env();
    const r = await worker.fetch(new Request("https://www.johnblackwell.dev/about"), e);
    expect(await r.text()).toBe("asset");
    expect(e.ASSETS.fetch).toHaveBeenCalledOnce();
  });

  it("serves assets on the workers.dev preview host", async () => {
    const r = await worker.fetch(new Request("https://johnblackwell-dev.example.workers.dev/"), env());
    expect(await r.text()).toBe("asset");
  });
});

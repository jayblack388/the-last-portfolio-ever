// Serves the built site (dist/) as static assets, sends the bare domain to www,
// and keeps old URLs working. wrangler.jsonc sets run_worker_first so every request passes through here.

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

const APEX = "johnblackwell.dev";
const CANONICAL = "https://www.johnblackwell.dev";

// Pages that moved. Keys are paths without ".html"; values are where they live now.
const MOVED: Record<string, string> = {
  "/nonprofits": "/consulting#community",
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const moved = MOVED[url.pathname.replace(/\.html$/, "")];
    if (moved) {
      return Response.redirect(`${CANONICAL}${moved}`, 301);
    }
    if (url.hostname === APEX) {
      return Response.redirect(`${CANONICAL}${url.pathname}${url.search}`, 301);
    }
    return env.ASSETS.fetch(request);
  },
};

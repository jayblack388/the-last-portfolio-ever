// Serves the built site (dist/) as static assets and sends the bare domain to www.
// wrangler.jsonc sets run_worker_first so every request passes through here.

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

const APEX = "johnblackwell.dev";
const CANONICAL = "https://www.johnblackwell.dev";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.hostname === APEX) {
      return Response.redirect(`${CANONICAL}${url.pathname}${url.search}`, 301);
    }
    return env.ASSETS.fetch(request);
  },
};

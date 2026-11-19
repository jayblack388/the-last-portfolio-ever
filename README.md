# johnblackwell.dev

Personal site of John Blackwell. Static [Astro](https://astro.build) site served from a Cloudflare Worker.

## Develop

Needs Node 22.23.4 or newer (see `.nvmrc`).

```bash
npm install
npm run dev          # local dev server
npm run check        # type check
npm run build        # build to dist/
npm run test:unit    # unit tests and the content guard (run after a build)
npm run test:e2e     # accessibility, reflow and page tests in Playwright
E2E_BROWSERS=chromium,firefox,webkit npm run test:e2e
```

## Content

- Projects: `src/content/work/*.md`
- Blog posts: `src/content/blog/*.md` (`draft: true` keeps a post out of the build)
- Names, contact details and links: `src/site.ts`
- Resume PDF: `public/John Blackwell Resume.pdf`, published automatically from the private `resume` repo

## Deploy

CI (`.github/workflows/ci.yml`) runs every check on pull requests and pushes. Pull requests get a Cloudflare preview URL as a comment; pushes to `main` deploy with `wrangler deploy`. `worker/index.ts` serves `dist/` and redirects the bare domain to `www`.

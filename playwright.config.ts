import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { defineConfig, devices } from "@playwright/test";

// On the Raspberry Pi the browsers' system libraries live in a user folder (see hcm-apply's
// scripts/pw-libs.sh) instead of being installed system-wide. Harmless where it doesn't exist.
const localRoot = join(homedir(), ".cache/hcm-apply-pwlibs");
const localLibs = join(localRoot, "usr/lib/aarch64-linux-gnu");
const env: Record<string, string> = Object.fromEntries(
  Object.entries(process.env).filter((e): e is [string, string] => e[1] !== undefined),
);
if (existsSync(localLibs)) {
  env.LD_LIBRARY_PATH = [localLibs, process.env.LD_LIBRARY_PATH].filter(Boolean).join(":");
  process.env.LD_LIBRARY_PATH = env.LD_LIBRARY_PATH;
  process.env.PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS ??= "1";
}
const webkitWrapper = join(localRoot, "webkit-run.sh");

// Run against production with PLAYWRIGHT_BASE_URL=https://www.johnblackwell.dev.
const remote = process.env.PLAYWRIGHT_BASE_URL;
const wanted = (process.env.E2E_BROWSERS ?? "chromium").split(",").map((b: string) => b.trim());
const projects = [
  { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  { name: "firefox", use: { ...devices["Desktop Firefox"] } },
  {
    name: "webkit",
    use: {
      ...devices["Desktop Safari"],
      launchOptions: { env, ...(existsSync(webkitWrapper) ? { executablePath: webkitWrapper } : {}) },
    },
  },
];

export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  workers: process.env.CI ? 4 : 2,
  timeout: 60_000,
  reporter: [["list"]],
  use: {
    baseURL: remote ?? "http://127.0.0.1:4321",
    launchOptions: { env },
  },
  projects: projects.filter((p) => wanted.includes(p.name)),
  webServer: remote
    ? undefined
    : {
        // A plain static server (scripts/serve-dist.mjs) instead of `astro preview`, which leaves
        // a child process running after Playwright stops it.
        command: "npx astro build && exec node scripts/serve-dist.mjs",
        url: "http://127.0.0.1:4321",
        reuseExistingServer: false,
        timeout: 180_000,
      },
});

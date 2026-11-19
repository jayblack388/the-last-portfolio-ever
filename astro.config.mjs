// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.johnblackwell.dev",
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
});

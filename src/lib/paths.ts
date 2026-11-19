/**
 * The public path for a page. With build.format "file", Astro.url.pathname during the
 * build is the output file ("/about.html", "/index.html"); visitors and the sitemap use
 * "/about" and "/".
 */
export function cleanPath(pathname: string): string {
  const path = pathname.replace(/\.html$/, "").replace(/\/index$/, "/");
  return path === "" ? "/" : path;
}

/**
 * aria-current for a nav link: "page" on the page itself, "true" on a page inside its
 * section (/work/homelab for /work), nothing otherwise. "/workshop" is not in "/work".
 */
export function navCurrent(current: string, href: string): "page" | "true" | undefined {
  if (current === href) return "page";
  if (current.startsWith(`${href}/`)) return "true";
  return undefined;
}

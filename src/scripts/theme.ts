export type Theme = "light" | "dark";

/**
 * Which theme to show. A stored "light" or "dark" wins; anything else (nothing stored,
 * an old or corrupted value) follows the system setting.
 * The inline script in src/layouts/Base.astro repeats this rule because it runs before
 * any module loads; keep the two in step.
 */
export function resolveTheme(stored: string | null, systemDark: boolean): Theme {
  if (stored === "light" || stored === "dark") return stored;
  return systemDark ? "dark" : "light";
}

const STORAGE_KEY = "theme";

function readStored(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeStored(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage blocked: the choice lasts for this page only.
  }
}

/** Wires up the #theme-toggle button. Called once per page load. */
export function initThemeToggle(): void {
  const button = document.getElementById("theme-toggle");
  if (!button) return;
  const root = document.documentElement;
  const current = (): Theme =>
    root.dataset.theme === "dark" || root.dataset.theme === "light"
      ? root.dataset.theme
      : resolveTheme(readStored(), matchMedia("(prefers-color-scheme: dark)").matches);

  const sync = () => button.setAttribute("aria-pressed", String(current() === "dark"));
  root.dataset.theme = current();
  sync();
  button.hidden = false;
  button.addEventListener("click", () => {
    const next: Theme = current() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    writeStored(next);
    sync();
  });
}

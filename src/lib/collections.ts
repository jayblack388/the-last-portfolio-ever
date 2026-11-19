/**
 * Published entries of a content collection, sorted. Drafts are dropped unless
 * includeDrafts is set (pages pass import.meta.env.DEV so drafts show only in `astro dev`).
 * Returns a new array; the input is left as it was.
 */
export function selectPublished<T extends { data: { draft: boolean } }>(
  entries: readonly T[],
  opts: { includeDrafts: boolean; compare: (a: T, b: T) => number },
): T[] {
  return entries.filter((e) => opts.includeDrafts || !e.data.draft).sort(opts.compare);
}

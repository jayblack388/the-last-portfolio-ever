import { type CollectionEntry, getCollection } from "astro:content";
import { selectPublished } from "./collections";

/** Published work entries in display order. */
export async function getWork(): Promise<CollectionEntry<"work">[]> {
  return selectPublished(await getCollection("work"), {
    includeDrafts: import.meta.env.DEV,
    compare: (a, b) => a.data.order - b.data.order,
  });
}

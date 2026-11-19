import { type CollectionEntry, getCollection } from "astro:content";
import { selectPublished } from "./collections";

/** Published blog posts, newest first. */
export async function getPosts(): Promise<CollectionEntry<"blog">[]> {
  return selectPublished(await getCollection("blog"), {
    includeDrafts: import.meta.env.DEV,
    compare: (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  });
}

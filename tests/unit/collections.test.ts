import { describe, expect, it } from "vitest";
import { selectPublished } from "../../src/lib/collections";

type Entry = { data: { order: number; draft: boolean } };
const entry = (order: number, draft = false): Entry => ({ data: { order, draft } });
const byOrder = (a: Entry, b: Entry) => a.data.order - b.data.order;

describe("selectPublished", () => {
  it("drops drafts and sorts the rest", () => {
    const result = selectPublished([entry(2), entry(1), entry(0, true)], {
      includeDrafts: false,
      compare: byOrder,
    });
    expect(result.map((x) => x.data.order)).toEqual([1, 2]);
  });

  it("keeps drafts when asked", () => {
    const result = selectPublished([entry(2), entry(0, true)], { includeDrafts: true, compare: byOrder });
    expect(result.map((x) => x.data.order)).toEqual([0, 2]);
  });

  it("does not reorder the caller's array", () => {
    const input = [entry(2), entry(1)];
    selectPublished(input, { includeDrafts: false, compare: byOrder });
    expect(input.map((x) => x.data.order)).toEqual([2, 1]);
  });
});

import { assert } from "chai";
import { sameEnds } from "../src";

describe("sameEnds", () => {
  it("Should return ab", () => {
    const result = sameEnds("abXYab");
    assert.equal(result, "ab");
  });
  it("Should return x", () => {
    const result = sameEnds("xx");
    assert.equal(result, "x");
  });
  it("Should return x", () => {
    const result = sameEnds("xxx");
    assert.equal(result, "x");
  });
});

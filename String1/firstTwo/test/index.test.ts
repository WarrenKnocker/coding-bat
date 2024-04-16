import { describe } from "mocha";
import { assert } from "chai";
import { firstTwo } from "../src";

describe("firstTwo", () => {
  it("should return He", () => {
    const result = firstTwo("Hello");
    assert.equal(result, "He");
  });
  it("should return ab", () => {
    const result = firstTwo("abcdefg");
    assert.equal(result, "ab");
  });
  it("should return ab", () => {
    const result = firstTwo("ab");
    assert.equal(result, "ab");
  });
});

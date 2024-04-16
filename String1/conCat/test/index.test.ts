import { assert } from "chai";
import { conCat } from "../src";

describe("conCat", () => {
  it("Should return abcat", () => {
    const result = conCat("abc", "cat");
    assert.equal(result, "abcat");
  });
  it("Should return dogcat", () => {
    const result = conCat("dog", "cat");
    assert.equal(result, "dogcat");
  });
  it("Should return abc", () => {
    const result = conCat("abc", "");
    assert.equal(result, "abc");
  });
});

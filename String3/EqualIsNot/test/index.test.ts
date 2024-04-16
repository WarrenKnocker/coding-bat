import { assert } from "chai";
import { equalIsNot } from "../src";

describe("equalIsNot", () => {
  it("Should return false", () => {
    const result = equalIsNot("This is not");
    assert.equal(result, false);
  });
  it("Should return true", () => {
    const result = equalIsNot("This is notnot");
    assert.equal(result, true);
  });
  it("Should return true", () => {
    const result = equalIsNot("noisxxnotyynotxisi");
    assert.equal(result, true);
  });
});

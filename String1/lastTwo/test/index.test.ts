import { assert } from "chai";
import { lastTwo } from "../src";

describe("lastTwo", () => {
  it("Should return codign", () => {
    const result = lastTwo("coding");
    assert.equal(result, "codign");
  });
  it("Should return cta", () => {
    const result = lastTwo("cat");
    assert.equal(result, "cta");
  });
  it("Should return ba", () => {
    const result = lastTwo("ab");
    assert.equal(result, "ba");
  });
});

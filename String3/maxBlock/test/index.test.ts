import { assert } from "chai";
import { maxBlock } from "../src";

describe("maxBlock", () => {
  it("Should return 2", () => {
    const result = maxBlock("hoopla");
    assert.equal(result, 2);
  });
  it("Should return 3", () => {
    const result = maxBlock("abbCCCddBBBxx");
    assert.equal(result, 3);
  });
  it("Should return 0", () => {
    const result = maxBlock("");
    assert.equal(result, 0);
  });
});

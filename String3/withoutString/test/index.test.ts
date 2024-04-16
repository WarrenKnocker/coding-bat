import { assert } from "chai";
import { withoutString } from "../src";

describe("withoutString", () => {
  it("Should return He there ", () => {
    const result = withoutString("Hello there", "llo");
    assert.equal(result, "He there");
  });
  it("Should return Hllo thr ", () => {
    const result = withoutString("Hello there", "e");
    assert.equal(result, "Hllo thr");
  });
  it("Should return Hello there ", () => {
    const result = withoutString("Hello there", "x");
    assert.equal(result, "Hello there");
  });
});

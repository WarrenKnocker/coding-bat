import { assert } from "chai";
import { withoutX } from "../src";

describe("withoutX", () => {
  it("Should return Hi ", () => {
    const result = withoutX("xHix");
    assert.equal(result, "Hi");
  });
  it("Should return Hi ", () => {
    const result = withoutX("xHi");
    assert.equal(result, "Hi");
  });
  it("Should return Hxix ", () => {
    const result = withoutX("Hxix");
    assert.equal(result, "Hxi");
  });
});

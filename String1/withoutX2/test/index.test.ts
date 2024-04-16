import { assert } from "chai";
import { withoutX2 } from "../src";

describe("", () => {
  it("Should return Hi", () => {
    const result = withoutX2("xHi");
    assert.equal(result, "Hi");
  });
  it("Should return Hi", () => {
    const result = withoutX2("Hxi");
    assert.equal(result, "Hi");
  });
  it("Should return Hi", () => {
    const result = withoutX2("Hi");
    assert.equal(result, "Hi");
  });
});

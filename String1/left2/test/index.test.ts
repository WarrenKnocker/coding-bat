import { assert } from "chai";
import { left2 } from "../src";

describe("left2", () => {
  it("Should return lloHe", () => {
    const result = left2("Hello");
    assert.equal(result, "lloHe");
  });
  it("Should return vaja", () => {
    const result = left2("java");
    assert.equal(result, "vaja");
  });
  it("Should return Hi", () => {
    const result = left2("Hi");
    assert.equal(result, "Hi");
  });
});

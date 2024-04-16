import { describe } from "mocha";
import { assert } from "chai";
import { firstHalf } from "../src";

describe("extraEnd", () => {
  it("should return Woo", () => {
    const result = firstHalf("WooHoo");
    assert.equal(result, "Woo");
  });
  it("should return Hello", () => {
    const result = firstHalf("HelloThere");
    assert.equal(result, "Hello");
  });
  it("should return abc", () => {
    const result = firstHalf("abcdef");
    assert.equal(result, "abc");
  });
});

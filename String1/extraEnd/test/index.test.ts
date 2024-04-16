import { describe } from "mocha";
import { assert } from "chai";
import { extraEnd } from "../src";

describe("extraEnd", () => {
  it("should return lololo", () => {
    const result = extraEnd("Hello");
    assert.equal(result, "lololo");
  });
  it("should return ababab", () => {
    const result = extraEnd("ab");
    assert.equal(result, "ababab");
  });
  it("should return HiHiHi", () => {
    const result = extraEnd("Hi");
    assert.equal(result, "HiHiHi");
  });
});

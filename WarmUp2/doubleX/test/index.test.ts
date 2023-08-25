import { assert } from "chai";
import { describe } from "mocha";
import { doubleX } from "../src";

/*
Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".


doubleX("axxbb") → true
doubleX("axaxax") → false
doubleX("xxxxx") → true
*/

describe("doubleX", () => {
  it("Should return true if given the string 'axxbb' ", () => {
    const result = doubleX("axxbb");
    assert.equal(result, true);
  });
  it("Should return flase if given the string 'axaxax' ", () => {
    const result = doubleX("axaxax");
    assert.equal(result, false);
  });
  it("Should return true if given the string 'xxxxx' ", () => {
    const result = doubleX("xxxxx");
    assert.equal(result, true);
  });
});

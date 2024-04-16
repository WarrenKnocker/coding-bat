import { assert } from "chai";
import { describe } from "mocha";
import { countXX } from "../src";

/*
Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".


countXX("abcxx") → 1
countXX("xxx") → 2
countXX("xxxx") → 3
*/

describe("countXX", () => {
  it("Should return 1 if given the string 'abcxx' ", () => {
    const result = countXX("abcxx");
    assert.equal(result, 1);
  });
  it("Should return 2 if given the string 'xxx' ", () => {
    const result = countXX("xxx");
    assert.equal(result, 2);
  });
  it("Should return 3 if given the string 'xxxx' ", () => {
    const result = countXX("xxxx");
    assert.equal(result, 3);
  });
});

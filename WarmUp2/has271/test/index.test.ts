import { assert } from "chai";
import { describe } from "mocha";
import { has271 } from "../src";

/*
Given an array of ints, return true if it contains a 2, 7, 1 pattern: 
a value, followed by the value plus 5, 
followed by the value minus 1. Additionally the 271 counts even if the "1" differs by 2 or less from the correct value.


has271([1, 2, 7, 1]) → true
has271([1, 2, 8, 1]) → false
has271([2, 7, 1]) → true
*/

describe("has271", () => {
  it("Should true if there is a 2,7,5 pattern in [1, 2, 7, 1]", () => {
    const result = has271([1, 2, 7, 1]);
    assert.equal(result, true);
  });
  it("Should false if there is a 2,7,5 pattern in [1, 2, 8, 1]", () => {
    const result = has271([1, 2, 8, 1]);
    assert.equal(result, false);
  });
  it("Should true if there is a 2,7,5 pattern in [2, 7, 1]", () => {
    const result = has271([2, 7, 1]);
    assert.equal(result, true);
  });
});

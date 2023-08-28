import { assert } from "chai";
import { describe } from "mocha";
import { array123 } from "../src";

/*

Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.


array123([1, 1, 2, 3, 1]) → true
array123([1, 1, 2, 4, 1]) → false
array123([1, 1, 2, 1, 2, 3]) → true
*/

describe("array123", () => {
  it("should return true if the sequence 1,2,3 aprears anywhere in the array ", () => {
    const result = array123([1, 1, 2, 3, 1]);
    assert.equal(result, true);
  });
  it("should return false if the sequence 1,2,3 does nmot aprear anywhere in the array", () => {
    const result = array123([1, 1, 2, 4, 1]);
    assert.equal(result, false);
  });
  it("should return true if the sequence 1,2,3 aprears anywhere in the array", () => {
    const result = array123([1, 1, 2, 1, 2, 3]);
    assert.equal(result, true);
  });
});

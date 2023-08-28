import { assert } from "chai";
import { describe } from "mocha";
import { arrayFront9 } from "../src";

/*
Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.


arrayFront9([1, 2, 9, 3, 4]) → true
arrayFront9([1, 2, 3, 4, 9]) → false
arrayFront9([1, 2, 3, 4, 5]) → false
*/

describe("arrayFront9", () => {
  it("should return true if one of the first 4 elements in the array is a 9", () => {
    const result = arrayFront9([1, 2, 9, 3, 4]);
    assert.equal(result, true);
  });
  it("should return false if 9 is not one of the first 4 elements in the array", () => {
    const result = arrayFront9([1, 2, 3, 4, 9]);
    assert.equal(result, false);
  });
  it("should return true if one of the first 4 elements in the array is a 9", () => {
    const result = arrayFront9([1, 2, 3, 4, 5]);
    assert.equal(result, false);
  });
});

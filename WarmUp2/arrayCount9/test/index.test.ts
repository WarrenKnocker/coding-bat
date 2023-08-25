import { assert } from "chai";
import { describe } from "mocha";
import { arrayCount9 } from "../src";

/*
Given an array of ints, return the number of 9's in the array.


arrayCount9([1, 2, 9]) → 1
arrayCount9([1, 9, 9]) → 2
arrayCount9([1, 9, 9, 3, 9]) → 3
*/

describe("arrayCount9", () => {
  it("Should return 1 if 9 apears once in the array ", () => {
    const result = arrayCount9([1, 2, 9]);
    assert.equal(result, 1);
  });
  it("Should return 2 if 9 apears twice in the array ", () => {
    const result = arrayCount9([1, 9, 9]);
    assert.equal(result, 2);
  });
  it("Should return 3 if 9 apears three times in the array ", () => {
    const result = arrayCount9([1, 9, 9, 3, 9]);
    assert.equal(result, 3);
  });
});

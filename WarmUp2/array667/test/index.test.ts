import { assert } from "chai";
import { describe } from "mocha";
import { array667 } from "../src";

/*

Given an array of ints, return the number of times that two 6's are next to each other in the array. 
Also count instances where the second "6" is actually a 7.


array667([6, 6, 2]) → 1
array667([6, 6, 2, 6]) → 1
array667([6, 7, 2, 6]) → 1
*/

describe("array667", () => {
  it("Should return 1 if given the array [6, 6, 2]", () => {
    const result = array667([6, 6, 2]);
    assert.equal(result, 1);
  });
  it("Should return 1 if given the array [6, 6, 2, 6]", () => {
    const result = array667([6, 6, 2, 6]);
    assert.equal(result, 1);
  });
  it("Should return 1 if given the array [6, 7, 2, 6]", () => {
    const result = array667([6, 7, 2, 6]);
    assert.equal(result, 1);
  });
});

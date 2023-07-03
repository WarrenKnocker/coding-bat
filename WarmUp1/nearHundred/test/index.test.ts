//public boolean nearHundred(int n) {
/*
Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.


nearHundred(93) → true
nearHundred(90) → true
nearHundred(89) → false

*/

import { assert } from "chai";
import { nearHundred } from "../src";

describe("nearHundred", () => {
  //nearHundred(93) → true

  it("should return true if nearHundred is >=90 and <=110 || nearHundred >=190 is and <=210", () => {
    const result = nearHundred(93);
    assert.equal(result, true);
  });

  it("should return true if nearHundred is >=90 and <=110 || nearHundred >=190 is and <=210", () => {
    const result = nearHundred(90);
    assert.equal(result, true);
  });

  it("should return true if nearHundred is >=90 and <=110 || nearHundred >= 190 is and <= 210", () => {
    const result = nearHundred(89);
    assert.equal(result, false);
  });
});

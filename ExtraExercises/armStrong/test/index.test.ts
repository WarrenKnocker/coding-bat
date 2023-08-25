import { assert } from "chai";
import { describe } from "mocha";
import { armStrong } from "../src";

/*
An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.

For example:

9 is an Armstrong number, because 9 = 9^1 = 9
10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
Write some code to determine whether a number is an Armstrong number.
*/

describe("armStrong", () => {
  it("Should return true because 9 is an Armstrong number", () => {
    const result = armStrong(9);
    assert.equal(result, true);
  });
  it("Should return false because 10 is not an Armstrong number", () => {
    const result = armStrong(10);
    assert.equal(result, false);
  });
  it("Should return true because 9 is an Armstrong number", () => {
    const result = armStrong(153);
    assert.equal(result, true);
  });
  it("Should return false because 9 is not an Armstrong number", () => {
    const result = armStrong(154);
    assert.equal(result, false);
  });
});

import { describe } from "mocha";
import { assert } from "chai";
import { loneTeen } from "../src";

/* 
We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.


loneTeen(13, 99) → true
loneTeen(21, 19) → true
loneTeen(13, 13) → false

*/

describe("loneTeen", () => {
  it("Should return true if the first number is in the range 13..19 and the second number is not", () => {
    const result = loneTeen(13, 99);
    assert.equal(result, true);
  });
  it("Should return true if the second number is in the range 13..19 and the first number is not", () => {
    const result = loneTeen(13, 99);
    assert.equal(result, true);
  });
  it("Should return false if both numbers are in range of 13 .. 19", () => {
    const result = loneTeen(13, 99);
    assert.equal(result, false);
  });
});

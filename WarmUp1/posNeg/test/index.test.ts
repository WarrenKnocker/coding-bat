import { assert, should } from "chai";
import { posNeg } from "../src/index";

/* 

Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.


posNeg(1, -1, false) → true
posNeg(-1, 1, false) → true
posNeg(-4, -5, true) → true

*/

describe("posNeg", () => {
  it("should return true if given if given (1, -1, false)", () => {
    const result = posNeg(1, -1, false);
    assert.equal(result, true);
  });

  it("should return true if given if given (-1, 1, false)", () => {
    const result = posNeg(-1, 1, false);
    assert.equal(result, true);
  });

  it("should return ture if parameter 'negative is true' ", () => {
    const result = posNeg(-4, -5, true);
    assert.equal(result, true);
  });
});

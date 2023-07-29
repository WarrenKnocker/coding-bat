import { assert } from "chai";
import { sumDouble } from "../src/index";

/*
Given two int values, return their sum. Unless the two values are the same, then return double their sum.


sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8

*/

describe("sumDouble", () => {
  it("Should return 3 as the sum of (1, 2)", () => {
    const result = sumDouble(1, 2);
    assert.equal(result, 3);
  });

  it("Should return 5, as the sum of (3, 2)", () => {
    const result = sumDouble(3, 2);
    assert.equal(result, 5);
  });

  it("Should return 8 as the sum of (2, 2), doubled", () => {
    const result = sumDouble(2, 2);
    assert.equal(result, 8);
  });
});

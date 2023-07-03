import { assert } from "chai";
import { sumDouble } from "../src/index";

/*
Given two int values, return their sum. Unless the two values are the same, then return double their sum.


sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8

*/

describe("sumDouble", () => {
  it("Should return the sum of the two int values, if two values are the same it should return double thier sum", () => {
    const result = sumDouble(1, 2);
    assert.equal(result, 3);
  });

  it("Should return the sum of the two int values, if two values are the same it should return double thier sum", () => {
    const result = sumDouble(3, 2);
    assert.equal(result, 5);
  });

  it("Should return the sum of the two int values, if two values are the same it should return double thier sum", () => {
    const result = sumDouble(2, 2);
    assert.equal(result, 8);
  });
});

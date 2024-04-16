import { assert } from "chai";
import { doubling } from "../src/index";
import { describe } from "mocha";

/*
Given a list of integers, return a list where each integer is multiplied by 2.


doubling([1, 2, 3]) → [2, 4, 6]
doubling([6, 8, 6, 8, -1]) → [12, 16, 12, 16, -2]
doubling([]) → []
*/

describe("doubling", () => {
  it("Should return a doubled array from the given array [1, 2, 3]", () => {
    const result = doubling([1, 2, 3]);
    assert.equal(result, [2, 4, 6]);
  });

  it("Should return a doubled from the given array [6, 8, 6, 8, -1]]", () => {
    const result = doubling([6, 8, 6, 8, -1]);
    assert.equal(result, [12, 16, 12, 16, -2]);
  });

  it("Should return an empty array from the given array []", () => {
    const result = doubling([]);
    assert.equal(result, []);
  });
});

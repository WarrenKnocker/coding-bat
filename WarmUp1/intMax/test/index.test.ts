import { assert, should } from "chai";
import { intMax } from "../src/index";

/*
Given three int values, a b c, return the largest.

intMax(1, 2, 3) → 3
intMax(1, 3, 2) → 3
intMax(3, 2, 1) → 3
*/

describe("intMax", () => {
  it("Should return 3 when given the integer parameters 1, 2, 3 ", () => {
    const result = intMax(1, 2, 3);
    assert.equal(result, 3);
  });

  it("Should return 3 when given the integer parameters 1, 3, 2 ", () => {
    const result = intMax(1, 3, 2);
    assert.equal(result, 3);
  });

  it("Should return 3 when given the integer parameters 3, 2, 1 ", () => {
    const result = intMax(3, 2, 1);
    assert.equal(result, 3);
  });
});

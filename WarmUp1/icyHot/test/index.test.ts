import { assert, should } from "chai";
import { icyHot } from "../src/index";

/*
Given two temperatures, return true if one is less than 0 and the other is greater than 100.


icyHot(120, -1) → true
icyHot(-1, 120) → true
icyHot(2, 120) → false
*/

describe("icyHot", () => {
  it("Should return true if given the parameters (120, -1)", () => {
    const result = icyHot(120, -1);
    assert.equal(result, true);
  });

  it("Should return true if given the parameters (-1, 120)", () => {
    const result = icyHot(-1, 120);
    assert.equal(result, true);
  });

  it("Should return flase if given the parameters (2, 120)", () => {
    const result = icyHot(2, 120);
    assert.equal(result, false);
  });
});

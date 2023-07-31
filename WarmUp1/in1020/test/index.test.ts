import { assert, should } from "chai";
import { in1020 } from "../src/index";

/*
Given 2 int values, return true if either of them is in the range 10..20 inclusive.


in1020(12, 99) → true
in1020(21, 12) → true
in1020(8, 99) → false
*/

describe("in1020", () => {
  it("Should return true if given the parameters (12, 99)", () => {
    const result = in1020(12, 99);
    assert.equal(result, true);
  });

  it("Should return true if given the parameters (21, 12)", () => {
    const result = in1020(21, 12);
    assert.equal(result, true);
  });

  it("Should return flase if given the parameters (8, 99)", () => {
    const result = in1020(8, 99);
    assert.equal(result, false);
  });
});

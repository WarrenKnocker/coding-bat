import { assert, should } from "chai";
import { max1020 } from "../src/index";

/* 

Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.


max1020(11, 19) → 19
max1020(19, 11) → 19
max1020(11, 9) → 11
*/

describe("max1020", () => {
  it("Should return 19 if given the parameters (11, 19)", () => {
    const result = max1020(11, 19);
    assert.equal(result, 19);
  });

  it("Should return 19 if given the parameters (19, 11)", () => {
    const result = max1020(19, 11);
    assert.equal(result, 19);
  });

  it("Should return 11 if given the parameters (11, 9)", () => {
    const result = max1020(11, 9);
    assert.equal(result, 11);
  });

  it("Should return 0 if given the parameters (50, 1)", () => {
    const result = max1020(50, 1);
    assert.equal(result, 0);
  });
});

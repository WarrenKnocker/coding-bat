import { assert, should } from "chai";
import { hasTeen } from "../src/index";

/*
We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.


hasTeen(13, 20, 10) → true
hasTeen(20, 19, 10) → true
hasTeen(20, 10, 13) → true
*/

describe("hasTeen", () => {
  it("Should return true if given the parameters (13, 20, 10)", () => {
    const result = hasTeen(13, 20, 10);
    assert.equal(result, true);
  });

  it("Should return true if given the parameters (20, 19, 10)", () => {
    const result = hasTeen(20, 19, 10);
    assert.equal(result, true);
  });

  it("Should return true if given the parameters (20, 10, 13)", () => {
    const result = hasTeen(20, 10, 13);
    assert.equal(result, true);
  });

  it("Should return false of non of the numbers are in the range 13..19", () => {
    const result = hasTeen(9, 8, 7);
    assert.equal(result, false);
  });
});

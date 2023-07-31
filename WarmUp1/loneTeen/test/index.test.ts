import { assert, should } from "chai";
import { loneTeen } from "../src/index";

/*

We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.


loneTeen(13, 99) → true
loneTeen(21, 19) → true
loneTeen(13, 13) → false
*/

describe("loneTeen", () => {
  it("Should return true if given the parameters (13, 99)", () => {
    const result = loneTeen(13, 99);
    assert.equal(result, true);
  });

  it("Should return true if given the parameters (21, 19)", () => {
    const result = loneTeen(21, 19);
    assert.equal(result, true);
  });

  it("Should return false if given the parameters (13, 13)", () => {
    const result = loneTeen(13, 13);
    assert.equal(result, false);
  });
});

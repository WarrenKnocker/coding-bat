import { assert, should } from "chai";
import { or35 } from "../src/index";

/* 


Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod" operator -- see Introduction to Mod


or35(3) → true
or35(10) → true
or35(8) → false

*/

describe("or35", () => {
  it("should return true if given 3 as the number perameter", () => {
    const result = or35(3);
    assert.equal(result, true);
  });

  it("should return true if given 10 as the number perameter", () => {
    const result = or35(10);
    assert.equal(result, true);
  });

  it("should return false if given 8 as the number perameter", () => {
    const result = or35(8);
    assert.equal(result, false);
  });
});

import { assert } from "chai";
import { middleThree } from "../src";

describe("Middle 3", () => {
  it("Should return and", () => {
    const result = middleThree("Candy");
    assert.equal(result, "and");
  });
  it("Should return and", () => {
    const result = middleThree("and");
    assert.equal(result, "and");
  });
  it("Should return lvi", () => {
    const result = middleThree("solving");
    assert.equal(result, "lvi");
  });
});

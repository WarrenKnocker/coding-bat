import { assert } from "chai";
import { sumDigits } from "../src";

describe("sumDigits", () => {
  it("Should return 6", () => {
    const result = sumDigits("aa1bc2d3");
    assert.equal(result, 6);
  });
  it("Should return 8", () => {
    const result = sumDigits("aa11b33");
    assert.equal(result, 8);
  });
  it("Should return 0", () => {
    const result = sumDigits("Chocolate");
    assert.equal(result, 0);
  });
});

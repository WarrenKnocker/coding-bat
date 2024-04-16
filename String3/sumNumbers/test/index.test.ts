import { assert } from "chai";
import { sumNumbers } from "../src";

describe("sumDigits", () => {
  it("Should return 123", () => {
    const result = sumNumbers("abc123xyz");
    assert.equal(result, 123);
  });
  it("Should return 44", () => {
    const result = sumNumbers("aa11b33");
    assert.equal(result, 44);
  });
  it("Should return 18", () => {
    const result = sumNumbers("7 11");
    assert.equal(result, 18);
  });
});

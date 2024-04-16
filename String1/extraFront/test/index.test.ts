import { assert } from "chai";
import { extraFront } from "../src";

describe("extraFront", () => {
  it("Should return HeHeHe", () => {
    const result = extraFront("Hello");
    assert.equal(result, "HeHeHe");
  });
  it("Should return ababab", () => {
    const result = extraFront("ab");
    assert.equal(result, "ababab");
  });
  it("Should return HHH", () => {
    const result = extraFront("H");
    assert.equal(result, "HHH");
  });
});

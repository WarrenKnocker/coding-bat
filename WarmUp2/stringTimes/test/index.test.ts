import { assert } from "chai";
import { describe } from "mocha";
import { stringTimes } from "../src";

describe("stringTimes", () => {
  it("Should return 2 copies of the string", () => {
    const result = stringTimes("Hi", 2);
    assert.equal(result, "HiHi");
  });
  it("Should return 3 copies of the string", () => {
    const result = stringTimes("Hi", 3);
    assert.equal(result, "HiHiHi");
  });
  it("Should return 1 copies of the string", () => {
    const result = stringTimes("Hi", 3);
    assert.equal(result, "HiHiHi");
  });
});

import { assert } from "chai";
import { frontAgain } from "../src";

describe("ftontAgain", () => {
  it("Should return true", () => {
    const result = frontAgain("edited");
    assert.equal(result, true);
  });
  it("Should return false", () => {
    const result = frontAgain("edit");
    assert.equal(result, false);
  });
  it("Should return true", () => {
    const result = frontAgain("ed");
    assert.equal(result, true);
  });
});

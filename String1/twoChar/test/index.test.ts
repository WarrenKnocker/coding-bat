import { assert } from "chai";
import { twoChar } from "../src";

describe("twoChar", () => {
  it("Should return ja", () => {
    const result = twoChar("java", 0);
    assert.equal(result, "ja");
  });
  it("Should return va", () => {
    const result = twoChar("java", 2);
    assert.equal(result, "va");
  });
  it("Should return ja", () => {
    const result = twoChar("java", 3);
    assert.equal(result, "ja");
  });
});

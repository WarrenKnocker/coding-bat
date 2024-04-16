import { assert } from "chai";
import { hasBad } from "../src";

describe("hasBad", () => {
  it("Should return true", () => {
    const result = hasBad("badxx");
    assert.equal(result, true);
  });
  it("Should return true", () => {
    const result = hasBad("xbadxx");
    assert.equal(result, true);
  });
  it("Should return false", () => {
    const result = hasBad("xxbadxx");
    assert.equal(result, false);
  });
});

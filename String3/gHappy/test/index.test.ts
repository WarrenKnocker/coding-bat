import { assert } from "chai";
import { gHappy } from "../src";

describe("gHappy", () => {
  it("Should return ture", () => {
    const result = gHappy("xxggxx");
    assert.equal(result, true);
  });
  it("Should return flase", () => {
    const result = gHappy("xxgxx");
    assert.equal(result, false);
  });
  it("Should return false", () => {
    const result = gHappy("xxggyygxx");
    assert.equal(result, false);
  });
});

import { assert } from "chai";
import { endsLy } from "../src";

describe("endly", () => {
  it("Should return true", () => {
    const result = endsLy("oddly");
    assert.equal(result, true);
  });
  it("Should return false", () => {
    const result = endsLy("y");
    assert.equal(result, false);
  });
  it("Should return false", () => {
    const result = endsLy("oddy");
    assert.equal(result, false);
  });
});

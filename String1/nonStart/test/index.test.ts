import { assert } from "chai";
import { nonStart } from "../src";

describe("nonStart", () => {
  it("Should return ellohere", () => {
    const result = nonStart("Hello", "There");
    assert.equal(result, "ellohere");
  });
  it("Should return avaode", () => {
    const result = nonStart("java", "code");
    assert.equal(result, "avaode");
  });
  it("Should return hotlava", () => {
    const result = nonStart("shotl", "java");
    assert.equal(result, "hotlava");
  });
});

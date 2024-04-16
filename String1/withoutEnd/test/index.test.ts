import { describe } from "mocha";
import { assert } from "chai";
import { withoutEnd } from "../src";

describe("withoutEnd", () => {
  it("should return ell", () => {
    const result = withoutEnd("Hello");
    assert.equal(result, "ell");
  });
  it("should return av", () => {
    const result = withoutEnd("java");
    assert.equal(result, "av");
  });
  it("should return odin", () => {
    const result = withoutEnd("coding");
    assert.equal(result, "odin");
  });
});

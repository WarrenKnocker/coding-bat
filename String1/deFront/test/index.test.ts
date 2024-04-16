import { assert } from "chai";
import { deFront } from "../src";

describe("deFront", () => {
  it("Should return llo", () => {
    const result = deFront("Hello");
    assert.equal(result, "llo");
  });
  it("Should return va", () => {
    const result = deFront("java");
    assert.equal(result, "va");
  });
  it("Should return aay", () => {
    const result = deFront("away");
    assert.equal(result, "aay");
  });
});

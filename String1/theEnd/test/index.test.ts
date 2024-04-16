import { assert } from "chai";
import { theEnd } from "../src";

describe("theEnd", () => {
  it("Should return H", () => {
    const reuslt = theEnd("Hello", true);
    assert.equal(reuslt, "H");
  });
  it("Should return H", () => {
    const reuslt = theEnd("Hello", false);
    assert.equal(reuslt, "o");
  });
  it("Should return 0", () => {
    const reuslt = theEnd("oh", true);
    assert.equal(reuslt, "o");
  });
});

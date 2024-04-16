import { assert } from "chai";
import { notReplace } from "../src";

describe("notReplace", () => {
  it("Should return is not test", () => {
    const result = notReplace("is test");
    assert.equal(result, "is not test");
  });
  it("Should return is not-is not", () => {
    const result = notReplace("is-is");
    assert.equal(result, "is not-is not");
  });
  it("Should return This is not right", () => {
    const result = notReplace("This is right");
    assert.equal(result, "This is not right");
  });
});

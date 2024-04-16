import { assert } from "chai";
import { lastChars } from "../src";

describe("lastChar", () => {
  it("Should return ls ", () => {
    const result = lastChars("last", "chars");
    assert.equal(result, "ls");
  });
  it("Should return ya ", () => {
    const result = lastChars("yo", "java");
    assert.equal(result, "ya");
  });
  it("Should return h@ ", () => {
    const result = lastChars("hi", "");
    assert.equal(result, "h@");
  });
});

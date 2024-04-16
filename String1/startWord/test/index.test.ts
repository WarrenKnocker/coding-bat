import { assert } from "chai";
import { startWord } from "../src";

describe("startWord", () => {
  it("Should return hi ", () => {
    const result = startWord("hippo", "hi");
    assert.equal(result, "hi");
  });
  it("Should return hip ", () => {
    const result = startWord("hippo", "xip");
    assert.equal(result, "hip");
  });
  it("Should return h ", () => {
    const result = startWord("hippo", "i");
    assert.equal(result, "h");
  });
});

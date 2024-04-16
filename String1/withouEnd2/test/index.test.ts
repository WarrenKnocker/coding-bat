import { assert } from "chai";
import { withouEnd2 } from "../src";

describe("withouEnd2", () => {
  it("Should return ell", () => {
    const result = withouEnd2("Hello");
    assert.equal(result, "ell");
  });
  it("Should return b", () => {
    const result = withouEnd2("abc");
    assert.equal(result, "b");
  });
  it("Should return '' ", () => {
    const result = withouEnd2("ab");
    assert.equal(result, "");
  });
});

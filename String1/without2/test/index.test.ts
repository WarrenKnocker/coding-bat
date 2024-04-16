import { assert } from "chai";
import { without2 } from "../src";

describe("without2", () => {
  it("Should return lloHe", () => {
    const result = without2("HelloHe");
    assert.equal(result, "lloHe");
  });
  it("Should return HelloHi", () => {
    const result = without2("HelloHi");
    assert.equal(result, "HelloHi");
  });
  it("Should return '' ", () => {
    const result = without2("Hi");
    assert.equal(result, "");
  });
});

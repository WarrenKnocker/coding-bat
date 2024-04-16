import { assert } from "chai";
import { seeColor } from "../src";

describe("seeColor", () => {
  it("Should return red", () => {
    const result = seeColor("redxx");
    assert.equal(result, "red");
  });
  it("Should return '' ", () => {
    const result = seeColor("xxred");
    assert.equal(result, "");
  });
  it("Should return blue", () => {
    const result = seeColor("blueTimes");
    assert.equal(result, "blue");
  });
});

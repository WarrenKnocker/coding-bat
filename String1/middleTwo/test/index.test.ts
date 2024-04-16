import { assert } from "chai";
import { middleTwo } from "../src";

describe("middleTwo", () => {
  it("Should return ri", () => {
    const result = middleTwo("string");
    assert.equal(result, "ri");
  });
  it("Should return od", () => {
    const result = middleTwo("code");
    assert.equal(result, "od");
  });
  it("Should return ct", () => {
    const result = middleTwo("Practice");
    assert.equal(result, "ct");
  });
});

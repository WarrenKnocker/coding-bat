import { assert } from "chai";
import { atFirst } from "../src";

describe("atFirst", () => {
  it("Should return he", () => {
    const result = atFirst("hello");
    assert.equal(result, "he");
  });
  it("Should return hi", () => {
    const result = atFirst("hi");
    assert.equal(result, "hi");
  });
  it("Should return h@", () => {
    const result = atFirst("h");
    assert.equal(result, "h@");
  });
});

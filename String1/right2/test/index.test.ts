import { assert } from "chai";
import { right2 } from "../src";

describe("right2", () => {
  it("Should return loHel", () => {
    const result = right2("Hello");
    assert.equal(result, "loHel");
  });
  it("Should return vaja", () => {
    const result = right2("java");
    assert.equal(result, "vaja");
  });
  it("Should return Hi", () => {
    const result = right2("Hi");
    assert.equal(result, "Hi");
  });
});

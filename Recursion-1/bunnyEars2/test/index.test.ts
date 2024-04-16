import { assert } from "chai";
import { bunnyears2 } from "../src";

describe("bunnyEars2", () => {
  it("should return 0", () => {
    const result = bunnyears2(0);
    assert.equal(result, 0);
  });
  it("should return 2", () => {
    const result = bunnyears2(1);
    assert.equal(result, 2);
  });
  it("should return 5", () => {
    const result = bunnyears2(2);
    assert.equal(result, 5);
  });
  it("should return 7", () => {
    const result = bunnyears2(3);
    assert.equal(result, 7);
  });
  it("should return 5", () => {
    const result = bunnyears2(4);
    assert.equal(result, 10);
  });
});

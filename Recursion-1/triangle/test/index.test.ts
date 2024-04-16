import { assert } from "chai";
import { describe } from "mocha";
import { triangle } from "../src";

describe("triangle", () => {
  it("should return the total number of blocks (0)", () => {
    const result = triangle(0);
    assert.equal(result, 0);
  });
  it("should return the total number of blocks (1)", () => {
    const result = triangle(1);
    assert.equal(result, 1);
  });
  it("should return the total number of blocks (3)", () => {
    const result = triangle(2);
    assert.equal(result, 3);
  });
  it("should return the total number of blocks (6)", () => {
    const result = triangle(3);
    assert.equal(result, 6);
  });
  it("should return the total number of blocks (10)", () => {
    const result = triangle(4);
    assert.equal(result, 10);
  });
});

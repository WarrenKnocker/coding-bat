import { assert } from "chai";
import { bunnyEars } from "../src";

describe("bunnyEars", () => {
  it("should return the total amount of ears", () => {
    const result = bunnyEars(4);
    assert.equal(result, 8);
  });
  it("should return the total amount of ears", () => {
    const result = bunnyEars(8);
    assert.equal(result, 16);
  });
  it("should return the total amount of ears", () => {
    const result = bunnyEars(32);
    assert.equal(result, 64);
  });
  it("should return the total amount of ears", () => {
    const result = bunnyEars(100);
    assert.equal(result, 200);
  });
});

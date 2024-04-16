import { assert } from "chai";
import { describe } from "mocha";
import { fibonacci } from "../src";

describe("finbonacci", () => {
  it("Should return the sum of the previous two numbers", () => {
    const result = fibonacci(0);
    assert.equal(result, 0);
  });
  it("Should return the sum of the previous two numbers", () => {
    const result = fibonacci(1);
    assert.equal(result, 1);
  });
  it("Should return the sum of the previous two numbers", () => {
    const result = fibonacci(2);
    assert.equal(result, 1);
  });
  it("Should return the sum of the previous two numbers", () => {
    const result = fibonacci(3);
    assert.equal(result, 2);
  });
  it("Should return the sum of the previous two numbers", () => {
    const result = fibonacci(4);
    assert.equal(result, 3);
  });
  it("Should return the sum of the previous two numbers", () => {
    const result = fibonacci(5);
    assert.equal(result, 5);
  });
  it("Should return the sum of the previous two numbers", () => {
    const result = fibonacci(6);
    assert.equal(result, 8);
  });
});

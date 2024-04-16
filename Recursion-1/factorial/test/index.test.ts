import { assert } from "chai";
import { describe } from "mocha";
import { factorial } from "../src";

describe("factorial", () => {
  it("should return the factorial of n", () => {
    const result = factorial(6);
    assert.equal(result, 720);
  });
});

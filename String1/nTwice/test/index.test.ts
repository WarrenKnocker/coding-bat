import { assert } from "chai";
import { nTwice } from "../src";

describe("nTwice", () => {
  it("Should return Helo ", () => {
    const result = nTwice("Hello", 2);
    assert.equal(result, "Helo");
  });
  it("Should return Choate ", () => {
    const result = nTwice("Chocolate", 3);
    assert.equal(result, "Choate");
  });
  it("Should return Ce ", () => {
    const result = nTwice("Chocolate", 1);
    assert.equal(result, "Ce");
  });
});

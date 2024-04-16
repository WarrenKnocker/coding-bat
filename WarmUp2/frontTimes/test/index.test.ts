import { assert } from "chai";
import { describe } from "mocha";
import { frontTimes } from "../src";

/*
Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, 
or whatever is there if the string is less than length 3. Return n copies of the front;


frontTimes("Chocolate", 2) → "ChoCho"
frontTimes("Chocolate", 3) → "ChoChoCho"
frontTimes("Abc", 3) → "AbcAbcAbc"
*/

describe("frontTimes", () => {
  it("Should return 2 copies of the first 3 chars", () => {
    const result = frontTimes("Chocolate", 2);
    assert.equal(result, "ChoCho");
  });
  it("Should return 3 copies of the first 3 chars", () => {
    const result = frontTimes("Chocolate", 3);
    assert.equal(result, "ChoChoCho");
  });
  it("Should return 3 copies of the first 3 chars", () => {
    const result = frontTimes("Abc", 3);
    assert.equal(result, "AbcAbcAbc");
  });
});

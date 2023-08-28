import { assert } from "chai";
import { describe } from "mocha";
import { noTriples } from "../src";

/*
Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.


noTriples([1, 1, 2, 2, 1]) → true
noTriples([1, 1, 2, 2, 2, 1]) → false
noTriples([1, 1, 1, 2, 2, 2, 1]) → false
*/

describe("noTriples", () => {
  it("Should true if there are no tripples in [1, 1, 2, 2, 1] ", () => {
    const result = noTriples([1, 1, 2, 2, 1]);
    assert.equal(result, true);
  });
  it("Should flase if there are tripples in [1, 1, 2, 2, 2, 1] ", () => {
    const result = noTriples([1, 1, 2, 2, 2, 1]);
    assert.equal(result, false);
  });
  it("Should flase if there are tripples in [1, 1, 1, 2, 2, 2, 1] ", () => {
    const result = noTriples([1, 1, 1, 2, 2, 2, 1]);
    assert.equal(result, false);
  });
});

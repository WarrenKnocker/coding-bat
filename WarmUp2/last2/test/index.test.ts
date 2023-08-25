import { assert } from "chai";
import { describe } from "mocha";
import { last2 } from "../src";

/*
Given a string, return the count of the number of times that a substring length 2 appears in the string
 and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).


last2("hixxhi") → 1
last2("xaxxaxaxx") → 1
last2("axxxaaxx") → 2
*/

describe("last2", () => {
  it("Should return 1 if given the string 'hixxhi' ", () => {
    const result = last2("hixxhi");
    assert.equal(result, 1);
  });
  it("Should return 1 if given the string 'xaxxaxaxx' ", () => {
    const result = last2("xaxxaxaxx");
    assert.equal(result, 1);
  });
  it("Should return 2 if given the string 'axxxaaxx' ", () => {
    const result = last2("axxxaaxx");
    assert.equal(result, 2);
  });
  it("Should return 0 if the string length is 2", () => {
    const result = last2("ba");
    assert.equal(result, 0);
  });
});

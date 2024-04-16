import { assert } from "chai";
import { missingChar } from "../src/index";

/*
Given a non-empty string and an int n, return a new string where the char at index n has been removed. 
The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).


missingChar("kitten", 1) → "ktten"
missingChar("kitten", 0) → "itten"
missingChar("kitten", 4) → "kittn"
*/

describe("missingChar", () => {
  it("Should return 'ktten' if char index [1] is removed ", () => {
    const result = missingChar("kitten", 1);
    assert.equal(result, "ktten");
  });

  it("Should return 'itten' if char index [0] is removed ", () => {
    const result = missingChar("kitten", 0);
    assert.equal(result, "itten");
  });

  it("Should return 'kittn' if char index [4] is removed ", () => {
    const result = missingChar("kitten", 4);
    assert.equal(result, "kittn");
  });
});

import { assert } from "chai";
import { describe } from "mocha";
import { stringMatch } from "../src";

/*
Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. 
So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.


stringMatch("xxcaazz", "xxbaaz") → 3
stringMatch("abc", "abc") → 2
stringMatch("abc", "axc") → 0
*/

describe("stringMatch", () => {
  it("should return 3 if given ('xxcaazz', 'xxbaaz')", () => {
    const result = stringMatch("xxcaazz", "xxbaaz");
    assert.equal(result, 3);
  });
  it("should return 2 if given ('abc', 'abc')", () => {
    const result = stringMatch("abc", "abc");
    assert.equal(result, 2);
  });
  it("should return 0 if given ('abc', 'axc')", () => {
    const result = stringMatch("abc", "axc");
    assert.equal(result, 0);
  });
});

import { assert } from "chai";
import { describe } from "mocha";
import { stringSplosion } from "../src";

/*

Given a non-empty string like "Code" return a string like "CCoCodCode".


stringSplosion("Code") → "CCoCodCode"
stringSplosion("abc") → "aababc"
stringSplosion("ab") → "aab"
*/

describe("stringSplosion", () => {
  it("Should return 'CCoCodCode' if given the string 'Code' ", () => {
    const result = stringSplosion("Code");
    assert.equal(result, "CCoCodCode");
  });
  it("Should return 'aababc' if given the string 'abc' ", () => {
    const result = stringSplosion("abc");
    assert.equal(result, "aababc");
  });
  it("Should return 'aab' if given the string 'ab' ", () => {
    const result = stringSplosion("ab");
    assert.equal(result, "aab");
  });
});

import { assert } from "chai";
import { backAround } from "../src/index";

/* 

Given a string, take the last char and return a new string with the last char added at the front and back, 
so "cat" yields "tcatt". The original string will be length 1 or more.


backAround("cat") → "tcatt"
backAround("Hello") → "oHelloo"
backAround("a") → "aaa"

*/

describe("backAround", () => {
  it("Should return 'tcatt' when given the string parameter 'cat' ", () => {
    const result = backAround("cat");
    assert.equal(result, "tcatt");
  });

  it("Should return 'oHelloo' when given the string parameter 'Hello' ", () => {
    const result = backAround("Hello");
    assert.equal(result, "oHelloo");
  });

  it("Should return 'aaa' when given the string parameter 'a' ", () => {
    const result = backAround("a");
    assert.equal(result, "aaa");
  });
});

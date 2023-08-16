import { assert, should } from "chai";
import { front3 } from "../src/index";

/*

Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. 
Return a new string which is 3 copies of the front.


front3("Java") → "JavJavJav"
front3("Chocolate") → "ChoChoCho"
front3("abc") → "abcabcabc"


*/

describe("front3", () => {
  it("should return 'JavJavJav' when string parameter for front3 is 'Java' ", () => {
    const result = front3("Java");
    assert.equal(result, "JavJavJav");
  });

  it("should return 'ChoChoCho' when string parameter for front3 is 'chocolate' ", () => {
    const result = front3("Chocolate");
    assert.equal(result, "ChoChoCho");
  });

  it("should return 'abcabcabc' when string parameter for front3 is 'abc' ", () => {
    const result = front3("abc");
    assert.equal(result, "abcabcabc");
  });

  it("Should return 'aaa' when given 'a'. Testing a string less than 2 characters", () => {
    const result = front3("a");
    assert.equal(result, "aaa");
  });
});

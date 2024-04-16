import { assert } from "chai";
import { front22 } from "../src/index";

/* 
Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, 
so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.


front22("kitten") → "kikittenki"
front22("Ha") → "HaHaHa"
front22("abc") → "ababcab"

*/

describe("Front22", () => {
  it("Should return 'kikittenki' if given the string parameter 'kitten' ", () => {
    const result = front22("kitten");
    assert.equal(result, "kikittenki");
  });

  it("Should return 'HaHaHa' if given the string parameter 'Ha' ", () => {
    const result = front22("Ha");
    assert.equal(result, "HaHaHa");
  });

  it("Should return 'ababcab' if given the string parameter 'abc' ", () => {
    const result = front22("abc");
    assert.equal(result, "ababcab");
  });

  it("Should use what ever character is given when string length is less than 2", () => {
    const result = front22("a");
    assert.equal(result, "aaa");
  });
});

import { assert } from "chai";
import { describe } from "mocha";
import { stringBits } from "../src";

/*
Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".


stringBits("Hello") → "Hlo"
stringBits("Hi") → "H"
stringBits("Heeololeo") → "Hello"
*/

describe("stringBits", () => {
  it("Should return 'Hlo' if given the string 'Hello' ", () => {
    const result = stringBits("Hello");
    assert.equal(result, "Hlo");
  });
  it("Should return 'H' if given the string 'Hi' ", () => {
    const result = stringBits("Hi");
    assert.equal(result, "H");
  });
  it("Should return 'Hello' if given the string 'Heeololeo' ", () => {
    const result = stringBits("Heeololeo");
    assert.equal(result, "Hello");
  });
});

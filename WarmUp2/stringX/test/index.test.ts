import { assert } from "chai";
import { describe } from "mocha";
import { stringX } from "../src";

/*

Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.


stringX("xxHxix") → "xHix"
stringX("abxxxcd") → "abcd"
stringX("xabxxxcdx") → "xabcdx"
*/

describe("stringX", () => {
  it("Should return xxHxix without any x's after the first char and before the last char", () => {
    const result = stringX("xxHxix");
    assert.equal(result, "xHix");
  });
  it("Should return abxxxcd without any x's after the first char and before the last char", () => {
    const result = stringX("abxxxcd");
    assert.equal(result, "abcd");
  });
  it("Should return xabxxxcdx without any x's after the first char and before the last char", () => {
    const result = stringX("xabxxxcdx");
    assert.equal(result, "xabcdx");
  });
});

import { describe } from "mocha";
import { assert } from "chai";
import { makeOutWord } from "../src";

describe("makeOutWord", () => {
  it("should return <<Yay>>", () => {
    const result = makeOutWord("<<>>", "Yay");
    assert.equal(result, "<<Yay>>");
  });
  it("should return <<WooHoo>>", () => {
    const result = makeOutWord("<<>>", "WooHoo");
    assert.equal(result, "<<WooHoo>>");
  });
  it("should return [[word]]", () => {
    const result = makeOutWord("[[]]", "word");
    assert.equal(result, "[[word]]");
  });
});

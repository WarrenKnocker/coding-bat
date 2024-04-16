import { makeTags } from "../src";
import { describe } from "mocha";
import { assert } from "chai";

describe("makeTags", () => {
  it("should return <i>Yay</i> ", () => {
    const result = makeTags("i", "Yay");
    assert.equal(result, "<i>Yay</i>");
  });
  it("should return <i>Hello</i> ", () => {
    const result = makeTags("i", "Hello");
    assert.equal(result, "<i>Hello</i>");
  });
  it("should return <cite>Yay</cite> ", () => {
    const result = makeTags("cite", "Yay");
    assert.equal(result, "<cite>Yay</cite>");
  });
});

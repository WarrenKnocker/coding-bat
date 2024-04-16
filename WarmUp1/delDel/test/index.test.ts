import { assert, should } from "chai";
import { delDel } from "../src/index";

/*
Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.


delDel("adelbc") → "abc"
delDel("adelHello") → "aHello"
delDel("adedbc") → "adedbc"
*/

describe("delDel", () => {
  it("Should return 'abc' if given the sting parameter (adelbc)", () => {
    const result = delDel("adelbc");
    assert.equal(result, "abc");
  });

  it("Should return 'aHello' if given the string parameter (adelHello)", () => {
    const result = delDel("adelHello");
    assert.equal(result, "aHello");
  });

  it("Should return 'adedbc' if given the parameter (adedbc)", () => {
    const result = delDel("adedbc");
    assert.equal(result, "adedbc");
  });
});

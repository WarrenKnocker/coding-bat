import { assert, should } from "chai";
import { frontBack } from "../src/index";

/*
Given a string, return a new string where the first and last chars have been exchanged.


frontBack("code") → "eodc"
frontBack("a") → "a"
frontBack("ab") → "ba"
*/

describe("frontBack", () => {
  it("Should return 'eodc' if given 'code' ", () => {
    const result = frontBack("code");
    assert.equal(result, "eodc");
  });

  it("Should return 'a' if given 'a'", () => {
    const result = frontBack("a");
    assert.equal(result, "a");
  });

  it("Should return 'a' if given 'ba'", () => {
    const result = frontBack("ba");
    assert.equal(result, "ab");
  });
});

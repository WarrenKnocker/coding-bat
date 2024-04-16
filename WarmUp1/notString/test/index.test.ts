import { assert, should } from "chai";
import { notString } from "../src/index";

/*
Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged. Note: use .equals() to compare 2 strings.


notString("candy") → "not candy"
notString("x") → "not x"
notString("not bad") → "not bad"

*/

describe("notString", () => {
  it("Should return 'not candy' if given the string parameter 'candy' ", () => {
    const result = notString("candy");
    assert.equal(result, "not candy");
  });

  it("Should return 'not x' if given the string parameter 'x' ", () => {
    const result = notString("x");
    assert.equal(result, "not x");
  });

  it("Should return false if given the string parameter 'hello there' ", () => {
    const result = notString("not bad");
    assert.equal(result, "not bad");
  });
});

import { assert } from "chai";
import { notString } from "../src/index";

/*

Given a string, return a new string where "not " has been added to the front. However, 
if the string already begins with "not", return the string unchanged. Note: use .equals() to compare 2 strings.


notString("candy") → "not candy"
notString("x") → "not x"
notString("not bad") → "not bad"
*/

describe("notString", () => {
  it("Should return 'not candy' if notString paramater is 'çandy' ", () => {
    const result = notString("candy");
    assert.equal(result, "not candy");
  });

  it("Should return 'not x' if notString paramater is 'x' ", () => {
    const result = notString("x");
    assert.equal(result, "not x");
  });

  it("Should return 'not bad' if notString paramter is 'not bad", () => {
    const result = notString("not bad");
    assert.equal(result, "not bad");
  });
});

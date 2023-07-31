import { assert, should } from "chai";
import { startOz } from "../src/index";

/*

Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so "ozymandias" yields "oz".


startOz("ozymandias") → "oz"
startOz("bzoo") → "z"
startOz("oxx") → "o"
*/

describe("startOz", () => {
  it("Should return 'oz' when given the string parameter 'ozymandias'", () => {
    const result = startOz("ozymandias");
    assert.equal(result, "oz");
  });

  it("Should return 'z' when given the string parameter 'bzoo'", () => {
    const result = startOz("bzoo");
    assert.equal(result, "z");
  });

  it("Should return 'o' when given the string parameter 'oxx'", () => {
    const result = startOz("oxx");
    assert.equal(result, "o");
  });
});

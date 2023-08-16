import { assert, should } from "chai";
import { stringE } from "../src/index";

/* 
Return true if the given string contains between 1 and 3 'e' chars.
*/

describe("stringE", () => {
  it("should return true if given ('Hello')", () => {
    const result = stringE("Hello");
    assert.equal(result, true);
  });

  it("should return true if given ('Heelle')", () => {
    const result = stringE("Heelle");
    assert.equal(result, true);
  });

  it("should return false if given('Heelele')", () => {
    const result = stringE("Heelele");
    assert.equal(result, false);
  });
});

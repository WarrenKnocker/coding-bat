import { assert, should } from "chai";
import { mixStart } from "../src/index";

/*
Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.


mixStart("mix snacks") → true
mixStart("pix snacks") → true
mixStart("piz snacks") → false
*/

describe("mixStart", () => {
  it("Should return true if given the string parameter 'mix snacks' ", () => {
    const result = mixStart("mix snacks");
    assert.equal(result, true);
  });

  it("Should return true if given the string parameter 'pix snacks' ", () => {
    const result = mixStart("pix snacks");
    assert.equal(result, true);
  });

  it("Should return false if given the string parameter 'piz snacks' ", () => {
    const result = mixStart("piz snacks");
    assert.equal(result, false);
  });
});

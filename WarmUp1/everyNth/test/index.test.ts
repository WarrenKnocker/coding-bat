import { assert, should } from "chai";
import { everyNth } from "../src/index";

/* 

Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.


everyNth("Miracle", 2) → "Mrce"
everyNth("abcdefg", 2) → "aceg"
everyNth("abcdefg", 3) → "adg"
*/

describe("everyNth", () => {
  it("Should return 'Mrce' if given the string parameter ('Miracle', 2)'", () => {
    const result = everyNth("Miracle", 2);
    assert.equal(result, "Mrce");
  });
  it("Should return 'aceg' if given the string parameter ('abcdefg', 2)", () => {
    const result = everyNth("abcdefg", 2);
    assert.equal(result, "aceg");
  });
  it("Should return 'adg' if given the string parameter ('abcdefg', 3)", () => {
    const result = everyNth("abcdefg", 3);
    assert.equal(result, "adg");
  });
});

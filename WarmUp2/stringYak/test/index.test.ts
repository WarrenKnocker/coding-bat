import { assert } from "chai";
import { describe } from "mocha";
import { stringYak } from "../src";

/*
Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.


stringYak("yakpak") → "pak"
stringYak("pakyak") → "pak"
stringYak("yak123ya") → "123ya"
*/

describe("stringYak", () => {
  it("Should return 'pak' from 'yakpak' ", () => {
    const result = stringYak("yakpak");
    assert.equal(result, "pak");
  });
  it("Should return 'pak' from 'pakyak' ", () => {
    const result = stringYak("pakyak");
    assert.equal(result, "pak");
  });
  it("Should return '123ya' from 'yak123ya' ", () => {
    const result = stringYak("yak123ya");
    assert.equal(result, "123ya");
  });
});

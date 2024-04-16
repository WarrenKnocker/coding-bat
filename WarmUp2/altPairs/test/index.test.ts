import { assert } from "chai";
import { describe } from "mocha";
import { altPairs } from "../src";

/*
Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".


altPairs("kitten") → "kien"
altPairs("Chocolate") → "Chole"
altPairs("CodingHorror") → "Congrr"
*/

describe("altPairs", () => {
  it("Should return chars at indexes 0,1,4,5,8,9 'kitten' -> 'kien' ", () => {
    const result = altPairs("kitten");
    assert.equal(result, "kien");
  });
  it("Should return chars at indexes 0,1,4,5,8,9 'Chocolate' -> 'Chole' ", () => {
    const result = altPairs("Chocolate");
    assert.equal(result, "Chole");
  });
  it("Should return chars at indexes 0,1,4,5,8,9 'CodingHorror' -> 'Congrr' ", () => {
    const result = altPairs("CodingHorror");
    assert.equal(result, "Congrr");
  });
});

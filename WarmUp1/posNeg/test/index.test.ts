import { assert } from "chai";
import { posNeg } from "../src/index";

/*
Given 2 int values, return true if one is negative and one is positive. 
Except if the parameter "negative" is true, then return true only if both are negative.


posNeg(1, -1, false) → true
posNeg(-1, 1, false) → true
posNeg(-4, -5, true) → true

*/

describe("posNeg", () => { 

    it("Should return ture if firstParameter is positive and second paramter is negative", () => { 
        const result = posNeg(1, -1, false);
        assert.equal(result, true);
    })

    it("Should return true if firstParameter is negative and Second Parameter is positive", () => { 
        const result = posNeg(-1, 1, false);
        assert.equal(result, true)

    })

    it("Should return true if firstParamater and secondParameter is negative and the negParamter is also true", () => {
        const result = posNeg(-4, -5, true);
        assert.equal(result, true);
    
    })
})
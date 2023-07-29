import { assert } from "chai";
import { diff21 } from "../src/index";


describe("diff21", () => {

    // diff21(19) → 2
    it ("should return 2 if UserInput is = 19", () => {
        const result = diff21(19);
        assert.equal(result, 2);
    })

    //  diff21(10) → 11
    it ("should return 11 if UserInput is = 10", () => {
        const result = diff21(10);
        assert.equal(result, 11);
    })


    // diff21(21) → 0
    it ("should return 21 if UserInput is = 0", () => {
        const result = diff21(21);
        assert.equal(result, 0);
    })

})
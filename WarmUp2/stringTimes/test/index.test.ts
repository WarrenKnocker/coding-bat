import { assert } from "chai";
import { stringTimes } from "../src/index";

/*
Given a string and a non-negative int n, return a larger string that is n copies of the original string.


stringTimes("Hi", 2) → "HiHi"
stringTimes("Hi", 3) → "HiHiHi"
stringTimes("Hi", 1) → "Hi"
*/

describe("stringTimes",()=>{

 it("should provide 2 sets of 'Hi' if the second parameter is set to 2", ()=>{
    const result = stringTimes("Hi", 2);
    assert(result, "HiHi")
 });

 it("should provide 3 sets of 'Hi' if the second parameter is set to 3", ()=>{
    const result = stringTimes("Hi", 3);
    assert(result, "HiHiHi")
 });

 it("should provide 1 set of 'Hi' if the second parameter is set to 1", ()=>{
    const result = stringTimes("Hi", 2);
    assert(result, "Hi")
 });


});
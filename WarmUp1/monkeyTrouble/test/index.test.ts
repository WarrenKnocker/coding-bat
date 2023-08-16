/*

We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. 
We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.


monkeyTrouble(true, true) → true
monkeyTrouble(false, false) → true
monkeyTrouble(true, false) → false

*/

import { assert } from "chai";
import { monkeyTrouble } from "../src/index";

describe("monkeyTrouble", () => {
  it("should display true if aSmile and bSmile are both true", () => {
    const result = monkeyTrouble(true, true);
    assert.equal(result, true);
  });

  it("should display true if aSmile and bSmile are both false", () => {
    const result = monkeyTrouble(false, false);
    assert.equal(result, true);
  });

  it("should display false if aSmile and bSmile have different results ", () => {
    const result = monkeyTrouble(true, false);
    assert.equal(result, false);
  });
});

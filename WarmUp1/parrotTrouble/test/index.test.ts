/*


We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. 
We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.


parrotTrouble(true, 6) → true
parrotTrouble(true, 7) → false
parrotTrouble(false, 6) → false

*/

import { assert } from "chai";
import {parrotTrouble} from "../src/index";


describe("ParrotTrouble", () => { 

  it("Should display true if the time is within 7 to 20 otherwise false", () => {
    const result = parrotTrouble(true, 6);
    assert.equal(result, true);
  });

  it("Should display true if the time is within 7 to 20 otherwise false", () => {
    const result = parrotTrouble(true, 7);
    assert.equal(result, false)
  });

  it("Should display true if the time is within 7 to 20 otherwise false", () => { 
    const result = parrotTrouble(false, 6);
    assert.equal(result, false);
  })

})
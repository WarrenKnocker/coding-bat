import { assert, should } from "chai";
import { startHi } from "../src/index";

/*


Given a string, return true if the string starts with "hi" and false otherwise.


startHi("hi there") → true
startHi("hi") → true
startHi("hello hi") → false

*/

describe("startHi", () => {
  it("Should return true if given the string parameter 'hi there' ", () => {
    const result = startHi("hi there");
    assert.equal(result, true);
  });

  it("Should return true if given the string parameter 'hi' ", () => {
    const result = startHi("hi");
    assert.equal(result, true);
  });

  it("Should return false if given the string parameter 'hello there' ", () => {
    const result = startHi("hello hi");
    assert.equal(result, false);
  });
});

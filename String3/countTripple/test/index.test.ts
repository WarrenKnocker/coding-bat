import { assert } from "chai";
import { countTripple } from "../src";

describe("countTripple", () => {
  it("Should return 1", () => {
    const result = countTripple("abcXXXabc");
    assert.equal(result, 1);
  });
  it("Should return 3", () => {
    const result = countTripple("xxxabyyyycd");
    assert.equal(result, 3);
  });
  it("Should return 0", () => {
    const result = countTripple("a");
    assert.equal(result, 0);
  });
});

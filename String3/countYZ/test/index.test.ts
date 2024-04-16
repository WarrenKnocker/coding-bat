import { assert } from "chai";
import { countYZ } from "../src";

describe("counterYZ", () => {
  it("Should return 2", () => {
    const result = countYZ("fez day");
    assert.equal(result, 2);
  });
  it("Should return 2", () => {
    const result = countYZ("day fez");
    assert.equal(result, 2);
  });
  it("Should return 2", () => {
    const result = countYZ("day fyyyz");
    assert.equal(result, 2);
  });
});

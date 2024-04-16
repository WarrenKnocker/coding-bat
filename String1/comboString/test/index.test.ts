import { assert } from "chai";
import { comboString } from "../src";

describe("comboString", () => {
  it("Should return hiHellohi", () => {
    const reult = comboString("Hello", "hi");
    assert.equal(reult, "hiHellohi");
  });
  it("Should return 'hiHellohi", () => {
    const reult = comboString("hi", "Hello");
    assert.equal(reult, "hiHellohi");
  });
  it("Should return 'baaab", () => {
    const reult = comboString("aaa", "b");
    assert.equal(reult, "baaab");
  });
});

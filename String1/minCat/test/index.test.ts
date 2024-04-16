import { assert } from "chai";
import { minCat } from "../src";

describe("minCat", () => {
  it("Should return loHi", () => {
    const result = minCat("Hello", "Hi");
    assert.equal(result, "loHi");
  });
  it("Should return ellojava", () => {
    const result = minCat("Hello", "java");
    assert.equal(result, "ellojava");
  });
  it("Should return javaello", () => {
    const result = minCat("java", "Hello");
    assert.equal(result, "javaello");
  });
});

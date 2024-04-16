import { describe } from "mocha";
import { assert } from "chai";
import { makeAbba } from "../src";

describe("makeAbba", () => {
  it("should return HiByeByeHi", () => {
    const result = makeAbba("Hi", "Bye");
    assert.equal(result, "HiByeByeHi");
  });
  it("should return YoAliceAliceYo", () => {
    const result = makeAbba("Yo", "Alice");
    assert.equal(result, "YoAliceAliceYo");
  });
  it("should return WhatUpUpWhat", () => {
    const result = makeAbba("What", "Up");
    assert.equal(result, "WhatUpUpWhat");
  });
});

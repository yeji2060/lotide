const assert = require('chai').assert;
const head = require('../head');


describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns 6 for [6, 7, 8]", () => {
    assert.strictEqual(head([6, 7, 8]), 6)
  })

  it("returns Hello for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  })
});




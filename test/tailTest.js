const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  
  it("returns [4, 5] for [3, 4, 5]", () => {
    assert.deepEqual(tail([3, 4, 5]), [4, 5]);
  });

  it("returns [Lighthouse, Labs] for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });


  it("returns empty array for []", () => {
    assert.deepEqual(tail([]), [])
  })

  it("make sure the original array was not altered by the tail function", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = tail(words);
    assert.deepEqual(result, ["world", "lighthouse"]);
    assert.strictEqual(words.length, 3);
  });
 
});